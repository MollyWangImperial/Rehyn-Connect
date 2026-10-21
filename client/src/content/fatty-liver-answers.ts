import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Fatty liver page's pieces (content/library-conditions/cancer-mind-digestion.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and
// Liver UK (the new name for the British Liver Trust and the Children's Liver Disease Foundation;
// britishlivertrust.org.uk now redirects to liveruk.org), with the NICE guideline page for the change of
// name. MASLD is the new name for non-alcoholic fatty liver disease (NAFLD). General information only; it
// never replaces what a person's own GP or liver team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const liverUk = (label: string, path: string): LearnSource => ({ label: `Liver UK: ${label}`, url: `https://liveruk.org/${path}` });

const NHS_NAFLD = nhs("Non-alcoholic fatty liver disease (NAFLD)", "conditions/non-alcoholic-fatty-liver-disease/");
const NHS_ARLD = nhs("Alcohol-related liver disease (ARLD)", "conditions/alcohol-related-liver-disease-arld/");
const NHS_CIRRHOSIS = nhs("Cirrhosis", "conditions/cirrhosis/");
const NHS_UNITS = nhs("Alcohol units", "live-well/alcohol-advice/calculating-alcohol-units/");
const NHS_ALCOHOL_RISKS = nhs("The risks of drinking too much", "live-well/alcohol-advice/the-risks-of-drinking-too-much/");
const NHS_EXERCISE = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_NSAIDS = nhs("NSAIDs", "medicines/nsaids/");
const NHS_STATINS = nhs("Statins", "medicines/statins/");

const MASLD = "about-liver-disease/conditions/masld";
const LU_MASLD = liverUk("Metabolic dysfunction-associated steatotic liver disease (MASLD)", `${MASLD}/`);
const LU_WHAT = liverUk("What is MASLD?", `${MASLD}/what-is-masld/`);
const LU_CAUSES = liverUk("What causes MASLD?", `${MASLD}/what-causes-masld/`);
const LU_SYMPTOMS = liverUk("What are the symptoms of MASLD?", `${MASLD}/what-are-the-symptoms-of-masld/`);
const LU_DIAGNOSIS = liverUk("How is MASLD diagnosed?", `${MASLD}/how-is-masld-diagnosed/`);
const LU_STAGES = liverUk("What are the stages of MASLD?", `${MASLD}/what-are-the-stages-of-masld/`);
const LU_DIAGNOSED = liverUk("What happens if I am diagnosed with MASLD?", `${MASLD}/what-happens-if-i-am-diagnosed-with-masld/`);
const LU_TREATED = liverUk("How is MASLD treated?", `${MASLD}/how-is-masld-treated/`);
const LU_ADVANCED = liverUk("What happens if my MASLD is more advanced?", `${MASLD}/what-happens-if-my-masld-is-more-advanced/`);
const LU_LIVING_MASLD = liverUk("Living with MASLD", `${MASLD}/living-with-masld/`);
const LU_T2D = liverUk("MASLD and type 2 diabetes", `${MASLD}/masld-and-type-2-diabetes/`);

const TESTS = "about-liver-disease/tests";
const LU_LFT = liverUk("Liver blood tests", `${TESTS}/liver-blood-tests/`);
const LU_SCORING = liverUk("Fibrosis scoring systems (FIB-4 and ELF)", `${TESTS}/fibrosis-scoring-systems/`);
const LU_FIBROSCAN = liverUk("VCTE (FibroScan)", `${TESTS}/transient-elastography-fibroscan/`);
const LU_ULTRASOUND = liverUk("Ultrasound scans", `${TESTS}/ultrasound/`);
const LU_SURVEILLANCE = liverUk("Regular checks for liver cancer (surveillance)", `${TESTS}/regular-checks-for-liver-cancer-surveillance/`);

const EAT = "about-liver-disease/living-with-a-liver-condition/eating-drinking-keeping-active";
const LU_DIET = liverUk("A well-balanced diet", `${EAT}/a-well-balanced-diet/`);
const LU_DIET_LIVER = liverUk("Diet and liver disease", `${EAT}/diet-and-liver-disease/`);
const LU_DIET_FAQS = liverUk("Diet FAQs", `${EAT}/diet-faqs/`);
const LU_EAT_BETTER = liverUk("Thinking about eating more healthily?", `${EAT}/thinking-about-eating-more-healthily/`);
const LU_COFFEE = liverUk("Coffee and your liver", `${EAT}/coffee-and-your-liver/`);
const LU_WEIGHT = liverUk("Keeping a healthy weight", `${EAT}/keeping-a-healthy-weight/`);
const LU_ACTIVITY = liverUk("Physical activity and exercise", `${EAT}/physical-activity-and-exercise/`);
const LU_MORE_ACTIVE = liverUk("Thinking about being more active?", `${EAT}/thinking-about-being-more-active/`);
const LU_ALCOHOL = liverUk("Alcohol and liver disease", `${EAT}/alcohol-and-liver-disease/`);
const LU_ALCOHOL_FAQS = liverUk("Alcohol FAQs", `${EAT}/alcohol-faqs/`);
const LU_SUPPLEMENTS = liverUk("Supplements and vitamins", `${EAT}/supplements-and-vitamins/`);
const LU_GRAPEFRUIT = liverUk("Grapefruit, liquorice and your medicines", `${EAT}/grapefruit-liquorice-and-your-medicines/`);

const CARE = "about-liver-disease/living-with-a-liver-condition/medical-care";
const LU_ALTERNATIVE = liverUk("Complementary and alternative therapy", `${CARE}/alternative-therapy/`);
const LU_WEIGHT_MEDS = liverUk("Weight loss medicines", `${CARE}/weight-loss-medicines/`);
const LU_QUESTIONS = liverUk("Questions to ask your doctor", `${CARE}/questions-to-ask-your-doctor/`);

const NICE_NG49: LearnSource = { label: "NICE: MASLD assessment and management (NG49)", url: "https://www.nice.org.uk/guidance/ng49" };

export const fattyLiverAnswers: LearnArticle[] = [
  {
    id: "fl-what-it-is",
    kicker: "Understanding",
    question: "What is fatty liver disease?",
    hook: "Fat building up in a liver that is not meant to store it. Very common, usually silent, and it can usually be treated.",
    short: "Non-alcoholic fatty liver disease is a common condition where fat builds up in your liver. It is now also called MASLD. It is often linked to being overweight, does not usually cause symptoms, and can usually be treated with healthy lifestyle changes.",
    sections: [
      {
        heading: "Fat where it should not be",
        paragraphs: [
          "Non-alcoholic fatty liver disease (NAFLD) is a common condition where fat builds up in your liver. It's often linked to being overweight and can usually be treated with healthy lifestyle changes.",
          "Your liver is not meant to store extra fat. When fat builds up in the liver, it can cause inflammation, which means irritation and swelling. Over time, this damages liver cells.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "MASLD happens when something goes wrong with how the body uses and stores energy. This is called metabolism. It can cause fat to build up inside liver cells, and when more than 5% of liver cells contain fat, it is called MASLD or fatty liver.",
          "MASLD is linked to being overweight or obese. But people who are not overweight can also develop it. Your genes, your environment, your lifestyle, your hormones, your age and other health conditions can all play a part.",
        ],
      },
      {
        heading: "A new name",
        paragraphs: [
          "MASLD, NAFLD and fatty liver disease are different names for the same condition. MASLD stands for metabolic dysfunction-associated steatotic liver disease. In simpler terms, it means fatty liver disease caused by something going wrong with how the body uses and stores energy.",
          "In 2023, an international group of healthcare professionals and patients updated the names. The new terms aim to show that metabolism plays a key role, and to avoid words such as non-alcoholic and fatty, which some people may find upsetting or judgemental. In July 2026, NICE renamed its guideline to reflect that MASLD is the new name for NAFLD.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "MASLD is very common. About 1 in 4 adults in the UK have it, and it is the biggest cause of long-term liver disease worldwide. It becomes more common as people get older, and it is more common in men and in people of Asian descent.",
          "About 1 in 20 adults may have more advanced liver scarring. The number of people in the UK with MASLD is increasing, and this rise is linked to rising rates of overweight and obesity.",
        ],
      },
      {
        heading: "Often silent",
        paragraphs: [
          "Non-alcoholic fatty liver disease does not usually cause any symptoms. Many people have it without realising. It's usually found when you have tests for another reason.",
          "Some people feel very tired or generally unwell, or have discomfort in the tummy under the right side of the ribs. Symptoms usually only appear after the liver has already been damaged, so you can't tell if you have it just by how you feel.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you could have non-alcoholic fatty liver disease, or you think you have a higher risk of getting it.",
      "Eat a healthy, balanced diet.",
      "Exercise regularly: aim to do at least 150 minutes of exercise a week.",
      "Lose weight if you're overweight.",
      "Keep to no more than 14 alcohol units a week, and do not smoke.",
    ],
    tryThisWeek: [
      "Ask a GP about your risk.",
      "Plan some regular exercise.",
      "Keep within 14 units a week.",
    ],
    ask: "Is there any scarring in my liver, and how advanced is it?",
    interactive: {
      kind: "risk-check",
      title: "What makes it more likely?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "weight", label: "Being overweight", note: "Particularly if you have a lot of fat around your stomach and waist.", changeable: true },
        { id: "lifestyle", label: "Low activity or an unhealthy diet", note: "Not having a healthy diet or not being very physically active makes it more likely.", changeable: true },
        { id: "diabetes", label: "Type 2 diabetes", note: "Managing type 2 diabetes is one way to lower your chances of developing MASLD.", changeable: true },
        { id: "bp", label: "High blood pressure or cholesterol", note: "Managing high blood pressure and high cholesterol can lower your chances too.", changeable: true },
        { id: "pcos", label: "Polycystic ovary syndrome", note: "A condition linked to insulin resistance, which makes MASLD more likely.", changeable: false },
        { id: "age", label: "Being over 50", note: "MASLD becomes more common as people get older.", changeable: false },
      ],
    },
    sources: [NHS_NAFLD, LU_WHAT, LU_CAUSES, LU_MASLD, LU_SYMPTOMS, NICE_NG49],
    quiz: {
      question: "How do most people find out they have fatty liver disease?",
      options: [{ text: "From tests done for another reason", right: true }, { text: "From sharp chest pain" }, { text: "From a rash on the skin" }],
      why: "Many people have it without realising. It's usually found when you have tests for another reason.",
    },
  },
  {
    id: "fl-tests",
    kicker: "Tests",
    question: "How is fatty liver found and checked?",
    hook: "No single test. Blood tests, a scoring system, an ultrasound and sometimes a FibroScan build up the picture.",
    short: "There isn't one simple test for MASLD. A GP asks about your health and how much you drink, and arranges blood tests and sometimes an ultrasound. Scoring systems and a FibroScan then help show whether there is scarring in the liver.",
    sections: [
      {
        heading: "Starting with the GP",
        paragraphs: [
          "If a GP thinks you could have non-alcoholic fatty liver disease, they'll ask about your symptoms and check your height, weight and waist measurement. They'll also ask how much alcohol you drink, to rule out alcohol-related liver disease.",
          "Your doctor may ask about medicines you take, including over-the-counter, natural or alternative medicines and supplements. They may also ask what you eat, how active you are and about any family history of liver disease. It is important to give your doctor as much information as you can.",
        ],
      },
      {
        heading: "Liver blood tests",
        paragraphs: [
          "A liver blood test is actually several different tests, but usually only one blood sample is needed. It looks at the levels of bilirubin, proteins such as albumin, and some of the enzymes made in the liver, such as ALT and AST.",
          "A liver blood test cannot diagnose or rule out MASLD on its own. It is possible to get a normal liver blood test with a serious liver condition. And 1 in 20 test results from healthy people are outside the reference range.",
        ],
      },
      {
        heading: "Scoring the risk of scarring",
        paragraphs: [
          "Doctors often use scoring systems that combine results from several blood tests. The Fib-4 index uses your age, your AST and ALT levels and your platelet count. The ELF test is a separate blood test that looks at substances involved in forming scars.",
          "A scoring system cannot measure the exact amount of fat or scarring in your liver, but it guides your doctor on what to do next. You will usually be told if you have a low, indeterminate or high risk of advanced scarring.",
        ],
      },
      {
        heading: "Ultrasound and FibroScan",
        paragraphs: [
          "An ultrasound uses sound waves to create a picture of your liver, and a fatty liver usually looks brighter than a healthy one. Ultrasound scans are very safe and do not hurt. The scan usually takes about 10 to 20 minutes.",
          "A FibroScan is a quick and painless scan that uses sound waves to measure how stiff or fatty your liver is. You might feel a little vibration, and in total it should only take around 5 to 15 minutes. It cannot diagnose a liver condition on its own.",
        ],
      },
      {
        heading: "What the results mean",
        paragraphs: [
          "With a low risk result, your GP will continue to manage your care, and you will need a fibrosis test every 3 to 5 years. If it's unclear whether you have advanced scarring, you will need further tests, like more blood tests, scans or a liver biopsy.",
          "With a high risk result, you will be referred to a specialist liver doctor for further tests and ongoing care. A liver biopsy involves taking a small sample of your liver with a needle, which is examined under a microscope.",
        ],
      },
    ],
    helps: [
      "Tell the doctor about any prescription and over-the-counter medicines, herbal and natural remedies and supplements, as these can sometimes affect the results.",
      "Ask how long it will take to get your liver blood test results; this should usually be within 2 weeks.",
      "Before a FibroScan you will probably be asked not to eat for at least 3 hours; wear loose clothing with a separate top and bottom.",
      "Before an ultrasound, follow the instructions on your appointment letter about eating and drinking.",
      "Ask what your score was and what happens next, and write down questions before a follow-up appointment.",
    ],
    tryThisWeek: [
      "List your medicines and supplements.",
      "Ask when results will come.",
      "Write down questions for the doctor.",
    ],
    ask: "What did my blood tests and scans show, and do I need any more tests?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "lft", front: "Liver blood test", when: "Usually the first test", back: "Several tests from one sample. Shows if the liver is injured, but cannot diagnose or rule out MASLD on its own." },
        { id: "fib4", front: "Fib-4 index", when: "Worked out from blood test results", back: "Uses your age, AST, ALT and platelet count to give an indication of scarring in the liver." },
        { id: "elf", front: "ELF test", when: "A separate blood test", back: "Looks at substances involved in forming scars. The higher the number, the more scarring is likely." },
        { id: "ultrasound", front: "Ultrasound", when: "A scan of your tummy", back: "Sound waves make a picture of the liver. A fatty liver usually looks brighter than a healthy one." },
        { id: "fibroscan", front: "FibroScan", when: "If results are unclear or higher risk", back: "A quick, painless scan that measures how stiff or fatty your liver is." },
        { id: "biopsy", front: "Liver biopsy", when: "If blood tests and scans are not enough", back: "A small sample of liver is taken with a needle and examined under a microscope." },
      ],
    },
    sources: [NHS_NAFLD, LU_DIAGNOSIS, LU_LFT, LU_SCORING, LU_FIBROSCAN, LU_ULTRASOUND],
    quiz: {
      question: "Can a liver blood test on its own rule out fatty liver disease?",
      options: [{ text: "No, it cannot rule it out on its own", right: true }, { text: "Yes, a normal result rules it out" }, { text: "Yes, if it is a fasting test" }],
      why: "A liver blood test cannot diagnose or rule out MASLD on its own.",
    },
  },
  {
    id: "fl-scarring",
    kicker: "Stages",
    question: "When does a fatty liver start to scar, and when does it matter?",
    hook: "Most people never get past the first stage. Scarring is what doctors look for, and much of it can be repaired.",
    short: "Fatty liver has stages, from extra fat with no damage, through inflammation and scarring (fibrosis), to cirrhosis in a small number of people. Doctors check for scarring to work out the stage. Having one stage does not mean you will move to the next, and the damage can be slowed or even reversed, especially early on.",
    sections: [
      {
        heading: "How scarring builds",
        paragraphs: [
          "Fat droplets cause damage and inflammation in liver cells, so the liver becomes irritated and tries to repair itself. Because this repair keeps happening, a protein called collagen builds up in the liver instead of being removed.",
          "Over time, this extra collagen forms scar tissue. As the scarring, called fibrosis, increases, healthy liver cells are replaced by scar tissue, making it harder for the liver to work properly.",
        ],
      },
      {
        heading: "The stages",
        paragraphs: [
          "Most people only have the first stage, a fatty liver, where there is a build-up of fat but no damage to your liver. In the second stage, called MASH and previously called NASH, a build-up of fat has caused inflammation. The liver is not yet seriously damaged, but there's a risk it could get worse.",
          "With fibrosis, there is damage to your liver, but it will usually still be working well. Cirrhosis is severe damage that will affect how well the liver works. It could cause serious health problems including internal bleeding, liver failure, liver cancer or sepsis.",
        ],
      },
      {
        heading: "Not everyone moves on",
        paragraphs: [
          "Having one stage does not mean you will always move to the next one. It is possible to slow or even reverse the damage, especially if it is at an early stage.",
          "Doctors cannot predict whose MASLD will get worse. Research shows that out of every 100 people with early-stage MASLD, 10 to 30 develop advanced scarring and more serious liver disease. The risk is higher in people with obesity or type 2 diabetes.",
          "For most people, it takes many years or even decades. But in some people, it can happen more quickly.",
        ],
      },
      {
        heading: "Advanced scarring and cirrhosis",
        paragraphs: [
          "If you have damage to your liver, such as fibrosis or cirrhosis, as well as making healthy lifestyle changes you'll need to see a liver specialist in hospital for treatment. Treatment from a liver specialist may include a medicine called pioglitazone, or vitamin E.",
          "Compensated cirrhosis means the liver has permanent scarring but is still working OK, and many people live for years with it. If you have cirrhosis, you may be offered a scan every 6 months to check for signs of liver cancer. This is called surveillance.",
        ],
      },
      {
        heading: "The heart matters too",
        paragraphs: [
          "No matter how advanced your liver disease is, the greatest risk to overall health is often heart attack and stroke. That's why improving and protecting heart health is usually a key first step in treatment.",
          "Even with more scarring, it is still possible to stop more damage if you make changes to your everyday life. These changes may also reverse some of the liver damage.",
        ],
      },
    ],
    helps: [
      "Ask how advanced your MASLD is, and whether your liver has any scarring.",
      "Make healthy lifestyle changes, which can help prevent the later stages.",
      "If you have advanced fibrosis or cirrhosis, stop drinking alcohol completely.",
      "If you are offered regular liver cancer checks, take part every time, even if you feel okay.",
      "Protect your heart health, as heart attack and stroke are often the greatest risk.",
    ],
    tryThisWeek: [
      "Ask if your liver has any scarring.",
      "Go to every surveillance scan.",
      "Look after your heart health too.",
    ],
    ask: "What stage is my liver disease, and how will we know if it changes?",
    interactive: {
      kind: "timeline",
      title: "The stages, one by one",
      steps: [
        { id: "s0", when: "Stage 0", title: "Fatty liver", points: ["Extra fat, but no inflammation or scarring", "The liver is working normally", "This stage can be fully reversed"] },
        { id: "s1", when: "Stage 1", title: "Mild fibrosis", points: ["Inflammation has caused a small amount of scarring", "Changes to everyday life can help reduce fat and reverse inflammation"] },
        { id: "s2", when: "Stage 2", title: "Moderate fibrosis", points: ["Inflammation and some scarring", "The liver is probably still working well", "Most of the damage can be repaired"] },
        { id: "s3", when: "Stage 3", title: "Advanced fibrosis", points: ["More scarring, but the liver should still work well", "Important to take steps to stop any further damage"] },
        { id: "s4", when: "Stage 4", title: "Cirrhosis", points: ["Large parts of the liver are damaged and scarred", "The liver may keep working and repair some damage", "Care and treatment from hospital specialists"] },
      ],
    },
    sources: [LU_STAGES, NHS_NAFLD, LU_ADVANCED, LU_DIAGNOSED, LU_CAUSES, LU_SURVEILLANCE, LU_QUESTIONS, LU_TREATED],
    quiz: {
      question: "Does a fatty liver always go on to cirrhosis?",
      options: [{ text: "No, having one stage does not mean moving to the next", right: true }, { text: "Yes, it always does in time" }, { text: "Yes, within a year" }],
      why: "Having one stage does not mean you will always move to the next one.",
    },
  },
  {
    id: "fl-alcohol-or-not",
    kicker: "Understanding",
    question: "Is my fatty liver from alcohol or from my metabolism?",
    hook: "Both can put fat in the liver. The difference is the cause, and the two together make serious damage more likely.",
    short: "Alcohol-related liver disease is damage from drinking too much alcohol over a long time, and its first stage is also a fatty liver. MASLD is linked to how the body uses and stores energy. A GP asks about drinking to tell them apart, and alcohol adds to the damage either way.",
    sections: [
      {
        heading: "Two causes of a fatty liver",
        paragraphs: [
          "Alcohol-related liver disease (ARLD) is where your liver is damaged by drinking too much alcohol over a long time. Its first stage is a fatty liver, where fat builds up in the liver and there are often no symptoms.",
          "MASLD means fatty liver disease caused by something going wrong with how the body uses and stores energy. It is often linked to conditions like obesity, type 2 diabetes and heart disease, which are sometimes called metabolic conditions.",
        ],
      },
      {
        heading: "How doctors tell them apart",
        paragraphs: [
          "If a GP thinks you could have non-alcoholic fatty liver disease, they'll ask about how much alcohol you drink, to rule out alcohol-related liver disease.",
          "Your doctor will look at your full medical history to rule out other causes of liver disease, including whether you drink alcohol and whether you have drunk alcohol in the past. It's possible to have more than one cause of liver damage at the same time.",
        ],
      },
      {
        heading: "Why the names changed",
        paragraphs: [
          "The newer names aim to show that metabolism plays a key role. They also avoid terms such as non-alcoholic and fatty, which some people may find upsetting or judgemental.",
          "You might still hear and see both the old and new terms for a while. You can use whichever name you feel most comfortable with.",
        ],
      },
      {
        heading: "When both are present",
        paragraphs: [
          "Being overweight or having a metabolic condition like type 2 diabetes increases the risk of alcohol-related liver disease. When the fat in the liver from MASLD is combined with alcohol, it makes serious liver disease more likely.",
          "You're more likely to develop alcohol-related liver disease if you drink too much and you have diabetes, especially type 2 diabetes, or are overweight or obese.",
        ],
      },
      {
        heading: "Alcohol matters either way",
        paragraphs: [
          "If you have MASLD, drinking alcohol can make liver damage worse. Alcohol adds extra strain to the liver when it is already working hard.",
          "People with alcohol-related liver disease should stop drinking alcohol for life. If your liver disease is not alcohol-related, and you are concerned about whether you can drink alcohol, discuss it with your doctor.",
        ],
      },
    ],
    helps: [
      "Give your doctor as much information as you can, including whether you drink alcohol now and whether you have in the past.",
      "If you have MASLD, keep to no more than 14 units of alcohol a week, spread out over 3 or more days.",
      "If you have advanced fibrosis or cirrhosis, stop drinking alcohol completely.",
      "If you regularly drink too much, get medical help before you try to stop, as stopping suddenly can be very dangerous.",
      "See a GP or an alcohol addiction support service if you're worried about your drinking or want help to stop.",
    ],
    tryThisWeek: [
      "Tell your doctor what you drink.",
      "Keep within 14 units a week.",
      "Get help before stopping heavy drinking.",
    ],
    ask: "Could alcohol be playing a part in my liver damage, and is any alcohol safe for me?",
    interactive: {
      kind: "flip-cards",
      title: "The names, card by card",
      intro: "Turn each card to see what each name means.",
      cards: [
        { id: "masld", front: "MASLD", when: "The new name", back: "Fatty liver disease caused by something going wrong with how the body uses and stores energy." },
        { id: "nafld", front: "NAFLD", when: "The old name", back: "Non-alcohol related fatty liver disease: the same condition, now called MASLD." },
        { id: "mash", front: "MASH", when: "Previously called NASH", back: "A build-up of fat has caused inflammation in the liver." },
        { id: "arld", front: "Alcohol-related liver disease", when: "Caused by drinking", back: "Liver damage from drinking too much alcohol over a long time. Its first stage is a fatty liver too." },
        { id: "both", front: "MASLD with alcohol", when: "Both together", back: "Fat in the liver combined with alcohol makes serious liver disease more likely." },
      ],
    },
    sources: [LU_WHAT, NHS_ARLD, LU_ALCOHOL, NHS_NAFLD, LU_CAUSES, LU_TREATED, LU_DIET_LIVER, LU_DIAGNOSIS],
    quiz: {
      question: "Why does a GP ask about alcohol when checking for fatty liver?",
      options: [{ text: "To rule out alcohol-related liver disease", right: true }, { text: "To work out your blood group" }, { text: "To choose a diet plan" }],
      why: "If a GP thinks you could have non-alcoholic fatty liver disease, they'll ask about how much alcohol you drink, to rule out alcohol-related liver disease.",
    },
  },
  {
    id: "fl-weight",
    kicker: "Treatment",
    question: "How much weight do I need to lose, and what works?",
    hook: "Losing 5% to 10% of body weight can help control fatty liver. Steady, small changes are the ones that stick.",
    short: "If you are overweight, losing weight is one of the best ways to improve MASLD. Research shows that losing 5% to 10% of your body weight can help control the condition and may reverse some liver damage. Steady weight loss through a balanced diet and more activity works best, with extra help if needed.",
    sections: [
      {
        heading: "Why weight matters",
        paragraphs: [
          "If you are overweight, losing weight is one of the best ways to improve MASLD. Research shows that losing 5% to 10% of your body weight can help control the condition and may reverse some liver damage.",
          "Reducing liver fat tackles the root cause of MASLD. It lowers the strain on your liver and gives it a chance to heal. No matter what you weigh, improving your diet and activity levels can help lower the amount of fat in your liver.",
        ],
      },
      {
        heading: "Not only the number on the scales",
        paragraphs: [
          "You can still develop MASLD if your body mass index (BMI) is in the healthy range. Research shows that up to 1 in 5 people with MASLD have a healthy body weight.",
          "Where you carry weight makes a difference too. Having too much tummy fat can increase the risk of conditions such as type 2 diabetes, heart disease and stroke, even if you have a healthy BMI.",
          "If you have MASLD and are at a healthy weight, it's important to avoid gaining weight. Extra weight can make your MASLD worse.",
        ],
      },
      {
        heading: "Checking your waist",
        paragraphs: [
          "To measure your waist, find the bottom of your rib bones and the top of your hip bone. Your waist is midway between these points. Wrap the tape all the way around, breathe out naturally and then take the measurement.",
          "Liver UK says to try to lose weight if your waist is 94cm or more for men, or 80cm or more for women. Speak to your GP if it is 102cm or more for men, or 88cm or more for women.",
        ],
      },
      {
        heading: "Steady, small changes",
        paragraphs: [
          "For most people it is healthier to lose weight steadily over time, by eating a healthy, balanced diet and being more physically active. Aim to lose 2 pounds, or 1 kg, a week at the most.",
          "Be realistic and make one or two changes at a time. Once they have become part of your normal life, add another small change.",
          "Losing weight isn't easy. Other health issues, low energy levels or certain medications can make it harder to eat well or stay active. But you don't have to do this alone.",
        ],
      },
      {
        heading: "Extra help",
        paragraphs: [
          "Talk to your doctor about getting support with weight loss. They may refer you to a registered NHS dietitian, and will know about local or online weight management programmes. If you are struggling, ask about a dedicated weight management service, which may offer very low calorie diets, weight-loss medicines or surgery.",
          "If you're living with obesity, a specialist may recommend treatments to help with weight loss such as medicines or surgery. Weight loss medicines should be prescribed by a healthcare professional, and if you have a liver condition, your clinical team can check they will be safe for you.",
          "If you have cirrhosis, talk to your doctor before trying to lose weight. Weight loss may still be helpful, but the diet and exercise advice will need to be tailored to your needs.",
        ],
      },
    ],
    helps: [
      "Ask your doctor whether you need to lose weight, how much in total, and what a good weekly goal is.",
      "Aim to lose weight steadily: 2 pounds, or 1 kg, a week at the most.",
      "Make one or two small changes at a time, and add another once they are part of normal life.",
      "Measure your waist, midway between the bottom of your ribs and the top of your hip bone.",
      "Ask your doctor about a referral to a registered NHS dietitian or a weight management programme.",
      "Only take a weight loss medicine if it has been prescribed for you, and check with your clinical team that it is safe.",
    ],
    tryThisWeek: [
      "Ask your doctor for a weight goal.",
      "Measure your waist.",
      "Pick one small change.",
    ],
    ask: "How much weight would make a difference for me, and what help is available?",
    interactive: {
      kind: "scenarios",
      title: "What would help most?",
      scenarios: [
        {
          id: "stalled",
          situation: "Your weight loss has stalled after a few months.",
          options: [{ text: "Keep up healthy eating and activity, and talk to your GP", best: true }, { text: "Buy weight loss medicine online" }, { text: "Give up on the changes" }],
          why: "It's still worth sticking to healthy eating and activity plans. Your GP can suggest changes or refer you to specialist services.",
        },
        {
          id: "healthy-weight",
          situation: "You have MASLD, but your weight is in the healthy range.",
          options: [{ text: "Avoid gaining weight, with a balanced diet and activity", best: true }, { text: "Nothing needs to change" }, { text: "Start a crash diet" }],
          why: "If you have MASLD and are at a healthy weight, it's important to avoid gaining weight. Extra weight can make your MASLD worse.",
        },
        {
          id: "fad",
          situation: "A fad diet promises very fast weight loss.",
          options: [{ text: "Lose weight steadily instead", best: true }, { text: "Try it for a quick fix" }],
          why: "Fad diets are generally not recommended for people with liver disease. For most people it is healthier to lose weight steadily over time.",
        },
        {
          id: "cirrhosis",
          situation: "You have cirrhosis and want to lose weight.",
          options: [{ text: "Talk to your doctor first", best: true }, { text: "Start a very low calorie diet alone" }],
          why: "If you have cirrhosis, talk to your doctor before trying to lose weight. The advice will need to be tailored to your needs.",
        },
      ],
    },
    sources: [LU_TREATED, NHS_NAFLD, LU_WEIGHT, LU_CAUSES, LU_WEIGHT_MEDS, LU_QUESTIONS, LU_DIET_LIVER],
    quiz: {
      question: "What weight loss can help control MASLD, according to research?",
      options: [{ text: "5% to 10% of body weight", right: true }, { text: "At least half of body weight" }, { text: "Any amount lost in one week" }],
      why: "Research shows that losing 5% to 10% of your body weight can help control the condition and may reverse some liver damage.",
    },
  },
  {
    id: "fl-food",
    kicker: "Living well",
    question: "What should I eat for a fatty liver?",
    hook: "No special diet cures it. A balanced way of eating, most of the time, is what the evidence backs.",
    short: "There isn't a special diet that cures MASLD. Most people benefit from eating a healthy, well-balanced diet and working towards a healthy weight. That means plenty of vegetables, fruit and wholegrains, less food high in fat, salt and sugar, and small changes that stick.",
    sections: [
      {
        heading: "No special diet",
        paragraphs: [
          "There isn't a special diet that cures MASLD. Most people benefit from eating a healthy, well-balanced diet and working towards a healthy weight. This can help manage and sometimes even reverse MASLD.",
          "The overall picture is more important than any one small detail. Aim to eat and drink healthily most of the time, without having too much or too little of any one thing.",
        ],
      },
      {
        heading: "What a balanced diet looks like",
        paragraphs: [
          "Eat at least 5 portions of a variety of vegetables and fruits every day, with at least one portion in every meal. Tinned and frozen count as well as fresh.",
          "Starchy foods such as potatoes, bread, rice or pasta should make up no more than a third of the food you eat, and wholegrain versions are higher in fibre. Eat some beans, pulses, eggs, fish, meat or other proteins. If you eat fish, include 2 portions every week, one of them oily.",
          "A Mediterranean diet is a popular example of a healthy, balanced diet. It has a focus on foods that come from plants, uses olive and other plant oils instead of butter, and includes plenty of vegetables, fruits, nuts and fish.",
        ],
      },
      {
        heading: "What to cut down on",
        paragraphs: [
          "A diet high in sugar and fats makes MASLD more likely. Cut down on foods and drinks that are high in fat, salt or sugar, and watch out for products with red traffic lights on the label.",
          "For most people it is best to only eat foods with refined sugar as occasional treats. Red and processed meats are high in saturated fat, so if you eat a lot, it is a good idea to cut down.",
          "Having lots of fat or sugar is bad for your liver, even if it comes with a coffee. So it is best not to regularly drink coffee with sugar, syrups or cream in it.",
        ],
      },
      {
        heading: "Detox myths",
        paragraphs: [
          "You cannot physically detox your liver. If your liver is healthy, toxins come out in your pee or poo, and they do not build up in your liver.",
          "There are no supplements that have been proven to keep your liver healthy, and some can cause liver damage. Fad diets that drastically cut calories or remove food groups are generally not recommended for people with liver disease.",
          "There is some evidence that drinking coffee can be good for your liver. But coffee is not enough on its own, and it is still important to eat a healthy balanced diet and keep active.",
        ],
      },
      {
        heading: "Small changes that stick",
        paragraphs: [
          "Rather than trying to change lots of things about your eating habits, pick 1 or 2 small changes. Plan your meals in advance, eat at about the same times each day, and don't eat on the go.",
          "Most importantly, enjoy your food, and remember you can have a treat every now and then. You can ask to be referred to a registered NHS dietitian, who can help you make realistic, long-term changes.",
        ],
      },
    ],
    helps: [
      "Eat at least 5 portions of a variety of vegetables and fruit every day, with at least one in every meal.",
      "Choose wholegrain bread, pasta and rice, and keep starchy foods to no more than a third of what you eat.",
      "Swap some or all of the meat in a curry, chilli or pasta sauce for beans, lentils or extra veg.",
      "Swap snacks like chocolate and crisps for a piece of fruit, a handful of nuts, or natural or Greek yoghurt.",
      "Drink 6 to 8 cups or glasses of fluid a day, choosing water, lower fat milk and sugar-free drinks.",
      "Ask to be referred to a registered NHS dietitian.",
    ],
    tryThisWeek: [
      "Add a portion of veg to each meal.",
      "Swap meat for beans in one meal.",
      "Swap one sugary snack for fruit.",
    ],
    ask: "Can I be referred to a dietitian, and what should I change first?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "snack",
          situation: "You get hungry between meals.",
          options: [{ text: "A piece of fruit or a handful of nuts", best: true }, { text: "Chocolate or crisps" }],
          why: "Swap snacks like chocolate and crisps for healthier options such as a piece of fruit, a handful of nuts, or natural or Greek yoghurt.",
        },
        {
          id: "detox",
          situation: "A friend recommends a liver detox diet.",
          options: [{ text: "Skip it, and eat a balanced diet", best: true }, { text: "Try it for a week" }, { text: "Add a detox supplement too" }],
          why: "You cannot physically detox your liver, and some of these diets can be dangerous for people with liver disease.",
        },
        {
          id: "sharing-bag",
          situation: "You open a big sharing bag of crisps.",
          options: [{ text: "Serve yourself a portion", best: true }, { text: "Eat straight from the bag" }],
          why: "It's hard to keep track of how much you're eating from bigger, sharing bags. Serve yourself a portion instead.",
        },
        {
          id: "coffee",
          situation: "You're ordering a coffee on the high street.",
          options: [{ text: "A coffee without syrups or cream", best: true }, { text: "A large one with syrup and cream" }],
          why: "Having lots of fat or sugar is bad for your liver, even if it comes with a coffee.",
        },
      ],
    },
    sources: [LU_DIET, LU_TREATED, LU_CAUSES, LU_DIET_FAQS, LU_EAT_BETTER, LU_DIET_LIVER, LU_COFFEE],
    quiz: {
      question: "Is there a special diet that cures fatty liver disease?",
      options: [{ text: "No, but a balanced diet most of the time helps", right: true }, { text: "Yes, a liver detox diet" }, { text: "Yes, cutting out all fat" }],
      why: "There isn't a special diet that cures MASLD. Most people benefit from eating a healthy, well-balanced diet and working towards a healthy weight.",
    },
  },
  {
    id: "fl-moving",
    kicker: "Treatment",
    question: "How does moving more help a fatty liver?",
    hook: "Activity lowers liver fat, whatever you weigh. Start small: even 10 minutes counts.",
    short: "Being more physically active is one of the best ways to reduce liver fat and improve MASLD. The aim is at least 150 minutes of moderate activity a week, plus strengthening exercises twice a week. Start gently and build up: every bit of movement matters.",
    sections: [
      {
        heading: "Why it helps",
        paragraphs: [
          "Being more physically active is one of the best ways to reduce liver fat and improve MASLD. It also lowers the risk of related conditions such as type 2 diabetes and heart disease.",
          "No matter what you weigh, improving your activity levels can help lower the amount of fat in your liver. Regular activity is good for your mood and mental wellbeing too.",
        ],
      },
      {
        heading: "The weekly aim",
        paragraphs: [
          "Aim for at least 150 minutes of moderate intensity activity every week. It should make you feel warmer and slightly out of breath. One way to tell is if you can still talk, but not sing.",
          "Examples include brisk walking, swimming, dancing, cycling and team sports. You can break the 150 minutes down however you like, for example doing 30 minutes on 5 days of the week.",
          "75 minutes of vigorous activity counts the same as 150 minutes of moderate activity. Vigorous activity makes you breathe hard and fast, so you can't say more than a few words at a time.",
        ],
      },
      {
        heading: "Strength, twice a week",
        paragraphs: [
          "It's also important to do activities that strengthen your muscles twice a week, working the legs, hips, back, abdomen, chest, shoulders and arms. Research shows that combining aerobic and strength exercises offers the greatest health benefits.",
          "Examples include lifting weights, using resistance bands, carrying heavy shopping and heavy gardening such as digging. If you are just getting started, try seated exercises using a strong, stable chair that does not have wheels.",
        ],
      },
      {
        heading: "Starting small",
        paragraphs: [
          "If 150 minutes sounds like a lot, don't worry. Break it down into shorter 10-minute sessions through the week and slowly build up. Every bit of movement matters, and doing something is always better than doing nothing.",
          "Walking and seated exercises are good places to start, especially if you are easily tired. Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        ],
      },
      {
        heading: "Making it a habit",
        paragraphs: [
          "Make walking a bigger part of regular journeys, by getting off a stop earlier or parking a bit further away. Take a movement break when the TV ads come on, and break up long periods of sitting with some activity.",
          "Your doctor may refer you to local exercise programmes, community gyms or walking groups. Getting friends and family involved can help you stick to your plans.",
        ],
      },
    ],
    helps: [
      "Aim for at least 150 minutes of moderate activity a week, such as brisk walking.",
      "If 150 minutes sounds like a lot, break it into shorter 10-minute sessions and build up slowly.",
      "Do activities that strengthen your muscles twice a week, such as resistance bands or carrying heavy shopping.",
      "Start with walking or seated exercises, especially if you are easily tired.",
      "Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
      "Ask your doctor about local exercise programmes, community gyms or walking groups.",
    ],
    tryThisWeek: [
      "Take a 10-minute brisk walk.",
      "Try one strength session.",
      "Ask about a walking group.",
    ],
    ask: "What type of activity is best for me, and how much should I do?",
    interactive: {
      kind: "timeline",
      title: "Building up, step by step",
      steps: [
        { id: "start", when: "To start", title: "Begin gently", points: ["Walking and seated exercises are good places to start", "Even 10 minutes counts", "Speak to your GP first if you have not exercised for some time"] },
        { id: "build", when: "Building up", title: "Little and often", points: ["Break activity into 10-minute sessions", "Slowly build up over time", "Take movement breaks and sit less"] },
        { id: "weekly", when: "Every week", title: "150 minutes", points: ["Moderate activity makes you warmer and slightly out of breath", "Or 75 minutes of vigorous activity"] },
        { id: "strength", when: "Twice a week", title: "Strengthen your muscles", points: ["Weights, resistance bands or carrying heavy shopping", "Seated exercises with a strong, stable chair"] },
      ],
    },
    sources: [LU_TREATED, LU_ACTIVITY, NHS_EXERCISE, LU_MORE_ACTIVE, NHS_NAFLD],
    quiz: {
      question: "How much moderate activity a week is the aim?",
      options: [{ text: "At least 150 minutes", right: true }, { text: "10 minutes in total" }, { text: "Only at weekends" }],
      why: "Aim for at least 150 minutes of moderate intensity activity every week.",
    },
  },
  {
    id: "fl-other-conditions",
    kicker: "Treatment",
    question: "How do diabetes, cholesterol and blood pressure fit with a fatty liver?",
    hook: "They share a root in the metabolism. Treating them protects the heart, and can help the liver too.",
    short: "MASLD is linked with type 2 diabetes, overweight, high cholesterol and high blood pressure, and having one can raise the risk of another. There are no specific medicines for MASLD in the UK, but treating these related conditions is important, especially for the heart.",
    sections: [
      {
        heading: "Linked through metabolism",
        paragraphs: [
          "MASLD and type 2 diabetes are both conditions linked to your metabolism, which is how your body stores and uses energy. Because of this, having one can increase your risk of developing the other.",
          "You may be more likely to get MASLD if you have type 2 diabetes or pre-diabetes, overweight or obesity, high cholesterol, high blood pressure, or other conditions linked to insulin resistance, such as polycystic ovary syndrome.",
        ],
      },
      {
        heading: "Diabetes and the liver",
        paragraphs: [
          "Around two-thirds of people with type 2 diabetes in the UK also have MASLD. If you have MASLD, you are more than twice as likely to develop type 2 diabetes.",
          "Having both together increases the risk of diabetes-related complications, more serious liver disease, heart disease and problems with your blood vessels. The risk of progressing to more serious liver disease is higher in people with type 2 diabetes.",
          "Because the two are closely linked, if you have one, it's a good idea to be checked for the other.",
        ],
      },
      {
        heading: "The heart comes first",
        paragraphs: [
          "No matter how advanced your liver disease is, the greatest risk to overall health is often heart attack and stroke. That's why improving and protecting heart health is usually a key first step in treatment.",
          "Healthy lifestyle changes also reduce the risk of other conditions linked to fatty liver disease, including cardiovascular disease, chronic kidney disease, high blood pressure and type 2 diabetes.",
        ],
      },
      {
        heading: "Medicines for related conditions",
        paragraphs: [
          "Currently, there are no specific medicines available in the UK to treat MASLD. But your doctor may recommend treatments for related conditions, such as type 2 diabetes, obesity, high blood pressure and high cholesterol.",
          "Statins lower cholesterol, which can reduce your risk of heart and circulatory disease, and research shows they may lower the risk of liver scarring. SGLT2 inhibitors, used for type 2 diabetes, do not directly treat MASLD, but they may help reduce liver fat in people with type 2 diabetes.",
          "If you stop taking statins, your cholesterol levels may be affected. Talk to a doctor or pharmacist before stopping.",
        ],
      },
      {
        heading: "Managing them together",
        paragraphs: [
          "Having several health conditions can make taking medicines more complicated. Your doctor and pharmacist can help make sure your medicines are safe and work well together.",
          "If you have MASLD alongside other health issues, it will usually be considered as part of your annual GP long term condition review. The good news is that both MASLD and type 2 diabetes can often be managed in similar ways: keeping a healthy weight, eating a healthy, well-balanced diet and being more physically active.",
        ],
      },
    ],
    helps: [
      "If you have MASLD or type 2 diabetes, ask to be checked for the other.",
      "Talk to a doctor or pharmacist before stopping a statin.",
      "Ask your doctor and pharmacist to check that all your medicines are safe and work well together.",
      "Have regular check-ups with your GP or specialist to keep track of blood sugar levels and liver health.",
      "Keep a healthy weight, eat a well-balanced diet and be more active: this helps both conditions.",
    ],
    tryThisWeek: [
      "Ask to be checked for diabetes.",
      "Ask for a medicines check.",
      "Book your next check-up.",
    ],
    ask: "Which of my other conditions need treatment, and how do my medicines work together?",
    interactive: {
      kind: "risk-check",
      title: "Conditions that go with it",
      intro: "Tick any you have. Each one is linked with MASLD, and most can be treated.",
      items: [
        { id: "diabetes", label: "Type 2 diabetes or pre-diabetes", note: "Around two-thirds of people with type 2 diabetes in the UK also have MASLD. Ask to be checked for both.", changeable: true },
        { id: "weight", label: "Overweight or obesity", note: "Keeping a healthy weight or losing weight, if needed, is one of the main treatments.", changeable: true },
        { id: "cholesterol", label: "High cholesterol", note: "Statins lower cholesterol, and research shows they may lower the risk of liver scarring.", changeable: true },
        { id: "bp", label: "High blood pressure", note: "Your doctor may recommend treatment, as it affects the risk of heart attack or stroke.", changeable: true },
        { id: "pcos", label: "Polycystic ovary syndrome", note: "A condition linked to insulin resistance, which makes MASLD more likely.", changeable: false },
      ],
    },
    sources: [LU_T2D, LU_CAUSES, NHS_NAFLD, LU_TREATED, LU_STAGES, NHS_STATINS, LU_DIAGNOSED],
    quiz: {
      question: "With MASLD, what is often the greatest risk to overall health?",
      options: [{ text: "Heart attack and stroke", right: true }, { text: "Broken bones" }, { text: "Kidney stones" }],
      why: "No matter how advanced your liver disease is, the greatest risk to overall health is often heart attack and stroke.",
    },
  },
  {
    id: "fl-alcohol",
    kicker: "Living well",
    question: "Can I drink alcohol with a fatty liver?",
    hook: "Alcohol adds strain to a liver that is already working hard. With advanced scarring, the advice is to stop.",
    short: "If you have MASLD, drinking alcohol can make liver damage worse. Keep to no more than 14 units a week, spread out, with alcohol-free days. If you have advanced fibrosis or cirrhosis, it's very important to stop drinking completely, and your liver team can give personal advice.",
    sections: [
      {
        heading: "Why alcohol matters",
        paragraphs: [
          "If you have MASLD, drinking alcohol can make liver damage worse. When your liver breaks down alcohol, it produces harmful chemicals that can damage liver cells.",
          "While the liver is good at repairing itself, it can only take so much. If you have MASLD, alcohol adds extra strain to the liver when it is already working hard.",
        ],
      },
      {
        heading: "Staying within the guidelines",
        paragraphs: [
          "Keep to no more than 14 units of alcohol a week. Spread your drinking out over 3 or more days, and have 2 to 3 alcohol-free days a week, preferably in a row.",
          "It's also important not to drink too much in one session, as this causes sudden harm to the liver, especially if it is already damaged. There's no safe drinking level, and the less you drink, the lower the health risks.",
          "14 units is equivalent to 6 pints of average-strength beer or 10 small glasses of lower-strength wine. A 750ml bottle of wine contains 10 units.",
        ],
      },
      {
        heading: "When to stop completely",
        paragraphs: [
          "If you have advanced fibrosis or cirrhosis, it's very important to stop drinking alcohol completely.",
          "For most people with a liver condition, it is best to stop drinking alcohol completely, which will help the liver to recover. If your liver condition is under control and wasn't caused by alcohol, it might be okay to drink from time to time. Check with your medical team.",
        ],
      },
      {
        heading: "Cutting down safely",
        paragraphs: [
          "If you regularly drink too much alcohol, it can be very dangerous to stop drinking suddenly. Get medical help before you try to stop drinking.",
          "Ideas that help include choosing a lower strength or alcohol-free drink, tracking your drinks, staying out of rounds and making every other drink a soft one. Even drinks labelled alcohol free can have a very small amount of alcohol in them.",
          "Staying within the guidelines can also help with weight loss, because alcohol contains lots of empty calories.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "Lots of people drink more than they would like to, and your GP should be used to talking about this. They can refer you to local alcohol services. Drinkline is a free and confidential national alcohol helpline on 0300 123 1110.",
          "It is up to you if you want to tell people about your liver condition. And it is ok to just say no thanks to a drink.",
        ],
      },
    ],
    helps: [
      "Keep to no more than 14 units of alcohol a week, spread over 3 or more days.",
      "Have 2 to 3 alcohol-free days a week, preferably in a row.",
      "Do not drink too much in one session.",
      "If you have advanced fibrosis or cirrhosis, stop drinking alcohol completely.",
      "If you have shaking, sweating or feel anxious until your first drink of the day, speak to a doctor before trying to cut down or stop.",
      "Ask your liver team whether it is safe for you to drink at all.",
    ],
    tryThisWeek: [
      "Track your units this week.",
      "Plan alcohol-free days in a row.",
      "Ask if any alcohol is safe for you.",
    ],
    ask: "Is alcohol safe for me at all, and if so, how much?",
    interactive: {
      kind: "scenarios",
      title: "Moments with a drink",
      scenarios: [
        {
          id: "pressure",
          situation: "Friends are pressing you to have another drink.",
          options: [{ text: "Say no thanks, or have a soft drink", best: true }, { text: "Keep up with the round" }],
          why: "It is ok to just say no thanks to a drink. Don't let other people set the pace.",
        },
        {
          id: "fibrosis",
          situation: "You have been told you have advanced fibrosis.",
          options: [{ text: "Stop drinking alcohol completely", best: true }, { text: "Keep to 14 units a week" }, { text: "Drink only at weekends" }],
          why: "If you have advanced fibrosis or cirrhosis, it's very important to stop drinking alcohol completely.",
        },
        {
          id: "stopping",
          situation: "You drink heavily every day and want to stop today.",
          options: [{ text: "Get medical help before stopping", best: true }, { text: "Stop suddenly on your own" }],
          why: "If you regularly drink too much alcohol, it can be very dangerous to stop drinking suddenly.",
        },
        {
          id: "saving-up",
          situation: "You plan to save your week's units for Saturday night.",
          options: [{ text: "Spread drinking over 3 or more days", best: true }, { text: "Have them all in one night" }],
          why: "It's important not to drink too much in one session. This causes sudden harm to the liver.",
        },
      ],
    },
    sources: [LU_TREATED, NHS_NAFLD, LU_ALCOHOL, LU_ALCOHOL_FAQS, NHS_UNITS, NHS_ARLD, NHS_ALCOHOL_RISKS],
    quiz: {
      question: "What is the advice on alcohol with advanced fibrosis or cirrhosis?",
      options: [{ text: "Stop drinking completely", right: true }, { text: "Up to 14 units a week is fine" }, { text: "Switch to wine only" }],
      why: "If you have advanced fibrosis or cirrhosis, it's very important to stop drinking alcohol completely.",
    },
  },
  {
    id: "fl-medicines",
    kicker: "Living well",
    question: "Which medicines and supplements should I be careful with?",
    hook: "Natural does not always mean safe for a liver. Check before taking anything new, and never stop a prescribed medicine on your own.",
    short: "Some medicines can harm the liver or make liver damage worse, and no supplement or alternative medicine has been shown to treat MASLD. If you have a liver condition, talk to your doctor or pharmacist before taking any new medicine, vitamin, supplement or herbal remedy. Do not stop any medicine your doctor has prescribed.",
    sections: [
      {
        heading: "Why the liver matters for medicines",
        paragraphs: [
          "The liver has many jobs, and one of these is breaking down medicines. If the liver is not working properly, medicines can build up in the body. This can be serious and can cause more damage to the liver.",
          "Some medicines can harm the liver or make liver damage worse. It's important to review all your prescriptions, over-the-counter drugs and any alternative treatments. Your doctor and pharmacist can help make sure your medicines are safe and work well together.",
        ],
      },
      {
        heading: "Medicines linked to fatty liver",
        paragraphs: [
          "About 2% of MASLD cases are linked to prescribed medicines. Medicines linked to MASLD include nonsteroidal anti-inflammatory drugs, amiodarone, corticosteroids, diltiazem, methotrexate and tamoxifen. Nonsteroidal anti-inflammatory drugs you can buy without a prescription include ibuprofen and aspirin.",
          "But do not stop taking any medicine your doctor has prescribed. Speak to your doctor if you have any questions or concerns.",
        ],
      },
      {
        heading: "Everyday painkillers",
        paragraphs: [
          "Most adults can take paracetamol, but the NHS says it may not be suitable if you have a kidney or liver condition. Taking too much paracetamol can sometimes damage your liver.",
          "Avoid taking paracetamol at the same time as other medicines containing paracetamol, such as cold and flu remedies. Check the packet or leaflet, and speak to a pharmacist or doctor if you're not sure if you can take it.",
          "If you have cirrhosis, check with a pharmacist or doctor before taking any medicines, including herbal medicines, as they may not be suitable.",
        ],
      },
      {
        heading: "Supplements and herbal remedies",
        paragraphs: [
          "There are no complementary or alternative medicines that have been shown to treat or prevent MASLD. They can sometimes harm your liver, even if they come from natural ingredients. The risk of this is higher if you already have a liver condition.",
          "Supplements containing vitamin A, green tea extract or kava, conjugated linoleic acid supplements sometimes used for slimming, and noni juice have all been reported as causing liver damage. Weight loss supplements can contain herbs that damage the liver, but drinking normal amounts of green tea is safe.",
          "Studies have not found enough evidence to say that milk thistle works. It can be dangerous for people taking some other medicines, including some treatments for liver disease and diabetes.",
        ],
      },
      {
        heading: "Medicines that interact",
        paragraphs: [
          "Grapefruit affects lots of medicines, including some immunosuppressants, statins, blood thinners and medicines for high blood pressure. Taking statins with some other medicines, herbal remedies such as St John's wort, or grapefruit juice can stop them working properly or increase the risk of side effects.",
          "Weight loss medicines should be prescribed by a healthcare professional. Not all websites and clinics check your medical history, and fake versions can make you very ill.",
        ],
      },
    ],
    helps: [
      "Always talk to your doctor before trying any vitamins, supplements, herbal, natural or alternative medicines.",
      "Do not stop any medicine your doctor has prescribed; speak to them about any questions or concerns.",
      "Ask your doctor and pharmacist to review all your prescriptions, over-the-counter medicines and alternative treatments together.",
      "Check the packet or leaflet before taking paracetamol, and avoid taking it with other medicines that contain paracetamol.",
      "If you are not sure whether grapefruit is safe with your medicines, look at the leaflet or ask your pharmacist.",
      "Only take a weight loss medicine if it has been prescribed for you.",
    ],
    tryThisWeek: [
      "List every medicine and supplement.",
      "Ask a pharmacist before anything new.",
      "Check leaflets for paracetamol.",
    ],
    ask: "Are all my medicines and supplements safe for my liver?",
    interactive: {
      kind: "flip-cards",
      title: "Before you take it",
      intro: "Turn each card to see what the sources say.",
      cards: [
        { id: "paracetamol", front: "Paracetamol", when: "For pain and high temperature", back: "May not be suitable with a liver condition, and too much can damage the liver. Ask a pharmacist if unsure." },
        { id: "nsaids", front: "Anti-inflammatory painkillers", when: "Such as ibuprofen", back: "Among the medicines linked to MASLD. Do not stop a prescribed one; ask your doctor." },
        { id: "herbal", front: "Herbal and natural remedies", when: "Bought without a prescription", back: "Can sometimes harm the liver, even from natural ingredients. Talk to your doctor first." },
        { id: "milk-thistle", front: "Milk thistle", when: "Sold for liver health", back: "Not enough evidence that it works. Can be dangerous with some other medicines." },
        { id: "supplements", front: "Vitamin A and green tea extract", when: "Supplements", back: "Reported as causing liver damage. Drinking normal amounts of green tea is safe." },
        { id: "weight-loss", front: "Weight loss medicines", when: "Only on prescription", back: "Should be prescribed by a healthcare professional. Buying online or from clinics can be dangerous." },
      ],
    },
    sources: [LU_TREATED, LU_CAUSES, LU_SUPPLEMENTS, LU_ALTERNATIVE, NHS_PARACETAMOL, NHS_CIRRHOSIS, LU_GRAPEFRUIT, NHS_STATINS, LU_WEIGHT_MEDS, NHS_NSAIDS],
    quiz: {
      question: "What should you do before trying a herbal supplement with a fatty liver?",
      options: [{ text: "Talk to your doctor first", right: true }, { text: "Nothing: natural means safe" }, { text: "Take half the dose" }],
      why: "Always talk to your doctor before trying any vitamins, supplements, herbal, natural or alternative medicines.",
    },
  },
  {
    id: "fl-checks",
    kicker: "Follow-up",
    question: "How often should my liver be checked?",
    hook: "Fatty liver is usually silent, so regular checks are how changes are found early.",
    short: "The NHS says to have check-ups at least once a year and tests every 2 to 3 years. Liver UK says everyone with MASLD should have tests every 3 to 5 years to check for more serious scarring. With cirrhosis, a scan every 6 months looks for early signs of liver cancer.",
    sections: [
      {
        heading: "Why checks matter",
        paragraphs: [
          "Liver damage often has no symptoms, so regular checks are important. Symptoms of MASLD usually only appear after the liver has already been damaged.",
          "The amount of scarring in your liver can change over time, and it can get better as well as worse. So you might be asked to have tests again to see if anything has changed.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "The NHS says you should have check-ups at least once a year and tests every 2 to 3 years to monitor your condition.",
          "Liver UK says everyone diagnosed with MASLD should have tests every 3 to 5 years to check for more serious liver scarring. If you have MASLD alongside other health issues, it will usually be considered as part of your annual GP long term condition review.",
          "It can help to ask who will be in charge of your care and how often you will have an appointment with them.",
        ],
      },
      {
        heading: "Who looks after you",
        paragraphs: [
          "If MASLD is found early, your care will be managed by your local GP. Your GP or practice nurse will talk with you about your weight, diet and physical activity, and support you with any other health conditions.",
          "At a later stage, you may be referred to hospital, where a liver doctor or a digestive system doctor will be in charge of your care. A specialist liver nurse, a dietitian, a psychologist or a physical activity specialist may also support you.",
        ],
      },
      {
        heading: "Checks with cirrhosis",
        paragraphs: [
          "If you have cirrhosis, you may be offered a scan every 6 months to check for signs of liver cancer. This is called surveillance.",
          "Finding liver cancer early means it can often be cured, so it's important to take part every time, even if you feel okay. The checks normally include a liver ultrasound scan, and some hospitals also carry out a blood test.",
        ],
      },
      {
        heading: "Between checks",
        paragraphs: [
          "Tell a doctor straight away if you develop yellowing of the skin or whites of the eyes, dark urine, swelling of the tummy or legs, vomiting blood, or dark, black, tarry poo. If you have cirrhosis and you're vomiting blood, your poo is very dark or black, or you suddenly become confused, call 999 or go to A&E.",
          "Before appointments, it can help to write down the questions you would like to ask. You may find it helpful to bring a family member or friend, and it's fine to ask your medical team to explain or repeat things.",
          "Liver UK's nurse-led helpline is on 0800 652 7330 if you have more questions after an appointment.",
        ],
      },
    ],
    helps: [
      "Ask who is in charge of your care and how often you will have an appointment with them.",
      "Write down your questions before appointments, and bring someone with you if it helps.",
      "If you have cirrhosis, take part in every liver cancer check, even if you feel okay.",
      "Ask how you can tell if your MASLD is getting better or worse.",
      "Tell a doctor straight away about yellow skin or eyes, dark urine, swelling, vomiting blood or black poo.",
    ],
    tryThisWeek: [
      "Ask when your next check is due.",
      "Write down your questions.",
      "Know the signs to report.",
    ],
    ask: "How often should my liver be checked, and who will arrange it?",
    interactive: {
      kind: "signs",
      title: "Signs to tell a doctor straight away",
      intro: "Tick any you have noticed. In later stages, these need urgent medical attention.",
      signs: [
        "Yellow skin or whites of the eyes",
        "Bruising easily",
        "Dark urine",
        "Swelling of the tummy",
        "Swelling of the legs, ankles or feet",
        "Unexplained weight loss",
        "Vomiting blood",
        "Dark, black, tarry poo",
        "Confusion or memory problems",
        "Itchy skin",
      ],
      after: "Tell a doctor straight away. With cirrhosis, vomiting blood, black poo or sudden confusion means call 999 or go to A&E.",
      copyHeading: "Signs I have noticed",
    },
    sources: [NHS_NAFLD, LU_DIAGNOSED, LU_SYMPTOMS, LU_SURVEILLANCE, LU_QUESTIONS, LU_LIVING_MASLD, NHS_CIRRHOSIS, LU_SCORING],
    quiz: {
      question: "Why are regular liver checks important with fatty liver?",
      options: [{ text: "Liver damage often has no symptoms", right: true }, { text: "The liver hurts when it changes" }, { text: "Checks cure the condition" }],
      why: "Liver damage often has no symptoms, so regular checks are important.",
    },
  },
];
