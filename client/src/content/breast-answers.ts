import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Breast cancer page's pieces (content/library-conditions/cancer-mind-digestion.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from Breast Cancer Now,
// Macmillan Cancer Support, Cancer Research UK and the NHS, with the government's Access to Work page and
// Samaritans for the work and mood answers. The answers describe recovery and living with after-effects;
// the only survival figures are the ones Cancer Research UK states plainly, and they are never a
// prediction for one person. General information only; it never replaces what a person's own breast
// team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const bcn = (label: string, path: string): LearnSource => ({ label: `Breast Cancer Now: ${label}`, url: `https://breastcancernow.org/about-breast-cancer/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });

const NHS_TREAT = nhs("Treatment for breast cancer in women", "conditions/breast-cancer-in-women/treatment-for-breast-cancer-in-women/");
const NHS_HELP = nhs("Help and support for breast cancer in women", "conditions/breast-cancer-in-women/help-and-support-for-breast-cancer-in-women/");
const NHS_LET_ABOUT = nhs("About letrozole", "medicines/letrozole/about-letrozole/");
const NHS_LET_HOW = nhs("How and when to take letrozole", "medicines/letrozole/how-and-when-to-take-letrozole/");
const NHS_LET_SIDE = nhs("Side effects of letrozole", "medicines/letrozole/side-effects-of-letrozole/");
const NHS_ANA_SIDE = nhs("Side effects of anastrozole", "medicines/anastrozole/side-effects-of-anastrozole/");
const NHS_DEPRESSION = nhs("Depression in adults", "mental-health/conditions/depression-in-adults/overview/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const BCN_SURGERY = bcn("Surgery for primary breast cancer", "treatment/surgery-for-primary-breast-cancer");
const BCN_AFTER_SURGERY = bcn("After breast cancer surgery", "treatment/surgery-for-primary-breast-cancer/after-breast-cancer-surgery");
const BCN_RECONSTRUCTION = bcn("Breast reconstruction", "treatment/surgery-for-primary-breast-cancer/breast-reconstruction");
const BCN_RADIOTHERAPY = bcn("Radiotherapy for primary breast cancer", "treatment/radiotherapy-for-primary-breast-cancer");
const BCN_CHEMOTHERAPY = bcn("Chemotherapy", "treatment/chemotherapy");
const BCN_CHEMO_BRAIN = bcn("Cognitive impairment (chemo brain)", "treatment/chemotherapy/chemotherapy-side-effects/cognitive-impairment-chemo-brain");
const BCN_TARGETED = bcn("Targeted therapy", "treatment/targeted-therapy");
const BCN_HORMONE = bcn("Hormone (endocrine) therapy", "treatment/hormone-endocrine-therapy");
const BCN_TAMOXIFEN = bcn("Tamoxifen", "treatment/hormone-endocrine-therapy/tamoxifen");
const BCN_AIS = bcn("Aromatase inhibitors (anastrozole, exemestane and letrozole)", "treatment/hormone-endocrine-therapy/aromatase-inhibitors-anastrozole-exemestane-and-letrozole");
const BCN_JOINTS = bcn("Joint and muscle pain during breast cancer treatment", "treatment/hormone-endocrine-therapy/joint-and-muscle-pain-during-breast-cancer-treatment");
const BCN_MENOPAUSE = bcn("Menopausal symptoms and breast cancer", "treatment/hormone-endocrine-therapy/menopausal-symptoms-and-breast-cancer");
const BCN_HOT_FLUSHES = bcn("Hot flushes and night sweats", "treatment/hormone-endocrine-therapy/hot-flushes-and-night-sweats");
const BCN_FATIGUE = bcn("Extreme tiredness (cancer-related fatigue)", "treatment/extreme-tiredness-cancer-related-fatigue");
const BCN_LYMPHOEDEMA = bcn("Lymphoedema", "treatment/lymphoedema");
const BCN_PATHOLOGY = bcn("Your pathology results", "diagnosis/your-pathology-results");
const BCN_GRADE = bcn("Breast cancer grade", "diagnosis/breast-cancer-grade");
const BCN_SIZE = bcn("Breast cancer size", "diagnosis/breast-cancer-size");
const BCN_STAGES = bcn("Breast cancer stages", "diagnosis/breast-cancer-stages");
const BCN_RECEPTORS = bcn("Hormone receptors and breast cancer", "diagnosis/hormone-receptors-and-breast-cancer");
const BCN_HER2 = bcn("HER2", "diagnosis/her2");
const BCN_PROGNOSIS = bcn("Primary breast cancer prognosis", "diagnosis/primary-breast-cancer-prognosis");
const BCN_RECURRENCE_SYMPTOMS = bcn("Breast cancer recurrence symptoms", "diagnosis/breast-cancer-recurrence/breast-cancer-recurrence-symptoms");
const BCN_FOLLOW_UP = bcn("Follow-up after treatment", "treatment/follow-up-after-treatment");
const BCN_BODY = bcn("Your body after breast cancer treatment", "life-after-treatment/your-body-after-breast-cancer-treatment");
const BCN_EXERCISES = bcn("Exercises after breast cancer surgery", "life-after-treatment/your-body-after-breast-cancer-treatment/exercises-after-breast-cancer-surgery");
const BCN_ACTIVITY = bcn("Physical activity, exercise and primary breast cancer", "life-after-treatment/your-body-after-breast-cancer-treatment/physical-activity-exercise-and-primary-breast-cancer");
const BCN_PROSTHESIS = bcn("Breast prosthesis", "life-after-treatment/your-body-after-breast-cancer-treatment/breast-prosthesis");
const BCN_BRAS = bcn("Bras after surgery for breast cancer", "life-after-treatment/bras-after-surgery-for-breast-cancer");
const BCN_CLOTHING = bcn("Clothing and swimwear", "life-after-treatment/clothing-and-swimwear");
const BCN_SEX = bcn("Sex and the effects of breast cancer treatment", "life-after-treatment/sex-and-the-effects-of-breast-cancer-treatment");
const BCN_INTIMACY = bcn("Intimate relationships and breast cancer", "life-after-treatment/intimate-relationships-and-breast-cancer");
const BCN_WORK = bcn("Work and breast cancer", "life-after-treatment/work-and-breast-cancer");
const BCN_LOW_MOOD = bcn("Low mood and depression after a breast cancer diagnosis", "life-after-treatment/low-mood-and-depression-after-a-breast-cancer-diagnosis");
const BCN_ANXIETY = bcn("Stress and anxiety after a breast cancer diagnosis", "life-after-treatment/coping-with-breast-cancer-emotionally/stress-and-anxiety-after-a-breast-cancer-diagnosis");

const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_CHEMO_BRAIN = mac("Cognitive changes (chemo brain)", "impacts-of-cancer/chemo-brain");
const MAC_WORRIES = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");
const MAC_FINISHING = mac("Finishing cancer treatment", "after-treatment/finishing-treatment");
const MAC_WORK = mac("Making decisions about work after treatment", "after-treatment/making-decisions-about-work-after-treatment");

const CRUK_SURVIVAL = cruk("Survival for breast cancer", "breast-cancer/survival");
const CRUK_FOLLOW_UP = cruk("Follow up after breast cancer treatment", "breast-cancer/treatment/follow-up");
const CRUK_EXERCISES = cruk("Exercises after a mastectomy or breast conserving surgery (lumpectomy)", "breast-cancer/treatment/surgery/after-surgery/exercises-after-mastectomy-or-lumpectomy");
const CRUK_LIFE_AFTER_SURGERY = cruk("Life after breast cancer surgery", "breast-cancer/living-with/life-after-surgery");
const CRUK_MENOPAUSE = cruk("Breast cancer and menopausal symptoms", "breast-cancer/living-with/menopausal-symptoms");

const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work: get support if you have a disability or health condition", url: "https://www.gov.uk/access-to-work" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const breastAnswers: LearnArticle[] = [
  {
    id: "bc-what-you-had",
    kicker: "Your treatment",
    question: "What was each part of my treatment for?",
    hook: "Surgery, radiotherapy, chemotherapy, hormone tablets, targeted drugs: each had its own job, and most aimed to stop the cancer coming back.",
    short: "Surgery is usually the main treatment for breast cancer. Radiotherapy, chemotherapy, hormone therapy and targeted medicines may be added before or after it, often to lower the chance of the cancer coming back. Which ones you had depended on the size and type of the cancer, whether it had spread, and your general health.",
    sections: [
      {
        heading: "Why your plan was yours",
        paragraphs: [
          "The treatment you have for breast cancer depends on the size and type of breast cancer, where it is, whether it has spread to other parts of your body, and your general health. The specialist team works with you to create a treatment plan that is best for you.",
          "You will have regular check-ups during and after any treatments. If you have symptoms or side effects you are worried about, talk to your specialists: you do not need to wait for your next check-up.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Surgery is usually the first treatment for people with breast cancer. The 2 main types are breast-conserving surgery, where the cancer is removed with a border of normal breast tissue around it, and mastectomy, the removal of all the breast tissue including the nipple area.",
          "Anyone with invasive breast cancer has the lymph nodes under the arm assessed. Long-term survival and rates of local recurrence are the same for breast-conserving surgery followed by radiotherapy as for mastectomy.",
        ],
      },
      {
        heading: "Radiotherapy",
        paragraphs: [
          "Radiotherapy uses high-energy x-rays to destroy any cancer cells that may have been left in the breast or chest and the surrounding area after surgery. After breast-conserving surgery, you usually have radiotherapy to the remaining breast tissue on that side.",
          "It is usually given for between 5 and 15 days, Monday to Friday. Tiredness sometimes gets worse after radiotherapy finishes, but you should start to feel better with time.",
        ],
      },
      {
        heading: "Chemotherapy and targeted medicines",
        paragraphs: [
          "Chemotherapy uses anti-cancer drugs to destroy cancer cells. Given before surgery, it can shrink a larger cancer; given after surgery, it reduces the risk of the cancer returning or spreading.",
          "Targeted therapies block the growth and spread of cancer by interfering with processes in the cells that help it grow. The most commonly used is trastuzumab, for breast cancer that is HER2-positive.",
        ],
      },
      {
        heading: "Hormone therapy",
        paragraphs: [
          "Hormone therapies block or stop the effect of the hormones oestrogen and progesterone on breast cancer cells. You will usually be prescribed one if your breast cancer is oestrogen receptor positive.",
          "After surgery, it is taken to reduce the risk of the breast cancer coming back, and it may also reduce the risk of a new breast cancer developing. Tamoxifen or an aromatase inhibitor is usually taken for between 5 and 10 years.",
        ],
      },
    ],
    helps: [
      "Ask your specialist team to explain each treatment, its benefits and its side effects.",
      "Talk to your specialists about symptoms or side effects that worry you; you do not need to wait for your next check-up.",
      "Tell your treatment team about any vitamins, herbal remedies or treatments bought over the counter or online.",
      "If cost or travel makes appointments hard, ask your breast care nurse or treatment team what help is available.",
      "Call the Breast Cancer Now helpline on 0808 800 6000 or Macmillan on 0808 808 00 00 if you want to talk things through.",
    ],
    tryThisWeek: [
      "List questions about each treatment.",
      "Report worrying side effects now.",
      "Tell the team about any supplements.",
    ],
    ask: "Which treatments did I have, and what was each one for in my case?",
    interactive: {
      kind: "flip-cards",
      title: "Your treatments, card by card",
      intro: "Turn each card to see what each treatment was for.",
      cards: [
        { id: "surgery", front: "Surgery", when: "Usually the first treatment", back: "Removes the cancer: either breast-conserving surgery or a mastectomy, with the lymph nodes checked." },
        { id: "radiotherapy", front: "Radiotherapy", when: "Usually 5 to 15 days, Monday to Friday", back: "High-energy x-rays destroy any cancer cells that may have been left behind after surgery." },
        { id: "chemotherapy", front: "Chemotherapy", when: "Before or after surgery", back: "Anti-cancer drugs. Before surgery they can shrink a larger cancer; after it, they lower the risk of it returning." },
        { id: "hormone", front: "Hormone therapy", when: "If the cancer is oestrogen receptor positive", back: "Blocks or stops the effect of oestrogen. Usually taken for 5 to 10 years after surgery." },
        { id: "targeted", front: "Targeted therapy", when: "Such as trastuzumab, for HER2-positive cancer", back: "Blocks the growth and spread of cancer by interfering with processes inside the cells." },
      ],
    },
    sources: [NHS_TREAT, BCN_SURGERY, BCN_RADIOTHERAPY, BCN_CHEMOTHERAPY, BCN_TARGETED, BCN_HORMONE, NHS_HELP],
    quiz: {
      question: "What is hormone therapy usually taken for after surgery?",
      options: [{ text: "To reduce the risk of the cancer coming back", right: true }, { text: "To heal the surgery scar" }, { text: "To ease tiredness" }],
      why: "After surgery, it is taken to reduce the risk of the breast cancer coming back, and it may also reduce the risk of a new breast cancer developing.",
    },
  },
  {
    id: "bc-results",
    kicker: "Your results",
    question: "What do my grade, stage and receptor results mean?",
    hook: "Your pathology report describes the cancer that was removed. Each word on it helped your team choose your treatment.",
    short: "A pathologist looks at the tissue from your biopsy or surgery under a microscope and writes a report. It usually gives the type, size and grade of the cancer, whether lymph nodes were affected, and whether hormones or the HER2 protein were helping it grow. Your team uses all of this, alongside your medical history, to decide which treatments to offer.",
    sections: [
      {
        heading: "The pathology report",
        paragraphs: [
          "If you had a biopsy or breast cancer surgery, a doctor called a pathologist looked at the tissue under a microscope. The results help your treatment team decide the treatment you are offered.",
          "Results usually take between 1 and 2 weeks. You can ask for a copy of your pathology report to read through with a member of your treatment team or later in your own time.",
        ],
      },
      {
        heading: "Grade",
        paragraphs: [
          "The grade describes how different the cancer cells are to normal breast cells and how quickly they are growing. Grade 1 cells look the most like normal breast cells and are slower growing, and grade 3 cells look the least like them and are growing quicker.",
          "If you have grade 3 breast cancer, you are more likely to be offered chemotherapy. The grade is different from the stage.",
        ],
      },
      {
        heading: "Size and stage",
        paragraphs: [
          "The size of the cancer is measured at its widest point, usually in millimetres. The stage describes the size of the cancer and how far it has spread, including whether the lymph nodes are affected.",
          "Breast cancer may be described as stage 1, 2, 3 or 4. Stage 1A means the cancer is 2cm or smaller and has not spread outside the breast, while stage 4, also called secondary breast cancer, means it has spread to other parts of the body.",
          "The difference between stage and grade can be confusing. If you are not sure which one your treatment team is talking about, ask them to explain it.",
        ],
      },
      {
        heading: "Hormone receptors",
        paragraphs: [
          "Some breast cancers use hormones in the body to help them grow. Most breast cancers are oestrogen receptor positive, called ER-positive, and all invasive breast cancers are tested for oestrogen receptors.",
          "If your breast cancer is ER-positive, you will usually be offered hormone therapy. If it has no hormone receptors, hormone therapy will not be of any benefit, and your team will discuss other options with you.",
        ],
      },
      {
        heading: "HER2",
        paragraphs: [
          "HER2 is a protein. Some breast cancer cells have a higher than normal level of it on their surface, which helps them to grow, and less than 1 in 5 invasive breast cancers are HER2-positive.",
          "If your breast cancer is HER2-positive, you will usually be offered a targeted therapy, such as trastuzumab, alongside or after chemotherapy. If it is HER2-negative, targeted therapies will not be of any benefit.",
        ],
      },
    ],
    helps: [
      "Take a pen and paper or your phone to your results appointment, or ask permission to record it.",
      "Bring a relative or friend with you to the appointment.",
      "If you are told anything you do not understand, ask your treatment team to explain.",
      "Ask for a copy of your pathology report to read through with your team or in your own time.",
      "Call the Breast Cancer Now helpline if you would like help understanding your results.",
    ],
    tryThisWeek: [
      "Ask for a copy of your report.",
      "Bring someone to the appointment.",
      "Ask about anything unclear.",
    ],
    ask: "What were my grade, stage, hormone receptor and HER2 results, and how did they shape my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "Your results, card by card",
      intro: "Turn each card to see what each word on your report means.",
      cards: [
        { id: "grade", front: "Grade 1, 2 or 3", when: "How the cells look and grow", back: "Grade 1 cells look most like normal cells and grow slower. Grade 3 cells look least like them and grow quicker." },
        { id: "size", front: "Size", when: "Measured at its widest point", back: "Usually in millimetres. Size is just one part of the overall results." },
        { id: "stage", front: "Stage 1 to 4", when: "Size and how far it has spread", back: "Takes in the size, the lymph nodes and any spread. Stage 4 is also called secondary breast cancer." },
        { id: "er", front: "ER-positive", when: "Oestrogen helps the cancer grow", back: "Most breast cancers are ER-positive. You will usually be offered hormone therapy." },
        { id: "her2", front: "HER2-positive", when: "A protein that helps cells grow", back: "Less than 1 in 5 invasive breast cancers. You will usually be offered a targeted therapy." },
      ],
    },
    sources: [BCN_PATHOLOGY, BCN_GRADE, BCN_SIZE, BCN_STAGES, BCN_RECEPTORS, BCN_HER2],
    quiz: {
      question: "If a breast cancer is ER-positive, what will you usually be offered?",
      options: [{ text: "Hormone therapy", right: true }, { text: "No further treatment" }, { text: "Only a scan" }],
      why: "If your breast cancer is ER-positive, you will usually be offered hormone therapy.",
    },
  },
  {
    id: "bc-follow-up",
    kicker: "Follow-up",
    question: "What happens at follow-up, and what is open access?",
    hook: "When hospital treatment ends, you are still looked after: yearly mammograms, a plan for who to call, and perhaps no fixed appointments at all.",
    short: "After hospital treatment ends, you continue to be monitored, which is called follow-up. You will usually be offered regular mammograms, and you may or may not have regular appointments. With open access follow-up, you contact your team or GP when you have concerns or symptoms, and you should be told who to contact and what to report.",
    sections: [
      {
        heading: "What follow-up is",
        paragraphs: [
          "Once hospital treatment for breast cancer ends, you continue to be monitored. How you are followed up depends on how likely you are to have side effects, the risk of your cancer coming back, and the arrangements at your hospital.",
          "Follow-up appointments usually focus on how you are feeling. You can explain any problems, symptoms or side effects, and writing your questions down beforehand can help you get the most out of the appointment.",
        ],
      },
      {
        heading: "Open access follow-up",
        paragraphs: [
          "You may not be offered any regular clinic appointments after treatment ends. This is sometimes called open access or patient-initiated follow-up, and it leaves it to you to arrange to see your team when you need to.",
          "Before you are discharged, you should be given details of who to contact, how best to do this, and the types of concerns or symptoms to report. If you are not given this information, ask your treatment team.",
        ],
      },
      {
        heading: "Mammograms",
        paragraphs: [
          "After treatment, you are invited to have regular mammograms. If you had breast-conserving surgery, you have a mammogram on both breasts; after a mastectomy, you have one on your other breast; and after a double mastectomy, you are not offered mammograms.",
          "Most hospitals follow recommendations from NICE. If you are under 50, you have a follow-up mammogram every year for at least 5 years, and at around the age of 50 you are invited to the national breast screening programme.",
          "If you are 50 or over, you usually have a yearly mammogram for 5 years. After that, between 50 and 70 you are offered routine screening, and over 70 you can ask for a mammogram every 3 years by contacting your local screening unit.",
        ],
      },
      {
        heading: "Other tests",
        paragraphs: [
          "You will not usually have other routine scans and tests unless you report symptoms that need checking. Several large studies have shown that regular scans when there are no symptoms are not useful in finding recurrence.",
          "Some people are offered scans to check their bone strength. This is because some treatments, such as hormone therapy and chemotherapy, can affect the bones.",
        ],
      },
      {
        heading: "Support at the end of treatment",
        paragraphs: [
          "At the end of treatment, your hospital team writes a treatment summary and sends it to your GP. It covers side effects, signs of a possible recurrence and the symptoms to report to your treatment team.",
          "You should also be offered a Cancer Care Review with your GP or practice nurse within 12 months of treatment. If you have not been offered one and would like one, contact your GP.",
        ],
      },
    ],
    helps: [
      "Make sure you know who to contact, how to contact them and which symptoms to report.",
      "Keep your key worker's contact details in your phone or somewhere safe.",
      "Write your questions down before each follow-up appointment.",
      "Contact your doctor or specialist nurse about new symptoms between appointments; you do not have to wait.",
      "Contact your GP if you have not been offered a Cancer Care Review and would like one.",
    ],
    tryThisWeek: [
      "Save your team's contact details.",
      "Write questions for follow-up.",
      "Ask about a Cancer Care Review.",
    ],
    ask: "Will I have regular appointments or open access follow-up, and who do I contact between mammograms?",
    interactive: {
      kind: "timeline",
      title: "After hospital treatment",
      steps: [
        { id: "end", when: "End of treatment", title: "Know who to call", points: ["You should be told who to contact and what to report.", "A treatment summary goes to your GP."] },
        { id: "between", when: "Between appointments", title: "Report changes", points: ["Contact your team about new symptoms.", "You do not have to wait for your next visit."] },
        { id: "review", when: "Within 12 months", title: "Cancer Care Review", points: ["A meeting with your GP or practice nurse.", "Ask your GP if you have not been offered one."] },
        { id: "yearly", when: "Every year", title: "Mammograms", points: ["Yearly mammograms, usually for at least 5 years.", "Both breasts after breast-conserving surgery."] },
        { id: "after", when: "After 5 years", title: "Screening", points: ["Around 50 to 70, routine breast screening.", "Over 70, you can ask for a mammogram every 3 years."] },
      ],
    },
    sources: [BCN_FOLLOW_UP, CRUK_FOLLOW_UP, MAC_FINISHING],
    quiz: {
      question: "With open access follow-up, what should you be given before discharge?",
      options: [{ text: "Details of who to contact and what to report", right: true }, { text: "A fixed appointment every month" }, { text: "A full-body scan every year" }],
      why: "Before you are discharged, you should be given details of who to contact, how best to do this, and the types of concerns or symptoms to report.",
    },
  },
  {
    id: "bc-recurrence",
    kicker: "Recurrence",
    question: "Will it come back, and what do the numbers really say?",
    hook: "Most breast cancers do not come back. Knowing the real figures, and the changes to report, can make the worry easier to carry.",
    short: "Most people diagnosed with primary breast cancer will not have a recurrence, but it is very common to worry about it. The risk is higher in the first few years and usually reduces over time, though recurrence can happen many years later. Survival figures describe large groups of people and cannot predict what will happen to you.",
    sections: [
      {
        heading: "A very common worry",
        paragraphs: [
          "Most breast cancers do not come back after treatment, but it is very common to worry about breast cancer returning. When treatment has finished, it is common to worry that every symptom you have is linked to cancer.",
          "Many people struggle with feelings of uncertainty, but these often get better with time. Going to the hospital for a test, or hearing something about cancer in the news, can trigger them.",
        ],
      },
      {
        heading: "What the numbers say",
        paragraphs: [
          "Cancer Research UK says survival is generally very good for breast cancer, particularly if it is diagnosed early. Generally, for women with breast cancer in the UK, almost 90 out of every 100 survive their cancer for 5 years or more, and more than 75 out of every 100 survive it for 10 years or more.",
          "These numbers are based on large groups of people and cannot predict what will happen to you. Your treatment team can tell you more about your own risk of recurrence if you want to know it.",
          "It is up to you to decide how much you want to know about your own prognosis. Some people prefer not to ask, and others want as much information as possible.",
        ],
      },
      {
        heading: "Risk changes with time",
        paragraphs: [
          "Each person's risk depends on many factors, such as the size, type and grade of the cancer and whether the lymph nodes were affected. The risk is higher in the first few years and usually reduces as time goes on.",
          "Recurrence can still happen many years after treatment. That is why it is important to stay breast and body aware and to report any changes to your treatment team or GP.",
        ],
      },
      {
        heading: "What to look out for",
        paragraphs: [
          "Report any symptoms that are new or unusual for you, do not have an obvious cause, or do not go away. Changes include a lump or thickening, swelling in the chest, armpit or around the collarbone, puckering or dimpling of the skin, a rash near the scar, or swelling in the arm or hand.",
          "Get used to looking at and feeling both sides of your chest regularly, perhaps in the bath or shower or when you get dressed. There is no set way to check, so decide what suits you best.",
        ],
      },
      {
        heading: "Living with the uncertainty",
        paragraphs: [
          "Focusing on what you can control now may help: getting involved in your recovery, talking about your feelings, finding ways of managing stress, and doing activities you enjoy. Constantly checking for changes can make you feel anxious, so if you find yourself doing this, talk to your cancer team or GP.",
          "There is no evidence that feeling worried or stressed alters your prognosis. If cancer does come back after treatment, it is often possible to treat it again.",
        ],
      },
    ],
    helps: [
      "Report symptoms that are new or unusual for you, have no obvious cause, or do not go away.",
      "Make sure your GP knows about your breast cancer, particularly if you were diagnosed some time ago.",
      "Ask your cancer team which symptoms to look out for, and keep their contact numbers.",
      "Look at and feel both sides of your chest regularly, in the bath, the shower or when you get dressed.",
      "If you are worried or finding it hard to cope, talk to your cancer team, GP or practice nurse.",
      "Ask your GP or treatment team about talking therapy, such as counselling.",
    ],
    tryThisWeek: [
      "Learn the changes to report.",
      "Save your team's numbers.",
      "Talk to someone about the worry.",
    ],
    ask: "What is my own risk of recurrence, and which symptoms should I report?",
    interactive: {
      kind: "signs",
      title: "Changes to report",
      intro: "Tick any you have noticed. Report anything new or unusual for you, with no obvious cause, that does not go away.",
      signs: ["A lump or thickening that feels different", "Swelling in the chest, armpit or near the collarbone", "A change in shape or size", "Puckering or dimpling of the skin", "A nipple that is pulled in or looks different", "Liquid from the nipple without squeezing", "Redness or a rash near the scar", "Swelling in the arm or hand"],
      after: "Tell your breast care nurse, treatment team or GP. After discharge, your GP may be your main contact and can refer you back.",
      copyHeading: "Changes I have noticed",
    },
    sources: [BCN_RECURRENCE_SYMPTOMS, MAC_WORRIES, CRUK_SURVIVAL, BCN_PROGNOSIS],
    quiz: {
      question: "How does the risk of breast cancer coming back usually change over time?",
      options: [{ text: "It is higher in the first few years, then usually reduces", right: true }, { text: "It rises every year" }, { text: "It disappears completely after a year" }],
      why: "The risk is higher in the first few years and usually reduces as time goes on.",
    },
  },
  {
    id: "bc-fatigue",
    kicker: "Fatigue",
    question: "Why am I still so tired, and how do I pace myself?",
    hook: "Cancer-related fatigue is not ordinary tiredness. It can last months after treatment, and activity, rest and planning all help.",
    short: "Fatigue is extreme tiredness or exhaustion that does not go away with rest or sleep. It is a common side effect of breast cancer and its treatments, and it may last for weeks, months or longer after treatment has finished. Pacing yourself, regular activity, planned rest and a fatigue diary can all help, and some causes, such as anaemia, can be treated.",
    sections: [
      {
        heading: "More than tiredness",
        paragraphs: [
          "Fatigue is extreme tiredness or exhaustion that does not go away with rest or sleep. You may have very little energy and find it difficult to do simple everyday tasks.",
          "For most people, fatigue gets better after treatment finishes. But for some it may continue for months or sometimes years.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "Most of the treatments for breast cancer have side effects that can contribute to fatigue. Radiotherapy can cause fatigue that lasts for weeks or months after it has finished, and you may only start to feel fatigued once it has ended.",
          "Hormone therapy and some targeted therapies may cause fatigue too. Worry, low mood and trouble sleeping can all make it worse.",
        ],
      },
      {
        heading: "Pacing and planning",
        paragraphs: [
          "It is important to pace yourself and do what feels best for you. Try not to be hard on yourself if you need to cancel plans or spend a day resting.",
          "A fatigue diary can help: record your level of fatigue every day from 1, no fatigue, to 10, extreme fatigue. You can then plan important activities for when you have more energy.",
          "Spread housework out over the week rather than doing lots at one time, and sit down for some tasks if you can. Accept offers of practical help, and let people know what you need.",
        ],
      },
      {
        heading: "Moving and resting",
        paragraphs: [
          "There is strong evidence that regular moderate exercise, such as walking, cycling, yoga or swimming, can help reduce fatigue. Being active may also give you more energy, improve sleep and help with mood.",
          "Plan rest between your activities, but keep naps to less than half an hour and avoid them in the late afternoon. Drink plenty of fluids, 6 to 8 glasses a day, as being dehydrated can make you tired.",
          "Breast Cancer Now suggests moderate activity for 30 minutes, 5 times a week. If that feels overwhelming, three 10-minute sessions can still provide benefits, and any amount of activity is better than none.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Tell your breast care nurse, treatment team or GP how you are feeling. Your fatigue may have a treatable cause, such as anaemia.",
          "Cognitive behavioural therapy, a type of talking therapy, has been shown to help people living with cancer-related fatigue. Your cancer doctor, specialist nurse or GP can also refer you to an occupational therapist for help with everyday tasks.",
        ],
      },
    ],
    helps: [
      "Tell your breast care nurse, treatment team or GP about your fatigue, as it may have a treatable cause.",
      "Keep a fatigue diary, scoring each day from 1 to 10, and plan important activities for your better times.",
      "Be physically active if you feel up to it, with something like walking, cycling, yoga or swimming.",
      "Keep naps to less than half an hour, and avoid them in the late afternoon.",
      "Drink plenty of fluids and limit the amount of alcohol you drink.",
      "Accept offers of practical help, and let people know what you need.",
    ],
    tryThisWeek: [
      "Start a fatigue diary.",
      "Take a short walk most days.",
      "Keep naps under half an hour.",
    ],
    ask: "Could anything treatable, such as anaemia, be adding to my tiredness?",
    interactive: {
      kind: "scenarios",
      title: "Pacing moments",
      scenarios: [
        {
          id: "housework",
          situation: "You wake with energy and want to do all the housework at once.",
          options: [{ text: "Spread it out over the week", best: true }, { text: "Do it all while you can" }],
          why: "Spread housework out over the week rather than doing lots at one time, and sit down for some tasks if you can.",
        },
        {
          id: "nap",
          situation: "You feel exhausted in the late afternoon.",
          options: [{ text: "Rest, but keep any nap short and earlier", best: true }, { text: "Have a long nap before dinner" }],
          why: "Plan rest between your activities, but keep naps to less than half an hour and avoid them in the late afternoon.",
        },
        {
          id: "plans",
          situation: "You have to cancel plans with friends because you are too tired.",
          options: [{ text: "Rest, and try not to be hard on yourself", best: true }, { text: "Push through and go anyway" }],
          why: "Try not to be hard on yourself if you need to cancel plans or spend a day resting.",
        },
        {
          id: "help",
          situation: "A neighbour offers to do your shopping.",
          options: [{ text: "Accept, and say what you need", best: true }, { text: "Say no so as not to be a bother" }],
          why: "Accept offers of practical help, and let people know what you need.",
        },
      ],
    },
    sources: [BCN_FATIGUE, MAC_FATIGUE, BCN_ACTIVITY],
    quiz: {
      question: "What is cancer-related fatigue?",
      options: [{ text: "Extreme tiredness that does not go away with rest or sleep", right: true }, { text: "Tiredness that always goes after one good night's sleep" }, { text: "A sign that treatment has not worked" }],
      why: "Fatigue is extreme tiredness or exhaustion that does not go away with rest or sleep.",
    },
  },
  {
    id: "bc-arm-shoulder",
    kicker: "Arm and shoulder",
    question: "Which arm and shoulder exercises help after breast surgery?",
    hook: "Shoulders seize up quickly after surgery. Gentle daily exercises, started early, bring back movement and lower the risk of lymphoedema.",
    short: "After breast surgery your arm and shoulder may feel stiff and sore for some weeks. Breast Cancer Now's exercises, developed with breast surgeons, breast care nurses and physiotherapists, aim to bring back the movement you had before and are usually started the day after surgery. They should not hurt, though a stretching feeling is normal, and after a reconstruction check with your surgeon, breast care nurse or physiotherapist before you start.",
    sections: [
      {
        heading: "Why the exercises matter",
        paragraphs: [
          "Your arm and shoulder on the operated side may feel stiff and sore for some weeks. Muscles and joints can seize up very quickly if they are not used, so the exercises are part of your daily routine.",
          "They can also help with tight scars and cording, prevent long-term problems with movement, posture and stiffness, and reduce the risk of lymphoedema. It is important to have a full range of shoulder movement before starting radiotherapy.",
        ],
      },
      {
        heading: "Starting and building up",
        paragraphs: [
          "Ideally you start the exercises before surgery, then begin them again the day after it. If you have had a breast reconstruction or any other type of surgery, talk to your surgeon, breast care nurse or physiotherapist before you start, and always follow their advice.",
          "Breast Cancer Now's set begins with warm-up exercises, shoulder shrugs and shoulder circling, followed by basic exercises: bent arms forward, bent arms sideways, back scratching and winging it. From the second week, advanced exercises are added: wall climbing, arm lifts and elbow push.",
          "Try to do them 3 times a day for the first 3 months. Cancer Research UK suggests beginning each session by circling your shoulders, with early exercises such as brushing or combing your hair.",
        ],
      },
      {
        heading: "How they should feel",
        paragraphs: [
          "You should not feel pain when doing the exercises, but a stretching or pulling sensation is normal. The more you do them, the easier they should become, and it can help to take pain relief before you start.",
          "Stop and speak to your surgeon, physiotherapist or breast care nurse as soon as possible if you have a seroma, a wound infection or problems with healing, or pain that gets worse during the exercises or continues afterwards.",
        ],
      },
      {
        heading: "Cording",
        paragraphs: [
          "Some people develop a tight cord of tissue under the skin, starting in the armpit, which can cause pain and limit arm movement. It can feel something like a guitar string, and it can appear even months after surgery.",
          "Cording usually gets better with physiotherapy and exercise. Tell your breast care nurse if you develop it, as they can refer you to a physiotherapist who can show you stretches and massage.",
        ],
      },
      {
        heading: "Lowering the risk of lymphoedema",
        paragraphs: [
          "Lymphoedema is swelling caused by a build-up of fluid, and it usually affects the arm. Most people who have had lymph nodes under the arm removed do not develop it, but keeping your arm and shoulder moving can help reduce the risk.",
          "If you increase your activity or take up something new, do it gradually, and stop if you have any discomfort or notice swelling. Get advice from your breast care nurse, treatment team or GP as soon as you notice swelling, tightness or heaviness.",
        ],
      },
    ],
    helps: [
      "After a breast reconstruction, talk to your surgeon, breast care nurse or physiotherapist before you start, and follow their advice.",
      "Begin the exercises the day after surgery, and try to do something every day.",
      "Take pain relief before the exercises if you have been advised to.",
      "Keep doing the exercises during radiotherapy, as they help your shoulder flexibility.",
      "Stop and get advice if you have a seroma, a wound problem, or pain that gets worse.",
      "Report any swelling, tightness or heaviness in your arm, hand, breast or chest as soon as you notice it.",
    ],
    tryThisWeek: [
      "Do your exercises every day.",
      "Take pain relief first if advised.",
      "Report any new arm swelling.",
    ],
    ask: "Which exercises suit my surgery, and could I see a physiotherapist if my movement is not improving?",
    interactive: {
      kind: "timeline",
      title: "Your exercises, week by week",
      steps: [
        { id: "before", when: "Before surgery", title: "Get a head start", points: ["Ideally, start the exercises before surgery.", "This builds flexibility in your arm and shoulder."] },
        { id: "day-after", when: "The day after surgery", title: "Start again", points: ["Aim to begin the exercises again.", "If you cannot start within a couple of days, tell your nurse or physiotherapist."] },
        { id: "week-one", when: "First week", title: "Warm-up and basics", points: ["Warm up with shoulder shrugs and shoulder circling.", "Then bent arms forward and sideways, back scratching and winging it."] },
        { id: "week-two", when: "Second week on", title: "Add the advanced set", points: ["Add wall climbing, arm lifts and elbow push.", "Finish each session with the cool-down."] },
        { id: "months", when: "First 3 months", title: "3 times a day", points: ["Morning, around midday and evening.", "Keep going during radiotherapy."] },
        { id: "later", when: "After 3 months", title: "Keep it up", points: ["Once your movement is back, do exercises 1, 3 and 6 once a day.", "This helps reduce discomfort and stiffness in the future."] },
      ],
    },
    sources: [BCN_EXERCISES, BCN_AFTER_SURGERY, CRUK_EXERCISES, BCN_LYMPHOEDEMA],
    quiz: {
      question: "How should the arm and shoulder exercises feel?",
      options: [{ text: "A stretch or pull, but not pain", right: true }, { text: "Painful, or they are not working" }, { text: "Like nothing at all" }],
      why: "You should not feel pain when doing the exercises, but a stretching or pulling sensation is normal.",
    },
  },
  {
    id: "bc-hormone-tablets",
    kicker: "Hormone tablets",
    question: "What helps with the side effects of tamoxifen and the aromatase inhibitors?",
    hook: "Hormone tablets can mean years of hot flushes and aching joints. Most side effects can be eased, and switching is possible, but never stop without your team.",
    short: "Tamoxifen blocks the effect of oestrogen on breast cancer cells, and the aromatase inhibitors, anastrozole, exemestane and letrozole, lower the amount of oestrogen in the body. They are usually taken for 5 to 10 years. The most common side effects are menopausal symptoms and joint pain, and if they are hard to cope with, your team may suggest a short break or a different drug.",
    sections: [
      {
        heading: "How they work",
        paragraphs: [
          "Tamoxifen blocks the effects of oestrogen on ER-positive breast cancers, which stops oestrogen helping the cancer cells grow. It can be taken by women who still have periods and by women whose periods have stopped.",
          "Aromatase inhibitors stop an enzyme called aromatase from working, so there is less oestrogen in the body. They are mainly used in women who have gone through the menopause, and all 3 have similar effects: no 1 drug is better than another.",
        ],
      },
      {
        heading: "Taking them for years",
        paragraphs: [
          "After surgery, tamoxifen or an aromatase inhibitor is usually taken for between 5 and 10 years. Letrozole is usually taken once a day, and it helps to take it at the same time each day.",
          "If you miss a dose of tamoxifen, you do not need to take an extra one the next day. With letrozole, never take 2 doses at the same time to make up for a forgotten one.",
          "Hormone therapy continues to reduce the risk of breast cancer coming back for many years after you finish taking it. This is known as the carryover effect.",
        ],
      },
      {
        heading: "Hot flushes and joint pain",
        paragraphs: [
          "The most common side effects are menopausal symptoms, such as hot flushes, night sweats, vaginal dryness and mood changes. With letrozole and anastrozole, these usually improve during the first months of taking it.",
          "Aching or pain in the joints and muscles is common, especially with letrozole, anastrozole and exemestane, and is often in the hands, wrists and knees. Strength and flexibility exercises, simple pain relief, and heat or ice packs can help.",
        ],
      },
      {
        heading: "Other effects to know",
        paragraphs: [
          "Letrozole and anastrozole can make your bones weaker, so you may have bone density scans, and your doctor may recommend a medicine called a bisphosphonate. Tamoxifen raises the risk of blood clots, so contact your treatment team or go to A&E straight away if you have pain, heat and swelling in an arm or leg, sudden shortness of breath, or chest pain.",
          "With tamoxifen, tell your GP or treatment team about any unexpected vaginal bleeding or pain. Some drugs may interfere with how tamoxifen works, so always check with your treatment team or pharmacist before taking other medicines.",
        ],
      },
      {
        heading: "If side effects are hard to live with",
        paragraphs: [
          "If side effects are affecting your quality of life or putting you off taking your hormone therapy, talk with your treatment team. They may suggest a short break or switching to a different hormone therapy drug.",
          "Some people find tamoxifen made by one manufacturer suits them better than another. Do not stop your tablets without talking to your doctor first, as not taking tamoxifen for the recommended time may increase the risk of the cancer coming back.",
        ],
      },
    ],
    helps: [
      "Talk to your treatment team if side effects are affecting your life; a short break or a different drug may help.",
      "Do not stop taking your hormone tablets without talking to your doctor or specialist first.",
      "For hot flushes, try cutting down on spicy food, caffeine and alcohol, keep the room cool and use a fan.",
      "Try strength and flexibility exercises, such as stretching or yoga, for joint and muscle pain.",
      "Check with your treatment team or pharmacist before taking other medicines, herbal products or supplements.",
      "Learn the signs of a blood clot, and get help straight away if you have them.",
    ],
    tryThisWeek: [
      "Note side effects for your team.",
      "Keep a fan to hand for flushes.",
      "Try gentle stretching for joints.",
    ],
    ask: "Are my side effects likely to ease, and could a break or a different hormone drug help?",
    interactive: {
      kind: "flip-cards",
      title: "Your hormone tablets, card by card",
      intro: "Turn each card to see how each medicine works and what to watch for.",
      cards: [
        { id: "tamoxifen", front: "Tamoxifen", when: "Before or after the menopause", back: "Blocks oestrogen's effect on the cancer. Raises the risk of blood clots, so know the signs." },
        { id: "letrozole", front: "Letrozole", when: "Once a day, at the same time", back: "An aromatase inhibitor. Can weaken bones, so your bone density may be checked." },
        { id: "anastrozole", front: "Anastrozole", when: "After the menopause", back: "An aromatase inhibitor. Menopause-like side effects usually improve during the first months." },
        { id: "exemestane", front: "Exemestane", when: "After the menopause", back: "The third aromatase inhibitor. All 3 have similar effects, and no 1 is better than another." },
      ],
    },
    sources: [BCN_TAMOXIFEN, BCN_AIS, BCN_HORMONE, NHS_LET_ABOUT, NHS_LET_HOW, NHS_LET_SIDE, NHS_ANA_SIDE, BCN_JOINTS],
    quiz: {
      question: "What should you do if hormone tablet side effects are hard to cope with?",
      options: [{ text: "Talk to your treatment team about a break or a switch", right: true }, { text: "Stop the tablets on your own" }, { text: "Take them only on good days" }],
      why: "If side effects are affecting your quality of life or putting you off taking your hormone therapy, talk with your treatment team.",
    },
  },
  {
    id: "bc-chemo-brain",
    kicker: "Memory and focus",
    question: "Why is my memory foggy, and will I get sharper?",
    hook: "Chemo brain is real, and it does not only follow chemotherapy. For most people it is mild and gets better with time.",
    short: "Some cancer treatments can make you less able to concentrate, plan or remember things. It is often called chemo brain, but it can affect people who did not have chemotherapy, and hormone therapies such as letrozole may play a part. It usually improves over time, and diaries, reminders, one task at a time and regular activity can help.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Cognitive function is our ability to think, including memory, language, attention, planning and multitasking. Some cancer treatments can cause cognitive impairment, which means you are less able to concentrate, plan or remember information.",
          "Your treatment team may call it cognitive impairment, but you may also hear it called chemo brain or brain fog. Any problems with concentration or memory are usually temporary and mild.",
        ],
      },
      {
        heading: "What you might notice",
        paragraphs: [
          "Common symptoms include short-term memory loss, finding it hard to concentrate or think clearly, and finding it difficult to do more than 1 thing at a time. You may also be less organised than usual, or have trouble finding the right words or finishing sentences.",
          "Symptoms vary from person to person and can come and go. They can be frustrating and interfere with your normal activities.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "It is not known exactly what causes it. Although it is called chemo brain, it can affect anyone going through cancer treatment, and there is some evidence that hormone therapies such as letrozole can also cause symptoms.",
          "Fatigue, difficulty sleeping, menopausal symptoms, anxiety and depression can all add to it. The menopause itself lowers oestrogen, which can affect memory and concentration.",
        ],
      },
      {
        heading: "Ways to cope",
        paragraphs: [
          "Keep a diary to spot patterns, such as symptoms being worse when you are tired or hungry, and plan harder tasks for when you feel at your best. Write reminders down at the time, on a calendar, a notepad or your phone.",
          "Focus on one task at a time and keep to a daily routine. Regular physical activity, good sleep, a healthy balanced diet and relaxation can all help.",
          "Some people find cognitive behavioural therapy helpful. It can also help to tell family and friends how it affects you, as these changes are often less obvious than other side effects.",
        ],
      },
      {
        heading: "Getting sharper, and work",
        paragraphs: [
          "Problems with concentration or memory are often mild and get better with time, though for some people symptoms can continue for years after treatment. Talk to your treatment team or doctor if you have these symptoms: they can check whether other side effects or medicines are adding to them.",
          "If it affects your work, speak to your employer about reasonable adjustments, such as a temporary change to your hours or more regular breaks.",
        ],
      },
    ],
    helps: [
      "Keep a diary of your symptoms to spot patterns, and show it to your doctor.",
      "Use lists, a calendar or phone reminders, and write things down at the time.",
      "Do one thing at a time, and turn off the TV or radio when you need to concentrate.",
      "Keep active with exercise you enjoy, such as walking, swimming or yoga.",
      "Tell family and friends how it is affecting you, so they can offer practical help.",
      "Ask your employer about reasonable adjustments, such as more regular breaks.",
    ],
    tryThisWeek: [
      "Set reminders on your phone.",
      "Do one task at a time.",
      "Take a walk you enjoy.",
    ],
    ask: "Could anything else, such as tiredness, poor sleep or my medicines, be adding to my memory problems?",
    interactive: {
      kind: "risk-check",
      title: "What adds to the fog?",
      intro: "Tick any that apply. Some you can work on, and some you cannot.",
      items: [
        { id: "treatment", label: "Cancer treatment itself", note: "Chemotherapy, hormone therapy and radiotherapy can all play a part.", changeable: false },
        { id: "fatigue", label: "Fatigue", note: "Being more physically active can help you feel more alert and reduce tiredness.", changeable: true },
        { id: "sleep", label: "Difficulty sleeping", note: "Good sleep can help. Talk to your treatment team about managing sleep problems.", changeable: true },
        { id: "stress", label: "Stress or anxiety", note: "Stress can affect your memory. Relaxation can help reduce it.", changeable: true },
        { id: "menopause", label: "Menopausal symptoms", note: "Lower oestrogen can affect memory. Talk to your team or GP about your symptoms.", changeable: true },
        { id: "diet", label: "A poor diet", note: "A healthy balanced diet and keeping hydrated can help.", changeable: true },
      ],
    },
    sources: [BCN_CHEMO_BRAIN, MAC_CHEMO_BRAIN, BCN_MENOPAUSE],
    quiz: {
      question: "Does chemo brain only happen after chemotherapy?",
      options: [{ text: "No, it can follow other cancer treatments too", right: true }, { text: "Yes, only after chemotherapy" }, { text: "It only happens before treatment starts" }],
      why: "Although it is called chemo brain, it can affect anyone going through cancer treatment, and there is some evidence that hormone therapies such as letrozole can also cause symptoms.",
    },
  },
  {
    id: "bc-body",
    kicker: "Your body",
    question: "How do I get used to my body after breast surgery?",
    hook: "Scars fade, swelling settles and clothes can be adapted. Whether you stay flat, wear a prosthesis or have a reconstruction is your choice.",
    short: "After surgery your breast or chest area is likely to be bruised and swollen, and it may take up to a year for things to settle. Looking at your body sooner, gently and in steps, may make it easier to feel confident. Staying flat, wearing a prosthesis or having a reconstruction are all personal choices, and you can change your mind later.",
    sections: [
      {
        heading: "The first weeks and months",
        paragraphs: [
          "After surgery your breast or chest area is likely to be bruised and swollen, but this will improve over time. Scars are often red at first and may feel tight and tender, but they fade and become less obvious.",
          "It might take up to a year for things to settle. Your treatment team should be able to tell you when you can start moisturising your scars.",
        ],
      },
      {
        heading: "Looking at yourself",
        paragraphs: [
          "You might prefer to see your body for the first time alone, or with someone there to support you. Research has shown that the sooner you look at the changes, the easier you may find it to gain confidence in the way you look.",
          "Breast Cancer Now suggests going in steps: look in a full-length mirror fully clothed and pick out 3 things you like, then do the same in underwear, then look at your naked body when you feel ready. If looking is still upsetting, a counsellor who deals with body changes may help, and your GP or breast care nurse can arrange this.",
        ],
      },
      {
        heading: "Flat, prosthesis or reconstruction",
        paragraphs: [
          "A breast prosthesis is an artificial breast form that replaces the shape of the breast that was removed. NHS patients do not have to pay for one, and you can ask for a replacement every 2 years on the NHS or when yours is worn out.",
          "Breast reconstruction can be done at the same time as a mastectomy or months or years later. A reconstructed breast will not feel, look or move exactly like your natural breast, and it does not increase the risk of the cancer coming back.",
          "The choice to stay flat, have a reconstruction or wear a prosthesis is very personal. Even if you decide against reconstruction, you can change your mind and have surgery months or years later.",
        ],
      },
      {
        heading: "Bras and clothes",
        paragraphs: [
          "In the first weeks, a soft, non-wired bra that is supportive but not restrictive is usually best, and a front-fastening bra may be easier if your shoulder is stiff. It can take between 6 months and 1 year after surgery and radiotherapy for the skin to heal and settle.",
          "You might be surprised by how many of your clothes still suit you. Soft natural fabrics, such as cotton or linen, can help sensitive skin, and you do not have to pay VAT on post-surgery bras or swimwear.",
        ],
      },
      {
        heading: "Other changes",
        paragraphs: [
          "Hair loss is almost always temporary, and hair usually starts to grow back once treatment has finished. Weight gain can happen during and after treatment, and eating healthily and regular activity can help.",
          "Lymphoedema, and wearing a compression sleeve, can also change how you feel about your body. Talking about these changes can be difficult, but addressing your concerns is an important part of your care.",
        ],
      },
    ],
    helps: [
      "Look at your body in steps, starting fully clothed in a full-length mirror.",
      "Ask your treatment team when you can start moisturising your scars.",
      "Take a well-fitting bra to your prosthesis fitting, and ask your breast care nurse if you are not given an appointment.",
      "Wear a soft, non-wired, supportive bra while the area heals.",
      "Before deciding about reconstruction, ask to talk to women who have, and have not, had one.",
      "If looking at your body stays upsetting, ask your GP or breast care nurse about a counsellor.",
    ],
    tryThisWeek: [
      "Try the mirror steps, clothed first.",
      "Ask about moisturising your scars.",
      "Choose a soft, non-wired bra.",
    ],
    ask: "What are my options for reconstruction or a prosthesis, now or in the future?",
    interactive: {
      kind: "flip-cards",
      title: "Flat, prosthesis or reconstruction",
      intro: "Turn each card to see what each choice involves. There is no right or wrong choice.",
      cards: [
        { id: "flat", front: "Staying flat", when: "No prosthesis and no reconstruction", back: "A choice some women make. Flat Friends offers support after a mastectomy without reconstruction." },
        { id: "prosthesis", front: "A prosthesis", when: "An artificial breast form", back: "Free for NHS patients, with a replacement every 2 years or when it is worn out." },
        { id: "immediate", front: "Immediate reconstruction", when: "At the same time as surgery", back: "A breast shape straight away, but a longer operation and recovery." },
        { id: "delayed", front: "Delayed reconstruction", when: "Months or years later", back: "More time to decide, but you will not be able to keep your nipple." },
      ],
    },
    sources: [BCN_BODY, BCN_AFTER_SURGERY, CRUK_LIFE_AFTER_SURGERY, BCN_PROSTHESIS, BCN_RECONSTRUCTION, BCN_BRAS, BCN_CLOTHING],
    quiz: {
      question: "Does breast reconstruction increase the risk of the cancer coming back?",
      options: [{ text: "No", right: true }, { text: "Yes, a little" }, { text: "Only if it is done later" }],
      why: "A reconstructed breast will not feel, look or move exactly like your natural breast, and it does not increase the risk of the cancer coming back.",
    },
  },
  {
    id: "bc-menopause",
    kicker: "Menopause",
    question: "Why has treatment brought on the menopause, and what helps?",
    hook: "Chemotherapy, hormone therapy and ovarian suppression can bring on menopausal symptoms suddenly. HRT is not usually an option, but many other things help.",
    short: "Some breast cancer treatments cause an early menopause, or symptoms like it, and these are often more sudden and intense than a natural menopause. Hot flushes are the most commonly reported symptom. HRT is not usually recommended after breast cancer, but cooling tips, non-hormonal medicines, vaginal moisturisers and CBT can help, and your GP or team can refer you to a specialist menopause clinic.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "Many women have menopausal symptoms because of their breast cancer treatment. Hormone therapies, chemotherapy and surgery to remove the ovaries can all cause them.",
          "Ovarian suppression stops the ovaries making oestrogen and can bring on symptoms suddenly. Chemotherapy may make your periods stop, sometimes only for a while, and women aged around 40 and above are less likely to have their periods return than women under 40.",
        ],
      },
      {
        heading: "Hot flushes and night sweats",
        paragraphs: [
          "Hot flushes are the most commonly reported menopausal symptom caused by breast cancer treatment. They can happen from a couple a day to a few every hour, and may fade over time, though sometimes they last for many years.",
          "Keep a fan with you, wear layers of loose natural fibres, keep a bottle of water to hand, and avoid or reduce caffeine, alcohol and spicy foods. Several non-hormonal prescription medicines have also been shown to relieve hot flushes.",
        ],
      },
      {
        heading: "Why HRT is not the usual answer",
        paragraphs: [
          "HRT is not usually recommended after breast cancer, because there is uncertainty about whether it increases the risk of the cancer coming back. The risk is thought to be greater for hormone receptor positive breast cancer.",
          "Your team may discuss HRT if your symptoms are severe and seriously affect your quality of life, or have not responded to other treatments. They will talk through the risks and benefits with you.",
        ],
      },
      {
        heading: "Dryness, sleep, mood and bones",
        paragraphs: [
          "Vaginal dryness is common and can get worse if it is not treated, so speak to your GP or treatment team. Vaginal moisturisers and lubricants can help, and you may need to try a few before one suits you.",
          "Cognitive behavioural therapy may help with hot flushes and night sweats, and with low mood and sleeplessness. Going through the menopause also raises the risk of osteoporosis, so your team or GP may arrange a scan to check your bone strength.",
        ],
      },
      {
        heading: "Fertility and support",
        paragraphs: [
          "Even if your periods stop and you have menopausal symptoms, you may still be able to get pregnant, so you may still need contraception. An early menopause may also mean coming to terms with no longer being able to get pregnant, which can be very difficult.",
          "It might help to keep a diary or list of your symptoms to discuss with your cancer doctor, breast care nurse or GP. If you are struggling to manage, ask about a specialist menopause clinic.",
        ],
      },
    ],
    helps: [
      "Keep a diary or list of your symptoms to discuss with your cancer doctor, breast care nurse or GP.",
      "Carry a fan and a bottle of water, and wear layers you can take off when a flush starts.",
      "Avoid or reduce caffeine, alcohol and spicy foods.",
      "Ask about vaginal moisturisers and lubricants, and try different products until one suits you.",
      "Speak to your healthcare team before trying any herbal treatments or supplements.",
      "Ask your treatment team or GP about a specialist menopause clinic if you are struggling.",
    ],
    tryThisWeek: [
      "Start a symptom diary.",
      "Carry a fan and some water.",
      "Cut down on caffeine.",
    ],
    ask: "Is my menopause likely to be temporary or permanent, and what can I take for my symptoms?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick any you have. They can be hard to tell apart from other side effects, so a list helps your team.",
      signs: ["Hot flushes", "Night sweats", "Vaginal dryness or soreness", "Needing to wee urgently, or infections", "Changes to sex drive", "Joint pain", "Difficulty sleeping", "Memory and concentration problems", "Feeling anxious or low"],
      after: "Share this with your cancer doctor, breast care nurse or GP. If you are struggling, ask about a specialist menopause clinic.",
      copyHeading: "Menopausal symptoms I have",
    },
    sources: [BCN_MENOPAUSE, CRUK_MENOPAUSE, BCN_HOT_FLUSHES],
    quiz: {
      question: "Why is HRT not usually recommended after breast cancer?",
      options: [{ text: "It is uncertain whether it raises the risk of the cancer coming back", right: true }, { text: "It never helps menopausal symptoms" }, { text: "It stops hot flushes for good" }],
      why: "HRT is not usually recommended after breast cancer, because there is uncertainty about whether it increases the risk of the cancer coming back.",
    },
  },
  {
    id: "bc-work",
    kicker: "Work",
    question: "How do I go back to work after breast cancer?",
    hook: "The law treats breast cancer as a disability, so your employer has to make reasonable adjustments. A phased return is a common first step.",
    short: "Under the Equality Act 2010, anyone who has or has had breast cancer is classed as disabled, which protects you from being treated unfairly at work. Your employer has to make reasonable adjustments, such as a phased return, changes to your hours or extra breaks. Ongoing fatigue or memory problems can make the return harder than expected, so plan it with your team and your employer.",
    sections: [
      {
        heading: "Your rights",
        paragraphs: [
          "For the purposes of the Equality Act 2010, anyone who has or has had breast cancer is classed as disabled. This protects employees in England, Scotland and Wales, and the Disability Discrimination Act 1995 protects people living in Northern Ireland.",
          "You cannot lose your job or be treated unfairly because you have breast cancer. You do not have to tell your employer, but it could help them be more supportive, and you have the right for what you share to be kept private.",
        ],
      },
      {
        heading: "Planning your return",
        paragraphs: [
          "When you return depends on how you are feeling, any ongoing side effects, what your job involves and your financial situation. It can help to discuss your plan with your treatment team or GP, and with your manager or HR department.",
          "Returning may not be as straightforward as you imagined. Ongoing fatigue, memory problems or the emotional changes after treatment can all make it harder.",
        ],
      },
      {
        heading: "Reasonable adjustments",
        paragraphs: [
          "Reasonable adjustments are practical changes that make it easier for you to be at work. They could include a phased return, building up your hours or workload gradually, a lighter workload for a time, or changes to your work pattern.",
          "Other examples are extra breaks to help with tiredness, a parking space near work, a desk fan for hot flushes, or a desk closer to the toilets. Discuss and agree any adjustments with your employer before they are put in place.",
        ],
      },
      {
        heading: "Help with costs",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition. It could give you a grant for things like specialist equipment, or the cost of travelling to work if you cannot use public transport.",
          "An Access to Work grant does not affect your other benefits, and you do not have to pay it back. It will not pay for reasonable adjustments, which are the changes your employer has to make by law.",
        ],
      },
      {
        heading: "Other paths",
        paragraphs: [
          "You may find you cannot or do not want to return to the hours and workload you had before, or you may be thinking about a complete change of direction. Take your time and consider all the options.",
          "Before you go back, think about how it will affect your finances and any benefits. Macmillan's money advisers and welfare rights advisers can be reached free on 0808 808 0000.",
        ],
      },
    ],
    helps: [
      "Talk through your plan to return to work with your treatment team or GP.",
      "Ask your manager or HR department about a phased return.",
      "Share your side effects with your employer, so they understand how best to support you.",
      "Write notes in return-to-work meetings, or take someone with you.",
      "Check whether Access to Work could help with equipment or travel costs.",
      "Get advice from an experienced benefits adviser before your hours or income change.",
    ],
    tryThisWeek: [
      "Ask about a phased return.",
      "List side effects to share at work.",
      "Take notes at work meetings.",
    ],
    ask: "When might I be ready to go back to work, and which adjustments would you suggest?",
    interactive: {
      kind: "scenarios",
      title: "Back at work",
      scenarios: [
        {
          id: "hours",
          situation: "Your manager asks when you can be back on full hours.",
          options: [{ text: "Ask for a phased return", best: true }, { text: "Go straight back to full hours" }],
          why: "They could include a phased return, building up your hours or workload gradually, a lighter workload for a time, or changes to your work pattern.",
        },
        {
          id: "flushes",
          situation: "Hot flushes make the office hard to bear.",
          options: [{ text: "Ask for a desk fan", best: true }, { text: "Say nothing and struggle on" }],
          why: "Other examples are extra breaks to help with tiredness, a parking space near work, a desk fan for hot flushes, or a desk closer to the toilets.",
        },
        {
          id: "tired",
          situation: "Fatigue hits you by mid-afternoon.",
          options: [{ text: "Agree extra breaks with your employer", best: true }, { text: "Keep working without breaks" }],
          why: "Discuss and agree any adjustments with your employer before they are put in place.",
        },
        {
          id: "equipment",
          situation: "You need specialist equipment that costs more than an adjustment.",
          options: [{ text: "Check whether Access to Work can help", best: true }, { text: "Pay for it all yourself" }],
          why: "It could give you a grant for things like specialist equipment, or the cost of travelling to work if you cannot use public transport.",
        },
      ],
    },
    sources: [BCN_WORK, MAC_WORK, GOV_ATW],
    quiz: {
      question: "Under the Equality Act 2010, how is someone who has had breast cancer classed?",
      options: [{ text: "As disabled", right: true }, { text: "As unwell only during treatment" }, { text: "It is up to each employer" }],
      why: "For the purposes of the Equality Act 2010, anyone who has or has had breast cancer is classed as disabled.",
    },
  },
  {
    id: "bc-relationships",
    kicker: "Intimacy",
    question: "How might breast cancer change sex and intimacy, and what helps?",
    hook: "Desire often dips after treatment, and dryness, pain or tiredness can get in the way. Talking, taking it slowly and simple products help.",
    short: "Many people find their desire for sex decreases during and after breast cancer treatment, because of side effects, fatigue or changes to how they feel about their body. Vaginal dryness, pain and numbness can be eased with moisturisers, lubricants, pain relief and different positions. Talking openly with a partner, and with your breast care nurse or GP, can help.",
    sections: [
      {
        heading: "Why desire can change",
        paragraphs: [
          "Many people being treated for breast cancer find their desire for sexual contact decreases. This can be because of side effects, fatigue, changes to your body and confidence, or being unable to concentrate on anything other than your diagnosis and treatment.",
          "Loss of desire can continue for many months after treatment, but as time moves on it should start to improve. Holding hands, hugging and kissing are ways to stay close in the meantime.",
        ],
      },
      {
        heading: "Dryness and discomfort",
        paragraphs: [
          "Treatments that lower oestrogen or block its action can make the vagina dry and less supple, which can make sex painful. If it is not treated, dryness can get worse, so it is important to get help if you need it.",
          "Vaginal moisturisers, used regularly, and lubricants, used during sex, can help, and it is worth trying different products. Do a skin test before using any product, and see your GP to rule out an infection.",
        ],
      },
      {
        heading: "Pain, numbness and tiredness",
        paragraphs: [
          "Surgery and radiotherapy can leave soreness, numbness and sensitivity. Trying positions that put less pressure on your chest, such as lying side by side, and taking pain relief beforehand can help.",
          "If you are fatigued, spend time with your partner with no sexual expectations. Touching and stroking each other are ways to feel close when you have little energy.",
        ],
      },
      {
        heading: "Talking with your partner",
        paragraphs: [
          "Your partner faces a time of readjustment too, and some partners become overly protective or avoid starting sex for fear of upsetting or hurting you. Talking about how you feel may encourage them to share their own thoughts and concerns.",
          "Try to talk when you are not being intimate, about the things you have enjoyed as well as those you have found difficult. If some things feel hard to say in person, try emailing or texting instead.",
          "Breast surgery does not affect you being able to have sex, but you may need time before you feel ready to be looked at or touched. Try to let your partner know if you are having problems.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Talking about sex can be difficult, but tell your treatment team, breast care nurse or GP about any of these issues. Even when it has been a while since treatment, your breast care nurse is still a useful point of contact.",
          "You, or you and your partner, may be helped by a counsellor or therapist who deals specifically with sexual issues. Most people with breast cancer who have sexual problems do not need long-term therapy.",
        ],
      },
    ],
    helps: [
      "Use a vaginal moisturiser regularly, and a lubricant during sex.",
      "Do a skin test before using any new moisturiser or lubricant.",
      "Try positions that put less pressure on your chest, such as lying side by side.",
      "Take things slowly, and make time for you and your partner free from distractions.",
      "Talk to your partner when you are not being intimate, about what you enjoy and what is difficult.",
      "Tell your breast care nurse or GP, who can help arrange a counsellor or therapist if you need one.",
    ],
    tryThisWeek: [
      "Try a vaginal moisturiser.",
      "Talk with your partner at a calm time.",
      "Mention it to your breast care nurse.",
    ],
    ask: "What can help with vaginal dryness alongside my treatment, and could I see a specialist counsellor?",
    interactive: {
      kind: "scenarios",
      title: "Closeness moments",
      scenarios: [
        {
          id: "dryness",
          situation: "Sex has become painful because of dryness.",
          options: [{ text: "Try moisturisers and lubricants, and see your GP", best: true }, { text: "Put up with it and say nothing" }],
          why: "If it is not treated, dryness can get worse, so it is important to get help if you need it.",
        },
        {
          id: "partner",
          situation: "Your partner has stopped starting anything, afraid of hurting you.",
          options: [{ text: "Talk about how you both feel", best: true }, { text: "Wait and hope it passes" }],
          why: "Talking about how you feel may encourage them to share their own thoughts and concerns.",
        },
        {
          id: "tired",
          situation: "You are too tired for sex but miss being close.",
          options: [{ text: "Spend time together with no expectations", best: true }, { text: "Avoid touching altogether" }],
          why: "Touching and stroking each other are ways to feel close when you have little energy.",
        },
        {
          id: "tender",
          situation: "Your chest is still tender after surgery.",
          options: [{ text: "Try a position with less pressure on your chest", best: true }, { text: "Push through the pain" }],
          why: "Trying positions that put less pressure on your chest, such as lying side by side, and taking pain relief beforehand can help.",
        },
      ],
    },
    sources: [BCN_INTIMACY, BCN_SEX, CRUK_LIFE_AFTER_SURGERY],
    quiz: {
      question: "What can help with vaginal dryness?",
      options: [{ text: "Regular moisturisers, and lubricants during sex", right: true }, { text: "Waiting, as it always settles on its own" }, { text: "Avoiding the subject with your GP" }],
      why: "Vaginal moisturisers, used regularly, and lubricants, used during sex, can help, and it is worth trying different products.",
    },
  },
  {
    id: "bc-mood",
    kicker: "Mood",
    question: "Why do I feel low now treatment has ended, and where can I get help?",
    hook: "Many people feel lowest just when everyone expects them to feel better. It is common, it often lifts, and help is there if it does not.",
    short: "It is common to feel low, anxious or isolated after breast cancer, especially when regular hospital appointments stop. Low mood often improves with time, but if it does not, it may be depression, which can be treated with talking therapies or medicines. Talk to your GP or treatment team, and if you are struggling to cope, you can call Samaritans on 116 123 at any time.",
    sections: [
      {
        heading: "Why the end can be hard",
        paragraphs: [
          "For some people, reaching the last hospital treatment feels like a real achievement. Others feel isolated, low or anxious when their regular hospital appointments stop.",
          "After treatment ends, low feelings can be made worse by missing the reassurance of your team, people close to you expecting you to carry on as before, losing your sense of identity, or worries about breast cancer coming back.",
        ],
      },
      {
        heading: "Low mood or depression?",
        paragraphs: [
          "Low mood often improves with time. But if it does not, it may be a sign of depression, which is more than simply feeling unhappy or fed up for a few days.",
          "Signs include persistent low mood, feeling hopeless, losing interest in things you used to enjoy, withdrawing from family and friends, and sleeping badly or more than usual. Depression is a real illness, not a sign of weakness, and with the right treatment and support most people with depression can make a full recovery.",
        ],
      },
      {
        heading: "Anxiety and stress",
        paragraphs: [
          "It is common to feel anxious or stressed after a breast cancer diagnosis and treatment. Signs include difficulty sleeping, muscle tension, a racing heart, difficulty concentrating and feeling overwhelmed.",
          "Distraction, relaxation, mindfulness and regular exercise, such as a brisk walk or yoga, can all help. Alcohol may seem to help with stress in the short term, but in the long term it can make you feel more stressed and anxious.",
        ],
      },
      {
        heading: "Getting treatment",
        paragraphs: [
          "Talk to your treatment team or GP if you, or the people close to you, are worried about your mood. They can refer you to a counsellor, psychologist or psychiatrist for help and support.",
          "Talking therapies such as counselling or cognitive behavioural therapy can help treat depression. If your GP recommends an antidepressant, it usually takes 1 to 2 weeks to feel an improvement and around 8 weeks to feel the full benefits, and your GP will talk to you about how long to take it.",
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
      "Tell your treatment team or GP if you, or the people close to you, are worried about your mood.",
      "Ask about talking therapies, such as counselling or cognitive behavioural therapy.",
      "Try relaxation, mindfulness or regular exercise, such as a brisk walk, to ease stress.",
      "Talk to someone who has had a similar experience, through a local support group or Breast Cancer Now's Someone Like Me service.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "For urgent mental health help, call 111 and select the mental health option; call 999 if a life is at risk.",
    ],
    tryThisWeek: [
      "Tell your GP how you feel.",
      "Take a brisk walk.",
      "Save 116 123 in your phone.",
    ],
    ask: "Could my low mood be depression, and can you refer me for counselling or CBT?",
    interactive: {
      kind: "signs",
      title: "Feelings to mention",
      intro: "Tick any that have lasted. They can help your GP or team understand how you have been.",
      signs: ["Persistent low mood or sadness", "Feeling hopeless or helpless", "Losing interest in things you enjoyed", "Withdrawing from family and friends", "Sleeping badly or more than usual", "Changes in appetite", "Feeling anxious, tense or overwhelmed", "Feeling very low or having suicidal thoughts"],
      after: "Tell your GP or treatment team. For urgent help, call 111 and select the mental health option, or Samaritans on 116 123. Call 999 if a life is at risk.",
      copyHeading: "How I have been feeling",
    },
    sources: [BCN_LOW_MOOD, BCN_ANXIETY, NHS_DEPRESSION, NHS_URGENT, SAMARITANS, BCN_FOLLOW_UP],
    quiz: {
      question: "What might it mean if low mood does not improve with time?",
      options: [{ text: "It may be depression, which can be treated", right: true }, { text: "It is a sign of weakness" }, { text: "Nothing can be done about it" }],
      why: "Low mood often improves with time. But if it does not, it may be a sign of depression, which is more than simply feeling unhappy or fed up for a few days.",
    },
  },
];
