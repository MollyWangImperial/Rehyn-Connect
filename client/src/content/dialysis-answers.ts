import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Kidney failure and dialysis page's pieces
// (content/library-conditions/digestion-more.ts). Every sentence was written from wording checked on
// 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do
// not say. Most of it comes from the NHS, Kidney Care UK, the National Kidney Federation and NICE.
// General information only; it never replaces what a person's own GP or kidney team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const kcuk = (label: string, path: string): LearnSource => ({ label: `Kidney Care UK: ${label}`, url: `https://kidneycareuk.org/${path}` });
const nkf = (label: string, path: string): LearnSource => ({ label: `National Kidney Federation: ${label}`, url: `https://www.kidney.org.uk/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_WHY = nhs("Why dialysis is done", "tests-and-treatments/dialysis/why-its-done/");
const NHS_HOW = nhs("How dialysis is done", "tests-and-treatments/dialysis/how-its-done/");
const NHS_COMP = nhs("Complications of dialysis", "tests-and-treatments/dialysis/complications/");
const NHS_CKD_TREAT = nhs("Treatment of chronic kidney disease", "conditions/kidney-disease/treatment/");
const NHS_CKD_SYMPTOMS = nhs("Symptoms of chronic kidney disease", "conditions/kidney-disease/symptoms/");
const NHS_CKD_DIAG = nhs("Diagnosis of chronic kidney disease", "conditions/kidney-disease/diagnosis/");
const NHS_PERITONITIS = nhs("Peritonitis", "conditions/peritonitis/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_URGENT_MH = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_HTCS = nhs("Healthcare Travel Costs Scheme (HTCS)", "nhs-services/help-with-health-costs/healthcare-travel-costs-scheme-htcs/");

const KCUK_FAILURE = kcuk("Kidney failure", "kidney-disease-information/kidney-conditions/patient-info-kidney-failure/");
const KCUK_STAGE5 = kcuk("Stage 5 (CKD5)", "kidney-disease-information/stages-of-kidney-disease/stage-5/");
const KCUK_HD = kcuk("Haemodialysis (HD)", "kidney-disease-information/treatments/haemodialysis/patient-info-haemodialysis-hd/");
const KCUK_HD_WELL = kcuk("Your health and wellbeing on haemodialysis", "kidney-disease-information/treatments/haemodialysis/patient-info-your-health-and-wellbeing-on-haemodialysis/");
const KCUK_PD = kcuk("Peritoneal dialysis (PD)", "kidney-disease-information/treatments/patient-info-peritoneal-dialysis-pd/");
const KCUK_FISTULA = kcuk("Haemodialysis access with an arteriovenous fistula", "kidney-disease-information/treatments/haemodialysis/vascular-access-for-dialysis/patient-info-haemodialysis-access-with-an-arteriovenous-fistula/");
const KCUK_LINE = kcuk("Haemodialysis access with a tunnelled line", "kidney-disease-information/treatments/haemodialysis/patient-info-haemodialysis-hd/patient-info-haemodialysis-access-with-a-tunnelled-line/");
const KCUK_BLEEDS = kcuk("Controlling bleeds from a fistula or graft", "kidney-disease-information/treatments/haemodialysis/vascular-access-for-dialysis/controlling-bleeds-from-a-fistula-or-graft/");
const KCUK_CKM = kcuk("Conservative kidney management", "kidney-disease-information/treatments/choosing-conservative-kidney-management/");
const KCUK_FLUID = kcuk("Managing your fluid levels", "get-support/healthy-diet-support/patient-info-managing-your-fluid-levels/");
const KCUK_POTASSIUM = kcuk("Lowering your potassium levels", "get-support/healthy-diet-support/patient-info-lowering-your-potassium-levels/");
const KCUK_MED_DIALYSIS = kcuk("Medicines for people having dialysis", "kidney-disease-information/treatments/medication-for-kidney-disease/patient-info-medicines-for-people-having-dialysis/");
const KCUK_FATIGUE = kcuk("Fatigue (tiredness)", "kidney-disease-information/living-with-kidney-disease/managing-symptoms/patient-info-fatigue-tiredness/");
const KCUK_COUNSELLING = kcuk("Counselling and emotional support service", "get-support/counselling-and-support-service/");
const KCUK_EMPLOYMENT = kcuk("Employment rights", "kidney-disease-information/living-with-kidney-disease/patient-info-employment-rights/");
const KCUK_DAFB = kcuk("Dialysis away from base (DAFB)", "kidney-disease-information/living-with-kidney-disease/travelling-with-ckd/patient-info-dialysis-away-from-base-dafb/");
const KCUK_BENEFITS = kcuk("Welfare benefits and financial support", "get-support/cost-of-living/welfare-benefits-and-financial-support/");
const KCUK_GRANTS = kcuk("Patient grants", "get-support/patient-grants/");
const KCUK_HOLIDAY_GRANTS = kcuk("Holiday and respite break grants", "get-support/holiday-and-respite-break-grants/");
const KCUK_SUPPORT_LINE = kcuk("Support Line", "get-support/kidney-care-uk-support-line/");

const NKF_HD = nkf("Haemodialysis", "introduction-to-haemodialysis");
const NKF_PD = nkf("Peritoneal dialysis", "what-is-peritoneal-dialysis");
const NKF_HOME = nkf("Home dialysis: understanding the benefits", "home-dialysis-the-advantages");
const NKF_BONES = nkf("Bones, calcium, phosphate and PTH in kidney failure", "bones-calcium-phosphate-and-pth-in-kidney-failure");
const NKF_EMPLOYMENT = nkf("Kidney patients and employment", "kidney-patients-and-employment");
const NKF_EMOTIONAL = nkf("The emotional impact of CKD", "the-emotional-impact-of-ckd");

const NICE_NG107: LearnSource = { label: "NICE: Renal replacement therapy and conservative management (NG107), recommendations", url: "https://www.nice.org.uk/guidance/ng107/chapter/Recommendations" };

const GOV_ATW = gov("Access to Work", "access-to-work");
const GOV_ATW_ELIGIBILITY = gov("Access to Work: eligibility", "access-to-work/eligibility");

export const dialysisAnswers: LearnArticle[] = [
  {
    id: "kfd-what-it-is",
    kicker: "Understanding",
    question: "What does kidney failure actually mean?",
    hook: "The last stage of kidney disease, when the kidneys can no longer keep the body well on their own. It usually comes slowly, with time to plan.",
    short: "Kidney failure is stage 5 of chronic kidney disease, when the eGFR is below 15ml/min and the kidneys have stopped working or are close to stopping. Most people then need dialysis or a kidney transplant, and some choose supportive care instead. It usually happens gradually, so there should be time to plan.",
    sections: [
      {
        heading: "When the kidneys stop",
        paragraphs: [
          "Kidney failure is the stage of chronic kidney disease where the kidneys have stopped working, or are close to stopping. It is also called end-stage kidney disease, or established renal failure.",
          "It is stage 5 of chronic kidney disease, when the eGFR is below 15ml/min. The NHS says this means the kidneys have lost almost all of their function.",
        ],
      },
      {
        heading: "Not everyone gets here",
        paragraphs: [
          "For most people with chronic kidney disease, there is only a mild or moderate drop in kidney function, with few symptoms. Kidney Care UK says around 10% of people with CKD may reach the stage where the kidneys can no longer keep them healthy.",
          "When the kidneys do stop working, this usually happens gradually, so there should be time to plan the next stage of treatment.",
        ],
      },
      {
        heading: "How it can feel",
        paragraphs: [
          "Symptoms can include tiredness, weight loss and poor appetite, swollen ankles, feet or hands, shortness of breath, itchy skin, muscle cramps, feeling sick and headaches.",
          "At this stage the kidneys have stopped filtering waste and fluid well, so people are likely to have health issues such as anaemia, high blood pressure and a build-up of acid in the body. Waste products that build up can make you very ill.",
        ],
      },
      {
        heading: "What happens next",
        paragraphs: [
          "Most people need renal replacement therapy, which means dialysis to clean the blood, or a kidney transplant. Some people, often older or frailer, prefer supportive care, with no dialysis or transplant.",
          "You may also be prescribed medicines and a kidney-friendly diet, which may limit fluids, salt, potassium and phosphate. Kidney Care UK says it is never too late to review your choice of care.",
        ],
      },
    ],
    helps: [
      "Find out as much as you can about the treatment choices available to you locally.",
      "Get to know your kidney care team, as they are best placed to help you choose the treatment that suits your life.",
      "Plan your personal care plan with your kidney team: it lists your choices and the stages of your care.",
      "See a GP if you have persistent or worrying symptoms that you think could be caused by kidney disease.",
    ],
    tryThisWeek: [
      "Ask what choices exist locally.",
      "Get to know your kidney team.",
      "Ask about your care plan.",
    ],
    ask: "What stage is my kidney disease, and when should we start planning treatment?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick any you have noticed. They can be signs of kidney failure, though less serious conditions can cause them too.",
      signs: [
        "Tiredness",
        "Weight loss or poor appetite",
        "Swollen ankles, feet or hands",
        "Shortness of breath",
        "Itchy skin",
        "Muscle cramps",
        "Feeling sick",
        "Headaches",
        "Difficulty sleeping",
      ],
      after: "Tell your kidney team or GP about the ones you ticked, so they can find the cause.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [KCUK_STAGE5, NHS_CKD_DIAG, NHS_CKD_SYMPTOMS, KCUK_FAILURE, NHS_WHY, NHS_CKD_TREAT],
    quiz: {
      question: "Which eGFR marks stage 5, kidney failure?",
      options: [{ text: "Below 15ml/min", right: true }, { text: "Below 60ml/min" }, { text: "Below 90ml/min" }],
      why: "It is stage 5 of chronic kidney disease, when the eGFR is below 15ml/min.",
    },
  },
  {
    id: "kfd-choices",
    kicker: "Understanding",
    question: "What are my choices: dialysis, a transplant or supportive care?",
    hook: "Three paths, none of them right for everyone. The choice depends on your health and on how you want to live.",
    short: "The main choices are a kidney transplant, dialysis at home or in a unit, or supportive care without dialysis. Kidney Care UK says a transplant is the best treatment for most people, but not everyone is suitable. NICE says the decision should be made together with your team, starting at least a year before treatment is likely to be needed, and reviewed regularly.",
    sections: [
      {
        heading: "A personal choice",
        paragraphs: [
          "Everyone's choices are personal, and depend on many things besides kidney disease, such as work, home, family and whether you want to be involved in your own care.",
          "NICE says people likely to need treatment should be offered a choice of dialysis, a transplant or conservative management, decided together with their healthcare team. It says assessment should start at least 1 year before treatment is likely to be needed.",
        ],
      },
      {
        heading: "A kidney transplant",
        paragraphs: [
          "Kidney Care UK says a transplant is the best treatment for most people with established renal failure. It extends life expectancy, improves quality of life and offers freedom from dialysis.",
          "Not everyone is suitable, particularly people with several other medical conditions, or older people. There is a shortage of donors, so you could wait months or years, and may need dialysis while you wait.",
          "One in three kidney transplants in the UK is from a living donor. A transplant before dialysis starts, called a pre-emptive transplant, means dialysis can be avoided altogether.",
        ],
      },
      {
        heading: "Dialysis",
        paragraphs: [
          "In haemodialysis, blood is washed through a machine, at home or in hospital. In peritoneal dialysis, fluid is passed into the tummy up to four times a day, or overnight at home.",
          "NICE says people should be offered a choice of dialysis at home or in a centre. It is usually possible to change your type of dialysis later, after some planning.",
        ],
      },
      {
        heading: "Supportive care",
        paragraphs: [
          "Some people choose conservative kidney management, also called supportive care. It means not having dialysis, rather than not having treatment, and it focuses on controlling symptoms and living as well as possible.",
          "NICE says people should have regular chances to review their decision and discuss any change in their preferences. Kidney Care UK says it is never too late to review your choice of care.",
        ],
      },
    ],
    helps: [
      "Find out early what choices are available locally, to give you more time to talk them through with your team and family.",
      "Talk to staff and other patients about what they like and do not like about their treatment.",
      "If someone may be willing to donate a kidney, talk to a transplant coordinator about living donation.",
      "Talk to your doctor about the pros and cons of each type of dialysis.",
      "Involve your family or carers in decisions about your treatment.",
    ],
    tryThisWeek: [
      "Ask what choices exist locally.",
      "Talk to other patients.",
      "Ask about living donation.",
    ],
    ask: "Which of the treatment choices are open to me, and which might suit my life best?",
    interactive: {
      kind: "flip-cards",
      title: "The choices, card by card",
      intro: "Turn each card to see what each choice involves.",
      cards: [
        { id: "transplant", front: "Kidney transplant", when: "From a living or deceased donor", back: "The best treatment for most people, says Kidney Care UK. It extends life and offers freedom from dialysis." },
        { id: "haemodialysis", front: "Haemodialysis", when: "At home or in hospital", back: "Blood is washed through a machine, usually around four hours, three times a week." },
        { id: "peritoneal", front: "Peritoneal dialysis", when: "Every day, at home", back: "Fluid is passed into your tummy up to four times a day, or overnight by a machine." },
        { id: "supportive", front: "Supportive care", when: "Also called conservative care", back: "No dialysis, but continued care to control symptoms and help you live as well as possible." },
      ],
    },
    sources: [KCUK_FAILURE, NICE_NG107, NHS_CKD_TREAT, KCUK_CKM],
    quiz: {
      question: "When does NICE say assessment for treatment should start?",
      options: [{ text: "At least 1 year before it is likely to be needed", right: true }, { text: "Once the kidneys have stopped" }, { text: "Only after a hospital stay" }],
      why: "It says assessment should start at least 1 year before treatment is likely to be needed.",
    },
  },
  {
    id: "kfd-haemodialysis",
    kicker: "Treatment",
    question: "What happens during haemodialysis?",
    hook: "A machine cleans your blood, usually for about four hours, three times a week, in a unit or at home.",
    short: "In haemodialysis, your blood flows through a machine, is cleaned in a filter, and flows back into your body. Most people have it 3 times a week, for around 4 hours each time, in a hospital or dialysis unit, though some people do it at home. It removes waste and extra fluid, and can ease feeling sick, tired or breathless.",
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "During haemodialysis, a machine is attached to a blood vessel using a thin tube. Your blood flows into the machine, is cleaned through a filter called a dialyser, and flows back into your body.",
          "It removes toxins and extra fluid, which can ease feeling sick, tired or weak, and symptoms such as puffy ankles and shortness of breath. It also helps protect your bones and lower your potassium.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Most people have haemodialysis 3 times a week, with each session lasting around 4 hours. You may need more or less than this, and your team will discuss the right schedule for you.",
          "You are weighed before and after each session, to make sure the right amount of fluid comes off. Your schedule may be adjusted depending on your blood tests, weight, blood pressure and how you are coping.",
        ],
      },
      {
        heading: "Where you have it",
        paragraphs: [
          "You can have it in hospital, in a specialist dialysis unit, or at home. NICE says people should be offered a choice of dialysis at home or in a centre.",
          "The National Kidney Federation says home haemodialysis can give more flexibility, more time with family and friends, and no need to rely on transport. You need training and space for the equipment, and often a partner or carer who is trained too.",
        ],
      },
      {
        heading: "During a session",
        paragraphs: [
          "You usually receive a blood-thinning medicine during haemodialysis, so your blood does not clot in the machine. Many people feel cold, as the machine is set below body temperature, so extra layers or a blanket can help.",
          "Haemodialysis can leave you feeling tired, sick and washed out, and can cause cramps, dizziness and low blood pressure. Talk to your care team if these are a problem, as they may be able to help.",
        ],
      },
    ],
    helps: [
      "Attend all of your haemodialysis sessions, so toxins are regularly removed from your blood.",
      "Keep to your fluid allowance between sessions, which helps them work better.",
      "Ask your dialysis nurse to explain what they are doing, so you understand what is happening and why.",
      "Ask about shared haemodialysis care if you would like to manage parts of your own treatment.",
      "Tell your kidney team if you feel unwell during haemodialysis, as changes to your treatment may help.",
    ],
    tryThisWeek: [
      "Go to every session.",
      "Ask your nurse to explain each step.",
      "Ask about shared care.",
    ],
    ask: "Could I have haemodialysis at home, or take on parts of my own care?",
    interactive: {
      kind: "timeline",
      title: "One haemodialysis session",
      steps: [
        { id: "before", when: "Before", title: "Weighed in", points: ["You are weighed before each session.", "Keeping to your fluid allowance helps it work."] },
        { id: "start", when: "Starting", title: "Connected to the machine", points: ["The machine is attached to a blood vessel by a thin tube.", "A blood thinner stops clotting in the machine."] },
        { id: "during", when: "Around 4 hours", title: "Blood is cleaned", points: ["Blood flows through a filter and back to you.", "Extra layers or a blanket help if you feel cold."] },
        { id: "after", when: "Afterwards", title: "Weighed again", points: ["Checks the right amount of fluid came off.", "You may feel tired or washed out."] },
        { id: "week", when: "3 times a week", title: "The next session", points: ["Most people have 3 sessions a week.", "Your team may adjust your schedule."] },
      ],
    },
    sources: [NHS_HOW, KCUK_HD, KCUK_HD_WELL, NKF_HD, NICE_NG107, NKF_HOME],
    quiz: {
      question: "How often do most people have haemodialysis?",
      options: [{ text: "3 times a week, around 4 hours each", right: true }, { text: "Once a month" }, { text: "For an hour every day" }],
      why: "Most people have haemodialysis 3 times a week, with each session lasting around 4 hours.",
    },
  },
  {
    id: "kfd-peritoneal",
    kicker: "Treatment",
    question: "What is peritoneal dialysis at home like?",
    hook: "Dialysis that happens inside your own body, using the lining of your tummy as the filter, by day or overnight.",
    short: "Peritoneal dialysis uses the lining of your tummy as a filter. Fluid flows in through a soft tube called a catheter, takes in waste and extra water, and is drained out. Most people do it themselves at home every day, either by hand during the day or with a machine overnight.",
    sections: [
      {
        heading: "Dialysis inside your body",
        paragraphs: [
          "Peritoneal dialysis uses the lining inside your tummy, called the peritoneum, as a filter. A fluid called dialysate flows from a bag into your tummy through a soft tube called a catheter.",
          "While it is inside you, the fluid absorbs waste and extra water. It is then drained out, taking them with it, and this is called an exchange.",
        ],
      },
      {
        heading: "Two ways to do it",
        paragraphs: [
          "In continuous ambulatory peritoneal dialysis, or CAPD, you do between one and four exchanges during the day. The fluid takes around 30 to 40 minutes to flow in, and you go about your day until it is drained a few hours later.",
          "In automated peritoneal dialysis, or APD, a machine about the size of a small suitcase does the exchanges overnight while you sleep. NICE says people who choose peritoneal dialysis should be offered either type, if it is medically appropriate.",
        ],
      },
      {
        heading: "Getting started",
        paragraphs: [
          "About 2 weeks before treatment begins, you have a procedure to put the catheter into your tummy. It takes about an hour, under a local or general anaesthetic.",
          "Most people carry out the treatment themselves at home, every day. A nurse teaches you how to do it and how to avoid infection, and supplies of fluid are delivered to your home each month.",
        ],
      },
      {
        heading: "Fitting it into life",
        paragraphs: [
          "You need a cool, clean, dry space for supplies, about the size of a double wardrobe, and a clean, well-lit place with a sink for exchanges. You may need laxatives, as opening your bowels twice a day helps dialysis work well.",
          "The National Kidney Federation says many people on peritoneal dialysis do all or most of the things they did before. It is usually possible to take supplies away for a few days or on holiday, as exchanges can be done anywhere clean with a sink.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Peritoneal dialysis can leave you feeling tired, sick and washed out. Infection can happen where the catheter comes out, or inside the tummy, and the chance of a hernia is higher.",
          "Peritonitis, an infection of the tummy lining, needs treating straight away, as it can lead to sepsis. The NHS says to ask for an urgent GP appointment or get help from NHS 111 if the drained fluid looks cloudier than usual or has white flecks in it.",
        ],
      },
    ],
    helps: [
      "Perform all your exchanges as recommended by your kidney team.",
      "Tell your kidney team if you notice a new lump or swelling.",
      "Plan holidays with your dialysis team, ideally giving at least three months' notice.",
      "Ask whether your kidney unit offers assisted peritoneal dialysis, where a healthcare worker or carer helps with some tasks.",
      "Ask your kidney team which symptoms of infection to look out for, and how to report them.",
    ],
    tryThisWeek: [
      "Do every exchange as planned.",
      "Report any new lump or swelling.",
      "Give three months' notice for trips.",
    ],
    ask: "Would CAPD or APD fit my days better, and is assisted peritoneal dialysis available here?",
    interactive: {
      kind: "scenarios",
      title: "Peritoneal dialysis moments",
      scenarios: [
        {
          id: "cloudy",
          situation: "The fluid you drain out looks cloudier than usual.",
          options: [{ text: "Get an urgent GP appointment or call 111", best: true }, { text: "Wait to see if it clears tomorrow" }],
          why: "The NHS says to ask for an urgent GP appointment or get help from NHS 111 if the drained fluid looks cloudier than usual.",
        },
        {
          id: "lump",
          situation: "You notice a new lump near your belly button.",
          options: [{ text: "Tell your kidney team", best: true }, { text: "Ignore it if it does not hurt" }],
          why: "Hernias can occur by your belly button, near the catheter exit site or in your groin. Tell your kidney team about a new lump or swelling.",
        },
        {
          id: "holiday",
          situation: "You would like a week away by the sea.",
          options: [{ text: "Plan with your team and arrange supplies", best: true }, { text: "Go, and skip exchanges while away" }],
          why: "Plan your travel with your dialysis team in advance, and arrange for dialysis supplies to be delivered to where you are staying.",
        },
        {
          id: "work",
          situation: "Exchanges in the day are hard to fit around work.",
          options: [{ text: "Ask your team about APD overnight", best: true }, { text: "Leave out the daytime exchanges" }],
          why: "APD is done overnight while you sleep. Whichever type you choose, it is important to perform all your exchanges.",
        },
      ],
    },
    sources: [NHS_HOW, KCUK_PD, NKF_PD, NICE_NG107, KCUK_DAFB, NHS_COMP],
    quiz: {
      question: "What does the filtering in peritoneal dialysis?",
      options: [{ text: "The lining inside your tummy", right: true }, { text: "A machine in hospital" }, { text: "Your own kidneys" }],
      why: "Peritoneal dialysis uses the lining inside your tummy, called the peritoneum, as a filter.",
    },
  },
  {
    id: "kfd-access",
    kicker: "Treatment",
    question: "Fistulas, lines and catheters: how does dialysis reach my blood?",
    hook: "Dialysis needs a way in. A fistula in the arm is the usual choice for haemodialysis, and it needs care every day.",
    short: "For haemodialysis, most people have a fistula, an artery joined to a vein in the arm, which needs time to grow stronger before use. A tunnelled line in the chest or neck can be used straight away. Peritoneal dialysis uses a soft catheter in the tummy. Checking your access every day and knowing what to do if it bleeds keeps you safe.",
    sections: [
      {
        heading: "A fistula",
        paragraphs: [
          "A fistula is a special connection in your arm, made by a small operation that joins an artery to a vein. This makes one large, stronger blood vessel that the dialysis needles can use.",
          "It is usually made in the arm you do not write with, by the wrist or elbow, under a local or regional anaesthetic, and the operation lasts about an hour. If your blood vessels are very small or fragile, a piece of tubing called a graft may be used instead.",
        ],
      },
      {
        heading: "Time to mature",
        paragraphs: [
          "A fistula needs time to grow stronger before it can be used. Kidney Care UK says it is usually ready in around 10 weeks, and NICE recommends aiming to make it around 6 months before dialysis is expected to start.",
          "A fistula is usually recommended as the best long-term access. It lets blood flow more quickly, so you get more dialysis in each session, and with no tubes outside the body it lowers the risk of infection and makes it easier to swim, bath or shower.",
        ],
      },
      {
        heading: "Lines and catheters",
        paragraphs: [
          "A tunnelled line is a soft plastic tube put into a large vein in your chest or neck, or occasionally your groin. It can be used straight away, so it is usually recommended when haemodialysis needs to start very soon.",
          "Baths and swimming are not recommended with a tunnelled line, as water raises the risk of infection. For peritoneal dialysis, a soft catheter is put into the tummy about 2 weeks before treatment begins.",
        ],
      },
      {
        heading: "Caring for your fistula",
        paragraphs: [
          "Check your fistula every day for its vibration, called a thrill or buzz, and contact your kidney team straight away if you cannot feel it. Avoid watches, tight clothing, heavy lifting and blood pressure checks on that arm.",
          "Contact your kidney team straight away if your fistula is hot, swollen or painful, or your fingers become cold or painful. Kidney Care UK says raised scabs, growing bumps or shiny skin over the fistula all need urgent review.",
        ],
      },
      {
        heading: "If it bleeds",
        paragraphs: [
          "The NHS says to call 999 if your fistula starts bleeding, as without treatment the bleeding will not stop. Tell the call handler you are bleeding from a haemodialysis fistula.",
          "Kidney Care UK says to press a bottle top, hollow side down, firmly over the bleeding site while you wait for help. If a line bleeds heavily or falls out, press on the insertion site with a clean hand towel and call 999 or go to A&E.",
        ],
      },
    ],
    helps: [
      "Check your fistula's buzz every day, and contact your kidney team straight away if it stops.",
      "Wash your fistula arm every day, and always before dialysis.",
      "Do not wear a watch or bracelet on your fistula arm, and avoid tight clothing.",
      "Order Kidney Care UK's free bottle top keyring, and keep it with you.",
      "Contact your kidney unit immediately if you have a fever, chills or shivering, or redness, swelling or discharge around a line.",
    ],
    tryThisWeek: [
      "Feel for the buzz every day.",
      "Keep your fistula arm clear.",
      "Order a bottle top keyring.",
    ],
    ask: "Which kind of access is best for me, and when should it be made?",
    interactive: {
      kind: "scenarios",
      title: "Looking after your access",
      scenarios: [
        {
          id: "buzz",
          situation: "You cannot feel the usual buzz in your fistula.",
          options: [{ text: "Contact your kidney team straight away", best: true }, { text: "Wait for your next session" }],
          why: "Contact your kidney team straight away if you cannot feel the buzz, as the fistula may be blocked.",
        },
        {
          id: "bleed",
          situation: "Your fistula starts bleeding at home.",
          options: [{ text: "Call 999 and press a bottle top on it", best: true }, { text: "Wait for it to stop on its own" }],
          why: "The NHS says to call 999 if your fistula starts bleeding, as without treatment the bleeding will not stop.",
        },
        {
          id: "blood-pressure",
          situation: "Someone wants to check your blood pressure on your fistula arm.",
          options: [{ text: "Ask them to use the other arm", best: true }, { text: "Let them go ahead" }],
          why: "Avoid having your blood pressure taken from your fistula arm, as this could damage your fistula.",
        },
        {
          id: "line-fever",
          situation: "You have a tunnelled line and feel shivery and feverish.",
          options: [{ text: "Contact your kidney unit immediately", best: true }, { text: "Have a hot bath and rest" }],
          why: "A higher temperature than normal, fever, chills or shivering may be signs of infection. Contact your kidney unit immediately.",
        },
      ],
    },
    sources: [KCUK_FISTULA, KCUK_LINE, NHS_HOW, NICE_NG107, NHS_COMP, KCUK_BLEEDS, KCUK_HD],
    quiz: {
      question: "What should you do if you cannot feel the buzz in your fistula?",
      options: [{ text: "Contact your kidney team straight away", right: true }, { text: "Wait a week" }, { text: "Press on it firmly" }],
      why: "Check your fistula every day for its vibration, called a thrill or buzz, and contact your kidney team straight away if you cannot feel it.",
    },
  },
  {
    id: "kfd-fluid",
    kicker: "Treatment",
    question: "Why is fluid limited on dialysis, and how can I cope with thirst?",
    hook: "Kidneys that make little urine cannot get rid of extra water. A daily allowance, and a few tricks for thirst, keep it in balance.",
    short: "When the kidneys make little urine, extra fluid builds up and can strain the heart and lungs. Your kidney team works out a daily fluid allowance for you, which keeps dialysis working well and helps you feel better. Less salt, small cups and ice cubes can help with thirst.",
    sections: [
      {
        heading: "Why fluid builds up",
        paragraphs: [
          "Healthy kidneys get rid of extra water as urine. When they do not make enough urine, extra fluid builds up in the body, and this is called fluid overload.",
          "It can make your ankles and eyes puffy, and strain the heart and lungs, causing headaches, high blood pressure, breathlessness and chest pain. The NHS says too much fluid can lead to serious problems such as heart failure.",
        ],
      },
      {
        heading: "Your fluid allowance",
        paragraphs: [
          "Most people on haemodialysis need to limit fluid, as each session can only safely remove a limited amount. Your kidney team works out how much you can drink each day, and this is called your fluid allowance.",
          "It depends on your treatment, blood pressure, weight and how much urine you pass, and it can change over time. People on peritoneal dialysis are often asked to limit fluid too, particularly when they start to pass less urine.",
        ],
      },
      {
        heading: "What counts",
        paragraphs: [
          "Any liquid you drink counts, including drinks taken with medicines. Sometimes soup, gravy, yoghurt, custard and jelly are counted too.",
          "Dry weight is your normal weight without any extra fluid. Keeping to your allowance helps you stay at your dry weight, and makes symptoms such as excessive thirst, dizziness, cramps and feeling washed out less likely.",
        ],
      },
      {
        heading: "Managing thirst",
        paragraphs: [
          "Salt makes you thirsty, so flavouring food with herbs instead of salt, and eating fewer salty and processed foods, helps. Avoid salt substitutes that list potassium chloride, such as Lo-Salt.",
          "Small cups, small sips, ice cubes, sugar-free gum or mints, and cold rather than hot drinks can all help. If you have diabetes, high blood sugar can make you more thirsty.",
        ],
      },
    ],
    helps: [
      "Measure your fluid allowance into a jug each morning, and take away the amount of each drink you have.",
      "Measure how much your favourite cup or glass holds, to work out how many drinks you can have.",
      "Spread your drinks through the day, and suck ice cubes, as they last longer than water.",
      "Tell friends and family you are on a fluid allowance, and ask for their support.",
      "Check with your kidney team before cutting down, as reducing fluid when you have not been advised to may cause harm.",
      "If you put on a lot of weight between sessions, talk to your dietitian about ways to drink less.",
    ],
    tryThisWeek: [
      "Track your allowance with a jug.",
      "Measure your favourite cup.",
      "Tell family about your allowance.",
    ],
    ask: "What is my fluid allowance, and what is my dry weight?",
    interactive: {
      kind: "scenarios",
      title: "Everyday fluid moments",
      scenarios: [
        {
          id: "soup",
          situation: "You are having soup for lunch.",
          options: [{ text: "Count it towards your allowance", best: true }, { text: "It is food, so it does not count" }],
          why: "Sometimes soup, gravy, yoghurt, custard and jelly are counted too.",
        },
        {
          id: "salt-substitute",
          situation: "You want a salt substitute to help with thirst.",
          options: [{ text: "Avoid ones with potassium chloride", best: true }, { text: "Use any low-salt brand" }],
          why: "Avoid salt substitutes that list potassium chloride, such as Lo-Salt.",
        },
        {
          id: "thirsty",
          situation: "You feel very thirsty on a warm afternoon.",
          options: [{ text: "Suck an ice cube, or sip a cold drink", best: true }, { text: "Drink a large glass quickly" }],
          why: "Suck ice cubes, as they last longer than water, and take small sips rather than big gulps.",
        },
        {
          id: "same",
          situation: "A friend on dialysis says you should drink what they drink.",
          options: [{ text: "Keep to the allowance your team set", best: true }, { text: "Copy their allowance" }],
          why: "Everyone's fluid allowance is different, even on the same type of treatment. Your kidney team works yours out for you.",
        },
      ],
    },
    sources: [KCUK_FLUID, KCUK_HD_WELL, KCUK_HD, NKF_PD, NHS_COMP, KCUK_MED_DIALYSIS],
    quiz: {
      question: "Which of these counts towards a fluid allowance?",
      options: [{ text: "Drinks, including those with medicines", right: true }, { text: "Only glasses of water" }, { text: "Only hot drinks" }],
      why: "Any liquid you drink counts, including drinks taken with medicines.",
    },
  },
  {
    id: "kfd-food",
    kicker: "Food",
    question: "What can I eat on dialysis?",
    hook: "Advice made for you by a kidney dietitian: often more protein, and less potassium and phosphate, without losing the foods you enjoy.",
    short: "NICE says everyone starting dialysis should be offered a full assessment by a specialist kidney dietitian. Many people are advised to eat more protein and less potassium, phosphate and salt. Simple changes, such as boiling vegetables and taking phosphate binders with meals, can help, but only follow limits your team has given you.",
    sections: [
      {
        heading: "Advice made for you",
        paragraphs: [
          "NICE says people starting dialysis should be offered a full assessment by a specialist kidney dietitian, covering fluid, salt, potassium, phosphate, protein, calories, vitamins and minerals.",
          "Your dietitian may suggest eating more protein and less phosphate, potassium or fluid. NICE says the advice should be looked at again when things change, such as switching to a different type of dialysis.",
        ],
      },
      {
        heading: "Potassium",
        paragraphs: [
          "Your kidneys help control potassium, and both high and low levels in the blood can lead to heart problems. Only follow low-potassium advice if your healthcare team has told you to.",
          "Boiling potatoes and vegetables, then throwing the water away, lowers their potassium. Lower choices include apples, pears, carrots, broccoli, rice and pasta, while bananas, dried fruit, crisps and chocolate are higher.",
        ],
      },
      {
        heading: "Phosphate",
        paragraphs: [
          "The National Kidney Federation says high phosphate happens in most people on dialysis, and can cause itching, which can be severe. Dialysis does not remove phosphate very well, so limiting it in food, and usually medicine, is needed too.",
          "Dairy products, nuts and meat can contain a lot of phosphate. Phosphate binders are tablets that stop your body absorbing phosphate from food, and they are taken with meals.",
          "Meat and fish contain phosphate, but it is important not to limit them too much, as they give you protein. If in doubt, talk to your dietitian.",
        ],
      },
      {
        heading: "On peritoneal dialysis",
        paragraphs: [
          "Many people on peritoneal dialysis can enjoy a normal diet without too many restrictions. The fluid in the tummy can make some people feel bloated and lower their appetite.",
          "Peritoneal dialysis can remove certain vitamins, so you may need vitamin tablets. A kidney dietitian will check whether you need any supplements.",
        ],
      },
    ],
    helps: [
      "Ask for an assessment with a specialist kidney dietitian.",
      "If you have been told to lower potassium, boil potatoes and vegetables and throw the water away.",
      "Avoid salt substitutes that list potassium chloride, such as Lo-Salt.",
      "Take phosphate binders as prescribed, and tell your renal unit honestly if you are unable to.",
      "Take any medicines you have been prescribed to control your potassium levels.",
    ],
    tryThisWeek: [
      "Book time with your dietitian.",
      "Boil and drain vegetables if advised.",
      "Take binders with meals.",
    ],
    ask: "Do I need to change how much potassium, phosphate or protein I eat?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "potatoes",
          situation: "Your team has told you to lower potassium, and you fancy roast potatoes.",
          options: [{ text: "Boil them first, then roast", best: true }, { text: "Roast them straight from raw" }],
          why: "Potatoes that have been par-boiled can then be fried, roasted or added to casseroles. Boiling lets some potassium leak into the water.",
        },
        {
          id: "snack",
          situation: "You want a snack, and have been told to lower potassium.",
          options: [{ text: "A plain biscuit", best: true }, { text: "A bag of crisps" }],
          why: "Plain biscuits are among Kidney Care UK's lower potassium choices; crisps are higher.",
        },
        {
          id: "binders",
          situation: "You have been prescribed phosphate binders.",
          options: [{ text: "Take them with your meals", best: true }, { text: "Take them at bedtime, away from food" }],
          why: "Phosphate binders are tablets that stop your body absorbing phosphate from food, and they are taken with meals.",
        },
        {
          id: "meat",
          situation: "You worry that meat and fish contain phosphate.",
          options: [{ text: "Ask your dietitian before cutting back", best: true }, { text: "Stop eating them altogether" }],
          why: "It is important not to limit them too much, as they give you protein. If in doubt, talk to your dietitian.",
        },
      ],
    },
    sources: [KCUK_HD_WELL, KCUK_HD, KCUK_POTASSIUM, NKF_BONES, NKF_PD, NICE_NG107, KCUK_STAGE5, KCUK_PD],
    quiz: {
      question: "What do phosphate binders do?",
      options: [{ text: "Stop phosphate in food being absorbed", right: true }, { text: "Add phosphate to your blood" }, { text: "Replace dialysis sessions" }],
      why: "Phosphate binders are tablets that stop your body absorbing phosphate from food, and they are taken with meals.",
    },
  },
  {
    id: "kfd-supportive-care",
    kicker: "Treatment",
    question: "What is supportive care without dialysis?",
    hook: "Choosing not to have dialysis is not choosing no care. The kidney team keeps treating symptoms and helps you live well.",
    short: "Conservative kidney management, also called supportive care, aims to keep the kidneys working for as long as possible and to treat symptoms, without dialysis. It still includes regular appointments, medicines and support for you and your family. For some people, especially older people with other health conditions, it can suit their values and the way they want to live.",
    sections: [
      {
        heading: "Not dialysis, but still care",
        paragraphs: [
          "Conservative kidney management, also called conservative or supportive care, aims to keep the kidneys working for as long as possible and to treat symptoms, without dialysis.",
          "Kidney Care UK says it means not doing dialysis, rather than not doing treatment. It still includes regular appointments with the kidney team or GP, symptom control, and advice on diet and lifestyle.",
        ],
      },
      {
        heading: "What it includes",
        paragraphs: [
          "The NHS says you will receive medicines to protect your remaining kidney function, and medicines for symptoms such as feeling out of breath, anaemia, loss of appetite or itchy skin.",
          "It also includes psychological and practical care for you and your family, help to plan home and money affairs, and planning for the end of life. Some people are also referred to a palliative care team, community nurses or a hospice for extra support.",
        ],
      },
      {
        heading: "Who might choose it",
        paragraphs: [
          "Some people are unlikely to benefit from dialysis, or have other serious illnesses, and some do not want to go through dialysis. Kidney Care UK says that for people over 80, or over 65 with other conditions or frailty, the evidence suggests dialysis gives very modest or uncertain benefits.",
          "Dialysis means regular hospital visits, several times a week, with limits on food and fluid. Kidney Care UK says people have the right to choose not to be treated with dialysis.",
        ],
      },
      {
        heading: "Making the decision",
        paragraphs: [
          "It is important to choose a treatment that fits your values and the way you want to live. Family members and carers should be involved, so they understand your wishes and can speak up for them later if needed.",
          "NICE says the decision should be made jointly with your healthcare team, with regular chances to review it. The NHS says supportive care through the kidney unit can still help you live for some time with a good quality of life.",
        ],
      },
    ],
    helps: [
      "Talk to peer supporters about their experience of treatment.",
      "Involve family members and carers in decisions about your treatment.",
      "Ask about the Yorkshire Dialysis and Conservative Care Decision Aid, which sums up things you may want to weigh up.",
      "Make sure you have regular chances to review your decision and talk about any change in your wishes.",
      "Remember that it is never too late to review your choice of care.",
    ],
    tryThisWeek: [
      "Talk to a peer supporter.",
      "Share your wishes with family.",
      "Ask about the decision aid.",
    ],
    ask: "What would supportive care without dialysis look like for me?",
    interactive: {
      kind: "flip-cards",
      title: "What supportive care includes",
      intro: "Turn each card to see one part of the care.",
      cards: [
        { id: "appointments", front: "Regular appointments", when: "With the kidney team or GP", back: "Care carries on: symptom control, and advice on diet and lifestyle." },
        { id: "protect", front: "Protecting the kidneys", when: "For as long as possible", back: "Medicines to protect your remaining kidney function." },
        { id: "symptoms", front: "Medicines for symptoms", when: "Breathlessness, anaemia, itching", back: "Medicines for feeling out of breath, anaemia, loss of appetite or itchy skin." },
        { id: "family", front: "Practical support", when: "For you and your family", back: "Help to plan home and money affairs, and bereavement support for your family." },
        { id: "extra", front: "Extra teams", when: "If needed", back: "Some people are referred to a palliative care team, community nurses or a hospice." },
      ],
    },
    sources: [KCUK_CKM, NHS_CKD_TREAT, NHS_WHY, KCUK_FAILURE, NICE_NG107],
    quiz: {
      question: "What does conservative kidney management mean?",
      options: [{ text: "No dialysis, but continued care", right: true }, { text: "No care at all" }, { text: "Dialysis at home" }],
      why: "Kidney Care UK says it means not doing dialysis, rather than not doing treatment.",
    },
  },
  {
    id: "kfd-work-travel",
    kicker: "Living well",
    question: "Can I keep working and go on holiday on dialysis?",
    hook: "Most people can keep working, with the right adjustments. Holidays need planning, but dialysis can travel with you.",
    short: "The National Kidney Federation says most people on dialysis can carry on working or studying, and the law expects employers to make reasonable adjustments. Access to Work may help with extra costs. Holidays are possible too: your kidney team can arrange dialysis away from base, which is free within the UK, if you give them enough notice.",
    sections: [
      {
        heading: "Work",
        paragraphs: [
          "The National Kidney Federation says that in most cases people on dialysis can continue with their job or studies. Some adjust their working hours, and others fit dialysis into evenings and weekends.",
          "You do not have to tell your employer, as medical information is private. But sharing it means your employer can help with adjustments, such as changing your hours to suit your haemodialysis schedule.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Many people on dialysis fit the definition of disability in the Equality Act 2010. This means your employer has a duty to make reasonable adjustments to support you at work.",
          "Adjustments could include time off for appointments, more breaks, working from home part of the week, lighter duties, or a clean space for peritoneal dialysis.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a health condition or disability. It could give a grant towards things like specialist equipment, or the costs of travelling to work if you cannot use public transport.",
          "You need to be 16 or over, in paid work or about to start, and live and work in England, Scotland or Wales. A grant will not affect your other benefits, and you do not have to pay it back.",
        ],
      },
      {
        heading: "Holidays",
        paragraphs: [
          "You can still travel and go on holiday on dialysis. Away from home, you keep to your usual schedule and have haemodialysis at a local unit, which is called dialysis away from base.",
          "Give your kidney team as much notice as possible: ideally 4 or more weeks within the UK, and at least 3 months for travel abroad. Do not book a holiday abroad before confirming there is somewhere you can dialyse.",
        ],
      },
      {
        heading: "Paying for it",
        paragraphs: [
          "Dialysis away from base in the UK is free, as the NHS covers it. Kidney Care UK Dialysis Freedom is a free service that helps arrange it.",
          "In the EU, a GHIC or EHIC card can cover dialysis at state-run units, though some countries charge a co-payment of as much as 20% of the cost. In countries without a reciprocal agreement, or at private clinics, you pay the full cost, which can be extremely expensive.",
        ],
      },
    ],
    helps: [
      "Talk to your manager or HR department about reasonable adjustments if you are struggling at work.",
      "Check whether you could get an Access to Work grant.",
      "Speak to your kidney team about travel plans as early as possible.",
      "Arrange travel insurance as soon as you book, and never withhold details about your health.",
      "Plan flights around your dialysis, as you should not miss a treatment in order to travel.",
    ],
    tryThisWeek: [
      "Ask HR about adjustments.",
      "Check Access to Work.",
      "Tell your team about trips early.",
    ],
    ask: "How much notice do you need to arrange dialysis away from base for me?",
    interactive: {
      kind: "scenarios",
      title: "Work and travel moments",
      scenarios: [
        {
          id: "booking",
          situation: "You have found a holiday abroad you would love.",
          options: [{ text: "Confirm a dialysis place before booking", best: true }, { text: "Book now and sort dialysis later" }],
          why: "Do not book a holiday abroad before confirming there is somewhere you can dialyse.",
        },
        {
          id: "shifts",
          situation: "Your work shifts clash with your dialysis sessions.",
          options: [{ text: "Ask your employer about changing your hours", best: true }, { text: "Skip some sessions" }],
          why: "Adjustments could include changing your hours to suit your haemodialysis schedule.",
        },
        {
          id: "uk-break",
          situation: "You are planning a week away in the UK.",
          options: [{ text: "Tell your team 4 or more weeks ahead", best: true }, { text: "Ring a unit on the day you arrive" }],
          why: "Give your kidney team as much notice as possible: ideally 4 or more weeks within the UK.",
        },
        {
          id: "flight",
          situation: "Your flight is on one of your dialysis days.",
          options: [{ text: "Ask your team about moving the session", best: true }, { text: "Miss that session" }],
          why: "You should not miss a treatment in order to travel. Your kidney team may be able to rearrange your regular session.",
        },
      ],
    },
    sources: [KCUK_EMPLOYMENT, NKF_EMPLOYMENT, KCUK_HD_WELL, GOV_ATW, GOV_ATW_ELIGIBILITY, KCUK_DAFB, NKF_HD],
    quiz: {
      question: "How much notice is ideal before travelling abroad on dialysis?",
      options: [{ text: "At least 3 months", right: true }, { text: "A day or two" }, { text: "None at all" }],
      why: "Give your kidney team as much notice as possible: ideally 4 or more weeks within the UK, and at least 3 months for travel abroad.",
    },
  },
  {
    id: "kfd-tiredness-mood",
    kicker: "Living well",
    question: "Why am I so tired on dialysis, and how can I look after my mood?",
    hook: "Tiredness and low moods are common with kidney failure. Both can be eased, and you do not have to deal with them alone.",
    short: "Waste in the blood, anaemia, poor sleep and dialysis itself can all cause tiredness, and many people feel washed out after haemodialysis. Telling your team helps, as blood tests can show whether you need more dialysis or treatment for anaemia. Feeling angry, sad or afraid is common, and talking to your team, other patients or a counsellor can help.",
    sections: [
      {
        heading: "Why the tiredness",
        paragraphs: [
          "When the kidneys are not working well, waste builds up in the blood and can make you feel tired and weak. Anaemia, poor sleep, itching and restless legs can add to it.",
          "After haemodialysis, many people feel washed out or drained for a few hours, sometimes longer. This may improve as your body gets used to dialysis.",
        ],
      },
      {
        heading: "What can help",
        paragraphs: [
          "Tell your team if you are very tired, as blood tests can show whether you are getting enough dialysis. Anaemia can be treated with iron supplements or EPO injections.",
          "Completing your full dialysis hours, keeping to your fluid allowance and resting for an hour or two after a session can help. Even a little activity can stop fatigue getting worse, and it is fine to be active only on your better days.",
        ],
      },
      {
        heading: "How it can feel",
        paragraphs: [
          "Starting dialysis is a big change, affecting work, social life and relationships. You may feel angry, sad, afraid or hopeless about the future, and the National Kidney Federation says these are common feelings.",
          "NICE lists anxiety, depression, mood changes and concerns about body image among the symptoms people on dialysis may have. It says your team should ask about your symptoms and explain what may be causing them.",
        ],
      },
      {
        heading: "Talking helps",
        paragraphs: [
          "Talking to your kidney team, family, friends or other patients can help, and many units have a social worker, psychologist or counsellor. Kidney Care UK offers free counselling by phone or video call, and you can apply through its Support Line on 0808 801 0000.",
          "If you have thoughts of hurting yourself, get urgent help from your GP or kidney team, or call NHS 111 and choose the mental health option. You can call Samaritans free, at any time, on 116 123.",
          "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself safe.",
        ],
      },
    ],
    helps: [
      "Tell your healthcare team about symptoms of fatigue, so they can work out the cause.",
      "Rest for an hour or two after haemodialysis, but try not to fall asleep.",
      "Avoid caffeine from lunchtime, and go to bed and get up at the same times each day.",
      "Ask your kidney team about peer support, or other patients they can put you in touch with.",
      "Ask your kidney team about a referral to a counsellor if you are struggling.",
    ],
    tryThisWeek: [
      "Tell your team how tired you are.",
      "Rest after dialysis, without sleeping.",
      "Ask about peer support.",
    ],
    ask: "Could my tiredness be anaemia or not enough dialysis, and is there a counsellor I can see?",
    interactive: {
      kind: "signs",
      title: "How have you been feeling?",
      intro: "Tick any that are true for you most days. Fatigue and low mood can show up in these ways.",
      signs: [
        "Very tired most days",
        "No energy to wash and dress",
        "Finding it hard to concentrate",
        "Feeling anxious, sad or low",
        "Lost interest in things I enjoy",
        "Poor memory",
        "Trouble sleeping",
        "Itching that disturbs sleep",
      ],
      after: "Share these with your kidney team. If you have thoughts of hurting yourself, get urgent help: call NHS 111, or Samaritans on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [KCUK_FATIGUE, KCUK_HD_WELL, NKF_EMOTIONAL, KCUK_COUNSELLING, NHS_URGENT_MH, NICE_NG107, KCUK_HD],
    quiz: {
      question: "What can blood tests show if you are very tired on dialysis?",
      options: [{ text: "Whether you are getting enough dialysis", right: true }, { text: "Your blood group only" }, { text: "Nothing useful" }],
      why: "Tell your team if you are very tired, as blood tests can show whether you are getting enough dialysis.",
    },
  },
  {
    id: "kfd-money",
    kicker: "Living well",
    question: "What help is there with money, transport and practical things?",
    hook: "Benefits, travel refunds, grants and a free support line: help that many people on dialysis do not know they can ask for.",
    short: "Depending on your situation, you may be able to get benefits such as Personal Independence Payment, help with council tax and prescriptions, and help with travel to dialysis. Kidney Care UK gives grants to people with advanced kidney disease on low incomes. A renal social worker, Citizens Advice or Kidney Care UK's free Support Line can help you work out what to claim.",
    sections: [
      {
        heading: "Benefits",
        paragraphs: [
          "Which benefits you can get depends on many things, including how severe your kidney disease is. Support can include help with housing costs, council tax and prescriptions.",
          "Personal Independence Payment helps people with a long-term health condition or disability, is not means-tested and can be paid whether or not you work. Employment and Support Allowance is for people too unwell to work, and Attendance Allowance is for people over 65 with care needs.",
        ],
      },
      {
        heading: "Getting to dialysis",
        paragraphs: [
          "If you have dialysis in hospital or a clinic, ask your healthcare team about help with parking or travel costs. You may also be able to use patient transport services.",
          "Under the NHS Healthcare Travel Costs Scheme, you may be able to claim back reasonable travel costs for specialist NHS treatment if you get certain benefits or have a low income. You may also be eligible for a Blue Badge to help with parking.",
        ],
      },
      {
        heading: "At home, and for carers",
        paragraphs: [
          "If you or someone in your home has home haemodialysis, you may be eligible for the Council Tax Band Deduction Scheme. Your utility company's Priority Services Register is free, and helps make sure you are protected in an emergency.",
          "Carer's Allowance is for people who spend at least 35 hours a week caring for someone with a disability.",
        ],
      },
      {
        heading: "Grants and advice",
        paragraphs: [
          "Kidney Care UK gives grants to people with advanced kidney disease on low incomes, including people on dialysis or supportive care. Grants can help with essential household items, a comfortable chair for home dialysis, or a holiday, and a holiday grant is usually a voucher worth £750.",
          "A renal social worker or Citizens Advice can help with benefits, and Kidney Care UK has a free benefits calculator. Its free Support Line is on 0808 801 0000, Monday to Friday, 9am to 5pm.",
        ],
      },
    ],
    helps: [
      "Use a free benefits calculator to check what you could claim.",
      "Ask your healthcare team about help with parking, travel costs or patient transport.",
      "Keep your travel receipts, and claim back eligible costs within 3 months.",
      "Join your utility company's Priority Services Register.",
      "Ask your renal social worker or kidney team for the letter of support a Kidney Care UK grant needs.",
    ],
    tryThisWeek: [
      "Try a benefits calculator.",
      "Ask about help with transport.",
      "Join the Priority Services Register.",
    ],
    ask: "Can I see a renal social worker about benefits and travel costs?",
    interactive: {
      kind: "flip-cards",
      title: "Help you could ask about",
      intro: "Turn each card to see who it is for and what it does.",
      cards: [
        { id: "pip", front: "Personal Independence Payment", when: "Aged 16 to State Pension age", back: "For a long-term condition that affects daily living or getting around. Not means-tested, and paid in or out of work." },
        { id: "esa", front: "Employment and Support Allowance", when: "If you are too unwell to work", back: "You are assessed on your ability to work. One type depends on your National Insurance contributions." },
        { id: "attendance", front: "Attendance Allowance", when: "Over 65, with care needs", back: "Paid at two rates, depending on whether you need care in the day, or in the day and at night." },
        { id: "travel", front: "Healthcare Travel Costs Scheme", when: "On certain benefits or a low income", back: "A refund of reasonable travel costs for specialist NHS treatment. Claim within 3 months." },
        { id: "carers", front: "Carer's Allowance", when: "Caring 35 hours a week or more", back: "For someone caring for a person with a disability who gets a relevant benefit." },
        { id: "grants", front: "Kidney Care UK grants", when: "Advanced kidney disease, low income", back: "Help with essentials, items for home dialysis, mobility aids or a holiday. A healthcare professional's letter is needed." },
      ],
    },
    sources: [KCUK_BENEFITS, KCUK_HD_WELL, NHS_HTCS, KCUK_GRANTS, NKF_HD, KCUK_SUPPORT_LINE, KCUK_HOLIDAY_GRANTS],
    quiz: {
      question: "Is Personal Independence Payment means-tested?",
      options: [{ text: "No, and it can be paid if you work", right: true }, { text: "Yes, only with no savings" }, { text: "It is only for people over 80" }],
      why: "Personal Independence Payment helps people with a long-term health condition or disability, is not means-tested and can be paid whether or not you work.",
    },
  },
  {
    id: "kfd-urgent",
    kicker: "Living well",
    question: "Which signs on dialysis mean I need help quickly?",
    hook: "A bleeding fistula, signs of infection, cloudy fluid or signs of sepsis: what to do, and who to call.",
    short: "Call 999 if your fistula starts bleeding, as without treatment it will not stop. Ask for an urgent GP appointment or get help from NHS 111 for signs of infection around your access, a high temperature, tummy pain, cloudy dialysis fluid or peeing much less than usual, and tell them you are having dialysis. Call 999 or go to A&E for signs of sepsis.",
    sections: [
      {
        heading: "A bleeding fistula",
        paragraphs: [
          "The NHS says to call 999 if the blood vessel used for treatment, your AV fistula, starts bleeding, as without treatment the bleeding will not stop. Tell the call handler you are bleeding from a haemodialysis fistula.",
          "While you wait, follow your care team's advice. Kidney Care UK says to press a bottle top, hollow side down, firmly over the bleeding site, and to call family, friends or neighbours for help.",
        ],
      },
      {
        heading: "Signs of infection",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if the skin around your fistula or tummy catheter is painful, swollen or a different colour from usual. Do the same if you get a very high temperature, feel hot, cold or shivery, or your heart is beating more quickly than usual.",
          "Tell your GP or 111 that you are having dialysis. If you have a tunnelled line, contact your kidney unit immediately if you have a fever, chills, or redness, swelling or discharge around it.",
        ],
      },
      {
        heading: "On peritoneal dialysis",
        paragraphs: [
          "Get the same urgent help if you have tummy pain or a lump in your tummy, or the fluid that drains out looks cloudier than usual or has white flecks in it. These can be signs of peritonitis, an infection of the tummy lining.",
          "Peritonitis needs to be treated straight away, as it can lead to sepsis. It is treated in hospital, usually with antibiotics into a vein.",
        ],
      },
      {
        heading: "Signs of sepsis",
        paragraphs: [
          "Call 999 or go to A&E if an adult is breathing very fast, is confused or has slurred speech, or has blue, pale or blotchy skin. The same applies to a very high or very low temperature, feeling hot or cold to the touch or shivery, or a rash that does not fade when pressed.",
          "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance.",
        ],
      },
      {
        heading: "Other urgent signs",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you cannot pee or are peeing much less than usual. Contact your kidney team straight away if your fistula's buzz stops, or if it is hot, swollen or painful.",
          "If a tunnelled line bleeds heavily or falls out, press on the insertion site with a clean hand towel and call 999 or go to A&E.",
        ],
      },
    ],
    helps: [
      "Keep a bottle top with you if you have a fistula or graft, and know how to use it.",
      "Tell your GP or NHS 111 that you are having dialysis.",
      "Check your fistula's buzz every day.",
      "Ask your care team which problems to look out for, and what to do if you have an infection or bleeding.",
      "Bring any medicines you take with you to A&E.",
    ],
    tryThisWeek: [
      "Keep a bottle top with you.",
      "Check your fistula's buzz daily.",
      "Ask what problems to look out for.",
    ],
    ask: "Which problems should I look out for, and who do I call, day and night?",
    interactive: {
      kind: "scenarios",
      title: "Who to call",
      scenarios: [
        {
          id: "bleed",
          situation: "Your fistula is bleeding at home and will not stop.",
          options: [{ text: "Call 999 and press a bottle top on it", best: true }, { text: "Ring the unit in the morning" }],
          why: "The NHS says to call 999 if your fistula starts bleeding, as without treatment the bleeding will not stop.",
        },
        {
          id: "cloudy",
          situation: "Your drained fluid is cloudy, with white flecks.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait for your next clinic" }],
          why: "Get urgent help from a GP or NHS 111 if the fluid that drains out looks cloudier than usual or has white flecks in it.",
        },
        {
          id: "sepsis",
          situation: "You feel confused and shivery, and are breathing very fast.",
          options: [{ text: "Call 999, or have someone take you to A&E", best: true }, { text: "Drive yourself to A&E" }],
          why: "Call 999 or go to A&E. Do not drive to A&E: ask someone to drive you, or call 999 and ask for an ambulance.",
        },
        {
          id: "red",
          situation: "The skin around your catheter is painful and red.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait a week to see" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if the skin around your catheter is painful, swollen or a different colour.",
        },
      ],
    },
    sources: [NHS_COMP, NHS_PERITONITIS, NHS_SEPSIS, KCUK_FISTULA, KCUK_LINE, KCUK_BLEEDS],
    quiz: {
      question: "What does the NHS say to do if your fistula starts bleeding?",
      options: [{ text: "Call 999", right: true }, { text: "Wait for it to stop" }, { text: "Book a routine GP appointment" }],
      why: "The NHS says to call 999 if the blood vessel used for treatment, your AV fistula, starts bleeding, as without treatment the bleeding will not stop.",
    },
  },
];
