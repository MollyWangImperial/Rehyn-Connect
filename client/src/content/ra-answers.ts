import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Rheumatoid arthritis page's pieces (content/library-conditions/body.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, the
// National Rheumatoid Arthritis Society (NRAS), Arthritis UK (the charity formerly called Versus Arthritis;
// versusarthritis.org now redirects to arthritis-uk.org) and the government's pages on Access to Work,
// reasonable adjustments and the Equality Act. General information only; it never replaces what a
// person's own rheumatology team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const nras = (label: string, path: string): LearnSource => ({ label: `NRAS: ${label}`, url: `https://nras.org.uk/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_RA = nhs("Rheumatoid arthritis", "conditions/rheumatoid-arthritis/");
const NHS_RA_SYMPTOMS = nhs("Symptoms of rheumatoid arthritis", "conditions/rheumatoid-arthritis/symptoms/");
const NHS_RA_CAUSES = nhs("Causes of rheumatoid arthritis", "conditions/rheumatoid-arthritis/causes/");
const NHS_RA_DIAGNOSIS = nhs("Diagnosing rheumatoid arthritis", "conditions/rheumatoid-arthritis/diagnosis/");
const NHS_RA_TREATMENT = nhs("Treating rheumatoid arthritis", "conditions/rheumatoid-arthritis/treatment/");
const NHS_RA_COMPLICATIONS = nhs("Complications of rheumatoid arthritis", "conditions/rheumatoid-arthritis/complications/");
const NHS_RA_LIVING = nhs("Living with rheumatoid arthritis", "conditions/rheumatoid-arthritis/living-with/");
const NHS_MTX_ABOUT = nhs("About methotrexate", "medicines/methotrexate/about-methotrexate/");
const NHS_MTX_HOW = nhs("How and when to take methotrexate", "medicines/methotrexate/how-and-when-to-take-methotrexate/");
const NHS_MTX_SIDE = nhs("Side effects of methotrexate", "medicines/methotrexate/side-effects-of-methotrexate/");
const NHS_MTX_QUESTIONS = nhs("Common questions about methotrexate", "medicines/methotrexate/common-questions-about-methotrexate/");
const NHS_MTX_PREGNANCY = nhs("Pregnancy, breastfeeding and fertility while taking methotrexate", "medicines/methotrexate/pregnancy-breastfeeding-and-fertility-while-taking-methotrexate/");
const NHS_HCQ = nhs("Hydroxychloroquine", "medicines/hydroxychloroquine/");
const NHS_STEROIDS = nhs("Steroids", "medicines/steroids/");
const NHS_SHINGLES = nhs("Shingles vaccine", "vaccinations/shingles-vaccine/");

const NRAS_WHAT = nras("What is RA?", "resource/what-is-ra/");
const NRAS_RA_OA = nras("Rheumatoid arthritis (RA) and osteoarthritis (OA)", "resource/rheumatoid-arthritis-ra-and-osteoarthritis-oa/");
const NRAS_DIAGNOSIS = nras("Diagnosis", "resource/diagnosis/");
const NRAS_MAKING_DIAGNOSIS = nras("Making a diagnosis of rheumatoid arthritis", "resource/making-a-diagnosis-of-rheumatoid-arthritis/");
const NRAS_SERO = nras("Seropositive and seronegative", "resource/seropositive-and-seronegative/");
const NRAS_IMAGING = nras("Imaging in RA", "resource/imaging-in-ra/");
const NRAS_COMPLICATIONS = nras("Possible complications and related conditions", "resource/possible-complications-and-related-conditions/");
const NRAS_EYES = nras("Eye health and RA", "resource/eye-health-and-ra/");
const NRAS_LUNGS = nras("The effects of RA on the lungs", "resource/the-effects-of-ra-on-the-lungs/");
const NRAS_HEART = nras("Cardiovascular risk and RA", "resource/cardiovascular-risk-and-ra/");
const NRAS_FLARES = nras("Managing flares", "resource/managing-flares/");
const NRAS_FATIGUE = nras("Fatigue", "resource/fatigue/");
const NRAS_EXERCISE = nras("Exercise", "resource/exercise/");
const NRAS_DMARDS = nras("DMARDs", "resource/dmards/");
const NRAS_MTX = nras("Methotrexate", "resource/methotrexate/");
const NRAS_SULFA = nras("Sulfasalazine", "resource/sulfasalazine/");
const NRAS_LEFLUNOMIDE = nras("Leflunomide", "resource/leflunomide/");
const NRAS_BIOLOGICS = nras("Biologics", "resource/biologics/");
const NRAS_JAK = nras("JAK inhibitors", "resource/jak-inhibitors/");
const NRAS_STEROIDS = nras("Steroids", "resource/steroids/");
const NRAS_TIPS = nras("Useful tips", "resource/useful-tips/");
const NRAS_EQUALITY = nras("Guide to the Equality Act 2010", "resource/guide-to-the-equality-act-2010/");

const AUK_RA = auk("Rheumatoid arthritis", "understanding-arthritis/conditions/rheumatoid-arthritis/");
const AUK_DMARDS = auk("Disease-modifying anti-rheumatic drugs (DMARDs)", "understanding-arthritis/arthritis-treatments/drugs/disease-modifying-anti-rheumatic-drugs-dmards/");
const AUK_STEROIDS = auk("Steroids", "understanding-arthritis/arthritis-treatments/drugs/steroids/");
const AUK_STEROID_INJECTIONS = auk("Steroid injections", "understanding-arthritis/arthritis-treatments/drugs/steroid-injections/");
const AUK_ADALIMUMAB = auk("Adalimumab", "understanding-arthritis/arthritis-treatments/drugs/adalimumab/");
const AUK_BARICITINIB = auk("Baricitinib", "understanding-arthritis/arthritis-treatments/drugs/baricitinib/");
const AUK_JOINT_CARE = auk("Joint care", "understanding-arthritis/managing-arthritis-symptoms/joint-care/");
const AUK_HAND_EXERCISES = auk("Exercises for the fingers, hands and wrists", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-fingers-hands-and-wrists/");
const AUK_STIFFNESS = auk("Managing stiffness", "understanding-arthritis/managing-arthritis-symptoms/managing-stiffness/");
const AUK_FATIGUE = auk("Coping with and managing arthritis fatigue", "understanding-arthritis/managing-arthritis-symptoms/managing-fatigue/");
const AUK_FATIGUE_TIPS = auk("Self-help tips to fight fatigue", "understanding-arthritis/managing-arthritis-symptoms/managing-fatigue/self-help-tips-to-fight-fatigue/");
const AUK_4PS = auk("The 4 Ps: strategies you can use to cope with fatigue", "understanding-arthritis/managing-arthritis-symptoms/managing-fatigue/the-4-ps-strategies-you-can-use-to-cope-with-fatigue/");
const AUK_VACCINATIONS = auk("Vaccinations", "understanding-arthritis/managing-arthritis-symptoms/vaccinations/");
const AUK_DISCLOSING = auk("Disclosing your condition", "living-with-arthritis/work-benefits-and-finances/work-and-arthritis/disclosing-your-condition/");
const AUK_ADJUSTMENTS = auk("Applying for reasonable adjustments", "living-with-arthritis/work-benefits-and-finances/work-and-arthritis/applying-for-reasonable-adjustments/");
const AUK_PREGNANCY = auk("Pregnancy, fertility and arthritis", "living-with-arthritis/emotions-and-relationships/sex-relationships-and-arthritis/pregnancy-fertility-and-arthritis/");

const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");
const GOV_ATW_ELIGIBILITY = gov("Access to Work: eligibility", "access-to-work/eligibility");
const GOV_ADJUSTMENTS = gov("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");
const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");

export const raAnswers: LearnArticle[] = [
  {
    id: "ra-what-it-is",
    kicker: "Understanding",
    question: "What is rheumatoid arthritis?",
    hook: "Not wear and tear. The immune system attacks the lining of the joints by mistake, often on both sides of the body.",
    short: "Rheumatoid arthritis is a long-term autoimmune condition. The immune system attacks the cells that line the joints by mistake, making them swollen, stiff and painful. It usually affects the hands, feet and wrists, often on both sides at once, and early treatment can prevent it getting worse.",
    sections: [
      {
        heading: "An immune condition",
        paragraphs: [
          "Rheumatoid arthritis is an autoimmune disease. Your immune system, which usually fights infection, attacks the cells that line your joints by mistake, making the joints swollen, stiff and painful.",
          "Over time, this can damage the joints, cartilage and nearby bone. It is a form of arthritis that can affect the whole body, not just your joints.",
        ],
      },
      {
        heading: "Inside the joint",
        paragraphs: [
          "Your joints are held together by a fluid-filled capsule. In rheumatoid arthritis, the immune system mistakenly sends antibodies to the thin lining of the joints, called the synovium, which becomes sore and inflamed.",
          "The inflamed lining releases chemicals that damage nearby bones, cartilage, tendons and ligaments. When the inflammation goes down, the capsule can stay stretched, so the joint becomes less stable.",
        ],
      },
      {
        heading: "Which joints, and why both sides",
        paragraphs: [
          "The small joints in the hands and feet are often the first to be affected, often the knuckle joints in the fingers. It typically affects both sides of the body at the same time and to the same extent, though this is not always the case.",
          "That is one difference from osteoarthritis, which tends to affect individual joints. Rheumatoid arthritis can affect different joints at different times.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "About 1% of people in the UK have rheumatoid arthritis, more than 450,000 people. It affects roughly two to three times as many women as men, and the most common age to develop it is between 40 and 60.",
          "It is not clear what triggers it. Genes play a part, but if one identical twin has it, the other has only a one in six chance of developing it. Smoking and being overweight raise the risk.",
        ],
      },
      {
        heading: "Why early treatment matters",
        paragraphs: [
          "Diagnosing rheumatoid arthritis quickly is important, because early treatment can prevent it getting worse and reduce the risk of joint damage.",
          "There is no cure yet. But the outlook is improving all the time, and with the right treatment and support, many people can manage their symptoms, stay active and keep doing the things that matter to them.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have symptoms of rheumatoid arthritis.",
      "Tell the GP about all your symptoms, not just the ones you think are important.",
      "If you smoke, try to stop: smoking makes rheumatoid arthritis more likely, and more aggressive if it develops.",
      "Keep to a healthy weight, as being overweight puts extra stress on weight-bearing joints.",
      "Find out as much about rheumatoid arthritis as you can, and talk to others who have it.",
    ],
    tryThisWeek: [
      "See a GP about joint symptoms.",
      "Write down all your symptoms.",
      "If you smoke, plan to stop.",
    ],
    ask: "Is my rheumatoid arthritis active now, and which joints are affected?",
    interactive: {
      kind: "risk-check",
      title: "What raises the risk?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "woman", label: "Being a woman", note: "Rheumatoid arthritis affects roughly two to three times as many women as men.", changeable: false },
        { id: "family", label: "A family history of it", note: "Genes play a part, but the risk of inheriting it is thought to be low.", changeable: false },
        { id: "age", label: "Being aged around 40 to 60", note: "The most common age to develop it is between 40 and 60, or a bit older for men.", changeable: false },
        { id: "smoking", label: "Smoking", note: "Smoking makes it more likely, and the disease is more aggressive if it does occur.", changeable: true },
        { id: "weight", label: "Being overweight", note: "You have a greater chance of developing it than if you are a healthy weight.", changeable: true },
      ],
    },
    sources: [NHS_RA, NHS_RA_CAUSES, NHS_RA_SYMPTOMS, AUK_RA, NRAS_WHAT, NRAS_RA_OA, NHS_RA_DIAGNOSIS],
    quiz: {
      question: "What does the immune system attack in rheumatoid arthritis?",
      options: [{ text: "The cells that line the joints", right: true }, { text: "Cartilage worn out by years of use" }, { text: "Germs trapped inside the joint" }],
      why: "Your immune system, which usually fights infection, attacks the cells that line your joints by mistake, making the joints swollen, stiff and painful.",
    },
  },
  {
    id: "ra-tests",
    kicker: "Diagnosis",
    question: "How is rheumatoid arthritis diagnosed?",
    hook: "No single test proves it. A specialist puts together your symptoms, an examination, blood tests and scans.",
    short: "There is no single test for rheumatoid arthritis. A GP examines your joints and may arrange blood tests, then refers you to a rheumatologist. The diagnosis is made from a combination of blood tests, such as rheumatoid factor and anti-CCP, scans such as X-ray or ultrasound, and an examination of your joints.",
    sections: [
      {
        heading: "Starting with the GP",
        paragraphs: [
          "Rheumatoid arthritis can be difficult to diagnose, because many conditions cause joint stiffness and inflammation and there is no definitive test. A GP will check your joints for swelling and how easily they move, and ask about your symptoms.",
          "If the GP thinks you have rheumatoid arthritis, they will refer you to a specialist called a rheumatologist. Investigations can be normal early in the disease, so there is no need to wait for results before the referral.",
        ],
      },
      {
        heading: "Blood tests for inflammation",
        paragraphs: [
          "The erythrocyte sedimentation rate (ESR) and C-reactive protein (CRP) tests help measure levels of inflammation in the body. A full blood count helps rule out other causes and can show anaemia, which is common in rheumatoid arthritis.",
          "No blood test can definitively prove or rule out rheumatoid arthritis, but several can show signs of it.",
        ],
      },
      {
        heading: "Rheumatoid factor and anti-CCP",
        paragraphs: [
          "Rheumatoid factors are proteins the immune system makes when it attacks healthy tissue. More than half of people with rheumatoid arthritis have high levels when the disease starts, but about 1 in 20 people without it also test positive.",
          "About 30% of people with rheumatoid arthritis do not have rheumatoid factor. Anti-CCP is more specific for rheumatoid arthritis and may appear much earlier.",
          "People who test positive for both may be more likely to have severe rheumatoid arthritis. But neither test can accurately predict how it will go for one person.",
        ],
      },
      {
        heading: "Ultrasound, X-rays and MRI",
        paragraphs: [
          "X-rays only show damage to bone or cartilage at a relatively late stage. Ultrasound is painless and avoids radiation, and it can pick up subtle inflammation around tendons and small knuckle joints that an examination may miss, especially in early arthritis.",
          "You may have an ultrasound if there is any doubt about whether your joints are inflamed. MRI gives the most detailed images and can detect inflammation and damage earlier than X-rays.",
        ],
      },
      {
        heading: "After the diagnosis",
        paragraphs: [
          "Your specialist will assess how well you cope with everyday tasks, such as dressing, walking and eating, and how good your grip strength is. This may be repeated after treatment to see if you have improved.",
          "Blood tests and scans are also used over time to monitor how active your rheumatoid arthritis is and how it is responding to treatment.",
        ],
      },
    ],
    helps: [
      "See a GP if you have symptoms, so they can try to find the cause.",
      "Tell the GP about all your symptoms, not just the ones you think are important.",
      "Let your GP know if other members of your family have rheumatoid arthritis or another autoimmune condition.",
      "If you are worried your care is not working as well as you need it to, discuss it with your GP or rheumatologist.",
      "If you have claustrophobia, tell your GP or consultant well before an MRI scan.",
    ],
    tryThisWeek: [
      "List all your symptoms for the GP.",
      "Note any family history.",
      "Mention claustrophobia before an MRI.",
    ],
    ask: "Which of my blood tests were positive, and what do they mean for me?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "esr", front: "ESR and CRP", when: "Blood tests at diagnosis and later", back: "Help measure inflammation in the body, and later how active the condition is." },
        { id: "fbc", front: "Full blood count", when: "A routine blood test", back: "Helps rule out other causes, shows your general health and checks for anaemia." },
        { id: "rf", front: "Rheumatoid factor", when: "A test for an antibody", back: "High in more than half of people when the disease starts, but positive in about 1 in 20 without it." },
        { id: "ccp", front: "Anti-CCP", when: "A newer antibody test", back: "More specific for rheumatoid arthritis, and may appear much earlier." },
        { id: "ultrasound", front: "Ultrasound", when: "If it is unclear whether joints are inflamed", back: "Painless, with no radiation. Picks up subtle inflammation in small knuckle joints and tendons." },
        { id: "xray", front: "X-ray and MRI", when: "To look for damage", back: "X-rays show bone damage at a later stage. MRI gives the most detailed images." },
      ],
    },
    sources: [NHS_RA_DIAGNOSIS, NRAS_WHAT, NRAS_SERO, NRAS_IMAGING, NRAS_MAKING_DIAGNOSIS, NRAS_DIAGNOSIS],
    quiz: {
      question: "Can one blood test prove you have rheumatoid arthritis?",
      options: [{ text: "No, the diagnosis puts several things together", right: true }, { text: "Yes, rheumatoid factor proves it" }, { text: "Yes, a full blood count proves it" }],
      why: "No blood test can definitively prove or rule out rheumatoid arthritis, but several can show signs of it.",
    },
  },
  {
    id: "ra-beyond-joints",
    kicker: "Complications",
    question: "How can rheumatoid arthritis affect the rest of the body?",
    hook: "It is a whole-body condition. Tiredness, the eyes, the lungs and the heart can all be affected, and good control lowers the risk.",
    short: "Rheumatoid arthritis can affect the whole body, not just the joints. Many people feel tired, and inflammation can reach the eyes, lungs, heart and blood vessels. It also raises the risk of heart attack and stroke. Keeping it well controlled helps reduce the risk of these complications.",
    sections: [
      {
        heading: "A whole-body condition",
        paragraphs: [
          "Rheumatoid arthritis is a systemic disease, which means it affects the whole body. As well as joint problems, some people have tiredness and a lack of energy, a high temperature, sweating, a poor appetite and weight loss.",
          "Fatigue can be due to anaemia, but it can also be due to the inflammation itself. Some people get flu-like symptoms, especially in the early days before or during diagnosis.",
        ],
      },
      {
        heading: "Eyes",
        paragraphs: [
          "About a quarter of people with rheumatoid arthritis have eye problems. The most common is dry eye syndrome, also called Sjögren's syndrome, which can feel gritty, like sand in the eye.",
          "Less commonly, about 1 in 50 people have a painful, red eye from scleritis, an inflammation of the white of the eye. It can threaten sight and needs prompt referral to an eye specialist.",
        ],
      },
      {
        heading: "Lungs",
        paragraphs: [
          "Inflammation of the lungs or the lung lining can lead to pleurisy or pulmonary fibrosis, which can cause chest pain, a persistent cough and shortness of breath.",
          "Signs of lung changes on scans are common, but in most people they are not enough to cause breathlessness or a cough. Chest infections are more likely too, partly because treatments for rheumatoid arthritis lower the body's defences.",
        ],
      },
      {
        heading: "Heart and blood vessels",
        paragraphs: [
          "If you have rheumatoid arthritis, you are at a higher risk of cardiovascular disease, including heart attack and stroke. Inflammation of the tissue around the heart can cause pericarditis, and inflamed blood vessels, called vasculitis, can be serious.",
          "You can reduce your risk by keeping your arthritis well controlled, stopping smoking, eating a healthy, balanced diet and exercising regularly. NRAS suggests checking with your GP or rheumatology team who is assessing your heart risk.",
        ],
      },
      {
        heading: "Nerves, skin and the neck",
        paragraphs: [
          "Carpal tunnel syndrome is common, causing aching, numbness and tingling in the thumb, fingers and part of the hand. Around 1 in 5 people develop lumps called rheumatoid nodules, most often in the hands, fingers, knuckles or elbows.",
          "People who have had rheumatoid arthritis for some time can develop cervical myelopathy, a problem at the top of the spine. Neck pain, loss of balance, trouble walking, or weakness or numbness in your limbs should be reported to your healthcare team.",
        ],
      },
    ],
    helps: [
      "Take your medicines: keeping rheumatoid arthritis well controlled helps reduce the risk of complications.",
      "Stop smoking, eat a healthy, balanced diet and keep active to protect your heart and blood vessels.",
      "Ask your GP or rheumatology team who is checking your risk of heart disease.",
      "Tell your healthcare team about neck pain, loss of balance, trouble walking, or weakness or numbness in your limbs.",
      "For dry eyes, try tear substitutes and avoid dry, air-conditioned rooms; ask about referral if it persists.",
      "Get a painful, red eye checked promptly, as scleritis needs an eye specialist.",
    ],
    tryThisWeek: [
      "Ask who checks your heart risk.",
      "Report neck pain or numbness.",
      "Get a painful red eye checked.",
    ],
    ask: "Who is checking my heart, lung and eye health, and how often?",
    interactive: {
      kind: "signs",
      title: "Changes to mention",
      intro: "Tick any you have noticed. Some can be signs that rheumatoid arthritis is affecting more than the joints.",
      signs: ["Tiredness and a lack of energy", "Dry, gritty eyes", "A painful, red eye", "A persistent cough or breathlessness", "Chest pain", "Numbness or tingling in the fingers", "Lumps under the skin", "Neck pain or loss of balance"],
      after: "Tell your rheumatology team or GP. A painful, red eye needs prompt referral to an eye specialist.",
      copyHeading: "Changes I have noticed",
    },
    sources: [NHS_RA_SYMPTOMS, NHS_RA_COMPLICATIONS, NRAS_WHAT, NRAS_EYES, NRAS_COMPLICATIONS, NRAS_LUNGS, NRAS_HEART, AUK_RA],
    quiz: {
      question: "What helps lower the risk of heart attack and stroke with rheumatoid arthritis?",
      options: [{ text: "Good control, not smoking and regular exercise", right: true }, { text: "Resting the joints completely" }, { text: "Avoiding all exercise" }],
      why: "You can reduce your risk by keeping your arthritis well controlled, stopping smoking, eating a healthy, balanced diet and exercising regularly.",
    },
  },
  {
    id: "ra-flares",
    kicker: "Flares",
    question: "What sets off a flare, and how do I get through one?",
    hook: "Flares can follow stress, illness or overdoing it, or come from nowhere. Rest, heat, cold and a plan help, and regular flares mean a review.",
    short: "A flare is when your symptoms become a lot worse and harder to control. Flares sometimes follow stress, illness or overdoing things, and sometimes have no obvious cause. Rest, regular pain relief, heat or cold and gentle exercise can help, and if flares keep coming or one does not settle, speak to your rheumatology team.",
    sections: [
      {
        heading: "What a flare is",
        paragraphs: [
          "There may be times when your symptoms become a lot worse and harder to control. This is called a flare-up or flare, and it can affect your whole body or particular joints, making them swollen or tender.",
          "Flares range from manageable and short-lived to so severe you can hardly get out of bed. Fatigue and stiffness may get worse too, and your mood and sleep can be affected.",
        ],
      },
      {
        heading: "What sets them off",
        paragraphs: [
          "Sometimes flares occur after periods of stress or illness, or after overdoing things. At times, they have no obvious cause.",
          "If a particular activity always causes a flare-up, it is best to avoid it and find an alternative. You may notice your fatigue feels worse just before a flare starts, though some flares come with no warning signs at all.",
        ],
      },
      {
        heading: "Riding it out",
        paragraphs: [
          "Rest and relaxation at the first signs of a flare can help, along with taking pain medication regularly and at the right dose. Taking daily pain medication early is often more effective than waiting until the pain is hard to bear.",
          "Hot baths or showers ease early morning stiffness and pain, and cool packs can relieve an inflamed joint. A bag of frozen peas wrapped in a towel makes a mouldable ice pack.",
          "Gentle exercises help relieve stiffness. During a flare, NRAS suggests focusing on range of movement exercises rather than strength training, then gradually building back up once it settles.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Sometimes rest and simple self-management are enough. If symptoms do not improve, your rheumatology team may suggest a steroid injection to get the flare under quick control, into a muscle or directly into a very swollen joint.",
          "If you are having regular flares, it may be time to review your treatment. With treatment, it is possible to decrease the number of flares and minimise or prevent long-term damage to the joints.",
        ],
      },
    ],
    helps: [
      "Rest and relax at the first signs of a flare.",
      "Take your pain medication regularly and at the right dose.",
      "Use hot baths or showers for stiffness, and cool packs for hot, swollen joints.",
      "Tell those closest to you, so they understand and can help if needed.",
      "Keep taking your medicine as instructed, even when you feel better, as it can help prevent flare-ups.",
      "Speak to your rheumatology team if you are getting regular flares, or one is not settling.",
    ],
    tryThisWeek: [
      "Plan your rest for the first signs.",
      "Keep a cool pack ready.",
      "Tell someone close about flares.",
    ],
    ask: "What should I do during a flare, and who do I call if it does not settle?",
    interactive: {
      kind: "scenarios",
      title: "Flare moments",
      scenarios: [
        {
          id: "first",
          situation: "Your joints start to ache and swell, and you feel more tired than usual.",
          options: [{ text: "Rest, and take pain relief regularly", best: true }, { text: "Push on until the pain is unbearable" }],
          why: "Taking daily pain medication early is often more effective than waiting until the pain is hard to bear.",
        },
        {
          id: "hot",
          situation: "One knee is red, hot and swollen.",
          options: [{ text: "A cool pack wrapped in a towel", best: true }, { text: "Strength training to work it off" }],
          why: "Cool packs can relieve an inflamed joint. A bag of frozen peas wrapped in a towel makes a mouldable ice pack.",
        },
        {
          id: "exercise",
          situation: "You are in a flare and usually do strength training.",
          options: [{ text: "Switch to range of movement exercises", best: true }, { text: "Keep to your usual routine" }],
          why: "During a flare, NRAS suggests focusing on range of movement exercises rather than strength training.",
        },
        {
          id: "regular",
          situation: "Flares keep coming back.",
          options: [{ text: "Ask your team to review your treatment", best: true }, { text: "Put up with it until your next appointment" }],
          why: "If you are having regular flares, it may be time to review your treatment.",
        },
      ],
    },
    sources: [NRAS_FLARES, NHS_RA, NHS_RA_LIVING, NRAS_EXERCISE],
    quiz: {
      question: "What can help a red, hot, swollen joint during a flare?",
      options: [{ text: "A cool pack wrapped in a towel", right: true }, { text: "Strength training" }, { text: "Waiting before taking any pain relief" }],
      why: "Cool packs can relieve an inflamed joint. A bag of frozen peas wrapped in a towel makes a mouldable ice pack.",
    },
  },
  {
    id: "ra-dmards",
    kicker: "Treatment",
    question: "What do methotrexate and the other DMARDs do?",
    hook: "They calm the immune attack on your joints. They are slow to start, so keep going: the benefit builds over months.",
    short: "DMARDs (disease-modifying anti-rheumatic drugs) ease the symptoms of rheumatoid arthritis and slow it down by blocking the effects of the immune attack on your joints. Methotrexate is usually the first, taken once a week, often with another DMARD and a short course of steroids. They can take a few months to work, and you will have regular blood tests.",
    sections: [
      {
        heading: "What DMARDs do",
        paragraphs: [
          "DMARDs work by blocking the effects of the chemicals released when your immune system attacks your joints, which could otherwise damage nearby bones, tendons, ligaments and cartilage. They ease the symptoms and slow down the condition.",
          "The DMARDs used include methotrexate, leflunomide, hydroxychloroquine and sulfasalazine. You will usually be offered a combination of DMARD tablets as part of your first treatment.",
        ],
      },
      {
        heading: "Methotrexate, once a week",
        paragraphs: [
          "Methotrexate is usually the first medicine for rheumatoid arthritis, often with another DMARD and a short course of steroids. For rheumatoid arthritis, you take it once a week, on the same day each week.",
          "It comes as tablets, a liquid, or pre-filled injection pens or syringes. You may be prescribed folic acid too, which reduces some side effects, but it is not taken on the same day as your methotrexate.",
        ],
      },
      {
        heading: "Slow to start",
        paragraphs: [
          "DMARDs usually take around 3 to 12 weeks to kick in, and keep improving until about 6 months. Once methotrexate reaches a full dose, it may take up to 12 weeks before you notice any benefit.",
          "It is important to keep taking the medicine, even if you do not notice it working at first. You may have to try 2 or 3 types of DMARD before finding the one that suits you best.",
        ],
      },
      {
        heading: "Side effects and blood tests",
        paragraphs: [
          "Common side effects of methotrexate include feeling sick, loss of appetite, a sore mouth, diarrhoea, headaches and hair loss. But most people tolerate methotrexate well.",
          "It can affect your blood cells and liver, so you will have regular blood tests: every 1 to 2 weeks at first, then every 2 to 3 months once your dose is right and the treatment is working well.",
          "Serious side effects are rare. A persistent cough, chest pain or difficulty breathing can be signs of lung inflammation, so tell your doctor or call 111 immediately.",
        ],
      },
      {
        heading: "The other DMARDs",
        paragraphs: [
          "Hydroxychloroquine is taken as tablets once or twice a day, and it takes several weeks to start working. If you take it for a long time, you will have regular eye check-ups.",
          "Sulfasalazine is commonly used with methotrexate, and its dose is built up gradually, usually over three weeks. Leflunomide stays in the body for a long time, so changing from it to another medicine needs careful management.",
        ],
      },
    ],
    helps: [
      "Take methotrexate once a week, on the same day each week, and keep your patient card with you.",
      "Never take 2 doses together to make up for a missed one; if a dose is more than 2 days late, contact your doctor or clinic.",
      "Store your weekly methotrexate away from any medicines you take daily.",
      "Go to all your blood tests, and record your dose and results in your booklet.",
      "Use a high factor sun cream of SPF 30 or above, as your skin may be more sensitive to the sun.",
      "Check with your healthcare team before taking any over-the-counter painkillers or supplements.",
    ],
    tryThisWeek: [
      "Pick your weekly methotrexate day.",
      "Store it away from daily medicines.",
      "Pack a high factor sun cream.",
    ],
    ask: "How long before we know if my DMARD is working, and how often are my blood tests?",
    interactive: {
      kind: "flip-cards",
      title: "Your DMARDs, card by card",
      intro: "Turn each card to see how each medicine is taken and what to know.",
      cards: [
        { id: "methotrexate", front: "Methotrexate", when: "Once a week, on the same day", back: "Usually the first medicine. Folic acid helps with side effects, on a different day." },
        { id: "hydroxychloroquine", front: "Hydroxychloroquine", when: "Tablets, once or twice a day", back: "Takes several weeks to work. Long-term use means regular eye check-ups." },
        { id: "sulfasalazine", front: "Sulfasalazine", when: "Commonly used with methotrexate", back: "The dose is built up gradually, usually over three weeks." },
        { id: "leflunomide", front: "Leflunomide", when: "A tablet once a day", back: "Stays in the body a long time, so changing to another medicine needs careful management." },
      ],
    },
    sources: [NHS_RA_TREATMENT, NHS_MTX_ABOUT, NHS_MTX_HOW, NHS_MTX_QUESTIONS, NHS_MTX_SIDE, NRAS_DMARDS, NHS_HCQ, NRAS_SULFA, NRAS_LEFLUNOMIDE, NHS_RA_LIVING],
    quiz: {
      question: "How often is methotrexate taken for rheumatoid arthritis?",
      options: [{ text: "Once a week", right: true }, { text: "Every day" }, { text: "Only during a flare" }],
      why: "For rheumatoid arthritis, you take it once a week, on the same day each week.",
    },
  },
  {
    id: "ra-biologics",
    kicker: "Treatment",
    question: "What are biologics and JAK inhibitors, and when are they used?",
    hook: "If the standard tablets have not controlled your rheumatoid arthritis, these targeted medicines are the next step.",
    short: "Biologics are medicines given by injection or drip that stop particular chemicals from switching on the immune attack on your joints. JAK inhibitors are tablets that block enzymes involved in the inflammation. Both are usually used when DMARDs such as methotrexate have not worked well enough, often alongside methotrexate, and infections need watching.",
    sections: [
      {
        heading: "When they come in",
        paragraphs: [
          "Biological treatments are usually only used if DMARDs have not been effective on their own. NRAS says that for maybe 10% to 20% of people, rheumatoid arthritis is more aggressive and harder to get under control.",
          "NICE guidance sets out who can have them. Usually you will have tried at least two DMARDs, one of them methotrexate unless you cannot tolerate it, and still have persistently high disease activity.",
        ],
      },
      {
        heading: "Biologics",
        paragraphs: [
          "Biologics, such as adalimumab, etanercept and infliximab, are made from proteins. They work by stopping particular chemicals in your blood from activating your immune system to attack your joints.",
          "They are given by injection under the skin, or some by a drip into a vein, and most are delivered by homecare companies. They are usually taken with methotrexate or another DMARD.",
          "Biosimilars are very similar copies of an original biologic, and they are generally more cost-effective. This is why you may be prescribed adalimumab under a different brand name.",
        ],
      },
      {
        heading: "JAK inhibitors",
        paragraphs: [
          "JAK inhibitors, such as tofacitinib, baricitinib, upadacitinib and filgotinib, are tablets that block the action of Janus kinase enzymes. They are offered to adults with moderate to severe rheumatoid arthritis who cannot take DMARDs or biologics, or found they did not work.",
          "They are usually used with methotrexate, but can be taken on their own by adults who cannot take methotrexate. If you are 65 or over, smoke or smoked for a long time, or already have a higher risk of heart problems or cancer, they should only be used if there is no suitable alternative.",
        ],
      },
      {
        heading: "Before you start",
        paragraphs: [
          "You will have blood tests, and a chest X-ray and tests to check whether you have ever been exposed to tuberculosis. Some people need treatment for TB first, because these medicines can bring back an infection you have had before.",
          "On adalimumab, you should start to feel better over 2 to 12 weeks. Most people who benefit from baricitinib notice some improvement within the first 12 weeks.",
        ],
      },
      {
        heading: "Side effects and infections",
        paragraphs: [
          "Side effects of biologics are usually mild, and include skin reactions where you inject, infections, feeling sick, a high temperature and headaches. Regularly changing where you inject helps reduce reactions.",
          "These medicines make infections more likely, and can make them harder to spot. Tell your doctor or rheumatology nurse straight away about signs of infection, such as a sore throat, fever or a persistent cough, and see your doctor after contact with chickenpox or shingles.",
          "With a JAK inhibitor, NRAS advises checking your skin at least once a month. Chest pain, sudden breathlessness, or weakness in the arms or legs and slurred speech mean calling 999 immediately.",
        ],
      },
    ],
    helps: [
      "Ask your rheumatology team for a biological therapy alert card, and mention your treatment to anyone else treating you.",
      "Tell your team straight away about signs of infection, and see your doctor after contact with chickenpox or shingles.",
      "Avoid close contact with people you know have an infection, and wash your hands regularly.",
      "Keep taking it even if it does not seem to work at first, and even when you feel better.",
      "Talk to your surgeon and rheumatology team before any operation, as you may need to stop it for a time.",
      "On a JAK inhibitor, check your skin at least once a month for new growths or lumps.",
    ],
    tryThisWeek: [
      "Ask for an alert card.",
      "Learn the signs of infection.",
      "Do a monthly skin check.",
    ],
    ask: "Am I eligible for a biologic or JAK inhibitor, and which would suit me?",
    interactive: {
      kind: "flip-cards",
      title: "Targeted medicines, card by card",
      intro: "Turn each card to see what each kind of medicine does.",
      cards: [
        { id: "anti-tnf", front: "Anti-TNF biologics", when: "Such as adalimumab or etanercept", back: "Block TNF, a protein that causes inflammation. Usually the first biologic people move on to." },
        { id: "other", front: "Other biologics", when: "Such as rituximab or abatacept", back: "Target other parts of the immune system. Given by injection or a drip into a vein." },
        { id: "biosimilars", front: "Biosimilars", when: "Copies of an original biologic", back: "Very similar to the original, and generally more cost-effective." },
        { id: "jak", front: "JAK inhibitors", when: "Tablets, such as baricitinib", back: "Block Janus kinase enzymes involved in inflammation. Not suitable for everyone." },
      ],
    },
    sources: [NHS_RA_TREATMENT, NRAS_WHAT, NRAS_BIOLOGICS, NRAS_JAK, AUK_ADALIMUMAB, AUK_BARICITINIB, AUK_DMARDS],
    quiz: {
      question: "When are biologics usually used?",
      options: [{ text: "When DMARDs have not worked well enough", right: true }, { text: "As the very first treatment" }, { text: "Only for pain relief" }],
      why: "Biological treatments are usually only used if DMARDs have not been effective on their own.",
    },
  },
  {
    id: "ra-steroids",
    kicker: "Treatment",
    question: "How do steroids help with rheumatoid arthritis?",
    hook: "Steroids calm inflammation fast. They are a short-term bridge, for a flare or while slower medicines start working.",
    short: "Steroids are powerful medicines that reduce pain, stiffness and inflammation quickly. They can be given as tablets such as prednisolone, or as injections into a joint or a muscle. Because long-term use can have serious side effects, they are usually used for a short time, during a flare or while waiting for DMARDs to work.",
    sections: [
      {
        heading: "A short-term help",
        paragraphs: [
          "Steroids, also called corticosteroids, are an artificial version of hormones your body usually makes. They help reduce redness and swelling and stop the body's immune system attacking itself.",
          "They are usually used for short-term relief, while you wait for DMARDs to take effect or during a flare-up. They will not cure your condition, but they are very good at reducing inflammation.",
        ],
      },
      {
        heading: "Tablets or injections",
        paragraphs: [
          "Steroids can be given as a tablet such as prednisolone, an injection directly into a painful joint, or an injection into a muscle to help lots of joints. Tablets are usually taken once a day, preferably in the morning, with or after food.",
          "A low dose of prednisolone has a noticeable effect within a few days. Some steroid injections start to relieve pain within hours and last about a week, while others take around a week to work but can ease symptoms for two months or longer.",
        ],
      },
      {
        heading: "Why only for a short time",
        paragraphs: [
          "Long-term use can have serious side effects, such as weight gain, osteoporosis, easy bruising, muscle weakness and thinning of the skin. Taking steroid tablets for a long time can also make you more likely to get infections.",
          "You will be given the lowest possible dose for the shortest possible time. Steroids often do not cause side effects if they are taken for a short time or at a low dose.",
        ],
      },
      {
        heading: "Coming off them safely",
        paragraphs: [
          "If you have taken a steroid medicine for longer than 3 weeks, or at a high dose, you will usually need to reduce the dose gradually. Do not stop taking your steroid medicine without talking to your doctor first.",
          "If you take high doses, or have taken steroids for more than three weeks, you will need to carry a steroid card. Steroid treatment can stop the body producing natural hormones, which can be dangerous if you get ill, have an accident or need an operation.",
        ],
      },
      {
        heading: "After an injection",
        paragraphs: [
          "It is important not to overdo it for the first two weeks after a steroid injection, as exercising the joint too much could damage the tendon. Your doctor will probably recommend no more than three injections into the same part of the body within a year.",
          "Occasionally joint pain flares within 24 hours of an injection, and it usually settles within a couple of days. If the joint becomes more painful and hot, see your doctor immediately, especially if you feel unwell.",
        ],
      },
    ],
    helps: [
      "Do not stop steroids suddenly; ask your doctor how to reduce them safely.",
      "Carry a steroid card if you take high doses or have taken steroids for more than three weeks.",
      "Take steroid tablets in the morning, with or after food.",
      "Tell your doctor or rheumatology nurse if you feel feverish or unwell, or have contact with chickenpox, shingles or measles.",
      "Ask about calcium and vitamin D, and keep up exercise that carries your body weight, such as walking, to protect your bones.",
      "Do not overdo it for two weeks after an injection, then build up your exercises gently.",
    ],
    tryThisWeek: [
      "Check you have a steroid card.",
      "Take tablets in the morning with food.",
      "Ask about protecting your bones.",
    ],
    ask: "How long will I be on steroids, and how will we reduce them?",
    interactive: {
      kind: "timeline",
      title: "After a steroid injection",
      steps: [
        { id: "clinic", when: "In the clinic", title: "Wait a little while", points: ["You might be asked to wait 10 to 15 minutes after the injection.", "Arrange transport home if you had a local anaesthetic."] },
        { id: "day", when: "First 24 hours", title: "A possible short flare", points: ["Occasionally joint pain flares within 24 hours.", "It usually settles within a couple of days; paracetamol helps."] },
        { id: "weeks", when: "First two weeks", title: "Go easy", points: ["Do not overdo it with the injected joint.", "Too much exercise too soon could damage the tendon."] },
        { id: "after", when: "After two weeks", title: "Build back up", points: ["Carry on with exercises from your health professional.", "Start gently and gradually increase what you do."] },
        { id: "year", when: "Over the year", title: "Not too many", points: ["Usually no more than three injections into the same area in a year.", "Keep any steroid card you were given with you."] },
      ],
    },
    sources: [NHS_RA_TREATMENT, NHS_STEROIDS, AUK_STEROIDS, AUK_STEROID_INJECTIONS, NRAS_STEROIDS],
    quiz: {
      question: "Why are steroids usually only used for a short time?",
      options: [{ text: "Long-term use can have serious side effects", right: true }, { text: "They stop working after a day" }, { text: "They only work on one joint" }],
      why: "Long-term use can have serious side effects, such as weight gain, osteoporosis, easy bruising, muscle weakness and thinning of the skin.",
    },
  },
  {
    id: "ra-hands",
    kicker: "Hands",
    question: "Which hand exercises and joint protection help?",
    hook: "Your hands have many small joints that work hard. Gentle, regular exercises and kinder ways of gripping can ease pain and protect them.",
    short: "Rheumatoid arthritis often affects the small joints of the hands first. Regular hand exercises, done for short periods a few times a day, can improve your grip, and joint protection, which means changing how you do things to reduce strain, can ease pain. An occupational therapist, physiotherapist or hand therapist can tailor both to you.",
    sections: [
      {
        heading: "Why the hands",
        paragraphs: [
          "Your hands are particularly at risk, because they have many small joints and are used a lot. You may find it hard to do things that need a good grip, such as writing, using your phone or fastening buttons.",
          "If your hands or wrists are affected, you can try a tailored hand exercise programme. This involves face-to-face sessions with a trained therapist, and doing the exercises yourself at home.",
        ],
      },
      {
        heading: "Gentle exercises to try",
        paragraphs: [
          "Arthritis UK describes a finger tendon glide: start with your fingers straight, then make a hook fist, a full fist and a straight fist, returning to a straight hand each time. For a thumb stretch, move your thumb across your palm and back.",
          "For a wrist turn, bend your elbow to 90 degrees with your palm facing down, then rotate your forearm so your palm faces up and then down. Start slowly and build up gradually, and get advice from a healthcare professional if you have any concerns.",
          "Practise hand exercises daily for short periods, a few times a day, and build up over several weeks. If your hand is painful, warm water and a sponge can soothe sore joints.",
        ],
      },
      {
        heading: "Protecting your joints",
        paragraphs: [
          "Joint protection means changing the way you do things to reduce pain and strain on your joints. It does not mean avoiding using them, and many people say they have less morning stiffness and fewer flare-ups when they use it regularly.",
          "Use two hands, spread the load over several joints and avoid gripping tightly. Carry bags on your forearms, hug larger objects close to your body, and use a padded handle to widen your grip.",
        ],
      },
      {
        heading: "Splints and gadgets",
        paragraphs: [
          "Working splints support your hands during daily activities, and resting splints are worn at night or when resting if pain affects your sleep. Some people find compression gloves help with pain and swelling.",
          "An occupational therapist can advise you on protecting your joints at home and at work. They may recommend a splint, or devices that help you open jars or turn on taps.",
          "Simple things help too, such as lever taps, an electric toothbrush, and rubber bands wrapped round handles for extra grip.",
        ],
      },
      {
        heading: "Listen to your hands",
        paragraphs: [
          "Notice any pain you feel and use it as a warning. Take a break every half an hour or so, and if something hurts, stop and think how you could do it differently.",
          "If a joint is very inflamed, swollen and painful, give it a short rest, then keep it moving once the swelling begins to settle. A physiotherapist can advise you about the best exercises for you.",
        ],
      },
    ],
    helps: [
      "Do hand exercises daily for short periods, a few times a day, and build up over several weeks.",
      "Get advice from a healthcare professional if you have concerns, and ask to be referred to a physiotherapist, occupational therapist or hand therapist for exercises to suit you.",
      "Use two hands and larger joints to lift and carry things.",
      "Loosen your grip, and use padded handles to widen it.",
      "Ask an occupational therapist about splints and gadgets for jars and taps.",
      "Soak stiff fingers in warm water in the morning to get them moving.",
    ],
    tryThisWeek: [
      "Do hand exercises a few times a day.",
      "Use two hands to lift and carry.",
      "Soak stiff fingers in warm water.",
    ],
    ask: "Could I be referred to a hand therapist or occupational therapist for exercises and splints?",
    interactive: {
      kind: "scenarios",
      title: "Kinder ways to use your hands",
      scenarios: [
        {
          id: "kettle",
          situation: "Your hands hurt when you lift the kettle.",
          options: [{ text: "Use two hands", best: true }, { text: "Grip harder with one hand" }],
          why: "Use two hands, spread the load over several joints and avoid gripping tightly.",
        },
        {
          id: "bags",
          situation: "You are carrying shopping bags home.",
          options: [{ text: "Carry them on your forearms", best: true }, { text: "Hook them on a few fingers" }],
          why: "Carry bags on your forearms, and hug larger objects close to your body.",
        },
        {
          id: "flare",
          situation: "Your knuckles are hot, swollen and very painful today.",
          options: [{ text: "Rest them, then move gently as it settles", best: true }, { text: "Do a full set of strengthening exercises" }],
          why: "If a joint is very inflamed, swollen and painful, give it a short rest, then keep it moving once the swelling begins to settle.",
        },
        {
          id: "night",
          situation: "Hand pain is waking you at night.",
          options: [{ text: "Ask about a resting splint", best: true }, { text: "Stop using your hands during the day" }],
          why: "Resting splints are worn at night or when resting if pain affects your sleep.",
        },
      ],
    },
    sources: [AUK_JOINT_CARE, AUK_HAND_EXERCISES, NHS_RA_TREATMENT, NRAS_TIPS, NRAS_WHAT],
    quiz: {
      question: "What is joint protection?",
      options: [{ text: "Changing how you do things to reduce strain", right: true }, { text: "Not using your hands at all" }, { text: "Wearing a splint all day" }],
      why: "Joint protection means changing the way you do things to reduce pain and strain on your joints.",
    },
  },
  {
    id: "ra-mornings",
    kicker: "Daily life",
    question: "How can I make stiff mornings easier?",
    hook: "Morning stiffness in rheumatoid arthritis often lasts longer than half an hour. Warmth, a slower start and a little preparation help.",
    short: "Stiffness in rheumatoid arthritis is often worst in the morning, and it often lasts longer than 30 minutes. Heat, gentle stretches, taking your medicines at the right time and getting ready the night before can make mornings easier. Without effective medication, morning stiffness can last several hours.",
    sections: [
      {
        heading: "Why mornings are hard",
        paragraphs: [
          "Pain and stiffness in rheumatoid arthritis are often worse in the morning and after a period of inactivity. Your joints gel, which means they become difficult to move after you have rested them.",
          "Morning stiffness in osteoarthritis usually wears off within 30 minutes of getting up, but in rheumatoid arthritis it often lasts longer. It can last several hours if you are not taking effective medication.",
        ],
      },
      {
        heading: "Warm up first",
        paragraphs: [
          "Heat can soothe stiff or achy joints. You could try a hot shower, a hot water bottle, or soaking sore hands in a sink full of warm water.",
          "Microwavable wheat bags can also help get stiff fingers moving. Protect your skin from direct dry heat with a towel.",
        ],
      },
      {
        heading: "Move gently",
        paragraphs: [
          "Staying as active as possible can help reduce pain, ease stiffness and improve your energy. You could start the day with a few simple stretches, a walk, swimming or tai chi.",
          "Without movement, joints stiffen and muscles become weaker. Find a balance between rest and exercise, and increase the amount you do gradually.",
        ],
      },
      {
        heading: "Plan rather than rush",
        paragraphs: [
          "If mornings are hectic, try to do as much as you can the night before, such as setting out your clothes and preparing breakfast. Waking a bit earlier gives you time to get washed, dressed and take your medicines.",
          "Some people set an alarm and take their pain medicines before they need to get up. Follow the instructions on the pack, as some medicines are taken with food.",
        ],
      },
      {
        heading: "Small aids, better sleep",
        paragraphs: [
          "An occupational therapist can suggest aids such as button hooks, zip pullers or long-handled shoehorns. Tops with Velcro or popper fastenings can be easier than buttons.",
          "A better night's sleep is a good place to start. Try going to bed and waking up around the same times, and turning off your devices an hour before bedtime.",
        ],
      },
    ],
    helps: [
      "Use heat in the morning: a hot shower, a hot water bottle or warm water for sore hands.",
      "Start the day with a few gentle stretches or a short walk.",
      "Get your clothes and breakfast ready the night before.",
      "Ask an occupational therapist about dressing aids, such as button hooks and zip pullers.",
      "If you work, ask about flexible hours so you can start later on difficult mornings.",
      "Tell your rheumatology team if stiffness lasts for hours, which can happen without effective medication.",
    ],
    tryThisWeek: [
      "Warm your hands in the morning.",
      "Lay out clothes the night before.",
      "Try a few morning stretches.",
    ],
    ask: "My mornings are still stiff for a long time: does my treatment need looking at?",
    interactive: {
      kind: "timeline",
      title: "A gentler morning",
      steps: [
        { id: "evening", when: "The night before", title: "Get ready early", points: ["Set out your clothes.", "Get packed lunches and breakfast ready."] },
        { id: "bed", when: "At bedtime", title: "Set up for sleep", points: ["Turn off devices an hour before bed.", "Go to bed around the same time each night."] },
        { id: "wake", when: "On waking", title: "Ease in", points: ["Some people take pain medicines with an alarm, before getting up.", "Check the pack: some medicines are taken with food."] },
        { id: "warm", when: "First thing", title: "Warm up", points: ["A hot shower or a hot water bottle.", "Soak sore hands in a sink of warm water."] },
        { id: "move", when: "To start the day", title: "Move gently", points: ["A few simple stretches, or a short walk.", "Pick something you enjoy, so it becomes routine."] },
      ],
    },
    sources: [NHS_RA_SYMPTOMS, NRAS_WHAT, AUK_STIFFNESS, NRAS_TIPS, NRAS_FLARES, NHS_RA_LIVING],
    quiz: {
      question: "How long does morning stiffness in rheumatoid arthritis often last?",
      options: [{ text: "Longer than 30 minutes", right: true }, { text: "Less than five minutes" }, { text: "It only happens at night" }],
      why: "Morning stiffness in osteoarthritis usually wears off within 30 minutes of getting up, but in rheumatoid arthritis it often lasts longer.",
    },
  },
  {
    id: "ra-fatigue",
    kicker: "Fatigue",
    question: "Why am I so tired, and what helps?",
    hook: "Fatigue is not ordinary tiredness. It can be one of the hardest parts of rheumatoid arthritis, but pacing and good control help.",
    short: "Fatigue is an extreme physical and mental tiredness that does not significantly improve with rest or sleep. In an NRAS survey, 89% of people with rheumatoid arthritis said they had it. Inflammation, anaemia, pain, poor sleep and low mood can all play a part, and pacing, gentle exercise and good control of the condition can help.",
    sections: [
      {
        heading: "More than tiredness",
        paragraphs: [
          "Fatigue is an extreme, sometimes overwhelming, physical and mental tiredness that does not significantly improve with rest or sleep. It can affect your motivation and your ability to concentrate, which is sometimes described as brain fog.",
          "It is unpredictable, and it can last an hour, a day or several days. In an NRAS survey in 2014, 89% of people with rheumatoid arthritis said they had fatigue, and 40% of those had persistent and severe fatigue.",
        ],
      },
      {
        heading: "What causes it",
        paragraphs: [
          "Usually there is not a single reason. In rheumatoid arthritis, it can come from inflammation, disease activity, and anaemia, a lack of red blood cells.",
          "Pain, poor sleep, low mood and stress, a lack of physical activity and social isolation can add to it. Fatigue can be worse during a flare.",
        ],
      },
      {
        heading: "Pacing and the four Ps",
        paragraphs: [
          "Arthritis UK suggests the four Ps: problem solving, planning, prioritising and pacing. Think about them at the beginning of each day or week to help manage your energy.",
          "Pacing means not using up all your energy in one go. Break big jobs into smaller tasks and spread them out, rather than doing too much on one day and feeling unable to do anything the next.",
          "Keeping a diary of your activity and fatigue levels can help you pace yourself and spot patterns.",
        ],
      },
      {
        heading: "Moving more, gently",
        paragraphs: [
          "Adding some gentle exercise can increase the amount of energy you have, because weak muscles use more energy. Start slowly, perhaps with a 5 to 10 minute walk or some gentle stretching, and build up gradually.",
          "A healthy diet, drinking enough fluids and a good night's sleep also help, along with relaxation techniques to reduce stress.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Above all, it is important that your rheumatoid arthritis is well controlled. If you are more fatigued than usual and it is getting hard to manage, talk to your rheumatology team rather than struggle until your next appointment.",
          "Your doctor may suggest blood tests to check another condition is not causing it. An occupational therapist can suggest easy-to-use gadgets and ways of doing things that put less strain on your joints.",
        ],
      },
    ],
    helps: [
      "Plan your day or week, and break big jobs into smaller tasks.",
      "Pace yourself, and avoid the boom and bust of doing too much on one day.",
      "Add some gentle exercise, starting with a 5 to 10 minute walk.",
      "Keep a diary of your activity and fatigue levels to help with pacing.",
      "Plan activities you enjoy into your day, not just chores: they can improve your mood and energy.",
      "Talk to your rheumatology team if you are more fatigued than usual and it is hard to manage.",
    ],
    tryThisWeek: [
      "Break one big job into smaller parts.",
      "Take a short daily walk.",
      "Keep a fatigue diary.",
    ],
    ask: "Could anything else, such as anaemia, be adding to my fatigue?",
    interactive: {
      kind: "risk-check",
      title: "What adds to your fatigue?",
      intro: "Tick any that apply. Some you can work on yourself, and some need your healthcare team.",
      items: [
        { id: "active", label: "Active rheumatoid arthritis", note: "Disease activity and inflammation can cause fatigue. Good control of the condition helps.", changeable: true },
        { id: "anaemia", label: "Anaemia", note: "A lack of red blood cells can mean weaker muscles and lower energy. A blood test can check.", changeable: true },
        { id: "sleep", label: "Poor sleep", note: "Painful joints can wake you as you move at night. Good sleep habits can help.", changeable: true },
        { id: "inactive", label: "Not much physical activity", note: "Weak muscles use more energy, so doing too little can be as damaging as doing too much.", changeable: true },
        { id: "stress", label: "Low mood or stress", note: "Stress and worry can make fatigue feel worse. Talking about how you feel can help.", changeable: true },
        { id: "boom", label: "Boom and bust days", note: "Doing too much on one day can leave you unable to do anything the next.", changeable: true },
        { id: "flare", label: "A flare", note: "Fatigue can be worse during a flare.", changeable: false },
      ],
    },
    sources: [AUK_FATIGUE, NRAS_FATIGUE, AUK_4PS, AUK_FATIGUE_TIPS, NRAS_FLARES],
    quiz: {
      question: "What is fatigue in rheumatoid arthritis?",
      options: [{ text: "Extreme tiredness that rest does not fix", right: true }, { text: "Sleepiness after a late night" }, { text: "A side effect of painkillers only" }],
      why: "Fatigue is an extreme, sometimes overwhelming, physical and mental tiredness that does not significantly improve with rest or sleep.",
    },
  },
  {
    id: "ra-work",
    kicker: "Work",
    question: "How can I keep working with rheumatoid arthritis?",
    hook: "You have rights at work. Reasonable adjustments and Access to Work can make the difference between struggling and staying.",
    short: "Employers have to make reasonable adjustments so workers with health conditions are not substantially disadvantaged, such as different equipment or flexible hours. The government's Access to Work scheme can help pay for support beyond that, such as specialist equipment or travel to work. Talking to your manager early usually helps.",
    sections: [
      {
        heading: "Your rights",
        paragraphs: [
          "Under the Equality Act 2010, you are disabled if you have a physical or mental impairment that has a substantial and long-term negative effect on your ability to do normal daily activities. Long-term means 12 months or more, and there are special rules for conditions that come and go, such as arthritis.",
          "NRAS says most people with rheumatoid arthritis are likely to meet this definition, depending on how aggressive their condition is.",
        ],
      },
      {
        heading: "Telling your employer",
        paragraphs: [
          "There are no rules that say you have to tell your employer about your condition. But if it is causing problems at work, telling them can help you work together to find the adjustments you need.",
          "People with arthritis have told Arthritis UK that talking to a line manager about a problem early on is much better than letting something reach a crisis point.",
        ],
      },
      {
        heading: "Reasonable adjustments",
        paragraphs: [
          "Employers have to make reasonable adjustments, so that workers with disabilities or health conditions are not substantially disadvantaged. Examples include changing equipment, such as a special keyboard for someone with arthritis, or a phased return with flexible hours or part-time working.",
          "For rheumatoid arthritis, adjustments could include time off for assessment or treatment, changes to your work area, giving some duties to someone else, or changing your hours.",
          "Think about the times when your condition flares or you start new treatment, as you may need extra support then. Writing down what you agree can help if your manager changes.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. It can give you a grant towards things like specialist equipment, support workers, travel to work if you cannot use public transport, and changes to your workplace.",
          "To be eligible, you need to be 16 or over and in paid work, or about to start or return to it within 12 weeks, in England, Scotland or Wales. The grant does not affect other benefits and you do not pay it back, but it does not pay for reasonable adjustments, which your employer has to make.",
        ],
      },
      {
        heading: "Who can help",
        paragraphs: [
          "An occupational therapist can advise you on what might help at work and support an application for adjustments. A Disability Employment Adviser at your local Jobcentre Plus can also give advice.",
          "If you have a job but cannot work because of your condition, you are entitled to Statutory Sick Pay from your employer for up to 28 weeks. Other financial support may be available if you have to stop or reduce work.",
        ],
      },
    ],
    helps: [
      "Talk to your line manager early, before a problem reaches a crisis point.",
      "Use a work adjustment plan to note how your condition affects your work and what would help.",
      "Ask about flexible or reduced hours, working from home or longer breaks.",
      "Apply for Access to Work if you need support beyond the adjustments your employer makes.",
      "Get advice from a Disability Employment Adviser at your local Jobcentre Plus.",
      "Write down any adjustments you agree.",
    ],
    tryThisWeek: [
      "List what makes work harder.",
      "Book a chat with your manager.",
      "Check Access to Work.",
    ],
    ask: "Could I see an occupational therapist about adjustments at work?",
    interactive: {
      kind: "scenarios",
      title: "Moments at work",
      scenarios: [
        {
          id: "tell",
          situation: "Typing is getting painful, but you have not told work about your condition.",
          options: [{ text: "Talk to your manager about adjustments", best: true }, { text: "Say nothing and push on" }],
          why: "If it is causing problems at work, telling them can help you work together to find the adjustments you need.",
        },
        {
          id: "keyboard",
          situation: "A different keyboard would make your job easier.",
          options: [{ text: "Ask your employer for it as an adjustment", best: true }, { text: "Assume you have to pay for it" }],
          why: "Examples include changing equipment, such as a special keyboard for someone with arthritis.",
        },
        {
          id: "travel",
          situation: "Some weeks you cannot use public transport to get to work.",
          options: [{ text: "Ask Access to Work about travel costs", best: true }, { text: "Give up the job" }],
          why: "Access to Work can give you a grant towards travel to work if you cannot use public transport.",
        },
        {
          id: "flare",
          situation: "You are starting a new treatment and expect a hard few weeks.",
          options: [{ text: "Plan extra support with your employer", best: true }, { text: "Hope nobody notices" }],
          why: "Think about the times when your condition flares or you start new treatment, as you may need extra support then.",
        },
      ],
    },
    sources: [GOV_DISABILITY, NRAS_EQUALITY, AUK_DISCLOSING, GOV_ADJUSTMENTS, AUK_ADJUSTMENTS, GOV_ATW, GOV_ATW_ELIGIBILITY, NHS_RA_LIVING],
    quiz: {
      question: "Who pays for reasonable adjustments at work?",
      options: [{ text: "Your employer", right: true }, { text: "Access to Work" }, { text: "You do" }],
      why: "Access to Work does not pay for reasonable adjustments, which your employer has to make.",
    },
  },
  {
    id: "ra-infections",
    kicker: "Infections",
    question: "How do I lower my risk of infections, and which vaccines should I have?",
    hook: "Rheumatoid arthritis and its medicines can lower your defences. Vaccines and a few simple habits help.",
    short: "People with rheumatoid arthritis are at higher risk of infection, partly because of the condition and partly because of medicines such as DMARDs and steroids. A yearly flu vaccine and a pneumococcal vaccine are usually advised, and some people can have a non-live shingles vaccine. Live vaccines are not suitable with many of these medicines, so always say what you take.",
    sections: [
      {
        heading: "Why infections matter",
        paragraphs: [
          "People with rheumatoid arthritis are at higher risk of infection, and infections may be more severe. This can be due to the condition itself or its treatment, such as DMARDs or steroids.",
          "Methotrexate may lower the number of white cells in your blood, which can make you more likely to get an infection. Biologics and JAK inhibitors can also make infections more likely, and harder to spot.",
        ],
      },
      {
        heading: "Flu and pneumonia",
        paragraphs: [
          "If you have rheumatoid arthritis, you may be advised to have a yearly flu vaccination. You may also be advised to have a one-off pneumococcal vaccination, which protects against a serious chest infection called pneumococcal pneumonia.",
          "The flu vaccine for adults is an injection and is not a live vaccine, so it is suitable on methotrexate. The nasal spray flu vaccine is live and not suitable for adults taking methotrexate.",
        ],
      },
      {
        heading: "Shingles",
        paragraphs: [
          "The NHS offers the shingles vaccine to all adults turning 65, those aged 70 to 79, and those aged 18 and over with a severely weakened immune system, including people taking certain medicines.",
          "Shingrix is not a live vaccine and can be given while you are taking DMARDs, biological therapies or steroids. Tell your rheumatology team before your first dose.",
        ],
      },
      {
        heading: "Live vaccines",
        paragraphs: [
          "Live vaccines include yellow fever, MMR, BCG and chickenpox. They are not recommended if you are on certain DMARDs or biological therapies, and they cannot be given to anyone already taking methotrexate or leflunomide.",
          "Tell the person giving any vaccine that you take methotrexate, to make sure it is suitable for you. If you are travelling, allow at least a few months to arrange any vaccines you need.",
        ],
      },
      {
        heading: "Everyday habits",
        paragraphs: [
          "Wash your hands often, avoid close contact with people you know are unwell, and avoid unpasteurised milk and soft cheeses if you are on immunosuppressive medicines.",
          "Contact your doctor early if you get a fever. Ask for urgent advice if you have been in contact with anyone who has chickenpox or shingles while taking methotrexate.",
          "Many people worry that vaccines will cause a flare, but trials have found that this is not the case.",
        ],
      },
    ],
    helps: [
      "Have the flu vaccine every year, and the pneumococcal vaccine once.",
      "Tell the person giving any vaccine which medicines you take.",
      "Check with your rheumatology team or GP before any live vaccine, including for travel.",
      "Wash your hands regularly, and avoid close contact with people you know are unwell.",
      "Get urgent advice after contact with chickenpox or shingles.",
      "Ask whether the people you live with can be vaccinated too, to reduce the risk of passing on an infection.",
    ],
    tryThisWeek: [
      "Book this year's flu vaccine.",
      "Check you have had the pneumococcal vaccine.",
      "List your medicines for any vaccinator.",
    ],
    ask: "Which vaccines should I have on my medicines, and are any live vaccines unsafe for me?",
    interactive: {
      kind: "signs",
      title: "Signs of infection to report",
      intro: "Tick any you have now. On medicines that lower your defences, infections can be harder to spot.",
      signs: ["A high temperature, or feeling hot, cold or shivery", "A sore throat", "Muscle aches", "A persistent cough", "Coughing up green phlegm", "Diarrhoea", "Contact with chickenpox or shingles"],
      after: "Tell your doctor or rheumatology nurse straight away. On methotrexate, the NHS says to tell your doctor or call 111 immediately for a high temperature, muscle aches or a sore throat.",
      copyHeading: "Signs of infection I have",
    },
    sources: [AUK_VACCINATIONS, NHS_RA_LIVING, NHS_MTX_ABOUT, NHS_MTX_QUESTIONS, NRAS_MTX, NHS_SHINGLES, AUK_ADALIMUMAB, AUK_BARICITINIB, NRAS_LEFLUNOMIDE, NHS_MTX_SIDE],
    quiz: {
      question: "Is the adult flu vaccine suitable if you take methotrexate?",
      options: [{ text: "Yes, the injection is not a live vaccine", right: true }, { text: "No vaccines are allowed on methotrexate" }, { text: "Only the nasal spray is allowed" }],
      why: "The flu vaccine for adults is an injection and is not a live vaccine, so it is suitable on methotrexate.",
    },
  },
  {
    id: "ra-pregnancy",
    kicker: "Family",
    question: "Can I have a baby while on rheumatoid arthritis medicines?",
    hook: "With planning, yes. Some medicines need changing well before you try, and many can be continued safely.",
    short: "If your rheumatoid arthritis is under control, it should not affect whether you can get pregnant and have a baby. Some medicines, such as methotrexate and leflunomide, need to be stopped or changed before trying, while others, such as hydroxychloroquine and sulfasalazine, can be taken in pregnancy. Talk to your team before trying, and never stop a medicine without advice.",
    sections: [
      {
        heading: "Plan ahead",
        paragraphs: [
          "If your rheumatoid arthritis is under control, it should not affect whether you can get pregnant and have a baby. It is better to try for a baby when your condition is not very active.",
          "Let your healthcare team know if you want to start a family. They will work with you to keep your rheumatoid arthritis under control while you try, and can refer you to a specialist who looks after pregnant people with it.",
        ],
      },
      {
        heading: "Medicines to change first",
        paragraphs: [
          "The NHS says some medicines, such as methotrexate, leflunomide and biological treatments, should not be taken while trying for a baby. Advice differs between medicines, and Arthritis UK says many can now be taken safely, so check each one with your team.",
          "Methotrexate can cause birth defects, so ask your doctor about switching before you stop contraception. Leflunomide stays in the body for a long time, so women need effective contraception for two years after stopping it, unless they have a course of medicine to remove it more quickly.",
        ],
      },
      {
        heading: "Medicines that can continue",
        paragraphs: [
          "Hydroxychloroquine can be used during pregnancy if needed. Sulfasalazine can be taken throughout pregnancy, and some steroid tablets, including prednisolone, can be taken too.",
          "Keeping your condition in check matters. Continuing medicines that are safe in pregnancy makes it more likely your condition stays under control, and makes flares less likely just after the birth.",
        ],
      },
      {
        heading: "If you become pregnant unexpectedly",
        paragraphs: [
          "It is not always possible to plan ahead, so let your rheumatology team know as soon as you become pregnant. If you become pregnant while taking methotrexate, do not stop it, but speak to your doctor as soon as possible.",
        ],
      },
      {
        heading: "Pregnancy and after",
        paragraphs: [
          "Arthritis UK estimates that three in five women with rheumatoid arthritis notice some improvement during pregnancy, but almost half have a flare-up after giving birth.",
          "Folic acid matters for every pregnancy, and you will need a higher dose if you took methotrexate within three months of becoming pregnant or take sulfasalazine. Babies are demanding, so ask your health visitor or occupational therapist about extra support.",
        ],
      },
    ],
    helps: [
      "Talk to your rheumatology team before you start trying for a baby.",
      "Do not stop any medicine without speaking to a doctor first.",
      "Keep using contraception until your team has reviewed medicines such as methotrexate or leflunomide.",
      "Tell your rheumatology team as soon as you know you are pregnant.",
      "Start folic acid about three months before trying, and ask if you need a higher dose.",
      "Look up your medicines on the Best Use of Medicines in Pregnancy (Bumps) website to help your conversations with your team.",
    ],
    tryThisWeek: [
      "Ask your team about planning a baby.",
      "Keep your contraception going for now.",
      "Ask about folic acid.",
    ],
    ask: "Which of my medicines are safe if I want to try for a baby, and what needs changing?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines and pregnancy, card by card",
      intro: "Turn each card to see what the sources say. Always check your own plan with your team.",
      cards: [
        { id: "methotrexate", front: "Methotrexate", when: "Not recommended in pregnancy", back: "Can cause birth defects. Ask about switching before you stop contraception." },
        { id: "leflunomide", front: "Leflunomide", when: "Stays in the body a long time", back: "Contraception for two years after stopping, unless a course of medicine removes it sooner." },
        { id: "hydroxychloroquine", front: "Hydroxychloroquine", when: "Can be used in pregnancy", back: "Used if needed, at the lowest possible effective dose." },
        { id: "sulfasalazine", front: "Sulfasalazine", when: "Can be taken throughout pregnancy", back: "You will need a higher daily dose of folic acid while taking it." },
        { id: "prednisolone", front: "Prednisolone", when: "Can be taken in pregnancy", back: "Steroid tablets like this are often used to treat flare-ups in pregnancy." },
        { id: "adalimumab", front: "Adalimumab", when: "A biologic", back: "Can be taken in the first six months of pregnancy. Discuss the last three with your rheumatologist." },
      ],
    },
    sources: [AUK_RA, AUK_PREGNANCY, NHS_RA_LIVING, NHS_MTX_PREGNANCY, NRAS_LEFLUNOMIDE, NHS_HCQ, NRAS_SULFA, AUK_STEROIDS, AUK_ADALIMUMAB],
    quiz: {
      question: "If you find you are pregnant while taking methotrexate, what should you do?",
      options: [{ text: "Keep taking it and speak to your doctor quickly", right: true }, { text: "Stop it straight away on your own" }, { text: "Wait for your next routine appointment" }],
      why: "If you become pregnant while taking methotrexate, do not stop it, but speak to your doctor as soon as possible.",
    },
  },
];
