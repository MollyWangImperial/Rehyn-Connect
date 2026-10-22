import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Axial spondyloarthritis (ankylosing spondylitis) page's pieces
// (content/library-conditions/body-more.ts). Every sentence was written from wording checked on 22 October 2026
// on the pages listed under each answer's `sources`; nothing is added that those pages do not say. Most of it
// comes from the NHS, the National Axial Spondyloarthritis Society (NASS), Arthritis UK (the charity formerly
// called Versus Arthritis; versusarthritis.org now redirects to arthritis-uk.org) and the government's pages on
// driving, Access to Work and reasonable adjustments. General information only; it never replaces what a
// person's own rheumatology team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const nass = (label: string, path: string): LearnSource => ({ label: `NASS: ${label}`, url: `https://nass.co.uk/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_AS = nhs("Ankylosing spondylitis", "conditions/ankylosing-spondylitis/");
const NHS_AS_SYMPTOMS = nhs("Symptoms of ankylosing spondylitis", "conditions/ankylosing-spondylitis/symptoms/");
const NHS_AS_CAUSES = nhs("Causes of ankylosing spondylitis", "conditions/ankylosing-spondylitis/causes/");
const NHS_AS_DIAGNOSIS = nhs("Diagnosing ankylosing spondylitis", "conditions/ankylosing-spondylitis/diagnosis/");
const NHS_AS_TREATMENT = nhs("Treating ankylosing spondylitis", "conditions/ankylosing-spondylitis/treatment/");
const NHS_AS_COMPLICATIONS = nhs("Complications of ankylosing spondylitis", "conditions/ankylosing-spondylitis/complications/");
const NHS_UVEITIS = nhs("Uveitis", "conditions/uveitis/");
const NHS_NSAIDS = nhs("NSAIDs", "medicines/nsaids/");
const NHS_NAPROXEN = nhs("Naproxen", "medicines/naproxen/");
const NHS_PHYSIO = nhs("Physiotherapy", "tests-and-treatments/physiotherapy/");

const NASS_ABOUT_AS = nass("About axial SpA", "about-as/");
const NASS_WHAT = nass("What is axial SpA?", "about-as/what-is-axialspa/");
const NASS_YS = nass("Your SpAce", "about-as/your-space/");
const NASS_DIAGNOSIS = nass("Your diagnosis", "about-as/what-is-axialspa/your-diagnosis/");
const NASS_PAIN = nass("Your pain", "about-as/what-is-axialspa/axial-spa-pain/");
const NASS_EYES = nass("Your eyes", "about-as/what-is-axialspa/your-eyes/");
const NASS_GUT = nass("Your gut", "about-as/what-is-axialspa/your-gut/");
const NASS_SKIN = nass("Your skin", "about-as/what-is-axialspa/your-skin/");
const NASS_HEART = nass("Your heart", "about-as/what-is-axialspa/your-heart/");
const NASS_RIBS = nass("Your ribs", "about-as/what-is-axialspa/your-ribs/");
const NASS_FATIGUE = nass("Your fatigue", "about-as/what-is-axialspa/fatigue/");
const NASS_FLARES = nass("Your flares", "about-as/what-is-axialspa/your-flares/");
const NASS_APPOINTMENTS = nass("Your appointments", "about-as/what-is-axialspa/your-medical-appointments/");
const NASS_YS_PAIN = nass("Your SpAce: Managing your pain", "about-as/your-space/pain/");
const NASS_YS_FLARES = nass("Your SpAce: Coping with flares", "about-as/your-space/flares/");
const NASS_YS_FATIGUE = nass("Your SpAce: Managing your fatigue", "about-as/your-space/fatigue/");
const NASS_EXERCISE = nass("Exercise", "managing-my-as/exercise/");
const NASS_SAFETY = nass("Safety first", "managing-my-as/exercise/safety-first/");
const NASS_STRETCHES = nass("Stretches for your daily life", "managing-my-as/exercise/stretches-for-your-daily-life/");
const NASS_PHYSIO = nass("Physiotherapy", "managing-my-as/exercise/physiotherapy/");
const NASS_HYDRO = nass("Hydrotherapy", "managing-my-as/exercise/hydrotherapy/");
const NASS_BRANCHES = nass("Exercising at NASS branches", "managing-my-as/exercise/exercising-at-nass-branches/");
const NASS_REHAB = nass("Rehabilitation courses", "managing-my-as/exercise/rehabilitation-courses/");
const NASS_NSAIDS = nass("NSAIDs", "managing-my-as/medication/nsaids/");
const NASS_BIOLOGICS = nass("Biologic therapy", "managing-my-as/medication/biologic-therapy/");
const NASS_JAK = nass("JAK inhibitors", "managing-my-as/medication/jak-inhibitors/");
const NASS_WORKING = nass("Working", "managing-my-as/living-with-as/working/");
const NASS_DRIVING = nass("Driving", "managing-my-as/living-with-as/driving/");
const NASS_WELLBEING = nass("Your wellbeing", "about-as/what-is-axialspa/your-wellbeing/");
const NASS_MYLIFE = nass("My AS, My Life", "managing-my-as/my-as-my-life/");
const NASS_CONTACT = nass("Contact us", "contact-us/");
const NASS_GUIDES = nass("Guides", "managing-my-as/guides/");
const NASS_FORUM = nass("NASS forum", "managing-my-as/nass-forum/");

const AUK_AXSPA = auk("Axial spondyloarthritis", "understanding-arthritis/conditions/axial-spondyloarthritis/");
const AUK_ADALIMUMAB = auk("Adalimumab", "understanding-arthritis/arthritis-treatments/drugs/adalimumab/");
const AUK_SECUKINUMAB = auk("Secukinumab", "understanding-arthritis/arthritis-treatments/drugs/secukinumab/");

const GOV_AS_DRIVING = gov("Ankylosing spondylitis and driving", "ankylosing-spondylitis-and-driving");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");
const GOV_ADJUSTMENTS = gov("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");

export const axspaAnswers: LearnArticle[] = [
  {
    id: "axspa-what-it-is",
    kicker: "Understanding",
    question: "What is axial spondyloarthritis?",
    hook: "An inflammatory arthritis that mainly affects the spine and the joints where it meets the pelvis. It often starts young, and nothing you did caused it.",
    short: "Axial spondyloarthritis (axial SpA) is an inflammatory arthritis where the main symptom is back pain. It mainly affects the spine and the sacroiliac joints, where the base of the spine meets the pelvis. Ankylosing spondylitis is the name used when changes can be seen on an X-ray. There is no cure, but treatment can relieve the symptoms and help delay its progression.",
    sections: [
      {
        heading: "One condition, two names",
        paragraphs: [
          "Axial spondyloarthritis, or axial SpA, is an inflammatory arthritis where the main symptom is back pain. It mainly affects the spine, but it can also affect other joints, tendons and ligaments, and sometimes the eyes and bowel.",
          "It is an umbrella term. Ankylosing spondylitis (AS) is the name used when changes to the sacroiliac joints or the spine can be seen on an X-ray. In non-radiographic axial spondyloarthritis, those X-ray changes are not present, but inflammation may be visible on an MRI scan. The symptoms and treatment are similar.",
        ],
      },
      {
        heading: "What happens in the spine",
        paragraphs: [
          "Inflammation occurs where ligaments or tendons attach to bone. The main areas affected are along the spine, the ribs and the sacroiliac joints, which are the joints between the base of the spine and the pelvic bones.",
          "For some people with prolonged inflammation, the body tries to repair the area by laying down new bone. Over a number of years, this can make parts of the spine join up, or fuse, and lose flexibility. This does not happen to everyone with axial SpA.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "About 1 in 200 adults in the UK have axial SpA. It usually first starts to develop between 18 and 40 years of age, the average age it starts is 26, and it affects the same number of women as men.",
          "It is not known exactly what causes it, but there is a link with a gene variant called HLA-B27, carried by 85% to 90% of people with axial SpA. It is possible to have axial SpA without this gene, and to have the gene and never develop the condition. There is nothing you have done to cause it, and you cannot catch it from anyone else.",
        ],
      },
      {
        heading: "How it can change over time",
        paragraphs: [
          "The symptoms tend to develop gradually, usually over several months or years, and may come and go over time. In some people the condition gets better with time, but for others it can get slowly worse.",
          "Most people with ankylosing spondylitis remain fully independent or minimally disabled in the long term. With modern treatments, it does not normally affect life expectancy significantly.",
        ],
      },
      {
        heading: "Treatment, and what you can do",
        paragraphs: [
          "There is no cure, and it is not possible to reverse damage already caused. But treatment can relieve the symptoms and help delay or prevent the spine fusing and stiffening.",
          "Keeping active, having effective medical treatment and trying to maintain a good posture can reduce the risk of the spine curving forward. In most cases treatment combines exercise, physiotherapy and medicine.",
        ],
      },
    ],
    helps: [
      "See your GP if you have persistent symptoms of axial SpA, such as back pain and stiffness.",
      "Keep active, as it reduces the risk of the bones of the spine fusing.",
      "Have effective medical treatment, and try to maintain a good posture.",
      "Learn more about your condition in your own time, and meet other people with the same condition.",
      "Remember that there is nothing you have done to cause it.",
    ],
    tryThisWeek: [
      "See a GP about persistent symptoms.",
      "Keep active.",
      "Learn about it in your own time.",
    ],
    ask: "Do I have ankylosing spondylitis or non-radiographic axial SpA, and what does that mean for me?",
    interactive: {
      kind: "flip-cards",
      title: "The names, card by card",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "axspa", front: "Axial SpA", when: "The umbrella term", back: "An inflammatory arthritis where the main symptom is back pain. It mainly affects the spine." },
        { id: "as", front: "Ankylosing spondylitis", when: "Changes seen on an X-ray", back: "The name used when changes to the sacroiliac joints or the spine can be seen on an X-ray." },
        { id: "nr", front: "Non-radiographic axial SpA", when: "No changes on an X-ray", back: "Inflammation may be visible on an MRI scan. The symptoms and treatment are similar." },
        { id: "sij", front: "Sacroiliac joints", when: "Where the spine meets the pelvis", back: "The joints between the base of the spine, the sacrum, and the pelvic bones." },
        { id: "hla", front: "HLA-B27", when: "A gene variant", back: "Carried by 85% to 90% of people with axial SpA, but most people who carry it do not have the condition." },
      ],
    },
    sources: [NASS_WHAT, NHS_AS, NASS_YS, NHS_AS_CAUSES, NHS_AS_SYMPTOMS, NASS_ABOUT_AS, NHS_AS_COMPLICATIONS, NHS_AS_TREATMENT, AUK_AXSPA],
    quiz: {
      question: "What is ankylosing spondylitis?",
      options: [{ text: "Axial SpA with changes seen on an X-ray", right: true }, { text: "A different illness from axial SpA" }, { text: "Back pain from wear and tear" }],
      why: "Ankylosing spondylitis (AS) is the name used when changes to the sacroiliac joints or the spine can be seen on an X-ray.",
    },
  },
  {
    id: "axspa-back-pain",
    kicker: "Symptoms",
    question: "How is inflammatory back pain different from ordinary back pain?",
    hook: "It eases when you move and gets worse when you rest. That pattern is the clue that sets it apart.",
    short: "Most back pain is mechanical, but in axial SpA the pain comes from inflammation. It usually comes on slowly, lasts more than 3 months, is worse in the morning and at night, and gets better with exercise but not with rest. Telling the two apart matters, because the treatment is different.",
    sections: [
      {
        heading: "Two kinds of back pain",
        paragraphs: [
          "Back pain is very common, but in most cases the pain is mechanical. This means it is related to the way the muscles, ligaments, discs and bones work together. Inflammatory back pain affects a much smaller number of people.",
          "It is important to tell the two apart, as the treatment is different. Inflammatory back pain is the main symptom of a group of conditions called spondyloarthritis, which includes axial SpA.",
        ],
      },
      {
        heading: "The typical pattern",
        paragraphs: [
          "The back pain and stiffness of axial SpA come on slowly over weeks or months, rather than hours or days, and last for more than 3 months. Common backache often comes in short and painful spells, but the pain from axial SpA is likely to be long lasting.",
          "The pain gets better with exercise, but does not improve or gets worse with rest. The pain and stiffness are worse in the morning and at night, and you may wake up regularly during the night because of the pain.",
          "Stiffness and pain in the lower back in the early morning lasts at least 30 minutes, then eases through the day or with activity. Some people have pain around the buttocks, and sometimes the backs of the thighs.",
        ],
      },
      {
        heading: "Pain in other places",
        paragraphs: [
          "Axial SpA can also cause arthritis in other joints, such as the hips and knees, with pain on moving, tenderness, swelling and warmth. Enthesitis is painful inflammation where a tendon or ligament joins a bone, commonly behind or under the heel, at the top of the shin bone or where the ribs join the breastbone.",
          "If your ribs are affected, you may have chest pain and find it difficult to breathe in deeply. Pain from the ribs can be confused with heart or lung problems, so anyone with chest pain should seek medical attention to rule out a more serious condition.",
        ],
      },
      {
        heading: "Other signs that can come with it",
        paragraphs: [
          "Fatigue is a common symptom. Some people also have weight loss, especially in the early stages, or feel feverish and have night sweats.",
          "Pain in axial SpA can come from inflammation around the joints or muscles, from muscles or tendons shortening or tightening, and from protective muscle spasms.",
        ],
      },
      {
        heading: "When to speak to a doctor",
        paragraphs: [
          "See your GP if you have persistent symptoms. If you already have a diagnosis, speak to your GP or rheumatology team if your pain is not managed by your medication or your usual self-management, if flares are becoming more frequent or severe, or if night pain is not improving.",
        ],
      },
    ],
    helps: [
      "See your GP if you have persistent back pain and stiffness.",
      "Notice whether the pain gets better with exercise and worse with rest.",
      "Note how long your morning stiffness lasts, and whether pain wakes you in the night.",
      "Seek medical attention for any chest pain, to rule out a more serious condition.",
      "Speak to your GP or rheumatology team if your pain or night pain is not managed by your usual medication and self-help.",
    ],
    tryThisWeek: [
      "See a GP about persistent pain.",
      "Notice when the pain eases.",
      "Time your morning stiffness.",
    ],
    ask: "Does my back pain look inflammatory, and should I be referred to a rheumatologist?",
    interactive: {
      kind: "signs",
      title: "Your back pain pattern",
      intro: "Tick any that fit your back pain. They are typical of inflammatory back pain.",
      signs: ["Came on slowly over weeks or months", "Has lasted more than 3 months", "Worse in the morning and at night", "Wakes me in the night", "Gets better with exercise", "Does not improve with rest", "Pain around the buttocks", "Pain behind or under the heel"],
      after: "Tell your GP about the pattern. Only a rheumatologist can make a definite diagnosis of axial SpA.",
      copyHeading: "My back pain pattern",
    },
    sources: [NASS_DIAGNOSIS, NASS_WHAT, AUK_AXSPA, NHS_AS_SYMPTOMS, NASS_RIBS, NASS_PAIN, NHS_AS],
    quiz: {
      question: "What usually happens to inflammatory back pain with exercise?",
      options: [{ text: "It gets better", right: true }, { text: "It gets much worse" }, { text: "Nothing changes" }],
      why: "The pain gets better with exercise, but does not improve or gets worse with rest.",
    },
  },
  {
    id: "axspa-diagnosis",
    kicker: "Diagnosis",
    question: "How is axial spondyloarthritis diagnosed, and why can it take so long?",
    hook: "There is no single test, and early changes may not show on an X-ray. The average wait from first symptoms is eight and a half years.",
    short: "Axial SpA can be hard to diagnose because it develops slowly and there is no definitive test. A GP may arrange blood tests and refer you to a rheumatologist, who puts together your symptoms, an examination, blood tests and scans such as X-ray and MRI. NASS says the average delay from first symptoms to diagnosis is eight and a half years.",
    sections: [
      {
        heading: "Why it takes time",
        paragraphs: [
          "Axial SpA can be difficult to diagnose because it develops slowly and there is no definitive test. Its symptoms can be similar to more common back problems, especially early on, so many people put up with the pain for some time before seeking help.",
          "Damage to the spine cannot always be picked up, particularly in the early stages. In many cases confirming a diagnosis is a long process that can take years. NASS says the current average delay from when symptoms start is eight and a half years.",
        ],
      },
      {
        heading: "Starting with your GP",
        paragraphs: [
          "Be ready to explain what symptoms you have, how long they have been going on, how they started, and what they are stopping you from doing, including any problems with sleep and work.",
          "Mention it if someone in your family has axial SpA, or if you have ever had inflammation in your eyes (uveitis), inflammatory bowel disease or psoriasis. The GP may arrange blood tests for inflammation and refer you to a rheumatologist, a specialist in conditions that affect muscles and joints.",
        ],
      },
      {
        heading: "The tests",
        paragraphs: [
          "Blood tests such as ESR and CRP look for signs of inflammation. But in around half of all cases these markers are within the normal range, so a normal result does not necessarily mean you do not have inflammatory arthritis.",
          "A blood test can show whether you carry the HLA-B27 gene. It is present in over 90% of people with axial SpA, but carrying it does not necessarily mean you have the condition or will develop it, and 10% of people with axial SpA do not carry it.",
          "X-rays show changes to bones and joints, such as extra bone growth or fusion, though many people will never have changes on X-ray. An MRI scan can show inflammation around the joints, using a particular sequence called STIR.",
        ],
      },
      {
        heading: "Confirming the diagnosis",
        paragraphs: [
          "Only a rheumatologist can make a definite diagnosis. Ankylosing spondylitis can usually be confirmed if an X-ray shows inflammation of the sacroiliac joints and you have at least 1 of these: at least 3 months of lower back pain that gets better with exercise and not with rest, limited movement in your lower back, or limited chest expansion.",
          "If an X-ray cannot confirm it, you will usually be offered an MRI scan. If the MRI shows inflammation of the sacroiliac joints, or you carry HLA-B27 and have symptoms, you may be diagnosed with non-radiographic axial spondyloarthritis.",
        ],
      },
      {
        heading: "Tracking your symptoms",
        paragraphs: [
          "It can help to track and record your symptoms weekly, fortnightly or monthly, so you can show your GP or rheumatologist how axial SpA is affecting you. You could use an app, a spreadsheet or a NASS resource sheet.",
          "After diagnosis, you will see your rheumatologist for regular check-ups. These may include further sets of the blood tests or X-rays you had at diagnosis, to see how the condition is progressing.",
        ],
      },
    ],
    helps: [
      "Tell the GP what your symptoms are, how long you have had them, how they started and what they stop you doing.",
      "Mention any family history of axial SpA, and any past uveitis, inflammatory bowel disease or psoriasis.",
      "Make sure your GP refers you, as only a rheumatologist can make a definite diagnosis.",
      "Remember that normal inflammation blood tests do not necessarily mean you do not have inflammatory arthritis.",
      "Track your symptoms weekly, fortnightly or monthly to show your GP or rheumatologist.",
    ],
    tryThisWeek: [
      "List your symptoms and how they started.",
      "Note family history, eyes, gut and skin.",
      "Start tracking your symptoms.",
    ],
    ask: "Which tests have I had, and do I need an MRI to look for inflammation?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "exam", front: "Physical examination", when: "By a nurse, physiotherapist or rheumatologist", back: "Assesses your flexibility and joint tenderness." },
        { id: "bloods", front: "ESR and CRP", when: "Blood tests for inflammation", back: "Look for signs of inflammation. They are within the normal range in around half of all cases." },
        { id: "hla", front: "HLA-B27", when: "A genetic blood test", back: "Present in over 90% of people with axial SpA, but it is a clue, not proof." },
        { id: "xray", front: "X-ray", when: "To look at the spine and pelvis", back: "Shows changes such as extra bone growth or fusion. Many people never have changes on X-ray." },
        { id: "mri", front: "MRI scan", when: "If an X-ray cannot confirm it", back: "Shows inflammation around the joints, using a particular sequence called STIR." },
      ],
    },
    sources: [NHS_AS_DIAGNOSIS, AUK_AXSPA, NASS_ABOUT_AS, NASS_DIAGNOSIS, NHS_AS_TREATMENT],
    quiz: {
      question: "Do normal inflammation blood tests rule out axial SpA?",
      options: [{ text: "No, they are normal in around half of cases", right: true }, { text: "Yes, always" }, { text: "Only if you are over 40" }],
      why: "But in around half of all cases these markers are within the normal range, so a normal result does not necessarily mean you do not have inflammatory arthritis.",
    },
  },
  {
    id: "axspa-beyond-spine",
    kicker: "Complications",
    question: "How can axial spondyloarthritis affect the eyes, gut, skin and bones?",
    hook: "Axial SpA is not just back pain. Know the signs in the eyes, gut and skin, and the rare spinal emergency.",
    short: "Axial SpA mainly affects the spine, but it can also cause inflammation in the eyes (uveitis), the bowel (inflammatory bowel disease) and the skin (psoriasis). It can weaken the bones and is linked to a higher risk of heart disease and stroke. A painful red eye needs prompt help, and the rare cauda equina syndrome is an emergency.",
    sections: [
      {
        heading: "More than back pain",
        paragraphs: [
          "Some people with axial SpA have inflammation in other areas of the body. In the eyes this is a condition called uveitis, in the gut inflammatory bowel disease can occur, and the skin can be affected by psoriasis. Not everyone with axial SpA will develop these.",
          "If you are seeing your GP about possible axial SpA, NASS suggests highlighting any past uveitis, inflammatory bowel disease or psoriasis.",
        ],
      },
      {
        heading: "Eyes",
        paragraphs: [
          "About a quarter of people with axial SpA will have an attack of uveitis, also known as iritis, at some time in their life. The eye becomes red, painful and sensitive to light, and vision may become blurred. It usually affects only 1 eye.",
          "See an eye doctor as soon as possible, ideally within 24 hours, as early treatment reduces the risk of long-term damage. Your GP can make an urgent referral, or your local A&E department can contact the eye team to arrange an urgent review.",
        ],
      },
      {
        heading: "Gut and skin",
        paragraphs: [
          "NASS says 7% of people with axial SpA also develop inflammatory bowel disease, such as Crohn's disease or ulcerative colitis. Signs include diarrhoea, blood in your poo, needing a toilet urgently, cramping tummy pains and weight loss.",
          "Arthritis UK suggests seeing your doctor if you have diarrhoea for more than two weeks, or bloody or slimy poos. NASS says 9% of people with axial SpA also develop psoriasis, a skin condition that causes flaky patches of skin.",
        ],
      },
      {
        heading: "Bones, nerves and heart",
        paragraphs: [
          "Osteoporosis can develop in the spine and increase your risk of fracturing the bones in your backbone, and the longer you have the condition, the more this risk increases. A fractured bone in the spine can cause nerve damage, so it is very important that a doctor treating you after a fall or accident knows you have axial SpA.",
          "Tell a doctor about new unexplained pain in your spine, or new weakness, numbness or tingling in your arms or legs. Axial SpA can also make heart attack and stroke slightly more likely. Not smoking, eating healthily, keeping active and having your risk checked by your GP help lower this risk.",
        ],
      },
      {
        heading: "A rare emergency",
        paragraphs: [
          "Cauda equina syndrome is a very rare complication that happens when nerves at the bottom of your spine become compressed. Symptoms include sciatica on both sides, severe or worsening weakness or numbness in both legs, numbness around or under your genitals or around your anus, and new problems starting or controlling your pee or poo.",
          "Go to A&E or call 999 if you have axial SpA and develop any of these symptoms.",
        ],
      },
    ],
    helps: [
      "Go to A&E or call 999 if you develop symptoms of cauda equina syndrome.",
      "Get a painful, red eye seen by an eye doctor as soon as possible, ideally within 24 hours.",
      "See your doctor if you have diarrhoea for more than two weeks, or bloody or slimy poos.",
      "Make sure any doctor treating you after a fall or accident knows you have axial SpA.",
      "Have your heart risk checked by your GP, keep active and do not smoke.",
    ],
    tryThisWeek: [
      "Learn the cauda equina signs.",
      "Know where to go with a red eye.",
      "Tell doctors after any fall.",
    ],
    ask: "Which changes in my eyes, gut or skin should I report, and who should I call?",
    interactive: {
      kind: "signs",
      title: "Changes to mention",
      intro: "Tick any you have noticed. Axial SpA can affect more than the spine.",
      signs: ["A painful, red eye", "Sensitivity to light or blurred vision", "Diarrhoea for more than two weeks", "Blood or slime in your poo", "Flaky patches of skin", "New unexplained pain in your spine", "New numbness or tingling in arms or legs"],
      after: "Tell your GP or rheumatology team. A red, painful eye needs an eye doctor, ideally within 24 hours. Cauda equina symptoms mean A&E or 999.",
      copyHeading: "Changes I have noticed",
    },
    sources: [NASS_YS, NASS_DIAGNOSIS, NASS_EYES, NHS_AS_COMPLICATIONS, NASS_GUT, AUK_AXSPA, NASS_SKIN, NASS_HEART, NHS_AS_SYMPTOMS],
    quiz: {
      question: "What should you do if you develop sciatica on both sides and numbness around your genitals?",
      options: [{ text: "Go to A&E or call 999", right: true }, { text: "Wait for your next appointment" }, { text: "Rest for a week and see" }],
      why: "Go to A&E or call 999 if you have axial SpA and develop any of these symptoms.",
    },
  },
  {
    id: "axspa-exercise",
    kicker: "Exercise",
    question: "Which exercise and stretching help axial spondyloarthritis?",
    hook: "NASS calls exercise the single most important thing you can do to help yourself. A little every day keeps the spine moving.",
    short: "Exercise is a key part of managing axial SpA, alongside medicine. Regular stretching, mobility, strengthening and breathing exercises help keep the spine flexible, ease pain and stiffness, and improve posture and sleep. Start slowly, build up gradually, and check with a health professional before starting a new programme.",
    sections: [
      {
        heading: "Why exercise matters",
        paragraphs: [
          "NASS describes exercise as the single most important thing you can do to help yourself. To manage axial SpA well, it is not enough to rely on medication alone.",
          "Regular exercise is good for the range of movement of your back and stops your spine from stiffening, while too much rest increases the stiffening. Exercise can also mean less pain at night, better sleep and improved posture.",
        ],
      },
      {
        heading: "What to include",
        paragraphs: [
          "You need a mix of strengthening, cardiovascular and stretching exercises. The focus is on keeping the range of movement in your joints, posture control, muscle strength and length, lung capacity, balance and fitness.",
          "Specific simple exercises for your back, chest and limbs help keep them supple. Stretching after a hot shower or bath can be especially helpful to ease morning stiffness, and you can take painkillers beforehand to help you exercise.",
        ],
      },
      {
        heading: "Exercises Arthritis UK describes",
        paragraphs: [
          "Stand with your heels and bottom against a wall and push, without tilting, your head back towards the wall. Hold for 5 seconds then relax, and repeat about 10 times if possible.",
          "For a waist turn, stand with your feet apart and hands on your hips. Turn from the waist to look behind you, keeping your knees and feet facing the front, and hold for 5 seconds, 5 times each side.",
          "For breathing, lie on your back with knees bent and hands on the sides of your ribs. Breathe in deeply through your nose, pushing your ribs out against your hands, then breathe out fully through your mouth, about 10 times.",
        ],
      },
      {
        heading: "Fitting it into your day",
        paragraphs: [
          "NASS and a group of specialist physiotherapists have made short videos of stretches you can do in bed, while the kettle boils, while you clean your teeth, in a doorway and on the sofa.",
          "Many people with axial SpA have some pain and stiffness in the mornings, so you may prefer to exercise later in the day. Exercise needs to be regular and kept up over the long term, so choose something you enjoy.",
          "Some people prefer to swim or play sport to keep flexible. This is usually fine, although some daily stretching and exercise is also important.",
        ],
      },
      {
        heading: "Exercising safely",
        paragraphs: [
          "Check with a health professional before starting a new programme, particularly if you have not exercised for a while, have fusions in your spine or osteoporosis, are in a flare or pregnant, or have had joint replacement or spinal surgery.",
          "Keep within your limits, especially when you first start. Mild aches during exercise are normal and should ease afterwards. Seek medical advice if you have more than mild aches afterwards, or if you feel faint, dizzy, short of breath or unwell, or have unaccustomed chest pain while exercising.",
          "Thinner bones or a fused spine can mean a risk of breaking a bone in contact sports, so discuss them with your physiotherapist.",
        ],
      },
    ],
    helps: [
      "Try to do at least some exercise each day, starting slowly and building up gradually.",
      "Stretch after a hot shower or bath to ease morning stiffness.",
      "Mix strengthening, cardiovascular and stretching exercises, and keep a good posture while you do them.",
      "Check with a health professional before starting a new programme, especially if you have spinal fusion, osteoporosis or a flare.",
      "Seek medical advice if you feel faint, dizzy or short of breath, or have chest pain, while exercising.",
      "Choose something you enjoy, so you keep it up.",
    ],
    tryThisWeek: [
      "Do some exercise each day.",
      "Stretch after a warm shower.",
      "Pick exercise you enjoy.",
    ],
    ask: "Which daily exercises suit me, and is there anything I should avoid?",
    interactive: {
      kind: "timeline",
      title: "Stretches through the day",
      steps: [
        { id: "bed", when: "On waking", title: "Start in bed", points: ["Gentle stretches you can do in bed.", "Then move easily from lying to sitting."] },
        { id: "shower", when: "Morning", title: "Warm up", points: ["Stretching after a hot shower or bath can ease stiffness.", "You can take painkillers beforehand to help you exercise."] },
        { id: "kettle", when: "In the kitchen", title: "While the kettle boils", points: ["Stretches while you wait for the kettle or toast.", "Spine and neck stretches."] },
        { id: "teeth", when: "In the bathroom", title: "While you clean your teeth", points: ["Exercises you can fit in at the sink.", "Stretch your shoulders using a doorway."] },
        { id: "sofa", when: "In the evening", title: "Wind down", points: ["Stretches while you relax on the sofa.", "Take time to let your body relax."] },
      ],
    },
    sources: [NASS_EXERCISE, AUK_AXSPA, NASS_SAFETY, NASS_STRETCHES, NHS_AS_TREATMENT],
    quiz: {
      question: "If your mornings are stiff, when might you prefer to exercise?",
      options: [{ text: "Later in the day", right: true }, { text: "Only straight after waking" }, { text: "Never" }],
      why: "Many people with axial SpA have some pain and stiffness in the mornings, so you may prefer to exercise later in the day.",
    },
  },
  {
    id: "axspa-nsaids",
    kicker: "Treatment",
    question: "How do anti-inflammatory painkillers (NSAIDs) help axial spondyloarthritis?",
    hook: "NSAIDs are usually the first medicine. They work within hours, but the full benefit can take up to 2 weeks.",
    short: "Non-steroidal anti-inflammatory drugs (NSAIDs), such as ibuprofen, naproxen, diclofenac and etoricoxib, are usually the first medicine offered for axial SpA. They ease pain and reduce inflammation. They can upset the stomach and affect the heart in some people, so the aim is the lowest dose that works, with regular reviews.",
    sections: [
      {
        heading: "Usually the first medicine",
        paragraphs: [
          "When you are diagnosed with axial SpA, you will usually be offered an NSAID as a starting point. As well as helping ease pain, NSAIDs can help relieve swelling and inflammation in your joints.",
          "Examples include ibuprofen, naproxen, diclofenac and etoricoxib. Many can be bought over the counter, but stronger NSAIDs are only available on prescription.",
        ],
      },
      {
        heading: "Taking them",
        paragraphs: [
          "Tablets or capsules are taken with a full glass of liquid, with or shortly after food, as directed by your doctor. NSAIDs work quickly, usually within a few hours, but it can take up to 2 weeks to get the full benefit.",
          "Go back to your GP if the NSAID you have been prescribed has not relieved your pain and stiffness after 2 to 4 weeks. A change in the type of NSAID or an increased dose could make a big difference.",
          "Your GP or rheumatologist will try to find the one that suits you and the lowest possible dose that relieves your symptoms. Your dose will be monitored and reviewed as necessary.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Common side effects include indigestion and stomach ache, feeling sick, diarrhoea, feeling dizzy, a rash and headaches. NSAIDs can damage the lining of the stomach and cause bleeding, especially at high doses or over a long time.",
          "A medicine to protect your stomach, such as omeprazole, is often prescribed alongside. Do not take 2 NSAIDs at the same time, such as naproxen with ibuprofen, as this can increase the risk of serious side effects like stomach ulcers.",
          "Bleeding inside the stomach can cause poo that is black, sticky and tar-like, or vomiting blood. The NHS says to call 111 if you are taking naproxen and think you might be having serious side effects.",
        ],
      },
      {
        heading: "Heart and stomach risks",
        paragraphs: [
          "Research described by NASS found that NSAIDs at the levels many people with inflammatory arthritis take increase the chance of a heart attack or stroke. Only naproxen is not associated with this increased risk.",
          "Doctors are unlikely to prescribe NSAIDs if you have heart disease, have had a heart attack or stroke, or have circulation problems in your legs. Naproxen may not be suitable if you have had a stomach ulcer, or have Crohn's disease or ulcerative colitis.",
          "NASS also points out that NSAIDs hugely benefit many people with axial SpA, helping them work and look after children. You can improve your heart risk by not smoking, eating healthily, exercising regularly and having your cholesterol and blood pressure checked regularly.",
        ],
      },
      {
        heading: "Other painkillers",
        paragraphs: [
          "If NSAIDs are unsuitable or you need extra pain relief, paracetamol may be recommended. If necessary, a stronger painkiller called codeine may be prescribed, which can cause sickness, constipation and drowsiness.",
          "These painkillers do not treat the underlying cause, but can make things more comfortable. If your condition is not well controlled, discuss it with your rheumatology team.",
        ],
      },
    ],
    helps: [
      "Take NSAID tablets with a full glass of liquid, with or shortly after food.",
      "Go back to your GP if your NSAID has not relieved your pain and stiffness after 2 to 4 weeks.",
      "Do not take 2 NSAIDs at the same time, such as naproxen with ibuprofen.",
      "Discuss with your doctor whether you need a medicine to protect your stomach.",
      "Call NHS 111 if you think you might be having serious side effects, such as black poo or vomiting blood.",
      "Have your cholesterol and blood pressure checked regularly.",
    ],
    tryThisWeek: [
      "Take NSAIDs with or after food.",
      "Review it after 2 to 4 weeks.",
      "Ask about stomach protection.",
    ],
    ask: "Is my NSAID the right one at the right dose, and do I need stomach protection?",
    interactive: {
      kind: "scenarios",
      title: "NSAID moments",
      scenarios: [
        {
          id: "not-working",
          situation: "Your prescribed NSAID has not eased your pain and stiffness after three weeks.",
          options: [{ text: "Go back to your GP", best: true }, { text: "Add some ibuprofen from the shop" }],
          why: "Go back to your GP if it has not relieved your pain and stiffness after 2 to 4 weeks. Do not take 2 NSAIDs at the same time.",
        },
        {
          id: "food",
          situation: "You are about to take your tablet on an empty stomach.",
          options: [{ text: "Take it with or after food", best: true }, { text: "Take it now with a sip of water" }],
          why: "Tablets or capsules are taken with a full glass of liquid, with or shortly after food.",
        },
        {
          id: "black",
          situation: "You notice your poo is black, sticky and tar-like.",
          options: [{ text: "Call NHS 111", best: true }, { text: "Wait and see if it passes" }],
          why: "This can be a sign of bleeding inside the stomach. Call 111 if you think you might be having serious side effects.",
        },
        {
          id: "regular",
          situation: "You feel better a few hours after the first dose.",
          options: [{ text: "Keep taking it regularly as prescribed", best: true }, { text: "Stop until the pain comes back" }],
          why: "NSAIDs work within a few hours, but it can take up to 2 weeks to get the full benefit, so NASS suggests taking them regularly.",
        },
      ],
    },
    sources: [NASS_NSAIDS, NHS_AS_TREATMENT, NHS_NSAIDS, NHS_NAPROXEN, NASS_YS_PAIN],
    quiz: {
      question: "How should NSAID tablets be taken?",
      options: [{ text: "With or shortly after food", right: true }, { text: "On an empty stomach" }, { text: "Two different NSAIDs together" }],
      why: "Tablets or capsules are taken with a full glass of liquid, with or shortly after food, as directed by your doctor.",
    },
  },
  {
    id: "axspa-biologics",
    kicker: "Treatment",
    question: "What are biologics and JAK inhibitors, and when are they used?",
    hook: "If NSAIDs and exercise are not enough, targeted medicines can calm the inflammation. About 8 in 10 people respond.",
    short: "If NSAIDs, exercise and stretching do not control your symptoms, a rheumatologist may suggest a biologic medicine, such as an anti-TNF or anti-IL-17A injection, or a JAK inhibitor tablet. These target the parts of the immune system that drive inflammation. They make infections more likely, so you will be checked before and during treatment.",
    sections: [
      {
        heading: "When they are used",
        paragraphs: [
          "Not everyone with axial SpA needs biologic therapy. Some people manage their condition well with physiotherapy and NSAIDs, but others still have active symptoms despite these treatments.",
          "Your rheumatology team might talk to you about it if NSAIDs are not helping or you cannot take them, if pain and stiffness from inflammation are still high, or if axial SpA is having a big impact on your work, family life or quality of life. Only a consultant rheumatologist can prescribe it, so ask your GP to refer you if you are not under one.",
        ],
      },
      {
        heading: "Anti-TNF medicines",
        paragraphs: [
          "TNF is a protein that is over-active in inflammatory arthritis, and too much of it can cause inflammation and damage. Anti-TNF medicines, such as adalimumab, certolizumab pegol, etanercept, golimumab and infliximab, block its action and reduce inflammation.",
          "Most are injections you give yourself with a pen, while infliximab is given by a drip, often in a day unit. Biosimilars are medicines developed to be highly similar to an original biologic.",
        ],
      },
      {
        heading: "Anti-IL-17 medicines and JAK inhibitors",
        paragraphs: [
          "Secukinumab and ixekizumab block a protein called IL-17A, which plays an important role in the inflammation of axial SpA. The NHS says they may be offered if NSAIDs or anti-TNF medicine have not worked, or as an alternative to anti-TNF. Bimekizumab, which blocks IL-17A and IL-17F, is recommended only if anti-TNF is not suitable or has not worked well enough.",
          "JAK inhibitors, such as upadacitinib and tofacitinib, are tablets that block enzymes the immune system uses to trigger inflammation. They may be offered if anti-TNF has not worked or you cannot take it.",
        ],
      },
      {
        heading: "How well they work",
        paragraphs: [
          "NASS says approximately 8 people out of every 10 will have a meaningful response to biologic therapy, with less pain, less stiffness and more movement. It cannot reverse damage or fusion that has already happened.",
          "It may take 3 to 6 months to be certain whether a medicine is working. If it is not, your rheumatologist may suggest a different one. It is a long-term treatment, so keep taking it even if it does not seem to work at first.",
        ],
      },
      {
        heading: "Infections and safety",
        paragraphs: [
          "Before you start, you will have blood tests and a chest X-ray to check whether you have been exposed to tuberculosis. These medicines can make infections more likely, and harder to spot.",
          "Tell your doctor or rheumatology nurse straight away about signs of infection, such as a sore throat, fever or coughing up green phlegm. See your doctor if you have chickenpox or shingles, or contact with someone who has. Carry a biological therapy alert card.",
          "Cases of blood clots have been reported with JAK inhibitors. Get medical help as soon as possible if you have painful swelling in a leg or arm, or chest pain or shortness of breath.",
        ],
      },
    ],
    helps: [
      "Ask your GP to refer you to a rheumatologist if you are not under one.",
      "Keep taking it even if it does not seem to work at first, and when your symptoms improve.",
      "Tell your team straight away about signs of infection, and see your doctor about chickenpox or shingles.",
      "Carry a biological therapy alert card, and mention your treatment to anyone else treating you.",
      "Talk to your surgeon and rheumatology team before any operation.",
      "On a JAK inhibitor, get medical help as soon as possible for a painful swollen leg or arm, chest pain or shortness of breath.",
    ],
    tryThisWeek: [
      "Ask for an alert card.",
      "Learn the signs of infection.",
      "Know the signs of a blood clot.",
    ],
    ask: "Do I meet the criteria for a biologic or JAK inhibitor, and which would suit me?",
    interactive: {
      kind: "flip-cards",
      title: "Targeted medicines, card by card",
      intro: "Turn each card to see what each kind of medicine does.",
      cards: [
        { id: "anti-tnf", front: "Anti-TNF", when: "Such as adalimumab or etanercept", back: "Block TNF, a protein that drives inflammation. Most are pen injections you give at home." },
        { id: "infliximab", front: "Infliximab", when: "An anti-TNF given by a drip", back: "Often given in a day unit, commonly every 6 to 8 weeks." },
        { id: "il17", front: "Anti-IL-17A", when: "Such as secukinumab or ixekizumab", back: "Block IL-17A, a protein with a key role in the inflammation of axial SpA." },
        { id: "jak", front: "JAK inhibitors", when: "Tablets, such as upadacitinib", back: "Block enzymes involved in inflammation. Used if anti-TNF has not worked or is unsuitable." },
        { id: "biosimilar", front: "Biosimilars", when: "Versions of an original biologic", back: "Developed to be highly similar to the original medicine." },
      ],
    },
    sources: [NASS_BIOLOGICS, AUK_AXSPA, NHS_AS_TREATMENT, NASS_JAK, AUK_ADALIMUMAB, AUK_SECUKINUMAB],
    quiz: {
      question: "When might a biologic be suggested?",
      options: [{ text: "When NSAIDs, exercise and stretching have not controlled symptoms", right: true }, { text: "As the very first treatment for everyone" }, { text: "To reverse fusion that has already happened" }],
      why: "If NSAIDs, exercise and stretching do not control your symptoms, a rheumatologist may suggest a biologic medicine, such as an anti-TNF or anti-IL-17A injection, or a JAK inhibitor tablet.",
    },
  },
  {
    id: "axspa-physio",
    kicker: "Therapy",
    question: "How can physiotherapy and hydrotherapy help?",
    hook: "A physiotherapist can tailor your exercises and check your posture. Warm water makes stretching easier and less painful.",
    short: "Physiotherapy is a key part of treating axial SpA. A physiotherapist assesses your posture and flexibility and draws up an exercise programme for you, alone or in a group. Hydrotherapy, exercise in a warm pool, can make stretches more effective and less painful. NASS recommends seeing a physiotherapist at diagnosis and at least once a year after that.",
    sections: [
      {
        heading: "Why see a physiotherapist",
        paragraphs: [
          "As well as keeping active, physiotherapy is a key part of treating axial SpA. A physiotherapist can help you improve your mobility and flexibility while reducing your pain, and draw up an exercise programme that suits you.",
          "NASS recommends that everyone sees a physiotherapist for an assessment when they are diagnosed, and at least once a year after that.",
        ],
      },
      {
        heading: "What happens",
        paragraphs: [
          "At your first visit, the physiotherapist should listen to your medical history, check your posture and measure your flexibility, particularly in your back, trunk, neck and hips. They then put together a treatment programme designed for your needs.",
          "A typical daily programme includes stretches for the chest, shoulders and hips, mobility exercises for the neck, trunk, back and hips, and strengthening exercises for posture. A physiotherapist can also teach you to check your posture and advise on how to sit at a desk and set up your car seat.",
          "Spinal manipulation is not helpful or safe for people with axial SpA, as it could result in permanent damage to the spine or spinal cord.",
        ],
      },
      {
        heading: "Exercise in warm water",
        paragraphs: [
          "Hydrotherapy is exercise in water, usually a warm, shallow pool. The buoyancy of the water supports you and makes movement easier, and the warmth can relax your muscles. In waist-deep water you weigh around half of what you weigh on land.",
          "The water in hydrotherapy pools is usually around 33 to 34 degrees Celsius, much warmer than a swimming pool. Many people find it helpful and continue at their local pool or with a NASS group.",
        ],
      },
      {
        heading: "Staying safe in the pool",
        paragraphs: [
          "Check with your doctor or physiotherapist before you try exercising in water, and expect a health screening first. Do only the exercises your physiotherapist shows you, not your dry land programme.",
          "Hydrotherapy is not used if you have unstable blood pressure, uncontrolled diabetes, or angina or shortness of breath at rest. The area around the pool is slippery, so take care, and begin gently, as it is possible to overdo things in water.",
        ],
      },
      {
        heading: "Getting physiotherapy",
        paragraphs: [
          "You can be referred by your GP or rheumatologist, and in many areas you can refer yourself to NHS musculoskeletal services. In many rheumatology departments you can self-refer to physiotherapy if you have a flare.",
          "NASS branches offer regular physiotherapy and hydrotherapy led by qualified physiotherapists. If you choose private physiotherapy, make sure the physiotherapist is chartered and registered with the Health and Care Professions Council.",
        ],
      },
    ],
    helps: [
      "Ask for a physiotherapy assessment, and see a physiotherapist at least once a year.",
      "Check whether your rheumatology department lets you self-refer to physiotherapy in a flare.",
      "Check with your doctor or physiotherapist before exercising in water.",
      "In the pool, do only the exercises your physiotherapist has shown you.",
      "Avoid spinal manipulation, which is not helpful or safe in axial SpA.",
      "Find your local NASS branch for group physiotherapy and hydrotherapy.",
    ],
    tryThisWeek: [
      "Ask for a physiotherapy review.",
      "Check if you can self-refer in a flare.",
      "Look up your local NASS branch.",
    ],
    ask: "Can I have a physiotherapy assessment, and is hydrotherapy available near me?",
    interactive: {
      kind: "scenarios",
      title: "Physio and pool choices",
      scenarios: [
        {
          id: "manipulation",
          situation: "Someone offers to manipulate your spine to loosen it up.",
          options: [{ text: "Say no, it is not safe in axial SpA", best: true }, { text: "Accept, to ease the stiffness" }],
          why: "Spinal manipulation is not helpful or safe for people with axial SpA, as it could result in permanent damage to the spine or spinal cord.",
        },
        {
          id: "pool",
          situation: "At the pool, you plan to do your usual floor exercises.",
          options: [{ text: "Do only the exercises your physio showed you", best: true }, { text: "Do your full land programme in the water" }],
          why: "Do only the exercises your physiotherapist shows you, not your dry land programme.",
        },
        {
          id: "stick",
          situation: "You usually walk with a stick and are heading to the poolside.",
          options: [{ text: "Use a walking frame instead", best: true }, { text: "Rush to get into the water" }],
          why: "The area around the pool is slippery. A stick can very easily slip when wet, so a walking frame is much safer.",
        },
        {
          id: "flare",
          situation: "You are in a flare and your next physiotherapy appointment is months away.",
          options: [{ text: "Check if you can self-refer", best: true }, { text: "Wait for the appointment" }],
          why: "In many rheumatology departments you can self-refer to physiotherapy if you have a flare.",
        },
      ],
    },
    sources: [NHS_AS_TREATMENT, NASS_PHYSIO, AUK_AXSPA, NASS_HYDRO, NHS_PHYSIO, NASS_BRANCHES],
    quiz: {
      question: "Why is spinal manipulation avoided in axial SpA?",
      options: [{ text: "It could permanently damage the spine", right: true }, { text: "It works too slowly" }, { text: "It only helps the neck" }],
      why: "Spinal manipulation is not helpful or safe for people with axial SpA, as it could result in permanent damage to the spine or spinal cord.",
    },
  },
  {
    id: "axspa-posture",
    kicker: "Daily life",
    question: "How can I look after my posture, sleep and working day?",
    hook: "Small changes to how you sit, sleep and work can ease the strain on your spine.",
    short: "Axial SpA can affect posture, sleep and work. Upright chairs, a well-set desk, a medium-firm bed and moving regularly through the day all help. Checking your posture against a wall about once a month can show changes. Most people with axial SpA can continue in their jobs, with changes if needed.",
    sections: [
      {
        heading: "Standing and sitting tall",
        paragraphs: [
          "In serious cases axial SpA can affect your posture, causing the spine to bend too much and putting extra strain on it. Relax your shoulders and keep them back, rather than hunched forward, and keep your chin up.",
          "Hard-backed, upright chairs are better for your posture than low, soft sofas. In an office chair your bottom should touch the back of the chair, a cushion behind your lower back can help, and your knees should be at right angles. Do not sit in one position for too long.",
          "If you can, lie on your back on the floor sometime during the day to stretch out the front of your hips. Keep pillows to a minimum, and do not put a pillow under your knees.",
        ],
      },
      {
        heading: "Checking your posture",
        paragraphs: [
          "Stand with your back against a flat wall, within view of a full-size mirror, with your heels, bottom and shoulders as close to the wall as you can. Hold for five seconds, relax, and do this three times in a row.",
          "Do this regularly, perhaps once a month, and note any differences, such as the distance from the back of your head to the wall. Report any changes you notice to your doctor.",
        ],
      },
      {
        heading: "A better night",
        paragraphs: [
          "Tiredness and night pain can affect people with axial SpA, and good quality sleep can help you manage pain better. A warm bath before bed, a hot water bottle or an electric blanket may be soothing.",
          "A medium-firm bed will be more comfortable than one that is too soft, and your head and neck should stay in line with your body. Go to bed and get up at the same times, cut out caffeine from midday, and avoid screens for at least an hour before bed.",
        ],
      },
      {
        heading: "The working day",
        paragraphs: [
          "Most people with axial SpA can continue in their jobs, though some changes may be needed, especially in a physically demanding job. Talking to your manager, human resources or occupational health, and asking for a workplace assessment, can help.",
          "At a desk, do not stoop or stretch to reach things, and make sure your seat is at the correct height. Build short spells of walking and stretching into your working day. A physiotherapist can advise on how to sit at a desk and where to position your screen.",
        ],
      },
      {
        heading: "Your rights and support",
        paragraphs: [
          "If you are covered by the Equality Act 2010, your employer has to make reasonable adjustments, such as changing your equipment. Access to Work can give a grant towards things like specialist equipment, travel to work or physical changes to your workplace.",
          "On long drives, stop from time to time for a stretch and a short walk, and keep your head back against a correctly adjusted headrest. The government's driving pages say to tell the DVLA if your ankylosing spondylitis affects your ability to drive safely.",
        ],
      },
    ],
    helps: [
      "Choose upright, hard-backed chairs, and do not sit in one position for too long.",
      "Check your posture against a wall about once a month, and report any changes to your doctor.",
      "Keep regular bed and waking times, and cut out caffeine from midday.",
      "Ask for a workplace assessment, and tell the person doing it that you have axial SpA.",
      "Build short spells of walking and stretching into your working day.",
      "Ask your employer about reasonable adjustments, and look into Access to Work.",
    ],
    tryThisWeek: [
      "Swap the sofa for an upright chair.",
      "Do a wall posture check.",
      "Add short walks to your workday.",
    ],
    ask: "Could a physiotherapist check my posture, desk and car set-up?",
    interactive: {
      kind: "scenarios",
      title: "Kinder to your spine",
      scenarios: [
        {
          id: "seat",
          situation: "You are settling down to watch TV.",
          options: [{ text: "An upright, hard-backed chair", best: true }, { text: "A low, soft sofa" }],
          why: "Hard-backed, upright chairs are better for your posture than low, soft sofas.",
        },
        {
          id: "desk",
          situation: "You have been at your desk for an hour without moving.",
          options: [{ text: "Get up for a short walk and stretch", best: true }, { text: "Keep going in the same position" }],
          why: "Build short spells of walking and stretching into your working day. Do not sit in one position for too long.",
        },
        {
          id: "coffee",
          situation: "It is mid-afternoon and you fancy a strong coffee.",
          options: [{ text: "Choose a drink without caffeine", best: true }, { text: "Have the coffee" }],
          why: "Cut out caffeine from midday to help you sleep.",
        },
        {
          id: "floor",
          situation: "You are lying on the floor to stretch the front of your hips.",
          options: [{ text: "Legs straight, no pillow under your knees", best: true }, { text: "A pillow under your knees" }],
          why: "Do not put a pillow under your knees. Stretching your knees out fully helps to maintain flexibility.",
        },
      ],
    },
    sources: [AUK_AXSPA, NASS_PHYSIO, NASS_WORKING, GOV_ADJUSTMENTS, GOV_ATW, NASS_DRIVING, GOV_AS_DRIVING],
    quiz: {
      question: "Which seat is better for your posture?",
      options: [{ text: "An upright, hard-backed chair", right: true }, { text: "A low, soft sofa" }, { text: "Any seat, for hours at a time" }],
      why: "Hard-backed, upright chairs are better for your posture than low, soft sofas.",
    },
  },
  {
    id: "axspa-fatigue",
    kicker: "Fatigue",
    question: "How can I manage fatigue and flares?",
    hook: "Fatigue is not ordinary tiredness, and flares come and go. Planning, pacing and a flare plan help you stay in control.",
    short: "Fatigue in axial SpA is an overwhelming exhaustion that a couple of good nights' sleep will not solve. Inflammation, pain, poor sleep, anaemia, some medicines and low mood can all add to it. Flares are times when symptoms get worse. Pacing, rest breaks, gentle activity, a flare plan agreed with your team and support from others can help.",
    sections: [
      {
        heading: "More than tiredness",
        paragraphs: [
          "Fatigue is a major symptom of axial SpA. It is not like ordinary tiredness: it is an overwhelming exhaustion that can be physical, mental or both, and a couple of nights of good sleep will not solve it.",
          "The inflammation itself can lead to fatigue, as can long-term pain, sleep disturbed by pain and stiffness, anaemia, muscle weakness, and some medicines, such as those containing codeine. Living with a long-term condition can also lead to depression, which can cause fatigue too.",
        ],
      },
      {
        heading: "What helps with fatigue",
        paragraphs: [
          "Medicines that control inflammation should also help reduce fatigue. Make your rheumatologist aware of it, and ask your GP to check whether you are anaemic.",
          "Taking enough rest is just as important as taking exercise. Resting for 10 minutes every hour is often recommended, such as reading, watching a favourite programme or having a warm bath.",
        ],
      },
      {
        heading: "The four Ps",
        paragraphs: [
          "NASS describes managing your energy as the four Ps: planning, prioritising, pacing and problem solving. Plan a more restful day after a busy one, start with the most important tasks, and break large tasks into smaller ones.",
          "Ideally, stop or change activity before you feel exhausted, using a timer or alarm to prompt rest breaks. A boom-and-bust cycle, doing lots one day then needing days to recover, can gradually drain your energy over time.",
        ],
      },
      {
        heading: "Getting through a flare",
        paragraphs: [
          "A flare is a period when symptoms get worse, with more pain and stiffness, and fatigue is often worse too. Each person experiences flares differently, and some people find stress can trigger them.",
          "Plan ahead with your rheumatologist or GP: find out the maximum dose of your usual medicines and which others you can safely add, and write it down. You may want to avoid high-impact activity such as running during a flare, but keep moving with gentle stretches, short walks or swimming.",
          "People say a long hot bath, an electric under-blanket, or alternating hot water bottles and ice packs help. Keep a list of what helps you, and your healthcare team's contact details, where you can easily find them.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Speak to your healthcare team if flares are very frequent or you are struggling to manage them. Speak to your GP or rheumatology team if fatigue is new or severe, or if your usual techniques do not help.",
          "Explaining your condition to family, friends and colleagues on a day when you are not flaring can help them understand. Treat yourself with kindness, and remember that the flare will pass.",
        ],
      },
    ],
    helps: [
      "Make your rheumatologist aware of your fatigue, and ask your GP to check whether you are anaemic.",
      "Rest for 10 minutes every hour, and use a timer or alarm to prompt breaks.",
      "Plan, prioritise and pace, and break large tasks into smaller ones.",
      "Agree with your rheumatologist or GP how to adjust your medicines in a flare, and write it down.",
      "Make a flare toolkit of the things that help you, and keep it easy to find.",
      "Speak to your healthcare team if flares are very frequent or you are struggling to manage them.",
    ],
    tryThisWeek: [
      "Ask your GP about anaemia.",
      "Set a timer for rest breaks.",
      "Write down your flare plan.",
    ],
    ask: "What should my flare plan be, and could anaemia or my medicines be adding to my fatigue?",
    interactive: {
      kind: "risk-check",
      title: "What adds to your fatigue?",
      intro: "Tick any that apply. Some you can do something about, with help from your team.",
      items: [
        { id: "condition", label: "The condition itself", note: "Chemicals called cytokines in inflamed tissue can cause extreme fatigue, as in colds and flu.", changeable: false },
        { id: "sleep", label: "Pain waking you at night", note: "Sleep disturbed by pain and stiffness adds to tiredness. Tell your team if night pain is not improving.", changeable: true },
        { id: "anaemia", label: "Anaemia", note: "Often found alongside inflammation. Ask your GP to check; iron can be prescribed if needed.", changeable: true },
        { id: "medicines", label: "Medicines that make you drowsy", note: "Codeine, other opioids and amitriptyline can. Ask your GP or team about alternatives.", changeable: true },
        { id: "mood", label: "Low mood or depression", note: "Depression can cause physical fatigue. Talk to your GP about how you are feeling.", changeable: true },
        { id: "boom", label: "Boom-and-bust days", note: "Doing lots then needing days to recover can drain your energy. Pacing helps.", changeable: true },
      ],
    },
    sources: [NASS_FATIGUE, NASS_YS_FATIGUE, NASS_YS_FLARES, NASS_FLARES],
    quiz: {
      question: "What is the boom-and-bust cycle?",
      options: [{ text: "Doing lots one day, then needing days to recover", right: true }, { text: "Resting for 10 minutes every hour" }, { text: "A type of medicine" }],
      why: "A boom-and-bust cycle, doing lots one day then needing days to recover, can gradually drain your energy over time.",
    },
  },
  {
    id: "axspa-eyes",
    kicker: "Eyes",
    question: "What should I do if my eye becomes red and painful?",
    hook: "Uveitis is common in axial SpA and needs prompt treatment. Know the signs, and where to go the same day.",
    short: "About a quarter of people with axial SpA have an attack of uveitis, also called iritis, at some time. The eye becomes painful, red and sensitive to light, and vision may blur. See an eye doctor as soon as possible, ideally within 24 hours, through an urgent GP appointment, NHS 111, A&E or an eye casualty department. If you cannot see, go to A&E or call 999.",
    sections: [
      {
        heading: "What uveitis is",
        paragraphs: [
          "Uveitis, sometimes known as iritis or acute anterior uveitis, is inflammation in the front part of the eye. About a quarter of people with axial SpA will have an attack at some time in their life.",
          "It usually comes on suddenly, usually affects only 1 eye, and is likely to come back. Each attack usually lasts a few weeks and should last no more than 3 months.",
        ],
      },
      {
        heading: "The signs",
        paragraphs: [
          "Signs include pain in the eye, redness and soreness, sensitivity to light, and blurred or cloudy vision. The brighter the light, the more the eye may hurt.",
          "It can cause the loss of some or all of your vision if not treated promptly. Early treatment reduces the risk of long-term damage to the eye.",
        ],
      },
      {
        heading: "Where to go",
        paragraphs: [
          "NASS advises seeing an eye doctor as soon as possible, ideally within 24 hours. Your GP can make an urgent referral to the local eye team, or you can go to your local hospital A&E department, who will contact the eye doctor to arrange an urgent review.",
          "The NHS says to ask for an urgent GP appointment or get help from NHS 111 if you have pain in your eyes, sensitivity to light, changes in your vision or very red eyes. Go to A&E or call 999 if you cannot see.",
          "Arthritis UK says the best place to go is an eye casualty department, and your optician will be able to tell you where the nearest one is.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Uveitis is usually treated with a combination of eye drops. Steroid drops reduce the inflammation, and dilating drops widen the pupil, which reduces the risk of the iris sticking to the lens.",
          "After treatment starts, an eye specialist will see you again to check how it is working. If uveitis is very severe or keeps coming back, other treatments may be offered, including medicines that reduce the activity of the immune system.",
        ],
      },
    ],
    helps: [
      "If you cannot see, go to A&E or call 999.",
      "For eye pain, sensitivity to light, changes in vision or a very red eye, ask for an urgent GP appointment or get help from NHS 111.",
      "Aim to see an eye doctor as soon as possible, ideally within 24 hours.",
      "Find out where your nearest eye casualty department is; your optician can tell you.",
    ],
    tryThisWeek: [
      "Learn the signs of uveitis.",
      "Know when to call 999.",
      "Find your nearest eye casualty.",
    ],
    ask: "If my eye becomes red and painful, where is my nearest eye casualty department?",
    interactive: {
      kind: "scenarios",
      title: "Red eye moments",
      scenarios: [
        {
          id: "red",
          situation: "Your eye is red and painful, and bright light hurts.",
          options: [{ text: "Get urgent help today", best: true }, { text: "Wait a week to see if it clears" }],
          why: "See an eye doctor as soon as possible, ideally within 24 hours. Early treatment reduces the risk of long-term damage.",
        },
        {
          id: "weekend",
          situation: "It is the weekend and your GP surgery is closed.",
          options: [{ text: "Get help from NHS 111", best: true }, { text: "Wait until Monday" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111.",
        },
        {
          id: "sight",
          situation: "You suddenly cannot see out of one eye.",
          options: [{ text: "Go to A&E or call 999", best: true }, { text: "Book a routine optician visit" }],
          why: "Go to A&E or call 999 if you cannot see.",
        },
        {
          id: "where",
          situation: "You are not sure where the nearest eye casualty department is.",
          options: [{ text: "Ask your optician", best: true }, { text: "Leave it until later" }],
          why: "Your optician will be able to tell you where the nearest one is.",
        },
      ],
    },
    sources: [NASS_EYES, NHS_AS_COMPLICATIONS, NHS_UVEITIS, AUK_AXSPA],
    quiz: {
      question: "What should you do if you cannot see out of your eye?",
      options: [{ text: "Go to A&E or call 999", right: true }, { text: "Wait for it to clear" }, { text: "Book a routine appointment" }],
      why: "Go to A&E or call 999 if you cannot see.",
    },
  },
  {
    id: "axspa-support",
    kicker: "Support",
    question: "Where can I find support and learn to manage axial spondyloarthritis?",
    hook: "Most of the year you manage axial SpA on your own. A helpline, local branches and people who understand can help.",
    short: "The National Axial Spondyloarthritis Society (NASS) offers a helpline, free guides, online meetups, a members' forum and local branches with group physiotherapy and hydrotherapy. Learning about the condition, meeting others with it and looking after your emotional wellbeing all help. If your mood is low, talk to your GP.",
    sections: [
      {
        heading: "Managing between appointments",
        paragraphs: [
          "NASS says that on average you might spend 2 hours each year with a healthcare professional discussing your axial SpA, leaving 8,758 hours when you manage it on your own. Its My AS, My Life videos aim to build the confidence and skills to do that.",
          "Axial SpA is managed with a combination of medication, activity or exercise, and self-care. It can take time to find what works for you, but you can live a fulfilling life with axial SpA.",
        ],
      },
      {
        heading: "Help from NASS",
        paragraphs: [
          "The NASS helpline is usually available Monday to Friday, 10am to 4pm, on 020 8741 1515, option 1, or by email. NASS also has free guides on flares, fatigue, uveitis, advanced therapies and work.",
          "NASS branches offer regular physiotherapy and hydrotherapy led by qualified physiotherapists, and are a place to get advice and support from professionals and other people with axial SpA. A postcode finder on the NASS website shows services near you.",
        ],
      },
      {
        heading: "Meeting others",
        paragraphs: [
          "NASS runs monthly online meetups through Your SpAce, to meet other people with axial SpA, get support and share experiences. Members can also use a community forum.",
          "Speaking to others with the same condition can help when you are experiencing fatigue. It is easy to feel hopeless when you are exhausted, but other people can give you hope that things will improve.",
        ],
      },
      {
        heading: "Your emotional wellbeing",
        paragraphs: [
          "Axial SpA can affect how you think and feel, as well as your work, relationships and social life. Leaving time for relaxation, practising breathing exercises and talking with someone who understands can all help.",
          "It is very important to see your GP if you feel you may have depression that you cannot come through on your own. NHS Talking Therapies offers treatment for anxiety and depression, and Samaritans offers confidential support on 116 123, a free 24-hour helpline.",
        ],
      },
      {
        heading: "Taking part in your care",
        paragraphs: [
          "Tracking your symptoms can help you show your GP or rheumatologist how axial SpA is affecting you. Some hospitals use patient-initiated follow-up, where you ask for appointments when you need them. If you move onto it, ask how to get in contact and when to do so.",
          "Specialist rehabilitation courses for axial SpA, run in Bath and at Stanmore in London, combine exercise, hydrotherapy and education. Your consultant rheumatologist or GP can refer you to the Bath course.",
        ],
      },
    ],
    helps: [
      "Call the NASS helpline on 020 8741 1515, option 1, Monday to Friday, 10am to 4pm.",
      "Find your local NASS branch for group physiotherapy and hydrotherapy.",
      "Join a Your SpAce online meetup to meet other people with axial SpA.",
      "See your GP if you feel you may have depression you cannot come through on your own.",
      "Call Samaritans free on 116 123, at any time, if you are experiencing distress or despair.",
      "If you move onto patient-initiated follow-up, ask how and when to get in contact.",
    ],
    tryThisWeek: [
      "Save the NASS helpline number.",
      "Look up your local NASS branch.",
      "Book an online meetup.",
    ],
    ask: "Could I be referred to a rehabilitation course or group physiotherapy?",
    interactive: {
      kind: "flip-cards",
      title: "Where to find support",
      intro: "Turn each card to see what each one offers.",
      cards: [
        { id: "helpline", front: "NASS helpline", when: "Monday to Friday, 10am to 4pm", back: "Call 020 8741 1515 and select option 1, or send an email." },
        { id: "branches", front: "NASS branches", when: "Group sessions around the UK", back: "Physiotherapy and hydrotherapy led by qualified physiotherapists." },
        { id: "meetups", front: "Your SpAce meetups", when: "Monthly, online", back: "Relaxed, friendly sessions to meet other people with axial SpA and share experiences." },
        { id: "forum", front: "Members' forum", when: "For NASS members", back: "A safe space to share experiences, ask for advice and make friends." },
        { id: "samaritans", front: "Samaritans", when: "Free, 24 hours a day", back: "Call 116 123 for confidential support if you are experiencing distress or despair." },
      ],
    },
    sources: [NASS_MYLIFE, NASS_YS, NASS_CONTACT, NASS_GUIDES, NASS_BRANCHES, NASS_FORUM, NASS_YS_FATIGUE, NASS_WELLBEING, NASS_APPOINTMENTS, NASS_REHAB, NASS_DIAGNOSIS],
    quiz: {
      question: "What do NASS branches offer?",
      options: [{ text: "Physiotherapy and hydrotherapy led by physiotherapists", right: true }, { text: "Prescriptions for biologics" }, { text: "Diagnosis tests" }],
      why: "NASS branches offer regular physiotherapy and hydrotherapy led by qualified physiotherapists, and are a place to get advice and support from professionals and other people with axial SpA.",
    },
  },
];
