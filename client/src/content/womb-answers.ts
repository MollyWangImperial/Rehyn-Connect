import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Womb (endometrial) cancer page's pieces
// (content/library-conditions/cancer-more.ts, `wombCancer`). Every sentence was written from wording checked
// on 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do
// not say. Most of it comes from Macmillan Cancer Support, Cancer Research UK, the NHS and The Eve Appeal,
// with Samaritans for the mood answer. The answers describe treatment, recovery and living with after-effects;
// there are no survival or life-expectancy figures, and nothing is a prediction for one person. Emergency
// advice (infection during chemotherapy, blood clots, heavy discharge after surgery, cellulitis) is given as
// the sources state it. The mood answer follows safe-messaging guidance and gives the crisis routes exactly
// as the NHS and Samaritans state them. General information only; it never replaces what a person's own
// cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/womb-cancer/${path}` });

const NHS_TREAT = nhs("Womb (uterus) cancer: treatment", "conditions/womb-cancer/treatment/");
const NHS_TESTS = nhs("Womb (uterus) cancer: tests and next steps", "conditions/womb-cancer/tests-and-next-steps/");
const NHS_SYMPTOMS = nhs("Womb (uterus) cancer: symptoms", "conditions/womb-cancer/symptoms/");
const NHS_CAUSES = nhs("Womb (uterus) cancer: causes", "conditions/womb-cancer/causes/");
const NHS_HYST_RECOVERY = nhs("Hysterectomy: recovery", "tests-and-treatments/hysterectomy/recovery/");
const NHS_HYST_RISKS = nhs("Hysterectomy: complications", "tests-and-treatments/hysterectomy/risks/");
const NHS_LYMPH = nhs("Lymphoedema", "conditions/lymphoedema/");
const NHS_LYMPH_PREVENT = nhs("Lymphoedema: prevention", "conditions/lymphoedema/prevention/");
const NHS_LYMPH_TREAT = nhs("Lymphoedema: treatment", "conditions/lymphoedema/treatment/");
const NHS_CELLULITIS = nhs("Cellulitis", "conditions/cellulitis/");
const NHS_RADIO_SE = nhs("Radiotherapy: side effects", "tests-and-treatments/radiotherapy/side-effects/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const MAC_WOMB = mac("Womb cancer", "womb-cancer");
const MAC_HYST = mac("Hysterectomy for womb cancer", "treatments-and-drugs/hysterectomy-for-womb-cancer");
const MAC_RECOVER = mac("Recovering from womb cancer surgery", "womb-cancer/recovering-from-womb-cancer-surgery");
const MAC_RADIO = mac("Radiotherapy for womb cancer", "treatments-and-drugs/radiotherapy-for-womb-cancer");
const MAC_CHEMO = mac("Chemotherapy for womb cancer", "treatments-and-drugs/chemotherapy-for-womb-cancer");
const MAC_HORMONAL = mac("Hormonal therapy for womb cancer", "treatments-and-drugs/hormonal-therapy-for-womb-cancer");
const MAC_TARGETED = mac("Targeted therapy and immunotherapy for womb cancer", "treatments-and-drugs/targeted-therapy-and-immunotherapy-for-womb-cancer");
const MAC_STAGES = mac("Staging and grading of womb cancer", "womb-cancer/womb-cancer-stages");
const MAC_CAUSES = mac("Causes and risk factors of womb cancer", "womb-cancer/womb-cancer-causes");
const MAC_LYNCH = mac("Lynch syndrome (LS)", "worried-about-cancer/causes-and-risk-factors/lynch-syndrome-ls");
const MAC_MENOPAUSE = mac("Menopausal symptoms and cancer treatment", "impacts-of-cancer/menopausal-symptoms-and-cancer-treatment");
const MAC_LYMPH = mac("Lymphoedema", "impacts-of-cancer/lymphoedema");
const MAC_ACTIVE = mac("Being physically active after treatment", "after-treatment/being-physically-active");
const MAC_FOLLOW = mac("Follow-up care after cancer treatment", "after-treatment/follow-up-care-after-treatment");
const MAC_FINISH = mac("Finishing cancer treatment", "after-treatment/finishing-treatment");
const MAC_LATE = mac("Late effects of pelvic radiotherapy", "treatment/types-of-treatment/radiotherapy/pelvic-radiotherapy/late-effects-of-pelvic-radiotherapy");
const MAC_TIPS = mac("Tips for coping with bladder or bowel changes", "treatment/types-of-treatment/radiotherapy/pelvic-radiotherapy/tips-for-coping-with-bladder-or-bowel-changes");
const MAC_PELVIC_FLOOR = mac("Pelvic floor exercises", "impacts-of-cancer/pelvic-floor-exercises");
const MAC_SEX = mac("Sex and cancer", "impacts-of-cancer/sex-and-cancer");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");
const MAC_EMOTIONS = mac("Cancer and your emotions", "treatment/coping-with-treatment/cancer-and-your-emotions");

const CRUK_STAGES = cruk("Stages of womb cancer", "stages-types-grades/stages");
const CRUK_TYPES = cruk("Types and grades of womb cancer", "stages-types-grades/types-grades");
const CRUK_FOLLOW = cruk("Follow up after treatment for womb cancer", "treatment/follow-up");
const CRUK_AFTER_SURGERY = cruk("After surgery for womb cancer", "treatment/surgery/after-surgery");
const CRUK_PROBLEMS = cruk("Problems after womb cancer surgery", "treatment/surgery/problems-after");
const CRUK_RADIO_SE = cruk("Side effects of womb cancer radiotherapy", "treatment/radiotherapy/side-effects-radiotherapy");
const CRUK_CHEMO = cruk("Chemotherapy for womb cancer", "treatment/chemotherapy");
const CRUK_SEX = cruk("Sex and relationships and womb cancer", "living-with/sex-relationships");
const CRUK_COPING = cruk("Coping with womb cancer", "living-with/coping");

const EVE_WOMB: LearnSource = { label: "The Eve Appeal: Womb cancer", url: "https://eveappeal.org.uk/information-and-advice/gynaecological-cancers/womb-cancer/" };
const EVE_LYNCH: LearnSource = { label: "The Eve Appeal: Lynch syndrome", url: "https://eveappeal.org.uk/resource/lynch-syndrome/" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const wombAnswers: LearnArticle[] = [
  {
    id: "wb-what-you-had",
    kicker: "Understanding",
    question: "What treatment did I have for womb cancer, and why?",
    hook: "Surgery comes first for most people. What it shows decides whether anything else follows.",
    short: "Surgery is often the main treatment for womb cancer, usually removing the womb, cervix, fallopian tubes and ovaries. What the operation shows about the type, stage, grade and risk group helps your doctor decide if radiotherapy or chemotherapy afterwards might help. Hormonal therapy, targeted therapy and immunotherapy are mostly used if the cancer has come back or spread.",
    sections: [
      {
        heading: "Surgery, usually first",
        paragraphs: [
          "Surgery is often the main treatment for womb cancer, especially if the cancer is found early. The usual operation removes the womb, cervix, fallopian tubes and ovaries. This is called a total hysterectomy and bilateral salpingo-oophorectomy, or BSO.",
          "Your surgeon may also have checked or removed lymph nodes close to the womb, or higher up in the tummy. Sometimes only the 1 or 2 nodes closest to the cancer are removed, which is called a sentinel lymph node biopsy. If the cancer is found early, you may only need surgery.",
        ],
      },
      {
        heading: "What the operation showed",
        paragraphs: [
          "After surgery, the surgeon can tell you more about the type, stage and grade of the cancer. It can take about 2 to 3 weeks to get the test results back.",
          "Your cancer doctor looks at the type, stage, grade, genetic changes and risk group of the cancer to decide if more treatment might help. Treatment after surgery to reduce the risk of the cancer coming back is called adjuvant treatment.",
        ],
      },
      {
        heading: "Radiotherapy",
        paragraphs: [
          "You may have had radiotherapy after surgery, to reduce the risk of the cancer coming back. External beam radiotherapy is given from outside the body by a machine, once a day from Monday to Friday. A full course may last up to 5 to 6 weeks.",
          "Internal radiotherapy, called brachytherapy, gives a high dose of radiotherapy directly to the top of the vagina. You may have it on its own, or at the end of external radiotherapy. Radiotherapy can also be the main treatment if you cannot have surgery.",
        ],
      },
      {
        heading: "Chemotherapy, and the newer drugs",
        paragraphs: [
          "Chemotherapy is used for womb cancer to reduce the risk of it coming back after surgery or radiotherapy. If you had chemotherapy after surgery, it was most likely a combination of 2 drugs called carboplatin and paclitaxel.",
          "Contact your hospital advice line immediately if you have signs of infection during chemotherapy. These include a temperature above 37 and a half degrees or below 36 degrees, or generally feeling unwell. Infections can make you very unwell very quickly.",
          "Hormonal therapy, targeted therapy and immunotherapy are mostly used if womb cancer has come back or spread. Immunotherapy can sometimes cause inflammation weeks, months or even more than a year after it finishes. Your cancer doctor or specialist nurse can tell you more.",
        ],
      },
      {
        heading: "Your team after treatment",
        paragraphs: [
          "A team of specialists meets to discuss the best treatment for you, called a multidisciplinary team or MDT. If you have any symptoms or side effects that you are worried about, talk to your specialists. You do not need to wait for your next check-up.",
          "Macmillan has a free helpline open every day from 8am to 8pm, on 0808 808 0000.",
        ],
      },
    ],
    helps: [
      "Ask your surgeon or nurse what the operation showed about the type, stage and grade of the cancer.",
      "Talk to your specialists about any symptoms or side effects that worry you, without waiting for your next check-up.",
      "During chemotherapy, contact your hospital advice line immediately if you have signs of infection.",
      "Always tell your doctor or nurse about any side effects you have.",
      "Call the Macmillan helpline free on 0808 808 0000, every day from 8am to 8pm.",
    ],
    tryThisWeek: [
      "Ask what the operation showed.",
      "Note side effects to mention.",
      "Save the Macmillan helpline number.",
    ],
    ask: "Which treatments did I have, and why did I need anything after surgery?",
    interactive: {
      kind: "flip-cards",
      title: "Each treatment, explained",
      intro: "Turn a card to see what each treatment for womb cancer does.",
      cards: [
        { id: "surgery", front: "Hysterectomy and BSO", when: "Usually the first treatment", back: "Removes the womb, cervix, fallopian tubes and ovaries. Nearby lymph nodes may be checked too." },
        { id: "external", front: "External beam radiotherapy", when: "Often after surgery", back: "A machine aims high-energy rays at the pelvis, once a day from Monday to Friday, for up to 5 to 6 weeks." },
        { id: "brachy", front: "Brachytherapy", when: "Alone or after external radiotherapy", back: "Internal radiotherapy given directly to the top of the vagina, usually as an outpatient." },
        { id: "chemo", front: "Chemotherapy", when: "After surgery, or if it has spread", back: "Often carboplatin and paclitaxel together, into a vein, to reduce the risk of the cancer coming back." },
        { id: "hormonal", front: "Hormonal therapy", when: "If it is advanced or has come back", back: "Usually progesterone tablets, to help shrink the cancer and control symptoms." },
        { id: "immuno", front: "Targeted therapy and immunotherapy", when: "If the cancer has come back or spread", back: "Drugs such as lenvatinib, pembrolizumab or dostarlimab, which attack cancer cells or help the immune system find them." },
      ],
    },
    sources: [NHS_TREAT, MAC_WOMB, MAC_HYST, MAC_RADIO, MAC_CHEMO, CRUK_CHEMO, MAC_HORMONAL, MAC_TARGETED, EVE_WOMB],
    quiz: {
      question: "How long can it take to get test results back after womb cancer surgery?",
      options: [{ text: "About 2 to 3 weeks", right: true }, { text: "The same day" }, { text: "About 6 months" }],
      why: "It can take about 2 to 3 weeks to get the test results back.",
    },
  },
  {
    id: "wb-stage",
    kicker: "Your results",
    question: "What do the stage, grade and type of my womb cancer mean?",
    hook: "Three different words on your results, each answering a different question about the cancer.",
    short: "The stage describes how big the cancer is and whether it has spread, from stage 1 (contained in the womb) to stage 4. The grade describes how the cells look under a microscope, from grade 1 to grade 3. Doctors combine these with the type of cell and gene changes in the cancer to describe a risk group, which helps them decide on treatment.",
    sections: [
      {
        heading: "Three different things",
        paragraphs: [
          "The stage describes how big the cancer is and whether it has spread. The grade describes how the cancer cells look under a microscope, which gives an idea of how quickly the cancer might grow or spread.",
          "Knowing the stage and grade helps your doctors plan the best treatment for you. They can usually be confirmed after surgery.",
        ],
      },
      {
        heading: "The four stages",
        paragraphs: [
          "Stage 1 means the cancer is contained in the womb. In stage 1A it is only in the lining or has grown less than halfway into the muscle, and in stage 1B it has grown halfway or more into the muscle wall.",
          "Stage 2 means the cancer has spread to the cervix, the neck of the womb. Stage 3 means it has spread outside the womb but not beyond the pelvis. Stage 4 means it has spread to other organs, such as the bowel, bladder, lungs, liver or bones.",
          "Your doctor may call stages 1 and 2 early stage womb cancer. In 2023 a new staging system was developed that also looks at the grade and specific changes in the cancer cells, so you may be given both an old and a new stage.",
        ],
      },
      {
        heading: "Grade 1, 2 or 3",
        paragraphs: [
          "Grade 1, or low grade, cells look like normal cells, usually grow slowly and are less likely to spread. Grade 2 cells look more abnormal. Grade 3, or high grade, cells look very different from normal cells and may grow more quickly.",
        ],
      },
      {
        heading: "The type of cell",
        paragraphs: [
          "Most womb cancers start in the lining of the womb, the endometrium, and are called endometrial cancers. The most common kind is endometrioid adenocarcinoma, which is often diagnosed at an early stage.",
          "Doctors sometimes describe type 1 and type 2 cancers. Type 1 cancers are usually slow growing and linked to excess oestrogen. Type 2 cancers, such as serous and clear cell carcinomas, are always high grade and usually grow more quickly.",
          "Sarcomas of the womb start in the muscle layer instead of the lining, and they are treated differently.",
        ],
      },
      {
        heading: "Gene changes and risk groups",
        paragraphs: [
          "A pathologist also looks for specific changes in the cancer cells, called molecular classification. The cancer is put into one of 4 groups: POLE, MMR, NSMP or p53.",
          "Doctors then combine the type, stage, grade and molecular group to describe a risk group, from low to high risk. The risk group helps them decide what treatment may be suitable for you.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse to explain the stage, grade and type in your results.",
      "Ask whether your cancer has a different stage under the new 2023 guidelines.",
      "Ask which molecular group and risk group your cancer is in, and what that means for your treatment.",
      "If waiting for results is worrying, call the Macmillan Support Line on 0808 808 00 00.",
    ],
    tryThisWeek: [
      "Write down your stage and grade.",
      "Ask about your risk group.",
      "Call Macmillan if waiting worries you.",
    ],
    ask: "What were the stage, grade, type and risk group of my cancer, and how did they shape my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "Reading your results",
      intro: "Turn a card to see what each word on your results means.",
      cards: [
        { id: "stage-1", front: "Stage 1", when: "Early stage", back: "The cancer is contained in the womb. 1A: in the lining or less than halfway into the muscle. 1B: halfway or more." },
        { id: "stage-2", front: "Stage 2", when: "Early stage", back: "The cancer has spread to the cervix, the neck of the womb." },
        { id: "stage-3", front: "Stage 3", when: "Locally advanced", back: "The cancer has spread outside the womb but not beyond the pelvis." },
        { id: "stage-4", front: "Stage 4", when: "Spread further", back: "The cancer has spread to other organs, such as the bowel, bladder, lungs, liver or bones." },
        { id: "grade", front: "Grade 1, 2 or 3", when: "How the cells look", back: "Grade 1 cells look like normal cells and grow slowly. Grade 3 cells look very different and may grow more quickly." },
        { id: "group", front: "Molecular group", when: "Gene changes in the cells", back: "POLE, MMR, NSMP or p53. With the grade, it helps doctors choose suitable treatment." },
      ],
    },
    sources: [MAC_STAGES, CRUK_TYPES, CRUK_STAGES, MAC_WOMB, EVE_WOMB],
    quiz: {
      question: "What does the grade of a womb cancer describe?",
      options: [{ text: "How the cells look under a microscope", right: true }, { text: "How far it has spread" }, { text: "Which hospital treated it" }],
      why: "The grade describes how the cancer cells look under a microscope, which gives an idea of how quickly the cancer might grow or spread.",
    },
  },
  {
    id: "wb-follow-up",
    kicker: "Follow-up",
    question: "What happens at my follow-up, and which symptoms should I report?",
    hook: "Check-ups matter, but what you notice in between matters just as much.",
    short: "Follow-up appointments check how you are and give you a chance to raise worries. How often you go depends on the risk of the cancer coming back, and some people lead their own follow-up. Contact your cancer doctor or specialist nurse as soon as possible about new symptoms such as vaginal bleeding, bleeding after sex, ongoing pain, bloating or weight loss.",
    sections: [
      {
        heading: "What check-ups are for",
        paragraphs: [
          "Follow-up appointments check how you are and whether you have any problems or worries. They are also a chance to raise any concerns about your progress.",
          "Your doctor or nurse may examine you, including an internal examination, and ask about symptoms or side effects. Some appointments are by phone or video instead.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Your first check-up is generally about 4 to 6 weeks after treatment finishes. After that, how often you go depends on things like the risk of the cancer coming back and the treatment you had.",
          "If the cancer was low risk, you may have appointments every 6 months for 2 years, then yearly for another 3 years. If it was in a higher-risk group, they may be every 3 months for 3 years, then every 6 months for another 2 years, and may include CT or PET-CT scans.",
        ],
      },
      {
        heading: "Leading your own follow-up",
        paragraphs: [
          "Some people have patient initiated follow-up, sometimes called PIFU. You contact your cancer team when you have a concern, as often as you feel you need to, and your doctor or specialist nurse explains what to be aware of.",
          "Evidence has shown that a doctor's examination alone is unlikely to pick up womb cancer coming back when someone has no symptoms. People themselves find most womb cancers that come back, in between appointments.",
        ],
      },
      {
        heading: "Symptoms to report between appointments",
        paragraphs: [
          "Contact your cancer doctor or specialist nurse as soon as possible if you have any problems or new symptoms between appointments. You do not have to wait until your next visit.",
          "Symptoms to be aware of include any new vaginal bleeding, bleeding after sex, persistent pain in the tummy or pelvis, feeling bloated, and losing weight.",
        ],
      },
      {
        heading: "Your GP and your plan",
        paragraphs: [
          "Your cancer team may give you a treatment summary and send a copy to your GP. A cancer care review with your GP practice is usually done within 12 months of diagnosis, and you can ask for one at any point.",
          "Many people find check-ups worrying, as they can bring back anxiety about the cancer. It can help to tell someone close how you feel, and Macmillan's free helpline is open every day from 8am to 8pm on 0808 808 0000.",
        ],
      },
    ],
    helps: [
      "Contact your cancer doctor or specialist nurse as soon as possible about new symptoms between appointments.",
      "Keep your key worker's contact details in your phone or somewhere safe.",
      "Write down questions before an appointment, and take someone with you.",
      "Ask for a copy of your treatment summary.",
      "Ask your GP practice for a cancer care review if you have not had one.",
      "Tell someone close to you how you are feeling before a check-up.",
    ],
    tryThisWeek: [
      "Save your key worker's number.",
      "List questions for your next check-up.",
      "Ask for your treatment summary.",
    ],
    ask: "Which symptoms should I report between appointments, and who do I call?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your cancer team",
      intro: "Tick any you have noticed since your last appointment. You do not have to wait for your next visit to report them.",
      signs: ["New vaginal bleeding", "Bleeding after sex", "Pain in my tummy or pelvis that will not go away", "Feeling bloated", "Losing weight", "Any other new symptom that worries me"],
      after: "Contact your cancer doctor or specialist nurse as soon as possible if you have any problems or new symptoms in between appointments.",
      copyHeading: "Symptoms to tell my cancer team",
    },
    sources: [MAC_WOMB, CRUK_FOLLOW, NHS_TREAT, MAC_FOLLOW, MAC_FINISH],
    quiz: {
      question: "Who finds most womb cancers that come back?",
      options: [{ text: "People themselves, between appointments", right: true }, { text: "The doctor at a routine examination" }, { text: "A yearly blood test" }],
      why: "People themselves find most womb cancers that come back, in between appointments.",
    },
  },
  {
    id: "wb-lynch",
    kicker: "Genes",
    question: "What is Lynch syndrome, and what does it mean for my family?",
    hook: "A small number of womb cancers run in families. Finding out can help relatives too.",
    short: "Lynch syndrome is a condition that can run in families and raises the risk of bowel, womb and ovarian cancer. Womb cancers are usually tested for signs of it, and if a gene change is found, relatives may be offered a test. Having it does not mean you will get cancer, and screening, aspirin and surgery can lower some risks.",
    sections: [
      {
        heading: "What Lynch syndrome is",
        paragraphs: [
          "Lynch syndrome is a condition that can run in families. People affected by it have a higher risk of bowel, womb and ovarian cancer, and a slightly higher risk of some other cancers.",
          "A small number of womb cancers are caused by gene changes that are passed on in a family. Having Lynch syndrome does not mean you have or will get cancer. It means a raised risk over your lifetime compared with someone without it.",
        ],
      },
      {
        heading: "How it is found",
        paragraphs: [
          "When someone is diagnosed with womb or bowel cancer, a sample of the cancer cells is usually tested. If the results suggest an inherited gene change, the person may be offered a genetic test, and a blood sample is checked.",
          "If your tests show you have Lynch syndrome, you will be referred to a specialist. They can explain what it means for you and your family.",
        ],
      },
      {
        heading: "What it means for your family",
        paragraphs: [
          "If a parent has the gene change, there is a 1 in 2 chance it is passed on to each child. If a change is found, other people in the family may be offered a test for the same change.",
          "Tell the GP if you or your family have any history of cancer or Lynch syndrome. If you are worried about the pattern of cancer in your family, your GP can refer you to a genetics specialist.",
        ],
      },
      {
        heading: "Lowering the risk",
        paragraphs: [
          "People with Lynch syndrome in the UK are offered a colonoscopy every 2 years, from age 25 or 35 depending on the gene. There is currently no effective screening for womb cancer.",
          "Taking aspirin regularly helps prevent bowel cancer in people with Lynch syndrome, but it can have harmful side effects, so ask your doctor for advice. Some people choose surgery to remove the womb or ovaries, which reduces the risk of womb and ovarian cancer.",
          "Your care team will talk with you about what you can do to reduce your cancer risk.",
        ],
      },
      {
        heading: "Support with the uncertainty",
        paragraphs: [
          "Not everyone with Lynch syndrome develops cancer, but the uncertainty of a higher risk can be hard to cope with. Talking to your genetics specialist, doctor or nurse can help, and the Lynch Choices website has information to help with decisions.",
          "Lynch Syndrome UK offers information and support. You can also speak to The Eve Appeal's Ask Eve nurses free on 0808 802 0019.",
        ],
      },
    ],
    helps: [
      "Tell your GP about any history of cancer or Lynch syndrome in your family.",
      "Ask your specialist what your genetic test result means for you and your family.",
      "Keep having bowel screening, unless genetic testing shows you do not have the gene change.",
      "Ask your doctor for advice before taking aspirin.",
      "Contact Lynch Syndrome UK or the Ask Eve nurses for support.",
    ],
    tryThisWeek: [
      "Note your family's cancer history.",
      "Ask about your genetic result.",
      "Look up Lynch Syndrome UK.",
    ],
    ask: "Should I be tested for Lynch syndrome, and should my relatives be offered a test?",
    interactive: {
      kind: "flip-cards",
      title: "Tests and choices with Lynch syndrome",
      intro: "Turn a card to see what each test or choice involves.",
      cards: [
        { id: "tumour", front: "Tests on the cancer cells", when: "After a womb or bowel cancer diagnosis", back: "MSI and IHC tests show whether the cancer may be linked to an inherited gene change." },
        { id: "genetic", front: "Genetic test", when: "If the cancer tests suggest it", back: "A blood sample is checked for the gene changes. Relatives may then be offered a test for the same change." },
        { id: "colonoscopy", front: "Colonoscopy", when: "Every 2 years, from age 25 or 35", back: "Looks inside the large bowel to find and remove polyps and find signs of cancer." },
        { id: "aspirin", front: "Aspirin", when: "Ask your doctor first", back: "Taken regularly, it helps prevent bowel cancer in people with Lynch syndrome, but it can have harmful side effects." },
        { id: "surgery", front: "Risk-reducing surgery", when: "A personal choice", back: "Removing the womb or ovaries, or both, reduces the risk of womb and ovarian cancer, but means you cannot get pregnant." },
      ],
    },
    sources: [MAC_LYNCH, NHS_TESTS, NHS_SYMPTOMS, MAC_CAUSES, EVE_LYNCH, NHS_CAUSES],
    quiz: {
      question: "If a parent has the Lynch syndrome gene change, what is the chance it is passed on to each child?",
      options: [{ text: "1 in 2", right: true }, { text: "1 in 100" }, { text: "Every child inherits it" }],
      why: "If a parent has the gene change, there is a 1 in 2 chance it is passed on to each child.",
    },
  },
  {
    id: "wb-surgery-recovery",
    kicker: "Recovery",
    question: "How do I recover from a hysterectomy for womb cancer?",
    hook: "A few weeks to get back to normal activities, up to three months to feel fully recovered, and a few signs to act on quickly.",
    short: "Most people go back to normal activities after a few weeks, but it can take between 6 weeks and 3 months to fully recover. Rest, gentle exercise and eating well help. Contact your team straight away about signs of infection or heavy, bright red or smelly discharge, and call 999 or go to A&E if you are short of breath, have chest pain or cough up blood.",
    sections: [
      {
        heading: "In hospital and going home",
        paragraphs: [
          "After keyhole or robotic surgery, you can usually go home later the same day or the next day. After open surgery, you can usually go home 2 to 5 days after the operation.",
          "Before you leave, make sure you know who to contact if you have questions. You will be given painkillers to take at home, and you may need compression stockings for a few weeks and blood thinning injections for a while, to help prevent blood clots.",
        ],
      },
      {
        heading: "How long recovery takes",
        paragraphs: [
          "Most people can go back to normal activities after a few weeks, but it can take between 6 weeks and 3 months to fully recover. Recovery may take longer if lymph nodes in the tummy were also removed.",
          "Try to get plenty of rest, do gentle exercise and eat well. It is important not to do too much for a while, and not to lift anything heavy, such as bags of shopping.",
        ],
      },
      {
        heading: "Discharge, wound and infection",
        paragraphs: [
          "You may have some reddish-brown vaginal discharge for up to 6 weeks. Contact your hospital team or call NHS 111 straight away if it becomes bright red, gets heavier, has a bad smell or contains clots.",
          "Signs of a wound infection include heat, pain, swelling or redness around the wound, fluid that may smell, a temperature above 37 and a half degrees, feeling shivery, or feeling generally unwell. If you have any signs of infection, contact your doctor or nurse straight away on the number you have been given.",
        ],
      },
      {
        heading: "Blood clots: know the signs",
        paragraphs: [
          "Let your doctor or nurse know if an area of your leg is swollen, hot, red or sore. This can be a sign of a blood clot.",
          "A clot can travel to the lungs. If you have shortness of breath, chest pain, are coughing up blood or feel dizzy or lightheaded, contact a doctor immediately, call 999 or go to A&E.",
        ],
      },
      {
        heading: "Your body, your feelings",
        paragraphs: [
          "Constipation can happen after surgery, and your nurse can give you laxatives. Some people have numbness or tingling at the top of the legs, which normally gets better in 6 to 12 months.",
          "You may feel weepy or down for a time after surgery. Talk things through with your specialist nurse, who can refer you to a counsellor if you need more help.",
        ],
      },
    ],
    helps: [
      "Make sure you know who to contact before you leave hospital.",
      "Get plenty of rest, do gentle exercise and eat well.",
      "Wear compression stockings and have blood thinning injections for as long as you are told.",
      "Contact your doctor or nurse straight away if you have any signs of infection.",
      "Call 999 or go to A&E if you are short of breath, have chest pain or cough up blood.",
      "Talk to your specialist nurse if you feel weepy or down.",
    ],
    tryThisWeek: [
      "Keep your team's number handy.",
      "Rest, eat well and walk gently.",
      "Mention low feelings to your nurse.",
    ],
    ask: "How long should I avoid lifting and driving, and who do I call if something worries me?",
    interactive: {
      kind: "signs",
      title: "Signs to act on after surgery",
      intro: "Tick any you have. For wound or discharge changes, contact your team straight away.",
      signs: ["Heat, pain, swelling or redness around my wound", "Fluid coming from my wound", "A high temperature or feeling shivery", "Feeling generally unwell", "Discharge that is bright red, heavier or smells bad", "A swollen, hot, red or sore area in my leg", "Shortness of breath or chest pain"],
      after: "If you are short of breath, have chest pain, are coughing up blood or feel dizzy, call 999 or go to A&E. For other signs, contact your doctor or nurse straight away.",
      copyHeading: "Signs I have noticed since my operation",
    },
    sources: [MAC_RECOVER, CRUK_AFTER_SURGERY, NHS_HYST_RECOVERY, CRUK_PROBLEMS],
    quiz: {
      question: "What should you do if vaginal discharge becomes bright red after surgery?",
      options: [{ text: "Contact your hospital team or call NHS 111 straight away", right: true }, { text: "Wait for your next check-up" }, { text: "Use a tampon and see" }],
      why: "Contact your hospital team or call NHS 111 straight away if it becomes bright red, gets heavier, has a bad smell or contains clots.",
    },
  },
  {
    id: "wb-radiotherapy",
    kicker: "Radiotherapy",
    question: "What happens to my body after radiotherapy to the pelvis?",
    hook: "Most side effects settle within weeks. A few can last or start later, and there is help for each one.",
    short: "Side effects of pelvic radiotherapy tend to start a week in and usually begin to improve around 2 weeks after treatment ends. Diarrhoea, bladder irritation, tiredness and vaginal changes are common, and dilators can help prevent narrowing. Some effects last longer or start months or years later; tell your team, as there are usually things that can help.",
    sections: [
      {
        heading: "During and just after treatment",
        paragraphs: [
          "Side effects tend to start a week after radiotherapy begins and gradually get worse during treatment and for a couple of weeks after it ends. They usually begin to improve after around 2 weeks or so.",
          "Diarrhoea is the most common side effect. Try to drink at least 8 to 12 glasses of fluid each day, unless your doctor or nurse tells you something different, and tell your radiotherapy team about any bowel side effects.",
          "Tiredness often gets worse as treatment goes on and can last for weeks or months afterwards. Rest, gentle exercise such as short walks, and help with everyday tasks can all help.",
        ],
      },
      {
        heading: "Bladder and skin",
        paragraphs: [
          "Radiotherapy can irritate the lining of the bladder, so you may need to pee more often, find it hard to wait, or feel burning when you pass urine. Drinking plenty of fluids helps, and your team may ask for a urine sample to check for infection.",
          "The skin in the treatment area may become sore or change colour. Skin reactions should get better within 4 to 6 weeks of treatment ending, and your radiographer can advise you on caring for your skin.",
        ],
      },
      {
        heading: "Vaginal changes and dilators",
        paragraphs: [
          "After pelvic radiotherapy, the vagina can become narrower, shorter and drier. Dilators can help prevent narrowing, so you can still have sex and vaginal examinations comfortably.",
          "You usually start around 4 weeks after radiotherapy ends, gently putting the dilator in for 5 to 10 minutes about 3 times a week. Slight bleeding or spotting afterwards is normal, but contact your doctor or nurse if you have heavy bleeding or pain.",
        ],
      },
      {
        heading: "Late effects",
        paragraphs: [
          "Most side effects improve over a few weeks or months. Sometimes they last longer than 3 months, or start months or even years later. These are called late effects, and common ones include changes to how the bladder or bowel works, changes to your sex life, and tiredness.",
          "Always talk to your doctor about passing blood from your back passage, waking from sleep to open your bowels, needing to rush to open your bowels, or bowel incontinence. Blood in your urine should always be checked as soon as possible, and tell your doctor about any hip or pelvic pain.",
        ],
      },
      {
        heading: "Help is available",
        paragraphs: [
          "Tell your cancer doctor or specialist nurse about side effects that do not go away, or new problems after treatment. You can arrange to see them between appointments, or contact your GP.",
          "A few hospitals have clinics for people with late effects, and the Pelvic Radiation Disease Association has information about support. New symptoms long after treatment still need checking, as they may not be caused by radiotherapy.",
        ],
      },
    ],
    helps: [
      "Tell your radiotherapy team about any side effects, during or after treatment.",
      "Drink plenty of fluids if you have diarrhoea.",
      "Use dilators as your radiotherapy team advises, gently and without forcing.",
      "Contact your doctor or nurse if you have heavy bleeding or pain after using a dilator.",
      "Ask whether there is a late effects clinic near you.",
      "Tell your GP or cancer doctor about any new symptoms long after treatment.",
    ],
    tryThisWeek: [
      "Drink plenty if you have diarrhoea.",
      "Use your dilator as advised.",
      "Ask about a late effects clinic.",
    ],
    ask: "Which late effects should I watch for, and is there a late effects clinic I can be referred to?",
    interactive: {
      kind: "signs",
      title: "Late effects to tell your doctor about",
      intro: "Tick any you have noticed. Each of these needs checking by your doctor.",
      signs: ["Blood from my back passage", "Waking at night to open my bowels", "Needing to rush to open my bowels", "Bowel leakage", "Blood in my urine", "Hip or pelvic pain", "Swelling in one or both legs", "Numbness, tingling or weakness in my legs"],
      after: "Tell your cancer doctor, specialist nurse or GP. You do not have to wait until your next check-up.",
      copyHeading: "Late effects I have noticed",
    },
    sources: [MAC_RADIO, CRUK_RADIO_SE, MAC_LATE, NHS_RADIO_SE],
    quiz: {
      question: "When do you usually start using vaginal dilators?",
      options: [{ text: "Around 4 weeks after radiotherapy ends", right: true }, { text: "On the first day of radiotherapy" }, { text: "Only if sex becomes painful years later" }],
      why: "You usually start around 4 weeks after radiotherapy ends, gently putting the dilator in for 5 to 10 minutes about 3 times a week.",
    },
  },
  {
    id: "wb-menopause",
    kicker: "Menopause",
    question: "Why did treatment bring on the menopause, and what can help?",
    hook: "A sudden menopause can feel more intense than a natural one. HRT is not the only option.",
    short: "If you had not been through the menopause, removing the ovaries or having pelvic radiotherapy brings it on straight away, and the symptoms can be intense. HRT is not usually advised after womb cancer because it contains oestrogen, though some specialists may prescribe it after early stage cancer. Medicines, paced breathing and vaginal creams can help, and looking after your bones matters.",
    sections: [
      {
        heading: "Why it can start suddenly",
        paragraphs: [
          "If you had not been through the menopause, surgery that removes the ovaries causes it straight away. Radiotherapy without surgery does the same, because it stops the ovaries working.",
          "If the cancer was early stage and low grade, it is sometimes possible to keep the ovaries, which can stop an early menopause.",
        ],
      },
      {
        heading: "What you might notice",
        paragraphs: [
          "Symptoms include hot flushes and sweats, vaginal dryness, loss of interest in sex, difficulty sleeping, aches and pains, mood swings and poor concentration. They can be quite intense, because treatment causes a more sudden menopause than a natural one.",
          "Hot flushes are the most common symptom and generally last for about 4 to 5 minutes. You may feel sudden warmth in your face, neck and chest, and your heart may beat faster.",
        ],
      },
      {
        heading: "HRT after womb cancer",
        paragraphs: [
          "Hormone replacement therapy, or HRT, is not usually advised after womb cancer, because it contains oestrogen. Some cancer specialists may prescribe it if the cancer was early stage and you are having menopausal symptoms, or if other things have not helped.",
          "Talk to your doctor about whether you can have HRT. They can talk to you about its risks and benefits.",
        ],
      },
      {
        heading: "Other things that help",
        paragraphs: [
          "Your GP might prescribe medicines such as venlafaxine or citalopram for hot flushes, which usually take 1 to 4 weeks to help. A slow, controlled breathing method called paced respiration can sometimes help too, practised for 15 minutes twice a day.",
          "Non-hormonal vaginal creams and water-based lubricants can help with dryness. Some treatments for vaginal dryness contain a small amount of oestrogen, so ask your cancer doctor whether they are safe for you.",
        ],
      },
      {
        heading: "Looking after bones and heart",
        paragraphs: [
          "An early menopause may increase the risk of bone thinning, called osteoporosis, and heart disease. Regular weight-bearing exercise and plenty of calcium and vitamin D in your diet help look after your bones.",
          "The Daisy Network and Women's Health Concern support people going through the menopause.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor whether HRT could be suitable for you.",
      "Ask your GP about medicines for hot flushes.",
      "Practise paced breathing for 15 minutes, twice a day.",
      "Try non-hormonal vaginal creams or water-based lubricants for dryness.",
      "Do regular weight-bearing exercise and get plenty of calcium and vitamin D.",
    ],
    tryThisWeek: [
      "Ask about HRT and other options.",
      "Practise paced breathing.",
      "Try a water-based lubricant.",
    ],
    ask: "Is HRT an option for me after womb cancer, and if not, what else can help my symptoms?",
    interactive: {
      kind: "signs",
      title: "Menopause symptoms to mention",
      intro: "Tick the symptoms you have. Your cancer doctor, nurse or GP can talk through what may help.",
      signs: ["Hot flushes and sweats", "Vaginal dryness", "Loss of interest in sex", "Difficulty sleeping", "Aches and pains", "Needing to pee more often", "Mood swings", "Poor concentration"],
      after: "There are practical ways to reduce menopausal symptoms, and your cancer doctor can also prescribe drugs or treatments that can help.",
      copyHeading: "My menopause symptoms",
    },
    sources: [MAC_WOMB, MAC_HYST, MAC_MENOPAUSE, CRUK_SEX, NHS_HYST_RISKS],
    quiz: {
      question: "Why is HRT not usually advised after womb cancer?",
      options: [{ text: "Because it contains oestrogen", right: true }, { text: "Because it causes hot flushes" }, { text: "Because it stops the ovaries working" }],
      why: "Hormone replacement therapy, or HRT, is not usually advised after womb cancer, because it contains oestrogen.",
    },
  },
  {
    id: "wb-swelling",
    kicker: "Lymphoedema",
    question: "Why might my legs swell after womb cancer treatment?",
    hook: "Lymphoedema is not common, but it can start years later. Knowing the early signs helps.",
    short: "If lymph nodes in the pelvis were removed, or you had radiotherapy, fluid can build up and swell one or both legs. This is not common and can start months or years later. Report early signs, look after your skin and keep active, and get urgent help if a swollen leg becomes painful, hot and red, as this can be cellulitis.",
    sections: [
      {
        heading: "Why the legs can swell",
        paragraphs: [
          "Lymphoedema is swelling caused by a build-up of lymph fluid in the tissues. If pelvic lymph nodes were removed, there is a risk of it in one or both legs, and the risk is higher if you also had radiotherapy.",
          "It is not common, and it is less likely if only the sentinel lymph nodes were removed. It can develop months or even years after treatment.",
        ],
      },
      {
        heading: "Early signs",
        paragraphs: [
          "Clothes, shoes or jewellery may feel tighter than usual, even before you notice swelling. The leg may feel heavy, tight, full or stiff, or ache, and the skin may feel tight or thicker.",
          "Ask your cancer doctor or specialist nurse for advice as soon as you notice any of these. It is important that lymphoedema is identified and treated as soon as possible, because without treatment it can get worse.",
          "Swelling, aching and redness in the leg can also be signs of a blood clot. Tell your doctor or nurse straight away, and if you cannot speak to them, call NHS 111.",
        ],
      },
      {
        heading: "Lowering the risk",
        paragraphs: [
          "Keep your skin clean and dry, moisturise it every day, and treat cuts and scratches straight away with an antiseptic cream. Insect repellent, shoes that fit well, and not going barefoot all help protect the legs.",
          "Anti-fungal powder can help prevent fungal infections on the feet. Avoid very hot baths and showers, eat a healthy, balanced diet, keep to a healthy weight and exercise regularly.",
        ],
      },
      {
        heading: "If you have lymphoedema",
        paragraphs: [
          "A lymphoedema specialist will assess you and teach you how to manage it yourself. Treatment includes compression garments, skin care, exercise and a specialised massage called manual lymphatic drainage.",
          "There is no cure, but it is usually possible to control the main symptoms. You will usually be advised to raise the leg whenever possible.",
        ],
      },
      {
        heading: "Cellulitis: when to get help fast",
        paragraphs: [
          "Lymphoedema makes skin infections more likely. Cellulitis makes the skin painful, hot and swollen, and you may feel unwell. Ask for an urgent GP appointment or get help from NHS 111 if your skin is painful, hot and swollen.",
          "Call 999 or go to A&E if you have cellulitis with a very high temperature or feel hot, cold or shivery, a fast heartbeat or fast breathing, purple patches on your skin, feel dizzy or faint, are confused, or have cold, clammy or pale skin.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor or specialist nurse for advice as soon as you notice swelling.",
      "Moisturise your skin every day and treat cuts straight away with antiseptic cream.",
      "Wear shoes that fit well and avoid going barefoot.",
      "Keep to a healthy weight and exercise regularly.",
      "Get help from NHS 111 or an urgent GP appointment if your skin is painful, hot and swollen.",
      "Call 999 or go to A&E for cellulitis with a very high temperature, dizziness or confusion.",
    ],
    tryThisWeek: [
      "Moisturise and treat cuts quickly.",
      "Wear shoes that fit well.",
      "Report any swelling early.",
    ],
    ask: "Am I at risk of lymphoedema, and can you refer me to a lymphoedema service if I notice swelling?",
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        {
          id: "tight",
          situation: "Your shoes and trousers feel tighter on one leg than usual.",
          options: [{ text: "Ask your specialist nurse for advice soon", best: true }, { text: "Wait a few months to see" }],
          why: "Ask your cancer doctor or specialist nurse for advice as soon as you notice any of these.",
        },
        {
          id: "cut",
          situation: "You scratch your shin while gardening.",
          options: [{ text: "Clean it and use antiseptic cream", best: true }, { text: "Leave it to heal on its own" }],
          why: "Treat cuts and scratches straight away with an antiseptic cream.",
        },
        {
          id: "hot",
          situation: "Your leg is painful, hot and swollen, but you feel otherwise well.",
          options: [{ text: "Ask for an urgent GP appointment or call NHS 111", best: true }, { text: "Wait and see if it settles" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if your skin is painful, hot and swollen.",
        },
        {
          id: "severe",
          situation: "Your leg is red and swollen, and you feel shivery, dizzy and confused.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Book a routine GP appointment" }],
          why: "Call 999 or go to A&E if you have cellulitis with a very high temperature or feel hot, cold or shivery, feel dizzy or faint, or are confused.",
        },
      ],
    },
    sources: [MAC_RECOVER, MAC_LYMPH, CRUK_PROBLEMS, NHS_LYMPH, NHS_LYMPH_PREVENT, NHS_LYMPH_TREAT, NHS_CELLULITIS, CRUK_RADIO_SE],
    quiz: {
      question: "What can be an early sign of lymphoedema?",
      options: [{ text: "Shoes or clothes feeling tighter than usual", right: true }, { text: "A sore throat" }, { text: "Hair loss" }],
      why: "Clothes, shoes or jewellery may feel tighter than usual, even before you notice swelling.",
    },
  },
  {
    id: "wb-bowels-bladder",
    kicker: "Bladder and bowel",
    question: "Why have my bowel and bladder changed, and what helps?",
    hook: "Some changes after surgery settle quickly. Others after radiotherapy need a plan, and a few always need checking.",
    short: "After a hysterectomy, bowel and bladder changes are usually temporary and easily treated. Pelvic radiotherapy can make you need to pee or open your bowels more often or more urgently, sometimes for a long time. Some bowel symptoms always need checking, and fluids, cutting down irritating drinks, pelvic floor exercises and specialist help can all make a difference.",
    sections: [
      {
        heading: "After surgery",
        paragraphs: [
          "After a hysterectomy there may be some changes in how your bowel and bladder work. Some women develop urine infections or constipation, and both can easily be treated.",
          "Drinking plenty of fluids and eating more fruit and fibre helps. You may need laxatives for the first few bowel movements to avoid straining.",
          "A small number of women have problems emptying the bladder after a hysterectomy, and may need to go home with a catheter for several weeks.",
        ],
      },
      {
        heading: "After radiotherapy",
        paragraphs: [
          "Pelvic radiotherapy can make the bladder less stretchy, so you need to pee more often or more urgently. It can also cause leaking, burning, or blood in the urine.",
          "It can also scar the bowel, so poo may be looser and you may need to go more often and more urgently. Some people only notice small changes, while for others it affects daily life.",
        ],
      },
      {
        heading: "Get these checked",
        paragraphs: [
          "Ongoing bowel symptoms should be checked, as they may not be caused by radiotherapy. Always talk to your doctor about passing blood from your back passage, waking from sleep to open your bowels, needing to rush to open your bowels, or bowel incontinence.",
          "Blood in the urine should always be checked by a doctor as soon as possible.",
        ],
      },
      {
        heading: "Everyday habits that help",
        paragraphs: [
          "Try to drink at least 1 to 2 litres of fluid a day, spread through the day. Cutting down on alcohol, fizzy drinks, caffeine, acidic juices and diet drinks may help. Try not to go to the toilet just in case, as your bladder will not get used to holding more urine.",
          "Pelvic floor exercises help strengthen the muscles that control the bladder and bowel. It takes at least 3 months to strengthen them, so keep doing the exercises regularly.",
          "Before going somewhere new, find out where the toilets are. A Macmillan toilet card and a bag with wipes, pads and a change of clothes can help you feel more confident.",
        ],
      },
      {
        heading: "Specialist help",
        paragraphs: [
          "Talk to your doctor or specialist nurse if you are struggling with bowel or bladder problems after treatment. They can refer you to specialists such as a continence adviser, a gastroenterologist or a physiotherapist.",
          "If you smoke or vape, talk to your GP about help to stop, as it can make bladder and bowel problems worse.",
        ],
      },
    ],
    helps: [
      "Drink plenty of fluids and eat more fruit and fibre after surgery.",
      "Drink at least 1 to 2 litres of fluid a day.",
      "Cut down on alcohol, fizzy drinks, caffeine and acidic drinks.",
      "Do pelvic floor exercises regularly.",
      "Carry a Macmillan toilet card and a bag of supplies when you go out.",
      "Ask your doctor or specialist nurse about a referral if bowel or bladder problems affect your life.",
    ],
    tryThisWeek: [
      "Drink 1 to 2 litres a day.",
      "Cut down one irritating drink.",
      "Start pelvic floor exercises.",
    ],
    ask: "Could my bladder or bowel changes be a late effect of treatment, and can I see a continence adviser?",
    interactive: {
      kind: "risk-check",
      title: "Things that can make symptoms worse",
      intro: "Tick what applies to you. Each one is something you can change.",
      items: [
        { id: "alcohol", label: "Alcohol, especially spirits", note: "Can irritate the bladder or bowel. Water, diluted fruit juice and herbal teas are better choices.", changeable: true },
        { id: "fizzy", label: "Fizzy drinks", note: "Can irritate the bladder or bowel and make symptoms worse.", changeable: true },
        { id: "caffeine", label: "Tea, coffee, cola or cocoa", note: "Caffeine can irritate the bladder or bowel. Try cutting down.", changeable: true },
        { id: "acidic", label: "Orange or grapefruit juice", note: "Acidic drinks can irritate the bladder or bowel.", changeable: true },
        { id: "sweeteners", label: "Diet or light drinks", note: "Drinks with artificial sweeteners can make symptoms worse.", changeable: true },
        { id: "fluids", label: "Not drinking enough", note: "Concentrated urine irritates the bladder. Aim for at least 1 to 2 litres a day.", changeable: true },
        { id: "just-in-case", label: "Going to the toilet just in case", note: "Your bladder will not get used to holding more urine.", changeable: true },
        { id: "smoking", label: "Smoking or vaping", note: "Can make bladder or bowel problems worse. Your GP can help you stop.", changeable: true },
      ],
    },
    sources: [NHS_HYST_RECOVERY, CRUK_PROBLEMS, MAC_LATE, CRUK_RADIO_SE, MAC_TIPS, MAC_PELVIC_FLOOR, CRUK_COPING],
    quiz: {
      question: "Why try not to go to the toilet just in case?",
      options: [{ text: "Your bladder will not get used to holding more urine", right: true }, { text: "It causes constipation" }, { text: "It irritates the skin" }],
      why: "Try not to go to the toilet just in case, as your bladder will not get used to holding more urine.",
    },
  },
  {
    id: "wb-relationships",
    kicker: "Relationships",
    question: "When can I have sex again, and what if it feels different?",
    hook: "Your body needs time to heal, and you may need more time to feel ready. Both are normal.",
    short: "Penetrative sex is usually safe after 6 weeks if your wounds have healed, or up to 12 weeks after keyhole surgery. Surgery, an early menopause and radiotherapy can change how sex feels, and lubricants, creams and dilators can help. Sex cannot pass cancer on or make it come back, and your team are used to talking about it.",
    sections: [
      {
        heading: "When it is safe after surgery",
        paragraphs: [
          "After 6 weeks, if your wounds have healed, it is usually safe to have penetrative vaginal sex. After a laparoscopic hysterectomy, your surgeon or nurse may suggest waiting longer, up to 12 weeks, because the wound at the top of the vagina can take longer to heal.",
          "You may need more time before you feel ready. You should not put pressure on yourself to have sex or be intimate.",
        ],
      },
      {
        heading: "Changes you may notice",
        paragraphs: [
          "Surgery can sometimes affect sensation during sex. An early menopause can cause a dry vagina, and radiotherapy can make the vagina narrower, shorter, drier and more delicate, which can make sex painful.",
          "Many women have an initial loss of sexual desire after the operation, which usually returns once they have fully recovered.",
          "Contact your cancer doctor or specialist nurse as soon as possible if you notice bleeding after sex.",
        ],
      },
      {
        heading: "Things that can help",
        paragraphs: [
          "Vaginal creams and lubricants can help with dryness, so ask your doctor or nurse about them. Use only silicone-based or water-based lubricants with condoms.",
          "If you had radiotherapy, dilators help prevent narrowing so you can still have sex comfortably. Your radiotherapy team will tell you how and when to start.",
        ],
      },
      {
        heading: "You and your partner",
        paragraphs: [
          "You may feel nervous about starting your sex life again, or not feel like it if you are worried or low. It may help to talk things over with your partner, and for most people, things get better over time.",
          "Sexual touching, penetration or close contact cannot pass cancer on to a partner, will not affect the cancer and does not make it more likely to come back.",
        ],
      },
      {
        heading: "Who to talk to",
        paragraphs: [
          "Your healthcare team are used to talking about sex, and you can use the words you usually say. A sex therapist can also help, and you can find one through the College of Sexual and Relationship Therapists.",
          "If you feel uncomfortable talking to your doctor or nurse, you can call Macmillan free on 0808 808 00 00, or the Cancer Research UK nurses on 0808 800 4040, Monday to Friday, 9am to 5pm.",
        ],
      },
    ],
    helps: [
      "Wait at least 6 weeks after surgery, and until your wounds have healed.",
      "Take the time you need, without pressure.",
      "Ask your doctor or nurse about lubricants and vaginal creams.",
      "Use dilators as your radiotherapy team advises.",
      "Talk things over with your partner.",
      "Ask about a sex therapist, or call Macmillan on 0808 808 00 00.",
    ],
    tryThisWeek: [
      "Ask about lubricants and creams.",
      "Talk things over with your partner.",
      "Take the time you need.",
    ],
    ask: "When is it safe for me to have sex again, and who can help if it is uncomfortable?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "ready",
          situation: "It is 6 weeks since your keyhole surgery and you are not sure you are ready.",
          options: [{ text: "Ask your surgeon or nurse, and take your time", best: true }, { text: "Push yourself because 6 weeks have passed" }],
          why: "After a laparoscopic hysterectomy, your surgeon or nurse may suggest waiting longer, up to 12 weeks. You may need more time before you feel ready.",
        },
        {
          id: "dry",
          situation: "Sex feels dry and uncomfortable.",
          options: [{ text: "Ask about lubricants and vaginal creams", best: true }, { text: "Stop trying altogether" }],
          why: "Vaginal creams and lubricants can help with dryness, so ask your doctor or nurse about them.",
        },
        {
          id: "partner",
          situation: "Your partner worries that sex could make the cancer come back.",
          options: [{ text: "Explain it cannot pass cancer on or bring it back", best: true }, { text: "Avoid any touching to be safe" }],
          why: "Sexual touching, penetration or close contact cannot pass cancer on to a partner, will not affect the cancer and does not make it more likely to come back.",
        },
        {
          id: "bleeding",
          situation: "You notice some bleeding after sex.",
          options: [{ text: "Contact your cancer doctor or specialist nurse", best: true }, { text: "Wait for your next check-up" }],
          why: "Contact your cancer doctor or specialist nurse as soon as possible if you notice bleeding after sex.",
        },
      ],
    },
    sources: [MAC_RECOVER, MAC_WOMB, CRUK_SEX, MAC_SEX, CRUK_RADIO_SE, NHS_HYST_RECOVERY],
    quiz: {
      question: "Can sex make womb cancer more likely to come back?",
      options: [{ text: "No", right: true }, { text: "Yes" }, { text: "Only in the first year" }],
      why: "Sexual touching, penetration or close contact cannot pass cancer on to a partner, will not affect the cancer and does not make it more likely to come back.",
    },
  },
  {
    id: "wb-activity",
    kicker: "Moving more",
    question: "How active can I be while I recover?",
    hook: "Walk from the day after surgery, hold back on lifting for weeks, then build up slowly.",
    short: "You will be encouraged to walk from the day after your operation, and gentle exercise every day helps your energy and mood. Avoid heavy lifting and strenuous activity for about 12 weeks after open surgery or about 6 weeks after keyhole, robotic or vaginal surgery. After treatment, get advice first, then increase your activity slowly.",
    sections: [
      {
        heading: "Start gently",
        paragraphs: [
          "The day after your operation, you will be encouraged to take a short walk. This helps your blood flow normally and lowers the risk of blood clots in the legs.",
          "Once home, try to do some gentle exercise every day, such as walking, and slowly increase how much you do. It can help you feel you have more energy and lift your mood.",
        ],
      },
      {
        heading: "What to hold back on",
        paragraphs: [
          "Avoid strenuous activity or heavy lifting for about 12 weeks after open surgery, or about 6 weeks after a laparoscopic, robotic or vaginal hysterectomy. You will need to rest at home for at least 4 to 6 weeks, without heavy housework such as vacuuming.",
          "If you have to lift light objects, bend your knees and keep your back straight. You can swim once your wounds have healed.",
        ],
      },
      {
        heading: "Why moving helps",
        paragraphs: [
          "Being active after treatment may help you keep your fitness, strength and mental wellbeing, manage ongoing tiredness, and reduce your risk of late effects. Research shows that physical activity during and after treatment can help reduce fatigue, and even a short walk can help.",
          "Treatments that cause an early menopause can thin the bones. Weight-bearing activities such as walking, dancing, lunges and squats help keep bones strong.",
        ],
      },
      {
        heading: "Your pelvic floor",
        paragraphs: [
          "A physiotherapist or your nurses can give you guidance about pelvic floor exercises to help recovery after surgery to the pelvic area. You may meet a physiotherapist before you go home.",
        ],
      },
      {
        heading: "Ask first, then build up",
        paragraphs: [
          "Physical activity is usually safe after cancer treatment, but get advice from a healthcare professional first, as there may be some types of activity to avoid or be careful with. After treatment ends, increase your activity slowly.",
          "If you are worried about doing anything too physical, you can always check with your specialist nurse. During radiotherapy, gentle exercise such as short walks can help with tiredness.",
        ],
      },
    ],
    helps: [
      "Take a short walk every day and slowly build up.",
      "Avoid heavy lifting and strenuous activity for as long as your team advises.",
      "Bend your knees and keep your back straight if you lift light objects.",
      "Try weight-bearing activities such as walking or dancing to help your bones.",
      "Ask about pelvic floor exercises.",
      "Check with your specialist nurse if you are unsure about an activity.",
    ],
    tryThisWeek: [
      "Take a short walk each day.",
      "Ask about pelvic floor exercises.",
      "Check with your nurse first.",
    ],
    ask: "When can I start lifting, swimming and more strenuous exercise after my surgery?",
    interactive: {
      kind: "timeline",
      title: "Building back up after surgery",
      steps: [
        { id: "day-1", when: "The day after surgery", title: "A first short walk", points: ["You will be encouraged to take a short walk.", "Moving helps lower the risk of blood clots."] },
        { id: "home", when: "First weeks at home", title: "Rest and walk", points: ["Rest at home for at least 4 to 6 weeks.", "Walk every day and slowly do more."] },
        { id: "six", when: "About 6 weeks", title: "After keyhole or vaginal surgery", points: ["The usual time to avoid strenuous activity or heavy lifting.", "Check with your specialist nurse before doing more."] },
        { id: "twelve", when: "About 12 weeks", title: "After open surgery", points: ["The usual time to avoid strenuous activity or heavy lifting.", "Then increase your activity slowly."] },
        { id: "after", when: "After treatment ends", title: "Keep active", points: ["Activity can help with tiredness and mood.", "Weight-bearing activity helps keep bones strong."] },
      ],
    },
    sources: [MAC_RECOVER, NHS_HYST_RECOVERY, CRUK_AFTER_SURGERY, MAC_ACTIVE, MAC_HYST, MAC_RADIO],
    quiz: {
      question: "How long is heavy lifting usually avoided after open surgery?",
      options: [{ text: "About 12 weeks", right: true }, { text: "About 1 week" }, { text: "About 1 year" }],
      why: "Avoid strenuous activity or heavy lifting for about 12 weeks after open surgery, or about 6 weeks after a laparoscopic, robotic or vaginal hysterectomy.",
    },
  },
  {
    id: "wb-mood",
    kicker: "Mood",
    question: "Why do I feel low now that treatment has ended?",
    hook: "Relief and worry often arrive together. The low months are common, and help is there, including right now.",
    short: "When treatment ends, many people feel relieved but worried about the future, and it can take time to find what is normal for you. Sadness often improves, but if low feelings last more than 2 weeks, talk to your doctor or nurse. If you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "Why the end can feel hard",
        paragraphs: [
          "When treatment ends, you may feel relieved but worried about what might happen in the future. You may still have side effects and other emotions to cope with, and it can take time to find out what is now normal for you.",
          "You may feel a sense of loss and sadness after a hysterectomy. Some women who had not been through the menopause feel a loss because they can no longer have children.",
        ],
      },
      {
        heading: "The worry about it coming back",
        paragraphs: [
          "Many people find check-ups worrying, as a hospital appointment can bring back anxiety about the cancer. Sharing your worries with someone close can mean they do not seem so overwhelming.",
          "There is no evidence that feeling anxious or sad can affect your recovery. It can help to focus on things you can control, and to keep doing the things that are important to you.",
        ],
      },
      {
        heading: "Sadness or depression?",
        paragraphs: [
          "Feelings of sadness and loss often improve as you recover. But for some people, the low mood continues or gets worse and may become depression, and a hysterectomy can sometimes be a trigger.",
          "Signs include feeling low most of the time, losing interest in things you used to enjoy, changes in sleep, eating or concentration, and feeling helpless. If these go on for more than 2 weeks, talk to your doctor or nurse.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Talking about your feelings with family, friends or a partner can help, and so can a support group or Macmillan's Online Community womb cancer forum. Macmillan's free HOPE programme is a 6 week course to help you live with or after cancer.",
          "You can refer yourself to NHS talking therapies without seeing a GP, if you are registered with a GP and aged 18 or over, or 16 or over in some areas. Your GP or specialist nurse can also refer you to a counsellor or psychologist, or talk to you about medicine.",
          "Anti-depressants can take up to 4 weeks to help. They are not addictive, but you should not stop them suddenly, and it is important to follow your doctor's advice when you stop.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and choose the mental health option, or ask for an urgent GP appointment. If you would rather not talk on the phone, you can text SHOUT to 85258 at any time.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Tell someone close to you how you are feeling.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Refer yourself to NHS talking therapies, or ask your GP or nurse about counselling.",
      "Join a support group or Macmillan's womb cancer forum.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell someone close how you feel.",
      "Look up NHS talking therapies.",
      "Visit the womb cancer forum.",
    ],
    ask: "Could my low mood be depression, and can you refer me for a talking therapy or counselling?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor or nurse",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: ["Feeling low or sad most of the time", "Losing interest in things I used to enjoy", "Changes in my sleep", "Changes in my eating", "Trouble concentrating", "Feeling helpless or vulnerable", "Problems starting or finishing tasks"],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123, day or night.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_FINISH, MAC_WOMB, MAC_DEPRESSION, MAC_EMOTIONS, CRUK_FOLLOW, NHS_HYST_RECOVERY, NHS_TALKING, NHS_URGENT, NHS_SUICIDAL, SAMARITANS],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, they always pass" }],
      why: "If these go on for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
];
