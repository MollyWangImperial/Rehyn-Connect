import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Paget's disease of bone page's pieces (content/library-conditions/body-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and the Paget's
// Association (paget.org.uk, the UK charity for Paget's disease of bone), with the NHS hearing, tinnitus, falls and
// activity pages and the Royal Osteoporosis Society for exercise. Exercises are described only as the sources
// describe them. Emergency advice uses the NHS wording. General information only; it never replaces what a
// person's own GP, specialist or physiotherapist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const pa = (label: string, path: string): LearnSource => ({ label: `Paget's Association: ${label}`, url: `https://paget.org.uk/${path}` });

const NHS_PAGET = nhs("Paget's disease of bone", "conditions/pagets-disease-bone/");
const NHS_SYMPTOMS = nhs("Symptoms of Paget's disease of bone", "conditions/pagets-disease-bone/symptoms/");
const NHS_DIAGNOSIS = nhs("Diagnosis of Paget's disease of bone", "conditions/pagets-disease-bone/diagnosis/");
const NHS_TREATMENT = nhs("Treatment of Paget's disease of bone", "conditions/pagets-disease-bone/treatment/");
const NHS_COMPLICATIONS = nhs("Complications of Paget's disease of bone", "conditions/pagets-disease-bone/complications/");
const NHS_HEARING = nhs("Hearing loss", "conditions/hearing-loss/");
const NHS_TINNITUS = nhs("Tinnitus", "conditions/tinnitus/");
const NHS_FALLS = nhs("Falls", "conditions/falls/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for older adults", "live-well/exercise/physical-activity-guidelines-older-adults/");
const NHS_BALANCE = nhs("Balance exercises", "live-well/exercise/balance-exercises/");

const PA_KEY = pa("Paget's and its management", "pagets-disease/what-is-pagets-and-how-is-it-managed/");
const PA_WHAT = pa("What is Paget's disease?", "pagets-disease/what-is-pagets-and-how-is-it-managed/what-is-pagets/");
const PA_CAUSES = pa("Causes", "pagets-disease/what-is-pagets-and-how-is-it-managed/causes/");
const PA_SYMPTOMS = pa("Symptoms and complications", "pagets-disease/what-is-pagets-and-how-is-it-managed/symptoms-and-complications/");
const PA_DIAGNOSIS = pa("Diagnosis", "pagets-disease/what-is-pagets-and-how-is-it-managed/diagnosis/");
const PA_TREATMENT = pa("Treatment", "pagets-disease/what-is-pagets-and-how-is-it-managed/treatment/");
const PA_ELSE = pa("What else may help?", "pagets-disease/what-is-pagets-and-how-is-it-managed/what-else-may-help/");
const PA_PAIN = pa("Pain associated with Paget's", "pagets-disease/pain-in-pagets/");
const PA_PAIN_CAUSES = pa("Causes of pain in Paget's disease", "pagets-disease/causes-of-pain-in-pagets-disease/");
const PA_PAIN_MEDS = pa("Medication to treat pain", "pagets-disease/medication-for-pain-in-pagets-disease/");
const PA_DRUG_FREE = pa("Drug free help with pain", "pagets-disease/drug-free-help-with-pain/");
const PA_SURGERY = pa("Could surgery be required?", "pagets-disease/when-might-surgery-be-used/");
const PA_QUESTIONS = pa("Your questions answered", "pagets-disease/your-questions-answered/");
const PA_VIDEOS = pa("Information videos", "pagets-disease/information-videos/");
const PA_HELPLINE = pa("Paget's Nurse Helpline", "find-support/pagets-nurse-helpline/");
const PA_TALK = pa("Talk to others", "find-support/talk-to-others/");
const PA_EVENTS = pa("Paget's information events", "find-support/pagets-information-events/");
const PA_CENTRES = pa("Centres of Excellence", "find-support/centres-of-excellence/");
const PA_BOOKLETS = pa("Booklets and literature", "find-support/booklets-and-literature/");
const PA_TINNITUS = pa("Living with tinnitus", "news/living-with-tinnitus/");
const PA_PAGETALERT = pa("PagetAlert", "news/pagetalert/");
const PA_CLINICAL = pa("Clinical management", "health-and-research-professionals/clinical-management/");
const PA_PRESENTATION = pa("Clinical presentation of Paget's disease", "clinical-presentation/");
const PA_PRISM = pa("PRISM and PRISM-EZ studies", "prism-and-prism-ez/");
const PA_ZIPP = pa("Zoledronate in the Prevention of Paget's disease (ZiPP)", "zipp-study/");
const PA_DECLINE = pa("Is the decline of Paget's continuing in the UK?", "the-decline-of-pagets-disease/");

const ROS_EXERCISE: LearnSource = { label: "Royal Osteoporosis Society: Exercise for bones", url: "https://theros.org.uk/information-and-support/exercise/exercise-for-bones/" };

export const pagetsAnswers: LearnArticle[] = [
  {
    id: "pag-what-it-is",
    kicker: "Understanding",
    question: "What is Paget's disease of bone?",
    hook: "Bone is renewed all through life. In Paget's disease that renewal speeds up, and the new bone comes out larger and weaker.",
    short: "Paget's disease of bone disrupts the normal cycle of bone renewal, so bones can become weakened and possibly deformed. It is fairly common in the UK in older people, and rare under 50. It can affect one bone or several, but it does not spread from one bone to another.",
    sections: [
      {
        heading: "Bone that renews itself",
        paragraphs: [
          "Bone cells regenerate in a similar way to skin: old bone is removed and replaced by new bone. This is known as bone remodelling.",
          "Two kinds of cell do most of this work. Osteoclasts absorb old bone, and osteoblasts make new bone. Normally, the amount of bone removed is exactly balanced by the amount of new bone formed.",
        ],
      },
      {
        heading: "What goes wrong",
        paragraphs: [
          "In Paget's disease of bone, something goes wrong with the osteoclasts and they start to absorb bone at a much faster rate than usual. The osteoblasts then try to make new bone more quickly, but the new bone is larger and weaker than normal.",
          "The Paget's Association says the osteoclasts are larger than normal. The disordered turnover weakens the bone and can make affected bones enlarged or misshapen.",
        ],
      },
      {
        heading: "Which bones",
        paragraphs: [
          "It can affect one bone or several. Any bone can be affected, but common sites are the pelvis, spine, thigh bone, shin and skull.",
          "Although it can affect several bones, it does not spread from one bone to another like an infection or cancer.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "It is a fairly common condition in the UK, particularly in older people, and it is rare in people under 50. The Paget's Association says about 1% of people in the UK over the age of 55 are thought to be affected, and that it is more common in men than women.",
          "It is not clear what triggers it, but a family history of Paget's disease raises the risk. It is generally believed to be due to a combination of genetic and environmental influences.",
        ],
      },
      {
        heading: "What it does not have to mean",
        paragraphs: [
          "There is currently no cure, but there are treatments that can help keep it under control for many years. Many people who have it do not have symptoms and will never develop complications.",
          "Most people with Paget's disease have a normal life expectancy. It is not related to Paget's disease of the nipple or breast, which is a rare type of breast cancer that shares the name.",
        ],
      },
    ],
    helps: [
      "See your GP if you have persistent bone or joint pain, deformities in any of your bones, or symptoms of a nerve problem such as numbness, tingling or balance problems.",
      "Tell your GP about any history of Paget's disease in your family.",
      "Make sure you get enough calcium and vitamin D. Some people may need to take supplements.",
      "Contact the Paget's Nurse Helpline for information and support on all aspects of Paget's disease.",
    ],
    tryThisWeek: [
      "See your GP about persistent bone pain.",
      "Mention any family history.",
      "Check your calcium and vitamin D.",
    ],
    ask: "Which of my bones are affected, and is the disease active?",
    interactive: {
      kind: "flip-cards",
      title: "The bone cells at work",
      intro: "Turn each card to see what happens to that part of bone renewal in Paget's disease.",
      cards: [
        { id: "osteoclasts", front: "Osteoclasts", when: "The cells that absorb old bone", back: "In Paget's disease they are larger than normal and absorb bone at a much faster rate than usual." },
        { id: "osteoblasts", front: "Osteoblasts", when: "The cells that make new bone", back: "They try to keep up, but the new bone they make is larger and weaker than normal." },
        { id: "osteocytes", front: "Osteocytes", when: "Osteoblasts buried in new bone", back: "They play a key role in regulating the activity of the other two kinds of cell." },
        { id: "how-many", front: "One bone or several", when: "Monostotic or polyostotic", back: "Monostotic means only one bone is affected. Polyostotic means more than one. It does not spread between bones." },
      ],
    },
    sources: [NHS_PAGET, PA_WHAT, PA_CAUSES, PA_QUESTIONS, PA_KEY, PA_DIAGNOSIS, PA_HELPLINE],
    quiz: {
      question: "Does Paget's disease spread from one bone to another?",
      options: [{ text: "No, it does not spread like an infection or cancer", right: true }, { text: "Yes, slowly through the skeleton" }, { text: "Only into the skull" }],
      why: "Although it can affect several bones, it does not spread from one bone to another like an infection or cancer.",
    },
  },
  {
    id: "pag-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms, and why do many people have none?",
    hook: "It is often found by chance, on a blood test or an X-ray for something else. When it does cause symptoms, bone pain is the most common.",
    short: "Many people with Paget's disease have no symptoms, and it is only found during tests carried out for another reason. When there are symptoms, bone pain is the most common: usually dull, deep, constant and worse at night. Bones can also change shape, and enlarged bone can press on a nerve.",
    sections: [
      {
        heading: "Often no symptoms at all",
        paragraphs: [
          "In many cases there are no obvious symptoms, and the condition is only found during tests carried out for another reason. The Paget's Association says many people who have it do not have symptoms and never develop complications.",
          "It has been estimated that less than 10% of people with signs of Paget's disease on an X-ray come to medical attention.",
        ],
      },
      {
        heading: "Bone and joint pain",
        paragraphs: [
          "Paget's disease may cause pain in the bone itself and in the joints near the affected bone. The bone pain is usually dull or aching, deep within the affected part of the body, constant and worse at night.",
          "Where the pain is felt depends on which bones are affected. The Paget's Association lists shin pain if the lower leg is affected, headache if the skull is affected, back pain if the vertebrae are affected, and pain in the pelvis.",
        ],
      },
      {
        heading: "Warmth and changes in shape",
        paragraphs: [
          "Blood flow to active areas of Paget's disease increases, which can make the skin over the affected bone feel warm. The affected bone may become enlarged and misshapen.",
          "If the skull is affected, the enlarged bone is sometimes first noticed when a person realises their head is larger and their forehead wider than normal. Over many years, the weight-bearing bones of the leg can bow.",
        ],
      },
      {
        heading: "When a nerve is squashed",
        paragraphs: [
          "Abnormal bone growth can squash or damage a nearby nerve. Signs can include pain travelling from the spine down into the legs, numbness or tingling in the limbs, balance problems, and partial loss of movement in the limbs.",
          "Call 999 or go to A&E if you have partial loss of movement in your limbs or loss of bowel or bladder control.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if you have persistent bone or joint pain, deformities in any of your bones, or symptoms of a nerve problem, such as numbness, tingling or balance problems. A GP can organise tests to check your bones.",
        ],
      },
    ],
    helps: [
      "See a GP if you have persistent bone or joint pain.",
      "See a GP if you notice deformities in any of your bones.",
      "See a GP about symptoms of a nerve problem, such as numbness, tingling or balance problems.",
      "Call 999 or go to A&E if you have partial loss of movement in your limbs or loss of bowel or bladder control.",
      "Keep a pain diary to see whether it reveals patterns, or anything that makes the pain better or worse.",
    ],
    tryThisWeek: [
      "Book a GP visit for persistent bone pain.",
      "Note any change in a bone's shape.",
      "Start a pain diary.",
    ],
    ask: "Could my bone pain be caused by Paget's disease, and which tests would show it?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick any you have noticed. They become a list to take to your GP.",
      signs: [
        "Bone or joint pain that persists",
        "Pain that is deep, constant and worse at night",
        "Skin feeling warm over a bone",
        "A bone changing shape, such as a bowed leg",
        "A larger head or wider forehead",
        "Numbness or tingling in a limb",
        "Pain from the spine down into the legs",
        "Balance problems",
      ],
      after: "Call 999 or go to A&E if you have partial loss of movement in your limbs or loss of bowel or bladder control.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_SYMPTOMS, PA_SYMPTOMS, PA_DIAGNOSIS, PA_QUESTIONS, PA_PAIN, PA_PRESENTATION],
    quiz: {
      question: "How is the bone pain of Paget's disease usually described?",
      options: [{ text: "Dull, deep, constant and worse at night", right: true }, { text: "Sharp, and only when moving" }, { text: "Brief stabs first thing in the morning" }],
      why: "The bone pain is usually dull or aching, deep within the affected part of the body, constant and worse at night.",
    },
  },
  {
    id: "pag-diagnosis",
    kicker: "Tests",
    question: "How is it diagnosed: blood tests, X-rays and bone scans?",
    hook: "A raised result on a routine blood test is often the first clue. An X-ray and a bone scan then show which bones are affected.",
    short: "Paget's disease of bone can be diagnosed with a blood test and an X-ray or scan. The blood test checks a substance called alkaline phosphatase, or ALP, which is often raised. An X-ray can show enlarged bone, and a bone scan shows how much of the body is affected.",
    sections: [
      {
        heading: "Starting with the GP",
        paragraphs: [
          "If you are concerned that you may have Paget's disease, see your GP, who will assess your symptoms and may arrange initial tests such as blood tests. Tell your GP about any history of Paget's disease in your family.",
          "In many cases, Paget's disease is found by chance when tests are carried out for another reason. Most people are over 50 when they are diagnosed.",
        ],
      },
      {
        heading: "The ALP blood test",
        paragraphs: [
          "A simple blood test checks the level of a substance called alkaline phosphatase, or ALP. It is part of a common blood test of liver function, and it is released into the bloodstream when the bone-making cells are overactive.",
          "People with Paget's disease often have raised ALP, but some have a normal level, and a high level can also be caused by some other conditions. So an X-ray or scan is also needed to confirm the diagnosis.",
        ],
      },
      {
        heading: "X-rays",
        paragraphs: [
          "An X-ray can show whether your bones have become enlarged. Bone affected by Paget's disease often has characteristic features on an X-ray.",
          "A single X-ray cannot give information about the many bones that can be affected. The Paget's Association says a radionuclide bone scan is the best way to see the full extent of the disease.",
        ],
      },
      {
        heading: "The bone scan",
        paragraphs: [
          "This scan is also called scintigraphy, an isotope bone scan or a nuclear medicine bone scan. A small amount of a radioactive substance is injected into a vein in the arm, and it collects where a lot of bone renewal is taking place.",
          "A gamma camera then detects the radiation and highlights the affected parts of the body. It is a different scan from the DEXA scan used to diagnose osteoporosis.",
        ],
      },
      {
        heading: "Further tests and a specialist",
        paragraphs: [
          "Further tests, such as a bone biopsy, a CT scan or an MRI scan, are usually only needed if the diagnosis is not clear or there may be complications.",
          "A detailed assessment, ideally by a hospital consultant who understands the condition, is important. In the UK, specialists are often found in rheumatology or endocrinology departments, and the Paget's Association recognises Centres of Excellence.",
        ],
      },
    ],
    helps: [
      "See your GP if you are concerned that you may have Paget's disease.",
      "Tell your GP about any history of Paget's disease in your family.",
      "If required, your GP can refer you to a consultant for a full assessment.",
      "If there is no specialist locally, ask whether referral to a Paget's Association Centre of Excellence might be beneficial.",
    ],
    tryThisWeek: [
      "Ask your GP about tests.",
      "Mention any family history.",
      "Ask about a specialist referral.",
    ],
    ask: "Do I need a bone scan to see which bones are affected, and should I see a specialist?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, card by card",
      intro: "Turn each card to see when the test is used and what it shows.",
      cards: [
        { id: "alp", front: "ALP blood test", when: "Often the first clue", back: "Checks alkaline phosphatase. Often raised, but some people have a normal level, so an X-ray or scan is also needed." },
        { id: "xray", front: "X-ray", when: "To look at the bone itself", back: "Shows whether bones have become enlarged. One X-ray cannot show all the bones that may be affected." },
        { id: "scan", front: "Radionuclide bone scan", when: "To find every affected bone", back: "A small amount of radioactive tracer collects where bone renewal is high, and a gamma camera picks it up." },
        { id: "biopsy", front: "Bone biopsy", when: "If the diagnosis is unclear", back: "A small sample of bone is removed under anaesthetic and looked at in detail." },
        { id: "ct-mri", front: "CT or MRI scan", when: "If there may be complications", back: "Detailed pictures of the affected bone. CT uses a series of X-rays; MRI uses a magnetic field and radio waves." },
      ],
    },
    sources: [NHS_DIAGNOSIS, PA_DIAGNOSIS, PA_CLINICAL],
    quiz: {
      question: "Why is an X-ray or scan needed as well as the ALP blood test?",
      options: [{ text: "ALP can be normal in Paget's, or raised for other reasons", right: true }, { text: "The blood test is never accurate" }, { text: "The scan treats the disease" }],
      why: "Some have a normal level, and a high level can also be caused by some other conditions. So an X-ray or scan is also needed to confirm the diagnosis.",
    },
  },
  {
    id: "pag-complications",
    kicker: "Complications",
    question: "What complications can Paget's disease cause?",
    hook: "Most people never have them. But fragile bones, worn joints, hearing loss and squashed nerves are why early diagnosis matters.",
    short: "Paget's disease can sometimes lead to further problems: bones that break more easily, osteoarthritis in nearby joints, bone deformities and, if the skull is affected, hearing loss. Heart failure and bone cancer are rare. The chance of complications depends on which bones are affected.",
    sections: [
      {
        heading: "It depends on which bones",
        paragraphs: [
          "The potential for complications depends on which bones are affected. Many people who have Paget's disease never develop complications.",
          "Professor Stuart Ralston of the Paget's Association has said treatments should be given early enough to prevent complications developing, because once they are present they are impossible to reverse.",
        ],
      },
      {
        heading: "Broken bones",
        paragraphs: [
          "Affected bones tend to be more fragile than normal bone and are more likely to break, even after a relatively minor injury. The increased risk is particularly in the long bones of the arm and leg.",
          "Signs of a fracture include sudden, severe pain, swelling or tenderness around the injured area, and bleeding if the bone has damaged the skin. Some breaks start as small stress fractures, which are at high risk of becoming complete.",
        ],
      },
      {
        heading: "Joints and bone shape",
        paragraphs: [
          "Abnormal bone growth can damage the cartilage in nearby joints, leading to osteoarthritis, with joint pain, stiffness and swelling. The hip and knee are the most commonly affected sites.",
          "Bones can become enlarged or misshapen. The legs can curve outwards, the spine can curve to the side, or the upper back can become very hunched over.",
        ],
      },
      {
        heading: "Skull, nerves and hearing",
        paragraphs: [
          "If the skull is affected, there is a risk of permanent hearing loss and possibly total deafness. Ringing in the ears, called tinnitus, can also occur.",
          "Enlarged bone can press on nerves. In the spine, this can cause pain, leg weakness or sciatica. Call 999 or go to A&E if you have partial loss of movement in your limbs or loss of bowel or bladder control.",
        ],
      },
      {
        heading: "Rare complications",
        paragraphs: [
          "Affected bone often contains more blood vessels than normal bone, so the heart may have to work harder. Very rarely, this leads to heart failure, with shortness of breath, extreme tiredness and swelling in the legs, ankles and feet.",
          "Bone cancer is a rare complication, estimated to affect between 1 in 500 and 1 in 1,000 people with the condition. Its symptoms are similar to those of Paget's disease, so it is important to have new or increasing pain assessed by your doctor.",
        ],
      },
    ],
    helps: [
      "Have pain, especially new or increasing pain, assessed by your doctor.",
      "If the skull is affected, ask about treatment: it is usually recommended when the condition is affecting the skull.",
      "Call 999 or go to A&E if you have partial loss of movement in your limbs or loss of bowel or bladder control.",
      "Call 999 if you have fallen and may have injured your head, back, neck or hip, or cannot get up.",
      "Contact the Paget's Nurse Helpline if you have questions or are worried about bone cancer.",
    ],
    tryThisWeek: [
      "Get new pain checked by your doctor.",
      "Ask about treatment if your skull is affected.",
      "Call the helpline with any worries.",
    ],
    ask: "Which complications am I at risk of, given the bones that are affected?",
    interactive: {
      kind: "scenarios",
      title: "Spotting a problem",
      scenarios: [
        {
          id: "fall",
          situation: "You fall and may have injured your hip.",
          options: [{ text: "Call 999", best: true }, { text: "Wait to see if it settles" }],
          why: "Call 999 if you or someone else has fallen and may have injured the head, back, neck or hip, or cannot get up.",
        },
        {
          id: "nerve",
          situation: "Your legs suddenly will not move properly and you lose bladder control.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Book a routine GP appointment" }],
          why: "Call 999 or go to A&E if you have partial loss of movement in your limbs or loss of bowel or bladder control.",
        },
        {
          id: "new-pain",
          situation: "A bone that was settled has started to hurt more.",
          options: [{ text: "Have it assessed by your doctor", best: true }, { text: "Ignore it: Paget's pain comes and goes" }],
          why: "It is important to have pain, especially new or increasing pain, assessed by your doctor.",
        },
      ],
    },
    sources: [NHS_COMPLICATIONS, PA_SYMPTOMS, PA_PRESENTATION, PA_PAIN_CAUSES, NHS_SYMPTOMS, NHS_FALLS],
    quiz: {
      question: "What does the chance of complications depend on?",
      options: [{ text: "Which bones are affected", right: true }, { text: "Your blood group" }, { text: "The time of year" }],
      why: "The potential for complications depends on which bones are affected.",
    },
  },
  {
    id: "pag-bisphosphonates",
    kicker: "Treatment",
    question: "How do bisphosphonates such as zoledronic acid work?",
    hook: "One drip in the arm, about half an hour, and for many people relief that lasts for years.",
    short: "Bisphosphonates are medicines that help regulate bone growth by affecting the cells that absorb old bone. The usual one is zoledronic acid, also called zoledronate, given once through a drip in the arm. It can help reduce pain for several years, and treatment can be repeated when the effect wears off.",
    sections: [
      {
        heading: "Not everyone needs treatment",
        paragraphs: [
          "There is currently no cure for Paget's disease, but treatment can help relieve the symptoms. If you do not have any symptoms, your doctor may suggest keeping an eye on your condition and delaying treatment until any problems occur.",
          "The Paget's Association says that if there is pain thought to be caused by Paget's disease, treatment with bisphosphonates should normally be given.",
        ],
      },
      {
        heading: "How they work",
        paragraphs: [
          "Bisphosphonates work by affecting the cells that absorb old bone, the osteoclasts. They reduce the abnormal bone breakdown, restoring a more normal remodelling process.",
          "It can take several months for bisphosphonates to have their full effect, and for a person to feel the maximum benefit.",
        ],
      },
      {
        heading: "Zoledronic acid",
        paragraphs: [
          "Zoledronic acid is given as a single dose through a drip into a vein in the arm, usually in hospital as an outpatient. It usually takes around 15 to 30 minutes.",
          "It can help reduce pain for several years at a time, and for many people one dose can be effective for many years. Treatment can be repeated when the effect starts to wear off.",
        ],
      },
      {
        heading: "Other options",
        paragraphs: [
          "Risedronate is a tablet, usually taken daily for two months. It should be taken with a full glass of water on an empty stomach, first thing in the morning, sitting upright or standing for at least 30 minutes afterwards.",
          "Pamidronate is given by drip and has largely been replaced by zoledronic acid. If you are unable to have bisphosphonates, you may need daily injections of a medicine called calcitonin, usually for up to 3 months.",
        ],
      },
      {
        heading: "Side effects and safety",
        paragraphs: [
          "The main side effect of zoledronate is flu-like symptoms that last a day or 2. The most common side effect of risedronate is an upset stomach. Serious side effects are rare.",
          "Zoledronate can lower calcium levels, so calcium and vitamin D supplements are usually advised for several days after the infusion. Bisphosphonates cannot be used with significant kidney disease, and if possible any extensive dental treatment is best completed first.",
        ],
      },
    ],
    helps: [
      "Take calcium and vitamin D supplements for several days after the infusion, if you are advised to.",
      "If possible, complete any extensive dental treatment before bisphosphonate treatment, and tell your dentist that you are having, or have had, a bisphosphonate.",
      "If a flu-like reaction occurs, it can usually be controlled with paracetamol or ibuprofen.",
      "Take risedronate with a full glass of water on an empty stomach, and stay upright for at least 30 minutes.",
      "Read the patient information leaflet, and ask your healthcare team about anything you are unsure or worried about.",
    ],
    tryThisWeek: [
      "Take supplements if advised.",
      "Finish big dental work first.",
      "Read the medicine leaflet.",
    ],
    ask: "Would zoledronic acid help my pain, and is it safe with my kidneys and teeth?",
    interactive: {
      kind: "timeline",
      title: "Around a zoledronic acid infusion",
      steps: [
        { id: "before", when: "Before treatment", title: "Checks first", points: ["A blood test to check kidney function.", "Calcium and vitamin D may be checked."] },
        { id: "day", when: "On the day", title: "One drip in the arm", points: ["Usually in hospital, as an outpatient.", "Usually takes around 15 to 30 minutes."] },
        { id: "after", when: "The next few days", title: "Possible flu-like feeling", points: ["The main side effect, lasting a day or 2.", "Calcium and vitamin D for several days, if advised."] },
        { id: "months", when: "The following months", title: "The full effect", points: ["It can take several months to feel the full benefit.", "Pain from active Paget's often responds within a few months."] },
        { id: "review", when: "3 to 6 months after", title: "Response checked", points: ["An assessment of how well treatment worked.", "Treatment can be repeated when the effect wears off."] },
      ],
    },
    sources: [NHS_TREATMENT, PA_TREATMENT, PA_DIAGNOSIS, PA_PAIN_MEDS],
    quiz: {
      question: "How is zoledronic acid given?",
      options: [{ text: "A single drip into a vein in the arm", right: true }, { text: "A daily tablet for a year" }, { text: "An injection into a joint" }],
      why: "Zoledronic acid is given as a single dose through a drip into a vein in the arm, usually in hospital as an outpatient.",
    },
  },
  {
    id: "pag-pain",
    kicker: "Pain",
    question: "How can bone pain from Paget's disease be eased?",
    hook: "Pain from active Paget's disease often responds to a bisphosphonate. Pain from a worn joint or a squashed nerve needs something different.",
    short: "Not everyone with Paget's disease has pain, but it is the most common symptom. Finding the cause matters: pain from active Paget's disease often improves with a bisphosphonate, while pain from osteoarthritis or a squashed nerve needs other treatment. Painkillers, physiotherapy, pacing, and warmth or cold can help too.",
    sections: [
      {
        heading: "Finding the cause",
        paragraphs: [
          "Pain can come from the affected bone itself, from damage to nearby joints, from a break in the bone, or from enlarged bone pressing on nerves. It is important to define the cause of pain, so that the correct treatment can be given.",
          "Pain caused by active Paget's disease can respond well to a bisphosphonate such as zoledronic acid. Pain from other causes is unlikely to be helped by it.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "Some people need painkillers as well as bisphosphonates, especially if the bones or joints are damaged. The Paget's Association advises starting with small doses of weak painkillers, which can be gradually increased or changed to stronger ones.",
          "Paracetamol is one of the safest options, and it is best taken regularly rather than waiting until the pain becomes intolerable. Discuss anti-inflammatory painkillers such as ibuprofen with your doctor, especially if you have had a stomach ulcer, asthma, or a heart, liver or kidney problem.",
        ],
      },
      {
        heading: "Pain from osteoarthritis",
        paragraphs: [
          "Muscle strengthening exercises can help reduce the pain of osteoarthritis in the knees, and anti-inflammatory creams and gels can be rubbed into the affected area. If you are overweight, losing weight can help reduce the pain a great deal, especially in the knees and hips.",
          "If osteoarthritis becomes severe and the pain has not responded, joint replacement surgery may be needed. The Paget's Association says the results of this surgery in Paget's disease are excellent.",
        ],
      },
      {
        heading: "Help without medicines",
        paragraphs: [
          "Your GP can refer you to a physiotherapist. A walking stick, usually held on the opposite side to the affected leg, or special footwear from the hospital orthotics department may also help.",
          "Warmth for up to 20 minutes, or a covered cold pack for up to 15 minutes at a time, can relieve aching in muscles and joints. Do not use cold packs if you have poor circulation or sensation.",
        ],
      },
      {
        heading: "Living with pain",
        paragraphs: [
          "Pacing means taking breaks throughout the day before they are needed. Do not overdo things on the days you feel well, nor rest too much and lose fitness.",
          "Relaxation, distraction and cognitive behavioural therapy can help, and your GP can refer you for CBT. In the case of severe, persistent pain, a pain clinic may be considered.",
        ],
      },
    ],
    helps: [
      "Have pain, especially new or increasing pain, assessed by your doctor.",
      "Keep a pain diary to spot patterns and use your painkillers most effectively.",
      "Take paracetamol regularly rather than waiting until the pain becomes intolerable.",
      "Pace your day: take breaks before they are needed.",
      "Use warmth for up to 20 minutes, or a covered cold pack for up to 15 minutes at a time.",
      "Call 999 if you think you or someone you are with may be having a serious allergic reaction to a medicine.",
    ],
    tryThisWeek: [
      "Keep a pain diary.",
      "Take breaks before you need them.",
      "Try warmth for up to 20 minutes.",
    ],
    ask: "Is my pain coming from Paget's disease itself, or from a joint or nerve, and what would treat it?",
    interactive: {
      kind: "scenarios",
      title: "A day with bone pain",
      scenarios: [
        {
          id: "good-day",
          situation: "You feel well today and plan to do every job at once.",
          options: [{ text: "Pace it, with breaks", best: true }, { text: "Do it all while you can" }],
          why: "Do not overdo things on the days you feel well, nor rest too much and lose fitness.",
        },
        {
          id: "waiting",
          situation: "The pain is building and you are waiting until it is bad.",
          options: [{ text: "Take paracetamol regularly", best: true }, { text: "Wait until it is intolerable" }],
          why: "Paracetamol is best taken regularly rather than waiting until the pain becomes intolerable.",
        },
        {
          id: "circulation",
          situation: "Your joints ache, and your circulation is poor.",
          options: [{ text: "Not a cold pack: try covered warmth", best: true }, { text: "An ice pack straight on the skin" }],
          why: "Do not use cold packs if you have poor circulation or sensation. Warmth for up to 20 minutes can relieve aching.",
        },
        {
          id: "new",
          situation: "A new pain starts in a different bone.",
          options: [{ text: "Have it assessed by your doctor", best: true }, { text: "Take more of your usual painkiller" }],
          why: "It is important to have pain, especially new or increasing pain, assessed by your doctor.",
        },
      ],
    },
    sources: [PA_PAIN_CAUSES, PA_PAIN, PA_PAIN_MEDS, PA_DRUG_FREE, PA_PRESENTATION],
    quiz: {
      question: "Which pain is most likely to respond to a bisphosphonate?",
      options: [{ text: "Pain from active Paget's disease", right: true }, { text: "Pain from osteoarthritis" }, { text: "Any headache" }],
      why: "Pain caused by active Paget's disease can respond well to a bisphosphonate such as zoledronic acid. Pain from other causes is unlikely to be helped by it.",
    },
  },
  {
    id: "pag-surgery",
    kicker: "Surgery",
    question: "When is surgery needed for Paget's disease?",
    hook: "Most people never need an operation. When a bone breaks, a joint wears badly or a nerve is squashed, surgery can ease pain.",
    short: "Surgery is usually only needed if further problems develop, such as fractures, deformities or severe osteoarthritis. The most common operations are hip or knee replacement, cutting and straightening a bowed bone, and fixing a fracture. The results are generally good, and a bisphosphonate is usually given beforehand.",
    sections: [
      {
        heading: "When surgery comes in",
        paragraphs: [
          "Surgery is usually only needed if further problems develop, such as fractures, deformities or severe osteoarthritis. Successful surgery for severe complications can reduce pain and improve quality of life.",
          "Bisphosphonates are seldom effective at treating complications once they are established. When complications occur, surgery is often required.",
        ],
      },
      {
        heading: "Joint replacement",
        paragraphs: [
          "When Paget's disease strains nearby joints, it can lead to osteoarthritis, and a hip or knee replacement may be needed. The Paget's Association says joint replacement is highly successful, with results comparable to those of people without Paget's disease.",
          "The operation may be more technically challenging because of deformity and altered bone quality. There is some evidence of more blood loss during the operation, but the overall incidence of complications is low.",
        ],
      },
      {
        heading: "Broken bones and bowed legs",
        paragraphs: [
          "If an affected bone breaks, it may need a plaster cast or an operation to stabilise it. Repair can be more complex because of the size and structure of the bone, but in general the results are good.",
          "Osteotomy means cutting of the bone. It can shorten, lengthen or change the shape of a bone, such as a bowed leg, which is then reset in a more normal position.",
        ],
      },
      {
        heading: "Nerves and the spine",
        paragraphs: [
          "Operations can move bone away from a squashed nerve. Rarely, Paget's disease in the spine presses on the spinal cord, and surgery may be needed if medical treatment has not worked.",
          "If symptoms of spinal stenosis are severe or getting worse, surgery may be offered to release the pressure and give the nerves more room.",
        ],
      },
      {
        heading: "Before the operation",
        paragraphs: [
          "A bisphosphonate is usually given before surgery, in the hope that it might reduce blood loss, because affected bone has an increased blood supply. These operations are usually done under general anaesthetic, so you will be asleep.",
          "Careful planning before the operation, together with the consultant caring for your Paget's disease, can help ensure the best results.",
        ],
      },
    ],
    helps: [
      "Ask whether you need bisphosphonate treatment before the operation.",
      "Ask for the consultant who cares for your Paget's disease to be involved in planning the operation.",
      "Know that joint replacement is most often considered when joint pain has not responded to other measures and is affecting your quality of life.",
      "Read the Paget's Association booklet on Paget's disease and orthopaedic surgery.",
    ],
    tryThisWeek: [
      "Ask about treatment before surgery.",
      "Ask who will plan the operation.",
      "Read the orthopaedic surgery booklet.",
    ],
    ask: "Would I need a bisphosphonate before an operation, and who will plan it with my surgeon?",
    interactive: {
      kind: "flip-cards",
      title: "Operations, card by card",
      intro: "Turn each card to see when that operation is used and what it does.",
      cards: [
        { id: "joint", front: "Hip or knee replacement", when: "Severe osteoarthritis in a nearby joint", back: "Replaces the damaged joint with an artificial one. Highly successful, with results like those without Paget's." },
        { id: "fracture", front: "Fracture fixation", when: "An affected bone breaks", back: "A plaster cast or an operation to stabilise the break. More complex, but the results are generally good." },
        { id: "osteotomy", front: "Osteotomy", when: "Marked deformity, such as a bowed leg", back: "The bone is cut to shorten, lengthen or reshape it, then reset in a more normal position." },
        { id: "nerve", front: "Spinal surgery", when: "Bone pressing on nerves", back: "Releases the pressure and gives the nerves more room, if medical treatment has not worked." },
      ],
    },
    sources: [NHS_TREATMENT, PA_SURGERY, PA_TREATMENT, PA_CLINICAL, PA_PAIN_CAUSES, PA_PAIN_MEDS, PA_BOOKLETS],
    quiz: {
      question: "Which of these is one of the most common operations for people with Paget's disease?",
      options: [{ text: "Hip or knee replacement", right: true }, { text: "Cataract surgery" }, { text: "Heart bypass surgery" }],
      why: "The most common operations are hip or knee replacement, cutting and straightening a bowed bone, and fixing a fracture.",
    },
  },
  {
    id: "pag-follow-up",
    kicker: "Follow-up",
    question: "What happens at follow-up, and how often are blood tests done?",
    hook: "Treatment is aimed at how you feel, not just at a number on a blood test.",
    short: "An assessment of how well treatment has worked should take place between 3 and 6 months after it is completed. The ALP blood test helps show how active the disease is, but research found that treating to keep ALP normal brought no extra benefit over treating symptoms. Treatment can be repeated when the effect wears off.",
    sections: [
      {
        heading: "Checking the response",
        paragraphs: [
          "An assessment of the response to treatment should take place between 3 and 6 months after the treatment has been completed.",
          "It can take several months for bisphosphonates to have their full effect. Zoledronate can help reduce pain for several years at a time, and treatment can be repeated when the effect starts to wear off.",
        ],
      },
      {
        heading: "What the ALP test shows",
        paragraphs: [
          "ALP is a blood test used to assess the activity of the disease. When Paget's disease is active, the ALP level will often, but not always, be raised.",
          "If total ALP is normal but Paget's disease is still strongly suspected, more specialised blood tests may be needed.",
        ],
      },
      {
        heading: "Treating the person, not the number",
        paragraphs: [
          "A large study called PRISM compared treating symptoms with giving enough bisphosphonate to keep ALP normal. Intensive treatment did not produce better results for fractures, hearing loss, bone pain or quality of life.",
          "The current guideline recommends treatment aimed at improving symptoms over treating to a target ALP level. Professor Stuart Ralston put it this way: doctors should be treating the patient, not simply the level of ALP.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "If you do not have any symptoms, your doctor may suggest keeping an eye on your condition and delaying treatment until any problems occur. Calcium and vitamin D help keep your bones healthy, and your GP may suggest supplements.",
          "Many people with Paget's disease have pain from other causes. It is important to have pain, especially new or increasing pain, assessed by your doctor.",
        ],
      },
    ],
    helps: [
      "Ask when your response to treatment will be assessed: between 3 and 6 months after treatment is the usual time.",
      "Tell your doctor if the pain returns, as treatment can be repeated when the effect starts to wear off.",
      "Have new or increasing pain assessed by your doctor.",
      "Get enough calcium and vitamin D. Your GP may suggest supplements.",
      "Make a list of questions to put to your healthcare professionals.",
    ],
    tryThisWeek: [
      "Ask when your review is due.",
      "Note if the pain comes back.",
      "Write a list of questions.",
    ],
    ask: "When will my response to treatment be checked, and what would make you repeat it?",
    interactive: {
      kind: "timeline",
      title: "After treatment",
      steps: [
        { id: "treated", when: "Treatment given", title: "A bisphosphonate", points: ["Usually one infusion of zoledronic acid.", "Calcium and vitamin D for several days, if advised."] },
        { id: "months", when: "The first months", title: "The full effect builds", points: ["It can take several months to feel the full benefit.", "Pain from active Paget's often responds within a few months."] },
        { id: "review", when: "3 to 6 months", title: "Response checked", points: ["An assessment of how well treatment worked.", "Treatment aims at symptoms, not just the ALP level."] },
        { id: "years", when: "Years later", title: "If pain returns", points: ["Relief can last several years at a time.", "Treatment can be repeated when the effect wears off."] },
      ],
    },
    sources: [PA_TREATMENT, NHS_TREATMENT, PA_PRISM, PA_DIAGNOSIS, PA_CLINICAL, PA_PAIN_CAUSES, PA_PAIN, PA_PAIN_MEDS],
    quiz: {
      question: "When should the response to treatment be assessed?",
      options: [{ text: "Between 3 and 6 months after treatment", right: true }, { text: "The next day" }, { text: "Only after ten years" }],
      why: "An assessment of the response to treatment should take place between 3 and 6 months after the treatment has been completed.",
    },
  },
  {
    id: "pag-activity",
    kicker: "Exercise",
    question: "How can I stay active safely with Paget's disease?",
    hook: "Strength and balance protect bones and help prevent falls. Extreme exercise is the one thing to talk over with your doctor first.",
    short: "Regular exercise is important: it keeps joints mobile, helps control weight and maintains muscle tone, which helps protect bones. Exercise that focuses on both strength and balance is most effective at preventing falls. Any extreme forms of exercise should only be done after talking to your doctor.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "Regular exercise helps keep the joints mobile, control weight and maintain muscle tone, which helps protect bones. The Paget's Association says the most effective exercise focuses on both strength and balance.",
          "To avoid excessive stress on bone affected by Paget's disease, any extreme forms of exercise should only be done after discussion with your doctor.",
        ],
      },
      {
        heading: "Check first",
        paragraphs: [
          "Speak to a GP first if you have not exercised for some time, or if you have medical conditions or concerns. Your doctor or physiotherapist can advise you on the different types of exercise and how to contact local services.",
          "Start slowly and gradually increase over time. Pain will not usually improve straight away, but if you keep exercising regularly, you may start to see improvements in your pain and other parts of your life.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "Adults aged 65 and over should aim to be physically active every day, even if it is just light activity, and to do activities that improve strength, balance and flexibility on at least 2 days a week.",
          "They should also aim for at least 150 minutes of moderate activity a week, such as walking for health or water aerobics, or 75 minutes of vigorous activity if already active. Break up long periods of sitting with some activity.",
        ],
      },
      {
        heading: "Simple balance moves",
        paragraphs: [
          "The NHS balance routine includes sideways walking, heel-to-toe walking and a one-leg stand. Do them near a wall or a stable chair in case you lose your balance, and try to do them at least twice a week.",
          "Activities such as walking, swimming and exercise classes can improve or maintain your fitness. Strength and balance exercises are often done as part of a group in the community.",
        ],
      },
      {
        heading: "Physiotherapy and aids",
        paragraphs: [
          "Physiotherapy can help reduce pain, improve movement, and reduce the risk of injury and falls. Your GP can refer you to a physiotherapist.",
          "Devices that reduce the weight placed on affected bones, such as a walking stick or frame, insoles or a spinal brace, may also help. The Royal Osteoporosis Society says balance exercises keep you steady, so you are less likely to fall over and break a bone.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor before any extreme forms of exercise.",
      "Speak to a GP first if you have not exercised for some time.",
      "Start slowly and build up gradually over time.",
      "Do activities that improve strength, balance and flexibility on at least 2 days a week.",
      "Do balance exercises near a wall or a stable chair, in case you lose your balance.",
      "Ask your GP to refer you to a physiotherapist.",
    ],
    tryThisWeek: [
      "Check with your GP before starting.",
      "Do strength and balance on 2 days.",
      "Use a wall or chair for balance work.",
    ],
    ask: "Which kinds of exercise are safe for the bones I have affected, and could I see a physiotherapist?",
    interactive: {
      kind: "flip-cards",
      title: "Balance moves from the NHS",
      intro: "Check with your GP or physiotherapist first. Turn each card to see how the NHS describes it.",
      cards: [
        { id: "sideways", front: "Sideways walking", when: "Across the room", back: "Feet together, knees slightly bent. Step sideways slowly, then bring the other foot to join it. 10 steps each way." },
        { id: "grapevine", front: "Simple grapevine", when: "Fingers on a wall if needed", back: "Walk sideways by crossing one foot over the other, then bring the other foot to join it. 5 cross-steps each side." },
        { id: "heel-toe", front: "Heel-to-toe walk", when: "Fingers on a wall if needed", back: "Put one heel directly in front of the other foot's toes, then repeat, looking forward. At least 5 steps." },
        { id: "one-leg", front: "One-leg stand", when: "Facing a wall, fingertips on it", back: "Lift one leg, keeping your hips level. Hold for 5 to 10 seconds, and do 3 on each side." },
        { id: "step-up", front: "Step-up", when: "A step with a rail or near a wall", back: "Step up with one leg, bring the other to join it, then step down slowly. Up to 5 steps with each leg." },
      ],
    },
    sources: [PA_ELSE, PA_DRUG_FREE, NHS_ACTIVITY, NHS_BALANCE, NHS_TREATMENT, ROS_EXERCISE],
    quiz: {
      question: "What does the Paget's Association say about extreme forms of exercise?",
      options: [{ text: "Discuss them with your doctor first", right: true }, { text: "They strengthen affected bone" }, { text: "They suit everyone with Paget's" }],
      why: "To avoid excessive stress on bone affected by Paget's disease, any extreme forms of exercise should only be done after discussion with your doctor.",
    },
  },
  {
    id: "pag-hearing",
    kicker: "Hearing",
    question: "How can Paget's disease affect hearing?",
    hook: "When the skull is affected, hearing loss and ringing in the ears can follow. Getting help early makes both easier to manage.",
    short: "If Paget's disease affects the skull, there is a risk of permanent hearing loss and possibly total deafness, from damage to the bones or nerves that connect the ears to the brain. Tinnitus can also occur. It is not known whether treatment reduces the risk, but treatment is usually recommended when the skull is affected.",
    sections: [
      {
        heading: "Why the skull matters",
        paragraphs: [
          "If Paget's disease affects the skull, it could lead to permanent hearing loss and possibly total deafness. This can happen as a result of damage to the bones or nerves that connect the ears to the brain.",
          "Ringing in the ears, called tinnitus, a wider forehead and an enlarged head are other possible signs of Paget's disease in the skull. Headaches and vertigo, a spinning sensation, can also occur.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "It is not known whether treating Paget's disease helps reduce the risk of losing your hearing, but treatment is usually recommended if the condition is affecting your skull.",
          "If you have permanent hearing loss, a specialist will often recommend hearing aids. These will not make your hearing perfect, but they make sounds louder and clearer.",
        ],
      },
      {
        heading: "Getting your hearing checked",
        paragraphs: [
          "See a GP if you think your hearing is getting gradually worse. You can also sometimes get a free hearing test at some pharmacies and opticians.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you have sudden hearing loss in 1 or both ears, or your hearing has been getting worse over the last few days or weeks.",
        ],
      },
      {
        heading: "Living with tinnitus",
        paragraphs: [
          "Managing tinnitus can be easier if help is given early. Your GP may refer you to an ear, nose and throat specialist or a special tinnitus clinic.",
          "Soft background sounds, a regular relaxation routine and a good sleep routine can help. Avoid loud noise, which can make tinnitus worse, and wear ear protectors in noisy places.",
        ],
      },
      {
        heading: "Urgent signs",
        paragraphs: [
          "Ask for an urgent GP appointment if you have tinnitus that beats in time with your pulse.",
          "Go to A&E or call 999 if you have tinnitus after a head injury, or tinnitus with sudden hearing loss, weakness in the muscles of your face, or a spinning sensation.",
        ],
      },
    ],
    helps: [
      "See a GP if you think your hearing is getting gradually worse.",
      "Reduce background noise, and face people when they are talking to you.",
      "Ask a GP or specialist about devices such as telephone and television amplifiers or flashing or vibrating alarms.",
      "Do not have total silence: soft music or sounds may distract you from tinnitus.",
      "Contact the Tinnitus UK helpline free on 0800 018 0527.",
    ],
    tryThisWeek: [
      "Book a hearing check if it is fading.",
      "Face people when they talk.",
      "Try soft background sound.",
    ],
    ask: "Is my skull affected, and should I have treatment and a hearing test?",
    interactive: {
      kind: "scenarios",
      title: "Ears and Paget's disease",
      scenarios: [
        {
          id: "gradual",
          situation: "Your hearing seems to be slowly getting worse.",
          options: [{ text: "See a GP", best: true }, { text: "Wait for your next Paget's review" }],
          why: "See a GP if you think your hearing is getting gradually worse.",
        },
        {
          id: "sudden",
          situation: "You wake with sudden hearing loss in one ear.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait a few weeks" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you have sudden hearing loss in 1 or both ears.",
        },
        {
          id: "pulse",
          situation: "The ringing in your ears beats in time with your pulse.",
          options: [{ text: "Ask for an urgent GP appointment", best: true }, { text: "Ignore it" }],
          why: "Ask for an urgent GP appointment if you have tinnitus that beats in time with your pulse.",
        },
        {
          id: "face",
          situation: "Tinnitus comes with sudden face weakness and a spinning feeling.",
          options: [{ text: "Go to A&E or call 999", best: true }, { text: "Book a routine appointment" }],
          why: "Go to A&E or call 999 if you have tinnitus with sudden hearing loss, weakness in the muscles of your face, or a spinning sensation.",
        },
      ],
    },
    sources: [NHS_COMPLICATIONS, PA_SYMPTOMS, NHS_SYMPTOMS, NHS_HEARING, PA_TINNITUS, NHS_TINNITUS, PA_PRESENTATION],
    quiz: {
      question: "When is treatment usually recommended to protect hearing?",
      options: [{ text: "When the condition is affecting the skull", right: true }, { text: "Only after total deafness" }, { text: "Never" }],
      why: "Treatment is usually recommended if the condition is affecting your skull.",
    },
  },
  {
    id: "pag-family",
    kicker: "Family",
    question: "Does Paget's disease run in families?",
    hook: "The children of someone with Paget's disease are about seven times more likely to develop it. A gene called SQSTM1 is part of the reason.",
    short: "A family history raises the risk of Paget's disease. The Paget's Association says the children of people with Paget's disease are about seven times more likely to develop it than people without a family history. Genetic tests have been developed, but they are not widely available in routine care.",
    sections: [
      {
        heading: "Genes play a part",
        paragraphs: [
          "You are at a higher risk if you have a family history of Paget's disease of bone. You may inherit a genetic fault that means you are much more likely to develop the condition.",
          "The most important gene is called sequestosome 1, or SQSTM1. Changes in it have been found in 40% to 50% of people with a family history of Paget's disease, and in 5% to 10% of people without one.",
        ],
      },
      {
        heading: "Not only genes",
        paragraphs: [
          "It is generally believed to be due to a combination of genetic and environmental influences. Over recent decades it has become less common and less severe in many countries, most of all in the UK, which suggests the environment plays a role.",
          "Research funded by the Paget's Association found that about one in eight people with Paget's disease have a family history of it.",
        ],
      },
      {
        heading: "What it means for children",
        paragraphs: [
          "The children of people with Paget's disease are about seven times more likely to develop it than people who do not have a family history.",
          "Because we do not know exactly what triggers it, we do not know how people who are predisposed can avoid it. General advice for everyone is a healthy lifestyle, with a healthy diet, regular exercise and a healthy weight.",
        ],
      },
      {
        heading: "Testing and research",
        paragraphs: [
          "Genetic tests have been developed that can help assess someone's risk. They are not widely available in routine clinical practice, but some specialist research centres can perform them.",
          "A study called ZiPP offered gene testing to people with a family history of Paget's disease. The researchers concluded that testing plus a bone scan can detect early Paget's disease, and that zoledronic acid can favourably change how it develops.",
        ],
      },
    ],
    helps: [
      "Tell your GP about any history of Paget's disease in your family.",
      "Anyone concerned that they may have Paget's disease can see their GP, who will assess symptoms and may carry out blood tests.",
      "Try to lead a healthy lifestyle: a healthy diet, regular exercise and a healthy weight.",
      "Contact the Paget's Nurse Helpline with questions about Paget's disease in your family.",
    ],
    tryThisWeek: [
      "Mention family history to your GP.",
      "Keep to a healthy lifestyle.",
      "Call the helpline with family questions.",
    ],
    ask: "Should my children or brothers and sisters be checked, and is genetic testing available to us?",
    interactive: {
      kind: "risk-check",
      title: "What is known about the risk",
      intro: "Tick any that apply. Most of these you cannot change.",
      items: [
        { id: "parent", label: "A parent with Paget's disease", note: "Children of people with it are about seven times more likely to develop it.", changeable: false },
        { id: "age", label: "Being over 50", note: "It is rare in people under 50, and most people are over 50 when diagnosed.", changeable: false },
        { id: "man", label: "Being a man", note: "It is more common in men than women.", changeable: false },
        { id: "north-west", label: "Living in north-west England", note: "Research found it remains more common there than in other parts of the UK.", changeable: false },
        { id: "lifestyle", label: "An unhealthy lifestyle", note: "No one knows how to avoid it, but a healthy diet, exercise and weight are advised for everyone.", changeable: true },
      ],
    },
    sources: [NHS_PAGET, PA_CAUSES, PA_DECLINE, PA_ZIPP, PA_DIAGNOSIS, PA_HELPLINE, PA_QUESTIONS],
    quiz: {
      question: "How much more likely are the children of people with Paget's disease to develop it?",
      options: [{ text: "About seven times", right: true }, { text: "Twice as likely" }, { text: "No more likely" }],
      why: "The children of people with Paget's disease are about seven times more likely to develop it than people who do not have a family history.",
    },
  },
  {
    id: "pag-support",
    kicker: "Support",
    question: "Where can I get support and information?",
    hook: "A nurse helpline, support groups on Zoom, a buddy scheme and specialist centres. Nobody has to work it out alone.",
    short: "The Paget's Association is a national UK charity for everyone affected by Paget's disease of bone. It runs a Nurse Helpline, virtual support groups, a buddy scheme and free information events, and it recognises specialist Centres of Excellence. Doctors, nurses, pharmacists and therapists can all help too.",
    sections: [
      {
        heading: "The Nurse Helpline",
        paragraphs: [
          "The Paget's Association's Nurse Helpline is for anyone to ask questions about Paget's disease. An experienced registered nurse manages it, and it is available during office hours.",
          "You can call 0161 799 4646 in UK office hours, or use the contact form on its website. Advice given is general and does not replace that of the professionals caring for you. If you have an urgent problem, contact your GP, hospital or pharmacist.",
        ],
      },
      {
        heading: "Talking to others",
        paragraphs: [
          "Virtual support groups meet on Zoom every two months, for about an hour, and people are welcome wherever they live. The Paget's Buddy scheme offers one-to-one support between members.",
          "There is also a Facebook support group. Free information events, held in different parts of the UK each year, let you speak with experts, hear specialist talks and meet others with the same condition.",
        ],
      },
      {
        heading: "Specialist care",
        paragraphs: [
          "Many rheumatologists and endocrinologists can treat Paget's disease, and most hospitals in the UK are likely to have a specialist. If there is no specialist locally, referral to a Paget's Association Centre of Excellence might be beneficial.",
          "Doctors, nurses, pharmacists, physiotherapists and occupational therapists can all provide information and support. In the case of severe, persistent pain, a pain clinic may be considered.",
        ],
      },
      {
        heading: "Reading and watching",
        paragraphs: [
          "The Paget's Association has booklets on the facts, the tests, pain and orthopaedic surgery, and a jargon buster to explain the words used about care and treatment.",
          "Its information videos include people describing their own journey to diagnosis and treatment.",
        ],
      },
      {
        heading: "Everyday life",
        paragraphs: [
          "Occupational therapists can help with everyday tasks and special equipment like mobility aids, and can help adapt homes. Your GP can refer you to a physiotherapist.",
          "Pain can make you tired, anxious and depressed. In a Paget's Association survey, 2 in 3 people said bone pain affected their mental health. Do not be frightened to ask for help when you need it.",
        ],
      },
    ],
    helps: [
      "Call the Paget's Nurse Helpline on 0161 799 4646 in UK office hours.",
      "Join a virtual support group, or ask to be matched with a Paget's Buddy.",
      "Look for a free Paget's information event near you.",
      "Ask about referral to a specialist, or to a Centre of Excellence if there is none locally.",
      "If you have an urgent problem, contact your GP, hospital or pharmacist.",
    ],
    tryThisWeek: [
      "Save the helpline number.",
      "Look up the next support group.",
      "Check for an event near you.",
    ],
    ask: "Is there a specialist or metabolic bone clinic near me, or should I be referred to a Centre of Excellence?",
    interactive: {
      kind: "flip-cards",
      title: "Where help comes from",
      intro: "Turn each card to see what each kind of support offers.",
      cards: [
        { id: "helpline", front: "Nurse Helpline", when: "Questions on any part of Paget's", back: "Run by an experienced registered nurse in office hours, on 0161 799 4646. For urgent problems: your GP, hospital or pharmacist." },
        { id: "groups", front: "Virtual support groups", when: "Every two months, on Zoom", back: "Meetings of about an hour to share information, make friends and support each other." },
        { id: "buddy", front: "Paget's Buddies", when: "One-to-one, between members", back: "Someone else with Paget's disease to talk to. No medical knowledge is needed to be a buddy." },
        { id: "events", front: "Information events", when: "In different parts of the UK each year", back: "Free events to speak with experts, hear specialist talks and meet others with the condition." },
        { id: "centres", front: "Centres of Excellence", when: "If there is no specialist locally", back: "NHS hospital departments recognised for their expertise in managing Paget's disease and for research." },
      ],
    },
    sources: [PA_HELPLINE, PA_TALK, PA_EVENTS, PA_DIAGNOSIS, PA_PAIN, PA_BOOKLETS, PA_VIDEOS, PA_ELSE, PA_DRUG_FREE, PA_CENTRES, PA_PAGETALERT],
    quiz: {
      question: "How often do the Paget's Association's virtual support groups meet?",
      options: [{ text: "Every two months", right: true }, { text: "Every day" }, { text: "Once every five years" }],
      why: "Virtual support groups meet on Zoom every two months, for about an hour.",
    },
  },
];
