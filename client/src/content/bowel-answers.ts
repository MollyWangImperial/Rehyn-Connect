import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Bowel cancer page's pieces (content/library-conditions/cancer-mind-digestion.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS,
// Bowel Cancer UK, Macmillan Cancer Support, Cancer Research UK and Colostomy UK, with the government's
// pages on Access to Work and the Equality Act, and Samaritans and Shout for urgent emotional support.
// It describes recovery and living with after-effects; it gives no survival figures. General
// information only; it never replaces what a person's own cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const bcuk = (label: string, path: string): LearnSource => ({ label: `Bowel Cancer UK: ${label}`, url: `https://www.bowelcanceruk.org.uk/about-bowel-cancer/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/bowel-cancer/${path}` });
const cuk = (label: string, path: string): LearnSource => ({ label: `Colostomy UK: ${label}`, url: `https://www.colostomyuk.org/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_BC_TREAT = nhs("Treatment for bowel cancer", "conditions/bowel-cancer/treatment/");
const NHS_BC_TESTS = nhs("Tests and next steps for bowel cancer", "conditions/bowel-cancer/tests-and-next-steps/");
const NHS_BC_CAUSES = nhs("Causes of bowel cancer", "conditions/bowel-cancer/causes/");
const NHS_SCREENING = nhs("Bowel cancer screening", "tests-and-treatments/bowel-cancer-screening/");
const NHS_COLOSTOMY_WHAT = nhs("What is a colostomy?", "tests-and-treatments/colostomy/what-is-a-colostomy/");
const NHS_COLOSTOMY_RECOVERY = nhs("Recovery and lifestyle changes after a colostomy", "tests-and-treatments/colostomy/recovery-and-lifestyle-changes-after-a-colostomy/");
const NHS_COLOSTOMY_COMPLICATIONS = nhs("Complications of a colostomy", "tests-and-treatments/colostomy/complications-of-a-colostomy/");
const NHS_ILEOSTOMY_RECOVERY = nhs("Recovering and lifestyle changes after an ileostomy", "tests-and-treatments/ileostomy/recovery/");
const NHS_NEUROPATHY = nhs("Peripheral neuropathy", "conditions/peripheral-neuropathy/");
const NHS_DEPRESSION = nhs("Overview: Depression in adults", "mental-health/conditions/depression-in-adults/overview/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT_MH = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_EMM_URGENT = nhs("Every Mind Matters: Urgent support", "every-mind-matters/urgent-support/");

const BCUK_STAGING = bcuk("Staging and grading", "diagnosis/staging-and-grading/");
const BCUK_SURGERY = bcuk("Surgery", "treatment/surgery/");
const BCUK_SURGERY_TYPES = bcuk("Types of surgery", "treatment/surgery/types-of-surgery/");
const BCUK_AFTER_SURGERY = bcuk("After surgery", "treatment/surgery/after-surgery/");
const BCUK_STOMAS = bcuk("Stomas", "treatment/surgery/stomas/");
const BCUK_CHEMO = bcuk("Chemotherapy", "treatment/chemotherapy/");
const BCUK_CHEMO_SIDE = bcuk("Chemotherapy side effects", "treatment/chemotherapy/chemotherapy-side-effects/");
const BCUK_RADIO = bcuk("Radiotherapy", "treatment/radiotherapy/");
const BCUK_AFTER_TREATMENT = bcuk("After treatment", "treatment/after-treatment/");
const BCUK_LATE = bcuk("Long term and late side effects", "living-with-and-beyond-bowel-cancer/long-term-and-late-side-effects/");
const BCUK_BOWEL_HABIT = bcuk("Change in bowel habit after treatment", "living-with-and-beyond-bowel-cancer/change-in-bowel-habit-after-treatment/");
const BCUK_LARS = bcuk("Low anterior resection syndrome (LARS)", "living-with-and-beyond-bowel-cancer/change-in-bowel-habit-after-treatment/low-anterior-resection-syndrome/");
const BCUK_DIET = bcuk("Diet after treatment", "living-with-and-beyond-bowel-cancer/diet-after-treatment/");
const BCUK_ACTIVITY = bcuk("Physical activity", "living-with-and-beyond-bowel-cancer/physical-wellbeing/physical-activity/");
const BCUK_BODY_SEX = bcuk("Body image and sex", "living-with-and-beyond-bowel-cancer/body-image-and-sex/");
const BCUK_WORK = bcuk("Work, money and travel", "living-with-and-beyond-bowel-cancer/work,-money-and-travel/");
const BCUK_FEELINGS = bcuk("Your feelings after treatment", "living-with-and-beyond-bowel-cancer/emotional-wellbeing/your-feelings-after-treatment/");
const BCUK_ANXIETY = bcuk("Managing fear, anxiety and depression", "living-with-and-beyond-bowel-cancer/emotional-wellbeing/managing-fear-anxiety-depression/");
const BCUK_FAMILY = bcuk("Family history", "risk-factors/family-history/");
const BCUK_LYNCH = bcuk("Lynch syndrome", "risk-factors/family-history/lynch-syndrome/");
const BCUK_SCREENING = bcuk("Bowel cancer screening", "screening/");

const MAC_STAGING = mac("Staging and grading of bowel cancer", "bowel-cancer/staging-and-grading-of-bowel-cancer");
const MAC_CELL_TESTS = mac("Tests on the bowel cancer cells", "bowel-cancer/tests-on-the-bowel-cancer-cells");
const MAC_FOLLOW_UP = mac("Follow-up care after cancer treatment", "after-treatment/follow-up-care-after-treatment");
const MAC_FINISHING = mac("Finishing cancer treatment", "after-treatment/finishing-treatment");
const MAC_BOWEL_CHANGES = mac("Bowel changes after cancer treatment", "bowel-cancer/managing-bowel-changes-after-treatment");
const MAC_RECOVERING = mac("Recovering from bowel cancer surgery", "bowel-cancer/recovering-from-bowel-cancer-surgery");
const MAC_NEUROPATHY = mac("Peripheral neuropathy", "impacts-of-cancer/peripheral-neuropathy");
const MAC_SEX = mac("Sex life after bowel cancer", "impacts-of-cancer/sex-life-and-bowel-cancer");

const CRUK_FOLLOW_UP = cruk("Follow up after treatment for bowel cancer", "treatment/follow-up");
const CRUK_HIGH_RISK = cruk("Screening for people at high risk of bowel cancer", "getting-diagnosed/screening-for-people-high-risk");
const CRUK_BOWEL_CHANGES = cruk("Bowel changes after treatment", "living-with/bowel-changes-after-treatment");
const CRUK_STOMA = cruk("Coping with a stoma", "living-with/having-stoma");
const CRUK_EATING = cruk("Eating and bowel cancer", "living-with/eating");
const CRUK_SEX = cruk("Your sex life and bowel cancer", "living-with/sex-life");
const CRUK_COPING = cruk("Coping with bowel cancer", "living-with/coping");
const CRUK_AFTER_SURGERY = cruk("After surgery for colon cancer", "treatment/treatment-colon/surgery-colon/after-surgery-bowel-cancer");

const CUK_WHAT = cuk("What is a stoma?", "information/what-is-a-stoma/");
const CUK_REVERSAL = cuk("Stoma reversal", "information/stoma-reversal/");
const CUK_DIET = cuk("Diet", "information/diet/");
const CUK_EXERCISE = cuk("Exercise", "information/exercise/");
const CUK_HERNIA = cuk("What is a parastomal hernia?", "information/stoma-problems/parastomalhernia/");
const CUK_FIRSTS = cuk("Tackling the 'firsts' after stoma surgery", "information/tackling-the-firsts-after-stoma-surgery/");
const CUK_RADAR = cuk("RADAR key and photo ID card", "information/radarkey/");
const CUK_TRAVEL = cuk("Travel advice", "information/travel-advice/");
const CUK_WORK = cuk("Returning to work after stoma surgery", "information/returning-to-work-after-stoma-surgery/");
const CUK_LOVE = cuk("Love, sex and relationships", "information/love-and-relationships/");
const CUK_HELPLINE = cuk("Stoma Helpline", "support/helpline/");

const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ADJUSTMENTS = gov("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact us", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SHOUT: LearnSource = { label: "Shout: Get help", url: "https://giveusashout.org/get-help/" };

export const bowelAnswers: LearnArticle[] = [
  {
    id: "bwc-what-you-had",
    kicker: "Understanding",
    question: "What was each part of my treatment for?",
    hook: "An operation to remove the cancer, and perhaps chemotherapy or radiotherapy before or after it. Each had its own job.",
    short: "Surgery is the most common treatment for bowel cancer: part or all of the bowel around the cancer may be removed. Chemotherapy may be given before surgery to shrink the cancer, or after it to try to stop the cancer coming back. Radiotherapy is mainly used for cancer in the rectum.",
    sections: [
      {
        heading: "A plan made for you",
        paragraphs: [
          "The treatment you have for bowel cancer depends on the size of the cancer, whether it is in your colon or rectum, whether it has spread, whether it has certain genetic changes, and your age and general health. You may be offered a combination of surgery, chemotherapy, radiotherapy and targeted medicines.",
          "Your specialist team explains the treatments, works with you on a plan and helps you manage the side effects. A clinical nurse specialist is your main point of contact during and after treatment.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Surgery is the most common treatment for bowel cancer. For colon cancer, the surgeon removes the part of the colon that contains the cancer and the nearby lymph nodes, then joins the remaining ends together with stitches or staples.",
          "For cancers in the middle or lower rectum, the surgeon removes the part of the rectum with the cancer, the fatty tissue around it and the envelope of tissue holding the lymph nodes and blood vessels. This lowers the risk of the cancer coming back. If the cancer is very low down, the rectum and anus are removed and you will have a permanent colostomy.",
          "To help your recovery, you may need a colostomy or ileostomy, which may be temporary or permanent.",
        ],
      },
      {
        heading: "Chemotherapy",
        paragraphs: [
          "Chemotherapy uses drugs to kill cancer cells. You may have it before surgery to shrink the cancer, after surgery to try to stop it coming back, or if the cancer has spread.",
          "Very early bowel cancer, stage 1, does not normally need chemotherapy. Most people with stage 3 bowel cancer are offered chemotherapy after surgery to help reduce the risk of the cancer coming back.",
          "It is given as a course of cycles, usually every two to three weeks. Common drugs include fluorouracil through a drip, capecitabine tablets and oxaliplatin, often combined, as in FOLFOX or CAPOX.",
        ],
      },
      {
        heading: "Radiotherapy",
        paragraphs: [
          "Radiotherapy is a possible treatment for rectal cancer. Given before surgery, it can shrink the tumour, making it easier to remove and reducing the risk of the cancer coming back. A short course lasts around five days and a long course five or six weeks.",
          "When radiotherapy and chemotherapy are given together, this is called chemoradiation. It can cause more short term side effects, like diarrhoea.",
        ],
      },
      {
        heading: "After the operation",
        paragraphs: [
          "After surgery, a pathologist looks at the cancer cells under a microscope. Your team then knows more about whether all the cancer was removed, how far it had spread, whether you need more treatment and whether it is linked to an inherited condition.",
          "Most side effects get better a few weeks after treatment finishes. But some people have side effects that last longer, or new ones later on, such as tiredness, bowel or bladder changes, sexual problems or a hernia.",
        ],
      },
    ],
    helps: [
      "Ask your clinical nurse specialist any questions you have; they are your main point of contact during and after treatment.",
      "Ask your healthcare team for more information about the type of surgery you have had.",
      "Keep a diary of your side effects, to help you remember the details at your appointments.",
      "Use contraception during chemotherapy and for about a year after treatment ends.",
      "Speak to your healthcare team if you have any questions about fertility, as chemotherapy and radiotherapy can affect it.",
      "Call the free Macmillan helpline on 0808 808 0000, open every day from 8am to 8pm, if you want to talk.",
    ],
    tryThisWeek: [
      "Write down questions for your nurse.",
      "Start a side effects diary.",
      "Ask which surgery you had.",
    ],
    ask: "Which operation did I have, and why did I have chemotherapy or radiotherapy?",
    interactive: {
      kind: "flip-cards",
      title: "Your treatment, card by card",
      intro: "Turn each card to see when each treatment is used and what it does.",
      cards: [
        { id: "surgery", front: "Surgery", when: "The most common treatment", back: "Removes the part of the bowel with the cancer and the nearby lymph nodes, then joins the ends." },
        { id: "stoma", front: "A stoma", when: "Sometimes, after surgery", back: "A colostomy or ileostomy to help your recovery. It may be temporary or permanent." },
        { id: "before", front: "Treatment before surgery", when: "More likely with rectal cancer", back: "Radiotherapy, chemotherapy or both shrink the tumour, giving the surgeon the best chance of removing all of it." },
        { id: "after", front: "Chemotherapy after surgery", when: "Offered to most people with stage 3", back: "Aims to reduce the risk of the cancer coming back." },
        { id: "radiotherapy", front: "Radiotherapy", when: "Mainly for rectal cancer", back: "Shrinks the tumour before surgery. A short course is around five days, a long one five or six weeks." },
        { id: "chemoradiation", front: "Chemoradiation", when: "Radiotherapy and chemotherapy together", back: "Shrinks the tumour and lowers the risk of it coming back in the same place, with more short term side effects." },
      ],
    },
    sources: [NHS_BC_TREAT, NHS_BC_TESTS, BCUK_SURGERY, BCUK_SURGERY_TYPES, BCUK_CHEMO, BCUK_RADIO, BCUK_AFTER_SURGERY],
    quiz: {
      question: "Why might you have chemotherapy after surgery?",
      options: [{ text: "To try to stop the cancer coming back", right: true }, { text: "To help the wound heal" }, { text: "To reverse a stoma" }],
      why: "You may have it before surgery to shrink the cancer, after surgery to try to stop it coming back, or if the cancer has spread.",
    },
  },
  {
    id: "bwc-results",
    kicker: "Your results",
    question: "What do my stage, grade and lymph node results mean?",
    hook: "T, N and M; a number from 1 to 4; a grade from 1 to 3. Each part answers a simple question about the cancer.",
    short: "The stage describes the size of the cancer, where it is and whether it has spread. The TNM system records how far the tumour grew into the bowel wall (T), whether it reached nearby lymph nodes (N) and whether it spread elsewhere (M). The grade describes how abnormal the cells look under a microscope.",
    sections: [
      {
        heading: "Why staging matters",
        paragraphs: [
          "Staging a cancer means describing its size, where it is and whether it has spread. Knowing the stage helps you and your doctor decide on the best treatment.",
          "If you have surgery, a doctor called a pathologist looks at the cancer cells under a microscope. Your report may have a small letter in front: cTNM is based on scans and biopsies before treatment, and pTNM adds what the pathologist found after surgery.",
        ],
      },
      {
        heading: "T, N and M",
        paragraphs: [
          "T describes how far the tumour has grown through the bowel wall, from T1, in the inner layer, to T4, which has grown through the outer lining.",
          "N describes the lymph nodes. N0 means no lymph nodes contain cancer cells, N1 means cancer cells in up to three nearby lymph nodes, and N2 means four or more.",
          "M describes spread. M0 means the cancer has not spread to other parts of the body, and M1 means it has, like to the liver or lungs.",
        ],
      },
      {
        heading: "From letters to a number",
        paragraphs: [
          "For example, T3N1M0 means the cancer has grown into the outer lining of the bowel and reached up to three nearby lymph nodes, but has not spread to other parts of the body. The TNM results are used to give a number stage from 1 to 4.",
          "In stage 1 the cancer has not spread outside the bowel wall, and in stage 2 it has grown into or through the outer layer. In stage 3 it has spread to nearby lymph nodes, and in stage 4 to other parts of the body. You may also see an older system, Dukes' A to D.",
        ],
      },
      {
        heading: "The grade",
        paragraphs: [
          "The grade describes how the cancer cells look compared with normal cells. Grade 1 cells look similar to normal cells, grade 2 cells look more abnormal, and grade 3 cells look very abnormal.",
          "A low grade cancer may grow more slowly and is less likely to spread than a high grade cancer. The pathologist also checks whether cancer cells have spread into blood vessels or nerves, which helps you and your doctor decide about further treatment.",
        ],
      },
      {
        heading: "Tests on the cancer cells",
        paragraphs: [
          "All patients diagnosed with bowel cancer should be offered screening tests on their tumour, called mismatch repair (MMR) or microsatellite instability (MSI) testing. These help decide whether you need genetic testing for Lynch syndrome, and the results can help with treatment choices.",
          "Doctors may also test for changes in the RAS and BRAF genes, mainly to guide treatment for advanced bowel cancer. It is useful to write down your screening test results, as you may be asked about them in the future.",
        ],
      },
    ],
    helps: [
      "If waiting for your stage and grade is worrying, call the Macmillan Support Line free on 0808 808 00 00.",
      "Write down your MMR or MSI screening test results, as you may be asked about them in the future.",
      "If you have been diagnosed with bowel cancer but not tested for Lynch syndrome, speak to your healthcare team about a referral to clinical genetics.",
      "Ask whether you have had genetic testing, and what type.",
      "Ask your doctors and specialist nurses to explain things again if you need them to.",
    ],
    tryThisWeek: [
      "Write down your MMR or MSI result.",
      "Ask if you have had genetic testing.",
      "Ask your team to explain again.",
    ],
    ask: "What is my TNM stage and grade, and how many lymph nodes were affected?",
    interactive: {
      kind: "flip-cards",
      title: "Your report, part by part",
      intro: "Turn each card to see what each part of a bowel cancer report describes.",
      cards: [
        { id: "t", front: "T: tumour", when: "How far it grew into the bowel wall", back: "From T1, in the inner layer, to T4, which has grown through the outer lining." },
        { id: "n", front: "N: nodes", when: "Nearby lymph nodes", back: "N0: none contain cancer cells. N1: up to three nearby nodes. N2: four or more." },
        { id: "m", front: "M: metastases", when: "Spread to other parts of the body", back: "M0: it has not spread to other parts of the body. M1: it has, like to the liver or lungs." },
        { id: "stage", front: "Number stage", when: "1 to 4, from the TNM results", back: "1: inside the bowel wall. 2: into or through the outer layer. 3: nearby lymph nodes. 4: other parts of the body." },
        { id: "grade", front: "Grade", when: "How the cells look", back: "Grade 1 cells look similar to normal cells. Grade 3 cells look very abnormal and are more likely to spread." },
        { id: "mmr", front: "MMR or MSI", when: "Screening tests on the tumour", back: "Show whether genetic testing for Lynch syndrome is needed, and can help with treatment choices." },
      ],
    },
    sources: [BCUK_STAGING, MAC_STAGING, MAC_CELL_TESTS, BCUK_LYNCH, BCUK_FAMILY, CRUK_COPING],
    quiz: {
      question: "What does N0 mean on a staging report?",
      options: [{ text: "No lymph nodes contain cancer cells", right: true }, { text: "The cancer has spread to the liver" }, { text: "The cancer cells look very abnormal" }],
      why: "N0 means no lymph nodes contain cancer cells, N1 means cancer cells in up to three nearby lymph nodes, and N2 means four or more.",
    },
  },
  {
    id: "bwc-follow-up",
    kicker: "Follow-up",
    question: "What happens at follow-up, and how long does it go on?",
    hook: "Regular checks for up to five years: a blood test, scans and colonoscopies. More and more, you can also call when you need to.",
    short: "After treatment you have regular follow-up appointments, usually for up to five years, to check how you are recovering and whether the cancer has come back. Tests can include a blood test for a protein called CEA, CT or MRI scans and a colonoscopy. Many hospitals now let you arrange appointments yourself, and you can contact your team between appointments.",
    sections: [
      {
        heading: "Why you have follow-up",
        paragraphs: [
          "After you have finished treatment, you have regular follow-up appointments to check how you are recovering physically and emotionally. They are also a chance to ask about any support you may need.",
          "If you had treatment to cure the cancer, the team checks it has not come back or spread. If there is a risk of it coming back, regular checks increase the chance of it being picked up early.",
        ],
      },
      {
        heading: "The tests",
        paragraphs: [
          "You may have a blood test for a protein called CEA (carcinoembryonic antigen), CT or MRI scans, a physical examination, and a colonoscopy or flexible sigmoidoscopy.",
          "The British Society of Gastroenterology says colonoscopies after treatment for bowel cancer should be around 1 year and around 4 years after treatment. You may be asked to have a blood test or scan before an appointment, so the results are ready.",
        ],
      },
      {
        heading: "How often, and for how long",
        paragraphs: [
          "You usually have these appointments for up to five years after finishing treatment. In the first year they may happen every few months, and as time goes on they happen less often.",
          "How often you see your specialist depends on how you are feeling, the treatment you had, and whether you have certain gene changes, such as Lynch syndrome.",
        ],
      },
      {
        heading: "Booking your own checks",
        paragraphs: [
          "Many hospitals are moving away from routine appointments and instead put you in control of your follow-up. This is called patient-led, self-managed or patient initiated follow-up.",
          "Once your doctors are happy with your progress, you can arrange appointments yourself, as often as you feel you need to. You might book one if you have noticed a change in your body that worries you.",
          "You do not have to wait until your next visit. Contact your doctor or specialist nurse if you have any concerns or notice any new symptoms between appointments.",
        ],
      },
      {
        heading: "When appointments bring back worry",
        paragraphs: [
          "Many people find follow-up appointments quite worrying, as a hospital visit can bring back anxiety about the cancer. It can help to tell someone close to you how you are feeling.",
          "For others, going back to hospital is a positive reminder that they are returning to everyday life, and they feel reassured after the visit.",
        ],
      },
    ],
    helps: [
      "Write down any questions before your appointment, and write down the answers too.",
      "Take your latest prescription, spare stoma appliances in case your stoma needs examining, and a friend or family member for support.",
      "Always tell your cancer team about any ongoing or new symptoms, and how you are coping with your feelings.",
      "Ask for copies of letters or a treatment summary, so you can keep track.",
      "Keep your key worker's contact details in your phone or somewhere safe.",
      "Keep going to your regular GP check-ups, and take part in NHS screening.",
    ],
    tryThisWeek: [
      "Write down questions for follow-up.",
      "Save your key worker's details.",
      "Ask for a treatment summary.",
    ],
    ask: "How often will I have follow-up, which tests will I have, and who do I call between appointments?",
    interactive: {
      kind: "timeline",
      title: "Your follow-up years",
      steps: [
        { id: "end", when: "As treatment ends", title: "Know who to call", points: ["Your team gives you details of who to contact, often a key worker.", "You may get a treatment summary; your GP gets one too."] },
        { id: "first", when: "The first year", title: "Checks every few months", points: ["Appointments may happen every few months.", "You may have a blood test or scan beforehand, so the results are ready."] },
        { id: "one", when: "Around 1 year", title: "A colonoscopy", points: ["A colonoscopy around 1 year after treatment.", "This is what the British Society of Gastroenterology says."] },
        { id: "later", when: "As time goes on", title: "Less often, or when you ask", points: ["Appointments happen less often.", "With patient-led follow-up, you arrange checks when you need them."] },
        { id: "four", when: "Around 4 years", title: "Another colonoscopy", points: ["A second colonoscopy around 4 years after treatment.", "Your follow-up is specific to your needs."] },
        { id: "five", when: "Up to five years", title: "Follow-up usually ends", points: ["Appointments usually go on for up to five years.", "You can call your team at any time if you have worries."] },
      ],
    },
    sources: [BCUK_AFTER_TREATMENT, CRUK_FOLLOW_UP, MAC_FOLLOW_UP, CRUK_HIGH_RISK, MAC_FINISHING],
    quiz: {
      question: "You notice a new symptom between appointments. What do the sources say?",
      options: [{ text: "Contact your doctor or specialist nurse", right: true }, { text: "Wait until your next appointment" }, { text: "Wait for your next colonoscopy" }],
      why: "Contact your doctor or specialist nurse if you have any concerns or notice any new symptoms between appointments.",
    },
  },
  {
    id: "bwc-stoma",
    kicker: "Stoma",
    question: "How do I get used to living with a stoma?",
    hook: "A new opening on your tummy, a bag to change, and a stoma nurse to show you how. It takes time, and it gets easier.",
    short: "A stoma is an opening on your tummy where a section of bowel is brought out, and poo collects in a bag attached to the skin around it. It may be temporary, to let the bowel heal, or permanent. It can take a while to get used to, but your stoma nurse helps you learn, and as you do it should have less and less impact on daily life.",
    sections: [
      {
        heading: "What a stoma is",
        paragraphs: [
          "A stoma is an opening on your tummy where a section of bowel is brought out, and poo collects in a bag attached to the skin around it. A colostomy is formed from the large bowel and an ileostomy from the small bowel.",
          "A stoma should be soft, slippery and pink, like the inside of your mouth. It should not hurt, but it can bleed easily when scratched or wiped.",
          "It is swollen at first after the operation, but this reduces after 6 to 8 weeks.",
        ],
      },
      {
        heading: "Colostomy or ileostomy",
        paragraphs: [
          "A colostomy is usually on the left side of your body. The poo is usually more solid, and you change the bag once or twice a day, depending on your bowel habit.",
          "An ileostomy is usually on the right side. The output is usually liquid rather than solid, so you empty the bag four to six times a day and fit a new one every one to two days.",
        ],
      },
      {
        heading: "Temporary or permanent",
        paragraphs: [
          "A temporary stoma lets the bowel heal after surgery and may be reversed later, by rejoining the two healthy ends of the bowel. Some people have it reversed after a few months; others have their stoma for several years first.",
          "Not all temporary stomas are reversed, and it can take a while for bowel function to return to normal after a reversal. Colostomy UK suggests asking your consultant or stoma care nurse about the realistic outcome, and speaking to others who have had a reversal.",
        ],
      },
      {
        heading: "The first weeks at home",
        paragraphs: [
          "It usually takes around 8 weeks to recover from a colostomy, and 6 to 8 weeks from an ileostomy. Avoid strenuous activities and heavy lifting while your tummy muscles heal.",
          "Your stoma care nurse gives you a two-week supply of stoma appliances to take home and offers a follow-up appointment. Once your stoma has settled, you get a monthly prescription from your GP.",
          "If you have a permanent stoma, your GP gives you a prescription to order stoma bags free on the NHS. With a temporary one you may need to pay, but in England your GP or specialist nurse can help you apply for free prescriptions.",
        ],
      },
      {
        heading: "Feelings, and when to get help",
        paragraphs: [
          "It is normal to worry about how you will look and how other people will react. Stoma bags are well designed: they cannot be seen through your clothes and should not smell or leak.",
          "Speak to your stoma nurse urgently if less poo is coming out than usual, or you have cramps, feel sick or notice swelling around the stoma, as you may have a blockage. Swelling around the stoma can also be a hernia.",
        ],
      },
    ],
    helps: [
      "Ask your stoma care nurse about any worries; they can help you adapt.",
      "Measure your stoma regularly so the bag fits well, which helps prevent skin damage.",
      "Eat regularly, chew your food well and drink plenty of fluids, to help stop your stoma getting blocked.",
      "Ask your doctor about medicines in liquid or powder form, and do not stop a prescribed medicine without speaking to your doctor.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have a very high temperature, lots of blood from your stoma, signs of dehydration or severe tummy pain.",
      "Call the Colostomy UK Stoma Helpline on 0800 328 4257 to talk to a volunteer who has a stoma.",
    ],
    tryThisWeek: [
      "Note questions for your stoma nurse.",
      "Measure your stoma for a good fit.",
      "Call the Stoma Helpline if you need to.",
    ],
    ask: "Is my stoma temporary, and if so, when might it be reversed?",
    interactive: {
      kind: "signs",
      title: "Changes to report",
      intro: "Tick any you have noticed. These are the signs the sources say to tell your stoma nurse, GP or NHS 111 about.",
      signs: ["Less poo than usual, or none", "Cramps or feeling sick", "Swelling around the stoma", "Lots of blood from the stoma or in the bag", "A very high temperature, or feeling shivery", "Signs of dehydration", "Severe tummy pain", "Sore or damaged skin around the stoma"],
      after: "Speak to your stoma nurse urgently about a possible blockage. For a very high temperature, lots of blood, dehydration or severe pain, ask for an urgent GP appointment or get help from NHS 111.",
      copyHeading: "Stoma changes I have noticed",
    },
    sources: [BCUK_STOMAS, NHS_COLOSTOMY_WHAT, CUK_WHAT, NHS_COLOSTOMY_RECOVERY, NHS_ILEOSTOMY_RECOVERY, CUK_REVERSAL, CRUK_STOMA, NHS_COLOSTOMY_COMPLICATIONS, CUK_HELPLINE],
    quiz: {
      question: "How should a healthy stoma look?",
      options: [{ text: "Soft, slippery and pink", right: true }, { text: "Dry and pale" }, { text: "Dark and painful to touch" }],
      why: "A stoma should be soft, slippery and pink, like the inside of your mouth.",
    },
  },
  {
    id: "bwc-bowels",
    kicker: "Recovery",
    question: "Will my bowels settle after surgery, and what helps meanwhile?",
    hook: "More often, more urgent, less predictable. The changes usually ease, most in the first six months, and a lot can help.",
    short: "After treatment for bowel cancer, many people go more often or more urgently, or have looser poo or wind. These changes can last several weeks and often up to a year, and should improve over time, especially in the first six months, though your bowel habit is unlikely to return exactly to how it was. After rectal surgery, some people have long-term symptoms called low anterior resection syndrome (LARS), which your team can help you manage.",
    sections: [
      {
        heading: "What changes",
        paragraphs: [
          "Treatment for bowel cancer can change how often you poo, how urgently you need to go, and how completely you can empty your bowel. You may also have diarrhoea or constipation, wind and bloating, or a sore bottom.",
          "Straight after surgery to remove part of the colon, poo may be a bit looser and more frequent, but this usually settles down after a few weeks.",
        ],
      },
      {
        heading: "How long it lasts",
        paragraphs: [
          "These changes can last several weeks and often up to a year. They should improve over time, especially in the first six months, but your bowel habit is unlikely to return to how it was before your diagnosis.",
          "Things should settle into a new normal pattern. It might feel difficult at first, but it is likely to get better over time.",
        ],
      },
      {
        heading: "After rectal surgery: LARS",
        paragraphs: [
          "Low anterior resection syndrome, or LARS, is a collection of long-term bowel symptoms after surgery to remove all or part of the rectum. Most people have some symptoms after a low anterior resection, but they are not always severe, and radiotherapy or chemotherapy can make them more likely.",
          "Symptoms can include going more often, passing small amounts often, urgency, leaking, not being able to tell wind from poo, and feeling you need to go but passing nothing.",
          "Tell your healthcare team if you have any of these. Some people develop symptoms after their hospital follow-up has finished, so you may need to ask your GP for a referral back to your hospital team.",
        ],
      },
      {
        heading: "What can help",
        paragraphs: [
          "Your doctor may suggest loperamide, which slows down your bowel so poo is less runny and you need to go less often. Always speak to your doctor before taking any medicines for diarrhoea.",
          "Pelvic floor exercises strengthen the muscles used for bowel control and may help with leaking. A colorectal or continence specialist can tell you if they are likely to help, and it can take at least 12 weeks of exercises, 3 times a day, to rebuild strength.",
          "Try not to sit and strain on the toilet for long periods, and try to hold on until the urge to poo is strong. It can take time and perseverance to re-train the bowel.",
        ],
      },
      {
        heading: "Looking after your skin, and yourself",
        paragraphs: [
          "Going often can make the skin around your bottom sore. Keep it clean and dry, use unperfumed wet wipes or damp cotton wool, pat it dry gently, and wear cotton underwear.",
          "Anxiety and stress can make poo looser and more frequent, so learning to relax may help your bowel settle. A short walk each day may help keep your bowel motions soft and regular.",
        ],
      },
    ],
    helps: [
      "Tell your surgeon or specialist nurse if your bowels are not settling; they can advise you, prescribe medicines or refer you to a continence nurse or dietitian.",
      "Always speak to your doctor before taking any medicines for diarrhoea.",
      "Ask whether pelvic floor exercises could help you, and how to do them.",
      "Keep a food and symptom diary to see which foods affect your bowel.",
      "If you have diarrhoea, take regular small sips and aim for at least six to eight glasses of liquid a day.",
      "Get medical advice straight away if you have not had a poo for more than a few days and you have pain, feel sick or have been sick.",
    ],
    tryThisWeek: [
      "Start a food and symptom diary.",
      "Sip six to eight glasses a day.",
      "Ask about pelvic floor exercises.",
    ],
    ask: "Do my symptoms sound like LARS, and could I be referred for help with bowel control?",
    interactive: {
      kind: "signs",
      title: "Bowel changes to mention",
      intro: "Tick any you have noticed. These are common after bowel cancer treatment, and your team can help with them.",
      signs: ["Going more often than before", "Passing small amounts often", "An urgent need to go", "Leaking, or not reaching the toilet in time", "Not being able to tell wind from poo", "Feeling you need to go but passing nothing", "Not emptying completely", "Sore skin around the bottom"],
      after: "Tell your healthcare team. If your hospital follow-up has finished, your GP can refer you back to your hospital team.",
      copyHeading: "Bowel changes I have noticed",
    },
    sources: [BCUK_BOWEL_HABIT, BCUK_LARS, CRUK_BOWEL_CHANGES, MAC_BOWEL_CHANGES],
    quiz: {
      question: "When do bowel changes after treatment usually improve most?",
      options: [{ text: "In the first six months", right: true }, { text: "Only after five years" }, { text: "They never improve" }],
      why: "They should improve over time, especially in the first six months, but your bowel habit is unlikely to return to how it was before your diagnosis.",
    },
  },
  {
    id: "bwc-food",
    kicker: "Food",
    question: "What should I eat after bowel surgery?",
    hook: "Low fibre at first, small regular meals, plenty to drink. Then bring foods back one at a time and see how your bowel copes.",
    short: "Most people eat low-fibre food at first while the bowel heals, often for about six weeks, then gradually add fibre back. Small, regular meals, chewing well and drinking plenty all help. Everyone is different, so a food diary helps you work out what suits you, and a dietitian can help.",
    sections: [
      {
        heading: "The first weeks",
        paragraphs: [
          "You start eating small portions of low-fibre food soon after your operation, which helps you recover and gets your bowel working again. You may be on a low-fibre diet for about 6 weeks, and can then gradually increase the fibre.",
          "Low-fibre foods include white pasta and bread, cream crackers, cornflakes, and vegetables and fruit that are well cooked and peeled. High-protein foods such as fish, meat, eggs, tofu and dairy products help your body heal.",
        ],
      },
      {
        heading: "How to eat",
        paragraphs: [
          "Eat small, more frequent meals rather than three large ones, and try to avoid long gaps between meals. Take small mouthfuls and chew your food slowly.",
          "Bowel Cancer UK suggests drinking six to eight glasses of fluid each day. Cutting down on caffeine can help, as caffeine can stimulate the bowel and make diarrhoea worse.",
        ],
      },
      {
        heading: "Finding what suits you",
        paragraphs: [
          "The foods most likely to cause problems are very high-fibre fruits and vegetables, onions, sprouts and cabbage, pulses such as baked beans or lentils, fizzy drinks, beer and lager, and very rich or fatty foods.",
          "A food diary of what you eat, when you eat it and any digestive problems can help you spot which foods cause trouble. If a food upsets you, cut it out and try it again in a few weeks, as it may no longer affect you.",
        ],
      },
      {
        heading: "Adding fibre back",
        paragraphs: [
          "Increase fibre gradually to avoid wind, bloating and stomach cramps, for example by adding an extra portion of vegetables every few days, and drink plenty as you do. Cooking vegetables and fruit well and removing their skins makes fibre easier to digest.",
          "In the longer term, a balanced diet with at least five portions of vegetables and fruit a day is important, unless your team has advised a low-fibre diet. Always speak to your healthcare team or a dietitian before making any big changes.",
        ],
      },
      {
        heading: "With a stoma",
        paragraphs: [
          "With an ileostomy, small hard foods like nuts, raisins and sweetcorn can sometimes cause a blockage, so eat small amounts and chew them well. You lose more fluid through an ileostomy, so keeping hydrated matters, and your wee should be a pale straw colour.",
          "Many people with a colostomy can eat a healthy, balanced diet. If you think a food causes problems, Colostomy UK suggests trying it at least three times, a couple of weeks apart, before cutting it out altogether.",
        ],
      },
    ],
    helps: [
      "Eat small, frequent meals and try to avoid long gaps between them.",
      "Keep a food diary of what you eat, when you eat it and any digestive problems.",
      "Increase fibre gradually, and drink more fluids as you do.",
      "Speak to your healthcare team or a dietitian before making any big changes to your diet.",
      "Ask your doctor or nurse to refer you to a dietitian if you have eating problems.",
      "Tell your GP or healthcare team if you have lost a lot of weight or are losing weight quickly.",
    ],
    tryThisWeek: [
      "Eat small meals more often.",
      "Start a food diary.",
      "Add fibre back slowly.",
    ],
    ask: "How long should I follow a low-fibre diet, and could I see a dietitian?",
    interactive: {
      kind: "scenarios",
      title: "Mealtime moments",
      scenarios: [
        {
          id: "salad",
          situation: "It is a few weeks after surgery and you fancy a big raw salad.",
          options: [{ text: "Choose well-cooked, peeled vegetables for now", best: true }, { text: "Eat a large raw salad" }],
          why: "It may help to eat a low fibre diet at first. Examples include vegetables and fruit that are well cooked and peeled.",
        },
        {
          id: "onions",
          situation: "Onions seem to upset your bowel.",
          options: [{ text: "Cut them out, then try again in a few weeks", best: true }, { text: "Never eat them again" }],
          why: "If a food upsets you, cut it out and try it again in a few weeks, as it may no longer affect you.",
        },
        {
          id: "fibre",
          situation: "You want to eat more fibre.",
          options: [{ text: "Add it gradually and drink more", best: true }, { text: "Switch to a bran cereal overnight" }],
          why: "Increase fibre gradually to avoid wind, bloating and stomach cramps, and drink plenty as you do.",
        },
        {
          id: "nuts",
          situation: "You have an ileostomy and love nuts.",
          options: [{ text: "Small amounts, chewed well", best: true }, { text: "A large handful at once" }],
          why: "Small hard foods like nuts, raisins and sweetcorn can sometimes cause a blockage, so eat small amounts and chew them well.",
        },
      ],
    },
    sources: [BCUK_AFTER_SURGERY, CRUK_EATING, MAC_BOWEL_CHANGES, BCUK_DIET, CRUK_BOWEL_CHANGES, CRUK_STOMA, CUK_DIET],
    quiz: {
      question: "A food upsets your bowel. What do the sources suggest?",
      options: [{ text: "Cut it out, then try it again in a few weeks", right: true }, { text: "Never eat it again" }, { text: "Eat more of it to get used to it" }],
      why: "If a food upsets you, cut it out and try it again in a few weeks, as it may no longer affect you.",
    },
  },
  {
    id: "bwc-neuropathy",
    kicker: "Side effects",
    question: "Why do my hands and feet tingle after chemotherapy, and will it get better?",
    hook: "The drug oxaliplatin can damage nerve endings in the hands and feet. For most people it slowly improves, and simple steps keep you safe meanwhile.",
    short: "The chemotherapy drug oxaliplatin can damage the nerve endings in the hands, feet and lower legs, causing tingling, numbness or weakness. This is called peripheral neuropathy. For most people, the symptoms slowly improve after treatment finishes, though this can take several months or longer, and for some people it lasts.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Peripheral neuropathy is damage to the nerves that carry messages between the brain, the spinal cord and the rest of the body. Some anti-cancer drugs, including oxaliplatin, are the most common cause in people with cancer.",
          "You may get pins and needles, weakness or numbness, which can make everyday things like writing, picking up small items and walking harder. Some people become sensitive to the cold.",
        ],
      },
      {
        heading: "During treatment",
        paragraphs: [
          "Symptoms can come on during a chemotherapy cycle and for up to two weeks afterwards, and the cold can trigger them or make them worse. Your team may advise wearing gloves to use the fridge or freezer, and avoiding chilled food and drinks for a few days after each treatment.",
          "Tell your team about any symptoms. If they are affecting your daily life, your doctor may lower the dose of oxaliplatin or change your treatment.",
        ],
      },
      {
        heading: "Will it get better?",
        paragraphs: [
          "For most people, the symptoms slowly improve once treatment has finished, as the nerves recover. This may take several months or longer, and symptoms may get worse for a few weeks before they get better, which is called coasting.",
          "In some people, neuropathy lasts for months or years after treatment, and for some the nerve damage is permanent. But many people find ways of coping with the changes.",
        ],
      },
      {
        heading: "What can help",
        paragraphs: [
          "Physical exercise can help reduce symptoms, and a physiotherapist can show you how to exercise safely, including exercises for walking and balance. An occupational therapist can suggest aids if daily tasks such as washing or dressing are hard.",
          "Medicines such as duloxetine, gabapentin or pregabalin may help nerve pain, as standard painkillers often do not work. Your GP or hospital doctor can refer you to a pain team if your pain is difficult to manage.",
        ],
      },
      {
        heading: "Staying safe",
        paragraphs: [
          "Protect your hands and feet: wear gloves and socks in cold weather, gloves for gardening or washing up, and well-fitting shoes. Do not walk around barefoot, and check your feet often for scratches.",
          "Test hot water with your elbow before a bath or shower. Keep rooms well lit and floors clear of things you could trip over. If you live in England, Scotland or Wales and drive, tell the DVLA if you have peripheral neuropathy.",
        ],
      },
    ],
    helps: [
      "Tell your healthcare team about any new or worsening tingling, numbness or weakness.",
      "If your team advises it, wear gloves to use the fridge or freezer and avoid chilled food and drinks for a few days after each treatment.",
      "Keep your hands and feet warm, wear well-fitting shoes, and check your feet often.",
      "Test the temperature of hot water with your elbow.",
      "Ask about a physiotherapist for walking and balance, or an occupational therapist for daily tasks.",
      "Tell the DVLA if you have side effects that could affect your driving, such as peripheral neuropathy.",
    ],
    tryThisWeek: [
      "Keep gloves by the freezer.",
      "Check your feet often.",
      "Test hot water with your elbow.",
    ],
    ask: "Is my neuropathy likely to improve, and could a physiotherapist or pain team help?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments with numb hands or feet",
      scenarios: [
        {
          id: "freezer",
          situation: "You need something from the freezer a few days after an oxaliplatin treatment.",
          options: [{ text: "Put gloves on first", best: true }, { text: "Grab it with bare hands" }],
          why: "Your team may advise wearing gloves to use the fridge or freezer, and avoiding chilled food and drinks for a few days after each treatment.",
        },
        {
          id: "bath",
          situation: "You are running a bath and your feet feel numb.",
          options: [{ text: "Test the water with your elbow", best: true }, { text: "Step straight in" }],
          why: "Test hot water with your elbow before a bath or shower.",
        },
        {
          id: "night",
          situation: "You get up in the night to go to the toilet.",
          options: [{ text: "Put a light on first", best: true }, { text: "Find your way in the dark" }],
          why: "Make sure rooms are well lit. Always put a light on if you get up during the night.",
        },
        {
          id: "worse",
          situation: "The tingling is getting worse between cycles.",
          options: [{ text: "Tell your healthcare team", best: true }, { text: "Wait until treatment ends" }],
          why: "Tell your team about any symptoms. If they are affecting your daily life, your doctor may lower the dose of oxaliplatin or change your treatment.",
        },
      ],
    },
    sources: [MAC_NEUROPATHY, BCUK_CHEMO_SIDE, BCUK_LATE, NHS_NEUROPATHY, BCUK_WORK],
    quiz: {
      question: "What usually happens to chemotherapy neuropathy after treatment finishes?",
      options: [{ text: "For most people it slowly improves", right: true }, { text: "It always gets worse" }, { text: "It goes away the next day" }],
      why: "For most people, the symptoms slowly improve once treatment has finished, as the nerves recover.",
    },
  },
  {
    id: "bwc-core",
    kicker: "Moving again",
    question: "How do I start walking and strengthening my tummy after bowel surgery?",
    hook: "Short walks first, no heavy lifting while the tummy heals, then core strength once your team agrees. It helps your bowel and your energy.",
    short: "Moving soon after surgery helps recovery, starting with leg and breathing exercises and short walks. Avoid lifting anything heavy for up to three months while your tummy muscles heal. Once you have recovered, ask your healthcare team about exercises to build up your core muscles, which can help reduce the risk of a hernia.",
    sections: [
      {
        heading: "In hospital",
        paragraphs: [
          "After bowel cancer surgery, you are encouraged to start moving around as soon as possible. Even if you have to stay in bed, regular leg movements and deep-breathing exercises are important, and a physiotherapist or nurse explains them.",
          "You might be sitting in a chair within 12 hours of your operation. The day after, you might be walking around your bed, and within a few days along the hospital corridor.",
        ],
      },
      {
        heading: "The first weeks at home",
        paragraphs: [
          "You are likely to feel very tired for several weeks after surgery. It helps to do a little more every day: sit for less time, walk around the house a bit more, then build up to a short walk outside.",
          "A short walk each day may help keep your bowel motions soft and regular. Exercise has also been shown to increase energy levels, so you may gradually be able to do a little more.",
        ],
      },
      {
        heading: "Protecting your tummy",
        paragraphs: [
          "After surgery to your tummy, the muscles are not as strong as before, and you may be at risk of a hernia, where part of your insides pushes through a weak area. To help prevent one, avoid lifting anything heavy for up to three months after surgery.",
          "The NHS says to avoid strenuous activities or heavy lifting for 8 weeks after a colostomy, and for 3 months after an ileostomy, while your tummy muscles heal.",
          "Hernias around a stoma are very common, but they rarely cause major complications. Coughing, sneezing and straining, such as lifting heavy objects, can all play a part, and your team may advise you to wear a support belt or garment.",
        ],
      },
      {
        heading: "Building your core",
        paragraphs: [
          "Once you have recovered from surgery, ask your healthcare team about abdominal exercises to build up your core muscles. Strengthening them strengthens the tummy wall, which can reduce the risk of a hernia forming, or improve comfort if you already have one.",
          "Colostomy UK's Active Ostomates brochure has some gentle exercises to do at home. Allow your body to recover and introduce exercise slowly, without pushing yourself too hard too soon.",
        ],
      },
      {
        heading: "Getting fitter",
        paragraphs: [
          "Provided your doctor or stoma care nurse agrees, you can introduce exercise and carefully build the intensity. Walking, swimming and cycling are good starting points, and the adhesive on stoma bags stays effective in water.",
          "As your strength comes back, build up to 30 minutes of moderate exercise, such as fast walking, on at least five days a week. Check with your healthcare team or physiotherapist before starting anything vigorous, and if you feel very tired, rest.",
        ],
      },
    ],
    helps: [
      "Do your leg movements and deep-breathing exercises, and start moving around as soon as you can.",
      "Walk a little more each day, starting around the house.",
      "Avoid lifting anything heavy for up to three months after surgery.",
      "Once you have recovered, ask your healthcare team about abdominal exercises for your core.",
      "Get the agreement of your doctor or stoma care nurse before taking up exercise or sport.",
      "Check with your healthcare team or physiotherapist before starting any vigorous activity.",
    ],
    tryThisWeek: [
      "Walk a little more each day.",
      "Avoid heavy lifting for now.",
      "Ask your team about core exercises.",
    ],
    ask: "When can I start abdominal exercises, and should I wear a support belt?",
    interactive: {
      kind: "timeline",
      title: "Moving again, step by step",
      steps: [
        { id: "hours", when: "Within 12 hours", title: "Sitting in a chair", points: ["You might be sitting in a chair within 12 hours of your operation.", "Do your leg movements and deep-breathing exercises."] },
        { id: "days", when: "The first few days", title: "Walking the corridor", points: ["Walking around your bed the day after.", "Walking along the hospital corridor within a few days."] },
        { id: "home", when: "First weeks at home", title: "A little more each day", points: ["Sit for less time and walk around the house a bit more.", "Build up to walking outside."] },
        { id: "heal", when: "Up to three months", title: "No heavy lifting", points: ["Avoid lifting anything heavy while your tummy heals.", "Your team may advise a support belt or garment."] },
        { id: "core", when: "Once you have recovered", title: "Build your core", points: ["Ask your healthcare team about abdominal exercises.", "Introduce exercise slowly, with their agreement."] },
        { id: "fit", when: "As you get stronger", title: "Aim for 30 minutes", points: ["Build up to 30 minutes of moderate exercise on at least five days a week.", "Check with your team before anything vigorous."] },
      ],
    },
    sources: [MAC_RECOVERING, BCUK_AFTER_SURGERY, CRUK_AFTER_SURGERY, BCUK_ACTIVITY, CRUK_BOWEL_CHANGES, BCUK_LATE, NHS_COLOSTOMY_RECOVERY, NHS_ILEOSTOMY_RECOVERY, CUK_HERNIA, CUK_EXERCISE],
    quiz: {
      question: "When should you ask about exercises for your core muscles?",
      options: [{ text: "Once you have recovered from surgery", right: true }, { text: "The day after surgery" }, { text: "Never, as they cause hernias" }],
      why: "Once you have recovered from surgery, ask your healthcare team about abdominal exercises to build up your core muscles.",
    },
  },
  {
    id: "bwc-out-and-about",
    kicker: "Daily life",
    question: "How can I feel confident going out and travelling?",
    hook: "Know where the toilets are, carry a small kit, and get a key and a card. Planning ahead makes going out much easier.",
    short: "If your bowels are unpredictable or you have a stoma, planning ahead can help you feel more confident going out. A Radar key opens locked accessible toilets across the UK, a 'Just Can't Wait' card can help you get to a toilet quickly, and a small bag of supplies helps if an accident happens. Travelling is possible too, with a travel certificate and spare supplies in your hand luggage.",
    sections: [
      {
        heading: "Planning ahead",
        paragraphs: [
          "If your bowel movements are not predictable, you may feel worried about going out, especially to somewhere new. Planning ahead so that you are prepared can help you feel more confident.",
          "Know where the toilets are in the place you are going; the Great British Toilet Map and apps such as Flush Toilet Finder can help. If you have a new stoma, Colostomy UK suggests staying local to begin with.",
        ],
      },
      {
        heading: "Keys and cards",
        paragraphs: [
          "A Radar key opens locked accessible toilets around the country, as part of the National Key Scheme. Colostomy UK says it gives access to over 9,000 accessible toilets, and you can get one from organisations such as Disability Rights UK and the Bladder and Bowel Community.",
          "A 'Just Can't Wait' card states that you have a medical condition that needs urgent access to a toilet. Macmillan also has a toilet card, which you can get by calling its support line free on 0808 808 0000.",
        ],
      },
      {
        heading: "A bag of supplies",
        paragraphs: [
          "Pack a bag with things you may need, such as wet wipes, barrier cream, pads and spare underwear, a change of clothing and a sealable bag. Having these with you can give you confidence, even if you never need to use them.",
          "With a stoma, make sure your bag is secure and empty before going out, and carry a few bags, wipes and disposal bags. Colostomy UK's volunteers say no one will know you have a stoma unless you tell them.",
        ],
      },
      {
        heading: "Travelling",
        paragraphs: [
          "Having a stoma should not stop you travelling at home or abroad. Take plenty of supplies, and always carry some spare stoma supplies in your hand luggage in case of baggage delays.",
          "A travel certificate tells airport staff about your stoma and the supplies you carry; ask your stoma nurse for one or download one from Colostomy UK. Most airports have a Special Assistance team, and a sunflower lanyard may help staff see that you need assistance.",
        ],
      },
      {
        heading: "Insurance and going abroad",
        paragraphs: [
          "Travel insurance can be harder to get after a diagnosis, and a letter from your hospital team can help. Tell your insurer about all your medical conditions and answer their questions accurately.",
          "Your healthcare team can give you a letter listing the medicines you take and what they are for, which helps if you travel abroad. In some countries, a Global Health Insurance Card may reduce the cost of some treatment.",
        ],
      },
    ],
    helps: [
      "Get a Radar key for locked accessible toilets.",
      "Carry a 'Just Can't Wait' card or a Macmillan toilet card.",
      "Pack a small bag with wet wipes, pads, spare underwear and a sealable bag.",
      "Use a toilet finder app or map before you go somewhere new.",
      "Ask your stoma care nurse for a travel certificate before you fly.",
      "Contact venues, or your airport's Special Assistance team, in advance.",
    ],
    tryThisWeek: [
      "Get a Radar key.",
      "Pack a small going-out bag.",
      "Find the toilets before you go.",
    ],
    ask: "Could you give me a travel certificate and a letter listing my medicines?",
    interactive: {
      kind: "scenarios",
      title: "Out and about",
      scenarios: [
        {
          id: "locked",
          situation: "The only accessible toilet nearby is locked.",
          options: [{ text: "Use a Radar key", best: true }, { text: "Head straight home" }],
          why: "A Radar key opens locked accessible toilets around the country, as part of the National Key Scheme.",
        },
        {
          id: "queue",
          situation: "There is a long queue for the toilet and you cannot wait.",
          options: [{ text: "Show a 'Just Can't Wait' card", best: true }, { text: "Join the queue and hope" }],
          why: "A 'Just Can't Wait' card states that you have a medical condition that needs urgent access to a toilet.",
        },
        {
          id: "flight",
          situation: "You are flying abroad with a stoma.",
          options: [{ text: "Carry spare supplies in your hand luggage", best: true }, { text: "Pack all your supplies in the suitcase" }],
          why: "Always carry some spare stoma supplies in your hand luggage in case of baggage delays.",
        },
        {
          id: "looks",
          situation: "Someone looks puzzled as you use an accessible toilet.",
          options: [{ text: "Remember you are entitled to use it", best: true }, { text: "Stop using accessible toilets" }],
          why: "You have a hidden condition, and you are entitled to use accessible toilets. Not all disabilities are visible.",
        },
      ],
    },
    sources: [MAC_BOWEL_CHANGES, CRUK_BOWEL_CHANGES, BCUK_WORK, CUK_FIRSTS, CUK_RADAR, BCUK_STOMAS, CUK_TRAVEL],
    quiz: {
      question: "Where should spare stoma supplies go when you fly?",
      options: [{ text: "In your hand luggage", right: true }, { text: "In your checked suitcase" }, { text: "Leave them at home" }],
      why: "Always carry some spare stoma supplies in your hand luggage in case of baggage delays.",
    },
  },
  {
    id: "bwc-work",
    kicker: "Work",
    question: "How do I go back to work after bowel cancer?",
    hook: "The law protects you from the day you are diagnosed. A phased return, a desk near the toilets and flexible hours are all reasonable to ask for.",
    short: "From the day you are diagnosed with cancer, you meet the disability definition under the Equality Act 2010, and your employer has to make reasonable adjustments. A phased return, extra breaks, time off for appointments or a desk nearer the toilets can all help. If you have a stoma, you should be able to go back when you feel well enough and comfortable looking after it.",
    sections: [
      {
        heading: "Your rights",
        paragraphs: [
          "You automatically meet the disability definition under the Equality Act 2010 from the day you are diagnosed with cancer. In Northern Ireland, you are protected by the Disability Discrimination Act 1995.",
          "This means employers must not treat you less favourably for any reasons related to your cancer. This includes recruitment, promotion, training, pay and benefits.",
        ],
      },
      {
        heading: "When to go back",
        paragraphs: [
          "If you have a stoma, you should be able to go back to work when you feel well enough and comfortable looking after it. Speak to your employer if your work involves heavy lifting or lots of manual work.",
          "You may want to ask if you can start with a few hours or days and gradually build them up when you feel able. This is sometimes called a phased return.",
        ],
      },
      {
        heading: "Adjustments that help",
        paragraphs: [
          "Your employer has to make reasonable adjustments, which are changes to help you carry on working or go back after time off. These can include working different hours or part-time, time off for appointments, or changing your role to remove difficult tasks.",
          "Practical changes might include a desk nearer the toilets, a parking space near the entrance, extra breaks if you feel tired, flexible hours to avoid a stressful commute, or a quiet space to rest.",
          "Your employer can also refer you to an occupational health adviser or the HR team, who will keep your information confidential if you ask them to.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition. It could give you a grant for things like specialist equipment, or the cost of travelling to work if you cannot use public transport.",
          "An Access to Work grant does not affect other benefits, and you do not have to pay it back. It does not pay for reasonable adjustments, which your employer has to make.",
        ],
      },
      {
        heading: "Confidence at work",
        paragraphs: [
          "Returning to work can feel daunting if you are still getting used to a stoma. If you feel able, talk to your line manager or a colleague you trust.",
          "Carrying a bag with spare pads, underwear and wipes can give you confidence, even if you never need them. If you think you have been treated unfairly, speak to your employer first, then ACAS, Citizens Advice or your union.",
        ],
      },
    ],
    helps: [
      "Ask about a phased return, starting with a few hours or days.",
      "Ask for a desk nearer the toilets, extra breaks or flexible hours.",
      "If your organisation has an occupational health department, ask an adviser how they can support you.",
      "Check whether you are eligible for an Access to Work grant.",
      "Speak to your employer if your work involves heavy lifting or lots of manual work.",
      "If you are treated unfairly, speak to your employer, then ACAS, Citizens Advice or your union.",
    ],
    tryThisWeek: [
      "Ask about a phased return.",
      "List the adjustments you need.",
      "Check Access to Work eligibility.",
    ],
    ask: "When do you think I will be well enough to go back to work, and is there anything I should avoid?",
    interactive: {
      kind: "scenarios",
      title: "Back at work",
      scenarios: [
        {
          id: "phased",
          situation: "You feel ready to go back, but not full time.",
          options: [{ text: "Ask for a phased return", best: true }, { text: "Go straight back full time" }],
          why: "You may want to ask if you can start with a few hours or days and gradually build them up when you feel able.",
        },
        {
          id: "desk",
          situation: "Your desk is a long way from the toilets.",
          options: [{ text: "Ask to move nearer the toilets", best: true }, { text: "Drink less during the day" }],
          why: "Practical changes might include a desk nearer the toilets, extra breaks if you feel tired, or flexible hours.",
        },
        {
          id: "lifting",
          situation: "Your job involves a lot of heavy lifting.",
          options: [{ text: "Speak to your employer first", best: true }, { text: "Carry on as before" }],
          why: "Speak to your employer if your work involves heavy lifting or lots of manual work.",
        },
        {
          id: "unfair",
          situation: "You feel you have been treated unfairly.",
          options: [{ text: "Speak to your employer, then get advice", best: true }, { text: "Say nothing" }],
          why: "If you think you have been treated unfairly, speak to your employer first, then ACAS, Citizens Advice or your union.",
        },
      ],
    },
    sources: [GOV_DISABILITY, BCUK_WORK, NHS_COLOSTOMY_RECOVERY, CRUK_STOMA, GOV_ADJUSTMENTS, GOV_ATW, BCUK_STOMAS, CUK_WORK],
    quiz: {
      question: "When does the Equality Act 2010 start to protect someone with cancer?",
      options: [{ text: "From the day they are diagnosed", right: true }, { text: "After 12 months" }, { text: "Only once treatment ends" }],
      why: "You automatically meet the disability definition under the Equality Act 2010 from the day you are diagnosed with cancer.",
    },
  },
  {
    id: "bwc-relationships",
    kicker: "Relationships",
    question: "How might bowel cancer affect sex, intimacy and how I feel about my body?",
    hook: "Scars, a stoma, tiredness and nerve changes can all affect sex. Your team is used to these questions, and there is help.",
    short: "Bowel cancer treatment can affect how you feel about your body, your relationships and your sex life. Surgery and radiotherapy can cause erection problems or vaginal dryness and narrowing, and tiredness can lower interest for a while. There are treatments and practical tips that help, and your doctor or nurse is used to talking about these things.",
    sections: [
      {
        heading: "Body image",
        paragraphs: [
          "You may feel sad, angry or worried about changes to your body, such as a scar or a stoma. People of any age or gender can feel differently about their body with or after cancer.",
          "Talking about how you feel can help, with someone close to you or your specialist nurse. Spending time with people who make you feel good about yourself can boost your confidence.",
        ],
      },
      {
        heading: "Sex after surgery",
        paragraphs: [
          "Cancer Research UK says not to have sex for at least 6 weeks after major surgery for bowel cancer. You may feel too tired during treatment and for a time afterwards, and this often gradually improves.",
          "Surgery to the bowel or rectum can affect the nerves to the sex organs. Some men have problems getting or keeping an erection, and tablets, injections, vacuum pumps and implants can help; the sooner treatment starts, the more effective it is.",
          "Surgery and radiotherapy can make the vagina narrower, drier or less stretchy. Lubricants and trying different positions can help, and dilators can help to reduce the risk of narrowing.",
        ],
      },
      {
        heading: "With a stoma",
        paragraphs: [
          "You may want to get used to your stoma before having sex. Emptying the bag first, and using a support band or underwear designed for a stoma, can help you feel less anxious about leaks.",
          "Never do anything sexual that directly involves your stoma, as this is very dangerous and can lead to infection or permanent damage.",
        ],
      },
      {
        heading: "Talking about it",
        paragraphs: [
          "If you have a partner, talking about your feelings can help; they may be anxious about hurting you too. If you are single, telling a new partner about your stoma before having sex can avoid awkwardness.",
          "Your doctor or nurse is used to talking about these issues and can refer you to a sex therapist or counsellor. Colostomy UK has volunteers who will talk in confidence on 0800 328 4257.",
        ],
      },
      {
        heading: "Menopause and fertility",
        paragraphs: [
          "Some chemotherapy and radiotherapy can bring on an early menopause, which may be temporary or permanent and may lower your sex drive. Your doctor or nurse may prescribe HRT to help with the symptoms.",
          "Use contraception if there is a risk that you or your partner could become pregnant. Some treatments affect fertility, and your healthcare team should discuss this with you.",
        ],
      },
    ],
    helps: [
      "Talk about how you feel with someone close to you or your specialist nurse.",
      "Tell your doctor as soon as possible about erection problems, as treatment works better the sooner it starts.",
      "Try lubricants and different positions if sex is uncomfortable.",
      "Empty your stoma bag before sex, and consider a support band or stoma underwear.",
      "Ask your GP or healthcare team to refer you to a psychosexual therapist if you need help with sexual problems.",
    ],
    tryThisWeek: [
      "Talk to someone close about it.",
      "Mention erection problems early.",
      "Try a lubricant.",
    ],
    ask: "How might my treatment affect my sex life, and could you refer me to a specialist if I need help?",
    interactive: {
      kind: "flip-cards",
      title: "What can help, card by card",
      intro: "Turn each card to see what the sources say can help.",
      cards: [
        { id: "erections", front: "Erection problems", when: "After surgery or radiotherapy to the rectum", back: "Tablets, injections, pellets, vacuum pumps and implants can help. Talk to your doctor early." },
        { id: "vagina", front: "Vaginal dryness or narrowing", when: "After surgery or pelvic radiotherapy", back: "Lubricants and different positions help. Dilators can help to reduce the risk of narrowing." },
        { id: "stoma", front: "Sex with a stoma", when: "When you feel ready", back: "Empty the bag first. Support bands and stoma underwear can help you feel more confident." },
        { id: "menopause", front: "Early menopause", when: "After some chemotherapy or radiotherapy", back: "May be temporary or permanent. HRT may help with the symptoms." },
        { id: "therapy", front: "Psychosexual therapy", when: "Whether or not you have a partner", back: "Helps you understand and come to terms with sexual problems. Your GP or team can refer you." },
      ],
    },
    sources: [BCUK_BODY_SEX, MAC_SEX, CRUK_SEX, CUK_LOVE],
    quiz: {
      question: "What do the sources say about a stoma and sex?",
      options: [{ text: "Never do anything sexual that involves the stoma", right: true }, { text: "Sex is never possible with a stoma" }, { text: "A special bag is always needed" }],
      why: "Never do anything sexual that directly involves your stoma, as this is very dangerous and can lead to infection or permanent damage.",
    },
  },
  {
    id: "bwc-mood",
    kicker: "Feelings",
    question: "Why do I feel low now treatment has ended, and what helps?",
    hook: "Appointments thin out just as the feelings catch up. It is common, it is natural, and support is there, at any hour.",
    short: "When treatment finishes, many people have lots of different emotions, and appointments becoming less frequent can leave you feeling less supported. Emotional recovery often takes longer than people expect. Talking, staying active, good sleep habits and professional support all help. If you ever feel you cannot keep yourself safe, call 999, and you can call Samaritans free on 116 123 at any time.",
    sections: [
      {
        heading: "Why now",
        paragraphs: [
          "When you finish treatment you may have lots of different emotions. You may have been putting all your effort into coping with treatment, and now you have the chance to look back at what you have been through.",
          "At the same time, your hospital appointments may become less frequent, which might mean you feel less supported. Emotional recovery often takes longer than people expect, with some good days and some that are a struggle.",
        ],
      },
      {
        heading: "What you might feel",
        paragraphs: [
          "Worry and tiredness can leave you feeling more emotional or sensitive than before. You may feel withdrawn, fearful, irritable or frustrated, or worry about the cancer coming back. There is no right or wrong way to feel.",
          "Some people feel under pressure to stay positive and avoid appearing low. Try not to put too much pressure on yourself.",
        ],
      },
      {
        heading: "When it is more than a low patch",
        paragraphs: [
          "Depression is more than feeling unhappy for a few days: you feel persistently sad for weeks or months. Signs include a low mood most of the time, not getting pleasure from most things, feeling hopeless, lacking energy, and disturbed sleep.",
          "Depression is a real illness, not a sign of weakness, and with the right treatment and support most people make a full recovery. If you are feeling like this, speak to your GP or healthcare team.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Talk to people you are close to, be kind to yourself, keep to a healthy diet, stay as active as you can, and find ways to relax, such as mindfulness, reading or going for walks. A routine of regular sleep and wake times helps too.",
          "Your GP or specialist nurse can refer you to a counsellor or clinical psychologist. In England, if you are registered with a GP, in most areas you can refer yourself to NHS talking therapies for low mood and worry.",
          "Other people who have had cancer can be a great support, through an online forum or a local support group. Macmillan has a free helpline, open every day from 8am to 8pm, on 0808 808 0000.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, get help from NHS 111 online or call 111 and select the mental health option. Samaritans are there to listen at any time of the day or night, free on 116 123.",
          "You can also text the word 'Shout' to 85258 to talk to a trained volunteer. If you or someone else is in danger, or you do not feel you can keep yourself safe, call 999 or go to A&E. You will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Tell people close to you how you feel and how they can help.",
      "Stay as active as you can, and find ways to help you relax.",
      "Keep regular sleep and wake times, and avoid eating a lot, smoking or drinking alcohol before you sleep.",
      "Ask your GP or specialist nurse about counselling, or refer yourself to NHS talking therapies.",
      "Call Samaritans free on 116 123, day or night, or text 'Shout' to 85258.",
      "Call 999 or go to A&E if you do not feel you can keep yourself safe.",
    ],
    tryThisWeek: [
      "Tell someone close how you feel.",
      "Keep regular sleep and wake times.",
      "Ask about talking therapies.",
    ],
    ask: "I am finding things hard since treatment ended: could you refer me for emotional support?",
    interactive: {
      kind: "signs",
      title: "How you have been feeling",
      intro: "Tick any that have lasted for weeks. Sharing them can help your GP or healthcare team find the right support.",
      signs: ["Low or sad most of the time", "Little pleasure in things I used to enjoy", "Feeling hopeless", "Worrying a lot about the cancer coming back", "Feeling tense for a long time", "Lacking energy or motivation", "Sleeping badly", "Feeling irritable or withdrawn"],
      after: "Speak to your GP or healthcare team about support. For urgent help, call 111 and select the mental health option, or call Samaritans free on 116 123. In an emergency, call 999.",
      copyHeading: "How I have been feeling",
    },
    sources: [BCUK_FEELINGS, BCUK_AFTER_TREATMENT, BCUK_ANXIETY, NHS_DEPRESSION, NHS_TALKING, NHS_BC_TESTS, NHS_EMM_URGENT, SAMARITANS, SHOUT, NHS_URGENT_MH],
    quiz: {
      question: "In England, how can you get NHS talking therapies for low mood?",
      options: [{ text: "Refer yourself, if you are registered with a GP", right: true }, { text: "Only through your surgeon" }, { text: "Only after your follow-up ends" }],
      why: "In England, if you are registered with a GP, in most areas you can refer yourself to NHS talking therapies for low mood and worry.",
    },
  },
  {
    id: "bwc-family",
    kicker: "Family",
    question: "Should my family be checked for bowel cancer?",
    hook: "Most bowel cancer does not run in families. A few gene changes do, and tests on your tumour help find them.",
    short: "In most cases, bowel cancer is not passed down through families. Around 5 to 10% of bowel cancers are thought to be caused by a change in a known gene, such as Lynch syndrome. If you have an inherited condition, your relatives can be offered testing and regular screening; NHS bowel screening is also offered every 2 years from the age of 50 in most of the UK.",
    sections: [
      {
        heading: "Usually not inherited",
        paragraphs: [
          "If a family member has bowel cancer, you might worry about the chance of others getting it. But bowel cancer is common, and in most cases it is not passed down through the family.",
          "Around 5 to 10% of bowel cancers are thought to be caused by a change in a known gene, which can be passed down. These conditions include Lynch syndrome and familial adenomatous polyposis (FAP), and people with them are more likely to get bowel cancer, and at a younger age.",
        ],
      },
      {
        heading: "Lynch syndrome",
        paragraphs: [
          "Lynch syndrome is linked to around 1 in 30 cases of bowel cancer. All patients diagnosed with bowel cancer should be offered screening tests on their tumour, and if these suggest Lynch syndrome, you are referred to clinical genetics.",
          "If you decide to go ahead, genetic testing is a simple blood or saliva test. If you have Lynch syndrome, there is a 1 in 2 chance that your children, full siblings and parents have it too.",
        ],
      },
      {
        heading: "What it means for relatives",
        paragraphs: [
          "If you have an inherited condition, family members may be offered testing to see if they carry the same gene change, and regular screening if they do. Relatives with a 1 in 2 chance can still have regular screening if they do not want a genetic test.",
          "People with Lynch syndrome are offered a colonoscopy every two years, from the age of 25 or 35 depending on the gene change, up to 75. In England, the NHS Bowel Cancer Screening Programme manages this.",
        ],
      },
      {
        heading: "When relatives should see a GP",
        paragraphs: [
          "Relatives should tell their GP if a close relative, meaning a parent, sibling or child, was diagnosed with bowel cancer before the age of 50. They should also tell their GP about two or more relatives diagnosed at any age, or a relative with a known inherited condition such as Lynch syndrome.",
          "A GP can refer someone with a strong family history to a genetics clinic, which works out the likely risk and can arrange regular screening if it is needed.",
        ],
      },
      {
        heading: "Screening for everyone else",
        paragraphs: [
          "NHS bowel cancer screening is a home test that looks for blood in a sample of poo. It is offered every 2 years to people aged 50 to 74 in England, Scotland and Wales, and 60 to 74 in Northern Ireland; in England, people aged 75 or over can ask for it by calling 0800 707 6060.",
          "Screening does not stop you getting bowel cancer, but it is the best way to find cancer at an early stage. Anyone with symptoms should see their GP rather than wait for a screening test.",
        ],
      },
    ],
    helps: [
      "Ask your team whether your tumour was tested for Lynch syndrome, and write down the result.",
      "If you have not been tested, ask to be referred to clinical genetics, and bring what you know about family members' cancers and their ages at diagnosis.",
      "Ask your team who in your family you need to tell, and whether they need testing.",
      "Encourage relatives to tell their GP about a close relative diagnosed before 50, or two or more relatives with bowel cancer.",
      "Relatives with symptoms should see their GP and not wait for a screening test.",
    ],
    tryThisWeek: [
      "Ask if your tumour was tested.",
      "Note family cancers and ages.",
      "Ask who in your family to tell.",
    ],
    ask: "Was my tumour tested for Lynch syndrome, and should my family be offered genetic testing or screening?",
    interactive: {
      kind: "risk-check",
      title: "Is there a family link?",
      intro: "Tick any that apply to your family. Some are worth telling a GP about, and a few things can be changed.",
      items: [
        { id: "young", label: "A close relative diagnosed before 50", note: "Tell the GP if a parent, sibling or child was diagnosed with bowel cancer before the age of 50.", changeable: false },
        { id: "two", label: "Two or more relatives with it", note: "Two or more relatives diagnosed with bowel cancer at any age is worth telling the GP about.", changeable: false },
        { id: "inherited", label: "A relative with Lynch syndrome or FAP", note: "Relatives may be offered genetic testing, and regular screening if they carry the gene change.", changeable: false },
        { id: "age", label: "Being over 50", note: "You may be more likely to get bowel cancer if you are over 50.", changeable: false },
        { id: "smoking", label: "Smoking", note: "Quitting smoking is one of the things that can lower your chance of getting bowel cancer.", changeable: true },
        { id: "meat", label: "Lots of red and processed meat", note: "Eating less red and processed meat can lower your chance of getting bowel cancer.", changeable: true },
      ],
    },
    sources: [BCUK_FAMILY, BCUK_LYNCH, CRUK_HIGH_RISK, NHS_SCREENING, BCUK_SCREENING, NHS_BC_CAUSES],
    quiz: {
      question: "Is most bowel cancer inherited?",
      options: [{ text: "No, in most cases it is not passed down", right: true }, { text: "Yes, it always runs in families" }, { text: "Only in people over 75" }],
      why: "Bowel cancer is common, and in most cases it is not passed down through the family.",
    },
  },
];
