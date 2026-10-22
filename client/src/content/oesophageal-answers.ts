import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Oesophageal cancer page's pieces (content/library-conditions/cancer-more-2.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from Macmillan Cancer
// Support, Cancer Research UK and the NHS, with the Oesophageal Patients Association (OPA) and Guts UK for
// life after surgery, the government's Access to Work page for work, and Samaritans and the NHS urgent
// mental health page for the mood answer. The answers describe treatment, recovery and living with
// after-effects; there are no survival or life-expectancy figures. General information only; it never
// replaces what a person's own upper GI team, specialist nurse or dietitian tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/oesophageal-cancer/${path}` });
const opa = (label: string, path: string): LearnSource => ({ label: `OPA: ${label}`, url: `https://opa.org.uk/${path}` });
const guts = (label: string, path: string): LearnSource => ({ label: `Guts UK: ${label}`, url: `https://gutscharity.org.uk/advice-and-information/${path}` });

const NHS_TREAT = nhs("Treatment for oesophageal cancer", "conditions/oesophageal-cancer/treatment/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_HEARTBURN = nhs("Heartburn and acid reflux", "conditions/heartburn-and-acid-reflux/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const MAC_OES = mac("Oesophageal cancer", "oesophageal-cancer");
const MAC_TREAT = mac("Treatment for oesophageal cancer", "oesophageal-cancer/treatment-for-oesophageal-cancer");
const MAC_STAGE = mac("Staging and grading of oesophageal cancer", "oesophageal-cancer/staging-and-grading-of-oesophageal-cancer");
const MAC_SWALLOW = mac("Treating swallowing problems for oesophageal cancer", "oesophageal-cancer/treating-swallowing-problems-for-oesophageal-cancer");
const MAC_SURGERY = mac("Surgery for oesophageal cancer", "treatments-and-drugs/surgery-for-oesophageal-cancer");
const MAC_CHEMO = mac("Chemotherapy for oesophageal cancer", "treatments-and-drugs/chemotherapy-for-oesophageal-cancer");
const MAC_RADIO = mac("Radiotherapy for oesophageal cancer", "treatments-and-drugs/radiotherapy-for-oesophageal-cancer");
const MAC_EATING = mac("Eating after treatment for oesophageal cancer", "impacts-of-cancer/eating-after-treatment-for-oesophageal-cancer");
const MAC_DUMPING = mac("Dumping syndrome", "impacts-of-cancer/dumping-syndrome");
const MAC_EATING_PROBLEMS = mac("Eating problems and cancer", "impacts-of-cancer/eating-problems");
const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");
const MAC_FINISHING = mac("Finishing cancer treatment", "after-treatment/finishing-treatment");
const MAC_WORRIES = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");
const MAC_WORK = mac("Making decisions about work after treatment", "after-treatment/making-decisions-about-work-after-treatment");
const MAC_MONEY = mac("Money and work", "get-help/financial-and-work");

const CRUK_STAGES = cruk("Stages, types and grades of oesophageal cancer", "stages-types-and-grades");
const CRUK_TNM = cruk("TNM staging for oesophageal cancer", "stages-types-and-grades/tnm-staging");
const CRUK_SURGERY_REMOVE = cruk("Surgery to remove your oesophagus", "treatment/surgery/surgery-remove-your-oesophagus");
const CRUK_AFTER_SURGERY = cruk("After surgery for oesophageal cancer", "treatment/surgery/after-surgery");
const CRUK_PROBLEMS = cruk("Problems after surgery for oesophageal cancer", "treatment/surgery/after-surgery/problems");
const CRUK_CHEMORADIO = cruk("Chemoradiotherapy for oesophageal cancer", "treatment/chemoradiotherapy-about");
const CRUK_TARGETED = cruk("Targeted and immunotherapy drugs for oesophageal cancer", "treatment/targeted-immunotherapy");
const CRUK_FOLLOW_UP = cruk("Follow up after oesophageal cancer treatment", "treatment/follow-up");
const CRUK_STENT = cruk("Oesophageal stent", "treatment/making-swallowing-easier/oesophageal-stent");
const CRUK_DILATATION = cruk("Oesophageal dilatation", "treatment/making-swallowing-easier/oesophageal-dilatation");
const CRUK_EATING = cruk("Eating problems with oesophageal cancer", "living-with/eating");
const CRUK_COPING = cruk("Coping and support when you have oesophageal cancer", "living-with/coping");

const OPA_CANCER = opa("Oesophageal cancer", "oesophageal-cancer/");
const OPA_OFFER = opa("What support does OPA offer?", "what-we-offer/");
const OPA_BUDDIES = opa("Patient buddies", "patient-buddies/");
const OPA_CARERS = opa("Help for caregivers", "help-for-caregivers/");
const OPA_CARD = opa("English dual purpose card", "product/english-dual-purpose-card/");
const OPA_GUIDE = opa("A guide to life after surgery", "product/a-guide-to-life-after-surgery/");
const OPA_RADAR = opa("Radar key leaflet", "product/radar-leaflet/");
const OPA_MONEY = opa("Money worries", "money-worries/");

const GUTS_DUMPING = guts("Dumping syndrome", "conditions/dumping-syndrome/");
const GUTS_REFLUX = guts("Heartburn and reflux", "symptoms/heartburn-and-reflux/");

const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work: get support if you have a disability or health condition", url: "https://www.gov.uk/access-to-work" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const oesophagealAnswers: LearnArticle[] = [
  {
    id: "oes-what-you-had",
    kicker: "Your treatment",
    question: "What was each part of my treatment for?",
    hook: "Surgery, chemotherapy, radiotherapy, or a mix of them: each had its own job, and your team chose the mix for your cancer.",
    short: "Oesophageal cancer can be treated with surgery, chemotherapy, radiotherapy, chemoradiation, targeted therapy and immunotherapy, alone or together. Which ones you had depended on the type of cancer, where it was, its stage and grade, your general health and fitness, and your own choices. A team of specialists met to plan the treatment that was best for you.",
    sections: [
      {
        heading: "Why your plan was yours",
        paragraphs: [
          "Your treatment depended on the type of oesophageal cancer, where it was in the oesophagus, its stage and grade, your general health and level of fitness, and your personal choices. The treatments can be used alone or together.",
          "A team of specialists, called a multidisciplinary team or MDT, met to talk about the best treatment for you. It usually includes a surgeon, cancer doctors, a clinical nurse specialist and a dietitian, and your cancer doctor or specialist nurse then talked the options through with you.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "The main operation is called an oesophagectomy. The part of the oesophagus containing the cancer is removed, and the surgeon pulls the stomach up into the chest and rejoins it to the healthy part of the oesophagus.",
          "Sometimes the top part of the stomach is removed too, which is called an oesophagogastrectomy. The surgeon also removes some nearby lymph nodes, which helps to reduce the risk of the cancer coming back.",
          "Some very early cancers in the inner layer of the oesophagus can be removed using an endoscope instead. This is called an endoscopic mucosal resection, or EMR, or an endoscopic submucosal dissection, or ESD.",
        ],
      },
      {
        heading: "Chemotherapy, radiotherapy and chemoradiation",
        paragraphs: [
          "Chemotherapy uses anti-cancer drugs to destroy cancer cells. Given before and after surgery, it shrinks the tumour to make surgery more effective and reduces the chance of the cancer coming back, and you usually have it for 2 to 3 months before the operation and again for 2 to 3 months after it.",
          "Chemoradiation means having chemotherapy and radiotherapy together. It can shrink a cancer before surgery, or be the main treatment without surgery, and giving these treatments together can cure some early stage oesophageal cancers.",
          "Radiotherapy uses high-energy rays to destroy cancer cells. If the cancer is more advanced, you may have radiotherapy on its own to shrink the tumour and help control symptoms.",
        ],
      },
      {
        heading: "Targeted and immunotherapy drugs",
        paragraphs: [
          "Targeted cancer drugs work on differences in cancer cells that help them grow and survive, and immunotherapies help the immune system attack the cancer. The main ones for oesophageal cancer are nivolumab, pembrolizumab and trastuzumab.",
          "If cancer cells were found in the tissue removed at surgery, you may have been offered further treatment afterwards. This may be chemotherapy, or immunotherapy if you had chemoradiation before surgery.",
        ],
      },
      {
        heading: "When to call straight away",
        paragraphs: [
          "If you are having chemotherapy, call your care team now if you have a high temperature, other signs of an infection, pain and swelling in a leg or arm, or sudden breathlessness and chest pain. Call NHS 111 if you are not sure how to contact your care team.",
          "After surgery, if you have signs of infection at home, such as shivering, feeling hot and cold or redness around your wound, call your 24 hours advice line. If you have signs of a blood clot, such as shortness of breath, chest pain or coughing up blood, contact a doctor immediately, call 999 or go to A&E.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor or specialist nurse to explain each treatment and its side effects; if you do not understand something, ask them.",
      "If you have symptoms or side effects that worry you, talk to your specialists; you do not need to wait for your next check-up.",
      "Keep the telephone numbers your nurse gives you for problems at home.",
      "Call your care team straight away if you have signs of an infection during chemotherapy, or NHS 111 if you are not sure how to reach them.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if you want to talk things through.",
    ],
    tryThisWeek: [
      "Ask the team to explain each treatment.",
      "Save the numbers to call from home.",
      "Report worrying side effects now.",
    ],
    ask: "Which treatments did I have, and what was each one for in my case?",
    interactive: {
      kind: "flip-cards",
      title: "Your treatments, card by card",
      intro: "Turn each card to see what each treatment was for.",
      cards: [
        { id: "oesophagectomy", front: "Oesophagectomy", when: "The main operation", back: "Removes the part of the oesophagus with the cancer, and nearby lymph nodes. The stomach is rejoined to the healthy oesophagus." },
        { id: "emr", front: "EMR or ESD", when: "Very early cancers in the lining", back: "The cancer is removed through an endoscope passed through the mouth into the oesophagus." },
        { id: "chemotherapy", front: "Chemotherapy", when: "Before and after surgery, or on its own", back: "Anti-cancer drugs. Before surgery they shrink the tumour, and they reduce the chance of the cancer coming back." },
        { id: "chemoradiation", front: "Chemoradiation", when: "Before surgery, or instead of it", back: "Chemotherapy and radiotherapy together. Chemotherapy makes cancer cells more sensitive to radiotherapy." },
        { id: "radiotherapy", front: "Radiotherapy", when: "With chemotherapy, or for symptoms", back: "High-energy rays destroy cancer cells. On its own, it can shrink the tumour and help control symptoms." },
        { id: "targeted", front: "Targeted and immunotherapy", when: "Nivolumab, pembrolizumab, trastuzumab", back: "Drugs that target what helps cancer cells grow, or help the immune system attack the cancer." },
      ],
    },
    sources: [MAC_TREAT, NHS_TREAT, MAC_SURGERY, CRUK_SURGERY_REMOVE, MAC_CHEMO, CRUK_CHEMORADIO, CRUK_TARGETED, CRUK_PROBLEMS, NHS_CHEMO, MAC_RADIO],
    quiz: {
      question: "What is the main operation for oesophageal cancer called?",
      options: [{ text: "An oesophagectomy", right: true }, { text: "A gastroscopy" }, { text: "A dilatation" }],
      why: "The main operation is called an oesophagectomy.",
    },
  },
  {
    id: "oes-stage",
    kicker: "Your results",
    question: "What do the type, stage and grade of my cancer mean?",
    hook: "Three words on your results, type, stage and grade, describe the cancer. Together they helped your team plan your treatment.",
    short: "The type tells you which kind of cell the cancer started in, the stage tells you how big it is and if it has spread, and the grade means how abnormal the cells look under the microscope. They help your doctor decide which treatment you need. The exact stage may not be known until the cancer has been removed with surgery.",
    sections: [
      {
        heading: "Type",
        paragraphs: [
          "Your type of oesophageal cancer depends on the type of cell it starts in. The 2 main types are adenocarcinoma and squamous cell cancer.",
          "Adenocarcinoma is the most common type in the UK and mainly affects the lower part of the oesophagus. Squamous cell cancers tend to develop in the upper and middle part.",
          "Knowing the type helps your cancer doctor plan your treatment. Cancers that start where the oesophagus joins the stomach are called gastro-oesophageal junction cancers.",
        ],
      },
      {
        heading: "Stage: the TNM system",
        paragraphs: [
          "The stage describes the position of the cancer and whether it has spread from where it started. The TNM staging system is the one most commonly used for oesophageal cancer.",
          "T describes how far the tumour has grown into the oesophageal wall, from T1 to T4. N describes whether the cancer has spread to the lymph nodes, from N0 to N3, and M describes whether it has spread to other parts of the body.",
        ],
      },
      {
        heading: "Stage: the number system",
        paragraphs: [
          "Doctors may also use a number staging system, with 5 main stages from stage 0 to stage 4. Stage 0, also called high grade dysplasia, means there are severely abnormal cells in the inner lining of the oesophagus.",
          "Stage 1 means the cancer has not spread beyond the thick muscle wall of the oesophagus. Stage 4 means the cancer is advanced and might have spread into other organs, lymph nodes or other parts of the body, such as the lungs or liver.",
        ],
      },
      {
        heading: "Before and after surgery",
        paragraphs: [
          "Your cancer doctor uses your test results to try to identify the stage before treatment is planned. But they may not know the exact stage until the cancer has been removed with surgery.",
          "Staging after surgery is called pathological staging, and it is generally a more precise way to find out how far the cancer has spread. If you had chemotherapy or radiotherapy before surgery, you might see your stage written as ypTNM.",
        ],
      },
      {
        heading: "Grade",
        paragraphs: [
          "Grading compares the cancer cells under the microscope with normal cells. Grade 1 cells look most like normal cells and usually grow slowly, and grade 3 cells look very different and may grow more quickly.",
          "Waiting to know the stage and grade of your cancer can be a worrying time. Your cancer doctor can explain your number stage and how it relates to your TNM stage.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor to explain your stage, and how the number stage relates to the TNM stage.",
      "Make a list of questions before your appointment, and take someone with you to support you.",
      "Ask your healthcare team to explain things again if you need them to.",
      "If you do not want much information straight away, tell your doctor or nurse; you can ask for more when you feel ready.",
      "Call the Macmillan Support Line free on 0808 808 00 00 to talk to a cancer information specialist.",
    ],
    tryThisWeek: [
      "Write questions before appointments.",
      "Ask for things to be explained again.",
      "Take someone with you.",
    ],
    ask: "What type, stage and grade is my cancer, and how did they shape my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "Your results, card by card",
      intro: "Turn each card to see what each word on your results means.",
      cards: [
        { id: "t", front: "T1 to T4", when: "The tumour", back: "How far the tumour has grown into the wall of the oesophagus, or beyond it." },
        { id: "n", front: "N0 to N3", when: "The lymph nodes", back: "N0 means no cancer cells in nearby lymph nodes. N3 means cancer cells in 7 or more." },
        { id: "m", front: "M0 or M1", when: "Spread to other parts", back: "M0 means the cancer has not spread to other parts of the body. M1 means it has." },
        { id: "number", front: "Stage 0 to 4", when: "The number system", back: "A combination of the TNM stages. Stage 4 means the cancer is advanced." },
        { id: "grade", front: "Grade 1 to 3", when: "How the cells look", back: "Grade 1 cells look most like normal cells. Grade 3 cells look very different and may grow more quickly." },
        { id: "type", front: "Adenocarcinoma or squamous", when: "The cell it started in", back: "Adenocarcinoma is the most common type in the UK. Squamous cell cancers tend to be in the upper and middle part." },
      ],
    },
    sources: [CRUK_STAGES, MAC_OES, MAC_STAGE, CRUK_TNM, CRUK_COPING],
    quiz: {
      question: "What does the N in TNM describe?",
      options: [{ text: "Whether the cancer has spread to the lymph nodes", right: true }, { text: "How quickly the cells grow" }, { text: "The number of treatments" }],
      why: "N describes whether the cancer has spread to the lymph nodes, from N0 to N3, and M describes whether it has spread to other parts of the body.",
    },
  },
  {
    id: "oes-follow-up",
    kicker: "Follow-up",
    question: "What happens at my follow-up appointments?",
    hook: "When treatment ends, check-ups carry on: a chance to raise problems early, and later, perhaps, appointments you arrange yourself.",
    short: "After treatment you usually have follow-up appointments to check how you are and see whether you have any problems or worries. Depending on your treatment, you may have an endoscopy or a scan. Over time the appointments become less frequent, and you do not have to wait for your next visit if something worries you.",
    sections: [
      {
        heading: "What follow-up is for",
        paragraphs: [
          "After treatment you usually have follow-up appointments to check how you are and see whether you have any problems or worries. They are also your opportunity to raise any concerns about your progress.",
          "Before you leave hospital after surgery, you will be given an appointment for a check-up at an outpatient clinic. You may also be given contact details for your specialist nurse.",
        ],
      },
      {
        heading: "At the appointment",
        paragraphs: [
          "Your doctor or nurse examines you and asks how you are feeling, whether you have had any symptoms or side effects, and if you are worried about anything. You might also have tests at some visits, such as blood tests, x-rays, scans or an endoscopy.",
          "You may also see physiotherapists and dietitians. Seeing the dietitian as soon as you have a problem can help you sort it out before it becomes a big issue.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Guidelines say doctors should arrange your check-ups based on your individual needs, including how you are feeling and the type of treatment you have had. Over time, these appointments become less frequent.",
          "Some hospitals use patient initiated follow-up, sometimes called open access follow-up. Once your doctors are happy with your progress, you arrange appointments yourself, as often as you feel you need to.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your doctor or specialist nurse if you have any concerns or notice any new symptoms. You do not have to wait until your next visit.",
          "Ask your cancer team which symptoms to look out for, and keep their contact details in your phone or somewhere safe. If you have been fully discharged, you can contact your GP about any concerns.",
        ],
      },
      {
        heading: "Your treatment summary",
        paragraphs: [
          "At the end of treatment, your cancer team may create a treatment summary. It describes the treatment you have had, possible side effects, symptoms to look out for and details of your follow-up.",
          "You may get anxious between appointments, and this is natural. It may help to get support from family, friends or a support organisation.",
        ],
      },
    ],
    helps: [
      "Ask your key worker how often you will have check-ups, and who will arrange any tests.",
      "Keep your cancer team's contact details in your phone or somewhere safe.",
      "Contact your doctor or specialist nurse about new symptoms; you do not have to wait until your next visit.",
      "See the dietitian as soon as you have an eating problem.",
      "Ask for a copy of your treatment summary if you are not given one.",
      "Tell your GP you have finished treatment and talk about any concerns.",
    ],
    tryThisWeek: [
      "Save your team's number in your phone.",
      "Report new symptoms without waiting.",
      "Ask for your treatment summary.",
    ],
    ask: "How often will I have check-ups, what tests will I have, and who do I call between them?",
    interactive: {
      kind: "timeline",
      title: "Follow-up, step by step",
      steps: [
        { id: "leave", when: "Leaving hospital", title: "Your first check-up", points: ["An appointment at an outpatient clinic", "Contact details for your specialist nurse"] },
        { id: "end", when: "End of treatment", title: "Planning what comes next", points: ["A talk with your cancer team", "Perhaps a treatment summary and a care plan"] },
        { id: "checkups", when: "Check-ups", title: "How you are, and any tests", points: ["Questions about symptoms and side effects", "Sometimes blood tests, scans or an endoscopy"] },
        { id: "later", when: "Over time", title: "Fewer appointments", points: ["Check-ups become less frequent", "You may arrange them yourself"] },
        { id: "any", when: "Any time", title: "If something worries you", points: ["Contact your doctor or specialist nurse", "You do not have to wait for your next visit"] },
      ],
    },
    sources: [CRUK_FOLLOW_UP, MAC_OES, MAC_FINISHING, MAC_WORRIES, MAC_SURGERY],
    quiz: {
      question: "If you notice a new symptom between check-ups, what should you do?",
      options: [{ text: "Contact your doctor or specialist nurse", right: true }, { text: "Wait for your next appointment" }, { text: "Stop eating solid food" }],
      why: "Contact your doctor or specialist nurse if you have any concerns or notice any new symptoms. You do not have to wait until your next visit.",
    },
  },
  {
    id: "oes-swallowing",
    kicker: "Swallowing",
    question: "What can help if swallowing gets difficult, and what is a stent?",
    hook: "A narrowed food pipe can often be opened again with a stent, a stretch or other treatments, and there are ways to eat well with a stent.",
    short: "Swallowing can be difficult if the cancer blocks the oesophagus, or if the oesophagus becomes narrower after surgery or radiotherapy. Treatments include a stent to keep the oesophagus open, stretching, laser treatment and radiotherapy. If you cannot swallow anything, tell your healthcare team straight away.",
    sections: [
      {
        heading: "Why swallowing changes",
        paragraphs: [
          "Cancer in the oesophagus can partly or completely block it, which makes it difficult to swallow. The oesophagus can also get narrower after treatment such as surgery or radiotherapy.",
          "Towards the end of radiotherapy, the throat or oesophagus can become painful, and this can last a few weeks after treatment finishes. Later on, radiotherapy can cause some damage to the tissue in the oesophagus, which can make it difficult to swallow.",
          "If you cannot swallow anything, tell your healthcare team straight away. After surgery, it is important to report any swallowing difficulties that develop again as soon as possible.",
        ],
      },
      {
        heading: "Stents",
        paragraphs: [
          "A stent is a small metal or plastic tube put into the oesophagus to keep it open, so food and drink can pass through more easily. It is fitted using an endoscope or an x-ray, and it usually takes about 30 minutes.",
          "The stent expands over a couple of days. You might feel some soreness as it expands, and taking painkillers for a few days helps.",
        ],
      },
      {
        heading: "Stretching and other treatments",
        paragraphs: [
          "Stretching, or dilatation, uses a small dilator or expanding balloon to widen the oesophagus. You may need it more than once, and you can have it again if the narrowing comes back.",
          "Laser treatment, argon plasma coagulation, and external or internal radiotherapy can also help with swallowing. Some people have a feeding tube to make sure they are getting enough food.",
        ],
      },
      {
        heading: "Eating with a stent",
        paragraphs: [
          "Eat little and often, sit upright while you eat and for an hour after your meal, and chew food well. Sip fluids before, during and after eating to help food pass down through the stent.",
          "Avoid foods that may block the stent, such as tough meat, crusty bread and raw or stringy fruits and vegetables. Having fizzy drinks after eating can also help keep the stent clean and clear.",
          "If food blocks the stent, try not to panic. Take sips of fizzy or warm drinks and walk around, and call your doctor or nurse if you still cannot swallow.",
        ],
      },
      {
        heading: "When to get help straight away",
        paragraphs: [
          "A tear or hole in the oesophagus is very rare. Tell your doctor or nurse straight away if you have difficulty breathing, severe chest pain, vomit blood or cannot keep food or drinks down.",
          "Tell your nurse or doctor if you cough up blood. A speech and language therapist can assess your swallowing and teach exercises to help.",
        ],
      },
    ],
    helps: [
      "If you cannot swallow anything, tell your healthcare team straight away.",
      "Sit upright while you eat and for an hour after your meal.",
      "Sip fluids before, during and after eating.",
      "Avoid tough meat, crusty bread and stringy fruit and vegetables if you have a stent.",
      "If food blocks the stent, sip a fizzy or warm drink and walk around; call your doctor or nurse if you still cannot swallow.",
      "Ask to see a speech and language therapist about swallowing exercises.",
    ],
    tryThisWeek: [
      "Sit upright for an hour after meals.",
      "Sip drinks between mouthfuls.",
      "Tell the team if you cannot swallow.",
    ],
    ask: "What should I do if my swallowing gets worse, and who do I call?",
    interactive: {
      kind: "signs",
      title: "Swallowing problems to report",
      intro: "Tick anything you have noticed. The ticked signs become a list you can copy to tell your team.",
      signs: [
        "I cannot swallow anything",
        "Food or drink keeps coming back up",
        "Difficulty breathing",
        "Severe chest pain",
        "Vomiting blood",
        "Coughing up blood",
        "Swallowing difficulties have come back",
        "Soreness that is not getting better",
      ],
      after: "Difficulty breathing, severe chest pain, vomiting blood or not keeping food or drinks down: tell your doctor or nurse straight away.",
      copyHeading: "Swallowing problems I have noticed",
    },
    sources: [MAC_SWALLOW, CRUK_STENT, CRUK_DILATATION, MAC_TREAT, MAC_RADIO, CRUK_EATING, OPA_CARERS, MAC_EATING],
    quiz: {
      question: "Food has blocked your stent and you still cannot swallow. What should you do?",
      options: [{ text: "Call your doctor or nurse", right: true }, { text: "Try a more solid food" }, { text: "Lie down flat" }],
      why: "Take sips of fizzy or warm drinks and walk around, and call your doctor or nurse if you still cannot swallow.",
    },
  },
  {
    id: "oes-eating",
    kicker: "Eating",
    question: "How do I eat after surgery on my oesophagus?",
    hook: "After an oesophagectomy you may feel full very quickly. Small meals, often, chewed well, are the new rhythm, and it should get easier.",
    short: "It can take a few months to recover from treatment, and up to a year to adjust to the changes in your digestive system. Eating small amounts more often, eating slowly and chewing well all help. Your dietitian will give you advice and help you maintain your weight.",
    sections: [
      {
        heading: "In hospital",
        paragraphs: [
          "Straight after surgery you cannot eat or drink, and you have fluids through a drip. When you can start to drink again, you begin with sips of water, usually within 24 to 48 hours.",
          "You gradually build up what you drink and eat, and most people can eat small amounts within a week or so. You see the dietitian most days while you are in hospital.",
        ],
      },
      {
        heading: "The first weeks",
        paragraphs: [
          "You may have a soft diet while you are still in hospital, and you are normally advised to keep to it for a few weeks. This can help the oesophagus to heal.",
          "Gradually you will be able to start eating solid foods again. It will help if there are no large lumps of food and you chew everything well; you may worry about solid foods at first, but this should get easier.",
        ],
      },
      {
        heading: "Little and often",
        paragraphs: [
          "You may feel full very quickly, because your stomach is smaller. Eat smaller meals more often, chew food well, eat slowly, and have drinks between meals rather than with them.",
          "After surgery to remove your oesophagus and part of your stomach, it can help to eat smaller meals about 6 to 8 times a day. Some foods may be uncomfortable to eat, and you can choose not to eat them.",
        ],
      },
      {
        heading: "Common problems",
        paragraphs: [
          "Problems after surgery can include dumping syndrome, diarrhoea, feeling or being sick, indigestion, reflux when you lie flat, coughing at night and feeling full after small amounts. Talk to your healthcare team, who may be able to prescribe medicines and suggest other things that help.",
          "Diarrhoea is fairly common after the operation and should get better as you eat more normally. Try to drink at least 2 litres of fluids a day, and if the diarrhoea is severe, more than 4 times a day, talk to your cancer doctor, specialist nurse or dietitian.",
        ],
      },
      {
        heading: "How long it takes",
        paragraphs: [
          "Your eating may return to normal after a few months, but this can take time, especially if you need more treatment after surgery. For some people it takes up to 2 years, and there might be some foods you will always need to avoid.",
          "Eating may feel different after surgery, and small, frequent meals and changes to your diet are often needed. A dietitian can give you advice that suits you.",
        ],
      },
    ],
    helps: [
      "Eat small amounts more often instead of larger meals.",
      "Eat slowly and chew everything well.",
      "Have drinks between meals rather than with a meal.",
      "If you have diarrhoea, try to drink at least 2 litres of fluids a day.",
      "Contact your dietitian or specialist nurse with questions after you go home.",
      "Tell your dietitian about any problems you have with eating.",
    ],
    tryThisWeek: [
      "Eat small meals more often.",
      "Drink between meals, not with them.",
      "Eat slowly and chew well.",
    ],
    ask: "What should I be eating at this stage, and when can I see the dietitian?",
    interactive: {
      kind: "timeline",
      title: "Eating again, step by step",
      steps: [
        { id: "drip", when: "Straight after surgery", title: "Nothing by mouth", points: ["Fluids through a drip", "Sips of water, usually within 24 to 48 hours"] },
        { id: "week", when: "Within a week or so", title: "Small amounts of food", points: ["Built up gradually", "The dietitian most days in hospital"] },
        { id: "weeks", when: "The first few weeks", title: "A soft diet", points: ["Helps the oesophagus to heal", "Then solid foods, chewed well"] },
        { id: "months", when: "A few months", title: "Eating may return to normal", points: ["Small meals, about 6 to 8 times a day", "Drinks between meals"] },
        { id: "years", when: "Up to 2 years", title: "Adjusting takes time", points: ["Up to a year to adjust, says Macmillan", "Up to 2 years for some, says Cancer Research UK"] },
      ],
    },
    sources: [MAC_EATING, CRUK_EATING, CRUK_AFTER_SURGERY, CRUK_PROBLEMS, OPA_CANCER],
    quiz: {
      question: "Why might you feel full very quickly after surgery?",
      options: [{ text: "Because your stomach is smaller", right: true }, { text: "Because you are drinking too little" }, { text: "Because of the painkillers" }],
      why: "You may feel full very quickly, because your stomach is smaller.",
    },
  },
  {
    id: "oes-dumping",
    kicker: "Dumping syndrome",
    question: "Why do I feel faint or shaky after eating?",
    hook: "After surgery, food can rush through too quickly. The feeling has a name, dumping syndrome, and changes to how you eat often ease it.",
    short: "After an operation to remove all or part of the oesophagus, food can travel more quickly through the digestive system. This can cause dumping syndrome: early dumping soon after a meal, and late dumping a few hours later. For most people the symptoms slowly reduce over time, and changes to how and what you eat can help.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "The stomach normally stores food and releases it into the bowel in a controlled way. After an operation to remove the stomach or part of the oesophagus, food can travel more quickly through the digestive system, causing symptoms called dumping syndrome.",
          "Dumping syndrome happens in 1 in 2 people after an oesophagectomy. It is a very common side effect.",
        ],
      },
      {
        heading: "Early dumping",
        paragraphs: [
          "Early dumping can happen within 30 minutes of eating a meal. You may feel dizzy and faint, your heart might beat faster, and you may also have tummy cramps or diarrhoea.",
          "These symptoms may last for about 10 to 15 minutes. They happen when food enters the bowel more quickly and draws fluid into it, which causes your blood pressure to drop.",
        ],
      },
      {
        heading: "Late dumping",
        paragraphs: [
          "Late dumping usually happens a few hours after eating a meal, or when you have missed a meal. You may suddenly feel faint, sick or shaky.",
          "It is caused by low blood sugar levels, and it is more common after an oesophagectomy. Foods and drinks high in sugar are especially bad.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Eat slowly, and eat small, frequent meals. Drink fluids slowly between meals rather than at mealtimes, leaving 15 to 30 minutes between eating and drinking.",
          "Eat foods high in protein, such as fish, meat and eggs, and starchy carbohydrates, such as pasta, rice, bread and potatoes. Avoid foods and drinks with a lot of added sugar, such as sugary cereals, sweet drinks and desserts.",
          "Resting for 15 to 30 minutes straight after a meal can help. If you have had an oesophagectomy, lying down will increase reflux, and many people use a wedge pillow.",
        ],
      },
      {
        heading: "If it does not settle",
        paragraphs: [
          "For most people, the symptoms slowly reduce over time. If they do not stop, or they are severe, tell your cancer doctor or dietitian, who may give you medicine to help.",
          "A food and symptom diary can help show which foods cause problems, and it is useful to share with your dietitian. If the symptoms affect your mental health, tell your doctor or dietitian.",
        ],
      },
    ],
    helps: [
      "Eat slowly, and have small, frequent meals.",
      "Leave 15 to 30 minutes between eating and drinking.",
      "Choose foods high in protein and starchy carbohydrates.",
      "Avoid foods and drinks with a lot of added sugar.",
      "Rest for 15 to 30 minutes after eating.",
      "Keep a food and symptom diary to share with your dietitian.",
    ],
    tryThisWeek: [
      "Leave a gap before drinking.",
      "Cut down on sugary foods.",
      "Rest after meals.",
    ],
    ask: "Could my symptoms after meals be dumping syndrome, and can I see a dietitian about it?",
    interactive: {
      kind: "signs",
      title: "Signs of dumping to tell your team",
      intro: "Tick what you have noticed after eating. The ticked signs become a list for your dietitian or cancer doctor.",
      signs: [
        "Feeling dizzy or faint soon after eating",
        "A fast heartbeat after a meal",
        "Tummy cramps",
        "Diarrhoea",
        "Sweating",
        "Feeling sick",
        "Feeling shaky a few hours after eating",
        "Feeling faint after a missed meal",
      ],
      after: "If the symptoms do not stop, or they are severe, tell your cancer doctor or dietitian. Medicine may help.",
      copyHeading: "Dumping symptoms I have had",
    },
    sources: [MAC_DUMPING, GUTS_DUMPING, CRUK_EATING],
    quiz: {
      question: "What causes late dumping syndrome?",
      options: [{ text: "Low blood sugar levels", right: true }, { text: "Eating too slowly" }, { text: "Drinking between meals" }],
      why: "It is caused by low blood sugar levels, and it is more common after an oesophagectomy.",
    },
  },
  {
    id: "oes-weight",
    kicker: "Weight",
    question: "How do I keep my weight up?",
    hook: "Losing weight is common with oesophageal cancer. Extra calories and protein in everyday food, and a dietitian, help you keep your strength.",
    short: "It is important to eat and drink enough calories and protein to maintain your weight and strength. Adding calories to everyday foods, having protein twice a day and sipping liquid food supplements can help. A dietitian can support you from diagnosis, through treatment and afterwards.",
    sections: [
      {
        heading: "Why weight matters",
        paragraphs: [
          "Oesophageal cancer can cause problems with swallowing and make it hard to eat well. It is important to eat and drink enough calories and protein to maintain your weight and strength.",
          "Try to maintain your weight during treatment, because it is a good sign that your body is getting the nutrients it needs. It is important to get help even before you have any problems.",
        ],
      },
      {
        heading: "Your dietitian",
        paragraphs: [
          "There will be a dietitian in your hospital team, and if you have not seen them, ask your doctor or nurse to refer you. The dietitian can support you from diagnosis, through treatment and afterwards.",
          "If you are not in hospital, your GP or district nurse can advise whether you can refer yourself to a dietitian. A community dietitian may be able to visit you at home.",
        ],
      },
      {
        heading: "Adding calories",
        paragraphs: [
          "You can help to maintain your weight by adding calories to everyday foods. Make instant soups or gravies with milk instead of water, mix mashed potato with butter, grated cheese or cream, and make hot drinks with all milk, preferably whole milk.",
          "Liquid food supplements can be sipped throughout the day, or made into ice lollies. Ask your dietitian which ones are best for you, because some are available on prescription.",
        ],
      },
      {
        heading: "More protein",
        paragraphs: [
          "Aim to have some soft meat, Quorn, tofu, fish, beans or eggs at least twice a day. Adding a couple of teaspoons of dried milk powder to each pint of milk adds more protein.",
          "If supplement drinks seem to bring on dumping symptoms, speak to your dietitian. They could advise a better option for you.",
        ],
      },
      {
        heading: "When eating is still hard",
        paragraphs: [
          "Most people have some problems eating after surgery, and this can cause weight loss. You might go home with a feeding tube to give you extra nutrients if you need them.",
          "Low levels of minerals and vitamins after surgery might make you tired. Talk to your healthcare team about any problems you are having.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse to refer you to the dietitian if you have not seen them.",
      "Add calories to everyday foods, such as butter, cheese or cream in mashed potato.",
      "Make soups, gravies and hot drinks with milk, preferably whole milk.",
      "Have some soft meat, Quorn, tofu, fish, beans or eggs at least twice a day.",
      "Sip liquid food supplements through the day, and ask your dietitian which are best.",
      "Tell your dietitian or doctor if you lose a lot of weight.",
    ],
    tryThisWeek: [
      "Add butter or cheese to mash.",
      "Have protein twice a day.",
      "Sip a supplement drink.",
    ],
    ask: "Am I losing weight, and which supplements would suit me?",
    interactive: {
      kind: "scenarios",
      title: "Building yourself up",
      scenarios: [
        { id: "soup", situation: "You are making an instant soup.", options: [{ text: "Make it with milk instead of water", best: true }, { text: "Make it thinner with extra water" }], why: "Making instant soups or gravies with milk instead of water adds calories to everyday food." },
        { id: "protein", situation: "You are planning tomorrow's meals.", options: [{ text: "Include soft meat, fish, beans or eggs twice", best: true }, { text: "Leave out protein to save room" }], why: "Aim to have some soft meat, Quorn, tofu, fish, beans or eggs at least twice a day." },
        { id: "supplement", situation: "A supplement drink seems to bring on dumping symptoms.", options: [{ text: "Speak to your dietitian about another option", best: true }, { text: "Stop eating for the day" }], why: "If supplement drinks seem to bring on dumping symptoms, your dietitian could advise a better option." },
        { id: "weight", situation: "Your clothes feel looser and you are losing weight.", options: [{ text: "Tell your dietitian or doctor", best: true }, { text: "Wait until your next check-up" }], why: "If you lose a lot of weight, tell the dietitian or doctor." },
      ],
    },
    sources: [CRUK_EATING, MAC_EATING_PROBLEMS, CRUK_PROBLEMS, GUTS_DUMPING],
    quiz: {
      question: "Which of these adds calories to everyday food?",
      options: [{ text: "Mixing mashed potato with butter, cheese or cream", right: true }, { text: "Making soup with extra water" }, { text: "Skipping snacks" }],
      why: "Make instant soups or gravies with milk instead of water, mix mashed potato with butter, grated cheese or cream, and make hot drinks with all milk, preferably whole milk.",
    },
  },
  {
    id: "oes-reflux",
    kicker: "Reflux",
    question: "Why do I get reflux at night, and how do I sleep propped up?",
    hook: "After surgery, stomach contents can come back up when you lie flat. When you eat, and how you lie at night, can help.",
    short: "Surgery can cause the contents of the stomach to go back into the oesophagus, which is called reflux, especially when you lie flat. Eating slowly, not lying down straight after eating and raising the head of your bed can help. Your team can also give you medicines such as antacids.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "Surgery can cause a problem with the contents of the stomach going back into the oesophagus, called reflux. Reflux can cause symptoms such as heartburn.",
          "Problems after surgery can include acid from your stomach coming back up into the oesophagus when you lie flat, and coughing at night. If you have had an oesophagectomy, lying down will increase reflux symptoms.",
        ],
      },
      {
        heading: "Around meals",
        paragraphs: [
          "Try to eat slowly. After eating, try not to lie down for about 30 to 60 minutes.",
          "For heartburn in general, the NHS suggests eating smaller, more frequent meals and not eating within 3 or 4 hours before bed. Guts UK suggests eating your main evening meal at least 3 hours before going to bed.",
        ],
      },
      {
        heading: "Sleeping propped up",
        paragraphs: [
          "When you lie down, do not lie completely flat. Macmillan suggests using extra pillows or raising the head of your bed.",
          "Many people who have had an oesophagectomy use a wedge pillow. If you have a stent, sleeping upright in bed, supported with pillows or cushions, helps to prevent heartburn.",
          "For reflux in general, the NHS suggests raising the head of your bed by around 10 to 20cm, so your chest and head are above your waist. It advises against doing this with extra pillows alone, as they can increase pressure on your belly.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Treatment for reflux after surgery includes antacids and medicines that help to move food through the stomach and bowel. Talk to your healthcare team, who may be able to prescribe medicines to relieve your symptoms.",
          "Do not stop taking any prescribed medicine without speaking to a doctor first. If at any time your symptoms are getting worse, contact a GP or call NHS 111.",
        ],
      },
      {
        heading: "Other things that can help",
        paragraphs: [
          "Clothes that are tight around your waist, smoking and drinking too much alcohol can make reflux worse. Bending forward can also put extra pressure on your tummy.",
        ],
      },
    ],
    helps: [
      "Try not to lie down for about 30 to 60 minutes after eating.",
      "Do not lie completely flat; raise the head of your bed.",
      "Eat slowly, and have smaller, more frequent meals.",
      "Eat your main evening meal at least 3 hours before bed.",
      "Ask your healthcare team about medicines to relieve reflux.",
      "Avoid clothes that are tight around your waist.",
    ],
    tryThisWeek: [
      "Stay upright after eating.",
      "Raise the head of your bed.",
      "Eat earlier in the evening.",
    ],
    ask: "What can I take for reflux, and how should I sleep?",
    interactive: {
      kind: "scenarios",
      title: "Reflux, moment by moment",
      scenarios: [
        { id: "sofa", situation: "After dinner you want to lie on the sofa.", options: [{ text: "Stay sitting up for 30 to 60 minutes", best: true }, { text: "Lie flat straight away" }], why: "After eating, try not to lie down for about 30 to 60 minutes." },
        { id: "bed", situation: "Reflux wakes you at night.", options: [{ text: "Raise the head of your bed", best: true }, { text: "Sleep completely flat" }], why: "When you lie down, do not lie completely flat. Raising the head of your bed can help." },
        { id: "late", situation: "You usually eat your main meal just before bed.", options: [{ text: "Eat it at least 3 hours before bed", best: true }, { text: "Have a bigger meal later" }], why: "Guts UK suggests eating your main evening meal at least 3 hours before going to bed." },
        { id: "worse", situation: "Your reflux is getting worse.", options: [{ text: "Contact a GP or your team", best: true }, { text: "Stop your prescribed medicine" }], why: "Do not stop prescribed medicine without speaking to a doctor. If symptoms get worse, contact a GP or call NHS 111." },
      ],
    },
    sources: [CRUK_PROBLEMS, CRUK_EATING, MAC_EATING, GUTS_DUMPING, NHS_HEARTBURN, CRUK_STENT, GUTS_REFLUX],
    quiz: {
      question: "After eating, how long should you try not to lie down?",
      options: [{ text: "About 30 to 60 minutes", right: true }, { text: "About 5 minutes" }, { text: "There is no need to wait" }],
      why: "After eating, try not to lie down for about 30 to 60 minutes.",
    },
  },
  {
    id: "oes-fatigue",
    kicker: "Tiredness",
    question: "Why am I still so tired, and what helps?",
    hook: "Months after surgery or radiotherapy, tiredness can still be the hardest part. It has causes, and there are ways to manage it.",
    short: "Tiredness and feeling lethargic are common during treatment and for some months afterwards, and after surgery you are likely to feel very tired for several weeks and sometimes months. Resting, but also doing some gentle physical activity, can help. Your healthcare team can look for causes such as anaemia or eating problems.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "Tiredness, or fatigue, and feeling lethargic a lot of the time are common during treatment and for some months afterwards. Feeling tired can be caused by the cancer itself, anaemia, treatment side effects or changes in diet.",
          "Radiotherapy can make you feel tired, and in some people this continues for several months after treatment finishes. Low levels of minerals and vitamins after surgery might also make you tired.",
        ],
      },
      {
        heading: "After surgery",
        paragraphs: [
          "You are likely to feel very tired for several weeks and sometimes months after surgery, and you will need plenty of rest at first. Most people feel weak and lack strength for some time.",
          "It helps to do a bit more every day: sitting for less time, walking around the house a bit more, then building up to walking outside. Tell your doctor or nurse if the weakness continues for more than a few weeks, as they can suggest things to help, such as physiotherapy.",
        ],
      },
      {
        heading: "Telling your team",
        paragraphs: [
          "It is important to tell a member of your healthcare team if you have fatigue at any time. You may be asked how severe it is on a scale of 0 to 10, where 0 is no fatigue and 10 is the worst possible fatigue.",
          "A daily fatigue diary can help you record your energy levels, find patterns and plan important activities for when you have more energy. It is a good idea to share it with your healthcare team.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "There is good evidence that physical activity, such as walking quickly, is one of the best ways to help reduce symptoms of fatigue. Talk to your cancer doctor, specialist nurse or GP before you make any big changes.",
          "Plan your day so that you have energy for the things that matter most to you. Pace yourself, and take short naps and rests, balanced with some activity.",
          "Try to keep to a normal sleep routine. Eating well and keeping to a healthy weight can help you maintain your strength and give you more energy.",
        ],
      },
      {
        heading: "Everyday tasks",
        paragraphs: [
          "Spread housework over the week, sit down for tasks when you can, and freeze extra portions on better days for when you are too tired to cook. Do not drive if you feel very tired.",
          "An occupational therapist can help with practical ways to make everyday tasks easier. Your cancer doctor, specialist nurse or GP can refer you.",
        ],
      },
    ],
    helps: [
      "Tell a member of your healthcare team if you have fatigue at any time.",
      "Keep a fatigue diary and share it with your team.",
      "Do a bit more every day, building up to walking outside.",
      "Pace yourself, with short rests balanced by some activity.",
      "Try to keep to a normal sleep routine.",
      "Ask about a referral to an occupational therapist for everyday tasks.",
    ],
    tryThisWeek: [
      "Keep a fatigue diary.",
      "Do a little more each day.",
      "Plan tasks for your best times.",
    ],
    ask: "Could anything be making my tiredness worse, such as anaemia or low vitamins?",
    interactive: {
      kind: "risk-check",
      title: "What might be adding to your tiredness?",
      intro: "Tick what applies to you. Each one says what may help; talk to your team about any of them.",
      items: [
        { id: "anaemia", label: "Anaemia (low red blood cells)", note: "A blood test checks your level. Your doctor or nurse can explain treatments such as a transfusion or iron.", changeable: true },
        { id: "eating", label: "Not eating enough", note: "Your body gets energy from food. Ask your doctor to refer you to a dietitian.", changeable: true },
        { id: "vitamins", label: "Low minerals and vitamins", note: "These might make you tired after surgery. Talk to your healthcare team.", changeable: true },
        { id: "sleep", label: "Trouble sleeping", note: "Try to keep to a normal sleep routine, and tell your team if you are having trouble sleeping.", changeable: true },
        { id: "pain", label: "Pain", note: "The best way to deal with fatigue caused by pain is to manage the pain. Tell your team.", changeable: true },
        { id: "feelings", label: "Worry, low mood or stress", note: "These can make fatigue worse. Talking about how you feel may help.", changeable: true },
        { id: "treatment", label: "Recent surgery or radiotherapy", note: "Tiredness can last weeks or months afterwards. Doing a bit more every day helps.", changeable: false },
      ],
    },
    sources: [CRUK_COPING, CRUK_AFTER_SURGERY, MAC_FATIGUE, MAC_RADIO, CRUK_PROBLEMS, CRUK_EATING, OPA_CANCER],
    quiz: {
      question: "What does Macmillan say is one of the best ways to reduce fatigue?",
      options: [{ text: "Physical activity, such as walking quickly", right: true }, { text: "Staying in bed all day" }, { text: "Skipping meals" }],
      why: "There is good evidence that physical activity, such as walking quickly, is one of the best ways to help reduce symptoms of fatigue.",
    },
  },
  {
    id: "oes-social-eating",
    kicker: "Eating out",
    question: "How do I eat out and share meals with others?",
    hook: "Small portions and a slower pace can make restaurants and family meals harder. A small card and a little planning help.",
    short: "Social events and eating out can be much harder when swallowing or eating is difficult, and eating problems can cause tension in families. The OPA offers a free card asking for a smaller portion or urgent access to a toilet. Talking to your dietitian or a counsellor can help.",
    sections: [
      {
        heading: "Why it can feel hard",
        paragraphs: [
          "Eating problems can be difficult to cope with, and they can cause tension within relationships or families. Social events and eating out with friends can be much harder when you have a problem swallowing.",
          "It is natural to worry that changes in your eating will affect your relationships, or to feel anxious about what other people will think. Talking about your feelings may help.",
        ],
      },
      {
        heading: "Restaurant portions",
        paragraphs: [
          "After surgery for oesophageal or gastric cancer, people often cannot eat full restaurant portions. The OPA has a free two-sided card that can be discreetly shown to waiting staff.",
          "One side says that, due to a medical condition, you need urgent access to toilet facilities. The other asks for a child's size portion, and the cards are available in multiple languages.",
        ],
      },
      {
        heading: "At the table",
        paragraphs: [
          "Eat slowly, chew food well, and have drinks between meals rather than with a meal, so the fluid does not make you feel full too quickly. You may feel full very quickly because your stomach is smaller, so smaller meals more often can help.",
          "Some foods may be uncomfortable to eat, and you can choose not to eat them. If you have a stent, avoid foods that may block it, such as raw fruit and vegetables, tough meat and crusty bread.",
        ],
      },
      {
        heading: "Toilets when you are out",
        paragraphs: [
          "Accessible toilets in the UK are usually fitted with a RADAR National Key Scheme lock. The OPA has a free leaflet about the RADAR key.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "Talking to your dietitian or a counsellor can help with the strain eating problems can bring. The OPA's guide to life after surgery covers eating out, along with driving, sleeping, family relationships and getting back to work.",
          "If you care for someone, try not to put pressure on them to eat, as this can be stressful for both of you. Offer smaller meals, and their favourite foods when their appetite is good.",
        ],
      },
    ],
    helps: [
      "Ask the OPA for a free card to show waiting staff, asking for a smaller portion.",
      "Eat slowly, and have drinks between meals rather than with them.",
      "Choose not to eat foods you find uncomfortable.",
      "Talk to your dietitian or a counsellor if eating problems are causing strain.",
      "Find out about the RADAR key for accessible toilets.",
      "If you care for someone, try not to put pressure on them to eat.",
    ],
    tryThisWeek: [
      "Order a free OPA restaurant card.",
      "Drink between meals, not with them.",
      "Talk to someone about the strain.",
    ],
    ask: "Are there foods I should avoid when eating out, and can I see a dietitian or counsellor?",
    interactive: {
      kind: "scenarios",
      title: "Meals with other people",
      scenarios: [
        { id: "restaurant", situation: "A restaurant serves large portions.", options: [{ text: "Show a card asking for a child's size portion", best: true }, { text: "Try to finish a full plate" }], why: "The OPA's free card asks staff for a child's size portion, due to a medical condition." },
        { id: "drinks", situation: "Friends order drinks to have with the meal.", options: [{ text: "Have yours between meals, not with food", best: true }, { text: "Drink it with your food" }], why: "Have drinks between meals rather than with a meal, so the fluid does not make you feel full too quickly." },
        { id: "family", situation: "A relative keeps urging you to eat more.", options: [{ text: "Talk openly about what helps", best: true }, { text: "Force yourself to finish" }], why: "Try to talk openly about eating problems and what you both think will help. Pressure to eat can be stressful for both of you." },
        { id: "menu", situation: "A dish on the menu is one you find uncomfortable.", options: [{ text: "Choose something else", best: true }, { text: "Eat it anyway" }], why: "Some foods may be uncomfortable to eat, and you can choose not to eat them." },
      ],
    },
    sources: [CRUK_EATING, CRUK_COPING, OPA_CARD, OPA_OFFER, OPA_RADAR, MAC_EATING, MAC_EATING_PROBLEMS, OPA_GUIDE],
    quiz: {
      question: "What does the OPA's free card ask restaurant staff for?",
      options: [{ text: "A child's size portion", right: true }, { text: "A discount" }, { text: "A table near the door" }],
      why: "The other asks for a child's size portion, and the cards are available in multiple languages.",
    },
  },
  {
    id: "oes-work",
    kicker: "Work and money",
    question: "Can I go back to work, and what help is there with money?",
    hook: "A phased return, changes at work, grants and free advice: there is more help than many people expect.",
    short: "What you decide about work depends on your situation: you may take time off, return with changes, or stop. If your employer knows you have had cancer, they must consider reasonable adjustments, such as a phased return. Macmillan's money advisers and welfare rights advisers can help with benefits and costs.",
    sections: [
      {
        heading: "Your choices",
        paragraphs: [
          "What you decide to do about work after treatment depends on your situation. You may stop for a while until you feel ready, carry on with reduced hours or changes to your job, change jobs, or stop working.",
          "Many people continue working during treatment, but it depends on your energy levels, type of treatment and job. Your doctor can advise on adjustments or time off.",
        ],
      },
      {
        heading: "Reasonable adjustments",
        paragraphs: [
          "If your employer is aware you have had cancer, they must consider making reasonable adjustments to help you return to work. These could include a phased return, different working hours, or extra breaks to help you cope with tiredness.",
          "Make sure you are fully involved in any decisions about your return. It can help to write notes in your meetings, or to bring someone to support you.",
          "If you have or have ever had cancer, the law considers this a disability. This means you cannot be treated less favourably because you have cancer.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition. It could give you a grant for things like specialist equipment, or the costs of travelling to work if you cannot use public transport.",
          "An Access to Work grant will not affect any other benefits you get, and you will not have to pay it back. It does not pay for reasonable adjustments, which your employer must legally make.",
        ],
      },
      {
        heading: "Money",
        paragraphs: [
          "Macmillan's money advisers can give free and confidential advice, including on which benefits and financial support you might be entitled to. You can call them free on 0808 808 0000.",
          "Returning to work can change the benefits you get, so it is important to get advice from an experienced benefits adviser. Citizens Advice can give you advice too.",
          "Your doctor or specialist nurse can help you find out who can help with money, benefits, travel costs and work. Many hospitals have a social worker for people with cancer.",
        ],
      },
      {
        heading: "Debt worries",
        paragraphs: [
          "The OPA lists free, confidential and independent debt advice services. These include National Debtline, Citizens Advice and StepChange Debt Charity.",
          "Getting help early with practical things can mean that they do not become a big issue later.",
        ],
      },
    ],
    helps: [
      "Talk to your employer about reasonable adjustments, such as a phased return or extra breaks.",
      "Write notes in meetings about your return, or take someone with you.",
      "Check whether you are eligible for an Access to Work grant.",
      "Call Macmillan's money advisers free on 0808 808 0000.",
      "Get advice from a benefits adviser before your benefits change.",
      "Ask your doctor or specialist nurse whether a hospital social worker can help.",
    ],
    tryThisWeek: [
      "Ask about a phased return.",
      "Call a Macmillan money adviser.",
      "Check Access to Work.",
    ],
    ask: "When might I be ready to go back to work, and what changes would help me?",
    interactive: {
      kind: "flip-cards",
      title: "Help with work and money",
      intro: "Turn each card to see what each kind of help does.",
      cards: [
        { id: "adjust", front: "Reasonable adjustments", when: "From your employer", back: "Changes such as a phased return, different hours or extra breaks to help you cope with tiredness." },
        { id: "atw", front: "Access to Work", when: "A government grant", back: "Help with things like equipment or travel to work. It does not affect other benefits and is not paid back." },
        { id: "law", front: "The law", when: "If you have had cancer", back: "Cancer counts as a disability, so you cannot be treated less favourably because of it." },
        { id: "money", front: "Macmillan money advisers", when: "Free on 0808 808 0000", back: "Free, confidential advice on the benefits and financial support you might be entitled to." },
        { id: "debt", front: "Debt advice", when: "Listed by the OPA", back: "Free services such as National Debtline, Citizens Advice and StepChange Debt Charity." },
        { id: "social", front: "Hospital social worker", when: "Ask your doctor or nurse", back: "Many hospitals have a social worker for people with cancer, who can help with money matters." },
      ],
    },
    sources: [MAC_WORK, GOV_ATW, MAC_MONEY, OPA_MONEY, CRUK_COPING, OPA_CANCER],
    quiz: {
      question: "Does an Access to Work grant have to be paid back?",
      options: [{ text: "No, and it does not affect other benefits", right: true }, { text: "Yes, within a year" }, { text: "Only if you change jobs" }],
      why: "An Access to Work grant will not affect any other benefits you get, and you will not have to pay it back.",
    },
  },
  {
    id: "oes-mood",
    kicker: "Mood",
    question: "Why do I feel low now that treatment has ended?",
    hook: "Relief is not the only feeling when treatment stops. Low months are common, and they are worth talking about.",
    short: "When treatment ends you may feel relieved, but you may still have side effects and other emotions to cope with, and it can take time to adjust. Feelings of sadness and loss often improve, but if a low mood goes on for more than 2 weeks, talk to your doctor or nurse. Help is there from your team, Macmillan, the OPA and Samaritans.",
    sections: [
      {
        heading: "When treatment ends",
        paragraphs: [
          "When your treatment ends, you may feel relieved. But you may still have side effects and other emotions to cope with, and it can take time to find out what is now normal for you.",
          "People often have feelings of sadness or loss after cancer treatment, about how things have changed or things they cannot do any more. Being positive does not mean you have to feel happy all the time.",
        ],
      },
      {
        heading: "Worry about the cancer coming back",
        paragraphs: [
          "Worrying about the cancer coming back is common after treatment, and these feelings often get better with time. Going to hospital for a test, or hearing about cancer in the news, can trigger them.",
          "You may get anxious between appointments, and this is natural. Focusing on what you can control, such as your recovery, talking about your feelings and doing things you enjoy, can help.",
        ],
      },
      {
        heading: "When low mood becomes depression",
        paragraphs: [
          "For some people, low mood continues or gets worse and may become depression. Signs include feeling low most of the time, losing interest in things you used to enjoy, changes in sleeping, eating or concentration, and feeling helpless.",
          "It is normal to have these feelings sometimes. But if they go on for more than 2 weeks, talk to your doctor or nurse, who can listen, refer you to a counsellor or psychologist, or talk about medicine that can help.",
          "If you are prescribed an antidepressant, do not stop taking it suddenly. When you stop, follow your doctor's advice.",
        ],
      },
      {
        heading: "Talking to others",
        paragraphs: [
          "Talking to friends and relatives can help, and letting them know you would like to talk helps them support you. You might find it easier to talk to someone outside your family, such as a counsellor.",
          "The OPA's free patient buddy service pairs you, by phone, with a volunteer who has personal experience of cancer. Support groups and online forums let you talk with people going through similar experiences.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you have thoughts about self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free, any time, day or night, on 116 123.",
          "For urgent help with your mental health, call NHS 111 and select the mental health option, or ask for an urgent GP appointment. Call 999 or go to A&E if you do not feel you can keep yourself safe.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Let family and friends know if you would like to talk.",
      "Ask the OPA for a patient buddy who has been through treatment.",
      "Call the Macmillan Support Line free on 0808 808 00 00.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "For urgent help, call NHS 111 and select the mental health option.",
    ],
    tryThisWeek: [
      "Tell someone how you are feeling.",
      "Ask about an OPA patient buddy.",
      "Save Samaritans' number: 116 123.",
    ],
    ask: "I have felt low since treatment ended. What support is there for me?",
    interactive: {
      kind: "signs",
      title: "How you have been feeling",
      intro: "Tick what has been true for you most days. The ticked lines become a list to share with your doctor or nurse.",
      signs: [
        "Feeling low or sad most of the time",
        "Losing interest in things I used to enjoy",
        "Changes in my sleep",
        "Changes in my eating",
        "Finding it hard to concentrate",
        "Feeling helpless or vulnerable",
        "Problems starting or finishing tasks",
        "Worrying a lot about the cancer coming back",
      ],
      after: "If these go on for more than 2 weeks, talk to your doctor or nurse. Thoughts of suicide: your GP or nurse straight away, A&E, or Samaritans on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_FINISHING, MAC_DEPRESSION, MAC_WORRIES, CRUK_COPING, OPA_BUDDIES, NHS_URGENT, SAMARITANS, MAC_OES],
    quiz: {
      question: "If low feelings go on for more than 2 weeks, what does Macmillan suggest?",
      options: [{ text: "Talk to your doctor or nurse", right: true }, { text: "Keep it to yourself" }, { text: "Wait until your next scan" }],
      why: "But if they go on for more than 2 weeks, talk to your doctor or nurse, who can listen, refer you to a counsellor or psychologist, or talk about medicine that can help.",
    },
  },
];
