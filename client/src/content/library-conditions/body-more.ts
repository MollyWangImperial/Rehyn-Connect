import type { LibraryCondition, LibraryItem, VideoStory } from "../library";
import { article, BACKCARE, CSP, FMA_UK, LUPUS_UK, NASS, NHS, NRAS, PAGETS_ASSOCIATION, PAPAA, piece, PMRGCA_UK, ROS, source, VERSUS_ARTHRITIS } from "../library-helpers";

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
