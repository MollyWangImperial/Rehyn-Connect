import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Thyroid cancer page's pieces (content/library-conditions/cancer-more-2.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS,
// Macmillan Cancer Support, Cancer Research UK, the British Thyroid Foundation and the Butterfly Thyroid
// Cancer Trust, with the government's Access to Work page and Samaritans for the work and worry answers.
// The answers describe treatment, recovery and living with after-effects; there are no survival or
// life-expectancy figures, and nothing is a prediction for one person. General information only; it never
// replaces what a person's own thyroid cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/thyroid-cancer/${path}` });
const btf = (label: string, path: string): LearnSource => ({ label: `British Thyroid Foundation: ${label}`, url: `https://www.btf-thyroid.org/${path}` });
const butterfly = (label: string, path: string): LearnSource => ({ label: `Butterfly Thyroid Cancer Trust: ${label}`, url: `https://www.butterfly.org.uk/${path}` });

const NHS_TREAT = nhs("Treatment for thyroid cancer", "conditions/thyroid-cancer/treatment/");
const NHS_LEVO = nhs("Levothyroxine", "medicines/levothyroxine/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const MAC_TREAT = mac("Treatment for thyroid cancer", "thyroid-cancer/treatment");
const MAC_PF = mac("Papillary and follicular thyroid cancer", "thyroid-cancer/papillary-follicular");
const MAC_MTC = mac("Medullary thyroid cancer", "thyroid-cancer/medullary");
const MAC_ATC = mac("Anaplastic thyroid cancer", "thyroid-cancer/anaplastic");
const MAC_FOLLOW = mac("Follow-up after thyroid cancer treatment", "thyroid-cancer/follow-up");
const MAC_SURGERY = mac("Before and after surgery for thyroid cancer", "thyroid-cancer/before-and-after-surgery");
const MAC_THYROIDECTOMY = mac("Thyroidectomy", "treatments-and-drugs/thyroidectomy");
const MAC_RAI = mac("Radioactive iodine for thyroid cancer", "treatments-and-drugs/radioactive-iodine-for-thyroid-cancer");
const MAC_HRT = mac("Thyroid hormone replacement therapy", "treatments-and-drugs/thyroid-hormone-replacement-therapy");
const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_WEIGHT = mac("Weight gain after cancer treatment", "impacts-of-cancer/weight-gain-after-cancer-treatment");
const MAC_WORRIES = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");
const MAC_EMOTIONS = mac("Cancer and your emotions", "treatment/coping-with-treatment/cancer-and-your-emotions");
const MAC_WORK = mac("Work and cancer", "impacts-of-cancer/work-and-cancer");
const MAC_WORK_AFTER = mac("Making decisions about work after treatment", "after-treatment/making-decisions-about-work-after-treatment");

const CRUK_ABOUT = cruk("What is thyroid cancer?", "about-thyroid-cancer");
const CRUK_TYPES = cruk("Types of thyroid cancer", "stages-types/types");
const CRUK_AFTER_SURGERY = cruk("After thyroid cancer surgery", "treatment/surgery/after-surgery");
const CRUK_PROBLEMS = cruk("Problems after thyroid cancer surgery", "treatment/surgery/problems");
const CRUK_LIFE_AFTER = cruk("Life after thyroid cancer surgery", "living-with/after-thyroid-surgery");
const CRUK_COPING = cruk("Coping with thyroid cancer", "living-with/coping");
const CRUK_FOLLOW = cruk("Follow up for thyroid cancer", "treatment/follow-up");

const BTF_CANCER = btf("Your guide to thyroid cancer", "thyroid-cancerleaflet");
const BTF_PREGNANCY = btf("Pregnancy and fertility in thyroid disorders", "pregnancy-and-fertility-in-thyroid-disorders");
const BTF_FATIGUE = btf("Coping with fatigue", "coping-with-fatigue");
const BTF_PSYCH = btf("Psychological symptoms and thyroid disorders", "psychological-symptoms-and-thyroid-disorders");
const BTF_WEIGHT = btf("Thyroid and weight - the science", "thyroid-and-weight-the-science");

const BF_TG = butterfly("Thyroglobulin", "about-thyroid-cancer/thyroglobulin/");
const BF_PARA = butterfly("The parathyroid glands and calcium", "about-thyroid-cancer/parathyroid-glands-calcium/");
const BF_TYPES = butterfly("Types of thyroid cancer", "about-thyroid-cancer/types-thyroid-cancer/");
const BF_DRS = butterfly("Dynamic risk stratification", "treatment-journey/dynamic-risk-stratification/");
const BF_I131 = butterfly("I131 treatment", "treatment-journey/i131-treatment/");

const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work: get support if you have a disability or health condition", url: "https://www.gov.uk/access-to-work" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const thyroidCancerAnswers: LearnArticle[] = [
  {
    id: "thc-what-you-had",
    kicker: "Your treatment",
    question: "What was each part of my treatment for?",
    hook: "Surgery, hormone tablets and perhaps radioactive iodine: each had its own job, and knowing them makes follow-up easier to understand.",
    short: "Surgery is the most common treatment for thyroid cancer. If all of your thyroid was removed, you usually take thyroid hormone tablets for life, and you may have had radioactive iodine to destroy any thyroid cells left behind. Which treatments you had depended on the size and type of the cancer, whether it had spread and your general health.",
    sections: [
      {
        heading: "Why your plan was yours",
        paragraphs: [
          "The treatment you have for thyroid cancer depends on the size and type of the cancer, whether it has spread and your general health. The specialist team explains the treatments, their benefits and side effects, and works with you to create a plan that is best for you.",
          "You have regular check-ups during and after any treatments. If you have symptoms or side effects you are worried about, talk to your specialists: you do not need to wait for your next check-up. You can make decisions together with your team, which is called shared decision making.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Surgery is the most common treatment for thyroid cancer. You may have had all of your thyroid removed, called a total thyroidectomy, or part of it, called a lobectomy or partial thyroidectomy.",
          "Some lymph nodes in the neck may also have been removed if the cancer had spread, or might have spread, to them. Removing lymph nodes also gives your doctor information to help plan further treatment.",
        ],
      },
      {
        heading: "Hormone tablets",
        paragraphs: [
          "If all of your thyroid was removed, you need thyroid hormone tablets to replace the hormones it made. You usually take a hormone called levothyroxine every day for the rest of your life.",
          "The tablets can also help stop the cancer coming back. After a lobectomy you might not need them, because the remaining thyroid may produce enough hormones, and your hormone levels are monitored to see.",
        ],
      },
      {
        heading: "Radioactive iodine",
        paragraphs: [
          "Radioactive iodine uses radiation to kill cancer cells, and you usually take it as a capsule. Thyroid cells, wherever they are in the body, absorb it, which destroys any remaining thyroid cancer cells and any normal thyroid tissue.",
          "You usually have it if all of your thyroid was removed and there is a certain risk of the cancer coming back. Not everyone needs it, and you will not have it if half your thyroid is still in your neck or the risk of the cancer returning is very small.",
        ],
      },
      {
        heading: "Other treatments",
        paragraphs: [
          "External beam radiotherapy is sometimes used if surgery cannot remove all the cancer, or the cancer has come back or spread. Targeted medicines aim to slow or stop cancer growing and may be used if other treatments are not an option or are no longer working.",
          "Chemotherapy is not usually used to treat thyroid cancer, but you may have it if the cancer has come back or has spread to another part of the body.",
        ],
      },
    ],
    helps: [
      "Ask your specialist team to explain each treatment, its benefits and its side effects.",
      "Talk to your specialists about symptoms or side effects that worry you; you do not need to wait for your next check-up.",
      "Take your thyroid hormone tablets exactly as your doctor, nurse or pharmacist explains.",
      "Ask your cancer doctor or specialist nurse whether you need radioactive iodine; it depends on the level of risk.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if you want to talk things through.",
    ],
    tryThisWeek: [
      "Ask what each treatment was for.",
      "Report worrying side effects now.",
      "Take your tablets as explained.",
    ],
    ask: "Which treatments did I have, and what was each one for in my case?",
    interactive: {
      kind: "flip-cards",
      title: "Your treatments, card by card",
      intro: "Turn each card to see what each treatment was for.",
      cards: [
        { id: "total", front: "Total thyroidectomy", when: "The most common surgery", back: "Removes all of the thyroid. You then take thyroid hormone tablets every day for life." },
        { id: "lobectomy", front: "Lobectomy", when: "If the cancer is small and low risk", back: "Removes half of the thyroid. The rest may make enough hormones, so tablets may not be needed." },
        { id: "nodes", front: "Lymph node surgery", when: "If the cancer has or might have spread", back: "Removes lymph nodes in the neck, and gives your doctor information to plan further treatment." },
        { id: "levothyroxine", front: "Levothyroxine", when: "Every day, after a total thyroidectomy", back: "Replaces the hormone your thyroid made, and helps lower the risk of the cancer coming back." },
        { id: "rai", front: "Radioactive iodine", when: "After a total thyroidectomy, if needed", back: "A capsule. Thyroid cells absorb it, so any left after surgery are destroyed." },
      ],
    },
    sources: [NHS_TREAT, MAC_TREAT, MAC_THYROIDECTOMY, MAC_RAI, MAC_HRT, BTF_CANCER],
    quiz: {
      question: "Why might you have radioactive iodine after surgery?",
      options: [{ text: "To destroy any thyroid cells left behind", right: true }, { text: "To heal the surgery wound" }, { text: "To replace thyroid hormone" }],
      why: "Thyroid cells, wherever they are in the body, absorb it, which destroys any remaining thyroid cancer cells and any normal thyroid tissue.",
    },
  },
  {
    id: "thc-types",
    kicker: "Types",
    question: "What type of thyroid cancer did I have, and does it matter?",
    hook: "The type depends on the cell the cancer started in. It shapes your treatment, and which blood test your team watches afterwards.",
    short: "Most thyroid cancers start in the follicular cells and are called differentiated thyroid cancers: papillary, follicular and oncocytic. They tend to grow slowly and are often treated in the same way. Medullary and anaplastic thyroid cancers are rarer and are treated differently.",
    sections: [
      {
        heading: "How the type is decided",
        paragraphs: [
          "The type of thyroid cancer depends on the type of cell it starts in, how much the cancer cells look like normal cells, and whether there are gene changes in the cancer cells. A specialist doctor called a pathologist examines a sample of thyroid cells under the microscope.",
          "There are 2 main types of cell in the thyroid: follicular cells, and C cells that make calcitonin. Most thyroid cancers start in follicular cells.",
        ],
      },
      {
        heading: "Papillary thyroid cancer",
        paragraphs: [
          "Papillary thyroid cancer is the most common type, and about 8 in 10 thyroid cancers are papillary. It is usually slow growing, and if it spreads it usually spreads to the lymph nodes in the neck.",
          "It is more common in women and is most common in people in their 30s and 40s.",
        ],
      },
      {
        heading: "Follicular and oncocytic",
        paragraphs: [
          "Follicular thyroid cancer also starts in the follicular cells, and about 1 in 10 thyroid cancers are follicular. It is most common in people aged between 40 and 60, and it sometimes spreads to other parts of the body, such as the lungs or bones.",
          "Oncocytic thyroid cancer, which doctors used to call Hurthle cell thyroid cancer, is rare and shares some similarities with follicular thyroid cancer. Papillary, follicular and oncocytic cancers together are called differentiated thyroid cancer, which means the cells look like normal thyroid cells.",
          "About 9 in 10 thyroid cancers are differentiated. They are often treated in the same way, with surgery and, for some people, radioactive iodine.",
        ],
      },
      {
        heading: "Medullary thyroid cancer",
        paragraphs: [
          "Medullary thyroid cancer is rare: less than 5 in 100 thyroid cancers are this type. It starts in the C cells, which make a hormone called calcitonin, and it is often slow growing.",
          "About 1 in 4 people with medullary thyroid cancer have a rare inherited condition called MEN2. If a blood test shows changes to the RET gene, you are referred to a specialist genetics service, which will discuss whether family members may need testing.",
          "Neither radioactive iodine nor TSH suppression helps people with medullary thyroid cancer, so you will not need these treatments. Follow-up measures calcitonin rather than thyroglobulin.",
        ],
      },
      {
        heading: "Anaplastic and rarer types",
        paragraphs: [
          "Anaplastic thyroid cancer is the rarest type, about 1 to 2 in 100 thyroid cancers. It usually grows more quickly than other types and mostly affects people over 60.",
          "Some papillary, follicular or oncocytic cancers are high grade, which means they tend to grow more quickly, and your doctor might follow you more closely after treatment. Rarely, a lymphoma or a sarcoma can develop in the thyroid gland.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse specialist for more information about the type of thyroid cancer you had.",
      "Make a list of questions before you see your doctor, and take someone with you to help you remember the answers.",
      "If you had medullary thyroid cancer, ask whether you need a genetic test and whether family members should be tested.",
      "Contact the British Thyroid Foundation or the Butterfly Thyroid Cancer Trust for support, or AMEND for medullary thyroid cancer.",
      "Call the Macmillan Support Line free on 0808 808 00 00.",
    ],
    tryThisWeek: [
      "Ask which type you had.",
      "Write your questions down.",
      "Contact a thyroid charity.",
    ],
    ask: "What type of thyroid cancer did I have, and how does it change my treatment and follow-up?",
    interactive: {
      kind: "flip-cards",
      title: "The types, card by card",
      intro: "Turn each card to see where each type starts and what is different about it.",
      cards: [
        { id: "papillary", front: "Papillary", when: "About 8 in 10 thyroid cancers", back: "Usually slow growing. If it spreads, it usually spreads to lymph nodes in the neck." },
        { id: "follicular", front: "Follicular", when: "About 1 in 10 thyroid cancers", back: "Starts in the follicular cells. It sometimes spreads to the lungs or bones." },
        { id: "oncocytic", front: "Oncocytic", when: "Once called Hurthle cell cancer", back: "Rare. It shares some similarities with follicular thyroid cancer." },
        { id: "medullary", front: "Medullary", when: "Less than 5 in 100", back: "Starts in the C cells. Radioactive iodine does not help, and calcitonin is checked instead." },
        { id: "anaplastic", front: "Anaplastic", when: "About 1 to 2 in 100", back: "The rarest type. It usually grows more quickly than other types." },
      ],
    },
    sources: [CRUK_TYPES, MAC_PF, MAC_MTC, MAC_ATC, BTF_CANCER, CRUK_ABOUT, CRUK_COPING],
    quiz: {
      question: "Which blood test is used to follow up medullary thyroid cancer?",
      options: [{ text: "Calcitonin", right: true }, { text: "Thyroglobulin" }, { text: "Vitamin D" }],
      why: "Follow-up measures calcitonin rather than thyroglobulin.",
    },
  },
  {
    id: "thc-follow-up",
    kicker: "Follow-up",
    question: "What happens at follow-up, and what is thyroglobulin?",
    hook: "Blood tests do much of the watching. Thyroglobulin, made only by thyroid cells, is the result your team follows most closely.",
    short: "After treatment you have regular follow-up appointments, every few months at first and then less often. You have blood tests to check your hormone levels and, after papillary or follicular cancer, thyroglobulin, a protein made only by thyroid cells, which helps show whether any thyroid cells remain. How long you are followed up depends on the risk of the cancer coming back.",
    sections: [
      {
        heading: "How often, and for how long",
        paragraphs: [
          "In the first year, you usually have check-ups every few months. Eventually they are reduced to every 6 months or yearly, and some appointments might be with a specialist nurse or by phone.",
          "How long you are followed up for depends on the risk of your cancer coming back: at least 5 years if the risk is low, at least 10 years if it is intermediate, and for life if it is high. Your appointments may be with your specialist in hospital at first, and with your GP later on.",
          "People with low-risk cancers that have been removed surgically may not need follow-up care. The kind of follow-up you have is decided in a discussion between you and your consultant.",
        ],
      },
      {
        heading: "Blood tests",
        paragraphs: [
          "You might have blood tests to check your hormone levels if you take thyroid hormones, your calcium levels if your parathyroid glands were removed or damaged, and tumour markers. The tumour marker is thyroglobulin for papillary or follicular cancer, and calcitonin for medullary thyroid cancer.",
          "Results from the specialist lab may take up to 4 weeks to come back. This can be a worrying time, and it might help to let friends and family know.",
        ],
      },
      {
        heading: "What thyroglobulin shows",
        paragraphs: [
          "Thyroglobulin is a protein made only by thyroid cells, normal or cancerous. When your thyroid has been removed and you have had radioactive iodine, your body should no longer make it, so the test is a useful way to find any remaining papillary or follicular cancer cells.",
          "In some people the test takes time to become negative after radioiodine, and low levels may be found for a year or longer. Tumour markers can go up for other reasons too, so a rise does not always mean the cancer has come back; your doctor will arrange other tests, such as a scan, if levels are abnormal.",
          "A consultant writing for the Butterfly Thyroid Cancer Trust advises not trying to interpret a detectable result yourself, but asking your specialist what it means in your case.",
        ],
      },
      {
        heading: "Scans and risk checks",
        paragraphs: [
          "You may have an ultrasound scan of your neck, usually 9 to 12 months after radioactive iodine, or after surgery if you did not have it. If you had radioactive iodine, you might have a radioactive iodine scan 6 to 12 months later, depending on the risk of the cancer coming back.",
          "Doctors look again at the risk of the cancer coming back once treatment has finished, which is called dynamic risk stratification. It uses a neck ultrasound and a thyroglobulin test 6 to 12 months after radioiodine, and if both are clear, it may change your hormone dose and how often you are seen.",
          "Some thyroid cancers that are high risk can become low risk if they respond well to radioactive iodine.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your doctor or specialist nurse if you notice any new symptoms between appointments; you do not have to wait until your next visit. Before taking food supplements or over-the-counter vitamins, talk to your cancer doctor or specialist nurse, as some may affect your thyroid blood test results.",
          "Many people find follow-up appointments worrying, because a hospital visit can bring back anxiety about the cancer. It can help to tell someone close to you how you are feeling, and many people find counselling helpful.",
        ],
      },
    ],
    helps: [
      "Contact your doctor or specialist nurse about new symptoms between appointments; you do not have to wait.",
      "Use your appointments to talk about any concerns, and ask which symptoms to be aware of.",
      "Ask your specialist to explain your thyroglobulin result, rather than trying to interpret it yourself.",
      "Check with your cancer doctor or specialist nurse before taking supplements or over-the-counter vitamins.",
      "Tell someone close to you how you are feeling while you wait for results.",
    ],
    tryThisWeek: [
      "Note new symptoms to report.",
      "Ask what your result means.",
      "Check before taking supplements.",
    ],
    ask: "How often will I be seen, for how long, and what do my thyroglobulin results show?",
    interactive: {
      kind: "timeline",
      title: "Follow-up, step by step",
      steps: [
        { id: "first-year", when: "First year", title: "Every few months", points: ["Check-ups with an examination and blood tests.", "Some may be with a nurse or by phone."] },
        { id: "risk", when: "6 to 12 months after radioiodine", title: "Risk looked at again", points: ["A neck ultrasound and a thyroglobulin test.", "If both are clear, your dose and follow-up may change."] },
        { id: "later", when: "After the first year", title: "Every 6 months or yearly", points: ["Appointments become less frequent.", "Later they may be with your GP."] },
        { id: "length", when: "5 years, 10 years or for life", title: "Depends on the risk", points: ["At least 5 years if the risk is low.", "For life if the risk is high."] },
        { id: "any-time", when: "Any time", title: "New symptoms", points: ["Contact your doctor or specialist nurse.", "You do not have to wait for your next visit."] },
      ],
    },
    sources: [MAC_FOLLOW, CRUK_FOLLOW, BF_TG, MAC_THYROIDECTOMY, BTF_CANCER, BF_DRS],
    quiz: {
      question: "What does it mean if a tumour marker such as thyroglobulin goes up?",
      options: [{ text: "It does not always mean the cancer has come back", right: true }, { text: "The cancer has definitely returned" }, { text: "Nothing at all, ever" }],
      why: "Tumour markers can go up for other reasons too, so a rise does not always mean the cancer has come back; your doctor will arrange other tests, such as a scan, if levels are abnormal.",
    },
  },
  {
    id: "thc-radioiodine",
    kicker: "Radioactive iodine",
    question: "What happens with radioactive iodine, and why the time on my own?",
    hook: "A capsule, a low iodine diet beforehand and a few days apart from others. Each step helps the treatment work and keeps the people around you safe.",
    short: "Radioactive iodine, taken as a capsule, is absorbed by thyroid cells wherever they are in the body and destroys any that remain after surgery. Beforehand you usually follow a low iodine diet for 1 to 2 weeks and raise your TSH level. You usually stay in a room on your own for 1 to 3 days, then follow precautions at home for a few days.",
    sections: [
      {
        heading: "Why it is used",
        paragraphs: [
          "Radioactive iodine uses radiation to treat papillary and follicular thyroid cancer. You may have it after surgery to kill any cancer cells that may have been left behind, to help stop the cancer coming back, or if the cancer has come back or spread.",
          "Normal thyroid cells and thyroid cancer cells are the only cells in the body to use iodine. This means the treatment can be used with only a small risk of damage to other tissues.",
        ],
      },
      {
        heading: "Getting ready",
        paragraphs: [
          "You usually eat a low iodine diet for 1 to 2 weeks before treatment, which helps the thyroid cancer cells take up the radioactive iodine. Fish, seafood, seaweed, soy products, takeaway meals, and vitamin and mineral supplements are avoided, unless your team prescribed calcium and vitamin D, while milk, cheese and eggs are limited.",
          "If you eat a high iodine food by mistake, do not worry: it is unlikely to affect your treatment. After treatment, you can go back to your normal diet.",
          "The treatment needs a high level of TSH to work well. The most common way to raise it is injections of a medicine called Thyrogen, which let you keep taking your hormone tablets; otherwise you stop your thyroid hormones for a few weeks, which can bring tiredness, feeling cold, constipation and low mood until you restart them.",
        ],
      },
      {
        heading: "In hospital",
        paragraphs: [
          "The capsule is usually taken on the ward, and you then usually stay in a room on your own for 1 to 3 days. The radioactivity slowly leaves your body in your urine, stools, saliva and sweat, and a physicist measures it regularly to decide when you can go home.",
          "There is no contact with anyone under 16 or anyone pregnant or breastfeeding, and visitors' time is limited. Some people feel lonely in a single room, so talk to your specialist nurse beforehand if you have concerns; you may be able to visit the unit first.",
          "You are encouraged to shower daily, drink lots of fluids and flush the toilet 2 times after using it.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Many people do not have any side effects. Those that happen are usually temporary, such as soreness or tightness around the neck or scar, feeling a bit sick for a couple of days, a dry mouth, and taste changes that usually get better within a few weeks.",
          "Rarely, a dry mouth can become a long-term side effect, usually only after more than one treatment. Tell your doctor or specialist nurse if you get a dry mouth or it does not improve.",
        ],
      },
      {
        heading: "Going home",
        paragraphs: [
          "For a few days at home you avoid close contact with children, babies and anyone who is pregnant, you may not be able to share a bed or have sex, and you avoid long journeys on public transport. You are given written information about the precautions, which you carry with you for 7 days.",
          "For up to 3 to 6 months, you may set off security radiation alarms at airports, so keep the hospital's written information or a letter from your doctor with your passport.",
        ],
      },
    ],
    helps: [
      "Follow the low iodine diet your cancer team gives you as best you can.",
      "Talk to your specialist nurse before treatment if you have concerns about staying in a single room.",
      "Drink plenty of fluids and shower daily while you are in hospital.",
      "Tell your doctor or nurse about any side effects; they can give you medicines to help.",
      "Carry your written precautions for 7 days, and keep a letter with your passport if you travel.",
    ],
    tryThisWeek: [
      "Plan your low iodine meals.",
      "Ask about the single room.",
      "Pack the hospital's letter.",
    ],
    ask: "Do I need radioactive iodine, and what precautions will I need at home afterwards?",
    interactive: {
      kind: "timeline",
      title: "Radioactive iodine, step by step",
      steps: [
        { id: "diet", when: "1 to 2 weeks before", title: "Low iodine diet", points: ["Avoid fish, seafood, soy and takeaways.", "Limit milk, cheese and eggs."] },
        { id: "tsh", when: "Before treatment", title: "Raise your TSH", points: ["Usually Thyrogen injections.", "Or stopping your hormone tablets, if advised."] },
        { id: "capsule", when: "Treatment day", title: "The capsule", points: ["Usually taken on the ward.", "Drink plenty of fluids."] },
        { id: "room", when: "1 to 3 days", title: "A room on your own", points: ["No contact with under-16s or anyone pregnant.", "Radiation is measured to decide when you go home."] },
        { id: "home", when: "A few days at home", title: "Precautions", points: ["Avoid close contact with children and anyone pregnant.", "Carry your written information for 7 days."] },
        { id: "travel", when: "Up to 3 to 6 months", title: "Airports", points: ["You may set off radiation alarms.", "Keep a letter with your passport."] },
      ],
    },
    sources: [MAC_RAI, BTF_CANCER, BF_I131, NHS_TREAT],
    quiz: {
      question: "If you eat a high iodine food by mistake before treatment, what then?",
      options: [{ text: "Do not worry; it is unlikely to affect treatment", right: true }, { text: "The treatment has to be cancelled" }, { text: "Stop eating for a day" }],
      why: "If you eat a high iodine food by mistake, do not worry: it is unlikely to affect your treatment.",
    },
  },
  {
    id: "thc-tablets",
    kicker: "Hormone tablets",
    question: "How do I take levothyroxine, and why is my dose higher than usual?",
    hook: "One tablet a day replaces what your thyroid made, and at a slightly higher dose it can help keep the cancer from coming back.",
    short: "If all of your thyroid was removed, you take levothyroxine every day for the rest of your life to replace the hormone your thyroid made. After papillary or follicular cancer, the dose is often slightly higher than usual to keep TSH very low, which helps reduce the risk of the cancer coming back. Take it at the same time each day on an empty stomach, and only change the dose with your thyroid team.",
    sections: [
      {
        heading: "Why you take it",
        paragraphs: [
          "Levothyroxine is a synthetic version of thyroxine, the T4 hormone your thyroid gland is no longer making. If all of your thyroid was removed, you take it every day for the rest of your life.",
          "It does 2 important things: it keeps your body working at the correct speed, called your metabolism, and it reduces the risk of thyroid cancer coming back. It also helps prevent signs of an underactive thyroid, such as tiredness, weight gain, feeling cold, dry skin and hair, and constipation.",
        ],
      },
      {
        heading: "Keeping TSH low",
        paragraphs: [
          "Levothyroxine stops your body making thyroid-stimulating hormone, or TSH, which can encourage papillary or follicular cancer cells to grow. After surgery you are given a slightly higher dose to keep TSH very low, which is called TSH suppression.",
          "This is most important in the first 2 years. If you had an excellent response to treatment, or you are in a low risk group, your cancer doctor may talk to you about allowing TSH levels to rise a little.",
          "Medullary thyroid cancer is different: TSH suppression does not help, so you will not need it.",
        ],
      },
      {
        heading: "Taking it well",
        paragraphs: [
          "Take it at the same time every day, on an empty stomach, 30 to 60 minutes before your first meal, any drink with caffeine, or any other medicine. Swallow the tablets whole with a glass of water.",
          "Calcium and iron supplements, antacids and some other medicines may not mix well with it, so leave at least 4 hours between levothyroxine and calcium or zinc supplements. Tell your doctor about any other medicines, herbal remedies, vitamins or supplements, including biotin, which can affect your thyroid tests.",
          "Check with your pharmacist that your tablets are exactly as prescribed, so you keep taking the same brand.",
        ],
      },
      {
        heading: "Missed doses and side effects",
        paragraphs: [
          "If you forget a dose, take it as soon as you remember, unless it is nearly time for your next one. Do not take 2 doses at the same time to make up for a missed one.",
          "Once the correct dose is found, you should not have side effects, because the tablets replace hormones your thyroid would have made. Most side effects happen when the dose is too high, such as difficulty sleeping, headaches, feeling anxious, sweating or hair loss, and they often improve when the dose is changed.",
          "Call NHS 111 if you think you might be having a serious side effect, such as signs of an allergic reaction, or a high temperature with a fast or irregular heartbeat.",
        ],
      },
      {
        heading: "Who changes the dose",
        paragraphs: [
          "It is very important that no one other than your thyroid team, including your GP, alters your dose. Your GP will have been told that you are on TSH suppression and is advised to talk to your consultant before changing it.",
          "Some centres give out TSH alert cards to carry. If you are planning a pregnancy, talk to your thyroid doctor or cancer doctor first about changes to your dose.",
        ],
      },
    ],
    helps: [
      "Take your tablet at the same time each day, 30 to 60 minutes before breakfast, tea or coffee.",
      "Leave at least 4 hours between levothyroxine and calcium or zinc supplements.",
      "Ask your pharmacist to check that you are given the same brand each time.",
      "Only change your dose when your thyroid team advises it.",
      "Speak to a doctor or pharmacist about side effects that bother you or do not go away.",
      "Call NHS 111 if you think you are having a serious side effect.",
    ],
    tryThisWeek: [
      "Take it at the same time daily.",
      "Space it from calcium supplements.",
      "Keep to the same brand.",
    ],
    ask: "What dose of levothyroxine do I need, what TSH level are we aiming for, and how is it checked?",
    interactive: {
      kind: "scenarios",
      title: "Tablet moments",
      scenarios: [
        {
          id: "forgot",
          situation: "At lunchtime you realise you missed this morning's tablet.",
          options: [{ text: "Take it now, unless your next dose is nearly due", best: true }, { text: "Take 2 tomorrow morning" }],
          why: "If you forget a dose, take it as soon as you remember, unless it is nearly time for your next one.",
        },
        {
          id: "calcium",
          situation: "You also take a calcium supplement every morning.",
          options: [{ text: "Leave at least 4 hours between them", best: true }, { text: "Take them together to save time" }],
          why: "Calcium and iron supplements, antacids and some other medicines may not mix well with it, so leave at least 4 hours between levothyroxine and calcium or zinc supplements.",
        },
        {
          id: "gp-dose",
          situation: "A GP you have not seen before suggests lowering your dose after a blood test.",
          options: [{ text: "Ask them to check with your thyroid team first", best: true }, { text: "Change the dose straight away" }],
          why: "Your GP will have been told that you are on TSH suppression and is advised to talk to your consultant before changing it.",
        },
        {
          id: "brand",
          situation: "Your tablets look different from usual at the pharmacy.",
          options: [{ text: "Check with the pharmacist they are as prescribed", best: true }, { text: "Say nothing and take them" }],
          why: "Check with your pharmacist that your tablets are exactly as prescribed, so you keep taking the same brand.",
        },
      ],
    },
    sources: [MAC_HRT, NHS_LEVO, BTF_CANCER, BF_TYPES, CRUK_PROBLEMS],
    quiz: {
      question: "Why is the levothyroxine dose often slightly higher after thyroid cancer?",
      options: [{ text: "To keep TSH very low", right: true }, { text: "To help you lose weight" }, { text: "Because the tablets are weaker" }],
      why: "After surgery you are given a slightly higher dose to keep TSH very low, which is called TSH suppression.",
    },
  },
  {
    id: "thc-voice-calcium",
    kicker: "Voice and calcium",
    question: "Why is my voice hoarse, and why do I need calcium tablets?",
    hook: "The thyroid sits next to the nerves of your voice box and the small glands that control calcium. Both usually recover.",
    short: "The thyroid gland is close to the nerves that control your vocal cords, so surgery can leave your voice hoarse or weak. This usually gets better within a few weeks, and permanent changes are rare. Surgery can also affect the parathyroid glands, which control calcium, so you may need calcium tablets and a form of vitamin D, often for a short time.",
    sections: [
      {
        heading: "Why your voice may change",
        paragraphs: [
          "The thyroid gland is close to the nerves that control your vocal cords. Sometimes these nerves are bruised or damaged during surgery, which can make your voice sound hoarse and weak, and your doctor may check your vocal cords before and after surgery.",
          "This usually gets better within a few weeks, and it is rare to have permanent changes. If you continue to have problems, your team might refer you to a voice therapist or speech and language therapist.",
        ],
      },
      {
        heading: "The parathyroid glands",
        paragraphs: [
          "There are 4 parathyroid glands, each about the size of a pea, close to the thyroid. Their job is to keep the calcium level in your blood normal.",
          "Surgery to the thyroid can damage these nearby glands, or the surgeon might need to remove some of them. If this happens, the level of calcium in your blood may become low, which is called hypoparathyroidism.",
        ],
      },
      {
        heading: "Signs of low calcium",
        paragraphs: [
          "Low calcium can cause tingling in your hands or feet or around your mouth, and unusual muscle movements, such as jerking, twitching, spasms or muscle cramps. After surgery, you have a blood test to check your calcium level.",
          "If it is low, you are given calcium as a tablet or through a drip, and your levels are checked every day until they improve. Your doctor may also prescribe a form of vitamin D.",
          "It is important to tell your doctor or nurse if you have any problems after surgery. Many problems are minor, but treating them as soon as possible is important.",
        ],
      },
      {
        heading: "Coming off calcium",
        paragraphs: [
          "The damage is usually temporary, but it could be permanent in some people. You might need calcium tablets for a short time at home, and after this your GP or hospital doctor checks your calcium levels regularly.",
          "Calcium and vitamin D treatment needs regular monitoring, as the calcium level can occasionally go too high, which can cause problems for the kidneys. For many people the dose can be reduced, and some can stop altogether, but this needs to be done with a doctor or specialist nurse, as even small reductions can bring back the tingling and cramps.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or nurse if you have any problems after surgery, such as tingling or cramps.",
      "Ask whether your vocal cords will be checked before and after surgery.",
      "If your voice problems continue, ask your team about a voice or speech and language therapist.",
      "Keep up your calcium blood tests, and only reduce calcium or vitamin D with your doctor or specialist nurse.",
      "Ask your surgeon to explain the risks to your voice and calcium before any surgery.",
    ],
    tryThisWeek: [
      "Report tingling or cramps.",
      "Ask about voice therapy.",
      "Keep up your calcium checks.",
    ],
    ask: "Should my calcium or voice be checked, and how long will I need calcium and vitamin D?",
    interactive: {
      kind: "signs",
      title: "Changes to mention",
      intro: "Tick any you have noticed since surgery. It is important to tell your doctor or nurse about problems after surgery.",
      signs: ["Tingling in the hands or feet", "Tingling around the mouth", "Muscle cramps, twitching or spasms", "A hoarse or weak voice", "A voice that is not getting better after a few weeks", "Tingling or cramps after a calcium dose is reduced"],
      after: "Tell your doctor, specialist nurse or surgical team. Calcium and vitamin D doses should only be reduced with a doctor or specialist nurse.",
      copyHeading: "Changes since my surgery",
    },
    sources: [MAC_THYROIDECTOMY, CRUK_PROBLEMS, MAC_SURGERY, BF_PARA, CRUK_ABOUT, BTF_CANCER],
    quiz: {
      question: "How does a hoarse voice after thyroid surgery usually change?",
      options: [{ text: "It usually gets better within a few weeks", right: true }, { text: "It is always permanent" }, { text: "It gets worse each month" }],
      why: "This usually gets better within a few weeks, and it is rare to have permanent changes.",
    },
  },
  {
    id: "thc-scar",
    kicker: "Scar and neck",
    question: "How will my scar heal, and when will my neck feel normal?",
    hook: "Most thyroid scars sit in a natural skin fold and fade over the months. Gentle neck exercises stop stiffness setting in.",
    short: "The scar is usually a line low on the front of your neck, often in a natural skin fold. It is red and sore at first but usually becomes quite faint after 6 months to a year. Your neck may feel stiff and numb for a few weeks, and the exercises you are shown help prevent permanent stiffness.",
    sections: [
      {
        heading: "Your scar",
        paragraphs: [
          "The scar is usually a horizontal line towards the bottom and front of your neck, in a natural skin fold, and about 4 to 6cm long. If you also had lymph nodes removed, you still have 1 scar, but it extends up the neck towards your ear.",
          "On white skin the scar is red to begin with, and on brown or black skin it is usually darker than the surrounding skin. It usually becomes quite faint after 6 months to a year; if you have long-term problems with a thick and red scar, talk to your healthcare team.",
        ],
      },
      {
        heading: "Caring for the wound",
        paragraphs: [
          "Keep your neck wound clean and dry until it has completely healed, and avoid knocking it or putting pressure on it. Avoid putting the wound completely under water until at least 2 weeks after surgery, or until your surgeon says it is okay.",
          "Avoid direct sunlight on the wound, and once it has healed, always use a high sun protection factor. Your nurse can show you how to massage the wound gently to help flatten the tissue, and might suggest creams or oils.",
          "Contact the hospital straight away if there are signs of infection, such as redder or darker skin around the wound, swelling or heat, any discharge, or a high temperature.",
        ],
      },
      {
        heading: "Stiffness and numbness",
        paragraphs: [
          "Your neck may feel stiff, uncomfortable and numb after surgery, and the skin up to your jawline can be numb from the local anaesthetic. Stiffness usually gets better after a few weeks, but may last longer if you had lymph nodes removed.",
          "Do the neck exercises you have been shown, and carry on with them for 3 months even if your movement is back. Taking painkillers about 30 minutes beforehand can help, and your doctor may refer you to a physiotherapist if stiffness is a problem.",
        ],
      },
      {
        heading: "Swelling",
        paragraphs: [
          "Some swelling close to the wound is normal and usually goes away after a few weeks as it heals. If lymph nodes in your neck were removed, swelling can stay or get worse, and when it happens a few months or years later it is called lymphoedema.",
          "Tell your doctor if swelling in your neck continues after a few weeks. If you are worried about any swelling, talk to your doctor or specialist nurse straight away.",
        ],
      },
    ],
    helps: [
      "Keep the wound clean and dry, and avoid putting it under water for at least 2 weeks.",
      "Protect the scar from direct sun, and use a high sun protection factor once it has healed.",
      "Ask your nurse to show you how to massage the wound gently.",
      "Do your neck exercises for 3 months, taking painkillers about 30 minutes before if you need them.",
      "Contact the hospital straight away if you notice signs of infection.",
      "Talk to your doctor or specialist nurse straight away if neck swelling worries you.",
    ],
    tryThisWeek: [
      "Do your neck exercises daily.",
      "Keep the scar out of the sun.",
      "Ask about scar massage.",
    ],
    ask: "When can I start massaging my scar, and which neck exercises should I do?",
    interactive: {
      kind: "timeline",
      title: "Your scar and neck, month by month",
      steps: [
        { id: "days", when: "First days", title: "Sore and swollen", points: ["The skin up to your jaw may feel numb.", "Keep the wound clean and dry."] },
        { id: "two-weeks", when: "At least 2 weeks", title: "Not under water", points: ["Avoid putting the wound under water.", "Or wait until your surgeon says it is okay."] },
        { id: "weeks", when: "A few weeks", title: "Stiffness eases", points: ["Swelling near the wound usually goes.", "It can take longer if lymph nodes were removed."] },
        { id: "three-months", when: "3 months", title: "Keep up the exercises", points: ["Even if your movement is back.", "Painkillers 30 minutes before can help."] },
        { id: "year", when: "6 months to a year", title: "The scar fades", points: ["It usually becomes quite faint.", "Keep using high sun protection on it."] },
      ],
    },
    sources: [MAC_THYROIDECTOMY, CRUK_AFTER_SURGERY, CRUK_LIFE_AFTER, MAC_SURGERY, CRUK_PROBLEMS],
    quiz: {
      question: "When does a thyroid scar usually become quite faint?",
      options: [{ text: "After 6 months to a year", right: true }, { text: "Within a week" }, { text: "It never fades" }],
      why: "It usually becomes quite faint after 6 months to a year; if you have long-term problems with a thick and red scar, talk to your healthcare team.",
    },
  },
  {
    id: "thc-fatigue",
    kicker: "Tiredness",
    question: "Why am I still tired, and could my dose be the reason?",
    hook: "Finding the right levothyroxine dose can take months, and treatment itself can leave you drained. Both can be talked about, and both can be helped.",
    short: "It might take a few months to find the right dose of thyroid hormones, and during this time you may feel tired. Many people also feel weaker and more tired than usual for a while after treatment. Regular activity, pacing, good sleep and a fatigue diary can help, and it is important to tell your team how you feel.",
    sections: [
      {
        heading: "Finding the right dose",
        paragraphs: [
          "The dose you start on depends on your weight, and your doctor might change it depending on the results of regular blood tests that measure your T4 and TSH levels. It might take a few months to find the right dose for you, and during this time you may feel tired.",
          "Taking your tablets every day matters, as missing them can affect your blood test results and your health. Swallow them with water on an empty stomach, and keep them at least 4 hours apart from calcium, iron and multivitamins that contain iron.",
        ],
      },
      {
        heading: "Around radioactive iodine",
        paragraphs: [
          "If you stop your thyroid hormones before radioactive iodine, your metabolism may slow down, and you may feel tired and cold and find it hard to concentrate. You should avoid driving during this time.",
          "This will pass, and you will feel a lot better when you are back on your thyroid medication. If you are struggling with these symptoms, contact your oncology team.",
        ],
      },
      {
        heading: "Cancer-related fatigue",
        paragraphs: [
          "It can take some time after treatment before you feel fit and well again, and some people feel weaker and more tired than usual. Fatigue in people with cancer can mean getting tired more quickly after less activity, and feeling exhausted even when you are getting enough rest and sleep.",
          "For most people, fatigue gets better after treatment finishes, but for some it may continue for months or sometimes years. You may feel tired and lethargic when treatment has finished, and this usually gets better with time.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "There is good evidence that physical activity, such as walking quickly, is one of the best ways to help reduce symptoms of fatigue. Being active may also give you more energy, improve sleep and help with mood.",
          "Plan your day so you have energy for the things that matter most, and pace yourself, balancing short naps and rests with some activity. A fatigue diary, scoring each day from 0 to 10, can help you find patterns and plan important activities for when you have more energy.",
          "Try to keep to a normal sleep routine, and cutting down on caffeine and alcohol may help your sleep. Spread housework out over the week, sit down for some tasks, and accept help from family or friends.",
        ],
      },
      {
        heading: "Telling your team",
        paragraphs: [
          "Tell a member of your healthcare team if you have fatigue at any time. They may ask how severe it is, when it started and how it affects your daily life, and look at things that can add to it, such as anaemia, pain or low thyroid function.",
          "Coping with symptoms while your medication is adjusted can affect your wellbeing, and learning to manage your energy levels, gentle exercise and relaxation can all help. Where fatigue persists, the British Thyroid Foundation recommends seeing your GP.",
        ],
      },
    ],
    helps: [
      "Tell a member of your healthcare team about your tiredness, at any time.",
      "Take your levothyroxine every day, as missed doses can affect your blood test results.",
      "Be physically active, such as walking quickly, if you feel up to it.",
      "Keep a fatigue diary, scoring each day from 0 to 10, and share it with your team.",
      "Balance short naps and rests with some activity, and keep to a normal sleep routine.",
      "Avoid driving while you are off your thyroid hormones before radioactive iodine.",
    ],
    tryThisWeek: [
      "Start a fatigue diary.",
      "Take a brisk walk.",
      "Keep a normal sleep routine.",
    ],
    ask: "Could my levothyroxine dose be adding to my tiredness, and when will my levels next be checked?",
    interactive: {
      kind: "risk-check",
      title: "What adds to the tiredness?",
      intro: "Tick any that apply. Some you can work on, and some your team can help with.",
      items: [
        { id: "dose", label: "A dose still being adjusted", note: "It might take a few months to find the right dose. Your blood tests guide any change.", changeable: true },
        { id: "withdrawal", label: "Being off your hormone tablets", note: "Before radioactive iodine. You will feel a lot better when you are back on them.", changeable: false },
        { id: "treatment", label: "The effects of treatment", note: "Fatigue can last months, but for most people it gets better after treatment.", changeable: false },
        { id: "inactive", label: "Being less active", note: "Physical activity, such as walking quickly, is one of the best ways to reduce fatigue.", changeable: true },
        { id: "sleep", label: "Trouble sleeping", note: "Keep to a normal sleep routine, and talk to your team if sleep is a problem.", changeable: true },
        { id: "missed", label: "Missed tablets", note: "Missing doses can affect your blood test results and your health.", changeable: true },
      ],
    },
    sources: [MAC_HRT, MAC_FOLLOW, MAC_FATIGUE, BTF_FATIGUE, BTF_CANCER, CRUK_COPING, BTF_PSYCH],
    quiz: {
      question: "How long can it take to find the right levothyroxine dose?",
      options: [{ text: "A few months", right: true }, { text: "One day" }, { text: "Exactly a week" }],
      why: "It might take a few months to find the right dose for you, and during this time you may feel tired.",
    },
  },
  {
    id: "thc-pregnancy",
    kicker: "Pregnancy",
    question: "Can I have a baby after thyroid cancer treatment?",
    hook: "After radioactive iodine there is a wait of some months, and levothyroxine needs closer checks in pregnancy. With planning, it is possible.",
    short: "After radioactive iodine, the advice is not to get pregnant for at least 6 months, or make someone pregnant for at least 4 months, and the treatment does not normally affect fertility. If you take levothyroxine and are planning a pregnancy, talk to your thyroid doctor or cancer doctor first, as your dose may change and your levels are checked more often. Levothyroxine can be taken in pregnancy and while breastfeeding.",
    sections: [
      {
        heading: "Around radioactive iodine",
        paragraphs: [
          "If you are pregnant or breastfeeding, you cannot have radioactive iodine, and if you could get pregnant you have a pregnancy test before treatment. If you are breastfeeding, you stop at least 8 weeks before treatment; it is not safe to start again afterwards, but it will be safe if you have more children in the future.",
          "After treatment, use contraception: do not get pregnant for at least 6 months, and do not make someone pregnant for at least 4 months. Tell your hospital doctor if your period is late and you think you may be pregnant within 6 months of treatment.",
        ],
      },
      {
        heading: "Fertility",
        paragraphs: [
          "Radioactive iodine does not normally affect being able to get pregnant or make someone pregnant. If you need more than 1 treatment, there is a very small risk that it might affect sperm quality, and you might be offered sperm banking.",
          "In the first year after treatment, there is a slightly higher risk of miscarriage. Your doctor or nurse can give you more information and support about this.",
        ],
      },
      {
        heading: "Planning a pregnancy on levothyroxine",
        paragraphs: [
          "If you are planning to get pregnant, talk to your thyroid doctor, called an endocrinologist, or your cancer doctor first. They can explain changes to your levothyroxine dose in pregnancy and how often your thyroid hormone levels will be checked.",
          "Tell your doctor if you are pregnant or get pregnant while taking levothyroxine. It can be taken during pregnancy if needed, and you may need more blood tests to make sure you are taking the right dose.",
          "It is likely that you will need a higher dose during pregnancy, especially in the first 20 weeks, to give the baby enough thyroid hormone. After the birth you will probably return to your usual dose, with a blood test a few weeks later.",
        ],
      },
      {
        heading: "Breastfeeding and your midwife",
        paragraphs: [
          "It is safe to breastfeed while taking levothyroxine, though the NHS suggests checking with a pharmacist or doctor first.",
          "Always tell your midwife or obstetrician if you have a thyroid disorder or have been treated for one in the past. If you take iron or calcium supplements, take them several hours before or after your levothyroxine.",
        ],
      },
    ],
    helps: [
      "Use contraception after radioactive iodine: at least 6 months before getting pregnant, and 4 months before fathering a child.",
      "Talk to your thyroid doctor or cancer doctor before trying for a baby.",
      "Tell your doctor as soon as you know you are pregnant.",
      "Tell your midwife or obstetrician about your thyroid treatment.",
      "Take iron or calcium supplements several hours apart from your levothyroxine.",
      "If you need more than one radioactive iodine treatment, ask about sperm banking.",
    ],
    tryThisWeek: [
      "Plan contraception after treatment.",
      "Talk to your doctor before trying.",
      "Tell your midwife your history.",
    ],
    ask: "When is it safe to try for a baby, and how will my levothyroxine dose be managed in pregnancy?",
    interactive: {
      kind: "timeline",
      title: "From treatment to a baby",
      steps: [
        { id: "before", when: "Before radioactive iodine", title: "A pregnancy test", points: ["You cannot have it if pregnant or breastfeeding.", "Stop breastfeeding at least 8 weeks before."] },
        { id: "four", when: "At least 4 months after", title: "Fathering a child", points: ["Avoid making someone pregnant until then.", "Fertility is not normally affected."] },
        { id: "six", when: "At least 6 months after", title: "Getting pregnant", points: ["Use contraception until then.", "Miscarriage risk is slightly higher in the first year."] },
        { id: "planning", when: "Planning a pregnancy", title: "Talk first", points: ["See your thyroid doctor or cancer doctor.", "Ask how your dose and checks will change."] },
        { id: "pregnant", when: "During pregnancy", title: "Dose and blood tests", points: ["A higher dose is likely, especially early on.", "More blood tests check your dose."] },
        { id: "after", when: "After the birth", title: "Back to your usual dose", points: ["A blood test a few weeks later.", "It is safe to breastfeed on levothyroxine."] },
      ],
    },
    sources: [MAC_RAI, BTF_CANCER, MAC_HRT, NHS_LEVO, BTF_PREGNANCY, BF_I131],
    quiz: {
      question: "How long should you avoid getting pregnant after radioactive iodine?",
      options: [{ text: "At least 6 months", right: true }, { text: "2 weeks" }, { text: "Ten years" }],
      why: "After treatment, use contraception: do not get pregnant for at least 6 months, and do not make someone pregnant for at least 4 months.",
    },
  },
  {
    id: "thc-work",
    kicker: "Work and life",
    question: "When can I go back to work, drive and do my usual things?",
    hook: "Most people are back at work within a few weeks of thyroid surgery. The law protects you, and adjustments can ease the way back.",
    short: "Most people can return to work within a few weeks of thyroid surgery, depending on the work they do. Your doctor will tell you when it is safe to drive, and heavy lifting and contact sports are avoided for a while. If you have had cancer, the law considers this a disability, so your employer has to consider reasonable adjustments, and Access to Work may help with practical support.",
    sections: [
      {
        heading: "Back to work",
        paragraphs: [
          "Everyone recovers from surgery differently. Most people can return to work within a few weeks of the operation, but you might need more time if your work involves heavy lifting, standing for long periods or walking around a lot.",
          "After radioactive iodine, discuss with the nuclear medicine team when it is safe to go back to work. You may still feel very tired if you stopped your thyroid hormones, so talk to your GP about how you feel and whether you are fit for work.",
        ],
      },
      {
        heading: "Everyday activities",
        paragraphs: [
          "Do not lift heavy items for a minimum of 4 weeks, to avoid any strain on your neck wound. You can start with light physical activity, such as short walks, and build up gradually.",
          "Non-contact sports such as golf or tennis should be fine as soon as you feel well enough, but avoid swimming until your wound has healed. Contact sports such as rugby or football should be avoided for at least the first month.",
        ],
      },
      {
        heading: "Driving",
        paragraphs: [
          "Your doctor will tell you when it is safe to start driving. You need to be able to do an emergency stop and turn your neck in all directions, and you should not drive while taking painkillers that make you drowsy.",
          "You may need to tell your insurance company that you have had thyroid surgery, as some policies give time limits for not driving after surgery.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "If you have or have ever had cancer, the law considers this a disability, so you cannot be treated less favourably because of it. In England, Scotland and Wales the Equality Act 2010 protects you, and in Northern Ireland the Disability Discrimination Act 1995 does; this protection does not end when treatment finishes.",
          "If your employer is aware you have had cancer, they must consider making reasonable adjustments, such as a phased return, different working hours or extra breaks to help with tiredness. Discuss and agree these with your employer before they are put in place.",
        ],
      },
      {
        heading: "Practical help",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition. It can give a grant towards things like specialist equipment, travel to work if you cannot use public transport, or a support worker, and it will not affect any other benefits you get.",
          "Access to Work does not pay for reasonable adjustments, which are the changes your employer has to make by law. Macmillan's money and welfare rights advisers can be called free on 0808 808 00 00.",
        ],
      },
    ],
    helps: [
      "Tell your cancer doctor or specialist nurse what your job involves, so you can talk about any difficulties.",
      "Avoid lifting heavy items for at least 4 weeks after surgery.",
      "Wait until your doctor says it is safe, and you can turn your neck in all directions, before driving.",
      "Check whether your insurance company needs to know about your surgery.",
      "Talk to your employer about reasonable adjustments, such as a phased return.",
      "Look into Access to Work for help with equipment, travel or a support worker.",
    ],
    tryThisWeek: [
      "Tell your team about your job.",
      "Check your car insurance.",
      "Ask about a phased return.",
    ],
    ask: "When can I go back to work and drive, and is there anything I should avoid for now?",
    interactive: {
      kind: "scenarios",
      title: "Back-to-life moments",
      scenarios: [
        {
          id: "lift",
          situation: "Two weeks after surgery, a friend asks you to help move a sofa.",
          options: [{ text: "Say no for now", best: true }, { text: "Help, as the wound looks healed" }],
          why: "Do not lift heavy items for a minimum of 4 weeks, to avoid any strain on your neck wound.",
        },
        {
          id: "drive",
          situation: "You feel well but still cannot turn your head fully.",
          options: [{ text: "Wait before driving", best: true }, { text: "Drive short distances only" }],
          why: "You need to be able to do an emergency stop and turn your neck in all directions, and you should not drive while taking painkillers that make you drowsy.",
        },
        {
          id: "return",
          situation: "You are ready to return to work but tire by the afternoon.",
          options: [{ text: "Ask about a phased return or extra breaks", best: true }, { text: "Go straight back to full hours" }],
          why: "If your employer is aware you have had cancer, they must consider making reasonable adjustments, such as a phased return, different working hours or extra breaks to help with tiredness.",
        },
        {
          id: "football",
          situation: "Your weekend football team wants you back after 2 weeks.",
          options: [{ text: "Wait at least a month", best: true }, { text: "Play, but take it easy" }],
          why: "Contact sports such as rugby or football should be avoided for at least the first month.",
        },
      ],
    },
    sources: [MAC_SURGERY, CRUK_LIFE_AFTER, MAC_WORK, MAC_WORK_AFTER, GOV_ATW, BF_I131],
    quiz: {
      question: "Does the law's protection against discrimination end when cancer treatment finishes?",
      options: [{ text: "No, it continues", right: true }, { text: "Yes, it ends with treatment" }, { text: "It only lasts a year" }],
      why: "In England, Scotland and Wales the Equality Act 2010 protects you, and in Northern Ireland the Disability Discrimination Act 1995 does; this protection does not end when treatment finishes.",
    },
  },
  {
    id: "thc-weight-mood",
    kicker: "Weight and mood",
    question: "Is my thyroid to blame for weight gain and low mood?",
    hook: "Thyroid hormone levels can affect weight, mood and energy, but they are rarely the whole story, and things usually settle as levels steady.",
    short: "Changes in thyroid hormone levels can affect your weight, mood, energy and concentration, especially while your dose is being adjusted. Once thyroid hormone levels are back in the normal range, the ability to gain or lose weight is the same as for people without thyroid problems. A healthy, balanced diet, being active and talking about how you feel can all help.",
    sections: [
      {
        heading: "Thyroid hormones and weight",
        paragraphs: [
          "Thyroid hormone helps control your metabolism, and an underactive thyroid is generally linked with some weight gain, much of it from salt and water rather than fat. In general, 5 to 10 pounds of body weight may be due to the thyroid, depending on how underactive it is.",
          "Once thyroid hormone levels are back in the normal range, the ability to gain or lose weight is the same as in people who do not have thyroid problems. If weight gain is the only symptom, it is less likely to be due to the thyroid alone.",
          "Pushing the thyroid hormone dose higher to lose weight is unlikely to change weight much and may cause other problems.",
        ],
      },
      {
        heading: "Other reasons for weight gain",
        paragraphs: [
          "Cancer treatment and its side effects can make it hard to keep a healthy lifestyle. Feeling tired can make you less active, and feeling anxious or depressed can lead some people to eat more and exercise less.",
          "Before trying to lose weight, speak to your GP, cancer doctor or nurse about the best way for you. Eating a healthy, balanced diet and being more active is the best way to manage your weight, and it is better to lose weight gradually, about 1 to 2 pounds a week.",
        ],
      },
      {
        heading: "Mood and concentration",
        paragraphs: [
          "People with thyroid cancer often have emotional symptoms as well as physical ones. Anxiety, low mood, mood swings, difficulty concentrating and short-term memory lapses are common, and rapid changes in thyroid hormone levels can unsettle your emotions.",
          "It can take a while for thyroid medication to become properly balanced after surgery, and coping with tiredness meanwhile can affect your wellbeing. Learning to manage your energy levels, gentle exercise and relaxation can all help.",
          "Taking tablets irregularly can upset your hormone balance and make psychological symptoms worse.",
        ],
      },
      {
        heading: "Getting back to yourself",
        paragraphs: [
          "If the thyroid is the cause, psychological symptoms usually improve as the thyroid is brought under control by treatment, though it may not be as quick as you hope. Most people find they make a full recovery once their thyroid condition is treated.",
          "Do not feel awkward about talking to your doctor about these symptoms, as they could be linked to your thyroid levels. Anxiety or depression sometimes need treatment in their own right, such as relaxation or talking therapies.",
        ],
      },
    ],
    helps: [
      "Talk to your GP, cancer doctor or nurse before trying to lose weight.",
      "Eat a healthy, balanced diet with at least 5 portions of fruit and vegetables a day.",
      "Build up physical activity gently, such as walking, cycling or swimming.",
      "Take your tablets regularly, as missed doses can upset your hormone balance.",
      "Talk to your doctor about mood or memory changes; they could be linked to your thyroid levels.",
      "Talk to someone who has been through it, such as a British Thyroid Foundation volunteer.",
    ],
    tryThisWeek: [
      "Eat 5 portions of fruit and veg.",
      "Take a gentle walk.",
      "Mention mood changes to your doctor.",
    ],
    ask: "Could my weight, mood or energy changes be linked to my thyroid levels or my dose?",
    interactive: {
      kind: "risk-check",
      title: "What could be behind the change?",
      intro: "Tick any that apply. Some are linked to your thyroid, and some to other things.",
      items: [
        { id: "levels", label: "Thyroid levels still settling", note: "Rapid changes in thyroid hormone levels can unsettle your emotions. Blood tests guide your dose.", changeable: true },
        { id: "missed", label: "Missed or irregular tablets", note: "Taking tablets irregularly can upset your hormone balance.", changeable: true },
        { id: "tired", label: "Feeling tired and less active", note: "Building up activity gently can help with both energy and weight.", changeable: true },
        { id: "comfort", label: "Eating more when anxious or low", note: "Talk to your GP or nurse if you think anxiety or low mood is a cause.", changeable: true },
        { id: "treatment", label: "The effects of treatment", note: "Treatment and its side effects can make a healthy lifestyle harder.", changeable: false },
      ],
    },
    sources: [BTF_WEIGHT, BTF_PSYCH, MAC_WEIGHT, MAC_FOLLOW],
    quiz: {
      question: "Once thyroid hormone levels are normal again, what about your ability to lose weight?",
      options: [{ text: "It is the same as for people without thyroid problems", right: true }, { text: "It becomes impossible" }, { text: "It is always easier than before" }],
      why: "Once thyroid hormone levels are back in the normal range, the ability to gain or lose weight is the same as in people who do not have thyroid problems.",
    },
  },
  {
    id: "thc-mood",
    kicker: "Worry",
    question: "How do I live with the worry that it might come back?",
    hook: "Worrying that it will return is very common after treatment. It often eases with time, and there is help if it does not.",
    short: "Worrying about the cancer coming back is very common after treatment, and many people struggle with uncertainty, but these feelings often get better with time. Focusing on what you can control, talking about your feelings and knowing who to contact can help. If you are struggling, talk to your cancer team or GP, and if you need urgent help, call 111 and select the mental health option, or Samaritans free on 116 123.",
    sections: [
      {
        heading: "A very common worry",
        paragraphs: [
          "Worrying about the cancer coming back is common after treatment, and when treatment has finished it is common to worry that every symptom is linked to cancer. Many people struggle with feelings of uncertainty, but these often get better with time.",
          "Certain things can trigger these feelings, such as going to the hospital for a test or hearing something about cancer in the news. Many people find their follow-up appointments quite worrying.",
        ],
      },
      {
        heading: "What can help",
        paragraphs: [
          "Focusing on what you can control may help: getting involved in your recovery, talking about your feelings, finding ways of managing anxiety and stress, and doing activities you enjoy. Constantly checking for symptoms can make you feel anxious, so if you find yourself doing this, talk to someone from your cancer team.",
          "There is no evidence that feeling anxious or sad can affect your recovery. Talking about these feelings openly and getting the right support can help you feel more in control.",
        ],
      },
      {
        heading: "Knowing what to look out for",
        paragraphs: [
          "Ask your cancer team which symptoms to look out for, and about possible late effects of treatment. Make sure you have their contact numbers; you do not have to wait until your follow-up appointment to get in touch, and if you have been discharged, you can contact your GP.",
          "If cancer comes back after treatment, it is often possible to treat it again. Your cancer doctor or nurse will explain the possible treatment options.",
        ],
      },
      {
        heading: "Talking to someone",
        paragraphs: [
          "It can help to talk to family and friends, your specialist nurse, or other people in a similar situation through a support group or a thyroid cancer charity, such as the British Thyroid Foundation or the Butterfly Thyroid Cancer Trust. Counselling can help reduce stress, and your GP or treatment team can tell you what is available in your area.",
          "Learning that you have thyroid cancer is stressful, and in some people it can trigger trauma, with flashbacks, feeling emotionally numb, difficulty sleeping or feeling jumpy. If this happens, talk to your doctor so they can find the right support for you.",
          "If sadness continues or gets worse, it may be turning into depression, and your cancer doctor, specialist nurse or GP can help you get support. You can also call the Macmillan Support Line free on 0808 808 00 00.",
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
      "Ask your cancer team which symptoms to look out for, and keep their contact numbers.",
      "Focus on what you can control, such as your recovery and activities you enjoy.",
      "Talk to your cancer team, GP or practice nurse if you are worried or finding it hard to cope.",
      "Contact the British Thyroid Foundation or the Butterfly Thyroid Cancer Trust to talk to people who understand.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "For urgent mental health help, call 111 and select the mental health option; call 999 if a life is at risk.",
    ],
    tryThisWeek: [
      "Save your team's numbers.",
      "Do something you enjoy.",
      "Save 116 123 in your phone.",
    ],
    ask: "Which symptoms should I look out for, and who do I contact between appointments?",
    interactive: {
      kind: "signs",
      title: "Feelings to mention",
      intro: "Tick any that have lasted. They can help your GP or team understand how you have been.",
      signs: ["Worrying that every symptom is cancer", "Checking your body for changes all the time", "Dreading tests or appointments", "Sadness that is not lifting", "Flashbacks or feeling jumpy", "Difficulty sleeping or concentrating", "Feeling numb or cut off from others", "Feeling very low or having suicidal thoughts"],
      after: "Tell your cancer team or GP. For urgent help, call 111 and select the mental health option, or Samaritans on 116 123. Call 999 if a life is at risk.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_WORRIES, MAC_EMOTIONS, CRUK_COPING, CRUK_FOLLOW, BTF_PSYCH, NHS_URGENT, SAMARITANS, BTF_CANCER],
    quiz: {
      question: "Can feeling anxious or sad affect your recovery?",
      options: [{ text: "There is no evidence that it can", right: true }, { text: "Yes, it makes the cancer return" }, { text: "Only if you feel it every day" }],
      why: "There is no evidence that feeling anxious or sad can affect your recovery.",
    },
  },
];
