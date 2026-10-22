import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Liver cancer page's pieces
// (content/library-conditions/cancer-more-2.ts, `liverCancer`). Every sentence was written from wording
// checked on 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those
// pages do not say. Most of it comes from the NHS, Macmillan Cancer Support, Cancer Research UK and Liver
// Cancer UK (part of Liver UK, the new name for the British Liver Trust; liveruk.org's liver cancer pages now
// redirect to livercanceruk.org), with Liver UK's own pages for alcohol, diet, supplements and vaccines, and
// Samaritans. There are no survival figures and nothing that reads as a prediction. Urgent signs give the
// routes exactly as the sources state them (the hospital's 24-hour number, 999, A&E, NHS 111), and the mood
// answer follows safe-messaging guidance with the crisis routes the NHS, Macmillan and Samaritans give.
// General information only; it never replaces what a person's own cancer or liver team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const lcuk = (label: string, path: string): LearnSource => ({ label: `Liver Cancer UK: ${label}`, url: `https://livercanceruk.org/liver-cancer-information/${path}` });
const liverUk = (label: string, path: string): LearnSource => ({ label: `Liver UK: ${label}`, url: `https://liveruk.org/about-liver-disease/living-with-a-liver-condition/${path}` });

const NHS_LC_SYMPTOMS = nhs("Symptoms of liver cancer", "conditions/liver-cancer/symptoms/");
const NHS_LC_CAUSES = nhs("Causes of liver cancer", "conditions/liver-cancer/causes/");
const NHS_LC_TESTS = nhs("Tests and next steps for liver cancer", "conditions/liver-cancer/tests-and-next-steps/");
const NHS_LC_TREAT = nhs("Treatment for liver cancer", "conditions/liver-cancer/treatment/");
const NHS_CIRRHOSIS = nhs("Cirrhosis", "conditions/cirrhosis/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const MAC_LC = mac("Liver cancer", "liver-cancer");
const MAC_TYPES = mac("Types of liver cancer", "liver-cancer/types-of-liver-cancer");
const MAC_CAUSES = mac("Causes and risk factors of liver cancer", "liver-cancer/causes-and-risk-factors-of-liver-cancer");
const MAC_STAGES = mac("Stages of liver cancer", "liver-cancer/stages-of-liver-cancer");
const MAC_LIVER = mac("The liver", "liver-cancer/the-liver");
const MAC_SURGERY = mac("Surgery for liver cancer", "treatments-and-drugs/surgery-for-liver-cancer");
const MAC_TARGETED = mac("Targeted therapy and immunotherapy for primary liver cancer", "treatments-and-drugs/targeted-therapy-and-immunotherapy-for-liver-cancer");
const MAC_ATEB = mac("Atezolizumab and bevacizumab", "treatments-and-drugs/atezolizumab-and-bevacizumab");
const MAC_SORAFENIB = mac("Sorafenib", "treatments-and-drugs/sorafenib");
const MAC_CONTROLLING = mac("Controlling the symptoms of cancer in the liver", "impacts-of-cancer/controlling-symptoms-of-cancer-in-the-liver");
const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");

const CRUK_ABOUT = cruk("What is liver cancer?", "liver-cancer/about-liver-cancer");
const CRUK_RISKS = cruk("Risks and causes of liver cancer", "liver-cancer/risks-causes");
const CRUK_EMBOL = cruk("Embolisation treatment for liver cancer (TAE and TACE)", "liver-cancer/treatment/embolisation");
const CRUK_ABLATION = cruk("Heat treatment for liver cancer (thermal ablation)", "liver-cancer/treatment/thermal-ablation");
const CRUK_RADIO = cruk("Radiotherapy for liver cancer", "liver-cancer/treatment/radiotherapy-liver-cancer");
const CRUK_TARGETED = cruk("Targeted and immunotherapy drugs for liver cancer", "liver-cancer/treatment/targeted-immunotherapy");
const CRUK_FOLLOWUP = cruk("Follow up after liver cancer treatment", "liver-cancer/treatment/follow-appointment");
const CRUK_COPING = cruk("Coping and support when you have liver cancer", "liver-cancer/living-with-cancer/coping");
const CRUK_FATIGUE_WHAT = cruk("What is cancer fatigue?", "coping/physically/fatigue/what-is-cancer-fatigue");
const CRUK_FATIGUE_MANAGE = cruk("Managing and treating cancer fatigue", "coping/physically/fatigue/managing-treating-cancer-fatigue");

const HCC = "types-of-liver-cancer/hcc";
const LCUK_WHAT_HCC = lcuk("What is HCC?", `${HCC}/what-hcc-is/`);
const LCUK_RISKS = lcuk("Risks and causes of HCC", `${HCC}/risks-and-causes-of-hcc/`);
const LCUK_CHECKUPS = lcuk("Check-ups for HCC", `${HCC}/treating-hcc/check-ups-for-hcc/`);
const LCUK_LIVING_HCC = lcuk("Living with HCC", `${HCC}/living-with-hcc/`);
const LCUK_TACE = lcuk("Embolization, TACE and TARE or SIRT", "types-of-treatment/tace/");
const LCUK_AFTER_SURGERY = lcuk("After surgery", "types-of-treatment/surgery/after-surgery/");
const LCUK_SYMPTOMS_TX = lcuk("Treatment for symptoms and advanced cancer", "types-of-treatment/treatment-for-symptoms-and-advanced-cancer/");
const LCUK_DIET = lcuk("Diet and exercise", "living-with-liver-cancer/diet-and-exercise/");
const LCUK_MENTAL = lcuk("Mental wellbeing", "living-with-liver-cancer/mental-wellbeing/");
const LCUK_SUPPORT = lcuk("Support from others", "living-with-liver-cancer/support-from-others/");
const LCUK_JUST = lcuk("Just diagnosed with liver cancer?", "just-diagnosed/");

const LU_ALCOHOL = liverUk("Alcohol and liver disease", "eating-drinking-keeping-active/alcohol-and-liver-disease/");
const LU_DIET_CIRRHOSIS = liverUk("Diet and cirrhosis", "eating-drinking-keeping-active/diet-and-cirrhosis/");
const LU_SUPPLEMENTS = liverUk("Supplements and vitamins", "eating-drinking-keeping-active/supplements-and-vitamins/");
const LU_VACCINES = liverUk("Liver disease and vaccines", "medical-care/vaccines/");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const liverCancerAnswers: LearnArticle[] = [
  {
    id: "lvc-what-it-is",
    kicker: "Understanding",
    question: "What is primary liver cancer?",
    hook: "It is cancer that starts in the liver itself. That makes it different from cancer that has spread to the liver from somewhere else.",
    short: "Primary liver cancer is cancer that starts in the liver. The most common type is hepatocellular carcinoma, or HCC, which starts in the main cells of the liver. Cancer that starts somewhere else and spreads to the liver is called secondary liver cancer, and that is different.",
    sections: [
      {
        heading: "Cancer that starts in the liver",
        paragraphs: [
          "Liver cancer is a cancer that starts in the liver. It is sometimes called primary liver cancer. Primary cancers are named after the part of the body where the cancer first started growing.",
          "Primary liver cancer is different to cancer that spreads to the liver from somewhere else in the body. This is called secondary liver cancer or liver metastases.",
          "The symptoms are the same whether the cancer starts in the liver or spreads there from another part of the body.",
        ],
      },
      {
        heading: "The most common type: HCC",
        paragraphs: [
          "Hepatocellular carcinoma, or HCC, is the most common type of primary liver cancer. It is sometimes called hepatoma. It starts in the main cells of the liver, called hepatocytes.",
          "Around three quarters of all cancers that start in the liver are HCC. In HCC, some abnormal cells start to multiply more than they should, and the extra cells form a lump, or tumour.",
          "Sometimes HCC grows as a single tumour in the part of the liver where it started. Other times it develops as many small tumours spread through the liver, which is more common in people who already have cirrhosis.",
        ],
      },
      {
        heading: "Other types",
        paragraphs: [
          "There are other types of cancer that start in the liver. They include fibrolamellar HCC, a rare type that usually affects younger people, bile duct cancer, angiosarcoma, and hepatoblastoma, a very rare cancer that usually affects children.",
          "Some liver tumours are not cancerous. These benign tumours are usually small and are often found by chance, for example when a person is having a scan for another reason.",
        ],
      },
      {
        heading: "What the liver does",
        paragraphs: [
          "The liver is the biggest organ in the body. It sits in the upper part of the tummy on the right-hand side, under the lower ribs, and is divided into 2 lobes.",
          "It stores sugars and fats so they can be used for energy, breaks down harmful substances, makes proteins that help the blood to clot, and makes bile, which helps break down fats.",
          "The liver is good at repairing itself. It can work well even when only a small part is working normally, and if part of it is removed, the remaining liver can usually grow to replace it.",
        ],
      },
      {
        heading: "Knowing your type",
        paragraphs: [
          "Knowing which type of liver cancer you have helps your doctors decide what treatment you need.",
          "It is really important to know the exact type of liver cancer you have before you look for detailed information. There are several types, and they have different treatments.",
        ],
      },
    ],
    helps: [
      "Ask your team which type of liver cancer you have, as this helps decide your treatment.",
      "Check whether your cancer started in the liver or spread there from somewhere else.",
      "Bring someone with you to appointments for support.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if you want to talk.",
      "Ask your clinical nurse specialist any questions you have; they are your main point of contact.",
    ],
    tryThisWeek: [
      "Ask which type you have.",
      "Bring someone to appointments.",
      "Write questions for your nurse.",
    ],
    ask: "Which type of liver cancer do I have, and did it start in my liver?",
    interactive: {
      kind: "flip-cards",
      title: "Primary, secondary and the main types",
      intro: "Turn a card to see what each name means.",
      cards: [
        { id: "hcc", front: "Hepatocellular carcinoma (HCC)", when: "The most common type", back: "Starts in the main cells of the liver, called hepatocytes. Around three quarters of cancers that start in the liver are HCC." },
        { id: "fibrolamellar", front: "Fibrolamellar HCC", when: "Rare", back: "A rare type of primary liver cancer that usually affects younger people." },
        { id: "bile-duct", front: "Bile duct cancer", when: "Also called cholangiocarcinoma", back: "Another type of primary liver cancer. It starts in the cells lining the bile duct." },
        { id: "secondary", front: "Secondary liver cancer", when: "Started somewhere else", back: "Cancer that started in another part of the body and spread to the liver. It is also called liver metastases." },
        { id: "benign", front: "Benign tumours", when: "Often found by chance", back: "Liver tumours that are not cancerous. They are usually small." },
      ],
    },
    sources: [MAC_LC, CRUK_ABOUT, MAC_TYPES, LCUK_WHAT_HCC, MAC_LIVER, NHS_LC_SYMPTOMS, LCUK_JUST, NHS_LC_TESTS],
    quiz: {
      question: "What is the most common type of primary liver cancer?",
      options: [{ text: "Hepatocellular carcinoma (HCC)", right: true }, { text: "Bile duct cancer" }, { text: "Hepatoblastoma" }],
      why: "Hepatocellular carcinoma, or HCC, is the most common type of primary liver cancer.",
    },
  },
  {
    id: "lvc-causes",
    kicker: "Causes",
    question: "Why did I get liver cancer?",
    hook: "Doctors do not always know. Most cases of HCC grow in a liver that has been damaged for a long time, often by cirrhosis.",
    short: "Doctors do not know the exact cause of primary liver cancer, but some things increase the risk. Cirrhosis, long-term hepatitis B or C, fatty liver disease, heavy drinking, diabetes, being very overweight, smoking and family history are among them. Having a risk factor does not mean someone will get it, and some people have none.",
    sections: [
      {
        heading: "Not always clear",
        paragraphs: [
          "Doctors do not know the exact cause of primary liver cancer. But certain things called risk factors can increase a person's chance of developing it.",
          "Having one or more risk factors does not mean you will get cancer. And not having any risk factors does not guarantee that you will not get cancer.",
          "In 1 in 4 cases of HCC, nobody knows what causes it. Doctors call this sporadic cancer.",
        ],
      },
      {
        heading: "Cirrhosis",
        paragraphs: [
          "Cirrhosis is scarring of the liver due to previous damage. It stops the liver from working properly, and people who have it have a higher risk of HCC.",
          "More than 9 out of 10 cases of HCC are related to cirrhosis. It can be related to alcohol, but it has many other causes.",
          "If you have cirrhosis, you should be offered regular checks for liver cancer.",
        ],
      },
      {
        heading: "Hepatitis and fatty liver disease",
        paragraphs: [
          "Long-term infection with the hepatitis B virus or hepatitis C virus can cause HCC. These viruses increase the risk of cirrhosis.",
          "Non-alcoholic fatty liver disease is when fat builds up in the liver. It is now called metabolic dysfunction-associated steatotic liver disease, or MASLD, and it is becoming the most common cause of HCC in the UK.",
          "Diabetes, metabolic syndrome and being very overweight can also increase the risk. This may be because they are linked with fatty liver disease.",
        ],
      },
      {
        heading: "Alcohol, smoking and other factors",
        paragraphs: [
          "Drinking a lot of alcohol over a long period of time can cause cirrhosis. But it is a bit of a myth that liver cancer is always related to drinking. In the UK, fewer than 1 in 10 cases of HCC are diagnosed in people with liver disease caused by drinking.",
          "People who smoke tobacco have a higher risk of HCC than non-smokers. HCC is also more common in men than in women, and more common as people get older.",
          "Having a parent, brother or sister who had primary liver cancer increases the risk. Rarer risk factors include some inherited conditions, HIV, taking anabolic steroids over a long time, and a poison found in mouldy peanuts and grains.",
        ],
      },
      {
        heading: "Healthy changes",
        paragraphs: [
          "You cannot always prevent liver cancer. But making healthy changes can lower the chances of getting it.",
          "These include trying to lose weight if you are overweight and trying to quit smoking. If you have liver cancer, it is important to check with your doctor before drinking alcohol.",
        ],
      },
    ],
    helps: [
      "Go to your regular liver cancer checks if you have cirrhosis.",
      "Try to quit smoking.",
      "Check with your doctor before drinking alcohol.",
      "Try to lose weight if you are overweight.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if you are worried and want to talk.",
    ],
    tryThisWeek: [
      "Keep your liver check dates.",
      "Take one step to stop smoking.",
      "Ask before drinking alcohol.",
    ],
    ask: "What do you think led to my liver cancer, and what would help protect the rest of my liver?",
    interactive: {
      kind: "risk-check",
      title: "What can raise the risk of HCC?",
      intro: "Tick any that apply. Having a risk factor does not mean someone will get cancer.",
      items: [
        { id: "cirrhosis", label: "Cirrhosis (liver scarring)", note: "More than 9 out of 10 cases of HCC are related to cirrhosis. People with cirrhosis should be offered regular checks.", changeable: false },
        { id: "hepatitis", label: "Long-term hepatitis B or C", note: "These viruses can cause HCC because they increase the risk of cirrhosis.", changeable: false },
        { id: "fatty", label: "Fatty liver disease (MASLD)", note: "Becoming the most common cause of HCC in the UK. It is more common in people who are overweight.", changeable: true },
        { id: "alcohol", label: "Drinking a lot over a long time", note: "This can cause cirrhosis. If you have liver cancer, check with your doctor before drinking alcohol.", changeable: true },
        { id: "smoking", label: "Smoking", note: "People who smoke tobacco have a higher risk of HCC than non-smokers.", changeable: true },
        { id: "diabetes", label: "Diabetes or metabolic syndrome", note: "The higher risk may be because these are linked with fatty liver disease.", changeable: false },
        { id: "family", label: "A parent, brother or sister had it", note: "Having an immediate family member with primary liver cancer increases the risk. Doctors are not sure why.", changeable: false },
        { id: "age", label: "Being older, or a man", note: "HCC is more common in men than in women, and more common as people get older.", changeable: false },
      ],
    },
    sources: [MAC_CAUSES, LCUK_RISKS, CRUK_RISKS, NHS_LC_CAUSES, MAC_LC],
    quiz: {
      question: "How many cases of HCC are related to cirrhosis?",
      options: [{ text: "More than 9 out of 10", right: true }, { text: "About 1 in 10" }, { text: "None" }],
      why: "More than 9 out of 10 cases of HCC are related to cirrhosis.",
    },
  },
  {
    id: "lvc-treatments",
    kicker: "Treatment",
    question: "What are the treatments for liver cancer?",
    hook: "It depends on the size and number of tumours, whether the cancer has spread, and how well the rest of your liver is working.",
    short: "Treatment depends on the cancer, whether it has spread, how well your liver is working and your general health. Surgery to remove part of the liver, or a liver transplant, is possible for some people. Others have treatments into the liver, such as ablation or chemoembolisation, targeted and immunotherapy drugs, or radiotherapy.",
    sections: [
      {
        heading: "What decides your treatment",
        paragraphs: [
          "A team of specialists, called a multidisciplinary team, meets to discuss the best possible treatment for you.",
          "The treatment usually depends on where the cancer is, the size and number of tumours, whether important blood vessels are affected, whether it has spread outside the liver, how well your liver is working, your general health and your preferences.",
          "Doctors often use the Barcelona Clinic Liver Cancer staging system. It looks at the size and number of tumours, how well the liver works, and whether the cancer is affecting your activities.",
        ],
      },
      {
        heading: "Surgery and transplant",
        paragraphs: [
          "Surgery is the most effective treatment for HCC. But it is not often possible, because the cancer may be too advanced or the liver too damaged.",
          "A liver resection removes the part of the liver where the cancer is. It is usually suitable for people who have only 1 tumour or a limited number, and who do not have cirrhosis or have early-stage cirrhosis.",
          "A liver transplant replaces the liver with one from a donor. It is only suitable for some people, for example with a tumour 5cm across or smaller, or up to 3 tumours that are each 3cm across or smaller. It can take months for a donor liver to become available.",
        ],
      },
      {
        heading: "Treatments into the liver",
        paragraphs: [
          "Tumour ablation destroys the cancer cells by applying heat, electrical pulses or sometimes alcohol directly to the tumour. It may be used to treat small tumours instead of surgery.",
          "Embolisation cuts off the blood supply to the tumour. It may be used along with chemotherapy, called chemoembolisation, or with radiation, called selective internal radiation therapy, or SIRT.",
        ],
      },
      {
        heading: "Drugs and radiotherapy",
        paragraphs: [
          "Targeted therapy drugs find and attack cancer cells, and immunotherapy drugs help the immune system to fight them. Doctors may use them if the cancer is advanced in the liver or has spread outside it.",
          "A type of high-dose radiotherapy called stereotactic ablative radiotherapy closely targets tumours in the liver. Radiotherapy can also be used to ease symptoms such as pain.",
          "Chemotherapy into a vein or as a tablet might sometimes be used after other treatments have already been tried. You may have some treatments as part of a clinical trial.",
        ],
      },
      {
        heading: "Your team will guide you",
        paragraphs: [
          "The specialist team will explain the treatments, their benefits and side effects, and work with you to create a treatment plan that is best for you.",
          "Treatments can also be used to control symptoms. This is sometimes called palliative treatment or supportive care.",
          "If you have any symptoms or side effects that you are worried about, talk to your specialists. You do not need to wait for your next check-up.",
        ],
      },
    ],
    helps: [
      "Ask your team to explain each treatment, its benefits and its side effects.",
      "Ask how well the rest of your liver is working, as this affects which treatments are possible.",
      "Make sure you have all the information you need before you decide about surgery.",
      "Talk to your specialists about worrying symptoms or side effects without waiting for your next check-up.",
      "Ask whether any of your treatment could be part of a clinical trial.",
    ],
    tryThisWeek: [
      "Ask about benefits and side effects.",
      "Ask how your liver is working.",
      "Ask about clinical trials.",
    ],
    ask: "What is the aim of my treatment, and why is it the best option for me?",
    interactive: {
      kind: "flip-cards",
      title: "The main treatments",
      intro: "Turn a card to see what each treatment does.",
      cards: [
        { id: "resection", front: "Liver resection", when: "One or a few tumours", back: "The surgeon removes the part of the liver where the cancer is. The remaining liver can grow bigger and work as it did before." },
        { id: "transplant", front: "Liver transplant", when: "For some people with HCC", back: "The liver is replaced with one from a donor. You need to be quite fit, and it can take months for a liver to become available." },
        { id: "ablation", front: "Tumour ablation", when: "Small tumours", back: "Destroys cancer cells by applying heat, electrical pulses or sometimes alcohol directly to the tumour." },
        { id: "tace", front: "Chemoembolisation (TACE)", when: "If surgery is not possible", back: "Chemotherapy is given into the blood vessels of the cancer, and its blood supply is blocked." },
        { id: "sirt", front: "SIRT", when: "If the liver is not too damaged", back: "Radioactive beads are injected into the liver's blood supply to stop the cancer growing." },
        { id: "drugs", front: "Targeted drugs and immunotherapy", when: "If the cancer is advanced or has spread", back: "Targeted drugs find and attack cancer cells. Immunotherapy drugs help the immune system to fight them." },
      ],
    },
    sources: [MAC_LC, NHS_LC_TREAT, MAC_SURGERY, MAC_STAGES],
    quiz: {
      question: "Which treatment is the most effective for HCC?",
      options: [{ text: "Surgery", right: true }, { text: "Chemotherapy into a vein" }, { text: "Radiotherapy to ease pain" }],
      why: "Surgery is the most effective treatment for HCC. But it is not often possible, because the cancer may be too advanced or the liver too damaged.",
    },
  },
  {
    id: "lvc-follow-up",
    kicker: "Follow-up",
    question: "What happens at my scans and check-ups?",
    hook: "After treatment you have regular check-ups, blood tests and scans. You do not have to wait for the next one if something worries you.",
    short: "After treatment you have regular check-ups and blood tests, and, depending on your treatment, CT or MRI scans to check the cancer has not come back. How often depends on your treatment and how you are, and is often every 3 months at first. Tell your doctor or specialist nurse about new symptoms between appointments.",
    sections: [
      {
        heading: "Regular check-ups",
        paragraphs: [
          "You will have regular check-ups and blood tests during and after your treatment.",
          "At each appointment your doctor or nurse examines you. They ask how you are feeling, whether you have had any symptoms or side effects, and if you are worried about anything.",
          "Your appointment is an opportunity to tell them about any symptoms or treatment side effects.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "How often you see your specialist depends on how you are feeling and the type of treatment you have had. Your healthcare team will discuss this with you.",
          "After a liver resection or ablation, you see your surgeon around 6 weeks after finishing treatment, then every 3 months for at least the first year. After treatments such as chemoembolisation or targeted drugs, you are most likely to see your doctor every 3 months.",
          "If you had a liver transplant, you will have check-ups more often, with tests to make sure your body is not rejecting the new liver.",
        ],
      },
      {
        heading: "Scans and blood tests",
        paragraphs: [
          "Depending on your treatment, you may have regular CT or MRI scans to check the tumour has not come back. Sometimes this means having scans every 3 months for the first 2 years.",
          "You may have a blood test for a marker called AFP, which HCC cells often make. If the level rises, it could be an early sign of the cancer coming back. You will also have regular liver blood tests.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your doctor or specialist nurse if you have any concerns between appointments, or if you notice any new symptoms. You do not have to wait until your next visit.",
          "Your medical team would rather know sooner than later. So try not to feel as if you are bothering them.",
        ],
      },
      {
        heading: "When check-ups feel worrying",
        paragraphs: [
          "Many people find their check-ups quite worrying. A hospital appointment can bring back any anxiety you had about your cancer.",
          "It can help to tell someone close to you how you are feeling, and to ask them to come with you. Many people find it helpful to have counselling after cancer treatment.",
        ],
      },
    ],
    helps: [
      "Contact your doctor or specialist nurse about new symptoms between appointments.",
      "Ask your specialist how often they plan to see you.",
      "Use each appointment to mention any symptoms or side effects.",
      "Ask someone close to you to come with you.",
      "Tell someone close how you feel if check-ups make you anxious.",
    ],
    tryThisWeek: [
      "Note any new symptoms.",
      "Ask how often you will be seen.",
      "Ask someone to come with you.",
    ],
    ask: "How often will I have scans and blood tests, and who do I call if I notice something new?",
    interactive: {
      kind: "timeline",
      title: "Check-ups after surgery or ablation",
      steps: [
        { id: "six-weeks", when: "About 6 weeks", title: "First check", points: ["You see your surgeon around 6 weeks after finishing treatment.", "Tell them about any symptoms or side effects."] },
        { id: "first-year", when: "First year", title: "Every 3 months", points: ["Check-ups every 3 months for at least the first year.", "You may have scans or blood tests from time to time."] },
        { id: "two-years", when: "First 2 years", title: "Regular scans", points: ["Sometimes CT or MRI scans every 3 months for the first 2 years.", "Blood tests can include AFP and liver blood tests."] },
        { id: "any-time", when: "Any time", title: "Between appointments", points: ["Contact your team about any new symptoms.", "You do not have to wait until your next visit."] },
      ],
    },
    sources: [MAC_LC, CRUK_FOLLOWUP, LCUK_CHECKUPS],
    quiz: {
      question: "What can you do if you notice a new symptom between check-ups?",
      options: [{ text: "Contact your doctor or specialist nurse", right: true }, { text: "Wait for your next appointment" }, { text: "Keep it to yourself" }],
      why: "Contact your doctor or specialist nurse if you have any concerns between appointments, or if you notice any new symptoms. You do not have to wait until your next visit.",
    },
  },
  {
    id: "lvc-local-treatments",
    kicker: "Treatment",
    question: "What happens during ablation, TACE or SIRT?",
    hook: "These treatments reach the cancer inside the liver directly, through a needle or a thin tube. You usually stay in hospital for a night or two.",
    short: "Ablation destroys a tumour with heat through a needle guided by a scan. Chemoembolisation (TACE) gives chemotherapy into the blood vessel feeding the cancer and then blocks it, and SIRT uses tiny radioactive beads. Flu-like symptoms, pain and tiredness are common afterwards, and a temperature above 38°C needs a call to the hospital.",
    sections: [
      {
        heading: "Ablation: heat through a needle",
        paragraphs: [
          "Ablation means to destroy. Radiofrequency ablation uses a type of electrical energy, and microwave ablation uses microwave energy, to heat the cancer cells and destroy them.",
          "Your doctor might recommend it if the position of the cancer makes surgery difficult or you are not well enough for surgery, or instead of surgery for a very small cancer. It is not a suitable treatment if the cancer is larger than 3cm.",
          "Guided by an ultrasound or CT scan, the doctor passes a special needle through your skin into the cancer. It can take anything from 30 minutes to a couple of hours, and you usually stay in hospital for the night.",
        ],
      },
      {
        heading: "TACE: chemotherapy and a blocked blood supply",
        paragraphs: [
          "Embolisation blocks or reduces the blood supply to the cancer. In trans arterial chemoembolisation, or TACE, you have chemotherapy into the blood vessel that feeds the cancer, then a gel or tiny beads to block the blood supply.",
          "You have it in the x-ray department, and it takes 1 to 2 hours. A thin, flexible tube is put into an artery at the top of your leg and threaded along to the artery that supplies the liver.",
          "You don't usually have side effects from the chemotherapy, as it is blocked in the liver. You might have embolisation treatment more than once.",
        ],
      },
      {
        heading: "SIRT: radiation in tiny beads",
        paragraphs: [
          "Selective internal radiotherapy, or SIRT, uses radioactive beads called microspheres. They are injected into the blood vessel that takes blood to the cancer, get stuck in the small blood vessels in and around it, and the radiation destroys the cancer cells.",
          "You have a planning test first, then the treatment 1 or 2 weeks later. The radiation only travels a few millimetres, but as a precaution you may be told to avoid close contact with young children and pregnant women.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "Some people have flu-like symptoms that start about 3 to 5 days after treatment. You feel generally unwell, have body aches and may feel sick, and this might last 1 to 2 weeks.",
          "Pain around the liver, which may spread up into the right shoulder, and tiredness are also common. Your team can give you painkillers and anti-sickness medicines.",
          "You usually have a scan about 4 to 6 weeks after ablation or TACE, to check how well it has worked.",
        ],
      },
      {
        heading: "When to call the hospital",
        paragraphs: [
          "Contact your healthcare team if you have an increase in pain, or get a high temperature when you are at home.",
          "Let them know if your temperature goes above 38°C, as that could mean you have an infection. Contact your doctor too if the puncture wound in your groin becomes hot, swollen or red.",
        ],
      },
    ],
    helps: [
      "Tell your doctor beforehand if you take medicine that changes how your blood clots.",
      "Drink plenty after embolisation to help flush the dye out of your body.",
      "Ask your team which medicines you can take for flu-like symptoms afterwards.",
      "Contact the hospital if your temperature goes above 38°C.",
      "Contact your healthcare team if your painkillers are not working or your pain gets worse.",
    ],
    tryThisWeek: [
      "List any blood-thinning medicines.",
      "Drink plenty after treatment.",
      "Call if your temperature tops 38°C.",
    ],
    ask: "Which of these treatments is right for me, and what should I expect in the days afterwards?",
    interactive: {
      kind: "signs",
      title: "Tell your hospital about these",
      intro: "Tick any you have after ablation, TACE or SIRT.",
      signs: ["A temperature above 38°C", "Feeling unwell after the first 1 to 2 weeks", "Pain that gets worse", "Painkillers that are not working", "A hot, swollen or red groin wound", "Side effects that go on longer than expected"],
      after: "Contact your hospital or healthcare team about any of these. A temperature above 38°C could mean you have an infection.",
      copyHeading: "Symptoms since my liver treatment",
    },
    sources: [CRUK_ABLATION, CRUK_EMBOL, LCUK_TACE, CRUK_RADIO],
    quiz: {
      question: "What temperature should you tell the hospital about after these treatments?",
      options: [{ text: "Above 38°C", right: true }, { text: "Only above 40°C" }, { text: "None, a temperature is always normal" }],
      why: "Let them know if your temperature goes above 38°C, as that could mean you have an infection.",
    },
  },
  {
    id: "lvc-medicines",
    kicker: "Medicines",
    question: "How do targeted drugs and immunotherapy work for liver cancer?",
    hook: "Some drugs block what a cancer needs to grow; others help your immune system attack it. Side effects need reporting early, day or night.",
    short: "Targeted drugs attack the differences in cancer cells that help them grow, and some stop cancers growing new blood vessels. Immunotherapy helps the immune system recognise and attack cancer cells. They are used when surgery is not suitable or the cancer has spread, your liver needs to be working well, and side effects should be reported to the hospital's 24-hour number straight away.",
    sections: [
      {
        heading: "Two ways of working",
        paragraphs: [
          "Targeted drugs work by targeting the differences in cancer cells that help them to grow and survive. Some targeted drugs also stop the cancer developing new blood vessels.",
          "Immunotherapy uses our immune system to fight cancer. It works by helping the immune system recognise and attack cancer cells.",
        ],
      },
      {
        heading: "When they are used",
        paragraphs: [
          "You might have these drugs if surgery is not a suitable treatment for you, or if the cancer has spread to other parts of the body.",
          "To have them, your liver still needs to be working well and you need to be generally well. This is because these drugs can have some serious side effects.",
          "They may help to control the cancer for a time, reduce your symptoms and help you feel better.",
        ],
      },
      {
        heading: "The main drugs",
        paragraphs: [
          "You might be given the immunotherapy drug atezolizumab together with bevacizumab, a targeted drug, as your first treatment. You usually have them at a day unit as a drip into a vein, every 3 weeks.",
          "Sorafenib and lenvatinib are targeted drugs taken as tablets or capsules. If sorafenib stops controlling the cancer, doctors often prescribe lenvatinib, or another targeted drug such as cabozantinib or regorafenib.",
          "Take tablets and capsules exactly as your doctor or pharmacist explains. Talk to your healthcare team before you stop taking a cancer drug, or if you have missed a dose.",
        ],
      },
      {
        heading: "Common side effects",
        paragraphs: [
          "Common side effects include tiredness, feeling sick, diarrhoea, an itchy rash, soreness of the skin on the palms of the hands and soles of the feet, high blood pressure and thyroid changes.",
          "Immunotherapy drugs like atezolizumab can make the immune system overactive and cause inflammation in organs of the body. Some side effects are mild to start with, but if they are not treated they can become serious very quickly.",
          "Side effects can happen weeks, months or more than a year after you have stopped the drug. You will be given a card about your treatment to keep with you and show to any doctor or healthcare professional.",
        ],
      },
      {
        heading: "Use your 24-hour number",
        paragraphs: [
          "Your doctor, nurse or pharmacist will give you 24-hour contact numbers for the hospital. If you feel unwell or need advice, you can call at any time of the day or night.",
          "Contact the hospital straight away on the 24-hour number if you have a temperature above 37 and a half degrees or below 36 degrees, feel unwell even with a normal temperature, or have symptoms of an infection. Do the same if you have any unexplained bruising or bleeding.",
          "Always call 999 if you have chest pain or difficulty breathing.",
        ],
      },
    ],
    helps: [
      "Save the hospital's 24-hour numbers in your phone.",
      "Contact the 24-hour number straight away about side effects, during treatment or after it ends.",
      "Keep your treatment card with you and show it to any doctor or healthcare professional.",
      "Take tablets exactly as explained, and talk to your team before stopping or after a missed dose.",
      "Always call 999 if you have chest pain or difficulty breathing.",
      "Do not try to treat immune system side effects yourself.",
    ],
    tryThisWeek: [
      "Save the 24-hour number.",
      "Carry your treatment card.",
      "Take tablets as explained.",
    ],
    ask: "Which side effects should I call the 24-hour number about, and what will you check before each treatment?",
    interactive: {
      kind: "signs",
      title: "Call the 24-hour number about these",
      intro: "Tick any you have during treatment or after it ends.",
      signs: [
        "A temperature above 37 and a half degrees",
        "A temperature below 36 degrees",
        "Feeling unwell, even with a normal temperature",
        "Diarrhoea or tummy pain",
        "Yellow skin or eyes, or dark pee",
        "Unexplained bruising or bleeding",
        "Breathlessness or a cough that does not go away",
        "A rash that is spreading, or blistering skin",
        "Sore, peeling or blistered palms or soles",
      ],
      after: "Contact the hospital straight away on the 24-hour number. Always call 999 if you have chest pain or difficulty breathing.",
      copyHeading: "Side effects to report",
    },
    sources: [CRUK_TARGETED, MAC_TARGETED, MAC_ATEB, MAC_SORAFENIB],
    quiz: {
      question: "When should you call 999 during these treatments?",
      options: [{ text: "For chest pain or difficulty breathing", right: true }, { text: "For a mild headache" }, { text: "For feeling a little tired" }],
      why: "Always call 999 if you have chest pain or difficulty breathing.",
    },
  },
  {
    id: "lvc-surgery-recovery",
    kicker: "Recovery",
    question: "How long does it take to recover from liver surgery?",
    hook: "It is a major operation. It may take up to 3 months after a resection to start getting back to normal, and longer after a transplant.",
    short: "After a liver resection you spend about 24 hours in intensive care or a high-dependency unit, and most people go home between 2 and 7 days later, depending on the operation. It may take up to 3 months to start getting back to normal, and longer after a transplant. Avoid heavy lifting for at least 8 weeks, take gentle walks, and contact the hospital about signs of infection.",
    sections: [
      {
        heading: "Straight after the operation",
        paragraphs: [
          "After a liver resection, you will be in intensive care or a high-dependency unit for about 24 hours. If you have a liver transplant, you will usually be in intensive care for a few days.",
          "This is normal after major operations. There is a risk the liver may bleed after surgery, so the doctors and nurses monitor you carefully.",
          "Tell your nurse whenever you have any pain. It is much easier to control pain if you keep on top of it, and you will be able to move more easily.",
        ],
      },
      {
        heading: "Getting moving",
        paragraphs: [
          "The nurses will usually help you get out of bed the day after your operation or sooner. Moving your legs regularly and doing deep-breathing exercises helps prevent chest infections and blood clots.",
          "You will wear compression stockings to help prevent blood clots in your legs. Keep them on until you are fully mobile again.",
          "Many hospitals run enhanced recovery programmes. These encourage you to eat, drink and get moving as soon as possible.",
        ],
      },
      {
        heading: "Going home",
        paragraphs: [
          "After a liver resection, most people can go home 2 to 3 days after keyhole surgery for a smaller resection, 4 to 5 days after keyhole surgery for a bigger one, or 5 to 7 days after open surgery. After a liver transplant, you usually stay in hospital for 2 or 3 weeks.",
          "When you first go home, you will need someone to help you around the house. Ask who you should call if you are worried, and make sure you have the number.",
        ],
      },
      {
        heading: "The weeks after",
        paragraphs: [
          "The remaining liver can grow bigger and work as it did before, which takes about 4 to 6 weeks. It may take up to 3 months after a liver resection before you start getting back to normal, and recovery takes longer after a transplant.",
          "For at least 8 weeks, avoid lifting heavy loads, such as shopping or laundry, and activities like vacuuming or gardening. Your specialist will tell you when you should be able to drive again.",
          "Get enough rest, eat well and do some gentle exercise, such as regular short walks. Your liver specialist will advise you not to drink alcohol for some time, to protect the liver while it grows.",
        ],
      },
      {
        heading: "Signs of infection",
        paragraphs: [
          "Always tell your doctor if your wound becomes hot, painful or starts to leak fluid, as these are possible signs of infection. Contact the hospital straight away if this happens when you go home.",
          "Also let your doctor know if you have a raised temperature, a new cough, wheezing or shortness of breath, or tenderness, redness or swelling in your legs.",
        ],
      },
    ],
    helps: [
      "Tell your nurse whenever you have pain, so it can be kept under control.",
      "Get up and move as soon as the nurses suggest, and keep up your leg and breathing exercises.",
      "Avoid heavy lifting, vacuuming and gardening for at least 8 weeks.",
      "Take regular short walks, and do more as you recover.",
      "Avoid alcohol for as long as your liver specialist advises.",
      "Contact the hospital straight away if your wound becomes hot, painful or leaks fluid.",
    ],
    tryThisWeek: [
      "Speak up about pain.",
      "Take a short walk each day.",
      "Leave heavy jobs to others.",
    ],
    ask: "How long should I avoid lifting and driving, and who do I call if my wound looks infected?",
    interactive: {
      kind: "timeline",
      title: "Recovery after a liver resection",
      steps: [
        { id: "first-day", when: "First day", title: "Close care", points: ["About 24 hours in intensive care or a high-dependency unit.", "Out of bed the day after, or sooner."] },
        { id: "home", when: "2 to 7 days", title: "Going home", points: ["Keyhole surgery: often 2 to 5 days.", "Open surgery: often 5 to 7 days."] },
        { id: "regrowth", when: "4 to 6 weeks", title: "The liver regrows", points: ["The remaining liver can grow bigger and work as before.", "You do not need to be in hospital while this happens."] },
        { id: "lifting", when: "8 weeks", title: "No heavy lifting", points: ["Avoid heavy shopping, laundry, vacuuming and gardening.", "Your specialist will tell you when you can drive."] },
        { id: "three-months", when: "Up to 3 months", title: "Back towards normal", points: ["It may take up to 3 months to start getting back to normal.", "Recovery takes longer after a transplant."] },
      ],
    },
    sources: [MAC_SURGERY, LCUK_AFTER_SURGERY],
    quiz: {
      question: "How long does Macmillan say to avoid heavy lifting after liver surgery?",
      options: [{ text: "At least 8 weeks", right: true }, { text: "2 days" }, { text: "There is no need to" }],
      why: "For at least 8 weeks, avoid lifting heavy loads, such as shopping or laundry, and activities like vacuuming or gardening.",
    },
  },
  {
    id: "lvc-symptoms",
    kicker: "Symptoms",
    question: "What can help with pain, swelling, jaundice and itching?",
    hook: "Treating the cancer often eases symptoms, and there is a lot that can be done for each one on top of that.",
    short: "Treating the cancer will often improve symptoms, and other treatments can help too. Water tablets or a drain can ease a swollen tummy, a stent can relieve jaundice, and painkillers, anti-sickness medicines and creams help with pain, sickness and itching. A palliative care or symptom control team can support you at any stage.",
    sections: [
      {
        heading: "Help at any stage",
        paragraphs: [
          "If you have liver cancer, treating the cancer will often improve your symptoms. Other treatments can also help control symptoms, and this is sometimes called palliative treatment or supportive care.",
          "Your doctor may refer you to a palliative care team, who are experts in controlling symptoms. You may have their support while you are having your cancer treatment, and they often work closely with a local hospice.",
          "A community symptom control nurse can help people with cancer symptoms at any stage, not just at the end of life.",
        ],
      },
      {
        heading: "Pain",
        paragraphs: [
          "If the cancer stretches the layer of tissue around the liver, it may cause pain. Some people get pain in the right shoulder.",
          "If your pain is not controlled, tell your doctor or nurse as soon as possible. They can change the dose or give you a different painkiller that works better for you.",
          "Take painkillers regularly, as your doctor has prescribed. If you leave it as long as possible before the next dose, the pain builds up and is harder to get on top of. Strong painkillers often cause constipation, and your doctor can prescribe a laxative.",
        ],
      },
      {
        heading: "A swollen tummy",
        paragraphs: [
          "Ascites is a build-up of fluid in the tummy. It can make your tummy swollen and bloated, which can be uncomfortable or painful, and you may feel breathless. In primary liver cancer, it is often caused by the effects of cirrhosis on the liver.",
          "Your doctor will usually prescribe water tablets to try to stop or slow down the build-up of fluid. If it does not improve, a small, fine tube can be put through the skin of your tummy to drain off the fluid.",
        ],
      },
      {
        heading: "Jaundice",
        paragraphs: [
          "Jaundice can be caused by a blocked bile duct or by the liver not working properly. Signs include yellowing of the whites of the eyes and skin, feeling itchy, pale poo and very dark pee.",
          "If the bile duct is blocked, a narrow tube called a stent can help keep it open. Stents may need to be replaced every 3 or 4 months, as they can become blocked and cause an infection.",
          "If you have a stent, contact your doctor or clinical nurse specialist if you get a high temperature, chills or shivering, or your jaundice gets worse.",
        ],
      },
      {
        heading: "Itching, sickness and appetite",
        paragraphs: [
          "For itching, try not to scratch, wear loose cotton clothing, keep cool, pat your skin dry and use non-scented moisturisers. Your doctor or nurse can prescribe lotions or medicines that help.",
          "Your doctor can give you anti-sickness tablets. Tell them if the one you are taking is not working, as they can give you another type.",
          "If you lose your appetite, small, frequent meals or snacks may be easier than 3 meals a day. Ask your nurse or a dietitian for advice.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or nurse as soon as possible if your pain is not controlled.",
      "Take painkillers regularly, as your doctor has prescribed.",
      "Tell your doctor if an anti-sickness tablet is not working.",
      "Try not to scratch, and wear loose clothing made of cotton.",
      "If you have a stent, contact your doctor or nurse about a high temperature, chills or worse jaundice.",
      "Ask about support from a palliative care or symptom control team.",
    ],
    tryThisWeek: [
      "Take painkillers on schedule.",
      "Switch to loose cotton clothes.",
      "Ask about symptom control support.",
    ],
    ask: "Which of my symptoms come from the cancer and which from my liver, and what can be done for each?",
    interactive: {
      kind: "flip-cards",
      title: "What can help each symptom",
      intro: "Turn a card to see what your team can offer.",
      cards: [
        { id: "pain", front: "Pain", when: "Under the right ribs or in the shoulder", back: "Regular painkillers, as prescribed. If pain is not controlled, your team can change the dose or the painkiller." },
        { id: "ascites", front: "A swollen tummy", when: "A build-up of fluid (ascites)", back: "Water tablets to stop or slow the build-up, or a fine tube to drain the fluid off." },
        { id: "jaundice", front: "Jaundice", when: "Yellow skin or eyes", back: "Treating the cancer may help. If the bile duct is blocked, a stent can help keep it open." },
        { id: "itching", front: "Itching", when: "Often with jaundice", back: "Lotions or medicines from your doctor. Loose cotton clothes and non-scented moisturisers can help." },
        { id: "sickness", front: "Feeling sick", when: "From the cancer, treatment or drugs", back: "Anti-sickness tablets. If one does not work, your doctor can give you another type." },
        { id: "appetite", front: "Poor appetite", when: "Feeling full quickly", back: "Small, frequent meals or snacks. A nurse or dietitian can advise and give food or drink supplements." },
      ],
    },
    sources: [MAC_CONTROLLING, LCUK_SYMPTOMS_TX, LCUK_SUPPORT],
    quiz: {
      question: "What should you do if your pain is not controlled?",
      options: [{ text: "Tell your doctor or nurse as soon as possible", right: true }, { text: "Wait and see if it passes" }, { text: "Take a double dose" }],
      why: "If your pain is not controlled, tell your doctor or nurse as soon as possible.",
    },
  },
  {
    id: "lvc-liver-health",
    kicker: "Living well",
    question: "How do I look after the rest of my liver?",
    hook: "Treatment depends on how well the healthy parts of your liver are working. Alcohol, medicines, supplements and vaccines all make a difference.",
    short: "Alcohol can damage the liver and reduce how well it works, so check with your doctor before drinking; people who had cirrhosis are usually advised to stop completely. Check with a pharmacist or doctor before taking any medicines or supplements, and keep up to date with vaccines, such as the flu vaccine every autumn.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "Surgery and some other treatments depend on how well the healthy parts of the liver are working.",
          "Looking after yourself can help speed up your recovery. Even small lifestyle changes may improve your well-being and long-term health.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "It is important to check with your doctor before drinking alcohol. Alcohol can damage the liver and reduce its ability to work well.",
          "If you had cirrhosis before being diagnosed with liver cancer, continuing to drink can make the cirrhosis even worse, and you will usually be advised to stop drinking completely. Even if alcohol has not affected your liver, you might be asked to stop for a time before and after treatment.",
          "If you have physical withdrawal symptoms, such as shaking, sweating or feeling anxious until your first drink of the day, it can be dangerous to stop drinking suddenly. Speak to a doctor before trying to cut down or stop.",
        ],
      },
      {
        heading: "Medicines and supplements",
        paragraphs: [
          "Check with a pharmacist or doctor before taking any medicines, including herbal medicines, as they may not be suitable if you have cirrhosis.",
          "Paracetamol may not be suitable if you have a liver condition. Check the packet or leaflet, and speak to a pharmacist or doctor if you are not sure.",
          "If you have a liver condition, always talk to your medical team before you try a new supplement. Some can do more harm than good, and weight loss supplements can contain herbs that damage the liver.",
        ],
      },
      {
        heading: "Vaccines",
        paragraphs: [
          "People with a liver condition can have a higher risk of becoming very unwell if they pick up an infectious disease. So the safest option is usually to have the vaccine.",
          "People with long-term liver disease need a flu vaccine every autumn, and should also get extra vaccines for hepatitis A, hepatitis B and pneumonia.",
          "Live vaccines might be a problem for some people, such as those who have had a liver transplant or are having chemotherapy. Let your liver team know when a vaccine is offered, so they can advise you.",
        ],
      },
      {
        heading: "Weight, smoking and activity",
        paragraphs: [
          "Healthy changes include having a healthy, balanced diet, exercising regularly, trying to keep to a healthy weight and not smoking.",
          "If you smoke, try to stop before an operation. This helps reduce the risk of a chest infection and helps your wound heal.",
        ],
      },
    ],
    helps: [
      "Check with your doctor before drinking any alcohol.",
      "Speak to a doctor before cutting down if you have withdrawal symptoms.",
      "Ask a pharmacist or doctor before taking any medicine, including herbal ones.",
      "Talk to your medical team before trying a new supplement.",
      "Have the flu vaccine every autumn, and let your liver team know when a vaccine is offered.",
      "Try to stop smoking.",
    ],
    tryThisWeek: [
      "Ask your doctor about alcohol.",
      "Check medicines with a pharmacist.",
      "Book your flu vaccine.",
    ],
    ask: "Is it safe for me to drink any alcohol, and which painkillers and vaccines are right for me?",
    interactive: {
      kind: "scenarios",
      title: "Protecting your liver day to day",
      scenarios: [
        {
          id: "drink",
          situation: "Friends offer you a drink at a party.",
          options: [{ text: "Check first with your doctor whether any alcohol is safe", best: true }, { text: "Have one, it can't hurt" }],
          why: "It is important to check with your doctor before drinking alcohol. Alcohol can damage the liver and reduce its ability to work well.",
        },
        {
          id: "headache",
          situation: "You have a headache and reach for paracetamol.",
          options: [{ text: "Check with a pharmacist or doctor first", best: true }, { text: "Take it without checking" }],
          why: "Paracetamol may not be suitable if you have a liver condition.",
        },
        {
          id: "supplement",
          situation: "A friend recommends a herbal supplement for your liver.",
          options: [{ text: "Talk to your medical team first", best: true }, { text: "Start it today" }],
          why: "If you have a liver condition, always talk to your medical team before you try a new supplement.",
        },
        {
          id: "flu",
          situation: "It is autumn and you are offered the flu vaccine.",
          options: [{ text: "Have it, and let your liver team know", best: true }, { text: "Skip it this year" }],
          why: "People with long-term liver disease need a flu vaccine every autumn.",
        },
      ],
    },
    sources: [MAC_LC, LU_ALCOHOL, NHS_CIRRHOSIS, LU_SUPPLEMENTS, LU_VACCINES, NHS_PARACETAMOL, MAC_SURGERY],
    quiz: {
      question: "What should you do before drinking alcohol after liver cancer?",
      options: [{ text: "Check with your doctor", right: true }, { text: "Nothing, a little is always fine" }, { text: "Wait one week after treatment" }],
      why: "It is important to check with your doctor before drinking alcohol.",
    },
  },
  {
    id: "lvc-eating",
    kicker: "Eating well",
    question: "How can I eat enough when I feel full so quickly?",
    hook: "An enlarged liver or fluid in the tummy can squash the stomach. Small amounts often, and help from a dietitian, make a difference.",
    short: "Liver cancer and its treatment can make you feel full quickly, feel sick or go off your food, and it can be hard to keep your weight up. Eating something every couple of hours, nourishing drinks and adding calories where you can all help. A dietitian can work out a diet that suits you.",
    sections: [
      {
        heading: "Why eating gets hard",
        paragraphs: [
          "Liver cancer and its treatment can cause a lot of physical problems that affect your ability to eat and drink. You may have jaundice, or feel sick.",
          "An enlarged liver takes up space in your tummy and can squash your stomach, so you feel full. Fluid collecting in your tummy can do the same.",
          "People often feel very tired when they have cancer, or during treatment. You may not feel like preparing food or eating much.",
        ],
      },
      {
        heading: "Little and often",
        paragraphs: [
          "If you feel full or sick, it may help to eat several small meals a day instead of fewer larger ones. Aim to have something every couple of hours.",
          "Do not feel you have to eat a full meal: snacks are fine and may be easier to manage. Have whatever you feel like, rather than forcing yourself to eat things you don't fancy.",
          "Try not to drink a lot during meals, as fluid fills your stomach and leaves less room for food. Have drinks after or between meals.",
        ],
      },
      {
        heading: "Energy and protein",
        paragraphs: [
          "If you are recovering from surgery, you need protein to help your body repair itself. If you have lost weight, you need plenty of calories.",
          "If you can manage the fat, you can add extra calories to everyday foods with butter, cream or cheese. You can fortify milk by adding 3 or 4 tablespoons of milk powder to whole milk.",
          "If you cannot manage food, sip a nourishing drink, such as a milkshake, a smoothie or hot chocolate.",
        ],
      },
      {
        heading: "Special advice",
        paragraphs: [
          "If you have jaundice, the flow of bile into your digestive system is blocked, so it is best not to eat too many fatty foods. You do need some fat, though, as it is a source of some essential vitamins.",
          "Some foods interfere with the way targeted therapies work. Avoid grapefruit or watercress if you are asked to.",
          "If you also have cirrhosis, you may need special advice to get enough energy and protein, and not too much salt. Do not make changes without first discussing them with the professionals looking after you.",
        ],
      },
      {
        heading: "Help from a dietitian",
        paragraphs: [
          "Ask to speak to a dietitian if you are having trouble with your weight. They can work out a diet that suits you and suggest ways of adding calories, and your doctor can prescribe build-up drinks.",
          "Be wary of alternative diets that claim to treat or cure cancer. Research has not shown that any of them help to treat cancer, so talk to your medical team before trying one.",
        ],
      },
    ],
    helps: [
      "Eat something small every couple of hours.",
      "Have drinks after or between meals, rather than with them.",
      "Keep a stock of foods you like, tinned, packaged or in the freezer.",
      "Sip a nourishing drink if you cannot manage food.",
      "Avoid grapefruit or watercress if your team asks you to.",
      "Ask to speak to a dietitian if you are having trouble with your weight.",
    ],
    tryThisWeek: [
      "Eat something every couple of hours.",
      "Drink between meals.",
      "Ask to see a dietitian.",
    ],
    ask: "Could I see a dietitian, and are there any foods I should avoid with my treatment?",
    interactive: {
      kind: "scenarios",
      title: "Mealtimes when you feel full",
      scenarios: [
        {
          id: "full",
          situation: "You feel full after a few mouthfuls of dinner.",
          options: [{ text: "Stop, and have a small snack later", best: true }, { text: "Force yourself to finish" }],
          why: "Do not feel you have to eat a full meal: snacks are fine and may be easier to manage.",
        },
        {
          id: "water",
          situation: "You like a big glass of water with every meal.",
          options: [{ text: "Have drinks after or between meals", best: true }, { text: "Drink plenty while you eat" }],
          why: "Try not to drink a lot during meals, as fluid fills your stomach and leaves less room for food.",
        },
        {
          id: "no-appetite",
          situation: "You cannot face any food today.",
          options: [{ text: "Sip a nourishing drink", best: true }, { text: "Skip eating altogether" }],
          why: "If you cannot manage food, sip a nourishing drink, such as a milkshake, a smoothie or hot chocolate.",
        },
        {
          id: "grapefruit",
          situation: "Breakfast includes grapefruit, and you are taking a targeted drug.",
          options: [{ text: "Check with your team, and avoid it if asked", best: true }, { text: "Carry on as usual" }],
          why: "Some foods interfere with the way targeted therapies work. Avoid grapefruit or watercress if you are asked to.",
        },
      ],
    },
    sources: [LCUK_DIET, MAC_CONTROLLING, LCUK_SYMPTOMS_TX, LU_DIET_CIRRHOSIS],
    quiz: {
      question: "How often does Liver Cancer UK suggest eating if you feel full or sick?",
      options: [{ text: "Something every couple of hours", right: true }, { text: "One large meal a day" }, { text: "Only when you feel hungry" }],
      why: "Aim to have something every couple of hours.",
    },
  },
  {
    id: "lvc-fatigue",
    kicker: "Energy",
    question: "Why am I so tired, and what helps?",
    hook: "Tiredness is a common symptom of cancer in the liver. It can come from the cancer, its treatment or other symptoms, and sleep alone does not usually fix it.",
    short: "Tiredness is a common symptom of cancer in the liver, and it may be caused by the cancer itself, its treatment, or symptoms and side effects. Cancer fatigue does not usually go away with sleep or rest. Pacing yourself, balancing rest with gentle activity such as short walks, and telling your team how it affects you all help.",
    sections: [
      {
        heading: "A common symptom",
        paragraphs: [
          "Tiredness is a common symptom of cancer in the liver. It may be caused by the cancer itself, its treatment, or symptoms or side effects.",
          "Fatigue is very common in people with cancer. Research suggests it affects almost 65 out of 100 people with cancer.",
          "It is different from tiredness, which is usually short term and gets better after you stop, sleep or rest. Cancer fatigue does not usually go away with sleep or rest.",
        ],
      },
      {
        heading: "During and after treatment",
        paragraphs: [
          "Tiredness is a common side effect of embolisation treatment. It can last for a couple of weeks.",
          "Tiredness and feeling lethargic a lot of the time are common during treatment and for some months afterwards.",
          "Some immunotherapy can affect the glands that make hormones. Contact the hospital on the 24-hour number if your tiredness gets worse or stops you doing your usual daily activities, or you feel weak or shaky.",
        ],
      },
      {
        heading: "Pacing yourself",
        paragraphs: [
          "Try to pace yourself. Save your energy for the things that matter to you and that you enjoy.",
          "Make sure you get enough rest. But try to balance this with some physical activity, such as short walks.",
          "A daily diary can help you record your energy levels at different times of the day, find any patterns and plan important activities for when you have more energy.",
        ],
      },
      {
        heading: "Gentle activity",
        paragraphs: [
          "There is good evidence that physical activity, such as walking quickly, is one of the best ways to help reduce fatigue. Being active may also increase your appetite, improve sleep and help with mood.",
          "It is best to check with your doctor before starting any new type of exercise. To start with, you could go for a short walk each day, and increase the distance when you are ready.",
        ],
      },
      {
        heading: "Telling your team",
        paragraphs: [
          "Tell your healthcare team how you feel and whether fatigue is affecting your day-to-day activities. Your specialist nurse may ask you to give it a score from 0 to 10, where 10 is the worst possible fatigue.",
          "Anaemia, pain, trouble sleeping, eating problems and your feelings can all add to fatigue. Your cancer doctor, specialist nurse or GP can refer you to an occupational therapist for help with everyday tasks.",
        ],
      },
    ],
    helps: [
      "Plan your day so you save energy for the things that matter most to you.",
      "Balance rest with some activity, such as short walks.",
      "Keep a diary of your energy levels and share it with your team.",
      "Check with your doctor before starting any new exercise.",
      "Give your fatigue a score from 0 to 10 when you tell your team about it.",
      "During immunotherapy, call the 24-hour number if tiredness gets worse or stops your usual activities.",
    ],
    tryThisWeek: [
      "Save energy for what matters.",
      "Take a short daily walk.",
      "Keep an energy diary.",
    ],
    ask: "What might be causing my tiredness, and could anything be treated or changed?",
    interactive: {
      kind: "scenarios",
      title: "Spending your energy",
      scenarios: [
        {
          id: "good-day",
          situation: "You wake with energy and want to do every job in the house.",
          options: [{ text: "Do what matters most, then rest", best: true }, { text: "Do it all while you can" }],
          why: "Try to pace yourself. Save your energy for the things that matter to you and that you enjoy.",
        },
        {
          id: "sleep",
          situation: "A friend says a good night's sleep will sort you out.",
          options: [{ text: "Explain that cancer fatigue does not usually go away with sleep", best: true }, { text: "Agree, and feel you have failed" }],
          why: "Cancer fatigue does not usually go away with sleep or rest.",
        },
        {
          id: "immunotherapy",
          situation: "During immunotherapy, tiredness suddenly stops you doing your usual things.",
          options: [{ text: "Call the hospital's 24-hour number", best: true }, { text: "Wait for your next appointment" }],
          why: "Contact the hospital on the 24-hour number if your tiredness gets worse or stops you doing your usual daily activities.",
        },
        {
          id: "walk",
          situation: "You have rested all week and feel weaker.",
          options: [{ text: "Check with your doctor, then try a short daily walk", best: true }, { text: "Stay in bed until the tiredness lifts" }],
          why: "To start with, you could go for a short walk each day, and increase the distance when you are ready.",
        },
      ],
    },
    sources: [MAC_CONTROLLING, CRUK_FATIGUE_WHAT, MAC_FATIGUE, CRUK_FATIGUE_MANAGE, CRUK_EMBOL, LCUK_DIET, MAC_ATEB, CRUK_COPING],
    quiz: {
      question: "How is cancer fatigue different from ordinary tiredness?",
      options: [{ text: "It does not usually go away with sleep or rest", right: true }, { text: "It always lasts a day or two" }, { text: "It means you are not trying hard enough" }],
      why: "Cancer fatigue does not usually go away with sleep or rest.",
    },
  },
  {
    id: "lvc-mood",
    kicker: "Mood",
    question: "How do I cope with how I feel, and where can I get support?",
    hook: "Shock, fear, anger and sadness are all normal. Liver cancer is rare, which can feel lonely, but support is there, including right now if you need it.",
    short: "It is normal to feel shocked, frightened, angry or sad, and these feelings generally become easier to cope with in time. If low feelings go on for more than 2 weeks, talk to your doctor or nurse: depression is very common in people with cancer, and it can be treated. If you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "Feelings that come and go",
        paragraphs: [
          "You may feel a range of powerful emotions, such as feeling shocked, numb, frightened, angry, guilty or sad. Everyone reacts in their own way.",
          "It takes time to process everything, and you are bound to have good days and bad days. Generally, these feelings become easier to cope with in time, but some people need a bit of help.",
          "With a rare cancer, coping can be even harder. You may get fed up with explaining your diagnosis, and you are less likely to come across people in the same situation.",
        ],
      },
      {
        heading: "When it might be depression",
        paragraphs: [
          "Depression is very common in people with cancer. As many as 1 in 3 people with a cancer of the digestive system have depression at some point, but it is not inevitable and it can be successfully treated.",
          "Signs can include feeling low most of the time, losing interest in things you used to enjoy, changes in sleeping, eating or concentration, and feeling helpless. If these go on for more than 2 weeks, talk to your doctor or nurse.",
        ],
      },
      {
        heading: "Things that can help",
        paragraphs: [
          "Talking to your family, friends or partner about how you feel can help them support you. You might find it easier to talk to someone outside the family, such as a counsellor or a cancer helpline.",
          "Physical activity can lift your mood, even just going for a walk with a friend. A cancer support group or online forum can help you meet people who know how it feels.",
          "You can refer yourself to NHS talking therapies for anxiety and depression without seeing a GP, if you are registered with a GP and aged 18 or over, or 16 or over in some areas. Your GP can also refer you for counselling.",
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
      {
        heading: "Where to find support",
        paragraphs: [
          "You can call the Macmillan Support Line free on 0808 808 00 00, 8am to 8pm, 7 days a week. Cancer Research UK's information nurses are on freephone 0808 800 4040, 9am to 5pm, Monday to Friday.",
          "The Liver UK nurse helpline, formerly the British Liver Trust helpline, is on 0800 652 7330. It is there to help if you have questions or just need a chat.",
          "If your cancer cannot be cured, you will be referred to a palliative care team. They, or your clinical nurse specialist, can help you and your loved ones get any support you need.",
        ],
      },
    ],
    helps: [
      "Talk about how you feel with someone close, or with a counsellor or helpline.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Refer yourself to NHS talking therapies, or ask your GP about counselling.",
      "Try a walk with a friend, which can help lift your mood.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell someone close how you feel.",
      "Look up NHS talking therapies.",
      "Take a walk with a friend.",
    ],
    ask: "Could my low mood be depression, and can you refer me for counselling or a talking therapy?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor or nurse",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: ["Feeling low or sad most of the time", "Losing interest in things I used to enjoy", "Changes in my sleep", "Changes in my eating", "Trouble concentrating", "Feeling helpless or vulnerable", "Problems starting or finishing tasks"],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [CRUK_COPING, LCUK_MENTAL, MAC_DEPRESSION, LCUK_LIVING_HCC, NHS_TALKING, NHS_URGENT, NHS_SUICIDAL, SAMARITANS, MAC_LC, NHS_LC_TREAT, LCUK_JUST, NHS_CIRRHOSIS],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, they always pass" }],
      why: "If these go on for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
];
