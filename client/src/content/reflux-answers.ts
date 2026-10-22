import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Acid reflux and heartburn (GORD) page's pieces
// (content/library-conditions/digestion-more.ts). Every sentence was written from wording checked on
// 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do
// not say. Most of it comes from the NHS (the condition page, medicine pages for omeprazole, lansoprazole,
// esomeprazole, Gaviscon and antacids, and the gastroscopy, chest pain and vomiting blood pages) and Guts UK,
// with the NICE guideline on GORD and dyspepsia (CG184). General information only; it never replaces what a
// person's own GP, pharmacist or specialist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const gutsUk = (label: string, path: string): LearnSource => ({ label: `Guts UK: ${label}`, url: `https://gutscharity.org.uk/advice-and-information/${path}` });

const NHS_HB = nhs("Heartburn and acid reflux", "conditions/heartburn-and-acid-reflux/");
const NHS_INDIGESTION = nhs("Indigestion", "conditions/indigestion/");
const NHS_HIATUS = nhs("Hiatus hernia", "conditions/hiatus-hernia/");
const NHS_PREGNANCY = nhs("Indigestion and heartburn in pregnancy", "pregnancy/common-symptoms/indigestion-and-heartburn/");
const NHS_CHEST_PAIN = nhs("Chest pain", "symptoms/chest-pain/");
const NHS_VOMITING_BLOOD = nhs("Vomiting blood", "symptoms/vomiting-blood/");
const NHS_OESCA_SYMPTOMS = nhs("Symptoms of oesophageal cancer", "conditions/oesophageal-cancer/symptoms/");
const NHS_OESCA_CAUSES = nhs("Causes of oesophageal cancer", "conditions/oesophageal-cancer/causes/");
const NHS_GASTROSCOPY = nhs("Gastroscopy", "tests-and-treatments/gastroscopy/");
const NHS_ANTACIDS = nhs("Antacids", "medicines/antacids/");
const NHS_GAVISCON_ABOUT = nhs("About Gaviscon", "medicines/gaviscon/about-gaviscon/");
const NHS_GAVISCON_HOW = nhs("How and when to take Gaviscon", "medicines/gaviscon/how-and-when-to-take-gaviscon/");
const NHS_GAVISCON_FAQ = nhs("Common questions about Gaviscon", "medicines/gaviscon/common-questions-about-gaviscon/");
const NHS_OMEPRAZOLE = nhs("Omeprazole", "medicines/omeprazole/");
const NHS_LANSO_HOW = nhs("How and when to take lansoprazole", "medicines/lansoprazole/how-and-when-to-take-lansoprazole/");
const NHS_LANSO_FAQ = nhs("Common questions about lansoprazole", "medicines/lansoprazole/common-questions-about-lansoprazole/");

const GUTS_HB = gutsUk("Heartburn and acid reflux", "symptoms/heartburn-and-reflux/");
const GUTS_INDIGESTION = gutsUk("Indigestion", "symptoms/indigestion/");
const GUTS_BARRETTS = gutsUk("Barrett's oesophagus", "conditions/barretts-oesophagus/");

const NICE_CG184: LearnSource = { label: "NICE: GORD and dyspepsia in adults (CG184), recommendations", url: "https://www.nice.org.uk/guidance/cg184/chapter/Recommendations" };

export const refluxAnswers: LearnArticle[] = [
  {
    id: "gord-what-it-is",
    kicker: "Understanding",
    question: "What is acid reflux, and why does it cause heartburn?",
    hook: "A one-way valve at the top of the stomach that does not always do its job. Very common, and for most people a nuisance rather than a danger.",
    short: "Heartburn is a burning feeling in the chest caused by stomach acid travelling up towards the throat, which is called acid reflux. If it keeps happening, it may be called gastro-oesophageal reflux disease (GORD). It is very common, and for most people it is just a nuisance.",
    sections: [
      {
        heading: "Acid going the wrong way",
        paragraphs: [
          "Heartburn is a burning feeling in the chest caused by stomach acid travelling up towards the throat. This is called acid reflux. If it keeps happening, it may be called gastro-oesophageal reflux disease, or GORD.",
          "Acid reflux is when some stomach contents, including acid, come back up into the gullet, which is also called the oesophagus. Reflux mostly happens without us being aware of it.",
        ],
      },
      {
        heading: "The valve at the top of the stomach",
        paragraphs: [
          "When you eat or drink, food passes from the mouth, down the gullet and into the stomach. A muscular ring called the lower oesophageal sphincter joins the gullet to the stomach, and it should make sure this flow is one-way.",
          "Acid reflux happens when this one-way system does not work as well as it should. This can let the stomach's contents travel the wrong way, back up into the gullet.",
        ],
      },
      {
        heading: "Why it burns",
        paragraphs: [
          "The stomach makes acid to help break down food and drink. This is normal. The stomach can resist acid, but if enough of it refluxes into the gullet, it causes pain, and that pain is called heartburn.",
          "Heartburn is often described as burning. It is felt at the lower end of the breastbone in the centre of the chest, and the discomfort often rises upwards. Sometimes the lining of the gullet becomes inflamed, which is called oesophagitis.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "Heartburn is extremely common, affecting up to 1 in every 4 adults in the UK. Lots of people get heartburn from time to time, and there's often no obvious reason why.",
          "For most people, heartburn and reflux is just a nuisance. For some, it can affect day-to-day life, including physical activity and sleep.",
        ],
      },
      {
        heading: "Where a hiatus hernia fits in",
        paragraphs: [
          "A hiatus hernia is when part of your stomach moves up into your chest. It's very common if you're over 50, and it does not normally need treatment if it's not causing you problems.",
          "The hernia itself rarely causes any symptoms, but it does seem to make reflux more likely.",
        ],
      },
    ],
    helps: [
      "Speak to a pharmacist for advice if you keep getting heartburn.",
      "Make simple lifestyle changes, which can help stop or reduce heartburn.",
      "See a GP if lifestyle changes and pharmacy medicines are not helping, or you have heartburn most days.",
      "If you are worried about complications, discuss them with your GP.",
    ],
    tryThisWeek: [
      "Ask a pharmacist about your heartburn.",
      "Try one simple lifestyle change.",
      "See a GP if it is most days.",
    ],
    ask: "Is this acid reflux, and could anything else be causing my symptoms?",
    interactive: {
      kind: "flip-cards",
      title: "The words, card by card",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "heartburn", front: "Heartburn", when: "The main symptom", back: "A burning feeling in the middle of the chest, caused by stomach acid travelling up towards the throat." },
        { id: "reflux", front: "Acid reflux", when: "What causes heartburn", back: "Some stomach contents, including acid, come back up into the gullet. It mostly happens without us noticing." },
        { id: "gord", front: "GORD", when: "If it keeps happening", back: "Gastro-oesophageal reflux disease: the name for acid reflux that keeps happening." },
        { id: "sphincter", front: "Lower oesophageal sphincter", when: "The valve", back: "A muscular ring joining the gullet to the stomach. It should keep the flow one-way." },
        { id: "oesophagitis", front: "Oesophagitis", when: "Sometimes", back: "When the lining of the gullet becomes inflamed. It would be seen at an endoscopy." },
        { id: "hiatus", front: "Hiatus hernia", when: "Very common over 50", back: "Part of the stomach moves up into the chest. It seems to make reflux more likely." },
      ],
    },
    sources: [NHS_HB, GUTS_HB, NHS_HIATUS],
    quiz: {
      question: "What is heartburn?",
      options: [{ text: "A burning feeling from acid travelling up", right: true }, { text: "A problem with the heart muscle" }, { text: "A sign of a chest infection" }],
      why: "Heartburn is a burning feeling in the chest caused by stomach acid travelling up towards the throat.",
    },
  },
  {
    id: "gord-triggers",
    kicker: "Understanding",
    question: "What sets off acid reflux?",
    hook: "Coffee, a big meal, a cigarette, a tight waistband. The usual triggers are well known, but everyone's list is a little different.",
    short: "Heartburn often has no obvious cause, but it can be caused or made worse by certain food and drink, being overweight, smoking, pregnancy, stress and anxiety, and some medicines. Triggers can be very individual, so it helps to notice your own.",
    sections: [
      {
        heading: "Often no single reason",
        paragraphs: [
          "Lots of people get heartburn from time to time. There's often no obvious reason why.",
          "Sometimes it's caused or made worse by certain food and drink, being overweight, smoking, pregnancy, stress and anxiety, or some medicines. An increase in some types of hormones, such as progesterone and oestrogen, can also play a part.",
        ],
      },
      {
        heading: "Food and drink",
        paragraphs: [
          "Coffee, tomatoes, alcohol, chocolate and fatty or spicy foods can all cause heartburn or make it worse.",
          "Heartburn often worsens after eating rich foods, citrus juice, fizzy and hot drinks, or alcohol. Drinks containing caffeine, such as tea, coffee and some energy drinks, have been shown to cause heartburn.",
          "However, triggers can vary. There is no one approach to diet and reflux, and triggers can be very individual.",
        ],
      },
      {
        heading: "Weight, smoking and alcohol",
        paragraphs: [
          "Having a higher weight can put more pressure on the stomach. This makes reflux episodes more likely.",
          "Smoking and drinking excess alcohol appear to increase the risk of heartburn and reflux. When you smoke, the chemicals you inhale can cause the ring of muscle at the lower end of your gullet to relax, which allows stomach acid to come back up more easily.",
          "Drinking alcohol makes your stomach produce more acid than normal. This can irritate your stomach lining and make your symptoms worse.",
        ],
      },
      {
        heading: "Medicines and other conditions",
        paragraphs: [
          "Some medicines can cause heartburn or make it worse, such as anti-inflammatory painkillers like ibuprofen. Your doctor can tell you if any of your other medicines may be playing a part, but do not stop taking a prescribed medicine without speaking to a doctor first.",
          "Other causes include a hiatus hernia, when part of your stomach moves up into your chest, a stomach ulcer, or a bacterial infection in your stomach.",
        ],
      },
      {
        heading: "Pregnancy and posture",
        paragraphs: [
          "Heartburn is common in pregnancy. It can be caused by hormonal changes and the growing baby pressing against the stomach.",
          "Stooping or bending forwards can also increase the risk of heartburn and reflux. Wearing tight clothes can put extra pressure on your tummy.",
        ],
      },
    ],
    helps: [
      "Do not have food or drink that triggers your symptoms.",
      "Cut down on caffeinated drinks, such as tea, coffee, cola and energy drinks.",
      "Try to lose weight if you're overweight.",
      "Do not smoke, and ask your GP about NHS stop smoking services where you live.",
      "Do not drink too much alcohol; if you drink a lot, discuss it with your GP before cutting down.",
      "Ask your doctor if any of your medicines could be playing a part, and do not stop a prescribed medicine without speaking to a doctor first.",
    ],
    tryThisWeek: [
      "Notice which food and drink trigger it.",
      "Cut down on caffeinated drinks.",
      "Ask if your medicines play a part.",
    ],
    ask: "Could any of my medicines, or anything else in my day, be making my reflux worse?",
    interactive: {
      kind: "risk-check",
      title: "What sets yours off?",
      intro: "Tick any that seem to apply. Some you can change, and some you cannot.",
      items: [
        { id: "food", label: "Coffee, chocolate, fatty or spicy food", note: "Certain food and drink can cause heartburn or make it worse. Triggers can be very individual.", changeable: true },
        { id: "weight", label: "A higher weight", note: "Extra weight can put more pressure on the stomach and make reflux episodes more likely.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Chemicals from smoking can relax the ring of muscle at the lower end of the gullet.", changeable: true },
        { id: "alcohol", label: "Alcohol", note: "Alcohol makes your stomach produce more acid than normal, which can make symptoms worse.", changeable: true },
        { id: "stress", label: "Stress and anxiety", note: "These can cause heartburn or make it worse. Try to find ways to relax.", changeable: true },
        { id: "medicines", label: "Some medicines, like ibuprofen", note: "Ask your doctor. Do not stop a prescribed medicine without speaking to a doctor first.", changeable: true },
        { id: "pregnancy", label: "Pregnancy", note: "Hormonal changes and the growing baby pressing on the stomach. A pharmacist can advise on medicines.", changeable: false },
        { id: "hernia", label: "A hiatus hernia", note: "Part of the stomach moves up into the chest. It seems to make reflux more likely.", changeable: false },
      ],
    },
    sources: [NHS_HB, GUTS_HB, NHS_PREGNANCY, NHS_LANSO_FAQ, GUTS_INDIGESTION],
    quiz: {
      question: "Are reflux triggers the same for everyone?",
      options: [{ text: "No, triggers can be very individual", right: true }, { text: "Yes, everyone reacts to the same foods" }, { text: "Only spicy food matters" }],
      why: "There is no one approach to diet and reflux, and triggers can be very individual.",
    },
  },
  {
    id: "gord-symptoms",
    kicker: "Symptoms",
    question: "What else can reflux cause besides heartburn?",
    hook: "A cough that keeps coming back, a hoarse voice, a sour taste. Reflux does not always feel like a burn.",
    short: "The main symptoms are heartburn and an unpleasant sour taste in the mouth. Reflux can also cause a cough or hiccups that keep coming back, a hoarse voice, bad breath, bloating and feeling sick. Symptoms are often worse after eating, when lying down and when bending over.",
    sections: [
      {
        heading: "The main symptoms",
        paragraphs: [
          "The main symptoms of acid reflux are heartburn, a burning sensation in the middle of your chest, and an unpleasant sour taste in your mouth, caused by stomach acid.",
          "Symptoms are often worse after eating, when lying down and when bending over.",
        ],
      },
      {
        heading: "Beyond the burn",
        paragraphs: [
          "You may also have a cough or hiccups that keep coming back, a hoarse voice, bad breath, and bloating and feeling sick.",
          "Some people have slightly different, or atypical, symptoms of reflux. These might include voice changes, a sore throat, bad breath, a cough or problems with teeth that can be picked up by a dentist.",
        ],
      },
      {
        heading: "Food coming back up",
        paragraphs: [
          "Some people notice acid reflux when some stomach contents repeat, coming back up the gullet to the throat or mouth.",
          "Some people feel uncomfortable or have pain when they swallow. They might also need to clear their throat often, cough, or feel like they are choking.",
        ],
      },
      {
        heading: "Where it is felt",
        paragraphs: [
          "Sometimes heartburn can be felt deep in the chest, even in the back. In some cases, the burning feeling can extend all the way up to the throat.",
          "It is common for symptoms to be worse at night or when lying down.",
        ],
      },
      {
        heading: "Heartburn, indigestion or something else",
        paragraphs: [
          "Indigestion means pain or discomfort in the upper abdomen or lower chest. It can include feeling full and bloated, feeling sick, burping, and bringing up food or bitter-tasting fluids.",
          "Chest pain has many causes, and pain that starts after eating, with bringing up food or bitter tasting fluids and feeling full and bloated, may be heartburn or indigestion. But call 999 if you get sudden pain or discomfort in your chest that does not go away, pain that spreads to your arms, neck, jaw, stomach or back, or chest pain and you feel sweaty, sick, light headed or short of breath.",
        ],
      },
    ],
    helps: [
      "Notice when symptoms come on: they are often worse after eating, when lying down and when bending over.",
      "See a GP if you have heartburn most days.",
      "See a GP if you also have symptoms like food getting stuck in your throat, frequently being sick, or losing weight for no reason.",
      "If your symptoms are getting worse at any time, contact a GP or call 111.",
      "Call 999 if you get sudden chest pain that does not go away, or chest pain and you feel sweaty, sick, light headed or short of breath.",
    ],
    tryThisWeek: [
      "Note when your symptoms come on.",
      "See a GP if it is most days.",
      "Know when chest pain means 999.",
    ],
    ask: "Could my cough, hoarse voice or sore throat be caused by reflux?",
    interactive: {
      kind: "signs",
      title: "Symptoms to note",
      intro: "Tick any you have noticed. The list is ready to show a pharmacist or GP.",
      signs: [
        "Burning in the middle of the chest",
        "A sour taste in the mouth",
        "A cough or hiccups that keep coming back",
        "A hoarse voice",
        "Bad breath",
        "Bloating and feeling sick",
        "Food or fluid coming back up",
        "A sore throat",
        "Pain when swallowing",
        "Worse at night or when lying down",
      ],
      after: "Show this list to a pharmacist or GP. If you get sudden chest pain that does not go away, call 999.",
      copyHeading: "My reflux symptoms",
    },
    sources: [NHS_HB, GUTS_HB, GUTS_INDIGESTION, NHS_INDIGESTION, NHS_CHEST_PAIN],
    quiz: {
      question: "Which of these can be a symptom of acid reflux?",
      options: [{ text: "A cough that keeps coming back", right: true }, { text: "A rash on the hands" }, { text: "Blurred vision" }],
      why: "You may also have a cough or hiccups that keep coming back, a hoarse voice, bad breath, and bloating and feeling sick.",
    },
  },
  {
    id: "gord-checks",
    kicker: "Getting help",
    question: "Which reflux symptoms should a GP check?",
    hook: "Most heartburn is nothing serious. A few symptoms are worth getting checked, and a few need help straight away.",
    short: "See a GP if lifestyle changes and pharmacy medicines are not helping, if you have heartburn most days, or if you also have symptoms like food getting stuck, being sick often or losing weight for no reason. Vomiting blood and feeling unwell, faint or dizzy, or sudden chest pain that does not go away, means calling 999.",
    sections: [
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if lifestyle changes and pharmacy medicines are not helping your heartburn, or you have heartburn most days.",
          "Also see a GP if you have other symptoms, like food getting stuck in your throat, frequently being sick, or losing weight for no reason. A GP can provide alternative or stronger treatments and help rule out any more serious causes of your symptoms.",
        ],
      },
      {
        heading: "Three weeks or more",
        paragraphs: [
          "Guts UK says to see your GP if you have heartburn most days for three weeks or more, or heartburn, indigestion, hiccups or an unpleasant taste in your mouth for three weeks or more.",
          "These symptoms are very common and can be caused by many different conditions. Having them does not definitely mean you have cancer. But it's important to get them checked, because if they're caused by cancer, finding it early makes it more treatable.",
        ],
      },
      {
        heading: "When symptoms are familiar",
        paragraphs: [
          "If you have gastro-oesophageal reflux disease, you may get symptoms like these regularly, and you might find you get used to them. But it's important to be checked by a GP if your symptoms change, get worse, or do not feel normal for you.",
          "Taking omeprazole can make it harder to notice symptoms of some serious conditions, such as stomach cancer. See a GP if you're worried.",
        ],
      },
      {
        heading: "An urgent GP appointment or NHS 111",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have indigestion or acid reflux and you have lost weight without trying, swallowing becomes difficult, you're being sick frequently, there's blood in your sick, or you have pain in your upper tummy.",
          "Also ask for an urgent GP appointment or get help from NHS 111 if you're being sick for more than 2 days, or your poo is black or dark red.",
        ],
      },
      {
        heading: "When to call 999",
        paragraphs: [
          "Call 999 or go to A&E if you are vomiting blood and you feel generally unwell, confused, faint or dizzy, have rapid or shallow breathing, have cold, clammy, pale skin, have tummy pain or have black poo.",
          "Call 999 if you get sudden pain or discomfort in your chest that does not go away. The pain can feel like squeezing or pressure inside your chest, burning or indigestion. You could be having a heart attack.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        ],
      },
    ],
    helps: [
      "See a GP if you have heartburn most days, or pharmacy medicines are not helping.",
      "See a GP if food gets stuck in your throat, you are frequently sick, or you lose weight for no reason.",
      "Get checked by a GP if your usual symptoms change, get worse, or do not feel normal for you.",
      "Ask for an urgent GP appointment or get help from NHS 111 if swallowing becomes difficult or there's blood in your sick.",
      "Call 999 or go to A&E if you are vomiting blood and feel unwell, faint or dizzy, or have black poo.",
      "Call 999 for sudden chest pain or discomfort that does not go away.",
    ],
    tryThisWeek: [
      "Book a GP visit if it is most days.",
      "Notice any change in your symptoms.",
      "Know when to call 111 or 999.",
    ],
    ask: "Do any of my symptoms mean I need tests, and what should make me come back sooner?",
    interactive: {
      kind: "scenarios",
      title: "Who to contact",
      scenarios: [
        {
          id: "most-days",
          situation: "You have had heartburn most days for three weeks.",
          options: [{ text: "See a GP", best: true }, { text: "Keep buying antacids and wait" }],
          why: "See your GP if you have heartburn most days for three weeks or more. Finding a serious cause early makes it more treatable.",
        },
        {
          id: "swallowing",
          situation: "Swallowing has started to feel difficult.",
          options: [{ text: "Ask for an urgent GP appointment or call 111", best: true }, { text: "Wait for it to settle on its own" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if swallowing becomes difficult.",
        },
        {
          id: "vomiting-blood",
          situation: "You have vomited blood and feel faint.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Book a routine GP appointment" }, { text: "Drive yourself to hospital" }],
          why: "Call 999 or go to A&E if you are vomiting blood and feel faint or dizzy. Do not drive to A&E.",
        },
        {
          id: "chest-pain",
          situation: "Sudden chest pain will not go away, and you feel sweaty.",
          options: [{ text: "Call 999", best: true }, { text: "Take an antacid and wait" }],
          why: "You could be having a heart attack. Call 999 straight away as you need immediate treatment in hospital.",
        },
      ],
    },
    sources: [NHS_HB, GUTS_HB, NHS_OESCA_SYMPTOMS, NHS_OMEPRAZOLE, NHS_HIATUS, NHS_VOMITING_BLOOD, NHS_CHEST_PAIN],
    quiz: {
      question: "What should you do about sudden chest pain that does not go away?",
      options: [{ text: "Call 999", right: true }, { text: "Take an antacid and wait" }, { text: "Book a routine appointment" }],
      why: "Call 999 if you get sudden pain or discomfort in your chest that does not go away. You could be having a heart attack.",
    },
  },
  {
    id: "gord-self-help",
    kicker: "Self-help",
    question: "What can I change day to day to ease reflux?",
    hook: "Smaller meals, an earlier dinner, a looser waistband. Simple changes can stop or reduce heartburn.",
    short: "Simple lifestyle changes can help stop or reduce heartburn. Eat smaller, more frequent meals, try to lose weight if you're overweight, find ways to relax, and avoid the food and drink that trigger your symptoms. Not smoking, drinking less alcohol and not eating late can also help.",
    sections: [
      {
        heading: "Small changes first",
        paragraphs: [
          "Simple lifestyle changes can help stop or reduce heartburn.",
          "Most treatments are lifestyle changes. Your symptoms are likely to lessen if you take measures to reduce the amount of reflux you have. Quitting smoking and reducing alcohol can help a lot.",
        ],
      },
      {
        heading: "What to do, and what to avoid",
        paragraphs: [
          "Eat smaller, more frequent meals, try to lose weight if you're overweight, and try to find ways to relax.",
          "Do not have food or drink that triggers your symptoms, and do not eat within 3 or 4 hours before bed.",
          "Do not wear clothes that are tight around your waist.",
        ],
      },
      {
        heading: "Weight",
        paragraphs: [
          "Excess body weight can create upward pressure from the stomach. If you have a higher than healthy weight, it can be helpful to take steps to reduce it.",
          "You can speak to your GP about the weight management services that are available in your area.",
        ],
      },
      {
        heading: "Smoking and alcohol",
        paragraphs: [
          "Ask your GP about NHS stop smoking services where you live. There are many different methods to use, and stopping can have other benefits to health.",
          "Check your alcohol intake, and reduce it if needed to within healthy limits. Health advice is not to have more than 14 units a week, with some alcohol-free days during the week. If you drink a lot, discuss it with your GP before cutting down.",
        ],
      },
      {
        heading: "What the guidance says",
        paragraphs: [
          "NICE says people should be offered simple lifestyle advice, including advice on healthy eating, weight reduction and stopping smoking. Raising the head of the bed and having a main meal well before going to bed may help some people.",
          "Do not stop taking any prescribed medicine without speaking to a doctor first.",
        ],
      },
    ],
    helps: [
      "Eat smaller, more frequent meals.",
      "Do not eat within 3 or 4 hours before bed.",
      "Do not wear clothes that are tight around your waist.",
      "Try to lose weight if you're overweight, and ask your GP about local weight management services.",
      "Ask your GP about NHS stop smoking services where you live.",
      "Keep to no more than 14 units of alcohol a week, with some alcohol-free days.",
    ],
    tryThisWeek: [
      "Eat smaller meals, more often.",
      "Stop eating 3 hours before bed.",
      "Swap tight waistbands for looser ones.",
    ],
    ask: "Which changes are likely to help me most, and is there local support for them?",
    interactive: {
      kind: "scenarios",
      title: "Small everyday choices",
      scenarios: [
        {
          id: "late-meal",
          situation: "It's late in the evening and you're very hungry.",
          options: [{ text: "A smaller meal, earlier next time", best: true }, { text: "A large meal just before bed" }],
          why: "Eat smaller, more frequent meals, and do not eat within 3 or 4 hours before bed.",
        },
        {
          id: "waistband",
          situation: "Your favourite trousers are tight around the waist.",
          options: [{ text: "Choose something looser", best: true }, { text: "Wear them anyway" }],
          why: "Do not wear clothes that are tight around your waist.",
        },
        {
          id: "smoking",
          situation: "You smoke, and you would like to stop.",
          options: [{ text: "Ask your GP about stop smoking services", best: true }, { text: "Keep going: it makes no difference" }],
          why: "Quitting smoking and reducing alcohol can help a lot. Ask your GP about NHS stop smoking services where you live.",
        },
        {
          id: "medicine",
          situation: "You think a prescribed medicine is making it worse.",
          options: [{ text: "Speak to a doctor before stopping it", best: true }, { text: "Stop taking it straight away" }],
          why: "Do not stop taking any prescribed medicine without speaking to a doctor first.",
        },
      ],
    },
    sources: [NHS_HB, GUTS_HB, NICE_CG184],
    quiz: {
      question: "How long before bed does the NHS say to stop eating?",
      options: [{ text: "3 or 4 hours", right: true }, { text: "10 minutes" }, { text: "It makes no difference" }],
      why: "Do not eat within 3 or 4 hours before bed.",
    },
  },
  {
    id: "gord-pharmacy",
    kicker: "Treatment",
    question: "Which pharmacy medicines help heartburn, and how do I take them?",
    hook: "Quick relief for a few hours, best taken after meals and at bedtime. Helpful, but not a long-term fix.",
    short: "A pharmacist may recommend antacids, which neutralise stomach acid, or alginates such as Gaviscon, which form a protective layer on top of the stomach contents. They work best taken with or soon after food, and at bedtime. They ease symptoms in the short term but will not cure the problem.",
    sections: [
      {
        heading: "Ask a pharmacist",
        paragraphs: [
          "Speak to a pharmacist for advice if you keep getting heartburn. They may recommend medicines called antacids or alginates that can help ease your symptoms.",
          "If you're pregnant, a pharmacist can advise you about medicines you can take.",
        ],
      },
      {
        heading: "How antacids work",
        paragraphs: [
          "Antacids are medicines that neutralise the acid in your stomach to relieve indigestion and heartburn. They come as a liquid or chewable tablets and can be bought from pharmacies and shops without a prescription.",
          "They can quickly relieve your symptoms for a few hours. But they do not treat the underlying cause and long-term use is not recommended.",
        ],
      },
      {
        heading: "How alginates work",
        paragraphs: [
          "Gaviscon is a type of medicine called a reflux suppressant. It contains alginic acid, made from seaweed, which makes a protective foam layer that floats on top of the contents of your stomach. This stops stomach acid moving up into your food pipe.",
          "Gaviscon also contains an antacid that helps the pain and discomfort. The effect of 1 dose should last for around 4 hours.",
        ],
      },
      {
        heading: "When to take them",
        paragraphs: [
          "It's best to take these medicines with food or soon after eating, as this is when you're most likely to get heartburn. They may also work for longer if taken with food.",
          "For most people, the best time to take antacids is with or soon after meals, and just before going to bed.",
          "Antacids can affect how well other medicines work, so do not take other medicines within 2 to 4 hours of taking an antacid.",
        ],
      },
      {
        heading: "Not for the long term",
        paragraphs: [
          "Although antacids and alginates help symptoms in the short term, they will not cure the problem and should not be taken regularly for long periods. Speak to a GP if you find you need to take antacids regularly.",
          "If you buy Gaviscon without a prescription, do not take it for longer than 7 days without checking with a doctor.",
          "Some antacids contain high levels of sodium. Speak to a pharmacist or GP first if you have liver disease, kidney disease or heart failure, need to control the salt in your diet, or are taking other medicines.",
        ],
      },
    ],
    helps: [
      "Speak to a pharmacist for advice if you keep getting heartburn.",
      "Take antacids or alginates with or soon after meals, and just before going to bed.",
      "Do not take other medicines within 2 to 4 hours of taking an antacid.",
      "Chew Gaviscon tablets rather than swallowing them whole, and measure the liquid with the plastic spoon, not a kitchen spoon.",
      "Tell the pharmacist if you're pregnant, as some antacids are not suitable during pregnancy.",
      "Speak to a GP if you need antacids regularly, or still feel uncomfortable after 7 days of Gaviscon.",
    ],
    tryThisWeek: [
      "Ask a pharmacist which product suits you.",
      "Take it after meals and at bedtime.",
      "Leave a gap before other medicines.",
    ],
    ask: "Is an antacid or an alginate right for me, and how long can I take it before coming back?",
    interactive: {
      kind: "flip-cards",
      title: "Pharmacy medicines, card by card",
      intro: "Turn each card to see what each one does.",
      cards: [
        { id: "antacid", front: "Antacids", when: "For quick relief", back: "Neutralise the acid in your stomach. Relief for a few hours, but they do not treat the underlying cause." },
        { id: "alginate", front: "Alginates, like Gaviscon", when: "Especially for reflux", back: "A protective foam layer floats on the stomach contents and stops acid moving up into the food pipe." },
        { id: "timing", front: "When to take them", when: "After meals and at bedtime", back: "This is when you're most likely to get heartburn. They may work for longer if taken with food." },
        { id: "gap", front: "Other medicines", when: "Leave a gap", back: "Do not take other medicines within 2 to 4 hours of taking an antacid." },
        { id: "ppi", front: "Pharmacy PPIs", when: "Another option", back: "You can buy the lowest strength omeprazole and esomeprazole from pharmacies." },
      ],
    },
    sources: [NHS_HB, NHS_ANTACIDS, NHS_GAVISCON_FAQ, NHS_GAVISCON_ABOUT, NHS_GAVISCON_HOW, NHS_PREGNANCY],
    quiz: {
      question: "How long do antacids usually relieve symptoms for?",
      options: [{ text: "A few hours", right: true }, { text: "A few weeks" }, { text: "They cure reflux for good" }],
      why: "They can quickly relieve your symptoms for a few hours. But they do not treat the underlying cause.",
    },
  },
  {
    id: "gord-ppis",
    kicker: "Treatment",
    question: "How do PPIs like omeprazole work, and how long will I take them?",
    hook: "They turn down the acid at its source. A first course usually lasts 4 or 8 weeks.",
    short: "A GP may prescribe a proton pump inhibitor (PPI), such as omeprazole or lansoprazole, which reduces how much acid your stomach makes. You'll usually take it for 4 or 8 weeks, depending on how serious your reflux is. If a PPI does not help, a different medicine called an H2 blocker may be tried.",
    sections: [
      {
        heading: "How they work",
        paragraphs: [
          "If you have acid reflux, a GP may prescribe a medicine called a proton pump inhibitor, or PPI, that reduces how much acid your stomach makes. PPIs include omeprazole and lansoprazole.",
          "Proton pumps are enzymes in the lining of your stomach that help it make acid to digest your food. A PPI stops them working properly, which reduces the amount of acid your stomach makes.",
        ],
      },
      {
        heading: "How long for",
        paragraphs: [
          "You'll usually need to take this type of medicine for 4 or 8 weeks, depending on how serious your acid reflux is.",
          "You should start to feel better within 2 to 3 days. It may take up to 4 weeks for lansoprazole to work fully, so you may still have some symptoms during this time.",
          "Go back to the GP if your symptoms return after stopping your medicine. You may need a long-term prescription.",
        ],
      },
      {
        heading: "Taking them well",
        paragraphs: [
          "Lansoprazole works best if you take it at least 30 minutes before a meal or snack, because food stops some of it getting into your system. If you take omeprazole once a day, try to take it at the same time each morning, with or without food.",
          "Swallow tablets and capsules with water. Do not chew or crush capsules or tablets labelled enteric coated or gastro resistant.",
          "If you need an antacid, take it at least 2 hours before or after your dose of lansoprazole. Antacids can stop lansoprazole working as well.",
        ],
      },
      {
        heading: "Buying them at a pharmacy",
        paragraphs: [
          "You can buy some types of omeprazole from pharmacies and shops, but most types are only available with a prescription. The tablets you can buy without a prescription are only for adults over 18 years old.",
          "Do not take omeprazole for longer than 2 weeks if you bought it without a prescription. See a GP if your symptoms get worse or do not get better.",
        ],
      },
      {
        heading: "Side effects and other options",
        paragraphs: [
          "Common side effects of omeprazole include a headache, stomach pain, feeling or being sick, constipation or diarrhoea, and farting more than usual. Speak to a pharmacist or doctor if side effects bother you or do not go away, and keep taking your medicine unless you're advised not to.",
          "If a PPI does not help, your doctor may suggest trying a different type of medicine called an H2 receptor antagonist, such as famotidine.",
          "Tell your doctor or a pharmacist if you're taking any other medicines, herbal remedies, vitamins or supplements, as some do not mix well with omeprazole.",
        ],
      },
    ],
    helps: [
      "Take your PPI at the same time each day; lansoprazole works best at least 30 minutes before a meal.",
      "Give it time: you should feel better within 2 to 3 days, but it can take up to 4 weeks to work fully.",
      "Leave at least 2 hours between an antacid and your dose of lansoprazole.",
      "Do not take pharmacy omeprazole for longer than 2 weeks; see a GP if symptoms do not get better.",
      "Go back to the GP if your symptoms return after stopping your medicine.",
      "Tell your doctor or pharmacist about any other medicines, herbal remedies, vitamins or supplements.",
    ],
    tryThisWeek: [
      "Take it at the same time each day.",
      "Leave 2 hours around antacids.",
      "Tell the pharmacist your other medicines.",
    ],
    ask: "How long should I take this PPI, and what should happen when the course ends?",
    interactive: {
      kind: "timeline",
      title: "A course of PPIs, step by step",
      steps: [
        { id: "start", when: "Day 1", title: "Starting", points: ["Usually once a day, first thing in the morning", "Lansoprazole works best 30 minutes before a meal"] },
        { id: "days", when: "2 to 3 days", title: "Starting to feel better", points: ["You should start to feel better", "You may still have some symptoms for a while"] },
        { id: "weeks", when: "Up to 4 weeks", title: "Working fully", points: ["It may take up to 4 weeks to work fully"] },
        { id: "end", when: "4 or 8 weeks", title: "The end of the course", points: ["The usual length, depending on how serious reflux is", "Go back to the GP if symptoms return after stopping"] },
      ],
    },
    sources: [NHS_HB, NHS_LANSO_FAQ, NHS_LANSO_HOW, NHS_OMEPRAZOLE],
    quiz: {
      question: "How long is a usual course of PPIs for acid reflux?",
      options: [{ text: "4 or 8 weeks", right: true }, { text: "One day" }, { text: "Always for life" }],
      why: "You'll usually need to take this type of medicine for 4 or 8 weeks, depending on how serious your acid reflux is.",
    },
  },
  {
    id: "gord-tests",
    kicker: "Tests",
    question: "What tests might I have for reflux?",
    hook: "Most people never need one. When they do, a camera test takes 15 to 45 minutes and should not be painful.",
    short: "If medicines do not help or your symptoms are severe, a GP may refer you for tests. The main one is a gastroscopy, where a thin tube with a camera checks your food pipe and stomach. Other tests include a capsule sponge test, a barium swallow and pH testing.",
    sections: [
      {
        heading: "When tests are needed",
        paragraphs: [
          "If medicines do not help or your symptoms are severe, a GP may refer you to a specialist for tests to find out what's causing your symptoms.",
          "This can include tests to check for bacteria that can cause heartburn, which can be treated with a combination of antibiotics and PPIs.",
          "Very commonly, people with reflux symptoms have only a little inflammation, or their gullet looks entirely normal.",
        ],
      },
      {
        heading: "Gastroscopy",
        paragraphs: [
          "A gastroscopy is a test to check inside your food pipe, stomach and the top of your intestine using a thin tube with a camera inside it. The tube goes into your mouth or nose and down your throat into your stomach.",
          "You'll be offered a local anaesthetic spray to numb your throat, or sedation to help you relax. A gastroscopy should not be painful, and you can ask for it to be stopped at any time. It should take 15 to 45 minutes.",
          "A sample of cells may be taken, called a biopsy. You will not feel anything if this happens.",
        ],
      },
      {
        heading: "Getting ready",
        paragraphs: [
          "On the day, you'll need to stop eating at least 6 hours before the test, but you may be able to have small sips of water. Bring along the details of any medicines you take.",
          "Omeprazole can affect the result of a gastroscopy. You may need to stop taking it for a few days or weeks before the test, so check with the hospital or clinic.",
          "If you have sedation, you'll need someone to take you home and stay with you for 24 hours. Do not drink alcohol or drive for 24 hours after sedation.",
        ],
      },
      {
        heading: "Other tests",
        paragraphs: [
          "The capsule sponge test is a new test available in some parts of the UK. You swallow a small capsule with a sponge inside, attached to a thread. After about seven minutes the capsule dissolves, and a nurse removes the sponge by pulling on the thread, collecting cells from the lining of the food pipe.",
          "A barium swallow involves drinking a barium liquid and having X-rays. It gives less information than an endoscopy, but might be an alternative if an endoscopy cannot be done.",
          "In some cases, like when surgery is needed or medicine hasn't helped, you may need pH testing. A thin, flexible tube through your nose tracks acid reflux all day as you go about your usual activities.",
        ],
      },
      {
        heading: "After a gastroscopy",
        paragraphs: [
          "You may have some stomach and throat pain afterwards. This is normal and should pass in a few hours. If you had a biopsy, it can take up to 2 months to get the results.",
          "Call 111, or the hospital where you had the test, if you have a high temperature or poo that's dark or black, like tar. Call 999 or go to A&E if you keep being sick, are vomiting blood, are short of breath, or have severe stomach or chest pain, or pain that gets worse.",
        ],
      },
    ],
    helps: [
      "Follow the instructions in your letter about when to stop eating and drinking.",
      "Check with the hospital whether to stop taking your PPI before the test.",
      "Bring along the details of any medicines you take.",
      "If you have sedation, arrange for someone to take you home and stay with you for 24 hours.",
      "Ask whether you need an endoscopy, and what the results show.",
    ],
    tryThisWeek: [
      "Read your appointment letter.",
      "Ask about stopping your PPI.",
      "Arrange a lift home if sedated.",
    ],
    ask: "Do I need an endoscopy, and what will happen with my reflux medicines before it?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, card by card",
      intro: "Turn each card to see what each test does.",
      cards: [
        { id: "gastroscopy", front: "Gastroscopy", when: "The main test", back: "A thin tube with a camera checks your food pipe, stomach and the top of your intestine." },
        { id: "sponge", front: "Capsule sponge test", when: "In some parts of the UK", back: "A sponge on a thread collects cells from the lining of the food pipe as it comes out." },
        { id: "barium", front: "Barium swallow", when: "If an endoscopy cannot be done", back: "You drink a barium liquid and have X-rays. It gives less information than an endoscopy." },
        { id: "ph", front: "pH testing", when: "Before surgery, or if medicine has not helped", back: "A thin tube through your nose tracks acid reflux all day as you go about your usual activities." },
        { id: "bacteria", front: "Tests for bacteria", when: "To find a treatable cause", back: "Check for bacteria that can cause heartburn, treated with antibiotics and PPIs." },
      ],
    },
    sources: [NHS_HB, GUTS_HB, NHS_GASTROSCOPY, NHS_OMEPRAZOLE],
    quiz: {
      question: "Should a gastroscopy be painful?",
      options: [{ text: "No, and you can ask for it to stop at any time", right: true }, { text: "Yes, it is always painful" }, { text: "Only if you are awake" }],
      why: "A gastroscopy should not be painful, and you can ask for it to be stopped at any time.",
    },
  },
  {
    id: "gord-night",
    kicker: "Living well",
    question: "Why is reflux worse at night, and what helps?",
    hook: "Lying flat makes it easier for acid to travel. Raising the head of the bed, not adding pillows, is what the NHS suggests.",
    short: "Reflux is often worse when lying down. Not eating within 3 or 4 hours of bed, raising the head of the bed by around 10 to 20cm and sleeping on your left side can help. Extra pillows are not recommended, as they can increase pressure on your belly.",
    sections: [
      {
        heading: "Why nights are harder",
        paragraphs: [
          "Symptoms are often worse after eating, when lying down and when bending over.",
          "It is common for symptoms to be worse at night or when lying down. For some people, heartburn and reflux can affect sleep.",
        ],
      },
      {
        heading: "Raise the head of the bed",
        paragraphs: [
          "Using wood, bricks or books to raise the head of your bed by around 10 to 20cm, so your chest and head are above your waist, may help relieve symptoms. This can help stop stomach acid travelling up towards your throat.",
          "But do not try to get the same effect by using extra pillows, as this can increase pressure on your belly and make your symptoms worse.",
          "For people who lie flat, a wedge pillow or raising the head of the bed or mattress by up to 20cm may reduce night-time symptoms.",
        ],
      },
      {
        heading: "Sleeping position",
        paragraphs: [
          "Sleeping on your left side can help.",
        ],
      },
      {
        heading: "Timing the last meal",
        paragraphs: [
          "Do not eat within 3 or 4 hours before bed.",
          "Avoid late-night, high-fat meals so you don't go to bed with a full stomach. Eat your main evening meal at least three hours before going to bed, and cut down on late-night snacking.",
        ],
      },
      {
        heading: "Medicines at bedtime, and when to get checked",
        paragraphs: [
          "Antacids and alginates can be useful to take after meals and before going to bed to reduce night-time symptoms. H2 blockers, such as famotidine, can be taken before bedtime.",
          "Waking from reflux symptoms at night is a strong risk factor for Barrett's oesophagus. Ignoring reflux symptoms or self-medicating with antacids can lead to a delayed diagnosis, so see a GP if you have heartburn most days.",
        ],
      },
    ],
    helps: [
      "Raise the head of your bed by around 10 to 20cm, using wood, bricks or books.",
      "Do not use extra pillows to raise yourself, as this can make symptoms worse.",
      "Try sleeping on your left side.",
      "Eat your main evening meal at least three hours before going to bed.",
      "Ask a pharmacist about an antacid or alginate before bed to reduce night-time symptoms.",
      "See a GP if you have heartburn most days.",
    ],
    tryThisWeek: [
      "Raise the head of your bed.",
      "Try sleeping on your left side.",
      "Eat dinner three hours before bed.",
    ],
    ask: "Reflux wakes me at night: do I need any tests or a different treatment?",
    interactive: {
      kind: "scenarios",
      title: "Bedtime choices",
      scenarios: [
        {
          id: "pillows",
          situation: "You want to sleep more upright.",
          options: [{ text: "Raise the head of the bed by 10 to 20cm", best: true }, { text: "Pile up extra pillows" }],
          why: "Do not use extra pillows, as this can increase pressure on your belly and make your symptoms worse.",
        },
        {
          id: "supper",
          situation: "Your main meal is usually just before bed.",
          options: [{ text: "Move it to at least three hours before bed", best: true }, { text: "Keep it late but eat faster" }],
          why: "Eat your main evening meal at least three hours before going to bed. Eating too quickly can cause symptoms too.",
        },
        {
          id: "side",
          situation: "You are not sure which side to sleep on.",
          options: [{ text: "Your left side", best: true }, { text: "Your right side" }],
          why: "Sleeping on your left side can help.",
        },
        {
          id: "waking",
          situation: "Reflux wakes you most nights.",
          options: [{ text: "See a GP", best: true }, { text: "Keep taking antacids and ignore it" }],
          why: "Ignoring reflux symptoms or self-medicating with antacids can lead to a delayed diagnosis.",
        },
      ],
    },
    sources: [NHS_HB, GUTS_HB, NHS_PREGNANCY, GUTS_BARRETTS],
    quiz: {
      question: "Why are extra pillows not recommended for reflux?",
      options: [{ text: "They can increase pressure on your belly", right: true }, { text: "They make the bed too warm" }, { text: "They make no difference either way" }],
      why: "Do not try to get the same effect by using extra pillows, as this can increase pressure on your belly and make your symptoms worse.",
    },
  },
  {
    id: "gord-eating",
    kicker: "Living well",
    question: "Does how and when I eat make a difference?",
    hook: "Not only what is on the plate. Smaller meals, slower chewing and an earlier dinner can ease reflux.",
    short: "How you eat matters as well as what you eat. Eating smaller meals more often, chewing well, not skipping breakfast and having your main evening meal at least three hours before bed can help. Rich, spicy and fatty foods, and caffeinated drinks, are common triggers.",
    sections: [
      {
        heading: "How, not only what",
        paragraphs: [
          "You may find it helpful to look at how you eat as well as what you eat. The way that you eat might help to reduce symptoms.",
        ],
      },
      {
        heading: "Smaller, slower meals",
        paragraphs: [
          "Eat smaller, more frequent meals.",
          "Eating meals too quickly can cause symptoms, so chew each mouthful well before swallowing. Eating beyond fullness, such as large meals, can cause symptoms too, so eat little but more often if necessary.",
          "Sit up straight when you eat. This will take the pressure off your stomach.",
        ],
      },
      {
        heading: "Timing",
        paragraphs: [
          "Avoid late-night, high-fat meals so you don't go to bed with a full stomach. Eat your main evening meal at least three hours before going to bed.",
          "Reduce late-night snacking if this applies to you, and do not skip breakfast.",
        ],
      },
      {
        heading: "Foods that can trigger symptoms",
        paragraphs: [
          "It's best to avoid foods that seem to make your symptoms worse, such as rich, spicy and fatty foods, and acidic foods like tomatoes, citrus fruits, salad dressings and fizzy drinks.",
          "It also helps to cut down on caffeinated drinks, such as tea, coffee, cola and energy drinks, as well as alcohol.",
          "The evidence for cutting out particular foods is inconclusive, and triggers can be very individual. Reducing the foods that seem to trigger your symptoms might be helpful.",
        ],
      },
      {
        heading: "After eating",
        paragraphs: [
          "Try to avoid bending forward or wearing tight clothes, as this can put extra pressure on your tummy.",
          "Antacids and alginates are best taken with food or soon after eating, as this is when you're most likely to get heartburn.",
        ],
      },
    ],
    helps: [
      "Eat smaller, more frequent meals, and chew each mouthful well.",
      "Eat your main evening meal at least three hours before going to bed.",
      "Do not skip breakfast, and reduce late-night snacking.",
      "Sit up straight when you eat.",
      "Cut down on caffeinated drinks, such as tea, coffee, cola and energy drinks.",
      "Notice which foods seem to make your symptoms worse, as triggers can be very individual.",
    ],
    tryThisWeek: [
      "Chew each mouthful well.",
      "Have breakfast every day.",
      "Note which foods set it off.",
    ],
    ask: "Would it help to see a dietitian about my reflux?",
    interactive: {
      kind: "timeline",
      title: "A day of eating, step by step",
      steps: [
        { id: "morning", when: "Morning", title: "Do not skip breakfast", points: ["Sit up straight when you eat", "This takes the pressure off your stomach"] },
        { id: "day", when: "Through the day", title: "Little and often", points: ["Smaller, more frequent meals", "Chew each mouthful well before swallowing"] },
        { id: "evening", when: "Evening", title: "An earlier main meal", points: ["At least three hours before going to bed", "Avoid late-night, high-fat meals"] },
        { id: "bedtime", when: "Bedtime", title: "No full stomach", points: ["Reduce late-night snacking", "Avoid bending forward after eating"] },
      ],
    },
    sources: [NHS_HB, GUTS_HB, NHS_LANSO_FAQ],
    quiz: {
      question: "Which eating habit can help with reflux?",
      options: [{ text: "Chewing each mouthful well", right: true }, { text: "Eating large meals quickly" }, { text: "Skipping breakfast" }],
      why: "Eating meals too quickly can cause symptoms, so chew each mouthful well before swallowing.",
    },
  },
  {
    id: "gord-long-term",
    kicker: "Follow-up",
    question: "Is it safe to take reflux tablets for a long time?",
    hook: "Some people need them for years. The aim is the lowest dose that works, with a review every year.",
    short: "Some people need acid-reducing tablets for months or years. PPIs are generally safe and very effective, but long-term use may raise the chance of some side effects, so they are best taken for the shortest time at the lowest dose. NICE says people on long-term treatment should be offered a review once a year.",
    sections: [
      {
        heading: "Why some people need them long term",
        paragraphs: [
          "Go back to the GP if your symptoms return after stopping your medicine. You may need a long-term prescription.",
          "For some conditions confirmed by endoscopy, staying on these medicines long term may be suggested. These are severe GORD, a narrowing of the gullet called an oesophageal stricture, and Barrett's oesophagus.",
        ],
      },
      {
        heading: "The lowest dose that works",
        paragraphs: [
          "It is recommended that PPIs are taken for the shortest time at the lowest dose. Your doctor may advise coming off the medicine, and if your symptoms return, may lower the dose to the lowest level that manages them.",
          "NICE says people who need long-term treatment should be offered a review of their condition once a year, and encouraged to try stepping down or stopping treatment, unless there is a condition that needs it to continue. Doctors may also talk about using the treatment only when it is needed.",
        ],
      },
      {
        heading: "Possible long-term effects",
        paragraphs: [
          "PPIs are remarkably safe and among the most commonly taken medicines worldwide. Using them long term may increase the risk of bowel infections and bone fractures.",
          "If you take lansoprazole for more than 3 months, the levels of magnesium in your blood may fall. Low magnesium can make you feel tired, confused and dizzy, and cause muscle twitches, shaking and an irregular heartbeat. If you get any of these symptoms, tell your doctor.",
          "Taking it for more than a year may increase the chance of bone fractures, gut infections and low vitamin B12. If you take it for longer than 1 year, your doctor will regularly check your health to see if you should carry on taking it.",
        ],
      },
      {
        heading: "Stopping safely",
        paragraphs: [
          "Usually, you can stop taking a PPI like lansoprazole without reducing the dose first. But if you've taken it for a long time, speak to your doctor before you stop. Stopping suddenly could make your stomach produce a lot more acid, and make your symptoms come back.",
          "Reducing the dose gradually before stopping completely will prevent this happening. If you've taken Gaviscon regularly for a long time, talk to your doctor before you stop taking that too.",
        ],
      },
      {
        heading: "Keeping watch",
        paragraphs: [
          "There is some information to suggest that people taking medicines that reduce stomach acid might have a very small increased chance of developing stomach cancer. It could be more likely in people taking them for longer than 3 years, but studies involving more people need to be done to be sure.",
          "It's important to speak to your doctor if you notice problems swallowing, feeling or being sick, feeling full very quickly when eating, or losing weight without trying.",
        ],
      },
    ],
    helps: [
      "Go back to the GP if your symptoms return after stopping your medicine.",
      "Ask for a review of your treatment once a year.",
      "Speak to your doctor before stopping a PPI you have taken for a long time.",
      "Tell your doctor about tiredness, confusion, dizziness, muscle twitches, shaking or an irregular heartbeat.",
      "Speak to your doctor if you have problems swallowing, feel full very quickly, or lose weight without trying.",
      "Talk to your GP, pharmacist or specialist about any concerns about your acid medicine.",
    ],
    tryThisWeek: [
      "Ask when your medicine review is due.",
      "Do not stop a long-term PPI suddenly.",
      "Note any new symptoms to report.",
    ],
    ask: "Do I still need this dose, and could I try a lower dose or taking it only when needed?",
    interactive: {
      kind: "signs",
      title: "Things to mention at your review",
      intro: "Tick any you have noticed while taking acid-reducing tablets.",
      signs: [
        "Feeling tired, confused or dizzy",
        "Muscle twitches or shaking",
        "An irregular heartbeat",
        "A sore, red tongue or mouth ulcers",
        "Pins and needles",
        "Problems swallowing",
        "Feeling full very quickly when eating",
        "Losing weight without trying",
        "Symptoms coming back after stopping",
      ],
      after: "Tell your doctor about these. If you have taken a PPI for a long time, speak to them before you stop.",
      copyHeading: "To mention at my medicine review",
    },
    sources: [NHS_HB, GUTS_HB, NICE_CG184, NHS_LANSO_FAQ, NHS_LANSO_HOW, NHS_GAVISCON_HOW],
    quiz: {
      question: "What is the aim with long-term PPIs?",
      options: [{ text: "The lowest dose that manages symptoms", right: true }, { text: "The highest dose possible" }, { text: "Stopping suddenly every few weeks" }],
      why: "It is recommended that PPIs are taken for the shortest time at the lowest dose.",
    },
  },
  {
    id: "gord-barretts",
    kicker: "Understanding",
    question: "What is Barrett's oesophagus, and should I worry about it?",
    hook: "Changed cells in the food pipe, linked to long-term reflux. Most people with it never develop cancer, and regular checks look for changes early.",
    short: "In Barrett's oesophagus, normal cells lining the gullet are replaced by cells that do not look normal. It is strongly linked to long-term reflux. It can lead to cancer in a few people, but most people will not develop cancer, and regular checks help find changes early.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "In Barrett's oesophagus, normal cells of the gullet change into cells that do not look normal. These abnormal cells start where the gullet and stomach meet, and spread upwards from there.",
          "It's possible for Barrett's oesophagus to lead to cancer. This happens in a few people with the condition, but most people will not develop cancer. Guts UK says only 1 in every 300 people with Barrett's will develop this cancer each year, which is considered uncommon and a small risk.",
        ],
      },
      {
        heading: "The link with reflux",
        paragraphs: [
          "The exact cause is unknown, but it is strongly linked to long-term gastro-oesophageal reflux disease. About 11 in 100 people with GORD will get Barrett's oesophagus, and the risk rises the longer people have symptoms and the more often they happen.",
          "Other risk factors include older age, being male, a family history of Barrett's oesophagus, a higher than healthy body weight, smoking and a hiatus hernia.",
        ],
      },
      {
        heading: "Symptoms",
        paragraphs: [
          "The main symptom is reflux: heartburn and bringing food back up. You may also have a metallic taste in your mouth or a sore throat, which is worse after lying down.",
          "Barrett's oesophagus often does not have any symptoms, and some people do not notice reflux because their gullet is less sensitive to it. Ignoring reflux symptoms or self-medicating with antacids can lead to a delayed diagnosis.",
        ],
      },
      {
        heading: "Finding it and keeping watch",
        paragraphs: [
          "Doctors diagnose Barrett's oesophagus with an endoscopy and take biopsies to confirm it. They also look for abnormal cells, called dysplasia, which increase the risk of cancer.",
          "People are usually entered into a surveillance programme, with regular endoscopies. Guidelines suggest every 2 to 3 years for a long segment of 3cm or more, and every 3 to 5 years for a shorter segment with intestinal metaplasia, which means cells that have changed to pre-cancerous cells.",
          "NICE says the choice about surveillance should take into account the person's own preference and risk factors, as the harms may outweigh the benefits for people at low risk of cancer.",
        ],
      },
      {
        heading: "Treatment and support",
        paragraphs: [
          "The most used medicines are PPIs, such as omeprazole and lansoprazole, which reduce stomach acid. Continue to take your treatment if you have been diagnosed with Barrett's oesophagus.",
          "Lifestyle changes aimed at reducing reflux include weight loss, drinking less alcohol, stopping smoking, smaller meal portions and not eating within three hours of bedtime.",
          "A diagnosis can bring worry about cancer. If you feel upset or hopeless, tell your doctor, who can offer support. Many specialist centres run nurse-led support groups.",
        ],
      },
    ],
    helps: [
      "Continue to take your treatment if you have been diagnosed with Barrett's oesophagus.",
      "Ask how often you need an endoscopy, and whether your ongoing surveillance is right for you.",
      "Lose weight if needed, drink less alcohol, stop smoking and have smaller meal portions.",
      "Do not eat within three hours of bedtime.",
      "See a doctor about trouble swallowing, pain on swallowing, weight loss or a hoarse voice.",
      "Ask if there is a Barrett's oesophagus support group or specialist nurse in your area.",
    ],
    tryThisWeek: [
      "Ask when your next check is due.",
      "Keep taking your treatment.",
      "Ask about a local support group.",
    ],
    ask: "How long is my Barrett's segment, and how often should it be checked?",
    interactive: {
      kind: "signs",
      title: "Symptoms to watch for",
      intro: "Tick any you have noticed. Guts UK says to see a doctor about any of these.",
      signs: [
        "Trouble swallowing",
        "Pain on swallowing",
        "Often bringing food back up, or being sick after eating",
        "Weight loss",
        "Feeling tired, a possible sign of anaemia",
        "Vomiting blood",
        "A hoarse voice or other changes to your voice",
      ],
      after: "See a doctor about any of these. If you are vomiting blood and feel unwell, faint or dizzy, call 999 or go to A&E.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [GUTS_BARRETTS, NHS_OESCA_CAUSES, NICE_CG184, NHS_VOMITING_BLOOD],
    quiz: {
      question: "Do most people with Barrett's oesophagus develop cancer?",
      options: [{ text: "No, most people will not", right: true }, { text: "Yes, almost everyone does" }, { text: "Yes, within a year" }],
      why: "It happens in a few people with the condition, but most people will not develop cancer.",
    },
  },
];
