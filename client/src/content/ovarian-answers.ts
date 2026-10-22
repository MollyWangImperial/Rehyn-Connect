import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Ovarian cancer page's pieces (content/library-conditions/cancer-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from Target Ovarian
// Cancer, Ovarian Cancer Action, Macmillan Cancer Support, Cancer Research UK and the NHS, with the
// government's Access to Work page and Samaritans for the work and mood answers. The answers describe
// treatment, recovery and living with after-effects. There are no survival or life-expectancy figures, and
// nothing is a prediction for one person. General information only; it never replaces what a person's own
// gynaecological cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const toc = (label: string, path: string): LearnSource => ({ label: `Target Ovarian Cancer: ${label}`, url: `https://targetovariancancer.org.uk/${path}` });
const oca = (label: string, path: string): LearnSource => ({ label: `Ovarian Cancer Action: ${label}`, url: `https://ovarian.org.uk/ovarian-cancer/living-with-ovarian-cancer/${path}` });

const NHS_TREAT = nhs("Treatment for ovarian cancer", "conditions/ovarian-cancer/treatment/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_HYST = nhs("Hysterectomy: recovery", "tests-and-treatments/hysterectomy/recovery/");
const NHS_DEPRESSION = nhs("Depression in adults", "mental-health/conditions/depression-in-adults/overview/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const MAC_TREAT = mac("Ovarian cancer treatment", "ovarian-cancer/ovarian-cancer-treatment");
const MAC_SURGERY = mac("Ovarian cancer surgery", "treatments-and-drugs/ovarian-cancer-surgery");
const MAC_CHEMO = mac("Chemotherapy for ovarian cancer", "treatments-and-drugs/chemotherapy-for-ovarian-cancer");
const MAC_TARGETED = mac("Targeted therapies for ovarian cancer", "treatments-and-drugs/targeted-therapies-for-ovarian-cancer");
const MAC_STAGING = mac("Staging and grading of ovarian cancer", "ovarian-cancer/staging-and-grading-of-ovarian-cancer");
const MAC_OLAPARIB = mac("Olaparib", "treatments-and-drugs/olaparib");
const MAC_AFTER_SURGERY = mac("What happens after surgery", "treatment/types-of-treatment/surgery/what-happens-after-surgery");
const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_BLADDER_BOWEL = mac("Bladder and bowel problems", "impacts-of-cancer/bladder-and-bowel-problems");
const MAC_BLOCKED_BOWEL = mac("Blocked bowel (bowel obstruction)", "impacts-of-cancer/blocked-bowel");
const MAC_RIGHTS = mac("Cancer and employment rights", "impacts-of-cancer/work-and-cancer/cancer-and-employment-rights");
const MAC_ADJUSTMENTS = mac("Reasonable adjustments", "impacts-of-cancer/work-and-cancer/reasonable-adjustments");
const MAC_FINISHING = mac("Finishing cancer treatment", "after-treatment/finishing-treatment");
const MAC_WORRIES = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");

const CRUK_STAGES = cruk("About stages and grades of ovarian cancer", "ovarian-cancer/stages-grades/about-stages-and-grades");
const CRUK_FOLLOW_UP = cruk("Follow up after ovarian cancer treatment", "ovarian-cancer/treatment/follow-up");
const CRUK_COPING = cruk("Coping and support when you have ovarian cancer", "ovarian-cancer/living-with/coping");

const TOC_STAGES = toc("Stages and grades of ovarian cancer", "about-ovarian-cancer/what-ovarian-cancer/stages-and-grades-ovarian-cancer");
const TOC_FOLLOW_UP = toc("Follow up appointments and monitoring tests", "follow-appointments-and-monitoring-tests");
const TOC_SCANXIETY = toc("Scanxiety (scan anxiety)", "scanxiety-scan-anxiety");
const TOC_HEREDITARY = toc("Hereditary ovarian cancer", "about-ovarian-cancer/genetic-genomic-testing/hereditary-ovarian-cancer");
const TOC_TESTED = toc("Getting tested", "about-ovarian-cancer/genetic-genomic-testing/hereditary-ovarian-cancer/getting-tested");
const TOC_HRD = toc("Homologous recombination deficiency", "about-ovarian-cancer/genetic-genomic-testing/homologous-recombination-deficiency");
const TOC_FAMILY = toc("What does a positive result mean for my family?", "about-ovarian-cancer/hereditary-ovarian-cancer/positive-result-for-family");
const TOC_TARGETED = toc("Targeted treatments for ovarian cancer", "about-ovarian-cancer/treatment/targeted-treatments-ovarian-cancer");
const TOC_PARP_SIDE = toc("PARP inhibitor treatment side effects", "parp-inhibitors-side-effects");
const TOC_MENOPAUSE = toc("Surgical menopause", "about-ovarian-cancer/your-situation/im-younger-woman-diagnosis/surgical-menopause");
const TOC_SEX = toc("Ovarian cancer, sex and intimacy", "support-for-you/your-wellbeing/ovarian-cancer-sex-and-intimacy");
const TOC_STOMA = toc("Creation of a stoma", "about-ovarian-cancer/treatment/creation-stoma");
const TOC_SUPPORT_LINE = toc("Support line", "support-for-you/support-line");

const OCA_RECOVERY = oca("Recovering from ovarian cancer surgery", "ovarian-cancer-treatment/ovarian-cancer-surgery/recovering-from-ovarian-cancer-surgery/");
const OCA_SEX = oca("Sex after an ovarian cancer diagnosis", "sex-after-an-ovarian-cancer-diagnosis/");
const OCA_RELATIONSHIPS = oca("Navigating relationships with cancer", "relationships/");
const OCA_PRACTICAL = oca("Practical support and advice", "practical-support-and-advice/");

const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work: get support if you have a disability or health condition", url: "https://www.gov.uk/access-to-work" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const ovarianAnswers: LearnArticle[] = [
  {
    id: "ov-what-you-had",
    kicker: "Your treatment",
    question: "What was each part of my treatment for?",
    hook: "Surgery, chemotherapy and, for some, maintenance tablets or drips: each part of the plan had its own job.",
    short: "The main treatments for ovarian cancer are surgery and chemotherapy, and most people have both. Some then have maintenance treatment with a targeted drug, such as bevacizumab or a PARP inhibitor, to help control the cancer. Which treatments you had depended on the type, stage and grade of the cancer, your general health and your own preferences.",
    sections: [
      {
        heading: "Why your plan was yours",
        paragraphs: [
          "Treatment for ovarian cancer depends on the size and type of the cancer, where it is, whether it has spread, and your general health. The specialist care team explains the treatments, their benefits and side effects, and works with you to create a treatment plan that is best for you.",
          "Depending on the stage, the aim of treatment may be to cure the cancer or to control it for as long as possible. Your cancer doctor and specialist nurse will explain the aim of your treatment to you.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Almost everyone with ovarian cancer needs surgery, and it also helps doctors find out the type and stage of the cancer. The surgeon usually removes the ovaries and fallopian tubes, the womb and cervix, and the omentum, a layer of tissue that covers the stomach and part of the bowel.",
          "If the cancer has spread, the surgeon tries to remove as much of it as possible, which may mean removing lymph nodes and sometimes part of the bowel. If you still had periods, removing the womb and both ovaries brings on the menopause.",
        ],
      },
      {
        heading: "Chemotherapy",
        paragraphs: [
          "Chemotherapy uses anti-cancer drugs to destroy cancer cells. It may be given after surgery to reduce the risk of the cancer coming back, before surgery to shrink the cancer, or as the main treatment if surgery is not the best option.",
          "You usually have a combination of carboplatin and paclitaxel, into a vein, in a hospital chemotherapy day unit. Chemotherapy after surgery usually starts about 4 weeks after the operation, but it can be up to 12 weeks after, and most courses are 6 cycles.",
          "Some people have chemotherapy put into the tummy during surgery, called HIPEC. Its side effects can be different from chemotherapy given into a vein.",
        ],
      },
      {
        heading: "Maintenance treatment",
        paragraphs: [
          "Some people have a targeted drug with or after chemotherapy to help control the cancer. This is called maintenance treatment.",
          "Bevacizumab is given into a vein as a drip, usually every 3 weeks, with chemotherapy and then on its own. PARP inhibitors, such as olaparib, niraparib and rucaparib, are tablets or capsules taken every day, usually starting a few weeks after the last chemotherapy.",
        ],
      },
      {
        heading: "When to call straight away",
        paragraphs: [
          "During chemotherapy, call your care team now if you have a high temperature or other signs of an infection, such as a sore throat, a cough, diarrhoea or pain when peeing. Call them now too if you have pain, swelling and warmth in a leg or arm, or sudden breathlessness and sharp chest pain, as these can be signs of a blood clot.",
          "Call NHS 111 if you are not sure how to contact your care team. If you have symptoms or side effects that worry you at any other time, talk to your specialists: you do not need to wait for your next check-up.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor or specialist nurse to explain the aim of your treatment.",
      "Talk to your specialists about symptoms or side effects that worry you; you do not need to wait for your next check-up.",
      "During chemotherapy, call your care team now if you have a high temperature or signs of an infection.",
      "Call NHS 111 if you are not sure how to contact your care team.",
      "If you want to talk things through, call the Macmillan Support Line free on 0808 808 00 00.",
    ],
    tryThisWeek: [
      "Ask what your treatment aimed to do.",
      "Report worrying side effects now.",
      "Call your team now if you get a fever.",
    ],
    ask: "Which treatments did I have, and what was each one for in my case?",
    interactive: {
      kind: "flip-cards",
      title: "Your treatments, card by card",
      intro: "Turn each card to see what each treatment was for.",
      cards: [
        { id: "surgery", front: "Surgery", when: "Almost everyone needs it", back: "Removes the ovaries, fallopian tubes, womb and omentum, and helps doctors find the type and stage." },
        { id: "chemotherapy", front: "Chemotherapy", when: "Before or after surgery, or on its own", back: "Usually carboplatin and paclitaxel into a vein. Most courses are 6 cycles." },
        { id: "hipec", front: "HIPEC", when: "During surgery, for some people", back: "Chemotherapy put into the tummy during the operation. Its side effects can be different." },
        { id: "bevacizumab", front: "Bevacizumab", when: "A drip, usually every 3 weeks", back: "A targeted drug given with chemotherapy, then on its own as maintenance treatment." },
        { id: "parp", front: "PARP inhibitor", when: "Daily tablets after chemotherapy", back: "Olaparib, niraparib or rucaparib, taken as maintenance treatment to help control the cancer." },
      ],
    },
    sources: [NHS_TREAT, MAC_TREAT, CRUK_STAGES, MAC_SURGERY, MAC_CHEMO, MAC_TARGETED, NHS_CHEMO],
    quiz: {
      question: "What is maintenance treatment?",
      options: [{ text: "A targeted drug with or after chemotherapy, to help control the cancer", right: true }, { text: "A second operation" }, { text: "A type of physiotherapy" }],
      why: "Some people have a targeted drug with or after chemotherapy to help control the cancer. This is called maintenance treatment.",
    },
  },
  {
    id: "ov-stage",
    kicker: "Stage and grade",
    question: "What do the stage and grade of my cancer mean?",
    hook: "The stage says how far the cancer had spread; the grade says how the cells looked. Together they helped shape your treatment.",
    short: "The stage of ovarian cancer describes its size and whether it has spread, from stage 1, the earliest, to stage 4, the most advanced. The grade describes how much the cancer cells look like normal cells and gives your doctor an idea of how the cancer might behave. Knowing both helps your team plan the best treatment for you.",
    sections: [
      {
        heading: "Finding the stage",
        paragraphs: [
          "The stage of a cancer describes its size and whether it has spread from where it started. Your doctor might not be able to tell you the exact stage until you have had surgery.",
          "Doctors use the FIGO staging system for cancers of the ovary, fallopian tube and peritoneum. There are four stages, numbered 1 to 4, and the system uses numbers and letters to describe smaller sub-stages.",
        ],
      },
      {
        heading: "Stages 1 and 2",
        paragraphs: [
          "Stage 1 is described as early cancer. The cancer is in 1 or both ovaries or fallopian tubes, and in stage 1c the surface has broken, or cancer cells are on the surface or in the fluid in the tummy or pelvis.",
          "In stage 2, the cancer has grown into nearby areas inside the pelvis, such as the womb, the bowel or the bladder.",
        ],
      },
      {
        heading: "Stages 3 and 4",
        paragraphs: [
          "In stage 3, the cancer has also spread to lymph nodes in the pelvis or tummy, or to parts of the peritoneum outside the pelvis. The peritoneum is the layer of tissue that covers the ovaries and fallopian tubes.",
          "In stage 4, the cancer has spread to other parts of the body outside the tummy. This includes a build-up of fluid in the lining of the lungs, or spread to the inside of the liver or spleen.",
        ],
      },
      {
        heading: "The grade",
        paragraphs: [
          "The grade tells you how much the cancer cells look like normal cells under a microscope, and it gives your doctor an idea of how the cancer might behave. Serous cancers are described as high grade or low grade, and some other types are given a number grade from 1 to 3.",
          "High grade serous cancer is the most common type of ovarian cancer. Its cells look different to normal cells and tend to grow and spread more quickly, and it is usually treated with a combination of chemotherapy and surgery.",
          "Low grade serous cancer is less common and usually slower growing. Surgery is the most effective treatment, although chemotherapy and hormone therapy are also used.",
        ],
      },
      {
        heading: "Why it matters now",
        paragraphs: [
          "Knowing the stage and grade helps your doctors and nurses plan the best treatment for you. Understanding the stage, type and grade can also help when you talk about your diagnosis and treatment plan with your team.",
          "If you have questions about your stage and what it means for your treatment options, Target Ovarian Cancer's specialist nurses can talk them through on 0808 802 6000.",
        ],
      },
    ],
    helps: [
      "Ask your team which stage, type and grade your cancer was, and what each means for your treatment.",
      "Ask your healthcare team to explain things again if you need them to.",
      "Make a list of questions before your appointment, and take someone with you.",
      "Call Target Ovarian Cancer's specialist nurses on 0808 802 6000 with questions about your stage.",
    ],
    tryThisWeek: [
      "Ask your stage, type and grade.",
      "Write questions before appointments.",
      "Take someone with you.",
    ],
    ask: "What stage, type and grade was my cancer, and how did that shape my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "Stage and grade, card by card",
      intro: "Turn each card to see what each word on your results means.",
      cards: [
        { id: "stage-1", front: "Stage 1", when: "Early cancer", back: "In 1 or both ovaries or fallopian tubes. In stage 1c the surface has broken or cells are in the fluid." },
        { id: "stage-2", front: "Stage 2", when: "Grown into the pelvis", back: "Grown into nearby areas inside the pelvis, such as the womb, the bowel or the bladder." },
        { id: "stage-3", front: "Stage 3", when: "Spread outside the pelvis", back: "Also in lymph nodes in the pelvis or tummy, or parts of the peritoneum outside the pelvis." },
        { id: "stage-4", front: "Stage 4", when: "Spread beyond the tummy", back: "Fluid in the lining of the lungs, or spread inside the liver or spleen or to organs outside the tummy." },
        { id: "high-grade", front: "High grade serous", when: "The most common type", back: "Cells look different to normal cells and tend to grow faster. Usually treated with chemotherapy and surgery." },
        { id: "low-grade", front: "Low grade serous", when: "Less common", back: "Usually slower growing. Surgery is the most effective treatment." },
      ],
    },
    sources: [MAC_STAGING, CRUK_STAGES, TOC_STAGES, CRUK_COPING],
    quiz: {
      question: "When might your doctor be able to tell you the exact stage?",
      options: [{ text: "Only after surgery", right: true }, { text: "Before any tests are done" }, { text: "Only after 5 years" }],
      why: "Your doctor might not be able to tell you the exact stage until you have had surgery.",
    },
  },
  {
    id: "ov-follow-up",
    kicker: "Follow-up",
    question: "What happens at follow-up, and what does the CA125 test show?",
    hook: "Check-ups are about more than looking for a recurrence. They are a chance to talk about how you are, and CA125 results are read as a trend.",
    short: "After treatment you have regular check-ups, often every three months at first, becoming less frequent over time. Your team asks how you are, examines you and may use blood tests, including CA125, and scans. A raised CA125 can be a sign that the cancer is returning, so doctors look at the trend over several tests rather than a one-off change.",
    sections: [
      {
        heading: "What follow-up is for",
        paragraphs: [
          "Follow-up appointments are a chance to talk about how you are feeling, physically and mentally, after treatment finishes. Your team checks for signs of the cancer returning, but they also ask about the impact it has had on your life, such as menopausal symptoms, sleep or intimacy.",
          "Your doctor or nurse asks how you are, whether you have had symptoms or side effects, and whether anything worries you. You might also have tests at some visits, such as blood tests, x-rays, CT scans or ultrasound scans.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Appointments are usually more frequent in the first few years, often every three months, and become less frequent over time. If you are having a PARP inhibitor, you need blood tests once a month, and with bevacizumab you have blood tests, blood pressure checks and a urine test every three weeks.",
          "Some hospitals offer patient initiated follow up if the cancer was found at stage 1a or 1b. Instead of routine appointments, you contact your team if you notice a change that worries you or feel it is time for a check-up.",
        ],
      },
      {
        heading: "The CA125 test",
        paragraphs: [
          "CA125 is a protein in the blood that can be measured with a blood test, and a normal level is usually under 35 units per millilitre. A raised CA125 can be a sign that ovarian cancer is returning, but it can also be raised for other reasons, such as fibroids in the womb, periods or liver problems.",
          "Your doctor looks for a trend in your results rather than acting on a single change. If CA125 is gradually rising or stays raised, your team may order more tests, and treatment for a recurrence is usually started once there are other signs, such as lasting symptoms or a scan showing growth.",
          "CA125 is not a reliable marker for everyone. You can ask your team how you want to hear your results, for example only when the trend changes, or your exact level after each test.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "You do not need to wait for your next appointment if you have new symptoms or concerns. Call or email your key worker, usually your clinical nurse specialist, whose contact details you should have.",
          "Tell your team as soon as possible about pain in your tummy or pelvis, bloating that does not come and go, feeling full quickly or losing your appetite, needing to wee more often or urgently, a change in bowel habits, or new sickness. Mention any other symptom that lasts and is unusual for you.",
        ],
      },
      {
        heading: "Scanxiety",
        paragraphs: [
          "It is very common to feel anxious before scans and tests, or while waiting for the results, and this is sometimes called scanxiety. A hospital appointment can bring back any anxiety you had about your cancer.",
          "It can help to bring someone you trust to the appointment, write down key information, and plan something relaxing for afterwards. Telling someone close to you how you feel, or having counselling, helps many people.",
        ],
      },
    ],
    helps: [
      "Contact your key worker about new symptoms or concerns; you do not need to wait for your next appointment.",
      "Tell your team how you would like to receive your CA125 results.",
      "Bring a family member or friend to appointments to support you and take notes.",
      "Raise anything affecting your daily life, such as money, emotions or sex, so your team can refer you for help.",
      "Plan something relaxing or enjoyable for after an appointment.",
    ],
    tryThisWeek: [
      "Report new symptoms without waiting.",
      "Decide how to hear CA125 results.",
      "Plan a treat after your next check.",
    ],
    ask: "How often will I have check-ups, and how will you use my CA125 results?",
    interactive: {
      kind: "signs",
      title: "Changes to report",
      intro: "Tick any you have noticed. They can be the same symptoms you had at diagnosis, or different ones.",
      signs: ["Pain in your tummy or pelvis", "Bloating that does not come and go", "Feeling full quickly or losing your appetite", "Needing to wee more often or urgently", "A change in bowel habits", "New feeling or being sick", "Any other lasting symptom that is unusual for you"],
      after: "Let your team know as soon as possible. You do not need to wait for your next appointment.",
      copyHeading: "Changes I have noticed",
    },
    sources: [TOC_FOLLOW_UP, CRUK_FOLLOW_UP, TOC_SCANXIETY],
    quiz: {
      question: "How do doctors usually read CA125 results?",
      options: [{ text: "As a trend over several tests", right: true }, { text: "From one single result" }, { text: "Only at diagnosis" }],
      why: "Your doctor looks for a trend in your results rather than acting on a single change.",
    },
  },
  {
    id: "ov-genes",
    kicker: "Genes and family",
    question: "Should I have genetic testing, and what could it mean for my family?",
    hook: "Up to 1 in 5 ovarian cancers are linked to an inherited gene variant. A test can guide your treatment and give your relatives a choice.",
    short: "Some ovarian cancers happen because of an inherited gene variant, most often in the BRCA1 or BRCA2 genes. If you have high grade serous ovarian cancer you will be offered genetic testing, and the result can help guide your treatment, including access to PARP inhibitors. If you have a variant, your close relatives can be offered counselling and testing too.",
    sections: [
      {
        heading: "Inherited ovarian cancer",
        paragraphs: [
          "Cancer is a common illness, and it is not unusual for more than one person in a family to have it, in most cases by chance. But up to 1 in 5 ovarian cancers happen because of an inherited genetic variant that increases the risk.",
          "Variants in the BRCA1 or BRCA2 genes cause most hereditary ovarian cancers, and about 15 in every 100 people who develop ovarian cancer have one. Having a variant does not mean someone will get cancer, but the chance is higher.",
        ],
      },
      {
        heading: "Who is offered testing",
        paragraphs: [
          "In England, Wales and Northern Ireland, you will be offered genetic testing if you have high grade serous ovarian, fallopian tube or primary peritoneal cancer. In Scotland it is offered for high grade non-mucinous types, and a 2024 NICE guideline recommends offering it to anyone with epithelial ovarian cancer, so ask your team what is available where you live.",
          "You will be offered testing for these genes even if no one in your family has had ovarian cancer. If you have a different type and a family history, ask your treatment team or clinical genetics team what testing is available.",
        ],
      },
      {
        heading: "The test and your results",
        paragraphs: [
          "For most people, the test is done by the same team that treats the cancer, using a blood sample. It is often best to have it soon after diagnosis, because the results can help guide your treatment, and you will usually get your result within 12 weeks.",
          "Having a variant may mean more options for PARP inhibitors as maintenance treatment, and it gives your family members the chance to find out if they carry it too. A positive result can be difficult to process, and sometimes the result is inconclusive.",
          "Separately, your tumour may be tested for homologous recombination deficiency, or HRD, if you were recently diagnosed with stage 3 or 4 high grade cancer. If it is HRD positive, you may have more PARP inhibitor options, and they are more likely to work well.",
        ],
      },
      {
        heading: "What it means for your family",
        paragraphs: [
          "If you have a variant, your first-degree relatives will be invited for genetic counselling, and they can then choose whether to be tested. Your full brothers and sisters, and your children, each have a 1 in 2 chance of carrying the same variant.",
          "Relatives who test positive may be offered checks to find cancer as early as possible, or treatment such as surgery to reduce their risk. Children are not offered testing until they are 18, so that they can decide for themselves.",
          "Whether and when relatives are tested is up to them. If you are not in touch with some of them, your clinical genetics service can write a letter for you to send, explaining the variant and the testing available.",
        ],
      },
    ],
    helps: [
      "Ask your treatment team about genetic testing, and what is available where you live.",
      "Tell your team if you still have questions, or anything you are not sure about, before you decide.",
      "If you do not feel ready, ask whether your blood sample can be stored for testing later.",
      "Ask your clinical genetics service about a letter you can send to relatives.",
      "If telling your family feels hard, talk to your partner, a friend, your treatment team or the clinical genetics team.",
    ],
    tryThisWeek: [
      "Ask your team about genetic testing.",
      "Write down your questions first.",
      "Ask about a letter for relatives.",
    ],
    ask: "Should I have genetic testing, and has my tumour been tested for HRD?",
    interactive: {
      kind: "timeline",
      title: "Genetic testing, step by step",
      steps: [
        { id: "before", when: "Before the test", title: "Talk it through", points: ["Your treatment team gives you written information.", "Tell them if you still have questions."] },
        { id: "test", when: "The test", title: "A blood sample", points: ["Often taken at a treatment appointment.", "If you are not ready, ask about storing a sample."] },
        { id: "result", when: "Within 12 weeks", title: "Your result", points: ["Your treatment team explains what it means.", "Sometimes the result is inconclusive."] },
        { id: "variant", when: "If a variant is found", title: "Genetic counselling", points: ["You are referred to the clinical genetics team.", "You may have more PARP inhibitor options."] },
        { id: "family", when: "Your relatives", title: "Cascade testing", points: ["First-degree relatives are invited for counselling.", "Whether to be tested is up to them."] },
        { id: "children", when: "At 18 or over", title: "Your children", points: ["They can ask their GP for a referral.", "They make their own informed choice."] },
      ],
    },
    sources: [TOC_HEREDITARY, TOC_TESTED, TOC_HRD, TOC_FAMILY],
    quiz: {
      question: "What chance does each of your children have of inheriting a gene variant you carry?",
      options: [{ text: "1 in 2", right: true }, { text: "1 in 10" }, { text: "No chance at all" }],
      why: "Your full brothers and sisters, and your children, each have a 1 in 2 chance of carrying the same variant.",
    },
  },
  {
    id: "ov-surgery-recovery",
    kicker: "After surgery",
    question: "How long does it take to recover from ovarian cancer surgery?",
    hook: "Most people go home within a week, but full recovery takes weeks. Lifting, driving, work and sex all wait a while.",
    short: "You will usually spend three to seven days in hospital after ovarian cancer surgery, and recovery at home can last between six and twelve weeks. Avoid heavy lifting and strenuous tasks while your stitches and tummy muscles heal, and expect to need at least eight weeks off work. Contact your doctor or nurse straight away if you notice signs of a wound infection or a blood clot.",
    sections: [
      {
        heading: "In hospital",
        paragraphs: [
          "You will spend three to seven days in hospital, and most women go home three to four days after surgery. Before you leave, a physiotherapist should visit to go through some gentle exercises to do at home.",
          "The day after a hysterectomy you will be encouraged to take a short walk, which helps your blood flow and lowers the risk of blood clots in your legs. Your nurse may give you compression stockings or injections to help prevent clots, and after some major operations the injections carry on at home for several weeks.",
        ],
      },
      {
        heading: "Recovering at home",
        paragraphs: [
          "Recovery at home can last anywhere between six and twelve weeks, and it varies from person to person. Try not to put pressure on yourself if it takes longer than expected.",
          "Rest as much as possible and do not lift anything heavy, such as bags of shopping, while your tummy muscles and tissues heal. Macmillan advises avoiding heavy lifting for at least 12 weeks, and even a full kettle or a hairdryer could put pressure on your body.",
          "Walking is always recommended, and you can swim once your wounds have healed. You will probably feel more tired than usual, so do not try to do too much.",
        ],
      },
      {
        heading: "Driving, work and sex",
        paragraphs: [
          "You will not be able to drive for six to eight weeks, and you should not drive until you are comfortable wearing a seatbelt and can do an emergency stop. Check with your insurance company that you are covered before you drive again.",
          "You will need at least eight weeks off work, and more if you start chemotherapy, so talk to your employer as soon as you can. You will probably be advised to wait at least six weeks before having sex, to give your body time to heal.",
        ],
      },
      {
        heading: "Your body after surgery",
        paragraphs: [
          "There may be some changes in your bowel and bladder at first, and some women get urinary infections or constipation, which can easily be treated. Drinking plenty of fluids and eating more fruit and fibre can help.",
          "Scars are likely to be red, or a darker colour on black or brown skin, and firm and itchy at first, and over time they flatten and fade. If you had not been through the menopause, removing both ovaries brings it on straight after the operation.",
        ],
      },
      {
        heading: "When to get help straight away",
        paragraphs: [
          "Contact your doctor or nurse straight away on the number you have been given if you have signs of a wound infection: heat, pain, swelling or redness around the scar, fluid coming from the wound, a high temperature, feeling shivery and shaky, or feeling generally unwell.",
          "Tell your doctor or nurse straight away if you have pain, heat, swelling or redness in a leg or arm, or if you are short of breath, have chest pain or cough up blood. These can be signs of a blood clot.",
          "See your GP if you have heavy vaginal bleeding, start passing blood clots or have a strong-smelling discharge.",
        ],
      },
    ],
    helps: [
      "Do the gentle exercises your physiotherapist shows you before you go home.",
      "Take a short walk each day, and do not lift anything heavy while you heal.",
      "Ask your physiotherapist or specialist nurse which activities you can and cannot do.",
      "Talk to your employer early about time off, as you will need at least eight weeks.",
      "Check with your car insurance company before you drive again.",
      "Contact your doctor or nurse straight away if you notice signs of infection or a blood clot.",
    ],
    tryThisWeek: [
      "Take a short walk each day.",
      "Avoid lifting anything heavy.",
      "Learn the signs of infection.",
    ],
    ask: "Which activities can I do now, and when can I drive, lift and go back to work?",
    interactive: {
      kind: "timeline",
      title: "Your recovery, week by week",
      steps: [
        { id: "hospital", when: "3 to 7 days", title: "In hospital", points: ["Most women go home after 3 to 4 days.", "A physiotherapist shows you gentle exercises."] },
        { id: "day-after", when: "The day after", title: "A short walk", points: ["Walking helps your blood flow.", "It lowers the risk of blood clots."] },
        { id: "weeks", when: "The first weeks", title: "Rest and heal", points: ["Do not lift anything heavy.", "Expect to feel more tired than usual."] },
        { id: "sex", when: "At least 6 weeks", title: "Sex", points: ["Wait until scars heal and discharge stops.", "This gives your body time to heal."] },
        { id: "driving", when: "6 to 8 weeks", title: "Driving", points: ["Wait until you can do an emergency stop.", "Check your insurance first."] },
        { id: "work", when: "At least 8 weeks", title: "Work", points: ["More time off if you start chemotherapy.", "Talk to your employer early."] },
        { id: "lifting", when: "At least 12 weeks", title: "Heavy lifting", points: ["Macmillan advises avoiding it for 12 weeks.", "Recovery can take 6 to 12 weeks overall."] },
      ],
    },
    sources: [OCA_RECOVERY, NHS_HYST, MAC_AFTER_SURGERY],
    quiz: {
      question: "How long can recovery at home take after ovarian cancer surgery?",
      options: [{ text: "Between six and twelve weeks", right: true }, { text: "About three days" }, { text: "At least a year" }],
      why: "Recovery at home can last anywhere between six and twelve weeks, and it varies from person to person.",
    },
  },
  {
    id: "ov-maintenance",
    kicker: "Maintenance",
    question: "What are PARP inhibitors, and how do I live with them?",
    hook: "PARP inhibitors are daily tablets that aim to keep the cancer away for longer. Side effects are common early on, and your team can help.",
    short: "PARP inhibitors, olaparib, niraparib and rucaparib, are tablets taken at home after chemotherapy as maintenance treatment, to reduce the chance of the cancer coming back or delay it. Many side effects appear early and improve over time, and your team may lower the dose or pause treatment if they are hard to live with. You will have regular blood tests and a 24-hour number to call if you feel unwell.",
    sections: [
      {
        heading: "How they work",
        paragraphs: [
          "PARP inhibitors stop cancer cells repairing themselves, so the cancer cells die. They aim to reduce the chance of the cancer coming back or delay it coming back.",
          "They are more likely to work well if you have a BRCA1 or BRCA2 variant, or if your tumour is HRD positive, because those cancer cells are already less able to repair their DNA. You can usually have a PARP inhibitor only once.",
        ],
      },
      {
        heading: "Taking them",
        paragraphs: [
          "You usually start a PARP inhibitor eight to 12 weeks after finishing chemotherapy, and take it at home as tablets. Keep taking it for as long as your doctor tells you, and do not stop taking it without talking to your doctor.",
          "Olaparib is taken twice a day, 12 hours apart, swallowed whole with water, and you should avoid grapefruit while taking it. If you forget a dose, or are sick just after one, take your next dose at the usual time and do not take a double dose.",
          "Some people also have bevacizumab, a drip every 3 weeks, given with chemotherapy and then on its own, and sometimes alongside olaparib.",
        ],
      },
      {
        heading: "Common side effects",
        paragraphs: [
          "All three PARP inhibitors share most of their common side effects, which often appear early and improve over time. Your team may lower your dose or pause treatment if side effects affect your daily life, and a lower dose has been shown to reduce side effects without making treatment less effective.",
          "Feeling sick is common early on, and an anti-sickness tablet taken 30 minutes before your dose can help. Smaller, more frequent meals and plenty of fluids can help with digestive side effects, and gentle exercise and a regular sleep routine can help with tiredness.",
        ],
      },
      {
        heading: "Blood tests",
        paragraphs: [
          "PARP inhibitors can affect your blood cells, so you have regular blood tests, usually once a month. Tell your team if you feel tired or weak, have headaches, a fast heartbeat or breathlessness, which can be signs of anaemia, or if you notice unexplained bruising or bleeding.",
          "If you take niraparib, your blood pressure is checked regularly, as niraparib can make it rise.",
        ],
      },
      {
        heading: "When to call the 24-hour number",
        paragraphs: [
          "You will be given a 24-hour number for your cancer centre. Contact the hospital straight away on it if you have a high temperature, a temperature below 36°C, feel unwell even with a normal temperature, or have signs of an infection, such as shivering, a sore throat, a cough or breathlessness.",
          "Call it straight away too if you have pain, swelling and redness in an arm or leg, sudden breathlessness or sharp chest pain, as blood clots need to be treated quickly. If you have signs of an allergic reaction, such as an itchy rash, swelling of the face, mouth or eyes, or difficulty breathing, call and do not take any more doses until you have spoken with them.",
        ],
      },
    ],
    helps: [
      "Be honest with your team about any side effects you notice, so they can help.",
      "Take your tablets exactly as your team tells you, and do not stop without talking to your doctor.",
      "Save your 24-hour hospital numbers in your phone or somewhere safe.",
      "Check your temperature, and tell your team urgently if you have signs of an infection.",
      "Eat smaller, more frequent meals and drink plenty of fluids.",
      "Call Target Ovarian Cancer's nurse-led support line on 0808 802 6000 with questions about these drugs.",
    ],
    tryThisWeek: [
      "Save your 24-hour number.",
      "Note side effects for your team.",
      "Try smaller, more frequent meals.",
    ],
    ask: "Which PARP inhibitor am I eligible for, and how long will I take it?",
    interactive: {
      kind: "scenarios",
      title: "Moments on maintenance",
      scenarios: [
        {
          id: "missed",
          situation: "You realise you forgot this morning's dose.",
          options: [{ text: "Take the next dose at the usual time", best: true }, { text: "Take a double dose tonight" }],
          why: "If you forget a dose, or are sick just after one, take your next dose at the usual time and do not take a double dose.",
        },
        {
          id: "fever",
          situation: "You feel shivery and have a high temperature.",
          options: [{ text: "Call the 24-hour number straight away", best: true }, { text: "Wait to see if it passes overnight" }],
          why: "Contact the hospital straight away on it if you have a high temperature, a temperature below 36°C, feel unwell even with a normal temperature, or have signs of an infection, such as shivering, a sore throat, a cough or breathlessness.",
        },
        {
          id: "sick",
          situation: "You feel sick most mornings in the first weeks.",
          options: [{ text: "Ask your team about anti-sickness tablets", best: true }, { text: "Stop the tablets yourself" }],
          why: "Feeling sick is common early on, and an anti-sickness tablet taken 30 minutes before your dose can help.",
        },
        {
          id: "leg",
          situation: "Your calf is painful, swollen and red.",
          options: [{ text: "Call the 24-hour number straight away", best: true }, { text: "Mention it at your next appointment" }],
          why: "Call it straight away too if you have pain, swelling and redness in an arm or leg, sudden breathlessness or sharp chest pain, as blood clots need to be treated quickly.",
        },
      ],
    },
    sources: [TOC_TARGETED, TOC_PARP_SIDE, MAC_OLAPARIB, TOC_FOLLOW_UP],
    quiz: {
      question: "What might your team do if side effects affect your daily life?",
      options: [{ text: "Lower the dose or pause treatment", right: true }, { text: "Double the dose" }, { text: "Nothing can be done" }],
      why: "Your team may lower your dose or pause treatment if side effects affect your daily life, and a lower dose has been shown to reduce side effects without making treatment less effective.",
    },
  },
  {
    id: "ov-menopause",
    kicker: "Menopause",
    question: "Why has surgery brought on the menopause, and can I take HRT?",
    hook: "Removing the ovaries drops hormone levels almost at once, so symptoms can be sudden and intense. HRT is safe for many, but not for every type.",
    short: "If you had not been through the menopause, removing both ovaries brings on a surgical menopause straight away, and symptoms are often more intense than a natural menopause. HRT is generally considered safe for most types of ovarian cancer, but it is not usually offered if the cancer is hormone sensitive, so the decision depends on your own cancer. Non-hormonal medicines, CBT and vaginal moisturisers can also help.",
    sections: [
      {
        heading: "A sudden change",
        paragraphs: [
          "The ovaries are the main source of the hormone oestrogen. When they are removed, oestrogen falls very quickly, often straight away, so symptoms tend to be similar to a natural menopause but more intense.",
          "The effects can go on for a few months or years. In many cases the symptoms get better on their own, although it is difficult to predict how long you may have them for.",
        ],
      },
      {
        heading: "Symptoms you might notice",
        paragraphs: [
          "You may have hot flushes, poor concentration or memory, mood swings, vaginal dryness, a lower sex drive, and needing to wee more often or urgently. Tiredness, trouble sleeping, aching joints and dry skin are common too.",
          "Bladder symptoms can get worse over time, so it is best to seek help sooner rather than later. A diary or list of your symptoms can help when you talk to your cancer doctor, nurse or GP.",
        ],
      },
      {
        heading: "HRT",
        paragraphs: [
          "HRT replaces the oestrogen your ovaries made. It can help with hot flushes and vaginal dryness and prevent the loss of bone strength, and it reduces the future risk of heart disease if started within 10 years of the menopause.",
          "HRT is generally considered safe for women with most types of ovarian cancer, but it is not usually offered if the cancer is hormone sensitive, such as many low grade serous tumours. Whether you can take it depends on your tumour type, stage and medical history, so talk through the risks and benefits with your doctor.",
          "Vaginal oestrogen, applied directly to the vagina, treats dryness and discomfort and is safe for most women with ovarian cancer to use.",
        ],
      },
      {
        heading: "Other ways to ease symptoms",
        paragraphs: [
          "If HRT is not right for you, non-hormonal medicines can reduce hot flushes and night sweats, and some antidepressants and nerve pain medicines can help too. CBT has been proven to be a safe and effective treatment for menopausal symptoms.",
          "Talk to your treatment team before taking herbal or dietary supplements, so they do not interfere with other medicines. Vaginal moisturisers and lubricants can help with dryness without using hormones.",
        ],
      },
      {
        heading: "Bones, heart and feelings",
        paragraphs: [
          "Surgical menopause raises the risk of weaker bones and of heart disease, so you may be offered a DEXA scan to check your bone strength. Regular weight-bearing exercise, a balanced diet with enough calcium and vitamin D, and not smoking all help.",
          "You may feel anger or grief, or be overwhelmed by the sudden change, especially if it affects plans for a family. Talking to family and friends, a counsellor or others who have been through it can help.",
        ],
      },
    ],
    helps: [
      "Discuss how to manage menopause symptoms with your treatment team as early as possible.",
      "Ask to be referred to a menopause specialist if symptoms are affecting your life.",
      "Keep a diary or list of your symptoms to discuss with your cancer doctor, nurse or GP.",
      "Ask whether HRT, or vaginal oestrogen, is suitable for your type of ovarian cancer.",
      "Check with your treatment team before taking any herbal or dietary supplements.",
      "Do regular weight-bearing exercise to help keep your bones healthy.",
    ],
    tryThisWeek: [
      "Start a symptom diary.",
      "Ask whether HRT suits you.",
      "Check supplements with your team.",
    ],
    ask: "Is HRT safe for my type of ovarian cancer, and could you refer me to a menopause specialist?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick any you have. It can be hard to tell menopause symptoms from treatment side effects, so a list helps.",
      signs: ["Hot flushes or night sweats", "Poor concentration or memory", "Mood swings or anxiety", "Vaginal dryness or painful sex", "A lower sex drive", "Needing to wee more often or urgently", "Tiredness or trouble sleeping", "Aching joints or muscles", "Dry skin, hair loss or weight gain"],
      after: "Share this with your treatment team or GP. They can assess your symptoms and, if needed, refer you to a menopause specialist.",
      copyHeading: "Menopause symptoms I have",
    },
    sources: [TOC_MENOPAUSE, CRUK_COPING, NHS_HYST],
    quiz: {
      question: "Why are surgical menopause symptoms often more intense?",
      options: [{ text: "Oestrogen falls very quickly when the ovaries are removed", right: true }, { text: "Surgery adds extra hormones" }, { text: "They are always milder" }],
      why: "When they are removed, oestrogen falls very quickly, often straight away, so symptoms tend to be similar to a natural menopause but more intense.",
    },
  },
  {
    id: "ov-fatigue",
    kicker: "Fatigue",
    question: "Why am I still so tired, and what helps?",
    hook: "Cancer-related fatigue is more than tiredness. It often lifts after treatment, and pacing, activity and a diary help in the meantime.",
    short: "Fatigue is feeling very tired or exhausted most or all of the time, and most people with cancer have it at some point. For most it gets better after treatment finishes, but for some it continues for months or years, and maintenance drugs can add to it. Being active, pacing yourself and keeping a fatigue diary can help, and your team will want to check for causes such as anaemia.",
    sections: [
      {
        heading: "More than tiredness",
        paragraphs: [
          "Fatigue in people with cancer can be more severe. You may get tired more quickly after less activity, and feel exhausted even when you are getting enough rest and sleep.",
          "For most people, fatigue gets better after treatment finishes. But for some it may continue for months or sometimes years.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "Cancer treatments, anaemia, eating problems, pain and trouble sleeping can all play a part. Anxiety, depression and stress can make fatigue worse.",
          "PARP inhibitors can also cause fatigue, so tell your treatment team if you feel this way. They will want to rule out other causes, such as anaemia, and may lower your dose if other things do not help.",
        ],
      },
      {
        heading: "Keeping a diary",
        paragraphs: [
          "There are no medical tests to measure fatigue, so your nurse may ask you to score it from 0, no fatigue, to 10, the worst possible. A daily diary of your energy levels can help you find patterns and plan important activities for when you have more energy.",
          "It is a good idea to share your diary with your healthcare team. They can talk to you about how to plan your day depending on how you feel.",
        ],
      },
      {
        heading: "Moving, pacing and resting",
        paragraphs: [
          "There is good evidence that physical activity, such as walking quickly, is one of the best ways to reduce fatigue. Resting, but also doing some gentle physical activity, can help during and after treatment.",
          "Pace yourself, and balance short naps and rests with some activity. Spread housework over the week and sit down for some tasks. On days when you feel less well, it is okay to be less active and to rest more.",
          "Keeping to a normal sleep routine can help, and CBT, a type of talking therapy, has been shown to help with fatigue and sleep.",
        ],
      },
    ],
    helps: [
      "Tell your healthcare team about fatigue at any time, so they can check for causes such as anaemia.",
      "Keep a fatigue diary, scoring your energy from 0 to 10, and share it with your team.",
      "Try gentle exercise, such as short walks or yoga.",
      "Spread tasks out over the week, and sit down to do some of them.",
      "Keep to a regular sleep routine.",
      "Talk to your cancer doctor, specialist nurse or GP before you make any big changes.",
    ],
    tryThisWeek: [
      "Start a fatigue diary.",
      "Take a short walk.",
      "Spread out the housework.",
    ],
    ask: "Could anything treatable, such as anaemia or my maintenance drug, be adding to my tiredness?",
    interactive: {
      kind: "scenarios",
      title: "Pacing moments",
      scenarios: [
        {
          id: "housework",
          situation: "You wake with energy and want to do all the housework at once.",
          options: [{ text: "Spread it over the week", best: true }, { text: "Do it all while you can" }],
          why: "Spread housework over the week and sit down for some tasks.",
        },
        {
          id: "bad-day",
          situation: "You feel much worse today than yesterday.",
          options: [{ text: "Be less active and rest more today", best: true }, { text: "Push through your usual routine" }],
          why: "On days when you feel less well, it is okay to be less active and to rest more.",
        },
        {
          id: "sleep",
          situation: "You want to sleep all afternoon and lie awake at night.",
          options: [{ text: "Keep to a normal sleep routine", best: true }, { text: "Sleep whenever you can" }],
          why: "Keeping to a normal sleep routine can help, and CBT, a type of talking therapy, has been shown to help with fatigue and sleep.",
        },
        {
          id: "tell",
          situation: "You have felt exhausted for weeks on a PARP inhibitor.",
          options: [{ text: "Tell your treatment team", best: true }, { text: "Keep it to yourself" }],
          why: "PARP inhibitors can also cause fatigue, so tell your treatment team if you feel this way.",
        },
      ],
    },
    sources: [MAC_FATIGUE, TOC_PARP_SIDE, CRUK_COPING],
    quiz: {
      question: "Does fatigue always go away as soon as treatment ends?",
      options: [{ text: "No, for some it lasts months or years", right: true }, { text: "Yes, within a week" }, { text: "It never improves" }],
      why: "For most people, fatigue gets better after treatment finishes. But for some it may continue for months or sometimes years.",
    },
  },
  {
    id: "ov-bowels-bladder",
    kicker: "Bowels and bladder",
    question: "Why have my bowels and bladder changed, and when should I get help?",
    hook: "Surgery, chemotherapy and maintenance drugs can all change how you go to the toilet. Most changes can be eased, and some need help fast.",
    short: "Changes to your bowel and bladder are common after surgery and during drug treatment, from constipation and diarrhoea to needing to wee more often. Some people have a stoma if part of the bowel was removed. Drinking enough, adjusting fibre and telling your team early all help, and some symptoms, such as not being able to pass urine or signs of a blocked bowel, need help straight away.",
    sections: [
      {
        heading: "Why changes happen",
        paragraphs: [
          "After surgery, there may be some changes in how your bowel and bladder work, and some women get urinary infections or constipation, which can easily be treated. Some chemotherapy and targeted drugs can cause diarrhoea, and PARP inhibitors and anti-sickness medicines can cause constipation.",
          "A surgical menopause can also bring bladder symptoms, such as needing to wee more often and more urgently, and more urine infections. These can get worse over time, so it is best to seek help sooner rather than later.",
        ],
      },
      {
        heading: "Constipation and diarrhoea",
        paragraphs: [
          "Tell your doctor or nurse if you have not had a poo at least 3 times in the last week, or are going less often than usual. Fibre, at least 2 litres of fluid a day, gentle exercise such as walking, and prunes or prune juice may help, and your team may suggest a laxative.",
          "If you have diarrhoea, tell your cancer team or contact the hospital on the number you have been given, especially if it is getting worse or the treatment is not helping. Drink at least 2 litres a day, and avoid alcohol, coffee and spicy or high-fat foods.",
        ],
      },
      {
        heading: "Bladder changes",
        paragraphs: [
          "Contact the hospital straight away if bladder symptoms get worse, you have a high temperature or fever, or you feel you cannot pass urine. Tell your cancer team if it burns or hurts to wee, or your urine is cloudy or smells strongly, as an infection is a common cause and is easy to treat.",
          "Pelvic floor exercises, and avoiding drinks such as tea, coffee, cola and alcohol, may help with bladder symptoms.",
        ],
      },
      {
        heading: "Living with a stoma",
        paragraphs: [
          "If part of the bowel was removed and the ends could not be joined, the surgeon may have made a stoma, an opening on the tummy where poo is collected in a bag. Often it is meant to be temporary, though in some cases it is permanent.",
          "Your stoma nurse will show you how to look after it and how to order supplies. Speak to them about changes in its size or shape or how it works, bleeding or tummy pains, and be patient with yourself as you get used to your new routine.",
        ],
      },
      {
        heading: "Signs of a blocked bowel",
        paragraphs: [
          "Ovarian cancer, and scar tissue after surgery in the tummy, can sometimes block the bowel. Signs include bloating, cramping pain low in the tummy, not being able to pass stools or wind, and feeling or being sick.",
          "A bowel obstruction usually needs to be treated straight away. Let your team know as soon as possible about a change in bowel habits or new sickness.",
        ],
      },
    ],
    helps: [
      "Drink at least 2 litres of fluid a day, unless your team tells you something different.",
      "Tell your doctor or nurse if you have not had a poo at least 3 times in the last week.",
      "Take the anti-diarrhoea medicines your cancer team prescribes, and tell them if diarrhoea gets worse.",
      "Contact the hospital straight away if you have a high temperature or feel you cannot pass urine.",
      "Speak to your stoma nurse about any changes to your stoma, bleeding or tummy pains.",
      "Pack a bag with wipes, pads and a change of clothes when you go out.",
    ],
    tryThisWeek: [
      "Drink 2 litres of fluid a day.",
      "Report fewer than 3 poos a week.",
      "Pack a bag for going out.",
    ],
    ask: "Which bowel and bladder changes should I report, and who do I call out of hours?",
    interactive: {
      kind: "signs",
      title: "Changes to report",
      intro: "Tick any you have noticed, so you can tell your team clearly.",
      signs: ["Feeling you cannot pass urine", "A high temperature or fever", "Burning or pain when you wee", "Cloudy or strong-smelling urine", "Fewer than 3 poos in the last week", "Diarrhoea, or diarrhoea getting worse", "Bloating with cramping tummy pain", "Not passing stools or wind", "Feeling or being sick", "Bleeding or pain around a stoma"],
      after: "Contact the hospital straight away if you cannot pass urine or have a high temperature. A blocked bowel usually needs treating straight away.",
      copyHeading: "Bowel and bladder changes",
    },
    sources: [MAC_BLADDER_BOWEL, NHS_HYST, TOC_PARP_SIDE, TOC_MENOPAUSE, TOC_STOMA, MAC_SURGERY, MAC_BLOCKED_BOWEL, TOC_FOLLOW_UP],
    quiz: {
      question: "What should you do if you feel you cannot pass urine?",
      options: [{ text: "Contact the hospital straight away", right: true }, { text: "Wait until your next check-up" }, { text: "Drink less fluid" }],
      why: "Contact the hospital straight away if bladder symptoms get worse, you have a high temperature or fever, or you feel you cannot pass urine.",
    },
  },
  {
    id: "ov-relationships",
    kicker: "Intimacy",
    question: "How might ovarian cancer change sex and intimacy, and what helps?",
    hook: "Surgery and a sudden menopause can bring dryness, pain and a lower sex drive. There are simple treatments, and closeness can take many forms.",
    short: "Ovarian cancer and its treatment can change how you feel about yourself and about sex, and it is normal to want, or not want, to be intimate. Pain during sex is common after treatment and is often due to vaginal dryness, which moisturisers, lubricants and vaginal oestrogen can help. Talking openly with your partner, and with your nurse or GP, is a good first step.",
    sections: [
      {
        heading: "Your feelings are normal",
        paragraphs: [
          "A diagnosis and treatment can affect how you feel about yourself emotionally and your sense of yourself as a sexual being. You may want more closeness, or you may withdraw or feel nervous about being sexual.",
          "It is normal to want, or not want, to be sexually intimate, and intimacy does not only mean having sex. It may include kissing, cuddling or touching.",
        ],
      },
      {
        heading: "After surgery",
        paragraphs: [
          "It is generally recommended that you do not have sex until your scars have healed and any vaginal discharge has stopped, which usually takes at least 4 to 6 weeks. Many women notice a loss of sex drive at first, which usually returns once they have fully recovered.",
          "Removing the ovaries triggers the menopause, and the drop in hormones can lower your sex drive and cause vaginal dryness. Pelvic floor exercises, treatment for menopausal symptoms and talking to someone about your feelings can all help you enjoy sex again.",
        ],
      },
      {
        heading: "If sex is painful",
        paragraphs: [
          "Pain during sex is quite common after treatment for ovarian cancer, and it is often due to vaginal dryness. It is important not to put up with discomfort or pain, as there are simple treatments that can help.",
          "Regular use of a non-hormonal vaginal moisturiser, or vaginal oestrogen if it is right for you, can help with dryness, and lubricants can make sex more comfortable. Trying different positions and learning to relax your tummy and pelvic floor muscles can also help.",
        ],
      },
      {
        heading: "Talking with your partner",
        paragraphs: [
          "When sex is difficult, it is common to withdraw from your partner and avoid all intimacy. Try to talk to your partner about how you are feeling and the difficulties you are having.",
          "Your partner may feel shocked, scared or helpless too, and the roles in your relationship may shift. Being honest about your feelings, and encouraging your partner to do the same, is essential.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "A psychosexual therapist can help with problems of desire, arousal and orgasm, and you can ask your GP or clinical nurse specialist for a referral on the NHS. A counsellor can also help you work through how treatment has changed the way you feel about your body.",
          "Relate offers relationship support and help with sex problems in England and Wales, as do Relate NI in Northern Ireland and Relationships Scotland in Scotland.",
        ],
      },
    ],
    helps: [
      "Use a non-hormonal vaginal moisturiser regularly, and a lubricant during sex.",
      "Ask your clinical nurse specialist or GP whether vaginal oestrogen or HRT is right for you.",
      "Try different positions, and if something hurts, move to something that feels good and try again another time.",
      "Talk to your partner about how you are feeling and what you are finding difficult.",
      "Ask your GP or clinical nurse specialist about seeing a psychosexual therapist.",
    ],
    tryThisWeek: [
      "Try a vaginal moisturiser.",
      "Talk with your partner.",
      "Ask about a psychosexual therapist.",
    ],
    ask: "Is vaginal oestrogen or HRT suitable for me, and could you refer me to a psychosexual therapist?",
    interactive: {
      kind: "scenarios",
      title: "Closeness moments",
      scenarios: [
        {
          id: "pain",
          situation: "Sex has become painful since treatment.",
          options: [{ text: "Try moisturisers and lubricants, and ask for help", best: true }, { text: "Put up with the pain" }],
          why: "It is important not to put up with discomfort or pain, as there are simple treatments that can help.",
        },
        {
          id: "avoiding",
          situation: "You have started avoiding all closeness because sex feels hard.",
          options: [{ text: "Talk to your partner about how you feel", best: true }, { text: "Keep avoiding it" }],
          why: "Try to talk to your partner about how you are feeling and the difficulties you are having.",
        },
        {
          id: "too-soon",
          situation: "It is a few weeks since surgery and you still have some discharge.",
          options: [{ text: "Wait until scars heal and discharge stops", best: true }, { text: "Go ahead anyway" }],
          why: "It is generally recommended that you do not have sex until your scars have healed and any vaginal discharge has stopped, which usually takes at least 4 to 6 weeks.",
        },
        {
          id: "desire",
          situation: "Months on, your sex drive has not come back.",
          options: [{ text: "Ask about a psychosexual therapist", best: true }, { text: "Assume nothing can help" }],
          why: "A psychosexual therapist can help with problems of desire, arousal and orgasm, and you can ask your GP or clinical nurse specialist for a referral on the NHS.",
        },
      ],
    },
    sources: [TOC_SEX, NHS_HYST, OCA_SEX, OCA_RELATIONSHIPS],
    quiz: {
      question: "What is pain during sex after treatment often due to?",
      options: [{ text: "Vaginal dryness", right: true }, { text: "Pelvic floor exercises" }, { text: "Using a lubricant" }],
      why: "Pain during sex is quite common after treatment for ovarian cancer, and it is often due to vaginal dryness.",
    },
  },
  {
    id: "ov-work",
    kicker: "Work and money",
    question: "How do I go back to work, and what help is there with money?",
    hook: "The law treats cancer as a disability, so your employer should consider reasonable adjustments. Free advice can help with benefits too.",
    short: "After ovarian cancer surgery you will need at least eight weeks off work, and more if you have chemotherapy. Cancer counts as a disability under the Equality Act 2010, so your employer should consider reasonable adjustments such as a phased return. Free prescriptions, benefits advice and Access to Work grants can all help with money.",
    sections: [
      {
        heading: "Your rights",
        paragraphs: [
          "If you have cancer, the law considers this a disability, so you cannot be treated less favourably because of it. The Equality Act 2010 protects you in England, Scotland and Wales, and the Disability Discrimination Act 1995 in Northern Ireland.",
          "This protection does not end when your treatment finishes, and it continues if you move to another employer. You do not have to tell your employer you have cancer, but they do not have to make a reasonable adjustment unless they know.",
        ],
      },
      {
        heading: "Time off and going back",
        paragraphs: [
          "You will need at least eight weeks off work after ovarian cancer surgery, and more if you start chemotherapy, so talk to your employer as soon as you can. You can make a return to work plan together, which might simply mean slowly building up to your normal hours.",
          "It is understandable to feel nervous about returning to work. It may help to call into work before you go back, or to speak to a colleague about how you want to be treated.",
        ],
      },
      {
        heading: "Reasonable adjustments",
        paragraphs: [
          "Reasonable adjustments are changes to the workplace or your job that allow you to keep working or return to work. They could include a phased return, different working hours, time off for medical appointments, or light duties for a time.",
          "Practical changes could include extra breaks to help you cope with tiredness, a quiet place to rest, or a parking space near your work. Discuss any adjustments with your employer and agree on them before they are put in place.",
        ],
      },
      {
        heading: "Help with money",
        paragraphs: [
          "If you live in England, prescriptions are free for people with cancer once you have an exemption certificate, using a form from your GP or hospital, and in Scotland, Wales and Northern Ireland prescriptions are free. There are also benefits that replace earnings, help with housing costs or help with the extra costs of illness.",
          "Access to Work can give you a grant towards things like specialist equipment, or the cost of travelling to work if you cannot use public transport. The grant does not affect your other benefits, you do not have to pay it back, and it does not pay for reasonable adjustments.",
          "You can speak to a Macmillan welfare rights adviser by calling the Macmillan support line on 0808 808 0000. Citizens Advice and Maggie's Centres also give free benefits advice.",
        ],
      },
    ],
    helps: [
      "Talk to your employer about time off as soon as you can.",
      "Make a return to work plan, building up slowly to your normal hours.",
      "Ask about reasonable adjustments, such as a phased return or extra breaks, and agree them first.",
      "Apply for a prescription exemption certificate if you live in England.",
      "Check whether Access to Work could help with equipment or travel costs.",
      "Call the Macmillan support line on 0808 808 0000 to speak to a welfare rights adviser.",
    ],
    tryThisWeek: [
      "Ask about a phased return.",
      "Apply for free prescriptions.",
      "Call for benefits advice.",
    ],
    ask: "When might I be ready to go back to work, and which adjustments would you suggest?",
    interactive: {
      kind: "scenarios",
      title: "Back at work",
      scenarios: [
        {
          id: "hours",
          situation: "Your manager asks when you can be back on full hours.",
          options: [{ text: "Ask for a phased return", best: true }, { text: "Go straight back full time" }],
          why: "They could include a phased return, different working hours, time off for medical appointments, or light duties for a time.",
        },
        {
          id: "tired",
          situation: "Tiredness hits you every afternoon at work.",
          options: [{ text: "Agree extra breaks with your employer", best: true }, { text: "Say nothing and struggle on" }],
          why: "Practical changes could include extra breaks to help you cope with tiredness, a quiet place to rest, or a parking space near your work.",
        },
        {
          id: "telling",
          situation: "You are unsure whether to tell your employer about your cancer.",
          options: [{ text: "Know that adjustments depend on them knowing", best: true }, { text: "Assume they must help either way" }],
          why: "You do not have to tell your employer you have cancer, but they do not have to make a reasonable adjustment unless they know.",
        },
        {
          id: "travel",
          situation: "You cannot use public transport to get to work yet.",
          options: [{ text: "Check whether Access to Work can help", best: true }, { text: "Pay for every taxi yourself" }],
          why: "Access to Work can give you a grant towards things like specialist equipment, or the cost of travelling to work if you cannot use public transport.",
        },
      ],
    },
    sources: [MAC_RIGHTS, MAC_ADJUSTMENTS, OCA_RECOVERY, OCA_PRACTICAL, GOV_ATW],
    quiz: {
      question: "Does your legal protection at work end when treatment finishes?",
      options: [{ text: "No, it continues", right: true }, { text: "Yes, straight away" }, { text: "Only if you change jobs" }],
      why: "This protection does not end when your treatment finishes, and it continues if you move to another employer.",
    },
  },
  {
    id: "ov-mood",
    kicker: "Mood",
    question: "Why do I feel low now treatment has ended, and where can I get help?",
    hook: "Many people feel lowest when treatment stops and the check-ups thin out. It is common, it often eases, and help is there if it does not.",
    short: "When treatment ends, you may feel relieved but still have side effects and emotions to cope with, and worry about the cancer coming back is common. These feelings often get better with time, but if low mood lasts it may be depression, a real illness that can be treated. Talk to your cancer team or GP, and if you need urgent help, call 111 and select the mental health option, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "After treatment ends",
        paragraphs: [
          "When your treatment ends, you may feel relieved, but you may still have side effects from treatment and other emotions to cope with. You will need time to find out what is now normal for you.",
          "Having your ovaries and womb removed can be a very emotional experience, even if you were past the menopause. A surgical menopause can bring anger or grief, or a sense of being overwhelmed, on top of everything else.",
        ],
      },
      {
        heading: "Worry about it coming back",
        paragraphs: [
          "Worrying about the cancer coming back is common, and many people struggle with uncertainty, but these feelings often get better with time. Going to the hospital for a test, or hearing about cancer in the news, can trigger them.",
          "Focusing on what you can control now may help: getting involved in your recovery, talking about your feelings and doing activities you enjoy. Constantly checking for symptoms can make you feel anxious, so if you find yourself doing this, talk to your cancer team or GP.",
        ],
      },
      {
        heading: "Low mood or depression?",
        paragraphs: [
          "Depression is more than feeling unhappy or fed up for a few days: you feel persistently sad for weeks or months. Signs include losing interest in things you used to enjoy, feeling hopeless or very tearful, sleeping badly and feeling constantly tired.",
          "Depression is a real illness, not a sign of weakness, and with the right treatment and support most people with depression can make a full recovery. It is best not to delay seeing a GP if you think you may be depressed.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "Talking therapies, such as CBT, can help, and for moderate to severe depression a combination of talking therapy and medicine is often recommended. Your cancer team, GP or practice nurse can also refer you to any extra support you may need.",
          "You can talk things through with the Macmillan Support Line free on 0808 808 00 00, or with Target Ovarian Cancer's specialist nurses on 0808 802 6000. Target Ovarian Cancer's online communities are a safe and supportive space to speak to others who have been through treatment.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online, call 111 and select the mental health option, or ask for an urgent GP appointment. You can call Samaritans free on 116 123, any time, day or night, or text SHOUT to 85258.",
          "Call 999 or go to A&E now if someone's life is at risk, or if you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one.",
        ],
      },
    ],
    helps: [
      "Talk to your cancer team, GP or practice nurse if you are worried or finding it hard to cope.",
      "Focus on what you can control now, such as your recovery and doing activities you enjoy.",
      "See a GP without delay if you think you may be depressed.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if you want to talk.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "For urgent mental health help, call 111 and select the mental health option; call 999 if a life is at risk.",
    ],
    tryThisWeek: [
      "Tell your GP how you feel.",
      "Plan an activity you enjoy.",
      "Save 116 123 in your phone.",
    ],
    ask: "Could my low mood be depression, and can you refer me for talking therapy?",
    interactive: {
      kind: "signs",
      title: "Feelings to mention",
      intro: "Tick any that have lasted. They can help your GP or team understand how you have been.",
      signs: ["Feeling persistently sad for weeks", "Losing interest in things you enjoyed", "Feeling hopeless or very tearful", "Sleeping badly", "Feeling constantly tired", "Worrying all the time about the cancer coming back", "Constantly checking for symptoms", "Anger or grief about the menopause", "Feeling very low or having suicidal thoughts"],
      after: "Tell your GP or cancer team. For urgent help, call 111 and select the mental health option, or Samaritans on 116 123. Call 999 if a life is at risk.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_FINISHING, CRUK_COPING, TOC_MENOPAUSE, MAC_WORRIES, NHS_DEPRESSION, TOC_SUPPORT_LINE, TOC_FOLLOW_UP, NHS_URGENT, SAMARITANS, NHS_SUICIDAL],
    quiz: {
      question: "What might it mean if low mood lasts for weeks or months?",
      options: [{ text: "It may be depression, which can be treated", right: true }, { text: "It is a sign of weakness" }, { text: "Nothing can help" }],
      why: "Depression is a real illness, not a sign of weakness, and with the right treatment and support most people with depression can make a full recovery.",
    },
  },
];
