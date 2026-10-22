import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Head and neck cancer page's pieces (content/library-conditions/cancer-more.ts,
// `headNeckCancer`). Every sentence was written from wording checked on 22 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from Macmillan Cancer
// Support, Cancer Research UK and the NHS, with The Swallows head and neck cancer charity, the government's pages on
// disability and Access to Work, and Samaritans. The NHS website's own "Head and neck cancer" page now sends readers
// to Macmillan, so the NHS pages used are its mouth cancer, laryngeal cancer, HPV, HPV vaccine, dry mouth, smoking,
// alcohol, talking therapies and urgent mental health pages. The answers describe treatment, recovery and living
// with after-effects; there are no survival figures and nothing that reads as a prediction. The mood answer follows
// safe-messaging guidance and gives the crisis routes exactly as the NHS, Macmillan and Samaritans state them.
// General information only; it never replaces what a person's own head and neck team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const swal = (label: string, path: string): LearnSource => ({ label: `The Swallows: ${label}`, url: `https://theswallows.org.uk/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_MOUTH_WHAT = nhs("What is mouth cancer?", "conditions/mouth-cancer/what-is-mouth-cancer/");
const NHS_MOUTH_TREAT = nhs("Treatment for mouth cancer", "conditions/mouth-cancer/treatment/");
const NHS_MOUTH_HELP = nhs("Help and support with mouth cancer", "conditions/mouth-cancer/help-and-support/");
const NHS_LAR_WHAT = nhs("What is laryngeal cancer?", "conditions/laryngeal-cancer/what-is-laryngeal-cancer/");
const NHS_LAR_SYMPTOMS = nhs("Symptoms of laryngeal cancer", "conditions/laryngeal-cancer/symptoms/");
const NHS_LAR_TREAT = nhs("Treatment for laryngeal cancer", "conditions/laryngeal-cancer/treatment/");
const NHS_HPV = nhs("Human papillomavirus (HPV)", "conditions/human-papilloma-virus-hpv/");
const NHS_HPV_VACCINE = nhs("HPV vaccine", "vaccinations/hpv-vaccine/");
const NHS_DRY_MOUTH = nhs("Dry mouth", "symptoms/dry-mouth/");
const NHS_QUIT = nhs("Quit smoking", "better-health/quit-smoking/");
const NHS_ALCOHOL_SUPPORT = nhs("Alcohol support", "live-well/alcohol-advice/alcohol-support/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const MAC_HN = mac("Head and neck cancer", "head-and-neck-cancer");
const MAC_ORO = mac("Oropharyngeal cancer", "head-and-neck-cancer/oropharyngeal-cancer");
const MAC_MDT = mac("Multidisciplinary team for head and neck cancer", "head-and-neck-cancer/multidisciplinary-team-for-head-and-neck-cancer");
const MAC_PREP = mac("Preparing for head and neck cancer treatment", "head-and-neck-cancer/preparing-for-head-and-neck-cancer-treatment");
const MAC_SURGERY = mac("Surgery for head and neck cancer", "treatments-and-drugs/surgery-for-head-and-neck-cancer");
const MAC_RADIO = mac("Radiotherapy for head and neck cancer", "treatments-and-drugs/radiotherapy-for-head-and-neck-cancer");
const MAC_CHEMO = mac("Chemotherapy for head and neck cancer", "treatments-and-drugs/chemotherapy-for-head-and-neck-cancer");
const MAC_TARGETED = mac("Targeted therapy for head and neck cancer", "treatments-and-drugs/targeted-therapy-for-head-and-neck-cancer");
const MAC_LATE = mac("Late effects of head and neck cancer treatment", "impacts-of-cancer/late-effects-of-head-and-neck-cancer-treatments");
const MAC_EATING = mac("Eating and drinking after head and neck cancer treatment", "impacts-of-cancer/eating-and-drinking-after-head-and-neck-cancer-treatment");
const MAC_SPEECH = mac("Speech and voice after head and neck cancer treatment", "impacts-of-cancer/speech-and-voice-after-head-and-neck-cancer-treatment");
const MAC_DRY_MOUTH = mac("Dry mouth and changes in saliva after head and neck cancer treatment", "impacts-of-cancer/dry-mouth-and-changes-in-saliva-after-head-and-neck-cancer-treatment");
const MAC_MOUTH_CARE = mac("Mouth care after head and neck cancer treatment", "impacts-of-cancer/mouth-care-after-head-and-neck-cancer-treatment");
const MAC_JAW = mac("Jaw problems after head and neck cancer treatment", "impacts-of-cancer/jaw-problems-after-head-and-neck-cancer-treatment");
const MAC_BODY = mac("Changes to your appearance and body image", "impacts-of-cancer/changes-to-your-appearance-and-body-image");
const MAC_LARYNX = mac("Laryngeal (larynx) cancer", "laryngeal-cancer");
const MAC_FINISHING = mac("Finishing cancer treatment", "after-treatment/finishing-treatment");
const MAC_WORRY = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");
const MAC_LIFESTYLE = mac("Lifestyle and well-being after treatment", "after-treatment/lifestyle-and-wellbeing-after-treatment");
const MAC_RETURNING = mac("Returning to work", "impacts-of-cancer/work-and-cancer/returning-to-work");
const MAC_ADJUST = mac("Reasonable adjustments", "impacts-of-cancer/work-and-cancer/reasonable-adjustments");
const MAC_RIGHTS = mac("Cancer and employment rights", "impacts-of-cancer/work-and-cancer/cancer-and-employment-rights");
const MAC_MONEY_FAQ = mac("Money worries and cancer: your questions answered", "get-help/financial-and-work/money-faqs");

const CRUK_HN = cruk("Head and neck cancer", "head-neck-cancer");
const CRUK_RISKS = cruk("Risks and causes of mouth and oropharyngeal cancer", "mouth-cancer/risks-causes");
const CRUK_HPV = cruk("Does HPV cause cancer?", "causes-of-cancer/infections-eg-hpv-and-cancer/does-hpv-cause-cancer");
const CRUK_FOLLOW_UP = cruk("Follow up for mouth and oropharyngeal cancer", "mouth-cancer/treatment/follow-up");
const CRUK_LAR_FOLLOW_UP = cruk("Follow up after treatment for laryngeal cancer", "laryngeal-cancer/treatment/follow-up");
const CRUK_SPEECH = cruk("Changes in your speech due to mouth and oropharyngeal cancer", "mouth-cancer/living-with/changes-speech");
const CRUK_SPEAK_LARYNGECTOMY = cruk("Speaking after a laryngectomy", "laryngeal-cancer/living-with/speaking-after-laryngectomy");
const CRUK_STOMA = cruk("Having a breathing stoma", "laryngeal-cancer/living-with/stoma");
const CRUK_EATING = cruk("Eating and drinking when you have mouth and oropharyngeal cancer", "mouth-cancer/living-with/eating");
const CRUK_APPEARANCE = cruk("Changes in your appearance due to mouth and oropharyngeal cancer", "mouth-cancer/living-with/changes-your-appearance");
const CRUK_COPING = cruk("Coping with mouth and oropharyngeal cancer", "mouth-cancer/living-with/coping");

const SWALLOWS_HOME = swal("The Swallows Head and Neck Cancer Support Group", "");
const SWALLOWS_247 = swal("24/7 Support", "support/24-7-support/");
const SWALLOWS_POST = swal("Post Treatment", "the-cancer-journey/post-treatment/");
const SWALLOWS_RESTAURANT = swal("Restaurant Card", "support/services/restaurant-card/");

const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const headNeckAnswers: LearnArticle[] = [
  {
    id: "hn-what-you-had",
    kicker: "Your treatment",
    question: "What was each part of my treatment for?",
    hook: "Surgery, radiotherapy, chemotherapy and newer drugs each had a job, and the team planned them to protect how you eat, speak and look.",
    short: "The aim of treatment for head and neck cancer is to remove or destroy the cancer and reduce the risk of it coming back. Surgery, radiotherapy and chemotherapy, often radiotherapy and chemotherapy together as chemoradiation, are the main treatments, and targeted or immunotherapy drugs are sometimes used. Doctors plan treatment so the effect on appearance, speech, swallowing and eating is as little as possible.",
    sections: [
      {
        heading: "Why your plan was yours",
        paragraphs: [
          "Because head and neck cancer is not common, you are usually treated in a specialist head and neck unit. A team of specialists, called a multidisciplinary team, meets to discuss the best treatment for you.",
          "Your treatment depends on where the cancer is, its type and stage, the best way to maintain appearance, speech and swallowing, your general health and your preferences. Doctors plan it so the effect on your appearance, speech, swallowing and eating is as little as possible.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Surgery is one of the main treatments for head and neck cancer. Small cancers may be treated with a simple operation or laser surgery, and if the surgeon operates through the open mouth, you will not have any external scars.",
          "If the cancer is bigger, the surgeon may also remove lymph nodes in the neck, which is called a neck dissection. Some people need reconstructive surgery, where tissue from another part of the body, such as the forearm, thigh or chest, replaces tissue taken from the head and neck.",
          "If part or all of your voice box was removed, recovery can take a long time. You may need a hole in your neck called a stoma, which you breathe through.",
        ],
      },
      {
        heading: "Radiotherapy and chemoradiation",
        paragraphs: [
          "Radiotherapy uses high-energy x-rays to destroy cancer cells, while doing as little harm as possible to normal cells. It may be used on its own for small cancers, but it is often given with chemotherapy, which is called chemoradiation.",
          "Chemoradiation is often the main treatment for locally advanced head and neck cancer, because the chemotherapy helps the radiotherapy to work better. Treatment may take 4 to 7 weeks, and you wear a plastic mesh mask, made for you, that holds your head and neck still.",
          "The most common type is intensity-modulated radiotherapy, which shapes the beams to avoid the salivary glands. For some people, this may reduce long-term side effects such as a dry mouth.",
        ],
      },
      {
        heading: "Chemotherapy, targeted drugs and immunotherapy",
        paragraphs: [
          "Chemotherapy uses anti-cancer drugs to destroy cancer cells. You may have had it on its own before radiotherapy or surgery to shrink the cancer, or each week or every 3 weeks during radiotherapy.",
          "The targeted drug cetuximab is sometimes given with radiotherapy if chemoradiation is not suitable. The immunotherapy drugs pembrolizumab and nivolumab help the immune system find and attack cancer cells, and may be used if the cancer is advanced or comes back.",
          "Rarely, immunotherapy can cause immune side effects up to 2 years after treatment finishes. If you think you have one, contact your cancer doctor or nurse straight away.",
        ],
      },
      {
        heading: "After treatment ends",
        paragraphs: [
          "It can take several months for the side effects of treatment to improve. Always tell your specialist about side effects that are not improving, or any new symptoms that do not get better within 2 weeks.",
          "You may see a dentist, a speech and language therapist or a dietitian during and after treatment. They help you learn to cope with any changes to eating, drinking and speech.",
        ],
      },
    ],
    helps: [
      "Ask your specialist team to explain each treatment you had, with its benefits and side effects.",
      "Tell your specialist about side effects that are not improving, or new symptoms that do not get better within 2 weeks.",
      "You do not need to wait for your next check-up to talk about symptoms or side effects that worry you.",
      "Contact your cancer doctor or nurse straight away if you think you have an immune side effect after immunotherapy.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if you would like to talk.",
    ],
    tryThisWeek: [
      "Ask what each treatment was for.",
      "Report side effects that are not improving.",
      "Save the Macmillan Support Line number.",
    ],
    ask: "Which treatments did I have, and which side effects should I expect to improve or to last?",
    interactive: {
      kind: "flip-cards",
      title: "Your treatments, card by card",
      intro: "Turn each card to see what each treatment was for.",
      cards: [
        { id: "surgery", front: "Surgery", when: "One of the main treatments", back: "Removes the cancer, sometimes with lymph nodes in the neck. Some people also have reconstructive surgery." },
        { id: "radiotherapy", front: "Radiotherapy", when: "Usually over 4 to 7 weeks", back: "High-energy x-rays destroy cancer cells. A mesh mask made for you holds your head and neck still." },
        { id: "chemoradiation", front: "Chemoradiation", when: "Often for locally advanced cancer", back: "Chemotherapy and radiotherapy together. The chemotherapy helps the radiotherapy to work better." },
        { id: "chemotherapy", front: "Chemotherapy", when: "Before or during radiotherapy", back: "Anti-cancer drugs. Given first, they can shrink the cancer and make other treatment work better." },
        { id: "cetuximab", front: "Targeted therapy", when: "If chemoradiation is not suitable", back: "Cetuximab, given as a drip once a week during a course of radiotherapy." },
        { id: "immunotherapy", front: "Immunotherapy", when: "If the cancer is advanced or comes back", back: "Pembrolizumab or nivolumab help the immune system find and attack cancer cells." },
      ],
    },
    sources: [MAC_HN, MAC_MDT, MAC_SURGERY, NHS_LAR_TREAT, MAC_RADIO, MAC_CHEMO, MAC_TARGETED, NHS_MOUTH_TREAT],
    quiz: {
      question: "Why is chemotherapy often given with radiotherapy?",
      options: [{ text: "It helps the radiotherapy to work better", right: true }, { text: "It heals the mouth after surgery" }, { text: "It stops the mask feeling tight" }],
      why: "Chemoradiation is often the main treatment for locally advanced head and neck cancer, because the chemotherapy helps the radiotherapy to work better.",
    },
  },
  {
    id: "hn-types",
    kicker: "Understanding",
    question: "Where was my cancer: the mouth, the throat or the voice box?",
    hook: "Head and neck cancer is a general term for many different cancers. Knowing which one you had helps you find the right information.",
    short: "Head and neck cancer is a general term for cancers that start in the tissues of the head and neck, such as the mouth, the throat and the voice box. They are named after where they start and the type of cell, and about 9 out of 10 start in squamous cells. If you are not sure which type you had, ask your cancer doctor or specialist nurse.",
    sections: [
      {
        heading: "One name, many cancers",
        paragraphs: [
          "Head and neck cancer is a general term for different cancers that start in the tissues of the head and neck. These include the mouth, the throat, the nose and sinuses, the salivary glands and the middle ear. About 12,200 people are diagnosed with head and neck cancer in the UK every year, including cancer of the voice box.",
          "Treatment depends on the type of cancer you have. When looking for information, it is important to know which type you want to know about, so ask your doctor or specialist nurse if you are not sure.",
          "Head and neck cancers are named after where they start and the type of cell. The most common type is squamous cell carcinoma: about 9 out of 10 start in the squamous cells that line the inside of the mouth, nose and throat.",
        ],
      },
      {
        heading: "Mouth cancer",
        paragraphs: [
          "Mouth cancer, also called oral cancer, can affect any part of the mouth, including the gums, tongue, inside the cheeks or lips. It can also start on the floor or roof of the mouth.",
          "The tongue has 2 parts. Cancer in the front part, which you can see, is usually called mouth cancer, and cancer in the base of the tongue, close to the throat, is called oropharyngeal cancer.",
        ],
      },
      {
        heading: "Throat cancers",
        paragraphs: [
          "The throat, or pharynx, has 3 main parts. The nasopharynx is behind the nose, the oropharynx is behind the mouth, and the hypopharynx is behind the voice box.",
          "The oropharynx includes the soft part of the roof of the mouth, the base of the tongue, the tonsils and the side walls of the throat. Oropharyngeal cancers usually develop on the tonsils or the base of the tongue.",
          "Cancer of the hypopharynx may be treated in the same way as laryngeal cancer.",
        ],
      },
      {
        heading: "Voice box cancer",
        paragraphs: [
          "Laryngeal cancer is a type of throat cancer that affects the voice box, or larynx. The voice box is part of the throat at the entrance to the windpipe, and it contains the 2 vocal cords that vibrate to make the sound of your voice.",
          "Laryngeal cancer is more common in men over the age of 40. Around 2,360 people in the UK are diagnosed with it each year.",
        ],
      },
      {
        heading: "Where it can spread, and what it is not",
        paragraphs: [
          "The most common place for head and neck cancer to spread to is the lymph nodes in the neck. Lymph nodes are part of the lymphatic system, which helps protect us from infection and disease.",
          "Other cancers can start in this area but are not head and neck cancers. They include cancers of the thyroid, the gullet, the windpipe and the brain.",
          "Oropharyngeal cancer, like other cancers, is not infectious and cannot be passed on to other people.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor or specialist nurse which type of head and neck cancer you had.",
      "Ask your doctor to explain the stage and grade of the cancer, which help you and your doctors decide on treatment.",
      "Look for information about your own type, as treatment depends on the type of cancer you have.",
      "Call the Macmillan helpline on 0808 808 00 00 or the Cancer Research UK nurse helpline on 0808 800 4040 with questions.",
      "Contact the Mouth Cancer Foundation helpline on 01924 950950 for information and support.",
    ],
    tryThisWeek: [
      "Ask which type you had.",
      "Ask about the stage and grade.",
      "Read about your own type.",
    ],
    ask: "Which type of head and neck cancer did I have, and exactly where did it start?",
    interactive: {
      kind: "flip-cards",
      title: "Where head and neck cancers start",
      intro: "Turn each card to see where each type starts.",
      cards: [
        { id: "mouth", front: "Mouth cancer", when: "Lips, gums, cheeks, front of tongue", back: "Also called oral cancer. One of the most common areas for head and neck cancer to start." },
        { id: "oropharynx", front: "Oropharyngeal cancer", when: "Middle of the throat, behind the mouth", back: "Usually develops on the tonsils or the base of the tongue." },
        { id: "nasopharynx", front: "Nasopharyngeal cancer", when: "Upper throat, behind the nose", back: "Often the first symptom is a painless swelling or lump in the upper neck." },
        { id: "hypopharynx", front: "Hypopharyngeal cancer", when: "Lower throat, behind the voice box", back: "May be treated in the same way as laryngeal cancer." },
        { id: "larynx", front: "Laryngeal cancer", when: "The voice box", back: "Affects the voice box, which contains the vocal cords that make the sound of your voice." },
        { id: "salivary", front: "Salivary gland cancer", when: "The glands that make saliva", back: "Most often starts in the parotid glands, just in front of the ears." },
      ],
    },
    sources: [MAC_HN, CRUK_HN, NHS_MOUTH_WHAT, MAC_ORO, NHS_LAR_WHAT, MAC_LARYNX, NHS_MOUTH_HELP],
    quiz: {
      question: "Where do most head and neck cancers start?",
      options: [{ text: "In squamous cells", right: true }, { text: "In the salivary glands" }, { text: "In the middle ear" }],
      why: "The most common type is squamous cell carcinoma: about 9 out of 10 start in the squamous cells that line the inside of the mouth, nose and throat.",
    },
  },
  {
    id: "hn-follow-up",
    kicker: "After treatment",
    question: "What happens at my follow-up appointments?",
    hook: "Check-ups are frequent at first and spread out over the years. The most important part is your specialist examining your head and neck.",
    short: "After treatment you have regular follow-up appointments for several years, usually every 2 months at first and less often later. Your specialist examines your head and neck, which is the most important part, and you may sometimes have scans or tests. Between appointments, contact your doctor or specialist nurse about new symptoms; you do not have to wait.",
    sections: [
      {
        heading: "Why follow-up matters",
        paragraphs: [
          "You usually have follow-up appointments to check how you are, and to see whether you have any problems or worries. They also give you the chance to raise any concerns about your progress.",
          "Your specialist will regularly examine your head and neck. This is the most important part of your follow-up, and you may sometimes have scans.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "How often you see your specialist depends on how you are feeling and the treatment you had. As a general guide, check-ups are usually every 2 months in the first 2 years, then every 3 to 6 months in the third to fifth year.",
          "People with head and neck cancers are generally followed up for a minimum of 5 years. After that, you may have yearly checks, or follow-up may continue if you and your doctor think it is needed.",
        ],
      },
      {
        heading: "What happens at a check-up",
        paragraphs: [
          "Your doctor or nurse examines you and asks how you are feeling, whether you have had any symptoms or side effects, and if you are worried about anything. After treatment for laryngeal cancer you usually have a nasoendoscopy, where a flexible tube is passed through your nose to look at your throat.",
          "If you had radiotherapy to your neck, your doctor will regularly check your thyroid levels. About 10 to 40 out of 100 people have low thyroid hormone levels after radiotherapy, which can make you feel very tired a lot of the time, and thyroxine supplements can correct them.",
          "You may also have follow-up with a speech and language therapist, a dietitian, a restorative dentist and a dental hygienist. Regular dental check-ups are very important too.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your doctor or specialist nurse if you notice any new symptoms between appointments. You do not have to wait until your next visit.",
          "Your nurse can tell you what to look out for, such as a new ulcer or a lump in your neck, pain, or difficulty swallowing or speaking. Tell your specialist about side effects that are not improving, and new symptoms that do not get better within 2 weeks.",
          "If you have difficulty breathing, and are more short of breath than usual, contact NHS 111. Call 999 or go to A&E immediately if you have severe difficulty breathing and are gasping, choking or not able to get words out.",
        ],
      },
      {
        heading: "When check-ups bring back worry",
        paragraphs: [
          "Many people find follow-up appointments quite worrying, because a hospital appointment can bring back anxiety about the cancer. It can help to tell someone close to you how you are feeling.",
          "Many people find counselling helpful during or after cancer treatment. You can also call the Cancer Research UK information nurses free on 0808 800 4040, Monday to Friday, 9am to 5pm.",
        ],
      },
    ],
    helps: [
      "Keep your cancer team's contact details in your phone or somewhere safe.",
      "Contact your doctor or specialist nurse about new symptoms; you do not have to wait until your next visit.",
      "Ask your nurse what to look out for, such as a new ulcer, a lump in your neck, pain, or difficulty swallowing or speaking.",
      "Keep up regular dental check-ups, and ask your specialist nurse how often to go.",
      "Tell someone close to you if check-ups bring back worry.",
      "Call 999 or go to A&E immediately if you have severe difficulty breathing.",
    ],
    tryThisWeek: [
      "Save your team's contact details.",
      "Ask what to look out for.",
      "Keep up dental check-ups.",
    ],
    ask: "Which symptoms should I report between appointments, and who should I call?",
    interactive: {
      kind: "signs",
      title: "Signs to report between appointments",
      intro: "Tick any you have noticed. Contact your doctor or specialist nurse; you do not have to wait until your next appointment.",
      signs: ["A new ulcer in my mouth", "A lump in my neck", "New pain", "Difficulty swallowing", "Difficulty speaking", "A side effect that is not improving", "A new symptom that has not got better within 2 weeks"],
      after: "Call 999 or go to A&E immediately if you have severe difficulty breathing and are gasping, choking or not able to get words out.",
      copyHeading: "Symptoms to tell my head and neck team",
    },
    sources: [CRUK_FOLLOW_UP, MAC_HN, CRUK_LAR_FOLLOW_UP, MAC_ORO, NHS_LAR_SYMPTOMS, MAC_FINISHING],
    quiz: {
      question: "What is the most important part of your follow-up?",
      options: [{ text: "Your specialist examining your head and neck", right: true }, { text: "A scan at every visit" }, { text: "A blood test every month" }],
      why: "Your specialist will regularly examine your head and neck. This is the most important part of your follow-up, and you may sometimes have scans.",
    },
  },
  {
    id: "hn-hpv",
    kicker: "Understanding",
    question: "My throat cancer was linked to HPV. What does that mean?",
    hook: "HPV is a very common virus that most people clear without knowing. In a small number of people, a high-risk type stays and can lead to cancer many years later.",
    short: "Human papillomavirus, or HPV, is a very common group of viruses that most people get at some point and usually clear without problems. Some high-risk types can stay in the body for a long time and cause changes that lead to cancer, and HPV causes around half of oropharyngeal cancers in the UK. The cancer itself is not infectious, and testing for HPV helps your doctors plan the most effective treatment.",
    sections: [
      {
        heading: "A very common virus",
        paragraphs: [
          "Human papillomavirus, or HPV, is the name of a very common group of viruses. They do not cause any problems in most people, but some types can cause genital warts or cancer.",
          "Around 80 out of 100 people will be infected with HPV at some time in their life. It usually causes no symptoms, and the virus is usually cleared by the body within 2 years.",
          "HPV usually spreads through close skin-to-skin contact, usually during sexual activity, including oral sex. You can have it for many years without it causing problems.",
        ],
      },
      {
        heading: "How it can lead to cancer",
        paragraphs: [
          "There are around 14 high-risk types of HPV that increase the risk of some cancers. If high-risk HPV stays in the body for a long time, it can change the DNA inside cells, and over many years the affected cells can grow out of control.",
          "The link to HPV is much stronger for oropharyngeal cancers than for mouth cancers. HPV causes around 50 out of every 100 oropharyngeal cancers in the UK, and the main type found is HPV 16.",
          "Oropharyngeal cancers linked to HPV often start in the tonsils or the base of the tongue. Most people with HPV in the mouth do not develop oropharyngeal cancer.",
        ],
      },
      {
        heading: "How HPV-positive cancer differs",
        paragraphs: [
          "In recent years there has been an increase in HPV-positive oropharyngeal cancer. Compared with HPV-negative cancer, people with it are generally younger, do not usually smoke and drink little or no alcohol.",
          "If you have oropharyngeal cancer, the cancer cells are tested for HPV. The result helps your doctor plan the most effective treatment for you.",
          "Doctors stage HPV-positive oropharyngeal cancers differently from HPV-negative ones, and do not grade them. Your doctor can tell you the stage of the cancer you had.",
        ],
      },
      {
        heading: "Cancer is not catching",
        paragraphs: [
          "Oropharyngeal cancer is not infectious and cannot be passed on to other people. You cannot catch cancer, although HPV itself can be passed on.",
          "Using a condom or dental dam during sex, including oral sex, makes getting or passing on HPV less likely, but it does not give complete protection. Not smoking also helps, because smoking makes it harder for the immune system to clear HPV.",
        ],
      },
      {
        heading: "The HPV vaccine",
        paragraphs: [
          "The HPV vaccine reduces the chance of getting HPV, which is linked to some cancers, including mouth cancer. All children aged 12 to 13, in school year 8, are offered it.",
          "If they missed it, girls, and boys born after 1 September 2006, can have it free on the NHS until their 25th birthday. Men aged 45 and under who have sex with men can get it at a sexual health or HIV clinic.",
        ],
      },
    ],
    helps: [
      "Ask your doctor to explain your HPV result and the stage of the cancer you had.",
      "Use a condom or dental dam during sex, including oral sex, to make passing on HPV less likely.",
      "If you smoke, try to stop, as smoking makes it harder for the immune system to clear HPV.",
      "Check whether your children have had the HPV vaccine in school year 8.",
      "Contact the school nurse, school vaccination team or GP surgery if a young person missed the vaccine.",
    ],
    tryThisWeek: [
      "Ask about your HPV result.",
      "Try to stop smoking.",
      "Check family HPV vaccinations.",
    ],
    ask: "Was my cancer HPV-positive, and how did that shape my treatment plan?",
    interactive: {
      kind: "scenarios",
      title: "Everyday questions about HPV",
      scenarios: [
        {
          id: "partner",
          situation: "Your partner worries they could catch your cancer.",
          options: [{ text: "Explain the cancer is not infectious", best: true }, { text: "Avoid all close contact" }],
          why: "Oropharyngeal cancer is not infectious and cannot be passed on to other people.",
        },
        {
          id: "vaccine",
          situation: "You wonder whether your 12-year-old should have the HPV vaccine.",
          options: [{ text: "Check it is offered in school year 8", best: true }, { text: "Assume it is only for girls" }],
          why: "All children aged 12 to 13, in school year 8, are offered it.",
        },
        {
          id: "smoking",
          situation: "You still smoke and feel it no longer matters.",
          options: [{ text: "Get support to stop", best: true }, { text: "Carry on as before" }],
          why: "Not smoking also helps, because smoking makes it harder for the immune system to clear HPV.",
        },
      ],
    },
    sources: [NHS_HPV, CRUK_RISKS, CRUK_HPV, MAC_ORO, MAC_HN, NHS_HPV_VACCINE],
    quiz: {
      question: "Can oropharyngeal cancer be passed on to other people?",
      options: [{ text: "No, it is not infectious", right: true }, { text: "Yes, through kissing" }, { text: "Yes, by sharing cups" }],
      why: "Oropharyngeal cancer is not infectious and cannot be passed on to other people.",
    },
  },
  {
    id: "hn-swallowing",
    kicker: "Recovery",
    question: "Why is swallowing so hard, and will it get easier?",
    hook: "Surgery, radiotherapy and swelling can all change how you swallow. A speech and language therapist can teach exercises and techniques that help.",
    short: "Surgery or radiotherapy for head and neck cancer can change how you swallow, and many people find it gets easier after treatment as pain and swelling settle. A speech and language therapist assesses your swallowing, sometimes with an x-ray or camera test, and teaches exercises and techniques. Tell them if you choke or cough when eating, or have repeated chest infections.",
    sections: [
      {
        heading: "Why swallowing changes",
        paragraphs: [
          "Many people with head and neck cancer have difficulty swallowing before, during or after treatment. Surgery for mouth cancer can affect chewing and the mouth stage of swallowing, and surgery to the voice box mainly affects the throat stage.",
          "Radiotherapy may make the muscles and tissues in the throat and gullet weaker and less stretchy, so some foods are harder to swallow or stick in the throat. Swelling from a build-up of fluid, called lymphoedema, can also affect swallowing.",
          "Sometimes swallowing problems develop months or years after radiotherapy, if scar tissue makes the swallowing muscles tight and hard. This is called fibrosis.",
        ],
      },
      {
        heading: "Food going the wrong way",
        paragraphs: [
          "Swallowing problems can cause food or drink to go down the wrong way into the windpipe. This is called aspiration, and it can cause choking and may lead to chest infections.",
          "If you cough when you eat and drink, it may be a sign that food is going into your airway. Your speech and language therapist can teach you exercises to prevent this and help with swallowing.",
        ],
      },
      {
        heading: "Tests and therapy",
        paragraphs: [
          "Your speech and language therapist will assess your swallowing. You may have a videofluoroscopy, a painless x-ray test that takes about 30 minutes, or a test with a small camera passed through the nose that takes about 10 to 20 minutes.",
          "They may suggest how to position your head and neck, swallowing techniques, exercises to strengthen swallowing muscles, and thinner or thicker foods or drinks. Swallowing exercises need to be done regularly to get the most benefit.",
          "If radiotherapy has narrowed the top of the gullet, a doctor can stretch it in a quick procedure to make swallowing easier. You can have this done as an outpatient.",
        ],
      },
      {
        heading: "Keeping the muscles working",
        paragraphs: [
          "Even with a feeding tube, you will be encouraged to keep eating and drinking. This keeps the swallowing muscles working during radiotherapy and while you recover.",
          "Your therapist will start you on food with a texture that is easier to swallow, then gradually increase the amount and variety of textures. It is common to have a setback before eating begins to get better.",
          "Many people find eating and drinking gets easier after treatment finishes, as pain, swelling, feeling sick and tiredness start to get better.",
        ],
      },
      {
        heading: "Support",
        paragraphs: [
          "It may help to bring a partner, family member or friend to your appointments, so they can learn the exercises and food changes too. Apps can guide you through swallowing exercises, but talk to your therapist before using any.",
          "The Swallows head and neck cancer group takes its name from the difficulty a lot of people have with swallowing. Its 24/7 support line for patients and carers is 07504 725 059.",
        ],
      },
    ],
    helps: [
      "Tell your speech and language therapist, specialist nurse or doctor if you have difficulty swallowing.",
      "Report choking or coughing when eating, a wet or gurgly voice, repeated chest infections or weight loss.",
      "Do your swallowing exercises regularly to get the most benefit.",
      "Keep eating and drinking as your team encourages, even with a feeding tube, to keep the swallowing muscles working.",
      "Bring someone to your therapy appointments so they can learn the techniques too.",
      "Call The Swallows 24/7 support line on 07504 725 059 to talk to someone who has been where you are.",
    ],
    tryThisWeek: [
      "Do your swallowing exercises regularly.",
      "Report coughing when eating.",
      "Bring someone to therapy.",
    ],
    ask: "Could I have a swallowing assessment, and which exercises should I be doing?",
    interactive: {
      kind: "signs",
      title: "Tell your speech and language therapist",
      intro: "Tick any you have noticed. Tell your speech and language therapist, specialist nurse or doctor.",
      signs: ["Drooling or dribbling when eating", "Food coming down my nose", "Food trapped in one side of my mouth", "Biting my tongue or cheeks", "Feeling I have too much saliva", "Food sticking in my throat", "Choking or coughing when eating or drinking", "A wet or gurgly-sounding voice", "Repeated chest infections", "Weight loss"],
      after: "Swallowing problems can let food or drink go into the windpipe, which can cause choking and may lead to chest infections.",
      copyHeading: "Swallowing problems to tell my team",
    },
    sources: [SWALLOWS_POST, MAC_EATING, MAC_SURGERY, SWALLOWS_HOME, SWALLOWS_247],
    quiz: {
      question: "What is aspiration?",
      options: [{ text: "Food or drink going down the wrong way into the windpipe", right: true }, { text: "A type of feeding tube" }, { text: "A swallowing exercise" }],
      why: "Swallowing problems can cause food or drink to go down the wrong way into the windpipe. This is called aspiration, and it can cause choking and may lead to chest infections.",
    },
  },
  {
    id: "hn-dry-mouth",
    kicker: "Recovery",
    question: "How do I live with a dry mouth and protect my teeth?",
    hook: "Radiotherapy can leave you with less saliva, and saliva protects your teeth. Sips of water, the right toothpaste and regular dental checks all help.",
    short: "Radiotherapy or chemoradiation to the head and neck can affect the salivary glands, so your mouth may become dry or your saliva thick and sticky. The glands may gradually recover, but some people have a dry mouth permanently. Because a dry mouth makes tooth decay much more likely, a daily mouth care routine, high-fluoride toothpaste and dental check-ups every 3 to 6 months are important.",
    sections: [
      {
        heading: "Why your mouth is dry",
        paragraphs: [
          "Radiotherapy or chemoradiation to the head or neck can affect your salivary glands. You may not make as much saliva as before, so your mouth may become dry.",
          "Your salivary glands may gradually recover after treatment, but your saliva may be thicker and sticky. A dry mouth can last for several months, and some people find the dryness is permanent.",
          "A dry mouth can be uncomfortable and affect eating, speaking and sleeping. It also makes you much more likely to get tooth decay, and mouth infections such as thrush.",
        ],
      },
      {
        heading: "Easing the dryness",
        paragraphs: [
          "Always carry a bottle of water and take frequent sips, or use a water spray. Sucking ice cubes or sugar-free ice lollies can help, and a lip salve protects your lips.",
          "A warm salt water rinse can be soothing. Avoid caffeinated or citrus drinks, alcohol, especially spirits, and smoking, which dries and irritates the mouth.",
          "Artificial saliva comes as gels, sprays, mouthwashes, pastilles or tablets, and your doctor or dentist can prescribe it. If you have your own teeth, use one that is pH-neutral, as some products are acidic, and for longer relief at night the gel may ease dryness for up to 5 hours.",
        ],
      },
      {
        heading: "Eating with a dry mouth",
        paragraphs: [
          "Take sips of water before you take a bite of food. Soft, moist foods with sauces and gravies, such as casseroles and soups, are easier to eat.",
          "Avoid hard, crunchy, spicy or salty foods and citrus fruits. Adding oil, yoghurt, mayonnaise or butter makes dry, starchy foods such as bread and crackers easier to eat.",
        ],
      },
      {
        heading: "Protecting your teeth",
        paragraphs: [
          "You need regular check-ups with a dentist or dental hygienist every 3 to 6 months. You can agree a mouth care routine with them, and they will prescribe a high-fluoride toothpaste.",
          "Brush for 2 to 3 minutes every morning and night with a small, soft brush, then spit out but do not rinse, so the fluoride keeps protecting your teeth. Clean between your teeth at least once a day.",
          "Limit sugary and acidic foods and drinks to mealtimes, no more than 4 times a day. Still water is the safest drink for your teeth.",
        ],
      },
      {
        heading: "Watching for changes",
        paragraphs: [
          "Check your mouth every day for ulcers, red, white or dark patches or signs of decay. If you notice a change in your mouth or teeth, see your dentist straight away.",
          "Rarely, radiotherapy affects the blood supply to the jawbone. Most people who have radiotherapy will never develop this, and not smoking, regular dental check-ups and well-fitting dentures help reduce the risk.",
          "If you need a tooth taken out after radiotherapy, it is important to see a specialist oral and maxillofacial surgeon or dental oral surgeon to have it done in hospital. They plan the treatment to reduce the risk of problems with the jawbone.",
        ],
      },
    ],
    helps: [
      "Carry a bottle of water and take frequent sips through the day.",
      "Ask your doctor or dentist about artificial saliva, choosing a pH-neutral one if you have your own teeth.",
      "See a dentist or dental hygienist for a check-up every 3 to 6 months.",
      "Brush morning and night with high-fluoride toothpaste, then spit out but do not rinse.",
      "Keep sugary and acidic foods and drinks to mealtimes.",
      "Ask your doctor or nurse if any medicines you take cause a dry mouth.",
    ],
    tryThisWeek: [
      "Carry water and sip often.",
      "Spit, but don't rinse, after brushing.",
      "Book your next dental check-up.",
    ],
    ask: "Can I have artificial saliva or high-fluoride toothpaste, and how often should I see the dentist?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments with a dry mouth",
      scenarios: [
        {
          id: "afternoon",
          situation: "Your mouth feels dry and sticky in the middle of the afternoon.",
          options: [{ text: "Take a few sips of water", best: true }, { text: "Have a fizzy drink" }],
          why: "Always carry a bottle of water and take frequent sips, or use a water spray.",
        },
        {
          id: "brushing",
          situation: "You have just brushed your teeth with your fluoride toothpaste.",
          options: [{ text: "Spit out, but do not rinse", best: true }, { text: "Rinse well with water" }],
          why: "Brush for 2 to 3 minutes every morning and night with a small, soft brush, then spit out but do not rinse, so the fluoride keeps protecting your teeth.",
        },
        {
          id: "snack",
          situation: "You fancy something sweet between meals.",
          options: [{ text: "Save sweet things for mealtimes", best: true }, { text: "Snack on sweets through the day" }],
          why: "Limit sugary and acidic foods and drinks to mealtimes, no more than 4 times a day.",
        },
        {
          id: "extraction",
          situation: "A tooth needs taking out after your radiotherapy.",
          options: [{ text: "See a specialist surgeon in hospital", best: true }, { text: "Have it done at any dentist without mentioning it" }],
          why: "If you need a tooth taken out after radiotherapy, it is important to see a specialist oral and maxillofacial surgeon or dental oral surgeon to have it done in hospital.",
        },
      ],
    },
    sources: [MAC_DRY_MOUTH, CRUK_EATING, MAC_MOUTH_CARE, NHS_DRY_MOUTH, MAC_LATE, MAC_JAW],
    quiz: {
      question: "How often should you see a dentist or dental hygienist after treatment?",
      options: [{ text: "Every 3 to 6 months", right: true }, { text: "Only if a tooth hurts" }, { text: "Every 2 years" }],
      why: "You need regular check-ups with a dentist or dental hygienist every 3 to 6 months.",
    },
  },
  {
    id: "hn-speech",
    kicker: "Recovery",
    question: "Will my speech and voice come back?",
    hook: "For some people the changes are small and settle as the area heals; for others they last. Speech and language therapy and simple tactics help either way.",
    short: "Surgery or radiotherapy to the head and neck can change how your speech or voice sounds. For some people it returns to normal, or near normal, as the area heals; for others the changes are permanent. A speech and language therapist assesses you, gives you exercises and helps you find other ways to communicate, including after a laryngectomy.",
    sections: [
      {
        heading: "How speech and voice can change",
        paragraphs: [
          "We use our lips, teeth, tongue, mouth, nose and throat when we speak. After surgery or radiotherapy to the head and neck, your speech or voice may sound different, or you may find some sounds or words difficult.",
          "Speech changes are more common after tongue cancer, soft palate or lip cancer, having lots of teeth removed, or removing all or part of the voice box. Your voice might be huskier, quieter, more breathy or strained, and it may tire more easily.",
          "Thick, sticky saliva or a dry mouth can also make speaking difficult, and make longer conversations uncomfortable.",
        ],
      },
      {
        heading: "Will it get better?",
        paragraphs: [
          "For some people, these changes are only a minor problem, and speech or voice returns to normal, or near normal, as the area heals. Slurring can be temporary and get better once swelling from surgery has gone down.",
          "For others, the changes are permanent. If this happens, you will have speech and language therapy for several months after treatment.",
        ],
      },
      {
        heading: "Speech and language therapy",
        paragraphs: [
          "Your speech and language therapist assesses changes in your speech and voice. They can give you exercises to help you make your voice heard without straining, and to increase how long you can easily talk for.",
          "The exercises may feel like hard work at times. It can help to make them part of your daily routine, with a chart of the exercises and the times you do them.",
          "Keep your throat healthy by not smoking and by drinking plenty of water. If changes to your teeth or the shape of your mouth affect your speech, a restorative dentist can help.",
        ],
      },
      {
        heading: "After a laryngectomy",
        paragraphs: [
          "If your whole voice box was removed, you lose your voice, which is likely to be a shock at first. Your healthcare team will support you and teach you how to speak again.",
          "A voice prosthesis is the most common way to restore speech. It is a valve that lets you make sounds by pushing air from your lungs through it and up into your mouth, covering the stoma with a finger as you breathe out.",
          "Other ways to speak include oesophageal speech and an electrolarynx, a battery-operated machine that produces sound for you to create a voice.",
        ],
      },
      {
        heading: "Everyday conversations",
        paragraphs: [
          "Choose a quiet, well-lit place, face the person and tell them you have difficulty with your speech. Speak slowly and carefully, use short sentences and take a rest between them.",
          "Ask family and friends to give you time and let you finish, and to ask questions with a yes or no answer if they need to check. On some phones you can turn up the volume so your voice can be heard without straining.",
          "A pen and paper, a tablet or an app that turns typed text into speech can help when talking is hard. It is normal to feel frustrated if people cannot understand you, and sharing how you feel with people in a similar situation may help.",
        ],
      },
    ],
    helps: [
      "Do the exercises your speech and language therapist gives you, and make them part of your daily routine.",
      "Drink plenty of water and do not smoke, to keep your throat healthy.",
      "Choose a quiet, well-lit place and face the person you are talking to.",
      "Carry a pen and paper or a tablet so you can write things down.",
      "Talk to your therapist before using any speech apps.",
      "Ask your doctor, therapist or specialist nurse about a local support group.",
    ],
    tryThisWeek: [
      "Do your speech exercises daily.",
      "Drink plenty of water.",
      "Carry a notepad or tablet.",
    ],
    ask: "Can I see a speech and language therapist, and which exercises or aids would help my voice?",
    interactive: {
      kind: "scenarios",
      title: "Moments when talking is hard",
      scenarios: [
        {
          id: "shop",
          situation: "A shop assistant cannot understand what you are saying.",
          options: [{ text: "Tell them you have difficulty with your speech, and speak slowly", best: true }, { text: "Give up and leave" }],
          why: "Choose a quiet, well-lit place, face the person and tell them you have difficulty with your speech. Speak slowly and carefully, use short sentences and take a rest between them.",
        },
        {
          id: "family",
          situation: "Your family keeps finishing your sentences for you.",
          options: [{ text: "Ask them to give you time and let you finish", best: true }, { text: "Stop joining in" }],
          why: "Ask family and friends to give you time and let you finish, and to ask questions with a yes or no answer if they need to check.",
        },
        {
          id: "phone",
          situation: "Your voice tires during phone calls.",
          options: [{ text: "Turn up the phone volume so you do not strain", best: true }, { text: "Shout to be heard" }],
          why: "On some phones you can turn up the volume so your voice can be heard without straining.",
        },
        {
          id: "app",
          situation: "You find a speech app online and want to try it.",
          options: [{ text: "Check with your speech and language therapist first", best: true }, { text: "Download it and start straight away" }],
          why: "Talk to your therapist before using any speech apps.",
        },
      ],
    },
    sources: [MAC_SPEECH, CRUK_SPEECH, CRUK_SPEAK_LARYNGECTOMY, CRUK_STOMA],
    quiz: {
      question: "What is the most common way to restore speech after a laryngectomy?",
      options: [{ text: "A voice prosthesis", right: true }, { text: "Sign language only" }, { text: "A hearing aid" }],
      why: "A voice prosthesis is the most common way to restore speech.",
    },
  },
  {
    id: "hn-eating",
    kicker: "Eating well",
    question: "How do I eat enough when eating is hard?",
    hook: "Losing weight is common during head and neck cancer treatment. A dietitian, supplement drinks or a feeding tube for a while can keep you nourished while you heal.",
    short: "Treatment can make eating difficult because of a sore throat, swallowing problems, taste changes and a dry mouth, and many people lose weight. A dietitian can help you get more calories and nutrients, and some people need a feeding tube for a while. Eating out and eating with others can take some planning, and there are ways to make it easier.",
    sections: [
      {
        heading: "Why eating gets hard",
        paragraphs: [
          "Radiotherapy to the head or neck can make your throat very sore, and eating and drinking will be difficult or painful within the first few weeks of treatment. Surgery involving the jaw, mouth, throat or tongue makes eating, drinking and swallowing difficult while you recover.",
          "You may lose your appetite and lose weight, for example if you are in pain or find it difficult to swallow.",
          "Radiotherapy can affect your sense of taste, and a lack of saliva affects your taste buds too. Taste usually improves gradually after treatment ends, but sometimes it can take a year or more.",
        ],
      },
      {
        heading: "Help from a dietitian",
        paragraphs: [
          "A dietitian can advise you on how to increase the nutrients and calories in your diet. They may give you high-calorie supplement drinks if you have lost weight.",
          "Supplement drinks are high in sugar, so they are usually only used for a short time, to avoid long-term damage to teeth and jaws. You may lose weight even if you take them, so tell your healthcare team if this happens.",
          "Eating small meals often, choosing foods high in protein and having nourishing snacks can help you stay nourished. A short walk before meals may help stimulate your appetite.",
        ],
      },
      {
        heading: "Feeding tubes",
        paragraphs: [
          "Some people have a feeding tube before, during or after treatment. It may go through the nose into the stomach for a short while, or directly into the stomach for a longer time, which is called a PEG or RIG tube.",
          "The tube is usually temporary, from a few weeks to several months or more, and a small number of people have one permanently. It can normally be taken out when you have not needed it for a few weeks and can get enough calories by eating and drinking.",
          "Having a feeding tube is a significant change, and it is common to feel upset about it. Talking to your family, a counsellor, dietitian or nurse may help you adjust.",
        ],
      },
      {
        heading: "When chewing is difficult",
        paragraphs: [
          "Surgery inside your mouth or jaw can make it numb or painful, so you may need to eat a soft diet for a few weeks while it heals. After some time, you can usually chew normally again.",
          "Stiff jaw muscles, called trismus, can make it hard to open your mouth. One easy check is to try to fit 3 fingers upright between your lower and upper front teeth; if you can only manage 1 or 2, you may have trismus, so tell your doctor even if it is mild.",
        ],
      },
      {
        heading: "Eating with other people",
        paragraphs: [
          "If you feel self-conscious, it may help to eat at home with people you know first, then try something simple out, such as going for ice cream. If you take a long time to eat, smaller portions more often mean you are less likely to get tired when eating.",
          "Look at a restaurant menu before you go and contact them to ask about changes, such as extra gravy or blended food. The Swallows Restaurant Card, free for patients, helps people with swallowing difficulties eat out at approved places.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse to refer you to a dietitian.",
      "Tell your healthcare team if you keep losing weight, even with supplement drinks.",
      "Eat small meals often, and choose foods high in protein.",
      "Tell your doctor about jaw stiffness or pain, even if it is mild.",
      "Tell your doctor, dietitian or specialist nurse about taste changes.",
      "Check a restaurant menu before you go, and contact them to ask for changes.",
    ],
    tryThisWeek: [
      "Ask to see a dietitian.",
      "Eat small meals often.",
      "Report jaw stiffness, even if mild.",
    ],
    ask: "Could I see a dietitian, and do I need supplement drinks or a feeding tube for now?",
    interactive: {
      kind: "timeline",
      title: "Getting back to eating",
      steps: [
        { id: "during", when: "During radiotherapy", title: "Sore and difficult", points: ["Eating and drinking can become difficult or painful in the first few weeks.", "Liquid nutrition through a tube helps reduce weight loss."] },
        { id: "healing", when: "As you heal", title: "Easier textures first", points: ["Your therapist starts you on food that is easier to swallow.", "The amount and variety of textures gradually increase."] },
        { id: "setbacks", when: "Along the way", title: "Setbacks happen", points: ["It is common to have a setback before eating gets better.", "You may have days when you cannot eat anything."] },
        { id: "tube-out", when: "When you are ready", title: "The tube comes out", points: ["When you have not needed it for a few weeks.", "And you can get enough calories by eating and drinking."] },
        { id: "taste", when: "Up to a year or more", title: "Taste returns", points: ["Taste usually improves gradually after treatment ends.", "Sometimes it can take a year or more."] },
      ],
    },
    sources: [CRUK_EATING, MAC_EATING, SWALLOWS_POST, MAC_PREP, MAC_JAW, SWALLOWS_RESTAURANT],
    quiz: {
      question: "When can a feeding tube normally be taken out?",
      options: [{ text: "When you have not needed it for a few weeks and can eat enough", right: true }, { text: "As soon as radiotherapy finishes" }, { text: "Only after a year" }],
      why: "It can normally be taken out when you have not needed it for a few weeks and can get enough calories by eating and drinking.",
    },
  },
  {
    id: "hn-appearance",
    kicker: "Living well",
    question: "How do I cope with changes to how I look?",
    hook: "Scars, swelling, a stoma or a changed face can be hard to accept. Time, support and practical help such as skin camouflage can make it easier.",
    short: "Treatment for head and neck cancer can change how you look, and this can affect how you feel about yourself. Swelling usually settles over a few months and scars often fade, but some changes last. Your team, skin camouflage services, organisations such as Changing Faces and talking therapies can all help you adjust.",
    sections: [
      {
        heading: "What can change",
        paragraphs: [
          "Surgery involving your jaw, tongue, mouth, lips and throat might change the way you look, depending on the type of surgery. Your surgeon and specialist nurse will explain what will happen before surgery and how you will look afterwards.",
          "Your face and neck may look very swollen just after the operation, but this slowly gets better over a few months. Scars are usually red or dark at first but fade over time, and surgeons try to place them in skin creases on the face or a fold in the neck.",
          "If you had radiotherapy, the skin in that area might be darker than before. Some people have a breathing stoma, and it is common to feel self-conscious about it at first.",
        ],
      },
      {
        heading: "Your feelings",
        paragraphs: [
          "How you look is an important part of how you feel about and value yourself. It can be very hard to accept sudden changes, and some people have intense feelings, including grief, fear and anger.",
          "If your appearance has changed, you will need time to get used to it and adapt. Your specialist team at the hospital can give you support and advice to help you adjust.",
          "If body image concerns are hard to cope with, or you are avoiding social situations, talk to your doctor or nurse. They can usually refer you to a counsellor or psychologist, and cognitive behavioural therapy can help with body image concerns.",
        ],
      },
      {
        heading: "First looks and first outings",
        paragraphs: [
          "It is completely up to you when you look at yourself in the mirror. Having a nurse with you the first time can help, and after that it is a good idea to keep regularly looking at your face.",
          "Going out may feel scary at first. It can help to go out the first time with someone you are very comfortable with, and to be prepared for mixed reactions. Some people may look at you for longer, usually because they are curious, not because they want to upset you.",
          "Children can be very honest and might ask direct questions, so it can help to be prepared. You do not have to explain to people if you do not want to.",
        ],
      },
      {
        heading: "Practical help",
        paragraphs: [
          "Camouflage make-up can cover scars or skin grafts that are a different colour, and there are colours for all skin tones. Some head and neck nurses and organisations such as Changing Faces offer skin camouflage services.",
          "You can buy some camouflage make-up at a pharmacy, and your GP can tell you what might be available on prescription.",
          "Before an operation that is likely to change your appearance, it may help to talk to someone who has had a similar operation. Your surgeon or specialist nurse may be able to arrange this.",
        ],
      },
      {
        heading: "Support",
        paragraphs: [
          "Changing Faces offers advice to anyone affected by a change in their appearance, and Let's Face It supports people with facial disfigurements. The Mouth Cancer Foundation gives information and support to people affected by head and neck cancers.",
          "Talking to people close to you can help, and they may feel privileged that you have chosen to confide in them. You can also talk to the Cancer Research UK information nurses free on 0808 800 4040, Monday to Friday, 9am to 5pm.",
        ],
      },
    ],
    helps: [
      "Ask your surgeon and specialist nurse as many questions as you need about how you will look.",
      "Have a nurse with you the first time you look in the mirror, if you would like.",
      "Go out for the first time with someone you are very comfortable with.",
      "Ask your doctor or nurse whether there is a skin camouflage service at your hospital.",
      "Talk to your doctor or nurse if you are avoiding social situations; they can refer you for talking therapies.",
      "Contact Changing Faces for advice on changes to your appearance.",
    ],
    tryThisWeek: [
      "Ask about skin camouflage.",
      "Plan an outing with someone close.",
      "Contact Changing Faces.",
    ],
    ask: "Is there a skin camouflage service here, and could I be referred to a psychologist for body image support?",
    interactive: {
      kind: "scenarios",
      title: "Moments that can feel hard",
      scenarios: [
        {
          id: "stare",
          situation: "Someone on the bus keeps looking at your scar.",
          options: [{ text: "Remember they are probably curious, and you need not explain", best: true }, { text: "Stop going out" }],
          why: "Some people may look at you for longer, usually because they are curious, not because they want to upset you.",
        },
        {
          id: "child",
          situation: "A child asks you straight out what happened to your face.",
          options: [{ text: "Have a simple answer ready that you are comfortable with", best: true }, { text: "Avoid children altogether" }],
          why: "Children can be very honest and might ask direct questions, so it can help to be prepared.",
        },
        {
          id: "avoiding",
          situation: "You have been avoiding friends since the operation.",
          options: [{ text: "Talk to your doctor or nurse about support", best: true }, { text: "Wait for the feeling to pass on its own" }],
          why: "If body image concerns are hard to cope with, or you are avoiding social situations, talk to your doctor or nurse.",
        },
        {
          id: "graft",
          situation: "You would like to cover a skin graft for a family event.",
          options: [{ text: "Ask about camouflage make-up", best: true }, { text: "Skip the event" }],
          why: "Camouflage make-up can cover scars or skin grafts that are a different colour, and there are colours for all skin tones.",
        },
      ],
    },
    sources: [CRUK_APPEARANCE, MAC_SURGERY, MAC_LATE, MAC_BODY],
    quiz: {
      question: "What usually happens to swelling of the face and neck after surgery?",
      options: [{ text: "It slowly gets better over a few months", right: true }, { text: "It stays the same for good" }, { text: "It gets worse each year" }],
      why: "Your face and neck may look very swollen just after the operation, but this slowly gets better over a few months.",
    },
  },
  {
    id: "hn-smoking-alcohol",
    kicker: "Living well",
    question: "Is it still worth stopping smoking and cutting down on alcohol?",
    hook: "Yes. Stopping after treatment lowers the risk of the cancer coming back and of a new head and neck cancer, and it is kinder to your mouth.",
    short: "Tobacco and alcohol are the main risk factors for head and neck cancer, especially together. Giving up smoking after treatment reduces the risk of the cancer coming back and of another head and neck or smoking-related cancer, and it helps your recovery. Cutting down or stopping alcohol lowers the risk of another head and neck cancer, and free support is available for both.",
    sections: [
      {
        heading: "Why it still matters",
        paragraphs: [
          "The main risk factors for head and neck cancer are tobacco and alcohol, especially when combined. Research suggests around 17 out of 100 mouth cancers in the UK are caused by smoking, and alcohol causes around 35 out of 100. Chewing tobacco or betel quid is linked with mouth cancer too, and it is not a safe alternative to cigarettes.",
          "It is still worth giving up smoking after mouth or oropharyngeal cancer, as it reduces the risk of the cancer coming back. It also reduces the risk of another head and neck cancer or a different smoking-related cancer, and helps your recovery by reducing the risk of some side effects.",
          "Drinking alcohol greatly increases the risk of another head and neck cancer. You can reduce this risk if you stop or reduce the amount you drink.",
        ],
      },
      {
        heading: "Your mouth and your jaw",
        paragraphs: [
          "Smoking dries and irritates the mouth and increases the risk of dental problems. It also affects the blood supply to the jawbone, which increases the risk of jawbone problems after radiotherapy.",
          "Smoking can make certain late effects of treatment worse. Alcohol, especially spirits, is very irritating to a dry mouth.",
        ],
      },
      {
        heading: "Help to stop smoking",
        paragraphs: [
          "Giving up smoking can be very difficult, especially if you have smoked for a long time. Your doctor or specialist nurse can give you contact details of services that can help you stop.",
          "You are 4 times more likely to quit with specialist support from a stop smoking service, using products such as nicotine replacement therapy or medicines to manage cravings. Your GP can provide nicotine replacement therapy on prescription.",
          "The free NHS Quit Smoking app can track your progress and give daily support. If you reach 28 days smoke-free, you are 5 times more likely to quit for good.",
        ],
      },
      {
        heading: "Cutting down on alcohol",
        paragraphs: [
          "NHS guidelines suggest not regularly drinking more than 14 units of alcohol a week, spreading them over 3 or more days, and having several alcohol-free days every week.",
          "A unit is half a pint of ordinary-strength beer, lager or cider, a small glass of wine, or a single measure of spirits.",
          "If you want support to drink less, your nurse or doctor can arrange it. A GP is a good place to start, and it helps to be accurate and honest about how much you drink.",
        ],
      },
      {
        heading: "If you drink a lot",
        paragraphs: [
          "If you have become physically dependent on alcohol and need to stop completely, stopping overnight could be harmful. Get advice about this, and about any medicine you may need to stop safely.",
          "Call 999 if you have severe symptoms of alcohol withdrawal, including hallucinations, severe tremors, or seizures or fits. Drinkline, the national alcohol helpline, is free and confidential on 0300 123 1110.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or specialist nurse for details of stop smoking services.",
      "Use specialist support with nicotine replacement therapy or medicines to manage cravings.",
      "Try the free NHS Quit Smoking app to track your progress.",
      "Keep to no more than 14 units a week, spread over 3 or more days, with several alcohol-free days.",
      "Ask your nurse, doctor or GP for support to drink less.",
      "Call Drinkline free on 0300 123 1110, weekdays 9am to 8pm and weekends 11am to 4pm.",
    ],
    tryThisWeek: [
      "Ask about stop smoking services.",
      "Try the NHS Quit Smoking app.",
      "Plan some alcohol-free days.",
    ],
    ask: "Can you refer me to a stop smoking service, and is there support near me to cut down on alcohol?",
    interactive: {
      kind: "risk-check",
      title: "What could you change?",
      intro: "Tick any that apply. Support can help with each one you can change.",
      items: [
        { id: "smoke", label: "I still smoke", note: "Giving up reduces the risk of the cancer coming back and of another head and neck cancer.", changeable: true },
        { id: "chew", label: "I chew tobacco or betel quid", note: "Smokeless tobacco is linked with mouth cancer. It is not a safe alternative to cigarettes.", changeable: true },
        { id: "units", label: "I drink more than 14 units a week", note: "Spread drinks over 3 or more days, with several alcohol-free days. Your nurse or GP can help.", changeable: true },
        { id: "both", label: "I smoke and drink", note: "Tobacco and alcohol are the main risk factors, especially when combined.", changeable: true },
        { id: "dry", label: "My mouth is dry", note: "Smoking dries and irritates the mouth, and alcohol, especially spirits, irritates it too.", changeable: true },
        { id: "man", label: "I am a man", note: "Head and neck cancer is much more common in men than in women.", changeable: false },
      ],
    },
    sources: [MAC_HN, CRUK_FOLLOW_UP, CRUK_LAR_FOLLOW_UP, MAC_LARYNX, MAC_DRY_MOUTH, MAC_JAW, MAC_LIFESTYLE, MAC_PREP, NHS_QUIT, NHS_ALCOHOL_SUPPORT, CRUK_RISKS],
    quiz: {
      question: "Is it still worth giving up smoking after treatment?",
      options: [{ text: "Yes, it reduces the risk of the cancer coming back", right: true }, { text: "No, the damage is already done" }, { text: "Only if you also stop drinking" }],
      why: "It is still worth giving up smoking after mouth or oropharyngeal cancer, as it reduces the risk of the cancer coming back.",
    },
  },
  {
    id: "hn-work",
    kicker: "Work",
    question: "How do I manage work and money after head and neck cancer?",
    hook: "The law treats cancer as a disability, so you can ask for changes at work, and there is help with benefits, prescriptions and travel.",
    short: "If you have or have had cancer, the law considers it a disability, so your employer should consider reasonable adjustments such as a phased return or extra breaks. Changes to speech, eating or energy can be planned around, with help from apps, Access to Work and your team. Macmillan's money advisers can tell you what benefits and financial help you might be entitled to.",
    sections: [
      {
        heading: "Your rights",
        paragraphs: [
          "If you have cancer, the law considers this a disability. Under the Equality Act 2010 you meet the definition from the day you are diagnosed, and in Northern Ireland the Disability Discrimination Act 1995 protects you.",
          "This protection does not end when treatment finishes. If you have been diagnosed with cancer in the past, you keep it, even if you move to another employer.",
        ],
      },
      {
        heading: "Going back",
        paragraphs: [
          "For many people, returning to work when they feel ready is a big step in their recovery. It can help you get back into a routine and feel a sense of normality.",
          "Some people have ongoing side effects that affect their work, such as tiredness for months or sometimes years, soreness or limited movement, or eating problems. Extreme tiredness is one of the most common side effects of head and neck cancer treatment, and it is not unusual for it to last for months.",
          "You and your manager can agree a return-to-work plan that is as flexible as possible, and meet regularly in case anything needs to change. Your doctor can give you a fit note that explains how your health affects what you can do at work.",
        ],
      },
      {
        heading: "Adjustments that may help",
        paragraphs: [
          "Reasonable adjustments could include a phased return, part-time or flexible hours, time off for medical appointments or rehabilitation, or extra breaks to help you cope with tiredness.",
          "If you have difficulty writing, a voice recognition app may help. If speaking is hard, apps that turn typed text into speech, or turning up the volume on a phone, can help you communicate.",
          "You do not have to tell your employer you have cancer. But they do not have to make a reasonable adjustment unless they know, or should reasonably know, that you have cancer.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can give you a grant towards practical support, such as specialist equipment and assistive software, or the cost of travelling to work if you cannot use public transport. It will not affect other benefits, and you will not have to pay it back.",
          "It will not pay for reasonable adjustments, which are the changes your employer must legally make.",
        ],
      },
      {
        heading: "Money",
        paragraphs: [
          "If cancer is affecting your income, you may be able to claim benefits such as Universal Credit, Personal Independence Payment, Adult Disability Payment in Scotland, or Attendance Allowance. You might be entitled to benefits even if you have never claimed before.",
          "In England, people being treated for cancer can apply for a medical exemption certificate for free prescriptions, and prescriptions are free in Scotland, Wales and Northern Ireland. You may also get help with the costs of dental treatment and of travel to medical appointments.",
          "Macmillan's money advisers can explain what you might be entitled to, free on 0808 808 00 00, Monday to Friday, 8am to 6pm. Many hospitals have a social worker who can check you get the benefits you are entitled to.",
        ],
      },
    ],
    helps: [
      "Agree a flexible return-to-work plan with your manager, and meet regularly to review it.",
      "Ask your doctor for a fit note that explains how your health affects your work.",
      "Ask about a phased return, flexible hours, time off for appointments or extra breaks.",
      "Ask about voice recognition or text-to-speech apps if writing or speaking is hard.",
      "Check whether Access to Work could help with equipment or travel costs.",
      "Call a Macmillan money adviser free on 0808 808 00 00 to check what you are entitled to.",
    ],
    tryThisWeek: [
      "Ask about a phased return.",
      "Check Access to Work.",
      "Call a Macmillan money adviser.",
    ],
    ask: "Can you give me a fit note that explains how my speech, eating or tiredness affects my work?",
    interactive: {
      kind: "scenarios",
      title: "Moments at work",
      scenarios: [
        {
          id: "voice",
          situation: "Long phone calls at work tire your voice.",
          options: [{ text: "Ask about adjustments, such as a text-to-speech app", best: true }, { text: "Say nothing and struggle on" }],
          why: "If speaking is hard, apps that turn typed text into speech, or turning up the volume on a phone, can help you communicate.",
        },
        {
          id: "appointments",
          situation: "You have regular speech therapy appointments in work hours.",
          options: [{ text: "Ask for time off for appointments as an adjustment", best: true }, { text: "Miss the appointments" }],
          why: "Reasonable adjustments could include a phased return, part-time or flexible hours, time off for medical appointments or rehabilitation, or extra breaks to help you cope with tiredness.",
        },
        {
          id: "travel",
          situation: "You cannot manage public transport to work yet.",
          options: [{ text: "Ask Access to Work about travel costs", best: true }, { text: "Give up the job" }],
          why: "Access to Work can give you a grant towards practical support, such as specialist equipment and assistive software, or the cost of travelling to work if you cannot use public transport.",
        },
        {
          id: "money",
          situation: "Money is tight since you stopped working.",
          options: [{ text: "Call a Macmillan money adviser", best: true }, { text: "Assume you cannot claim anything" }],
          why: "Macmillan's money advisers can explain what you might be entitled to, free on 0808 808 00 00, Monday to Friday, 8am to 6pm.",
        },
      ],
    },
    sources: [MAC_RIGHTS, GOV_DISABILITY, MAC_RETURNING, MAC_LATE, MAC_ADJUST, MAC_SPEECH, GOV_ATW, MAC_MONEY_FAQ, CRUK_COPING],
    quiz: {
      question: "Does your legal protection at work end when treatment finishes?",
      options: [{ text: "No, it continues even if you no longer have cancer", right: true }, { text: "Yes, on your last day of treatment" }, { text: "Yes, after 12 months" }],
      why: "This protection does not end when treatment finishes. If you have been diagnosed with cancer in the past, you keep it, even if you move to another employer.",
    },
  },
  {
    id: "hn-mood",
    kicker: "Mood",
    question: "Why do I feel low now that treatment has finished?",
    hook: "The end of treatment can bring relief and, at the same time, worry, sadness and changes that take months to adjust to. Help is there, including right now if you need it.",
    short: "It may take several months to recover from head and neck cancer treatment, and it can be hard if treatment has changed your appearance, how you eat or drink, or your voice. Sadness and worry about the cancer coming back are common and often ease with time, but if low feelings go on for more than 2 weeks, talk to your doctor or nurse. If you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "Why the low months happen",
        paragraphs: [
          "When your treatment ends, you may feel relieved, but you may still have side effects and other emotions to cope with. You will need time to find out what is now normal for you.",
          "It may take several months to recover from treatment. It can be hard if treatment has changed your appearance, how you eat or drink, or your voice, and dealing with late effects can take a lot of effort.",
        ],
      },
      {
        heading: "Worry about it coming back",
        paragraphs: [
          "Worrying about the cancer coming back is common after treatment, and many people struggle with feelings of uncertainty. These feelings often get better with time.",
          "Going to the hospital for a test, or hearing about cancer in the news, can trigger the worry. Focusing on what you can control, such as your well-being, talking about your feelings and doing activities you enjoy, may help.",
        ],
      },
      {
        heading: "Sadness or depression?",
        paragraphs: [
          "Feelings of sadness and loss often improve as you recover, but for some people low mood continues or gets worse, and may become depression.",
          "Signs can include feeling low most of the time, losing interest in things you used to enjoy, changes in sleep, eating or concentration, and feeling helpless. If these go on for more than 2 weeks, talk to your doctor or nurse.",
          "Tiredness can be linked to low mood, and it can also come from an underactive thyroid after radiotherapy. Blood tests can check for this, and it can be treated with medicines.",
        ],
      },
      {
        heading: "Talking and treatment",
        paragraphs: [
          "Talking to your family, friends and health professionals about how you feel means they can support you. If low mood does not improve, talk to your head and neck cancer team or GP.",
          "The Swallows 24/7 support line, on 07504 725 059, is there if you need to talk to someone who has been where you are. The Macmillan Support Line is free on 0808 808 00 00, 7 days a week, 8am to 8pm.",
          "Your GP or specialist nurse can refer you to a counsellor or psychologist, and may talk to you about medicine. You can also refer yourself to NHS talking therapies if you are registered with a GP and aged 18 or over, or 16 or over in some areas.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and choose the mental health option, or ask for an urgent GP appointment.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Talk to your family, friends or your team about how you feel.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Refer yourself to NHS talking therapies, or ask your GP about counselling.",
      "Call The Swallows 24/7 support line on 07504 725 059 to talk to someone who has been there.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell someone close how you feel.",
      "Look up NHS talking therapies.",
      "Save The Swallows support line.",
    ],
    ask: "Could my low mood be depression, and can you refer me to a counsellor or psychologist?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor or nurse",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: ["Feeling low or sad most of the time", "Losing interest in things I used to enjoy", "Changes in my sleep", "Changes in my eating", "Trouble concentrating", "Feeling helpless or vulnerable", "Problems starting or finishing tasks", "Avoiding social situations"],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_FINISHING, MAC_LATE, MAC_WORRY, MAC_DEPRESSION, SWALLOWS_247, NHS_TALKING, SAMARITANS, NHS_URGENT],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, they always pass" }],
      why: "If these go on for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
];
