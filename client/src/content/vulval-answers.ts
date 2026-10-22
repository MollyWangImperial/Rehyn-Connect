import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Vulval cancer page's pieces (content/library-conditions/cancer-more-2.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS,
// Macmillan Cancer Support, Cancer Research UK and The Eve Appeal, with the British Association of
// Dermatologists for lichen sclerosus, the Lymphoedema Support Network for leg swelling, and the
// government's Access to Work page and Samaritans for the work and mood answers. The answers describe
// treatment, recovery and living with after-effects; there are no survival or life-expectancy figures, and
// nothing is a prediction for one person. Emergency wording follows the NHS, Macmillan and Cancer Research
// UK pages exactly. General information only; it never replaces what a person's own gynaecological cancer
// team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const eve = (label: string, path: string): LearnSource => ({ label: `The Eve Appeal: ${label}`, url: `https://eveappeal.org.uk/${path}` });
const lsn = (label: string, path: string): LearnSource => ({ label: `Lymphoedema Support Network: ${label}`, url: `https://www.lymphoedema.org/${path}` });

const NHS_SYMPTOMS = nhs("Symptoms of vulval cancer", "conditions/vulval-cancer/symptoms/");
const NHS_CAUSES = nhs("Causes of vulval cancer", "conditions/vulval-cancer/causes/");
const NHS_TESTS = nhs("Tests and next steps for vulval cancer", "conditions/vulval-cancer/tests-and-next-steps/");
const NHS_TREAT = nhs("Treatment for vulval cancer", "conditions/vulval-cancer/treatment/");
const NHS_HELP = nhs("Help and support for vulval cancer", "conditions/vulval-cancer/help-and-support/");
const NHS_LS = nhs("Lichen sclerosus", "conditions/lichen-sclerosus/");
const NHS_LYMPH = nhs("Lymphoedema", "conditions/lymphoedema/");
const NHS_CELLULITIS = nhs("Cellulitis", "conditions/cellulitis/");
const NHS_RADIO_SIDE = nhs("Radiotherapy: side effects", "tests-and-treatments/radiotherapy/side-effects/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_DEPRESSION = nhs("Depression in adults", "mental-health/conditions/depression-in-adults/overview/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const MAC_VULVAL = mac("Vulval cancer", "vulval-cancer");
const MAC_STAGES = mac("Staging and grading of vulval cancer", "vulval-cancer/stages");
const MAC_TREATMENT = mac("Vulval cancer treatment", "vulval-cancer/treatment");
const MAC_SURGERY = mac("Surgery for vulval cancer", "treatments-and-drugs/surgery-for-vulval-cancer");
const MAC_AFTER_SURGERY = mac("Before and after surgery for vulval cancer", "vulval-cancer/before-and-after-surgery");
const MAC_RADIO = mac("Radiotherapy for vulval cancer", "treatments-and-drugs/radiotherapy-for-vulval-cancer");
const MAC_CHEMO = mac("Chemotherapy for vulval cancer", "treatments-and-drugs/chemotherapy-for-vulval-cancer");
const MAC_LS = mac("Vulval lichen sclerosus (LS)", "worried-about-cancer/pre-cancerous-and-genetic-conditions/lichen-sclerosus-vulva");
const MAC_LP = mac("Vulval lichen planus (LP)", "worried-about-cancer/pre-cancerous-and-genetic-conditions/lichen-planus-vulva");
const MAC_VIN = mac("Vulval intraepithelial neoplasia (VIN)", "worried-about-cancer/pre-cancerous-and-genetic-conditions/vulval-intraepithelial-neoplasia");
const MAC_LYMPH = mac("Lymphoedema", "impacts-of-cancer/lymphoedema");
const MAC_PELVIC_SIDE = mac("Pelvic radiotherapy side effects", "treatment/types-of-treatment/radiotherapy/pelvic-radiotherapy/pelvic-radiotherapy-side-effects");
const MAC_LATE = mac("Late effects of pelvic radiotherapy", "treatment/types-of-treatment/radiotherapy/pelvic-radiotherapy/late-effects-of-pelvic-radiotherapy");
const MAC_BB_TIPS = mac("Tips for coping with bladder or bowel changes", "treatment/types-of-treatment/radiotherapy/pelvic-radiotherapy/tips-for-coping-with-bladder-or-bowel-changes");
const MAC_VAGINAL = mac("Vaginal changes, sexual well-being and cancer", "treatment/coping-with-treatment/your-sex-life/vaginal-changes-sexual-well-being");
const MAC_BODY_IMAGE = mac("Changes to your appearance and body image", "impacts-of-cancer/changes-to-your-appearance-and-body-image");
const MAC_FOLLOW_UP = mac("Follow-up care after cancer treatment", "after-treatment/follow-up-care-after-treatment");
const MAC_FINISHING = mac("Finishing cancer treatment", "after-treatment/finishing-treatment");
const MAC_WORRIES = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");
const MAC_WORK = mac("Making decisions about work after treatment", "after-treatment/making-decisions-about-work-after-treatment");
const MAC_EMOTIONS = mac("Cancer and your emotions", "treatment/coping-with-treatment/cancer-and-your-emotions");

const CRUK_STAGES = cruk("Stages and grades of vulval cancer", "vulval-cancer/stages-types-grades/stages-grades");
const CRUK_VIN = cruk("Vulval intraepithelial neoplasia (VIN)", "vulval-cancer/vulval-intraepithelial-neoplasia");
const CRUK_SYMPTOMS = cruk("Symptoms of vulval cancer", "vulval-cancer/symptoms");
const CRUK_DECISIONS = cruk("Treatment options for vulval cancer", "vulval-cancer/treatment/treatment-decisions");
const CRUK_SURGERY_TYPES = cruk("Types of surgery for vulval cancer", "vulval-cancer/treatment/surgery/removing-cancer");
const CRUK_AFTER_SURGERY = cruk("After vulval cancer surgery", "vulval-cancer/treatment/surgery/after-surgery");
const CRUK_PROBLEMS = cruk("Problems after vulval cancer surgery", "vulval-cancer/treatment/surgery/problems-after-surgery");
const CRUK_RADIO = cruk("Radiotherapy for vulval cancer", "vulval-cancer/treatment/radiotherapy-treatment");
const CRUK_CHEMO = cruk("Chemotherapy for vulval cancer", "vulval-cancer/treatment/chemotherapy");
const CRUK_FOLLOW_UP = cruk("Follow up after vulval cancer treatment", "vulval-cancer/treatment/follow-up");
const CRUK_COPING = cruk("Coping with vulval cancer", "vulval-cancer/living-with/coping");
const CRUK_AFTER_TREATMENT = cruk("Life after treatment for vulval cancer", "vulval-cancer/living-with/after-treatment");
const CRUK_CARING = cruk("Caring for your vulva after treatment for vulval cancer", "vulval-cancer/living-with/caring-for-vulva");

const EVE_VULVAL = eve("Vulval cancer", "information-and-advice/gynaecological-cancers/vulval-cancer/");
const EVE_CHECK = eve("Tips for checking your vulva", "tips-for-checking-your-vulva/");
const EVE_ASK = eve("Ask Eve information service", "information-and-advice/ask-eve-information-service/");

const BAD_LS: LearnSource = { label: "British Association of Dermatologists: Lichen sclerosus in females", url: "https://www.bad.org.uk/pils/lichen-sclerosus-in-females" };
const LSN_RISK = lsn("Think you may be at risk?", "information/think-you-may-be-at-risk/");
const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work: get support if you have a disability or health condition", url: "https://www.gov.uk/access-to-work" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const vulvalAnswers: LearnArticle[] = [
  {
    id: "vul-what-you-had",
    kicker: "Your treatment",
    question: "What was each part of my treatment for?",
    hook: "Surgery, radiotherapy, chemotherapy: each had its own job, and your plan was built around the type and stage of the cancer, your health and your wishes.",
    short: "The main treatment for vulval cancer is usually surgery, and you may also have radiotherapy or chemotherapy. Radiotherapy and chemotherapy can be given separately or together, which is called chemoradiation. Your treatment plan was based on the type, stage and grade of the cancer, your general health and your personal preferences.",
    sections: [
      {
        heading: "Why your plan was yours",
        paragraphs: [
          "Your treatment plan for vulval cancer is based on the type of vulval cancer, the stage and grade of the cancer, your general health and your personal preferences. A team of specialists, called a multidisciplinary team, meets to talk about the best treatment options for you.",
          "The specialist care team looking after you will explain the treatments, benefits and side effects, and help you to manage the side effects of treatment. If you have any questions or worries, you can talk to your specialist team: you do not have to wait for your next appointment.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "If surgery is possible, this is usually the main treatment, and the aim is to completely remove the cancer. The surgeon removes the area of skin where the cancer is, and a border, called a margin, of healthy tissue all around it.",
          "A wide local excision takes away the cancer and a margin of healthy tissue, usually at least 1cm wide. If the tumour is larger, more of the vulval skin is removed in a partial vulvectomy, and a vulvectomy removes the whole vulva, including the labia and sometimes the clitoris.",
          "You may also need to have some lymph nodes in your groin removed. After removing the cancer, the surgeon repairs the vulva using the remaining skin, and in some cases a plastic surgeon reconstructs it using skin or muscle from other parts of the body.",
        ],
      },
      {
        heading: "Radiotherapy",
        paragraphs: [
          "Radiotherapy uses high-energy rays, such as x-rays, to treat cancer cells. You may have it before surgery to try to shrink the cancer and make a smaller operation possible, after surgery to reduce the risk of the cancer coming back, if you cannot have surgery, or if vulval cancer has come back or spread.",
          "You usually have adjuvant radiotherapy after surgery if 1 or more lymph nodes from the groin contain cancer cells, or if the cancer is too close to the margin of healthy tissue removed during surgery.",
        ],
      },
      {
        heading: "Chemotherapy and chemoradiation",
        paragraphs: [
          "Chemotherapy uses anti-cancer drugs to destroy cancer cells. For vulval cancer, you usually have it in combination with radiotherapy, which is called chemoradiotherapy or chemoradiation.",
          "The chemotherapy drugs make the cancer cells more sensitive to radiotherapy. The drug most commonly used is cisplatin, and you will usually have it once a week throughout your radiotherapy.",
          "Immunotherapy drugs help stimulate your immune system to recognise and destroy cancer cells, and sometimes this type of treatment is used to treat vulval cancer.",
        ],
      },
      {
        heading: "Getting help quickly during chemotherapy",
        paragraphs: [
          "Chemotherapy can weaken the immune system, which can mean you are more likely to get infections. Call your care team now if you have a high temperature, which can feel like being hot, cold, sweaty or shivery, or other signs of an infection, such as a sore throat, cough, diarrhoea or pain when peeing.",
          "Also call them now if you have throbbing or cramping pain, swelling and warmth in a leg or arm, or sudden breathlessness, sharp chest pain and a cough or coughing up blood. These are signs of an infection or blood clot, which may need to be treated quickly, and if you are not sure how to contact your care team, call NHS 111.",
          "Infections can make you very unwell very quickly. The nurse will give you telephone numbers to call if you have any problems at home.",
        ],
      },
    ],
    helps: [
      "Ask your specialist team to explain each treatment, its benefits and its side effects.",
      "Talk to your specialist team about any questions or worries; you do not have to wait for your next appointment.",
      "Ask your specialist or GP to refer you for a second opinion if you feel it will be helpful.",
      "During chemotherapy, call your care team now if you have a high temperature or other signs of infection, or NHS 111 if you are not sure how to reach them.",
      "Call the Macmillan Support Line on 0808 808 00 00 if you want to talk.",
    ],
    tryThisWeek: [
      "Ask what each treatment was for.",
      "Raise worries without waiting.",
      "Know when to call your care team.",
    ],
    ask: "Which treatments did I have, and what was each one for in my case?",
    interactive: {
      kind: "flip-cards",
      title: "Your treatments, card by card",
      intro: "Turn each card to see what each treatment was for.",
      cards: [
        { id: "wle", front: "Wide local excision", when: "A small cancer", back: "Takes away the cancer and a margin of healthy tissue, usually at least 1cm wide." },
        { id: "partial", front: "Partial vulvectomy", when: "A larger tumour", back: "More of the vulval skin is removed, so there is a margin of healthy tissue all around the cancer." },
        { id: "vulvectomy", front: "Vulvectomy", when: "Needed more rarely", back: "Removes the whole vulva, including the labia and sometimes the clitoris." },
        { id: "nodes", front: "Lymph node surgery", when: "Sometimes in the same operation", back: "Removes lymph nodes from one or both sides of the groin to check them for cancer cells." },
        { id: "radiotherapy", front: "Radiotherapy", when: "Before or after surgery, or instead of it", back: "High-energy rays that treat cancer cells, to shrink the cancer or reduce the risk of it coming back." },
        { id: "chemoradiation", front: "Chemoradiation", when: "Chemotherapy given with radiotherapy", back: "Cisplatin, usually once a week, makes the cancer cells more sensitive to radiotherapy." },
      ],
    },
    sources: [NHS_TREAT, MAC_TREATMENT, MAC_SURGERY, CRUK_DECISIONS, MAC_RADIO, MAC_CHEMO, NHS_CHEMO, CRUK_CHEMO],
    quiz: {
      question: "What is the aim of surgery for vulval cancer?",
      options: [{ text: "To completely remove the cancer", right: true }, { text: "To make radiotherapy shorter" }, { text: "Only to check the lymph nodes" }],
      why: "If surgery is possible, this is usually the main treatment, and the aim is to completely remove the cancer.",
    },
  },
  {
    id: "vul-stage",
    kicker: "Stage",
    question: "What do the stage and grade of my vulval cancer mean?",
    hook: "Stage 1 to 4 describes how big the cancer was and how far it had spread; the grade describes how the cells looked. Together they shaped your treatment.",
    short: "The stage of a cancer explains its size and whether it has spread beyond the area it first started, and in the UK doctors usually use the FIGO system, with 4 main stages from 1 to 4. The grade is how the cancer cells look under the microscope compared with normal cells. Knowing the stage and grade helps you and your doctor decide on the best treatment.",
    sections: [
      {
        heading: "What stage and grade mean",
        paragraphs: [
          "The stage of a cancer explains its size and whether it has spread beyond the area it first started. Grading is how the cancer cells look under the microscope compared with normal cells.",
          "Tests such as blood tests and scans, along with the vulvoscopy and biopsy, help the specialists find out the type of vulval cancer, the size of the cancer, and how far it has spread. You may not have all these tests.",
          "In the UK, doctors usually use the FIGO system, which has 4 main stages, from 1 to 4. Your doctor may also tell you the TNM stage, which describes the size of the cancer, whether there are cancer cells in the lymph nodes, and whether the cancer has spread to a different part of the body.",
        ],
      },
      {
        heading: "Stages 1 and 2",
        paragraphs: [
          "Stage 1 means that the cancer is only in the vulva, and there is no sign of cancer in the lymph nodes. In stage 1A the cancer is 2cm or less in size and has grown 1mm or less into the skin and tissues underneath; in stage 1B it is more than 2cm across, or has grown more than 1mm.",
          "Stage 2 means the cancer has spread to nearby tissues, such as the lower part of the vagina, urethra or anus, but there is no sign of cancer in the lymph nodes. Stage 1 and 2 cancers are often called early-stage cancers.",
        ],
      },
      {
        heading: "Stages 3 and 4",
        paragraphs: [
          "In stage 3, the cancer has spread to nearby lymph nodes, and stage 3 is divided into 3A, 3B and 3C. Stage 3 and 4 cancers are called advanced-stage cancers.",
          "In stage 4A, the cancer has spread to the pelvic bone, or to nearby lymph nodes that are fixed or have formed an ulcer. In stage 4B, it has spread to other parts of the body further away from the vulva, such as the lungs.",
        ],
      },
      {
        heading: "Grades 1 to 3",
        paragraphs: [
          "There are 3 grades of vulval cancer. Grade 1, also called low grade, means the cells look very like normal cells and tend to be slow growing; grade 3, or high grade, means the cells look very abnormal and tend to grow quickly.",
          "The grade helps your doctor decide if you need further treatment after surgery.",
        ],
      },
      {
        heading: "If the cancer has spread further",
        paragraphs: [
          "If you have been diagnosed with advanced vulval cancer, it may be hard to treat and not possible to cure. The aim of treatment will be to slow down the growth and spread of the cancer, to help with the symptoms, and help you live longer.",
          "Finding out cancer cannot be cured can be very hard news to take in. You will be referred to a symptom control team or palliative care team, who will help you to manage your symptoms, make you feel more comfortable and help you and your loved ones get any other support you need.",
          "Macmillan Cancer Support's helpline is 0808 808 0000, and Marie Curie, which offers care and support for anyone affected by a terminal illness, has a helpline on 0800 090 2309.",
        ],
      },
    ],
    helps: [
      "Bring someone with you to your appointments; it can help.",
      "Ask your clinical nurse specialist, your main point of contact, any questions you have.",
      "If waiting to know the stage is worrying, call the Macmillan Support Line on 0808 808 00 00.",
      "If the cancer has spread, ask about the palliative care team, who help you manage your symptoms.",
      "Call Marie Curie's helpline on 0800 090 2309 for support with a terminal illness.",
    ],
    tryThisWeek: [
      "Take someone to appointments.",
      "Ask your nurse your questions.",
      "Save the Macmillan Support Line number.",
    ],
    ask: "What stage and grade was my cancer, and how did that shape my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "The stages, card by card",
      intro: "Turn each card to see what each stage, and the grade, describes.",
      cards: [
        { id: "stage-1", front: "Stage 1", when: "Early stage", back: "The cancer is only in the vulva, with no sign of cancer in the lymph nodes." },
        { id: "stage-2", front: "Stage 2", when: "Early stage", back: "Spread to nearby tissues such as the lower vagina, urethra or anus, with no sign of cancer in the lymph nodes." },
        { id: "stage-3", front: "Stage 3", when: "Advanced stage", back: "Spread to nearby lymph nodes; divided into 3A, 3B and 3C." },
        { id: "stage-4", front: "Stage 4", when: "Advanced stage", back: "Spread to the pelvic bone or fixed lymph nodes (4A), or further away, such as the lungs (4B)." },
        { id: "grade", front: "Grade 1 to 3", when: "How the cells look", back: "Low grade cells look very like normal cells; high grade cells look very abnormal and tend to grow quickly." },
      ],
    },
    sources: [MAC_STAGES, CRUK_STAGES, NHS_TESTS, EVE_VULVAL, NHS_TREAT, NHS_HELP],
    quiz: {
      question: "What does stage 1 vulval cancer mean?",
      options: [{ text: "The cancer is only in the vulva", right: true }, { text: "It has spread to the lymph nodes" }, { text: "It has spread to the lungs" }],
      why: "Stage 1 means that the cancer is only in the vulva, and there is no sign of cancer in the lymph nodes.",
    },
  },
  {
    id: "vul-follow-up",
    kicker: "Follow-up",
    question: "What happens at follow-up, and what should I look out for?",
    hook: "Check-ups every few months at first, less often later: each is a chance to raise anything that worries you, and you never have to wait for one.",
    short: "After treatment, you usually have follow-up appointments every 3 to 6 months for 2 years, then every 6 to 12 months, usually for 3 years. Your doctor or nurse examines you and asks how you are, and may suggest you examine yourself between visits. Contact your doctor or specialist nurse if you notice any new symptoms; you do not have to wait for your next visit.",
    sections: [
      {
        heading: "Why you have follow-up",
        paragraphs: [
          "You usually have follow-up appointments to check how you are, and to see whether you have any problems or worries. The appointments also give you the chance to raise any concerns you have about your progress.",
          "At your follow-up appointment after surgery, your surgeon will check how you are recovering from the operation. They will also give you information about any further treatment you may need, such as radiotherapy or chemotherapy.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "How often you see your specialist depends on how you are feeling, the type of vulval cancer you had, the treatment you have had and whether you had any vulval skin conditions such as VIN.",
          "You usually have follow-up appointments every 3 to 6 months for 2 years. After 2 years, you may have follow-up every 6 to 12 months, and this usually continues for 3 years.",
        ],
      },
      {
        heading: "What happens at the appointment",
        paragraphs: [
          "Your doctor or nurse examines you at each appointment. They ask how you are feeling, whether you have had any symptoms or side effects, and if you are worried about anything, and you might also have tests at some visits.",
          "Your doctor may also suggest that you examine yourself routinely. This is called self examination.",
          "If you had a vulval skin condition such as lichen sclerosus or lichen planus before vulval cancer, you should keep seeing your specialist for those conditions too. After cancer treatment, you may still need ongoing treatment for the skin.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your doctor or specialist nurse if you have any concerns between appointments, or if you notice any new symptoms. You do not have to wait until your next visit.",
          "Symptoms of vulval cancer include an open sore or growth, a persistent itch, bleeding, pain or soreness, thickened, raised, red, white or dark patches on the skin, a mole that changes shape or colour, a lump or swelling in the groin, and burning pain when you pass urine.",
        ],
      },
      {
        heading: "When check-ups bring back worry",
        paragraphs: [
          "Many people find their follow-up appointments quite worrying, because a hospital appointment can bring back any anxiety you had about your cancer. It can help to tell someone close to you how you are feeling.",
          "It is important to be aware of changes in your body, but constantly checking for symptoms or changes can make you feel anxious. If you find yourself doing this, talk to someone from your cancer team or your primary care team.",
        ],
      },
    ],
    helps: [
      "Write down any questions before your appointment, and the answers to help you remember them.",
      "Take someone with you to support you and help you remember what was said.",
      "Contact your doctor or specialist nurse about new symptoms; you do not have to wait for your next visit.",
      "Keep seeing your specialist for lichen sclerosus or lichen planus, if you had one of these before.",
      "Ask your cancer team for a treatment summary.",
      "Tell someone close to you how you are feeling before check-ups.",
    ],
    tryThisWeek: [
      "Write your questions down.",
      "Report new symptoms now.",
      "Ask for a treatment summary.",
    ],
    ask: "How often will I have check-ups, and who do I contact if I notice a change between them?",
    interactive: {
      kind: "timeline",
      title: "Your follow-up, year by year",
      steps: [
        { id: "first", when: "After surgery", title: "Your follow-up appointment", points: ["Your surgeon checks how you are recovering.", "You hear about any further treatment you may need."] },
        { id: "years-1-2", when: "First 2 years", title: "Every 3 to 6 months", points: ["Your doctor or nurse examines you.", "They ask about symptoms, side effects and worries."] },
        { id: "years-3-5", when: "The next 3 years", title: "Every 6 to 12 months", points: ["Appointments become less frequent over time.", "You might have tests at some visits."] },
        { id: "any-time", when: "Any time", title: "Between appointments", points: ["Contact your doctor or specialist nurse about new symptoms.", "You do not have to wait until your next visit."] },
      ],
    },
    sources: [CRUK_FOLLOW_UP, MAC_VULVAL, MAC_FOLLOW_UP, MAC_AFTER_SURGERY, MAC_WORRIES, CRUK_SYMPTOMS],
    quiz: {
      question: "What should you do if you notice a new symptom between check-ups?",
      options: [{ text: "Contact your doctor or specialist nurse", right: true }, { text: "Wait for your next appointment" }, { text: "Only mention it if it lasts a year" }],
      why: "Contact your doctor or specialist nurse if you have any concerns between appointments, or if you notice any new symptoms.",
    },
  },
  {
    id: "vul-skin-conditions",
    kicker: "Skin conditions",
    question: "What are lichen sclerosus and VIN, and do they still matter?",
    hook: "Some vulval skin conditions come before vulval cancer. Keeping them well controlled matters, and so does knowing which changes to report.",
    short: "Lichen sclerosus is a long-term skin condition that causes itchy white patches, most often on the genitals, and VIN is when abnormal cells develop in the top layer of skin covering the vulva. Neither is cancer, but both can increase the risk of vulval cancer, which rarely happens when lichen sclerosus is well controlled. If you had one of them, keep seeing your specialist, use the treatment as advised and report a sudden change, an ulcer or a lump without waiting.",
    sections: [
      {
        heading: "Skin conditions linked to vulval cancer",
        paragraphs: [
          "Some skin conditions that affect your vulva can lead to vulval cancer. These include abnormal changes in the skin cells of your vulva, called vulval intraepithelial neoplasia or VIN, lichen sclerosus and lichen planus.",
          "Lichen sclerosus is not cancer. But it is thought that, over a long period of time, the inflammation it causes increases the risk of cancer developing, and this rarely happens when the condition is well controlled.",
        ],
      },
      {
        heading: "Lichen sclerosus",
        paragraphs: [
          "Lichen sclerosus is a skin condition that causes itchy white patches, most commonly on the genitals. The patches are usually itchy, white, smooth or crinkled, and easily damaged.",
          "It is not caused by an infection, it is not contagious, and it is not caused by poor personal hygiene. You cannot spread it to other people through close contact, including sex.",
          "Lichen sclerosus cannot be cured, but a strong prescription steroid ointment usually helps relieve the symptoms. The information leaflet with the steroid may warn against using it on the genital area, but this treatment is safe when prescribed by your specialist doctor.",
        ],
      },
      {
        heading: "VIN",
        paragraphs: [
          "VIN is when abnormal cells develop in the top layer of skin covering the vulva. It is not vulval cancer but could turn into cancer, which may take many years, and many women with VIN will not develop cancer.",
          "HSIL, the more common type, is usually linked to a virus called HPV, and over 4 in 10 vulval cancers are linked to HPV. Differentiated VIN is rarer, often occurs together with lichen sclerosus or lichen planus, and has a higher risk of developing into cancer.",
          "VIN can come back after treatment, so you will see your specialist regularly, often for many years. If you smoke, giving up reduces the chance of the VIN coming back.",
        ],
      },
      {
        heading: "Caring for your skin",
        paragraphs: [
          "Wash with an emollient soap substitute instead of regular soap, and gently dab your genitals dry after peeing. Do not use scented soaps, bubble bath or shower gel, and wear cotton or silk underwear.",
          "Regularly apply a barrier cream or ointment, such as petroleum jelly, to affected areas, and use lubricant if sex is uncomfortable. Do not smoke or go near naked flames if you use an emollient, because emollients on fabrics such as clothing and bedding can catch fire more easily.",
        ],
      },
      {
        heading: "Changes to report",
        paragraphs: [
          "Talk to your specialist doctor as soon as possible if you notice a sudden change in your symptoms, or any ulcers or lumps. Do not wait until your next appointment.",
          "Lifelong regular self-examination is important for all females who have had genital lichen sclerosus. If skin changes do not go away after using steroid ointment, in particular any skin thickening, soreness or ulceration lasting more than two weeks, see your GP.",
        ],
      },
    ],
    helps: [
      "Use your steroid ointment as your doctor or specialist nurse tells you.",
      "Wash with an emollient soap substitute instead of soap, and avoid scented products.",
      "Gently dab your genitals dry after peeing, and use a barrier ointment to protect your skin.",
      "Use lubricant if sex is uncomfortable.",
      "If you smoke, giving up reduces the chance of VIN coming back.",
      "Tell your specialist as soon as possible about a sudden change, an ulcer or a lump.",
    ],
    tryThisWeek: [
      "Use the ointment as advised.",
      "Swap soap for an emollient.",
      "Report a lump or ulcer quickly.",
    ],
    ask: "Do I still need treatment or check-ups for lichen sclerosus or VIN, and how should I use my ointment?",
    interactive: {
      kind: "signs",
      title: "Skin changes to report",
      intro: "Tick any you have noticed. They make a list to share with your specialist or GP.",
      signs: ["A sudden change in your symptoms", "An ulcer or open sore", "A lump", "Crusted areas", "Skin thickening", "Soreness lasting more than two weeks", "Changes not helped by your steroid ointment"],
      after: "Talk to your specialist doctor as soon as possible. Do not wait until your next appointment.",
      copyHeading: "Skin changes I have noticed",
    },
    sources: [NHS_LS, MAC_LS, BAD_LS, MAC_VIN, CRUK_VIN, NHS_CAUSES, MAC_LP, EVE_VULVAL],
    quiz: {
      question: "Can lichen sclerosus be passed to a partner through sex?",
      options: [{ text: "No, it is not contagious", right: true }, { text: "Yes, through close contact" }, { text: "Only if it is not treated" }],
      why: "You cannot spread it to other people through close contact, including sex.",
    },
  },
  {
    id: "vul-wound",
    kicker: "Wound healing",
    question: "How do I look after the wound while it heals?",
    hook: "Rinse, dry gently, keep clothes loose and simple, and know the signs of infection. Healing takes weeks, and the team wants to hear from you.",
    short: "Recovery depends on the operation: you should allow at least 6 to 8 weeks after a bigger operation, while recovery after removing only a small amount of skin is much quicker. Keep the wound clean and dry, wear loose cotton clothing and avoid lotions, perfumes and talc on the area. Tell your nurse or doctor about signs of infection, even after you go home.",
    sections: [
      {
        heading: "In hospital",
        paragraphs: [
          "The nurses will help you look after your wounds in hospital and give you advice about caring for them at home. Some people do not need a dressing on the vulval wound, and the area is cleaned by gently rinsing with water and carefully drying.",
          "If you have had lymph nodes removed from the groin, you will probably have a drain coming out of each groin wound, which drains the fluid that collects there. The drain usually stays in until no more fluid is coming out, and you can go home with the drain if needed.",
          "Stitches are usually soluble. If you do not have this type, your stitches or staples are usually removed about 7 to 10 days after your operation.",
        ],
      },
      {
        heading: "Keeping the wound clean and comfortable",
        paragraphs: [
          "Keep your wound clean: you could rinse the area with a hand-held shower, or use a sitz bath, a small basin that fits over the toilet. If passing urine makes your wound sting, try pouring a small jug of lukewarm water over the wound while you are sitting on the toilet.",
          "Keep your wound dry by using a hairdryer on a cool setting, or by gently patting your skin dry with a clean towel. Avoid using any lotions, perfumes and talcum powders in the area where you had your operation.",
          "Wear loose-fitting clothing made from cotton rather than synthetic material. You may find it better to lie propped up on your side rather than sit, and an air cushion can make sitting more comfortable.",
        ],
      },
      {
        heading: "Signs of infection or a clot",
        paragraphs: [
          "Wound infections can happen after surgery. Tell your nurse or doctor, even after you go home, if the wound feels hot or swollen, looks red, has fluid or pus coming from it, or if you feel unwell or have a high temperature.",
          "Blood clots are a possible complication of surgery, so let your doctor or nurse know if you have an area in your leg that is swollen, hot, red or sore. If you have shortness of breath, chest pain, are coughing up blood or feel dizzy at home, contact a doctor immediately, such as your emergency GP service, or call 999 or go to your nearest A&E.",
        ],
      },
      {
        heading: "Pain, constipation and moving",
        paragraphs: [
          "It is normal to have pain for the first week or so, and painkillers can help. Tell your doctor or nurse as soon as possible if the pain is not controlled.",
          "In the first few weeks after surgery, it is important to eat well and drink plenty of fluids to avoid constipation, because straining can delay wound healing. If you are constipated, ask your doctor for laxatives.",
          "Keep doing the deep breathing and leg exercises you learned before surgery, which help to reduce the risk of blood clots and chest infections. If you had lymph nodes removed from your groin, try to put your feet up when you are sitting down.",
        ],
      },
      {
        heading: "How long healing takes",
        paragraphs: [
          "You should recover quite quickly after a small operation, but you should allow at least 6 to 8 weeks to recover after a bigger operation, and for some people it can take longer. If you had major surgery, it is very important not to lift any heavy objects for at least 6 to 8 weeks.",
          "The wound may look bruised or swollen, and this will gradually get better but can take a couple of weeks. Wounds near the groin sometimes take longer to heal than wounds in other areas.",
        ],
      },
    ],
    helps: [
      "Rinse the wound with water and dry it gently, with a cool hairdryer or a clean towel.",
      "Pour a small jug of lukewarm water over the wound while you pee if it stings.",
      "Wear loose cotton clothing, and avoid lotions, perfumes and talc on the area.",
      "Tell your nurse or doctor about signs of infection, even after you go home.",
      "Eat well and drink plenty of fluids to avoid constipation.",
      "Do not lift heavy objects for at least 6 to 8 weeks after major surgery.",
    ],
    tryThisWeek: [
      "Rinse and dry gently.",
      "Wear loose cotton clothes.",
      "Know the signs of infection.",
    ],
    ask: "How should I care for my wound at home, and who do I call if it looks infected?",
    interactive: {
      kind: "scenarios",
      title: "Healing at home",
      scenarios: [
        {
          id: "sting",
          situation: "Passing urine makes your wound sting.",
          options: [{ text: "Pour lukewarm water over it while you pee", best: true }, { text: "Hold on for as long as you can" }],
          why: "If passing urine makes your wound sting, try pouring a small jug of lukewarm water over the wound while you are sitting on the toilet.",
        },
        {
          id: "drying",
          situation: "You want to dry the area after washing.",
          options: [{ text: "Use a hairdryer on a cool setting", best: true }, { text: "Rub it firmly with a towel" }],
          why: "Keep your wound dry by using a hairdryer on a cool setting, or by gently patting your skin dry with a clean towel.",
        },
        {
          id: "red",
          situation: "At home, your wound looks red and feels hot.",
          options: [{ text: "Tell your nurse or doctor", best: true }, { text: "Wait for your follow-up appointment" }],
          why: "Tell your nurse or doctor, even after you go home, if the wound feels hot or swollen, looks red, has fluid or pus coming from it, or if you feel unwell or have a high temperature.",
        },
        {
          id: "lifting",
          situation: "Four weeks after major surgery, you need to carry heavy shopping.",
          options: [{ text: "Ask someone else to lift it", best: true }, { text: "Lift it carefully yourself" }],
          why: "If you had major surgery, it is very important not to lift any heavy objects for at least 6 to 8 weeks.",
        },
      ],
    },
    sources: [MAC_AFTER_SURGERY, CRUK_AFTER_SURGERY, CRUK_PROBLEMS],
    quiz: {
      question: "How should you dry the vulval area after washing?",
      options: [{ text: "A cool hairdryer, or patting gently with a towel", right: true }, { text: "Rubbing it briskly with a towel" }, { text: "Using talcum powder" }],
      why: "Keep your wound dry by using a hairdryer on a cool setting, or by gently patting your skin dry with a clean towel.",
    },
  },
  {
    id: "vul-swelling",
    kicker: "Leg swelling",
    question: "Why might my leg swell, and what helps?",
    hook: "Removing or treating the lymph nodes in the groin can leave fluid with nowhere to go. Swelling is easier to control if it is treated early.",
    short: "Lymphoedema is swelling caused by a build-up of lymph fluid, and after vulval cancer treatment it may develop in one or both legs or the pubic area if lymph nodes were removed or treated with radiotherapy. Not everyone gets it, but it can start months or years later. It is easier to control if treated early, so tell your doctor or nurse straight away if you notice swelling.",
    sections: [
      {
        heading: "Why it can happen",
        paragraphs: [
          "Lymphoedema is swelling that develops because of a build-up of lymph fluid in the body's tissues. After vulval cancer treatment, it may develop if the lymph nodes stop working normally because of radiotherapy, or are removed during surgery.",
          "Fluid may collect and cause swelling in one or both legs, or the pubic area. Not everyone gets lymphoedema after treatment for cancer of the vulva, but it can start months or years later.",
          "Removing all the groin lymph nodes can affect fluid drainage in your legs, so on some occasions doctors check the sentinel nodes instead. Removing fewer lymph nodes will help reduce the long-term side effect of lymphoedema.",
        ],
      },
      {
        heading: "Normal swelling, or lymphoedema?",
        paragraphs: [
          "It is common to have some swelling around the genital area for a couple of weeks after surgery. If this continues, or you notice some swelling in your legs or feet, you may be developing lymphoedema.",
          "Your clothing, shoes or jewellery may feel tighter than usual, even before you notice any swelling. The leg may feel heavy, tight, full or stiff, or ache where the swelling is.",
          "Swelling, aching and redness in the legs can also be symptoms of a blood clot. Tell your doctor or nurse straight away if you have any of these symptoms, and if you cannot speak to your doctor, call 111.",
        ],
      },
      {
        heading: "Getting it treated early",
        paragraphs: [
          "Lymphoedema is easier to control if treated early. If you think you are developing it, tell your doctor right away, and they will refer you to a lymphoedema specialist, usually a nurse or physiotherapist.",
          "There is no cure for lymphoedema, but it is usually possible to control the main symptoms. The main treatments are skin care, exercise and keeping active, positioning of the limb, compression and a type of massage called lymphatic drainage.",
        ],
      },
      {
        heading: "Caring for your legs and skin",
        paragraphs: [
          "Try to protect your legs and feet from sharp objects: do not walk around in bare feet, and wear long trousers for gardening. Take care of all cuts, scratches or bites without delay, by cleaning with antiseptic and covering with a dressing.",
          "Wear insect repellent, avoid sunburn, take extra care when cutting your toenails, and use an electric razor carefully if you shave your legs. Gentle movement, exercise and activities help the muscles pump lymph fluid through your body.",
          "Keeping to a healthy weight matters too, because being overweight puts more stress on the lymphatic system.",
        ],
      },
      {
        heading: "Cellulitis: an infection to act on",
        paragraphs: [
          "Cellulitis is the most common complication of lymphoedema, and it can be serious if it is not treated quickly. Its symptoms can include redness and a feeling of heat in the skin, pain and increased swelling, and a high temperature or feeling hot, cold or shivery.",
          "Ask for an urgent GP appointment or get help from NHS 111 if your skin is painful, hot and swollen. Call 999 or go to A&E if you have cellulitis with a very high temperature, a fast heartbeat or fast breathing, purple patches on your skin, feeling dizzy or faint, confusion, or cold, clammy or pale skin.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or nurse straight away if you notice swelling in your legs, feet or genital area.",
      "Ask to be referred to a lymphoedema specialist if you have signs of swelling.",
      "Clean cuts, scratches and bites straight away with antiseptic, and cover them.",
      "Protect your legs and feet: no bare feet, long trousers for gardening, and insect repellent.",
      "Try to move a little every day, and build up gradually.",
      "Ask for an urgent GP appointment or call NHS 111 if your skin becomes painful, hot and swollen.",
    ],
    tryThisWeek: [
      "Report any new swelling.",
      "Clean and cover any cuts.",
      "Move a little every day.",
    ],
    ask: "Am I at risk of lymphoedema, and can I be referred to a lymphoedema specialist if I notice swelling?",
    interactive: {
      kind: "signs",
      title: "Swelling signs to mention",
      intro: "Tick any you have noticed. They make a list to share with your nurse or GP.",
      signs: ["Clothes, shoes or jewellery feel tighter", "A leg feels heavy, tight, full or stiff", "Aching in a leg", "Swelling in the legs, feet or genital area", "Swelling after surgery that does not go down", "Skin that is red, hot and painful", "A high temperature, or feeling shivery"],
      after: "Tell your doctor or specialist nurse straight away. If your skin is painful, hot and swollen, ask for an urgent GP appointment or get help from NHS 111.",
      copyHeading: "Swelling I have noticed",
    },
    sources: [MAC_VULVAL, CRUK_PROBLEMS, CRUK_AFTER_TREATMENT, MAC_LYMPH, NHS_LYMPH, LSN_RISK, NHS_CELLULITIS, CRUK_SURGERY_TYPES, EVE_VULVAL],
    quiz: {
      question: "When is lymphoedema easier to control?",
      options: [{ text: "When it is treated early", right: true }, { text: "Only after a year" }, { text: "When the leg is kept completely still" }],
      why: "Lymphoedema is easier to control if treated early.",
    },
  },
  {
    id: "vul-radiotherapy",
    kicker: "After radiotherapy",
    question: "What happens to my skin and body after radiotherapy?",
    hook: "Side effects build during treatment and peak a little after it ends, then usually start to ease. A few changes can last, and there is help for each.",
    short: "Side effects of radiotherapy for vulval cancer tend to start about a week in, get worse during treatment and for a couple of weeks after, then usually begin to improve. The skin around the vulva and groin can become red or darker, sore and dry, and usually settles within 2 to 4 weeks of ending treatment. Some effects, such as vaginal narrowing, early menopause or swelling, can last or start later, so tell your team about any new symptoms.",
    sections: [
      {
        heading: "How the course works",
        paragraphs: [
          "For vulval cancer, you usually have external radiotherapy, from a machine outside the body. You are most likely to have treatment once a day, Monday to Friday, with a rest at the weekends, usually for 5 to 6 weeks.",
          "Each session takes a few minutes, and you will not feel anything. This type of radiotherapy will not make you radioactive, and it is safe to be around other people, including pregnant women and children.",
        ],
      },
      {
        heading: "When side effects come and go",
        paragraphs: [
          "Side effects tend to start a week after the radiotherapy begins. They gradually get worse during the treatment and for a couple of weeks after it ends, but they usually begin to improve after around 2 weeks or so.",
          "Radiotherapy often makes people feel tired, and tiredness may get worse as treatment goes on. After treatment finishes, you may continue to feel tired for weeks or months, and if it does not get better, tell your cancer doctor or specialist nurse.",
        ],
      },
      {
        heading: "Your skin",
        paragraphs: [
          "Your skin might go red or darker in the treatment area, feel sore, itchy or warm to touch, or become dry and flaky. Let your radiotherapy team know if you have any of these symptoms; they usually go away within 2 to 4 weeks of ending the treatment, but your skin might always be slightly darker in that area.",
          "Wash or rinse the area with warm water, and gently dry the skin with a clean towel or a hair dryer on a cool setting. Wear loose fitting clothing made of natural fibres, such as cotton, and protect the treated area from the sun for the first year after radiotherapy.",
          "Radiotherapy can cause hair loss around the vulval area. It may grow back, but it might look different, and sometimes it does not grow back at all.",
        ],
      },
      {
        heading: "Bladder and bowel",
        paragraphs: [
          "Radiotherapy to the vulval area may cause loose poo, feeling sore when you poo, pain or burning when you pee, or feeling like you need to empty your bladder soon after going to the toilet. These side effects usually start to get better within a week or so of finishing treatment.",
          "Contact the hospital straight away if your bladder symptoms get worse, you have a high temperature or you feel you cannot pass urine.",
        ],
      },
      {
        heading: "Changes that can last",
        paragraphs: [
          "Radiotherapy to the pelvis affects the ovaries and may cause an early menopause. If you have not already been through the menopause, your periods will stop and you will no longer be able to get pregnant, and you can talk to your doctor about hormone replacement therapy.",
          "Radiotherapy can make your vagina narrower and less stretchy, and the vaginal walls may be dry and thin. Your doctor or nurse may suggest vaginal dilators, and creams, lubricants or gels can help with dryness.",
          "You may have some swelling in the vulva for months or sometimes years, which you can reduce with gentle, upwards massage that a specialist nurse or physiotherapist can teach you. Always tell your GP or cancer doctor about any new symptoms that develop a long time after treatment.",
        ],
      },
    ],
    helps: [
      "Tell your radiotherapy team about any skin soreness or changes.",
      "Rinse the area with warm water and dry it gently with a towel or a cool hairdryer.",
      "Wear loose clothing made of natural fibres, such as cotton.",
      "Protect the treated area from the sun for the first year after radiotherapy.",
      "Contact the hospital straight away if bladder symptoms get worse, you have a high temperature or you cannot pass urine.",
      "If you smoke, stopping will help, because smoking makes the side effects of radiotherapy worse.",
    ],
    tryThisWeek: [
      "Report skin changes.",
      "Wear loose cotton clothes.",
      "Protect the area from the sun.",
    ],
    ask: "Which side effects should I expect after my radiotherapy, and which ones should I report straight away?",
    interactive: {
      kind: "timeline",
      title: "Radiotherapy, week by week",
      steps: [
        { id: "week-1", when: "About a week in", title: "Side effects begin", points: ["Side effects tend to start a week after radiotherapy begins.", "Tiredness may get worse as treatment goes on."] },
        { id: "during", when: "During treatment", title: "Building up", points: ["Side effects gradually get worse during treatment.", "Tell your radiotherapy team about skin soreness or bladder changes."] },
        { id: "end", when: "Treatment ends", title: "A couple of weeks more", points: ["Side effects can keep getting worse for a couple of weeks after treatment ends."] },
        { id: "after", when: "Around 2 weeks after", title: "Starting to improve", points: ["Side effects usually begin to improve.", "Skin symptoms usually go away within 2 to 4 weeks of ending treatment."] },
        { id: "later", when: "Months or years later", title: "Effects that can last", points: ["Vaginal changes, early menopause or swelling can last or start later.", "Tell your GP or cancer doctor about any new symptoms."] },
      ],
    },
    sources: [CRUK_RADIO, MAC_RADIO, MAC_PELVIC_SIDE, NHS_RADIO_SIDE],
    quiz: {
      question: "When do radiotherapy side effects usually begin to improve?",
      options: [{ text: "Around 2 weeks after treatment ends", right: true }, { text: "On the last day of treatment" }, { text: "Only after a year" }],
      why: "They gradually get worse during the treatment and for a couple of weeks after it ends, but they usually begin to improve after around 2 weeks or so.",
    },
  },
  {
    id: "vul-passing-urine",
    kicker: "Bladder and bowel",
    question: "Will treatment change how I pass urine or open my bowels?",
    hook: "Surgery rarely causes lasting bladder or bowel problems; the stream may simply go a different way. Radiotherapy can bring more changes, and help is there.",
    short: "Surgery for vulval cancer does not usually cause long term bladder or bowel problems, though if part of the vulva is removed the stream of urine may flow to one side or spray. Radiotherapy can cause bladder and bowel changes during treatment that usually improve afterwards, and sometimes later effects. Tell your team about any changes; blood in your urine or from your back passage should always be checked.",
    sections: [
      {
        heading: "After surgery",
        paragraphs: [
          "Surgery for vulval cancer does not usually cause long term bladder or bowel problems. If part of the vulva is removed, the stream of urine may flow to one side or spray, which may feel a little odd the first few times you pass urine.",
          "You might have a tube called a catheter in your bladder after the operation. It drains urine and stops it coming into contact with your wound, and depending on the operation it may only stay in overnight or for longer.",
          "Rarely, surgery involves removing part of the urethra or the lowest end of the bowel, which may affect how you pass urine or have a bowel movement. For some people, surgery involves having a stoma, an opening in the tummy wall through which stool passes into a bag, and a stoma nurse will give you more information.",
        ],
      },
      {
        heading: "Avoiding constipation and infection",
        paragraphs: [
          "It is normal not to have bowel movements for a few days after your operation, and your doctor may give you laxatives. In the first few weeks, eat well and drink plenty of fluids to avoid constipation, which can delay wound healing if you have to strain.",
          "Drinking plenty of fluids also helps reduce the risk of developing a urine infection. Tell your doctor or nurse if you have symptoms such as cloudy, smelly pee, a high temperature or feeling generally unwell.",
        ],
      },
      {
        heading: "During and after radiotherapy",
        paragraphs: [
          "Radiotherapy can make you feel like you need to pass urine more often, with a burning feeling when you pass urine. It can also cause tummy cramps, and you may need to pass stools more often or have diarrhoea.",
          "Contact the hospital straight away if your symptoms get worse, you have a high temperature, or you feel you cannot pass urine.",
        ],
      },
      {
        heading: "Changes that can last",
        paragraphs: [
          "Radiotherapy to the pelvic area can sometimes cause effects months or years after treatment. If your bowel is affected, you may have more bowel movements, need to go more urgently or have diarrhoea, and if the bladder is affected, you may need to pee more often or more urgently.",
          "The blood vessels in the bowel and bladder can become more fragile, which can cause blood in your urine or bowel movements. Blood in the urine should always be checked by a doctor as soon as possible, and always talk to your doctor about passing blood from your back passage, waking up to open your bowels, needing to rush, or bowel incontinence.",
        ],
      },
      {
        heading: "Everyday tips",
        paragraphs: [
          "After pelvic radiotherapy, try to drink at least 1 to 2 litres of fluids a day, and cut down on alcohol, fizzy drinks, caffeine, acidic drinks and drinks with artificial sweeteners. Try to drink water, diluted fruit juice and herbal teas.",
          "Before going somewhere new, find out where the toilets are. Macmillan has a free toilet card you can use, and the National Key Scheme offers access to about 7,000 locked disabled toilets across the UK.",
        ],
      },
    ],
    helps: [
      "Drink plenty of fluids to help avoid constipation and urine infections.",
      "Ask your doctor for laxatives if you are constipated.",
      "Contact the hospital straight away if bladder symptoms get worse, you have a high temperature or you cannot pass urine.",
      "Have blood in your urine or from your back passage checked by a doctor.",
      "Cut down on drinks that can irritate the bladder, such as caffeine, fizzy drinks and alcohol.",
      "Get a free Macmillan toilet card for when you go out.",
    ],
    tryThisWeek: [
      "Drink plenty of fluids.",
      "Get blood checked by a doctor.",
      "Order a toilet card.",
    ],
    ask: "Could my treatment affect my bladder or bowel, and who can help if it does?",
    interactive: {
      kind: "signs",
      title: "Bladder and bowel changes",
      intro: "Tick any you have noticed. They make a list to share with your team.",
      signs: ["Burning when you pass urine", "Needing to pee more often or urgently", "Feeling you cannot pass urine", "Cloudy or smelly pee", "A high temperature", "Diarrhoea or tummy cramps", "Blood in your urine or poo", "Waking up to open your bowels", "Leaking urine or stool"],
      after: "Tell your team. Contact the hospital straight away if symptoms get worse, you have a high temperature or you feel you cannot pass urine.",
      copyHeading: "Bladder and bowel changes I have noticed",
    },
    sources: [MAC_AFTER_SURGERY, CRUK_PROBLEMS, CRUK_AFTER_SURGERY, MAC_RADIO, MAC_LATE, MAC_BB_TIPS, MAC_SURGERY, MAC_PELVIC_SIDE],
    quiz: {
      question: "Does surgery for vulval cancer usually cause long term bladder or bowel problems?",
      options: [{ text: "No, not usually", right: true }, { text: "Yes, almost always" }, { text: "Only bowel problems" }],
      why: "Surgery for vulval cancer does not usually cause long term bladder or bowel problems.",
    },
  },
  {
    id: "vul-relationships",
    kicker: "Sex and intimacy",
    question: "How can I feel close again after treatment, and who can I talk to?",
    hook: "Treatment touched one of the most private parts of the body. Feelings, sensation and sex can all change, and there are gentle ways back to closeness.",
    short: "Your surgeon will usually advise not to have sex for at least 6 weeks after your operation, and many people need longer before they feel ready. Sex can feel different, especially if the clitoris was removed, and scarring or radiotherapy can make the vagina tighter, but there is help, from dilators and lubricants to sex therapists. Your cancer doctor or nurse can help, so try not to feel embarrassed to ask.",
    sections: [
      {
        heading: "Looking for the first time",
        paragraphs: [
          "Some people choose to look at the vulval area soon after surgery, while others prefer to wait. There is no right or wrong way, it is important that you feel ready, and your nurse can be with you the first time you do this.",
          "To start with, you will have some bruising and swelling around the vulva, which should slowly get better. Some types of surgery change how the vulva looks long term, and a nurse can explain what to expect.",
        ],
      },
      {
        heading: "When you feel ready for sex",
        paragraphs: [
          "Your surgeon will usually advise not to have sex for at least 6 weeks after your operation. This gives your wound time to heal properly, but you may need time before you feel ready, especially if you are having other treatments as well.",
          "You may not feel like having sexual intercourse for some time. But you can still enjoy intimacy with touch and talking to your partner.",
          "Focusing on non-sexual intimacy, such as holding hands, hugging, kissing or giving each other a massage, can help you feel close. This intimacy can help you slowly get back to having sex again.",
        ],
      },
      {
        heading: "How sex may feel",
        paragraphs: [
          "If the clitoris was removed at the time of surgery, sex can feel different, and it may be more difficult to orgasm. Women who have had this type of treatment say orgasm is possible, even if the clitoris has been removed, but may take longer.",
          "You may notice numbness in your genital area, because of nerve damage during surgery. Nerves do heal, but very slowly, so the feeling may only start to come back months after your surgery.",
          "Take time to explore and touch your body, to find what feels different and what feels good now. If you have a partner, it can help to explain how you are feeling and how things have changed.",
        ],
      },
      {
        heading: "Tightness, dryness and dilators",
        paragraphs: [
          "Surgery and radiotherapy can cause scarring, which can make the vagina tighter, and you may also have vaginal dryness. Both can make sex uncomfortable or even painful, so talk to your doctor or nurse if this happens.",
          "Your doctor or nurse may give you vaginal dilators, smooth cone shaped objects used with a water soluble lubricating gel, and explain how to use them. You may have slight bleeding or spotting when you start, which is normal. Do not continue if you have heavy bleeding or pain, and let your nurse or doctor know. Dilators are often used, but there is no strong evidence about how effective they are, and your cancer team will explain how to use them safely.",
          "Lubricants, vaginal moisturisers and, if you have had the menopause, vaginal oestrogen may help with dryness. Vaginal oestrogen is not suitable for everyone or after some types of cancer, so your cancer team can tell you whether it is right for you.",
        ],
      },
      {
        heading: "Body image and support",
        paragraphs: [
          "As you have had surgery on a very intimate part of your body, you may feel less attractive or sexual, or embarrassed about how your genital area looks now. It is common to feel less feminine after this type of treatment, and it may help to realise that other women who have been through the same thing feel the same way.",
          "If difficulties with your sex life do not improve, talk to your cancer doctor, specialist nurse or GP. They are used to giving advice on intimate problems, and can refer you to a psychosexual therapist or counsellor if needed.",
        ],
      },
    ],
    helps: [
      "Wait until your wound has healed, usually at least 6 weeks, before having sex.",
      "Enjoy closeness through touch, hugging and talking while you are not ready for sex.",
      "Tell your doctor or nurse if sex is painful or the entrance to the vagina feels tight.",
      "Use dilators as your nurse explains, and stop and tell them if there is heavy bleeding or pain.",
      "Use a lubricant if your vagina feels dry.",
      "Ask about a psychosexual therapist or counsellor if difficulties do not improve.",
    ],
    tryThisWeek: [
      "Take closeness slowly.",
      "Use lubricant for dryness.",
      "Ask about a sex therapist.",
    ],
    ask: "Who can I talk to about sex and intimacy, and could dilators or a sex therapist help me?",
    interactive: {
      kind: "scenarios",
      title: "Closeness, step by step",
      scenarios: [
        {
          id: "looking",
          situation: "You are not sure whether to look at the area yet.",
          options: [{ text: "Wait until you feel ready, perhaps with your nurse", best: true }, { text: "Make yourself look straight away" }],
          why: "There is no right or wrong way, it is important that you feel ready, and your nurse can be with you the first time you do this.",
        },
        {
          id: "not-ready",
          situation: "Your partner wants to be close, but you are not ready for sex.",
          options: [{ text: "Enjoy touch and talking for now", best: true }, { text: "Push yourself to have sex" }],
          why: "But you can still enjoy intimacy with touch and talking to your partner.",
        },
        {
          id: "dilator",
          situation: "Using a dilator causes heavy bleeding.",
          options: [{ text: "Stop and tell your nurse or doctor", best: true }, { text: "Carry on through it" }],
          why: "Do not continue if you have heavy bleeding or pain, and let your nurse or doctor know.",
        },
        {
          id: "painful",
          situation: "Months on, sex is still painful.",
          options: [{ text: "Talk to your cancer doctor, nurse or GP", best: true }, { text: "Put up with it" }],
          why: "If difficulties with your sex life do not improve, talk to your cancer doctor, specialist nurse or GP.",
        },
      ],
    },
    sources: [MAC_AFTER_SURGERY, CRUK_AFTER_TREATMENT, CRUK_PROBLEMS, MAC_VAGINAL, MAC_BODY_IMAGE, MAC_VULVAL],
    quiz: {
      question: "How long does your surgeon usually advise waiting before having sex?",
      options: [{ text: "At least 6 weeks", right: true }, { text: "2 days" }, { text: "A full year" }],
      why: "Your surgeon will usually advise not to have sex for at least 6 weeks after your operation.",
    },
  },
  {
    id: "vul-self-checks",
    kicker: "Self-checks",
    question: "How do I check myself between appointments?",
    hook: "A mirror, good light and a few calm minutes. Knowing what is normal for you makes any change easier to spot.",
    short: "Your doctor may suggest that you examine your vulva routinely, which is called self examination. Sit comfortably with a mirror in a well-lit room, and look and feel over the whole area, from the pubic mound to the anus, for anything that is not normal for you. If you notice a change, contact your doctor or specialist nurse; you do not have to wait for your next appointment.",
    sections: [
      {
        heading: "Why check",
        paragraphs: [
          "Your doctor may suggest that you examine yourself routinely between follow-up appointments. This is called self examination.",
          "Everyone's vulva is unique, which is why it is important to know what is normal for you, so that any changes are easier to spot. The Eve Appeal encourages people to check their vulva once a month.",
          "Lifelong regular self-examination is important for all females who have had genital lichen sclerosus.",
        ],
      },
      {
        heading: "How to check",
        paragraphs: [
          "Wash your hands, then sit comfortably with a mirror in a well-lit room, or use a torch. Place the mirror between your legs.",
          "Examine the whole area from the pubic mound to the anal opening, including the inner and outer lips, the clitoris and the vaginal opening. Start on the outside, then open the labia, and look and feel for any pain, soreness, lumps, rashes or changes to your skin.",
          "Another way is to put a magnifying make-up mirror on a closed toilet seat, and stand over the toilet with a leg on either side.",
        ],
      },
      {
        heading: "What to look for",
        paragraphs: [
          "Look over each area for anything that seems abnormal for you, then feel each area for lumps under the surface, which you might not be able to see. Check for lumps, bumps, warts or sores, and for changes in skin colour, such as areas that are red, irritated, white or darkly coloured.",
          "Other changes to look out for include a persistent itch, pain or soreness, thickened or raised patches, a new mole or a mole that is changing shape or colour, and bleeding. Red, white or dark patches may be harder to see on brown or black skin.",
        ],
      },
      {
        heading: "If you notice a change",
        paragraphs: [
          "Contact your doctor or specialist nurse if you notice any new symptoms. You do not have to wait until your next visit.",
          "There are other conditions that are not cancer that can cause some of these symptoms, and it is important these are also diagnosed early so they can be treated. Try not to be embarrassed: the GP will be used to talking about these symptoms.",
          "The Ask Eve nurses give free information about gynaecological health on 0808 802 0019, and there is no question too big, too small or too embarrassing.",
        ],
      },
    ],
    helps: [
      "Check your vulva once a month, with a mirror in a well-lit room.",
      "Look over each area first, then feel each area for lumps under the surface.",
      "Contact your doctor or specialist nurse about any new change; you do not have to wait.",
      "Call the Ask Eve nurses free on 0808 802 0019 with any questions.",
    ],
    tryThisWeek: [
      "Check once a month with a mirror.",
      "Look, then feel for lumps.",
      "Report changes without waiting.",
    ],
    ask: "Should I check myself between appointments, and what should I look for in my case?",
    interactive: {
      kind: "signs",
      title: "Changes worth reporting",
      intro: "Tick anything you noticed when checking. They make a list to share with your doctor or nurse.",
      signs: ["A lump, bump or wart", "A sore or ulcer", "Red, white or dark patches", "Thickened or raised skin", "A persistent itch", "Pain or soreness", "A mole changing shape or colour", "Bleeding", "A lump or swelling in the groin"],
      after: "Contact your doctor or specialist nurse. You do not have to wait until your next visit.",
      copyHeading: "Changes I noticed when checking",
    },
    sources: [CRUK_SYMPTOMS, EVE_CHECK, CRUK_FOLLOW_UP, BAD_LS, NHS_SYMPTOMS, EVE_ASK],
    quiz: {
      question: "Why is it important to know what is normal for you?",
      options: [{ text: "So that any changes are easier to spot", right: true }, { text: "So you can skip follow-up" }, { text: "So you can treat changes yourself" }],
      why: "Everyone's vulva is unique, which is why it is important to know what is normal for you, so that any changes are easier to spot.",
    },
  },
  {
    id: "vul-work",
    kicker: "Work and everyday life",
    question: "How do I manage work and everyday life while I recover?",
    hook: "Sitting, driving, lifting and long days can all feel different for a while. The law, your employer and a few practical changes can make the return easier.",
    short: "Allow time to recover: after major surgery, avoid lifting heavy objects for at least 6 to 8 weeks, and you can usually start driving after about 6 weeks, after checking with your doctor or nurse and your insurer. If you have had cancer, the law considers this a disability, so your employer must consider reasonable adjustments such as a phased return. Get advice before your hours or income change, because returning to work can change the benefits you get.",
    sections: [
      {
        heading: "Everyday life while you heal",
        paragraphs: [
          "When you go home, you will need to rest for a few weeks, but it is important to keep moving. If you had lymph nodes removed from the groin, you may find some movements uncomfortable, such as walking or getting into a bath, and this will get easier as your wounds heal.",
          "You may find it better to lie propped up on your side rather than try to sit, and an air cushion can make sitting more comfortable. Skirts may be more comfortable than trousers, and if you do wear trousers, make sure they are not too tight.",
        ],
      },
      {
        heading: "Lifting and driving",
        paragraphs: [
          "If you had major surgery, it is very important not to lift any heavy objects for at least 6 to 8 weeks, to let the skin heal completely.",
          "You can usually start driving after about 6 weeks. Always check with your doctor or nurse and your car insurance provider before driving, as they may want you to wait longer.",
        ],
      },
      {
        heading: "Your rights at work",
        paragraphs: [
          "If you have or have ever had cancer, the law considers this a disability. This means you cannot be treated less favourably because you have cancer, or for reasons connected to it.",
          "If your employer is aware you have had cancer, they must consider making reasonable adjustments to help you return to work. These could include a phased return, different working hours, extra breaks to help you cope with tiredness or a parking space near your work.",
          "Discuss any adjustments with your employer and agree on them before they are put in place. It can be helpful to write notes in your meetings, or to take someone with you.",
        ],
      },
      {
        heading: "Planning your return",
        paragraphs: [
          "Returning to work can help you feel like you are getting back to normal, but it can be a big step and is not right for everyone. If you can, plan to return to work gradually, and try to stay flexible, because your recovery may not always be straightforward.",
          "If you have late effects after cancer treatment, you may find working more difficult. Some people change the type of work they do or the way they work.",
        ],
      },
      {
        heading: "Money and help with costs",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition. It could give you a grant for things like specialist equipment or the cost of travelling to work if you cannot use public transport, and it will not pay for reasonable adjustments.",
          "Returning to work can change the benefits you get, so it is important to get advice from an experienced benefits adviser. Macmillan's welfare rights advisers can be reached free on 0808 808 0000, and many hospitals have a social worker for people with cancer.",
        ],
      },
    ],
    helps: [
      "Keep moving at home while you rest for a few weeks.",
      "Use an air cushion, or lie propped up on your side, if sitting is uncomfortable.",
      "Check with your doctor or nurse and your insurer before you drive again.",
      "Discuss and agree reasonable adjustments, such as a phased return or extra breaks, with your employer.",
      "Check whether Access to Work could help with equipment or travel costs.",
      "Get advice from an experienced benefits adviser before your hours or income change.",
    ],
    tryThisWeek: [
      "Try an air cushion for sitting.",
      "Ask about a phased return.",
      "Check Access to Work.",
    ],
    ask: "When might I be ready to drive and go back to work, and what should I avoid at first?",
    interactive: {
      kind: "scenarios",
      title: "Back to everyday life",
      scenarios: [
        {
          id: "sitting",
          situation: "Sitting at your desk is uncomfortable while you heal.",
          options: [{ text: "Try an air cushion", best: true }, { text: "Sit on a hard chair and push through" }],
          why: "You may find it better to lie propped up on your side rather than try to sit, and an air cushion can make sitting more comfortable.",
        },
        {
          id: "driving",
          situation: "It is five weeks since your operation, and you want to drive to work.",
          options: [{ text: "Check with your doctor or nurse and your insurer first", best: true }, { text: "Drive as soon as you feel able" }],
          why: "Always check with your doctor or nurse and your car insurance provider before driving, as they may want you to wait longer.",
        },
        {
          id: "hours",
          situation: "Your manager asks when you can be back on full hours.",
          options: [{ text: "Ask about a phased return", best: true }, { text: "Go straight back to full hours" }],
          why: "These could include a phased return, different working hours, extra breaks to help you cope with tiredness or a parking space near your work.",
        },
        {
          id: "benefits",
          situation: "Going back part time might change your benefits.",
          options: [{ text: "Talk to an experienced benefits adviser first", best: true }, { text: "Go back and hope for the best" }],
          why: "Returning to work can change the benefits you get, so it is important to get advice from an experienced benefits adviser.",
        },
      ],
    },
    sources: [MAC_WORK, GOV_ATW, MAC_AFTER_SURGERY, CRUK_AFTER_SURGERY, CRUK_COPING, CRUK_CARING, MAC_LATE],
    quiz: {
      question: "How does the law treat having had cancer, at work?",
      options: [{ text: "As a disability", right: true }, { text: "As a private matter employers can ignore" }, { text: "As a short illness only" }],
      why: "If you have or have ever had cancer, the law considers this a disability.",
    },
  },
  {
    id: "vul-mood",
    kicker: "Mood",
    question: "Why do I feel low now treatment has ended, and where can I get help?",
    hook: "The end of treatment can bring relief and, at the same time, a heavy low. It is common, it often eases, and help is there if it does not.",
    short: "When treatment ends, you may feel relieved, but you may still have side effects and other emotions to cope with, and treatment to such a private part of the body can affect your self confidence. For most people, periods of sadness get better, but if negative feelings do not go, you may be becoming depressed, which is a real illness that can be treated. Talk to your doctor or specialist nurse, and if you need help now, call 111 and select the mental health option, or Samaritans on 116 123.",
    sections: [
      {
        heading: "Why the end can be hard",
        paragraphs: [
          "When your treatment ends, you may feel relieved, but you may still have side effects from treatment and other emotions to cope with. You will need time to find out what is now normal for you.",
          "The vulval and genital areas are private parts of your body, and you may find it very difficult to talk about how you are feeling. It can affect your self confidence, and you may need time to come to terms with the changes that treatment brings.",
          "Even after treatment, people may expect you to get back to normal straight away, and may not know that you still need support.",
        ],
      },
      {
        heading: "Worry about it coming back",
        paragraphs: [
          "Worrying about the cancer coming back is common after treatment, and it is common to worry that every symptom is linked to cancer. Many people struggle with feelings of uncertainty, but they often get better with time.",
          "Focusing on what you can control may help, such as your well-being, talking about your feelings and doing activities you enjoy. If you are feeling worried or finding it difficult to cope, talk to your cancer team, GP or practice nurse.",
        ],
      },
      {
        heading: "Talking to people",
        paragraphs: [
          "You may feel isolated, or embarrassed about having cancer in an intimate area, but talking to your friends and relatives can help and support you. It sometimes helps to speak to women who have had similar treatment, and your doctor or nurse may be able to put you in touch with someone.",
          "You can talk things through with the Cancer Research UK information nurses on freephone 0808 800 4040, 9am to 5pm, Monday to Friday. The Macmillan Support Line is free on 0808 808 00 00, 7 days a week, 8am to 8pm.",
        ],
      },
      {
        heading: "Low mood or depression?",
        paragraphs: [
          "Feeling sad is a natural reaction to change or loss, and for most people these periods of sadness get better. If negative feelings do not go, you may be becoming depressed, and counselling may help or your doctor might suggest a course of antidepressants.",
          "Depression is more than simply feeling unhappy or fed up for a few days: you feel persistently sad for weeks or months. It is a real illness, not a sign of weakness, and with the right treatment and support, most people with depression can make a full recovery.",
          "If you think you may be depressed, seek help from a GP: it is best not to delay.",
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
      "Tell your doctor or specialist nurse if you are not feeling better or begin to feel very low.",
      "Ask about counselling, or about talking to someone who has had similar treatment.",
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
      signs: ["Feeling sad for weeks or months", "Feeling hopeless", "Losing interest in things you used to enjoy", "Feeling very tearful", "Feeling constantly tired or sleeping badly", "No appetite or sex drive", "Losing confidence in your body", "Avoiding people a lot of the time", "Constantly checking for symptoms", "Feeling that life is no longer worth living"],
      after: "Tell your GP, cancer doctor or nurse. For urgent help, call 111 and select the mental health option, or Samaritans on 116 123. Call 999 if a life is at risk.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_FINISHING, CRUK_AFTER_TREATMENT, MAC_EMOTIONS, MAC_WORRIES, NHS_DEPRESSION, NHS_URGENT, SAMARITANS, CRUK_COPING, MAC_AFTER_SURGERY],
    quiz: {
      question: "Which is true about depression?",
      options: [{ text: "With the right treatment and support, most people recover", right: true }, { text: "It is a sign of weakness" }, { text: "It always passes in a few days" }],
      why: "It is a real illness, not a sign of weakness, and with the right treatment and support, most people with depression can make a full recovery.",
    },
  },
];
