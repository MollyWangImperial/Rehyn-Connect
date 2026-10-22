import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Lung cancer page's pieces (content/library-conditions/cancer-more.ts,
// `lungCancer`). Every sentence was written from wording checked on 22 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS lung
// cancer pages, Macmillan Cancer Support, Cancer Research UK and the Roy Castle Lung Cancer Foundation, with the
// government's pages on disability, Access to Work and benefits, and Samaritans. The pieces describe treatment,
// recovery and living with after-effects: there are no survival or life-expectancy figures, and nothing is
// written as a prediction for the reader. Emergency guidance (breathlessness, chest pain, coughing up blood,
// signs of infection or a blood clot) is given exactly as the NHS, Macmillan and Cancer Research UK state it.
// The mood answer follows safe-messaging guidance and gives the crisis routes exactly as the NHS and Samaritans
// state them. General information only; it never replaces what a person's own lung cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/lung-cancer/${path}` });
const rc = (label: string, path: string): LearnSource => ({ label: `Roy Castle Lung Cancer Foundation: ${label}`, url: `https://roycastle.org/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_SYMPTOMS = nhs("Symptoms of lung cancer", "conditions/lung-cancer/symptoms/");
const NHS_TESTS = nhs("Tests and next steps for lung cancer", "conditions/lung-cancer/tests-and-next-steps/");
const NHS_TREAT = nhs("Treatment for lung cancer", "conditions/lung-cancer/treatment/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_QUIT = nhs("Quit smoking", "better-health/quit-smoking/");
const NHS_STOP_SERVICES = nhs("NHS stop smoking services help you quit", "live-well/quit-smoking/nhs-stop-smoking-services-help-you-quit/");
const NHS_DEPRESSION = nhs("Depression in adults", "mental-health/conditions/depression-in-adults/overview/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const MAC_TREAT = mac("Treatment for lung cancer", "lung-cancer/treatment-for-lung-cancer");
const MAC_NSCLC = mac("Non-small cell lung cancer (NSCLC)", "lung-cancer/non-small-cell-lung-cancer");
const MAC_SCLC = mac("Small cell lung cancer (SCLC)", "lung-cancer/small-cell-lung-cancer");
const MAC_STAGING = mac("Staging of lung cancer", "lung-cancer/staging-of-lung-cancer");
const MAC_MDT = mac("Multidisciplinary team (MDT) for lung cancer", "lung-cancer/multidisciplinary-team-for-lung-cancer");
const MAC_SURGERY = mac("Surgery for lung cancer", "treatments-and-drugs/surgery-for-lung-cancer");
const MAC_TARGETED = mac("Targeted therapies for lung cancer", "treatments-and-drugs/targeted-therapies-for-lung-cancer");
const MAC_IMMUNO = mac("Immunotherapy for lung cancer", "treatments-and-drugs/immunotherapy-for-lung-cancer");
const MAC_FOLLOWUP = mac("Follow-up care after cancer treatment", "after-treatment/follow-up-care-after-treatment");
const MAC_WORRIES = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");
const MAC_FINISHING = mac("Finishing cancer treatment", "after-treatment/finishing-treatment");
const MAC_RECOVER = mac("Beginning to recover", "after-treatment/beginning-to-recover");
const MAC_ACTIVE_AFTER = mac("Being physically active after treatment", "after-treatment/being-physically-active");
const MAC_ACTIVITY = mac("Physical activity and cancer", "treatment/preparing-for-treatment/physical-activity-and-cancer");
const MAC_EXERCISE_SAFE = mac("Exercising safely when you have cancer", "treatment/preparing-for-treatment/physical-activity-and-cancer/exercising-safely");
const MAC_BREATHLESS = mac("Breathlessness", "impacts-of-cancer/breathlessness");
const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_SMOKING = mac("Giving up smoking", "treatment/coping-with-treatment/giving-up-smoking");
const MAC_EATING = mac("Eating problems and cancer", "impacts-of-cancer/eating-problems");
const MAC_EATING_TIPS = mac("Tips for managing eating problems", "impacts-of-cancer/eating-problems/tips-for-managing-eating-problems");
const MAC_WEIGHT = mac("Changes in weight", "treatment/coping-with-treatment/changes-in-weight");
const MAC_RETURNING = mac("Returning to work", "impacts-of-cancer/work-and-cancer/returning-to-work");
const MAC_ADJUSTMENTS = mac("Reasonable adjustments", "impacts-of-cancer/work-and-cancer/reasonable-adjustments");
const MAC_RIGHTS = mac("Cancer and employment rights", "impacts-of-cancer/work-and-cancer/cancer-and-employment-rights");
const MAC_MONEY_FAQS = mac("Money worries and cancer: your questions answered", "get-help/financial-and-work/money-faqs");
const MAC_MONEY_ADVICE = mac("Money advice", "get-help/macmillan-support-line/money-advisers");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");
const MAC_ANXIETY = mac("Anxiety and cancer", "impacts-of-cancer/anxiety");

const CRUK_WHAT = cruk("What is lung cancer?", "what-is");
const CRUK_TYPES = cruk("Types of lung cancer", "stages-types/types");
const CRUK_STAGES_HUB = cruk("Stages and types of lung cancer", "stages-types");
const CRUK_STAGES = cruk("Stages of lung cancer", "stages-types/stages");
const CRUK_LIMITED = cruk("Limited and extensive stage (small cell lung cancer)", "stages-types/limited-extensive");
const CRUK_TREAT = cruk("Treatment for lung cancer", "treatment");
const CRUK_IMMUNO = cruk("Targeted and immunotherapy treatment for lung cancer", "treatment/immunotherapy-targeted");
const CRUK_AFTER_SURGERY = cruk("After lung cancer surgery", "treatment/surgery/after-surgery");
const CRUK_SURGERY_PROBLEMS = cruk("Problems after lung cancer surgery", "treatment/surgery/possible-problems");
const CRUK_RADIO_SE = cruk("Side effects of lung cancer radiotherapy", "treatment/radiotherapy/side-effects");
const CRUK_FOLLOWUP = cruk("Follow up after lung cancer treatment", "treatment/follow-up");
const CRUK_COPING = cruk("Coping and support when you have lung cancer", "living-with/coping");
const CRUK_BREATHLESS = cruk("Coping with breathlessness when you have lung cancer", "living-with/coping-with-breathlessness");

const RC_RECURRENCE = rc("Recurrence", "learn-about-lung-cancer/recurrence/");
const RC_SYMPTOMS = rc("Managing symptoms", "learn-about-lung-cancer/living-with-cancer/managing-symptoms/");
const RC_WELLBEING = rc("Physical and mental wellbeing", "learn-about-lung-cancer/living-with-cancer/physical-and-mental-wellbeing/");
const RC_WORK = rc("Working with lung cancer", "learn-about-lung-cancer/living-with-cancer/working-with-lung-cancer/");
const RC_FINANCIAL = rc("Financial help", "learn-about-lung-cancer/living-with-cancer/financial-help/");
const RC_STOP = rc("Stop smoking", "our-support/stop-smoking/");
const RC_PHONE = rc("Telephone support", "our-support/telephone-support/");

const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");
const GOV_SSP = gov("Statutory Sick Pay (SSP)", "statutory-sick-pay");
const GOV_ESA = gov("Employment and Support Allowance (ESA)", "employment-support-allowance");
const GOV_PIP = gov("Personal Independence Payment (PIP)", "pip");
const GOV_AA = gov("Attendance Allowance", "attendance-allowance");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const lungCancerAnswers: LearnArticle[] = [
  {
    id: "lc-what-you-had",
    kicker: "Understanding",
    question: "What did each of my lung cancer treatments actually do?",
    hook: "Surgery, radiotherapy, chemotherapy, targeted drugs and immunotherapy all work in different ways, and many people have more than one.",
    short: "Lung cancer can be treated with surgery, radiotherapy, chemotherapy, targeted therapy drugs and immunotherapy drugs, and many people have more than one. Which you had depended on the type and stage of the cancer, tests on the cancer cells, your general health and your own preferences. A treatment summary from your cancer team can tell you what yours involved.",
    sections: [
      {
        heading: "Why your plan looked the way it did",
        paragraphs: [
          "Treatment for lung cancer can include surgery, chemotherapy, radiotherapy, targeted therapy drugs and immunotherapy drugs. You may have more than one type, given together or one after the other.",
          "The treatment you have depends on the stage and type of the cancer, the results of tests on the cancer cells, your general health and your treatment preferences. It also depends on how able you are to do everyday things, which is called your performance status.",
          "After a diagnosis of lung cancer, a team of specialists called a multidisciplinary team meets to talk about the best treatment for you. It includes a lung cancer surgeon, a cancer doctor called an oncologist, a chest specialist and a clinical nurse specialist.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Surgery for lung cancer removes the cancer and some lymph nodes in the chest. The surgeon also removes an area of normal tissue around the cancer.",
          "The most common operation is a lobectomy, which removes one lobe of the lung. After a lobe has been removed, the remaining lobes expand to fill the space. Some people have a smaller part of the lung removed, and some need the whole lung removed, which is called a pneumonectomy and is less common.",
        ],
      },
      {
        heading: "Radiotherapy and chemotherapy",
        paragraphs: [
          "Radiotherapy uses high-energy x-rays to destroy cancer cells in the area where it is given. It may be used instead of surgery to try to cure early-stage non-small cell lung cancer, after surgery to reduce the risk of the cancer coming back, or to control symptoms.",
          "Chemotherapy uses anti-cancer drugs that are carried in the blood, so they can reach cancer cells anywhere in the body. It is used for both main types of lung cancer, and it is often the first treatment for small cell lung cancer.",
          "Having chemotherapy and radiotherapy together is called chemoradiation. You need to be well enough to cope with the side effects of both treatments.",
        ],
      },
      {
        heading: "Targeted drugs and immunotherapy",
        paragraphs: [
          "Targeted cancer drugs work by targeting specific genetic changes in cancer cells that help them grow and survive. Doctors test the cancer for gene changes, such as in the EGFR or ALK gene, and the results show whether a targeted drug or immunotherapy may be suitable for you.",
          "Targeted therapy drugs for non-small cell lung cancer are usually taken as tablets or capsules. You usually have them for as long as they work for you and side effects are not causing you problems.",
          "Immunotherapy helps the body's immune system recognise and attack cancer cells. A nurse usually gives it through a drip into a vein, and you might have it for up to 2 years, depending on why you are having it and how it affects you.",
        ],
      },
      {
        heading: "Side effects that can come later",
        paragraphs: [
          "Targeted therapy side effects can begin within days of starting treatment, but it is more common for them to happen weeks or months later. If you need advice or feel unwell, contact the hospital on the 24-hour contact number your cancer team gave you.",
          "Immune system side effects from immunotherapy can sometimes happen up to 2 years after you finish treatment. They need to be treated quickly, so contact the hospital straight away on the 24-hour number if you think you have one.",
          "At the end of your treatment, your cancer team may give you a treatment summary. It describes the treatment you have had, possible side effects and any symptoms to look out for.",
        ],
      },
    ],
    helps: [
      "Ask your cancer team for a treatment summary that describes the treatment you had.",
      "Keep the 24-hour hospital number your cancer team gave you somewhere easy to find.",
      "Contact the hospital straight away if you think you have an immune side effect, even after immunotherapy has finished.",
      "Tell your cancer team about any side effects that are getting worse or not improving.",
      "Talk to your specialist team if you have any questions or worries about your treatment.",
    ],
    tryThisWeek: [
      "Ask for your treatment summary.",
      "Save the 24-hour number.",
      "Note side effects that linger.",
    ],
    ask: "Which treatments did I have, and are there any late side effects I should look out for?",
    interactive: {
      kind: "flip-cards",
      title: "What each treatment does",
      intro: "Turn a card to see how each lung cancer treatment works.",
      cards: [
        { id: "surgery", front: "Surgery", when: "Often for stage 1 or 2 non-small cell", back: "Removes the cancer, an area of normal tissue around it and some lymph nodes in the chest." },
        { id: "radiotherapy", front: "Radiotherapy", when: "Instead of or after surgery", back: "Uses high-energy x-rays to destroy cancer cells in the area where it is given." },
        { id: "chemotherapy", front: "Chemotherapy", when: "Often the first for small cell", back: "Anti-cancer drugs carried in the blood, so they can reach cancer cells anywhere in the body." },
        { id: "targeted", front: "Targeted drugs", when: "When tests find a gene change", back: "Target genetic changes that help cancer cells grow and survive. Usually taken as tablets or capsules." },
        { id: "immunotherapy", front: "Immunotherapy", when: "Alone or with other treatments", back: "Helps the immune system recognise and attack cancer cells. Usually given through a drip into a vein." },
      ],
    },
    sources: [MAC_TREAT, NHS_TREAT, CRUK_TREAT, MAC_SURGERY, CRUK_IMMUNO, MAC_TARGETED, MAC_IMMUNO, MAC_FINISHING, MAC_MDT],
    quiz: {
      question: "How do targeted drugs for lung cancer work?",
      options: [{ text: "They target genetic changes that help cancer cells grow", right: true }, { text: "They use high-energy x-rays" }, { text: "They remove a lobe of the lung" }],
      why: "Targeted cancer drugs work by targeting specific genetic changes in cancer cells that help them grow and survive.",
    },
  },
  {
    id: "lc-types",
    kicker: "Understanding",
    question: "What do non-small cell, small cell and my stage mean?",
    hook: "The type tells you which cells the cancer started in. The stage describes how big it was and whether it had spread.",
    short: "Most lung cancers are non-small cell lung cancer; the other main type is small cell lung cancer. The stage describes the size and position of the cancer and whether it has spread, using numbers from 1 to 4 or the TNM system. Knowing both helps doctors plan treatment, and your team can explain what yours means.",
    sections: [
      {
        heading: "Two main types",
        paragraphs: [
          "There are 2 main groups of primary lung cancer: non-small cell lung cancer and small cell lung cancer. The type tells you which type of cell the cancer started in, and knowing this helps your doctor decide which treatment you need.",
          "Around 80 to 85 out of 100 lung cancers are non-small cell lung cancer. Small cell lung cancer makes up around 15 to 20 out of every 100.",
          "Cancer that starts in the lung is called primary lung cancer. Cancer that spreads to the lungs from somewhere else in the body is called secondary lung cancer.",
        ],
      },
      {
        heading: "Kinds of non-small cell lung cancer",
        paragraphs: [
          "Adenocarcinoma is the most common type. It develops from cells that make mucus and is more often found in the outer area of the lung.",
          "Squamous cell carcinoma develops in the cells that line the airways and is more often found in the main airways in the centre of the lungs. Large cell lung cancer is a very uncommon type.",
          "Some non-small cell lung cancers have a gene change, such as in the ALK or EGFR gene, that makes the cells produce too much of a protein that helps them grow. Tests on the cancer cells tell your cancer doctor if targeted therapy or immunotherapy drugs are likely to work for you.",
        ],
      },
      {
        heading: "Small cell lung cancer",
        paragraphs: [
          "Small cell lung cancer gets its name from how the cancer cells look under a microscope. It is usually found in the main airways in the centre of the lungs, and it has often spread outside the lungs when it is diagnosed.",
          "Because of this, doctors usually treat small cell lung cancer as if it has spread, even if scans do not show this. Chemotherapy is usually the first treatment.",
          "It may also be described as limited stage, when the cancer cells can be seen in 1 lung and in nearby lymph nodes, or extensive stage, when it has spread outside the lung. This is an older and simpler system.",
        ],
      },
      {
        heading: "Stages 1 to 4",
        paragraphs: [
          "The stage of a cancer describes its size and position, and whether it has spread from where it started. Sometimes it is not possible to be certain about the stage of a cancer until after surgery.",
          "Stage 1 is when the cancer is no bigger than 4cm and has not spread outside the lung or to any lymph nodes. In stage 2, the cancer may have spread to nearby lymph nodes, other parts of the lung or areas just outside the lung.",
          "Stage 3 is called locally advanced lung cancer. It has usually spread to lymph nodes, but not to other parts of the body. Stage 4 is called metastatic or advanced lung cancer, when it may have spread to the other lung, the fluid around the lungs or heart, or another part of the body.",
        ],
      },
      {
        heading: "TNM, and asking about yours",
        paragraphs: [
          "TNM stands for tumour, node and metastases. T describes the size of the tumour, N whether the cancer has spread to the lymph nodes, and M whether it has spread further.",
          "The staging systems used for lung cancer can seem complicated. Ask your doctor as many questions as you need to, in as much detail as you find helpful.",
        ],
      },
    ],
    helps: [
      "Ask your doctor as many questions as you need to about your stage, in as much detail as you find helpful.",
      "Ask your cancer doctor or specialist nurse to explain more about your stage of lung cancer.",
      "Ask what the tests on your cancer cells showed, as they tell your doctor whether targeted or immunotherapy drugs are likely to work.",
      "Speak to a cancer information nurse specialist on the Macmillan Support Line about the stage of the cancer.",
    ],
    tryThisWeek: [
      "Write down questions about your stage.",
      "Ask what your cell tests showed.",
      "Call a cancer information nurse.",
    ],
    ask: "What type and stage was my lung cancer, and what does that mean now?",
    interactive: {
      kind: "flip-cards",
      title: "The stages at a glance",
      intro: "Turn a card to see what each stage describes.",
      cards: [
        { id: "stage-1", front: "Stage 1", when: "Early or localised lung cancer", back: "No bigger than 4cm. It has not spread outside the lung or to any lymph nodes." },
        { id: "stage-2", front: "Stage 2", when: "Early or locally advanced", back: "Can be different sizes. May have spread to nearby lymph nodes, other parts of the lung or just outside it." },
        { id: "stage-3", front: "Stage 3", when: "Locally advanced lung cancer", back: "Any size. Usually spread to lymph nodes, but not to other parts of the body." },
        { id: "stage-4", front: "Stage 4", when: "Metastatic or advanced lung cancer", back: "May have spread to the other lung, the fluid around the lungs or heart, or another part of the body." },
        { id: "limited-extensive", front: "Limited or extensive", when: "An older system for small cell", back: "Limited: seen in 1 lung and nearby lymph nodes. Extensive: spread outside the lung." },
      ],
    },
    sources: [CRUK_TYPES, MAC_NSCLC, MAC_SCLC, MAC_STAGING, CRUK_STAGES, CRUK_LIMITED, CRUK_STAGES_HUB],
    quiz: {
      question: "Which is the most common type of lung cancer?",
      options: [{ text: "Non-small cell lung cancer", right: true }, { text: "Small cell lung cancer" }, { text: "Mesothelioma" }],
      why: "Around 80 to 85 out of 100 lung cancers are non-small cell lung cancer.",
    },
  },
  {
    id: "lc-follow-up",
    kicker: "Follow-up",
    question: "What happens at my follow-up appointments and scans?",
    hook: "Check-ups are a chance to talk about how you are, not only to look for problems, and you do not have to wait for one if something worries you.",
    short: "After treatment you have regular check-ups, with tests such as blood tests, x-rays and CT scans at some visits. Appointments are every few months at first and become less frequent over time. Contact your specialist nurse or doctor between appointments if you notice new symptoms; you do not have to wait.",
    sections: [
      {
        heading: "Why check-ups matter",
        paragraphs: [
          "After treatment for lung cancer, you have regular check-ups at the hospital. They check how you are and whether you have any problems or worries, and they give you the chance to raise any concerns about your progress.",
          "The appointments also help your cancer team notice any possible problems early.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "After treatment such as surgery, radiotherapy or chemotherapy, you are likely to see your doctor within 4 to 6 weeks of it finishing. After surgery, you have a follow-up appointment about 2 to 6 weeks after the operation, when your surgeon gives you the results.",
          "Appointments will be every few months at first, but eventually they may be once a year. They might be in person, or by phone or video.",
          "The Roy Castle Lung Cancer Foundation says you will have follow-up appointments for a minimum of five years. This is called lung cancer surveillance.",
        ],
      },
      {
        heading: "What happens at an appointment",
        paragraphs: [
          "Your doctor or nurse examines you at each appointment. They ask how you are feeling, whether you have had any symptoms or side effects, and if you are worried about anything.",
          "You might also have tests at some visits. These can include blood tests, x-rays, a CT scan or a PET-CT scan.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your doctor or specialist nurse if you have any concerns between appointments, or if you notice any new symptoms. You don't have to wait until your next visit.",
          "Your clinical nurse specialist is your main point of contact during and after treatment. Keep your key worker's contact details in your phone or somewhere safe.",
        ],
      },
      {
        heading: "When appointments bring back worry",
        paragraphs: [
          "Many people find their follow-up appointments quite worrying, because a hospital appointment can bring back any anxiety you had about your cancer. It can help to tell someone close to you how you're feeling.",
          "Write down any questions before your appointment, and take someone with you to help you remember what was said. Always tell your cancer team about any ongoing or new symptoms, and how you are coping with your feelings.",
        ],
      },
    ],
    helps: [
      "Contact your doctor or specialist nurse between appointments if you notice new symptoms.",
      "Keep your key worker's contact details in your phone or somewhere safe.",
      "Write down any questions before each appointment.",
      "Take someone with you to help you remember what was said.",
      "Tell your cancer team how you are coping with your feelings.",
      "Tell your team about any medicines you take, including vitamins or herbal remedies.",
    ],
    tryThisWeek: [
      "Save your key worker's number.",
      "List questions for your next visit.",
      "Ask someone to come with you.",
    ],
    ask: "How often will my check-ups be, and which tests will they involve?",
    interactive: {
      kind: "timeline",
      title: "The follow-up path",
      steps: [
        { id: "after-surgery", when: "2 to 6 weeks after surgery", title: "First check", points: ["Your surgeon gives you the results of the surgery.", "They examine you and ask how you are."] },
        { id: "after-treatment", when: "4 to 6 weeks after treatment", title: "Seeing your doctor", points: ["You are likely to see your doctor after radiotherapy or chemotherapy.", "Then you have regular appointments with your doctor or nurse."] },
        { id: "first-year", when: "The first year", title: "Every few months", points: ["Appointments may be in person, or by phone or video.", "Tests may include blood tests, x-rays or a CT scan."] },
        { id: "later", when: "As time goes on", title: "Less often", points: ["Appointments become less frequent over time.", "Eventually they may be once a year."] },
        { id: "any-time", when: "At any time", title: "Between visits", points: ["Contact your team if you notice new symptoms.", "You don't have to wait until your next visit."] },
      ],
    },
    sources: [CRUK_FOLLOWUP, MAC_NSCLC, MAC_FOLLOWUP, CRUK_AFTER_SURGERY, RC_RECURRENCE, MAC_FINISHING, NHS_TESTS],
    quiz: {
      question: "What should you do if you notice a new symptom between check-ups?",
      options: [{ text: "Contact your doctor or specialist nurse", right: true }, { text: "Wait until the next appointment" }, { text: "Ignore it unless it lasts a year" }],
      why: "Contact your doctor or specialist nurse if you notice any new symptoms. You don't have to wait until your next visit.",
    },
  },
  {
    id: "lc-recurrence",
    kicker: "Living with worry",
    question: "How do I live with the worry that it will come back?",
    hook: "Worrying about cancer coming back is very common after treatment. Knowing what to look out for, and what to do, can make it easier to carry.",
    short: "Many people struggle with uncertainty after treatment, and these feelings often get better with time. Ask your team which symptoms to look out for, and contact them if you notice new symptoms or ones like those you had before. Focusing on what you can control, and talking about how you feel, can help.",
    sections: [
      {
        heading: "A very common feeling",
        paragraphs: [
          "Worrying about the cancer coming back is common after treatment. Many people struggle to cope with feelings of uncertainty, but they often get better with time.",
          "When treatment has finished, it is common to worry that every symptom you have is linked to cancer. You also get the same aches and pains as most other people, which can make it hard to know what you need to pay attention to.",
          "Certain things may trigger these feelings, such as going to the hospital for a test or hearing something about cancer in the news.",
        ],
      },
      {
        heading: "Why check-ups continue",
        paragraphs: [
          "In some cases, lung cancer can come back after the first treatment. This is known as a recurrence.",
          "It can happen because some cancer cells were left behind during surgery, or because tiny cancer cells had already broken away from the tumour but were too small to detect at the time. This is why regular check-ups matter.",
          "A recurrence can be local, near the original tumour, regional, in nearby lymph nodes, or distant, in places such as the bones, brain, adrenal glands or liver.",
        ],
      },
      {
        heading: "Knowing what to look out for",
        paragraphs: [
          "Ask your cancer team about any symptoms you should look out for, and possible late effects of treatment. Knowing more can help you manage your worries.",
          "Tell your cancer team if you have any new symptoms, or symptoms like those you had when you were diagnosed. Common symptoms of lung cancer include a cough that is not going away, shortness of breath, coughing up blood, chest or shoulder pain, and feeling tired all the time.",
          "You do not have to wait until your follow-up appointment. If your symptoms are most likely to be from your treatment, your cancer team can reassure you.",
        ],
      },
      {
        heading: "When to get help quickly",
        paragraphs: [
          "The NHS says to ask for an urgent GP appointment or get help from NHS 111 if you have coughed up blood. Call 999 or go to A&E if you are struggling to breathe, choking, gasping and unable to speak, or if you have pain in your chest or upper back.",
          "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance.",
        ],
      },
      {
        heading: "Living with uncertainty",
        paragraphs: [
          "Constantly checking for symptoms or changes can make you feel anxious. If you find yourself doing this, talk to someone from your cancer team or your primary care team.",
          "Focusing on what you can control and do now can help. This could include getting involved in your recovery, talking about your feelings, knowing what your triggers are, and doing activities you enjoy.",
          "If cancer comes back after treatment, it is often possible to treat it again. The Roy Castle Lung Cancer Foundation's nurses can answer questions on 0800 358 7200.",
        ],
      },
    ],
    helps: [
      "Ask your cancer team which symptoms you should look out for.",
      "Tell your cancer team about new symptoms, or ones like those you had when you were diagnosed.",
      "Make sure you have your cancer team's contact numbers.",
      "Talk to your cancer team or primary care team if checking for symptoms is making you anxious.",
      "Focus on what you can control, such as your recovery and activities you enjoy.",
      "Call the Roy Castle Ask the Nurse helpline on 0800 358 7200 with any questions.",
    ],
    tryThisWeek: [
      "Ask which symptoms to look out for.",
      "Note what triggers your worry.",
      "Do one activity you enjoy.",
    ],
    ask: "What symptoms should I report between appointments?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your team about",
      intro: "Tick any you have noticed. Tell your cancer team about new symptoms, or ones like those you had when you were diagnosed.",
      signs: ["A cough that is not going away", "Shortness of breath", "Coughing up blood", "Chest or shoulder pain", "A chest infection not getting better", "Losing weight without trying", "Not feeling hungry", "Feeling tired all the time"],
      after: "Tell your team or GP. Coughed up blood: ask for an urgent GP appointment or call 111. Struggling to breathe, or chest or upper back pain: call 999.",
      copyHeading: "Symptoms to tell my lung cancer team",
    },
    sources: [MAC_WORRIES, RC_RECURRENCE, NHS_SYMPTOMS, RC_PHONE],
    quiz: {
      question: "What does the NHS say to do if you are struggling to breathe?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait for your next check-up" }, { text: "Book a routine GP appointment" }],
      why: "Call 999 or go to A&E if you are struggling to breathe, choking, gasping and unable to speak, or if you have pain in your chest or upper back.",
    },
  },
  {
    id: "lc-breathlessness",
    kicker: "Recovery",
    question: "Why am I still breathless, and what helps?",
    hook: "Some breathlessness is normal after lung cancer treatment. Breathing techniques, a fan and pacing can all help, and so can a breathlessness clinic.",
    short: "Breathlessness can come from surgery, radiotherapy, anaemia, a chest infection, fluid around the lung or anxiety. Breathing techniques such as relaxed tummy breathing, a fan, and pacing everyday jobs can help you feel more in control. Contact your doctor straight away if breathlessness is new, painful or getting worse quickly.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "Some breathlessness is normal after lung surgery. It depends on the type of operation and how fit and well you normally are, and the remaining lung usually adapts so breathing should improve over time with exercise.",
          "Radiotherapy to the chest can cause some inflammation of the lungs, with a dry cough or shortness of breath soon after treatment. In a small number of people, a cough and breathlessness can continue, or start many months or a few years after treatment.",
          "Other causes include anaemia, a chest infection, fluid building up between the layers covering the lung, and feeling anxious. Rarely, some chemotherapy, immunotherapy or targeted drugs cause changes to the lung tissue.",
        ],
      },
      {
        heading: "Breathing techniques",
        paragraphs: [
          "When you are breathless you might breathe faster and your shoulders tense up. Over a long period, this can make it harder and more tiring to breathe.",
          "Relaxed tummy breathing helps you change from fast, upper chest breathing to relaxed, slow tummy breathing. Practise it when you are not breathless, for 10 minutes at a time, at least twice a day.",
          "Recovery breathing can help when you feel very breathless or panicky. Lean forward, for example with your arms resting on a kitchen counter, and focus on long, relaxed breaths out. Breathing in through your nose and out through narrowed lips can help too.",
        ],
      },
      {
        heading: "A fan, and moving around",
        paragraphs: [
          "Position a fan where it can blow a stream of cool air across your face. This can help to reduce breathlessness, and you can also use a handheld fan when you are out.",
          "Take your time and avoid rushing. Avoid holding your breath when climbing stairs or bending over, and try to blow as you go, breathing out on effort, such as when standing up from a chair.",
          "Plan ahead so the things you need at home are easy to get to. A trolley or bag on wheels can help with shopping, and pacing yourself with rest times means you get more done.",
        ],
      },
      {
        heading: "Who can help",
        paragraphs: [
          "Many hospitals have specialist clinics for people who have breathing problems. Ask your healthcare team to refer you, or have a chat with a physiotherapist or nurse who specialises in helping people with breathing.",
          "A physiotherapist can help you learn breathing techniques and new ways of doing daily activities. An occupational therapist can help you find ways of doing things at home without getting too breathless.",
          "Keeping a diary of when your breathlessness is difficult, and writing a simple action plan for what you will do when you are breathless, can help you plan ahead.",
        ],
      },
      {
        heading: "When to get help straight away",
        paragraphs: [
          "Contact your doctor straight away if breathlessness is a new symptom, you have pain when you breathe, or it gets worse quickly. If you cannot speak to your doctor and it continues to get worse, go straight to your nearest A&E.",
          "During and after chemotherapy, the NHS says to call your care team now if you have sudden breathlessness, sharp chest pain and a cough or coughing up blood. Macmillan says to always call 999 if you have chest pain or difficulty breathing.",
        ],
      },
    ],
    helps: [
      "Practise relaxed tummy breathing for 10 minutes, at least twice a day, when you are not breathless.",
      "Use a fan to blow cool air across your face.",
      "Blow as you go: breathe out when you stand up, bend or climb the stairs.",
      "Keep the things you use most often within easy reach.",
      "Ask your healthcare team to refer you to a breathlessness clinic.",
      "Contact your doctor straight away if breathlessness is new, painful or getting worse quickly.",
    ],
    tryThisWeek: [
      "Practise tummy breathing twice a day.",
      "Keep a fan handy.",
      "Ask about a breathlessness clinic.",
    ],
    ask: "Can I be referred to a breathlessness clinic, a physiotherapist or an occupational therapist?",
    interactive: {
      kind: "scenarios",
      title: "Breathless moments",
      scenarios: [
        {
          id: "stairs",
          situation: "You get breathless climbing the stairs.",
          options: [{ text: "Take your time and breathe with each step", best: true }, { text: "Hold your breath and rush to the top" }],
          why: "Take your time and avoid rushing. Avoid holding your breath when climbing stairs or bending over.",
        },
        {
          id: "panic",
          situation: "You suddenly feel very breathless and panicky.",
          options: [{ text: "Lean forward and focus on long breaths out", best: true }, { text: "Take quick, deep gasps" }],
          why: "Recovery breathing can help when you feel very breathless or panicky. Lean forward and focus on long, relaxed breaths out.",
        },
        {
          id: "worse",
          situation: "Your breathlessness is getting worse quickly and it hurts to breathe.",
          options: [{ text: "Contact your doctor straight away", best: true }, { text: "Wait and see if it settles next week" }],
          why: "Contact your doctor straight away if breathlessness is a new symptom, you have pain when you breathe, or it gets worse quickly.",
        },
        {
          id: "shopping",
          situation: "Carrying the shopping home leaves you gasping.",
          options: [{ text: "Use a trolley or bag on wheels", best: true }, { text: "Carry it all in one trip" }],
          why: "A trolley or bag on wheels can help with shopping, and pacing yourself with rest times means you get more done.",
        },
      ],
    },
    sources: [CRUK_BREATHLESS, MAC_BREATHLESS, CRUK_SURGERY_PROBLEMS, RC_SYMPTOMS, CRUK_RADIO_SE, NHS_CHEMO],
    quiz: {
      question: "How often does Cancer Research UK suggest practising relaxed tummy breathing?",
      options: [{ text: "10 minutes at a time, at least twice a day", right: true }, { text: "Only when you are very breathless" }, { text: "Once a week" }],
      why: "Practise it when you are not breathless, for 10 minutes at a time, at least twice a day.",
    },
  },
  {
    id: "lc-fatigue",
    kicker: "Recovery",
    question: "Why am I still so tired after lung cancer treatment?",
    hook: "Tiredness is one of the most common effects of lung cancer and its treatment. For most people it eases, and gentle activity and pacing can help.",
    short: "Tiredness and feeling lethargic are common during treatment and for some months afterwards. It can come from the cancer, treatment, anaemia, other medicines or worry and low mood. For most people it gets better after treatment finishes; resting, doing some gentle physical activity and pacing your day can help.",
    sections: [
      {
        heading: "Common, and real",
        paragraphs: [
          "Tiredness and feeling lethargic a lot of the time are common during treatment and for some months afterwards. People with lung cancer often feel very tired and have a lack of energy.",
          "Fatigue in people with cancer can be more severe. They may get tired more quickly after less activity, and feel exhausted even if they are getting enough rest and sleep.",
        ],
      },
      {
        heading: "Where it comes from",
        paragraphs: [
          "Fatigue can be caused by the cancer itself, side effects of treatment, anaemia, side effects of other drugs such as steroids or painkillers, or anxiety and depression.",
          "After surgery, you're likely to feel very tired for several weeks and sometimes months. Most people feel weak and lack strength for some time, and how long this lasts varies between people.",
          "After radiotherapy, tiredness can carry on for some weeks after the treatment has ended. But it usually improves gradually.",
        ],
      },
      {
        heading: "How long it lasts",
        paragraphs: [
          "Fatigue can vary throughout the day, and each day may be different. For most people, fatigue gets better after treatment finishes, but for some it may continue for months or sometimes years.",
          "Tell your doctor or nurse if weakness after surgery continues for more than a few weeks. They can suggest things to help, such as physiotherapy.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Resting but also doing some gentle physical activity can help. Some research has shown that taking gentle exercise can give you more energy, and it's important to balance exercise with resting.",
          "Try planning your day so that you have energy to do the things that are most important to you. Pace yourself, and take short naps and rests, but balance them with some activity.",
          "Make several portions of meals and freeze them for days when you don't feel able to cook. Simple aids can help too, such as a stool to sit on when gardening or a grab-rail beside the bath or toilet.",
        ],
      },
      {
        heading: "Sleep and getting support",
        paragraphs: [
          "Even though fatigue may make you feel like sleeping all the time, try to keep to a normal sleep routine. Avoid caffeine in drinks before bedtime, and try to relax before going to bed.",
          "Your specialist nurse may ask you to score your fatigue from 0 to 10, and a fatigue diary helps you record your energy at different times of the day. Your cancer doctor, specialist nurse or GP can refer you to an occupational therapist, who can help with practical ways to do everyday tasks.",
        ],
      },
    ],
    helps: [
      "Balance rest with some gentle physical activity.",
      "Plan your day around the things that matter most to you.",
      "Keep a fatigue diary and share it with your healthcare team.",
      "Freeze extra portions of meals for days when you are too tired to cook.",
      "Tell your doctor or nurse if weakness after surgery lasts more than a few weeks.",
      "Ask to be referred to an occupational therapist.",
    ],
    tryThisWeek: [
      "Balance rest with gentle activity.",
      "Note your energy in a diary.",
      "Freeze a spare meal.",
    ],
    ask: "Could anaemia, one of my medicines or my sleep be adding to my tiredness?",
    interactive: {
      kind: "risk-check",
      title: "What could be adding to it?",
      intro: "Tick any that apply. Tell your healthcare team, as many of these can be checked or helped.",
      items: [
        { id: "anaemia", label: "Breathless, dizzy or light-headed", note: "These can be signs of anaemia, which can make you feel very tired. A blood test checks the level of haemoglobin in your blood.", changeable: true },
        { id: "sleep", label: "Poor sleep for a long time", note: "Trouble sleeping over a long period of time can lead to fatigue, low mood and difficulties with concentration.", changeable: true },
        { id: "mood", label: "Worry, low mood or stress", note: "Anxiety, depression, stress and tension can make fatigue worse.", changeable: true },
        { id: "food", label: "Eating much less than usual", note: "You may get tired if your body does not get enough food. A dietitian can help.", changeable: true },
        { id: "pain", label: "Pain", note: "The best way to deal with fatigue caused by pain is to manage the pain.", changeable: true },
        { id: "medicines", label: "Taking steroids or painkillers", note: "Side effects of other drugs, such as steroids or painkillers, can cause fatigue.", changeable: false },
        { id: "treatment", label: "Recent surgery or radiotherapy", note: "Tiredness can last weeks or months after treatment, but it usually improves gradually.", changeable: false },
      ],
    },
    sources: [CRUK_COPING, MAC_FATIGUE, RC_SYMPTOMS, CRUK_RADIO_SE, CRUK_AFTER_SURGERY, CRUK_SURGERY_PROBLEMS],
    quiz: {
      question: "What happens to fatigue for most people after treatment finishes?",
      options: [{ text: "It gets better", right: true }, { text: "It always lasts for years" }, { text: "It gets worse each month" }],
      why: "For most people, fatigue gets better after treatment finishes, but for some it may continue for months or sometimes years.",
    },
  },
  {
    id: "lc-chest",
    kicker: "After surgery",
    question: "Is this cough, pain and tightness after chest surgery normal?",
    hook: "Some soreness, a cough and a tender scar are expected after lung surgery. Knowing what is normal, and what is not, helps you heal with less worry.",
    short: "It is normal to have some soreness or pain for the first week or so, and some discomfort in your chest for several weeks or months. Pain that lasts can come from nerves damaged during the operation, and there is help for it. Signs of infection or a blood clot need a doctor quickly.",
    sections: [
      {
        heading: "Pain in the first weeks",
        paragraphs: [
          "It's normal to have some soreness or pain for the first week or so, and you will be given painkillers. Painkillers work best when you take them regularly.",
          "You may have some discomfort or pain in your chest for several weeks or months after surgery. Tell your doctor or nurse about any new pain or sensations, so they can check you have the right painkillers.",
          "Contact your doctor if you still have pain or it gets worse. Let your doctor or specialist nurse know if your pain continues for more than a few weeks.",
        ],
      },
      {
        heading: "Pain that lasts longer",
        paragraphs: [
          "Some people find they have pain that lasts for a long time after surgery. It comes from damage to nerves during the operation, and it often runs along the scar.",
          "For most people it gradually reduces over a couple of years as the nerves repair themselves. Your specialist nurse or surgeon can refer you to a pain clinic, and some anti-epileptic drugs and antidepressants work very well at controlling this type of pain.",
        ],
      },
      {
        heading: "Coughing and breathing deeply",
        paragraphs: [
          "Your breathing may be shallow to start with, which is normal after lung surgery. A physiotherapist or nurse will show you breathing exercises and encourage you to cough up any mucus, which helps prevent chest infections.",
          "If you are coughing up phlegm, it should be clear or white. Tell your healthcare team if it becomes yellow, green or bloody, and tell your cancer doctor or lung cancer nurse specialist immediately if you cough up blood.",
          "Drinking warm honey and water, or sucking sweets or lozenges, can help with a cough. Your GP can prescribe a cough linctus or cough suppressant.",
        ],
      },
      {
        heading: "Your scar and wound",
        paragraphs: [
          "After open surgery, you have a scar around the side of your chest that will be 10cm to 20cm long. Keyhole surgery leaves much smaller wounds.",
          "Stitches, clips or staples are usually removed about 7 to 10 days after your operation, and dissolvable stitches disappear over a few weeks. At first, the seatbelt may press on your wound and make it sore.",
          "Tell your nurse or doctor if you have any pain or swelling, the wound feels hot, fluid is leaking from it, or you feel unwell with a fever. These are possible signs of a wound infection.",
        ],
      },
      {
        heading: "When to get help quickly",
        paragraphs: [
          "Tell your doctor or nurse if you have signs of infection, such as a high temperature, shivering, feeling hot and cold, or swelling or redness around your wound.",
          "Let your doctor or nurse know if an area in your leg is swollen, hot, red or sore. If you have shortness of breath, chest pain, cough up blood or feel dizzy at home, these can be signs of a blood clot: contact a doctor immediately, or call 999 or go to A&E.",
        ],
      },
    ],
    helps: [
      "Take your painkillers regularly, as your nurse instructs.",
      "Tell your doctor or specialist nurse if your pain continues for more than a few weeks.",
      "Keep doing the breathing exercises your physiotherapist or nurse showed you.",
      "Tell your healthcare team if your phlegm becomes yellow, green or bloody.",
      "Ask about a pain clinic if nerve pain along your scar does not settle.",
      "Contact a doctor immediately, or call 999, if you have signs of a blood clot.",
    ],
    tryThisWeek: [
      "Take painkillers regularly.",
      "Do your breathing exercises.",
      "Note the colour of your phlegm.",
    ],
    ask: "Is the pain around my scar nerve pain, and could a pain clinic help?",
    interactive: {
      kind: "signs",
      title: "Tell your team about these",
      intro: "Tick any you have noticed since your operation.",
      signs: ["Pain that is not controlled", "A wound that feels hot or is swelling", "Fluid leaking from the wound", "A high temperature or shivering", "Yellow, green or bloody phlegm", "A swollen, hot, red or sore leg", "Scar pain lasting more than a few weeks"],
      after: "Tell your doctor or nurse. If you are short of breath, have chest pain, cough up blood or feel dizzy, contact a doctor immediately, or call 999 or go to A&E.",
      copyHeading: "Things I have noticed since my operation",
    },
    sources: [CRUK_AFTER_SURGERY, MAC_SURGERY, CRUK_SURGERY_PROBLEMS, RC_SYMPTOMS],
    quiz: {
      question: "Where does long-lasting pain after lung surgery usually come from?",
      options: [{ text: "Nerves damaged during the operation", right: true }, { text: "Taking painkillers regularly" }, { text: "Doing breathing exercises" }],
      why: "It comes from damage to nerves during the operation, and it often runs along the scar.",
    },
  },
  {
    id: "lc-activity",
    kicker: "Moving more",
    question: "How do I get active again after lung cancer treatment?",
    hook: "Start small and build slowly. Light activity can help you recover from treatment, ease tiredness and lift your mood.",
    short: "Staying active and doing light exercise has been shown to help people tolerate, respond to and recover from lung cancer treatment. Check with a healthcare professional first, then start slowly with things like short walks and build up gradually. Stop and speak to a doctor straight away if you get sudden symptoms such as chest pain or breathing problems.",
    sections: [
      {
        heading: "Why moving helps",
        paragraphs: [
          "Many people presume that if you have lung cancer, you should avoid exercising. However, staying active and doing light exercise has been shown to help people better tolerate, respond to and recover from treatments such as chemotherapy, radiotherapy and surgery.",
          "Exercising can also help you manage fatigue, reduce stress and anxiety, boost your mood and energy levels, improve your sleep and increase your appetite.",
        ],
      },
      {
        heading: "Check first, then start small",
        paragraphs: [
          "Being active before, during and after cancer treatment is safe. But before starting any physical activity plan, it is important to talk to a healthcare professional first.",
          "After surgery, you can slowly build up your strength and fitness with light exercise, such as short walks. Avoid heavy lifting or straining your arm on the affected side, but keep doing the exercises the physiotherapist showed you.",
          "Once you are home, try sitting for less time each day, walking around the house a bit more each day, and building up to walking outside.",
        ],
      },
      {
        heading: "Building up",
        paragraphs: [
          "UK guidelines recommend that adults build up to at least 150 minutes of moderate activity a week, which makes you breathe faster but still able to talk. You could do 30 minutes on 5 days of the week, split into three 10-minute sessions.",
          "Doing something is better than doing nothing. It is important to listen to your body and do what you feel able to do.",
          "Light activities that fit into everyday life include walking, gardening, swimming, yoga and Pilates. Your lung cancer nurse specialist or physiotherapist can tell you whether a local exercise programme would suit you.",
        ],
      },
      {
        heading: "Being patient with yourself",
        paragraphs: [
          "Lung cancer reduces strength and endurance no matter how fit you have been. You may need to be patient and realistic about how much you can do now compared to before.",
          "It is better to rest if you feel below par than carry on regardless and cause a setback to your recovery. Aim to pick up again as soon as possible.",
        ],
      },
      {
        heading: "Staying safe",
        paragraphs: [
          "Do not exercise if you feel unwell. Stop if you get any sudden symptoms, such as feeling dizzy, chest pain, a racing heart or breathing problems, and speak to a doctor straight away.",
          "Most people with heart or lung problems can benefit from regular physical activity. Check with your doctor or specialist nurse before you start any exercise programme.",
          "Some soreness or stiffness for 2 to 3 days after exercise is common. If you feel very sore or very tired, try to do a bit less the next time.",
        ],
      },
    ],
    helps: [
      "Talk to a healthcare professional before starting a new physical activity plan.",
      "Start with short walks and build up gradually.",
      "Keep doing the exercises your physiotherapist showed you.",
      "Ask your lung cancer nurse specialist or physiotherapist about local exercise programmes.",
      "Rest if you feel below par, then pick up again as soon as you can.",
      "Stop and speak to a doctor straight away if you feel dizzy or have chest pain while exercising.",
    ],
    tryThisWeek: [
      "Check with your team first.",
      "Take a short walk.",
      "Ask about local exercise programmes.",
    ],
    ask: "How much activity is safe for me now, and is there an exercise programme I could join?",
    interactive: {
      kind: "timeline",
      title: "Building back up",
      steps: [
        { id: "hospital", when: "In hospital", title: "Moving early", points: ["You might be sitting in a chair within 12 hours of your operation.", "The day after, you'll be walking around your bed."] },
        { id: "home", when: "First weeks at home", title: "A bit more each day", points: ["Sit for less time each day.", "Walk around the house a bit more each day."] },
        { id: "outside", when: "As you recover", title: "Getting outside", points: ["Build up to walking outside.", "Short walks slowly build strength and fitness."] },
        { id: "guideline", when: "Over time", title: "Towards the guideline", points: ["Build up to 150 minutes of moderate activity a week.", "Three 10-minute sessions on 5 days is one way."] },
        { id: "every-day", when: "Every day", title: "Listen to your body", points: ["Rest if you feel below par.", "Stop if you feel dizzy or have chest pain."] },
      ],
    },
    sources: [RC_WELLBEING, MAC_ACTIVITY, MAC_EXERCISE_SAFE, MAC_SURGERY, CRUK_AFTER_SURGERY],
    quiz: {
      question: "What does the Roy Castle Lung Cancer Foundation say light exercise can help with?",
      options: [{ text: "Tolerating and recovering from treatment", right: true }, { text: "Replacing your treatment" }, { text: "Nothing, it should be avoided" }],
      why: "Staying active and doing light exercise has been shown to help people better tolerate, respond to and recover from treatments such as chemotherapy, radiotherapy and surgery.",
    },
  },
  {
    id: "lc-smoking",
    kicker: "Living well",
    question: "Is it worth stopping smoking now I've had lung cancer?",
    hook: "Yes. Stopping can help treatment work better and help you heal, and many of the benefits begin straight away. Support makes quitting much more likely to work.",
    short: "Quitting smoking has important benefits whether you have just been diagnosed, are recovering or are living with cancer. It may help treatment work better, help you heal more quickly and improve your breathing. You are much more likely to quit with support from a free NHS stop smoking service and stop smoking aids.",
    sections: [
      {
        heading: "Never too late",
        paragraphs: [
          "Quitting smoking has important benefits if you have just been diagnosed with cancer, are recovering from cancer or are living with cancer. Many of the benefits happen straight away.",
          "It's never too late to quit, and it's easier to stop smoking with the right support. More than 60 out of 100 lung cancer cases in the UK are caused by smoking.",
        ],
      },
      {
        heading: "How it helps treatment and recovery",
        paragraphs: [
          "If you are having cancer treatment, stopping smoking may help the treatment work better. It can help your body respond to the treatment and heal more quickly.",
          "Even stopping 2 to 3 weeks before surgery, and not smoking afterwards, reduces your risk of complications. Your wounds are likely to heal more quickly.",
          "After treatment, stopping smoking helps reduce the risk of some late effects, including effects on the heart and lungs. Smoking makes breathlessness worse, because the smoke irritates and inflames the airways.",
        ],
      },
      {
        heading: "What happens when you stop",
        paragraphs: [
          "After 8 hours, your oxygen levels are recovering and the carbon monoxide level in your blood has reduced by half. After 48 hours, your lungs are clearing out mucus.",
          "After 72 hours, breathing may feel easier because your bronchial tubes have started to relax. After 3 to 9 months, any coughs, wheezing or breathing problems will be improving.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "You are 4 times more likely to quit if you have specialist support from a stop smoking service and use products such as nicotine replacement therapy or medicines to manage cravings.",
          "Local NHS stop smoking services are free. You'll normally be offered one-to-one appointments with an adviser, and they make it easy and affordable to get nicotine replacement therapy or stop smoking medicines.",
          "Your GP, pharmacist or health visitor can refer you, or you can phone your local service yourself. In England, the free Smokefree National Helpline is 0300 123 1044.",
        ],
      },
      {
        heading: "Vapes, and slips",
        paragraphs: [
          "There's evidence that e-cigarettes can help people stop smoking. They cannot be prescribed on the NHS, but your local stop smoking service may offer a free e-cigarette starter pack.",
          "It is not always easy to quit, and it may take you a few tries. Stop smoking services usually offer support for up to 12 weeks, with an emergency number for out-of-hours times to help you cope with cravings.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor, nurse or GP for advice on stopping smoking.",
      "Contact your local NHS stop smoking service, which is free.",
      "Use nicotine replacement therapy or stop smoking medicines alongside specialist support.",
      "Call the free Smokefree National Helpline on 0300 123 1044 if you live in England.",
      "Ask a stop smoking adviser for support if you want to use an e-cigarette to quit.",
      "Join the Roy Castle Lung Cancer Foundation's free Quit Support forum.",
    ],
    tryThisWeek: [
      "Ask your nurse or GP for advice.",
      "Contact your stop smoking service.",
      "Ask about nicotine replacement.",
    ],
    ask: "Can you refer me to a stop smoking service, and which stop smoking aids would suit me?",
    interactive: {
      kind: "timeline",
      title: "What happens when you stop",
      steps: [
        { id: "20-minutes", when: "After 20 minutes", title: "Pulse settling", points: ["Your pulse rate is starting to return to normal."] },
        { id: "8-hours", when: "After 8 hours", title: "Oxygen recovering", points: ["Your oxygen levels are recovering.", "Carbon monoxide in your blood has reduced by half."] },
        { id: "48-hours", when: "After 48 hours", title: "Lungs clearing", points: ["Carbon monoxide drops to that of a non-smoker.", "Your lungs are clearing out mucus."] },
        { id: "72-hours", when: "After 72 hours", title: "Easier breathing", points: ["Your bronchial tubes have started to relax.", "Your energy will be increasing."] },
        { id: "weeks", when: "After 2 to 12 weeks", title: "Better circulation", points: ["Blood pumps through to your heart and muscles much better."] },
        { id: "months", when: "After 3 to 9 months", title: "Fewer coughs", points: ["Coughs, wheezing and breathing problems are improving."] },
      ],
    },
    sources: [MAC_SMOKING, RC_STOP, NHS_QUIT, NHS_STOP_SERVICES, MAC_SURGERY, MAC_BREATHLESS, CRUK_WHAT],
    quiz: {
      question: "How much more likely are you to quit with a stop smoking service and stop smoking aids?",
      options: [{ text: "4 times more likely", right: true }, { text: "No more likely" }, { text: "Half as likely" }],
      why: "You are 4 times more likely to quit if you have specialist support from a stop smoking service and use products such as nicotine replacement therapy or medicines to manage cravings.",
    },
  },
  {
    id: "lc-eating",
    kicker: "Eating well",
    question: "How do I eat well when I have no appetite?",
    hook: "Loss of appetite and weight loss are very common with lung cancer. Little and often, richer food and help from a dietitian can make meals manageable.",
    short: "Loss of appetite and weight loss are common in people with lung cancer, from the cancer, treatment, breathlessness or worry. Small, frequent meals that are high in calories and protein, nourishing drinks, and eating when you feel hungry can all help. Your healthcare team can refer you to a dietitian.",
    sections: [
      {
        heading: "Why appetite drops",
        paragraphs: [
          "Loss of appetite and weight loss are both very common in people with lung cancer. They can be caused by the cancer itself, your treatment or medication, or worry and anxiety.",
          "You may be eating less than you normally do, or your body may not be absorbing enough of the food you eat. Breathlessness, pain and constipation can all affect your appetite.",
          "Some types of cancer make your body use up more energy, even if you are not very active, so you may lose weight even if you are eating well.",
        ],
      },
      {
        heading: "Little and often",
        paragraphs: [
          "Smaller meals can be less of a challenge than a big plateful. Try three small meals with extra snacks and nourishing drinks in between.",
          "If your appetite is better at a particular time of day, plan to eat then, even if it is not a usual mealtime. Do not drink a lot of fluid before a meal, as it can make you feel full.",
          "Keep snacks handy between meals, such as nuts, dried fruit or cheese and crackers. Using a smaller plate and making your food look attractive can help too.",
        ],
      },
      {
        heading: "Adding energy and protein",
        paragraphs: [
          "If you are losing weight, add extra calories to your meals. Add butter, olive oil, grated cheese or cream to savoury foods, and cream, ice cream or honey to puddings.",
          "Try to include protein in each meal. Eggs, meat, fish, milk and dairy products, beans, nuts and seeds are all good protein-rich foods.",
          "Nutritional supplements can be added to milkshakes, soups and puddings, or taken on their own. Your doctor, nurse or dietitian may prescribe or recommend supplement drinks.",
        ],
      },
      {
        heading: "Eating when breathless or sore",
        paragraphs: [
          "Chewing and swallowing can be difficult if you are feeling breathless. Have lots of small meals, take smaller mouthfuls, avoid foods that are difficult to chew, and keep a drink close by to sip.",
          "After radiotherapy to the chest, a soft diet may be easier to swallow until a few weeks after treatment, and soups and stews are easier than meat or toast. Cancer Research UK suggests drinking about 8 glasses of water a day while having treatment.",
          "Softer, moist food, such as nourishing soups, scrambled eggs, pasta in a cheesy sauce or fish with mashed potatoes, can be easier on your throat.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Your healthcare team will monitor your weight and can refer you to a dietitian. A dietitian can advise which foods would be best for you and suggest food supplements.",
          "If you feel too tired to cook, frozen meals, tinned foods and ready meals can help. If friends or relatives want to help by bringing you meals, take them up on the offer.",
        ],
      },
    ],
    helps: [
      "Have small meals, with snacks and nourishing drinks in between.",
      "Eat when your appetite is best, even outside usual mealtimes.",
      "Add butter, cheese or cream to meals if you are losing weight.",
      "Avoid drinking a lot of fluid just before a meal.",
      "Take smaller mouthfuls and keep a drink close by when you are breathless.",
      "Ask your doctor or nurse to refer you to a dietitian.",
    ],
    tryThisWeek: [
      "Eat small meals with snacks.",
      "Add cheese or cream to meals.",
      "Ask to see a dietitian.",
    ],
    ask: "Could I see a dietitian about my appetite and my weight?",
    interactive: {
      kind: "scenarios",
      title: "Mealtime moments",
      scenarios: [
        {
          id: "plate",
          situation: "A full plate of food puts you off eating.",
          options: [{ text: "Have a smaller meal and a snack later", best: true }, { text: "Force yourself to finish it" }],
          why: "Smaller meals can be less of a challenge than a big plateful. Try three small meals with extra snacks and nourishing drinks in between.",
        },
        {
          id: "drink",
          situation: "You drink a big glass of water just before lunch.",
          options: [{ text: "Have drinks between meals instead", best: true }, { text: "Keep drinking to fill up" }],
          why: "Do not drink a lot of fluid before a meal, as it can make you feel full.",
        },
        {
          id: "weight",
          situation: "You are losing weight without trying.",
          options: [{ text: "Add extra calories and tell your team", best: true }, { text: "Cut out rich foods" }],
          why: "If you are losing weight, add extra calories to your meals. Your healthcare team will monitor your weight and can refer you to a dietitian.",
        },
        {
          id: "breathless",
          situation: "Chewing makes you breathless.",
          options: [{ text: "Take smaller mouthfuls of softer food", best: true }, { text: "Eat quickly to get it over with" }],
          why: "Have lots of small meals, take smaller mouthfuls, avoid foods that are difficult to chew, and keep a drink close by to sip.",
        },
      ],
    },
    sources: [RC_WELLBEING, RC_SYMPTOMS, MAC_EATING_TIPS, MAC_EATING, CRUK_BREATHLESS, MAC_WEIGHT, CRUK_RADIO_SE],
    quiz: {
      question: "What does the Roy Castle Lung Cancer Foundation suggest if a big plateful is too much?",
      options: [{ text: "Three small meals with snacks and drinks between", right: true }, { text: "Skipping meals" }, { text: "One large meal a day" }],
      why: "Try three small meals with extra snacks and nourishing drinks in between.",
    },
  },
  {
    id: "lc-work",
    kicker: "Work and money",
    question: "What are my rights at work, and what help is there with money?",
    hook: "Cancer counts as a disability in law from the day you are diagnosed. There are adjustments at work, benefits and free money advice to help.",
    short: "Under the Equality Act 2010, you meet the definition of disability from the day you are diagnosed with cancer, and the protection continues after treatment. Your employer should consider reasonable adjustments, such as a phased return or extra breaks. If cancer affects your income, benefits may help, and Macmillan's money advisers can check what you could claim.",
    sections: [
      {
        heading: "Your rights",
        paragraphs: [
          "You automatically meet the disability definition under the Equality Act 2010 from the day you are diagnosed with cancer. In Northern Ireland, the Disability Discrimination Act 1995 protects you.",
          "The legal protection does not end when treatment finishes. If you have been diagnosed with cancer in the past, you keep it, even if you move to another employer.",
          "By law, you don't need to tell your employer about having lung cancer. But your employer does not have to make a reasonable adjustment unless they know, or should reasonably know, that you have cancer.",
        ],
      },
      {
        heading: "Adjustments at work",
        paragraphs: [
          "Reasonable adjustments are changes to the workplace or your job that let you keep working or return to work. They could include a phased return, different working hours, time off for medical appointments or rehabilitation, or light duties for a time.",
          "Practical adjustments could include extra breaks to help you cope with tiredness, a quiet place to rest, or a parking space near your work.",
          "You and your manager can agree a return-to-work plan, which should be as flexible as possible. You can also ask your doctor for a fit note, which explains how your health affects what you can do at work.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can give you a grant towards practical support, such as specialist equipment or the cost of travelling to work if you cannot use public transport. It will not affect other benefits, and you will not have to pay it back.",
          "It will not pay for reasonable adjustments, which are the changes your employer must legally make to support you.",
        ],
      },
      {
        heading: "Money and benefits",
        paragraphs: [
          "If you are too ill to work, Statutory Sick Pay is paid by your employer for up to 28 weeks. Employment and Support Allowance can give you money to help with living costs if a health condition means you are unable to work.",
          "Personal Independence Payment can help with extra living costs if a long-term condition makes everyday tasks or getting around difficult, and you can get it even if you are working. If you are State Pension age or older and need someone to help look after you, Attendance Allowance may help with extra costs.",
          "In Scotland, these are replaced by Adult Disability Payment and Pension Age Disability Payment. In England, people being treated for cancer can apply for a medical exemption certificate for free prescriptions, and prescriptions are free in Scotland, Wales and Northern Ireland.",
        ],
      },
      {
        heading: "Free money advice",
        paragraphs: [
          "You might be entitled to benefits even if you have never claimed before. Macmillan's money advisers can do a full benefits check and help with forms: call the Macmillan Support Line free on 0808 808 00 00, Monday to Friday, 8am to 6pm.",
          "The Roy Castle Lung Cancer Foundation says it is a good idea to speak to your bank, as some may be able to make allowances around loan and mortgage payments.",
        ],
      },
    ],
    helps: [
      "Talk to your employer about reasonable adjustments, such as a phased return or extra breaks.",
      "Agree a flexible return-to-work plan with your manager.",
      "Ask your doctor for a fit note that explains how your health affects your work.",
      "Check whether Access to Work could help with costs such as travel.",
      "Ask a Macmillan money adviser for a free benefits check on 0808 808 00 00.",
      "In England, apply for a medical exemption certificate for free prescriptions.",
    ],
    tryThisWeek: [
      "Ask about a phased return.",
      "Book a free benefits check.",
      "Apply for free prescriptions.",
    ],
    ask: "Can you give me a fit note that explains how my health affects my work?",
    interactive: {
      kind: "scenarios",
      title: "Work and money moments",
      scenarios: [
        {
          id: "telling",
          situation: "You want adjustments but have not told your employer about the cancer.",
          options: [{ text: "Tell them, so they can make adjustments", best: true }, { text: "Expect changes without telling them" }],
          why: "Your employer does not have to make a reasonable adjustment unless they know, or should reasonably know, that you have cancer.",
        },
        {
          id: "afternoons",
          situation: "Your energy runs out by the afternoon at work.",
          options: [{ text: "Ask about extra breaks or different hours", best: true }, { text: "Push on and say nothing" }],
          why: "Practical adjustments could include extra breaks to help you cope with tiredness, a quiet place to rest, or a parking space near your work.",
        },
        {
          id: "travel",
          situation: "You cannot manage public transport to work.",
          options: [{ text: "Ask Access to Work about travel costs", best: true }, { text: "Give up the job" }],
          why: "Access to Work can give you a grant towards practical support, such as the cost of travelling to work if you cannot use public transport.",
        },
        {
          id: "money",
          situation: "Your income has dropped and you are not sure what you can claim.",
          options: [{ text: "Ask a money adviser for a benefits check", best: true }, { text: "Assume you cannot claim anything" }],
          why: "You might be entitled to benefits even if you have never claimed before.",
        },
      ],
    },
    sources: [GOV_DISABILITY, MAC_RIGHTS, MAC_ADJUSTMENTS, MAC_RETURNING, RC_WORK, GOV_ATW, GOV_SSP, GOV_PIP, GOV_AA, MAC_MONEY_FAQS, MAC_MONEY_ADVICE, GOV_ESA, RC_FINANCIAL],
    quiz: {
      question: "When do you meet the Equality Act's definition of disability if you have cancer?",
      options: [{ text: "From the day you are diagnosed", right: true }, { text: "After a year off work" }, { text: "Only while you are having treatment" }],
      why: "You automatically meet the disability definition under the Equality Act 2010 from the day you are diagnosed with cancer.",
    },
  },
  {
    id: "lc-mood",
    kicker: "Feelings",
    question: "Why do I feel low now that treatment has finished?",
    hook: "Many people expect to feel relieved when treatment ends, and are surprised to feel flat, anxious or lost. It is common, and help is there.",
    short: "When treatment ends, you may feel relieved but also anxious, uncertain or low, and emotional recovery can take longer than physical recovery. Feelings of sadness often improve with time, but if a low mood lasts more than 2 weeks, talk to your doctor or nurse. If you ever feel you cannot keep yourself safe, call 999 or go to A&E; Samaritans are free on 116 123, day or night.",
    sections: [
      {
        heading: "Why the end can feel hard",
        paragraphs: [
          "When your treatment ends, you may feel relieved. But you may still have side effects from treatment and other emotions to cope with, and it can take time to adjust to what is now normal for you.",
          "Many people find it hard at first not meeting with their cancer team as often. It is important to remember that you can contact them if you need to.",
          "Sometimes emotional recovery can take longer than physical recovery. But things should improve with time and the right support.",
        ],
      },
      {
        heading: "Sadness, worry or depression?",
        paragraphs: [
          "People often have feelings of sadness or loss after cancer treatment. As you begin to recover, these feelings often improve, but for some people the low mood continues or gets worse and may become depression.",
          "Symptoms of depression can include feeling low or sad most of the time, losing interest in things you used to enjoy, changes in sleeping, eating or concentration, and feeling helpless. If these feelings go on for more than 2 weeks, talk to your doctor or nurse.",
          "Depression is a real illness with real symptoms, not a sign of weakness. With the right treatment and support, most people with depression can make a full recovery.",
        ],
      },
      {
        heading: "Things that can help",
        paragraphs: [
          "Try not to expect too much of yourself too soon. Think about your recovery as a set of small, achievable goals, such as going for a walk when you feel able.",
          "Talking to someone can help, whether that is family, friends, your lung cancer nurse specialist or a counsellor. Let people know when you don't want to talk about lung cancer, and find things to enjoy that don't include it.",
          "Being physically active during and after treatment can help improve your mood and confidence. Focusing on your breathing, in slowly and deeply through your nose and slowly out through your mouth, can help with anxiety.",
        ],
      },
      {
        heading: "Getting more support",
        paragraphs: [
          "Your GP, specialist nurse or another healthcare professional can listen to you, refer you to a counsellor or psychologist, or talk to you about medication. If you take an antidepressant, you should not stop taking it suddenly, and it is important to follow your doctor's advice when stopping.",
          "You can refer yourself to NHS talking therapies for low mood, worry, anxiety and depression without speaking to a GP, as long as you are registered with one.",
          "You can call the Macmillan Support Line free on 0808 808 00 00, 7 days a week, 8am to 8pm. The Roy Castle Lung Cancer Foundation's lung cancer nurses are on 0800 358 7200.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online, or call 111 and select the mental health option. You can also ask for an urgent GP appointment.",
          "Call 999 or go to A&E now if someone's life is at risk, or if you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one.",
          "Samaritans are there to listen, whatever you are going through. You can call them free on 116 123, any time, day or night.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Set small, achievable goals, such as a walk when you feel able.",
      "Talk to someone you trust about how you feel.",
      "Refer yourself to NHS talking therapies if you are registered with a GP.",
      "For urgent help, call 111 and select the mental health option.",
      "Call 999 or go to A&E if a life is at risk; Samaritans are free on 116 123, day or night.",
    ],
    tryThisWeek: [
      "Talk to your nurse if it lasts 2 weeks.",
      "Set one small goal.",
      "Tell someone how you feel.",
    ],
    ask: "I have felt low since my treatment ended. Could I be referred for talking therapy or counselling?",
    interactive: {
      kind: "signs",
      title: "How I have been feeling",
      intro: "Tick any you have noticed for more than 2 weeks. Share the list with your doctor or nurse.",
      signs: ["Feeling low or sad most of the time", "Losing interest in things I enjoyed", "Sleep, eating or concentration changes", "Feeling helpless or vulnerable", "Problems starting or finishing tasks", "Racing thoughts or a sense of dread", "Feeling very tired"],
      after: "Talk to your doctor or nurse. For urgent help, call 111 (mental health option) or Samaritans free on 116 123. Call 999 if a life is at risk.",
      copyHeading: "How I have been feeling since treatment",
    },
    sources: [MAC_FINISHING, MAC_RECOVER, MAC_DEPRESSION, MAC_ANXIETY, NHS_DEPRESSION, NHS_TALKING, NHS_URGENT, SAMARITANS, RC_WELLBEING, MAC_ACTIVE_AFTER, RC_PHONE],
    quiz: {
      question: "When does Macmillan suggest talking to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, they always pass" }],
      why: "If these feelings go on for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
];
