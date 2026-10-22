import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Lactose intolerance page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and
// Allergy UK (the NHS lactose intolerance page links to Allergy UK for more detail), with the British
// Dietetic Association (BDA), Coeliac UK, Guts UK, Crohn's & Colitis UK and the Royal Osteoporosis Society.
// Guts UK has no lactose intolerance page of its own; its food intolerance testing and IBS pages are used.
// General information only; it never replaces what a person's own GP or dietitian tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const bda = (label: string, path: string): LearnSource => ({ label: `BDA: ${label}`, url: `https://www.bda.uk.com/${path}` });

const NHS_LI = nhs("Lactose intolerance", "conditions/lactose-intolerance/");
const NHS_FI = nhs("Food intolerance", "conditions/food-intolerance/");
const NHS_FA = nhs("Food allergy", "conditions/food-allergy/");
const NHS_DAIRY = nhs("Dairy and alternatives in your diet", "live-well/eat-well/food-types/milk-and-dairy-nutrition/");
const NHS_CALCIUM = nhs("Calcium", "conditions/vitamins-and-minerals/calcium/");
const NHS_VITD = nhs("Vitamin D", "conditions/vitamins-and-minerals/vitamin-d/");
const NHS_OSTEO = nhs("Preventing osteoporosis", "conditions/osteoporosis/prevention/");
const NHS_DV = nhs("Diarrhoea and vomiting", "symptoms/diarrhoea-and-vomiting/");
const NHS_GASTROSCOPY = nhs("Gastroscopy", "tests-and-treatments/gastroscopy/");
const NHS_LABELS = nhs("Food labels", "live-well/eat-well/food-guidelines-and-food-labels/how-to-read-food-labels/");
const NHS_COELIAC = nhs("Coeliac disease", "conditions/coeliac-disease/");
const NHS_IBS_WHAT = nhs("What is IBS", "conditions/irritable-bowel-syndrome-ibs/what-is-ibs/");
const NHS_IBS_SYMPTOMS = nhs("Symptoms of IBS", "conditions/irritable-bowel-syndrome-ibs/symptoms/");

const AUK_LI: LearnSource = { label: "Allergy UK: Lactose intolerance", url: "https://www.allergyuk.org/resources/lactose-intolerance/" };
const AUK_FI: LearnSource = { label: "Allergy UK: Food intolerance", url: "https://www.allergyuk.org/resources/food-intolerance/" };

const BDA_FAFI = bda("Food allergy and food intolerance", "resource/food-allergy-food-intolerance.html");
const BDA_MILK = bda("Milk allergy", "resource/milk-allergy.html");
const BDA_CALCIUM = bda("Calcium", "resource/calcium.html");
const BDA_WHAT = bda("What is a dietitian?", "about-dietetics/what-is-dietitian.html");
const BDA_HOW = bda("How can a dietitian help you?", "about-dietetics/what-do-dietitians-do/how-can-dietitian-help-you.html");
const BDA_DVN = bda("Dietitian or nutritionist?", "about-dietetics/what-is-dietitian/dietitian-or-nutritionist.html");
const BDA_HCPC = bda("Check HCPC registration", "about-dietetics/what-is-dietitian/check-hcpc-registration.html");

const CUK_LI: LearnSource = { label: "Coeliac UK: Lactose intolerance", url: "https://www.coeliac.org.uk/about-coeliac-disease/related-conditions/lactose-intolerance/" };
const GUTS_TESTING: LearnSource = { label: "Guts UK: Food intolerance testing", url: "https://gutscharity.org.uk/advice-and-information/testing-and-monitoring/food-intolerance-testing/" };
const GUTS_IBS: LearnSource = { label: "Guts UK: Irritable bowel syndrome", url: "https://gutscharity.org.uk/advice-and-information/conditions/irritable-bowel-syndrome/" };
const CCUK_FOOD: LearnSource = { label: "Crohn's & Colitis UK: Food", url: "https://www.crohnsandcolitis.org.uk/info-support/information-about-crohns-and-colitis/all-information-about-crohns-and-colitis/living-with-crohns-or-colitis/food" };
const ROS_CALCIUM: LearnSource = { label: "Royal Osteoporosis Society: Calcium", url: "https://theros.org.uk/information-and-support/food-and-supplements/calcium/" };

export const lactoseAnswers: LearnArticle[] = [
  {
    id: "lac-what-it-is",
    kicker: "Understanding",
    question: "What is lactose intolerance?",
    hook: "A sugar in milk, and an enzyme that is running low. Common, uncomfortable, and not an allergy.",
    short: "Lactose intolerance is when you get symptoms, such as tummy pain, after eating food containing lactose, a sugar found in dairy products. It usually happens because the body does not make enough of an enzyme called lactase. It is the most common food intolerance, and it does not involve the immune system.",
    sections: [
      {
        heading: "A sugar in milk",
        paragraphs: [
          "Lactose intolerance is when you get symptoms, such as tummy pain, after eating food containing lactose, a sugar found in dairy products. The symptoms can be prevented by eating smaller portions of foods that contain lactose or avoiding them completely.",
          "Lactose is the natural sugar found in milk and dairy products, including milk from humans, cows, goats, sheep, buffalo and camels. It is sometimes called milk sugar.",
        ],
      },
      {
        heading: "The enzyme that digests it",
        paragraphs: [
          "The most common cause is when the body does not make enough of an enzyme called lactase, which helps you digest lactose. Lactase is made in the small intestine, where it breaks lactose down into simpler sugars that can be absorbed into the bloodstream.",
          "When there is not enough lactase, some lactose passes undigested into the large intestine. There it is fermented by bacteria, which can lead to bloating, wind, tummy pain and diarrhoea.",
        ],
      },
      {
        heading: "Common, and not an allergy",
        paragraphs: [
          "Lactose intolerance is the most common food intolerance. A food intolerance is not caused by your immune system overreacting to a food, which means you cannot have a serious allergic reaction.",
          "Lactose intolerance is often confused with milk allergy, but it is not an allergy and does not involve the immune system. It can cause symptoms such as bloating and diarrhoea, but it does not cause severe reactions.",
        ],
      },
      {
        heading: "Why it happens, and to whom",
        paragraphs: [
          "In many populations around the world, milk is traditionally drunk mainly in infancy and early childhood. So it is very normal for the body to make less lactase with age. This type, called primary lactose intolerance, runs in families and tends to last for life.",
          "It is particularly common in people of East Asian, African, Native American, Hispanic or Latino and Ashkenazi Jewish descent. Keeping the ability to digest lactose into adulthood is more common in people of Northern European ancestry.",
          "Lactose intolerance can start at any age. It can also be caused by bowel infections, bowel surgery, an injury to the bowel, or conditions such as inflammatory bowel disease or coeliac disease.",
        ],
      },
    ],
    helps: [
      "See a GP if your symptoms keep coming back and often happen after eating.",
      "Do not cut foods out of your or your child's diet without the advice of a GP or a dietitian.",
      "Eat smaller portions of foods that contain lactose, or avoid them, to prevent symptoms.",
      "Replace milk and dairy with lactose-free milk and dairy products or fortified plant-based alternatives.",
    ],
    tryThisWeek: [
      "See a GP if symptoms keep coming back.",
      "Ask before cutting foods out.",
      "Try smaller portions of dairy.",
    ],
    ask: "Could my symptoms be lactose intolerance, or something else?",
    interactive: {
      kind: "flip-cards",
      title: "The words, card by card",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "lactose", front: "Lactose", when: "The sugar", back: "The natural sugar in milk and dairy products, sometimes called milk sugar." },
        { id: "lactase", front: "Lactase", when: "The enzyme", back: "Made in the small intestine. It breaks lactose down into simpler sugars the body can absorb." },
        { id: "primary", front: "Primary", when: "The most common type", back: "Runs in families. The body makes less lactase with age, so it usually starts in older childhood or adulthood." },
        { id: "secondary", front: "Secondary", when: "After gut damage", back: "Follows an infection or a condition such as coeliac disease. Symptoms usually improve once the gut heals." },
        { id: "developmental", front: "Developmental", when: "In premature babies", back: "The intestines are not fully developed yet. It usually improves as the baby grows." },
        { id: "congenital", front: "Congenital", when: "Extremely rare", back: "A baby makes little or no lactase from birth." },
      ],
    },
    sources: [NHS_LI, AUK_LI, BDA_FAFI, NHS_FI, NHS_DAIRY],
    quiz: {
      question: "What is the most common cause of lactose intolerance?",
      options: [{ text: "Not making enough of the enzyme lactase", right: true }, { text: "An immune reaction to milk" }, { text: "Too much stomach acid" }],
      why: "The most common cause is when the body does not make enough of an enzyme called lactase, which helps you digest lactose.",
    },
  },
  {
    id: "lac-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of lactose intolerance?",
    hook: "Wind, bloating and a rumbling tummy, minutes to hours after dairy. And a few signs that mean see a GP.",
    short: "Symptoms can start a few minutes, or a few hours, after having food or drink containing lactose. They include tummy pain, bloating, farting, tummy rumbling and diarrhoea. See a GP if they keep coming back, and get medical help for changes in your poo or weight that are not usual for you.",
    sections: [
      {
        heading: "The common signs",
        paragraphs: [
          "Symptoms can start a few minutes, or a few hours, after having food or drink containing lactose. Common symptoms include tummy pain or discomfort, bloating, farting, tummy rumbling, diarrhoea or constipation, and feeling sick or being sick.",
          "You may also have some other symptoms that are not related to your digestive system, such as headaches, tiredness and joint or muscle pain.",
        ],
      },
      {
        heading: "How much, and how strongly",
        paragraphs: [
          "How severe the symptoms are depends on how much lactose is eaten and how much lactase activity the body has.",
          "With a food intolerance, symptoms can last for a few hours or days. A person may be able to have a small amount of the food before symptoms start.",
        ],
      },
      {
        heading: "In babies and children",
        paragraphs: [
          "In infants and young children, a common symptom is acidic poo, which may cause sore skin around the bottom and nappy rash. Being sick is more common in children than adults.",
          "Diarrhoea, wind and irritability in babies are sometimes mistaken for lactose intolerance. They are often caused by feeding issues, normal infant behaviour, common infections, or other conditions such as cow's milk allergy. Parents should get support before removing foods from their child's diet.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "Some symptoms are common, but get medical help if they keep happening or do not go away. See a GP if your symptoms keep coming back and often happen after eating, or if you have been losing weight without trying.",
          "Also see a GP if you have had changes in your poo that are not usual for you for 3 weeks, such as looser poo, pooing more often or constipation. The same applies if you have had blood in your poo, or tummy bloating and discomfort, for 3 weeks.",
        ],
      },
      {
        heading: "Signs of a serious allergic reaction",
        paragraphs: [
          "Call 999 if your lips, mouth, throat or tongue suddenly become swollen, you're breathing very fast or struggling to breathe, your throat feels tight or you're struggling to swallow, or you suddenly become very confused, drowsy or dizzy.",
          "These can be signs of a serious allergic reaction, called anaphylaxis, which needs immediate treatment in hospital. Lactose intolerance itself does not cause severe reactions.",
        ],
      },
    ],
    helps: [
      "Get medical help if symptoms keep happening or do not go away.",
      "Keep a food and symptoms diary to help work out what may be triggering your symptoms.",
      "See a GP if you have had blood in your poo, or changes in your poo, for 3 weeks.",
      "See a GP if you have been losing weight without trying.",
      "Call 999 if your lips, mouth, throat or tongue suddenly swell, or you are struggling to breathe or swallow.",
    ],
    tryThisWeek: [
      "Keep a food and symptoms diary.",
      "See a GP if symptoms keep happening.",
      "Know when to call 999.",
    ],
    ask: "Are my symptoms typical of lactose intolerance, or do I need other checks?",
    interactive: {
      kind: "signs",
      title: "Symptoms to note down",
      intro: "Tick any you have noticed after food or drink with lactose. Take the list to your GP.",
      signs: [
        "Tummy pain or discomfort",
        "Bloating",
        "Farting",
        "Tummy rumbling",
        "Diarrhoea or constipation",
        "Feeling sick or being sick",
        "Headaches, tiredness or joint pain",
        "Changes in my poo for 3 weeks",
        "Blood in my poo for 3 weeks",
        "Losing weight without trying",
      ],
      after: "See a GP if symptoms keep coming back. Call 999 if lips, mouth, throat or tongue suddenly swell, or breathing or swallowing is a struggle.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_LI, AUK_LI, NHS_FI, AUK_FI, NHS_DAIRY],
    quiz: {
      question: "How soon after dairy can symptoms start?",
      options: [{ text: "From a few minutes to a few hours", right: true }, { text: "Only after several days" }, { text: "Only the next week" }],
      why: "Symptoms can start a few minutes, or a few hours, after having food or drink containing lactose.",
    },
  },
  {
    id: "lac-not-allergy",
    kicker: "Understanding",
    question: "Is it lactose intolerance or a milk allergy?",
    hook: "One is about digesting a sugar. The other is the immune system reacting to a protein, and it can be serious.",
    short: "Lactose intolerance is difficulty digesting the sugar in milk and mainly causes gut symptoms. Cow's milk allergy is an immune reaction to milk proteins that can affect the skin, gut and lungs, and can sometimes be life-threatening. They are managed differently, so it helps to know which one it is.",
    sections: [
      {
        heading: "Two different reactions to milk",
        paragraphs: [
          "Lactose intolerance is caused by difficulty digesting the sugar in milk, lactose, and leads mainly to gut symptoms. Cow's milk allergy is an immune reaction to the proteins in milk. It can cause symptoms affecting many parts of the body, including the skin, gut and lungs, and in some cases it can be life-threatening.",
          "A food allergy is a reaction involving the immune system. Reactions that do not involve the immune system are often called a food intolerance.",
        ],
      },
      {
        heading: "How the symptoms differ",
        paragraphs: [
          "A food allergy can cause itchy skin or a raised rash, swelling of the lips, face and eyes, coughing, wheezing or a hoarse voice, and feeling dizzy or lightheaded. You may get symptoms straight after eating the food, or days later.",
          "A food intolerance causes symptoms such as bloating and tummy pain, usually a few hours after eating the food. It is not usually serious, and you cannot have a serious allergic reaction.",
        ],
      },
      {
        heading: "What each one means for food",
        paragraphs: [
          "People with lactose intolerance can usually manage dairy products that are low in lactose. People with cow's milk allergy often need to avoid all milk and milk-containing foods.",
          "Lactose-free cow's milk and lactose-free dairy are not suitable for cow's milk allergy, because they still contain whole cow's milk proteins.",
        ],
      },
      {
        heading: "Milk allergy in children",
        paragraphs: [
          "In the UK, cow's milk allergy affects 2% to 3% of babies and young children, and most grow out of it by the age of five. Milk allergy is unusual in adults.",
          "Cows' milk allergy typically develops when cows' milk is first given to a baby, in formula or when they start eating solids. If you think you or your baby have a milk allergy or intolerance, talk to a GP or another health professional.",
        ],
      },
      {
        heading: "When it is an emergency",
        paragraphs: [
          "Call 999 if lips, mouth, throat or tongue suddenly become swollen, breathing is very fast or a struggle, the throat feels tight, or the skin, tongue or lips turn blue, grey or pale. These can be signs of a serious allergic reaction.",
          "If someone has an adrenaline auto-injector or nasal spray, use it immediately, then call 999 for an ambulance even if they seem to feel better. Do not drive yourself to A&E.",
        ],
      },
    ],
    helps: [
      "Talk to a GP or another health professional if you think you or your baby have a milk allergy or intolerance.",
      "Do not cut milk and dairy out of your or your child's diet without first speaking to a GP or dietitian.",
      "If an adrenaline auto-injector or nasal spray is prescribed, use it straight away in a serious reaction, then call 999.",
      "Lactose-free milk is not suitable for a cow's milk allergy, as it still contains milk proteins.",
    ],
    tryThisWeek: [
      "Talk to a GP about milk reactions.",
      "Ask before cutting out dairy.",
      "Know when to call 999.",
    ],
    ask: "Could this be a milk allergy rather than lactose intolerance?",
    interactive: {
      kind: "scenarios",
      title: "Intolerance or allergy?",
      scenarios: [
        {
          id: "coffee",
          situation: "A couple of hours after a milky coffee, you feel bloated and windy.",
          options: [{ text: "Note it, and see a GP if it keeps happening", best: true }, { text: "Call 999 straight away" }],
          why: "An intolerance causes symptoms such as bloating, usually a few hours after the food. See a GP if symptoms keep coming back.",
        },
        {
          id: "swelling",
          situation: "Soon after eating, someone's lips and tongue suddenly swell.",
          options: [{ text: "Call 999", best: true }, { text: "Wait to see if it settles" }, { text: "Book a GP appointment" }],
          why: "Call 999 if lips, mouth, throat or tongue suddenly become swollen. These can be signs of a serious allergic reaction.",
        },
        {
          id: "lactose-free",
          situation: "A child with cow's milk allergy is offered lactose-free milk.",
          options: [{ text: "Not suitable: it still has milk protein", best: true }, { text: "Fine, as it has no lactose" }],
          why: "Lactose-free cow's milk is not suitable for cow's milk allergy, because it still contains whole cow's milk proteins.",
        },
      ],
    },
    sources: [AUK_LI, NHS_FA, NHS_FI, BDA_FAFI, BDA_MILK, NHS_DAIRY, NHS_LI],
    quiz: {
      question: "Which one involves the immune system?",
      options: [{ text: "Cow's milk allergy", right: true }, { text: "Lactose intolerance" }, { text: "Both of them" }],
      why: "Cow's milk allergy is an immune reaction to the proteins in milk. Lactose intolerance is not an allergy and does not involve the immune system.",
    },
  },
  {
    id: "lac-diagnosis",
    kicker: "Tests",
    question: "How is lactose intolerance diagnosed?",
    hook: "Usually by leaving lactose out and bringing it back. Tests are for when the picture is unclear.",
    short: "Most people are diagnosed from their symptoms and whether they improve when lactose is left out. A GP may also arrange blood tests or a hydrogen breath test, and sometimes a gastroscopy. Intolerance tests sold to the public are not recommended.",
    sections: [
      {
        heading: "Starting with a GP",
        paragraphs: [
          "It is important to see a healthcare professional, usually a GP, if you think you or your child may have lactose intolerance, as symptoms can overlap with other conditions.",
          "Most people are diagnosed based on their symptoms and whether they improve on a low-lactose diet. Tests are usually only needed if the diagnosis is unclear, or to rule out other conditions such as coeliac disease.",
        ],
      },
      {
        heading: "Leaving lactose out, then bringing it back",
        paragraphs: [
          "A GP may ask you to follow a lactose elimination diet, where you stop eating foods containing lactose to see if your symptoms improve.",
          "Allergy UK describes a strict low-lactose diet for two weeks, then bringing lactose-containing foods back to see if symptoms return. If they return, lactose intolerance is likely. If symptoms do not improve on the strict diet, lactose intolerance is unlikely.",
          "You may also be asked to keep a food and symptoms diary to help work out what may be triggering your symptoms.",
        ],
      },
      {
        heading: "Tests you may have",
        paragraphs: [
          "You may have blood tests, or a hydrogen breath test, where hydrogen gas in your breath is measured to find out how well you digest lactose.",
          "If your symptoms are severe and do not get better, you may need a gastroscopy. A long, thin, flexible tube is passed into your mouth and down into your stomach, and a very small sample of cells may be taken from your small intestine to be tested.",
          "You'll need to stop eating at least 6 hours before a gastroscopy. It should take 15 to 45 minutes, and if you have sedation, you'll need someone to take you home and stay with you for 24 hours.",
        ],
      },
      {
        heading: "Tests to avoid",
        paragraphs: [
          "Some tests you can buy that claim to diagnose food intolerances are not recommended. There's limited evidence that they give accurate results, and they may suggest you should avoid multiple foods, which can be harmful.",
          "Guts UK says there is no evidence that tests such as IgG blood tests, hair analysis or Vega tests can identify a food intolerance. The gold standard is to leave the food out and then reintroduce it, with advice from a dietitian throughout.",
        ],
      },
    ],
    helps: [
      "See your doctor before you change your diet, so the true cause of your symptoms can be found.",
      "Keep a food and symptoms diary to help work out what may be triggering your symptoms.",
      "Leave out and reintroduce lactose with advice from your GP or dietitian.",
      "Avoid home tests that claim to diagnose food intolerances, as they are not recommended.",
      "Before a gastroscopy, follow the hospital's instructions about eating, drinking and your medicines.",
    ],
    tryThisWeek: [
      "See a GP before changing your diet.",
      "Start a food and symptoms diary.",
      "Skip home intolerance tests.",
    ],
    ask: "Do I need any tests, or can we try a low-lactose diet first?",
    interactive: {
      kind: "flip-cards",
      title: "The checks, card by card",
      intro: "Turn each card to see what each check involves.",
      cards: [
        { id: "elimination", front: "Elimination diet", when: "Often the first step", back: "You stop eating foods containing lactose to see if symptoms improve, then bring them back." },
        { id: "diary", front: "Food and symptoms diary", when: "Alongside other checks", back: "Helps work out what may be triggering your symptoms." },
        { id: "breath", front: "Hydrogen breath test", when: "If a GP arranges it", back: "Hydrogen gas in your breath is measured to find out how well you digest lactose." },
        { id: "blood", front: "Blood tests", when: "If a GP arranges them", back: "Tests can help rule out other conditions, such as coeliac disease." },
        { id: "gastroscopy", front: "Gastroscopy", when: "If severe and not getting better", back: "A thin tube with a camera goes down to the stomach. A tiny sample may be taken from the small intestine." },
        { id: "home", front: "Home intolerance tests", when: "Sold to the public", back: "Not recommended. There's limited evidence they give accurate results." },
      ],
    },
    sources: [NHS_LI, AUK_LI, NHS_FI, GUTS_TESTING, NHS_GASTROSCOPY, CUK_LI],
    quiz: {
      question: "What is the gold standard way to identify a food intolerance?",
      options: [{ text: "Leaving the food out, then reintroducing it", right: true }, { text: "An IgG blood test" }, { text: "A hair analysis test" }],
      why: "The gold standard is to leave the food out and then reintroduce it, with advice from a dietitian throughout.",
    },
  },
  {
    id: "lac-cutting-down",
    kicker: "Treatment",
    question: "How do I cut down on lactose without missing out?",
    hook: "Less, not always none. Most people find a level of lactose they can enjoy.",
    short: "For most people, symptoms can be prevented by eating less lactose or avoiding it. A diagnosis does not usually mean avoiding all lactose: most people can manage small amounts, and the aim is to find your own level. Lactose-free dairy and fortified plant-based foods fill the gaps.",
    sections: [
      {
        heading: "Less, not always none",
        paragraphs: [
          "For most people, symptoms can be prevented by reducing the amount of food you eat that contains lactose, or by avoiding these foods completely.",
          "A diagnosis does not usually mean that all lactose needs to be avoided. Most people can manage small amounts without symptoms, although this varies between people. The aim is to find the level of lactose you can have without symptoms.",
          "Coeliac UK says eating some lactose can actually help your body become more tolerant to it.",
        ],
      },
      {
        heading: "Finding your level",
        paragraphs: [
          "Once symptoms have improved, bring back foods with smaller amounts of lactose gradually, followed by higher-lactose foods if tolerated.",
          "Coeliac UK suggests gradually increasing the amount until symptoms appear, then sticking to just below this amount. Combining milk with other foods may help your body digest lactose, such as adding milk to mashed potato.",
        ],
      },
      {
        heading: "Foods lower in lactose",
        paragraphs: [
          "Some dairy foods are naturally lower in lactose and may be tolerated, depending on the person. These include butter, ghee and hard or matured cheeses such as Cheddar, Parmesan, Edam and Gouda.",
          "Properly fermented yoghurts and kefir can also be relatively low in lactose. But they are not lactose-free unless specially processed, and tolerance varies.",
        ],
      },
      {
        heading: "Lactose-free and plant-based swaps",
        paragraphs: [
          "Lactose-free dairy products contain the same vitamins and minerals as standard dairy products. They have an added enzyme called lactase, which helps digest any lactose so the products do not trigger symptoms.",
          "Plant-based drinks made from soya, oats, coconut, nuts or pea protein are naturally lactose-free. They are not naturally rich in calcium and iodine, so choose ones fortified with calcium. Rice drinks should not be the main drink for children under four and a half.",
        ],
      },
      {
        heading: "Foods that are naturally free of lactose",
        paragraphs: [
          "Meat, poultry, fish and eggs, beans and lentils, fruit and vegetables, rice, pasta, potatoes and oats, nuts and seeds, and most drinks are naturally free of lactose, unless milk has been added.",
          "It's important not to cut foods out of your diet or your child's diet without the advice of a GP or dietitian. You or your child could miss out on vitamins and minerals, which are especially important for a child's growth.",
        ],
      },
    ],
    helps: [
      "Reduce the amount of food you eat that contains lactose, or avoid these foods completely.",
      "Once symptoms settle, bring back small amounts of lower-lactose foods to find your level.",
      "Try combining milk with other foods, such as adding it to mashed potato.",
      "Swap to lactose-free milk and dairy, or plant-based alternatives fortified with calcium.",
      "Speak to a GP or dietitian before cutting foods out of your or your child's diet.",
    ],
    tryThisWeek: [
      "Try small amounts to find your level.",
      "Have milk with other foods.",
      "Swap to lactose-free or fortified milk.",
    ],
    ask: "How much lactose is likely to be fine for me, and how do I find out?",
    interactive: {
      kind: "scenarios",
      title: "Everyday dairy choices",
      scenarios: [
        {
          id: "cheddar",
          situation: "You fancy a sandwich with mature Cheddar.",
          options: [{ text: "Try a small portion: hard cheese is lower in lactose", best: true }, { text: "Avoid all cheese for good" }],
          why: "Hard or matured cheeses such as Cheddar are naturally lower in lactose and may be tolerated, depending on the person.",
        },
        {
          id: "cereal",
          situation: "The milk on your breakfast cereal gives you symptoms.",
          options: [{ text: "Swap to lactose-free milk or a fortified plant drink", best: true }, { text: "Skip breakfast" }],
          why: "Replace milk with lactose-free milk or fortified plant-based alternatives.",
        },
        {
          id: "milk-alone",
          situation: "A glass of milk on its own sets off your symptoms.",
          options: [{ text: "Try milk combined with other foods", best: true }, { text: "Drink it faster" }],
          why: "Combining milk with other foods may help your body to digest lactose, such as adding milk to mashed potato.",
        },
        {
          id: "cut-out",
          situation: "You are thinking of cutting out all dairy for good.",
          options: [{ text: "Speak to a GP or dietitian first", best: true }, { text: "Cut it all out today" }],
          why: "It's important not to cut foods out of your diet without the advice of a GP or dietitian.",
        },
      ],
    },
    sources: [NHS_LI, AUK_LI, CUK_LI, NHS_DAIRY, BDA_FAFI, NHS_FI],
    quiz: {
      question: "Does lactose intolerance mean cutting out all lactose?",
      options: [{ text: "No, most people can have small amounts", right: true }, { text: "Yes, every trace for life" }, { text: "Yes, plus all wheat" }],
      why: "A diagnosis does not usually mean that all lactose needs to be avoided. Most people can manage small amounts without symptoms.",
    },
  },
  {
    id: "lac-labels",
    kicker: "Living well",
    question: "How do I read food labels for lactose?",
    hook: "Look for milk in bold. And know which look-alike words you can ignore.",
    short: "Milk is one of the 14 allergens that must be highlighted, usually in bold, in the ingredients of pre-packed food. Lactose can turn up in bread, sauces, cereals and shakes. Words such as lactic acid do not contain lactose, and Allergy UK says may contain milk labels need not be avoided for lactose intolerance.",
    sections: [
      {
        heading: "Where lactose hides",
        paragraphs: [
          "Many processed foods can contain lactose, including breakfast cereals containing chocolate, bread, crackers, cakes, biscuits and pastry, sauces and salad dressings, and diet and protein shakes.",
          "Milk, whey and other milk-derived ingredients, including lactose itself, may be added to processed foods and drinks. Most breads are lactose-free, but some are not, such as brioche and milk loaf.",
        ],
      },
      {
        heading: "Look for milk in bold",
        paragraphs: [
          "Pre-packed food must have a list of ingredients with allergens highlighted in bold. Milk is one of the 14 allergens that must be declared by law, so any milk-based ingredient in pre-packed food must be highlighted as containing milk.",
          "Ingredients are listed in order of weight, so the main ingredients always come first.",
          "Ingredients can and do change, so read labels every time.",
        ],
      },
      {
        heading: "Words that look like lactose but are not",
        paragraphs: [
          "Ingredients with similar names, such as lactic acid, lactylates, lactones and lactates, do not contain lactose and do not need to be avoided.",
          "Foods labelled lactose-free contain very little lactose and are highly unlikely to cause symptoms, even in people who are very sensitive. Some cheeses may say they are lactose-free in the ingredients list or nutrition information, even if they are not labelled lactose-free on the front.",
        ],
      },
      {
        heading: "May contain milk",
        paragraphs: [
          "May contain statements are used when a food might be contaminated with an allergen. There is no law to say when they should be used.",
          "For lactose intolerance, Allergy UK says it is not necessary to avoid foods labelled may contain milk, as the amounts of lactose will be minimal.",
        ],
      },
      {
        heading: "Loose food and medicines",
        paragraphs: [
          "Food businesses such as bakeries, butchers and delis must give you allergen information for any loose item that contains one of the 14 allergens. Food packed and prepared on the same site, such as in a sandwich shop, must have a label with a full ingredients list.",
          "Some medicines and supplements contain small amounts of lactose. These are usually too small to cause symptoms, but speak with a healthcare professional if you are concerned.",
        ],
      },
    ],
    helps: [
      "Look for milk in bold in the ingredients list.",
      "Check labels on bread, sauces, cereals, cakes and shakes, which can contain milk.",
      "Read labels every time, as ingredients can change.",
      "Lactic acid, lactylates, lactones and lactates contain no lactose and do not need to be avoided.",
      "Ask for allergen information when buying loose food from a bakery, butcher or deli.",
    ],
    tryThisWeek: [
      "Look for milk in bold.",
      "Check your bread and sauces.",
      "Read labels every time.",
    ],
    ask: "Which ingredients do I really need to watch for, given how much lactose I can manage?",
    interactive: {
      kind: "scenarios",
      title: "Reading the label",
      scenarios: [
        {
          id: "lactic",
          situation: "An ingredients list includes lactic acid.",
          options: [{ text: "Fine: lactic acid contains no lactose", best: true }, { text: "Avoid it: it sounds like lactose" }],
          why: "Ingredients with similar names, such as lactic acid, lactylates, lactones and lactates, do not contain lactose.",
        },
        {
          id: "may-contain",
          situation: "A packet of biscuits says may contain milk.",
          options: [{ text: "It need not be avoided for lactose intolerance", best: true }, { text: "Treat it as full of lactose" }],
          why: "It is not necessary to avoid foods with a may contain milk label, as the amounts of lactose will be minimal.",
        },
        {
          id: "whey",
          situation: "Your spread lists whey powder (milk) in bold.",
          options: [{ text: "Treat it as a milk ingredient", best: true }, { text: "Ignore it: whey is not milk" }],
          why: "Milk, whey and other milk-derived ingredients may be added to processed foods, and are highlighted as containing milk.",
        },
        {
          id: "bakery",
          situation: "You buy a loaf from a bakery counter with no label.",
          options: [{ text: "Ask staff for the allergen information", best: true }, { text: "Assume all bread is lactose-free" }],
          why: "Bakeries must give you allergen information for any loose item that contains one of the 14 allergens. Some breads, such as milk loaf, contain milk.",
        },
      ],
    },
    sources: [AUK_LI, NHS_LI, NHS_LABELS, BDA_FAFI, BDA_MILK],
    quiz: {
      question: "How is milk shown in the ingredients of pre-packed food?",
      options: [{ text: "Highlighted, usually in bold", right: true }, { text: "Only on the front of the pack" }, { text: "It does not have to be listed" }],
      why: "Pre-packed food must have a list of ingredients with allergens highlighted in bold.",
    },
  },
  {
    id: "lac-calcium",
    kicker: "Living well",
    question: "How do I get enough calcium with lactose intolerance?",
    hook: "Less milk can mean less calcium. Lactose-free dairy, fortified drinks and a few other foods close the gap.",
    short: "Milk and dairy are important sources of calcium, so cutting down can leave you short. Adults need 700mg a day, says the NHS. Lactose-free dairy has the same calcium, and fortified plant drinks, some fish, greens and fortified bread add more, with vitamin D to help the body use it.",
    sections: [
      {
        heading: "Why calcium matters",
        paragraphs: [
          "Calcium helps build bones and keep teeth healthy. It also regulates muscle contractions, including your heartbeat, and makes sure blood clots normally.",
          "Milk and dairy foods are important sources of calcium. If you cannot or choose not to eat dairy, you may be at risk of not getting enough. The BDA lists following a cow's milk or lactose-free diet as raising the risk of calcium deficiency.",
        ],
      },
      {
        heading: "How much you need",
        paragraphs: [
          "Adults aged 19 to 64 and over need 700mg of calcium a day, and you should be able to get it all from a varied and balanced diet.",
          "The BDA gives higher amounts for some groups, such as 1200mg a day for women after the menopause and men over 55. Talk to your doctor if you're unsure how much calcium you should have.",
        ],
      },
      {
        heading: "Calcium without the lactose",
        paragraphs: [
          "Lactose-free milk and dairy are made from regular dairy, so they give similar nutrition, including calcium. A 200ml glass of cow's milk, including lactose-free, has about 240mg.",
          "Other sources include soya drinks with added calcium, bread made with fortified flour, green leafy vegetables such as curly kale and okra, and fish where you eat the bones, such as sardines and pilchards. Spinach contains calcium, but the body cannot digest it all.",
          "Not all plant-based alternatives are fortified, and organic products often are not. Check the label for added calcium.",
        ],
      },
      {
        heading: "About three a day",
        paragraphs: [
          "For children over one year and adults, around three portions a day of dairy foods or calcium-fortified alternatives can help meet calcium needs.",
          "Hard cheeses and yoghurt are lower in lactose and still give calcium. A 30g piece of Cheddar or Edam has about 240mg, as does a 150g pot of plain yoghurt.",
        ],
      },
      {
        heading: "Vitamin D and supplements",
        paragraphs: [
          "Vitamin D helps your body absorb calcium. Everyone should consider taking a daily supplement containing 10 micrograms of vitamin D during the autumn and winter.",
          "If you cannot get enough calcium from food, a supplement can top it up. Talk to a pharmacist, doctor or dietitian first if you take other medicines or think you need more than 500mg extra. Taking more than 1,500mg a day could lead to stomach pain and diarrhoea.",
        ],
      },
    ],
    helps: [
      "Include around three portions a day of lactose-free dairy or calcium-fortified alternatives.",
      "Check plant-based drinks have added calcium, as organic ones often do not.",
      "Eat other calcium-rich foods, such as curly kale, fortified bread and sardines with the bones.",
      "Consider a daily supplement of 10 micrograms of vitamin D in autumn and winter.",
      "Talk to a pharmacist, doctor or dietitian about calcium supplements if you take other medicines.",
      "Do weight-bearing exercise, such as brisk walking, which is important for bone density.",
    ],
    tryThisWeek: [
      "Plan three calcium portions a day.",
      "Check drinks for added calcium.",
      "Consider vitamin D this winter.",
    ],
    ask: "Am I getting enough calcium, and do I need a supplement?",
    interactive: {
      kind: "flip-cards",
      title: "Calcium, food by food",
      intro: "Turn each card to see roughly how much calcium a portion gives, as the BDA lists it.",
      cards: [
        { id: "milk", front: "Lactose-free milk", when: "A 200ml glass", back: "About 240mg, the same as cow's milk." },
        { id: "cheddar", front: "Cheddar or Edam", when: "A 30g, matchbox-size piece", back: "About 240mg, and lower in lactose than milk." },
        { id: "yoghurt", front: "Plain yoghurt", when: "A 150g pot", back: "About 240mg. Lactose-free and fortified plant yoghurts are also available." },
        { id: "plant", front: "Fortified plant drink", when: "100ml", back: "120mg to 190mg, but only if calcium has been added. Organic ones often have none." },
        { id: "tofu", front: "Calcium-set tofu", when: "100g, uncooked", back: "About 300mg, if set with calcium chloride or calcium sulphate." },
        { id: "sardines", front: "Sardines with bones", when: "Half a tin (60g)", back: "About 240mg, as long as you eat the bones." },
      ],
    },
    sources: [AUK_LI, NHS_CALCIUM, BDA_CALCIUM, NHS_DAIRY, ROS_CALCIUM, NHS_VITD, NHS_OSTEO],
    quiz: {
      question: "How much calcium do adults need a day, according to the NHS?",
      options: [{ text: "700mg", right: true }, { text: "70mg" }, { text: "7,000mg" }],
      why: "Adults aged 19 to 64 and over need 700mg of calcium a day.",
    },
  },
  {
    id: "lac-lactase",
    kicker: "Treatment",
    question: "Do lactase drops and tablets help?",
    hook: "They add the missing enzyme. For some people they help; for others, not so much.",
    short: "Lactase tablets and drops can be bought over the counter. Taken before food or drink containing lactose, they may reduce or prevent symptoms for some people, but how well they work varies. There are no medicines that treat lactose intolerance itself.",
    sections: [
      {
        heading: "What lactase products are",
        paragraphs: [
          "Lactase is the enzyme that breaks lactose down. Lactase enzyme tablets or drops are available to buy over the counter.",
          "Taking a lactase supplement before having food or drink containing lactose may reduce or prevent symptoms for some people.",
        ],
      },
      {
        heading: "What they can and cannot do",
        paragraphs: [
          "There are no medicines that treat lactose intolerance itself, and it is usually managed through changes to diet.",
          "When taken according to the manufacturer's instructions, lactase tablets or drops can help people digest foods containing lactose and may reduce symptoms. How well they work varies from person to person.",
        ],
      },
      {
        heading: "Lactase already in your food",
        paragraphs: [
          "Lactose-free dairy products have an added enzyme called lactase, which helps digest any lactose so the products do not trigger any symptoms. They contain the same vitamins and minerals as standard dairy products.",
          "Lactase enzyme is often used to make lactose-free milk and dairy, and will appear in the ingredients list for many of these products.",
        ],
      },
      {
        heading: "For babies",
        paragraphs: [
          "Lactase enzyme drops are sometimes used to support babies with temporary lactose intolerance. Breastfed babies with temporary lactose intolerance can usually carry on breastfeeding.",
          "It's important not to cut foods out of your child's diet without the advice of a GP or dietitian.",
        ],
      },
      {
        heading: "Medicines that contain lactose",
        paragraphs: [
          "Some medicines and supplements contain small amounts of lactose. These amounts are usually too small to cause symptoms, although people who are very sensitive, or who take several medicines containing lactose, may get symptoms.",
          "Speak with a healthcare professional if you are concerned about possible reactions.",
        ],
      },
    ],
    helps: [
      "Take a lactase supplement before food or drink containing lactose, if it helps you.",
      "Follow the manufacturer's instructions for lactase tablets or drops.",
      "Look for lactase in the ingredients of lactose-free products.",
      "Speak with a healthcare professional if you are worried about lactose in your medicines.",
    ],
    tryThisWeek: [
      "Take lactase before a dairy meal.",
      "Follow the pack instructions.",
      "Ask about lactose in your medicines.",
    ],
    ask: "Would lactase tablets or drops be worth trying for me?",
    interactive: {
      kind: "scenarios",
      title: "When lactase fits in",
      scenarios: [
        {
          id: "meal-out",
          situation: "You are going out for a meal with a creamy dessert.",
          options: [{ text: "Take lactase before eating, as the pack says", best: true }, { text: "Take it the next morning" }],
          why: "Taking a lactase supplement before having food or drink containing lactose may reduce or prevent symptoms for some people.",
        },
        {
          id: "not-working",
          situation: "Lactase tablets have not helped you much.",
          options: [{ text: "Remember results vary, and diet is the main way", best: true }, { text: "Take far more than the pack says" }],
          why: "Response varies from person to person. Lactose intolerance is usually managed through changes to diet.",
        },
        {
          id: "medicines",
          situation: "You take several tablets that list lactose.",
          options: [{ text: "Ask a healthcare professional if concerned", best: true }, { text: "Stop taking them" }],
          why: "Amounts in medicines are usually too small to cause symptoms. Speak with a healthcare professional if you are concerned.",
        },
      ],
    },
    sources: [NHS_LI, AUK_LI, NHS_DAIRY],
    quiz: {
      question: "When is a lactase supplement taken?",
      options: [{ text: "Before food or drink containing lactose", right: true }, { text: "A day after eating dairy" }, { text: "Only at bedtime" }],
      why: "Taking a lactase supplement before having food or drink containing lactose may reduce or prevent symptoms for some people.",
    },
  },
  {
    id: "lac-eating-out",
    kicker: "Living well",
    question: "How do I eat out with lactose intolerance?",
    hook: "You have a right to know what is in your food. A little planning does the rest.",
    short: "Restaurants and cafés must give you allergen information in writing, and milk is one of the 14 allergens. Creamy sauces, desserts and milky drinks are the usual sources of lactose. Ask staff, plan ahead for special occasions and travel, and remember small portions may be fine.",
    sections: [
      {
        heading: "Ask what is in the dish",
        paragraphs: [
          "A restaurant or café must give you allergen information in writing, and milk is one of the 14 allergens. This could be on the menu, or a written notice explaining how to get it. Ask a member of staff about what is in a dish you want to order.",
          "If you order food online or by phone, allergen information must be given before you finish ordering and when the food is delivered. If you use a delivery company, contact the restaurant directly.",
        ],
      },
      {
        heading: "Dishes that often contain milk",
        paragraphs: [
          "Higher-lactose foods include cream, ice cream, custard and milk puddings, milkshakes and hot chocolate, and sauces, soups and ready meals made with milk, cream or cheese, such as white sauce and cream of soups.",
          "Small portions of some of these may be tolerated, depending on the ingredients and how sensitive you are. Some people manage small amounts of milky drinks when they have them with meals.",
        ],
      },
      {
        heading: "Easier choices",
        paragraphs: [
          "Meat, fish, eggs, rice, pasta, potatoes, fruit and vegetables are naturally free of lactose unless milk has been added. Sorbet, dark chocolate without milk and plant-based desserts can be alternatives, but check the label where you can.",
          "Hard and mature cheeses are lower in lactose. Most beers, wines and spirits are naturally lactose-free, but cream liqueurs, milk-based cocktails and milk stouts contain milk.",
        ],
      },
      {
        heading: "Plan ahead",
        paragraphs: [
          "For special occasions or meals out, let your host or chef know your dietary needs. Be aware of the ingredients used in cuisines from different countries.",
          "Prepare in advance for holidays abroad, including translation cards and telling your airline and accommodation.",
          "If you have a food intolerance, try to avoid or reduce the food you're intolerant to, including foods where you're intolerant to any of the ingredients.",
        ],
      },
    ],
    helps: [
      "Ask staff about what is in a dish, and for allergen information in writing.",
      "Let your host or chef know your dietary needs before special occasions or meals out.",
      "Choose dishes without cream or milky sauces, or have small portions.",
      "Have milky drinks with a meal, which some people find easier.",
      "Prepare translation cards before holidays abroad.",
    ],
    tryThisWeek: [
      "Ask staff what is in a dish.",
      "Tell your host about your needs.",
      "Pack translation cards for travel.",
    ],
    ask: "How much dairy can I risk when I am eating out?",
    interactive: {
      kind: "scenarios",
      title: "Eating out, one choice at a time",
      scenarios: [
        {
          id: "menu",
          situation: "The menu does not list what is in each dish.",
          options: [{ text: "Ask staff for the allergen information", best: true }, { text: "Guess from the dish name" }],
          why: "A restaurant or café must provide allergen information in writing. Ask a member of staff about a dish you wish to order.",
        },
        {
          id: "dessert",
          situation: "Dessert is crème brûlée or a sorbet.",
          options: [{ text: "Sorbet, checking the label if you can", best: true }, { text: "Crème brûlée" }],
          why: "Custards and milk puddings are higher in lactose. Sorbet can be an alternative, but check the label.",
        },
        {
          id: "drink",
          situation: "After dinner, it's a cream liqueur or a glass of wine.",
          options: [{ text: "The wine", best: true }, { text: "The cream liqueur" }],
          why: "Most beers, wines and spirits are naturally lactose-free. Cream liqueurs contain milk.",
        },
        {
          id: "delivery",
          situation: "You order a takeaway through a delivery app.",
          options: [{ text: "Contact the restaurant about ingredients", best: true }, { text: "Rely on the app's photo" }],
          why: "If ordering through a food delivery company, contact the restaurant directly.",
        },
      ],
    },
    sources: [BDA_FAFI, AUK_LI, NHS_FI],
    quiz: {
      question: "How must a restaurant or café give allergen information?",
      options: [{ text: "In writing, such as on the menu", right: true }, { text: "Only if you pay extra" }, { text: "It does not have to" }],
      why: "A restaurant or café must provide you with allergen information in writing. This could be allergen information on their menu or a written notice.",
    },
  },
  {
    id: "lac-after-illness",
    kicker: "Living well",
    question: "Can lactose intolerance be temporary after an illness?",
    hook: "A stomach bug can leave the gut short of lactase for a while. It usually comes back as the gut heals.",
    short: "Secondary lactose intolerance happens when the gut is temporarily damaged, for example after a stomach bug or because of coeliac disease. It is common in young children. A low-lactose diet while the gut heals, then bringing lactose back gradually, usually leads back to a normal diet.",
    sections: [
      {
        heading: "When the gut is damaged for a while",
        paragraphs: [
          "Secondary lactose intolerance happens when the gut is temporarily damaged, for example after an infection or because of a condition such as coeliac disease. Symptoms usually improve once the gut heals.",
          "It is particularly common in younger children after stomach bugs, because their intestines are still developing. It can also happen in adults, in conditions that damage the lining of the gut.",
          "Lactose intolerance can also be caused by bowel infections, bowel surgery or an injury to the bowel. Treating the underlying cause should help.",
        ],
      },
      {
        heading: "Letting the gut heal",
        paragraphs: [
          "Allergy UK says a strict low-lactose diet can be followed while the gut heals, typically for two to eight weeks.",
          "Lactose-free dairy products that still contain cow's milk protein, such as lactose-free milk, yoghurt and cheese, can help keep up nutrition during this time.",
        ],
      },
      {
        heading: "Bringing lactose back",
        paragraphs: [
          "After this period, gradually reintroduce lactose-containing foods. Start with small amounts of lower-lactose foods such as yoghurt, then increase the amounts and move on to higher-lactose foods.",
          "The focus is on reintroducing lactose fully, rather than long-term restriction. Over time, most people are able to return to a normal diet without symptoms.",
        ],
      },
      {
        heading: "Babies and coeliac disease",
        paragraphs: [
          "Breastfed babies with temporary lactose intolerance can usually carry on breastfeeding. Formula-fed babies may have a lactose-free formula for a short time, as tolerance usually improves within a few weeks to a couple of months.",
          "With coeliac disease, the damaged gut lining may not make enough lactase at first. Once on a gluten-free diet, the gut can heal and you might be able to digest lactose again.",
        ],
      },
      {
        heading: "When a stomach bug needs help",
        paragraphs: [
          "Diarrhoea usually stops within 5 to 7 days and vomiting in 1 or 2 days. Call 111 if you or your child have diarrhoea for more than 7 days or vomiting for more than 2 days, keep being sick and cannot keep fluid down, or have bloody diarrhoea or bleeding from the bottom.",
          "Call 999 or go to A&E if you or your child vomit blood or have vomit that looks like ground coffee, have a sudden, severe tummy ache, or are having severe difficulty breathing.",
        ],
      },
    ],
    helps: [
      "Drink lots of fluids during a stomach bug, taking small sips if you feel sick.",
      "Use lactose-free milk, yoghurt and cheese while the gut heals.",
      "Bring lactose back gradually, starting with small amounts of lower-lactose foods such as yoghurt.",
      "Breastfed babies with temporary lactose intolerance can usually carry on breastfeeding.",
      "Call 111 if diarrhoea lasts more than 7 days or vomiting more than 2 days.",
    ],
    tryThisWeek: [
      "Sip fluids during a stomach bug.",
      "Swap to lactose-free while healing.",
      "Reintroduce lactose slowly.",
    ],
    ask: "Is my lactose intolerance likely to be temporary, and when should I try lactose again?",
    interactive: {
      kind: "timeline",
      title: "From stomach bug to normal diet",
      steps: [
        { id: "ill", when: "During the illness", title: "Fluids first", points: ["Drink lots of fluids, in small sips if you feel sick", "Diarrhoea usually stops within 5 to 7 days"] },
        { id: "heal", when: "Typically 2 to 8 weeks", title: "Let the gut heal", points: ["A strict low-lactose diet while the gut heals", "Lactose-free milk, yoghurt and cheese help keep up nutrition"] },
        { id: "back", when: "Once symptoms settle", title: "Bring lactose back", points: ["Start with small amounts of lower-lactose foods such as yoghurt", "Then increase amounts and try higher-lactose foods"] },
        { id: "normal", when: "Over time", title: "Back to normal", points: ["Most people return to a normal diet without symptoms", "The focus is on reintroducing lactose fully"] },
      ],
    },
    sources: [AUK_LI, NHS_LI, CUK_LI, NHS_DV],
    quiz: {
      question: "Is lactose intolerance after a stomach bug usually permanent?",
      options: [{ text: "No, it usually improves as the gut heals", right: true }, { text: "Yes, it lasts for life" }, { text: "Only if you are an adult" }],
      why: "Secondary lactose intolerance happens when the gut is temporarily damaged. Symptoms usually improve once the gut heals.",
    },
  },
  {
    id: "lac-dietitian",
    kicker: "Support",
    question: "How can a dietitian help with lactose intolerance?",
    hook: "The one food expert whose title is protected by law, and who can help you find your level safely.",
    short: "Dietitians are regulated health professionals who assess and treat diet problems, including food intolerance. A dietitian can guide you through leaving lactose out and bringing it back, and make sure you still get the nutrients milk would give you. Ask your GP practice for a referral.",
    sections: [
      {
        heading: "What a dietitian does",
        paragraphs: [
          "Dietitians are qualified and regulated health professionals who assess, diagnose and treat diet and nutrition problems. They turn up-to-date research on food, health and disease into practical guidance.",
          "They work in the NHS and in private clinics, and often work in teams treating conditions such as food allergy and intolerance, IBS and bowel disorders.",
        ],
      },
      {
        heading: "How they help with lactose",
        paragraphs: [
          "You may be referred to a dietitian if a GP thinks you have a food intolerance.",
          "A dietitian can supervise a diet that leaves lactose out and then brings it back, and make sure you are not missing out on nutrients you would usually get from milk and dairy. Tolerance to lactose varies between people, so specific advice and monitoring from a dietitian helps.",
          "Guts UK says advice should be sought from a dietitian throughout the process of leaving a food out and reintroducing it.",
        ],
      },
      {
        heading: "When to ask for a referral",
        paragraphs: [
          "Allergy UK suggests asking for a referral to a dietitian if you are cutting cow's milk out of a child's diet, or if you are worried your diet is not giving you enough nutrition.",
          "To see an NHS dietitian, tell the receptionist or your GP at your GP practice that you would like to see one. You can also search the BDA's directory for a freelance dietitian.",
        ],
      },
      {
        heading: "Dietitian or nutritionist?",
        paragraphs: [
          "Dietitian is the only food and nutrition title protected by law. Only those registered with the Health and Care Professions Council (HCPC) can use it, and you can check the HCPC register.",
          "Dietitians train through a degree that includes 1,000 hours of on-the-job training. Titles such as nutritional therapist are not regulated by law in the same way, and their advice may not be based on evidence.",
        ],
      },
    ],
    helps: [
      "Tell the receptionist or your GP that you would like to see a dietitian.",
      "Ask for a referral if you are cutting cow's milk out of a child's diet.",
      "Get a dietitian's help when leaving out and reintroducing lactose.",
      "Check that a dietitian is on the HCPC register.",
      "Ask anyone giving diet advice about their background and qualifications.",
    ],
    tryThisWeek: [
      "Ask your GP practice about a dietitian.",
      "Check the HCPC register.",
      "Ask about qualifications.",
    ],
    ask: "Could I be referred to a dietitian?",
    interactive: {
      kind: "flip-cards",
      title: "Who's who in diet advice",
      intro: "Turn each card to see how each title is trained and regulated.",
      cards: [
        { id: "dietitian", front: "Dietitian", when: "Protected by law", back: "Registered with the HCPC. Assesses, diagnoses and treats diet and nutrition problems, in the NHS and privately." },
        { id: "nutritionist", front: "Registered nutritionist", when: "Voluntary register", back: "On the UK Voluntary Register of Nutritionists. Gives evidence-based guidance on food and health." },
        { id: "therapist", front: "Nutritional therapist", when: "Not regulated by law", back: "May use complementary approaches with little robust scientific evidence behind them." },
        { id: "unregistered", front: "Other diet titles", when: "No registration", back: "Anyone could use them, so the standard of advice cannot be guaranteed." },
      ],
    },
    sources: [BDA_HOW, BDA_WHAT, BDA_DVN, NHS_FI, AUK_LI, CUK_LI, GUTS_TESTING, BDA_HCPC],
    quiz: {
      question: "Which food and nutrition title is protected by law?",
      options: [{ text: "Dietitian", right: true }, { text: "Nutritional therapist" }, { text: "Wellness coach" }],
      why: "Dietitian is the only food and nutrition title protected by law. Only those registered with the HCPC can use it.",
    },
  },
  {
    id: "lac-other-conditions",
    kicker: "Understanding",
    question: "Which conditions are linked to lactose intolerance?",
    hook: "Sometimes the problem with milk is a sign of something else. Treat that, and lactose often gets easier.",
    short: "Lactose intolerance can be caused by another condition, such as coeliac disease or inflammatory bowel disease, and treating the cause should help. IBS can cause similar symptoms, and some people with IBS are intolerant to lactose. Cutting down on dairy can also affect calcium and bones.",
    sections: [
      {
        heading: "When another condition is the cause",
        paragraphs: [
          "In some people, lactose intolerance is caused by another health condition, such as coeliac disease or inflammatory bowel disease. Treating the underlying cause should help.",
        ],
      },
      {
        heading: "Coeliac disease",
        paragraphs: [
          "Coeliac disease is a condition where your immune system attacks your own tissues when you eat gluten. This damages your small intestine, so your body cannot properly take in nutrients.",
          "When people are first diagnosed, the damaged gut lining may not make enough lactase. Once on a gluten-free diet the gut can heal, so lactose intolerance with coeliac disease is usually temporary. Coeliac UK says not to remove lactose before speaking to your dietitian or GP, as this could reduce your calcium intake.",
        ],
      },
      {
        heading: "Irritable bowel syndrome",
        paragraphs: [
          "IBS causes symptoms like stomach cramps, bloating, diarrhoea and constipation, and flare-ups may be triggered by food or drink. Symptoms of lactose intolerance can overlap with other conditions, which is why it is important to see a GP.",
          "Guts UK says people with IBS can have intolerances to lactose, and lactose-free cow's milk is suitable in IBS. Completely cutting out food groups is not always needed, and being overly restricted can risk malnutrition.",
          "Only dietitians registered with the HCPC are trained to advise on exclusion diets such as the low FODMAP diet. Do not try exclusion diets on your own.",
        ],
      },
      {
        heading: "Crohn's disease and colitis",
        paragraphs: [
          "Crohn's & Colitis UK says that during a flare-up, if dairy makes your symptoms worse, you could try dairy alternatives with added calcium, such as oat, nut, rice or soy products.",
          "It is important not to cut foods out of your diet without talking to your dietitian or IBD team, as you could miss out on nutrients your body needs.",
        ],
      },
      {
        heading: "Bones and calcium",
        paragraphs: [
          "Following a cow's milk or lactose-free diet raises the risk of not getting enough calcium, and so does living with coeliac disease or osteoporosis.",
        ],
      },
    ],
    helps: [
      "Ask a GP whether another condition could be causing your lactose intolerance.",
      "If you have coeliac disease, speak to your dietitian or GP before cutting out lactose.",
      "With IBS, lactose-free cow's milk is suitable, so cutting out milk altogether may not be needed.",
      "Only try an exclusion diet, such as low FODMAP, with a registered dietitian.",
      "With IBD, talk to your dietitian or IBD team before cutting foods out.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have bloody diarrhoea or have lost a lot of weight for no reason.",
    ],
    tryThisWeek: [
      "Ask if another condition is the cause.",
      "Try lactose-free milk with IBS.",
      "Ask a dietitian before exclusion diets.",
    ],
    ask: "Could another condition, such as coeliac disease or IBS, be behind my symptoms?",
    interactive: {
      kind: "risk-check",
      title: "Conditions that can go with it",
      intro: "Tick any that apply to you. Some can be treated, which may help with lactose too.",
      items: [
        { id: "coeliac", label: "Coeliac disease", note: "Lactose intolerance is usually temporary once on a gluten-free diet, as the gut heals.", changeable: true },
        { id: "infection", label: "A recent bowel infection", note: "Symptoms usually improve once the gut heals.", changeable: true },
        { id: "ibd", label: "Crohn's disease or colitis", note: "Talk to your dietitian or IBD team before cutting foods out.", changeable: false },
        { id: "ibs", label: "Irritable bowel syndrome", note: "Some people with IBS are intolerant to lactose. Lactose-free cow's milk is suitable in IBS.", changeable: false },
        { id: "surgery", label: "Bowel surgery or injury", note: "These can also cause lactose intolerance.", changeable: false },
      ],
    },
    sources: [NHS_LI, CUK_LI, NHS_COELIAC, GUTS_TESTING, NHS_IBS_SYMPTOMS, GUTS_IBS, CCUK_FOOD, AUK_LI, BDA_CALCIUM, NHS_IBS_WHAT],
    quiz: {
      question: "With coeliac disease, is lactose intolerance usually permanent?",
      options: [{ text: "No, it is usually temporary", right: true }, { text: "Yes, always" }, { text: "Only in children" }],
      why: "Once on a gluten-free diet the gut can heal, so lactose intolerance with coeliac disease is usually temporary.",
    },
  },
];
