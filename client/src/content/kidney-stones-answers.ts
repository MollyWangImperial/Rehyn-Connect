import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Kidney stones page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, the British
// Association of Urological Surgeons (BAUS) and its patient leaflets, Kidney Care UK, the National Kidney
// Federation and NICE. General information only; it never replaces what a person's own GP or urology team
// tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const baus = (label: string, path: string): LearnSource => ({ label: `BAUS: ${label}`, url: `https://www.baus.org.uk/${path}` });
const bausLeaflet = (label: string, file: string): LearnSource => baus(label, `_userfiles/pages/files/Patients/Leaflets/${file}`);
const kcuk = (label: string, path: string): LearnSource => ({ label: `Kidney Care UK: ${label}`, url: `https://kidneycareuk.org/${path}` });
const nkf = (label: string, path: string): LearnSource => ({ label: `National Kidney Federation: ${label}`, url: `https://www.kidney.org.uk/${path}` });
const kruk = (label: string, path: string): LearnSource => ({ label: `Kidney Research UK: ${label}`, url: `https://www.kidneyresearchuk.org/${path}` });

const NHS_KS = nhs("Kidney stones", "conditions/kidney-stones/");
const NHS_KIDNEY_INFECTION = nhs("Kidney infection", "conditions/kidney-infection/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_DEHYDRATION = nhs("Dehydration", "conditions/dehydration/");
const NHS_CT = nhs("CT scan", "tests-and-treatments/ct-scan/");
const NHS_BLOOD_URINE = nhs("Blood in urine", "symptoms/blood-in-urine/");
const NHS_SALT = nhs("Salt in your diet", "live-well/eat-well/food-types/salt-in-your-diet/");
const NHS_CALCIUM = nhs("Calcium", "conditions/vitamins-and-minerals/calcium/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_DICLOFENAC_WHO = nhs("Who can and cannot take or use diclofenac", "medicines/diclofenac/who-can-and-cannot-take-or-use-diclofenac/");
const NHS_TAMSULOSIN = nhs("About tamsulosin", "medicines/tamsulosin/about-tamsulosin/");
const NHS_TAMSULOSIN_HOW = nhs("How and when to take tamsulosin", "medicines/tamsulosin/how-and-when-to-take-tamsulosin/");

const BAUS_KS = baus("Kidney stones", "patients/conditions/6/kidney_stones/");
const BAUS_FAQ = baus("FAQs about stones", "professionals/sections/endourology/faqs_about_stones.aspx");
const BAUS_DIET = bausLeaflet("Dietary advice for stone formers", "Stone%20diet.pdf");
const BAUS_ESWL = bausLeaflet("Extracorporeal shockwave lithotripsy (ESWL) for stones", "ESWL.pdf");
const BAUS_URS = bausLeaflet("Ureteroscopy (telescopic surgery) for stone removal", "Ureteroscopy%20for%20stone.pdf");
const BAUS_PCNL = bausLeaflet("Percutaneous nephrolithotomy (keyhole surgery for kidney stones)", "PCNL.pdf");
const BAUS_STENT = bausLeaflet("Living with a ureteric stent", "Stent%20advice.pdf");

const KCUK_KS = kcuk("Kidney stones", "kidney-disease-information/kidney-conditions/kidney-stones/");
const NKF_PAIN = nkf("Pain in kidney or urine diseases", "pain-in-kidney-or-urine-diseases");
const KRUK_KS = kruk("Kidney stones symptoms and causes", "conditions-symptoms/kidney-stones/");
const NICE_NG118: LearnSource = { label: "NICE: Renal and ureteric stones: assessment and management (NG118)", url: "https://www.nice.org.uk/guidance/ng118/chapter/Recommendations" };

export const kidneyStonesAnswers: LearnArticle[] = [
  {
    id: "ks-what-it-is",
    kicker: "Understanding",
    question: "What are kidney stones?",
    hook: "Hard lumps made from chemicals in your pee. Some are as small as a grain of sand, and many cause no symptoms at all.",
    short: "Kidney stones are hard lumps that form in your kidneys, usually from a build-up of chemicals found in your pee. Small stones are common and often cause no symptoms, but larger ones can be very painful, especially when they move. BAUS says 1 in 11 people will get stone symptoms during their lifetime.",
    sections: [
      {
        heading: "Hard lumps from your pee",
        paragraphs: [
          "Kidney stones are hard lumps that form in your kidneys. They are usually caused by a build-up of chemicals that are found in your pee.",
          "Stones form from chemicals that have crystallised in concentrated urine, and the crystals can grow bigger over time, like stalactites in a cave. They can form in one or both kidneys, or in the tubes that connect the kidneys to the bladder.",
        ],
      },
      {
        heading: "Sizes and colours",
        paragraphs: [
          "Some are as small as a grain of sand, and the rest range from a few millimetres to a few centimetres across. They come in colours from yellow, through brown, to almost black.",
          "BAUS says the majority of stones are less than 2mm in size. Kidney stones are not related to gallstones in any way.",
        ],
      },
      {
        heading: "The main types",
        paragraphs: [
          "Calcium-based stones are the most common, making up 60 to 80% of all stones, and most are mainly calcium oxalate. Struvite stones, also called infection stones, make up 10 to 15%, and are linked to urine infections.",
          "Uric acid stones make up 5 to 10%, and are more common in people who eat a diet rich in animal protein. Cystine stones, about 1%, come from an inherited condition called cystinuria and often come back.",
        ],
      },
      {
        heading: "How common they are",
        paragraphs: [
          "Kidney stones are common. BAUS says 1 in 11 people will get stone symptoms during their lifetime, and stones are found by chance in about 1 in 12 people having a CT scan.",
          "Men are affected slightly more often than women. People of all ages get stones, but the peak age for a first stone is around 45.",
        ],
      },
      {
        heading: "Many never cause trouble",
        paragraphs: [
          "Small kidney stones may not cause any symptoms, and you may pass them out when you pee without noticing. A stone that stays in the kidney may only be found by chance, on a scan done for another reason.",
          "Stones tend to cause pain when they move. In most people, smaller stones pass out of the body in the urine on their own, while larger ones may need treatment if they get stuck.",
        ],
      },
    ],
    helps: [
      "Drink enough water to stay hydrated, as not drinking enough makes stones more likely.",
      "Check the colour of your pee: dark pee means you are dehydrated and need to drink more.",
      "If you pass a stone, try to collect it, so it can be examined.",
      "Get urgent medical help if you have kidney stones that are causing symptoms.",
      "Do not make changes to your diet without speaking to your doctor.",
    ],
    tryThisWeek: [
      "Drink enough to stay hydrated.",
      "Check the colour of your pee.",
      "Keep any stone you pass.",
    ],
    ask: "What type of stone do I have, and how big is it?",
    interactive: {
      kind: "flip-cards",
      title: "The main kinds of stone",
      intro: "Turn each card to see what each kind of stone is and how common it is.",
      cards: [
        { id: "calcium", front: "Calcium stones", when: "60 to 80% of all stones", back: "The most common type. Mostly calcium oxalate, sometimes mixed with calcium phosphate." },
        { id: "struvite", front: "Struvite stones", when: "10 to 15% of all stones", back: "Also called infection stones. Linked to urine infections, and can grow very large." },
        { id: "uric-acid", front: "Uric acid stones", when: "5 to 10% of all stones", back: "Form in acidic urine. More common with a diet rich in animal protein." },
        { id: "cystine", front: "Cystine stones", when: "About 1% of all stones", back: "Caused by an inherited condition called cystinuria. They often come back and need specialist care." },
      ],
    },
    sources: [NHS_KS, KCUK_KS, BAUS_KS, KRUK_KS, BAUS_FAQ],
    quiz: {
      question: "Which type of kidney stone is the most common?",
      options: [{ text: "Calcium-based stones", right: true }, { text: "Cystine stones" }, { text: "Struvite stones" }],
      why: "Calcium-based stones are the most common, making up 60 to 80% of all stones, and most are mainly calcium oxalate.",
    },
  },
  {
    id: "ks-symptoms",
    kicker: "Symptoms",
    question: "What does a kidney stone feel like?",
    hook: "Often nothing at all, until a stone moves. Then the pain can be severe, coming in waves from the side or back towards the groin.",
    short: "Small stones often cause no symptoms. When a stone moves down from the kidney, it can cause severe pain that starts in your side or lower back, may spread to the groin, and comes and goes. You may also feel sick, need to pee often, or see blood in your pee.",
    sections: [
      {
        heading: "When there are no symptoms",
        paragraphs: [
          "Small kidney stones are common and unlikely to cause any symptoms. If a stone stays in your kidney, it may cause no symptoms at all.",
          "A stone in the kidney can cause an ache in your loin, or blood in your urine that can only be found with a test. Stones are also a known risk factor for urine infections.",
        ],
      },
      {
        heading: "Renal colic",
        paragraphs: [
          "When a stone moves from your kidney into the ureter, the tube that carries urine to the bladder, it can cause severe pain. Doctors call this ureteric or renal colic, and it often comes with feeling or being sick.",
          "The pain usually starts in the side of your tummy or lower back. It may spread to the top of your inner thigh, your testicles or the area around the opening of your vagina, and it may come and go.",
        ],
      },
      {
        heading: "Why it hurts so much",
        paragraphs: [
          "The pain is caused by powerful muscle contractions as your body tries to move the stone down, and by chemicals released in the kidney. It can be extremely severe and very frightening the first time.",
          "The level of pain does not show the size of the problem. People with stones the size of a grain of sand can be in great pain, while some with large kidney stones feel very little.",
        ],
      },
      {
        heading: "As the stone nears the bladder",
        paragraphs: [
          "When the stone gets close to your bladder, you may feel a constant need to pee, even though there is nothing to pass. You may also get burning when you pee, pain at the tip of the penis or urethra, and blood you can see in your pee.",
          "Other symptoms can include a high temperature or feeling hot, cold or shivery, needing to pee often, and pee that looks cloudy or smells bad.",
        ],
      },
      {
        heading: "Other things can feel similar",
        paragraphs: [
          "These symptoms are not specific to kidney stones. Similar pain can come from your back or spine, or from other conditions, so it needs to be checked.",
          "Get urgent medical help if you have kidney stones that are causing symptoms. Blood in your pee should always be checked, even if there is only a small amount.",
        ],
      },
    ],
    helps: [
      "Get urgent medical help if you think you have kidney stones that are causing symptoms.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you are in severe pain, or have a high temperature or feel hot, cold or shivery.",
      "Tell your doctor where the pain starts, whether it travels, and whether it comes and goes.",
      "Get blood in your pee checked, even if there is only a small amount or you are not sure it is blood.",
      "If you have any of these symptoms, see your GP to find out what tests you may need.",
    ],
    tryThisWeek: [
      "Get urgent help for symptoms.",
      "Note where the pain starts and goes.",
      "Get any blood in your pee checked.",
    ],
    ask: "Could my pain be a stone, or something else?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your doctor",
      intro: "Tick any you have noticed. Kidney stones can cause these, and so can other conditions.",
      signs: ["Pain in your side or lower back", "Pain spreading to the groin", "Pain that comes and goes", "Feeling or being sick", "Needing to pee often", "Burning when you pee", "Blood in your pee", "Cloudy pee", "High temperature, hot, cold or shivery"],
      after: "Ask for an urgent GP appointment or get help from NHS 111 if you think you have kidney stones and are in severe pain, or have a high temperature or feel hot, cold or shivery.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_KS, BAUS_KS, BAUS_FAQ, NKF_PAIN, KRUK_KS, NHS_BLOOD_URINE],
    quiz: {
      question: "Does a bigger stone always mean more pain?",
      options: [{ text: "No, the pain does not show the size", right: true }, { text: "Yes, always" }, { text: "Only for women" }],
      why: "The level of pain does not show the size of the problem. People with stones the size of a grain of sand can be in great pain.",
    },
  },
  {
    id: "ks-causes",
    kicker: "Causes",
    question: "Why did I get a kidney stone?",
    hook: "Usually a mix of things: urine that is too concentrated, what you eat, your health and sometimes your family. It is not your fault.",
    short: "Stones form when chemicals in your pee become concentrated enough to crystallise. Not drinking enough is the biggest factor, and a diet high in animal protein, salt and sugar, some medical conditions and medicines, and family history can all add to it. It is unusual for one single thing to be the cause.",
    sections: [
      {
        heading: "Concentrated urine",
        paragraphs: [
          "Your kidneys filter unwanted chemicals out of your blood into your urine. If there is too much of certain chemicals, too little of others that stop crystals forming, or not enough urine, they can crystallise into a stone.",
          "Urine becomes concentrated when you do not drink enough, or lose extra fluid through sweating or diarrhoea. Kidney Care UK says this concentration is the biggest factor in all stone formation.",
        ],
      },
      {
        heading: "Food and drink",
        paragraphs: [
          "A diet high in animal protein, refined sugar and salt increases the risk, especially with a poor fluid intake. High levels of oxalate and vitamin C in the diet can also raise the risk.",
          "The NHS says you are more likely to keep getting stones if you eat a high-protein, low-fibre diet. Some foods are high in oxalate, but BAUS says only 10 to 15% of the oxalate in your urine comes from your diet.",
        ],
      },
      {
        heading: "Health and medicines",
        paragraphs: [
          "You are more likely to get kidney stones if you have a medical condition that increases certain chemicals in your body, such as metabolic syndrome. Certain medicines can also play a part, including aspirin, antacids, diuretics and antibiotics.",
          "Being overweight, putting on weight, having a sedentary job and having uncontrolled diabetes all make stones more likely. Urine infections can lead to struvite stones, and some people have differences in the shape of their kidneys that make stones more likely.",
        ],
      },
      {
        heading: "Who is more likely",
        paragraphs: [
          "Men are more likely to form stones than women. People who become dehydrated because of a hot climate, their work or illnesses such as diarrhoea are also at increased risk.",
          "A family history of kidney stones increases the chance, and some types, such as cystine stones, run in families. But in most cases, stones do not run in families.",
        ],
      },
      {
        heading: "Rarely just one thing",
        paragraphs: [
          "It is unusual for one single factor to cause a stone; a combination is more likely. Kidney Care UK says kidney stones are not your fault, but you can reduce your risk factors.",
          "Hard water is not a cause. BAUS says the calcium and magnesium in hard water are not usually absorbed enough to play a major part in stone formation.",
        ],
      },
    ],
    helps: [
      "Drink enough water to stay hydrated.",
      "Drink more when you are losing extra fluid, such as when you sweat a lot during exercise or have diarrhoea.",
      "Cut down on animal protein, refined sugar and salt.",
      "Lose weight if you are overweight, with more physical activity as part of it.",
      "Tell your doctor about any medicines you take and whether anyone in your family has had stones.",
    ],
    tryThisWeek: [
      "Drink enough to stay hydrated.",
      "Drink more when you sweat a lot.",
      "Cut down on salt and sugar.",
    ],
    ask: "What do you think caused my stone, and can that cause be treated?",
    interactive: {
      kind: "risk-check",
      title: "What raises the chance of a stone?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "fluids", label: "Not drinking enough", note: "Concentrated urine is the biggest factor in all stone formation, says Kidney Care UK.", changeable: true },
        { id: "diet", label: "Lots of animal protein, sugar and salt", note: "Increases the risk, especially when combined with not drinking enough.", changeable: true },
        { id: "weight", label: "Being overweight or putting on weight", note: "Kidney Care UK says this makes stones more likely.", changeable: true },
        { id: "inactive", label: "Being inactive", note: "A sedentary job makes stones more likely, and being inactive or bed-bound makes them more likely to come back.", changeable: true },
        { id: "diabetes", label: "Uncontrolled diabetes", note: "Makes stones more likely. Good blood sugar control can lower the risk of uric acid stones.", changeable: true },
        { id: "infections", label: "Frequent kidney or urine infections", note: "Linked to struvite stones, and to stones coming back.", changeable: false },
        { id: "heat", label: "A hot climate or dehydrating work", note: "People who become dehydrated through a hot climate or their work are at increased risk.", changeable: false },
        { id: "sex", label: "Being a man", note: "Men are more likely to form stones than women.", changeable: false },
        { id: "family", label: "A close family member with stones", note: "Raises the chance. Some types, such as cystine stones, run in families.", changeable: false },
        { id: "before", label: "Having had a stone before", note: "BAUS says there is a 50% chance of forming another within the next 10 years.", changeable: false },
      ],
    },
    sources: [NHS_KS, BAUS_KS, KCUK_KS, KRUK_KS, BAUS_DIET, BAUS_FAQ],
    quiz: {
      question: "What is the biggest factor in kidney stones forming?",
      options: [{ text: "How concentrated your urine is", right: true }, { text: "Hard tap water" }, { text: "Eating dairy foods" }],
      why: "Urine becomes concentrated when you do not drink enough. Kidney Care UK says this concentration is the biggest factor in all stone formation.",
    },
  },
  {
    id: "ks-tests",
    kicker: "Tests",
    question: "How do doctors find a kidney stone?",
    hook: "Your symptoms come first, then urine and blood tests. A low-dose CT scan is usually the clearest way to see a stone.",
    short: "A doctor can usually diagnose kidney stones from your symptoms, with urine and blood tests to help. If you have severe pain, you may be sent to hospital for a scan: usually a CT scan for adults, or an ultrasound if you are pregnant or for children. If you pass a stone, it can be analysed to help prevent more.",
    sections: [
      {
        heading: "Questions and an examination",
        paragraphs: [
          "A doctor can usually diagnose kidney stones from your symptoms. They may ask about any conditions you have, your medicines, your diet, and whether you or someone in your family has had stones before.",
          "BAUS says you may also be asked about how much you drink and time spent in a hot, dry climate. Your tummy will usually be examined, and your blood pressure may be taken.",
        ],
      },
      {
        heading: "Urine and blood tests",
        paragraphs: [
          "Your urine is usually tested with a dipstick for blood and acidity, and most people with a stone have a trace of blood in their urine. If there are signs of infection, a sample may be sent to the laboratory.",
          "Blood tests check how well your kidneys are working. They can also measure calcium, phosphate and uric acid, which may be linked to stones forming.",
        ],
      },
      {
        heading: "Scans",
        paragraphs: [
          "If you have severe pain, you may be referred to hospital for a CT scan if you are an adult, or an ultrasound scan if you are pregnant or for children under 16.",
          "NICE advises an urgent low-dose CT scan, without dye, within 24 hours for adults with suspected renal colic. Kidney Care UK says a form of CT scan is the best way to show a stone, while ultrasound is useful for showing a blockage but is not a reliable way to confirm or rule out stones.",
        ],
      },
      {
        heading: "What the CT shows",
        paragraphs: [
          "The CT scan looks at your kidneys, ureters and bladder. It shows where the stone is, how big it is and whether there is more than one, and size is an important factor in choosing treatment.",
          "A CT scan usually takes between 10 and 20 minutes, lying on a flat bed while the scanner moves around part of your body. Once stones are known about, they can be followed up with plain X-rays.",
        ],
      },
      {
        heading: "Testing the stone itself",
        paragraphs: [
          "If you pass a stone, try to retrieve it, so your urologist can send it off for analysis. Knowing what it is made of helps your team give you specific advice on preventing more.",
          "Some people are asked to collect their urine over 24 hours, so it can be analysed in detail. This is usually done for younger people, people with a strong family history and people who have had several stones.",
        ],
      },
    ],
    helps: [
      "Tell your doctor about your medicines, your diet and any family history of stones.",
      "Tell the hospital before a CT scan if you are or might be pregnant, or have kidney problems.",
      "If you pass a stone, try to retrieve it, so it can be analysed.",
      "Check which type of scan has been ordered, and read any instructions before you go.",
      "If you have not heard about your CT results after 4 weeks, contact the doctor who referred you.",
    ],
    tryThisWeek: [
      "List your medicines for the doctor.",
      "Keep any stone you pass.",
      "Chase scan results after 4 weeks.",
    ],
    ask: "Which scan do I need, and will my stone be analysed?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, card by card",
      intro: "Turn each card to see what each test is for.",
      cards: [
        { id: "dipstick", front: "Urine dipstick", when: "Usually at the first visit", back: "Checks your urine for blood and acidity. Most people with a stone have a trace of blood." },
        { id: "blood", front: "Blood tests", when: "To check your kidneys", back: "Measure how well your kidneys work, and levels of calcium, phosphate and uric acid." },
        { id: "ct", front: "Low-dose CT scan", when: "For adults with severe pain", back: "The best way to show a stone: where it is, how big it is and whether there are more." },
        { id: "ultrasound", front: "Ultrasound scan", when: "If pregnant, or for children", back: "Uses no X-rays. Useful for showing a blockage, but not a reliable way to rule stones in or out." },
        { id: "xray", front: "Plain X-ray", when: "To follow a known stone", back: "Once stones are known about, they can be followed up with plain X-rays." },
        { id: "analysis", front: "Stone analysis", when: "If you pass a stone", back: "Shows what the stone is made of, so advice on preventing more can fit your stone." },
      ],
    },
    sources: [NHS_KS, BAUS_KS, KCUK_KS, NICE_NG118, NHS_CT, NKF_PAIN, BAUS_DIET],
    quiz: {
      question: "What does NICE advise for adults with suspected renal colic?",
      options: [{ text: "A low-dose CT scan within 24 hours", right: true }, { text: "An MRI scan the next month" }, { text: "No scan at all" }],
      why: "NICE advises an urgent low-dose CT scan, without dye, within 24 hours for adults with suspected renal colic.",
    },
  },
  {
    id: "ks-passing",
    kicker: "Treatment",
    question: "Will my stone pass on its own?",
    hook: "Most small stones do, usually within a few weeks. Size matters most, and there are things that help it along.",
    short: "Most kidney stones can be treated at home, though they can still be painful and may take a few weeks to pass. BAUS says most stones smaller than 5mm pass by themselves, while those larger than 7mm rarely do. You will be advised to drink lots of water, may be given medicines to help, and may be asked to collect the stone when it comes out.",
    sections: [
      {
        heading: "Size matters",
        paragraphs: [
          "BAUS says most stones smaller than 5mm across pass by themselves, but larger stones, more than 7mm, rarely do. Stones in the ureter that are small and close to the bladder may pass by themselves.",
          "Most kidney stones can be treated at home with medicine. They can still be painful, and may take a few weeks to pass out in your pee.",
        ],
      },
      {
        heading: "At home",
        paragraphs: [
          "You will be advised to drink lots of water, and may be offered painkillers, anti-sickness medicines and medicines to help the stone come out in your pee.",
          "BAUS says to take painkillers as soon as the pain begins, rather than waiting for it to become severe. Staying mobile, rather than taking to your bed, actually encourages small stones to pass more quickly.",
        ],
      },
      {
        heading: "Medicines to help it pass",
        paragraphs: [
          "Medicines called alpha blockers, such as tamsulosin, relax the muscle of the ureter to help a stone pass. The usual dose of tamsulosin for kidney stones is 400 micrograms once a day.",
          "NICE says alpha blockers can be considered for stones under 10mm in the lower part of the ureter, after reviewing evidence that they help small stones pass. BAUS says large trials found no benefit, and its urologists no longer use them.",
        ],
      },
      {
        heading: "Catching the stone",
        paragraphs: [
          "You may be asked to try to collect the stone after you pass it in your pee, so it can be examined, and you will be told how to do this.",
          "Kidney Care UK says if you do manage to pass a stone, try to retrieve it, so your urologist can send it off for analysis. Knowing what it is made of helps your team advise you on preventing more.",
        ],
      },
      {
        heading: "If it does not pass",
        paragraphs: [
          "BAUS says active treatment is usually advised if a stone shows no sign of passing after two to three weeks. Larger stones, more than 6mm across, are less likely to pass, and your urologist may recommend removing them.",
          "NICE advises treatment within 48 hours for adults whose pain is ongoing and not tolerated, or whose stone is unlikely to pass. After an attack, you will usually be seen in outpatients to check whether the stone has passed.",
        ],
      },
    ],
    helps: [
      "Drink lots of water while you wait for the stone to pass.",
      "Take painkillers as soon as the pain begins, rather than waiting for it to become severe.",
      "Stay mobile rather than taking to your bed, as it encourages small stones to pass.",
      "Collect the stone after you pass it, as you are shown, so it can be examined.",
      "If tamsulosin makes you feel dizzy, sit or lie down until you feel better, and do not drive.",
      "Get urgent medical help if you are in severe pain or have a high temperature.",
    ],
    tryThisWeek: [
      "Drink lots of water.",
      "Keep moving rather than resting in bed.",
      "Catch the stone when it passes.",
    ],
    ask: "How big is my stone, and how long should I wait for it to pass?",
    interactive: {
      kind: "scenarios",
      title: "While you wait for it to pass",
      scenarios: [
        {
          id: "pain-starts",
          situation: "The pain is starting to build again.",
          options: [{ text: "Take painkillers now", best: true }, { text: "Wait until it is severe" }],
          why: "BAUS says to take painkillers as soon as the pain begins, rather than waiting for it to become severe.",
        },
        {
          id: "bed",
          situation: "You feel like spending the day in bed.",
          options: [{ text: "Stay gently mobile", best: true }, { text: "Stay in bed until it passes" }],
          why: "Staying mobile, rather than taking to your bed, actually encourages small stones to pass more quickly.",
        },
        {
          id: "gritty",
          situation: "You pass something small and gritty.",
          options: [{ text: "Collect it for testing", best: true }, { text: "Flush it away" }],
          why: "If you do manage to pass a stone, try to retrieve it, so your urologist can send it off for analysis.",
        },
        {
          id: "three-weeks",
          situation: "Three weeks on, there is no sign of it passing.",
          options: [{ text: "Ask your team about treatment", best: true }, { text: "Keep waiting without a check" }],
          why: "BAUS says active treatment is usually advised if a stone shows no sign of passing after two to three weeks.",
        },
      ],
    },
    sources: [NHS_KS, BAUS_KS, BAUS_URS, BAUS_FAQ, NICE_NG118, NHS_TAMSULOSIN, NHS_TAMSULOSIN_HOW, KCUK_KS],
    quiz: {
      question: "Which stones usually pass by themselves?",
      options: [{ text: "Most smaller than 5mm", right: true }, { text: "Most larger than 7mm" }, { text: "None of them" }],
      why: "BAUS says most stones smaller than 5mm across pass by themselves, but larger stones, more than 7mm, rarely do.",
    },
  },
  {
    id: "ks-treatments",
    kicker: "Treatment",
    question: "How are larger stones broken up or removed?",
    hook: "Shock waves from outside the body, a thin telescope through the urethra, or keyhole surgery through the back. Size and position decide which.",
    short: "Larger stones may need a procedure in hospital to break them up or remove them. The main options are shockwave lithotripsy, ureteroscopy using a thin telescope and a laser, and keyhole surgery called PCNL for large stones. Which one you are offered depends mostly on the size and position of the stone.",
    sections: [
      {
        heading: "Choosing a treatment",
        paragraphs: [
          "Larger kidney stones may need a procedure or surgery in hospital to break them up or remove them. Treatment depends on the size and position of the stone, and on the facilities available locally.",
          "BAUS says active treatment is likely for stones that cause troublesome pain, block the kidney, cause infection or are large enough to keep growing. Small stones found by chance that cause no symptoms can be checked with scans instead.",
          "NICE advises offering shockwave treatment first to most adults with stones under 10mm, and keyhole surgery for stones in the kidney over 20mm.",
        ],
      },
      {
        heading: "Shockwave lithotripsy",
        paragraphs: [
          "Shock waves are fired through the skin and focused on the stone, to break it into pieces small enough to pass in your pee. You are awake, with painkillers, and each shock wave feels like being flicked in the back with an elastic band.",
          "Treatment normally lasts 30 to 60 minutes, and you can go home within a couple of hours. Some stones need two or three sessions, and some are too hard to break. It is not done in pregnancy or for people taking blood thinners.",
        ],
      },
      {
        heading: "Ureteroscopy",
        paragraphs: [
          "A thin telescope is passed up through the urethra, the tube where pee comes out, to the stone. A laser breaks the stone into dust or small pieces, which can be removed, and it is done under general anaesthetic.",
          "Many people go home the same day or early the next morning, and recovery is usually rapid. A temporary stent is often left in the ureter afterwards, and removed later.",
        ],
      },
      {
        heading: "Keyhole surgery",
        paragraphs: [
          "Percutaneous nephrolithotomy, or PCNL, is used for large stones in the kidney. Under general anaesthetic, a track is made into the kidney through the skin of your back, and the stone is broken up and removed.",
          "It is a more major procedure, with a greater risk of bleeding, but it can clear large amounts of stone in one go. Open surgery is rarely needed nowadays.",
        ],
      },
      {
        heading: "Stents and drains",
        paragraphs: [
          "A ureteric stent is a small, hollow tube placed inside the ureter to keep urine draining. It may be put in when a stone is blocking the ureter, or after ureteroscopy, and is usually removed later with a fine telescope while you are awake.",
          "If a blocked kidney is infected, a tube called a nephrostomy may be put into the kidney through the skin of your loin to drain it. The stone is then treated once the infection has settled.",
        ],
      },
    ],
    helps: [
      "Ask your urologist which treatment suits the size and position of your stone.",
      "Tell the team if you take blood thinners, are pregnant or have a pacemaker.",
      "Do not drive yourself home after lithotripsy.",
      "Drink twice as much as usual after lithotripsy or ureteroscopy, to flush your system through.",
      "If you have a stent, make sure you know when it is due to be removed.",
      "Contact your doctor immediately if you get a high temperature, severe pain passing urine, cannot pass urine or the bleeding gets worse.",
    ],
    tryThisWeek: [
      "Ask which treatment suits your stone.",
      "Arrange a lift home after lithotripsy.",
      "Know when your stent comes out.",
    ],
    ask: "Which treatment do you recommend for my stone, and why?",
    interactive: {
      kind: "flip-cards",
      title: "The treatments, card by card",
      intro: "Turn each card to see what each treatment involves.",
      cards: [
        { id: "watch", front: "Watchful waiting", when: "Small stones with no symptoms", back: "The stone is checked with scans, and treated only if it grows or causes symptoms." },
        { id: "eswl", front: "Shockwave lithotripsy", when: "Smaller stones, under 10mm", back: "Shock waves from outside the body break up the stone. You are awake, and go home the same day." },
        { id: "urs", front: "Ureteroscopy", when: "Stones in the ureter or kidney", back: "A thin telescope through the urethra, and a laser to break up the stone. Done under general anaesthetic." },
        { id: "pcnl", front: "PCNL (keyhole surgery)", when: "Large stones in the kidney", back: "A track into the kidney through the back, to break up and remove the stone. A more major procedure." },
        { id: "stent", front: "Ureteric stent", when: "A blockage, or after ureteroscopy", back: "A small tube inside the ureter that keeps urine draining. It is removed later." },
      ],
    },
    sources: [NHS_KS, BAUS_KS, BAUS_ESWL, BAUS_URS, BAUS_PCNL, NICE_NG118, KCUK_KS, BAUS_STENT],
    quiz: {
      question: "Which treatment breaks up a stone from outside the body?",
      options: [{ text: "Shockwave lithotripsy", right: true }, { text: "Ureteroscopy" }, { text: "PCNL" }],
      why: "Shock waves are fired through the skin and focused on the stone, to break it into pieces small enough to pass in your pee.",
    },
  },
  {
    id: "ks-pain",
    kicker: "Treatment",
    question: "What helps the pain of a kidney stone?",
    hook: "Renal colic can be one of the worst pains there is, but it can be relieved. Starting painkillers early makes a difference.",
    short: "The pain of a kidney stone can be relieved with injections, suppositories or tablets. In hospital, NICE advises an anti-inflammatory painkiller, called an NSAID, first, with paracetamol into a vein if that is not suitable. At home, take painkillers as soon as the pain starts, and check with a pharmacist or doctor which ones are safe for you.",
    sections: [
      {
        heading: "It can be relieved",
        paragraphs: [
          "Women often say the pain of renal colic is worse than the pain of childbirth. But it can be relieved with simple injections, suppositories or tablets, so that you are comfortable.",
          "Pain relief is the first priority. Not everyone needs to go into hospital, even with an attack of colic.",
        ],
      },
      {
        heading: "What doctors give",
        paragraphs: [
          "NICE advises an anti-inflammatory painkiller, called an NSAID, as the first treatment for suspected renal colic. If NSAIDs are not suitable or not working, paracetamol into a vein is offered, and opioids are considered only if neither can be used or works.",
          "BAUS says regular paracetamol is a good painkiller and gives a baseline to which anti-inflammatory painkillers can be added as needed. NICE advises against medicines for spasms, called antispasmodics.",
        ],
      },
      {
        heading: "Painkillers at home",
        paragraphs: [
          "The National Kidney Federation says paracetamol is the safest painkiller if you have kidney pain. Do not take more than the recommended dose.",
          "The NHS says a usual adult dose is 1 or 2 500mg tablets, at least 4 hours apart, with no more than 8 tablets in 24 hours. Paracetamol may not be suitable for people with a kidney or liver condition, so speak to a pharmacist or doctor if you are not sure.",
        ],
      },
      {
        heading: "Anti-inflammatories are not for everyone",
        paragraphs: [
          "NSAIDs such as ibuprofen and diclofenac are not suitable for some people, including people with asthma, stomach ulcers, heart failure or kidney disease. The NHS lists a problem with your kidneys among the possible serious side effects of ibuprofen.",
          "The National Kidney Federation says to take ibuprofen for kidney pain only if a doctor has recommended it. If you might have a kidney infection, the NHS says not to take ibuprofen unless a doctor advises it.",
        ],
      },
      {
        heading: "When the pain is severe",
        paragraphs: [
          "Start painkillers as soon as the pain begins, rather than waiting for it to become severe. Keeping well hydrated and staying mobile also help.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you think you have kidney stones and are in severe pain. Severe colic often needs urgent referral for pain relief, which may be injections, and a scan.",
        ],
      },
    ],
    helps: [
      "Take painkillers as soon as the pain begins, rather than waiting for it to become severe.",
      "Never take more paracetamol than the recommended dose.",
      "Speak to a pharmacist or doctor before taking ibuprofen or other anti-inflammatories for kidney pain.",
      "Avoid taking cold and flu remedies that also contain paracetamol at the same time.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you are in severe pain.",
    ],
    tryThisWeek: [
      "Start painkillers early.",
      "Stick to the dose on the packet.",
      "Ask before taking ibuprofen.",
    ],
    ask: "Which painkillers are safe for me, and what should I do if they do not work?",
    interactive: {
      kind: "scenarios",
      title: "Pain relief moments",
      scenarios: [
        {
          id: "early",
          situation: "You feel the familiar ache starting.",
          options: [{ text: "Take painkillers now", best: true }, { text: "Wait to see if it gets worse" }],
          why: "Start painkillers as soon as the pain begins, rather than waiting for it to become severe.",
        },
        {
          id: "cold",
          situation: "You have a cold and are already taking paracetamol.",
          options: [{ text: "Check the cold remedy first", best: true }, { text: "Add a cold and flu sachet" }],
          why: "Avoid taking cold and flu remedies that also contain paracetamol at the same time.",
        },
        {
          id: "asthma",
          situation: "You have asthma and wonder about ibuprofen.",
          options: [{ text: "Ask a pharmacist or doctor first", best: true }, { text: "Take it anyway" }],
          why: "NSAIDs such as ibuprofen and diclofenac are not suitable for some people, including people with asthma.",
        },
        {
          id: "severe",
          situation: "The pain is severe and nothing is helping.",
          options: [{ text: "Get urgent help from a GP or NHS 111", best: true }, { text: "Wait until the morning" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you think you have kidney stones and are in severe pain.",
        },
      ],
    },
    sources: [NHS_KS, NICE_NG118, BAUS_KS, BAUS_FAQ, NKF_PAIN, NHS_PARACETAMOL, NHS_IBUPROFEN, NHS_DICLOFENAC_WHO, NHS_KIDNEY_INFECTION],
    quiz: {
      question: "What does NICE advise as the first painkiller for suspected renal colic?",
      options: [{ text: "An anti-inflammatory (NSAID)", right: true }, { text: "A medicine for spasms" }, { text: "Nothing until after a scan" }],
      why: "NICE advises an anti-inflammatory painkiller, called an NSAID, as the first treatment for suspected renal colic.",
    },
  },
  {
    id: "ks-urgent",
    kicker: "Getting help",
    question: "When is a kidney stone an emergency?",
    hook: "Severe pain, or pain with a fever, needs help the same day. A blocked, infected kidney is an emergency.",
    short: "Get urgent medical help if you have kidney stones that are causing symptoms. The NHS says to ask for an urgent GP appointment or get help from NHS 111 if you are in severe pain or have a high temperature. Pain in the side with a fever can mean a blocked, infected kidney, and Kidney Care UK says to go straight to your local hospital emergency department.",
    sections: [
      {
        heading: "Severe pain or a temperature",
        paragraphs: [
          "The NHS says to get urgent medical help if you have kidney stones that are causing symptoms. Ask for an urgent GP appointment or get help from NHS 111 if you think you have kidney stones and you are in severe pain.",
          "Do the same if you have a high temperature, or feel hot, cold or shivery. You can call 111 or get help from 111 online.",
        ],
      },
      {
        heading: "A blocked, infected kidney",
        paragraphs: [
          "Infection together with a blockage is a dangerous condition that needs emergency treatment and drainage in hospital that day. Its symptoms are pain in the side of the tummy and a fever.",
          "Kidney Care UK says if you fear this may be happening, go straight to your local hospital emergency department, and tell them about any stones and your symptoms. BAUS says a blockage with infection can damage a kidney quickly.",
        ],
      },
      {
        heading: "Signs of sepsis",
        paragraphs: [
          "A kidney infection can be serious if it is not treated, as it can cause sepsis. Call 999 or go to A&E now if you are confused, drowsy or have difficulty speaking.",
          "The NHS also says to call 999 or go to A&E for an adult who is breathing very fast, has slurred speech, has blue, pale or blotchy skin, or has a very high or very low temperature. Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
        ],
      },
      {
        heading: "After treatment",
        paragraphs: [
          "After lithotripsy or ureteroscopy, contact your doctor immediately if you get a high temperature, severe pain when passing urine, cannot pass urine, or the bleeding gets worse.",
          "If your pain is severe and does not settle, BAUS says to contact your urology unit, go to your local Accident and Emergency department, or contact your GP.",
        ],
      },
      {
        heading: "Who needs help fastest",
        paragraphs: [
          "Hospital admission for urgent treatment is needed when there is infection with a blocked kidney, or a risk to kidney function, such as in people with only one kidney, known reduced kidney function, or stones in both ureters at once.",
          "BAUS says a high temperature is a message from your body that you have an infection, and should not be ignored. Seek medical advice promptly.",
        ],
      },
    ],
    helps: [
      "Ask for an urgent GP appointment or get help from NHS 111 if you are in severe pain, or have a high temperature or feel hot, cold or shivery.",
      "If you have pain in your side with a fever, go straight to your local hospital emergency department and tell them about your stones.",
      "Call 999 or go to A&E now if you are confused, drowsy or have difficulty speaking.",
      "Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
      "Bring any medicines you take with you.",
    ],
    tryThisWeek: [
      "Know when to call NHS 111.",
      "Know when to go to A&E.",
      "Bring your medicines with you.",
    ],
    ask: "If I get pain and a fever, where should I go, and who do I call?",
    interactive: {
      kind: "signs",
      title: "Signs that need help now",
      intro: "Tick any that apply. Each one is a reason to get help straight away, not to wait.",
      signs: ["Severe pain", "High temperature, hot, cold or shivery", "Pain in your side with a fever", "Not being able to pass urine", "Bleeding that is getting worse", "Confused, drowsy or difficulty speaking", "Breathing very fast", "Blue, pale or blotchy skin"],
      after: "For severe pain or a high temperature, ask for an urgent GP appointment or get help from NHS 111. For pain in your side with a fever, Kidney Care UK says go straight to your local hospital emergency department. If someone is confused, drowsy or has difficulty speaking, call 999 or go to A&E now.",
      copyHeading: "Signs I have noticed",
    },
    sources: [NHS_KS, KCUK_KS, BAUS_FAQ, NHS_KIDNEY_INFECTION, NHS_SEPSIS, BAUS_ESWL, BAUS_URS, BAUS_KS],
    quiz: {
      question: "What does Kidney Care UK say to do for pain in the side with a fever?",
      options: [{ text: "Go straight to a hospital emergency department", right: true }, { text: "Wait a few days to see" }, { text: "Drink less fluid" }],
      why: "Kidney Care UK says if you fear this may be happening, go straight to your local hospital emergency department, and tell them about any stones and your symptoms.",
    },
  },
  {
    id: "ks-fluids",
    kicker: "Living well",
    question: "How much should I drink to stop stones forming?",
    hook: "Drinking plenty is the most effective way to prevent stones. The aim is simple: pale, almost colourless pee all day.",
    short: "Drinking plenty of fluid is the most effective way to prevent stones, cutting the risk of another by almost a third. The NHS advises adults to drink two and a half to three litres of water a day, and BAUS says to aim for colourless urine throughout the day. Spread drinks across the day, including before bed.",
    sections: [
      {
        heading: "The most effective step",
        paragraphs: [
          "BAUS says drinking plenty of fluid is the most effective way of preventing stones, and reduces the risk by almost one third. Not drinking enough makes your urine concentrated, so stones are more likely to form.",
          "The NHS and NICE advise adults to drink two and a half to three litres of water each day. Children should drink 1 to 2 litres, depending on their age.",
        ],
      },
      {
        heading: "Watch the colour",
        paragraphs: [
          "Check the colour of your pee. If it is dark, it means you are dehydrated and need to drink more.",
          "BAUS says to aim to keep your urine colourless throughout the day, which should give a urine output of at least 2 litres a day. People with cystine stones need to drink even more.",
        ],
      },
      {
        heading: "Spread it through the day",
        paragraphs: [
          "It is best to drink steadily throughout the day, rather than going from being dehydrated to drinking lots in one go. Try a large glass of water at set times, a bottle or jug by your side, or a glass every hour.",
          "We all concentrate our urine overnight, so this is probably when most stones form and grow. Drinking in the evening and taking a glass of water to bed dilutes the urine overnight.",
        ],
      },
      {
        heading: "What to drink",
        paragraphs: [
          "Tap water is best, and just as good as expensive bottled water. Most of your fluid should be water or squash, though tea, coffee and alcohol in moderation are fine.",
          "Add fresh lemon juice to water, which may raise the natural stone inhibitors in your urine. Avoid drinking lots of fizzy, caffeinated or alcoholic drinks, and Kidney Care UK says sugary drinks such as cola, and fruit juices, increase the risk.",
        ],
      },
      {
        heading: "On hot or active days",
        paragraphs: [
          "Drink more when there is a higher risk of dehydrating, such as when you are sweating in hot weather or during exercise, or have diarrhoea or are being sick.",
          "Signs of dehydration include feeling thirsty, dark yellow, strong-smelling pee and peeing less often than usual.",
        ],
      },
    ],
    helps: [
      "Drink two and a half to three litres of water a day, if you are an adult.",
      "Check the colour of your pee, and drink more if it is dark.",
      "Keep a bottle or jug of water by your side all day.",
      "Drink one or two glasses of water before going to bed and on getting up in the morning.",
      "Add fresh lemon juice, or slices of lemon, to water.",
      "Drink more when you are sweating in hot weather or during exercise, or have diarrhoea.",
    ],
    tryThisWeek: [
      "Aim for pale or colourless pee.",
      "Keep water by your side.",
      "Have a glass of water at bedtime.",
    ],
    ask: "How much should I be drinking each day, given my stones and my health?",
    interactive: {
      kind: "timeline",
      title: "A day of drinking",
      steps: [
        { id: "wake", when: "On getting up", title: "Start the day", points: ["One or two glasses of water.", "Check the colour of your pee."] },
        { id: "day", when: "Through the day", title: "Steady drinking", points: ["Try a glass of water every hour.", "Keep a bottle or jug by your side."] },
        { id: "meals", when: "With meals", title: "Mostly water", points: ["Water or squash for most drinks.", "Tea and coffee in moderation."] },
        { id: "active", when: "Hot or active days", title: "Drink more", points: ["Drink plenty if you sweat a lot.", "Avoid getting dehydrated."] },
        { id: "bed", when: "At bedtime", title: "Before sleep", points: ["One or two glasses of water.", "This dilutes the urine overnight."] },
      ],
    },
    sources: [NHS_KS, BAUS_DIET, BAUS_KS, KCUK_KS, NICE_NG118, BAUS_FAQ, NHS_DEHYDRATION],
    quiz: {
      question: "What colour should you aim for your pee to be?",
      options: [{ text: "Colourless or very pale", right: true }, { text: "Dark yellow" }, { text: "It does not matter" }],
      why: "BAUS says to aim to keep your urine colourless throughout the day.",
    },
  },
  {
    id: "ks-food",
    kicker: "Food",
    question: "What should I eat to avoid more stones?",
    hook: "Less salt and animal protein, but not less calcium. Cutting out dairy can actually make stones more likely.",
    short: "What you eat matters less than how much you drink, but it plays a part. Keep salt to no more than 6g a day, cut down on animal protein and sugar, and keep a normal amount of calcium in your diet. Do not make changes to your diet without speaking to your doctor.",
    sections: [
      {
        heading: "Drink first, then diet",
        paragraphs: [
          "BAUS says what you eat is not as important as how much you drink, but it does play a part. A well-balanced diet with fresh fruit, salad and vegetables, low-fat dairy and wholegrains is the place to start.",
          "Do not make changes to your diet without speaking to your doctor. Specific types of stone can be managed by measures aimed at their cause.",
        ],
      },
      {
        heading: "Do not cut calcium",
        paragraphs: [
          "Make sure you are getting enough calcium in your diet. Cutting down on calcium can actually increase the risk of stones, by raising oxalate levels in your urine.",
          "Calcium in foods such as milk, cheese and yoghurt binds to oxalate, so it cannot form stones. NICE advises a normal calcium intake of 700 to 1,200mg a day for adults, and the NHS says adults need 700mg a day.",
        ],
      },
      {
        heading: "Cut down on salt",
        paragraphs: [
          "A high salt intake can increase calcium stone formation. Adults should have no more than 6g of salt a day, around 1 level teaspoon.",
          "Do not add salt at the table; use pepper, herbs, spices or vinegar instead. Around three quarters of the salt we eat is already in the foods we buy, such as bread, breakfast cereals, meat products and ready meals.",
        ],
      },
      {
        heading: "Protein, sugar and oxalate",
        paragraphs: [
          "Cutting down on animal protein, especially meat, and on refined sugar helps reduce the risk of further stones. BAUS says a normal-calcium, low-salt, low-protein diet can reduce the risk of stones forming by half.",
          "Rhubarb, spinach, beetroot, celery and sesame seeds are very high in oxalate. Black tea, chocolate and nuts are moderately high, and can be had in moderation rather than cut out completely.",
        ],
      },
      {
        heading: "Supplements and weight",
        paragraphs: [
          "Avoid high-dose vitamin C supplements, which can raise oxalate levels. Kidney Care UK says fruit itself is safe to eat, and fibre may help to prevent stones.",
          "BAUS also says to avoid vitamin C or D supplements, including fish-oil preparations. Losing weight if you are overweight, with more physical activity, also helps.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor before making changes to your diet.",
      "Keep a normal amount of calcium in your diet, from foods such as milk, cheese and yoghurt.",
      "Have no more than 6g of salt a day, and do not add salt at the table.",
      "Cut down on animal protein, especially meat, and on refined sugar.",
      "Have foods that are very high in oxalate, such as rhubarb and spinach, only sparingly.",
      "Avoid high-dose vitamin C supplements.",
    ],
    tryThisWeek: [
      "Take the salt off the table.",
      "Keep dairy in your diet.",
      "Cut down on meat a little.",
    ],
    ask: "Is there anything I should eat or avoid for my type of stone?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "dairy",
          situation: "You wonder whether to cut out milk and cheese.",
          options: [{ text: "Keep a normal amount of calcium", best: true }, { text: "Cut out dairy completely" }],
          why: "Cutting down on calcium can actually increase the risk of stones, by raising oxalate levels in your urine.",
        },
        {
          id: "bland",
          situation: "Your meal tastes a little bland.",
          options: [{ text: "Add herbs, spices or pepper", best: true }, { text: "Add salt at the table" }],
          why: "Do not add salt at the table; use pepper, herbs, spices or vinegar instead.",
        },
        {
          id: "vitamin-c",
          situation: "A friend suggests a high-dose vitamin C supplement.",
          options: [{ text: "Avoid high-dose vitamin C", best: true }, { text: "Take it every day" }],
          why: "Avoid high-dose vitamin C supplements, which can raise oxalate levels.",
        },
        {
          id: "rhubarb",
          situation: "You love rhubarb crumble and spinach.",
          options: [{ text: "Have them only sparingly", best: true }, { text: "Have them every day" }],
          why: "Rhubarb, spinach, beetroot, celery and sesame seeds are very high in oxalate.",
        },
      ],
    },
    sources: [NHS_KS, BAUS_DIET, KCUK_KS, NICE_NG118, BAUS_KS, NHS_SALT, BAUS_FAQ, NHS_CALCIUM],
    quiz: {
      question: "Should people with calcium stones cut out calcium?",
      options: [{ text: "No, keep a normal calcium intake", right: true }, { text: "Yes, cut it out completely" }, { text: "Yes, but only cheese" }],
      why: "Cutting down on calcium can actually increase the risk of stones, by raising oxalate levels in your urine.",
    },
  },
  {
    id: "ks-coming-back",
    kicker: "Living well",
    question: "Will my kidney stones come back?",
    hook: "Often, yes: about half of people form another within ten years. The same few habits cut that risk a lot.",
    short: "Kidney stones can come back. BAUS says that if you have had a stone, there is a 50% chance of forming another within the next 10 years. Drinking plenty, cutting salt and animal protein, and keeping a normal calcium intake lower the risk, and some people at high risk are offered medicines too.",
    sections: [
      {
        heading: "A real chance of another",
        paragraphs: [
          "Kidney stones can come back. BAUS says people who have had a stone have a greater risk of another, with a 50% chance of forming another within the next 10 years.",
          "You are more likely to keep getting stones if you eat a high-protein, low-fibre diet, are inactive or bed-bound, often have kidney or urine infections, have a close family member who gets stones, or have had stones before.",
        ],
      },
      {
        heading: "The habits that help most",
        paragraphs: [
          "Keeping your urine dilute and colourless reduces the risk of another stone by almost a third. A normal-calcium, low-salt, low-protein diet can reduce it even further.",
          "NICE advises adults to drink two and a half to three litres of water a day, add fresh lemon juice to it, avoid fizzy drinks, have no more than 6g of salt a day and keep a normal calcium intake.",
        ],
      },
      {
        heading: "Advice for your type of stone",
        paragraphs: [
          "Advice depends on what your stone is made of. For uric acid stones, cutting down on purines, found in meat, some fish, yeast extracts and beer, can help, and so can losing weight and good blood sugar control if you have diabetes.",
          "Struvite stones are usually due to urine infection, and the main aim is to clear all the stones. Cystine stones need a lot of fluid, less animal protein, and potassium citrate to make the urine more alkaline.",
        ],
      },
      {
        heading: "Medicines for high risk",
        paragraphs: [
          "Some people at high risk of more stones are offered medicines, guided by tests on their stone and urine. These include potassium citrate or sodium bicarbonate for uric acid stones, and thiazide diuretics if there is too much calcium in the urine.",
          "NICE says potassium citrate can be considered for adults whose stones keep coming back and are mostly calcium oxalate. These treatments may need to continue for a long time.",
        ],
      },
      {
        heading: "Weight, water and the unknown",
        paragraphs: [
          "It is not always possible to find out why someone forms stones. Hard water is not a cause, and a water softener or filter does not help prevent stones; tap water is best.",
          "Reduce your weight if you are overweight. Increased physical activity should be part of it, and drink plenty if you sweat a lot during exercise.",
        ],
      },
    ],
    helps: [
      "Drink enough to keep your urine dilute and colourless all day.",
      "Cut down on salt, animal protein and refined sugar.",
      "Keep a normal amount of calcium in your diet.",
      "Ask whether your stone has been analysed, so advice can fit your type of stone.",
      "Reduce your weight if you are overweight, with more physical activity.",
      "If you are at high risk, ask whether you need medicine to prevent more stones.",
    ],
    tryThisWeek: [
      "Aim for colourless pee.",
      "Cut down on salt and meat.",
      "Ask about your stone type.",
    ],
    ask: "What is my risk of another stone, and what would lower it most?",
    interactive: {
      kind: "flip-cards",
      title: "Prevention by stone type",
      intro: "Turn each card to see what helps for each kind of stone, on top of drinking plenty.",
      cards: [
        { id: "calcium-oxalate", front: "Calcium oxalate", when: "The commonest stone", back: "Keep a normal calcium intake, cut salt, have high-oxalate foods sparingly and avoid high-dose vitamin C." },
        { id: "uric-acid", front: "Uric acid", when: "Linked to animal protein", back: "Cut down on purines in meat, some fish, yeast extracts and beer. Losing weight can help." },
        { id: "calcium-phosphate", front: "Calcium phosphate", when: "Little affected by diet", back: "Follow the general advice, and avoid taking anything to make your urine alkaline." },
        { id: "struvite", front: "Struvite", when: "Usually from urine infection", back: "The main aim is to clear all the stones, with plenty of fluid and antibiotics as needed." },
        { id: "cystine", front: "Cystine", when: "An inherited condition", back: "Drink enough to make 2 to 3 litres of urine a day, cut animal protein, and take potassium citrate." },
      ],
    },
    sources: [NHS_KS, BAUS_KS, BAUS_DIET, BAUS_FAQ, NICE_NG118],
    quiz: {
      question: "After one kidney stone, what is the chance of another within 10 years?",
      options: [{ text: "About half", right: true }, { text: "Almost none" }, { text: "It is certain" }],
      why: "BAUS says people who have had a stone have a greater risk of another, with a 50% chance of forming another within the next 10 years.",
    },
  },
  {
    id: "ks-follow-up",
    kicker: "Living well",
    question: "What follow-up will I have after a kidney stone?",
    hook: "A check that the stone has gone, tests to find out why it formed, and a plan to stop the next one.",
    short: "After an attack, you will usually be seen in outpatients to check whether the stone has passed, and after any treatment to check it has cleared. Everyone who has had a stone should have blood tests, and some people have their stone analysed and their urine collected over 24 hours. If you have a stent, make sure you know when it is due to come out.",
    sections: [
      {
        heading: "Checking the stone has gone",
        paragraphs: [
          "After an attack of colic, you will usually be seen in outpatients to see whether your stone has passed. After any treatment, you will be reviewed to check you have recovered, with X-rays to see whether the stone has cleared.",
          "If a stone was found by chance, you will have further X-rays or scans to make sure it does not move or grow. If fragments are left behind, you may need further treatment or monitoring.",
        ],
      },
      {
        heading: "Finding out why",
        paragraphs: [
          "All patients who have had a kidney stone should have blood tests, to check their kidney function and that their uric acid and calcium levels are not raised. NICE says calcium in the blood should be measured for adults with stones.",
          "The National Kidney Federation says anyone with kidney stones should have some tests to find the cause, so that steps can be taken to reduce the risk of more. But it is not always possible to find out why stones form.",
        ],
      },
      {
        heading: "Stone and urine tests",
        paragraphs: [
          "If you pass a stone, or fragments after treatment, it is usually analysed to find out what it is made of. NICE says stone analysis can be considered for adults with stones.",
          "Young people and those who have had repeated stones may be asked to collect two 24-hour urine samples, to measure several chemicals in the urine. This is not needed in everyone.",
        ],
      },
      {
        heading: "If you have a stent",
        paragraphs: [
          "A stent is usually removed under local anaesthetic a week or two after ureteroscopy, unless stones remain. It is very important that you are told how long it will stay in, as a stent left in too long can become crusted with a stone-like coating.",
          "If you have not heard from your urology department about removal within four to six weeks of it being put in, let them know without delay. Get in touch with a doctor or hospital urgently if you have constant, unbearable pain, signs of infection, a dislodged stent or much more blood in your urine.",
        ],
      },
      {
        heading: "Planning to prevent more",
        paragraphs: [
          "Whatever your stone or treatment, BAUS says you will be given advice about reducing your risk of further stones, including changes to what you eat and drink.",
          "Some people also see a kidney specialist, called a nephrologist, or another specialist with expertise in stones or genetics. Children and young people may be referred to a children's kidney specialist or urologist for tests.",
        ],
      },
    ],
    helps: [
      "Go to your outpatient appointment to check whether the stone has passed or cleared.",
      "Keep any stone or fragments you pass, so they can be analysed.",
      "Ask whether you need blood tests or 24-hour urine samples.",
      "Make sure you know when your stent is due to be removed.",
      "Let your urology department know if you have not heard about stent removal within four to six weeks.",
      "Ask for advice on reducing your risk of further stones.",
    ],
    tryThisWeek: [
      "Keep your follow-up appointment.",
      "Check your stent removal date.",
      "Ask for prevention advice.",
    ],
    ask: "When is my next check, and which tests will show why my stone formed?",
    interactive: {
      kind: "timeline",
      title: "After a kidney stone",
      steps: [
        { id: "attack", when: "After an attack", title: "Outpatient check", points: ["Usually seen in outpatients.", "To see whether the stone has passed."] },
        { id: "stent", when: "A week or two after ureteroscopy", title: "Stent removal", points: ["Usually under local anaesthetic.", "Chase it if there is no news in 4 to 6 weeks."] },
        { id: "cleared", when: "After any treatment", title: "Checking it has cleared", points: ["A review of your recovery.", "X-rays to see if the stone has gone."] },
        { id: "cause", when: "Alongside follow-up", title: "Finding the cause", points: ["Blood tests for everyone who has had a stone.", "Stone analysis, and 24-hour urine if at high risk."] },
        { id: "prevent", when: "Long term", title: "Preventing more", points: ["Advice on what you eat and drink.", "Medicines for some people at high risk."] },
      ],
    },
    sources: [BAUS_KS, BAUS_DIET, NICE_NG118, BAUS_STENT, KCUK_KS, NKF_PAIN],
    quiz: {
      question: "Who should have blood tests after a kidney stone?",
      options: [{ text: "Everyone who has had a stone", right: true }, { text: "Only children" }, { text: "Nobody" }],
      why: "All patients who have had a kidney stone should have blood tests, to check their kidney function and that their uric acid and calcium levels are not raised.",
    },
  },
];
