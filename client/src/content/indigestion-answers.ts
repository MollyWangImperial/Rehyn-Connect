import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Indigestion page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and
// Guts UK (its indigestion, functional dyspepsia and H. pylori leaflets), with the NICE guideline on
// dyspepsia (CG184) for what doctors are advised to offer. H. pylori is written "H pylori" inside the
// answers, as the NHS writes it. General information only; it never replaces what a person's own GP,
// pharmacist or midwife tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const gutsUk = (label: string, path: string): LearnSource => ({ label: `Guts UK: ${label}`, url: `https://gutscharity.org.uk/advice-and-information/${path}` });

const NHS_INDIGESTION = nhs("Indigestion", "conditions/indigestion/");
const NHS_PREGNANCY = nhs("Indigestion and heartburn in pregnancy", "pregnancy/common-symptoms/indigestion-and-heartburn/");
const NHS_PREGNANCY_PAIN = nhs("Stomach pain in pregnancy", "pregnancy/common-symptoms/stomach-pain/");
const NHS_HEARTBURN = nhs("Heartburn and acid reflux", "conditions/heartburn-and-acid-reflux/");
const NHS_ULCER = nhs("Stomach ulcer", "conditions/stomach-ulcer/");
const NHS_VOMITING_BLOOD = nhs("Vomiting blood", "symptoms/vomiting-blood/");
const NHS_CHEST_PAIN = nhs("Chest pain", "symptoms/chest-pain/");
const NHS_STOMACH_CANCER = nhs("Symptoms of stomach cancer", "conditions/stomach-cancer/symptoms/");
const NHS_ANTACIDS = nhs("Antacids", "medicines/antacids/");
const NHS_GAVISCON_ABOUT = nhs("About Gaviscon", "medicines/gaviscon/about-gaviscon/");
const NHS_GAVISCON_QUESTIONS = nhs("Common questions about Gaviscon", "medicines/gaviscon/common-questions-about-gaviscon/");
const NHS_GAVISCON_PREGNANCY = nhs("Pregnancy, breastfeeding and fertility while taking Gaviscon", "medicines/gaviscon/pregnancy-breastfeeding-and-fertility-while-taking-gaviscon/");
const NHS_OMEPRAZOLE = nhs("Omeprazole", "medicines/omeprazole/");
const NHS_LANSOPRAZOLE_ABOUT = nhs("About lansoprazole", "medicines/lansoprazole/about-lansoprazole/");
const NHS_LANSOPRAZOLE_HOW = nhs("How and when to take lansoprazole", "medicines/lansoprazole/how-and-when-to-take-lansoprazole/");
const NHS_LANSOPRAZOLE_QUESTIONS = nhs("Common questions about lansoprazole", "medicines/lansoprazole/common-questions-about-lansoprazole/");
const NHS_NSAIDS = nhs("NSAIDs", "medicines/nsaids/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_ASPIRIN = nhs("Aspirin", "medicines/aspirin/");
const NHS_NAPROXEN = nhs("Naproxen", "medicines/naproxen/");
const NHS_STRESS = nhs("Stress", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/stress/");
const NHS_BREATHING = nhs("Breathing exercises for stress", "mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/");

const GUTS_INDIGESTION = gutsUk("Indigestion", "symptoms/indigestion/");
const GUTS_FD = gutsUk("Functional dyspepsia", "conditions/functional-dyspepsia/");
const GUTS_HP = gutsUk("Helicobacter pylori (H. pylori)", "conditions/helicobacter-pylori/");
const GUTS_GUT_BRAIN: LearnSource = { label: "Guts UK: What is the gut-brain connection?", url: "https://gutscharity.org.uk/2024/07/what-is-the-gut-brain-connection-activity/" };

const NICE_CG184: LearnSource = { label: "NICE: GORD and dyspepsia in adults, recommendations (CG184)", url: "https://www.nice.org.uk/guidance/cg184/chapter/Recommendations" };

export const indigestionAnswers: LearnArticle[] = [
  {
    id: "ind-what-it-is",
    kicker: "Understanding",
    question: "What is indigestion?",
    hook: "A symptom, not a disease. Nearly everyone gets it at some point, and it is rarely a sign of anything serious.",
    short: "Indigestion, or dyspepsia, means pain or discomfort in the upper tummy or lower chest, usually after eating or drinking. It is so common that nearly everyone will have it at some point. Usually it's not a sign of anything more serious and you can treat it yourself.",
    sections: [
      {
        heading: "A symptom, not a disease",
        paragraphs: [
          "Indigestion, also called dyspepsia, means pain or discomfort in the upper abdomen or lower chest. Symptoms typically happen after you eat or drink.",
          "Indigestion is a symptom, not a disease, and it is so common that nearly everyone will experience it at some point. But it's rare for it to be due to a serious condition. Usually, it's not a sign of anything more serious and you can treat it yourself.",
        ],
      },
      {
        heading: "How it feels",
        paragraphs: [
          "Indigestion can be felt in different ways. After eating or drinking you can have heartburn, which is a painful burning feeling in the chest, feel full and bloated, feel sick, burp and fart, or bring up food or bitter-tasting fluids into your mouth.",
          "Most people have their own symptom pattern. It ranges from mild discomfort in the upper abdomen to severe pain. Others feel a general fullness, heaviness or bloating and discomfort in the upper abdomen after a meal.",
        ],
      },
      {
        heading: "What it is not",
        paragraphs: [
          "Stomach ache or back pain are usually not symptoms of indigestion. If you have those you might be constipated.",
          "Guts UK describes heartburn separately, as a burning sensation or pain behind the breastbone that is linked to reflux.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "Indigestion seems to affect 1 or 2 in 5 people at any time. Around 1 in 4 people with symptoms visit their GP for advice.",
          "Many people with indigestion find that their symptoms improve, either through self-help or after their GP has treated them. A small number do have longer-term symptoms and may need prolonged treatment.",
        ],
      },
    ],
    helps: [
      "There's usually no need to see a GP about indigestion: there are some things you can do at home.",
      "Ask a pharmacist, who can recommend medicines to ease the burning feeling or pain.",
      "See a GP if you keep getting indigestion or are in severe pain.",
      "If your indigestion does not improve with lifestyle changes or over-the-counter remedies, see your doctor.",
    ],
    tryThisWeek: [
      "Try some changes at home.",
      "Ask a pharmacist for advice.",
      "See a GP if it keeps coming back.",
    ],
    ask: "How can I best manage my indigestion myself?",
    interactive: {
      kind: "flip-cards",
      title: "The symptoms, card by card",
      intro: "Turn each card to see how each symptom can feel.",
      cards: [
        { id: "heartburn", front: "Heartburn", when: "Often after eating", back: "A painful burning feeling in the chest." },
        { id: "full", front: "Feeling full and bloated", when: "After a meal", back: "A general fullness, heaviness or bloating and discomfort in the upper abdomen." },
        { id: "sick", front: "Feeling sick", when: "Sometimes with retching", back: "Indigestion can happen alone or with feeling sick, retching or burping." },
        { id: "burping", front: "Burping and farting", when: "After eating or drinking", back: "One of the ways indigestion can be felt." },
        { id: "regurgitation", front: "Bringing food up", when: "Into your mouth", back: "Bringing up food or bitter-tasting fluids into your mouth, called regurgitation." },
        { id: "not", front: "Stomach ache or back pain", when: "Usually not indigestion", back: "These are usually not symptoms of indigestion. If you have those you might be constipated." },
      ],
    },
    sources: [NHS_INDIGESTION, GUTS_INDIGESTION],
    quiz: {
      question: "Is indigestion usually a sign of something serious?",
      options: [{ text: "No, it's rare for it to be due to a serious condition", right: true }, { text: "Yes, it always needs a hospital test" }, { text: "Only if it happens after spicy food" }],
      why: "Indigestion is a symptom, not a disease, and it is so common that nearly everyone will experience it at some point. But it's rare for it to be due to a serious condition.",
    },
  },
  {
    id: "ind-causes",
    kicker: "Causes",
    question: "What causes indigestion?",
    hook: "Often acid irritating the lining, set off by food, weight, smoking, stress or some medicines. Sometimes no single cause is found.",
    short: "Indigestion is often caused by acid from your stomach irritating your stomach lining or throat. Certain food and drink, being overweight, smoking, pregnancy, stress and some medicines can cause it or make it worse. The most common cause is functional dyspepsia; ulcers come second, and serious causes are rare.",
    sections: [
      {
        heading: "Acid and the lining",
        paragraphs: [
          "Indigestion is often caused by acid from your stomach irritating your stomach lining or throat. This is called acid reflux.",
          "Almost all of us will get indigestion now and then, often after a heavy, spicy or fatty meal. Symptoms can occur if we rush our food, or if we overeat or overdrink.",
        ],
      },
      {
        heading: "What can make it worse",
        paragraphs: [
          "It can be caused or made worse by certain food and drink, such as coffee, tomatoes, alcohol, chocolate and fatty or spicy foods. Being overweight, smoking, pregnancy, and stress and anxiety can all play a part.",
          "Some medicines, including anti-inflammatory painkillers like ibuprofen, can cause it. So can a hiatus hernia, which is when part of your stomach moves up into your chest.",
        ],
      },
      {
        heading: "The most common cause",
        paragraphs: [
          "Functional dyspepsia is the most common cause of indigestion. It is diagnosed when no structural cause for symptoms is found. Eight out of ten people with indigestion have functional dyspepsia.",
        ],
      },
      {
        heading: "Ulcers and H pylori",
        paragraphs: [
          "About 8 in 100 people with indigestion have ulcers, and they are the second most common cause. Today, ulcers occur more often in people who take anti-inflammatory medicines such as aspirin, ibuprofen or naproxen, and they are also more common in people who smoke.",
          "H pylori is a bug that lives in the stomach. It always causes an inflammation of the stomach, and even when there is no ulcer, this inflammation can be the reason for indigestion.",
        ],
      },
      {
        heading: "Rarer causes",
        paragraphs: [
          "Less often, indigestion can be a sign of something more serious such as stomach cancer. Guts UK lists gallstones, diseases of the pancreas and, very rarely, stomach cancer.",
          "Most often, these conditions come with other symptoms as well, such as a change in bowel habits, weight loss you did not intend or general tiredness. But most people with indigestion don't have these severe diseases.",
        ],
      },
    ],
    helps: [
      "Do not have food or drink that triggers your symptoms.",
      "Don't rush meals or eat too much fatty or spicy food.",
      "Try to find ways to relax, as stress and anxiety can make it worse.",
      "Ask your GP whether you should be tested for H pylori infection.",
      "Do not stop taking any of your medicines without speaking to your doctor first.",
    ],
    tryThisWeek: [
      "Skip food that triggers it.",
      "Slow down at meals.",
      "Ask about an H pylori test.",
    ],
    ask: "What do you think is causing my indigestion?",
    interactive: {
      kind: "risk-check",
      title: "What might be setting it off?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "food", label: "Certain food and drink", note: "Coffee, tomatoes, alcohol, chocolate and fatty or spicy foods can cause it or make it worse.", changeable: true },
        { id: "rushing", label: "Rushing or overeating", note: "Symptoms can occur if we rush our food, or if we overeat or overdrink.", changeable: true },
        { id: "weight", label: "Being overweight", note: "Being overweight can cause indigestion or make it worse.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Smoking can cause it, and ulcers are also more common in people who smoke.", changeable: true },
        { id: "stress", label: "Stress and anxiety", note: "Stress and anxiety can cause indigestion or make it worse.", changeable: true },
        { id: "painkillers", label: "Anti-inflammatory painkillers", note: "Ibuprofen and similar medicines can cause it. Do not stop a medicine without speaking to your doctor first.", changeable: true },
        { id: "hernia", label: "A hiatus hernia", note: "When part of your stomach moves up into your chest.", changeable: false },
      ],
    },
    sources: [NHS_INDIGESTION, GUTS_INDIGESTION, GUTS_HP, NHS_HEARTBURN],
    quiz: {
      question: "What is the most common cause of indigestion?",
      options: [{ text: "Functional dyspepsia", right: true }, { text: "Stomach cancer" }, { text: "Gallstones" }],
      why: "Functional dyspepsia is the most common cause of indigestion.",
    },
  },
  {
    id: "ind-functional",
    kicker: "Understanding",
    question: "What is functional dyspepsia?",
    hook: "Real symptoms, normal tests. The gut and the brain are talking too loudly, and that can be calmed.",
    short: "Functional dyspepsia is the diagnosis given when no disease is found to explain indigestion symptoms. It does not mean the symptoms are not real: the stomach's nerves are oversensitive, and there is a communication issue between the brain and the gut. There is no cure yet, but most therapies can bring symptoms down to a manageable level.",
    sections: [
      {
        heading: "Real symptoms, normal tests",
        paragraphs: [
          "When a disease cannot be found to explain symptoms, functional dyspepsia is the diagnosis given. This does not mean that the person's symptoms are not real, but rather that there is a communication issue between the brain and the gut.",
          "In functional dyspepsia, the lining of the gut will look normal on a gastroscopy test. Other test results will also be normal.",
        ],
      },
      {
        heading: "How it feels",
        paragraphs: [
          "Symptoms include upper belly pain that ranges from mild to severe and might feel like burning, feeling sick, burping, bloating, and an uncomfortable feeling of being full after eating regular-sized meals.",
          "Some people have pain soon after eating, which is called post-prandial distress syndrome. Others have symptoms unrelated to food, which may be called epigastric pain syndrome. In 1 in 3 people with functional dyspepsia, the two overlap.",
          "Being sick is not normally a symptom of functional dyspepsia, and your doctor may need to do more tests if this is a symptom.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "There is no known single cause. The gut and brain are linked, and they constantly communicate with one another through our nerves. Symptoms happen when the gut nerves become more sensitive to normal function and the stomach is not emptying properly.",
          "The stomach nerves get too sensitive to acidic foods or natural fluids, like bile, and this sensitivity causes pain. Changes to gut bacteria after a gut infection, stress, lifestyle factors and the emotional response to symptoms can all contribute.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "Functional dyspepsia is ultimately diagnosed in 8 out of 10 cases of indigestion. Around the world, 7 in every 100 people have it, and in the UK more women than men live with it.",
          "IBS affects roughly 1 in 3 people who have functional dyspepsia. Testing for coeliac disease should also be done in people with functional dyspepsia and IBS symptoms.",
        ],
      },
      {
        heading: "Treatment and the outlook",
        paragraphs: [
          "There is currently no cure, but most therapies can help to reduce symptoms to a manageable level. Only a small number of people still have severe symptoms after treatment.",
          "Medicines that may be used include antacids, acid-reducing tablets called proton pump inhibitors, H2 antagonists, and antidepressants at a very low dose, which calm the muscles of the gut and reduce pain sensation. At this low dose they work at the level of the gut, not on the brain.",
          "Cognitive behavioural therapy, gut-directed hypnotherapy or interpersonal psychodynamic psychotherapy may also be worth considering. Most people's symptoms become better over time and with treatment.",
        ],
      },
    ],
    helps: [
      "Ask your GP for an H pylori test, as it can occasionally cause symptoms.",
      "If you suspect a food triggers symptoms, ask your doctor for a referral to a dietitian rather than cutting out many foods.",
      "Eat smaller, more frequent meals.",
      "If symptoms happen when you lie down at night, avoid eating three hours before bedtime.",
      "Tell your doctor if you are feeling low or hopeless, especially because stress might make your symptoms worse.",
      "If first treatments do not work, ask to be referred to a psychologist or a gut doctor (gastroenterologist).",
    ],
    tryThisWeek: [
      "Ask about an H pylori test.",
      "Try smaller, more frequent meals.",
      "Tell your doctor how you feel.",
    ],
    ask: "Could I be referred to a dietitian or a specialist for other treatments?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments, card by card",
      intro: "Turn each card to see what each treatment does.",
      cards: [
        { id: "antacids", front: "Antacids", when: "Tablets or liquids from a pharmacy", back: "Help to neutralise stomach acid, and some have added substances to lessen excess gas." },
        { id: "ppi", front: "Proton pump inhibitors", when: "Such as omeprazole or lansoprazole", back: "Stop acid production in the stomach. The lowest dose that treats symptoms should be considered." },
        { id: "h2", front: "H2 antagonists", when: "Such as cimetidine and famotidine", back: "Reduce the amount of acid made in the stomach, working differently to proton pump inhibitors." },
        { id: "neuromodulators", front: "Low-dose antidepressants", when: "Also called neuromodulators", back: "Used at a very low dose to calm the gut muscles and reduce pain. They work at the level of the gut." },
        { id: "therapy", front: "Psychological therapies", when: "Through a referral", back: "CBT, gut-directed hypnotherapy or interpersonal psychodynamic psychotherapy may be useful to consider." },
        { id: "dietitian", front: "A dietitian", when: "If you suspect a food", back: "Advice on diet without cutting out so much that it could lead to malnourishment." },
      ],
    },
    sources: [GUTS_FD, GUTS_INDIGESTION, NICE_CG184],
    quiz: {
      question: "Does functional dyspepsia mean the symptoms are not real?",
      options: [{ text: "No, it is a communication issue between the brain and the gut", right: true }, { text: "Yes, it means nothing is wrong" }, { text: "Yes, it means the symptoms are imagined" }],
      why: "This does not mean that the person's symptoms are not real, but rather that there is a communication issue between the brain and the gut.",
    },
  },
  {
    id: "ind-checks",
    kicker: "When to get help",
    question: "Which indigestion symptoms need checking?",
    hook: "Most indigestion is harmless. A few signs mean see a GP soon, and some mean call 999.",
    short: "See a GP if you keep getting indigestion, are in severe pain, lose weight without meaning to, have difficulty swallowing or keep being sick. Call 999 or go to A&E if you are vomiting blood, your poo is black, sticky and very smelly, or you have severe tummy pain. Sudden chest pain that does not go away, even if it feels like indigestion, needs 999 straight away.",
    sections: [
      {
        heading: "When to see a GP",
        paragraphs: [
          "There's usually no need to see a GP about indigestion. But see a GP if you keep getting indigestion, are in severe pain, have lost a lot of weight without meaning to, have difficulty swallowing, or keep being sick.",
          "Also see a GP if you have iron deficiency anaemia or feel like you have a lump in your stomach. These symptoms can be a sign of something more serious.",
        ],
      },
      {
        heading: "Before trying pharmacy remedies",
        paragraphs: [
          "Guts UK says to see your doctor first, before trying over-the-counter remedies, if you keep being sick, have problems or pain with swallowing, food getting stuck in your gullet, weight loss you did not intend, or a lump in your upper belly.",
          "The same applies to a new loss of energy or tiredness with shortness of breath, which can mean a low blood count or low iron, and to symptoms that are new when you are 55 years old or older.",
          "Also seek medical help if symptoms start in middle age or later, or if a family member has had stomach or gullet cancer.",
        ],
      },
      {
        heading: "Call 999 or go to A&E",
        paragraphs: [
          "Call 999 or go to A&E if you're vomiting bright red blood or your vomit looks like ground coffee, or your poo has blood in it, or is black, sticky and very smelly.",
          "Also call 999 or go to A&E if you have severe tummy pain, it's painful to touch your tummy, or you have chest pain that started suddenly. Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
          "You should always get medical help if you are vomiting blood. If you have stopped vomiting blood and had no other symptoms, ask for an urgent GP appointment or call 111.",
        ],
      },
      {
        heading: "Chest pain or indigestion?",
        paragraphs: [
          "Call 999 if you get sudden pain or discomfort in your chest that does not go away. The pain can feel like squeezing or pressure inside your chest, burning or indigestion.",
          "Call 999 too if pain spreads to your arms, neck, jaw, stomach or back, or you have chest pain and you feel sweaty, sick, light headed or short of breath. You could be having a heart attack.",
        ],
      },
      {
        heading: "Most checks are reassuring",
        paragraphs: [
          "These symptoms are very common and can be caused by many different conditions. Having them does not definitely mean you have stomach cancer, but it's important to get them checked, because finding cancer early makes it more treatable.",
          "Your GP, after listening to your symptoms and examining you, is likely to reassure you. For most people's symptoms, there is no serious cause.",
        ],
      },
    ],
    helps: [
      "See a GP if you keep getting indigestion or have any of the warning symptoms.",
      "Get advice from 111 now if you're being sick for more than 2 days.",
      "Call 999 or go to A&E if you're vomiting blood or your poo is black, sticky and very smelly.",
      "Call 999 straight away for sudden chest pain or discomfort that does not go away.",
      "Do not drive to A&E: ask someone to drive you or call 999 for an ambulance, and bring any medicines you take.",
    ],
    tryThisWeek: [
      "Know the signs to tell a GP.",
      "Know when to call 999.",
      "Never drive yourself to A&E.",
    ],
    ask: "Which symptoms mean I should come back sooner?",
    interactive: {
      kind: "signs",
      title: "Signs to tell a GP about",
      intro: "Tick any you have. They make a list to take to your GP.",
      signs: [
        "Indigestion that keeps coming back",
        "Severe pain",
        "Losing weight without meaning to",
        "Difficulty or pain swallowing",
        "Food getting stuck in my gullet",
        "Keep being sick",
        "A lump in my stomach",
        "Iron deficiency anaemia",
        "New tiredness and shortness of breath",
        "New symptoms, and I am 55 or older",
      ],
      after: "If you are vomiting blood, your poo is black, sticky and very smelly, you have severe tummy pain or sudden chest pain, call 999 or go to A&E.",
      copyHeading: "Indigestion symptoms to tell my GP about",
    },
    sources: [NHS_INDIGESTION, GUTS_INDIGESTION, NHS_ULCER, NHS_VOMITING_BLOOD, NHS_CHEST_PAIN, NHS_STOMACH_CANCER],
    quiz: {
      question: "What should you do if your poo is black, sticky and very smelly?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Take an antacid and wait" }, { text: "Mention it at a routine check next month" }],
      why: "Call 999 or go to A&E if you're vomiting bright red blood or your vomit looks like ground coffee, or your poo has blood in it, or is black, sticky and very smelly.",
    },
  },
  {
    id: "ind-self-help",
    kicker: "Treatment",
    question: "What everyday changes help indigestion?",
    hook: "Drinks, meals, bedtime, weight and smoking. Small changes ease it, and many people manage it this way.",
    short: "Cutting down on tea, coffee, cola or alcohol, not eating 3 to 4 hours before bed, avoiding rich, spicy or fatty foods and not smoking can all help. Losing weight if you're overweight and raising your head and shoulders in bed can help too. Some people control their symptoms this way; others need medicines as well.",
    sections: [
      {
        heading: "Start at home",
        paragraphs: [
          "There's usually no need to see a GP about indigestion. There are some things you can do at home.",
          "Treatment usually starts by looking for fixable causes, such as testing for H pylori infection. If the test is negative, or treating the infection did not help, simple lifestyle changes are advised.",
        ],
      },
      {
        heading: "What you eat and drink",
        paragraphs: [
          "Cut down on tea, coffee, cola or alcohol, and do not have rich, spicy or fatty foods.",
          "Avoid overeating or drinking too many caffeine-containing drinks. Don't rush meals, drink alcohol within recommended guidelines, and eat a healthy diet with an adequate daily fluid intake.",
          "It may also help to avoid acidic foods like tomatoes, citrus fruits, salad dressings and fizzy drinks.",
        ],
      },
      {
        heading: "At night",
        paragraphs: [
          "Do not eat 3 to 4 hours before going to bed. Raise your head and shoulders up when in bed, which can stop stomach acid coming up while you sleep.",
          "Using wood, bricks or books to raise the head of your bed by around 10 to 20cm may help. But do not try to get the same effect with additional pillows, as this can increase pressure on your belly and make symptoms worse.",
        ],
      },
      {
        heading: "Weight, smoking and stress",
        paragraphs: [
          "Lose weight if you're overweight, and do not smoke.",
          "Do not wear clothes that are tight around your waist, and try to find ways to relax.",
          "NICE advises doctors to offer simple advice on healthy eating, weight reduction and stopping smoking, and to help people avoid the things they link with their indigestion where possible.",
        ],
      },
      {
        heading: "When changes are hard",
        paragraphs: [
          "Lifestyle changes can be hard to achieve. If you are struggling, ask your GP about local services to help with making changes.",
          "Some people with indigestion can control their symptoms this way, whereas others might need medicines for further support.",
        ],
      },
    ],
    helps: [
      "Cut down on tea, coffee, cola or alcohol.",
      "Do not eat 3 to 4 hours before going to bed.",
      "Raise your head and shoulders up when in bed.",
      "Eat smaller, more frequent meals.",
      "Lose weight if you're overweight, and do not smoke.",
      "If you are struggling with changes, ask your GP about local services to help.",
    ],
    tryThisWeek: [
      "Cut down on coffee or cola.",
      "Stop eating 3 to 4 hours before bed.",
      "Try smaller, more frequent meals.",
    ],
    ask: "Which changes would make the most difference for me?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "late",
          situation: "You usually have your main meal just before bed.",
          options: [{ text: "Eat it 3 to 4 hours before bed instead", best: true }, { text: "Eat it and lie straight down" }],
          why: "Do not eat 3 to 4 hours before going to bed.",
        },
        {
          id: "pillows",
          situation: "You want to sleep with your head higher.",
          options: [{ text: "Raise the head of the bed by 10 to 20cm", best: true }, { text: "Stack up extra pillows" }],
          why: "Additional pillows can increase pressure on your belly and make your symptoms worse.",
        },
        {
          id: "rushed",
          situation: "You have ten minutes to eat lunch.",
          options: [{ text: "Eat a smaller amount without rushing", best: true }, { text: "Eat a big meal as fast as you can" }],
          why: "Symptoms can occur if we rush our food, or if we overeat or overdrink.",
        },
        {
          id: "struggling",
          situation: "The changes are hard to keep up.",
          options: [{ text: "Ask your GP about local services", best: true }, { text: "Give up on them" }],
          why: "Lifestyle changes can be hard to achieve. If you are struggling, ask your GP about local services to help with making changes.",
        },
      ],
    },
    sources: [NHS_INDIGESTION, GUTS_INDIGESTION, NHS_HEARTBURN, NICE_CG184, NHS_LANSOPRAZOLE_QUESTIONS],
    quiz: {
      question: "How long before bed should you stop eating?",
      options: [{ text: "3 to 4 hours", right: true }, { text: "10 minutes" }, { text: "There is no need to stop" }],
      why: "Do not eat 3 to 4 hours before going to bed.",
    },
  },
  {
    id: "ind-pharmacy",
    kicker: "Treatment",
    question: "Which pharmacy medicines help indigestion?",
    hook: "Antacids, alginates and low-strength acid-reducing tablets: quick relief, but not a long-term fix.",
    short: "A pharmacist can recommend medicines such as antacids, alginates and proton pump inhibitors to ease the burning feeling or pain. Antacids give quick relief for a few hours but do not treat the underlying cause. If you need them regularly, or they do not help, see a GP.",
    sections: [
      {
        heading: "Ask a pharmacist",
        paragraphs: [
          "A pharmacist can recommend medicines to ease the burning feeling or pain that can come with indigestion. These include antacids, alginates and proton pump inhibitors.",
          "Some of these treatments neutralise stomach acid, and others reduce acid production in your stomach. With many products on the market, discuss all options with your pharmacist.",
          "NICE says community pharmacists should offer help with lifestyle changes, over-the-counter medicines and prescribed medicines, and advice about when to see a GP.",
        ],
      },
      {
        heading: "Antacids",
        paragraphs: [
          "Antacids are medicines that neutralise the acid in your stomach to relieve indigestion and heartburn. They come as a liquid or chewable tablets and can be bought from pharmacies and shops without a prescription.",
          "They can quickly relieve your symptoms for a few hours. But they do not treat the underlying cause and long-term use is not recommended. Speak to a GP if you find you need to take antacids regularly.",
        ],
      },
      {
        heading: "Alginates such as Gaviscon",
        paragraphs: [
          "Gaviscon works by forming a protective layer on top of the contents of your stomach. This helps to stop stomach acid moving up into your food pipe, and it also contains an antacid.",
          "You should start to feel better soon after taking a dose, and the effect of 1 dose should last for around 4 hours. If you buy it without a prescription, do not take it for longer than 7 days without checking with a doctor.",
        ],
      },
      {
        heading: "Taking them well",
        paragraphs: [
          "For most people, the best time to take antacids is with or soon after meals, and just before going to bed. The effect may also last longer if taken with food.",
          "Antacids can affect how well other medicines work, so do not take other medicines within 2 to 4 hours of taking an antacid. Alcohol can irritate your stomach and make your symptoms worse.",
          "Antacids do not usually have many side effects if taken only occasionally. Sometimes they cause diarrhoea or constipation, wind, stomach cramps or feeling sick, which should pass once you stop.",
        ],
      },
      {
        heading: "Acid-reducing tablets from a pharmacy",
        paragraphs: [
          "You can buy some types of omeprazole from pharmacies and shops, but most types are only available with a prescription. The tablets you can buy without a prescription are only for adults over 18 years old.",
          "Do not take omeprazole for longer than 2 weeks if you bought it without a prescription. If simple medicines from the pharmacist don't work, your GP can prescribe stronger medicines.",
        ],
      },
    ],
    helps: [
      "Speak to a pharmacist first if you're pregnant or breastfeeding, or taking other medicines.",
      "Take antacids with or soon after meals, and just before going to bed.",
      "Do not take other medicines within 2 to 4 hours of taking an antacid.",
      "Do not take Gaviscon you bought for longer than 7 days without checking with a doctor.",
      "Speak to a GP if you find you need to take antacids regularly.",
    ],
    tryThisWeek: [
      "Ask a pharmacist what to try.",
      "Take antacids after meals.",
      "Space antacids from other medicines.",
    ],
    ask: "Which indigestion medicine suits me, and how long should I take it?",
    interactive: {
      kind: "flip-cards",
      title: "Pharmacy medicines, card by card",
      intro: "Turn each card to see what each medicine does.",
      cards: [
        { id: "antacid", front: "Antacids", when: "Liquid or chewable tablets", back: "Neutralise stomach acid and quickly relieve symptoms for a few hours, but do not treat the cause." },
        { id: "alginate", front: "Alginates such as Gaviscon", when: "Usually after meals and at bedtime", back: "Form a protective layer on top of the stomach contents, stopping acid moving up into your food pipe." },
        { id: "omeprazole", front: "Pharmacy omeprazole", when: "Adults over 18", back: "Reduces the amount of acid your stomach makes. No longer than 2 weeks without a prescription." },
        { id: "gp", front: "Stronger medicines", when: "If pharmacy medicines do not work", back: "Your GP can prescribe stronger anti-acid or acid-suppressing medicines." },
      ],
    },
    sources: [NHS_INDIGESTION, NHS_ANTACIDS, NHS_GAVISCON_ABOUT, NHS_GAVISCON_QUESTIONS, GUTS_INDIGESTION, NHS_OMEPRAZOLE, NICE_CG184],
    quiz: {
      question: "Do antacids treat the cause of indigestion?",
      options: [{ text: "No, they relieve symptoms for a few hours", right: true }, { text: "Yes, they cure it" }, { text: "Yes, if taken every day for a year" }],
      why: "But they do not treat the underlying cause and long-term use is not recommended.",
    },
  },
  {
    id: "ind-h-pylori",
    kicker: "Tests",
    question: "What is the H pylori test, and what happens if it is positive?",
    hook: "A common stomach bug, a simple breath or poo test, and a course of tablets if it is there.",
    short: "H pylori is a common bacteria that lives in the stomach lining, and testing for it is usually the first step for indigestion. The test is a simple breath, poo or blood test, and acid-reducing tablets need to be stopped two weeks beforehand. If it is found, a course of tablets including antibiotics usually clears it.",
    sections: [
      {
        heading: "A common stomach bug",
        paragraphs: [
          "H pylori are a group of bacteria that live in the sticky mucus that lines the stomach. Up to 2 in 5 people in the UK have it, and it does not cause any problems for 8 to 9 out of 10 people.",
          "It always causes inflammation of the stomach lining, called gastritis, and it can cause ulcers. People almost always catch it in childhood, usually within families, and it is becoming less common in the UK.",
        ],
      },
      {
        heading: "Why test for it",
        paragraphs: [
          "In the first instance, your GP can request an H pylori poo test. If you have the infection, they will prescribe treatment, and they should arrange a follow-up test to make sure it has cleared.",
          "NICE recommends offering H pylori test and treat to people with dyspepsia. H pylori should always be treated when it is present, even if the doctor can't be sure it's causing your symptoms.",
        ],
      },
      {
        heading: "The tests",
        paragraphs: [
          "For a breath test, you are given a drink containing a substance called urea, and a sample of your breath is taken before and a short time after. Stool tests look for H pylori proteins in a small sample of poo, and are as accurate as breath tests.",
          "A GP may arrange a breath test, a test of a sample of your poo, or a blood test. H pylori can also be tested for during an endoscopy, from a very small piece of the stomach lining.",
        ],
      },
      {
        heading: "Getting an accurate result",
        paragraphs: [
          "Proton pump inhibitors such as omeprazole and lansoprazole should not have been taken in the last two weeks before testing. A recent course of antibiotics, within a month of the test, can also make it inaccurate.",
          "Your GP will tell you which medicines you need to stop for the test. If you think a medicine might affect the result, discuss it with your doctor.",
        ],
      },
      {
        heading: "Treatment and afterwards",
        paragraphs: [
          "Treatment is a combination of 3 or 4 different tablets: one cuts down the acid in the stomach, and the others are antibiotics. Treatment is much more successful if the whole course is taken exactly as prescribed.",
          "Most people have no side effects, but some notice a strange taste in the mouth, a feeling of sickness or a headache. With one antibiotic often used, metronidazole, you should avoid alcohol.",
          "Clearing the infection does not always stop indigestion, as some people have both H pylori and functional dyspepsia. The benefit may not be seen for 12 months.",
        ],
      },
    ],
    helps: [
      "Ask your GP whether you should be tested for H pylori infection.",
      "Ask which medicines to stop before the test: acid-reducing tablets should not be taken in the two weeks before.",
      "Take the whole course of tablets exactly as prescribed.",
      "Avoid alcohol if you are taking metronidazole.",
      "Ask whether you need a test after treatment to make sure it has worked.",
    ],
    tryThisWeek: [
      "Ask about an H pylori test.",
      "Check which medicines to pause.",
      "Finish the whole course.",
    ],
    ask: "Should I be tested for H pylori, and which medicines should I stop first?",
    interactive: {
      kind: "timeline",
      title: "From test to all clear",
      steps: [
        { id: "before", when: "Before the test", title: "Pause some medicines", points: ["No proton pump inhibitors in the two weeks before", "A course of antibiotics within a month can affect it", "Your GP will tell you what to stop"] },
        { id: "test", when: "The test", title: "Breath, poo or blood", points: ["A breath test after a drink containing urea", "Or a small sample of poo, or a blood test"] },
        { id: "treat", when: "If it is found", title: "A course of tablets", points: ["3 or 4 tablets: one to cut acid, the others antibiotics", "Take the whole course exactly as prescribed", "Avoid alcohol with metronidazole"] },
        { id: "after", when: "Afterwards", title: "Check it has cleared", points: ["A breath test at least one month after the course", "If still positive, further treatment is possible"] },
      ],
    },
    sources: [GUTS_HP, GUTS_INDIGESTION, NHS_ULCER, NICE_CG184],
    quiz: {
      question: "How long before an H pylori test should acid-reducing tablets be stopped?",
      options: [{ text: "Two weeks", right: true }, { text: "One hour" }, { text: "They do not affect the test" }],
      why: "Proton pump inhibitors such as omeprazole and lansoprazole should not have been taken in the last two weeks before testing.",
    },
  },
  {
    id: "ind-ppis",
    kicker: "Treatment",
    question: "How do acid-reducing tablets work, and how long do I take them?",
    hook: "They turn down the stomach's acid. The aim is the lowest dose that works, reviewed over time.",
    short: "Proton pump inhibitors (PPIs) such as omeprazole and lansoprazole reduce the amount of acid your stomach makes. You should start to feel better within 2 to 3 days, though lansoprazole can take up to 4 weeks to work fully. Over time, the aim is the lowest dose that controls symptoms, and stopping gradually after long use.",
    sections: [
      {
        heading: "How they work",
        paragraphs: [
          "Proton pumps are enzymes in the lining of your stomach that help it make acid to digest your food. Lansoprazole prevents proton pumps from working properly, which reduces the amount of acid your stomach makes.",
          "Omeprazole, esomeprazole, pantoprazole and rabeprazole work in the same way. They generally work as well as lansoprazole and have similar side effects.",
        ],
      },
      {
        heading: "Taking them",
        paragraphs: [
          "You'll usually take lansoprazole once a day, first thing in the morning. It works best if you take it at least 30 minutes before a meal or snack.",
          "Try to take omeprazole at the same time each morning if you take it once a day. You can take it with or without food, and swallow tablets and capsules with water.",
          "If you need to take an antacid, take it at least 2 hours before or after your dose of lansoprazole.",
        ],
      },
      {
        heading: "How long",
        paragraphs: [
          "You should start to feel better within 2 to 3 days. It may take up to 4 weeks for lansoprazole to work fully, so you may still have some symptoms during this time.",
          "NICE recommends a full-dose PPI for 4 weeks for people with dyspepsia. If symptoms come back, the advice is to step down to the lowest dose needed to control them, and to discuss using the treatment as needed.",
          "Some people do not need to take lansoprazole every day and take it only when they have symptoms.",
        ],
      },
      {
        heading: "Side effects and long-term use",
        paragraphs: [
          "Common side effects include headache, feeling sick and diarrhoea. These tend to be mild and go away when you stop taking the medicine.",
          "If you take lansoprazole for more than 3 months, the levels of magnesium in your blood may fall. Taking it for more than a year may increase the chance of bone fractures, gut infections and vitamin B12 deficiency, so your doctor will regularly check whether you should carry on.",
          "Taking omeprazole can make it harder to notice symptoms of some serious conditions, such as stomach cancer. See a GP if you're worried.",
        ],
      },
      {
        heading: "Stepping down and stopping",
        paragraphs: [
          "If you've taken lansoprazole for a long time, speak to your doctor before you stop. Stopping suddenly could make your stomach produce a lot more acid and bring symptoms back, and reducing the dose gradually before stopping will prevent this.",
          "NICE advises an annual review for people who need long-term treatment, encouraging them to try stepping down or stopping where possible. Some people can return to antacids or alginates taken as needed, and Guts UK says it's wise to find the lowest dose that controls your symptoms.",
          "If a PPI does not work for you or causes side effects, your doctor may prescribe an H2 blocker, such as famotidine.",
        ],
      },
    ],
    helps: [
      "Take lansoprazole at least 30 minutes before a meal or snack.",
      "If you need an antacid, take it at least 2 hours before or after your dose of lansoprazole.",
      "Tell your doctor if you feel tired, confused or dizzy, or get muscle twitches, shaking or an irregular heartbeat.",
      "Speak to your doctor before stopping a PPI you've taken for a long time.",
      "If you need long-term treatment, ask about an annual review.",
    ],
    tryThisWeek: [
      "Take it 30 minutes before food.",
      "Space it from antacids.",
      "Ask about a yearly review.",
    ],
    ask: "How long should I take an acid-reducing tablet, and how would I step down?",
    interactive: {
      kind: "timeline",
      title: "A course of acid-reducing tablets",
      steps: [
        { id: "days", when: "2 to 3 days", title: "Starting to feel better", points: ["You should start to feel better within 2 to 3 days"] },
        { id: "weeks", when: "Up to 4 weeks", title: "Working fully", points: ["You may still have some symptoms during this time", "NICE recommends a 4-week course for dyspepsia"] },
        { id: "after", when: "If symptoms return", title: "The lowest dose that works", points: ["Step down to the lowest dose needed", "Discuss using it only when needed"] },
        { id: "months", when: "More than 3 months", title: "Magnesium can fall", points: ["Tell your doctor about tiredness, confusion, dizziness, twitches or an irregular heartbeat"] },
        { id: "year", when: "More than a year", title: "Regular checks", points: ["Your doctor will regularly check if you should carry on", "An annual review, trying to step down or stop"] },
      ],
    },
    sources: [NHS_LANSOPRAZOLE_QUESTIONS, NHS_LANSOPRAZOLE_HOW, NHS_OMEPRAZOLE, NICE_CG184, GUTS_INDIGESTION, NHS_LANSOPRAZOLE_ABOUT],
    quiz: {
      question: "When should you start to feel better on lansoprazole?",
      options: [{ text: "Within 2 to 3 days", right: true }, { text: "Within an hour" }, { text: "Only after 6 months" }],
      why: "You should start to feel better within 2 to 3 days.",
    },
  },
  {
    id: "ind-eating",
    kicker: "Living well",
    question: "How should I time and size my meals?",
    hook: "Smaller meals, no rushing and a gap before bed. How you eat can matter as much as what.",
    short: "Eating smaller, more frequent meals, not rushing food and not overeating can help. Leave 3 to 4 hours between eating and bed, and sit up straight when you eat. Notice the foods that make symptoms worse, but get advice before cutting out lots of foods.",
    sections: [
      {
        heading: "Smaller and more often",
        paragraphs: [
          "Eating smaller, more frequent meals can help reduce symptoms. You're more likely to get indigestion if you're very full.",
          "Almost all of us get indigestion now and then, often after a heavy, spicy or fatty meal. Symptoms can occur if we rush our food, or if we overeat or overdrink.",
        ],
      },
      {
        heading: "Timing",
        paragraphs: [
          "Do not eat 3 to 4 hours before going to bed. Having a main meal well before going to bed may help some people.",
          "If your symptoms happen when you lie down at night, avoid eating three hours before bedtime.",
        ],
      },
      {
        heading: "How you sit",
        paragraphs: [
          "Sit up straight when you eat and just after eating. This takes the pressure off your stomach.",
        ],
      },
      {
        heading: "Foods to watch",
        paragraphs: [
          "Rich, spicy or fatty foods can make indigestion worse, and so can coffee, tomatoes, alcohol and chocolate.",
          "It may help to avoid acidic foods like tomatoes, citrus fruits, salad dressings and fizzy drinks, and to cut down on caffeinated drinks such as tea, coffee, cola and energy drinks.",
          "For some people with functional dyspepsia, cutting back on caffeine, spicy foods, fatty foods like chocolate and pastries, citrus fruit juices, peppermint, fizzy drinks and tomatoes can be helpful.",
        ],
      },
      {
        heading: "Do not cut out too much",
        paragraphs: [
          "Food sensitivity varies, and many people with functional dyspepsia may tolerate some or all foods. If you have cut many items from your diet without symptoms improving, foods should be reintroduced, because diet is not always the cause.",
          "Avoiding or restricting foods could lead to malnourishment, so you can ask your doctor for a referral to a dietitian. There is currently no evidence to support cutting out full food groups as a treatment.",
        ],
      },
    ],
    helps: [
      "Eat smaller, more frequent meals.",
      "Don't rush meals.",
      "Do not eat 3 to 4 hours before going to bed.",
      "Sit up straight when you eat and just after eating.",
      "Ask your doctor for a referral to a dietitian before cutting out lots of foods.",
    ],
    tryThisWeek: [
      "Try smaller, more frequent meals.",
      "Stop eating 3 to 4 hours before bed.",
      "Sit up straight at meals.",
    ],
    ask: "Could I see a dietitian about which foods to change?",
    interactive: {
      kind: "scenarios",
      title: "Meal moments",
      scenarios: [
        {
          id: "big-lunch",
          situation: "A big family meal is planned for Sunday.",
          options: [{ text: "Have a smaller plate and don't rush it", best: true }, { text: "Eat until you are very full" }],
          why: "You're more likely to get indigestion if you're very full. Symptoms can occur if we rush our food.",
        },
        {
          id: "sofa",
          situation: "You usually eat slumped on the sofa.",
          options: [{ text: "Sit up straight to eat", best: true }, { text: "Lie back right after eating" }],
          why: "Sit up straight when you eat and just after eating. This takes the pressure off your stomach.",
        },
        {
          id: "cutting-out",
          situation: "You've cut out lots of foods, but nothing has changed.",
          options: [{ text: "Bring foods back and ask about a dietitian", best: true }, { text: "Cut out even more foods" }],
          why: "Foods should be reintroduced if you have cut many items without symptoms improving. Restricting foods could lead to malnourishment.",
        },
      ],
    },
    sources: [NHS_INDIGESTION, NHS_HEARTBURN, NHS_PREGNANCY, GUTS_INDIGESTION, GUTS_FD, NHS_LANSOPRAZOLE_QUESTIONS, NICE_CG184],
    quiz: {
      question: "Why sit up straight when you eat?",
      options: [{ text: "It takes the pressure off your stomach", right: true }, { text: "It makes food digest twice as fast" }, { text: "It stops the stomach making acid" }],
      why: "Sit up straight when you eat and just after eating. This takes the pressure off your stomach.",
    },
  },
  {
    id: "ind-stress",
    kicker: "Living well",
    question: "Can stress cause indigestion?",
    hook: "The gut and the brain talk all the time. Stress can turn up the volume on stomach symptoms, and it can be treated.",
    short: "Stress and anxiety can cause indigestion or make it worse, because the gut and brain are closely connected. Long-term symptoms can also affect mood. Breathing exercises, talking to someone, talking therapies and, for long-term symptoms, psychological treatment can all help.",
    sections: [
      {
        heading: "A two-way connection",
        paragraphs: [
          "There is two-way communication between your gut and brain, known as the gut-brain axis. When you get butterflies in the pit of your stomach, or feel anxious, that's the gut-brain connection.",
          "Stress, anxiety and depression can contribute to indigestion. This can work both ways, with long-term severe symptoms having the potential to affect people's mood.",
        ],
      },
      {
        heading: "Stress and the stomach",
        paragraphs: [
          "Stress and anxiety are among the things that can cause indigestion or make it worse.",
          "Stress can cause many different symptoms, including headaches, muscle tension and stomach problems. It can also change how much you eat, or how much you drink or smoke.",
          "High levels of anxiety or stress can make the symptoms of functional dyspepsia worse.",
        ],
      },
      {
        heading: "Things to try",
        paragraphs: [
          "Try talking about your feelings to a friend, family member or health professional. Plan ahead for stressful days, set small targets you can easily achieve, and try not to use alcohol or cigarettes to relieve stress.",
          "A calming breathing technique takes just a few minutes and can be done anywhere. Let your breath flow deep down into your belly, breathe in through your nose and out through your mouth, counting steadily from 1 to 5 if it helps, and repeat for at least 5 minutes.",
        ],
      },
      {
        heading: "Treatment that helps",
        paragraphs: [
          "If someone has long-term indigestion due to stress or anxiety, it's best to focus on treating the stress. Your GP can refer you to a psychologist for cognitive behavioural therapy (CBT) or hypnotherapy.",
          "NICE recognises that psychological therapies may reduce indigestion symptoms in the short term for some people. Gut-directed hypnotherapy might be difficult to access in the NHS.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "NHS talking therapies for anxiety and depression may be able to help with stress. If you're 18 or over, or 16 or over in some areas, you can refer yourself directly without talking to a GP.",
          "Tell your doctor if you are feeling low or hopeless, so that the right care can be provided. You can contact Samaritans by phone on 116 123 if you need someone to talk to.",
        ],
      },
    ],
    helps: [
      "Try a breathing exercise for at least 5 minutes, as part of your daily routine.",
      "Talk about your feelings to a friend, family member or health professional.",
      "Ask your GP about CBT or hypnotherapy if stress is behind long-term indigestion.",
      "Refer yourself to NHS talking therapies if you're 18 or over.",
      "Call Samaritans on 116 123 if you need someone to talk to.",
      "Call NHS 111 or ask for an urgent GP appointment if you need help urgently but it's not an emergency; call 999 or go to A&E if someone needs immediate help.",
    ],
    tryThisWeek: [
      "Try 5 minutes of slow breathing.",
      "Talk to someone you trust.",
      "Look up NHS talking therapies.",
    ],
    ask: "Could stress be part of my symptoms, and could a talking therapy help?",
    interactive: {
      kind: "timeline",
      title: "A breathing exercise, step by step",
      steps: [
        { id: "settle", when: "First", title: "Get comfortable", points: ["Stand, sit in a chair that supports your back, or lie down", "Loosen any clothes that restrict your breathing", "Feet roughly hip-width apart"] },
        { id: "in", when: "Breathe in", title: "Into your belly", points: ["As deep as is comfortable, without forcing it", "In through your nose, counting from 1 to 5 if it helps"] },
        { id: "out", when: "Breathe out", title: "Let it flow out", points: ["Out through your mouth, gently", "Count from 1 to 5 again, if you find this helpful"] },
        { id: "repeat", when: "At least 5 minutes", title: "Keep going", points: ["Repeat for at least 5 minutes", "Most benefit if you do it as part of your daily routine"] },
      ],
    },
    sources: [GUTS_GUT_BRAIN, GUTS_INDIGESTION, GUTS_FD, NHS_INDIGESTION, NHS_STRESS, NHS_BREATHING, NICE_CG184],
    quiz: {
      question: "If long-term indigestion is due to stress or anxiety, what is best to focus on?",
      options: [{ text: "Treating the stress", right: true }, { text: "Cutting out more foods" }, { text: "Taking antacids every hour" }],
      why: "If someone has long-term indigestion due to stress or anxiety, it's best to focus on treating the stress.",
    },
  },
  {
    id: "ind-pregnancy",
    kicker: "Living well",
    question: "What helps indigestion in pregnancy?",
    hook: "Very common, especially later on. Changes to eating and sleeping help, and some medicines are safe to take.",
    short: "Indigestion is common in pregnancy, caused by hormonal changes and the growing baby pressing against the stomach. Small meals often, not eating within 3 hours of bed and propping your head and shoulders up can help. A pharmacist, midwife or GP can recommend medicines that are safe in pregnancy.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "Indigestion is common in pregnancy. It can be caused by hormonal changes, the growing baby pressing against your stomach, and the muscles between your stomach and gullet relaxing, allowing stomach acid to come back up.",
          "You can get symptoms at any point during your pregnancy, but the NHS pregnancy pages say they are more common from 12 weeks onwards. The NHS indigestion page says it's very common from 27 weeks onwards.",
          "You may be more likely to get indigestion in pregnancy if you had it before you were pregnant, you've been pregnant before, or you're in the later stages of pregnancy.",
        ],
      },
      {
        heading: "Changes that help",
        paragraphs: [
          "It can help to eat small meals often, rather than larger meals 3 times a day, and to not eat within 3 hours of going to bed at night. Sit up straight when you eat and just after eating.",
          "Cutting down on drinks containing caffeine, and foods that are rich, spicy or fatty, can also ease symptoms. Propping your head and shoulders up when you go to bed can stop acid coming up while you sleep, and sleeping on your left side can also help.",
          "Smoking and alcohol can both cause indigestion. It's safest not to drink alcohol at all in pregnancy, and your midwife or the NHS Smokefree helpline on 0300 123 1044 can help you stop smoking.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Antacids neutralise the acid in your stomach, and alginates stop the acid coming back up your gullet. Tell the pharmacist you're pregnant, as some antacids are not suitable during pregnancy.",
          "You can take Gaviscon while you're pregnant, but do not take more than the recommended amount. You can usually take omeprazole if you're pregnant, but check with a pharmacist or doctor first.",
          "Do not take antacids within 2 hours of taking folic acid or iron supplements. Antacids can stop these supplements from being absorbed by your body.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "See your midwife or GP if you need help managing your symptoms, or if changes to your diet and lifestyle do not work. Also see them if you have difficulty swallowing, a hoarse voice, a cough that does not get better, swollen glands on each side of your neck, weight loss, or pain or swelling in your stomach.",
          "If you think a medicine for another condition, such as an antidepressant, is making indigestion worse, speak to your GP. Never stop taking a prescribed medicine unless you're advised to by your GP or another qualified healthcare professional.",
          "If you have stomach pains and are worried, call your maternity unit, or call 111 if it is not available. Call your maternity unit immediately if the pain is severe or does not go away after you've rested for 30 to 60 minutes.",
        ],
      },
    ],
    helps: [
      "Eat small meals often, rather than larger meals 3 times a day.",
      "Do not eat within 3 hours of going to bed at night.",
      "Prop your head and shoulders up in bed, and try sleeping on your left side.",
      "Tell the pharmacist you're pregnant when buying indigestion medicine.",
      "Do not take antacids within 2 hours of folic acid or iron supplements.",
      "See your midwife or GP if changes to your diet and lifestyle do not work.",
    ],
    tryThisWeek: [
      "Try small meals more often.",
      "Try sleeping on your left side.",
      "Tell the pharmacist you're pregnant.",
    ],
    ask: "Which indigestion medicines are safe for me to take in pregnancy?",
    interactive: {
      kind: "scenarios",
      title: "Moments in pregnancy",
      scenarios: [
        {
          id: "iron",
          situation: "You take an iron tablet and want an antacid too.",
          options: [{ text: "Leave at least 2 hours between them", best: true }, { text: "Take them together" }],
          why: "Do not take antacids within 2 hours of taking folic acid or iron supplements. Antacids can stop these supplements from being absorbed.",
        },
        {
          id: "buying",
          situation: "You're buying an indigestion remedy at the pharmacy.",
          options: [{ text: "Tell the pharmacist you're pregnant", best: true }, { text: "Pick any antacid off the shelf" }],
          why: "Tell the pharmacist you're pregnant, as some antacids are not suitable during pregnancy.",
        },
        {
          id: "night",
          situation: "Symptoms keep you awake at night.",
          options: [{ text: "Prop your head and shoulders up, or lie on your left side", best: true }, { text: "Have a large snack just before bed" }],
          why: "Propping your head and shoulders up can stop stomach acid coming up while you sleep. Sleeping on your left side can also help.",
        },
        {
          id: "pain",
          situation: "Stomach pain has not gone after resting for an hour.",
          options: [{ text: "Call your maternity unit immediately", best: true }, { text: "Take another antacid and wait" }],
          why: "Call your maternity unit immediately if the pain is severe or does not go away after you've rested for 30 to 60 minutes.",
        },
      ],
    },
    sources: [NHS_PREGNANCY, NHS_INDIGESTION, NHS_GAVISCON_PREGNANCY, NHS_OMEPRAZOLE, NHS_ANTACIDS, NHS_PREGNANCY_PAIN],
    quiz: {
      question: "How long should you leave between an antacid and an iron or folic acid supplement?",
      options: [{ text: "At least 2 hours", right: true }, { text: "No gap is needed" }, { text: "5 minutes" }],
      why: "Do not take antacids within 2 hours of taking folic acid or iron supplements.",
    },
  },
  {
    id: "ind-medicines-review",
    kicker: "Treatment",
    question: "Which medicines can cause indigestion?",
    hook: "Anti-inflammatory painkillers top the list, but they are not the only ones. Never stop a medicine without asking first.",
    short: "Anti-inflammatory painkillers such as ibuprofen, aspirin and naproxen are a common cause of indigestion and can damage the stomach lining. Some other medicines, including opioid painkillers, can play a part too. A doctor or pharmacist can check your medicines, but do not stop any without speaking to them first.",
    sections: [
      {
        heading: "Anti-inflammatory painkillers",
        paragraphs: [
          "Do not take ibuprofen or aspirin unless it has been prescribed for you. Speak to a pharmacist or GP if you take these medicines, as they can make indigestion worse.",
          "Common side effects of NSAIDs include indigestion and stomach ache. These medicines can damage the stomach lining, and ulcers now occur more often in people who take them.",
        ],
      },
      {
        heading: "Signs of a problem",
        paragraphs: [
          "NSAIDs can sometimes cause stomach ulcers or bleeding inside your stomach. Symptoms include stomach pain, shortness of breath, pale skin, vomiting blood, or poo that's black, sticky and tar-like.",
          "The risk of serious side effects is higher if you take a high dose of ibuprofen or take it for a long time. Call NHS 111 if you think you might be having serious side effects.",
        ],
      },
      {
        heading: "Using painkillers more safely",
        paragraphs: [
          "Ibuprofen can cause more side effects than paracetamol. If you can take paracetamol, it's a good idea to try it before taking ibuprofen.",
          "Take the smallest dose you need for the shortest time, ideally with or after food. Do not take ibuprofen tablets for more than 10 days unless a doctor advises it, or at the same time as other NSAIDs such as naproxen or aspirin.",
          "Your doctor may also prescribe a second medicine, such as omeprazole, to help protect your stomach while you're taking naproxen.",
        ],
      },
      {
        heading: "Other medicines",
        paragraphs: [
          "Opioid painkillers such as codeine, tramadol and morphine can lead to more discomfort, heartburn and reflux symptoms, and may slow the rate at which the stomach empties.",
          "NICE lists other medicines doctors should review as possible causes of indigestion, including calcium antagonists, nitrates, theophyllines, bisphosphonates and corticosteroids.",
        ],
      },
      {
        heading: "Reviewing your medicines",
        paragraphs: [
          "Your doctor can also advise you if any of your other medicines may be causing indigestion. Don't stop taking your medicines before talking to your doctor.",
          "If you're regularly taking low-dose aspirin, keep taking your medicine unless you're advised to stop.",
        ],
      },
    ],
    helps: [
      "Speak to a pharmacist or GP if you take ibuprofen or aspirin.",
      "If you can take paracetamol, try it before taking ibuprofen.",
      "Take ibuprofen with or after food, at the smallest dose for the shortest time.",
      "Ask your doctor whether any of your medicines may be causing indigestion.",
      "Don't stop taking your medicines before talking to your doctor.",
    ],
    tryThisWeek: [
      "Ask if a medicine is the cause.",
      "Try paracetamol first, if you can.",
      "Take ibuprofen with food.",
    ],
    ask: "Could any of my medicines be causing this?",
    interactive: {
      kind: "risk-check",
      title: "Medicines to mention to your doctor",
      intro: "Tick any you take. Never stop a prescribed medicine without talking to your doctor first.",
      items: [
        { id: "ibuprofen", label: "Ibuprofen", note: "Common side effects include indigestion and stomach aches. Try paracetamol first if you can.", changeable: true },
        { id: "aspirin", label: "Aspirin", note: "Can make indigestion worse. If you take low-dose aspirin, keep taking it unless advised to stop.", changeable: false },
        { id: "naproxen", label: "Naproxen", note: "Your doctor may prescribe omeprazole as well, to help protect your stomach.", changeable: false },
        { id: "opioids", label: "Opioid painkillers", note: "Codeine, tramadol and morphine may bring more discomfort, heartburn and reflux symptoms.", changeable: false },
        { id: "steroids", label: "Corticosteroids", note: "NICE lists them among medicines to review as a possible cause.", changeable: false },
        { id: "other", label: "Bisphosphonates or nitrates", note: "NICE lists these among medicines to review as a possible cause.", changeable: false },
      ],
    },
    sources: [NHS_INDIGESTION, NHS_NSAIDS, NHS_IBUPROFEN, NHS_ASPIRIN, GUTS_FD, NICE_CG184, GUTS_INDIGESTION, NHS_NAPROXEN],
    quiz: {
      question: "What should you do if you think a prescribed medicine is causing indigestion?",
      options: [{ text: "Talk to your doctor before stopping it", right: true }, { text: "Stop it straight away" }, { text: "Double the dose of antacid" }],
      why: "Don't stop taking your medicines before talking to your doctor.",
    },
  },
];
