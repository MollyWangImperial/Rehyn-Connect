import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Gastritis page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS website
// and Guts UK (its Gastritis, H. pylori, Indigestion and Alcohol leaflets), with NICE's Clinical Knowledge
// Summary on dyspepsia for the gaps before an H pylori test. Paragraphs write "H pylori" without a full stop,
// as the NHS pages do. Emergency wording follows the NHS Gastritis page exactly. General information only;
// it never replaces what a person's own GP, pharmacist or hospital team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const gutsUk = (label: string, path: string): LearnSource => ({ label: `Guts UK: ${label}`, url: `https://gutscharity.org.uk/advice-and-information/${path}` });

const NHS_GASTRITIS = nhs("Gastritis", "conditions/gastritis/");
const NHS_ULCER = nhs("Stomach ulcer", "conditions/stomach-ulcer/");
const NHS_INDIGESTION = nhs("Indigestion", "conditions/indigestion/");
const NHS_GASTROSCOPY = nhs("Gastroscopy", "tests-and-treatments/gastroscopy/");
const NHS_VOMITING_BLOOD = nhs("Vomiting blood", "symptoms/vomiting-blood/");
const NHS_NSAIDS = nhs("NSAIDs", "medicines/nsaids/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_ASPIRIN = nhs("Aspirin", "medicines/aspirin/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_ANTACIDS = nhs("Antacids", "medicines/antacids/");
const NHS_GAVISCON = nhs("About Gaviscon", "medicines/gaviscon/about-gaviscon/");
const NHS_OMEPRAZOLE = nhs("Omeprazole", "medicines/omeprazole/");
const NHS_LANSO_ABOUT = nhs("About lansoprazole", "medicines/lansoprazole/about-lansoprazole/");
const NHS_LANSO_HOW = nhs("How and when to take lansoprazole", "medicines/lansoprazole/how-and-when-to-take-lansoprazole/");
const NHS_LANSO_QA = nhs("Common questions about lansoprazole", "medicines/lansoprazole/common-questions-about-lansoprazole/");
const NHS_B12 = nhs("Vitamin B12 or folate deficiency anaemia", "conditions/vitamin-b12-or-folate-deficiency-anaemia/");
const NHS_B12_CAUSES = nhs("Vitamin B12 or folate deficiency anaemia: causes", "conditions/vitamin-b12-or-folate-deficiency-anaemia/causes/");
const NHS_B12_TREATMENT = nhs("Vitamin B12 or folate deficiency anaemia: treatment", "conditions/vitamin-b12-or-folate-deficiency-anaemia/treatment/");
const NHS_UNITS = nhs("Alcohol units", "live-well/alcohol-advice/calculating-alcohol-units/");
const NHS_CUTTING_DOWN = nhs("Tips on cutting down on alcohol", "live-well/alcohol-advice/tips-on-cutting-down-alcohol/");
const NHS_ALCOHOL_SUPPORT = nhs("Alcohol support", "live-well/alcohol-advice/alcohol-support/");
const NHS_STOP_SMOKING = nhs("NHS stop smoking services help you quit", "live-well/quit-smoking/nhs-stop-smoking-services-help-you-quit/");
const NHS_QUIT = nhs("Better Health: Quit smoking", "better-health/quit-smoking/");

const GUTS_GASTRITIS = gutsUk("Gastritis", "conditions/gastritis/");
const GUTS_HP = gutsUk("Helicobacter pylori (H. pylori)", "conditions/helicobacter-pylori/");
const GUTS_INDIGESTION = gutsUk("Indigestion", "symptoms/indigestion/");
const GUTS_ALCOHOL = gutsUk("Alcohol and the digestive system", "health-and-lifestyle/alcohol-the-digestive-system/");

const CKS_DYSPEPSIA: LearnSource = { label: "NICE CKS: Dyspepsia - unidentified cause", url: "https://cks.nice.org.uk/topics/dyspepsia-unidentified-cause/" };

export const gastritisAnswers: LearnArticle[] = [
  {
    id: "gast-what-it-is",
    kicker: "Understanding",
    question: "What is gastritis?",
    hook: "An irritated, inflamed stomach lining. Often linked to a germ or a painkiller, and most people recover with treatment.",
    short: "Gastritis is when the lining of your stomach becomes irritated (inflamed). It can cause pain, indigestion and feeling sick, though some people have no symptoms. Treatment depends on the cause, and most people will recover from gastritis with treatment.",
    sections: [
      {
        heading: "An inflamed lining",
        paragraphs: [
          "Gastritis is when the lining of your stomach becomes irritated (inflamed). It can cause pain, indigestion and feeling sick.",
          "The name means stomach inflammation: gastr means stomach, and itis means inflammation. It is not the same as gastroenteritis, which refers to inflammation in the bowels.",
        ],
      },
      {
        heading: "Why the lining gets inflamed",
        paragraphs: [
          "Normally the mucus lining the stomach protects it from digestive juices such as stomach acid and bile. Gastritis happens when this protection is weakened and the digestive juices cause inflammation.",
          "An infection called H pylori is the most common cause of gastritis worldwide. Anti-inflammatory painkillers such as ibuprofen, aspirin and drinking too much alcohol can also cause it.",
        ],
      },
      {
        heading: "Short-term or long-term",
        paragraphs: [
          "Gastritis can be acute, which means it started recently, or chronic, which means it is long-term. Most people will recover from gastritis with treatment, but some continue to have symptoms and inflammation, and this is called chronic gastritis.",
          "Gastritis is not uncommon. It is reported that more than half the world's population has chronic gastritis, especially in developing countries.",
        ],
      },
      {
        heading: "How it is treated",
        paragraphs: [
          "Treatment for gastritis depends on what's causing it. You might need antibiotics, medicines to control stomach acid, or to talk to your doctor about trying a different painkiller.",
          "If it's not treated, gastritis may get worse and cause a stomach ulcer. Stomach ulcers are sores in the stomach.",
        ],
      },
    ],
    helps: [
      "See a GP if you have tummy pain or indigestion for longer than 1 week, or your tummy pain is getting worse or keeps coming back.",
      "If you've been told you have gastritis, follow the treatment advice your doctor has given you.",
      "Ask your doctor what type of gastritis you have, and what treatment is best for you.",
      "Do not assume your symptoms are caused by gastritis, as several other conditions can cause them.",
    ],
    tryThisWeek: [
      "See a GP if pain lasts over a week.",
      "Follow your treatment advice.",
      "Ask what type of gastritis you have.",
    ],
    ask: "What type of gastritis do I have, and what is causing it?",
    interactive: {
      kind: "flip-cards",
      title: "Words you may hear",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "gastritis", front: "Gastritis", when: "The diagnosis", back: "The lining of the stomach becomes irritated and inflamed." },
        { id: "acute", front: "Acute gastritis", when: "Recent onset", back: "Gastritis that started recently." },
        { id: "chronic", front: "Chronic gastritis", when: "Long-term", back: "Symptoms and inflammation that continue. Most people recover with treatment, but some have this." },
        { id: "mucus", front: "The mucus lining", when: "The stomach's own protection", back: "Protects the stomach from acid and bile. Gastritis happens when this protection is weakened." },
        { id: "hp", front: "H pylori", when: "A common stomach germ", back: "Bacteria that live in the sticky mucus lining the stomach. The most common cause of gastritis worldwide." },
        { id: "ulcer", front: "Stomach ulcer", when: "If gastritis is not treated", back: "A sore in the stomach. Untreated gastritis may get worse and cause one." },
      ],
    },
    sources: [NHS_GASTRITIS, GUTS_GASTRITIS, GUTS_HP, NHS_ULCER],
    quiz: {
      question: "What normally protects the stomach from its own acid?",
      options: [{ text: "The mucus lining the stomach", right: true }, { text: "A layer of fat" }, { text: "The bowel" }],
      why: "Normally the mucus lining the stomach protects it from digestive juices such as stomach acid and bile.",
    },
  },
  {
    id: "gast-causes",
    kicker: "Causes",
    question: "What causes gastritis?",
    hook: "A common stomach germ, everyday painkillers and alcohol are the usual culprits. Some rarer types come from the immune system.",
    short: "Causes of gastritis include an infection called H pylori, anti-inflammatory painkillers such as ibuprofen, aspirin, and drinking too much alcohol. Smoking, being very unwell, stomach surgery and a problem with the immune system can also cause it. Finding the cause guides the treatment.",
    sections: [
      {
        heading: "A common stomach germ",
        paragraphs: [
          "H pylori are a group of bacteria that live in the sticky mucus that lines the stomach. Up to 2 in 5 people in the UK have H pylori in their stomach, and it always causes inflammation of the stomach lining.",
          "H pylori infection is the most common cause of gastritis worldwide, and it can cause both short-term and long-term gastritis. People who have it almost always catch it in childhood, usually within families, and it stays in the stomach unless it is treated with specific antibiotics.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "Some medicines can cause gastritis. It is common in people taking certain non-steroidal anti-inflammatory drugs, called NSAIDs, for pain relief, such as ibuprofen, naproxen, diclofenac or aspirin.",
          "Do not stop taking any of these medicines without discussing it with your doctor first. If the gastritis has been caused by a medicine, ask your doctor or pharmacist if there are suitable alternatives for you to try.",
        ],
      },
      {
        heading: "Alcohol, smoking and lifestyle",
        paragraphs: [
          "Lifestyle factors can also cause gastritis, typically drinking alcohol above the recommended guidelines, recreational drug use and smoking cigarettes.",
          "Alcohol can harm the stomach lining. It causes inflammation and reduces the ability to repair the damage.",
        ],
      },
      {
        heading: "Other causes",
        paragraphs: [
          "Gastritis can occasionally happen in people who are very unwell, such as people in intensive care. It can also follow surgery on your stomach, such as gastric bypass surgery, and bile coming back into the stomach can cause it too.",
          "Gastritis can also be caused by a problem with your immune system where it attacks the lining of your stomach. This is called autoimmune gastritis, and it can lead to a lack of vitamin B12.",
          "Some rarer types are linked to white blood cells in the stomach lining. Certain types of gastritis can run in the same family.",
        ],
      },
    ],
    helps: [
      "Ask your doctor what type of gastritis you have.",
      "Talk to your doctor if you regularly take anti-inflammatory painkillers (such as ibuprofen) or aspirin.",
      "Do not stop taking a prescribed medicine without discussing it with your doctor first.",
      "If a medicine has caused your gastritis, ask your doctor or pharmacist if there are suitable alternatives.",
      "Ask your GP about help to stop smoking, stop recreational drug use or reduce alcohol.",
    ],
    tryThisWeek: [
      "Tell your GP about regular painkillers.",
      "Keep taking prescribed medicines.",
      "Ask your GP for help with changes.",
    ],
    ask: "What is causing my gastritis?",
    interactive: {
      kind: "risk-check",
      title: "What can inflame the stomach lining?",
      intro: "Tick any that apply. Some causes can be changed or treated, and some cannot.",
      items: [
        { id: "hp", label: "H pylori infection", note: "The most common cause worldwide. It stays in the stomach unless it is treated with specific antibiotics.", changeable: true },
        { id: "nsaids", label: "Anti-inflammatory painkillers", note: "Such as ibuprofen, naproxen, diclofenac or aspirin. Do not stop a prescribed one without your doctor.", changeable: true },
        { id: "alcohol", label: "Drinking above the guidelines", note: "Alcohol can harm the stomach lining and reduce its ability to repair the damage.", changeable: true },
        { id: "smoking", label: "Smoking cigarettes", note: "One of the lifestyle factors that can cause gastritis.", changeable: true },
        { id: "unwell", label: "Being very unwell", note: "Gastritis can occasionally happen in people who are very unwell, such as in intensive care.", changeable: false },
        { id: "surgery", label: "Surgery on the stomach", note: "Such as gastric bypass surgery.", changeable: false },
        { id: "autoimmune", label: "An immune system problem", note: "The immune system attacks the stomach lining. This can lead to a lack of vitamin B12.", changeable: false },
      ],
    },
    sources: [NHS_GASTRITIS, GUTS_GASTRITIS, GUTS_HP, GUTS_ALCOHOL],
    quiz: {
      question: "What is the most common cause of gastritis worldwide?",
      options: [{ text: "An infection called H pylori", right: true }, { text: "Spicy food" }, { text: "Drinking water" }],
      why: "H pylori infection is the most common cause of gastritis worldwide, and it can cause both short-term and long-term gastritis.",
    },
  },
  {
    id: "gast-symptoms",
    kicker: "Symptoms",
    question: "What does gastritis feel like?",
    hook: "Indigestion, a burning or gnawing tummy pain, feeling sick or full. Or, for some people, nothing at all.",
    short: "Symptoms of gastritis include tummy pain, indigestion, feeling full and bloated, feeling or being sick, and not feeling as hungry as usual. They vary from person to person, and some people have no symptoms at all. See a GP if tummy pain or indigestion lasts longer than 1 week.",
    sections: [
      {
        heading: "The common symptoms",
        paragraphs: [
          "Symptoms of gastritis include tummy pain, indigestion, feeling full and bloated, feeling sick, being sick, and not feeling as hungry as usual.",
          "The stomach pain is often described as burning or gnawing. With gastritis from H pylori, some people also have bloating and burping.",
        ],
      },
      {
        heading: "Sometimes no symptoms",
        paragraphs: [
          "The symptoms of gastritis can vary from one person to the next. Some people may not have any symptoms, and are found to have it when they have tests for other symptoms.",
          "About half of people who have H pylori infection do not have any symptoms at all, even though it always causes inflammation of the stomach lining.",
        ],
      },
      {
        heading: "It may not be gastritis",
        paragraphs: [
          "Do not assume your symptoms are caused by gastritis. The symptoms can be caused by several other conditions.",
          "Indigestion is so common that nearly everyone will have it at some point, and it is rare for it to be due to a serious condition. The most common cause of indigestion is functional dyspepsia, which happens when the stomach nerves get too sensitive.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Most symptoms of gastritis are not serious, but sometimes you may need medical help. See a GP if you have tummy pain or indigestion for longer than 1 week, or your tummy pain is getting worse or keeps coming back.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you have symptoms of gastritis and you've lost your appetite, you feel full after a very small meal, you've recently lost weight without trying to, it feels like you have a lump in your tummy, it's painful or difficult to swallow, or you keep being sick.",
          "Call 999 or go to A&E if you're vomiting bright red blood or your vomit looks like ground coffee, your poo is black, sticky and extremely smelly, or you have severe tummy or chest pain that started suddenly.",
        ],
      },
    ],
    helps: [
      "See a GP if you have tummy pain or indigestion for longer than 1 week.",
      "See a GP if your tummy pain is getting worse or keeps coming back.",
      "If indigestion lasts longer than three weeks and lifestyle changes have not helped, see your GP rather than carrying on with over-the-counter medicines.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you've lost weight without trying, it's difficult to swallow or you keep being sick.",
      "Call 999 or go to A&E if you're vomiting blood, your poo is black and sticky, or you have severe tummy or chest pain that started suddenly.",
    ],
    tryThisWeek: [
      "See a GP if pain lasts over a week.",
      "Get help if the pain keeps coming back.",
      "Know the signs that need 999.",
    ],
    ask: "Could my symptoms be caused by something other than gastritis?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention to your GP",
      intro: "Tick any you have noticed. The list you make can go with you to the appointment.",
      signs: [
        "Tummy pain, often burning or gnawing",
        "Indigestion",
        "Feeling full and bloated",
        "Feeling sick",
        "Being sick",
        "Not feeling as hungry as usual",
        "Burping",
        "Tummy pain or indigestion for longer than 1 week",
      ],
      after: "Tell your GP. If you're vomiting blood, your poo is black and sticky, or you have severe tummy or chest pain that started suddenly, call 999 or go to A&E.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_GASTRITIS, GUTS_GASTRITIS, GUTS_HP, GUTS_INDIGESTION],
    quiz: {
      question: "Does everyone with gastritis have symptoms?",
      options: [{ text: "No, some people have none", right: true }, { text: "Yes, always severe pain" }, { text: "Yes, always vomiting" }],
      why: "Some people may not have any symptoms, and are found to have it when they have tests for other symptoms.",
    },
  },
  {
    id: "gast-tests",
    kicker: "Tests",
    question: "Which tests might I have for gastritis?",
    hook: "A breath test, a poo sample or a blood test usually comes first. A camera test is for when symptoms do not settle.",
    short: "To find out what's causing gastritis symptoms, a GP might arrange a breath test for H pylori, a test on a sample of your poo, or a blood test. If gastritis is not getting better, or it's causing severe symptoms, you might be referred for a gastroscopy. Some medicines, such as acid-reducing tablets and recent antibiotics, can affect the results.",
    sections: [
      {
        heading: "At the GP",
        paragraphs: [
          "To find out what's causing gastritis symptoms, your doctor might arrange tests such as a breath test, a test on a sample of your poo, or a blood test.",
          "For the breath test, you'll be given a special drink and your breath is checked afterwards. The poo test looks for H pylori proteins, and it is as accurate as the breath test.",
        ],
      },
      {
        heading: "Medicines that affect the results",
        paragraphs: [
          "Tests for H pylori may not be accurate if you have had a course of antibiotics within a month of the test. Acid-reducing medicines called proton pump inhibitors should not have been taken in the last two weeks before testing.",
          "If you're referred for a test, you may need to stop taking omeprazole for a few days or weeks before you have it. Check with the staff at the hospital or clinic where the test is being done, and discuss with your doctor any medicine that might affect the result.",
        ],
      },
      {
        heading: "A look inside the stomach",
        paragraphs: [
          "If gastritis is not getting better, or it's causing severe symptoms, a GP might refer you to a specialist stomach doctor (gastroenterologist). They might do a gastroscopy, where a thin, flexible tube with a small camera inside goes into your mouth, or nose, and down into your stomach.",
          "Gastritis is confirmed by examining a small piece of the stomach lining under a microscope, called a biopsy. Looking at the lining through the camera can raise the suspicion of gastritis, and a biopsy can be taken during the test.",
          "A barium swallow and X-ray may be offered if people are unable to have an endoscopy. This test is less sensitive and specific than an endoscopy for diagnosing gastritis.",
        ],
      },
      {
        heading: "Having a gastroscopy",
        paragraphs: [
          "On the day, you'll need to stop eating at least 6 hours before the test, but you may be able to have small sips of water. You'll be offered a local anaesthetic spray to numb your throat, or sedation to help you relax.",
          "A gastroscopy should not be painful, and you can ask for it to be stopped at any time. It should take 15 to 45 minutes, but you might be at the hospital for around 4 hours.",
          "If you have sedation, you'll need someone to take you home and stay with you for 24 hours, and you should avoid driving and drinking alcohol for 24 hours. It can take up to 2 months to get the results from a biopsy.",
        ],
      },
    ],
    helps: [
      "Tell your doctor if you take a medicine that might affect the result, such as an acid-reducing tablet or a recent antibiotic.",
      "Check with the hospital or clinic whether to stop omeprazole before a test.",
      "Follow your appointment letter about when to stop eating and drinking before a gastroscopy.",
      "Bring along the details of any medicines you take to a gastroscopy.",
      "If you have sedation, arrange for someone to take you home and stay with you for 24 hours.",
    ],
    tryThisWeek: [
      "List your medicines for the GP.",
      "Ask if any need stopping first.",
      "Arrange a lift for a gastroscopy.",
    ],
    ask: "Do I need a test for H pylori, and do I need to stop any medicines first?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test does.",
      cards: [
        { id: "breath", front: "Breath test", when: "Often first, at the GP", back: "You're given a special drink and your breath is checked afterwards, to look for H pylori." },
        { id: "stool", front: "Poo test", when: "A small sample of your poo", back: "Looks for H pylori proteins. As accurate as the breath test, and can confirm the infection has cleared." },
        { id: "blood", front: "Blood test", when: "At the GP", back: "One of the tests a GP might arrange to find out what's causing gastritis symptoms." },
        { id: "gastroscopy", front: "Gastroscopy", when: "If it is not getting better", back: "A thin tube with a camera looks inside your stomach. It should not be painful and takes 15 to 45 minutes." },
        { id: "biopsy", front: "Biopsy", when: "During a gastroscopy", back: "A small piece of stomach lining is examined under a microscope. This is how gastritis is confirmed." },
        { id: "barium", front: "Barium swallow and X-ray", when: "If you cannot have an endoscopy", back: "Barium coats the stomach and can highlight any abnormality. Less sensitive than an endoscopy." },
      ],
    },
    sources: [NHS_GASTRITIS, GUTS_GASTRITIS, GUTS_HP, NHS_GASTROSCOPY, NHS_OMEPRAZOLE, CKS_DYSPEPSIA],
    quiz: {
      question: "How long before an H pylori test should proton pump inhibitors be stopped?",
      options: [{ text: "Two weeks before", right: true }, { text: "They never affect it" }, { text: "One hour before" }],
      why: "Acid-reducing medicines called proton pump inhibitors should not have been taken in the last two weeks before testing.",
    },
  },
  {
    id: "gast-treatment",
    kicker: "Treatment",
    question: "How is the cause of gastritis treated?",
    hook: "Clear the germ, change the painkiller, ease off alcohol. Treating the cause is what lets the lining heal.",
    short: "Treatment for gastritis depends on what's causing it. H pylori is treated with a combination of antibiotics and an acid-reducing tablet, and a painkiller or alcohol may need to be stopped or changed. Most people will recover from gastritis with treatment.",
    sections: [
      {
        heading: "It depends on the cause",
        paragraphs: [
          "Treatment for gastritis depends on what's causing it. You might need antibiotics, medicines to control stomach acid, or to talk to your doctor about stopping anti-inflammatory painkillers or aspirin and trying a different medicine, if possible.",
          "If gastritis is caused by alcohol, you might need to stop drinking alcohol. Most people will recover from gastritis with treatment.",
        ],
      },
      {
        heading: "Clearing H pylori",
        paragraphs: [
          "For H pylori, treatment is a combination of 3 or 4 different tablets: one cuts down the amount of acid in the stomach, and the others are antibiotics. The treatment will treat both the infection and the gastritis.",
          "It is the combination that is important in the success of treatment. Traditionally a 1-week course of three medicines was used, but a 2-week course is now recognised as being more effective.",
          "Where H pylori is found, it should always be treated to reduce the risk of complications.",
        ],
      },
      {
        heading: "Taking the whole course",
        paragraphs: [
          "Treatment is much more successful if the whole course of tablets is taken exactly as prescribed. Most people have no side effects, but some notice a strange taste in the mouth, a feeling of sickness or a headache.",
          "With one antibiotic that is often used, called metronidazole, you should avoid alcohol.",
        ],
      },
      {
        heading: "Checking it has worked",
        paragraphs: [
          "Treatment doesn't always get rid of the bacteria, so your doctor should always check to see if H pylori has gone. A breath test to check needs to be done at least one month after the course of treatment has finished.",
          "If the result is still positive, further treatment is possible. Once H pylori has been treated and cured, getting infected again is very unusual.",
        ],
      },
      {
        heading: "Other causes",
        paragraphs: [
          "If the gastritis has been caused by a medicine, ask your doctor or pharmacist if there are suitable alternatives for you to try. Lifestyle changes that can help include stopping smoking, stopping recreational drug use and reducing alcohol.",
          "If gastritis is not getting better, or it's causing severe symptoms, a GP might refer you to a specialist stomach doctor.",
        ],
      },
    ],
    helps: [
      "Take the whole course of tablets exactly as prescribed.",
      "Avoid alcohol if one of your antibiotics is metronidazole.",
      "Ask your doctor to check that H pylori has gone after treatment.",
      "If a medicine has caused your gastritis, ask your doctor or pharmacist about suitable alternatives.",
      "Ask your GP about services to help you stop smoking, stop recreational drug use or reduce alcohol.",
    ],
    tryThisWeek: [
      "Take every dose of the course.",
      "Avoid alcohol with metronidazole.",
      "Ask for a test after treatment.",
    ],
    ask: "What treatment is best for me, and how will we know it has worked?",
    interactive: {
      kind: "timeline",
      title: "Clearing H pylori, step by step",
      steps: [
        { id: "test", when: "First", title: "A positive test", points: ["A breath or poo test at the GP", "Where H pylori is found, it should always be treated"] },
        { id: "course", when: "1 to 2 weeks", title: "The course of tablets", points: ["An acid-reducing tablet plus antibiotics", "Take the whole course exactly as prescribed", "Avoid alcohol with metronidazole"] },
        { id: "settle", when: "Afterwards", title: "Symptoms settle", points: ["Sometimes symptoms take a little time to settle down"] },
        { id: "retest", when: "At least a month later", title: "Check it has gone", points: ["A breath test at least one month after treatment", "If it is still positive, further treatment is possible"] },
      ],
    },
    sources: [NHS_GASTRITIS, GUTS_GASTRITIS, GUTS_HP],
    quiz: {
      question: "Why take the whole course of H pylori tablets?",
      options: [{ text: "Treatment is much more successful that way", right: true }, { text: "It makes the tablets taste better" }, { text: "It does not matter" }],
      why: "Treatment is much more successful if the whole course of tablets is taken exactly as prescribed.",
    },
  },
  {
    id: "gast-medicines",
    kicker: "Medicines",
    question: "Which medicines reduce stomach acid, and how do I take them?",
    hook: "Antacids for quick relief, alginates as a protective layer, and proton pump inhibitors to turn the acid down.",
    short: "Medicines for gastritis symptoms include antacids, alginates, and acid-reducing medicines called proton pump inhibitors. Antacids give quick relief for a few hours but do not treat the underlying cause. A pharmacist can help with mild indigestion, and a GP can prescribe other medicines.",
    sections: [
      {
        heading: "Three kinds of medicine",
        paragraphs: [
          "Treatment may include medicines to control stomach acid and stop it rising into your food pipe, such as antacids, proton pump inhibitors or alginates. A pharmacist can recommend medicines for mild indigestion.",
          "Some indigestion medicines are taken after eating, and some are taken before eating. Check the information leaflet that comes with the medicine.",
        ],
      },
      {
        heading: "Antacids and alginates",
        paragraphs: [
          "Antacids counteract the acid in your stomach. They can quickly relieve your symptoms for a few hours, but they do not treat the underlying cause and long-term use is not recommended.",
          "Alginates form a thick protective layer on top of the stomach contents. They can be useful to take after meals and before going to bed, to reduce night-time symptoms.",
          "Antacids can affect how well other medicines work, so do not take other medicines within 2 to 4 hours of taking an antacid. Speak to a GP if you find you need to take antacids regularly.",
        ],
      },
      {
        heading: "Proton pump inhibitors",
        paragraphs: [
          "Proton pump inhibitors, or PPIs, reduce the amount of acid your stomach makes. They include omeprazole, lansoprazole, pantoprazole, rabeprazole and esomeprazole.",
          "Lansoprazole works best if you take it at least 30 minutes before a meal or snack. You should start to feel better in 2 to 3 days, but it may take up to 4 weeks to fully control your acid symptoms.",
          "Do not take omeprazole for longer than 2 weeks if you bought it without a prescription. See a GP if your symptoms get worse or do not get better.",
        ],
      },
      {
        heading: "Other medicines",
        paragraphs: [
          "H2 blockers, such as famotidine, also reduce the amount of acid made in your stomach, in a different way to PPIs. PPIs are generally used first, but if a PPI does not work for you or causes side effects, your doctor may prescribe an H2 blocker.",
          "Sucralfate forms a barrier to protect the stomach lining from acid and bile. Anti-sickness medicines can be prescribed for feeling sick.",
        ],
      },
      {
        heading: "Using them safely",
        paragraphs: [
          "If you've taken lansoprazole for a long time, speak to your doctor before you stop taking it. Stopping suddenly could make your stomach produce a lot more acid, and make your symptoms come back.",
          "Taking omeprazole can make it harder to notice symptoms of some serious conditions, such as stomach cancer. See a GP if you're worried.",
        ],
      },
    ],
    helps: [
      "Ask a pharmacist which medicine suits mild indigestion.",
      "Check the leaflet to see whether your medicine is taken before or after eating.",
      "Do not take other medicines within 2 to 4 hours of taking an antacid.",
      "Take lansoprazole at least 30 minutes before a meal or snack.",
      "See a GP if you need antacids regularly, or after 2 weeks of omeprazole bought without a prescription.",
      "Speak to your doctor before stopping a PPI you have taken for a long time.",
    ],
    tryThisWeek: [
      "Check your medicine's leaflet.",
      "Space antacids from other tablets.",
      "Take a PPI before a meal.",
    ],
    ask: "Which medicine should I take, and for how long?",
    interactive: {
      kind: "flip-cards",
      title: "Acid medicines, card by card",
      intro: "Turn each card to see what each medicine does.",
      cards: [
        { id: "antacid", front: "Antacids", when: "From pharmacies and shops", back: "Counteract stomach acid. Quick relief for a few hours, but they do not treat the cause." },
        { id: "alginate", front: "Alginates", when: "After meals and at bedtime", back: "Form a thick protective layer on top of the stomach contents, and help reduce night-time symptoms." },
        { id: "ppi", front: "Proton pump inhibitors", when: "Such as omeprazole or lansoprazole", back: "Reduce the amount of acid your stomach makes. Best taken before a meal." },
        { id: "h2", front: "H2 blockers", when: "If a PPI does not suit you", back: "Also reduce stomach acid, in a different way to PPIs. Famotidine is one." },
        { id: "sucralfate", front: "Sucralfate", when: "Prescribed by a doctor", back: "Forms a barrier that protects the stomach lining from acid and bile." },
      ],
    },
    sources: [NHS_GASTRITIS, GUTS_GASTRITIS, NHS_ANTACIDS, NHS_OMEPRAZOLE, NHS_LANSO_ABOUT, NHS_LANSO_HOW, NHS_LANSO_QA],
    quiz: {
      question: "Do antacids treat the cause of gastritis?",
      options: [{ text: "No, they relieve symptoms for a few hours", right: true }, { text: "Yes, they cure it" }, { text: "Yes, if taken for a year" }],
      why: "They can quickly relieve your symptoms for a few hours, but they do not treat the underlying cause and long-term use is not recommended.",
    },
  },
  {
    id: "gast-painkillers",
    kicker: "Medicines",
    question: "Which painkillers should I avoid with gastritis?",
    hook: "Anti-inflammatory painkillers and aspirin can inflame the stomach lining. Check before you take anything for pain.",
    short: "Anti-inflammatory painkillers such as ibuprofen, naproxen and diclofenac, and aspirin, can cause gastritis. Talk to your doctor if you regularly take them, and do not stop a prescribed medicine without advice. Paracetamol is another painkiller, but it is not suitable for everyone.",
    sections: [
      {
        heading: "Why these painkillers matter",
        paragraphs: [
          "Some medicines can cause gastritis, and it is common in people taking certain non-steroidal anti-inflammatory drugs, or NSAIDs, for pain relief. Examples include ibuprofen, naproxen, diclofenac or aspirin.",
          "Indigestion and stomach ache are common side effects of NSAIDs. They can sometimes cause stomach ulcers or bleeding inside your stomach, although this is rare.",
        ],
      },
      {
        heading: "Talk before you change anything",
        paragraphs: [
          "Talk to your doctor if you regularly take anti-inflammatory painkillers, such as ibuprofen, or aspirin. Treatment may mean stopping them and trying a different medicine, if possible.",
          "Do not stop taking any of these medicines without discussing it with your doctor first. If you're regularly taking low-dose aspirin, keep taking your medicine unless you're advised to stop.",
        ],
      },
      {
        heading: "Paracetamol",
        paragraphs: [
          "Ibuprofen can cause more side effects than paracetamol. If you can take paracetamol, it's a good idea to try it before taking ibuprofen.",
          "Most adults can take paracetamol, but it may not be suitable if you have a kidney or liver condition, or you're dependent on alcohol. For 500mg tablets, do not take more than 8 in 24 hours, and avoid taking other medicines that contain paracetamol at the same time.",
        ],
      },
      {
        heading: "Mixing medicines",
        paragraphs: [
          "Do not take ibuprofen at the same time as other NSAIDs, such as naproxen or aspirin. This can increase the risk of serious side effects like stomach ulcers.",
          "If you're taking Gaviscon for indigestion, you can take paracetamol, but avoid ibuprofen and aspirin as these can make your symptoms worse.",
          "Drinking a lot of alcohol while taking NSAIDs may increase the risk of side effects or irritate your stomach.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor if you regularly take anti-inflammatory painkillers (such as ibuprofen) or aspirin.",
      "Do not stop a prescribed medicine, including low-dose aspirin, unless you're advised to.",
      "If you can take paracetamol, try it before taking ibuprofen.",
      "Do not take ibuprofen or aspirin for indigestion unless it has been prescribed for you.",
      "Check the packet or leaflet, and speak to a pharmacist or doctor if you're not sure a painkiller is suitable.",
    ],
    tryThisWeek: [
      "Tell your GP about regular painkillers.",
      "Try paracetamol first, if you can.",
      "Ask a pharmacist before buying.",
    ],
    ask: "Which painkillers are safe for me?",
    interactive: {
      kind: "scenarios",
      title: "Pain relief with gastritis",
      scenarios: [
        {
          id: "headache",
          situation: "You have a headache and are being treated for gastritis.",
          options: [{ text: "Try paracetamol first, if you can take it", best: true }, { text: "Take ibuprofen and aspirin together" }],
          why: "If you can take paracetamol, it's a good idea to try it before taking ibuprofen. Mixing NSAIDs raises the risk of stomach ulcers.",
        },
        {
          id: "low-dose",
          situation: "You take low-dose aspirin for your heart and have indigestion.",
          options: [{ text: "Keep taking it and speak to your doctor", best: true }, { text: "Stop it straight away" }],
          why: "If you're regularly taking low-dose aspirin, keep taking your medicine unless you're advised to stop.",
        },
        {
          id: "naproxen",
          situation: "You take naproxen on prescription for joint pain.",
          options: [{ text: "Ask your doctor about alternatives", best: true }, { text: "Stop it without telling anyone" }, { text: "Add ibuprofen as well" }],
          why: "Do not stop it without discussing it with your doctor first. Ask if there are suitable alternatives for you to try.",
        },
        {
          id: "gaviscon",
          situation: "You're taking Gaviscon and need a painkiller.",
          options: [{ text: "Paracetamol", best: true }, { text: "Ibuprofen or aspirin" }],
          why: "You can take paracetamol with Gaviscon, but avoid ibuprofen and aspirin as these can make your symptoms worse.",
        },
      ],
    },
    sources: [NHS_GASTRITIS, GUTS_GASTRITIS, NHS_NSAIDS, NHS_IBUPROFEN, NHS_ASPIRIN, NHS_PARACETAMOL, NHS_GAVISCON, NHS_INDIGESTION],
    quiz: {
      question: "What should you do before stopping a prescribed anti-inflammatory painkiller?",
      options: [{ text: "Discuss it with your doctor first", right: true }, { text: "Nothing, just stop" }, { text: "Double the dose first" }],
      why: "Do not stop taking any of these medicines without discussing it with your doctor first.",
    },
  },
  {
    id: "gast-urgent",
    kicker: "Urgent help",
    question: "Which signs mean I need urgent help?",
    hook: "Blood in vomit, black sticky poo, or sudden severe pain. These mean 999 or A&E, not waiting.",
    short: "Call 999 or go to A&E if you're vomiting bright red blood or your vomit looks like ground coffee, your poo is black, sticky and extremely smelly, or you have severe tummy or chest pain that started suddenly. Do not drive to A&E. Other worrying symptoms need an urgent GP appointment or NHS 111.",
    sections: [
      {
        heading: "Call 999 or go to A&E",
        paragraphs: [
          "Call 999 or go to A&E if you're vomiting bright red blood or your vomit looks like ground coffee, your poo is black, sticky and extremely smelly, or you have severe tummy or chest pain that started suddenly.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance. Bring any medicines you take with you.",
        ],
      },
      {
        heading: "Why bleeding can happen",
        paragraphs: [
          "Very rarely, severe gastritis can cause bleeding, which may cause the stool to turn black. This is called melaena.",
          "Gastritis is one of the common causes of vomiting blood. Vomit can vary from bright red to brown or black, and it may look like coffee granules.",
          "You should always get medical help if you are vomiting blood. Call 999 or go to A&E if you have vomited blood and feel generally unwell, confused, faint or dizzy, have rapid or shallow breathing, have cold, clammy, pale skin, have tummy pain, or have black poo.",
        ],
      },
      {
        heading: "An urgent GP appointment or NHS 111",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have symptoms of gastritis and you've lost your appetite, you feel full after a very small meal, or you've recently lost weight without trying to.",
          "The same applies if it feels like you have a lump in your tummy, it's painful or difficult to swallow, or you keep being sick. These can be serious, so they need to be checked quickly.",
        ],
      },
      {
        heading: "Painkillers and bleeding",
        paragraphs: [
          "Anti-inflammatory painkillers can sometimes cause stomach ulcers or bleeding inside your stomach. Signs include stomach pain, shortness of breath, pale skin, vomiting blood, or poo that's black, sticky and tar-like.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E if you're vomiting bright red blood or your vomit looks like ground coffee.",
      "Call 999 or go to A&E if your poo is black, sticky and extremely smelly.",
      "Call 999 or go to A&E if you have severe tummy or chest pain that started suddenly.",
      "Do not drive to A&E: ask someone to drive you or call 999 for an ambulance, and bring any medicines you take.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you've lost weight without trying, it's difficult to swallow or you keep being sick.",
    ],
    tryThisWeek: [
      "Know the three signs that mean 999.",
      "Do not drive yourself to A&E.",
      "Bring your medicines with you.",
    ],
    ask: "Which symptoms mean I should get urgent help?",
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        {
          id: "coffee",
          situation: "Your vomit looks like ground coffee.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait to see if it happens again" }, { text: "Book a routine GP appointment" }],
          why: "Call 999 or go to A&E if you're vomiting bright red blood or your vomit looks like ground coffee.",
        },
        {
          id: "black",
          situation: "Your poo is black, sticky and extremely smelly.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Take an antacid and wait" }],
          why: "Call 999 or go to A&E if your poo is black, sticky and extremely smelly.",
        },
        {
          id: "drive",
          situation: "You need to go to A&E and your car is outside.",
          options: [{ text: "Ask someone to drive you, or call 999", best: true }, { text: "Drive yourself" }],
          why: "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        },
        {
          id: "appetite",
          situation: "You've lost weight without trying and feel full after a small meal.",
          options: [{ text: "Ask for an urgent GP appointment or call 111", best: true }, { text: "Leave it for a few months" }],
          why: "These can be serious, so they need to be checked quickly.",
        },
      ],
    },
    sources: [NHS_GASTRITIS, NHS_VOMITING_BLOOD, GUTS_GASTRITIS, NHS_NSAIDS],
    quiz: {
      question: "What should you do if your vomit looks like ground coffee?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait until the morning" }, { text: "Take an antacid" }],
      why: "Call 999 or go to A&E if you're vomiting bright red blood or your vomit looks like ground coffee",
    },
  },
  {
    id: "gast-food-drink",
    kicker: "Living well",
    question: "What should I eat and drink with gastritis?",
    hook: "Food does not cure the inflammation, but some choices ease the symptoms while treatment works. Alcohol matters most.",
    short: "Changing your diet does not generally treat the inflammation, but cutting down on some foods and drinks might ease symptoms while treatment works. The NHS advises not drinking alcohol, cutting down on caffeine, and avoiding acidic, fizzy, spicy or fatty food and drink. Smaller, more frequent meals might be easier to manage.",
    sections: [
      {
        heading: "Food eases symptoms, not the cause",
        paragraphs: [
          "Altering your diet doesn't generally treat the inflammation. Reducing spicy foods, caffeine, fizzy drinks and fried foods might reduce symptoms of indigestion while your medical treatment is working.",
          "Eating smaller meals more often can prevent weight loss, and might be easier to manage if eating is a problem. If you have the rare eosinophilic type of gastritis, do not change your diet without professional advice.",
        ],
      },
      {
        heading: "What the NHS suggests",
        paragraphs: [
          "Reduce the amount of drinks you have that contain caffeine, such as tea, coffee, cola and energy drinks. Do not have food or drink that's acidic, such as orange juice, or fizzy, spicy or fatty.",
          "Do not eat 3 to 4 hours before going to bed. Losing weight if you're overweight can also help ease the symptoms.",
        ],
      },
      {
        heading: "Alcohol and the stomach",
        paragraphs: [
          "Alcohol can harm the stomach lining. It causes inflammation, reduces the ability to repair the damage, and alters the amount of acid that is produced.",
          "To help ease gastritis symptoms, the NHS advises not to drink alcohol. If gastritis is caused by alcohol, treatment may mean stopping drinking alcohol.",
          "If you're taking omeprazole, it's best not to drink alcohol, because it can increase the amount of acid in your stomach and make your symptoms worse.",
        ],
      },
      {
        heading: "Cutting down",
        paragraphs: [
          "To keep health risks from alcohol low, men and women are advised not to drink more than 14 units a week on a regular basis, spread over 3 or more days. If you want to cut down, try to have several drink-free days each week.",
          "Tips that help include setting a limit before you start, choosing smaller or lower-strength drinks, and alternating alcoholic drinks with water. Inflammation in the digestive tract is one of the effects of alcohol that can be reversed.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "If you have become physically dependent on alcohol and need to stop drinking completely, stopping overnight could be harmful. Get advice about this, and about any medicine you may need to do it safely.",
          "A GP is a good place to start. Drinkline, the national alcohol helpline, is free and confidential on 0300 123 1110.",
        ],
      },
    ],
    helps: [
      "Reduce the amount of drinks you have that contain caffeine, such as tea, coffee, cola and energy drinks.",
      "Do not have food or drink that's acidic (such as orange juice), fizzy, spicy or fatty.",
      "Do not eat 3 to 4 hours before going to bed.",
      "Do not drink alcohol while you're easing gastritis symptoms.",
      "Try smaller meals more often if eating is a problem.",
      "If you are physically dependent on alcohol, get advice before stopping, as stopping overnight could be harmful.",
    ],
    tryThisWeek: [
      "Cut down on one caffeinated drink.",
      "Stop eating 3 to 4 hours before bed.",
      "Try smaller, more frequent meals.",
    ],
    ask: "Is there anything I should avoid eating or drinking while my stomach heals?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food and drink choices",
      scenarios: [
        {
          id: "coffee",
          situation: "You usually have several coffees a day.",
          options: [{ text: "Cut down on caffeine", best: true }, { text: "Switch to energy drinks" }],
          why: "Reduce the amount of drinks you have that contain caffeine, such as tea, coffee, cola and energy drinks.",
        },
        {
          id: "late-meal",
          situation: "You often eat a big meal just before bed.",
          options: [{ text: "Eat 3 to 4 hours before bed instead", best: true }, { text: "Eat even later" }],
          why: "Do not eat 3 to 4 hours before going to bed.",
        },
        {
          id: "juice",
          situation: "You fancy a glass of orange juice with breakfast.",
          options: [{ text: "Choose a drink that is not acidic or fizzy", best: true }, { text: "Have a large glass" }],
          why: "Do not have food or drink that's acidic, such as orange juice, or fizzy, spicy or fatty.",
        },
        {
          id: "stopping",
          situation: "You drink heavily every day and want to stop overnight.",
          options: [{ text: "Get advice from a GP first", best: true }, { text: "Stop suddenly on your own" }],
          why: "If you have become physically dependent on alcohol, stopping overnight could be harmful.",
        },
      ],
    },
    sources: [NHS_GASTRITIS, GUTS_GASTRITIS, NHS_OMEPRAZOLE, GUTS_ALCOHOL, NHS_UNITS, NHS_CUTTING_DOWN, NHS_ALCOHOL_SUPPORT],
    quiz: {
      question: "Does changing your diet cure the inflammation of gastritis?",
      options: [{ text: "No, but it might ease symptoms", right: true }, { text: "Yes, within a day" }, { text: "Yes, if you cut out all fat" }],
      why: "Altering your diet doesn't generally treat the inflammation.",
    },
  },
  {
    id: "gast-smoking",
    kicker: "Living well",
    question: "How does smoking affect gastritis?",
    hook: "Smoking is one of the things that can inflame the stomach lining. Free NHS support makes stopping more likely to stick.",
    short: "Smoking cigarettes is one of the lifestyle factors that can cause gastritis, and the NHS advises not smoking to help ease the symptoms. Stomach ulcers are also more common in people who smoke. Free NHS stop smoking services can improve your chances of quitting for good.",
    sections: [
      {
        heading: "Smoking and the stomach lining",
        paragraphs: [
          "Lifestyle factors can also cause gastritis, typically drinking alcohol above the recommended guidelines, recreational drug use and smoking cigarettes.",
          "H pylori is the commonest cause of gastritis, but there are other causes, and smoking is one of them.",
        ],
      },
      {
        heading: "Easing symptoms",
        paragraphs: [
          "If you've been told you have gastritis, there are some things you can do to help ease your symptoms, such as indigestion. Not smoking is one of them.",
          "Stomach ulcers are also more common in people who smoke. If it's not treated, gastritis may get worse and cause a stomach ulcer.",
        ],
      },
      {
        heading: "Part of the treatment",
        paragraphs: [
          "Lifestyle changes that can help to treat gastritis include stopping smoking. These changes can be difficult to make alone, but there is help available from your GP, and people who have help are often more successful.",
          "When you quit smoking, you'll begin to see almost immediate improvements to your health. It's never too late to quit, and it's easier to stop smoking with the right support.",
        ],
      },
      {
        heading: "Free NHS support",
        paragraphs: [
          "Local stop smoking services are free and can improve your chances of quitting for good. You'll normally be offered a one-to-one appointment with an adviser, and many areas also offer group and drop-in services.",
          "They make it easy and affordable to get stop smoking treatments, such as nicotine replacement therapy and stop smoking tablets. Stop smoking services usually offer support for up to 12 weeks.",
          "Your GP, pharmacist or health visitor can refer you. In England, you can call the free Smokefree National Helpline on 0300 123 1044.",
        ],
      },
    ],
    helps: [
      "Do not smoke, to help ease gastritis symptoms.",
      "Ask your GP about help to stop smoking: people who have help are often more successful.",
      "Contact your local stop smoking service, which is free.",
      "Ask about nicotine replacement therapy or stop smoking tablets.",
      "In England, call the free Smokefree National Helpline on 0300 123 1044.",
    ],
    tryThisWeek: [
      "Ask your GP about help to quit.",
      "Contact a local stop smoking service.",
      "Call the Smokefree helpline.",
    ],
    ask: "What help is available to stop smoking?",
    interactive: {
      kind: "timeline",
      title: "What happens when you quit",
      steps: [
        { id: "m20", when: "After 20 minutes", title: "Pulse settling", points: ["Your pulse rate will already be starting to return to normal"] },
        { id: "h8", when: "After 8 hours", title: "Oxygen recovering", points: ["The carbon monoxide level in your blood will have reduced by half"] },
        { id: "h48", when: "After 48 hours", title: "Taste and smell", points: ["Carbon monoxide levels have dropped to that of a non-smoker", "Your senses of taste and smell are improving"] },
        { id: "h72", when: "After 72 hours", title: "Easier breathing", points: ["Breathing may feel easier", "Your energy will be increasing"] },
        { id: "w12", when: "After 2 to 12 weeks", title: "Better circulation", points: ["Blood pumps through to your heart and muscles much better"] },
        { id: "y1", when: "After 1 year", title: "Heart risk halved", points: ["Your risk of heart attack will have halved compared with a smoker's"] },
      ],
    },
    sources: [NHS_GASTRITIS, GUTS_GASTRITIS, GUTS_HP, NHS_ULCER, NHS_STOP_SMOKING, NHS_QUIT],
    quiz: {
      question: "How long do NHS stop smoking services usually offer support?",
      options: [{ text: "Up to 12 weeks", right: true }, { text: "A single day" }, { text: "Only one phone call" }],
      why: "Stop smoking services usually offer support for up to 12 weeks.",
    },
  },
  {
    id: "gast-long-term",
    kicker: "Long term",
    question: "What does long-term gastritis mean for me?",
    hook: "Most people recover. For those who don't, it means reviews, a check on vitamin B12, and knowing which changes to report.",
    short: "Most people recover from gastritis with treatment, but some keep having symptoms and inflammation, which is called chronic gastritis. Autoimmune gastritis can lead to a lack of vitamin B12, which is usually treated with injections. If medicines such as PPIs are needed longer term, your GP may monitor you.",
    sections: [
      {
        heading: "When it does not clear",
        paragraphs: [
          "Most people will recover from gastritis with treatment, but others will continue to have symptoms and continuing inflammation. This is called chronic gastritis.",
          "If medicines such as PPIs are needed longer term, you may be monitored by your GP. If you take lansoprazole for longer than 1 year, your doctor will regularly check your health to see if you should carry on taking it.",
        ],
      },
      {
        heading: "Autoimmune gastritis and vitamin B12",
        paragraphs: [
          "In autoimmune gastritis, the body's cells attack the stomach lining. It destroys a protein called intrinsic factor, which helps the body absorb vitamin B12 from food, and the lack of it leads to a condition called pernicious anaemia.",
          "Pernicious anaemia is the most common cause of vitamin B12 deficiency in the UK. Autoimmune gastritis is more common in women and older people, and in people with other autoimmune conditions, such as autoimmune thyroid disease, diabetes and coeliac disease.",
        ],
      },
      {
        heading: "Signs of low vitamin B12",
        paragraphs: [
          "A lack of vitamin B12 can cause extreme tiredness, a lack of energy, pins and needles, a sore and red tongue, mouth ulcers, muscle weakness and problems with memory. See a GP if you think you may have a vitamin B12 deficiency.",
          "It's important for it to be diagnosed and treated as soon as possible. Although many of the symptoms improve with treatment, some problems caused by the condition can be irreversible.",
          "If the deficiency is not caused by a lack of vitamin B12 in your diet, you'll usually need an injection every 2 to 3 months for the rest of your life.",
        ],
      },
      {
        heading: "Long-term acid-reducing medicines",
        paragraphs: [
          "Taking lansoprazole for more than a year may increase your chances of certain side effects, including bone fractures, gut infections and vitamin B12 deficiency.",
          "PPIs, like most medicines, can have side effects, so it's best to take them for the shortest time possible.",
        ],
      },
      {
        heading: "A small long-term risk",
        paragraphs: [
          "People with autoimmune atrophic gastritis or a long-term H pylori infection can have a small risk of developing stomach cancer in the future. It must be remembered that most people will not develop cancer.",
          "If you have symptoms such as being sick, difficulty swallowing, weight loss, pain or blood in your poo, contact your GP.",
        ],
      },
    ],
    helps: [
      "Ask your doctor whether you will need monitoring in the future.",
      "See a GP if you think you may have a vitamin B12 deficiency, such as extreme tiredness or pins and needles.",
      "If you take a PPI for longer than a year, expect your doctor to check regularly whether you should carry on.",
      "Contact your GP if you have symptoms such as being sick, difficulty swallowing, weight loss, pain or blood in your poo.",
      "Ask your doctor about taking a PPI for the shortest time possible.",
    ],
    tryThisWeek: [
      "Ask about future monitoring.",
      "Report tiredness or pins and needles.",
      "Review long-term PPIs with your GP.",
    ],
    ask: "Will I need monitoring in the future?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your GP about",
      intro: "Tick any you have noticed. Some come from a lack of vitamin B12; others need checking quickly.",
      signs: [
        "Extreme tiredness or a lack of energy",
        "Pins and needles",
        "A sore and red tongue",
        "Mouth ulcers",
        "Muscle weakness",
        "Problems with memory",
        "Being sick",
        "Difficulty swallowing",
        "Losing weight without trying to",
        "Blood in your poo",
      ],
      after: "Tell your GP about any you have ticked. Some problems from a lack of vitamin B12 can be irreversible, so it's important to get checked as soon as possible.",
      copyHeading: "Signs to tell my GP",
    },
    sources: [GUTS_GASTRITIS, NHS_B12, NHS_B12_CAUSES, NHS_B12_TREATMENT, NHS_LANSO_QA],
    quiz: {
      question: "Which vitamin can autoimmune gastritis affect?",
      options: [{ text: "Vitamin B12", right: true }, { text: "Vitamin C" }, { text: "Vitamin D" }],
      why: "It destroys a protein called intrinsic factor, which helps the body absorb vitamin B12 from food, and the lack of it leads to a condition called pernicious anaemia.",
    },
  },
  {
    id: "gast-coming-back",
    kicker: "Living well",
    question: "How can I stop gastritis coming back?",
    hook: "Clear the cause and keep it cleared: confirm the germ has gone, review painkillers, and keep alcohol and smoking down.",
    short: "The best protection is dealing with whatever caused it. Check that H pylori has gone after treatment, review anti-inflammatory painkillers with your doctor, and keep alcohol and smoking down. If symptoms come back, see your GP rather than carrying on with over-the-counter medicines.",
    sections: [
      {
        heading: "Make sure H pylori has gone",
        paragraphs: [
          "Treatment for H pylori doesn't always work to get rid of the bacteria, so your doctor should always check to see if it has gone. If the result is still positive, further treatment is possible.",
          "Once H pylori has been treated and cured, getting infected again is very unusual. Catching the infection as an adult is very rare.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "Talk to your doctor if you regularly take anti-inflammatory painkillers, such as ibuprofen, or aspirin. If a medicine caused your gastritis, ask your doctor or pharmacist if there are suitable alternatives.",
          "To reduce the risk of side effects from ibuprofen, take the smallest dose you need for the shortest time you need it. Do not take ibuprofen tablets for more than 10 days unless advised to by a doctor.",
        ],
      },
      {
        heading: "Everyday habits",
        paragraphs: [
          "Things that can help ease symptoms include cutting down on caffeine, losing weight if you're overweight, not eating 3 to 4 hours before bed, and not drinking alcohol or smoking.",
          "For stomach ulcers, the NHS says stress, anxiety and depression can make symptoms worse. Taking steps to manage stress is one of the things that can reduce the risk of an ulcer coming back.",
        ],
      },
      {
        heading: "If symptoms return",
        paragraphs: [
          "See your GP if indigestion lasts longer than three weeks and changing lifestyle factors has not worked, symptoms are severe, or you have noticed blood in your poo or vomit. Do not continue to treat indigestion with over-the-counter medicines without talking to your doctor.",
          "Clearing H pylori does not always mean indigestion stops. Some people have both H pylori and functional dyspepsia, and they won't feel better just by treating the infection.",
        ],
      },
    ],
    helps: [
      "Ask your doctor to check that H pylori has gone after treatment.",
      "Review any regular anti-inflammatory painkillers or aspirin with your doctor.",
      "Take the smallest dose of ibuprofen you need, for the shortest time you need it.",
      "Cut down on caffeine, and do not drink alcohol or smoke.",
      "Take steps to manage stress.",
      "See your GP if indigestion lasts longer than three weeks, rather than carrying on with over-the-counter medicines.",
    ],
    tryThisWeek: [
      "Ask for a re-test after treatment.",
      "Review regular painkillers.",
      "See a GP if it lasts 3 weeks.",
    ],
    ask: "What can I do to stop my gastritis coming back?",
    interactive: {
      kind: "risk-check",
      title: "What could bring it back?",
      intro: "Tick any that apply. Each one is something you can talk to your GP or pharmacist about.",
      items: [
        { id: "retest", label: "H pylori not re-tested", note: "Treatment doesn't always work. Your doctor should always check to see if it has gone.", changeable: true },
        { id: "painkillers", label: "Regular anti-inflammatory painkillers", note: "Talk to your doctor if you regularly take ibuprofen or aspirin. Do not stop a prescribed one alone.", changeable: true },
        { id: "alcohol", label: "Drinking alcohol", note: "Alcohol can harm the stomach lining. The NHS advises not drinking it to ease symptoms.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Smoking cigarettes is one of the lifestyle factors that can cause gastritis.", changeable: true },
        { id: "caffeine", label: "Lots of caffeine", note: "Reduce drinks that contain caffeine, such as tea, coffee, cola and energy drinks.", changeable: true },
        { id: "stress", label: "Stress", note: "Taking steps to manage stress can reduce the risk of a stomach ulcer coming back.", changeable: true },
      ],
    },
    sources: [NHS_GASTRITIS, GUTS_GASTRITIS, GUTS_HP, GUTS_INDIGESTION, NHS_ULCER, NHS_IBUPROFEN],
    quiz: {
      question: "Once H pylori has been cured, how likely is it to come back?",
      options: [{ text: "Getting infected again is very unusual", right: true }, { text: "It always comes back" }, { text: "It returns within a month" }],
      why: "Once H pylori has been treated and cured, getting infected again is very unusual.",
    },
  },
];
