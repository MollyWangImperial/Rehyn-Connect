import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Hepatitis B and C page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Liver UK
// (the new name for the British Liver Trust; britishlivertrust.org.uk now redirects to liveruk.org) and The
// Hepatitis C Trust, with NHS England's pregnancy screening leaflet on the government's website. Where the
// sources differ (the year blood transfusions became safe from hepatitis C: the NHS says 1996, Liver UK
// says 1991), the NHS date is used. General information only; it never replaces what a person's own GP,
// liver team or midwife tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const liverUk = (label: string, path: string): LearnSource => ({ label: `Liver UK: ${label}`, url: `https://liveruk.org/${path}` });
const hepCTrust = (label: string, path: string): LearnSource => ({ label: `The Hepatitis C Trust: ${label}`, url: `https://www.hepctrust.org.uk/${path}` });

const NHS_HEPATITIS = nhs("Hepatitis", "conditions/hepatitis/");
const NHS_HEP_B = nhs("Hepatitis B", "conditions/hepatitis-b/");
const NHS_HEP_C = nhs("Hepatitis C", "conditions/hepatitis-c/");
const NHS_HEP_B_VACCINE = nhs("Hepatitis B vaccine", "vaccinations/hepatitis-b-vaccine/");
const NHS_CIRRHOSIS = nhs("Cirrhosis", "conditions/cirrhosis/");
const NHS_INFECTED_BLOOD = nhs("Support for people who may have been affected by infected blood", "tests-and-treatments/support-for-people-who-may-have-been-affected-by-infected-blood/");
const NHS_PREGNANCY_SCREENING = nhs("Screening tests in pregnancy", "pregnancy/your-pregnancy-care/screening-tests/");
const GOV_IDPS: LearnSource = { label: "GOV.UK (NHS England): Screening tests for you and your baby, infectious diseases", url: "https://www.gov.uk/government/publications/screening-tests-for-you-and-your-baby-stfyayb/infectious-diseases" };

const HEP_B = "about-liver-disease/conditions/hepatitis-b";
const LU_HEP_B = liverUk("Hepatitis B in adults", `${HEP_B}/`);
const LU_HEP_B_WHAT = liverUk("What is hepatitis B?", `${HEP_B}/what-is-hep-b/`);
const LU_HEP_B_DISEASE = liverUk("How does hepatitis B cause liver disease?", `${HEP_B}/hep-b-liver-disease/`);
const LU_HEP_B_RISK = liverUk("How is hepatitis B passed on and who is at risk?", `${HEP_B}/hep-b-risk/`);
const LU_HEP_B_VACCINES = liverUk("Vaccines against hepatitis B", `${HEP_B}/hep-b-vaccines/`);
const LU_HEP_B_SYMPTOMS = liverUk("Symptoms of hepatitis B", `${HEP_B}/hep-b-symptoms/`);
const LU_HEP_B_ACUTE = liverUk("Acute hepatitis B", `${HEP_B}/acute-hep-b/`);
const LU_HEP_B_TESTS = liverUk("Tests for hepatitis B", `${HEP_B}/hep-b-tests/`);
const LU_HEP_B_DIAGNOSED = liverUk("Just diagnosed with chronic hepatitis B", `${HEP_B}/hep-b-just-diagnosed/`);
const LU_HEP_B_TREATMENT = liverUk("Treatment for hepatitis B", `${HEP_B}/hep-b-treatment-adults/`);
const LU_HEP_B_CHILDREN = liverUk("Hepatitis B in children", "about-liver-disease/conditions/hepatitis-b-in-children/");
const LU_HEP_C = liverUk("Hepatitis C", "about-liver-disease/conditions/hepatitis-c/");
const LU_SURVEILLANCE = liverUk("Regular checks for liver cancer (surveillance)", "about-liver-disease/tests/regular-checks-for-liver-cancer-surveillance/");
const LU_HELPLINE = liverUk("Nurse-led helpline", "how-we-can-help/nurse-led-helpline/");
const LU_SUPPORT_GROUPS = liverUk("Support groups", "how-we-can-help/support-groups/");

const HCT_SYMPTOMS = hepCTrust("Symptoms", "about-hep-c/symptoms/");
const HCT_RISKS = hepCTrust("Risks and causes", "about-hep-c/risks-and-causes/");
const HCT_TESTING = hepCTrust("Testing", "about-hep-c/testing/");
const HCT_TREATMENT = hepCTrust("Treatment", "about-hep-c/treatment/");
const HCT_DIAGNOSED = hepCTrust("Just diagnosed with hepatitis C?", "about-hep-c/just-diagnosed/");
const HCT_TELLING = hepCTrust("Telling people", "about-hep-c/just-diagnosed/telling-people/");
const HCT_PREVENT = hepCTrust("Preventing transmission", "about-hep-c/preventing-transmission/");
const HCT_LIVER = hepCTrust("Your liver", "about-hep-c/your-liver/");
const HCT_HELPLINE = hepCTrust("Helpline", "find-support/helpline/");

export const hepatitisAnswers: LearnArticle[] = [
  {
    id: "hep-what-it-is",
    kicker: "Understanding",
    question: "What are hepatitis B and C?",
    hook: "Two different viruses that both infect the liver. One can be cured with tablets; the other can be controlled and prevented.",
    short: "Hepatitis B and C are viruses that infect the liver. Both can last a short time (acute) or become long-lasting (chronic), and over many years they can damage the liver. Treatment cures hepatitis C for most people, and hepatitis B can be controlled and prevented with a vaccine.",
    sections: [
      {
        heading: "Two viruses that affect the liver",
        paragraphs: [
          "Hepatitis is when your liver becomes inflamed, usually due to a virus or drinking too much alcohol over a long period of time. There are 5 main viruses that cause different types of hepatitis.",
          "The hepatitis B and C viruses both infect liver cells. Hepatitis B is passed on from infected blood or body fluids. Hepatitis C is passed on from infected blood.",
        ],
      },
      {
        heading: "Acute and chronic",
        paragraphs: [
          "Both have a short-term (acute) stage and a long-term (chronic) stage. If hepatitis B lasts for over 6 months, it is called chronic hepatitis B. If you still have hepatitis C more than 6 months after picking it up, this is called chronic hepatitis C. Chronic means long-lasting.",
          "People who pick up hepatitis B as an adult usually fight off the virus before it can cause any harm. Less than 5 out of 100 people who pick it up as adults get a chronic infection. But 90 out of 100 babies who pick it up from their mother at birth do.",
          "With hepatitis C, 3 in 10 people get rid of the virus without any treatment during the first 6 months. If you have chronic hepatitis C, you will need treatment to get rid of the virus.",
        ],
      },
      {
        heading: "What they do to the liver",
        paragraphs: [
          "Without treatment, hepatitis C can cause inflammation. This can lead to the liver becoming tough and scarred, which is known as fibrosis. Over many years, the damage can build up and lead to cirrhosis or liver cancer.",
          "If left untreated, chronic hepatitis B can cause liver damage (cirrhosis) and increase your risk of getting liver cancer. Most people with hepatitis B do not get cirrhosis or liver cancer, and treatment to keep the virus under control reduces the risk.",
        ],
      },
      {
        heading: "Curable, or controllable",
        paragraphs: [
          "Treatment cures hepatitis C for most people. More than 9 in 10 people with hepatitis C can now get rid of the virus by taking tablets, and most people have no side effects from treatment.",
          "There is no known cure for chronic hepatitis B, but it can be controlled, so in most people it does not cause serious problems. There is a very good vaccine against hepatitis B. There is no vaccine against hepatitis C.",
        ],
      },
      {
        heading: "Other types of hepatitis",
        paragraphs: [
          "There are at least 4 other types of hepatitis virus: hepatitis A, C, D and E. You can have more than one type of viral hepatitis at the same time. Only people who already live with hepatitis B can get hepatitis D.",
          "If you have hepatitis B, it is important to have tests for hepatitis C and D and for HIV, as all these viruses can be caught together.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you might have hepatitis B or C, or you are at high risk of getting it.",
      "If you have hepatitis B, ask about tests for hepatitis C and D and for HIV.",
      "If there is a chance you could have hepatitis C, get tested, even if you have no symptoms at the moment.",
      "Take any medicine you have been prescribed and go for regular check-ups to make sure your liver is working properly.",
    ],
    tryThisWeek: [
      "See a GP if you could be at risk.",
      "Ask about tests for other viruses.",
      "Go to every check-up.",
    ],
    ask: "Is my infection acute or chronic, and what does that mean for my liver?",
    interactive: {
      kind: "flip-cards",
      title: "Hepatitis B and C, card by card",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "hep-b", front: "Hepatitis B", when: "Passed on in blood and body fluids", back: "Most adults fight it off. Chronic hepatitis B can be controlled with medicine, and a vaccine prevents it." },
        { id: "hep-c", front: "Hepatitis C", when: "Passed on in blood", back: "Tablets get rid of the virus in more than 9 in 10 people. There is no vaccine." },
        { id: "acute", front: "Acute", when: "The first 6 months", back: "A short-term infection. Many adults clear hepatitis B at this stage, and 3 in 10 clear hepatitis C." },
        { id: "chronic", front: "Chronic", when: "Longer than 6 months", back: "Chronic means long-lasting. Over many years, the virus can damage and scar the liver." },
        { id: "hep-d", front: "Hepatitis D", when: "Only with hepatitis B", back: "Only people who already live with hepatitis B can get it, so a test for it is important." },
      ],
    },
    sources: [NHS_HEPATITIS, NHS_HEP_B, NHS_HEP_C, LU_HEP_B_WHAT, LU_HEP_C, LU_HEP_B],
    quiz: {
      question: "Which of the two viruses has a vaccine?",
      options: [{ text: "Hepatitis B", right: true }, { text: "Hepatitis C" }, { text: "Both of them" }],
      why: "There is a very good vaccine against hepatitis B. There is no vaccine against hepatitis C.",
    },
  },
  {
    id: "hep-spread",
    kicker: "Understanding",
    question: "How do hepatitis B and C spread, and how do they not?",
    hook: "Blood is the main route. Hugs, kisses and shared meals are not.",
    short: "Hepatitis C spreads when infected blood gets into someone else's bloodstream. Hepatitis B spreads through blood and body fluids, and most people with long-term hepatitis B got it at birth. Neither is passed on by hugging, kissing or sharing food.",
    sections: [
      {
        heading: "Blood, and for hepatitis B, body fluids",
        paragraphs: [
          "Hepatitis B is spread through blood and body fluids such as semen. Hepatitis C is passed on when blood from someone with the virus gets into someone else's blood.",
          "Hepatitis B can be passed from a mother to her baby during birth, and this is how most people with chronic hepatitis B got the virus. There is more chance of this if you or your mother were born or grew up in a country where levels are medium or high. This includes all countries in Africa, Asia, the Caribbean, Central and South America, Eastern and Southern Europe, the Middle East and the Pacific islands.",
        ],
      },
      {
        heading: "The main ways they are passed on",
        paragraphs: [
          "You can get hepatitis B from vaginal, anal or oral sex without using a condom or dam, injecting drugs using shared needles, or being injured by a used needle. A tattoo, piercing, or medical or dental procedure with unsterilised equipment can also pass it on.",
          "In the UK, the most common way hepatitis C is passed on is when people share needles or syringes for injecting drugs. Other drug equipment like spoons and straws can also be a risk, as can medical or dental treatment in a country with poor infection control.",
          "It is possible to pick up hepatitis C through sex, but this is not common. Any activity where one or both partners bleed is considered higher risk.",
        ],
      },
      {
        heading: "Blood transfusions in the past",
        paragraphs: [
          "Since 1972, donated blood has been tested for hepatitis B. If you had a blood transfusion, an organ transplant or blood products before 1996, there's a small chance you may have been given blood with hepatitis C.",
          "If you had a blood transfusion before 1996 and you've not been tested for hepatitis C, the NHS says to contact your GP surgery to discuss any tests you may need. Since screening was introduced, the risk of getting an infection from a blood transfusion is very low.",
        ],
      },
      {
        heading: "How they are not passed on",
        paragraphs: [
          "You cannot get hepatitis C by hugging, kissing or sharing food or drink with someone. Hepatitis B can't be passed on by kissing, hugging or sharing a meal.",
          "There is no need to treat someone with hepatitis C as if they are dangerous or infectious. Once someone has finished treatment and been cured, they cannot pass it on to anybody else.",
          "It can take years to find out that you have hepatitis C, so it may be hard to know how and when you picked it up. About 1 in 10 people with hepatitis C have no recognised risk factor.",
        ],
      },
      {
        heading: "Lowering the risk",
        paragraphs: [
          "Use a condom or dam when having vaginal, anal or oral sex, and avoid sharing razors, toothbrushes and needles. Do not share any drug injection equipment, including needles, syringes, spoons and filters, or drug snorting equipment like straws or notes.",
          "Only get tattoos or piercings from licensed premises. You can get hepatitis C more than once, so it's important to try to reduce your risk even if you've had it before.",
        ],
      },
    ],
    helps: [
      "Use a condom or dam when having vaginal, anal or oral sex.",
      "Do not share razors, toothbrushes or needles with others.",
      "Do not share any drug injection or snorting equipment, including needles, syringes, spoons, filters, straws or notes.",
      "Only get tattoos or piercings from licensed premises.",
      "If you had a blood transfusion before 1996 and have not been tested for hepatitis C, contact your GP surgery.",
    ],
    tryThisWeek: [
      "Keep your own razor and toothbrush.",
      "Use a condom or dam.",
      "Contact your GP if transfused before 1996.",
    ],
    ask: "Could I have been exposed, and who close to me should be tested?",
    interactive: {
      kind: "scenarios",
      title: "Can it be passed on this way?",
      scenarios: [
        {
          id: "hug",
          situation: "A friend with hepatitis C gives you a hug.",
          options: [{ text: "Hugging cannot pass it on", best: true }, { text: "Hugging could pass it on" }],
          why: "You cannot get hepatitis C by hugging, kissing or sharing food or drink with someone.",
        },
        {
          id: "meal",
          situation: "You share a meal with someone who has hepatitis B.",
          options: [{ text: "Sharing a meal is fine", best: true }, { text: "Eat from separate dishes" }],
          why: "Hepatitis B can't be passed on by kissing, hugging or sharing a meal.",
        },
        {
          id: "razor",
          situation: "Someone you live with asks to borrow your razor.",
          options: [{ text: "Keep razors separate", best: true }, { text: "Share it if it looks clean" }],
          why: "The hepatitis B virus can live in dried blood for at least a week. Avoid sharing razors, toothbrushes and needles.",
        },
        {
          id: "tattoo",
          situation: "You're planning to get a tattoo.",
          options: [{ text: "Go to licensed premises", best: true }, { text: "Choose the cheapest offer" }],
          why: "Only get tattoos or piercings from licensed premises.",
        },
      ],
    },
    sources: [NHS_HEP_B, NHS_HEP_C, LU_HEP_B_RISK, LU_HEP_C, HCT_RISKS, NHS_INFECTED_BLOOD],
    quiz: {
      question: "Can hepatitis C be passed on by hugging or sharing food?",
      options: [{ text: "No", right: true }, { text: "Yes, by hugging" }, { text: "Yes, by sharing a cup" }],
      why: "You cannot get hepatitis C by hugging, kissing or sharing food or drink with someone.",
    },
  },
  {
    id: "hep-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms, and why do so many people have none?",
    hook: "Both viruses can stay silent for years while they affect the liver. Feeling well is not the same as being clear.",
    short: "Most people with hepatitis B or C have no symptoms, or only mild ones. When symptoms do come, they can include tiredness, a high temperature, tummy pain, feeling sick and yellow skin or eyes. Because many people feel fine, testing is the only way to know.",
    sections: [
      {
        heading: "Often no symptoms at all",
        paragraphs: [
          "Most people with hepatitis B either have no symptoms or mild symptoms. Most people with hepatitis C do not have any symptoms.",
          "About 8 in 10 people with acute hepatitis C will have no symptoms. You can have chronic hepatitis C for many years before having any symptoms, and during this time the virus is damaging your liver.",
        ],
      },
      {
        heading: "Symptoms of a new infection",
        paragraphs: [
          "If you do get symptoms, they can include a high temperature, tiredness, pain in your upper tummy, and feeling sick or being sick. You may also get yellowing of the skin and the whites of the eyes (jaundice), which may be harder to see on brown or black skin.",
          "Hepatitis B can also cause a raised rash that may be itchy (hives), darker urine than usual and pale poo. It can take 2 or 3 months for acute hepatitis B to develop after contact with the virus, and the most common symptoms are a bit like mild flu.",
          "With hepatitis C, symptoms may not start for several weeks, months or years after being infected.",
        ],
      },
      {
        heading: "Symptoms after many years",
        paragraphs: [
          "If hepatitis C is not treated, it may eventually cause extreme tiredness, itchy skin, anxiety and depression, and memory and concentration problems. Liver UK also lists joint pains, stomach ache and bloating, mood changes and brain fog.",
          "Chronic hepatitis B can cause liver damage, and early-stage liver damage often has no symptoms. With chronic hepatitis C, symptoms vary a lot from person to person, and without treatment they may go away and return over many years.",
          "When symptoms do occur, they can be mistaken for another, more common condition. Having these symptoms does not necessarily mean you have hepatitis C, but you should get tested to find out.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "The NHS says to ask for an urgent GP appointment or get help from 111 if you think you have hepatitis. See a GP if you think you might have hepatitis B or C, or are at high risk of getting it.",
          "If you've been diagnosed with cirrhosis and you're vomiting blood, your poo is very dark or black, or you suddenly become confused or have slurred speech, call 999 or go to A&E.",
          "If you have already been diagnosed, let your specialist care team know about any new symptoms. In a very small number of people, acute hepatitis B can cause serious liver damage, so tell your doctor if you still feel unwell after 4 weeks.",
        ],
      },
    ],
    helps: [
      "Ask for an urgent GP appointment or get help from 111 if you think you have hepatitis.",
      "Get tested if you think you could have picked up hepatitis B or C, even if you have no symptoms.",
      "Tell your doctor if you still feel unwell 4 weeks after acute hepatitis B.",
      "If you have already been diagnosed, let your specialist care team know about any new symptoms.",
      "If you have cirrhosis, call 999 or go to A&E if you vomit blood, your poo is very dark or black, or you suddenly become confused.",
    ],
    tryThisWeek: [
      "Get tested if you could be at risk.",
      "Tell your team about new symptoms.",
      "Know when to call 999.",
    ],
    ask: "Could my symptoms be linked to hepatitis, and which ones should I report straight away?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell a doctor about",
      intro: "Tick any you have noticed. Many people have no symptoms at all, so a test is the way to know.",
      signs: [
        "A high temperature",
        "Tiredness",
        "Pain in the upper tummy",
        "Feeling or being sick",
        "Loss of appetite",
        "Yellow skin or whites of the eyes",
        "Darker urine than usual",
        "Pale poo",
        "An itchy raised rash",
        "Itchy skin",
        "Memory or concentration problems",
      ],
      after: "Ask for an urgent GP appointment or get help from 111 if you think you have hepatitis. With cirrhosis, vomiting blood, very dark or black poo or sudden confusion means call 999 or go to A&E.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_HEP_B, NHS_HEP_C, NHS_HEPATITIS, LU_HEP_C, LU_HEP_B_SYMPTOMS, LU_HEP_B_ACUTE, HCT_SYMPTOMS, NHS_CIRRHOSIS],
    quiz: {
      question: "Do most people with hepatitis C have symptoms?",
      options: [{ text: "No, most have none", right: true }, { text: "Yes, always" }, { text: "Only in the first week" }],
      why: "Most people with hepatitis C do not have any symptoms.",
    },
  },
  {
    id: "hep-testing",
    kicker: "Tests",
    question: "How do I get tested for hepatitis B or C?",
    hook: "A blood test, often a free one, and in England a finger-prick hepatitis C test you can do at home.",
    short: "A blood test shows whether you have hepatitis B or C. You can get tested by a GP, at a sexual health clinic and in other services, and if you're 18 or over in England you can order a free hepatitis C test to do at home. Testing early means treatment can start before the liver is damaged.",
    sections: [
      {
        heading: "Why a test matters",
        paragraphs: [
          "You can have hepatitis B and not have any symptoms, so always get tested if you think you could have picked up the virus. It's important to get tested if you could have hepatitis C. Treatment can cure the infection and help prevent damage to your liver.",
          "Finding hepatitis B early means you can get any treatment that you need. This makes a big difference to the chance of getting serious liver disease or cancer.",
        ],
      },
      {
        heading: "Who should think about a test",
        paragraphs: [
          "Liver UK says it is worth getting tested for hepatitis C, even with no symptoms, if you have ever injected drugs, you were born or grew up somewhere hepatitis C is common, or a close family member, friend or sexual partner has hepatitis C. A home-made tattoo or a tattoo done overseas is another reason.",
          "It is important to get tested for hepatitis B if you have symptoms, if you could have picked up the virus, for example because you were born in a country where hepatitis B is more common, or if you are pregnant.",
          "If you had a blood transfusion before 1996 and you've not been tested for hepatitis C, the NHS says to contact your GP surgery to discuss any tests you may need.",
        ],
      },
      {
        heading: "Where to get tested",
        paragraphs: [
          "You can ask for a hepatitis C test from a GP, sexual health clinics, drug services, most needle exchange services, antenatal clinics and some pharmacies. You can get a free hepatitis B test from your GP, or from your local sexual health clinic if you don't have a GP. Be clear that you would like a hepatitis B test, not general tests for liver health.",
          "If you're aged 18 or over and live in England, you can order a free hepatitis C test that you can do at home. You prick your finger to get some blood and then send the blood to be tested. In Wales, you can order a combined hepatitis C, hepatitis B and HIV test online.",
        ],
      },
      {
        heading: "What the tests look for",
        paragraphs: [
          "For hepatitis C, an antibody test shows whether you have ever had the virus. If it is positive, an RNA test, sometimes called a PCR test, shows whether the virus is in your blood now. Antibodies can stay in your blood for many years, even if the virus has gone.",
          "A hepatitis B test usually checks for hepatitis B surface antigen. If it is positive, you have a hepatitis B infection, and if you still test positive after 6 months, it is a chronic infection. Other tests show whether you had an infection in the past, or are immune because you have been vaccinated.",
        ],
      },
      {
        heading: "Results and repeat tests",
        paragraphs: [
          "It can take up to 2 weeks to get hepatitis C test results back. If your result shows you do not have hepatitis C, you may be advised to get tested again in 6 months. This is because the test is not always accurate if you were infected recently.",
          "If you can, take someone with you to get your test results. Hepatitis B is a notifiable disease, so doctors have to tell the health authorities, but no one else, including your family and workplace, will be told.",
        ],
      },
    ],
    helps: [
      "Get tested if you could have hepatitis B or C, even if you have no symptoms.",
      "If you're 18 or over and live in England, order a free home test for hepatitis C.",
      "When you ask for a hepatitis B test, be clear that you want a hepatitis B test, not general tests for liver health.",
      "If your result is negative but you may have been infected recently, ask whether you need another test in 6 months.",
      "Take someone with you to get your test results, if you can.",
      "If you aren't sure what your results mean, ask your doctor to talk through them with you.",
    ],
    tryThisWeek: [
      "Order a free home test.",
      "Ask for a hepatitis B test by name.",
      "Take someone with you for results.",
    ],
    ask: "Which tests have I had, and what do my results mean?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "hcv-antibody", front: "Hepatitis C antibody test", when: "Usually the first test", back: "Shows whether you have ever had hepatitis C. Antibodies can stay for years after the virus has gone." },
        { id: "rna", front: "RNA (PCR) test", when: "If the antibody test is positive", back: "Shows whether hepatitis C is in your blood now. It can also measure how much virus there is." },
        { id: "hbsag", front: "Hepatitis B surface antigen", when: "The usual hepatitis B test", back: "Positive means the virus is in your blood now. Still positive after 6 months means a chronic infection." },
        { id: "anti-hbc", front: "Core antibody (anti-HBc)", when: "Checked alongside", back: "Positive means you have had hepatitis B at some point. It could be a past or current infection." },
        { id: "anti-hbs", front: "Surface antibody (anti-HBs)", when: "Checks for immunity", back: "Positive means you are immune, from a vaccine or a past infection your immune system cleared." },
        { id: "home", front: "Home finger-prick test", when: "Free in England if 18 or over", back: "Prick your finger, collect a little blood and post it. You will be contacted with the result within 2 weeks." },
      ],
    },
    sources: [NHS_HEP_C, LU_HEP_C, HCT_TESTING, LU_HEP_B_TESTS, LU_HEP_B_SYMPTOMS, NHS_INFECTED_BLOOD],
    quiz: {
      question: "What does a positive hepatitis C antibody test on its own show?",
      options: [{ text: "That you have had the virus at some point", right: true }, { text: "That you are cured" }, { text: "That you are immune" }],
      why: "A hepatitis C antibody test tells you whether you have ever had the hepatitis C virus. The only way to know if you are currently infected is with a PCR test.",
    },
  },
  {
    id: "hep-hep-c-treatment",
    kicker: "Treatment",
    question: "How is hepatitis C cured?",
    hook: "A course of tablets, usually for 8 to 12 weeks, with few or no side effects for most people.",
    short: "Hepatitis C is treated with antiviral tablets taken every day for 8 to 12 weeks, and treatment cures the infection for most people. Finishing the course and going to the follow-up blood tests matters. Once cured, the virus can no longer harm your liver or be passed on.",
    sections: [
      {
        heading: "Tablets that cure",
        paragraphs: [
          "Treatment can cure hepatitis C infections in most people. The medicines now used are called direct acting antivirals, or DAAs. They are tablets you take every day for 8 to 12 weeks.",
          "More than 9 in 10 people with hepatitis C will get rid of the virus with treatment. The Hepatitis C Trust says 97% of people who complete treatment are cured of the virus.",
        ],
      },
      {
        heading: "Getting started",
        paragraphs: [
          "If you're diagnosed with hepatitis C, you'll usually be referred to a specialist for treatment. This could be a hospital liver, digestive or infectious disease clinic, and in some places sexual health clinics or GPs can treat it. You will probably have most of your appointments with a specialist nurse.",
          "At the start, your team will assess the health of your liver with blood tests and a FibroScan. Which medicine you are given depends on how much damage there is to your liver, any other health problems you have, and whether you have had treatment before.",
          "If you have recently picked up acute hepatitis C, doctors might wait to see if your body gets rid of the virus by itself. But if you are unwell, or have chronic hepatitis C, you will be asked to start treatment.",
        ],
      },
      {
        heading: "Taking the tablets",
        paragraphs: [
          "It's important to finish your treatment for it to work, even if you start to feel better before it is over. It is also important to go to all your medical appointments.",
          "Most people do not get side effects. Some people may feel tired, get headaches or feel sick at the start, and this usually goes away quickly. Tell your specialist if you get any side effects.",
          "Tell your team about any other medicines you take, including over-the-counter or alternative medicines, as this could affect your treatment plan. If you are using alcohol or other drugs, you can still get treatment for hepatitis C.",
        ],
      },
      {
        heading: "Checking it has worked",
        paragraphs: [
          "You'll have blood tests during and after treatment to check how well it's working. A second blood test 12 weeks after treatment has finished tests for cure. If both tests show no sign of the virus, treatment has been successful.",
          "When the virus has cleared, an RNA test cannot find any virus in your blood. This means there is no more virus causing harm to your liver, and you cannot pass hepatitis C on to anyone else.",
          "If treatment has not worked for you, your specialist will recommend another medicine to try.",
        ],
      },
      {
        heading: "After a cure",
        paragraphs: [
          "Having hepatitis C once does not protect you from future infections, so it is possible to get it again. After you complete your treatment, replace or sterilise personal items such as toothbrushes, razors and nail scissors.",
          "Your specialist will also recommend changes to help prevent further damage to your liver, such as keeping to a healthy weight, stopping smoking and avoiding or cutting down on alcohol.",
        ],
      },
    ],
    helps: [
      "Take your tablets every day and finish the whole course, even if you start to feel better.",
      "Go to all your appointments, including the blood test 12 weeks after treatment ends.",
      "Tell your specialist if you get any side effects.",
      "Tell your team about all your other medicines, including over-the-counter and alternative ones.",
      "Ask your treatment team or GP about being vaccinated against hepatitis A and B.",
      "After treatment, replace or sterilise toothbrushes, razors, nail scissors and anything else that can cut or graze the skin.",
    ],
    tryThisWeek: [
      "Take every tablet, every day.",
      "Go to your 12-week blood test.",
      "Tell your team your other medicines.",
    ],
    ask: "Which medicine will I take, for how long, and when is my test for cure?",
    interactive: {
      kind: "timeline",
      title: "The course of treatment",
      steps: [
        { id: "referral", when: "After diagnosis", title: "Referral to a specialist", points: ["A hospital clinic, or in some places a sexual health clinic or GP", "Most appointments with a specialist nurse"] },
        { id: "before", when: "Before starting", title: "Checking your liver", points: ["Blood tests and a FibroScan", "A chance to ask questions about your medicines"] },
        { id: "course", when: "8 to 12 weeks", title: "Tablets every day", points: ["Finish the course, even if you feel better", "Most people have no side effects", "Tell your specialist about any side effects"] },
        { id: "end", when: "End of treatment", title: "A blood test", points: ["Measures the level of virus in your body"] },
        { id: "cure", when: "12 weeks later", title: "The test for cure", points: ["No sign of the virus means treatment has worked", "If not, another medicine can be tried"] },
      ],
    },
    sources: [NHS_HEP_C, LU_HEP_C, HCT_TREATMENT, HCT_DIAGNOSED],
    quiz: {
      question: "How is hepatitis C usually treated?",
      options: [{ text: "Tablets every day for 8 to 12 weeks", right: true }, { text: "Weekly injections for a year" }, { text: "Tablets for the rest of your life" }],
      why: "Hepatitis C is treated with antiviral tablets you take every day for 8 to 12 weeks.",
    },
  },
  {
    id: "hep-hep-b-treatment",
    kicker: "Treatment",
    question: "How is hepatitis B treated and monitored?",
    hook: "A new infection usually clears by itself. A long-term one is watched closely, and controlled with daily tablets when needed.",
    short: "Most adults with a new hepatitis B infection fight it off without treatment. There is no known cure for chronic hepatitis B, but it can be controlled. Not everyone needs medicine, but everyone needs regular check-ups, and those who need treatment usually take a daily antiviral tablet for the long term.",
    sections: [
      {
        heading: "A new infection usually clears",
        paragraphs: [
          "Hepatitis B usually clears up on its own without treatment. More than 95 out of every 100 people with acute hepatitis B will fight off the virus without any treatment. You may be offered medicine to help with symptoms, such as painkillers or medicines to stop you feeling sick.",
          "To help your liver recover, get lots of rest, drink plenty of water, avoid alcohol and eat well. Check with your doctor before taking medicines like paracetamol, as you might need to take less than usual.",
        ],
      },
      {
        heading: "Chronic hepatitis B can be controlled",
        paragraphs: [
          "There is no known cure for chronic hepatitis B. It can be controlled, either by your immune system or with treatment. You will see a liver specialist for regular check-ups.",
          "Not everyone needs treatment. It depends on how active the virus is, whether your liver is damaged, and whether you are at risk of serious liver disease for other reasons. People with low virus levels and no sign of liver damage are unlikely to get seriously ill, so doctors may not treat unless a check-up shows something has changed.",
          "You are likely to be offered treatment if you have a viral load of 20,000 or more, ALT levels above the normal range for 3 months, or cirrhosis. Treatment is also offered if you are pregnant and have high levels of virus.",
        ],
      },
      {
        heading: "Daily antiviral tablets",
        paragraphs: [
          "Most people who need treatment have a daily antiviral medicine called a nucleoside or nucleotide analogue. The main ones used in the UK are tenofovir disoproxil and entecavir. They stop the virus making copies of itself, and the aim is an undetectable viral load.",
          "Taken long-term, these medicines can stop new liver damage, repair damage that is already there and reduce the risk of liver cancer. You usually need to continue treatment for the rest of your life, and missing tablets can stop it from working.",
          "Common side effects include tummy problems, headaches, tiredness and dizziness. They often get better once you have taken the medicine for a few weeks. If you have problems taking your medicine, tell your doctor.",
        ],
      },
      {
        heading: "Interferon, for some people",
        paragraphs: [
          "Some people have interferon instead. You give yourself injections, and a single course lasts about a year. Many people have side effects that make daily life difficult, such as constant flu-like symptoms, and it is used much less now than in the past.",
        ],
      },
      {
        heading: "Check-ups for the long term",
        paragraphs: [
          "In the first year of tablets, you'll usually have a check-up every 3 months, then around every 6 months. If you are not having treatment, you'll have tests every 6 months to a year, because the virus can become active without causing symptoms.",
          "Once you have had hepatitis B, always tell anyone giving you medical treatment, even if it was an infection that has cleared up. The virus can come back with a small number of medicines, such as certain types of chemotherapy or strong treatments for conditions like rheumatoid arthritis.",
        ],
      },
    ],
    helps: [
      "Take any medicine you have been prescribed and go for regular check-ups.",
      "Read the information that comes with your medicine, and ask your doctor or pharmacist about anything you don't understand.",
      "If side effects make it hard to take your medicine, tell your doctor.",
      "Ask your doctor for advice about painkillers, including how much it's safe for you to take.",
      "Always tell anyone giving you medical treatment that you have had hepatitis B.",
    ],
    tryThisWeek: [
      "Take your medicine every day.",
      "Ask your doctor about painkillers.",
      "Tell new doctors about hepatitis B.",
    ],
    ask: "Do I need treatment now, and how often will my blood be checked?",
    interactive: {
      kind: "flip-cards",
      title: "Care for hepatitis B, card by card",
      intro: "Turn each card to see when each kind of care is used.",
      cards: [
        { id: "rest", front: "Rest and fluids", when: "A new (acute) infection", back: "More than 95 in 100 people fight off the virus without any treatment." },
        { id: "watch", front: "Regular check-ups", when: "Low virus levels, no liver damage", back: "Tests every 6 months to a year, because the virus can become active without symptoms." },
        { id: "tablets", front: "Daily antiviral tablets", when: "Most people who need treatment", back: "Tenofovir disoproxil or entecavir keep the virus low. Usually taken for the rest of your life." },
        { id: "interferon", front: "Interferon injections", when: "For some people", back: "A course of about a year. Many people have side effects such as flu-like symptoms." },
        { id: "surveillance", front: "Liver cancer checks", when: "Some people, every 6 months", back: "Surveillance aims to find any liver cancer at an early stage, when it can usually be cured." },
      ],
    },
    sources: [NHS_HEP_B, LU_HEP_B_TREATMENT, LU_HEP_B_ACUTE, LU_HEP_B_TESTS],
    quiz: {
      question: "Can chronic hepatitis B be cured?",
      options: [{ text: "No, but it can be controlled", right: true }, { text: "Yes, with a short course of tablets" }, { text: "Yes, it always clears by itself" }],
      why: "There is no known cure for chronic hepatitis B. It can be controlled, either by your immune system or with treatment.",
    },
  },
  {
    id: "hep-vaccine",
    kicker: "Prevention",
    question: "Who should have the hepatitis B vaccine?",
    hook: "Every baby in the UK, and adults at higher risk, including the family and partners of someone with hepatitis B.",
    short: "Vaccination is the best way to prevent hepatitis B. All babies have it as part of the 6-in-1 vaccine, and it is recommended for adults at higher risk, such as close family and partners of someone with hepatitis B. It works very well and cannot give you the infection.",
    sections: [
      {
        heading: "A vaccine that works very well",
        paragraphs: [
          "Vaccination is the best way to prevent hepatitis B. Research has shown that 90% of adults and over 98% of babies have good protection from hepatitis B after being vaccinated.",
          "The hepatitis B vaccines used in the UK contain a killed version of the virus, so there's no risk of getting the infection from the vaccine. There is no vaccine against hepatitis C.",
        ],
      },
      {
        heading: "For every baby",
        paragraphs: [
          "In the UK, the hepatitis B vaccine is given to babies as part of the 6-in-1 vaccine, at 8, 12 and 16 weeks old. Since 2017, all babies born in the UK are vaccinated against hepatitis B for free.",
          "Babies born to mothers with hepatitis B are given extra doses of the vaccine, to reduce the risk of them getting the infection.",
        ],
      },
      {
        heading: "Adults at higher risk",
        paragraphs: [
          "Adults only need the vaccine if they're at higher risk. This includes close family members or sexual partners of someone with hepatitis B, people with long-term liver disease or kidney failure, people who inject drugs, people who change sexual partners often, and people whose job puts them at risk.",
          "Speak to your GP surgery if someone in your home has hepatitis B, or visit a sexual health clinic if you're at risk through sex. If your job puts you at risk, speak to your employer. You may have to pay for a hepatitis B vaccine for travel.",
        ],
      },
      {
        heading: "How it is given",
        paragraphs: [
          "The vaccine is given as an injection into the upper arm or thigh. You need at least 3 doses to give you the best protection, and there's usually a month gap between each dose.",
          "Most side effects are mild and do not last long, such as swelling or pain where the injection was given, feeling tired, or a headache. Most people who need the vaccine can have it, including if you're pregnant or breastfeeding.",
        ],
      },
      {
        heading: "After you may have been exposed",
        paragraphs: [
          "The vaccine can help stop you getting hepatitis B if you're exposed to the blood or other body fluids of an infected person, for example if you've been injured by a used needle. If you could have picked up hepatitis B and have not been vaccinated before, speak to a doctor as soon as possible.",
          "There's still a chance you could get hepatitis B after being vaccinated. So it's still important to reduce your risk, such as by using condoms during sex and not sharing toothbrushes or needles.",
        ],
      },
    ],
    helps: [
      "Make sure your baby has all their 6-in-1 vaccine doses, and speak to the GP surgery if you've not been contacted.",
      "If someone in your home has hepatitis B, speak to your GP surgery about the vaccine.",
      "If your job puts you at risk, speak to your employer about getting vaccinated.",
      "If you're travelling abroad, get advice from a travel clinic, GP, nurse or pharmacist before you go.",
      "If you could have picked up hepatitis B and have not been vaccinated, speak to a doctor as soon as possible.",
    ],
    tryThisWeek: [
      "Make sure your baby has every dose.",
      "Ask your GP surgery about the vaccine.",
      "Get travel advice before you go.",
    ],
    ask: "Am I at higher risk, and should I or my family have the hepatitis B vaccine?",
    interactive: {
      kind: "scenarios",
      title: "Should you ask about the vaccine?",
      scenarios: [
        {
          id: "partner",
          situation: "Your partner has just been diagnosed with hepatitis B.",
          options: [{ text: "Ask your GP surgery about the vaccine", best: true }, { text: "Wait and see" }],
          why: "Close family members or sexual partners of someone with hepatitis B are among those the vaccine is recommended for.",
        },
        {
          id: "needle",
          situation: "You're injured by a used needle.",
          options: [{ text: "Speak to a doctor as soon as possible", best: true }, { text: "Wait to see if symptoms start" }],
          why: "If you could have picked up hepatitis B and have not been vaccinated before, speak to a doctor as soon as possible.",
        },
        {
          id: "travel",
          situation: "You're travelling to a country with a higher risk of hepatitis B.",
          options: [{ text: "Get advice from a travel clinic, GP, nurse or pharmacist", best: true }, { text: "Go without asking" }],
          why: "If you're travelling abroad, get advice from a travel clinic, GP, nurse or pharmacist before you go.",
        },
        {
          id: "after",
          situation: "You've been vaccinated and wonder if condoms still matter.",
          options: [{ text: "Keep using condoms and not sharing needles", best: true }, { text: "Stop taking care" }],
          why: "There's still a chance you could get hepatitis B after being vaccinated, so it's still important to try to reduce your risk.",
        },
      ],
    },
    sources: [NHS_HEP_B_VACCINE, NHS_HEP_B, LU_HEP_B_VACCINES, LU_HEP_C],
    quiz: {
      question: "Can you get hepatitis B from the vaccine?",
      options: [{ text: "No, it contains a killed version of the virus", right: true }, { text: "Yes, sometimes" }, { text: "Only if you are an adult" }],
      why: "The hepatitis B vaccines used in the UK contain a killed version of the virus, so there's no risk of getting the infection from the vaccine.",
    },
  },
  {
    id: "hep-liver-care",
    kicker: "Living well",
    question: "How can I look after my liver with hepatitis?",
    hook: "Alcohol, weight, smoking and medicines all add to the load. Small changes give the liver its best chance.",
    short: "Hepatitis B and C can damage the liver, so it helps to protect it in other ways. That means asking your doctor about alcohol, eating a balanced diet, keeping active, stopping smoking and checking medicines and supplements first. Vaccines against other types of hepatitis can help too.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "Living with hepatitis B can damage your liver, so it's a good idea to look after it in other ways. Being overweight, drinking alcohol, smoking or having more than one type of hepatitis can increase your chances of liver damage.",
          "With hepatitis C, you may get complications more quickly if you drink alcohol regularly or also have hepatitis B or HIV. Your specialist will recommend changes to help prevent further damage, such as keeping to a healthy weight, stopping smoking and avoiding or cutting down on alcohol.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "The NHS advice when you have hepatitis B is not to drink alcohol. Liver UK says your doctor will tell you if it is safe for you to drink and how much. Its general advice is not to have more than 14 units a week, with at least 3 days without alcohol in a row every week.",
          "If you are recovering from hepatitis C, Liver UK says to drink only a very small amount, with 2 to 3 alcohol-free days in a row every week. If the damage to your liver is more severe, your doctor may recommend that you do not drink alcohol at all.",
          "Stopping drinking can be a very difficult change to make, especially if those around you continue to drink. Your GP or specialist care team can talk with you about how to cut down safely. If you use alcohol or other drugs, you can still have treatment for hepatitis C.",
        ],
      },
      {
        heading: "Food, weight and activity",
        paragraphs: [
          "If you do not have cirrhosis, you do not need to eat or avoid any specific foods. Aim for a well-balanced diet with plenty of fibre, vegetables and fruit, and cut down on fatty, sugary and salty foods and drinks.",
          "Being overweight can cause fat to build up in your liver, which makes it harder for it to repair itself. Being physically active helps you keep to a healthy weight and is a good way to boost your mood. Doing something is better than nothing, even something small.",
        ],
      },
      {
        heading: "Smoking, medicines and supplements",
        paragraphs: [
          "Smoking greatly increases the amount of toxins in your body and makes it harder for your liver to work. Stopping smoking will help your liver to recover.",
          "Your liver processes all the medicines you take. Ask your doctor if there are common medicines, like paracetamol, that you should avoid or take less of at a time. Make sure doctors prescribing you a new medicine know you have hepatitis B.",
          "There are no supplements or alternative medicines shown to help with hepatitis C. Always talk to your doctor or pharmacist before taking a new medicine or supplement, even if it is something natural.",
        ],
      },
      {
        heading: "Vaccines that protect the liver",
        paragraphs: [
          "If you have hepatitis C, ask your treatment team or GP about being vaccinated against hepatitis A and B. If you have cirrhosis, the NHS says to stay up to date with vaccinations, such as the flu vaccine and pneumococcal vaccine.",
        ],
      },
    ],
    helps: [
      "Ask your doctor whether it is safe for you to drink alcohol, and how much.",
      "Eat a well-balanced diet with plenty of fibre, vegetables and fruit.",
      "Be physically active: doing something is better than nothing, even something small.",
      "Stop smoking, to help your liver to recover.",
      "Talk to your doctor or pharmacist before taking a new medicine, painkiller or supplement.",
      "Ask your treatment team or GP about being vaccinated against hepatitis A and B.",
    ],
    tryThisWeek: [
      "Ask if any alcohol is safe for you.",
      "Check new medicines with a pharmacist.",
      "Ask about hepatitis A and B vaccines.",
    ],
    ask: "What can I do to protect my liver, and is any alcohol safe for me?",
    interactive: {
      kind: "risk-check",
      title: "What adds to the strain on your liver?",
      intro: "Tick any that apply. Most of these can change, with support if you want it.",
      items: [
        { id: "alcohol", label: "Drinking alcohol", note: "Your doctor will tell you if it is safe for you to drink alcohol and how much.", changeable: true },
        { id: "weight", label: "Being overweight", note: "Fat can build up in your liver, which makes it harder for it to repair itself.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Stopping smoking will help your liver to recover and has lots of other health benefits.", changeable: true },
        { id: "medicines", label: "New medicines or supplements", note: "Talk to your doctor or pharmacist first, even if it is something natural.", changeable: true },
        { id: "other-hepatitis", label: "More than one type of hepatitis", note: "This can increase the chance of liver damage. Ask about vaccines against hepatitis A and B.", changeable: false },
      ],
    },
    sources: [NHS_HEP_B, NHS_HEP_C, LU_HEP_B_DIAGNOSED, LU_HEP_C, HCT_DIAGNOSED, HCT_TREATMENT, NHS_CIRRHOSIS],
    quiz: {
      question: "With hepatitis C and no cirrhosis, do you need a special diet?",
      options: [{ text: "No, a healthy balanced diet is the aim", right: true }, { text: "Yes, a liver detox diet" }, { text: "Yes, with no fat at all" }],
      why: "If you do not have cirrhosis, then you do not need to eat or to avoid any specific foods. Instead, aim to eat a healthy balanced diet.",
    },
  },
  {
    id: "hep-telling-others",
    kicker: "Living well",
    question: "Who should I tell, and how?",
    hook: "It is your choice. Telling partners and the people you live with lets them get tested, and a few people you trust can make a real difference.",
    short: "Who you tell is up to you, but telling partners and the people you live with means they can get tested, and vaccinated against hepatitis B. Planning what to say helps. In most jobs you do not have to tell your employer unless you are a healthcare worker.",
    sections: [
      {
        heading: "Your choice who to tell",
        paragraphs: [
          "You don't have to tell your family and friends if you don't want to. But it can be a relief to tell someone else, and having someone to talk to can stop you feeling alone. Think about who you trust and who has been there for you in the past.",
          "Hepatitis C is sometimes stigmatised and not well understood, which may make you want to keep your diagnosis to yourself. But this may make you feel isolated, and choosing to tell a few people you trust can make a big difference to how you are feeling.",
        ],
      },
      {
        heading: "Partners and the people you live with",
        paragraphs: [
          "Hepatitis B can be passed on, so think about telling the people you are close to so they can get a test or a vaccine. It's a good idea for everyone in your household and your sexual partners to have a hepatitis B test, and a safe and very effective vaccine is available for free.",
          "With hepatitis C, your specialist care team will advise you to tell sexual partners so that they can get tested. Telling your partner allows you to decide together what protections you would like to put in place.",
          "If you find it difficult to tell ex-partners, a healthcare professional can contact them for you. They can do this without giving any of your details away.",
        ],
      },
      {
        heading: "What to say",
        paragraphs: [
          "It can help to think through the conversation first. What are the main things you want the person to know? They might have lots of questions, so have some information you can show them, like a leaflet or a trusted website.",
          "With hepatitis C, you might start by telling them that the virus is curable and is only spread through blood-to-blood contact. With hepatitis B, it is safe to make and share food and to kiss and hug people.",
          "Think through how you might respond if the person's reaction is negative. Even those we love and trust most do not always react how we expect them to.",
        ],
      },
      {
        heading: "Work and health care",
        paragraphs: [
          "In most cases it is up to you whether you tell your employer, but healthcare workers need to tell them. If you tell your employer you have hepatitis C, you are protected under the Equality Act 2010, and they can make reasonable adjustments such as extra time off for medical appointments.",
          "Once you have had hepatitis B, always tell anyone giving you medical treatment, including your dentist. If you have insurance that is renewed every year, such as private medical insurance, you may need to tell the insurer.",
        ],
      },
    ],
    helps: [
      "Think about who you trust and who has been there for you in the past.",
      "Ask the people in your household and your sexual partners to have a test, and a hepatitis B vaccine if needed.",
      "Write down what you are going to say, practise saying it, and have some information to show them.",
      "If it is hard to tell ex-partners, ask a healthcare professional to contact them for you.",
      "Tell anyone giving you medical treatment, including your dentist.",
      "Call a helpline if you need support before or after you tell people.",
    ],
    tryThisWeek: [
      "Think of one person you trust.",
      "Ask partners to get tested.",
      "Write down what you'll say.",
    ],
    ask: "Who should I ask to be tested or vaccinated, and can you help me tell them?",
    interactive: {
      kind: "scenarios",
      title: "Telling people, moment by moment",
      scenarios: [
        {
          id: "partner",
          situation: "You're not sure how to tell your partner.",
          options: [{ text: "Plan what to say, and suggest a test", best: true }, { text: "Say nothing for now" }],
          why: "Telling your partner allows you to decide together what protections to put in place. They can also decide if they want to get tested.",
        },
        {
          id: "ex",
          situation: "You can't face contacting an ex-partner.",
          options: [{ text: "Ask a healthcare professional to do it", best: true }, { text: "Leave it" }],
          why: "A healthcare professional can contact them for you. They can do this without giving any of your details away.",
        },
        {
          id: "family",
          situation: "A relative worries about sharing meals with you because you have hepatitis B.",
          options: [{ text: "Explain that sharing food is safe", best: true }, { text: "Eat separately from now on" }],
          why: "It is safe to make and share food and to kiss and hug people.",
        },
        {
          id: "work",
          situation: "You're deciding whether to tell your employer about hepatitis C.",
          options: [{ text: "It's your choice, unless you're a healthcare worker", best: true }, { text: "Everyone has to tell their employer" }],
          why: "There is no obligation to tell your employer you have hepatitis C, unless you are a healthcare worker.",
        },
      ],
    },
    sources: [LU_HEP_B_DIAGNOSED, HCT_TELLING, LU_HEP_B_ACUTE, LU_HEP_B_CHILDREN, HCT_PREVENT],
    quiz: {
      question: "Do you have to tell your employer you have hepatitis C?",
      options: [{ text: "Not unless you are a healthcare worker", right: true }, { text: "Yes, always" }, { text: "Only if you work part-time" }],
      why: "There is no obligation for you to inform your employer you have hepatitis C, unless you are a healthcare worker.",
    },
  },
  {
    id: "hep-pregnancy",
    kicker: "Pregnancy",
    question: "Can I have a baby if I have hepatitis B or C?",
    hook: "Yes. Testing in pregnancy, treatment where needed and on-time vaccines for the baby protect most babies.",
    short: "Women living with hepatitis B can safely have children. Hepatitis B is part of the blood tests offered early in pregnancy, and on-time vaccines for the baby greatly lower the chance of it passing on. Passing hepatitis C to a baby is uncommon, and hepatitis C treatment waits until after the birth.",
    sections: [
      {
        heading: "Testing in pregnancy",
        paragraphs: [
          "Screening for hepatitis B, HIV and syphilis is offered in pregnancy, usually between 8 and 12 weeks. Women who already know they have hepatitis B are still advised to be tested in every pregnancy.",
          "If you think you might be at risk of hepatitis C and you are pregnant, or thinking of becoming pregnant, Liver UK says to ask for a hepatitis C test.",
        ],
      },
      {
        heading: "Hepatitis B and your baby",
        paragraphs: [
          "Women living with hepatitis B can safely have children. Vaccines and treatments that can stop the virus being passed on are now part of usual medical care for women with hepatitis B giving birth in the UK.",
          "If you are living with hepatitis B, specialist teams check your health before and after the birth. If you have been told you are at high risk of passing it on, you should receive antiviral tablets in the 28th week of pregnancy, which helps reduce the risk for your baby.",
          "Babies who become infected at birth have a 9 in 10 chance of developing chronic hepatitis B. This is reduced to around 1 in 10 if the baby completes the full course of vaccinations.",
        ],
      },
      {
        heading: "Your baby's vaccines",
        paragraphs: [
          "Babies born to mothers with hepatitis B have extra doses of hepatitis B vaccine: within 24 hours of birth, at 4 weeks, at 8, 12 and 16 weeks as part of the routine 6-in-1 vaccine, and at 18 months. Your baby may also need an injection of antibodies with their first vaccination.",
          "Your baby will also have a blood test at their final vaccination, between 12 and 18 months of age, to check infection was avoided. Ask your GP, practice nurse or health visitor if any of these do not happen.",
        ],
      },
      {
        heading: "Hepatitis C and pregnancy",
        paragraphs: [
          "It is possible for a mother with hepatitis C to pass the virus to her baby, but this is uncommon. About 5 in 100 babies born to mothers who have hepatitis C get the infection. Hepatitis C has not been found to cause problems during pregnancy.",
          "It is not known if current hepatitis C treatments are safe in pregnancy, so if you are already pregnant, treatment is delayed until after the baby is born. The usual time to test a baby for hepatitis C is 18 months, because babies carry their mother's antibodies for a while.",
          "Breastfeeding is considered safe with hepatitis C. If your nipples are cracked and bleeding, do not breastfeed until they are healed.",
        ],
      },
    ],
    helps: [
      "Have the infectious diseases blood test in pregnancy, even if you already know you have hepatitis B.",
      "Tell your midwife if you already have hepatitis B.",
      "Make sure your baby has all 6 recommended hepatitis B vaccinations at the correct times.",
      "Ask your GP, practice nurse or health visitor if any vaccination does not happen.",
      "If you think you might be at risk of hepatitis C, ask for a test if you are pregnant or planning a pregnancy.",
      "During hepatitis C treatment and for 6 months after, use two forms of contraception, as the NHS recommends.",
    ],
    tryThisWeek: [
      "Have the screening blood test.",
      "Make sure every vaccine happens.",
      "Ask about a hepatitis C test.",
    ],
    ask: "What care will my baby and I need around the birth?",
    interactive: {
      kind: "timeline",
      title: "Hepatitis B: from pregnancy to 18 months",
      steps: [
        { id: "screening", when: "8 to 12 weeks", title: "Screening blood test", points: ["Offered in every pregnancy", "A specialist midwife will contact you if it is positive"] },
        { id: "week-28", when: "28th week", title: "Antiviral tablets, if needed", points: ["For women at high risk of passing it on", "Helps reduce the risk for the baby"] },
        { id: "birth", when: "Within 24 hours of birth", title: "First vaccine", points: ["Some babies also have an injection of antibodies"] },
        { id: "four-weeks", when: "4 weeks", title: "Second vaccine", points: ["An extra dose for babies of mothers with hepatitis B"] },
        { id: "routine", when: "8, 12 and 16 weeks", title: "The 6-in-1 vaccine", points: ["Part of the routine childhood schedule"] },
        { id: "final", when: "18 months", title: "Final vaccine and blood test", points: ["The blood test checks infection was avoided", "Ask your GP or health visitor if a dose is missed"] },
      ],
    },
    sources: [NHS_PREGNANCY_SCREENING, GOV_IDPS, NHS_HEP_B_VACCINE, LU_HEP_B_CHILDREN, LU_HEP_B_RISK, HCT_TREATMENT, HCT_RISKS, LU_HEP_C, LU_HEP_B_TREATMENT],
    quiz: {
      question: "How much do on-time vaccines lower a baby's chance of chronic hepatitis B?",
      options: [{ text: "From a 9 in 10 chance to around 1 in 10", right: true }, { text: "They make no difference" }, { text: "From 1 in 10 to none at all" }],
      why: "Babies who become infected at birth have a 9 in 10 chance of developing chronic hepatitis B. The risk is reduced to around 1 in 10 if the baby completes the full course of vaccinations.",
    },
  },
  {
    id: "hep-stigma",
    kicker: "Support",
    question: "How do I deal with stigma, and where can I get support?",
    hook: "Hepatitis is often misunderstood. Facts help, and so do people who have been there.",
    short: "Hepatitis B and C are sometimes stigmatised and misunderstood, but neither spreads through everyday contact. Feeling shocked, angry or upset after a diagnosis is normal. Helplines run by specialist nurses and by people with personal experience, and support groups, are there to help.",
    sections: [
      {
        heading: "Stigma is common, and unfair",
        paragraphs: [
          "There can be a stigma associated with hepatitis B, and sometimes family and friends don't fully understand what it is. Hepatitis C is also sometimes stigmatised and not well understood.",
          "There is no need to treat someone with hepatitis C as if they are dangerous or infectious. The virus can only be passed on by blood-to-blood contact, not through everyday things like hugging, handshakes or sharing cutlery.",
          "Words matter too. One phase of hepatitis B used to be called being a carrier. The name was changed because it was hurtful to people living with hepatitis B, and many doctors and nurses no longer use it.",
        ],
      },
      {
        heading: "Your feelings",
        paragraphs: [
          "Being diagnosed with chronic hepatitis B can be a big shock, and you might feel overwhelmed. There is no right or wrong way to react. After a hepatitis C diagnosis, it is normal to feel anxious, shocked, angry, upset or numb, or relieved to have an explanation.",
          "Chronic hepatitis B is usually a lifelong condition, but when it is under control, it's unlikely to cause serious health problems. Hepatitis C is curable.",
        ],
      },
      {
        heading: "Support from people who understand",
        paragraphs: [
          "The Hepatitis C Trust's confidential helpline is on 020 7089 6221, and most of its team have lived experience of hepatitis C. It can also help people affected by infected blood with questions about support and compensation.",
          "Liver UK's free nurse-led helpline is on 0800 652 7330, from 9am to 4pm, Monday to Friday. Liver UK also runs support groups that meet face to face and online, and an online community.",
          "Your hospital specialist is there to help too, and might be able to recommend local groups where you can meet other people living with hepatitis B.",
        ],
      },
      {
        heading: "If you were affected by infected blood",
        paragraphs: [
          "If you or a member of your family have been affected by treatment from infected blood, you may be able to get financial support from the Infected Blood Compensation Authority. If you live in England, you might be able to get psychological support from the Infected Blood Psychological Service.",
        ],
      },
      {
        heading: "Keeping worry in its place",
        paragraphs: [
          "It is normal to worry about those you love, but you should not let worry stop you from leading a normal life. Be careful of information you find on the internet, and check it is from a reliable source like the NHS or a well-known charity.",
        ],
      },
    ],
    helps: [
      "Remember there is no right or wrong way to react to a diagnosis.",
      "Call The Hepatitis C Trust's confidential helpline on 020 7089 6221 to talk to someone who understands hepatitis C.",
      "Call Liver UK's nurse-led helpline on 0800 652 7330, from 9am to 4pm, Monday to Friday.",
      "Join a support group, face to face or online.",
      "Check that information is from a reliable source like the NHS or a well-known charity.",
    ],
    tryThisWeek: [
      "Call a helpline if you need to.",
      "Try a support group.",
      "Use trusted sources only.",
    ],
    ask: "Is there a local group, or someone I can talk to about living with hepatitis?",
    interactive: {
      kind: "scenarios",
      title: "When stigma shows up",
      scenarios: [
        {
          id: "friend",
          situation: "A friend says hepatitis C means you are dangerous to be around.",
          options: [{ text: "Explain it only spreads blood to blood", best: true }, { text: "Stop seeing them" }],
          why: "There is no need to treat someone with hepatitis C as if they are dangerous or infectious. The virus can only be passed on by blood-to-blood contact.",
        },
        {
          id: "carrier",
          situation: "Someone calls you a hepatitis B carrier.",
          options: [{ text: "Know the term was dropped as hurtful", best: true }, { text: "Accept it means you are a risk" }],
          why: "The name was changed because it was hurtful to people living with hepatitis B, and many doctors and nurses no longer use it.",
        },
        {
          id: "alone",
          situation: "You feel you cannot tell anyone you know.",
          options: [{ text: "Call a helpline", best: true }, { text: "Keep it all to yourself" }],
          why: "If you feel like you cannot tell anyone you know about your diagnosis, you can always contact a helpline run by people who have been there.",
        },
        {
          id: "online",
          situation: "You read a frightening claim about hepatitis online.",
          options: [{ text: "Check it with the NHS or a well-known charity", best: true }, { text: "Take it as true" }],
          why: "Be careful of information you find on the internet, and check it is from a reliable source like the NHS or a well-known charity.",
        },
      ],
    },
    sources: [LU_HEP_B_DISEASE, HCT_TELLING, LU_HEP_B_CHILDREN, LU_HEP_C, HCT_DIAGNOSED, LU_HEP_B_DIAGNOSED, HCT_HELPLINE, LU_HELPLINE, LU_SUPPORT_GROUPS, NHS_INFECTED_BLOOD, HCT_PREVENT],
    quiz: {
      question: "Why did doctors stop calling one phase of hepatitis B being a carrier?",
      options: [{ text: "It was hurtful to people living with hepatitis B", right: true }, { text: "That phase no longer exists" }, { text: "The word was too long" }],
      why: "The name was changed because it was hurtful to people living with hepatitis B.",
    },
  },
  {
    id: "hep-checks",
    kicker: "Follow-up",
    question: "What checks will I need after treatment, and for how long?",
    hook: "A test for cure after hepatitis C, lifelong check-ups with hepatitis B, and liver cancer checks for some.",
    short: "After hepatitis C treatment, a blood test 12 weeks after the course ends checks for cure. People with chronic hepatitis B have check-ups for the long term, because liver damage often has no symptoms. People with cirrhosis or long-term hepatitis B are usually offered a liver cancer check every 6 months.",
    sections: [
      {
        heading: "After hepatitis C treatment",
        paragraphs: [
          "At the end of treatment you may have a blood test, followed by a second blood test 12 weeks after treatment has finished to test for cure. If both tests show no sign of the virus, treatment has been successful.",
          "Your liver has an amazing ability to repair itself. After successful treatment, it will be much easier for your liver to work properly, and you will have a much lower risk of severe liver disease or liver cancer. If hepatitis C has caused damage, it might take a while for you to feel better.",
        ],
      },
      {
        heading: "Checks for liver cancer",
        paragraphs: [
          "Your doctors might suggest regular checks for liver cancer. Most people with cirrhosis or long-term hepatitis B are offered a check-up every 6 months, which normally includes a liver ultrasound scan, and in some hospitals a blood test.",
          "Finding liver cancer early means it can often be cured, so it's important to take part every time, even if you feel okay. The ultrasound scan takes about 15 to 30 minutes and it doesn't hurt.",
        ],
      },
      {
        heading: "Living with hepatitis B",
        paragraphs: [
          "With chronic hepatitis B, check-ups continue for the long term. If you are not having treatment, you'll have tests every 6 months to a year, and a scan or other test for liver scarring once a year.",
          "Liver damage often has no symptoms, so it is important to go to all your appointments. An ALT flare, a rapid rise in a liver blood test, usually causes no symptoms, and checking your blood tests is the only way doctors know about it.",
        ],
      },
      {
        heading: "Signs to act on",
        paragraphs: [
          "If you develop symptoms of hepatitis B or liver disease, tell your doctor straight away. Signs of later liver damage include yellowing of the skin and whites of the eyes, swelling of your tummy, legs or ankles, very itchy skin, and bleeding or bruising easily.",
          "If you've been diagnosed with cirrhosis, ask for an urgent GP appointment or get help from NHS 111 if your skin or eyes look yellow, you have difficulty breathing, or your tummy, legs, ankles or feet are swollen. Call 999 or go to A&E if you're vomiting blood, your poo is very dark or black, or you suddenly become confused or have slurred speech.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
    ],
    helps: [
      "Go to your blood test 12 weeks after hepatitis C treatment ends.",
      "If you are offered liver cancer checks, take part every time, even if you feel okay.",
      "Go to all your hepatitis B check-ups, as liver damage often has no symptoms.",
      "Tell your doctor straight away if you develop symptoms of hepatitis B or liver disease.",
      "If you have cirrhosis, call 999 or go to A&E if you vomit blood, your poo is very dark or black, or you suddenly become confused.",
    ],
    tryThisWeek: [
      "Go to your 12-week test.",
      "Go to every liver cancer check.",
      "Know the signs that mean 999.",
    ],
    ask: "Which checks do I need now, and how often?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor about",
      intro: "Tick any you have noticed. Liver damage is often silent, so checks matter even when you feel well.",
      signs: [
        "Yellow skin or whites of the eyes",
        "Tiredness and weakness",
        "Weight loss",
        "Very itchy skin",
        "Swelling of the tummy, legs or ankles",
        "Dark-coloured pee",
        "Bleeding or bruising easily",
        "Vomiting blood",
        "Very dark or black poo",
        "Confusion or memory loss",
      ],
      after: "Tell your doctor straight away. With cirrhosis, vomiting blood, very dark or black poo, or suddenly becoming confused means call 999 or go to A&E.",
      copyHeading: "Signs I have noticed",
    },
    sources: [HCT_TREATMENT, LU_HEP_C, LU_SURVEILLANCE, LU_HEP_B_TREATMENT, LU_HEP_B_SYMPTOMS, NHS_CIRRHOSIS, HCT_LIVER],
    quiz: {
      question: "Why go to hepatitis B check-ups when you feel well?",
      options: [{ text: "Liver damage often has no symptoms", right: true }, { text: "To have a new vaccine each time" }, { text: "There is no need when you feel well" }],
      why: "Liver damage often has no symptoms, so it is important to go to all your appointments.",
    },
  },
];
