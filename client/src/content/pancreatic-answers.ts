import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Pancreatic cancer page's pieces (content/library-conditions/cancer-more.ts,
// `pancreaticCancer`). Every sentence was written from wording checked on 22 October 2026 on the pages listed
// under each answer's `sources`; nothing is added that those pages do not say. Most of it comes from
// Pancreatic Cancer UK, with the NHS, Macmillan Cancer Support, Cancer Research UK, Marie Curie, the
// government's lasting power of attorney pages and Samaritans. The answers describe treatment, recovery and
// living with after-effects; there are no survival or life-expectancy figures anywhere. Emergency advice
// (infection during chemotherapy, a stent infection, hypos, DKA and spinal cord compression) follows the
// sources' own words, and the mood answer follows safe-messaging guidance with the crisis routes exactly as
// the NHS, Macmillan and Samaritans give them. General information only; it never replaces what a person's
// own cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const pcuk = (label: string, path: string): LearnSource => ({ label: `Pancreatic Cancer UK: ${label}`, url: `https://www.pancreaticcancer.org.uk/information-and-support/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/pancreatic-cancer/${path}` });
const mc = (label: string, path: string): LearnSource => ({ label: `Marie Curie: ${label}`, url: `https://www.mariecurie.org.uk/${path}` });

const NHS_TREATMENT = nhs("Treatment for pancreatic cancer", "conditions/pancreatic-cancer/treatment/");
const NHS_TESTS = nhs("Tests and next steps for pancreatic cancer", "conditions/pancreatic-cancer/tests-and-next-steps/");
const NHS_HELP = nhs("Help and support for pancreatic cancer", "conditions/pancreatic-cancer/help-and-support/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT_MH = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");
const NHS_CARER = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");
const NHS_ADVANCE_STATEMENT = nhs("Advance statement about your care wishes", "tests-and-treatments/end-of-life-care/planning-ahead/advance-statement/");

const PCUK_TREATMENTS = pcuk("Treatments for pancreatic cancer", "treatments-for-pancreatic-cancer/");
const PCUK_SURGERY = pcuk("Surgery to remove pancreatic cancer", "treatments-for-pancreatic-cancer/surgery-for-pancreatic-cancer/");
const PCUK_SURGERY_TYPES = pcuk("Types of surgery for pancreatic cancer", "treatments-for-pancreatic-cancer/surgery-for-pancreatic-cancer/whipples-operation-and-other-types-of-surgery/");
const PCUK_GOING_HOME = pcuk("Going home from hospital", "treatments-for-pancreatic-cancer/surgery-for-pancreatic-cancer/recovering-from-surgery/");
const PCUK_CHECKUPS = pcuk("Check-ups after surgery", "treatments-for-pancreatic-cancer/surgery-for-pancreatic-cancer/check-ups-after-surgery/");
const PCUK_CHEMO = pcuk("Chemotherapy for pancreatic cancer", "treatments-for-pancreatic-cancer/chemotherapy/");
const PCUK_CHEMO_USE = pcuk("How is chemotherapy used for pancreatic cancer?", "treatments-for-pancreatic-cancer/chemotherapy/how-is-chemotherapy-used-for-pancreatic-cancer/");
const PCUK_CHEMO_BLOOD = pcuk("Side effects: how chemotherapy affects the blood", "treatments-for-pancreatic-cancer/chemotherapy/how-does-chemotherapy-affect-the-blood/");
const PCUK_CHEMO_SE = pcuk("Side effects of chemotherapy", "treatments-for-pancreatic-cancer/chemotherapy/side-effects-of-chemotherapy/");
const PCUK_CHEMO_AFTER = pcuk("What happens after chemotherapy?", "treatments-for-pancreatic-cancer/chemotherapy/what-happens-afterwards/");
const PCUK_RADIO = pcuk("Radiotherapy for pancreatic cancer", "treatments-for-pancreatic-cancer/radiotherapy-for-pancreatic-cancer/");
const PCUK_STENT_PROBLEMS = pcuk("Are there any problems with stents for a blocked bile duct?", "treatments-for-pancreatic-cancer/stent-for-a-blocked-bile-duct/are-there-any-problems-with-stents-for-a-blocked-bile-duct/");
const PCUK_JAUNDICE = pcuk("Treating jaundice if you have pancreatic cancer", "managing-symptoms-and-side-effects/managing-jaundice-if-you-have-pancreatic-cancer/");
const PCUK_EMERGENCY = pcuk("Who do I contact in an emergency?", "your-care/who-do-i-contact-in-an-emergency/");
const PCUK_TEAM = pcuk("Your medical team", "your-care/healthcare-team-members/");
const PCUK_UNDERSTANDING = pcuk("What to expect: understanding your diagnosis and treatment options", "your-care/what-to-expect-from-your-care/understanding-your-diagnosis-and-treatment-options/");
const PCUK_SYMPTOM_CARE = pcuk("What to expect: how will symptoms and side effects be managed?", "your-care/what-to-expect-from-your-care/how-will-symptoms-and-side-effects-be-managed/");
const PCUK_NOT_CURED = pcuk("What to expect: care if your cancer can't be cured", "your-care/what-to-expect-from-your-care/if-your-cancer-cant-be-cured/");
const PCUK_PALLIATIVE = pcuk("What are palliative care and supportive care?", "your-care/palliative-care-and-supportive-care/");
const PCUK_STAGE1 = pcuk("What is stage 1 pancreatic cancer?", "just-diagnosed-with-pancreatic-cancer/stage-1-pancreatic-cancer/");
const PCUK_STAGE2 = pcuk("What is stage 2 pancreatic cancer?", "just-diagnosed-with-pancreatic-cancer/stage-2-pancreatic-cancer/");
const PCUK_STAGE3 = pcuk("What is stage 3 pancreatic cancer?", "just-diagnosed-with-pancreatic-cancer/stage-3-pancreatic-cancer/");
const PCUK_STAGE4 = pcuk("What is stage 4 pancreatic cancer?", "just-diagnosed-with-pancreatic-cancer/stage-4-pancreatic-cancer/");
const PCUK_DIGESTION = pcuk("How does pancreatic cancer affect digestion and nutrition?", "managing-symptoms-and-side-effects/diet-and-pancreatic-cancer/how-does-pancreatic-cancer-affect-digestion-and-nutrition/");
const PCUK_DIGESTION_SYMPTOMS = pcuk("What symptoms are caused by digestion problems?", "managing-symptoms-and-side-effects/diet-and-pancreatic-cancer/what-symptoms-are-caused-by-problems-with-diet-and-digestion/");
const PCUK_DIETITIAN = pcuk("Who can help manage my diet?", "managing-symptoms-and-side-effects/diet-and-pancreatic-cancer/who-can-help-manage-my-diet-symptoms/");
const PCUK_PERT = pcuk("Pancreatic enzyme replacement therapy (PERT)", "managing-symptoms-and-side-effects/diet-and-pancreatic-cancer/pancreatic-enzyme-replacement-therapy-pert/");
const PCUK_PERT_HOW = pcuk("How do I take pancreatic enzyme replacement therapy?", "managing-symptoms-and-side-effects/diet-and-pancreatic-cancer/pancreatic-enzyme-replacement-therapy-pert/how-do-i-take-pancreatic-enzyme-replacement-therapy-if-i-have-pancreatic-cancer/");
const PCUK_PERT_NOT_HELPING = pcuk("What if pancreatic enzyme replacement therapy does not help?", "managing-symptoms-and-side-effects/diet-and-pancreatic-cancer/pancreatic-enzyme-replacement-therapy-pert/what-if-pancreatic-enzyme-replacement-therapy-doesnt-help-my-symptoms/");
const PCUK_SUPPLEMENTS = pcuk("Nutritional supplements for pancreatic cancer", "managing-symptoms-and-side-effects/diet-and-pancreatic-cancer/nutritional-supplements-for-pancreatic-cancer/");
const PCUK_DIET_FEELINGS = pcuk("Coping with the emotional effects of diet symptoms", "managing-symptoms-and-side-effects/diet-and-pancreatic-cancer/coping-with-diet-symptoms/");
const PCUK_DIET_WHAT = pcuk("What diet should I eat with pancreatic cancer?", "managing-symptoms-and-side-effects/diet-and-pancreatic-cancer/what-diet-should-i-eat-with-pancreatic-cancer/");
const PCUK_DIET_TIPS = pcuk("Diet tips for pancreatic cancer", "managing-symptoms-and-side-effects/diet-and-pancreatic-cancer/diet-tips-for-pancreatic-cancer/");
const PCUK_WEIGHT_TIPS = pcuk("Tips for diet for pancreatic cancer and weight loss", "managing-symptoms-and-side-effects/diet-and-pancreatic-cancer/tips-for-having-more-calories-and-protein-in-your-food/");
const PCUK_DIABETES = pcuk("Managing diabetes if you have pancreatic cancer", "managing-symptoms-and-side-effects/diabetes-with-pancreatic-cancer/");
const PCUK_TYPE3C = pcuk("What is type 3c diabetes?", "managing-symptoms-and-side-effects/diabetes-with-pancreatic-cancer/what-is-type-3c-diabetes/");
const PCUK_DIABETES_TREATED = pcuk("How is type 3c diabetes treated?", "managing-symptoms-and-side-effects/diabetes-with-pancreatic-cancer/how-is-type-3c-diabetes-treated/");
const PCUK_DIABETES_DAILY = pcuk("Living with type 3c diabetes and pancreatic cancer", "managing-symptoms-and-side-effects/diabetes-with-pancreatic-cancer/daily-life-and-type-3c-diabetes/");
const PCUK_BLOOD_SUGAR = pcuk("Managing blood sugar levels when you have pancreatic cancer and diabetes", "managing-symptoms-and-side-effects/diabetes-with-pancreatic-cancer/blood-sugar-levels-explained/");
const PCUK_PAIN = pcuk("Managing pancreatic cancer pain", "managing-symptoms-and-side-effects/managing-pancreatic-cancer-pain/");
const PCUK_PAIN_CAUSES = pcuk("What is pain and what causes it?", "managing-symptoms-and-side-effects/managing-pancreatic-cancer-pain/what-causes-pancreatic-cancer-pain/");
const PCUK_PAIN_TYPES = pcuk("Types of pancreatic cancer pain", "managing-symptoms-and-side-effects/managing-pancreatic-cancer-pain/types-of-pancreatic-cancer-pain/");
const PCUK_PAIN_WHO = pcuk("Who can help manage my pain?", "managing-symptoms-and-side-effects/managing-pancreatic-cancer-pain/who-can-help-manage-my-pain/");
const PCUK_PAINKILLERS = pcuk("Painkillers for pancreatic cancer pain", "managing-symptoms-and-side-effects/managing-pancreatic-cancer-pain/painkillers-for-pancreatic-cancer/");
const PCUK_OPIOID_CONCERNS = pcuk("Common concerns about opioid painkillers", "managing-symptoms-and-side-effects/managing-pancreatic-cancer-pain/common-concerns-about-opioid-painkillers/");
const PCUK_PAIN_NOT_WORKING = pcuk("What if my pain relief isn't working?", "managing-symptoms-and-side-effects/managing-pancreatic-cancer-pain/what-if-my-pain-relief-isnt-working/");
const PCUK_NERVE_BLOCK = pcuk("How does a nerve block treat pancreatic cancer pain?", "managing-symptoms-and-side-effects/managing-pancreatic-cancer-pain/nerves-blocks-for-pancreatic-cancer-pain/");
const PCUK_FATIGUE = pcuk("Fatigue and pancreatic cancer", "managing-symptoms-and-side-effects/fatigue-and-pancreatic-cancer/");
const PCUK_FATIGUE_FEEL = pcuk("What does pancreatic cancer fatigue feel like?", "managing-symptoms-and-side-effects/fatigue-and-pancreatic-cancer/how-might-fatigue-affect-me/");
const PCUK_FATIGUE_CAUSES = pcuk("What causes fatigue?", "managing-symptoms-and-side-effects/fatigue-and-pancreatic-cancer/what-causes-fatigue/");
const PCUK_FATIGUE_HELP = pcuk("What can help with pancreatic cancer fatigue?", "managing-symptoms-and-side-effects/fatigue-and-pancreatic-cancer/what-can-help-with-fatigue/");
const PCUK_FATIGUE_DAILY = pcuk("Dealing with pancreatic cancer fatigue in your daily life", "managing-symptoms-and-side-effects/fatigue-and-pancreatic-cancer/dealing-with-the-effects-of-fatigue/");
const PCUK_FATIGUE_FAMILY = pcuk("Supporting someone with pancreatic cancer fatigue", "managing-symptoms-and-side-effects/fatigue-and-pancreatic-cancer/information-about-fatigue-for-family-and-friends/");
const PCUK_EMOTIONAL = pcuk("Dealing with the emotional impact of pancreatic cancer", "dealing-with-pancreatic-cancer/dealing-with-the-emotional-impact-of-pancreatic-cancer/");
const PCUK_ANXIETY_DEPRESSION = pcuk("Anxiety and depression", "dealing-with-pancreatic-cancer/dealing-with-the-emotional-impact-of-pancreatic-cancer/anxiety-and-depression/");
const PCUK_COPING = pcuk("What can help me cope with how I am feeling?", "dealing-with-pancreatic-cancer/dealing-with-the-emotional-impact-of-pancreatic-cancer/what-can-help-me-deal-with-the-emotional-impact-of-pancreatic-cancer/");
const PCUK_FAMILY = pcuk("Information for families and friends", "support-for-you/information-for-family-members/");
const PCUK_FAMILY_EMOTIONAL = pcuk("How to get emotional support if someone you love has pancreatic cancer", "support-for-you/information-for-family-members/getting-emotional-support-for-families/");
const PCUK_FAMILY_SYMPTOMS = pcuk("How can I help with my family member's symptoms?", "support-for-you/information-for-family-members/how-can-i-help-with-my-family-members-symptoms/");
const PCUK_FAMILY_CARING = pcuk("Caring for and supporting your family member", "support-for-you/information-for-family-members/getting-care-and-support-for-your-family-member/");
const PCUK_FAMILY_TALKING = pcuk("Communicating with your loved one", "support-for-you/information-for-family-members/communicating-with-your-loved-one/");
const PCUK_FUTURE_CARE = pcuk("Making plans about your future care", "end-of-life-care-for-pancreatic-cancer/care-towards-end-of-life/making-plans-about-your-future-care/");
const PCUK_WHERE_CARE = pcuk("Where to receive care", "end-of-life-care-for-pancreatic-cancer/where-to-receive-care/");

const MAC_TREATMENT = mac("Treatment for pancreatic cancer", "pancreatic-cancer/treatment-for-pancreatic-cancer");
const MAC_SYMPTOMS = mac("Managing symptoms of pancreatic cancer", "pancreatic-cancer/controlling-symptoms-of-pancreatic-cancer");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");

const CRUK_STAGES = cruk("Stages, types and grades of pancreatic cancer", "stages-types-grades");
const CRUK_FOLLOW_UP = cruk("Follow up after treatment for pancreatic cancer", "treatment/follow-up-appointment");
const CRUK_DIET = cruk("Your diet and pancreatic cancer", "living-with/diet");

const MC_PALLIATIVE = mc("What is palliative care?", "information/getting-care/palliative-care");
const MC_ADVANCE = mc("Planning your care in advance", "information/planning-ahead/advance-care-planning");
const MC_SUPPORT_LINE = mc("Support Line", "services/support-line");

const GOV_LPA: LearnSource = { label: "GOV.UK: Make, register or end a lasting power of attorney", url: "https://www.gov.uk/power-of-attorney" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const pancreaticAnswers: LearnArticle[] = [
  {
    id: "panc-what-you-had",
    kicker: "Understanding",
    question: "What treatment did I have, and what was it for?",
    hook: "Surgery, chemotherapy, radiotherapy and treatments to ease symptoms each have a different job. Knowing which you had helps make sense of what comes next.",
    short: "The main treatments for pancreatic cancer are surgery, chemotherapy and radiotherapy, along with supportive care to ease symptoms. Which you have depends on the type and stage of the cancer and your general health. Chemotherapy makes infections more likely, so keep the 24-hour emergency number you were given close by.",
    sections: [
      {
        heading: "Why treatments differ",
        paragraphs: [
          "To work out the best treatment, your doctors look at your scans to find the type and stage of the cancer. They also look at things such as your age, and your general health and fitness.",
          "Treatment may include surgery, chemotherapy, radiotherapy and supportive care. Your specialist team should explain the treatments, their benefits and side effects, and work with you to create a plan that is best for you.",
        ],
      },
      {
        heading: "Surgery to remove the cancer",
        paragraphs: [
          "Surgery to remove the cancer is the best treatment for pancreatic cancer that has not spread outside the pancreas. It is only suitable for people who are fit and well enough to have the operation, and if there is no sign the cancer has spread.",
          "The Whipple's operation is the most common type. It removes the head of the pancreas, the lower end of the stomach, the first part of the small intestine, the gallbladder, part of the bile duct and some nearby lymph nodes. A distal pancreatectomy removes the body and tail of the pancreas and the spleen, and a total pancreatectomy removes the whole pancreas.",
          "It usually takes at least a few months to recover, and sometimes longer. You may spend one to two weeks in hospital, depending on how well you recover and how soon you can eat and drink normally.",
        ],
      },
      {
        heading: "Chemotherapy and radiotherapy",
        paragraphs: [
          "Chemotherapy may be offered after surgery, to try to reduce the chances of the cancer coming back. You need time to recover first, as you need to be well enough for six months of chemotherapy, and it should begin in the first 12 weeks after surgery.",
          "Chemotherapy may also be given before surgery, to shrink cancer that has grown very close to large blood vessels. If the cancer cannot be removed, it can help control its growth and help with symptoms, but it will not cure it.",
          "Radiotherapy may be given on its own or together with chemotherapy, which is called chemoradiotherapy. You usually go to hospital on weekdays, and treatment usually lasts about three to six weeks.",
        ],
      },
      {
        heading: "Treatments to ease symptoms",
        paragraphs: [
          "If the cancer blocks the bile duct or the first part of the small intestine, a small tube called a stent, or bypass surgery, can help with jaundice or with feeling and being sick. The aim of these is to help improve your symptoms, not to cure the cancer.",
          "Supportive care can help with problems eating and weight loss, including enzyme tablets to help you digest your food, as well as pain, tiredness and sickness. Your specialists will talk to you about what supportive care you might need.",
        ],
      },
      {
        heading: "Chemotherapy and infection",
        paragraphs: [
          "An infection is an emergency if you are having chemotherapy. It can be life threatening and needs treating straight away. Signs include a high or low temperature, feeling shivery and cold, a cough or sore throat, pain or burning when you pee, and feeling generally unwell.",
          "Your chemotherapy team should give you a 24-hour emergency number. Phone it if you have any of these signs or feel suddenly unwell, even if your temperature is normal. If you are not sure how to contact your care team, call NHS 111.",
          "Paracetamol and ibuprofen can lower your temperature and hide the signs of an infection. Always check your temperature before taking them, and if it is high, call the 24-hour number straight away.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse what treatment they recommend, its benefits and risks, and its possible side effects.",
      "Keep your 24-hour chemotherapy emergency number handy, and ask your nurse for one if you have not been given it.",
      "Phone the emergency number if you have signs of an infection or feel suddenly unwell, even if your temperature is normal.",
      "Check your temperature before taking paracetamol or ibuprofen.",
      "After surgery, slowly increase how much you do and keep moving, even if it is just around the house.",
      "Talk to your specialists about any symptoms or side effects that worry you, without waiting for your next check-up.",
    ],
    tryThisWeek: [
      "Keep the 24-hour number handy.",
      "Check your temperature before painkillers.",
      "Raise worrying side effects early.",
    ],
    ask: "What treatment did I have, what was it aiming to do, and who do I call if I feel unwell?",
    interactive: {
      kind: "flip-cards",
      title: "What each treatment does",
      intro: "Turn a card to see what each treatment is for.",
      cards: [
        { id: "whipple", front: "Whipple's operation", when: "Cancer in the head of the pancreas", back: "Removes the head of the pancreas and nearby parts. It is the most common surgery for pancreatic cancer." },
        { id: "distal", front: "Distal pancreatectomy", when: "Cancer in the body or tail", back: "Removes the body and tail of the pancreas, and the spleen. Diabetes is more likely afterwards." },
        { id: "total", front: "Total pancreatectomy", when: "A large cancer, or more than one tumour", back: "Removes the whole pancreas. You will need enzyme capsules, and insulin for diabetes." },
        { id: "chemo", front: "Chemotherapy", when: "With surgery, or to control the cancer", back: "Medicines that kill cancer cells. After surgery it aims to reduce the chances of the cancer coming back." },
        { id: "radio", front: "Radiotherapy", when: "On its own or with chemotherapy", back: "Radiation to destroy cancer cells. Usually on weekdays, for about three to six weeks." },
        { id: "stent", front: "Stent or bypass", when: "A blocked bile duct or bowel", back: "Opens or gets around a blockage, to help with jaundice or sickness. It does not remove the cancer." },
      ],
    },
    sources: [PCUK_TREATMENTS, PCUK_SURGERY, PCUK_SURGERY_TYPES, PCUK_CHEMO_USE, PCUK_RADIO, NHS_TREATMENT, PCUK_CHEMO_BLOOD, NHS_CHEMO, PCUK_GOING_HOME, MAC_TREATMENT],
    quiz: {
      question: "Why might chemotherapy be given after surgery?",
      options: [{ text: "To reduce the chances of the cancer coming back", right: true }, { text: "To help the wound heal faster" }, { text: "To replace digestive enzymes" }],
      why: "Chemotherapy may be offered after surgery, to try to reduce the chances of the cancer coming back.",
    },
  },
  {
    id: "panc-symptoms",
    kicker: "Symptoms",
    question: "Why do I get jaundice, pain and weight loss?",
    hook: "Each comes from the way the cancer affects the bile duct, the nerves or digestion. Each can be treated, so it is worth telling your team early.",
    short: "Jaundice happens when the cancer blocks the bile duct, and a stent can usually treat it. Pain can come from the cancer pressing on nerves near the pancreas, and weight loss from problems digesting food. There are ways to manage all three, so tell your doctor or nurse about any symptoms.",
    sections: [
      {
        heading: "Jaundice",
        paragraphs: [
          "Jaundice can cause yellow eyes and skin, an itchy feeling, dark pee and pale poo, loss of appetite, and feeling or being sick. Yellow skin may be less obvious on brown or black skin, but the white part of your eyes may look yellow.",
          "It happens when the cancer blocks the bile duct, the tube that takes bile from your liver to the first part of the small intestine. Bile contains a yellow substance called bilirubin, which then builds up in your blood.",
          "You can have jaundice at any stage of pancreatic cancer, or not at all. It depends on where the cancer is in your pancreas.",
        ],
      },
      {
        heading: "Treating jaundice",
        paragraphs: [
          "If you are having surgery to remove the cancer straight away, the surgery will treat the jaundice. If you can't have surgery straight away, you may need a small tube put into your bile duct. This is called a stent, and it should open up the blockage and treat the jaundice.",
          "It may take around two to three weeks for the jaundice to go completely, and you may still feel tired and itchy and not have much appetite. Most people see some improvement quite quickly.",
          "Frequent lukewarm showers and moisturising lotions can ease itching, and it helps to avoid soaps that dry your skin. Treating the cause of the jaundice will help relieve the itching.",
        ],
      },
      {
        heading: "When a stent needs checking",
        paragraphs: [
          "The main problem with stents is that they can get blocked, and the jaundice may come back. If this happens, another stent may be put in to treat the blockage.",
          "Signs of a stent infection include tummy pain, the jaundice coming back, a high temperature, aching muscles or shivering. If you have signs of an infection, contact your medical team, or go to A&E.",
        ],
      },
      {
        heading: "Pain",
        paragraphs: [
          "The cancer can press on a bundle of nerves near the pancreas called the coeliac plexus, which causes pain in the tummy or back. Problems with digestion can also cause tummy discomfort, cramps, wind and bloating.",
          "If pancreatic cancer causes you pain, it can usually be well controlled. Let your nurse or doctor know as soon as possible, so they can treat it quickly.",
        ],
      },
      {
        heading: "Weight loss",
        paragraphs: [
          "Losing weight is a common symptom of pancreatic cancer, because the cancer affects how well you can digest your food. Diabetes can also cause weight loss.",
          "Your doctor, dietitian or nurse will work out what is causing it and how it can be managed. You may need enzyme capsules to help you digest your food, and changes to your diet to get more calories and protein.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor or nurse if you have symptoms of jaundice, as it is important that it is treated.",
      "Contact your medical team, or go to A&E, if you have signs of a stent infection, such as a high temperature or the jaundice coming back.",
      "Let your nurse or doctor know about any pain as soon as possible.",
      "Try lukewarm showers and moisturising lotions if jaundice makes you itchy.",
      "Ask your dietitian or nurse for advice if you have lost weight, and ask about enzyme capsules.",
    ],
    tryThisWeek: [
      "Report any yellowing or itching.",
      "Mention pain as soon as it starts.",
      "Ask about enzymes if losing weight.",
    ],
    ask: "If I have a stent, what signs of a problem should I look out for, and who do I call?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your team about",
      intro: "Tick any you have noticed. Your doctor or nurse can help with each of them.",
      signs: ["Yellow eyes or skin", "Itchy skin", "Dark pee and pale poo", "Pain in my tummy or back", "Losing weight without trying", "Pale, oily or floating poo", "Bloating or wind", "Feeling full up quickly"],
      after: "If you have a stent and get signs of an infection, such as a high temperature, shivering or tummy pain, contact your medical team or go to A&E.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [PCUK_JAUNDICE, PCUK_STENT_PROBLEMS, PCUK_DIGESTION_SYMPTOMS, PCUK_PAIN_CAUSES, MAC_SYMPTOMS],
    quiz: {
      question: "What does a stent for jaundice do?",
      options: [{ text: "Opens up a blocked bile duct", right: true }, { text: "Removes the cancer" }, { text: "Replaces digestive enzymes" }],
      why: "This is called a stent, and it should open up the blockage and treat the jaundice.",
    },
  },
  {
    id: "panc-stage",
    kicker: "Stages",
    question: "What does the stage mean for my treatment options?",
    hook: "The stage describes how big the cancer is and whether it has spread. It is one of the main things your team uses to work out which treatments could help.",
    short: "Doctors stage pancreatic cancer from 1 to 4, depending on its size and whether it has spread. Stages 1 and 2 may be removed with surgery. With stages 3 and 4, surgery is not usually possible, and chemotherapy, sometimes with radiotherapy, aims to control the cancer, alongside treatment for symptoms.",
    sections: [
      {
        heading: "What staging tells you",
        paragraphs: [
          "The stage describes the size of the cancer, whether it has spread outside the pancreas, and where to. Specialists use the results of tests and scans to find this out.",
          "Doctors stage pancreatic cancer using the TNM system or a number system with 4 stages. T describes the size of the tumour, N whether it has spread to nearby lymph nodes, and M whether it has spread to another part of the body.",
        ],
      },
      {
        heading: "Stages 1 and 2",
        paragraphs: [
          "Stage 1 means the cancer is contained inside the pancreas. Stage 2 means it may have grown larger and spread to a small number of lymph nodes near the pancreas, but not to the large blood vessels near it.",
          "Both are called localised, operable or resectable cancer, because surgery to remove the cancer may be possible. You may also have chemotherapy after surgery, to reduce the chances of the cancer coming back.",
        ],
      },
      {
        heading: "Stage 3",
        paragraphs: [
          "Stage 3 means the cancer has spread outside the pancreas, to the large blood vessels near it or to a number of lymph nodes. This is usually locally advanced cancer, but it may occasionally be borderline resectable cancer.",
          "With locally advanced cancer, it won't usually be possible to remove the cancer with surgery. You may be offered chemotherapy first, and some people then have radiotherapy, to try to shrink the cancer and slow its growth. With borderline resectable cancer, this treatment aims to shrink the cancer before your doctors consider whether surgery might be possible.",
        ],
      },
      {
        heading: "Stage 4",
        paragraphs: [
          "Stage 4 means the cancer has spread to other parts of the body, such as the lungs, the liver or the lining of the tummy. This is advanced or metastatic cancer, and surgery is not an option.",
          "You may be able to have chemotherapy to slow down the growth of the cancer. It won't cure the cancer, but it may help you live longer and generally feel better. There are ways to manage most symptoms and improve how well you feel day to day.",
        ],
      },
      {
        heading: "Deciding together",
        paragraphs: [
          "Your medical team should explain your options in a way you can understand, including the benefits, disadvantages and risks. It is up to you whether or not you have the treatment or care they recommend. Treatment should start within 31 days of agreeing what treatment you will have.",
          "Some people want to know whether their cancer can be cured, and some do not. If you want to know more, talk to your doctor about your own situation. You can also ask for a second opinion, but do not delay your treatment while you get one.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor or nurse if you have any questions about your diagnosis or treatment options.",
      "Ask about the benefits, disadvantages and risks of each treatment.",
      "Write a list of questions, or bring someone to appointments to take notes.",
      "Ask your doctor whether there are any clinical trials that might be suitable for you.",
      "Ask your hospital doctor or GP to refer you if you want a second opinion.",
      "Talk to the Pancreatic Cancer UK specialist nurses on their free Support Line, who can talk you through what everything means.",
    ],
    tryThisWeek: [
      "Write a list of questions.",
      "Ask about benefits and risks.",
      "Ask about clinical trials.",
    ],
    ask: "What stage is the cancer, could it be removed with surgery, and what are my treatment options?",
    interactive: {
      kind: "flip-cards",
      title: "The four stages",
      intro: "Turn a card to see what each stage means and how it may be treated.",
      cards: [
        { id: "stage-1", front: "Stage 1", when: "Contained inside the pancreas", back: "Early, localised cancer. Surgery to remove it may be possible, and chemotherapy may follow." },
        { id: "stage-2", front: "Stage 2", when: "May have reached a few lymph nodes", back: "Still localised, and not in the large blood vessels. Surgery may be possible, depending on how far it has spread." },
        { id: "stage-3", front: "Stage 3", when: "Reached large blood vessels or nodes", back: "Usually locally advanced. Chemotherapy, sometimes with radiotherapy, aims to shrink it and slow its growth." },
        { id: "stage-4", front: "Stage 4", when: "Spread to other parts of the body", back: "Advanced or metastatic. Chemotherapy may slow its growth, and there are ways to manage most symptoms." },
      ],
    },
    sources: [PCUK_STAGE1, PCUK_STAGE2, PCUK_STAGE3, PCUK_STAGE4, CRUK_STAGES, PCUK_CHECKUPS, PCUK_UNDERSTANDING, NHS_TESTS, MAC_TREATMENT],
    quiz: {
      question: "What does stage 1 pancreatic cancer mean?",
      options: [{ text: "The cancer is contained inside the pancreas", right: true }, { text: "The cancer has spread to the liver" }, { text: "The cancer has gone" }],
      why: "Stage 1 means the cancer is contained inside the pancreas.",
    },
  },
  {
    id: "panc-follow-up",
    kicker: "Follow-up",
    question: "What happens at my follow-up appointments?",
    hook: "Check-ups are there to see how you are, help with side effects and look for any changes. They are also your chance to ask questions.",
    short: "After treatment you have regular check-ups, which may include blood tests and scans. How often depends on your hospital and the treatment you had. If you notice new symptoms or have concerns between appointments, contact your doctor or specialist nurse; you don't have to wait.",
    sections: [
      {
        heading: "Why follow-up matters",
        paragraphs: [
          "Follow-up appointments are to check how you are, see whether you have any problems or worries, and check for signs of the cancer coming back. You may also have appointments with other professionals, such as a dietitian, for help with digestion or enzyme capsules.",
          "You may have a mixture of face to face, telephone or video appointments. Your doctor or specialist nurse will ask how you are feeling, whether you have had any symptoms or side effects, and if anything is worrying you.",
        ],
      },
      {
        heading: "After surgery",
        paragraphs: [
          "A few weeks after going home, you see your surgeon to get the results of tests on the tissue that was removed. These show whether there were cancer cells near the outer edges of the tissue, called the margins, or in the lymph nodes that were removed.",
          "Your doctor will explain what your results mean for you. Even if there was no cancer in the margins or lymph nodes, your doctor may talk to you about having chemotherapy.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Each hospital does things slightly differently. For the first two years after surgery you may have a check-up every six months, and after two years every 12 months, sometimes by phone.",
          "You have blood tests, and you may have scans. As a guide, you generally have a CT scan every 6 months, depending on the treatment you had. After five years you probably won't have routine check-ups.",
          "After chemotherapy, you see your oncologist and then have a CT scan every few months. If the cancer starts to grow, you may be offered more chemotherapy, or other treatments to manage your symptoms.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your doctor or specialist nurse if you have any concerns between appointments, or if you notice any new symptoms. You don't have to wait until your next appointment.",
          "Your clinical nurse specialist will usually be your main contact. Ask who to contact out of hospital hours or in an emergency, and contact your specialist nurse if you are expecting an appointment but haven't heard anything.",
          "If you are being cared for at home, your GP, community nurse or palliative care team should explain what to do if you need help out of hours. In England, Wales or Scotland you can call 111 for advice out of hours.",
        ],
      },
      {
        heading: "The worry before a check-up",
        paragraphs: [
          "Many people find follow-up appointments quite worrying, as they can bring back anxiety about the cancer. It can be very hard living with uncertainty about how well treatment has worked.",
          "Telling someone close to you how you're feeling can mean your worries don't seem so overwhelming. Many people find it helpful to have counselling after cancer treatment.",
        ],
      },
    ],
    helps: [
      "Ask your team how often you will have check-ups, and whether you need to book them.",
      "Prepare a list of questions to ask your doctor or nurse.",
      "Contact your medical team if you get any new symptoms between check-ups.",
      "Contact your specialist nurse if an appointment you expected has not come through.",
      "Ask who to contact out of normal hospital hours or in an emergency.",
      "Tell someone close to you how you're feeling.",
    ],
    tryThisWeek: [
      "Ask how often check-ups will be.",
      "Prepare a list of questions.",
      "Note who to call out of hours.",
    ],
    ask: "How often will I have check-ups, what tests will I have, and who should I call if I have problems in between?",
    interactive: {
      kind: "timeline",
      title: "Follow-up after surgery",
      steps: [
        { id: "results", when: "A few weeks after", title: "Your results", points: ["You see your surgeon to get the results of tests on the tissue removed.", "You can talk about any side effects or other problems."] },
        { id: "first-two-years", when: "First two years", title: "Every six months", points: ["You may have a check-up every six months.", "You may have blood tests and a scan."] },
        { id: "after-two-years", when: "After two years", title: "Every 12 months", points: ["Check-ups may be every 12 months.", "Some may be phone calls rather than in person."] },
        { id: "after-five-years", when: "After five years", title: "Routine checks may stop", points: ["You probably won't have routine check-ups.", "Speak to your GP if you feel unwell or have concerns."] },
      ],
    },
    sources: [PCUK_CHECKUPS, CRUK_FOLLOW_UP, PCUK_CHEMO_AFTER, PCUK_CHEMO, PCUK_TEAM, PCUK_EMERGENCY, PCUK_EMOTIONAL],
    quiz: {
      question: "What should you do if you notice a new symptom between appointments?",
      options: [{ text: "Contact your doctor or specialist nurse", right: true }, { text: "Wait for your next check-up" }, { text: "Ignore it unless it lasts a year" }],
      why: "Contact your doctor or specialist nurse if you have any concerns between appointments, or if you notice any new symptoms. You don't have to wait until your next appointment.",
    },
  },
  {
    id: "panc-enzymes",
    kicker: "Enzymes",
    question: "How do I take my enzyme capsules?",
    hook: "The capsules do the job your pancreas can no longer do, breaking down the food you eat. Taking them with every meal, snack and milky drink makes a big difference.",
    short: "Pancreatic enzyme replacement therapy, or PERT, replaces the enzymes your pancreas would normally make, so you can digest your food. You take the capsules with meals, snacks and milky drinks, and more with larger or fattier meals. Your dietitian, doctor or nurse will help you find the right dose.",
    sections: [
      {
        heading: "Why you need them",
        paragraphs: [
          "The pancreas makes enzymes that help to break down food containing fat, protein and carbohydrate. Pancreatic cancer, or surgery to remove it, can reduce the enzymes your pancreas makes, or block them from getting to where they are needed.",
          "This means food is not properly digested and you don't get all the nutrients you need, which can cause symptoms like weight loss. PERT replaces the missing enzymes, and most people with pancreatic cancer will need it. It can make a big difference to how you feel.",
          "PERT is available on the NHS, and the brand names are Creon, Nutrizym and Pancrex. If you need it, you will take it for the rest of your life, as your pancreas will not start making enzymes again.",
        ],
      },
      {
        heading: "When to take them",
        paragraphs: [
          "Take PERT with all meals and snacks, and with drinks that are more than half milk. Take half the capsules with the first few mouthfuls of food, and spread the other half out during the meal.",
          "You need more for larger meals, meals with several courses and fatty food, such as takeaways, roasted or fried food, puddings, or food with lots of cheese or chocolate. If you take nutritional supplements, you need to take enzymes with these as well.",
          "You don't need them with drinks that have only a splash of milk, fruit juice or fizzy drinks, small amounts of fruit or most plain vegetables, or sugary sweets like jelly babies.",
        ],
      },
      {
        heading: "Taking them properly",
        paragraphs: [
          "Swallow the capsules whole, with a couple of sips of a cool drink, as the enzymes won't work properly if you take them with hot drinks. Do not chew them, and do not store them in hot places, such as the car, near radiators or in direct sunlight.",
          "If you find the capsules hard to swallow, speak to your doctor, nurse or dietitian. You can open them and mix the granules with a teaspoon of cold, soft, acidic food such as smooth apple sauce, then swallow it straight away without chewing.",
          "Don't worry if you forget to take your PERT. Just take the usual dose with your next meal or snack.",
        ],
      },
      {
        heading: "Getting the dose right",
        paragraphs: [
          "There is no set dose for each day, and most people need to increase how much they take from the starting dose. Your dietitian, doctor or nurse can tell you how to work out the best dose, and should review it regularly.",
          "Don't change what you eat to try to manage your symptoms, for example by cutting down on fat. Just take enough PERT for what you are eating. To begin with, a food diary of what you eat, your dose and your symptoms may help.",
          "It may take a few days to notice an effect. If you still have symptoms or are losing weight, speak to your dietitian, nurse or doctor, as you may need a different dose or brand, or a medicine that reduces stomach acid.",
        ],
      },
      {
        heading: "Good to know",
        paragraphs: [
          "All pancreatic enzymes are made from pork products, and there is no alternative. Organisations representing Jewish and Muslim communities have said it is acceptable to use them, and so have the Vegetarian Society and Vegan Society.",
          "Side effects are not common. Tummy pain, wind or feeling sick are often caused by the dose being too low, rather than a side effect, and any extra enzymes your body doesn't need will pass through you.",
          "If you go into hospital, tell the staff that you need PERT when you eat, and ask if you can keep it with you to take with any food.",
        ],
      },
    ],
    helps: [
      "Take your capsules with all meals and snacks, and with drinks that are more than half milk.",
      "Take more capsules with larger or fattier meals.",
      "Swallow them whole with a cool drink, and keep them out of hot places.",
      "Keep a food diary of what you eat, your dose and your symptoms.",
      "Tell your dietitian, nurse or doctor if you still have symptoms or are losing weight.",
      "Ask your doctor, nurse or dietitian about PERT if you haven't been told about it.",
    ],
    tryThisWeek: [
      "Take capsules with snacks too.",
      "Note meals, doses and symptoms.",
      "Keep capsules out of the heat.",
    ],
    ask: "Am I taking the right dose of enzymes, and how should I change it for bigger or fattier meals?",
    interactive: {
      kind: "scenarios",
      title: "Enzymes in everyday life",
      scenarios: [
        {
          id: "forgot",
          situation: "You realise after lunch that you forgot your capsules.",
          options: [{ text: "Take the usual dose with your next meal or snack", best: true }, { text: "Take a double dose straight away" }],
          why: "Don't worry if you forget to take your PERT. Just take the usual dose with your next meal or snack.",
        },
        {
          id: "takeaway",
          situation: "You are having a takeaway with friends.",
          options: [{ text: "Take extra capsules with it", best: true }, { text: "Eat less fat and skip a capsule" }],
          why: "You need more for larger meals and fatty food, such as takeaways.",
        },
        {
          id: "hot-drink",
          situation: "You go to swallow your capsules with a hot cup of tea.",
          options: [{ text: "Use a couple of sips of a cool drink", best: true }, { text: "Use the hot tea" }],
          why: "The enzymes won't work properly if you take them with hot drinks.",
        },
        {
          id: "hospital",
          situation: "In hospital, your capsules only arrive with the medicine round.",
          options: [{ text: "Tell the staff you need PERT when you eat", best: true }, { text: "Take them whenever they arrive" }],
          why: "If you go into hospital, tell the staff that you need PERT when you eat, and ask if you can keep it with you.",
        },
      ],
    },
    sources: [PCUK_PERT, PCUK_PERT_HOW, PCUK_PERT_NOT_HELPING, PCUK_DIGESTION, CRUK_DIET, MAC_SYMPTOMS],
    quiz: {
      question: "When should you take your enzyme capsules?",
      options: [{ text: "With all meals, snacks and milky drinks", right: true }, { text: "Once a day at bedtime" }, { text: "Only when you have symptoms" }],
      why: "Take PERT with all meals and snacks, and with drinks that are more than half milk.",
    },
  },
  {
    id: "panc-diabetes",
    kicker: "Diabetes",
    question: "Why have I got diabetes, and how is it managed?",
    hook: "Pancreatic cancer, or surgery on the pancreas, can cause a different kind of diabetes, called type 3c. It is treated differently from type 1 and type 2.",
    short: "The pancreas makes insulin and glucagon, which keep your blood sugar at the right level, and the cancer or surgery can stop it making enough of them. This causes type 3c diabetes, which most people manage with tablets or insulin, alongside their enzyme capsules. A diabetes nurse can help, and a lot of advice for other types of diabetes may not be right for you.",
    sections: [
      {
        heading: "Type 3c diabetes",
        paragraphs: [
          "Your pancreas normally makes hormones called insulin and glucagon, which keep your blood sugar at the right level. Pancreatic cancer, or surgery to remove the cancer, can stop your pancreas making enough of these hormones, and this causes type 3c diabetes.",
          "People who have had their whole pancreas removed will have type 3c diabetes. After a Whipple's operation it can happen at any time, and it is more likely after a distal pancreatectomy.",
          "Symptoms can include feeling thirsty, weight loss, needing to pee more often, fatigue, feeling lightheaded, palpitations, sweating and confusion.",
        ],
      },
      {
        heading: "Why it is different",
        paragraphs: [
          "Type 3c diabetes is caused by damage to the pancreas. The insulin works properly, but you don't make enough of it, and you may make less glucagon too. This means the usual treatment for type 1 or type 2 diabetes may not be right for you.",
          "A lot of diabetes information encourages people to lose weight, which won't be relevant if you have lost weight or are struggling to put it back on. Your diabetes should be managed around your diet.",
          "Once you start taking enzyme capsules, you digest carbohydrates again, so your blood sugar may rise. Speak to your diabetes team if this happens, as it should be treated with medicine, not by taking less PERT or eating less.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Most people with type 3c diabetes will need medicine. This may be tablets, such as metformin or gliclazide, or insulin injections. If you have had your whole pancreas removed, you will need to take insulin.",
          "You should be referred to a diabetes nurse, who will teach you how and when to test your blood sugar and help you manage your medicine. It may take a few weeks to get the dose right, and the needles used for insulin are very thin, so it doesn't usually hurt.",
          "Don't change or reduce what you eat to bring your blood sugar down unless your diabetes team or dietitian recommends it. Only change your diabetes medicine if your diabetes team tells you to.",
        ],
      },
      {
        heading: "Hypos",
        paragraphs: [
          "A blood sugar level of less than 4mmol/l is called a hypo, and it needs treating quickly. Signs include trembling, sweating, feeling dizzy, blurred vision, a pounding heartbeat, confusion and feeling very tired.",
          "Treat a hypo straight away with fast acting sugar, such as glucose tablets or jelly babies, then check your blood sugar again after 10 to 15 minutes. If you have repeated this three times and your level is still below 4mmol/l, phone 999 for an ambulance.",
          "Missing a meal, being more active than usual, drinking alcohol without food or forgetting your enzymes can all cause a hypo. Always keep something to treat a hypo with you when you are out.",
        ],
      },
      {
        heading: "Day to day",
        paragraphs: [
          "By law, if you are prescribed insulin, you need to tell your insurance company and the DVLA, or the DVA in Northern Ireland. Check your blood sugar less than 2 hours before you drive, and do not drive if it is less than 4mmol/l.",
          "Illness and infections can raise your blood sugar, even if you are not eating. If you are being sick for more than half a day, are not improving or are unsure what to do, get urgent medical advice from your medical team or NHS 111.",
          "Very high blood sugar can cause serious conditions called DKA and HHS, which need treating urgently. Go to A&E immediately if you think you have one of these, and tell them you have diabetes.",
        ],
      },
    ],
    helps: [
      "Ask your medical team whether you have type 3c diabetes, and who to contact about it.",
      "Ask to be referred to a diabetes nurse.",
      "Keep a record of what you eat, your medicines and enzymes, your blood sugar readings and how active you have been.",
      "Speak to your diabetes team if your blood sugar is often above or below your target range.",
      "Keep something to treat a hypo with you when you are out, and by your bed.",
      "Get urgent advice from your medical team or NHS 111 if you are being sick for more than half a day.",
    ],
    tryThisWeek: [
      "Keep a simple diabetes record.",
      "Carry hypo treatment when out.",
      "Ask about a diabetes nurse.",
    ],
    ask: "Do I have type 3c diabetes, what is my target range, and what should I do if I am ill?",
    interactive: {
      kind: "signs",
      title: "Signs of a hypo",
      intro: "A hypo is a blood sugar level of less than 4mmol/l. Tick any signs you have had, to share with your diabetes team.",
      signs: ["Trembling or shaking", "Feeling dizzy or light headed", "Blurred vision", "Sweating", "A fast or pounding heartbeat", "Tingling lips", "Mood changes or irritability", "Feeling confused", "Feeling drowsy or very tired"],
      after: "Treat a hypo straight away. If you have repeated the treatment three times and your level is still below 4mmol/l, phone 999.",
      copyHeading: "Hypo signs I have had",
    },
    sources: [PCUK_DIABETES, PCUK_TYPE3C, PCUK_DIABETES_TREATED, PCUK_BLOOD_SUGAR, PCUK_DIABETES_DAILY, CRUK_DIET, PCUK_SYMPTOM_CARE, PCUK_SURGERY_TYPES],
    quiz: {
      question: "What causes type 3c diabetes?",
      options: [{ text: "Damage to the pancreas", right: true }, { text: "Eating too much sugar" }, { text: "Being overweight" }],
      why: "Type 3c diabetes is caused by damage to the pancreas.",
    },
  },
  {
    id: "panc-eating",
    kicker: "Eating well",
    question: "What should I eat, and how do I stop losing weight?",
    hook: "There is no special diet and no food you have to avoid. If your weight is falling, more calories and protein help, along with your enzymes.",
    short: "You don't need a special diet with pancreatic cancer, and it is fine to eat the foods you would normally eat, as long as you take your enzymes. If you have lost weight, high calorie and high protein foods, small meals and snacks, and sometimes nutritional supplements can help. A specialist dietitian can give advice tailored to you.",
    sections: [
      {
        heading: "No special diet",
        paragraphs: [
          "You do not need to follow a special diet, and there are no foods you should stop eating because of the cancer. It is fine to eat the foods you would normally eat, or to try something new, as long as you take your enzymes with it.",
          "If you have lost weight, avoid low-fat, fat-free or diet foods. It is usually fine to eat sugar, but if you have diabetes, most people are told to avoid sugary drinks outside mealtimes.",
        ],
      },
      {
        heading: "If you are losing weight",
        paragraphs: [
          "Weight loss can affect how you deal with the symptoms of the cancer, and with treatments such as chemotherapy or surgery. Your medical team will help you get more calories and protein, and more protein with gentle physical activity can help rebuild muscle.",
          "Have high calorie foods, such as full fat milk, yoghurt and butter, and try to include protein in all three of your meals, such as meat, fish, eggs, cheese, beans, lentils or nuts. Have snacks between meals, and a pudding once or twice a day.",
          "You can enrich your food by adding things like cheese, cream, butter or milk powder. If you are eating a higher fat meal, you will need to take more enzymes.",
        ],
      },
      {
        heading: "Little and often",
        paragraphs: [
          "If you can't manage large portions, try eating smaller amounts more often, such as three small meals and three snacks a day. Smaller plates can make meals feel easier to manage.",
          "Every mouthful helps. If you feel sick or very full, have a break and eat some more an hour or so later. It's normal to have good and bad days with how much you can eat.",
          "Freeze portions of homemade dishes, or try ready meals, for days you don't feel like cooking. If the smell of food puts you off, it might help if a family member or friend cooks for you.",
        ],
      },
      {
        heading: "Drinks and supplements",
        paragraphs: [
          "If you can, try to drink about eight cups of fluids a day. If drinks fill you up at mealtimes, it may help to have them in between your meals.",
          "If changes to your diet don't help, your dietitian may suggest nutritional supplements. Some are milk based, and some are like juices, smoothies, puddings or soups, and you need to take enzymes with most of them.",
          "If you have a stent in the first part of your small bowel, your dietitian may suggest lower fibre foods that are moist and soft, eaten slowly and chewed well, to help stop the stent getting blocked.",
        ],
      },
      {
        heading: "Help and support",
        paragraphs: [
          "If you have problems with diet or digestion, or are losing weight, you should see a dietitian, ideally one who is an expert in pancreatic cancer. If you haven't seen one, ask your medical team or GP to refer you.",
          "People often worry about losing weight, losing their appetite and feeling pressured to eat more than they can manage. Try not to feel pressured to eat when you can't, and tell family and friends what helps you.",
        ],
      },
    ],
    helps: [
      "Take your enzymes with food and milky drinks.",
      "Try eating smaller amounts more often, such as three small meals and three snacks a day.",
      "Choose high calorie and high protein foods if you have lost weight, and avoid diet foods.",
      "Keep snacks close by so that you can eat whenever you feel like it.",
      "Ask your medical team or GP to refer you to a specialist dietitian.",
      "Talk to family and friends about what helps, such as someone else cooking.",
    ],
    tryThisWeek: [
      "Try small meals and snacks.",
      "Keep snacks within reach.",
      "Ask for a dietitian referral.",
    ],
    ask: "Can I see a specialist dietitian about my weight and digestion?",
    interactive: {
      kind: "scenarios",
      title: "Mealtime moments",
      scenarios: [
        {
          id: "full",
          situation: "You feel full after a few mouthfuls of your dinner.",
          options: [{ text: "Have a break and eat a little more later", best: true }, { text: "Force yourself to finish the plate" }],
          why: "If you feel sick or very full, have a break and eat some more an hour or so later.",
        },
        {
          id: "low-fat",
          situation: "You have lost weight and reach for a low-fat yoghurt.",
          options: [{ text: "Choose a full fat one instead", best: true }, { text: "Stick with low-fat" }],
          why: "If you have lost weight, avoid low-fat, fat-free or diet foods.",
        },
        {
          id: "smell",
          situation: "The smell of cooking puts you off eating.",
          options: [{ text: "Ask a family member or friend to cook", best: true }, { text: "Skip the meal" }],
          why: "If the smell of food puts you off, it might help if a family member or friend cooks for you.",
        },
        {
          id: "drinks",
          situation: "Drinks fill you up before you have eaten much.",
          options: [{ text: "Have your drinks between meals", best: true }, { text: "Stop drinking altogether" }],
          why: "If drinks fill you up at mealtimes, it may help to have them in between your meals.",
        },
      ],
    },
    sources: [PCUK_DIET_WHAT, PCUK_DIET_TIPS, PCUK_WEIGHT_TIPS, PCUK_SUPPLEMENTS, PCUK_DIETITIAN, PCUK_DIET_FEELINGS, PCUK_DIGESTION_SYMPTOMS, CRUK_DIET],
    quiz: {
      question: "If you have lost weight, which foods are best avoided?",
      options: [{ text: "Low-fat, fat-free or diet foods", right: true }, { text: "Full fat milk and butter" }, { text: "Puddings" }],
      why: "If you have lost weight, avoid low-fat, fat-free or diet foods.",
    },
  },
  {
    id: "panc-pain",
    kicker: "Pain",
    question: "How can my pain be controlled?",
    hook: "Many people with pancreatic cancer have pain at some point, and it can usually be well controlled. Asking for help early makes it easier to manage.",
    short: "Pain can come from the cancer pressing on nerves, from digestion problems or from treatment. Painkillers, a nerve block and other treatments can help, and getting help early makes pain easier to control. Tell your doctor or nurse straight away if your pain gets worse or isn't controlled.",
    sections: [
      {
        heading: "Where pain comes from",
        paragraphs: [
          "The cancer can press on a bundle of nerves near the pancreas called the coeliac plexus, which causes pain in the tummy or back. It can also cause pain by blocking the first part of the small intestine, or by causing a build-up of fluid.",
          "Problems with digestion can cause tummy discomfort, cramps, wind and bloating, which enzyme capsules can help. Treatments can cause pain too, such as for a few weeks after surgery, or pain or tingling in your hands or feet from chemotherapy.",
          "Your emotions can also affect your pain. It may seem worse when you have a lot to cope with, or when you are tired.",
        ],
      },
      {
        heading: "Different kinds of pain",
        paragraphs: [
          "Background pain is ongoing pain that you manage with regular pain relief. Breakthrough pain is a short burst of severe pain that breaks through your regular pain relief, and incident pain is similar but caused by an activity, like moving around.",
          "Nerve pain can feel like a burning, shooting or stabbing pain, or like pins and needles, and painkillers may not always treat it on their own. Different types of pain are treated differently, so tell your doctor about any pain, or if your pain changes.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "Painkillers used include paracetamol, anti-inflammatory drugs like ibuprofen, and opioids like morphine, and you are likely to take more than one type. Your doctor or nurse will tell you how and when to take them.",
          "You may need to take them at regular times, to stop the pain coming back when the medicine wears off. Pain can be harder to control if you wait until it is bad before taking painkillers.",
          "Addiction shouldn't be a problem if you take opioids as prescribed. A stronger painkiller does not mean the cancer is growing or spreading. Do not stop taking opioids without talking to your doctor first, as stopping suddenly can make you very unwell.",
        ],
      },
      {
        heading: "Other ways to ease pain",
        paragraphs: [
          "A nerve block stops the nerves behind the pancreas sending pain messages to the brain. You may have one if nerve pain isn't controlled, or painkillers cause a lot of side effects, but nerve blocks don't work for everyone.",
          "Chemotherapy or radiotherapy can relieve pain by shrinking the cancer. Relaxation, breathing exercises, massage and distraction may also help.",
        ],
      },
      {
        heading: "When pain isn't controlled",
        paragraphs: [
          "Don't wait to ask for help with pain. Tell your doctor or nurse straight away if your pain gets worse or is not being controlled, as they may change the dose or the painkiller.",
          "A specialist palliative care or supportive care team can help if pain isn't under control, and these teams are not just for people at the end of their life. Your GP or hospital team can refer you.",
          "Rarely, the cancer can press on the spinal cord, which is serious. Symptoms can include pain in your back or neck, numbness in your arms, legs or around your bottom, or problems controlling when you poo or pee. Contact your medical team or GP, or go to A&E, straight away if you have these symptoms.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or nurse about any pain as soon as possible.",
      "Take your painkillers as your doctor tells you, including at regular times if advised.",
      "Keep a record of where the pain is, how bad it is on a scale of 0 to 10, and what makes it better or worse.",
      "Ask who you should contact if your pain gets worse, including at night or the weekend.",
      "Ask whether a specialist palliative or supportive care team could help.",
      "Don't stop taking opioids without speaking to your doctor first.",
    ],
    tryThisWeek: [
      "Score your pain from 0 to 10.",
      "Ask who to call at night.",
      "Mention pain early.",
    ],
    ask: "What is causing my pain, and could a different painkiller, a nerve block or a palliative care team help?",
    interactive: {
      kind: "flip-cards",
      title: "Kinds of pain",
      intro: "Turn a card to see what each kind of pain is and how it may be treated.",
      cards: [
        { id: "background", front: "Background pain", when: "Ongoing", back: "Managed with regular pain relief. Pain just before your next dose may mean a change is needed." },
        { id: "breakthrough", front: "Breakthrough pain", when: "Short bursts of severe pain", back: "Breaks through your regular pain relief. Fast acting painkillers can treat it." },
        { id: "incident", front: "Incident pain", when: "Brought on by an activity", back: "Like breakthrough pain, but caused by things like moving. Taking fast acting painkillers beforehand, or changing the activity, may help." },
        { id: "nerve", front: "Nerve pain", when: "Burning, shooting or stabbing", back: "From the nerves behind the pancreas. Other medicines or a nerve block may help." },
        { id: "soft-tissue", front: "Soft tissue pain", when: "Deep, aching or cramping", back: "If the cancer spreads to nearby organs. It can be felt elsewhere, such as the shoulder." },
        { id: "bone", front: "Bone pain", when: "Aching or throbbing", back: "Not very common. Treated with painkillers and radiotherapy." },
      ],
    },
    sources: [PCUK_PAIN, PCUK_PAIN_CAUSES, PCUK_PAIN_TYPES, PCUK_PAINKILLERS, PCUK_OPIOID_CONCERNS, PCUK_PAIN_NOT_WORKING, PCUK_NERVE_BLOCK, PCUK_PAIN_WHO, MAC_SYMPTOMS],
    quiz: {
      question: "Does needing a stronger painkiller mean the cancer is growing?",
      options: [{ text: "No, not on its own", right: true }, { text: "Yes, always" }, { text: "Only if it is morphine" }],
      why: "A stronger painkiller does not mean the cancer is growing or spreading.",
    },
  },
  {
    id: "panc-fatigue",
    kicker: "Tiredness",
    question: "Why am I so tired, and what helps?",
    hook: "Fatigue is extreme tiredness that doesn't always match what you have done. It has many causes, and some of them can be treated.",
    short: "Fatigue is very common with pancreatic cancer and its treatment, and it isn't the same as just feeling tired. It can come from the cancer, from digestion problems, pain, diabetes or sickness, or from treatment. Planning your time, gentle activity and support from others can help, and your team can look for causes they can treat.",
    sections: [
      {
        heading: "More than tiredness",
        paragraphs: [
          "Fatigue is extreme tiredness, and it isn't the same as just feeling tired. You might feel both mentally drained and physically exhausted, and it isn't always linked to how much activity you have been doing.",
          "Even after sleeping you may still feel tired, and some people have problems concentrating or remembering things. Not being able to do the things you used to enjoy can be very frustrating, and it may make you feel down.",
        ],
      },
      {
        heading: "What causes it",
        paragraphs: [
          "The cancer itself can cause fatigue. So can its symptoms: problems with digestion mean you don't get the energy you need from your food, and pain, unmanaged diabetes and feeling or being sick can all leave you exhausted.",
          "Fatigue after surgery or radiotherapy is common and can last for several weeks or months. With chemotherapy it may start a few hours to a few days after treatment and improve after a few days.",
          "Anaemia, some medicines, low mood and problems sleeping can add to it. Speak to your medical team, GP or nurse, as managing these may improve your fatigue.",
        ],
      },
      {
        heading: "Planning your energy",
        paragraphs: [
          "Plan to do things when you have more energy, and rest when you need to. Don't try to do everything on a good day, as it might make you more tired the next few days.",
          "Set yourself small, realistic goals, and work out which activities are important, which you can get help with and which can wait. A fatigue diary can show when you have more energy and help you describe your fatigue to your team.",
          "A short nap during the day may give you a bit more energy. Try to limit naps to about 30 minutes, as sleeping too long can make it harder to sleep at night.",
        ],
      },
      {
        heading: "Gentle activity",
        paragraphs: [
          "There is good evidence that gentle physical activity can help with fatigue and increase energy levels, and it is unlikely to make fatigue worse. For most people, ten minutes of gentle activity three times a day would be suitable.",
          "Ask your medical team what physical activity you could safely do, and only do what you are able to. A few short activity sessions may be easier than one long one.",
        ],
      },
      {
        heading: "Support",
        paragraphs: [
          "Family and friends can help with practical things like household chores or driving you to hospital, so you can save energy for more important things. You might find it easiest to ask people to do specific tasks.",
          "An occupational therapist can show you different ways of doing a task and provide equipment to save your energy. Palliative and supportive care teams can also help with fatigue, and they aren't just for people at the end of their life.",
          "It may not be safe for you to drive if you feel tired or sleepy. Ask your doctor whether your cancer or treatment will affect your driving.",
        ],
      },
    ],
    helps: [
      "Talk to your medical team about your fatigue, so they can try to find the cause.",
      "Plan to do things when you have more energy, and rest when you need to.",
      "Keep a fatigue diary of when you have fatigue and what makes it better or worse.",
      "Ask your medical team what physical activity you could safely do.",
      "Ask family and friends to help with specific tasks.",
      "Ask your doctor or nurse whether an occupational therapist could help.",
    ],
    tryThisWeek: [
      "Keep a fatigue diary.",
      "Plan around your best energy.",
      "Ask what activity is safe.",
    ],
    ask: "What could be causing my fatigue, and would a dietitian, occupational therapist or physiotherapist help?",
    interactive: {
      kind: "risk-check",
      title: "What could be adding to it?",
      intro: "Tick any that apply. Your team may be able to help with many of these.",
      items: [
        { id: "digestion", label: "Digestion problems or weight loss", note: "You may not get the energy you need from food. Enzyme capsules help manage this.", changeable: true },
        { id: "pain", label: "Pain", note: "You may find fatigue is worse when you have pain. Managing the pain may help.", changeable: true },
        { id: "diabetes", label: "Diabetes", note: "If diabetes isn't managed, you may feel tired, lethargic and confused.", changeable: true },
        { id: "sickness", label: "Feeling or being sick", note: "This can be exhausting. Anti-sickness medicines can help.", changeable: true },
        { id: "anaemia", label: "Anaemia", note: "It can make you tired, dizzy and short of breath. Anaemia can be treated.", changeable: true },
        { id: "medicines", label: "Medicines that make you sleepy", note: "Tell your team, as they may be able to change the drug or dose. Don't stop it yourself.", changeable: true },
        { id: "sleep", label: "Problems sleeping", note: "These can make fatigue worse. Talk to your medical team.", changeable: true },
        { id: "treatment", label: "Surgery, chemotherapy or radiotherapy", note: "Fatigue is a common side effect, and can last for several weeks or months.", changeable: false },
      ],
    },
    sources: [PCUK_FATIGUE, PCUK_FATIGUE_FEEL, PCUK_FATIGUE_CAUSES, PCUK_FATIGUE_HELP, PCUK_FATIGUE_DAILY, PCUK_CHEMO_SE, MAC_SYMPTOMS],
    quiz: {
      question: "How much gentle activity is suitable for most people with fatigue?",
      options: [{ text: "Ten minutes, three times a day", right: true }, { text: "An hour without stopping" }, { text: "None until the tiredness has gone" }],
      why: "For most people, ten minutes of gentle activity three times a day would be suitable.",
    },
  },
  {
    id: "panc-mood",
    kicker: "Mood",
    question: "How do I cope with the worry and low moods?",
    hook: "Shock, fear, sadness and anger are all natural. There is no right way to feel, and there is help for the hard days, including right now if you need it.",
    short: "You may go through lots of emotions, and there is no right or wrong way to feel. People with pancreatic cancer may be more likely to have anxiety or depression, and talking, counselling and help with symptoms can all make a difference. If you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "Lots of feelings",
        paragraphs: [
          "You may go through shock, fear, distress, sadness, anger, loneliness or denial, and your feelings may change over time. This is natural, and there's no right or wrong way to feel.",
          "It can be very hard living with uncertainty about how well treatment has worked, and some people worry about the cancer coming back. It can also be hard when treatment finishes. Try to be kind to yourself, as not every day is going to be a good day, and that's ok.",
        ],
      },
      {
        heading: "When it might be more",
        paragraphs: [
          "Feeling low or down is normal, and not always a sign of depression. But for many people with pancreatic cancer, these feelings don't go away, leading to more serious problems with anxiety and depression.",
          "Signs of depression include feeling down or hopeless, losing interest in daily life, problems sleeping, changes in appetite, having no energy and finding it difficult to concentrate. Signs of anxiety include feeling worried on more days than not, feeling restless or on edge, and getting irritable.",
          "Some of these, such as weight loss or a lack of energy, are common with pancreatic cancer itself. But if you have any of these symptoms it is important to get help, and if low feelings go on for more than 2 weeks, talk to your doctor or nurse.",
        ],
      },
      {
        heading: "What can help",
        paragraphs: [
          "Speak to your hospital doctor, nurse or GP about how you are feeling as soon as possible. They may suggest a talking therapy such as counselling, or medicines to help treat depression, anxiety or problems sleeping.",
          "You can refer yourself to NHS talking therapies for anxiety and depression without seeing a GP, if you are registered with a GP and aged 18 or over, or 16 or over in some areas.",
          "Getting support to manage pain and tiredness can help you feel better emotionally. Sorting out practical worries, such as money, work or family, can also take away stress.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Family and friends are often great sources of support, and other people affected by pancreatic cancer can really understand how you feel. If you would rather not talk, writing your thoughts down or mindfulness may help.",
          "Gentle exercise, such as walking, as often as you can has lots of benefits for your wellbeing. Doing things you enjoy, and setting small goals, can help you focus on the present.",
          "The Pancreatic Cancer UK specialist nurses can talk with you about how you are really feeling. You can also call the Macmillan Support Line free on 0808 808 00 00, 7 days a week, 8am to 8pm.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you have any thoughts about self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment. If you would rather not talk on the phone, you can text SHOUT to 85258 at any time.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Speak to your hospital doctor, nurse or GP about how you are feeling as soon as possible.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Refer yourself to NHS talking therapies, or ask about counselling.",
      "Try gentle exercise, such as walking, as often as you can.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell your nurse or GP how you feel.",
      "Look up NHS talking therapies.",
      "Take a gentle walk.",
    ],
    ask: "Could my low mood or worry be depression or anxiety, and can you refer me for counselling or a talking therapy?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor or nurse",
      intro: "Tick any you have had on most days. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: ["Feeling down or hopeless", "Losing interest in daily life", "Feeling worthless or guilty", "Problems sleeping", "Changes in my appetite", "Having no energy", "Finding it hard to concentrate", "Feeling worried on more days than not", "Feeling restless or on edge"],
      after: "If you have any thoughts about self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123, day or night.",
      copyHeading: "How I have been feeling",
    },
    sources: [PCUK_EMOTIONAL, PCUK_ANXIETY_DEPRESSION, PCUK_COPING, MAC_DEPRESSION, NHS_TALKING, NHS_URGENT_MH, NHS_SUICIDAL, SAMARITANS],
    quiz: {
      question: "Is feeling low always a sign of depression?",
      options: [{ text: "No, but get help if it doesn't go away", right: true }, { text: "Yes, always" }, { text: "Only if it lasts a day" }],
      why: "Feeling low or down is normal, and not always a sign of depression.",
    },
  },
  {
    id: "panc-family",
    kicker: "For family",
    question: "How can family and carers help, and who supports them?",
    hook: "Learning about symptoms, keeping track of contacts and appointments, and talking openly all help. Carers need support too, and it is there.",
    short: "Family and friends can help by learning about symptoms, keeping important numbers to hand and helping with practical jobs. Talking openly about what support is needed helps, but let your loved one talk when they are ready. Carers can get support too, including a free carer's assessment from the local council.",
    sections: [
      {
        heading: "Helping with symptoms",
        paragraphs: [
          "One of the best ways to help is learning about symptoms, how to manage them and who to ask for help. Ask the doctor or nurse who to call if you are worried about any symptoms.",
          "Ask about enzyme capsules if your family member hasn't been given them, as they can make a big difference to how they feel. Eating smaller amounts more often, and regular snacks, may help too.",
          "Be aware of symptoms that need urgent attention, such as an infection during chemotherapy, a stent infection, jaundice or a blood clot in a vein. During chemotherapy, a high temperature means calling the 24-hour emergency number straight away.",
        ],
      },
      {
        heading: "Keeping track",
        paragraphs: [
          "Your family member should have a key contact, often a clinical nurse specialist. Keep a note of important numbers, such as who to call out of hours or in an emergency.",
          "If they are happy for you to join their appointments, you can help prepare questions and make notes. If they wish, they can give their GP and medical team permission to speak to you about their treatment and care.",
        ],
      },
      {
        heading: "Talking together",
        paragraphs: [
          "Try to have an open conversation about what support your family member needs and what you can offer. Keep talking to each other regularly, as things may change.",
          "Some people don't want to talk about their cancer at all, and this may be their way of coping. Don't pressure them; show that you are open to listening, and do things you enjoy together.",
        ],
      },
      {
        heading: "Practical help",
        paragraphs: [
          "Your family member might find it hard to accept help, because they may be worried about losing their independence. Offer a few different ways you could help, so they can choose what feels right.",
          "Write down everything that needs doing and see what others can help with, such as childcare, lifts to appointments, cooking, cleaning or shopping. As a carer, you have the legal right to ask for flexible working.",
          "An occupational therapist can help with equipment and adaptations at home, and respite care can give you a break from caring. Ask the GP or district nurse about respite care.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Asking for or accepting help is not a sign of weakness, or that you can't cope. The medical team looking after your family member can answer your questions and give you emotional support too.",
          "A carer's assessment is free, and anyone over 18 can ask for one by contacting adult social services at their local council. You can have one even if your family member doesn't need or want any support, and it usually lasts at least an hour.",
          "You can call the Pancreatic Cancer UK specialist nurses free on 0808 801 0707. Organisations such as Carers UK, Carers Trust, Macmillan and Maggie's support carers too.",
        ],
      },
    ],
    helps: [
      "Ask the doctor or nurse who to call if you are worried about any symptoms.",
      "Keep a note of important numbers, such as who to call out of hours or in an emergency.",
      "Offer a few different ways to help, and let your family member choose.",
      "Write down the jobs that need doing, and ask others to help.",
      "Ask adult social services at your local council for a carer's assessment.",
      "Call the Pancreatic Cancer UK specialist nurses free on 0808 801 0707.",
    ],
    tryThisWeek: [
      "Note the out-of-hours numbers.",
      "Offer a few ways to help.",
      "Ask about a carer's assessment.",
    ],
    ask: "Who should we call out of hours, and what support is there for me as a carer?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "quiet",
          situation: "Your loved one doesn't want to talk about the cancer.",
          options: [{ text: "Show you are ready to listen when they are", best: true }, { text: "Keep pushing them to open up" }],
          why: "Some people don't want to talk about their cancer at all, and this may be their way of coping.",
        },
        {
          id: "help",
          situation: "They keep turning down your offers of help.",
          options: [{ text: "Offer a few ways to help and let them choose", best: true }, { text: "Take over everything" }],
          why: "Offer a few different ways you could help, so they can choose what feels right.",
        },
        {
          id: "temperature",
          situation: "During chemotherapy, they have a high temperature late at night.",
          options: [{ text: "Call the 24-hour emergency number now", best: true }, { text: "Wait and see how they are in the morning" }],
          why: "During chemotherapy, a high temperature means calling the 24-hour emergency number straight away.",
        },
        {
          id: "worn-out",
          situation: "You are worn out from caring.",
          options: [{ text: "Ask your council for a carer's assessment", best: true }, { text: "Keep going without help" }],
          why: "A carer's assessment is free, and anyone over 18 can ask for one.",
        },
      ],
    },
    sources: [PCUK_FAMILY, PCUK_FAMILY_EMOTIONAL, PCUK_FAMILY_SYMPTOMS, PCUK_FAMILY_CARING, PCUK_FAMILY_TALKING, PCUK_FATIGUE_FAMILY, NHS_CARER, NHS_HELP, PCUK_CHEMO_BLOOD],
    quiz: {
      question: "Who can ask for a carer's assessment?",
      options: [{ text: "Anyone over 18 who cares for someone", right: true }, { text: "Only paid carers" }, { text: "Only people who live with the patient" }],
      why: "A carer's assessment is free, and anyone over 18 can ask for one by contacting adult social services at their local council.",
    },
  },
  {
    id: "panc-planning",
    kicker: "Planning ahead",
    question: "What does planning ahead involve, and when should I start?",
    hook: "Planning ahead is about making sure your wishes are known and you get the right support. You can start whenever you feel ready, and change your mind at any time.",
    short: "Palliative care helps people with pancreatic cancer that can't be cured to live as well as possible, and it is available at any point, not just at the end of life. Advance care planning means thinking about how you would like to be cared for in future, and sharing it with the people who need to know. You can talk to your team whenever you are ready, and Macmillan, Marie Curie and Pancreatic Cancer UK can help.",
    sections: [
      {
        heading: "Palliative care is not only for the end",
        paragraphs: [
          "Palliative care teams help people with cancer that can't be cured to live as well as possible, by managing symptoms such as pain, and emotional symptoms like depression and anxiety. They support family members too.",
          "Palliative care is available at any point during your treatment or care, and you can have it alongside treatments such as chemotherapy. Early palliative care can help manage symptoms more effectively, so it is a good idea to ask your medical team or GP about a referral early on.",
        ],
      },
      {
        heading: "Where care can happen",
        paragraphs: [
          "Palliative care can be given in your home, in hospices, in hospitals and in care homes. Hospices are free, and you can go for an appointment or a full day, or stay for a short time to get symptoms under control.",
          "If you would like to be cared for at home, your GP, district nurse or community palliative care nurse will organise your care. It can take some time to arrange care, support and equipment at home, so it is best to do this as early as possible.",
        ],
      },
      {
        heading: "Thinking about what matters to you",
        paragraphs: [
          "Advance care planning means thinking about how you would like to be cared for in the future, as your health changes. This might include what care you would or wouldn't want, and where you want to receive any care.",
          "This can be difficult to think about, but it can help you feel more in control. You can talk to your doctors or nurses about it at any time, and you don't have to wait for them to speak to you about it.",
          "It's your choice whether you make an advance care plan, and you should not feel pressure to include anything you're not comfortable with. You can change your plan at any time.",
        ],
      },
      {
        heading: "Ways to record your wishes",
        paragraphs: [
          "An advance statement is a written record of your wishes for your future care, such as where you would like to be cared for or how you like things done. It is not legally binding, but anyone making decisions about your care must take it into account.",
          "An advance decision to refuse treatment lets you record treatments you do not want, if you can't make or communicate a decision in the future. It is legally binding in England, Wales and Northern Ireland.",
          "A lasting power of attorney lets you appoint one or more people to make decisions for you if you can't. There are two types, one for health and welfare and one for property and financial affairs, and registering one takes 8 to 10 weeks if there are no mistakes in the application.",
        ],
      },
      {
        heading: "Sharing your plans and getting support",
        paragraphs: [
          "Your GP or a palliative care nurse can help you record your wishes in your medical notes. Keep a copy of your plans, and give copies to your medical teams, your GP and the people important to you.",
          "You can call the Marie Curie Support Line free on 0800 090 2309 for information and emotional support, 8am to 6pm on weekdays and 10am to 4pm at weekends. Macmillan's free helpline, 0808 808 00 00, is open every day from 8am to 8pm.",
          "The Pancreatic Cancer UK specialist nurses can talk for as long as you need about end of life care. Your clinical nurse specialist or palliative care team can also help you and your loved ones get any support you need.",
        ],
      },
    ],
    helps: [
      "Ask your medical team or GP about a referral to palliative care early on.",
      "Ask who you should contact in an emergency, at night or at the weekend.",
      "Talk to your family about your wishes.",
      "Ask your GP or a palliative care nurse to help you record your wishes.",
      "Give copies of your plans to your medical teams, your GP and the people important to you.",
      "Call the Marie Curie Support Line free on 0800 090 2309.",
    ],
    tryThisWeek: [
      "Ask about a palliative care referral.",
      "Talk to family about your wishes.",
      "Note who to call at night.",
    ],
    ask: "Can you refer me to the palliative care team, and help me plan my future care?",
    interactive: {
      kind: "flip-cards",
      title: "Ways to plan ahead",
      intro: "Turn a card to see what each one does. You can start any of them whenever you feel ready.",
      cards: [
        { id: "palliative", front: "Palliative care", when: "At any point", back: "Help with symptoms, and emotional, practical and spiritual support, for you and your family." },
        { id: "hospice", front: "Hospice care", when: "An appointment, a day or a short stay", back: "Free specialist palliative care. Some hospices also offer nursing care at home." },
        { id: "statement", front: "Advance statement", when: "Your wishes and preferences", back: "A written record of how and where you would like to be cared for. Not legally binding." },
        { id: "adrt", front: "Advance decision to refuse treatment", when: "Treatments you do not want", back: "Records treatments you would refuse if you can't decide. Legally binding in England, Wales and Northern Ireland." },
        { id: "lpa", front: "Lasting power of attorney", when: "Someone to decide for you", back: "Appoints people you trust to make decisions if you can't. There are two types." },
        { id: "emergency", front: "Emergency care plans", when: "If you suddenly become unwell", back: "Such as a ReSPECT plan or a DNACPR decision. Your doctor or nurse can talk you through them." },
      ],
    },
    sources: [PCUK_PALLIATIVE, PCUK_NOT_CURED, PCUK_FUTURE_CARE, PCUK_WHERE_CARE, MC_PALLIATIVE, MC_ADVANCE, NHS_ADVANCE_STATEMENT, GOV_LPA, MC_SUPPORT_LINE, NHS_TREATMENT, NHS_TESTS],
    quiz: {
      question: "When is palliative care available?",
      options: [{ text: "At any point during treatment or care", right: true }, { text: "Only in the last days of life" }, { text: "Only once all treatment has stopped" }],
      why: "Palliative care is available at any point during your treatment or care, and you can have it alongside treatments such as chemotherapy.",
    },
  },
];
