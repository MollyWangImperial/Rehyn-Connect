import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Anal fissure page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS website,
// Guts UK, the NICE Clinical Knowledge Summary on anal fissure, and NHS hospital patient leaflets (Milton
// Keynes, Plymouth, North Cumbria, Cambridge and York). Guts UK has no separate anal fissure page; its
// Perianal disease page covers it. General information only; it never replaces what a person's own GP,
// nurse or surgeon tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE CKS: Anal fissure, ${label}`, url: `https://cks.nice.org.uk/topics/anal-fissure/${path}` });

const NHS_FISSURE = nhs("Anal fissure", "conditions/anal-fissure/");
const NHS_ANAL_PAIN = nhs("Anal pain", "symptoms/anal-pain/");
const NHS_BLEEDING = nhs("Bleeding from the bottom (rectal bleeding)", "symptoms/bleeding-from-the-bottom-rectal-bleeding/");
const NHS_CONSTIPATION = nhs("Constipation", "conditions/constipation/");
const NHS_LAXATIVES = nhs("Laxatives", "medicines/laxatives/");
const NHS_FIBRE = nhs("How to get more fibre into your diet", "live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/");
const NHS_DILT_HOW = nhs("How and when to take diltiazem", "medicines/diltiazem/how-and-when-to-take-diltiazem/");
const NHS_DILT_CQ = nhs("Common questions about diltiazem", "medicines/diltiazem/common-questions-about-diltiazem/");
const NHS_DILT_PREG = nhs("Pregnancy, breastfeeding and fertility while taking diltiazem", "medicines/diltiazem/pregnancy-breastfeeding-and-fertility-while-taking-diltiazem/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");

const GUTS_PERIANAL: LearnSource = { label: "Guts UK: Perianal disease (anal fissures)", url: "https://gutscharity.org.uk/advice-and-information/conditions/perianal-disease/" };
const GUTS_POO: LearnSource = { label: "Guts UK: Poo-torial", url: "https://gutscharity.org.uk/advice-and-information/poo-torial/" };

const CKS_DEF = cks("definition", "background-information/definition/");
const CKS_CAUSES = cks("causes", "background-information/causes/");
const CKS_PREV = cks("prevalence", "background-information/prevalence/");
const CKS_PROG = cks("prognosis", "background-information/prognosis/");
const CKS_COMP = cks("complications", "background-information/complications/");
const CKS_DIAG = cks("diagnosis", "diagnosis/diagnosis/");
const CKS_MGMT = cks("management", "management/management/");
const CKS_GTN = cks("rectal glyceryl trinitrate ointment", "prescribing-information/rectal-glyceryl-trinitrate-04percent-ointment/");

const MKUH_FISSURE: LearnSource = { label: "Milton Keynes University Hospital: Anal fissure", url: "https://www.mkuh.nhs.uk/patient-information-leaflet/anal-fissure" };
const MKUH_SPHINCT: LearnSource = { label: "Milton Keynes University Hospital: Lateral anal sphincterotomy", url: "https://www.mkuh.nhs.uk/patient-information-leaflet/lateral-anal-sphincterotomy" };
const PLYMOUTH: LearnSource = { label: "University Hospitals Plymouth: Anal fissure", url: "https://www.plymouthhospitals.nhs.uk/display-pil/pil-anal-fissure-7999/" };
const NCIC: LearnSource = { label: "North Cumbria Integrated Care: Anal fissures", url: "https://www.ncic.nhs.uk/patients-visitors/patient-information-leaflets/General-surgery-Anal-Fissures" };
const CUH: LearnSource = { label: "Cambridge University Hospitals: Anal fissures", url: "https://www.cuh.nhs.uk/patient-information/anal-fissures/" };
const YORK: LearnSource = { label: "York and Scarborough Teaching Hospitals: Lateral internal anal sphincterotomy", url: "https://www.yorkhospitals.nhs.uk/seecmsfile/?id=8563" };
const GIRFT_BOTOX: LearnSource = { label: "Whittington Health (GIRFT consent form): Injection of Botox into an anal fissure", url: "https://www.whittington.nhs.uk/document.ashx?id=7511" };

export const fissureAnswers: LearnArticle[] = [
  {
    id: "fis-what-it-is",
    kicker: "Understanding",
    question: "What is an anal fissure?",
    hook: "A tear so small it is hard to see, and yet it can hurt a lot. Most heal on their own within a couple of weeks.",
    short: "An anal fissure is a small tear in the skin of the anus that causes pain when you poo. It usually gets better on its own, often within 1 to 2 weeks. One that lasts more than six weeks is called chronic, and there are treatments that help.",
    sections: [
      {
        heading: "A small tear that hurts a lot",
        paragraphs: [
          "An anal fissure is a small tear in your anus that causes pain when you poo. Although the tear is small, it can be very painful because the anus is very sensitive.",
          "It is a split in the skin at the opening of the anus. The inner circle of muscle in the anal canal, called the internal sphincter, can go into spasm. This makes the pain worse and can stop the tear healing.",
        ],
      },
      {
        heading: "Short-lived or long-lasting",
        paragraphs: [
          "In most cases the fissure heals within 1 to 2 weeks or so, just like any other small cut of the skin. A fissure that lasts more than six weeks is called a chronic anal fissure. Chronic means persistent.",
          "Doctors call a fissure acute if it has been there for less than 6 weeks. Some fissures have no clear cause, and some are linked to another condition.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "Anal fissures are common in both adults and children. They're more common in people aged 15 to 40, and in young children.",
          "Guts UK says an anal fissure affects about 1 in 350 people, and seems to affect men and women in similar numbers.",
        ],
      },
      {
        heading: "Not piles, and not cancer",
        paragraphs: [
          "Anal fissures are different from haemorrhoids (piles) and have no relationship with cancer. But there are other causes of pain around the anus and bleeding from the bottom, such as piles.",
          "When the fissure heals, some people may notice a small harmless skin tag, called a sentinel pile, at the entrance of the anal canal.",
        ],
      },
    ],
    helps: [
      "Take paracetamol or ibuprofen to help with pain.",
      "Drink lots of fluids and eat plenty of fibre to keep your poo soft.",
      "Have a warm, shallow bath after you poo to ease pain in your bottom.",
      "Keep your bottom clean and dry.",
      "See a GP if symptoms are getting worse, or there's no improvement after 7 days of treating it yourself.",
    ],
    tryThisWeek: [
      "Keep your poo soft with fibre and fluids.",
      "Try a warm, shallow bath after a poo.",
      "See a GP if no better after 7 days.",
    ],
    ask: "Is this an anal fissure, and is it a new one or a long-lasting one?",
    interactive: {
      kind: "timeline",
      title: "From tear to healing",
      steps: [
        { id: "tear", when: "When it happens", title: "A small tear", points: ["Sharp pain when you poo", "Burning pain that may last several hours", "A little bright red blood"] },
        { id: "weeks", when: "1 to 2 weeks", title: "Most heal", points: ["Just like any other small cut of the skin", "Soft poo and pain relief help"] },
        { id: "seven", when: "After 7 days", title: "See a GP if no better", points: ["Or sooner if symptoms are getting worse"] },
        { id: "six", when: "After 6 weeks", title: "A chronic fissure", points: ["Chronic means persistent", "Further treatment can help it heal"] },
      ],
    },
    sources: [NHS_FISSURE, MKUH_FISSURE, CKS_DEF, CUH, GUTS_PERIANAL, PLYMOUTH],
    quiz: {
      question: "How long do most anal fissures take to heal?",
      options: [{ text: "About 1 to 2 weeks", right: true }, { text: "At least 6 months" }, { text: "They never heal without surgery" }],
      why: "In most cases the fissure heals within 1 to 2 weeks or so, just like any other small cut of the skin.",
    },
  },
  {
    id: "fis-symptoms",
    kicker: "Symptoms",
    question: "What does an anal fissure feel like?",
    hook: "Sharp pain on the toilet, then a burning that can last for hours. A little bright red blood is common too.",
    short: "The main symptoms are severe, sharp pain when you poo, burning pain afterwards that may last for several hours, and bright red blood on the toilet paper or in the toilet. Pain and bleeding have other causes too, so it is best not to guess.",
    sections: [
      {
        heading: "Sharp pain, then burning",
        paragraphs: [
          "The main symptoms of an anal fissure are severe, sharp pain when you poo, and burning pain after you poo that may last for several hours.",
          "The pain is typically sharp and knife-like rather than an ache. Some people describe it as feeling like passing broken glass.",
        ],
      },
      {
        heading: "A little bright red blood",
        paragraphs: [
          "You may see bright red blood in the toilet or on the toilet paper after you poo.",
          "Often an anal fissure will bleed a little. The blood is usually bright red, stains the toilet tissue, but soon stops.",
        ],
      },
      {
        heading: "Other things you might notice",
        paragraphs: [
          "Some people have some itching and discharge. A tearing feeling when passing a poo may also be described.",
          "A skin tag, a piece of skin that hangs from the surrounding skin, can develop at the site of the fissure if it has been there a long time.",
        ],
      },
      {
        heading: "Why the pain can make things worse",
        paragraphs: [
          "The muscle spasm can cause extreme discomfort while going to the toilet and for some time afterwards. This often puts people off going for a poo.",
          "But ignoring the urge will make the poo harder and the problem worse.",
        ],
      },
      {
        heading: "Similar symptoms, other causes",
        paragraphs: [
          "There are other causes of pain around your anus and bleeding from the bottom, such as piles. The NHS says not to try to diagnose the cause of anal pain yourself.",
          "Constant throbbing pain, with pus, blood on the paper and a high temperature, can be a sign of an anal fistula or abscess.",
        ],
      },
    ],
    helps: [
      "Do not ignore the urge to poo.",
      "Take paracetamol to ease the pain.",
      "Wipe your bottom with damp toilet paper.",
      "See a GP if your anal pain is severe, or it does not improve after a few days.",
      "See a GP if you have blood in your poo or bleeding from your bottom.",
    ],
    tryThisWeek: [
      "Don't put off going for a poo.",
      "Wipe with damp toilet paper.",
      "See a GP if the pain is severe.",
    ],
    ask: "Are my symptoms from a fissure, or could something else be causing them?",
    interactive: {
      kind: "signs",
      title: "What have you noticed?",
      intro: "Tick any that apply. They make a short list to take to your GP.",
      signs: [
        "Sharp pain when I poo",
        "Burning pain for hours after a poo",
        "Bright red blood on the paper or in the toilet",
        "Itching or discharge",
        "A skin tag near my anus",
        "Putting off going for a poo because of pain",
      ],
      after: "Do not feel embarrassed to see a GP. Anal pain is a common problem that they're used to treating.",
      copyHeading: "Bottom symptoms to tell my GP about",
    },
    sources: [NHS_FISSURE, NHS_ANAL_PAIN, CUH, CKS_DIAG, PLYMOUTH, GUTS_PERIANAL, MKUH_FISSURE],
    quiz: {
      question: "What is the typical pain of an anal fissure like?",
      options: [{ text: "Sharp when you poo, then burning for hours", right: true }, { text: "A dull ache in the lower back" }, { text: "Cramps only after eating" }],
      why: "The main symptoms of an anal fissure are severe, sharp pain when you poo, and burning pain after you poo that may last for several hours.",
    },
  },
  {
    id: "fis-causes",
    kicker: "Causes",
    question: "Why do anal fissures happen?",
    hook: "Hard poo is the usual suspect, but not the only one. A tight muscle and a poor blood supply can play a part.",
    short: "It's not always clear what causes an anal fissure. Most are thought to come from passing large or hard poo, but diarrhoea, pregnancy and childbirth, some bowel conditions, infections and some medicines can also play a part. A tight muscle around the anus may stop it healing.",
    sections: [
      {
        heading: "Hard poo and stretching",
        paragraphs: [
          "It's not always clear what causes an anal fissure. Most are thought to be due to passing large or hard poo when you are constipated. The rim of the anus may stretch and tear slightly.",
          "You may also be more likely to get one if you have diarrhoea a lot.",
        ],
      },
      {
        heading: "A tight muscle and a poor blood supply",
        paragraphs: [
          "Spasm, or tightening, of the muscle around the anus may play a part in causing the tear. In people with a chronic fissure, the muscle pressure around the anus is thought to be quite high. This reduces the blood supply, which can affect how well the tear heals.",
          "In the past, anal fissures were often blamed on constipation and passing hard poo. However, they may occur without constipation, and may be linked with problems in the blood supply to the skin around the anus.",
        ],
      },
      {
        heading: "Pregnancy and childbirth",
        paragraphs: [
          "You may be more likely to get an anal fissure if you are pregnant or have given birth vaginally. In about 1 in 10 cases, the fissure occurs during childbirth.",
          "Guts UK says it is the second most common condition around the anus, after piles, to affect women during or after pregnancy.",
        ],
      },
      {
        heading: "Other conditions and medicines",
        paragraphs: [
          "Some fissures are linked to a condition such as inflammatory bowel disease, including Crohn's disease or ulcerative colitis, or to a sexually transmitted infection, such as syphilis or herpes.",
          "There is also a link with certain medicines, such as nicorandil, taken for angina, and chemotherapy. Do not stop taking any medicine without speaking to your doctor first, as they may be able to suggest an alternative.",
          "Injury to the anus, from previous surgery on the anus or from anal sex, can also lead to a fissure.",
        ],
      },
      {
        heading: "Who gets them",
        paragraphs: [
          "Anal fissures are more common in people aged 15 to 40, and in young children. Constipation is a common cause of anal fissures in children.",
          "Men and women are equally affected.",
        ],
      },
    ],
    helps: [
      "Drink lots of fluids and eat plenty of fibre to keep your poo soft.",
      "Do not ignore the urge to poo, as this can cause your poo to dry out and become harder to pass.",
      "Exercise regularly: try to do at least 150 minutes of moderate-intensity activity a week.",
      "Talk to your doctor before stopping any medicine you think might be linked.",
      "Avoid anal sex or inserting anything into the anus while a fissure heals.",
    ],
    tryThisWeek: [
      "Add fibre and fluids each day.",
      "Go when you feel the urge.",
      "Ask your doctor about your medicines.",
    ],
    ask: "Could constipation, another condition or a medicine be causing my fissure?",
    interactive: {
      kind: "risk-check",
      title: "What makes a fissure more likely?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "constipation", label: "Constipation or hard poo", note: "Keeping poo soft with fibre and fluids helps a fissure heal and helps stop another.", changeable: true },
        { id: "diarrhoea", label: "Having diarrhoea a lot", note: "Frequent diarrhoea makes a fissure more likely. A GP can help find the cause.", changeable: true },
        { id: "medicines", label: "Some medicines", note: "Nicorandil and chemotherapy are linked. Do not stop any medicine without speaking to your doctor first.", changeable: true },
        { id: "pregnancy", label: "Pregnancy or giving birth", note: "In about 1 in 10 cases, the fissure occurs during childbirth.", changeable: false },
        { id: "ibd", label: "Crohn's disease or colitis", note: "Inflammatory bowel disease can cause fissures, which may need a specialist.", changeable: false },
        { id: "age", label: "Being aged 15 to 40", note: "Anal fissures are more common in this age group, and in young children.", changeable: false },
      ],
    },
    sources: [NHS_FISSURE, MKUH_FISSURE, GUTS_PERIANAL, CKS_CAUSES, NHS_DILT_CQ, PLYMOUTH, CKS_PREV],
    quiz: {
      question: "Are all anal fissures caused by constipation?",
      options: [{ text: "No, they may occur without constipation", right: true }, { text: "Yes, every one of them" }, { text: "No, they are always caused by infection" }],
      why: "In the past, anal fissures were often blamed on constipation and passing hard poo. However, they may occur without constipation.",
    },
  },
  {
    id: "fis-checks",
    kicker: "Tests",
    question: "How is an anal fissure checked?",
    hook: "Usually a chat and a gentle look are enough. More tests are for the few that need them.",
    short: "A GP will ask about your symptoms and look at your anus, usually without an internal examination. If the GP is unsure, if something serious may be causing it, or if examining you is too painful, you may be referred for an examination under general anaesthetic or other tests.",
    sections: [
      {
        heading: "At the GP",
        paragraphs: [
          "To check if you have an anal fissure, your GP will ask about your symptoms and look at your anus.",
          "They may ask about your bowel habits and any recent changes, other symptoms such as tummy pain or weight loss, and any family history of bowel conditions.",
        ],
      },
      {
        heading: "A gentle look",
        paragraphs: [
          "The doctor will usually ask you to lie comfortably on your side and gently part the buttocks to see the tear. A NICE summary for GPs says a finger examination inside the bottom is not recommended in general practice to diagnose a fissure, as it may be very painful.",
          "Do not feel embarrassed to see a GP. Anal pain is a common problem that they're used to treating.",
        ],
      },
      {
        heading: "An examination while asleep",
        paragraphs: [
          "You may be referred to a specialist for an examination under general anaesthetic if your GP is not sure if you have an anal fissure or if something serious may be causing it. This can also happen if the examination is causing you pain or painful muscle spasms in your anus.",
        ],
      },
      {
        heading: "Further tests, if needed",
        paragraphs: [
          "Some people have blood tests to see if there is any infection or signs of inflammation. A colonoscopy or flexible sigmoidoscopy uses a camera to look inside the bowel.",
          "A test called anorectal manometry checks the pressure inside the anal canal, and sometimes a specialised ultrasound scan checks the anal sphincter. These tests help the consultant decide which options are suitable for you.",
        ],
      },
      {
        heading: "Why checking matters",
        paragraphs: [
          "Bleeding from the bottom is sometimes a sign of bowel cancer. This is easier to treat if it's found early, so it's important to get it checked.",
          "Anal fissures are less common in older adults, so doctors may look for other causes. A fissure in an unusual place, or more than one, can be a sign of another condition that needs further checks.",
        ],
      },
    ],
    helps: [
      "See a GP if symptoms are getting worse, or there's no improvement after 7 days of treating it yourself.",
      "See a GP if you've had blood in your poo for 3 weeks.",
      "Tell the GP about any changes in your bowel habits, tummy pain or weight loss.",
      "Do not let embarrassment stop you: GPs are used to treating anal pain.",
    ],
    tryThisWeek: [
      "Book a GP if no better after 7 days.",
      "Mention any bowel changes.",
      "Don't let embarrassment stop you.",
    ],
    ask: "Do I need any more tests, or a referral to a specialist?",
    interactive: {
      kind: "flip-cards",
      title: "The checks, card by card",
      intro: "Turn each card to see what each check is for.",
      cards: [
        { id: "gp", front: "A look by the GP", when: "Usually the first check", back: "The GP asks about your symptoms and gently looks at your anus to see the tear." },
        { id: "eua", front: "Examination under anaesthetic", when: "If unsure, or too painful", back: "A specialist examines you while you are asleep under general anaesthetic." },
        { id: "bloods", front: "Blood tests", when: "Sometimes", back: "Look for any infection or signs of inflammation." },
        { id: "camera", front: "Colonoscopy or sigmoidoscopy", when: "Sometimes", back: "A camera looks inside the bowel." },
        { id: "manometry", front: "Anorectal manometry", when: "Before some treatments", back: "Measures the pressure inside the anal canal to check how the muscles are working." },
        { id: "ultrasound", front: "Anal ultrasound", when: "Sometimes", back: "A specialised scan checks for problems with the anal sphincter." },
      ],
    },
    sources: [NHS_FISSURE, CKS_DIAG, PLYMOUTH, GUTS_PERIANAL, NHS_ANAL_PAIN, NHS_BLEEDING, CKS_MGMT],
    quiz: {
      question: "When might a specialist examine you under general anaesthetic?",
      options: [{ text: "If the GP is unsure or the examination is too painful", right: true }, { text: "Always, for every fissure" }, { text: "Only after surgery" }],
      why: "You may be referred to a specialist for an examination under general anaesthetic if your GP is not sure if you have an anal fissure or if something serious may be causing it.",
    },
  },
  {
    id: "fis-softer-stools",
    kicker: "Treatment",
    question: "How do fibre, fluids and laxatives help a fissure heal?",
    hook: "Soft poo is the first treatment. It stops the tear opening again each time you go.",
    short: "Keeping poo soft and avoiding constipation helps a fissure heal and helps stop it coming back. That means more fibre, added gradually, plenty to drink, and sometimes a laxative. Painkillers containing codeine are best avoided, as they can cause constipation.",
    sections: [
      {
        heading: "Soft poo lets the tear heal",
        paragraphs: [
          "If you keep your poo soft, and avoid getting constipated, it will help a fissure to heal and help to prevent it happening again.",
          "Emptying the bowels while the poo is hard may open the wound again and delay the healing process.",
        ],
      },
      {
        heading: "Fibre, step by step",
        paragraphs: [
          "Government guidelines say adults should aim for 30g of fibre a day, but most adults eat an average of only about 20g.",
          "Good sources include wholegrain bread and cereals, wholemeal pasta, brown rice, fruit and vegetables with their skins, beans, lentils and chickpeas, and nuts and seeds.",
          "Fibre works by absorbing many times its own weight in water, which makes poo softer and easier to pass. Add high fibre foods gradually rather than suddenly changing your diet, to limit wind and bloating.",
        ],
      },
      {
        heading: "Plenty to drink",
        paragraphs: [
          "It is very important to drink more when you eat more fibre. Milton Keynes University Hospital says adults should aim to drink at least two litres, or 10 to 12 cups, of fluid a day.",
          "Most sorts of drink will do, but alcoholic drinks can be dehydrating and may not be so good.",
        ],
      },
      {
        heading: "Laxatives",
        paragraphs: [
          "Laxatives are medicines that help you poo. They are used if you have a condition like an anal fissure, when it helps if your poo is soft or you can poo more easily.",
          "If you're buying laxatives without a prescription, it's usually best to try a bulk-forming laxative, such as ispaghula husk, first. Osmotic laxatives, such as lactulose or macrogol, bring more water into the bowel so poo is softer.",
          "If you're taking bulk-forming or osmotic laxatives, it's important to drink plenty of fluids. A pharmacist can help you choose, and a GP may prescribe one if you have constipation.",
        ],
      },
      {
        heading: "Painkillers that constipate",
        paragraphs: [
          "Avoid painkillers that contain codeine, such as co-codamol, as they are a common cause of constipation. Paracetamol is preferable to ease the discomfort of a fissure.",
        ],
      },
    ],
    helps: [
      "Gradually increase your fibre towards 30g a day, from wholegrains, fruit, vegetables and pulses.",
      "Drink more fluids as you eat more fibre.",
      "If buying a laxative without a prescription, try a bulk-forming one first, and ask a pharmacist if you're not sure.",
      "If you bought laxatives without a prescription, do not take them for longer than 7 days.",
      "Avoid painkillers that contain codeine.",
      "Do not ignore the urge to poo.",
    ],
    tryThisWeek: [
      "Add one high-fibre food a day.",
      "Drink more as your fibre goes up.",
      "Ask a pharmacist about laxatives.",
    ],
    ask: "Which laxative would suit me, and how long should I take it for?",
    interactive: {
      kind: "flip-cards",
      title: "Laxatives, card by card",
      intro: "Turn each card to see how each type works.",
      cards: [
        { id: "bulk", front: "Bulk-forming", when: "Usually best to try first", back: "Fybogel (ispaghula husk). Adds fibre so poo is bigger and softer. Takes up to 3 days to work." },
        { id: "osmotic", front: "Osmotic", when: "Lactulose or macrogol", back: "Brings more water into the bowel so poo is softer. Takes 2 to 3 days to work." },
        { id: "softener", front: "Stool softeners", when: "Arachis oil or docusate", back: "Lets more water and fat into poo so it is softer and more slippery. Takes 12 hours to 3 days." },
        { id: "stimulant", front: "Stimulant", when: "Bisacodyl or senna", back: "Triggers your bowel muscles to push poo out. Takes 6 to 12 hours to work." },
      ],
    },
    sources: [NHS_FISSURE, MKUH_FISSURE, NHS_FIBRE, NHS_LAXATIVES, PLYMOUTH, CKS_MGMT],
    quiz: {
      question: "If you buy a laxative without a prescription, which type is usually best to try first?",
      options: [{ text: "A bulk-forming laxative", right: true }, { text: "A stimulant laxative" }, { text: "Two types at once" }],
      why: "If you're buying laxatives without a prescription, it's usually best to try a bulk-forming laxative, such as ispaghula husk, first.",
    },
  },
  {
    id: "fis-creams",
    kicker: "Treatment",
    question: "Which creams help a fissure heal?",
    hook: "Two prescription creams relax the tight muscle and let blood reach the tear. The key is the full course.",
    short: "If a fissure is not healing, a GP may prescribe GTN ointment or diltiazem cream. Both relax the muscle around the anus so more blood reaches the tear. They are used twice a day, usually for 6 to 8 weeks, even if the pain goes sooner.",
    sections: [
      {
        heading: "Relaxing the muscle",
        paragraphs: [
          "If an anal fissure is not healing, you may be given a cream you put on your anus that helps with healing. You may need to use this for up to 8 weeks.",
          "The two main creams are glyceryl trinitrate, called GTN, and diltiazem. They relax the inner muscle around the anus, which improves the blood supply to the tear and helps it heal.",
        ],
      },
      {
        heading: "GTN ointment",
        paragraphs: [
          "GTN ointment is only available on prescription. It is used twice a day, every 12 hours, for a full 6 to 8 weeks, even if the pain goes much sooner. This is because it often takes that long for the fissure to heal fully.",
          "About 7 in 10 people with a chronic anal fissure are cured with a course of GTN ointment. Up to 6 in 10 people have a headache after applying it, which usually goes within 30 minutes, and paracetamol will help.",
          "People who have migraines should not use it, nor should women who are pregnant or breastfeeding. When getting up from lying or sitting, get up slowly, otherwise you might feel faint.",
        ],
      },
      {
        heading: "Diltiazem cream",
        paragraphs: [
          "Diltiazem is another prescription cream that may be used if GTN is not suitable for you. It relaxes the muscle near the anus, which makes it easier and less painful to poo, and helps more blood flow to the tear.",
          "The NHS says to apply a measured length to the broken skin on your anus twice a day, usually for 6 to 8 weeks, following the instructions on the packaging. It should start to work on the day you apply it.",
          "It can cause skin itching, which usually disappears after a few days. If you're pregnant, speak to your doctor, who may suggest an alternative medicine.",
        ],
      },
      {
        heading: "Using them well",
        paragraphs: [
          "Follow the instructions you are given and the leaflet that comes with the cream. Cambridge University Hospitals says both are applied to the outside of the anus by a gloved hand twice a day.",
          "Keep using the cream until the fissure has healed. If you stop using it before the fissure has fully healed, it may tear again.",
        ],
      },
      {
        heading: "If one does not suit you",
        paragraphs: [
          "If side effects occur with one ointment, it is possible to try the other. If there has been no significant improvement after several weeks, the alternative ointment can be tried for a few more weeks.",
          "A NICE summary for GPs suggests a review if the fissure has not healed after 6 to 8 weeks. Some people need a second course, or a referral to a surgeon.",
        ],
      },
    ],
    helps: [
      "Use the cream twice a day for the full course, usually 6 to 8 weeks, even if the pain goes sooner.",
      "Follow the instructions you are given and the leaflet that comes with the cream.",
      "If GTN gives you a headache, try paracetamol, and if side effects are bad, ask your doctor about an alternative.",
      "Get up slowly from lying or sitting while using GTN ointment.",
      "Tell your doctor if you are pregnant, breastfeeding or have migraines.",
      "Wash your hands after applying the ointment.",
    ],
    tryThisWeek: [
      "Use the cream twice a day.",
      "Get up slowly while using GTN.",
      "Wash your hands after applying it.",
    ],
    ask: "Which cream should I use, how should I apply it, and for how long?",
    interactive: {
      kind: "scenarios",
      title: "Living with the cream",
      scenarios: [
        {
          id: "pain-gone",
          situation: "After three weeks of GTN ointment, the pain has gone.",
          options: [{ text: "Keep going for the full 6 to 8 weeks", best: true }, { text: "Stop now the pain has gone" }],
          why: "It often takes 6 to 8 weeks of treatment for the fissure to heal fully, even if the pain has gone.",
        },
        {
          id: "headache",
          situation: "You get a headache after applying GTN ointment.",
          options: [{ text: "Try paracetamol, and talk to your doctor if it is bad", best: true }, { text: "Use twice as much ointment" }],
          why: "The headache usually goes within 30 minutes and paracetamol will help. For bad side effects, your doctor may advise an alternative.",
        },
        {
          id: "standing",
          situation: "You have just put on GTN ointment and need to stand up.",
          options: [{ text: "Get up slowly", best: true }, { text: "Jump straight up" }],
          why: "When getting up from a lying or sitting position, get up slowly, otherwise you might feel faint.",
        },
        {
          id: "pregnant",
          situation: "You find out you are pregnant while using a fissure cream.",
          options: [{ text: "Speak to your doctor", best: true }, { text: "Carry on without telling anyone" }],
          why: "GTN ointment should not be used in pregnancy, and with diltiazem your doctor may suggest an alternative medicine.",
        },
      ],
    },
    sources: [NHS_FISSURE, MKUH_FISSURE, NHS_DILT_HOW, NHS_DILT_CQ, CUH, NCIC, CKS_MGMT, CKS_GTN, NHS_DILT_PREG, PLYMOUTH],
    quiz: {
      question: "Should you stop the cream as soon as the pain goes?",
      options: [{ text: "No, keep going for the full course", right: true }, { text: "Yes, once the pain stops" }, { text: "Yes, after one week" }],
      why: "It is used twice a day, every 12 hours, for a full 6 to 8 weeks, even if the pain goes much sooner.",
    },
  },
  {
    id: "fis-pain",
    kicker: "Treatment",
    question: "What eases the pain of a fissure?",
    hook: "Warm water, the right painkiller and gentle care can take the edge off while the tear heals.",
    short: "Paracetamol or ibuprofen, a warm, shallow bath after a poo, and gentle washing can all ease the pain. A numbing cream can help before a poo for a few days at a time, and a GP can prescribe medicines for spasm. Codeine painkillers are best avoided.",
    sections: [
      {
        heading: "Simple painkillers",
        paragraphs: [
          "Take paracetamol or ibuprofen to help with pain. Check with a pharmacist which is suitable for you, and follow the dosage instructions and the leaflet.",
          "Ibuprofen can cause more side effects than paracetamol. If you can take paracetamol, it's a good idea to try it before taking ibuprofen. Avoid painkillers that contain codeine, as they are a common cause of constipation.",
        ],
      },
      {
        heading: "Warm baths",
        paragraphs: [
          "Have a warm, shallow bath after you poo to ease pain in your bottom. Warm baths are soothing, and may help the anus to relax.",
          "A 15-minute bath in warm water can soothe the area and help ease the pain. You can also buy a sitz bath, a shallow bowl you place over the toilet, so you can sit in some warm water.",
        ],
      },
      {
        heading: "Numbing creams",
        paragraphs: [
          "A cream or ointment that contains an anaesthetic, such as lidocaine, may help to numb the area before you have a poo. It will not help the fissure to heal, but it can help to ease the pain.",
          "Use it only for short periods at a time, about 5 to 7 days. If you use it for longer, the anaesthetic may irritate or sensitise the skin around the anus.",
        ],
      },
      {
        heading: "Medicines for spasm",
        paragraphs: [
          "A GP may suggest medicines to help with pain after you poo, such as Buscopan or mebeverine.",
          "Avoid haemorrhoid (piles) suppositories. These hard, bullet-shaped medicines are painful to insert and may tear the fissure even further.",
        ],
      },
      {
        heading: "Caring for the skin",
        paragraphs: [
          "Where possible, wash the area carefully with water after you go to the toilet and pat dry. Do not use soap while it is sore, as it may irritate the skin.",
          "Alcohol-free moist toilet tissues will be more comfortable than toilet paper. Wear cotton underwear and avoid tight-fitting underwear.",
        ],
      },
    ],
    helps: [
      "Take paracetamol, or ibuprofen if it suits you, and follow the dose on the pack.",
      "Have a warm, shallow bath after you poo.",
      "Wash the area with water after the toilet and pat dry, without soap.",
      "Put an ice pack, or a bag of frozen peas, in a towel on the painful area for up to 20 minutes every 2 to 3 hours.",
      "Use numbing creams only for short periods, about 5 to 7 days.",
      "Avoid painkillers that contain codeine.",
    ],
    tryThisWeek: [
      "Have a warm bath after a poo.",
      "Wash with water and pat dry.",
      "Use numbing cream for a few days only.",
    ],
    ask: "Which painkiller is safe for me, and would a numbing cream help?",
    interactive: {
      kind: "scenarios",
      title: "Easing the pain",
      scenarios: [
        {
          id: "burning",
          situation: "You have burning pain for hours after a poo.",
          options: [{ text: "A warm, shallow bath and paracetamol", best: true }, { text: "Rub in a scented body lotion" }],
          why: "Have a warm, shallow bath after you poo, and take paracetamol or ibuprofen to help with pain.",
        },
        {
          id: "codeine",
          situation: "Someone offers you co-codamol for the pain.",
          options: [{ text: "Choose paracetamol instead", best: true }, { text: "Take the co-codamol" }],
          why: "Avoid painkillers that contain codeine, such as co-codamol, as they are a common cause of constipation.",
        },
        {
          id: "numbing",
          situation: "You have used a numbing cream for two weeks.",
          options: [{ text: "Stop, and talk to a pharmacist or GP", best: true }, { text: "Keep using it every day" }],
          why: "Use it only for short periods at a time, about 5 to 7 days. Used for longer, it may irritate or sensitise the skin.",
        },
        {
          id: "suppository",
          situation: "You wonder about trying piles suppositories.",
          options: [{ text: "Avoid them with a fissure", best: true }, { text: "Use them twice a day" }],
          why: "These hard, bullet-shaped medicines are painful to insert and may tear the fissure even further.",
        },
      ],
    },
    sources: [NHS_FISSURE, NHS_ANAL_PAIN, CUH, PLYMOUTH, MKUH_FISSURE, CKS_MGMT, NCIC, NHS_IBUPROFEN],
    quiz: {
      question: "Why are painkillers containing codeine best avoided with a fissure?",
      options: [{ text: "They are a common cause of constipation", right: true }, { text: "They make the bleeding heavier" }, { text: "They stop creams from working" }],
      why: "Avoid painkillers that contain codeine, as they are a common cause of constipation.",
    },
  },
  {
    id: "fis-further",
    kicker: "Treatment",
    question: "What are Botox and surgery for a fissure?",
    hook: "When creams are not enough, a short procedure under anaesthetic can relax the muscle for good or for a while.",
    short: "If creams do not work, or fissures keep coming back, a Botox injection or a small operation called a lateral sphincterotomy may be offered. Both relax the muscle around the anus so the tear can heal. They are done under general anaesthetic, usually as a day case, and each has benefits and risks to talk through with a surgeon.",
    sections: [
      {
        heading: "When they are offered",
        paragraphs: [
          "If other treatments do not work or you keep getting anal fissures, a procedure may be recommended. These will be done under general anaesthetic, so you'll be asleep and will not feel anything.",
          "There are a number of different procedures that can help, and a surgeon can advise on which would be the best for you.",
        ],
      },
      {
        heading: "A Botox injection",
        paragraphs: [
          "An injection of botulinum toxin, or Botox, into the anal sphincter muscle relaxes the muscle by temporarily paralysing it. This increases the blood flow to the fissure and the chance of it healing. It is usually done as a day case.",
          "There is an approximately 70% chance of the fissure healing with Botox. The effect lasts about 3 months, and the injection can be repeated.",
          "Botox may cause a short-lived difficulty with controlling wind, and possibly liquid poo, which goes away. You may not be able to sit comfortably for up to 2 weeks, and a small amount of bleeding usually settles within a week.",
        ],
      },
      {
        heading: "A small operation",
        paragraphs: [
          "The usual operation, a lateral sphincterotomy, makes a small cut in the inner muscle around the anus. This permanently reduces the pressure around the anus and allows the fissure to heal. It is a minor operation, usually done as a day case under general anaesthetic.",
          "The success rate with surgery is very high, and at least 9 in 10 cases are cured. But after this operation some people have poor control of wind, and a small number have soiling of underclothes or mild bowel incontinence.",
          "Hospitals give different figures for this risk. Cambridge University Hospitals gives a risk of 10% to 20% of some change in control of wind or poo, and considers the operation a last resort if other treatments fail.",
        ],
      },
      {
        heading: "Another option",
        paragraphs: [
          "If you may be at higher risk of incontinence, for example after a tear during childbirth or previous surgery on the back passage, a surgeon may suggest an advancement flap. This does not involve cutting the sphincter muscle, but it is not as effective at healing the fissure.",
          "Your consultant will explain these options and, with you, decide which is best for your individual situation.",
        ],
      },
      {
        heading: "Recovering at home",
        paragraphs: [
          "There will be some pain after the operation, but it should be easily controlled with painkilling tablets. You will probably notice a little blood in your poo or on the toilet paper for 7 to 10 days.",
          "After a general anaesthetic, stay with a relative or friend for the first 24 hours, and do not drive or drink alcohol during that time. The recovery period varies, but many people feel well enough to return to work after a few days.",
        ],
      },
    ],
    helps: [
      "Ask your surgeon to explain the benefits and risks of each option for you.",
      "Keep your poo soft with a high fibre diet, and consider a mild laxative if it is hard.",
      "Wash the area after each bowel movement for 3 to 4 weeks after the operation.",
      "Have someone stay with you for the first 24 hours, and do not drive during that time.",
      "Use a small pad or panty liner if there is a little mucus discharge.",
    ],
    tryThisWeek: [
      "Ask about benefits and risks.",
      "Plan for someone to stay 24 hours.",
      "Keep poo soft after the operation.",
    ],
    ask: "Which procedure would you recommend for me, and what are the risks?",
    interactive: {
      kind: "flip-cards",
      title: "The options, card by card",
      intro: "Turn each card to see what each option involves.",
      cards: [
        { id: "botox", front: "Botox injection", when: "If creams have not worked", back: "Relaxes the muscle for about 3 months while the fissure heals. Can be repeated." },
        { id: "sphincterotomy", front: "Lateral sphincterotomy", when: "If other treatments fail", back: "A small cut in the inner muscle permanently lowers the pressure. At least 9 in 10 are cured." },
        { id: "flap", front: "Advancement flap", when: "If higher risk of incontinence", back: "Does not cut the sphincter muscle, but is not as effective at healing the fissure." },
        { id: "home", front: "Going home", when: "Usually the same day", back: "Stay with a relative or friend for the first 24 hours. Many return to work after a few days." },
      ],
    },
    sources: [NHS_FISSURE, CUH, MKUH_FISSURE, GIRFT_BOTOX, NCIC, YORK, MKUH_SPHINCT, GUTS_PERIANAL],
    quiz: {
      question: "About how long does the effect of a Botox injection last?",
      options: [{ text: "About 3 months", right: true }, { text: "For life" }, { text: "About a day" }],
      why: "The effect lasts about 3 months, and the injection can be repeated.",
    },
  },
  {
    id: "fis-toilet",
    kicker: "Living well",
    question: "What toilet habits help a fissure?",
    hook: "Go when you need to, do not strain, and be gentle afterwards. Small habits take pressure off the tear.",
    short: "Going when you feel the urge, not straining, not sitting on the toilet for too long, and raising your knees on a low stool all make pooing easier. Afterwards, gentle washing with water and patting dry keeps the area clean without irritating it.",
    sections: [
      {
        heading: "Go when you need to",
        paragraphs: [
          "Do not ignore the urge to poo. This can cause your poo to dry out and become harder to pass.",
          "Pain often puts people off going for a poo, but ignoring this urge will cause the poo to get harder and make the problem worse.",
        ],
      },
      {
        heading: "No straining, no lingering",
        paragraphs: [
          "Do not strain to pass a poo, as this will damage the lining of the anus. Avoid sitting on the toilet for too long; University Hospitals Plymouth suggests limiting the time to 5 minutes.",
          "Keep to a regular time and place, and give yourself plenty of time to use the toilet.",
        ],
      },
      {
        heading: "A better position",
        paragraphs: [
          "To make it easier to poo, try resting your feet on a low stool while going to the toilet. If possible, raise your knees above your hips.",
        ],
      },
      {
        heading: "Gentle cleaning",
        paragraphs: [
          "Keep your bottom clean and dry. Wipe your bottom with damp toilet paper, or wash the area carefully with water after you go to the toilet and pat dry.",
          "Do not use soap or fragranced products, such as shower gels, around your anus, as they may irritate the skin. Antiseptics and talc are not recommended.",
        ],
      },
      {
        heading: "Moving more",
        paragraphs: [
          "Regular exercise will help with having regular bowel movements. A daily walk or run can help you poo more regularly.",
        ],
      },
    ],
    helps: [
      "Go to the toilet when you feel the urge.",
      "Do not strain, and limit your time on the toilet to about 5 minutes.",
      "Rest your feet on a low stool so your knees are above your hips.",
      "Wipe with damp toilet paper, or wash with water and pat dry.",
      "Do not use soap or fragranced products around your anus.",
      "Take a daily walk to help you poo more regularly.",
    ],
    tryThisWeek: [
      "Go when you feel the urge.",
      "Try a low stool under your feet.",
      "Wipe with damp toilet paper.",
    ],
    ask: "Is there anything about my toilet routine I should change?",
    interactive: {
      kind: "timeline",
      title: "A gentler trip to the toilet",
      steps: [
        { id: "urge", when: "Step 1", title: "Go when you feel the urge", points: ["Putting it off makes poo harder", "Keep to a regular time and place"] },
        { id: "position", when: "Step 2", title: "Get into position", points: ["Feet on a low stool", "Knees above your hips, if possible"] },
        { id: "strain", when: "Step 3", title: "No straining", points: ["Straining can damage the lining of the anus", "Do not sit on the toilet for too long"] },
        { id: "clean", when: "Step 4", title: "Clean gently", points: ["Damp toilet paper, or water and pat dry", "No soap or fragranced products"] },
        { id: "after", when: "Afterwards", title: "Soothe", points: ["A warm, shallow bath can ease the pain"] },
      ],
    },
    sources: [NHS_FISSURE, PLYMOUTH, NHS_CONSTIPATION, NHS_ANAL_PAIN, NHS_DILT_CQ],
    quiz: {
      question: "Which position can make it easier to poo?",
      options: [{ text: "Feet on a low stool, knees above hips", right: true }, { text: "Leaning far back with legs straight" }, { text: "Standing up" }],
      why: "To make it easier to poo, try resting your feet on a low stool while going to the toilet. If possible, raise your knees above your hips.",
    },
  },
  {
    id: "fis-coming-back",
    kicker: "Living well",
    question: "How can I stop a fissure coming back?",
    hook: "Once healed, a fissure can return. The habits that helped it heal are the ones that keep it away.",
    short: "After one fissure, there is a higher than average chance of another. The best protection is to avoid constipation by keeping up fibre, fluids and activity, and not ignoring the urge to poo, even after it has healed. If one does come back, a further course of cream or surgery can help.",
    sections: [
      {
        heading: "A higher chance of another",
        paragraphs: [
          "If you have had one anal fissure, after it has healed you have a higher than average chance of having another one at some time in the future.",
          "Some people seem prone to recurring anal fissures. It is thought that they have a higher than average pressure in the muscle around the anus, so they are more likely to tear the rim of the anus if it is stretched.",
        ],
      },
      {
        heading: "Keep going with the habits",
        paragraphs: [
          "The best way to avoid a further fissure is not to become constipated, with a high fibre diet, plenty of fluid and not ignoring the urge to poo.",
          "Keep up the diet and lifestyle measures after the fissure has healed. Coming back is common, especially if these measures are not kept up.",
        ],
      },
      {
        heading: "How often it returns",
        paragraphs: [
          "Up to 3 in 10 people who are successfully treated with GTN ointment will have one or more recurrences at some time in the future. Up to half of people who have a chronic fissure successfully treated with diltiazem cream will have another.",
          "A further course of cream can be used to help heal any future fissure. Surgery may be an option if you have frequent recurrences.",
        ],
      },
      {
        heading: "Everyday prevention",
        paragraphs: [
          "Include plenty of fibre in your diet, such as fruit and vegetables and wholemeal bread, pasta and rice. Adults should aim to eat at least 30g of fibre a day.",
          "Stay well hydrated by drinking plenty of fluids, and exercise regularly: try to do at least 150 minutes of moderate-intensity activity a week.",
        ],
      },
    ],
    helps: [
      "Keep eating a high fibre diet after the fissure has healed.",
      "Stay well hydrated by drinking plenty of fluids.",
      "Do not ignore the urge to poo.",
      "Exercise regularly, aiming for at least 150 minutes of moderate activity a week.",
      "If a fissure comes back, ask your doctor about a further course of cream.",
    ],
    tryThisWeek: [
      "Keep up fibre after healing.",
      "Drink plenty each day.",
      "Ask about more cream if it returns.",
    ],
    ask: "What can I keep doing to stop it coming back, and what happens if it does?",
    interactive: {
      kind: "scenarios",
      title: "Keeping it away",
      scenarios: [
        {
          id: "healed",
          situation: "Your fissure has healed and you feel fine.",
          options: [{ text: "Keep up the fibre, fluids and activity", best: true }, { text: "Go back to how you ate before" }],
          why: "Keep up the diet and lifestyle measures after the fissure has healed. Coming back is common if they are not kept up.",
        },
        {
          id: "busy",
          situation: "You feel the urge to poo during a busy day.",
          options: [{ text: "Go when you feel the urge", best: true }, { text: "Hold on until the evening" }],
          why: "Do not ignore the urge to poo. This can cause your poo to dry out and become harder to pass.",
        },
        {
          id: "returns",
          situation: "The sharp pain comes back months later.",
          options: [{ text: "See your doctor about another course of cream", best: true }, { text: "Use leftover cream from someone else" }],
          why: "A further course of cream can be used to help heal any future fissure. Surgery may be an option if you have frequent recurrences.",
        },
      ],
    },
    sources: [MKUH_FISSURE, PLYMOUTH, NCIC, CKS_MGMT, CKS_PROG, NHS_DILT_CQ, NHS_FIBRE],
    quiz: {
      question: "When is it worth keeping up fibre and fluids?",
      options: [{ text: "Even after the fissure has healed", right: true }, { text: "Only while it hurts" }, { text: "Only on the day you see the GP" }],
      why: "Keep up the diet and lifestyle measures after the fissure has healed. Coming back is common, especially if these measures are not kept up.",
    },
  },
  {
    id: "fis-long-lasting",
    kicker: "Treatment",
    question: "What happens if a fissure does not heal?",
    hook: "Some fissures linger past six weeks. There is still a clear path: more time, the right cream, then a specialist.",
    short: "A fissure that lasts more than six weeks is called chronic. Many still heal with soft poo and a cream that relaxes the muscle around the anus. If one has not healed after 6 to 8 weeks of treatment, a GP may suggest a second course or a referral to a surgeon, who can offer other treatments.",
    sections: [
      {
        heading: "When it becomes chronic",
        paragraphs: [
          "A fissure lasting more than six weeks is called a chronic, or persistent, anal fissure, and needs further treatment.",
          "A NICE summary for GPs says around half of new fissures heal within 6 to 8 weeks of simple treatment, such as diet changes and pain relief. About 40% of people with a new fissure go on to have a chronic one.",
        ],
      },
      {
        heading: "Why some do not heal",
        paragraphs: [
          "It is thought that the muscle pressure around the anus is quite high in people with a chronic anal fissure. If the pressure is high, the blood supply to the anus is reduced, which can affect how well the tear heals.",
          "A skin tag can develop at the site of the fissure if it is long-standing.",
        ],
      },
      {
        heading: "Treatment steps",
        paragraphs: [
          "There is a reasonable chance that a chronic fissure will heal without any treatment, or just with warm baths and pain relief. Treatment aims to keep poo soft and relax the muscle around the anus.",
          "If it has not healed after 6 to 8 weeks of cream, a GP may suggest a second course, or a referral to a general or colorectal surgeon. Specialist treatments include diltiazem cream, a Botox injection and surgery.",
        ],
      },
      {
        heading: "Possible complications",
        paragraphs: [
          "Complications include a fissure that does not heal or keeps coming back, an infection or abscess, and an anal fistula. Avoiding the toilet to prevent pain may make constipation worse.",
          "A chronic or recurring fissure can reduce quality of life because of pain.",
        ],
      },
      {
        heading: "Checking for other causes",
        paragraphs: [
          "Further investigations are carried out to find the cause of a chronic fissure. If a fissure looks unusual, or scarring or skin tags develop, a GP may refer you to hospital for further checks.",
        ],
      },
    ],
    helps: [
      "Use the cream for the full course before deciding it has not worked.",
      "Keep your poo soft and avoid constipation.",
      "Go back to your GP if the fissure has not healed after 6 to 8 weeks of treatment.",
      "Ask about a referral to a colorectal surgeon if creams have not helped.",
      "Do not put off going to the toilet, even if it hurts.",
    ],
    tryThisWeek: [
      "Finish the full course of cream.",
      "Book a review at 6 to 8 weeks.",
      "Don't put off the toilet.",
    ],
    ask: "If my fissure has not healed, what are the next steps for me?",
    interactive: {
      kind: "timeline",
      title: "If it is slow to heal",
      steps: [
        { id: "start", when: "First days", title: "Self-care", points: ["Soft poo, fluids and fibre", "Painkillers and warm baths"] },
        { id: "cream", when: "After a week or more", title: "A cream from the GP", points: ["Used twice a day for 6 to 8 weeks", "Relaxes the muscle around the anus"] },
        { id: "review", when: "At 6 to 8 weeks", title: "A review", points: ["A second course of cream", "Or a referral to a surgeon"] },
        { id: "specialist", when: "If still not healed", title: "Specialist care", points: ["Diltiazem cream", "A Botox injection", "Surgery"] },
      ],
    },
    sources: [MKUH_FISSURE, CKS_PROG, CKS_MGMT, CUH, CKS_COMP, NHS_FISSURE, PLYMOUTH],
    quiz: {
      question: "What is a fissure that lasts more than six weeks called?",
      options: [{ text: "A chronic anal fissure", right: true }, { text: "An acute anal fissure" }, { text: "A pile" }],
      why: "A fissure lasting more than six weeks is called a chronic, or persistent, anal fissure, and needs further treatment.",
    },
  },
  {
    id: "fis-urgent",
    kicker: "Getting help",
    question: "When should I get help for a fissure?",
    hook: "Most fissures are not serious, but some signs need a GP, NHS 111 or 999. Knowing which is which helps.",
    short: "See a GP if a fissure is getting worse or not better after 7 days, or if you have blood in your poo. Ask for an urgent GP appointment or get help from NHS 111 for severe pain with a high temperature, or black or dark red poo. Go to A&E or call 999 for non-stop or heavy bleeding.",
    sections: [
      {
        heading: "See a GP",
        paragraphs: [
          "See a GP if you have symptoms of an anal fissure and they're getting worse, or there's no improvement after 7 days of treating it yourself.",
          "Also see a GP if your anal pain is severe, the pain does not improve after a few days, or you have blood in your poo or bleeding from your bottom.",
        ],
      },
      {
        heading: "Bleeding that needs checking",
        paragraphs: [
          "See a GP if you've had blood in your poo for 3 weeks, your poo has been softer, thinner or longer than normal for 3 weeks, you've lost weight for no reason, or you've been more tired than usual.",
          "Bright red streaks on the outside of poo might be caused by an anal fissure or piles. Deeper red, or maroon, poo might be a sign of bleeding further up inside the large bowel. Contact your doctor if you have either of these colours of poo.",
        ],
      },
      {
        heading: "Urgent help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have severe anal pain and you have a high temperature, or feel hot, cold or shivery. Do the same if your poo is black or dark red, or you have bloody diarrhoea.",
          "An abscess is a collection of pus around the bottom that causes extreme pain and tenderness, and can be red, hot and swollen. People may feel unwell with fevers and chills. Guts UK says to seek medical advice straight away, as this could be early symptoms of sepsis.",
        ],
      },
      {
        heading: "Call 999 or go to A&E",
        paragraphs: [
          "Go to A&E or call 999 if you're bleeding non-stop from your bottom, or there is a lot of blood, for example the toilet water turns red or you see large blood clots.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance. Bring any medicines you take with you.",
        ],
      },
      {
        heading: "No need for embarrassment",
        paragraphs: [
          "Do not feel embarrassed to see a GP. Anal pain is a common problem that they're used to treating.",
        ],
      },
    ],
    helps: [
      "See a GP if symptoms are getting worse, or there's no improvement after 7 days of treating it yourself.",
      "See a GP if you've had blood in your poo for 3 weeks.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have severe anal pain with a high temperature, or feel hot, cold or shivery.",
      "Ask for an urgent GP appointment or get help from NHS 111 if your poo is black or dark red.",
      "Go to A&E or call 999 if you're bleeding non-stop or there is a lot of blood.",
      "Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
    ],
    tryThisWeek: [
      "See a GP if no better after 7 days.",
      "Call 111 for severe pain with a fever.",
      "Call 999 for heavy, non-stop bleeding.",
    ],
    ask: "Which signs mean I should get urgent help rather than wait for an appointment?",
    interactive: {
      kind: "scenarios",
      title: "Who to contact",
      scenarios: [
        {
          id: "seven-days",
          situation: "A week of self-care, and the pain is no better.",
          options: [{ text: "See a GP", best: true }, { text: "Call 999" }, { text: "Wait another month" }],
          why: "See a GP if symptoms are getting worse, or there's no improvement after 7 days of treating it yourself.",
        },
        {
          id: "fever",
          situation: "Severe pain in your bottom, and you feel hot and shivery.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait for a routine appointment" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you have severe anal pain and a high temperature, or feel hot, cold or shivery.",
        },
        {
          id: "red-water",
          situation: "The toilet water turns red and you see large clots.",
          options: [{ text: "Go to A&E or call 999", best: true }, { text: "Book a GP appointment next week" }],
          why: "Go to A&E or call 999 if there is a lot of blood. Do not drive to A&E: ask someone to drive you or call 999.",
        },
        {
          id: "black",
          situation: "Your poo is black and you do not take iron tablets.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Ignore it" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if your poo is black or dark red.",
        },
      ],
    },
    sources: [NHS_FISSURE, NHS_ANAL_PAIN, NHS_BLEEDING, GUTS_PERIANAL, GUTS_POO],
    quiz: {
      question: "What should you do if the toilet water turns red with blood?",
      options: [{ text: "Go to A&E or call 999", right: true }, { text: "Wait to see if it stops next week" }, { text: "Use a numbing cream" }],
      why: "Go to A&E or call 999 if you're bleeding non-stop from your bottom, or there is a lot of blood, for example the toilet water turns red or you see large blood clots.",
    },
  },
];
