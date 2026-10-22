import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Testicular cancer page's pieces (content/library-conditions/cancer-more-2.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS,
// Macmillan Cancer Support, Cancer Research UK and Orchid, with Teenage Cancer Trust for body image, work
// and study, the government's Access to Work page, and Samaritans and the NHS urgent mental health page for
// the mood answer. The answers describe treatment, recovery and living with after-effects; there are no
// survival or life-expectancy figures and nothing is a prediction for one person. General information only;
// it never replaces what a person's own cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/testicular-cancer/${path}` });
const orchid = (label: string, path: string): LearnSource => ({ label: `Orchid: ${label}`, url: `https://orchid-cancer.org.uk/${path}` });
const tct = (label: string, path: string): LearnSource => ({ label: `Teenage Cancer Trust: ${label}`, url: `https://www.teenagecancertrust.org/information-about-cancer/${path}` });

const NHS_TREAT = nhs("Treatment for testicular cancer", "conditions/testicular-cancer/treatment/");
const NHS_SYMPTOMS = nhs("Symptoms of testicular cancer", "conditions/testicular-cancer/symptoms/");
const NHS_DEPRESSION = nhs("Depression in adults", "mental-health/conditions/depression-in-adults/overview/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const MAC_TC = mac("Testicular cancer", "testicular-cancer");
const MAC_TYPES = mac("Testicular cancer types", "testicular-cancer/types");
const MAC_CHECK = mac("How to check for testicular cancer", "testicular-cancer/how-to-check");
const MAC_STAGES = mac("Stages of testicular cancer", "testicular-cancer/stages");
const MAC_TREAT = mac("Testicular cancer treatment", "testicular-cancer/treatment");
const MAC_MARKERS = mac("Tumour marker tests for testicular cancer", "diagnostic-tests/testicular-cancer-tumour-markers");
const MAC_SURGERY = mac("Testicle removal surgery (orchidectomy) for testicular cancer", "treatments-and-drugs/surgery-for-testicular-cancer");
const MAC_CHEMO = mac("Chemotherapy for testicular cancer", "treatments-and-drugs/chemotherapy-for-testicular-cancer");
const MAC_RADIO = mac("Radiotherapy for testicular cancer", "treatments-and-drugs/radiotherapy-for-testicular-cancer");
const MAC_MONITOR = mac("Monitoring testicular cancer (surveillance)", "treatments-and-drugs/monitoring-testicular-cancer");
const MAC_SEX = mac("Testicular cancer, sex and fertility", "impacts-of-cancer/testicular-cancer-sex-fertility");
const MAC_LATE = mac("Testicular cancer treatment late effects", "impacts-of-cancer/testicular-cancer-treatment-late-effects");
const MAC_BODY = mac("Changes to your appearance and body image", "impacts-of-cancer/changes-to-your-appearance-and-body-image");
const MAC_EMOTIONS = mac("Cancer and your emotions", "treatment/coping-with-treatment/cancer-and-your-emotions");
const MAC_WORRIES = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");
const MAC_WORK = mac("Making decisions about work after treatment", "after-treatment/making-decisions-about-work-after-treatment");
const MAC_ACTIVITY = mac("Physical activity and cancer", "treatment/preparing-for-treatment/physical-activity-and-cancer");

const CRUK_TYPES = cruk("Types of testicular cancer", "types");
const CRUK_STAGES = cruk("Stages of testicular cancer", "stages-tnm");
const CRUK_SPERM = cruk("Sperm banking for testicular cancer", "treatment/sperm-banking");
const CRUK_MONITOR = cruk("Monitoring (surveillance) for testicular cancer", "treatment/monitoring");
const CRUK_FOLLOW = cruk("Follow up after testicular cancer treatment", "treatment/follow-up");
const CRUK_ORCH = cruk("Removing a testicle (orchidectomy) for testicular cancer", "treatment/surgery/removing-testicle");
const CRUK_AFTER = cruk("After surgery for testicular cancer", "treatment/surgery/after");
const CRUK_PROBLEMS = cruk("Problems after surgery for testicular cancer", "treatment/surgery/problems");
const CRUK_CHEMO = cruk("Chemotherapy for testicular cancer", "treatment/chemotherapy-treatment");
const CRUK_RADIO = cruk("Radiotherapy for testicular cancer", "treatment/radiotherapy-treatment");
const CRUK_COPING = cruk("Coping and support when you have testicular cancer", "living-with/coping-with");
const CRUK_SEX = cruk("Your sex life and testicular cancer", "living-with/sexlife");
const CRUK_FERT = cruk("Fertility after testicular cancer", "living-with/fertility");

const OR_DIAG = orchid("Diagnosis and Orchidectomy", "diagnosis-and-orchidectomy/");
const OR_TSE = orchid("Testicular Self Examination (TSE) and non-cancerous conditions", "testicular-self-examination-tse-and-non-cancerous-conditions/");
const OR_CHEMO = orchid("Chemotherapy", "chemotherapy/");
const OR_PSYCH = orchid("Psychological Impact", "psychological-impact-3/");
const OR_PHYS = orchid("Physical Impact", "physical-impact/");
const OR_TRT = orchid("Testosterone Replacement Therapy", "testosterone-replacement-therapy/");
const OR_FERT = orchid("Fertility and Testicular Cancer", "affect-on-fertility/");
const OR_SUPPORT = orchid("Testicular Cancer Support", "testicular-cancer-3-2/testicular-cancer-support/");

const TCT_RIGHTS = tct("My rights in work and education after cancer", "my-rights-work-and-education-after-cancer");
const TCT_EDU = tct("Back to education after cancer", "back-education-after-cancer");
const TCT_BODY = tct("Body image and cancer", "body-image-and-cancer");

const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work: get support if you have a disability or health condition", url: "https://www.gov.uk/access-to-work" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const testicularAnswers: LearnArticle[] = [
  {
    id: "tes-what-you-had",
    kicker: "Your treatment",
    question: "What was each part of my treatment for?",
    hook: "For many men, surgery is the whole treatment. For others it is the first step, followed by checks, chemotherapy or radiotherapy.",
    short: "Surgery to remove the testicle, called an orchidectomy, is the main treatment for testicular cancer and may be the only one you need. Afterwards, a team of specialists decides whether you need regular checks, called surveillance, or more treatment such as chemotherapy or, occasionally, radiotherapy. The choice depends on the stage and type of the cancer and the risk of it coming back.",
    sections: [
      {
        heading: "Why your plan was yours",
        paragraphs: [
          "The treatment you have for testicular cancer depends on the size and type of the cancer, whether it has spread, and your general health. The specialist care team explains the treatments, their benefits and side effects, and works with you to create a treatment plan that is best for you.",
          "After surgery, a team of specialists called a multidisciplinary team meets to talk about the best treatment for you. Treatment options depend on the stage of the cancer, whether it is a seminoma or a non-seminoma, and the risk of it coming back.",
        ],
      },
      {
        heading: "Surgery to remove the testicle",
        paragraphs: [
          "Surgery to remove the testicle, called an orchidectomy, is the main treatment for testicular cancer, and it may be the only treatment you need. It also confirms the diagnosis and shows which type of testicular cancer you have.",
          "The surgeon makes a small cut in the groin on the affected side and removes the testicle through it. It is usually done as a day patient procedure, and rarely only part of the testicle is removed.",
        ],
      },
      {
        heading: "Surveillance or chemotherapy",
        paragraphs: [
          "If the cancer has not spread outside the testicle and the risk of it coming back is low, your doctor may suggest regular checks instead of more treatment. This is called surveillance, or monitoring.",
          "Chemotherapy uses medicines to kill cancer cells. It may be given after surgery to help stop the cancer coming back, or if the cancer has spread or come back. The drugs most often used are bleomycin, etoposide and cisplatin, called BEP, and some people have a single treatment with carboplatin.",
          "With early-stage testicular cancer, your doctors may ask whether you want adjuvant treatment or surveillance. Sometimes people find it hard to make a decision like this, and your doctor and nurse can talk to you about the benefits and side effects.",
        ],
      },
      {
        heading: "Radiotherapy and other surgery",
        paragraphs: [
          "Radiotherapy uses high-energy rays to destroy cancer cells. It is sometimes used for a seminoma that has spread to the lymph nodes at the back of the tummy, called the retroperitoneal lymph nodes.",
          "Some people also have surgery to remove lymph nodes in the tummy, which may be needed if the nodes are still enlarged after chemotherapy. If the cancer has spread to the lungs, surgery on the lungs is sometimes needed.",
        ],
      },
    ],
    helps: [
      "Ask your specialist care team to explain each treatment, its benefits and its side effects.",
      "If you have symptoms or side effects that worry you, talk to your specialists; you do not need to wait for your next check-up.",
      "Before treatment, ask about storing your sperm, as some treatments can affect fertility.",
      "If you are aged between 16 and 24, ask about having treatment at a Principal Treatment Centre for teenagers and young adults.",
      "Call the Macmillan Support Line free on 0808 808 00 00, 8am to 8pm, 7 days a week.",
    ],
    tryThisWeek: [
      "Ask the team about each treatment.",
      "Report worrying side effects now.",
      "Save the Macmillan helpline number.",
    ],
    ask: "Which treatments did I have, and why were they chosen for me?",
    interactive: {
      kind: "timeline",
      title: "From surgery to your plan",
      steps: [
        { id: "orchidectomy", when: "First", title: "Orchidectomy", points: ["The testicle is removed through a small cut in the groin", "It confirms the diagnosis and removes the cancer"] },
        { id: "results", when: "A few days later", title: "Results and the team meeting", points: ["The testicle is examined under a microscope", "A multidisciplinary team talks about the best treatment"] },
        { id: "options", when: "After the results", title: "Surveillance or more treatment", points: ["Regular checks if the risk of it coming back is low", "Chemotherapy, or occasionally radiotherapy, if needed"] },
        { id: "follow-up", when: "For several years", title: "Follow-up", points: ["Regular check-ups during and after any treatments", "Blood tests and scans"] },
      ],
    },
    sources: [NHS_TREAT, MAC_TREAT, MAC_SURGERY, MAC_CHEMO, MAC_RADIO, CRUK_ORCH, MAC_MONITOR],
    quiz: {
      question: "What is the main treatment for testicular cancer?",
      options: [{ text: "Surgery to remove the testicle", right: true }, { text: "Radiotherapy" }, { text: "Hormone tablets" }],
      why: "Surgery to remove the testicle, called an orchidectomy, is the main treatment for testicular cancer, and it may be the only treatment you need.",
    },
  },
  {
    id: "tes-types",
    kicker: "Your results",
    question: "What do seminoma, non-seminoma and my stage mean?",
    hook: "The words on your results describe the cells the cancer started in and how far it had travelled. Together they guided your treatment.",
    short: "Most testicular cancers start in germ cells, the cells that make sperm, and are either seminomas or non-seminomas. The stage describes the size of the cancer and whether it has spread, and for testicular cancer it also includes the level of tumour markers in the blood. Knowing the type and the stage helps doctors choose the best treatment.",
    sections: [
      {
        heading: "Germ cell tumours",
        paragraphs: [
          "After the testicle is removed, the tissue is examined under a microscope to find out the type of testicular cancer. Most testicular cancers start in germ cells, the cells in the testicles that produce sperm, so they are called germ cell tumours.",
          "The two main types are seminomas and non-seminomas. Some cancers contain both, and these are called mixed germ cell tumours, which doctors usually treat in the same way as non-seminomas.",
        ],
      },
      {
        heading: "Seminoma and non-seminoma",
        paragraphs: [
          "Seminomas can happen between the ages of 15 and 50. Non-seminomas usually occur between the ages of 15 and 35.",
          "Non-seminomas are made of different types of cells, such as teratoma, embryonal carcinoma, choriocarcinoma and yolk sac tumours. These non-seminoma types are all treated in the same way.",
          "Rarely, the cancer in the testicle is not a germ cell tumour but another type, such as a Leydig cell or Sertoli cell tumour.",
        ],
      },
      {
        heading: "The stage",
        paragraphs: [
          "The stage describes the size of the cancer and whether it has spread. For testicular cancer, staging also includes the levels of tumour markers in the blood, and doctors in the UK usually use the number staging system.",
          "Stage 1 means the cancer is only in the testicle. Stage 2 means it has spread to nearby lymph nodes in the tummy or pelvis, and stage 3 means it has spread to distant lymph nodes or to other organs.",
          "Some people are told about stage 0, called germ cell neoplasia in situ. This means there are abnormal cells in the testicle that are not cancer but can become an invasive cancer.",
        ],
      },
      {
        heading: "Tumour markers",
        paragraphs: [
          "Some testicular cancers release chemicals or proteins into the blood, called tumour markers, which can be measured with a blood test. The 3 main ones are AFP, HCG and LDH.",
          "Most non-seminomas and some seminomas have raised tumour markers, but not everyone with testicular cancer does. The S part of the stage describes them, from S0 for normal levels to S3 for very high levels.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Knowing the type and the stage helps doctors decide on the best treatment for you. Your cancer doctor or nurse can tell you more about the stage of your cancer.",
          "Waiting to know the stage can be a worrying time. You can call the Macmillan Support Line on 0808 808 00 00 if you want to talk.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor or nurse to tell you the type and stage of your cancer.",
      "Ask your healthcare team to explain things again if you need them to.",
      "Make a list of questions before your appointment, and take someone with you to help you remember.",
      "Call the Macmillan Support Line on 0808 808 00 00, or visit Macmillan's testicular cancer forum.",
    ],
    tryThisWeek: [
      "Ask your type and stage.",
      "Write your questions down.",
      "Call Macmillan if waiting is hard.",
    ],
    ask: "What type and stage was my cancer, and what were my tumour markers?",
    interactive: {
      kind: "flip-cards",
      title: "Types and stages, card by card",
      intro: "Turn each card to see what the word on your results means.",
      cards: [
        { id: "seminoma", front: "Seminoma", when: "Can happen between 15 and 50", back: "A germ cell tumour, one of the two main types of testicular cancer." },
        { id: "non-seminoma", front: "Non-seminoma", when: "Usually between 15 and 35", back: "Made of different cell types, such as teratoma. These types are all treated in the same way." },
        { id: "mixed", front: "Mixed germ cell tumour", when: "Both kinds of cells", back: "Has seminoma and non-seminoma cells. Usually treated in the same way as non-seminomas." },
        { id: "stage-1", front: "Stage 1", when: "Only in the testicle", back: "Split into 1A, 1B and 1S. Stage 1S means tumour markers are raised after surgery." },
        { id: "stage-2", front: "Stage 2", when: "Nearby lymph nodes", back: "Spread to nearby lymph nodes in the tummy or pelvis." },
        { id: "stage-3", front: "Stage 3", when: "Further away", back: "Spread to distant lymph nodes, or to organs such as the lungs, liver or brain." },
      ],
    },
    sources: [MAC_TYPES, CRUK_TYPES, CRUK_STAGES, MAC_STAGES, MAC_MARKERS, MAC_TREAT, CRUK_COPING, MAC_TC],
    quiz: {
      question: "What does the stage of a cancer describe?",
      options: [{ text: "Its size and whether it has spread", right: true }, { text: "How quickly you will recover" }, { text: "Which side the testicle was on" }],
      why: "The stage describes the size of the cancer and whether it has spread.",
    },
  },
  {
    id: "tes-follow-up",
    kicker: "Follow-up",
    question: "What happens at my follow-up checks, and for how long?",
    hook: "Regular blood tests and scans are there to find any problem early. Over the years, the appointments spread further apart.",
    short: "After treatment, or instead of it on surveillance, you have regular check-ups with blood tests for tumour markers, chest x-rays and scans. Follow-up usually lasts 5 years, and appointments become less frequent as time passes. You can contact your team about new symptoms between appointments; you do not have to wait.",
    sections: [
      {
        heading: "Why follow-up matters",
        paragraphs: [
          "After treatment, you have regular check-ups at the hospital, with tests including blood tests, x-rays and scans. The appointments check how you are, look for any signs of the cancer coming back, and give you the chance to raise any concerns.",
          "If you had surgery only and the risk of the cancer coming back is low, these checks are called surveillance. You only have treatment if your tumour markers rise, or if scans show the cancer has come back.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "How often you see your specialist depends on the type and stage of your cancer, your risk of it coming back, and the treatment you have had. You usually have follow-up for 5 years.",
          "On surveillance, you usually see your doctor every 3 months if you have a non-seminoma, or every 6 months if you have a seminoma. Over time, the risk of the cancer coming back goes down, and your appointments become less frequent.",
        ],
      },
      {
        heading: "What happens at an appointment",
        paragraphs: [
          "Your doctor will examine you, check your other testicle and ask how you feel. You can tell them about any new or ongoing symptoms, and any emotional or sexual problems caused by the cancer or treatment.",
          "You usually have blood tests to check your tumour marker levels, and you may have chest x-rays, CT scans or MRI scans, though not all of these at each appointment.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your doctor or specialist nurse if you have any concerns or notice any new symptoms between appointments. You do not have to wait until your next visit.",
          "It is important to go to all your appointments. If your address changes, make sure the hospital knows, and if you cannot go to an appointment, make another one straight away.",
        ],
      },
      {
        heading: "When the checks feel stressful",
        paragraphs: [
          "Some people find it very stressful to know they need follow-up, and scans can make some people anxious. Your doctor or specialist nurse can explain how often you have follow-ups and why, and tell you about support groups.",
          "Worrying about the cancer coming back is common after treatment, and these feelings often get better with time. Sharing your worries can mean they do not seem so overwhelming, and many people find counselling helpful.",
        ],
      },
    ],
    helps: [
      "Go to every follow-up appointment, and make another one straight away if you cannot go.",
      "Tell the hospital if your address changes.",
      "Contact your doctor or specialist nurse about new symptoms between appointments; you do not have to wait.",
      "Tell your doctor about emotional or sexual difficulties as well as physical symptoms.",
      "Note any new symptoms and report them to your doctor or nurse.",
      "Call the Cancer Research UK nurses free on 0808 800 4040, Monday to Friday, 9am to 5pm.",
    ],
    tryThisWeek: [
      "Tell the hospital any new address.",
      "Note new symptoms to report.",
      "Save the nurses' helpline number.",
    ],
    ask: "How often will I have check-ups and scans, and for how long?",
    interactive: {
      kind: "scenarios",
      title: "Between your checks",
      scenarios: [
        { id: "symptom", situation: "You notice a new symptom two months before your next appointment.", options: [{ text: "Contact your doctor or specialist nurse now", best: true }, { text: "Wait for the next appointment" }, { text: "Hope it settles on its own" }], why: "Contact your doctor or specialist nurse if you notice any new symptoms between appointments. You do not have to wait until your next visit." },
        { id: "move", situation: "You are moving house while on surveillance.", options: [{ text: "Tell the hospital your new address", best: true }, { text: "Wait for a letter to find you" }], why: "It is important to go to all your appointments. If your address changes, make sure the hospital knows." },
        { id: "missed", situation: "You cannot make your next scan appointment.", options: [{ text: "Make another one straight away", best: true }, { text: "Skip this one and go to the next" }], why: "If you cannot go to an appointment, make another one straight away." },
        { id: "anxious", situation: "The days before a scan make you anxious.", options: [{ text: "Talk it through with your doctor or specialist nurse", best: true }, { text: "Keep it to yourself" }], why: "Some people find follow-up very stressful. Your doctor or specialist nurse can explain why you have it, and tell you about support groups." },
      ],
    },
    sources: [CRUK_FOLLOW, CRUK_MONITOR, MAC_MONITOR, MAC_MARKERS, MAC_TC, MAC_WORRIES],
    quiz: {
      question: "What should you do if you notice a new symptom between appointments?",
      options: [{ text: "Contact your doctor or specialist nurse", right: true }, { text: "Wait until your next visit" }, { text: "Stop going to follow-up" }],
      why: "Contact your doctor or specialist nurse if you have any concerns or notice any new symptoms between appointments. You do not have to wait until your next visit.",
    },
  },
  {
    id: "tes-self-checks",
    kicker: "Self-checks",
    question: "How do I check my remaining testicle?",
    hook: "A few moments once a month, in a warm bath or shower, helps you know what is normal for you.",
    short: "It is important to check your remaining testicle every month. A new cancer in the other testicle is rare, but having had testicular cancer increases the risk. Get to know what feels normal, and see a GP about any lump, swelling, heaviness or ache as soon as possible.",
    sections: [
      {
        heading: "Why keep checking",
        paragraphs: [
          "It is important to check your remaining testicle every month. It is rare to develop a new cancer in the other testicle, but having already had testicular cancer increases the risk of this happening.",
          "Checking regularly means you get to know what feels normal for you. This makes it easier to notice any changes in the size, look or feel of your testicle.",
        ],
      },
      {
        heading: "How to check",
        paragraphs: [
          "It can be easier to check during, or right after, a warm bath or shower, when the skin of the scrotum is relaxed. Hold the scrotum in the palm of your hand and use your fingers and thumb to examine the testicle.",
          "Feel for lumps or swellings, or anything unusual. A normal testicle should feel smooth and firm, but not hard.",
          "Behind the top of the testicle is the epididymis, the tube that carries sperm. It feels like a soft, coiled tube, and harmless cysts or lumps there are common.",
        ],
      },
      {
        heading: "What to look out for",
        paragraphs: [
          "See a GP if you have a lump or swelling, the testicle is getting bigger, your scrotum feels heavy, firm or hard, or you have an ache or pain in your scrotum or testicle.",
          "Most lumps are not cancer, and other conditions can cause lumps or swellings. But it is important to get anything unusual checked by a doctor as soon as possible.",
        ],
      },
      {
        heading: "Getting it checked",
        paragraphs: [
          "Doctors are used to dealing with problems like this. If you feel embarrassed about talking to your GP, you can go to your local sexual health clinic.",
          "Between follow-up appointments, you can also tell your cancer team about any new symptoms. You do not have to wait until your follow-up appointment to contact them.",
        ],
      },
      {
        heading: "Checking without worrying",
        paragraphs: [
          "It is important to be aware of changes in your body. But constantly checking for symptoms or changes can make you feel anxious, and if you find yourself doing this, talk to someone from your cancer team or your primary care team.",
        ],
      },
    ],
    helps: [
      "Check your remaining testicle every month.",
      "Check during or after a warm bath or shower, when the skin is relaxed.",
      "Feel for lumps, swellings or anything unusual, and get to know what is normal for you.",
      "See a GP, or a local sexual health clinic, about any change as soon as possible.",
      "If checking makes you very anxious, talk to your cancer team or primary care team.",
    ],
    tryThisWeek: [
      "Pick a day each month to check.",
      "Check after a warm shower.",
      "Book a GP visit for any change.",
    ],
    ask: "What should I look and feel for when I check my remaining testicle?",
    interactive: {
      kind: "timeline",
      title: "A monthly check, step by step",
      steps: [
        { id: "warm", when: "Step 1", title: "Warm and relaxed", points: ["During or right after a warm bath or shower", "The skin of the scrotum is relaxed"] },
        { id: "hold", when: "Step 2", title: "Hold and feel", points: ["Hold the scrotum in the palm of your hand", "Use your fingers and thumb to examine the testicle"] },
        { id: "normal", when: "Step 3", title: "Know what is normal", points: ["Smooth and firm, but not hard", "The epididymis feels like a soft, coiled tube"] },
        { id: "change", when: "Step 4", title: "If something changes", points: ["A lump, swelling, heaviness or ache", "See a GP or sexual health clinic as soon as possible"] },
      ],
    },
    sources: [MAC_TC, MAC_CHECK, OR_TSE, NHS_SYMPTOMS, MAC_WORRIES],
    quiz: {
      question: "How often is it important to check your remaining testicle?",
      options: [{ text: "Every month", right: true }, { text: "Once a year" }, { text: "Only before a follow-up appointment" }],
      why: "It is important to check your remaining testicle every month.",
    },
  },
  {
    id: "tes-surgery-recovery",
    kicker: "After surgery",
    question: "How long does it take to recover from an orchidectomy?",
    hook: "Most men are home the same day and back to normal life within a couple of weeks. A few signs mean calling the hospital straight away.",
    short: "Most people go home the same day and can return to normal activities, including work, after about 2 weeks. Expect some discomfort, bruising and swelling for a couple of weeks, and avoid heavy lifting at first. Contact your 24 hour advice line immediately if you think the wound is infected.",
    sections: [
      {
        heading: "The first days",
        paragraphs: [
          "Most people go home the same day as an orchidectomy, though some stay in hospital overnight. You will need someone to take you home and stay with you for the first 24 hours.",
          "There is often some discomfort, bruising and slight swelling around the scar for a couple of weeks. Taking regular painkillers will help, and the hospital may give you a scrotal support garment or advise supportive underwear for about 2 weeks.",
        ],
      },
      {
        heading: "Your wound",
        paragraphs: [
          "You usually have dissolving stitches, which can take a few weeks to dissolve, and a dressing over the wound. Before you go home, your nurse will explain how to look after the wound and when you can shower.",
          "You may have numbness around the area, which usually gets better slowly. For some people, areas of numbness never completely go away.",
        ],
      },
      {
        heading: "Getting back to normal",
        paragraphs: [
          "Most people can go back to normal activities, including work, after about 2 weeks. You might need to avoid heavy lifting and strenuous exercise for a month, and your nurse will tell you about activities you can do while you recover.",
          "Only start driving when you feel comfortable and are confident you can do an emergency stop. Check with your insurance company that you are covered.",
        ],
      },
      {
        heading: "Signs to act on",
        paragraphs: [
          "There is a risk of infection around the wound. Signs include a high temperature, feeling cold and shivery, a throbbing, painful wound, and redness, heat, swelling or pain in the skin. Contact your 24 hour advice line immediately if you think you might have an infection.",
          "Contact your specialist nurse or hospital advice line if you still have pain or it gets worse. Tell your surgeon or nurse if you have any swelling around the wound.",
          "A blood clot can cause an area in the leg that is swollen, hot, red or sore. Shortness of breath, chest pain, coughing up blood or feeling dizzy can mean a clot has travelled to the lungs: contact a doctor immediately, call 999 or go to A&E.",
        ],
      },
      {
        heading: "After lymph node surgery",
        paragraphs: [
          "Surgery to remove lymph nodes at the back of the tummy, called RPLND, is a bigger operation. You should be able to go home after about 7 days, though this varies, and it can take around 2 to 4 months to fully recover.",
          "Avoid strenuous exercise and heavy lifting for at least 6 weeks after this operation. Your surgeon will give you more information about this.",
        ],
      },
    ],
    helps: [
      "Take your painkillers regularly, as prescribed.",
      "Wear supportive underwear or the scrotal support garment, and loose trousers, while it is sore.",
      "Avoid heavy lifting and strenuous exercise for the first few weeks.",
      "Drive only when you feel comfortable and could do an emergency stop, and check your insurance.",
      "Contact your 24 hour advice line immediately if you think you have a wound infection.",
      "For signs of a blood clot at home, contact a doctor immediately, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Take painkillers regularly.",
      "Wear supportive underwear.",
      "Save the 24 hour advice line.",
    ],
    ask: "Who do I call, day or night, if my wound looks infected or the pain gets worse?",
    interactive: {
      kind: "signs",
      title: "Signs to report",
      intro: "Tick any you have noticed since your operation. They make a list to give the hospital.",
      signs: ["A high temperature", "Feeling cold and shivery", "A throbbing, painful wound", "Redness, heat or swelling around the wound", "Discharge from the wound", "Pain that is not easing or is getting worse", "A swollen, hot, red or sore area in the leg", "Shortness of breath or chest pain"],
      after: "Contact your 24 hour advice line immediately about signs of infection. For shortness of breath, chest pain or coughing up blood, contact a doctor immediately, call 999 or go to A&E.",
      copyHeading: "Since my operation",
    },
    sources: [MAC_SURGERY, CRUK_ORCH, CRUK_AFTER, CRUK_PROBLEMS, OR_DIAG],
    quiz: {
      question: "What should you do if you think your wound might be infected?",
      options: [{ text: "Contact your 24 hour advice line immediately", right: true }, { text: "Wait for your follow-up appointment" }, { text: "Put on a new dressing and see" }],
      why: "Contact your 24 hour advice line immediately if you think you might have an infection.",
    },
  },
  {
    id: "tes-prosthesis",
    kicker: "Prosthesis",
    question: "Should I have an artificial testicle?",
    hook: "Some men want one straight away, some later, some never. You can usually choose, and you do not have to decide on the day.",
    short: "A testicular prosthesis is an artificial testicle that a surgeon can put into the scrotum, either during the orchidectomy or later. It may not exactly match the other testicle, and like any implant it can occasionally cause problems. Your surgeon can explain the benefits and disadvantages and help you decide.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "A testicular prosthesis, or implant, is an artificial testicle that a surgeon can put into the scrotum. Orchid describes it as a silicone implant which will resemble a normal testicle.",
          "You will usually be given the choice to have one, and your surgeon will discuss it with you before the operation.",
        ],
      },
      {
        heading: "Now or later",
        paragraphs: [
          "It can be put in during the orchidectomy. If you are unsure at the time, you can have a prosthesis put in later, after your treatment has finished.",
          "Your doctor can explain the benefits and disadvantages of having an artificial testicle, and how it will look and feel.",
        ],
      },
      {
        heading: "How it looks and feels",
        paragraphs: [
          "Surgeons do their best to match the testicles, but sometimes the prosthesis may look slightly different. It may not exactly match the size of the remaining testicle.",
          "A prosthetic testicle will not react to temperature like a normal one and will stay the same size. Sometimes the implant may move out of its original position.",
        ],
      },
      {
        heading: "Possible problems",
        paragraphs: [
          "Scar tissue can form around the implant inside the scrotum, which can sometimes cause a thickening of tissue and discomfort. Although exceptionally rare, the implant can rupture during vigorous activities such as contact sport, cycling or sex.",
          "If an infection develops around the wound, the prosthesis sometimes needs to be removed. If you need chemotherapy after the orchidectomy, an implant may increase the risk of infection because of a lowered immune system.",
        ],
      },
      {
        heading: "Making your choice",
        paragraphs: [
          "Your surgeon can tell you more about a prosthesis and help you decide what you want to do. They can usually fit one at a later date if you would rather wait.",
        ],
      },
    ],
    helps: [
      "Ask your doctor about the benefits and disadvantages of an artificial testicle, and how it will look and feel.",
      "If you are unsure, you can wait: a prosthesis can usually be fitted later.",
      "Contact your 24 hour advice line immediately if you think the wound might be infected.",
      "Talk it through with your surgeon, who can help you decide what you want to do.",
    ],
    tryThisWeek: [
      "Ask about the pros and cons.",
      "Remember it can be fitted later.",
      "Save the 24 hour advice line.",
    ],
    ask: "Would a prosthesis suit me, and could I have one fitted later?",
    interactive: {
      kind: "scenarios",
      title: "Thinking about a prosthesis",
      scenarios: [
        { id: "unsure", situation: "On the day of surgery, you are still not sure you want a prosthesis.", options: [{ text: "Wait: one can usually be fitted later", best: true }, { text: "Decide on the spot anyway" }], why: "If you are unsure about whether you want this at the time of your operation, you can have a prosthesis put in later." },
        { id: "sport", situation: "You play contact sport and wonder about an implant.", options: [{ text: "Ask your surgeon about it", best: true }, { text: "Assume sport cannot affect it" }], why: "Although exceptionally rare, the implant can rupture during vigorous activities such as contact sport or cycling." },
        { id: "red", situation: "The skin around the implant becomes red, hot and swollen.", options: [{ text: "Contact your 24 hour advice line immediately", best: true }, { text: "Wait a week to see" }], why: "There is a risk of infection around the wound, and sometimes the prosthesis may need to be removed if this happens." },
      ],
    },
    sources: [MAC_SURGERY, CRUK_ORCH, OR_DIAG, NHS_TREAT],
    quiz: {
      question: "Can a prosthesis be fitted after the first operation?",
      options: [{ text: "Yes, it can usually be fitted later", right: true }, { text: "No, only during the orchidectomy" }, { text: "Only if both testicles are removed" }],
      why: "If you are unsure at the time, you can have a prosthesis put in later, after your treatment has finished.",
    },
  },
  {
    id: "tes-fertility",
    kicker: "Fertility",
    question: "Will I still be able to have children?",
    hook: "Removing one testicle usually leaves fertility as it was. Chemotherapy and some surgery can affect it, which is why sperm banking is offered first.",
    short: "Having one testicle removed does not usually affect fertility if the other testicle is healthy. Chemotherapy usually causes temporary infertility, and surgery to the lymph nodes can cause retrograde ejaculation. Before treatment you will be offered sperm banking, and after treatment you can ask to have your sperm count checked.",
    sections: [
      {
        heading: "What each treatment can do",
        paragraphs: [
          "Having a testicle removed does not usually affect your fertility, as long as the remaining testicle is healthy. But sometimes the remaining testicle might not work so well, which could reduce fertility.",
          "Chemotherapy for testicular cancer causes temporary infertility in most people who have it, and high-dose chemotherapy has a much higher risk of infertility, which may be permanent. Radiotherapy to the lymph nodes in the tummy does not usually cause infertility.",
          "Surgery to remove lymph nodes at the back of the tummy can damage the nerves that control ejaculation, so sperm goes back into the bladder. This is called retrograde ejaculation, and it means you cannot make someone pregnant through sex.",
        ],
      },
      {
        heading: "Sperm banking",
        paragraphs: [
          "Before treatment, you will be offered the option to collect and store your sperm, called sperm banking. Even if your chances of becoming infertile are low, your doctor will usually advise it.",
          "You will have blood tests to check your general health and for infections, including HIV and hepatitis, and you sign a consent form that sets out how your sperm can be used. You may find it helpful to take your partner or a friend along.",
          "The usual time you can store sperm is 10 years. You can extend this up to a maximum of 55 years, but you need to complete a consent form every 10 years.",
        ],
      },
      {
        heading: "If time is short",
        paragraphs: [
          "If you need to start chemotherapy straight away, you may still be able to store sperm within the first few days of starting it. If you could not store sperm before surgery, it is important to do it before any further treatment.",
          "If you cannot give a sample, doctors may be able to collect sperm from the testicle with a fine needle, or from a small piece of testicular tissue. After lymph node surgery, specialists can sometimes collect sperm from your urine.",
        ],
      },
      {
        heading: "After treatment",
        paragraphs: [
          "Your sperm count usually starts to return to normal about 18 months to 2 years after chemotherapy, but it can take longer for some people. You can ask to have your sperm count checked.",
          "Doctors usually advise using contraception for about a year after chemotherapy or radiotherapy, to give your sperm time to recover from any damage. There is no evidence that cancer treatments can harm children you conceive after treatment.",
        ],
      },
      {
        heading: "Talking about it",
        paragraphs: [
          "It can be very difficult to learn that you might be infertile after treatment. Your specialist nurse can provide help and advice and tell you about support groups, and some people find counselling helpful.",
          "The NHS sometimes pays for sperm banking for people with cancer, but this varies across the UK. The fertility clinic or your specialist doctor or nurse can explain more.",
        ],
      },
    ],
    helps: [
      "Ask about sperm banking before any treatment starts, even if your risk is low.",
      "Ask questions if you are unsure of anything on the consent form.",
      "Let the clinic know if you change your contact details.",
      "Use contraception during treatment and for about a year afterwards, as your doctor advises.",
      "If you are planning a family, ask to have your sperm count checked.",
      "Talk to your specialist nurse, or ask about counselling, if fertility worries you.",
    ],
    tryThisWeek: [
      "Ask about sperm banking.",
      "Update the clinic's contact details.",
      "Ask for a sperm count check.",
    ],
    ask: "Could my treatment affect my fertility, and when could my sperm count be checked?",
    interactive: {
      kind: "flip-cards",
      title: "Each treatment and fertility",
      intro: "Turn each card to see how that treatment can affect fertility.",
      cards: [
        { id: "orchidectomy", front: "Orchidectomy", when: "One testicle removed", back: "Does not usually affect fertility if the remaining testicle is healthy." },
        { id: "chemo", front: "Chemotherapy", when: "BEP or carboplatin", back: "Usually causes temporary infertility. Sperm count usually starts to recover about 18 months to 2 years after." },
        { id: "high-dose", front: "High-dose chemotherapy", when: "Occasionally, with stem cell support", back: "A much higher risk of infertility, which may be permanent." },
        { id: "radio", front: "Radiotherapy", when: "To lymph nodes in the tummy", back: "Does not usually cause infertility. Contraception is advised for about a year after." },
        { id: "rplnd", front: "Lymph node surgery", when: "RPLND", back: "Can cause retrograde ejaculation, so sperm goes back into the bladder." },
        { id: "banking", front: "Sperm banking", when: "Before treatment", back: "Sperm is frozen and stored, usually for 10 years, for later fertility treatment." },
      ],
    },
    sources: [NHS_TREAT, MAC_SEX, CRUK_SPERM, CRUK_FERT, MAC_CHEMO, MAC_RADIO, OR_FERT],
    quiz: {
      question: "Does removing one testicle usually affect fertility?",
      options: [{ text: "No, not if the remaining testicle is healthy", right: true }, { text: "Yes, always" }, { text: "Only for the first 5 years" }],
      why: "Having a testicle removed does not usually affect your fertility, as long as the remaining testicle is healthy.",
    },
  },
  {
    id: "tes-hormones",
    kicker: "Hormones",
    question: "Will my testosterone be affected?",
    hook: "One healthy testicle usually makes enough testosterone. If it does not, a simple morning blood test can show it, and there is treatment.",
    short: "The remaining testicle usually makes enough testosterone on its own. Sometimes it does not, and chemotherapy can lower levels for a while. Tiredness, low mood, a lower sex drive or erection problems can be signs, so tell your doctor, who can check your level with a blood test and may prescribe testosterone replacement.",
    sections: [
      {
        heading: "One testicle is usually enough",
        paragraphs: [
          "Removing one testicle does not usually affect your sex drive, because the remaining testicle should make enough testosterone on its own. The remaining testicle usually makes more testosterone and sperm to make up for the removed one.",
          "Sometimes the remaining testicle does not produce enough testosterone. Some men also have a low testosterone level before surgery, and treatment may reduce it further.",
        ],
      },
      {
        heading: "After chemotherapy",
        paragraphs: [
          "Chemotherapy might lower your testosterone levels. This is not usually permanent, but it can often take a few months to recover, and for some it takes longer or may not recover.",
        ],
      },
      {
        heading: "Signs of low testosterone",
        paragraphs: [
          "A lack of testosterone can affect your ability to get an erection and reduce your sex drive. It can also cause tiredness, low mood and problems such as thinning of the bones.",
          "Orchid also lists hot flushes, weight gain, loss of muscle strength and breast swelling. Tell your doctor if you have these or any other symptoms.",
        ],
      },
      {
        heading: "The blood test",
        paragraphs: [
          "Your doctor can measure your testosterone level with a blood test. Levels are highest early in the morning, which is when the test should be done.",
          "If the level is low on 2 occasions taken at the right time of day, men will usually benefit from starting testosterone replacement therapy. Your specialist team can arrange the test and, if needed, refer you to a hormone specialist called an endocrinologist.",
        ],
      },
      {
        heading: "Testosterone replacement therapy",
        paragraphs: [
          "Testosterone replacement can be given as a gel, an injection into a muscle, an implant or a skin patch. If both testicles are removed, you would need it to keep your sex drive and be able to get an erection.",
          "Most people start to feel better within a few weeks, but it may take 3 months to feel the full effects. Never stop testosterone treatment without talking to your GP or specialist team.",
          "With gels and patches, wash your hands before and after use, so the testosterone is not passed to a partner.",
        ],
      },
    ],
    helps: [
      "Tell your doctor about tiredness, low mood, a lower sex drive or erection problems.",
      "Ask your specialist team about a testosterone blood test, taken early in the morning.",
      "Never stop testosterone treatment without talking to your GP or specialist team.",
      "Get regular exercise and a good night's sleep, which Orchid says can help testosterone levels.",
      "Avoid drinking too much alcohol, and keep to a healthy weight.",
    ],
    tryThisWeek: [
      "Note symptoms to tell your doctor.",
      "Ask about a morning blood test.",
      "Get some regular exercise.",
    ],
    ask: "Could my testosterone be low, and should I have a morning blood test?",
    interactive: {
      kind: "signs",
      title: "Signs to mention",
      intro: "Tick any you have noticed. They can be signs of low testosterone, and your doctor can check.",
      signs: ["Tiredness", "Low mood", "A lower sex drive", "Difficulty getting or keeping an erection", "Hot flushes", "Weight gain", "Loss of muscle strength", "Breast swelling"],
      after: "Tell your doctor. They can measure your testosterone level with a blood test, best taken early in the morning.",
      copyHeading: "Possible signs of low testosterone",
    },
    sources: [MAC_SEX, CRUK_SEX, OR_TRT, CRUK_PROBLEMS, OR_DIAG],
    quiz: {
      question: "When should a testosterone blood test be done?",
      options: [{ text: "Early in the morning", right: true }, { text: "Late at night" }, { text: "Straight after exercise" }],
      why: "Levels are highest early in the morning, which is when the test should be done.",
    },
  },
  {
    id: "tes-relationships",
    kicker: "Sex and body image",
    question: "How will treatment affect sex and how I feel about my body?",
    hook: "Treatment rarely stops men having sex, but it can change how you feel for a while. Talking helps more than most men expect.",
    short: "Having one testicle removed will not affect your ability to get an erection, and you can usually have sex once the wound has healed. Treatment and worry can lower your sex drive for a time, and changes to your body can affect how you feel about it. Talking to a partner, and to your doctor or nurse, can help.",
    sections: [
      {
        heading: "Sex after surgery",
        paragraphs: [
          "Having one testicle removed will not affect your ability to get an erection. You can usually start having sex about 2 to 3 weeks after surgery, once the wound has healed, but for some people it may be longer.",
          "You may not feel like having sex for a while after your surgery, especially if you are in some discomfort and feel anxious. Any negative feelings will usually get better gradually.",
        ],
      },
      {
        heading: "During and after treatment",
        paragraphs: [
          "Chemotherapy does not affect your ability to have sex, but side effects might lower your sex drive for a while. Radiotherapy should not affect it either, though tiredness can make you lose interest for a time.",
          "Always use reliable contraception during chemotherapy and for a while after you finish. This does not mean you have to avoid being intimate: you can still have close contact with your partner and continue to enjoy sex.",
          "Cancer is not infectious, so you cannot pass cancer cells to a partner during sex. It is safe for you to have sex.",
        ],
      },
      {
        heading: "Body image",
        paragraphs: [
          "Treatment can change how your body looks and feels, and that can affect how you think and feel about it. Concerns about your body may make you feel less masculine or insecure about your gender identity.",
          "You will need time to recover from treatment and adapt to the changes. Eating healthily, getting enough sleep and being more physically active are ways of taking care of your body.",
        ],
      },
      {
        heading: "Talking about it",
        paragraphs: [
          "If you have a partner, it can help to talk openly about any problems. Your partner is likely to be relieved that you want to talk, and you may feel even closer afterwards.",
          "If you are single, you may want to give yourself some time to feel comfortable in a new relationship before talking about any concerns. Many people with cancer go on to have close and intimate relationships in the future.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Doctors and nurses deal with sexual difficulties all the time, so try not to feel embarrassed. You can ask to be referred to a specialist counsellor or a sex therapist.",
          "Organisations such as Orchid and the College of Sexual and Relationship Therapists can also help. If you identify as gay, bisexual or transgender, the LGBT Foundation has a confidential helpline.",
        ],
      },
    ],
    helps: [
      "Wait until the wound has healed and you feel comfortable before having sex.",
      "Use reliable contraception during chemotherapy and for a while after.",
      "Talk openly with your partner about any problems.",
      "If you do not feel like sex, focus on closeness, such as holding hands, hugging or massage.",
      "Ask your doctor or nurse for a referral to a specialist counsellor or sex therapist.",
      "Call the Orchid helpline on 0808 802 0010.",
    ],
    tryThisWeek: [
      "Talk to your partner.",
      "Try non-sexual closeness.",
      "Ask for a counsellor referral.",
    ],
    ask: "When is it safe to have sex again, and who can I talk to about sexual difficulties?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        { id: "healing", situation: "Two weeks after surgery, the wound has not fully healed.", options: [{ text: "Wait until it has healed and feels comfortable", best: true }, { text: "Carry on as usual" }], why: "You can usually start having sex about 2 to 3 weeks after surgery, once the wound has healed, but for some people it may be longer." },
        { id: "chemo", situation: "During chemotherapy, you wonder whether to be intimate with your partner.", options: [{ text: "Use reliable contraception and stay close", best: true }, { text: "Avoid all contact until treatment ends" }], why: "Always use reliable contraception during chemotherapy. This does not mean you have to avoid being intimate." },
        { id: "new", situation: "You have met someone new and worry about telling them.", options: [{ text: "Give yourself time to feel comfortable first", best: true }, { text: "Never mention it" }], why: "You may want to give yourself some time to feel comfortable in the relationship before talking about any concerns." },
        { id: "drive", situation: "Months on, your sex drive is still low.", options: [{ text: "Talk to your doctor or nurse", best: true }, { text: "Keep it to yourself" }], why: "If difficult feelings or problems with your sex life continue, talk to your doctor or nurse." },
      ],
    },
    sources: [MAC_SEX, CRUK_SEX, CRUK_PROBLEMS, OR_PHYS, MAC_BODY, MAC_SURGERY, TCT_BODY],
    quiz: {
      question: "Can you pass cancer to a partner during sex?",
      options: [{ text: "No, cancer is not infectious", right: true }, { text: "Yes, during treatment" }, { text: "Only in the weeks after surgery" }],
      why: "Cancer is not infectious, so you cannot pass cancer cells to a partner during sex. It is safe for you to have sex.",
    },
  },
  {
    id: "tes-late-effects",
    kicker: "Late effects",
    question: "Which effects of treatment can last, or appear years later?",
    hook: "Most men have few lasting effects, but it helps to know which ones to mention, from tingling fingers to changes in hearing.",
    short: "Some side effects of chemotherapy or radiotherapy take a long time to improve, some become permanent, and some appear years later. They include tingling or numbness in the hands and feet, hearing changes, heart and lung problems, and a slightly higher risk of another cancer. You may have none of them; tell your doctor or nurse about any you notice.",
    sections: [
      {
        heading: "Long-term and late effects",
        paragraphs: [
          "Some side effects that develop during treatment take a long time to improve, and some may become permanent. Others can develop many years after treatment has finished, and these are called late effects.",
          "You may not have any of these effects at all, or they may range from mild to severe. Tell your doctor or nurse if you have any, and they will monitor them and arrange any tests you need.",
        ],
      },
      {
        heading: "Hands, feet and hearing",
        paragraphs: [
          "After chemotherapy, you may get pins and needles or numbness in your hands and feet, which can be temporary but is sometimes permanent. Some people develop cold hands and pale fingers, called Raynaud's phenomenon, and keeping your hands and feet warm can help.",
          "The chemotherapy drug cisplatin can sometimes cause hearing problems, particularly with high-pitched sounds. Hearing changes usually get better after treatment ends, but some can be permanent, so tell your doctor if you notice any changes.",
        ],
      },
      {
        heading: "Heart and lungs",
        paragraphs: [
          "Some chemotherapy drugs may increase the risk of heart or lung problems, and radiotherapy to the lymph nodes at the back of the tummy may increase the risk of heart problems. Some people have regular follow-up appointments to check their heart health.",
          "Always tell your doctor if you have chest discomfort, pain or tightness, feel short of breath, have a persistent cough, have swelling in your feet or ankles, have palpitations or blackouts, or feel dizzy.",
        ],
      },
      {
        heading: "A second cancer",
        paragraphs: [
          "People who have radiotherapy or chemotherapy for testicular cancer have a slightly increased risk of developing another cancer later. This does not mean that they will definitely develop another cancer, and the benefits of treatment will usually far outweigh this risk.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Regular exercise, eating healthily, keeping to a healthy weight and stopping smoking can all help keep your heart and lungs healthy.",
          "You may feel tired for a few months after chemotherapy. Trying to stay active can help your recovery, and it does not have to be extreme: brisk walks or gentle resistance exercises can help, and exercise helps prevent the loss of muscle strength that can happen quickly if you are inactive.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or nurse about any long-term or late effects.",
      "Keep your hands and feet warm if you have Raynaud's phenomenon.",
      "Tell your doctor if you notice any changes in your hearing.",
      "Always tell your doctor about chest pain, breathlessness, swelling, palpitations, blackouts or dizziness.",
      "Exercise regularly, eat healthily, keep to a healthy weight and stop smoking.",
    ],
    tryThisWeek: [
      "List any lasting side effects.",
      "Keep hands and feet warm.",
      "Take a brisk walk.",
    ],
    ask: "Which late effects should I watch for, and will my heart health be checked?",
    interactive: {
      kind: "risk-check",
      title: "Your heart and lungs after treatment",
      intro: "Tick what applies to you. Each one says what the sources suggest.",
      items: [
        { id: "chemo", label: "I had chemotherapy", note: "Some chemotherapy drugs may increase the risk of heart or lung problems. Tell your doctor about any new symptoms.", changeable: false },
        { id: "radio", label: "I had radiotherapy to the tummy", note: "This may increase the risk of heart problems. Some people have follow-up appointments to check heart health.", changeable: false },
        { id: "smoke", label: "I smoke", note: "Stopping smoking helps keep your heart and lungs healthy.", changeable: true },
        { id: "active", label: "I am not very active", note: "Regular exercise helps. Brisk walks or gentle resistance exercises are a good start.", changeable: true },
        { id: "weight", label: "I am above a healthy weight", note: "Keeping to a healthy weight and eating healthily can help.", changeable: true },
      ],
    },
    sources: [MAC_LATE, MAC_CHEMO, MAC_RADIO, CRUK_CHEMO, CRUK_RADIO, CRUK_COPING, OR_PHYS, OR_CHEMO],
    quiz: {
      question: "What should you do if you notice changes in your hearing after cisplatin?",
      options: [{ text: "Tell your doctor", right: true }, { text: "Ignore them, as nothing can be done" }, { text: "Wait until follow-up ends" }],
      why: "Hearing changes usually get better after treatment ends, but some can be permanent, so tell your doctor if you notice any changes.",
    },
  },
  {
    id: "tes-work-study",
    kicker: "Work, study and sport",
    question: "When can I get back to work, study and sport?",
    hook: "After surgery alone, many men are back at work within weeks. After chemotherapy it can take longer, and the law gives you support.",
    short: "Most people go back to normal activities, including work, about 2 weeks after an orchidectomy, avoiding heavy lifting at first. Tiredness after chemotherapy can last months, so a gradual return and reasonable adjustments can help. Cancer counts as a disability under the Equality Act 2010, at work and in education.",
    sections: [
      {
        heading: "Going back after surgery",
        paragraphs: [
          "Most people can go back to normal activities, including work, after about 2 weeks, but this depends on the type of work you do. Your hospital doctor can advise you on how much time to take off.",
          "Avoid heavy lifting for the first few weeks after your operation. After lymph node surgery, avoid strenuous exercise and heavy lifting for at least 6 weeks.",
        ],
      },
      {
        heading: "After chemotherapy",
        paragraphs: [
          "The effects of chemotherapy may last for some time after treatment, from a few months to a year or more. You may feel tired or exhausted, and this is worth taking into account when you think about going back to work or a busy lifestyle.",
          "If you can, plan to return to work gradually. Reasonable adjustments could include a phased return, different working hours or extra breaks to help you cope with tiredness.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "If you have or have ever had cancer, the law considers this a disability. Under the Equality Act 2010, it is illegal for your employer or tutor to discriminate against you once you have told them you have cancer or have had it in the past.",
          "You do not have to tell your employer or tutor about your cancer. But if you decide not to tell them, they are not legally required to make reasonable adjustments.",
          "Access to Work can help you get or stay in work if you have a physical or mental health condition. It could give you a grant to help pay for practical support, and it will not affect any other benefits you get.",
        ],
      },
      {
        heading: "School, college and university",
        paragraphs: [
          "Going back to school, college or uni is a big step, and it is normal to feel a mix of excitement and nerves. If you are worried about your studies, it might help to talk to your teachers, your disability department or a counsellor.",
          "Reasonable adjustments in education might include attending class from home, getting extensions on deadlines or having someone to write for you in an exam.",
        ],
      },
      {
        heading: "Sport and exercise",
        paragraphs: [
          "Being active before, during and after cancer treatment is safe, but talk to a healthcare professional before starting any physical activity plan. You can start slow and build up: doing something is better than doing nothing.",
          "If you have a testicular implant, rupture is exceptionally rare but can happen with vigorous activities such as contact sport or cycling.",
        ],
      },
    ],
    helps: [
      "Ask your hospital doctor how much time off work you need.",
      "If you can, plan to return to work gradually.",
      "Agree any reasonable adjustments, such as a phased return or extra breaks, with your employer.",
      "Talk to your teachers, tutor or disability department about adjustments at school, college or uni.",
      "Check whether you can get an Access to Work grant.",
      "Talk to a healthcare professional before starting a new physical activity plan.",
    ],
    tryThisWeek: [
      "Ask how much time off you need.",
      "Plan a gradual return.",
      "Check Access to Work.",
    ],
    ask: "When can I go back to work, study or sport, and what should I avoid at first?",
    interactive: {
      kind: "scenarios",
      title: "Getting back to it",
      scenarios: [
        { id: "lifting", situation: "Two weeks after an orchidectomy, your job involves heavy lifting.", options: [{ text: "Ask your doctor, and avoid heavy lifting at first", best: true }, { text: "Go straight back to lifting" }], why: "Your specialist will advise you not to do any heavy lifting for the first few weeks after your operation." },
        { id: "tired", situation: "Months after chemotherapy, you still tire easily at work.", options: [{ text: "Ask about a phased return or extra breaks", best: true }, { text: "Push on at full time" }], why: "Reasonable adjustments could include a phased return or extra breaks to help you cope with tiredness." },
        { id: "exams", situation: "You have exams soon after treatment.", options: [{ text: "Talk to your tutor about reasonable adjustments", best: true }, { text: "Say nothing and hope for the best" }], why: "Reasonable adjustments in education might include extensions on deadlines or having someone to write for you in an exam." },
        { id: "gym", situation: "You want to get back to the gym.", options: [{ text: "Check with a healthcare professional and start slowly", best: true }, { text: "Go straight back to your old routine" }], why: "Talk to a healthcare professional before starting any physical activity plan. You can start slow and build up." },
      ],
    },
    sources: [CRUK_ORCH, CRUK_AFTER, MAC_SURGERY, TCT_RIGHTS, TCT_EDU, MAC_WORK, GOV_ATW, OR_CHEMO, MAC_ACTIVITY, OR_DIAG],
    quiz: {
      question: "Do you have to tell your employer about your cancer?",
      options: [{ text: "No, it is your choice", right: true }, { text: "Yes, by law" }, { text: "Only if you work part time" }],
      why: "You do not have to tell your employer or tutor about your cancer. But if you decide not to tell them, they are not legally required to make reasonable adjustments.",
    },
  },
  {
    id: "tes-mood",
    kicker: "Mood",
    question: "How do I cope with how I feel, and who can I talk to?",
    hook: "Treatment can happen so fast that the feelings arrive afterwards. Talking, to the right person, can help.",
    short: "It is common to feel shocked, frightened, angry or low, and some men only take in what has happened once treatment ends. If sadness lasts for weeks or months, it may be depression, which can be treated, so see your GP. Orchid offers free telephone counselling, and Samaritans are there on 116 123 at any time.",
    sections: [
      {
        heading: "Many feelings",
        paragraphs: [
          "You may feel shocked, numb, frightened, angry, guilty or sad. Everyone reacts in their own way, and there is no right or wrong way to feel.",
          "Treatment for testicular cancer happens very quickly, and life may be interrupted at an inconvenient time, when you are studying, taking exams or have just started a new job or a family. It may not be until treatment has finished that you fully realise what you have been through.",
        ],
      },
      {
        heading: "Low mood or depression?",
        paragraphs: [
          "Feeling sad is a natural reaction to change or loss, and for most people these periods get better. But if you feel persistently sad for weeks or months, rather than a few days, it may be depression.",
          "Depression is a real illness with real symptoms, not a sign of weakness. With the right treatment and support, most people with depression can make a full recovery, so it is important to see a GP if you think you may be depressed.",
        ],
      },
      {
        heading: "Talking about it",
        paragraphs: [
          "It is not always easy to confide in family and friends, and some men feel they need someone from outside their family and friends to talk to. Talking can help increase trust and support between you and the people close to you.",
          "Orchid offers a free telephone counselling service for men affected by testicular cancer in the UK, with up to six sessions. You can call Orchid's support line, staffed by nurses, on 0808 802 0010.",
          "Talking to other men who have been through a similar experience can be very helpful, and there are online support groups and networks, such as the Testicular Cancer Network.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Eating well, being more physically active, getting enough sleep and stopping smoking can support your mental health as well as your physical health. Some people find it helps to write down how they feel, or to join a support group.",
          "Worrying about the cancer coming back is common after treatment, and these feelings often get better with time. Focusing on what you can control, and doing activities you enjoyed before treatment, can help.",
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
      "See your GP, or tell your specialist nurse, if low feelings last for weeks.",
      "Ask whether counselling is available, or call Orchid on 0808 802 0010 about its telephone counselling.",
      "Talk to other men who have been through it, through a support group or network.",
      "Call the Macmillan Support Line free on 0808 808 00 00, 8am to 8pm, 7 days a week.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "For urgent mental health help, call 111 and select the mental health option; call 999 if a life is at risk.",
    ],
    tryThisWeek: [
      "Tell your GP how you feel.",
      "Call Orchid about counselling.",
      "Save 116 123 in your phone.",
    ],
    ask: "Could my low mood be depression, and can you refer me for counselling?",
    interactive: {
      kind: "signs",
      title: "Feelings to mention",
      intro: "Tick any that have lasted. They can help your GP or nurse understand how you have been.",
      signs: ["Feeling persistently sad for weeks", "Feeling hopeless", "Losing interest in things you used to enjoy", "Feeling very tearful", "Feeling anxious or overwhelmed", "Sleeping badly", "Feeling constantly tired", "Having no appetite or sex drive", "Feeling very low or having suicidal thoughts"],
      after: "Tell your GP or specialist nurse. For urgent help, call 111 and select the mental health option, or Samaritans on 116 123. Call 999 if a life is at risk.",
      copyHeading: "How I have been feeling",
    },
    sources: [CRUK_COPING, OR_PSYCH, OR_SUPPORT, MAC_EMOTIONS, NHS_DEPRESSION, NHS_URGENT, SAMARITANS, MAC_WORRIES],
    quiz: {
      question: "What is important to do if you think you may be depressed?",
      options: [{ text: "See a GP", right: true }, { text: "Wait for it to pass" }, { text: "Try to snap out of it" }],
      why: "With the right treatment and support, most people with depression can make a full recovery, so it is important to see a GP if you think you may be depressed.",
    },
  },
];
