import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Coeliac disease page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and
// Coeliac UK, with Guts UK for a few points. General information only; it never replaces what a person's
// own GP, dietitian or gastroenterologist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const cuk = (label: string, path: string): LearnSource => ({ label: `Coeliac UK: ${label}`, url: `https://www.coeliac.org.uk/${path}` });

const CD = "conditions/coeliac-disease";
const NHS_CD = nhs("Coeliac disease", `${CD}/`);
const NHS_SYMPTOMS = nhs("Coeliac disease: symptoms", `${CD}/symptoms/`);
const NHS_CAUSES = nhs("Coeliac disease: causes", `${CD}/causes/`);
const NHS_DIAGNOSIS = nhs("Coeliac disease: diagnosis", `${CD}/diagnosis/`);
const NHS_TREATMENT = nhs("Coeliac disease: treatment", `${CD}/treatment/`);
const NHS_COMPLICATIONS = nhs("Coeliac disease: complications", `${CD}/complications/`);
const NHS_B12 = nhs("Vitamin B12 or folate deficiency anaemia", "conditions/vitamin-b12-or-folate-deficiency-anaemia/");
const NHS_OSTEO_PREVENTION = nhs("Osteoporosis: prevention", "conditions/osteoporosis/prevention/");
const NHS_DEXA = nhs("Bone density scan (DEXA scan)", "tests-and-treatments/dexa-scan/");
const NHS_VITAMIN_D = nhs("Vitamin D", "conditions/vitamins-and-minerals/vitamin-d/");

const ABOUT = "about-coeliac-disease";
const CUK_ABOUT = cuk("About coeliac disease", `${ABOUT}/`);
const CUK_CAUSES = cuk("Causes", `${ABOUT}/causes/`);
const CUK_SYMPTOMS = cuk("Symptoms of coeliac disease", `${ABOUT}/symptoms/`);
const CUK_MYTHS = cuk("Common myths", `${ABOUT}/common-myths/`);
const CUK_DIAGNOSED = cuk("Getting diagnosed", `${ABOUT}/getting-diagnosed/`);
const CUK_BLOOD_BIOPSY = cuk("Blood tests and biopsy", `${ABOUT}/getting-diagnosed/blood-tests-and-biopsy/`);
const CUK_HOME_TESTS = cuk("Home tests", `${ABOUT}/getting-diagnosed/home-tests/`);
const CUK_SCREENING = cuk("Who should get tested?", `${ABOUT}/getting-diagnosed/screening-for-coeliac/`);
const CUK_LAW = cuk("The law and gluten free", `${ABOUT}/gluten-and-the-law/`);
const CUK_RELATED = cuk("Related conditions", `${ABOUT}/related-conditions/`);
const CUK_THYROID = cuk("Autoimmune thyroid disease", `${ABOUT}/related-conditions/autoimmune-thyroid-disease/`);
const CUK_T1D = cuk("Type 1 diabetes", `${ABOUT}/related-conditions/type-1-diabetes/`);
const CUK_DH = cuk("Dermatitis herpetiformis", `${ABOUT}/related-conditions/dermatitis-herpetiformis/`);
const CUK_OSTEO = cuk("Osteoporosis", `${ABOUT}/related-conditions/osteoporosis/`);
const CUK_LACTOSE = cuk("Lactose intolerance", `${ABOUT}/related-conditions/lactose-intolerance/`);
const CUK_REFRACTORY = cuk("Non responsive and refractory coeliac disease", `${ABOUT}/related-conditions/non-responsive-and-refractory-coeliac-disease/`);

const LIVING = "living-with-coeliac-disease";
const FOOD = `${LIVING}/food-and-drink`;
const CUK_NEWLY = cuk("Newly diagnosed", `${LIVING}/newly-diagnosed/`);
const CUK_GF_DIET = cuk("The gluten free diet", `${FOOD}/the-gluten-free-diet/`);
const CUK_WHAT_GFD = cuk("What is the gluten free diet", `${FOOD}/the-gluten-free-diet/what-is-the-gluten-free-diet/`);
const CUK_WHAT_GLUTEN = cuk("Your guide to gluten", `${FOOD}/the-gluten-free-diet/what-is-gluten/`);
const CUK_LABELS = cuk("How to read food labels", `${FOOD}/food-and-drink-information/how-to-read-food-labels/`);
const CUK_OATS = cuk("Oats and the gluten free diet", `${FOOD}/food-and-drink-information/oats/`);
const CUK_ALCOHOL = cuk("What alcohol can be included on a gluten free diet?", `${FOOD}/food-and-drink-information/alcohol/`);
const CUK_COOKING = cuk("Cooking at home", `${FOOD}/cooking-at-home/`);
const CUK_CROSS = cuk("What is cross-contamination?", `${FOOD}/cooking-at-home/cross-contamination/`);
const CUK_BUDGET = cuk("Gluten free on a budget", `${FOOD}/cooking-at-home/gluten-free-on-a-budget/`);
const CUK_EATING_OUT = cuk("Eating out and travelling abroad", `${FOOD}/eating-out-and-travel/`);
const CUK_EATING_OUT_TIPS = cuk("Tips for eating out", `${FOOD}/eating-out-and-travel/hints-and-tips-for-eating-out/`);
const CUK_TAKEAWAYS = cuk("Gluten free takeaways", `${FOOD}/eating-out-and-travel/16528-2/`);
const CUK_TRAVEL = cuk("Travelling with coeliac disease", `${FOOD}/eating-out-and-travel/travelling-with-coeliac-disease/`);

const WELL = `${LIVING}/health-and-wellbeing`;
const CUK_BALANCED = cuk("Keeping a balanced gluten free diet", `${WELL}/keeping-healthy/keeping-a-balanced-diet/`);
const CUK_IRON = cuk("Iron and the gluten free diet", `${WELL}/keeping-healthy/keeping-a-balanced-diet/iron/`);
const CUK_FIBRE = cuk("Fibre and the gluten free diet", `${WELL}/keeping-healthy/keeping-a-balanced-diet/fibre/`);
const CUK_CALCIUM = cuk("Calcium, vitamin D and the gluten free diet", `${WELL}/keeping-healthy/keeping-a-balanced-diet/calcium-and-vitamin-d/`);
const CUK_CHECKUPS = cuk("Check-ups", `${WELL}/care-after-diagnosis/check-ups/`);
const CUK_VACCINES = cuk("Vaccinations", `${WELL}/care-after-diagnosis/vaccinations-2/`);
const CUK_MEDICATION = cuk("Medication and coeliac disease", `${WELL}/care-after-diagnosis/medication/`);
const CUK_HOSPITAL = cuk("Visiting hospital", `${WELL}/care-after-diagnosis/hospital-visits/`);
const CUK_RX = cuk("Prescriptions for gluten free food", `${WELL}/prescriptions/`);
const CUK_RX_AMOUNT = cuk("How much should be prescribed", `${WELL}/prescriptions/how-much-should-be-prescribed/`);
const CUK_RX_WHY = cuk("Why are gluten free staples food offered on prescription", `${WELL}/prescriptions/why-are-gluten-free-staples-food-offered-on-prescription/`);
const CUK_RX_DIFFICULTY = cuk("Having difficulty accessing gluten free prescriptions?", `${WELL}/prescriptions/having-difficulty-accessing-gluten-free-prescriptions/`);
const CUK_COST = cuk("Campaign to make gluten free food more affordable and accessible", "about-the-charity/cost-of-living/");
const CUK_COMMUNITY = cuk("Welcome to our community", `${LIVING}/community/`);
const CUK_M2M = cuk("Member 2 Member Support Service", `${LIVING}/community/member2member/`);

const GUTS_UK: LearnSource = { label: "Guts UK: Coeliac disease", url: "https://gutscharity.org.uk/advice-and-information/conditions/coeliac-disease/" };

export const coeliacAnswers: LearnArticle[] = [
  {
    id: "coe-what-it-is",
    kicker: "Understanding",
    question: "What is coeliac disease?",
    hook: "Not an allergy and not an intolerance. The immune system reacts to gluten and damages the lining of the gut.",
    short: "Coeliac disease is a condition where your immune system attacks your own tissues when you eat gluten. This damages your gut (small intestine), so your body cannot properly take in nutrients. It is not an allergy or a food intolerance, and the only treatment is a strict gluten-free diet for life.",
    sections: [
      {
        heading: "The immune system and gluten",
        paragraphs: [
          "Coeliac disease is a condition where your immune system attacks your own tissues when you eat gluten. This damages your gut (small intestine) so your body cannot properly take in nutrients.",
          "Gluten is a protein found in 3 types of cereal: wheat, barley and rye. It is in any food that contains them, including pasta, cakes, breakfast cereals, most types of bread, certain types of sauces and some ready meals. Most beers are made with barley.",
        ],
      },
      {
        heading: "What happens in the gut",
        paragraphs: [
          "The surface of the intestine is usually covered with millions of tiny tube-shaped growths called villi. Villi increase the surface area of your gut and help it to digest food more effectively.",
          "In coeliac disease, the immune system mistakes a substance in gluten, called gliadin, as a threat. The damage and inflammation flatten the villi, so the body cannot absorb nutrients from food properly. This is called malabsorption.",
        ],
      },
      {
        heading: "Not an allergy",
        paragraphs: [
          "Coeliac disease is not a food allergy or an intolerance. It is an autoimmune disease, where the immune system mistakenly attacks healthy tissue.",
          "The reaction is not the same as an allergic reaction and does not cause anaphylactic shock. Symptoms can affect any area of the body, and they can be different for everyone.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "Coeliac disease affects at least 1 in every 100 people in the UK. Coeliac UK says only 36% are diagnosed, which leaves around 500,000 people with unexplained symptoms.",
          "It can develop at any age, and reported cases are higher in women than men. It is most often diagnosed in people aged 40 to 60, and it affects all ethnic groups.",
        ],
      },
      {
        heading: "Lifelong, but treatable",
        paragraphs: [
          "There's no cure for coeliac disease, but following a gluten-free diet should help control symptoms and prevent the long-term complications of the condition.",
          "Once someone with coeliac disease follows a strict gluten-free diet, the small intestine will begin to repair and absorb nutrients efficiently again. You cannot grow out of it: if gluten comes back into the diet, the gut lining will become damaged again.",
        ],
      },
    ],
    helps: [
      "Do not remove gluten from your diet until you are diagnosed by a healthcare professional.",
      "If you have symptoms, discuss your concerns with your GP: this is the first step to a diagnosis.",
      "Once diagnosed, follow a strict gluten-free diet for life, which lets the gut heal.",
      "Contact Coeliac UK, the UK charity for people with coeliac disease: the helpline is 0333 332 2033, Monday to Friday, 10am to 4pm.",
    ],
    tryThisWeek: [
      "Keep eating gluten until diagnosed.",
      "Talk to your GP about symptoms.",
      "Note the Coeliac UK helpline.",
    ],
    ask: "Could my symptoms be coeliac disease, and should I be tested?",
    interactive: {
      kind: "flip-cards",
      title: "Myths and facts",
      intro: "Turn each card to see what the charity says is true.",
      cards: [
        { id: "rare", front: "It is rare", when: "A common myth", back: "It affects at least 1 in every 100 people in the UK, and many have not yet been diagnosed." },
        { id: "allergy", front: "It is a food allergy", when: "A common myth", back: "It is an autoimmune disease. Eating gluten damages the lining of the small intestine." },
        { id: "gut", front: "You need gut symptoms", when: "A common myth", back: "Symptoms can affect any area of the body. You don't need gut symptoms to have coeliac disease." },
        { id: "children", front: "Only children get it", when: "A common myth", back: "It can develop and be diagnosed at any age, and is most often diagnosed between 40 and 60." },
        { id: "underweight", front: "You have to be underweight", when: "A common myth", back: "Most people with coeliac disease are of normal weight or overweight when they are diagnosed." },
        { id: "grow-out", front: "You can grow out of it", when: "A common myth", back: "It is lifelong. If gluten comes back into the diet, the gut lining will be damaged again." },
      ],
    },
    sources: [NHS_CD, CUK_ABOUT, NHS_CAUSES, CUK_CAUSES, CUK_MYTHS, CUK_SYMPTOMS],
    quiz: {
      question: "What kind of condition is coeliac disease?",
      options: [{ text: "An autoimmune disease", right: true }, { text: "A food allergy" }, { text: "A food intolerance" }],
      why: "Coeliac disease is not a food allergy or an intolerance. It is an autoimmune disease, where the immune system mistakenly attacks healthy tissue.",
    },
  },
  {
    id: "coe-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of coeliac disease?",
    hook: "Diarrhoea and bloating, yes. But also tiredness, mouth ulcers, a rash, tingling feet, or almost nothing at all.",
    short: "Symptoms of coeliac disease can range from mild to severe, and often come and go. They can affect the gut, with diarrhoea, stomach aches and bloating, or the whole body, with tiredness, anaemia, weight loss or a rash. Some people have no noticeable symptoms at all.",
    sections: [
      {
        heading: "Mild, severe or silent",
        paragraphs: [
          "Symptoms of coeliac disease can range from mild to severe, and often come and go. Mild cases may not cause any noticeable symptoms, and the condition is often only found during testing for another condition.",
          "Symptoms vary from person to person and can affect any area of the body, which can make the condition hard to pinpoint. Treatment is recommended even when symptoms are mild or non-existent, because complications can still occur.",
        ],
      },
      {
        heading: "In the gut",
        paragraphs: [
          "Diarrhoea is a common symptom. It's caused by the small bowel not being able to absorb nutrients. This can also make stools foul smelling, greasy and frothy, and they may be difficult to flush down the toilet.",
          "Other gut symptoms include stomach ache, bloating and farting, indigestion, constipation and vomiting. Some people have persistent or unexplained nausea.",
        ],
      },
      {
        heading: "Beyond the gut",
        paragraphs: [
          "More general symptoms include extreme tiredness, which may be a sign of iron deficiency anaemia or vitamin B12 or folate deficiency anaemia, and unexpected weight loss.",
          "Some people have severe or persistent mouth ulcers, tooth enamel problems, difficulty getting pregnant or repeated miscarriages. Others have tingling and numbness in the hands and feet, or problems with co-ordination, balance and speech (ataxia).",
          "Children with coeliac disease may not grow at the expected rate and may have delayed puberty.",
        ],
      },
      {
        heading: "An itchy rash",
        paragraphs: [
          "Some people develop an itchy rash called dermatitis herpetiformis. It has blisters that burst when scratched, and it usually appears on the elbows, knees and buttocks, although it can appear anywhere on the body.",
          "It's estimated that around 1 in 4 people with coeliac disease develop it. Like coeliac disease, the rash should clear up after changing to a gluten-free diet, although skin symptoms tend to take longer to recover than gut symptoms.",
        ],
      },
      {
        heading: "Easily mistaken",
        paragraphs: [
          "Some symptoms may be mistaken for irritable bowel syndrome or wheat intolerance. They can also be put down to stress or getting older.",
          "In the past, people with coeliac disease were expected to be underweight. In fact, most people with the condition are a normal weight or even overweight. Coeliac UK's research shows the average time it takes to be diagnosed is 13 years.",
        ],
      },
    ],
    helps: [
      "If you have any of these symptoms, discuss your concerns with your GP.",
      "Do not remove gluten from your diet until you are diagnosed by a healthcare professional.",
      "Ask to be tested if you have ongoing unexplained gut symptoms, tiredness, weight loss, severe mouth ulcers or unexplained anaemia.",
      "Tell your GP about symptoms outside the gut too, such as numbness, a rash or difficulty getting pregnant.",
    ],
    tryThisWeek: [
      "Tell your GP all your symptoms.",
      "Keep eating gluten for now.",
      "Ask your GP about a test.",
    ],
    ask: "Could these symptoms be coeliac disease, even though they are not all in my gut?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention to your GP",
      intro: "Tick any you have noticed. The ones you tick make a list to take to your appointment.",
      signs: [
        "Diarrhoea, or stools that are greasy or hard to flush",
        "Stomach aches, bloating or farting",
        "Indigestion, constipation or vomiting",
        "Extreme tiredness",
        "Unexpected weight loss",
        "Severe or persistent mouth ulcers",
        "An itchy rash with blisters",
        "Tingling or numbness in the hands and feet",
        "Problems with balance, co-ordination or speech",
        "Difficulty getting pregnant",
      ],
      after: "Discuss these with your GP. Do not remove gluten from your diet until you are diagnosed by a healthcare professional.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_SYMPTOMS, CUK_SYMPTOMS, NHS_CD, NHS_DIAGNOSIS, CUK_DH, CUK_MYTHS],
    quiz: {
      question: "Do you need gut symptoms to have coeliac disease?",
      options: [{ text: "No, symptoms can affect any area of the body", right: true }, { text: "Yes, there is always diarrhoea" }, { text: "Yes, and weight loss too" }],
      why: "Symptoms vary from person to person and can affect any area of the body, which can make the condition hard to pinpoint.",
    },
  },
  {
    id: "coe-testing",
    kicker: "Tests",
    question: "How is coeliac disease tested for, and why keep eating gluten?",
    hook: "The tests look for the body's reaction to gluten. Cut it out too early and they can come back falsely clear.",
    short: "Testing starts with a blood test from a GP, which looks for antibodies. You may then see a gut specialist and have a biopsy to confirm it. Keep eating gluten in more than one meal every day throughout, because the tests only work if gluten is in your diet.",
    sections: [
      {
        heading: "Who should be tested",
        paragraphs: [
          "Testing is recommended if you have symptoms such as persistent unexplained diarrhoea, stomach ache and bloating, prolonged tiredness, unintentional weight loss, severe or persistent mouth ulcers, or unexplained anaemia.",
          "It is also recommended if you have type 1 diabetes, autoimmune thyroid disease or irritable bowel syndrome (in adults), and if a parent, brother, sister or child has coeliac disease.",
        ],
      },
      {
        heading: "Keep eating gluten",
        paragraphs: [
          "The tests look at how the body responds to gluten. If you reduce or cut out gluten because you feel ill, this is very likely to cause an inaccurate result for both the blood test and the gut biopsy.",
          "Guidelines recommend that you eat some gluten in more than one meal every day for at least six weeks before testing. Do not start a gluten-free diet until the diagnosis is confirmed by a specialist, even if a blood test is positive.",
          "If you have already cut gluten out, you will need to reintroduce it. Coeliac UK recommends at least 3g but preferably 6g of gluten a day, and 60g of wheat-based bread, about one and a half to 2 slices, contains 3g. Discuss how best to manage your symptoms with your GP.",
        ],
      },
      {
        heading: "The blood test",
        paragraphs: [
          "A GP will arrange a blood test to check for antibodies usually present in the blood of people with coeliac disease. If antibodies are found, the GP will refer you to a doctor who specialises in stomach and bowel conditions, called a gastroenterologist.",
          "It's sometimes possible to have coeliac disease and not have these antibodies. If symptoms continue despite a negative blood test, the GP may still refer you. You can also ask whether you have been tested for IgA deficiency, as some people do not make the usual antibodies.",
        ],
      },
      {
        heading: "The biopsy",
        paragraphs: [
          "A biopsy is done in hospital, usually by a gastroenterologist. A thin, flexible tube with a light and camera, called an endoscope, is passed through your mouth to your small intestine, and tiny samples of the lining are taken to be looked at under a microscope.",
          "You'll be given a local anaesthetic to numb your throat and perhaps a sedative to help you relax. It can be uncomfortable, but it should not be painful.",
          "Some adults with very high antibody levels can be diagnosed without a biopsy. Coeliac UK says this applies to around 20 to 30% of adults with symptoms, and the decision should be shared between the gastroenterologist and the patient.",
        ],
      },
      {
        heading: "Home tests",
        paragraphs: [
          "Home testing kits are sold in pharmacies and online, but they do not provide an accurate medical diagnosis and are not recognised by national medical guidelines. Whatever the result, discuss your symptoms with your GP.",
          "Other tests, such as hair analysis, applied kinesiology and Vega testing, are not regarded as accurate or reliable. They do not diagnose coeliac disease.",
        ],
      },
    ],
    helps: [
      "Keep eating gluten in more than one meal every day for at least six weeks before testing.",
      "Do not start a gluten-free diet until a specialist confirms the diagnosis, even if a blood test is positive.",
      "If you have already cut out gluten, discuss with your GP how to reintroduce it and manage your symptoms.",
      "If symptoms continue after a negative blood test, go back to your GP and ask whether you were tested for IgA deficiency.",
      "If you use a home test, discuss your symptoms with your GP whatever the result.",
    ],
    tryThisWeek: [
      "Keep gluten in more than one meal daily.",
      "Wait for a specialist before going gluten-free.",
      "Ask about IgA if a test was negative.",
    ],
    ask: "Do I need a biopsy, or can my diagnosis be made from blood tests?",
    interactive: {
      kind: "scenarios",
      title: "Before and during testing",
      scenarios: [
        {
          id: "cut-out",
          situation: "You stopped eating bread a month ago because it made you feel ill, and now a test is booked.",
          options: [{ text: "Tell your GP and reintroduce gluten first", best: true }, { text: "Stay off gluten and have the test anyway" }],
          why: "If you have already cut gluten out, you will need to reintroduce it to get the most accurate results. Discuss how best to manage your symptoms with your GP.",
        },
        {
          id: "positive",
          situation: "Your blood test is positive.",
          options: [{ text: "Keep eating gluten until a specialist confirms it", best: true }, { text: "Start a gluten-free diet straight away" }],
          why: "Do not start a gluten-free diet until the diagnosis is confirmed by a specialist, even if a blood test is positive.",
        },
        {
          id: "home-kit",
          situation: "A home test kit says you do not have coeliac disease, but you still feel unwell.",
          options: [{ text: "Discuss your symptoms with your GP", best: true }, { text: "Trust the kit and do nothing" }],
          why: "Home testing kits do not provide an accurate medical diagnosis. Whatever the result, discuss your symptoms with your GP.",
        },
        {
          id: "negative",
          situation: "Your blood test was negative, but your symptoms carry on.",
          options: [{ text: "Go back to your GP", best: true }, { text: "Assume it cannot be coeliac disease" }],
          why: "It's sometimes possible to have coeliac disease and not have these antibodies. If symptoms continue, the GP may still refer you.",
        },
      ],
    },
    sources: [NHS_DIAGNOSIS, CUK_DIAGNOSED, CUK_BLOOD_BIOPSY, CUK_HOME_TESTS, CUK_SCREENING, GUTS_UK],
    quiz: {
      question: "How should you eat before a coeliac disease test?",
      options: [{ text: "Some gluten in more than one meal a day, for at least six weeks", right: true }, { text: "Gluten-free, to settle the gut first" }, { text: "It makes no difference" }],
      why: "Guidelines recommend that you eat some gluten in more than one meal every day for at least six weeks before testing.",
    },
  },
  {
    id: "coe-family",
    kicker: "Risks",
    question: "Should my family be tested, and which conditions go with coeliac disease?",
    hook: "It runs in families, and it travels with other autoimmune conditions. Knowing the links means it can be found sooner.",
    short: "Coeliac disease often runs in families: around 1 in 10 close relatives of someone with it will be at risk, so they should be tested. People with type 1 diabetes, autoimmune thyroid disease, Down's syndrome or Turner syndrome are also more likely to have it.",
    sections: [
      {
        heading: "It runs in families",
        paragraphs: [
          "Coeliac disease often runs in families. If you have a close relative with the condition, such as a parent, brother or sister, your chance of getting it is increased. If you have an identical twin with coeliac disease, there's around a 75% chance you'll also develop it.",
          "Around 1 in 10 close relatives of people with coeliac disease will be at risk. It runs in families, but not in a predictable way. Anyone who has a close relative with coeliac disease should be tested, and the first step is to contact your GP and request a blood test.",
        ],
      },
      {
        heading: "Genes, and something more",
        paragraphs: [
          "Coeliac disease is strongly linked to changes in a group of genes called HLA-DQ, which may be passed down through a family. But these changes are very common: Guts UK says about 4 in 10 people carry them, and not everyone with them will develop coeliac disease.",
          "This suggests that something else, such as environmental factors, must trigger coeliac disease in certain people. You're more likely to develop it if you had a digestive system infection, such as rotavirus, during early childhood.",
        ],
      },
      {
        heading: "Type 1 diabetes and the thyroid",
        paragraphs: [
          "Between 4 and 9% of people with type 1 diabetes also have coeliac disease, compared with 1% in the general population. People with type 1 diabetes should be tested at diagnosis, and again if symptoms of coeliac disease continue or new ones develop.",
          "People with autoimmune thyroid disease, an overactive or an underactive thyroid, are also at higher risk. Coeliac UK puts the chance at between 1 and 4%, and recommends they are offered testing at the time of diagnosis.",
          "If you have type 1 diabetes and start a gluten-free diet, your blood glucose may change, because the healing gut absorbs more carbohydrate. You may need to keep a closer eye on it and talk to your diabetes team about your insulin.",
        ],
      },
      {
        heading: "Other links",
        paragraphs: [
          "Down's syndrome and Turner syndrome also increase the risk. It's unclear whether these conditions directly raise the risk, or whether they and coeliac disease share another underlying cause.",
          "Having coeliac disease increases the risk of developing other autoimmune conditions. There is no increased risk of coeliac disease in people with type 2 diabetes.",
          "Almost a quarter of people with coeliac disease had previously been told they had irritable bowel syndrome or were treated for it, according to recent research. Coeliac UK says NICE has advised that adults with irritable bowel syndrome should be offered a blood test.",
        ],
      },
      {
        heading: "After a negative test",
        paragraphs: [
          "Coeliac disease can develop at any age. If you have tested negative, particularly if you have type 1 diabetes or a close relative with coeliac disease, see your GP if any symptoms arise or persist.",
          "It's important to keep eating gluten until you have had all the required tests, as cutting it down before testing will affect the results.",
        ],
      },
    ],
    helps: [
      "If a parent, brother, sister or child has coeliac disease, contact your GP and request a blood test.",
      "If you have type 1 diabetes or autoimmune thyroid disease, ask about testing for coeliac disease.",
      "Keep eating gluten until you have had all the required tests.",
      "If you have type 1 diabetes and go gluten-free, keep a closer eye on your blood glucose and talk to your diabetes team.",
      "If you have tested negative but symptoms arise or persist, see your GP.",
    ],
    tryThisWeek: [
      "Relatives: request a GP blood test.",
      "Keep eating gluten until tested.",
      "Check glucose more after going gluten-free.",
    ],
    ask: "Should my children, parents, brothers and sisters be tested?",
    interactive: {
      kind: "risk-check",
      title: "Who is more likely to have it?",
      intro: "Tick any that apply to you. Each one is a reason to ask your GP about a blood test.",
      items: [
        { id: "relative", label: "A parent, sibling or child with it", note: "Around 1 in 10 close relatives will be at risk. Anyone with a close relative with coeliac disease should be tested.", changeable: false },
        { id: "twin", label: "An identical twin with it", note: "There's around a 75% chance you'll also develop the condition.", changeable: false },
        { id: "t1d", label: "Type 1 diabetes", note: "Between 4 and 9% of people with type 1 diabetes also have coeliac disease. Testing is advised at diagnosis.", changeable: false },
        { id: "thyroid", label: "Autoimmune thyroid disease", note: "Testing is recommended at the time of diagnosis.", changeable: false },
        { id: "syndromes", label: "Down's syndrome or Turner syndrome", note: "Both increase the risk, and blood tests should be considered.", changeable: false },
        { id: "ibs", label: "Irritable bowel syndrome (adults)", note: "Almost a quarter of people with coeliac disease were previously told they had irritable bowel syndrome.", changeable: false },
      ],
    },
    sources: [NHS_CAUSES, CUK_SCREENING, CUK_ABOUT, NHS_CD, CUK_RELATED, CUK_T1D, CUK_THYROID, GUTS_UK, CUK_BLOOD_BIOPSY],
    quiz: {
      question: "How many close relatives of someone with coeliac disease will be at risk?",
      options: [{ text: "Around 1 in 10", right: true }, { text: "Nearly all of them" }, { text: "None, it is not inherited" }],
      why: "Around 1 in 10 close relatives of people with coeliac disease will be at risk.",
    },
  },
  {
    id: "coe-gluten-free",
    kicker: "Treatment",
    question: "How do I go gluten-free, and how soon will I feel better?",
    hook: "The diet is the treatment. Many foods are naturally free of gluten, and symptoms usually ease within weeks.",
    short: "Coeliac disease is treated by cutting out all gluten, from wheat, barley and rye, for life. You'll be referred to a dietitian to help. Symptoms should improve considerably within weeks, though it can take from six months to five years or more for the gut to heal fully.",
    sections: [
      {
        heading: "The diet is the treatment",
        paragraphs: [
          "Coeliac disease is treated by excluding foods that contain gluten from your diet. This prevents damage to the lining of your intestines and the symptoms that go with it, such as diarrhoea and stomach pain.",
          "The gluten-free diet isn't a diet in the way most people understand it, and it's not designed to help people lose weight. It's a way of eating that helps you heal your gut so you can start absorbing all the nutrients you need.",
          "It's a common misconception that eating a little gluten will not harm you. Eating even tiny amounts can trigger symptoms and increase your risk of complications.",
        ],
      },
      {
        heading: "What to cut out",
        paragraphs: [
          "You'll no longer be able to eat foods that contain any barley, rye or wheat, including farina, semolina, durum, bulgar, cous cous and spelt.",
          "Unless they are labelled as gluten-free versions, avoid bread, pasta, cereals, biscuits or crackers, cakes and pastries, pies, and gravies and sauces. Beer, lager, stout, ale and barley squashes are not suitable either, though specially made gluten-free beers and lagers are available.",
        ],
      },
      {
        heading: "What you can still eat",
        paragraphs: [
          "Many foods are naturally free from gluten, such as meat, fish, fruit and vegetables, most dairy products, potatoes, rice, lentils and gluten-free flours made from rice, corn, soy and potato.",
          "There are gluten-free versions of common foods such as pasta, pizza bases and bread in supermarkets and health food shops. Cider, wine, sherry, spirits, port and liqueurs are gluten-free.",
          "Most people with coeliac disease can eat gluten-free oats. Many standard oats are produced in the same place as wheat, barley and rye, so they can be contaminated, and a very small number of people are still sensitive to gluten-free oats.",
        ],
      },
      {
        heading: "Help to get started",
        paragraphs: [
          "When you're first diagnosed, you'll be referred to a dietitian to help you adjust to your new diet. They can also make sure your diet is balanced and contains all the nutrients you need.",
          "In the first few months after being diagnosed, many people accidentally eat foods that contain gluten, which may bring their symptoms back. If you make the occasional mistake, it's unlikely to cause lasting gut damage. It's a learning process.",
        ],
      },
      {
        heading: "How soon you'll feel better",
        paragraphs: [
          "Your symptoms should improve considerably within weeks of starting a gluten-free diet. Some people feel significantly better within a few days, while others improve more gradually, or find that one symptom improves before another.",
          "It can take between six months and up to five years, and in some cases longer, for gut damage to fully heal. Age and how much damage there was at diagnosis are thought to play a part.",
          "If your symptoms have not improved or have become worse since starting a gluten-free diet, speak to your GP, dietitian or gastroenterologist.",
        ],
      },
    ],
    helps: [
      "See the dietitian you are referred to, who can help you adjust and keep your diet balanced.",
      "Build meals around naturally gluten-free foods such as meat, fish, fruit, vegetables, potatoes, rice and lentils.",
      "Always check the labels on the foods you buy, and choose gluten-free versions of bread, pasta, cereals and biscuits.",
      "If you want to include oats, discuss it with your healthcare professional first, and avoid oats that are not labelled gluten-free.",
      "If you eat gluten by accident, do not worry: the Coeliac UK helpline is staffed by dietitians.",
      "If your symptoms have not improved or have got worse, speak to your GP, dietitian or gastroenterologist.",
    ],
    tryThisWeek: [
      "Book your dietitian appointment.",
      "Plan meals around naturally gluten-free food.",
      "Only buy oats labelled gluten-free.",
    ],
    ask: "Can I see a dietitian, and how will we know if my gut is healing?",
    interactive: {
      kind: "timeline",
      title: "Your journey to feeling better",
      steps: [
        { id: "diagnosis", when: "At diagnosis", title: "Start the diet", points: ["Cut out all wheat, barley and rye", "You'll be referred to a dietitian", "Slips are common at first: it's a learning process"] },
        { id: "weeks", when: "Days and weeks", title: "Starting to feel better", points: ["Some people feel much better within a few days", "Symptoms should improve considerably within weeks", "One symptom may improve before another"] },
        { id: "healing", when: "Six months to five years", title: "The gut heals", points: ["Gut damage can take this long to fully heal, sometimes longer", "Age and the damage at diagnosis play a part"] },
        { id: "review", when: "Every year", title: "Annual review", points: ["Height, weight and symptoms checked", "Your diet reviewed, with more help if you need it"] },
      ],
    },
    sources: [NHS_TREATMENT, CUK_WHAT_GFD, CUK_GF_DIET, CUK_OATS, NHS_COMPLICATIONS, CUK_ALCOHOL, NHS_DIAGNOSIS],
    quiz: {
      question: "How soon should symptoms improve on a gluten-free diet?",
      options: [{ text: "Considerably, within weeks", right: true }, { text: "Not for at least ten years" }, { text: "Only if oats are cut out too" }],
      why: "Your symptoms should improve considerably within weeks of starting a gluten-free diet.",
    },
  },
  {
    id: "coe-labels",
    kicker: "Living gluten-free",
    question: "How do I read labels and avoid cross-contamination?",
    hook: "Gluten has to be named on the label, in bold. The harder part is the crumbs: toasters, fryers and shared butter.",
    short: "UK labelling law means cereals containing gluten have to be emphasised in the ingredients list, so you can tell from the label. Food labelled gluten-free contains no more than 20 parts per million of gluten. At home and when eating out, keeping gluten-free food apart matters, because even very small amounts of gluten can be damaging.",
    sections: [
      {
        heading: "Gluten is named on the label",
        paragraphs: [
          "UK and EU labelling laws require that certain allergens, including cereals containing gluten, are clearly shown on food labels. Cereals containing gluten are one of 14 listed allergens that have to be emphasised in the ingredients list, for example in bold lettering.",
          "Manufacturers name the specific cereal, so look for wheat, rye, barley, oats, spelt and Khorasan wheat. Even if only a tiny amount is used, it has to be listed. Since October 2021, food packed where it is sold, like a packaged sandwich in a café, also needs a full ingredients list with allergens emphasised.",
        ],
      },
      {
        heading: "What gluten-free means",
        paragraphs: [
          "By law, food labelled gluten-free can contain no more than 20 parts per million (ppm) of gluten. Coeliac UK says this is a safe level for all people following a gluten-free diet.",
          "Some ingredients are made from cereals containing gluten, but the gluten is removed during processing, so they are safe. These include glucose syrup made from wheat or barley, wheat-based maltodextrins and distilled ingredients such as spirits.",
          "Oats labelled 100% oats, pure oats or organic do not tell you whether the product is gluten-free. Uncontaminated oats that test at 20 ppm of gluten or less may be labelled gluten-free.",
        ],
      },
      {
        heading: "May contain",
        paragraphs: [
          "Labels such as may contain wheat, made on a line handling wheat, or not suitable for someone with a wheat allergy are voluntary. They mean the manufacturer has decided there is an unavoidable risk of cross-contamination with gluten.",
          "If you're unsure, you can contact the manufacturer, or call the Coeliac UK helpline for advice. Recipes and manufacturing processes can change without warning, so always read the label every time.",
        ],
      },
      {
        heading: "Gluten in unexpected places",
        paragraphs: [
          "Many processed foods include additives that contain gluten, such as malt flavouring and modified food starch. Look out for it in soups, sauces, stock cubes, ready meals and processed foods like sausages.",
          "Gluten may also be found in some medicines, although the vast majority of medicines prescribed by your GP are gluten-free. Gluten will only cause a problem if you eat it, and it cannot be absorbed through the skin.",
        ],
      },
      {
        heading: "Cross-contamination at home",
        paragraphs: [
          "Cross-contamination can happen if gluten-free foods and foods that contain gluten are prepared together or served with the same utensils. Even very small amounts of gluten can be damaging to people with coeliac disease.",
          "Standard washing up liquid or a dishwasher will remove gluten, and you do not need separate cloths or sponges. Use clean oil or a separate fryer, separate condiments or clean cutlery for shared butters and jams, and toaster bags or a separate toaster.",
        ],
      },
    ],
    helps: [
      "Read the label every time, as recipes and manufacturing processes can change without warning.",
      "Look for wheat, rye, barley, oats and spelt emphasised in the ingredients list.",
      "If a label says may contain wheat and you're unsure, contact the manufacturer or the Coeliac UK helpline.",
      "Use toaster bags or a separate toaster, and clean oil or a separate fryer for gluten-free food.",
      "Have separate butter, jams and spreads, or use clean cutlery for shared ones.",
      "If you're concerned about a medicine, ask your GP or pharmacist for one that does not contain wheat starch.",
    ],
    tryThisWeek: [
      "Check every label, every time.",
      "Get toaster bags or a separate toaster.",
      "Keep your own butter and jam.",
    ],
    ask: "Which foods do I need to check most carefully, and are my medicines gluten-free?",
    interactive: {
      kind: "scenarios",
      title: "Label or not?",
      scenarios: [
        {
          id: "glucose",
          situation: "An ingredients list includes glucose syrup made from wheat.",
          options: [{ text: "It's safe: the gluten is removed in processing", best: true }, { text: "Avoid it, because it comes from wheat" }],
          why: "Glucose syrup made from wheat or barley is safe for people with coeliac disease, because the gluten is removed during processing.",
        },
        {
          id: "oats",
          situation: "A pack says 100% pure oats, but not gluten-free.",
          options: [{ text: "Do not assume it is gluten-free", best: true }, { text: "Pure oats are always safe" }],
          why: "Oats labelled 100% oats, pure oats or organic do not tell you whether the product is gluten-free.",
        },
        {
          id: "may-contain",
          situation: "A snack says it was made on a line handling wheat.",
          options: [{ text: "Check with the manufacturer or helpline if unsure", best: true }, { text: "Ignore it, as wheat is not an ingredient" }],
          why: "It means the manufacturer has decided there is an unavoidable risk of cross-contamination with gluten.",
        },
        {
          id: "toaster",
          situation: "Your household shares one toaster.",
          options: [{ text: "Use toaster bags or a separate toaster", best: true }, { text: "Shake out the crumbs first" }],
          why: "Use toaster bags or consider a separate toaster for your gluten-free bread products.",
        },
        {
          id: "usual",
          situation: "You've bought the same gluten-free product for months.",
          options: [{ text: "Still read the label each time", best: true }, { text: "Stop checking it" }],
          why: "Recipes and manufacturing processes can change without warning, so always read the label every time.",
        },
      ],
    },
    sources: [CUK_LABELS, CUK_LAW, NHS_TREATMENT, CUK_CROSS, CUK_MYTHS, CUK_OATS, CUK_MEDICATION, CUK_WHAT_GLUTEN, CUK_COOKING],
    quiz: {
      question: "How much gluten can food labelled gluten-free contain?",
      options: [{ text: "No more than 20 parts per million", right: true }, { text: "Up to a spoonful" }, { text: "There is no legal limit" }],
      why: "By law, food labelled gluten-free can contain no more than 20 parts per million (ppm) of gluten.",
    },
  },
  {
    id: "coe-nutrition",
    kicker: "Treatment",
    question: "Do I need extra iron, calcium or vitamins?",
    hook: "A damaged gut absorbs less. As it heals, levels usually recover, but some people need supplements along the way.",
    short: "Before diagnosis, the damaged gut cannot absorb nutrients well, so iron, folate, vitamin B12, calcium and vitamin D can run low. Your GP or dietitian may recommend supplements while your gut repairs itself. A balanced gluten-free diet, with enough fibre, keeps you well in the long run.",
    sections: [
      {
        heading: "Why levels run low",
        paragraphs: [
          "Malabsorption, where your body does not fully absorb nutrients, can lead to a lack of vitamins and minerals. This can cause iron deficiency anaemia, vitamin B12 or folate deficiency anaemia, and osteoporosis.",
          "After diagnosis you may have blood tests to check the levels of iron and other vitamins and minerals. A GP or dietitian may recommend supplements if you need them, so you get all the nutrients you need while your digestive system repairs itself.",
        ],
      },
      {
        heading: "Iron",
        paragraphs: [
          "Iron is an essential part of haemoglobin, which carries oxygen around the body. Iron deficiency is common in undiagnosed coeliac disease because the damaged gut lining cannot absorb iron from food very well. A quarter of adults are estimated to be anaemic due to iron deficiency when they are diagnosed.",
          "Signs can include feeling tired all the time, shortness of breath, pale skin, reduced concentration and headaches. Good gluten-free sources include red meat, egg yolk, leafy green vegetables, pulses, dried fruit, nuts and seeds.",
          "Tea, coffee and chocolate can make it harder to absorb iron from plant foods, so save cups of tea and coffee for between meals. Foods and drinks rich in vitamin C, like fruit juice, potatoes and citrus fruit, help with absorption.",
        ],
      },
      {
        heading: "Vitamin B12 and folate",
        paragraphs: [
          "A lack of vitamin B12 or folate can cause extreme tiredness, a lack of energy, pins and needles, a sore and red tongue, mouth ulcers and problems with memory.",
          "Most cases can be easily treated with injections or tablets to replace the missing vitamins. Vitamin B12 is found in meat, fish, eggs and dairy products, and good sources of folate include green vegetables such as broccoli, brussels sprouts and peas.",
        ],
      },
      {
        heading: "Calcium and vitamin D",
        paragraphs: [
          "Adults with coeliac disease should have 700mg of calcium each day, the same as the general population. Your body needs vitamin D to absorb enough calcium.",
          "In the UK it is hard to get enough vitamin D from sunlight in winter, so everyone should consider a daily supplement of 10 micrograms during the autumn and winter. If you cannot get all the calcium you need from your diet, speak to your doctor or dietitian about a supplement.",
          "Some people have lactose intolerance when first diagnosed, but it is usually temporary. Do not cut out lactose until you have spoken to your dietitian or GP, as this could lower your calcium intake.",
        ],
      },
      {
        heading: "Fibre and a balanced plate",
        paragraphs: [
          "A gluten-free diet can be low in fibre and wholegrains, because wheat, rye and barley are removed. Adults in the UK should have 30 grams of fibre each day.",
          "Gluten-free wholegrains include brown rice, corn, buckwheat, millet, quinoa and gluten-free oats. Add pulses and extra vegetables to soups and stews, eat jacket potatoes with their skins, and increase fibre gradually with plenty of fluids.",
          "Aim for five portions of fruit and vegetables each day, all of which are naturally gluten-free. Follow-up after diagnosis should check for low iron, folate, vitamin B12, vitamin D and calcium.",
        ],
      },
    ],
    helps: [
      "Take any supplements your GP or dietitian recommends while your gut repairs itself.",
      "Save tea and coffee for between meals, and have foods rich in vitamin C with meals to help absorb iron.",
      "Aim for 700mg of calcium a day, and consider 10 micrograms of vitamin D a day in autumn and winter.",
      "Do not cut out lactose before speaking to your dietitian or GP.",
      "Choose gluten-free wholegrains, and increase fibre gradually with plenty to drink.",
      "If you still have symptoms of anaemia, talk to your dietitian or GP.",
    ],
    tryThisWeek: [
      "Move tea and coffee between meals.",
      "Add a gluten-free wholegrain.",
      "Consider a winter vitamin D supplement.",
    ],
    ask: "Have my iron, folate, vitamin B12 and vitamin D been checked, and do I need supplements?",
    interactive: {
      kind: "flip-cards",
      title: "Nutrients to keep an eye on",
      intro: "Turn each card to see why it matters and where to find it.",
      cards: [
        { id: "iron", front: "Iron", when: "Low in a quarter of adults at diagnosis", back: "Carries oxygen in the blood. Found in red meat, egg yolk, leafy greens, pulses, dried fruit, nuts and seeds." },
        { id: "b12-folate", front: "Vitamin B12 and folate", when: "Can cause extreme tiredness if low", back: "A lack can cause anaemia. B12 is in meat, fish, eggs and dairy; folate is in green vegetables." },
        { id: "calcium", front: "Calcium", when: "700mg a day for adults", back: "Keeps bones healthy. Found in milk, cheese, yoghurt, calcium-enriched soya milk, sardines and kale." },
        { id: "vitamin-d", front: "Vitamin D", when: "10 micrograms a day", back: "Helps the body absorb calcium. Hard to get from sunlight in a UK winter, so consider a supplement." },
        { id: "fibre", front: "Fibre", when: "30 grams a day for adults", back: "A gluten-free diet can be low in fibre. Try brown rice, quinoa, buckwheat, pulses and gluten-free oats." },
      ],
    },
    sources: [NHS_DIAGNOSIS, NHS_TREATMENT, CUK_IRON, NHS_COMPLICATIONS, CUK_CALCIUM, CUK_FIBRE, CUK_BALANCED, NHS_B12, CUK_LACTOSE, CUK_CHECKUPS, NHS_VITAMIN_D],
    quiz: {
      question: "Why is iron often low when coeliac disease is diagnosed?",
      options: [{ text: "The damaged gut cannot absorb it well", right: true }, { text: "Gluten-free food has no iron" }, { text: "The body stops needing iron" }],
      why: "Iron deficiency is common in undiagnosed coeliac disease because the damaged gut lining cannot absorb iron from food very well.",
    },
  },
  {
    id: "coe-follow-up",
    kicker: "Treatment",
    question: "What check-ups should I have after diagnosis?",
    hook: "Support for the first two years, a bone scan around the first anniversary, then reviews when you need them.",
    short: "Regular follow-up is recommended for up to two years after diagnosis, to help you settle into the gluten-free diet and check for low vitamins and minerals. Adults should have a DEXA bone scan around a year after starting the diet. After that, you may have an annual review, or ask for an appointment when you need one.",
    sections: [
      {
        heading: "The first two years",
        paragraphs: [
          "The British Society of Gastroenterology recommends regular follow-up for all patients for up to two years after diagnosis, to monitor and support people moving onto a gluten-free diet. Follow-up should be with doctors and specialist dietitians with expertise in coeliac disease.",
          "Follow-up should review your symptoms and support you with the diet, check for low iron, folate, vitamin B12, vitamin D and calcium, and include liver and thyroid function tests. Your physical and psychological wellbeing should be assessed too.",
        ],
      },
      {
        heading: "A bone scan",
        paragraphs: [
          "Adults should have a DEXA scan around one year after starting the gluten-free diet. A DEXA scan is a type of X-ray that measures bone density, to see whether you're at risk of bone fractures as you get older.",
        ],
      },
      {
        heading: "Your annual review",
        paragraphs: [
          "A GP will offer you an annual review, where your height and weight are measured and your symptoms reviewed. They'll ask about your diet and assess whether you need further help or specialist nutritional advice.",
          "If any concerns come up, you should be referred to a specialist, who will consider blood tests, a bone scan and the risk of complications. In Scotland, people over 16 are offered an annual health check by their community pharmacy.",
          "Adults who have adjusted well to the diet may be offered patient-initiated follow-up, where you ask for an appointment when you need one, rather than going to routine clinics. You should be told how to request an appointment.",
        ],
      },
      {
        heading: "Vaccinations",
        paragraphs: [
          "In some people, coeliac disease can make the spleen work less effectively, which makes infections more likely. You may need extra vaccinations, including the flu vaccine and the pneumococcal vaccine.",
          "The British Society of Gastroenterology recommends the pneumococcal vaccine for all adults newly diagnosed with coeliac disease. Coeliac UK's Health Advisory Council recommends that anyone born between 1995 and 2014 speaks with their GP about the meningitis A, C, W and Y vaccine.",
        ],
      },
      {
        heading: "If symptoms carry on",
        paragraphs: [
          "Ongoing symptoms after starting a gluten-free diet are quite common, affecting around 1 in 3 people. Most of the time, it's because gluten is still getting into the diet, and some extra support with the diet might be needed.",
          "If you have persistent or recurrent symptoms, feel persistently run down or are struggling with your diet, speak with your local healthcare team for a review. It's important not to guess what the cause is.",
          "Refractory coeliac disease, where symptoms continue even on a gluten-free diet, is rare. If it is suspected, it's likely you'll have tests to make sure another condition is not causing your symptoms, and you may be referred to a specialist.",
        ],
      },
    ],
    helps: [
      "Go to your annual review, and ask for specialist diet advice if you need it.",
      "Ask whether you should have a DEXA scan around a year after starting the diet.",
      "Ask your GP about the flu and pneumococcal vaccines.",
      "If symptoms carry on or come back, speak with your healthcare team rather than guessing the cause.",
      "If you are moved to patient-initiated follow-up, make sure you know how to request an appointment.",
      "If you go into hospital, tell the staff you have coeliac disease and need a gluten-free diet.",
    ],
    tryThisWeek: [
      "Check when your review is due.",
      "Ask about your DEXA scan.",
      "Ask about flu and pneumococcal jabs.",
    ],
    ask: "Who will follow me up, and when are my next review and bone scan?",
    interactive: {
      kind: "timeline",
      title: "Care after diagnosis",
      steps: [
        { id: "start", when: "At diagnosis", title: "Getting started", points: ["Referral to a dietitian", "Blood tests for iron and other vitamins and minerals", "The pneumococcal vaccine for newly diagnosed adults"] },
        { id: "two-years", when: "Up to two years", title: "Regular follow-up", points: ["Symptoms and diet reviewed", "Checks for low iron, folate, vitamin B12, vitamin D and calcium", "Liver and thyroid function tests"] },
        { id: "one-year", when: "Around one year", title: "Bone scan", points: ["A DEXA scan for adults", "Measures bone density"] },
        { id: "yearly", when: "Every year", title: "Annual review", points: ["Height, weight and symptoms", "Your diet, and whether you need more help"] },
        { id: "any-time", when: "Any time", title: "If symptoms return", points: ["Speak with your local healthcare team", "Ask for a review if you are struggling"] },
      ],
    },
    sources: [CUK_CHECKUPS, NHS_TREATMENT, CUK_VACCINES, CUK_REFRACTORY, CUK_HOSPITAL, NHS_DIAGNOSIS],
    quiz: {
      question: "How common are ongoing symptoms after starting a gluten-free diet?",
      options: [{ text: "Quite common: around 1 in 3 people", right: true }, { text: "They never happen" }, { text: "Everyone has them for life" }],
      why: "Ongoing symptoms after starting a gluten-free diet are quite common, affecting around 1 in 3 people.",
    },
  },
  {
    id: "coe-eating-out",
    kicker: "Living well",
    question: "How do I eat out and travel safely?",
    hook: "A little forward planning goes a long way: call ahead, say it is a medical need, and pack snacks.",
    short: "Eating out gluten-free doesn't have to be difficult. Plan ahead, explain to staff that it is a health necessity, and check how food is cooked. When travelling, tell your tour operator or airline, take emergency snacks, and use translated phrases so you are understood.",
    sections: [
      {
        heading: "Planning ahead",
        paragraphs: [
          "Eating out gluten-free doesn't have to be difficult. With a little forward planning, you can eat out with confidence.",
          "Call ahead and ask to speak to a manager or a chef, to make sure they understand your needs and the risks of cross-contamination. When you arrive, explain your needs to a member of staff, so they are understood as a health necessity and not a dietary choice.",
          "Caterers are required by law to be able to provide information about gluten in all their dishes. Look out for Coeliac UK's GF symbol, which shows that a dish is gluten-free according to the law and the caterer meets its Gluten Free Standard.",
        ],
      },
      {
        heading: "At the table",
        paragraphs: [
          "Double check how food is cooked, including whether fryers and utensils are used only for gluten-free options. Confirm your order before eating, and if you're still in any doubt that the meal is safe, do not eat it.",
          "At first, eating outside the home can seem daunting. Over time, you will learn how to handle social situations and ask the right questions about how your meal is prepared.",
        ],
      },
      {
        heading: "Takeaways",
        paragraphs: [
          "A lot of takeaway food is safe, but be careful what you order. Avoid chips cooked in the same oil as battered fish, and remember that taking the batter off fish does not make it safe.",
          "With Chinese food, avoid wheat noodles and soy sauce; rice and rice noodles are good options. With Indian food, avoid breads, and check that poppadoms are cooked in oil not used for foods containing gluten. Wheat flour pizza bases are unsuitable, though some chains offer gluten-free pizzas.",
        ],
      },
      {
        heading: "Travelling",
        paragraphs: [
          "There's no reason that coeliac disease should stop you travelling abroad. When you book, tell the tour operator, airline, train or ferry company that you need gluten-free meals, and double check before you leave.",
          "Gluten-free choices can be limited at airports, stations and motorway services, so plan ahead and always carry emergency snacks in case of delays. Check whether sealed gluten-free products can be taken into the country you are visiting. Your GP can give you a letter explaining why you need them.",
          "Packaged foods in the EU follow the same labelling law as the UK. Further afield, rules may not be as strict, but travelling can be safe with research and planning. Coeliac UK has travel guides for over 50 countries, with translations of useful phrases.",
        ],
      },
      {
        heading: "Insurance and hospital stays",
        paragraphs: [
          "Arrange travel insurance and tell the company that you have coeliac disease. Many insurers do not charge extra for it, and you can shop around if you are unhappy with a quote.",
          "If you need to go into hospital, tell the staff you need a gluten-free diet, and ask to see a dietitian early. For a planned stay, contact the hospital in advance, as some need extra time to order gluten-free foods.",
        ],
      },
    ],
    helps: [
      "Call ahead and ask to speak to a manager or chef about your needs.",
      "Explain to staff that gluten-free is a health necessity, not a dietary choice.",
      "Check that fryers and utensils are used only for gluten-free food.",
      "If you are still in any doubt that the meal is safe, do not eat it.",
      "Pack emergency gluten-free snacks for journeys and delays.",
      "Tell your travel insurer that you have coeliac disease.",
    ],
    tryThisWeek: [
      "Call ahead before eating out.",
      "Ask about fryers and utensils.",
      "Pack an emergency snack.",
    ],
    ask: "Could you give me a letter explaining why I need to carry gluten-free food when I travel?",
    interactive: {
      kind: "scenarios",
      title: "Out and about",
      scenarios: [
        {
          id: "chips",
          situation: "The chip shop fries its chips in the same oil as battered fish.",
          options: [{ text: "Skip the chips, or ask about a gluten-free fryer", best: true }, { text: "Order them, as chips are just potatoes" }],
          why: "Avoid chips if they are cooked in the same oil as battered fish. Some shops have a dedicated gluten-free fryer, so it is worth asking.",
        },
        {
          id: "batter",
          situation: "Your fish arrives battered by mistake.",
          options: [{ text: "Do not eat it, even without the batter", best: true }, { text: "Scrape off the batter and eat it" }],
          why: "Removing batter from fish does not make it safe to eat, as it will already have been contaminated with gluten.",
        },
        {
          id: "doubt",
          situation: "You are still unsure whether the dish is gluten-free.",
          options: [{ text: "Do not eat it", best: true }, { text: "Eat it and hope for the best" }],
          why: "Confirm your order before eating, and if you're still in any doubt that the meal is safe, do not eat it.",
        },
        {
          id: "flight",
          situation: "You are booking a flight for a holiday.",
          options: [{ text: "Ask for gluten-free meals and pack snacks", best: true }, { text: "Rely on finding food at the airport" }],
          why: "Ask for gluten-free meals when you book. Choices can be limited at some airports, so plan ahead and take snacks for the journey.",
        },
      ],
    },
    sources: [CUK_EATING_OUT, CUK_EATING_OUT_TIPS, CUK_TAKEAWAYS, CUK_TRAVEL, GUTS_UK, CUK_HOSPITAL],
    quiz: {
      question: "Does taking the batter off fish make it safe to eat?",
      options: [{ text: "No, it will already be contaminated", right: true }, { text: "Yes, if all the batter is removed" }, { text: "Yes, if the fish is fresh" }],
      why: "Avoid chips cooked in the same oil as battered fish, and remember that taking the batter off fish does not make it safe.",
    },
  },
  {
    id: "coe-prescriptions",
    kicker: "Living well",
    question: "Can I get gluten-free food on prescription?",
    hook: "It depends where you live. Scotland, Wales and Northern Ireland offer staples; in England it is bread and flour mixes, if at all.",
    short: "If you have been diagnosed with coeliac disease or dermatitis herpetiformis, you might be able to get gluten-free staple foods on prescription. In Scotland, Wales and Northern Ireland, anyone diagnosed can get staples such as bread, flour and pasta. In England, it is limited to bread and flour mixes, and some areas have withdrawn it.",
    sections: [
      {
        heading: "Why it is offered",
        paragraphs: [
          "Gluten-free prescriptions support people with coeliac disease to keep to a strict gluten-free diet, which is the only treatment for the condition. The diet can be hard to stick to, gluten-free foods cost more, and they can be difficult to find in local shops.",
          "If you live in an eligible area, your GP can write a prescription for gluten-free staple food, which you collect from your pharmacist, just like getting a medicine on prescription.",
        ],
      },
      {
        heading: "It depends where you live",
        paragraphs: [
          "In Scotland, Wales and Northern Ireland, anyone with a diagnosis of coeliac disease can get gluten-free staples such as bread, flour and pasta. In Scotland this is through your pharmacy, as part of the Scottish Gluten Free Food Service, and in parts of Wales there is a top-up card scheme.",
          "In England, gluten-free prescriptions are limited to bread and flour mixes, and some local areas restrict them further, by age or pregnancy for example. In some places they have been withdrawn and are only available case by case. Your local Integrated Care Board makes that decision.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "Your GP decides how much to prescribe, taking your nutritional needs into account. National prescribing guidelines suggest a number of units a month by age and sex, and they assume you also eat naturally gluten-free staples such as rice and potatoes.",
          "As a guide, 400g of bread or rolls counts as 1 unit, and a 500g bread or flour mix as 2. The guidelines suggest 18 units a month for men aged 19 to 59 and 14 for women aged 19 to 74, with extra during breastfeeding and the third trimester of pregnancy.",
        ],
      },
      {
        heading: "If you are struggling",
        paragraphs: [
          "Coeliac UK's research found that the weekly food shop for a gluten-free diet can be as much as 35% more expensive, and almost 8 in 10 people struggled to afford gluten-free products.",
          "If you're struggling, talk to your GP, as some areas allow support in individual cases where there is a clinical need. A local dietitian can also advise, especially if you're finding the diet difficult to follow.",
          "Naturally gluten-free foods often prove to be cheaper options. Coeliac UK has a seven-day plan for eating gluten-free on a budget.",
        ],
      },
      {
        heading: "Raising concerns",
        paragraphs: [
          "Coeliac UK has a GP search on its website to check your practice's gluten-free prescription policy, and a list of prescribable products you can take to your GP to discuss.",
          "If prescriptions have been withdrawn in your area, you can contact your Integrated Care Board and your local MP. You can also make a complaint, starting with your GP practice.",
        ],
      },
    ],
    helps: [
      "Use Coeliac UK's GP search to see your practice's gluten-free prescription policy.",
      "Take Coeliac UK's prescribable products list to your GP to discuss what is available to you.",
      "If you are struggling to afford the diet, talk to your GP about whether support is possible.",
      "Speak with your local dietitian if you're finding the gluten-free diet difficult to follow.",
      "Build meals around naturally gluten-free foods, which are often cheaper.",
    ],
    tryThisWeek: [
      "Check your GP's prescription policy.",
      "Take the products list to your GP.",
      "Plan cheaper naturally gluten-free meals.",
    ],
    ask: "Is gluten-free food available on prescription here, and how much can I have?",
    interactive: {
      kind: "flip-cards",
      title: "Prescriptions across the UK",
      intro: "Turn each card to see what is available where you live.",
      cards: [
        { id: "england", front: "England", when: "Set by your local ICB", back: "Bread and flour mixes only. Some areas restrict this further, and some have withdrawn it." },
        { id: "scotland", front: "Scotland", when: "Through your pharmacy", back: "Anyone diagnosed can get staples such as bread, flour and pasta, through the Scottish Gluten Free Food Service." },
        { id: "wales", front: "Wales", when: "GP prescription or top-up card", back: "Anyone diagnosed can get staples. Hywel Dda health board has a top-up card scheme." },
        { id: "northern-ireland", front: "Northern Ireland", when: "GP prescription", back: "Anyone diagnosed can get staples such as bread, flour and pasta, in line with national guidelines." },
      ],
    },
    sources: [CUK_RX, CUK_RX_AMOUNT, CUK_RX_WHY, CUK_RX_DIFFICULTY, NHS_TREATMENT, CUK_COST, CUK_BUDGET, GUTS_UK],
    quiz: {
      question: "What gluten-free food can be prescribed in England?",
      options: [{ text: "Bread and flour mixes only", right: true }, { text: "Any gluten-free food" }, { text: "Pasta, cereal and biscuits" }],
      why: "In England, gluten-free prescriptions are limited to bread and flour mixes, and some local areas restrict them further, by age or pregnancy for example.",
    },
  },
  {
    id: "coe-bones",
    kicker: "Living well",
    question: "How does coeliac disease affect my bones?",
    hook: "Years of poor absorption can thin the bones. A gluten-free diet, calcium, vitamin D and exercise help them recover.",
    short: "Undiagnosed coeliac disease can stop the body absorbing enough calcium, so many people have thinner bones (osteopenia or osteoporosis) when they are diagnosed. Bone density usually improves on a gluten-free diet. Adults should have a DEXA scan around a year after starting the diet.",
    sections: [
      {
        heading: "Why bones are at risk",
        paragraphs: [
          "In coeliac disease, the poor absorption of nutrients can make bones weak and brittle, which is called osteoporosis. Some people have a lower than normal bone density that is not as low as in osteoporosis, which is known as osteopenia.",
          "Studies have shown osteopenia or osteoporosis in between 38% and 72% of people when they are diagnosed with coeliac disease. Even people with few symptoms can have a significantly lower bone density than the general population.",
          "Most people are diagnosed long after their bones reach peak density in their mid twenties. In the years before diagnosis, the body cannot absorb important vitamins and minerals, including the calcium needed for strong bones.",
        ],
      },
      {
        heading: "The good news",
        paragraphs: [
          "Bone density will usually improve after starting a gluten-free diet. Children and teenagers who are diagnosed and follow a gluten-free diet are likely to have unaffected long-term bone health.",
          "Women diagnosed after the menopause can find it harder to improve their bone density, because there is less of the hormone oestrogen. Late diagnosis, lapses from the diet, lactose intolerance, being underweight and smoking can also add to the risk.",
        ],
      },
      {
        heading: "The bone scan",
        paragraphs: [
          "All newly diagnosed adults with coeliac disease should have a DEXA scan one year after starting the gluten-free diet. It uses low dose X-rays to see how dense your bones are, and it is quick and painless.",
          "Whether you need another scan is decided for each person. If you have osteoporosis, there are drug treatments that can lower the risk of broken bones, and your doctor will be able to advise and monitor you.",
        ],
      },
      {
        heading: "Calcium and vitamin D",
        paragraphs: [
          "Adults with coeliac disease need 700mg of calcium a day, the same as the general population. A 200ml glass of semi-skimmed milk has about 240mg. Other sources include cheese, yoghurt, calcium-enriched soya milk, tinned sardines with bones, kale and sesame seeds.",
          "Your body needs vitamin D to absorb calcium. Between October and early March we do not make enough vitamin D from sunlight, so everyone should consider a daily supplement of 10 micrograms during the autumn and winter.",
          "If you have lactose intolerance, choose foods and drinks fortified with calcium. If you cannot get all the calcium you need from your diet, speak to your doctor about a supplement.",
        ],
      },
      {
        heading: "Exercise and everyday habits",
        paragraphs: [
          "Weight-bearing exercise, where your feet and legs support your weight, and resistance exercise are particularly important for bone density. Examples include brisk walking, jogging, dancing, gardening and lifting weights.",
          "You can also lessen the chances of osteoporosis by following a strict gluten-free diet, stopping smoking and not drinking too much alcohol. If you've been diagnosed with osteoporosis, talk to your GP before starting a new exercise programme.",
        ],
      },
    ],
    helps: [
      "Ask whether you should have a DEXA scan around a year after starting the gluten-free diet.",
      "Aim for 700mg of calcium a day from foods such as milk, cheese, yoghurt and calcium-enriched soya milk.",
      "Consider a daily 10 microgram vitamin D supplement in autumn and winter.",
      "Take regular weight-bearing exercise such as walking, jogging or gardening.",
      "Stop smoking, and do not drink too much alcohol.",
      "Keep to a strict gluten-free diet, so you absorb all the nutrients from your food.",
    ],
    tryThisWeek: [
      "Ask about your DEXA scan.",
      "Add a calcium-rich food each day.",
      "Take a brisk walk.",
    ],
    ask: "Do I need a bone density scan, and should I take calcium or vitamin D?",
    interactive: {
      kind: "risk-check",
      title: "What adds to the risk for bones?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "late", label: "Diagnosed later in adult life", note: "Most people are diagnosed long after their bones reach peak density.", changeable: false },
        { id: "menopause", label: "Diagnosed after the menopause", note: "Less oestrogen can make it harder to improve bone density.", changeable: false },
        { id: "lactose", label: "Lactose intolerance", note: "Choose foods and drinks fortified with calcium. It is usually temporary.", changeable: false },
        { id: "lapses", label: "Lapses from the gluten-free diet", note: "A strict gluten-free diet helps you absorb all the nutrients from your food.", changeable: true },
        { id: "underweight", label: "Being underweight", note: "Being underweight adds to the risk of osteoporosis.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Stopping smoking lessens the chances of developing osteoporosis.", changeable: true },
      ],
    },
    sources: [CUK_OSTEO, NHS_DIAGNOSIS, NHS_COMPLICATIONS, NHS_OSTEO_PREVENTION, NHS_DEXA, CUK_CHECKUPS, CUK_CALCIUM, NHS_VITAMIN_D, CUK_LACTOSE],
    quiz: {
      question: "What usually happens to bone density on a gluten-free diet?",
      options: [{ text: "It usually improves", right: true }, { text: "It always gets worse" }, { text: "It cannot change" }],
      why: "Bone density will usually improve after starting a gluten-free diet.",
    },
  },
  {
    id: "coe-feelings",
    kicker: "Living well",
    question: "How do I cope with coeliac disease day to day?",
    hook: "Feeling overwhelmed at first is common. Mistakes happen, support is close by, and it does get easier.",
    short: "Many people feel overwhelmed when first diagnosed, and slips are common in the first few months. An occasional mistake is unlikely to cause lasting gut damage. Local groups, a Member2Member mentor, online communities and the Coeliac UK helpline can all help you find your feet.",
    sections: [
      {
        heading: "Feeling overwhelmed at first",
        paragraphs: [
          "Many people feel overwhelmed when they're first diagnosed with coeliac disease. Switching to a gluten-free diet can be confusing, particularly if you've been eating foods that contain gluten for many years.",
          "Following a gluten-free diet is a learning process, not only for you but also for your family and friends. Once you understand labels and what you're looking for, it gets quicker and easier to make safe choices.",
        ],
      },
      {
        heading: "When mistakes happen",
        paragraphs: [
          "In the first few months, many people accidentally eat foods that contain gluten, which may bring their symptoms back. If you make the occasional mistake, it's unlikely to cause lasting gut damage, and it's important not to worry.",
          "The Coeliac UK helpline is staffed by dietitians who are ready to give information and support, on 0333 332 2033, Monday to Friday, 10am to 4pm.",
        ],
      },
      {
        heading: "Social life",
        paragraphs: [
          "Eating outside the home can seem daunting at first. It's important not to let a gluten-free diet become socially restrictive. Over time, you will learn how to handle social situations and ask the right questions.",
          "When you eat out, explain your needs to a member of staff, so they are understood as a health necessity and not a dietary choice.",
        ],
      },
      {
        heading: "People who understand",
        paragraphs: [
          "Coeliac UK volunteers host local activities, from drop-in coffee mornings to meals out and children's parties. All events are open to everyone, and you'll find a warm welcome.",
          "If you're newly diagnosed, or supporting a child who is, the Member2Member service can connect you with a mentor who has experience of living gluten-free and can offer a listening ear. There are also online communities, including a private Instagram channel for 16 to 19 year olds.",
        ],
      },
      {
        heading: "Cost, wellbeing and your care",
        paragraphs: [
          "The extra cost of gluten-free food can be a worry. Coeliac UK found that 7 in 10 people say shopping gluten-free adversely affects their quality of life. If you're struggling financially, Coeliac UK recommends approaching your GP.",
          "Your follow-up should assess your physical and psychological wellbeing, as well as your diet. If you feel persistently run down or are struggling with your gluten-free diet, speak with your local healthcare team for a review.",
        ],
      },
    ],
    helps: [
      "If you eat gluten by mistake, try not to worry: an occasional mistake is unlikely to cause lasting gut damage.",
      "Call the Coeliac UK helpline, staffed by dietitians, on 0333 332 2033, Monday to Friday, 10am to 4pm.",
      "Find a local Coeliac UK group or event, where you'll find a warm welcome.",
      "Ask for a Member2Member mentor if you are newly diagnosed or supporting a child.",
      "If you feel persistently run down or are struggling with the diet, ask your local healthcare team for a review.",
    ],
    tryThisWeek: [
      "Save the helpline number.",
      "Look up a local group.",
      "Ask for a Member2Member mentor.",
    ],
    ask: "Who can I talk to if I'm finding the gluten-free diet hard to manage?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "slip",
          situation: "You realise a sauce you ate contained gluten.",
          options: [{ text: "Try not to worry, and carry on with the diet", best: true }, { text: "Give up on the diet" }],
          why: "If you make the occasional mistake, it's unlikely to cause lasting gut damage, and it's important not to worry.",
        },
        {
          id: "invite",
          situation: "Friends invite you out for a meal.",
          options: [{ text: "Go, and call the venue ahead", best: true }, { text: "Stay at home to be safe" }],
          why: "It's important not to let a gluten-free diet become socially restrictive. Over time, you will learn how to handle social situations.",
        },
        {
          id: "alone",
          situation: "You feel as if no one understands.",
          options: [{ text: "Find a local group or a mentor", best: true }, { text: "Keep it to yourself" }],
          why: "Member2Member mentors can offer a listening ear, and at local events you'll find a warm welcome.",
        },
        {
          id: "run-down",
          situation: "Months on, you still feel run down.",
          options: [{ text: "Ask your healthcare team for a review", best: true }, { text: "Put up with it" }],
          why: "If you feel persistently run down or are struggling with your gluten-free diet, speak with your local healthcare team for a review.",
        },
      ],
    },
    sources: [NHS_DIAGNOSIS, CUK_WHAT_GFD, GUTS_UK, CUK_COMMUNITY, CUK_M2M, CUK_LABELS, CUK_COST, CUK_CHECKUPS, CUK_NEWLY, CUK_EATING_OUT_TIPS],
    quiz: {
      question: "Does an occasional slip with gluten cause lasting gut damage?",
      options: [{ text: "It's unlikely to", right: true }, { text: "Yes, every time" }, { text: "Yes, and healing starts again from zero" }],
      why: "If you make the occasional mistake, it's unlikely to cause lasting gut damage, and it's important not to worry.",
    },
  },
];
