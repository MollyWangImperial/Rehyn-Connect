import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Psoriatic arthritis page's pieces (content/library-conditions/body-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, the
// Psoriasis and Psoriatic Arthritis Alliance (PAPAA), Arthritis UK (the charity formerly called Versus Arthritis;
// versusarthritis.org now redirects to arthritis-uk.org), Psoriasis UK (psoriasisuk.org.uk, the charity the NHS
// psoriasis page links to) and the government's pages on Access to Work, reasonable adjustments and the Equality
// Act. General information only; it never replaces what a person's own rheumatology or skin team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const papaa = (label: string, path: string): LearnSource => ({ label: `PAPAA: ${label}`, url: `https://www.papaa.org/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const psuk = (label: string, path: string): LearnSource => ({ label: `Psoriasis UK: ${label}`, url: `https://psoriasisuk.org.uk/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_PSA = nhs("Psoriatic arthritis", "conditions/psoriatic-arthritis/");
const NHS_PSORIASIS = nhs("Psoriasis", "conditions/psoriasis/");
const NHS_UVEITIS = nhs("Uveitis", "conditions/uveitis/");
const NHS_MTX_ABOUT = nhs("About methotrexate", "medicines/methotrexate/about-methotrexate/");
const NHS_MTX_HOW = nhs("How and when to take methotrexate", "medicines/methotrexate/how-and-when-to-take-methotrexate/");
const NHS_NSAIDS = nhs("NSAIDs", "medicines/nsaids/");
const NHS_HEART_ATTACK = nhs("Heart attack", "conditions/heart-attack/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");

const PAPAA_WHAT = papaa("What is psoriatic arthritis?", "resources/learn-about-psoriasis-and-psoriatic-arthritis/just-diagnosed/what-is-psoriatic-arthritis/");
const PAPAA_GUIDE = papaa("A guide to psoriatic arthritis", "resources/learn-about-psoriasis-and-psoriatic-arthritis/common-questions/a-guide-to-psoriatic-arthritis/");
const PAPAA_STATS = papaa("Psoriasis and psoriatic arthritis statistics", "resources/learn-about-psoriasis-and-psoriatic-arthritis/common-questions/psoriasis-and-psoriatic-arthritis-statistics/");
const PAPAA_DIAGNOSIS = papaa("Getting a diagnosis", "resources/symptom-checker/getting-a-diagnosis/");
const PAPAA_TESTS = papaa("Tests and terminology in psoriatic arthritis", "resources/knowledge-bank/tests-and-terminology-in-psoriatic-arthritis/");
const PAPAA_MANAGEMENT = papaa("Psoriatic arthritis: management", "resources/psoriatic-disease-unlocked/psoriatic-arthritis-management/");
const PAPAA_FATIGUE = papaa("Psoriatic fatigue", "resources/psoriatic-disease-unlocked/psoriatic-fatigue/");
const PAPAA_HEART = papaa("Psoriasis and the heart", "resources/psoriatic-disease-unlocked/psoriasis-and-the-heart/");
const PAPAA_ACTIVE = papaa("Physiotherapy and exercise: psoriatic arthritis", "coping/keeping-active/");
const PAPAA_OT = papaa("Occupational therapy and psoriatic arthritis", "coping/practical-help-to-manage-daily-living-skills/");
const PAPAA_NSAIDS = papaa("Psoriasis, ibuprofen and NSAIDs", "resources/knowledge-bank/articles-and-resources/psoriasis-ibuprofen-and-nsaids/");

const AUK_PSA = auk("Psoriatic arthritis", "understanding-arthritis/conditions/psoriatic-arthritis/");
const AUK_MYTHS: LearnSource = { label: "Arthritis UK: Busting the myths of psoriatic arthritis", url: "https://www.arthritis-uk.org/news/2020/december/busting-the-myths-of-psoriatic-arthritis/" };
const AUK_STRESS = auk("Stress and arthritis", "living-with-arthritis/emotions-and-relationships/stress-and-arthritis/");
const AUK_DMARDS = auk("Disease-modifying anti-rheumatic drugs (DMARDs)", "understanding-arthritis/arthritis-treatments/drugs/disease-modifying-anti-rheumatic-drugs-dmards/");
const AUK_MTX = auk("Methotrexate", "understanding-arthritis/arthritis-treatments/drugs/methotrexate/");
const AUK_SULFA = auk("Sulfasalazine", "understanding-arthritis/arthritis-treatments/drugs/sulfasalazine/");
const AUK_LEFLUNOMIDE = auk("Leflunomide", "understanding-arthritis/arthritis-treatments/drugs/leflunomide/");
const AUK_ADALIMUMAB = auk("Adalimumab", "understanding-arthritis/arthritis-treatments/drugs/adalimumab/");
const AUK_SECUKINUMAB = auk("Secukinumab", "understanding-arthritis/arthritis-treatments/drugs/secukinumab/");
const AUK_USTEKINUMAB = auk("Ustekinumab", "understanding-arthritis/arthritis-treatments/drugs/ustekinumab/");
const AUK_APREMILAST = auk("Apremilast", "understanding-arthritis/arthritis-treatments/drugs/apremilast/");
const AUK_TOFACITINIB = auk("Tofacitinib", "understanding-arthritis/arthritis-treatments/drugs/tofacitinib/");
const AUK_PAINKILLERS = auk("Painkillers and NSAIDs", "understanding-arthritis/arthritis-treatments/drugs/painkillers-and-nsaids/");
const AUK_STEROID_INJECTIONS = auk("Steroid injections", "understanding-arthritis/arthritis-treatments/drugs/steroid-injections/");
const AUK_FATIGUE = auk("Coping with and managing arthritis fatigue", "understanding-arthritis/managing-arthritis-symptoms/managing-fatigue/");
const AUK_FATIGUE_TIPS = auk("Self-help tips to fight fatigue", "understanding-arthritis/managing-arthritis-symptoms/managing-fatigue/self-help-tips-to-fight-fatigue/");
const AUK_4PS = auk("The 4 Ps: strategies you can use to cope with fatigue", "understanding-arthritis/managing-arthritis-symptoms/managing-fatigue/the-4-ps-strategies-you-can-use-to-cope-with-fatigue/");
const AUK_GETTING_STARTED = auk("Getting started with exercise", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/getting-started-with-exercise/");
const AUK_DISCLOSING = auk("Disclosing your condition", "living-with-arthritis/work-benefits-and-finances/work-and-arthritis/disclosing-your-condition/");
const AUK_ADJUSTMENTS = auk("Applying for reasonable adjustments", "living-with-arthritis/work-benefits-and-finances/work-and-arthritis/applying-for-reasonable-adjustments/");

const PSUK_PSA = psuk("About psoriatic arthritis", "about-psoriatic-arthritis");
const PSUK_EMOLLIENTS = psuk("Moisturisers and emollients", "moisturisers-and-emollients");
const PSUK_VITD = psuk("Vitamin D based topicals", "vitamin-d-based-topicals");
const PSUK_STEROIDS = psuk("Topical steroids", "topical-steroids");
const PSUK_UV = psuk("Ultraviolet light therapy", "uv-light-therapy");

const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");
const GOV_ATW_ELIGIBILITY = gov("Access to Work: eligibility", "access-to-work/eligibility");
const GOV_ADJUSTMENTS = gov("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");
const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");

export const psaAnswers: LearnArticle[] = [
  {
    id: "psa-what-it-is",
    kicker: "Understanding",
    question: "What is psoriatic arthritis?",
    hook: "A joint condition linked to the skin condition psoriasis. The immune system attacks healthy tissue, and joints, tendons and nails can all be affected.",
    short: "Psoriatic arthritis is a long-term condition that causes joint pain, swelling and stiffness. It affects about 1 in 4 people who have the skin condition psoriasis, and like psoriasis it is caused by the immune system attacking healthy tissue. There is no cure, but many effective treatments exist, and starting early gives the best chance of keeping it under control.",
    sections: [
      {
        heading: "Linked to psoriasis",
        paragraphs: [
          "Psoriatic arthritis is a long-term condition that causes joint pain, swelling and stiffness. It affects about 1 in 4 people who already have the skin condition psoriasis, which causes patches of red, flaky skin.",
          "In around 8 out of 10 people, the arthritis develops after the psoriasis appears. Some people develop psoriatic arthritis before the psoriasis is even present, and in rare cases people never have any noticeable patches of psoriasis.",
        ],
      },
      {
        heading: "An immune condition",
        paragraphs: [
          "Like psoriasis, psoriatic arthritis is caused by the immune system attacking healthy tissue. The immune system usually protects us from illness and infection, but in autoimmune conditions it becomes confused and attacks healthy parts of the body, often causing inflammation.",
          "Inside a joint, a lining called the synovium becomes inflamed and releases more fluid than normal, so the joint becomes tender and swollen. Persistent inflammation may damage the cartilage and wear away the bone underneath.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "It may come on at any age, and men and women are equally affected. About 325,000 people in the UK have psoriatic arthritis.",
          "Genes play a part: 2 out of 5 people with psoriasis or psoriatic arthritis have a close relative with the condition. In people whose genes put them at risk, an infection, an accident or injury, being overweight or smoking may then trigger it.",
          "Psoriasis and psoriatic arthritis are not contagious, so you cannot catch them from someone else.",
        ],
      },
      {
        heading: "How it differs from other arthritis",
        paragraphs: [
          "Psoriatic arthritis is most commonly asymmetric, unlike rheumatoid arthritis, which is symmetrical. It may affect just a small number of joints or many joints.",
          "People with psoriasis are as likely as anyone else to get other types of arthritis, such as osteoarthritis or rheumatoid arthritis. These conditions are not linked to psoriasis.",
        ],
      },
      {
        heading: "Why early treatment matters",
        paragraphs: [
          "Psoriatic arthritis can cause long-term damage to joints, bones and other tissue, especially if it is not treated. Starting the right treatment as soon as possible gives the best chance of keeping your arthritis under control.",
          "Although it cannot be cured at present, many effective treatments exist. Only a small minority of people go on to develop severe and widespread joint damage.",
        ],
      },
    ],
    helps: [
      "See a GP if you have joint pain, stiffness and swelling that keeps coming back, even if you do not have psoriasis.",
      "Tell the doctor if you have psoriasis, no matter how small the patch, as it can be an important clue.",
      "Tell your doctor about any history of psoriasis or psoriatic arthritis in your family.",
      "Do not smoke, because it can make symptoms of psoriatic arthritis worse.",
      "Exercise regularly: low impact exercises like swimming, walking and yoga can help strengthen and protect your joints.",
    ],
    tryThisWeek: [
      "See a GP about joint symptoms.",
      "Mention any psoriasis, however small.",
      "Note any family history.",
    ],
    ask: "Is this psoriatic arthritis, and how active is it?",
    interactive: {
      kind: "risk-check",
      title: "What raises the chance?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "psoriasis", label: "Having psoriasis", note: "About 1 in 4 people who already have psoriasis develop psoriatic arthritis.", changeable: false },
        { id: "family", label: "A close relative with it", note: "2 out of 5 people with psoriasis or psoriatic arthritis have a close relative with the condition.", changeable: false },
        { id: "infection", label: "An infection", note: "In people whose genes put them at risk, an infection may trigger it.", changeable: false },
        { id: "injury", label: "An accident or injury", note: "In people whose genes put them at risk, an accident or injury may trigger it.", changeable: false },
        { id: "weight", label: "Being overweight", note: "Being overweight is now understood to be linked to developing psoriatic arthritis.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Smoking may trigger it in people at risk, and can make symptoms worse.", changeable: true },
      ],
    },
    sources: [NHS_PSA, AUK_PSA, PAPAA_WHAT, PAPAA_STATS, PAPAA_GUIDE],
    quiz: {
      question: "What causes psoriatic arthritis?",
      options: [{ text: "The immune system attacking healthy tissue", right: true }, { text: "Catching it from someone with psoriasis" }, { text: "Years of wear and tear" }],
      why: "Like psoriasis, psoriatic arthritis is caused by the immune system attacking healthy tissue.",
    },
  },
  {
    id: "psa-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of psoriatic arthritis?",
    hook: "Not just sore joints. Swollen fingers or toes, heel pain, pitted nails and deep tiredness can all be part of it.",
    short: "Psoriatic arthritis causes pain, swelling and stiffness in one or more joints, often worse in the morning and better with exercise. It can also inflame the places where tendons attach to bone, swell a whole finger or toe, change the nails and cause fatigue. A red, painful eye needs urgent attention.",
    sections: [
      {
        heading: "Joints",
        paragraphs: [
          "Symptoms include pain, swelling and stiffness in 1 or more joints. The stiffness feels worse when you get up after a rest and lasts longer than 30 minutes.",
          "Symptoms can be worse first thing in the morning and may improve with exercise. Any joint can be affected, and it can affect the hands, feet, knees, neck and lower back.",
        ],
      },
      {
        heading: "Tendons, heels and sausage fingers",
        paragraphs: [
          "Psoriatic arthritis can inflame the entheses, the connective tissue that attaches tendons and ligaments to the bones. This is called enthesitis, and it commonly affects the back of the heel or the bottom of the foot near the heel, which can make standing or walking difficult.",
          "A whole finger or toe can swell up, which is called dactylitis, or sausage digit. It most commonly affects one or two fingers or toes at a time.",
        ],
      },
      {
        heading: "Nails and skin",
        paragraphs: [
          "The nails can develop small round dents, called pitting, change colour, become thicker or lift away from the finger. Nail changes are found in around 4 out of 5 people with psoriatic arthritis, compared with only about 2 out of 5 with psoriasis alone.",
          "Some people get symptoms of psoriasis, such as dry scaly skin, at the same time. There is no link between how severe the skin psoriasis is and how severe the arthritis is.",
        ],
      },
      {
        heading: "Tiredness, and pains that move",
        paragraphs: [
          "Psoriatic arthritis can cause fatigue, which is severe and persistent tiredness that does not get better with rest. Living with it can take a toll on your mental health too.",
          "Psoriatic arthritis can wax and wane, so by the time you see the doctor a nagging pain could have moved to another joint. PAPAA suggests keeping a note of your symptoms, aches and pains for a short while, then going to your GP.",
        ],
      },
      {
        heading: "Eyes: get help quickly",
        paragraphs: [
          "Some people develop uveitis, an inflammation inside the eye that can permanently damage eyesight if left untreated. Symptoms can include eye pain, red eyes, blurred vision and sensitivity to light.",
          "Arthritis UK says to seek urgent medical attention if one or both of your eyes are red and painful, particularly if you have a change in your vision. You could go to your GP, an eye hospital or your local A&E department.",
          "The NHS says to ask for an urgent GP appointment or get help from NHS 111 for pain in your eyes, sensitivity to light, changes in your vision or very red eyes. Go to A&E or call 999 if you cannot see.",
        ],
      },
    ],
    helps: [
      "See a GP if you have joint pain, stiffness and swelling that keeps coming back.",
      "Keep a note of your symptoms, aches and pains for a short while, then go to your GP.",
      "Tell the doctor if you have psoriasis, no matter how small the patch.",
      "Seek urgent medical attention for a red, painful eye: your GP, an eye hospital or A&E.",
      "Go to A&E or call 999 if you cannot see.",
    ],
    tryThisWeek: [
      "Note your aches and pains.",
      "Mention any psoriasis, however small.",
      "Get a red, painful eye checked urgently.",
    ],
    ask: "Are my nails, heels or swollen fingers part of my psoriatic arthritis?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick any you have noticed. Taking the list to your GP or rheumatology team can help.",
      signs: [
        "Pain, swelling or stiffness in a joint",
        "Stiffness after rest lasting over 30 minutes",
        "A whole finger or toe swollen",
        "Pain at the back or bottom of the heel",
        "Pitted, thicker or lifting nails",
        "Patches of dry, scaly skin",
        "Tiredness that rest does not ease",
        "A red, painful eye",
      ],
      after: "Tell your GP or rheumatology team. A red, painful eye needs urgent attention: your GP, an eye hospital or A&E, and call 999 if you cannot see.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_PSA, AUK_PSA, PAPAA_WHAT, PAPAA_GUIDE, NHS_UVEITIS],
    quiz: {
      question: "What is dactylitis?",
      options: [{ text: "A whole finger or toe swelling up", right: true }, { text: "A rash on the elbows" }, { text: "Pain that only affects the knees" }],
      why: "A whole finger or toe can swell up, which is called dactylitis, or sausage digit.",
    },
  },
  {
    id: "psa-diagnosis",
    kicker: "Diagnosis",
    question: "How is psoriatic arthritis diagnosed?",
    hook: "There is no single test. A rheumatologist pieces together your skin, nails, joints, blood tests and scans.",
    short: "There is no specific test for psoriatic arthritis. If a GP thinks you may have it, they will refer you to a rheumatologist, who makes the diagnosis from your symptoms and an examination, with help from blood tests and scans such as X-rays, ultrasound and MRI. Mentioning any psoriasis, in you or your family, is an important clue.",
    sections: [
      {
        heading: "Starting with the GP",
        paragraphs: [
          "See a GP if you have joint pain, stiffness and swelling that keeps coming back, even if you do not have psoriasis. If the GP thinks you may have psoriatic arthritis, they will refer you to a specialist called a rheumatologist.",
          "Many people are diagnosed later than they might be, because psoriatic arthritis is not always simple or obvious to diagnose. The earlier the diagnosis, the better to prevent any unnecessary joint damage.",
        ],
      },
      {
        heading: "No single test",
        paragraphs: [
          "There is no specific test for psoriatic arthritis, so a diagnosis is made from your symptoms and a physical examination. It can sometimes be difficult to tell apart from rheumatoid arthritis, osteoarthritis and gout.",
          "Clues include psoriasis in you or a close relative, swollen fingers or toes, nail changes, and stiffness in the morning that improves on movement. PAPAA says symptoms often start between 20 and 30 years of age.",
        ],
      },
      {
        heading: "Blood tests",
        paragraphs: [
          "Blood tests for rheumatoid factor and the anti-CCP antibody can help. People with psoriatic arthritis tend not to have these antibodies, while people with rheumatoid arthritis are more likely to test positive.",
          "Blood tests of general inflammation, such as ESR and CRP, are often raised. But CRP may stay normal even when some small joints are painful and a little swollen.",
          "You may also have a joint fluid test, where fluid is removed from an affected joint and tested.",
        ],
      },
      {
        heading: "Scans",
        paragraphs: [
          "X-rays of your back, hands and feet may help, because psoriatic arthritis can affect these parts of the body in a different way to other conditions. Ultrasound and MRI scans may help to confirm the diagnosis.",
          "Scans can often show inflammation, or areas of new bone growth with poorly defined edges, in people with psoriatic arthritis.",
        ],
      },
      {
        heading: "After the diagnosis",
        paragraphs: [
          "You are likely to see a team. A rheumatologist is usually responsible for your overall care, a specialist nurse may help monitor your treatment, and a dermatologist may treat your psoriasis.",
          "You can expect regular blood tests to check inflammation and the effect of your treatment. X-rays will be taken from time to time, and you may also have ultrasound and MRI scans.",
        ],
      },
    ],
    helps: [
      "See a GP even if you do not have psoriasis: joint pain, stiffness and swelling that keeps coming back needs to be checked.",
      "Tell the doctor if you have psoriasis, no matter how small the patch.",
      "Tell your doctor about any history of psoriasis or psoriatic arthritis in your family.",
      "If a dermatologist sees you for your skin, mention any aches and pains at your visits.",
      "Check with your doctor when you are likely to get your results.",
    ],
    tryThisWeek: [
      "List your aches and pains.",
      "Mention any psoriasis, however small.",
      "Ask when results will be ready.",
    ],
    ask: "Which tests point to psoriatic arthritis for me, and what did they show?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "antibodies", front: "Rheumatoid factor and anti-CCP", when: "Blood tests for antibodies", back: "Usually negative in psoriatic arthritis, and more often positive in rheumatoid arthritis." },
        { id: "inflammation", front: "ESR and CRP", when: "Blood tests for inflammation", back: "Often raised, but CRP can stay normal even with some painful, swollen small joints." },
        { id: "fluid", front: "Joint fluid test", when: "From an affected joint", back: "Fluid is removed from an affected joint and tested." },
        { id: "xray", front: "X-rays", when: "Of the back, hands and feet", back: "Psoriatic arthritis can affect these parts of the body in a different way to other conditions." },
        { id: "scans", front: "Ultrasound and MRI", when: "To help confirm the diagnosis", back: "Can show inflammation, or new bone growth with poorly defined edges." },
      ],
    },
    sources: [NHS_PSA, AUK_PSA, PAPAA_GUIDE, PAPAA_DIAGNOSIS, PAPAA_TESTS, PSUK_PSA],
    quiz: {
      question: "Is there one test that proves psoriatic arthritis?",
      options: [{ text: "No, the diagnosis puts several things together", right: true }, { text: "Yes, a rheumatoid factor blood test" }, { text: "Yes, a single X-ray" }],
      why: "There is no specific test for psoriatic arthritis, so a diagnosis is made from your symptoms and a physical examination.",
    },
  },
  {
    id: "psa-flares",
    kicker: "Flares",
    question: "What sets off a flare, and what helps?",
    hook: "Psoriatic arthritis comes and goes. Stress can stir it up, and rest, cold packs and gentle movement help a hot joint settle.",
    short: "Psoriatic arthritis waxes and wanes, with flares of active disease that then settle. Some research suggests stress may worsen arthritis symptoms or even cause flare-ups, and skin psoriasis has its own triggers. A severely inflamed joint is best treated with a period of rest followed by exercise, and if a medicine is not helping, tell your doctor.",
    sections: [
      {
        heading: "Comes and goes",
        paragraphs: [
          "Psoriatic arthritis is a chronic condition that can flare and go into remission: it gets worse, then better, then worse again. Episodes of flare then settle of their own accord.",
          "It can vary from person to person. For some people the condition may be mild, while others may have flares, severe symptoms and chronic fatigue.",
        ],
      },
      {
        heading: "What can set it off",
        paragraphs: [
          "Some research suggests that stress may worsen arthritis symptoms or even cause flare-ups. Long periods of stress can make inflammation and pain worse.",
          "Things that can make skin psoriasis worse include stress, drinking alcohol or smoking, certain medicines, infections, cuts or grazes on the skin, and sunlight. Some people find that when their psoriasis is bad their arthritis is also bad, and as one improves, so does the other.",
          "Steroid treatment can play a part too. There is a risk that psoriasis gets worse when steroid tablets or a steroid injection into a muscle wear off.",
        ],
      },
      {
        heading: "Calming a hot joint",
        paragraphs: [
          "A severely inflamed joint should be treated with a period of rest followed by exercise, under medical supervision.",
          "Ice packs can help reduce the heat and swelling in an inflamed joint. PAPAA suggests about ten minutes every two hours, never directly on the skin, and checking with your doctor first if you have poor circulation.",
          "On days when your joints are swollen or painful, move them through as great a range as you can without aggravating your pain. Heat, such as a hot bath or shower, can relieve morning stiffness.",
        ],
      },
      {
        heading: "Easing stress",
        paragraphs: [
          "Relaxation techniques, like mindfulness or deep breathing, can be calming when you are feeling stressed. Being flexible and adapting plans when you are in pain or tired can reduce feelings of stress.",
          "A good night's sleep can help you manage pain and boost your mood. Arthritis UK suggests a regular bedtime routine, avoiding caffeine after lunchtime and switching off your devices an hour before bed.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "If a medicine does not help with your symptoms, tell your doctor, because another medicine may work better for you. The main goals of treatment include preventing flare-ups, easing pain and reducing stiffness.",
          "Your treatment should be reviewed regularly. Some services let you arrange follow-up appointments as and when you need them, which is called patient-initiated follow-up.",
        ],
      },
    ],
    helps: [
      "Give a severely inflamed joint a period of rest, followed by exercise.",
      "Use an ice pack wrapped in a towel for about ten minutes every two hours on a hot, swollen joint.",
      "Use a hot bath, shower or hot water bottle to relieve morning stiffness.",
      "Try relaxation techniques, such as mindfulness or deep breathing, when stress builds.",
      "Try to avoid the things that make your psoriasis worse.",
      "Tell your doctor if a medicine does not help, as another may work better.",
    ],
    tryThisWeek: [
      "Keep an ice pack ready.",
      "Try deep breathing when stressed.",
      "Tell your doctor if treatment is not helping.",
    ],
    ask: "What should I do in a flare, and who do I contact if it does not settle?",
    interactive: {
      kind: "scenarios",
      title: "Flare moments",
      scenarios: [
        {
          id: "hot",
          situation: "One knee is hot, swollen and very painful today.",
          options: [{ text: "Rest it, then exercise as it settles", best: true }, { text: "Do strength training to work it off" }],
          why: "A severely inflamed joint should be treated with a period of rest followed by exercise, under medical supervision.",
        },
        {
          id: "ice",
          situation: "You want to cool a swollen ankle.",
          options: [{ text: "An ice pack wrapped in a towel", best: true }, { text: "Ice held directly on the skin" }],
          why: "Ice packs can help reduce the heat and swelling in an inflamed joint. PAPAA suggests about ten minutes every two hours, never directly on the skin, and checking with your doctor first if you have poor circulation.",
        },
        {
          id: "stress",
          situation: "Work is stressful and your joints feel worse.",
          options: [{ text: "Try deep breathing, and ask for help", best: true }, { text: "Ignore it and push on" }],
          why: "Some research suggests that stress may worsen arthritis symptoms or even cause flare-ups.",
        },
        {
          id: "medicine",
          situation: "Your medicine does not seem to be helping.",
          options: [{ text: "Tell your doctor", best: true }, { text: "Stop taking it on your own" }],
          why: "If a medicine does not help with your symptoms, tell your doctor, because another medicine may work better for you.",
        },
      ],
    },
    sources: [PAPAA_WHAT, PAPAA_MANAGEMENT, AUK_MYTHS, AUK_STRESS, NHS_PSORIASIS, PAPAA_GUIDE, AUK_PSA, PAPAA_ACTIVE, NHS_PSA],
    quiz: {
      question: "What does PAPAA say helps a severely inflamed joint?",
      options: [{ text: "A period of rest followed by exercise", right: true }, { text: "Strength training straight away" }, { text: "Ice held directly on the skin" }],
      why: "A severely inflamed joint should be treated with a period of rest followed by exercise, under medical supervision.",
    },
  },
  {
    id: "psa-dmards",
    kicker: "Treatment",
    question: "What do methotrexate and the other DMARDs do?",
    hook: "They slow the condition down and calm the inflammation, and many help the skin too. They take weeks to months to work, so keep going.",
    short: "Disease-modifying anti-rheumatic drugs (DMARDs) slow psoriatic arthritis down and reduce the inflammation it causes, which can help prevent joint damage. Methotrexate, sulfasalazine and leflunomide can be used early after diagnosis, and many DMARDs treat both the skin and the joints. They can take several weeks or even up to three months to work, and you will need regular blood tests.",
    sections: [
      {
        heading: "What DMARDs do",
        paragraphs: [
          "DMARDs can slow your condition down and reduce the amount of inflammation it causes, which can help prevent damage to your joints. They are used for moderate to severe symptoms.",
          "Many DMARDs will treat both psoriasis and psoriatic arthritis. Methotrexate is one example of an arthritis treatment that also helps the skin.",
        ],
      },
      {
        heading: "Slow to start",
        paragraphs: [
          "Because they treat the cause of your condition rather than the symptoms, it can take several weeks or even up to three months before you feel an effect. Keep taking them even if you do not feel better straight away.",
          "People usually take DMARDs for many years, sometimes all their life. You can take NSAIDs and painkillers at the same time as DMARDs.",
        ],
      },
      {
        heading: "Methotrexate, once a week",
        paragraphs: [
          "Methotrexate is taken on the same day once a week, as a tablet, liquid or injection. Never take 2 doses together to make up for a missed dose.",
          "You may be prescribed folic acid to reduce some of the side effects. Do not take it on the same day as your methotrexate, as it can stop your medicine from working properly.",
          "If you have taken more than your prescribed dose, or taken it daily instead of weekly, contact 111 for advice now.",
        ],
      },
      {
        heading: "Blood tests and safety",
        paragraphs: [
          "When taking a DMARD you will need regular blood tests and blood pressure checks, and in some cases a urine test. With methotrexate, tests are every 1 to 2 weeks at first, then every 2 to 3 months once your dose is right and the treatment is working well.",
          "Methotrexate can make infections more likely. Contact your doctor urgently if you develop chickenpox or shingles, or come into contact with someone who has them.",
          "Alcohol and methotrexate can both affect your liver, so do not drink more than the recommended limit of 14 units a week.",
        ],
      },
      {
        heading: "Sulfasalazine and leflunomide",
        paragraphs: [
          "Sulfasalazine could take at least 1 to 3 months before your symptoms get better. It may turn your urine orange, which is nothing to worry about, and blood tests are usually monthly for the first 6 months.",
          "Leflunomide may take four to six weeks before you start to feel its effects, and four to six months for the full effect. If you have psoriasis and your skin becomes inflamed, irritated or infected after starting it, speak to your doctor.",
        ],
      },
    ],
    helps: [
      "Keep taking your DMARD even if you do not feel better straight away.",
      "Take methotrexate on the same day each week, and keep your patient card with you.",
      "Never take 2 doses of methotrexate together to make up for a missed one.",
      "Take folic acid on a different day from your methotrexate.",
      "Go to all your blood tests, and record your dose and results in your booklet.",
      "Use a high factor sun cream (SPF 30 or above) while taking methotrexate, even on cloudy days.",
    ],
    tryThisWeek: [
      "Pick your weekly methotrexate day.",
      "Plan folic acid for another day.",
      "Book your next blood test.",
    ],
    ask: "How long before we know if my DMARD is working, and will it help my skin too?",
    interactive: {
      kind: "flip-cards",
      title: "Your DMARDs, card by card",
      intro: "Turn each card to see how each medicine is taken and what to know.",
      cards: [
        { id: "methotrexate", front: "Methotrexate", when: "Once a week, on the same day", back: "A tablet, liquid or injection. It can help the skin as well as the joints." },
        { id: "sulfasalazine", front: "Sulfasalazine", when: "Tablets, usually twice a day", back: "May take at least 1 to 3 months to work, and can turn urine orange." },
        { id: "leflunomide", front: "Leflunomide", when: "A tablet at the same time each day", back: "Effects start in four to six weeks; the full effect takes four to six months." },
      ],
    },
    sources: [AUK_PSA, NHS_PSA, PAPAA_GUIDE, AUK_MTX, NHS_MTX_HOW, NHS_MTX_ABOUT, AUK_SULFA, AUK_LEFLUNOMIDE],
    quiz: {
      question: "How often is methotrexate taken?",
      options: [{ text: "Once a week, on the same day", right: true }, { text: "Every day" }, { text: "Only during a flare" }],
      why: "Methotrexate is taken on the same day once a week, as a tablet, liquid or injection.",
    },
  },
  {
    id: "psa-biologics",
    kicker: "Treatment",
    question: "What are biologics and the newer medicines?",
    hook: "If standard DMARDs have not worked, targeted medicines that block particular messengers of inflammation are the next step.",
    short: "Biological therapies target key parts of the immune system to reduce inflammation, and are usually given by injection when DMARDs have not helped. Two groups are used: anti-TNF drugs such as adalimumab, and interleukin inhibitors such as secukinumab and ustekinumab. Newer tablets, apremilast and tofacitinib, are another option. All need checks before starting, and infections need watching.",
    sections: [
      {
        heading: "When they are used",
        paragraphs: [
          "Biological treatments are usually given by injection, and can be used if DMARDs do not help. They are only given to people who have already tried other treatments appropriate to their condition and not responded well to them.",
          "A biological therapy may be prescribed on its own, or at the same time as a DMARD such as methotrexate. Biological therapies can take up to three months to fully start working.",
        ],
      },
      {
        heading: "Two groups of biologics",
        paragraphs: [
          "Anti-TNF drugs target a protein called tumour necrosis factor. They include adalimumab, infliximab, etanercept, golimumab and certolizumab pegol.",
          "Interleukin inhibitors target interleukin proteins, which the immune system uses as messengers to help create inflammation. They include ustekinumab, secukinumab and ixekizumab.",
          "You may be prescribed adalimumab under a different name. These newer versions are known as biosimilars, and they work in a similar way.",
        ],
      },
      {
        heading: "How they are given",
        paragraphs: [
          "Adalimumab is injected under the skin, and you, your partner or another family member can learn to give the injections at home. Secukinumab is given once a week for the first four weeks, then once a month.",
          "Ustekinumab is injected at the start, again at four weeks, then every 12 weeks, avoiding areas of psoriasis. It may be up to six months before you start to notice the benefits.",
        ],
      },
      {
        heading: "Newer tablets",
        paragraphs: [
          "Apremilast and tofacitinib work on specific parts of the immune system to reduce inflammation, and are taken as tablets. Both may be prescribed alongside methotrexate.",
          "Apremilast targets an enzyme called PDE4, and it can improve skin symptoms, including scalp and nail psoriasis. If it works for you, you should notice the benefits within four months.",
          "Tofacitinib is a JAK inhibitor, and most people who benefit notice an improvement in the first 12 weeks. Your doctor may decide not to prescribe it if you are over 65, or have had heart problems or blood clots.",
        ],
      },
      {
        heading: "Before you start, and infections",
        paragraphs: [
          "Before starting adalimumab, you will have a chest X-ray and blood tests to check whether you have ever been exposed to tuberculosis. You may need treatment for TB first if it is in your body but not causing symptoms.",
          "These medicines can make you more likely to pick up infections, and can make them harder to spot. Tell your doctor or rheumatology nurse straight away about signs of infection such as a sore throat or fever, and see your doctor if you come into contact with chickenpox or shingles.",
          "Keep taking the treatment even if it does not seem to be working at first, and even when your symptoms improve.",
        ],
      },
    ],
    helps: [
      "Keep taking your treatment even if it does not seem to work at first, and even when symptoms improve.",
      "Tell your doctor or rheumatology nurse straight away about signs of infection, such as a sore throat or fever.",
      "See your doctor if you come into contact with someone who has chickenpox or shingles.",
      "Regularly change where you inject, to reduce redness, swelling or pain at the injection site.",
      "Wear sunscreen and regularly check your skin for new spots or changes to freckles or moles.",
      "Mention a latex allergy, as the needle cover on some pre-filled syringes may contain latex.",
    ],
    tryThisWeek: [
      "Learn the signs of infection.",
      "Change where you inject.",
      "Check your skin for changes.",
    ],
    ask: "Would a biologic or one of the newer tablets suit both my skin and my joints?",
    interactive: {
      kind: "flip-cards",
      title: "Targeted medicines, card by card",
      intro: "Turn each card to see what each kind of medicine does.",
      cards: [
        { id: "anti-tnf", front: "Anti-TNF biologics", when: "Such as adalimumab", back: "Block TNF, a protein that increases inflammation. Injected under the skin." },
        { id: "interleukin", front: "Interleukin inhibitors", when: "Such as secukinumab or ustekinumab", back: "Block interleukin messengers that help create inflammation." },
        { id: "apremilast", front: "Apremilast", when: "Tablets, morning and evening", back: "Targets the enzyme PDE4. Can improve skin, scalp and nail psoriasis too." },
        { id: "tofacitinib", front: "Tofacitinib", when: "A JAK inhibitor tablet", back: "Most people who benefit notice an improvement in the first 12 weeks." },
      ],
    },
    sources: [NHS_PSA, AUK_DMARDS, AUK_PSA, AUK_ADALIMUMAB, AUK_SECUKINUMAB, AUK_USTEKINUMAB, AUK_APREMILAST, AUK_TOFACITINIB],
    quiz: {
      question: "When are biological therapies usually used?",
      options: [{ text: "When other treatments have not worked well enough", right: true }, { text: "As the very first treatment" }, { text: "Only for pain relief" }],
      why: "They are only given to people who have already tried other treatments appropriate to their condition and not responded well to them.",
    },
  },
  {
    id: "psa-pain-relief",
    kicker: "Treatment",
    question: "How do painkillers, NSAIDs and steroid injections help?",
    hook: "They ease pain and swelling, often while slower medicines get to work, but they do not stop the condition itself.",
    short: "NSAIDs such as ibuprofen and naproxen can help with mild symptoms of psoriatic arthritis, and a steroid injected into a joint can ease pain and swelling for a few months. They provide symptom relief, but do not prevent joint damage. NSAIDs can upset the stomach, so a stomach-protecting medicine may be prescribed, and steroid injections are usually limited to three a year in one joint.",
    sections: [
      {
        heading: "NSAIDs for mild symptoms",
        paragraphs: [
          "Non-steroidal anti-inflammatory drugs (NSAIDs) come as tablets, creams or gels and can help with mild symptoms. They provide symptom relief, but they do not prevent joint damage or disease progression.",
          "There are about 20 different NSAIDs available, including ibuprofen, etoricoxib and naproxen. Some people find an NSAID works well at first but becomes less effective after a few weeks, and trying a different one might help.",
        ],
      },
      {
        heading: "Side effects to know",
        paragraphs: [
          "NSAIDs can sometimes cause stomach upsets, indigestion or damage to the lining of the stomach. You may also be prescribed a proton pump inhibitor, such as omeprazole or lansoprazole, to help protect the stomach.",
          "For some people, NSAIDs can increase the risk of heart attacks or strokes, so your doctor will be cautious if you have other risk factors. Some people have found that NSAIDs made their psoriasis worse, so tell your doctor if this happens to you.",
          "Serious side effects are rare. They include bleeding inside the stomach, with signs such as vomiting blood or black, sticky poo, and the NHS says some rare but serious side effects mean you may need to contact 111 for advice.",
        ],
      },
      {
        heading: "Paracetamol",
        paragraphs: [
          "Paracetamol can help manage mild to moderate aches and pain. It should start working within the hour and last for around five hours.",
          "Be careful with medicines for coughs, colds and flu, and with compound painkillers, because these often already contain paracetamol. Taking too much paracetamol can cause liver failure.",
        ],
      },
      {
        heading: "Steroid injections",
        paragraphs: [
          "A steroid injected into a joint can reduce pain and swelling, but the effects wear off after a few months. Too many injections into the same joint can damage the surrounding area, so your doctor will usually not recommend more than three a year.",
          "Steroid tablets or a steroid injection into a muscle can be useful if lots of joints are painful and swollen. But there is a risk that psoriasis can get worse when these wear off.",
        ],
      },
      {
        heading: "After an injection",
        paragraphs: [
          "Do not overdo it for the first two weeks, as exercising the joint too much straight away could damage the tendon. After that, start gently and gradually increase the exercises you were given.",
          "Occasionally joint pain flares within the first 24 hours, and it usually settles within a couple of days. If the joint becomes more painful and hot, see your doctor immediately, especially if you feel unwell.",
        ],
      },
    ],
    helps: [
      "Expect your doctor to prescribe the lowest effective dose of an NSAID for the shortest possible time.",
      "Tell your doctor if an NSAID seems to make your psoriasis worse.",
      "Check cough, cold and flu medicines for paracetamol before taking them with it.",
      "Do not overdo it for two weeks after a steroid injection, then build up gently.",
      "See your doctor immediately if an injected joint becomes more painful and hot.",
      "Keep any steroid card you are given with you.",
    ],
    tryThisWeek: [
      "Check remedies for hidden paracetamol.",
      "Note if NSAIDs affect your skin.",
      "Go easy for two weeks after an injection.",
    ],
    ask: "Do I need stomach protection with my NSAID, and could a steroid injection help a bad joint?",
    interactive: {
      kind: "timeline",
      title: "After a steroid injection",
      steps: [
        { id: "clinic", when: "In the clinic", title: "Wait a little while", points: ["You might be asked to wait 10 to 15 minutes after the injection.", "Arrange transport home if you had a local anaesthetic."] },
        { id: "day", when: "First 24 hours", title: "A possible short flare", points: ["Occasionally joint pain flares within 24 hours.", "It usually settles within a couple of days; paracetamol helps."] },
        { id: "weeks", when: "First two weeks", title: "Go easy", points: ["Do not overdo it with the injected joint.", "Too much exercise too soon could damage the tendon."] },
        { id: "after", when: "After two weeks", title: "Build back up", points: ["Carry on with exercises from your health professional.", "Start gently and gradually increase what you do."] },
        { id: "months", when: "Over the months", title: "Wearing off", points: ["The effects wear off after a few months.", "Usually no more than three injections in one joint a year."] },
      ],
    },
    sources: [NHS_PSA, PAPAA_NSAIDS, AUK_PSA, NHS_NSAIDS, AUK_PAINKILLERS, AUK_STEROID_INJECTIONS],
    quiz: {
      question: "What do NSAIDs do in psoriatic arthritis?",
      options: [{ text: "Relieve symptoms, but do not prevent joint damage", right: true }, { text: "Cure the condition" }, { text: "Stop all future joint damage" }],
      why: "They provide symptom relief, but they do not prevent joint damage or disease progression.",
    },
  },
  {
    id: "psa-skin",
    kicker: "Skin",
    question: "How do I look after my skin as well as my joints?",
    hook: "Creams, light therapy and some arthritis medicines all help the psoriasis. Skin and joint teams work best when they know about each other's treatments.",
    short: "Psoriasis is usually treated first with creams and ointments, such as moisturisers, vitamin D treatments and steroid creams. If they do not help, a doctor may suggest light therapy or medicines, and some DMARDs and biologics used for the arthritis also help the skin. Ask your dermatologist and rheumatologist to let each other know about your treatments.",
    sections: [
      {
        heading: "Creams and ointments first",
        paragraphs: [
          "The main treatments for psoriasis include vitamin D creams, moisturising creams called emollients, steroid creams, and other treatments such as coal tar. You may need a combination of different treatments.",
          "Topical treatments for the skin, such as vitamin D derivatives, may help the skin, but they have not been shown to benefit the joints.",
        ],
      },
      {
        heading: "Moisturising every day",
        paragraphs: [
          "Moisturisers make the skin much more comfortable, easing dryness, scaling, cracking, soreness and itching. Psoriasis UK suggests using one at least twice a day, and more often if possible.",
          "Apply moisturiser straight after a bath or shower, and let it sink in before an active treatment. If you use an emollient, do not smoke or go near naked flames, as clothing and bedding that has been in contact with it burns more easily.",
        ],
      },
      {
        heading: "Light therapy and medicines",
        paragraphs: [
          "If creams and ointments do not help, your doctor may suggest light therapy, which means short spells of strong ultraviolet light in hospital. Narrowband UVB is usually given two or three times a week, for up to ten weeks.",
          "Some DMARDs and biological therapies used for arthritis can also help the psoriasis. Retinoid tablets, such as acitretin, can be useful if psoriasis is not responding to other treatments.",
          "Using a sunbed is not the same as light therapy in hospital. Sunburn can aggravate psoriasis or trigger a flare.",
        ],
      },
      {
        heading: "Joining up your care",
        paragraphs: [
          "Some drug treatments may make psoriasis worse, but others can make it better. PAPAA suggests asking your dermatologist and rheumatologist to let each other know about your treatments.",
          "A review appointment is recommended four weeks after starting any new topical treatment, so your doctor can see how it is working and check whether you need help using it.",
        ],
      },
      {
        heading: "When skin needs urgent help",
        paragraphs: [
          "See a GP if your psoriasis treatment is not working or is giving you side effects.",
          "Call 999 or go to A&E if your skin quickly turns red and you develop white, pus-filled bumps that join together, or psoriasis patches on your feet turn yellow-brown and fill with pus. These can be signs of a more serious condition or an infection, and redness may be harder to see on brown or black skin.",
        ],
      },
    ],
    helps: [
      "Use your moisturiser at least twice a day, including straight after a bath or shower.",
      "Let moisturiser sink in before you apply an active treatment.",
      "Use a spoon, spatula or pump dispenser to take emollient from a pot, rather than your fingers.",
      "Ask your dermatologist and rheumatologist to let each other know about your treatments.",
      "Use a high SPF sun cream and cover up in strong sun, as sunburn can trigger a flare.",
      "See a GP if your psoriasis treatment is not working or is giving you side effects.",
    ],
    tryThisWeek: [
      "Moisturise at least twice a day.",
      "Ask your teams to share plans.",
      "Pack a high SPF sun cream.",
    ],
    ask: "Which treatment would help both my skin and my joints?",
    interactive: {
      kind: "flip-cards",
      title: "Skin treatments, card by card",
      intro: "Turn each card to see when each treatment is used and what it does.",
      cards: [
        { id: "emollients", front: "Emollients", when: "Every day, at least twice", back: "Ease dryness, scaling and itching, and may help other treatments absorb better." },
        { id: "vitamin-d", front: "Vitamin D treatments", when: "Often one of the first prescribed", back: "Slow down the production of skin cells and have an anti-inflammatory effect." },
        { id: "steroid-creams", front: "Steroid creams", when: "Psoriasis on a small area", back: "Reduce skin inflammation and irritation. A review is advised after four weeks." },
        { id: "light", front: "Light therapy", when: "If creams have not worked", back: "Strong ultraviolet light in hospital, often two or three times a week." },
        { id: "medicines", front: "Arthritis medicines", when: "Some DMARDs and biologics", back: "Some medicines used for the joints also help the psoriasis." },
      ],
    },
    sources: [NHS_PSORIASIS, PAPAA_WHAT, PSUK_EMOLLIENTS, AUK_PSA, PSUK_UV, PAPAA_GUIDE, PSUK_STEROIDS, PSUK_VITD],
    quiz: {
      question: "Do skin creams for psoriasis help the joints?",
      options: [{ text: "They have not been shown to help the joints", right: true }, { text: "Yes, they treat the arthritis too" }, { text: "Only if used every hour" }],
      why: "Topical treatments for the skin, such as vitamin D derivatives, may help the skin, but they have not been shown to benefit the joints.",
    },
  },
  {
    id: "psa-exercise",
    kicker: "Staying active",
    question: "How can exercise help, and where do I start?",
    hook: "Movement keeps joints mobile and muscles strong. Start small, mix stretching and strengthening, and go gently on swollen days.",
    short: "Staying as active as possible can help psoriatic arthritis: it keeps your muscles strong and your joints mobile and can improve fatigue and pain. Low impact exercises like swimming, walking and yoga can help strengthen and protect your joints. Start small, build up gradually, and check with your GP or physiotherapist first if you are unsure.",
    sections: [
      {
        heading: "Why moving helps",
        paragraphs: [
          "Many people worry they will hurt themselves or further damage their joints, but staying as active as possible could actually help your symptoms. Keeping moving will make your muscles strong, your joints mobile and help to improve fatigue and pain.",
          "Low impact exercises like swimming, walking and yoga can help strengthen and protect your joints. Physical activity can also help reduce stress, improve mood and maintain bone density.",
        ],
      },
      {
        heading: "A balanced mix",
        paragraphs: [
          "PAPAA describes a balance of stretching, strengthening and cardiovascular exercise. Range of movement exercises help relieve stiffness and should be carried out daily.",
          "Strengthening exercises are done on alternate days, and not when a joint is hot and painful unless a physiotherapist is supervising. Swimming does not stress your joints, and cycling is often more comfortable on the feet than walking.",
        ],
      },
      {
        heading: "A few gentle examples",
        paragraphs: [
          "For the fingers, rest your elbow on a table with your hand up, straighten your fingers, then bend them to touch your fingertips to the base of your fingers, ten times. For the feet, wiggle your toes, or circle your feet one way and then the other, ten times.",
          "For the neck, sit up straight in a supportive chair and tilt your head towards one shoulder until you feel the stretch on the opposite side. Hold for about ten seconds, then repeat to the other side.",
          "Check with your GP or physiotherapist first if you are unsure about any exercise. A health professional can design a programme for your specific needs.",
        ],
      },
      {
        heading: "Swollen days and setbacks",
        paragraphs: [
          "On days when your joints are swollen or painful, move the affected joints through as great a range as you can without aggravating your pain. You may choose to go swimming rather than walking if your knees or ankles are painful.",
          "Exercise may cause some muscle or joint ache, but it should not cause sharp pain. If exercise leads to swelling or sharp pain, stop and check you are doing it correctly, and if discomfort lasts longer than a couple of hours, slow down.",
        ],
      },
      {
        heading: "Building up",
        paragraphs: [
          "Start off slowly and build up gradually, increasing how often, how long and how hard you exercise. If you are new to exercise you might feel a bit sore the first few times, but if you stick with it, it will get easier.",
          "The NHS suggests adults aim for at least 150 minutes of moderate activity a week, with strengthening activities on at least 2 days. Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        ],
      },
    ],
    helps: [
      "Choose low impact exercise, such as swimming, walking or yoga.",
      "Do range of movement exercises every day to ease stiffness.",
      "Skip strengthening a hot, painful joint unless a physiotherapist is supervising.",
      "Start small and remember that any exercise is better than nothing.",
      "Exercise with a friend or in a group if you find it hard to stay motivated.",
      "Check with your GP or physiotherapist first if you are unsure about any exercise.",
    ],
    tryThisWeek: [
      "Do range of movement exercises daily.",
      "Try a short swim or walk.",
      "Ask a friend to exercise with you.",
    ],
    ask: "Could I see a physiotherapist for an exercise plan that suits my joints?",
    interactive: {
      kind: "scenarios",
      title: "Moving with psoriatic arthritis",
      scenarios: [
        {
          id: "knees",
          situation: "Your knees are painful today, and you planned a walk.",
          options: [{ text: "Go swimming instead", best: true }, { text: "Walk further to push through" }],
          why: "You may choose to go swimming rather than walking if your knees or ankles are painful.",
        },
        {
          id: "hot",
          situation: "Your wrist is hot and painful on a strengthening day.",
          options: [{ text: "Skip strengthening that joint today", best: true }, { text: "Lift heavier weights" }],
          why: "Strengthening exercises are done on alternate days, and not when a joint is hot and painful unless a physiotherapist is supervising.",
        },
        {
          id: "sharp",
          situation: "An exercise causes sharp pain and swelling.",
          options: [{ text: "Stop and check how you are doing it", best: true }, { text: "Keep going through the pain" }],
          why: "If exercise leads to swelling or sharp pain, stop and check you are doing it correctly, and if discomfort lasts longer than a couple of hours, slow down.",
        },
        {
          id: "new",
          situation: "You have not exercised for a long time.",
          options: [{ text: "Start slowly and build up", best: true }, { text: "Start with a long, hard session" }],
          why: "Start off slowly and build up gradually, increasing how often, how long and how hard you exercise.",
        },
      ],
    },
    sources: [AUK_PSA, NHS_PSA, PAPAA_ACTIVE, AUK_GETTING_STARTED, NHS_ACTIVITY],
    quiz: {
      question: "Which kind of exercise does the NHS suggest for psoriatic arthritis?",
      options: [{ text: "Low impact exercise like swimming, walking and yoga", right: true }, { text: "Only high impact sports" }, { text: "No exercise at all" }],
      why: "Low impact exercises like swimming, walking and yoga can help strengthen and protect your joints.",
    },
  },
  {
    id: "psa-fatigue",
    kicker: "Fatigue",
    question: "Why am I so tired, and what helps?",
    hook: "Fatigue is not ordinary tiredness. Inflammation, pain and poor sleep all feed it, and pacing, gentle exercise and a diary help.",
    short: "Fatigue is an extreme physical and mental tiredness that does not significantly improve with rest or sleep, and people with psoriatic arthritis often report it. Inflammation, pain, poor sleep and stress can all contribute. Tell your healthcare team if it is ongoing, and try pacing, regular rest, gentle exercise and a fatigue diary.",
    sections: [
      {
        heading: "More than tiredness",
        paragraphs: [
          "Fatigue is an extreme physical and mental tiredness that does not significantly improve with rest or sleep. It can affect your motivation and your ability to concentrate, which is sometimes described as brain fog.",
          "People with psoriatic arthritis often report feeling fatigued or exhausted. Fatigue can start suddenly at any time of day and last an hour, a day or several days.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "Inflammation, pain, poor sleep and the demands of living with psoriatic arthritis can all contribute. Inflammation appears to be part of it, but researchers do not know exactly what the link is.",
          "Anaemia, some medicines, muscle weakness, stress and missing meals can play a part too. Fatigue is an invisible symptom, and people are sometimes wrongly viewed as lazy.",
        ],
      },
      {
        heading: "Pacing your energy",
        paragraphs: [
          "Pacing is about not using up all your energy in one go. Arthritis UK suggests the four Ps: problem solving, planning, prioritising and pacing.",
          "Spread chores over a few days rather than doing them all on the same day, and stop an activity before you are too tired. Try to keep back some energy for something you like to do.",
        ],
      },
      {
        heading: "Sleep, movement and food",
        paragraphs: [
          "As many as 80% of people with arthritis have reported that they struggle with sleep. A dark, quiet bedroom, a warm bath before bedtime and a regular routine may help.",
          "Adding gentle exercise to your day can increase your energy, because weak muscles use more energy. Start with a 5 to 10 minute walk or some gentle stretching, then gradually build up.",
          "Caffeine gives a short-lived boost, and people often feel more tired once it wears off. Alcohol is likely to make people drowsier and can affect sleep.",
        ],
      },
      {
        heading: "Talking about it",
        paragraphs: [
          "If you feel tired all the time, tell your healthcare provider, as it is important to rule out other causes. A diary of when fatigue strikes and how long it lasts, alongside your sleep, activity, food and drink, can help you and your team spot patterns.",
          "Fatigue can make you feel low or depressed. Talking to your healthcare team, a support group, family or friends can really help, and your team may recommend a talking therapy such as CBT.",
        ],
      },
    ],
    helps: [
      "Tell your healthcare team if you feel tired all the time, so other causes can be checked.",
      "Pace yourself: break big jobs into smaller tasks spread over a day or a week.",
      "Stop any activity before you are too tired, rest, and then start again.",
      "Start with a 5 to 10 minute walk or some gentle stretching, and build up gradually.",
      "Keep a diary of your fatigue, sleep, activity, food and drink.",
      "Tell people when you are tired, and learn to say no, if possible.",
    ],
    tryThisWeek: [
      "Spread one big job over the week.",
      "Take a 5 to 10 minute walk.",
      "Start a fatigue diary.",
    ],
    ask: "Could anything else be adding to my fatigue, such as anaemia or my medicines?",
    interactive: {
      kind: "risk-check",
      title: "What could be feeding your fatigue?",
      intro: "Tick any that apply. Some you can change, and some need your healthcare team.",
      items: [
        { id: "inflammation", label: "Active inflammation", note: "Inflammation appears to be part of fatigue. Tell your team, so treatment can be reviewed.", changeable: false },
        { id: "anaemia", label: "Anaemia", note: "A lack of red blood cells can lower energy levels. Your doctor may suggest blood tests.", changeable: false },
        { id: "pain", label: "Ongoing pain", note: "Constant pain will make you fatigued. Use pain relief regularly and as directed.", changeable: true },
        { id: "sleep", label: "Poor sleep", note: "Poor sleep patterns can cause fatigue or make it worse.", changeable: true },
        { id: "boom", label: "Boom and bust days", note: "Doing too much on one day and nothing the next. Pacing can help.", changeable: true },
        { id: "stress", label: "Stress and worry", note: "Stress and worry can make fatigue feel worse.", changeable: true },
        { id: "caffeine", label: "Relying on caffeine", note: "The effects are short-lived, and people often feel more tired once they wear off.", changeable: true },
      ],
    },
    sources: [AUK_FATIGUE, PAPAA_WHAT, PAPAA_FATIGUE, AUK_4PS, AUK_PSA, AUK_FATIGUE_TIPS],
    quiz: {
      question: "What does pacing mean?",
      options: [{ text: "Not using up all your energy in one go", right: true }, { text: "Doing everything on your good days" }, { text: "Resting all day, every day" }],
      why: "Pacing is about not using up all your energy in one go.",
    },
  },
  {
    id: "psa-heart",
    kicker: "Whole-body health",
    question: "How does psoriatic arthritis affect my heart and other health?",
    hook: "Psoriatic disease is linked with heart risk factors and a few other conditions. Regular checks and everyday habits help protect you.",
    short: "Psoriatic arthritis can put you at a slightly higher risk of having a heart condition, and heart risk factors such as high blood pressure, high cholesterol and diabetes are found more often in people with psoriasis. Not smoking, being active, a healthy diet and not drinking too much alcohol can lower the risk. It is also linked with Crohn's disease and fatty liver disease.",
    sections: [
      {
        heading: "A slightly higher heart risk",
        paragraphs: [
          "Psoriatic arthritis can put you at a slightly higher risk of having a heart condition. Research shows that heart risk factors such as diabetes, obesity, high blood pressure and high cholesterol are found more often in people with psoriasis.",
          "With psoriasis, there is a higher chance of metabolic syndrome, which can lead to conditions such as diabetes, cardiovascular disease and deep vein thrombosis. You will have regular check-ups and advice on how to reduce this chance.",
        ],
      },
      {
        heading: "Checks worth asking about",
        paragraphs: [
          "High blood pressure often has no symptoms, so PAPAA suggests having it checked every year. Your doctor may also take blood tests to check your blood glucose and cholesterol.",
          "Some medicines matter here too. Ciclosporin, used for psoriasis, can cause high blood pressure, and beta-blockers can worsen psoriasis, so tell your doctor straight away if a new medicine seems to be affecting you.",
        ],
      },
      {
        heading: "Everyday steps",
        paragraphs: [
          "You can reduce your risk by not smoking, keeping to a healthy weight, exercising regularly, eating a diet low in fat, sugar and salt, and not drinking too much alcohol. These choices can also help your arthritis and skin symptoms.",
          "You do not have to exercise strenuously to get the health benefits. PAPAA suggests starting with a goal of 10 minutes of daily activity, such as walking or gardening, and gradually increasing it.",
          "Reaching a healthy weight, for people who are overweight, has been shown to improve arthritis, tendonitis and psoriasis. It also increases the likelihood of responding to medication.",
        ],
      },
      {
        heading: "Gut and liver",
        paragraphs: [
          "People with psoriatic arthritis have an increased risk of Crohn's disease, in which parts of the digestive system become inflamed. See a doctor about blood in your poo, diarrhoea for more than seven days, regular stomach pain or unexplained weight loss, particularly if you have two or more and they do not go away.",
          "Non-alcoholic fatty liver disease, a build-up of fat in the liver, is also linked. See a doctor if you have extreme tiredness, pain in the top right of your tummy, or yellowing of the skin and eyes.",
        ],
      },
      {
        heading: "Emergency signs",
        paragraphs: [
          "Call 999 if you have chest pain that feels tight or like squeezing on your chest, or chest pain that is spreading to your arms, neck or jaw. Do not drive yourself to A&E.",
          "PAPAA says to seek emergency medical attention immediately for signs of a stroke, such as sudden weakness or numbness in the face, arm or leg, or sudden difficulty speaking.",
        ],
      },
    ],
    helps: [
      "Ask your GP for regular checks of blood pressure, cholesterol and blood glucose.",
      "If you smoke, ask your doctor for advice and support to help you stop.",
      "Start with a goal of 10 minutes of daily activity, such as walking or gardening, and build up.",
      "Eat a healthy diet that is low in fat, sugar and salt.",
      "Keep alcohol to no more than 14 units a week, spread over 3 or more days.",
      "Tell your doctor straight away if a new medicine seems to be affecting you.",
    ],
    tryThisWeek: [
      "Ask for a blood pressure check.",
      "Try 10 minutes of activity a day.",
      "Check your weekly alcohol units.",
    ],
    ask: "Who checks my blood pressure, cholesterol and blood sugar, and how often?",
    interactive: {
      kind: "risk-check",
      title: "Heart risk factors",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "smoking", label: "Smoking", note: "Stopping smoking is one of the most important steps for a healthy heart.", changeable: true },
        { id: "blood-pressure", label: "High blood pressure", note: "It often has no symptoms, so have it checked every year.", changeable: true },
        { id: "cholesterol", label: "High cholesterol", note: "A balanced diet, activity and not smoking can reduce it; some people need medicine.", changeable: true },
        { id: "inactive", label: "Not much physical activity", note: "Being inactive can double your risk of heart attack and stroke.", changeable: true },
        { id: "alcohol", label: "More than 14 units a week", note: "Too much alcohol can contribute to health problems, including heart disease.", changeable: true },
        { id: "age", label: "Getting older", note: "The risks of heart attacks and stroke increase with age.", changeable: false },
        { id: "family", label: "Heart disease in the family", note: "A brother, sister or parent with heart disease before 55 puts you at higher risk.", changeable: false },
      ],
    },
    sources: [AUK_PSA, PAPAA_HEART, NHS_PSORIASIS, PAPAA_WHAT, NHS_HEART_ATTACK],
    quiz: {
      question: "Which is true about psoriatic arthritis and the heart?",
      options: [{ text: "It can bring a slightly higher risk of heart conditions", right: true }, { text: "It has no link with heart health" }, { text: "Only exercise raises the risk" }],
      why: "Psoriatic arthritis can put you at a slightly higher risk of having a heart condition.",
    },
  },
  {
    id: "psa-work",
    kicker: "Work",
    question: "How can I keep working with psoriatic arthritis?",
    hook: "With the right treatment, working is very possible. Adjustments, Access to Work and an early talk with your manager can help.",
    short: "If you are on the right treatment, it is certainly possible to keep working with psoriatic arthritis. It can count as a disability if it makes daily tasks difficult and lasts for more than 12 months, and employers must make reasonable adjustments for workers with disabilities or health conditions. The government's Access to Work scheme can help pay for equipment and support.",
    sections: [
      {
        heading: "Working is possible",
        paragraphs: [
          "Having psoriatic arthritis may make some aspects of working life more challenging. But if you are on the right treatment, it is certainly possible to continue working.",
          "Pain, stiffness and fatigue may make everyday activities harder, including work. An occupational therapist can guide you on protecting your joints, pacing yourself and strategies to help you stay in work.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under the Equality Act 2010, you are disabled if a physical or mental impairment has a substantial and long-term negative effect on your ability to do normal daily activities. Long-term means 12 months or more, and there are special rules for conditions that come and go, such as arthritis.",
          "Employers must make reasonable adjustments so that workers with disabilities or health conditions are not substantially disadvantaged. Examples include providing a special keyboard for someone with arthritis, or a phased return to work with flexible hours.",
        ],
      },
      {
        heading: "Telling your employer",
        paragraphs: [
          "There are no rules that say you have to tell your employer about your condition. But to get the support you are entitled to, you will need to tell them, and your manager or HR department might be a good place to start.",
          "People with arthritis say talking to a line manager about a problem early on is much better than letting it reach a crisis point. Writing down what you agree can help if your manager changes.",
        ],
      },
      {
        heading: "Adjustments that can help",
        paragraphs: [
          "Adjustments might include specialist equipment, changes to your role or a different work pattern, such as working from home, flexible hours or longer breaks. Think about times when your condition flares or you start a new treatment, as you may need extra support then.",
          "At a desk, avoid staying in one position for too long, and use a timer to remind you to change position. Pens with thicker or padded handles take less effort to grip.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. A grant can help pay for things like specialist equipment, travel to work if you cannot use public transport, or physical changes to your workplace.",
          "You need to be 16 or over, in paid work or about to start, and living and working in England, Scotland or Wales. A grant will not affect other benefits, and you will not have to pay it back.",
        ],
      },
    ],
    helps: [
      "Talk to your line manager about problems early, before they reach a crisis point.",
      "Write down the adjustments you agree with your employer.",
      "Plan for extra support when your condition flares or you start a new treatment.",
      "Ask your GP about seeing an occupational therapist for advice on work.",
      "Check whether an Access to Work grant could pay for equipment or travel.",
      "Get advice from the Disability Employment Adviser at your local Jobcentre Plus.",
    ],
    tryThisWeek: [
      "Talk to your manager early.",
      "Write down agreed adjustments.",
      "Check Access to Work.",
    ],
    ask: "Could you refer me to an occupational therapist for advice about my work?",
    interactive: {
      kind: "scenarios",
      title: "Work moments",
      scenarios: [
        {
          id: "flare",
          situation: "A flare makes the morning commute very hard.",
          options: [{ text: "Ask about flexible hours or home working", best: true }, { text: "Say nothing and struggle on" }],
          why: "Adjustments might include specialist equipment, changes to your role or a different work pattern, such as working from home, flexible hours or longer breaks.",
        },
        {
          id: "keyboard",
          situation: "Typing hurts your hands.",
          options: [{ text: "Ask about a special keyboard", best: true }, { text: "Grip the mouse harder" }],
          why: "Examples include providing a special keyboard for someone with arthritis, or a phased return to work with flexible hours.",
        },
        {
          id: "tell",
          situation: "You are unsure whether to tell your manager.",
          options: [{ text: "Talk early, before a crisis", best: true }, { text: "Wait until things get much worse" }],
          why: "People with arthritis say talking to a line manager about a problem early on is much better than letting it reach a crisis point.",
        },
        {
          id: "cost",
          situation: "Your employer cannot cover some equipment you need.",
          options: [{ text: "Look into an Access to Work grant", best: true }, { text: "Pay for it all yourself" }],
          why: "A grant can help pay for things like specialist equipment, travel to work if you cannot use public transport, or physical changes to your workplace.",
        },
      ],
    },
    sources: [AUK_PSA, PAPAA_OT, GOV_DISABILITY, GOV_ADJUSTMENTS, AUK_DISCLOSING, AUK_ADJUSTMENTS, GOV_ATW, GOV_ATW_ELIGIBILITY],
    quiz: {
      question: "What does long-term mean under the Equality Act 2010?",
      options: [{ text: "12 months or more", right: true }, { text: "One week" }, { text: "Three months" }],
      why: "Long-term means 12 months or more, and there are special rules for conditions that come and go, such as arthritis.",
    },
  },
];
