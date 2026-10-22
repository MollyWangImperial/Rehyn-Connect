import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Autoimmune hepatitis page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. The NHS website has no page of its own for
// autoimmune hepatitis (its Hepatitis page covers it briefly and links to Liver UK), so most of the condition
// detail comes from Liver UK (the new name for the British Liver Trust; britishlivertrust.org.uk now redirects
// to liveruk.org), with the NHS for prednisolone, azathioprine, vaccines, bones and urgent help. General
// information only; it never replaces what a person's own GP or liver team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const liverUk = (label: string, path: string): LearnSource => ({ label: `Liver UK: ${label}`, url: `https://liveruk.org/${path}` });

const NHS_HEPATITIS = nhs("Hepatitis", "conditions/hepatitis/");
const NHS_JAUNDICE = nhs("Jaundice", "conditions/jaundice/");
const NHS_CIRRHOSIS = nhs("Cirrhosis", "conditions/cirrhosis/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const PRED = "medicines/prednisolone";
const NHS_PRED_ABOUT = nhs("About prednisolone tablets and liquid", `${PRED}/about-prednisolone-tablets-and-liquid/`);
const NHS_PRED_HOW = nhs("How and when to take prednisolone tablets and liquid", `${PRED}/how-and-when-to-take-prednisolone-tablets-and-liquid/`);
const NHS_PRED_SE = nhs("Side effects of prednisolone tablets and liquid", `${PRED}/side-effects-of-prednisolone-tablets-and-liquid/`);
const NHS_PRED_PREG = nhs("Pregnancy, breastfeeding and fertility while taking prednisolone", `${PRED}/pregnancy-breastfeeding-and-fertility-while-taking-prednisolone-tablets-and-liquid/`);
const NHS_PRED_Q = nhs("Common questions about prednisolone tablets and liquid", `${PRED}/common-questions-about-prednisolone-tablets-and-liquid/`);
const NHS_PRED_OTHER = nhs("Taking prednisolone with other medicines and herbal supplements", `${PRED}/taking-prednisolone-with-other-medicines-and-herbal-supplements/`);
const NHS_AZA = nhs("Azathioprine", "medicines/azathioprine/");
const NHS_FLU = nhs("Flu vaccine", "vaccinations/flu-vaccine/");
const NHS_PNEUMO = nhs("Pneumococcal vaccine", "vaccinations/pneumococcal-vaccine/");
const NHS_SHINGLES = nhs("Shingles vaccine", "vaccinations/shingles-vaccine/");
const NHS_DEXA = nhs("Bone density scan (DEXA scan)", "tests-and-treatments/dexa-scan/");
const NHS_OSTEO_CAUSES = nhs("Osteoporosis: causes", "conditions/osteoporosis/causes/");
const NHS_OSTEO_PREV = nhs("Osteoporosis: prevention", "conditions/osteoporosis/prevention/");

const AIH = "about-liver-disease/conditions/aih";
const LU_AIH = liverUk("Autoimmune hepatitis (AIH) in adults", `${AIH}/`);
const LU_CAUSES = liverUk("What causes autoimmune hepatitis?", `${AIH}/aih-causes/`);
const LU_SYMPTOMS = liverUk("Symptoms of autoimmune hepatitis", `${AIH}/aih-symptoms/`);
const LU_TESTS = liverUk("Tests and diagnosis for autoimmune hepatitis", `${AIH}/aih-tests/`);
const LU_TREATMENT = liverUk("Treatment for autoimmune hepatitis", `${AIH}/aih-treatment/`);
const LU_LIVING = liverUk("Living with autoimmune hepatitis", `${AIH}/living-with-aih/`);
const LU_AUTOIMMUNE = liverUk("What is autoimmune disease?", "about-liver-disease/conditions/what-is-autoimmune-disease/");
const LU_IMMUNE_TESTS = liverUk("Immune and autoimmune blood tests", "about-liver-disease/tests/immune-and-autoimmune-blood-tests/");
const LU_BIOPSY = liverUk("Liver biopsy", "about-liver-disease/tests/liver-biopsy/");
const LU_DEXA = liverUk("DEXA scans (bone density scan)", "about-liver-disease/tests/dexa-scans-bone-density-scan/");
const LU_OSTEO = liverUk("Osteoporosis (bone thinning)", "about-liver-disease/conditions/cirrhosis/osteoporosis/");
const LU_VACCINES = liverUk("Liver disease and vaccines", "about-liver-disease/living-with-a-liver-condition/medical-care/vaccines/");
const LU_GRAPEFRUIT = liverUk("Grapefruit, liquorice and your medicines", "about-liver-disease/living-with-a-liver-condition/eating-drinking-keeping-active/grapefruit-liquorice-and-your-medicines/");
const LU_HELPLINE = liverUk("Nurse-led helpline", "how-we-can-help/nurse-led-helpline/");

export const aihAnswers: LearnArticle[] = [
  {
    id: "aih-what-it-is",
    kicker: "Understanding",
    question: "What is autoimmune hepatitis?",
    hook: "The body's own defences turn on the liver. It cannot be caught, and very effective medicines calm it down.",
    short: "Autoimmune hepatitis is a life-long and rare liver disease, where the immune system damages healthy liver cells and causes inflammation. You cannot catch it and it is not related to drinking alcohol. Very effective medicines suppress the immune system and reduce the inflammation.",
    sections: [
      {
        heading: "The immune system and the liver",
        paragraphs: [
          "Autoimmune hepatitis (AIH) is a life-long and rare liver disease. It is when your body's immune system causes damage to its own healthy liver cells. This leads to inflammation in the liver.",
          "Hepatitis is the medical term for inflammation of the liver. There are lots of causes, usually a virus or drinking too much alcohol over a long period of time. Autoimmune hepatitis is caused by your immune system attacking your own body.",
        ],
      },
      {
        heading: "What goes wrong",
        paragraphs: [
          "The immune system protects you from infections. All the cells in your body carry markers called antigens, and your immune system uses them to check if something should be in your body or not, like checking an entry ticket.",
          "When you have autoimmune hepatitis, your B cells produce antibodies that stick to your own cells. These are called autoantibodies. This makes your T cells attack your own healthy liver cells, which damages your liver and causes inflammation.",
          "You will usually have more of an antibody called immunoglobulin G (IgG) in your body. You will be tested for this when you are being diagnosed, and to monitor how your body is responding to treatment.",
        ],
      },
      {
        heading: "Not catching, not drinking",
        paragraphs: [
          "Some people think autoimmune hepatitis is the same as other types of hepatitis, such as alcohol-related hepatitis or viral hepatitis. However, you cannot catch autoimmune hepatitis and it is not related to drinking alcohol.",
          "You cannot catch or spread it. Liver UK has help and advice about dealing with stigma.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "The causes of autoimmune hepatitis are not always clear. They are thought to be a combination of autoimmunity, genetics and external triggers, such as getting a virus or taking certain medicines.",
          "It is not known whether anything can be done to prevent it. Developing one autoimmune condition could mean someone is more at risk of getting others.",
        ],
      },
      {
        heading: "Why treatment matters",
        paragraphs: [
          "Treatment for autoimmune hepatitis involves very effective medicines that suppress the immune system and reduce inflammation. It also reduces the likelihood of your condition getting worse.",
          "If left untreated, it can lead to serious scarring of the liver (cirrhosis), which can then lead to liver cancer or liver failure. About 1 in 3 people with autoimmune hepatitis will have cirrhosis when they're diagnosed. The NHS lists autoimmune liver conditions among the things that make cirrhosis more likely.",
        ],
      },
    ],
    helps: [
      "Talk to your specialist medical team for personal advice: everyone's experience of liver disease will be different.",
      "Ask your liver specialist whether you have an overlap syndrome, and what it means for you.",
      "Keep up with treatment, which reduces inflammation and the likelihood of your condition getting worse.",
      "Call the Liver UK nurse-led helpline on 0800 652 7330, 9am to 4pm, Monday to Friday, whether you have questions or just need someone to listen.",
    ],
    tryThisWeek: [
      "Ask your team for personal advice.",
      "Ask about overlap syndromes.",
      "Call the Liver UK helpline.",
    ],
    ask: "How active is my autoimmune hepatitis, and is there any scarring in my liver?",
    interactive: {
      kind: "flip-cards",
      title: "The immune system, card by card",
      intro: "Turn each card to see the part each one plays.",
      cards: [
        { id: "antigen", front: "Antigens", when: "On every cell", back: "Markers the immune system checks to see if something should be in your body, like an entry ticket." },
        { id: "antibody", front: "Antibodies", when: "Made by B cells", back: "They lock on to antigens that should not be there, like putting up a flag for T cells." },
        { id: "autoantibody", front: "Autoantibodies", when: "In autoimmune hepatitis", back: "Antibodies that stick to your own cells, so T cells attack healthy liver cells." },
        { id: "t-cells", front: "T cells", when: "The defenders", back: "White blood cells that kill the cells antibodies have flagged. In AIH they damage the liver." },
        { id: "igg", front: "IgG", when: "Measured in blood tests", back: "The most common antibody. Usually higher in AIH, and used to check how treatment is working." },
      ],
    },
    sources: [LU_AIH, NHS_HEPATITIS, LU_CAUSES, LU_AUTOIMMUNE, NHS_CIRRHOSIS],
    quiz: {
      question: "Can you catch autoimmune hepatitis from someone else?",
      options: [{ text: "No, you cannot catch it", right: true }, { text: "Yes, through blood" }, { text: "Yes, by sharing food" }],
      why: "You cannot catch autoimmune hepatitis and it is not related to drinking alcohol.",
    },
  },
  {
    id: "aih-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of autoimmune hepatitis?",
    hook: "Some people feel nothing at all. Others feel exhausted for weeks, or turn yellow within days.",
    short: "Nearly a quarter of people with autoimmune hepatitis have no symptoms. For others, symptoms build slowly or come on quickly over a few days. Early signs include overwhelming tiredness, itching and yellowing of the skin and eyes, and some later signs need a doctor straight away.",
    sections: [
      {
        heading: "Sometimes no symptoms at all",
        paragraphs: [
          "Nearly a quarter of people with autoimmune hepatitis will have no symptoms. You might find out you have it during tests for other health problems.",
          "There are often no signs that you have autoimmune hepatitis, and symptoms can be vague.",
        ],
      },
      {
        heading: "Sudden or slow",
        paragraphs: [
          "For some people, symptoms can develop quickly over a few days. This is called acute hepatitis. Others might get symptoms after they have been diagnosed.",
        ],
      },
      {
        heading: "Early symptoms",
        paragraphs: [
          "Early symptoms can include an overwhelming sense of tiredness (fatigue), feeling generally unwell, itching, and yellowing of the skin and whites of the eyes (jaundice).",
          "Some people have an aching feeling or discomfort on the upper right side of the tummy, where the liver is. Others lose weight for no reason, have aching joints or muscle pain, little or no appetite, feel sick, or get a skin rash, flu-like symptoms or missed periods.",
          "Yellowing of the skin may be less noticeable if you have brown or black skin, but the white part of your eyes will look yellow.",
        ],
      },
      {
        heading: "If the liver struggles",
        paragraphs: [
          "If the liver struggles to work, more serious symptoms can develop. These include swelling in the legs, ankles and feet, or in the tummy, caused by a build-up of fluid.",
          "Other signs are periods of confusion, forgetting things, mood changes or poor judgement, and a tendency to bleed and bruise more easily, such as frequent nosebleeds and bleeding gums. If you have jaundice, your pee may be darker than usual.",
          "If you have any of these symptoms, tell a doctor straight away.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "The NHS says to ask for an urgent GP appointment or get help from NHS 111 if you think you have hepatitis, or if your skin or the white part of your eyes look yellow.",
          "Even if you have no symptoms, if you have another autoimmune condition and are worried, tell your doctor.",
        ],
      },
    ],
    helps: [
      "If you have any of the later symptoms, such as jaundice, swelling or confusion, tell a doctor straight away.",
      "Ask for an urgent GP appointment or get help from NHS 111 if your skin or the whites of your eyes look yellow.",
      "If you have another autoimmune condition and are worried, tell your doctor, even if you have no symptoms.",
      "Give your doctors as much information as you can, including other autoimmune diseases or health conditions you have.",
    ],
    tryThisWeek: [
      "Tell a doctor straight away about later signs.",
      "Get urgent help for yellow skin or eyes.",
      "Tell your doctor about other conditions.",
    ],
    ask: "Which symptoms mean I should contact you straight away?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your doctor about",
      intro: "Tick any you have noticed. Some need a doctor straight away.",
      signs: [
        "Overwhelming tiredness",
        "Itching",
        "Yellowing of the skin or whites of the eyes",
        "Discomfort on the upper right side of the tummy",
        "Losing weight for no reason",
        "Aching joints or muscle pain",
        "Swelling in the legs, ankles, feet or tummy",
        "Confusion, forgetting things or mood changes",
        "Bleeding or bruising more easily",
        "Darker pee than usual",
      ],
      after: "If you have yellowing of the skin or eyes, swelling from fluid, confusion, or bleeding and bruising more easily, tell a doctor straight away. For yellow skin or eyes, the NHS says to ask for an urgent GP appointment or get help from NHS 111.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [LU_SYMPTOMS, LU_AIH, NHS_HEPATITIS, NHS_JAUNDICE, LU_TESTS],
    quiz: {
      question: "How many people with autoimmune hepatitis have no symptoms?",
      options: [{ text: "Nearly a quarter", right: true }, { text: "Almost nobody" }, { text: "Everyone, at first" }],
      why: "Nearly a quarter of people with autoimmune hepatitis will have no symptoms.",
    },
  },
  {
    id: "aih-tests",
    kicker: "Tests",
    question: "How is autoimmune hepatitis diagnosed?",
    hook: "Blood tests raise the question. A small sample of liver, looked at under a microscope, usually answers it.",
    short: "A GP who suspects autoimmune hepatitis does blood tests and refers you to a liver specialist. Blood tests look for liver enzymes, autoantibodies and IgG, and scans show the liver in more detail. Most people also need a liver biopsy, a small sample of liver taken with a needle.",
    sections: [
      {
        heading: "From the GP to a liver specialist",
        paragraphs: [
          "If your GP suspects you have autoimmune hepatitis, they will do some blood tests and then refer you to a liver specialist. This will be a hepatologist, a doctor who specialises in liver disease, or a gastroenterologist, a doctor who specialises in the digestive system.",
          "They will try to find out what the problem is and how damaged your liver is. This includes a thorough medical history, a physical examination, special blood tests and scans, and most people also need a liver biopsy. An early diagnosis can often mean your treatment will be more effective.",
        ],
      },
      {
        heading: "Blood tests",
        paragraphs: [
          "If you have autoimmune hepatitis, you will have more of the liver enzymes ALT and AST in your blood. If your liver blood tests keep being abnormal, you will have further blood tests to look for autoantibodies.",
          "Autoantibody tests include anti-nuclear antibodies (ANA), smooth muscle antibodies (SMA) and anti-liver kidney microsomal type 1 antibodies (anti-LKM-1). You will also be tested for an antibody called immunoglobulin G (IgG), which is used to monitor how well treatment is working.",
          "One sample of blood is taken, usually from the arm, and it is fine to eat and drink normally before the test. Around 1 in 5 people with autoimmune hepatitis will not test positive for SMA, so many people also need a liver biopsy to get a definite diagnosis.",
        ],
      },
      {
        heading: "Scans",
        paragraphs: [
          "Scans can give doctors a more detailed picture. An ultrasound scan looks at the surface and general shape of your liver. A FibroScan measures the stiffness of your liver and helps your doctor judge how much scarring there might be. CT and MRI scans can look at your liver in more detail.",
        ],
      },
      {
        heading: "The liver biopsy",
        paragraphs: [
          "Blood tests and scans are not usually enough to make a diagnosis. A liver biopsy is a test where a small sample of your liver is taken using a needle, then looked at under a microscope. It can check for inflammation and scarring, to find out how advanced your liver disease is.",
          "Having a biopsy can be uncomfortable, but it should not be painful. You will have a local anaesthetic where the needle goes in, the biopsy itself usually only takes around 10 minutes, and you will need to stay in hospital for at least a few hours afterwards.",
          "Your doctor should explain the risks and why they think a biopsy is a good idea, so you can decide for yourself whether to agree to one. It usually takes about two weeks for the results.",
        ],
      },
      {
        heading: "Before and after a biopsy",
        paragraphs: [
          "About a week before your biopsy you should have a blood test to check your blood is clotting normally. Tell your medical team about all the medicines you take, especially anything used to stop blood clots, and ask them before you stop or change any of your medicines.",
          "You will probably be told not to eat or drink anything except water for 6 hours before your biopsy. You will not be able to drive yourself home, so arrange for someone to take you home and to stay with you overnight.",
          "If the biopsy site starts to bleed or swell, put pressure on it for 10 minutes. If the bleeding or swelling has not stopped after 10 minutes, call 999 or go to A&E, and tell them you have had a biopsy.",
        ],
      },
    ],
    helps: [
      "Give your doctors as much information as you can, including other autoimmune diseases or health conditions you have.",
      "Tell your medical team about all the medicines you take, including over the counter or alternative medicines and supplements.",
      "Ask about the benefits, risks and alternatives of a biopsy, and what would happen if you do nothing.",
      "Arrange for someone to take you home after a biopsy and to stay with you overnight.",
      "If you do not have a follow-up appointment booked, contact your liver team to find out how and when you will get your results.",
    ],
    tryThisWeek: [
      "List your other health conditions.",
      "List all your medicines.",
      "Arrange a lift home after a biopsy.",
    ],
    ask: "Which blood tests and scans do I need, and will I need a liver biopsy?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "lft", front: "Liver blood tests", when: "Often the first sign", back: "ALT and AST are liver enzymes. Higher levels show the liver is inflamed." },
        { id: "autoantibodies", front: "Autoantibody tests", when: "If liver tests stay abnormal", back: "ANA, SMA and anti-LKM-1 are looked at together to help diagnose autoimmune hepatitis." },
        { id: "igg", front: "IgG", when: "At diagnosis and in treatment", back: "An antibody that is usually higher in AIH. It is used to monitor how well treatment is working." },
        { id: "ultrasound", front: "Ultrasound scan", when: "If liver disease is suspected", back: "Looks at the surface and general shape of your liver." },
        { id: "fibroscan", front: "FibroScan", when: "To judge scarring", back: "Measures the stiffness of your liver and how much scarring there might be." },
        { id: "biopsy", front: "Liver biopsy", when: "Most people need one", back: "A small sample of liver, taken with a needle and looked at under a microscope." },
      ],
    },
    sources: [LU_TESTS, LU_IMMUNE_TESTS, LU_BIOPSY],
    quiz: {
      question: "Why do most people need a liver biopsy?",
      options: [{ text: "Blood tests and scans are not usually enough", right: true }, { text: "It replaces all blood tests" }, { text: "It treats the inflammation" }],
      why: "Blood tests and scans are not usually enough to make a diagnosis.",
    },
  },
  {
    id: "aih-who",
    kicker: "Understanding",
    question: "Who gets autoimmune hepatitis?",
    hook: "Mostly women, often alongside another autoimmune condition. A mix of genes and a trigger, and nobody's fault.",
    short: "Autoimmune hepatitis is rare. Around 4 out of 5 people who have it are women, and many have a personal or family history of other autoimmune conditions. It is thought to come from a mix of genes and an outside trigger, and it is not known whether it can be prevented.",
    sections: [
      {
        heading: "Mostly women, but not only",
        paragraphs: [
          "Autoimmune hepatitis is rare. Around 4 out of 5 people who have it are women.",
          "The NHS says it is more common if you're a woman or have another autoimmune condition.",
        ],
      },
      {
        heading: "Other autoimmune conditions",
        paragraphs: [
          "A third to a half of people who are diagnosed have a personal or family history of other autoimmune conditions. These include thyroid disease, rheumatoid arthritis, ulcerative colitis or type 1 diabetes.",
          "Developing one autoimmune condition could mean someone is more at risk of getting others. Even if you have no symptoms, if you have another autoimmune condition and are worried, tell your doctor.",
        ],
      },
      {
        heading: "Genes and triggers",
        paragraphs: [
          "Autoimmune hepatitis can run in families, which may make it easier for a trigger to set it off. Small differences in genes do not usually cause autoimmune liver disease on their own, but they can increase someone's risk.",
          "An external trigger is usually needed. This is something from outside the body, such as getting a virus or taking certain medicines. We usually do not know what the trigger was for each person.",
        ],
      },
      {
        heading: "Other liver conditions alongside",
        paragraphs: [
          "Some people with autoimmune hepatitis have another type of liver disease as well. This is called an overlap syndrome. The most common are primary biliary cholangitis (PBC), primary sclerosing cholangitis (PSC) and metabolic dysfunction-associated steatotic liver disease (MASLD).",
          "Your liver specialist can help you understand what an overlap syndrome means for you and your condition.",
        ],
      },
      {
        heading: "Not something you caught",
        paragraphs: [
          "It is not entirely clear what causes autoimmune hepatitis, and it is not known whether anything can be done to prevent it. You cannot catch autoimmune hepatitis, and it is not related to drinking alcohol.",
        ],
      },
    ],
    helps: [
      "Tell your doctors about any other autoimmune diseases or health conditions you have.",
      "If you have another autoimmune condition and are worried, tell your doctor, even if you have no symptoms.",
      "Ask your liver specialist whether you have an overlap syndrome, and what it means for you.",
      "Look at Liver UK's help and advice about dealing with stigma.",
    ],
    tryThisWeek: [
      "List your other conditions.",
      "Tell your doctor if you're worried.",
      "Ask about overlap syndromes.",
    ],
    ask: "Do I have any other autoimmune or liver conditions that need checking?",
    interactive: {
      kind: "risk-check",
      title: "What makes it more likely?",
      intro: "Tick any that apply. Each of these is linked with autoimmune hepatitis.",
      items: [
        { id: "woman", label: "Being a woman", note: "Around 4 out of 5 people who have autoimmune hepatitis are women.", changeable: false },
        { id: "autoimmune", label: "Another autoimmune condition", note: "Such as thyroid disease, rheumatoid arthritis, ulcerative colitis or type 1 diabetes.", changeable: false },
        { id: "family", label: "A family history", note: "It can run in families, which may make it easier for a trigger to set it off.", changeable: false },
        { id: "virus", label: "A virus", note: "Getting a virus is one of the external triggers thought to play a part.", changeable: false },
        { id: "medicines", label: "Certain medicines", note: "Taking certain medicines can be a trigger. We usually do not know what the trigger was for each person.", changeable: false },
      ],
    },
    sources: [LU_AIH, NHS_HEPATITIS, LU_CAUSES, LU_AUTOIMMUNE, LU_SYMPTOMS, LU_TESTS],
    quiz: {
      question: "Who is autoimmune hepatitis more common in?",
      options: [{ text: "Women, and people with another autoimmune condition", right: true }, { text: "People who drink alcohol" }, { text: "People who travel abroad" }],
      why: "The NHS says it is more common if you're a woman or have another autoimmune condition.",
    },
  },
  {
    id: "aih-steroids",
    kicker: "Treatment",
    question: "How do steroids bring autoimmune hepatitis under control?",
    hook: "A higher dose first to calm the inflammation, then lower, step by step. Never stopped suddenly.",
    short: "Prednisolone is the main steroid used to treat autoimmune hepatitis. It calms the immune system so it stops attacking the liver. You usually start on a higher dose that is lowered over time, take it in the morning with food, carry a steroid card, and never stop it without talking to your doctor.",
    sections: [
      {
        heading: "Calming the immune system",
        paragraphs: [
          "Most people with autoimmune hepatitis need treatment. This is called immunosuppression, and it uses a combination of medicines: corticosteroids and another immunosuppressant. It reduces how active your immune system is, which stops it attacking your liver and reduces the inflammation.",
          "Prednisolone is the main steroid used to treat autoimmune hepatitis. Corticosteroids are not the same as anabolic steroids, which some people use to increase their muscle mass.",
        ],
      },
      {
        heading: "Starting high, then lowering",
        paragraphs: [
          "If you have jaundice when you are diagnosed, you will usually only have corticosteroids at first. When your symptoms improve, you will also start taking an immunosuppressant.",
          "To quickly reduce inflammation, you will start with a higher dose and gradually reduce it over time. Once the inflammation is under control, you might stop steroids completely and carry on with a long-term immunosuppressant. Some people need to keep taking a low dose, and their liver specialist will find the lowest dose possible.",
          "If you have had symptoms, these can improve within days. For some people it can take longer.",
        ],
      },
      {
        heading: "How to take prednisolone",
        paragraphs: [
          "It's best to take prednisolone once a day in the morning, with breakfast. Taking it with food helps reduce tummy problems, and taking it in the morning means it's less likely to affect your sleep.",
          "If you miss a dose, take it as soon as you remember. If you do not remember until the following day, skip the missed dose, and do not take a double dose to make up for it.",
          "Do not stop taking prednisolone without talking to your doctor. It can be dangerous to stop suddenly, especially after a high dose for a long time, so the dose is reduced gradually.",
        ],
      },
      {
        heading: "Steroid cards",
        paragraphs: [
          "If you take prednisolone for more than 3 weeks, or you're on a high dose, you'll get a blue steroid card. You may also need to carry a red steroid emergency card. Ask your pharmacist or doctor about both.",
          "If you need any medical or dental treatment, or are having surgery, show your steroid emergency card to your doctor or dentist, so they can give you extra steroids as needed. It might also be helpful to take a photo of your card on your phone.",
        ],
      },
      {
        heading: "Food and other medicines",
        paragraphs: [
          "Do not eat liquorice or products containing liquorice extract when you are taking prednisolone. This might increase the amount of the steroid in your body and your side effects.",
          "Budesonide is sometimes used instead of prednisolone. Do not eat grapefruit or drink grapefruit juice while you are taking it, as it can increase the levels in the blood and the chance of side effects.",
          "Steroids can interact with other medicines, including anti-inflammatory painkillers such as ibuprofen and aspirin. Let your liver specialist know about all the medicines you are taking.",
        ],
      },
    ],
    helps: [
      "Take prednisolone once a day in the morning, with breakfast.",
      "Do not stop taking prednisolone without talking to your doctor: the dose needs to be reduced gradually.",
      "Carry your steroid card, keep it up to date, and show it before any medical or dental treatment.",
      "Do not eat liquorice while taking prednisolone, or grapefruit while taking budesonide.",
      "Check that any other medicine, including ibuprofen or aspirin, is safe to take with prednisolone before you start it.",
    ],
    tryThisWeek: [
      "Take it with breakfast.",
      "Keep your steroid card with you.",
      "Avoid liquorice.",
    ],
    ask: "How will my steroid dose be lowered, and do I need a steroid emergency card?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments on steroids",
      scenarios: [
        {
          id: "missed",
          situation: "It's lunchtime and you realise you missed this morning's prednisolone.",
          options: [{ text: "Take it as soon as you remember", best: true }, { text: "Take a double dose tomorrow" }],
          why: "If you miss a dose, take it as soon as you remember. Do not take a double dose to make up for a forgotten one.",
        },
        {
          id: "feel-better",
          situation: "You feel much better and want to stop your steroids.",
          options: [{ text: "Talk to your doctor first", best: true }, { text: "Stop them today" }],
          why: "Do not stop taking prednisolone without talking to your doctor. You will need to reduce the dose gradually.",
        },
        {
          id: "dentist",
          situation: "You have a dental appointment next week.",
          options: [{ text: "Show your steroid card to the dentist", best: true }, { text: "Say nothing about your medicines" }],
          why: "Show your steroid emergency card to your doctor or dentist, so they know you are having steroid treatment.",
        },
        {
          id: "liquorice",
          situation: "A friend offers you some liquorice sweets.",
          options: [{ text: "Choose something else", best: true }, { text: "Have a few" }],
          why: "Do not eat liquorice when you are taking prednisolone. It might increase the amount of the steroid in your body and your side effects.",
        },
      ],
    },
    sources: [LU_TREATMENT, NHS_PRED_ABOUT, NHS_PRED_HOW, NHS_PRED_Q, NHS_PRED_SE, LU_GRAPEFRUIT, NHS_PRED_OTHER],
    quiz: {
      question: "When is it best to take prednisolone?",
      options: [{ text: "Once a day in the morning, with breakfast", right: true }, { text: "Last thing at night" }, { text: "Only when you feel unwell" }],
      why: "Taking it with food helps reduce tummy problems, and taking it in the morning means it's less likely to affect your sleep.",
    },
  },
  {
    id: "aih-azathioprine",
    kicker: "Treatment",
    question: "What is azathioprine, and how long will I take it?",
    hook: "The quiet, long-term partner to steroids. It works slowly, and for many people it is taken for years.",
    short: "Azathioprine is the most common immunosuppressant used alongside steroids for autoimmune hepatitis. It works slowly, so it may be up to three months before you feel any benefits. Most people take medicines for at least two years, and for many this could be for life.",
    sections: [
      {
        heading: "The long-term medicine",
        paragraphs: [
          "The most common immunosuppressant used with corticosteroids is azathioprine. Immunosuppressants moderate how active your immune system is, help prevent inflammation and cell damage, and reduce your symptoms.",
          "Azathioprine works by calming your immune system or changing the way it responds. It's used to treat autoimmune conditions, where your body's natural defence system mistakenly attacks healthy parts of your body.",
        ],
      },
      {
        heading: "How long for",
        paragraphs: [
          "You are likely to take medicines for at least two years, and for many people this could be for life. The length of treatment depends on each person.",
          "This type of medicine can act slowly, so it may be up to three months before you feel any benefits. Doses vary, depending on your weight and how serious your autoimmune hepatitis is.",
        ],
      },
      {
        heading: "Taking it",
        paragraphs: [
          "Azathioprine usually comes as tablets. Liver UK suggests taking it with plenty of water, after a meal or with a snack, to help reduce tummy problems.",
          "Avoid milk and other dairy products, such as cheese, yoghurt or butter, from 1 hour before taking the tablets until 2 hours afterwards. Dairy can make your treatment less effective.",
          "If you forget a dose, skip the dose you missed and take your next dose at the usual time. Do not take 2 doses to make up for a missed dose.",
        ],
      },
      {
        heading: "Other options",
        paragraphs: [
          "Mercaptopurine, mycophenolate mofetil and tacrolimus are other immunosuppressants. They can be used instead of azathioprine, for example when you have serious side effects or when your autoimmune hepatitis has not responded to azathioprine.",
          "If you keep feeling sick after a couple of weeks on azathioprine, speak to your clinical team. Your medicine could be changed to mercaptopurine.",
        ],
      },
      {
        heading: "Shared care and other medicines",
        paragraphs: [
          "Your liver specialist might talk to you about a shared care agreement. This means the medicine the hospital started can be carried on by your GP, so you will not have to visit the hospital to collect it.",
          "Immunosuppressants can interact with other medicines, including some antibiotics, blood thinners such as warfarin, and gout medicines such as allopurinol. Tell your doctor about all the medicines, herbal remedies, vitamins and supplements you take.",
        ],
      },
    ],
    helps: [
      "Take azathioprine with plenty of water, after a meal or with a snack.",
      "Avoid dairy from 1 hour before your tablets until 2 hours afterwards.",
      "Give it time: it may be up to three months before you feel any benefits.",
      "If you keep feeling sick after a couple of weeks, speak to your clinical team.",
      "Use sunscreen, avoid intense sunlight, and wear a hat and clothes that cover your arms and legs.",
      "Ask your liver specialist about a shared care agreement with your GP.",
    ],
    tryThisWeek: [
      "Take it after a meal or snack.",
      "Keep dairy away from dose times.",
      "Ask about shared care.",
    ],
    ask: "How long will I need azathioprine, and what if it makes me feel sick?",
    interactive: {
      kind: "timeline",
      title: "Azathioprine over time",
      steps: [
        { id: "start", when: "First weeks", title: "Starting out", points: ["Side effects are more likely when you first start", "If you keep feeling sick after a couple of weeks, speak to your team"] },
        { id: "month", when: "Within a month or so", title: "Settling in", points: ["You will usually feel better within a month or so", "Blood tests check how you are responding"] },
        { id: "three", when: "Up to three months", title: "Feeling the benefit", points: ["It acts slowly, so benefits can take up to three months"] },
        { id: "years", when: "Two years or more", title: "Long-term treatment", points: ["Medicines are likely for at least two years", "For many people this could be for life"] },
      ],
    },
    sources: [LU_TREATMENT, NHS_AZA],
    quiz: {
      question: "How long can it take to feel the benefits of azathioprine?",
      options: [{ text: "Up to three months", right: true }, { text: "One day" }, { text: "Five years" }],
      why: "This type of medicine can act slowly, so it may be up to three months before you feel any benefits.",
    },
  },
  {
    id: "aih-side-effects",
    kicker: "Treatment",
    question: "What side effects and blood tests come with treatment?",
    hook: "Most side effects can be eased. Regular blood tests keep the doses as low as they can safely be.",
    short: "Steroids commonly cause weight gain, indigestion and sleep problems, and azathioprine can make you feel sick or tired at first. Regular blood tests check your liver, your bone marrow and how well treatment is working. Tell your team about side effects, as they can sometimes change your treatment to help.",
    sections: [
      {
        heading: "Why side effects happen",
        paragraphs: [
          "The higher the dose of prednisolone and the longer you take it, the greater the chance of side effects. Some happen straight away, and others, such as a rounder face, happen after weeks or months.",
          "If you tell your clinical team about side effects, they can sometimes help by changing your treatment. Your doctor will balance treating you effectively with reducing side effects, by keeping the doses as low as possible.",
        ],
      },
      {
        heading: "Common steroid side effects",
        paragraphs: [
          "The most common are weight gain, indigestion and problems sleeping. Try to eat well without increasing your portion sizes, and take prednisolone with food in the morning, so levels are lowest at bedtime.",
          "A puffy, rounded face, sometimes called moon face, can happen with long-term use. Reducing salt, drinking more water and getting enough sleep can help, and your doctor might be able to help you reduce your medicine.",
          "Prednisolone can also affect your mood. Talk to your doctor or contact NHS 111 if you have mood changes, and call 999 or go to A&E if you have thoughts about harming yourself or ending your life.",
        ],
      },
      {
        heading: "Azathioprine side effects",
        paragraphs: [
          "Side effects are more likely when you first start azathioprine or when your dose goes up, and you will usually feel better within a month or so. Common side effects include feeling sick, tiredness, and your skin being more sensitive to sunlight.",
          "Azathioprine can sometimes cause serious side effects, such as being more likely to get infections, bone marrow problems and liver problems. Call 999 if you think you might be having a serious allergic reaction or a severe skin reaction. For any other serious side effect, speak to a doctor as soon as possible or call NHS 111.",
        ],
      },
      {
        heading: "Regular blood tests",
        paragraphs: [
          "You will need regular blood tests on azathioprine to monitor your liver and bone marrow. As you start treatment you might have more blood tests, and fewer as your condition becomes more controlled.",
          "Your doctor will check your ALT, AST and IgG levels to show how well you are responding. The aim is to bring these blood tests back to normal and reduce your symptoms.",
        ],
      },
      {
        heading: "Longer-term checks",
        paragraphs: [
          "Taking steroids over a long time can lead to thinner bones, poorly controlled diabetes, eyesight problems and high blood pressure. Your doctor will check for and treat any problems, including tests for high blood pressure and diabetes.",
          "To reduce the chances of eyesight problems, the NHS suggests visiting an optometrist every 12 months to check for glaucoma and cataracts.",
          "There is a slightly increased risk of some cancers on immunosuppressants. Do not use sunbeds, protect your skin from strong sun with clothes, a hat and sunscreen of at least SPF30, and take part in cancer screening when you are invited.",
        ],
      },
    ],
    helps: [
      "Tell your clinical team about side effects: they can sometimes help by changing your treatment.",
      "Have your regular blood tests, so your team can monitor your liver and bone marrow.",
      "Take prednisolone with food in the morning, to ease indigestion and sleep problems.",
      "Visit an optometrist every 12 months for eye checks if you take prednisolone for a long time.",
      "Do not use sunbeds, and in strong sun wear clothes, a hat and sunscreen of at least SPF30.",
      "Take part in cancer screening when you are invited, especially cervical screening.",
    ],
    tryThisWeek: [
      "Note side effects for your team.",
      "Book an eye check.",
      "Pack sunscreen and a hat.",
    ],
    ask: "Which side effects should I report, and how often will my blood be tested?",
    interactive: {
      kind: "signs",
      title: "Side effects to report",
      intro: "Tick any you have noticed. Your team can sometimes help by changing your treatment.",
      signs: [
        "Weight gain or a puffy, rounded face",
        "Indigestion",
        "Problems sleeping or feeling restless",
        "Mood changes",
        "Feeling sick that does not go away",
        "Feeling very tired or weak, or looking pale",
        "Bruises, or bleeding for a long time after an injury",
        "A high temperature or other signs of infection",
        "Yellowing of the whites of the eyes or skin",
        "Changes in your eyesight",
      ],
      after: "Tell your doctor if you feel unwell or notice anything unusual about your health. Call 999 for signs of a serious allergic reaction or a severe skin reaction. Call 999 or go to A&E if you have thoughts about harming yourself or ending your life.",
      copyHeading: "Side effects I have noticed",
    },
    sources: [LU_TREATMENT, NHS_PRED_SE, NHS_AZA, LU_LIVING, NHS_PRED_Q],
    quiz: {
      question: "What can your team sometimes do if you tell them about side effects?",
      options: [{ text: "Change your treatment to help", right: true }, { text: "Nothing at all" }, { text: "Stop all treatment straight away" }],
      why: "If you tell your clinical team about side effects, they can sometimes help by changing your treatment.",
    },
  },
  {
    id: "aih-stopping",
    kicker: "Treatment",
    question: "Can treatment for autoimmune hepatitis ever stop?",
    hook: "Sometimes, after remission and a careful decision. But it often comes back, so closer checks follow.",
    short: "Treatment usually lasts at least two years, and for many people it is for life. If the condition goes into remission, stopping may be possible, decided carefully with your team and sometimes after a biopsy. About 7 in 10 people who stop relapse within a year, so you are checked more closely afterwards.",
    sections: [
      {
        heading: "Often for years",
        paragraphs: [
          "You are likely to take medicines for at least two years, and for many people this could be for life. It might be possible to stop treatment completely, but some people become ill again and need further treatment.",
          "The time it takes to improve the inflammation in the liver will be different for everyone.",
        ],
      },
      {
        heading: "What remission means",
        paragraphs: [
          "For some people, treatment can be stopped if signs and symptoms improve a lot or go away. This is called remission. You might be offered a liver biopsy to check the inflammation has improved or gone away, and that it is safe to stop.",
          "If you are well enough to stop taking medicine, your doctor or liver specialist will discuss the risks and benefits. These decisions should be made carefully between you and your clinical team.",
        ],
      },
      {
        heading: "Flares and relapse",
        paragraphs: [
          "A flare can happen when you are not responding to treatment. Your ALT and AST levels will be higher than they should be, and you might have the same symptoms as before, new symptoms, or none at all.",
          "When autoimmune hepatitis comes back after treatment has been stopped because of remission, this is called a relapse. If you relapse you will need to start treatment again. About 7 in 10 patients who go into remission and stop treatment will relapse within a year.",
        ],
      },
      {
        heading: "Stopping safely",
        paragraphs: [
          "If your treatment changes or is stopped completely, you will be checked more closely for a while.",
          "Do not stop taking prednisolone without talking to your doctor. Stopping suddenly can make your condition flare up again, and can cause withdrawal effects such as severe tiredness, weakness, body aches and joint pain, so the dose is reduced gradually.",
        ],
      },
    ],
    helps: [
      "Make any decision about stopping treatment carefully, together with your clinical team.",
      "Ask about the risks and benefits before stopping, and whether a liver biopsy is needed first.",
      "Do not stop taking prednisolone without talking to your doctor.",
      "Keep going to check-ups after stopping, as you will be monitored more regularly for a while.",
      "Tell your doctor if you feel unwell or notice anything unusual about your health.",
    ],
    tryThisWeek: [
      "Discuss stopping with your team.",
      "Ask if a biopsy is needed first.",
      "Keep going to check-ups.",
    ],
    ask: "Could I ever stop treatment, and how would we check it is safe?",
    interactive: {
      kind: "timeline",
      title: "If treatment stops",
      steps: [
        { id: "control", when: "First", title: "Getting it under control", points: ["Medicines for at least two years", "Blood tests aim to bring ALT, AST and IgG back to normal"] },
        { id: "remission", when: "If it settles", title: "Remission", points: ["Signs and symptoms improve a lot or go away", "A liver biopsy might check it is safe to stop"] },
        { id: "decision", when: "Stopping", title: "A careful decision", points: ["Made between you and your clinical team", "Steroid doses are reduced gradually, not stopped suddenly"] },
        { id: "after", when: "Afterwards", title: "Closer checks", points: ["You will be monitored more regularly for a while", "If it relapses, treatment starts again"] },
      ],
    },
    sources: [LU_TREATMENT, LU_LIVING, LU_TESTS, NHS_PRED_HOW],
    quiz: {
      question: "If autoimmune hepatitis relapses after stopping treatment, what happens?",
      options: [{ text: "Treatment starts again", right: true }, { text: "Nothing more can be done" }, { text: "It goes away by itself" }],
      why: "If you relapse you will need to start treatment again.",
    },
  },
  {
    id: "aih-infections",
    kicker: "Living well",
    question: "How do I protect myself from infections on these medicines?",
    hook: "A calmer immune system fights germs less well. Vaccines, and knowing which ones to skip, make the difference.",
    short: "Prednisolone and azathioprine make infections more likely, and liver disease makes them more serious. Flu, COVID-19, pneumococcal and hepatitis A and B vaccines are recommended, but live vaccines are not, during treatment and for three to six months after. Tell your doctor straight away about contact with measles, chickenpox or shingles.",
    sections: [
      {
        heading: "Why infections matter more",
        paragraphs: [
          "If you have liver disease you are more vulnerable to infections, and if you do get ill, you are more likely to become severely ill. Prednisolone makes you more likely to catch infections such as flu, COVID-19, the common cold and chest infections, and azathioprine can do the same.",
          "Keep away from people with an infectious disease, especially measles, chickenpox or shingles. Tell your doctor straight away if you come into contact with someone who has one of these, as they may be able to prescribe a medicine to protect you.",
        ],
      },
      {
        heading: "The vaccines to have",
        paragraphs: [
          "Liver UK says it is important to have your hepatitis A and B, flu and COVID-19 vaccinations. People with long-term liver disease should also get the pneumococcal vaccine, which protects against pneumonia.",
          "The NHS offers a flu vaccine every year in autumn or winter to people with liver disease such as hepatitis, or with a weakened immune system due to a treatment such as steroid medicine. The pneumococcal vaccine is also offered to people with a weakened immune system due to a treatment such as steroid medicine.",
          "Adults with a severely weakened immune system, including people taking certain medicines that severely weaken it, can have the shingles vaccine. Ask your GP or care team if you are not sure whether you are eligible.",
        ],
      },
      {
        heading: "Live vaccines",
        paragraphs: [
          "Live vaccines use a whole virus or bacteria that has been weakened. Do not have live vaccines while taking these medicines, and for three to six months after you stop treatment.",
          "Live vaccines include the BCG vaccine for TB, the oral typhoid vaccine and the nose spray flu vaccine often given to children. The flu vaccines given by injection to adults are not live, and non-live versions of vaccines for flu, shingles and polio are safe to have while taking prednisolone.",
          "Always tell the person giving a vaccine which medicines you take. People who live with you can lower the risk of passing on an infection to you by having the vaccines they are offered.",
        ],
      },
      {
        heading: "Signs of infection",
        paragraphs: [
          "Call a doctor or NHS 111 straight away if you are taking prednisolone and get signs of an infection, such as a high temperature, a very sore throat, a cough, pain when you pee, or a wound that will not heal.",
          "Sepsis is a serious reaction to an infection. Call 999 or go to A&E if an adult is breathing very fast, is confused or has slurred speech, has blue, pale or blotchy skin, or has a very high or very low temperature.",
        ],
      },
    ],
    helps: [
      "Have your flu, COVID-19, pneumococcal and hepatitis A and B vaccines.",
      "Tell the person giving any vaccine which medicines you take.",
      "Do not have live vaccines while on treatment, or for three to six months after stopping.",
      "Keep away from anyone with measles, chickenpox or shingles, and tell your doctor straight away if you have been in contact with them.",
      "Ask the people you live with to have the vaccines they are offered, including a flu vaccine every year.",
      "Keep some NHS COVID-19 tests at home, as you are eligible for antiviral treatment.",
    ],
    tryThisWeek: [
      "Book your flu vaccine.",
      "Tell vaccinators about your medicines.",
      "Ask your household to get vaccinated.",
    ],
    ask: "Which vaccines should I have, and are any of them live?",
    interactive: {
      kind: "scenarios",
      title: "Germs, jabs and everyday choices",
      scenarios: [
        {
          id: "flu",
          situation: "Your GP surgery invites you for a flu vaccine.",
          options: [{ text: "Book it, and mention your medicines", best: true }, { text: "Skip it because you take immunosuppressants" }],
          why: "People with long term liver disease have a higher risk of becoming very unwell with flu. The flu vaccines given by injection to adults are not live vaccines.",
        },
        {
          id: "chickenpox",
          situation: "A child you spent the afternoon with now has chickenpox.",
          options: [{ text: "Tell your doctor straight away", best: true }, { text: "Wait to see if you get ill" }],
          why: "Tell your doctor straight away if you come into contact with chickenpox. They may be able to prescribe a medicine to protect you.",
        },
        {
          id: "typhoid",
          situation: "A travel clinic offers you an oral typhoid vaccine.",
          options: [{ text: "Check first, as it is a live vaccine", best: true }, { text: "Take it as usual" }],
          why: "The oral typhoid vaccine is live. Do not have live vaccines while taking these medicines, and for three to six months after you stop.",
        },
        {
          id: "temperature",
          situation: "You have a high temperature and feel shivery.",
          options: [{ text: "Call a doctor or NHS 111 straight away", best: true }, { text: "Wait a few days" }],
          why: "A high temperature, or feeling hot, cold or shivery, can be a sign of infection on prednisolone. Call a doctor or call 111 straight away.",
        },
      ],
    },
    sources: [LU_TREATMENT, LU_VACCINES, NHS_PRED_Q, NHS_AZA, NHS_FLU, NHS_PNEUMO, NHS_SHINGLES, NHS_SEPSIS, NHS_PRED_SE],
    quiz: {
      question: "Which vaccines should you avoid while taking these medicines?",
      options: [{ text: "Live vaccines", right: true }, { text: "The injected flu vaccine" }, { text: "All vaccines" }],
      why: "Do not have live vaccines while taking these medicines, and for three to six months after you stop treatment.",
    },
  },
  {
    id: "aih-bones",
    kicker: "Living well",
    question: "How do I look after my bones while taking steroids?",
    hook: "Steroids can thin bones without any warning. Checks, calcium, vitamin D and weight-bearing exercise help.",
    short: "Steroids work very well for autoimmune hepatitis, but they raise the risk of osteoporosis, which usually has no symptoms until a bone breaks. Your doctor may offer a bone density scan every 1 to 2 years and calcium and vitamin D. Weight-bearing exercise, not smoking and drinking less all help your bones.",
    sections: [
      {
        heading: "Why steroids affect bones",
        paragraphs: [
          "If you have an autoimmune condition like autoimmune hepatitis, you might be given steroid medicines. Steroids can work very well, but they are strong medicines, and one of the side effects is an increased risk of osteoporosis.",
          "Osteoporosis is when bones become weaker and more fragile, so they are more likely to break. The NHS lists long-term use of high-dose steroid tablets among the things that increase the risk.",
        ],
      },
      {
        heading: "Often no warning",
        paragraphs: [
          "Most people will not know they have osteoporosis unless they have a scan to look for it. The main symptom is breaking bones more easily than you should.",
          "If you think you could be at risk, talk to your medical team about checks. Do not wait for symptoms to appear.",
        ],
      },
      {
        heading: "Checks and scans",
        paragraphs: [
          "Taking steroids over a long time can affect your health in several ways. Your doctor may offer you a bone density scan, called a DEXA scan, every 1 to 2 years to check your bones aren't thinning, and prescribe calcium and vitamin D supplements to help your bones stay strong.",
          "A DEXA scan is quick and painless. It uses a low dose of X-rays, usually looks at your hips and the bottom of your back, and takes about 10 to 20 minutes. You can eat, drink and take your medicines as normal beforehand.",
          "Your team may also use a FRAX calculation, which looks at risk factors such as your age, whether you take steroid medicines, whether you smoke, and whether either of your parents broke a hip.",
        ],
      },
      {
        heading: "Helping your bones",
        paragraphs: [
          "Regular weight-bearing exercise is good for your bones. This is anything where your feet and legs support your weight. If you are not already doing high-impact exercise like running or dancing, start with something lower impact, like walking regularly.",
          "Calcium-rich foods include milk, cheese, leafy greens, dried fruit and tofu. Adults need 700mg of calcium a day, and all adults should have 10 micrograms of vitamin D a day. Talk to your medical team before taking any extra vitamins or supplements.",
          "Stopping smoking and cutting down or giving up drinking can both help your bones. Your medical team or GP can tell you about services in your area that can help.",
        ],
      },
      {
        heading: "Medicines for bones",
        paragraphs: [
          "If you have reduced bone density or osteoporosis, you might be offered medicine to help your bones. Bisphosphonates are usually weekly tablets. If you cannot have them, denosumab is an injection usually given once every 6 months.",
          "Not everyone with a liver condition can have these medicines, so it is important to work with your medical team to find the best options for you.",
        ],
      },
    ],
    helps: [
      "Ask your medical team about checks for osteoporosis if you take strong steroid medicine.",
      "Ask whether you need a DEXA scan, and when the next one should be.",
      "Do regular weight-bearing exercise, starting with regular walking if you are not active yet.",
      "Eat calcium-rich foods, such as milk, cheese, leafy greens and tofu.",
      "Talk to your medical team before taking any extra vitamins or supplements.",
      "Stop smoking and cut down on alcohol to help your bones.",
    ],
    tryThisWeek: [
      "Ask about a bone check.",
      "Take a regular walk.",
      "Add a calcium-rich food.",
    ],
    ask: "Do I need a bone density scan, or calcium and vitamin D supplements?",
    interactive: {
      kind: "risk-check",
      title: "What affects your bones?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "steroids", label: "Taking steroid medicines", note: "Steroids can work very well, but one of the side effects is an increased risk of osteoporosis.", changeable: false },
        { id: "smoking", label: "Smoking", note: "Stopping smoking can help your bones.", changeable: true },
        { id: "alcohol", label: "Drinking a lot of alcohol", note: "Cutting down or giving up drinking can help your bones.", changeable: true },
        { id: "inactive", label: "Long periods of inactivity", note: "Regular weight-bearing exercise, such as walking, is good for your bones.", changeable: true },
        { id: "family", label: "A family history", note: "A family history of osteoporosis, or a parent who broke a hip, raises the risk.", changeable: false },
        { id: "menopause", label: "Being past the menopause", note: "Osteoporosis is more common in women after the menopause.", changeable: false },
      ],
    },
    sources: [LU_TREATMENT, LU_OSTEO, LU_DEXA, NHS_OSTEO_CAUSES, NHS_OSTEO_PREV, NHS_PRED_Q, NHS_DEXA],
    quiz: {
      question: "What is the main symptom of osteoporosis?",
      options: [{ text: "Breaking bones more easily than you should", right: true }, { text: "Aching joints every morning" }, { text: "Yellow skin" }],
      why: "The main symptom is breaking bones more easily than you should.",
    },
  },
  {
    id: "aih-pregnancy",
    kicker: "Living well",
    question: "Can I have a baby if I have autoimmune hepatitis?",
    hook: "Many people with AIH have children. Planning ahead with the team, and keeping treatment going, is the key.",
    short: "Many people with autoimmune hepatitis get pregnant and have children. Talk to your clinical team first, tell them as soon as you are pregnant, and do not stop treatment without speaking to them. Mycophenolate mofetil needs changing before a pregnancy, whether the mother or the father takes it.",
    sections: [
      {
        heading: "Many people have children",
        paragraphs: [
          "Many people with autoimmune hepatitis get pregnant and have children. It's a good idea to talk to your clinical team first, so they can advise you.",
          "If you get pregnant, let your team know as soon as possible. They will be able to carefully monitor you during your pregnancy and after delivery.",
        ],
      },
      {
        heading: "Keep taking your treatment",
        paragraphs: [
          "Do not stop your treatment while you are pregnant without speaking to your clinical team. It's important that immune and inflammatory problems are well treated, as these can affect you and your baby's wellbeing.",
        ],
      },
      {
        heading: "Prednisolone in pregnancy",
        paragraphs: [
          "You can take prednisolone while you're pregnant. It has occasionally been linked to problems in the first 12 weeks and possible effects on the baby's growth, but the benefits usually outweigh any risks.",
          "Only small amounts cross the placenta, so your baby is exposed to very little. If you take prednisolone in pregnancy, your baby's growth will be checked regularly.",
          "If your doctor or health visitor says your baby is healthy, it's OK to take prednisolone while breastfeeding. If you take more than 40mg a day for a long time, your baby may need extra monitoring.",
        ],
      },
      {
        heading: "Azathioprine and mycophenolate",
        paragraphs: [
          "Azathioprine can be used in pregnancy if recommended by a specialist, who will talk to you about the benefits and risks. Speak to your doctor if you're pregnant or planning to get pregnant while taking it.",
          "It's very important to talk to your clinical team about pregnancy if you take mycophenolate mofetil. This medicine has been linked to problems with pregnancy when taken by the mother or father, so it is important to safely change to a different medicine.",
          "There's no clear evidence that prednisolone reduces fertility in men or women, and it will not affect any type of contraception.",
        ],
      },
    ],
    helps: [
      "Talk to your clinical team before trying for a baby.",
      "If you get pregnant, let your team know as soon as possible.",
      "Do not stop your treatment while pregnant without speaking to your clinical team.",
      "If you or your partner take mycophenolate mofetil, talk to the team about safely changing medicine before a pregnancy.",
      "Tell your doctor if you're trying to get pregnant, pregnant or breastfeeding.",
    ],
    tryThisWeek: [
      "Talk to your team before trying.",
      "Tell your team early if pregnant.",
      "Keep taking your treatment.",
    ],
    ask: "Are my medicines right for a pregnancy, and how will you monitor me?",
    interactive: {
      kind: "scenarios",
      title: "Planning a family",
      scenarios: [
        {
          id: "planning",
          situation: "You'd like to try for a baby next year.",
          options: [{ text: "Talk to your clinical team first", best: true }, { text: "Stop your medicines before trying" }],
          why: "It's a good idea to talk to your clinical team first, so they can advise you.",
        },
        {
          id: "positive",
          situation: "You've just had a positive pregnancy test.",
          options: [{ text: "Tell your team soon and keep taking treatment", best: true }, { text: "Stop your medicines to protect the baby" }],
          why: "If you get pregnant, let your team know as soon as possible. Do not stop your treatment without speaking to them.",
        },
        {
          id: "mmf",
          situation: "Your partner takes mycophenolate mofetil and you plan a pregnancy.",
          options: [{ text: "Talk to the clinical team about changing it", best: true }, { text: "No need to mention it" }],
          why: "Mycophenolate mofetil has been linked to problems with pregnancy when taken by the mother or father.",
        },
        {
          id: "breastfeeding",
          situation: "You want to breastfeed while taking prednisolone.",
          options: [{ text: "Check with your doctor or health visitor", best: true }, { text: "Stop prednisolone to breastfeed" }],
          why: "If your doctor or health visitor says your baby is healthy, it's OK to take prednisolone while breastfeeding.",
        },
      ],
    },
    sources: [LU_LIVING, NHS_PRED_PREG, NHS_AZA, NHS_PRED_Q],
    quiz: {
      question: "Can people with autoimmune hepatitis have children?",
      options: [{ text: "Yes, many get pregnant and have children", right: true }, { text: "No, never" }, { text: "Only after stopping all treatment" }],
      why: "Many people with autoimmune hepatitis get pregnant and have children.",
    },
  },
  {
    id: "aih-urgent",
    kicker: "Staying safe",
    question: "Which signs mean I need help straight away?",
    hook: "Yellowing, swelling, confusion or bleeding need a doctor fast. Some signs need 999.",
    short: "If the liver struggles, signs such as jaundice, swelling, confusion or easy bleeding need a doctor straight away. Vomiting blood, very dark or black poo, sudden confusion or signs of sepsis need 999 or A&E. Some medicine side effects also need urgent help.",
    sections: [
      {
        heading: "Signs the liver is struggling",
        paragraphs: [
          "If the liver struggles to work, more serious symptoms can develop. These include yellowing of the skin and eyes, swelling in the legs, ankles, feet or tummy, confusion or forgetting things, and bleeding and bruising more easily. If you have any of these, tell a doctor straight away.",
          "The NHS says to ask for an urgent GP appointment or get help from NHS 111 if your skin or the white part of your eyes look yellow.",
        ],
      },
      {
        heading: "If you have cirrhosis",
        paragraphs: [
          "If you have been diagnosed with cirrhosis, ask for an urgent GP appointment or get help from NHS 111 if your skin or eyes look yellow, you are more short of breath than usual, or you have a swollen tummy, legs, ankles or feet.",
          "Call 999 or go to A&E if you're vomiting blood, your poo is very dark or black, or you suddenly become confused or have slurred speech. Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        ],
      },
      {
        heading: "Medicine warning signs",
        paragraphs: [
          "On prednisolone, call a doctor or NHS 111 straight away if you get signs of an infection, signs of high blood sugar, any bruising or bleeding that is not normal, or red or black poo. Call 999 or go to A&E if you have black or dark brown vomit or are vomiting blood.",
          "On azathioprine, call 999 if you think you might be having a serious allergic reaction or a severe skin reaction. If you think you're having any other serious side effect, speak to a doctor as soon as possible or call NHS 111.",
        ],
      },
      {
        heading: "Sepsis",
        paragraphs: [
          "Sepsis is a serious reaction to an infection, and it develops very quickly. Call 999 or go to A&E if an adult is breathing very fast, is confused or has slurred speech, has blue, pale or blotchy skin, or has a very high or very low temperature.",
        ],
      },
      {
        heading: "Flares and everyday worries",
        paragraphs: [
          "A flare can bring the same symptoms as before, new symptoms, or none at all. Tell your doctor if you feel unwell or notice anything unusual about your health.",
          "For questions that are not urgent, the Liver UK nurse-led helpline is on 0800 652 7330, from 9am to 4pm, Monday to Friday. Calls are always answered by a specialist nurse.",
        ],
      },
    ],
    helps: [
      "Tell a doctor straight away about yellowing skin or eyes, swelling, confusion, or bleeding and bruising easily.",
      "Call 999 or go to A&E if you are vomiting blood or have very dark or black poo.",
      "Do not drive yourself to A&E: ask someone to drive you or call 999 for an ambulance.",
      "Bring any medicines you take with you to hospital.",
      "Call the Liver UK nurse-led helpline on 0800 652 7330 for questions that are not urgent.",
    ],
    tryThisWeek: [
      "Learn the signs that need a doctor.",
      "Know when to call 999.",
      "Save the Liver UK helpline number.",
    ],
    ask: "Which symptoms mean I should contact you straight away, and who do I call?",
    interactive: {
      kind: "signs",
      title: "Signs to act on",
      intro: "Tick any you have now.",
      signs: [
        "Yellowing of the skin or whites of the eyes",
        "Swelling in the legs, ankles, feet or tummy",
        "More short of breath than usual",
        "Confusion, forgetting things or slurred speech",
        "Bleeding or bruising more easily",
        "Vomiting blood, or black or dark brown vomit",
        "Very dark, black or red poo",
        "A high temperature, or feeling hot, cold or shivery",
        "Breathing very fast",
        "Blue, pale or blotchy skin",
      ],
      after: "Call 999 or go to A&E for vomiting blood, very dark or black poo, sudden confusion or slurred speech, or signs of sepsis. For yellow skin or eyes, ask for an urgent GP appointment or get help from NHS 111.",
      copyHeading: "Signs I have now",
    },
    sources: [LU_SYMPTOMS, NHS_JAUNDICE, NHS_CIRRHOSIS, NHS_PRED_SE, NHS_AZA, NHS_SEPSIS, LU_LIVING, LU_TREATMENT, LU_HELPLINE],
    quiz: {
      question: "You have cirrhosis and are vomiting blood. What should you do?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait for your next GP appointment" }, { text: "Call the helpline tomorrow" }],
      why: "Call 999 or go to A&E if you're vomiting blood, your poo is very dark or black, or you suddenly become confused or have slurred speech.",
    },
  },
];
