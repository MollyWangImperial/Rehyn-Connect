import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Prostatitis page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and Prostate Cancer UK,
// with the British Association of Urological Surgeons (BAUS) for its symptom-score leaflet and its page on urine
// infections. General information only; it never replaces what a person's own GP, nurse or urologist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const pcuk = (label: string, path: string): LearnSource => ({ label: `Prostate Cancer UK: ${label}`, url: `https://prostatecanceruk.org/prostate-information-and-support/${path}` });
const baus = (label: string, path: string): LearnSource => ({ label: `BAUS: ${label}`, url: `https://www.baus.org.uk/patients/${path}` });

const NHS_PROSTATITIS = nhs("Prostatitis", "conditions/prostatitis/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_UTI = nhs("Urinary tract infections (UTIs)", "conditions/urinary-tract-infections-utis/");
const NHS_PSA = nhs("PSA test", "tests-and-treatments/psa-test/");
const NHS_ANTIBIOTICS = nhs("Antibiotics", "medicines/antibiotics/");
const NHS_CIPRO = nhs("Ciprofloxacin", "medicines/ciprofloxacin/");
const NHS_TAMSULOSIN = nhs("Tamsulosin", "medicines/tamsulosin/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_PAIN = nhs("10 ways to reduce pain", "live-well/pain/10-ways-to-ease-pain/");
const NHS_ED = nhs("Erectile dysfunction (impotence)", "conditions/erection-problems-erectile-dysfunction/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT_MH = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const PCUK_WHAT = pcuk("Prostatitis", "just-diagnosed/other-prostate-problems/prostatitis");
const PCUK_SYMPTOMS = pcuk("Symptoms of prostatitis", "just-diagnosed/other-prostate-problems/prostatitis-signs-and-symptoms");
const PCUK_TESTS = pcuk("Tests for prostatitis", "just-diagnosed/other-prostate-problems/prostatitis-tests");
const PCUK_TREATMENTS = pcuk("Treatments for prostatitis", "just-diagnosed/other-prostate-problems/prostatitis-treatments");
const PCUK_SIMON = pcuk("Simon's prostatitis story", "further-information/real-life-stories/simons-prostatitis-story");

const BAUS_CPSI = baus("Chronic prostatitis symptom score (NIH-CPSI)", "information_leaflets/115/chronic_prostatitis_symptom_score_nihcpsi");
const BAUS_UTI = baus("Urinary infection (adult)", "conditions/14/urinary_infection_adult");

export const prostatitisAnswers: LearnArticle[] = [
  {
    id: "prost-what-it-is",
    kicker: "Understanding",
    question: "What is prostatitis?",
    hook: "Inflammation of a small gland below the bladder. It comes in four types, and the most common is long-lasting pain rather than infection.",
    short: "Prostatitis is inflammation of the prostate, a small gland below the bladder in men. There are four main types, and around nine out of every 10 men with prostatitis have the long-lasting kind called chronic pelvic pain syndrome. It is not cancer, but a sudden infection can be serious and needs urgent medical help.",
    sections: [
      {
        heading: "A small gland, inflamed",
        paragraphs: [
          "Prostatitis is inflammation of the prostate, which is a small gland found below the bladder in men. The NHS says its symptoms can affect anyone with a prostate gland.",
          "The prostate is a small, walnut-size gland under the bladder and behind the penis. It produces a thick fluid that mixes with sperm to make semen.",
        ],
      },
      {
        heading: "More than one cause",
        paragraphs: [
          "Prostate Cancer UK describes prostatitis as a set of symptoms thought to be caused by inflammation of the prostate, or by problems with the nerves and muscles in the surrounding area. It says an infection of the prostate can also cause it, but this is rare.",
          "The NHS says prostatitis is usually caused by an infection, such as a urinary tract infection. It is not always known what causes long-term prostatitis: an infection or inflammation may cause it, or a combination of the two.",
        ],
      },
      {
        heading: "The four types",
        paragraphs: [
          "There are four main types: chronic pelvic pain syndrome, acute bacterial prostatitis, chronic bacterial prostatitis and asymptomatic inflammatory prostatitis.",
          "Chronic pelvic pain syndrome, or CPPS, is the most common. Around nine out of every 10 men with prostatitis have it. Asymptomatic inflammatory prostatitis causes no symptoms, and is usually found by chance during tests for other conditions.",
        ],
      },
      {
        heading: "Not cancer",
        paragraphs: [
          "Prostatitis is not cancer. But the NHS says it can be serious and needs urgent medical help.",
          "Some research suggests men with inflammation in the prostate might be more likely to get prostate cancer, but other studies have not found a link or are very small. If you are worried, talk to your GP or hospital doctor.",
        ],
      },
      {
        heading: "Common symptoms",
        paragraphs: [
          "Symptoms may include pain when peeing, which may feel like stinging or burning, difficulty peeing or straining to pee, and needing to pee more often than usual. There can be pain in the penis, scrotum, testicles or bottom, pain when you ejaculate, and a high temperature.",
          "Try not to be embarrassed. The NHS says the doctor will be used to talking about these symptoms.",
        ],
      },
    ],
    helps: [
      "See a GP if you have symptoms of prostatitis.",
      "Try not to be embarrassed: the doctor will be used to talking about these symptoms.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you are unable to pee.",
      "If you are worried about prostate cancer, talk to your GP or hospital doctor, or to Prostate Cancer UK's Specialist Nurses.",
    ],
    tryThisWeek: [
      "See a GP about your symptoms.",
      "Talk openly with the doctor.",
      "Ask about any cancer worries.",
    ],
    ask: "Which type of prostatitis do you think I have?",
    interactive: {
      kind: "flip-cards",
      title: "The four types, card by card",
      intro: "Turn each card to see what that type of prostatitis means.",
      cards: [
        { id: "cpps", front: "Chronic pelvic pain syndrome", when: "Around 9 in 10 men with prostatitis", back: "Long-lasting pain, usually for three months or longer. It is not usually caused by a bacterial infection." },
        { id: "acute", front: "Acute bacterial prostatitis", when: "Symptoms come on very quickly", back: "An infection of the prostate caused by bacteria. It is not common, but it can be serious and may need treating in hospital." },
        { id: "chronic-bacterial", front: "Chronic bacterial prostatitis", when: "Lasts at least three months", back: "An infection that tends to come and go, causing episodes or flare-ups. It is not common." },
        { id: "asymptomatic", front: "Asymptomatic inflammatory", when: "No symptoms at all", back: "Usually found by chance during tests for other conditions, such as an enlarged prostate." },
      ],
    },
    sources: [NHS_PROSTATITIS, PCUK_WHAT, NHS_PSA, PCUK_TESTS],
    quiz: {
      question: "Which type of prostatitis is the most common?",
      options: [{ text: "Chronic pelvic pain syndrome", right: true }, { text: "Acute bacterial prostatitis" }, { text: "Chronic bacterial prostatitis" }],
      why: "Chronic pelvic pain syndrome, or CPPS, is the most common. Around nine out of every 10 men with prostatitis have it.",
    },
  },
  {
    id: "prost-acute",
    kicker: "Understanding",
    question: "What is acute bacterial prostatitis?",
    hook: "A prostate infection that comes on fast, often with a fever. It is not common, but it needs treating straight away.",
    short: "Acute bacterial prostatitis is an infection of the prostate caused by bacteria, with symptoms that develop very quickly, such as a high temperature, chills and pain when peeing. It is not common, but it can be serious and may need treating in hospital. Seek medical advice immediately if you think you have it and have a high temperature.",
    sections: [
      {
        heading: "A sudden infection",
        paragraphs: [
          "Acute bacterial prostatitis is an infection of the prostate that is caused by bacteria. Acute means that the symptoms develop very quickly.",
          "It is not common, but it can be serious and may need treating in hospital.",
        ],
      },
      {
        heading: "How bacteria get in",
        paragraphs: [
          "Bacteria that normally live in the bowel may spread to the tip of the penis and to the urethra, the tube you pee through. From there, they might reach the prostate. Bacteria can also spread to the prostate from the bladder or the bloodstream.",
          "It can happen if you have a urine infection, have had difficulty emptying your bladder, have had a prostate biopsy, or regularly use a thin tube called a catheter to drain urine from your bladder.",
        ],
      },
      {
        heading: "The symptoms",
        paragraphs: [
          "The symptoms usually develop very quickly. They include a high temperature above 38C, feeling feverish, sweating, chills and shivering, and pain between the testicles and back passage, around the testicles, in the penis, lower back or groin.",
          "You may need to pee more often, especially at night, or feel a sudden urge to pee, with or without a burning feeling. Peeing may be difficult or painful.",
        ],
      },
      {
        heading: "When you cannot pee",
        paragraphs: [
          "About 1 in 10 men with this type of prostatitis find they suddenly and painfully cannot pee. This is called acute urine retention, and it needs treating straight away, usually at a hospital, where a thin, flexible tube called a catheter drains the urine.",
          "Prostate Cancer UK says it is very important to seek medical advice immediately if you think you might have acute bacterial prostatitis and have a high temperature. The NHS says to ask for an urgent GP appointment or get help from NHS 111 if you are unable to pee.",
        ],
      },
      {
        heading: "Why quick treatment matters",
        paragraphs: [
          "Acute bacterial prostatitis is treated with antibiotics. If it is not treated straight away, a prostate abscess can develop, where pus builds up inside the prostate. This can be serious, and may need surgery to drain it as well as antibiotics.",
          "Suddenly feeling confused, slurred speech, blue, grey, pale or blotchy skin, lips or tongue, a rash that does not fade when you roll a glass over it, or severe difficulty breathing may mean a serious infection or sepsis. The NHS says to go to A&E or call 999.",
        ],
      },
    ],
    helps: [
      "Seek medical advice immediately if you think you might have acute bacterial prostatitis and have a high temperature.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you are unable to pee.",
      "Go to A&E or call 999 if you suddenly feel confused, have blue, grey, pale or blotchy skin, a rash that does not fade, or severe difficulty breathing.",
      "If you have been given antibiotics, finish the whole course, even if you feel better.",
      "Get plenty of rest and drink enough fluids during treatment.",
    ],
    tryThisWeek: [
      "Get help fast with a high temperature.",
      "Call 111 if you cannot pee.",
      "Finish every antibiotic tablet.",
    ],
    ask: "Do I need treatment in hospital, and what should I watch for at home?",
    interactive: {
      kind: "signs",
      title: "Signs to act on quickly",
      intro: "Tick any you have. They are the symptoms the NHS and Prostate Cancer UK list for a prostate infection.",
      signs: [
        "A high temperature above 38C",
        "Chills, shivering or sweating",
        "Pain between the testicles and back passage",
        "Pain or difficulty when peeing",
        "Suddenly not being able to pee",
        "Feeling confused or not making sense",
      ],
      after: "With a high temperature, seek medical advice immediately. If you cannot pee, ask for an urgent GP appointment or get help from NHS 111. If you are confused, have blotchy skin or severe difficulty breathing, go to A&E or call 999.",
      copyHeading: "Symptoms to tell the doctor about",
    },
    sources: [PCUK_WHAT, PCUK_SYMPTOMS, PCUK_TREATMENTS, NHS_PROSTATITIS, NHS_SEPSIS],
    quiz: {
      question: "You think you have acute bacterial prostatitis and have a high temperature. What should you do?",
      options: [{ text: "Seek medical advice immediately", right: true }, { text: "Wait a week to see if it passes" }, { text: "Drink less so you pee less" }],
      why: "It is very important to seek medical advice immediately if you think you might have acute bacterial prostatitis and have a high temperature.",
    },
  },
  {
    id: "prost-chronic",
    kicker: "Understanding",
    question: "What is chronic prostatitis, or chronic pelvic pain syndrome?",
    hook: "The most common kind: pain that lasts months, comes and goes, and often has no infection behind it.",
    short: "Chronic pelvic pain syndrome, or CPPS, is the most common type of prostatitis. Men with it usually have symptoms for three months or longer, and they can come and go in flare-ups. Nobody knows for certain what causes it, and it is not usually caused by a bacterial infection.",
    sections: [
      {
        heading: "Long-lasting pain",
        paragraphs: [
          "CPPS is the most common type of prostatitis. You might also hear it called chronic non-bacterial prostatitis, chronic abacterial prostatitis or prostate pain syndrome. Chronic means long-lasting.",
          "Men with CPPS usually have symptoms for three months or longer. It might come and go, causing occasional episodes of severe pain, sometimes known as flare-ups.",
        ],
      },
      {
        heading: "What may set it off",
        paragraphs: [
          "Nobody knows for certain what causes CPPS. Unlike other types of prostatitis, it is not usually caused by a bacterial infection, and there could be a number of causes, which makes it difficult to diagnose and treat.",
          "Possible triggers include urine getting into the prostate, earlier infections in or around the prostate, an infection that does not show up in tests, and nerves sending pain signals to the brain when nothing is physically wrong. Stress, anxiety or depression, and problems with the pelvic floor muscles, may also play a part.",
        ],
      },
      {
        heading: "Where it can hurt",
        paragraphs: [
          "Symptoms vary from man to man. They may include pain or discomfort between the back passage and testicles, in the lower stomach area, the penis, especially the tip, the testicles, the back passage and lower back, or the inner thighs.",
          "There may also be sexual problems, urinary problems such as feeling the bladder has not emptied properly or needing to pee more often, and bowel problems such as bloating or diarrhoea.",
        ],
      },
      {
        heading: "Not all in your head",
        paragraphs: [
          "Some research shows a link between stress, anxiety and depression and CPPS. Prostate Cancer UK says this does not mean CPPS is all in your head: feeling stressed or depressed may cause physical symptoms that trigger CPPS, or make symptoms worse.",
          "There is some evidence that CPPS may be linked to other conditions, such as chronic fatigue syndrome and irritable bowel syndrome.",
        ],
      },
      {
        heading: "Chronic bacterial prostatitis",
        paragraphs: [
          "Chronic bacterial prostatitis is a different, less common type. It is an infection of the prostate that lasts at least three months and tends to come and go, with common symptoms including painful ejaculation, pain in the penis and testicles, and urine infections.",
          "It tends to affect men who have had lots of urine infections or an inflamed urethra, and it can develop from acute bacterial prostatitis if antibiotics do not get rid of all the bacteria.",
        ],
      },
    ],
    helps: [
      "Speak to your GP if you have any of these symptoms.",
      "Use the chronic prostatitis symptom index to help explain your symptoms to your doctor.",
      "Always speak to your doctor if you have blood in your semen.",
      "If you have had symptoms for 3 months or longer, ask whether you should be referred to a urologist.",
      "Call Prostate Cancer UK's Specialist Nurses if you have any questions.",
      "If your doctor thinks your pelvic floor muscles may be involved, ask whether a physiotherapist could help.",
    ],
    tryThisWeek: [
      "Speak to your GP about symptoms.",
      "Fill in the symptom index.",
      "Ask about seeing a urologist.",
    ],
    ask: "Is this chronic pelvic pain syndrome, or could there be an infection?",
    interactive: {
      kind: "risk-check",
      title: "What might set it off?",
      intro: "Tick any that might apply. Nobody knows for certain what causes CPPS, and some of these can be worked on.",
      items: [
        { id: "stress", label: "Stress, anxiety or low mood", note: "Feeling stressed or depressed may cause physical symptoms that trigger CPPS, or make symptoms worse.", changeable: true },
        { id: "pelvic-floor", label: "Pelvic floor muscle problems", note: "If your doctor thinks these muscles are involved, they may refer you to a physiotherapist.", changeable: true },
        { id: "past-infection", label: "Earlier infections near the prostate", note: "Previous infections in or around the prostate might trigger it.", changeable: false },
        { id: "hidden", label: "An infection tests do not show", note: "An infection that does not show up in tests is one possible trigger.", changeable: false },
        { id: "nerves", label: "Nerves sending pain signals", note: "Nerves may send pain signals to the brain even when there is nothing physically wrong.", changeable: false },
      ],
    },
    sources: [PCUK_WHAT, PCUK_SYMPTOMS, NHS_PROSTATITIS, PCUK_TREATMENTS],
    quiz: {
      question: "Is CPPS usually caused by a bacterial infection?",
      options: [{ text: "No, not usually", right: true }, { text: "Yes, always" }, { text: "Only in older men" }],
      why: "Unlike other types of prostatitis, it is not usually caused by a bacterial infection.",
    },
  },
  {
    id: "prost-tests",
    kicker: "Understanding",
    question: "What tests and examinations will I have?",
    hook: "Usually a urine test and a gentle prostate examination, sometimes a questionnaire. Finding the cause can take time.",
    short: "Most men have a urine test to check for infection, and may have a digital rectal examination of the prostate. There is no single test for chronic pelvic pain syndrome, so your doctor rules out other causes first, sometimes with a symptom questionnaire. A PSA blood test is usually put off while you have prostatitis symptoms, as prostatitis can raise the result.",
    sections: [
      {
        heading: "Why it can take time",
        paragraphs: [
          "It can take some time to get a diagnosis. The symptoms of prostatitis can be similar to other problems, such as urine infections, which can make it difficult to diagnose.",
          "There is no single test for CPPS. Your doctor will need to rule out other possible causes first. You might be diagnosed if you have had some of the symptoms for more than three of the last six months, but your doctor may diagnose it sooner.",
        ],
      },
      {
        heading: "A urine test and an examination",
        paragraphs: [
          "You will usually have a urine test, to check for bacteria and other signs of infection, or to make sure you do not have a urine infection or a sexually transmitted disease.",
          "You may have a digital rectal examination, where a health professional feels the prostate by putting a finger into your bottom, to see if it is inflamed and painful. With acute bacterial prostatitis, you might also need a blood test, and an MRI or ultrasound scan to check for a prostate abscess.",
        ],
      },
      {
        heading: "A symptom questionnaire",
        paragraphs: [
          "For CPPS, your doctor will ask about your symptoms and medical history, or give you a questionnaire to fill in. This can help them work out what is causing your symptoms, and which treatments are most likely to help.",
          "One is the chronic prostatitis symptom index, which BAUS publishes as a leaflet. It asks about pain, peeing and how much your symptoms have affected you over the last week, and it can help your doctor monitor your treatment.",
        ],
      },
      {
        heading: "PSA tests",
        paragraphs: [
          "A PSA blood test measures a protein made by the prostate. A raised level can be a sign of a prostate problem, such as an enlarged prostate, prostate cancer or prostatitis.",
          "Prostatitis can raise your PSA level and make the result less reliable. So if your GP thinks you may have another prostate problem, they will avoid testing your PSA while you have prostatitis symptoms. The NHS says that after a urine infection, you need to wait 4 to 6 weeks after it has cleared.",
        ],
      },
      {
        heading: "Seeing a specialist",
        paragraphs: [
          "For some tests, you might need to see a urologist, a hospital doctor who specialises in urinary problems, or a specialist nurse.",
          "BAUS says all urinary infections in men should be investigated. Ultrasound scanning is the main method, looking particularly at how well the bladder empties.",
        ],
      },
    ],
    helps: [
      "Ask your doctor for more information about any other tests you may have.",
      "Use the chronic prostatitis symptom index to explain your symptoms, and show it to your GP.",
      "Ask why a PSA test is being done, and what will happen if your PSA is raised.",
      "For 48 hours before a PSA test, do not ejaculate, ride a bike or do anything that leaves you out of breath.",
    ],
    tryThisWeek: [
      "Ask which tests you need.",
      "Bring your symptom index.",
      "Ask why a PSA test is needed.",
    ],
    ask: "Which tests do I need, and what are you ruling out?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, card by card",
      intro: "Turn each card to see what the test is for.",
      cards: [
        { id: "urine", front: "Urine test", when: "Almost always", back: "Checks for bacteria and other signs of infection, and rules out a urine infection or a sexually transmitted disease." },
        { id: "dre", front: "Digital rectal examination", when: "Often, at the GP or hospital", back: "A health professional gently feels the prostate through the back passage, to see if it is inflamed and painful." },
        { id: "blood", front: "Blood test", when: "Sometimes, for a sudden infection", back: "You might need one if acute bacterial prostatitis is suspected." },
        { id: "scan", front: "MRI or ultrasound scan", when: "If an abscess is possible", back: "Checks whether a prostate abscess, a build-up of pus, has formed." },
        { id: "index", front: "Symptom index", when: "For chronic pelvic pain", back: "A questionnaire about pain, peeing and quality of life over the last week. It helps your doctor monitor treatment." },
        { id: "psa", front: "PSA blood test", when: "Usually after symptoms settle", back: "Prostatitis can raise PSA and make results less reliable, so your GP may wait before testing it." },
      ],
    },
    sources: [PCUK_TESTS, NHS_PSA, BAUS_CPSI, PCUK_SYMPTOMS, BAUS_UTI],
    quiz: {
      question: "Why might a GP put off a PSA test while you have prostatitis?",
      options: [{ text: "Prostatitis can raise PSA levels", right: true }, { text: "PSA tests spread infection" }, { text: "PSA tests only work in winter" }],
      why: "Prostatitis can raise your PSA level and make the result less reliable.",
    },
  },
  {
    id: "prost-antibiotics",
    kicker: "Treatment",
    question: "How do antibiotics treat prostatitis, and for how long?",
    hook: "Weeks, not days: a prostate infection needs a longer course than most, and finishing it matters.",
    short: "Prostatitis caused by infection is treated with antibiotics. The NHS says you will usually feel better within 2 weeks, but it may take several weeks for all your symptoms to settle. Acute infections are usually treated for up to four weeks, and chronic bacterial prostatitis for at least four to six weeks, so finishing the whole course matters.",
    sections: [
      {
        heading: "The main treatment for infection",
        paragraphs: [
          "Prostatitis is treated with antibiotics. You will usually feel better within 2 weeks after starting treatment, but it may take several weeks for all your symptoms to get better.",
          "With acute bacterial prostatitis, you might get antibiotic tablets to take at home. These should treat the infection quite quickly.",
        ],
      },
      {
        heading: "How long the course lasts",
        paragraphs: [
          "For acute bacterial prostatitis, you will usually take antibiotics for up to four weeks. If the infection is more severe, or the tablets do not work well, you may need them for longer.",
          "Chronic bacterial prostatitis needs antibiotic tablets for at least four to six weeks. If you still have symptoms after you finish, your doctor may do another urine test to see if the infection has gone.",
        ],
      },
      {
        heading: "In hospital",
        paragraphs: [
          "Some men need to spend time in hospital, to have antibiotics through a drip. A liquid containing antibiotics passes through a thin tube into a vein, usually in the arm.",
          "Once the infection has cleared up, you might get antibiotic tablets to take at home for about two to four weeks.",
        ],
      },
      {
        heading: "Finish the course",
        paragraphs: [
          "If you have been given antibiotics, finish the whole course, even if you feel better. If you do not take all the tablets, the infection could come back.",
          "Chronic bacterial prostatitis can develop from acute bacterial prostatitis if antibiotics do not get rid of all the bacteria, for example because the treatment was stopped too early.",
        ],
      },
      {
        heading: "About ciprofloxacin",
        paragraphs: [
          "Ciprofloxacin is one antibiotic used for infection of the prostate gland. Because it can cause rare but serious side effects, the NHS says it is often only used if other antibiotics have not worked, or cannot be taken.",
          "Do not take it with dairy products or drinks with added calcium, and leave a gap of at least 2 hours between them. Tell your doctor about other medicines you take, as some, including NSAIDs such as ibuprofen, may not mix well with it.",
        ],
      },
    ],
    helps: [
      "If you have been given antibiotics, finish the whole course, even if you feel better.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have taken antibiotics for 48 hours and your symptoms have not got better, or have got worse.",
      "Before taking ciprofloxacin, tell your doctor about any other medicines, herbal remedies, vitamins or supplements you take.",
      "Only ever take antibiotics prescribed for you.",
      "Speak to a pharmacist or doctor about side effects that bother you, and keep taking your medicine unless you are advised to stop.",
    ],
    tryThisWeek: [
      "Finish every tablet.",
      "Get help if no better in 48 hours.",
      "Tell your doctor what else you take.",
    ],
    ask: "How long should I take these antibiotics, and what if I am no better?",
    interactive: {
      kind: "timeline",
      title: "Through a course of antibiotics",
      steps: [
        { id: "start", when: "Day 1", title: "Start the course", points: ["Take antibiotics as the packet, leaflet, GP or pharmacist directs.", "Drink plenty of fluids and get plenty of rest."] },
        { id: "two-days", when: "After 48 hours", title: "Check how you feel", points: ["No better, or worse? Ask for an urgent GP appointment or get help from NHS 111."] },
        { id: "two-weeks", when: "Within 2 weeks", title: "Usually feeling better", points: ["It may still take several weeks for all your symptoms to get better.", "Keep going, even if you feel better."] },
        { id: "four-weeks", when: "Up to 4 weeks", title: "Acute infection course", points: ["You will usually take antibiotics for up to four weeks, or longer if the infection is more severe."] },
        { id: "six-weeks", when: "4 to 6 weeks or more", title: "Chronic bacterial course", points: ["At least four to six weeks of tablets.", "Still have symptoms? Your doctor may do another urine test."] },
      ],
    },
    sources: [NHS_PROSTATITIS, PCUK_TREATMENTS, NHS_CIPRO, NHS_ANTIBIOTICS, PCUK_WHAT],
    quiz: {
      question: "You feel better after a week of antibiotics. What should you do?",
      options: [{ text: "Finish the whole course", right: true }, { text: "Stop the tablets now" }, { text: "Save the rest for later" }],
      why: "If you have been given antibiotics, finish the whole course, even if you feel better. If you do not take all the tablets, the infection could come back.",
    },
  },
  {
    id: "prost-pain-relief",
    kicker: "Treatment",
    question: "Which painkillers and other medicines can help?",
    hook: "From paracetamol to alpha-blockers: several medicines can ease pain and peeing problems, and a pain clinic can help if they do not.",
    short: "Paracetamol or ibuprofen can help with pain, though it is best to talk to your GP before using ibuprofen-type painkillers for long. Alpha-blockers such as tamsulosin relax the muscles around the prostate and bladder and can help some men with peeing and pain. For long-term pain, other medicines such as amitriptyline, or a referral to a pain clinic, may help.",
    sections: [
      {
        heading: "Simple painkillers",
        paragraphs: [
          "The NHS suggests paracetamol or ibuprofen to help with pain. It may be enough to take over-the-counter pain relief such as paracetamol, and your doctor or a pharmacist can recommend ones that suit you.",
          "Ibuprofen is a non-steroidal anti-inflammatory drug, or NSAID. There is no strong evidence that NSAIDs work for CPPS, but some men find they reduce pain. Talk to your GP first, as they can cause side effects such as stomach irritation and stomach ulcers.",
        ],
      },
      {
        heading: "Alpha-blockers",
        paragraphs: [
          "Alpha-blockers such as tamsulosin work by relaxing the muscles around the prostate and bladder, which can make it easier to pee. You usually take tamsulosin once a day.",
          "There is some evidence that alpha-blockers help improve urinary symptoms for some men, particularly a weak or slow flow, and pain. If they are not helping after four to six weeks, you will usually stop taking them.",
        ],
      },
      {
        heading: "Side effects of tamsulosin",
        paragraphs: [
          "Common side effects include dizziness, particularly when you sit down or stand up, and ejaculation problems. If you feel dizzy, do not drive, ride a bike or use machinery until it passes.",
          "It is best not to drink alcohol while taking tamsulosin, as it can increase the risk of side effects.",
        ],
      },
      {
        heading: "Medicines for long-term pain",
        paragraphs: [
          "Medicines used for other conditions can also treat prostatitis pain. You might be offered an antidepressant, such as amitriptyline, to treat long-term prostatitis pain, and some men find these helpful.",
          "Some older men with a larger prostate find that 5-alpha-reductase inhibitors, such as finasteride, improve urinary symptoms, although there is no strong evidence that they work. They can take up to six months to work.",
        ],
      },
      {
        heading: "If painkillers are not enough",
        paragraphs: [
          "If pain-relieving medicines are not helping, your doctor may refer you to a pain clinic. Pain clinics have teams of health professionals who specialise in treating pain and can offer a variety of treatments.",
          "All medicines carry a risk of side effects. Ask your doctor about the different treatments, and whether they might be suitable for you.",
        ],
      },
    ],
    helps: [
      "Take paracetamol or ibuprofen to help with pain.",
      "Talk to your GP before buying NSAIDs such as ibuprofen from a pharmacy.",
      "If you can take paracetamol, it is a good idea to try it before taking ibuprofen.",
      "If tamsulosin makes you dizzy, do not drive, ride a bike or use machinery until you no longer feel dizzy.",
      "If pain-relieving medicines are not helping, ask your doctor about a referral to a pain clinic.",
    ],
    tryThisWeek: [
      "Try paracetamol first.",
      "Ask your GP before ibuprofen.",
      "Ask about a pain clinic.",
    ],
    ask: "Would an alpha-blocker or a medicine for long-term pain suit me?",
    interactive: {
      kind: "flip-cards",
      title: "The medicines, card by card",
      intro: "Turn each card to see what that medicine may do.",
      cards: [
        { id: "paracetamol", front: "Paracetamol", when: "Over the counter", back: "May be enough for discomfort or pain. Worth trying before ibuprofen if you can take it." },
        { id: "nsaids", front: "NSAIDs", when: "Such as ibuprofen", back: "Some men find they reduce pain. Talk to your GP first: they can irritate the stomach and cause ulcers." },
        { id: "alpha", front: "Alpha-blockers", when: "Such as tamsulosin, once a day", back: "Relax the muscles around the prostate and bladder. Usually stopped if not helping after four to six weeks." },
        { id: "amitriptyline", front: "Amitriptyline", when: "For long-term pain", back: "An antidepressant that some men with long-term prostatitis pain find helpful." },
        { id: "finasteride", front: "Finasteride", when: "Some older men, larger prostate", back: "May improve urinary symptoms by shrinking the prostate. It can take up to six months to work." },
      ],
    },
    sources: [NHS_PROSTATITIS, PCUK_TREATMENTS, NHS_TAMSULOSIN, NHS_PARACETAMOL, NHS_IBUPROFEN],
    quiz: {
      question: "How do alpha-blockers such as tamsulosin help?",
      options: [{ text: "They relax muscles around the prostate and bladder", right: true }, { text: "They kill bacteria" }, { text: "They numb the skin" }],
      why: "Alpha-blockers such as tamsulosin work by relaxing the muscles around the prostate and bladder, which can make it easier to pee.",
    },
  },
  {
    id: "prost-physio",
    kicker: "Treatment",
    question: "Can physiotherapy and relaxing the pelvic floor help?",
    hook: "When tight pelvic floor muscles are part of the pain, a physiotherapist can teach ways to release them.",
    short: "If your doctor thinks problems with your pelvic floor muscles are behind your pain, they may refer you to a physiotherapist. A physiotherapist might teach breathing and relaxation techniques, massage tender trigger points, and show you exercises and stretches. Regular, gentle physical activity may also help with symptoms.",
    sections: [
      {
        heading: "When the pelvic floor is involved",
        paragraphs: [
          "If your doctor thinks your CPPS may be caused by problems with your pelvic floor muscles, they may refer you to a physiotherapist. The NHS lists physiotherapy among the treatments for chronic prostatitis.",
          "The pelvic floor muscles support the bladder and bowel, and help control when you pee.",
        ],
      },
      {
        heading: "What a physiotherapist may do",
        paragraphs: [
          "A physiotherapist helps people to reduce pain through exercises or physical activity. They might show you breathing and relaxation techniques, or massage tender areas of your pelvic floor muscles, known as trigger points.",
          "They might also teach you pelvic floor muscle exercises. Doing these exercises and stretches can help strengthen the muscles, which may help with urinary symptoms.",
        ],
      },
      {
        heading: "Breathing and relaxing",
        paragraphs: [
          "When pain is intense, it is easy to start taking shallow, rapid breaths. The NHS suggests breathing slowly and deeply instead, to feel more in control and stop muscle tension or anxiety from making the pain worse.",
          "Practising relaxation techniques regularly can help reduce persistent pain. Prostate Cancer UK suggests deep breathing or meditation, a warm bath, or listening to music.",
        ],
      },
      {
        heading: "Staying active",
        paragraphs: [
          "Some research has shown that regular physical activity can help to prevent CPPS symptoms. Your GP may be able to refer you to a local exercise programme, or you could join a community walking group.",
          "Pace yourself and only do what is comfortable for you, and speak to your doctor before you start exercise. A physiotherapist can show you gentle stretching exercises, or you could try a yoga class.",
        ],
      },
    ],
    helps: [
      "Ask your doctor whether a physiotherapist could help, if your pelvic floor muscles may be involved.",
      "Breathe slowly and deeply when the pain is intense.",
      "Practise relaxation techniques regularly, such as deep breathing, meditation or a warm bath.",
      "Ask your GP about a local exercise programme, or join a community walking group.",
      "Pace yourself and only do what is comfortable for you.",
    ],
    tryThisWeek: [
      "Ask about a physiotherapy referral.",
      "Practise slow, deep breathing.",
      "Join a walking group.",
    ],
    ask: "Could my pelvic floor muscles be part of this, and can you refer me to a physiotherapist?",
    interactive: {
      kind: "scenarios",
      title: "Moments with pelvic pain",
      scenarios: [
        {
          id: "intense",
          situation: "The pain suddenly gets intense and your breathing speeds up.",
          options: [{ text: "Breathe slowly and deeply", best: true }, { text: "Hold your breath until it passes" }],
          why: "Breathing slowly and deeply helps you feel more in control and stops muscle tension or anxiety from making pain worse.",
        },
        {
          id: "exercise",
          situation: "You want to get more active, but worry it will hurt.",
          options: [{ text: "Talk to your doctor, then pace yourself", best: true }, { text: "Push hard from day one" }],
          why: "Speak to your doctor before you start exercise. Pace yourself and only do what is comfortable for you.",
        },
        {
          id: "muscles",
          situation: "Your doctor thinks pelvic floor muscles are part of the problem.",
          options: [{ text: "Ask about seeing a physiotherapist", best: true }, { text: "Wait for it to settle alone" }],
          why: "If your doctor thinks your CPPS may be caused by problems with your pelvic floor muscles, they may refer you to a physiotherapist.",
        },
      ],
    },
    sources: [PCUK_TREATMENTS, NHS_PROSTATITIS, NHS_PAIN],
    quiz: {
      question: "What might a physiotherapist do for chronic pelvic pain?",
      options: [{ text: "Teach breathing and relaxation techniques", right: true }, { text: "Prescribe antibiotics" }, { text: "Remove the prostate" }],
      why: "They might show you breathing and relaxation techniques, or massage tender areas of your pelvic floor muscles, known as trigger points.",
    },
  },
  {
    id: "prost-urgent",
    kicker: "Treatment",
    question: "When should I get urgent help?",
    hook: "Not being able to pee, antibiotics that are not working, or signs of sepsis: what each one means, and who to call.",
    short: "See a GP if you have symptoms of prostatitis. Ask for an urgent GP appointment or get help from NHS 111 if you cannot pee, or if antibiotics have not helped after 48 hours. Go to A&E or call 999 if you suddenly feel confused, have blotchy or blue-grey skin, a rash that does not fade or severe difficulty breathing, as these may mean sepsis.",
    sections: [
      {
        heading: "See a GP",
        paragraphs: [
          "See a GP if you have symptoms of prostatitis. Try not to be embarrassed: the NHS says the doctor will be used to talking about these symptoms.",
        ],
      },
      {
        heading: "An urgent GP appointment or NHS 111",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you are unable to pee, or if you have been taking antibiotics for prostatitis for 48 hours but your symptoms have not got better, or have got worse.",
          "You can call 111 or get help from NHS 111 online.",
        ],
      },
      {
        heading: "999 or A&E",
        paragraphs: [
          "Go to A&E or call 999 if you suddenly feel confused, have slurred speech or are not making sense, or have blue, grey, pale or blotchy skin, lips or tongue. On brown or black skin, this may be easier to see on the palms of the hands or soles of the feet.",
          "Do the same if you have a rash that does not fade when you roll a glass over it, or severe difficulty breathing, such as not being able to get your words out, choking or gasping. These symptoms may mean you have a serious infection or sepsis.",
        ],
      },
      {
        heading: "Why it cannot wait",
        paragraphs: [
          "Sepsis is a serious reaction to an infection that can be life-threatening. It develops very quickly and needs urgent treatment in hospital.",
          "Prostate Cancer UK says to seek medical advice immediately if you think you might have acute bacterial prostatitis and have a high temperature. Suddenly not being able to pee, called acute urine retention, needs treating straight away, usually at a hospital.",
        ],
      },
      {
        heading: "Getting there",
        paragraphs: [
          "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
    ],
    helps: [
      "Ask for an urgent GP appointment or get help from NHS 111 if you are unable to pee.",
      "Get help from NHS 111 if you have taken antibiotics for prostatitis for 48 hours and your symptoms have not got better, or have got worse.",
      "Go to A&E or call 999 if you suddenly feel confused, have blue, grey, pale or blotchy skin, a rash that does not fade, or severe difficulty breathing.",
      "Do not drive to A&E: ask someone to drive you or call 999, and bring your medicines.",
      "If you have long-term prostatitis, speak to your GP about an action plan for flare-ups.",
    ],
    tryThisWeek: [
      "Know when to call 111.",
      "Know the signs that mean 999.",
      "Make a flare-up action plan.",
    ],
    ask: "Which symptoms mean I should get urgent help?",
    interactive: {
      kind: "scenarios",
      title: "Who to call, and how fast",
      scenarios: [
        {
          id: "cannot-pee",
          situation: "You suddenly cannot pee.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait until tomorrow" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you are unable to pee. It needs treating straight away.",
        },
        {
          id: "no-better",
          situation: "Two days into antibiotics, you feel worse.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Stop the antibiotics" }],
          why: "Get help if you have been taking antibiotics for 48 hours but your symptoms have not got better, or have got worse.",
        },
        {
          id: "sepsis",
          situation: "You feel confused and your skin looks pale and blotchy.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Book a routine GP appointment" }],
          why: "These symptoms may mean you have a serious infection or sepsis. Go to A&E or call 999.",
        },
        {
          id: "fever",
          situation: "You have prostate pain and a high temperature.",
          options: [{ text: "Seek medical advice immediately", best: true }, { text: "See how you feel next week" }],
          why: "It is very important to seek medical advice immediately if you think you might have acute bacterial prostatitis and have a high temperature.",
        },
      ],
    },
    sources: [NHS_PROSTATITIS, NHS_SEPSIS, PCUK_SYMPTOMS, PCUK_TREATMENTS],
    quiz: {
      question: "You have taken antibiotics for prostatitis for 48 hours and feel worse. What does the NHS advise?",
      options: [{ text: "Urgent GP appointment or NHS 111", right: true }, { text: "Double the dose" }, { text: "Wait until the course ends" }],
      why: "Ask for an urgent GP appointment or get help from NHS 111 if you have been taking antibiotics for prostatitis for 48 hours but your symptoms have not got better, or have got worse.",
    },
  },
  {
    id: "prost-daily-life",
    kicker: "Living well",
    question: "How can I manage sitting, cycling and daily life?",
    hook: "A softer seat, regular breaks, a different saddle and a few swaps in what you drink can make long days easier.",
    short: "Long-term prostatitis can make sitting, travelling and long days hard. Prostate Cancer UK suggests a soft or inflatable cushion during a flare-up, changing position or walking around every 30 minutes, avoiding pressure from cycling or trying a gel saddle, and drinking about six to eight glasses of water a day while cutting down on bladder irritants.",
    sections: [
      {
        heading: "Living with it day to day",
        paragraphs: [
          "Long-term prostatitis can be a very difficult condition to live with. The pain or discomfort can make everyday tasks hard, and a flare-up can come with no warning.",
          "Travelling long distances, or sitting in meetings without knowing when you can reach a toilet, can be worrying, especially if you need to go a lot. It can also be uncomfortable to sit for a long time.",
        ],
      },
      {
        heading: "Sitting more comfortably",
        paragraphs: [
          "If you need to sit for long periods, in an office or when driving, try using a soft or inflatable cushion during a flare-up to reduce the pressure.",
          "Change your position regularly to stay as comfortable as possible. You could try standing up, working at a standing desk, or walking around every 30 minutes.",
        ],
      },
      {
        heading: "Cycling",
        paragraphs: [
          "It is a good idea to avoid activities that put pressure on the area between your back passage and testicles, such as cycling, as they can make symptoms worse.",
          "If you want to keep cycling, you could try a different saddle, such as one made from gel.",
        ],
      },
      {
        heading: "Drinks and food",
        paragraphs: [
          "Drink plenty of fluids, about six to eight glasses of water a day. Cut down on fizzy drinks, artificial sweeteners, alcohol and drinks with caffeine, such as tea, coffee and cola, as these can irritate the bladder.",
          "Some foods may make symptoms worse, and there is some evidence that spicy foods can make CPPS worse. A diary of food, drink, exercise, stress and symptoms can help you spot what makes things worse.",
        ],
      },
      {
        heading: "Pacing your day",
        paragraphs: [
          "Try planning your day by setting goals and including frequent rest breaks, and allow for things like toilet trips.",
          "Try to get plenty of sleep, and talk to your doctor or nurse if something is getting in the way, from urinary problems to worries. The NHS suggests going to bed and getting up at regular times.",
        ],
      },
    ],
    helps: [
      "Use a soft or inflatable cushion during a flare-up if you need to sit for long periods.",
      "Change position regularly, or stand up or walk around every 30 minutes.",
      "Avoid cycling, or try a different saddle, such as one made from gel.",
      "Drink about six to eight glasses of water a day, and cut down on fizzy drinks, alcohol and caffeine.",
      "Keep a diary of food, drink, exercise, stress and symptoms.",
    ],
    tryThisWeek: [
      "Try a cushion for long sits.",
      "Get up every 30 minutes.",
      "Swap one coffee for water.",
    ],
    ask: "What could help me get through a long working day or journey?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "desk",
          situation: "You have a long day of meetings at a desk.",
          options: [{ text: "Change position, or walk around every 30 minutes", best: true }, { text: "Stay seated all day" }],
          why: "Change your position regularly. You could try standing up, working at a standing desk, or walking around every 30 minutes.",
        },
        {
          id: "bike",
          situation: "You love cycling, but it makes symptoms worse.",
          options: [{ text: "Try a different saddle, such as gel", best: true }, { text: "Ride longer to toughen up" }],
          why: "If you want to keep cycling, you could try using a different saddle, such as one made from gel.",
        },
        {
          id: "drinks",
          situation: "You are reaching for another coffee or cola.",
          options: [{ text: "Have water instead", best: true }, { text: "Drink less of everything" }],
          why: "Drink plenty of fluids, about six to eight glasses of water a day, and cut down on caffeine, which can irritate the bladder.",
        },
        {
          id: "drive",
          situation: "A long drive during a flare-up.",
          options: [{ text: "Use a soft or inflatable cushion", best: true }, { text: "Sit on a hard seat" }],
          why: "Try using a soft or inflatable cushion during a flare-up to reduce the pressure.",
        },
      ],
    },
    sources: [PCUK_TREATMENTS, NHS_PROSTATITIS, NHS_PAIN],
    quiz: {
      question: "Which drinks can irritate the bladder?",
      options: [{ text: "Caffeine, fizzy drinks and alcohol", right: true }, { text: "Water" }, { text: "None at all" }],
      why: "Cut down on fizzy drinks, artificial sweeteners, alcohol and drinks with caffeine, such as tea, coffee and cola, as these can irritate the bladder.",
    },
  },
  {
    id: "prost-sex",
    kicker: "Living well",
    question: "How can prostatitis affect sex and relationships?",
    hook: "Painful ejaculation and erection problems are common with prostatitis, and there is help that works.",
    short: "Prostatitis can cause sexual problems, such as difficulty getting or keeping an erection, pain or burning when you ejaculate, and premature ejaculation. Speak to your doctor or nurse: medicines such as sildenafil or tadalafil can help with erections, and counselling or couples therapy can help with the strain on a relationship.",
    sections: [
      {
        heading: "How it can affect sex",
        paragraphs: [
          "Prostatitis can cause sexual problems, such as difficulty getting or keeping an erection, pain or burning when you ejaculate, and premature ejaculation.",
          "In rare cases, there can be blood in the semen. This can also be a sign that something else is wrong, so always speak to your doctor if you have blood in your semen.",
        ],
      },
      {
        heading: "Help for erection problems",
        paragraphs: [
          "If prostatitis is causing sexual problems, speak to your doctor or nurse. There is support available, and there are things to try that can work well.",
          "Your doctor can prescribe medicines such as sildenafil or tadalafil, which increase the blood flow to the penis. You can get sildenafil on prescription or buy it from a pharmacy.",
          "The NHS warns that many websites sell fake medicines, so it is best to see a doctor before buying them online.",
        ],
      },
      {
        heading: "Ejaculation",
        paragraphs: [
          "Some men find that ejaculating regularly helps with their symptoms, as it empties some fluid from the prostate. There is not much evidence for this, and some men find the pain gets worse.",
          "Ejaculation problems are a common side effect of tamsulosin, an alpha-blocker sometimes used for prostatitis. Speak to a pharmacist or doctor if side effects bother you or do not go away.",
        ],
      },
      {
        heading: "Stress, feelings and talking",
        paragraphs: [
          "Erection problems can also be caused by stress, tiredness or drinking too much alcohol, and by depression or anxiety. Counselling and therapy can help if they are linked to emotional or mental health problems.",
          "Couples therapy is one kind of NHS talking therapy, where you and your partner talk to a therapist who helps you deal with problems in your relationship. Sexual health clinics can also help with erection problems, and many offer a walk-in service.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor or nurse if prostatitis is causing sexual problems.",
      "Always speak to your doctor if you have blood in your semen.",
      "See a GP or go to a sexual health clinic if erection problems keep happening.",
      "See a doctor before buying erection medicines online.",
      "Try to reduce stress and anxiety.",
    ],
    tryThisWeek: [
      "Mention sexual problems to your doctor.",
      "Try a sexual health clinic.",
      "Find ways to ease stress.",
    ],
    ask: "Could a medicine or a referral help with the sexual side of this?",
    interactive: {
      kind: "scenarios",
      title: "Questions people find hard to ask",
      scenarios: [
        {
          id: "blood",
          situation: "You notice blood in your semen.",
          options: [{ text: "Speak to your doctor", best: true }, { text: "Ignore it, it is always prostatitis" }],
          why: "This can also be a sign that something else is wrong, so always speak to your doctor if you have blood in your semen.",
        },
        {
          id: "erections",
          situation: "Getting or keeping an erection has become difficult.",
          options: [{ text: "Talk to your doctor or nurse", best: true }, { text: "Buy pills from any website" }],
          why: "There is support available and things to try that can work well. Many websites sell fake medicines, so see a doctor first.",
        },
        {
          id: "tamsulosin",
          situation: "Since starting tamsulosin, ejaculation feels different.",
          options: [{ text: "Mention it to a pharmacist or doctor", best: true }, { text: "Stop the tablets without saying" }],
          why: "Ejaculation problems are a common side effect. Speak to a pharmacist or doctor, and keep taking your medicine unless you are advised to stop.",
        },
      ],
    },
    sources: [PCUK_SYMPTOMS, PCUK_TREATMENTS, NHS_ED, NHS_TAMSULOSIN, NHS_TALKING],
    quiz: {
      question: "What should you do if you notice blood in your semen?",
      options: [{ text: "Always speak to your doctor", right: true }, { text: "Nothing, it is normal" }, { text: "Stop drinking water" }],
      why: "This can also be a sign that something else is wrong, so always speak to your doctor if you have blood in your semen.",
    },
  },
  {
    id: "prost-mood",
    kicker: "Living well",
    question: "How can I cope with the mood side of long-term pain?",
    hook: "Frustration, worry and low mood are common with long-term prostatitis, and they can feed the pain. Talking therapies can break that loop.",
    short: "Living with long-term prostatitis can leave men feeling frustrated, alone, low or anxious, and feeling this way can make symptoms worse. Talking to your doctor or nurse is a good first step: cognitive behavioural therapy can help men find ways to deal with prostatitis, and you can refer yourself to NHS talking therapies. If you need urgent help, call NHS 111 and choose the mental health option.",
    sections: [
      {
        heading: "A hard condition to live with",
        paragraphs: [
          "If you are living with prostatitis, it is natural to feel frustrated. Some men feel that other people do not understand their symptoms, which can make them feel alone, and some feel depressed or anxious.",
          "Feeling depressed or anxious could make prostatitis symptoms worse, and stress can cause a flare-up. If you feel this way, speak to your doctor or nurse. There are things that can help.",
        ],
      },
      {
        heading: "The pain cycle",
        paragraphs: [
          "Pain can make you feel anxious and not want to do anything. But not being active can make you feel down and may actually increase your pain. This is called the pain cycle.",
          "The NHS says pain can make you tired, anxious, depressed and grumpy, which can make the pain even worse. Be kind to yourself.",
        ],
      },
      {
        heading: "Talking therapies",
        paragraphs: [
          "Your doctor might refer you to a counsellor or psychologist. Cognitive behavioural therapy, or CBT, can help men find ways to deal with prostatitis. It focuses on your thoughts, beliefs and attitudes, and how these affect what you do and how you feel.",
          "The NHS says CBT can help with long-term pain. You can refer yourself to NHS talking therapies for help coping with a long-term health condition, such as chronic pain, without speaking to a GP, and you will usually have between 5 and 15 sessions of CBT.",
        ],
      },
      {
        heading: "Support and staying connected",
        paragraphs: [
          "Talking to other people who understand what you are going through can help. Prostate Cancer UK's Specialist Nurses have time to listen, in confidence, and its online community is a place to share your experience.",
          "The NHS suggests keeping in touch with friends and family. In his story for Prostate Cancer UK, Simon says that when people know what you are going through, it takes a weight off your mind.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, get advice from 111 by calling 111 and selecting the mental health option, or ask for an urgent GP appointment. You can also call 116 123 to talk to Samaritans.",
          "Call 999 or go to A&E if someone's life is at risk, or you do not feel you can keep yourself or someone else safe.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor or nurse if you feel depressed or anxious.",
      "Refer yourself to NHS talking therapies for help coping with a long-term health condition.",
      "Call Prostate Cancer UK's Specialist Nurses on 0800 074 8383, or join its online community.",
      "Keep in touch with friends and family, and try to talk about things other than your pain.",
      "If you need urgent help for your mental health, call 111 and select the mental health option, or call Samaritans on 116 123.",
    ],
    tryThisWeek: [
      "Tell your doctor how you feel.",
      "Look up NHS talking therapies.",
      "Call a friend this week.",
    ],
    ask: "Could CBT or counselling help me cope with this?",
    interactive: {
      kind: "scenarios",
      title: "Ways through a hard week",
      scenarios: [
        {
          id: "low",
          situation: "You have felt low and anxious for weeks.",
          options: [{ text: "Speak to your doctor or nurse", best: true }, { text: "Keep it to yourself" }],
          why: "Feeling depressed or anxious could make prostatitis symptoms worse. Speak to your doctor or nurse: there are things that can help.",
        },
        {
          id: "inactive",
          situation: "The pain makes you want to stop doing everything.",
          options: [{ text: "Keep gently active, at your own pace", best: true }, { text: "Rest completely until it goes" }],
          why: "Not being active can make you feel down and may actually increase your pain. This is called the pain cycle.",
        },
        {
          id: "alone",
          situation: "You feel nobody understands what this is like.",
          options: [{ text: "Talk to people who understand", best: true }, { text: "Avoid talking about it" }],
          why: "Talking to other people who understand what you are going through can be helpful, through the Specialist Nurses, a support group or the online community.",
        },
      ],
    },
    sources: [PCUK_TREATMENTS, NHS_PAIN, NHS_CBT, NHS_TALKING, NHS_URGENT_MH, PCUK_SIMON],
    quiz: {
      question: "What is the pain cycle?",
      options: [{ text: "Less activity leads to low mood and more pain", right: true }, { text: "Pain that comes back every month" }, { text: "A cycling exercise for pain" }],
      why: "Not being active can make you feel down and may actually increase your pain. This is called the pain cycle.",
    },
  },
  {
    id: "prost-coming-back",
    kicker: "Living well",
    question: "What if my symptoms come back?",
    hook: "Flare-ups can happen weeks or years later. A plan made with your GP means you know what to do when they do.",
    short: "Chronic prostatitis can come and go, and even after treatment it can return weeks, months or even years later. If a bacterial infection comes back, you will need more antibiotics. Prostate Cancer UK suggests making a flare-up action plan with your GP, and keeping a diary to spot what makes symptoms worse.",
    sections: [
      {
        heading: "Flare-ups can happen",
        paragraphs: [
          "CPPS might come and go, causing occasional episodes of severe pain, sometimes known as flare-ups. Even after treatment, you may still have prostatitis for a long time.",
          "Treatments can help control your symptoms and might even get rid of CPPS completely. But it could return weeks, months or even years later.",
        ],
      },
      {
        heading: "When an infection comes back",
        paragraphs: [
          "With chronic bacterial prostatitis, if the antibiotics do not get rid of all the bacteria, your symptoms could come back, and you will need more antibiotics.",
          "Each episode tends to be caused by the same bacteria, which also cause the urine infections. If you still have symptoms after treatment, your doctor may do another urine test to see if the infection has gone.",
        ],
      },
      {
        heading: "A plan for flare-ups",
        paragraphs: [
          "Speak to your GP about making an action plan, so you know what to do when you have a flare-up. This helps make sure you can get treatment quickly, and a referral to a specialist if you need it.",
          "If your symptoms do not improve with the treatment your GP offers, ask to be referred to a urologist who specialises in managing prostatitis.",
        ],
      },
      {
        heading: "Spotting your triggers",
        paragraphs: [
          "Feeling stressed or anxious can cause a flare-up or make symptoms worse. A diary of food, drink, exercise, stress and symptoms can help you spot what makes things worse, and show your doctor what you are experiencing.",
          "Each man responds to treatments differently. If one thing does not work, you should be able to try something else.",
        ],
      },
      {
        heading: "When it may be something new",
        paragraphs: [
          "Acute bacterial prostatitis comes on very quickly. If you think you might have it and have a high temperature, seek medical advice immediately. If you cannot pee, ask for an urgent GP appointment or get help from NHS 111.",
        ],
      },
    ],
    helps: [
      "Speak to your GP about making an action plan for flare-ups.",
      "Keep a diary of food, drink, exercise, stress and symptoms, and show it to your doctor.",
      "If your symptoms do not improve, ask your GP to refer you to a urologist who specialises in prostatitis.",
      "If one treatment does not work, ask about trying something else.",
      "Seek medical advice immediately if you have symptoms and a high temperature.",
    ],
    tryThisWeek: [
      "Make a flare-up plan with your GP.",
      "Start a symptom diary.",
      "Ask about a specialist referral.",
    ],
    ask: "Can we make a plan for what I should do when a flare-up starts?",
    interactive: {
      kind: "timeline",
      title: "Before, during and after a flare-up",
      steps: [
        { id: "before", when: "Before", title: "Make a plan", points: ["Speak to your GP about an action plan for flare-ups.", "Keep a diary of food, drink, exercise, stress and symptoms."] },
        { id: "start", when: "First signs", title: "Follow your plan", points: ["Use the plan so you can get treatment quickly.", "Try ways to relax, such as deep breathing or a warm bath."] },
        { id: "fever", when: "If you have a high temperature", title: "Get help straight away", points: ["Seek medical advice immediately.", "If you cannot pee, ask for an urgent GP appointment or get help from NHS 111."] },
        { id: "after", when: "Afterwards", title: "Look back", points: ["Check your diary for what made it worse.", "If treatment is not helping, ask about a referral to a urologist."] },
      ],
    },
    sources: [PCUK_WHAT, PCUK_TREATMENTS, NHS_PROSTATITIS, PCUK_SYMPTOMS],
    quiz: {
      question: "What does Prostate Cancer UK suggest making with your GP?",
      options: [{ text: "An action plan for flare-ups", right: true }, { text: "A list of foods to never eat" }, { text: "A plan to stop all medicines" }],
      why: "Speak to your GP about making an action plan, so you know what to do when you have a flare-up.",
    },
  },
];
