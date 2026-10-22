import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Primary biliary cholangitis page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Liver UK (the new name for
// the British Liver Trust; britishlivertrust.org.uk now redirects to liveruk.org) and the PBC Foundation (whose
// pbcfoundation.org.uk address now redirects to pbcfoundation.international), with NICE's appraisals of the
// second-line medicines, the MHRA's approval of linerixibat and the government's Access to Work guide. General
// information only; it never replaces what a person's own GP or liver team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const liverUk = (label: string, path: string): LearnSource => ({ label: `Liver UK: ${label}`, url: `https://liveruk.org/${path}` });
const pbcf = (label: string, path: string): LearnSource => ({ label: `PBC Foundation: ${label}`, url: `https://www.pbcfoundation.international/${path}` });
const nice = (label: string, path: string): LearnSource => ({ label: `NICE: ${label}`, url: `https://www.nice.org.uk/guidance/${path}` });

const PBC = "conditions/primary-biliary-cholangitis-pbc";
const NHS_PBC = nhs("Primary biliary cholangitis (primary biliary cirrhosis)", `${PBC}/`);
const NHS_SYMPTOMS = nhs("Primary biliary cholangitis: symptoms", `${PBC}/symptoms/`);
const NHS_TREATMENT = nhs("Primary biliary cholangitis: treatment", `${PBC}/treatment/`);
const NHS_CIRRHOSIS = nhs("Cirrhosis", "conditions/cirrhosis/");
const NHS_OSTEOPOROSIS = nhs("Osteoporosis", "conditions/osteoporosis/");

const LU = "about-liver-disease/conditions/pbc";
const LU_PBC = liverUk("Primary biliary cholangitis (PBC)", `${LU}/`);
const LU_WHAT = liverUk("What is primary biliary cholangitis?", `${LU}/what-is-pbc/`);
const LU_CAUSES = liverUk("What causes primary biliary cholangitis?", `${LU}/pbc-causes/`);
const LU_SYMPTOMS = liverUk("Symptoms of primary biliary cholangitis", `${LU}/pbc-symptoms/`);
const LU_DIAGNOSIS = liverUk("Diagnosing primary biliary cholangitis", `${LU}/pbc-diagnosis/`);
const LU_ONGOING = liverUk("Ongoing tests for primary biliary cholangitis", `${LU}/pbc-ongoing-tests/`);
const LU_JUST = liverUk("Just diagnosed with primary biliary cholangitis", `${LU}/pbc-just-diagnosed/`);
const LU_TREATMENT = liverUk("Treating primary biliary cholangitis", `${LU}/pbc-treatment/`);
const LU_COMPLICATIONS = liverUk("Complications and conditions related to PBC", `${LU}/pbc-complications/`);
const LU_ADVANCED = liverUk("Treating advanced primary biliary cholangitis", `${LU}/advanced-pbc-treatment/`);
const LU_FUTURE = liverUk("The future of primary biliary cholangitis treatment", `${LU}/pbc-future-tretment/`);
const LU_LIVING = liverUk("Living with primary biliary cholangitis", `${LU}/living-with-pbc/`);
const LU_FATIGUE = liverUk("Coping with fatigue", "about-liver-disease/living-with-a-liver-condition/medical-care/coping-with-fatigue/");
const LU_WORK = liverUk("Work", "about-liver-disease/living-with-a-liver-condition/everyday-life-with-a-liver-condition/work/");
const LU_DEXA = liverUk("DEXA scans (bone density scan)", "about-liver-disease/tests/dexa-scans-bone-density-scan/");
const LU_FIBROSCAN = liverUk("VCTE (FibroScan)", "about-liver-disease/tests/transient-elastography-fibroscan/");
const LU_SUPPORT_GROUPS = liverUk("Support groups", "how-we-can-help/support-groups/");
const LU_HELPLINE = liverUk("Nurse-led helpline", "how-we-can-help/nurse-led-helpline/");
const LU_ELAFIBRANOR = liverUk("Elafibranor approved by NICE for primary biliary cholangitis", "elafibranor-approved-by-nice-for-primary-biliary-cholangitis/");

const PBCF_ABOUT = pbcf("About PBC", "what-is-pbc/about-pbc/");
const PBCF_SYMPTOMS = pbcf("PBC symptoms", "what-is-pbc/symptoms/");
const PBCF_TREATMENTS = pbcf("Treatments", "what-is-pbc/treatments/");
const PBCF_OCA = pbcf("Obeticholic acid", "obeticholic-acid/");
const PBCF_LINERIXIBAT = pbcf("MHRA approves linerixibat for the treatment of itch in PBC", "mhra-approves-linerixibat-for-the-treatment-of-itch-in-pbc/");
const PBCF_PRACTICAL = pbcf("Practical information", "living-with-pbc/practical-information/");
const PBCF_SELF_CARE = pbcf("Self-care", "living-with-pbc/self-care/");
const PBCF_MY_PBC = pbcf("This is my PBC", "living-with-pbc/this-is-my-pbc/");
const PBCF_WHAT_WE_DO = pbcf("What we do", "support-services/what-we-do/");

const NICE_OCA = nice("Obeticholic acid for treating primary biliary cholangitis (TA443)", "ta443/chapter/1-Recommendations");
const NICE_ELAFIBRANOR = nice("Elafibranor for previously treated primary biliary cholangitis (TA1016)", "ta1016/chapter/1-Recommendations");
const NICE_SELADELPAR = nice("Seladelpar for previously treated primary biliary cholangitis (TA1171)", "ta1171/chapter/1-recommendation");
const MHRA_LINERIXIBAT: LearnSource = { label: "MHRA: MHRA approves linerixibat (Lynavoy) for the treatment of itch due to biliary tract disease", url: "https://www.gov.uk/government/news/mhra-approves-linerixibat-lynavoy-for-the-treatment-of-itch-due-to-biliary-tract-disease" };
const GOV_ACCESS_TO_WORK: LearnSource = { label: "GOV.UK: Access to Work: get support if you have a disability or health condition", url: "https://www.gov.uk/access-to-work" };

export const pbcAnswers: LearnArticle[] = [
  {
    id: "pbc-what-it-is",
    kicker: "Understanding",
    question: "What is primary biliary cholangitis?",
    hook: "The immune system mistakes the liver's tiny bile ducts for something foreign. It is slow, it is not caused by alcohol, and it can be treated.",
    short: "Primary biliary cholangitis (PBC) is a long-term liver condition in which the immune system mistakenly attacks the small bile ducts in the liver. Bile then builds up and damages the liver. It usually develops very slowly, over many years, and it is not related to alcohol in any way.",
    sections: [
      {
        heading: "Bile and the small ducts",
        paragraphs: [
          "Bile is a liquid produced inside the liver that's used to help digest fats, absorb certain vitamins and remove waste products from the body. It passes out of the liver through small tubes called bile ducts.",
          "If you have PBC, your bile ducts become inflamed. Over time, this inflammation damages the ducts. Without the ducts to carry the bile, it builds up in the liver and causes harm to the liver tissues.",
        ],
      },
      {
        heading: "An immune system mistake",
        paragraphs: [
          "In PBC, the immune system, the body's natural defence against infection and illness, mistakenly attacks the bile ducts. This makes PBC an autoimmune condition, like multiple sclerosis and type 1 diabetes.",
          "Doctors do not know exactly what causes it. Two things seem to need to be in place: a genetic element, and a trigger from the environment. That trigger could be an infection, tobacco smoke or contact with some types of chemicals.",
          "PBC is not related to alcohol in any way. It is not caused by drinking alcohol, or by anything else you have or haven't done.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "Doctors estimate that around 25,000 people in the UK have PBC. It can affect anyone, but it's up to 10 times more common in women than men. It can affect people from all ethnic backgrounds.",
          "PBC most often starts in middle age, although occasionally it can develop in people as early as their 20s. The PBC Foundation says the common age of diagnosis is between 35 and 55.",
        ],
      },
      {
        heading: "A name that changed",
        paragraphs: [
          "PBC used to be called primary biliary cirrhosis. The name was changed in 2015, because it was a bit misleading. Most people with PBC do not have cirrhosis, which means advanced scarring of the liver.",
          "The word cholangitis refers to inflammation of the bile duct cells. For the vast majority of people with PBC, the new name is far more accurate.",
        ],
      },
      {
        heading: "Family links",
        paragraphs: [
          "Close relatives of someone with PBC have roughly 10 times the average risk of developing it themselves. But PBC is a rare condition, so it's a very small risk to start with, and the risk to relatives is not as great as it seems.",
          "You cannot pass on PBC by normal contact, by blood, sex or breastfeeding. The PBC Foundation does not recommend routine testing of relatives who are well.",
        ],
      },
    ],
    helps: [
      "Keep a note of the web address of reliable information in your phone, so you can text or email it to anyone who asks.",
      "Check that information you find on the internet is from a reliable source like the NHS or a well-known charity.",
      "Tell a pharmacist or any healthcare professional treating you that you have PBC.",
      "Ask your doctor about any medicines you should avoid.",
      "If you smoke, stop: smoking is linked to PBC and to many other diseases.",
    ],
    tryThisWeek: [
      "Save a reliable PBC page to share.",
      "Tell your pharmacist you have PBC.",
      "Ask which medicines to avoid.",
    ],
    ask: "How far has my PBC developed, and what does that mean for me?",
    interactive: {
      kind: "flip-cards",
      title: "The words you may hear",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "bile", front: "Bile", when: "Made in the liver", back: "A liquid that helps digest fats, absorb certain vitamins and remove waste products from the body." },
        { id: "ducts", front: "Bile ducts", when: "The small tubes", back: "Carry bile out of the liver. In PBC, the immune system mistakenly attacks them." },
        { id: "autoimmune", front: "Autoimmune", when: "What kind of condition PBC is", back: "The immune system attacks healthy body cells by mistake." },
        { id: "cholangitis", front: "Cholangitis", when: "The C in PBC", back: "Inflammation of the bile duct cells. It replaced the word cirrhosis in 2015." },
        { id: "cholestasis", front: "Cholestasis", when: "Seen in blood tests", back: "A problem with the flow of bile through your liver." },
        { id: "cirrhosis", front: "Cirrhosis", when: "Only if PBC is advanced", back: "Advanced scarring of the liver. Most people with PBC do not have it." },
      ],
    },
    sources: [NHS_PBC, LU_WHAT, LU_CAUSES, LU_PBC, PBCF_ABOUT, LU_JUST, NHS_TREATMENT],
    quiz: {
      question: "Is PBC caused by drinking alcohol?",
      options: [{ text: "No, it is not related to alcohol in any way", right: true }, { text: "Yes, after many years of drinking" }, { text: "Only in men" }],
      why: "PBC is not related to alcohol in any way. It is not caused by drinking alcohol, or by anything else you have or haven't done.",
    },
  },
  {
    id: "pbc-symptoms",
    kicker: "Symptoms",
    question: "What does PBC feel like: tiredness, itching and dry eyes?",
    hook: "Many people feel nothing at first. When symptoms come, tiredness and itching lead, and how bad they are says little about the liver.",
    short: "Many people have no symptoms when PBC is found. The most common symptoms are fatigue and itching, and some people have dry eyes and mouth, aches, or discomfort under the right ribs. How severe the symptoms are is not always related to how much liver damage there is.",
    sections: [
      {
        heading: "Often nothing at first",
        paragraphs: [
          "Most people are only diagnosed with PBC after having a routine blood test for another reason. Some people have symptoms early on and some may develop them later.",
          "In the early stages, you may not have any symptoms at all. You may feel a bit run down, or under the weather. The PBC Foundation says around 60% of people with PBC have no symptoms when they are diagnosed.",
        ],
      },
      {
        heading: "Fatigue",
        paragraphs: [
          "Fatigue, or extreme tiredness, is a common symptom, though it is not always caused by PBC. It can have a significant impact on your daily activities, and some people feel very sleepy during the day.",
          "More than half of all those with PBC have fatigue, and 1 in 5 people have it severely. Fatigue caused by a disease isn't just feeling a bit tired.",
        ],
      },
      {
        heading: "Itching",
        paragraphs: [
          "Itchy skin can be widespread or only affect a single area. It may be worse at night, when in contact with fabrics, when warm, or during pregnancy. People sometimes describe feeling an itch deep under the skin.",
          "As many as 4 out of 5 people with PBC are troubled by itching at some point. Developing itching doesn't mean your PBC is getting worse. In fact, itching sometimes gets better as the disease continues.",
        ],
      },
      {
        heading: "Dry eyes, aches and other signs",
        paragraphs: [
          "Other symptoms include dry eyes and mouth, bone or joint aches, and pain or discomfort in the upper right side of the tummy. Some people develop yellow spots on the eyelids or around their eyes, caused by fatty cholesterol deposits under the skin. These are harmless in themselves.",
          "The commonest autoimmune disease linked to PBC is Sjogren's syndrome, which around 1 in 3 people with PBC develop. It commonly causes dry eyes and a dry mouth. If you have PBC, you may also have symptoms of another condition, such as an underactive thyroid.",
        ],
      },
      {
        heading: "Symptoms are not the same as damage",
        paragraphs: [
          "Symptoms can range from mild to severe, and this is not always related to the degree of liver damage you have. Some people have severe symptoms but their liver is not severely damaged, while others have significant damage but no symptoms or only mild ones.",
          "Itch and fatigue often increase and decrease in cycles. People who have had PBC for a long time know there are good spells and not so good spells. Within the good spells there can be bad days, and in the bad spells there can still be good days.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor as soon as itching becomes a problem, and go back to ask for something else if the first medicine does not help.",
      "Speak to your doctor if your sleep is being disturbed by itching.",
      "Keep an eye on your symptoms between appointments, and keep a list of topics to discuss with your doctor.",
      "If you have a dry mouth, take care of your teeth and gums and visit a dentist regularly.",
      "If you have dry eyes or a dry mouth, have regular eye or dental check-ups.",
    ],
    tryThisWeek: [
      "Tell your doctor about any itching.",
      "Start a list of symptoms to discuss.",
      "Book a dental check-up.",
    ],
    ask: "Which of my symptoms could be from PBC, and which might have another cause?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your team about",
      intro: "Tick any you have noticed. They become a list you can take to your next appointment.",
      signs: [
        "Tiredness that does not go away with rest",
        "Feeling very sleepy during the day",
        "Itchy skin, or itching that is worse at night",
        "Itching that is disturbing my sleep",
        "Dry eyes or a dry mouth",
        "Bone or joint aches",
        "Pain or discomfort in the upper right side of my tummy",
        "Yellow spots on my eyelids or around my eyes",
      ],
      after: "Symptoms can range from mild to severe, and this is not always related to liver damage. Your doctor or specialist nurse can help, so keep a list to discuss with them.",
      copyHeading: "My PBC symptoms",
    },
    sources: [NHS_SYMPTOMS, LU_SYMPTOMS, PBCF_SYMPTOMS, LU_LIVING, LU_COMPLICATIONS, NHS_TREATMENT, LU_JUST, PBCF_MY_PBC],
    quiz: {
      question: "If itching starts, does it mean PBC is getting worse?",
      options: [{ text: "No, itching does not mean PBC is getting worse", right: true }, { text: "Yes, itching always means more damage" }, { text: "Yes, it means cirrhosis has started" }],
      why: "Developing itching doesn't mean your PBC is getting worse. In fact, itching sometimes gets better as the disease continues.",
    },
  },
  {
    id: "pbc-tests",
    kicker: "Tests",
    question: "How is PBC found: blood tests, antibodies and scans?",
    hook: "Two liver blood tests and one antibody usually tell the story. Scans rule out other causes, and a biopsy is rarely needed.",
    short: "PBC can usually be diagnosed just using blood tests. Raised levels of two substances, ALP and GGT, together with an antibody called AMA, are a sign of PBC. An ultrasound helps rule out other problems with the bile ducts, and a biopsy is only occasionally needed.",
    sections: [
      {
        heading: "Often found by chance",
        paragraphs: [
          "Many people are only diagnosed with PBC after having a routine blood test for another reason. For others, the first step is going to see their GP, often after feeling run down for a while.",
          "Your GP will ask about any symptoms, look at your medical history and may examine you. They will probably arrange a series of general blood tests, including tests to check your liver, your kidneys and your thyroid hormone levels.",
        ],
      },
      {
        heading: "Liver blood tests",
        paragraphs: [
          "Liver blood tests include two substances called alkaline phosphatase (ALP) and gamma-glutamyl transferase (GGT). If you have PBC, both of these levels will be higher than normal.",
          "Raised ALP and GGT show a problem with the flow of bile through your liver, called cholestasis. But there can be other causes for this, such as gallstones. If your liver tests are abnormal, your GP will refer you to a doctor who specialises in liver diseases.",
        ],
      },
      {
        heading: "The antibody test",
        paragraphs: [
          "An autoantibody is an antibody that reacts with your own body proteins. If your ALP and GGT levels are raised, having an autoantibody called antimitochondrial antibody (AMA) in your blood is a sign that you have PBC.",
          "PBC can usually be diagnosed just using blood tests. Your doctor may also test for a protein called immunoglobulin G, or IgG. If this is higher than normal, it may mean you also have autoimmune hepatitis.",
        ],
      },
      {
        heading: "Scans",
        paragraphs: [
          "Once PBC is diagnosed, you'll also need an ultrasound scan to help rule out other problems with your bile ducts and assess your liver. Your specialist may also ask for a type of MRI scan called an MRCP, to rule out gallstones or other blockages.",
          "A liver stiffness test, most commonly called a FibroScan, measures scarring in your liver. It's painless and similar to having an ultrasound. Your doctor is likely to suggest one at least every 3 years.",
        ],
      },
      {
        heading: "When a biopsy is needed",
        paragraphs: [
          "A liver biopsy safely removes a small sample of liver tissue so it can be studied under a microscope. It is occasionally recommended, to assess your liver and help doctors decide on the best treatment.",
          "Most people with PBC won't ever have a liver biopsy, because blood tests and scans can now diagnose PBC very reliably. It is usually only needed if your specialist suspects another liver condition as well as PBC.",
        ],
      },
    ],
    helps: [
      "Don't be alarmed by the range of blood tests; your GP is trying to narrow down the possible reasons for you feeling unwell.",
      "Before a FibroScan, do not eat anything for 3 hours; you can drink, except for anything fatty such as full fat milk.",
      "For a FibroScan, wear a top and skirt or trousers for easy access.",
      "Ask what your FibroScan score was, how and when you will get your results, and what happens next.",
      "Know your ALP numbers, and ask your doctor what your ALP and bilirubin levels mean for your liver health.",
    ],
    tryThisWeek: [
      "Ask for your ALP result.",
      "Note the FibroScan fasting rule.",
      "Write down what happens next.",
    ],
    ask: "What did my ALP, GGT and antibody tests show, and do I need any scans?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "alp", front: "ALP and GGT", when: "Liver blood tests", back: "Both are higher than normal in PBC. They show a problem with the flow of bile through the liver." },
        { id: "ama", front: "AMA", when: "If ALP and GGT are raised", back: "An autoantibody. Having it in your blood is a sign that you have PBC." },
        { id: "igg", front: "IgG", when: "A blood test for a protein", back: "If it is higher than normal, it may mean you also have autoimmune hepatitis." },
        { id: "ultrasound", front: "Ultrasound", when: "Once PBC is diagnosed", back: "Helps rule out other problems with your bile ducts and assess your liver." },
        { id: "mrcp", front: "MRCP", when: "To rule out blockages", back: "A type of MRI scan. Gallstones or other blockages can also cause abnormal ALP and GGT." },
        { id: "fibroscan", front: "FibroScan", when: "At least every 3 years", back: "A painless liver stiffness test that measures scarring in your liver." },
        { id: "biopsy", front: "Liver biopsy", when: "Only occasionally", back: "A small sample of liver tissue is studied under a microscope." },
      ],
    },
    sources: [NHS_PBC, LU_DIAGNOSIS, LU_ONGOING, LU_FIBROSCAN, PBCF_MY_PBC],
    quiz: {
      question: "Which blood test result, along with raised ALP and GGT, is a sign of PBC?",
      options: [{ text: "The antimitochondrial antibody (AMA)", right: true }, { text: "A high blood sugar" }, { text: "A low iron level" }],
      why: "If your ALP and GGT levels are raised, having an autoantibody called antimitochondrial antibody (AMA) in your blood is a sign that you have PBC.",
    },
  },
  {
    id: "pbc-outlook",
    kicker: "Understanding",
    question: "How does PBC change over time?",
    hook: "Usually slowly, often over decades. Many people never reach advanced liver disease, and treatment slows it further.",
    short: "PBC can get gradually worse over time, but the rate varies and it can take decades. With treatment and its slow nature, many people never develop advanced liver disease. If it does become advanced, it can lead to cirrhosis, and there are clear signs that need urgent help.",
    sections: [
      {
        heading: "Usually slow",
        paragraphs: [
          "PBC is a progressive condition, which means the damage to the liver can steadily get worse over time. The rate at which it progresses varies between individuals. Sometimes, it can take decades.",
          "In some people, it develops so slowly that they may never have advanced disease. But in others it can develop more quickly. Without treatment, the liver can become so badly damaged that it no longer works properly.",
        ],
      },
      {
        heading: "Most people never reach cirrhosis",
        paragraphs: [
          "Although PBC does damage the liver over time, treatment and the slow nature of the disease mean that many people never develop advanced liver disease. Most people with PBC will never develop cirrhosis.",
          "It's very difficult for doctors to put a time frame on how long cirrhosis takes to develop. In one patient study, the commonest time from early stage disease to developing cirrhosis was 25 years. In the same study, around 1 in 6 people diagnosed with early stage PBC had advanced disease 10 years later.",
        ],
      },
      {
        heading: "How treatment changes the picture",
        paragraphs: [
          "Ursodeoxycholic acid can help delay liver damage in most people, particularly if it is started early. You'll be assessed after a year to see if you've responded to it. If not, you may need additional treatment.",
          "People with PBC who respond to it, known as Urso-responders, are thought to rejoin the general population in terms of life expectancy. The PBC Foundation says more and more people are now speaking of being diagnosed for 20 or 30 years and more.",
        ],
      },
      {
        heading: "If PBC becomes advanced",
        paragraphs: [
          "As the liver slowly becomes more scarred, you may have extra symptoms. These include yellowing of the skin and the whites of the eyes, fluid in the legs or tummy, dark urine and pale stools, bleeding and bruising more easily, and problems with memory and concentration.",
          "Cirrhosis can be compensated, when the liver is still healthy enough to manage all its important functions, or decompensated, when it is too damaged to work well. People can and do live for many years with cirrhosis.",
        ],
      },
      {
        heading: "Signs that need urgent help",
        paragraphs: [
          "If you've been diagnosed with cirrhosis and you're vomiting blood, your poo is very dark or black, or you suddenly become confused or have slurred speech, call 999 or go to A&E. Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
          "If you've been diagnosed with cirrhosis and your skin or the whites of your eyes look yellow, you have difficulty breathing, or you have a swollen tummy, legs, ankles or feet, ask for an urgent GP appointment or get help from NHS 111.",
        ],
      },
    ],
    helps: [
      "Keep taking your treatment; it is likely you'll need ursodeoxycholic acid for the rest of your life.",
      "Have your regular blood tests, so your doctor can see if you've responded after a year.",
      "If you have cirrhosis, have an abdominal ultrasound every 6 months if your doctor suggests it.",
      "If you have cirrhosis and are vomiting blood, have very dark or black poo, or sudden confusion, call 999 or go to A&E.",
      "If you need A&E, do not drive yourself, and bring any medicines you take with you.",
    ],
    tryThisWeek: [
      "Take your treatment every day.",
      "Book your next blood test.",
      "Learn the 999 signs.",
    ],
    ask: "How quickly is my PBC changing, and is there any sign of cirrhosis?",
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        {
          id: "vomit",
          situation: "You have cirrhosis and you start vomiting blood.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait for your next clinic" }, { text: "Drive yourself to hospital" }],
          why: "If you've been diagnosed with cirrhosis and you're vomiting blood, call 999 or go to A&E. Do not drive to A&E.",
        },
        {
          id: "yellow",
          situation: "You have cirrhosis and the whites of your eyes look yellow.",
          options: [{ text: "Ask for an urgent GP appointment or call NHS 111", best: true }, { text: "Wait to see if it goes away" }],
          why: "If your skin or the whites of your eyes look yellow, ask for an urgent GP appointment or get help from NHS 111.",
        },
        {
          id: "worry",
          situation: "You are worried your PBC will soon turn into cirrhosis.",
          options: [{ text: "Ask your doctor how it is changing", best: true }, { text: "Stop your medicine" }],
          why: "PBC is generally very slow to develop, and treatment should slow it further. Your doctor will be monitoring your condition for life.",
        },
      ],
    },
    sources: [NHS_PBC, LU_ADVANCED, LU_JUST, PBCF_ABOUT, NHS_TREATMENT, NHS_SYMPTOMS, NHS_CIRRHOSIS, LU_ONGOING, LU_COMPLICATIONS, LU_TREATMENT],
    quiz: {
      question: "Does everyone with PBC go on to develop cirrhosis?",
      options: [{ text: "No, most people with PBC never develop it", right: true }, { text: "Yes, within 10 years" }, { text: "Yes, if they have itching" }],
      why: "Most people with PBC will never develop cirrhosis.",
    },
  },
  {
    id: "pbc-udca",
    kicker: "Treatment",
    question: "What is ursodeoxycholic acid, and how does it help?",
    hook: "A bile acid the body already makes, taken every day. For most people it slows PBC down, especially when started early.",
    short: "Ursodeoxycholic acid (UDCA, or Urso) is the main treatment for PBC. It is a bile acid that replaces more damaging bile acids, helping to protect the liver and bile ducts. It can help delay liver damage in most people, and it's likely you'll take it for the rest of your life. It does not improve fatigue.",
    sections: [
      {
        heading: "The main treatment",
        paragraphs: [
          "Ursodeoxycholic acid (UDCA) is the main treatment for PBC. It's usually called Urso for short. It is a bile acid and works by replacing more damaging bile acids, which helps to protect your liver and bile ducts from damage.",
          "It can help delay liver damage in most people, particularly if you start taking it in the early stages of the condition. But it does not improve symptoms such as fatigue.",
        ],
      },
      {
        heading: "How it is taken",
        paragraphs: [
          "Urso comes as a capsule that you swallow. You may start on a low dose and gradually increase it to the full dose. The total dose is based on your weight, so any significant change in weight may mean your doctor needs to change your dose.",
          "At first, your doctor may ask you to spread it over 3 doses a day. Once they are happy with your dose, you may switch to the same total amount once a day, at bedtime. Some people continue to take it in 2 or 3 doses a day, so it's best to always follow the advice of your doctor.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Urso occurs naturally in the body, so it has few side effects. The commonest side effect is diarrhoea. The NHS also lists feeling and being sick.",
          "You may also notice that your poo looks pale. If you notice other changes or possible side effects, discuss them with your doctor or specialist nurse.",
        ],
      },
      {
        heading: "Checking that it works",
        paragraphs: [
          "You may need regular blood tests to monitor your liver function, and you'll be assessed after a year to see if you've responded. Your doctor will measure your ALP levels, to see whether they are back within the normal range.",
          "Around 6 out of every 10 people find that Urso controls their PBC. It is less likely to work well in people diagnosed before the age of 50. If it is not enough, there are alternatives your doctor will suggest.",
        ],
      },
      {
        heading: "A daily medicine for life",
        paragraphs: [
          "Once you start taking UDCA, it's likely you'll need to take it for the rest of your life. Try not to be alarmed by this. Rather than feeling negative about a daily medicine, try to think of it as a benefit that is keeping you as well as possible.",
          "If you also take colestyramine for itching, avoid taking them at the same time, because colestyramine affects how your body absorbs UDCA. Take UDCA at least 1 hour before colestyramine, or 4 to 6 hours afterwards.",
        ],
      },
    ],
    helps: [
      "Always follow your doctor's advice on how many doses a day to take.",
      "Tell your doctor about any significant change in your weight, as your dose is based on your weight.",
      "Take UDCA at least 1 hour before colestyramine, or 4 to 6 hours afterwards.",
      "Discuss any changes or possible side effects with your doctor or specialist nurse.",
      "Have your regular blood tests, so your response can be checked after a year.",
    ],
    tryThisWeek: [
      "Check your dose times with your doctor.",
      "Space Urso and colestyramine apart.",
      "Note any side effects to report.",
    ],
    ask: "Is my ALP coming down on Urso, and when will we know if it is working well enough?",
    interactive: {
      kind: "timeline",
      title: "A year on Urso, step by step",
      steps: [
        { id: "start", when: "Starting", title: "A low dose", points: ["A capsule you swallow", "You may start low and build up to the full dose", "The total dose is based on your weight"] },
        { id: "early", when: "The first months", title: "Finding your dose", points: ["You may take it as 3 doses a day at first", "Regular blood tests check your liver function", "Report any side effects, such as diarrhoea"] },
        { id: "year", when: "After a year", title: "Checking the response", points: ["You'll be assessed to see if you've responded", "Your doctor looks at whether ALP is back in the normal range", "If not, you may need additional treatment"] },
        { id: "long", when: "Long term", title: "A daily medicine", points: ["Likely for the rest of your life", "Some people switch to once a day, at bedtime", "Keep it apart from colestyramine"] },
      ],
    },
    sources: [NHS_TREATMENT, LU_TREATMENT, PBCF_ABOUT],
    quiz: {
      question: "Does ursodeoxycholic acid improve fatigue?",
      options: [{ text: "No, it does not improve fatigue", right: true }, { text: "Yes, within a week" }, { text: "Yes, if taken at bedtime" }],
      why: "It can help delay liver damage in most people. But it does not improve symptoms such as fatigue.",
    },
  },
  {
    id: "pbc-second-line",
    kicker: "Treatment",
    question: "What if ursodeoxycholic acid is not enough?",
    hook: "There are now several second-line options. Each is added to Urso, or used on its own if Urso cannot be taken.",
    short: "If Urso does not work well enough, or cannot be taken, a specialist may offer a second-line medicine: obeticholic acid, elafibranor or seladelpar, or sometimes bezafibrate. Each can be taken with UDCA, or on its own for people who cannot take UDCA.",
    sections: [
      {
        heading: "When Urso is not enough",
        paragraphs: [
          "You'll be assessed after a year to see if you've responded to UDCA. If not, you may need additional treatment. The PBC Foundation says approximately 20% to 30% of people do not respond effectively to Urso.",
          "If the first treatment doesn't help, there are alternatives your doctor will suggest. They may discuss the best treatment for you at a multi-disciplinary team meeting, with all the health professionals involved in caring for people with PBC.",
        ],
      },
      {
        heading: "Obeticholic acid",
        paragraphs: [
          "Obeticholic acid (OCA) works by improving bile flow and reducing inflammation. It may be offered with UDCA if UDCA is not working well enough, or on its own for people who cannot take UDCA. People who may need it will first be assessed by a specialist team with experience in treating PBC.",
          "It is a tablet taken once a day, starting at the lowest dose. A possible side effect is itching. If itching is a problem, your dose may be lowered or you may be offered medicine to treat it. NICE says to assess the response after 12 months, and only continue if there is evidence of benefit.",
          "In Europe, the licence for obeticholic acid was revoked in November 2024. The PBC Foundation says it still has a conditional licence in the UK, and Liver UK says the issues in Europe do not currently affect how it is used in the UK.",
        ],
      },
      {
        heading: "Elafibranor",
        paragraphs: [
          "Elafibranor works by reducing the amount of bile acid you produce, and it makes the bile acid you produce less damaging to your liver. It was approved by NICE in November 2024 and by the Scottish Medicines Consortium in April 2025.",
          "You take one tablet once a day, swallowed whole. Elafibranor does not make itching any worse. Side effects can include constipation, diarrhoea, headaches and feeling sick. You shouldn't take it if you are pregnant, trying to get pregnant, or breastfeeding.",
        ],
      },
      {
        heading: "Seladelpar",
        paragraphs: [
          "Seladelpar also works by reducing the amount of bile acid you produce, which helps to protect your liver from damage. In June 2026, NICE said it can be used with UDCA if UDCA alone has not worked well enough, or alone if UDCA cannot be tolerated.",
          "NICE says the evidence shows seladelpar reduces itch compared with a placebo. Side effects can include tummy pain, headaches and feeling sick.",
        ],
      },
      {
        heading: "Bezafibrate and research",
        paragraphs: [
          "Bezafibrate is not yet specifically licensed for treating PBC, but doctors do commonly give it, either added to Urso or on its own. You will have regular blood tests while taking it, to make sure your kidneys are working well.",
          "You may be invited to take part in clinical trials. These are voluntary, and you can change your mind at any time. PBC is a relatively rare condition, so it is very helpful when people do take part.",
        ],
      },
    ],
    helps: [
      "Ask whether you have responded to UDCA when you are assessed after a year.",
      "If itching becomes a problem on obeticholic acid, tell your doctor; your dose may be lowered or you may be offered medicine for it.",
      "Swallow elafibranor tablets whole; do not chew, crush or split them.",
      "If you are pregnant, trying to get pregnant or breastfeeding, speak to your medical team about your treatment.",
      "Have the regular blood tests your doctor arranges, especially when starting a new medicine.",
      "Take time to decide about a clinical trial, and talk it through with your doctor.",
    ],
    tryThisWeek: [
      "Ask if Urso is working well enough.",
      "Report any itching on a new medicine.",
      "Ask about clinical trials.",
    ],
    ask: "Have I responded well enough to UDCA, and which second-line medicine would suit me?",
    interactive: {
      kind: "flip-cards",
      title: "Second-line medicines, card by card",
      intro: "Turn each card to see how each medicine works.",
      cards: [
        { id: "oca", front: "Obeticholic acid", when: "A tablet once a day", back: "Improves bile flow and reduces inflammation. A possible side effect is itching." },
        { id: "elafibranor", front: "Elafibranor", when: "Approved by NICE in 2024", back: "Reduces the bile acid you produce and makes it less damaging. Does not make itching worse." },
        { id: "seladelpar", front: "Seladelpar", when: "Recommended by NICE in 2026", back: "Reduces the bile acid you produce. Evidence shows it reduces itch compared with a placebo." },
        { id: "bezafibrate", front: "Bezafibrate", when: "Commonly used, not yet licensed for PBC", back: "Can often help if Urso has not controlled PBC well enough. Blood tests check your kidneys." },
      ],
    },
    sources: [NHS_TREATMENT, LU_TREATMENT, PBCF_ABOUT, PBCF_TREATMENTS, NICE_OCA, PBCF_OCA, NICE_ELAFIBRANOR, LU_ELAFIBRANOR, NICE_SELADELPAR, LU_FUTURE],
    quiz: {
      question: "Which second-line medicine does not make itching any worse, according to Liver UK?",
      options: [{ text: "Elafibranor", right: true }, { text: "Obeticholic acid" }, { text: "None of them" }],
      why: "Elafibranor does not make itching any worse.",
    },
  },
  {
    id: "pbc-itching",
    kicker: "Treatment",
    question: "What helps the itching of PBC?",
    hook: "The itch is real, and it is treatable. There is a first medicine, several next steps, and simple ways to soothe the skin.",
    short: "Doctors think the itching in PBC is caused by bile acids in the bloodstream. Colestyramine is usually the first medicine, and it needs to be taken apart from other medicines. If it does not help, there are others, and moisturising, loose clothing and cool showers can help too.",
    sections: [
      {
        heading: "Why PBC itches",
        paragraphs: [
          "Doctors think the itching in PBC is caused by bile acids circulating in your bloodstream. Around 4 out of 5 people with PBC suffer from itching at some point. It isn't related to how bad your PBC is.",
          "As well as being frustrating in itself, itching can affect your sleep, increasing fatigue and making it harder to cope. So do talk to your doctor as soon as itching becomes a problem for you.",
        ],
      },
      {
        heading: "Colestyramine",
        paragraphs: [
          "Colestyramine is a medicine widely used to treat the itchiness of PBC. It helps to get rid of the bile acids that are causing the itching. It usually comes in sachets as a powder to dissolve in water or fruit juice, and fruit juice helps because it can taste unpleasant.",
          "You may need to take it for a few days before your symptoms begin to improve. Take UDCA at least 1 hour before colestyramine, or 4 to 6 hours afterwards. Liver UK says to take colestyramine at least 4 hours before or after any other medicines, as it can stop them being absorbed properly.",
          "Constipation is a common side effect, though it usually improves once your body gets used to the medicine. Taken long term, it may affect how well you absorb vitamins A, D and K and folic acid, so a GP can advise you about vitamin supplements.",
        ],
      },
      {
        heading: "If colestyramine does not help",
        paragraphs: [
          "See a GP if your itchiness does not improve after taking colestyramine. Other medicines include an antibiotic called rifampicin and a medicine called naltrexone. These are usually only prescribed by the specialist who looks after your PBC.",
          "Liver UK also lists colesevalam, which comes as a tablet, sertraline and bezafibrate. If itching is still a problem despite treatment, your doctor may suggest other medicines, such as gabapentin. When itching severely affects quality of life, doctors may consider a liver transplant.",
        ],
      },
      {
        heading: "Newer medicines",
        paragraphs: [
          "On 1 May 2026, the medicines regulator approved linerixibat for itch in adults with PBC. It helps to reduce the build-up of substances, including bile acids, in the body. It is a tablet taken twice a day.",
          "The PBC Foundation says the next stage is a review by NICE, which looks at whether a treatment should be routinely available on the NHS. NICE also says seladelpar, a second-line PBC medicine, reduces itch compared with a placebo.",
        ],
      },
      {
        heading: "Soothing the skin",
        paragraphs: [
          "Dry skin tends to be itchy, so regularly using moisturisers to stop your skin becoming dry may help. Some people find creams containing menthol soothing for short-term relief.",
          "It can also help to wear loose-fitting clothing, and to avoid anything that could be scratchy or irritating, such as wool. Taking cool showers may help too.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor as soon as itching becomes a problem, and ask to try something else if the first medicine doesn't help.",
      "Mix colestyramine with fruit juice if you find the taste difficult.",
      "Take UDCA at least 1 hour before colestyramine, or 4 to 6 hours afterwards.",
      "Use moisturisers regularly to stop your skin becoming dry.",
      "Wear loose-fitting clothing, and avoid scratchy fabrics such as wool.",
      "Try cool showers.",
    ],
    tryThisWeek: [
      "Moisturise your skin every day.",
      "Swap wool for loose, soft clothes.",
      "Try a cool shower.",
    ],
    ask: "My itching is still bad on treatment: what could I try next?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments with itching",
      scenarios: [
        {
          id: "timing",
          situation: "You take UDCA and colestyramine, and both are due in the morning.",
          options: [{ text: "Take UDCA at least 1 hour before colestyramine", best: true }, { text: "Take them together to save time" }],
          why: "Avoid taking them at the same time, because colestyramine affects how your body absorbs UDCA.",
        },
        {
          id: "taste",
          situation: "You find the colestyramine powder hard to take.",
          options: [{ text: "Mix it with fruit juice instead of water", best: true }, { text: "Stop taking it" }],
          why: "It can taste bitter. If you're finding it difficult to take, you can mix it with fruit juice instead of water.",
        },
        {
          id: "no-better",
          situation: "Your itching has not improved on colestyramine.",
          options: [{ text: "See a GP or your specialist", best: true }, { text: "Put up with it" }],
          why: "See a GP if your itchiness does not improve after taking colestyramine. Other medicines are available.",
        },
        {
          id: "jumper",
          situation: "Choosing clothes on an itchy day.",
          options: [{ text: "Loose, soft clothing", best: true }, { text: "A wool jumper" }],
          why: "It can help to wear loose fitting clothing. Avoid anything that could be scratchy or irritating such as wool.",
        },
      ],
    },
    sources: [LU_LIVING, NHS_TREATMENT, LU_TREATMENT, MHRA_LINERIXIBAT, PBCF_LINERIXIBAT, NICE_SELADELPAR, LU_SYMPTOMS],
    quiz: {
      question: "How long before colestyramine should UDCA be taken?",
      options: [{ text: "At least 1 hour before", right: true }, { text: "At exactly the same time" }, { text: "It does not matter" }],
      why: "Take UDCA at least 1 hour before colestyramine, or 4 to 6 hours afterwards.",
    },
  },
  {
    id: "pbc-fatigue",
    kicker: "Living well",
    question: "How can I manage the tiredness of PBC?",
    hook: "No tablet fixes it yet. Checking other causes, pacing the day and gentle exercise are what the sources say help.",
    short: "No medicines are currently available to specifically treat the fatigue of PBC. A GP may check for other causes, such as anaemia or an underactive thyroid. Pacing yourself, doing important tasks earlier in the day, good sleep habits and regular, gentle exercise can all help.",
    sections: [
      {
        heading: "More than tiredness",
        paragraphs: [
          "More than half of all those with PBC have fatigue, and 1 in 5 people have it severely. Fatigue caused by a disease isn't just feeling a bit tired. You can't fight your way through it. It's more a case of learning how to manage it.",
          "No medicines are currently available to specifically treat fatigue associated with PBC. Ursodeoxycholic acid helps the liver, but it does not improve fatigue.",
        ],
      },
      {
        heading: "Checking for other causes",
        paragraphs: [
          "A GP may want to rule out and treat other possible causes for your tiredness, such as iron deficiency anaemia, sleep apnoea or depression. Liver UK adds an underactive thyroid and type 2 diabetes. If you have any of these, treating them will help.",
          "Around 1 in 4 people with PBC have autoimmune thyroid disease, and low thyroid hormone levels can make fatigue worse. If you are finding fatigue hard to manage, speak to your specialist nurse or consultant.",
        ],
      },
      {
        heading: "Pacing your day",
        paragraphs: [
          "Fatigue is often worse later in the day, so adjusting your daily routine around it can make a big difference. If you can, it may help to do your most important tasks earlier.",
          "It may help to keep a diary of how you're feeling. A pattern may emerge, showing the times of day you're at your best, or activities that make your fatigue better or worse. If you feel wiped out, you need to rest. Don't try to push through it.",
        ],
      },
      {
        heading: "Sleep",
        paragraphs: [
          "Try to make your bedroom as peaceful, dark and quiet as possible, and go to bed and get up at a regular time. Avoid caffeine, nicotine and alcohol later in the evening.",
          "Get some exercise daily, but not within 2 hours of going to bed. Naps help some people, but others find a daytime nap makes it harder to sleep at night.",
        ],
      },
      {
        heading: "Moving and asking for help",
        paragraphs: [
          "There is research evidence that exercise can help with fatigue related to PBC. It may seem counterintuitive, but exercise does improve fatigue over time. Don't overdo it, and speak to your doctor or specialist nurse before starting a new exercise regime.",
          "Explain to your family and friends how your fatigue affects you, and let them support you. Loved ones are often keen to help and just don't know how.",
        ],
      },
    ],
    helps: [
      "Ask your GP to check for other causes of tiredness, such as anaemia or thyroid problems.",
      "Do your most important tasks earlier in the day, if you can.",
      "Keep a diary of how you feel at different times and after different activities.",
      "Go to bed and get up at a regular time, and avoid caffeine, nicotine and alcohol later in the evening.",
      "Exercise whenever possible, but pace yourself, and speak to your doctor or nurse before starting a new regime.",
      "Explain to family and friends how fatigue affects you, and accept their help.",
    ],
    tryThisWeek: [
      "Move one key task to the morning.",
      "Keep a fatigue diary.",
      "Try a short daily walk.",
    ],
    ask: "Could anything else, such as my thyroid, my blood count or my medicines, be adding to my tiredness?",
    interactive: {
      kind: "timeline",
      title: "A day planned around fatigue",
      steps: [
        { id: "morning", when: "Morning", title: "Do what matters first", points: ["Fatigue is often worse later in the day", "Do your most important tasks earlier", "Get up at about the same time each day"] },
        { id: "afternoon", when: "Afternoon", title: "Rest when you need to", points: ["If you feel wiped out, rest", "Naps help some people but not others", "Try a short, gentle walk"] },
        { id: "evening", when: "Evening", title: "Wind down", points: ["Avoid caffeine, nicotine and alcohol later on", "No exercise within 2 hours of bed", "Dim the lights before bed"] },
        { id: "night", when: "Night", title: "A regular bedtime", points: ["A peaceful, dark and quiet bedroom", "Go to bed at about the same time", "Tell your doctor if itching keeps you awake"] },
      ],
    },
    sources: [LU_LIVING, NHS_TREATMENT, LU_TREATMENT, LU_COMPLICATIONS, PBCF_TREATMENTS, LU_FATIGUE, LU_JUST],
    quiz: {
      question: "When is the fatigue of PBC often worse?",
      options: [{ text: "Later in the day", right: true }, { text: "First thing in the morning" }, { text: "Only after meals" }],
      why: "Fatigue is often worse later in the day, so adjusting your daily routine around it can make a big difference.",
    },
  },
  {
    id: "pbc-bones",
    kicker: "Living well",
    question: "Why does PBC affect bones, and what helps?",
    hook: "Liver disease raises the chance of thinner bones. A simple scan finds it early, and treatment and daily habits protect them.",
    short: "People with PBC have a higher than average risk of bone thinning (osteoporosis); as many as 1 in 2 have some degree of it. A bone density (DEXA) scan is arranged when PBC is diagnosed. Treatment can include calcium and vitamin D and a bisphosphonate, alongside exercise and not smoking.",
    sections: [
      {
        heading: "Why bones are at risk",
        paragraphs: [
          "People with liver disease are at more than average risk of bone thinning, or osteoporosis. This is because the liver is so heavily involved in the body's metabolism. As many as 1 in 2 people with PBC have some degree of bone thinning.",
          "Women are more at risk of osteoporosis than men, particularly after the menopause. Heavy drinking and smoking can also lower your bone density.",
        ],
      },
      {
        heading: "The bone density scan",
        paragraphs: [
          "When you are diagnosed with PBC, your doctor will arrange a bone density scan, sometimes called a DEXA scan. It uses low-dose X-rays to measure the density of your bones. It's painless, and you can go home straight afterwards.",
          "You can eat, drink and take your medicines as normal before the scan. Avoid clothes with metal on them, such as zips, hooks or buckles. The scan usually takes about 10 to 20 minutes.",
        ],
      },
      {
        heading: "Understanding the result",
        paragraphs: [
          "Your results are compared with those of a young, healthy adult, and the difference is called a T score. Your specialist may say your bone density is normal, slightly lowered (osteopenia), or more significantly lowered (osteoporosis).",
          "Osteoporosis means more severe bone thinning that increases your risk of fracture. Depending on your result, you will have DEXA scans every 1 to 5 years.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "If your bones are thinner than they should be, your doctor may suggest a medicine called a bisphosphonate, which helps to strengthen your bones. They may also suggest daily calcium and vitamin D tablets.",
          "Not everyone with a liver condition can have bone medicine, so it is important to work with your medical team to find the best options. Talk to your liver medical team before you try any supplements.",
        ],
      },
      {
        heading: "Keeping bones strong",
        paragraphs: [
          "Taking regular exercise and getting enough calcium and vitamin D can help your bones. Giving up smoking and reducing alcohol help too.",
          "If you have osteoporosis, you can reduce your chances of a fall by removing hazards from your home and having regular sight tests and hearing tests.",
        ],
      },
    ],
    helps: [
      "Have the bone density scan your doctor arranges, and ask when your next one is due.",
      "Ask what your T score is and what you can do to help your bones.",
      "Take regular exercise to keep your bones as strong as possible.",
      "Eat foods rich in calcium and vitamin D, and talk to your liver team before taking supplements.",
      "If you smoke, stop, and keep alcohol low.",
      "Remove trip hazards at home and have regular sight and hearing tests.",
    ],
    tryThisWeek: [
      "Ask when your next DEXA scan is.",
      "Add some regular exercise.",
      "Clear one trip hazard at home.",
    ],
    ask: "What did my bone density scan show, and do I need calcium, vitamin D or other bone treatment?",
    interactive: {
      kind: "risk-check",
      title: "What affects your bones?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "liver", label: "Having PBC", note: "Liver disease increases your risk of bone thinning, so your bones are checked with DEXA scans.", changeable: false },
        { id: "menopause", label: "Being a woman after the menopause", note: "Women are more at risk of osteoporosis than men, particularly after the menopause.", changeable: false },
        { id: "family", label: "A parent who broke a hip", note: "A family history of osteoporosis, particularly a hip fracture in a parent, raises the risk.", changeable: false },
        { id: "smoking", label: "Smoking", note: "Smoking can lower your bone density. Giving up helps keep bones healthy.", changeable: true },
        { id: "alcohol", label: "Heavy drinking", note: "Heavy drinking can affect bone density. Reducing alcohol helps.", changeable: true },
        { id: "exercise", label: "Not exercising regularly", note: "Regular exercise helps keep your bones as strong as possible.", changeable: true },
      ],
    },
    sources: [LU_ONGOING, LU_COMPLICATIONS, LU_LIVING, LU_DEXA, NHS_OSTEOPOROSIS, NHS_PBC],
    quiz: {
      question: "Which scan checks the strength of your bones?",
      options: [{ text: "A bone density (DEXA) scan", right: true }, { text: "A FibroScan" }, { text: "An MRCP" }],
      why: "When you are diagnosed with PBC, your doctor will arrange a bone density scan, sometimes called a DEXA scan.",
    },
  },
  {
    id: "pbc-checks",
    kicker: "Living well",
    question: "What regular checks will I have with PBC?",
    hook: "A test is not a warning sign. Regular checks watch the liver and catch linked conditions early.",
    short: "Once PBC is diagnosed, you will have regular tests for life: liver blood tests, a liver stiffness test, bone density scans and blood tests for conditions linked with PBC, such as thyroid disease. Being asked to have a test does not mean your condition has got worse.",
    sections: [
      {
        heading: "Checks for life",
        paragraphs: [
          "Once you have been diagnosed, your doctor will want to see how far PBC has developed, and look for conditions that are linked with it. You will continue to have these tests from time to time, to monitor your health.",
          "Many people feel anxious about tests at first. Remember that PBC generally develops slowly, and your doctor is just keeping an eye on you. Being asked to have a test doesn't mean your condition has got worse.",
        ],
      },
      {
        heading: "The liver itself",
        paragraphs: [
          "Your doctor will measure your ALP levels to see how well treatment is working. The PBC Foundation encourages people to know their ALP numbers and what they mean.",
          "A FibroScan measures scarring in your liver, and your doctor is likely to suggest one at least every 3 years. Some doctors also use a blood test called the ELF test, which is particularly useful for monitoring how PBC is developing.",
        ],
      },
      {
        heading: "Linked conditions",
        paragraphs: [
          "People with PBC can sometimes develop other autoimmune diseases, such as thyroid disease and diabetes. So your doctor will carry out blood tests every 6 months to a year, including thyroid hormones, blood glucose, cholesterol and a coeliac disease test.",
          "Around 1 in 4 people with PBC have autoimmune thyroid disease, and around 1 in 4 develop Raynaud's. Up to 1 in 8 develop coeliac disease. The PBC Foundation says up to 50% of people with PBC are believed to have at least one other autoimmune condition.",
          "People with PBC often have high cholesterol, but it tends to be the good cholesterol that is high. So it doesn't necessarily mean a higher risk of heart disease.",
        ],
      },
      {
        heading: "If PBC is advanced",
        paragraphs: [
          "If you have cirrhosis, you may have an abdominal ultrasound scan every 6 months, to check for a type of liver cancer. Cancer found early can be cured, so it's important to have these tests if you're at risk.",
          "You may also have more frequent liver blood tests, a blood test for fat-soluble vitamins, and an endoscopy to check for enlarged veins in your food pipe.",
        ],
      },
      {
        heading: "Vaccines and your team",
        paragraphs: [
          "People with chronic liver disease, including PBC, are advised to have some vaccines, including the yearly flu vaccine. Check with your GP that your vaccines are all up to date.",
          "If you are treated at a specialist liver centre, there is likely to be a clinical nurse specialist. You should have a phone number and email address to use between appointments. Always take a list of all your medicines to appointments.",
        ],
      },
    ],
    helps: [
      "Go to every check, and remember a test does not mean your condition has got worse.",
      "Know your ALP numbers, and ask what they mean for you.",
      "Check with your GP that your vaccines, including the yearly flu vaccine, are up to date.",
      "Take a list of all your medicines to every appointment, and say if anything has changed.",
      "Ask for your specialist nurse's contact details if you have not been given them.",
      "If you have cirrhosis, have the 6-monthly scans you are offered.",
    ],
    tryThisWeek: [
      "Write down your last ALP result.",
      "Check your flu jab is booked.",
      "Make an up-to-date medicines list.",
    ],
    ask: "Which checks am I due for this year, and how often should I have each one?",
    interactive: {
      kind: "timeline",
      title: "Your checks over time",
      steps: [
        { id: "diagnosis", when: "At diagnosis", title: "A starting picture", points: ["Liver blood tests and an ultrasound", "A bone density scan", "Blood tests for linked conditions"] },
        { id: "six-months", when: "Every 6 months to a year", title: "Blood tests", points: ["Thyroid hormones and blood glucose", "Cholesterol", "A coeliac disease test"] },
        { id: "yearly", when: "Every year", title: "The flu vaccine", points: ["Advised for people with chronic liver disease", "Check your other vaccines with your GP"] },
        { id: "three-years", when: "At least every 3 years", title: "FibroScan", points: ["Measures scarring in your liver", "Shows how quickly or slowly PBC is developing"] },
        { id: "dexa", when: "Every 1 to 5 years", title: "Bone density scan", points: ["How often depends on your last result"] },
      ],
    },
    sources: [LU_ONGOING, PBCF_ABOUT, LU_TREATMENT, LU_COMPLICATIONS, PBCF_TREATMENTS, LU_LIVING, LU_JUST, LU_ADVANCED, PBCF_MY_PBC],
    quiz: {
      question: "If you are asked to have another test, does it mean your PBC has got worse?",
      options: [{ text: "No, your doctor is just keeping an eye on you", right: true }, { text: "Yes, always" }, { text: "Yes, if it is a blood test" }],
      why: "Your doctor is just keeping an eye on you. Being asked to have a test doesn't mean your condition has got worse.",
    },
  },
  {
    id: "pbc-work",
    kicker: "Living well",
    question: "How does PBC fit with work and daily life?",
    hook: "The law counts PBC as a long-term condition. Small changes to hours and breaks can make a working day manageable.",
    short: "As PBC is a long-term condition, you are covered by the Equality Act 2010, so your employer has to make reasonable adjustments, such as flexible hours and time off for check-ups. You do not have to tell your employer, but it may help. Access to Work can help with some practical costs.",
    sections: [
      {
        heading: "Telling your employer",
        paragraphs: [
          "You don't have to tell your employer about your diagnosis if you don't want to. But it may be helpful if they know. Even if you tell your employer, you do not have to tell everyone you work with.",
          "The general rule is that you should tell your employer if your condition could cause a safety risk for you, or anyone you work with.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "As PBC is a long-term condition, you are covered by the Equality Act 2010. This means your employer has to make reasonable adjustments so you are able to do your job, such as flexible working hours and time off for tests and check-ups.",
          "Your employer must pay for any changes themselves. ACAS can give free advice on your rights at work, and Citizens Advice has more information.",
        ],
      },
      {
        heading: "Adjustments for fatigue",
        paragraphs: [
          "You may need to ask to adjust your hours if you are struggling with fatigue. If you have a desk-based job, you could ask to work from home some of the time, so you do not have to commute.",
          "If fatigue is worse at particular times of day, you could ask to change your work pattern to allow for this. You could also ask for more, shorter breaks instead of a long lunch break.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. It could give you a grant to help pay for things like specialist equipment, or the costs of travelling to work if you cannot use public transport.",
          "An Access to Work grant will not affect any other benefits you get, and you will not have to pay it back. It will not pay for reasonable adjustments, which are the changes your employer must legally make.",
        ],
      },
      {
        heading: "Time off and daily life",
        paragraphs: [
          "You need a fit note if you are off sick for more than 7 days in a row. If you are an employee, you can usually get Statutory Sick Pay for up to 28 weeks, though many company schemes are more generous.",
          "It's really important to make time to see people and take part in activities you enjoyed before you were diagnosed. If you'd like to start a family, it's perfectly possible to become pregnant and have a baby with PBC, but speak to your doctor before trying.",
        ],
      },
    ],
    helps: [
      "Decide who to tell at work; you do not have to tell everyone.",
      "Ask your employer about reasonable adjustments, such as flexible hours and time off for check-ups.",
      "If fatigue is worse at certain times, ask to change your work pattern or to have more, shorter breaks.",
      "Check whether an Access to Work grant could help with equipment or travel costs.",
      "Get free advice on your rights from ACAS or Citizens Advice.",
      "Make time to see people and do the things you enjoy.",
    ],
    tryThisWeek: [
      "List adjustments that would help.",
      "Check Access to Work eligibility.",
      "Plan one thing you enjoy.",
    ],
    ask: "Could you write down how PBC and its tiredness affect me, to help me ask for changes at work?",
    interactive: {
      kind: "scenarios",
      title: "Moments at work",
      scenarios: [
        {
          id: "afternoons",
          situation: "Your fatigue is worst in the afternoons at work.",
          options: [{ text: "Ask to change your work pattern", best: true }, { text: "Push through and say nothing" }],
          why: "If you suffer from fatigue more at particular times of the day, you could ask to alter your work pattern to allow for this.",
        },
        {
          id: "check-ups",
          situation: "You need time off for blood tests and check-ups.",
          options: [{ text: "Ask for it as a reasonable adjustment", best: true }, { text: "Skip the check-ups" }],
          why: "Your employer has to make reasonable adjustments, for example flexible working hours and time off for tests and check-ups.",
        },
        {
          id: "travel",
          situation: "You cannot use public transport to get to work.",
          options: [{ text: "Look into an Access to Work grant", best: true }, { text: "Pay all the costs yourself" }],
          why: "Access to Work could give you a grant to help pay for the costs of travelling to work, if you cannot use public transport.",
        },
        {
          id: "sick",
          situation: "You have been off sick for more than 7 days in a row.",
          options: [{ text: "Get a fit note", best: true }, { text: "Do nothing" }],
          why: "You need a fit note if you are off for more than 7 days in a row, including weekends and non-working days.",
        },
      ],
    },
    sources: [LU_JUST, LU_WORK, LU_LIVING, GOV_ACCESS_TO_WORK],
    quiz: {
      question: "Why does your employer have to make reasonable adjustments for PBC?",
      options: [{ text: "PBC is a long-term condition covered by the Equality Act 2010", right: true }, { text: "Only if your manager agrees" }, { text: "They do not have to" }],
      why: "As PBC is a long term condition, you are covered by the Equality Act 2010. This means your employer has to make reasonable adjustments.",
    },
  },
  {
    id: "pbc-support",
    kicker: "Living well",
    question: "Where can I find support, and others with PBC?",
    hook: "PBC is rare, but you are not alone. Nurses, charities and other people with PBC are a phone call or a click away.",
    short: "A diagnosis of PBC can be a big shock, and most people have never heard of it. Your specialist nurse, Liver UK's nurse-led helpline and support groups, and the PBC Foundation's community cafés and online meetings can all help. If you feel low for a couple of weeks, talk to your doctor or nurse.",
    sections: [
      {
        heading: "A condition few have heard of",
        paragraphs: [
          "Being diagnosed with PBC can be a big shock. Most people have never heard of it, so you are likely to have lots of questions and may feel overwhelmed. There is no right or wrong way to react.",
          "You will probably find you have to keep explaining it. Sometimes people assume liver disease must be related to alcohol. This is absolutely not the case with PBC.",
        ],
      },
      {
        heading: "Telling people",
        paragraphs: [
          "It's up to you who you tell about your condition. But it can be a relief to tell someone else. Having someone to talk to can stop you feeling alone, and they can help with emotional and practical things.",
          "Family and friends can help by learning about PBC and how it's likely to affect you.",
        ],
      },
      {
        heading: "Charities that can help",
        paragraphs: [
          "Liver UK has a free nurse-led helpline on 0800 652 7330, open 9am to 4pm, Monday to Friday, excluding bank holidays. Calls are always answered by a specialist nurse. It is not an emergency number and cannot give medical advice.",
          "Liver UK runs support groups, online and face to face, including a group for people with genetic and autoimmune liver conditions, and an online community. The PBC Foundation offers support and information, regular online meetings and community cafés.",
        ],
      },
      {
        heading: "Your care team",
        paragraphs: [
          "When you are referred to a liver specialist, you may have the help of a specialist liver nurse. They can help with managing your condition, and with smoothing communication between your hospitals and your GP.",
          "If you haven't been given the contact details of a specialist nurse, do ask. You should also have the phone number of your specialist liver unit, so you can call them if you need medical advice.",
        ],
      },
      {
        heading: "Looking after your mental health",
        paragraphs: [
          "Being diagnosed with a long-term condition is almost bound to affect you mentally as well as physically. You may have good days and bad days. Generally, it becomes easier to cope in time.",
          "If you feel very anxious or have been feeling low for a couple of weeks, you may be depressed. Talk to your doctor or specialist nurse. The PBC Foundation also points to Mind, and to Samaritans, a listening service available 24 hours a day. For an urgent medical concern, contact NHS 111, and in an emergency, dial 999.",
        ],
      },
    ],
    helps: [
      "Think about who you trust, and tell someone you can talk to.",
      "Call Liver UK's nurse-led helpline on 0800 652 7330, 9am to 4pm, Monday to Friday.",
      "Join a support group or online community to talk to others with PBC.",
      "Ask for your specialist nurse's contact details, and the phone number of your liver unit.",
      "If you have been feeling low for a couple of weeks, talk to your doctor or specialist nurse.",
    ],
    tryThisWeek: [
      "Tell one person you trust.",
      "Save the Liver UK helpline number.",
      "Look up a PBC support group.",
    ],
    ask: "Who should I contact between appointments, and is there a specialist nurse I can call?",
    interactive: {
      kind: "scenarios",
      title: "Who can help?",
      scenarios: [
        {
          id: "alcohol",
          situation: "Someone suggests your PBC must be down to drinking.",
          options: [{ text: "Explain PBC is not caused by alcohol", best: true }, { text: "Feel you have to stay quiet" }],
          why: "Sometimes people assume that liver disease must be related to alcohol. This is absolutely not the case with PBC.",
        },
        {
          id: "low",
          situation: "You have been feeling low for a couple of weeks.",
          options: [{ text: "Talk to your doctor or specialist nurse", best: true }, { text: "Keep it to yourself" }],
          why: "If you think you might be depressed, talk to your doctor or specialist nurse. They will be able to help and support you.",
        },
        {
          id: "question",
          situation: "You have a question between appointments.",
          options: [{ text: "Call your specialist nurse or liver unit", best: true }, { text: "Wait until next year" }],
          why: "You should have a phone number and email address you can use between appointments if you need to.",
        },
        {
          id: "urgent",
          situation: "You have an urgent medical concern.",
          options: [{ text: "Contact NHS 111, or dial 999 in an emergency", best: true }, { text: "Call the charity helpline" }],
          why: "The helpline is not an emergency number. For an urgent medical concern, contact NHS 111. In a medical emergency, dial 999.",
        },
      ],
    },
    sources: [LU_JUST, LU_HELPLINE, LU_SUPPORT_GROUPS, PBCF_WHAT_WE_DO, LU_LIVING, PBCF_PRACTICAL, PBCF_SELF_CARE],
    quiz: {
      question: "What should you do if you have been feeling low for a couple of weeks?",
      options: [{ text: "Talk to your doctor or specialist nurse", right: true }, { text: "Wait for it to pass on its own" }, { text: "Stop your PBC medicine" }],
      why: "If you feel very anxious or have been feeling low for a couple of weeks, you may be depressed. Talk to your doctor or specialist nurse.",
    },
  },
];
