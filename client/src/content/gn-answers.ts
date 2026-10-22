import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Glomerulonephritis page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Kidney Care UK and the
// National Kidney Federation. General information only; it never replaces what a person's own GP or kidney team
// tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const kcuk = (label: string, path: string): LearnSource => ({ label: `Kidney Care UK: ${label}`, url: `https://kidneycareuk.org/${path}` });
const nkf = (label: string, path: string): LearnSource => ({ label: `National Kidney Federation: ${label}`, url: `https://www.kidney.org.uk/${path}` });

const NHS_GN = nhs("Glomerulonephritis", "conditions/glomerulonephritis/");
const NHS_GN_TREAT = nhs("Treatment of glomerulonephritis", "conditions/glomerulonephritis/treatment/");
const NHS_BLOOD_URINE = nhs("Blood in urine", "symptoms/blood-in-urine/");
const NHS_OEDEMA = nhs("Swollen ankles, feet and legs (oedema)", "conditions/oedema/");
const NHS_DVT = nhs("DVT (deep vein thrombosis)", "conditions/deep-vein-thrombosis-dvt/");
const NHS_PE = nhs("Pulmonary embolism", "conditions/pulmonary-embolism/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_PRED_ABOUT = nhs("About prednisolone tablets and liquid", "medicines/prednisolone/about-prednisolone-tablets-and-liquid/");
const NHS_PRED_HOW = nhs("How and when to take prednisolone", "medicines/prednisolone/how-and-when-to-take-prednisolone-tablets-and-liquid/");
const NHS_PRED_SE = nhs("Side effects of prednisolone", "medicines/prednisolone/side-effects-of-prednisolone-tablets-and-liquid/");
const NHS_PRED_Q = nhs("Common questions about prednisolone", "medicines/prednisolone/common-questions-about-prednisolone-tablets-and-liquid/");
const NHS_PRED_PREG = nhs("Pregnancy, breastfeeding and fertility while taking prednisolone", "medicines/prednisolone/pregnancy-breastfeeding-and-fertility-while-taking-prednisolone-tablets-and-liquid/");
const NHS_RAM_ABOUT = nhs("About ramipril", "medicines/ramipril/about-ramipril/");
const NHS_RAM_PREG = nhs("Pregnancy, breastfeeding and fertility while taking ramipril", "medicines/ramipril/pregnancy-breastfeeding-and-fertility-while-taking-ramipril/");
const NHS_FURO = nhs("Furosemide", "medicines/furosemide/");
const NHS_SALT = nhs("Salt in your diet", "live-well/eat-well/food-types/salt-in-your-diet/");
const NHS_FLU = nhs("Flu vaccine", "vaccinations/flu-vaccine/");
const NHS_PNEUMO = nhs("Pneumococcal vaccine", "vaccinations/pneumococcal-vaccine/");
const NHS_SHINGLES = nhs("Shingles vaccine", "vaccinations/shingles-vaccine/");

const KCUK_IGAN = kcuk("IgA nephropathy", "kidney-disease-information/kidney-conditions/iga-nephropathy/");
const KCUK_FSGS = kcuk("Focal segmental glomerulosclerosis (FSGS)", "kidney-disease-information/kidney-conditions/focal-segmental-glomerulosclerosis-fsgs/");
const KCUK_MN = kcuk("Membranous nephropathy (MN)", "kidney-disease-information/kidney-conditions/membranous-nephropathy-mn/");
const KCUK_VASC = kcuk("Vasculitis", "kidney-disease-information/kidney-conditions/vasculitis/");
const KCUK_LUPUS = kcuk("Lupus nephritis", "kidney-disease-information/kidney-conditions/lupus-nephritis/");
const KCUK_BIOPSY = kcuk("Kidney biopsy", "kidney-disease-information/tests-and-diagnosis/patient-info-kidney-biopsy/");
const KCUK_PREG = kcuk("Pregnancy and chronic kidney disease", "kidney-disease-information/living-with-kidney-disease/patient-info-womens-health/pregnancy-and-chronic-kidney-disease/");
const KCUK_IMMUNO = kcuk("Medicines commonly taken by people after transplant or with an autoimmune disease", "kidney-disease-information/treatments/transplantation/patient-info-medicines-commonly-taken-by-people-after-transplant-or-with-an-autoimmune-disease/");
const KCUK_FLAVOUR = kcuk("6 ways to add flavour without salt", "get-support/healthy-diet-support/cooking-with-kidney-disease/6-ways-to-add-flavour-without-salt/");

const NKF_GN = nkf("Glomerulonephritis", "glomerulonephritis");
const NKF_HAEM = nkf("Haematuria", "haematuria");
const NKF_NEPHROTIC = nkf("Nephrotic syndrome in adults", "nephrotic-syndrome-in-adults");
const NKF_BIOPSY = nkf("Kidney biopsy", "kidney-biopsy");
const NKF_IGAN = nkf("IgA nephropathy", "iga-nephropathy");
const NKF_MCN = nkf("Minimal change nephropathy", "minimal-change-nephropathy");

export const gnAnswers: LearnArticle[] = [
  {
    id: "gn-what-it-is",
    kicker: "Understanding",
    question: "What is glomerulonephritis?",
    hook: "About a million tiny filters sit in each kidney. When the immune system inflames them, blood and protein can leak through.",
    short: "Glomerulonephritis is damage to the tiny filters inside the kidneys, called the glomeruli. It is often caused by the immune system attacking healthy body tissue by mistake. Mild cases often cause no symptoms and are found on a routine test, and many can be treated effectively.",
    sections: [
      {
        heading: "Tiny filters, inflamed",
        paragraphs: [
          "Glomerulonephritis is damage to the tiny filters inside your kidneys, called the glomeruli. It is often caused by your immune system attacking healthy body tissue.",
          "The name comes in two parts. Glomerulo- refers to the glomeruli, and nephritis means inflammation in the kidney. It is the name for a family of diseases, not just one.",
        ],
      },
      {
        heading: "How a filter works",
        paragraphs: [
          "Each kidney has about 1 million filters, each about the size of a pinhead. Each one is a small ball of tiny blood vessels inside a bag, with a drainage tube running out of it.",
          "As blood passes through, some fluid is forced through the thin, delicate walls of the blood vessels into the bag. The drainage tubes then concentrate the waste by removing extra water, which eventually makes urine.",
        ],
      },
      {
        heading: "When the immune system makes a mistake",
        paragraphs: [
          "The immune system is normally very good at recognising what is part of the body and what is not. Sometimes it makes a mistake and attacks part of the body as if it were an invader, and in glomerulonephritis that part is the kidney's filters.",
          "It can be caused by inflammatory conditions such as lupus or vasculitis, and in some cases by infections, such as HIV, hepatitis B and C, or an infection of the inner lining of the heart. Some types of cancer and certain medicines can also cause it, and sometimes it is not clear what causes it.",
        ],
      },
      {
        heading: "Often found by chance",
        paragraphs: [
          "If glomerulonephritis is mild, it does not usually cause any noticeable symptoms. It is more likely to be found when blood or urine tests are done for another reason.",
          "The National Kidney Federation says glomerulonephritis is commonly a minor illness, but many types last for many years. In some cases it clears up completely, while in others kidney failure may develop.",
        ],
      },
      {
        heading: "What it can lead to",
        paragraphs: [
          "Although mild cases can be treated effectively, for some people the condition can lead to long-term kidney problems. Possible complications include high blood pressure, high cholesterol, blood clots, chronic kidney disease and kidney failure.",
          "The National Kidney Federation says a minor glomerulonephritis should not place any restrictions on work, family life or other parts of normal life.",
        ],
      },
    ],
    helps: [
      "See a GP if you notice blood in your urine, as the cause should be investigated.",
      "Ask your specialist whether the type of glomerulonephritis you have could be inherited.",
      "Discuss any symptoms elsewhere in your body, such as a rash or joint pain, with your doctor to see if they could be related.",
      "Take any blood pressure tablets you are prescribed, to protect the kidneys against further damage.",
    ],
    tryThisWeek: [
      "Get blood in your urine checked.",
      "Ask if your type could be inherited.",
      "Mention any rash or joint pain.",
    ],
    ask: "Which type of glomerulonephritis do I have, and do you know what caused it?",
    interactive: {
      kind: "flip-cards",
      title: "The name, card by card",
      intro: "Turn each card to see what each part means.",
      cards: [
        { id: "glomerulus", front: "Glomerulus", when: "About 1 million in each kidney", back: "A small ball of tiny blood vessels inside a bag. Fluid is forced through its walls to start making urine." },
        { id: "nephritis", front: "Nephritis", when: "The second half of the name", back: "Means inflammation in the kidney." },
        { id: "immune", front: "The immune system", when: "The usual cause", back: "Normally fights germs. Sometimes it attacks the kidney's filters by mistake." },
        { id: "urine", front: "Blood and protein", when: "Found when urine is tested", back: "Small amounts passing through damaged filters may be the only sign." },
      ],
    },
    sources: [NHS_GN, NKF_GN, NKF_HAEM],
    quiz: {
      question: "What are the glomeruli?",
      options: [{ text: "The tiny filters in the kidneys", right: true }, { text: "The tubes to the bladder" }, { text: "Glands that make hormones" }],
      why: "Glomerulonephritis is damage to the tiny filters inside your kidneys, called the glomeruli.",
    },
  },
  {
    id: "gn-types",
    kicker: "Understanding",
    question: "What are the types, including IgA nephropathy?",
    hook: "Glomerulonephritis is a family, not a single disease. Which type you have shapes the tests, the treatment and what happens next.",
    short: "Glomerulonephritis is a family of diseases, and treatment varies with the type. IgA nephropathy, where a protein called IgA gets trapped in the filters, is one of the most common. Others include membranous nephropathy, minimal change nephropathy, FSGS, and the kidney inflammation that can come with vasculitis or lupus.",
    sections: [
      {
        heading: "A family of diseases",
        paragraphs: [
          "Glomerulonephritis is a family of diseases, and treatment varies according to the type. The National Kidney Federation lists focal and segmental glomerulosclerosis, IgA and IgM types, membranoproliferative glomerulonephritis, minimal change nephropathy and vasculitis.",
          "Some types affect only the kidneys. Others can affect other parts of the body as well as the kidneys.",
        ],
      },
      {
        heading: "IgA nephropathy",
        paragraphs: [
          "IgA nephropathy, or IgAN, happens when a protein called immunoglobulin A gets trapped in the filters of the kidneys and causes inflammation and damage. It is one of the most common causes of damage to the kidneys' filters, and men are more likely to be affected than women.",
          "Most people with IgAN have no symptoms. When blood in the urine is visible, it may look red or dark brown, like a cola drink, and it is more likely after an infection such as a cold or sore throat.",
          "In most people, kidney function gets worse slowly, and Kidney Care UK says around 1 in 3 people with IgAN will need dialysis or a transplant within around 20 years of diagnosis. The National Kidney Federation says it may continue unchanged for many years with only regular check-ups, and it may go away on its own in some cases.",
        ],
      },
      {
        heading: "Membranous nephropathy",
        paragraphs: [
          "Membranous nephropathy, or MN, is an immune system condition that causes too much fluid to be kept in the body and too much protein to be lost in the urine. It develops slowly, over a number of years, and is usually diagnosed between the ages of 40 and 70.",
          "Around 1 in 3 people with MN recover without the need for any further treatment, says Kidney Care UK.",
        ],
      },
      {
        heading: "Minimal change and FSGS",
        paragraphs: [
          "Minimal change nephropathy is one of the commonest causes of nephrotic syndrome in adults. It is called minimal change because the kidney looks fairly normal under the microscope, and doctors can normally treat it with drugs and get a cure, or at least control of the condition.",
          "Focal segmental glomerulosclerosis, or FSGS, describes a pattern of scarring seen on a kidney biopsy, where part of some of the filters is scarred. It is very rare, and while the scarring is permanent, the process that causes it can be treated.",
        ],
      },
      {
        heading: "When other parts of the body are involved",
        paragraphs: [
          "Vasculitis is an immune system disorder that makes blood vessels inflamed and swollen, and it can affect any part of the body, including the kidneys. In the kidneys it can cause blood or protein in the urine, swelling and high blood pressure.",
          "In lupus, the immune system can attack the kidney's filters, which is called lupus nephritis. Kidney Care UK says around 60 per cent of people with lupus will develop it at some point during their illness.",
        ],
      },
    ],
    helps: [
      "Ask your specialist how things are likely to be in your case, as the outcome varies.",
      "Ask your specialist whether the type you have could be inherited.",
      "With IgAN, follow lifestyle measures such as losing weight, regular exercise, stopping smoking or vaping and reducing salt.",
      "Talk to your kidney team about clinical trials of further treatment options for IgAN.",
      "For more on IgAN, the Leicester IgAN Research Group has information on diagnosis, symptoms and treatment.",
    ],
    tryThisWeek: [
      "Ask how your type usually behaves.",
      "Ask if your type runs in families.",
      "Ask your team about clinical trials.",
    ],
    ask: "Which type do I have, and how is it likely to behave in my case?",
    interactive: {
      kind: "flip-cards",
      title: "The main types, card by card",
      intro: "Turn each card to see what that type is.",
      cards: [
        { id: "igan", front: "IgA nephropathy", when: "Blood in urine, often after a cold", back: "A protein called IgA gets trapped in the kidney's filters and causes inflammation and damage." },
        { id: "mn", front: "Membranous nephropathy", when: "Usually diagnosed aged 40 to 70", back: "Too much fluid kept in the body and too much protein lost in urine. Around 1 in 3 recover without further treatment." },
        { id: "mcn", front: "Minimal change nephropathy", when: "A common cause of nephrotic syndrome", back: "The kidney looks fairly normal under the microscope. Doctors can normally treat it with drugs." },
        { id: "fsgs", front: "FSGS", when: "Seen on a kidney biopsy", back: "A pattern of scarring in part of some filters. The process causing it can be treated." },
        { id: "vasculitis", front: "Vasculitis", when: "Can affect any part of the body", back: "Inflamed blood vessels. In the kidneys: blood or protein in urine, swelling and high blood pressure." },
        { id: "lupus", front: "Lupus nephritis", when: "In around 60 in 100 with lupus", back: "The immune system attacks the kidney's filters. Drug treatments can help avoid scarring and kidney failure." },
      ],
    },
    sources: [NKF_GN, KCUK_IGAN, NKF_IGAN, KCUK_MN, KCUK_FSGS, NKF_MCN, KCUK_VASC, KCUK_LUPUS],
    quiz: {
      question: "Which type often shows as cola-coloured urine after a cold?",
      options: [{ text: "IgA nephropathy", right: true }, { text: "Minimal change nephropathy" }, { text: "Membranous nephropathy" }],
      why: "When blood in the urine is visible, it may look red or dark brown, like a cola drink, and it is more likely after an infection such as a cold or sore throat.",
    },
  },
  {
    id: "gn-symptoms",
    kicker: "Symptoms",
    question: "What are the signs: urine, swelling and blood pressure?",
    hook: "Often nothing at all. When there are signs, they show in the toilet, around the ankles and eyes, and on a blood pressure reading.",
    short: "Most people with glomerulonephritis feel completely well, and the only sign is blood or protein found when urine is tested. Some notice dark or frothy pee, or swelling of the legs, ankles or around the eyes. High blood pressure is common, and some types also cause rashes, joint pain or tiredness.",
    sections: [
      {
        heading: "Often none at all",
        paragraphs: [
          "Most commonly there are no symptoms, and someone with glomerulonephritis feels completely well. The only sign may be small amounts of blood or protein in the urine, found only when it is tested by a doctor or nurse.",
          "In IgA nephropathy, visible blood in the urine is more likely after an infection such as a cold or sore throat, and it usually fades after a few days.",
        ],
      },
      {
        heading: "Blood in the urine",
        paragraphs: [
          "If you have severe glomerulonephritis, your pee may be a dark colour because it contains blood. Blood in pee may be bright pink, red or dark brown, but it may only be noticed when a sample is tested.",
          "Blood in the urine has many possible causes, including infection and kidney stones. The NHS says to ask for an urgent GP appointment or get help from NHS 111 if you have blood in your pee or think you may have.",
        ],
      },
      {
        heading: "Frothy urine and swelling",
        paragraphs: [
          "Your pee may be frothy if it contains a large amount of protein. If a lot of protein leaks into your urine, swelling of the legs or other parts of the body can develop, which is known as nephrotic syndrome.",
          "Swelling around the eyes tends to be worse first thing in the morning, while ankle swelling is usually worse in the evening. The swelling is soft and puffy, leaves a dent if you press on it, and is not painful.",
          "Rings may go tight on your fingers. Severe swelling can spread all the way up the legs, and water around the lungs can cause breathlessness.",
        ],
      },
      {
        heading: "Blood pressure and other signs",
        paragraphs: [
          "Some people with glomerulonephritis also have high blood pressure. Depending on the cause, other parts of the body can be affected, with rashes, joint pain, stomach pain, a high temperature, shortness of breath, tiredness or peeing a lot less than usual.",
          "If the damage leads to kidney failure, there may be no symptoms in the early stages, but in advanced cases there may be tiredness, sickness, vomiting and itching.",
        ],
      },
    ],
    helps: [
      "Get blood in your pee checked, even if there is only a small amount or you are not sure it is blood.",
      "See a GP if you have other symptoms of glomerulonephritis, such as pain in your joints, tiredness and shortness of breath.",
      "If one leg gets much more swollen than the other, see your doctor.",
      "Discuss any symptoms you have with your doctor to see if they could be related to glomerulonephritis.",
    ],
    tryThisWeek: [
      "Get blood in your pee checked.",
      "Mention joint pain or tiredness to a GP.",
      "Report one leg swelling more.",
    ],
    ask: "Which of my symptoms come from my kidneys, and which should I report straight away?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your team",
      intro: "Tick any you have noticed. They become a list you can share.",
      signs: [
        "Dark, red or brown pee",
        "Frothy pee",
        "Puffy eyes in the morning",
        "Swollen ankles by evening",
        "Rings tight on my fingers",
        "Breathlessness",
        "Peeing a lot less than usual",
        "A rash or joint pain",
        "Tiredness",
      ],
      after: "Take this list to your GP or kidney team. For blood in your pee, ask for an urgent GP appointment or get help from NHS 111.",
      copyHeading: "Signs I have noticed",
    },
    sources: [NHS_GN, NKF_GN, KCUK_IGAN, KCUK_FSGS, NKF_NEPHROTIC, NHS_BLOOD_URINE, NKF_HAEM],
    quiz: {
      question: "What can frothy urine be a sign of?",
      options: [{ text: "A large amount of protein", right: true }, { text: "Drinking too much water" }, { text: "Healthy kidneys" }],
      why: "Your pee may be frothy if it contains a large amount of protein.",
    },
  },
  {
    id: "gn-biopsy",
    kicker: "Tests",
    question: "Which tests will I have, and what is a kidney biopsy?",
    hook: "Blood and urine tests raise the question. Often only a sample the size of half a matchstick can answer it.",
    short: "A GP usually starts with blood tests and a urine test for blood and protein, and sometimes an ultrasound scan. To be sure of the type, a kidney biopsy is often needed: a needle takes a tiny sample, around half the size of a matchstick, under local anaesthetic. It usually takes around half an hour, and most people go home the same day or the next morning.",
    sections: [
      {
        heading: "The first tests",
        paragraphs: [
          "If a GP suspects glomerulonephritis, they will usually arrange blood tests, to check how much protein is in your blood and measure your creatinine, and a urine test to check for blood or protein.",
          "Further blood tests may help find the cause. An ultrasound scan checks the size of your kidneys, makes sure there are no blockages and looks for any other problems.",
          "A laboratory test called the protein-creatinine ratio, or PCR, measures protein exactly from a single small urine sample. It is replacing the older method of collecting a whole day's urine.",
        ],
      },
      {
        heading: "Why a biopsy",
        paragraphs: [
          "In most cases an accurate diagnosis cannot be made by blood tests alone. A biopsy removes a tiny piece of kidney to look at under a microscope, to find the cause of the kidney disease and the best treatment.",
          "It may avoid you being given unnecessary treatment that could have side effects. Not everyone with possible glomerulonephritis needs a biopsy.",
        ],
      },
      {
        heading: "Getting ready",
        paragraphs: [
          "Tell your kidney doctor before the day if you take medicine to thin your blood, such as aspirin, clopidogrel, apixaban, rivaroxaban or warfarin. Do not stop it without advice: your kidney doctor will tell you if and when to stop and restart it.",
          "You can usually take your other medicines as normal. Plan a light breakfast, as you will lie flat, usually on your front, and tell the team if you find lying flat difficult.",
        ],
      },
      {
        heading: "On the day",
        paragraphs: [
          "An ultrasound machine helps guide the needle, and local anaesthetic numbs the skin, which may sting for a second or two. You will be asked to hold your breath for a few seconds while the sample is taken, and you may hear a clicking sound.",
          "The sample is around half the size of a matchstick, and removing it will not affect how well your kidney works. A biopsy usually takes around half an hour, and most people say the discomfort is about the same as a visit to the dentist.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "You rest in bed while nurses check your blood pressure, pulse and urine. You can usually go home the same day if someone stays with you, or the next morning, but you should not drive home, and should avoid driving for 24 hours and heavy lifting or vigorous exercise for a week.",
          "In about 1 in 10 biopsies there is visible blood in the urine that settles by itself. Kidney Care UK says that if you feel particularly unwell after going home, call 999 or go to your nearest emergency department.",
        ],
      },
    ],
    helps: [
      "Tell your kidney doctor before the day if you take blood-thinning medicine, and do not stop it without their advice.",
      "Arrange a lift home, as you should not drive or take public transport after the biopsy.",
      "Take paracetamol for discomfort, not NSAIDs such as ibuprofen, which can damage your kidneys.",
      "Follow the contact advice you are given if you have blood in your urine, cannot pass urine, have fevers, feel light-headed or the discomfort gets worse.",
      "Make sure the kidney team has a current phone number for you before you go home.",
    ],
    tryThisWeek: [
      "List any blood thinners you take.",
      "Arrange a lift home.",
      "Use paracetamol, not ibuprofen.",
    ],
    ask: "Do I need a biopsy, and what would it change about my treatment?",
    interactive: {
      kind: "timeline",
      title: "Biopsy day, step by step",
      steps: [
        { id: "before", when: "Before the day", title: "Blood thinners", points: ["Tell your kidney doctor if you take any.", "Do not stop them unless they tell you to."] },
        { id: "morning", when: "On the morning", title: "A light breakfast", points: ["Take your usual medicines, except blood thinners.", "You may have blood tests to check clotting."] },
        { id: "during", when: "Around half an hour", title: "The biopsy", points: ["Ultrasound guides the needle; the skin is numbed.", "Hold your breath for a few seconds."] },
        { id: "after", when: "Straight after", title: "Rest in bed", points: ["Nurses check blood pressure, pulse and urine.", "Do not get up until they say it is safe."] },
        { id: "home", when: "The first 24 hours", title: "Home with a lift", points: ["Do not drive for 24 hours.", "Paracetamol, not ibuprofen, for discomfort."] },
        { id: "week", when: "The first week", title: "Take it easy", points: ["Avoid heavy lifting or vigorous exercise.", "Most people return to work within a day or two."] },
        { id: "results", when: "Your next clinic", title: "The results", points: ["Results are usually discussed in clinic.", "If urgent, the kidney doctors contact you."] },
      ],
    },
    sources: [NHS_GN, KCUK_BIOPSY, NKF_BIOPSY, NKF_HAEM, NKF_GN, NKF_NEPHROTIC],
    quiz: {
      question: "How big is the sample taken in a kidney biopsy?",
      options: [{ text: "Around half a matchstick", right: true }, { text: "About the size of a thumb" }, { text: "Half of one kidney" }],
      why: "The sample is around half the size of a matchstick, and removing it will not affect how well your kidney works.",
    },
  },
  {
    id: "gn-blood-pressure",
    kicker: "Treatment",
    question: "Why does blood pressure matter so much for my kidneys?",
    hook: "Inflamed filters push blood pressure up, and high blood pressure damages the filters further. Tablets that break that loop often help even when the reading looks normal.",
    short: "Glomerulonephritis often leads to high blood pressure, which can cause further kidney damage. Medicines such as ACE inhibitors and ARBs lower blood pressure and reduce the protein leaking into urine, so they are often prescribed even when blood pressure is not particularly high. Less salt, staying active and not smoking help too.",
    sections: [
      {
        heading: "A common complication",
        paragraphs: [
          "Glomerulonephritis often leads to high blood pressure, which can cause further kidney damage and other health problems. It is common because the kidneys control the level of blood pressure in the body.",
          "The National Kidney Federation says many people with glomerulonephritis are prescribed blood pressure tablets. Taking them protects the kidneys against further damage and reduces the risks of heart disease and stroke.",
        ],
      },
      {
        heading: "ACE inhibitors and ARBs",
        paragraphs: [
          "You may need medicines that lower blood pressure and help reduce the amount of protein that leaks into your urine, such as an ACE inhibitor or an angiotensin receptor blocker, called an ARB.",
          "These are commonly prescribed even if your blood pressure is not particularly high, as they can help protect your kidneys. Often, people with high blood pressure and kidney disease need several medicines to control it.",
        ],
      },
      {
        heading: "Starting ramipril",
        paragraphs: [
          "Ramipril is one ACE inhibitor. Your very first dose may make you feel dizzy, so it is best taken at bedtime, and some people get a dry, tickly cough, in which case your doctor might suggest a different medicine.",
          "Your doctor will do blood tests before you start, and when your dose changes, to check your kidneys and potassium levels. If you have severe watery diarrhoea or are being sick, tell your doctor, as you may need to stop it for a while until you feel better.",
        ],
      },
      {
        heading: "More protection for IgAN",
        paragraphs: [
          "For IgA nephropathy, SGLT2 inhibitors are also often prescribed to slow the disease. Targeted-release budesonide can help slow the decline of kidney function by reducing the amount of IgA that builds up in the kidneys.",
          "A medicine called sparsentan has a greater protective effect on the kidneys than ACE inhibitors or ARBs, and if it is used, those medicines need to be stopped.",
        ],
      },
      {
        heading: "Everyday steps",
        paragraphs: [
          "Losing weight, regular exercise, stopping smoking or vaping and reducing salt are important for everyone with IgAN. The NHS says smoking may make kidney disease caused by glomerulonephritis worse.",
          "Eating too much salt can cause high blood pressure. Adults should have no more than 6g of salt a day, around 1 level teaspoon.",
        ],
      },
    ],
    helps: [
      "Take the blood pressure tablets you are prescribed, to protect your kidneys against further damage.",
      "Take your very first dose of ramipril at bedtime, in case it makes you dizzy.",
      "Tell your doctor if you have severe diarrhoea or vomiting while taking ramipril.",
      "Stop smoking, as it may make kidney disease caused by glomerulonephritis worse.",
      "Keep to no more than 6g of salt a day.",
    ],
    tryThisWeek: [
      "Take your tablets as prescribed.",
      "Take a first ramipril dose at bedtime.",
      "Cut down on salt.",
    ],
    ask: "What blood pressure and urine protein results should we aim for?",
    interactive: {
      kind: "scenarios",
      title: "Blood pressure moments",
      scenarios: [
        {
          id: "normal",
          situation: "Your blood pressure is normal, but you are offered an ACE inhibitor.",
          options: [{ text: "It can help protect your kidneys", best: true }, { text: "It must be a mistake" }],
          why: "These medicines are commonly prescribed even if your blood pressure is not particularly high, as they can help protect your kidneys.",
        },
        {
          id: "cough",
          situation: "Ramipril gives you a dry, tickly cough.",
          options: [{ text: "Tell your doctor", best: true }, { text: "Put up with it in silence" }],
          why: "Some people get a dry, tickly cough with ramipril. If this happens, your doctor might suggest a different medicine.",
        },
        {
          id: "bug",
          situation: "A stomach bug gives you severe watery diarrhoea.",
          options: [{ text: "Tell your doctor about ramipril", best: true }, { text: "Take an extra tablet" }],
          why: "Tell your doctor, as you may need to stop ramipril for a while until you feel better.",
        },
        {
          id: "first",
          situation: "You are about to take your first ramipril tablet.",
          options: [{ text: "Take it at bedtime", best: true }, { text: "Take it just before driving" }],
          why: "Your very first dose may make you feel dizzy, so it is best taken at bedtime.",
        },
      ],
    },
    sources: [NHS_GN_TREAT, NKF_GN, KCUK_IGAN, NHS_RAM_ABOUT, NHS_SALT],
    quiz: {
      question: "Why might you take an ACE inhibitor when your blood pressure is normal?",
      options: [{ text: "It can help protect your kidneys", right: true }, { text: "It cures the inflammation" }, { text: "It replaces a water tablet" }],
      why: "These are commonly prescribed even if your blood pressure is not particularly high, as they can help protect your kidneys.",
    },
  },
  {
    id: "gn-immune-treatment",
    kicker: "Treatment",
    question: "Which treatments calm the immune system?",
    hook: "Steroids and other immunosuppressants can switch off the attack on the filters. They also lower your defences, so they come with checks.",
    short: "If glomerulonephritis is caused by the immune system, medicines called immunosuppressants may be recommended, often starting with a steroid such as prednisolone. They can be effective, but they raise the risk of infections and other side effects, so doses are adjusted and carefully monitored. Never stop steroids suddenly: the dose is lowered gradually with your doctor.",
    sections: [
      {
        heading: "Why calm the immune system",
        paragraphs: [
          "If glomerulonephritis is caused by problems with your immune system, medicines called immunosuppressants may be recommended. Suppressing the immune system can be effective, but it raises the risk of infections and can cause other side effects, such as thinning of the bones.",
          "The medicines are adjusted to the level needed to treat your condition and carefully monitored. You may also be given medicines to help prevent side effects such as infections and osteoporosis.",
        ],
      },
      {
        heading: "Steroids",
        paragraphs: [
          "You may be given a course of steroids such as prednisolone, which reduce swelling and suppress your immune system. Once your kidneys have started to recover, the dose is usually lowered, and it may be stopped altogether.",
          "Prednisolone is best taken once a day in the morning, with breakfast, so it does not upset your stomach or affect your sleep. The usual dose is between 5mg and 60mg a day, and the higher the dose and the longer you take it, the greater the chance of side effects.",
          "Do not stop taking it without talking to your doctor, as the dose needs reducing gradually. If you take it for more than 3 weeks, or at a high dose, you will get a blue steroid card.",
        ],
      },
      {
        heading: "Other immunosuppressants",
        paragraphs: [
          "Other medicines include tacrolimus, ciclosporin, mycophenolate, azathioprine, cyclophosphamide and rituximab, and you may need to try more than one. Some need regular blood tests to measure the level of the medicine, and some can lower blood cell numbers, so your blood is checked regularly.",
          "For membranous nephropathy, Kidney Care UK says rituximab or steroids may be prescribed, and your kidney team will discuss the options with you so you can decide together.",
        ],
      },
      {
        heading: "Living with these medicines",
        paragraphs: [
          "You are more likely to get infections while on these medicines, and they may be worse than normal, so report any signs of infection to your doctor. Report any unexpected bruising, bleeding or rashes too.",
          "They carry a higher risk of skin cancer, so it is best to avoid sunbathing, use a high-factor sunscreen and wear a hat and long sleeves in sunny weather. Avoid grapefruit and pomegranate juice, which can affect the balance of drug levels.",
        ],
      },
      {
        heading: "Other treatments",
        paragraphs: [
          "If your condition is thought to be linked to a viral infection, it may be treated with antiviral medicine. If the condition is severe, plasma exchange may be used, where some plasma, which contains proteins that can inflame the kidneys, is removed from your blood and replaced with a substitute.",
        ],
      },
    ],
    helps: [
      "Take prednisolone once a day in the morning, with breakfast.",
      "Do not stop prednisolone without talking to your doctor, as the dose needs reducing gradually.",
      "Report any signs of infection, and any unexpected bruising, bleeding or rashes, to your doctor.",
      "Avoid sunbathing, and use a high-factor sunscreen in sunny weather.",
      "Avoid grapefruit and pomegranate juice while taking immunosuppressants.",
      "Always consult your GP, kidney doctor or pharmacist before changing or starting any medicines.",
    ],
    tryThisWeek: [
      "Take steroids with breakfast.",
      "Report any signs of infection.",
      "Use a high-factor sunscreen.",
    ],
    ask: "Do I need immune treatment, and how long will I take it?",
    interactive: {
      kind: "flip-cards",
      title: "The medicines, card by card",
      intro: "Turn each card to see what that treatment involves.",
      cards: [
        { id: "prednisolone", front: "Prednisolone", when: "Once a day, in the morning", back: "Reduces swelling and calms the immune system. Not stopped suddenly: the dose is lowered gradually." },
        { id: "tacrolimus", front: "Tacrolimus or ciclosporin", when: "Once or twice a day", back: "Blood levels are checked regularly. Do not take the morning dose until after the blood test." },
        { id: "mycophenolate", front: "Mycophenolate", when: "Usually twice a day", back: "May make you feel sick or lower blood cell numbers. Use contraception while taking it and for 3 months after." },
        { id: "cyclophosphamide", front: "Cyclophosphamide", when: "Tablet, injection or drip", back: "Used for vasculitis, lupus or membranous nephritis. Can cause problems with fertility." },
        { id: "rituximab", front: "Rituximab", when: "Given into the bloodstream", back: "Used for diseases such as vasculitis or lupus. Avoid pregnancy for a few months after it." },
        { id: "plasma", front: "Plasma exchange", when: "If the condition is severe", back: "Removes some plasma, which contains proteins that can inflame the kidneys, and adds a substitute." },
      ],
    },
    sources: [NHS_GN_TREAT, NHS_PRED_ABOUT, NHS_PRED_HOW, NHS_PRED_SE, KCUK_IMMUNO, KCUK_FSGS, KCUK_MN],
    quiz: {
      question: "Why should prednisolone not be stopped suddenly?",
      options: [{ text: "The dose needs reducing gradually", right: true }, { text: "It stops working for good" }, { text: "There is no reason" }],
      why: "Do not stop taking it without talking to your doctor, as the dose needs reducing gradually.",
    },
  },
  {
    id: "gn-swelling",
    kicker: "Treatment",
    question: "What helps with swelling: salt and water tablets?",
    hook: "When protein leaks out, water collects in the ankles, hands and face. Less salt and, sometimes, a water tablet help the body let it go.",
    short: "Swelling happens when protein leaks into the urine and the body holds on to salt and water. It is treated by cutting down on salt, sometimes drinking less as your team advises, and water tablets called diuretics, such as furosemide, which make the kidneys produce more urine. Breathlessness from fluid needs urgent treatment, and one leg swelling more than the other needs a doctor.",
    sections: [
      {
        heading: "Why fluid builds up",
        paragraphs: [
          "When protein leaks from the blood into the urine, the level of protein in your blood falls, and this leads to a build-up of water in the body. It can cause ankle swelling, swelling in the hands or around the eyes, and sometimes swelling of the tummy.",
          "Fluid around the ankles, hands or face can be uncomfortable but does not cause serious problems. In some cases of severe nephrotic syndrome, fluid can build up around the lungs and heart and cause breathlessness.",
        ],
      },
      {
        heading: "Less salt, and sometimes less fluid",
        paragraphs: [
          "Fluid retention can be treated by reducing the amount of salt and water taken each day. Higher levels of salt in the body cause the kidneys to keep more water.",
          "Salt should be reduced as much as possible, by not adding it to cooking and avoiding ready-prepared food containing salt. Your medical team will advise on the right amount of water and other drinks for you.",
        ],
      },
      {
        heading: "Water tablets",
        paragraphs: [
          "Swelling caused by a build-up of fluid may be treated with a diuretic, also called a water tablet, which makes the kidneys produce more urine. Furosemide is one, used for swelling caused by conditions that affect the kidneys.",
          "If you take it once a day, it is ideally taken in the morning. It can make you need to pee more urgently and often, so it may help to plan for this, and common side effects include thirst, dizziness and headaches.",
          "If you get vomiting, diarrhoea or a high temperature while taking furosemide, there is a risk of dehydration, so talk to a pharmacist or doctor. Check with your doctor how much fluid you can drink while you take it.",
        ],
      },
      {
        heading: "Swelling to report",
        paragraphs: [
          "If breathlessness or tummy swelling develop, tell your doctor so they can consider water tablets. Fluid collecting in the lungs leads to breathlessness, and this needs to be treated urgently.",
          "Nephrotic syndrome can make the blood sticky, leading to blood clots in the veins of the leg. If one leg gets much more swollen than the other, see your doctor.",
        ],
      },
    ],
    helps: [
      "Cut down on salt: do not add it to cooking, and avoid ready-prepared food containing salt.",
      "Ask your medical team how much fluid is right for you.",
      "Take furosemide in the morning if you take it once a day, and plan for needing to pee more.",
      "If you are sick, have diarrhoea or a high temperature while taking furosemide, talk to a pharmacist or doctor.",
      "Raise your legs on a chair or pillows when you can, and avoid socks and shoes that are too tight.",
    ],
    tryThisWeek: [
      "Stop adding salt to cooking.",
      "Take water tablets in the morning.",
      "Raise your legs when you can.",
    ],
    ask: "How much should I drink, and do I need a water tablet for my swelling?",
    interactive: {
      kind: "scenarios",
      title: "Everyday swelling choices",
      scenarios: [
        {
          id: "pee",
          situation: "Your water tablet makes you need to pee often.",
          options: [{ text: "Plan for it after taking it", best: true }, { text: "Stop taking it" }],
          why: "Furosemide can make you need to pee more urgently and often, so it may help to plan for this after taking it.",
        },
        {
          id: "bug",
          situation: "You get a stomach bug while taking furosemide.",
          options: [{ text: "Talk to a pharmacist or doctor", best: true }, { text: "Carry on as normal" }],
          why: "If you get vomiting, diarrhoea or a high temperature while taking furosemide, there is a risk of dehydration.",
        },
        {
          id: "breathless",
          situation: "Your ankles are swollen and you are getting breathless.",
          options: [{ text: "Tell a doctor urgently", best: true }, { text: "Wait to see if it passes" }],
          why: "Fluid collecting in the lungs leads to breathlessness, and this needs to be treated urgently.",
        },
        {
          id: "cooking",
          situation: "You are cooking dinner.",
          options: [{ text: "Leave the salt out", best: true }, { text: "Add salt to taste as usual" }],
          why: "Salt should be reduced as much as possible, by not adding it to cooking and avoiding ready-prepared food containing salt.",
        },
      ],
    },
    sources: [NHS_GN_TREAT, NKF_NEPHROTIC, NKF_MCN, NHS_FURO, KCUK_FSGS, NHS_OEDEMA],
    quiz: {
      question: "What does a water tablet do?",
      options: [{ text: "Makes the kidneys produce more urine", right: true }, { text: "Stops protein leaking" }, { text: "Calms the immune system" }],
      why: "A diuretic, also called a water tablet, makes the kidneys produce more urine.",
    },
  },
  {
    id: "gn-monitoring",
    kicker: "Treatment",
    question: "What checks will I have over time?",
    hook: "Glomerulonephritis is often a long story. Regular urine, blood and blood pressure checks show whether it is settling, steady or flaring.",
    short: "You should have regular reviews of your blood pressure, your urine and how well your kidneys are working. Treatment aims for remission, when the protein leak stops or greatly reduces, and checks help spot a relapse early. Some medicines need their own blood tests, and many types stay steady for years with check-ups alone.",
    sections: [
      {
        heading: "Regular reviews",
        paragraphs: [
          "You should have regular reviews to check your blood pressure, the levels of salt and potassium in your pee and how well your kidneys are working. Your blood pressure will be carefully monitored by the professionals treating you.",
          "Your kidney team checks how treatment is working with regular urine tests for protein, blood tests for kidney function, blood pressure measurements, and by watching for any new symptoms or side effects.",
        ],
      },
      {
        heading: "Remission and relapse",
        paragraphs: [
          "Successful treatment means remission, when the protein leak stops or significantly reduces. Some people may continue to have some protein leakage despite treatment.",
          "When the steroid dose is reduced, minimal change nephropathy sometimes comes back. Many people test their own urine for protein at home to spot a relapse, and if it happens, advice should be got urgently from the kidney specialist.",
        ],
      },
      {
        heading: "Medicine checks",
        paragraphs: [
          "Immunosuppressants need regular blood tests and review by your kidney doctor. If you take ciclosporin or tacrolimus, do not take your morning dose until after your blood test.",
          "See your doctor regularly about skin checks, and cervical smears for women, as these medicines make skin and cervical cancers more likely, and they are not as serious if found early.",
        ],
      },
      {
        heading: "Over the years",
        paragraphs: [
          "Glomerulonephritis often stays the same for many years without causing trouble. IgA nephropathy may continue unchanged for many years, needing only regular check-ups with blood tests, and in some cases it goes away on its own.",
          "Some people like to use test strips at home to check for protein and blood in their urine. You may also be able to see your test results through hospital systems such as Patients Know Best.",
        ],
      },
      {
        heading: "Cholesterol too",
        paragraphs: [
          "High cholesterol levels are common in people with glomerulonephritis. A doctor may recommend medicine, most often a statin, to help protect you against heart and blood vessel disease.",
        ],
      },
    ],
    helps: [
      "Keep your regular reviews of blood pressure, urine and kidney function.",
      "Ask whether testing your own urine for protein at home would help you spot a relapse.",
      "If you take ciclosporin or tacrolimus, do not take your morning dose until after your blood test.",
      "See your doctor regularly about skin checks, and cervical smears for women.",
      "Ask whether you can see your results through your hospital's online system.",
    ],
    tryThisWeek: [
      "Check the date of your next review.",
      "Ask about home urine tests.",
      "Delay your morning dose before bloods.",
    ],
    ask: "How often will you check my urine, blood and blood pressure, and what would a relapse look like?",
    interactive: {
      kind: "scenarios",
      title: "Keeping track",
      scenarios: [
        {
          id: "bloods",
          situation: "You take tacrolimus and have a blood test tomorrow morning.",
          options: [{ text: "Take the dose after the test", best: true }, { text: "Take it first, as usual" }],
          why: "When you come to have a blood test, you should not take your morning dose until after you have had your blood test.",
        },
        {
          id: "relapse",
          situation: "Your swelling comes back as your steroid dose is lowered.",
          options: [{ text: "Get urgent advice from the specialist", best: true }, { text: "Wait for your next appointment" }],
          why: "When the steroid dose is reduced, the condition sometimes relapses. Advice should be obtained urgently from the kidney specialist.",
        },
        {
          id: "well",
          situation: "You feel well and wonder about skipping a review.",
          options: [{ text: "Keep the review", best: true }, { text: "Skip it this time" }],
          why: "You should have regular reviews to check your blood pressure, the salt and potassium in your pee and how well your kidneys are working.",
        },
      ],
    },
    sources: [NHS_GN_TREAT, KCUK_FSGS, NKF_MCN, KCUK_IMMUNO, NKF_IGAN, NKF_HAEM, KCUK_LUPUS],
    quiz: {
      question: "What does remission mean in glomerulonephritis?",
      options: [{ text: "The protein leak stops or greatly reduces", right: true }, { text: "The kidneys have failed" }, { text: "Treatment has just started" }],
      why: "Successful treatment means remission, when the protein leak stops or significantly reduces.",
    },
  },
  {
    id: "gn-infections",
    kicker: "Living well",
    question: "How do I avoid infections, and which vaccines help?",
    hook: "Both the condition and its treatment can lower your defences. A few jabs and some quick reporting make a real difference.",
    short: "Glomerulonephritis and the medicines that calm the immune system can make infections more likely and more serious. The NHS advises a yearly flu vaccine and the pneumococcal vaccine, and the shingles vaccine is available to adults on medicines that severely weaken the immune system. Live vaccines are not suitable while taking prednisolone, and signs of infection should be reported promptly.",
    sections: [
      {
        heading: "Why infections matter",
        paragraphs: [
          "Glomerulonephritis can make you more vulnerable to infections. In nephrotic syndrome the body loses proteins the immune system uses, and immunosuppressant medicines raise the risk further, with infections that may be worse than normal.",
        ],
      },
      {
        heading: "Vaccines to ask about",
        paragraphs: [
          "The NHS says it is a good idea to protect yourself with a seasonal flu vaccine and a pneumonia vaccine, also called the pneumococcal vaccine.",
          "The flu vaccine is offered free every autumn or winter to people with chronic kidney disease, or with a weakened immune system due to a treatment such as steroid medicine. People who live with someone who has a weakened immune system can have it too.",
          "The pneumococcal vaccine is recommended for people with chronic kidney disease or a weakened immune system. The shingles vaccine is available on the NHS to people aged 18 and over taking certain medicines that severely weaken the immune system, given as 2 doses.",
        ],
      },
      {
        heading: "Live vaccines",
        paragraphs: [
          "If you need any vaccine, tell the doctor or nurse that you take prednisolone. Live vaccines, such as the oral typhoid vaccine and the BCG vaccine for tuberculosis, are not suitable while you take it, but non-live versions for flu, shingles and polio are safe.",
        ],
      },
      {
        heading: "Day to day",
        paragraphs: [
          "Keep away from people with an infectious disease, especially measles, chickenpox or shingles, and tell your doctor straight away if you come into contact with one. Kidney Care UK says to tell your doctor immediately if you or someone close to you catches chickenpox, but not to stop your prednisolone.",
          "On steroids, contact your doctor if you have a fever above 38°C with a sore throat or a cough, a rash or severe bruising, or bad stomach pain or repeated vomiting.",
        ],
      },
      {
        heading: "When it could be sepsis",
        paragraphs: [
          "Taking corticosteroids or immunosuppressants raises the chance of sepsis. Call 999 or go to A&E if an adult is breathing very fast, is confused or has slurred speech, has blue, pale or blotchy skin, has a very high or very low temperature, or has a rash that does not fade when you press it.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
    ],
    helps: [
      "Have the flu vaccine every year, and ask about the pneumococcal vaccine.",
      "Ask your GP or care team if you are eligible for the shingles vaccine.",
      "Tell the doctor or nurse that you take prednisolone before any vaccine.",
      "Tell your doctor straight away if you come into contact with measles, chickenpox or shingles.",
      "Report any signs of infection to your doctor.",
    ],
    tryThisWeek: [
      "Book your flu jab.",
      "Ask about the shingles vaccine.",
      "Report signs of infection.",
    ],
    ask: "Which vaccines should I have, and are any unsafe with my treatment?",
    interactive: {
      kind: "scenarios",
      title: "Infection moments",
      scenarios: [
        {
          id: "chickenpox",
          situation: "A friend you saw yesterday now has chickenpox. You take prednisolone.",
          options: [{ text: "Tell your doctor straight away", best: true }, { text: "Stop your prednisolone" }],
          why: "Tell your doctor immediately if someone close to you catches chickenpox, but do not stop taking your prednisolone.",
        },
        {
          id: "travel",
          situation: "You are offered a vaccine before travelling, while on prednisolone.",
          options: [{ text: "Say you take prednisolone", best: true }, { text: "Say nothing about it" }],
          why: "Live vaccines, such as the oral typhoid vaccine and the BCG vaccine, are not suitable while you take prednisolone.",
        },
        {
          id: "household",
          situation: "You live with someone whose immune system is weakened by treatment.",
          options: [{ text: "You can get a free flu jab too", best: true }, { text: "Only they can have one" }],
          why: "You can get the free NHS flu vaccine if you live with someone who has a weakened immune system.",
        },
        {
          id: "sepsis",
          situation: "On immunosuppressants, you are confused, shivery and breathing very fast.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Sleep it off and see" }],
          why: "Call 999 or go to A&E if an adult is breathing very fast, is confused, or is very hot, cold or shivery.",
        },
      ],
    },
    sources: [NHS_GN_TREAT, NHS_PRED_Q, KCUK_IMMUNO, NHS_FLU, NHS_PNEUMO, NHS_SHINGLES, NKF_NEPHROTIC, KCUK_FSGS, NHS_SEPSIS],
    quiz: {
      question: "Which vaccines are safe while taking prednisolone?",
      options: [{ text: "Non-live ones, such as the flu jab", right: true }, { text: "Live ones only" }, { text: "None at all" }],
      why: "Live vaccines are not suitable while you take it, but non-live versions for flu, shingles and polio are safe.",
    },
  },
  {
    id: "gn-food",
    kicker: "Living well",
    question: "What should I eat: salt and protein?",
    hook: "Salt is the big one. Changes to protein, potassium or fluid depend on your own results and your team's advice.",
    short: "In mild cases, a GP or dietitian gives advice about diet, which may mean less salt, fat, protein and potassium, and sometimes less fluid. Adults should have no more than 6g of salt a day, and most of it is hidden in packaged foods. There is no special diet that makes IgA nephropathy go away, and a kidney dietitian can help with nephrotic syndrome.",
    sections: [
      {
        heading: "Advice made for you",
        paragraphs: [
          "In mild cases, a GP or dietitian will give you advice about diet. You may be advised to cut down on salt, fat, protein and potassium, and to drink less fluid, to help control your blood pressure and keep the amount of fluid in your body right.",
          "For IgA nephropathy, the National Kidney Federation says there is no special diet that will make the disease go away or get worse.",
        ],
      },
      {
        heading: "Salt",
        paragraphs: [
          "Adults should have no more than 6g of salt a day, around 1 level teaspoon. Around three quarters of the salt we eat comes from packaged and everyday foods, such as bread, breakfast cereals, meat products and ready meals.",
          "You may need to eat less salt while you have swelling or are taking steroids, because higher levels of salt cause the kidneys to keep more water.",
          "Some dissolvable tablets, such as painkillers, vitamins or prescription medicines, may be high in salt. Speak to your GP before changing any medicines.",
        ],
      },
      {
        heading: "Flavour without salt",
        paragraphs: [
          "Herbs and spices, black pepper, garlic, chilli and lemon juice add flavour instead of salt. Kidney Care UK suggests looking for very low or zero salt stock cubes.",
          "Some reduced-salt products replace some of the salt with potassium chloride, which people with kidney disease may need to limit or avoid.",
        ],
      },
      {
        heading: "Protein and a balanced diet",
        paragraphs: [
          "Protein is an important part of the blood, and the body does not want to lose it. With nephrotic syndrome, keep to a healthy, balanced diet, and you may need to see a kidney dietitian to make sure you meet your calorie needs.",
          "A high cholesterol level may be treated by eating less fat and taking more exercise, and in some cases with cholesterol-lowering drugs.",
        ],
      },
      {
        heading: "On steroids",
        paragraphs: [
          "Prednisolone can make you hungrier and make your body hold more water. Try to eat well without increasing your portion sizes, and do not eat real liquorice while taking it.",
        ],
      },
    ],
    helps: [
      "Follow the diet advice your GP or dietitian gives you.",
      "Keep to no more than 6g of salt a day.",
      "Flavour food with herbs, spices, garlic or lemon juice instead of salt.",
      "Check labels on reduced-salt products, as some contain potassium chloride.",
      "Ask whether you should see a kidney dietitian.",
      "Do not eat real liquorice while taking prednisolone.",
    ],
    tryThisWeek: [
      "Season with herbs, not salt.",
      "Check stock cube labels.",
      "Ask about a kidney dietitian.",
    ],
    ask: "Do I need to change how much protein, potassium or fluid I have?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "stock",
          situation: "You need a stock cube for a soup.",
          options: [{ text: "A very low or zero salt one", best: true }, { text: "Any reduced-salt one" }],
          why: "Look for very low or zero salt stock cubes. Some reduced-salt ones use potassium chloride, which you may need to limit.",
        },
        {
          id: "cure-diet",
          situation: "You read that a special diet cures IgA nephropathy.",
          options: [{ text: "No diet makes it go away", best: true }, { text: "Start it straight away" }],
          why: "There is no special diet that will make the disease go away or get worse.",
        },
        {
          id: "steroids",
          situation: "You have swelling and have just started steroids.",
          options: [{ text: "Eat less salt for now", best: true }, { text: "Add extra salt for taste" }],
          why: "You may need to eat less salt while you have swelling or are taking steroids, because salt makes the kidneys keep more water.",
        },
        {
          id: "liquorice",
          situation: "You fancy some real liquorice while on prednisolone.",
          options: [{ text: "Leave it for now", best: true }, { text: "It makes no difference" }],
          why: "Do not eat real liquorice while taking prednisolone.",
        },
      ],
    },
    sources: [NHS_GN_TREAT, NHS_SALT, KCUK_FLAVOUR, NKF_IGAN, NKF_NEPHROTIC, KCUK_FSGS, NHS_PRED_SE, NHS_PRED_Q],
    quiz: {
      question: "What is the most salt adults should have in a day?",
      options: [{ text: "6g, around 1 level teaspoon", right: true }, { text: "15g, around 3 teaspoons" }, { text: "There is no limit" }],
      why: "Adults should have no more than 6g of salt a day, around 1 level teaspoon.",
    },
  },
  {
    id: "gn-pregnancy",
    kicker: "Living well",
    question: "Can I have a baby with glomerulonephritis?",
    hook: "Many women with kidney disease are well during pregnancy. Planning it with the kidney team, then good antenatal care, gives the best start.",
    short: "Many women with kidney disease are well during pregnancy, but it is best planned with your kidney doctor. Ideally your kidney function is stable, your blood pressure is well controlled and your medicines have been reviewed, as some, such as ramipril and mycophenolate, are not safe in pregnancy. You will have closer checks during pregnancy, as kidney disease raises the risk of high blood pressure and pre-eclampsia.",
    sections: [
      {
        heading: "Plan ahead",
        paragraphs: [
          "The National Kidney Federation advises planning pregnancy, learning about the risk of medicines to a developing baby and during breastfeeding, and close monitoring during pregnancy, as there is a high risk of a flare or of kidney function getting worse.",
          "With a kidney disease that flares up and then settles, such as lupus nephritis, Kidney Care UK says it is better to wait until the flare has settled for at least six months. Ideally, wait until kidney function is stable, blood pressure is well controlled and your medicines have been reviewed.",
        ],
      },
      {
        heading: "Your medicines",
        paragraphs: [
          "Some blood pressure medicines need to be stopped before pregnancy because they could harm the baby. Ramipril is not recommended in pregnancy, as it can affect the baby's kidneys, so plan any pregnancy with your doctor, and if you are already pregnant, talk to your doctor straight away.",
          "Use contraception while taking mycophenolate or cyclophosphamide and for three months afterwards. Do not stop taking a medicine unless your doctor tells you to, and if your medicines are changed, wait three months before trying to get pregnant.",
          "Prednisolone can be taken in pregnancy, as the benefits usually outweigh any risks. If you take it, your baby's growth will be checked regularly.",
        ],
      },
      {
        heading: "During pregnancy",
        paragraphs: [
          "Contact your GP, who will refer you to maternity services, and tell your kidney doctor. You will have extra checks of your kidney function, the protein in your urine and your blood pressure.",
          "Kidney disease raises the risk of high blood pressure and pre-eclampsia, which can cause headaches, blurred vision or swelling of the hands, feet or face. Aspirin lowers the risk of pre-eclampsia, so your doctor may prescribe it.",
        ],
      },
      {
        heading: "Folic acid, breastfeeding and family",
        paragraphs: [
          "All women should take folic acid for at least three months before trying to get pregnant and for the first 12 weeks of pregnancy. Breastfeeding is generally safe, but check with your doctor, as some drugs pass into breast milk.",
          "IgA nephropathy does not generally run in families. If you have it and are planning a pregnancy, discuss this with a doctor familiar with looking after pregnant women with kidney problems.",
        ],
      },
    ],
    helps: [
      "Talk to your kidney doctor before trying for a baby; you may be referred for pre-pregnancy counselling.",
      "Use contraception while taking mycophenolate and for three months afterwards.",
      "If you become pregnant while taking ramipril, talk to your doctor straight away.",
      "Take folic acid for at least three months before trying to get pregnant and for the first 12 weeks.",
      "Do not stop taking your medicine unless your doctor tells you to.",
    ],
    tryThisWeek: [
      "Talk to your kidney doctor first.",
      "Use contraception on mycophenolate.",
      "Start folic acid before trying.",
    ],
    ask: "Is now a good time for me to try for a baby, and which of my medicines need to change first?",
    interactive: {
      kind: "timeline",
      title: "From planning to birth",
      steps: [
        { id: "plan", when: "Before trying", title: "Plan with your team", points: ["Ideally kidney function stable, blood pressure controlled.", "After a flare, wait until it has settled for six months."] },
        { id: "medicines", when: "Months before", title: "Review your medicines", points: ["Some must change first, such as mycophenolate.", "After a change, wait three months before trying."] },
        { id: "folic", when: "Three months before", title: "Folic acid", points: ["Start at least three months before trying.", "Carry on for the first 12 weeks."] },
        { id: "pregnant", when: "Once pregnant", title: "Tell your GP and kidney doctor", points: ["Your GP refers you to maternity services.", "Extra checks of kidneys, urine and blood pressure."] },
        { id: "after", when: "After the birth", title: "Breastfeeding", points: ["Generally safe.", "Check with your doctor, as some drugs pass into milk."] },
      ],
    },
    sources: [NKF_GN, KCUK_PREG, NHS_RAM_PREG, KCUK_IMMUNO, NHS_PRED_PREG, NKF_IGAN],
    quiz: {
      question: "After a flare of a kidney disease like lupus nephritis, how long is it better to wait before trying for a baby?",
      options: [{ text: "Until it has settled for at least six months", right: true }, { text: "There is no need to wait" }, { text: "Two weeks" }],
      why: "It is better to wait until the flare has settled for at least six months.",
    },
  },
  {
    id: "gn-urgent",
    kicker: "Living well",
    question: "Which signs mean I should get help quickly?",
    hook: "Most days with glomerulonephritis are ordinary. A few signs, mostly about breathing, clots and infection, are not.",
    short: "Call 999 if swelling comes with breathlessness, a tight or painful chest, coughing up blood, or feeling faint or confused, as it could be a blood clot in the lungs. Ask for an urgent GP appointment or get help from NHS 111 for swelling in one leg, sudden or severe swelling, swelling of the face or tummy, or blood in your pee. Signs of sepsis need 999 or A&E.",
    sections: [
      {
        heading: "Call 999",
        paragraphs: [
          "Call 999 if you have swelling and feel short of breath or are struggling to breathe, your chest feels tight, heavy or painful, you are coughing up blood, your heartbeat is more noticeable, or you feel lightheaded, faint, confused, sick or clammy. You could have a blood clot in your lungs, which needs immediate treatment in hospital.",
          "Do not drive yourself to A&E. The person you speak to at 999 will give you advice about what to do.",
        ],
      },
      {
        heading: "Blood clots",
        paragraphs: [
          "Nephrotic syndrome can raise the risk of blood clots. Signs of a clot in the leg, called DVT, include throbbing pain and swelling in 1 leg, and red, blue or darkened skin around the painful area.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you think you have DVT. Call 999 or go to A&E if you have pain and swelling and also feel short of breath or have chest pain.",
          "Call 999 or go to A&E if you have difficulty breathing that comes on suddenly, or pain in your chest or upper back. These could be signs of a clot in the lungs, called a pulmonary embolism, or another serious condition.",
        ],
      },
      {
        heading: "Urgent GP appointment or NHS 111",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if the swelling is severe, painful or starts very suddenly, you also have swelling in your face or tummy, or you have swelling in 1 leg and do not know what is causing it.",
          "The same applies if you have blood in your pee, or think you may have.",
        ],
      },
      {
        heading: "Infection and sepsis",
        paragraphs: [
          "Taking corticosteroids or immunosuppressants raises the chance of sepsis. Call 999 or go to A&E if an adult is breathing very fast, is confused or has slurred speech, has blue, pale or blotchy skin, or has a rash that does not fade when you press it.",
          "On prednisolone, call a doctor or 111 straight away for signs of infection, such as a high temperature, a very sore throat or a cough. Call 999 or go to A&E if you have black or dark brown vomit or are vomiting blood.",
        ],
      },
      {
        heading: "After a biopsy",
        paragraphs: [
          "After a kidney biopsy, follow the contact advice you were given if you have blood in your urine, cannot pass urine, have fevers or feel light-headed or dizzy. If you feel particularly unwell, call 999 or go to your nearest emergency department.",
        ],
      },
    ],
    helps: [
      "Call 999 if you are short of breath, your chest feels tight or painful, or you are coughing up blood.",
      "Do not drive to A&E: ask someone to drive you, or call 999 and ask for an ambulance.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you think you have a clot in your leg.",
      "Get help from NHS 111 or an urgent GP appointment if you have blood in your pee.",
      "Bring any medicines you take with you.",
    ],
    tryThisWeek: [
      "Learn when to call 999.",
      "Learn when to use NHS 111.",
      "Keep your medicines ready to bring.",
    ],
    ask: "Which symptoms mean I should contact the kidney unit directly, and how do I reach it?",
    interactive: {
      kind: "scenarios",
      title: "Getting help quickly",
      scenarios: [
        {
          id: "breathless",
          situation: "Your ankles are swollen and you suddenly struggle to breathe.",
          options: [{ text: "Call 999", best: true }, { text: "Book a GP appointment next week" }],
          why: "Call 999 if you feel short of breath or are struggling to breathe. You could have a blood clot in your lungs.",
        },
        {
          id: "one-leg",
          situation: "One calf is throbbing and swollen, and your breathing is fine.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait a week to see" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you think you have DVT.",
        },
        {
          id: "face",
          situation: "Your face and tummy are swelling as well as your legs.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Ignore it" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you also have swelling in other areas of your body, such as your face or tummy.",
        },
        {
          id: "sepsis",
          situation: "On immunosuppressants, you are confused and breathing very fast.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait until morning" }],
          why: "Call 999 or go to A&E if an adult is breathing very fast or is confused. Do not drive yourself.",
        },
      ],
    },
    sources: [NHS_OEDEMA, NHS_DVT, NHS_PE, NHS_SEPSIS, NHS_BLOOD_URINE, NHS_PRED_SE, NKF_MCN, KCUK_BIOPSY],
    quiz: {
      question: "One leg is swollen and painful, and you suddenly feel short of breath. What should you do?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Book a routine GP appointment" }, { text: "Raise your leg and wait" }],
      why: "Call 999 or go to A&E if you have pain and swelling and also feel short of breath or have chest pain.",
    },
  },
];
