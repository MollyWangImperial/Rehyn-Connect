import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Haemorrhoids (piles) page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (nhs.uk and
// NHS inform), with NICE's Clinical Knowledge Summary on haemorrhoids, Guts UK and Bowel Cancer UK, and three NHS
// hospital leaflets for banding and surgery. Guts UK has no page on piles, so its constipation page is used.
// General information only; it never replaces what a person's own GP, pharmacist or surgeon tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE CKS: Haemorrhoids, ${label}`, url: `https://cks.nice.org.uk/topics/haemorrhoids/${path}` });

const NHS_PILES = nhs("Piles (haemorrhoids)", "conditions/piles-haemorrhoids/");
const NHS_PREG = nhs("Piles in pregnancy", "pregnancy/common-symptoms/piles/");
const NHS_BLEED = nhs("Bleeding from the bottom (rectal bleeding)", "symptoms/bleeding-from-the-bottom-rectal-bleeding/");
const NHS_BOWEL_CA = nhs("Symptoms of bowel cancer", "conditions/bowel-cancer/symptoms/");
const NHS_CONSTIP = nhs("Constipation", "conditions/constipation/");
const NHS_FIBRE = nhs("How to get more fibre into your diet", "live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/");
const NHS_LAXATIVES = nhs("Laxatives", "medicines/laxatives/");
const HC = "medicines/hydrocortisone-for-piles-and-itchy-bottom";
const NHS_HC_ABOUT = nhs("About hydrocortisone for piles and itchy bottom", `${HC}/about-hydrocortisone-for-piles-and-itchy-bottom/`);
const NHS_HC_HOW = nhs("How and when to use hydrocortisone for piles and itchy bottom", `${HC}/how-and-when-to-use-hydrocortisone-for-piles-and-itchy-bottom/`);
const NHS_HC_SE = nhs("Side effects of hydrocortisone for piles and itchy bottom", `${HC}/side-effects-of-hydrocortisone-for-piles-and-itchy-bottom/`);
const NHS_HC_WHO = nhs("Who can and cannot use hydrocortisone for piles and itchy bottom", `${HC}/who-can-and-cannot-use-hydrocortisone-for-piles-and-itchy-bottom/`);
const NHS_HC_PREG = nhs("Pregnancy, breastfeeding and fertility while using hydrocortisone for piles", `${HC}/pregnancy-breastfeeding-and-fertility-while-using-hydrocortisone-for-piles-and-itchy-bottom/`);
const NHS_HC_FAQ = nhs("Common questions about hydrocortisone for piles and itchy bottom", `${HC}/common-questions-about-hydrocortisone-for-piles-and-itchy-bottom/`);
const NHS_POST_PREG = nhs("Your post-pregnancy body", "baby/support-and-services/your-post-pregnancy-body/");
const NHS_PREG_DIET = nhs("Have a healthy diet in pregnancy", "pregnancy/keeping-well/have-a-healthy-diet/");
const NHS_EXERCISE = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_111 = nhs("When to use NHS 111 online or call 111", "nhs-services/urgent-and-emergency-care-services/when-to-use-111/");

const INFORM: LearnSource = { label: "NHS inform: Piles (haemorrhoids)", url: "https://www.nhsinform.scot/illnesses-and-conditions/stomach-liver-and-gastrointestinal-tract/piles-haemorrhoids" };

const CKS_DEF = cks("what are haemorrhoids?", "background-information/definition/");
const CKS_PREV = cks("how common is it?", "background-information/prevalence/");
const CKS_COMP = cks("complications", "background-information/complications/");
const CKS_PROG = cks("prognosis", "background-information/prognosis/");
const CKS_PRED = cks("predisposing factors", "background-information/predisposing-factors/");
const CKS_DIAG = cks("diagnosis", "diagnosis/diagnosis/");
const CKS_MGMT = cks("management", "management/management/");

const GUTS_CONSTIP: LearnSource = { label: "Guts UK: Constipation", url: "https://gutscharity.org.uk/advice-and-information/symptoms/constipation/" };
const BCUK_SYMPTOMS: LearnSource = { label: "Bowel Cancer UK: Symptoms of bowel cancer", url: "https://www.bowelcanceruk.org.uk/about-bowel-cancer/symptoms/" };

const CUH_BANDING: LearnSource = { label: "Cambridge University Hospitals NHS: Banding of piles (haemorrhoids)", url: "https://www.cuh.nhs.uk/patient-information/banding-of-piles-haemorrhoids-information-for-patients/" };
const NTH_BANDING: LearnSource = { label: "North Tees and Hartlepool NHS: Banding of haemorrhoids (piles), discharge advice", url: "https://www.nth.nhs.uk/resources/banding-of-haemorrhoids-piles-outpatients-discharge-advice/" };
const RDUH_SURGERY: LearnSource = { label: "Royal Devon University Healthcare NHS: About removal of haemorrhoids (haemorrhoidectomy)", url: "https://www.royaldevon.nhs.uk/media/vjln4s3l/about_removal_of_haemorrhoids.pdf" };

export const pilesAnswers: LearnArticle[] = [
  {
    id: "piles-what-it-is",
    kicker: "Understanding",
    question: "What are piles?",
    hook: "Everyone has soft cushions of blood vessels in the back passage. Piles are what happens when they swell.",
    short: "Piles (haemorrhoids) are lumps inside and around your bottom (anus). They are swollen blood vessels, and they often get better on their own after a few days. Many people have them without any symptoms.",
    sections: [
      {
        heading: "Lumps in and around the bottom",
        paragraphs: [
          "Piles (haemorrhoids) are lumps inside and around your bottom (anus). They are swollen blood vessels. They often get better on their own after a few days, and there are things you can do to treat and prevent them.",
          "In many cases, piles do not cause symptoms. Some people do not realise they have them.",
        ],
      },
      {
        heading: "Cushions that swell",
        paragraphs: [
          "The back passage is normally lined with 3 areas of soft, fleshy tissue, called cushions, which are very well supplied with blood vessels. These cushions help with bowel control.",
          "In some cases, often because of problems with passing poo, the cushions get bigger over time. When they become enlarged and cause symptoms, they are called piles.",
        ],
      },
      {
        heading: "Inside or outside",
        paragraphs: [
          "Internal piles are inside the back passage, where the rectum joins the anus. They are rarely painful. Sometimes they come down the back passage, usually when you poo. This is called a prolapse.",
          "External piles are on the outside of the back passage and are covered by skin. They often cause itchiness and discomfort, and the loose skin can form irritating tags. Both types can become painful if a clot forms in the blood vessels affected.",
          "Doctors grade internal piles from 1 to 4 by how far they come out. Grade 1 piles do not come out. Grade 4 piles stay outside and cannot be pushed back in. You can have internal and external piles at the same time.",
        ],
      },
      {
        heading: "How common they are",
        paragraphs: [
          "It is hard to know exactly how many people have piles, because only a small number of people with them see a doctor. Studies in the UK suggest piles affect between 13 and 36 in every 100 people, though this may be higher than the real number.",
          "Around 1 in 10 people are thought to have piles in any one year. In one study, they were most common between the ages of 45 and 65.",
        ],
      },
    ],
    helps: [
      "Gently push a pile back inside if you can.",
      "Drink lots of fluid and eat plenty of fibre to keep your poo soft.",
      "Ask a pharmacist about creams to ease the pain, itching and swelling.",
      "See a GP if your symptoms are getting worse or there's no improvement after trying treatments at home.",
    ],
    tryThisWeek: [
      "Drink plenty and eat more fibre.",
      "Ask a pharmacist about a cream.",
      "See a GP if it is not improving.",
    ],
    ask: "Are my piles internal or external, and what grade are they?",
    interactive: {
      kind: "flip-cards",
      title: "Inside, outside and the four grades",
      intro: "Turn each card to see what it means.",
      cards: [
        { id: "internal", front: "Internal piles", when: "Inside the back passage", back: "Covered by the lining of the rectum and rarely painful. They can come down the back passage when you poo." },
        { id: "external", front: "External piles", when: "Outside the back passage", back: "Covered by skin. They often cause itchiness and discomfort, and loose skin can form tags." },
        { id: "grade-1", front: "Grade 1", when: "Internal piles", back: "They bulge into the back passage but do not come out." },
        { id: "grade-2", front: "Grade 2", when: "Internal piles", back: "They come out when you strain, then go back in on their own when you stop." },
        { id: "grade-3", front: "Grade 3", when: "Internal piles", back: "They come out and need to be pushed back in." },
        { id: "grade-4", front: "Grade 4", when: "Internal piles", back: "They stay outside and cannot be pushed back in." },
      ],
    },
    sources: [NHS_PILES, CKS_DEF, CUH_BANDING, RDUH_SURGERY, INFORM, CKS_PREV],
    quiz: {
      question: "What are piles?",
      options: [{ text: "Swollen blood vessels in and around the bottom", right: true }, { text: "A skin infection around the bottom" }, { text: "A small tear in the anus" }],
      why: "Piles (haemorrhoids) are lumps inside and around your bottom (anus). They are swollen blood vessels.",
    },
  },
  {
    id: "piles-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of piles?",
    hook: "Bright red blood on the paper, an itch, a lump, or the feeling you have not quite finished. Or nothing at all.",
    short: "Symptoms of piles include bright red blood after you poo, an itchy bottom, lumps or pain around the anus, mucus, and feeling like you still need to poo. Internal piles are rarely painful, but a pile can hurt if a clot forms in it.",
    sections: [
      {
        heading: "The common signs",
        paragraphs: [
          "Symptoms of piles include bright red blood after you poo, an itchy anus, and feeling like you still need to poo after going to the toilet. You may also notice mucus in your underwear or on toilet paper after wiping, lumps around your anus, or pain around your anus.",
          "Some people also have aching, soreness or swelling around the anus, or pain when passing a poo.",
        ],
      },
      {
        heading: "What the bleeding looks like",
        paragraphs: [
          "Bright red bleeding when you poo is the most common symptom of piles. It is usually seen as streaks on the toilet paper, in the toilet bowl, or on the outside of the poo, rather than mixed in with it.",
          "The NHS advises asking for an urgent GP appointment or getting help from NHS 111 if you have piles and painless bleeding from the bottom.",
        ],
      },
      {
        heading: "Lumps and mucus",
        paragraphs: [
          "Piles can be small lumps, around the size of a pea. They can be pink or purple, and they can grow into larger lumps, the size of grapes.",
          "Internal piles sometimes come down the back passage, usually when you poo, and some stay outside all the time. Piles that have come down can leak mucus, which can feel wet in your underwear.",
        ],
      },
      {
        heading: "When piles hurt",
        paragraphs: [
          "Internal piles are rarely painful. Both types of pile can become painful if a clot forms in the blood vessels affected.",
          "The pain of a pile with a clot in it usually peaks 48 to 72 hours after it starts, and settles on its own in 7 to 14 days.",
          "Go to A&E or call 999 if you have piles and you are in severe pain.",
        ],
      },
      {
        heading: "Telling the GP everything",
        paragraphs: [
          "Some people with piles are reluctant to see their GP, but there's no need to be embarrassed. All GPs are used to diagnosing and treating piles.",
          "It's important to tell your GP about all of your symptoms. Tell them if you've recently lost a lot of weight, if your bowel movements have changed, or if your poo has become dark or sticky.",
        ],
      },
    ],
    helps: [
      "Take paracetamol if piles hurt.",
      "Use an ice pack wrapped in a towel to ease discomfort.",
      "Take a warm bath to ease itching and pain.",
      "Keep your bottom clean and dry: pat, rather than rub, it dry.",
      "Tell your GP if you've lost a lot of weight, your bowel movements have changed, or your poo has become dark or sticky.",
    ],
    tryThisWeek: [
      "Paracetamol if piles hurt.",
      "A warm bath for itching.",
      "Pat dry rather than rub.",
    ],
    ask: "Are these symptoms from piles, or could something else be causing them?",
    interactive: {
      kind: "signs",
      title: "What have you noticed?",
      intro: "Tick the symptoms you have had. They become a list to take to a pharmacist or GP.",
      signs: [
        "Bright red blood after a poo",
        "An itchy bottom",
        "Feeling I still need to poo afterwards",
        "Mucus in underwear or on toilet paper",
        "Lumps around the anus",
        "Pain around the anus",
        "A lump that comes out when I poo",
        "Weight loss I cannot explain",
        "A change in my bowel movements",
        "Poo that has become dark or sticky",
      ],
      after: "Tell your GP about all of your symptoms. Go to A&E or call 999 if you are bleeding non-stop, there is a lot of blood, or you are in severe pain.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_PILES, INFORM, CKS_DIAG, RDUH_SURGERY, NHS_PREG, CKS_MGMT],
    quiz: {
      question: "What colour is the blood from piles usually?",
      options: [{ text: "Bright red", right: true }, { text: "Black" }, { text: "Dark brown" }],
      why: "Bright red bleeding when you poo is the most common symptom of piles.",
    },
  },
  {
    id: "piles-causes",
    kicker: "Causes",
    question: "Why do piles happen?",
    hook: "Pressure. Straining, constipation, heavy lifting and pregnancy all push down on the cushions in the back passage.",
    short: "It's not clear exactly what causes piles, but some things make them more likely: constipation, pushing too hard when pooing, heavy lifting, pregnancy, getting older and being overweight. They all add pressure to the blood vessels in the back passage.",
    sections: [
      {
        heading: "Not fully understood",
        paragraphs: [
          "Piles are swollen blood vessels, and it's not clear exactly what causes them. But some things make them more likely: constipation, pushing too hard when pooing, heavy lifting, pregnancy, getting older and being overweight.",
        ],
      },
      {
        heading: "Pressure on the cushions",
        paragraphs: [
          "Constipation, straining, heavy lifting, a long-lasting cough, and pregnancy and childbirth are all thought to play a part. They raise the pressure in the blood vessels of the back passage, so the cushions swell and their support becomes looser.",
          "Sitting on the toilet adds to this. When you sit down, the weight of the body pushes down into the pelvis, which makes the lining of the back passage swell.",
        ],
      },
      {
        heading: "The link with constipation",
        paragraphs: [
          "Constipation is very common. Guts UK says it affects around 1 in 7 otherwise healthy people, and that bleeding from piles is common in people with constipation.",
          "The most common causes of constipation include not eating enough fibre, not drinking enough fluids, not moving enough, and often ignoring the urge to go to the toilet. A change of diet or routine, a side effect of medicine, and stress, anxiety or depression can also play a part.",
        ],
      },
      {
        heading: "Other things that play a part",
        paragraphs: [
          "As people get older, the tissues that hold the cushions in place weaken, so piles are more likely to come out. Piles may also run in families, and a diet low in fibre can contribute.",
          "Painkillers that contain codeine can cause constipation, so the NHS advises not taking them for piles.",
        ],
      },
    ],
    helps: [
      "Drink lots of fluid and eat plenty of fibre to keep your poo soft.",
      "Do not push too hard when pooing.",
      "Do not spend more time than you need to on the toilet.",
      "Do not ignore the urge to poo.",
      "Cut down on alcohol and caffeine, like tea, coffee and cola, to avoid constipation.",
      "If you think a medicine is causing constipation, talk to your doctor; do not stop taking a medicine without medical advice.",
    ],
    tryThisWeek: [
      "More fibre and fluids.",
      "No pushing too hard.",
      "Go when you feel the urge.",
    ],
    ask: "Could anything I take or do be making my piles more likely?",
    interactive: {
      kind: "risk-check",
      title: "What makes piles more likely?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "constipation", label: "Constipation", note: "Fibre and fluids keep poo soft, and a pharmacist can suggest laxatives to help.", changeable: true },
        { id: "straining", label: "Pushing hard when pooing", note: "Straining raises the pressure on the cushions. Try not to push too hard.", changeable: true },
        { id: "sitting", label: "Long spells on the toilet", note: "Sitting pushes down into the pelvis and makes the lining swell. Do not stay longer than you need to.", changeable: true },
        { id: "lifting", label: "Heavy lifting", note: "Heavy lifting is one of the things that make piles more likely.", changeable: true },
        { id: "weight", label: "Being overweight", note: "Being overweight is one of several things that make piles more likely.", changeable: true },
        { id: "pregnancy", label: "Pregnancy", note: "Constipation is common during pregnancy and after giving birth, and it can cause piles.", changeable: false },
        { id: "age", label: "Getting older", note: "The tissues that hold the cushions in place weaken with age.", changeable: false },
        { id: "family", label: "Piles in the family", note: "Piles may run in families.", changeable: false },
      ],
    },
    sources: [NHS_PILES, INFORM, CKS_PRED, CUH_BANDING, NHS_CONSTIP, GUTS_CONSTIP],
    quiz: {
      question: "Which of these makes piles more likely?",
      options: [{ text: "Constipation", right: true }, { text: "Drinking plenty of water" }, { text: "Eating more fibre" }],
      why: "Some things make them more likely: constipation, pushing too hard when pooing, heavy lifting, pregnancy, getting older and being overweight.",
    },
  },
  {
    id: "piles-checks",
    kicker: "Checks",
    question: "Why should bleeding from the bottom be checked?",
    hook: "Piles are a common reason for bleeding. They are not the only one, and only a check can tell them apart.",
    short: "A small amount of one-off bleeding from the bottom is not usually serious, but a GP can check. Bleeding is sometimes a sign of bowel cancer, which is easier to treat if it's found early. See a GP if you have had blood in your poo for 3 weeks.",
    sections: [
      {
        heading: "Many possible causes",
        paragraphs: [
          "A small amount of one-off bleeding from the bottom is not usually a serious problem, and it can often go away on its own. But a GP can check.",
          "Bright red blood may come from piles, or from non-cancerous growths called polyps. It can also come from a small tear in the anus (an anal fissure), from sexually transmitted infections, or as a side effect of medicines that help prevent blood clots. Dark red or black blood may come from the bowel or stomach.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Bleeding from the bottom is sometimes a sign of bowel cancer. This is easier to treat if it's found early, so it's important to get it checked.",
          "Other symptoms of bowel cancer include changes in your poo, needing to poo more or less often than usual, tummy pain or a lump, bloating, losing weight without trying, and feeling very tired or short of breath. Having these symptoms does not definitely mean you have bowel cancer.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if you've had blood in your poo for 3 weeks, or your poo has been softer, thinner or longer than normal for 3 weeks. See a GP too if you're in a lot of pain around the bottom, you have a pain or lump in your tummy, you've been more tired than usual, or you've lost weight for no reason.",
          "With piles, see a GP if your symptoms are getting worse or not improving after home treatments, if you keep getting piles, or if you notice a change around your anus that is not normal for you.",
          "Ask for an urgent GP appointment or get help from NHS 111 if your poo is black or dark red, or you have bloody diarrhoea.",
        ],
      },
      {
        heading: "What happens at the GP",
        paragraphs: [
          "The GP will ask about your symptoms, and may check your bottom with a gloved finger. This is called a rectal examination. You can ask for a male or female doctor or nurse, and for someone else to be in the room with you.",
          "You may be asked for a poo sample, or given a home test kit called a FIT test, which checks for blood in your poo. The GP may also refer you to a specialist for tests.",
          "Finding piles does not rule out another cause, so a doctor may still suggest more tests. Try not to be embarrassed: GPs are used to diagnosing and treating piles.",
        ],
      },
    ],
    helps: [
      "See a GP if you've had blood in your poo for 3 weeks.",
      "Ask for an urgent GP appointment or get help from NHS 111 if your poo is black or dark red, or you have bloody diarrhoea.",
      "Keep a note of your symptoms to help explain them at your GP appointment.",
      "You can ask for a male or female doctor or nurse, and for someone else to be in the room.",
      "Try not to be embarrassed: all GPs are used to diagnosing and treating piles.",
    ],
    tryThisWeek: [
      "Note when you see blood.",
      "Book a GP check if it lasts.",
      "Ask for a chaperone if you like.",
    ],
    ask: "Is this bleeding from piles, or should it be checked further?",
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        { id: "one-off", situation: "One small streak of bright red blood on the paper, and you feel well.", options: [{ text: "It is not usually serious, but a GP can check", best: true }, { text: "Go straight to A&E" }, { text: "Ignore any bleeding for months" }], why: "A small amount of one-off bleeding from the bottom is not usually a serious problem. But a GP can check." },
        { id: "three-weeks", situation: "There has been blood in your poo, on and off, for 3 weeks.", options: [{ text: "See a GP", best: true }, { text: "Wait another few months" }, { text: "Just buy a stronger cream" }], why: "See a GP if you've had blood in your poo for 3 weeks." },
        { id: "black", situation: "Your poo has turned black or dark red.", options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait for a routine check-up" }, { text: "Take ibuprofen and wait" }], why: "Ask for an urgent GP appointment or get help from NHS 111 if your poo is black or dark red." },
        { id: "non-stop", situation: "You are bleeding non-stop and see large blood clots.", options: [{ text: "Go to A&E or call 999", best: true }, { text: "Book a routine GP appointment" }, { text: "Drive yourself to hospital" }], why: "Go to A&E or call 999 if you're bleeding non-stop or see large clots. Do not drive to A&E." },
      ],
    },
    sources: [NHS_BLEED, NHS_BOWEL_CA, BCUK_SYMPTOMS, INFORM, CKS_DIAG, NHS_PILES],
    quiz: {
      question: "Why is bleeding from the bottom worth getting checked?",
      options: [{ text: "It is sometimes a sign of bowel cancer, which is easier to treat early", right: true }, { text: "Because piles always need an operation" }, { text: "Because bleeding always means cancer" }],
      why: "Bleeding from the bottom is sometimes a sign of bowel cancer. This is easier to treat if it's found early, so it's important to get it checked.",
    },
  },
  {
    id: "piles-self-help",
    kicker: "Self-help",
    question: "How do fibre, fluids and not straining help piles?",
    hook: "Soft poo is the aim. Most piles settle with what you eat, what you drink and how you go to the toilet.",
    short: "The main aim is to keep your poo soft and easy to pass. Drink lots of fluid, eat plenty of fibre and do not push too hard when pooing. Paracetamol, an ice pack and a warm bath can ease the symptoms meanwhile.",
    sections: [
      {
        heading: "Soft poo is the aim",
        paragraphs: [
          "Most piles can be managed with simple changes. Passing hard poo puts more strain on the cushions in the back passage, so the aim is to keep your poo soft and easy to pass.",
          "Drink lots of fluid and eat plenty of fibre to keep your poo soft. Cutting down on alcohol and caffeine, like tea, coffee and cola, can help avoid constipation.",
        ],
      },
      {
        heading: "More fibre, slowly",
        paragraphs: [
          "Government guidelines say adults should have 30g of fibre a day, but most adults eat an average of only about 20g. Wholemeal or granary bread, porridge, wholewheat pasta, brown rice, potatoes with their skins on, beans, lentils, vegetables and fruit all add fibre.",
          "Add fibre gradually, as eating more of it can cause wind and bloating at first. Fibre is most helpful for people with mild constipation.",
        ],
      },
      {
        heading: "Plenty to drink",
        paragraphs: [
          "Drinking enough is particularly important when you eat more fibre, to keep your poo soft. For the average adult, Guts UK says 8 mugs or tall glasses of fluid a day is a normal amount.",
          "Keeping active can help too. A daily walk or run can help you poo more regularly.",
        ],
      },
      {
        heading: "Easing the symptoms",
        paragraphs: [
          "Take paracetamol if piles hurt. Do not take painkillers that contain codeine, as they can cause constipation, and do not take ibuprofen if your piles are bleeding.",
          "An ice pack wrapped in a towel can ease discomfort, and a warm bath can ease itching and pain. Keep your bottom clean and dry, and pat it dry rather than rub. If you can, gently push a pile back inside.",
          "Skin moisturisers can also help relieve the pain and itching of piles. Ask your pharmacist what they recommend.",
        ],
      },
    ],
    helps: [
      "Drink lots of fluid and eat plenty of fibre to keep your poo soft.",
      "Add fibre gradually, to avoid wind and bloating.",
      "Take paracetamol if piles hurt; avoid codeine, and do not take ibuprofen if your piles are bleeding.",
      "Use an ice pack wrapped in a towel to ease discomfort.",
      "Take a warm bath to ease itching and pain.",
      "Keep your bottom clean and dry, and pat rather than rub it dry.",
    ],
    tryThisWeek: [
      "Add fibre, a little at a time.",
      "Drink more through the day.",
      "Try an ice pack or warm bath.",
    ],
    ask: "Is there anything else I could change to keep my poo soft?",
    interactive: {
      kind: "scenarios",
      title: "Everyday choices",
      scenarios: [
        { id: "painkiller", situation: "Your piles are sore and you want a painkiller.", options: [{ text: "Paracetamol", best: true }, { text: "A painkiller with codeine" }, { text: "Ibuprofen, though they are bleeding" }], why: "Take paracetamol if piles hurt. Codeine can cause constipation, and ibuprofen is not advised if your piles are bleeding." },
        { id: "bloated", situation: "You've started eating more fibre and feel bloated.", options: [{ text: "Add it gradually and drink plenty", best: true }, { text: "Stop eating fibre altogether" }, { text: "Drink less to ease the bloating" }], why: "Add fibre gradually, as it can cause wind and bloating at first. Drinking enough matters more when you eat more fibre." },
        { id: "itchy", situation: "Your bottom is itchy and sore after a poo.", options: [{ text: "A warm bath, then pat dry", best: true }, { text: "Rub it dry firmly" }], why: "A warm bath can ease itching and pain. Pat your bottom dry rather than rub." },
      ],
    },
    sources: [NHS_PILES, NHS_FIBRE, CKS_MGMT, GUTS_CONSTIP, NHS_CONSTIP, NHS_HC_FAQ],
    quiz: {
      question: "Which painkiller does the NHS suggest if piles hurt?",
      options: [{ text: "Paracetamol", right: true }, { text: "A painkiller with codeine" }, { text: "Ibuprofen when piles are bleeding" }],
      why: "Take paracetamol if piles hurt. Do not take painkillers that contain codeine, as they can cause constipation, and do not take ibuprofen if your piles are bleeding.",
    },
  },
  {
    id: "piles-pharmacy",
    kicker: "Pharmacy",
    question: "What can a pharmacist give me for piles?",
    hook: "Creams, sprays, suppositories and laxatives, from a counter with a private room if you want one.",
    short: "A pharmacist can suggest creams to ease the pain, itching and swelling, laxatives to soften poo, and cold packs. Creams with hydrocortisone help the symptoms but do not cure piles, and should not be used for more than 7 days.",
    sections: [
      {
        heading: "What a pharmacist can suggest",
        paragraphs: [
          "A pharmacist can suggest creams to ease the pain, itching and swelling of piles, treatments such as laxatives to help constipation and soften poo, and cold packs to ease discomfort.",
          "Many pharmacies have private areas if you do not want to be overheard.",
        ],
      },
      {
        heading: "Creams, sprays and suppositories",
        paragraphs: [
          "Some piles treatments contain hydrocortisone, a steroid medicine that reduces swelling and helps relieve pain and itching. They do not cure piles, but they can help with the symptoms. Some also contain a local anaesthetic.",
          "Creams, ointments and sprays are used on the skin around the anus, for piles on the outside. Suppositories are put inside the anus, for piles on the inside. Other treatments without hydrocortisone include creams and suppositories with zinc oxide or other soothing ingredients.",
          "You'll usually use them first thing in the morning, last thing at night and after you've done a poo. The pain and itching should get better within a few days.",
        ],
      },
      {
        heading: "Using them safely",
        paragraphs: [
          "Do not use hydrocortisone treatments for longer than 7 days. The local anaesthetic in them can make your skin sensitive, and long-term use can make the skin thinner.",
          "You may feel a slight increase in burning when you first apply the treatment, but this only lasts a few minutes. If you have an infection around your bottom, hydrocortisone can make it worse.",
          "Tell the pharmacist if you've ever had an allergic reaction to hydrocortisone or a local anaesthetic, if you have a skin infection, or if you take a medicine such as codeine that might be making you constipated.",
        ],
      },
      {
        heading: "Laxatives",
        paragraphs: [
          "Laxatives are medicines that help you poo. If you're buying them without a prescription, it's usually best to try a bulk-forming laxative first. These increase the fibre in poo to make it bigger and softer, and take up to 3 days to work.",
          "Drink plenty of fluids with bulk-forming and osmotic laxatives. Stop taking laxatives you bought when your constipation improves, and do not take them for longer than 7 days. If they have not helped after 3 days, speak to a doctor or pharmacist.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "Make an appointment to see your doctor if your symptoms have not got better after 7 days of treatment, or come back quickly. The GP may prescribe stronger medicines for piles or constipation, and check your symptoms are not being caused by something else.",
        ],
      },
    ],
    helps: [
      "Ask a pharmacist about creams, laxatives or cold packs; many pharmacies have private areas.",
      "Use hydrocortisone treatments for no longer than 7 days.",
      "Wash your hands before and after using a cream, spray or suppository.",
      "Try a bulk-forming laxative first, and drink plenty of fluids with it.",
      "See your doctor if your symptoms have not got better after 7 days.",
    ],
    tryThisWeek: [
      "Ask a pharmacist what suits you.",
      "Use creams for 7 days at most.",
      "Drink plenty with a laxative.",
    ],
    ask: "Which cream or treatment would suit me?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments, card by card",
      intro: "Turn each card to see what it is for and how it is used.",
      cards: [
        { id: "cream", front: "Cream or ointment", when: "Piles on the outside", back: "Put a small amount around the outside of the anus with your finger. Wash your hands before and afterwards." },
        { id: "spray", front: "Spray", when: "Outside piles or itchy bottom", back: "Separate your buttocks and spray the area once. Wash your hands before and after." },
        { id: "suppository", front: "Suppository", when: "Piles on the inside", back: "Pushed gently into the anus, pointed end first, about 2cm to 3cm. Sit or lie still for about 15 minutes." },
        { id: "bulk", front: "Bulk-forming laxative", when: "Usually the one to try first", back: "Increases the fibre in poo to make it bigger and softer. Takes up to 3 days to work." },
        { id: "osmotic", front: "Osmotic laxative", when: "Another type a pharmacist may suggest", back: "Brings more water into the bowel so poo is softer and easier to push out. Takes 2 to 3 days to work." },
        { id: "cold", front: "Cold pack", when: "To ease discomfort", back: "A pharmacist can suggest cold packs. An ice pack wrapped in a towel can help too." },
      ],
    },
    sources: [NHS_PILES, INFORM, NHS_HC_ABOUT, NHS_HC_HOW, NHS_HC_SE, NHS_HC_WHO, NHS_HC_FAQ, NHS_LAXATIVES],
    quiz: {
      question: "How long can hydrocortisone treatments for piles be used?",
      options: [{ text: "No longer than 7 days", right: true }, { text: "Up to 3 months" }, { text: "For as long as you like" }],
      why: "Do not use hydrocortisone treatments for longer than 7 days. The local anaesthetic in them can make your skin sensitive, and long-term use can make the skin thinner.",
    },
  },
  {
    id: "piles-treatments",
    kicker: "Treatment",
    question: "What are banding and the other hospital treatments?",
    hook: "A tiny rubber band, a few minutes, and the pile shrivels over the following weeks. You go home the same day.",
    short: "If piles do not improve with home treatment, your GP may refer you to hospital. Treatments such as banding, injections, electrotherapy and infrared light are done while you're awake, and you should be able to go home the same day.",
    sections: [
      {
        heading: "When hospital treatment is offered",
        paragraphs: [
          "If there is no improvement to your piles after home treatments, your GP may refer you for hospital treatment. Talk to your doctor about the best treatment for you.",
          "Treatment does not always prevent piles coming back.",
        ],
      },
      {
        heading: "Treatments without surgery",
        paragraphs: [
          "Common hospital treatments include rubber band ligation, where a band is placed around piles to make them drop off, and sclerotherapy, where a liquid is injected into piles to make them shrink.",
          "Electrotherapy uses a gentle electric current, and infrared coagulation uses infrared light to cut the blood supply, both to make piles shrink. You'll be awake for these treatments, but the area may be numbed, and you should be able to go home on the same day.",
        ],
      },
      {
        heading: "How banding works",
        paragraphs: [
          "Banding is done as an outpatient treatment and only takes a few minutes. Using a short telescope, tiny rubber bands are placed inside the back passage above the piles. This cuts off their blood supply, and over the next few weeks the piles shrivel up.",
          "Up to 3 piles can be banded at one visit. Banding is currently the best available outpatient treatment for piles.",
        ],
      },
      {
        heading: "After banding",
        paragraphs: [
          "Straight afterwards you may feel you need to poo. This is normal, and it fades to a mild ache lasting a couple of days. You may feel a little lightheaded, so sit quietly for 20 to 30 minutes before driving or catching public transport.",
          "You may have some discomfort for 1 to 7 days. A warm bath and painkillers such as paracetamol can help, but avoid painkillers containing codeine, as they can cause constipation. You can usually return to work and your normal activities straight away, or as soon as you feel well enough.",
          "After 7 to 10 days the tissue in the band falls away, and you may get some dark red bleeding. This is normal. You may also notice some of the bands in your poo.",
        ],
      },
      {
        heading: "If symptoms remain",
        paragraphs: [
          "Sometimes symptoms remain and banding needs repeating, or a different procedure is needed. About 2 in 10 people need a second banding within 6 months.",
          "Very rarely, there can be very large amounts of bright red bleeding after 7 to 10 days, and you may need to be seen by your GP or at the hospital's Emergency Department. This may be more common if you take a medicine to thin your blood, so your surgeon may recommend stopping it before banding.",
        ],
      },
    ],
    helps: [
      "Sit quietly for 20 to 30 minutes after banding before driving or catching public transport.",
      "Take paracetamol for discomfort, and avoid painkillers containing codeine.",
      "Keep the area clean by bathing once or twice a day and washing after a poo, without adding bath foam or oils.",
      "Eat high-fibre foods and drink plenty, so you do not become constipated and need to strain.",
      "Contact your GP if you have increased pain, bleeding or discharge from your back passage, difficulty passing urine, or swelling.",
      "Tell your surgeon if you take a medicine to thin your blood.",
    ],
    tryThisWeek: [
      "Rest 20 to 30 minutes after banding.",
      "Paracetamol, not codeine.",
      "Wash gently after each poo.",
    ],
    ask: "Would banding help my piles?",
    interactive: {
      kind: "timeline",
      title: "After banding, step by step",
      steps: [
        { id: "straight-after", when: "Straight after", title: "A need to poo, then an ache", points: ["Feeling you need to poo is normal.", "It fades to a mild ache lasting a couple of days.", "Sit quietly for 20 to 30 minutes before travelling."] },
        { id: "first-week", when: "Days 1 to 7", title: "Some discomfort", points: ["A warm bath and paracetamol can help.", "Avoid painkillers containing codeine.", "Your first poo is usually about 2 days after banding."] },
        { id: "falls-away", when: "Days 7 to 10", title: "The tissue falls away", points: ["You may get some dark red bleeding. This is normal.", "You may notice some of the bands in your poo."] },
        { id: "weeks", when: "The weeks after", title: "The piles shrivel", points: ["Over the next few weeks the piles shrivel up.", "Some people need banding again, or a different procedure."] },
      ],
    },
    sources: [NHS_PILES, INFORM, CKS_MGMT, CUH_BANDING, NTH_BANDING],
    quiz: {
      question: "When does the banded tissue usually fall away?",
      options: [{ text: "After 7 to 10 days", right: true }, { text: "Straight away" }, { text: "After 6 months" }],
      why: "After 7 to 10 days the tissue in the band falls away, and you may get some dark red bleeding. This is normal.",
    },
  },
  {
    id: "piles-surgery",
    kicker: "Surgery",
    question: "When is surgery needed for piles?",
    hook: "Only about 1 in 10 people with piles need an operation. For them, it gives the best long-term result.",
    short: "If treatments such as banding do not work, or piles are large, surgery may be needed to remove them. You will usually be asleep, and may go home the same day or the next. You should be able to return to work within 1 to 2 weeks.",
    sections: [
      {
        heading: "When surgery is considered",
        paragraphs: [
          "If treatments such as banding do not work, or your piles are large, you may need surgery to remove them. About 1 in 10 people with piles need surgery to ease their symptoms.",
          "If a surgeon recommends an operation, it is likely you have already tried other treatments, or that they would not work for you.",
        ],
      },
      {
        heading: "The main operations",
        paragraphs: [
          "In a haemorrhoidectomy, the piles are cut out. In a stapled haemorrhoidopexy, the piles are stapled back inside the anus. In haemorrhoidal artery ligation, stitches cut the blood supply to the piles to make them shrink.",
          "You will usually be asleep for these operations. You may be able to go home on the same day or the following day. When you go home depends on how fit you are, who is at home with you and how comfortable you are.",
        ],
      },
      {
        heading: "Recovering at home",
        paragraphs: [
          "There will be some pain, usually treated with simple painkillers. By about a week or two, the wound should be virtually pain free. The first time you poo may be a bit painful, but this improves quickly.",
          "The wound is usually a bit moist for a week or two, with some yellow discharge or dark blood, so a small pad can help. Any threads tied around the piles drop off within 4 to 5 days, which can bring some bleeding. Wash with soap and water, and dab the area dry with a soft towel.",
          "Avoid becoming constipated: eat fibre, fruit and vegetables, drink plenty, and take the laxative you are given. You can drive once you can do an emergency stop safely, usually within 4 to 5 days. You should be able to return to work within 1 to 2 weeks, and can have sex again once it is comfortable.",
        ],
      },
      {
        heading: "Risks to know about",
        paragraphs: [
          "Complications are rare and seldom serious. They include pain that lasts, narrowing of the anus from scar tissue, bleeding if the area is slow to heal, and a wound that does not heal fully.",
          "Some people have difficulty peeing after the operation, or bleeding about 7 to 10 days later. Other possible problems include infection and difficulty controlling the bowels.",
        ],
      },
      {
        heading: "Keeping them away",
        paragraphs: [
          "Removing piles gives the best long-term result, with symptoms coming back in fewer than 20 in 100 people. The chance of piles coming back is higher with constipation and straining.",
          "Do not sit on the toilet for long periods, and do not strain to open your bowels.",
        ],
      },
    ],
    helps: [
      "Take the laxative you are given, eat fibre and drink plenty to avoid constipation.",
      "Dab the area dry with a soft towel rather than rubbing.",
      "Wear a small pad while the wound is still oozing.",
      "Only drive once you can do an emergency stop safely.",
      "Contact your GP if you have persistent pain, bleeding or symptoms you were not expecting.",
    ],
    tryThisWeek: [
      "Take the laxative you are given.",
      "Dab dry; do not rub.",
      "Drive only when you can brake hard.",
    ],
    ask: "Which operation would suit me, and what will recovery be like?",
    interactive: {
      kind: "timeline",
      title: "Recovery after a haemorrhoidectomy",
      steps: [
        { id: "day", when: "The day of the operation", title: "Asleep, then home", points: ["You will usually be asleep for the operation.", "You may go home the same day or the following day."] },
        { id: "first-day", when: "The first day", title: "Some blood staining", points: ["There will be some staining with blood in the first 12 hours.", "A dressing, if you have one, usually comes off by itself the next day."] },
        { id: "days-4-5", when: "Days 4 to 5", title: "Threads drop off", points: ["Threads drop off by themselves, with some bleeding.", "You can drive once you can do an emergency stop safely."] },
        { id: "weeks-1-2", when: "Weeks 1 to 2", title: "Nearly pain free", points: ["The wound should be virtually pain free.", "You should be able to return to work."] },
      ],
    },
    sources: [NHS_PILES, INFORM, CKS_MGMT, CKS_PROG, RDUH_SURGERY],
    quiz: {
      question: "When can you usually drive after a haemorrhoidectomy?",
      options: [{ text: "Once you can do an emergency stop safely", right: true }, { text: "The same evening" }, { text: "Only after 3 months" }],
      why: "You can drive once you can do an emergency stop safely, usually within 4 to 5 days.",
    },
  },
  {
    id: "piles-toilet",
    kicker: "Living well",
    question: "Which toilet habits help with piles?",
    hook: "Go when you need to, leave when you are done, and do not push. Small habits take pressure off the cushions.",
    short: "Do not ignore the urge to poo, do not push too hard and do not spend longer on the toilet than you need to. Resting your feet on a low stool can make it easier to go, and patting rather than rubbing helps the skin.",
    sections: [
      {
        heading: "Go when you need to",
        paragraphs: [
          "Do not ignore the urge to poo. Ignoring it can change how the bowel muscles work and the pattern of going, and holding on can make piles worse.",
          "Keep to a regular time and place, and give yourself plenty of time to use the toilet. There is no need to go every day: in healthy people, it can vary from 3 times a day to 3 times a week.",
        ],
      },
      {
        heading: "Keep it short",
        paragraphs: [
          "When you sit on the toilet, the weight of your body pushes down into the pelvis and makes the lining of the back passage swell. So do not spend more time than you need to on the toilet.",
          "Hospital leaflets suggest keeping visits short. One suggests aiming for around 5 minutes, and another less than 3 minutes.",
        ],
      },
      {
        heading: "No straining",
        paragraphs: [
          "Do not push too hard when pooing. Do not try to have a bowel movement unless you feel the need, and do not try too hard to push out every last bit.",
          "To make it easier to poo, try resting your feet on a low stool, with your knees above your hips if possible.",
        ],
      },
      {
        heading: "Clean and dry",
        paragraphs: [
          "Keep your bottom clean and dry, and pat it dry rather than rub. The NHS pregnancy pages suggest cleaning with moist toilet paper instead of dry toilet paper after a poo.",
        ],
      },
    ],
    helps: [
      "Do not ignore the urge to poo.",
      "Keep to a regular time and place, and give yourself plenty of time.",
      "Do not spend more time than you need to on the toilet.",
      "Do not push too hard when pooing.",
      "Rest your feet on a low stool, with your knees above your hips if possible.",
      "Pat your bottom dry rather than rubbing it.",
    ],
    tryThisWeek: [
      "Go as soon as you feel the urge.",
      "Keep toilet visits short.",
      "Try a low stool under your feet.",
    ],
    ask: "Is there anything about my toilet habits that could be making piles worse?",
    interactive: {
      kind: "scenarios",
      title: "On the toilet",
      scenarios: [
        { id: "busy", situation: "You feel the urge to poo, but you're busy.", options: [{ text: "Go now", best: true }, { text: "Hold on until later" }], why: "Do not ignore the urge to poo. Holding on can make piles worse." },
        { id: "nothing", situation: "Nothing has happened after a few minutes on the toilet.", options: [{ text: "Get up and go back when you feel the need", best: true }, { text: "Push harder to get it out" }, { text: "Stay and read until it comes" }], why: "Do not try to have a bowel movement unless you feel the need, and do not spend more time than you need to on the toilet." },
        { id: "hard-work", situation: "Pooing feels like hard work.", options: [{ text: "Rest your feet on a low stool", best: true }, { text: "Hold your breath and push hard" }], why: "Resting your feet on a low stool, with your knees above your hips if possible, can make it easier to poo." },
      ],
    },
    sources: [NHS_PILES, NHS_CONSTIP, CUH_BANDING, RDUH_SURGERY, GUTS_CONSTIP, CKS_MGMT, NHS_PREG],
    quiz: {
      question: "Why does sitting on the toilet for a long time matter?",
      options: [{ text: "Sitting makes the lining of the back passage swell", right: true }, { text: "It helps piles shrink" }, { text: "It makes no difference" }],
      why: "When you sit on the toilet, the weight of your body pushes down into the pelvis and makes the lining of the back passage swell.",
    },
  },
  {
    id: "piles-pregnancy",
    kicker: "Pregnancy",
    question: "What helps with piles in pregnancy?",
    hook: "Common, uncomfortable and treatable. Fibre, water, movement and a cold cloth come first; creams after a check.",
    short: "Piles are common in pregnancy, partly because constipation is common during pregnancy and after giving birth. Fibre, water and regular exercise help, and a cold cloth can ease pain. Check with your doctor, midwife or pharmacist before using any cream or medicine.",
    sections: [
      {
        heading: "Common in pregnancy",
        paragraphs: [
          "Piles are swellings containing enlarged blood vessels inside or around your bottom. Anyone can get piles, but pregnancy makes them more likely.",
          "Constipation is common during pregnancy and after giving birth, and it can cause piles. Pregnancy and childbirth also raise the pressure inside the tummy, which is thought to play a part.",
        ],
      },
      {
        heading: "Symptoms",
        paragraphs: [
          "Symptoms can include itching, aching, soreness or swelling around the anus, pain when passing a poo and a mucus discharge afterwards, a lump hanging outside the anus, and bleeding after a poo. The blood is usually bright red.",
        ],
      },
      {
        heading: "Easing them",
        paragraphs: [
          "Try to keep your poo soft and regular by eating plenty of food that's high in fibre, such as wholemeal bread, fruit and vegetables, and by drinking plenty of water. Simple changes to diet and lifestyle are safe to try when you're pregnant.",
          "Avoid standing or sitting for long periods, take regular exercise, and avoid straining when you poo. A cloth wrung out in iced water, held gently against the piles, can ease the pain. After a poo, clean with moist toilet paper and pat rather than rub.",
        ],
      },
      {
        heading: "Creams and medicines",
        paragraphs: [
          "There are medicines that can soothe the inflammation around your anus. They treat the symptoms, but not the cause. Ask your doctor, midwife or pharmacist to suggest a suitable treatment, and do not use a cream or medicine without checking with them first.",
          "The NHS says hydrocortisone treatments for piles can be used in pregnancy, as only a small amount gets into your blood. They can be used while breastfeeding too, for a short time, washing your hands before picking up your baby.",
        ],
      },
      {
        heading: "After the birth",
        paragraphs: [
          "After having a baby, avoid straining on the toilet and heavy lifting. If a physical problem is bothering you, ask a GP or health visitor for help at any time.",
          "Your postnatal check, around 6 to 8 weeks after the birth, is a good time to talk to the GP about any physical problems you've had since the birth.",
        ],
      },
    ],
    helps: [
      "Eat plenty of high-fibre foods, such as wholemeal bread, fruit and vegetables, and drink plenty of water.",
      "Avoid standing or sitting for long periods, and take regular exercise.",
      "Hold a cloth wrung out in iced water gently against the piles to ease the pain.",
      "After a poo, clean with moist toilet paper, and pat rather than rub.",
      "Check with your doctor, midwife or pharmacist before using any cream or medicine.",
    ],
    tryThisWeek: [
      "Add fibre and drink more water.",
      "Try a cold cloth for pain.",
      "Ask your midwife about a cream.",
    ],
    ask: "Which cream or treatment is suitable for me in pregnancy?",
    interactive: {
      kind: "scenarios",
      title: "Pregnancy moments",
      scenarios: [
        { id: "cream", situation: "You'd like to buy a cream for your piles while pregnant.", options: [{ text: "Check with your midwife, doctor or pharmacist first", best: true }, { text: "Use any cream from the shelf" }], why: "Do not use a cream or medicine without checking with your doctor, midwife or pharmacist first." },
        { id: "sore", situation: "Your piles are sore after a poo.", options: [{ text: "Moist toilet paper, then pat dry", best: true }, { text: "Rub hard with dry paper" }], why: "After a poo, clean with moist toilet paper and pat rather than rub." },
        { id: "constipated", situation: "You're constipated and it's making your piles worse.", options: [{ text: "More fibre, water and regular exercise", best: true }, { text: "Strain harder to get it out" }], why: "Eat plenty of high-fibre food, drink plenty of water, take regular exercise, and avoid straining." },
        { id: "after-birth", situation: "Weeks after the birth, your piles are still bothering you.", options: [{ text: "Ask your GP or health visitor", best: true }, { text: "Say nothing and put up with it" }], why: "If a physical problem is bothering you, ask a GP or health visitor for help at any time." },
      ],
    },
    sources: [NHS_PREG, NHS_CONSTIP, NHS_HC_PREG, NHS_PILES, CKS_PRED, NHS_POST_PREG, NHS_PREG_DIET],
    quiz: {
      question: "What should you do before using a piles cream in pregnancy?",
      options: [{ text: "Check with your doctor, midwife or pharmacist", right: true }, { text: "Nothing, any cream is fine" }, { text: "Wait until after the birth to treat them" }],
      why: "Do not use a cream or medicine without checking with them first.",
    },
  },
  {
    id: "piles-coming-back",
    kicker: "Prevention",
    question: "How can I stop piles coming back?",
    hook: "The habits that helped them heal are the ones that keep them away. Keep them going once the piles settle.",
    short: "Piles usually settle, and do not often come back. They are more likely to return if constipation and straining carry on, so keep up a high-fibre diet, enough to drink, regular activity and good toilet habits after they heal.",
    sections: [
      {
        heading: "Why piles come back",
        paragraphs: [
          "The outlook for piles is usually good. Many episodes settle with simple measures, and they do not often come back.",
          "Symptoms are more likely to continue or return if the things that led to them carry on, such as constipation and straining. Treatment does not always prevent piles coming back.",
        ],
      },
      {
        heading: "Keep going once they heal",
        paragraphs: [
          "Once piles have healed, carrying on with the same diet and lifestyle changes lowers the risk of them coming back. After treatment, staying on a high-fibre diet and drinking enough helps prevent them returning.",
          "A good bowel habit is the key to stopping piles forming. Keep your poo soft with a high-fibre diet and plenty of fluid with meals and, if needed, mild laxatives that soften poo, which you can get from a pharmacy.",
        ],
      },
      {
        heading: "Moving more",
        paragraphs: [
          "A daily walk or run can help you poo more regularly. Exercising regularly is one of the ways to make constipation less likely.",
          "Adults should do some type of physical activity every day, and aim for at least 150 minutes of moderate intensity activity a week.",
        ],
      },
      {
        heading: "Toilet habits",
        paragraphs: [
          "Do not sit on the toilet for long periods, and do not strain to open your bowels. Go when you feel the urge, rather than holding on.",
          "Piles are more likely to come back if lasting changes are not made to toilet habits.",
        ],
      },
    ],
    helps: [
      "Stay on a high-fibre diet and drink enough, even after piles have healed.",
      "Do not ignore the urge to poo.",
      "Do not sit on the toilet for long periods, and do not strain.",
      "Take a daily walk or run to help you poo more regularly.",
      "Aim for at least 150 minutes of moderate intensity activity a week.",
    ],
    tryThisWeek: [
      "Keep up the fibre and fluids.",
      "Take a daily walk.",
      "Keep toilet visits short.",
    ],
    ask: "What can I do to stop my piles coming back?",
    interactive: {
      kind: "flip-cards",
      title: "Habits that keep piles away",
      intro: "Turn each card to see why it helps.",
      cards: [
        { id: "fibre", front: "A high-fibre diet", when: "Every day, even after healing", back: "Keeps poo soft and easy to pass. Add fibre gradually to avoid wind and bloating." },
        { id: "fluids", front: "Plenty to drink", when: "Especially with more fibre", back: "Drinking enough is particularly important when you eat more fibre, to keep poo soft." },
        { id: "walk", front: "A daily walk or run", when: "Every day", back: "A daily walk or run can help you poo more regularly." },
        { id: "urge", front: "Going when you need to", when: "Whenever you feel the urge", back: "Do not ignore the urge to poo or hold on." },
        { id: "short", front: "Short toilet visits", when: "Every time", back: "Do not sit on the toilet for long periods, and do not strain to open your bowels." },
        { id: "softeners", front: "Mild stool softeners", when: "If needed", back: "Mild laxatives that soften poo can be bought from a pharmacy." },
      ],
    },
    sources: [CKS_PROG, CKS_MGMT, NHS_PILES, CUH_BANDING, RDUH_SURGERY, NHS_CONSTIP, NHS_EXERCISE, NHS_HC_FAQ],
    quiz: {
      question: "What makes piles more likely to come back?",
      options: [{ text: "Ongoing constipation and straining", right: true }, { text: "Drinking plenty of water" }, { text: "A daily walk" }],
      why: "Symptoms are more likely to continue or return if the things that led to them carry on, such as constipation and straining.",
    },
  },
  {
    id: "piles-urgent",
    kicker: "Urgent help",
    question: "When should I get urgent help for piles?",
    hook: "Bleeding that will not stop, a lot of blood or severe pain means 999 or A&E. Know the signs before you need them.",
    short: "Go to A&E or call 999 if you have piles and you are bleeding non-stop, there is a lot of blood or large clots, or you are in severe pain. Ask for an urgent GP appointment or get help from NHS 111 if you feel hot, shivery and unwell, or pus is leaking from your piles.",
    sections: [
      {
        heading: "Call 999 or go to A&E",
        paragraphs: [
          "Go to A&E or call 999 if you have piles and you are bleeding non-stop, there is a lot of blood or you see large blood clots, or you are in severe pain.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance. Bring any medicines you take with you.",
        ],
      },
      {
        heading: "Urgent GP appointment or NHS 111",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have piles and your temperature is very high, or you feel hot, cold or shivery and generally unwell. Do the same if you have painless bleeding from the bottom, or pus is leaking from your piles.",
          "Ask for an urgent GP appointment or get help from NHS 111 if your poo is black or dark red, or you have bloody diarrhoea. In Scotland, NHS inform says to phone 111 if your GP practice is closed.",
        ],
      },
      {
        heading: "Why these signs matter",
        paragraphs: [
          "Piles can sometimes lead to complications. Piles that come out and cannot be pushed back into the anal canal can cause severe pain. Rarely, a serious infection can develop around the back passage, or continuous or heavy bleeding can lead to anaemia.",
        ],
      },
      {
        heading: "How NHS 111 can help",
        paragraphs: [
          "You can get help from NHS 111 by using 111 online, in the NHS App, or by calling 111. It can direct you to the best place to get help if you cannot contact your GP during the day, or when your GP is closed.",
          "Depending on what you need, you might be advised to call 999 or go to A&E, go to an urgent treatment centre, see an out-of-hours GP, or look after yourself safely at home.",
        ],
      },
    ],
    helps: [
      "Go to A&E or call 999 if you're bleeding non-stop, there's a lot of blood or large clots, or you're in severe pain.",
      "Do not drive yourself to A&E: ask someone to drive you, or call 999 and ask for an ambulance.",
      "Bring any medicines you take with you.",
      "Ask for an urgent GP appointment or get help from NHS 111 if your temperature is very high, or you feel hot, cold or shivery and generally unwell.",
      "Do the same if pus is leaking from your piles, or you have painless bleeding from the bottom.",
    ],
    tryThisWeek: [
      "Learn the 999 and A&E signs.",
      "Know how to reach NHS 111.",
      "Keep a list of your medicines.",
    ],
    ask: "Which symptoms mean I should get urgent help?",
    interactive: {
      kind: "scenarios",
      title: "Which route?",
      scenarios: [
        { id: "non-stop", situation: "Your piles are bleeding non-stop.", options: [{ text: "Go to A&E or call 999", best: true }, { text: "Wait and see how it is tomorrow" }, { text: "Book a routine GP appointment" }], why: "Go to A&E or call 999 if you have piles and you are bleeding non-stop." },
        { id: "pus", situation: "Pus is leaking from your piles.", options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Ignore it and carry on" }], why: "Ask for an urgent GP appointment or get help from NHS 111 if pus is leaking from your piles." },
        { id: "shivery", situation: "You have piles and feel hot, shivery and generally unwell.", options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Have a warm bath and wait" }], why: "Ask for an urgent GP appointment or get help from NHS 111 if you feel hot, cold or shivery and generally unwell." },
        { id: "severe-pain", situation: "You have piles and are in severe pain.", options: [{ text: "Go to A&E or call 999", best: true }, { text: "Drive yourself to A&E" }], why: "Go to A&E or call 999 if you are in severe pain. Do not drive to A&E: ask someone to drive you or call 999." },
      ],
    },
    sources: [NHS_PILES, INFORM, NHS_BLEED, NHS_111, CKS_COMP],
    quiz: {
      question: "What does the NHS say to do if piles are bleeding non-stop?",
      options: [{ text: "Go to A&E or call 999", right: true }, { text: "Wait a week to see if it stops" }, { text: "Use more cream" }],
      why: "Go to A&E or call 999 if you have piles and you are bleeding non-stop, there is a lot of blood or you see large blood clots, or you are in severe pain.",
    },
  },
];
