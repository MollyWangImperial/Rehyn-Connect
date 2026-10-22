import type { LibraryCondition, LibraryItem, VideoStory } from "../library";
import { article, BACKCARE, CSP, FMA_UK, BSSH, HMSA, LUPUS_UK, NASS, NHS, NRAS, PAGETS_ASSOCIATION, PAPAA, piece, PMRGCA_UK, RCPOD, ROS, SCOLIOSIS_SR, SJOGRENS_UK, source, SRUK, VERSUS_ARTHRITIS } from "../library-helpers";

// Bones, joints & muscles, the rest of the section: psoriatic arthritis, axial spondyloarthritis, polymyalgia
// rheumatica and lupus; hip fracture and Paget's disease of bone; neck pain and spinal stenosis; fibromyalgia and
// frozen shoulder; hip and knee replacement; tennis elbow and plantar fasciitis. Same shape as body.ts.

type Content = NonNullable<LibraryCondition["content"]>;
/** `prefix`, `facts`, `watch` and `videoStories` are added once the checked answers and videos exist (each piece's
    answer id is the prefix plus the piece id). */
type Outline = {
  id: string; title: string; summary: string; keywords: string[]; understand: Item[]; recover: Item[]; liveWell: Item[];
  sources: Content["sources"]; askDoctor: string[]; related: Content["related"]; recoverTitle?: string;
  prefix?: string; facts?: string[]; watch?: LibraryItem[]; videoStories?: VideoStory[];
};
type Item = [id: string, title: string, minutes: number, keywords: string[], blurb?: string];

/** A condition page from its outline: the first understand piece carries the blurb and "With a diagram". */
function condition(outline: Outline): LibraryCondition {
  const items = (list: Item[], first: boolean) => list.map(([id, title, minutes, keywords, blurb], index) =>
    article(id, title, minutes, { ...(first && index === 0 ? { blurb, extra: "With a diagram" } : {}), ...(outline.prefix ? { learnId: outline.prefix + id } : {}), keywords }));
  return {
    id: outline.id,
    title: outline.title,
    summary: outline.summary,
    facts: outline.facts ?? [],
    keywords: outline.keywords,
    content: {
      understand: items(outline.understand, true),
      recoverTitle: outline.recoverTitle ?? "Treat & manage",
      recover: items(outline.recover, false),
      liveWell: items(outline.liveWell, false),
      watch: outline.watch ?? [piece("video", "explained", `${outline.title} explained`, 3)],
      sources: outline.sources,
      stories: [],
      ...(outline.videoStories ? { videoStories: outline.videoStories } : {}),
      askDoctor: outline.askDoctor,
      related: outline.related,
    },
  };
}

export const psoriaticArthritis = condition({
  id: "psoriatic-arthritis",
  prefix: "psa-",
  facts: ["Affects about 1 in 4 with psoriasis", "About 325,000 people in the UK", "Men and women equally affected"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-auk-what-is-psa", title: "What is psoriatic arthritis?", kind: "video", duration: "3:08", url: "https://www.youtube.com/watch?v=y6_D3YJi92k", extra: "Arthritis UK explains psoriatic arthritis", publisher: "Arthritis UK", keywords: ["psoriatic arthritis", "symptoms", "joints"] },
    { id: "yt-nhs-psoriasis", title: "Psoriasis | NHS", kind: "video", duration: "3:23", url: "https://www.youtube.com/watch?v=AznhU_SeWWM", extra: "A dermatologist explains psoriasis", publisher: "NHS", keywords: ["psoriasis", "skin", "treatment"] },
    { id: "yt-psuk-coates-psa", title: "Professor Laura Coates - An introduction to Psoriatic Arthritis", kind: "video", duration: "31:00", url: "https://www.youtube.com/watch?v=w3wEkh-wnbQ", extra: "A consultant rheumatologist's introduction", publisher: "Psoriasis UK", keywords: ["psoriatic arthritis", "rheumatologist", "research"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-jack-psa", person: "Jack", title: "From misdiagnosis to relief: Jack's psoriatic arthritis story", channel: "Arthritis UK", url: "https://www.youtube.com/watch?v=N7I6NygBuGo", duration: "3:43", about: "Jack shares his diagnosis story of living with the pain and stigma of psoriatic arthritis." },
    { id: "yt-janine-psa", person: "Janine", title: "How I manage my Psoriasis and Psoriatic Arthritis - Janine Price", channel: "Psoriasis UK", url: "https://www.youtube.com/watch?v=Kcoz7nlf9ck", duration: "2:58", about: "Janine shares her experience of using different treatments for her psoriasis and psoriatic arthritis, and talks about what works for her now." },
    { id: "yt-mark-psa", person: "Mark", title: "Mark Finan - Living with Psoriatic Arthritis", channel: "Arthritis Ireland", url: "https://www.youtube.com/watch?v=ppv1Mpc-9No", duration: "4:51", about: "Mark first noticed something was wrong at 33, and a GP who saw that his fingernails were discoloured sent him for tests that led to a diagnosis of psoriatic arthritis." },
  ],
  // end of wiring
  title: "Psoriatic arthritis",
  summary: "Joint pain, stiffness and swelling in some people who have the skin condition psoriasis. It can affect any joint, the tendons and the nails, and it comes and goes in flares. Treating it early helps prevent lasting joint damage.",
  keywords: ["psoriatic arthritis", "psoriasis", "joint pain", "swollen fingers", "nails", "dactylitis"],
  understand: [
    ["what-it-is", "What psoriatic arthritis is", 3, ["psoriasis", "immune", "joints"], "Skin, joints, tendons and nails."],
    ["symptoms", "Symptoms: joints, tendons, nails and skin", 3, ["swelling", "nails", "tendons"]],
    ["diagnosis", "How it is diagnosed", 3, ["diagnosis", "x-ray", "blood test"]],
    ["flares", "Flares: what sets them off", 3, ["flares", "triggers"]],
  ],
  recover: [
    ["dmards", "DMARDs such as methotrexate", 4, ["methotrexate", "dmards", "sulfasalazine"]],
    ["biologics", "Biologics and newer medicines", 4, ["biologics", "injections"]],
    ["pain-relief", "Painkillers and steroid injections", 3, ["painkillers", "nsaids", "steroids"]],
    ["skin", "Looking after the skin as well", 3, ["skin", "psoriasis", "creams"]],
  ],
  liveWell: [
    ["exercise", "Exercise and staying active", 3, ["exercise", "activity"]],
    ["fatigue", "Fatigue", 3, ["tired", "fatigue"]],
    ["heart", "Heart health and other conditions", 3, ["heart", "weight", "diabetes"]],
    ["work", "Work and everyday life", 3, ["work", "employer"]],
  ],
  sources: [source(NHS, "Psoriatic arthritis"), PAPAA, VERSUS_ARTHRITIS],
  askDoctor: ["Is my arthritis active, and how are we measuring it?", "Which medicines would treat both my skin and my joints?", "What should I do in a flare?", "Can I see a rheumatology nurse or physiotherapist?"],
  related: [{ groupId: "arthritis", conditionId: "rheumatoid" }, { groupId: "arthritis", conditionId: "axial-spondyloarthritis" }, { groupId: "heart-attack", conditionId: "coronary-heart-disease" }],
});

export const axialSpondyloarthritis = condition({
  id: "axial-spondyloarthritis",
  prefix: "axspa-",
  facts: ["About 1 in 200 UK adults have it", "Usually starts between 18 and 40", "Better with exercise, worse with rest"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-nass-not-just-back-pain", title: "Axial Spondyloarthritis - Not just back pain", kind: "video", duration: "1:57", url: "https://www.youtube.com/watch?v=oNi5e5RCfrs", extra: "How axial SpA affects the body", publisher: "National Axial Spondyloarthritis Society", keywords: ["eyes", "bowel", "skin"] },
    { id: "yt-nass-in-a-nutshell", title: "Axial SpA in a nutshell - a brief overview of axial spondyloarthritis and ankylosing spondylitis", kind: "video", duration: "11:20", url: "https://www.youtube.com/watch?v=LV6dr3hrp2k", extra: "Symptoms, treatment and support explained", publisher: "National Axial Spondyloarthritis Society", keywords: ["overview", "symptoms", "treatment"] },
    { id: "yt-nass-neck-back-exercises", title: "Neck and back exercises for axial spondyloarthritis, including ankylosing spondylitis", kind: "video", duration: "16:52", url: "https://www.youtube.com/watch?v=MKChAPUtnLU", extra: "A physiotherapist's neck and back exercises", publisher: "National Axial Spondyloarthritis Society", keywords: ["exercise", "neck", "back"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-hannah-axspa", person: "Hannah", title: "Me and axial SpA : Hannah's story (Act on axial SpA)", channel: "National Axial Spondyloarthritis Society", url: "https://www.youtube.com/watch?v=zqnkAPNeM2M", duration: "3:30", about: "Hannah shares her journey to diagnosis and what life is like now, living with axial SpA." },
    { id: "yt-mel-axspa", person: "Mel", title: "Mel's story of getting an axial SpA diagnosis (Act on axial SpA)", channel: "National Axial Spondyloarthritis Society", url: "https://www.youtube.com/watch?v=bJBjAOUTaQE", duration: "5:49", about: "Mel waited 14 years to find out why she was in so much pain and constantly exhausted, and talks about how the right treatment and care let her be the mum she wants to be." },
    { id: "yt-poppy-axspa", person: "Poppy", title: "Poppy's story ankylosing spondylitis (axial spondyloarthritis) AS", channel: "National Axial Spondyloarthritis Society", url: "https://www.youtube.com/watch?v=RcGcZUGbgm0", duration: "5:33", about: "Poppy has lived with ankylosing spondylitis since her late teens and talks about how she manages to live well with the condition." },
  ],
  // end of wiring
  title: "Axial spondyloarthritis (ankylosing spondylitis)",
  summary: "An inflammatory condition that mainly affects the spine and the joints where it meets the pelvis, causing back pain and stiffness that is worse with rest and better with movement. Exercise and medicines can control it well.",
  keywords: ["axial spondyloarthritis", "ankylosing spondylitis", "axspa", "as", "back pain", "stiffness"],
  understand: [
    ["what-it-is", "What axial spondyloarthritis is", 3, ["spine", "inflammation", "immune"], "Inflamed joints in the spine and pelvis."],
    ["back-pain", "Inflammatory back pain: how it is different", 3, ["back pain", "morning stiffness"]],
    ["diagnosis", "Diagnosis, and why it can take years", 3, ["diagnosis", "mri", "hla-b27"]],
    ["beyond-spine", "Beyond the spine: eyes, gut and skin", 3, ["uveitis", "eyes", "bowel"]],
  ],
  recover: [
    ["exercise", "Daily exercise and stretching", 4, ["exercise", "stretching", "posture"]],
    ["nsaids", "Anti-inflammatory painkillers", 3, ["nsaids", "ibuprofen", "naproxen"]],
    ["biologics", "Biologics and other medicines", 4, ["biologics", "anti-tnf"]],
    ["physio", "Physiotherapy and hydrotherapy", 3, ["physiotherapy", "hydrotherapy"]],
  ],
  liveWell: [
    ["posture", "Posture, sleep and the working day", 3, ["posture", "sleep", "desk"]],
    ["fatigue", "Fatigue and flares", 3, ["fatigue", "flares"]],
    ["eyes", "Eye inflammation: act quickly", 2, ["uveitis", "red eye", "urgent"]],
    ["support", "Support and self-management", 2, ["support", "groups"]],
  ],
  sources: [source(NHS, "Ankylosing spondylitis"), NASS, VERSUS_ARTHRITIS],
  askDoctor: ["Is my back pain inflammatory, and do I need an MRI?", "Which exercises suit me, and can I see a physiotherapist?", "Would a biologic help me?", "What should I do if my eye becomes red and painful?"],
  related: [{ groupId: "back-neck", conditionId: "back-pain" }, { groupId: "arthritis", conditionId: "psoriatic-arthritis" }, { groupId: "gut", conditionId: "ibs" }],
});

export const polymyalgiaRheumatica = condition({
  id: "polymyalgia-rheumatica",
  prefix: "pmr-",
  facts: ["Most people diagnosed are over 65", "Up to 1 in 5 develop GCA", "12 months to 2 years of steroids"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-topdoctors-pmr", title: "Polymyalgia rheumatica: symptoms and treatment explained", kind: "video", duration: "3:39", url: "https://www.youtube.com/watch?v=FUhoGulVJJg", extra: "a GP on symptoms, diagnosis, treatment", publisher: "Top Doctors UK", keywords: ["polymyalgia rheumatica", "symptoms", "treatment"] },
    { id: "yt-mayo-pmr", title: "Living well with Polymyalgia Rheumatica", kind: "video", duration: "1:58", url: "https://www.youtube.com/watch?v=uJl42Zq_pxg", extra: "a rheumatologist on stiffness and steroids", publisher: "Mayo Clinic", keywords: ["polymyalgia rheumatica", "stiffness", "steroids"] },
    { id: "yt-alberta-pmr", title: "Polymyalgia Rheumatica: An Overview of the Disease and Management", kind: "video", duration: "4:00", url: "https://www.youtube.com/watch?v=k1DJYVxlsOM", extra: "what PMR is and how it is treated", publisher: "AlbertaRheumatology", keywords: ["polymyalgia rheumatica", "management", "over 50"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-linda-pmr", person: "Linda", title: "S6, Ep 29- Linda’s Polymyalgia Rheumatica Journey: From Extreme Pain to Advocate", channel: "CreakyJoints", url: "https://www.youtube.com/watch?v=17K3k5O9PV4", duration: "14:30", about: "Linda Rinaldi describes how full body pain led within days to a diagnosis of polymyalgia rheumatica, a condition she had never heard of, and how she became a health advocate." },
  ],
  // end of wiring
  title: "Polymyalgia rheumatica",
  summary: "Pain and stiffness in the shoulders, neck and hips, usually in people over 50, often worst in the morning. It responds quickly to steroid tablets, which are then reduced slowly over a year or two. A related condition, giant cell arteritis, needs urgent help.",
  keywords: ["polymyalgia rheumatica", "pmr", "shoulder pain", "hip stiffness", "steroids", "giant cell arteritis"],
  understand: [
    ["what-it-is", "What polymyalgia rheumatica is", 3, ["inflammation", "shoulders", "hips"], "Inflamed muscles and joints around the shoulders and hips."],
    ["symptoms", "Symptoms: stiffness, pain and tiredness", 3, ["stiffness", "morning", "tired"]],
    ["diagnosis", "How it is diagnosed", 3, ["blood test", "diagnosis"]],
    ["gca", "Giant cell arteritis: the urgent signs", 3, ["giant cell arteritis", "headache", "vision"]],
  ],
  recover: [
    ["steroids", "Steroid tablets and how they work", 3, ["prednisolone", "steroids"]],
    ["reducing", "Reducing the dose slowly", 3, ["tapering", "dose"]],
    ["side-effects", "Side effects, bones and blood sugar", 3, ["side effects", "bones", "diabetes"]],
    ["relapse", "If symptoms come back", 2, ["relapse", "flare"]],
  ],
  liveWell: [
    ["steroid-card", "Carrying a steroid card", 2, ["steroid card", "emergency"]],
    ["activity", "Staying active", 3, ["exercise", "activity"]],
    ["bones", "Protecting your bones on steroids", 3, ["bones", "osteoporosis", "calcium"]],
    ["daily-life", "Everyday life and support", 2, ["support", "daily life"]],
  ],
  sources: [source(NHS, "Polymyalgia rheumatica"), PMRGCA_UK, VERSUS_ARTHRITIS],
  askDoctor: ["How will we reduce my steroid dose, and how quickly?", "Do I need bone protection while on steroids?", "Which symptoms of giant cell arteritis should make me call straight away?", "What should I do if my symptoms come back?"],
  related: [{ groupId: "arthritis", conditionId: "rheumatoid" }, { groupId: "bone-health", conditionId: "osteoporosis" }, { groupId: "diabetes", conditionId: "type-2" }],
});

export const lupus = condition({
  id: "lupus",
  prefix: "sle-",
  facts: ["Most people keep it under control", "Almost 9 in 10 report fatigue", "Not contagious: you cannot catch it"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-nhs-lupus-children", title: "Lupus in children | NHS", kind: "video", duration: "5:37", url: "https://www.youtube.com/watch?v=S1TBvrENNAw", extra: "An expert on lupus in children", publisher: "NHS", keywords: ["children", "symptoms", "diagnosis"] },
    { id: "yt-lupusuk-what-is", title: "What Is Lupus?", kind: "video", duration: "1:33", url: "https://www.youtube.com/watch?v=Txx2jZyJWYw", extra: "When the immune system becomes over-active", publisher: "Lupus UK", keywords: ["what is lupus", "immune system", "autoimmune"] },
    { id: "yt-lupusuk-getting-diagnosed", title: "Lupus - Getting Diagnosed", kind: "video", duration: "3:56", url: "https://www.youtube.com/watch?v=grkZGwr5vRE", extra: "Why lupus can take years to diagnose", publisher: "Lupus UK", keywords: ["diagnosis", "symptoms"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-chelsea-lupus", person: "Chelsea", title: "Living with Lupus as a Young Person", channel: "Lupus UK", url: "https://www.youtube.com/watch?v=StdzyINaI8M", duration: "6:05", about: "Chelsea, Lupus UK's Young People and Family Support Officer, shares their experience of living with lupus as a young person, from diagnosis to school, university and mental health." },
    { id: "yt-louise-lupus", person: "Louise", title: "Fighting the Good Fight – Louise Crowley’s Lupus Journey", channel: "Arthritis Ireland", url: "https://www.youtube.com/watch?v=lcul76ky4F0", duration: "14:26", about: "Louise, a lecturer at University College Cork and a mother of three, was diagnosed with lupus at just 17 and speaks openly about the realities of living with it." },
    { id: "yt-hakan-lupus", person: "Hakan", title: "Living with Lupus - Hakan's story", channel: "Monash University School of Clinical Sciences", url: "https://www.youtube.com/watch?v=7YDCfVGRKXc", duration: "4:29", about: "Hakan shares practical self-management tips for living with lupus, from handling flare-ups to maintaining mental wellbeing and staying active." },
  ],
  // end of wiring
  title: "Lupus (SLE)",
  summary: "An autoimmune condition in which the immune system attacks healthy tissue, causing joint pain, tiredness and rashes, and sometimes affecting the kidneys, heart or lungs. It varies a great deal from person to person, and treatment controls it for most people.",
  keywords: ["lupus", "sle", "systemic lupus erythematosus", "autoimmune", "rash", "joint pain", "fatigue"],
  understand: [
    ["what-it-is", "What lupus is", 3, ["autoimmune", "immune", "cause"], "An immune system that turns on the body."],
    ["symptoms", "Symptoms: joints, skin, tiredness and more", 3, ["joints", "rash", "tired"]],
    ["diagnosis", "Tests and diagnosis", 3, ["blood tests", "ana", "diagnosis"]],
    ["organs", "When lupus affects the kidneys, heart or lungs", 3, ["kidneys", "heart", "lungs"]],
  ],
  recover: [
    ["hydroxychloroquine", "Hydroxychloroquine", 3, ["hydroxychloroquine", "eye checks"]],
    ["other-medicines", "Steroids and other medicines", 4, ["steroids", "immunosuppressants", "biologics"]],
    ["flares", "Flares: spotting and managing them", 3, ["flares", "triggers"]],
    ["checks", "Regular checks and blood tests", 2, ["checks", "blood tests", "urine"]],
  ],
  liveWell: [
    ["sun", "Sun protection", 2, ["sun", "rash", "sunscreen"]],
    ["fatigue", "Fatigue and pacing", 3, ["fatigue", "pacing"]],
    ["pregnancy", "Pregnancy and lupus", 3, ["pregnancy", "planning"]],
    ["mood", "Mood, memory and support", 3, ["mood", "memory", "support"]],
  ],
  sources: [source(NHS, "Lupus"), LUPUS_UK, VERSUS_ARTHRITIS],
  askDoctor: ["Which parts of my body does my lupus affect?", "What should I do if I think I am having a flare?", "How often do I need blood and urine tests?", "What do I need to plan if I want to become pregnant?"],
  related: [{ groupId: "arthritis", conditionId: "rheumatoid" }, { groupId: "kidneys", conditionId: "chronic-kidney-disease" }, { groupId: "after-treatment", conditionId: "cancer-fatigue" }],
});

export const hipFracture = condition({
  id: "hip-fracture",
  prefix: "hipfx-",
  facts: ["Surgery is usually the same or next day", "Usually up the day after surgery", "Usually 1 to 4 weeks in hospital"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-uhb-hip-fracture-pathway-1", title: "Your guide through the hip fracture pathway, part 1", kind: "video", duration: "2:43", url: "https://www.youtube.com/watch?v=VQPx6Qdm9Dg", extra: "arriving at A&E with a broken hip", publisher: "University Hospitals Birmingham Foundation Trust", keywords: ["hip fracture", "emergency department", "hospital"] },
    { id: "yt-nhs24-bed-hip-fracture", title: "Getting in and out of bed (after a hip fracture)", kind: "video", duration: "2:11", url: "https://www.youtube.com/watch?v=YPw_hVhtp2k", extra: "getting in and out of bed", publisher: "NHS 24", keywords: ["bed", "moving", "recovery"] },
    { id: "yt-rcp-fracture-liaison", title: "Strong bones after 50: Fracture liaison services explained", kind: "video", duration: "3:25", url: "https://www.youtube.com/watch?v=kyYd_HOhKF0", extra: "fracture liaison services explained", publisher: "Royal College of Physicians", keywords: ["fracture liaison", "bones", "after 50"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-tish-rehab", person: "Tish", title: "Rehab Can't Wait - How physiotherapy helped Tish", channel: "The Chartered Society of Physiotherapy", url: "https://www.youtube.com/watch?v=qrQ2WWt6fpg", duration: "1:29", about: "Tish, who runs a hedgehog rescue from her home, had equipment, advice and physiotherapy from a falls and fracture liaison service to recover safely at home after sudden severe hip pain." },
    { id: "yt-ashleigh-hip", person: "Ashleigh", title: "The Pain of Breaking My Hip and the Long Road Back | Ashleigh Moolman-Pasio | inCycle", channel: "inCycle", url: "https://www.youtube.com/watch?v=qat8DbX2E5Q", duration: "11:50", about: "Ashleigh Moolman-Pasio talks through her recovery after breaking her hip, and what it was like using her pain as an indicator of her progress." },
  ],
  // end of wiring
  title: "Hip fracture",
  summary: "A break at the top of the thigh bone, usually after a fall in an older person and often a sign of weaker bones. Most people have an operation within a day or two, and getting up and moving soon afterwards is a big part of recovery.",
  keywords: ["hip fracture", "broken hip", "fall", "hip operation", "recovery"],
  understand: [
    ["what-it-is", "What a hip fracture is", 3, ["hip", "break", "thigh bone"], "Where the hip breaks, and why it matters."],
    ["why", "Why it happens: falls and weaker bones", 3, ["falls", "osteoporosis"]],
    ["operation", "The operation and the first days", 4, ["surgery", "hospital"]],
    ["recovery-time", "How long recovery takes", 3, ["recovery", "weeks", "months"]],
  ],
  recoverTitle: "Recovery",
  recover: [
    ["moving", "Getting up and moving again", 3, ["moving", "walking", "physiotherapy"]],
    ["exercises", "Exercises at home", 3, ["exercises", "home", "strength"]],
    ["pain", "Pain relief and sleep", 3, ["pain", "sleep"]],
    ["confusion", "Confusion after surgery (delirium)", 3, ["delirium", "confusion"]],
  ],
  liveWell: [
    ["home", "Going home: equipment and help", 3, ["home", "equipment", "carers"]],
    ["next-fall", "Preventing the next fall", 3, ["falls", "home safety"]],
    ["bones", "Bone treatment after a fracture", 3, ["bones", "osteoporosis", "treatment"]],
    ["confidence", "Confidence, mood and family", 3, ["confidence", "mood", "family"]],
  ],
  sources: [source(NHS, "Hip fracture"), ROS, CSP],
  askDoctor: ["When can I put weight on my leg?", "What exercises should I do at home, and who will check them?", "Will I be assessed for falls and for bone strength?", "What help will I have when I go home?"],
  related: [{ groupId: "bone-health", conditionId: "osteoporosis" }, { groupId: "joint-replacement", conditionId: "hip-replacement" }, { groupId: "blood-pressure", conditionId: "low-blood-pressure" }],
});

export const pagets = condition({
  id: "pagets-disease",
  prefix: "pag-",
  facts: ["About 1% of UK people over 55", "Rare in people under 50", "Many people have no symptoms"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-pa-gp-perspective", title: "A GP's perspective on Paget's Disease of Bone", kind: "video", duration: "4:11", url: "https://www.youtube.com/watch?v=PWvtA8JfOiQ", extra: "timely diagnosis and specialist referral", publisher: "Paget's Association", keywords: ["diagnosis", "GP", "alkaline phosphatase"] },
    { id: "yt-pa-pain-research", title: "Pain in Paget’s disease research uncovers surprising skin sensitivity", kind: "video", duration: "4:40", url: "https://www.youtube.com/watch?v=ZKTPeBFEf6w", extra: "research into the causes of pain", publisher: "Paget's Association", keywords: ["pain", "research"] },
    { id: "yt-pa-information-event", title: "Paget's Disease of Bone", kind: "video", duration: "2:37", url: "https://www.youtube.com/watch?v=k84xYqKeKvM", extra: "support at a Paget's information event", publisher: "Paget's Association", keywords: ["support", "information event"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-elaine-pagets", person: "Elaine", title: "Elaine’s story: living with Paget’s Disease of Bone", channel: "Paget's Association", url: "https://www.youtube.com/watch?v=L0ciOSpcnLI", duration: "3:55", about: "Elaine talks about her symptoms, diagnosis and treatment, and how the Paget's Association's helpline and virtual support groups have supported her." },
    { id: "yt-anne-pagets-pain", person: "Anne", title: "Beyond ordinary pain: Anne’s experience of Paget’s Disease of Bone", channel: "Paget's Association", url: "https://www.youtube.com/watch?v=f1jp0Gc_R5s", duration: "6:47", about: "Anne first noticed a dull ache in her elbow in 2019, later diagnosed as Paget's disease, and her story highlights findings from the Pain in Paget's study." },
    { id: "yt-geraldine-pagets", person: "Geraldine", title: "Paget's disease: Geraldine speaks of her challenging journey", channel: "Paget's Association", url: "https://www.youtube.com/watch?v=7NtmobanpiU", duration: "7:41", about: "Geraldine speaks openly to Prof Stuart Ralston about her prolonged and challenging journey to being correctly diagnosed and treated." },
  ],
  // end of wiring
  title: "Paget's disease of bone",
  summary: "A condition in which the normal renewal of bone goes wrong, so affected bones can become enlarged, weaker or misshapen. Many people have no symptoms. When there is bone pain, treatment usually helps.",
  keywords: ["paget's disease", "bone pain", "enlarged bone", "bisphosphonate", "alkaline phosphatase"],
  understand: [
    ["what-it-is", "What Paget's disease of bone is", 3, ["bone renewal", "remodelling"], "When bone renewal speeds up and goes wrong."],
    ["symptoms", "Symptoms, and when there are none", 3, ["bone pain", "symptoms"]],
    ["diagnosis", "Blood tests, X-rays and bone scans", 3, ["alkaline phosphatase", "x-ray", "bone scan"]],
    ["complications", "Possible complications", 3, ["fracture", "hearing", "arthritis"]],
  ],
  recover: [
    ["bisphosphonates", "Bisphosphonate treatment", 3, ["bisphosphonates", "zoledronic acid"]],
    ["pain", "Managing bone pain", 3, ["pain", "painkillers"]],
    ["surgery", "When surgery is needed", 3, ["surgery", "joint replacement"]],
    ["follow-up", "Follow-up and blood tests", 2, ["follow-up", "blood tests"]],
  ],
  liveWell: [
    ["activity", "Staying active safely", 3, ["exercise", "activity"]],
    ["hearing", "Hearing and Paget's disease", 2, ["hearing", "skull"]],
    ["family", "Paget's disease in families", 2, ["family", "genetic"]],
    ["support", "Support and information", 2, ["support", "charity"]],
  ],
  sources: [source(NHS, "Paget's disease of bone"), PAGETS_ASSOCIATION, ROS],
  askDoctor: ["Which of my bones are affected?", "Would treatment help my pain?", "How often should my blood tests be checked?", "Should my family be checked?"],
  related: [{ groupId: "bone-health", conditionId: "osteoporosis" }, { groupId: "arthritis", conditionId: "osteoarthritis" }, { groupId: "joint-replacement", conditionId: "hip-replacement" }],
});

export const neckPain = condition({
  id: "neck-pain",
  prefix: "neck-",
  facts: ["Most neck pain only lasts a few weeks", "Serious structural damage is rare", "A neck collar is not recommended"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-auk-neck-back-stretching", title: "Tailored stretching: Neck and back exercises (for arthritis and joint pain)", kind: "video", duration: "16:58", url: "https://www.youtube.com/watch?v=fTUKGwC_-WE", extra: "A physio leads head turn and chin to chest", publisher: "Arthritis UK", keywords: ["exercises", "stretching", "neck"] },
    { id: "yt-nhs-bham-neck-whiplash", title: "Advice on neck pain and whiplash", kind: "video", duration: "4:38", url: "https://www.youtube.com/watch?v=U5ov_UO8dHc", extra: "Health advice on neck pain and whiplash", publisher: "NHSBhamEastandNorth", keywords: ["neck pain", "whiplash", "advice"] },
    { id: "yt-lpt-neck-class", title: "Neck Class MSK Physiotherapy Loughborough Hospital", kind: "video", duration: "17:33", url: "https://www.youtube.com/watch?v=nOlwEx4T1og", extra: "An NHS physiotherapy neck exercise class", publisher: "Leicestershire Partnership NHS Trust", keywords: ["physiotherapy", "exercises", "class"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-gemma-chronic-pain", person: "Gemma", title: "Managing chronic pain, Gemma’s story.", channel: "NHS England", url: "https://www.youtube.com/watch?v=eUqYSfMoyIo", duration: "1:35", about: "A patient from Sheffield explains how taking a mental and physical approach together to managing her chronic pain has improved her health." },
    { id: "yt-sean-chronic-pain", person: "Sean", title: "Sean's Story - There is another way", channel: "NHS England", url: "https://www.youtube.com/watch?v=l17SjDth4pU", duration: "6:05", about: "Sean, from Cornwall, describes how he has found an alternative to opioid medication to help manage his chronic pain." },
  ],
  // end of wiring
  title: "Neck pain",
  summary: "A stiff or painful neck is very common and usually gets better on its own within a few weeks. Keeping it moving, a few simple changes at work and in bed, and painkillers if needed all help. A few symptoms need checking quickly.",
  keywords: ["neck pain", "stiff neck", "whiplash", "trapped nerve", "posture"],
  understand: [
    ["what-it-is", "Why the neck hurts", 3, ["muscles", "joints", "cause"], "Muscles, joints and the nerves in between."],
    ["causes", "Common causes: posture, sleep and strain", 3, ["posture", "sleep", "strain"]],
    ["trapped-nerve", "A trapped nerve in the neck", 3, ["trapped nerve", "arm pain", "pins and needles"]],
    ["urgent", "Symptoms that need checking quickly", 2, ["urgent", "fever", "numbness"]],
  ],
  recover: [
    ["moving", "Keeping the neck moving", 3, ["exercises", "movement"]],
    ["exercises", "Gentle neck exercises", 3, ["exercises", "stretches"]],
    ["painkillers", "Painkillers, heat and cold", 3, ["painkillers", "heat", "cold"]],
    ["physio", "Physiotherapy", 3, ["physiotherapy", "referral"]],
  ],
  liveWell: [
    ["desk", "Desks, screens and phones", 3, ["desk", "screen", "phone"]],
    ["sleep", "Pillows and sleeping position", 2, ["pillow", "sleep"]],
    ["whiplash", "After a whiplash injury", 3, ["whiplash", "car accident"]],
    ["long-term", "Neck pain that keeps coming back", 3, ["long-term", "recurring"]],
  ],
  sources: [source(NHS, "Neck pain"), CSP, VERSUS_ARTHRITIS],
  askDoctor: ["Is a trapped nerve causing my arm symptoms?", "Which exercises should I do?", "Do I need physiotherapy?", "Which symptoms should make me come back quickly?"],
  related: [{ groupId: "back-neck", conditionId: "back-pain" }, { groupId: "nerves", conditionId: "carpal-tunnel" }, { groupId: "muscles", conditionId: "frozen-shoulder" }],
});

export const spinalStenosis = condition({
  id: "spinal-stenosis",
  prefix: "ss-",
  facts: ["Most narrowing is part of ageing", "Leg pain often worse when walking", "Most people manage symptoms well"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-nhs-lumbar-surgery", title: "Lumbar surgery | NHS", kind: "video", duration: "3:50", url: "https://www.youtube.com/watch?v=iIr59PJPaKc", extra: "How surgery relieves nerve pressure", publisher: "NHS", keywords: ["surgery", "decompression", "nerves"] },
    { id: "yt-nebh-stenosis-summary", title: "Lumbar Spinal Stenosis: Summary", kind: "video", duration: "3:54", url: "https://www.youtube.com/watch?v=ESMacHXq00A", extra: "Symptoms, causes, diagnosis and treatment", publisher: "New England Baptist Hospital", keywords: ["stenosis", "symptoms", "treatment"] },
    { id: "yt-nuh-spine-school", title: "Lumbar Decompression - Spine School", kind: "video", duration: "10:15", url: "https://www.youtube.com/watch?v=ei_1VGMOGxc", extra: "A physio on recovery at home", publisher: "Nottingham University Hospitals NHS Trust", keywords: ["recovery", "decompression", "physiotherapy"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-dick-stenosis", person: "Dick", title: "Spinal stenosis: Getting my life back | Ohio State Medical Center", channel: "Ohio State Wexner Medical Center", url: "https://www.youtube.com/watch?v=r2VoZ8fJK_s", duration: "1:54", about: "Severe spinal stenosis left Dick Yoss unable to sit, stand or walk comfortably, until surgery reduced his pain." },
    { id: "yt-coleen-stenosis", person: "Coleen", title: "Spinal Stenosis -  Coleen's Story", channel: "University Orthopedics", url: "https://www.youtube.com/watch?v=2ERR1Xo3JBg", duration: "6:22", about: "Coleen, a comedian, business owner and mother, found out the hard way that there is nothing funny about chronic back pain." },
  ],
  // end of wiring
  title: "Spinal stenosis",
  summary: "Narrowing of the spaces in the spine that puts pressure on the nerves, most often in the lower back. It can cause pain, numbness or weakness in the legs that is worse when standing or walking and eases when sitting or bending forward.",
  keywords: ["spinal stenosis", "lumbar stenosis", "leg pain", "walking", "numbness", "sciatica"],
  understand: [
    ["what-it-is", "What spinal stenosis is", 3, ["narrowing", "nerves", "spine"], "Narrow spaces and squeezed nerves."],
    ["symptoms", "Symptoms: legs, walking and bending forward", 3, ["leg pain", "walking", "numbness"]],
    ["causes", "Why it happens", 3, ["age", "arthritis", "discs"]],
    ["urgent", "Symptoms that need urgent help", 2, ["cauda equina", "urgent", "bladder"]],
  ],
  recover: [
    ["exercise", "Exercise and physiotherapy", 3, ["exercise", "physiotherapy"]],
    ["painkillers", "Painkillers and nerve pain medicines", 3, ["painkillers", "nerve pain"]],
    ["injections", "Steroid injections", 3, ["injections", "steroids"]],
    ["surgery", "Surgery: who it is for", 4, ["surgery", "decompression"]],
  ],
  liveWell: [
    ["walking", "Walking further, a little at a time", 3, ["walking", "pacing"]],
    ["posture", "Positions that ease it", 2, ["posture", "sitting", "bending"]],
    ["weight-activity", "Weight and staying active", 3, ["weight", "activity"]],
    ["mood", "Living with long-term pain", 3, ["pain", "mood", "support"]],
  ],
  sources: [source(NHS, "Back pain and lumbar decompression surgery"), BACKCARE, CSP],
  askDoctor: ["Is my leg pain coming from my spine?", "What exercises would help me walk further?", "Would an injection or surgery be an option for me?", "Which symptoms mean I need help urgently?"],
  related: [{ groupId: "back-neck", conditionId: "back-pain" }, { groupId: "nerves", conditionId: "sciatica" }, { groupId: "arthritis", conditionId: "osteoarthritis" }],
});

export const fibromyalgia = condition({
  id: "fibromyalgia",
  prefix: "fm-",
  facts: ["Long-term pain all over the body", "Nearly 1 in 20 may be affected", "Exercise helps reduce pain"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-nhft-fibro-intro", title: "An introduction to fibromyalgia", kind: "video", duration: "5:30", url: "https://www.youtube.com/watch?v=V-Jpk8FVQdI", extra: "Symptoms and how to manage it", publisher: "Northamptonshire Healthcare NHS Foundation Trust (NHFT)", keywords: ["symptoms", "managing", "physiotherapy"] },
    { id: "yt-qeh-what-is-fibro", title: "Living Well with Fibromyalgia - What is fibromyalgia?", kind: "video", duration: "11:02", url: "https://www.youtube.com/watch?v=2qh_B9gxTPA", extra: "What fibromyalgia is", publisher: "The Queen Elizabeth Hospital NHS Foundation Trust", keywords: ["what is fibromyalgia", "living well"] },
    { id: "yt-qeh-brain-fog", title: "Living Well with Fibromyalgia - Managing brain fog", kind: "video", duration: "5:24", url: "https://www.youtube.com/watch?v=r8qNYamFaXI", extra: "Managing brain fog", publisher: "The Queen Elizabeth Hospital NHS Foundation Trust", keywords: ["fibro fog", "brain fog", "concentration"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-suzanne-fibro", person: "Suzanne", title: "Fibromyalgia: Suzanne's story | NHS", channel: "NHS", url: "https://www.youtube.com/watch?v=dyGMdwgfwWo", duration: "3:06", about: "Suzanne describes how fibromyalgia, a chronic condition that causes pain all over the body, affected her and how it can be treated." },
    { id: "yt-auk-living-fibro", person: "Jess, Christie and Nyasha", title: "Living with fibromyalgia", channel: "Arthritis UK", url: "https://www.youtube.com/watch?v=Pmc_03THh7Q", duration: "3:50", about: "Jess, Christie and Nyasha share their own personal experiences of living with fibromyalgia." },
    { id: "yt-michelle-fibro", person: "Michelle", title: "Michelle butler - living with Fibromyalgia", channel: "NHS Derby and Derbyshire ICB", url: "https://www.youtube.com/watch?v=dpqimfAimG4", duration: "7:03", about: "Michelle Butler talks about living with fibromyalgia." },
  ],
  // end of wiring
  title: "Fibromyalgia",
  summary: "Long-term pain all over the body, with tiredness, poor sleep and trouble concentrating. The nerves become more sensitive to pain. There is no cure, but exercise, sleep, talking therapies and some medicines help many people manage it.",
  keywords: ["fibromyalgia", "widespread pain", "fatigue", "fibro fog", "chronic pain"],
  understand: [
    ["what-it-is", "What fibromyalgia is", 3, ["pain", "nerves", "sensitive"], "A nervous system turned up too high."],
    ["symptoms", "Symptoms: pain, tiredness, sleep and fog", 3, ["pain", "tired", "fibro fog"]],
    ["diagnosis", "How it is diagnosed", 3, ["diagnosis", "tests"]],
    ["triggers", "What can make it worse", 3, ["stress", "cold", "triggers"]],
  ],
  recover: [
    ["exercise", "Exercise, starting gently", 3, ["exercise", "walking", "swimming"]],
    ["medicines", "Medicines that can help", 3, ["antidepressants", "painkillers"]],
    ["talking", "Talking therapies and pain programmes", 3, ["cbt", "pain management"]],
    ["sleep", "Better sleep", 3, ["sleep", "routine"]],
  ],
  liveWell: [
    ["pacing", "Pacing your energy", 3, ["pacing", "energy"]],
    ["flares", "Flares and setbacks", 3, ["flares", "setbacks"]],
    ["work", "Work and fibromyalgia", 3, ["work", "employer"]],
    ["mood", "Mood, worry and support", 3, ["mood", "worry", "support"]],
  ],
  sources: [source(NHS, "Fibromyalgia"), FMA_UK, VERSUS_ARTHRITIS],
  askDoctor: ["Have other causes of my symptoms been ruled out?", "Can I be referred to a pain management programme?", "Would a medicine help my pain or sleep?", "Which kind of exercise should I start with?"],
  related: [{ groupId: "after-treatment", conditionId: "cancer-fatigue" }, { groupId: "sleep", conditionId: "insomnia" }, { groupId: "depression", conditionId: "depression" }],
});

export const frozenShoulder = condition({
  id: "frozen-shoulder",
  prefix: "fs-",
  facts: ["Usually affects people aged 40 to 60", "More common in people with diabetes", "Usually goes away, but can take years"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-bess-frozen-shoulder-exercises", title: "Exercises for Frozen Shoulder", kind: "video", duration: "6:04", url: "https://www.youtube.com/watch?v=EffqyD8Dc2M", extra: "advice and exercises from BESS physiotherapists", publisher: "BESS - British Elbow & Shoulder Society", keywords: ["frozen shoulder", "exercises", "physiotherapy"] },
    { id: "yt-ukfrost-which-treatment", title: "Frozen shoulder: which treatment should you choose?", kind: "video", duration: "1:58", url: "https://www.youtube.com/watch?v=I88uzfD8Y4s", extra: "the UK FROST trial of three treatments", publisher: "Science Animated", keywords: ["frozen shoulder", "surgery", "physiotherapy", "trial"] },
    { id: "yt-nhs-ayrshire-frozen-shoulder-intro", title: "Frozen Shoulder Introduction", kind: "video", duration: "0:42", url: "https://www.youtube.com/watch?v=8IwhSEIWfjM", extra: "an introduction to frozen shoulder", publisher: "NHS Ayrshire & Arran", keywords: ["frozen shoulder", "introduction"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-tonya-frozen-shoulder", person: "Tonya", title: "Tonya's Frozen Shoulder Diagnosis", channel: "Orlando Health", url: "https://www.youtube.com/watch?v=iLqxLc0qTQo", duration: "1:36", about: "Tonya's care team worked with her before, during and after a hydrodilatation procedure to restore movement to her right shoulder without surgery." },
  ],
  // end of wiring
  title: "Frozen shoulder",
  summary: "A painful, stiff shoulder that gradually loses movement, often over months, before slowly freeing up again. It is more common in people with diabetes. Painkillers, exercises and sometimes injections help while it recovers.",
  keywords: ["frozen shoulder", "adhesive capsulitis", "shoulder pain", "stiff shoulder"],
  understand: [
    ["what-it-is", "What frozen shoulder is", 3, ["capsule", "shoulder", "stiff"], "A tight, inflamed capsule around the joint."],
    ["stages", "The stages: freezing, frozen, thawing", 3, ["stages", "recovery"]],
    ["who", "Who gets it", 2, ["diabetes", "age", "risk"]],
    ["diagnosis", "How it is diagnosed", 2, ["diagnosis", "examination"]],
  ],
  recover: [
    ["pain-relief", "Pain relief", 3, ["painkillers", "heat", "cold"]],
    ["exercises", "Shoulder exercises", 3, ["exercises", "stretches"]],
    ["injections", "Steroid injections and other treatments", 3, ["injection", "hydrodilatation"]],
    ["surgery", "When surgery is offered", 3, ["surgery", "manipulation"]],
  ],
  liveWell: [
    ["daily-tasks", "Dressing, sleeping and daily tasks", 3, ["dressing", "sleep", "tasks"]],
    ["diabetes", "Frozen shoulder and diabetes", 2, ["diabetes", "blood sugar"]],
    ["work", "Work and driving", 2, ["work", "driving"]],
    ["patience", "The long recovery, and staying patient", 2, ["recovery", "time"]],
  ],
  sources: [source(NHS, "Frozen shoulder"), CSP, VERSUS_ARTHRITIS],
  askDoctor: ["Which stage is my shoulder in?", "Which exercises should I do, and how often?", "Would an injection help me?", "Should my blood sugar be checked?"],
  related: [{ groupId: "back-neck", conditionId: "neck-pain" }, { groupId: "diabetes", conditionId: "type-2" }, { groupId: "arthritis", conditionId: "osteoarthritis" }],
});

export const hipReplacement = condition({
  id: "hip-replacement",
  prefix: "hipr-",
  facts: ["Most last at least 15 years", "Operation takes about 1 to 2 hours", "Usually home 1 to 3 days after"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-kch-hip-what-to-expect", title: "Total hip replacement: part one - what to expect", kind: "video", duration: "3:28", url: "https://www.youtube.com/watch?v=SmSCuJqMnLk", extra: "what to expect, part one", publisher: "King's College Hospital NHS Foundation Trust", keywords: ["hip replacement", "what to expect", "hospital"] },
    { id: "yt-auk-hip-exercises", title: "Exercises to Help Before and After a Hip Replacement", kind: "video", duration: "17:28", url: "https://www.youtube.com/watch?v=7JSAghMHhO0", extra: "physiotherapist-led stretching and strengthening exercises", publisher: "Arthritis UK", keywords: ["exercises", "physiotherapy", "before and after surgery"] },
    { id: "yt-worcs-hip-car", title: "Getting in and out of the car after a hip replacement", kind: "video", duration: "2:01", url: "https://www.youtube.com/watch?v=pyo7nlxth_g", extra: "NHS therapy team car advice", publisher: "Worcestershire Acute Hospitals NHS Trust", keywords: ["car", "getting about", "recovery"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-keith-hip", person: "Keith", title: "Patient Feedback - Keith Murray", channel: "NHS Golden Jubilee", url: "https://www.youtube.com/watch?v=oUwb9G87q08", duration: "4:58", about: "Keith Murray shares his experience of having a total hip replacement at NHS Golden Jubilee." },
    { id: "yt-tim-hip", person: "Tim", title: "Hip replacement patient goes home on the same day #Shorts", channel: "UHL NHS Trust | Leicester's Hospitals", url: "https://www.youtube.com/watch?v=3UICqS4eS34", duration: "0:29", about: "Tim Parker was the Trust's first hip replacement patient to go home on the same day as his operation, through its new enhanced pathway for joint replacement." },
    { id: "yt-norman-hip", person: "Norman", title: "Norman Sharp: the man with the world’s longest lasting hip replacements", channel: "RNOHnhs", url: "https://www.youtube.com/watch?v=B4ZS5cQxuU4", duration: "3:05", about: "Norman Sharp's double hip replacements, implanted at the RNOH in November 1948 and never revised, are recognised by Guinness World Records as the world's longest lasting." },
  ],
  // end of wiring
  title: "Hip replacement",
  summary: "An operation to replace a damaged hip joint with an artificial one, most often because of arthritis. It usually relieves pain and improves movement. Preparing beforehand and doing the exercises afterwards make a real difference to recovery.",
  keywords: ["hip replacement", "hip surgery", "arthroplasty", "new hip", "recovery"],
  understand: [
    ["what-it-is", "What a hip replacement involves", 3, ["operation", "artificial joint"], "The new joint, and why it is done."],
    ["deciding", "Deciding whether to have one", 3, ["decision", "benefits", "risks"]],
    ["preparing", "Getting ready for the operation", 3, ["preparing", "prehab", "home"]],
    ["hospital", "The operation and the hospital stay", 3, ["hospital", "anaesthetic"]],
  ],
  recoverTitle: "Recovery",
  recover: [
    ["exercises", "Exercises after a hip replacement", 3, ["exercises", "physiotherapy"]],
    ["walking", "Walking aids and getting about", 3, ["crutches", "walking"]],
    ["pain-swelling", "Pain, swelling and sleep", 3, ["pain", "swelling", "sleep"]],
    ["warning-signs", "Warning signs after surgery", 2, ["infection", "blood clot", "urgent"]],
  ],
  liveWell: [
    ["daily-life", "Everyday life at home", 3, ["dressing", "bathing", "stairs"]],
    ["driving-work", "Driving and going back to work", 2, ["driving", "work"]],
    ["activity", "Sport and activity with a new hip", 3, ["sport", "activity"]],
    ["long-term", "How long a new hip lasts", 2, ["lifespan", "follow-up"]],
  ],
  sources: [source(NHS, "Hip replacement"), CSP, VERSUS_ARTHRITIS],
  askDoctor: ["What benefits and risks should I expect?", "What can I do now to prepare?", "Which movements should I avoid at first, and for how long?", "When can I drive and go back to work?"],
  related: [{ groupId: "arthritis", conditionId: "osteoarthritis" }, { groupId: "bone-health", conditionId: "hip-fracture" }, { groupId: "joint-replacement", conditionId: "knee-replacement" }],
});

export const kneeReplacement = condition({
  id: "knee-replacement",
  prefix: "kner-",
  facts: ["Knee replacements can last 25 years", "Most go home 1 to 4 days after", "4 in 5 are happy with their new knee"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-nhs-knee-replacement", title: "Knee replacement surgery | NHS", kind: "video", duration: "3:17", url: "https://www.youtube.com/watch?v=69YMHC6JAL4", extra: "a surgeon on what happens", publisher: "NHS", keywords: ["knee", "replacement", "surgery"] },
    { id: "yt-nhs-knee-recovery", title: "Knee replacement recovery: dos and don'ts | NHS", kind: "video", duration: "3:27", url: "https://www.youtube.com/watch?v=Yy8pNXtYB60", extra: "dos and don'ts for recovery", publisher: "NHS", keywords: ["knee", "recovery", "warning signs"] },
    { id: "yt-worcs-knee-exercises", title: "Knee exercises following a knee replacement", kind: "video", duration: "2:46", url: "https://www.youtube.com/watch?v=9TKSPaTZU0w", extra: "NHS therapists' recovery exercises", publisher: "Worcestershire Acute Hospitals NHS Trust", keywords: ["exercises", "physiotherapy", "recovery"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-mark-knee", person: "Mark", title: "Mark Burkett shares his experience if undergoing a total knee replacement", channel: "Sandwell & West Birmingham NHS Trust", url: "https://www.youtube.com/watch?v=7xtalYsZrus", duration: "1:56", about: "Mark Burkett shares his experience of undergoing a total knee replacement, with his surgeon using robotic-assisted technology." },
    { id: "yt-jolanta-knee", person: "Jolanta", title: "Patient's Story", channel: "Hampshire Hospitals NHS Foundation Trust", url: "https://www.youtube.com/watch?v=n2CFQ7Rbwhc", duration: "1:42", about: "Jolanta Maria had her left knee replacement at the Hampshire Orthopaedic Centre at Winchester Hospital, felt truly heard and supported during her stay, and is now recovering well." },
    { id: "yt-linda-knee", person: "Linda", title: "Total knee replacement, Linda's story", channel: "RNOHnhs", url: "https://www.youtube.com/watch?v=zcavaXF7gLo", duration: "3:30", about: "Linda, who has an active lifestyle, tells the story of her total knee replacement at the Royal National Orthopaedic Hospital, where she needed a special type of knee implant." },
  ],
  // end of wiring
  title: "Knee replacement",
  summary: "An operation to replace a damaged knee joint, wholly or in part, most often because of arthritis. It usually relieves pain, though recovery takes time and work. The exercises in the weeks after the operation matter a great deal.",
  keywords: ["knee replacement", "knee surgery", "arthroplasty", "new knee", "recovery"],
  understand: [
    ["what-it-is", "What a knee replacement involves", 3, ["operation", "total", "partial"], "A whole or partial new knee."],
    ["deciding", "Deciding whether to have one", 3, ["decision", "benefits", "risks"]],
    ["preparing", "Getting ready for the operation", 3, ["preparing", "prehab", "home"]],
    ["hospital", "The operation and the hospital stay", 3, ["hospital", "anaesthetic"]],
  ],
  recoverTitle: "Recovery",
  recover: [
    ["exercises", "Exercises after a knee replacement", 3, ["exercises", "bending", "straightening"]],
    ["walking", "Walking aids and getting about", 3, ["crutches", "walking"]],
    ["pain-swelling", "Pain, swelling and ice", 3, ["pain", "swelling", "ice"]],
    ["warning-signs", "Warning signs after surgery", 2, ["infection", "blood clot", "urgent"]],
  ],
  liveWell: [
    ["daily-life", "Everyday life at home", 3, ["stairs", "kneeling", "bathing"]],
    ["driving-work", "Driving and going back to work", 2, ["driving", "work"]],
    ["activity", "Sport and activity with a new knee", 3, ["sport", "activity"]],
    ["long-term", "How long a new knee lasts", 2, ["lifespan", "follow-up"]],
  ],
  sources: [source(NHS, "Knee replacement"), CSP, VERSUS_ARTHRITIS],
  askDoctor: ["Would a partial or total replacement suit me?", "What can I do now to prepare?", "How much should my knee bend by each stage?", "When can I drive and go back to work?"],
  related: [{ groupId: "arthritis", conditionId: "osteoarthritis" }, { groupId: "joint-replacement", conditionId: "hip-replacement" }, { groupId: "weight", conditionId: "obesity" }],
});

export const tennisElbow = condition({
  id: "tennis-elbow",
  prefix: "te-",
  facts: ["More common between 35 and 54", "Racquet sports cause under 10%", "Most people better within a year"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-somerset-tennis-elbow", title: "Tennis Elbow", kind: "video", duration: "6:48", url: "https://www.youtube.com/watch?v=1yOMytWyF54", extra: "tennis elbow, from an NHS trust", publisher: "Somerset NHS Foundation Trust", keywords: ["tennis elbow", "elbow pain"] },
    { id: "yt-bess-tennis-elbow-exercises", title: "Exercises for Tennis Elbow", kind: "video", duration: "8:49", url: "https://www.youtube.com/watch?v=oDPNW8EnToQ", extra: "advice and exercises from BESS physiotherapists", publisher: "BESS - British Elbow & Shoulder Society", keywords: ["exercises", "tennis elbow", "physiotherapy"] },
    { id: "yt-auk-elbow-wrist-exercises", title: "Elbow and Wrist Exercises for Arthritis and Joint Pain", kind: "video", duration: "11:39", url: "https://www.youtube.com/watch?v=XVoaDoOlvZ0", extra: "follow-along elbow and wrist stretches", publisher: "Arthritis UK", keywords: ["exercises", "elbow", "wrist"] },
  ],
  // end of wiring
  title: "Tennis elbow",
  summary: "Pain on the outside of the elbow from overused forearm tendons, often from repeated gripping or lifting rather than tennis. It usually gets better on its own over months, and rest, exercises and changing how you do tasks help.",
  keywords: ["tennis elbow", "lateral epicondylitis", "elbow pain", "tendon", "grip"],
  understand: [
    ["what-it-is", "What tennis elbow is", 3, ["tendon", "forearm"], "Tired tendons at the outer elbow."],
    ["causes", "What causes it", 2, ["gripping", "lifting", "repetitive"]],
    ["symptoms", "Symptoms, and golfer's elbow", 2, ["pain", "golfer's elbow"]],
    ["how-long", "How long it lasts", 2, ["recovery", "months"]],
  ],
  recover: [
    ["self-care", "Rest, ice and painkillers", 3, ["rest", "ice", "painkillers"]],
    ["exercises", "Exercises for the forearm", 3, ["exercises", "strengthening"]],
    ["physio", "Physiotherapy and braces", 3, ["physiotherapy", "brace", "strap"]],
    ["injections", "Injections and other treatments", 3, ["injections", "shockwave"]],
  ],
  liveWell: [
    ["tasks", "Changing how you grip and lift", 3, ["grip", "lifting", "tools"]],
    ["work", "Work, keyboards and tools", 2, ["work", "keyboard"]],
    ["sport", "Sport and getting back to it", 2, ["sport", "racket"]],
    ["coming-back", "If it keeps coming back", 2, ["recurring", "long-term"]],
  ],
  sources: [source(NHS, "Tennis elbow"), CSP, VERSUS_ARTHRITIS],
  askDoctor: ["Is this tennis elbow, or something else?", "Which exercises should I do?", "Would a brace or physiotherapy help?", "How long should I expect it to take?"],
  related: [{ groupId: "nerves", conditionId: "carpal-tunnel" }, { groupId: "muscles", conditionId: "frozen-shoulder" }, { groupId: "feet-tendons", conditionId: "plantar-fasciitis" }],
});

export const plantarFasciitis = condition({
  id: "plantar-fasciitis",
  prefix: "pfas-",
  facts: ["Most common cause of under-heel pain", "More likely if you are 40 to 60", "Can take up to 18 months to heal"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-nhs-heel-pain", title: "Heel pain | NHS", kind: "video", duration: "4:50", url: "https://www.youtube.com/watch?v=rtu20VuKGPw", extra: "causes, symptoms and treatments", publisher: "NHS", keywords: ["heel pain", "plantar fasciitis", "treatment"] },
    { id: "yt-auk-plantar-heel-pain", title: "What is plantar heel pain and how can you manage it? (plantar fasciitis)", kind: "video", duration: "1:05", url: "https://www.youtube.com/watch?v=sidFF-mSgfk", extra: "simple ways to manage heel pain", publisher: "Arthritis UK", keywords: ["plantar heel pain", "self-care", "animation"] },
    { id: "yt-nhsggc-plantar-fasciitis", title: "NHSGGC - MSK Physiotherapy - Foot Pain (Plantar Fasciitis) An Introduction", kind: "video", duration: "2:13", url: "https://www.youtube.com/watch?v=NBN_ZF_7w6s", extra: "an introduction from NHS physiotherapy", publisher: "NHS Greater Glasgow and Clyde", keywords: ["plantar fasciitis", "physiotherapy", "foot pain"] },
  ],
  // end of wiring
  title: "Plantar fasciitis (heel pain)",
  summary: "Pain under the heel, usually worst with the first steps in the morning, from strain on the band of tissue along the sole of the foot. It is common and usually improves within months with stretches, good footwear and rest.",
  keywords: ["plantar fasciitis", "heel pain", "foot pain", "first steps", "insoles"],
  understand: [
    ["what-it-is", "What plantar fasciitis is", 3, ["heel", "sole", "tissue"], "The band under the foot, and why it hurts."],
    ["causes", "Why it happens", 2, ["standing", "shoes", "weight"]],
    ["symptoms", "Symptoms: first steps and long standing", 2, ["morning", "pain"]],
    ["how-long", "How long it lasts", 2, ["recovery", "months"]],
  ],
  recover: [
    ["stretches", "Stretches for the foot and calf", 3, ["stretches", "calf"]],
    ["footwear", "Shoes, insoles and heel cups", 3, ["shoes", "insoles", "orthotics"]],
    ["pain-relief", "Ice, rest and painkillers", 2, ["ice", "rest", "painkillers"]],
    ["further-treatment", "Physiotherapy, injections and other treatments", 3, ["physiotherapy", "injection", "shockwave"]],
  ],
  liveWell: [
    ["work-standing", "Standing at work", 2, ["work", "standing"]],
    ["exercise", "Staying active while it heals", 3, ["exercise", "swimming", "cycling"]],
    ["weight", "Weight and foot strain", 2, ["weight", "strain"]],
    ["coming-back", "Stopping it coming back", 2, ["prevention", "recurring"]],
  ],
  sources: [source(NHS, "Plantar fasciitis"), CSP, VERSUS_ARTHRITIS],
  askDoctor: ["Is this plantar fasciitis, or something else?", "Which stretches should I do?", "Would insoles or a referral to a podiatrist help?", "What if it is no better after a few months?"],
  related: [{ groupId: "feet-tendons", conditionId: "tennis-elbow" }, { groupId: "arthritis", conditionId: "osteoarthritis" }, { groupId: "weight", conditionId: "obesity" }],
});

// ---- The second round: autoimmune conditions, more breaks, more back and soft-tissue problems, shoulder
// replacement, hands and feet, and joint injuries.

export const giantCellArteritis = condition({
  id: "giant-cell-arteritis",
  prefix: "gca-",
  facts: ["Very rare in people under 50", "Peak age is between 60 and 80", "Up to half also have PMR symptoms"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-mayo-gca", title: "Mayo Clinic - Giant Cell Arteritis and Takayasu's Arteritis", kind: "video", duration: "2:51", url: "https://www.youtube.com/watch?v=GArqMWFvQtQ", extra: "a rheumatologist on symptoms and treatment", publisher: "Mayo Clinic", keywords: ["giant cell arteritis", "vasculitis", "treatment"] },
    { id: "yt-nanos-gca", title: "Understanding Giant Cell Arteritis (GCA): Causes, Symptoms, and Treatment", kind: "video", duration: "2:02", url: "https://www.youtube.com/watch?v=yfCJwS1Hs2g", extra: "vision, headaches, jaw pain and treatment", publisher: "North American Neuro-Ophthalmology Society", keywords: ["giant cell arteritis", "vision", "steroids"] },
    { id: "yt-mgh-gca", title: "Rheumatology Patient Education: Giant Cell Arteritis (GCA)", kind: "video", duration: "6:23", url: "https://www.youtube.com/watch?v=fQRGUdjQxrQ", extra: "patient education from a rheumatologist", publisher: "MassGeneralHospital", keywords: ["giant cell arteritis", "rheumatology", "patient education"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-sue-gca", person: "Sue", title: "Polymyalgia Rheumatica and Giant Cell Arteritis - Sue's Story", channel: "PMRGCAuk", url: "https://www.youtube.com/watch?v=qEB9UrbEAV8", duration: "9:09", about: "Sue was diagnosed with polymyalgia rheumatica and, three years later, with giant cell arteritis; eight years on she keeps as active as she can and refuses to let the conditions rule her life." },
    { id: "yt-jeffery-gca", person: "Jeffery", title: "Polymyalgia Rheumatica and Giant Cell Arteritis - Jeffery's Story", channel: "PMRGCAuk", url: "https://www.youtube.com/watch?v=SdqHrouHhg4", duration: "4:13", about: "Jeffery's polymyalgia rheumatica worsened until he spent two weeks in hospital and developed giant cell arteritis; after five flare-ups in five years of tapering, he is enjoying life and getting help when he needs it." },
    { id: "yt-malcolm-gca", person: "Malcolm", title: "Polymyalgia Rheumatica and Giant Cell Arteritis - Malcolm's experience", channel: "PMRGCAuk", url: "https://www.youtube.com/watch?v=5jLjt8UwoX0", duration: "5:47", about: "Malcolm had polymyalgia rheumatica symptoms without a diagnosis for a time and a trip to A&E for emergency giant cell arteritis treatment, and reflects on his care and the charity's support." },
  ],
  // end of wiring
  title: "Giant cell arteritis",
  summary: "Inflammation of medium and large arteries, usually those around the temples, in people over 50. It causes headaches, scalp tenderness and jaw pain, and it can affect sight, which is why it is treated urgently with steroids.",
  keywords: ["giant cell arteritis", "gca", "temporal arteritis", "headache", "jaw pain", "vision"],
  understand: [
    ["what-it-is", "What giant cell arteritis is", 3, ["arteries", "inflammation", "temples"], "Inflamed arteries, often at the temples."],
    ["symptoms", "Symptoms: headache, scalp and jaw", 3, ["headache", "scalp", "jaw pain"]],
    ["urgent", "Sight problems: get help straight away", 2, ["vision", "urgent", "sight"]],
    ["diagnosis", "Blood tests, scans and biopsy", 3, ["blood test", "ultrasound", "biopsy"]],
  ],
  recover: [
    ["steroids", "High-dose steroids at the start", 3, ["prednisolone", "steroids"]],
    ["reducing", "Reducing the dose over time", 3, ["tapering", "dose"]],
    ["other-medicines", "Other medicines that help", 3, ["tocilizumab", "methotrexate"]],
    ["side-effects", "Side effects and protecting your bones", 3, ["side effects", "bones", "blood sugar"]],
  ],
  liveWell: [
    ["relapse", "If symptoms come back", 2, ["relapse", "flare"]],
    ["pmr-link", "Giant cell arteritis and polymyalgia", 2, ["polymyalgia rheumatica", "link"]],
    ["steroid-card", "Steroid cards and sick days", 2, ["steroid card", "illness"]],
    ["support", "Support and everyday life", 2, ["support", "daily life"]],
  ],
  sources: [source(NHS, "Giant cell arteritis"), PMRGCA_UK, VERSUS_ARTHRITIS],
  askDoctor: ["How quickly should my steroid dose come down?", "Which symptoms mean I should come back straight away?", "Do I need bone protection or a stomach-protecting tablet?", "Should I have a steroid emergency card?"],
  related: [{ groupId: "arthritis", conditionId: "polymyalgia-rheumatica" }, { groupId: "bone-health", conditionId: "osteoporosis" }, { groupId: "stroke", conditionId: "tia" }],
});

export const sjogrens = condition({
  id: "sjogrens",
  prefix: "sjo-",
  facts: ["About 9 in 10 people with it are women", "Most often diagnosed between 40 and 60", "Most have a normal life expectancy"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-jhu-sjogrens-overview", title: "Sjögren's Syndrome - Disease Overview | Johns Hopkins", kind: "video", duration: "3:19", url: "https://www.youtube.com/watch?v=TLwBy5E9els", extra: "A specialist centre director explains", publisher: "Johns Hopkins Rheumatology", keywords: ["symptoms", "dryness", "diagnosis"] },
    { id: "yt-sf-sjogrens-immune", title: "Sjögren’s Disease Explained: The Immune System and What Goes Wrong", kind: "video", duration: "5:06", url: "https://www.youtube.com/watch?v=JgvHUgmKrqQ", extra: "What goes wrong in the immune system", publisher: "Sjögrens Foundation", keywords: ["immune system", "autoimmune", "glands"] },
    { id: "yt-bsr-sjogren-guideline", title: "Rheumatology Roundtable: Sjogren disease guideline", kind: "video", duration: "12:29", url: "https://www.youtube.com/watch?v=sxvB-4YJV1o", extra: "UK experts on the new guideline", publisher: "British Society for Rheumatology", keywords: ["guideline", "treatment", "UK"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-linda-sjogrens", person: "Linda", title: "Linda's story", channel: "Sjögren Europe", url: "https://www.youtube.com/watch?v=yfRQd43bW9Q", duration: "3:15", about: "Linda gives a British patient's perspective on living with Sjögren's syndrome." },
    { id: "yt-jane-sjogrens", person: "Jane", title: "Living with Sjögren's Syndrome: Jane’s 30-Year Journey of Strength and Resilience", channel: "The University of Kansas Health System", url: "https://www.youtube.com/watch?v=qpQKUc6FTFU", duration: "1:51", about: "For over 30 years, Jane has managed Sjögren's, with joint pain, dry eyes and severe dental issues, and she continues to tend her garden and embrace life." },
  ],
  // end of wiring
  title: "Sjögren's syndrome",
  summary: "An autoimmune condition that mainly affects the glands that make tears and saliva, causing dry eyes and a dry mouth, often with tiredness and joint pain. There is no cure, but many treatments ease the dryness and protect the eyes and teeth.",
  keywords: ["sjogren's", "sjogrens", "dry eyes", "dry mouth", "autoimmune", "fatigue"],
  understand: [
    ["what-it-is", "What Sjögren's syndrome is", 3, ["autoimmune", "glands", "dryness"], "An immune system that targets the moisture glands."],
    ["symptoms", "Dry eyes, dry mouth and more", 3, ["dry eyes", "dry mouth", "tiredness"]],
    ["diagnosis", "Tests and diagnosis", 3, ["blood tests", "eye test", "saliva"]],
    ["other-organs", "When it affects joints, nerves or other organs", 3, ["joints", "nerves", "lungs"]],
  ],
  recover: [
    ["eyes", "Caring for dry eyes", 3, ["eye drops", "dry eyes"]],
    ["mouth", "Caring for a dry mouth and teeth", 3, ["saliva", "teeth", "dentist"]],
    ["medicines", "Medicines for joints and tiredness", 3, ["hydroxychloroquine", "pain relief"]],
    ["checks", "Regular checks", 2, ["checks", "lymphoma", "follow-up"]],
  ],
  liveWell: [
    ["fatigue", "Fatigue and pacing", 3, ["fatigue", "pacing"]],
    ["everyday", "Dryness at home, work and when travelling", 3, ["humidity", "screens", "travel"]],
    ["pregnancy", "Pregnancy and Sjögren's", 2, ["pregnancy", "antibodies"]],
    ["support", "Support and living well", 2, ["support", "charity"]],
  ],
  sources: [source(NHS, "Sjögren's syndrome"), SJOGRENS_UK, VERSUS_ARTHRITIS],
  askDoctor: ["Which eye drops or gels would suit me?", "How often should I see the dentist?", "Would a medicine help my joints or tiredness?", "Which symptoms should I report quickly?"],
  related: [{ groupId: "arthritis", conditionId: "lupus" }, { groupId: "arthritis", conditionId: "rheumatoid" }, { groupId: "muscles", conditionId: "fibromyalgia" }],
});

export const systemicSclerosis = condition({
  id: "systemic-sclerosis",
  prefix: "ssc-",
  facts: ["Around 19,000 people in the UK", "95% say Raynaud's came first", "Check-ups best once a year"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-sruk-know-scleroderma", title: "What you need to know about scleroderma", kind: "video", duration: "3:34", url: "https://www.youtube.com/watch?v=0nfV508j8tQ", extra: "SRUK's Scleroderma Awareness Month film", publisher: "SRUK", keywords: ["scleroderma", "awareness", "what is scleroderma"] },
    { id: "yt-sruk-first-symptoms", title: "What are the first symptoms of scleroderma?", kind: "video", duration: "3:21", url: "https://www.youtube.com/watch?v=7d7qzJAtN4k", extra: "The first symptoms of scleroderma", publisher: "SRUK", keywords: ["first symptoms", "early signs", "diagnosis"] },
    { id: "yt-sruk-hand-exercises", title: "5 Minute Hand Exercises to Beat Scleroderma Stiffness", kind: "video", duration: "9:39", url: "https://www.youtube.com/watch?v=DsBIZiWfNPk", extra: "A consultant physiotherapist's hand stretches", publisher: "SRUK", keywords: ["hand exercises", "stiffness", "physiotherapy"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-diane-ssc", person: "Diane", title: "Diane's shares her story of her diagnosis of Systemic Scleroderma.", channel: "WeAreSRUK", url: "https://www.youtube.com/watch?v=N4sLCEhRk08", duration: "6:30", about: "Diane talks about her diagnosis of systemic scleroderma, and her experiences of kidney failure and dialysis as a result of it." },
    { id: "yt-helen-ssc", person: "Helen", title: "Helen: \"There were symptoms of scleroderma probably for the last 8 or 9 years\"", channel: "WeAreSRUK", url: "https://www.youtube.com/watch?v=DtqwyODkwwk", duration: "4:02", about: "Helen received a diagnosis of scleroderma after years of living with symptoms, probably for the last 8 or 9 years." },
    { id: "yt-simon-ssc", person: "Simon", title: "Simon: \"There was a lot of confusion about my symptoms\"", channel: "WeAreSRUK", url: "https://www.youtube.com/watch?v=Lfrmg84wNZc", duration: "7:24", about: "Simon started reporting symptoms in 2018, but there was a lot of confusion about them, and it took a few years until he was diagnosed with scleroderma." },
  ],
  // end of wiring
  title: "Systemic sclerosis (scleroderma)",
  summary: "An autoimmune condition that causes thickening and hardening of the skin and, for some people, the internal organs. Raynaud's, where fingers turn white or blue in the cold, is often the first sign. Regular checks and treatment help protect the organs.",
  keywords: ["systemic sclerosis", "scleroderma", "raynaud's", "skin thickening", "autoimmune"],
  understand: [
    ["what-it-is", "What systemic sclerosis is", 3, ["autoimmune", "skin", "scarring"], "Skin and tissues that thicken and tighten."],
    ["raynauds", "Raynaud's: cold fingers and toes", 3, ["raynaud's", "cold", "fingers"]],
    ["types", "Limited and diffuse types", 3, ["limited", "diffuse", "types"]],
    ["organs", "Lungs, heart, gut and kidneys", 3, ["lungs", "heart", "gut", "kidneys"]],
  ],
  recover: [
    ["medicines", "Medicines that calm the immune system", 3, ["immunosuppressants", "mycophenolate"]],
    ["raynauds-care", "Treating Raynaud's and finger ulcers", 3, ["raynaud's", "ulcers", "warmth"]],
    ["checks", "Regular checks for lungs and heart", 3, ["checks", "lung tests", "echo"]],
    ["therapy", "Physiotherapy, hand exercises and skin care", 3, ["physiotherapy", "hands", "skin"]],
  ],
  liveWell: [
    ["warmth", "Keeping warm", 2, ["warmth", "gloves", "cold"]],
    ["eating", "Eating, swallowing and reflux", 3, ["reflux", "swallowing", "food"]],
    ["urgent", "Symptoms to report quickly", 2, ["urgent", "blood pressure", "breathless"]],
    ["support", "Support and living well", 2, ["support", "mood"]],
  ],
  sources: [source(NHS, "Scleroderma"), SRUK, VERSUS_ARTHRITIS],
  askDoctor: ["Which type of systemic sclerosis do I have?", "How often will my lungs and heart be checked?", "What can I do about Raynaud's attacks?", "Which symptoms should I report straight away?"],
  related: [{ groupId: "arthritis", conditionId: "lupus" }, { groupId: "long-term-lung", conditionId: "pulmonary-fibrosis" }, { groupId: "arthritis", conditionId: "sjogrens" }],
});

export const wristFracture = condition({
  id: "wrist-fracture",
  prefix: "wfx-",
  facts: ["Most heal in 6 to 12 weeks", "A cast usually stays on about 6 weeks", "Over 50? Ask about fracture liaison"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-grampian-wrist-fracture-exercise", title: "Wrist Fracture Exercise", kind: "video", duration: "5:26", url: "https://www.youtube.com/watch?v=HEWtDZPjO7c", extra: "exercises while in a cast", publisher: "NHS Grampian", keywords: ["wrist fracture", "exercises", "cast"] },
    { id: "yt-cornwall-looking-after-cast", title: "Looking after your cast   a guide for patients", kind: "video", duration: "2:26", url: "https://www.youtube.com/watch?v=_y8snLlJ-gs", extra: "a patient guide to cast care", publisher: "Royal Cornwall Hospitals NHS Trust", keywords: ["cast", "cast care", "fracture"] },
    { id: "yt-george-eliot-wrist-exercises", title: "Exercises after a wrist fracture", kind: "video", duration: "2:40", url: "https://www.youtube.com/watch?v=48CshMyhK_g", extra: "exercises to aid recovery", publisher: "George Eliot Hospital NHS Trust", keywords: ["wrist fracture", "exercises", "recovery"] },
  ],
  // end of wiring
  title: "Broken wrist",
  summary: "A break in one of the bones at the wrist, often from putting a hand out in a fall. Most heal well in a cast or splint over about six weeks, and some need an operation. Exercises afterwards help bring back movement and grip.",
  keywords: ["broken wrist", "wrist fracture", "colles", "cast", "fall"],
  understand: [
    ["what-it-is", "What a broken wrist is", 3, ["wrist", "break", "radius"], "The bones at the wrist, and how they break."],
    ["signs", "Signs, and when to go to A&E", 2, ["pain", "swelling", "a&e"]],
    ["treatment", "Casts, splints and operations", 3, ["cast", "splint", "surgery"]],
    ["bones", "Weaker bones: should you be checked?", 3, ["osteoporosis", "bone density"]],
  ],
  recoverTitle: "Recovery",
  recover: [
    ["cast-care", "Looking after a cast or splint", 3, ["cast", "swelling", "itching"]],
    ["exercises", "Exercises once the cast is off", 3, ["exercises", "stiffness"]],
    ["pain", "Pain, stiffness and swelling", 3, ["pain", "stiffness", "swelling"]],
    ["warning-signs", "Warning signs during healing", 2, ["numbness", "urgent"]],
  ],
  liveWell: [
    ["daily-tasks", "Everyday tasks with one hand", 3, ["dressing", "cooking"]],
    ["driving-work", "Driving and going back to work", 2, ["driving", "work"]],
    ["falls", "Preventing another fall", 3, ["falls", "home safety"]],
    ["long-term", "When it takes longer to recover", 2, ["recovery", "stiffness"]],
  ],
  sources: [source(NHS, "Broken arm or wrist"), CSP, ROS],
  askDoctor: ["Will my wrist need an operation?", "How long will I be in a cast?", "Which exercises should I do, and when?", "Should I be checked for weaker bones?"],
  related: [{ groupId: "bone-health", conditionId: "osteoporosis" }, { groupId: "bone-health", conditionId: "hip-fracture" }, { groupId: "nerves", conditionId: "carpal-tunnel" }],
});

export const ankleFracture = condition({
  id: "ankle-fracture",
  prefix: "afx-",
  facts: ["Usually heals in 6 to 8 weeks", "Most often a break of the fibula", "Swelling can last up to a year"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-western-ankle-fracture-exercises", title: "Physiotherapy Exercises following an Ankle Fracture", kind: "video", duration: "7:13", url: "https://www.youtube.com/watch?v=lf6kLq2kwDA", extra: "physiotherapy exercises after an ankle fracture", publisher: "WesternTrust", keywords: ["exercises", "physiotherapy", "ankle fracture"] },
    { id: "yt-moc-weber-a", title: "Weber A Ankle Fracture - Virtual Fracture Clinic", kind: "video", duration: "11:50", url: "https://www.youtube.com/watch?v=djKBt2Z59G0", extra: "a virtual fracture clinic on Weber A breaks", publisher: "Midlands Orthopaedic Centre", keywords: ["weber a", "fracture clinic", "fibula"] },
    { id: "yt-glos-boots-braces", title: "Fracture Clinic: Boots and Braces", kind: "video", duration: "3:17", url: "https://www.youtube.com/watch?v=0esuQM7Yyzk", extra: "boots and braces from fracture clinic", publisher: "Gloucestershire Hospitals NHS Foundation Trust", keywords: ["boot", "brace", "fracture clinic"] },
  ],
  // end of wiring
  title: "Broken ankle",
  summary: "A break in one or more of the bones at the ankle, often from a twist or a fall. Treatment ranges from a boot or cast to an operation, and recovery takes weeks to months. Exercises help bring back movement, strength and balance.",
  keywords: ["broken ankle", "ankle fracture", "boot", "cast", "twisted ankle"],
  understand: [
    ["what-it-is", "What a broken ankle is", 3, ["ankle", "fibula", "tibia"], "The bones of the ankle, and how they break."],
    ["sprain-or-break", "Sprain or break: telling them apart", 3, ["sprain", "break", "x-ray"]],
    ["treatment", "Boots, casts and operations", 3, ["boot", "cast", "surgery"]],
    ["healing", "How long it takes to heal", 2, ["healing", "weeks"]],
  ],
  recoverTitle: "Recovery",
  recover: [
    ["weight-bearing", "Putting weight on it again", 3, ["weight bearing", "crutches"]],
    ["exercises", "Exercises for movement and balance", 3, ["exercises", "balance"]],
    ["swelling", "Swelling, pain and raising the leg", 3, ["swelling", "pain", "elevation"]],
    ["warning-signs", "Warning signs, including blood clots", 2, ["blood clot", "urgent"]],
  ],
  liveWell: [
    ["home", "Getting around at home", 3, ["stairs", "home"]],
    ["driving-work", "Driving and going back to work", 2, ["driving", "work"]],
    ["return-to-sport", "Getting back to walking and sport", 3, ["walking", "sport"]],
    ["long-term", "Stiffness and swelling that linger", 2, ["stiffness", "long-term"]],
  ],
  sources: [source(NHS, "Broken ankle"), CSP, ROS],
  askDoctor: ["How much weight can I put on my ankle, and when?", "Do I need anything to prevent blood clots?", "Which exercises should I do?", "When can I drive and go back to work?"],
  related: [{ groupId: "injuries", conditionId: "sprains-strains" }, { groupId: "bone-health", conditionId: "wrist-fracture" }, { groupId: "feet-tendons", conditionId: "achilles" }],
});

export const slippedDisc = condition({
  id: "slipped-disc",
  prefix: "disc-",
  facts: ["Also called a herniated disc", "Many people never know they have one", "Most common cause of sciatica"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-nhs-sciatica", title: "Sciatica pain relief, exercises and treatment | NHS", kind: "video", duration: "3:30", url: "https://www.youtube.com/watch?v=cXL5fZ7-Tg8", extra: "A spinal physio on sciatica exercises", publisher: "NHS", keywords: ["sciatica", "exercises", "pain relief"] },
    { id: "yt-mayo-herniated-disk", title: "Mayo Clinic Explains Herniated Disk", kind: "video", duration: "5:24", url: "https://www.youtube.com/watch?v=CVMcDjRGXyI", extra: "Causes, symptoms, diagnosis and treatment", publisher: "Mayo Clinic", keywords: ["herniated disc", "symptoms", "treatment"] },
    { id: "yt-mgb-disc-herniation", title: "Disc Herniation: Symptoms, Treatment, Risk Factors & Causes | Mass General Brigham", kind: "video", duration: "4:13", url: "https://www.youtube.com/watch?v=d0HNORwk_2M", extra: "A spine surgeon on treatment options", publisher: "Mass General Brigham", keywords: ["disc herniation", "causes", "treatment"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-gabriel-disc", person: "Gabriel", title: "Gabriel's Story: Returning to Dance After Herniated Disc | Ohio State Sports Medicine", channel: "Ohio State Wexner Medical Center", url: "https://www.youtube.com/watch?v=iiU0_E-9wrY", duration: "4:16", about: "BalletMet dancer Gabriel shares how a sports medicine team helped him recover from a herniated disc in his back and return to dancing." },
    { id: "yt-phil-disc", person: "Phil", title: "Endoscopic Spine Surgery Patient Story", channel: "Campbell Clinic Orthopaedics", url: "https://www.youtube.com/watch?v=UNeTEP9esXE", duration: "3:22", about: "Endoscopic spine surgery allowed Phil to get back to exercising, travelling and other activities that pain from his herniated disc had stopped him enjoying." },
    { id: "yt-joel-disc", person: "Joel", title: "Patient Story: Microdiscectomy", channel: "Emory Healthcare", url: "https://www.youtube.com/watch?v=x-smgjrogAY", duration: "2:10", about: "Joel, an Emmy Award winner, found himself needing back surgery, a microdiscectomy, in order to perform daily functions." },
  ],
  // end of wiring
  title: "Slipped disc",
  summary: "When the soft centre of a spinal disc bulges out and presses on a nerve, causing back or neck pain and sometimes pain, numbness or weakness down an arm or leg. Most people get better within about six weeks with activity and painkillers.",
  keywords: ["slipped disc", "herniated disc", "prolapsed disc", "back pain", "nerve pain"],
  understand: [
    ["what-it-is", "What a slipped disc is", 3, ["disc", "nerve", "spine"], "A disc that bulges onto a nerve."],
    ["symptoms", "Symptoms in the back, neck, arms and legs", 3, ["pain", "numbness", "weakness"]],
    ["causes", "Why it happens", 2, ["age", "lifting", "causes"]],
    ["urgent", "Symptoms that need urgent help", 2, ["cauda equina", "urgent"]],
  ],
  recover: [
    ["moving", "Keeping active while it heals", 3, ["activity", "movement"]],
    ["painkillers", "Painkillers and nerve pain medicines", 3, ["painkillers", "nerve pain"]],
    ["physio", "Physiotherapy and exercises", 3, ["physiotherapy", "exercises"]],
    ["injections-surgery", "Injections and surgery", 3, ["injections", "surgery", "discectomy"]],
  ],
  liveWell: [
    ["lifting", "Lifting and bending", 2, ["lifting", "bending"]],
    ["work", "Work and sitting", 3, ["work", "sitting"]],
    ["sleep", "Sleeping with back or leg pain", 2, ["sleep", "position"]],
    ["coming-back", "Stopping it coming back", 2, ["prevention", "exercise"]],
  ],
  sources: [source(NHS, "Slipped disc"), BACKCARE, CSP],
  askDoctor: ["Is a slipped disc causing my leg or arm pain?", "Which activities are safe for me now?", "Would physiotherapy help?", "Which symptoms mean I need help urgently?"],
  related: [{ groupId: "nerves", conditionId: "sciatica" }, { groupId: "back-neck", conditionId: "back-pain" }, { groupId: "back-neck", conditionId: "spinal-stenosis" }],
});

export const scoliosis = condition({
  id: "scoliosis",
  prefix: "scol-",
  facts: ["Over 2 million people in the UK", "Most often starts from age 10 to 15", "About 8 in 10 have no known cause"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-ssr-abcd", title: "🎥 Mr Sudarshan Munigangaiah – The ABCD of Scoliosis", kind: "video", duration: "4:04", url: "https://www.youtube.com/watch?v=HCP7lWepU5s", extra: "A spinal surgeon on early signs", publisher: "Scoliosis Support & Research", keywords: ["signs", "abcd", "diagnosis"] },
    { id: "yt-ssr-adult-surgery", title: "🎥 Professor Hilali Noordeen – Extra planning for adult scoliosis surgery", kind: "video", duration: "3:14", url: "https://www.youtube.com/watch?v=pylAZroFyMU", extra: "Why adult surgery needs more planning", publisher: "Scoliosis Support & Research", keywords: ["surgery", "adults", "planning"] },
    { id: "yt-severn-degenerative", title: "Scoliosis Correction   Degenerative Scoliosis", kind: "video", duration: "6:20", url: "https://www.youtube.com/watch?v=fd7Ts5YXq34", extra: "Correcting a curve from degenerative changes", publisher: "NHS Severn Spine", keywords: ["degenerative", "surgery", "adults"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-sandra-scoliosis", person: "Sandra", title: "Embrace Your Curve: Sandra's Story 💙", channel: "Scoliosis Support & Research", url: "https://www.youtube.com/watch?v=uFMyeWR6_pU", duration: "0:50", about: "Sandra did not discover she had scoliosis until later in life, and today she is a personal trainer and bodybuilder who believes in training with her body, not against it." },
    { id: "yt-elizabeth-scoliosis", person: "Elizabeth", title: "Embrace Your Curve: Elizabeth's Story 💙", channel: "Scoliosis Support & Research", url: "https://www.youtube.com/watch?v=tmDVrPtR_HM", duration: "1:42", about: "Elizabeth was diagnosed with scoliosis in 1959 and had spinal surgery in Edinburgh in 1963, and looking back she describes it as a blessing that let her move forward and live her life." },
    { id: "yt-gabby-scoliosis", person: "Gabby", title: "Gabby Allen: Fitness, Confidence & Life with Scoliosis | Beyond The Curve Podcast", channel: "Scoliosis Support & Research", url: "https://www.youtube.com/watch?v=PK3_NRYOQQk", duration: "43:00", about: "TV personality and fitness trainer Gabby Allen talks openly about living with scoliosis, her relationship with her body and fitness, and confidence in the public eye." },
  ],
  // end of wiring
  title: "Scoliosis",
  summary: "A sideways curve of the spine. It often starts in childhood or the teenage years, and in adults it can also develop with age. Many curves are mild and need only checks; some need a brace or an operation. Exercise and pain relief help adults with symptoms.",
  keywords: ["scoliosis", "curved spine", "back curve", "brace", "spinal fusion"],
  understand: [
    ["what-it-is", "What scoliosis is", 3, ["curve", "spine"], "A spine that curves to one side."],
    ["signs", "Signs to look for", 2, ["shoulders", "hips", "uneven"]],
    ["adults", "Scoliosis in adults", 3, ["adults", "degenerative", "age"]],
    ["diagnosis", "X-rays and measuring the curve", 2, ["x-ray", "diagnosis"]],
  ],
  recover: [
    ["monitoring", "Checks and monitoring", 2, ["monitoring", "x-rays"]],
    ["brace", "Back braces", 3, ["brace", "children"]],
    ["surgery", "Surgery for scoliosis", 3, ["surgery", "spinal fusion"]],
    ["pain", "Managing back pain", 3, ["pain", "exercise", "physiotherapy"]],
  ],
  liveWell: [
    ["exercise", "Exercise and sport", 3, ["exercise", "sport"]],
    ["body-image", "Body image and confidence", 2, ["confidence", "clothes"]],
    ["pregnancy", "Pregnancy with scoliosis", 2, ["pregnancy"]],
    ["support", "Support and information", 2, ["support", "charity"]],
  ],
  sources: [source(NHS, "Scoliosis"), SCOLIOSIS_SR, BACKCARE],
  askDoctor: ["How big is my curve, and is it likely to change?", "Do I need a brace or any checks?", "Which exercises would help my back?", "When would surgery be considered?"],
  related: [{ groupId: "back-neck", conditionId: "back-pain" }, { groupId: "back-neck", conditionId: "slipped-disc" }, { groupId: "bone-health", conditionId: "osteoporosis" }],
});

export const rotatorCuff = condition({
  id: "rotator-cuff",
  prefix: "rc-",
  facts: ["Most common cause of shoulder pain", "Usually affects people aged 35 to 75", "Exercises often help in 6 to 12 weeks"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-bess-shoulder-pain-exercises-intro", title: "Exercises for Shoulder Pain - Introduction", kind: "video", duration: "0:51", url: "https://www.youtube.com/watch?v=s_BDnPssQFY", extra: "introducing the BESS shoulder pain exercises", publisher: "BESS - British Elbow & Shoulder Society", keywords: ["rotator cuff", "subacromial pain", "exercises"] },
    { id: "yt-somerset-rotator-cuff-pain", title: "Rotator Cuff Related Shoulder Pain", kind: "video", duration: "9:33", url: "https://www.youtube.com/watch?v=dKlnXJKrX8U", extra: "rotator cuff related shoulder pain", publisher: "Somerset NHS Foundation Trust", keywords: ["rotator cuff", "shoulder pain"] },
    { id: "yt-plymouth-rotator-cuff-repair-early-exercises", title: "Rotator cuff repair. Early post op exercises in first 3 wee", kind: "video", duration: "2:46", url: "https://www.youtube.com/watch?v=gfX2ehiDeYE", extra: "simple exercises for the first 3 weeks", publisher: "NHS University Hospitals Plymouth Physiotherapy", keywords: ["rotator cuff", "repair", "surgery", "exercises"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-betsy-rotator-cuff-repair", person: "Betsy", title: "Rotator Cuff Repair: Betsy Bassan's Story", channel: "MedStar Georgetown University Hospital", url: "https://www.youtube.com/watch?v=_EHYq-9wjbM", duration: "3:07", about: "Betsy runs her own company and enjoys tennis and the gym, and tells her story of treatment and recovery after a torn rotator cuff began to slow her down." },
    { id: "yt-mayra-rotator-cuff-surgery", person: "Mayra", title: "Mayra’s Story – Rotator Cuff Surgery – Temple Health", channel: "Temple Health", url: "https://www.youtube.com/watch?v=PDs-BnwkcEI", duration: "3:26", about: "After a slip and fall on ice, Mayra had a severe rotator cuff rupture and a nerve injury, and had her rotator cuff repaired before intensive physical and occupational therapy." },
  ],
  // end of wiring
  title: "Rotator cuff problems",
  summary: "Pain and weakness from the group of tendons and muscles that hold the shoulder in place, from wear, irritation or a tear. It often hurts when lifting the arm or at night. Rest, exercises and physiotherapy help most people.",
  keywords: ["rotator cuff", "shoulder pain", "impingement", "tendinopathy", "torn rotator cuff"],
  understand: [
    ["what-it-is", "What the rotator cuff is", 3, ["tendons", "shoulder"], "The tendons that hold the shoulder steady."],
    ["types", "Tendinopathy, impingement and tears", 3, ["tendinopathy", "impingement", "tear"]],
    ["symptoms", "Symptoms: lifting, reaching and nights", 2, ["pain", "night", "weakness"]],
    ["diagnosis", "Examination and scans", 2, ["ultrasound", "mri", "diagnosis"]],
  ],
  recover: [
    ["self-care", "Rest, ice and painkillers", 3, ["rest", "ice", "painkillers"]],
    ["exercises", "Shoulder exercises", 3, ["exercises", "strengthening"]],
    ["injections", "Steroid injections", 2, ["injection", "steroids"]],
    ["surgery", "When surgery is offered", 3, ["surgery", "repair"]],
  ],
  liveWell: [
    ["daily-tasks", "Reaching, dressing and sleeping", 3, ["reaching", "dressing", "sleep"]],
    ["work", "Work and lifting", 2, ["work", "lifting"]],
    ["sport", "Getting back to sport", 2, ["sport", "throwing"]],
    ["long-term", "Pain that lasts", 2, ["long-term", "recovery"]],
  ],
  sources: [source(NHS, "Shoulder pain"), CSP, VERSUS_ARTHRITIS],
  askDoctor: ["Is this tendinopathy or a tear?", "Which exercises should I do?", "Would an injection help me?", "When should I come back if it is not improving?"],
  related: [{ groupId: "muscles", conditionId: "frozen-shoulder" }, { groupId: "joint-replacement", conditionId: "shoulder-replacement" }, { groupId: "back-neck", conditionId: "neck-pain" }],
});

export const hypermobility = condition({
  id: "hypermobility",
  prefix: "hmob-",
  facts: ["Often gets better as you get older", "Many have no problems at all", "Main treatment: strength and fitness"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-hmsa-living-hms", title: "Living with Hypermobility syndromes", kind: "video", duration: "6:02", url: "https://www.youtube.com/watch?v=eTh0KYKXh4I", extra: "Everyday life with hypermobility", publisher: "Hypermobility Syndromes Association - HMSA", keywords: ["daily life", "awareness", "hypermobility syndromes"] },
    { id: "yt-nelft-flexible-child", title: "Hypermobility and The Flexible Child - NELFT Children's Physiotherapy", kind: "video", duration: "15:07", url: "https://www.youtube.com/watch?v=nZMTU8Ffdgc", extra: "Children's physiotherapy on flexible children", publisher: "NELFT - North East London NHS Foundation Trust", keywords: ["children", "physiotherapy", "flexible joints"] },
    { id: "yt-hct-hypermobility-webinar", title: "Hypermobility Webinar", kind: "video", duration: "23:08", url: "https://www.youtube.com/watch?v=OaRWFYi0qHQ", extra: "An NHS trust's hypermobility webinar", publisher: "Hertfordshire Community NHS Trust", keywords: ["hypermobility", "webinar", "NHS"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-brogan-zebra", person: "Brogan", title: "I Am a Zebra  Hypermobility and Invisible Disabilities", channel: "Hypermobility Syndromes Association - HMSA", url: "https://www.youtube.com/watch?v=Q3V1ItCnfas", duration: "4:25", about: "Brogan Lawes, who has lived with HSD all their life, made this awareness video to help people with HSD, EDS and other disabilities explain what it is like to the people around them." },
    { id: "yt-rebecca-heds", person: "Rebecca", title: "Rebecca's story", channel: "Genetic Alliance UK", url: "https://www.youtube.com/watch?v=b-FcHz46q9Y", duration: "4:26", about: "Rebecca has Ehlers-Danlos syndrome type 3, also known as hypermobile EDS, a condition that can be hard to diagnose." },
    { id: "yt-tynara-eds", person: "Tynara", title: "My Story - Tynara", channel: "The Ehlers-Danlos Support UK", url: "https://www.youtube.com/watch?v=h56iaZmtbxw", duration: "6:34", about: "Tynara tells her own story on Ehlers-Danlos Support UK's channel." },
  ],
  // end of wiring
  title: "Joint hypermobility",
  summary: "Joints that move further than most people's. Many people with hypermobile joints have no problems, but some have pain, tiredness or joints that dislocate easily, sometimes as part of a hypermobility spectrum disorder or hypermobile Ehlers-Danlos syndrome.",
  keywords: ["hypermobility", "double jointed", "ehlers-danlos", "heds", "hypermobility spectrum disorder", "joint pain"],
  understand: [
    ["what-it-is", "What joint hypermobility is", 3, ["flexible", "joints"], "Joints that bend further than usual."],
    ["when-a-problem", "When it causes problems", 3, ["pain", "dislocation", "symptoms"]],
    ["hsd-heds", "Hypermobility spectrum disorder and hEDS", 3, ["hsd", "heds", "ehlers-danlos"]],
    ["diagnosis", "How it is assessed", 2, ["beighton", "diagnosis"]],
  ],
  recover: [
    ["strengthening", "Strengthening and joint control", 3, ["exercise", "strength", "physiotherapy"]],
    ["pain", "Managing pain", 3, ["pain", "painkillers"]],
    ["fatigue", "Fatigue and pacing", 3, ["fatigue", "pacing"]],
    ["dislocations", "Dislocations and subluxations", 2, ["dislocation", "subluxation"]],
  ],
  liveWell: [
    ["everyday", "Posture, footwear and everyday tasks", 3, ["posture", "footwear"]],
    ["exercise", "Choosing exercise", 3, ["exercise", "sport"]],
    ["work-school", "Work and study", 2, ["work", "study"]],
    ["support", "Support and living well", 2, ["support", "mood"]],
  ],
  sources: [source(NHS, "Joint hypermobility"), HMSA, CSP],
  askDoctor: ["Is my hypermobility causing my symptoms?", "Can I be referred to a physiotherapist?", "What should I do if a joint dislocates?", "Which kinds of exercise suit me?"],
  related: [{ groupId: "muscles", conditionId: "fibromyalgia" }, { groupId: "injuries", conditionId: "sprains-strains" }, { groupId: "after-treatment", conditionId: "cancer-fatigue" }],
});

export const bursitis = condition({
  id: "bursitis",
  prefix: "burs-",
  facts: ["Often in shoulders, hips, elbows, knees", "Should go away in a few weeks", "2 in 3 elbow cases are not infected"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-somerset-gtps", title: "Greater trochanteric pain syndrome", kind: "video", duration: "6:50", url: "https://www.youtube.com/watch?v=z9w5axHITms", extra: "condition, symptoms, managing it, exercises", publisher: "Somerset NHS Foundation Trust", keywords: ["hip", "trochanteric bursitis", "exercises"] },
    { id: "yt-cht-lateral-hip", title: "Exercises to help your lateral hip pain", kind: "video", duration: "4:42", url: "https://www.youtube.com/watch?v=n6HvASZlE8M", extra: "exercises for pain outside the hip", publisher: "Calderdale and Huddersfield NHS Foundation Trust", keywords: ["hip", "exercises", "lateral hip pain"] },
    { id: "yt-mount-sinai-bursitis", title: "What Is Bursitis and How Can It Be Treated?", kind: "video", duration: "2:14", url: "https://www.youtube.com/watch?v=r8Tv6L783zs", extra: "an orthopaedic surgeon explains bursitis", publisher: "Mount Sinai Health System", keywords: ["bursitis", "treatment"] },
  ],
  // end of wiring
  title: "Bursitis",
  summary: "Painful swelling of a bursa, a small fluid-filled sac that cushions a joint, most often at the hip, shoulder, elbow or knee. It usually settles with rest and self-care within a few weeks. A hot, red bursa with a fever needs checking quickly.",
  keywords: ["bursitis", "hip pain", "elbow swelling", "knee swelling", "trochanteric"],
  understand: [
    ["what-it-is", "What bursitis is", 3, ["bursa", "swelling"], "A small cushion that becomes inflamed."],
    ["where", "Hip, shoulder, elbow and knee", 3, ["hip", "shoulder", "elbow", "knee"]],
    ["causes", "Why it happens", 2, ["pressure", "overuse", "injury"]],
    ["urgent", "Signs of infection", 2, ["infection", "fever", "urgent"]],
  ],
  recover: [
    ["self-care", "Rest, ice and painkillers", 3, ["rest", "ice", "painkillers"]],
    ["exercises", "Exercises and physiotherapy", 3, ["exercises", "physiotherapy"]],
    ["injections", "Steroid injections and other treatments", 2, ["injection", "drainage"]],
    ["infected", "Treating an infected bursa", 2, ["antibiotics", "infection"]],
  ],
  liveWell: [
    ["pressure", "Taking the pressure off", 3, ["kneeling", "leaning", "sleeping"]],
    ["activity", "Staying active", 2, ["activity", "exercise"]],
    ["work", "Work and repetitive tasks", 2, ["work", "kneeling"]],
    ["coming-back", "Stopping it coming back", 2, ["prevention"]],
  ],
  sources: [source(NHS, "Bursitis"), CSP, VERSUS_ARTHRITIS],
  askDoctor: ["Which bursa is affected?", "Which exercises would help?", "Would an injection be an option?", "Which signs mean it might be infected?"],
  related: [{ groupId: "arthritis", conditionId: "osteoarthritis" }, { groupId: "feet-tendons", conditionId: "tennis-elbow" }, { groupId: "muscles", conditionId: "rotator-cuff" }],
});

export const shoulderReplacement = condition({
  id: "shoulder-replacement",
  prefix: "shr-",
  facts: ["Usually 2 to 3 nights in hospital", "Often a sling for up to 4 weeks", "Very good chance it lasts 10 years"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-uhcw-shoulder-replacement", title: "Shoulder Replacement Video - Patient Information", kind: "video", duration: "11:58", url: "https://www.youtube.com/watch?v=rkSnS4T4Hr4", extra: "an NHS pre-operative education video", publisher: "nhsuhcw", keywords: ["shoulder replacement", "before surgery", "patient information"] },
    { id: "yt-auk-shoulder-surgery-exercises", title: "Surgery Toolkit: Shoulder replacement exercises for before and after surgery", kind: "video", duration: "15:40", url: "https://www.youtube.com/watch?v=TVnZYNGbEnY", extra: "follow-along exercises with a physiotherapist", publisher: "Arthritis UK", keywords: ["exercises", "before surgery", "after surgery"] },
    { id: "yt-mft-post-op-shoulder-exercises", title: "Sh 1 Post-Operative Shoulder Exercises MFT", kind: "video", duration: "4:46", url: "https://www.youtube.com/watch?v=hnCwHI75uVk", extra: "early exercises after shoulder surgery", publisher: "Manchester University NHS Foundation Trust", keywords: ["exercises", "after surgery", "physiotherapy"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-kevin-shoulder", person: "Kevin", title: "Kevin's Story - Total Shoulder Replacement at KIMS Hospital", channel: "KIMS Hospital", url: "https://www.youtube.com/watch?v=pLok0YcLOu8", duration: "3:07", about: "Kevin had suffered from severe pain in his shoulder for two years and was unable to use his right arm for anything, before his total shoulder replacement at KIMS Hospital." },
    { id: "yt-karen-shoulder", person: "Karen", title: "Meet Karen Mitchell: Reverse Shoulder Replacement Patient", channel: "MedStar Health", url: "https://www.youtube.com/watch?v=JrHYVpR4xJo", duration: "3:15", about: "Karen Mitchell reflects on the shoulder pain she lived with for over three decades, and her decision to have a reverse shoulder replacement." },
    { id: "yt-mitch-shoulder", person: "Mitch", title: "Patient Story: Mitch Murray - Reverse Total Shoulder Replacement", channel: "UNC Health Appalachian", url: "https://www.youtube.com/watch?v=jqHV21dZHYM", duration: "3:00", about: "Mitch's worn-out shoulder had severely limited his activity, so that biking, swimming and weight lifting were no longer options, before his reverse total shoulder replacement." },
  ],
  // end of wiring
  title: "Shoulder replacement",
  summary: "An operation to replace a damaged shoulder joint, most often because of arthritis or a severe rotator cuff problem. It usually eases pain. A sling, careful exercises and patience over several months are part of the recovery.",
  keywords: ["shoulder replacement", "shoulder surgery", "arthroplasty", "reverse shoulder", "recovery"],
  understand: [
    ["what-it-is", "What a shoulder replacement involves", 3, ["operation", "artificial joint"], "The new joint, and the types."],
    ["deciding", "Deciding whether to have one", 3, ["decision", "benefits", "risks"]],
    ["preparing", "Getting ready for the operation", 3, ["preparing", "home"]],
    ["hospital", "The operation and the hospital stay", 3, ["hospital", "anaesthetic"]],
  ],
  recoverTitle: "Recovery",
  recover: [
    ["sling", "The sling and the first weeks", 3, ["sling", "first weeks"]],
    ["exercises", "Exercises after a shoulder replacement", 3, ["exercises", "physiotherapy"]],
    ["pain-sleep", "Pain and sleeping", 3, ["pain", "sleep"]],
    ["warning-signs", "Warning signs after surgery", 2, ["infection", "urgent"]],
  ],
  liveWell: [
    ["daily-life", "Dressing, washing and reaching", 3, ["dressing", "washing"]],
    ["driving-work", "Driving and going back to work", 2, ["driving", "work"]],
    ["activity", "Activity and sport with a new shoulder", 2, ["sport", "activity"]],
    ["long-term", "How long a new shoulder lasts", 2, ["lifespan", "follow-up"]],
  ],
  sources: [VERSUS_ARTHRITIS, source(NHS, "Shoulder pain and surgery"), CSP],
  askDoctor: ["Which type of replacement would suit me?", "How long will I wear a sling?", "What movements should I avoid, and for how long?", "When can I drive and go back to work?"],
  related: [{ groupId: "muscles", conditionId: "rotator-cuff" }, { groupId: "arthritis", conditionId: "osteoarthritis" }, { groupId: "joint-replacement", conditionId: "hip-replacement" }],
});

export const achilles = condition({
  id: "achilles",
  prefix: "ach-",
  facts: ["The body's strongest tendon", "Full recovery can take a year or longer", "It does not improve with rest"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-imperial-what-is-tendonitis", title: "What is tendonitis?", kind: "video", duration: "3:28", url: "https://www.youtube.com/watch?v=dCK0asnoBcQ", extra: "an NHS physiotherapist explains tendonitis", publisher: "Imperial College Healthcare NHS Trust", keywords: ["tendonitis", "tendon", "physiotherapy"] },
    { id: "yt-imperial-treat-tendonitis", title: "How to treat tendonitis", kind: "video", duration: "2:57", url: "https://www.youtube.com/watch?v=2kDgS3Jx0oU", extra: "medicines and lifestyle choices that help", publisher: "Imperial College Healthcare NHS Trust", keywords: ["tendonitis", "treatment", "self-care"] },
    { id: "yt-nhsggc-calf-raises", title: "NHSGGC - MSK Physiotherapy - Calf Raises for Foot Pain", kind: "video", duration: "1:34", url: "https://www.youtube.com/watch?v=Nyo2ogQLvCg", extra: "calf raises from NHS physiotherapy", publisher: "NHS Greater Glasgow and Clyde", keywords: ["calf raises", "exercises", "physiotherapy"] },
  ],
  // end of wiring
  title: "Achilles tendinopathy",
  summary: "Pain and stiffness in the Achilles tendon at the back of the heel, often worst first thing in the morning or at the start of exercise. It usually improves over months with a loading exercise programme, rest from aggravating activity and good footwear.",
  keywords: ["achilles", "tendinopathy", "tendonitis", "heel pain", "calf"],
  understand: [
    ["what-it-is", "What Achilles tendinopathy is", 3, ["tendon", "heel", "calf"], "The strongest tendon in the body, under strain."],
    ["causes", "Why it happens", 2, ["running", "load", "age"]],
    ["symptoms", "Symptoms, and a ruptured tendon", 2, ["stiffness", "rupture"]],
    ["how-long", "How long it lasts", 2, ["recovery", "months"]],
  ],
  recover: [
    ["exercises", "Loading exercises", 3, ["exercises", "heel raises"]],
    ["self-care", "Rest, ice and painkillers", 2, ["rest", "ice", "painkillers"]],
    ["footwear", "Shoes and heel raises", 2, ["shoes", "heel raise"]],
    ["further-treatment", "Physiotherapy and other treatments", 3, ["physiotherapy", "shockwave"]],
  ],
  liveWell: [
    ["sport", "Running and sport", 3, ["running", "sport"]],
    ["work", "Standing and walking at work", 2, ["work", "standing"]],
    ["weight", "Weight and tendon strain", 2, ["weight", "strain"]],
    ["coming-back", "Stopping it coming back", 2, ["prevention"]],
  ],
  sources: [source(NHS, "Tendonitis and heel pain"), VERSUS_ARTHRITIS, CSP],
  askDoctor: ["Is this tendinopathy or something more serious?", "Which exercises should I do?", "Should I stop running or sport for now?", "When should I come back if it is not better?"],
  related: [{ groupId: "feet-tendons", conditionId: "plantar-fasciitis" }, { groupId: "injuries", conditionId: "sprains-strains" }, { groupId: "bone-health", conditionId: "ankle-fracture" }],
});

export const bunions = condition({
  id: "bunions",
  prefix: "bun-",
  facts: ["Surgery is the only way to remove them", "Most go home the same day after surgery", "Often seen across family generations"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-odonovan-bunion-treatment", title: "Doctor explains BUNION TREATMENT OPTIONS", kind: "video", duration: "5:39", url: "https://www.youtube.com/watch?v=rrGGc5wmGPk", extra: "home care, podiatry and surgery options", publisher: "Doctor O'Donovan", keywords: ["bunions", "treatment", "podiatry"] },
    { id: "yt-gstt-bunion-surgery-pain", title: "How painful is bunion surgery?", kind: "video", duration: "1:16", url: "https://www.youtube.com/watch?v=seBv_l8bzyY", extra: "an NHS consultant on post-operative pain", publisher: "Compare my Care", keywords: ["surgery", "pain", "recovery"] },
    { id: "yt-auk-foot-toe-exercises", title: "Ankle, Foot and Toe Exercises for Arthritis and Joint Pain", kind: "video", duration: "23:40", url: "https://www.youtube.com/watch?v=LWGGQYPWPX0", extra: "follow-along feet and toe stretches", publisher: "Arthritis UK", keywords: ["exercise", "toes", "feet"] },
  ],
  // end of wiring
  title: "Bunions",
  summary: "A bony lump on the side of the foot at the base of the big toe, as the toe leans towards the others. Wider shoes, padding and painkillers ease the discomfort, and surgery can straighten the toe when pain affects everyday life.",
  keywords: ["bunions", "hallux valgus", "big toe", "foot pain", "shoes"],
  understand: [
    ["what-it-is", "What a bunion is", 3, ["big toe", "joint"], "A big toe that leans, and a bump that forms."],
    ["causes", "Why bunions form", 2, ["genes", "shoes", "arthritis"]],
    ["symptoms", "Symptoms and related problems", 2, ["pain", "corns", "hard skin"]],
    ["when-to-see-gp", "When to see a GP or podiatrist", 2, ["gp", "podiatrist"]],
  ],
  recover: [
    ["shoes", "Shoes that help", 3, ["shoes", "wide fit"]],
    ["padding", "Pads, insoles and toe spacers", 2, ["pads", "insoles", "spacers"]],
    ["pain-relief", "Pain relief", 2, ["painkillers", "ice"]],
    ["surgery", "Bunion surgery and recovery", 4, ["surgery", "recovery"]],
  ],
  liveWell: [
    ["walking", "Walking and staying active", 2, ["walking", "activity"]],
    ["work-occasions", "Work shoes and special occasions", 2, ["work", "heels"]],
    ["skin", "Corns, hard skin and foot care", 2, ["corns", "foot care"]],
    ["family", "Bunions in families", 2, ["family", "genes"]],
  ],
  sources: [source(NHS, "Bunions"), RCPOD, VERSUS_ARTHRITIS],
  askDoctor: ["Would a podiatrist help me?", "What shoes and insoles would suit me?", "Would surgery be an option, and what is the recovery?", "Could arthritis be part of the problem?"],
  related: [{ groupId: "feet-tendons", conditionId: "plantar-fasciitis" }, { groupId: "arthritis", conditionId: "osteoarthritis" }, { groupId: "arthritis", conditionId: "rheumatoid" }],
});

export const triggerFinger = condition({
  id: "trigger-finger",
  prefix: "trf-",
  facts: ["More likely over 40 and with diabetes", "Most often the thumb or ring finger", "Injection helps in about 70% of cases"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-derby-trigger-finger-exam", title: "Trigger Finger exam", kind: "video", duration: "3:02", url: "https://www.youtube.com/watch?v=VldMTN6PGdg", extra: "examining a trigger finger, from the NHS", publisher: "NHS Derby and Derbyshire ICB", keywords: ["trigger finger", "examination", "diagnosis"] },
    { id: "yt-hje-trigger-finger", title: "An Insight into Trigger Finger", kind: "video", duration: "3:51", url: "https://www.youtube.com/watch?v=GZ9KXr4O6dc", extra: "a consultant hand surgeon explains treatment", publisher: "St John & St Elizabeth Hospital", keywords: ["trigger finger", "treatment", "surgeon"] },
    { id: "yt-jubilee-hand-stiffness", title: "Post hand surgery - Stiffness management (Extended version)", kind: "video", duration: "6:02", url: "https://www.youtube.com/watch?v=XIpa7NtedwM", extra: "tips and exercises for stiffness after hand surgery", publisher: "NHS Golden Jubilee", keywords: ["after surgery", "stiffness", "exercises"] },
  ],
  // end of wiring
  title: "Trigger finger",
  summary: "A finger or thumb that catches, locks or clicks when you bend it, because the tendon cannot glide smoothly. It is more common with diabetes and rheumatoid arthritis. A splint, a steroid injection or a small operation usually frees it.",
  keywords: ["trigger finger", "trigger thumb", "locking finger", "stenosing tenosynovitis", "hand"],
  understand: [
    ["what-it-is", "What trigger finger is", 3, ["tendon", "sheath", "finger"], "A tendon that catches in its tunnel."],
    ["symptoms", "Catching, clicking and locking", 2, ["clicking", "locking", "stiffness"]],
    ["who", "Who gets it", 2, ["diabetes", "rheumatoid", "age"]],
    ["diagnosis", "How it is diagnosed", 2, ["examination"]],
  ],
  recover: [
    ["rest-splint", "Rest and a splint", 2, ["rest", "splint"]],
    ["injection", "Steroid injections", 3, ["injection", "steroids"]],
    ["surgery", "Trigger finger release", 3, ["surgery", "release"]],
    ["after-surgery", "Recovery after the operation", 2, ["recovery", "exercises"]],
  ],
  liveWell: [
    ["hand-use", "Easing strain on the hand", 2, ["grip", "tools"]],
    ["diabetes", "Trigger finger and diabetes", 2, ["diabetes", "blood sugar"]],
    ["work", "Work and hobbies", 2, ["work", "hobbies"]],
    ["coming-back", "If it comes back", 2, ["recurrence"]],
  ],
  sources: [source(NHS, "Trigger finger"), VERSUS_ARTHRITIS, BSSH],
  askDoctor: ["Would a splint or an injection help first?", "When would surgery be an option?", "How long will recovery take?", "Should my blood sugar be checked?"],
  related: [{ groupId: "feet-tendons", conditionId: "de-quervains" }, { groupId: "nerves", conditionId: "carpal-tunnel" }, { groupId: "diabetes", conditionId: "type-2" }],
});

export const deQuervains = condition({
  id: "de-quervains",
  prefix: "dq-",
  facts: ["Most common between 30 and 50", "Not harmful, but can be painful", "Mild cases can settle in weeks"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-handsociety-dq", title: "de Quervain's Tenosynovitis: Causes, Symptoms, & Treatment", kind: "video", duration: "2:52", url: "https://www.youtube.com/watch?v=ltGz5mJPbuo", extra: "causes, symptoms and treatment", publisher: "TheHandSociety", keywords: ["de quervain's", "thumb", "wrist", "tendons"] },
    { id: "yt-mayo-dq", title: "Mayo Clinic Minute: Is your thumb pain de Quervain's tenosynovitis?", kind: "video", duration: "1:00", url: "https://www.youtube.com/watch?v=o0KSfDuy3i0", extra: "an orthopaedic surgeon explains it", publisher: "Mayo Clinic", keywords: ["de quervain's", "thumb pain", "tendon", "surgery"] },
    { id: "yt-nuh-dq-exercises", title: "Management of De Quervain's Tenosynovitis: Home Exercise Programme and Splinting", kind: "video", duration: "2:59", url: "https://www.youtube.com/watch?v=UgTF9h7yyAU", extra: "home exercises and splinting", publisher: "National University Hospital (NUH) Singapore", keywords: ["de quervain's", "exercises", "splint", "brace"] },
  ],
  // end of wiring
  title: "De Quervain's tenosynovitis",
  summary: "Pain and swelling at the thumb side of the wrist, from irritated tendons that move the thumb. It is often linked to repeated gripping and lifting, including lifting a young baby. Rest, a splint and sometimes an injection help it settle.",
  keywords: ["de quervain's", "wrist pain", "thumb pain", "tenosynovitis", "mummy thumb"],
  understand: [
    ["what-it-is", "What de Quervain's tenosynovitis is", 3, ["tendons", "thumb", "wrist"], "Two thumb tendons, rubbing in a tight tunnel."],
    ["symptoms", "Symptoms at the thumb and wrist", 2, ["pain", "swelling", "grip"]],
    ["causes", "Why it happens", 2, ["gripping", "lifting", "babies"]],
    ["diagnosis", "How it is diagnosed", 2, ["finkelstein", "examination"]],
  ],
  recover: [
    ["self-care", "Rest, ice and painkillers", 2, ["rest", "ice", "painkillers"]],
    ["splint", "A thumb splint", 2, ["splint"]],
    ["injection", "Steroid injections", 2, ["injection", "steroids"]],
    ["surgery", "Surgery if it does not settle", 2, ["surgery", "release"]],
  ],
  liveWell: [
    ["lifting", "Lifting, including lifting a baby", 3, ["lifting", "baby"]],
    ["daily-tasks", "Phones, keyboards and daily tasks", 2, ["phone", "keyboard"]],
    ["exercises", "Gentle exercises as it improves", 2, ["exercises"]],
    ["coming-back", "Stopping it coming back", 2, ["prevention"]],
  ],
  sources: [source(NHS, "Thumb pain and wrist pain"), BSSH, VERSUS_ARTHRITIS],
  askDoctor: ["Would a splint help, and how long should I wear it?", "Would an injection be an option?", "How can I lift my baby without making it worse?", "When should I come back if it does not settle?"],
  related: [{ groupId: "feet-tendons", conditionId: "trigger-finger" }, { groupId: "nerves", conditionId: "carpal-tunnel" }, { groupId: "feet-tendons", conditionId: "tennis-elbow" }],
});

export const sprainsStrains = condition({
  id: "sprains-strains",
  prefix: "spr-",
  facts: ["Most can be treated at home", "Most feel better after 2 weeks", "Avoid running for up to 8 weeks"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-sja-bone-muscle-joint", title: "Bone, Muscle and Joint Injuries - Animated", kind: "video", duration: "3:03", url: "https://www.youtube.com/watch?v=N-FY78--JWw", extra: "how to treat these injuries", publisher: "St John Ambulance", keywords: ["first aid", "sprain", "joint injury"] },
    { id: "yt-ntees-sprains-self-care", title: "Sprains and strains self care", kind: "video", duration: "0:59", url: "https://www.youtube.com/watch?v=tiAX6lKCvTA", extra: "caring for a sprain at home", publisher: "North Tees and Hartlepool NHS Foundation Trust", keywords: ["sprains", "strains", "self care"] },
    { id: "yt-plymouth-ankle-rom", title: "Ankle Range of Movement exercises.", kind: "video", duration: "1:57", url: "https://www.youtube.com/watch?v=btEEj6NyTw0", extra: "ankle range of movement exercises", publisher: "NHS University Hospitals Plymouth Physiotherapy", keywords: ["ankle", "exercises", "physiotherapy"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-maleah-ankle", person: "Maleah", title: "Maleah's Story - Recovering From a Basketball Ankle Injury", channel: "Cincinnati Children's", url: "https://www.youtube.com/watch?v=xn538DsoDzU", duration: "1:41", about: "Maleah, a high school basketball player with a history of ankle issues, was diagnosed with three torn ligaments in her ankle and talks about her treatment plan." },
  ],
  // end of wiring
  title: "Sprains and strains",
  summary: "A sprain is a stretched or torn ligament, and a strain an overstretched muscle, often at the ankle, knee, wrist or back. Most get better within a few weeks with rest, ice, gentle movement and painkillers. Some signs mean an injury needs checking.",
  keywords: ["sprain", "strain", "twisted ankle", "pulled muscle", "ligament", "rice"],
  understand: [
    ["what-it-is", "Sprains and strains: the difference", 3, ["ligament", "muscle"], "Ligaments, muscles, and what overstretching does."],
    ["symptoms", "Pain, swelling and bruising", 2, ["pain", "swelling", "bruising"]],
    ["serious", "When it might be more serious", 2, ["break", "a&e", "urgent"]],
    ["healing", "How long healing takes", 2, ["healing", "weeks"]],
  ],
  recover: [
    ["first-days", "The first few days: rest, ice, raise", 3, ["rest", "ice", "elevation"]],
    ["painkillers", "Painkillers", 2, ["painkillers", "ibuprofen"]],
    ["moving", "Gentle movement and exercises", 3, ["exercises", "movement"]],
    ["physio", "Physiotherapy", 2, ["physiotherapy"]],
  ],
  liveWell: [
    ["return", "Getting back to sport and work", 3, ["sport", "work"]],
    ["prevention", "Warming up and preventing injuries", 2, ["warm up", "prevention"]],
    ["repeat", "Ankles that keep giving way", 2, ["recurring", "unstable"]],
    ["supports", "Supports, strapping and footwear", 2, ["strapping", "footwear"]],
  ],
  sources: [source(NHS, "Sprains and strains"), CSP],
  askDoctor: ["Could this be a break rather than a sprain?", "Which exercises should I start, and when?", "When can I go back to sport or work?", "Would physiotherapy help?"],
  related: [{ groupId: "bone-health", conditionId: "ankle-fracture" }, { groupId: "injuries", conditionId: "knee-ligament" }, { groupId: "feet-tendons", conditionId: "achilles" }],
});

export const kneeLigament = condition({
  id: "knee-ligament",
  prefix: "acl-",
  facts: ["4 main ligaments hold the knee", "ACL surgery usually takes 1 to 3 hours", "Sport again can take up to a year"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-hhft-what-is-acl", title: "The Anterior Cruciate Ligament: What is it & what does it do? | ACL Surgery", kind: "video", duration: "1:36", url: "https://www.youtube.com/watch?v=JQM8F9S06Yg", extra: "Where the ACL sits and what it does", publisher: "HipandKneeTV (Hampshire Hospitals NHS)", keywords: ["acl", "ligaments", "knee"] },
    { id: "yt-hhft-acl-how-why", title: "ACL Injuries:  The How & Why | ACL Surgery", kind: "video", duration: "3:36", url: "https://www.youtube.com/watch?v=qeEBhhOkGVw", extra: "Orthopaedic consultants on common ACL injuries", publisher: "HipandKneeTV (Hampshire Hospitals NHS)", keywords: ["acl injury", "sport", "giving way"] },
    { id: "yt-gj-acl-exercises", title: "ACL exercises post-operation", kind: "video", duration: "3:32", url: "https://www.youtube.com/watch?v=m8oBQ-PL0-E", extra: "Exercises after ACL surgery", publisher: "NHS Golden Jubilee", keywords: ["exercises", "after surgery", "physiotherapy"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-lois-acl", person: "Lois", title: "ACL Surgery, Lois's experience being a patient at Clifton Park Hospital, York", channel: "Ramsay Health Care UK", url: "https://www.youtube.com/watch?v=ddk09rZnshM", duration: "4:38", about: "Lois Richardson talks about her experience of an ACL injury, from the incident to surgery and recovery, including overcoming the worry before surgery and life afterwards." },
    { id: "yt-andi-acl", person: "Andi", title: "Andi Weimann's Road to Recovery", channel: "Bristol City", url: "https://www.youtube.com/watch?v=yohLKy5Ij5k", duration: "7:14", about: "Follow footballer Andi Weimann on his journey to full fitness after a season-ending anterior cruciate ligament injury." },
  ],
  // end of wiring
  title: "Knee ligament injury",
  summary: "Damage to one of the ligaments that hold the knee steady, such as the anterior cruciate ligament (ACL), often from a twist or a direct blow in sport. Many injuries heal with physiotherapy; some need a reconstruction operation and a long rehabilitation.",
  keywords: ["knee ligament", "acl", "cruciate ligament", "mcl", "knee injury", "twisted knee"],
  understand: [
    ["what-it-is", "The knee's ligaments", 3, ["acl", "mcl", "ligaments"], "Four bands that hold the knee steady."],
    ["symptoms", "Symptoms: a pop, swelling, giving way", 2, ["pop", "swelling", "unstable"]],
    ["diagnosis", "Examination and MRI scans", 2, ["examination", "mri"]],
    ["urgent", "When to go to A&E", 2, ["a&e", "urgent"]],
  ],
  recover: [
    ["first-days", "The first days after the injury", 3, ["rest", "ice", "crutches"]],
    ["physio", "Physiotherapy and rehabilitation", 3, ["physiotherapy", "rehabilitation"]],
    ["surgery", "ACL reconstruction surgery", 3, ["acl reconstruction", "surgery"]],
    ["after-surgery", "Recovery after reconstruction", 3, ["recovery", "months"]],
  ],
  liveWell: [
    ["return-to-sport", "Getting back to sport", 3, ["sport", "return"]],
    ["daily-life", "Work, stairs and driving", 2, ["work", "stairs", "driving"]],
    ["confidence", "Confidence in the knee", 2, ["confidence", "fear"]],
    ["long-term", "The knee in later years", 2, ["arthritis", "long-term"]],
  ],
  sources: [source(NHS, "ACL (anterior cruciate ligament) surgery"), VERSUS_ARTHRITIS, CSP],
  askDoctor: ["Which ligament is injured, and how badly?", "Do I need an operation, or will physiotherapy be enough?", "When can I go back to sport?", "What should I do if the knee keeps giving way?"],
  related: [{ groupId: "injuries", conditionId: "meniscus" }, { groupId: "injuries", conditionId: "sprains-strains" }, { groupId: "arthritis", conditionId: "osteoarthritis" }],
});

export const meniscus = condition({
  id: "meniscus",
  prefix: "men-",
  facts: ["A common knee cartilage injury", "Most improve without an operation", "Most go home the same day after surgery"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running time from each watch page.
  watch: [
    { id: "yt-mwl-arthroscopic-knee", title: "Arthroscopic Knee Surgery - Patient Film", kind: "video", duration: "10:50", url: "https://www.youtube.com/watch?v=dMNXrYiWXMw", extra: "Information about having knee surgery", publisher: "Mersey and West Lancashire NHS Trust", keywords: ["arthroscopy", "keyhole surgery", "knee"] },
    { id: "yt-chelwest-knee-arthroscopy", title: "Knee Arthroscopy", kind: "video", duration: "2:10", url: "https://www.youtube.com/watch?v=NzTACLMND30", extra: "A preview of the procedure", publisher: "Chelsea and Westminster Hospital", keywords: ["arthroscopy", "surgery", "knee"] },
    { id: "yt-mayo-meniscus-101", title: "Meniscus Tear 101: Symptoms, Diagnosis and Treatment Options - Ask Mayo Clinic Health System", kind: "video", duration: "3:41", url: "https://www.youtube.com/watch?v=kyx3lEgQTj0", extra: "An orthopaedic surgeon answers meniscus questions", publisher: "Mayo Clinic Health System", keywords: ["meniscus tear", "symptoms", "treatment"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-grace-meniscus", person: "Grace", title: "Meniscus Surgery | Grace's Story", channel: "Johns Hopkins Medicine", url: "https://www.youtube.com/watch?v=blU6PpPO7Rs", duration: "3:09", about: "Grace, an avid runner, tore her left meniscus during a half marathon, had surgery to repair it followed by rehabilitation, and one year later was back to running long distances." },
    { id: "yt-liz-meniscus", person: "Liz", title: "Patient Testimonial: Torn Meniscus Surgery at Newton-Wellesley Hospital", channel: "Newton-Wellesley Hospital", url: "https://www.youtube.com/watch?v=Zde_BZrZvjw", duration: "2:36", about: "Liz tore her meniscus during a CrossFit workout, had day surgery to remove part of the torn meniscus, and six weeks later was back at CrossFit." },
    { id: "yt-jim-meniscus", person: "Jim", title: "Jim's torn meniscus in his knee didn't stop his drive to win.", channel: "UCHealth", url: "https://www.youtube.com/watch?v=dpqWLHqM_nc", duration: "1:53", about: "A dirt bike accident left Jim, a competitive trials rider, with a knee injury, and with a supportive surgeon he went on to win a state division title." },
  ],
  // end of wiring
  title: "Torn meniscus",
  summary: "A tear in one of the rubbery pads of cartilage that cushion the knee, from a twist in younger people or wear in older people. It can cause pain, swelling and catching. Many tears settle with exercise and physiotherapy; some need keyhole surgery.",
  keywords: ["torn meniscus", "cartilage tear", "knee pain", "locking knee", "arthroscopy"],
  understand: [
    ["what-it-is", "What the meniscus is", 3, ["cartilage", "cushion", "knee"], "Two cushions inside the knee."],
    ["symptoms", "Pain, swelling, catching and locking", 2, ["pain", "locking", "swelling"]],
    ["causes", "Twists and wear", 2, ["twist", "wear", "age"]],
    ["diagnosis", "Examination and MRI scans", 2, ["examination", "mri"]],
  ],
  recover: [
    ["self-care", "Rest, ice and painkillers", 2, ["rest", "ice", "painkillers"]],
    ["exercises", "Exercises and physiotherapy", 3, ["exercises", "physiotherapy"]],
    ["surgery", "Keyhole surgery: who it helps", 3, ["arthroscopy", "surgery"]],
    ["after-surgery", "Recovery after surgery", 2, ["recovery"]],
  ],
  liveWell: [
    ["activity", "Staying active", 2, ["activity", "walking"]],
    ["sport", "Getting back to sport", 2, ["sport"]],
    ["locking", "If the knee locks", 2, ["locking", "urgent"]],
    ["long-term", "The knee in later years", 2, ["arthritis", "long-term"]],
  ],
  sources: [source(NHS, "Meniscus tear (knee cartilage damage)"), VERSUS_ARTHRITIS, CSP],
  askDoctor: ["Is my tear likely to heal with exercise?", "Would keyhole surgery help me?", "Which exercises should I do?", "What should I do if my knee locks?"],
  related: [{ groupId: "injuries", conditionId: "knee-ligament" }, { groupId: "arthritis", conditionId: "osteoarthritis" }, { groupId: "joint-replacement", conditionId: "knee-replacement" }],
});
