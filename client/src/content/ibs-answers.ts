import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Irritable bowel syndrome (IBS) page's pieces
// (content/library-conditions/cancer-mind-digestion.ts). Every sentence was written from wording checked on
// 21 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do
// not say. Most of it comes from the NHS, NHS inform, Guts UK, the British Dietetic Association, NICE
// (CG61) and the government's pages on Access to Work, reasonable adjustments and the Equality Act.
// theibsnetwork.org now carries unrelated gambling content, so it is not used as a source. General
// information only; it never replaces what a person's own GP, dietitian or gastroenterologist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const inform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/illnesses-and-conditions/stomach-liver-and-gastrointestinal-tract/irritable-bowel-syndrome-ibs/${path}` });
const guts = (label: string, path: string): LearnSource => ({ label: `Guts UK: ${label}`, url: `https://gutscharity.org.uk/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_IBS_WHAT = nhs("What is IBS (irritable bowel syndrome)", "conditions/irritable-bowel-syndrome-ibs/what-is-ibs/");
const NHS_IBS_SYMPTOMS = nhs("Symptoms of IBS", "conditions/irritable-bowel-syndrome-ibs/symptoms/");
const NHS_IBS_DIAGNOSIS = nhs("Getting diagnosed with IBS", "conditions/irritable-bowel-syndrome-ibs/getting-diagnosed/");
const NHS_IBS_DIET = nhs("Diet, lifestyle and medicines for IBS", "conditions/irritable-bowel-syndrome-ibs/diet-lifestyle-and-medicines/");
const NHS_IBS_HELP = nhs("Further help and support for IBS", "conditions/irritable-bowel-syndrome-ibs/further-help-and-support/");
const NHS_BOWEL_CANCER = nhs("Symptoms of bowel cancer", "conditions/bowel-cancer/symptoms/");
const NHS_ENDOMETRIOSIS = nhs("Endometriosis", "conditions/endometriosis/");
const NHS_FOOD_INTOLERANCE = nhs("Food intolerance", "conditions/food-intolerance/");
const NHS_MEBEVERINE = nhs("Mebeverine", "medicines/mebeverine/");
const NHS_PEPPERMINT_ABOUT = nhs("About peppermint oil", "medicines/peppermint-oil/about-peppermint-oil/");
const NHS_PEPPERMINT_QUESTIONS = nhs("Common questions about peppermint oil", "medicines/peppermint-oil/common-questions-about-peppermint-oil/");
const NHS_LOPERAMIDE_ABOUT = nhs("About loperamide", "medicines/loperamide/about-loperamide/");
const NHS_LOPERAMIDE_HOW = nhs("How and when to take loperamide", "medicines/loperamide/how-and-when-to-take-loperamide/");
const NHS_LOPERAMIDE_QUESTIONS = nhs("Common questions about loperamide", "medicines/loperamide/common-questions-about-loperamide/");
const NHS_LAXATIVES = nhs("Laxatives", "medicines/laxatives/");
const NHS_STRESS = nhs("Stress", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/stress/");
const NHS_BREATHING = nhs("Breathing exercises for stress", "mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/");
const NHS_STRESS_BUSTERS = nhs("10 stress busters", "mental-health/self-help/guides-tools-and-activities/tips-to-reduce-stress/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_COMPLEMENTARY = nhs("Herbal medicines and complementary therapies", "tests-and-treatments/herbal-medicines-and-complementary-therapies/");

const INFORM_IBS = inform("Irritable bowel syndrome (IBS)", "");
const INFORM_MANAGING = inform("Managing irritable bowel syndrome (IBS)", "managing-irritable-bowel-syndrome-ibs");
const INFORM_MIND = inform("IBS and your mental health", "ibs-and-your-mental-health");

const GUTS_IBS = guts("Irritable Bowel Syndrome (IBS)", "advice-and-information/conditions/irritable-bowel-syndrome/");
const GUTS_BLOATING = guts("Bloating and distension", "advice-and-information/symptoms/bloating-and-distension/");
const GUTS_DIARRHOEA = guts("Diarrhoea", "advice-and-information/symptoms/diarrhoea/");
const GUTS_CONSTIPATION = guts("Constipation", "advice-and-information/symptoms/constipation/");
const GUTS_FOOD_TESTS = guts("Food intolerance testing", "advice-and-information/testing-and-monitoring/food-intolerance-testing/");
const GUTS_CANT_WAIT = guts("This Can't Wait card", "advice-and-information/this-cant-wait-card/");
const GUTS_CBT_TRIAL = guts("IBS and the gut-brain connection", "2019/04/ibs-the-gut-brain-connection/");

const BDA_IBS: LearnSource = { label: "British Dietetic Association: Irritable bowel syndrome (IBS) and diet", url: "https://www.bda.uk.com/resource/irritable-bowel-syndrome-diet.html" };
const NICE_CG61: LearnSource = { label: "NICE: Irritable bowel syndrome in adults (CG61), recommendations", url: "https://www.nice.org.uk/guidance/cg61/chapter/Recommendations" };

const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");
const GOV_ATW_ELIGIBILITY = gov("Access to Work: eligibility", "access-to-work/eligibility");
const GOV_ADJUSTMENTS = gov("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");
const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");

export const ibsAnswers: LearnArticle[] = [
  {
    id: "ibs-what-it-is",
    kicker: "Understanding",
    question: "What is IBS?",
    hook: "Doctors describe IBS as a problem with how the gut and the brain communicate. Oversensitive nerves can turn normal gut movements into pain.",
    short: "IBS (irritable bowel syndrome) is a common condition that affects the digestive system. It causes symptoms like stomach cramps, bloating, diarrhoea and constipation, which tend to come and go. Doctors know it as a disorder of the communication between the gut and the brain, and diet changes and medicines can often help control the symptoms.",
    sections: [
      {
        heading: "A common gut condition",
        paragraphs: [
          "IBS (irritable bowel syndrome) is a common condition that affects the digestive system. It causes symptoms like stomach cramps, bloating, diarrhoea and constipation, which tend to come and go over time and can last for days, weeks or months at a time.",
          "It is usually a lifelong problem, and it can be very frustrating to live with. But diet changes and medicines can often help control the symptoms, and once diagnosed, most people can find effective ways to live with IBS.",
        ],
      },
      {
        heading: "The gut and the brain",
        paragraphs: [
          "Doctors know IBS as a disorder involving the communication between the gut and the brain, called a disorder of gut-brain interaction. Nerves supply the gut and enable it to work correctly, and in IBS there is a fault with this interaction.",
          "The nerves can be too sensitive to the way the bowel normally moves, and this sensitivity causes pain. Doctors call this visceral hypersensitivity. Even the normal contractions of the bowel wall muscles, which move poo along, can cause pain for people with IBS.",
          "The brain sends messages to the gut that can speed up or slow down the muscles of the large bowel. In some people with IBS, this gut-brain connection becomes more sensitive to change, and the stress response is one reason.",
        ],
      },
      {
        heading: "Why the tests come back normal",
        paragraphs: [
          "There is no test for IBS. Tests are used to rule out other possible causes, such as a blood test for coeliac disease and a poo sample to check for infections and inflammatory bowel disease.",
          "After ruling out other conditions with a few simple tests, doctors can be confident the diagnosis is IBS. IBS does not pose a serious threat to your physical health, and it does not increase your chances of developing cancer or other bowel conditions.",
        ],
      },
      {
        heading: "What may set it off",
        paragraphs: [
          "The exact cause is unknown. It has been linked to food passing through the gut too quickly or too slowly, gastroenteritis, oversensitivity in the gut, stress and a family history of IBS.",
          "For some people a gut infection or antibiotic use can cause the condition to start. Changes in the microbes normally found in the gut have also been linked to IBS, and more research is needed to find out the causes.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "IBS is one of the most common digestive conditions. It affects between 4 in 100 and 1 in 10 people worldwide, and twice as many women as men are diagnosed with it.",
          "Doctors can diagnose IBS at any stage of life. But the most common age of diagnosis is between 20 and 40.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you might have IBS and have had symptoms for over 4 weeks.",
      "Do not be tempted to self-diagnose: the GP will do any tests needed to rule out other diseases.",
      "Write down details of your symptoms before your appointment to help you remember them.",
      "If you are unsure about something after you are diagnosed, write down your questions and make another appointment to go over them.",
      "Try different treatments: they may not all work, and sometimes it takes a combination of them.",
    ],
    tryThisWeek: [
      "See a GP after 4 weeks of symptoms.",
      "Write down your symptoms.",
      "Note questions for a follow-up.",
    ],
    ask: "Have the other possible causes of my symptoms been ruled out?",
    interactive: {
      kind: "flip-cards",
      title: "The words, card by card",
      intro: "Turn each card to see what the words doctors use about IBS mean.",
      cards: [
        { id: "gut-brain", front: "Gut-brain interaction", when: "How doctors describe IBS", back: "A disorder of the communication between the gut and the brain. In IBS there is a fault with this interaction." },
        { id: "visceral", front: "Visceral hypersensitivity", when: "Why it hurts", back: "The gut's nerves are too sensitive to the way the bowel normally moves, and this sensitivity causes pain." },
        { id: "contractions", front: "Gut contractions", when: "How poo moves along", back: "Muscles in the bowel wall squeeze to move poo along. These normal contractions can cause pain in IBS." },
        { id: "flare", front: "Flare-up", when: "Days when symptoms are worse", back: "Symptoms can be better some days and worse on others. Flare-ups can happen for no obvious reason." },
        { id: "tests", front: "Normal tests", when: "After the GP's checks", back: "There is no test for IBS. Tests rule out other causes, so doctors can be confident it is IBS." },
      ],
    },
    sources: [NHS_IBS_WHAT, GUTS_IBS, INFORM_MIND, NHS_IBS_DIAGNOSIS, INFORM_IBS, NHS_IBS_SYMPTOMS],
    quiz: {
      question: "How do doctors describe IBS?",
      options: [{ text: "A problem with how the gut and brain communicate", right: true }, { text: "Damage to the lining of the bowel" }, { text: "An allergy to certain foods" }],
      why: "Doctors know IBS as a disorder involving the communication between the gut and the brain, called a disorder of gut-brain interaction.",
    },
  },
  {
    id: "ibs-red-flags",
    kicker: "Warning signs",
    question: "Which symptoms are not IBS and need checking?",
    hook: "Some symptoms are not typical of IBS. Bleeding, weight loss or a lump mean seeing a doctor soon, even if you already have a diagnosis.",
    short: "Some symptoms are not typical of IBS and may signal other diseases. Losing a lot of weight for no reason, bleeding from your bottom or bloody diarrhoea, or a hard lump or swelling in your tummy mean asking for an urgent GP appointment or getting help from NHS 111. See your doctor about them even if you have already been diagnosed with IBS.",
    sections: [
      {
        heading: "Not typical of IBS",
        paragraphs: [
          "Some symptoms are not typical of IBS and may signal other diseases. If you have concerning symptoms, see your doctor as soon as possible, even if you have already been diagnosed with IBS.",
          "Having these symptoms does not definitely mean you have bowel cancer, but it is important to get checked by a GP. If symptoms are caused by cancer, finding it early may mean it is easier to treat.",
        ],
      },
      {
        heading: "When to ask for an urgent appointment",
        paragraphs: [
          "The NHS says to ask for an urgent GP appointment or get help from NHS 111 if you have lost a lot of weight for no reason, are bleeding from your bottom or have bloody diarrhoea, or find a hard lump or swelling in your tummy.",
          "The same applies if you have shortness of breath, noticeable heartbeats called palpitations, and skin that is paler than usual. These could be signs of something more serious.",
          "Call 999 or go to A&E if you are bleeding non-stop from your bottom, or there is a lot of blood or you see large blood clots when you poo.",
        ],
      },
      {
        heading: "A change that lasts",
        paragraphs: [
          "Guts UK lists a persistent change of bowel habit for 4 weeks or longer as a symptom that may need further investigation. This matters especially if you are over 40, pass blood from the back passage, or have lost more than 2kg without meaning to. Diarrhoea that wakes you from sleep, a fever or anaemia found on a blood test are other reasons.",
          "NHS inform says to contact your GP practice urgently about a change in bowel habits that has lasted for more than 6 weeks, especially if you are over 50.",
        ],
      },
      {
        heading: "Family history and bloating",
        paragraphs: [
          "Tell your doctor if you have a family history of bowel disease such as cancer, colitis or Crohn's disease. NHS inform also says to tell your GP if you have a family history of bowel cancer or ovarian cancer.",
          "If you were born female and have ovaries, Guts UK says you should be tested for ovarian cancer if you have bloating. Your GP can arrange a simple blood test.",
        ],
      },
      {
        heading: "Conditions that look like IBS",
        paragraphs: [
          "The symptoms of IBS are similar to other conditions, like coeliac disease and inflammatory bowel disease, so it is important to rule these out. Anaemia is not a symptom of IBS, and it could show other diseases.",
          "Do not change your diet before the tests. You need to be eating gluten for the coeliac disease blood test to identify it.",
        ],
      },
    ],
    helps: [
      "Ask for an urgent GP appointment or get help from NHS 111 if you have lost a lot of weight for no reason, are bleeding from your bottom, or find a lump or swelling in your tummy.",
      "Call 999 or go to A&E if you are bleeding non-stop from your bottom, or pass a lot of blood or large blood clots.",
      "See your doctor about concerning symptoms, even if you already have an IBS diagnosis.",
      "Tell your doctor about any family history of bowel cancer, ovarian cancer, colitis or Crohn's disease.",
      "Keep eating gluten until you have had the coeliac disease blood test.",
      "Try not to be embarrassed: the doctor or nurse will be used to talking about these symptoms.",
    ],
    tryThisWeek: [
      "Know when to call 111.",
      "Mention family history to your GP.",
      "Keep eating gluten before testing.",
    ],
    ask: "Do any of my symptoms need further tests, given my age and family history?",
    interactive: {
      kind: "signs",
      title: "Symptoms to get checked",
      intro: "Tick any you have noticed. These are not typical of IBS, and a doctor needs to look at them.",
      signs: ["Losing weight without trying", "Bleeding from your bottom", "Bloody diarrhoea", "Black or dark red poo", "A hard lump or swelling in your tummy", "Breathless, palpitations, paler skin", "Diarrhoea that wakes you at night", "A fever", "A bowel change lasting weeks"],
      after: "Ask for an urgent GP appointment or get help from NHS 111. Call 999 or go to A&E if you are bleeding non-stop from your bottom.",
      copyHeading: "Symptoms I need checked",
    },
    sources: [NHS_IBS_SYMPTOMS, GUTS_IBS, NHS_BOWEL_CANCER, INFORM_IBS, GUTS_BLOATING],
    quiz: {
      question: "You have IBS and notice blood in your poo. What should you do?",
      options: [{ text: "Get checked: an urgent GP appointment or NHS 111", right: true }, { text: "Assume it is your IBS" }, { text: "Wait for your next routine review" }],
      why: "If you have concerning symptoms, see your doctor as soon as possible, even if you have already been diagnosed with IBS.",
    },
  },
  {
    id: "ibs-types",
    kicker: "Types",
    question: "What are IBS-D, IBS-C and mixed IBS?",
    hook: "IBS is grouped by what your bowels mostly do: too loose, too slow, or both. The type helps decide which diet changes and medicines to try.",
    short: "About 1 in 3 people with IBS have IBS-C, with constipation, and another third have IBS-D, with diarrhoea. Others have both, called mixed IBS or IBS-M. The advice on fibre, food and medicines can differ depending on which you have.",
    sections: [
      {
        heading: "Three patterns",
        paragraphs: [
          "About 1 in 3 people have IBS-C, causing constipation symptoms. Another third of people have IBS-D, with diarrhoea symptoms.",
          "Others do not fall into a specific pattern. The term IBS-M is used for people with both constipation and diarrhoea symptoms.",
          "Symptoms can occur daily, or come and go over weeks or months. They can change over time and may not always be present.",
        ],
      },
      {
        heading: "IBS with diarrhoea",
        paragraphs: [
          "With diarrhoea, you may have watery poo and sometimes need to poo suddenly. Urgency is increased in diarrhoea-predominant IBS.",
          "In IBS with diarrhoea, the bowel contents pull fluid from the body as they pass through, so there is too much fluid in the poo to be absorbed. About 1 in 5 people with IBS-D symptoms may have bile acid diarrhoea, and about 1 in 10 may have microscopic colitis, and tests can diagnose both.",
        ],
      },
      {
        heading: "IBS with constipation",
        paragraphs: [
          "With constipation, you may strain when pooing and feel like you cannot empty your bowels fully. Constipation generally means poo that is type 1 or type 2 on the Bristol Stool Chart, which is often hard and difficult to pass.",
          "Guts UK says bloating is more common in people with IBS with constipation. If abdominal pain comes with constipation, the constipation may be due to IBS.",
        ],
      },
      {
        heading: "Why the type matters",
        paragraphs: [
          "Diet advice can vary depending on whether you have constipation, diarrhoea or both. Some people with diarrhoea find that reducing dietary fibre improves symptoms, while others with constipation may find a soluble fibre supplement helpful.",
          "Medicines are matched to the main symptom too. Laxatives can be used for IBS with constipation, loperamide for IBS with diarrhoea, and medicines that reduce bowel spasm for pain and wind.",
          "Doctors may show you the Bristol Stool Form Scale to help you describe your poo. Doses of laxatives or loperamide are adjusted with the aim of a soft, well-formed poo, which is type 4 on the scale.",
        ],
      },
    ],
    helps: [
      "To help prevent diarrhoea, cut down on high-fibre foods like wholegrains, nuts and seeds, and avoid the sweetener sorbitol.",
      "If you keep getting diarrhoea, drink plenty of water to avoid dehydration.",
      "To ease constipation, drink plenty of water and eat more soluble fibre, from foods such as oats, pulses, carrots, peeled potatoes and linseeds.",
      "Ask a pharmacist about loperamide for diarrhoea, or a laxative such as Fybogel for constipation.",
      "Increase fibre gradually, as a sudden increase may make symptoms worse.",
    ],
    tryThisWeek: [
      "Cut down high-fibre foods for diarrhoea.",
      "Add soluble fibre, like oats, for constipation.",
      "Drink plenty of water.",
    ],
    ask: "Which type of IBS do I have, and does that change which treatments I should try?",
    interactive: {
      kind: "flip-cards",
      title: "The three types, card by card",
      intro: "Turn each card to see what each type means, and what the sources say can help.",
      cards: [
        { id: "ibs-d", front: "IBS-D", when: "About 1 in 3 people with IBS", back: "Diarrhoea: watery poo and sometimes a sudden need to go. Some people find less fibre helps." },
        { id: "ibs-c", front: "IBS-C", when: "Another third of people", back: "Constipation: straining, and feeling you cannot empty your bowels. Soluble fibre may help." },
        { id: "ibs-m", front: "IBS-M", when: "Both patterns", back: "Both constipation and diarrhoea. Symptoms can change over time and may not always be present." },
        { id: "bristol", front: "Bristol Stool Chart", when: "Describing your poo", back: "Types 1 and 2 are hard poo. Treatment doses aim for type 4: soft and well formed." },
      ],
    },
    sources: [GUTS_IBS, NHS_IBS_SYMPTOMS, NICE_CG61, GUTS_DIARRHOEA, GUTS_CONSTIPATION, GUTS_BLOATING, NHS_IBS_DIET, INFORM_MANAGING],
    quiz: {
      question: "Roughly how many people with IBS have IBS-C?",
      options: [{ text: "About 1 in 3", right: true }, { text: "Almost everyone" }, { text: "About 1 in 100" }],
      why: "About 1 in 3 people have IBS-C, causing constipation symptoms.",
    },
  },
  {
    id: "ibs-triggers",
    kicker: "Triggers",
    question: "What triggers IBS flare-ups?",
    hook: "Flare-ups can come from nowhere. But alcohol, caffeine, certain foods, stress and antibiotics are common triggers, and a diary helps you spot your own.",
    short: "IBS flare-ups can happen for no obvious reason. Sometimes they have a trigger like alcohol, caffeine, spicy or fatty food, stress and anxiety, or regular antibiotic use. Over 8 in 10 people with IBS report food-related symptoms, and keeping a diary can help you find and avoid your own triggers.",
    sections: [
      {
        heading: "Flare-ups",
        paragraphs: [
          "There may be days when your symptoms are better and days when they are worse. These are called flare-ups, and they may be triggered by food or drink.",
          "IBS flare-ups can happen for no obvious reason. Sometimes they have a trigger like alcohol, caffeine, certain foods such as spicy or fatty food, stress and anxiety, or regular antibiotic use.",
        ],
      },
      {
        heading: "Food and drink",
        paragraphs: [
          "Over 8 in 10 people with IBS report food-related symptoms. Fatty foods have been shown to aggravate some IBS symptoms, especially diarrhoea, and alcohol can make IBS symptoms worse.",
          "Processed or reheated foods contain resistant starch, which can aggravate wind, bloating and diarrhoea. Sweeteners with names ending in the letters 'ol', like sorbitol, xylitol and mannitol, can cause diarrhoea.",
          "Foods that are hard to digest, like cabbage, broccoli, cauliflower, brussels sprouts, beans and onions, can add to bloating, cramps and farting. The foods that cause symptoms vary from person to person.",
        ],
      },
      {
        heading: "Stress and anxiety",
        paragraphs: [
          "When you feel stress or anxiety, your body releases stress hormones like adrenaline and cortisol. These change the activity of the gut, so movement can slow down or speed up, triggering diarrhoea, constipation, bloating or feeling sick.",
          "Common stress triggers for people with IBS include feeling an urgent need to poo, being in public with no toilet available, eating certain foods and getting ready to leave home.",
        ],
      },
      {
        heading: "Infections, antibiotics and other medicines",
        paragraphs: [
          "For some people a gut infection or antibiotic use can cause IBS to start. The NHS lists gastroenteritis among the things IBS has been linked to.",
          "Changes in the microbes normally found in the gut have also been linked to IBS. These changes may be due to things like diet and medicine side effects.",
          "At times, bowel symptoms can be caused by medicines you take for other conditions. It is worth asking your doctor whether a switch can be made, but do not stop taking your medicine without talking to your doctor first.",
        ],
      },
      {
        heading: "Hormones and women's health",
        paragraphs: [
          "Twice as many women as men are diagnosed with IBS. Guts UK says a condition called endometriosis is linked to IBS.",
          "Endometriosis can cause pain when you poo or pee, and its symptoms can be similar to IBS. See a GP if you think you might have it.",
        ],
      },
    ],
    helps: [
      "Keep a diary of what you eat and any symptoms you get, and try to avoid things that trigger your IBS.",
      "Do not drink more than 3 cups of tea, coffee or other caffeinated drinks a day.",
      "Do not drink lots of alcohol or fizzy drinks.",
      "Do not eat lots of fatty, spicy or processed foods.",
      "Check labels for sweeteners ending in 'ol', like sorbitol, and limit those products.",
      "Ask your doctor whether a medicine you take could be causing bowel symptoms, but do not stop it without talking to them first.",
    ],
    tryThisWeek: [
      "Keep a food and symptom diary.",
      "Keep to 3 caffeinated drinks a day.",
      "Check labels for sorbitol.",
    ],
    ask: "Could any of my other medicines be making my IBS worse?",
    interactive: {
      kind: "risk-check",
      title: "Your possible triggers",
      intro: "Tick any that seem to set off your symptoms. Some you can change, and some you cannot.",
      items: [
        { id: "alcohol", label: "Alcohol", note: "Alcohol can make IBS symptoms worse. NHS inform suggests no more than 14 units a week.", changeable: true },
        { id: "caffeine", label: "Caffeine", note: "Found in tea, coffee, energy drinks and cola. The NHS suggests no more than 3 caffeinated drinks a day.", changeable: true },
        { id: "fatty", label: "Fatty or spicy food", note: "Fatty foods have been shown to aggravate some IBS symptoms, especially diarrhoea.", changeable: true },
        { id: "sweeteners", label: "Sugar-free sweets and gum", note: "Sweeteners ending in 'ol', like sorbitol, can cause diarrhoea.", changeable: true },
        { id: "stress", label: "Stress and anxiety", note: "Stress hormones can speed up or slow down the gut. You can try to change how you respond to stress.", changeable: true },
        { id: "antibiotics", label: "Antibiotics", note: "Regular antibiotic use can trigger flare-ups, and antibiotic use can cause IBS to start.", changeable: false },
        { id: "infection", label: "A past gut infection", note: "Gastroenteritis has been linked to IBS, and a gut infection can cause it to start.", changeable: false },
        { id: "family", label: "A family history of IBS", note: "IBS tends to run in families, but no gene for IBS has been found.", changeable: false },
      ],
    },
    sources: [NHS_IBS_SYMPTOMS, GUTS_IBS, INFORM_MANAGING, NHS_IBS_DIET, NHS_PEPPERMINT_QUESTIONS, INFORM_MIND, NHS_IBS_WHAT, NHS_ENDOMETRIOSIS],
    quiz: {
      question: "Can IBS flare-ups happen with no trigger at all?",
      options: [{ text: "Yes, sometimes there is no obvious reason", right: true }, { text: "No, food always causes them" }, { text: "No, only stress causes them" }],
      why: "IBS flare-ups can happen for no obvious reason.",
    },
  },
  {
    id: "ibs-first-steps",
    kicker: "Diet",
    question: "Which simple changes to meals, fibre and drinks help IBS?",
    hook: "Regular meals, slower eating, the right fibre for your symptoms and fewer caffeinated drinks. Simple changes are sometimes all that is needed.",
    short: "There is no single diet that works for everyone with IBS, but simple changes often help. Eat regular meals and take your time, drink 8 to 10 drinks of fluid a day, have no more than 3 caffeinated drinks and 3 portions of fresh fruit a day, and adjust fibre to your symptoms. If these do not help, a GP can refer you to a dietitian.",
    sections: [
      {
        heading: "Regular, unhurried meals",
        paragraphs: [
          "There is no single diet or medicine that works for everyone with IBS. But dietary changes can often help, and sometimes simple changes are all that are needed.",
          "Try not to delay or skip meals, or eat late at night. Eat three regular meals a day, take time over them and chew your food well. Smaller meals may ease symptoms.",
        ],
      },
      {
        heading: "Fluids, caffeine and alcohol",
        paragraphs: [
          "Try to drink at least 8 to 10 drinks of fluid a day, such as water or non-caffeinated drinks like herbal tea. Do not drink more than 3 cups of tea, coffee or any other caffeinated drink a day.",
          "Do not drink lots of alcohol or fizzy drinks. The British Dietetic Association suggests no more than two units of alcohol a day, with at least two alcohol-free days a week.",
        ],
      },
      {
        heading: "Fruit, fat and processed food",
        paragraphs: [
          "Do not eat more than 3 portions of fresh fruit a day, where a portion is 80g. Do not eat lots of fatty, spicy or processed foods.",
          "Processed or reheated foods, such as ready meals, oven chips and part-baked breads, contain resistant starch, which can be difficult to digest. Making your own meals from fresh foods wherever possible helps limit it.",
        ],
      },
      {
        heading: "Getting fibre right",
        paragraphs: [
          "People with IBS are often advised to change the amount of fibre in their diet depending on their main symptoms. A lower fibre diet can help diarrhoea, and a higher fibre intake can help constipation.",
          "Increase fibre gradually, as a sudden increase may make symptoms worse, and drink enough fluid with it. Wheat bran has been found to make IBS symptoms worse, so it should be avoided.",
          "To ease bloating, cramps and farting, eat oats such as porridge regularly, and up to 1 tablespoon of linseeds a day.",
        ],
      },
      {
        heading: "If it is not enough",
        paragraphs: [
          "Make one change at a time so you can see what has helped, and give your bowels time to adjust to any changes. Keeping a food and symptom diary while you make changes shows what has helped.",
          "See a GP if diet changes and pharmacy medicines are not helping, or you need to avoid lots of different foods to control your symptoms. They may refer you to a dietitian.",
        ],
      },
    ],
    helps: [
      "Do not delay or skip meals, and do not eat too quickly.",
      "Try to drink at least 8 to 10 drinks of fluid a day, such as water or herbal tea.",
      "Do not drink more than 3 cups of tea, coffee or other caffeinated drinks a day.",
      "Do not eat more than 3 portions of fresh fruit a day (a portion is 80g).",
      "Eat oats regularly, and up to 1 tablespoon of linseeds a day, to ease bloating, cramps and farting.",
      "Get plenty of exercise, and try to find ways to relax.",
    ],
    tryThisWeek: [
      "Eat regular meals, slowly.",
      "Drink 8 to 10 drinks a day.",
      "Keep to 3 caffeinated drinks.",
    ],
    ask: "Should I be eating more fibre or less, for my symptoms?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "lunch",
          situation: "You are busy and tempted to skip lunch.",
          options: [{ text: "Have a regular meal, even a small one", best: true }, { text: "Skip it and eat a big meal late at night" }],
          why: "Try not to delay or skip meals, or eat late at night. Smaller meals may ease symptoms.",
        },
        {
          id: "coffee",
          situation: "It is mid-afternoon and you have already had 3 coffees.",
          options: [{ text: "Switch to water or herbal tea", best: true }, { text: "Have another coffee" }],
          why: "Do not drink more than 3 cups of tea, coffee or any other caffeinated drink a day.",
        },
        {
          id: "fibre",
          situation: "You have constipation and want to eat more fibre.",
          options: [{ text: "Add oats or linseeds gradually", best: true }, { text: "Add lots of wheat bran at once" }],
          why: "Increase fibre gradually, as a sudden increase may make symptoms worse. Wheat bran has been found to make IBS symptoms worse.",
        },
        {
          id: "fruit",
          situation: "You fancy a fourth piece of fruit today.",
          options: [{ text: "Save it for tomorrow", best: true }, { text: "Go ahead, fruit is always fine" }],
          why: "Do not eat more than 3 portions of fresh fruit a day, where a portion is 80g.",
        },
      ],
    },
    sources: [NHS_IBS_DIET, BDA_IBS, INFORM_MANAGING],
    quiz: {
      question: "How many caffeinated drinks a day does the NHS suggest as a limit with IBS?",
      options: [{ text: "No more than 3", right: true }, { text: "No more than 6" }, { text: "There is no limit" }],
      why: "Do not drink more than 3 cups of tea, coffee or any other caffeinated drink a day.",
    },
  },
  {
    id: "ibs-low-fodmap",
    kicker: "Diet",
    question: "What is the low FODMAP diet, and why do it with a dietitian?",
    hook: "A three-stage diet that finds which carbohydrates set off your symptoms. It helps around half to two thirds of people, and it is not meant to be done alone.",
    short: "The low FODMAP diet cuts down short-chain carbohydrates that the gut does not easily break down, found in some fruit and vegetables, milk and wheat products. It works for around half to two thirds of people with IBS. It is a second-line diet with three stages, and it should only be followed with the support of a trained dietitian.",
    sections: [
      {
        heading: "What FODMAPs are",
        paragraphs: [
          "FODMAP stands for fermentable oligosaccharides, disaccharides, monosaccharides and polyols. These are short-chain carbohydrates that can be a cause of symptoms for some people.",
          "They are found in foods that are not easily broken down by the gut, such as some types of fruit and vegetables, milk and wheat products. Pulses such as chickpeas, lentils and beans, and sugar-free sweets and gum containing sorbitol or mannitol, contain them too.",
        ],
      },
      {
        heading: "When it is used",
        paragraphs: [
          "The low FODMAP diet is a second-line diet treatment for IBS. Dietitians consider it when simpler diet advice has not worked.",
          "A GP may refer you to an NHS dietitian if general changes to your diet and lifestyle have not helped. If you want to see a dietitian privately, make sure they are registered with the British Dietetic Association.",
        ],
      },
      {
        heading: "Three stages",
        paragraphs: [
          "The diet includes three stages. In stage one, FODMAPs are reduced all at once, and symptoms should then reduce to a manageable level.",
          "Once symptoms improve, foods are reintroduced to find out which ones cause problems. This is an important learning stage of the diet.",
          "The person then follows a reduced FODMAP diet that includes the FODMAP foods they tolerate. This matters, because most FODMAP foods are prebiotic and support the growth of beneficial gut bacteria.",
        ],
      },
      {
        heading: "Why not on your own",
        paragraphs: [
          "Only state registered dietitians are trained to advise on exclusion diets. Do not try them on your own, and avoid using low FODMAP internet sites and printed diet sheets without support.",
          "Being overly restricted can risk malnutrition. If you have, or had, an eating disorder, exclusion diets may not be the best treatment for you, and there are other options to try instead.",
          "Home tests that claim to diagnose food intolerances are not recommended, as there is limited evidence they give accurate results.",
        ],
      },
      {
        heading: "How well it works",
        paragraphs: [
          "The low FODMAP diet works for around half to two thirds of people with IBS. It can reduce bloating and distension in IBS, but there is no evidence yet that it works for other digestive diseases.",
          "There is little evidence that a gluten-free diet helps with IBS symptoms. For people who find milk a problem, lactose-free cow's milk is suitable in IBS.",
        ],
      },
    ],
    helps: [
      "Try simple diet changes first: you may find that major changes are not needed.",
      "Ask your GP to refer you to an NHS dietitian if general diet and lifestyle changes have not helped.",
      "If you see a dietitian privately, make sure they are registered with the British Dietetic Association.",
      "Do not try exclusion diets on your own; only do so if a dietitian recommends them.",
      "Do not cut foods out of your diet without the advice of a GP or dietitian.",
      "Watch the NHS dietitians' webinars on the low FODMAP diet on the Patient Webinars website.",
    ],
    tryThisWeek: [
      "Ask your GP about a dietitian.",
      "Check a private dietitian is registered.",
      "Do not start exclusion diets alone.",
    ],
    ask: "Can I be referred to a dietitian trained in the low FODMAP diet?",
    interactive: {
      kind: "timeline",
      title: "The low FODMAP diet, step by step",
      steps: [
        { id: "before", when: "Before you start", title: "Simple changes first", points: ["Try the first-line diet and lifestyle advice.", "If it has not helped, ask your GP about a dietitian."] },
        { id: "reduce", when: "Stage one", title: "Reduce FODMAPs", points: ["FODMAPs are reduced all at once.", "Symptoms should then reduce to a manageable level."] },
        { id: "reintroduce", when: "Stage two", title: "Bring foods back", points: ["Foods are reintroduced once symptoms improve.", "This shows which ones are problematic."] },
        { id: "personal", when: "Stage three", title: "Your own diet", points: ["Follow a reduced FODMAP diet.", "Keep the FODMAP foods you tolerate: they matter for gut health."] },
      ],
    },
    sources: [GUTS_BLOATING, GUTS_IBS, NHS_IBS_HELP, GUTS_FOOD_TESTS, NHS_FOOD_INTOLERANCE, BDA_IBS],
    quiz: {
      question: "Who should guide you through the low FODMAP diet?",
      options: [{ text: "A trained, registered dietitian", right: true }, { text: "A printed diet sheet from the internet" }, { text: "A home food intolerance test" }],
      why: "Only state registered dietitians are trained to advise on exclusion diets.",
    },
  },
  {
    id: "ibs-medicines",
    kicker: "Treatment",
    question: "Which medicines help IBS: antispasmodics, laxatives, loperamide and the rest?",
    hook: "Medicines are chosen by your main symptom. A pharmacist can help with the first ones, and a GP can prescribe others if they are not enough.",
    short: "Medicines for IBS treat its symptoms. Antispasmodics such as mebeverine and peppermint oil ease cramps and spasms, laxatives help constipation, and loperamide helps diarrhoea. If these do not help, a GP may prescribe a low dose of a medicine such as amitriptyline, which in IBS improves signalling between the brain and the gut.",
    sections: [
      {
        heading: "Matched to your symptoms",
        paragraphs: [
          "Simple lifestyle changes, such as diet and exercise, should be the first approach. If they are not effective, medicines can be tried to improve symptoms.",
          "IBS is an individual condition, so if one medicine is not helpful, another could be tried. A pharmacist can tell you about medicines that may help.",
        ],
      },
      {
        heading: "For cramps, bloating and wind",
        paragraphs: [
          "Medicines that reduce bowel spasm, such as mebeverine, alverine and hyoscine butylbromide, can be used for abdominal pain and wind. The NHS suggests asking a pharmacist about medicines like Buscopan or peppermint oil.",
          "Mebeverine is a muscle relaxant that eases spasms in the stomach muscles. It usually comes as tablets taken 3 times a day or capsules taken 2 times a day. Try to take it 20 minutes before a meal.",
          "Peppermint oil capsules relax the muscle in your bowel, easing cramps, bloating and farting. They start to work within a few hours but could take up to 1 to 2 weeks to work fully. Side effects include heartburn and indigestion.",
        ],
      },
      {
        heading: "For constipation",
        paragraphs: [
          "IBS with constipation can be treated with laxatives, which you can get on prescription or buy over the counter. If you are buying laxatives, it is usually best to try a bulk-forming laxative, such as Fybogel, first.",
          "Guidelines recommend avoiding lactulose, as it might make wind worse. If laxatives from your GP do not work, a gastroenterologist can prescribe other options such as linaclotide.",
          "Drink plenty of fluids with bulk-forming or osmotic laxatives. If you bought laxatives without a prescription, stop when your constipation improves and do not take them for longer than 7 days.",
        ],
      },
      {
        heading: "For diarrhoea",
        paragraphs: [
          "Loperamide slows down food as it goes through your gut, so your body draws in more water and your poo gets firmer. It usually starts to work within 1 hour.",
          "For adults with IBS, the usual starting dose is 2 capsules or tablets, then 1 after each runny poo, up to 6 in 24 hours if you bought it. Do not take it for more than 48 hours without talking to a doctor.",
          "Only take the recommended amount, as too much loperamide can cause serious heart problems. Products with IBS in the name are no different from others.",
        ],
      },
      {
        heading: "Stronger medicines from a GP",
        paragraphs: [
          "If pharmacy medicines are not helping, a GP may prescribe a stronger medicine, such as amitriptyline or citalopram. These are antidepressants, but they can also help ease IBS symptoms.",
          "The doses of amitriptyline used in IBS are generally much lower than those used for depression, and in IBS it improves signalling between the brain and the gut. These medicines may take a few weeks to start working and can cause side effects.",
          "Do not stop taking a medicine without talking to your doctor first. You can ask your doctor for a review of your IBS so that newer treatments can be considered, but it is not provided automatically.",
        ],
      },
    ],
    helps: [
      "Ask a pharmacist about medicines like Buscopan, peppermint oil, loperamide or Fybogel.",
      "Take loperamide only at the recommended dose, and not for more than 48 hours without talking to a doctor.",
      "Do not take peppermint oil you have bought for longer than 2 weeks without checking with a doctor.",
      "Leave a gap of at least 2 hours between peppermint oil and an indigestion medicine.",
      "Do not stop taking your medicine without talking to your doctor first.",
      "Ask your doctor for a review of your IBS, so newer treatments can be considered.",
    ],
    tryThisWeek: [
      "Ask a pharmacist which medicine suits.",
      "Check the loperamide dose limit.",
      "Ask your GP for an IBS review.",
    ],
    ask: "Which medicine suits my type of IBS, and when should we review it?",
    interactive: {
      kind: "flip-cards",
      title: "IBS medicines, card by card",
      intro: "Turn each card to see what each medicine is for. Check your own plan with a pharmacist or GP.",
      cards: [
        { id: "mebeverine", front: "Mebeverine", when: "Cramps, spasms and pain", back: "A muscle relaxant for stomach spasms. Try to take it 20 minutes before a meal." },
        { id: "peppermint", front: "Peppermint oil", when: "Cramps, bloating and farting", back: "Relaxes the bowel muscle. Can take 1 to 2 weeks to work fully, and may cause heartburn." },
        { id: "bulk", front: "Bulk-forming laxatives", when: "Constipation", back: "Such as Fybogel, usually best to try first. Drink plenty of fluids. Up to 3 days to work." },
        { id: "loperamide", front: "Loperamide", when: "Diarrhoea", back: "Slows the gut so poo is firmer. Usually works within 1 hour. Never take more than recommended." },
        { id: "amitriptyline", front: "Low-dose amitriptyline", when: "If other medicines have not helped", back: "From a GP, at a much lower dose than for depression. Improves signalling between brain and gut." },
        { id: "linaclotide", front: "Linaclotide", when: "If laxatives have not worked", back: "Prescribed by a gastroenterologist for IBS with constipation." },
      ],
    },
    sources: [GUTS_IBS, NHS_IBS_DIET, NHS_MEBEVERINE, NHS_PEPPERMINT_ABOUT, NHS_LAXATIVES, NHS_LOPERAMIDE_ABOUT, NHS_LOPERAMIDE_HOW, NHS_IBS_HELP],
    quiz: {
      question: "Why are low doses of amitriptyline used in IBS?",
      options: [{ text: "To improve signalling between the brain and the gut", right: true }, { text: "To treat depression" }, { text: "To kill bacteria in the gut" }],
      why: "The doses of amitriptyline used in IBS are generally much lower than those used for depression, and in IBS it improves signalling between the brain and the gut.",
    },
  },
  {
    id: "ibs-gut-therapy",
    kicker: "Therapy",
    question: "How can gut-directed CBT and hypnotherapy help IBS?",
    hook: "Talking and relaxation therapies aimed at the gut can ease symptoms when medicines have not, and some can be done by phone or online.",
    short: "Gut-directed hypnotherapy and IBS-specific cognitive behavioural therapy (CBT) are brain-gut therapies that can reduce IBS symptoms. They are usually considered when other treatments have not helped. A GP can refer you, and you can also refer yourself to NHS talking therapies for help coping with a long-term condition such as IBS.",
    sections: [
      {
        heading: "Why therapy for a gut condition",
        paragraphs: [
          "Psychological factors play an important role in IBS, because of the link between the brain and the gut. CBT can help if stress or anxiety is triggering your symptoms, and it can also help you cope with your condition better.",
          "Gut-specific behavioural therapies are among the only treatments shown to work when symptoms have not responded to medical treatments. Unfortunately, these services can be difficult to access, with long waiting times.",
        ],
      },
      {
        heading: "IBS-specific CBT",
        paragraphs: [
          "IBS-specific CBT is based on the idea that thoughts, behaviours, emotions and bodily functions all interact. It can reduce IBS symptoms by teaching you to relax the body.",
          "NHS inform says CBT can significantly reduce how often and how severe symptoms like constipation, diarrhoea and bloating are.",
          "In CBT, you talk about situations you find difficult and work out other ways of approaching them, such as doing activities you have been avoiding. You will usually have between 5 and 15 sessions, and practise what you learn between them.",
        ],
      },
      {
        heading: "Gut-directed hypnotherapy",
        paragraphs: [
          "Gut-directed hypnotherapy has evidence that it can help treat IBS. It aims to bring on a deep relaxation, to teach skills for managing IBS yourself.",
          "The NHS may offer hypnotherapy for people with IBS if treatment has not worked. If you go privately, therapists should be members of the British Association of Clinical and Academic Hypnotherapists or the National Council for Hypnotherapy, and there may be a cost.",
          "Hypnotherapy may not be safe for you if you have schizophrenia, a history of psychosis, or epilepsy.",
        ],
      },
      {
        heading: "By phone, online or in a group",
        paragraphs: [
          "Online platforms and group sessions have been shown to work for both gut-specific CBT and gut-directed hypnotherapy. Several apps now offer self-directed versions too, and if you are considering one, ask the organisation for its research evidence in IBS.",
          "In a trial of 558 people with significant IBS symptoms, those who had IBS-specific CBT by phone or online were more likely to report significant improvement in the severity of their symptoms, and in the impact on their work and life, after 12 months.",
        ],
      },
      {
        heading: "How to get it",
        paragraphs: [
          "If you have had IBS for a long time and other treatments are not helping, a GP may refer you for a talking therapy, such as CBT.",
          "You can also refer yourself to NHS talking therapies without a GP. They can help with coping with a long-term health condition such as IBS. You need to be registered with a GP and aged 18 or over, or 16 or over in some areas.",
        ],
      },
    ],
    helps: [
      "Ask your GP whether gut-directed CBT or hypnotherapy is available to you.",
      "Refer yourself to NHS talking therapies if you are registered with a GP and aged 18 or over (16 or over in some areas).",
      "Practise what you learn between CBT sessions, as this is important for CBT to work.",
      "If you see a hypnotherapist privately, check they belong to the British Association of Clinical and Academic Hypnotherapists or the National Council for Hypnotherapy.",
      "If you are considering an app, ask the organisation for its research evidence that it works for people with IBS.",
    ],
    tryThisWeek: [
      "Ask your GP about gut-directed therapy.",
      "Look up NHS talking therapies.",
      "Check a therapist's membership.",
    ],
    ask: "Is gut-directed CBT or hypnotherapy available to me, and how long is the wait?",
    interactive: {
      kind: "flip-cards",
      title: "Brain-gut therapies, card by card",
      intro: "Turn each card to see what each therapy involves.",
      cards: [
        { id: "cbt", front: "IBS-specific CBT", when: "If stress or worry triggers symptoms", back: "Links thoughts, behaviours, emotions and the body. Teaches you to relax the body to reduce symptoms." },
        { id: "hypnotherapy", front: "Gut-directed hypnotherapy", when: "If other treatment has not worked", back: "Deep relaxation that teaches skills to manage IBS yourself. May be offered on the NHS." },
        { id: "guided", front: "Guided self-help", when: "Often offered first", back: "A workbook or online course with a therapist's help, based on CBT principles." },
        { id: "remote", front: "Phone, online or group", when: "At a time that suits you", back: "Shown to work for both gut-specific CBT and gut-directed hypnotherapy." },
        { id: "apps", front: "Apps", when: "Self-directed", back: "May help some people. Ask the organisation for its research evidence in IBS." },
      ],
    },
    sources: [INFORM_MIND, NHS_IBS_HELP, GUTS_IBS, NHS_CBT, NHS_COMPLEMENTARY, GUTS_CBT_TRIAL, NHS_TALKING],
    quiz: {
      question: "Can you refer yourself to NHS talking therapies for help coping with IBS?",
      options: [{ text: "Yes, if you are registered with a GP and old enough", right: true }, { text: "No, only a gastroenterologist can refer you" }, { text: "No, it is only for depression" }],
      why: "You can also refer yourself to NHS talking therapies without a GP. They can help with coping with a long-term health condition such as IBS.",
    },
  },
  {
    id: "ibs-out-and-about",
    kicker: "Daily life",
    question: "How can I manage toilets, travel and eating out with IBS?",
    hook: "A Can't Wait card, a key to locked toilets and a little planning can make it easier to go out, and to keep going out.",
    short: "Worry about finding a toilet can make the world feel smaller with IBS. A free Can't Wait card from Guts UK and a key for locked public toilets can help. Planning journeys, choosing gentler food when eating out, and slowly returning to places you have been avoiding can all help too.",
    sections: [
      {
        heading: "When going out feels hard",
        paragraphs: [
          "Being in public with no toilet available, feeling an urgent need to poo and getting ready to leave home can all trigger the stress response in people with IBS. This can lead to avoiding certain places, foods, situations or activities.",
          "Avoiding things often works in the short term, but over time it can make things worse. Many people with IBS find that their world has become smaller.",
        ],
      },
      {
        heading: "Help with toilets",
        paragraphs: [
          "Guts UK's Can't Wait cards are small, wallet-sized cards for people with a digestive condition who might need a toilet urgently. You can show one to people in public spaces, and Guts UK posts them free to people in the UK with a diagnosed digestive condition.",
          "The cards do not guarantee urgent access to a toilet, but they can help. The NHS says you can buy a key from the Disability Rights UK shop to help you access public toilets, and Guts UK says a RADAR key opens some locked toilets.",
        ],
      },
      {
        heading: "Planning a trip",
        paragraphs: [
          "Planning ahead for stressful days or events can really help, such as planning long journeys or making a list of things to remember.",
          "Loperamide can help with diarrhoea, but do not take it to prevent diarrhoea unless your doctor tells you to. If you keep getting diarrhoea, drink plenty of water to avoid dehydration.",
        ],
      },
      {
        heading: "Eating out",
        paragraphs: [
          "Avoid lots of fatty, spicy or processed food, and do not eat too quickly. Eating small portions slowly can help with bloating.",
          "Do not drink lots of alcohol or fizzy drinks. Sweeteners found in some sugar-free drinks, sweets, chewing gum and mints, such as sorbitol, can cause diarrhoea.",
          "If you take peppermint oil capsules, it is best to take them around 30 to 60 minutes before food.",
        ],
      },
      {
        heading: "Getting back out there",
        paragraphs: [
          "If you have been avoiding places or foods because of IBS, it might help to slowly reintroduce yourself to them. Build up how much or how often you do something in a way that feels comfortable and manageable.",
          "Breathing exercises can help settle the body's fight or flight response in the moment of stress. CBT can also include doing activities you have been avoiding.",
        ],
      },
    ],
    helps: [
      "Order a free Can't Wait card from Guts UK if you have a diagnosed digestive condition.",
      "Buy a key from the Disability Rights UK shop to help you access public toilets.",
      "Plan long journeys, and make a list of things to remember.",
      "When eating out, avoid lots of fatty, spicy or processed food, and do not eat too quickly.",
      "Do not take loperamide to prevent diarrhoea unless your doctor tells you to.",
      "Slowly return to places you have been avoiding, at a pace that feels manageable.",
    ],
    tryThisWeek: [
      "Order a Can't Wait card.",
      "Plan your next long journey.",
      "Revisit one place you avoid.",
    ],
    ask: "Would loperamide or another medicine help me on days I travel?",
    interactive: {
      kind: "scenarios",
      title: "Out and about",
      scenarios: [
        {
          id: "menu",
          situation: "You are choosing from a restaurant menu.",
          options: [{ text: "A simple dish, eaten slowly", best: true }, { text: "A large, rich, spicy dish, eaten fast" }],
          why: "Avoid lots of fatty, spicy or processed food, and do not eat too quickly. Eating small portions slowly can help with bloating.",
        },
        {
          id: "queue",
          situation: "You need a toilet urgently and there is a long queue.",
          options: [{ text: "Show your Can't Wait card", best: true }, { text: "Wait in silence and hope" }],
          why: "Can't Wait cards can be shown to people in public spaces. They do not guarantee access to a toilet, but they can help.",
        },
        {
          id: "journey",
          situation: "You have a long journey tomorrow.",
          options: [{ text: "Plan the journey and make a list", best: true }, { text: "Take loperamide just in case" }],
          why: "Planning long journeys can really help. Do not take loperamide to prevent diarrhoea unless your doctor tells you to.",
        },
        {
          id: "avoiding",
          situation: "You have stopped going to the cinema because of IBS.",
          options: [{ text: "Build back up, a little at a time", best: true }, { text: "Keep avoiding it" }],
          why: "Avoiding things often works in the short term, but over time it can make things worse. Slowly reintroducing yourself might help.",
        },
      ],
    },
    sources: [INFORM_MIND, GUTS_CANT_WAIT, NHS_IBS_DIET, GUTS_IBS, NHS_STRESS, NHS_LOPERAMIDE_QUESTIONS, INFORM_MANAGING, NHS_PEPPERMINT_QUESTIONS, NHS_CBT],
    quiz: {
      question: "Should you take loperamide before a trip to prevent diarrhoea?",
      options: [{ text: "Only if your doctor tells you to", right: true }, { text: "Yes, always" }, { text: "Yes, a double dose to be safe" }],
      why: "Do not take loperamide to prevent diarrhoea unless your doctor tells you to.",
    },
  },
  {
    id: "ibs-stress",
    kicker: "Mind and gut",
    question: "How does stress affect IBS, and what helps?",
    hook: "Stress hormones speed up or slow down the gut. You cannot remove stress from life, but you can change how you respond to it.",
    short: "Stress and anxiety can trigger IBS symptoms, because stress hormones change how the gut moves. Living with IBS can also bring low mood and stress. Breathing exercises, regular activity, time with people and talking therapies can all help, and support is there if you are struggling.",
    sections: [
      {
        heading: "How stress reaches the gut",
        paragraphs: [
          "Everyone has a link between their brain and gut, which is why you can feel butterflies in your stomach. In some people with IBS, this gut-brain connection becomes more sensitive to change.",
          "When you feel stress or anxiety, your body releases stress hormones like adrenaline and cortisol. Movement in the gut can slow down or speed up, triggering diarrhoea, constipation, bloating or feeling sick.",
        ],
      },
      {
        heading: "It works both ways",
        paragraphs: [
          "The symptoms of IBS can have a big impact on day-to-day life, and some people have low mood and stress as a result. Feeling anxious or a change in your mood can worsen IBS symptoms.",
          "This can become a cycle of symptoms, pain, stress and avoidance, which can be hard to stop.",
        ],
      },
      {
        heading: "Managing stress, not removing it",
        paragraphs: [
          "Instead of trying to remove stress altogether, you can focus on managing how much stress you meet each day, and try to change the way you respond to it. Identify your causes of stress, and see if some are within your control.",
          "Relaxation techniques, like breathing exercises, can settle the fight or flight response in the moment. Time with friends and family, activities you enjoy, and regular exercise like yoga, walking, running or swimming can help too.",
        ],
      },
      {
        heading: "A breathing exercise",
        paragraphs: [
          "The NHS describes a calming breathing exercise that takes just a few minutes and can be done anywhere. Let your breath flow as deep down into your belly as is comfortable, without forcing it.",
          "Breathe in through your nose and out through your mouth, gently and regularly, counting from 1 to 5 if it helps. Repeat for at least 5 minutes, and you will get the most benefit if you do it regularly.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "See a GP if you are struggling to cope with stress, or if low mood, stress or anxiety is affecting your daily life or your ability to manage your IBS. You can also refer yourself to NHS talking therapies.",
          "If you need someone to talk to, you can contact Samaritans by phone on 116 123. If you need help urgently but it is not an emergency, call NHS 111 or ask for an urgent GP appointment. Call 999 or go to A&E if you or someone you know needs immediate help.",
        ],
      },
    ],
    helps: [
      "Try the NHS calming breathing exercise for at least 5 minutes, as part of your daily routine.",
      "Plan ahead for stressful days, and set small targets you can easily achieve.",
      "Take regular exercise like yoga, walking, running or swimming.",
      "Talk about your feelings to a friend, family member or health professional.",
      "Try not to use alcohol, cigarettes, gambling or drugs to relieve stress.",
      "See a GP, or refer yourself to NHS talking therapies, if you are struggling to cope with stress.",
    ],
    tryThisWeek: [
      "Do a 5-minute breathing exercise.",
      "Plan ahead for a stressful day.",
      "Talk to someone you trust.",
    ],
    ask: "Stress seems to set off my IBS: could a talking therapy help me?",
    interactive: {
      kind: "timeline",
      title: "A calming breathing exercise",
      steps: [
        { id: "settle", when: "First", title: "Get comfortable", points: ["Sit, stand or lie down, feet roughly hip-width apart.", "Loosen any clothes that restrict your breathing."] },
        { id: "in", when: "Breathe in", title: "Into your belly", points: ["Let your breath flow deep into your belly, without forcing it.", "Breathe in through your nose, counting 1 to 5 if it helps."] },
        { id: "out", when: "Breathe out", title: "Gently", points: ["Let it flow out through your mouth.", "Count from 1 to 5 again, if you find this helpful."] },
        { id: "repeat", when: "Keep going", title: "At least 5 minutes", points: ["Breathe gently and regularly.", "You may not be able to reach 5 at first."] },
        { id: "daily", when: "Every day", title: "Make it a habit", points: ["You get the most benefit if you do it regularly.", "It can be done anywhere."] },
      ],
    },
    sources: [INFORM_MIND, INFORM_IBS, NHS_BREATHING, NHS_STRESS],
    quiz: {
      question: "What can the stress response do to the gut?",
      options: [{ text: "Speed up or slow down its movement", right: true }, { text: "Nothing at all" }, { text: "Only change your appetite" }],
      why: "Movement in the gut can slow down or speed up, triggering diarrhoea, constipation, bloating or feeling sick.",
    },
  },
  {
    id: "ibs-work",
    kicker: "Work",
    question: "How can I manage IBS at work, and what support is there?",
    hook: "Employers must make reasonable adjustments for health conditions that put you at a disadvantage, and Access to Work can help pay for extra support.",
    short: "IBS can affect working life, and some people take days off because of it. Employers must make reasonable adjustments so workers with health conditions are not substantially disadvantaged, such as doing things another way. Access to Work can give a grant for practical support, and you do not need a diagnosis to apply.",
    sections: [
      {
        heading: "IBS and working life",
        paragraphs: [
          "IBS symptoms can significantly affect quality of life and can force people to take days off work. Getting ready to leave home, feeling an urgent need to poo and being somewhere with no toilet available can all trigger stress.",
          "In a large trial, people who had IBS-specific CBT by phone or online were more likely to report significant improvement in the impact of IBS on their work and life after 12 months.",
        ],
      },
      {
        heading: "Reasonable adjustments",
        paragraphs: [
          "Employers must make reasonable adjustments to make sure workers with disabilities, or physical or mental health conditions, are not substantially disadvantaged when doing their jobs.",
          "Adjustments include doing things another way, letting someone work somewhere else, changing their equipment, and a phased return to work with flexible hours or part-time working.",
          "You can get advice on reasonable adjustments from the Disability Employment Adviser at your local Jobcentre Plus office.",
        ],
      },
      {
        heading: "The Equality Act",
        paragraphs: [
          "You are disabled under the Equality Act 2010 if you have a physical or mental impairment that has a substantial and long-term negative effect on your ability to do normal daily activities. Long-term means 12 months or more.",
          "There are special rules about recurring or fluctuating conditions. The Equality Act 2010 does not apply to Northern Ireland.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition. It can give a grant to help pay for practical support with your work, and support to manage your mental health at work.",
          "You need a condition that means you need support to do your job or get to and from work. You also need to be 16 or over and in paid work in England, Scotland or Wales. You do not need to be diagnosed with a condition to apply.",
          "An Access to Work grant will not affect your other benefits, and you will not have to pay it back. It will not pay for reasonable adjustments, which your employer must legally make.",
        ],
      },
      {
        heading: "Day to day",
        paragraphs: [
          "Do not delay or skip meals, drink enough fluids, and keep caffeinated drinks to no more than 3 a day. Working smarter, by prioritising and accepting you will not have time for everything, can ease stress.",
          "In public spaces, a Can't Wait card can be shown to let people know you need urgent access to a toilet.",
        ],
      },
    ],
    helps: [
      "Ask your employer about reasonable adjustments, such as doing things another way, or a phased return with flexible hours.",
      "Get advice from the Disability Employment Adviser at your local Jobcentre Plus office.",
      "Apply for Access to Work if you need extra help, and call the Access to Work helpline on 0800 121 7479 if you are not sure you are eligible.",
      "Do not delay or skip meals during the working day.",
      "Carry a Can't Wait card in case you need a toilet urgently.",
      "Prioritise your work, and leave the least important tasks to last.",
    ],
    tryThisWeek: [
      "List adjustments that might help.",
      "Check Access to Work eligibility.",
      "Keep regular meals at work.",
    ],
    ask: "How can I explain my IBS to my employer, and which adjustments might help me?",
    interactive: {
      kind: "scenarios",
      title: "Working with IBS",
      scenarios: [
        {
          id: "hours",
          situation: "Your symptoms make early starts very hard.",
          options: [{ text: "Ask your employer about adjustments", best: true }, { text: "Say nothing and struggle on" }],
          why: "Reasonable adjustments include doing things another way, and a phased return to work with flexible hours or part-time working.",
        },
        {
          id: "grant",
          situation: "Extra practical support would help you stay in work.",
          options: [{ text: "Look into Access to Work", best: true }, { text: "Assume you must pay for it yourself" }],
          why: "Access to Work can give a grant to help pay for practical support with your work. You will not have to pay it back.",
        },
        {
          id: "unsure",
          situation: "You are not sure you would qualify for Access to Work.",
          options: [{ text: "Check eligibility or call the helpline", best: true }, { text: "Do not apply" }],
          why: "You do not need to be diagnosed with a condition to apply. If you are not sure you are eligible, call the Access to Work helpline.",
        },
        {
          id: "lunch",
          situation: "A busy day means skipping lunch.",
          options: [{ text: "Take a short, regular meal break", best: true }, { text: "Skip it and eat late" }],
          why: "Do not delay or skip meals.",
        },
      ],
    },
    sources: [GUTS_CBT_TRIAL, INFORM_MIND, GOV_ADJUSTMENTS, GOV_DISABILITY, GOV_ATW, GOV_ATW_ELIGIBILITY, NHS_IBS_DIET, NHS_STRESS_BUSTERS, GUTS_CANT_WAIT],
    quiz: {
      question: "Do you need a diagnosis to apply for Access to Work?",
      options: [{ text: "No, you can apply without one", right: true }, { text: "Yes, a formal diagnosis" }, { text: "Yes, and a consultant's letter" }],
      why: "You do not need to be diagnosed with a condition to apply.",
    },
  },
  {
    id: "ibs-diary",
    kicker: "Self-help",
    question: "How do I keep a useful food and symptom diary?",
    hook: "Writing down what you eat and how you feel helps you and your doctor see patterns, and shows which changes are actually helping.",
    short: "The NHS suggests keeping a diary of what you eat and any symptoms you get, to help you avoid things that trigger your IBS. Note your symptoms, when they happen and how often, and make one change at a time so you can see what has helped. Take your notes to your GP or dietitian.",
    sections: [
      {
        heading: "Why a diary helps",
        paragraphs: [
          "Keep a diary of what you eat and any symptoms you get, and try to avoid things that trigger your IBS. Keeping a food and symptom diary while you make changes helps you see what has helped.",
          "A dietitian may also ask you to keep a food and symptoms diary, to help work out what may be triggering your symptoms.",
        ],
      },
      {
        heading: "What to write down",
        paragraphs: [
          "A GP will want to know what symptoms you have, if they come and go, how often you get them, when you get them, such as after eating certain foods, and how long you have had them. Writing these details down before an appointment helps you remember them.",
          "Common triggers include alcohol, caffeine, spicy or fatty food, stress and anxiety, and regular antibiotic use. Flare-ups can also happen for no obvious reason.",
        ],
      },
      {
        heading: "Describing your poo",
        paragraphs: [
          "The Bristol Stool Chart is a way of describing poo. Types 1 and 2 are often hard and difficult to pass, and generally mean constipation.",
          "Doctors may show you the Bristol Stool Form Scale to help you describe your bowel habit. When doses of laxatives or loperamide are adjusted, the aim is a soft, well-formed poo, which is type 4.",
          "In healthy people, opening the bowels varies between three times a day and three times a week.",
        ],
      },
      {
        heading: "One change at a time",
        paragraphs: [
          "Make one change at a time so you can see what has helped, and give your bowels time to adjust to any changes.",
          "If you try a probiotic, the NHS suggests trying it for a month, and the British Dietetic Association suggests one product at a time for at least four weeks. Guts UK says that if you find no improvement, stop using it.",
        ],
      },
      {
        heading: "Using it with your GP or dietitian",
        paragraphs: [
          "See a GP if diet changes and pharmacy medicines are not helping, or if you need to avoid lots of different foods to control your symptoms. They may refer you to a dietitian.",
          "Do not cut foods out of your diet without the advice of a GP or dietitian. You could miss out on certain vitamins and minerals.",
        ],
      },
    ],
    helps: [
      "Write down what you eat and any symptoms you get.",
      "Note when symptoms happen, how often, and whether they come and go.",
      "Make one change at a time so you can see what has helped.",
      "Try any probiotic one product at a time, for at least four weeks.",
      "Write down your symptoms before a GP appointment to help you remember them.",
      "Do not cut foods out of your diet without the advice of a GP or dietitian.",
    ],
    tryThisWeek: [
      "Write down meals and symptoms.",
      "Change one thing at a time.",
      "Take your notes to the GP.",
    ],
    ask: "Looking at my diary, which triggers or patterns do you notice?",
    interactive: {
      kind: "signs",
      title: "What I have noticed",
      intro: "Tick what applies to you. The ones you tick make a list to take to your GP or dietitian.",
      signs: ["Pain or cramps after eating", "Pain that eases after a poo", "Bloating", "Diarrhoea or urgency", "Constipation or straining", "Mucus in my poo", "Symptoms after caffeine or alcohol", "Symptoms after fatty or spicy food", "Symptoms at stressful times", "Diarrhoea that wakes me at night"],
      after: "Take your list to your GP or dietitian. Diarrhoea that wakes you from sleep is not typical of IBS and needs checking.",
      copyHeading: "My symptom notes",
    },
    sources: [NHS_IBS_DIET, BDA_IBS, NHS_FOOD_INTOLERANCE, NHS_IBS_DIAGNOSIS, NHS_IBS_SYMPTOMS, GUTS_CONSTIPATION, NICE_CG61, GUTS_IBS],
    quiz: {
      question: "Why make one change at a time?",
      options: [{ text: "So you can see what has helped", right: true }, { text: "Because changes never work together" }, { text: "So you do not need a dietitian" }],
      why: "Make one change at a time so you can see what has helped, and give your bowels time to adjust to any changes.",
    },
  },
];
