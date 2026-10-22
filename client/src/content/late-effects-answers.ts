import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Late effects of cancer treatment page's pieces
// (content/library-conditions/cancer-more-2.ts, `lateEffects`). Every sentence was written from wording
// checked on 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those
// pages do not say. Most of it comes from Macmillan Cancer Support, Cancer Research UK and the NHS, with the
// British Heart Foundation for the heart, the Royal Osteoporosis Society for the bones, and Samaritans. There
// are no survival figures and nothing that reads as a prediction for the reader. Emergency lines (999 for a
// possible heart attack, and the mental health crisis routes) are given exactly as the sources state them.
// The mood answer follows safe-messaging guidance. General information only; it never replaces what a
// person's own cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });

const NHS_RADIO_SE = nhs("Radiotherapy: side effects", "tests-and-treatments/radiotherapy/side-effects/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_NEURO = nhs("Peripheral neuropathy", "conditions/peripheral-neuropathy/");
const NHS_OSTEO = nhs("Osteoporosis", "conditions/osteoporosis/");
const NHS_EARLY_MENO = nhs("Early or premature menopause", "conditions/early-or-premature-menopause/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const MAC_LATE = mac("Late effects of cancer treatment", "after-treatment/late-effects-of-treatment");
const MAC_PELVIC = mac("Late effects of pelvic radiotherapy", "treatment/types-of-treatment/radiotherapy/pelvic-radiotherapy/late-effects-of-pelvic-radiotherapy");
const MAC_HEART = mac("Heart health and cancer", "impacts-of-cancer/heart-health");
const MAC_BONE = mac("Bone health and cancer", "impacts-of-cancer/bone-health");
const MAC_KEEP_BONES = mac("Keeping your bones healthy", "impacts-of-cancer/bone-health/keeping-your-bones-healthy");
const MAC_BISPHOS = mac("Bisphosphonates", "treatments-and-drugs/bisphosphonates");
const MAC_NEURO = mac("Peripheral neuropathy", "impacts-of-cancer/peripheral-neuropathy");
const MAC_BOWEL = mac("Managing bowel late effects", "impacts-of-cancer/managing-bowel-late-effects");
const MAC_BLADDER = mac("Managing bladder late effects", "impacts-of-cancer/managing-bladder-late-effects");
const MAC_FINISHING = mac("Finishing cancer treatment", "after-treatment/finishing-treatment");
const MAC_FOLLOWUP = mac("Follow-up care after cancer treatment", "after-treatment/follow-up-care-after-treatment");
const MAC_HNA = mac("Holistic Needs Assessment (HNA)", "treatment/coping-with-treatment/holistic-needs-assessment-hna");
const MAC_LIFESTYLE = mac("Lifestyle and well-being after treatment", "after-treatment/lifestyle-and-wellbeing-after-treatment");
const MAC_ACTIVE = mac("Being physically active after treatment", "after-treatment/being-physically-active");
const MAC_WORRIES = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");

const CRUK_CHEMO_LATE = cruk("Late side effects of chemotherapy", "treatment/chemotherapy/side-effects/late-effects");
const CRUK_RADIO_LONG = cruk("Long term side effects of radiotherapy", "treatment/radiotherapy/side-effects/long-term-side-effects");
const CRUK_NERVE = cruk("Nerve changes and cancer drugs", "treatment/cancer-drugs/side-effects/nerve-changes");
const CRUK_DEXA = cruk("Bone density scan (DEXA, DXA)", "tests-and-scans/bone-density-scan-DEXA-DXA");
const CRUK_MH = cruk("Mental health during and after cancer treatment", "coping/mental-health-cancer/during-and-after-cancer-treatment");

const BHF_CHEMO: LearnSource = { label: "British Heart Foundation: Focus on: Chemotherapy and the heart", url: "https://www.bhf.org.uk/informationsupport/heart-matters-magazine/medical/chemotherapy" };
const BHF_HF: LearnSource = { label: "British Heart Foundation: Heart failure", url: "https://www.bhf.org.uk/informationsupport/conditions/heart-failure" };

const ROS_BREAST: LearnSource = { label: "Royal Osteoporosis Society: Breast cancer treatments", url: "https://theros.org.uk/information-and-support/causes-and-risk-factors/medicines-that-increase-your-risk/breast-cancer-treatments/" };
const ROS_MEDICINES: LearnSource = { label: "Royal Osteoporosis Society: Medicines that increase your risk", url: "https://theros.org.uk/information-and-support/causes-and-risk-factors/medicines-that-increase-your-risk/" };

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const lateEffectsAnswers: LearnArticle[] = [
  {
    id: "late-what-they-are",
    kicker: "Understanding",
    question: "What are late effects of cancer treatment?",
    hook: "Some side effects linger after treatment ends, and a few only show up months or years later. Knowing what to look out for means problems can be found early.",
    short: "Late effects are side effects that do not go away after cancer treatment, or that do not happen until months or years afterwards. Not everyone gets them, and most side effects go away once treatment is over. Your cancer team can tell you about the risks of your own treatment, and there is usually something they can do to help.",
    sections: [
      {
        heading: "Side effects that stay, or start later",
        paragraphs: [
          "Side effects usually go away after treatment finishes. But some take weeks or months to improve, and some may become permanent. Others may develop months or years after treatment. These are called late effects of treatment.",
          "Some doctors use two names. Long-term effects begin during treatment or shortly after it, and last longer than 3 months. Late effects begin months, or even years, after treatment finishes, as a delayed response to it.",
          "Some people have ongoing treatment, such as hormonal therapy or other anti-cancer drugs. In this situation, you may still be dealing with some ongoing side effects.",
        ],
      },
      {
        heading: "Not everyone gets them",
        paragraphs: [
          "Most chemotherapy side effects are temporary and get better once treatment is over. For some people, chemotherapy can cause long term changes in the body, months or years after treatment.",
          "Not everyone will have long term side effects after radiotherapy. Most side effects gradually go away in the weeks or months after treatment, and most of the long term ones are rare.",
          "There are many different chemotherapy drugs, and they all have different side effects. You probably won't get every side effect listed.",
        ],
      },
      {
        heading: "What they can affect",
        paragraphs: [
          "Possible late effects include swelling called lymphoedema, and effects on the heart and lungs, the bones, the head and neck, and the bowel and bladder. Treatment can also affect your sex life and fertility, and certain treatments may slightly increase the risk of another cancer in the future.",
          "Many people feel more tired than usual for a long time after chemotherapy. This can last more than a year after treatment finishes.",
        ],
      },
      {
        heading: "When a symptom worries you",
        paragraphs: [
          "Some late effects may be similar to symptoms you had when you were diagnosed. It can be frightening to have symptoms after treatment ends, and you may worry that the cancer has come back.",
          "Your cancer team will assess your symptoms and explain whether they could be caused by the treatment. You may need tests to check for other causes, and sometimes symptoms are caused by other conditions not related to the cancer or its treatment.",
        ],
      },
      {
        heading: "Help is there",
        paragraphs: [
          "Always tell your GP, cancer doctor or nurse about side effects or any symptoms you have. There is usually something they can do to improve them.",
          "You can arrange to see your cancer doctor or specialist nurse in between appointments, and you can contact your GP at any time. The Macmillan Support Line is free on 0808 808 00 00.",
        ],
      },
    ],
    helps: [
      "Ask your cancer team about the risk of late effects from your treatment, and which signs to look out for.",
      "Tell your cancer team if side effects do not improve after treatment, or if you get new symptoms.",
      "Ask whether there are any regular tests you can have to find problems early.",
      "Contact your cancer doctor or specialist nurse between appointments, or your GP at any time.",
      "Ask your healthcare team if you are worried about the long term side effects of your treatment.",
      "Call the Cancer Research UK nurses free on 0808 800 4040, 9am to 5pm, Monday to Friday.",
    ],
    tryThisWeek: [
      "Ask which late effects to watch for.",
      "Report side effects that have not gone.",
      "Ask about tests to find problems early.",
    ],
    ask: "Which late effects could my treatment cause, and what should I look out for?",
    interactive: {
      kind: "timeline",
      title: "When side effects can happen",
      steps: [
        { id: "during", when: "During treatment", title: "Side effects are common", points: ["Most people have side effects during pelvic radiotherapy.", "Most chemotherapy side effects are temporary."] },
        { id: "after", when: "Weeks or months after", title: "Most settle", points: ["Side effects usually go away after treatment finishes.", "Some take weeks or months to improve."] },
        { id: "long", when: "Lasting over 3 months", title: "Long-term effects", points: ["Effects that begin during or shortly after treatment and last longer than 3 months.", "Tell your cancer team if side effects do not improve."] },
        { id: "late", when: "Months or years later", title: "Late effects", points: ["Some effects begin months, or even years, after treatment finishes.", "Your cancer team can tell you which signs to look out for."] },
      ],
    },
    sources: [MAC_LATE, MAC_PELVIC, CRUK_CHEMO_LATE, CRUK_RADIO_LONG],
    quiz: {
      question: "When can late effects start?",
      options: [{ text: "Months or even years after treatment", right: true }, { text: "Only during treatment" }, { text: "Only in the first week afterwards" }],
      why: "Others may develop months or years after treatment. These are called late effects of treatment.",
    },
  },
  {
    id: "late-which-treatments",
    kicker: "Causes",
    question: "Which cancer treatments can cause late effects?",
    hook: "Chemotherapy, radiotherapy, hormonal therapy, surgery and newer drugs can each leave their own marks. Which ones depends on the treatment, the dose and the part of the body treated.",
    short: "Late effects can come from chemotherapy, radiotherapy, surgery, hormonal therapy, and targeted and immunotherapy drugs. Which effects are possible depends on the type and amount of treatment and the area of the body treated. Your team will explain the risk of long term side effects before you start treatment.",
    sections: [
      {
        heading: "Chemotherapy",
        paragraphs: [
          "Some chemotherapy drugs can cause long term problems with specific body organs, including the heart, lungs, liver, kidneys and bladder. You will have tests before and during your treatment so your doctor can keep an eye on side effects.",
          "Some chemotherapy drugs can damage nerves, especially in your hands and feet. Some can affect fertility, cause an early menopause, or make your bones thinner.",
          "Chemotherapy side effects usually go away after treatment stops, although some can last longer or may only start after treatment finishes.",
        ],
      },
      {
        heading: "Radiotherapy",
        paragraphs: [
          "Radiotherapy only affects the area of the body being treated. Changes to a part of the body outside the treatment area won't have been caused by the radiotherapy.",
          "Radiotherapy makes tissues less stretchy, which doctors call radiation fibrosis. Depending on the area treated, the bladder may hold less urine, bowel habits may change, or you may be more breathless after treatment to the lungs or chest.",
          "In some cases, side effects only develop months, or even years, after treatment starts. Current techniques shape the beams to fit the cancer, so less healthy tissue receives radiation and there are fewer side effects.",
        ],
      },
      {
        heading: "Hormonal therapy",
        paragraphs: [
          "Hormonal therapies do not usually damage the heart directly, but they can affect your risk of heart problems. They may raise your blood pressure or cholesterol, cause weight gain, or cause an early menopause.",
          "Hormonal therapy to treat breast or prostate cancer can increase the risk of bone thinning, called osteoporosis. This may mean you are more likely to break a bone.",
        ],
      },
      {
        heading: "Surgery and newer drugs",
        paragraphs: [
          "Surgery may damage nerves and cause symptoms in the affected area. For example, breast cancer surgery may cause numbness or tingling and pain in the arm.",
          "Radiotherapy or surgery to the lymph nodes may cause swelling called lymphoedema. An operation to remove both testicles, or both ovaries before the menopause, reduces hormone levels, which can lead to bone thinning.",
          "Some targeted therapy and immunotherapy drugs can affect the heart, and they may cause lung inflammation called pneumonitis. Researchers are still looking at the effect some of these newer drugs have on heart health.",
        ],
      },
      {
        heading: "What makes them more likely",
        paragraphs: [
          "The risk of heart problems depends on the type of cancer treatment you have and how much treatment you have. It may be higher if you have several cancer treatments at the same time.",
          "Long-lasting tiredness after chemotherapy is most likely after a lot of treatment, or very intensive treatment, such as a bone marrow or stem cell transplant.",
          "Your team will explain the risk of long term side effects before you start treatment. They will help you understand the benefits and risks, including any possible risks to your heart.",
        ],
      },
    ],
    helps: [
      "Ask your care team about the side effects you might get from your treatment.",
      "Ask whether your chemotherapy is likely to affect your hormone levels or cause an early menopause.",
      "Talk to your doctor if you had radiotherapy in the past and are worried about side effects.",
      "Talk through any worries about side effects with your doctor, nurse or radiographer.",
      "If you take a hormonal therapy, make healthy lifestyle changes to reduce the risks to your heart.",
    ],
    tryThisWeek: [
      "Ask about your treatment's side effects.",
      "Ask about changes to your hormones.",
      "Share any worries with your team.",
    ],
    ask: "Which of my treatments are most likely to cause late effects, and what should I watch for?",
    interactive: {
      kind: "flip-cards",
      title: "What each treatment can leave behind",
      intro: "Turn a card to see some of the late effects each treatment can cause. Not everyone gets them.",
      cards: [
        { id: "chemo", front: "Chemotherapy", when: "Drugs often given in cycles", back: "Some drugs can affect the heart, lungs, nerves, fertility or bones, months or years after treatment." },
        { id: "radio", front: "Radiotherapy", when: "Aimed at one area", back: "Only affects the area treated. Tissues there can become less stretchy, which is called radiation fibrosis." },
        { id: "hormone", front: "Hormonal therapy", when: "Often for breast or prostate cancer", back: "Can thin the bones, and may raise blood pressure or cholesterol or cause weight gain." },
        { id: "surgery", front: "Surgery", when: "Removing the cancer or lymph nodes", back: "May damage nerves in the area, or cause swelling called lymphoedema after surgery to the lymph nodes." },
        { id: "targeted", front: "Targeted and immunotherapy drugs", when: "Newer drug treatments", back: "Some can affect the heart, or cause lung inflammation called pneumonitis." },
      ],
    },
    sources: [CRUK_CHEMO_LATE, NHS_CHEMO, CRUK_RADIO_LONG, NHS_RADIO_SE, MAC_HEART, MAC_LATE, MAC_NEURO, MAC_BONE],
    quiz: {
      question: "Which part of the body can radiotherapy affect?",
      options: [{ text: "Only the area being treated", right: true }, { text: "The whole body" }, { text: "Only the skin" }],
      why: "Radiotherapy only affects the area of the body being treated.",
    },
  },
  {
    id: "late-heart",
    kicker: "Heart",
    question: "Can cancer treatment affect my heart?",
    hook: "Some treatments can strain the heart, during treatment or many years later. Many people never have a problem, and checks and a heart-healthy life both help.",
    short: "Some cancer treatments can affect how the heart works, causing problems that are short-term or long-term, and some may develop many years later. The risk depends on the type and amount of treatment, and many people who have these treatments do not develop any effects. Heart checks, a healthy lifestyle and knowing the warning signs all help.",
    sections: [
      {
        heading: "How treatment can affect the heart",
        paragraphs: [
          "Some cancer treatments can affect how your heart works. This may cause heart problems that are either short-term or long-term, and some problems may develop many years later.",
          "Certain treatments may increase your risk of heart and lung problems in the future. But many people who have these drugs or treatments do not develop any effects.",
          "Your risk may be higher if you have other risk factors for heart problems, had a heart problem before starting cancer treatment, or have several cancer treatments at the same time.",
        ],
      },
      {
        heading: "Cancer drugs",
        paragraphs: [
          "Some chemotherapy drugs may cause high blood pressure, abnormal heart rhythms, or symptoms of angina or heart failure. Some are only likely to cause heart problems at a high dose, so your cancer doctor plans treatment carefully and records the doses you are given.",
          "High doses of chemotherapy can cause heart failure, when the heart muscle is no longer as efficient as it should be at pumping blood around the body. This side effect is rare, and for most people the benefits of chemotherapy outweigh the risks.",
          "Some targeted therapy and immunotherapy drugs can also affect the heart. Hormonal therapies do not usually damage the heart directly, but they can raise blood pressure or cholesterol, or cause weight gain or an early menopause.",
        ],
      },
      {
        heading: "Radiotherapy",
        paragraphs: [
          "Most people do not develop heart problems due to radiotherapy. If you have radiotherapy to a part of your body away from the heart, it is unlikely to damage the heart.",
          "Radiotherapy to the middle of the chest or the left breast may increase the risk of heart problems. Modern radiotherapy techniques are very accurate, so heart problems after radiotherapy are rare.",
          "To protect the heart during radiotherapy to the left side of the chest, doctors may ask you to breathe in deeply and hold this breath while they give the radiation. This is called deep inspiration breath hold.",
        ],
      },
      {
        heading: "Signs to act on",
        paragraphs: [
          "The main symptoms of heart failure include feeling very tired or weak, shortness of breath, fainting or feeling lightheaded, and swelling in your feet and ankles. See your GP as soon as you can if you have any of these.",
          "The most common sign of a heart attack is sudden pain or discomfort in your chest that does not go away. If you think you or someone else may be having a heart attack, phone 999 for an ambulance straight away.",
          "If you are struggling to breathe or have chest pain, call 999 for immediate medical help. If you notice any other warning signs of heart problems, tell a doctor as soon as possible.",
        ],
      },
      {
        heading: "Looking after your heart",
        paragraphs: [
          "You can improve your heart health at any age, even if you already have a heart problem. Even small lifestyle changes can make a difference.",
          "Eat healthily, keep to a healthy weight, keep active and avoid drinking too much alcohol. If you smoke, giving up is the best thing you can do for your heart.",
          "Aerobic activities can help protect your heart and improve your fitness. The British Heart Foundation's Heart Helpline is free on 0808 802 1234, Monday to Friday, 9am to 5pm.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor if a treatment is likely to affect your heart.",
      "Tell your cancer doctor about any heart problems you have, so they can plan your treatment safely.",
      "See your GP as soon as you can if you feel very tired or breathless, or have swollen ankles.",
      "Phone 999 for an ambulance straight away if you think you are having a heart attack.",
      "Stop smoking, keep active and avoid drinking too much alcohol to look after your heart.",
      "Call the Heart Helpline free on 0808 802 1234 if you have questions about your heart.",
    ],
    tryThisWeek: [
      "Ask if your treatment affects the heart.",
      "Know when to call 999.",
      "Take one step for your heart.",
    ],
    ask: "Could my treatment affect my heart, and do I need any heart checks?",
    interactive: {
      kind: "signs",
      title: "Heart signs to act on",
      intro: "Tick any you have noticed. See your GP as soon as you can if you have any of these.",
      signs: ["Feeling very tired or weak", "Shortness of breath", "Fainting or feeling lightheaded", "Swelling in my feet and ankles", "Chest pain or discomfort"],
      after: "Chest pain that does not go away, or struggling to breathe: call 999 straight away.",
      copyHeading: "Heart symptoms I have noticed",
    },
    sources: [MAC_HEART, MAC_LATE, BHF_CHEMO, BHF_HF, MAC_ACTIVE],
    quiz: {
      question: "What is the most common sign of a heart attack?",
      options: [{ text: "Sudden chest pain or discomfort that does not go away", right: true }, { text: "A mild headache" }, { text: "Itchy skin" }],
      why: "The most common sign of a heart attack is sudden pain or discomfort in your chest that does not go away.",
    },
  },
  {
    id: "late-bones-hormones",
    kicker: "Bones and hormones",
    question: "How can treatment affect my bones and hormones?",
    hook: "Treatments that lower oestrogen or testosterone can thin the bones and bring on an early menopause. A scan, the right food and weight-bearing exercise all help protect them.",
    short: "Some cancer treatments lower the hormones oestrogen or testosterone, which can cause bone thinning and an early menopause. Your doctor may suggest a bone density scan, called a DEXA scan, and treatments to protect your bones. Calcium, vitamin D, weight-bearing exercise and not smoking all help.",
    sections: [
      {
        heading: "Hormones and bones",
        paragraphs: [
          "Some cancer treatments can reduce the levels of the hormones oestrogen or testosterone in the body. This can cause bone thinning, and cause more bone loss than usually happens with age.",
          "Treatments that can do this include some hormonal therapies, chemotherapy, radiotherapy, steroids and targeted therapies, and surgery that removes the ovaries or testes.",
          "Osteoporosis weakens bones, making them fragile and more likely to break. It is not usually painful until a bone is broken.",
        ],
      },
      {
        heading: "Breast and prostate cancer treatments",
        paragraphs: [
          "Aromatase inhibitors, such as anastrozole, letrozole and exemestane, reduce the amount of oestrogen made in the body, so they can reduce bone density. In women who have been through the menopause, tamoxifen slows bone loss and can lower the chance of osteoporosis.",
          "Treatment for prostate cancer may block or lower the amount of testosterone in the body. This can increase the chance of osteoporosis and broken bones.",
          "If you are having treatment for prostate cancer and have not had your bones checked, you can ask your specialist about a fracture risk assessment.",
        ],
      },
      {
        heading: "Early menopause",
        paragraphs: [
          "Radiotherapy, chemotherapy, certain hormone medicines and surgery to remove the ovaries can cause an early menopause. Symptoms can include hot flushes and night sweats, vaginal dryness, difficulty sleeping and low mood.",
          "Starting the menopause before the age of 45 brings a higher chance of problems with your bones and heart. Medicines such as hormone replacement therapy can replace missing hormones, but after certain types of breast cancer you may not be able to have hormone treatments.",
          "Radiotherapy to the pelvic area may increase the risk of small stress fractures in the pelvis, but this is not common. If you have pain or aching in the bones, tell your cancer team.",
        ],
      },
      {
        heading: "Checking your bones",
        paragraphs: [
          "If a treatment is likely to affect your bone health, your doctor will talk to you about this. They may do a bone density scan, also called a DEXA scan, which can show if your bones are at risk of a fracture.",
          "A DEXA scan uses low dose x-rays and takes about 10 to 20 minutes. It is painless, and you usually lie on a couch while it passes over your hips and lower spine.",
          "You may be offered treatments to protect your bones, such as calcium and vitamin D supplements, bisphosphonates or denosumab.",
        ],
      },
      {
        heading: "Looking after your bones",
        paragraphs: [
          "Most adults should have 700mg of calcium a day, from foods such as dairy products, tinned sardines, leafy green vegetables, nuts and beans. In autumn and winter, guidelines suggest a daily supplement of 10 micrograms of vitamin D.",
          "Weight-bearing exercise, such as walking, dancing and climbing stairs, is particularly good for your bones. Talk to your GP, cancer doctor or specialist nurse before starting any exercise programme.",
          "Smoking reduces bone density and weakens bones. Often drinking more alcohol than the guidelines advise may also reduce your bone density.",
        ],
      },
    ],
    helps: [
      "Ask whether your treatment may affect your bones, and whether you need a DEXA scan.",
      "If you are having prostate cancer treatment, ask your specialist about a fracture risk assessment.",
      "Tell your cancer team about any pain or aching in your bones.",
      "See a GP if you think you have menopause symptoms.",
      "Aim for 700mg of calcium a day, and think about vitamin D in autumn and winter.",
      "Do weight-bearing exercise, such as walking, after checking with your doctor or nurse.",
    ],
    tryThisWeek: [
      "Ask if you need a DEXA scan.",
      "Aim for 700mg of calcium a day.",
      "Do some weight-bearing exercise.",
    ],
    ask: "Could my treatment thin my bones, and should I have a DEXA scan?",
    interactive: {
      kind: "risk-check",
      title: "What could be thinning your bones?",
      intro: "Tick any that apply. Some can be changed, and your team can check the others.",
      items: [
        { id: "aromatase", label: "Aromatase inhibitors for breast cancer", note: "They reduce oestrogen, which can reduce bone density. Your team may suggest a DEXA scan.", changeable: false },
        { id: "prostate", label: "Hormone therapy for prostate cancer", note: "Lowering testosterone can raise the chance of osteoporosis. Ask about a fracture risk assessment.", changeable: false },
        { id: "menopause", label: "An early menopause after treatment", note: "Menopause before 45 brings a higher chance of bone problems. Hormone treatment may help some people.", changeable: false },
        { id: "steroids", label: "High doses of steroids", note: "High doses can cause bone loss, and the risk can increase the longer you take them.", changeable: false },
        { id: "smoking", label: "Smoking", note: "Smoking reduces bone density. Stopping is good for your bones and your general health.", changeable: true },
        { id: "exercise", label: "Little weight-bearing exercise", note: "Walking, dancing and climbing stairs are particularly good for bone health.", changeable: true },
        { id: "calcium", label: "Low calcium or vitamin D", note: "Most adults should have 700mg of calcium a day, and vitamin D helps the body absorb it.", changeable: true },
      ],
    },
    sources: [MAC_BONE, ROS_BREAST, ROS_MEDICINES, NHS_OSTEO, NHS_EARLY_MENO, MAC_LATE, CRUK_DEXA, MAC_KEEP_BONES],
    quiz: {
      question: "Which scan checks the strength of your bones?",
      options: [{ text: "A DEXA scan", right: true }, { text: "A heart scan" }, { text: "A blood pressure check" }],
      why: "They may do a bone density scan, also called a DEXA scan, which can show if your bones are at risk of a fracture.",
    },
  },
  {
    id: "late-bowel-bladder",
    kicker: "Bowel and bladder",
    question: "Why have my bowel or bladder changed since treatment?",
    hook: "Pelvic radiotherapy and bowel surgery can change how the bowel and bladder work, sometimes years later. These changes can often be managed, and the team is used to talking about them.",
    short: "Radiotherapy to the pelvis, and surgery or radiotherapy for bowel cancer, can cause lasting changes such as urgency, diarrhoea, leaks or needing to pass urine more often. These can often be managed or treated successfully, with changes to diet, medicines, pelvic floor exercises and specialist help. Some symptoms, such as bleeding, always need checking by a doctor.",
    sections: [
      {
        heading: "What can change",
        paragraphs: [
          "Radiotherapy to the pelvis can cause late effects on the bowel and bladder. These can often be managed or treated successfully.",
          "Radiotherapy can scar the large bowel, making it narrower and less flexible, so stools may be looser and you may need to go more often and more urgently. It can also scar the bladder wall, so the bladder cannot hold as much urine as before.",
          "Surgery to the rectum can sometimes cause long term changes to the nerves that control the bladder. Not all bladder symptoms are caused by cancer treatment, as the bladder and pelvic floor muscles naturally become weaker with age.",
        ],
      },
      {
        heading: "Symptoms to get checked",
        paragraphs: [
          "Bowel symptoms can include bleeding or mucus from the back passage, cramps, diarrhoea or constipation, urgency, leaks and a lot of wind. Bladder symptoms can include needing to pass urine more often or urgently, leaks, a burning feeling and blood in the urine.",
          "It is important to get ongoing bowel symptoms checked by your doctor, as they might not be caused by the radiotherapy. Always talk to your doctor about passing blood from your back passage, waking up from sleep to open your bowels, needing to rush to open your bowels, or bowel incontinence.",
          "Blood in the urine should always be checked by a doctor as soon as possible. If you have difficulty passing urine, see your doctor, as it can cause more serious problems if it is not treated.",
        ],
      },
      {
        heading: "Food, drink and medicines",
        paragraphs: [
          "Try to eat at regular times, as skipping meals may make symptoms worse. You may want to eat less of foods that loosen your stools or increase wind, ideally with the support of a dietitian.",
          "Try to drink at least 1 to 2 litres of fluids a day, unless your healthcare team tells you differently. You may want to limit fizzy and caffeinated drinks, alcohol and drinks with artificial sweeteners.",
          "Anti-diarrhoea medicines such as loperamide may help with urgency and loose stools. It is important to speak to a doctor or specialist nurse before taking any medicines.",
        ],
      },
      {
        heading: "Strengthening and retraining",
        paragraphs: [
          "Pelvic floor exercises strengthen the muscles used for bowel control, and are the most common treatment for leaking urine. A continence adviser can teach you how to do them correctly.",
          "A continence adviser may also suggest bowel retraining, which teaches you ways to resist the urge to go straight away and get into a regular pattern. Keeping to a healthy weight relieves pressure on your pelvic floor.",
          "Smoking or vaping can make urgency, loose stools or bowel incontinence worse, because nicotine stimulates the bowel.",
        ],
      },
      {
        heading: "Getting expert help",
        paragraphs: [
          "These problems may feel embarrassing to talk about, but try not to let that stop you getting advice. Doctors and nurses are used to speaking about them.",
          "Your doctor can refer you to a specialist, such as a gastroenterologist, urologist or continence adviser. A few hospitals have clinics for people with late effects, so ask your healthcare team whether there are any near you.",
        ],
      },
    ],
    helps: [
      "Get ongoing bowel symptoms checked by your doctor.",
      "See a doctor as soon as possible about blood in your urine or from your back passage.",
      "Eat at regular times, and drink at least 1 to 2 litres of fluids a day.",
      "Ask your nurse for a referral to a continence adviser.",
      "Speak to a doctor or specialist nurse before taking any medicines for diarrhoea.",
      "Ask whether there is a late effects clinic near you.",
    ],
    tryThisWeek: [
      "Get ongoing symptoms checked.",
      "Drink 1 to 2 litres a day.",
      "Ask about a continence adviser.",
    ],
    ask: "Could my bowel or bladder symptoms be a late effect, and can you refer me to a specialist or continence adviser?",
    interactive: {
      kind: "signs",
      title: "Changes to tell your doctor about",
      intro: "Tick any you have had. Always tell your doctor about bleeding, and get ongoing symptoms checked.",
      signs: ["Passing blood from my back passage", "Waking at night to open my bowels", "Needing to rush to open my bowels", "Bowel leaks (incontinence)", "Blood in my urine", "Needing to pass urine more often", "A burning feeling when I pass urine", "Difficulty passing urine"],
      after: "Blood in the urine should always be checked by a doctor as soon as possible.",
      copyHeading: "Bowel and bladder changes I have noticed",
    },
    sources: [MAC_LATE, MAC_PELVIC, MAC_BLADDER, MAC_BOWEL],
    quiz: {
      question: "Who can teach you pelvic floor exercises?",
      options: [{ text: "A continence adviser", right: true }, { text: "A dentist" }, { text: "An optician" }],
      why: "A continence adviser can teach you how to do the exercises correctly.",
    },
  },
  {
    id: "late-nerves",
    kicker: "Nerves",
    question: "Why do my hands or feet still feel numb or tingly?",
    hook: "Some cancer drugs damage the nerves in the hands and feet. For most people it slowly improves, and there are ways to ease the pain and stay safe.",
    short: "Peripheral neuropathy is damage to the nerves that carry messages between the brain, the spinal cord and the rest of the body, and some anti-cancer drugs are the most common cause in people with cancer. For most people the symptoms slowly improve after treatment, though this may take several months or longer, and for some the damage is permanent. Medicines, exercise and protecting your hands and feet can help.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Peripheral neuropathy is damage to the nerves that carry messages between the brain, the spinal cord and the rest of the body. Some anti-cancer drugs can damage the nerves, and this is the most common cause in people with cancer.",
          "The drugs most likely to cause it include platinum drugs, taxanes and vinca alkaloids, and some targeted drugs such as bortezomib and thalidomide. Even if a drug can cause nerve changes, it doesn't mean you'll definitely get them.",
          "Surgery may damage nerves in the area treated. Rarely, radiotherapy damages nerves too, and these symptoms may develop months or years after treatment.",
        ],
      },
      {
        heading: "How it can feel",
        paragraphs: [
          "Symptoms include tingling, pins and needles or numbness, a burning feeling, pain, and difficulty doing up buttons or picking up small objects. Neuropathy caused by chemotherapy usually affects the hands, feet and lower legs.",
          "If your feet are numb, you may lose your balance, which could make you more likely to fall. Some people are more sensitive to cold, or feel dizzy when they sit or stand up.",
          "Rarely, pelvic radiotherapy can affect the nerves in the pelvis. Tell your doctor if you notice any numbness or tingling, or weakness in your legs.",
        ],
      },
      {
        heading: "Will it get better?",
        paragraphs: [
          "For most people, symptoms gradually improve once the drug is stopped, as the nerves slowly recover. This may take several months or longer, and symptoms may get worse for a few weeks before they start to get better.",
          "For some people, nerve damage will be permanent. But many people find ways of coping with the changes.",
        ],
      },
      {
        heading: "Treatments that can help",
        paragraphs: [
          "A drug that has been shown to help with nerve pain is duloxetine. Other medicines include gabapentin and pregabalin, and your doctor might prescribe creams or patches.",
          "Doing some physical exercise can help reduce symptoms, and a physiotherapist can show you how to exercise safely. An occupational therapist can recommend aids and equipment if daily tasks such as washing or dressing are hard.",
          "Many hospitals have pain teams, and your GP or hospital doctor can refer you if your pain is difficult to manage.",
        ],
      },
      {
        heading: "Staying safe day to day",
        paragraphs: [
          "Wear gloves and socks in cold weather, gloves for gardening or washing up, and well-fitting shoes or boots. Do not walk around barefoot, and check your feet often so you can treat any scratches straight away.",
          "Test the temperature of hot water with your elbow before a bath or shower, as you may not be able to feel how hot it is. Keep floors clear of clutter and rooms well lit, with a light on if you get up in the night.",
          "If you live in England, Scotland or Wales, contact the DVLA to tell them if you have peripheral neuropathy. In Northern Ireland, contact the Driver and Vehicle Agency.",
        ],
      },
    ],
    helps: [
      "Tell your healthcare team about any new symptoms, or symptoms that are getting worse.",
      "See a GP about pain, tingling or loss of feeling in your feet.",
      "Ask to see a physiotherapist or occupational therapist.",
      "Protect your hands and feet with gloves, warm socks and well-fitting shoes.",
      "Test hot water with your elbow before a bath or shower.",
      "Tell the DVLA, or the DVA in Northern Ireland, if you have peripheral neuropathy.",
    ],
    tryThisWeek: [
      "Report any new numbness.",
      "Wear gloves for chores.",
      "Test bath water with your elbow.",
    ],
    ask: "Is the numbness in my hands or feet likely to improve, and could a physiotherapist or pain team help?",
    interactive: {
      kind: "scenarios",
      title: "Living with numb hands and feet",
      scenarios: [
        {
          id: "bath",
          situation: "You run a bath, but your feet can't feel heat well.",
          options: [{ text: "Test the water with your elbow first", best: true }, { text: "Step straight in" }],
          why: "Test the temperature of hot water with your elbow before baths, showers or doing the washing-up.",
        },
        {
          id: "night",
          situation: "You need the toilet in the night, and your balance is off.",
          options: [{ text: "Put a light on before you get up", best: true }, { text: "Feel your way in the dark" }],
          why: "Make sure rooms are well lit. Always put a light on if you get up during the night.",
        },
        {
          id: "buttons",
          situation: "Doing up buttons has become a struggle.",
          options: [{ text: "Ask about seeing an occupational therapist", best: true }, { text: "Put up with it" }],
          why: "An occupational therapist can offer specialist equipment, for example, a tool to help you fasten buttons.",
        },
        {
          id: "worse",
          situation: "The tingling in your feet seems to be getting worse.",
          options: [{ text: "Tell your healthcare team", best: true }, { text: "Wait for your next check-up" }],
          why: "It is important to tell your healthcare team if you notice any new symptoms, or if your symptoms are getting worse.",
        },
      ],
    },
    sources: [MAC_NEURO, CRUK_NERVE, MAC_PELVIC, NHS_NEURO],
    quiz: {
      question: "What happens to nerve symptoms for most people once the drug is stopped?",
      options: [{ text: "They gradually improve as the nerves recover", right: true }, { text: "They always get worse" }, { text: "They disappear within a day" }],
      why: "For most people, symptoms gradually improve once the drug is stopped, as the nerves slowly recover.",
    },
  },
  {
    id: "late-checks",
    kicker: "Checks",
    question: "Which checks should I ask about after treatment?",
    hook: "Follow-up appointments, heart checks, bone scans and your GP's routine tests can all catch problems early. Knowing which apply to you is the first step.",
    short: "After treatment, your cancer team usually arranges check-ups and any scans you need, to help notice possible problems early. Depending on your treatment, you may also have heart checks or a bone density scan. Your GP practice can keep up routine checks, and NHS screening still matters.",
    sections: [
      {
        heading: "Follow-up care",
        paragraphs: [
          "After your main treatment ends, your cancer team will usually arrange for you to have check-ups or any scans you may need. How often depends on the type and stage of the cancer, the treatment you have had and your needs.",
          "The appointment helps your cancer team notice any possible problems early. They may examine you, take a blood sample, and ask about your recovery and any side effects.",
          "In the first year after treatment, appointments may happen every few months, and less often as time goes on. Some people have supported self-management instead, with direct access to the cancer team if they need it.",
        ],
      },
      {
        heading: "Heart checks",
        paragraphs: [
          "Some people have regular appointments to check their heart health after cancer treatment. This is useful if you had a treatment that may cause heart problems many years later, or developed a heart problem during or after treatment.",
          "You may have your blood pressure checked, a blood test for cholesterol, or scans to check how your heart is working. These may be with a GP, a practice nurse or the hospital heart team.",
        ],
      },
      {
        heading: "Bone checks",
        paragraphs: [
          "If you have had cancer treatment that can make your bones thinner and weaker, you might have a DEXA scan. It uses low dose x-rays to work out the strength of your bones.",
          "Your doctor might also use an assessment tool to work out your risk of osteoporosis, looking at things such as your age, history of fractures and bone density. Your results help your doctors decide whether you need bone strengthening treatment.",
        ],
      },
      {
        heading: "Organs and other effects",
        paragraphs: [
          "You will have tests before and during chemotherapy so your doctor can keep an eye on side effects. Your doctors may continue to check you for some years after certain treatment.",
          "Your cancer team can tell you about the risk of late effects, and whether there are any regular tests you can have to find problems early.",
        ],
      },
      {
        heading: "Your GP and screening",
        paragraphs: [
          "Remember to keep going to any regular check-ups at your GP practice, such as blood pressure checks or blood tests. It is also important to take part in NHS screening.",
          "If you have other risk factors for heart problems, your GP or nurse can talk to you about a health check to assess your risk of heart disease and other conditions.",
          "You can ask for a cancer care review with your GP practice at any point. Your primary care team can help you understand which symptoms to look out for, and when to contact your cancer team.",
        ],
      },
    ],
    helps: [
      "Ask your cancer team whether there are any regular tests you can have to find problems early.",
      "Go to your follow-up appointments, and tell the clinic if you cannot attend.",
      "Ask whether you need regular heart checks after your treatment.",
      "Ask whether you need a DEXA scan to check your bones.",
      "Keep up regular check-ups at your GP practice, and take part in NHS screening.",
      "Write down questions before an appointment, and take someone with you.",
    ],
    tryThisWeek: [
      "Ask which tests apply to you.",
      "Keep up GP checks and screening.",
      "Write down questions first.",
    ],
    ask: "Which checks should I have after my treatment, how often, and who will arrange them?",
    interactive: {
      kind: "flip-cards",
      title: "Checks after treatment",
      intro: "Turn a card to see what each check is for. Ask your team which ones apply to you.",
      cards: [
        { id: "follow-up", front: "Follow-up appointment", when: "Every few months at first", back: "Your team may examine you, take a blood sample and ask about side effects, to notice problems early." },
        { id: "bp", front: "Blood pressure and cholesterol", when: "After treatment that may affect the heart", back: "Regular checks with a GP, practice nurse or heart team." },
        { id: "heart-scan", front: "Heart scans", when: "If your treatment may affect the heart", back: "Scans check how your heart is working." },
        { id: "dexa", front: "DEXA scan", when: "After treatment that can thin the bones", back: "Low dose x-rays work out the strength of your bones. It takes about 10 to 20 minutes." },
        { id: "screening", front: "NHS screening", when: "Alongside your follow-up", back: "It is still important to take part in NHS screening." },
        { id: "review", front: "Cancer care review", when: "Usually within 12 months of diagnosis", back: "A talk with your GP practice about how you are feeling, any worries and the support in your area." },
      ],
    },
    sources: [MAC_FOLLOWUP, MAC_HEART, CRUK_DEXA, CRUK_CHEMO_LATE, MAC_LATE],
    quiz: {
      question: "What does a DEXA scan work out?",
      options: [{ text: "The strength of your bones", right: true }, { text: "Your blood pressure" }, { text: "How well your kidneys work" }],
      why: "It uses low dose x-rays to work out the strength of your bones.",
    },
  },
  {
    id: "late-second-cancers",
    kicker: "Second cancers",
    question: "Could my treatment cause another cancer?",
    hook: "Some treatments slightly raise the risk of a new cancer years later. The risk is small, and the benefits of treatment usually far outweigh it.",
    short: "Certain cancer treatments, including some chemotherapy drugs and radiotherapy, may slightly increase the risk of a new cancer in the future. This is a very small risk, and usually the benefits of treatment far outweigh it. A healthy lifestyle, NHS screening and reporting new symptoms all help.",
    sections: [
      {
        heading: "A small risk",
        paragraphs: [
          "Certain cancer treatments may slightly increase the risk of developing another cancer in the future. But usually, the benefits of treatment will far outweigh any risk.",
          "Developing another cancer is a long term side effect of some chemotherapy drugs. It is a very small risk, and you would be at a higher risk from your existing cancer if you didn't have the treatment your doctor recommends.",
          "Radiotherapy can slightly increase the risk of another type of cancer in the years after treatment. But the chance of this happening is small, and the benefits of treatment generally outweigh the risk.",
        ],
      },
      {
        heading: "Not the same as secondary cancer",
        paragraphs: [
          "Pelvic radiotherapy may slightly increase the risk of a new and different cancer in the treated area. This is not the same as secondary cancer, which is when cancer spreads from where it started.",
          "Your doctor will talk to you if this is a specific risk with the drugs you are having, and your cancer team can give you more information about it.",
        ],
      },
      {
        heading: "Lowering your risk",
        paragraphs: [
          "Smoking increases your risk of heart disease, stroke and developing new cancers, so if you smoke, stopping is the healthiest decision you can make. Alcohol is also linked with an increased risk of some cancers.",
          "Being more physically active reduces the risk of getting another cancer. Keeping to a healthy weight helps too, as excess body fat has been linked to some cancers, such as bowel, breast and womb cancer.",
          "Some cancer treatments can make your skin more sensitive to the sun. It is always important to protect your skin in the sun to help reduce the risk of skin cancer.",
        ],
      },
      {
        heading: "Staying alert",
        paragraphs: [
          "It is important to take part in NHS screening. Ask your cancer team about any symptoms you should look out for after treatment.",
          "Tell your cancer team if you have any new symptoms. You do not have to wait until your follow-up appointment to contact them, and if you have been fully discharged you can contact your GP.",
        ],
      },
    ],
    helps: [
      "Ask your cancer team whether your treatment carries a risk of a second cancer.",
      "Ask your doctor, nurse or a local stop smoking service for help to stop smoking.",
      "Keep active and keep to a healthy weight.",
      "Protect your skin in the sun.",
      "Take part in NHS screening.",
      "Tell your cancer team or GP about any new symptoms.",
    ],
    tryThisWeek: [
      "Ask about your own risk.",
      "Protect your skin in the sun.",
      "Keep up NHS screening.",
    ],
    ask: "Does my treatment carry any risk of a second cancer, and is there anything I can do to lower it?",
    interactive: {
      kind: "scenarios",
      title: "Thinking about the risk",
      scenarios: [
        {
          id: "worry",
          situation: "You read that treatment can cause another cancer, and it frightens you.",
          options: [{ text: "Ask your team about your own risk", best: true }, { text: "Assume it will happen to you" }],
          why: "Usually, the benefits of treatment will far outweigh any risk. Your cancer team can give you more information about this.",
        },
        {
          id: "smoking",
          situation: "You still smoke now and then since treatment.",
          options: [{ text: "Ask for help from a stop smoking service", best: true }, { text: "Decide it is too late to matter" }],
          why: "Smoking increases your risk of heart disease, stroke and developing new cancers.",
        },
        {
          id: "screening",
          situation: "An NHS screening invitation arrives.",
          options: [{ text: "Take part", best: true }, { text: "Ignore it, because you have had cancer already" }],
          why: "It is also important to take part in NHS screening.",
        },
        {
          id: "symptom",
          situation: "You notice a new symptom months before your next check-up.",
          options: [{ text: "Contact your cancer team now", best: true }, { text: "Wait for the appointment" }],
          why: "You do not have to wait until your follow-up appointment to contact your cancer team.",
        },
      ],
    },
    sources: [MAC_LATE, CRUK_CHEMO_LATE, NHS_RADIO_SE, MAC_PELVIC, MAC_LIFESTYLE, MAC_ACTIVE, MAC_FOLLOWUP, MAC_WORRIES],
    quiz: {
      question: "How does the risk of a second cancer compare with the benefits of treatment?",
      options: [{ text: "The benefits usually far outweigh the risk", right: true }, { text: "The risk is usually bigger" }, { text: "Treatment always causes a second cancer" }],
      why: "Certain cancer treatments may slightly increase the risk of developing another cancer in the future. But usually, the benefits of treatment will far outweigh any risk.",
    },
  },
  {
    id: "late-healthy-living",
    kicker: "Living well",
    question: "Can a healthy lifestyle help with late effects?",
    hook: "Moving more, eating well, not smoking and drinking less can ease some effects and lower the risk of others.",
    short: "A healthy lifestyle can help you recover after treatment, may reduce the risk of some late effects, and lowers the risk of other illnesses such as heart disease, diabetes and stroke. Being active, eating healthily, keeping to a healthy weight, not smoking and following drinking guidelines all help. Your cancer team or GP can advise you on what is safe for you.",
    sections: [
      {
        heading: "Why it helps",
        paragraphs: [
          "A healthy lifestyle can help you recover after treatment. It can also help to reduce the risk of other illnesses, such as heart disease, diabetes and strokes.",
          "Your cancer doctor or nurse can tell you if there is anything you can do to help reduce the risk of certain late effects. This could include not smoking, keeping to a healthy weight and being more physically active.",
        ],
      },
      {
        heading: "Being active",
        paragraphs: [
          "Physical activity is usually safe after cancer treatment, but it is important to get advice from a healthcare professional. Being active may help you manage ongoing side effects such as tiredness, and reduce your risk of late effects.",
          "Aerobic activities can help protect your heart. Activities where you support your own body weight, such as walking, dancing, lunges and squats, help keep bones strong.",
          "It is best to do activities that raise the heart rate for 30 minutes, five times a week, which could be three 10-minute periods. Add exercises for muscle strength, and for balance, on at least 2 days each week.",
        ],
      },
      {
        heading: "Eating and weight",
        paragraphs: [
          "For most people, a healthy, balanced diet includes lots of fruit and vegetables, plenty of starchy foods, wholegrains, some protein-rich foods and some milk and dairy foods. If surgery to the bowel or radiotherapy to the pelvis has changed how your bowel works, a high-fibre diet may not suit you.",
          "Some people gain weight during chemotherapy or when taking hormonal therapies. If you need to lose weight, it is important to do this slowly, by eating a healthy diet and being more physically active.",
        ],
      },
      {
        heading: "Smoking and alcohol",
        paragraphs: [
          "If you smoke, stopping is the healthiest decision you can make. Smoking can also make certain late effects of treatment worse, including bladder and bowel problems.",
          "You are 4 times more likely to quit if you have specialist support from a stop smoking service and use products such as nicotine replacement therapy, or medicines to manage cravings.",
          "NHS guidelines suggest not regularly drinking more than 14 units of alcohol in a week, spreading them over 3 or more days, and having several alcohol-free days every week.",
        ],
      },
      {
        heading: "Stress, sleep and support",
        paragraphs: [
          "Stress can raise your blood pressure and put more strain on your heart. It may help to talk about your feelings, do things you enjoy, keep active, or try relaxation, meditation or yoga.",
          "You could ask if there are health and well-being clinics or events in your area. They usually give information about healthy living, possible long-term effects of treatment, and who to contact if symptoms happen.",
        ],
      },
    ],
    helps: [
      "Ask your cancer team or GP what type and amount of exercise is safe for you.",
      "Build up activity slowly, as doing too much too soon can make you more tired.",
      "Ask your doctor, nurse or a local stop smoking service for help to stop smoking.",
      "Keep to no more than 14 units of alcohol a week, spread over 3 or more days.",
      "Follow your cancer team's or dietitian's advice if treatment has changed how your bowel works.",
      "Ask about health and well-being clinics in your area.",
    ],
    tryThisWeek: [
      "Ask what exercise is safe for you.",
      "Build up activity slowly.",
      "Plan some alcohol-free days.",
    ],
    ask: "Is there anything I can do to lower my risk of late effects, and what exercise is safe for me?",
    interactive: {
      kind: "scenarios",
      title: "Small changes, real benefits",
      scenarios: [
        {
          id: "start",
          situation: "You want to get fit fast now treatment has finished.",
          options: [{ text: "Ask what's safe, then build up slowly", best: true }, { text: "Start hard workouts every day" }],
          why: "You can slowly increase how much activity you do. Doing too much too soon can make you feel more tired.",
        },
        {
          id: "fibre",
          situation: "Radiotherapy changed your bowel, and high-fibre meals upset it.",
          options: [{ text: "Follow your team's or dietitian's advice", best: true }, { text: "Eat even more fibre" }],
          why: "Some treatments may cause changes in how your bowel works. For some people, this may mean a diet that is high in fibre may not be suitable.",
        },
        {
          id: "quit",
          situation: "You have tried to stop smoking on your own, and it hasn't worked.",
          options: [{ text: "Get specialist support from a stop smoking service", best: true }, { text: "Give up trying" }],
          why: "You are 4 times more likely to quit if you have specialist support from a stop smoking service.",
        },
        {
          id: "weight",
          situation: "Hormonal therapy has added weight you would like to lose.",
          options: [{ text: "Lose it slowly with healthy food and activity", best: true }, { text: "Try a crash diet" }],
          why: "If you need to lose weight, it is important to do this slowly. You can do this by eating a healthy diet and being more physically active.",
        },
      ],
    },
    sources: [MAC_LIFESTYLE, MAC_LATE, MAC_ACTIVE, MAC_KEEP_BONES, MAC_HEART],
    quiz: {
      question: "How much more likely are you to stop smoking with a stop smoking service and support?",
      options: [{ text: "4 times more likely", right: true }, { text: "No more likely" }, { text: "Half as likely" }],
      why: "You are 4 times more likely to quit if you have specialist support from a stop smoking service and use products such as nicotine replacement therapy, or medicines to manage cravings.",
    },
  },
  {
    id: "late-telling-doctors",
    kicker: "Other doctors",
    question: "Why should I tell other doctors about my cancer treatment?",
    hook: "A surgeon, dentist, GP or pharmacist may need to know what you have had, so they can plan your care safely and spot late effects.",
    short: "Past cancer treatment can affect how other health professionals plan your care, from operations and new medicines to dental work and pregnancy. Your cancer team sends a treatment summary to your GP, and you can share your care plan with other healthcare professionals. Telling them about your treatment, your medicines and any new symptoms helps keep you safe.",
    sections: [
      {
        heading: "Your GP knows, others may not",
        paragraphs: [
          "Your cancer team will send your GP a report about your treatment, called a treatment summary. It is a good idea to make an appointment with your GP when treatment finishes, and you should always tell them about any problems you need help with.",
          "Your cancer team should give you a copy of your care plan, so you can share it with other healthcare professionals.",
        ],
      },
      {
        heading: "Before an operation or new treatment",
        paragraphs: [
          "It is important to tell your doctor about any heart problems you have, so they can plan your treatment safely. If you are not sure of the name of a condition or treatment, check your medical notes.",
          "If you need anti-cancer treatment, it is important to tell your doctor if you already have peripheral neuropathy. There are anti-cancer drugs that do not cause it or make it worse.",
          "Pregnancy and giving birth can put pressure on your heart. If you are thinking about becoming pregnant after cancer treatment, ask your doctor for advice.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Tell your cancer team if you are taking any prescribed or non-prescribed medicines, including vitamins, minerals, or herbal or complementary medicines. These can affect other drugs, including some cancer treatments.",
          "Some medicines can make bowel symptoms worse. If you think a drug might be doing this, tell your doctor, who may be able to prescribe a different one.",
          "If you are having mental health treatment, let the people treating you know about your cancer, including your GP if they prescribe your medication.",
        ],
      },
      {
        heading: "Your dentist",
        paragraphs: [
          "After radiotherapy to the head and neck, you will need regular visits to your dentist and oral hygienist. Keeping your teeth and mouth clean can also help.",
          "Rarely, bisphosphonates can affect the jawbone. While you are having them, it is important to avoid dental treatment that could affect the jawbone, such as having a tooth removed, and your healthcare team can tell you more.",
        ],
      },
      {
        heading: "When something new comes up",
        paragraphs: [
          "Some late effects may be similar to symptoms you had when you were diagnosed. Your cancer team will assess your symptoms and explain whether they could be caused by the treatment.",
          "If you live in England, Scotland or Wales and have peripheral neuropathy, you need to contact the DVLA. They will advise you of any restrictions on your right to drive.",
        ],
      },
    ],
    helps: [
      "See your GP when treatment finishes, and tell them about any problems you need help with.",
      "Share your care plan with other healthcare professionals.",
      "Tell any doctor planning your treatment about heart problems or nerve damage you have.",
      "Tell your team about all your medicines, including vitamins and herbal remedies.",
      "Ask your doctor for advice before trying for a pregnancy after treatment.",
      "Keep up dental visits, and ask your team before dental work if you are having bisphosphonates.",
    ],
    tryThisWeek: [
      "Book a GP visit after treatment.",
      "List all your medicines.",
      "Check before dental work.",
    ],
    ask: "What should other doctors and my dentist know about the treatment I have had?",
    interactive: {
      kind: "scenarios",
      title: "Who needs to know?",
      scenarios: [
        {
          id: "operation",
          situation: "You are booked in for an operation, and you have a heart problem.",
          options: [{ text: "Tell the doctor about your heart problem", best: true }, { text: "Assume they already know" }],
          why: "It is important to tell them about any heart problems you have so they can plan your treatment safely.",
        },
        {
          id: "herbal",
          situation: "You have started a herbal remedy from the chemist.",
          options: [{ text: "Tell your cancer team about it", best: true }, { text: "Keep it to yourself" }],
          why: "Tell them if you are taking any prescribed or non-prescribed medicines. These can affect other drugs, including some cancer treatments.",
        },
        {
          id: "dentist",
          situation: "Your dentist suggests taking out a tooth while you are having bisphosphonates.",
          options: [{ text: "Check with your healthcare team first", best: true }, { text: "Go ahead straight away" }],
          why: "It is important to avoid having any dental treatment that could affect your jawbone when you are having bisphosphonates.",
        },
        {
          id: "baby",
          situation: "You are thinking about trying for a baby after treatment.",
          options: [{ text: "Ask your doctor for advice first", best: true }, { text: "Just go ahead" }],
          why: "Pregnancy and giving birth can put pressure on your heart. If you are thinking about becoming pregnant after cancer treatment, ask your doctor for advice.",
        },
      ],
    },
    sources: [MAC_FOLLOWUP, MAC_FINISHING, MAC_HEART, MAC_NEURO, MAC_BOWEL, CRUK_MH, MAC_LATE, MAC_BISPHOS],
    quiz: {
      question: "Who does your cancer team send your treatment summary to?",
      options: [{ text: "Your GP", right: true }, { text: "Your employer" }, { text: "Your dentist" }],
      why: "Your cancer team will send your GP a report about your treatment, called a treatment summary.",
    },
  },
  {
    id: "late-treatment-summary",
    kicker: "Your summary",
    question: "What is a treatment summary, and how do I get one?",
    hook: "A short record of the treatment you had, the side effects to watch for and who to contact. It helps you, your GP and anyone else caring for you.",
    short: "At the end of treatment, your cancer team may create a treatment summary describing the cancer and treatment you had, possible side effects, symptoms to look out for, follow-up plans and contact details. They give you a copy and send one to your GP. If you are not given one and would like one, talk to your cancer team.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "At the end of your treatment, your cancer team may create a treatment summary. This may be after a certain phase of treatment, or after you finish all your treatment.",
          "It describes the treatment you have had and helps you understand what to expect next. Knowing what happens next can help you adjust.",
        ],
      },
      {
        heading: "What is in it",
        paragraphs: [
          "Your treatment summary will include information about the cancer and treatment you have had, possible side effects of treatment, and any symptoms to look out for.",
          "It will also include details of follow-up appointments and tests you may need, and contact details for your cancer team.",
        ],
      },
      {
        heading: "Getting a copy",
        paragraphs: [
          "Your cancer team will give you a copy of your treatment summary, and they will also send one to your GP. If you are not given a copy and would like one, talk to your cancer team.",
          "End-of-treatment summaries are not standard practice in all hospitals, but more hospitals are doing them. You can also ask for copies of any letters, so that you can keep track.",
        ],
      },
      {
        heading: "Your care plan",
        paragraphs: [
          "In some hospitals, the discussion at the end of treatment is called a Holistic Needs Assessment. You answer some questions about all areas of your life, talk through your concerns with someone from your team, and agree a plan for your care and support.",
          "Your cancer team may write this care plan for you. It explains how you will be supported now and in the future, and you can have another assessment and make a new plan at any time.",
          "If you are not offered a Holistic Needs Assessment and would like one, you can ask someone from your healthcare team or your GP about it.",
        ],
      },
      {
        heading: "Using it",
        paragraphs: [
          "If you have a personalised care plan or treatment summary, take it with you to your cancer care review at your GP practice. If you have finished treatment, your GP may already have a copy from your cancer team.",
          "Keep your key worker's contact details in your phone or somewhere safe. You may want to ask them about late effects, symptoms to look out for, and what you can do to stay healthy and well.",
        ],
      },
    ],
    helps: [
      "Ask your cancer team for a copy of your treatment summary if you have not been given one.",
      "Ask for copies of any letters, so that you can keep track.",
      "Ask for a Holistic Needs Assessment if you are not offered one.",
      "Take your treatment summary or care plan to your cancer care review.",
      "Keep your key worker's contact details in your phone or somewhere safe.",
    ],
    tryThisWeek: [
      "Ask for your treatment summary.",
      "Ask for copies of letters.",
      "Save your key worker's details.",
    ],
    ask: "Can I have a treatment summary and a care plan to share with my GP and other doctors?",
    interactive: {
      kind: "flip-cards",
      title: "What your summary tells you",
      intro: "Turn a card to see each part of a treatment summary.",
      cards: [
        { id: "treatment", front: "The cancer and treatment", when: "What you have had", back: "A record of the cancer and the treatment you have had." },
        { id: "side-effects", front: "Possible side effects", when: "From the treatment you had", back: "The possible side effects of your treatment." },
        { id: "symptoms", front: "Symptoms to look out for", when: "After treatment ends", back: "Any symptoms to look out for." },
        { id: "follow-up", front: "Follow-up plans", when: "The months ahead", back: "Details of follow-up appointments and tests you may need." },
        { id: "contacts", front: "Who to contact", when: "Whenever you need them", back: "Contact details for your cancer team." },
      ],
    },
    sources: [MAC_FINISHING, MAC_FOLLOWUP, MAC_HNA],
    quiz: {
      question: "Who gets a copy of your treatment summary?",
      options: [{ text: "You and your GP", right: true }, { text: "Only the hospital" }, { text: "Your employer" }],
      why: "Your cancer team will give you a copy of your treatment summary, and they will also send one to your GP.",
    },
  },
  {
    id: "late-mood",
    kicker: "Mood",
    question: "How do I cope with living with long-term effects?",
    hook: "It can be hard when treatment ends but its effects don't. Feeling frustrated or low is common, and support is there, including right now if you need it.",
    short: "Living with effects that last can feel isolating and frustrating, and it is common to worry that new symptoms mean the cancer has come back. Talking, support groups, being active and talking therapies can help, and worries often get better with time. If you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "Why it can feel hard",
        paragraphs: [
          "Some people start struggling with their mental health after treatment. This might be because you have less support from the hospital or friends and family, and others may think you're OK once treatment has finished.",
          "After cancer treatment, it is normal for your body to feel different, and for you to feel differently about your body. It is natural to feel isolated and frustrated if symptoms mean you have to make changes to your lifestyle.",
        ],
      },
      {
        heading: "Worry about symptoms",
        paragraphs: [
          "When treatment has finished, it is common to worry that every symptom you have is linked to cancer. Asking your cancer team about possible late effects and their symptoms can help you manage these worries.",
          "Worrying about the cancer coming back is common, and these feelings often get better with time. Focusing on what you can control, talking about your feelings and doing activities you enjoy can help.",
        ],
      },
      {
        heading: "Sadness or depression?",
        paragraphs: [
          "People often have feelings of sadness or loss after cancer treatment, and these often improve as you recover. But for some people, the low mood continues or gets worse, and may become depression.",
          "Signs can include feeling low most of the time, losing interest in things you used to enjoy, changes in sleeping, eating or concentration, and feeling helpless. If these go on for more than 2 weeks, talk to your doctor or nurse.",
          "Depression is common, and there are many things that can help. Your GP or specialist nurse can listen, refer you to a counsellor or psychologist, or talk to you about medication.",
        ],
      },
      {
        heading: "What can help",
        paragraphs: [
          "Talking to family, friends or a partner can help, and so can talking to people going through similar experiences, in a support group or online.",
          "Being physically active during and after treatment can help improve your mood and confidence. You can refer yourself to NHS talking therapies without speaking to a GP, if you are registered with a GP and aged 18 or over, or 16 or over in some areas.",
          "Bring up mental health during appointments. Healthcare professionals might not ask, but they are trained for these discussions. The Cancer Research UK nurses are free on 0808 800 4040, Monday to Friday, 9am to 5pm.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you have any thoughts about self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment. If you do not want to talk on the phone, you can text SHOUT to 85258.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Ask your cancer team about possible late effects and their symptoms.",
      "Talk to family, friends or a support group about how you feel.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Refer yourself to NHS talking therapies, or ask your GP about counselling.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell someone close how you feel.",
      "Look up NHS talking therapies.",
      "Ask which symptoms to watch for.",
    ],
    ask: "Could my low mood be depression, and can you refer me for a talking therapy or counselling?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor or nurse",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: ["Feeling low or sad most of the time", "Losing interest in things I used to enjoy", "Changes in my sleep", "Changes in my eating", "Trouble concentrating", "Feeling helpless or vulnerable", "Problems starting or finishing tasks"],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [CRUK_MH, MAC_PELVIC, MAC_NEURO, MAC_WORRIES, MAC_DEPRESSION, MAC_ACTIVE, NHS_TALKING, NHS_URGENT, NHS_SUICIDAL, SAMARITANS],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, as they always pass" }],
      why: "If these go on for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
];
