import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Stomach cancer page's pieces
// (content/library-conditions/cancer-more-2.ts, `stomachCancer`). Every sentence was written from wording
// checked on 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those
// pages do not say. Most of it comes from the NHS, Macmillan Cancer Support, Cancer Research UK, the
// Oesophageal Patients Association (OPA, which also covers stomach cancer), Guts UK, the government's pages
// on disability and Access to Work, and Samaritans. No survival or life-expectancy figures are given. Urgent
// guidance (signs of infection during chemotherapy, blood clots, swallowing problems, a hot or leaking wound)
// is given as the sources give it. The mood answer follows safe-messaging guidance and gives the crisis routes
// exactly as the NHS, Macmillan and Samaritans state them. "H pylori" is written without a full stop inside
// the answers, as the NHS does, so a sentence splitter can round-trip each paragraph.
// General information only; it never replaces what a person's own cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const opa = (label: string, path: string): LearnSource => ({ label: `OPA: ${label}`, url: `https://opa.org.uk/${path}` });
const guts = (label: string, path: string): LearnSource => ({ label: `Guts UK: ${label}`, url: `https://gutscharity.org.uk/advice-and-information/conditions/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_TREATMENT = nhs("Treatment for stomach cancer", "conditions/stomach-cancer/treatment/");
const NHS_TESTS = nhs("Tests and next steps for stomach cancer", "conditions/stomach-cancer/tests-and-next-steps/");
const NHS_CAUSES = nhs("Causes of stomach cancer", "conditions/stomach-cancer/causes/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_B12 = nhs("Vitamin B12 or folate deficiency anaemia", "conditions/vitamin-b12-or-folate-deficiency-anaemia/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const MAC_TREATMENT = mac("Treatment for stomach cancer", "stomach-cancer/treatment-for-stomach-cancer");
const MAC_STAGING = mac("Staging and grading of stomach cancer", "stomach-cancer/staging-and-grading-of-stomach-cancer");
const MAC_CAUSES = mac("Causes and risk factors of stomach cancer", "stomach-cancer/causes-and-risk-factors-of-stomach-cancer");
const MAC_MDT = mac("Multidisciplinary team (MDT) for stomach cancer", "stomach-cancer/multidisciplinary-team-for-stomach-cancer");
const MAC_RECOVERING = mac("Recovering from stomach cancer surgery", "stomach-cancer/recovering-from-stomach-cancer-surgery");
const MAC_SURGERY = mac("Surgery for stomach cancer", "treatments-and-drugs/surgery-for-stomach-cancer");
const MAC_CHEMO = mac("Chemotherapy for stomach cancer", "treatments-and-drugs/chemotherapy-for-stomach-cancer");
const MAC_RADIO = mac("Radiotherapy for stomach cancer", "treatments-and-drugs/radiotherapy-for-stomach-cancer");
const MAC_TARGETED = mac("Targeted therapies and immunotherapy for stomach cancer", "treatments-and-drugs/targeted-therapies-and-immunotherapy-for-stomach-cancer");
const MAC_DUMPING = mac("Dumping syndrome", "impacts-of-cancer/dumping-syndrome");
const MAC_WEIGHT = mac("Changes in weight", "treatment/coping-with-treatment/changes-in-weight");
const MAC_NUTRITION = mac("Nutrition support and tube feeding with cancer", "impacts-of-cancer/nutritional-support");
const MAC_EATING = mac("Eating problems and cancer", "impacts-of-cancer/eating-problems");
const MAC_EATING_TIPS = mac("Tips for managing eating problems", "impacts-of-cancer/eating-problems/tips-for-managing-eating-problems");
const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_FOLLOWUP = mac("Follow-up care after cancer treatment", "after-treatment/follow-up-care-after-treatment");
const MAC_FINISHING = mac("Finishing cancer treatment", "after-treatment/finishing-treatment");
const MAC_RECOVER = mac("Beginning to recover", "after-treatment/beginning-to-recover");
const MAC_UNCERTAINTY = mac("Uncertainty and cancer", "impacts-of-cancer/uncertainty");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");
const MAC_BUDDIES = mac("Get support from Macmillan Buddies", "get-help/emotional-help/macmillan-buddies");
const MAC_RETURNING = mac("Returning to work", "impacts-of-cancer/work-and-cancer/returning-to-work");
const MAC_ADJUSTMENTS = mac("Reasonable adjustments", "impacts-of-cancer/work-and-cancer/reasonable-adjustments");
const MAC_RIGHTS = mac("Cancer and employment rights", "impacts-of-cancer/work-and-cancer/cancer-and-employment-rights");
const MAC_SICKPAY = mac("Cancer and sick pay entitlement", "impacts-of-cancer/work-and-cancer/cancer-and-sick-pay-entitlement");
const MAC_BENEFITS = mac("Benefits and financial support", "impacts-of-cancer/benefits-and-financial-support");

const CRUK_CAUSES = cruk("Risks and causes of stomach cancer", "stomach-cancer/causes-risks");
const CRUK_HPYLORI = cruk("Does H. pylori cause cancer?", "causes-of-cancer/infections-eg-hpv-and-cancer/does-hpylori-cause-cancer");
const CRUK_SCREENING = cruk("Screening for stomach cancer", "stomach-cancer/getting-diagnosed/screening");
const CRUK_TNM = cruk("TNM staging for stomach cancer", "stomach-cancer/stages/tnm-staging");
const CRUK_STAGE1 = cruk("Stage 1 stomach cancer", "stomach-cancer/stages/stage-1");
const CRUK_TYPES = cruk("Types and grades of stomach cancer", "stomach-cancer/types-and-grades");
const CRUK_FOLLOWUP = cruk("Follow up appointments after stomach cancer treatment", "stomach-cancer/treatment/follow-up-appointments");
const CRUK_AFTER = cruk("After stomach cancer surgery", "stomach-cancer/treatment/surgery/after-surgery");
const CRUK_PROBLEMS = cruk("Problems after surgery for stomach cancer", "stomach-cancer/treatment/surgery/problems");
const CRUK_CHEMO = cruk("Chemotherapy for stomach cancer", "stomach-cancer/treatment/chemotherapy-stomach-cancer");
const CRUK_EATING = cruk("Eating problems and stomach cancer", "stomach-cancer/living-with/eating-problems");
const CRUK_WEIGHTLOSS = cruk("Stomach cancer and weight loss", "stomach-cancer/living-with/weight-loss");
const CRUK_COPING = cruk("Coping and support when you have stomach cancer", "stomach-cancer/living-with/coping");

const OPA_CARD = opa("English Dual Purpose Card", "product/english-dual-purpose-card/");
const OPA_CARDS = opa("Restaurant Cards", "product-category/restaurant-cards/");
const OPA_RADAR = opa("Radar Key leaflet", "product/radar-leaflet/");
const OPA_BUDDIES = opa("Patient Buddies", "patient-buddies/");
const OPA_GROUPS = opa("Support Meetings", "support-groups/");
const OPA_MONEY = opa("Money Worries", "money-worries/");

const GUTS_HPYLORI = guts("Helicobacter Pylori (H.pylori)", "helicobacter-pylori/");

const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const stomachCancerAnswers: LearnArticle[] = [
  {
    id: "stc-what-you-had",
    kicker: "Understanding",
    question: "What treatment did I have for stomach cancer, and why?",
    hook: "Most people have surgery and chemotherapy. Knowing what each part did helps the changes since make sense.",
    short: "Treatment for stomach cancer usually includes surgery and chemotherapy, and may also include radiotherapy or targeted medicines. Surgery removes part or all of the stomach, and chemotherapy is often given before and after it. Your specialist team explains each treatment and supports your recovery.",
    sections: [
      {
        heading: "The main treatments",
        paragraphs: [
          "Treatment for stomach cancer depends on the type and size of the cancer, where it is, whether it has spread, and your general health. It usually includes surgery and chemotherapy. It may also include radiotherapy, and treatment with targeted medicines.",
          "A team of specialists, called a multidisciplinary team, meets to talk about the best treatment for you. It usually includes a surgeon, cancer doctors, a gastroenterologist, a clinical nurse specialist and a dietitian.",
        ],
      },
      {
        heading: "Surgery to the stomach",
        paragraphs: [
          "Depending on where the cancer is and its size, the surgeon removes part of the stomach, called a partial gastrectomy, or all of it, called a total gastrectomy. A total gastrectomy is usually used if the cancer is in the upper or middle part of the stomach.",
          "The surgeon also removes an area of healthy tissue around the cancer, nearby lymph nodes and the omentum, the fatty tissue that covers the stomach. After a total gastrectomy, a part of the small bowel is joined to the oesophagus.",
          "For a very early cancer that only affects the inner layer of the stomach, the cancer may be removed using an endoscope instead. This is called an endoscopic mucosal resection or an endoscopic submucosal dissection.",
        ],
      },
      {
        heading: "Chemotherapy, before and after",
        paragraphs: [
          "Chemotherapy uses anti-cancer drugs to destroy cancer cells. When it is given both before and after surgery, it is called perioperative chemotherapy. It shrinks the tumour to make surgery more effective, and this reduces the chance of the cancer coming back.",
          "You usually have chemotherapy for 2 to 3 months before the operation, and again for 2 to 3 months after it. After each session you usually have a rest period of a few weeks, and the treatment and the rest period make up a cycle.",
        ],
      },
      {
        heading: "Radiotherapy and targeted drugs",
        paragraphs: [
          "Radiotherapy uses high-energy rays to destroy cancer cells. For stomach cancer it may be given to help symptoms, such as bleeding from the stomach, or as extra treatment to prevent the cancer from coming back.",
          "A targeted therapy drug called trastuzumab only works for stomach cancers with high levels of a protein called HER2. Between 10 and 15 out of every 100 people with stomach cancer have a HER2-positive cancer. An immunotherapy drug called nivolumab may be given along with chemotherapy for advanced stomach cancer.",
        ],
      },
      {
        heading: "When to call your team",
        paragraphs: [
          "If you have any symptoms or side effects that you are worried about, talk to your specialist team. You do not need to wait for your next check-up.",
          "During chemotherapy, call your care team now if you have a high temperature or other signs of an infection, or sudden breathlessness and sharp chest pain. Call NHS 111 if you are not sure how to contact your care team.",
          "Contact your hospital advice line immediately if you have signs of infection, such as a temperature above 37 and a half degrees or below 36 degrees, or generally feeling unwell. Infections can make you very unwell very quickly.",
        ],
      },
    ],
    helps: [
      "Ask your specialist team to explain your treatments, their benefits and their side effects.",
      "Keep your clinical nurse specialist's details; they are your main point of contact during and after treatment.",
      "Talk to your specialist team about any symptoms or side effects that worry you, without waiting for your next check-up.",
      "During chemotherapy, call your care team now if you have a high temperature or other signs of an infection.",
      "Call NHS 111 if you are not sure how to contact your care team.",
      "Let your doctors know if you take any supplements or herbal remedies.",
    ],
    tryThisWeek: [
      "Ask your team to explain your treatment.",
      "Save your nurse specialist's number.",
      "Note any side effects to report.",
    ],
    ask: "Which operation did I have, and will I have more chemotherapy or any other treatment?",
    interactive: {
      kind: "flip-cards",
      title: "The treatments, one by one",
      intro: "Turn a card to see what each treatment does.",
      cards: [
        { id: "partial", front: "Partial gastrectomy", when: "Often if the cancer is in the lower stomach", back: "Part of the stomach is removed and the rest is joined to the small bowel. Keeping part of the stomach makes eating easier after surgery." },
        { id: "total", front: "Total gastrectomy", when: "Usually if the cancer is in the upper or middle stomach", back: "The whole stomach is removed, and a part of the small bowel is joined to the oesophagus." },
        { id: "endoscopic", front: "Endoscopic removal", when: "For a very small, very early cancer", back: "The cancer is removed from the inner layer of the stomach using an endoscope, a thin flexible tube." },
        { id: "chemo", front: "Perioperative chemotherapy", when: "2 to 3 months before and after surgery", back: "It shrinks the tumour to make surgery more effective, and reduces the chance of the cancer coming back." },
        { id: "radio", front: "Radiotherapy", when: "To help symptoms, or as extra treatment", back: "High-energy rays destroy cancer cells. It can help symptoms such as bleeding from the stomach." },
        { id: "targeted", front: "Trastuzumab and nivolumab", when: "Mainly for advanced stomach cancer", back: "Trastuzumab only works for HER2-positive cancers. Nivolumab helps the immune system find and attack cancer cells." },
      ],
    },
    sources: [NHS_TREATMENT, MAC_MDT, MAC_SURGERY, MAC_TREATMENT, CRUK_STAGE1, MAC_CHEMO, MAC_RADIO, MAC_TARGETED, NHS_CHEMO, CRUK_CHEMO, NHS_TESTS],
    quiz: {
      question: "What is chemotherapy given both before and after surgery called?",
      options: [{ text: "Perioperative chemotherapy", right: true }, { text: "Palliative radiotherapy" }, { text: "Endoscopic resection" }],
      why: "When it is given both before and after surgery, it is called perioperative chemotherapy.",
    },
  },
  {
    id: "stc-stage",
    kicker: "Understanding",
    question: "What does the stage of my stomach cancer mean?",
    hook: "The stage describes how far the cancer had grown and whether it had spread. It helped your team choose your treatment.",
    short: "The stage describes how big the cancer is and how far it has spread. Doctors most often use the TNM system, and may also use number stages from 1 to 4. Your cancer doctor or specialist nurse can explain what your own stage means.",
    sections: [
      {
        heading: "Why the stage matters",
        paragraphs: [
          "The stage of a cancer tells you how big it is and how far it has spread. Knowing the stage helps doctors decide on the best treatment for you.",
          "Your scans give some information about the stage, but your doctor may not be able to tell you the exact stage until the cancer has been removed with surgery.",
        ],
      },
      {
        heading: "T, N and M",
        paragraphs: [
          "T describes how far the tumour has grown into the stomach wall. T1 means it is in the inner layer, and T4 means it has grown through the outer lining of the stomach, or into nearby structures.",
          "N describes whether the cancer has spread to the lymph nodes. N0 means there are no cancer cells in any nearby lymph nodes, N1 means there are cancer cells in 1 to 2, N2 in 3 to 6, and N3 in 7 or more.",
          "M describes whether the cancer has spread to other parts of the body. M0 means it has not spread, and M1 means it has spread to other parts of the body, such as the lungs or liver.",
        ],
      },
      {
        heading: "Number stages and grades",
        paragraphs: [
          "Another system uses the numbers 1 to 4. There are different number staging systems, depending on whether the cancer is staged before or after surgery, and your cancer doctor can explain how the number stage relates to the TNM stage.",
          "Grading compares the cancer cells with normal cells under the microscope. Grade 1 cells look similar to normal cells and usually grow slowly, and grade 3 cells look very different from normal cells and may grow more quickly.",
        ],
      },
      {
        heading: "Before and after surgery",
        paragraphs: [
          "Clinical staging uses your examination, tests and scans, and doctors use it to plan your treatment. Pathological staging uses the tissue the surgeon removes, and is generally a more precise way to find out how far the cancer has spread.",
          "If you had chemotherapy before surgery, the doctor stages you again after the operation. Your stage after surgery might be different to your clinical stage.",
        ],
      },
      {
        heading: "Talking it through",
        paragraphs: [
          "Waiting to know the stage and grade of your cancer can be a worrying time. Statistics are based on large numbers of people, so they cannot predict what will happen to you as an individual.",
          "If you read anything that worries you or you cannot understand, talk to your cancer doctor or specialist nurse. You can also call the Macmillan Support Line free on 0808 808 00 00.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor to explain your stage, and how the number stage relates to the TNM stage.",
      "Ask whether your stage was worked out before or after surgery.",
      "Talk to your cancer doctor or specialist nurse about any statistics that worry you.",
      "Ask your specialist nurse or cancer doctor where to find the best information.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if you want to talk.",
    ],
    tryThisWeek: [
      "Ask your doctor to explain your stage.",
      "Note any figures that worry you.",
      "Call Macmillan if you want to talk.",
    ],
    ask: "What were the T, N and M parts of my stage, and was it worked out before or after surgery?",
    interactive: {
      kind: "flip-cards",
      title: "Reading your stage",
      intro: "Turn a card to see what each letter or number describes.",
      cards: [
        { id: "t", front: "T for tumour", when: "How far it grew into the stomach wall", back: "T1 is in the inner layer. T4 has grown through the outer lining of the stomach, or into nearby structures." },
        { id: "n", front: "N for nodes", when: "Whether lymph nodes contain cancer cells", back: "N0 means none. N1 means 1 to 2 nearby nodes, N2 means 3 to 6 and N3 means 7 or more." },
        { id: "m", front: "M for metastasis", when: "Whether it spread further in the body", back: "M0 means it has not spread to other parts of the body. M1 means it has." },
        { id: "number", front: "Number stage", when: "Stages 1 to 4", back: "Another way to describe the stage. Your cancer doctor can explain how it relates to the TNM stage." },
        { id: "grade", front: "Grade", when: "How the cells look under a microscope", back: "Grade 1 cells look similar to normal cells. Grade 3 cells look very different and may grow more quickly." },
      ],
    },
    sources: [CRUK_TNM, MAC_STAGING, CRUK_TYPES, CRUK_STAGE1, MAC_UNCERTAINTY],
    quiz: {
      question: "When might your doctor be able to tell you the exact stage?",
      options: [{ text: "After the cancer is removed with surgery", right: true }, { text: "Before any tests are done" }, { text: "Only when follow-up ends" }],
      why: "Your doctor may not be able to tell you the exact stage until the cancer has been removed with surgery.",
    },
  },
  {
    id: "stc-follow-up",
    kicker: "Understanding",
    question: "What happens at follow-up appointments after stomach cancer?",
    hook: "Check-ups look at how you are recovering, eating and feeling. You do not have to wait for one if something worries you.",
    short: "Follow-up appointments check how you are and whether you have any problems or worries. You may have tests such as blood tests, scans or an endoscopy, and see a dietitian or physiotherapist. Over time the appointments become less frequent, and you can contact your team between them.",
    sections: [
      {
        heading: "Before you leave hospital",
        paragraphs: [
          "Before you leave hospital, you will be given an appointment for your check-up at an outpatient clinic, and you may be given contact details for your specialist nurse. If you have any problems before this appointment, you can contact your cancer doctor, specialist nurse or ward nurse for advice.",
        ],
      },
      {
        heading: "What happens at an appointment",
        paragraphs: [
          "Your doctor or nurse examines you and asks how you are feeling, whether you have had any symptoms or side effects, and if you are worried about anything. You might also have blood tests, x-rays, a CT scan, an ultrasound scan or an endoscopy at some visits.",
          "You may also see physiotherapists and dietitians. Seeing the dietitian as soon as you have a problem can help you sort it out before it becomes a big issue.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Stomach cancer guidelines say that doctors should arrange your check-ups based on your individual needs, such as how you are feeling and the type of treatment you have had. Over time, these appointments become less frequent.",
          "Some hospitals use patient initiated follow-up, where you take the lead in arranging to see your doctor or specialist nurse once they are happy with your progress. You might make an appointment if you have noticed a change in your body that worries you.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your doctor or specialist nurse if you have any concerns, or if you notice any new symptoms, between appointments. You do not have to wait until your next visit.",
          "If you are having problems swallowing, tell your specialist nurse or cancer doctor straight away. Tell a nurse or your cancer doctor straight away if your wound becomes hot or painful, or leaks any fluid.",
          "If you have symptoms of a blood clot at home, such as shortness of breath, chest pain or a swollen, hot, red or sore area in your leg, contact a doctor immediately. This might be your emergency GP service, or call 999 or go to your nearest A&E.",
        ],
      },
      {
        heading: "Getting the most from it",
        paragraphs: [
          "Write down any questions before your appointment, and take someone with you to help you remember what was said. Always tell your cancer team about any ongoing or new symptoms, and how you are coping with your feelings.",
          "Your cancer team sends your GP a report about your treatment, called a treatment summary. A cancer care review with your GP practice is usually done within 12 months of being diagnosed, but you can ask for one at any point.",
        ],
      },
    ],
    helps: [
      "Write down any questions before each appointment.",
      "Take someone with you to help you remember what was said.",
      "Ask to see the dietitian as soon as you have an eating problem.",
      "Contact your doctor or specialist nurse about new symptoms, without waiting for your next visit.",
      "Tell your specialist nurse or cancer doctor straight away if you have problems swallowing.",
      "Ask your GP practice for a cancer care review.",
    ],
    tryThisWeek: [
      "Write down your questions.",
      "Bring someone to your next visit.",
      "Ask about a cancer care review.",
    ],
    ask: "How will my follow-up be arranged, and who do I contact between appointments?",
    interactive: {
      kind: "timeline",
      title: "Follow-up, step by step",
      steps: [
        { id: "leaving", when: "Leaving hospital", title: "An appointment and a contact", points: ["You are given an outpatient check-up appointment.", "You may be given your specialist nurse's contact details."] },
        { id: "first", when: "First check-up", title: "How you are recovering", points: ["A good time to talk about any problems after your operation.", "You may see a dietitian or physiotherapist."] },
        { id: "year", when: "The first year", title: "Regular check-ups", points: ["Appointments may happen every few months.", "You may have a blood test or scan beforehand."] },
        { id: "later", when: "Over time", title: "Less often", points: ["Appointments become less frequent.", "You may arrange them yourself when you need one."] },
        { id: "any", when: "Any time", title: "Between visits", points: ["Contact your team about new symptoms or concerns.", "You do not have to wait until your next visit."] },
      ],
    },
    sources: [MAC_RECOVERING, CRUK_FOLLOWUP, MAC_SURGERY, CRUK_PROBLEMS, MAC_FOLLOWUP],
    quiz: {
      question: "You notice a new symptom between appointments. What should you do?",
      options: [{ text: "Contact your doctor or specialist nurse", right: true }, { text: "Wait for your next check-up" }, { text: "Ignore it unless it lasts a year" }],
      why: "Contact your doctor or specialist nurse if you have any concerns, or if you notice any new symptoms, between appointments. You do not have to wait until your next visit.",
    },
  },
  {
    id: "stc-h-pylori",
    kicker: "Understanding",
    question: "Did H pylori play a part, and should my family be checked?",
    hook: "A common stomach infection is one of the main risk factors. Most stomach cancers are not inherited, but close relatives can talk to their GP.",
    short: "H pylori is a common bacteria that lives in the lining of the stomach, and it causes around 40 out of 100 stomach cancers in the UK. For most people it causes no problems, and it can be found with simple tests and treated with antibiotics. Most stomach cancers are not caused by inherited genes, but relatives worried about family history can talk to their GP.",
    sections: [
      {
        heading: "What H pylori is",
        paragraphs: [
          "Helicobacter pylori, or H pylori, is a bacteria that lives in the lining of the stomach. Up to 2 in 5 people in the UK have it in their stomach, and for most people it will not cause any problems.",
          "But sometimes it can cause the stomach to become inflamed, and cause changes in the cells that line the stomach. Over time, these cells become abnormal and may become cancer. Infection with H pylori causes around 40 out of 100 stomach cancers in the UK.",
        ],
      },
      {
        heading: "Testing and treatment",
        paragraphs: [
          "H pylori can be detected with a blood test, a breath test or by testing a sample of your poo. The treatment is a course of antibiotics with a medicine to reduce the amount of acid in your stomach.",
          "It is important to complete the full treatment as instructed by your doctor. Your doctor should always check that the infection has gone after treatment, and if it has not, further treatment is possible.",
        ],
      },
      {
        heading: "Why it can run in families",
        paragraphs: [
          "Most stomach cancers are not caused by inherited cancer genes. Most people who develop stomach cancer do not have a strong family history of it.",
          "Sometimes stomach cancer runs in families because close family members share some risk factors, such as eating a similar diet or having H pylori infection. People who have H pylori almost always catch it in childhood, and it is usually passed on within families, mostly from parents to children.",
          "Rarely, it is caused by an inherited gene. People with a rare condition such as hereditary diffuse gastric cancer are usually diagnosed after assessment at a genetics clinic.",
        ],
      },
      {
        heading: "What your family can do",
        paragraphs: [
          "Guts UK says H pylori should be tested for in the first degree relatives of people with stomach cancer. These are your parents, brothers, sisters and children, and they can discuss this with their GP.",
          "There is no national screening programme for stomach cancer in the UK. Relatives concerned about a family history can speak to their GP, who may reassure them or refer them to a family cancer clinic or genetic clinic. A strong family history might include many close family members with stomach cancer, or close family members diagnosed at a young age.",
        ],
      },
      {
        heading: "Other risks that can change",
        paragraphs: [
          "Stomach cancer is not infectious and cannot be passed from one person to another. Smoking increases the risk, and the risk reduces when people stop smoking.",
          "To reduce the risk, the NHS suggests trying to quit smoking, cutting down on salt, avoiding drinking more than 14 units of alcohol a week, and eating at least 5 portions of fruit and vegetables every day.",
        ],
      },
    ],
    helps: [
      "Complete the full course of any H pylori treatment, as your doctor instructs.",
      "Ask your doctor to check that H pylori has gone after treatment.",
      "Suggest your parents, brothers, sisters and children discuss H pylori testing with their GP.",
      "Write down which relatives had cancer and at what age, to help a GP assess your family history.",
      "Try to quit smoking and cut down on salt.",
    ],
    tryThisWeek: [
      "Finish any H pylori treatment.",
      "Tell close relatives about testing.",
      "Write down your family history.",
    ],
    ask: "Was H pylori found, and should my family be tested or referred to a genetics clinic?",
    interactive: {
      kind: "risk-check",
      title: "Family and risk",
      intro: "Tick any that apply to you or your family. Each one says what can be done.",
      items: [
        { id: "hpylori", label: "H pylori infection", note: "It can be found with simple tests and treated with antibiotics and a medicine to reduce stomach acid.", changeable: true },
        { id: "relative", label: "A parent, brother or sister had it", note: "Close relatives of people with stomach cancer can discuss H pylori testing with their GP.", changeable: false },
        { id: "many", label: "Many close relatives had it", note: "This might be a strong family history. A GP may refer to a family cancer clinic or genetic clinic.", changeable: false },
        { id: "young", label: "Relatives diagnosed young", note: "Speak to a GP. It might help to have the family history written down.", changeable: false },
        { id: "smoking", label: "Smoking", note: "Smoking increases the risk of stomach cancer, and the risk reduces when people stop.", changeable: true },
        { id: "salt", label: "A lot of salt in the diet", note: "Too much salt can increase the risk. The NHS suggests cutting down on salt.", changeable: true },
        { id: "age", label: "Being over 50, or a man", note: "Anyone can get stomach cancer, but it is more common in older people and in men.", changeable: false },
      ],
    },
    sources: [MAC_CAUSES, GUTS_HPYLORI, CRUK_CAUSES, CRUK_HPYLORI, CRUK_SCREENING, NHS_CAUSES],
    quiz: {
      question: "How is H pylori treated?",
      options: [{ text: "Antibiotics with a medicine to reduce stomach acid", right: true }, { text: "An operation to remove the stomach" }, { text: "It cannot be treated" }],
      why: "The treatment is a course of antibiotics with a medicine to reduce the amount of acid in your stomach.",
    },
  },
  {
    id: "stc-eating",
    kicker: "Recovery",
    question: "How do I eat after a gastrectomy?",
    hook: "Your stomach now holds far less, or it is gone. Small meals, often, and time help your body adjust.",
    short: "After a partial gastrectomy, the remaining stomach holds less food, and after a total gastrectomy food goes straight into the small bowel. Eating smaller meals often, about every two hours, helps, and over time most people manage bigger portions. A dietitian will help you find what works.",
    sections: [
      {
        heading: "Why eating changes",
        paragraphs: [
          "If you have had part of your stomach removed, the remaining stomach will not be able to hold as much food as before. You may feel full after eating small amounts, and some foods might make you feel sick, or give you indigestion or diarrhoea.",
          "If you had all of the stomach removed, the food you eat goes straight from the oesophagus into the small bowel. This does not affect being able to digest food, but the small bowel cannot hold as much food as the stomach could. Your body will slowly adjust, so you can eat more at one time.",
        ],
      },
      {
        heading: "In hospital",
        paragraphs: [
          "You will not usually have anything to eat for the first 48 hours after surgery. You then have small sips of clear fluids, then small amounts of soft foods, and then normal food in smaller portions. This gives the new joins made during surgery time to heal.",
          "You are likely to go home with a feeding tube in place, to make sure you get enough food and nutrients. Your nurse or dietitian shows you how to use it, and the tube can be removed when you are eating and drinking enough.",
        ],
      },
      {
        heading: "Little and often",
        paragraphs: [
          "Over one day, you should eat the same amount of food you normally would, but split it into smaller, frequent meals, about every two hours. It is important to try to eat, even if you do not feel like it.",
          "Try to eat slowly and chew food well, as wind and pain can be a problem after stomach surgery. If you have indigestion or reflux, try to stay sitting up for at least an hour after eating and drinking.",
        ],
      },
      {
        heading: "Finding what suits you",
        paragraphs: [
          "Many people find that certain foods upset their digestion, and which foods do this varies from person to person. Keeping a food diary for a couple of weeks can help you look back and find which foods upset your system.",
          "Some people are sick in the mornings, because bile and digestive juices build up overnight in the small bowel. This can be upsetting, but it may only last for a short time, and your cancer doctor or specialist nurse might give you medicines to help.",
        ],
      },
      {
        heading: "Who can help",
        paragraphs: [
          "You will usually meet a dietitian, who will talk with you about the effects of surgery on your diet. If you continue to have problems with food, talk to your cancer doctor or dietitian.",
          "Tell your cancer doctor or specialist nurse if diarrhoea or vomiting do not improve, or if you are struggling to eat. If you are having problems swallowing, tell them straight away.",
        ],
      },
    ],
    helps: [
      "Split your food into smaller, frequent meals, about every two hours.",
      "Try to eat, even if you do not feel like it.",
      "Eat slowly and chew food well.",
      "Keep a food diary to find the foods that upset you.",
      "Talk to your cancer doctor or dietitian if problems with food continue.",
      "Tell your specialist nurse or cancer doctor straight away if you have problems swallowing.",
    ],
    tryThisWeek: [
      "Eat a little about every two hours.",
      "Eat slowly and chew well.",
      "Start a food diary.",
    ],
    ask: "Can I see the dietitian about how much to eat, and which foods to try first?",
    interactive: {
      kind: "timeline",
      title: "From first sips to fuller meals",
      steps: [
        { id: "first", when: "First 48 hours", title: "Nothing to eat yet", points: ["You do not usually eat for the first 48 hours.", "You take fluids through a drip."] },
        { id: "sips", when: "The next few days", title: "Sips, then soft foods", points: ["Small sips of clear fluids, slowly increased.", "Then small amounts of soft foods."] },
        { id: "home", when: "Going home", title: "Smaller portions", points: ["Normal food in smaller portions.", "You may go home with a feeding tube, kept in for 4 to 6 weeks."] },
        { id: "weeks", when: "The weeks after", title: "Little and often", points: ["Split the day's food into meals about every two hours.", "A food diary helps you find what suits you."] },
        { id: "time", when: "Over time", title: "Bigger portions", points: ["Your body slowly adjusts.", "Over time you will start to manage bigger portions and different foods."] },
      ],
    },
    sources: [MAC_RECOVERING, MAC_SURGERY, CRUK_AFTER, CRUK_WEIGHTLOSS, CRUK_EATING],
    quiz: {
      question: "How does Cancer Research UK suggest eating after stomach surgery?",
      options: [{ text: "Smaller, frequent meals, about every two hours", right: true }, { text: "Three large meals a day" }, { text: "One big meal in the evening" }],
      why: "Over one day, you should eat the same amount of food you normally would, but split it into smaller, frequent meals, about every two hours.",
    },
  },
  {
    id: "stc-dumping",
    kicker: "Recovery",
    question: "What is dumping syndrome, and how can I manage it?",
    hook: "Food can now rush into the bowel. Feeling faint, shaky or sick after a meal often eases with small changes and time.",
    short: "After surgery to remove all or part of the stomach, food can travel more quickly through the digestive system, which can cause dumping syndrome. Early dumping can happen within 30 minutes of eating; late dumping happens a few hours later and is caused by low blood sugar. Eating slowly, small frequent meals, less sugar and drinking between meals all help, and for most people it slowly reduces over time.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "The stomach normally stores food and releases it into the bowel in a controlled way. After an operation to remove all or part of the stomach, food can travel more quickly through the digestive system. This can cause symptoms called dumping syndrome.",
        ],
      },
      {
        heading: "Early dumping",
        paragraphs: [
          "Early dumping can happen within 30 minutes of eating a meal. You may feel dizzy and faint, and your heart might beat faster, and you may also have tummy cramps and diarrhoea. These symptoms may last for about 10 to 15 minutes.",
          "It happens when food enters the bowel more quickly, which draws fluid into the bowel and causes your blood pressure to drop. Many people find early dumping gets better on its own in time, and after a few months the symptoms can get less severe and happen less often.",
        ],
      },
      {
        heading: "Late dumping",
        paragraphs: [
          "Late dumping usually happens a few hours after eating a meal, or when you have missed a meal. You may suddenly feel faint, sick or shaky.",
          "It is caused by low blood sugar levels. Food passes into the small bowel, which absorbs sugar, and the body produces a rush of the hormone insulin, which makes your blood sugar drop.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Eat slowly, and eat small, frequent meals. Drink fluids slowly between meals, rather than at mealtimes, and try to leave 15 to 30 minutes between eating and drinking.",
          "Eat foods that are high in protein, such as fish, meat and eggs, and foods high in starchy carbohydrates, such as pasta, rice, bread and potatoes. Avoid foods or drinks with a lot of added sugar, such as sugary cereals, sweet drinks and desserts.",
          "Rest for 15 to 30 minutes straight after eating a meal. Avoiding soup and very liquid foods, and adding more fibre to your diet, can also help.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "For most people, the symptoms of dumping syndrome slowly reduce over time. If they do not stop, tell your cancer doctor or dietitian, and if they continue or are severe, your cancer doctor may give you medicine to help.",
          "Talk to your dietitian or specialist doctor if you have any symptoms of dumping syndrome. They can help diagnose it and give you advice.",
        ],
      },
    ],
    helps: [
      "Eat slowly, and eat small, frequent meals.",
      "Drink between meals, leaving 15 to 30 minutes between eating and drinking.",
      "Choose protein and starchy foods, and cut down on sugary foods and drinks.",
      "Rest for 15 to 30 minutes straight after a meal.",
      "Avoid soup and very liquid foods.",
      "Tell your cancer doctor or dietitian if the symptoms do not stop.",
    ],
    tryThisWeek: [
      "Eat slowly, in small meals.",
      "Drink 15 to 30 minutes apart from food.",
      "Rest after eating.",
    ],
    ask: "Could the symptoms I get after meals be dumping syndrome, and what should I change?",
    interactive: {
      kind: "signs",
      title: "Signs after a meal",
      intro: "Tick any you have had after eating. Early dumping can come within 30 minutes; late dumping a few hours later.",
      signs: ["Feeling dizzy or faint soon after eating", "My heart beating faster after a meal", "Tummy cramps", "Diarrhoea after eating", "Bloating or flushing", "Cold sweats", "Feeling faint, sick or shaky hours later", "These feelings when I miss a meal"],
      after: "Tell your dietitian or cancer doctor about these. If the symptoms continue or are severe, your cancer doctor may give you medicine to help.",
      copyHeading: "Symptoms I have had after meals",
    },
    sources: [MAC_DUMPING, MAC_RECOVERING, CRUK_EATING],
    quiz: {
      question: "What causes late dumping syndrome?",
      options: [{ text: "Low blood sugar", right: true }, { text: "Eating too slowly" }, { text: "Drinking between meals" }],
      why: "It is caused by low blood sugar levels.",
    },
  },
  {
    id: "stc-vitamins",
    kicker: "Recovery",
    question: "Why do I need vitamin B12 injections and other supplements?",
    hook: "The stomach helped absorb vitamin B12, iron, calcium and more. Without all or part of it, regular tests and top-ups keep you well.",
    short: "The stomach makes a substance called intrinsic factor that lets the body absorb vitamin B12, so after a gastrectomy you may need regular B12 injections, usually every 3 months. The stomach also helps absorb iron, folate, calcium and vitamin D, so your GP does regular blood tests and you may need tablets. Ask your dietitian if you are worried about your diet.",
    sections: [
      {
        heading: "What the stomach did",
        paragraphs: [
          "After surgery, your body may not be able to absorb certain vitamins and minerals from your food as well as it could before. You need these to keep healthy, so you may need to have them as an injection or as tablets.",
          "The stomach produces a substance called intrinsic factor that lets us absorb vitamin B12 from our food. Removal of all or part of the stomach means you cannot do this anymore.",
        ],
      },
      {
        heading: "Vitamin B12 injections",
        paragraphs: [
          "Vitamin B12 is important for making healthy red blood cells. If all of the stomach was removed, you will have B12 injections every few months, usually every 3 months, and regular blood tests to see if you need them more often.",
          "You could have your first injection before you leave hospital, and then you get them at your GP surgery, from the practice nurse. If only part of the stomach was removed, your GP will do blood tests to check your levels of B12.",
        ],
      },
      {
        heading: "If B12 runs low",
        paragraphs: [
          "A lack of vitamin B12 can cause extreme tiredness, a lack of energy, pins and needles, a sore and red tongue, mouth ulcers and muscle weakness. It can also cause problems with vision, memory and mood.",
          "It is important for vitamin B12 deficiency to be diagnosed and treated as soon as possible, because some problems it causes can be irreversible. See a GP if you think you may have a vitamin B12 deficiency.",
        ],
      },
      {
        heading: "Iron, folate, calcium and vitamin D",
        paragraphs: [
          "The stomach also helps absorb folate and iron, which are important for making red blood cells, and calcium, which we need for strong teeth and bones. Your GP will do regular blood tests to check you are getting enough of these nutrients.",
          "After stomach surgery, your doctors may advise you to take calcium, vitamin D and iron. This is because you cannot absorb enough of them from your normal diet without all or most of your stomach.",
          "At home, if you think you look paler than normal, or you continue to feel tired, speak to your doctor or specialist nurse. They may arrange a blood test.",
        ],
      },
      {
        heading: "Help with your diet",
        paragraphs: [
          "Ask your dietitian for advice if you are worried about your diet or your weight. If you do not have a dietitian, your cancer doctor or specialist nurse can arrange for you to see one.",
        ],
      },
    ],
    helps: [
      "Keep up your vitamin B12 injections with your GP practice.",
      "Go to the regular blood tests your GP arranges.",
      "Take the calcium, vitamin D or iron your doctors advise.",
      "See a GP if you notice extreme tiredness, pins and needles or a sore, red tongue.",
      "Speak to your doctor or specialist nurse if you look paler than normal or stay tired.",
      "Ask your dietitian for advice if you are worried about your diet.",
    ],
    tryThisWeek: [
      "Book your next B12 injection.",
      "Check when a blood test is due.",
      "Note any new tiredness or tingling.",
    ],
    ask: "How often will I need B12 injections and blood tests, and should I take calcium, vitamin D or iron?",
    interactive: {
      kind: "flip-cards",
      title: "What the stomach helped absorb",
      intro: "Turn a card to see why each one matters, and how it is looked after.",
      cards: [
        { id: "b12", front: "Vitamin B12", when: "Injections, usually every 3 months", back: "It helps make healthy red blood cells. Without intrinsic factor from the stomach, it cannot be absorbed from food." },
        { id: "iron", front: "Iron", when: "Checked with regular blood tests", back: "Important for making red blood cells. Your doctors may advise you to take iron." },
        { id: "folate", front: "Folate (vitamin B9)", when: "Checked with regular blood tests", back: "Important for making red blood cells. The stomach helps absorb it." },
        { id: "calcium", front: "Calcium", when: "Your doctors may advise taking it", back: "We need it for strong teeth and bones. The stomach helps absorb it." },
        { id: "vitamin-d", front: "Vitamin D", when: "Your doctors may advise taking it", back: "After stomach surgery, you may not absorb enough from a normal diet." },
      ],
    },
    sources: [MAC_RECOVERING, CRUK_AFTER, NHS_B12, CRUK_WEIGHTLOSS, CRUK_PROBLEMS],
    quiz: {
      question: "Why can the body not absorb vitamin B12 from food after a gastrectomy?",
      options: [{ text: "The stomach made intrinsic factor, which is needed", right: true }, { text: "B12 is only found in sugary foods" }, { text: "The bowel stops absorbing all vitamins" }],
      why: "The stomach produces a substance called intrinsic factor that lets us absorb vitamin B12 from our food.",
    },
  },
  {
    id: "stc-weight",
    kicker: "Recovery",
    question: "How do I stop losing weight after stomach cancer treatment?",
    hook: "Losing some weight at first is common. Extra calories, supplements and a dietitian help, and most people stop losing weight in time.",
    short: "To start with, you may find it hard not to lose weight, because your body uses lots of calories to recover and you may eat less. In time, most people find they stop losing weight. Smaller frequent meals, extra energy and protein, supplement drinks and regular help from a dietitian can all help.",
    sections: [
      {
        heading: "Why weight drops",
        paragraphs: [
          "To start with, you may find it hard not to lose weight. Your body uses lots of calories to help it recover from surgery, and you may not be eating as much as you normally would. But in time, most people find they stop losing weight.",
          "Weight loss is often linked to loss of appetite, but you might be eating normally and your body may not be absorbing all the nutrients in your food. This can be very upsetting and worrying.",
        ],
      },
      {
        heading: "Adding calories",
        paragraphs: [
          "To put on weight you need more calories. Fat is the best way to get concentrated calories, but after surgery to the stomach you may find it difficult to tolerate high fat foods.",
          "Liquid food supplements can be helpful, and some are available on prescription. Ask your dietitian which ones are best for you.",
          "Foods that are high in energy and protein, sometimes called a building-up diet, can help you add extra energy and protein to your food without having to eat more.",
        ],
      },
      {
        heading: "A dietitian on your side",
        paragraphs: [
          "There will be a dietitian working in the team looking after you, and you should see them regularly. If you have concerns, you can ask for an appointment at the hospital where you had treatment.",
          "Problems with eating and nutrition can cause a lot of distress and anxiety, and many people need a great deal of emotional support, so do not feel you are being a nuisance. This is a very important part of your recovery.",
        ],
      },
      {
        heading: "When more help is needed",
        paragraphs: [
          "If you cannot eat or drink enough to maintain your weight, your cancer doctors or dietitian may suggest nutrition support through a feeding tube. This is usually a temporary way of having nutrition support.",
          "If you are having problems swallowing, you may find you start losing weight quite quickly. Tell your specialist nurse or cancer doctor straight away, and try soft or puréed foods and nourishing drinks.",
        ],
      },
    ],
    helps: [
      "Eat smaller, frequent meals through the day.",
      "Ask your dietitian which liquid food supplements are best for you.",
      "Add extra energy and protein to your food.",
      "See your dietitian regularly, and ask for an appointment if you are worried.",
      "Speak to your clinical nurse specialist or dietitian about any eating problems.",
      "Tell your specialist nurse or cancer doctor straight away if you have problems swallowing.",
    ],
    tryThisWeek: [
      "Eat small meals often.",
      "Ask about supplement drinks.",
      "Book a dietitian appointment.",
    ],
    ask: "Am I losing more weight than you would expect, and would supplement drinks help me?",
    interactive: {
      kind: "scenarios",
      title: "Holding on to your weight",
      scenarios: [
        {
          id: "losing",
          situation: "You are still losing a little weight in your first weeks at home.",
          options: [{ text: "Tell your dietitian or nurse specialist", best: true }, { text: "Say nothing and hope it stops" }],
          why: "Speak to your clinical nurse specialist or dietitian about any eating problems. They will get you any help that you need.",
        },
        {
          id: "fatty",
          situation: "Rich, fatty food makes you feel unwell, but you need more calories.",
          options: [{ text: "Ask your dietitian about liquid supplements", best: true }, { text: "Force down more fatty food" }],
          why: "After surgery to the stomach, you may find it difficult to tolerate high fat foods. Liquid food supplements can be helpful.",
        },
        {
          id: "nuisance",
          situation: "You feel you are bothering the dietitian too often.",
          options: [{ text: "Ask for an appointment anyway", best: true }, { text: "Stop asking for help" }],
          why: "Many people having these problems need a great deal of emotional support, so do not feel you are being a nuisance.",
        },
        {
          id: "swallow",
          situation: "Food starts to feel stuck when you swallow.",
          options: [{ text: "Tell your specialist nurse or doctor straight away", best: true }, { text: "Wait for your next check-up" }],
          why: "If you are having problems swallowing, tell your specialist nurse or cancer doctor straight away.",
        },
      ],
    },
    sources: [MAC_RECOVERING, CRUK_WEIGHTLOSS, MAC_WEIGHT, MAC_NUTRITION],
    quiz: {
      question: "What happens to weight loss for most people, in time?",
      options: [{ text: "They stop losing weight", right: true }, { text: "They keep losing weight for years" }, { text: "It can never be helped" }],
      why: "But in time, most people find they stop losing weight.",
    },
  },
  {
    id: "stc-fatigue",
    kicker: "Living well",
    question: "Why am I so tired after stomach cancer treatment?",
    hook: "Major surgery, chemotherapy, eating less and low vitamin levels can all drain your energy. It usually builds back, a step at a time.",
    short: "You are likely to feel very tired for several weeks, and sometimes months, after stomach cancer surgery, and chemotherapy and radiotherapy can add to it. Eating less, or low vitamin B12, can also play a part. Building up activity slowly, pacing your day and telling your team if it does not improve all help.",
    sections: [
      {
        heading: "Why you feel so tired",
        paragraphs: [
          "Surgery for stomach cancer is a major operation. Most people feel weak and lack strength for some time afterwards, and you are likely to feel very tired for several weeks and sometimes months.",
          "Tiredness is a common side effect of chemotherapy. Radiotherapy often makes people feel tired too, especially alongside surgery or chemotherapy, and after it finishes you may continue to feel tired for weeks or months.",
          "Our bodies get energy from the food we eat, so you may get tired if your body does not get enough food. Fatigue in people with cancer can mean feeling exhausted even when you are getting enough rest and sleep.",
        ],
      },
      {
        heading: "Things that can be checked",
        paragraphs: [
          "A lack of vitamin B12 can cause extreme tiredness and a lack of energy. If you think you look paler than normal, or you continue to feel tired, speak to your doctor or specialist nurse, who may arrange a blood test.",
          "Anaemia, pain, poor sleep, worry and low mood can all make fatigue worse. Tell your doctor or nurse if the weakness continues for more than a few weeks, as they can suggest things to help, such as physiotherapy.",
        ],
      },
      {
        heading: "Building up slowly",
        paragraphs: [
          "Try building up the amount of physical activity you do slowly. Gentle exercise, such as regular walks, builds up your energy levels, and you can increase the amount you do as you feel better.",
          "It helps to do a bit more every day, such as sitting for less time and walking around the house a bit more, then building up to walking outside. Avoid lifting heavy things like shopping, or doing vacuuming or gardening, for at least 8 weeks, to give your wound time to heal.",
        ],
      },
      {
        heading: "Pacing your day",
        paragraphs: [
          "Try planning your day so that you have energy to do the things that are most important to you. Pace yourself, and take short naps and rests, but try to balance them with some activity.",
          "A fatigue diary can help you record your energy at different times of the day and find any patterns. Spread housework out over the week, sit down for tasks when you can, and accept help from family or friends.",
        ],
      },
      {
        heading: "Driving and getting help",
        paragraphs: [
          "Most people are ready to drive about 4 to 6 weeks after their operation. Do not drive unless you feel in full control of the car, and do not drive if you feel very tired.",
          "Everyone is different, and some people take longer than others to recover. If your tiredness does not get better, tell your cancer doctor or specialist nurse.",
        ],
      },
    ],
    helps: [
      "Build up your activity slowly, with regular gentle walks.",
      "Do a bit more every day, from walking around the house to walking outside.",
      "Avoid heavy lifting, vacuuming and gardening for at least 8 weeks.",
      "Keep a fatigue diary of your energy at different times of the day.",
      "Speak to your doctor or specialist nurse if you look paler than normal or stay tired.",
      "Tell your doctor or nurse if the weakness continues for more than a few weeks.",
    ],
    tryThisWeek: [
      "Walk a little further each day.",
      "Keep a fatigue diary.",
      "Ask about a blood test if still tired.",
    ],
    ask: "Could low vitamin B12 or anaemia be adding to my tiredness, and would physiotherapy help?",
    interactive: {
      kind: "risk-check",
      title: "What could be adding to it?",
      intro: "Tick any that apply. Many of these can be checked or helped by your team.",
      items: [
        { id: "surgery", label: "Recovering from major surgery", note: "Most people feel weak for some time. Tell your team if it continues for more than a few weeks.", changeable: false },
        { id: "b12", label: "Pins and needles or a sore tongue", note: "These can be signs of low vitamin B12, which can cause extreme tiredness. See a GP.", changeable: true },
        { id: "pale", label: "Looking paler than normal", note: "Speak to your doctor or specialist nurse. They may arrange a blood test.", changeable: true },
        { id: "eating", label: "Eating less than before", note: "Your body gets energy from food. A dietitian can help you get enough.", changeable: true },
        { id: "treatment", label: "Chemotherapy or radiotherapy", note: "Both commonly cause tiredness, which can go on for weeks or months after radiotherapy.", changeable: false },
        { id: "sleep", label: "Poor sleep for a long time", note: "Trouble sleeping over a long period can lead to fatigue and low mood.", changeable: true },
        { id: "mood", label: "Worry or low mood", note: "Anxiety, depression and stress can make fatigue worse. Talking about how you feel can help.", changeable: true },
      ],
    },
    sources: [CRUK_PROBLEMS, CRUK_AFTER, NHS_CHEMO, MAC_RADIO, MAC_FATIGUE, NHS_B12, MAC_RECOVERING],
    quiz: {
      question: "How long does Macmillan suggest avoiding heavy lifting after stomach surgery?",
      options: [{ text: "At least 8 weeks", right: true }, { text: "A couple of days" }, { text: "There is no need to" }],
      why: "Avoid lifting heavy things like shopping, or doing vacuuming or gardening, for at least 8 weeks, to give your wound time to heal.",
    },
  },
  {
    id: "stc-social-eating",
    kicker: "Living well",
    question: "How can I eat out and enjoy meals with others again?",
    hook: "Small portions and sudden trips to the toilet can make meals out daunting. A few tools and a word in advance help.",
    short: "Eating out with friends can be much harder when you have eating problems, and they can cause tension at home. You can call ahead to ask for softer foods or smaller portions, and the OPA's free restaurant cards can be shown discreetly to ask for a child's size portion or urgent access to a toilet. Talking to your dietitian or nurse can help.",
    sections: [
      {
        heading: "Why meals feel different",
        paragraphs: [
          "Eating problems can be difficult to cope with. They can cause tension within relationships or families, and events and eating out with friends can be much harder.",
          "It is natural to worry that changes in your eating will affect your relationships with your partner, family or friends, or to be anxious about what other people will think. Talking to someone you trust about your feelings may help.",
        ],
      },
      {
        heading: "Planning a meal out",
        paragraphs: [
          "If you want to go out to a cafe or restaurant, you can call ahead and ask if they can prepare softer, easier-to-eat foods, or smaller portions.",
          "After surgery for stomach cancer, people often cannot eat full restaurant portions. The OPA has a free two-sided card that can be shown discreetly to waiting staff. One side asks for urgent access to toilet facilities, and the other explains you cannot eat normal portions and asks for a child's size portion.",
          "The cards come in 12 languages, including English, French, Spanish, Polish and Chinese. Accessible toilets in the UK usually have a RADAR National Key Scheme lock, and the OPA has a free leaflet about the RADAR key.",
        ],
      },
      {
        heading: "At the table",
        paragraphs: [
          "Eat slowly, eat small amounts and rest after you eat. Drinking slowly between meals, rather than at mealtimes, can help prevent dumping syndrome.",
          "Avoid foods or drinks with a lot of added sugar, such as sweet drinks and desserts. If you have them, eat slowly and only have small amounts.",
          "Fizzy drinks, alcohol and spicy foods may make indigestion worse.",
        ],
      },
      {
        heading: "Meals at home",
        paragraphs: [
          "Mealtimes are usually an enjoyable and important part of life, and it can feel upsetting for the people close to you when you cannot eat much of the food they have prepared. Talking openly about your eating problems, and what you both think will help, can help you both feel more in control.",
          "The amount you can eat may change each day. Eating at the times that work best for you, even if it is at different times to other people, can help.",
        ],
      },
      {
        heading: "Support",
        paragraphs: [
          "Talking to your dietitian or clinical nurse specialist can help. It is important to get help as soon as you start to have problems.",
          "The OPA's free patient buddy service pairs you, over the phone, with a volunteer who has personal experience of cancer. The OPA also lists support meetings around the UK.",
        ],
      },
    ],
    helps: [
      "Call ahead to ask for softer foods or smaller portions.",
      "Order a free OPA restaurant card to show to waiting staff.",
      "Eat slowly, have small amounts and rest after you eat.",
      "Drink slowly between meals rather than with them.",
      "Talk openly at home about what helps at mealtimes.",
      "Talk to your dietitian or clinical nurse specialist if eating out is hard.",
    ],
    tryThisWeek: [
      "Order a free restaurant card.",
      "Call ahead before a meal out.",
      "Talk about mealtimes at home.",
    ],
    ask: "What could make eating out easier for me, and is there anything I should avoid?",
    interactive: {
      kind: "scenarios",
      title: "Meals out and at home",
      scenarios: [
        {
          id: "portion",
          situation: "A restaurant serves portions far too big for you.",
          options: [{ text: "Show a card asking for a child's size portion", best: true }, { text: "Try to finish the whole plate" }],
          why: "The OPA's card can be shown discreetly to waiting staff, and one side asks for a child's size portion.",
        },
        {
          id: "booking",
          situation: "Friends have booked a meal out for your birthday.",
          options: [{ text: "Call ahead to ask about softer food or smaller portions", best: true }, { text: "Cancel because you cannot eat much" }],
          why: "You can call ahead and ask if they can prepare softer, easier-to-eat foods, or smaller portions.",
        },
        {
          id: "drinks",
          situation: "Everyone orders drinks to have with the meal.",
          options: [{ text: "Have your drink before or after eating", best: true }, { text: "Drink a large glass with your food" }],
          why: "Drink fluids slowly between meals, rather than at mealtimes, and try to leave 15 to 30 minutes between eating and drinking.",
        },
        {
          id: "dessert",
          situation: "The dessert menu arrives.",
          options: [{ text: "Have a small amount slowly, or skip it", best: true }, { text: "Order the biggest pudding" }],
          why: "Avoid foods or drinks with a lot of added sugar. If you have them, eat slowly and only have small amounts.",
        },
      ],
    },
    sources: [CRUK_EATING, CRUK_COPING, MAC_EATING, OPA_CARD, OPA_CARDS, OPA_RADAR, MAC_DUMPING, MAC_RECOVERING, MAC_EATING_TIPS, OPA_BUDDIES, OPA_GROUPS],
    quiz: {
      question: "What can one side of the OPA's restaurant card ask for?",
      options: [{ text: "A child's size portion", right: true }, { text: "A discount on the bill" }, { text: "A table by the window" }],
      why: "One side asks for urgent access to toilet facilities, and the other explains you cannot eat normal portions and asks for a child's size portion.",
    },
  },
  {
    id: "stc-work",
    kicker: "Living well",
    question: "How do I manage work and money after stomach cancer?",
    hook: "The law treats cancer as a disability. Phased returns, extra breaks, sick pay and benefits can give you room to recover.",
    short: "If you have or have had cancer, the law treats it as a disability, so your employer should consider reasonable adjustments, such as a phased return, different hours, extra breaks or easy access to a toilet. Statutory Sick Pay can be paid for up to 28 weeks, and benefits and Access to Work may help. Macmillan's money advisers can help you work out what you can get.",
    sections: [
      {
        heading: "Your rights",
        paragraphs: [
          "If you have cancer, the law considers this a disability. Under the Equality Act 2010, you meet the definition from the day you are diagnosed, and in Northern Ireland the Disability Discrimination Act 1995 protects you.",
          "This legal protection does not end when your cancer treatment finishes. You keep it even if you no longer have cancer, and if you move to another employer.",
        ],
      },
      {
        heading: "Side effects at work",
        paragraphs: [
          "For many people, returning to work when they feel ready is a big step in their recovery. But some people have ongoing side effects, such as fatigue, eating problems, or needing to use the toilet more often because of bowel changes.",
          "Your employer should consider reasonable adjustments. These could include a phased return, different working hours, time off for medical appointments, extra breaks, a quiet place to rest, and making sure you can get to the toilet easily.",
          "You do not have to tell your employer you have cancer. But they do not have to make a reasonable adjustment unless they know, or should reasonably know, that you have cancer.",
        ],
      },
      {
        heading: "Planning your return",
        paragraphs: [
          "You and your manager can agree a return-to-work plan, which should be as flexible as possible, and meet regularly in case you need to change anything. You can also ask your doctor or another healthcare professional for a fit note, which explains how your health affects what you can do at work.",
          "Recovery may not always be straightforward, and you may have some setbacks. Try to stay flexible and talk to your employer if you need more support.",
        ],
      },
      {
        heading: "Sick pay and benefits",
        paragraphs: [
          "If you work for an employer and take time off sick, you may get Statutory Sick Pay for up to 28 weeks, or your employer's own sick pay. If you are off sick for more than 7 days, you will need a fit note.",
          "If cancer affects how much you can work or earn, benefits such as Employment and Support Allowance or Universal Credit might help. If it affects everyday tasks or getting around, Personal Independence Payment might help, and if you are State Pension age or over and have personal care needs, Attendance Allowance might help.",
          "You can call free on 0808 808 00 00 to talk to a Macmillan money adviser, Monday to Friday, 8am to 6pm, or use Macmillan's online Benefits Calculator.",
        ],
      },
      {
        heading: "More help",
        paragraphs: [
          "Access to Work can give you a grant for practical support, such as specialist equipment or the cost of travelling to work if you cannot use public transport. It will not affect other benefits and you will not have to pay it back, but it will not pay for reasonable adjustments.",
          "If you have money worries or debts, the OPA lists free, confidential and independent advice services, including National Debtline, Citizens Advice and StepChange Debt Charity.",
        ],
      },
    ],
    helps: [
      "Agree a flexible return-to-work plan with your manager, and meet regularly to review it.",
      "Ask about a phased return, extra breaks or easy access to a toilet.",
      "Ask your doctor or nurse for a fit note.",
      "Check what sick pay you can get with your manager or HR department.",
      "Call a Macmillan money adviser free on 0808 808 00 00.",
      "Check whether Access to Work could help with costs such as travel.",
    ],
    tryThisWeek: [
      "Ask about a phased return.",
      "Check your sick pay.",
      "Call a Macmillan money adviser.",
    ],
    ask: "Can you give me a fit note that explains how eating problems and tiredness affect my work?",
    interactive: {
      kind: "flip-cards",
      title: "Your work and money toolkit",
      intro: "Turn a card to see what each one is and how it can help.",
      cards: [
        { id: "adjustments", front: "Reasonable adjustments", when: "Staying at, or returning to, work", back: "Changes such as a phased return, extra breaks, a quiet place to rest and making sure you can get to the toilet easily." },
        { id: "fit-note", front: "Fit note", when: "Off sick for more than 7 days, or going back", back: "Explains how your health affects what you can do at work. A GP or specialist nurse can give you one." },
        { id: "ssp", front: "Statutory Sick Pay", when: "Time off sick from an employer", back: "Money most employees can get if they are too sick to work. Your employer pays it for up to 28 weeks." },
        { id: "benefits", front: "Benefits", when: "If cancer affects work, income or daily tasks", back: "Employment and Support Allowance, Universal Credit or Personal Independence Payment might help." },
        { id: "access", front: "Access to Work", when: "To help you get or stay in work", back: "A grant for practical support, such as travel if you cannot use public transport. You do not pay it back." },
      ],
    },
    sources: [MAC_RIGHTS, GOV_DISABILITY, MAC_RETURNING, MAC_ADJUSTMENTS, MAC_SICKPAY, MAC_BENEFITS, GOV_ATW, OPA_MONEY],
    quiz: {
      question: "When does someone with cancer meet the Equality Act's definition of disability?",
      options: [{ text: "From the day they are diagnosed", right: true }, { text: "After 12 months off work" }, { text: "Only while they are having treatment" }],
      why: "Under the Equality Act 2010, you meet the definition from the day you are diagnosed.",
    },
  },
  {
    id: "stc-mood",
    kicker: "Living well",
    question: "Why do I feel low now that treatment has ended?",
    hook: "Relief can come mixed with worry, sadness and tiredness. These feelings are common, and help is there, including right now if you need it.",
    short: "When treatment ends you may feel relieved, but it is also common to have mixed feelings, to worry about the future, or to feel low about how eating and life have changed. For most people these feelings improve with time and support, but if low mood goes on for more than 2 weeks, talk to your doctor or nurse. If you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "Mixed feelings",
        paragraphs: [
          "When your treatment ends, you may feel relieved, but you may still have side effects and other emotions to cope with. It is common to have days when you feel anxious or uncertain about the future.",
          "Many people find it hard at first not meeting with their cancer team as often. It is important to remember that you can contact them if you need to, and you can talk to your GP about anything that is worrying you.",
          "Changes such as weight loss can affect your self-esteem and the way you relate to other people. Your dietitian can help you maintain your weight.",
        ],
      },
      {
        heading: "Worry about the future",
        paragraphs: [
          "You may worry whether treatment has worked and what might happen in the future. Most people who have been through cancer treatment live with some worry and uncertainty, and this does not mean they are not coping with life after treatment.",
          "It can help to focus on what you can control right now, such as talking about your feelings, getting support, and following advice from your healthcare team. These feelings can get better over time.",
        ],
      },
      {
        heading: "Sadness or depression?",
        paragraphs: [
          "People often have feelings of sadness or loss after cancer treatment, and these often improve as you recover. But for some people, the low mood continues or gets worse, and it may become depression.",
          "Signs can include feeling low most of the time, losing interest in things you used to enjoy, changes in sleeping, eating or concentration, and feeling helpless. If these go on for more than 2 weeks, talk to your doctor or nurse.",
          "Your GP or specialist nurse can listen, refer you to a counsellor or psychologist, and talk to you about medicine that can help. Antidepressants can take up to 4 weeks to help, are not addictive, and should not be stopped suddenly, so follow your doctor's advice.",
        ],
      },
      {
        heading: "Ways to feel more supported",
        paragraphs: [
          "Talking about how you feel with family, friends or a partner can help, and so can talking to people going through similar experiences, in a support group or online. The OPA offers free phone buddies who are current or former patients, and Macmillan Buddies offers 8 weekly calls with the same trained volunteer.",
          "You can refer yourself to NHS talking therapies for anxiety and depression without seeing a GP, if you are registered with a GP and aged 18 or over, or 16 or over in some areas. You can also call the Macmillan Support Line free on 0808 808 00 00, 7 days a week, 8am to 8pm.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you have any thoughts about self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and choose the mental health option, or ask for an urgent GP appointment. If you would rather not talk on the phone, you can text SHOUT to 85258.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Talk about how you feel with family, friends or a partner.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Refer yourself to NHS talking therapies, or ask your GP about counselling.",
      "Ask the OPA or Macmillan for a phone buddy.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell someone close how you feel.",
      "Ask for a phone buddy.",
      "Look up NHS talking therapies.",
    ],
    ask: "Could my low mood be depression, and can you refer me for counselling or a talking therapy?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor or nurse",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: ["Feeling low or sad most of the time", "Losing interest in things I used to enjoy", "Changes in my sleep", "Changes in my eating", "Trouble concentrating", "Feeling helpless or vulnerable", "Problems starting or finishing tasks"],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_FINISHING, MAC_RECOVER, CRUK_COPING, MAC_UNCERTAINTY, MAC_DEPRESSION, OPA_BUDDIES, MAC_BUDDIES, NHS_TALKING, SAMARITANS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, they always pass" }],
      why: "If these go on for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
];
