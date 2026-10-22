import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Penile cancer page's pieces (content/library-conditions/cancer-more-2.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Macmillan
// Cancer Support, Cancer Research UK and Orchid (the male cancer charity), with the government's Access to
// Work and disability rights pages and Samaritans for the work and mood answers. The answers describe
// treatment, recovery and living with after-effects. There are no survival or life-expectancy figures, and
// nothing here is a prediction for one person. Intimate topics are written plainly and kindly. General
// information only; it never replaces what a person's own specialist team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/penile-cancer/${path}` });
const orchid = (label: string, path: string): LearnSource => ({ label: `Orchid: ${label}`, url: `https://orchid-cancer.org.uk/${path}` });

const NHS_TREAT = nhs("Treatment for penile cancer", "conditions/penile-cancer/treatment/");
const NHS_TESTS = nhs("Tests and next steps for penile cancer", "conditions/penile-cancer/tests-and-next-steps/");
const NHS_HELP = nhs("Help and support for penile cancer", "conditions/penile-cancer/help-and-support/");
const NHS_CAUSES = nhs("Causes of penile cancer", "conditions/penile-cancer/causes/");
const NHS_HPV_VACCINE = nhs("HPV vaccine", "vaccinations/hpv-vaccine/");
const NHS_LYMPHOEDEMA = nhs("Lymphoedema", "conditions/lymphoedema/");
const NHS_DEPRESSION = nhs("Depression in adults", "mental-health/conditions/depression-in-adults/overview/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const MAC_PENILE = mac("Penile cancer", "penile-cancer");
const MAC_TREAT = mac("Treatment for penile cancer", "penile-cancer/treatment-for-penile-cancer");
const MAC_SURGERY = mac("Surgery for penile cancer", "treatments-and-drugs/surgery-for-penile-cancer");
const MAC_STAGING = mac("Staging and grading of penile cancer", "penile-cancer/staging-and-grading-of-penile-cancer");
const MAC_CAUSES = mac("Causes and risk factors of penile cancer", "penile-cancer/causes-and-risk-factors-of-penile-cancer");
const MAC_HPV = mac("Human papilloma virus (HPV)", "worried-about-cancer/causes-and-risk-factors/hpv");
const MAC_LYMPHOEDEMA = mac("Lymphoedema", "impacts-of-cancer/lymphoedema");
const MAC_BODY = mac("Changes to your appearance and body image", "impacts-of-cancer/changes-to-your-appearance-and-body-image");
const MAC_TOILETS = mac("Using public toilets", "bladder-cancer/using-public-toilets");
const MAC_FINISHING = mac("Finishing cancer treatment", "after-treatment/finishing-treatment");
const MAC_ED = mac("Erection problems, sexual well-being and cancer", "treatment/coping-with-treatment/your-sex-life/erection-problems-sexual-well-being");
const MAC_WORK = mac("Making decisions about work after treatment", "after-treatment/making-decisions-about-work-after-treatment");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");
const MAC_EMOTIONS = mac("Cancer and your emotions", "treatment/coping-with-treatment/cancer-and-your-emotions");

const CRUK_OPTIONS = cruk("Treatment options for penile cancer", "treatment/treatment-options");
const CRUK_TYPES_SURGERY = cruk("Types of surgery for penile cancer", "treatment/surgery/types-surgery");
const CRUK_AFTER_SURGERY = cruk("After penile cancer surgery", "treatment/surgery/after-surgery");
const CRUK_PROBLEMS = cruk("Problems after surgery for penile cancer", "treatment/surgery/problems-after-surgery");
const CRUK_RT_EXTERNAL = cruk("External radiotherapy for penile cancer", "treatment/radiotherapy/external-radiotherapy-treatment");
const CRUK_RT_SIDE = cruk("Side effects of radiotherapy for penile cancer", "treatment/radiotherapy/side-effects-radiotherapy");
const CRUK_CHEMO = cruk("Chemotherapy for penile cancer", "treatment/chemotherapy-treatment");
const CRUK_OTHER = cruk("Other treatments for penile cancer", "treatment/other-treatments");
const CRUK_FOLLOW_UP = cruk("Follow up after penile cancer treatment", "treatment/follow-appointment");
const CRUK_COPING = cruk("Coping with penile cancer", "living-with/coping");
const CRUK_SEX = cruk("Your sex life and penile cancer", "living-with/sex-relationships");
const CRUK_BODY = cruk("Changes to how your body looks after penile cancer surgery", "living-with/changes-how-your-body-looks-after-surgery");
const CRUK_LYMPHOEDEMA = cruk("Swollen legs or genitals (lymphoedema) and penile cancer", "living-with/swelling-your-legs-lymphoedema");
const CRUK_TNM = cruk("TNM staging for penile cancer", "stages-types-grades/tnm-staging");
const CRUK_TYPES = cruk("Types and grades of penile cancer", "stages-types-grades/types-grades");
const CRUK_TESTS = cruk("Tests for penile cancer", "getting-diagnosed/tests-for-penile-cancer");

const ORCHID_SURGERY = orchid("Surgery for penile cancer", "surgery-for-penile-cancer/");
const ORCHID_EARLY = orchid("Treating pre-cancerous conditions of the penis", "treating-early-penile-cancer/");
const ORCHID_LYMPH_NODES = orchid("Lymph node dissection", "lymph-node-dissection/");
const ORCHID_LYMPHOEDEMA = orchid("Lymphoedema", "lymphoedema-and-penile-cancer/");
const ORCHID_URINARY = orchid("Urinary problems", "urinary-problems-2/");
const ORCHID_SEX = orchid("Sex and penile cancer", "sex-and-penile-cancer/");
const ORCHID_PSYCH = orchid("Psychological impact", "psychological-impact-2/");
const ORCHID_SUPPORT = orchid("Support services", "https-orchid-cancer-org-uk-penile-cancer-3/penile-cancer-support/support-services/");
const ORCHID_SYMPTOMS = orchid("Symptoms and risk factors", "symptoms-2/");
const ORCHID_RT_ADVANCED = orchid("Radiotherapy and chemotherapy for advanced penile cancer", "radiotherapy-and-chemotherapy-for-advanced-penile-cancer/");

const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work: get support if you have a disability or health condition", url: "https://www.gov.uk/access-to-work" };
const GOV_RIGHTS: LearnSource = { label: "GOV.UK: Disability rights: Employment", url: "https://www.gov.uk/rights-disabled-person/employment" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const penileAnswers: LearnArticle[] = [
  {
    id: "pen-what-you-had",
    kicker: "Your treatment",
    question: "What was each part of my treatment for?",
    hook: "Creams, laser, a small operation or a bigger one: each was chosen to remove the cancer while keeping as much of the penis as possible.",
    short: "Treatment for penile cancer depends on the size and type of cancer, where it is, whether it has spread, and your age and general health. Early cancer is often treated with creams or laser, and surgery is the main treatment for larger cancers, sometimes with chemotherapy or radiotherapy. Your surgeon tries to remove all the cancer while keeping as much of the penis as possible.",
    sections: [
      {
        heading: "Why your plan was yours",
        paragraphs: [
          "The treatment you need depends on the size and type of penile cancer, where it is, whether it has spread, and your age and general health. A team of doctors and other professionals, called a multidisciplinary team or MDT, discusses the best treatment and care for you.",
          "Penile cancer is treated at specialist hospitals or clinics, by doctors who are experts in this type of cancer. This means you may need to travel further away from your local hospital for treatment.",
        ],
      },
      {
        heading: "Creams, laser and freezing",
        paragraphs: [
          "If the cancer is only in the top layers of the skin, doctors might call it penile intraepithelial neoplasia (PeIN), or carcinoma in situ. The aim of treatment is to keep the penis looking and working normally.",
          "Treatment can include a chemotherapy cream called fluorouracil (5FU), an immunotherapy cream called imiquimod, laser treatment, which uses a strong beam of light, or cryotherapy, which uses freezing to kill cancer cells.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Surgery is the main treatment for larger cancers of the penis, and small early cancers can sometimes be treated with minor surgery. Your surgeon tries to remove all the cancer while keeping as much of the penis as possible.",
          "Operations range from removing the foreskin (circumcision) or the top layers of tissue on the head of the penis (glans resurfacing), to removing the cancer with a border of healthy tissue (wide local excision), the head of the penis (glansectomy), or part or all of the penis (penectomy). Some lymph nodes in the groin may be removed too.",
          "Removing part or all of the penis is only offered if no other treatment is possible. Reconstructive surgery may be possible if your penis needs to be removed.",
        ],
      },
      {
        heading: "Chemotherapy and radiotherapy",
        paragraphs: [
          "Chemotherapy uses medicines to kill cancer cells. You may have it with radiotherapy, before surgery to help make the cancer smaller, after surgery to kill any cancer cells that might be left behind, or if the cancer has spread.",
          "Radiotherapy uses high-energy rays of radiation to kill cancer cells. It may be used instead of surgery, after surgery if there is a risk that cancer cells are left in the groin, or to help with symptoms if the cancer has spread.",
        ],
      },
      {
        heading: "Asking about your own treatment",
        paragraphs: [
          "This cancer affects a deeply personal and private part of your body. For most men, it may help to understand exactly what is going to happen, and it is important to feel supported.",
          "The specialist team looking after you can answer any questions about your surgery and explain exactly what it means for you. You can ask your surgeon or specialist nurse for a booklet or printed web pages to read through at home.",
        ],
      },
    ],
    helps: [
      "Ask your specialist team to explain what your treatment means for you and what your options are.",
      "Ask your surgeon or specialist nurse for a booklet or printed pages you can read at home.",
      "Write down the questions you want to ask next time you go to the hospital.",
      "If you are worried about fertility or your sex life, talk with your doctor about it.",
      "Call the Macmillan Support Line on 0808 808 00 00, or the Cancer Research UK nurses on 0808 800 4040, if you want to talk things through.",
    ],
    tryThisWeek: [
      "Ask what your treatment meant for you.",
      "Ask for a booklet to read at home.",
      "Write down your questions.",
    ],
    ask: "Which treatments did I have, and what was each one for in my case?",
    interactive: {
      kind: "flip-cards",
      title: "Your treatments, card by card",
      intro: "Turn each card to see what each treatment was for.",
      cards: [
        { id: "creams", front: "Creams", when: "Cancer in the top layers of skin", back: "Fluorouracil (5FU) kills cancer cells in the skin; imiquimod helps the immune system kill them." },
        { id: "laser", front: "Laser or freezing", when: "Small or very early cancers", back: "A strong beam of light, or freezing, is used to kill the cancer cells." },
        { id: "minor", front: "Circumcision or resurfacing", when: "The foreskin or the surface of the glans", back: "Removes the foreskin, or the top layers of tissue on the head of the penis." },
        { id: "surgery", front: "Wider surgery", when: "The main treatment for larger cancers", back: "Removes the cancer with healthy tissue around it, the glans, or part or all of the penis." },
        { id: "chemo", front: "Chemotherapy", when: "Before or after surgery", back: "Medicines that kill cancer cells: to shrink the cancer, or kill any cells left behind." },
        { id: "radio", front: "Radiotherapy", when: "Instead of surgery, or after it", back: "High-energy rays that kill cancer cells, including in the groin if there is a risk." },
      ],
    },
    sources: [NHS_TREAT, MAC_TREAT, MAC_SURGERY, CRUK_OPTIONS, CRUK_TYPES_SURGERY, NHS_HELP],
    quiz: {
      question: "What does your surgeon try to do during penile cancer surgery?",
      options: [{ text: "Remove all the cancer while keeping as much of the penis as possible", right: true }, { text: "Always remove the whole penis" }, { text: "Only take a small sample" }],
      why: "Your surgeon tries to remove all the cancer while keeping as much of the penis as possible.",
    },
  },
  {
    id: "pen-stage",
    kicker: "Your results",
    question: "What do the stage and grade of my cancer mean?",
    hook: "T, N and M, low grade or high grade: the words on your report describe the cancer that was found, and helped your team plan treatment.",
    short: "The stage describes where the cancer is, how far it has grown into the penis, and whether it has spread. The grade describes how the cancer cells look under a microscope, which gives an idea of how quickly they might grow. Knowing both helps you and your specialist decide on the best treatment.",
    sections: [
      {
        heading: "Stage and grade",
        paragraphs: [
          "The stage describes where the cancer is, how far it has grown into the penis, and whether it has spread to other areas of the body. The grade describes how the cancer cells look under a microscope.",
          "Your tests and scans give some information about the stage, but sometimes your doctor may not be able to tell you the exact stage until you have surgery. Ask your doctor if you are not sure what your stage is and you want more information.",
        ],
      },
      {
        heading: "T: the tumour",
        paragraphs: [
          "Tis, or carcinoma in situ, means the cancer cells are only in the top layer of skin. Ta means the cancer looks like a wart, but is still only in the top layer of skin.",
          "T1 means the tumour has grown into the tissue just below the top layer of skin. T2 and T3 mean it has grown into the spongy tissue of the penis, and T4 means it has spread into nearby areas such as the scrotum.",
        ],
      },
      {
        heading: "N and M: lymph nodes and spread",
        paragraphs: [
          "N describes whether the cancer has spread to any lymph nodes. N0 means there is no cancer in the lymph nodes, N1 and N2 describe cancer in lymph nodes in the groin, and N3 includes spread to lymph nodes in the pelvis.",
          "M0 means the cancer has not spread to other parts of the body, and M1 means it has. Research shows the cancer usually spreads to the lymph nodes in the groin first, before the pelvis.",
          "You might see your stage written as cTNM, when it comes from examinations and scans, or pTNM, when it comes from tissue removed during an operation.",
        ],
      },
      {
        heading: "Grade",
        paragraphs: [
          "The grade gives an idea of how quickly the cancer might grow and how likely it is to spread. Cancer of the penis is graded from 1 to 4.",
          "Low-grade cancer, grade 1 and 2, has cells that look similar to normal cells and is likely to be slow-growing. High-grade cancer, grade 3 and 4, has cells that do not look like normal cells and is likely to grow more quickly.",
        ],
      },
      {
        heading: "Type",
        paragraphs: [
          "More than 95 out of 100 penile cancers are squamous cell cancers, which develop from the flat, skin-like cells that cover the surface of the penis. Rarer types include basal cell cancer, melanoma and sarcoma.",
          "Your team looks at where the cancer is, its stage, its type and its grade, along with your general health, to decide which treatment you need.",
        ],
      },
    ],
    helps: [
      "Ask your doctor to explain your TNM stage and grade if you are not sure what they mean.",
      "Ask your doctor which staging they have used, and why.",
      "Bring someone with you to results appointments for support.",
      "Ask your healthcare team to explain things again if you need them to.",
      "Call the Macmillan Support Line on 0808 808 00 00 if waiting for results feels worrying.",
    ],
    tryThisWeek: [
      "Ask about your stage and grade.",
      "Bring someone to results visits.",
      "Ask for things to be explained again.",
    ],
    ask: "What were my T, N and M stages and my grade, and how did they shape my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "Your report, card by card",
      intro: "Turn each card to see what each part of your stage and grade means.",
      cards: [
        { id: "tis", front: "Tis or Ta", when: "The top layer of skin only", back: "Cancer cells only in the top layer of skin. Ta looks like a wart." },
        { id: "t1", front: "T1", when: "Just below the top layer", back: "The tumour has grown into the tissue just below the top layer of skin." },
        { id: "t2", front: "T2, T3 or T4", when: "Deeper into the penis", back: "Grown into the spongy tissue of the penis, or into nearby areas such as the scrotum." },
        { id: "n", front: "N0 to N3", when: "The lymph nodes", back: "N0 means no cancer in the lymph nodes. N1 to N3 describe cancer in groin or pelvic nodes." },
        { id: "m", front: "M0 or M1", when: "Spread elsewhere", back: "M0 means it has not spread to other parts of the body. M1 means it has." },
        { id: "grade", front: "Grade 1 to 4", when: "How the cells look", back: "Low-grade cells look similar to normal cells. High-grade cells do not, and grow more quickly." },
      ],
    },
    sources: [MAC_STAGING, CRUK_TNM, CRUK_TYPES, CRUK_OPTIONS, NHS_TESTS, CRUK_COPING],
    quiz: {
      question: "What does the grade of a cancer describe?",
      options: [{ text: "How the cancer cells look under a microscope", right: true }, { text: "How big the scar will be" }, { text: "How long treatment will take" }],
      why: "The grade describes how the cancer cells look under a microscope.",
    },
  },
  {
    id: "pen-follow-up",
    kicker: "Follow-up",
    question: "What happens at follow-up, and when should I get in touch?",
    hook: "Check-ups every few months at first, then less often: and you never have to wait for one to report something new.",
    short: "After treatment you have regular check-ups at the hospital, with an examination and sometimes blood tests, x-rays or scans. They are often every 3 months for 2 years and then every 6 months for the next 3 years, becoming less frequent over time. Between appointments, contact your doctor or specialist nurse about any new symptoms or worries.",
    sections: [
      {
        heading: "Why you have check-ups",
        paragraphs: [
          "Follow-up appointments check how you are and whether you have any problems or worries. They also give you the chance to raise any concerns you have about your progress.",
          "Your doctor or nurse examines you at each appointment and asks how you are feeling, whether you have had any symptoms or side effects, and whether you are worried about anything. You might also have blood tests, x-rays, or a CT, MRI or ultrasound scan at some visits.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Your first check-up is usually 2 to 4 weeks after leaving hospital, and then every few months. The check-ups are often every 3 months for 2 years and then every 6 months for the next 3 years.",
          "Your team might keep in touch for up to 10 years, but your visits to the clinic will be much less frequent. The surgeon and the oncologist might share your follow-up, so you may see each of them at different times.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your doctor or specialist nurse if you have any concerns between appointments, or if you notice any new symptoms. You do not have to wait until your next visit.",
          "A clinical nurse specialist is your main point of contact during and after your treatment. Keep your team's contact details in your phone or somewhere safe.",
        ],
      },
      {
        heading: "Your treatment summary",
        paragraphs: [
          "At the end of your treatment, your cancer team may create a treatment summary. It describes the treatment you had, possible side effects, symptoms to look out for, follow-up appointments and tests, and contact details for your team.",
          "Your team will also send a copy to your GP. If you are not given a copy and would like one, talk to your cancer team.",
        ],
      },
      {
        heading: "When check-ups feel worrying",
        paragraphs: [
          "Many people find their check-ups quite worrying, as a hospital appointment can bring back anxiety about the cancer. It can help to tell someone close to you how you are feeling.",
          "You may get anxious between appointments, and this is natural. Support from family, friends or a support organisation may help, and you can call the Cancer Research UK nurses free on 0808 800 4040, Monday to Friday, 9am to 5pm.",
        ],
      },
    ],
    helps: [
      "Contact your doctor or specialist nurse about any new symptoms; you do not have to wait for your next visit.",
      "Keep your key worker's contact details in your phone or somewhere safe.",
      "Ask your team how often you will have check-ups, and for how long.",
      "Ask for a copy of your treatment summary if you are not given one.",
      "Tell someone close to you if check-ups make you anxious.",
      "Ask whether you can see a physiotherapist or counsellor through the outpatient clinic.",
    ],
    tryThisWeek: [
      "Save your team's contact details.",
      "Ask how often you will be seen.",
      "Ask for your treatment summary.",
    ],
    ask: "How often will I be seen, and who do I contact if I notice something between appointments?",
    interactive: {
      kind: "timeline",
      title: "Your check-ups over time",
      steps: [
        { id: "first", when: "2 to 4 weeks after hospital", title: "First check-up", points: ["Your first appointment is usually 2 to 4 weeks after you leave hospital."] },
        { id: "early", when: "First 2 years", title: "Often every 3 months", points: ["An examination at each visit.", "Sometimes blood tests, x-rays or scans."] },
        { id: "later", when: "Next 3 years", title: "Often every 6 months", points: ["Appointments gradually become less frequent."] },
        { id: "long", when: "Up to 10 years", title: "Keeping in touch", points: ["Your team might keep in touch for up to 10 years.", "Clinic visits will be much less frequent."] },
        { id: "any", when: "Any time between", title: "Report anything new", points: ["Contact your doctor or specialist nurse.", "You do not have to wait until your next visit."] },
      ],
    },
    sources: [CRUK_FOLLOW_UP, MAC_PENILE, MAC_FINISHING, NHS_TESTS],
    quiz: {
      question: "What should you do if you notice a new symptom between check-ups?",
      options: [{ text: "Contact your doctor or specialist nurse", right: true }, { text: "Wait for your next appointment" }, { text: "Ignore it unless it hurts" }],
      why: "Contact your doctor or specialist nurse if you have any concerns between appointments, or if you notice any new symptoms.",
    },
  },
  {
    id: "pen-hpv",
    kicker: "HPV",
    question: "What has HPV got to do with penile cancer, and what does it mean for my partner?",
    hook: "HPV is so common that most people have it at some point. It does not show who you have had sex with, and penile cancer cannot be passed on.",
    short: "Roughly half of all penile cancers are caused by certain types of human papillomavirus (HPV), a common virus spread through skin-to-skin contact of the genital area and sex. Most people affected by HPV will not get penile cancer, and penile cancer itself is not infectious. Having HPV is not a sign that a partner has had sex with someone outside the relationship.",
    sections: [
      {
        heading: "A very common virus",
        paragraphs: [
          "HPV is a group of common infections that affect the skin and the moist lining inside parts of the body. Most people will have it at some point in their life, and usually it does not cause any damage and there are no symptoms.",
          "There are more than 100 types of HPV. Most are not linked to cancer, but some high-risk types can increase the risk of certain cancers, including penile cancer.",
        ],
      },
      {
        heading: "How it is linked to penile cancer",
        paragraphs: [
          "Roughly half of all penile cancers are caused by certain types of HPV. Most people affected by HPV will not get penile cancer.",
          "Usually, the body's immune system gets rid of the virus. For some people it does not, and if the virus stays in the body for longer, it may cause damage to cells that can develop into cancer over a long time.",
        ],
      },
      {
        heading: "What it does and does not mean",
        paragraphs: [
          "Penile cancer itself is not infectious. You cannot catch cancer or pass it on to other people.",
          "It is not possible to know exactly how or when a person got HPV. Having HPV does not show who you have had sex with, and it is not a sign that partners have had sex with someone outside the relationship.",
          "Getting penile cancer does not mean that a person's lifestyle is to blame.",
        ],
      },
      {
        heading: "Your partner",
        paragraphs: [
          "If you have an HPV-related cancer, you may worry that a partner's health has been affected too. This is very unlikely: your partner has probably already been exposed to the virus, and their immune system is likely to have got rid of it.",
          "Changing your sex life is not likely to reduce your partner's risk. Partners should still take part in any screening they are offered, such as cervical screening for anyone who has a cervix.",
        ],
      },
      {
        heading: "Vaccination and lowering the risk",
        paragraphs: [
          "The HPV vaccine reduces the chances of getting HPV, and the NHS offers it to all children aged 12 to 13 and to people at higher risk from HPV. Vaccines cannot treat or get rid of HPV if you already have it.",
          "Using condoms may lower the chance of getting HPV, but it does not offer complete protection. Smoking makes the immune system weaker, and stopping smoking is one way to lower the chance of getting penile cancer.",
        ],
      },
    ],
    helps: [
      "Remember that penile cancer is not infectious and cannot be passed on to other people.",
      "Ask your GP, cancer doctor or nurse to explain anything about HPV you do not understand.",
      "Encourage a partner who has a cervix to keep taking part in cervical screening.",
      "Stop smoking if you smoke, as smoking makes the immune system weaker.",
      "Talk to someone you know well, or call Macmillan on 0808 808 00 00, if HPV leaves you feeling stressed, angry or embarrassed.",
    ],
    tryThisWeek: [
      "Remember it cannot be passed on.",
      "Ask your nurse your HPV questions.",
      "Talk to someone you trust.",
    ],
    ask: "Was my cancer linked to HPV, and is there anything my partner should do?",
    interactive: {
      kind: "scenarios",
      title: "HPV worries, answered",
      scenarios: [
        {
          id: "unfaithful",
          situation: "You wonder whether HPV means a partner was unfaithful.",
          options: [{ text: "No, HPV does not show this", best: true }, { text: "Yes, it must mean that" }],
          why: "Having HPV does not show who you have had sex with, and it is not a sign that partners have had sex with someone outside the relationship.",
        },
        {
          id: "pass-on",
          situation: "You worry you could pass the cancer on to your partner.",
          options: [{ text: "Penile cancer cannot be passed on", best: true }, { text: "Avoid all contact to be safe" }],
          why: "Penile cancer itself is not infectious. You cannot catch cancer or pass it on to other people.",
        },
        {
          id: "stop-sex",
          situation: "You think about stopping sex to protect your partner from HPV.",
          options: [{ text: "This is not likely to lower their risk", best: true }, { text: "Stop sex altogether" }],
          why: "Changing your sex life is not likely to reduce your partner's risk.",
        },
        {
          id: "screening",
          situation: "Your partner has a cervix and wonders whether screening still matters.",
          options: [{ text: "Keep going to cervical screening", best: true }, { text: "Stop, as it no longer matters" }],
          why: "Partners should still take part in any screening they are offered, such as cervical screening for anyone who has a cervix.",
        },
      ],
    },
    sources: [NHS_CAUSES, MAC_HPV, MAC_CAUSES, NHS_HPV_VACCINE, ORCHID_SYMPTOMS],
    quiz: {
      question: "Can penile cancer be passed on to a partner?",
      options: [{ text: "No, it is not infectious", right: true }, { text: "Yes, through sex" }, { text: "Yes, through kissing" }],
      why: "Penile cancer itself is not infectious. You cannot catch cancer or pass it on to other people.",
    },
  },
  {
    id: "pen-surgery-recovery",
    kicker: "After surgery",
    question: "What is recovery like after penile cancer surgery?",
    hook: "Swelling, dressings, a catheter and a few days of rest: knowing what each is for can make the first weeks less frightening.",
    short: "Recovery depends on the operation you had. After a circumcision you might go home the same day or the next, while after removing part or all of the penis you stay in hospital for up to 5 days. Swelling and some pain are normal at first, and your nurses explain how to care for your wound, catheter and any skin graft at home.",
    sections: [
      {
        heading: "In hospital",
        paragraphs: [
          "Your recovery depends on the type of operation you had. You may have a drip, a fine tube into the wound to drain away fluid, and a tube into your bladder (catheter) to drain urine, and it helps to know what each is for.",
          "It is normal to have pain for the first week or so. Tell your doctor or nurse as soon as you feel any pain, as painkillers work best when you take them regularly.",
        ],
      },
      {
        heading: "Dressings, grafts and stitches",
        paragraphs: [
          "Your nurse changes the dressings and cleans your wounds while you are in hospital, and before you go home they explain how to care for the wound. Stitches are usually dissolvable.",
          "If you had a skin graft, you may need bed rest for a day or so to give it the best chance of healing well. The dressings on the graft are usually left on for 7 to 10 days, and the area on your thigh where the skin was taken takes at least a couple of weeks to heal.",
          "Try not to rub or brush against the skin graft on your penis for the first couple of weeks. The graft may be a slightly different colour to the normal colour of your penis.",
        ],
      },
      {
        heading: "Swelling and going home",
        paragraphs: [
          "After a circumcision your penis will be slightly swollen and bruised for about a week. After a wide local excision, it may be swollen for a week to 10 days.",
          "After a circumcision you might go home the same day or the next day. If part or all of your penis was removed you stay in hospital for up to 5 days, and many people go home with their catheter in for a short time.",
          "If you live alone or think you will struggle to manage on your own, tell the nurses when you first go into hospital. This way they can plan any care you need at home.",
        ],
      },
      {
        heading: "Signs to act on",
        paragraphs: [
          "Tell your doctor or nurse if you have signs of infection, such as a high temperature, shivering, feeling generally unwell, swelling or redness around your wound, or a strong smell or liquid oozing from it.",
          "Let your doctor or nurse know if an area of your leg is swollen, hot, red or sore. If you are short of breath, have chest pain, cough up blood or feel dizzy at home, contact a doctor immediately, call 999 or go to your nearest A&E.",
        ],
      },
      {
        heading: "Getting back to normal",
        paragraphs: [
          "Most people feel weak and lack strength for some time after surgery. Tell your doctor or nurse if the weakness continues for more than a few weeks, as they can suggest things such as physiotherapy.",
          "After larger penile surgery, Orchid says you will need at least 4 weeks off work, and after a total penectomy to avoid strenuous activity such as heavy lifting for 4 to 6 weeks. After minor surgery, you should be able to return to work within a week, and it may take up to 3 months for the penis to fully heal.",
        ],
      },
    ],
    helps: [
      "Tell your nurse as soon as you feel pain, and take painkillers regularly as prescribed.",
      "Ask your nurse how to care for your wound, catheter and any skin graft before you go home.",
      "Do the leg and breathing exercises you were taught, and keep wearing anti-embolism stockings if you have been told to.",
      "Tell the nurses early if you live alone or think you will struggle at home.",
      "Report signs of infection, and get help immediately for signs of a blood clot.",
      "Avoid strenuous activity, such as heavy lifting, for as long as your team advises.",
    ],
    tryThisWeek: [
      "Take painkillers regularly.",
      "Keep up your leg exercises.",
      "Learn the signs of infection.",
    ],
    ask: "How should I care for my wound and catheter at home, and when can I go back to work?",
    interactive: {
      kind: "timeline",
      title: "The first weeks after surgery",
      steps: [
        { id: "ward", when: "First days", title: "In hospital", points: ["You may have a drip, a wound drain and a catheter.", "It is normal to have pain for the first week or so."] },
        { id: "rest", when: "A day or so", title: "Rest for a skin graft", points: ["Bed rest gives a skin graft the best chance of healing well."] },
        { id: "home", when: "Same day to 5 days", title: "Going home", points: ["The same or next day after a circumcision.", "Up to 5 days if part or all of the penis was removed."] },
        { id: "clinic", when: "7 to 10 days", title: "Dressings off", points: ["Graft dressings usually stay on for 7 to 10 days.", "They are removed when you come back to clinic."] },
        { id: "weeks", when: "4 to 6 weeks", title: "Take it steady", points: ["At least 4 weeks off work after larger surgery.", "No heavy lifting for 4 to 6 weeks after a total penectomy."] },
        { id: "healed", when: "Up to 3 months", title: "Fully healed", points: ["The penis may take up to 3 months to fully heal."] },
      ],
    },
    sources: [CRUK_AFTER_SURGERY, MAC_SURGERY, CRUK_PROBLEMS, ORCHID_SURGERY, CRUK_TYPES_SURGERY, ORCHID_EARLY],
    quiz: {
      question: "Which of these needs help immediately at home after surgery?",
      options: [{ text: "Sudden shortness of breath or chest pain", right: true }, { text: "Mild swelling in the first week" }, { text: "Feeling a little tired" }],
      why: "If you are short of breath, have chest pain, cough up blood or feel dizzy at home, contact a doctor immediately, call 999 or go to your nearest A&E.",
    },
  },
  {
    id: "pen-passing-urine",
    kicker: "Passing urine",
    question: "Why does my urine spray, and what can help?",
    hook: "Spraying, sitting down to pee, or a narrowing that makes it harder to go: each has practical answers, from a male funnel to a small operation.",
    short: "Surgery to the penis can change how you pass urine. After a glansectomy or partial penectomy the stream may spray, and sitting down or using a male funnel can help. After a total penectomy you pass urine through an opening between the anus and scrotum, sitting down, and you still have control. Tell your doctor straight away if passing urine becomes difficult.",
    sections: [
      {
        heading: "Why urine can spray",
        paragraphs: [
          "You might find you are spraying urine, rather than having a steady stream when you go. This might happen after a glansectomy or partial penectomy, due to pressure on the urethra.",
          "Surgery to the penis causes swelling and inflammation, which may affect the urethra. The spraying may settle as the penis heals, but it can sometimes be permanent.",
        ],
      },
      {
        heading: "What helps with spraying",
        paragraphs: [
          "Sitting down to pass urine can help. Your specialist nurse might suggest a male funnel, which helps direct the urine stream.",
          "Orchid says some plastic funnels are available on prescription in the UK. Some men find that passing urine in the bath or shower, while the penis heals, helps reduce anxiety and is more practical.",
        ],
      },
      {
        heading: "After a total penectomy",
        paragraphs: [
          "If the whole penis is removed, the surgeon forms an opening between the anus and the scrotum for you to pass urine through. You still have control over passing urine because the muscle that closes the bladder is further inside your body, but you sit down to pass urine.",
          "Sometimes it is not possible to redirect the urethra, and a tube goes into the bladder through the tummy instead. This is called a suprapubic catheter, and a bag attached to it collects the urine.",
        ],
      },
      {
        heading: "Narrowing and leaks",
        paragraphs: [
          "Surgery, and radiotherapy to the penis, can sometimes narrow the urethra and make passing urine difficult, and this might happen some time after treatment. Tell your doctor straight away if you have difficulty passing urine, as a small operation can stretch or widen the urethra.",
          "Leakage of urine is not a common problem after surgery unless you leaked urine before. If it happens, let your doctor know: medicines, muscle exercises or a small pad may help, and you can be referred to a special clinic.",
        ],
      },
      {
        heading: "Going out with confidence",
        paragraphs: [
          "Some people feel anxious about going out in public after surgery. Planning ahead and finding public toilets, getting a free Macmillan toilet card, and using disabled toilets can all help.",
          "Disabled toilets often have more privacy and space. The National Key Scheme offers access to over 9,000 locked disabled toilets in the UK.",
        ],
      },
    ],
    helps: [
      "Try sitting down to pass urine if your stream sprays.",
      "Ask your specialist nurse about a male funnel to help direct the stream.",
      "Tell your doctor straight away if passing urine becomes difficult.",
      "Let your doctor know about any leaking; medicines, exercises or a small pad may help.",
      "Get a free Macmillan toilet card, and plan where toilets are before you go somewhere new.",
      "Think about a key for locked disabled toilets through the National Key Scheme.",
    ],
    tryThisWeek: [
      "Try sitting down to pass urine.",
      "Ask your nurse about a funnel.",
      "Order a toilet card.",
    ],
    ask: "Is my spraying likely to settle, and could I have a male funnel on prescription?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "spray",
          situation: "Your urine stream sprays after a partial penectomy.",
          options: [{ text: "Try sitting down, and ask about a funnel", best: true }, { text: "Put up with it and say nothing" }],
          why: "Sitting down to pass urine can help. Your specialist nurse might suggest a male funnel, which helps direct the urine stream.",
        },
        {
          id: "harder",
          situation: "Months later, it is getting harder to pass urine.",
          options: [{ text: "Tell your doctor straight away", best: true }, { text: "Wait and see if it passes" }],
          why: "Tell your doctor straight away if you have difficulty passing urine, as a small operation can stretch or widen the urethra.",
        },
        {
          id: "day-out",
          situation: "You feel anxious about a day out somewhere new.",
          options: [{ text: "Plan ahead and carry a toilet card", best: true }, { text: "Stay at home instead" }],
          why: "Planning ahead and finding public toilets, getting a free Macmillan toilet card, and using disabled toilets can all help.",
        },
        {
          id: "leak",
          situation: "You notice a little urine leaking.",
          options: [{ text: "Let your doctor know", best: true }, { text: "Keep it to yourself" }],
          why: "If it happens, let your doctor know: medicines, muscle exercises or a small pad may help, and you can be referred to a special clinic.",
        },
      ],
    },
    sources: [CRUK_PROBLEMS, CRUK_TYPES_SURGERY, MAC_SURGERY, ORCHID_URINARY, CRUK_RT_SIDE, MAC_TOILETS, MAC_PENILE],
    quiz: {
      question: "After a total penectomy, can you still control passing urine?",
      options: [{ text: "Yes, though you sit down to pass urine", right: true }, { text: "No, it cannot be controlled" }, { text: "Only with a bag every time" }],
      why: "You still have control over passing urine because the muscle that closes the bladder is further inside your body, but you sit down to pass urine.",
    },
  },
  {
    id: "pen-lymph-nodes",
    kicker: "Lymph nodes",
    question: "What happens after lymph node surgery, and how do I lower the risk of swelling?",
    hook: "Removing groin lymph nodes can mean a drain for a while and a lifelong risk of swelling. Caring for your skin and acting early make a difference.",
    short: "If penile cancer has spread to the lymph nodes in the groin, you may have an operation to remove them. Afterwards there is a risk of swelling in one or both legs, the scrotum and the penis, called lymphoedema, which is higher if you also have radiotherapy to the groin. Lymphoedema is easier to control if it is caught early, so tell your doctor or specialist nurse about any swelling straight away.",
    sections: [
      {
        heading: "Checking and removing lymph nodes",
        paragraphs: [
          "A sentinel lymph node biopsy is a test to find the first lymph node or nodes that penile cancer may spread to. If there are no cancer cells in them, your doctor can avoid removing all the lymph nodes in the groin.",
          "If the cancer has spread to the lymph nodes in your groin, you may have an operation to remove them, called an inguinal lymph node dissection. It can be on one or both sides of the groin.",
        ],
      },
      {
        heading: "After the operation",
        paragraphs: [
          "A small plastic tube called a wound drain lets extra fluid drain away and helps the wound heal. It is usually removed after 2 weeks, but sometimes it needs to stay in place for up to 4 weeks.",
          "The dissolving stitches take 4 to 6 weeks to dissolve. Orchid advises avoiding strenuous activity for 4 to 6 weeks, and says a well-balanced, high-protein diet will help the wound heal.",
          "A lymphocele is a collection of lymph fluid in the groin, which is often small or goes away on its own. Your team will tell you how to care for your wound and who to contact if you have any problems.",
        ],
      },
      {
        heading: "Lymphoedema",
        paragraphs: [
          "Some people get swelling in one or both legs after radiotherapy or surgery to the lymph nodes in the groin and pelvis. Sometimes the swelling is in the lower tummy, the penis or the scrotum, and this is called lymphoedema.",
          "It is common to have some swelling around the genital area for a couple of weeks after surgery. If this continues, or you notice swelling in your legs or feet, tell your doctor or specialist nurse straight away, as lymphoedema is easier to control if it is caught early.",
          "The risk lasts for life after treatment to your lymph nodes, and it can come on years later. Lymphoedema cannot be cured, but it can usually be well managed with treatment such as compression, skin care, exercise and specialist massage.",
        ],
      },
      {
        heading: "Lowering your risk",
        paragraphs: [
          "Skin infections can trigger swelling, so protect your legs and feet: always wear shoes, wear long trousers for gardening, use insect repellent and avoid sunburn. Clean any cut, scratch or bite straight away with antiseptic, and cover it with a dressing.",
          "Orchid suggests using an electric razor rather than a wet shave for personal areas, avoiding tight socks or trousers, and moving your legs every so often rather than keeping them crossed for long periods. Supportive briefs, such as cycle shorts, may help reduce swelling of the scrotum.",
        ],
      },
      {
        heading: "Infection: act quickly",
        paragraphs: [
          "If an area becomes red, painful or swollen, see your doctor urgently, as you may need antibiotics. Cellulitis, a skin infection that often affects people with lymphoedema, can cause redness and heat in the skin, pain and more swelling, and a high temperature or feeling hot, cold or shivery.",
          "Swelling, aching and redness in a leg can also be symptoms of a blood clot. Tell your doctor or nurse straight away, and if you cannot speak to your doctor, call the NHS urgent advice number, 111.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or specialist nurse straight away about any swelling in your legs, feet, tummy or genitals.",
      "Ask to be referred to a lymphoedema specialist if swelling appears.",
      "Protect your legs and feet: wear shoes, use insect repellent and avoid sunburn.",
      "Clean cuts, scratches and bites straight away with antiseptic, and cover them.",
      "See your doctor urgently if an area becomes red, painful or swollen.",
      "Do the lymphoedema exercises your physiotherapist or nurse shows you, slowly and gently, and stop if they hurt.",
    ],
    tryThisWeek: [
      "Check your legs for swelling.",
      "Wear shoes and insect repellent.",
      "Clean any cut straight away.",
    ],
    ask: "Am I at risk of lymphoedema, and how do I get referred to a lymphoedema service if I need one?",
    interactive: {
      kind: "signs",
      title: "Swelling and infection signs",
      intro: "Tick any you have noticed. Swelling is easier to control if it is caught early.",
      signs: ["Swelling in a leg or foot", "Swelling of the scrotum, penis or lower tummy", "A heavy, tight or aching leg", "Clothes or shoes feeling tighter", "Skin that is red, hot or painful", "A high temperature, or feeling shivery", "Fluid leaking through the skin"],
      after: "Tell your doctor or specialist nurse straight away. See your doctor urgently if an area is red, painful or swollen. If you cannot speak to your doctor, call 111.",
      copyHeading: "Swelling changes I have noticed",
    },
    sources: [MAC_SURGERY, CRUK_TESTS, CRUK_PROBLEMS, CRUK_LYMPHOEDEMA, ORCHID_LYMPHOEDEMA, ORCHID_LYMPH_NODES, NHS_LYMPHOEDEMA, MAC_LYMPHOEDEMA],
    quiz: {
      question: "When is lymphoedema easiest to control?",
      options: [{ text: "When it is caught early", right: true }, { text: "Once it has been there a year" }, { text: "Only after more surgery" }],
      why: "If this continues, or you notice swelling in your legs or feet, tell your doctor or specialist nurse straight away, as lymphoedema is easier to control if it is caught early.",
    },
  },
  {
    id: "pen-other-treatments",
    kicker: "Other treatments",
    question: "What should I expect from creams, radiotherapy or chemotherapy?",
    hook: "Creams can make the skin sore for a while, radiotherapy can bring swelling and tiredness, and chemotherapy needs a phone number close to hand.",
    short: "Creams such as fluorouracil and imiquimod treat cancer in the top layers of skin, and can make it sore, red and inflamed for a while. Radiotherapy is usually given each weekday over 4 to 6 weeks and can cause sore skin, swelling and tiredness. During chemotherapy, contact your hospital advice line immediately if you have signs of infection.",
    sections: [
      {
        heading: "Creams, laser and freezing",
        paragraphs: [
          "Chemotherapy cream only kills cancer cells in the area of skin treated, and it does not treat deeper cancers. You put it on every day for several weeks, and you usually have your foreskin removed first.",
          "Your skin might become sore, red and inflamed while using the cream. Tell your doctor or nurse, who can give you other creams and painkillers; these effects should wear off within a couple of weeks after stopping, and you do not lose your hair.",
          "Laser therapy uses a powerful beam of light to burn away abnormal cells, and it may take 2 to 3 months for the penis to heal completely. Cryotherapy freezes the abnormal cells, leaving a blister and then a scab, which usually drops off after about 1 or 2 weeks.",
        ],
      },
      {
        heading: "Radiotherapy",
        paragraphs: [
          "External radiotherapy is usually given as an outpatient each weekday over 4 to 6 weeks. You might have a circumcision first, because radiotherapy may cause swelling and inflammation of the penis.",
          "Side effects tend to start a week after radiotherapy begins, and gradually get worse during treatment and for a couple of weeks after it ends. They can include tiredness, red or darker skin that feels sore, and a swollen penis, which goes down when you finish treatment.",
          "Wash or rinse the area with warm water, gently dry it with a clean towel, and wear loose clothing made of natural fibres such as cotton. Check with your radiographer if you are unsure about using a moisturiser.",
        ],
      },
      {
        heading: "Longer-term effects of radiotherapy",
        paragraphs: [
          "Not everyone has long-term side effects of radiotherapy. Radiotherapy to the penis can make the urethra narrower and make passing urine difficult; tell your doctor or nurse if this happens, as the urethra can be stretched or widened.",
          "If you notice any changes in the colour of your skin where you had treatment, tell your doctor straight away. Most men are able to have sex after radiotherapy.",
        ],
      },
      {
        heading: "Chemotherapy",
        paragraphs: [
          "Chemotherapy into the bloodstream is usually given at the cancer day clinic, with blood tests before each cycle to make sure it is safe. Common side effects include feeling sick, feeling very tired, hair loss and an increased risk of getting an infection.",
          "Contact your hospital advice line immediately if you have signs of infection, such as a temperature above 37 and a half degrees or below 36 degrees, or generally feeling unwell. Infections can make you very unwell very quickly.",
          "The nurse will give you telephone numbers to call if you have any problems at home. Let your doctors know if you take any supplements, as some could be harmful alongside chemotherapy.",
        ],
      },
      {
        heading: "If the cancer has spread",
        paragraphs: [
          "If penile cancer has spread, radiotherapy can shrink the cancer for a period of time and relieve symptoms, and chemotherapy may be used too. The aim is to slow down the growth and spread of the cancer and to help with symptoms.",
          "Finding out that cancer cannot be cured can be very hard news to take in. You will be referred to a symptom control or palliative care team, who help you manage symptoms, feel more comfortable, and help you and your loved ones get any other support you need.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or nurse if a cream makes your skin sore; other creams and painkillers can help.",
      "Tell your doctor or specialist nurse if imiquimod gives you shivers or flu-like symptoms.",
      "During radiotherapy, wash with warm water, dry gently and wear loose cotton clothing.",
      "Tell the radiotherapy staff about any skin changes or pain.",
      "During chemotherapy, contact your hospital advice line immediately if you have signs of infection.",
      "Tell your doctors about any supplements or herbal remedies you take.",
    ],
    tryThisWeek: [
      "Save your advice line number.",
      "Wear loose cotton clothing.",
      "Tell the team about supplements.",
    ],
    ask: "Which side effects should I report, and what is the number for my hospital advice line?",
    interactive: {
      kind: "signs",
      title: "Side effects to report",
      intro: "Tick any you have. Each one is worth telling your team about.",
      signs: ["Temperature above 37 and a half degrees", "Temperature below 36 degrees", "Feeling generally unwell during chemo", "Very sore or inflamed skin from a cream", "Shivers or flu-like symptoms on imiquimod", "Painful swelling of the penis", "Difficulty passing urine", "Skin colour change where you had radiotherapy"],
      after: "During chemotherapy, contact your hospital advice line immediately about signs of infection. Tell your doctor, nurse or radiographer about the others.",
      copyHeading: "Side effects to report",
    },
    sources: [CRUK_OTHER, MAC_TREAT, CRUK_RT_EXTERNAL, CRUK_RT_SIDE, CRUK_CHEMO, NHS_TREAT],
    quiz: {
      question: "What should you do if you have signs of infection during chemotherapy?",
      options: [{ text: "Contact your hospital advice line immediately", right: true }, { text: "Wait until your next appointment" }, { text: "Rest for a few days and see" }],
      why: "Contact your hospital advice line immediately if you have signs of infection, such as a temperature above 37 and a half degrees or below 36 degrees, or generally feeling unwell.",
    },
  },
  {
    id: "pen-relationships",
    kicker: "Sex and intimacy",
    question: "Will I be able to have sex again, and how do we talk about it?",
    hook: "Most treatments leave erections and orgasm possible, and even after the biggest operations there are ways to be close. Talking is where it starts.",
    short: "How treatment affects your sex life depends on which treatment you had. After smaller operations most people can have erections and sex once the area has healed, and after a partial penectomy many people can still have a fulfilling sex life. Your doctor or nurse will tell you when you can start again, and they can refer you to a specialist counsellor or sex therapist.",
    sections: [
      {
        heading: "When you can start again",
        paragraphs: [
          "Your doctor or nurse will tell you how long to wait after the operation before you start to have sex or masturbate again, to give the area time to heal. It may take longer than this before you feel ready.",
          "After a circumcision, avoid sexual activity for about 4 weeks, or until the wound has healed. It is usually safe to have sex once the treated area has completely healed and you feel ready.",
        ],
      },
      {
        heading: "After smaller operations",
        paragraphs: [
          "After a circumcision you usually have erections and can ejaculate as before, though for the first few months you may feel some tightness around the scar. After a wide local excision you are usually able to have an erection and carry on with your sex life as usual once the wound has healed.",
          "After a glansectomy, sensation at the end of the penis may feel different, but it is likely you will be able to have erections. If you have an early-stage cancer, treatment is unlikely to directly affect your sex life.",
        ],
      },
      {
        heading: "After a partial or total penectomy",
        paragraphs: [
          "Many people can have a fulfilling sex life after a partial penectomy. You might be able to have an erection and orgasm without the sensitive head of the penis, and you can usually still penetrate your partner. A study of men who had a partial penectomy found that over half of them could have an erection and intercourse.",
          "After a total penectomy, it can still be possible to have a fulfilling sex life, though you may need to adapt the way you express your sexuality. You may still be able to have an orgasm with stimulation of the area where your penis used to be, the scrotum and the perineum, but you will not be able to ejaculate.",
          "Hugging, kissing or petting can be just as fulfilling as penetrative sex. A reconstruction to make a new penis may be possible later, usually with a penile implant so that you can have an erection.",
        ],
      },
      {
        heading: "After radiotherapy or chemotherapy",
        paragraphs: [
          "It can take time to recover from the side effects of radiotherapy or chemotherapy before you feel ready to have sex. Radiotherapy can thicken the tissue in the penis, which might make erections more difficult and painful, but most of these effects improve once treatment has finished.",
          "If you have problems getting or keeping an erection, treatments that may help include tablets, injections, vacuum pumps and penile implants. If an erection lasts longer than 4 hours, always get medical help as soon as possible.",
        ],
      },
      {
        heading: "Talking about it",
        paragraphs: [
          "Your partner is likely to be relieved that you want to talk things over, and you may feel even closer afterwards. Partners may avoid touching you because they worry about hurting you, and talking openly can make you both feel more comfortable.",
          "Doctors and nurses deal with these situations all the time, so try not to feel embarrassed. They can refer you to a specialist counsellor or sex therapist, and many treatment centres have psychosexual counsellors.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse how long to wait before having sex or masturbating again.",
      "Focus on non-sexual closeness, such as holding hands, hugging or massage, while you recover.",
      "Talk with your partner about how you feel and the ways you would like to be close.",
      "Tell your doctor or specialist nurse about erection problems; tablets, injections and pumps can help.",
      "Get medical help as soon as possible if an erection lasts longer than 4 hours.",
      "Ask to be referred to a specialist counsellor or sex therapist.",
    ],
    tryThisWeek: [
      "Ask when it is safe to start.",
      "Spend close time without pressure.",
      "Talk with your partner.",
    ],
    ask: "When can I have sex again after my treatment, and can I be referred to a sex therapist or psychosexual counsellor?",
    interactive: {
      kind: "flip-cards",
      title: "Sex after each operation",
      intro: "Turn each card to see what the sources say about sex after each kind of surgery.",
      cards: [
        { id: "circ", front: "Circumcision", when: "Avoid sex for about 4 weeks", back: "Erections and ejaculation usually as before, with some tightness around the scar at first." },
        { id: "wle", front: "Wide local excision", when: "Once the wound has healed", back: "Usually able to have an erection and carry on as usual. Sensation may change." },
        { id: "glans", front: "Glansectomy", when: "Once you have healed", back: "Sensation may feel different, but it is likely you will be able to have erections." },
        { id: "partial", front: "Partial penectomy", when: "Once you have healed", back: "Many people have a fulfilling sex life, with erection and orgasm still possible." },
        { id: "total", front: "Total penectomy", when: "Finding new ways", back: "Orgasm may still be possible with touch around the scrotum and perineum, without ejaculation." },
      ],
    },
    sources: [CRUK_SEX, MAC_SURGERY, MAC_PENILE, ORCHID_SEX, MAC_ED, MAC_BODY],
    quiz: {
      question: "Who can help if sex has become difficult after treatment?",
      options: [{ text: "Your doctor or nurse, who can refer you to a sex therapist", right: true }, { text: "No one, it is too personal" }, { text: "Only a friend" }],
      why: "They can refer you to a specialist counsellor or sex therapist, and many treatment centres have psychosexual counsellors.",
    },
  },
  {
    id: "pen-body-image",
    kicker: "Body image",
    question: "How do I come to terms with how my body looks now?",
    hook: "Seeing the changes can be a shock, even when you knew what to expect. Feelings often ease with time, and there is help when they do not.",
    short: "Surgery can change how your penis looks: it may be smaller, have scars, or be a slightly different shape. It can be a shock to see the changes and can affect your confidence, and it is natural to go through a time of adjusting. Talking to your surgeon, a man who has had a similar experience, the people close to you, or a counsellor can all help.",
    sections: [
      {
        heading: "How things may look",
        paragraphs: [
          "After a wide local excision you will have a scar, and the shape of your penis might have changed slightly. After a glansectomy with a skin graft, your penis will be smaller and will look like a circumcised penis.",
          "Straight after surgery you are likely to be very swollen and sore, but this is temporary and not how you will look forever. Orchid says it may take up to 3 months for the penis to fully heal, and its appearance will improve over time.",
        ],
      },
      {
        heading: "Your feelings",
        paragraphs: [
          "It can be very difficult to cope with changes to your body after surgery, and a shock to see them even if your doctor told you beforehand what to expect. It can affect your self-confidence, and it is natural to go through a time of adjusting to change.",
          "Feelings may be mixed with relief that you have had treatment, and early feelings of fear, shock or anger should improve, particularly with support from family or friends. If these feelings do not go, talk to your doctor or specialist nurse, as counselling or other treatment can help.",
        ],
      },
      {
        heading: "Who can help",
        paragraphs: [
          "Talking to your surgeon, talking to a man who has had a similar experience, and talking to the people close to you can all make things easier. Your specialist may be able to put you in touch with someone who has had a similar experience.",
          "Most men will never meet other men who have been affected by penile cancer, so peer support can help. Orchid runs online support groups for men and for partners, and a telephone counselling service.",
        ],
      },
      {
        heading: "Partners and intimacy",
        paragraphs: [
          "If you feel you are no longer attractive and it is affecting your intimate relationships, try letting your partner know how you are feeling. Explaining how you feel can help them understand, and help you.",
          "How attractive a partner finds you is linked to different things, not to how a part of your body looks. Many people with cancer go on to have close and intimate relationships in the future.",
        ],
      },
      {
        heading: "Caring for your body",
        paragraphs: [
          "Even if your body looks or feels different, you can feel proud of it for getting you through treatment. Take time regularly to do nice things for yourself, such as having a relaxing bath or spending time somewhere you find peaceful.",
          "If you feel anxious or upset a lot of the time, or think you might be depressed, it is important to talk to someone from your cancer team.",
        ],
      },
    ],
    helps: [
      "Ask your surgeon to tell you exactly what they did and how you will look, and ask any questions you have.",
      "Ask your specialist about talking to a man who has had a similar experience.",
      "Let your partner know how you are feeling about the changes.",
      "Ask about counselling, including Orchid's telephone counselling service for men affected by penile cancer.",
      "Do something kind for your body regularly, such as a relaxing bath.",
      "Talk to your cancer team if you feel anxious or upset a lot of the time.",
    ],
    tryThisWeek: [
      "Ask your surgeon your questions.",
      "Tell your partner how you feel.",
      "Do one kind thing for yourself.",
    ],
    ask: "Can you put me in touch with a counsellor, or with a man who has had the same operation?",
    interactive: {
      kind: "scenarios",
      title: "Moments of adjusting",
      scenarios: [
        {
          id: "swelling",
          situation: "Seeing the swelling after surgery is a shock.",
          options: [{ text: "Remember the swelling is temporary", best: true }, { text: "Assume this is how it will stay" }],
          why: "Straight after surgery you are likely to be very swollen and sore, but this is temporary and not how you will look forever.",
        },
        {
          id: "partner",
          situation: "You feel unattractive and have been avoiding your partner.",
          options: [{ text: "Let your partner know how you feel", best: true }, { text: "Keep it to yourself" }],
          why: "Explaining how you feel can help them understand, and help you.",
        },
        {
          id: "alone",
          situation: "You feel no one else could understand.",
          options: [{ text: "Ask about peer support", best: true }, { text: "Keep struggling alone" }],
          why: "Most men will never meet other men who have been affected by penile cancer, so peer support can help.",
        },
        {
          id: "lasting",
          situation: "Months on, the low feelings have not lifted.",
          options: [{ text: "Talk to your doctor or specialist nurse", best: true }, { text: "Wait and hope they pass" }],
          why: "If these feelings do not go, talk to your doctor or specialist nurse, as counselling or other treatment can help.",
        },
      ],
    },
    sources: [CRUK_BODY, MAC_BODY, ORCHID_PSYCH, ORCHID_SUPPORT, ORCHID_SURGERY],
    quiz: {
      question: "Is the swelling straight after surgery how you will look forever?",
      options: [{ text: "No, it is temporary", right: true }, { text: "Yes" }, { text: "Only if you had a skin graft" }],
      why: "Straight after surgery you are likely to be very swollen and sore, but this is temporary and not how you will look forever.",
    },
  },
  {
    id: "pen-work",
    kicker: "Work",
    question: "When can I go back to work, and what support is there?",
    hook: "Time off, a phased return or extra breaks: the law counts cancer as a disability, so you can ask for changes that help.",
    short: "How long you need off depends on your operation: Orchid says at least 4 weeks after larger penile surgery, and within a week after minor surgery. If you have had cancer, the law considers this a disability, so your employer has to make reasonable adjustments, such as a phased return or different hours. Access to Work and Macmillan's advisers can help with practical and money questions.",
    sections: [
      {
        heading: "Time off after treatment",
        paragraphs: [
          "After larger penile surgery, Orchid says you will need at least 4 weeks off work, and after a total penectomy to avoid strenuous activity such as heavy lifting for 4 to 6 weeks. After minor surgery, such as a circumcision, you should be able to return to work within a week.",
          "The effects of chemotherapy may last from a few months to a year or more. Feeling tired or exhausted is worth taking into account when you think about going back to work.",
        ],
      },
      {
        heading: "Deciding what is right for you",
        paragraphs: [
          "What you decide to do about work after treatment depends on your situation. You may stop working for a while until you feel ready, carry on with reduced hours or changes to your job, change jobs, or stop working.",
          "Returning to work can help you feel like you are getting back to normal, but it can be a big step and is not right for everyone. If you can, plan to return to work gradually, and try to stay flexible.",
        ],
      },
      {
        heading: "Reasonable adjustments",
        paragraphs: [
          "If you have or have ever had cancer, the law considers this a disability. Your employer has to make reasonable adjustments so that you are not put at a disadvantage, such as adjusting your working hours.",
          "Adjustments could include a phased return, different working hours, extra breaks to help you cope with tiredness, or a parking space near your work. Discuss any adjustments with your employer and agree them before they are put in place.",
        ],
      },
      {
        heading: "Practical support",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a health condition, with a grant towards things like specialist equipment, or the costs of travelling to work if you cannot use public transport. An Access to Work grant will not affect any other benefits you get, and you will not have to pay it back.",
          "Macmillan's money advisers and welfare rights advisers can be reached free on 0808 808 0000. They can help you think about how returning to work will affect your finances and benefits.",
        ],
      },
      {
        heading: "Everyday life",
        paragraphs: [
          "You and your family might need to cope with practical things such as money, benefits, work issues and help with travel costs. Talk to your doctor or specialist nurse to find out who can help, as getting help early can mean these things do not become a big issue later.",
          "Many hospitals have a social worker available for people with cancer. A social worker can check you get all the benefits you are entitled to.",
        ],
      },
    ],
    helps: [
      "Ask your team how long you will need off work after your operation.",
      "Plan to return to work gradually if you can.",
      "Discuss and agree reasonable adjustments, such as a phased return or extra breaks, with your employer.",
      "Write notes in meetings about your return to work, or bring someone with you.",
      "Check whether Access to Work could help with equipment or travel costs.",
      "Call Macmillan's advisers free on 0808 808 0000 about money and benefits.",
    ],
    tryThisWeek: [
      "Ask how long you need off.",
      "List adjustments to discuss.",
      "Check Access to Work.",
    ],
    ask: "How long should I take off work after my operation, and what should I avoid while I heal?",
    interactive: {
      kind: "scenarios",
      title: "Back at work",
      scenarios: [
        {
          id: "lifting",
          situation: "Your job involves heavy lifting, three weeks after a total penectomy.",
          options: [{ text: "Avoid heavy lifting for now, and talk to your employer", best: true }, { text: "Go straight back to full duties" }],
          why: "After larger penile surgery, Orchid says you will need at least 4 weeks off work, and after a total penectomy to avoid strenuous activity such as heavy lifting for 4 to 6 weeks.",
        },
        {
          id: "tired",
          situation: "You tire easily in the afternoons at work.",
          options: [{ text: "Ask about extra breaks or different hours", best: true }, { text: "Push on and say nothing" }],
          why: "Adjustments could include a phased return, different working hours, extra breaks to help you cope with tiredness, or a parking space near your work.",
        },
        {
          id: "travel",
          situation: "You cannot use public transport to get to work for now.",
          options: [{ text: "Check whether Access to Work can help", best: true }, { text: "Give up on going back" }],
          why: "Access to Work can help you get or stay in work if you have a health condition, with a grant towards things like specialist equipment, or the costs of travelling to work if you cannot use public transport.",
        },
        {
          id: "money",
          situation: "You are worried about how going back will affect your benefits.",
          options: [{ text: "Call Macmillan's advisers", best: true }, { text: "Guess and hope for the best" }],
          why: "They can help you think about how returning to work will affect your finances and benefits.",
        },
      ],
    },
    sources: [ORCHID_SURGERY, ORCHID_EARLY, MAC_WORK, GOV_RIGHTS, GOV_ATW, CRUK_COPING, ORCHID_RT_ADVANCED],
    quiz: {
      question: "What does the law say about cancer at work?",
      options: [{ text: "It counts as a disability, so reasonable adjustments apply", right: true }, { text: "It only counts during treatment" }, { text: "Employers never need to make changes" }],
      why: "If you have or have ever had cancer, the law considers this a disability.",
    },
  },
  {
    id: "pen-mood",
    kicker: "Mood",
    question: "Why do I feel so low, and who can I talk to?",
    hook: "A cancer in such a private place can be hard to talk about, and many men feel isolated. Talking, with someone close or a counsellor, is often the first step.",
    short: "It is common to have many different feelings after penile cancer, and the changes it brings can affect your self-esteem, relationships and sex life. Feelings of sadness often improve, but if low feelings go on for more than 2 weeks, talk to your doctor or nurse, as it may be depression, which can be treated. If you are struggling to cope, you can call Samaritans free on 116 123, any time.",
    sections: [
      {
        heading: "Many different feelings",
        paragraphs: [
          "You are likely to have a range of emotions that change very quickly. One day you might feel positive and able to cope, and the next day feel the exact opposite, and this is natural.",
          "Changes to your body can affect your self-esteem, the way you relate to others, and your sex life. Any change to the appearance and function of the penis may cause a feeling of emasculation, and the loss of normal sexual function can be devastating.",
        ],
      },
      {
        heading: "Low mood or depression?",
        paragraphs: [
          "As you recover, feelings of sadness and loss often improve, but for some people low mood continues or gets worse and may become depression. Symptoms can include feeling low most of the time, losing interest in things you used to enjoy, changes in sleeping, eating or concentration, and feeling helpless.",
          "It is normal to have these feelings sometimes, but if they go on for more than 2 weeks, talk to your doctor or nurse. Depression is a real illness, not a sign of weakness, and with the right treatment and support most people with depression can make a full recovery.",
        ],
      },
      {
        heading: "Talking helps",
        paragraphs: [
          "Talking to someone about how you feel can help you cope, and it is often the first step in helping you feel better. You might find it easier to talk to someone outside your own friends and family.",
          "Counselling can help reduce stress and improve your quality of life, and even though many men shy away from it, it can be of enormous benefit. Orchid offers a telephone counselling service for men affected by penile cancer and their partners, through its helpline on 0808 802 0010.",
        ],
      },
      {
        heading: "Treatment and support",
        paragraphs: [
          "Your GP, specialist nurse or another healthcare professional can listen to you, refer you to a counsellor or psychologist, or talk to you about medicine. Anti-depressants are not addictive, but you should not stop taking them suddenly, so follow your doctor's advice.",
          "Peer support lets men reach out to others who have a shared experience. Orchid runs online support groups for men and for partners, and Macmillan has an Online Community.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online, call 111 and select the mental health option, or ask for an urgent GP appointment. You can call Samaritans free on 116 123, any time, day or night, or text SHOUT to 85258.",
          "If you have any thoughts about self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Call 999 or go to A&E now if someone's life is at risk, or if you do not feel you can keep yourself or someone else safe.",
        ],
      },
    ],
    helps: [
      "Talk to someone close to you, or someone outside your family, about how you feel.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Ask about counselling, including Orchid's telephone counselling through 0808 802 0010.",
      "Join a support group or online community to talk with others who understand.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "For urgent help, call 111 and select the mental health option; call 999 if a life is at risk.",
    ],
    tryThisWeek: [
      "Tell one person how you feel.",
      "Ask your GP about counselling.",
      "Save 116 123 in your phone.",
    ],
    ask: "Could my low mood be depression, and can you refer me for counselling or psychosexual support?",
    interactive: {
      kind: "signs",
      title: "Feelings to mention",
      intro: "Tick any that have lasted. They can help your GP or team understand how you have been.",
      signs: ["Feeling low or sad most of the time", "Losing interest in things you enjoyed", "Changes in sleep, eating or concentration", "Feeling helpless or vulnerable", "Problems starting or finishing tasks", "Avoiding people a lot of the time", "Thoughts of self-harm or suicide"],
      after: "Tell your GP or specialist nurse. For thoughts of self-harm or suicide, contact them straight away or go to A&E. Samaritans are on 116 123. Call 999 if a life is at risk.",
      copyHeading: "How I have been feeling",
    },
    sources: [CRUK_COPING, MAC_DEPRESSION, ORCHID_PSYCH, ORCHID_SUPPORT, NHS_DEPRESSION, NHS_URGENT, NHS_SUICIDAL, SAMARITANS, MAC_EMOTIONS],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, they always pass" }],
      why: "It is normal to have these feelings sometimes, but if they go on for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
];
