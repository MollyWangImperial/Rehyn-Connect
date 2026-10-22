import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Pancreatitis page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and Guts UK
// (the national charity for the digestive system), with Diabetes UK for type 3c diabetes and the NICE
// guideline's information for the public. General information only; it never replaces what a person's own
// GP, pancreas team or dietitian tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const guts = (label: string, path: string): LearnSource => ({ label: `Guts UK: ${label}`, url: `https://gutscharity.org.uk/${path}` });

const NHS_ACUTE = nhs("Acute pancreatitis", "conditions/acute-pancreatitis/");
const NHS_CHRONIC = nhs("Chronic pancreatitis", "conditions/chronic-pancreatitis/");
const NHS_GALLSTONES = nhs("Gallstones", "conditions/gallstones/");
const NHS_JAUNDICE = nhs("Jaundice", "conditions/jaundice/");
const NHS_ALCOHOL_SUPPORT = nhs("Alcohol support", "live-well/alcohol-advice/alcohol-support/");
const NHS_AUD = nhs("Alcohol-use disorder", "conditions/alcohol-use-disorder/");
const NHS_STOP_SMOKING = nhs("Find your local Stop Smoking Service", "better-health/quit-smoking/ready-to-quit-smoking/find-your-local-stop-smoking-service/");
const NHS_PAIN = nhs("10 ways to reduce pain", "live-well/pain/10-ways-to-ease-pain/");

const COND = "advice-and-information/conditions";
const GUTS_ACUTE = guts("Acute pancreatitis", `${COND}/acute-pancreatitis-symptoms-diagnosis-treatment-and-support/`);
const GUTS_CHRONIC = guts("Chronic pancreatitis", `${COND}/chronic-pancreatitis/`);
const GUTS_PEI = guts("Pancreatic exocrine insufficiency (PEI) and pancreatic enzyme replacement therapy (PERT)", `${COND}/pancreatic-exocrine-insufficiency-pei/`);
const GUTS_KRANKY = guts("Kranky Panky: Pancreatitis Awareness Month", "awareness/awareness-dates/kranky-panky-month/");
const GUTS_CONTACT = guts("Contact us", "contact-us/");

const DUK_3C: LearnSource = { label: "Diabetes UK: What is type 3c diabetes?", url: "https://www.diabetes.org.uk/about-diabetes/other-types-of-diabetes/type3c-diabetes" };
const NICE_NG104: LearnSource = { label: "NICE: Pancreatitis (NG104), information for the public", url: "https://www.nice.org.uk/guidance/ng104/informationforpublic" };

export const pancreatitisAnswers: LearnArticle[] = [
  {
    id: "pan-what-it-is",
    kicker: "Understanding",
    question: "What is pancreatitis?",
    hook: "A gland most people never think about, until it becomes inflamed. There are two kinds: one sudden, one long-term.",
    short: "Pancreatitis is when the pancreas becomes inflamed. The pancreas is an organ in the middle of your tummy that helps you digest food and makes hormones such as insulin. Acute pancreatitis comes on suddenly and needs urgent treatment in hospital; chronic pancreatitis is a long-term condition where the pancreas is inflamed, scarred and painful.",
    sections: [
      {
        heading: "A gland behind the stomach",
        paragraphs: [
          "The pancreas is an organ in the middle of your tummy. It helps you digest food and makes hormones such as insulin.",
          "It is a gland in the top part of the belly, in front of the spine and behind the stomach. It is around 25cm, or nine inches, long and salmon pink in colour, and at its widest point it is about the thickness of your wrist.",
        ],
      },
      {
        heading: "Two main jobs",
        paragraphs: [
          "The pancreas has two main jobs. One is to make digestive enzymes, which enter the small intestine through the pancreatic duct to help your body digest food. The enzymes break down the protein, starch and fat in food into smaller pieces that are easier to absorb.",
          "The second job is making hormones, including insulin, which regulate the body's total energy resources and blood sugar levels. Insulin helps sugars enter body cells from the blood to use for energy.",
        ],
      },
      {
        heading: "When the pancreas becomes inflamed",
        paragraphs: [
          "Normally, the digestive enzymes only start working once they reach the small bowel. If they start working too soon, the pancreas becomes red, inflamed and swollen.",
          "Guts UK says pancreatitis is recognised by the NHS as one of the 20 most painful conditions you can suffer from.",
        ],
      },
      {
        heading: "Two kinds",
        paragraphs: [
          "Acute pancreatitis is a serious condition where your pancreas suddenly becomes swollen and painful. It needs urgent treatment in hospital.",
          "Chronic pancreatitis is a long-term condition where the pancreas is inflamed, scarred and painful. There's no cure, but there are treatments for the problems it can cause.",
          "If you keep getting acute pancreatitis, it can develop into chronic pancreatitis, a serious long-term condition.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "Acute pancreatitis occurs in 34 per 100,000 people every year. It typically affects people in their middle or later years, but it can happen at any age, including childhood, and it affects both men and women.",
          "Chronic pancreatitis is rare. In the UK, between 6,000 and 12,000 people are given a new diagnosis every year. Men are more likely than women to develop it.",
        ],
      },
    ],
    helps: [
      "Ask for an urgent GP appointment or get help from NHS 111 if you get sudden, severe pain in your tummy that does not go away or keeps coming back.",
      "Call 999 or go to A&E if you get sudden, severe pain in your tummy that is spreading to your back.",
      "See a GP if you think you might have chronic pancreatitis.",
      "Ask your doctor whether your pancreatitis will go away, and when acute pancreatitis becomes chronic.",
    ],
    tryThisWeek: [
      "Learn when to get urgent help.",
      "See a GP about long-term symptoms.",
      "Ask if your pancreatitis will go away.",
    ],
    ask: "Which kind of pancreatitis do I have, and what caused it?",
    interactive: {
      kind: "flip-cards",
      title: "The pancreas, card by card",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "enzymes", front: "Digestive enzymes", when: "The pancreas's first job", back: "Break down the protein, starch and fat in food into smaller pieces that are easier to absorb." },
        { id: "insulin", front: "Insulin", when: "The pancreas's second job", back: "A hormone that helps sugars enter body cells from the blood to use for energy." },
        { id: "acute", front: "Acute pancreatitis", when: "Comes on suddenly", back: "The pancreas suddenly becomes swollen and painful. It needs urgent treatment in hospital." },
        { id: "chronic", front: "Chronic pancreatitis", when: "Long-term", back: "The pancreas is inflamed, scarred and painful. There's no cure, but there are treatments for the problems it causes." },
        { id: "recurrent", front: "Recurrent pancreatitis", when: "More than one attack", back: "Another case of acute pancreatitis. If you keep getting it, it can develop into chronic pancreatitis." },
      ],
    },
    sources: [NHS_ACUTE, NHS_CHRONIC, GUTS_ACUTE, GUTS_CHRONIC, GUTS_KRANKY],
    quiz: {
      question: "What does the pancreas do?",
      options: [{ text: "Helps you digest food and makes hormones such as insulin", right: true }, { text: "Filters the blood and makes urine" }, { text: "Stores bile between meals" }],
      why: "The pancreas is an organ in the middle of your tummy. It helps you digest food and makes hormones such as insulin.",
    },
  },
  {
    id: "pan-acute",
    kicker: "Understanding",
    question: "What happens in acute pancreatitis?",
    hook: "Sudden, severe tummy pain that often spreads to the back. Most people recover, but it always needs hospital care.",
    short: "Acute pancreatitis is where the pancreas suddenly becomes swollen and painful. The main symptom is pain in the tummy, and you may also have a high temperature and feel or be sick. It needs urgent treatment in hospital, and most people with acute pancreatitis recover fully.",
    sections: [
      {
        heading: "The main symptom",
        paragraphs: [
          "The main symptom of acute pancreatitis is pain in your tummy. You may also have a high temperature and feel sick or be sick.",
          "The pain may start suddenly and not go away. It can be severe, sharp or knife-like, and affect the upper part of your tummy, one side of your tummy or your whole tummy. It may spread to your sides and back.",
          "It may feel worse after you eat, move around or lie down, and better when you lean forward or bring your knees to your chest.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you get sudden, severe pain in your tummy and it does not go away or keeps coming back, or you have a high temperature, or you feel hot, cold or shivery.",
          "Call 999 or go to A&E if you get sudden, severe pain in your tummy and the pain is spreading to your back, you have bloating that does not go away or keeps coming back, you have a fast heartbeat or difficulty breathing, or the skin around your belly button, waist or upper outer thigh appears blue or bruised.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
      {
        heading: "What is happening inside",
        paragraphs: [
          "Acute pancreatitis happens when the pancreas is damaged, and its digestive enzymes are released into the pancreas itself. This causes severe inflammation.",
          "In severe disease, large parts of the organ die, and this is called necrotising pancreatitis. About 1 in 4 people who have an attack may have problems with other organs, particularly kidney failure and lung damage, and may need care in an intensive care or high dependency unit.",
        ],
      },
      {
        heading: "How it is diagnosed",
        paragraphs: [
          "Acute pancreatitis is usually diagnosed using blood tests and sometimes a CT scan.",
          "The blood test looks for enzymes made by the pancreas, called amylase and lipase, which spill over into the blood when the pancreas is injured. Everyone with acute pancreatitis should have an ultrasound scan to check for gallstones as a possible cause.",
        ],
      },
      {
        heading: "Most people recover",
        paragraphs: [
          "Most people with acute pancreatitis recover fully. Guts UK says 79 out of 100 adults who develop it fully recover and never have another episode.",
          "If you have had acute pancreatitis once, it's possible to get it again. Some people develop serious complications that need treatment, and if you keep getting acute pancreatitis it can develop into chronic pancreatitis.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E if sudden, severe tummy pain spreads to your back, or comes with a fast heartbeat or difficulty breathing.",
      "Ask for an urgent GP appointment or get help from NHS 111 if sudden, severe tummy pain does not go away, or comes with a high temperature.",
      "Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
      "Bring any medicines you take with you.",
      "Ask which signs mean you might need to see a specialist or go back into hospital after you are discharged.",
    ],
    tryThisWeek: [
      "Know the signs that mean 999.",
      "Bring your medicines to hospital.",
      "Ask which signs mean going back.",
    ],
    ask: "Which signs mean I should come back to hospital?",
    interactive: {
      kind: "signs",
      title: "Signs to act on",
      intro: "Tick any you have with sudden, severe tummy pain. Each one is on the NHS list of reasons to get help.",
      signs: [
        "Pain that does not go away or keeps coming back",
        "A high temperature, or feeling hot, cold or shivery",
        "Pain spreading to your back",
        "Bloating that does not go away or keeps coming back",
        "A fast heartbeat or difficulty breathing",
        "Blue or bruised-looking skin around the belly button, waist or upper outer thigh",
      ],
      after: "First two: ask for an urgent GP appointment or get help from NHS 111. Any of the others: call 999 or go to A&E. Do not drive yourself.",
      copyHeading: "My symptoms",
    },
    sources: [NHS_ACUTE, GUTS_ACUTE, NICE_NG104],
    quiz: {
      question: "Sudden, severe tummy pain is spreading to your back. What does the NHS say to do?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait to see if it settles overnight" }, { text: "Book a routine GP appointment" }],
      why: "Call 999 or go to A&E if you get sudden, severe pain in your tummy and the pain is spreading to your back.",
    },
  },
  {
    id: "pan-chronic",
    kicker: "Understanding",
    question: "What is chronic pancreatitis, and how is it found?",
    hook: "Long-term inflammation that slowly scars the pancreas. There's no cure, but the problems it causes can be treated.",
    short: "Chronic pancreatitis is a long-term condition where the pancreas is inflamed, scarred and painful. The main symptom is tummy pain, and some people have diarrhoea, weight loss or very smelly poo that floats. There's no single test, so doctors use several, and there are treatments for the problems it causes.",
    sections: [
      {
        heading: "What happens to the pancreas",
        paragraphs: [
          "In chronic pancreatitis, normal pancreas cells are steadily lost because of damage caused by the inflammation. Scar tissue forms in the inflamed areas, making the pancreas irregular and hard.",
          "The damage to your pancreas usually gets worse over time and it's not possible to reverse it. But not drinking alcohol and not smoking can help slow it down and reduce the risk of getting other problems.",
        ],
      },
      {
        heading: "Symptoms",
        paragraphs: [
          "The main symptom of chronic pancreatitis is pain in your tummy. It may be in the upper part of your tummy, just below your ribs, and may be constant or come and go. It may be worse after eating, and better when sitting down and leaning forward.",
          "Other symptoms can include feeling or being sick, diarrhoea, feeling bloated or farting a lot, feeling thirsty or needing to pee a lot, and losing weight without trying to. Some people have very smelly poo that floats and is difficult to flush away.",
          "Some people have only one or two symptoms. Chronic pancreatitis symptoms can be similar to other conditions, such as irritable bowel syndrome or gallstones.",
        ],
      },
      {
        heading: "Why it can be hard to diagnose",
        paragraphs: [
          "There's no single test for chronic pancreatitis. A doctor may need to rule out other possible causes of your symptoms first.",
          "Many pancreatic cells can be damaged before tests show anything. Guts UK says the average GP practice in the UK would see less than one newly diagnosed person with chronic pancreatitis a year.",
        ],
      },
      {
        heading: "Tests you may have",
        paragraphs: [
          "A GP may feel your tummy, check if your skin and eyes look yellow, weigh you, and arrange blood tests or tests on a sample of your poo. They may also ask if you have any close relatives who've had pancreatitis.",
          "A specialist may arrange a CT scan or ultrasound scan, or a gastroscopy, where a thin tube with a camera inside is passed down your throat and into your stomach. CT and MRI scans give the best pictures of the pancreas, and an endoscopic ultrasound gives a very accurate picture.",
          "The simplest test of how well the pancreas makes digestive juices is the faecal elastase test, done on a small sample of poo. But it is not always reliable.",
        ],
      },
      {
        heading: "Living with it",
        paragraphs: [
          "Chronic pancreatitis is a serious condition that can have a big impact on your life. You'll need regular check-ups, tests and scans to check for problems like diabetes or weakened bones.",
          "The condition can affect how long you live, although this is different for everybody. Most people live with it for many years.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you might have chronic pancreatitis.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you get sudden, severe pain in your tummy.",
      "Do not drink alcohol and do not smoke: this can help slow the damage.",
      "Eat a healthy, balanced diet to help you get the nutrients you need.",
      "Tell your GP if any close relatives have had pancreatitis.",
    ],
    tryThisWeek: [
      "See a GP about your symptoms.",
      "Know when to get urgent help.",
      "Tell your GP about family history.",
    ],
    ask: "Which tests do I need, and how often will I have check-ups?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, card by card",
      intro: "Turn each card to see what each test is for.",
      cards: [
        { id: "bloods", front: "Blood tests", when: "Often arranged by a GP", back: "Can look for vitamin and mineral deficiencies, which can support a diagnosis." },
        { id: "elastase", front: "Faecal elastase test", when: "A small sample of poo", back: "The simplest test of how well the pancreas makes digestive juices. It is not always reliable." },
        { id: "ct", front: "CT or MRI scan", when: "Arranged by a specialist", back: "CT and MRI scans give the best pictures of the pancreas." },
        { id: "ultrasound", front: "Ultrasound scan", when: "May also be used", back: "A scan used alongside CT and MRI to look at the pancreas." },
        { id: "gastroscopy", front: "Gastroscopy", when: "If more tests are needed", back: "A thin tube with a camera inside is passed down your throat and into your stomach." },
        { id: "eus", front: "Endoscopic ultrasound", when: "If extra information is needed", back: "An ultrasound on the end of an endoscope gives a very accurate picture of the pancreas." },
      ],
    },
    sources: [NHS_CHRONIC, GUTS_CHRONIC],
    quiz: {
      question: "Is there a single test for chronic pancreatitis?",
      options: [{ text: "No, doctors use several tests", right: true }, { text: "Yes, one blood test" }, { text: "Yes, a urine test" }],
      why: "There's no single test for chronic pancreatitis. A doctor may need to rule out other possible causes of your symptoms first.",
    },
  },
  {
    id: "pan-causes",
    kicker: "Understanding",
    question: "What causes pancreatitis?",
    hook: "Gallstones and alcohol cause most cases. But there are other causes, and sometimes no cause is found.",
    short: "The most common causes of acute pancreatitis are gallstones and drinking a lot of alcohol. The most common cause of chronic pancreatitis is drinking alcohol, and smoking, genes, some medicines and other conditions can play a part. Sometimes it's not clear what the cause is.",
    sections: [
      {
        heading: "Gallstones",
        paragraphs: [
          "Gallstones are the most frequent cause of acute pancreatitis. They cause problems when small stones pass out of the gallbladder into the bile duct and block the duct that drains the pancreas.",
          "Gallstones are small stones that form in the gallbladder, and most people who have them do not get symptoms. Complications are rare, but sometimes a blockage leads to serious complications such as inflammation of the pancreas.",
          "If gallstones are the cause, they can be removed by surgery. This is usually done soon after the attack has settled, to prevent more attacks in the future.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "Drinking alcohol above recommended limits is the second most frequent cause of acute pancreatitis. Damage can happen both with drinking too much in a short time and with regularly drinking too much.",
          "The most common cause of chronic pancreatitis is drinking alcohol. If you keep drinking and keep getting acute pancreatitis, eventually your pancreas can become permanently scarred.",
          "Some people are more likely than others to have their pancreas damaged by alcohol because of their genes. Even among people who smoke or drink too much alcohol, chronic pancreatitis is uncommon.",
        ],
      },
      {
        heading: "Smoking",
        paragraphs: [
          "Smoking tobacco is also thought to be toxic to the pancreas, and it adds to the risk of developing pancreatitis. Chronic pancreatitis can be linked to smoking.",
        ],
      },
      {
        heading: "Other causes",
        paragraphs: [
          "Less common causes of acute pancreatitis include injury to the pancreas, such as during surgery, and some medicines, including certain steroids, heart and epilepsy medicines. Other conditions, including lupus, mumps, pancreatic cancer or high levels of calcium in the blood, can also cause it.",
          "High levels of fats called triglycerides in the blood can cause pancreatitis, and so can some viral infections. It can also follow a procedure called ERCP, in which the bile duct or pancreatic duct are investigated.",
          "Chronic pancreatitis can also be linked to your genes, including the gene that causes cystic fibrosis, your immune system mistakenly attacking your pancreas, your pancreas not developing properly when you're born, and some medicines, including some antibiotics and diabetes medicines.",
        ],
      },
      {
        heading: "When no cause is found",
        paragraphs: [
          "For about 1 in 10 people with acute pancreatitis, no known cause can be found. This is called idiopathic pancreatitis.",
          "In up to 3 out of 10 people with chronic pancreatitis, the cause cannot be found, despite thorough investigation. Once people are over the worst part of an attack, it is very important to search for and treat any underlying cause.",
        ],
      },
    ],
    helps: [
      "Ask your doctor about the search for the underlying cause of your pancreatitis.",
      "If gallstones were the cause, ask when you will have your gallbladder removed.",
      "Drink less alcohol, or do not drink any alcohol at all, to help stop acute pancreatitis coming back.",
      "Stop smoking.",
      "If you are diagnosed with hereditary pancreatitis, your hospital specialist can refer you for genetic testing if you wish.",
    ],
    tryThisWeek: [
      "Ask what caused your pancreatitis.",
      "Ask when gallstone surgery will be.",
      "Cut down or stop alcohol.",
    ],
    ask: "What caused my pancreatitis, and can it be treated?",
    interactive: {
      kind: "risk-check",
      title: "What can cause it?",
      intro: "Tick any that apply. Some causes can be changed or treated, and some cannot.",
      items: [
        { id: "gallstones", label: "Gallstones", note: "The most frequent cause of acute pancreatitis. They can be removed by surgery, usually soon after the attack has settled.", changeable: true },
        { id: "alcohol", label: "Drinking alcohol", note: "Drinking less, or not at all, can help stop acute pancreatitis coming back.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Tobacco is thought to be toxic to the pancreas. Stopping smoking is recommended.", changeable: true },
        { id: "medicines", label: "Some medicines", note: "Certain steroids, heart and epilepsy medicines are among the less common causes.", changeable: false },
        { id: "blood", label: "High blood fats or calcium", note: "High levels of triglycerides or calcium in the blood are known causes.", changeable: false },
        { id: "genes", label: "Your genes", note: "Including the cystic fibrosis gene. Genes can also make alcohol damage more likely.", changeable: false },
        { id: "injury", label: "An injury or a procedure", note: "Injury to the pancreas, such as during surgery, or a procedure called ERCP.", changeable: false },
      ],
    },
    sources: [NHS_ACUTE, NHS_CHRONIC, GUTS_ACUTE, GUTS_CHRONIC, NHS_GALLSTONES],
    quiz: {
      question: "What is the most frequent cause of acute pancreatitis?",
      options: [{ text: "Gallstones", right: true }, { text: "Spicy food" }, { text: "A virus caught from other people" }],
      why: "Gallstones are the most frequent cause of acute pancreatitis.",
    },
  },
  {
    id: "pan-hospital",
    kicker: "Treatment",
    question: "What happens in hospital with acute pancreatitis?",
    hook: "No medicine can stop the inflammation. Hospital care supports the body while the pancreas settles.",
    short: "Acute pancreatitis needs treatment in hospital straight away. Treatment may include fluids and nutrients through a drip, painkillers and, if there is an infection, antibiotics. Most people start to get better within a week and can leave hospital in 5 to 10 days, and the cause is then treated to help stop it coming back.",
    sections: [
      {
        heading: "Supporting the body",
        paragraphs: [
          "There is no current medicine or treatment that can stop the inflammation in acute pancreatitis. You'll be monitored to see how serious your condition is and if it's causing any other problems, such as an infection.",
          "Hospital treatment may include fluids and nutrients given through a tube into a vein, and painkillers. Oxygen through a mask is often needed too.",
        ],
      },
      {
        heading: "Pain relief and antibiotics",
        paragraphs: [
          "The tummy pain can be extreme, needing strong painkillers, including morphine-type medicines.",
          "Antibiotics are given if you have an infection. They are not used routinely, because pancreatitis is not an infection.",
        ],
      },
      {
        heading: "Eating again",
        paragraphs: [
          "Often people get better quickly and can eat and drink within a few days. In more severe cases, a thin tube may be passed through the nose into the stomach so that extra feeding can be given.",
          "People who are in hospital for some months and lose fitness may need rehabilitation with a physiotherapist or occupational therapist.",
        ],
      },
      {
        heading: "Treating the cause",
        paragraphs: [
          "You may also need treatment for what is causing your acute pancreatitis, such as surgery for gallstones or support to stop drinking alcohol.",
          "Rarely, a procedure called an ERCP is needed, if there is an infection in the bile duct or a stone jammed in the bile duct blocking the pancreas duct. It is used to remove the blockage and drain the ducts.",
          "If gallstones are the cause, they can be removed by surgery. This is usually done soon after the attack has settled, to prevent more attacks in the future.",
        ],
      },
      {
        heading: "Going home and recovering",
        paragraphs: [
          "Most people with acute pancreatitis start to get better within a week and can leave hospital in 5 to 10 days. If you have severe pancreatitis or it's causing other problems, you may need to stay in hospital for longer.",
          "For people who recover fully at home, recovery can take up to three times the length of their hospital stay. Recovery after severe pancreatitis can be slow and it is common to feel worse at times, so you should be told who to contact if you feel seriously unwell.",
          "A stay in intensive care can be a traumatic experience with long-term effects on mental and physical health. If you feel this has happened, talk to your doctor about what help is available.",
        ],
      },
    ],
    helps: [
      "Ask who to contact if you feel seriously unwell after you go home.",
      "Ask whether you should be monitored after leaving hospital.",
      "If gallstones were the cause, ask when you will have your gallbladder removed.",
      "If intensive care has affected your mental or physical health, talk to your doctor about what help is available.",
      "Talk to others through support groups, and to family members.",
    ],
    tryThisWeek: [
      "Ask who to contact if unwell.",
      "Ask about follow-up checks.",
      "Talk to family or a support group.",
    ],
    ask: "Will I be monitored after I leave hospital, and who do I contact if I feel unwell?",
    interactive: {
      kind: "timeline",
      title: "From admission to home",
      steps: [
        { id: "arrive", when: "On arrival", title: "Tests and monitoring", points: ["Blood tests and sometimes a CT scan", "Monitored to see how serious it is"] },
        { id: "support", when: "First days", title: "Supporting the body", points: ["Fluids and nutrients through a drip", "Painkillers, sometimes strong ones", "Antibiotics only if there is an infection"] },
        { id: "eat", when: "Within a few days", title: "Eating and drinking", points: ["Often people can eat and drink again", "Sometimes extra feeding through a tube"] },
        { id: "home", when: "5 to 10 days", title: "Going home", points: ["Most people can leave hospital", "Longer if it is severe or causing other problems"] },
        { id: "cause", when: "Soon after", title: "Treating the cause", points: ["Surgery for gallstones, once the attack has settled", "Support to stop drinking alcohol"] },
        { id: "recover", when: "At home", title: "Recovering", points: ["Recovery can take up to three times the hospital stay", "Know who to contact if you feel seriously unwell"] },
      ],
    },
    sources: [NHS_ACUTE, GUTS_ACUTE, NICE_NG104],
    quiz: {
      question: "Are antibiotics always given for acute pancreatitis?",
      options: [{ text: "No, only if there is an infection", right: true }, { text: "Yes, to every patient" }, { text: "Yes, for a month afterwards" }],
      why: "Antibiotics are given if you have an infection. They are not used routinely, because pancreatitis is not an infection.",
    },
  },
  {
    id: "pan-enzymes",
    kicker: "Treatment",
    question: "What do enzyme capsules do, and how do I take them?",
    hook: "When the pancreas cannot make enough enzymes, capsules do the job. They work on your food, so timing matters.",
    short: "When a damaged pancreas cannot make enough digestive enzymes, food is not digested well. This is called pancreatic exocrine insufficiency, or PEI. It is treated with prescribed enzyme capsules, called PERT, taken with meals, snacks and milky drinks.",
    sections: [
      {
        heading: "When the pancreas cannot make enough enzymes",
        paragraphs: [
          "Pancreatic exocrine insufficiency, or PEI, means the pancreas cannot make enough digestive enzymes. If not enough enzymes reach the top of the small bowel, the nutrients in food will not be digested well.",
          "Eight out of 10 people with chronic pancreatitis will eventually develop PEI. If the damage from acute pancreatitis is severe, people may also need supplementary digestive enzymes to help digest food.",
        ],
      },
      {
        heading: "Signs of PEI",
        paragraphs: [
          "Symptoms can include belly discomfort or pain, bloating, wind and weight loss. Fatty poo can look bulky, oily and pale orange or yellow, be foul-smelling and runny, float, and be difficult to flush away.",
          "Some medicines that cause constipation, such as codeine and other morphine-based medicines, can hide the diarrhoea of PEI.",
        ],
      },
      {
        heading: "How enzyme capsules work",
        paragraphs: [
          "Pancreatic enzyme replacement therapy, or PERT, is the standard treatment for PEI. It contains the enzymes a normal pancreas would make, and it works with your food, not with your body.",
          "When taken properly, PERT can improve absorption, reduce fatty stools, wind and belly pain, increase body weight and improve quality of life. There are four types: Creon, Pancrease, Nutrizym and Pancrex, in capsule or powder form.",
          "The enzymes come from pork, as it is the closest in function to human enzymes, and there is no vegetarian or vegan alternative at present. As there are no alternatives, their use is deemed acceptable by the Chief Rabbi and most Muslim groups, and you can discuss this with your religious leader for support.",
        ],
      },
      {
        heading: "Taking them with food",
        paragraphs: [
          "Capsules are taken with meals, snacks and milky drinks, because they work directly on food. Taking them on an empty stomach will not be effective.",
          "The number or strength of capsules can be changed to suit the size and fat content of the meal. You may be advised to take part of your dose at the start, halfway through and at the end of a meal, and with each course of a longer meal.",
          "Heat damages the enzymes, so avoid leaving the capsules in direct sunlight, near radiators or in trouser pockets. A medicine that reduces stomach acid is often prescribed alongside PERT, to help the enzymes work.",
        ],
      },
      {
        heading: "Getting the dose right",
        paragraphs: [
          "A starting dose should always be reviewed to check it is right for you. If you are having problems, ask your doctor for a review of your enzyme dose rather than changing your diet.",
          "Enzymes sold in health food shops contain tiny amounts of enzymes and are not likely to be effective. The only effective enzymes are those prescribed by a doctor, a nurse or a prescribing dietitian.",
          "You will know the treatment is working when runny poo improves, pain may be better controlled, and your weight starts to stabilise.",
        ],
      },
    ],
    helps: [
      "Take your enzyme capsules with meals, snacks and milky drinks, not on an empty stomach.",
      "Ask whether to spread your dose through the meal: at the start, halfway through and at the end.",
      "Keep capsules away from direct sunlight, radiators and trouser pockets.",
      "Ask for your starting dose to be reviewed, and for another review if you still have symptoms.",
      "Only use enzymes prescribed by a doctor, nurse or prescribing dietitian.",
      "Talk to your doctor if you think you might have PEI.",
    ],
    tryThisWeek: [
      "Take capsules with every snack too.",
      "Keep capsules away from heat.",
      "Ask for a dose review.",
    ],
    ask: "Is my enzyme dose right, and how should I spread it through a meal?",
    interactive: {
      kind: "timeline",
      title: "Enzymes through a meal",
      steps: [
        { id: "before", when: "Before eating", title: "Keep them cool", points: ["Heat damages the enzymes", "Not in sunlight, near radiators or in trouser pockets"] },
        { id: "start", when: "Start of the meal", title: "First part of the dose", points: ["Capsules need to be in the stomach with food", "On an empty stomach they will not work"] },
        { id: "middle", when: "Halfway through", title: "Next part of the dose", points: ["You may be advised to spread the dose", "Take some with each course of a longer meal"] },
        { id: "end", when: "End of the meal", title: "Last part of the dose", points: ["The number of capsules can suit the meal's size and fat content"] },
        { id: "snacks", when: "Snacks and drinks", title: "Take them then too", points: ["With snacks", "With milky drinks such as milky coffee or hot chocolate"] },
        { id: "review", when: "At reviews", title: "Check the dose", points: ["A starting dose should always be reviewed", "Ask for a review if you still have symptoms"] },
      ],
    },
    sources: [GUTS_PEI, GUTS_CHRONIC, GUTS_ACUTE],
    quiz: {
      question: "Why are enzyme capsules taken with food?",
      options: [{ text: "They work directly on the food", right: true }, { text: "They protect the stomach lining" }, { text: "They only work at night" }],
      why: "Capsules are taken with meals, snacks and milky drinks, because they work directly on food.",
    },
  },
  {
    id: "pan-pain",
    kicker: "Treatment",
    question: "How is long-term pancreatitis pain managed?",
    hook: "Most people with chronic pancreatitis have pain. A step-by-step plan, and a team, can help keep it in check.",
    short: "Most people with chronic pancreatitis have pain, which can range from mild to severe. It is treated step by step, starting with simple painkillers, with medicines that change how nerves send pain signals, procedures for some people, and help from pain teams and psychology services. Stopping smoking and alcohol can help too.",
    sections: [
      {
        heading: "Why it hurts",
        paragraphs: [
          "The pain of chronic pancreatitis is felt across the upper tummy, just below the ribs, and can range from mild to severe. It may spread to the back, be constant or come and go, and eating can make it worse.",
          "The cause of the pain is debated. Increased pressure in blocked ducts and over-active nerves in the pancreas may play a part, and the brain may become sensitised to pain signals from the pancreas.",
          "About 1 in 10 people with chronic pancreatitis have no pain. This means most people with chronic pancreatitis will have pain.",
        ],
      },
      {
        heading: "A step-by-step approach",
        paragraphs: [
          "Pain is treated using a step-up approach with painkillers taken by mouth. The lowest effective treatment is used, to relieve pain while keeping side effects down. If simple painkillers such as paracetamol do not work, stronger medicines may be needed.",
          "Opioid pain medicines are excellent at controlling short-term pain, but they are addictive, cause constipation and may cause pain with long-term use. Medicines that change the way the nerves and brain read pain signals, such as amitriptyline, gabapentin or pregabalin, may give better long-term control.",
          "Each situation is decided by a conversation with your doctor or specialist nurse. The aim is a reasonable quality of life, with pain managed as well as possible.",
        ],
      },
      {
        heading: "Procedures that can help",
        paragraphs: [
          "For some people, stones in the main pancreas duct can be removed using an endoscopic procedure called ERCP, and stents can be put into narrowed ducts. Stones can sometimes be broken up using shock wave lithotripsy.",
          "For severe pain that painkillers do not control, injections to block the nerves coming from the pancreas may help. These are only done after careful consideration in specialist centres, and surgery is only offered in special pancreas centres.",
        ],
      },
      {
        heading: "Other things that help",
        paragraphs: [
          "Stopping smoking and alcohol reduces complications and improves painful symptoms. Using digestive enzymes well can also help reduce digestive symptoms and pain.",
          "Everyday activities like walking, swimming and gardening can ease some pain, and breathing slowly and deeply can help you feel more in control. Self-management courses, relaxation and keeping in touch with friends and family can help too.",
        ],
      },
      {
        heading: "Support with pain",
        paragraphs: [
          "The hospital pain management team can be involved in treatment, and your GP can refer you. For people with chronic pain, a referral to a local chronic pain service can help.",
          "Living with a painful long-term illness can lead to anxiety and depression. Psychological therapies such as cognitive behavioural therapy, counselling and mindfulness can help, and clinical psychology is available through the NHS.",
          "Pain Concern supports people living with pain. Its helpline is 0300 123 0789.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor or specialist nurse about the right pain plan for you.",
      "Ask your GP about a referral to the hospital pain management team or a local chronic pain service.",
      "Stop smoking and alcohol, which can improve painful symptoms.",
      "Try gentle activity, and slow, deep breathing when pain is intense.",
      "Tell your team about any new or worsening pain, as it needs investigating.",
      "Call the Pain Concern helpline on 0300 123 0789.",
    ],
    tryThisWeek: [
      "Talk to your team about a pain plan.",
      "Ask about a pain service referral.",
      "Try slow, deep breathing.",
    ],
    ask: "What is the plan for my pain, and can I be referred to a pain service?",
    interactive: {
      kind: "flip-cards",
      title: "Pain treatments, card by card",
      intro: "Turn each card to see when each one is used.",
      cards: [
        { id: "simple", front: "Simple painkillers", when: "The first step", back: "Such as paracetamol. The lowest effective treatment is used." },
        { id: "opioids", front: "Opioid medicines", when: "For short-term pain or flares", back: "Excellent at controlling short-term pain, but addictive, and they cause constipation." },
        { id: "nerve-medicines", front: "Pain-modifying medicines", when: "For long-term control", back: "Change how nerves and brain read pain signals: amitriptyline, gabapentin or pregabalin." },
        { id: "ercp", front: "ERCP and stents", when: "For stones or narrowed ducts", back: "Removes stones from the main pancreas duct, or puts stents into narrowed ducts." },
        { id: "nerve-block", front: "Nerve block injections", when: "If painkillers do not control severe pain", back: "Block the nerves coming from the pancreas. Only in specialist centres." },
        { id: "services", front: "Pain and psychology services", when: "Through your GP or hospital", back: "Pain management teams, chronic pain services and psychological therapies." },
      ],
    },
    sources: [NHS_CHRONIC, GUTS_CHRONIC, NHS_PAIN],
    quiz: {
      question: "How is chronic pancreatitis pain usually treated?",
      options: [{ text: "Step by step, starting with simple painkillers", right: true }, { text: "With the strongest painkiller straight away" }, { text: "With surgery for everyone" }],
      why: "Pain is treated using a step-up approach with painkillers taken by mouth. If simple painkillers such as paracetamol do not work, stronger medicines may be needed.",
    },
  },
  {
    id: "pan-diabetes",
    kicker: "Treatment",
    question: "Can pancreatitis cause diabetes?",
    hook: "A damaged pancreas can stop making enough insulin. The diabetes it causes has its own name: type 3c.",
    short: "The pancreas makes insulin, so damage to it can cause diabetes. Diabetes caused by pancreatitis is called type 3c diabetes. It is often treated with metformin or insulin, and people with chronic pancreatitis are checked for it regularly.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "Diabetes related to pancreatitis is called type 3c diabetes. It can happen when the pancreas is damaged and stops producing enough insulin for the body. Insulin allows the glucose, or sugar, in our blood to enter our cells and fuel our bodies.",
          "A damaged pancreas also makes too little glucagon, a hormone that prevents low blood sugar. This is why people with type 3c diabetes can often find their blood sugar levels difficult to manage.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "The number of people with chronic pancreatitis who are diagnosed with diabetes increases over time. Between 25 and 80 people in 100 will develop diabetes within 10 to 20 years.",
          "About 1 in 5 adults who have had severe acute pancreatitis will go on to develop diabetes in the future.",
        ],
      },
      {
        heading: "Signs to tell your doctor about",
        paragraphs: [
          "Signs to discuss with your doctor include losing weight without trying, feeling very thirsty, peeing more often than normal, particularly at night, and craving sugary drinks and foods. Other symptoms might include tiredness and blurred vision.",
          "People with chronic pancreatitis should be checked for diabetes every six months, even if they have no symptoms. This can be done with a simple blood test called HbA1c.",
        ],
      },
      {
        heading: "Getting the right diagnosis",
        paragraphs: [
          "Type 3c diabetes is not as well known as other types, so some people are wrongly diagnosed with type 2 diabetes. If you've had pancreatic problems, you can ask your doctor to check for type 3c and explain your reasons why.",
          "Not getting the right diagnosis can be really difficult to deal with emotionally, so find someone to talk to. The Diabetes UK helpline is on 0345 123 2399.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Current guidelines say type 3c diabetes should be treated with metformin or insulin. You're likely to start on metformin, and if this isn't enough and you're losing weight, you'll move on to insulin.",
          "Many people with type 3c diabetes need insulin at an earlier stage than people with type 2 diabetes. When type 3c diabetes is difficult to control, people are usually referred to a specialist diabetes service.",
          "Insulin can help people put weight and muscle back on.",
        ],
      },
    ],
    helps: [
      "Mention your pancreatitis when you are tested for diabetes, so your doctor knows you are at risk of type 3c.",
      "With chronic pancreatitis, have an HbA1c blood test every six months, even without symptoms.",
      "Tell your doctor if you lose weight without trying, feel very thirsty or pee more often, particularly at night.",
      "If you've had pancreatic problems, ask your doctor to check for type 3c diabetes.",
      "If metformin is working, have a check every six months to see if you need to move on to insulin.",
    ],
    tryThisWeek: [
      "Mention your pancreatitis at diabetes tests.",
      "Book your six-monthly HbA1c test.",
      "Tell your doctor about any thirst.",
    ],
    ask: "Should I be checked for diabetes, and could it be type 3c?",
    interactive: {
      kind: "signs",
      title: "Signs to mention",
      intro: "Tick any you have noticed. They can be signs that diabetes is developing.",
      signs: ["Losing weight without trying", "Feeling very thirsty", "Peeing more often, particularly at night", "Craving sugary drinks and foods", "Tiredness", "Blurred vision"],
      after: "Discuss these with your doctor, and mention your pancreatitis so they know you are at risk of type 3c diabetes.",
      copyHeading: "Signs I have noticed",
    },
    sources: [GUTS_ACUTE, GUTS_CHRONIC, DUK_3C, GUTS_PEI],
    quiz: {
      question: "What is diabetes caused by pancreatitis called?",
      options: [{ text: "Type 3c diabetes", right: true }, { text: "Type 1 diabetes" }, { text: "Gestational diabetes" }],
      why: "Diabetes related to pancreatitis is called type 3c diabetes.",
    },
  },
  {
    id: "pan-alcohol-smoking",
    kicker: "Living well",
    question: "Why does stopping alcohol and smoking matter so much?",
    hook: "Both can add to the damage, whatever caused it. Stopping is hard, and nobody has to do it alone.",
    short: "Alcohol and smoking can both make pancreatitis worse, even if they did not cause it. Stopping can help slow the damage, reduce complications and ease pain. Free help is available from your GP, local alcohol services and Stop Smoking Services.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "Drinking alcohol can cause more damage to your pancreas, even if the condition was not caused by alcohol. If you smoke, giving up can help slow down the damage to the pancreas.",
          "Stopping smoking and alcohol also reduces complications and improves painful symptoms. Guts UK says it is vital to give up both, even if they are not the main causes of your pancreatitis.",
        ],
      },
      {
        heading: "Alcohol after acute pancreatitis",
        paragraphs: [
          "If the cause of acute pancreatitis is alcohol, Guts UK says it is really important to stop drinking alcohol completely and forever. If you have another cause of pancreatitis that comes back or becomes chronic, it says to stop drinking alcohol permanently, as alcohol can aggravate pancreatitis caused by other conditions.",
          "After acute pancreatitis, the NHS says it's a good idea to drink less alcohol, or not drink any alcohol at all, to help stop it coming back.",
          "Stopping may need specialised help, as it can be difficult to do it alone. Ask your doctor about alcohol services in your area.",
        ],
      },
      {
        heading: "Stopping drinking safely",
        paragraphs: [
          "A good place to start is with a GP. Try to be accurate and honest about how much you drink, and ask about local alcohol services, free support groups and counselling.",
          "It can be very dangerous to stop drinking suddenly if you're dependent on alcohol. If you get withdrawal symptoms, such as anxiety, sweating, shaking or feeling sick, get medical help before you try to stop drinking.",
          "Call 999 or go to A&E if you or someone else has severe withdrawal symptoms after stopping drinking, such as shaking visibly, confusion, seeing or hearing things that are not there, or having a seizure.",
        ],
      },
      {
        heading: "Help to stop smoking",
        paragraphs: [
          "Tobacco and nicotine are thought to be toxic to the pancreas. Most NHS services include a stop smoking service, and asking for professional help can boost your chances of success.",
          "With professional or expert help, you're 3 times more likely to quit for good. Local Stop Smoking Services are free, and advisers can help you choose nicotine replacement products or other stop smoking medicines.",
        ],
      },
      {
        heading: "Support that keeps going",
        paragraphs: [
          "Drinkline is the free, confidential national alcohol helpline, on 0300 123 1110. Self-help or mutual aid groups, such as AA or SMART Recovery groups, are available in most areas.",
          "Most people need some help or a long-term plan to stay in control or completely alcohol-free. Ask a GP or alcohol service about what longer-term support is available in your area.",
        ],
      },
    ],
    helps: [
      "Do not drink alcohol, as it can cause more damage to your pancreas, even if alcohol was not the cause.",
      "Stop smoking: giving up can help slow down the damage to the pancreas.",
      "Start with a GP, and try to be accurate and honest about how much you drink.",
      "If you get withdrawal symptoms, get medical help before you try to stop drinking.",
      "Contact your local Stop Smoking Service, which is free.",
      "Call Drinkline free and in confidence on 0300 123 1110.",
    ],
    tryThisWeek: [
      "Talk to a GP about drinking.",
      "Contact a Stop Smoking Service.",
      "Save Drinkline's number.",
    ],
    ask: "Is any alcohol safe for me, and what help is there to stop drinking or smoking?",
    interactive: {
      kind: "scenarios",
      title: "Moments on the way to stopping",
      scenarios: [
        {
          id: "not-alcohol",
          situation: "Your pancreatitis was caused by gallstones, not alcohol.",
          options: [{ text: "Ask your team about alcohol, as it can still harm the pancreas", best: true }, { text: "Carry on drinking as before" }],
          why: "Drinking alcohol can cause more damage to your pancreas, even if the condition was not caused by alcohol.",
        },
        {
          id: "sudden",
          situation: "You drink every day and want to stop today.",
          options: [{ text: "Get medical help before stopping", best: true }, { text: "Stop suddenly on your own" }],
          why: "It can be very dangerous to stop drinking suddenly if you're dependent on alcohol.",
        },
        {
          id: "smoking",
          situation: "You have tried to quit smoking on your own before.",
          options: [{ text: "Contact your local Stop Smoking Service", best: true }, { text: "Give up on quitting" }],
          why: "With professional or expert help, you're 3 times more likely to quit for good.",
        },
        {
          id: "withdrawal",
          situation: "Someone is shaking visibly and confused after stopping drinking.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait for it to pass" }],
          why: "Call 999 or go to A&E if you or someone else has severe withdrawal symptoms after stopping drinking.",
        },
      ],
    },
    sources: [NHS_CHRONIC, GUTS_CHRONIC, GUTS_ACUTE, NHS_ACUTE, NHS_ALCOHOL_SUPPORT, NHS_AUD, NHS_STOP_SMOKING],
    quiz: {
      question: "Can alcohol harm the pancreas even if it did not cause your pancreatitis?",
      options: [{ text: "Yes, it can cause more damage", right: true }, { text: "No, only if alcohol was the cause" }, { text: "No, not after the first year" }],
      why: "Drinking alcohol can cause more damage to your pancreas, even if the condition was not caused by alcohol.",
    },
  },
  {
    id: "pan-food",
    kicker: "Living well",
    question: "What should I eat with pancreatitis?",
    hook: "Not a strict diet. A balanced one, smaller meals if that is easier, and the right enzymes if you need them.",
    short: "Eating a healthy, balanced diet helps you get the nutrients you need. After acute pancreatitis, the NHS suggests a healthy, low-fat diet to help stop it coming back. With chronic pancreatitis, Guts UK says most people should eat a normal balanced diet, with prescribed enzymes if needed rather than cutting out fat, and see a specialist dietitian.",
    sections: [
      {
        heading: "A balanced diet",
        paragraphs: [
          "If you have chronic pancreatitis, eating a healthy, balanced diet can help you get the nutrients you need.",
          "Most people with chronic pancreatitis should eat a normal balanced diet, although some find it easier to have more, smaller meals throughout the day. Restricting what you eat can be harmful.",
        ],
      },
      {
        heading: "After acute pancreatitis",
        paragraphs: [
          "If you have had acute pancreatitis once, it's possible to get it again. Eating a healthy, low-fat diet is one of the things the NHS says can help stop it coming back.",
          "Questions to ask your dietitian include what diet is best for you, and whether you need prescription digestive enzymes.",
        ],
      },
      {
        heading: "Why cutting out fat is not the answer with chronic pancreatitis",
        paragraphs: [
          "Many people learn that fatty foods make diarrhoea worse, but avoiding fat adds to weight loss and malnutrition. Low-fat diets only hide the symptoms of PEI and do not treat the real problem.",
          "Prescribed digestive enzymes, when needed, are the right treatment to allow a normal diet. The aim is to digest normal meals without symptoms, and to regain weight.",
          "A rare exception is an inherited problem with very high blood cholesterol or triglyceride levels that can cause pancreatitis. Your specialist team will explain this to you if it applies.",
        ],
      },
      {
        heading: "A dietitian on your team",
        paragraphs: [
          "Every person with chronic pancreatitis should see a specialist qualified dietitian, who is a vital part of the team. Other nutritional therapists should be avoided, as they have variable training and may give poor or dangerous advice.",
          "People with chronic pancreatitis should be offered checks on their nutrition at least every 12 months. This usually involves blood tests to look for nutritional deficiencies and a review of your symptoms.",
        ],
      },
      {
        heading: "Appetite and vitamins",
        paragraphs: [
          "People with PEI often have a poor appetite, and eating smaller meals more often can help. Some people also need vitamin and mineral supplements, and this can be discussed with the dietitian.",
          "People with chronic pancreatitis are prone to low vitamin D and may need prescribed vitamin D. People with darker skin tones may need to take it more regularly, so talk to your doctor if this applies to you.",
        ],
      },
    ],
    helps: [
      "Eat a healthy, balanced diet to help you get the nutrients you need.",
      "Try smaller meals more often if big meals are hard.",
      "Ask to see a specialist qualified dietitian.",
      "Don't change your diet to manage symptoms: ask for a review of your enzyme dose instead.",
      "Avoid advice from non-registered nutritional therapists.",
      "Talk to your doctor about whether you need vitamin D.",
    ],
    tryThisWeek: [
      "Try smaller, more frequent meals.",
      "Ask to see a dietitian.",
      "Ask about vitamin D.",
    ],
    ask: "Can I see a specialist dietitian, and do I need enzymes or vitamins?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "fatty",
          situation: "Fatty meals seem to make your diarrhoea worse.",
          options: [{ text: "Ask for a review of your enzyme dose", best: true }, { text: "Cut out fat altogether" }],
          why: "Low-fat diets only hide the symptoms of PEI and do not treat the real problem.",
        },
        {
          id: "appetite",
          situation: "Big meals feel like too much at the moment.",
          options: [{ text: "Try smaller meals more often", best: true }, { text: "Skip meals" }],
          why: "People with PEI often have a poor appetite, and eating smaller meals more often can help.",
        },
        {
          id: "therapist",
          situation: "A nutritional therapist offers you a special diet plan.",
          options: [{ text: "See a specialist dietitian instead", best: true }, { text: "Follow the plan" }],
          why: "Other nutritional therapists should be avoided, as they have variable training and may give poor or dangerous advice.",
        },
        {
          id: "shop",
          situation: "A health food shop sells digestive enzymes.",
          options: [{ text: "Use only prescribed enzymes", best: true }, { text: "Buy them instead" }],
          why: "Enzymes from health food shops contain tiny amounts of enzymes and are not likely to be effective.",
        },
      ],
    },
    sources: [NHS_CHRONIC, NHS_ACUTE, GUTS_CHRONIC, GUTS_ACUTE, GUTS_PEI],
    quiz: {
      question: "With chronic pancreatitis, is cutting out fat the usual answer?",
      options: [{ text: "No, a normal balanced diet with enzymes if needed", right: true }, { text: "Yes, a fat-free diet for everyone" }, { text: "Yes, but only at weekends" }],
      why: "Low-fat diets only hide the symptoms of PEI and do not treat the real problem.",
    },
  },
  {
    id: "pan-urgent",
    kicker: "Living well",
    question: "When should I get urgent help?",
    hook: "Sudden, severe tummy pain is never something to wait out. Know which signs mean 999, and which mean NHS 111.",
    short: "Sudden, severe tummy pain can be a sign of acute pancreatitis, which needs treatment in hospital straight away. Call 999 or go to A&E if the pain spreads to your back, or comes with bloating, a fast heartbeat, difficulty breathing or blue or bruised-looking skin. Otherwise, ask for an urgent GP appointment or get help from NHS 111.",
    sections: [
      {
        heading: "Call 999 or go to A&E",
        paragraphs: [
          "Call 999 or go to A&E if you get sudden, severe pain in your tummy and the pain is spreading to your back, or you have bloating that does not go away or keeps coming back.",
          "Also call 999 or go to A&E if sudden, severe tummy pain comes with a fast heartbeat or difficulty breathing, or the skin around your belly button, waist or upper outer thigh appears blue or bruised. This may be more difficult to see on black or brown skin.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance. Bring any medicines you take with you.",
        ],
      },
      {
        heading: "Urgent GP or NHS 111",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you get sudden, severe pain in your tummy and it does not go away or keeps coming back, or you have a high temperature, or you feel hot, cold or shivery. You can call 111 or get help from 111 online.",
          "If you have chronic pancreatitis, ask for an urgent GP appointment or get help from NHS 111 if you get sudden, severe pain in your tummy. This could be a sign of acute pancreatitis or another condition that may need to be treated in hospital as soon as possible.",
        ],
      },
      {
        heading: "Yellow skin or eyes",
        paragraphs: [
          "Jaundice is when your skin or the whites of your eyes turn yellow. It can be a sign of something serious, so ask for an urgent GP appointment or get help from NHS 111. You may also have itchy skin, darker pee and paler poo than usual.",
          "If you have gallstones, the NHS says to call 999 or go to A&E if your skin or the white part of your eyes looks yellow, your temperature is very high or you feel hot, cold or shivery, or pain spreads from your tummy to your back and you are being sick.",
        ],
      },
      {
        heading: "New or changing symptoms",
        paragraphs: [
          "Severe or new symptoms of chronic pancreatitis should not be ignored, as they may be a sign of a complication that needs specialised treatment. Any new or worsening pain needs investigating.",
          "Recovery after severe pancreatitis can be slow and it is common to feel worse at times. You should be told who to contact if you feel seriously unwell.",
        ],
      },
      {
        heading: "Alcohol withdrawal",
        paragraphs: [
          "Call 999 or go to A&E if you or someone else has severe withdrawal symptoms after stopping drinking alcohol, such as shaking visibly, confusion, seeing or hearing things that are not there, or having a seizure.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E if sudden, severe tummy pain is spreading to your back.",
      "Call 999 or go to A&E if severe tummy pain comes with a fast heartbeat, difficulty breathing, or blue or bruised-looking skin.",
      "Do not drive yourself to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
      "Ask for an urgent GP appointment or get help from NHS 111 if the pain does not go away or comes with a high temperature.",
      "Get urgent medical help if your skin or the whites of your eyes look yellow.",
      "Ask your team who to contact if you feel seriously unwell.",
    ],
    tryThisWeek: [
      "Learn the signs that mean 999.",
      "Plan who could drive you to A&E.",
      "Ask who to contact if unwell.",
    ],
    ask: "Which symptoms mean I should get urgent help, and who should I contact?",
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        {
          id: "back",
          situation: "Sudden, severe tummy pain is spreading to your back.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait until the morning" }, { text: "Take a painkiller and lie down" }],
          why: "Call 999 or go to A&E if you get sudden, severe pain in your tummy and the pain is spreading to your back.",
        },
        {
          id: "shivery",
          situation: "Sudden, severe tummy pain keeps coming back, and you feel hot and shivery.",
          options: [{ text: "Ask for an urgent GP appointment or contact NHS 111", best: true }, { text: "Wait a few days to see" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if the pain keeps coming back or you feel hot, cold or shivery.",
        },
        {
          id: "drive",
          situation: "You need to get to A&E and your car is outside.",
          options: [{ text: "Ask someone to drive you, or call 999", best: true }, { text: "Drive yourself" }],
          why: "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        },
        {
          id: "yellow",
          situation: "You notice the whites of your eyes look yellow.",
          options: [{ text: "Get urgent medical help", best: true }, { text: "Wait to see if it fades" }],
          why: "Jaundice can be a sign of something serious: an urgent GP appointment or NHS 111. With gallstones, the NHS says call 999 or go to A&E.",
        },
      ],
    },
    sources: [NHS_ACUTE, NHS_CHRONIC, NHS_JAUNDICE, NHS_GALLSTONES, GUTS_CHRONIC, NICE_NG104, NHS_AUD],
    quiz: {
      question: "Should you drive yourself to A&E with severe tummy pain?",
      options: [{ text: "No, ask someone to drive you or call 999", right: true }, { text: "Yes, if it is not far" }, { text: "Yes, it is quicker" }],
      why: "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
    },
  },
  {
    id: "pan-support",
    kicker: "Living well",
    question: "What follow-up and support can I get?",
    hook: "Regular checks catch problems early. And there are people who understand, from your team to charities.",
    short: "People with chronic pancreatitis are cared for by their GP and a specialist pancreas team, with regular checks for diabetes, digestion, nutrition and bone health. Pancreatitis can be hard to live with, physically and emotionally, and support is available from your team, support groups and charities such as Guts UK.",
    sections: [
      {
        heading: "Your care team",
        paragraphs: [
          "You'll be supported by different healthcare professionals. This may include your GP and specialist doctors, nurses and dietitians.",
          "You will be cared for by your GP practice together with a specialist pancreas team at your local hospital. Your local team may refer you to a specialist pancreas centre if you need special investigations or an operation.",
        ],
      },
      {
        heading: "Regular checks",
        paragraphs: [
          "People with chronic pancreatitis should be offered checks on how well the pancreas makes enzymes and on their nutrition at least every 12 months. This usually involves blood tests, a poo test called faecal elastase, and a review of your symptoms.",
          "Adults with chronic pancreatitis should also be offered an HbA1c test for diabetes at least every six months, and a bone density assessment every two years. Hospital staff should tell GPs about these checks.",
          "Two in 3 people with chronic pancreatitis can develop weakened bones over time, and this can result in broken bones.",
        ],
      },
      {
        heading: "After acute pancreatitis",
        paragraphs: [
          "Questions to ask include whether you should be monitored after leaving hospital, what signs mean you might need to see a specialist or go back into hospital, and whether you need testing for diabetes.",
          "Care teams should explain to people with chronic pancreatitis the importance of ongoing support and regular check-ups, to help them stay as well as they can.",
        ],
      },
      {
        heading: "Looking after your mind",
        paragraphs: [
          "Chronic pancreatitis can be a difficult condition to live with, both physically and emotionally. Symptoms like pain, feeling sick and being sick can be stressful to live with.",
          "People with pancreatitis may struggle with isolation, relationship problems, unemployment and the financial pressures this brings. Clinical psychology is available through the NHS to help people cope with the effects of chronic pancreatitis.",
        ],
      },
      {
        heading: "Support from others",
        paragraphs: [
          "As well as support from your GP and specialist team, you may find it helpful to get support from other people with chronic pancreatitis, at a local support group or online.",
          "Guts UK is the national charity for the digestive system. Its helpline is 0300 102 4887, Monday to Friday, 10am to 2pm. Pain Concern supports people living with pain, on 0300 123 0789.",
          "Every November, Guts UK runs Kranky Panky, a pancreatitis awareness month that shares real-life stories of people affected by the condition.",
        ],
      },
    ],
    helps: [
      "Go to every check-up, including an HbA1c test every six months and a bone density assessment every two years.",
      "Ask whether you should be monitored after leaving hospital.",
      "Ask about clinical psychology through the NHS if you are finding it hard to cope.",
      "Look for a local or online support group.",
      "Call the Guts UK helpline on 0300 102 4887.",
    ],
    tryThisWeek: [
      "Check when your next tests are.",
      "Look for a support group.",
      "Save the Guts UK helpline.",
    ],
    ask: "Which checks do I need, how often, and who arranges them?",
    interactive: {
      kind: "flip-cards",
      title: "Your regular checks",
      intro: "Turn each card to see what each check looks for.",
      cards: [
        { id: "hba1c", front: "HbA1c blood test", when: "At least every six months", back: "A simple blood test for diabetes, even if you have no symptoms." },
        { id: "elastase", front: "Faecal elastase test", when: "Every year", back: "A poo test to check for PEI, even if your bowel habit is normal." },
        { id: "nutrition", front: "Nutrition check", when: "At least every 12 months", back: "Blood tests for nutritional deficiencies, and a review of your symptoms." },
        { id: "bones", front: "Bone density scan", when: "Every two years", back: "A DEXA scan to check for weakened bones." },
        { id: "team", front: "Pancreas team review", when: "As your team advises", back: "Your pancreas team will monitor your condition and advise you on any further tests." },
      ],
    },
    sources: [NHS_CHRONIC, GUTS_CHRONIC, GUTS_PEI, GUTS_ACUTE, NICE_NG104, GUTS_CONTACT, GUTS_KRANKY],
    quiz: {
      question: "How often should adults with chronic pancreatitis be offered a test for diabetes?",
      options: [{ text: "At least every six months", right: true }, { text: "Every five years" }, { text: "Only if they feel unwell" }],
      why: "Adults with chronic pancreatitis should also be offered an HbA1c test for diabetes at least every six months.",
    },
  },
];
