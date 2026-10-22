import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Stomach ulcers page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS website,
// NHS inform (Scotland) and Guts UK, with NICE's Clinical Knowledge Summary on proven peptic ulcer for the
// healing times and the chance of an ulcer coming back. Paragraphs write "H pylori" without a full stop, as
// the NHS page does. Emergency wording follows the NHS Stomach ulcer page exactly. General information only;
// it never replaces what a person's own GP, pharmacist or hospital team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const inform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/${path}` });
const gutsUk = (label: string, path: string): LearnSource => ({ label: `Guts UK: ${label}`, url: `https://gutscharity.org.uk/advice-and-information/${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE CKS: ${label}`, url: `https://cks.nice.org.uk/topics/dyspepsia-proven-peptic-ulcer/${path}` });

const NHS_ULCER = nhs("Stomach ulcer", "conditions/stomach-ulcer/");
const NHS_GASTROSCOPY = nhs("Gastroscopy", "tests-and-treatments/gastroscopy/");
const NHS_VOMITING_BLOOD = nhs("Vomiting blood", "symptoms/vomiting-blood/");
const NHS_PERITONITIS = nhs("Peritonitis", "conditions/peritonitis/");
const NHS_ANAEMIA = nhs("Iron deficiency anaemia", "conditions/iron-deficiency-anaemia/");
const NHS_NSAIDS = nhs("NSAIDs", "medicines/nsaids/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_NAPROXEN = nhs("Naproxen", "medicines/naproxen/");
const NHS_ASPIRIN = nhs("Aspirin", "medicines/aspirin/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_OMEPRAZOLE = nhs("Omeprazole", "medicines/omeprazole/");
const NHS_LANSO_ABOUT = nhs("About lansoprazole", "medicines/lansoprazole/about-lansoprazole/");
const NHS_LANSO_HOW = nhs("How and when to take lansoprazole", "medicines/lansoprazole/how-and-when-to-take-lansoprazole/");
const NHS_LANSO_QA = nhs("Common questions about lansoprazole", "medicines/lansoprazole/common-questions-about-lansoprazole/");
const NHS_CLARI_ABOUT = nhs("About clarithromycin", "medicines/clarithromycin/about-clarithromycin/");
const NHS_CLARI_HOW = nhs("How and when to take clarithromycin", "medicines/clarithromycin/how-and-when-to-take-clarithromycin/");
const NHS_CLARI_SIDE = nhs("Side effects of clarithromycin", "medicines/clarithromycin/side-effects-of-clarithromycin/");
const NHS_METRO_QA = nhs("Common questions about metronidazole", "medicines/metronidazole/common-questions-about-metronidazole/");
const NHS_STOP_SMOKING = nhs("NHS stop smoking services help you quit", "live-well/quit-smoking/nhs-stop-smoking-services-help-you-quit/");
const NHS_UNITS = nhs("Alcohol units", "live-well/alcohol-advice/calculating-alcohol-units/");
const NHS_CUTTING_DOWN = nhs("Tips on cutting down on alcohol", "live-well/alcohol-advice/tips-on-cutting-down-alcohol/");

const INFORM_ULCER = inform("Stomach ulcer", "illnesses-and-conditions/stomach-liver-and-gastrointestinal-tract/stomach-ulcer/");

const GUTS_HP = gutsUk("Helicobacter pylori (H. pylori)", "conditions/helicobacter-pylori/");
const GUTS_INDIGESTION = gutsUk("Indigestion", "symptoms/indigestion/");
const GUTS_GASTRITIS = gutsUk("Gastritis", "conditions/gastritis/");
const GUTS_ALCOHOL = gutsUk("Alcohol and the digestive system", "health-and-lifestyle/alcohol-the-digestive-system/");

const CKS_SUMMARY = cks("Dyspepsia - proven peptic ulcer", "");
const CKS_RISK = cks("Dyspepsia - proven peptic ulcer: risk factors", "background-information/risk-factors/");
const CKS_PROGNOSIS = cks("Dyspepsia - proven peptic ulcer: prognosis", "background-information/prognosis/");

export const ulcerAnswers: LearnArticle[] = [
  {
    id: "su-what-it-is",
    kicker: "Understanding",
    question: "What is a stomach ulcer?",
    hook: "An open sore in the lining of the stomach or the first part of the bowel. Serious if left untreated, but most people recover with treatment.",
    short: "Stomach ulcers, also called peptic or gastric ulcers, are open sores in the lining of the stomach. Ulcers can also form just beyond the stomach, in the first part of the intestine, and these are called duodenal ulcers. They can be serious, but most people recover with treatment.",
    sections: [
      {
        heading: "A sore in the lining",
        paragraphs: [
          "Stomach ulcers (also called peptic or gastric ulcers) are sores in the stomach. They can be serious, but most people recover with treatment.",
          "Stomach ulcers are open sores that develop on the lining of the stomach. Ulcers can also occur in part of the intestine just beyond the stomach, and these are called duodenal ulcers. Stomach and duodenal ulcers are sometimes called peptic ulcers.",
        ],
      },
      {
        heading: "When the stomach's defence breaks down",
        paragraphs: [
          "Stomach ulcers occur when the layer protecting the stomach lining from stomach acid breaks down. This allows the stomach lining to become damaged.",
          "Normally the mucus lining the stomach protects it from digestive juices such as stomach acid. Ulcers are usually caused by H pylori bacteria or by anti-inflammatory painkillers, which can break down the stomach's defence against the acid it produces to digest food.",
        ],
      },
      {
        heading: "How common they are",
        paragraphs: [
          "Ulcers of the stomach or the first part of the small bowel were once a common cause of indigestion. Now, they happen less often. About 8 in 100 people with indigestion have ulcers.",
          "Most of these ulcers are peptic ulcers, which means that they are mainly caused by acid. They are the second most common cause of indigestion.",
        ],
      },
      {
        heading: "Why treatment matters",
        paragraphs: [
          "It's important to get treatment for a stomach ulcer. If not treated, a stomach ulcer can lead to serious problems that may be life-threatening.",
          "These include bleeding from the stomach or intestine, a lack of iron caused by bleeding, and a hole in the stomach that can cause a serious infection of the inner lining of the tummy. Complications are rare, but can be very serious.",
        ],
      },
    ],
    helps: [
      "See a GP if you have indigestion that does not go away with treatment, or your tummy pain keeps coming back.",
      "Get treatment for a stomach ulcer, as an untreated ulcer can lead to serious problems.",
      "Ask whether you have been tested for H pylori: people with ulcers should be tested, and treated if it is present.",
      "Do not stop taking a medicine without speaking to your doctor first, and ask whether any prescribed medicines may affect your stomach.",
    ],
    tryThisWeek: [
      "See a GP if pain keeps coming back.",
      "Ask about an H pylori test.",
      "Ask if your medicines affect your stomach.",
    ],
    ask: "Is my ulcer in my stomach or my duodenum, and what caused it?",
    interactive: {
      kind: "flip-cards",
      title: "The words, card by card",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "stomach", front: "Stomach ulcer", when: "Also called a gastric ulcer", back: "An open sore that develops on the lining of the stomach." },
        { id: "duodenal", front: "Duodenal ulcer", when: "Just beyond the stomach", back: "An ulcer in the first part of the small bowel, called the duodenum." },
        { id: "peptic", front: "Peptic ulcer", when: "Covers both", back: "Stomach and duodenal ulcers. Peptic means they are mainly caused by acid." },
        { id: "gastritis", front: "Gastritis", when: "Not the same as an ulcer", back: "Inflammation of the lining of the stomach. H pylori is the commonest cause." },
        { id: "perforation", front: "Perforation", when: "A rare complication", back: "The stomach lining splits open at the site of the ulcer." },
      ],
    },
    sources: [NHS_ULCER, INFORM_ULCER, GUTS_INDIGESTION, GUTS_GASTRITIS, GUTS_HP],
    quiz: {
      question: "Do most people with a stomach ulcer recover?",
      options: [{ text: "Yes, most people recover with treatment", right: true }, { text: "No, ulcers never heal" }, { text: "Only after surgery" }],
      why: "They can be serious, but most people recover with treatment.",
    },
  },
  {
    id: "su-causes",
    kicker: "Understanding",
    question: "What causes stomach ulcers?",
    hook: "Two main causes: a common stomach germ, and anti-inflammatory painkillers. Smoking and getting older add to the risk.",
    short: "The main causes of stomach ulcers are infection with H pylori bacteria and regular use of anti-inflammatory painkillers (NSAIDs), such as ibuprofen. Stomach ulcers are also more common in people who smoke, and the risk increases as you get older.",
    sections: [
      {
        heading: "The two main causes",
        paragraphs: [
          "The main causes of stomach ulcers are infection with helicobacter pylori (H pylori) bacteria, and regular use of anti-inflammatory painkillers (NSAIDs), such as ibuprofen.",
          "Stomach ulcers are also more common in people who smoke, and the risk of getting one increases as you get older.",
        ],
      },
      {
        heading: "H pylori, a common germ",
        paragraphs: [
          "H pylori are a group of bacteria that live in the sticky mucus that lines the stomach. Up to 2 in 5 people in the UK have H pylori in their stomach. It does not cause any problems for 8 to 9 out of 10 people.",
          "The bacteria can irritate the stomach lining and make it more vulnerable to damage from stomach acid. About 3 in 20 people with H pylori have ulcers.",
          "People who have H pylori almost always catch it in childhood, usually within families. It stays in the stomach unless it is treated with specific antibiotics. It is becoming less common in the UK.",
        ],
      },
      {
        heading: "Anti-inflammatory painkillers",
        paragraphs: [
          "NSAIDs are medicines widely used to treat pain, a high temperature and inflammation. Commonly used NSAIDs include ibuprofen, aspirin, naproxen and diclofenac.",
          "Many people take NSAIDs without having any side effects. But there's always a risk they could cause problems such as stomach ulcers, particularly if taken for a long time or at high doses. Today, ulcers occur more often in people who take these medicines.",
        ],
      },
      {
        heading: "Other medicines, and other causes",
        paragraphs: [
          "Other medicines prescribed for other conditions can also cause ulcers. In some people with ulcers, no cause can be found. Do not stop taking your medicine without speaking to your doctor first.",
          "There's little evidence that stomach ulcers are caused by spicy foods, stress or alcohol. But these can make the symptoms worse.",
        ],
      },
    ],
    helps: [
      "Ask your doctor whether any prescribed medicines you are taking may affect your stomach.",
      "Do not stop taking your medicine without speaking to your doctor first.",
      "Do not take anti-inflammatory painkillers, such as ibuprofen, without speaking to a doctor first.",
      "Do not smoke.",
      "If you have an ulcer, ask to be tested for H pylori, so it can be treated if it is present.",
    ],
    tryThisWeek: [
      "Ask if your medicines affect your stomach.",
      "Check with a doctor before ibuprofen.",
      "Ask to be tested for H pylori.",
    ],
    ask: "Is my ulcer caused by H pylori, a medicine, or something else?",
    interactive: {
      kind: "risk-check",
      title: "What makes an ulcer more likely?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "hp", label: "H pylori infection", note: "Up to 2 in 5 people in the UK have it. Specific antibiotics can clear it.", changeable: true },
        { id: "nsaids", label: "Regular anti-inflammatory painkillers", note: "Such as ibuprofen, aspirin or naproxen. Do not stop a prescribed medicine without speaking to your doctor.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Stomach ulcers are more common in people who smoke.", changeable: true },
        { id: "other-meds", label: "Other prescribed medicines", note: "Ask your doctor whether any prescribed medicines may affect your stomach.", changeable: true },
        { id: "age", label: "Getting older", note: "The risk of getting a stomach ulcer increases as you get older.", changeable: false },
      ],
    },
    sources: [NHS_ULCER, GUTS_HP, INFORM_ULCER, GUTS_INDIGESTION],
    quiz: {
      question: "What are the two main causes of stomach ulcers?",
      options: [{ text: "H pylori and anti-inflammatory painkillers", right: true }, { text: "Spicy food and stress" }, { text: "Coffee and chocolate" }],
      why: "The main causes of stomach ulcers are infection with helicobacter pylori (H pylori) bacteria, and regular use of anti-inflammatory painkillers (NSAIDs), such as ibuprofen.",
    },
  },
  {
    id: "su-symptoms",
    kicker: "Symptoms",
    question: "What does a stomach ulcer feel like?",
    hook: "Usually a burning pain in the upper tummy, often worse at night. Some ulcers cause no pain at all.",
    short: "The main symptom is tummy pain, usually in the upper part of the tummy, which may feel like burning and is often worse at night. Indigestion, heartburn, bloating and feeling or being sick are other symptoms. Some ulcers are not painful and are only noticed when a complication develops.",
    sections: [
      {
        heading: "The main symptom",
        paragraphs: [
          "The main symptom of a stomach ulcer is tummy pain. The pain is usually in the upper part of your tummy, may feel like burning, and is often worse at night.",
          "It is often a burning or gnawing pain in the centre of the tummy. The pain can travel out from the middle of your tummy up to your neck, down to your belly button or through to your back.",
        ],
      },
      {
        heading: "When the pain comes",
        paragraphs: [
          "The pain can last from a few minutes to a few hours. It often starts within a few hours of eating, and can cause you to wake up during the night.",
          "Taking antacids may relieve the pain for a while, but it will keep coming back if the ulcer isn't treated.",
        ],
      },
      {
        heading: "Other symptoms",
        paragraphs: [
          "Other symptoms of a stomach ulcer include indigestion, heartburn, bloating and feeling or being sick.",
          "Less common symptoms include loss of appetite and weight loss. Some people also find they burp or become bloated after eating fatty foods.",
        ],
      },
      {
        heading: "Not always painful",
        paragraphs: [
          "Not all stomach ulcers are painful. Some are only noticed when a complication develops, such as bleeding from the ulcer.",
          "Tummy pain is common and can be caused by lots of different things. Indigestion has many causes, and a serious condition is rarely the cause.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if you have indigestion that does not go away with treatment, or your tummy pain keeps coming back.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you have symptoms of a stomach ulcer and your tummy pain is getting worse or does not go away, you've lost your appetite or lost weight without trying to, you keep being sick, or it's painful or difficult to swallow.",
        ],
      },
    ],
    helps: [
      "See a GP if you have indigestion that does not go away with treatment, or your tummy pain keeps coming back.",
      "Ask for an urgent GP appointment or get help from NHS 111 if your tummy pain is getting worse or does not go away.",
      "Get urgent help too if you feel full after a very small amount of food, it feels like you have a lump in your tummy, or you feel tired all the time.",
      "Call 999 or go to A&E if you're vomiting blood, your poo is black, sticky and very smelly, or you have severe tummy pain.",
      "If your indigestion does not improve with lifestyle changes or over-the-counter remedies, see your doctor.",
    ],
    tryThisWeek: [
      "See a GP if pain keeps coming back.",
      "Get urgent help if pain gets worse.",
      "Know the signs that mean 999.",
    ],
    ask: "Could my symptoms be caused by an ulcer, and do I need any tests?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your GP",
      intro: "Tick any you have noticed. The ones you tick become a list to take to your appointment.",
      signs: [
        "Burning pain in the upper tummy",
        "Pain that is often worse at night",
        "Pain a few hours after eating",
        "Indigestion or heartburn",
        "Bloating",
        "Feeling or being sick",
        "Loss of appetite",
        "Losing weight without trying",
        "Feeling tired all the time",
      ],
      after: "Vomiting blood, black sticky poo or severe tummy pain mean call 999 or go to A&E.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_ULCER, INFORM_ULCER, GUTS_INDIGESTION],
    quiz: {
      question: "When is stomach ulcer pain often worse?",
      options: [{ text: "At night", right: true }, { text: "Only after exercise" }, { text: "Only first thing in the morning" }],
      why: "The pain is usually in the upper part of your tummy, may feel like burning, and is often worse at night.",
    },
  },
  {
    id: "su-tests",
    kicker: "Tests",
    question: "How is a stomach ulcer found?",
    hook: "A breath or poo test for H pylori first, and sometimes a camera test to look at the ulcer itself.",
    short: "A GP may arrange a breath test or a poo test to check for H pylori, and sometimes a blood test. You may also be referred for a gastroscopy, where a thin, flexible tube with a camera is passed down into your stomach. Some medicines can affect the results, so check what to stop first.",
    sections: [
      {
        heading: "At the GP appointment",
        paragraphs: [
          "If a GP thinks you might have a stomach ulcer, they may arrange some tests to check what's causing your symptoms. The GP may also ask to weigh you and feel your tummy.",
          "Your GP will want to know if you're taking anti-inflammatory painkillers, and might test you for H pylori infection.",
        ],
      },
      {
        heading: "Breath and poo tests",
        paragraphs: [
          "For a breath test, you take a tablet or a special drink and breathe into a tube. A sample of your breath is taken before and a short time after, to check if H pylori is present in your stomach.",
          "Stool tests look for H pylori proteins in a small sample of poo, and they are as accurate as breath tests. A blood test for H pylori has now largely been replaced by the stool test.",
        ],
      },
      {
        heading: "Medicines that affect the results",
        paragraphs: [
          "Tests for H pylori may not be accurate if you have had a course of antibiotics within a month of the test, or have taken acid-reducing tablets called proton pump inhibitors.",
          "Proton pump inhibitors, such as omeprazole and lansoprazole, should not have been taken in the last two weeks before testing. If you think a medicine might affect the result, discuss this with your doctor.",
        ],
      },
      {
        heading: "A gastroscopy",
        paragraphs: [
          "A gastroscopy is a test to check inside your food pipe, stomach and the top of your intestine using a thin tube with a camera inside it. The images will usually confirm or rule out an ulcer, and a small tissue sample may be taken to test for H pylori.",
          "You'll need to stop eating at least 6 hours before the test, but you may be able to have small sips of water. You'll be offered a local anaesthetic throat spray or sedation to make you more comfortable.",
          "A gastroscopy should not be painful, and you can ask for the procedure to be stopped at any time. It should take 15 to 45 minutes, but you might be at the hospital for around 4 hours.",
        ],
      },
      {
        heading: "After a gastroscopy",
        paragraphs: [
          "If you have sedation, you'll need someone to take you home and stay with you for 24 hours. Avoid drinking alcohol, driving, operating machinery and signing important documents for 24 hours after sedation.",
          "You may have some stomach and throat pain afterwards. This is normal and should pass in a few hours. Call 999 or go to A&E if you're vomiting blood or have severe stomach or chest pain after a gastroscopy.",
        ],
      },
    ],
    helps: [
      "Tell your doctor about the medicines you take, as some can give a misleading H pylori result.",
      "If you are referred for a test, check with the hospital or clinic whether to stop omeprazole first.",
      "Before a gastroscopy, stop eating at least 6 hours before, and bring the details of any medicines you take.",
      "If you have sedation, arrange for someone to take you home and stay with you for 24 hours.",
      "Ask whether you need an endoscopy to confirm whether or not you have an ulcer.",
    ],
    tryThisWeek: [
      "Tell your doctor about your medicines.",
      "Stop eating 6 hours before a gastroscopy.",
      "Arrange a lift home after sedation.",
    ],
    ask: "Which test do I need, and which medicines should I stop before it?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "breath", front: "Breath test", when: "To check for H pylori", back: "You take a tablet or a special drink and breathe into a tube." },
        { id: "stool", front: "Stool test", when: "A small sample of poo", back: "Looks for H pylori proteins. As accurate as a breath test." },
        { id: "blood", front: "Blood test", when: "Sometimes offered", back: "Checks for antibodies to H pylori. Now largely replaced by the stool test." },
        { id: "gastroscopy", front: "Gastroscopy", when: "If you are referred", back: "A thin tube with a camera looks inside your stomach. It usually confirms or rules out an ulcer." },
        { id: "biopsy", front: "Tissue sample", when: "During a gastroscopy", back: "A small sample may be taken to test for H pylori. You will not feel anything." },
      ],
    },
    sources: [NHS_ULCER, INFORM_ULCER, GUTS_HP, NHS_GASTROSCOPY, NHS_OMEPRAZOLE, CKS_SUMMARY],
    quiz: {
      question: "Why might you be asked to stop a PPI before an H pylori test?",
      options: [{ text: "It can make the test result inaccurate", right: true }, { text: "It makes the test painful" }, { text: "It is no longer needed after the test" }],
      why: "Tests for H pylori may not be accurate if you have had a course of antibiotics within a month of the test, or have taken acid-reducing tablets called proton pump inhibitors.",
    },
  },
  {
    id: "su-h-pylori",
    kicker: "Treatment",
    question: "How is H pylori cleared?",
    hook: "A short course of antibiotics with an acid-reducing tablet. Taking every dose is what makes it work.",
    short: "If your ulcer is caused by H pylori, you'll be given a course of antibiotics together with a proton pump inhibitor. Treatment is much more successful if the whole course is taken exactly as prescribed. A test afterwards checks that the infection has gone.",
    sections: [
      {
        heading: "A combination of tablets",
        paragraphs: [
          "If your stomach ulcer is caused by H pylori, you'll be given a course of antibiotics and a medicine called a proton pump inhibitor. This kills the bacteria and should prevent the ulcer coming back.",
          "Treatment consists of a combination of 3 to 4 different tablets. One of these cuts down the amount of acid in the stomach, and the others are antibiotics. It is the combination that is important in the success of treatment.",
        ],
      },
      {
        heading: "The antibiotics",
        paragraphs: [
          "You'll usually be prescribed 2 or 3 antibiotics. The most commonly used are amoxicillin, clarithromycin and metronidazole. NHS inform says these are taken twice a day for a week.",
          "Guts UK says that 1-week courses were traditionally used, but 2-week courses are now recognised as being more effective. A newer medicine containing 2 antibiotics and bismuth is also available in the UK.",
          "Clarithromycin is sometimes used by people who have an allergy to penicillin and antibiotics similar to penicillin, like amoxicillin.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Most people have no side effects from treatment, but some notice minor problems. These might include a strange or metallic taste in the mouth, feeling sick, a headache or diarrhoea.",
          "Do not drink alcohol while you're taking metronidazole tablets or liquid, and for 2 days after you finish. Metronidazole can react with alcohol to cause feeling and being sick, stomach pain, hot flushes, a pounding heartbeat and a headache.",
        ],
      },
      {
        heading: "Finishing the course",
        paragraphs: [
          "Treatment is much more successful if the whole course of tablets is taken exactly as prescribed. If you do not complete the course, the treatment will be less successful.",
          "Carry on taking an antibiotic until the course is finished, even if you feel better. If you stop treatment early, the infection could come back.",
        ],
      },
      {
        heading: "Checking it has gone",
        paragraphs: [
          "Treatment for H pylori doesn't always get rid of the bacteria, so your doctor should always check that it has gone. You'll be re-tested at least 4 weeks after finishing your antibiotics.",
          "If the result is still positive, further treatment using different antibiotics may be given. Once H pylori has been treated and cured, getting infected again is very unusual.",
        ],
      },
    ],
    helps: [
      "Take the whole course of tablets exactly as prescribed, even if you feel better.",
      "If you forget a dose, take it as soon as you remember, unless it's nearly time for your next dose. Never take 2 doses at the same time.",
      "Do not drink alcohol while taking metronidazole, and for 2 days after you finish.",
      "If side effects continue to bother you, keep taking the medicine, but tell your doctor or pharmacist.",
      "Have a test afterwards to check the infection has gone, at least 4 weeks after finishing the antibiotics.",
    ],
    tryThisWeek: [
      "Take every dose until the course ends.",
      "Avoid alcohol with metronidazole.",
      "Book your follow-up test.",
    ],
    ask: "How long is my course, and when should I have my follow-up test?",
    interactive: {
      kind: "scenarios",
      title: "Moments during the course",
      scenarios: [
        {
          id: "feel-better",
          situation: "You feel better halfway through the course.",
          options: [{ text: "Carry on until the course is finished", best: true }, { text: "Stop the tablets now" }],
          why: "Carry on taking an antibiotic until the course is finished, even if you feel better. If you stop early, the infection could come back.",
        },
        {
          id: "missed",
          situation: "You forgot a dose and remember a few hours later.",
          options: [{ text: "Take it now, unless the next dose is nearly due", best: true }, { text: "Take 2 doses next time" }],
          why: "Take it as soon as you remember, unless it's nearly time for your next dose. Never take 2 doses at the same time.",
        },
        {
          id: "drink",
          situation: "You're taking metronidazole and are offered a drink.",
          options: [{ text: "Say no, until 2 days after the course", best: true }, { text: "One drink will be fine" }],
          why: "Do not drink alcohol while you're taking metronidazole, and for 2 days after you finish.",
        },
        {
          id: "test",
          situation: "You've finished the course and feel fine.",
          options: [{ text: "Have the follow-up test", best: true }, { text: "Skip the test" }],
          why: "Treatment doesn't always get rid of the bacteria, so your doctor should always check that it has gone.",
        },
      ],
    },
    sources: [INFORM_ULCER, GUTS_HP, NHS_CLARI_ABOUT, NHS_METRO_QA, NHS_CLARI_HOW, NHS_CLARI_SIDE],
    quiz: {
      question: "Why take the whole course of H pylori treatment?",
      options: [{ text: "Treatment is much more successful that way", right: true }, { text: "To stop the strange taste" }, { text: "It only matters for the acid tablet" }],
      why: "Treatment is much more successful if the whole course of tablets is taken exactly as prescribed.",
    },
  },
  {
    id: "su-ppis",
    kicker: "Treatment",
    question: "How do acid-reducing tablets help an ulcer heal?",
    hook: "They cut the acid your stomach makes, so the ulcer can heal. Usually a course of 4 to 8 weeks.",
    short: "Proton pump inhibitors (PPIs), such as omeprazole and lansoprazole, reduce the amount of acid your stomach makes. This prevents further damage to the ulcer as it heals naturally. They're usually prescribed for 4 to 8 weeks.",
    sections: [
      {
        heading: "How they work",
        paragraphs: [
          "Proton pumps are enzymes in the lining of your stomach that help it make acid to digest your food. PPIs stop them working properly, which reduces the amount of acid your stomach makes.",
          "This prevents further damage to the ulcer as it heals naturally. The most commonly used PPIs are omeprazole, pantoprazole and lansoprazole.",
        ],
      },
      {
        heading: "How long, and when to take them",
        paragraphs: [
          "PPIs are usually prescribed for 4 to 8 weeks. You should start to feel better within 2 to 3 days, but it may take up to 4 weeks for lansoprazole to work fully.",
          "Lansoprazole is usually taken once a day, first thing in the morning, and works best if you take it at least 30 minutes before a meal or snack. Omeprazole can be taken with or without food.",
          "Do not take omeprazole for longer than 2 weeks if you bought it without a prescription. See a GP if your symptoms get worse or do not get better.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Common side effects include a headache, stomach pain, feeling or being sick, constipation or diarrhoea, and farting more than usual. They tend to be mild.",
          "The chance of serious side effects can be higher if you take omeprazole for a long time, a year or more. If you take lansoprazole for longer than 1 year, your doctor will regularly check your health to see if you should carry on taking it.",
        ],
      },
      {
        heading: "Antacids and other medicines",
        paragraphs: [
          "Antacids give quick relief that lasts for a few hours. As PPIs can take several hours before they start to work, your GP may recommend taking an antacid as well.",
          "Antacids can stop lansoprazole working as well, so take an antacid at least 2 hours before or after your dose. Sometimes a type of medicine called an H2 blocker is used instead of a PPI.",
        ],
      },
      {
        heading: "Stopping",
        paragraphs: [
          "Usually, you can stop taking lansoprazole without reducing the dose first. But if you've taken it for a long time, speak to your doctor before you stop.",
          "Stopping suddenly could make your stomach produce a lot more acid, and make your symptoms come back. Reducing the dose gradually before stopping completely will prevent this happening.",
        ],
      },
    ],
    helps: [
      "Take your PPI at the same time each morning if you take it once a day.",
      "Take lansoprazole at least 30 minutes before a meal or snack.",
      "If you need an antacid, take it at least 2 hours before or after your dose of lansoprazole.",
      "Do not take omeprazole you bought without a prescription for longer than 2 weeks, and see a GP if symptoms get worse or do not get better.",
      "If you've taken a PPI for a long time, speak to your doctor before you stop.",
      "It's best not to drink alcohol, because it can increase the amount of acid in your stomach.",
    ],
    tryThisWeek: [
      "Take it at the same time each morning.",
      "Keep antacids 2 hours apart.",
      "Ask before stopping a long course.",
    ],
    ask: "How long should I take my acid-reducing tablets, and how will we decide when to stop?",
    interactive: {
      kind: "flip-cards",
      title: "Acid medicines, card by card",
      intro: "Turn each card to see what each medicine does.",
      cards: [
        { id: "ppi", front: "PPI", when: "Such as omeprazole or lansoprazole", back: "Reduces the acid your stomach makes, so the ulcer can heal. Usually 4 to 8 weeks." },
        { id: "h2", front: "H2 blocker", when: "Sometimes used instead of a PPI", back: "Also reduces the acid your stomach makes, but in a different way to PPIs." },
        { id: "antacid", front: "Antacid", when: "For quick relief", back: "Neutralises stomach acid. Gives immediate, but short-term, relief." },
        { id: "alginate", front: "Alginate", when: "In some antacids", back: "Produces a protective coating on the lining of your stomach. Best taken after meals." },
      ],
    },
    sources: [INFORM_ULCER, NHS_LANSO_QA, NHS_LANSO_ABOUT, NHS_LANSO_HOW, NHS_OMEPRAZOLE],
    quiz: {
      question: "How long are PPIs usually prescribed for an ulcer?",
      options: [{ text: "4 to 8 weeks", right: true }, { text: "1 day" }, { text: "Only when the pain starts" }],
      why: "PPIs are usually prescribed for 4 to 8 weeks.",
    },
  },
  {
    id: "su-painkillers",
    kicker: "Medicines",
    question: "Which painkillers should I avoid, and what can I take instead?",
    hook: "Anti-inflammatory painkillers can cause ulcers. Paracetamol is a safer choice, but check before changing any prescribed medicine.",
    short: "Anti-inflammatory painkillers (NSAIDs) such as ibuprofen, aspirin and naproxen can cause stomach ulcers, particularly if taken for a long time or at high doses. If you have an ulcer or have had one, you may be advised not to use them. Paracetamol is a safer painkiller to use.",
    sections: [
      {
        heading: "Why NSAIDs matter",
        paragraphs: [
          "NSAIDs are medicines that can help treat pain and reduce swelling or a high temperature. Some, such as ibuprofen and aspirin, are available to buy from shops and pharmacies, while others, such as naproxen, are only available with a prescription.",
          "They can sometimes cause serious side effects, including stomach ulcers or bleeding inside your stomach. Signs include stomach pain, pale skin, vomiting blood, or poo that's black, sticky and tar-like.",
        ],
      },
      {
        heading: "If you have, or have had, an ulcer",
        paragraphs: [
          "You may be advised not to use NSAIDs if you currently have a stomach ulcer or if you've had one in the past. Ibuprofen may not be suitable if you have a stomach ulcer or you've had them before.",
          "If your ulcer was caused by NSAIDs, you'll be given a course of PPI medication and your use of NSAIDs will be reviewed. Continued NSAID use makes another ulcer, or a serious complication such as internal bleeding, more likely.",
        ],
      },
      {
        heading: "Alternatives",
        paragraphs: [
          "You may be advised to use an alternative painkiller not associated with stomach ulcers, such as paracetamol. COX-2 inhibitors are sometimes recommended: these are a type of NSAID that's less likely to cause stomach ulcers.",
          "For adults, one dose of paracetamol is 1 or 2 500mg tablets, leaving at least 4 hours between doses, and no more than 8 tablets in 24 hours. Do not take paracetamol for more than 3 days unless a doctor tells you to.",
        ],
      },
      {
        heading: "Low-dose aspirin",
        paragraphs: [
          "Low-dose aspirin is taken to prevent blood clots and lower the chance of a heart attack or stroke. If you're taking it, your GP will tell you whether you need to keep taking it.",
          "If you do, you may also be prescribed long-term treatment with a PPI to prevent further ulcers. Do not stop taking your medicine without speaking to your doctor first.",
        ],
      },
      {
        heading: "Combining and checking",
        paragraphs: [
          "Do not take ibuprofen at the same time as other NSAIDs, such as naproxen or aspirin. This can increase the risk of serious side effects like stomach ulcers.",
          "Your doctor may prescribe a medicine such as omeprazole to help protect your stomach while you're taking naproxen. Alcohol can increase the risk of side effects such as stomach ulcers or bleeding.",
        ],
      },
    ],
    helps: [
      "Do not take anti-inflammatory painkillers, such as ibuprofen, without speaking to a doctor first.",
      "Ask your doctor or pharmacist which painkillers are right for you: paracetamol is a safer painkiller to use.",
      "Do not take paracetamol for more than 3 days unless a doctor tells you to.",
      "If you take low-dose aspirin, your GP will tell you whether to keep taking it. Do not stop it without speaking to them first.",
      "Do not take two NSAIDs at the same time, such as ibuprofen with naproxen or aspirin.",
      "Check the leaflet that comes with your medicine, and ask a pharmacist or your doctor if you're unsure.",
    ],
    tryThisWeek: [
      "Check with a doctor before ibuprofen.",
      "Ask which painkillers are right for you.",
      "Ask your GP about low-dose aspirin.",
    ],
    ask: "Which painkillers are safe for me now, and do I need stomach protection with any of my medicines?",
    interactive: {
      kind: "scenarios",
      title: "Everyday pain, ulcer-aware choices",
      scenarios: [
        {
          id: "headache",
          situation: "You have a headache and have had an ulcer before.",
          options: [{ text: "Ask a pharmacist, and consider paracetamol", best: true }, { text: "Take ibuprofen from the cupboard" }],
          why: "You may be advised not to use NSAIDs if you've had an ulcer in the past. Paracetamol is a safer painkiller to use.",
        },
        {
          id: "aspirin",
          situation: "You take low-dose aspirin and have just been told you have an ulcer.",
          options: [{ text: "Ask your GP whether to keep taking it", best: true }, { text: "Stop it straight away on your own" }],
          why: "If you're taking low-dose aspirin, your GP will tell you whether you need to keep taking it.",
        },
        {
          id: "two",
          situation: "Ibuprofen is not helping, so you think about adding naproxen.",
          options: [{ text: "Do not take them together, and ask a doctor", best: true }, { text: "Take both at once" }],
          why: "Taking ibuprofen at the same time as other NSAIDs can increase the risk of serious side effects like stomach ulcers.",
        },
        {
          id: "long-pain",
          situation: "You have needed paracetamol for 3 days and still have pain.",
          options: [{ text: "Speak to a doctor", best: true }, { text: "Keep taking it without checking" }],
          why: "Do not take paracetamol for more than 3 days unless a doctor tells you to.",
        },
      ],
    },
    sources: [INFORM_ULCER, NHS_NSAIDS, NHS_IBUPROFEN, NHS_PARACETAMOL, NHS_ASPIRIN, NHS_NAPROXEN, NHS_ULCER, GUTS_HP, CKS_RISK],
    quiz: {
      question: "Which painkiller is a safer choice if you have had a stomach ulcer?",
      options: [{ text: "Paracetamol", right: true }, { text: "Ibuprofen" }, { text: "Naproxen" }],
      why: "You may be advised to use an alternative painkiller not associated with stomach ulcers, such as paracetamol.",
    },
  },
  {
    id: "su-urgent",
    kicker: "Emergencies",
    question: "What are the signs of a bleeding ulcer, and what should I do?",
    hook: "Vomiting blood, black sticky poo or severe tummy pain need help straight away: call 999 or go to A&E.",
    short: "Bleeding and a hole in the stomach lining are rare but serious complications. Call 999 or go to A&E if you're vomiting bright red blood or your vomit looks like ground coffee, your poo has blood in it or is black, sticky and very smelly, or you have severe tummy pain. Do not drive yourself.",
    sections: [
      {
        heading: "Call 999 or go to A&E if",
        paragraphs: [
          "Call 999 or go to A&E if you're vomiting bright red blood or your vomit looks like ground coffee, or your poo has blood in it, or is black, sticky and very smelly.",
          "Call 999 or go to A&E too if you have severe tummy pain, it's painful to touch your tummy, or you have chest pain that started suddenly.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance. Bring any medicines you take with you.",
        ],
      },
      {
        heading: "Bleeding",
        paragraphs: [
          "Internal bleeding is the most common complication of stomach ulcers. It can happen when an ulcer develops at the site of a blood vessel, and the bleeding can be slow and long-term, or rapid and severe.",
          "You should always get medical help if you are vomiting blood. Vomit can vary from bright red to brown or black, and may look like coffee granules.",
          "In hospital, an endoscopy is used to find the cause of the bleeding, and treatment can be given during it to stop the bleeding. Blood transfusions may also be needed to replace the blood that has been lost.",
        ],
      },
      {
        heading: "Slow bleeding and anaemia",
        paragraphs: [
          "Slow, long-term bleeding can lead to a lack of iron, called iron deficiency anaemia. Symptoms can include tiredness and lack of energy, shortness of breath, noticeable heartbeats and paler than usual skin.",
          "Visit your GP if you have symptoms of anaemia that do not go away. The GP will usually do a blood test to check.",
        ],
      },
      {
        heading: "A hole in the stomach",
        paragraphs: [
          "Rarely, the lining of the stomach splits open at the site of the ulcer. This is called a perforation, and it lets bacteria that live in the stomach escape and infect the lining of the tummy, which is called peritonitis.",
          "Peritonitis can become life threatening, and it needs treatment in hospital. Its most common symptom is sudden tummy pain that gets steadily worse.",
        ],
      },
      {
        heading: "Urgent, but not 999",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have symptoms of a stomach ulcer and your tummy pain is getting worse or does not go away, you keep being sick, or you've lost weight without trying to. You can call 111 or get help from 111 online.",
          "Rarely, a swollen or scarred ulcer can block the normal passage of food through the digestive system. Signs include vomiting large amounts of undigested food, a constant feeling of bloating or fullness, and unexplained weight loss.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E if you're vomiting bright red blood, or your vomit looks like ground coffee.",
      "Call 999 or go to A&E if your poo has blood in it, or is black, sticky and very smelly.",
      "Call 999 or go to A&E if you have severe tummy pain, or it's painful to touch your tummy.",
      "Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance, and bring any medicines you take.",
      "Ask for an urgent GP appointment or call 111 if your tummy pain is getting worse or does not go away.",
    ],
    tryThisWeek: [
      "Learn the signs that mean 999.",
      "Do not drive yourself to A&E.",
      "Bring your medicines to A&E.",
    ],
    ask: "Which symptoms mean I should call 999, and which mean I should call my GP or 111?",
    interactive: {
      kind: "scenarios",
      title: "What to do, straight away",
      scenarios: [
        {
          id: "coffee",
          situation: "You are sick, and it looks like ground coffee.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "See if it happens again" }, { text: "Book a routine GP appointment" }],
          why: "Call 999 or go to A&E if you're vomiting bright red blood or your vomit looks like ground coffee.",
        },
        {
          id: "black",
          situation: "Your poo is black, sticky and very smelly.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Take an antacid and rest" }],
          why: "Call 999 or go to A&E if your poo has blood in it, or is black, sticky and very smelly.",
        },
        {
          id: "drive",
          situation: "You need to get to A&E.",
          options: [{ text: "Ask someone to drive you, or call 999", best: true }, { text: "Drive yourself" }],
          why: "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        },
        {
          id: "worse",
          situation: "Your ulcer pain has been getting worse over a few days.",
          options: [{ text: "Ask for an urgent GP appointment or call 111", best: true }, { text: "Put up with it" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if your tummy pain is getting worse or does not go away.",
        },
      ],
    },
    sources: [NHS_ULCER, INFORM_ULCER, NHS_VOMITING_BLOOD, NHS_ANAEMIA, NHS_PERITONITIS],
    quiz: {
      question: "What should you do if your vomit looks like ground coffee?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait until the next day" }, { text: "Take an antacid" }],
      why: "Call 999 or go to A&E if you're vomiting bright red blood or your vomit looks like ground coffee, or your poo has blood in it, or is black, sticky and very smelly.",
    },
  },
  {
    id: "su-healing",
    kicker: "Recovery",
    question: "How long does an ulcer take to heal, and what follow-up will I have?",
    hook: "Most ulcers heal in a month or two with treatment. A follow-up test checks that the treatment has worked.",
    short: "Treatment usually lasts from 1 week to 2 months, depending on what's causing your ulcer, and most ulcers heal in a month or two. You may need tests after treatment to make sure it's worked. If your symptoms come back, speak to a GP.",
    sections: [
      {
        heading: "How long healing takes",
        paragraphs: [
          "Treatment usually lasts from 1 week to 2 months, depending on what's causing your ulcer. With treatment, most ulcers heal in a month or two.",
          "NICE's summaries for health professionals say that with acid-reducing treatment, duodenal ulcers typically heal within 4 weeks and stomach ulcers within 8 weeks.",
        ],
      },
      {
        heading: "Tests after treatment",
        paragraphs: [
          "You may need tests after treatment to make sure it's worked. After H pylori treatment, you'll be re-tested at least 4 weeks after finishing your antibiotics.",
          "A breath test can show whether treatment has been successful, but it needs to be done at least one month after the course of treatment has finished. A stool test can also be used to confirm that the infection has cleared.",
        ],
      },
      {
        heading: "A repeat gastroscopy",
        paragraphs: [
          "You may have a repeat gastroscopy after 4 to 6 weeks to check that the ulcer has healed.",
          "NICE's summaries say that everyone with a proven stomach ulcer should have a repeat endoscopy, and a repeat H pylori test if appropriate, 6 to 8 weeks after starting treatment.",
        ],
      },
      {
        heading: "If symptoms come back",
        paragraphs: [
          "If your symptoms come back after treatment, speak to a GP. You may need to try a different medicine or keep taking medicine for longer.",
          "Sometimes symptoms take a little time to settle down. If the H pylori test is still positive, further treatment is possible.",
        ],
      },
      {
        heading: "While you heal",
        paragraphs: [
          "There aren't any special lifestyle measures you need to take during treatment. However, avoiding stress, alcohol, spicy foods and smoking may reduce your symptoms while your ulcer heals.",
          "A doctor may also recommend getting help with stress, anxiety and depression, as these things can make your symptoms worse.",
        ],
      },
    ],
    helps: [
      "Take the whole course of tablets exactly as prescribed.",
      "Go to any follow-up test, as your doctor should always check that H pylori has gone after treatment.",
      "Have a breath test to check treatment worked at least one month after the course has finished.",
      "If your symptoms come back after treatment, speak to a GP.",
      "Avoiding stress, alcohol, spicy foods and smoking may reduce your symptoms while your ulcer heals.",
      "Ask for help with stress, anxiety or depression, as these can make symptoms worse.",
    ],
    tryThisWeek: [
      "Book your follow-up test.",
      "Speak to a GP if symptoms return.",
      "Cut back on things that worsen symptoms.",
    ],
    ask: "Do I need a follow-up test or a repeat gastroscopy, and when?",
    interactive: {
      kind: "timeline",
      title: "Healing, step by step",
      steps: [
        { id: "start", when: "Start", title: "Treatment begins", points: ["Antibiotics and a PPI if H pylori is the cause", "A PPI, and a review of NSAIDs, if painkillers are the cause"] },
        { id: "weeks", when: "The first weeks", title: "Healing", points: ["Treatment usually lasts from 1 week to 2 months", "Avoiding smoking, alcohol and spicy foods may ease symptoms"] },
        { id: "retest", when: "At least 4 weeks after antibiotics", title: "Checking H pylori has gone", points: ["A breath or stool test", "Further treatment is possible if it is still there"] },
        { id: "scope", when: "After 4 to 6 weeks", title: "A repeat gastroscopy, if needed", points: ["Checks that the ulcer has healed"] },
        { id: "after", when: "A month or two", title: "Most ulcers have healed", points: ["Speak to a GP if symptoms come back"] },
      ],
    },
    sources: [NHS_ULCER, INFORM_ULCER, GUTS_HP, CKS_PROGNOSIS, CKS_SUMMARY],
    quiz: {
      question: "How long do most stomach ulcers take to heal with treatment?",
      options: [{ text: "A month or two", right: true }, { text: "A day or two" }, { text: "Several years" }],
      why: "With treatment, most ulcers heal in a month or two.",
    },
  },
  {
    id: "su-smoking-alcohol",
    kicker: "Living well",
    question: "Do smoking and alcohol affect an ulcer?",
    hook: "Smoking raises the risk and makes treatment less effective. Alcohol can make symptoms worse. Free help is there for both.",
    short: "Smoking can increase your risk of developing stomach ulcers and make treatment less effective. There's little evidence that alcohol causes ulcers, but it can make the symptoms worse. Not smoking and not drinking too much alcohol both help, and free support is available.",
    sections: [
      {
        heading: "Smoking",
        paragraphs: [
          "Stomach ulcers are more common in people who smoke. Smoking can increase your risk of developing stomach ulcers and make treatment less effective.",
          "A doctor may recommend lifestyle changes, such as stopping smoking. Current or former smoking has been linked to almost twice the risk of peptic ulcers.",
        ],
      },
      {
        heading: "Help to stop smoking",
        paragraphs: [
          "Local NHS stop smoking services are free and can improve your chances of quitting for good. They give information, advice and professional support, usually for up to 12 weeks.",
          "They make it easy and affordable to get stop smoking treatments, such as nicotine replacement therapy or tablets. Your GP, pharmacist or health visitor can refer you, or you can phone your local service. In England, the free Smokefree National Helpline is 0300 123 1044.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "There's little evidence that stomach ulcers are caused by alcohol, but it can make the symptoms worse. Alcohol can make your stomach produce more acid than normal, which irritates the stomach lining.",
          "Alcohol can harm the stomach lining. It causes inflammation and reduces the ability to repair the damage.",
          "Drinking a lot of alcohol while taking anti-inflammatory painkillers may increase the risk of side effects or irritate your stomach. Do not drink any alcohol while taking metronidazole, and for 2 days after you finish.",
        ],
      },
      {
        heading: "Keeping within the guidelines",
        paragraphs: [
          "Men and women are advised not to drink more than 14 units a week on a regular basis, spread over 3 or more days. 14 units is equivalent to 6 pints of average-strength beer or 10 small glasses of lower-strength wine.",
          "To cut down, set a limit before you start drinking, go for smaller or lower-strength drinks, alternate alcoholic drinks with water, and have several drink-free days each week.",
        ],
      },
      {
        heading: "Support without judgement",
        paragraphs: [
          "If you are drinking harmful levels of alcohol and can't stop, consider seeing your GP. Care in the NHS includes supporting people in a non-judgemental manner.",
          "Drinkline is a free, confidential helpline for people who are concerned about their drinking, or someone else's. In England and Northern Ireland, call 0300 123 1110, and in Scotland, call 0800 7314 314.",
        ],
      },
    ],
    helps: [
      "Do not smoke, and ask about free local NHS stop smoking services.",
      "In England, call the free Smokefree National Helpline on 0300 123 1044.",
      "Do not drink too much alcohol: keep to no more than 14 units a week, spread over 3 or more days.",
      "Have several drink-free days each week.",
      "Do not drink alcohol while taking metronidazole, and for 2 days after you finish.",
      "If you can't stop drinking, consider seeing your GP, or call Drinkline on 0300 123 1110.",
    ],
    tryThisWeek: [
      "Contact a stop smoking service.",
      "Plan some drink-free days.",
      "Avoid alcohol with metronidazole.",
    ],
    ask: "Would stopping smoking or cutting down on alcohol help my ulcer, and what support is there?",
    interactive: {
      kind: "scenarios",
      title: "Everyday choices",
      scenarios: [
        {
          id: "quit",
          situation: "You want to stop smoking but have tried before.",
          options: [{ text: "Contact a local NHS stop smoking service", best: true }, { text: "Try again alone, with no support" }],
          why: "Local stop smoking services are free and can improve your chances of quitting for good.",
        },
        {
          id: "metro",
          situation: "You're taking metronidazole and it's a friend's birthday.",
          options: [{ text: "Choose a non-alcoholic drink", best: true }, { text: "Have just one drink" }],
          why: "Do not drink alcohol while you're taking metronidazole, and for 2 days after you finish.",
        },
        {
          id: "weekend",
          situation: "You plan to have all your week's drinks on Saturday.",
          options: [{ text: "Spread drinking over 3 or more days", best: true }, { text: "Save them for one night" }],
          why: "Spread your drinking over 3 or more days if you regularly drink as much as 14 units a week.",
        },
        {
          id: "pub",
          situation: "You're at the pub and want to drink less.",
          options: [{ text: "Alternate with water or soft drinks", best: true }, { text: "Keep up with the round" }],
          why: "Alternate alcoholic drinks with water or other non-alcoholic drinks.",
        },
      ],
    },
    sources: [NHS_ULCER, INFORM_ULCER, CKS_RISK, NHS_STOP_SMOKING, NHS_LANSO_ABOUT, GUTS_ALCOHOL, NHS_NSAIDS, NHS_METRO_QA, NHS_UNITS, NHS_CUTTING_DOWN],
    quiz: {
      question: "How can smoking affect a stomach ulcer?",
      options: [{ text: "It can make treatment less effective", right: true }, { text: "It helps the ulcer heal" }, { text: "It has no effect" }],
      why: "Smoking can increase your risk of developing stomach ulcers and make treatment less effective.",
    },
  },
  {
    id: "su-food",
    kicker: "Living well",
    question: "What should I eat with a stomach ulcer?",
    hook: "Food does not cause ulcers, but some foods can make symptoms worse. Smaller, earlier meals help.",
    short: "There's little evidence that certain foods cause stomach ulcers, but some can make the symptoms worse. Eating smaller meals, having your evening meal 3 to 4 hours before bed and avoiding foods that trigger your symptoms can help. There are no special lifestyle measures you need during treatment.",
    sections: [
      {
        heading: "Food does not cause ulcers",
        paragraphs: [
          "There's little evidence that stress or certain foods cause stomach ulcers. Spicy foods are not thought to cause them, but they can make the symptoms worse.",
          "The main causes are H pylori bacteria and anti-inflammatory painkillers. For an inflamed stomach lining, Guts UK says that altering your diet doesn't generally treat the inflammation.",
        ],
      },
      {
        heading: "Foods that can trigger symptoms",
        paragraphs: [
          "Do not have food or drink that triggers your symptoms. This can include fatty or spicy foods, coffee and chocolate.",
          "Rich, spicy and fatty foods, and acidic foods like tomatoes, citrus fruits, salad dressings and fizzy drinks, can make symptoms caused by stomach acid worse. It also helps to cut down on caffeinated drinks, such as tea, coffee, cola and energy drinks.",
        ],
      },
      {
        heading: "How and when you eat",
        paragraphs: [
          "Eat smaller meals, and eat your evening meal 3 to 4 hours before going to bed.",
          "Eating smaller meals more often can prevent weight loss and might be better tolerated. Some people find they burp or become bloated after eating fatty foods.",
          "Don't rush meals or eat too much fatty or spicy food. Sitting up straight when you eat takes the pressure off your stomach.",
        ],
      },
      {
        heading: "A healthy weight and a balanced diet",
        paragraphs: [
          "Try to keep to a healthy weight. Eat a healthy diet, keep up an adequate daily fluid intake and be active.",
          "There aren't any special lifestyle measures you need to take during treatment. You can eat as normal while taking omeprazole.",
        ],
      },
    ],
    helps: [
      "Eat smaller meals.",
      "Eat your evening meal 3 to 4 hours before going to bed.",
      "Do not have food or drink that triggers your symptoms, such as fatty or spicy foods, coffee and chocolate.",
      "Cut down on caffeinated drinks, such as tea, coffee, cola and energy drinks.",
      "Don't rush meals, and sit up straight when you eat.",
      "Try to keep to a healthy weight.",
    ],
    tryThisWeek: [
      "Have smaller meals.",
      "Eat 3 to 4 hours before bed.",
      "Skip foods that trigger symptoms.",
    ],
    ask: "Are there any foods I should avoid while my ulcer heals?",
    interactive: {
      kind: "risk-check",
      title: "What sets off your symptoms?",
      intro: "Tick any that seem to make your symptoms worse. Each one is something you can change.",
      items: [
        { id: "fatty", label: "Fatty or rich foods", note: "Some people burp or become bloated after eating fatty foods.", changeable: true },
        { id: "spicy", label: "Spicy foods", note: "They are not thought to cause ulcers, but they can make the symptoms worse.", changeable: true },
        { id: "caffeine", label: "Coffee, tea, cola or energy drinks", note: "It helps to cut down on caffeinated drinks.", changeable: true },
        { id: "chocolate", label: "Chocolate", note: "Food or drink that can trigger symptoms includes chocolate.", changeable: true },
        { id: "acidic", label: "Tomatoes, citrus fruits or fizzy drinks", note: "Acidic foods can make symptoms caused by stomach acid worse.", changeable: true },
        { id: "late", label: "Big meals late in the evening", note: "Eat smaller meals, and have your evening meal 3 to 4 hours before bed.", changeable: true },
      ],
    },
    sources: [INFORM_ULCER, NHS_ULCER, GUTS_GASTRITIS, NHS_LANSO_QA, GUTS_INDIGESTION, NHS_OMEPRAZOLE],
    quiz: {
      question: "Do spicy foods cause stomach ulcers?",
      options: [{ text: "No, but they can make symptoms worse", right: true }, { text: "Yes, they are the main cause" }, { text: "Yes, if eaten every day" }],
      why: "Spicy foods are not thought to cause them, but they can make the symptoms worse.",
    },
  },
  {
    id: "su-coming-back",
    kicker: "Living well",
    question: "How can I stop an ulcer coming back?",
    hook: "Clearing H pylori and taking care with anti-inflammatory painkillers are the two biggest steps.",
    short: "Stomach ulcers can come back after treatment, although this is less likely if the underlying cause is addressed. Clearing H pylori greatly reduces the risk, and reviewing anti-inflammatory painkillers helps too. If your symptoms come back, speak to a GP.",
    sections: [
      {
        heading: "Treating the cause",
        paragraphs: [
          "Stomach ulcers can come back after treatment, although this is less likely to happen if the underlying cause is addressed.",
          "Before H pylori was known about, ulcers could heal with acid-reducing drugs, but they returned when the treatment was stopped. Treating H pylori helps ulcers to heal permanently, and greatly reduces the risk of an ulcer coming back.",
        ],
      },
      {
        heading: "Why clearing H pylori matters",
        paragraphs: [
          "NICE's summaries for health professionals say that if H pylori is still there, the lifetime risk of a stomach ulcer coming back is 60%, and of a duodenal ulcer 80%. Once H pylori has been cleared, it falls to 5% for both.",
          "Once H pylori has been treated and cured, getting infected again is very unusual. Your doctor should always check that it has gone after treatment.",
        ],
      },
      {
        heading: "Painkillers and other medicines",
        paragraphs: [
          "If your ulcer was caused by anti-inflammatory painkillers, continuing to take them makes another ulcer more likely. You may be advised to use a different painkiller, such as paracetamol.",
          "If you need to keep taking low-dose aspirin, you may be prescribed long-term treatment with a PPI to prevent further ulcers. Do not stop taking your medicine without speaking to your doctor first.",
        ],
      },
      {
        heading: "Everyday steps",
        paragraphs: [
          "Eat smaller meals, eat your evening meal 3 to 4 hours before going to bed, try to keep to a healthy weight and take steps to manage stress. Do not smoke, and do not drink too much alcohol.",
          "Do not take anti-inflammatory painkillers, such as ibuprofen, without speaking to a doctor first.",
        ],
      },
      {
        heading: "Long-term treatment and reviews",
        paragraphs: [
          "If your symptoms come back after treatment, speak to a GP. You may need to try a different medicine or keep taking medicine for longer.",
          "People on long-term treatment for an ulcer should be offered a review once a year, and encouraged to step down or stop treatment if possible and appropriate.",
        ],
      },
    ],
    helps: [
      "Make sure H pylori is treated, and have the test afterwards to check it has gone.",
      "Do not take anti-inflammatory painkillers, such as ibuprofen, without speaking to a doctor first.",
      "If you take low-dose aspirin, ask your GP whether you need a PPI to prevent further ulcers.",
      "Do not smoke, and do not drink too much alcohol.",
      "If your symptoms come back after treatment, speak to a GP.",
      "If you are on long-term treatment, ask for a review once a year.",
    ],
    tryThisWeek: [
      "Check your H pylori test is done.",
      "Check with a doctor before ibuprofen.",
      "Ask for a yearly review.",
    ],
    ask: "What is most likely to make my ulcer come back, and how can we prevent it?",
    interactive: {
      kind: "signs",
      title: "Signs it may be coming back",
      intro: "Tick any you notice. The ones you tick become a list to take to your GP.",
      signs: [
        "Tummy pain that keeps coming back",
        "Indigestion that does not go away with treatment",
        "Pain that is often worse at night",
        "Feeling full after a very small amount of food",
        "Losing weight without trying",
        "Feeling tired all the time",
      ],
      after: "Vomiting blood, black sticky poo or severe tummy pain mean call 999 or go to A&E.",
      copyHeading: "Symptoms to tell my GP",
    },
    sources: [INFORM_ULCER, GUTS_HP, CKS_PROGNOSIS, NHS_ULCER, CKS_SUMMARY],
    quiz: {
      question: "What greatly reduces the chance of an H pylori ulcer coming back?",
      options: [{ text: "Clearing the H pylori infection", right: true }, { text: "Eating only bland food" }, { text: "Taking ibuprofen" }],
      why: "Treating H pylori helps ulcers to heal permanently, and greatly reduces the risk of an ulcer coming back.",
    },
  },
];
