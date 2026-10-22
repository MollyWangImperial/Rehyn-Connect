import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Acute kidney injury page's pieces
// (content/library-conditions/digestion-more.ts). Every sentence was written from wording checked on
// 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do
// not say. Most of it comes from the NHS, Kidney Care UK, the National Kidney Federation, Kidney Research UK
// and NICE. General information only; it never replaces what a person's own GP or kidney team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const kcuk = (label: string, path: string): LearnSource => ({ label: `Kidney Care UK: ${label}`, url: `https://kidneycareuk.org/${path}` });
const nice = (label: string, path: string): LearnSource => ({ label: `NICE: ${label}`, url: `https://www.nice.org.uk/guidance/ng148/${path}` });

const NHS_AKI = nhs("Acute kidney injury (AKI)", "conditions/acute-kidney-injury/");
const NHS_DEHYDRATION = nhs("Dehydration", "conditions/dehydration/");
const NHS_DV = nhs("Diarrhoea and vomiting", "symptoms/diarrhoea-and-vomiting/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_NSAIDS = nhs("NSAIDs", "medicines/nsaids/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_METFORMIN = nhs("Metformin", "medicines/metformin/");
const NHS_FUROSEMIDE = nhs("Furosemide", "medicines/furosemide/");
const NHS_DIALYSIS_WHY = nhs("Why dialysis is done", "tests-and-treatments/dialysis/why-its-done/");
const NHS_DIALYSIS_HOW = nhs("How dialysis is done", "tests-and-treatments/dialysis/how-its-done/");
const NHS_CATHETER = nhs("Urinary catheters", "tests-and-treatments/urinary-catheters/");
const NHS_CT = nhs("CT scan", "tests-and-treatments/ct-scan/");
const NHS_BLOOD_TESTS = nhs("Blood tests", "tests-and-treatments/blood-tests/");
const NHS_CKD_PREVENTION = nhs("Preventing chronic kidney disease", "conditions/kidney-disease/prevention/");

const KCUK_AKI = kcuk("Acute kidney injury (AKI)", "kidney-disease-information/kidney-conditions/patient-info-acute-kidney-injury-aki/");
const KCUK_MED_BP = kcuk("Medicines for high blood pressure", "kidney-disease-information/treatments/medication-for-kidney-disease/patient-info-medicines-for-high-blood-pressure/");
const KCUK_SGLT2 = kcuk("SGLT2 inhibitors", "kidney-disease-information/treatments/medication-for-kidney-disease/patient-info-sglt2-inhibitors/");
const KCUK_OTC = kcuk("Over-the-counter medicines", "kidney-disease-information/treatments/medication-for-kidney-disease/patient-info-over-the-counter-medicines/");
const KCUK_PAIN = kcuk("Pain medication for people with chronic kidney disease", "kidney-disease-information/treatments/medication-for-kidney-disease/patient-info-pain-medication-for-people-with-chronic-kidney-disease/");
const KCUK_FLUID = kcuk("Managing your fluid levels", "get-support/healthy-diet-support/patient-info-managing-your-fluid-levels/");
const KCUK_HD = kcuk("Haemodialysis (HD)", "kidney-disease-information/treatments/haemodialysis/");

const NKF_AKI: LearnSource = { label: "National Kidney Federation: Acute kidney injury", url: "https://www.kidney.org.uk/acute-kidney-injury" };
const KRUK_AKI: LearnSource = { label: "Kidney Research UK: Acute kidney injury", url: "https://www.kidneyresearchuk.org/conditions-symptoms/acute-kidney-injury/" };

const NICE_RECS = nice("Acute kidney injury (NG148), recommendations", "chapter/Recommendations");
const NICE_CONTEXT = nice("Acute kidney injury (NG148), context", "chapter/Context");
const NICE_PUBLIC = nice("Acute kidney injury: the care you should expect", "informationforpublic");

export const akiAnswers: LearnArticle[] = [
  {
    id: "aki-what-it-is",
    kicker: "Understanding",
    question: "What is acute kidney injury?",
    hook: "Not a blow to the kidneys, but a sudden drop in how well they work, usually during another illness. Most of the time, it gets better.",
    short: "Acute kidney injury, or AKI, is when something suddenly causes your kidneys to stop working as well as they should. It normally happens as a complication of another condition. It is usually temporary and often gets better without long-term problems, but it is important that it is found early and treated promptly.",
    sections: [
      {
        heading: "A sudden drop",
        paragraphs: [
          "Acute kidney injury, or AKI, is when something suddenly causes your kidneys to stop working as well as they should. It can range from a small loss of function to complete failure.",
          "It used to be called acute renal failure. AKI normally happens as a complication of another condition, and the problem may be in your kidneys or somewhere else in your body.",
        ],
      },
      {
        heading: "What the words mean",
        paragraphs: [
          "The word acute means an illness that has developed recently. This can be within the last 6 weeks, but often AKI develops over a period of days. Acute does not always mean that a problem is severe.",
          "Injury does not mean you have hurt your kidneys in the way you can hurt other parts of your body, by falling over or getting hit. It means the kidneys have lost some of their function, usually because of another illness or sometimes a medicine.",
        ],
      },
      {
        heading: "What the kidneys do",
        paragraphs: [
          "Your kidneys are like filters that remove waste products from your blood. They also help control your blood pressure, make urine, keep the right amount of fluid in your body, and control minerals such as potassium and phosphate.",
          "The kidneys stop harmful substances building up in the body. Sometimes, in AKI, they also cannot get rid of extra water, which can make your legs swell or make it harder to breathe.",
        ],
      },
      {
        heading: "Not the same as CKD",
        paragraphs: [
          "AKI is not the same as chronic kidney disease, or CKD, which does not get better but can be slowed or managed with treatment. AKI is usually temporary and often gets better without causing any long-term problems.",
          "It can be very serious for some people, and can become life-threatening if it is not treated quickly. That is why it is important that it is found early and treated promptly.",
        ],
      },
    ],
    helps: [
      "Get medical help if you think you have AKI.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you think you may have symptoms of AKI.",
      "Tell your doctor about the medicines you have been taking, and whether you have had a recent illness, accident or operation.",
      "If you cannot understand the information you are given, tell your healthcare professional.",
      "Call the Kidney Care UK support line on 0808 801 00 00 for advice and information.",
    ],
    tryThisWeek: [
      "Know when to call NHS 111.",
      "List your recent medicines.",
      "Say if anything is unclear.",
    ],
    ask: "What caused my kidney injury, and how much function have my kidneys lost?",
    interactive: {
      kind: "flip-cards",
      title: "AKI, word by word",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "acute", front: "Acute", when: "The A in AKI", back: "Developed recently, often over days. It does not always mean that a problem is severe." },
        { id: "kidney", front: "Kidney", when: "The K in AKI", back: "Filters that remove waste from your blood and keep the right amount of fluid in your body." },
        { id: "injury", front: "Injury", when: "The I in AKI", back: "The kidneys have lost some function, usually because of another illness. Not a fall or a blow." },
        { id: "not-ckd", front: "Not CKD", when: "Chronic kidney disease", back: "CKD does not get better, though it can be slowed. AKI is usually temporary." },
      ],
    },
    sources: [NHS_AKI, KCUK_AKI, NKF_AKI, KRUK_AKI, NICE_PUBLIC],
    quiz: {
      question: "What does acute mean in acute kidney injury?",
      options: [{ text: "It developed recently", right: true }, { text: "It is always severe" }, { text: "The kidneys were hit" }],
      why: "The word acute means an illness that has developed recently. Acute does not always mean that a problem is severe.",
    },
  },
  {
    id: "aki-causes",
    kicker: "Causes",
    question: "Why does AKI happen?",
    hook: "An infection, losing fluid, a blockage or a medicine can each tip the kidneys over. Often it is more than one of them at once.",
    short: "Lots of things can cause AKI, and often there is more than one. Infections and sepsis, dehydration, low blood pressure, blockages to the flow of urine, some medicines and the dye used in some scans are all possible causes. An operation can also cause it, especially with infection or dehydration.",
    sections: [
      {
        heading: "Often more than one thing",
        paragraphs: [
          "Lots of things can cause AKI. One of the first steps doctors take is to try to find the cause or causes, and often there is more than one factor.",
          "AKI is often caused by problems elsewhere in the body, but in some cases it is caused by diseases starting in the kidney.",
        ],
      },
      {
        heading: "Illness and losing fluid",
        paragraphs: [
          "Infections and sepsis are possible causes. Any severe infection can stress the kidneys, even if the infection is not in the kidneys themselves.",
          "Dehydration, low blood pressure and blood loss can also cause it. Severe dehydration reduces the blood flow to the kidneys, and without blood flow providing oxygen, the kidneys do not work as well. This can happen after a bout of sickness and diarrhoea which prevents someone eating and drinking properly.",
        ],
      },
      {
        heading: "Medicines and scan dye",
        paragraphs: [
          "Long-term use of some medicines can cause AKI, such as ACE inhibitors, anti-inflammatory painkillers called NSAIDs, and medicines that make you pee more, called diuretics. This does not necessarily mean they were prescribed incorrectly.",
          "The dye, called contrast, sometimes injected as part of scans such as a CT scan or angiography can also cause it. Tell the hospital before a CT scan if you have kidney problems.",
        ],
      },
      {
        heading: "Blockages and operations",
        paragraphs: [
          "Urine passes from the kidneys down long thin tubes to the bladder. Blockages, such as kidney stones, an enlarged or inflamed prostate or tumours, can cause AKI, and a simple scan can usually detect them.",
          "An operation can cause AKI too, especially if there is infection or dehydration, as the blood flow to the kidneys may be reduced during surgery. Before an operation, the anaesthetic team will review your medicines and may make changes to try to protect your kidneys.",
        ],
      },
    ],
    helps: [
      "Tell your doctor about the medicines you have been taking, including painkillers bought without a prescription.",
      "Tell your doctor whether you have had a recent illness, accident or operation.",
      "Stay hydrated, especially in hot weather or if you are being sick or have diarrhoea.",
      "Tell the hospital before a CT scan if you have kidney problems, take any medicines or have diabetes.",
      "Speak to a doctor before taking any new medicines or supplements.",
    ],
    tryThisWeek: [
      "List all your medicines.",
      "Drink enough when you are ill.",
      "Mention your kidneys before a scan.",
    ],
    ask: "Which of these do you think caused my AKI, and can it happen again?",
    interactive: {
      kind: "risk-check",
      title: "What can lead to AKI?",
      intro: "Tick any that have happened to you recently. Some can be changed, and some cannot.",
      items: [
        { id: "infection", label: "A severe infection or sepsis", note: "Any severe infection can stress the kidneys, even if it is not in the kidneys themselves.", changeable: false },
        { id: "dehydration", label: "Dehydration, sickness or diarrhoea", note: "Severe dehydration reduces the blood flow to the kidneys. Staying hydrated helps.", changeable: true },
        { id: "medicines", label: "Medicines such as NSAIDs or diuretics", note: "Some medicines can cause AKI. A doctor may stop or change them.", changeable: true },
        { id: "low-bp", label: "Low blood pressure or blood loss", note: "Both are possible causes of AKI, the NHS says.", changeable: false },
        { id: "dye", label: "A scan with contrast dye", note: "The dye sometimes injected for a CT scan or angiography can cause AKI.", changeable: false },
        { id: "blockage", label: "A blockage, such as a kidney stone", note: "Blockages to the flow of urine can cause AKI. A simple scan can usually find them.", changeable: false },
        { id: "surgery", label: "A recent operation", note: "Especially with infection or dehydration, as blood flow to the kidneys may be reduced.", changeable: false },
      ],
    },
    sources: [NHS_AKI, KCUK_AKI, NKF_AKI, KRUK_AKI, NICE_PUBLIC, NHS_CT],
    quiz: {
      question: "Why can dehydration lead to AKI?",
      options: [{ text: "It reduces blood flow to the kidneys", right: true }, { text: "It makes the kidneys grow" }, { text: "It has no effect on the kidneys" }],
      why: "Severe dehydration reduces the blood flow to the kidneys, and without blood flow providing oxygen, the kidneys do not work as well.",
    },
  },
  {
    id: "aki-who",
    kicker: "Risk",
    question: "Who is more likely to get AKI?",
    hook: "It can happen at any age, but it is far more common in older people and in anyone who is already unwell.",
    short: "Anyone can get AKI, but it is more common if you are aged 65 or older, have had AKI before or have recently had surgery. Long-term conditions such as chronic kidney disease, heart failure, liver disease and diabetes raise the risk, and so does relying on someone else for drinks.",
    sections: [
      {
        heading: "Anyone can get it",
        paragraphs: [
          "Anyone can get AKI, and it can affect people of all ages. But it is more common in older people and in people who are already unwell with other medical conditions.",
          "NICE says AKI is seen in 13% to 18% of all people admitted to hospital, with older adults particularly affected. It is also increasingly being seen by GPs in people without any sudden illness.",
        ],
      },
      {
        heading: "What raises the chance",
        paragraphs: [
          "The NHS says it is more common if you are aged 65 or older, have had AKI before, have recently had surgery or take illegal drugs.",
          "NICE lists other things that raise the risk in someone who is unwell. These include chronic kidney disease, heart failure, liver disease and diabetes, and recent use of some medicines, such as NSAIDs and diuretics.",
        ],
      },
      {
        heading: "Kidneys that were not working perfectly",
        paragraphs: [
          "If your kidneys are not working perfectly in the first place and you get ill for any reason, you are more likely to get AKI than someone with perfectly normal kidneys.",
          "NICE says a rise in creatinine in someone with chronic kidney disease may be AKI, rather than their chronic disease getting worse.",
        ],
      },
      {
        heading: "Relying on others for drinks",
        paragraphs: [
          "People with a neurological or cognitive impairment or disability may have limited access to fluids if they rely on a carer. NICE says the risk of AKI should be discussed with them and, where it helps, with their carers.",
          "Dehydration can happen more easily if you rely on other people to get you drinks, have diabetes, take water tablets or have a high temperature. Making sure the person you care for has access to fluids at all times can help.",
        ],
      },
    ],
    helps: [
      "Know the symptoms of AKI to watch out for, especially if you are aged 65 or older or have had AKI before.",
      "Speak to a doctor before taking any new medicines or supplements.",
      "If you care for someone, make sure they drink at mealtimes and have access to fluids at all times.",
      "If you have chronic kidney disease, ask your team about the risk from dehydration and from medicines, including NSAIDs you can buy.",
      "Stay hydrated, especially in hot weather or if you are being sick or have diarrhoea.",
    ],
    tryThisWeek: [
      "Learn the warning signs.",
      "Offer drinks at mealtimes.",
      "Ask about your own risk.",
    ],
    ask: "Am I at higher risk of AKI, and what should I watch for?",
    interactive: {
      kind: "risk-check",
      title: "Who is more likely to get AKI?",
      intro: "Tick any that apply. Some can be changed, and some cannot.",
      items: [
        { id: "age", label: "Aged 65 or older", note: "The NHS says AKI is more common at this age.", changeable: false },
        { id: "before", label: "Had AKI before", note: "The NHS says AKI is more common if you have had it before.", changeable: false },
        { id: "surgery", label: "Recent surgery", note: "An operation can cause AKI, especially with infection or dehydration.", changeable: false },
        { id: "ckd", label: "Chronic kidney disease", note: "Kidneys not working perfectly make AKI more likely when you are ill.", changeable: false },
        { id: "long-term", label: "Heart failure, liver disease, diabetes", note: "NICE lists each of these as raising the risk in someone who is unwell.", changeable: false },
        { id: "carer", label: "Relying on others for drinks", note: "This can limit access to fluids. Having fluids within reach at all times can help.", changeable: true },
        { id: "medicines", label: "Medicines such as NSAIDs or diuretics", note: "Speak to a doctor before taking any new medicines or supplements.", changeable: true },
      ],
    },
    sources: [NHS_AKI, KCUK_AKI, NICE_RECS, NICE_CONTEXT, NKF_AKI, NICE_PUBLIC, NHS_DEHYDRATION],
    quiz: {
      question: "Which group is AKI more common in?",
      options: [{ text: "People aged 65 or older", right: true }, { text: "Young people who exercise" }, { text: "People who drink plenty of water" }],
      why: "The NHS says it is more common if you are aged 65 or older, have had AKI before, have recently had surgery or take illegal drugs.",
    },
  },
  {
    id: "aki-signs",
    kicker: "Signs",
    question: "What are the signs, and how is AKI found?",
    hook: "Often there are none, and a blood test picks it up. When there are, peeing much less than usual is the one to notice.",
    short: "Many people get no symptoms, especially if AKI is mild, and it is often found on tests done for another reason. Symptoms can include peeing a lot less than usual, feeling very thirsty, feeling sick, swollen feet or legs, and feeling tired, dizzy or confused. It is diagnosed with a blood test for creatinine.",
    sections: [
      {
        heading: "Often no symptoms",
        paragraphs: [
          "Many people do not get symptoms of AKI, especially if it is mild. It may have no symptoms other than those of the illness leading to it, and it is often found when you are having tests or are in hospital for another reason.",
          "The most obvious sign is passing less urine than usual, especially during a bout of severe illness or after an operation or accident. But not everyone with AKI passes less urine.",
        ],
      },
      {
        heading: "Symptoms that can happen",
        paragraphs: [
          "If you do get symptoms, they may include peeing a lot less than usual, feeling very thirsty, feeling or being sick, and swollen feet or legs.",
          "You may also feel tired, dizzy, confused or sleepy, or breathless, especially when you lie down. Kidney Care UK says some people feel generally ill, like a hangover, and that symptoms may appear suddenly over just a few days.",
        ],
      },
      {
        heading: "How it is found",
        paragraphs: [
          "AKI is diagnosed with a blood test for creatinine, a waste product made by your muscles and removed by your kidneys. Higher levels than usual mean your kidneys are not working as well as they should, and the more creatinine, the more severe the AKI.",
          "A doctor may also ask for a urine sample, ask how often you have been peeing, and check your pulse and blood pressure. You may have an ECG, or scans such as an ultrasound, X-ray or CT scan. An ultrasound can show if there is a blockage to the flow of urine.",
          "NICE says one way to detect AKI is a rise in creatinine of 26 micromol per litre or more within 48 hours. Creatinine is usually measured every day while you are in hospital.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you think you may have symptoms of AKI. You can get help from 111 online or call 111.",
          "Sepsis is one possible cause of AKI, and needs medical help immediately. Call 999 or go to A&E if an adult is breathing very fast, is confused or has slurred speech, has blue, pale or blotchy skin, has a very high or very low temperature, or has a rash that does not fade when you press it.",
        ],
      },
    ],
    helps: [
      "Know the symptoms of AKI to watch out for and when to get medical help, and ask a doctor if you are unsure about any warning signs.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you think you may have symptoms of AKI.",
      "Call 999 or go to A&E if you think you or someone else might have sepsis.",
      "Do not drive to A&E: ask someone to drive you, or call 999 and ask for an ambulance, and bring any medicines you take.",
      "Tell the doctor how often you have been peeing.",
    ],
    tryThisWeek: [
      "Learn the signs of AKI.",
      "Know when to call NHS 111.",
      "Know when sepsis means 999.",
    ],
    ask: "Which blood results showed my AKI, and what were they before?",
    interactive: {
      kind: "signs",
      title: "Signs to tell a doctor about",
      intro: "Tick any you have noticed. Many people with AKI have no symptoms, so any of these are worth reporting.",
      signs: ["Peeing a lot less than usual", "Feeling very thirsty", "Feeling or being sick", "Swollen feet or legs", "Tired, dizzy, confused or sleepy", "Breathless, especially lying down", "Feeling generally ill, like a hangover"],
      after: "Ask for an urgent GP appointment or get help from NHS 111 if you think you may have symptoms of AKI. If you think it might be sepsis, call 999 or go to A&E.",
      copyHeading: "Signs I have noticed",
    },
    sources: [NHS_AKI, KCUK_AKI, NKF_AKI, KRUK_AKI, NICE_RECS, NHS_SEPSIS],
    quiz: {
      question: "Which blood test is used to diagnose AKI?",
      options: [{ text: "Creatinine", right: true }, { text: "Cholesterol" }, { text: "Blood sugar" }],
      why: "AKI is diagnosed with a blood test for creatinine, a waste product made by your muscles and removed by your kidneys.",
    },
  },
  {
    id: "aki-treatment",
    kicker: "Treatment",
    question: "How is AKI treated?",
    hook: "Find the cause and treat it fast: fluids for dehydration, antibiotics for infection, and clearing any blockage.",
    short: "Treatment depends on how bad the AKI is and what is causing it. It may mean fluids through a drip, antibiotics, stopping or changing a medicine, a catheter to drain and measure urine, or treatment to clear a blockage. AKI is usually treated by a GP, and only severe cases need hospital care or dialysis.",
    sections: [
      {
        heading: "Treating the cause",
        paragraphs: [
          "Treatment depends on how bad the AKI is and what is causing it. It is important to find the cause and treat it quickly.",
          "AKI is usually treated by your GP, and most people do not need to see a specialist kidney doctor. If it is severe, or the cause is not clear, you may be referred to a kidney specialist, called a nephrologist, or admitted to hospital.",
        ],
      },
      {
        heading: "Fluids and medicines",
        paragraphs: [
          "If dehydration is the cause, it may get better simply by drinking more water. If you are very dehydrated, fluid may be given straight into a vein through a drip in your arm.",
          "You may be given antibiotics to treat an infection, or medicine to raise your blood pressure, reduce swelling or calm your immune system. Any medicine that could be damaging your kidneys may be stopped or changed.",
        ],
      },
      {
        heading: "Watching what goes in and out",
        paragraphs: [
          "You may be closely monitored to check the amount of fluid entering and leaving your body. A thin tube called a catheter may be put into your bladder, so the urine can drain into a bag to be measured.",
          "A catheter may be removed after a few minutes, hours or days, depending on why it is being used. The longer a catheter is used, the greater the risk of infection, so they are only used for as long as necessary.",
        ],
      },
      {
        heading: "Clearing a blockage",
        paragraphs: [
          "An ultrasound scan of the kidneys can show if there is a blockage to the flow of urine. NICE says an urgent scan should be offered within 24 hours when there is no clear cause, and within 6 hours if an infected, blocked kidney is suspected.",
          "A blockage in the kidneys or bladder may need treatment, sometimes surgery. When a blockage higher up the urinary tract is treated with a stent or a drainage tube, NICE says it should be done as soon as possible and within 12 hours of diagnosis.",
        ],
      },
      {
        heading: "If it is more serious",
        paragraphs: [
          "If waste builds up in your blood or there is too much fluid in your body, you may need dialysis, which does the job of your kidneys. If the illness also causes very low blood pressure or affects your breathing, you may need care in a critical care unit.",
        ],
      },
    ],
    helps: [
      "Tell the doctors about all the medicines you take, including painkillers bought without a prescription.",
      "Ask your team to explain what you can do yourself to help your recovery, and what to expect in the future.",
      "Ask your doctor to review your medicines once your kidney function starts to recover, to see whether they can be restarted.",
      "If you have a catheter, ask how long it is needed, as catheters are only used for as long as necessary.",
    ],
    tryThisWeek: [
      "Share your full medicines list.",
      "Ask what you can do to help.",
      "Ask when medicines can restart.",
    ],
    ask: "What is the treatment for the cause of my AKI, and how will we know it is working?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments, card by card",
      intro: "Turn each card to see what each treatment does.",
      cards: [
        { id: "drip", front: "A drip", when: "If you are very dehydrated", back: "Fluid goes straight into a vein through a tube in your arm." },
        { id: "antibiotics", front: "Antibiotics", when: "If an infection is the cause", back: "Treat the infection. They may be given through a needle in your arm." },
        { id: "review", front: "A medicine review", when: "If a medicine may harm the kidneys", back: "It may be stopped or changed, then reviewed once your kidney function starts to recover." },
        { id: "catheter", front: "A catheter", when: "To measure your urine", back: "A thin tube in your bladder drains urine into a bag, so it can be measured." },
        { id: "blockage", front: "Clearing a blockage", when: "If urine cannot drain", back: "A scan can usually find it. A stent, a drainage tube or surgery may clear it." },
        { id: "dialysis", front: "Dialysis", when: "In more serious cases", back: "Does the job of your kidneys, usually for a few days or weeks until they recover." },
      ],
    },
    sources: [NHS_AKI, KCUK_AKI, NKF_AKI, KRUK_AKI, NICE_RECS, NHS_CATHETER, NICE_PUBLIC],
    quiz: {
      question: "Who usually treats AKI?",
      options: [{ text: "Your GP", right: true }, { text: "Always a kidney surgeon" }, { text: "No one: it is left alone" }],
      why: "AKI is usually treated by your GP, and most people do not need to see a specialist kidney doctor.",
    },
  },
  {
    id: "aki-medicines",
    kicker: "Medicines",
    question: "Why might some of my medicines be paused?",
    hook: "Some everyday tablets can strain the kidneys when you are ill. Pausing them for a while, then restarting, is a normal part of care.",
    short: "Some medicines can cause AKI or make it worse, so stopping or changing them is part of treatment. Your doctor may advise pausing some medicines while you are unwell, known as sick day rules, until you have been eating and drinking normally for at least 48 hours. Your doctor will then review whether they can be restarted.",
    sections: [
      {
        heading: "Why some medicines are paused",
        paragraphs: [
          "Some medicines can cause AKI or make it worse, such as anti-inflammatory painkillers like ibuprofen, naproxen and diclofenac, and some medicines for high blood pressure. Stopping or changing a medicine that could be damaging your kidneys is part of treatment.",
          "This does not necessarily mean the medicine was prescribed incorrectly. But it is important for the doctors to know everything you take, including medicines not on prescription, especially painkillers.",
        ],
      },
      {
        heading: "Sick day rules",
        paragraphs: [
          "Your doctor may advise you to stop some of your medicines for a while, or adjust the dose. This is known as sick day rules.",
          "Kidney Care UK lists blood pressure medicines you may be advised to stop: ACE inhibitors, ARBs and water tablets, called diuretics. Other medicines you may be advised to stop include metformin, tolvaptan and SGLT2 inhibitors, sometimes called flozins.",
          "NICE advises doctors to consider pausing ACE inhibitors and ARBs in people with diarrhoea, vomiting or sepsis, until their condition has improved and is stable.",
        ],
      },
      {
        heading: "SGLT2 inhibitors",
        paragraphs: [
          "Kidney Care UK says SGLT2 inhibitors should be stopped for a while if you are not eating or drinking as normal, are dehydrated, have diarrhoea or vomiting, have a high temperature or low blood pressure, or are admitted to hospital.",
          "You will usually be able to start them again when you have been feeling better for two days. Ask your healthcare team if you are unsure.",
        ],
      },
      {
        heading: "Restarting",
        paragraphs: [
          "Your doctor or nurse may suggest stopping some medicines until you have been eating and drinking normally again for at least 48 hours. Once your kidney function starts to recover, your doctor will review your medicines to see whether they can be restarted.",
          "Always check with your GP, kidney doctor or pharmacist before changing or starting any medicine. For metformin, the NHS says to talk to a pharmacist or doctor if you get vomiting, diarrhoea or a fever, or to follow the advice they have already given you.",
        ],
      },
    ],
    helps: [
      "Ask your doctor which medicines to avoid if you become unwell or dehydrated.",
      "Check with your GP, kidney doctor or pharmacist before changing or starting any medicine.",
      "Tell the doctors about everything you take, including medicines bought without a prescription.",
      "Restart paused medicines only as advised, usually once you have been eating and drinking normally for at least 48 hours.",
      "Check with your doctor before taking any new medicine or herbal supplement, in case it could damage your kidneys.",
    ],
    tryThisWeek: [
      "Ask which medicines to pause.",
      "Check before starting anything new.",
      "Restart only as advised.",
    ],
    ask: "Which of my medicines should be paused or changed, and when can they restart?",
    interactive: {
      kind: "scenarios",
      title: "Medicines when you are unwell",
      scenarios: [
        {
          id: "vomiting",
          situation: "You take an ACE inhibitor and have had diarrhoea and vomiting since yesterday.",
          options: [{ text: "Follow your sick day advice, or ask", best: true }, { text: "Take an extra dose" }],
          why: "Your doctor or nurse may suggest stopping some medicines, such as ACE inhibitors, until you have been eating and drinking normally again for at least 48 hours.",
        },
        {
          id: "flozin",
          situation: "You take an SGLT2 inhibitor and have a high temperature.",
          options: [{ text: "Follow sick day advice for it", best: true }, { text: "Carry on as normal" }],
          why: "Kidney Care UK says SGLT2 inhibitors should be stopped for a while if you have a high temperature. Ask your healthcare team if you are unsure.",
        },
        {
          id: "restart",
          situation: "You stopped being sick a few hours ago.",
          options: [{ text: "Wait until advised, often 48 hours", best: true }, { text: "Restart everything now" }],
          why: "You will usually be able to start them again when you have been feeling better for two days.",
        },
        {
          id: "herbal",
          situation: "A friend suggests a herbal supplement to help your kidneys.",
          options: [{ text: "Check with your doctor first", best: true }, { text: "Start it straight away" }],
          why: "Check with your doctor before taking any new medicine or herbal supplement, in case it could damage your kidneys.",
        },
      ],
    },
    sources: [NHS_AKI, KCUK_AKI, KCUK_MED_BP, KCUK_SGLT2, NICE_RECS, KRUK_AKI, NKF_AKI, NHS_METFORMIN],
    quiz: {
      question: "What are sick day rules?",
      options: [{ text: "Advice on pausing some medicines when unwell", right: true }, { text: "Rules for days off work" }, { text: "A special diet for sick days" }],
      why: "Your doctor may advise you to stop some of your medicines for a while, or adjust the dose. This is known as sick day rules.",
    },
  },
  {
    id: "aki-recovery",
    kicker: "Recovery",
    question: "How long does recovery take?",
    hook: "For most people, a few weeks. After a more serious illness, it can be months, and getting your strength back is part of it.",
    short: "Most people with AKI make a full recovery, and many recover fully within a few weeks. If the AKI was more serious, it can take several months, and if you were in hospital it may take time to get your strength back. Some people are left with chronic kidney disease.",
    sections: [
      {
        heading: "Most people recover",
        paragraphs: [
          "Most people with AKI make a full recovery and do not need any long-term treatment. Many people recover fully within a few weeks, with no long-term effects.",
          "In some cases, AKI gets better in a couple of days with fluids and antibiotics. If it is more serious, it can take several months to recover.",
        ],
      },
      {
        heading: "What affects recovery",
        paragraphs: [
          "How long recovery takes varies from person to person. It depends on what caused the AKI, how severe it was, and what other health problems you have.",
          "Most of the time, the kidneys recover completely back to normal. But if they were not normal to start with, the AKI was severe, or you have other health conditions, they may not make a complete recovery.",
        ],
      },
      {
        heading: "Getting your strength back",
        paragraphs: [
          "If AKI meant a stay in hospital, you may feel weak, and it may take time to get your full strength back.",
          "If you had difficulty walking before, recovery or rehabilitation could take weeks. Specialist rehabilitation services may be needed, and some people need help at home from carers.",
        ],
      },
      {
        heading: "If the kidneys do not fully recover",
        paragraphs: [
          "Some people who have had AKI end up with permanent damage to their kidneys, causing chronic kidney disease. This is more likely if the AKI was severe or you already have other long-term health problems.",
          "Kidney Research UK says chronic kidney disease can also develop two to three years after an episode of AKI. It is a lifelong condition, but it can often be managed through lifestyle changes.",
        ],
      },
    ],
    helps: [
      "Go to your blood tests and check-ups after you have recovered, to make sure your kidneys are working as expected.",
      "Ask your team to explain what you can do yourself to help your recovery, and what to expect in the future.",
      "Ask about rehabilitation or help at home if you are finding it hard to get your strength back.",
      "Ask your doctor which warning signs to watch for in future.",
      "Speak to your GP if you have any concerns about AKI.",
    ],
    tryThisWeek: [
      "Keep your follow-up tests.",
      "Ask what helps your recovery.",
      "Ask about help at home.",
    ],
    ask: "Have my kidneys recovered fully, and what should I expect over the next few months?",
    interactive: {
      kind: "timeline",
      title: "How recovery can go",
      steps: [
        { id: "days", when: "A couple of days", title: "Some milder cases", points: ["Some get better with fluids and antibiotics.", "Treating the cause comes first."] },
        { id: "weeks", when: "A few weeks", title: "Many people", points: ["Many recover fully, with no long-term effects.", "Getting your strength back can take time."] },
        { id: "months", when: "Several months", title: "More serious AKI", points: ["Recovery can take longer.", "Rehabilitation or help at home may be needed."] },
        { id: "years", when: "The years after", title: "Check-ups", points: ["Regular blood tests and check-ups.", "CKD can develop two to three years later."] },
      ],
    },
    sources: [NHS_AKI, KCUK_AKI, NKF_AKI, KRUK_AKI, NICE_PUBLIC],
    quiz: {
      question: "How long do many people take to recover fully from AKI?",
      options: [{ text: "A few weeks", right: true }, { text: "Ten years" }, { text: "Nobody recovers" }],
      why: "Many people recover fully within a few weeks, with no long-term effects.",
    },
  },
  {
    id: "aki-dialysis",
    kicker: "Treatment",
    question: "What if I need dialysis for a while?",
    hook: "A machine does the kidneys' job while they rest. For most people with AKI, it is days or weeks, not for life.",
    short: "In more serious AKI, if waste or fluid builds up in the body, dialysis may be needed to do the job of the kidneys. Most people with AKI only need it for a few days or weeks until their kidneys start working again. Usually, the blood is cleaned through a machine in hospital.",
    sections: [
      {
        heading: "Why it may be needed",
        paragraphs: [
          "Your kidneys filter waste products out of your blood. If they do not work properly, these waste products can build up in your body and make you very ill.",
          "In more serious cases of AKI, if waste builds up in your blood or there is too much fluid in your body, you may need dialysis. It is a treatment that does the job of your kidneys while they recover.",
        ],
      },
      {
        heading: "Usually for a short time",
        paragraphs: [
          "Most people with AKI only need dialysis for a few days or weeks until their kidneys start working again. This is different from chronic kidney disease, where dialysis is needed for the rest of your life, or until a kidney transplant.",
          "NICE says the decision to start dialysis should be based on a person's condition as a whole, not on one blood result. The specialist should talk the treatment through with you, or your family or carer, before starting it.",
        ],
      },
      {
        heading: "How it is done",
        paragraphs: [
          "In severe cases, you may need to go into hospital to have dialysis. Usually, blood is cleaned through a machine, and sometimes fluid is passed in and out of the tummy instead.",
          "In haemodialysis, your blood flows into a machine and is cleaned before flowing back into your body. A haemodialysis catheter, known as a vascath, is a tube intended for short-term use, and a tunnelled line is a soft plastic tube put into one of the large veins in your chest or neck.",
        ],
      },
      {
        heading: "How it can feel",
        paragraphs: [
          "Dialysis can leave you feeling tired and sick after a session. Haemodialysis can also cause muscle cramps and dizziness during or shortly after a session.",
          "Talk to your care team if these side effects are a problem, as they may be able to help. If you need dialysis after leaving hospital, NICE says you should be told how often sessions are, how long they last and how to prepare.",
        ],
      },
    ],
    helps: [
      "Ask for full information and support to make decisions about your care if you need dialysis while your kidneys recover.",
      "Talk to your care team if side effects such as tiredness, feeling sick, cramps or dizziness are a problem.",
      "If you need dialysis after leaving hospital, ask how often sessions are, how long they last and how to prepare.",
      "Call the Kidney Care UK support line on 0808 801 00 00 for information and support.",
    ],
    tryThisWeek: [
      "Ask for full information.",
      "Mention any side effects.",
      "Ask about sessions after hospital.",
    ],
    ask: "Why do I need dialysis, and how will we know when my kidneys have recovered enough to stop?",
    interactive: {
      kind: "scenarios",
      title: "Questions about dialysis",
      scenarios: [
        {
          id: "forever",
          situation: "You are told you need dialysis because of AKI.",
          options: [{ text: "Most need it for days or weeks", best: true }, { text: "It is always for life" }],
          why: "Most people with AKI only need dialysis for a few days or weeks until their kidneys start working again.",
        },
        {
          id: "cramps",
          situation: "You get cramps and feel dizzy after a session.",
          options: [{ text: "Tell your care team", best: true }, { text: "Say nothing and put up with it" }],
          why: "Talk to your care team if these side effects are a problem, as they may be able to help.",
        },
        {
          id: "one-result",
          situation: "You wonder whether a single blood result decided it.",
          options: [{ text: "Your whole condition is weighed up", best: true }, { text: "One number decides" }],
          why: "NICE says the decision to start dialysis should be based on a person's condition as a whole, not on one blood result.",
        },
      ],
    },
    sources: [NHS_AKI, KCUK_AKI, NKF_AKI, NHS_DIALYSIS_WHY, NHS_DIALYSIS_HOW, KCUK_HD, NICE_RECS, NICE_PUBLIC],
    quiz: {
      question: "How long do most people with AKI need dialysis?",
      options: [{ text: "A few days or weeks", right: true }, { text: "For the rest of their life" }, { text: "Exactly one year" }],
      why: "Most people with AKI only need dialysis for a few days or weeks until their kidneys start working again.",
    },
  },
  {
    id: "aki-sick-days",
    kicker: "Living well",
    question: "What should I do on sick days?",
    hook: "Being sick, diarrhoea or a fever can dry you out fast. Small sips, the right medicines plan and knowing when to call make the difference.",
    short: "Being sick, having diarrhoea or a high temperature can make you dehydrated, and some medicines can then make you more ill. Keep drinking, in small sips if you feel sick, and follow your sick day advice about pausing medicines. Ask for an urgent GP appointment or get help from NHS 111 if you have signs of serious dehydration.",
    sections: [
      {
        heading: "Why being ill matters",
        paragraphs: [
          "Being sick, having diarrhoea or a high temperature can make you dehydrated, and severe dehydration reduces the blood flow to the kidneys. Taking certain medicines when you are unwell can lead to more severe illness.",
          "Sick day rules are advice about how to take your medicines if you are unwell and become dehydrated. Your doctor or nurse may suggest stopping some of them until you have been eating and drinking normally again for at least 48 hours.",
        ],
      },
      {
        heading: "Keeping fluids up",
        paragraphs: [
          "Drink enough fluids so your pee is pale and regular through the day, especially in hot weather or if you are being sick or have diarrhoea. If you feel sick, start with small sips and gradually drink more.",
          "If you are losing too much fluid, a pharmacist can recommend oral rehydration solutions, which are powders you mix with water. Avoid caffeinated drinks and alcohol, as both will dehydrate you.",
        ],
      },
      {
        heading: "If you have been told to limit fluids",
        paragraphs: [
          "Some people with kidney problems are advised by their kidney team to control how much they drink. Check with your kidney team about what applies to you, as reducing fluid when you have not been advised to may cause harm.",
          "With a water tablet such as furosemide, how much you drink depends on why you are taking it. If you get vomiting, diarrhoea or a fever, talk to a pharmacist or doctor, or follow the advice they have already given you.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have dark yellow pee or are peeing less than normal, feel dizzy when you stand up and it does not go away, or feel unusually tired. These can be signs of serious dehydration that need urgent treatment.",
          "Call 111 if you keep being sick and cannot keep fluid down, or have diarrhoea for more than 7 days or vomiting for more than 2 days. Call 999 or go to A&E if someone with dehydration has blue, grey, pale or blotchy skin, has difficulty breathing, or is sleepier than normal or difficult to wake.",
        ],
      },
    ],
    helps: [
      "Stay hydrated: drink enough so your pee is pale and regular, especially in hot weather or if you are being sick or have diarrhoea.",
      "Ask your doctor or nurse which medicines to stop if you are unwell and become dehydrated.",
      "Ask a pharmacist about oral rehydration solutions if you are losing too much fluid.",
      "If you have been told to limit fluids, check with your kidney team before changing how much you drink.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have signs of serious dehydration.",
    ],
    tryThisWeek: [
      "Drink enough to keep pee pale.",
      "Ask which medicines to pause.",
      "Ask about rehydration solutions.",
    ],
    ask: "What is my sick day plan, and which medicines should I stop if I am unwell?",
    interactive: {
      kind: "signs",
      title: "When you are unwell",
      intro: "Tick any that apply. These are the times sick day advice is for, and signs worth acting on.",
      signs: ["Being sick (vomiting)", "Diarrhoea", "A high temperature", "Not eating or drinking as normal", "Dark yellow pee, or peeing less", "Dizzy on standing, and it lasts", "Feeling unusually tired"],
      after: "Follow the sick day advice your team has given you. Ask for an urgent GP appointment or get help from NHS 111 if you have signs of serious dehydration.",
      copyHeading: "When I was unwell",
    },
    sources: [NHS_AKI, KCUK_MED_BP, NHS_DEHYDRATION, NHS_DV, NKF_AKI, KCUK_FLUID, NHS_FUROSEMIDE],
    quiz: {
      question: "Which drinks does the NHS say to avoid when you are dehydrated?",
      options: [{ text: "Caffeinated drinks and alcohol", right: true }, { text: "Water" }, { text: "Oral rehydration solutions" }],
      why: "Avoid caffeinated drinks and alcohol, as both will dehydrate you.",
    },
  },
  {
    id: "aki-checks",
    kicker: "Living well",
    question: "Which kidney checks will I have after AKI?",
    hook: "Blood tests and check-ups after you recover, and blood pressure and kidney checks with your GP for years afterwards.",
    short: "You will have regular blood tests and check-ups after you have recovered, to make sure your kidneys are working as expected. Kidney Care UK says your GP will monitor your kidney function and blood pressure for at least three years after AKI. If an infection caused it, a test may check it has cleared.",
    sections: [
      {
        heading: "Regular checks",
        paragraphs: [
          "You will have regular blood tests and check-ups after you have recovered, to make sure your kidneys are working as expected.",
          "Kidney Care UK says your GP will monitor your kidney function and blood pressure for at least three years after an episode of AKI.",
        ],
      },
      {
        heading: "What is checked",
        paragraphs: [
          "NICE says creatinine should be checked after an episode of AKI. How often depends on how stable your kidney function was, and how well it was working, when you left hospital.",
          "NICE also says doctors should consider referring you to a kidney specialist if, after recovering, your eGFR is 30 or less.",
        ],
      },
      {
        heading: "Checking an infection has cleared",
        paragraphs: [
          "If your AKI was caused by an infection, it is important to check the infection has fully cleared after you finish your antibiotics. If it was due to a urine infection, your doctor may suggest a urine test about a month after your recovery.",
        ],
      },
      {
        heading: "Your results",
        paragraphs: [
          "You may be able to see your test results using the NHS App, or by logging into your account on the NHS website.",
          "Blood test results can be complicated. Ask to talk to a healthcare professional if you have questions about your results or do not understand them.",
        ],
      },
    ],
    helps: [
      "Keep your blood test appointments and check-ups after you recover.",
      "Ask your GP when your kidney function and blood pressure will next be checked.",
      "If your AKI was caused by a urine infection, ask whether you need a urine test about a month after recovery.",
      "Look up your test results in the NHS App, if you can.",
      "Ask to talk to a healthcare professional if you have questions about your results.",
    ],
    tryThisWeek: [
      "Keep your blood test appointments.",
      "Ask when checks are due.",
      "Look up results in the NHS App.",
    ],
    ask: "When is my next kidney blood test, and what will we be looking for?",
    interactive: {
      kind: "timeline",
      title: "Checks after AKI",
      steps: [
        { id: "leaving", when: "When you leave hospital", title: "A plan for blood tests", points: ["Creatinine is checked after an episode.", "How often depends on how stable it was."] },
        { id: "month", when: "About a month later", title: "If an infection caused it", points: ["A urine test may check it has gone.", "Finish your antibiotics first."] },
        { id: "years", when: "For at least 3 years", title: "Checks with your GP", points: ["Your kidney function is checked.", "Your blood pressure is checked."] },
        { id: "referral", when: "If eGFR is 30 or less", title: "A kidney specialist", points: ["NICE says referral should be considered.", "Ask what your result means."] },
      ],
    },
    sources: [NHS_AKI, KCUK_AKI, NKF_AKI, NICE_RECS, NHS_BLOOD_TESTS],
    quiz: {
      question: "For how long does Kidney Care UK say your GP will monitor you after AKI?",
      options: [{ text: "At least three years", right: true }, { text: "One week" }, { text: "No checks are needed" }],
      why: "Kidney Care UK says your GP will monitor your kidney function and blood pressure for at least three years after an episode of AKI.",
    },
  },
  {
    id: "aki-painkillers",
    kicker: "Medicines",
    question: "Which painkillers are safe for my kidneys?",
    hook: "Anti-inflammatories such as ibuprofen can harm kidneys that have been through AKI. Ask before you buy, and mention your kidneys.",
    short: "Anti-inflammatory painkillers, called NSAIDs, such as ibuprofen, naproxen and aspirin, are a possible cause of AKI and are best avoided with kidney disease unless your kidney doctor approves them. Kidney Care UK says paracetamol in standard doses is safe with kidney problems. Tell any pharmacist about your kidneys before you buy a medicine.",
    sections: [
      {
        heading: "Why NSAIDs matter",
        paragraphs: [
          "Long-term use of anti-inflammatory medicines, called NSAIDs, is one possible cause of AKI. They include ibuprofen, aspirin, naproxen and diclofenac, and some can be bought over the counter.",
          "NSAIDs can reduce the blood supply to the kidneys, and Kidney Care UK lists AKI among their possible side effects. The NHS lists kidney problems, with symptoms such as shortness of breath, blood in your pee or swelling in your ankles, feet or hands, among their possible serious side effects.",
        ],
      },
      {
        heading: "Who should avoid them",
        paragraphs: [
          "Ibuprofen may not be suitable if you have a heart, liver or kidney condition. Kidney Care UK says NSAIDs, as tablets, creams or gels, are best avoided if you have kidney disease, and should only be taken if your kidney doctor has approved them.",
          "NICE says people at risk of AKI should be told about the risk from medicines that can harm the kidneys, including NSAIDs bought over the counter. Some cold medicines contain an NSAID, so be careful not to take two at once.",
        ],
      },
      {
        heading: "Paracetamol",
        paragraphs: [
          "Kidney Care UK says paracetamol in standard doses is safe to take if you have kidney problems. It gives the standard dose as 500mg to 1g every four to six hours, with a maximum of eight tablets in 24 hours.",
          "The NHS says paracetamol may not be suitable if you have a kidney or liver condition. Check the leaflet, and speak to a pharmacist or doctor if you are not sure.",
        ],
      },
      {
        heading: "Getting advice",
        paragraphs: [
          "Tell any doctor or pharmacist recommending a medicine about your kidney condition and the medicines you take. Try to use the same pharmacy, so the pharmacist can build up a complete picture of everything you take.",
          "Call NHS 111 if you are taking ibuprofen and think you might be having serious side effects.",
        ],
      },
    ],
    helps: [
      "Tell any doctor or pharmacist recommending a medicine about your kidney condition and the medicines you take.",
      "Only take NSAIDs, including gels and creams, if your kidney doctor has approved them.",
      "Check cold remedies, as some contain an NSAID.",
      "Never take more than the recommended dose of any painkiller.",
      "Call NHS 111 if you take ibuprofen and think you are having serious side effects.",
    ],
    tryThisWeek: [
      "Tell the pharmacist about your kidneys.",
      "Check cold remedies for NSAIDs.",
      "Stick to the recommended dose.",
    ],
    ask: "Which painkillers are safe for me now, and should I avoid ibuprofen for good?",
    interactive: {
      kind: "scenarios",
      title: "At the pharmacy counter",
      scenarios: [
        {
          id: "headache",
          situation: "You have a headache, and you had AKI earlier this year.",
          options: [{ text: "Ask a pharmacist, and mention AKI", best: true }, { text: "Take ibuprofen without asking" }],
          why: "Tell any pharmacist recommending a medicine about your kidney condition. Kidney Care UK says paracetamol in standard doses is safe with kidney problems.",
        },
        {
          id: "gel",
          situation: "Your knee aches and there is ibuprofen gel at home.",
          options: [{ text: "Check with your kidney doctor first", best: true }, { text: "Use it: gels are always fine" }],
          why: "Kidney Care UK says NSAIDs, as tablets, creams or gels, are best avoided if you have kidney disease.",
        },
        {
          id: "cold",
          situation: "You want a cold and flu remedy.",
          options: [{ text: "Check the label for an NSAID", best: true }, { text: "Take it with ibuprofen" }],
          why: "Some cold medicines contain an NSAID, so be careful not to take two at once.",
        },
        {
          id: "swelling",
          situation: "Since taking ibuprofen, your ankles have swollen.",
          options: [{ text: "Call NHS 111", best: true }, { text: "Take more to ease it" }],
          why: "Call NHS 111 if you are taking ibuprofen and think you might be having serious side effects.",
        },
      ],
    },
    sources: [NHS_AKI, KCUK_PAIN, KCUK_OTC, NHS_NSAIDS, NHS_IBUPROFEN, NHS_PARACETAMOL, NICE_RECS, KRUK_AKI],
    quiz: {
      question: "Which painkiller does Kidney Care UK say is safe in standard doses with kidney problems?",
      options: [{ text: "Paracetamol", right: true }, { text: "Ibuprofen" }, { text: "Naproxen" }],
      why: "Kidney Care UK says paracetamol in standard doses is safe to take if you have kidney problems.",
    },
  },
  {
    id: "aki-future",
    kicker: "Living well",
    question: "How can I lower the chance of another AKI?",
    hook: "Know your warning signs, keep drinking when you are ill, and check before any new medicine, scan or operation.",
    short: "If you have had AKI before, or are at higher risk because of your age or medicines, there are things you can do. Ask your doctor what warning signs to watch for, stay hydrated, especially when ill or in hot weather, and speak to a doctor before taking any new medicines or supplements.",
    sections: [
      {
        heading: "Know your warning signs",
        paragraphs: [
          "If you have had AKI before, or are at higher risk because of your age or medicines you take, there are things you can do to lower the chance of getting it again.",
          "Ask your doctor to tell you what warning signs to watch for. You may be told to see a doctor sooner if you feel unwell, after 1 day rather than waiting 3 or 4 days.",
        ],
      },
      {
        heading: "Fluids and illness",
        paragraphs: [
          "Stay hydrated by drinking enough so your pee is pale and regular through the day, especially in hot weather or if you are being sick or have diarrhoea.",
          "A doctor can advise which medicines to avoid when you are dehydrated, such as with diarrhoea and vomiting, or in a hot place or country.",
        ],
      },
      {
        heading: "New medicines and scans",
        paragraphs: [
          "Speak to a doctor before taking any new medicines or supplements, including herbal ones, in case they could damage your kidneys.",
          "Tell the hospital before a CT scan if you have kidney problems, as the dye sometimes used in scans can cause AKI. Before an operation, the anaesthetic team will review your medicines and may make changes to try to protect your kidneys.",
        ],
      },
      {
        heading: "Looking after your kidneys",
        paragraphs: [
          "NICE says people who have had AKI should be given advice on how to avoid it happening again. If your AKI was caused by an infection, check the infection has fully cleared after you finish your antibiotics.",
          "If you need to take painkillers, follow the instructions that come with the medicine. Taking too many NSAIDs, or taking them for longer than recommended, can cause kidney disease.",
        ],
      },
    ],
    helps: [
      "Ask your doctor what warning signs to watch for, and how soon to see a doctor when you feel unwell.",
      "Stay hydrated, especially in hot weather or if you are being sick or have diarrhoea.",
      "Ask a doctor which medicines to avoid if you become dehydrated.",
      "Speak to a doctor before taking any new medicines or supplements.",
      "Tell the hospital before a CT scan if you have kidney problems.",
      "Follow the instructions that come with any painkiller.",
    ],
    tryThisWeek: [
      "Ask about your warning signs.",
      "Drink more in hot weather.",
      "Check before new medicines.",
    ],
    ask: "What should I do if I become unwell again, and how soon should I see someone?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments after AKI",
      scenarios: [
        {
          id: "heat",
          situation: "A heatwave is forecast.",
          options: [{ text: "Drink enough to keep pee pale", best: true }, { text: "Drink as usual" }],
          why: "Stay hydrated by drinking enough so your pee is pale and regular through the day, especially in hot weather.",
        },
        {
          id: "unwell",
          situation: "You have felt unwell for a day, and you have had AKI before.",
          options: [{ text: "See a doctor sooner, as advised", best: true }, { text: "Wait 3 or 4 days" }],
          why: "You may be told to see a doctor sooner if you feel unwell, after 1 day rather than waiting 3 or 4 days.",
        },
        {
          id: "scan",
          situation: "You are booked for a CT scan.",
          options: [{ text: "Tell the hospital about your kidneys", best: true }, { text: "Say nothing" }],
          why: "Tell the hospital before a CT scan if you have kidney problems, as the dye sometimes used in scans can cause AKI.",
        },
        {
          id: "supplement",
          situation: "You see a supplement sold for kidney health.",
          options: [{ text: "Speak to a doctor first", best: true }, { text: "Try it: it is natural" }],
          why: "Speak to a doctor before taking any new medicines or supplements, including herbal ones, in case they could damage your kidneys.",
        },
      ],
    },
    sources: [NHS_AKI, NKF_AKI, KCUK_AKI, NICE_PUBLIC, NHS_CT, NHS_CKD_PREVENTION],
    quiz: {
      question: "After AKI, how soon might you be told to see a doctor if you feel unwell?",
      options: [{ text: "After 1 day", right: true }, { text: "After 2 weeks" }, { text: "Only if you collapse" }],
      why: "You may be told to see a doctor sooner if you feel unwell, after 1 day rather than waiting 3 or 4 days.",
    },
  },
];
