import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Bladder cancer page's pieces (content/library-conditions/cancer-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from Macmillan Cancer
// Support, Cancer Research UK and the NHS, with Action Bladder Cancer UK, the government's Access to Work page
// and Samaritans where they add something. The answers describe treatment, recovery and living with
// after-effects; there are no survival or life-expectancy figures anywhere. General information only; it never
// replaces what a person's own urology team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });

const NHS_TREAT = nhs("Treatment for bladder cancer", "conditions/bladder-cancer/treatment/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_QUIT = nhs("Quit smoking", "better-health/quit-smoking/");
const NHS_STOP_SERVICES = nhs("NHS stop smoking services help you quit", "live-well/quit-smoking/nhs-stop-smoking-services-help-you-quit/");
const NHS_DEPRESSION = nhs("Depression in adults", "mental-health/conditions/depression-in-adults/overview/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const MAC_BLADDER = mac("Bladder cancer", "bladder-cancer");
const MAC_STAGING = mac("Staging and grading of bladder cancer", "bladder-cancer/staging-and-grading-of-bladder-cancer");
const MAC_CAUSES = mac("Causes and risk factors of bladder cancer", "bladder-cancer/causes-and-risk-factors-of-bladder-cancer");
const MAC_TOILETS = mac("Using public toilets", "bladder-cancer/using-public-toilets");
const MAC_TURBT = mac("Transurethral resection of a bladder tumour (TURBT)", "treatments-and-drugs/transurethral-resection-of-a-bladder-tumour-turbt");
const MAC_BCG = mac("BCG treatment for bladder cancer", "treatments-and-drugs/bcg-treatment-for-bladder-cancer");
const MAC_INTRAVESICAL = mac("Intravesical chemotherapy for bladder cancer", "treatments-and-drugs/intravesical-chemotherapy-for-bladder-cancer");
const MAC_CHEMO = mac("Chemotherapy for bladder cancer", "treatments-and-drugs/chemotherapy-for-bladder-cancer");
const MAC_RADIO = mac("Radical radiotherapy for bladder cancer", "treatments-and-drugs/radical-radiotherapy-for-bladder-cancer");
const MAC_CYSTECTOMY = mac("Cystectomy (removing the bladder)", "treatments-and-drugs/cystectomy-removing-the-bladder");
const MAC_CYSTOSCOPY = mac("Cystoscopy", "diagnostic-tests/cystoscopy");
const MAC_UROSTOMY = mac("Urostomy", "impacts-of-cancer/urostomy");
const MAC_NEOBLADDER = mac("Bladder reconstruction (neobladder)", "impacts-of-cancer/bladder-reconstruction");
const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_BODY = mac("Changes to your appearance and body image", "impacts-of-cancer/changes-to-your-appearance-and-body-image");
const MAC_TRAVEL = mac("Travel", "impacts-of-cancer/travel");
const MAC_TRAVEL_EFFECTS = mac("Travelling with long-term treatment effects", "impacts-of-cancer/travel/long-term-treatment-effects");
const MAC_ADJUSTMENTS = mac("Reasonable adjustments", "impacts-of-cancer/work-and-cancer/reasonable-adjustments");
const MAC_RIGHTS = mac("Cancer and employment rights", "impacts-of-cancer/work-and-cancer/cancer-and-employment-rights");
const MAC_SMOKING = mac("Giving up smoking", "treatment/coping-with-treatment/giving-up-smoking");
const MAC_SEX = mac("Sex and side effects of cancer treatment", "treatment/coping-with-treatment/your-sex-life/sex-and-side-effects-of-cancer-treatment");
const MAC_EMOTIONS = mac("Cancer and your emotions", "treatment/coping-with-treatment/cancer-and-your-emotions");
const MAC_WORRIES = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");

const CRUK_NMIBC = cruk("Non muscle invasive bladder cancer staging", "bladder-cancer/types-stages-grades/non-muscle-invasive");
const CRUK_MIBC = cruk("Muscle invasive bladder cancer staging", "bladder-cancer/types-stages-grades/muscle-invasive");
const CRUK_GRADES = cruk("Grades of bladder cancer", "bladder-cancer/types-stages-grades/grades");
const CRUK_RISKS = cruk("Risks and causes of bladder cancer", "bladder-cancer/risks-causes");
const CRUK_TURBT = cruk("Trans urethral resection of bladder tumour (TURBT)", "bladder-cancer/treatment/non-muscle-invasive/trans-urethral-removal-tumour");
const CRUK_BCG = cruk("BCG into the bladder", "bladder-cancer/treatment/non-muscle-invasive/bcg");
const CRUK_CHEMO_BLADDER = cruk("Chemotherapy into the bladder", "bladder-cancer/treatment/non-muscle-invasive/chemotherapy-bladder");
const CRUK_FOLLOW_UP_EARLY = cruk("Follow up after non muscle invasive bladder cancer treatment", "bladder-cancer/treatment/non-muscle-invasive/follow-up");
const CRUK_FOLLOW_UP = cruk("Follow up after bladder cancer treatment", "bladder-cancer/treatment/invasive/follow-up");
const CRUK_CYSTECTOMY = cruk("Surgery to remove the bladder (cystectomy)", "bladder-cancer/treatment/invasive/surgery/removing-bladder");
const CRUK_AFTER_SURGERY = cruk("After bladder cancer surgery", "bladder-cancer/treatment/invasive/surgery/after-surgery");
const CRUK_PROBLEMS = cruk("Problems after bladder cancer surgery", "bladder-cancer/treatment/invasive/surgery/problems-after");
const CRUK_UROSTOMY = cruk("Urostomy (ileal conduit)", "bladder-cancer/treatment/invasive/surgery/urostomy-ileal-conduit");
const CRUK_RECONSTRUCTION = cruk("Bladder reconstruction (neobladder)", "bladder-cancer/treatment/invasive/surgery/bladder-reconstruction");
const CRUK_LOOKING_AFTER_UROSTOMY = cruk("Looking after your urostomy", "bladder-cancer/living-with/looking-after-urostomy");
const CRUK_NEW_BLADDER = cruk("Looking after your new bladder", "bladder-cancer/living-with/new-bladder");
const CRUK_LIVING_WITH = cruk("Living with a urostomy, urine pouch or new bladder", "bladder-cancer/living-with/stoma-urostomy");
const CRUK_SEX = cruk("Sex and relationships after bladder cancer treatment", "bladder-cancer/living-with/sex-life");
const CRUK_COPING = cruk("Coping and support when you have bladder cancer", "bladder-cancer/living-with/coping");

const ABC_TREATMENTS: LearnSource = { label: "Action Bladder Cancer UK: Treatments", url: "https://actionbladdercanceruk.org/treatments/" };
const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work: get support if you have a disability or health condition", url: "https://www.gov.uk/access-to-work" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const bladderCancerAnswers: LearnArticle[] = [
  {
    id: "blc-what-you-had",
    kicker: "Your treatment",
    question: "What was each part of my bladder cancer treatment for?",
    hook: "An operation through the urethra, medicine put straight into the bladder, or a bigger operation: each treatment had its own job, chosen for your cancer.",
    short: "Surgery is the main treatment for bladder cancer. For early cancer that has not grown into the muscle, it is usually an operation through the urethra called a TURBT, often followed by chemotherapy or BCG put straight into the bladder. When the cancer has grown into the muscle, treatment usually aims to cure it with surgery to remove the bladder or with radical radiotherapy, sometimes with chemotherapy.",
    sections: [
      {
        heading: "Why your plan was yours",
        paragraphs: [
          "The treatment you have depends on the type of cancer, its size, where it is, whether it has spread and your general health. A team of specialists, called a multidisciplinary team or MDT, meets to discuss the best possible treatment for you.",
          "You will have regular check-ups during and after any treatments. If you have any symptoms or side effects that you are worried about, talk to your specialists: you do not need to wait for your next check-up.",
        ],
      },
      {
        heading: "Surgery through the urethra",
        paragraphs: [
          "A TURBT is an operation to remove bladder cancer from the inside of the bladder, through the urethra, so no cut in the skin is needed. It is the main treatment for non-muscle-invasive bladder cancer and is usually the first treatment you have.",
          "The tissue that is removed goes to a laboratory, which tells your doctors the stage and grade of the cancer. The results usually take 2 to 3 weeks and are discussed at an MDT meeting.",
          "Some people have a second TURBT within 6 weeks of the first, usually if the cancer is high risk. This is to make sure the surgeon has removed all the cancer.",
        ],
      },
      {
        heading: "Treatment into the bladder",
        paragraphs: [
          "You usually have a single dose of chemotherapy into the bladder at the end of the operation, or when you return to the ward, within 6 hours. This treats any cancer cells that may have been left behind and reduces the risk of the cancer coming back.",
          "Depending on your risk group, you may then have a course of chemotherapy or BCG, given directly into the bladder through a tube called a catheter. BCG is a type of immunotherapy drug, and if your cancer is low risk you might not need any further treatment.",
        ],
      },
      {
        heading: "When the cancer is in the muscle",
        paragraphs: [
          "If the cancer has spread into or through the muscle layer, treatment usually aims to cure it with a cystectomy or radical radiotherapy. A cystectomy is surgery to remove the bladder and make a new way for you to pass urine, called a urinary diversion.",
          "You may have chemotherapy into a vein before or after the operation, or at the same time as radiotherapy, which is called chemoradiotherapy. Targeted medicines or immunotherapy are sometimes used too, for example if there is a higher chance of the cancer coming back after surgery.",
        ],
      },
      {
        heading: "If you feel unwell during chemotherapy",
        paragraphs: [
          "If you are having chemotherapy into a vein, call your care team now if you have a high temperature, other signs of an infection, or throbbing or cramping pain, swelling and warmth in a leg or arm. Signs of a high temperature include feeling hot, cold, sweaty or shivery.",
          "Also call them now if you have sudden breathlessness, sharp chest pain, or a cough or coughing up blood. These are signs of an infection or blood clot, which may need to be treated quickly, and if you are not sure how to contact your care team, call NHS 111.",
        ],
      },
    ],
    helps: [
      "Ask your specialist team to explain each treatment, its benefits and its side effects.",
      "Talk to your specialists about any symptoms or side effects that worry you; you do not need to wait for your next check-up.",
      "After a TURBT, drink plenty of fluids to help flush out your bladder.",
      "After a TURBT, contact the hospital immediately if the bleeding gets worse, there are clots in your urine, or you have severe pain passing urine.",
      "During chemotherapy, call your care team now about a high temperature or signs of infection, and call NHS 111 if you are not sure how to reach them.",
    ],
    tryThisWeek: [
      "List questions about each treatment.",
      "Drink plenty after a TURBT.",
      "Report worrying side effects now.",
    ],
    ask: "Which treatments did I have, and what was each one for in my case?",
    interactive: {
      kind: "flip-cards",
      title: "Your treatments, card by card",
      intro: "Turn each card to see what each treatment was for.",
      cards: [
        { id: "turbt", front: "TURBT", when: "Usually the first treatment", back: "Removes the cancer from inside the bladder, through the urethra. The tissue shows the stage and grade." },
        { id: "chemo-bladder", front: "Chemotherapy into the bladder", when: "Within 6 hours of a TURBT, or as a course", back: "Treats cancer cells that may be left behind and reduces the risk of the cancer coming back." },
        { id: "bcg", front: "BCG", when: "Usually for high-risk early cancer", back: "An immunotherapy drug put straight into the bladder through a catheter, after a TURBT." },
        { id: "cystectomy", front: "Cystectomy", when: "If the cancer is in the muscle, or high risk", back: "Surgery to remove the bladder and make a new way for you to pass urine." },
        { id: "radiotherapy", front: "Radical radiotherapy", when: "Instead of surgery", back: "High-energy rays destroy cancer cells, sometimes with chemotherapy at the same time." },
        { id: "chemo-vein", front: "Chemotherapy into a vein", when: "Before or after surgery or radiotherapy", back: "Anti-cancer drugs that help reduce the risk of the cancer coming back." },
      ],
    },
    sources: [NHS_TREAT, MAC_BLADDER, MAC_TURBT, CRUK_TURBT, MAC_CHEMO, NHS_CHEMO, ABC_TREATMENTS],
    quiz: {
      question: "What is the main treatment for early bladder cancer that has not grown into the muscle?",
      options: [{ text: "A TURBT, an operation through the urethra", right: true }, { text: "Removing the whole bladder straight away" }, { text: "Radiotherapy only" }],
      why: "It is the main treatment for non-muscle-invasive bladder cancer and is usually the first treatment you have.",
    },
  },
  {
    id: "blc-types",
    kicker: "Your results",
    question: "What do non-muscle-invasive, muscle-invasive, stage and grade mean?",
    hook: "Whether the cancer reached the bladder's muscle layer is the big dividing line. The stage, the grade and the risk group then shaped your treatment.",
    short: "Non-muscle-invasive bladder cancer means the cancer cells are in the inner lining of the bladder, or the connective tissue around it, and have not spread into the muscle layer. Muscle-invasive bladder cancer has spread into or through the muscle layer. The stage, the grade and, for early cancer, the risk group help your doctors plan the best treatment for you.",
    sections: [
      {
        heading: "The bladder and its layers",
        paragraphs: [
          "The bladder is a hollow and muscular organ that collects and stores pee. Bladder cancer is often described by whether the cancer is only in the bladder lining or has spread through the wall of the bladder.",
          "The most common type is called urothelial cancer, also called transitional cell carcinoma. It starts in cells in the bladder lining.",
        ],
      },
      {
        heading: "Non-muscle-invasive bladder cancer",
        paragraphs: [
          "Non-muscle-invasive means the cancer cells are in the inner lining or the connective tissue around it, and have not spread into the muscle layer. It can be staged as carcinoma in situ, Ta or T1.",
          "Carcinoma in situ, or CIS, is a flat tumour in the inner layer of the lining, and it is always classed as high grade. Ta is a mushroom-like growth in the inner layer, and in T1 the tumour has started to grow into the connective tissue beneath the lining.",
        ],
      },
      {
        heading: "Risk groups",
        paragraphs: [
          "Doctors put non-muscle-invasive bladder cancer into 3 risk groups: low, intermediate and high. These describe how likely it is that the cancer will spread further, or come back after treatment.",
          "Your risk group depends on the stage, the grade, whether you have any CIS, how many tumours there are, how wide the tumour is, and whether this is your first diagnosis. Knowing your risk group helps your doctor decide which tests and treatment are best for you.",
        ],
      },
      {
        heading: "Muscle-invasive bladder cancer",
        paragraphs: [
          "Muscle-invasive bladder cancer is staged T2 to T4. In T2 the cancer has grown into the muscle of the bladder wall, in T3 it has grown through the muscle into the fatty tissue around the bladder, and in T4 it has grown outside the bladder into nearby areas.",
          "Locally advanced means the cancer has spread into nearby tissues, such as the prostate, womb or vagina, or to nearby lymph nodes. Advanced, or metastatic, means it has spread to other parts of the body, such as the bones, lungs or liver.",
        ],
      },
      {
        heading: "Grade",
        paragraphs: [
          "The grade describes how much the cancer cells look like normal cells under a microscope. Grade 1 cells look very like normal cells and tend to grow slowly, while grade 3 cells look very abnormal and grow more quickly.",
          "Doctors may also say low grade or high grade, and may combine the stage and grade, as in a TaG1 tumour. Grading helps plan treatment for non-muscle-invasive bladder cancer, but it does not affect treatment decisions for muscle-invasive or advanced cancer.",
          "Information about the grade and stage can be complicated. Your doctor and specialist nurse will explain what these mean for you and answer any questions you have.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or specialist nurse which stage and grade your cancer was and, if it was early, which risk group.",
      "Ask your doctor and specialist nurse what these mean for you; they will answer any questions you have.",
      "If you feel anxious between appointments, get support from family, friends or a support organisation, or call the Macmillan Support Line on 0808 808 00 00.",
    ],
    tryThisWeek: [
      "Ask for your stage and grade.",
      "Ask what they mean for you.",
      "Call Macmillan if you feel anxious.",
    ],
    ask: "What stage, grade and risk group was my bladder cancer, and how did that shape my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "The stages, card by card",
      intro: "Turn each card to see how far the cancer has grown at each stage.",
      cards: [
        { id: "cis", front: "CIS", when: "Non-muscle-invasive", back: "A flat tumour only in the inner layer of the bladder lining. Always classed as high grade." },
        { id: "ta", front: "Ta", when: "Non-muscle-invasive", back: "A mushroom-like growth only in the inner layer of the bladder lining." },
        { id: "t1", front: "T1", when: "Non-muscle-invasive", back: "The tumour has started to grow into the connective tissue beneath the lining." },
        { id: "t2", front: "T2", when: "Muscle-invasive", back: "The cancer has grown into the muscle of the bladder wall." },
        { id: "t3", front: "T3", when: "Muscle-invasive", back: "The cancer has grown through the muscle into the fatty tissue around the bladder." },
        { id: "t4", front: "T4", when: "Muscle-invasive", back: "The cancer has grown outside the bladder into nearby areas, such as the prostate, womb or vagina." },
      ],
    },
    sources: [MAC_BLADDER, MAC_STAGING, CRUK_NMIBC, CRUK_MIBC, CRUK_GRADES],
    quiz: {
      question: "What does non-muscle-invasive mean?",
      options: [{ text: "The cancer has not spread into the muscle layer", right: true }, { text: "The cancer has spread outside the bladder" }, { text: "The bladder has been removed" }],
      why: "Non-muscle-invasive means the cancer cells are in the inner lining or the connective tissue around it, and have not spread into the muscle layer.",
    },
  },
  {
    id: "blc-follow-up",
    kicker: "Follow-up",
    question: "How often will I have a cystoscopy, and what happens at one?",
    hook: "A camera check of the bladder is the key follow-up test. How often you have one depends on your risk, and the gaps usually grow longer.",
    short: "After treatment for bladder cancer you have regular follow-up appointments, usually every few months to start with. The most important follow-up test for early bladder cancer is a cystoscopy, a look inside the bladder with a thin tube that has a camera and light on the end. How often you have one depends on the risk of the cancer coming back, and you can contact your team between appointments.",
    sections: [
      {
        heading: "What follow-up is for",
        paragraphs: [
          "After treatment for bladder cancer, you will have regular follow-up appointments with your cancer doctor or nurse, usually every few months to start with. They ask how you are feeling, whether you have had any symptoms or side effects and if you are worried about anything.",
          "Your check-ups are not just to make sure your cancer is under control. They are also to make sure your treatment allows you to live life as normally as you can, so tell your doctors about any continuing side effects.",
        ],
      },
      {
        heading: "Having a cystoscopy",
        paragraphs: [
          "A cystoscope is a thin tube with a camera and light on the end, used to look at the urethra and the inside of the bladder. After treatment it is used to check how well treatment has worked and that no new cancers are growing in the bladder.",
          "A flexible cystoscopy is usually done under local anaesthetic, so you are awake. A numbing gel is put into the opening of the urethra, the test takes a few minutes, and you may feel some discomfort, but it should not be painful.",
          "Your urine might also be tested, to look at the cells in it for signs of cancer. This is called a urine cytology test.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Your specialist decides how often you have cystoscopies, depending on the risk of your cancer coming back or spreading deeper into the bladder wall. At first, follow-up appointments for early bladder cancer will usually be every 3 to 6 months.",
          "With low risk, you may only need a cystoscopy 3 months after treatment, then after 1 year. With moderate risk, you may have one at 3, 9 and 18 months, then once every year for up to 5 years.",
          "With high risk, you may have a cystoscopy every 3 months for the first 2 years, then every 6 months for the next 2 years. After that you might have one every year.",
        ],
      },
      {
        heading: "After bladder removal or radiotherapy",
        paragraphs: [
          "If you had your bladder removed for early cancer, you usually have CT scans at 6, 12 and 24 months, and blood tests at least once a year to check how well your kidneys are working. If your urethra was not removed, you will have yearly tests to check it, usually for 5 years.",
          "If you had radiotherapy, you will have regular cystoscopies, every 3 months at first but less often over time, for at least 5 years after treatment finishes. These are important because if cancer comes back, you may be able to have surgery to treat it again.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your doctor or specialist nurse if you have any concerns or notice any new symptoms between appointments. You do not have to wait until your next visit.",
          "Many people find their check-ups quite worrying, as a hospital appointment can bring back any anxiety you had about your cancer. It can help to tell someone close to you how you are feeling, and many people find counselling helpful.",
        ],
      },
    ],
    helps: [
      "Contact your doctor or specialist nurse about new symptoms between appointments; you do not have to wait.",
      "Ask your specialist how often you will need a cystoscopy, as this depends on your risk.",
      "Talk to your nurse or doctor about any worries about having a cystoscopy; they will try to make you comfortable.",
      "After a cystoscopy, drink about 2 litres of fluid to help flush out your bladder.",
      "Tell your doctor straight away if burning or blood after a cystoscopy does not go away, or you have a high temperature or smelly or cloudy pee.",
      "Tell someone close to you how you feel about your check-ups, or ask about counselling.",
    ],
    tryThisWeek: [
      "Note new symptoms to report.",
      "Drink plenty after a cystoscopy.",
      "Share check-up worries with someone.",
    ],
    ask: "How often will I have a cystoscopy, and how will that change over time?",
    interactive: {
      kind: "timeline",
      title: "Cystoscopies after early bladder cancer",
      steps: [
        { id: "after", when: "After treatment", title: "Your plan", points: ["Your specialist decides how often, by your risk.", "At first, appointments are usually every 3 to 6 months."] },
        { id: "low", when: "Low risk", title: "Fewer checks", points: ["A cystoscopy at 3 months, then after 1 year.", "After this you might not need to see your doctor again."] },
        { id: "moderate", when: "Moderate risk", title: "Spaced checks", points: ["Cystoscopies at 3, 9 and 18 months.", "Then once every year for up to 5 years."] },
        { id: "high", when: "High risk", title: "Closer checks", points: ["Every 3 months for the first 2 years.", "Then every 6 months for 2 years, then yearly."] },
        { id: "between", when: "Between checks", title: "Report changes", points: ["Contact your doctor or specialist nurse.", "You do not have to wait for your next visit."] },
      ],
    },
    sources: [MAC_BLADDER, CRUK_FOLLOW_UP_EARLY, CRUK_FOLLOW_UP, MAC_CYSTOSCOPY],
    quiz: {
      question: "What decides how often you have a cystoscopy?",
      options: [{ text: "The risk of the cancer coming back", right: true }, { text: "Your age alone" }, { text: "How you felt at your last check" }],
      why: "Your specialist decides how often you have cystoscopies, depending on the risk of your cancer coming back or spreading deeper into the bladder wall.",
    },
  },
  {
    id: "blc-bcg",
    kicker: "Treatment into the bladder",
    question: "What happens during BCG or chemotherapy into the bladder?",
    hook: "The medicine goes straight into the bladder through a thin tube and stays there for an hour or two. A few simple steps afterwards protect you and the people around you.",
    short: "BCG is a vaccine for tuberculosis that is also a main treatment for non-muscle-invasive bladder cancer, put straight into the bladder through a catheter. It is usually given once a week for 6 weeks, and some people then have maintenance treatment. Chemotherapy into the bladder, most often mitomycin C, is given the same way and reduces the risk of the cancer coming back in the bladder lining.",
    sections: [
      {
        heading: "Two treatments into the bladder",
        paragraphs: [
          "BCG, short for Bacillus Calmette-Guérin, is a vaccine for tuberculosis that is also a main treatment for non-muscle-invasive bladder cancer. It seems to make cells of the immune system become very active in the bladder lining, helping to stop the cancer coming back or growing deeper.",
          "Chemotherapy into the bladder, most often a drug called mitomycin C, reduces the risk of the cancer coming back in the bladder lining. You get fewer side effects than with chemotherapy into a vein, because very little of the drug gets into your bloodstream.",
        ],
      },
      {
        heading: "When and how often",
        paragraphs: [
          "Doctors usually suggest BCG for high-risk bladder cancer, and sometimes for intermediate risk. There is usually at least 2 weeks between the TURBT and the start of BCG, to give your bladder enough time to heal.",
          "You usually have BCG once a week for 6 weeks, which is called the induction course. You may then have it every few weeks or months for the next 1 to 3 years, which is called maintenance BCG therapy.",
          "If you have an intermediate risk, you may have chemotherapy into the bladder once a week for about 6 weeks. You may then continue having it once a month for up to a year, as maintenance treatment.",
        ],
      },
      {
        heading: "On the day",
        paragraphs: [
          "You will be asked to limit how much you drink beforehand, so it is easier to keep the medicine in your bladder for the time needed. A nurse checks your urine for infection, and you will not be given treatment if you are feeling unwell or have a urine infection.",
          "A nurse passes a catheter through the urethra into the bladder, slowly puts the medicine in, then usually takes the catheter out. You are asked not to pass urine for 2 hours with BCG, or about an hour with chemotherapy, and you can walk around meanwhile.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "BCG is a live vaccine, so you take some precautions for 6 hours after treatment. Sit down to pass urine, wash your hands and genital area with soap and water afterwards, and put undiluted bleach into the toilet and leave it for 15 minutes before flushing.",
          "After either treatment, try to drink 2 to 3 litres of fluid a day for the first few days to help flush the drug out. Follow your nurse's advice on washing after you pass urine, as it can vary between hospitals.",
          "You are usually advised not to have sex for at least 48 hours after treatment, and your doctor may advise using a condom for a time afterwards to protect a partner. You should use effective contraception during treatment.",
        ],
      },
      {
        heading: "Side effects, and when to call",
        paragraphs: [
          "Side effects of BCG include needing to pass urine often, pain when you pass urine, blood in the urine, and flu-like symptoms such as tiredness, aching and a raised temperature. These should get better in 48 to 72 hours, so tell your doctor straight away if they do not.",
          "Rarely, some BCG gets into your system and causes an infection similar to TB, during or some months after treatment. Contact your doctor immediately if you have fever and chills, joint or muscle pain, sickness, a cough, a rash or extreme tiredness, or a high temperature for more than 48 hours. Do not wait until your next appointment.",
          "Tell any doctor you see that you have had BCG treatment if they do not already know.",
        ],
      },
    ],
    helps: [
      "Follow your nurse's advice on drinking before treatment, and take any water tablets after it.",
      "For 6 hours after BCG, sit down to pass urine, wash your hands and genitals, and use bleach in the toilet as advised.",
      "Drink 2 to 3 litres of fluid a day for the first few days after each treatment.",
      "Tell your doctor or specialist nurse about side effects; they might be able to help ease them.",
      "Contact your doctor immediately about fever, chills or feeling generally unwell after BCG, and do not wait for your next appointment.",
      "After chemotherapy into the bladder, contact the hospital immediately if bleeding gets worse or there are clots in your urine.",
    ],
    tryThisWeek: [
      "Drink plenty after each treatment.",
      "Follow the 6-hour toilet routine.",
      "Report side effects to your nurse.",
    ],
    ask: "Will I have BCG or chemotherapy into the bladder, and for how long?",
    interactive: {
      kind: "signs",
      title: "After BCG: signs to report",
      intro: "Tick any you have. These need your doctor straight away, even months after treatment.",
      signs: ["Side effects lasting more than 48 to 72 hours", "Fever and chills", "A high temperature for more than 48 hours", "Joint or muscle pain", "Feeling sick or vomiting", "A cough or breathlessness", "A skin rash", "Feeling extremely tired", "Painful joints with red, sore eyes"],
      after: "Contact your doctor immediately and do not wait until your next appointment. Tell them you have had BCG treatment.",
      copyHeading: "Signs since my BCG",
    },
    sources: [MAC_BCG, CRUK_BCG, MAC_INTRAVESICAL, CRUK_CHEMO_BLADDER],
    quiz: {
      question: "How long are you asked not to pass urine after BCG goes into the bladder?",
      options: [{ text: "2 hours", right: true }, { text: "10 minutes" }, { text: "A whole day" }],
      why: "You are asked not to pass urine for 2 hours with BCG, or about an hour with chemotherapy, and you can walk around meanwhile.",
    },
  },
  {
    id: "blc-cystectomy",
    kicker: "Bladder removal",
    question: "What happens when the bladder is removed, and how long is recovery?",
    hook: "A cystectomy is a big operation, but people usually cope well with life afterwards. Knowing the steps, and the warning signs, helps.",
    short: "A cystectomy is an operation to remove the bladder, and the surgeon also makes a new way for you to pass urine, called a urinary diversion. It is one of the main treatments for muscle-invasive bladder cancer, and is sometimes offered for high-risk early cancer. You might be in hospital for between 5 and 14 nights, and you are likely to feel very tired for several weeks and sometimes months afterwards.",
    sections: [
      {
        heading: "Why it is done",
        paragraphs: [
          "A cystectomy is one of the main treatments for muscle-invasive or locally advanced bladder cancer, and the aim is to cure the cancer. You may also be offered one for high-risk early cancer, if BCG treatment is not working or the cancer keeps coming back.",
          "Having your bladder removed is major surgery. With help and support from family members, friends, health professionals and support organisations, people usually manage to cope with life after a cystectomy well.",
        ],
      },
      {
        heading: "What is removed",
        paragraphs: [
          "Usually the surgeon removes the whole bladder and nearby lymph nodes, which is called a radical cystectomy. In men the prostate and the glands that store semen are usually removed too, and in women the womb, ovaries and part of the vagina.",
          "The surgeon uses part of your bowel to make another way for your body to collect and pass urine. This may be a urostomy, a new bladder called a neobladder, or an internal pouch that you empty with a catheter.",
          "The operation may be open surgery, through one cut in your tummy, or keyhole surgery through several small cuts, sometimes using a robot. Keyhole surgery may have fewer complications, and you may recover more quickly.",
        ],
      },
      {
        heading: "In hospital",
        paragraphs: [
          "You may wake up in an intensive care or high dependency unit, and you usually move back to the ward within a day or so. At first you will have some tubes, such as a drip, wound drains, and a catheter or thin tubes called stents to drain urine.",
          "It is normal to have some pain and feel sore for the first week or so, and painkillers work best when you take them regularly. Nurses and physiotherapists help you move as soon as possible, with deep breathing and leg exercises to help stop chest infections and blood clots.",
          "How long you are in hospital depends on the operation and how quickly you recover. It can be anything from 5 to 14 days.",
        ],
      },
      {
        heading: "Recovering at home",
        paragraphs: [
          "You will need help when you first go home, and you are likely to feel very tired for several weeks and sometimes months. It helps to do a bit more every day: sit for less time, walk around the house a bit more, then build up to walking outside.",
          "Your surgeon will tell you how soon you can get back to things such as work, driving, shopping, gardening or sport. For a period of time, avoid activities that strain your tummy, such as lifting boxes or hoovering, because of the risk of a hernia.",
          "Your bowel is now shorter, so your poo may be looser or you may go to the toilet more often. It can take a few months or longer to settle, so tell your doctor or specialist nurse if it continues.",
        ],
      },
      {
        heading: "Signs to act on",
        paragraphs: [
          "Tell your nurse or doctor about signs of infection, such as a high temperature, shivering, feeling generally unwell, or a wound that is red, swollen, hot or oozing. If you are unable to talk to your hospital team, tell your GP or out-of-hours service.",
          "Let your doctor or nurse know if an area of your leg is swollen, hot, red or sore. If you have shortness of breath, chest pain, are coughing up blood or feel dizzy at home, contact a doctor immediately, such as your emergency GP service, or call 999 or go to your nearest A&E.",
        ],
      },
    ],
    helps: [
      "Tell the surgical team as soon as possible before your operation if you think you will need help when you go home.",
      "Do the leg and breathing exercises you are taught, and move around as much as you can.",
      "Build up slowly at home, doing a bit more walking every day.",
      "Keep wearing your anti-embolism stockings, and keep having any injections, if you have been told to.",
      "Avoid heavy lifting and straining for as long as your surgeon advises.",
      "Write down your questions before your follow-up appointment, and take someone with you.",
    ],
    tryThisWeek: [
      "Walk a little further each day.",
      "Do your breathing and leg exercises.",
      "Write questions for follow-up.",
    ],
    ask: "Which urinary diversion suits me, and when can I get back to work, driving and lifting?",
    interactive: {
      kind: "timeline",
      title: "From operation to home",
      steps: [
        { id: "before", when: "Before surgery", title: "Getting ready", points: ["Tests at a pre-assessment clinic.", "The best place for a stoma is planned and marked."] },
        { id: "wake", when: "First day or so", title: "Close care", points: ["You may wake in intensive care or high dependency.", "Tubes drain fluid and urine at first."] },
        { id: "ward", when: "First week or so", title: "Moving again", points: ["Some pain and soreness is normal.", "Breathing and leg exercises help prevent clots."] },
        { id: "home", when: "After 5 to 14 days", title: "Going home", points: ["You will need help at first.", "Your first follow-up is after a couple of weeks."] },
        { id: "months", when: "Weeks to months", title: "Building up", points: ["You are likely to feel very tired for a while.", "Do a bit more every day."] },
      ],
    },
    sources: [MAC_CYSTECTOMY, CRUK_CYSTECTOMY, CRUK_AFTER_SURGERY, CRUK_PROBLEMS],
    quiz: {
      question: "What should you do if you get chest pain or shortness of breath at home after the operation?",
      options: [{ text: "Contact a doctor immediately, or call 999 or go to A&E", right: true }, { text: "Wait for your follow-up appointment" }, { text: "Rest and see if it passes" }],
      why: "If you have shortness of breath, chest pain, are coughing up blood or feel dizzy at home, contact a doctor immediately, such as your emergency GP service, or call 999 or go to your nearest A&E.",
    },
  },
  {
    id: "blc-urostomy",
    kicker: "Urostomy",
    question: "How do I look after a urostomy, and will it change my life?",
    hook: "A urostomy is the most common way to pass urine after bladder removal. The bags are flat and quiet, and many people get back to work, swimming and hobbies.",
    short: "A urostomy is an opening on your tummy, called a stoma, that lets urine drain out of the body after the bladder has been removed. You wear a flat, watertight bag over it, which you empty through a tap and change every few days. Your stoma nurse will teach you how to care for it, and having a urostomy will not usually affect the activities you can do.",
    sections: [
      {
        heading: "What a urostomy is",
        paragraphs: [
          "A urostomy is the most common way to collect urine after the bladder is removed. The surgeon takes a short piece of small bowel, called the ileum, joins the tubes from your kidneys to it, and brings the other end out through your tummy as a stoma.",
          "The stoma is red like the inside of your mouth, and it does not hurt because it has no nerve supply. It is swollen at first and shrinks to its final size within a few weeks, and it always produces some mucus, which is normal.",
        ],
      },
      {
        heading: "The bag",
        paragraphs: [
          "A urostomy bag is flat and watertight, with a sticky back and a small tap or valve at the lower end so you can empty it into a toilet. The bags are free on prescription, and your stoma nurse can advise which type might work best for you.",
          "There are 1 piece and 2 piece systems. The bags are very flat and do not smell or rustle as you move around, and under ordinary clothes no one can tell you are wearing one.",
          "At night, you can attach a larger bag to the tap at the bottom of your urostomy bag. Overnight bags collect more urine, so you do not need to empty them until the morning.",
        ],
      },
      {
        heading: "Learning to care for it",
        paragraphs: [
          "For the first few days your nurse looks after your urostomy, then shows you how to clean the stoma, empty the bag and change it. You may want a family member or friend with you while you learn, so they know how to help at home.",
          "Keep everything you need in one place, give yourself plenty of time, and wash your hands before and after. The more accurately the bag fits around the stoma, the less likely it is to leak, and you get very good at this with practice.",
          "Before you leave hospital you will get supplies and an ordering system, and a stoma nurse or community nurse may visit you at home. Show your medical exemption card at the pharmacy so you do not have to pay for your stoma equipment.",
        ],
      },
      {
        heading: "Things to report",
        paragraphs: [
          "A small amount of blood when you clean the stoma is normal and should stop within a few minutes. Let your doctor know if you notice blood coming from inside the stoma, and tell your stoma nurse if the skin around it is sore.",
          "You have a higher risk of complications from a urine infection after a urostomy, so drink plenty of fluids. Your doctor will ask for a urine sample if you have a fever, feel unwell or have pain around your kidneys, and you should let them know if you do not feel better.",
          "Some people develop a hernia around the stoma, which you might notice as a bulge. Some manage it by wearing a support belt, and some need surgery to repair it.",
        ],
      },
      {
        heading: "Getting on with life",
        paragraphs: [
          "Having a urostomy is a big change to your body and can take time to get used to. Talking to someone who is used to living with a urostomy can help, and your stoma nurse or the Urostomy Association may be able to arrange this.",
          "Having a urostomy will not usually affect the activities you can do, and many people go back to work and hobbies, including swimming. You can wear a smaller bag or a waterproof dressing to swim if you prefer.",
          "If you worry about finding a toilet when you are out, a toilet card or a radar key can help. Speak to your specialist nurse about getting one.",
        ],
      },
    ],
    helps: [
      "Keep everything you need to change your bag in one place, and give yourself plenty of time.",
      "Wash your hands before and after changing your bag.",
      "Tell your stoma nurse if your bag is hard to use or leaks; a different type may suit you better.",
      "Drink plenty of fluids, and contact your doctor if you have a fever or pain around your kidneys.",
      "Ask your stoma nurse or the Urostomy Association about talking to someone who lives with a urostomy.",
      "Attach a night drainage bag so you do not need to empty your bag until the morning.",
    ],
    tryThisWeek: [
      "Keep your supplies in one place.",
      "Drink plenty of fluids.",
      "Try a night drainage bag.",
    ],
    ask: "Which bag system suits me, and who do I call about leaks or sore skin?",
    interactive: {
      kind: "scenarios",
      title: "Everyday urostomy moments",
      scenarios: [
        {
          id: "leak",
          situation: "Your bag keeps leaking.",
          options: [{ text: "Talk to your stoma nurse about another type", best: true }, { text: "Put up with it" }],
          why: "Talk to your stoma nurse if you have problems with your bag. A different type of bag may suit you better.",
        },
        {
          id: "blood",
          situation: "There is a little blood when you clean around your stoma.",
          options: [{ text: "This is normal and should stop within minutes", best: true }, { text: "Stop cleaning the stoma" }],
          why: "A small amount of blood when you clean the stoma is normal and should stop within a few minutes.",
        },
        {
          id: "fever",
          situation: "You have a fever and pain around your kidneys.",
          options: [{ text: "Contact your doctor, who will check a urine sample", best: true }, { text: "Wait for your next check-up" }],
          why: "Your doctor will ask for a urine sample if you have a fever, feel unwell or have pain around your kidneys.",
        },
        {
          id: "swim",
          situation: "Friends invite you swimming.",
          options: [{ text: "Go, with a smaller bag or a waterproof dressing", best: true }, { text: "Give up swimming" }],
          why: "You can wear a smaller bag or a waterproof dressing to swim if you prefer.",
        },
        {
          id: "night",
          situation: "You keep waking to empty your bag at night.",
          options: [{ text: "Attach a larger night bag", best: true }, { text: "Stop drinking all evening" }],
          why: "Overnight bags collect more urine, so you do not need to empty them until the morning.",
        },
      ],
    },
    sources: [MAC_UROSTOMY, CRUK_LOOKING_AFTER_UROSTOMY, CRUK_UROSTOMY, CRUK_LIVING_WITH, MAC_TOILETS],
    quiz: {
      question: "Will a urostomy usually stop you working or swimming?",
      options: [{ text: "No, it will not usually affect what you can do", right: true }, { text: "Yes, swimming is no longer possible" }, { text: "Only light hobbies are possible" }],
      why: "Having a urostomy will not usually affect the activities you can do, and many people go back to work and hobbies, including swimming.",
    },
  },
  {
    id: "blc-new-bladder",
    kicker: "New bladder",
    question: "How do I learn to use a new bladder made from bowel?",
    hook: "A neobladder lets you pass urine through the urethra again, but it has to be learned: by the clock, with a push, and with patience at night.",
    short: "A neobladder is a new bladder made from a section of bowel and joined to the urethra, so you pass urine as you did before, though it feels different. You empty it by holding your breath and pushing down, at regular times, because you no longer feel when it is full. Leaking, especially at night, is common at first and usually gets better after a few months, and pelvic floor exercises help.",
    sections: [
      {
        heading: "What a neobladder is",
        paragraphs: [
          "The surgeon makes the new bladder from a section of bowel during the operation to remove the bladder. One end is joined to the tubes from the kidneys, and the other to the urethra.",
          "It is not suitable for everyone. Your surgeon might suggest it if, for example, your cancer does not affect your urethra, your bowels and kidneys are working well, and you are willing and able to learn to pass a catheter.",
          "Sometimes the surgeon cannot make the new bladder during surgery and makes a urostomy instead. Your surgeon will talk with you about the risk of this before surgery.",
        ],
      },
      {
        heading: "The first weeks",
        paragraphs: [
          "You will have a catheter in the urethra for a few weeks while the joins heal, and you go home with it. The bowel tissue keeps making mucus, so you flush the catheter several times every day, and your nurse will show you how.",
          "A few weeks after surgery you return to hospital, and some people have an x-ray to check how the new bladder is working. If there are no signs of leaks, the catheter is removed.",
        ],
      },
      {
        heading: "Learning to pass urine",
        paragraphs: [
          "To empty your new bladder, you hold your breath and push down into your tummy, using the muscles closer to the front. You need to do this regularly, because you do not have the nerves that tell you when your bladder is full.",
          "At first you empty it every 2 to 3 hours, and setting an alarm can help. Over time it stretches to hold more, though you may still need to empty it every 4 to 6 hours, and after about 3 to 6 months it should hold about a pint or so.",
          "Follow your specialist nurse's instructions about how often to empty it, as it is important not to overstretch your new bladder. Some people also need to pass a catheter to empty it completely, and your nurse will show you how.",
        ],
      },
      {
        heading: "Leaking",
        paragraphs: [
          "It is not uncommon to leak urine at first, especially at night, and you wear a pad to begin with. You should develop control quite quickly during the day, but you might leak at night for several months after surgery.",
          "Regular pelvic floor exercises are the key to recovering continence, and your specialist nurse or physiotherapist will teach them. Reducing how much you drink in the evening can help reduce accidents overnight.",
        ],
      },
      {
        heading: "Looking after it",
        paragraphs: [
          "You may also need to wash out the new bladder through a catheter, because mucus can cause an infection or bladder stones if it builds up. You will have blood tests at follow-up, because the bowel tissue can absorb some chemicals from your urine.",
          "Getting used to a new bladder takes time, and like anything new, it gets easier with time and practice. A toilet card or a radar key can help you get to a toilet quickly when you are out.",
        ],
      },
    ],
    helps: [
      "Set an alarm to remind you to empty your new bladder at regular times.",
      "Follow your specialist nurse's advice on how often to empty it, so you do not overstretch it.",
      "Keep doing your pelvic floor exercises.",
      "Wear a pad at first, and reduce how much you drink in the evening.",
      "Wash out your new bladder as your nurse has shown you.",
      "If leaking does not settle, ask your specialist nurse or surgeon about seeing a continence adviser.",
    ],
    tryThisWeek: [
      "Set an emptying alarm.",
      "Do your pelvic floor exercises.",
      "Drink less late in the evening.",
    ],
    ask: "How often should I empty my new bladder now, and when can I leave longer between?",
    interactive: {
      kind: "timeline",
      title: "Getting to know your new bladder",
      steps: [
        { id: "weeks", when: "First few weeks", title: "Catheter in", points: ["A catheter drains urine while the joins heal.", "Flush it several times every day."] },
        { id: "removal", when: "A few weeks after surgery", title: "Catheter out", points: ["A check that the new bladder is not leaking.", "Then you learn to empty it."] },
        { id: "early", when: "At first", title: "Every 2 to 3 hours", points: ["Hold your breath and push down.", "Set an alarm, as you will not feel when it is full."] },
        { id: "months", when: "After 3 to 6 months", title: "Holding more", points: ["It should hold about a pint or so.", "You may still empty it every 4 to 6 hours."] },
        { id: "nights", when: "Several months", title: "Drier nights", points: ["Night-time leaking usually gets better.", "Keep up your pelvic floor exercises."] },
      ],
    },
    sources: [MAC_NEOBLADDER, CRUK_NEW_BLADDER, CRUK_RECONSTRUCTION, CRUK_LIVING_WITH],
    quiz: {
      question: "Why do you need to empty a new bladder at regular times?",
      options: [{ text: "You no longer have the nerves that tell you it is full", right: true }, { text: "It cannot hold any urine" }, { text: "To stop a stoma blocking" }],
      why: "You need to do this regularly, because you do not have the nerves that tell you when your bladder is full.",
    },
  },
  {
    id: "blc-fatigue",
    kicker: "Fatigue",
    question: "Why am I so tired after bladder cancer treatment, and what helps?",
    hook: "Surgery, radiotherapy and BCG can all leave you drained, sometimes for months. Gentle activity, pacing and a diary help more than rest alone.",
    short: "Fatigue is feeling very tired or exhausted most, or all, of the time, and most people who have cancer have it at some point. After bladder removal you are likely to feel very tired for several weeks and sometimes months, and after radiotherapy tiredness can last weeks or months. For most people it gets better after treatment finishes, and physical activity, pacing and a fatigue diary can help.",
    sections: [
      {
        heading: "More than ordinary tiredness",
        paragraphs: [
          "Fatigue in people with cancer can be more severe than ordinary tiredness. You may get tired more quickly after less activity, and feel exhausted even if you are getting enough rest and sleep.",
          "After bladder cancer treatment, you might feel very tired and lethargic a lot of the time. For most people, fatigue gets better after treatment finishes, but for some it may continue for months or sometimes years.",
        ],
      },
      {
        heading: "Why treatment tires you",
        paragraphs: [
          "After surgery to remove the bladder, you are likely to feel very tired for several weeks and sometimes months. Radiotherapy often makes people tired too, it may get worse as treatment goes on, and you may feel more tired if you also had surgery or chemotherapy.",
          "After BCG, flu-like symptoms such as tiredness and aching should get better in 48 to 72 hours. Tiredness can also come from anaemia, pain, trouble sleeping, other health conditions, and anxiety or low mood.",
        ],
      },
      {
        heading: "Moving and building up",
        paragraphs: [
          "There is good evidence that physical activity, such as walking quickly, is one of the best ways to help reduce fatigue. Being active may also increase your appetite, give you more energy, improve sleep and help with mood.",
          "After surgery, it helps to do a bit more every day: sit for less time each day, walk around the house a bit more, then build up to walking outside. Talk to the physiotherapist or your doctor if you are unsure what you should be doing.",
        ],
      },
      {
        heading: "Pacing your days",
        paragraphs: [
          "Plan your day so you have energy for the things that are most important to you. Pace yourself, and take short naps and rests, but try to balance them with some activity.",
          "A fatigue diary can help you find patterns and plan important activities for when you have more energy. You might score your fatigue from 0, no fatigue, to 10, the worst possible fatigue.",
          "Spread housework out over the week, sit down for some tasks if you can, and accept help from family or friends. Do not drive if you feel very tired.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Tell a member of your healthcare team if you have fatigue at any time, as how it is managed depends on what is causing it. If tiredness after radiotherapy does not get better, tell your cancer doctor or specialist nurse.",
          "Your cancer doctor, specialist nurse or GP can refer you to an occupational therapist for help with everyday tasks. If fatigue is affecting how you feel, counselling or a support group may help.",
        ],
      },
    ],
    helps: [
      "Tell your cancer doctor, specialist nurse or GP about your fatigue, so they can look at what is causing it.",
      "Be active if you can, with something like short walks or walking quickly.",
      "After surgery, do a bit more each day, from walking around the house to walking outside.",
      "Keep a fatigue diary, and plan important activities for when you have more energy.",
      "Try to keep to a normal sleep routine, even if you feel like sleeping all the time.",
      "Accept help from family or friends with everyday jobs.",
    ],
    tryThisWeek: [
      "Take a short walk each day.",
      "Start a fatigue diary.",
      "Accept an offer of help.",
    ],
    ask: "Could anything treatable, such as anaemia or poor sleep, be adding to my tiredness?",
    interactive: {
      kind: "scenarios",
      title: "Pacing moments",
      scenarios: [
        {
          id: "housework",
          situation: "You wake with energy and want to clean the whole house.",
          options: [{ text: "Spread it out over the week", best: true }, { text: "Do it all while you can" }],
          why: "Spread housework out over the week, sit down for some tasks if you can, and accept help from family or friends.",
        },
        {
          id: "home",
          situation: "You are home after bladder surgery and unsure how much to do.",
          options: [{ text: "Do a bit more every day", best: true }, { text: "Stay in bed until you feel normal" }],
          why: "After surgery, it helps to do a bit more every day: sit for less time each day, walk around the house a bit more, then build up to walking outside.",
        },
        {
          id: "drive",
          situation: "You feel very tired but need to get to an appointment.",
          options: [{ text: "Ask someone to drive, or ask about hospital transport", best: true }, { text: "Drive anyway" }],
          why: "Do not drive if you feel very tired.",
        },
        {
          id: "radiotherapy",
          situation: "Months after radiotherapy, you are still exhausted.",
          options: [{ text: "Tell your cancer doctor or specialist nurse", best: true }, { text: "Say nothing and put up with it" }],
          why: "If tiredness after radiotherapy does not get better, tell your cancer doctor or specialist nurse.",
        },
      ],
    },
    sources: [MAC_FATIGUE, CRUK_AFTER_SURGERY, MAC_RADIO, MAC_BCG, CRUK_COPING],
    quiz: {
      question: "What is one of the best ways to help reduce fatigue?",
      options: [{ text: "Physical activity, such as walking quickly", right: true }, { text: "Resting in bed all day" }, { text: "Avoiding all activity" }],
      why: "There is good evidence that physical activity, such as walking quickly, is one of the best ways to help reduce fatigue.",
    },
  },
  {
    id: "blc-smoking",
    kicker: "Smoking",
    question: "Is it worth stopping smoking now, and where do I get help?",
    hook: "Smoking is the biggest preventable cause of bladder cancer. Stopping now still helps your recovery and your health, and free support makes it far more likely to work.",
    short: "Smoking tobacco is the biggest preventable cause of bladder cancer in the UK, and around half of all bladder cancers are caused by smoking. Stopping may help treatment work better and help your body heal, and it lowers the risk of some late effects of treatment. Support makes it much easier: with a stop smoking service and products such as nicotine replacement therapy, you are 4 times more likely to quit.",
    sections: [
      {
        heading: "Smoking and the bladder",
        paragraphs: [
          "Smoking tobacco is the biggest preventable cause of bladder cancer in the UK, and around half of all bladder cancers in the UK are caused by smoking. Chemicals in cigarette smoke go into the pee through the blood, and they can damage the cells that line the bladder.",
          "Stopping smoking can reduce your risk of bladder cancer, compared with your risk if you continue to smoke.",
        ],
      },
      {
        heading: "Why stopping helps now",
        paragraphs: [
          "Quitting has important benefits whether you have just been diagnosed, are recovering from cancer or are living with cancer. It is the healthiest decision you can make, and many of the benefits happen straight away.",
          "If you are having treatment, stopping may help it work better, help your body heal more quickly, and lower the risk of certain cancers coming back. Before an operation, stopping smoking lowers your risk of chest infections.",
          "After treatment, it helps reduce the risk of some late effects, such as effects on the heart, lungs and bones. It also improves your blood circulation, lowers your blood pressure and helps your breathing.",
        ],
      },
      {
        heading: "What happens when you stop",
        paragraphs: [
          "After 48 hours, the carbon monoxide levels in your blood drop to that of a non-smoker. After 72 hours, breathing may feel easier, and your energy will be increasing.",
          "It is never too late to quit, and it is easier to stop smoking with the right support.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "Ask your cancer doctor, nurse or GP for advice, or contact your local stop smoking service. You are 4 times more likely to quit if you have specialist support from a stop smoking service and use products such as nicotine replacement therapy or medicines to manage cravings.",
          "NHS stop smoking services are free. You will normally be offered one-to-one appointments with an adviser, many areas also offer group, drop-in or phone sessions, and support usually lasts up to 12 weeks.",
          "Your GP, pharmacist or health visitor can refer you, or you can phone your local service yourself. In England, the free Smokefree National Helpline is 0300 123 1044.",
        ],
      },
      {
        heading: "Stop smoking aids",
        paragraphs: [
          "Treatments include nicotine replacement products, such as patches, gum, lozenges and sprays, and stop smoking tablets such as varenicline. There is evidence that e-cigarettes can help people stop smoking, and a stop smoking adviser can support you if you want to use one.",
          "It is not always easy to quit, and it may take a few tries. A stop smoking adviser can help you spot difficult situations and find ways to cope with them.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor, nurse or GP for advice on stopping.",
      "Contact your local NHS stop smoking service; it is free.",
      "In England, call the free Smokefree National Helpline on 0300 123 1044.",
      "Ask about nicotine replacement therapy or stop smoking medicines to manage cravings.",
      "Use the free NHS Quit Smoking app to track your progress.",
      "If it does not work the first time, keep going; it may take a few tries.",
    ],
    tryThisWeek: [
      "Ask your GP about stopping.",
      "Call your stop smoking service.",
      "Download the NHS Quit Smoking app.",
    ],
    ask: "Can you refer me to a stop smoking service, and which stop smoking aids would suit me?",
    interactive: {
      kind: "timeline",
      title: "What happens when you stop",
      steps: [
        { id: "minutes", when: "After 20 minutes", title: "Pulse settling", points: ["Your pulse rate is already starting to return to normal."] },
        { id: "hours", when: "After 8 hours", title: "Oxygen recovering", points: ["Your oxygen levels are recovering.", "Carbon monoxide in your blood has reduced by half."] },
        { id: "two-days", when: "After 48 hours", title: "Like a non-smoker", points: ["Carbon monoxide drops to a non-smoker's level.", "Your senses of taste and smell are improving."] },
        { id: "three-days", when: "After 72 hours", title: "Easier breathing", points: ["Breathing may feel easier.", "Your energy will be increasing."] },
        { id: "weeks", when: "After 2 to 12 weeks", title: "Better circulation", points: ["Blood pumps through to your heart and muscles much better."] },
        { id: "year", when: "After 1 year", title: "Heart risk halved", points: ["Your risk of heart attack is half that of a smoker."] },
      ],
    },
    sources: [CRUK_RISKS, MAC_SMOKING, NHS_STOP_SERVICES, NHS_QUIT, MAC_CAUSES, CRUK_PROBLEMS],
    quiz: {
      question: "How much more likely are you to quit with a stop smoking service and stop smoking aids?",
      options: [{ text: "4 times more likely", right: true }, { text: "No more likely" }, { text: "A little more likely" }],
      why: "You are 4 times more likely to quit if you have specialist support from a stop smoking service and use products such as nicotine replacement therapy or medicines to manage cravings.",
    },
  },
  {
    id: "blc-relationships",
    kicker: "Intimacy",
    question: "How might treatment change sex, intimacy and how I feel about my body?",
    hook: "Surgery, radiotherapy and a stoma can all change sex and confidence. Many changes can be helped, and talking is where it starts.",
    short: "Bladder cancer treatments can affect your sex life in different ways, depending on the treatment you had. Bladder removal can change erections, ejaculation and the vagina, and a stoma can affect how you feel about your body, while treatment into the bladder does not usually cause long-term problems with sex. There are treatments and practical tips that help, and your doctor or specialist nurse can put you in touch with a counsellor or psychosexual therapist.",
    sections: [
      {
        heading: "After bladder removal: men",
        paragraphs: [
          "Removing the bladder usually means the prostate is removed too, so you will not be able to ejaculate and your orgasms will be dry. The operation can also affect the nerves that control erections, although sometimes the surgeon can avoid damaging them.",
          "Options to help with erections include tablets such as sildenafil, a cream, a vacuum pump, injections or pellets, and penile implants. You will not be able to make someone pregnant without fertility treatment, and sperm can only be stored before treatment or surgery.",
        ],
      },
      {
        heading: "After bladder removal: women",
        paragraphs: [
          "After surgery, sex may feel different, because nerves in the area can be damaged and the vagina may be shorter or narrower. Talk to your surgeon before the operation, as they can try to change your vagina as little as possible.",
          "Vaginal dilators, a lubricant or moisturiser, or positions that let you control the depth of penetration can help. If the womb and ovaries are removed, this causes the menopause if you have not already been through it, and your doctor can talk with you about HRT and vaginal creams.",
        ],
      },
      {
        heading: "Other treatments",
        paragraphs: [
          "Radiotherapy can cause vaginal dryness or tightness, or problems getting or keeping an erection, and there are gels, creams, dilators and erection treatments that can help. Chemotherapy into the bladder does not usually cause any long-term problems with sex.",
          "BCG does not usually cause any long-term effects on your sex life, but it might affect how you feel about having sex. Wear a condom during your course of treatment and for a week afterwards.",
        ],
      },
      {
        heading: "A stoma and your body image",
        paragraphs: [
          "Changes to your body can affect how you feel about yourself, and you may worry about being intimate with a partner, or about telling a new partner. If you are in a relationship, your partner might need a bit of time to adjust too.",
          "Sex will not harm the stoma, but choose positions that do not put pressure on it. Make sure the bag fits well and does not leak, empty it before sex, and wear clothing that covers or supports it.",
          "Many people with cancer go on to have close and intimate relationships in the future.",
        ],
      },
      {
        heading: "Talking and getting help",
        paragraphs: [
          "Partners may avoid touching you because they worry about hurting you, and talking openly can make you feel more comfortable with each other. Holding hands, hugging, kissing or giving each other a massage can help you feel close, and can help you slowly get back to having sex.",
          "If difficulties do not improve, talk to your cancer doctor, specialist nurse or GP, as they are used to giving advice on intimate problems. They can put you in touch with a counsellor or a psychosexual therapist.",
        ],
      },
    ],
    helps: [
      "Talk to your surgeon or specialist nurse about effects on sex and fertility before your operation.",
      "Ask your doctor which erection treatments might suit you.",
      "Try a vaginal lubricant or moisturiser, and ask about vaginal dilators.",
      "Empty your stoma bag before sex, and choose positions that keep pressure off the stoma.",
      "Be open with your partner, or a future partner, about what is worrying you.",
      "Ask your doctor or specialist nurse about a counsellor or psychosexual therapist.",
    ],
    tryThisWeek: [
      "Talk openly with your partner.",
      "Empty your bag before sex.",
      "Ask about a psychosexual therapist.",
    ],
    ask: "How might my treatment affect sex and fertility, and what help is available?",
    interactive: {
      kind: "scenarios",
      title: "Closeness moments",
      scenarios: [
        {
          id: "erection",
          situation: "Since surgery, you cannot get an erection.",
          options: [{ text: "Ask your doctor about treatments that may help", best: true }, { text: "Assume nothing can be done" }],
          why: "Options to help with erections include tablets such as sildenafil, a cream, a vacuum pump, injections or pellets, and penile implants.",
        },
        {
          id: "vaginal",
          situation: "Sex feels uncomfortable since your operation.",
          options: [{ text: "Try a lubricant, and ask about dilators", best: true }, { text: "Avoid mentioning it" }],
          why: "Vaginal dilators, a lubricant or moisturiser, or positions that let you control the depth of penetration can help.",
        },
        {
          id: "stoma",
          situation: "You worry your stoma bag will get in the way.",
          options: [{ text: "Empty it first and choose a comfortable position", best: true }, { text: "Avoid being intimate at all" }],
          why: "Make sure the bag fits well and does not leak, empty it before sex, and wear clothing that covers or supports it.",
        },
        {
          id: "partner",
          situation: "Your partner seems afraid to touch you.",
          options: [{ text: "Talk openly about how you both feel", best: true }, { text: "Say nothing and wait" }],
          why: "Partners may avoid touching you because they worry about hurting you, and talking openly can make you feel more comfortable with each other.",
        },
      ],
    },
    sources: [CRUK_SEX, MAC_CYSTECTOMY, MAC_SEX, MAC_BODY, CRUK_LIVING_WITH],
    quiz: {
      question: "Does sex harm a stoma?",
      options: [{ text: "No, but choose positions that keep pressure off it", right: true }, { text: "Yes, always" }, { text: "Only in the first year" }],
      why: "Sex will not harm the stoma, but choose positions that do not put pressure on it.",
    },
  },
  {
    id: "blc-work",
    kicker: "Work and travel",
    question: "How do I get back to work, and travel, after bladder cancer?",
    hook: "Most people can get back to work and go away again. The law protects you at work, and a little planning makes trips easier.",
    short: "After some recovery time, surgery for bladder cancer should not affect your working life, unless your job involves heavy manual work. The law treats cancer as a disability, so your employer should consider reasonable adjustments, such as a phased return or making sure you can get to the toilet easily. A stoma or bladder changes should not stop you travelling, but planning supplies and toilets ahead helps.",
    sections: [
      {
        heading: "Going back to work",
        paragraphs: [
          "The effect on your working life depends on your job and the operation you had. After a urinary diversion you will need access to a toilet at work, and after some recovery time surgery should not affect your work unless it involves heavy manual work, such as digging or construction.",
          "After a TURBT you may need to avoid lifting or carrying anything heavy for 2 to 3 weeks, and your doctor or nurse can advise you about when to go back. After a cystectomy, your surgeon will tell you how soon you can get back to work.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "If you have cancer, the law considers this a disability, so you cannot be treated less favourably because you have cancer. In England, Scotland and Wales the Equality Act 2010 protects you, and in Northern Ireland the Disability Discrimination Act 1995 does.",
          "This protection does not end when your treatment finishes. You do not have to tell your employer you have cancer, but they do not have to make reasonable adjustments unless they know, or should reasonably know, that you have it.",
        ],
      },
      {
        heading: "Reasonable adjustments",
        paragraphs: [
          "Reasonable adjustments are changes to your workplace or job that help you keep working or return to work. They could include a phased return, different working hours, time off for appointments, extra breaks to help with tiredness, and making sure you can get to the toilet easily.",
          "Access to Work could give you a grant for things like specialist equipment, or the costs of travelling to work if you cannot use public transport. It will not pay for reasonable adjustments, which your employer must legally make.",
        ],
      },
      {
        heading: "Travelling with a stoma or bladder changes",
        paragraphs: [
          "Having a urostomy should not stop you from travelling, but you may need to plan your trip more carefully. Pack about twice your normal stoma supplies, split them between different bags, and keep essential supplies in your hand luggage.",
          "Your stoma nurse can advise you on drinking while travelling, long journeys and flights, and how high temperatures can affect the glue on stoma bags. You can get a stoma travel certificate from the Urostomy Association or your stoma care nurse.",
          "If you need a toilet urgently or often, book an aisle seat close to a toilet, and find out where toilets are before you go. A toilet card, or a key to over 9,000 locked disabled toilets through the National Key Scheme, can help.",
        ],
      },
      {
        heading: "Before you book",
        paragraphs: [
          "Get advice from your cancer doctor, specialist nurse or GP before you make plans or book. If you have recently had surgery, your doctor will advise whether it is safe to travel, and you may need to delay travel for a few weeks because of the risk of a blood clot.",
          "Tell your travel insurance provider that you have had surgery. Fatigue does not have to stop you travelling, but plan when you will rest, and you can usually arrange help at airports and train stations.",
        ],
      },
    ],
    helps: [
      "Ask your doctor, surgeon or specialist nurse when you can go back to work, especially if your job involves lifting.",
      "Talk to your employer about reasonable adjustments, such as a phased return or easy access to a toilet.",
      "Check whether Access to Work could help with equipment or the cost of getting to work.",
      "Pack about twice your usual stoma supplies, with essentials in your hand luggage.",
      "Get a toilet card, or a National Key Scheme key, for quick access to toilets.",
      "Tell your travel insurance provider that you have had surgery.",
    ],
    tryThisWeek: [
      "List adjustments to ask for.",
      "Order a toilet card.",
      "Pack double stoma supplies.",
    ],
    ask: "When can I go back to work, and is it safe for me to travel or fly yet?",
    interactive: {
      kind: "scenarios",
      title: "Work and travel moments",
      scenarios: [
        {
          id: "toilet",
          situation: "Your desk is a long way from the nearest toilet.",
          options: [{ text: "Ask about it as a reasonable adjustment", best: true }, { text: "Say nothing and manage" }],
          why: "Reasonable adjustments could include making sure you can get to the toilet easily.",
        },
        {
          id: "lifting",
          situation: "Your job involves a lot of heavy lifting.",
          options: [{ text: "Ask your specialist nurse before you go back", best: true }, { text: "Go straight back to full duties" }],
          why: "After some recovery time surgery should not affect your work unless it involves heavy manual work, such as digging or construction.",
        },
        {
          id: "flight",
          situation: "You are flying abroad with a urostomy.",
          options: [{ text: "Pack double supplies, with essentials in hand luggage", best: true }, { text: "Pack just enough in your suitcase" }],
          why: "Pack about twice your normal stoma supplies, split them between different bags, and keep essential supplies in your hand luggage.",
        },
        {
          id: "equipment",
          situation: "You need equipment at work that is more than an adjustment.",
          options: [{ text: "Check whether Access to Work can help", best: true }, { text: "Pay for it all yourself" }],
          why: "Access to Work could give you a grant for things like specialist equipment, or the costs of travelling to work if you cannot use public transport.",
        },
        {
          id: "holiday",
          situation: "You want to book a holiday soon after surgery.",
          options: [{ text: "Ask your doctor first, and tell your insurer", best: true }, { text: "Book it and tell nobody" }],
          why: "If you have recently had surgery, your doctor will advise whether it is safe to travel.",
        },
      ],
    },
    sources: [CRUK_LIVING_WITH, MAC_RIGHTS, MAC_ADJUSTMENTS, GOV_ATW, MAC_TRAVEL_EFFECTS, MAC_TRAVEL, MAC_TURBT, MAC_CYSTECTOMY],
    quiz: {
      question: "Does your legal protection at work end when cancer treatment finishes?",
      options: [{ text: "No, it continues", right: true }, { text: "Yes, straight away" }, { text: "Yes, after a year" }],
      why: "This protection does not end when your treatment finishes.",
    },
  },
  {
    id: "blc-mood",
    kicker: "Mood",
    question: "Why do I feel low or worried now treatment has ended, and where can I get help?",
    hook: "Check-ups, body changes and the fear of the cancer coming back can weigh heavily. These feelings are common, they often ease, and help is there.",
    short: "It is common to have many feelings after bladder cancer, and worrying about the cancer coming back is very common, especially around check-ups. These feelings often get better with time, but if low mood lasts, it may be depression, which is a real illness that can be treated. Talk to your cancer team or GP, and if you are struggling to cope, you can call Samaritans free on 116 123, any time, day or night.",
    sections: [
      {
        heading: "Feelings after treatment",
        paragraphs: [
          "You might have lots of emotions to cope with after bladder cancer, and its treatment can cause changes to your body that affect how you feel in yourself. Feelings are a natural part of coming to terms with cancer, and all sorts of feelings are likely to come and go.",
          "When treatment has finished, it is common to worry that every symptom you have is linked to cancer. Many people find their check-ups quite worrying, because a hospital appointment can bring back any anxiety you had about your cancer.",
        ],
      },
      {
        heading: "Living with uncertainty",
        paragraphs: [
          "Many people struggle to cope with feelings of uncertainty, but these often get better with time. Focusing on what you can control may help: getting involved in your recovery, talking about your feelings, finding ways of managing stress, and doing activities you enjoy.",
          "Constantly checking for symptoms or changes can make you feel anxious, so if you find yourself doing this, talk to someone from your cancer team or your GP. Make sure you have your team's contact numbers, as you do not have to wait for your follow-up appointment to get in touch.",
        ],
      },
      {
        heading: "Low mood or depression?",
        paragraphs: [
          "Feeling sad is a natural reaction to change or loss, and for most people these periods of sadness get better. But for some the sadness continues or gets worse, and depression is more than simply feeling unhappy or fed up for a few days.",
          "Depression can bring lasting feelings of unhappiness and hopelessness, losing interest in things you used to enjoy, feeling constantly tired and sleeping badly. It is a real illness, not a sign of weakness, and with the right treatment and support most people with depression can make a full recovery.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "If you think you may be depressed, see a GP, as it is best not to delay. Treatment can include talking therapies, such as cognitive behavioural therapy, and medicine.",
          "It can help to tell someone close to you how you are feeling, and many people find counselling helpful. You can call the Macmillan Support Line free on 0808 808 00 00, or the Cancer Research UK information nurses on 0808 800 4040, Monday to Friday, 9am to 5pm.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online, call 111 and select the mental health option, or ask for an urgent GP appointment. You can call Samaritans free on 116 123, any time, day or night.",
          "Call 999 or go to A&E now if someone's life is at risk, or if you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one.",
        ],
      },
    ],
    helps: [
      "Tell your cancer team, GP or practice nurse if you are feeling worried or finding it difficult to cope.",
      "Keep your cancer team's contact numbers to hand.",
      "Tell someone close to you how you are feeling, or ask about counselling.",
      "Call the Macmillan Support Line free on 0808 808 00 00.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "For urgent mental health help, call 111 and select the mental health option; call 999 if a life is at risk.",
    ],
    tryThisWeek: [
      "Tell your GP how you feel.",
      "Save your team's numbers.",
      "Save 116 123 in your phone.",
    ],
    ask: "Could my low mood be depression, and can you refer me for counselling or talking therapy?",
    interactive: {
      kind: "signs",
      title: "Feelings to mention",
      intro: "Tick any that have lasted. They can help your GP or team understand how you have been.",
      signs: ["Lasting low mood or sadness", "Feeling hopeless", "Losing interest in things you enjoyed", "Feeling constantly tired", "Sleeping badly", "Worrying that every symptom is cancer", "Dreading your check-ups", "Feeling very low or having suicidal thoughts"],
      after: "Tell your GP or cancer team. For urgent help, call 111 and select the mental health option, or Samaritans on 116 123. Call 999 if a life is at risk.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_WORRIES, CRUK_FOLLOW_UP_EARLY, CRUK_COPING, MAC_EMOTIONS, NHS_DEPRESSION, NHS_URGENT, SAMARITANS],
    quiz: {
      question: "Is depression a sign of weakness?",
      options: [{ text: "No, it is a real illness that can be treated", right: true }, { text: "Yes" }, { text: "Only if it lasts a long time" }],
      why: "It is a real illness, not a sign of weakness, and with the right treatment and support most people with depression can make a full recovery.",
    },
  },
];
