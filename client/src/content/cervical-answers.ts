import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Cervical cancer page's pieces (content/library-conditions/cancer-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS,
// Macmillan Cancer Support, Cancer Research UK and The Eve Appeal, with the government's Access to Work
// page and Samaritans for the work and mood answers. The answers describe treatment, recovery and living
// with after-effects; there are no survival or life-expectancy figures, and nothing is a prediction for
// one person. Emergency wording follows the NHS and Macmillan pages exactly. General information only; it
// never replaces what a person's own gynaecological cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const eve = (label: string, path: string): LearnSource => ({ label: `The Eve Appeal: ${label}`, url: `https://eveappeal.org.uk/${path}` });

const NHS_TREAT = nhs("Treatment for cervical cancer", "conditions/cervical-cancer/treatment/");
const NHS_TESTS = nhs("Tests and next steps for cervical cancer", "conditions/cervical-cancer/tests-and-next-steps/");
const NHS_CAUSES = nhs("Causes of cervical cancer", "conditions/cervical-cancer/causes/");
const NHS_HPV = nhs("Human papillomavirus (HPV)", "conditions/human-papilloma-virus-hpv/");
const NHS_EARLY_MENO = nhs("Early or premature menopause", "conditions/early-or-premature-menopause/");
const NHS_RADIO_SIDE = nhs("Radiotherapy: side effects", "tests-and-treatments/radiotherapy/side-effects/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_DEPRESSION = nhs("Depression in adults", "mental-health/conditions/depression-in-adults/overview/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const MAC_CERVICAL = mac("Cervical cancer", "cervical-cancer");
const MAC_STAGES = mac("Stages of cervical cancer", "cervical-cancer/stages");
const MAC_CAUSES = mac("Causes and risk factors of cervical cancer", "cervical-cancer/causes-and-risk-factors");
const MAC_SURGERY = mac("Surgery for cervical cancer", "treatments-and-drugs/cervical-cancer-surgery");
const MAC_AFTER_SURGERY = mac("Before and after surgery for cervical cancer", "cervical-cancer/before-and-after-surgery");
const MAC_RADIO = mac("Radiotherapy for cervical cancer", "treatments-and-drugs/radiotherapy-for-cervical-cancer");
const MAC_CHEMO = mac("Chemotherapy for cervical cancer", "treatments-and-drugs/chemotherapy-for-cervical-cancer");
const MAC_PELVIC_SIDE = mac("Pelvic radiotherapy side effects", "treatment/types-of-treatment/radiotherapy/pelvic-radiotherapy/pelvic-radiotherapy-side-effects");
const MAC_LATE = mac("Late effects of pelvic radiotherapy", "treatment/types-of-treatment/radiotherapy/pelvic-radiotherapy/late-effects-of-pelvic-radiotherapy");
const MAC_BB_TIPS = mac("Tips for coping with bladder or bowel changes", "treatment/types-of-treatment/radiotherapy/pelvic-radiotherapy/tips-for-coping-with-bladder-or-bowel-changes");
const MAC_MENO = mac("Menopausal symptoms and cancer treatment", "impacts-of-cancer/menopausal-symptoms-and-cancer-treatment");
const MAC_FERTILITY = mac("Fertility and cancer", "impacts-of-cancer/fertility");
const MAC_VAGINAL = mac("Vaginal changes, sexual well-being and cancer", "treatment/coping-with-treatment/your-sex-life/vaginal-changes-sexual-well-being");
const MAC_FOLLOW_UP = mac("Follow-up care after cancer treatment", "after-treatment/follow-up-care-after-treatment");
const MAC_FINISHING = mac("Finishing cancer treatment", "after-treatment/finishing-treatment");
const MAC_WORRIES = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");
const MAC_WORK = mac("Making decisions about work after treatment", "after-treatment/making-decisions-about-work-after-treatment");
const MAC_MONEY = mac("Money and work", "get-help/financial-and-work");
const MAC_EMOTIONS = mac("Cancer and your emotions", "treatment/coping-with-treatment/cancer-and-your-emotions");

const CRUK_STAGES = cruk("Stages, types and grades of cervical cancer", "cervical-cancer/stages-types-grades");
const CRUK_FOLLOW_UP = cruk("Follow up after cervical cancer treatment", "cervical-cancer/treatment/follow-up");
const CRUK_RADIO_SIDE = cruk("Side effects of cervical cancer radiotherapy", "cervical-cancer/treatment/radiotherapy/side-effects");
const CRUK_SURGERY_PROBLEMS = cruk("Problems after cervical cancer surgery", "cervical-cancer/treatment/surgery/problems");
const CRUK_FERTILITY = cruk("Fertility and cervical cancer", "cervical-cancer/living-with/fertility");
const CRUK_SEX = cruk("Your sex life and cervical cancer", "cervical-cancer/living-with/your-sex-life");
const CRUK_COPING = cruk("Coping with cervical cancer", "cervical-cancer/living-with/coping");
const CRUK_HPV = cruk("Does HPV cause cancer?", "causes-of-cancer/infections-eg-hpv-and-cancer/does-hpv-cause-cancer");

const EVE_CERVICAL = eve("Cervical cancer", "information-and-advice/gynaecological-cancers/cervical-cancer/");
const EVE_HPV = eve("HPV", "resource/hpv/");
const EVE_ASK = eve("Ask Eve information service", "information-and-advice/ask-eve-information-service/");

const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work: get support if you have a disability or health condition", url: "https://www.gov.uk/access-to-work" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const cervicalAnswers: LearnArticle[] = [
  {
    id: "cx-what-you-had",
    kicker: "Your treatment",
    question: "What was each part of my treatment for?",
    hook: "Surgery, chemoradiation, brachytherapy, chemotherapy: each had its own job, and the plan was built around the stage, your health and your wishes.",
    short: "Surgery is the main treatment for early cervical cancer, and chemoradiation, radiotherapy given with chemotherapy, is the main treatment for locally advanced cancer. Chemotherapy, targeted medicines and immunotherapy may be used after surgery or if the cancer has come back or spread. Which treatments you had depended on the size, type and stage of the cancer, your general health, and whether you want to get pregnant in future.",
    sections: [
      {
        heading: "Why your plan was yours",
        paragraphs: [
          "The treatment you have for cervical cancer depends on the size and type of the cancer, where it is, whether it has spread and your general health. It can also depend on whether you have been through the menopause and whether you want to get pregnant in future.",
          "A team of specialists, called a multidisciplinary team, meets to discuss the best treatment for you. You will have regular check-ups during and after treatment, and if you have symptoms or side effects you are worried about, talk to your specialists: you do not need to wait for your next check-up.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Surgery is the main treatment for stage 1 cervical cancer, and it is sometimes used for small stage 2A cancers. Whatever the operation, the aim is to remove all of the cancer with a margin of healthy tissue around it.",
          "A large loop excision, called LLETZ, or a cone biopsy removes an area of the cervix. A hysterectomy removes the womb, while a trachelectomy removes the cervix and the upper part of the vagina but leaves the womb in place, so that it is possible to get pregnant in the future.",
          "After the operation, the tissue is looked at under a microscope. If cancer cells are found in the lymph nodes, in tiny blood or lymph vessels inside the tumour, or in the tissue around the cervix, you may need further treatment to reduce the risk of the cancer coming back.",
        ],
      },
      {
        heading: "Chemoradiation",
        paragraphs: [
          "Chemoradiation, radiotherapy given with chemotherapy, is the main treatment for locally advanced cancer. The chemotherapy makes the cancer cells more sensitive to radiotherapy, and the drug most commonly used is cisplatin, usually given once a week throughout your radiotherapy.",
          "External radiotherapy is usually given as an outpatient, once a day from Monday to Friday with a rest at the weekend, and the full course usually takes about 5 to five and a half weeks. Internal radiotherapy, called brachytherapy, is usually given after it, and gives radiation directly to the cervix and the area close by.",
        ],
      },
      {
        heading: "Chemotherapy, targeted drugs and immunotherapy",
        paragraphs: [
          "Chemotherapy may also be given after surgery, usually with radiotherapy, to help stop the cancer coming back, or if the cancer is advanced, has come back or has spread. The drugs are usually given into a vein, and most cycles are 1 to 3 weeks long.",
          "Targeted medicines and immunotherapy may be used if you have advanced cervical cancer or the cancer has come back. The aim is to help make the cancer smaller or stop it getting any larger, not to cure the cancer.",
        ],
      },
      {
        heading: "Getting help quickly during chemotherapy",
        paragraphs: [
          "Chemotherapy can weaken the immune system, which can mean you are more likely to get infections. Call your care team now if you have a high temperature, which can feel like being hot, cold, sweaty or shivery, or other signs of an infection, such as a sore throat, cough, diarrhoea or pain when peeing.",
          "Also call them now if you have throbbing or cramping pain, swelling and warmth in a leg or arm, or sudden breathlessness, sharp chest pain and a cough or coughing up blood. These are signs of an infection or blood clot, which may need to be treated quickly, and if you are not sure how to contact your care team, call NHS 111.",
        ],
      },
    ],
    helps: [
      "Ask your specialist team to explain each treatment, its benefits and its side effects.",
      "Talk to your specialists about symptoms or side effects that worry you; you do not need to wait for your next check-up.",
      "Ask your surgeon about the results from the tissue removed in your operation, which are usually discussed at your first follow-up appointment.",
      "During chemotherapy, call your care team now if you have a high temperature or other signs of infection, or NHS 111 if you are not sure how to reach them.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if you want to talk things through.",
    ],
    tryThisWeek: [
      "Ask what each treatment was for.",
      "Report worrying side effects now.",
      "Know when to call your care team.",
    ],
    ask: "Which treatments did I have, and what was each one for in my case?",
    interactive: {
      kind: "flip-cards",
      title: "Your treatments, card by card",
      intro: "Turn each card to see what each treatment was for.",
      cards: [
        { id: "surgery", front: "Surgery", when: "The main treatment for stage 1", back: "Removes all of the cancer with a margin of healthy tissue: LLETZ, cone biopsy, hysterectomy or trachelectomy." },
        { id: "chemoradiation", front: "Chemoradiation", when: "Main treatment for locally advanced cancer", back: "Radiotherapy with chemotherapy, usually cisplatin once a week, which makes the cancer cells more sensitive to radiotherapy." },
        { id: "external", front: "External radiotherapy", when: "Once a day, Monday to Friday", back: "High-energy x-rays from a machine outside the body, over about 5 to five and a half weeks." },
        { id: "brachytherapy", front: "Brachytherapy", when: "Usually after external radiotherapy", back: "Internal radiotherapy through applicators in the womb or vagina, giving radiation directly to the cervix and the area close by." },
        { id: "chemotherapy", front: "Chemotherapy", when: "After surgery, or if the cancer has spread", back: "Anti-cancer drugs, usually into a vein, in cycles that are mostly 1 to 3 weeks long." },
        { id: "targeted", front: "Targeted drugs and immunotherapy", when: "Advanced cancer, or cancer that has come back", back: "Medicines that aim to make the cancer smaller or stop it getting any larger." },
      ],
    },
    sources: [NHS_TREAT, MAC_CERVICAL, MAC_SURGERY, MAC_RADIO, MAC_CHEMO, NHS_CHEMO],
    quiz: {
      question: "Why is chemotherapy given alongside radiotherapy in chemoradiation?",
      options: [{ text: "It makes the cancer cells more sensitive to radiotherapy", right: true }, { text: "It protects the skin from the radiotherapy" }, { text: "It shortens the course to one week" }],
      why: "The chemotherapy makes the cancer cells more sensitive to radiotherapy, and the drug most commonly used is cisplatin, usually given once a week throughout your radiotherapy.",
    },
  },
  {
    id: "cx-stage",
    kicker: "Stage",
    question: "What does the stage of my cervical cancer mean?",
    hook: "Stage 1 to 4, early or locally advanced: the words describe how big the cancer was and how far it had spread, and they shaped your treatment.",
    short: "The stage describes the size of the cervical cancer and whether it has spread beyond the cervix. Stage 1 means it is only in the cervix; stages 2 to 4 describe spread into the vagina, the pelvis, nearby lymph nodes, organs such as the bladder, or further away. The stage helps your doctors decide on the most appropriate treatment.",
    sections: [
      {
        heading: "What stage means",
        paragraphs: [
          "The stage of cervical cancer describes its size and whether it has spread beyond the area where it first started. Knowing the extent of the cancer helps your doctors decide on the most appropriate treatment.",
          "Tests such as blood tests, scans and an internal examination under general anaesthetic, along with the colposcopy, help the specialists find out the size of the cancer and how far it has spread. You may not have all of these tests.",
        ],
      },
      {
        heading: "Stages 1 and 2",
        paragraphs: [
          "Stage 1 means the cancer cells are only within the cervix. In stage 1A the cancer can only be seen with a microscope or colposcope, and in stage 1B it is 5mm or more deep but still confined to the cervix.",
          "Stage 2 means the cancer has spread into the upper part of the vagina or the tissues next to the cervix. For stage 1, surgery is the main treatment; for stage 2, the main treatments are chemoradiotherapy and sometimes surgery.",
        ],
      },
      {
        heading: "Stages 3 and 4",
        paragraphs: [
          "Stage 3 means the cancer has spread to the lower part of the vagina, to the tissues at the sides of the pelvis, called the pelvic wall, or to nearby lymph nodes. Treatment is usually chemoradiotherapy.",
          "Stage 4 means the cancer has spread to the bladder or bowel, or beyond the pelvis. In stage 4A it has spread to nearby organs, and in stage 4B to organs further from the cervix, such as the lungs, liver or bone.",
        ],
      },
      {
        heading: "The words your team may use",
        paragraphs: [
          "Your doctors may describe the cancer as early stage, which usually includes stages 1A to 1B1, or locally advanced, which usually includes stages 1B2 to 4A. Advanced or metastatic cervical cancer usually means stage 4B.",
          "If the cancer comes back after the first treatment, it is known as recurrent cancer.",
        ],
      },
      {
        heading: "Stage, grade and type",
        paragraphs: [
          "The grade looks at how abnormal the cells look under a microscope, and the type means the type of cell the cancer started from. The most common type is squamous cell cancer.",
          "Grade 1 cells are slow growing and look quite similar to normal cells. Grade 3 cells grow faster and are more likely to spread.",
          "Waiting to know the stage can be a worrying time. If you want someone to talk to, you can call the Macmillan Support Line on 0808 808 00 00.",
        ],
      },
    ],
    helps: [
      "Make a list of questions before your appointment.",
      "Take someone with you to support you and help you remember what was said.",
      "Ask your healthcare team to explain things again if you need them to.",
      "Ask your clinical nurse specialist, your main point of contact, any questions you have.",
      "If you do not want much information yet, tell your doctor or nurse; you can ask for more when you feel ready.",
      "Call the Macmillan Support Line on 0808 808 00 00 if waiting for your results feels hard.",
    ],
    tryThisWeek: [
      "List your questions.",
      "Bring someone to appointments.",
      "Ask for things to be explained again.",
    ],
    ask: "What stage was my cancer, and how did that shape the treatment I was offered?",
    interactive: {
      kind: "flip-cards",
      title: "The stages, card by card",
      intro: "Turn each card to see what each stage means.",
      cards: [
        { id: "stage-1", front: "Stage 1", when: "Only within the cervix", back: "Surgery is the main treatment. In 1A it is seen only with a microscope; in 1B it is 5mm or more deep." },
        { id: "stage-2", front: "Stage 2", when: "Upper vagina or tissue next to the cervix", back: "The main treatments are chemoradiotherapy and sometimes surgery." },
        { id: "stage-3", front: "Stage 3", when: "Lower vagina, pelvic wall or lymph nodes", back: "Treatment is usually chemotherapy and radiotherapy together (chemoradiotherapy)." },
        { id: "stage-4", front: "Stage 4", when: "Bladder, bowel or beyond the pelvis", back: "4A: nearby organs such as the bladder and bowel. 4B: organs further away, such as the lungs, liver or bone." },
        { id: "recurrent", front: "Recurrent", when: "If it comes back", back: "The name used if the cancer comes back after the first treatment." },
      ],
    },
    sources: [MAC_STAGES, CRUK_STAGES, EVE_CERVICAL, NHS_TESTS, CRUK_COPING],
    quiz: {
      question: "What does the stage of cervical cancer describe?",
      options: [{ text: "Its size and whether it has spread", right: true }, { text: "How quickly the cells grow" }, { text: "Which cell the cancer started from" }],
      why: "The stage of cervical cancer describes its size and whether it has spread beyond the area where it first started.",
    },
  },
  {
    id: "cx-follow-up",
    kicker: "Follow-up",
    question: "What happens at follow-up after cervical cancer?",
    hook: "Check-ups every few months at first, then less often, and a number to call whenever something new comes up.",
    short: "After treatment you have regular check-ups, the first within 6 weeks, then usually every 3 to 6 months for the first 2 years and less often after that. Your doctor or nurse examines you, asks how you are and may arrange tests. Between appointments, contact your doctor or specialist nurse about any concerns or new symptoms: you do not have to wait.",
    sections: [
      {
        heading: "What follow-up is for",
        paragraphs: [
          "After treatment for cervical cancer, you have regular check-ups to see how you are and whether you have any problems or worries. They can include a phone appointment, a physical examination, blood tests, x-rays and scans.",
          "The appointments help your cancer team notice any possible problems early. They will usually ask about your recovery and any side effects or symptoms, and give advice on how to manage them.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Your first follow-up appointment will be within 6 weeks of finishing treatment. You might then be seen every 3 to 6 months for the first 2 years, and every 6 to 12 months for the following 3 to 5 years.",
          "How often depends on your hospital's policy, the treatment you had and your circumstances. In some hospitals, people with early cancers have only a few appointments and are given plenty of information about what to look out for and who to contact.",
          "Your gynaecological oncologist and cancer specialist might share your follow-up. Some hospitals arrange for specialist nurses to follow you up with phone calls.",
        ],
      },
      {
        heading: "At the appointment",
        paragraphs: [
          "Your doctor or nurse examines you and asks how you are feeling, whether you have had any symptoms or side effects, and if you are worried about anything. Tests may include a sample of cells, a colposcopy, blood tests, x-rays, or PET-CT or MRI scans.",
          "If you have had your womb removed, you no longer need regular cervical screening. Cervical cells can be very difficult to interpret after radiotherapy, so you will not have regular tests as part of the screening programme, but your doctor will still look at the cervix using a speculum.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your doctor or specialist nurse if you have concerns or notice new symptoms between appointments: you do not have to wait until your next visit. If you have been fully discharged by your cancer team, you can contact your GP.",
          "Your cancer team will give you details of who to contact, sometimes called your key worker, and may give you a treatment summary, with a copy sent to your GP. A cancer care review with your GP practice is usually done within 12 months of diagnosis, but you can ask for one at any point.",
        ],
      },
      {
        heading: "When appointments feel worrying",
        paragraphs: [
          "Many people find follow-up appointments quite worrying, and a hospital visit can bring back anxiety about the cancer. It is natural to feel anxious between appointments.",
          "Telling someone close to you how you feel can mean your worries do not seem so overwhelming, and many people find counselling helpful. You can also call the Macmillan Support Line on 0808 808 00 00.",
        ],
      },
    ],
    helps: [
      "Write down your questions before an appointment, and take someone with you.",
      "Contact your doctor or specialist nurse about concerns or new symptoms between appointments; you do not have to wait.",
      "Keep your key worker's contact details in your phone or somewhere safe.",
      "Ask your cancer team for a copy of your treatment summary if you are not given one.",
      "Ask your GP practice for a cancer care review if you have not had one.",
      "Tell your cancer team how you are coping with your feelings.",
    ],
    tryThisWeek: [
      "Write questions for follow-up.",
      "Save your key worker's number.",
      "Ask for your treatment summary.",
    ],
    ask: "How often will I be seen, which tests will I have, and who do I contact between appointments?",
    interactive: {
      kind: "timeline",
      title: "After treatment ends",
      steps: [
        { id: "first", when: "Within 6 weeks", title: "First check-up", points: ["Your first appointment after treatment ends.", "A chance to raise any concerns about your progress."] },
        { id: "early", when: "First 2 years", title: "Every 3 to 6 months", points: ["An examination and questions about how you are.", "Some hospitals follow up by phone."] },
        { id: "later", when: "The following 3 to 5 years", title: "Every 6 to 12 months", points: ["Appointments become less frequent over time.", "Tests may include blood tests, x-rays or scans."] },
        { id: "yearly", when: "Generally once a year", title: "Cell sample and colposcopy", points: ["A sample of cells is taken.", "A colposcopy looks closely at the top of the vagina."] },
        { id: "any-time", when: "Any time", title: "Between appointments", points: ["Contact your doctor or nurse about new symptoms.", "You do not have to wait for your next visit."] },
      ],
    },
    sources: [CRUK_FOLLOW_UP, MAC_CERVICAL, MAC_FOLLOW_UP, MAC_FINISHING, MAC_WORRIES],
    quiz: {
      question: "When is the first follow-up appointment after treatment?",
      options: [{ text: "Within 6 weeks of finishing treatment", right: true }, { text: "After a year" }, { text: "Only if symptoms come back" }],
      why: "Your first follow-up appointment will be within 6 weeks of finishing treatment.",
    },
  },
  {
    id: "cx-hpv",
    kicker: "HPV",
    question: "What does HPV have to do with my cancer?",
    hook: "Nearly all cervical cancers start with HPV, a virus most people catch at some point. It is never anyone's fault, and the cancer itself cannot be passed on.",
    short: "Nearly all cervical cancers are caused by certain high-risk types of human papillomavirus, or HPV. HPV is very common: 8 in 10 people get it at some point, and the body usually clears it, but in some people it stays and over many years can cause cancer. Getting cancer is never anyone's fault, and cervical cancer is not infectious, so a partner cannot catch it.",
    sections: [
      {
        heading: "The link with HPV",
        paragraphs: [
          "Nearly all cervical cancers are caused by an infection with certain high-risk types of human papillomavirus, or HPV. HPV is the name of a very common group of viruses that do not cause any problems in most people.",
          "There are hundreds of different types of HPV, and around 14 are high-risk types that increase the risk of cancer. More than 7 in 10 cervical cancers come from two of them, types 16 and 18.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "Most people will get some type of HPV in their life: 8 in 10 of us get it at some point. It spreads through skin-to-skin contact of the genital area, vaginal, anal or oral sex and sharing sex toys, and it does not usually cause any symptoms.",
          "Most of the time the immune system gets rid of HPV within two years. In some people it stays in the body for longer, and over many years high-risk types can damage cells in the cervix that may eventually cause cancer.",
          "You can have HPV for many years without it causing problems, even if you have not been sexually active or had a new partner for many years. It can affect anyone who has ever been sexually active, including people in a long-term relationship with one partner.",
        ],
      },
      {
        heading: "Nobody's fault",
        paragraphs: [
          "Some women come across stigma from the myths around HPV and cervical cancer. Getting cancer is never anyone's fault: HPV is very common and anyone can get it.",
          "Having HPV does not mean that a partner has been unfaithful. Because HPV can stay in the body without being detected, it is possible to have got it years or even decades ago without knowing.",
        ],
      },
      {
        heading: "Partners and sex",
        paragraphs: [
          "Cervical cancer is not infectious, so a partner cannot catch it from you. HPV itself can be passed between sexual partners, so speak to your doctor or nurse if you are worried.",
          "Condoms can help protect against HPV, but they do not cover all the skin around the genitals, so they do not fully protect. There is no official guidance that you should tell anyone if you have HPV; it is completely up to you.",
        ],
      },
      {
        heading: "Looking after yourself now",
        paragraphs: [
          "If you have had cervical cancer, there is a higher risk of getting another cancer linked to high-risk HPV, though there is not much evidence on how big this risk is. If that is worrying, the Ask Eve nurses offer free and confidential information and support.",
          "Smoking makes it harder for the immune system to protect against HPV infections and to clear HPV from the body. Not smoking lowers the risk of HPV and cervical cancer.",
        ],
      },
    ],
    helps: [
      "Remember that HPV is very common and getting cancer is never anyone's fault.",
      "Speak to your doctor or nurse if you are worried about a partner; cervical cancer itself is not infectious.",
      "If you smoke, think about stopping: smoking makes it harder for the body to clear HPV.",
      "Use condoms to lower the chance of passing on HPV, knowing they do not fully protect.",
      "Call the Ask Eve nurses free on 0808 802 0019 with any questions about HPV.",
    ],
    tryThisWeek: [
      "Remind yourself it is nobody's fault.",
      "Raise partner worries with your nurse.",
      "Call Ask Eve with HPV questions.",
    ],
    ask: "Does HPV change anything about my follow-up, and what should I tell my partner?",
    interactive: {
      kind: "scenarios",
      title: "HPV moments",
      scenarios: [
        {
          id: "blame",
          situation: "You keep wondering what you did to cause the cancer.",
          options: [{ text: "Remind yourself it is never anyone's fault", best: true }, { text: "Blame yourself for getting HPV" }],
          why: "Getting cancer is never anyone's fault: HPV is very common and anyone can get it.",
        },
        {
          id: "catch",
          situation: "Your partner is afraid of catching cancer from you.",
          options: [{ text: "Explain that cervical cancer is not infectious", best: true }, { text: "Avoid being close to them" }],
          why: "Cervical cancer is not infectious, so a partner cannot catch it from you.",
        },
        {
          id: "unfaithful",
          situation: "You wonder whether HPV means a partner was unfaithful.",
          options: [{ text: "Know it could have been there for decades", best: true }, { text: "Assume they must have cheated" }],
          why: "Because HPV can stay in the body without being detected, it is possible to have got it years or even decades ago without knowing.",
        },
        {
          id: "smoking",
          situation: "You smoke and want to look after yourself now.",
          options: [{ text: "Think about stopping", best: true }, { text: "Carry on, as it makes no difference" }],
          why: "Smoking makes it harder for the immune system to protect against HPV infections and to clear HPV from the body.",
        },
      ],
    },
    sources: [NHS_CAUSES, NHS_HPV, EVE_HPV, CRUK_HPV, MAC_CAUSES, EVE_CERVICAL, CRUK_SEX, EVE_ASK],
    quiz: {
      question: "Can a partner catch cervical cancer from you?",
      options: [{ text: "No, cervical cancer is not infectious", right: true }, { text: "Yes, through any close contact" }, { text: "Only during treatment" }],
      why: "Cervical cancer is not infectious, so a partner cannot catch it from you.",
    },
  },
  {
    id: "cx-radiotherapy",
    kicker: "Radiotherapy",
    question: "What happens to my body after radiotherapy?",
    hook: "Side effects often get worse for a couple of weeks after the last session before they ease. Knowing the pattern, and when to call, makes the weeks easier.",
    short: "Side effects of radiotherapy for cervical cancer tend to start about a week in, get worse during treatment and for a couple of weeks after, then usually begin to improve. Sore skin, tiredness, diarrhoea and bladder irritation are common, and most effects go away in the weeks or months after treatment. Some can continue or start months or years later; your team can help with these, so always tell them.",
    sections: [
      {
        heading: "How side effects come and go",
        paragraphs: [
          "Side effects of radiotherapy for cervical cancer tend to start a week after treatment begins. They gradually get worse during treatment and for a couple of weeks after it ends, then usually begin to improve after around 2 weeks.",
          "Most side effects gradually go away in the weeks or months after treatment. Some can continue, or start months or even years later, and these are called late effects.",
        ],
      },
      {
        heading: "Sore skin",
        paragraphs: [
          "The skin in the treatment area, which might include your vulva and the area around your back passage, can become quite sore and red. This usually starts about 5 to 7 days into treatment and continues for about 10 days after your last treatment, then starts to improve.",
          "Use the moisturiser your radiographers tell you to use on the treated skin every day, and wear loose underwear made from natural fibres such as cotton or silk. Protect the treated area from the sun for the first year after radiotherapy.",
        ],
      },
      {
        heading: "Tiredness",
        paragraphs: [
          "Tiredness can carry on for some weeks after treatment has ended, but it usually improves gradually. More than 30 out of every 100 women treated for cervical cancer report fatigue two years or longer after treatment, while others get back to normal energy levels between 6 and 12 months after treatment.",
          "Gentle exercise can give you more energy, balanced with resting. If you suddenly feel very tired and out of breath, contact your care team, as this can be a sign of a lack of red blood cells, called anaemia.",
        ],
      },
      {
        heading: "Bladder, bowel and bleeding",
        paragraphs: [
          "Diarrhoea and stinging when you pass urine are common during treatment. Try to drink at least 2 to 3 litres of fluids a day, and tell your radiotherapy team, who can give you advice and may give you tablets to help reduce diarrhoea.",
          "Contact the hospital straight away if your bladder symptoms get worse, you have a high temperature or you feel you cannot pass urine. Contact your doctor or nurse straight away if you have been sick more than once in a day.",
          "After internal radiotherapy, you may have some bleeding from the vagina, which should clear up within 48 hours. Tell your radiotherapy doctor or nurse if the bleeding becomes heavy or goes on for longer than this.",
        ],
      },
      {
        heading: "Late effects and getting help",
        paragraphs: [
          "Late effects can include a bladder that feels full sooner, looser or more frequent bowel motions, a narrower vagina, an early menopause and swelling in the legs, called lymphoedema. They do not happen to everyone, and it is difficult to predict who will have them.",
          "Talk to your cancer doctor or specialist nurse about side effects that do not go away or new problems after treatment, and you can arrange to see them between appointments. A few hospitals have clinics for people with late effects, and if you smoke, stopping will help, as smoking makes the side effects of radiotherapy worse.",
        ],
      },
    ],
    helps: [
      "Tell your radiotherapy team about any side effects during or after treatment; there are often things that can help.",
      "Use the moisturiser your radiographers recommend on the treated skin every day.",
      "Drink at least 2 to 3 litres of fluids a day while bladder or bowel side effects last.",
      "Contact the hospital straight away if bladder symptoms get worse, you have a high temperature or you cannot pass urine.",
      "If you smoke, try to stop: smoking makes the side effects of radiotherapy worse.",
      "Ask your healthcare team whether there is a late effects clinic near you.",
    ],
    tryThisWeek: [
      "Moisturise the treated skin daily.",
      "Drink 2 to 3 litres a day.",
      "Report side effects to the team.",
    ],
    ask: "Which side effects should I expect after my radiotherapy, and which ones should I call about straight away?",
    interactive: {
      kind: "timeline",
      title: "Through and after radiotherapy",
      steps: [
        { id: "week-one", when: "About a week in", title: "Side effects begin", points: ["They tend to start a week after treatment begins.", "Tell your radiotherapy team about any you notice."] },
        { id: "skin", when: "5 to 7 days in", title: "Skin may get sore", points: ["Use the moisturiser your radiographers recommend.", "Wear loose cotton or silk underwear."] },
        { id: "end", when: "Treatment ends", title: "Worse before better", points: ["Side effects can get worse for a couple of weeks.", "Sore skin continues for about 10 days."] },
        { id: "two-weeks", when: "Around 2 weeks after", title: "Starting to improve", points: ["Most side effects begin to improve.", "Tiredness usually improves gradually."] },
        { id: "later", when: "Months or years later", title: "Late effects", points: ["Some effects continue or start later.", "Tell your team: there are usually things that can help."] },
      ],
    },
    sources: [CRUK_RADIO_SIDE, MAC_PELVIC_SIDE, MAC_LATE, MAC_RADIO, NHS_RADIO_SIDE, CRUK_COPING],
    quiz: {
      question: "When do radiotherapy side effects usually begin to improve?",
      options: [{ text: "Around 2 weeks after treatment ends", right: true }, { text: "On the last day of treatment" }, { text: "Only after a year" }],
      why: "They gradually get worse during treatment and for a couple of weeks after it ends, then usually begin to improve after around 2 weeks.",
    },
  },
  {
    id: "cx-menopause",
    kicker: "Menopause",
    question: "Why has treatment brought on an early menopause, and what helps?",
    hook: "Radiotherapy or removing the ovaries can start the menopause years early, sometimes suddenly. HRT is possible after most cervical cancers, and other things help too.",
    short: "If you were still having periods, radiotherapy for cervical cancer, or surgery to remove the ovaries, will bring on an early menopause. The symptoms can be more intense than a natural menopause because they start suddenly. You can take HRT after treatment for most cervical cancers, and it also helps protect your bones and heart, so ask your cancer doctor whether it suits you.",
    sections: [
      {
        heading: "Why treatment can bring it on",
        paragraphs: [
          "Radiotherapy for cervical cancer affects the ovaries, so if you are still having periods it will cause an early menopause. An early menopause is when you stop having regular periods before the age of 45.",
          "If the ovaries are removed during surgery, the menopause starts straight away. After radiotherapy, hormone levels start to fall from about 3 months after the start of treatment, and it is still important to use effective contraception during this time.",
          "Sometimes the ovaries can be moved out of the radiotherapy area before treatment, to try to prevent an early menopause, but this does not always work.",
        ],
      },
      {
        heading: "The symptoms",
        paragraphs: [
          "The symptoms are the same as those of a natural menopause, but they can be more intense if it comes on suddenly. They include hot flushes, sweating especially at night, mood swings, irritability, vaginal dryness, a lack of sex drive and an increased urgency to pass urine.",
          "Hot flushes generally last for about 4 to 5 minutes. You may feel sudden warmth in your face, neck and chest, and you might feel your heart beating faster during a flush.",
        ],
      },
      {
        heading: "Hormone replacement therapy",
        paragraphs: [
          "You can take hormone replacement therapy, or HRT, after treatment for most cervical cancers. It replaces the hormones your ovaries are no longer producing, and you can take it as a tablet, skin patches, a gel or an implant.",
          "It is important to replace missing hormones if the menopause starts before 45, because there is a higher chance of problems with your bones and heart. HRT can usually help with all the symptoms of menopause, but if you have had radiotherapy it is unlikely to help with vaginal dryness.",
          "HRT has benefits and risks, so ask your cancer doctor whether it is suitable for you.",
        ],
      },
      {
        heading: "Other ways to ease symptoms",
        paragraphs: [
          "Your doctor can prescribe medicines that reduce hot flushes and sweats. A slow, controlled breathing method called paced respiration, practised for 15 minutes twice a day, can sometimes help: you breathe in for 5 seconds and out for 5 seconds using your tummy muscles.",
          "Non-hormonal vaginal creams, used 2 to 3 times a week, and water-based lubricants during sex can help with dryness. Drinking at least one and a half litres of fluid a day helps keep your bladder healthy, and pelvic floor exercises can help with leaking.",
        ],
      },
      {
        heading: "Your bones, heart and feelings",
        paragraphs: [
          "An early menopause may increase the risk of bone thinning, called osteoporosis, and heart disease. Regular weight-bearing exercise and plenty of calcium and vitamin D in your diet can help look after your bones.",
          "If treatments and lifestyle changes do not help, you can be referred to a specialist menopause centre. If an early menopause is affecting your mental health, you can get NHS talking therapies without seeing a GP first.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor whether HRT is suitable for you.",
      "Talk to your doctor about medicines that can reduce hot flushes and sweats.",
      "Practise paced breathing for 15 minutes twice a day, then use it when a flush starts.",
      "Use a non-hormonal vaginal cream and a water-based lubricant for dryness.",
      "Do regular weight-bearing exercise and have plenty of calcium and vitamin D.",
      "If symptoms continue despite treatment, ask about a referral to a specialist menopause centre.",
    ],
    tryThisWeek: [
      "Ask whether HRT suits you.",
      "Try paced breathing twice a day.",
      "Try a water-based lubricant.",
    ],
    ask: "Can I take HRT after my treatment, and what else could help with my symptoms?",
    interactive: {
      kind: "flip-cards",
      title: "Ways to ease the menopause",
      intro: "Turn each card to see what each one does.",
      cards: [
        { id: "hrt", front: "HRT", when: "After most cervical cancers", back: "Replaces the hormones the ovaries no longer make, and helps protect bones and heart. Less help with dryness after radiotherapy." },
        { id: "medicines", front: "Medicines for flushes", when: "If hot flushes are hard to bear", back: "Your doctor can prescribe medicines to reduce hot flushes and sweats." },
        { id: "breathing", front: "Paced respiration", when: "15 minutes, twice a day", back: "Breathe in for 5 seconds and out for 5, using your tummy muscles. Use it when a flush starts." },
        { id: "creams", front: "Creams and lubricants", when: "For vaginal dryness", back: "Non-hormonal creams 2 to 3 times a week, and water-based lubricants during sex." },
        { id: "bones", front: "Looking after your bones", when: "From now on", back: "Regular weight-bearing exercise and plenty of calcium and vitamin D." },
      ],
    },
    sources: [MAC_RADIO, CRUK_SEX, CRUK_RADIO_SIDE, MAC_MENO, NHS_EARLY_MENO, MAC_SURGERY],
    quiz: {
      question: "Why does it matter to replace hormones if the menopause starts before 45?",
      options: [{ text: "There is a higher chance of problems with the bones and heart", right: true }, { text: "It stops the cancer coming back" }, { text: "It brings periods back for good" }],
      why: "It is important to replace missing hormones if the menopause starts before 45, because there is a higher chance of problems with your bones and heart.",
    },
  },
  {
    id: "cx-vaginal-changes",
    kicker: "Vaginal changes",
    question: "Why might I need dilators, and how do I use them?",
    hook: "Radiotherapy can make the vagina narrower, shorter and drier. Dilators, used gently a few times a week, help keep examinations and sex comfortable.",
    short: "After radiotherapy the vagina can become narrower, shorter and drier, which can affect sex and make examinations uncomfortable. Your team may give you dilators to help prevent narrowing, usually starting around 4 weeks after radiotherapy ends and using them for 5 to 10 minutes about 3 times a week. Lubricants and moisturisers help with dryness, and heavy bleeding or pain should always be reported.",
    sections: [
      {
        heading: "What can change",
        paragraphs: [
          "After radiotherapy, your vagina can become narrower and shorter, and you might also have vaginal dryness. The lining of the vagina can become more sensitive and fragile, and sex can be painful.",
          "Surgery to remove the womb and cervix may shorten the vagina slightly. After you have healed, this will not usually affect whether you can have vaginal sex, because the vagina is naturally stretchy.",
        ],
      },
      {
        heading: "Why dilators are used",
        paragraphs: [
          "Your doctor will need to examine your vagina during your follow-up appointments. Dilators can help to prevent or minimise narrowing and stiffening of the vaginal tissues, so that you can still have sex and examinations comfortably.",
          "Dilators are tube-shaped objects in different sizes, made of plastic, silicone or metal. They are often used, but there is no strong evidence about how effective they are, and rarely they may cause damage if not used correctly, so your cancer team will explain how to use them safely.",
          "Regularly having vaginal sex, using a vibrator, or using lubricant and fingers inside the vagina may also help stop it narrowing.",
        ],
      },
      {
        heading: "Using a dilator",
        paragraphs: [
          "You usually start using your dilator around 4 weeks after your radiotherapy ends, though this varies between radiotherapy centres. Gently put the dilator into your vagina for 5 to 10 minutes about 3 times a week, and do not force it.",
          "If you find it difficult to get in, switch to a smaller size and try a water-soluble lubricant, and you can use the dilator in the bath if you prefer. If it is getting a tighter fit, you may need to use it more often, so talk to your doctor or nurse.",
          "Your doctor might advise you to use dilators for 2 years or more, even if you are sexually active.",
        ],
      },
      {
        heading: "Bleeding and infection",
        paragraphs: [
          "Slight bleeding or spotting after using your dilator is normal. It is not normal to have heavy bleeding or pain, so contact your doctor or nurse if you have either of these.",
          "After pelvic radiotherapy the walls of the vagina can be fragile and may bleed easily, so always tell your cancer team or GP if this happens. Thrush is more likely during pelvic radiotherapy and if the vagina is dry, and using a vaginal moisturiser regularly can help reduce the risk of infections.",
        ],
      },
      {
        heading: "Dryness",
        paragraphs: [
          "Lubricants, used before or during sex, and vaginal moisturisers, applied regularly, can help with dryness. Vaginal oestrogen may help if you have had the menopause, but it is not suitable for everyone.",
          "Your doctor can prescribe these products, or you can buy lubricants and moisturisers from a pharmacy, a supermarket or online. Oil-based lubricants can damage latex condoms, so always check the instructions.",
        ],
      },
    ],
    helps: [
      "Ask your radiotherapy team how and when to start using dilators, and which lubricant to use.",
      "Use the dilator gently for 5 to 10 minutes, about 3 times a week, without forcing it.",
      "If it is hard to insert, switch to a smaller size and use a water-soluble lubricant.",
      "Contact your doctor or nurse if you have heavy bleeding or pain.",
      "Use a vaginal moisturiser regularly to help with dryness and lower the risk of infections.",
      "Ask your cancer team, GP or sexual health service for advice if vaginal sex is painful.",
    ],
    tryThisWeek: [
      "Ask when to start dilators.",
      "Use the dilator gently, 3 times a week.",
      "Try a vaginal moisturiser.",
    ],
    ask: "When should I start using dilators, which size and lubricant should I use, and for how long?",
    interactive: {
      kind: "scenarios",
      title: "Dilator moments",
      scenarios: [
        {
          id: "spotting",
          situation: "You notice slight spotting after using your dilator.",
          options: [{ text: "This is normal, so carry on gently", best: true }, { text: "Stop using it for good" }],
          why: "Slight bleeding or spotting after using your dilator is normal.",
        },
        {
          id: "heavy",
          situation: "You have heavy bleeding or pain after using it.",
          options: [{ text: "Contact your doctor or nurse", best: true }, { text: "Wait to see if it settles" }],
          why: "It is not normal to have heavy bleeding or pain, so contact your doctor or nurse if you have either of these.",
        },
        {
          id: "tighter",
          situation: "The dilator feels a tighter fit than it did.",
          options: [{ text: "Use it more often and talk to your nurse", best: true }, { text: "Push harder to get it in" }],
          why: "If it is getting a tighter fit, you may need to use it more often, so talk to your doctor or nurse.",
        },
        {
          id: "hard",
          situation: "You find it difficult to get the dilator in.",
          options: [{ text: "Switch to a smaller size and try lubricant", best: true }, { text: "Force it" }],
          why: "If you find it difficult to get in, switch to a smaller size and try a water-soluble lubricant, and you can use the dilator in the bath if you prefer.",
        },
      ],
    },
    sources: [CRUK_RADIO_SIDE, MAC_PELVIC_SIDE, MAC_VAGINAL, CRUK_SEX, NHS_RADIO_SIDE],
    quiz: {
      question: "Is slight spotting after using a dilator normal?",
      options: [{ text: "Yes, but heavy bleeding or pain is not", right: true }, { text: "No, stop using it at once" }, { text: "Only in the first week" }],
      why: "Slight bleeding or spotting after using your dilator is normal. It is not normal to have heavy bleeding or pain, so contact your doctor or nurse if you have either of these.",
    },
  },
  {
    id: "cx-fertility",
    kicker: "Fertility",
    question: "Can I still have children after treatment?",
    hook: "After most treatment for cervical cancer, pregnancy is no longer possible. For some, the womb was kept; for others, there are different paths, and support for the loss.",
    short: "After most treatment for cervical cancer, it is not possible to get pregnant, because a radical hysterectomy removes the womb and radiotherapy affects it. For some early cancers the womb is kept, and babies have been born safely after a radical trachelectomy, with extra care in pregnancy. Losing fertility can be very hard, and a fertility specialist, counselling and other women who have been there can help.",
    sections: [
      {
        heading: "How treatment affects fertility",
        paragraphs: [
          "After most treatment for cervical cancer, you will not be able to get pregnant. A radical hysterectomy removes the womb, and after radiotherapy the womb is not able to carry a baby; radiotherapy may also stop the ovaries working.",
          "Finding out you may no longer be able to get pregnant can be very distressing. Your doctor and specialist nurse will help support you.",
        ],
      },
      {
        heading: "If the womb was kept",
        paragraphs: [
          "For very early cervical cancer, a cone biopsy or LLETZ removes areas of cervical tissue. Afterwards there is a small increase in the risk of having a baby early, or of a low birth weight, depending on how much tissue was taken away.",
          "A radical trachelectomy removes most of the cervix and the upper part of the vagina, and a permanent stitch helps keep the womb closed. Babies have been born safely after this operation, but there is a risk of miscarriage or premature birth, and the baby has to be born by caesarean section.",
          "If you become pregnant after a trachelectomy, you will be referred to a local specialist maternity service for closer monitoring.",
        ],
      },
      {
        heading: "Planning a pregnancy",
        paragraphs: [
          "If you are planning a pregnancy after treatment, your cancer doctor can give you advice about when it is safest to start trying. They can talk to you about how long you may need to recover, any health checks you may need, and any additional risks during pregnancy.",
          "Research suggests that for almost all types of cancer, pregnancy does not make cancer more likely to come back.",
        ],
      },
      {
        heading: "Other ways to become a parent",
        paragraphs: [
          "Eggs, embryos or ovarian tissue stored before treatment could be used for fertility treatment and a surrogate pregnancy, where someone else carries the baby. IVF using donor eggs, surrogacy and adoption are other options.",
          "Some people foster or adopt, some co-parent, and some decide not to have children. There is no right or wrong way to feel.",
        ],
      },
      {
        heading: "Coping with the loss",
        paragraphs: [
          "Losing fertility can be very difficult to cope with, and even if you were not planning any children, it can be quite a shock. It is the end of a particular phase of your life, on top of coping with a diagnosis of cancer.",
          "It may help to share your worries or sense of loss with other women who have been through similar experiences, through a local support group or an online forum. If you need more help, talk to your GP, nurse or specialist about counselling.",
        ],
      },
    ],
    helps: [
      "If you are worried about fertility, ask your specialist cancer doctor to refer you to a fertility specialist.",
      "Ask your cancer doctor when it would be safest to try for a pregnancy, and which health checks you may need.",
      "Share your feelings with other women who have been through similar experiences, in a support group or online forum.",
      "Talk to your GP, nurse or specialist about counselling if you need more help.",
      "Talk about your feelings with your partner, family or friends, or with your nurse or cancer doctor.",
      "Call the Cancer Research UK information nurses on 0808 800 4040, 9am to 5pm, Monday to Friday.",
    ],
    tryThisWeek: [
      "Ask about a fertility specialist.",
      "Find a support group or forum.",
      "Ask about counselling.",
    ],
    ask: "Is it still possible for me to get pregnant, and could you refer me to a fertility specialist?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments and fertility",
      intro: "Turn each card to see how each treatment affects fertility.",
      cards: [
        { id: "lletz", front: "LLETZ or cone biopsy", when: "Very early cancer (stage 1A1)", back: "Removes areas of cervical tissue. A small increase in the risk of an early birth or a low birth weight." },
        { id: "trachelectomy", front: "Radical trachelectomy", when: "Small stage 1 cancer", back: "Keeps the womb. Babies have been born safely, with a risk of miscarriage or premature birth and a caesarean birth." },
        { id: "hysterectomy", front: "Hysterectomy", when: "Standard treatment for early-stage cancer", back: "Removes the womb, so it is not possible to get pregnant afterwards." },
        { id: "radiotherapy", front: "Radiotherapy", when: "Often given with chemotherapy", back: "Affects the womb so it is not able to carry a baby, and may stop the ovaries working." },
        { id: "stored", front: "Stored eggs or embryos", when: "Collected before treatment", back: "Could be used for fertility treatment and a surrogate pregnancy." },
      ],
    },
    sources: [CRUK_FERTILITY, MAC_SURGERY, MAC_RADIO, MAC_FERTILITY, NHS_EARLY_MENO, MAC_MENO],
    quiz: {
      question: "After radiotherapy for cervical cancer, can the womb carry a baby?",
      options: [{ text: "No, the womb is not able to carry a baby", right: true }, { text: "Yes, after a year" }, { text: "Yes, if the ovaries were moved" }],
      why: "A radical hysterectomy removes the womb, and after radiotherapy the womb is not able to carry a baby; radiotherapy may also stop the ovaries working.",
    },
  },
  {
    id: "cx-bowels-bladder",
    kicker: "Bowels and bladder",
    question: "Why have my bowels and bladder changed, and what helps?",
    hook: "Changes to the bowel and bladder are some of the most common after-effects of treatment. They are worth raising: there is real help, and some symptoms always need checking.",
    short: "Radiotherapy can make the bladder less stretchy and the bowel looser, and radical surgery can affect the nerves that control them. These changes are common and can be distressing, but they do not happen to everyone and there is help. Some symptoms, such as blood from the back passage or in the urine, should always be checked by a doctor as soon as possible.",
    sections: [
      {
        heading: "Why changes happen",
        paragraphs: [
          "Radiotherapy can make the bladder less elastic, so it will not stretch as far and feels full sooner, and you may be more prone to urine infections. It can also irritate the lining of the bowel, so bowel motions may be looser or more frequent.",
          "After a radical hysterectomy or trachelectomy, nerves in the tissue around the cervix sometimes need to be cut, which can affect the bladder and bowel. A small number of women have problems emptying the bladder and may go home with a catheter for several weeks.",
          "These effects do not happen to everyone, and it is difficult to predict who will be affected.",
        ],
      },
      {
        heading: "How common they are",
        paragraphs: [
          "More than 60 out of every 100 women who had radiotherapy after radical surgery report that bowel problems are the most distressing symptom. More than 20 out of every 100 women struggle with bladder problems after chemoradiation.",
          "These symptoms can be distressing and affect your quality of life. Talk to your doctor or specialist nurse if you are struggling with bowel or bladder problems after treatment.",
        ],
      },
      {
        heading: "Symptoms to get checked",
        paragraphs: [
          "Always talk to your doctor if you pass blood from your back passage, wake up from sleep to open your bowels, need to rush to open your bowels or have bowel leakage. These symptoms might not be caused by radiotherapy, so it is important to find out the cause as soon as possible.",
          "Blood in the urine should always be checked by a doctor as soon as possible. In rare cases radiotherapy can cause constipation, pain, sickness and bloating, and your doctor needs to check your bowel for a possible blockage.",
        ],
      },
      {
        heading: "Day-to-day tips",
        paragraphs: [
          "Try to drink at least 1 to 2 litres of fluids a day, regularly throughout the day, and more if it is hot or you are exercising. Cut down on alcohol, fizzy drinks, caffeine, acidic drinks and drinks with artificial sweeteners, and try not to go to the toilet just in case.",
          "Keeping active, keeping to a healthy weight and avoiding constipation all help protect your pelvic floor muscles. Smoking or vaping can make bladder or bowel problems worse.",
          "Planning ahead can help you feel more confident going out: find out where the toilets are, pack a bag of supplies and carry Macmillan's free toilet card. The National Key Scheme gives access to about 7,000 locked disabled toilets across the UK.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Pelvic floor exercises, retraining your bladder or lifestyle changes can help with urine leakage, and your doctor or specialist nurse can refer you to a physiotherapist. You might be able to take medicine to firm up your bowel motions and make them less frequent.",
          "Your doctor or nurse can refer you to specialists such as a gastroenterologist, a urologist or a continence adviser, and a few hospitals have clinics for late effects. Doctors and nurses are used to talking about these problems, so try not to let embarrassment stop you getting advice.",
        ],
      },
    ],
    helps: [
      "Always talk to your doctor about blood from your back passage, waking at night to open your bowels, needing to rush, or leakage.",
      "Get blood in your urine checked by a doctor as soon as possible.",
      "Drink at least 1 to 2 litres of fluids a day, regularly throughout the day.",
      "Cut down on alcohol, fizzy drinks, caffeine, acidic drinks and artificial sweeteners.",
      "Pack a bag of supplies and carry Macmillan's free toilet card when you go out.",
      "Ask your doctor or specialist nurse about a physiotherapist or continence adviser.",
    ],
    tryThisWeek: [
      "Drink regularly through the day.",
      "Cut down on fizzy and caffeinated drinks.",
      "Pack a going-out bag.",
    ],
    ask: "Could my bowel or bladder symptoms be late effects, and could you refer me to a specialist or continence adviser?",
    interactive: {
      kind: "signs",
      title: "Changes to tell your doctor",
      intro: "Tick any you have noticed. They can help your doctor or specialist nurse find the right help.",
      signs: ["Blood from your back passage", "Waking from sleep to open your bowels", "Needing to rush to open your bowels", "Bowel leakage or soiling", "Blood in your urine", "Burning when you pass urine", "Needing to pass urine more often or urgently", "Leaking urine", "Difficulty passing urine", "Constipation, pain, sickness and bloating"],
      after: "Tell your doctor or specialist nurse. Blood from your back passage or in your urine should be checked by a doctor as soon as possible.",
      copyHeading: "Bowel and bladder changes I have noticed",
    },
    sources: [MAC_LATE, CRUK_RADIO_SIDE, MAC_BB_TIPS, CRUK_COPING, MAC_AFTER_SURGERY, CRUK_SURGERY_PROBLEMS],
    quiz: {
      question: "Which of these should you always talk to your doctor about?",
      options: [{ text: "Passing blood from your back passage", right: true }, { text: "Passing a little more wind after beans" }, { text: "Going to the toilet once a day" }],
      why: "Always talk to your doctor if you pass blood from your back passage, wake up from sleep to open your bowels, need to rush to open your bowels or have bowel leakage.",
    },
  },
  {
    id: "cx-relationships",
    kicker: "Intimacy",
    question: "How might treatment change sex and intimacy, and what helps?",
    hook: "Sex is safe again after a few weeks of healing, and it cannot bring the cancer back. Dryness, pain and nerves can get in the way, and there is help for each.",
    short: "After a few weeks of healing, it is perfectly safe to have sex again, and sex will not make cervical cancer worse or more likely to come back. Your partner cannot catch it. Treatment can lower desire, change sensation and cause dryness or pain, but these often improve, and lubricants, different positions, talking and specialist help all make a difference.",
    sections: [
      {
        heading: "When you can start again",
        paragraphs: [
          "After surgery, not having sex for at least 6 weeks gives your wound time to heal properly. After that you can have sex, but it is normal to need more time before you feel ready.",
          "If you want to, you can go back to a normal sex life within a few weeks of finishing radiotherapy or having surgery. After that time to heal it is perfectly safe: sex will not make your cancer worse or make it more likely to come back.",
        ],
      },
      {
        heading: "Your partner cannot catch it",
        paragraphs: [
          "Cervical cancer is not infectious, so your partner cannot catch it from you. This can be confusing, because cervical cancer is linked to HPV, which can be passed between sexual partners.",
          "If you are having chemotherapy, it is a good idea for your partner to use a condom if you have penetrative sex. This is just a precaution.",
        ],
      },
      {
        heading: "Changes that can get in the way",
        paragraphs: [
          "Pelvic radiotherapy can lower your sex drive, change sexual sensation, and bring vaginal changes and menopausal symptoms. These difficulties may be temporary and gradually improve, and even permanent changes can often be improved.",
          "If sex feels different, take time to explore what feels different and what feels good now, and if you have a partner, explain how things have changed. Surgery to remove the womb should not affect your ability to reach orgasm, but orgasms may feel different to before.",
        ],
      },
      {
        heading: "Making sex more comfortable",
        paragraphs: [
          "If vaginal sex is painful, use a lubricant if your vagina feels dry, and take control of the depth and speed of penetration: being on top or on your side may help. Relaxation techniques before sex, and experimenting with positions, may help too.",
          "There are other ways to give and receive pleasure. If bladder changes are a worry, go to the toilet just before sex and try to avoid drinking lots of fluid for about an hour before.",
        ],
      },
      {
        heading: "Talking and getting help",
        paragraphs: [
          "If you are worried, anxious or depressed, you are not likely to feel like having sex, so give yourself plenty of time and talk things over with your partner. You can explain that a lack of interest in sex does not mean you have lost interest in them.",
          "Talk to your cancer team, GP or practice nurse if sex is affected, as some treatments work better when started early. Your GP can put you in touch with a sex therapist, though for most people it just takes a little time.",
        ],
      },
    ],
    helps: [
      "Wait at least 6 weeks after surgery before having sex, then take the time you need.",
      "Use a lubricant if your vagina feels dry, and try positions that let you control depth and speed.",
      "Go to the toilet just before sex, and avoid drinking lots of fluid for about an hour before.",
      "Talk things over with your partner, and explain that less interest in sex is not less interest in them.",
      "Tell your cancer team, GP or practice nurse if sex is affected; some treatments work better when started early.",
      "Ask your GP about seeing a sex therapist.",
    ],
    tryThisWeek: [
      "Talk things over with your partner.",
      "Try a lubricant.",
      "Mention it to your cancer team.",
    ],
    ask: "When is it safe for me to have sex again, and what can help with dryness or pain?",
    interactive: {
      kind: "scenarios",
      title: "Closeness moments",
      scenarios: [
        {
          id: "ready",
          situation: "It is six weeks since surgery, but you do not feel ready.",
          options: [{ text: "Give yourself more time", best: true }, { text: "Push yourself to have sex" }],
          why: "After that you can have sex, but it is normal to need more time before you feel ready.",
        },
        {
          id: "catch",
          situation: "Your partner worries about catching the cancer.",
          options: [{ text: "Explain it is not infectious", best: true }, { text: "Avoid being close" }],
          why: "Cervical cancer is not infectious, so your partner cannot catch it from you.",
        },
        {
          id: "pain",
          situation: "Vaginal sex has become painful.",
          options: [{ text: "Try lubricant and a position that gives you control", best: true }, { text: "Put up with the pain" }],
          why: "If vaginal sex is painful, use a lubricant if your vagina feels dry, and take control of the depth and speed of penetration: being on top or on your side may help.",
        },
        {
          id: "come-back",
          situation: "You worry that sex might bring the cancer back.",
          options: [{ text: "Know that sex will not make it more likely to come back", best: true }, { text: "Avoid sex for good" }],
          why: "After that time to heal it is perfectly safe: sex will not make your cancer worse or make it more likely to come back.",
        },
      ],
    },
    sources: [CRUK_SEX, MAC_VAGINAL, MAC_AFTER_SURGERY, MAC_LATE, MAC_EMOTIONS],
    quiz: {
      question: "Can sex make cervical cancer more likely to come back?",
      options: [{ text: "No, it is perfectly safe after time to heal", right: true }, { text: "Yes, for the first five years" }, { text: "Only after radiotherapy" }],
      why: "After that time to heal it is perfectly safe: sex will not make your cancer worse or make it more likely to come back.",
    },
  },
  {
    id: "cx-work",
    kicker: "Work",
    question: "How do I go back to work, and what help is there with money?",
    hook: "The law treats cancer as a disability, so your employer must consider adjustments. A gradual return, and the right money advice, make the step easier.",
    short: "If you have or have had cancer, the law considers this a disability, and an employer who knows must consider reasonable adjustments, such as a phased return. After surgery, strenuous activity and heavy lifting are avoided for several weeks. Access to Work, benefits and free money advice from Macmillan can help with costs, so get advice before your hours or income change.",
    sections: [
      {
        heading: "Your rights",
        paragraphs: [
          "If you have or have ever had cancer, the law considers this a disability. This means you cannot be treated less favourably because you have cancer, or for reasons connected to it.",
          "If your employer is aware you have had cancer, they must consider making reasonable adjustments to help you return to work. If you apply for a new job in England, Scotland or Wales, the Equality Act 2010 says employers can ask about disability but must follow the law, and in Northern Ireland the Disability Discrimination Act 1995 says they cannot discriminate against you.",
        ],
      },
      {
        heading: "Planning your return",
        paragraphs: [
          "You might carry on working with reduced hours or changes to your job, change jobs, or stop working for a while or for good. Returning can help you feel you are getting back to normal, but it can be a big step and is not right for everyone.",
          "After surgery, avoid strenuous activity, heavy lifting, pushing and pulling for several weeks: usually about 6 weeks after laparoscopic surgery and about 12 weeks after abdominal surgery. Late effects can also make working more difficult.",
          "If you can, plan to return to work gradually. Your recovery may not always be straightforward, so try to stay flexible.",
        ],
      },
      {
        heading: "Reasonable adjustments",
        paragraphs: [
          "Reasonable adjustments are changes to the workplace or your working arrangements that allow you to keep working or return. They could include a phased return, different working hours, extra breaks to help you cope with tiredness or a parking space near your work.",
          "Discuss any adjustments with your employer and agree on them before they are put in place. It can help to write notes in your meetings, or to take someone with you.",
        ],
      },
      {
        heading: "Help with costs",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition. It could give you a grant for things like specialist equipment, or the cost of travelling to work if you cannot use public transport.",
          "An Access to Work grant will not affect any other benefits you get, and you will not have to pay it back. It will not pay for reasonable adjustments, which are the changes your employer must legally make.",
        ],
      },
      {
        heading: "Money and benefits",
        paragraphs: [
          "You might be able to get benefits, sick pay, help with prescription and travel costs, or grants, and many hospitals have a social worker for people with cancer. Getting help early can mean these things do not become a big issue later.",
          "Returning to work can change the benefits you get, so it is important to get advice from an experienced benefits adviser. Macmillan's money advisers and welfare rights advisers can be reached free on 0808 808 0000.",
        ],
      },
    ],
    helps: [
      "Plan to return to work gradually if you can, and try to stay flexible.",
      "Discuss and agree reasonable adjustments, such as a phased return or extra breaks, with your employer.",
      "Write notes in return-to-work meetings, or take someone with you.",
      "Ask your physiotherapist or nurse for advice about physical activity that is safe for you after surgery.",
      "Check whether Access to Work could help with equipment or travel costs.",
      "Get advice from an experienced benefits adviser before your hours or income change.",
    ],
    tryThisWeek: [
      "Ask about a phased return.",
      "Take notes at work meetings.",
      "Check Access to Work.",
    ],
    ask: "When might I be ready to go back to work, and what should I avoid doing at first?",
    interactive: {
      kind: "scenarios",
      title: "Back at work",
      scenarios: [
        {
          id: "hours",
          situation: "Your manager asks when you can be back on full hours.",
          options: [{ text: "Ask about a phased return", best: true }, { text: "Go straight back to full hours" }],
          why: "They could include a phased return, different working hours, extra breaks to help you cope with tiredness or a parking space near your work.",
        },
        {
          id: "lifting",
          situation: "Your job involves heavy lifting, and you had abdominal surgery a month ago.",
          options: [{ text: "Avoid it for now and ask your nurse or physiotherapist", best: true }, { text: "Lift as you did before" }],
          why: "After surgery, avoid strenuous activity, heavy lifting, pushing and pulling for several weeks: usually about 6 weeks after laparoscopic surgery and about 12 weeks after abdominal surgery.",
        },
        {
          id: "travel",
          situation: "You cannot use public transport to get to work.",
          options: [{ text: "Check whether Access to Work can help", best: true }, { text: "Pay for taxis without asking" }],
          why: "It could give you a grant for things like specialist equipment, or the cost of travelling to work if you cannot use public transport.",
        },
        {
          id: "benefits",
          situation: "Going back part time might change your benefits.",
          options: [{ text: "Talk to an experienced benefits adviser first", best: true }, { text: "Go back and hope for the best" }],
          why: "Returning to work can change the benefits you get, so it is important to get advice from an experienced benefits adviser.",
        },
      ],
    },
    sources: [MAC_WORK, GOV_ATW, MAC_AFTER_SURGERY, MAC_LATE, CRUK_COPING, MAC_MONEY],
    quiz: {
      question: "What will an Access to Work grant not pay for?",
      options: [{ text: "Reasonable adjustments your employer must make", right: true }, { text: "Specialist equipment" }, { text: "Travel to work if you cannot use public transport" }],
      why: "It will not pay for reasonable adjustments, which are the changes your employer must legally make.",
    },
  },
  {
    id: "cx-mood",
    kicker: "Mood",
    question: "Why do I feel low now treatment has ended, and where can I get help?",
    hook: "Many people feel lowest just when everyone expects them to feel better. It is common, it often eases with time, and help is there if it does not.",
    short: "It is common to feel low, anxious or worried about the cancer coming back once treatment ends, while you are still coping with side effects and finding a new normal. For most people the sadness gets better, but if it lasts for weeks or months it may be depression, which is a real illness that can be treated. Talk to your GP or team, and if you need help now, call 111 and select the mental health option, or Samaritans on 116 123.",
    sections: [
      {
        heading: "Why the end can be hard",
        paragraphs: [
          "When your treatment ends, you may feel relieved, but you may still have side effects from treatment and other emotions to cope with. You will need time to find out what is now normal for you.",
          "Even after treatment, people may expect you to get back to normal straight away, and may not know that you still need support. A hospital appointment can also bring back anxiety you had about your cancer.",
        ],
      },
      {
        heading: "Worry about it coming back",
        paragraphs: [
          "Worrying about the cancer coming back is common after treatment, and it is common to worry that every symptom is linked to cancer. Many people struggle with feelings of uncertainty, but they often get better with time.",
          "Focusing on what you can control may help, such as your well-being, talking about your feelings and doing activities you enjoy. Constantly checking for symptoms can make you feel anxious, so if you find yourself doing this, talk to someone from your cancer team or your primary care team.",
        ],
      },
      {
        heading: "Guilt and blame",
        paragraphs: [
          "You may feel guilty or blame yourself for the cancer. Getting cancer is never anyone's fault: HPV is very common and anyone can get it.",
          "There is no evidence that feeling anxious or sad can affect your recovery. Talking about these feelings openly and getting the right support can help you feel more in control.",
        ],
      },
      {
        heading: "Low mood or depression?",
        paragraphs: [
          "Feeling sad is a natural reaction to change or loss, and for most people these periods of sadness get better. But for some people, the sadness may continue or get worse.",
          "Depression is more than simply feeling unhappy or fed up for a few days: you feel persistently sad for weeks or months. It can bring hopelessness, losing interest in things you used to enjoy, tiredness and poor sleep, and it is a real illness, not a sign of weakness.",
          "With the right treatment and support, most people with depression can make a full recovery. If you think you may be depressed, seek help from a GP: it is best not to delay.",
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
      "See a GP if you think you may be depressed; it is best not to delay.",
      "Ask your doctor or nurse about a referral to a psychologist or counsellor.",
      "Talk to your doctor or nurse if you find you are avoiding people a lot of the time.",
      "Call the Macmillan Support Line free on 0808 808 00 00, 7 days a week, 8am to 8pm.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "For urgent mental health help, call 111 and select the mental health option; call 999 if a life is at risk.",
    ],
    tryThisWeek: [
      "Tell your GP how you feel.",
      "Save the Macmillan Support Line number.",
      "Save 116 123 in your phone.",
    ],
    ask: "Could my low mood be depression, and could you refer me to a counsellor or psychologist?",
    interactive: {
      kind: "signs",
      title: "Feelings to mention",
      intro: "Tick any that have lasted. They can help your GP or team understand how you have been.",
      signs: ["Feeling sad for weeks or months", "Feeling hopeless", "Losing interest in things you used to enjoy", "Feeling very tearful", "Feeling constantly tired or sleeping badly", "No appetite or sex drive", "Avoiding people a lot of the time", "Constantly checking for symptoms", "Feeling that life is no longer worth living"],
      after: "Tell your GP, cancer doctor or nurse. For urgent help, call 111 and select the mental health option, or Samaritans on 116 123. Call 999 if a life is at risk.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_FINISHING, MAC_EMOTIONS, MAC_WORRIES, CRUK_FOLLOW_UP, NHS_DEPRESSION, NHS_URGENT, SAMARITANS, EVE_CERVICAL],
    quiz: {
      question: "Which is true about depression?",
      options: [{ text: "With the right treatment and support, most people recover", right: true }, { text: "It is a sign of weakness" }, { text: "It always passes in a few days" }],
      why: "With the right treatment and support, most people with depression can make a full recovery.",
    },
  },
];
