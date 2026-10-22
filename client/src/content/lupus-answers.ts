import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Lupus (SLE) page's pieces (content/library-conditions/body-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS,
// LUPUS UK and Arthritis UK (the charity formerly called Versus Arthritis; its lupus page now lives at
// arthritis-uk.org). Emergency and urgent-help wording is copied from the NHS pages named. General
// information only; it never replaces what a person's own rheumatology team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const luk = (label: string, path: string): LearnSource => ({ label: `LUPUS UK: ${label}`, url: `https://lupusuk.org.uk/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });

const NHS_LUPUS = nhs("Lupus", "conditions/lupus/");
const NHS_HCQ = nhs("Hydroxychloroquine", "medicines/hydroxychloroquine/");
const NHS_STEROIDS = nhs("Steroids", "medicines/steroids/");
const NHS_PLEURISY = nhs("Pleurisy", "conditions/pleurisy/");
const NHS_APS = nhs("Antiphospholipid syndrome (APS)", "conditions/antiphospholipid-syndrome/");
const NHS_SUN = nhs("Sunscreen and sun safety", "live-well/seasonal-health/sunscreen-and-sun-safety/");
const NHS_VITAMIN_D = nhs("Vitamin D", "conditions/vitamins-and-minerals/vitamin-d/");
const NHS_URGENT_MENTAL = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const LUK_WHAT = luk("What is lupus?", "what-is-lupus/");
const LUK_SYMPTOMS = luk("The symptoms", "the-symptoms/");
const LUK_DIAGNOSIS = luk("Diagnosis", "diagnosis/");
const LUK_TREATMENTS = luk("Treatments", "treatments/");
const LUK_HCQ = luk("Hydroxychloroquine prescriptions", "treatments-2/");
const LUK_MANAGE = luk("Manage your lupus", "manage-your-lupus/");
const LUK_FATIGUE = luk("Fatigue", "fatigue/");
const LUK_DEPRESSION = luk("Lupus and depression", "lupus-and-depression/");
const LUK_HAIR = luk("Lupus hair loss and wigs", "lupus-hair-loss-and-wigs/");
const LUK_VISITS = luk("GP or consultant visits", "gp-or-consultant-visits/");
const LUK_TALK = luk("Need to talk?", "need-to-talk/");

const AUK_LUPUS = auk("Lupus (SLE)", "understanding-arthritis/conditions/lupus-sle/");
const AUK_HCQ = auk("Hydroxychloroquine", "understanding-arthritis/arthritis-treatments/drugs/hydroxychloroquine/");
const AUK_STEROIDS = auk("Steroids", "understanding-arthritis/arthritis-treatments/drugs/steroids/");
const AUK_MYCOPHENOLATE = auk("Mycophenolate", "understanding-arthritis/arthritis-treatments/drugs/mycophenolate/");
const AUK_BELIMUMAB = auk("Belimumab", "understanding-arthritis/arthritis-treatments/drugs/belimumab/");
const AUK_FATIGUE = auk("Coping with and managing arthritis fatigue", "understanding-arthritis/managing-arthritis-symptoms/managing-fatigue/");
const AUK_4PS = auk("The 4 Ps: strategies you can use to cope with fatigue", "understanding-arthritis/managing-arthritis-symptoms/managing-fatigue/the-4-ps-strategies-you-can-use-to-cope-with-fatigue/");
const AUK_PREGNANCY = auk("Pregnancy, fertility and arthritis", "living-with-arthritis/emotions-and-relationships/sex-relationships-and-arthritis/pregnancy-fertility-and-arthritis/");

export const lupusAnswers: LearnArticle[] = [
  {
    id: "sle-what-it-is",
    kicker: "Understanding",
    question: "What is lupus?",
    hook: "An immune system that attacks healthy parts of the body by mistake. It varies from person to person, and most people can keep it under control.",
    short: "Lupus (systemic lupus erythematosus, or SLE) is a long-term autoimmune condition. The immune system attacks healthy parts of the body by mistake, causing joint pain, skin rashes and tiredness. There is no cure yet, but modern treatments mean most people can keep it under control.",
    sections: [
      {
        heading: "An immune system that turns on the body",
        paragraphs: [
          "Lupus is an autoimmune condition. This means the body's natural defence system, the immune system, attacks healthy parts of your body.",
          "It makes proteins called autoantibodies that attack the body's own cells. When clumps of these build up in organs like the skin, joints or kidneys, they can cause swelling, pain and damage.",
        ],
      },
      {
        heading: "Different types of lupus",
        paragraphs: [
          "Systemic lupus erythematosus, or SLE, is what most people mean when they talk about lupus. It is systemic, which means it can affect any part of the body.",
          "Discoid lupus only affects the skin, causing rashes. Drug-induced lupus is a reaction to some medicines, and it usually gets better when people come off the medicine that caused it.",
        ],
      },
      {
        heading: "What causes it",
        paragraphs: [
          "The causes of lupus are not fully understood. It is thought to be the result of a mix of genetic, hormonal and environmental factors.",
          "Possible causes include a viral infection, certain medicines, strong sunlight, smoking, and hormonal changes such as puberty, childbirth and the menopause.",
          "Lupus is not directly passed on from a parent to their children, but if you have a close relative with lupus you may be at increased risk. It is not contagious, so you cannot catch it from anyone else.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "Lupus can affect anyone, but it is much more common in women than men. It often develops between the ages of 15 and 55, and around 2 in 10 cases start in childhood.",
          "It is more common in women with an African, Caribbean, Asian or Chinese background, and it can sometimes be more severe in these groups.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "It is difficult to say how lupus will affect you, because it varies greatly between people. Treatments have improved a lot in recent years.",
          "There is no cure yet, but modern treatments mean most people can keep it under control and live long, fulfilling lives. Lupus is better managed if it is found and treated early.",
        ],
      },
    ],
    helps: [
      "See a GP if you often get symptoms of lupus, as it is better managed if it is found and treated early.",
      "If you smoke, try to stop: smoking makes lupus worse.",
      "Have a healthy diet, exercise regularly and do not smoke, to help reduce your risk of the more serious complications.",
      "Become well educated about lupus, as LUPUS UK suggests.",
      "Report any new symptoms to your healthcare professionals.",
    ],
    tryThisWeek: [
      "See a GP about frequent symptoms.",
      "If you smoke, plan to stop.",
      "Note any new symptoms.",
    ],
    ask: "Which type of lupus do I have, and which parts of my body does it affect?",
    interactive: {
      kind: "risk-check",
      title: "What makes lupus more likely?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "woman", label: "Being a woman", note: "Lupus is much more common in women than men.", changeable: false },
        { id: "age", label: "Being aged 15 to 55", note: "Lupus can appear at any age, but it often develops between 15 and 55.", changeable: false },
        { id: "background", label: "African, Caribbean or Asian ancestry", note: "Lupus is more common in people of Asian, Black African and Black Caribbean ancestry.", changeable: false },
        { id: "family", label: "A close relative with lupus", note: "It is not directly passed on, but you may be at increased risk.", changeable: false },
        { id: "sun", label: "Strong sunlight", note: "Strong sunlight is one of the factors that probably make lupus more likely.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Smoking probably makes lupus more likely, and it makes lupus worse.", changeable: true },
      ],
    },
    sources: [NHS_LUPUS, LUK_WHAT, AUK_LUPUS, LUK_MANAGE],
    quiz: {
      question: "What happens in lupus?",
      options: [{ text: "The immune system attacks healthy parts of the body", right: true }, { text: "It is caught from someone else" }, { text: "The joints wear out with age" }],
      why: "Lupus is an autoimmune condition. This means the body's natural defence system, the immune system, attacks healthy parts of your body.",
    },
  },
  {
    id: "sle-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of lupus?",
    hook: "Joint pain, extreme tiredness and rashes are the most common. Symptoms vary a lot from person to person, and they often come and go.",
    short: "The main symptoms of lupus are joint and muscle pain, extreme tiredness that does not go away with rest, and rashes that usually come on after being in the sun. Many other symptoms are possible, and they often flare up and settle down. Most people have only one or a few of them.",
    sections: [
      {
        heading: "The main three",
        paragraphs: [
          "The main symptoms of lupus include joint and muscle pain, and extreme tiredness that will not go away no matter how much you rest. Almost 9 out of 10 people with lupus report experiencing fatigue.",
          "Rashes usually come on after being in the sun. A butterfly-shaped rash over the cheeks and the bridge of the nose is common in lupus.",
        ],
      },
      {
        heading: "Other symptoms",
        paragraphs: [
          "You might also have headaches, mouth ulcers, a high temperature, hair loss, weight loss, and swollen glands, usually in the neck, armpits or groin.",
          "Some people notice their fingers change colour in cold weather, going first very pale, then blue and finally red. This is called Raynaud's phenomenon, and it can also happen when you are anxious or stressed.",
          "Lupus can also cause depression and anxiety, and chest or tummy pain.",
        ],
      },
      {
        heading: "Joints and hair",
        paragraphs: [
          "Joint pain is common in lupus, especially in the small joints of the hands and feet, and it often moves from joint to joint. In most cases, lupus is unlikely to cause permanent damage or change the shape of joints.",
          "General thinning of the hair is fairly common, and it can become patchy when lupus is active. Once a flare-up is brought under control, the hair will usually grow back.",
        ],
      },
      {
        heading: "Coming and going",
        paragraphs: [
          "Lupus often flares up, and symptoms become worse for a few weeks, sometimes longer. Symptoms then settle down, which is called remission.",
          "Some people do not notice any difference and their symptoms are constant. Most people will only have one or a few of the possible symptoms.",
        ],
      },
      {
        heading: "Why it can be confusing",
        paragraphs: [
          "Two people may both have lupus but have different symptoms. One person might have skin rashes and joint pain, while another might have kidney problems or tiredness as their main symptom.",
          "Because lupus can affect almost any part of the body, it can mimic other conditions, such as arthritis, chronic fatigue syndrome or kidney disease.",
        ],
      },
    ],
    helps: [
      "See a GP if you often get symptoms of lupus.",
      "Tell your doctor or specialist nurse if you have any new joint pain.",
      "See your doctor if you have pain in your groin, as it could be a sign of a more serious complication.",
      "Tell your doctor or nurse specialist if you bruise easily or notice bleeding from the gums or nose.",
      "See a doctor as soon as possible about any symptoms affecting your eyes.",
      "Report any new symptoms to your healthcare professionals.",
    ],
    tryThisWeek: [
      "Note any new joint pain.",
      "Report easy bruising or bleeding.",
      "Get eye symptoms seen quickly.",
    ],
    ask: "Which of my symptoms are caused by lupus, and which should I report straight away?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick any you have noticed. Lupus can cause many different symptoms, and they can come and go.",
      signs: ["Joint or muscle pain", "Extreme tiredness that rest does not ease", "A rash after being in the sun", "Mouth ulcers", "Hair loss", "A high temperature", "Swollen glands", "Fingers or toes changing colour", "Chest or tummy pain"],
      after: "Tell your GP or rheumatology team. Lupus is better managed if it is found and treated early.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_LUPUS, AUK_LUPUS, LUK_SYMPTOMS, LUK_HAIR, LUK_WHAT],
    quiz: {
      question: "Which of these is one of the main symptoms of lupus?",
      options: [{ text: "Extreme tiredness that rest does not ease", right: true }, { text: "A cough that lasts for months" }, { text: "Ringing in the ears" }],
      why: "The main symptoms of lupus include joint and muscle pain, and extreme tiredness that will not go away no matter how much you rest.",
    },
  },
  {
    id: "sle-diagnosis",
    kicker: "Diagnosis",
    question: "How is lupus diagnosed?",
    hook: "There is no single test. A rheumatologist puts your symptoms, an examination and blood and urine tests together.",
    short: "Lupus is not always easy to diagnose, because its symptoms are similar to other conditions and there is no single test for it. A GP usually starts with blood tests and refers you to a rheumatologist. The diagnosis is made from your symptoms, an examination and test results such as ANA and anti-dsDNA.",
    sections: [
      {
        heading: "Starting with the GP",
        paragraphs: [
          "If you are experiencing symptoms, the first step is to book a GP appointment. A GP will usually do some blood tests, and may do urine tests too.",
          "The next step is a referral to a rheumatologist, a doctor who specialises in the immune system, joints and connective tissues. If skin symptoms are the main problem, you may be referred to a dermatologist instead.",
        ],
      },
      {
        heading: "No single test",
        paragraphs: [
          "There is not one specific test that can say for certain if you have lupus. A rheumatologist looks at your test results, symptoms and medical history all together to make a diagnosis.",
          "Doctors commonly use a set of criteria called the EULAR/ACR criteria. They include kidney signs such as protein in the urine, antibodies specific to lupus, and symptoms of the joints, muscles, skin and mouth.",
        ],
      },
      {
        heading: "ANA and anti-dsDNA",
        paragraphs: [
          "About 95% of people with lupus test strongly positive for anti-nuclear antibodies, or ANA. But 1 in 10 people with no health conditions also have a positive ANA test, so it cannot confirm the diagnosis on its own.",
          "Anti-dsDNA is highly specific to lupus, so a positive test means lupus is highly likely. But a negative test does not rule it out: about 6 in 10 people with lupus test positive, and 4 in 10 test negative.",
          "If you have anti-Ro antibodies and decide to have a baby, your pregnancy will be more closely monitored. Antiphospholipid antibodies may mean an increased risk of miscarriage and blood clots, and these tests can be repeated.",
        ],
      },
      {
        heading: "Urine tests and scans",
        paragraphs: [
          "About 1 in 3 people with lupus have kidney involvement, so doctors check the levels of blood and protein in the urine. A simple urine test can help recognise a kidney problem at an early stage.",
          "You might be referred for X-rays and scans of your heart, kidneys and other organs if the doctor thinks they might be affected.",
        ],
      },
      {
        heading: "Why it can take time",
        paragraphs: [
          "The average time from symptoms first appearing to diagnosis is currently about 6 years. The symptoms are also seen in other illnesses, and people sometimes see separate professionals for each symptom, so no one puts the whole picture together.",
          "If you feel you are not being listened to, you can ask for a second opinion or to change doctors. Your local patient support organisation can help, such as PALS, the Patient Advice and Liaison Service, in England.",
        ],
      },
    ],
    helps: [
      "Book a GP appointment if you are experiencing symptoms.",
      "Think about your questions a day or two before an appointment, and write down the essential points.",
      "Use appointments to ask questions about your condition.",
      "If you feel you are not being listened to, ask for a second opinion or to change doctors.",
      "If your mood is affected by the diagnosis, talk to your GP about mental health support.",
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Write your questions down early.",
      "Ask questions at appointments.",
    ],
    ask: "Which of my tests were positive, and what do they mean for me?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "ana", front: "ANA test", when: "Often done by your GP first", back: "Positive in about 95% of people with lupus, but also in 1 in 10 people with no health conditions." },
        { id: "dsdna", front: "Anti-dsDNA", when: "A test specific to lupus", back: "A positive test makes lupus highly likely. About 4 in 10 people with lupus test negative." },
        { id: "ro", front: "Anti-Ro", when: "An antibody test", back: "Linked to skin rashes and dry eyes or mouth. A pregnancy will be more closely monitored." },
        { id: "apl", front: "Antiphospholipid antibodies", when: "Can come and go, so may be repeated", back: "May mean an increased risk of miscarriage and blood clots." },
        { id: "urine", front: "Urine test", when: "At diagnosis and at check-ups", back: "Shows protein or blood in the urine, a sign of a kidney problem at an early stage." },
        { id: "counts", front: "Blood cell counts", when: "Regular blood tests", back: "Show whether the bone marrow is affected, either by lupus or by the drugs." },
      ],
    },
    sources: [NHS_LUPUS, LUK_DIAGNOSIS, AUK_LUPUS, LUK_VISITS],
    quiz: {
      question: "Does a positive ANA test prove you have lupus?",
      options: [{ text: "No, it is also positive in some healthy people", right: true }, { text: "Yes, it always proves it" }, { text: "Only if it is done twice" }],
      why: "But 1 in 10 people with no health conditions also have a positive ANA test, so it cannot confirm the diagnosis on its own.",
    },
  },
  {
    id: "sle-organs",
    kicker: "Complications",
    question: "How can lupus affect the kidneys, heart and lungs?",
    hook: "Most people do not have the serious complications. But lupus can inflame the kidneys and the linings of the heart and lungs, so regular checks matter.",
    short: "Lupus can affect internal organs such as the kidneys, heart, lungs and brain, and when it does it can be much more serious. Kidney damage often has no visible symptoms until it is severe, so urine and blood tests are part of regular check-ups. Spotted early, most kidney problems caused by lupus can be treated successfully.",
    sections: [
      {
        heading: "From mild to severe",
        paragraphs: [
          "Lupus can range from mild to severe. Mild lupus causes joint and skin problems and tiredness, while moderate lupus causes inflammation of other parts of the body, including the lungs, heart and kidneys.",
          "Severe lupus causes inflammation that can badly damage the heart, lungs, brain or kidneys, which can be life-threatening. But most people do not have the serious complications.",
        ],
      },
      {
        heading: "Kidneys",
        paragraphs: [
          "Until kidney damage is severe, it has no visible symptoms. It often causes high blood pressure.",
          "Signs can include protein in the urine, which may make it foamy, and swelling around the legs or eyes.",
          "In most cases, kidney problems caused by lupus can be treated successfully if spotted early, and medicines can prevent permanent kidney damage. Rarely, some people develop kidney failure, which may need dialysis or a kidney transplant.",
        ],
      },
      {
        heading: "Heart and lungs",
        paragraphs: [
          "Lupus occasionally affects the heart and lungs directly. More often, it causes inflammation in the lining around the heart, called pericarditis, or the lining of the lungs, called pleurisy, and both cause breathlessness and sharp pains in the chest.",
          "Lupus can also make high blood pressure and high cholesterol more likely, which can increase the risk of heart attack or stroke. You should have your blood pressure and cholesterol checked regularly, and treated if necessary.",
        ],
      },
      {
        heading: "Blood and the brain",
        paragraphs: [
          "Lupus may cause anaemia, a lack of red blood cells, which can leave you out of breath and tiring quickly. It can also lower the platelets that help the blood to clot, so you may bruise easily.",
          "Some people with lupus are more at risk of blood clots in veins or arteries, usually because of antiphospholipid antibodies. Some people have dizziness, memory loss or confusion, and lupus can cause fits similar to epilepsy.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Pleurisy causes sharp chest pain when you breathe in. Ask for an urgent GP appointment or get help from NHS 111 if you have sharp chest pain that comes and goes, or only happens when breathing or coughing.",
          "Call 999 or go to A&E if you have sudden chest pain that lasts for 15 minutes or more, or spreads to your arms, back, neck or jaw, or if you have difficulty breathing. These could be signs of a heart attack or a blood clot in the lungs. Do not drive to A&E.",
        ],
      },
    ],
    helps: [
      "Go to every check-up, as kidney function tests are part of them.",
      "Have your blood pressure and cholesterol checked regularly.",
      "Tell your doctor or nurse specialist if you get out of breath and tire quickly.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you think you have a blood clot.",
      "Call 999 or go to A&E for sudden chest pain lasting 15 minutes or more, or difficulty breathing.",
      "Eat healthily, exercise regularly and avoid foods high in saturated fat and salt, to lower your chances of a heart attack or stroke.",
    ],
    tryThisWeek: [
      "Book your next check-up.",
      "Ask for a blood pressure check.",
      "Learn the chest pain warning signs.",
    ],
    ask: "Is my lupus affecting my kidneys, heart or lungs, and how are we checking?",
    interactive: {
      kind: "signs",
      title: "Changes to report",
      intro: "Tick any you have noticed. Some can be signs that lupus is affecting more than the joints and skin.",
      signs: ["Foamy urine", "Swelling around the legs or eyes", "Sharp chest pain when breathing in", "Breathlessness", "Getting out of breath and tiring quickly", "Bruising easily or bleeding gums", "Dizziness, memory loss or confusion"],
      after: "Tell your rheumatology team. For sudden chest pain lasting 15 minutes or more, or difficulty breathing, call 999 or go to A&E.",
      copyHeading: "Changes I have noticed",
    },
    sources: [NHS_LUPUS, AUK_LUPUS, LUK_SYMPTOMS, NHS_PLEURISY, NHS_APS, LUK_DIAGNOSIS],
    quiz: {
      question: "Why are urine tests part of lupus check-ups?",
      options: [{ text: "Kidney damage has no visible symptoms until it is severe", right: true }, { text: "To check for a rash" }, { text: "To measure tiredness" }],
      why: "Until kidney damage is severe, it has no visible symptoms.",
    },
  },
  {
    id: "sle-hydroxychloroquine",
    kicker: "Treatment",
    question: "What does hydroxychloroquine do for lupus?",
    hook: "Usually the first medicine for lupus. It calms the immune system slowly, so it is worth keeping going, with regular eye checks.",
    short: "Hydroxychloroquine is generally the first treatment for someone diagnosed with lupus. It calms the immune system and helps with fatigue and skin and joint problems. It takes several weeks to start working, so keep taking it unless you are told to stop, and you will have regular eye checks.",
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "Hydroxychloroquine is a type of medicine called a DMARD. DMARDs work by calming your immune system or changing the way it responds.",
          "Hydroxychloroquine is generally the first treatment for someone diagnosed with lupus. It is used for skin and joint involvement, fever, fatigue and pleurisy, and to reduce the development of kidney disease.",
          "It does not just treat symptoms, but changes the course of the disease itself. LUPUS UK says it is proven to increase life span in people with lupus.",
        ],
      },
      {
        heading: "Taking it",
        paragraphs: [
          "It usually comes as tablets. Swallow them whole with a meal or a glass of milk, and try to take them at the same time each day.",
          "If you forget a dose, take it as soon as you remember, unless it is nearly time for your next dose. Do not take 2 doses to make up for a forgotten dose.",
          "Indigestion remedies such as antacids can stop it being absorbed. Arthritis UK recommends waiting at least four hours after taking hydroxychloroquine before you take one.",
        ],
      },
      {
        heading: "Slow to start",
        paragraphs: [
          "It takes several weeks for hydroxychloroquine to start working. It may be 12 weeks or longer before you notice any benefit, and it may take a year to reach its full effect.",
          "Keep taking it even if it does not seem to be working at first, and even when your symptoms improve. If you have been taking it for more than 6 months and do not feel it is helping, speak to your doctor.",
        ],
      },
      {
        heading: "Side effects and eye checks",
        paragraphs: [
          "Common side effects include stomach ache, feeling sick, diarrhoea, headache, an itchy rash and mood changes. It can sometimes cause blurred vision when you first start taking it. If this happens, do not drive, ride a bike or use machinery until your vision has gone back to normal.",
          "In rare cases, long-term use can cause changes in the retina at the back of the eye. Regular eye checks spot any problems early, before they affect your vision, and are repeated once a year after five years of treatment.",
          "Call NHS 111 if you think you might be having serious side effects, such as constant blurred vision, changes to how you see colours, or yellowing of the skin or eyes.",
        ],
      },
      {
        heading: "Other things to know",
        paragraphs: [
          "Current guidelines say hydroxychloroquine can be taken during pregnancy, and it is often best to continue it to prevent a flare-up. You can also breastfeed while taking it.",
          "Every version of hydroxychloroquine contains the same amount of the active ingredient, but the fillers differ. If you think your side effects are linked to the brand you take, you may want to discuss this with your doctor.",
        ],
      },
    ],
    helps: [
      "Keep taking it unless you are told to stop, even if it does not seem to work at first.",
      "Swallow the tablets whole with a meal or a glass of milk, at the same time each day.",
      "Wait at least four hours after hydroxychloroquine before taking an indigestion remedy.",
      "Go to your eye checks, and report any new eye symptoms to your doctor straight away.",
      "See an optician once a year and tell them you take hydroxychloroquine.",
      "Speak to a pharmacist or your doctor before taking any other medicines.",
    ],
    tryThisWeek: [
      "Take it at the same time each day.",
      "Keep antacids four hours apart.",
      "Book a yearly optician check.",
    ],
    ask: "How long before we know if hydroxychloroquine is working, and when are my eye checks?",
    interactive: {
      kind: "timeline",
      title: "Your first years on hydroxychloroquine",
      steps: [
        { id: "before", when: "Before you start", title: "Checks first", points: ["A blood test may check your liver and kidneys.", "Your doctor will ask about any problems with your eyesight."] },
        { id: "weeks", when: "First weeks", title: "Slow to start", points: ["It takes several weeks to start working.", "Keep taking it unless you are told to stop."] },
        { id: "twelve", when: "Around 12 weeks", title: "Noticing a benefit", points: ["It may be 12 weeks or longer before you notice any benefit."] },
        { id: "six-months", when: "After 6 months", title: "Is it helping?", points: ["If you do not feel it is helping, speak to your doctor."] },
        { id: "year", when: "Up to a year", title: "Full effect", points: ["It may take a year to reach its full effectiveness."] },
        { id: "five-years", when: "After five years", title: "Yearly eye checks", points: ["Eye checks are repeated once a year.", "Report any new eye symptoms straight away."] },
      ],
    },
    sources: [NHS_HCQ, LUK_HCQ, LUK_TREATMENTS, AUK_HCQ],
    quiz: {
      question: "How long does hydroxychloroquine take to start working?",
      options: [{ text: "Several weeks, and longer for its full effect", right: true }, { text: "A few hours" }, { text: "One day" }],
      why: "It takes several weeks for hydroxychloroquine to start working.",
    },
  },
  {
    id: "sle-other-medicines",
    kicker: "Treatment",
    question: "Which other medicines treat lupus?",
    hook: "Steroids work fast, as a bridge. Immunosuppressants and biologics calm the immune system for the longer term.",
    short: "Treatment depends on how serious lupus is and which parts of the body it affects. Anti-inflammatory painkillers and steroids ease symptoms, with steroids working fast while other medicines take effect. Immunosuppressants such as azathioprine and mycophenolate, and biologics such as belimumab and rituximab, are used for more active lupus.",
    sections: [
      {
        heading: "Matched to you",
        paragraphs: [
          "The drugs used to treat lupus depend on how serious it is and which parts of your body are affected. Your treatments will probably be changed or adjusted as your symptoms flare up or improve.",
          "Not all medicines work for everyone, and your doctor might try a few to see which works best for you.",
        ],
      },
      {
        heading: "Painkillers and steroids",
        paragraphs: [
          "Anti-inflammatory medicines like ibuprofen can treat inflammation and pain in the joints. They are often used for short periods, as long-term use can cause problems with the kidneys.",
          "Steroids work very fast. They are often used as a bridge, quickly controlling lupus while other medicines take effect, and steroid creams can treat skin rashes.",
          "Long-term use can lead to weight gain, thin skin, easy bruising, osteoporosis, muscle weakness and an increased risk of infection, so doctors plan to reduce the dose slowly. Do not stop taking your steroid medicine without talking to your doctor first.",
        ],
      },
      {
        heading: "Immunosuppressants",
        paragraphs: [
          "Immunosuppressants such as methotrexate, azathioprine, mycophenolate and cyclophosphamide calm the immune system to stop it attacking healthy tissue. They are usually used for moderate to severe lupus when anti-malarials such as hydroxychloroquine are not enough.",
          "They may take several weeks or even up to three months to take effect, and they may allow the steroid dose to be reduced. You will need regular blood tests to check how well they work and what impact they have on the body.",
        ],
      },
      {
        heading: "Biologics",
        paragraphs: [
          "Biologics target specific parts of the immune system. Belimumab and rituximab lower the number of B cells, white blood cells that can make the harmful antibodies in lupus.",
          "They can be used when older types of DMARDs are not effective or the lupus is very active. Belimumab is given through a drip in hospital, the first three two weeks apart and then monthly, and it may be up to six months before you notice the benefits.",
          "Voclosporin is a treatment specifically for lupus affecting the kidneys, called lupus nephritis.",
        ],
      },
      {
        heading: "Infections and side effects",
        paragraphs: [
          "If you have lupus, and especially if you take a DMARD or a biologic, you will be more prone to infection. Avoid contact with people with infectious diseases like chickenpox, and discuss your vaccinations with your rheumatologist or GP.",
          "Calcium, vitamin D and drugs called bisphosphonates may be given to protect your bones on steroids. Carrying a steroid card or a biological therapy alert card lets anyone treating you know what you take.",
        ],
      },
    ],
    helps: [
      "Do not stop taking a steroid without talking to your doctor first.",
      "Carry a steroid card if you take high doses or have taken steroids for more than three weeks.",
      "Ask your rheumatology team for a biological therapy alert card if you take a biologic.",
      "Go to your regular blood tests, and keep a note of when they are due.",
      "Tell your team straight away about signs of infection, such as a sore throat or fever.",
      "See your doctor as soon as possible if you come into contact with chickenpox or shingles.",
    ],
    tryThisWeek: [
      "Check you have a steroid card.",
      "Note your next blood test date.",
      "Learn the signs of infection.",
    ],
    ask: "Which medicines suit my lupus, and how will we reduce my steroids?",
    interactive: {
      kind: "flip-cards",
      title: "Lupus medicines, card by card",
      intro: "Turn each card to see what each kind of medicine does.",
      cards: [
        { id: "nsaids", front: "Anti-inflammatories", when: "Such as ibuprofen or naproxen", back: "Treat pain and inflammation in the joints, often for short periods." },
        { id: "steroids", front: "Steroids", when: "Tablets, injections and creams", back: "Work very fast, as a bridge while other medicines take effect. The dose is reduced slowly." },
        { id: "immunosuppressants", front: "Immunosuppressants", when: "Such as azathioprine or mycophenolate", back: "Calm the immune system in moderate to severe lupus. May take up to three months to work." },
        { id: "belimumab", front: "Belimumab", when: "A drip in hospital, then monthly", back: "A biologic that lowers B cells. It may be up to six months before you notice the benefits." },
        { id: "rituximab", front: "Rituximab", when: "A commonly used biologic", back: "Targets B cells, which helps lower inflammation and reduce harmful antibodies." },
        { id: "voclosporin", front: "Voclosporin", when: "For lupus affecting the kidneys", back: "Blocks calcineurin, a protein involved in activating white blood cells." },
      ],
    },
    sources: [AUK_LUPUS, LUK_TREATMENTS, NHS_LUPUS, NHS_STEROIDS, AUK_STEROIDS, AUK_BELIMUMAB, AUK_MYCOPHENOLATE],
    quiz: {
      question: "Why are steroids often used as a bridge?",
      options: [{ text: "They work fast while other medicines take effect", right: true }, { text: "They cure lupus" }, { text: "They have no side effects" }],
      why: "They are often used as a bridge, quickly controlling lupus while other medicines take effect, and steroid creams can treat skin rashes.",
    },
  },
  {
    id: "sle-flares",
    kicker: "Flares",
    question: "How do I spot and manage a lupus flare?",
    hook: "Sunlight, too little rest, infections and stress can all play a part. Knowing your triggers and keeping in touch with your team helps.",
    short: "A flare is when lupus becomes active and symptoms get worse or new ones appear. Sunlight, too little rest, infections and stress can all play a part. Spotting your own triggers, staying gently active and keeping in touch with your rheumatology team helps you stay more in control.",
    sections: [
      {
        heading: "What a flare is",
        paragraphs: [
          "When lupus becomes active and symptoms get worse or new ones appear, it is called a flare. When lupus is quiet, symptoms are mild or may disappear for a while, and this is called remission.",
          "A flare can bring more joint pain, rashes, fatigue or organ involvement. Symptoms often become worse for a few weeks, sometimes longer, and then settle down.",
        ],
      },
      {
        heading: "What sets them off",
        paragraphs: [
          "The reasons for a flare vary from person to person, but exposure to sunlight, too little rest, infections and stress can all play a part. It can be useful to try to spot the things that lead to a flare and find ways of managing or avoiding them.",
          "Certain life stages, such as puberty, after childbirth and the menopause, can also be times when lupus flares. Sometimes the reason symptoms flare up is not known.",
        ],
      },
      {
        heading: "Getting through it",
        paragraphs: [
          "Even when you are having a flare-up, a small amount of exercise is helpful. Find some gentle exercise you can do even on a bad day, and rest when you need to.",
          "Steroid injections into a muscle or vein can help control a flare-up, and your treatment will probably be adjusted as your symptoms flare up or improve.",
          "Try relaxation techniques to manage stress, as stress can make symptoms worse.",
        ],
      },
      {
        heading: "Keeping in touch",
        paragraphs: [
          "Keep in touch with your rheumatology team, especially through your rheumatology nurse specialist and the telephone advice line available in most units.",
          "Be on guard for new symptoms, or the return of old ones. Report any new symptoms to a member of your healthcare team.",
          "Managing your lupus positively can lessen the chances of flares. Being open with family and friends about how unpredictable lupus is can help too.",
        ],
      },
    ],
    helps: [
      "Try to spot the things that lead to a flare, and find ways of managing or avoiding them.",
      "Protect yourself from the sun, as too much ultraviolet light can make problems flare up.",
      "Try relaxation techniques to manage stress.",
      "Keep doing some gentle exercise, even on a bad day.",
      "Use your rheumatology nurse specialist and the telephone advice line.",
      "Be open with family and friends about how unpredictable lupus is.",
    ],
    tryThisWeek: [
      "Note what came before a flare.",
      "Save your advice line number.",
      "Try a relaxation technique.",
    ],
    ask: "What should I do when I think I am having a flare, and who do I call?",
    interactive: {
      kind: "scenarios",
      title: "Flare moments",
      scenarios: [
        {
          id: "bad-day",
          situation: "Your joints ache and you feel exhausted today.",
          options: [{ text: "Rest, and do a little gentle exercise", best: true }, { text: "Stay completely still all day" }],
          why: "Even when you are having a flare-up, a small amount of exercise is helpful.",
        },
        {
          id: "old-symptom",
          situation: "A symptom you had years ago comes back.",
          options: [{ text: "Tell your rheumatology team", best: true }, { text: "Wait for your next routine appointment" }],
          why: "Be on guard for new symptoms, or the return of old ones. Report any new symptoms to a member of your healthcare team.",
        },
        {
          id: "stress",
          situation: "A stressful week is coming up.",
          options: [{ text: "Plan some time for relaxation", best: true }, { text: "Push through without any breaks" }],
          why: "Try relaxation techniques to manage stress, as stress can make symptoms worse.",
        },
        {
          id: "pattern",
          situation: "Your last two flares followed a sunny weekend.",
          options: [{ text: "Plan how to avoid strong sun next time", best: true }, { text: "Ignore it, flares just happen" }],
          why: "It can be useful to try to spot the things that lead to a flare and find ways of managing or avoiding them.",
        },
      ],
    },
    sources: [LUK_WHAT, LUK_SYMPTOMS, NHS_LUPUS, AUK_LUPUS, LUK_VISITS, LUK_MANAGE],
    quiz: {
      question: "Which of these can play a part in a lupus flare?",
      options: [{ text: "Sunlight, too little rest, infections and stress", right: true }, { text: "Drinking water" }, { text: "Gentle exercise" }],
      why: "The reasons for a flare vary from person to person, but exposure to sunlight, too little rest, infections and stress can all play a part.",
    },
  },
  {
    id: "sle-checks",
    kicker: "Check-ups",
    question: "Why do I need regular check-ups and blood tests?",
    hook: "Lupus can affect organs quietly. Regular blood, urine, blood pressure and eye checks pick up problems early.",
    short: "If lupus is confirmed, you will be advised to have regular checks and tests, such as blood tests for anaemia and urine tests for kidney problems. They pick up complications early, and show whether your treatment is working. Some medicines need their own checks too, such as eye checks for hydroxychloroquine.",
    sections: [
      {
        heading: "Why checks matter",
        paragraphs: [
          "If you have lupus, you will need regular check-ups with your doctors and nurses to look for any of the serious complications linked with the condition.",
          "The tests used for diagnosis can then be used to monitor how well treatments are working. Problems caused by lupus or by drug treatment can be picked up and dealt with quickly.",
        ],
      },
      {
        heading: "Blood and urine tests",
        paragraphs: [
          "You will be advised to have regular checks and tests, such as blood tests to check for anaemia and urine tests to check for kidney problems.",
          "A simple urine test can show if there is protein or blood in the urine, which can help doctors recognise a kidney problem at an early stage. Kidney and liver function tests are carried out regularly.",
          "Blood cell counts show whether the bone marrow is affected, either by your condition or the drugs. Anti-dsDNA levels can go up as lupus becomes more active, and go down if treatment is effective.",
        ],
      },
      {
        heading: "Blood pressure and cholesterol",
        paragraphs: [
          "You should have your blood pressure and cholesterol checked regularly, and treated if necessary. If you take steroids, you will also have your blood pressure and blood sugar levels checked from time to time.",
        ],
      },
      {
        heading: "Checks for your medicines",
        paragraphs: [
          "People on DMARDs need regular blood tests to check how effective they are and what impact they have on the body. Keep a note of when your blood tests are due and remind your doctor about them.",
          "If you have taken hydroxychloroquine for a long time, you will have regular eye check-ups to look for signs of damage to the retina. You will not need regular blood tests for hydroxychloroquine itself.",
        ],
      },
      {
        heading: "Making the most of appointments",
        paragraphs: [
          "Sit down a day or two before the appointment to think about your questions and write down the essential points. Writing notes an hour before the visit is not effective.",
          "Make good use of the clinic nurse, especially if they are a lupus specialist nurse. Before you see the doctor, your height, weight and blood pressure will normally be taken.",
        ],
      },
    ],
    helps: [
      "Go to all your check-ups, and report any new symptoms.",
      "Have your blood pressure and cholesterol checked regularly.",
      "Keep a note of when your blood tests are due, and remind your doctor about them.",
      "Go to your eye check-ups if you take hydroxychloroquine.",
      "Write down your questions a day or two before an appointment.",
      "Make good use of the clinic nurse, especially a lupus specialist nurse.",
    ],
    tryThisWeek: [
      "Write your next test date down.",
      "List questions for your check-up.",
      "Ask for a blood pressure check.",
    ],
    ask: "How often do I need blood and urine tests, and what are we looking for?",
    interactive: {
      kind: "flip-cards",
      title: "Your regular checks",
      intro: "Turn each card to see what each check looks for.",
      cards: [
        { id: "blood", front: "Blood count", when: "At regular check-ups", back: "Checks for anaemia, and shows whether the bone marrow is affected by lupus or the drugs." },
        { id: "urine", front: "Urine test", when: "At regular check-ups", back: "Shows protein or blood in the urine, an early sign of a kidney problem." },
        { id: "kidney-liver", front: "Kidney and liver tests", when: "Blood and urine tests, regularly", back: "Pick up problems caused by lupus or by drug treatment quickly." },
        { id: "dsdna", front: "Anti-dsDNA", when: "To follow how active lupus is", back: "Levels can go up as lupus becomes more active, and go down if treatment is effective." },
        { id: "bp", front: "Blood pressure and cholesterol", when: "Checked regularly", back: "Lupus can raise both, which can increase the risk of heart attack or stroke." },
        { id: "eyes", front: "Eye checks", when: "If you take hydroxychloroquine", back: "Look for signs of damage to the retina, before it affects your vision." },
      ],
    },
    sources: [AUK_LUPUS, NHS_LUPUS, AUK_STEROIDS, AUK_MYCOPHENOLATE, NHS_HCQ, AUK_HCQ, LUK_VISITS, LUK_DIAGNOSIS],
    quiz: {
      question: "What can a simple urine test show?",
      options: [{ text: "Protein or blood in the urine, an early sign of kidney problems", right: true }, { text: "How tired you are" }, { text: "Whether you have a rash" }],
      why: "A simple urine test can show if there is protein or blood in the urine, which can help doctors recognise a kidney problem at an early stage.",
    },
  },
  {
    id: "sle-sun",
    kicker: "Sun",
    question: "How do I protect myself from the sun?",
    hook: "Ultraviolet light can bring on rashes and flares. Factor 50, a hat and shade help, and people with lupus can get sunscreen on prescription.",
    short: "Many people with lupus are sensitive to sunlight or UV light, which can cause skin rashes or make fatigue worse. Use a high-factor sunscreen of at least factor 50, wear a hat and keep out of the midday sun. People with lupus can get sunscreen on prescription.",
    sections: [
      {
        heading: "Why sunlight matters",
        paragraphs: [
          "Many people with lupus have sensitivity to sunlight or UV light, which can cause skin rashes or make symptoms like fatigue worse.",
          "Too much ultraviolet light can cause a red rash across the cheeks and the bridge of the nose, often known as the butterfly rash. It can also sometimes cause problems with internal organs to flare up.",
        ],
      },
      {
        heading: "Sunscreen on prescription",
        paragraphs: [
          "Use a high-factor sunscreen, at least factor 50, and wear a hat in the sun. You can get sunscreen on prescription if you have lupus.",
          "Most people do not apply enough sunscreen. Adults should aim for around 6 to 8 teaspoons to cover the entire body, and reapply it every 2 hours and straight after being in water.",
          "You can also buy high-factor sun creams with a tint that can be used as foundation make-up.",
        ],
      },
      {
        heading: "Shade, clothing and light",
        paragraphs: [
          "Do not rely on sunscreen alone. Keep out of the midday sun and keep your skin covered: in the UK, the sun is strongest between 11am and 3pm from March to October.",
          "A wide-brimmed hat, a long-sleeved top and close-weave fabrics give protection. Be careful under sun umbrellas on a paved area, as the sunlight will be reflected onto your face.",
          "The NHS also advises not to sit in direct sunlight or spend a lot of time in rooms with fluorescent lights.",
        ],
      },
      {
        heading: "Holidays and vitamin D",
        paragraphs: [
          "Bear the sun in mind when choosing a holiday destination, and discuss it with your nurse specialist or dermatologist if in doubt.",
          "Because you cannot get enough vitamin D from sunlight all year round in the UK, and too much sunlight can be unhealthy with lupus, you might need a vitamin D supplement. Adults need 10 micrograms of vitamin D a day.",
        ],
      },
    ],
    helps: [
      "Use sunscreen of at least factor 50, and ask about getting it on prescription.",
      "Wear a hat, keep your skin covered and keep out of the midday sun.",
      "Apply enough sunscreen, and reapply it every 2 hours and after being in water.",
      "Do not sit in direct sunlight or spend a lot of time in rooms with fluorescent lights.",
      "Discuss holiday destinations with your nurse specialist or dermatologist if in doubt.",
      "Ask whether you need a vitamin D supplement.",
    ],
    tryThisWeek: [
      "Ask for sunscreen on prescription.",
      "Pack a wide-brimmed hat.",
      "Reapply sunscreen every 2 hours.",
    ],
    ask: "Can I have sunscreen on prescription, and do I need a vitamin D supplement?",
    interactive: {
      kind: "scenarios",
      title: "Sun-smart moments",
      scenarios: [
        {
          id: "lunch",
          situation: "It is sunny and you are heading out at lunchtime.",
          options: [{ text: "Shade, a hat and factor 50", best: true }, { text: "Sunscreen alone, then stay out all afternoon" }],
          why: "Do not rely on sunscreen alone. Keep out of the midday sun and keep your skin covered: in the UK, the sun is strongest between 11am and 3pm from March to October.",
        },
        {
          id: "umbrella",
          situation: "You are sitting under a sun umbrella on a patio.",
          options: [{ text: "Still protect your face", best: true }, { text: "You are fully shaded, so no need" }],
          why: "Be careful under sun umbrellas on a paved area, as the sunlight will be reflected onto your face.",
        },
        {
          id: "swim",
          situation: "You have just been swimming.",
          options: [{ text: "Reapply sunscreen straight away", best: true }, { text: "Leave it, the label says water resistant" }],
          why: "Adults should aim for around 6 to 8 teaspoons to cover the entire body, and reapply it every 2 hours and straight after being in water.",
        },
        {
          id: "holiday",
          situation: "You are choosing where to go on holiday.",
          options: [{ text: "Think about the sun, and ask your nurse if unsure", best: true }, { text: "Pick the sunniest place you can" }],
          why: "Bear the sun in mind when choosing a holiday destination, and discuss it with your nurse specialist or dermatologist if in doubt.",
        },
      ],
    },
    sources: [NHS_LUPUS, AUK_LUPUS, LUK_SYMPTOMS, NHS_SUN, NHS_VITAMIN_D],
    quiz: {
      question: "What factor sunscreen does the NHS suggest for lupus?",
      options: [{ text: "At least factor 50", right: true }, { text: "Factor 15" }, { text: "None, a tan protects you" }],
      why: "Use a high-factor sunscreen, at least factor 50, and wear a hat in the sun.",
    },
  },
  {
    id: "sle-fatigue",
    kicker: "Fatigue",
    question: "Why am I so tired, and how does pacing help?",
    hook: "Almost 9 in 10 people with lupus report fatigue. Balancing rest with gentle activity, and pacing your energy, can help.",
    short: "Fatigue is an extreme physical and mental tiredness that does not significantly improve with rest or sleep, and almost 9 out of 10 people with lupus report it. A cause such as anaemia or an underactive thyroid can be found with a blood test and treated. Pacing, gentle exercise and the right balance between rest and activity help.",
    sections: [
      {
        heading: "More than tiredness",
        paragraphs: [
          "Fatigue is an extreme, sometimes overwhelming, physical and mental tiredness that does not significantly improve with rest or sleep. Almost 9 out of 10 people with lupus report it, and it can have a big impact on day-to-day life.",
          "It can affect your motivation and your ability to concentrate, which is sometimes described as brain fog. It is unpredictable, and can last an hour, a day or several days.",
        ],
      },
      {
        heading: "Looking for a cause",
        paragraphs: [
          "If there is a specific cause, such as anaemia or an underactive thyroid gland, it can be found with a blood test and treated. Some medicines, such as hydroxychloroquine, can help.",
          "Pain, poor sleep, stress and anxiety, and missing meals can all add to fatigue. Writing down how you feel and how it is affecting your life can help your doctor.",
        ],
      },
      {
        heading: "Pacing",
        paragraphs: [
          "Learning to pace yourself, finding the right balance between rest and activity, will help. Pacing is about not using up all your energy in one go.",
          "Avoid the boom-and-bust cycle, where you do too much on one day and feel unable to do anything the next. Break big jobs into smaller tasks, and spread them over a day, a week or longer.",
          "Arthritis UK suggests four Ps: problem solving, planning, prioritising and pacing. Plan bigger tasks for the time of day when you tend to have more energy, and plan in activities you enjoy too.",
        ],
      },
      {
        heading: "Gentle exercise",
        paragraphs: [
          "Too much rest will cause the muscles to weaken and may make you feel more tired. Walking and swimming can improve fatigue, fitness and stamina without putting too much strain on the joints.",
          "Start gently and gradually increase the amount you do, and ask to see a physiotherapist for advice about suitable exercises. LUPUS UK advises asking your doctor, a physiotherapist or an occupational therapist about any new or changed exercise routine.",
          "Listen to your body, as it will tell you when it is time to rest. Rest is also needed to restore energy.",
        ],
      },
    ],
    helps: [
      "Learn to pace yourself, to avoid getting too tired.",
      "Try to stay active, even on a bad day.",
      "Ask whether a blood test could find a cause that can be treated, such as anaemia.",
      "Break big jobs into smaller tasks, and spread them out over the week.",
      "Keep a fatigue chart or list for a couple of weeks to spot patterns.",
      "Ask to see a physiotherapist for advice about suitable exercises.",
    ],
    tryThisWeek: [
      "Spread one big job over the week.",
      "Take a short, gentle walk.",
      "Start a fatigue chart.",
    ],
    ask: "Could a blood test show a treatable cause for my fatigue, and can I see a physiotherapist?",
    interactive: {
      kind: "risk-check",
      title: "What adds to your fatigue?",
      intro: "Tick any that apply. Some you can do something about, and some you cannot.",
      items: [
        { id: "inflammation", label: "Inflammation", note: "Fatigue is commonly a symptom of autoimmune conditions such as lupus.", changeable: false },
        { id: "anaemia", label: "Anaemia", note: "A lack of red blood cells. It can be found with a blood test and treated.", changeable: true },
        { id: "thyroid", label: "An underactive thyroid", note: "It can be found with a blood test and treated.", changeable: true },
        { id: "boom-bust", label: "Boom and bust", note: "Doing too much one day and feeling unable to do anything the next. Pacing helps.", changeable: true },
        { id: "sleep", label: "Poor quality sleep", note: "Sleep disturbance can make you feel exhausted.", changeable: true },
        { id: "stress", label: "Stress and anxiety", note: "Relaxation techniques, such as meditation or deep breathing, can help.", changeable: true },
        { id: "meals", label: "Missing meals or drinks", note: "Your body has less energy to rely on.", changeable: true },
      ],
    },
    sources: [AUK_FATIGUE, LUK_WHAT, AUK_LUPUS, AUK_4PS, LUK_FATIGUE, NHS_LUPUS],
    quiz: {
      question: "What is pacing?",
      options: [{ text: "Not using up all your energy in one go", right: true }, { text: "Resting all day, every day" }, { text: "Doing everything while you feel well" }],
      why: "Pacing is about not using up all your energy in one go.",
    },
  },
  {
    id: "sle-pregnancy",
    kicker: "Pregnancy",
    question: "Can I have a baby if I have lupus?",
    hook: "Most women with lupus can. Planning ahead with your team, while lupus is quiet and on the right medicines, makes a real difference.",
    short: "Most women with lupus should be able to have a baby if they wish to. Lupus can cause complications in pregnancy, so see a doctor before trying to get pregnant, to discuss the risks and check your medicines. It is best to try when lupus is not active, and some medicines are safe in pregnancy while others need to be stopped first.",
    sections: [
      {
        heading: "Planning ahead",
        paragraphs: [
          "Lupus can cause complications in pregnancy. See a doctor before trying to get pregnant, so they can discuss the risks and check if your medicine needs to be changed.",
          "Most women with lupus should be able to have a baby if they wish to. You may need to see an obstetrician with a special interest in lupus, and it is best to try for a baby when your lupus is not active.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Cyclophosphamide, methotrexate, mycophenolate and leflunomide need to be stopped before you get pregnant, because they can harm an unborn baby. You might also need to wait for a time after coming off them before it is safe to get pregnant.",
          "Steroids, hydroxychloroquine and azathioprine are safe to take during pregnancy. Do not just stop taking prescribed drugs without talking to your doctor first.",
          "If you become pregnant unexpectedly while on one of the medicines that need stopping, talk to your healthcare team as soon as you can.",
        ],
      },
      {
        heading: "Antibodies and extra checks",
        paragraphs: [
          "Antiphospholipid antibodies, found in about half of people with lupus, can increase the risk of miscarriage and blood clots. Treatment with aspirin or heparin reduces this risk, and with close monitoring many people with lupus now have successful pregnancies.",
          "If you have anti-Ro antibodies, there is a small risk the baby will have a rash or a slow heartbeat. Most babies will be fine, but it is important to have regular scans of the baby's heart during the pregnancy.",
          "If you have kidney disease, protein in the urine later in pregnancy can be hard to tell apart from pre-eclampsia, so the doctors looking after your pregnancy will check for this.",
        ],
      },
      {
        heading: "Contraception",
        paragraphs: [
          "Talk to your doctor about which contraception would be best for you. It can be important to avoid an unplanned pregnancy, particularly when lupus is active and affecting your kidneys.",
          "You might need to avoid contraceptive pills containing oestrogen, because of a very small risk of blood clots. The Mirena coil, which releases progesterone only, is often a recommended option for women with lupus.",
        ],
      },
      {
        heading: "Folic acid and breastfeeding",
        paragraphs: [
          "Folic acid supplements are important for the health of your baby. Start taking them roughly three months before pregnancy and continue for another three months into the pregnancy.",
          "You can breastfeed while taking hydroxychloroquine, but there are restrictions on some other medicines while breastfeeding, so talk to your rheumatology team or GP.",
        ],
      },
    ],
    helps: [
      "See a doctor before trying to get pregnant.",
      "If you can, try for a baby when your lupus is not active.",
      "Do not stop prescribed medicines without talking to your doctor first.",
      "If you become pregnant unexpectedly on a medicine that needs stopping, talk to your healthcare team as soon as you can.",
      "Start folic acid roughly three months before pregnancy.",
      "Talk to your doctor about the best contraception for you.",
    ],
    tryThisWeek: [
      "Book a talk about pregnancy plans.",
      "Ask which medicines are safe.",
      "Ask when to start folic acid.",
    ],
    ask: "What do I need to plan, and which of my medicines need changing, before I try for a baby?",
    interactive: {
      kind: "timeline",
      title: "From planning to birth",
      steps: [
        { id: "plan", when: "Before trying", title: "Talk to your team", points: ["See a doctor to discuss the risks and check your medicines.", "Some medicines need to be stopped first."] },
        { id: "folic", when: "About three months before", title: "Start folic acid", points: ["Continue it for another three months into the pregnancy."] },
        { id: "try", when: "When lupus is quiet", title: "Try for a baby", points: ["It is best to try when your lupus is not active."] },
        { id: "pregnant", when: "During pregnancy", title: "Closer monitoring", points: ["Blood and urine tests are done regularly.", "Anti-Ro antibodies mean regular scans of the baby's heart."] },
        { id: "after", when: "After the birth", title: "Feeding and medicines", points: ["You can breastfeed while taking hydroxychloroquine.", "Check other medicines with your team."] },
      ],
    },
    sources: [NHS_LUPUS, AUK_LUPUS, AUK_PREGNANCY, AUK_HCQ, LUK_WHAT],
    quiz: {
      question: "When is the best time to try for a baby if you have lupus?",
      options: [{ text: "When lupus is not active", right: true }, { text: "During a flare" }, { text: "Straight after stopping all medicines" }],
      why: "You may need to see an obstetrician with a special interest in lupus, and it is best to try for a baby when your lupus is not active.",
    },
  },
  {
    id: "sle-mood",
    kicker: "Mind",
    question: "How can lupus affect mood and memory, and where can I find support?",
    hook: "Pain, fatigue and disruption can bring anxiety and low mood, and lupus itself can affect memory. Talking helps, and support is there.",
    short: "Because of the pain, fatigue and disruption to life, lupus can cause anxiety and depression, and it can also affect memory and concentration. Talking to someone you trust, relaxation, regular exercise and talking therapies can help. If you need urgent help, contact NHS 111 or call Samaritans on 116 123, and in an emergency call 999.",
    sections: [
      {
        heading: "Why mood is affected",
        paragraphs: [
          "Because of the pain, fatigue and disruption to life, lupus can cause anxiety and depression.",
          "Depression can be a common part of lupus. It can be part of the lupus itself, where managing the lupus often lifts the depression, or it can arise in response to having a chronic painful illness.",
          "Steroids can also cause changes in mood, so you may feel very high or very low. If you are worried about this, talk to the person who prescribes your steroids.",
        ],
      },
      {
        heading: "Memory and concentration",
        paragraphs: [
          "Lupus can affect the nervous system, causing headaches, confusion, and memory or concentration problems. Some people have dizziness, memory loss or confusion.",
          "Fatigue can also affect your motivation and your ability to concentrate, which is sometimes described as brain fog.",
        ],
      },
      {
        heading: "Things that help",
        paragraphs: [
          "It is important to talk to someone you trust if you are feeling down or worried, such as a friend, relative or healthcare professional. Relaxation techniques such as meditation or mindfulness may help with stress.",
          "Your doctor may be able to refer you to a psychologist. Talking therapies such as cognitive behavioural therapy (CBT) may help, and regular exercise can improve feelings of stress, anxiety and depression.",
        ],
      },
      {
        heading: "Support from others",
        paragraphs: [
          "Meeting others with lupus can help you cope, by sharing your thoughts and concerns with someone who understands. LUPUS UK runs a support and information helpline, an online community forum and peer support groups.",
          "You can call the LUPUS UK helpline on 01708 731251 and leave a message, and they will get back to you. The Arthritis UK helpline is free on 0800 5200 520, Monday to Friday from 9am to 8pm.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, get advice from NHS 111, choosing the mental health option, or ask for an urgent GP appointment. You can call Samaritans on 116 123 to talk about anything that is troubling you.",
          "Call 999 or go to A&E now if you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one.",
        ],
      },
    ],
    helps: [
      "Talk to someone you trust if you are feeling down or worried.",
      "Try relaxation techniques, such as meditation or mindfulness.",
      "Ask your doctor about a referral to a psychologist, or talking therapies such as CBT.",
      "Keep up regular exercise, which can improve stress, anxiety and depression.",
      "Contact LUPUS UK if you think talking to someone else with lupus could help.",
      "For urgent help, contact NHS 111 or call Samaritans on 116 123; in an emergency, call 999.",
    ],
    tryThisWeek: [
      "Talk to someone you trust.",
      "Try a relaxation technique.",
      "Save the helpline numbers.",
    ],
    ask: "Could my lupus or my medicines be affecting my mood or memory, and what support is there?",
    interactive: {
      kind: "signs",
      title: "Changes to mention",
      intro: "Tick any you have noticed. Lupus, fatigue and some medicines can all affect mood and thinking.",
      signs: ["Feeling down or worried", "Feeling anxious", "Memory or concentration problems", "Confusion", "Dizziness", "Brain fog with fatigue", "Mood changes since starting steroids"],
      after: "Tell your GP or rheumatology team. For urgent help, contact NHS 111. In an emergency, call 999.",
      copyHeading: "Changes I have noticed",
    },
    sources: [AUK_LUPUS, LUK_DEPRESSION, AUK_STEROIDS, LUK_SYMPTOMS, AUK_FATIGUE, LUK_TALK, NHS_URGENT_MENTAL, LUK_DIAGNOSIS],
    quiz: {
      question: "Why can lupus affect mood?",
      options: [{ text: "Pain, fatigue and disruption to life, and sometimes the lupus itself", right: true }, { text: "It never affects mood" }, { text: "Only because of the weather" }],
      why: "Because of the pain, fatigue and disruption to life, lupus can cause anxiety and depression.",
    },
  },
];
