import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Cirrhosis page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and
// Liver UK (the new name for the British Liver Trust; britishlivertrust.org.uk now redirects to
// liveruk.org), with NHS Blood and Transplant for liver transplants (the NHS liver transplant page now
// redirects there). Emergency advice is worded as the NHS and Liver UK word it. General information
// only; it never replaces what a person's own GP or liver team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const liverUk = (label: string, path: string): LearnSource => ({ label: `Liver UK: ${label}`, url: `https://liveruk.org/${path}` });
const nhsbt = (label: string, path: string): LearnSource => ({ label: `NHS Blood and Transplant: ${label}`, url: `https://www.nhsbt.nhs.uk/organ-transplantation/liver/${path}` });

const NHS_CIRRHOSIS = nhs("Cirrhosis", "conditions/cirrhosis/");
const NHS_ARLD = nhs("Alcohol-related liver disease (ARLD)", "conditions/alcohol-related-liver-disease-arld/");
const NHS_HEP_C = nhs("Hepatitis C", "conditions/hepatitis-c/");
const NHS_HEP_B = nhs("Hepatitis B", "conditions/hepatitis-b/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_NSAIDS = nhs("NSAIDs", "medicines/nsaids/");
const NHS_LACTULOSE = nhs("Lactulose", "medicines/lactulose/");

const NHSBT_LIVER = nhsbt("Liver transplant", "");
const NHSBT_WHO = nhsbt("Who is able to have a liver transplant?", "is-a-liver-transplant-right-for-you/who-is-able-to-have-a-liver-transplant/");
const NHSBT_BENEFITS = nhsbt("Benefits of a liver transplant", "benefits-and-risks-of-a-liver-transplant/benefits-of-a-liver-transplant/");
const NHSBT_MEDICINES = nhsbt("Liver transplant medicines", "living-with-a-liver-transplant/liver-transplant-medicines/");

const CIR = "about-liver-disease/conditions/cirrhosis";
const LU_CIRRHOSIS = liverUk("Cirrhosis", `${CIR}/`);
const LU_CAUSES = liverUk("What causes cirrhosis?", `${CIR}/cirrhosis-causes/`);
const LU_SYMPTOMS = liverUk("Symptoms of cirrhosis", `${CIR}/cirrhosis-symptoms/`);
const LU_TESTS = liverUk("Tests and scoring systems for cirrhosis", `${CIR}/cirrhosis-test/`);
const LU_TREATMENT = liverUk("Cirrhosis treatments and complications", `${CIR}/cirrhosis-treatment/`);
const LU_LIVING = liverUk("Living with cirrhosis", `${CIR}/living-with-cirrhosis/`);
const LU_HE = liverUk("Hepatic encephalopathy (HE)", `${CIR}/he/`);
const LU_PORTAL = liverUk("Portal hypertension", `${CIR}/portal-hypertension/`);
const LU_ASCITES = liverUk("Ascites", `${CIR}/ascites/`);
const LU_VARICES = liverUk("Varices and variceal bleeding", `${CIR}/varices/`);
const LU_OSTEO = liverUk("Osteoporosis (bone thinning)", `${CIR}/osteoporosis/`);

const LU_STAGES = liverUk("The stages of long term liver disease", "about-liver-disease/stages-of-liver-disease/");
const LU_LIVER_SYMPTOMS = liverUk("Symptoms of liver disease", "about-liver-disease/symptoms-of-liver-disease/");
const LU_SURVEILLANCE = liverUk("Regular checks for liver cancer (surveillance)", "about-liver-disease/tests/regular-checks-for-liver-cancer-surveillance/");
const LU_SURGERY = liverUk("Surgery for other conditions when you have cirrhosis", "about-liver-disease/treatments/surgery-for-other-conditions-when-you-have-cirrhosis/");

const TX = "about-liver-disease/treatments/transplant";
const LU_TX_WHO = liverUk("Who can have a liver transplant?", `${TX}/who-can-have-a-liver-transplant/`);
const LU_TX_ASSESS = liverUk("Liver transplant assessment", `${TX}/liver-transplant-assessment/`);
const LU_TX_WAIT = liverUk("Waiting for a liver transplant", `${TX}/waiting-for-a-liver-transplant/`);
const LU_TX_LIFE = liverUk("Life after liver transplant", `${TX}/life-after-transplant/`);

const LW = "about-liver-disease/living-with-a-liver-condition";
const LU_DIET = liverUk("Diet and cirrhosis", `${LW}/eating-drinking-keeping-active/diet-and-cirrhosis/`);
const LU_ACTIVITY = liverUk("Physical activity and exercise", `${LW}/eating-drinking-keeping-active/physical-activity-and-exercise/`);
const LU_ALCOHOL = liverUk("Alcohol and liver disease", `${LW}/eating-drinking-keeping-active/alcohol-and-liver-disease/`);
const LU_ALCOHOL_FAQS = liverUk("Alcohol FAQs", `${LW}/eating-drinking-keeping-active/alcohol-faqs/`);
const LU_SUPPLEMENTS = liverUk("Supplements and vitamins", `${LW}/eating-drinking-keeping-active/supplements-and-vitamins/`);
const LU_ALTERNATIVE = liverUk("Complementary and alternative therapy", `${LW}/medical-care/alternative-therapy/`);
const LU_VACCINES = liverUk("Liver disease and vaccines", `${LW}/medical-care/vaccines/`);

export const cirrhosisAnswers: LearnArticle[] = [
  {
    id: "cir-what-it-is",
    kicker: "Understanding",
    question: "What is cirrhosis?",
    hook: "Long-term scarring that builds slowly, often without symptoms. The liver can keep going for a long time, and the damage can often be stopped from getting worse.",
    short: "Cirrhosis is permanent scarring of the liver caused by damage over a long time. It is a later stage in many types of liver disease. It is serious, but many people feel well and live for many years, and treating the cause can stop it getting worse.",
    sections: [
      {
        heading: "Scarring that builds over years",
        paragraphs: [
          "Cirrhosis is a condition where the liver is severely damaged. It is permanent scarring of the liver caused by damage over a long time, and it is a later stage in many types of liver disease.",
          "It usually takes many years for cirrhosis to develop. But most people will have no symptoms while this is happening. They may only find out if it is found by accident during other health checks, or when they become very unwell.",
        ],
      },
      {
        heading: "What the scarring does",
        paragraphs: [
          "Cirrhosis happens when the scarring from fibrosis becomes very severe, causing permanent liver damage. Scar tissue can join to form bands, cause the liver to shrink and change shape, and replace normal liver cells.",
          "This makes it harder and harder for the liver to do all its normal jobs. Scar tissue can also stop blood flowing through the liver normally.",
        ],
      },
      {
        heading: "Compensated and decompensated",
        paragraphs: [
          "Compensated, or stable, cirrhosis is when the liver has permanent scarring but is working OK. The body is able to cope with the damaged liver, so people might not feel ill. You can live for years with compensated cirrhosis.",
          "Decompensated cirrhosis means the body is no longer coping with the scarring, and the liver is not able to work properly. People can be very unwell, may have complications that affect other parts of the body, and often need urgent treatment.",
          "Cirrhosis can move from compensated to decompensated in different ways, and this can be hard to predict. It can be caused by triggers such as infections or alcohol.",
        ],
      },
      {
        heading: "What can change it",
        paragraphs: [
          "Cirrhosis cannot be cured, but there are treatments that can help slow it down or stop it getting worse. It is often possible to stop compensated cirrhosis becoming decompensated, usually by stopping or treating whatever is causing the damage.",
          "It is also possible to reverse decompensation, which is called recompensation. This does not mean the liver has got better, just that the body has started to cope with some of the damage. The only cure for cirrhosis is a liver transplant, and not everyone will need or be able to have one.",
        ],
      },
      {
        heading: "A word about end stage",
        paragraphs: [
          "Cirrhosis is sometimes called advanced chronic liver disease, and you might also hear it called end stage liver disease. This does not mean you are going to die soon. It is called end stage because cirrhosis comes after the other stages of liver disease.",
          "Your liver is very good at carrying on with its jobs, even when it has a lot of damage. Many people with cirrhosis can feel well and live for many years.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you might have cirrhosis.",
      "Ask your medical team what is causing your cirrhosis, as this helps them work out the best treatment for you.",
      "Ask how the disease is affecting your health now, and what may happen in the future.",
      "Take away or treat whatever is causing the damage, which can often stop compensated cirrhosis getting worse.",
      "Do not drink alcohol, and do not smoke.",
    ],
    tryThisWeek: [
      "Ask what is causing your cirrhosis.",
      "Ask how it affects your health now.",
      "Cut out alcohol and smoking.",
    ],
    ask: "Is my cirrhosis compensated or decompensated, and what does that mean for me?",
    interactive: {
      kind: "flip-cards",
      title: "The words you may hear",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "fibrosis", front: "Fibrosis", when: "Before cirrhosis", back: "Scarring of the liver. Over time, severe scarring becomes cirrhosis." },
        { id: "cirrhosis", front: "Cirrhosis", when: "A later stage of liver disease", back: "Permanent, serious liver damage caused by scarring over a long time." },
        { id: "compensated", front: "Compensated cirrhosis", when: "The body is coping", back: "The liver is still able to keep going. People might not feel ill." },
        { id: "decompensated", front: "Decompensated cirrhosis", when: "Complications have developed", back: "The liver cannot work properly, causing serious complications. It needs urgent treatment." },
        { id: "recompensation", front: "Recompensation", when: "When things improve", back: "Decompensated cirrhosis goes back to being compensated cirrhosis." },
        { id: "end-stage", front: "End stage liver disease", when: "Another name you may hear", back: "Another name for cirrhosis. It does not mean you are going to die soon." },
      ],
    },
    sources: [LU_CIRRHOSIS, NHS_CIRRHOSIS, LU_CAUSES, LU_STAGES, LU_LIVING],
    quiz: {
      question: "Does end stage liver disease mean you are going to die soon?",
      options: [{ text: "No, it means cirrhosis comes after the other stages", right: true }, { text: "Yes, within weeks" }, { text: "Yes, and no treatment can help" }],
      why: "This does not mean you are going to die soon. It is called end stage because cirrhosis comes after the other stages of liver disease.",
    },
  },
  {
    id: "cir-causes",
    kicker: "Causes",
    question: "What causes cirrhosis?",
    hook: "Alcohol is only one of many causes. Fatty liver, hepatitis viruses, autoimmune and genetic conditions can all lead to the same scarring.",
    short: "Cirrhosis is caused by long-term damage to the liver. In adults the most common causes of liver disease are alcohol, being overweight, viral hepatitis and autoimmune liver conditions, and some genetic conditions can cause it too. Working out the cause matters, because it affects which treatment is best.",
    sections: [
      {
        heading: "Long-term damage",
        paragraphs: [
          "Cirrhosis is caused by long-term damage to your liver. There are many different types of liver disease, and cirrhosis is a late stage in most of them.",
          "People often think of cirrhosis as part of alcohol-related liver disease. Alcohol can be a cause, but there are many other causes of liver disease that can also lead to cirrhosis.",
        ],
      },
      {
        heading: "How the damage builds up",
        paragraphs: [
          "In adults, the most common causes of liver disease are alcohol, being overweight, viral hepatitis and autoimmune liver conditions. Liver UK says 9 in 10 cases of liver disease are caused by things like alcohol and being overweight.",
          "In some people, these causes lead to a build-up of fat in the liver. If the damage is not stopped, it may lead to inflammation in the liver, called hepatitis, then to scarring, called fibrosis. Over time this can cause severe scarring, which is cirrhosis.",
        ],
      },
      {
        heading: "Alcohol and weight",
        paragraphs: [
          "You may be more likely to have cirrhosis if you regularly drink a lot of alcohol. The NHS gives this as over 50 units a week for a man and over 35 units a week for a woman. Alcohol is the biggest cause of liver disease in the UK, but not all liver disease is caused by alcohol.",
          "The second most common type of liver disease is linked to being overweight. You may also be more likely to have cirrhosis if you live with obesity, have type 2 diabetes or have non-alcoholic fatty liver disease.",
          "Not everyone who drinks too much will be affected, and some people who drink only a little over the limits will develop liver disease. Fat in the liver combined with alcohol makes serious liver disease more likely.",
        ],
      },
      {
        heading: "Hepatitis viruses",
        paragraphs: [
          "Hepatitis B and hepatitis C can both cause cirrhosis. Viral hepatitis can go unnoticed for decades, and most people with hepatitis C do not have any symptoms.",
          "If not treated, hepatitis C can cause cirrhosis. This is unlikely unless you have had hepatitis C for more than 20 years, but it may happen more quickly if you drink alcohol regularly or also have hepatitis B or HIV. Treatment cures hepatitis C for most people.",
          "If left untreated, long-term hepatitis B can cause cirrhosis and increase the risk of getting liver cancer.",
        ],
      },
      {
        heading: "Other causes",
        paragraphs: [
          "Some autoimmune liver conditions can lead to cirrhosis, such as autoimmune hepatitis, primary biliary cholangitis and primary sclerosing cholangitis. So can some genetic conditions, such as haemochromatosis, Wilson's disease, alpha-1 antitrypsin deficiency and cystic fibrosis.",
          "Working out what could be causing your liver condition is important, because it affects which treatment is best for you. Your doctor should be used to talking about alcohol and weight, so it helps to answer their questions honestly.",
        ],
      },
    ],
    helps: [
      "Answer your doctor's questions honestly, including about alcohol, weight, medicines and any chance of viral hepatitis.",
      "If there is any chance you could have picked up viral hepatitis, ask for a test; your GP or a local sexual health clinic should be able to arrange it.",
      "If you are aged 18 or over, you can order a free hepatitis C test to do at home.",
      "Before your appointment, write down what you drink in a typical week, one day at a time.",
      "Make a list of all your medicines and supplements, with the dose, to show your doctor.",
    ],
    tryThisWeek: [
      "Write down a typical week's drinks.",
      "List your medicines and supplements.",
      "Ask about a hepatitis test.",
    ],
    ask: "What caused my cirrhosis, and can that cause be treated?",
    interactive: {
      kind: "risk-check",
      title: "What can lead to cirrhosis?",
      intro: "Tick any that apply. Some causes can be treated or changed, and some cannot.",
      items: [
        { id: "alcohol", label: "Regularly drinking a lot of alcohol", note: "Over 50 units a week for a man or over 35 for a woman, says the NHS. Support to cut down or stop is available.", changeable: true },
        { id: "weight", label: "Living with obesity", note: "The second most common type of liver disease is linked to being overweight.", changeable: true },
        { id: "diabetes", label: "Type 2 diabetes", note: "Linked to weight. If you have it, it is important to have treatment to get it under control.", changeable: true },
        { id: "fatty-liver", label: "Non-alcoholic fatty liver disease", note: "A build-up of fat in the liver, which may lead to further damage if it is not stopped.", changeable: true },
        { id: "hepatitis", label: "Hepatitis B or hepatitis C", note: "Treatment cures hepatitis C for most people. Hepatitis B can be controlled with antiviral medicines.", changeable: true },
        { id: "autoimmune", label: "An autoimmune liver condition", note: "Such as autoimmune hepatitis, primary biliary cholangitis or primary sclerosing cholangitis.", changeable: false },
        { id: "genetic", label: "A genetic condition", note: "Such as haemochromatosis, Wilson's disease or alpha-1 antitrypsin deficiency.", changeable: false },
      ],
    },
    sources: [NHS_CIRRHOSIS, LU_STAGES, LU_TESTS, LU_ALCOHOL, NHS_HEP_C, NHS_HEP_B, LU_CAUSES],
    quiz: {
      question: "Is alcohol the only cause of cirrhosis?",
      options: [{ text: "No, there are many other causes", right: true }, { text: "Yes, always" }, { text: "Only in men" }],
      why: "Alcohol can be a cause, but there are many other causes of liver disease that can also lead to cirrhosis.",
    },
  },
  {
    id: "cir-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of cirrhosis, early and later?",
    hook: "Often nothing at first. Later signs can appear anywhere in the body, and a few need help straight away.",
    short: "Many people with cirrhosis do not have symptoms, especially early on. Early symptoms such as tiredness, loss of appetite and feeling sick could also be caused by something else. Later, cirrhosis can cause jaundice, swelling, itching, bruising and confusion, and some symptoms need urgent help.",
    sections: [
      {
        heading: "Often silent at first",
        paragraphs: [
          "Many people who have cirrhosis do not have symptoms, especially early on. Finding liver disease early makes a big difference to treatments and outcomes, but most people will not have any symptoms until they are very unwell.",
          "If you think you might be at risk of liver disease, do not wait until you get symptoms. Speak to your GP, who can arrange tests to check on how your liver is doing.",
        ],
      },
      {
        heading: "Early symptoms",
        paragraphs: [
          "Early symptoms of cirrhosis may include feeling tired or unwell all the time, loss of appetite or losing weight without trying, feeling or being sick, and tummy pain.",
          "Some people notice visible blood vessels on the skin, or blotchy red palms. The redness may be harder to see on brown or black skin. Early symptoms are usually things that could also be caused by something else.",
        ],
      },
      {
        heading: "As cirrhosis gets worse",
        paragraphs: [
          "Later symptoms can include bleeding or bruising easily, itchy skin, and yellow skin and whites of the eyes, called jaundice. Yellowing of the skin may be harder to see on brown or black skin.",
          "There may be a swollen tummy, legs, ankles or feet, trembling hands, slurred speech, and feeling confused or finding it hard to concentrate. Some people have changes to their fingers, such as them getting wider and curved, or white nails.",
          "Men may also have bigger breasts than usual, or their testicles may get smaller. Other possible symptoms include pale putty coloured poo, staggering when walking or falling more often, and loss of interest in sex.",
        ],
      },
      {
        heading: "Changes others may notice first",
        paragraphs: [
          "Forgetfulness, confusion and small changes in personality can be symptoms of cirrhosis. So can changes to when you sleep, such as staying awake at night and sleeping in the day.",
          "To begin with, these changes can be subtle and easy to miss. Often it is a family member or friend who will spot them first, so it is a good idea to share this information with them.",
        ],
      },
      {
        heading: "Symptoms that need help straight away",
        paragraphs: [
          "If you have cirrhosis and you are vomiting blood, your poo is very dark or black, or you suddenly become confused or have slurred speech, call 999 or go to A&E. Do not drive to A&E: ask someone to drive you, or call 999 and ask for an ambulance.",
          "If your skin or the whites of your eyes look yellow, you have difficulty breathing, or you have a swollen tummy, legs, ankles or feet, ask for an urgent GP appointment or get help from NHS 111.",
          "Cirrhosis can cause new symptoms, or ones that come and go. It is important to tell your liver specialist about these, even if you have had cirrhosis for a while.",
        ],
      },
    ],
    helps: [
      "If you think you might be at risk, speak to your GP rather than waiting for symptoms.",
      "Tell your liver specialist about any new symptoms, or ones that come and go.",
      "If you have a lot of symptoms, write them all down before your appointment, with the worst at the top.",
      "Share the signs of confusion with close family or friends, as they often notice them first.",
      "Know the signs that mean calling 999 or going to A&E: vomiting blood, very dark or black poo, or sudden confusion or slurred speech.",
    ],
    tryThisWeek: [
      "Write down your symptoms.",
      "Tell family what to look out for.",
      "Learn the 999 signs.",
    ],
    ask: "Which of my symptoms come from cirrhosis, and which mean I should get help?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your liver team about",
      intro: "Tick any you have noticed, to share at your next appointment.",
      signs: [
        "Feeling tired or unwell all the time",
        "Loss of appetite or losing weight without trying",
        "Feeling or being sick",
        "Tummy pain",
        "Bleeding or bruising easily",
        "Itchy skin",
        "Yellow skin or whites of the eyes",
        "Swollen tummy, legs, ankles or feet",
        "Trembling hands",
        "Confusion or difficulty concentrating",
        "Changes to when you sleep",
        "Pale putty coloured poo",
      ],
      after: "Tell your liver specialist. If you are vomiting blood, your poo is very dark or black, or you suddenly become confused or have slurred speech, call 999 or go to A&E.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_CIRRHOSIS, LU_SYMPTOMS, LU_LIVER_SYMPTOMS, LU_HE, LU_TESTS],
    quiz: {
      question: "Do most people with early cirrhosis have symptoms?",
      options: [{ text: "No, many have no symptoms early on", right: true }, { text: "Yes, always sharp pain" }, { text: "Yes, always jaundice" }],
      why: "Many people who have cirrhosis do not have symptoms, especially early on.",
    },
  },
  {
    id: "cir-tests",
    kicker: "Tests",
    question: "Which tests and scans check for cirrhosis, and what do the scores mean?",
    hook: "Blood tests, scans and sometimes a biopsy build up the picture. A score then helps your team plan, but it cannot tell your future.",
    short: "To find out if you have cirrhosis, doctors ask questions and arrange tests. These usually start with a liver blood test and a scan such as an ultrasound or FibroScan, and sometimes include a biopsy or an endoscopy. If you have cirrhosis, you might be given a score, such as Child-Pugh, to help decide what happens next.",
    sections: [
      {
        heading: "What the tests look for",
        paragraphs: [
          "To find out if you have cirrhosis, your doctor will need to do tests and ask you questions. They will try to find out what might be causing it, how much scarring there is in your liver, and whether you have any complications.",
          "Your doctor will ask about symptoms, alcohol, weight, medicines and supplements, and anything that could have put you at risk of viral hepatitis. It is important to try to answer all the questions honestly.",
        ],
      },
      {
        heading: "Blood tests",
        paragraphs: [
          "If your GP wants to check on your liver, they will usually ask you to have a liver blood test, sometimes called a liver function test or LFT. This test cannot diagnose liver disease on its own, but it helps your doctor see how your liver is doing and what other tests you might need.",
          "If that test suggests a problem, you might have more blood tests, called a full liver screen. Some look for problems in your liver, and others rule out other possible conditions.",
        ],
      },
      {
        heading: "Scans and a biopsy",
        paragraphs: [
          "An ultrasound scan uses sound waves to build up a picture of your liver. It should not hurt, though it might be a bit uncomfortable if you have tummy pain. A FibroScan measures how stiff your liver is, and it is quick and painless. A healthy liver is very soft, but with cirrhosis it becomes very tough and knobbly.",
          "Depending on other results, you might have a CT or MRI scan to take a more detailed look. During a liver biopsy, a thin needle takes a small sample of your liver to look at in a laboratory. You can have pain relief, and it can usually be done in a day.",
        ],
      },
      {
        heading: "Endoscopy and other checks",
        paragraphs: [
          "An endoscope is a long thin tube with a light and a tiny camera at the end. An endoscopy can look for varices, which are swollen veins that can cause serious bleeding. Everyone with cirrhosis should have checks to see if they are at risk of varices.",
          "If you have cirrhosis, you should also have checks for osteoporosis, which weakens the bones. This could be a calculation called the FRAX index, or a bone density scan.",
        ],
      },
      {
        heading: "Scores and what they mean",
        paragraphs: [
          "If your results show cirrhosis, you might be given a score. The 3 main ways of scoring cirrhosis in the UK are the Child-Pugh classification, the UKELD score and the MELD score. Child-Pugh divides cirrhosis into 3 classes, A, B and C.",
          "Child-Pugh looks at ascites, hepatic encephalopathy and blood test results for bilirubin, albumin and how long blood takes to clot. In the UK, the UKELD score is one of the things used to decide who goes on the liver transplant waiting list.",
          "Scores are based on averages for lots of people. So they cannot tell you exactly what will happen to you. Liver UK does not recommend working out your score with an online calculator; if you would like to know your score, talk to your medical team.",
        ],
      },
    ],
    helps: [
      "Write your symptoms down before your appointment, with the worst at the top.",
      "If you drink, work out in advance how much you drink in a typical week.",
      "Make a list of your medicines and supplements with the dose, or take the packets or a photo of them.",
      "If there is any chance you could have picked up viral hepatitis, ask for a test.",
      "If you have cirrhosis and have not been offered screening for varices, speak to your medical team.",
      "Ask your medical team, not an online calculator, what your cirrhosis score means for you.",
    ],
    tryThisWeek: [
      "Write down your symptoms.",
      "Gather your medicine packets.",
      "Ask about varices screening.",
    ],
    ask: "What did my tests show, and what does my score mean for me?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "lft", front: "Liver blood test", when: "Usually the first test", back: "Shows how your liver is doing and what other tests you might need. It cannot diagnose liver disease on its own." },
        { id: "ultrasound", front: "Ultrasound scan", when: "A picture of your liver", back: "Uses sound waves to build up a picture of your liver. It should not hurt." },
        { id: "fibroscan", front: "FibroScan", when: "Measures stiffness", back: "A quick, painless scan of how stiff your liver is. With cirrhosis the liver becomes very tough and knobbly." },
        { id: "ct-mri", front: "CT or MRI scan", when: "For a more detailed look", back: "May be used depending on your other test results." },
        { id: "biopsy", front: "Liver biopsy", when: "A small sample of liver", back: "A thin needle takes a sample to look at in a laboratory. Usually done in a day, with pain relief." },
        { id: "endoscopy", front: "Endoscopy", when: "To look for varices", back: "A thin tube with a camera looks inside your digestive system. It is also used in some treatments." },
        { id: "child-pugh", front: "Child-Pugh score", when: "If you have cirrhosis", back: "Puts cirrhosis into class A, B or C. Based on averages, so it cannot say exactly what will happen to you." },
      ],
    },
    sources: [LU_TESTS, NHS_ARLD, LU_VARICES, LU_OSTEO],
    quiz: {
      question: "Can a cirrhosis score tell you exactly what will happen to you?",
      options: [{ text: "No, scores are based on averages", right: true }, { text: "Yes, it is exact" }, { text: "Yes, if worked out online" }],
      why: "Scores are based on averages for lots of people. So they cannot tell you exactly what will happen to you.",
    },
  },
  {
    id: "cir-cause",
    kicker: "Treatment",
    question: "Can treating the cause stop cirrhosis getting worse?",
    hook: "The scarring stays, but taking away what caused it can stop more damage. For many people, that is the main treatment.",
    short: "Cirrhosis cannot be cured, but treating the cause can help slow it down or stop it getting worse. That can mean stopping alcohol, losing weight if needed, clearing or controlling a hepatitis virus, or calming an autoimmune condition. How it is treated depends on the cause, how severe it is and any complications.",
    sections: [
      {
        heading: "Why the cause matters",
        paragraphs: [
          "Cirrhosis cannot be cured, but there are treatments that can help slow it down or stop it getting worse. This usually involves treating the cause, for example antiviral medicines if it is caused by hepatitis B or C.",
          "How your condition is treated will depend on what has caused it, how severe it is and whether you have any complications. If you have compensated cirrhosis, stopping more damage to your liver can also stop your condition from getting worse.",
          "Even after cirrhosis develops, it is possible to stop it getting worse. This can help the liver to carry on doing all its important jobs.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "If you have liver cirrhosis, Liver UK says you should stop drinking alcohol, even if your condition was not caused by alcohol. If you struggle with alcohol dependency, talk to your medical team and find out what support is available in your area.",
          "If you regularly drink a lot, it can be dangerous to stop suddenly. You might be advised to reduce the amount slowly, so talk to your doctor or local alcohol services about a safe plan.",
        ],
      },
      {
        heading: "Weight, diabetes and cholesterol",
        paragraphs: [
          "Being overweight can cause liver disease. If it is found early, losing weight can help to stop or even reverse the damage, and your medical team can tell you about weight loss services in your area.",
          "With more severe liver disease, you might struggle to get all the energy and nutrients you need from food. If this happens, ask your medical team for personal advice, or a referral to a registered NHS dietitian. If you have diabetes or high cholesterol, it is important to control these.",
        ],
      },
      {
        heading: "Hepatitis viruses",
        paragraphs: [
          "In most cases the hepatitis C virus can be got rid of completely, by taking tablets every day for a few weeks. The NHS says treatment is antiviral tablets taken every day for 8 to 12 weeks, and it is important to finish the course.",
          "People with hepatitis B and cirrhosis can have medicines that keep the level of the virus very low. This can stop or slow down liver damage. There is no known cure for long-term hepatitis B, so regular check-ups with a liver specialist are needed.",
        ],
      },
      {
        heading: "Autoimmune and other conditions",
        paragraphs: [
          "In autoimmune conditions, your own immune system causes damage to your body. Treatments aim to turn down the immune system to stop or reduce the damage. The treatment depends on your condition and how much damage has been done.",
          "Alongside treating the cause, you usually also have treatment to prevent and treat complications. You will be supported by different healthcare professionals, which may include a liver specialist, a digestive system specialist, nutrition specialists and alcohol support services.",
        ],
      },
    ],
    helps: [
      "Stop drinking alcohol, even if alcohol did not cause your cirrhosis.",
      "If you regularly drink a lot, get medical help before you stop, as stopping suddenly can be dangerous.",
      "Ask your medical team about weight loss services, or a referral to a registered NHS dietitian.",
      "If you have hepatitis C, finish your course of antiviral tablets.",
      "Take any medicines you have been given for your liver condition.",
      "Do not smoke.",
    ],
    tryThisWeek: [
      "Ask what support there is to stop drinking.",
      "Ask about a dietitian.",
      "Take your liver medicines.",
    ],
    ask: "What is the main cause of my cirrhosis, and what treatment will tackle it?",
    interactive: {
      kind: "flip-cards",
      title: "Treating each cause",
      intro: "Turn each card to see how each cause can be tackled.",
      cards: [
        { id: "alcohol", front: "Alcohol", when: "Whatever caused your cirrhosis", back: "Stop drinking alcohol. If you drink a lot, get medical help first, as stopping suddenly can be dangerous." },
        { id: "weight", front: "Being overweight", when: "If found early", back: "Losing weight can help to stop or even reverse the damage. Ask about local weight loss services." },
        { id: "hep-c", front: "Hepatitis C", when: "A virus in the blood", back: "Antiviral tablets taken every day for 8 to 12 weeks cure the infection for most people." },
        { id: "hep-b", front: "Hepatitis B", when: "A long-term infection", back: "Medicines keep the level of the virus very low, which can stop or slow down liver damage." },
        { id: "autoimmune", front: "Autoimmune conditions", when: "The immune system causes damage", back: "Treatments aim to turn down the immune system to stop or reduce the damage." },
      ],
    },
    sources: [LU_TREATMENT, NHS_CIRRHOSIS, NHS_HEP_C, NHS_HEP_B, NHS_ARLD, LU_STAGES, LU_ALCOHOL_FAQS],
    quiz: {
      question: "If alcohol did not cause your cirrhosis, should you still stop drinking?",
      options: [{ text: "Yes, Liver UK says to stop even then", right: true }, { text: "No, it makes no difference" }, { text: "Only at weekends" }],
      why: "If you have liver cirrhosis, Liver UK says you should stop drinking alcohol, even if your condition was not caused by alcohol.",
    },
  },
  {
    id: "cir-complications",
    kicker: "Complications",
    question: "What are the complications of cirrhosis, such as fluid, bleeding and confusion?",
    hook: "You may never get them, but knowing the early signs means getting help fast if you do.",
    short: "Cirrhosis can cause complications when the body stops coping with the scarring. The main ones are fluid in the tummy (ascites), swollen veins that can bleed (varices) and confusion from toxins reaching the brain (hepatic encephalopathy). Not everyone gets them, and there are treatments for each.",
    sections: [
      {
        heading: "Why complications happen",
        paragraphs: [
          "Cirrhosis is considered decompensated when any serious complications develop. These can affect other parts of your body, including your blood, other organs and immune system. They can be very serious, but not everyone will experience them.",
          "Scarring makes it hard for blood to pass through the liver normally, so pressure builds up in a major vein coming into it. This is called portal hypertension. It usually has no symptoms of its own in the early stages, but it is involved in the development of varices and ascites.",
        ],
      },
      {
        heading: "Fluid in the tummy: ascites",
        paragraphs: [
          "Ascites is a build-up of fluid in your belly. It can be very uncomfortable, and it can push on other organs and make it hard to eat or breathe. Early on, you might feel or see a new heavy, sagging weight around your middle.",
          "In most cases ascites can be controlled with medicine, such as a diuretic, which makes you pee more, and by cutting down on salt. Sometimes the fluid needs to be drained in hospital, which is called paracentesis, but it often comes back.",
          "Sometimes the fluid in the belly can become infected and needs antibiotics. Fever and pain in your belly could mean you have an infection.",
        ],
      },
      {
        heading: "Swollen veins that can bleed: varices",
        paragraphs: [
          "Varices are small veins in your digestive system, usually in the food pipe, that have become swollen because of cirrhosis. They do not usually cause symptoms, but they can leak or burst, causing serious bleeding. You might vomit blood, or your poo might look black and tarry.",
          "Varices can be treated to stop them bleeding. Treatments include a medicine called a beta-blocker to lower the pressure, and banding, where tiny rubber bands are fixed around the veins during an endoscopy. Drinking alcohol increases the pressure in varices and can cause bleeding.",
        ],
      },
      {
        heading: "Confusion: hepatic encephalopathy",
        paragraphs: [
          "Hepatic encephalopathy, or HE, happens when the liver can no longer remove toxins from the blood, so they build up and get into the brain. It can cause memory problems, confusion and sleepiness, and sometimes it can seem to change someone's personality.",
          "HE can come and go. Episodes can be triggered by things like dehydration, constipation, infections, bleeding, kidney problems and certain medicines, including some painkillers and sleeping medicines.",
          "A laxative called lactulose helps by making poo softer, so some of the toxin-making bacteria come out too. The aim is 2 to 3 poos a day. An antibiotic that only works in the gut, called rifaximin, may also be used. Always talk to your doctor before you stop taking either medicine.",
        ],
      },
      {
        heading: "Other complications",
        paragraphs: [
          "Other complications include infections, jaundice, low platelets that can cause problems with bleeding, weakened and fragile bones, not getting enough nutrients, and liver cancer.",
          "You may never develop these complications, but it is a good idea to be aware of them. They can develop very quickly, and knowing about them in advance will mean that you know what to look out for.",
        ],
      },
    ],
    helps: [
      "Find out about the symptoms of varices and ascites, and who to contact if you are worried.",
      "Share information about HE with close family and friends, as they often notice the signs first.",
      "Ask your medical team about screening for varices.",
      "Take any medicines prescribed exactly as instructed, and talk to your doctor before stopping lactulose or rifaximin.",
      "Tell your doctor straight away if lactulose gives you diarrhoea, as dehydration can trigger HE.",
      "Do not drink alcohol.",
    ],
    tryThisWeek: [
      "Learn the signs of each complication.",
      "Tell family about the signs of HE.",
      "Ask about varices screening.",
    ],
    ask: "Which complications am I at risk of, and who do I call if one starts?",
    interactive: {
      kind: "scenarios",
      title: "If a complication starts",
      scenarios: [
        {
          id: "swelling",
          situation: "Your tummy has started to swell and feels heavy.",
          options: [{ text: "Contact your doctor as soon as possible", best: true }, { text: "Wait to see if it goes down" }],
          why: "If you have a liver condition, contact your doctor as soon as possible if you get a swollen or extended belly.",
        },
        {
          id: "confused",
          situation: "Your partner says you seem confused and are sleeping in the day.",
          options: [{ text: "Get in touch with your medical team straight away", best: true }, { text: "Drive yourself to the clinic" }, { text: "Wait a week" }],
          why: "Get in touch with your medical team straight away if you or those close to you notice these symptoms. Do not drive yourself to any appointments.",
        },
        {
          id: "vomit-blood",
          situation: "You vomit blood.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Book a GP appointment" }],
          why: "A variceal bleed is an emergency. Go to A&E or call an ambulance straight away.",
        },
        {
          id: "diarrhoea",
          situation: "Lactulose is giving you diarrhoea.",
          options: [{ text: "Tell your doctor straight away", best: true }, { text: "Stop taking it on your own" }],
          why: "Diarrhoea can cause dehydration, which can trigger HE. Always talk to your doctor before you stop taking your medicine.",
        },
      ],
    },
    sources: [LU_TREATMENT, NHS_CIRRHOSIS, LU_HE, LU_ASCITES, LU_VARICES, LU_PORTAL, LU_CAUSES, NHS_LACTULOSE],
    quiz: {
      question: "What is the aim when taking lactulose for HE?",
      options: [{ text: "2 to 3 poos a day", right: true }, { text: "One poo a week" }, { text: "No poo at all" }],
      why: "Your doctor will help you to find the right amount of lactulose. The aim is to have 2 to 3 poos a day.",
    },
  },
  {
    id: "cir-medicines",
    kicker: "Medicines",
    question: "Which medicines and painkillers are safe with cirrhosis?",
    hook: "A scarred liver handles medicines differently. Check before taking anything new, including herbal remedies, and do not just put up with symptoms.",
    short: "Cirrhosis can affect how some medicines work and how long they stay in the body. Check with a pharmacist or doctor before taking any medicine, including herbal medicines, and tell every medical team that you have cirrhosis. Some painkillers and sleeping medicines can trigger confusion, but that should not mean putting up with symptoms.",
    sections: [
      {
        heading: "Why medicines need care",
        paragraphs: [
          "Cirrhosis can affect how some medicines work and how long they stay in your body. One of the liver's jobs is breaking down medicines. If it is not working properly, medicines can build up in the body, which can be serious and cause more damage to the liver.",
          "The NHS says to check with a pharmacist or doctor before taking any medicines, including herbal medicines, as they may not be suitable if you have cirrhosis. If you are prescribed a new medicine, ask the doctor to check with your liver team or a specialist pharmacist before you start. You might start on a low dose and slowly increase it.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "Most adults can take paracetamol, but the NHS says it may not be suitable if you have a liver condition, or if you are dependent on alcohol. Check the packet or leaflet, and speak to a pharmacist or doctor if you are not sure.",
          "Anti-inflammatory painkillers, called NSAIDs, include ibuprofen and aspirin, which can be bought without a prescription. They can sometimes cause stomach ulcers or bleeding inside the stomach, and kidney problems.",
          "Liver UK says some painkillers and sleeping medicines, and water tablets called diuretics, can trigger episodes of hepatic encephalopathy. Speak to your clinical team if you think you are likely to be affected.",
        ],
      },
      {
        heading: "Not putting up with symptoms",
        paragraphs: [
          "Talk to your medical team if you are struggling with itching, tiredness or pain. Doctors are sometimes unsure which medicines are safe with cirrhosis, but this should not mean that you just have to put up with symptoms.",
          "You could ask your doctor to speak to a specialist liver doctor, called a hepatologist, or a specialist pharmacist. You could also ask whether a palliative care team could help, as palliative care is not just for the end of life.",
        ],
      },
      {
        heading: "Herbal remedies and supplements",
        paragraphs: [
          "Herbal remedies, traditional Chinese medicine and natural remedies can sometimes be dangerous for people with a liver condition. Some can change the way other medicines work, and you might not know how strong they are.",
          "Supplements containing vitamin A, green tea extract and kava have been reported as causing liver damage, and weight loss supplements can contain herbs that damage the liver. There is not enough evidence to say that milk thistle works. If you have cirrhosis, your liver team can tell you if any supplements are needed.",
        ],
      },
      {
        heading: "Telling every team",
        paragraphs: [
          "If you are seeing a medical team about a different condition, they might not know you have cirrhosis. Tell them about it, and about any treatment or medicines you are having. If you need an operation, cirrhosis can affect which medicines you can take before and after it.",
          "Some prescription and over-the-counter medicines have a high salt content, which matters if you are cutting down on salt. If the sodium content on the label is not clear, your pharmacist or doctor should be able to advise you.",
        ],
      },
    ],
    helps: [
      "Check with a pharmacist or doctor before taking any medicine, including herbal medicines.",
      "Ask the doctor to check with your liver team or a specialist pharmacist before starting a new prescribed medicine.",
      "Check the packet or leaflet before taking paracetamol, and ask a pharmacist or doctor if you are not sure.",
      "Talk to your medical team about itching, tiredness or pain, rather than putting up with it.",
      "Always talk to your doctor before trying any herbal remedy, supplement or milk thistle.",
      "Tell any medical team treating you for another condition that you have cirrhosis, and what medicines you take.",
    ],
    tryThisWeek: [
      "Check with a pharmacist first.",
      "Ask for help with pain or itching.",
      "Tell other teams about your cirrhosis.",
    ],
    ask: "Which painkillers and other medicines are safe for me, and at what dose?",
    interactive: {
      kind: "flip-cards",
      title: "Before you take it",
      intro: "Turn each card to see what the sources say.",
      cards: [
        { id: "paracetamol", front: "Paracetamol", when: "For pain", back: "May not be suitable with a liver condition. Check the leaflet and ask a pharmacist or doctor." },
        { id: "nsaids", front: "Ibuprofen and aspirin", when: "Anti-inflammatory painkillers", back: "Can sometimes cause stomach bleeding and kidney problems. Ask a pharmacist or doctor first." },
        { id: "sleeping", front: "Sleeping medicines", when: "For sleep problems", back: "Some can trigger hepatic encephalopathy. Speak to your clinical team." },
        { id: "herbal", front: "Herbal remedies", when: "Bought without a prescription", back: "Can be dangerous with a liver condition, and can change how other medicines work." },
        { id: "milk-thistle", front: "Milk thistle", when: "Sold for liver health", back: "Not enough evidence that it works. Talk to your doctor before trying it." },
        { id: "new-medicine", front: "A new prescription", when: "From any doctor", back: "Ask them to check with your liver team or a specialist pharmacist before you start." },
      ],
    },
    sources: [NHS_CIRRHOSIS, LU_LIVING, LU_HE, LU_TREATMENT, LU_ALTERNATIVE, LU_SUPPLEMENTS, NHS_PARACETAMOL, NHS_NSAIDS, LU_DIET, LU_SURGERY],
    quiz: {
      question: "What should you do before taking a herbal medicine with cirrhosis?",
      options: [{ text: "Check with a pharmacist or doctor", right: true }, { text: "Nothing: herbal means safe" }, { text: "Take a double dose" }],
      why: "Check with a pharmacist or doctor before taking any medicines, including herbal medicines, as they may not be suitable if you have cirrhosis.",
    },
  },
  {
    id: "cir-transplant",
    kicker: "Transplant",
    question: "Could I need a liver transplant, and what does it involve?",
    hook: "The only cure for cirrhosis, but not for everyone. Assessment, waiting and recovery each take time and support.",
    short: "A liver transplant is the only way to completely cure cirrhosis. It is a major operation, so a team of specialists first checks whether it is safe and likely to help. After a successful transplant many people have long and active lives, with medicines and check-ups for the rest of their life.",
    sections: [
      {
        heading: "The only cure",
        paragraphs: [
          "The only way to completely cure liver cirrhosis is a liver transplant. It is an operation where a diseased liver is removed and replaced by a liver from a donor.",
          "It is a very big operation, so not everyone will be able to have a transplant, and there can be a long wait for a donor. But after a successful transplant many people can have long and active lives.",
        ],
      },
      {
        heading: "Who it may help",
        paragraphs: [
          "A transplant may be suitable for people with decompensated cirrhosis, people with compensated cirrhosis who develop liver cancer, and people with sudden liver failure. To be able to have one, the benefits of the operation must outweigh the risks.",
          "The main disadvantages are that it is a major operation lasting 5 to 8 hours, and powerful medicines are needed afterwards. It may not be right for someone too ill or frail to cope with the surgery, or who has recently had cancer, a serious infection, a heart attack or a stroke.",
          "If you have alcohol-related or drug-related liver disease, you will need to address this before you can go on the waiting list. Your transplant team can support you, and the most important thing is to be open and honest with them.",
        ],
      },
      {
        heading: "The assessment",
        paragraphs: [
          "Before you can go on the waiting list, a team of transplant specialists assesses whether a transplant will be safe and effective for you. It usually involves a number of tests over about 2 days, such as blood tests, heart and lung checks, fitness tests, scans and an endoscopy.",
          "A psychologist, psychiatrist or addictions nurse will also ask about your health and life. There are no right or wrong answers: the team wants to understand your circumstances so it can offer support. You will usually have the decision within a week.",
          "In the UK, the UKELD score, worked out from blood tests, is one of the things used to decide who goes on the waiting list.",
        ],
      },
      {
        heading: "Waiting for a liver",
        paragraphs: [
          "The waiting list is not like a queue. A liver is given to the person in greatest need, with the best chance of success and the most benefit from that particular liver. You will have a review with your transplant team every 6 weeks or so.",
          "While you wait, go to all your appointments, take your medicines as instructed, eat a well-balanced diet, keep active, and do not smoke, drink alcohol or use drugs. Keep a bag packed and stay close enough to home to get to hospital quickly when the call comes, which can be at any time, day or night.",
        ],
      },
      {
        heading: "Life after a transplant",
        paragraphs: [
          "It can take up to a year to recover. For the first 2 to 3 months, check-ups at the transplant centre will probably be about once a week, and then less often.",
          "You will need to take medicines called immunosuppressants, usually for the rest of your life, to stop your body rejecting the new liver. If you miss any doses, tell your transplant team straight away.",
          "Most people who have a liver transplant say they have more energy and feel more able to cope with work and everyday activities. Once recovered, you should be able to work, drive, play sports and go on holiday.",
        ],
      },
    ],
    helps: [
      "Speak to your clinical team if you would like to explore whether a liver transplant is an option for you.",
      "Be open and honest with your medical team, including about alcohol or drug use, so they can support you.",
      "While you wait for your assessment, do some physical activity every day to practise for the fitness tests.",
      "While on the waiting list, go to every appointment, take your medicines as instructed and keep a bag packed.",
      "Tell your transplant coordinator if your contact details, health or medicines change.",
      "After a transplant, take the right dose of your medicines at the right time every day, and go to every clinic appointment.",
    ],
    tryThisWeek: [
      "Ask if a transplant could be an option.",
      "Do some activity every day.",
      "Keep your contact details up to date.",
    ],
    ask: "Could a liver transplant be an option for me, and when should we talk about it?",
    interactive: {
      kind: "timeline",
      title: "The road to a transplant",
      steps: [
        { id: "assessment", when: "First", title: "Assessment", points: ["Tests over about 2 days", "A team of specialists decides", "A decision usually within a week"] },
        { id: "list", when: "If approved", title: "The waiting list", points: ["A liver goes to the person in greatest need", "Reviews every 6 weeks or so", "Monthly blood tests with your GP"] },
        { id: "call", when: "Any time, day or night", title: "The call", points: ["Go to the transplant centre straight away, but safely", "Your surgeon makes the final decision on the liver"] },
        { id: "operation", when: "The operation", title: "Surgery", points: ["A major operation lasting 5 to 8 hours", "The diseased liver is replaced with a donor liver"] },
        { id: "recovery", when: "Up to a year", title: "Recovery", points: ["Check-ups about once a week at first", "Immunosuppressant medicines, usually for life", "Most people return to most of their normal activities"] },
      ],
    },
    sources: [LU_TREATMENT, NHSBT_LIVER, NHSBT_WHO, LU_TX_WHO, LU_TX_ASSESS, LU_TX_WAIT, LU_TX_LIFE, NHSBT_BENEFITS, LU_TESTS, NHSBT_MEDICINES],
    quiz: {
      question: "How is a donor liver given out in the UK?",
      options: [{ text: "To the person in greatest need, with the best chance of success", right: true }, { text: "First come, first served" }, { text: "To whoever has waited longest" }],
      why: "The waiting list is not like a queue. A liver is given to the person in greatest need, with the best chance of success and the most benefit from that particular liver.",
    },
  },
  {
    id: "cir-food",
    kicker: "Living well",
    question: "What should I eat with cirrhosis?",
    hook: "Not less, but more often: enough energy and protein to protect your muscles, and less salt if fluid builds up.",
    short: "With cirrhosis, you usually need enough energy and protein, and not too much salt, to stop you becoming malnourished and losing muscle. Eating little and often, with a snack before bed, helps. A registered dietitian can give advice that is specific to you.",
    sections: [
      {
        heading: "Why food matters",
        paragraphs: [
          "Having cirrhosis usually means you will need to make some changes to your diet. As well as eating healthily, you may need special advice to make sure you get enough energy and protein, and not too much salt. This is important to stop you becoming malnourished and losing muscle.",
          "Around 2 in 10 people with compensated cirrhosis are malnourished, rising to more than 5 in 10 with decompensated cirrhosis. Complications of cirrhosis can mean that it is not always obvious, so your medical team should check if you are at risk.",
        ],
      },
      {
        heading: "Little and often",
        paragraphs: [
          "People with cirrhosis often eat little and often. Eating more often means your body does not start breaking down the protein in your muscles for energy.",
          "Instead of three main meals, aim to eat something every 2 to 3 hours, and have a snack before bedtime. This should be something high in starchy carbohydrates, such as cereal, porridge, rice pudding or shortbread.",
        ],
      },
      {
        heading: "Enough protein",
        paragraphs: [
          "With cirrhosis, the liver can no longer store a form of carbohydrate it needs for energy, so you often need more energy and protein. Protein comes from beans and pulses, nuts, eggs, cheese and other dairy, fish, and meats such as chicken, turkey and lean cuts.",
          "People with hepatic encephalopathy should also eat more protein. In the past, people were advised to cut down on protein, but it is now known that this is wrong. It can help to spread protein out over the day.",
          "If you are overweight, you may be advised to lose weight. This should be done by cutting down on fat and carbohydrate, while keeping protein high and being more active, so you do not lose muscle.",
        ],
      },
      {
        heading: "Less salt if fluid builds up",
        paragraphs: [
          "Cirrhosis can affect the balance of water and salt in the body, leading to swelling of the feet and legs, or fluid in the tummy called ascites. Cutting down on salt, such as following a no added salt diet, can help reduce the build-up of fluid.",
          "Do not add salt at the table, and avoid very salty foods such as ham, bacon, sausages, yeast extracts, smoked fish and fish tinned in brine. Pepper, vinegar, lemon juice, herbs and spices can add flavour instead.",
          "Some low-salt products contain other ingredients, such as potassium, that you should not have too much of. So if you are cutting down on salt, it is very important to get advice from a registered dietitian.",
        ],
      },
      {
        heading: "Muscles and bones",
        paragraphs: [
          "Cirrhosis can lead to muscle wasting. Being physically active is an important way to help keep your muscles and body strong. Do what you can manage each day: doing something, even something small, is much better than nothing.",
          "People with cirrhosis have a higher risk of osteoporosis, so it is important to get enough calcium and vitamin D. Talk to your medical team before taking any extra vitamins or supplements.",
        ],
      },
    ],
    helps: [
      "Ask your doctor to refer you to a dietitian for advice that is specific to you.",
      "Eat something every 2 to 3 hours, and have a starchy snack before bedtime.",
      "Include protein through the day, such as beans, eggs, cheese, fish or chicken.",
      "If you have been told to cut down on salt, do not add it at the table, and avoid products with a red light for salt.",
      "Ask your pharmacist or doctor about the salt in your medicines if the label is not clear.",
      "Be as active as you can manage each day.",
    ],
    tryThisWeek: [
      "Add a snack before bed.",
      "Eat every 2 to 3 hours.",
      "Ask for a dietitian referral.",
    ],
    ask: "Am I at risk of malnutrition, and can I see a dietitian?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "bedtime",
          situation: "You have had your evening meal and are going to bed later.",
          options: [{ text: "Have a starchy snack, such as cereal or porridge", best: true }, { text: "Go to bed without eating" }],
          why: "Eat a snack before bedtime. This should be something high in starchy carbohydrates such as cereal, porridge, rice pudding or shortbread.",
        },
        {
          id: "protein-he",
          situation: "You have HE, and someone tells you to cut down on protein.",
          options: [{ text: "Keep eating protein, spread over the day", best: true }, { text: "Cut protein right down" }],
          why: "In the past, people were advised to cut down on protein. It is now known that this is wrong.",
        },
        {
          id: "salt",
          situation: "You have been told to cut salt, and your mashed potato tastes bland.",
          options: [{ text: "Try mustard powder or nutmeg", best: true }, { text: "Add salt at the table" }],
          why: "Mustard powder or nutmeg with mashed potato can add flavour without salt.",
        },
        {
          id: "skip",
          situation: "You are busy and thinking of skipping lunch.",
          options: [{ text: "Have something small: little and often", best: true }, { text: "Skip it and wait for dinner" }],
          why: "Eating more often means your body does not start breaking down the protein in your muscles for energy.",
        },
      ],
    },
    sources: [LU_DIET, NHS_CIRRHOSIS, LU_LIVING, LU_HE, LU_ASCITES, LU_ACTIVITY, LU_OSTEO],
    quiz: {
      question: "Should people with hepatic encephalopathy cut down on protein?",
      options: [{ text: "No, they should eat more protein", right: true }, { text: "Yes, as little as possible" }, { text: "Yes, they should stop eating meat" }],
      why: "People with hepatic encephalopathy should also eat more protein. In the past, people were advised to cut down on protein, but it is now known that this is wrong.",
    },
  },
  {
    id: "cir-alcohol",
    kicker: "Living well",
    question: "Do I need to stop drinking alcohol with cirrhosis?",
    hook: "The advice is to stop, whatever caused it. Stopping takes pressure off the liver, and help is there if it is hard.",
    short: "The NHS and Liver UK both say not to drink alcohol if you have cirrhosis, even if alcohol was not the cause. Stopping gives the liver a chance to use its natural ability to repair. If you drink a lot, get medical help first, as stopping suddenly can be dangerous.",
    sections: [
      {
        heading: "Why stop",
        paragraphs: [
          "If you have liver cirrhosis, Liver UK says you should stop drinking alcohol, even if your condition was not caused by alcohol. The NHS also says not to drink alcohol if you have cirrhosis.",
          "If your liver is already damaged, drinking alcohol adds to that damage and makes it harder for the liver to heal. Stopping or cutting down takes the pressure off and gives your liver a chance to use its natural ability to repair.",
          "Drinking alcohol also increases the pressure in varices and can cause bleeding. Whatever the cause of your liver condition, Liver UK says not to drink alcohol if you have portal hypertension.",
        ],
      },
      {
        heading: "Stopping safely",
        paragraphs: [
          "If you regularly drink too much alcohol, it can be very dangerous to stop drinking suddenly. Get medical help before you try to stop drinking.",
          "Physical withdrawal symptoms include shaking, sweating or feeling anxious until you have your first drink of the day. You might be advised to reduce the amount slowly, so talk to your doctor or local alcohol services about a safe plan.",
          "If stopping completely is not possible for you right now, cutting down can still help. It is a positive step towards helping your liver.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "Cutting down on alcohol can be hard, and lots of people struggle. If you are one of them, it is nothing to feel ashamed or embarrassed about. Getting help means you are more likely to succeed.",
          "Your GP should be used to talking about this, and can refer you to local alcohol services. Support may include talking therapies, medicines to help you stop safely or reduce cravings, and support groups.",
          "Drinkline is a free, confidential national alcohol helpline on 0300 123 1110. If you need urgent help, you can call Samaritans at any time on 116 123.",
        ],
      },
      {
        heading: "Alcohol-free drinks",
        paragraphs: [
          "Even drinks labelled alcohol free can have a very small amount of alcohol in them, and low alcohol drinks can have more. So they are not suitable if it is vital that you completely stop, for example if you are on the transplant waiting list.",
          "Some people who have stopped drinking find alcohol-free drinks a good alternative, while for others the taste and smell increase cravings. If you have dealt with alcohol dependency, it is best to avoid drinks that are an alcohol substitute, so speak to your medical team if you are unsure.",
        ],
      },
      {
        heading: "Social situations",
        paragraphs: [
          "It is up to you whether you tell people about your condition, and it is ok to just say no thanks to a drink. Some people prefer to say they cannot drink because of a medicine they are taking.",
          "It can help to pick 1 or 2 people you feel happy to talk to, and ask them to help you out when there is pressure to drink. More and more people are choosing to cut down, so there is a good chance others will respect your decision.",
        ],
      },
    ],
    helps: [
      "Do not drink alcohol, whatever caused your cirrhosis.",
      "If you regularly drink a lot, get medical help before you try to stop.",
      "Speak to your GP, who can refer you to local alcohol services.",
      "Call Drinkline, free and in confidence, on 0300 123 1110.",
      "Check with your medical team before choosing alcohol-free drinks.",
      "Pick 1 or 2 people to help you out when there is pressure to drink.",
    ],
    tryThisWeek: [
      "Talk to your GP about stopping.",
      "Save the Drinkline number.",
      "Pick someone to support you.",
    ],
    ask: "What support is there to help me stop drinking safely?",
    interactive: {
      kind: "scenarios",
      title: "Moments with a drink",
      scenarios: [
        {
          id: "not-the-cause",
          situation: "Your cirrhosis was not caused by alcohol, and you are offered a glass of wine.",
          options: [{ text: "Say no thanks", best: true }, { text: "One glass will not matter" }],
          why: "If you have liver cirrhosis, you should stop drinking alcohol, even if your condition was not caused by alcohol.",
        },
        {
          id: "stop-today",
          situation: "You drink heavily every day and want to stop today.",
          options: [{ text: "Get medical help before stopping", best: true }, { text: "Stop suddenly on your own" }],
          why: "If you regularly drink too much alcohol, it can be very dangerous to stop drinking suddenly.",
        },
        {
          id: "alcohol-free",
          situation: "You are on the transplant waiting list and fancy an alcohol-free beer.",
          options: [{ text: "Check with your team first", best: true }, { text: "Drink it: it has no alcohol" }],
          why: "Even drinks labelled alcohol free can have a very small amount of alcohol in them, so they are not suitable if it is vital that you completely stop.",
        },
        {
          id: "slip",
          situation: "You had a drink after weeks without one.",
          options: [{ text: "Keep going, and ask for support", best: true }, { text: "Give up trying" }],
          why: "Don't stress over a small mistake; nobody is perfect all the time. Just keep moving forward.",
        },
      ],
    },
    sources: [LU_TREATMENT, NHS_CIRRHOSIS, LU_ALCOHOL_FAQS, LU_ALCOHOL, NHS_ARLD, LU_VARICES, LU_PORTAL],
    quiz: {
      question: "Why should someone who drinks heavily get help before stopping?",
      options: [{ text: "Stopping suddenly can be very dangerous", right: true }, { text: "It makes no difference" }, { text: "Help is only for people with no symptoms" }],
      why: "If you regularly drink too much alcohol, it can be very dangerous to stop drinking suddenly. Get medical help before you try to stop drinking.",
    },
  },
  {
    id: "cir-checks",
    kicker: "Follow-up",
    question: "Which regular checks and scans do I need with cirrhosis?",
    hook: "A scan every 6 months, checks for varices and bones, and your vaccines. Each one aims to catch problems early.",
    short: "Most people with cirrhosis should have an ultrasound scan for liver cancer every 6 months, called surveillance. You should also have checks for varices and for your bones, and stay up to date with vaccines. Ask your medical team about any check you have not been offered.",
    sections: [
      {
        heading: "Why regular checks matter",
        paragraphs: [
          "Cirrhosis is the most common cause of liver cancer. But liver cancer takes many years to develop, and it is treatable if found early. Doctors use regular checks called surveillance to help find it early.",
          "Most people with cirrhosis should have a surveillance ultrasound scan every 6 months. Because the checks aim to find liver cancer as soon as possible, it is important to take part every time, even if you feel okay. Ask your medical team if they do not offer it.",
        ],
      },
      {
        heading: "What happens at the scan",
        paragraphs: [
          "Liver cancer checks are usually organised by your local hospital liver unit, and you should get an invitation letter a few weeks before. A liver ultrasound scan will normally be included, and some hospitals also do a blood test for a marker called AFP.",
          "The ultrasound takes about 15 to 30 minutes and does not hurt. It is important not to eat or drink for a few hours before. If this will be a problem, for example if you live with diabetes, contact the liver unit for advice.",
          "You should get your results within 1 month. If this does not happen, contact your doctor.",
        ],
      },
      {
        heading: "Checks for varices",
        paragraphs: [
          "Everyone with cirrhosis should have checks to see if they are at risk of varices. This might be an endoscopy, or some hospitals first do a blood test and a FibroScan.",
          "If these tests show a low risk, you may not need an endoscopy, and the blood test and scan are repeated after a year. If an endoscopy finds no varices, another check should follow in 2 to 3 years. If small varices are found, the next check should be in 1 to 2 years, or you might be given a medicine.",
        ],
      },
      {
        heading: "Bones and vaccines",
        paragraphs: [
          "Cirrhosis can increase your risk of osteoporosis, where bones break more easily. Your medical team should calculate your risk, and you might be offered a bone density scan, which is a type of X-ray.",
          "Cirrhosis can affect your immune system, so you could be more at risk from infections like flu. The NHS says to stay up to date with vaccinations, such as the flu vaccine and pneumococcal vaccine. People with long-term liver disease should also get vaccines for hepatitis A and hepatitis B.",
          "You might not be able to have some vaccines called live vaccines, so ask your medical team which vaccines you should have, and when.",
        ],
      },
      {
        heading: "Your care team",
        paragraphs: [
          "You should have a named consultant in charge of your care, ideally at a hospital with a specialist liver department. In many hospitals you will also have a clinical nurse specialist, who is often easier to contact between appointments.",
          "Find out how often you should have an appointment and when the next one will be. Ask who to contact if you have a problem before then, and make a note of it where you can easily find it.",
        ],
      },
    ],
    helps: [
      "Go to every liver cancer surveillance scan, even if you feel okay.",
      "Ask your medical team about surveillance if they do not offer it.",
      "Contact your doctor if you do not get your scan results within 1 month.",
      "If you have not been offered screening for varices, speak to your medical team.",
      "Ask your doctor or nurse whether you need a bone density test.",
      "Ask your medical team which vaccines you should have, and when.",
    ],
    tryThisWeek: [
      "Check when your next scan is due.",
      "Ask about varices and bone checks.",
      "Ask which vaccines you need.",
    ],
    ask: "Which checks am I due, and who arranges them?",
    interactive: {
      kind: "timeline",
      title: "Your checks over time",
      steps: [
        { id: "six-months", when: "Every 6 months", title: "Liver cancer surveillance", points: ["An ultrasound scan of your tummy", "Some hospitals add an AFP blood test", "Results within 1 month"] },
        { id: "one-year", when: "After a year", title: "Low risk of varices", points: ["The blood test and FibroScan are repeated"] },
        { id: "one-to-two", when: "In 1 to 2 years", title: "Small varices found", points: ["Another check, or a medicine to lower the pressure"] },
        { id: "two-to-three", when: "In 2 to 3 years", title: "No varices found", points: ["Another check for varices"] },
        { id: "autumn", when: "Every autumn", title: "Flu vaccine", points: ["People with long-term liver disease have a higher risk from flu"] },
      ],
    },
    sources: [LU_SURVEILLANCE, LU_TREATMENT, LU_LIVING, LU_VARICES, LU_OSTEO, LU_VACCINES, NHS_CIRRHOSIS],
    quiz: {
      question: "How often do most people with cirrhosis have a liver cancer surveillance scan?",
      options: [{ text: "Every 6 months", right: true }, { text: "Every 10 years" }, { text: "Only when there are symptoms" }],
      why: "Most people with cirrhosis should have a surveillance ultrasound scan every 6 months.",
    },
  },
  {
    id: "cir-urgent",
    kicker: "Urgent help",
    question: "Which warning signs mean I should call 999 or get urgent help?",
    hook: "Vomiting blood, black poo and sudden confusion are emergencies. Knowing the signs, and who to call, saves time.",
    short: "If you have cirrhosis and you are vomiting blood, your poo is very dark or black, or you suddenly become confused or have slurred speech, call 999 or go to A&E. The NHS says yellow skin or eyes, difficulty breathing or swelling need an urgent GP appointment or NHS 111. Signs of an infection, such as a high temperature and shivers, need urgent medical help too.",
    sections: [
      {
        heading: "Call 999 or go to A&E",
        paragraphs: [
          "The NHS says to call 999 or go to A&E if you have been diagnosed with cirrhosis and you are vomiting blood, your poo is very dark or black, or you suddenly become confused or have slurred speech.",
          "Liver UK also lists feeling like you cannot get enough air when you breathe, finding it hard to stay awake, and jaundice that is new to you as reasons to go to A&E straight away or call 999. They might not be caused by cirrhosis, but it is important to get checked out.",
          "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance. Bring any medicines you take with you.",
        ],
      },
      {
        heading: "Bleeding from varices",
        paragraphs: [
          "A variceal bleed is an emergency. Signs include vomiting blood, and black, tarry or bloody poo. Losing a lot of blood quickly can cause shock, with fast, shallow breathing, a fast heart rate, cold, clammy, pale skin, and dizziness, fainting or weakness.",
          "If you have signs of a variceal bleed or of shock, go to A&E or call an ambulance straight away. Tell the 999 call handler that you may have a variceal bleed.",
        ],
      },
      {
        heading: "Confusion and sleepiness",
        paragraphs: [
          "If you or those close to you notice milder signs of hepatic encephalopathy, such as confusion, forgetfulness or changes to sleep, get in touch with your medical team straight away. Do not drive yourself to any appointments.",
          "With more severe signs, such as feeling very confused, slurred speech or shaking hands, go to a hospital emergency department. If someone is not responding or finds it hard to stay conscious, call 999 or go to an emergency department straight away. Tell them you have or may have HE, and ask them to let your liver team know.",
        ],
      },
      {
        heading: "Urgent GP or NHS 111",
        paragraphs: [
          "The NHS says to ask for an urgent GP appointment or get help from NHS 111 if you have cirrhosis and your skin or the whites of your eyes look yellow, you have difficulty breathing or are more short of breath than usual, or you have a swollen tummy, legs, ankles or feet. You can call 111 or get help from 111 online.",
          "It is also important to get urgent medical help if you have signs of an infection, including a high temperature and shivers. Fever and pain in your belly could mean an infection in ascites fluid.",
        ],
      },
      {
        heading: "Being ready",
        paragraphs: [
          "Ask your medical team which red flag symptoms you should look out for, and what to do if they happen. It might help to share this information with those closest to you, so they know what to do in an emergency.",
          "If you have HE, carry an alert card or medical bracelet so doctors will know about it in an emergency. You could give a copy of the card to a family member or carer, and some smartphones have an In Case of Emergency app where you can put this information.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E if you are vomiting blood, your poo is very dark or black, or you suddenly become confused or have slurred speech.",
      "Do not drive yourself to A&E: ask someone to drive you, or call 999 and ask for an ambulance.",
      "Bring any medicines you take with you.",
      "Tell the 999 call handler if you may have a variceal bleed.",
      "Ask for an urgent GP appointment or get help from NHS 111 for yellow skin or eyes, difficulty breathing or swelling.",
      "If you have HE, carry an alert card or medical bracelet.",
    ],
    tryThisWeek: [
      "Learn the 999 signs.",
      "Plan who would drive you.",
      "Carry an alert card if you have HE.",
    ],
    ask: "Which warning signs should I watch for, and who should I call first?",
    interactive: {
      kind: "scenarios",
      title: "Who to call",
      scenarios: [
        {
          id: "vomit",
          situation: "You have cirrhosis and you vomit blood.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Ask for a GP appointment next week" }, { text: "Wait to see if it happens again" }],
          why: "Call 999 or go to A&E if you have been diagnosed with cirrhosis and you are vomiting blood.",
        },
        {
          id: "black-poo",
          situation: "Your poo is very dark and black.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait a few days" }],
          why: "Call 999 or go to A&E if you have cirrhosis and your poo is very dark or black.",
        },
        {
          id: "swelling",
          situation: "Your ankles and tummy have become swollen.",
          options: [{ text: "Ask for an urgent GP appointment or contact NHS 111", best: true }, { text: "Ignore it" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you have a swollen tummy, legs, ankles or feet.",
        },
        {
          id: "driving",
          situation: "You need to get to A&E and your car is outside.",
          options: [{ text: "Ask someone to drive you, or call 999", best: true }, { text: "Drive yourself" }],
          why: "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        },
        {
          id: "fever",
          situation: "You have a high temperature and shivers.",
          options: [{ text: "Get urgent medical help", best: true }, { text: "Sleep it off" }],
          why: "It is also important to get urgent medical help if you have signs of an infection, including a high temperature and shivers.",
        },
      ],
    },
    sources: [NHS_CIRRHOSIS, LU_SYMPTOMS, LU_VARICES, LU_HE, LU_ASCITES, LU_LIVING],
    quiz: {
      question: "How should you get to A&E with cirrhosis and black poo?",
      options: [{ text: "Ask someone to drive you, or call 999", right: true }, { text: "Drive yourself" }, { text: "Wait until the morning" }],
      why: "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
    },
  },
];
