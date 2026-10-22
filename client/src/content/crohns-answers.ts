import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Crohn's disease page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and
// Crohn's & Colitis UK, with Guts UK and the government's Access to Work page. The NHS now has one page
// for Crohn's disease (its old symptoms, causes and treatment pages redirect to it). General information
// only; it never replaces what a person's own GP or IBD team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const ccuk = (label: string, path: string): LearnSource => ({
  label: `Crohn's & Colitis UK: ${label}`,
  url: `https://www.crohnsandcolitis.org.uk/info-support/information-about-crohns-and-colitis/all-information-about-crohns-and-colitis/${path}`,
});

const NHS_CD = nhs("Crohn's disease", "conditions/crohns-disease/");
const NHS_AZA = nhs("Azathioprine", "medicines/azathioprine/");
const NHS_COLONOSCOPY = nhs("Colonoscopy", "tests-and-treatments/colonoscopy/");

const CCUK_CD = ccuk("Crohn's Disease", "understanding-crohns-and-colitis/crohns-disease");
const CCUK_DIAGNOSIS = ccuk("Getting a diagnosis", "understanding-crohns-and-colitis/how-to-get-a-diagnosis");
const CCUK_TESTS = ccuk("Tests and investigations", "healthcare/tests-and-investigations");
const CCUK_FLARES = ccuk("Flare-ups", "symptoms/flare-ups");
const CCUK_FATIGUE = ccuk("Fatigue", "symptoms/fatigue");
const CCUK_URGENCY = ccuk("Bowel incontinence and urgency", "symptoms/bowel-incontinence-and-urgency");
const CCUK_BONES = ccuk("Bones", "symptoms/bones");
const CCUK_STEROIDS = ccuk("Steroids", "treatments/steroids");
const CCUK_AZA = ccuk("Azathioprine and mercaptopurine", "treatments/azathioprine-and-mercaptopurine");
const CCUK_BIOLOGICS = ccuk("Biologics and other targeted medicines", "treatments/biologics-and-other-targeted-medicines");
const CCUK_IMMUNO = ccuk("Immunosuppressant precautions", "treatments/immunosuppressant-precautions");
const CCUK_SURGERY = ccuk("Surgery for Crohn's Disease", "surgery-and-complications/surgery-for-crohns-disease");
const CCUK_FOOD = ccuk("Food", "living-with-crohns-or-colitis/food");
const CCUK_MENTAL = ccuk("Mental health and wellbeing", "living-with-crohns-or-colitis/mental-health-and-wellbeing");
const CCUK_SMOKING = ccuk("Smoking or vaping with Crohn's or Colitis", "living-with-crohns-or-colitis/smoking-or-vaping-with-crohns-or-colitis");
const CCUK_EMPLOYMENT = ccuk("Employment: a guide for employees", "employment-and-education/employment-a-guide-for-employees");
const CCUK_STUDENTS = ccuk("Children, young adults and students", "children-young-adults-and-students");

const GUTS_CD: LearnSource = { label: "Guts UK: Crohn's disease", url: "https://gutscharity.org.uk/advice-and-information/conditions/crohns-disease/" };
const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const crohnsAnswers: LearnArticle[] = [
  {
    id: "cd-what-it-is",
    kicker: "Understanding",
    question: "What is Crohn's disease?",
    hook: "Patches of inflammation that can appear anywhere from the mouth to the bottom, and that come and go over a lifetime.",
    short: "Crohn's disease is a long-term condition where part of your gut becomes inflamed. It is a type of inflammatory bowel disease, or IBD, and it comes and goes in flare-ups and calmer times called remission. It cannot currently be cured, but there are treatments that can help prevent or manage the symptoms.",
    sections: [
      {
        heading: "Inflammation in the gut",
        paragraphs: [
          "Crohn's disease is a long-term condition where part of your gut becomes inflamed. It cannot currently be cured, but there are treatments that can help prevent or manage the symptoms.",
          "Crohn's is a type of inflammatory bowel disease, or IBD. In Crohn's, parts of the gut become swollen, inflamed and ulcerated. This can cause pain, diarrhoea, weight loss and fatigue.",
        ],
      },
      {
        heading: "Anywhere from mouth to bottom",
        paragraphs: [
          "The gut starts at your mouth and ends at your bottom, or anus, where poo passes out of your body. Crohn's can be found anywhere in the gut, but it won't be everywhere. It is most common in the small bowel and colon.",
          "Areas of inflammation are often patchy, with sections of healthy gut in between. Crohn's can affect all layers of the gut, and the inflammation affects how your body digests food, absorbs nutrients and gets rid of waste.",
        ],
      },
      {
        heading: "Flare-ups and remission",
        paragraphs: [
          "Crohn's is a lifelong condition. You may have periods of good health known as remission, as well as times when symptoms are more active, known as flare-ups or relapses.",
          "Some people have mild symptoms, while others have more severe symptoms that affect their general health. Treatment aims to achieve and maintain remission.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "Crohn's disease affects 1 in every 650 people, and it is equally common across genders. It can be diagnosed at any age, most commonly before the age of 30.",
          "IBD is not the same as irritable bowel syndrome, or IBS. IBS has some symptoms which are similar to Crohn's, but it does not cause inflammation in the gut and there's no blood in poo.",
        ],
      },
      {
        heading: "A team for the long term",
        paragraphs: [
          "Everyone with a diagnosis of Crohn's should be seen by an IBD specialist and cared for by a team of healthcare professionals. The team is led by a consultant gastroenterologist, a doctor who specialises in the digestive system, and is likely to include IBD nurse specialists and surgeons.",
          "People who have Crohn's can generally expect to live a long life. And although your team are experts in Crohn's, you will become the expert in how the condition affects you.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you could have Crohn's disease.",
      "Ask for the contact details of your IBD team.",
      "Learn about your condition: it can help you to improve your confidence.",
      "Talk to other people with Crohn's disease, either at a local support group or online.",
      "Call the Crohn's & Colitis UK Helpline on 0300 222 5700 for information and support.",
    ],
    tryThisWeek: [
      "Save your IBD team's contact details.",
      "Read one trusted guide on Crohn's.",
      "Find a local or online support group.",
    ],
    ask: "Which part of my gut is affected, and how active is my Crohn's?",
    interactive: {
      kind: "flip-cards",
      title: "Where Crohn's can be",
      intro: "Turn each card to see what Crohn's in each place is called, and its typical symptoms.",
      cards: [
        { id: "upper", front: "Upper gut", when: "Oesophagus, stomach or duodenum", back: "Typical symptoms include heartburn, indigestion-like pain, feeling sick and being sick." },
        { id: "small", front: "Small bowel", when: "Ileitis or jejunoileitis", back: "Tummy pain, fatigue, bloating and cramps when pooing. Nutrient deficiencies and strictures may be more likely." },
        { id: "ileal", front: "End of the small bowel", when: "Ileal or terminal ileal Crohn's", back: "One of the most common forms. Terminal means end here; it does not mean end of life." },
        { id: "colon", front: "Large bowel only", when: "Crohn's colitis", back: "Fatigue, diarrhoea which may include blood or mucus, urgency and tummy pain." },
        { id: "perianal", front: "Around the bottom", when: "Perianal Crohn's", back: "Can cause small tears, skin tags, abscesses and fistulas around the bottom." },
        { id: "mouth", front: "Mouth", when: "Oral Crohn's", back: "More likely to affect children. Can cause swollen lips and gums, and ulcers inside the cheeks." },
      ],
    },
    sources: [NHS_CD, CCUK_CD, GUTS_CD],
    quiz: {
      question: "Where in the gut can Crohn's disease appear?",
      options: [{ text: "Anywhere from the mouth to the bottom", right: true }, { text: "Only in the large bowel" }, { text: "Only in the stomach" }],
      why: "Crohn's can be found anywhere in the gut, but it won't be everywhere.",
    },
  },
  {
    id: "cd-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of Crohn's, and what is a flare-up?",
    hook: "Diarrhoea, tummy pain and tiredness are the most common. But Crohn's can show up in the joints, eyes and skin too.",
    short: "Crohn's disease symptoms vary, depending on which part of your gut is affected. They can include diarrhoea, stomach pain, feeling very tired and losing weight, and they usually come and go in flare-ups and remissions. A flare-up can last from a few days to several months.",
    sections: [
      {
        heading: "The most common symptoms",
        paragraphs: [
          "Crohn's disease symptoms vary, depending on which part of your gut is affected, such as your mouth, stomach, bowel or bottom. Symptoms can include diarrhoea, blood or mucus in your poo, stomach pain, constipation, pain in your bottom, feeling very tired or generally unwell, and loss of appetite and losing weight.",
          "Needing to reach a toilet quickly, known as urgency, is also common. In one study nearly 7 in every 10 people with Crohn's or Colitis reported having urgency.",
          "In children, Crohn's can mean not growing as expected, or delayed puberty.",
        ],
      },
      {
        heading: "Coming and going",
        paragraphs: [
          "The symptoms can be mild or severe. They usually come and go over time, called flare-ups and remissions. A flare-up can last from a few days to several months.",
          "Some people can go years without feeling unwell. For others, flare-ups may happen more often, and a few people have continuous symptoms of active Crohn's.",
        ],
      },
      {
        heading: "Beyond the gut",
        paragraphs: [
          "Up to 1 in every 2 people with Crohn's develop problems in other parts of the body. Commonly affected areas include joints, eyes and skin. They usually happen during a flare-up, but can occur without or before any gut symptoms.",
          "A flare-up can also cause mouth ulcers, nausea, fatigue and mental health problems. If you get any kind of painful eye irritation, redness or inflammation, tell your healthcare professional.",
        ],
      },
      {
        heading: "Complications to know about",
        paragraphs: [
          "Over time, inflammation can lead to a fistula, a tunnel that connects the bowel to another part of the body, or a stricture, where part of the gut becomes narrower. A stricture can cause severe cramping, feeling sick, being sick and a swollen tummy.",
          "Around 1 in 3 people with Crohn's develop a fistula. Anal or perianal fistulas are the most common type, with a sore swelling around the bottom.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "See a GP if you have Crohn's disease and your symptoms get worse or treatments are not helping. Ask for an urgent GP appointment or get help from NHS 111 if your poo is black or dark red, or you have bloody diarrhoea.",
          "Go to A&E or call 999 if you are vomiting up blood, are bleeding non-stop from your bottom, or have severe tummy pain, a high temperature and a rapid heartbeat. The same applies if you have severe dehydration, or a stoma you think might be blocked.",
          "In some cases, the bowel may become blocked. This causes severe tummy pain, bloating and vomiting, and if it happens, seek urgent medical attention.",
        ],
      },
    ],
    helps: [
      "Keep a diary of your symptoms and things like what you eat, any changes in your medicines, or stress.",
      "Tell your IBD team if you have new symptoms anywhere in your body, so they can be investigated.",
      "Find out if your IBD team has a direct phone number, email address or advice line.",
      "Ask for an urgent GP appointment or get help from NHS 111 if your poo is black or dark red, or you have bloody diarrhoea.",
      "Go to A&E or call 999 if you are vomiting blood, bleeding non-stop from your bottom, or have severe tummy pain with a high temperature and a rapid heartbeat.",
    ],
    tryThisWeek: [
      "Start a simple symptom diary.",
      "Save your IBD team's advice line.",
      "Learn the signs that need 999.",
    ],
    ask: "Which symptoms should I report straight away, and who do I call?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your IBD team",
      intro: "Tick any you have noticed. They become a list to share with your IBD team or GP.",
      signs: [
        "Diarrhoea, which may contain blood",
        "Urgently needing to poo",
        "Pain in the tummy area",
        "Losing weight without trying",
        "Generally feeling unwell",
        "Joint pain and swelling",
        "Painful, red or swollen eyes",
        "Mouth ulcers or skin rashes",
        "Extreme tiredness",
      ],
      after: "If you are vomiting blood, bleeding non-stop from your bottom, or have severe tummy pain with a high temperature and a rapid heartbeat, go to A&E or call 999.",
      copyHeading: "Symptoms to tell my IBD team",
    },
    sources: [NHS_CD, CCUK_CD, CCUK_FLARES, GUTS_CD, CCUK_URGENCY],
    quiz: {
      question: "How long can a Crohn's flare-up last?",
      options: [{ text: "From a few days to several months", right: true }, { text: "Always exactly one week" }, { text: "Only a few hours" }],
      why: "A flare-up can last from a few days to several months.",
    },
  },
  {
    id: "cd-causes",
    kicker: "Understanding",
    question: "What causes Crohn's disease?",
    hook: "Nothing you did. A mix of genes, gut bacteria and the immune system, with smoking the clearest risk you can change.",
    short: "Symptoms of Crohn's disease are caused by a problem with your immune system, which causes it to attack part of your gut. It's not fully understood why this happens. Experts believe that a mix of genes, bacteria in the gut and the environment probably cause it.",
    sections: [
      {
        heading: "The immune system goes wrong",
        paragraphs: [
          "Symptoms of Crohn's disease are caused by a problem with your immune system, which causes it to attack part of your gut. It's not fully understood why this happens.",
          "Research suggests that in Crohn's the protective gut barrier is faulty. Without this layer of protection, the immune system starts attacking certain bacteria or viruses that live in the gut, and this causes inflammation.",
          "Some sources call Crohn's an autoimmune condition. But some researchers think it is better described as an immune mediated condition, where the body is attacking bacteria in the gut rather than its own cells.",
        ],
      },
      {
        heading: "Genes and family",
        paragraphs: [
          "Crohn's is thought to be partly caused by the genes you inherit from your parents. Researchers have identified more than 200 genetic variations that affect your risk of developing Crohn's, and many of these are in genes that control the immune system.",
          "About one-fifth of people with Crohn's disease have a family member also affected. Identical twins of people with Crohn's have a 1 in 4 chance of developing it, which shows that genetics alone do not determine who gets it.",
          "Most people who have Crohn's or Colitis in their family will not develop either condition. But your risk is higher if a close family member is affected.",
        ],
      },
      {
        heading: "Gut bacteria and the environment",
        paragraphs: [
          "It is thought that in people with Crohn's, there may be an imbalance of good and bad bacteria in the bowel. Factors in the environment that may increase the risk include smoking, viruses, and some antibiotics and anti-inflammatory painkillers known as NSAIDs.",
          "You may be more likely to get Crohn's disease if you've recently had a stomach bug, or you've had your appendix removed in the last few years. But there's no definite evidence that any one of these factors is the cause of Crohn's.",
        ],
      },
      {
        heading: "Smoking",
        paragraphs: [
          "Smoking increases your risk of developing Crohn's, and it can also make Crohn's worse. It has been linked to more flare-ups, more severe disease, needing surgery, and Crohn's flaring-up again after surgery.",
          "It's never too late to quit. If you stop smoking, your risk of a flare-up becomes the same as a non-smoker's. You're more likely to stop if you get support, and the NHS offers local stop smoking services.",
        ],
      },
      {
        heading: "Not your fault",
        paragraphs: [
          "There is no evidence that any particular food causes Crohn's or Colitis. There's nothing you could have done differently that would have prevented you from developing it.",
          "Ultra-processed foods might increase the risk of developing Crohn's. But there is not enough evidence yet to say for certain how what you eat affects the risk.",
        ],
      },
    ],
    helps: [
      "Do not smoke, as it can increase the risk of flare-ups.",
      "Ask about a local NHS stop smoking service: you're more likely to stop if you get support.",
      "Do not take NSAIDs, such as ibuprofen, unless they're recommended by a doctor.",
      "Tell your doctor if anyone in your family has a gut condition, as they may ask about it.",
      "Remember there's nothing you could have done differently to prevent Crohn's.",
    ],
    tryThisWeek: [
      "Look up a local stop smoking service.",
      "Check painkillers before taking them.",
      "Note any family history of gut conditions.",
    ],
    ask: "Does my family history change anything about my care, or my children's risk?",
    interactive: {
      kind: "risk-check",
      title: "What makes Crohn's more likely?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "family", label: "Family members with Crohn's", note: "The risk is higher if a close family member is affected, but most people with it in the family never develop it.", changeable: false },
        { id: "smoking", label: "Smoking", note: "Smoking increases the risk of Crohn's and makes it worse. If you stop, your flare-up risk becomes that of a non-smoker.", changeable: true },
        { id: "bug", label: "A recent stomach bug", note: "You may be more likely to get Crohn's disease if you've recently had a stomach bug.", changeable: false },
        { id: "appendix", label: "Appendix removed recently", note: "Having your appendix removed in the last few years may make Crohn's more likely.", changeable: false },
        { id: "nsaids", label: "Taking NSAIDs such as ibuprofen", note: "A possible risk factor. Do not take them unless a doctor recommends them.", changeable: true },
        { id: "processed", label: "Lots of ultra-processed food", note: "Ultra-processed foods might increase the risk, but there is not enough evidence yet to say for certain.", changeable: true },
      ],
    },
    sources: [NHS_CD, CCUK_CD, GUTS_CD, CCUK_SMOKING, CCUK_FOOD],
    quiz: {
      question: "Does any particular food cause Crohn's disease?",
      options: [{ text: "No, there is no evidence that it does", right: true }, { text: "Yes, spicy food" }, { text: "Yes, dairy food" }],
      why: "There is no evidence that any particular food causes Crohn's or Colitis.",
    },
  },
  {
    id: "cd-tests",
    kicker: "Tests",
    question: "How is Crohn's disease diagnosed?",
    hook: "No single test. Blood and poo tests come first, then camera tests, biopsies and scans build up the picture.",
    short: "There's no single test to diagnose Crohn's disease. A GP may arrange blood tests and tests on a sample of your poo, then refer you to a hospital specialist for tests such as a colonoscopy, a biopsy and scans. It often takes time to get a diagnosis, as the symptoms vary and can be similar to other conditions.",
    sections: [
      {
        heading: "Starting with the GP",
        paragraphs: [
          "If a GP thinks you could have Crohn's disease, they may arrange blood tests and tests on a sample of your poo. You'll need to be referred to a specialist in hospital for more tests to confirm the diagnosis and to start treatment.",
          "Tell your GP about your symptoms, how often you get them, or if anything triggers them. Tell them too if you're waking up in the night with pain or urgency to poo, as this can help them decide which investigations you need.",
        ],
      },
      {
        heading: "Blood and poo tests",
        paragraphs: [
          "Blood tests can show whether you have inflammation somewhere in your body and if you're anaemic. A CRP test measures a protein made by the liver, and its level in your blood increases when there's inflammation in your body.",
          "A faecal calprotectin test checks a poo sample for a protein that can show whether you have inflammation in your gut. It helps tell the difference between inflammatory bowel disease and conditions like irritable bowel syndrome. Levels above 100 micrograms per gram of poo are usually considered raised, but a raised level does not necessarily mean you have Crohn's.",
        ],
      },
      {
        heading: "Camera tests and biopsies",
        paragraphs: [
          "In a colonoscopy, a thin, flexible tube with a small camera inside goes into your bottom, to look at the whole large bowel and the end of the small bowel. It should take 30 to 45 minutes, and you'll be given laxatives beforehand to empty your bowel.",
          "If the tube goes through your mouth, it's called a gastroscopy. During an endoscopy, very small pieces of tissue called biopsies may be taken and looked at under a microscope. There is usually no pain when biopsies are taken.",
        ],
      },
      {
        heading: "Scans",
        paragraphs: [
          "MRI scans, CT scans and ultrasound scans can show where Crohn's is in your gut. MRI scans use strong magnets and radio waves and do not use X-ray radiation, and an MR enterography looks at the small bowel in more detail.",
          "In a capsule endoscopy, you swallow a small capsule the size of a large pill, with a camera inside that takes photos as it passes through your gut. It is not suitable for people with strictures, as it can become stuck.",
        ],
      },
      {
        heading: "Waiting for answers",
        paragraphs: [
          "It often takes time to get a diagnosis, as the symptoms vary and can be similar to other conditions such as irritable bowel syndrome, ulcerative colitis, diverticular disease and coeliac disease. But do not try to diagnose the problem yourself.",
          "You should receive a report of your endoscopy results within three weeks, though biopsy results can take up to two months. Contact your GP if you have not heard back within these times.",
        ],
      },
    ],
    helps: [
      "Write your symptoms down before your GP appointment, and mention the most important ones first.",
      "Tell your GP if you're waking up in the night with pain or urgency to poo.",
      "Follow the bowel prep instructions carefully, and stay near a toilet once you've started the laxatives.",
      "If you have sedation, arrange for someone to take you home, as you cannot drive for 24 hours.",
      "Contact your GP if you have not heard about your endoscopy results within three weeks.",
    ],
    tryThisWeek: [
      "Write down your symptoms.",
      "Plan a lift home after sedation.",
      "Chase results after three weeks.",
    ],
    ask: "Which tests do I need, and when and how will I get the results?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "bloods", front: "Blood tests", when: "Usually first, and to monitor", back: "Check for inflammation and anaemia, and whether your medicine is causing any side effects." },
        { id: "calprotectin", front: "Faecal calprotectin", when: "A test on a poo sample", back: "Shows whether you have inflammation in your gut. Helps tell IBD apart from IBS." },
        { id: "colonoscopy", front: "Colonoscopy", when: "A camera through your bottom", back: "Looks at the whole large bowel and the end of the small bowel. Takes 30 to 45 minutes." },
        { id: "gastroscopy", front: "Gastroscopy", when: "A camera through your mouth", back: "Looks at your throat, stomach and small bowel. Sometimes used if you have symptoms in the upper gut." },
        { id: "biopsy", front: "Biopsy", when: "During an endoscopy", back: "Very small pieces of tissue, looked at under a microscope to check for inflammation." },
        { id: "mri", front: "MRI scan", when: "To see where Crohn's is", back: "Uses magnets and radio waves, not X-rays. Can find inflammation, blockages and bleeding in the small bowel." },
        { id: "capsule", front: "Capsule endoscopy", when: "If other scans do not show it well", back: "A pill-sized camera you swallow. Not suitable if you have a stricture, as it can become stuck." },
      ],
    },
    sources: [NHS_CD, CCUK_TESTS, CCUK_DIAGNOSIS, NHS_COLONOSCOPY],
    quiz: {
      question: "Is there one single test that diagnoses Crohn's disease?",
      options: [{ text: "No, several tests build up the picture", right: true }, { text: "Yes, a blood test" }, { text: "Yes, a urine test" }],
      why: "There's no single test to diagnose Crohn's disease.",
    },
  },
  {
    id: "cd-medicines",
    kicker: "Treatment",
    question: "Which medicines treat Crohn's: steroids, immunosuppressants and biologics?",
    hook: "First to calm a flare, then to keep it calm. Finding the right medicine can take time, and that is normal.",
    short: "Medicines for Crohn's first get it under control, then help keep it under control. Steroids quickly reduce inflammation during a flare-up but are only used for a short time. Immunosuppressants such as azathioprine, and biologics such as adalimumab or infliximab, can keep Crohn's under control for longer.",
    sections: [
      {
        heading: "Two jobs for medicines",
        paragraphs: [
          "First, medicines are used to get your Crohn's under control. This is called induction. Once your Crohn's is under control, you might take medicine to keep it under control, known as remission.",
          "Medicines do not work the same way for everyone, and it is not always possible to predict which treatment will suit you best. It may take some time to find the right medicine for you.",
        ],
      },
      {
        heading: "Steroids",
        paragraphs: [
          "Steroids such as prednisolone and budesonide are often the first medicine tried to get Crohn's under control. When you're in a flare-up, they can quickly reduce the inflammation in your gut, but they can't be used to control Crohn's long-term.",
          "At least half of people taking steroids for Crohn's and Colitis have some side effects, such as a more rounded face, weight gain, sleep problems and mood changes. Taking steroids for 3 months or more increases your risk of weak bones.",
          "Never suddenly stop taking steroids, even if you feel better. Some steroids need to be slowly reduced before stopping them, and your IBD team will tell you how.",
        ],
      },
      {
        heading: "Immunosuppressants",
        paragraphs: [
          "Immunosuppressants such as azathioprine, mercaptopurine and methotrexate are tablets that dampen down the immune response. If you've had two or more flare-ups in 12 months that needed steroids, you might be offered them to help you reduce or stop steroids.",
          "It can take three months or more for azathioprine and mercaptopurine to start working. They should not be taken with milk or dairy products, and you'll need regular blood tests to check your liver and bone marrow.",
        ],
      },
      {
        heading: "Biologics and targeted medicines",
        paragraphs: [
          "Biologics such as adalimumab, infliximab, ustekinumab, vedolizumab and risankizumab block particular proteins involved in inflammation. They may be an option when other medicines haven't worked, have stopped working, or have side effects that are hard to manage.",
          "Biologics are given through a drip in your arm or as an injection under your skin, which many people learn to give themselves at home. Other targeted medicines, such as upadacitinib, are tablets. Your IBD team should review your treatment at least once a year.",
        ],
      },
      {
        heading: "Living safely on treatment",
        paragraphs: [
          "Steroids, immunosuppressants and biologics affect your immune system, so you might not fight off infections as well as other people. Tell your doctor or IBD team immediately if you develop symptoms of an infection, such as a high temperature or a persistent cough.",
          "Painkillers, laxatives or medicines to stop diarrhoea can help with symptoms, but they don't treat the inflammation. Talk to your doctor or IBD team before taking medicines you can buy yourself, and do not take NSAIDs such as ibuprofen unless a doctor recommends them.",
        ],
      },
    ],
    helps: [
      "Take your medicines as prescribed by your IBD team, even when you feel well.",
      "Never suddenly stop taking steroids: ask your IBD team how to reduce them slowly.",
      "Carry your steroid warning card and show it to any healthcare professional treating you, including dentists.",
      "Take azathioprine one hour before or two hours after milk or any dairy products.",
      "Tell your IBD team about any side effects, and talk to them before taking medicines you can buy yourself.",
    ],
    tryThisWeek: [
      "Set a daily medicine reminder.",
      "Keep your steroid card with you.",
      "Ask before buying any painkillers.",
    ],
    ask: "What are the options if my medicine stops working?",
    interactive: {
      kind: "flip-cards",
      title: "Your medicines, card by card",
      intro: "Turn each card to see when each type is used and what it does.",
      cards: [
        { id: "steroids", front: "Steroids", when: "To calm a flare-up", back: "Quickly reduce inflammation in the gut. Only taken for a set amount of time, and never stopped suddenly." },
        { id: "budesonide", front: "Budesonide", when: "Mild flare-up, end of small bowel", back: "Released in the bowel, so less goes into the blood and side effects are less likely." },
        { id: "thiopurines", front: "Azathioprine or mercaptopurine", when: "To keep Crohn's under control", back: "Tablets that dampen the immune response. Can take three months or more to work. Regular blood tests needed." },
        { id: "methotrexate", front: "Methotrexate", when: "If azathioprine has not worked", back: "Another immunosuppressant. It can be the next choice if azathioprine or mercaptopurine have failed." },
        { id: "biologics", front: "Biologics", when: "Moderate to severe Crohn's", back: "Block proteins involved in inflammation. Given through a drip or as an injection under the skin." },
        { id: "targeted", front: "Upadacitinib", when: "A targeted tablet", back: "A JAK inhibitor that blocks proteins causing inflammation. Taken by mouth." },
        { id: "symptoms", front: "Symptom medicines", when: "Painkillers, laxatives, anti-diarrhoea", back: "Ease symptoms but do not treat the inflammation. Check with your IBD team before taking them." },
      ],
    },
    sources: [NHS_CD, CCUK_CD, CCUK_STEROIDS, CCUK_AZA, NHS_AZA, CCUK_BIOLOGICS, GUTS_CD],
    quiz: {
      question: "Why are steroids not used to keep Crohn's under control for the long term?",
      options: [{ text: "They are for short-term use, and side effects are more likely over time", right: true }, { text: "They never work" }, { text: "They are only for children" }],
      why: "When you're in a flare-up, they can quickly reduce the inflammation in your gut, but they can't be used to control Crohn's long-term.",
    },
  },
  {
    id: "cd-surgery",
    kicker: "Treatment",
    question: "When is surgery used for Crohn's, and what is it like?",
    hook: "Not a last resort or a failure. For many people, an operation eases symptoms that medicines could not.",
    short: "You might be offered surgery if your symptoms only affect certain parts of your gut, or if you have severe symptoms and medicines are not working. Surgery may remove the damaged part of the gut, and sometimes involves a stoma. It can work well to reduce symptoms, but there's a chance Crohn's will come back in another part of the gut.",
    sections: [
      {
        heading: "Why surgery is offered",
        paragraphs: [
          "You might be offered surgery to treat Crohn's disease if your symptoms only affect certain parts of your gut, or if you have severe symptoms and medicines are not working. You may also need surgery to treat complications such as strictures, fistulas or abscesses.",
          "Many people think surgery is the last option, but that is not true. For some types of Crohn's, surgery can have similar results to medicines, and your surgeon should give you the information to help you make a decision.",
          "Fewer people with Crohn's need surgery than they did 20 years ago. Around 1 in 5 people with Crohn's will need major surgery to remove part of their bowel in the first 5 years after diagnosis.",
        ],
      },
      {
        heading: "Types of operation",
        paragraphs: [
          "A bowel resection removes the damaged part of the gut and joins healthy sections together. An ileocaecal resection removes the part where the end of the small bowel meets the start of the large bowel, a section Crohn's commonly affects.",
          "A strictureplasty repairs a narrowed section of small bowel without removing any bowel: the surgeon cuts it open and sews it back together the opposite way. Many common operations for Crohn's can be done by keyhole surgery, which means less pain, smaller scars and a faster recovery.",
        ],
      },
      {
        heading: "Stomas",
        paragraphs: [
          "Sometimes part of the gut is removed and the end of the bowel is brought through an opening in your tummy, called a stoma. The contents of your bowel then come out into a stoma bag. A stoma made from the small bowel is called an ileostomy, and one made from the colon is a colostomy.",
          "A stoma may be temporary or permanent, and contrary to what many people believe, it will often be temporary. A stoma nurse should support you and give you practical help and information on living with a stoma.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "For the common operations, you'll probably stay in hospital around 7 to 10 days, though some people only need 3 to 4 days. When you first get home, you'll probably feel quite weak and tired.",
          "Avoid any strenuous exercise or heavy lifting for at least a few weeks, so your wounds can heal properly. It can take from 2 to 10 weeks before people feel able to return to work, depending on the operation and the type of job.",
        ],
      },
      {
        heading: "Life after surgery",
        paragraphs: [
          "Studies show that most people find their life changes for the better after surgery. In one study looking at ileocaecal resection, almost 9 in 10 people said they would have the surgery again.",
          "Surgery cannot cure Crohn's, and it may come back close to where the surgery was or in another part of the gut. Smoking increases the risk that you may need further operations, so if you smoke, your IBD team will support you to stop before any surgery.",
        ],
      },
    ],
    helps: [
      "Ask your surgical team about the risks and benefits of surgery, and the risks of not having it.",
      "If you smoke, ask your IBD team for support to stop before surgery.",
      "Ask your surgical team how to be as fit as you can before surgery.",
      "Plan ahead for transport, time off work, caring responsibilities and help when you get home.",
      "Before you leave hospital, ask what symptoms to look out for and who to contact if you're concerned.",
      "Ask your surgeon to confirm in writing when you can drive again.",
    ],
    tryThisWeek: [
      "Write questions for your surgeon.",
      "Plan help for when you get home.",
      "Ask who to call after discharge.",
    ],
    ask: "What are my options if I do not have surgery, and what are the risks either way?",
    interactive: {
      kind: "timeline",
      title: "Surgery, step by step",
      steps: [
        { id: "before", when: "Before", title: "Deciding together", points: ["Your surgeon explains the benefits and risks", "A pre-operative assessment checks you are ready", "Stopping smoking lowers the risk of complications"] },
        { id: "day", when: "On the day", title: "The operation", points: ["You meet the surgeon, anaesthetist and nurses", "Compression stockings lower the risk of blood clots", "Keyhole surgery is often possible"] },
        { id: "ward", when: "In hospital", title: "Around 7 to 10 days", points: ["You are encouraged to move as soon as you can", "Breathing exercises lower the risk of chest infections", "A stoma nurse helps if you have a stoma"] },
        { id: "home", when: "First weeks at home", title: "Taking it slowly", points: ["Avoid heavy lifting and strenuous exercise", "Gradually add gentle exercise after a few weeks"] },
        { id: "work", when: "2 to 10 weeks", title: "Back to work", points: ["Depends on the operation and your job", "A phased return to work can help"] },
      ],
    },
    sources: [NHS_CD, CCUK_SURGERY, GUTS_CD, CCUK_CD],
    quiz: {
      question: "Can surgery cure Crohn's disease?",
      options: [{ text: "No, Crohn's may come back in another part of the gut", right: true }, { text: "Yes, always" }, { text: "Yes, if a stoma is made" }],
      why: "Surgery cannot cure Crohn's, and it may come back close to where the surgery was or in another part of the gut.",
    },
  },
  {
    id: "cd-flares",
    kicker: "Treatment",
    question: "What should I do during a Crohn's flare-up?",
    hook: "A plan made while you are well makes the bad days easier: who to call, what to keep taking, and when it is an emergency.",
    short: "A flare-up is when symptoms come back and you feel unwell. If you have a personalised care plan, follow it; if not, contact your IBD team or GP. Some signs need urgent or emergency help, and taking your medicines as prescribed, even when you feel well, reduces the risk of flare-ups.",
    sections: [
      {
        heading: "Knowing a flare-up",
        paragraphs: [
          "A flare-up is when symptoms come back and you feel unwell. Signs include going for a poo more than 5 times in 24 hours, or more than is normal for you, loose poo or diarrhoea with blood or mucus for more than 3 days, and pain in the tummy area.",
          "Over time you'll get to know how to recognise a potential flare-up. Flare-ups can last anywhere from a few days to several months, and you may have different symptoms than you had when you were first diagnosed.",
        ],
      },
      {
        heading: "Your flare-up plan",
        paragraphs: [
          "You will work together with your IBD team to create a treatment plan for flare-ups. The plan will give guidance on what to do and who to contact, which may be your IBD service, an advice line or your GP.",
          "If you have a written personalised care and support plan, follow the guidance given by your doctor or nurse. If you do not have one, contact your local IBD team or GP by phone or email. If you are unable to contact them, call NHS 111 or contact your local out-of-hours service.",
          "If you leave a message or send an email, include your full name, date of birth and NHS or hospital number, if you know it. You could ask your IBD team how best to alert them, such as an email with 'Flare-up' in the subject line.",
        ],
      },
      {
        heading: "Urgent and emergency signs",
        paragraphs: [
          "If you feel you need urgent care, phone 111. If you need emergency care, call 999. It's important to go to hospital if you're advised to.",
          "Go to A&E or call 999 if you have severe dehydration, are vomiting up blood, are bleeding non-stop from your bottom, or have severe tummy pain, a high temperature and a rapid heartbeat. Do the same if you have a stoma and think it might be blocked.",
          "Ask for an urgent GP appointment or get help from NHS 111 if your poo is black or dark red, or you have bloody diarrhoea.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Continue taking your medication as normal unless your doctor or nurse have advised you otherwise, and make sure you have a good supply of medicines. If you're having diarrhoea, drink enough to replace what you have lost.",
          "When you're in a flare-up, you might not feel like eating much, but it is still important to get enough energy and nutrients. Soups or smoothies might be easier to manage, and fibre that is easy to digest, like well-cooked, peeled vegetables or bananas, may help.",
          "Take rest and sleep, and avoid NSAIDs such as ibuprofen.",
        ],
      },
      {
        heading: "Lowering the risk of the next one",
        paragraphs: [
          "Taking your medicines as prescribed by your IBD team, even when you feel well, reduces the risk of flare-ups. It is not yet known what causes flare-ups, but possible triggers include smoking, disruptions or changes in medicines, ongoing stress, gut infections and NSAIDs.",
          "It can help to keep a diary of symptoms to see if you notice any triggers. Flare-ups can be disruptive, and it can help to be open about your condition with your family, friends, work colleagues and employers.",
        ],
      },
    ],
    helps: [
      "Agree a flare-up plan with your IBD team while you are well.",
      "Save your IBD team's direct number or advice line, and include your name, date of birth and hospital number in messages.",
      "Keep taking your medicines as normal unless your doctor or nurse advise otherwise, and keep a good supply.",
      "Drink enough to replace the fluid you lose through diarrhoea.",
      "Call NHS 111 or your local out-of-hours service if you cannot reach your IBD team or GP.",
      "Go to A&E or call 999 if you are vomiting blood, bleeding non-stop from your bottom, or have severe tummy pain with a high temperature and a rapid heartbeat.",
    ],
    tryThisWeek: [
      "Ask your IBD team for a flare-up plan.",
      "Save the advice line number.",
      "Check your medicine supply.",
    ],
    ask: "Who should I call when I have a flare-up, and what can I do before I reach them?",
    interactive: {
      kind: "scenarios",
      title: "What would help most?",
      scenarios: [
        {
          id: "no-plan",
          situation: "Your symptoms are getting worse and you have no flare-up plan.",
          options: [{ text: "Contact your IBD team or GP", best: true }, { text: "Wait a few weeks to see" }, { text: "Stop your medicines" }],
          why: "If you do not have a personalised plan, contact your local IBD team or GP by phone or email.",
        },
        {
          id: "no-answer",
          situation: "You cannot get hold of your IBD team or GP.",
          options: [{ text: "Call NHS 111 or your out-of-hours service", best: true }, { text: "Leave it until next month" }],
          why: "If you are unable to contact your GP or IBD team, call NHS 111 or contact your local out-of-hours service.",
        },
        {
          id: "blood",
          situation: "You are vomiting up blood.",
          options: [{ text: "Go to A&E or call 999", best: true }, { text: "Book a routine GP appointment" }],
          why: "Go to A&E or call 999 if you are vomiting up blood.",
        },
        {
          id: "pain",
          situation: "You want something for tummy pain.",
          options: [{ text: "Avoid ibuprofen and check with your IBD team", best: true }, { text: "Take ibuprofen" }],
          why: "Do not take NSAIDs such as ibuprofen unless they are prescribed by your doctor, because they may trigger a flare-up.",
        },
        {
          id: "feeling-well",
          situation: "You feel well again and wonder about stopping your medicine.",
          options: [{ text: "Keep taking it as prescribed", best: true }, { text: "Stop it now you feel better" }],
          why: "Taking your medicines as prescribed by your IBD team, even when you feel well, reduces the risk of flare-ups.",
        },
      ],
    },
    sources: [CCUK_FLARES, CCUK_CD, NHS_CD, CCUK_FOOD],
    quiz: {
      question: "What reduces the risk of flare-ups?",
      options: [{ text: "Taking medicines as prescribed, even when well", right: true }, { text: "Stopping medicines when you feel better" }, { text: "Taking ibuprofen regularly" }],
      why: "Taking your medicines as prescribed by your IBD team, even when you feel well, reduces the risk of flare-ups.",
    },
  },
  {
    id: "cd-nutrition",
    kicker: "Living well",
    question: "What should I eat with Crohn's, and when is a liquid diet used?",
    hook: "No diet causes or cures Crohn's. Eating well matters, and a liquid-only diet can be a treatment in its own right.",
    short: "There's no clear evidence that a special diet or particular foods help with Crohn's disease, but a healthy, balanced diet is important because Crohn's can make it harder to absorb nutrients. Some people find certain foods affect their symptoms. A special liquid diet, called exclusive enteral nutrition, can be used to treat Crohn's, particularly in children.",
    sections: [
      {
        heading: "No special diet",
        paragraphs: [
          "Crohn's disease can make it harder for your body to absorb nutrients from your food, so it's important to have a healthy diet. But there's no clear evidence that a special diet or particular foods help with Crohn's disease.",
          "There is no evidence that following a particular diet can cure Crohn's. Diets that claim to cure it often restrict particular foods or food groups, so if you follow them for a long time, you may miss out on important nutrients.",
        ],
      },
      {
        heading: "Finding your own triggers",
        paragraphs: [
          "Some people find that certain foods affect symptoms such as diarrhoea, bloating or constipation, but this is different for everyone. A food diary or app can help you find out if any foods seem to affect your symptoms.",
          "It is important not to cut foods out of your diet without talking to your dietitian or IBD team. If cutting out a food makes no difference to your symptoms, make sure you start eating it again.",
        ],
      },
      {
        heading: "Eating in a flare-up or with a stricture",
        paragraphs: [
          "In a flare-up, it is still important to get enough energy and nutrients. Healthy fats like olive oil or smooth nut butters, protein-rich foods like eggs or fish, and soups or smoothies may be easier to manage.",
          "If you have a stricture, a narrowing in your gut, you might be advised to avoid foods that could block your gut. These include skins, seeds or stalks of fruit and vegetables, wholegrain foods, nuts and seeds, and tough or gristly meat. Drinking plenty of fluid at mealtimes is also helpful.",
        ],
      },
      {
        heading: "Liquid diets as treatment",
        paragraphs: [
          "Exclusive enteral nutrition is a liquid-only diet that gives you all the energy and nutrients your body needs. It is often the first-choice treatment for children with Crohn's, and it works as well as steroids at getting their Crohn's under control.",
          "It can help improve symptoms within 10 days, and it takes 6 to 8 weeks to heal the lining of the gut. In adults, it does not seem to be as good as steroids, but it can be helpful for people who cannot take steroids, or who do not want to. A dietitian will usually supervise this treatment.",
        ],
      },
      {
        heading: "Vitamins and support",
        paragraphs: [
          "If you have trouble absorbing nutrients, you could be at risk of low iron, calcium, vitamin B12 and vitamin D. Your doctor, dietitian or IBD nurse will tell you if you need to take a supplement.",
          "Your GP or IBD team might be able to refer you to an NHS dietitian. Dietitians are qualified health professionals who can assess and treat dietary problems due to medical conditions.",
        ],
      },
    ],
    helps: [
      "Eat a healthy, balanced diet: your healthcare team can give you dietary advice.",
      "Keep a food diary to see whether certain foods seem to affect your symptoms.",
      "Do not make big changes to your diet without getting advice from your healthcare team.",
      "If you have a stricture, ask whether to avoid skins, seeds, nuts and other foods that could block your gut.",
      "Ask your GP or IBD team about a referral to an NHS dietitian.",
    ],
    tryThisWeek: [
      "Start a simple food diary.",
      "Ask about seeing a dietitian.",
      "Check before cutting out a food.",
    ],
    ask: "Can I be referred to a dietitian, and do I need any vitamin supplements?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "cut-out",
          situation: "You stopped eating a food, but your symptoms are no different.",
          options: [{ text: "Start eating it again", best: true }, { text: "Keep avoiding it anyway" }],
          why: "If cutting out a food makes no difference to your symptoms, make sure you start eating it again to avoid missing out on important nutrients.",
        },
        {
          id: "cure-diet",
          situation: "You read about a diet that claims to cure Crohn's.",
          options: [{ text: "Talk to your IBD team or dietitian first", best: true }, { text: "Start it straight away" }],
          why: "There is no evidence that following a particular diet can cure Crohn's.",
        },
        {
          id: "stricture",
          situation: "You have a stricture and fancy a salad with nuts and seeds.",
          options: [{ text: "Check with your team what to avoid", best: true }, { text: "Eat as much fibre as possible" }],
          why: "If you have a stricture, you might be advised to avoid foods that could block your gut, such as nuts and seeds.",
        },
        {
          id: "flare",
          situation: "You are in a flare-up and do not feel like eating.",
          options: [{ text: "Try soups, smoothies or small, easy meals", best: true }, { text: "Skip meals until it passes" }],
          why: "When you're in a flare-up, it is still important to get enough energy and nutrients. Soups or smoothies might be easier to manage.",
        },
      ],
    },
    sources: [NHS_CD, CCUK_FOOD, CCUK_CD],
    quiz: {
      question: "When is a liquid-only diet often the first-choice treatment?",
      options: [{ text: "For children with Crohn's", right: true }, { text: "After every meal, for everyone" }, { text: "Only after surgery" }],
      why: "It is often the first-choice treatment for children with Crohn's, and it works as well as steroids at getting their Crohn's under control.",
    },
  },
  {
    id: "cd-fatigue",
    kicker: "Living well",
    question: "Why am I so tired with Crohn's, and what helps?",
    hook: "Fatigue is not ordinary tiredness, and it is not your fault. Finding the cause is the first step.",
    short: "Fatigue is extreme tiredness that does not go away with the usual amount of rest or sleep. It affects around 7 in 10 people with Crohn's or Colitis during a flare-up, and around 4 in 10 in remission. Inflammation, anaemia, low nutrients, poor sleep, medicines and mood can all play a part, and many of these can be checked.",
    sections: [
      {
        heading: "More than tiredness",
        paragraphs: [
          "Fatigue is very different from being tired. It's an ongoing extreme tiredness that does not go away with the usual amount of rest or sleep. It can be physical, mental or both, with low energy, poor concentration or a feeling of brain fog.",
          "Many people with Crohn's or Colitis say fatigue is the most difficult symptom to deal with. As an invisible symptom, it can be hard to explain to others, but fatigue is not your fault and is nothing to be embarrassed about.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "Around 7 in 10 people with Crohn's or Colitis experience fatigue during a flare-up. Around 4 in 10 people have fatigue when their Crohn's or Colitis is in remission.",
          "Even when Crohn's is well controlled, some symptoms, like fatigue, may not go away completely.",
        ],
      },
      {
        heading: "Possible causes",
        paragraphs: [
          "Fatigue is more common in people with active inflammation in the gut, partly because of the chemicals released from inflammation. If you are experiencing fatigue, this could be a sign of a flare-up, so it's worth letting your IBD team or GP know early on.",
          "Around 1 in 3 people with Crohn's or Colitis have anaemia, which can make you tired. Low levels of vitamin B12, vitamin D, folate and other nutrients, poor sleep, some medicines, and anxiety, depression or stress have also been linked with fatigue.",
        ],
      },
      {
        heading: "What can be done",
        paragraphs: [
          "Getting your condition under control is one of the most important things you can do to help. You may be offered blood tests to check for anaemia or low levels of nutrients. If you have iron deficiency anaemia, iron tablets or iron through a drip often help fatigue.",
          "Some studies have shown exercise programmes may help lower fatigue. If you're able to exercise, take it gently at first and build up your strength over time, and rest afterwards if you need to.",
        ],
      },
      {
        heading: "Managing day to day",
        paragraphs: [
          "Some people find it helps to think of energy like a budget: each day you start with a limited amount, so you decide how you want to spend it. A routine that adapts to how fatigued you feel, and small daily goals, can make life more manageable.",
          "Eating regular smaller meals or healthy snacks every three to four hours can help keep your energy up. On good days, batch cooking can mean food is ready for days when your energy levels are low.",
        ],
      },
    ],
    helps: [
      "Tell your IBD team or GP about fatigue early, as it could be a sign of a flare-up.",
      "Ask if you need any blood tests to check for anaemia or low vitamins.",
      "Ask your IBD team if any of your medicines could be making your fatigue worse; never stop steroids suddenly.",
      "Try gentle exercise and build it up slowly, resting afterwards if you need to.",
      "Eat regular smaller meals or healthy snacks every three to four hours.",
      "Use the IBD Fatigue Scale to show your healthcare team how fatigue affects you.",
    ],
    tryThisWeek: [
      "Ask about a blood test for anaemia.",
      "Take a short, gentle walk.",
      "Plan small meals through the day.",
    ],
    ask: "Could anaemia, low vitamins or my medicines be causing my fatigue?",
    interactive: {
      kind: "risk-check",
      title: "What could be behind your fatigue?",
      intro: "Tick any that might apply. Each is worth raising with your IBD team or GP.",
      items: [
        { id: "active", label: "Active Crohn's or a flare-up", note: "Fatigue is more common with active inflammation. Getting Crohn's under control can help.", changeable: true },
        { id: "anaemia", label: "Anaemia", note: "Around 1 in 3 people with Crohn's or Colitis have anaemia. Iron tablets or an iron drip often help fatigue.", changeable: true },
        { id: "nutrients", label: "Low vitamins or minerals", note: "Low vitamin B12, vitamin D, folate and other nutrients have been linked with fatigue.", changeable: true },
        { id: "sleep", label: "Poor sleep", note: "Pain, needing the toilet at night and side effects of medicines can disrupt sleep.", changeable: true },
        { id: "medicines", label: "Your medicines", note: "Steroids and some immune medicines are linked to fatigue. Speak to your team; never stop steroids suddenly.", changeable: true },
        { id: "mood", label: "Anxiety, low mood or stress", note: "These have all been linked with fatigue, and support is available.", changeable: true },
        { id: "surgery", label: "Past surgery for Crohn's", note: "People who have had surgery for Crohn's or Colitis seem to have higher levels of fatigue.", changeable: false },
      ],
    },
    sources: [CCUK_FATIGUE, CCUK_CD, CCUK_FOOD],
    quiz: {
      question: "How is fatigue different from ordinary tiredness?",
      options: [{ text: "It does not go away with the usual rest or sleep", right: true }, { text: "It always goes after a nap" }, { text: "It only happens after exercise" }],
      why: "It's an ongoing extreme tiredness that does not go away with the usual amount of rest or sleep.",
    },
  },
  {
    id: "cd-work-study",
    kicker: "Living well",
    question: "How do I manage work, study and toilets with Crohn's?",
    hook: "You have rights, and there is practical help: changes at work, a key for accessible toilets, and a card for when you can't wait.",
    short: "You do not have to tell your employer about your Crohn's, but if they know, they can make reasonable adjustments, such as time off for appointments or easy access to a toilet. Crohn's might be classed as a disability depending on its effect on your daily life. A RADAR key and a Can't Wait Card can help with toilets when you're out.",
    sections: [
      {
        heading: "Telling your employer",
        paragraphs: [
          "You do not have to tell an employer or potential employer that you have Crohn's. But it may help you feel more supported at work, and if you tell your employer you are disabled, they have a legal responsibility to support you.",
          "Crohn's is not automatically classed as a disability under the Equality Act 2010, but it might be, depending on the effect it has on your daily life. You may still be protected even if your symptoms are controlled by medicines.",
        ],
      },
      {
        heading: "Reasonable adjustments",
        paragraphs: [
          "If your employer knows about your Crohn's, they can make changes to help you do your job, called reasonable adjustments. These could include time off for medical appointments, flexible working, unlimited toilet breaks, or moving your workstation close to a toilet.",
          "Other ideas include a phased return to work after absence, working from home, avoiding peak travel times, and not counting time off for Crohn's in absence reviews. If you are off sick for more than seven days, you will need a fit note.",
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
        heading: "Toilets when you're out",
        paragraphs: [
          "A RADAR key unlocks accessible public toilets, and you can usually get one from a charity. Members of Crohn's & Colitis UK get a RADAR key and a Can't Wait Card, which explains that, due to your condition, you need toilet facilities urgently.",
          "Many people plan their journeys by toilet stops, using toilet map apps or the Great British Toilet Map. Some carry an emergency kit with pads, spare underwear, wipes and disposal bags, and keep a change of clothes at work or in the car.",
        ],
      },
      {
        heading: "School, college and university",
        paragraphs: [
          "Schools and universities can often work with students to help them cope with symptoms such as fatigue. They may be able to extend deadlines or give you extra time during exams.",
          "Some students with Crohn's may be considered disabled under the Equality Act 2010, and Disability Rights UK has guides on adjustments and extra funding for disabled students. If you need time out to recover from surgery, speak to your school, college or university as early as you can.",
        ],
      },
    ],
    helps: [
      "Make a list of changes that would help before you talk to your employer.",
      "Ask about Access to Work if your employer's adjustments do not cover all your needs.",
      "Get a RADAR key for accessible public toilets, and a Can't Wait Card.",
      "Plan journeys around toilet stops with a toilet map app.",
      "Tell your school, college or university early, so they can arrange extra time or extended deadlines.",
    ],
    tryThisWeek: [
      "List changes that would help at work.",
      "Get a RADAR key.",
      "Pack a small emergency kit.",
    ],
    ask: "Could you support my request for changes at work or college, with a letter if needed?",
    interactive: {
      kind: "flip-cards",
      title: "Help at work and on the go",
      intro: "Turn each card to see what each one is and how it helps.",
      cards: [
        { id: "adjustments", front: "Reasonable adjustments", when: "If your employer knows", back: "Changes to help you do your job, like flexible hours, time off for appointments or unlimited toilet breaks." },
        { id: "access-to-work", front: "Access to Work", when: "When adjustments are not enough", back: "A grant towards things like equipment or travel to work. It does not affect other benefits." },
        { id: "fit-note", front: "Fit note", when: "Off sick for more than seven days", back: "From your GP, or another healthcare professional if you're in hospital. It can suggest a phased return." },
        { id: "radar", front: "RADAR key", when: "Out and about", back: "Unlocks accessible public toilets. Available to Crohn's & Colitis UK members, or from Disability Rights UK." },
        { id: "cant-wait", front: "Can't Wait Card", when: "In a queue or a shop", back: "Explains that, due to your condition, you need toilet facilities urgently." },
        { id: "kit", front: "Emergency kit", when: "For peace of mind", back: "Pads, spare underwear, wipes, disposal bags and a change of clothes, just in case." },
      ],
    },
    sources: [CCUK_EMPLOYMENT, GOV_ATW, NHS_CD, CCUK_URGENCY, CCUK_FATIGUE, CCUK_STUDENTS, CCUK_SURGERY, CCUK_CD],
    quiz: {
      question: "Do you have to tell your employer that you have Crohn's?",
      options: [{ text: "No, but telling them can help you get support", right: true }, { text: "Yes, by law" }, { text: "Only if you work part time" }],
      why: "You do not have to tell an employer or potential employer that you have Crohn's.",
    },
  },
  {
    id: "cd-mood",
    kicker: "Living well",
    question: "How can Crohn's affect my mood, and where can I get support?",
    hook: "Feeling shocked, anxious or low is common with Crohn's. It is not a sign of weakness, and help works.",
    short: "Living with a long-term condition like Crohn's can trigger lots of different feelings, and people with Crohn's or Colitis may be twice as likely to have anxiety or depression. Talking therapies and medicines can help. If you have thoughts of suicide or harming yourself, tell someone you trust, call the NHS on 111 or go to your nearest A&E.",
    sections: [
      {
        heading: "A common experience",
        paragraphs: [
          "Research suggests that people living with Crohn's or Colitis may be twice as likely to experience mental health problems, like anxiety and depression, as the general population. Around half of all people with Crohn's or Colitis say it has affected their mental health in some way.",
          "You might feel shocked when you are first diagnosed, or anxious, frustrated, sad, scared or angry about having the condition. These feelings are completely normal. It's not a sign of weakness.",
        ],
      },
      {
        heading: "Times to watch for",
        paragraphs: [
          "You are more likely to experience poorer mental health when you're first diagnosed, during a flare-up, when you need to go into hospital for treatment or surgery, or when starting a different treatment.",
          "Steroids can cause extreme highs and lows in your mood, and living with invisible symptoms such as fatigue or pain can be hard too. If you are struggling with mood changes on steroids, let your IBD team know.",
        ],
      },
      {
        heading: "Mind and gut",
        paragraphs: [
          "A direct, two-way link between your gut and brain, known as the gut-brain axis, may partly explain the close link between your mental and physical health. Stress can have a negative effect on gut symptoms, and each can make the other worse.",
          "Poor mental health is linked with a higher risk of flare-ups. Getting help to improve your mental health can make a real difference to living well with your condition.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Finding a community of people who understand what you're going through can really help, through local support groups, online forums or virtual social events. Talking to friends, family or a counsellor, writing down your feelings, regular exercise and relaxation techniques may also help.",
          "Cognitive behavioural therapy has been shown to improve depression and anxiety in people with Crohn's or Colitis. Antidepressant medicines can also help, and your GP or IBD team can talk you through the pros and cons of taking them.",
        ],
      },
      {
        heading: "Getting help now",
        paragraphs: [
          "Contact your GP or IBD team if you need psychological support. In England, you may be able to refer yourself directly to an NHS talking therapies service without a referral from a GP.",
          "If you have thoughts of suicide or harming yourself, tell someone you trust, call the NHS on 111 or go to your nearest A&E. If you need someone to talk to, you can call the Samaritans 24 hours a day, 7 days a week on 116 123.",
          "If your life is in danger, call 999 or go to your nearest A&E.",
        ],
      },
    ],
    helps: [
      "Tell your GP or IBD team how you are feeling, and ask about psychological support.",
      "Keep a mood diary or use a mood tracker app, and share it with your IBD team.",
      "Connect with others through a local support group, an online forum or a virtual social event.",
      "Call the Crohn's & Colitis UK Helpline on 0300 222 5700 if you're worried about any part of your condition.",
      "If you have thoughts of suicide or harming yourself, tell someone you trust, call the NHS on 111 or go to your nearest A&E.",
      "Call the Samaritans, 24 hours a day, 7 days a week, on 116 123.",
    ],
    tryThisWeek: [
      "Start a short mood diary.",
      "Tell one person how you feel.",
      "Save the Samaritans number: 116 123.",
    ],
    ask: "Can I see a psychologist or counsellor as part of my IBD care?",
    interactive: {
      kind: "scenarios",
      title: "Moments that can feel hard",
      scenarios: [
        {
          id: "diagnosis",
          situation: "You've just been diagnosed and feel overwhelmed.",
          options: [{ text: "Talk to someone and find trusted information", best: true }, { text: "Keep it all to yourself" }],
          why: "Coming to terms with having Crohn's can take time. Talking can help to process things and give you a fresh perspective.",
        },
        {
          id: "steroids",
          situation: "Your mood has been swinging since you started steroids.",
          options: [{ text: "Let your IBD team know", best: true }, { text: "Stop the steroids yourself" }],
          why: "Steroids can cause extreme highs and lows in your mood. Let your IBD team know, and never stop steroids suddenly.",
        },
        {
          id: "going-out",
          situation: "You feel anxious about going out in case you need a toilet.",
          options: [{ text: "Talk to your GP or IBD team about support", best: true }, { text: "Stop going out" }],
          why: "Finding ways to manage your anxiety can reduce your chances of having a flare-up and needing steroid treatment.",
        },
        {
          id: "crisis",
          situation: "You are having thoughts of harming yourself.",
          options: [{ text: "Tell someone you trust, call 111 or go to A&E", best: true }, { text: "Keep it to yourself" }],
          why: "If you have thoughts of suicide or harming yourself, tell someone you trust, call the NHS on 111 or go to your nearest A&E.",
        },
      ],
    },
    sources: [CCUK_MENTAL, CCUK_CD, CCUK_STEROIDS, NHS_CD, CCUK_DIAGNOSIS],
    quiz: {
      question: "Are anxiety and low mood common with Crohn's?",
      options: [{ text: "Yes, and help is available", right: true }, { text: "No, they are very rare" }, { text: "Only in children" }],
      why: "Around half of all people with Crohn's or Colitis say it has affected their mental health in some way.",
    },
  },
  {
    id: "cd-checks",
    kicker: "Living well",
    question: "Which long-term checks do I need, including for my bones?",
    hook: "Regular blood tests, a bowel check some years in, vaccines and bone care all help you stay well for the long run.",
    short: "You'll have regular check-ups and tests with your IBD team. If you take immunosuppressants, you'll need regular blood tests and up-to-date vaccines, avoiding live vaccines. Some people are offered colonoscopies to check for early signs of bowel cancer, and looking after your bones matters, as Crohn's and steroids can weaken them.",
    sections: [
      {
        heading: "Regular check-ups",
        paragraphs: [
          "You'll be supported by a team of healthcare professionals including a specialist doctor, and you'll have regular check-ups and tests. How often you need tests may depend on how severe your Crohn's is and the medicines you take.",
          "If you take azathioprine or mercaptopurine, you'll have blood tests every two weeks when you first start, which is likely to change to every three months. Your IBD team should review a biologic or targeted treatment at least once a year.",
        ],
      },
      {
        heading: "Vaccines",
        paragraphs: [
          "Have vaccinations such as the flu vaccine and pneumococcal vaccine if you take medicines that affect your immune system. But check that the vaccine is suitable for you, as some types, called live vaccines, may not be recommended.",
          "The annual flu vaccine, COVID-19 vaccines, the Shingrix shingles vaccine and the pneumococcal vaccine are non-live and safe to have. You should not have live vaccines, such as MMR, chickenpox, yellow fever or the nasal flu vaccine, while taking an immunosuppressant.",
        ],
      },
      {
        heading: "Checking the bowel",
        paragraphs: [
          "Crohn's that affects the colon can increase the risk of bowel cancer in some people, but this risk is still small. Having Crohn's that does not affect your colon does not increase the risk of developing bowel cancer.",
          "You may be asked to have a colonoscopy around eight years after the start of your symptoms, to check for any changes. You may then have follow-on colonoscopies every one, three, five or 10 years, depending on your symptoms and how severe they are.",
        ],
      },
      {
        heading: "Bone health",
        paragraphs: [
          "People with Crohn's are more at risk of developing thinner and weaker bones, known as osteoporosis. Inflammation in the gut, taking steroids, low levels of calcium and vitamin D, and removal of parts of the small bowel can all increase the risk.",
          "There are usually no obvious symptoms of bone loss. If you are taking steroids for longer than 3 months, you should have a DEXA scan, a simple, painless scan that measures how dense or strong your bones are.",
          "Regular exercise, calcium-rich food, a vitamin D supplement if needed and not smoking can help prevent osteoporosis. The NHS recommends adults aged 19 to 64 get 700 mg of calcium a day from their diet.",
        ],
      },
      {
        heading: "Other checks",
        paragraphs: [
          "Many people with Crohn's may have low vitamin B12 or folic acid, and some have low iron. You may need a full blood count to check for anaemia every three to 12 months. Some experts believe vitamin D should be checked once every year.",
          "Some medicines make your skin more sensitive to the sun, so use high factor sunscreen, cover your skin and wear a hat. If you have a cervix, it is important to have regular cervical screenings while taking azathioprine or mercaptopurine.",
        ],
      },
    ],
    helps: [
      "Go to all your regular blood tests, especially when you start a new medicine.",
      "Keep your vaccines up to date, and always tell the person giving a vaccine which medicines you take.",
      "Ask whether you need a check colonoscopy, and when.",
      "If you have taken steroids for longer than 3 months, ask about a DEXA scan.",
      "Get enough calcium, consider vitamin D in autumn and winter, keep active and do not smoke.",
      "Have regular cervical screenings if you have a cervix.",
    ],
    tryThisWeek: [
      "Check your vaccines are up to date.",
      "Book your next blood test.",
      "Add a calcium-rich food each day.",
    ],
    ask: "Which checks and vaccines do I need on my medicines?",
    interactive: {
      kind: "timeline",
      title: "Checks over the years",
      steps: [
        { id: "start", when: "Before a new medicine", title: "Screening and vaccines", points: ["Blood tests, including checks for past infections", "Vaccines brought up to date", "A chest X-ray before biologics"] },
        { id: "early", when: "First weeks", title: "Blood tests every two weeks", points: ["When starting azathioprine or mercaptopurine", "Checks your blood cells and liver"] },
        { id: "ongoing", when: "Every three months", title: "Ongoing blood tests", points: ["For as long as you take these medicines", "Tell your team about any infection"] },
        { id: "yearly", when: "Every year", title: "Review and flu vaccine", points: ["Biologic or targeted treatment reviewed at least once a year", "An annual flu vaccine"] },
        { id: "eight-years", when: "About 8 years in", title: "A check of the bowel", points: ["A colonoscopy may be offered", "Then follow-on checks if needed"] },
      ],
    },
    sources: [NHS_CD, CCUK_TESTS, CCUK_AZA, CCUK_BIOLOGICS, CCUK_IMMUNO, CCUK_CD, CCUK_BONES, CCUK_STEROIDS, NHS_AZA],
    quiz: {
      question: "Which vaccines should you avoid while taking an immunosuppressant?",
      options: [{ text: "Live vaccines, such as MMR or yellow fever", right: true }, { text: "The injected flu vaccine" }, { text: "The pneumococcal vaccine" }],
      why: "You should not have live vaccines, such as MMR, chickenpox, yellow fever or the nasal flu vaccine, while taking an immunosuppressant.",
    },
  },
];
