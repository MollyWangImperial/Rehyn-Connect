import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Myeloma page's pieces (content/library-conditions/cancer-more.ts, `myeloma`).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Macmillan Cancer
// Support, Cancer Research UK, Blood Cancer UK and Myeloma UK, with Samaritans for the mood answer. The answers
// describe treatment, recovery and living with the effects of myeloma; there are no survival or life-expectancy
// figures, and nothing is a prediction for one person. Emergency guidance (spinal cord compression, infection,
// sepsis) and the mood answer's crisis routes are given exactly as the sources state them. General
// information only; it never replaces what a person's own myeloma team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/myeloma${path}` });
const bcuk = (label: string, path: string): LearnSource => ({ label: `Blood Cancer UK: ${label}`, url: `https://bloodcancer.org.uk/understanding-blood-cancer/${path}` });
const muk = (label: string, path: string): LearnSource => ({ label: `Myeloma UK: ${label}`, url: `https://www.myeloma.org.uk/${path}` });

const NHS_WHAT = nhs("What is myeloma?", "conditions/myeloma/what-is-myeloma/");
const NHS_SYMPTOMS = nhs("Symptoms of myeloma", "conditions/myeloma/symptoms/");
const NHS_CAUSES = nhs("Causes of myeloma", "conditions/myeloma/causes/");
const NHS_TESTS = nhs("Tests and next steps for myeloma", "conditions/myeloma/tests-and-next-steps/");
const NHS_HELP = nhs("Help and support for myeloma", "conditions/myeloma/help-and-support/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_PN = nhs("Peripheral neuropathy", "conditions/peripheral-neuropathy/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const MAC_MYELOMA = mac("Myeloma", "myeloma");
const MAC_TYPES = mac("Types of myeloma and related conditions", "myeloma/types");
const MAC_CAUSES = mac("Risk factors and causes of myeloma", "myeloma/causes");
const MAC_STAGES = mac("Staging of myeloma", "myeloma/stages");
const MAC_TREATMENT = mac("Treatment for myeloma", "myeloma/treatment");
const MAC_REMISSION = mac("Myeloma and response to treatment", "myeloma/remission");
const MAC_LIVING = mac("Living with myeloma", "myeloma/living-with-myeloma");
const MAC_BLOOD_TESTS = mac("Blood tests for myeloma", "diagnostic-tests/blood-tests-for-myeloma");
const MAC_SYMPTOMS = mac("Managing myeloma symptoms", "impacts-of-cancer/managing-myeloma-symptoms");
const MAC_BONES = mac("Bone problems and myeloma", "impacts-of-cancer/myeloma-bone-problems");
const MAC_DRUGS = mac("Cancer drug treatment for myeloma", "treatments-and-drugs/cancer-drug-treatment-for-myeloma");
const MAC_SMOULDERING = mac("Monitoring smouldering myeloma", "treatments-and-drugs/monitoring-smouldering-myeloma");
const MAC_TRANSPLANT = mac("Stem cell and bone marrow transplants", "treatments-and-drugs/stem-cell-and-bone-marrow-transplants");
const MAC_PN = mac("Peripheral neuropathy", "impacts-of-cancer/peripheral-neuropathy");
const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_INFECTION = mac("Infection", "impacts-of-cancer/infection");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");

const CRUK_ABOUT = cruk("Myeloma", "");
const CRUK_SYMPTOMS = cruk("Symptoms of myeloma", "/symptoms");
const CRUK_STAGES = cruk("Stages of myeloma", "/stages");
const CRUK_MONITORING = cruk("Monitoring myeloma", "/treatment/monitoring-myeloma");
const CRUK_FIRST = cruk("First treatment for myeloma", "/treatment/first-treatment-for-myeloma");
const CRUK_RELAPSE = cruk("Treatment when myeloma comes back", "/treatment/treatment-when-myeloma-comes-back");
const CRUK_PROBLEMS = cruk("Treating and preventing problems caused by myeloma", "/treatment/treating-symptoms");
const CRUK_TRANSPLANT = cruk("Stem cell transplant for myeloma", "/treatment/intensive-treatment");
const CRUK_RECOVERY = cruk("Recovery after a stem cell transplant", "/living-with/recovery-after-intensive-treatment");
const CRUK_COPING = cruk("Coping with myeloma", "/living-with/coping");

const BCUK_WHAT = bcuk("What is myeloma?", "myeloma/what-is-myeloma/");
const BCUK_SYMPTOMS = bcuk("Myeloma symptoms", "myeloma/symptoms-diagnosis/myeloma-symptoms/");
const BCUK_TESTS = bcuk("Myeloma tests", "myeloma/symptoms-diagnosis/myeloma-tests-diagnosis/");
const BCUK_SMOULDERING = bcuk("Smouldering myeloma", "myeloma/smouldering-myeloma/");
const BCUK_AIMS = bcuk("Myeloma treatment aims and types", "myeloma/myeloma-treatment-side-effects/myeloma-treatment-aims-types/");
const BCUK_FIRST = bcuk("Myeloma first line treatment", "myeloma/myeloma-treatment-side-effects/myeloma-first-line-treatment/");
const BCUK_RELAPSED = bcuk("Treatment for relapsed myeloma", "myeloma/myeloma-treatment-side-effects/myeloma-relapsed-treatment/");
const BCUK_EFFECTS = bcuk("Managing the effects of myeloma", "myeloma/myeloma-treatment-side-effects/myeloma-managing-symptoms/");
const BCUK_LIVING = bcuk("Living well with myeloma", "myeloma/living-well-with-myeloma/");
const BCUK_INFECTION = bcuk("Infection symptoms and what to do", "treatment/infection-neutropenia-sepsis/infection-symptoms-what-do/");
const BCUK_FATIGUE = bcuk("Fatigue", "treatment/side-effects/fatigue/");

const MUK_WHAT = muk("What is myeloma?", "understanding-myeloma/what-is-myeloma/");
const MUK_DIAGNOSIS = muk("Diagnosis", "understanding-myeloma/diagnosis/");
const MUK_SUPPORTIVE = muk("Supportive care treatments", "understanding-myeloma/treating-myeloma/supportive-care-treatments/");
const MUK_RELAPSED = muk("Treatment for relapsed myeloma", "understanding-myeloma/treating-myeloma/treatment-for-relapsed-myeloma/");
const MUK_REMISSION = muk("I am in remission", "me-and-myeloma/i-am-in-remission/");
const MUK_DIET = muk("Diet and exercise", "me-and-myeloma/living-well/diet-and-exercise/");
const MUK_EMOTIONAL = muk("Emotional and psychological support", "me-and-myeloma/living-well/emotional-psychological-support/");
const MUK_KIDNEY = muk("Myeloma and the kidney Infoguide", "library/myeloma-and-the-kidney-infoguide/");
const MUK_FATIGUE = muk("Fatigue and myeloma Infoguide", "library/fatigue-and-myeloma-infoguide/");
const MUK_ONJ = muk("Osteonecrosis of the jaw Infosheet", "library/osteonecrosis-of-the-jaw-infosheet/");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const myelomaAnswers: LearnArticle[] = [
  {
    id: "mye-what-it-is",
    kicker: "Understanding",
    question: "What is myeloma?",
    hook: "A blood cancer of the plasma cells in the bone marrow. It does not usually form a lump; the cells build up in the marrow and make an abnormal protein.",
    short: "Myeloma is a type of blood cancer that develops from plasma cells in the bone marrow. The abnormal plasma cells crowd the marrow and make an abnormal antibody called paraprotein, which causes most of the problems. It cannot usually be cured, but it can be managed with treatment.",
    sections: [
      {
        heading: "Plasma cells and the bone marrow",
        paragraphs: [
          "Bone marrow, which is found inside bones, is where blood cells are made. Myeloma happens when the bone marrow makes plasma cells that do not work properly.",
          "Plasma cells are a type of white blood cell. They make antibodies, also called immunoglobulins, which travel in the blood to help fight infection.",
        ],
      },
      {
        heading: "What goes wrong",
        paragraphs: [
          "Myeloma develops when there is a change in the DNA of a plasma cell. The abnormal cell divides and multiplies, making more abnormal plasma cells, called myeloma cells.",
          "The myeloma cells fill up the bone marrow. This makes it harder for the marrow to make enough other normal blood cells, which causes some of the symptoms.",
        ],
      },
      {
        heading: "Paraprotein",
        paragraphs: [
          "Myeloma cells usually make an abnormal antibody that does not fight infection well. It is called paraprotein, or M protein.",
          "Most people with myeloma have regular blood tests to check the level of paraprotein. Some types do not make paraprotein and are monitored in other ways.",
          "One in five people with myeloma have light chain myeloma. In this type, the myeloma cells do not make whole paraproteins; they only make the light chain parts.",
        ],
      },
      {
        heading: "Why it is called multiple myeloma",
        paragraphs: [
          "Myeloma does not usually form a lump or tumour. It affects places where there is active bone marrow, such as the spine, skull, pelvis, rib cage and the long bones of the arms and legs.",
          "Because it affects several places in the body, it is sometimes called multiple myeloma. The two names mean the same thing.",
        ],
      },
      {
        heading: "Who gets it, and what comes next",
        paragraphs: [
          "Myeloma is more common as people get older, and slightly more common in men. It is more common in people from Black ethnic groups. Almost everyone with myeloma has had a condition called MGUS first, though it may not have been diagnosed.",
          "Myeloma is not infectious and cannot be passed on to other people.",
          "Myeloma cannot usually be cured, but it can be managed with treatment. There may be long periods when it is under control.",
        ],
      },
    ],
    helps: [
      "Ask your healthcare team to explain things again if you need them to.",
      "Make a list of questions before your appointment, and take someone with you.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if you want to talk.",
      "Call the Myeloma UK helpline on 0800 980 3332 for information and support.",
      "Call Blood Cancer UK on 0808 2080 888 to ask a blood cancer nurse.",
    ],
    tryThisWeek: [
      "Write a list of questions.",
      "Ask your team to explain again.",
      "Save a support line number.",
    ],
    ask: "Which type of myeloma do I have, and how will it be monitored?",
    interactive: {
      kind: "flip-cards",
      title: "The words you will hear",
      intro: "Turn a card to see what each word means.",
      cards: [
        { id: "plasma-cell", front: "Plasma cell", when: "Where myeloma starts", back: "A type of white blood cell made in the bone marrow. It makes antibodies to help fight infection." },
        { id: "bone-marrow", front: "Bone marrow", when: "Inside the bones", back: "Where blood cells are made. Myeloma cells fill it up, so it is harder to make enough normal blood cells." },
        { id: "paraprotein", front: "Paraprotein", when: "Checked in blood tests", back: "The abnormal antibody myeloma cells make. It does not fight infection well. Also called M protein." },
        { id: "light-chains", front: "Light chains", when: "Part of an antibody", back: "Shorter protein chains, kappa or lambda. In light chain myeloma, the cells only make these." },
        { id: "mgus", front: "MGUS", when: "Often comes first", back: "A non-cancerous condition where the body makes a paraprotein. Almost everyone with myeloma has had it first." },
      ],
    },
    sources: [NHS_WHAT, MAC_MYELOMA, MAC_TYPES, CRUK_ABOUT, BCUK_WHAT, MUK_WHAT, NHS_CAUSES, MAC_CAUSES, CRUK_COPING, NHS_HELP, BCUK_LIVING],
    quiz: {
      question: "What is paraprotein?",
      options: [{ text: "The abnormal antibody myeloma cells make", right: true }, { text: "A type of bone" }, { text: "A vitamin the body lacks" }],
      why: "Myeloma cells usually make an abnormal antibody that does not fight infection well. It is called paraprotein, or M protein.",
    },
  },
  {
    id: "mye-symptoms",
    kicker: "Symptoms",
    question: "How does myeloma affect the bones, kidneys and blood?",
    hook: "Doctors sum up the main effects as CRAB: high calcium, renal (kidney) problems, anaemia and bone damage. Infections are more likely too, and a few signs need help at once.",
    short: "Most problems in myeloma come from myeloma cells building up in the bone marrow and from the paraprotein. Doctors often call the main effects CRAB: raised calcium, renal (kidney) damage, anaemia and bone damage. Myeloma also makes infections more likely, and some symptoms, such as signs of spinal cord compression, need help straight away.",
    sections: [
      {
        heading: "CRAB",
        paragraphs: [
          "Myeloma symptoms are often called CRAB changes, after the four main problems: calcium levels in the blood being too high, renal (kidney) damage, anaemia and bone damage.",
          "Not everyone has symptoms, and some people have only mild ones. Myeloma is sometimes found during a routine blood test.",
        ],
      },
      {
        heading: "Bones",
        paragraphs: [
          "Bone pain is the most common symptom of myeloma. It is often felt in the back, ribs or hips, and people mostly describe it as dull or aching.",
          "Myeloma cells can make areas of bone thinner and weaker, so bones may break more easily. Bone damage can also release calcium into the blood, which can make you feel sick, thirsty, drowsy or confused, and pass urine more often.",
        ],
      },
      {
        heading: "Blood",
        paragraphs: [
          "Myeloma cells crowd the bone marrow, so fewer normal blood cells are made. A low number of red blood cells is called anaemia, and it can make you feel tired and breathless.",
          "Myeloma cells make antibodies that do not work properly, so you may get infections more often, and they may last longer. Bruising and bleeding more easily can happen too, but this is quite rare.",
        ],
      },
      {
        heading: "Kidneys",
        paragraphs: [
          "The paraprotein and light chains made in myeloma can damage the kidneys, and so can high calcium. Kidney problems can cause passing less urine than usual, tiredness, a poor appetite, feeling sick and swollen ankles.",
          "Not everyone has symptoms, but you will have regular blood tests to check for kidney problems.",
        ],
      },
      {
        heading: "When to get help straight away",
        paragraphs: [
          "Call 999 if you suddenly lose feeling in your arms or legs or cannot walk or stand, suddenly feel confused, or suddenly cannot control when you poo or pee. These could be signs of spinal cord compression, which needs to be treated immediately. Do not drive yourself to A&E.",
          "Spinal cord compression can also cause back or neck pain that is new or suddenly gets worse, or a band of pain around the chest or tummy. Do not wait for further symptoms to develop.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you have difficulty breathing. Tell your hospital team straight away about any new symptoms or signs of infection.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or nurse about any new symptom, a symptom getting worse, or one not getting better with treatment.",
      "Call 999 if you suddenly lose feeling in your arms or legs, cannot walk or stand, or cannot control your bladder or bowels.",
      "Get medical advice straight away if you think you have an infection, even if the symptoms seem mild.",
      "Check with your team before taking ibuprofen, as it can harm the kidneys.",
      "Ask your hospital team or GP which over-the-counter medicines are safe to use.",
    ],
    tryThisWeek: [
      "Note any new or worse symptoms.",
      "Learn the 999 warning signs.",
      "Ask which medicines are safe.",
    ],
    ask: "Which of the CRAB problems affect me, and what should I watch for?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your team",
      intro: "Tick any you have noticed. Tell your hospital team straight away about anything new.",
      signs: [
        "Bone pain in my back, ribs or hips",
        "Feeling very thirsty or passing urine more often",
        "Feeling sick or constipated",
        "Feeling tired or breathless",
        "Passing less urine than usual",
        "Swollen ankles",
        "Infections that keep coming back",
        "Bruising or bleeding more easily",
      ],
      after: "Call 999 if you suddenly lose feeling in your arms or legs, cannot walk or stand, feel confused, or cannot control when you poo or pee.",
      copyHeading: "Symptoms to tell my myeloma team",
    },
    sources: [BCUK_SYMPTOMS, MAC_STAGES, MAC_SYMPTOMS, MAC_MYELOMA, MAC_BONES, CRUK_SYMPTOMS, CRUK_ABOUT, BCUK_WHAT, NHS_SYMPTOMS, MAC_TREATMENT],
    quiz: {
      question: "What does the B in CRAB stand for?",
      options: [{ text: "Bone damage", right: true }, { text: "Blood pressure" }, { text: "Breathing" }],
      why: "Myeloma symptoms are often called CRAB changes, after the four main problems: calcium levels in the blood being too high, renal (kidney) damage, anaemia and bone damage.",
    },
  },
  {
    id: "mye-tests",
    kicker: "Tests",
    question: "Which tests will I have, and what is the paraprotein level?",
    hook: "No single test confirms myeloma. Blood and urine tests, a bone marrow biopsy and scans build the picture together, and some are repeated for years to keep watch.",
    short: "There is no single test for myeloma, so doctors use a combination: blood and urine tests, a bone marrow biopsy and scans. The level of paraprotein or light chains in your blood shows how active the myeloma is, and it is checked regularly. Doctors look at the trend over several results, not a single one.",
    sections: [
      {
        heading: "No single test",
        paragraphs: [
          "There is no single test that can tell you if you have myeloma, so doctors use a combination of test results to confirm it. You will usually see a haematologist, a doctor who specialises in blood conditions.",
          "Some people learn they have myeloma by chance, after a blood test for another reason.",
        ],
      },
      {
        heading: "Blood and urine tests",
        paragraphs: [
          "Blood tests measure the paraprotein, the abnormal antibody, and the light chains in your blood. Other blood tests check your blood cell levels, how well your kidneys are working and your calcium level.",
          "You may be asked for a urine sample, to check for paraprotein or light chains and for signs of kidney damage. Sometimes you collect your urine over 24 hours.",
        ],
      },
      {
        heading: "Bone marrow and scans",
        paragraphs: [
          "A bone marrow biopsy takes small samples from the back of the pelvis, after a local anaesthetic to numb the area. The samples show whether there are myeloma cells and, if so, how many.",
          "You should have a CT, PET-CT or MRI scan to look for signs of bone damage. Genetic tests on the bone marrow sample, such as a FISH test, can help doctors understand how the myeloma may behave.",
        ],
      },
      {
        heading: "Watching the paraprotein",
        paragraphs: [
          "After diagnosis, you will have regular tests to monitor the myeloma, whether or not you need treatment yet. The level of paraprotein or light chains can be used as a measure of how active the myeloma is, although not in every person.",
          "Doctors look at the results of several tests rather than a single result. They are looking for a trend over time, so one high level does not necessarily mean the myeloma has come back.",
          "In non-secretory myeloma, the cells make no paraprotein or light chains. Doctors then monitor it using bone marrow samples and scans.",
        ],
      },
      {
        heading: "Waiting for results",
        paragraphs: [
          "You should get your test results in 1 to 2 weeks. You can call the hospital or your GP if you are worried.",
          "Waiting for test results can be a difficult and stressful time. It may help to talk things through with your healthcare team, or with a close friend or family member.",
        ],
      },
    ],
    helps: [
      "Ask your hospital team to explain what tests you are having and what they are for.",
      "Write down questions before your appointments, and list any side effects or new symptoms.",
      "Take a friend or relative with you to help take notes.",
      "Call the hospital or your GP if you are worried while waiting for results.",
      "Call the Myeloma Infoline on 0800 980 3332 for support while you wait.",
    ],
    tryThisWeek: [
      "Ask what each test is for.",
      "Write your questions down.",
      "Bring someone to take notes.",
    ],
    ask: "What is my paraprotein or light chain level, and how often will it be checked?",
    interactive: {
      kind: "flip-cards",
      title: "Tests you may have",
      intro: "Turn a card to see what each test looks for.",
      cards: [
        { id: "fbc", front: "Full blood count", when: "At diagnosis and regularly", back: "Measures red cells, white cells and platelets. These can be low in people with myeloma." },
        { id: "paraprotein", front: "Paraprotein tests", when: "To diagnose and monitor", back: "Measure the amount of abnormal antibody in your blood, and find out what type it is." },
        { id: "light-chains", front: "Light chain test", when: "To diagnose and monitor", back: "Measures the kappa and lambda light chains in your blood. Light chains in the blood are common in myeloma." },
        { id: "urine", front: "Urine test", when: "Usually at diagnosis", back: "Checks for paraprotein or light chains in your urine, and for signs of kidney damage." },
        { id: "biopsy", front: "Bone marrow biopsy", when: "To confirm the diagnosis", back: "Small samples from the back of the pelvis show if there are myeloma cells and, if so, how many." },
        { id: "scans", front: "Scans", when: "To look at the bones", back: "A CT, PET-CT or MRI scan of the whole body looks for signs of bone damage." },
      ],
    },
    sources: [MUK_DIAGNOSIS, MAC_MYELOMA, BCUK_TESTS, MAC_BLOOD_TESTS, CRUK_MONITORING, BCUK_WHAT, NHS_TESTS],
    quiz: {
      question: "Why do doctors look at several paraprotein results, not just one?",
      options: [{ text: "They are looking for a trend over time", right: true }, { text: "One test is never accurate" }, { text: "To decide what you should eat" }],
      why: "They are looking for a trend over time, so one high level does not necessarily mean the myeloma has come back.",
    },
  },
  {
    id: "mye-stages",
    kicker: "Stages",
    question: "What do smouldering, active, remission and relapse mean?",
    hook: "Myeloma tends to move in phases: sometimes quiet and only watched, sometimes active and treated, then often a settled spell before it needs treating again.",
    short: "Smouldering myeloma causes no symptoms and is usually watched with regular tests rather than treated. Active myeloma causes symptoms and is treated, aiming for remission, when myeloma cannot be found or is under control. Myeloma usually comes back at some point, called a relapse, and there are usually treatment options again.",
    sections: [
      {
        heading: "Smouldering myeloma",
        paragraphs: [
          "Myeloma with no symptoms is called smouldering or asymptomatic myeloma. The plasma cells show abnormal changes on blood tests, but they usually do not cause symptoms or damage to organs.",
          "You may not need treatment straight away. Instead, your team may suggest active monitoring, with blood samples and some other tests every few months.",
          "If your doctor recommends active monitoring, it is because it is best for you and the type of myeloma you have. Waiting means you can avoid treatment side effects for as long as possible.",
        ],
      },
      {
        heading: "Active myeloma",
        paragraphs: [
          "Active myeloma means you have symptoms, or are at a high risk of developing symptoms. You will usually start treatment.",
          "The aim of treatment is to get the myeloma into remission and to manage symptoms.",
        ],
      },
      {
        heading: "Stage and the CRAB checks",
        paragraphs: [
          "The International Staging System uses the results of blood tests to give 3 stages. Stage 1 is the earliest stage and stage 3 is more advanced.",
          "Doctors also look at the effect the myeloma is having on the body, using the CRAB checks: calcium, renal (kidney) problems, anaemia and bone damage.",
        ],
      },
      {
        heading: "Remission",
        paragraphs: [
          "Treatment aims to get myeloma under control, called remission. If myeloma cannot be detected with tests, this is called complete remission. A partial remission, or plateau, means there may still be signs of myeloma, but it is under control at a steady level.",
          "There may be long periods when you do not need any more treatment and have no myeloma symptoms. Many people remain well for some time; it may be months or years before the myeloma becomes active again.",
        ],
      },
      {
        heading: "Relapse",
        paragraphs: [
          "After a time, myeloma usually comes back and needs further treatment. This is called a relapse, and it can happen a number of times.",
          "Signs of relapse include a rise in paraprotein or free light chain levels, or myeloma symptoms coming back. There are usually treatment options when you relapse.",
          "The time between remission and relapse is different for everyone. Living with that uncertainty is hard, and talking to family and friends, specialist nurses, counsellors or support groups helps many people.",
        ],
      },
    ],
    helps: [
      "If you are on active monitoring, make sure you understand why it is recommended.",
      "Contact your hospital team if you notice anything different between check-ups.",
      "Keep a diary of any symptoms, so you remember to tell your hospital team.",
      "Use your time to do things you enjoy, and to get as fit and healthy as you can.",
      "Share your feelings with family and friends, a support group or a journal.",
    ],
    tryThisWeek: [
      "Start a symptom diary.",
      "Ask why your plan suits you.",
      "Do one thing you enjoy.",
    ],
    ask: "Is my myeloma smouldering or active, and what would make you start or change treatment?",
    interactive: {
      kind: "timeline",
      title: "The phases of myeloma",
      steps: [
        { id: "smouldering", when: "No symptoms", title: "Smouldering", points: ["You usually have regular tests instead of treatment.", "Blood samples and other tests every few months."] },
        { id: "active", when: "With symptoms", title: "Active", points: ["You will usually start treatment.", "Doctors check calcium, kidneys, anaemia and bones."] },
        { id: "remission", when: "After treatment", title: "Remission or plateau", points: ["Myeloma cannot be found, or is at a steady level.", "It may be months or years before it is active again."] },
        { id: "relapse", when: "At some point", title: "Relapse", points: ["Paraprotein rises or symptoms come back.", "There are usually treatment options again."] },
      ],
    },
    sources: [MAC_SMOULDERING, BCUK_SMOULDERING, MAC_TREATMENT, MAC_STAGES, CRUK_STAGES, MAC_MYELOMA, MUK_REMISSION, CRUK_RELAPSE, MAC_REMISSION],
    quiz: {
      question: "What usually happens with smouldering myeloma?",
      options: [{ text: "Regular tests instead of treatment", right: true }, { text: "Treatment starts at once" }, { text: "It is never checked again" }],
      why: "You may not need treatment straight away. Instead, your team may suggest active monitoring, with blood samples and some other tests every few months.",
    },
  },
  {
    id: "mye-treatments",
    kicker: "Treatment",
    question: "Why is myeloma treated with combinations of drugs?",
    hook: "Drugs that work in different ways are used together: usually a targeted drug and a steroid, sometimes with chemotherapy. The combinations are often known by the drugs' initials.",
    short: "Myeloma is usually treated with a combination of cancer drugs, often a targeted drug and a steroid, sometimes with chemotherapy. Treatment comes in cycles and stages, aiming for remission and then keeping it for as long as possible. Your team will decide on a combination with you, explain the side effects and give you 24-hour numbers to call.",
    sections: [
      {
        heading: "Why combinations",
        paragraphs: [
          "Myeloma is usually treated with a combination of different cancer drugs. This often includes targeted therapy drugs and a steroid, and you may also have these drugs with chemotherapy.",
          "You will normally have a combination of drugs that work in different ways to kill the myeloma cells. Combinations are often named after the initials of the drugs used.",
        ],
      },
      {
        heading: "The types of drug",
        paragraphs: [
          "Targeted drugs affect the way myeloma cells grow, and some help the immune system destroy them. For first treatment, the most common are bortezomib, daratumumab, and thalidomide or lenalidomide.",
          "Chemotherapy drugs used for myeloma include cyclophosphamide and melphalan. The two most commonly used steroids are dexamethasone and prednisolone, which help kill myeloma cells and work together with other drugs.",
        ],
      },
      {
        heading: "How treatment is given",
        paragraphs: [
          "You have treatment in cycles, and each cycle usually lasts for between 21 and 35 days. Most people have between 4 and 6 cycles of treatment.",
          "Many myeloma drugs are tablets or capsules you take at home. Others are an injection under the skin, or a drip into a vein, usually at a day unit or clinic.",
        ],
      },
      {
        heading: "Stages of first treatment",
        paragraphs: [
          "First treatment usually comes in stages. Induction aims to get you into remission, consolidation may be a stem cell transplant if you are well enough, and maintenance aims to keep you in remission for longer.",
          "When myeloma comes back, you usually have another combination. The choice depends on how long you were in remission, the treatment you had before, how well it worked, your general health and your own wishes.",
        ],
      },
      {
        heading: "Side effects and who to call",
        paragraphs: [
          "Different drugs cause different side effects, and you are very unlikely to get all of them. Side effects usually disappear gradually when your treatment finishes.",
          "Your cancer team will give you 24-hour contact numbers for the hospital. If you feel unwell or need advice, you can call any time, day or night.",
          "Thalidomide, lenalidomide and pomalidomide can increase the risk of a blood clot, so you will be given drugs to thin your blood. They can also cause birth defects, so your team will give you extra information about contraception.",
        ],
      },
    ],
    helps: [
      "Save your 24-hour hospital numbers in your phone or keep them somewhere safe.",
      "Tell your cancer doctor or specialist nurse about any side effects while you are having treatment.",
      "Write a list of benefits and disadvantages for each treatment option.",
      "Speak to your haematologist before taking any supplement or herbal remedy they have not prescribed.",
      "Follow your team's advice about contraception during treatment.",
    ],
    tryThisWeek: [
      "Save the 24-hour number.",
      "Note any side effects.",
      "List pros and cons of options.",
    ],
    ask: "What combination are you recommending, how is it given, and which side effects should I report straight away?",
    interactive: {
      kind: "flip-cards",
      title: "The drugs in a combination",
      intro: "Turn a card to see what each kind of drug does.",
      cards: [
        { id: "targeted", front: "Targeted drugs", when: "In most combinations", back: "Affect the way myeloma cells grow; some help the immune system destroy them. Bortezomib and daratumumab are examples." },
        { id: "immunomodulators", front: "Thalidomide, lenalidomide, pomalidomide", when: "First treatment or later", back: "Stop myeloma cells growing and help the immune system attack them. You will be given a blood thinner too." },
        { id: "steroids", front: "Steroids", when: "With other drugs", back: "Dexamethasone or prednisolone help kill myeloma cells and work together with other drugs." },
        { id: "chemotherapy", front: "Chemotherapy", when: "Sometimes in the mix", back: "Drugs such as cyclophosphamide and melphalan stop myeloma cells dividing and growing." },
        { id: "bispecific", front: "Bispecific antibodies", when: "Later lines of treatment", back: "Teclistamab, elranatamab and talquetamab bind to myeloma cells and immune cells at the same time." },
      ],
    },
    sources: [MAC_DRUGS, BCUK_AIMS, CRUK_FIRST, BCUK_FIRST, CRUK_RELAPSE, MAC_TREATMENT, MUK_SUPPORTIVE, BCUK_RELAPSED],
    quiz: {
      question: "How is myeloma usually treated?",
      options: [{ text: "With a combination of different cancer drugs", right: true }, { text: "With one drug on its own" }, { text: "With surgery to remove it" }],
      why: "Myeloma is usually treated with a combination of different cancer drugs.",
    },
  },
  {
    id: "mye-transplant",
    kicker: "Transplant",
    question: "What happens in a stem cell transplant for myeloma?",
    hook: "For myeloma it usually uses your own stem cells: collected and stored, then given back after a high dose of chemotherapy to help your bone marrow recover.",
    short: "A stem cell transplant allows you to have high doses of chemotherapy to kill myeloma cells. For myeloma you usually have your own stem cells, collected beforehand and given back through a drip afterwards so your bone marrow can recover. It is an intensive treatment, so it is only for people well enough, and it may be several months before you feel your strength is back.",
    sections: [
      {
        heading: "Why a transplant",
        paragraphs: [
          "A stem cell transplant allows you to have high doses of chemotherapy. The chemotherapy kills the myeloma cells, but it also damages the normal bone marrow cells.",
          "For myeloma, you usually have a transplant using your own stem cells, called an autologous transplant. After the chemotherapy, they are given back through a drip, travel to your bone marrow and start making new healthy blood cells.",
          "Intensive treatment may improve the chances of controlling the myeloma for a longer time.",
        ],
      },
      {
        heading: "Who can have one",
        paragraphs: [
          "A transplant is a very intensive treatment and can cause severe side effects, so you need to be well enough. It will depend on your general health and fitness.",
          "A transplant is not right for everyone. It might not be safe or helpful enough for you, or you may simply not want one. If you are not having a transplant, you continue with drug treatment.",
        ],
      },
      {
        heading: "The steps",
        paragraphs: [
          "First you have induction treatment, usually for 4 to 6 months, to get rid of as many myeloma cells as possible.",
          "Next your stem cells are collected and stored. You have daily injections of growth factor for between 5 and 10 days, then a machine filters the stem cells out of your blood, which takes 3 or 4 hours.",
          "Then you have high-dose chemotherapy, usually a drug called melphalan. Around a day later, your stem cells are given back through a drip, which is like having a blood transfusion.",
        ],
      },
      {
        heading: "In hospital",
        paragraphs: [
          "The high-dose treatment lowers your blood cell counts, which increases the risk of infection, bleeding, bruising and anaemia. You may also have sickness, a sore mouth, tiredness and hair loss.",
          "You may stay in hospital until your blood cells have recovered enough, which may take 3 to 4 weeks. Some people become outpatients straight after the transplant and go to the hospital daily for blood tests and treatment.",
        ],
      },
      {
        heading: "Recovery at home",
        paragraphs: [
          "It may be several months before you feel you have your strength back. Take things slowly when you get home, and get plenty of rest.",
          "It takes time for your immune system to work properly again, so you are at higher risk of infections. Do not stop taking medicine to prevent infection without checking with your doctor, and you will need your childhood vaccines again.",
          "During your first few weeks at home, avoid crowded places and anyone who has been in contact with an infectious illness. Doctors usually advise against going abroad for the first 6 months.",
        ],
      },
    ],
    helps: [
      "Ask your specialist to talk through whether a transplant is suitable for you.",
      "Contact your nurses and doctor with any worries or questions once you are home.",
      "Do not stop medicines that prevent infection without checking with your doctor.",
      "Avoid crowded places and people with infections in your first few weeks at home.",
      "Go back to work part-time at first, until you have some of your strength back.",
      "Carry the card you are given saying any blood you need must be irradiated.",
    ],
    tryThisWeek: [
      "Ask if a transplant suits you.",
      "Keep taking infection medicines.",
      "Plan a part-time return to work.",
    ],
    ask: "Would a stem cell transplant be right for me, and what would recovery involve?",
    interactive: {
      kind: "timeline",
      title: "The steps of a transplant",
      steps: [
        { id: "induction", when: "4 to 6 months", title: "Induction", points: ["A combination of drugs to get rid of as many myeloma cells as possible."] },
        { id: "collection", when: "After induction", title: "Collecting stem cells", points: ["Daily growth factor injections for 5 to 10 days.", "A machine filters stem cells out of your blood."] },
        { id: "high-dose", when: "Transplant", title: "High-dose chemotherapy", points: ["Usually melphalan, through a central line.", "Your stem cells go back in around a day later."] },
        { id: "hospital", when: "3 to 4 weeks", title: "Recovery in hospital", points: ["Low blood counts mean a risk of infection.", "You go home when your blood cells have recovered enough."] },
        { id: "home", when: "The months after", title: "Recovery at home", points: ["It may be several months before your strength is back.", "Doctors usually advise against going abroad for 6 months."] },
      ],
    },
    sources: [CRUK_TRANSPLANT, MAC_DRUGS, BCUK_FIRST, CRUK_FIRST, CRUK_RECOVERY, BCUK_EFFECTS, MAC_TRANSPLANT],
    quiz: {
      question: "Whose stem cells are usually used in a transplant for myeloma?",
      options: [{ text: "Your own", right: true }, { text: "A brother's or sister's" }, { text: "An unrelated donor's" }],
      why: "For myeloma, you usually have a transplant using your own stem cells, called an autologous transplant.",
    },
  },
  {
    id: "mye-bones",
    kicker: "Bones",
    question: "How can I protect my bones and manage bone pain?",
    hook: "Bone-strengthening drugs, pain relief that is safe with myeloma, gentle movement and good dental care all help. Some back symptoms need help at once.",
    short: "Myeloma can make bones thinner and weaker, causing pain and breaks. A bone-strengthening drug called a bisphosphonate is usually offered from diagnosis, alongside painkillers, radiotherapy or surgery if needed. Tell your team about pain early, look after your teeth, and know the signs of spinal cord compression.",
    sections: [
      {
        heading: "Why bones are affected",
        paragraphs: [
          "Healthy bones are constantly renewing themselves. Myeloma cells interrupt this process, making the bones weak and easy to break, and you may also get bone pain.",
          "Bone pain is the most common symptom of myeloma. Pain from bone damage may continue even if the myeloma is in remission.",
        ],
      },
      {
        heading: "Bisphosphonates",
        paragraphs: [
          "Your doctor should offer treatment to help protect your bones when you are first diagnosed. This will usually be a bone-strengthening drug called a bisphosphonate.",
          "Bisphosphonates can help strengthen weakened bones, reduce pain and lower high calcium levels. Zoledronic acid and pamidronate are usually given as a drip every 4 weeks, and sodium clodronate is taken by mouth.",
          "This treatment can occasionally affect the jaw, so see a dentist before you start and regularly while you have it. Your team should also talk to you about calcium and vitamin D supplements.",
        ],
      },
      {
        heading: "Managing pain",
        paragraphs: [
          "Always tell your doctor or nurse about any bone pain, including any new pain. Do not wait until the pain is bad, as this can be harder to treat.",
          "Treatments may include painkillers, radiotherapy to a painful area, and surgery such as vertebroplasty or kyphoplasty to repair damaged bones in the spine. A pain diary of when you have pain and what makes it better or worse can help your team plan.",
          "Anti-inflammatory drugs such as ibuprofen can cause kidney damage in people with myeloma. Check with your cancer doctor or specialist nurse before taking them.",
        ],
      },
      {
        heading: "Moving safely",
        paragraphs: [
          "A physiotherapist can teach you muscle-strengthening exercises and help you start moving around again safely. Avoid heavy lifting or any activities that may put a strain on your spine or other bones.",
          "Avoid strenuous exercise like weightlifting or contact sports. Gentle exercise such as walking, swimming and tai chi is good for overall health and muscle strength, and weight-bearing exercise can help your bones, so ask your hospital team or GP about suitable exercises.",
        ],
      },
      {
        heading: "Spinal cord compression",
        paragraphs: [
          "If myeloma weakens the bones of the spine, they can press on the spinal cord. Signs include back or neck pain that is new or suddenly gets worse, new numbness or weakness in the arms or legs, feeling unsteady, and problems passing urine or controlling your bowels.",
          "Get medical advice immediately. Contact the hospital team where you have cancer treatment, and if you cannot reach anyone, go to A&E or contact your GP. Tell them you have cancer and may have spinal cord compression, and do not wait for further symptoms to develop.",
          "The NHS says to call 999 if you suddenly lose feeling in your arms or legs, cannot walk or stand, or suddenly cannot control when you poo or pee.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or nurse about any bone pain, including any new pain.",
      "Keep a pain diary of when you have pain and what makes it better or worse.",
      "See a dentist before starting a bisphosphonate, and regularly while you have it.",
      "Check with your team before taking ibuprofen or other anti-inflammatory painkillers.",
      "Avoid heavy lifting, and ask a physiotherapist about safe exercises.",
      "Get medical advice immediately for new back pain with numbness, weakness or bladder or bowel problems.",
    ],
    tryThisWeek: [
      "Start a pain diary.",
      "Book a dental check-up.",
      "Ask about safe exercises.",
    ],
    ask: "How can I protect my bones, and which painkillers are safe for me?",
    interactive: {
      kind: "signs",
      title: "Signs of spinal cord compression",
      intro: "Tick any you have. If you have any of these, get medical advice immediately.",
      signs: [
        "Back or neck pain that is new or worse",
        "A band of pain around my chest or tummy",
        "New numbness or pins and needles",
        "Weak arms or hands, or trouble gripping",
        "Feeling unsteady on my feet",
        "Weakness in my legs",
        "Problems passing urine",
        "Problems with bowel control",
      ],
      after: "Contact your hospital team straight away, or go to A&E if you cannot reach anyone. Call 999 if you suddenly cannot walk or stand.",
      copyHeading: "Spine symptoms to report now",
    },
    sources: [BCUK_EFFECTS, MAC_BONES, CRUK_PROBLEMS, MUK_SUPPORTIVE, MUK_ONJ, MAC_LIVING, MUK_DIET, NHS_SYMPTOMS, BCUK_SYMPTOMS],
    quiz: {
      question: "What should you do before starting a bisphosphonate?",
      options: [{ text: "See a dentist", right: true }, { text: "Stop all painkillers" }, { text: "Start weightlifting" }],
      why: "This treatment can occasionally affect the jaw, so see a dentist before you start and regularly while you have it.",
    },
  },
  {
    id: "mye-infections",
    kicker: "Infections",
    question: "Why am I more likely to get infections, and which vaccines help?",
    hook: "Myeloma and its treatment weaken the immune system, so infections can turn serious quickly. Knowing the signs, the number to call and your vaccines makes a real difference.",
    short: "Myeloma stops the immune system working well, and treatment adds to the risk, so an infection can become serious very quickly. Get medical advice straight away, even if symptoms seem mild: during treatment, call the emergency number you were given, and if you cannot get through, call 999 or get someone to drive you to A&E. Vaccines such as flu, covid-19, pneumococcal and shingles help protect you, but live vaccines are not safe.",
    sections: [
      {
        heading: "Why infections matter",
        paragraphs: [
          "Myeloma causes your immune system to work less well, so you are more likely to get infections that last longer. Treatments for myeloma generally increase your risk of infection too.",
          "An infection can get very serious very quickly when you have myeloma. It could lead to a life-threatening condition called sepsis.",
        ],
      },
      {
        heading: "Signs of infection",
        paragraphs: [
          "Signs include a temperature that is higher or lower than normal, feeling cold and shivery, a sore throat, a cough, diarrhoea, burning or stinging when you pass urine, new pain anywhere, or generally not feeling well.",
          "Most treating teams advise you to get advice if your temperature reaches 37 and a half degrees or goes below 36 degrees. But you could still have an infection even if you do not have a fever, and paracetamol, steroids and aspirin can mask one.",
        ],
      },
      {
        heading: "What to do",
        paragraphs: [
          "Get medical advice straight away, and don't wait. If you are having treatment, call the emergency contact number you have been given. If you can't get through, call 999 or get someone to drive you to A&E.",
          "If you are not having treatment, call your GP or hospital team. If you can't speak to them, call 111.",
          "Call 999 or go to A&E right away if you have signs of sepsis: slurred speech or confusion, extreme shivering or muscle pain, passing no urine in a day, severe breathlessness, feeling like you are going to die, or mottled or discoloured skin.",
        ],
      },
      {
        heading: "Vaccines",
        paragraphs: [
          "Your doctor will let you know when it is best to have your vaccines. They should include flu, covid-19 and pneumococcal vaccines, two doses of the Shingrix shingles vaccine, and the RSV vaccine if you are over 75.",
          "You should not have any live vaccines, such as MMR, as they are not safe for people with myeloma. If you have a stem cell transplant, you will need to have your childhood vaccines again.",
          "It is a good idea for anyone you live with to have the flu vaccine too.",
        ],
      },
      {
        heading: "Other protection",
        paragraphs: [
          "Your doctor may give you antibiotics to help prevent infections when you are on treatment or after a transplant, and antiviral tablets to stop you getting shingles. If you are getting a lot of infections, you may have regular immunoglobulin treatment, as a drip into a vein or an injection under the skin.",
          "Wash your hands regularly, especially after using the toilet and before cooking or eating. Stay away from people with sore throats, colds, flu, diarrhoea, vomiting or infections.",
        ],
      },
    ],
    helps: [
      "Write your emergency contact number somewhere you can easily find it.",
      "Get medical advice straight away if you think you have an infection, even if the symptoms seem mild.",
      "Ask your hospital team which vaccinations to have and when.",
      "Ask anyone you live with to have the flu vaccine too.",
      "Wash your hands regularly, and stay away from people with infections.",
      "Tell emergency staff if you take paracetamol, steroids or aspirin, as they can mask a fever.",
    ],
    tryThisWeek: [
      "Write down your emergency number.",
      "Ask which vaccines you need.",
      "Ask your household about flu jabs.",
    ],
    ask: "Which number do I call if I get a temperature, and which vaccines should I have?",
    interactive: {
      kind: "scenarios",
      title: "When you might have an infection",
      scenarios: [
        {
          id: "temperature",
          situation: "During treatment, your temperature reaches 37 and a half degrees.",
          options: [{ text: "Call the emergency number you were given", best: true }, { text: "Wait to see if it settles overnight" }],
          why: "Get medical advice straight away, and don't wait. If you are having treatment, call the emergency contact number you have been given.",
        },
        {
          id: "no-answer",
          situation: "You call your emergency number but can't get through.",
          options: [{ text: "Call 999 or get someone to drive you to A&E", best: true }, { text: "Try again tomorrow" }],
          why: "If you can't get through, call 999 or get someone to drive you to A&E.",
        },
        {
          id: "off-treatment",
          situation: "You are not on treatment, and you have a sore throat and feel unwell.",
          options: [{ text: "Call your GP or hospital team, or 111", best: true }, { text: "Ignore it, as it seems mild" }],
          why: "If you are not having treatment, call your GP or hospital team. If you can't speak to them, call 111.",
        },
        {
          id: "normal-temperature",
          situation: "Your temperature is normal, but you have the shivers and don't feel right.",
          options: [{ text: "Get medical advice anyway", best: true }, { text: "Trust the thermometer and wait" }],
          why: "You could still have an infection even if you do not have a fever. If you don't feel right, don't wait to get help.",
        },
      ],
    },
    sources: [BCUK_EFFECTS, BCUK_INFECTION, CRUK_PROBLEMS, NHS_SEPSIS, MAC_SYMPTOMS, MAC_INFECTION, BCUK_LIVING],
    quiz: {
      question: "During treatment, what should you do first if you think you have an infection?",
      options: [{ text: "Call the emergency contact number you were given", right: true }, { text: "Wait until your next appointment" }, { text: "Take ibuprofen and rest" }],
      why: "If you are having treatment, call the emergency contact number you have been given. If you can't get through, call 999 or get someone to drive you to A&E.",
    },
  },
  {
    id: "mye-kidneys",
    kicker: "Kidneys",
    question: "How can I look after my kidneys with myeloma?",
    hook: "Paraprotein, light chains and high calcium can all strain the kidneys. Plenty of fluids, care with painkillers and regular blood tests help protect them.",
    short: "Kidney problems are common in myeloma, because paraprotein and light chains can block the kidneys' small tubes and high calcium can damage them. Drinking plenty of fluids, checking with your team before taking painkillers such as ibuprofen, and regular blood tests all help. Treating the myeloma itself is the main treatment for kidney damage.",
    sections: [
      {
        heading: "Why the kidneys are affected",
        paragraphs: [
          "Paraprotein and light chains made by myeloma cells can block the small tubes in the kidneys that filter urine. This is the most common way myeloma damages the kidneys.",
          "High levels of calcium released from damaged bones can also harm the kidneys, and so can kidney infections and some treatments.",
          "Up to one in every five people have kidney damage when they are first diagnosed with myeloma.",
        ],
      },
      {
        heading: "Signs to look out for",
        paragraphs: [
          "You might not have any symptoms. If you do, they can include thirst, tiredness, a poor appetite, feeling sick, passing much more or much less urine than usual, swollen ankles and breathing problems.",
          "Your team will do regular blood tests to check how well your kidneys are working. They are likely to notice early changes before you have any symptoms.",
        ],
      },
      {
        heading: "Drink plenty",
        paragraphs: [
          "Drinking plenty of fluids can help keep your kidneys healthy, and dehydration can make things worse. Doctors generally encourage people with myeloma to drink 2 to 3 litres each day, and Macmillan suggests trying to drink around 3 litres.",
          "All drinks count, and tea, coffee and alcohol can be included in moderation.",
          "If you are on dialysis, your doctor will advise you how much to drink. You will need to drink less, because your kidneys are not able to get rid of the fluid.",
        ],
      },
      {
        heading: "Take care with medicines",
        paragraphs: [
          "Anti-inflammatory painkillers such as ibuprofen can cause kidney problems. Always check with your doctor or nurse before taking them.",
          "Some myeloma drugs can also affect the kidneys. Your team may adjust the doses, or recommend a different drug, as needed.",
        ],
      },
      {
        heading: "If the kidneys are damaged",
        paragraphs: [
          "The main treatment is treating the myeloma itself, because it is the cause of the kidney damage. Fluids through a drip help flush waste products out of the kidneys, and you might see a kidney specialist.",
          "Sometimes the kidneys stop working and you need dialysis, which filters the blood. Some people only have it for a short time; others need long-term dialysis.",
          "Not smoking and eating a healthy diet, without too much salt, can also help look after your kidneys.",
        ],
      },
    ],
    helps: [
      "Drink plenty of fluids through the day, unless you are on dialysis and have been told otherwise.",
      "Check with your doctor or nurse before taking ibuprofen or other anti-inflammatory painkillers.",
      "Tell your doctor or nurse about new symptoms, such as passing less urine or swollen ankles.",
      "Ask your hospital team or GP which over-the-counter medicines are safe to use.",
      "Don't smoke, and keep salt down as part of a healthy diet.",
    ],
    tryThisWeek: [
      "Keep a drink by you all day.",
      "Check painkillers with your team.",
      "Notice changes in your urine.",
    ],
    ask: "How well are my kidneys working, and how much should I be drinking?",
    interactive: {
      kind: "risk-check",
      title: "What can affect your kidneys",
      intro: "Tick any that apply to you. Many of these can be helped by you or your team.",
      items: [
        { id: "paraprotein", label: "Paraprotein and light chains", note: "The most common cause: they can block the kidneys' small filtering tubes. Treating the myeloma is the main treatment.", changeable: false },
        { id: "calcium", label: "High calcium in the blood", note: "Calcium released from damaged bones can harm the kidneys. Fluids and bisphosphonates can bring it down.", changeable: true },
        { id: "fluids", label: "Not drinking enough", note: "Dehydration can make things worse. Doctors generally encourage 2 to 3 litres a day, unless you are on dialysis.", changeable: true },
        { id: "ibuprofen", label: "Taking ibuprofen", note: "Anti-inflammatory painkillers can cause kidney problems. Check with your doctor or nurse first.", changeable: true },
        { id: "infection", label: "Kidney infections", note: "Your healthcare team will treat any kidney infections rapidly.", changeable: true },
        { id: "drugs", label: "Some myeloma drugs", note: "Your team may adjust the doses, or recommend a different drug, if your kidneys are affected.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Not smoking, and a healthy diet without too much salt, help look after your kidneys.", changeable: true },
      ],
    },
    sources: [CRUK_PROBLEMS, MUK_KIDNEY, BCUK_EFFECTS, MAC_SYMPTOMS, MAC_LIVING, MUK_DIET, BCUK_SYMPTOMS, MAC_BONES],
    quiz: {
      question: "How much do doctors generally encourage people with myeloma to drink?",
      options: [{ text: "2 to 3 litres each day", right: true }, { text: "Half a litre each day" }, { text: "As little as possible" }],
      why: "Doctors generally encourage people with myeloma to drink 2 to 3 litres each day.",
    },
  },
  {
    id: "mye-fatigue",
    kicker: "Tiredness",
    question: "Why am I so tired with myeloma, and what helps?",
    hook: "Fatigue affects almost everyone with myeloma at some point. Anaemia, kidney problems, pain, treatment and worry can all add to it, and many of these can be treated.",
    short: "Fatigue is extreme tiredness that is not fully relieved by rest or sleep, and it affects almost all people with myeloma at one time or another. It can come from the myeloma, anaemia, kidney problems, pain, treatment or the emotional impact, so tell your team so they can look for the causes. Planning, pacing and prioritising, with a little gentle activity, can make a big difference.",
    sections: [
      {
        heading: "More than tiredness",
        paragraphs: [
          "Fatigue is a feeling of extreme tiredness or exhaustion that persists most or all of the time. It differs from ordinary tiredness and is not fully relieved by rest or sleep.",
          "It affects almost all people with myeloma at one time or another, and you may even get it while you are in remission. For some people it affects memory and concentration, and it can cause low moods and feeling irritable.",
        ],
      },
      {
        heading: "Causes that can be treated",
        paragraphs: [
          "Causes can include the myeloma itself, anaemia, kidney problems, pain, side effects of treatment and the emotional impact of myeloma.",
          "Anaemia is a low level of red blood cells, and it can make you feel tired and breathless. Your doctor may suggest a blood transfusion, or injections of erythropoietin, which encourages the bone marrow to make more red blood cells.",
          "Your doctor can assess you and try to treat any underlying cause of your tiredness. If your myeloma treatment is making your fatigue worse, this should improve once treatment finishes.",
        ],
      },
      {
        heading: "Plan, pace and prioritise",
        paragraphs: [
          "Plan, pace and prioritise are key when you have fatigue. Do the things that matter to you each day, spread activity and chores through the week, and do things when you have the energy to do them.",
          "If you have a busy day, try to rest the following day. Ask family members or friends to help with household tasks, cooking or shopping.",
          "A fatigue diary of how you feel each day can show patterns in your energy, and help you plan important activities for when you have more energy.",
        ],
      },
      {
        heading: "Moving a little more",
        paragraphs: [
          "You need both rest and activity to fight fatigue. It may sound strange, but being more active actually reduces tiredness.",
          "A small increase in physical activity, and gentle exercise, can make a big difference. Check with your healthcare team before starting any new form of exercise.",
          "If you can, go for regular, short walks, and try to walk for a little longer and further each day.",
        ],
      },
      {
        heading: "Be kind to yourself",
        paragraphs: [
          "You're not being lazy, and you don't have to be positive all the time. If you need a rest day, have one.",
          "Tell your medical team or GP about your fatigue. They may refer you to an occupational therapist or physiotherapist, who can show you ways to pace yourself.",
        ],
      },
    ],
    helps: [
      "Tell your healthcare team how you feel, so they can assess your fatigue and look for the causes.",
      "Keep a fatigue diary of your energy levels at different times of the day.",
      "Spread activity and chores through the week.",
      "Ask family members or friends to help with household tasks, cooking or shopping.",
      "Check with your team, then try regular short walks.",
      "Ask about an occupational therapist or physiotherapist to help you pace yourself.",
    ],
    tryThisWeek: [
      "Track your energy in a diary.",
      "Spread chores across the week.",
      "Take a short daily walk.",
    ],
    ask: "Could anaemia, my kidneys or my treatment be adding to my tiredness?",
    interactive: {
      kind: "scenarios",
      title: "Spending your energy",
      scenarios: [
        {
          id: "busy-day",
          situation: "You have a family event on Saturday.",
          options: [{ text: "Plan to rest the day after", best: true }, { text: "Keep Sunday busy too" }],
          why: "If you have a busy day, try to rest the following day.",
        },
        {
          id: "new-tiredness",
          situation: "You feel more tired and breathless than usual.",
          options: [{ text: "Tell your hospital team", best: true }, { text: "Push through it" }],
          why: "If fatigue or tiredness is new for you, or it gets worse, tell your hospital team so they can assess whether it indicates a change to your health.",
        },
        {
          id: "rest-day",
          situation: "You feel guilty for needing a rest day.",
          options: [{ text: "Have the rest day", best: true }, { text: "Force yourself to do everything" }],
          why: "You're not being lazy, and you don't have to be positive all the time. If you need a rest day, have one.",
        },
        {
          id: "offer",
          situation: "A friend asks how they can help.",
          options: [{ text: "Ask them to help with shopping or cooking", best: true }, { text: "Say you can manage" }],
          why: "Ask family members or friends to help with household tasks, cooking or shopping.",
        },
      ],
    },
    sources: [MUK_FATIGUE, BCUK_EFFECTS, CRUK_PROBLEMS, MAC_SYMPTOMS, MAC_LIVING, MAC_FATIGUE, BCUK_FATIGUE],
    quiz: {
      question: "What does Myeloma UK call key when you have fatigue?",
      options: [{ text: "Plan, pace and prioritise", right: true }, { text: "Rest all day, every day" }, { text: "Push through the tiredness" }],
      why: "Plan, pace and prioritise are key when you have fatigue.",
    },
  },
  {
    id: "mye-neuropathy",
    kicker: "Nerves",
    question: "Why do my hands and feet tingle, and what helps?",
    hook: "Some myeloma drugs, and sometimes the myeloma itself, can damage the nerves in the hands and feet. Reporting it early lets your team adjust your treatment.",
    short: "Tingling, numbness, pins and needles or burning in the hands and feet is called peripheral neuropathy. It is most common with thalidomide and bortezomib, but the myeloma itself can cause it. Tell your team early, as lowering the dose can limit the damage; it usually gets better when treatment ends, and there are medicines for nerve pain and ways to protect your hands and feet.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Peripheral neuropathy is damage to the nerves that carry messages between the brain, the spinal cord and the rest of the body. It can cause tingling, numbness, a feeling like pins and needles, or burning in the hands and feet.",
          "It can also cause nerve pain, very sensitive skin and problems with balance. You may find it hard to fasten buttons or do other fiddly tasks.",
        ],
      },
      {
        heading: "Causes in myeloma",
        paragraphs: [
          "It is most common with myeloma treatments such as thalidomide and bortezomib, but it might also be caused by the myeloma itself. Lenalidomide and pomalidomide can cause it too.",
          "Your doctor or nurse will tell you if you are having a treatment that may cause it. Your team will check for signs of peripheral neuropathy during treatment.",
        ],
      },
      {
        heading: "Report it early",
        paragraphs: [
          "Tell your doctor or nurse if you notice any tingling, loss of feeling or pain. If it is caused by your treatment, they may need to lower the dose, or talk to you about a different treatment.",
          "The sooner it is diagnosed, the better the chance of limiting the damage. Neuropathy caused by treatment is often temporary and usually gets better when treatment ends, but it can be permanent.",
          "For most people, symptoms gradually improve once the drug is stopped, as the nerves slowly recover. This may take several months or longer.",
        ],
      },
      {
        heading: "Easing nerve pain",
        paragraphs: [
          "Medicines such as amitriptyline, gabapentin, pregabalin and duloxetine can help with nerve pain. Creams or patches such as capsaicin can be useful for some people.",
          "A physiotherapist or exercise specialist can show you how to exercise safely, with exercises for walking, balance and muscle weakness. You may be referred to a neurologist if you need specific treatment.",
        ],
      },
      {
        heading: "Protecting your hands and feet",
        paragraphs: [
          "Wear gloves and socks in cold weather, gloves for gardening or washing up, and well-fitting shoes. Do not walk around barefoot, and check your feet often for any injury.",
          "Test hot water with your elbow before a bath or shower. Keep rooms well lit and hallways free of clutter to help prevent falls.",
          "If you live in England, Scotland or Wales, you need to tell the DVLA if you have peripheral neuropathy.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or nurse as soon as you notice tingling, numbness or pain.",
      "Ask whether the treatment you are having may cause peripheral neuropathy.",
      "Wear gloves and well-fitting shoes, and check your feet often.",
      "Test hot water with your elbow before baths, showers or washing up.",
      "Keep rooms well lit and floors clear of clutter to help prevent falls.",
      "Tell the DVLA if you have peripheral neuropathy and live in England, Scotland or Wales.",
    ],
    tryThisWeek: [
      "Report any new tingling.",
      "Check your feet each day.",
      "Clear trip hazards at home.",
    ],
    ask: "Could my treatment be causing this tingling, and can the dose be changed?",
    interactive: {
      kind: "signs",
      title: "Nerve symptoms to report",
      intro: "Tick any you have noticed. Tell your doctor or nurse as soon as possible.",
      signs: [
        "Tingling or pins and needles",
        "Numbness in my hands or feet",
        "A burning feeling",
        "Nerve pain",
        "Skin that is very sensitive",
        "Trouble with buttons or small objects",
        "Problems with balance or walking",
        "Feeling dizzy when I stand up",
      ],
      after: "If it is caused by your treatment, your team may lower the dose or talk to you about a different treatment.",
      copyHeading: "Nerve symptoms to tell my team",
    },
    sources: [MAC_PN, CRUK_PROBLEMS, MAC_SYMPTOMS, BCUK_EFFECTS, MUK_SUPPORTIVE, NHS_PN],
    quiz: {
      question: "Which myeloma treatments most often cause peripheral neuropathy?",
      options: [{ text: "Thalidomide and bortezomib", right: true }, { text: "Paracetamol and vitamin D" }, { text: "Antibiotics" }],
      why: "It is most common with myeloma treatments such as thalidomide and bortezomib, but it might also be caused by the myeloma itself.",
    },
  },
  {
    id: "mye-mood",
    kicker: "Mood",
    question: "How do I cope with living with a cancer that keeps coming back?",
    hook: "Myeloma is treatable but usually returns, and living with that uncertainty is hard. Feelings change over time, and there is help at every stage, including right now.",
    short: "Living with myeloma can be emotionally demanding, especially not knowing when it will come back. It is normal to have ups and downs, but if low feelings go on for more than 2 weeks, talk to your doctor or nurse. If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away or go to A&E, and Samaritans is free on 116 123, any time.",
    sections: [
      {
        heading: "A cancer with ups and downs",
        paragraphs: [
          "Coping with myeloma is physically and emotionally demanding. But with treatment, many people are now living longer and better lives, and there may be long periods when the cancer is under control.",
          "Knowing that it is going to come back at some point, but not knowing when, is especially difficult. Living with uncertainty is hard, and when it does come back it can feel very difficult even when you have known it will happen.",
        ],
      },
      {
        heading: "There is no right way to feel",
        paragraphs: [
          "Sometimes you might feel positive and upbeat; at other times you may feel numb or sad. Your feelings are a natural reaction to your situation, and you are not expected to be positive all the time.",
          "If you are on active monitoring, it can be hard to hear that you have cancer but are not going to have treatment. Many people feel anxious around their check-ups, and many find it gets easier as time goes on.",
        ],
      },
      {
        heading: "When low mood becomes depression",
        paragraphs: [
          "For some people, a low mood continues or gets worse and may become depression. Signs include feeling low most of the time, losing interest in things you used to enjoy, changes in sleeping, eating or concentration, and feeling helpless.",
          "It is normal to have these feelings sometimes. But if they go on for more than 2 weeks, talk to your doctor or nurse.",
        ],
      },
      {
        heading: "Ways to cope",
        paragraphs: [
          "Talking to family and friends helps many people. You can also talk to others who understand at a support group, on an online forum or through Myeloma UK's Peer Buddy service.",
          "Some people find practical things help, such as making lists, keeping a calendar of appointments, having goals and planning enjoyable things around weeks that might be difficult.",
          "Your GP or specialist nurse can refer you to a counsellor or psychologist, and may talk to you about medicine that can help treat depression. Anti-depressants are not addictive, but you should not stop taking them suddenly.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and choose the mental health option, or ask for an urgent GP appointment.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Talk to your family, friends or partner about how you feel.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Call the Myeloma Infoline on 0800 980 3332, or the Macmillan Support Line on 0808 808 00 00.",
      "Join a support group, an online forum or a peer buddy service to talk to others with myeloma.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell someone close how you feel.",
      "Plan one enjoyable thing.",
      "Save the Samaritans number.",
    ],
    ask: "Could my low mood be depression, and can you refer me to a counsellor or psychologist?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor or nurse",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: [
        "Feeling low or sad most of the time",
        "Losing interest in things I used to enjoy",
        "Changes in my sleep",
        "Changes in my eating",
        "Trouble concentrating",
        "Feeling helpless or vulnerable",
        "Problems starting or finishing tasks",
      ],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_LIVING, CRUK_RELAPSE, MUK_EMOTIONAL, BCUK_SMOULDERING, MAC_SMOULDERING, MAC_DEPRESSION, MUK_RELAPSED, CRUK_COPING, SAMARITANS, NHS_URGENT],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, they always pass" }],
      why: "It is normal to have these feelings sometimes. But if they go on for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
];
