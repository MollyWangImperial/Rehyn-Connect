import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Sjögren's syndrome page's pieces (content/library-conditions/body-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS,
// Arthritis UK (the charity formerly called Versus Arthritis; its page calls the condition "Sjögren
// disease") and Sjögren's UK (the working name of the British Sjögren's Syndrome Association), including
// its information sheets. Urgent-help wording is copied from the NHS pages named. General information
// only; it never replaces what a person's own rheumatology, eye or dental team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const suk = (label: string, path: string): LearnSource => ({ label: `Sjögren's UK: ${label}`, url: `https://sjogrensuk.org/${path}` });

const NHS_SJO = nhs("Sjögren's syndrome", "conditions/sjogrens-syndrome/");
const NHS_DRY_EYES = nhs("Dry eyes", "symptoms/dry-eyes/");
const NHS_DRY_MOUTH = nhs("Dry mouth", "symptoms/dry-mouth/");
const NHS_TEETH = nhs("How to keep your teeth clean", "live-well/healthy-teeth-and-gums/how-to-keep-your-teeth-clean/");
const NHS_HCQ = nhs("Hydroxychloroquine", "medicines/hydroxychloroquine/");
const NHS_NEUROPATHY = nhs("Peripheral neuropathy", "conditions/peripheral-neuropathy/");
const NHS_RAYNAUDS = nhs("Raynaud's", "conditions/raynauds/");
const NHS_NHL_SYMPTOMS = nhs("Symptoms of non-Hodgkin lymphoma", "conditions/non-hodgkin-lymphoma/symptoms/");
const NHS_URGENT_MENTAL = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const AUK_SJO = auk("Sjögren disease", "understanding-arthritis/conditions/sjoegren-disease/");
const AUK_HCQ = auk("Hydroxychloroquine", "understanding-arthritis/arthritis-treatments/drugs/hydroxychloroquine/");
const AUK_4PS = auk("The 4 Ps: strategies you can use to cope with fatigue", "understanding-arthritis/managing-arthritis-symptoms/managing-fatigue/the-4-ps-strategies-you-can-use-to-cope-with-fatigue/");

const SUK_ABOUT = suk("What is Sjögren's", "about-sjogrens/");
const SUK_DIAGNOSIS = suk("Understanding the diagnostic process", "understanding-the-diagnostic-process/");
const SUK_ABOUT_US = suk("About us, helpline and contact", "about-us/");
const SUK_GROUPS = suk("Regional groups", "regional-groups/");
const SUK_INFO = suk("Information sheet: Sjögren's disease", "wp-content/uploads/2026/05/HBP_2025_Information-Sheet_sjogrens_disease-nv.pdf");
const SUK_INTRO = suk("An introduction to Sjögren's disease", "wp-content/uploads/2025/07/Introduction-To-SD.pdf");
const SUK_TIPS = suk("Tips to help you get the diagnosis or treatment you need", "wp-content/uploads/2025/06/Tips-to-help-you-get-the-diagnosis-or-treatment-you-need.pdf");
const SUK_EYES = suk("Investigation and management of dry eyes", "wp-content/uploads/2025/07/Investigation-and-management-of-dry-eyes.pdf");
const SUK_MOUTH = suk("Care of dry mouth", "wp-content/uploads/2025/09/Care-of-Dry-Mouth.pdf");
const SUK_TRAVEL = suk("Tips for travelling with Sjögren's", "wp-content/uploads/2025/06/Tips-for-travelling.pdf");
const SUK_FATIGUE = suk("Understanding fatigue in Sjögren's disease", "wp-content/uploads/2025/08/Undertsanding-Fatigue.pdf");
const SUK_EXERCISE = suk("The benefits of exercise", "wp-content/uploads/2023/08/benenfit-of-exercise.pdf");
const SUK_SYSTEMIC = suk("Systemic features", "wp-content/uploads/2023/08/systemic-features.pdf");
const SUK_PREGNANCY = suk("Pregnancy in Sjögren's syndrome and neonatal lupus", "wp-content/uploads/2023/08/pregnancy-in-sjogrens-syndrome.pdf");

const GOV_ACCESS_TO_WORK: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const sjogrensAnswers: LearnArticle[] = [
  {
    id: "sjo-what-it-is",
    kicker: "Understanding",
    question: "What is Sjögren's syndrome?",
    hook: "An immune system that targets the glands that make tears and saliva. There is no cure, but treatments ease the symptoms, and most people have a normal life expectancy.",
    short: "Sjögren's syndrome, also called Sjögren's disease, is an autoimmune condition where the glands that produce fluid, such as tears and spit, stop working properly. It mainly causes dry eyes and a dry mouth, and it can affect other parts of the body too. There is no cure, but treatments can help manage the symptoms.",
    sections: [
      {
        heading: "Glands that stop working properly",
        paragraphs: [
          "Sjögren's syndrome, also known as Sjögren's disease, is a condition where the glands that produce fluid, such as tears and spit, stop working properly. It can affect your daily life, but treatments can help ease the symptoms.",
          "It is an autoimmune condition. The immune system, the body's natural self-defence system, gets confused and starts to attack your body's healthy tissues.",
          "Sjögren's UK describes it as the UK's second most common autoimmune rheumatic disease. Yet the condition remains under recognised and frequently under treated.",
        ],
      },
      {
        heading: "Why things become dry",
        paragraphs: [
          "The inflammation particularly affects the glands that produce tears and saliva, which causes the eyes and mouth to become dry. Other parts of the body can also become dry, including the skin, throat, breathing tubes, gut and vagina.",
          "Dryness of the large bowel can cause symptoms similar to irritable bowel syndrome, or IBS.",
        ],
      },
      {
        heading: "Primary and secondary",
        paragraphs: [
          "When you have it on its own, it is known as primary Sjögren's. When it is linked to another condition, it is known as secondary Sjögren's.",
          "People with secondary Sjögren's may already have conditions such as rheumatoid arthritis, lupus or systemic sclerosis. Most of them will already be under the care of a rheumatologist, who will usually make the diagnosis.",
        ],
      },
      {
        heading: "Who gets it, and why",
        paragraphs: [
          "Women aged between 40 and 60 are most likely to be diagnosed, but it can affect anyone. Only about 1 in 10 people with the condition are men, and it is also seen in younger people.",
          "It is not clear why the immune system attacks the glands. It may be linked to certain genes or hormones, or triggered by a viral or bacterial infection.",
          "This does not mean that children of people with Sjögren's will automatically get the condition.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "There is currently no cure, but there are treatments that can help manage your symptoms. Sjögren's affects everyone who has it differently, and you may be able to work and continue doing your usual activities.",
          "Most people with Sjögren's syndrome live into old age and have the same life expectancy as the general population.",
        ],
      },
    ],
    helps: [
      "See a GP if you have symptoms of Sjögren's syndrome and they are affecting your daily life.",
      "If you smoke, try to give up.",
      "Have regular eye checks, and dental check-ups every 6 months.",
      "Get support from other people with the condition, at a local support group or online.",
      "Speak to your doctor if your symptoms are a problem for you.",
    ],
    tryThisWeek: [
      "Book a GP visit about symptoms.",
      "If you smoke, plan to stop.",
      "Book an eye or dental check.",
    ],
    ask: "Do I have primary or secondary Sjögren's, and which parts of my body does it affect?",
    interactive: {
      kind: "risk-check",
      title: "What is linked with Sjögren's?",
      intro: "Tick any that apply. None of these can be changed, but they can help explain why it happens.",
      items: [
        { id: "woman", label: "Being a woman", note: "About 9 in 10 people with Sjögren's are women.", changeable: false },
        { id: "age", label: "Being a woman aged 40 to 60", note: "Women aged between 40 and 60 are most likely to be diagnosed.", changeable: false },
        { id: "other-condition", label: "Rheumatoid arthritis, lupus or systemic sclerosis", note: "Sjögren's linked to another condition is called secondary Sjögren's.", changeable: false },
        { id: "genes", label: "Certain genes", note: "It may be linked to certain genes, but children will not automatically get it.", changeable: false },
        { id: "infection", label: "A viral or bacterial infection", note: "It may be triggered by a viral or bacterial infection.", changeable: false },
      ],
    },
    sources: [NHS_SJO, AUK_SJO, SUK_ABOUT, SUK_INFO],
    quiz: {
      question: "What happens in Sjögren's syndrome?",
      options: [{ text: "The immune system attacks healthy tissue, including the glands that make fluid", right: true }, { text: "It is caught from someone else" }, { text: "The eyes and mouth wear out with age" }],
      why: "It is an autoimmune condition. The immune system, the body's natural self-defence system, gets confused and starts to attack your body's healthy tissues.",
    },
  },
  {
    id: "sjo-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of Sjögren's?",
    hook: "Dry eyes, a dry mouth, aches and extreme tiredness are the most common. Symptoms vary a lot, and they can flare up and settle down.",
    short: "Common symptoms of Sjögren's are dry eyes, a dry mouth, aching muscles and joints, and extreme tiredness. Some people also have dry skin, a lasting cough, a hoarse voice, swollen salivary glands or vaginal dryness. Symptoms vary a lot from person to person, and there may be times when they get worse and times when they are better.",
    sections: [
      {
        heading: "The most common symptoms",
        paragraphs: [
          "Common symptoms include dry eyes, a dry mouth, aching muscles and joints, and extreme tiredness. Some people have mild symptoms, and some have more severe symptoms that affect their daily life.",
          "Many people who have the condition do not have any other symptoms. But symptoms can vary a lot from person to person.",
        ],
      },
      {
        heading: "Eyes",
        paragraphs: [
          "Your eyes may be dry and feel sore, irritable or as if they have grit or sand in them. Some people feel discomfort under strong lights, or find their eyes become sticky with mucus.",
          "Sometimes the eyelids might be sore or swollen, or your vision might become blurred.",
        ],
      },
      {
        heading: "Mouth and throat",
        paragraphs: [
          "Your mouth may be dry and you may get mouth ulcers. It can sometimes be hard to swallow, things may taste different, and you may need to drink water while eating.",
          "If your mouth is very dry, you may have other problems, such as tooth decay and gum disease. Your voice may be quiet or hoarse, and some people have a cough that does not go away.",
          "The salivary glands in your cheeks, in your neck and under your jaw may become swollen.",
        ],
      },
      {
        heading: "Tiredness, aches and more",
        paragraphs: [
          "Fatigue is an overwhelming feeling of tiredness that can happen after doing very little and has no obvious cause. Low mood, irritability and impaired concentration are also typical symptoms.",
          "Your joints may be painful and swollen, or your muscles may feel achy and tender, and some people have headaches and migraines. Tiredness and joint pain may affect more than half of people with Sjögren's.",
          "Other symptoms can include dry skin that may be itchy, vaginal dryness, and an unpleasant taste in your mouth caused by acid reflux.",
        ],
      },
      {
        heading: "Flare-ups",
        paragraphs: [
          "There may be times when your symptoms get worse, called flare-ups, and times when they are better, called remission. It is thought that things such as overdoing it and not resting enough may trigger your symptoms or make them worse.",
          "Because symptoms come and go, you may seem relatively well at an appointment but have severe symptoms at other times. Tracking your symptoms in a diary or app can help show the whole picture.",
        ],
      },
    ],
    helps: [
      "See a GP if you have symptoms of Sjögren's syndrome and they are affecting your daily life.",
      "Track your symptoms in a diary or app, and tell your doctor about any changes or patterns.",
      "Try not to overdo it, and rest enough, as these may trigger symptoms or make them worse.",
      "See your doctor if you have a cough, wheezing or shortness of breath that does not go away.",
      "Talk to your doctor if your salivary glands are making the sides of your face painful, as you may have an infection.",
    ],
    tryThisWeek: [
      "Start a symptom diary.",
      "Build some rest into busy days.",
      "Get a lasting cough checked.",
    ],
    ask: "Which of my symptoms are caused by Sjögren's, and which should I report quickly?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick any you have noticed. Sjögren's affects people differently, and symptoms can come and go.",
      signs: ["Dry, gritty or sore eyes", "A dry mouth", "Difficulty swallowing", "Aching muscles and joints", "Extreme tiredness", "Dry, itchy skin", "A cough that does not go away", "A quiet or hoarse voice", "Swollen glands in the cheeks, neck or jaw", "Vaginal dryness"],
      after: "Tell your GP or rheumatology team, especially if symptoms are affecting your daily life.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_SJO, AUK_SJO, SUK_ABOUT, SUK_INTRO, SUK_DIAGNOSIS],
    quiz: {
      question: "Which of these are the most common symptoms of Sjögren's?",
      options: [{ text: "Dry eyes, a dry mouth, aches and extreme tiredness", right: true }, { text: "A high temperature and a rash" }, { text: "Ringing in the ears" }],
      why: "Common symptoms include dry eyes, a dry mouth, aching muscles and joints, and extreme tiredness.",
    },
  },
  {
    id: "sjo-diagnosis",
    kicker: "Diagnosis",
    question: "How is Sjögren's diagnosed?",
    hook: "There is no single answer from one test. Tear and saliva tests, blood tests and sometimes a lip biopsy are put together, often by a rheumatologist.",
    short: "Other conditions cause similar symptoms, so Sjögren's can take a while to diagnose. A GP checks for more common causes and may refer you to specialists. Tests include blood tests, eye tests, a spit test, scans or an X-ray of the salivary glands, and sometimes a lip biopsy.",
    sections: [
      {
        heading: "Why it can take time",
        paragraphs: [
          "Other conditions can cause similar symptoms, so it can sometimes take a while to be diagnosed. Symptoms often mimic those of the menopause, rheumatoid arthritis, lupus, fibromyalgia or chronic fatigue syndrome.",
          "Symptoms are often treated one at a time by different professionals, so the whole picture can be missed. Sjögren's UK says the average time it takes to be diagnosed is thought to be around 10 years.",
        ],
      },
      {
        heading: "Who you might see",
        paragraphs: [
          "The GP will check for the more common causes and may refer you to some specialists for further tests.",
          "It is usual to see a rheumatologist, preferably one with a special interest in Sjögren's. You may also see an eye specialist, called an ophthalmologist, and a dentist, oral surgeon or oral specialist about your mouth.",
        ],
      },
      {
        heading: "Tests for the eyes and mouth",
        paragraphs: [
          "In a tear production test, a small piece of blotting paper is placed in the corner of your eye and folded over your lower eyelid. The doctor measures how much water soaks into it within five minutes.",
          "An eye specialist may also put a dye into your eyes and use a microscope with a light to look at the film of liquid over the surface of each eye.",
          "In a spit test, you spit or dribble into a container for 5 minutes to see how much saliva you produce. If it is lower than expected, this could be a sign of the condition.",
        ],
      },
      {
        heading: "Blood tests, scans and a lip biopsy",
        paragraphs: [
          "Blood tests can measure inflammation and look for two autoantibodies called anti-Ro and anti-La. About two-thirds of people with primary Sjögren's have one or both, but not everyone with the condition has them.",
          "An ultrasound scan can build up pictures of your salivary glands, and an X-ray of the glands can show whether they are blocked.",
          "In a lip biopsy, a tiny piece of tissue containing several small salivary glands is removed from your lower lip under local anaesthetic and looked at under a microscope.",
        ],
      },
      {
        heading: "Making the most of appointments",
        paragraphs: [
          "A week before your appointment, make a list of all your symptoms in roughly the order they happened, and a list of questions. If you have a lot of issues to raise with your GP, book a double appointment.",
          "Taking another person with you can help. If your GP is not taking you seriously, you could make an appointment with another GP in the practice, and in England you can contact PALS, the Patient Advice and Liaison Service.",
        ],
      },
    ],
    helps: [
      "A week before an appointment, list your symptoms in the order they happened, and your questions.",
      "Book a double appointment if you have a lot of issues to raise with your GP.",
      "Take your spouse, another relative or a trusted friend with you.",
      "Speak with your GP about a referral to a specialist.",
      "Describe your symptoms over time, not just how you feel on the day.",
      "If you are not being taken seriously, try another GP in your practice or contact PALS.",
    ],
    tryThisWeek: [
      "List your symptoms in order.",
      "Write your questions down.",
      "Ask someone to come with you.",
    ],
    ask: "Which tests have I had, and what did the results show?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "tears", front: "Tear production test", when: "Blotting paper in the corner of the eye", back: "Measures how much water soaks into the paper within five minutes." },
        { id: "eye-exam", front: "Eye examination", when: "With a dye, a microscope and a light", back: "Shows the film of liquid over each eye. Too little may mean Sjögren's." },
        { id: "spit", front: "Spit test", when: "Spit or dribble into a container for 5 minutes", back: "Measures how much saliva you make. Lower than expected could be a sign." },
        { id: "blood", front: "Blood tests", when: "Often among the first tests", back: "Look for inflammation and the anti-Ro and anti-La antibodies. Not everyone has them." },
        { id: "scans", front: "Ultrasound or X-ray", when: "Of the salivary glands", back: "Build up pictures of the glands, or show whether they are blocked." },
        { id: "biopsy", front: "Lip biopsy", when: "Under local anaesthetic", back: "A tiny piece of the lower lip with small salivary glands is looked at under a microscope." },
      ],
    },
    sources: [NHS_SJO, AUK_SJO, SUK_DIAGNOSIS, SUK_TIPS],
    quiz: {
      question: "Does a blood test without anti-Ro or anti-La rule out Sjögren's?",
      options: [{ text: "No, not everyone with the condition has them", right: true }, { text: "Yes, always" }, { text: "Only if done twice" }],
      why: "About two-thirds of people with primary Sjögren's have one or both, but not everyone with the condition has them.",
    },
  },
  {
    id: "sjo-other-organs",
    kicker: "Complications",
    question: "Can Sjögren's affect the joints, nerves or other organs?",
    hook: "For most people it stays with the tear and saliva glands. But more than 1 in 3 have problems elsewhere, so it helps to know what to report.",
    short: "For most people, Sjögren's only affects the tear and saliva glands, but more than one third have problems affecting other body systems. These can include arthritis, Raynaud's, nerve problems, lung problems, an underactive thyroid and, rarely, lymphoma. Your care team will make sure you get treatment if you have any of these.",
    sections: [
      {
        heading: "More than dryness",
        paragraphs: [
          "For most people, the condition only affects the tear and saliva glands. But more than one third of people have problems affecting other body systems, sometimes called systemic disease.",
          "If you have Sjögren's syndrome, you are more likely to have other problems. Your care team will make sure you get treatment if you have any of these conditions.",
        ],
      },
      {
        heading: "Joints and muscles",
        paragraphs: [
          "Your joints may be painful and swollen due to inflammation, and some people develop an inflammatory arthritis where the joints become hot and swollen.",
          "People with Sjögren's are more likely to have other immune conditions, such as rheumatoid arthritis.",
        ],
      },
      {
        heading: "Nerves and circulation",
        paragraphs: [
          "Some people get loss of feeling in the hands and feet, called peripheral neuropathy. Its main symptoms can include numbness and tingling, burning or shooting pain, and loss of balance.",
          "Up to half of people with Sjögren's have Raynaud's phenomenon, where the blood flow to the hands and feet is affected, causing coldness and colour changes. Keeping warm and exercising regularly can help.",
          "Neurological disease is rare. Problems can show up in many different ways, but they do not necessarily mean serious disease.",
        ],
      },
      {
        heading: "Lungs, gut, kidneys and thyroid",
        paragraphs: [
          "Occasionally, scar tissue can form in the lungs, causing breathlessness, a dry cough and chest pain. This is called pulmonary fibrosis and needs specialist advice, and drugs can be prescribed to treat it.",
          "Some people have symptoms like IBS, such as tummy pain, diarrhoea and constipation. Kidney and liver problems can also happen, and an underactive thyroid may affect up to one fifth of people with Sjögren's.",
        ],
      },
      {
        heading: "Lymphoma: rare, but worth knowing",
        paragraphs: [
          "Very rarely, Sjögren's increases the risk of cancer of the lymph glands, called non-Hodgkin lymphoma. Sjögren's UK says it remains rare, probably affecting no more than 1 or 2 in 100 people with Sjögren's.",
          "See your GP if you notice a fever, salivary glands that stay swollen, enlarged lymph glands in your neck, armpits or groin, night sweats, or weight loss without meaning to. Finding lymphoma early means treatment is more likely to be successful.",
        ],
      },
    ],
    helps: [
      "See your doctor if you have a cough, wheezing or shortness of breath that does not go away.",
      "If you smoke, stopping can help reduce the risk of lung conditions.",
      "See a GP if you have pain, tingling or loss of sensation in the feet.",
      "If you have Raynaud's, keep warm and try to avoid sudden changes in temperature.",
      "See your GP if your salivary glands stay swollen, or you have night sweats or lose weight without meaning to.",
    ],
    tryThisWeek: [
      "Note any lasting cough or breathlessness.",
      "Keep hands and feet warm.",
      "Learn the signs to report.",
    ],
    ask: "Is my Sjögren's affecting anything beyond my eyes and mouth, and how are we checking?",
    interactive: {
      kind: "signs",
      title: "Changes to report",
      intro: "Tick any you have noticed. Some can be signs that Sjögren's is affecting more than the eyes and mouth.",
      signs: ["A cough, wheeze or breathlessness that will not go away", "Numbness or tingling in the hands or feet", "Fingers or toes changing colour in the cold", "Hot, swollen joints", "Tummy pain, diarrhoea or constipation", "Salivary glands that stay swollen", "Swollen glands in the neck, armpits or groin", "Night sweats or weight loss without trying", "A fever"],
      after: "Tell your GP or rheumatology team, who can check for these conditions and arrange treatment.",
      copyHeading: "Changes I have noticed",
    },
    sources: [NHS_SJO, AUK_SJO, SUK_INTRO, NHS_NEUROPATHY, NHS_RAYNAUDS, NHS_NHL_SYMPTOMS],
    quiz: {
      question: "How common is lymphoma in Sjögren's?",
      options: [{ text: "Rare, probably no more than 1 or 2 in 100", right: true }, { text: "Most people get it" }, { text: "About half of people" }],
      why: "Sjögren's UK says it remains rare, probably affecting no more than 1 or 2 in 100 people with Sjögren's.",
    },
  },
  {
    id: "sjo-eyes",
    kicker: "Eyes",
    question: "How can I look after dry eyes?",
    hook: "Drops, gels and simple daily habits keep the eyes comfortable and protect them. A painful red eye or a change in sight needs help quickly.",
    short: "Lubricating eye drops, gels and ointments keep the eyes moist, and preservative-free drops are better if you use them often. Cleaning the eyelids, wraparound glasses, screen breaks and a humidifier also help. Regular eye checks matter, because untreated dryness can damage the front of the eye.",
    sections: [
      {
        heading: "Why eye care matters",
        paragraphs: [
          "In healthy eyes, tears form a moist film over the surface. In Sjögren's, an immune attack on parts of the eye reduces the tears, causing the eye to become dry.",
          "If dryness of the eyes is not treated, the front of your eye could become damaged and cause permanent sight problems. Seeing an optician regularly and using treatments for dry eyes can help stop this.",
        ],
      },
      {
        heading: "Drops, gels and ointments",
        paragraphs: [
          "Lubricating eye drops keep your eyes moist and reduce friction. You can buy them from chemists, and you might need to try a few types before finding one that is right for you.",
          "If you need eye drops more than three times a day, a preservative-free brand is a good idea, as regularly using drops with preservatives can increase dryness. If you have corneal ulcers or infections, speak to an eye specialist before using any products.",
          "For very dry eyes, you may need ointment, gel or sprays as well as drops. Ointments at night can help stop your eyes being dry and crusty when you wake up.",
        ],
      },
      {
        heading: "Treatments from a specialist",
        paragraphs: [
          "Your doctor might give you drops containing ciclosporin or steroids if your eyes are inflamed. Ciclosporin drops can only be started by an ophthalmologist.",
          "An eye specialist may suggest tiny plugs in the ducts at the inner corners of the eyelids, so that tears and drops do not drain away. Temporary plugs are usually tried first.",
          "Pilocarpine tablets can boost the amount of tears and saliva your glands make. Some medicines, such as antihistamines, may reduce tears, so ask your doctor or pharmacist if you are concerned.",
        ],
      },
      {
        heading: "Everyday eye care",
        paragraphs: [
          "Clean your eyelids every day. Soak a flannel in warm, not hot, water and gently press it on the area around your eyes, then gently massage your eyelids.",
          "Wraparound sunglasses or glasses with side shields help keep moisture in your eyes. Glasses are better than contact lenses, which carry a higher risk of infection and discomfort.",
          "Take breaks from screens and use a humidifier. Do not spend too long in smoky, dusty or windy places, or in air-conditioned or heated rooms.",
        ],
      },
      {
        heading: "When to get help quickly",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if your eye is painful and red, or if you have a red eye and wear contact lenses.",
          "Call 999 or go to A&E if you have any changes to your sight, like wavy lines, flashing or loss of vision, if it hurts to look at light, or if you have a red eye, severe headache and feel sick. Do not drive to A&E.",
        ],
      },
    ],
    helps: [
      "Have regular eye checks with an optician.",
      "Use a preservative-free brand if you need eye drops more than three times a day.",
      "Clean your eyelids every day with a warm flannel.",
      "Wear wraparound sunglasses or glasses with side shields outside.",
      "Take breaks from screens and use a humidifier.",
      "For a painful red eye, ask for an urgent GP appointment or contact NHS 111; for changes to your sight, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Book an eye check.",
      "Clean your eyelids each day.",
      "Take regular screen breaks.",
    ],
    ask: "Which eye drops, gels or ointments would suit me, and would plugs help?",
    interactive: {
      kind: "scenarios",
      title: "Eye moments",
      scenarios: [
        {
          id: "red-eye",
          situation: "One eye suddenly becomes painful and red.",
          options: [{ text: "Ask for an urgent GP appointment or call NHS 111", best: true }, { text: "Wait a week to see if it settles" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if your eye is painful and red, or if you have a red eye and wear contact lenses.",
        },
        {
          id: "flashing",
          situation: "You notice flashing and wavy lines in your vision.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Book a routine optician visit" }],
          why: "Call 999 or go to A&E if you have any changes to your sight, like wavy lines, flashing or loss of vision, if it hurts to look at light, or if you have a red eye, severe headache and feel sick.",
        },
        {
          id: "often",
          situation: "You are using eye drops five times a day.",
          options: [{ text: "Choose a preservative-free brand", best: true }, { text: "Any drop will do" }],
          why: "If you need eye drops more than three times a day, a preservative-free brand is a good idea, as regularly using drops with preservatives can increase dryness.",
        },
        {
          id: "morning",
          situation: "You wake up with dry, crusty eyes.",
          options: [{ text: "Ask about an ointment at night", best: true }, { text: "Rub them until they feel better" }],
          why: "Ointments at night can help stop your eyes being dry and crusty when you wake up.",
        },
      ],
    },
    sources: [NHS_SJO, AUK_SJO, NHS_DRY_EYES, SUK_EYES, SUK_INTRO],
    quiz: {
      question: "Why choose preservative-free drops if you use them often?",
      options: [{ text: "Regular use of drops with preservatives can increase dryness", right: true }, { text: "They work faster" }, { text: "They cure Sjögren's" }],
      why: "If you need eye drops more than three times a day, a preservative-free brand is a good idea, as regularly using drops with preservatives can increase dryness.",
    },
  },
  {
    id: "sjo-mouth",
    kicker: "Mouth and teeth",
    question: "How can I look after a dry mouth and my teeth?",
    hook: "Saliva protects the teeth, so a dry mouth needs extra care: fluoride, sips of water, sugar-free gum and regular dental check-ups.",
    short: "A dry mouth can lead to soreness, tooth decay, gum disease and infections such as thrush. Brushing 2 or 3 times a day with fluoride toothpaste, chewing sugar-free gum, sipping water and seeing a dentist every 6 months all help. A pharmacist can suggest gels, sprays or lozenges, but avoid acidic ones if you have your own teeth.",
    sections: [
      {
        heading: "Why saliva matters",
        paragraphs: [
          "In a healthy mouth, saliva reduces plaque build-up and neutralises acid from food and drink. Without enough saliva, food sticks in the mouth and builds up around the teeth, encouraging decay.",
          "A dry mouth can cause soreness, pain on eating, tooth decay, gum disease, tooth sensitivity and fungal infections such as thrush.",
        ],
      },
      {
        heading: "Brushing and the dentist",
        paragraphs: [
          "Brush your teeth 2 or 3 times a day using fluoride toothpaste, chew sugar-free gum and have dental check-ups every 6 months. Arthritis UK suggests seeing a dentist every three to six months if you have a dry mouth.",
          "Do the most thorough clean before bed, using an interdental brush between the teeth. Your dentist may advise a toothpaste with a higher concentration of fluoride if you need it.",
          "After brushing, spit out any excess toothpaste, and do not rinse straight away, as rinsing washes away the fluoride.",
        ],
      },
      {
        heading: "Keeping the mouth moist",
        paragraphs: [
          "Drink plenty of water, taking regular sips during the day, and keep some water by your bed at night. Sucking ice cubes can also help.",
          "Artificial saliva, lozenges, sugar-free gum or gels may help your mouth feel less dry. Some sprays are acidic and can increase tooth decay, so do not use acidic artificial saliva products if you have your own teeth.",
          "Ask a pharmacist which gels, sprays or lozenges would suit you, as not all products are suitable for everyone. Try to use alcohol-free products, as alcohol can dry your mouth out.",
        ],
      },
      {
        heading: "Food and drink",
        paragraphs: [
          "Cutting down on sweet food and drinks will help to reduce dental problems. Try not to have too much sugary, salty or acidic food and drink, such as tomatoes, citrus fruits and fizzy drinks.",
          "Teeth need breaks between eating and drinking. A talk summarised by Sjögren's UK recommended gaps of 2 hours, apart from water or tea or coffee without sugar, and chewing sugar-free gum with xylitol after eating.",
          "Alcohol, tea, coffee and other caffeinated drinks can dehydrate you.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "If your salivary glands are making the sides of your face painful, talk to your doctor, as you may have an infection.",
          "See a GP if your mouth is painful, red, swollen or bleeding, if you have sore white patches in your mouth, or if a dry mouth makes it difficult to talk or eat.",
        ],
      },
    ],
    helps: [
      "Brush your teeth 2 or 3 times a day using fluoride toothpaste.",
      "Have dental check-ups every 6 months.",
      "Take regular sips of water during the day, and keep some by your bed at night.",
      "Chew sugar-free gum or suck sugar-free sweets.",
      "Use alcohol-free mouthwash and products.",
      "Cut down on sweet food and drinks.",
    ],
    tryThisWeek: [
      "Book a dental check-up.",
      "Keep water by your bed.",
      "Swap to sugar-free gum.",
    ],
    ask: "How often should I see the dentist, and would a higher-fluoride toothpaste help me?",
    interactive: {
      kind: "flip-cards",
      title: "Dry mouth helpers",
      intro: "Turn each card to see how it helps.",
      cards: [
        { id: "fluoride", front: "Fluoride toothpaste", when: "2 or 3 times a day", back: "Helps protect against decay. Your dentist may advise a higher-fluoride toothpaste." },
        { id: "gum", front: "Sugar-free gum", when: "After eating", back: "Helps the mouth make saliva. Gum with xylitol was recommended in a Sjögren's UK talk." },
        { id: "saliva", front: "Gels, sprays and lozenges", when: "Ask a pharmacist which suits you", back: "Help the mouth feel less dry. Avoid acidic products if you have your own teeth." },
        { id: "water", front: "Water and ice cubes", when: "Sips through the day and night", back: "Help relieve a dry mouth. Keep some water by your bed." },
        { id: "interdental", front: "Interdental brushes", when: "Before bedtime", back: "Clean between the teeth as part of the most thorough clean of the day." },
        { id: "dentist", front: "Dental check-ups", when: "Every 3 to 6 months", back: "A dentist can monitor and treat dry mouth problems." },
      ],
    },
    sources: [NHS_SJO, AUK_SJO, NHS_DRY_MOUTH, SUK_MOUTH, NHS_TEETH, SUK_INFO],
    quiz: {
      question: "How often does the NHS suggest dental check-ups for Sjögren's?",
      options: [{ text: "Every 6 months", right: true }, { text: "Every 5 years" }, { text: "Only when a tooth hurts" }],
      why: "Brush your teeth 2 or 3 times a day using fluoride toothpaste, chew sugar-free gum and have dental check-ups every 6 months.",
    },
  },
  {
    id: "sjo-medicines",
    kicker: "Treatment",
    question: "Which medicines help the joints and tiredness?",
    hook: "Painkillers ease aches, and hydroxychloroquine is the usual medicine for joint pain and fatigue. It is slow to start, so it is worth keeping going.",
    short: "Painkillers such as paracetamol, and anti-inflammatories such as ibuprofen, can ease joint and muscle pain. Hydroxychloroquine is the medicine normally used for joint pain, aching and fatigue, though it does not help the dryness. Steroids may be used for a short time if joints are inflamed.",
    sections: [
      {
        heading: "Matched to your symptoms",
        paragraphs: [
          "The type of treatment you need will depend on the symptoms you have and how they are affecting you. A doctor can prescribe medicines to ease pain in your muscles and joints, and to try to stop your immune system attacking the glands that produce fluid.",
          "Some medicines help the glands produce more tears and saliva. Pilocarpine tablets can do this, and side effects such as sweating, headaches and needing to pee more often normally get better over time.",
        ],
      },
      {
        heading: "Painkillers and anti-inflammatories",
        paragraphs: [
          "Painkillers such as paracetamol can ease muscle and joint pain. If this does not work, your doctor may need to prescribe a stronger painkiller.",
          "Non-steroidal anti-inflammatory drugs, or NSAIDs, such as ibuprofen and naproxen, help to reduce inflammation and control pain, swelling and stiffness.",
        ],
      },
      {
        heading: "Hydroxychloroquine",
        paragraphs: [
          "Hydroxychloroquine is the DMARD normally used to treat joint pain, aching and fatigue. DMARDs work by calming your immune system or changing the way it responds.",
          "Many people find it helps their joint pain and fatigue, but it does not influence the dryness.",
          "It takes several weeks to start working, and it may be 12 weeks or longer before you notice any benefit. Keep taking it unless you are told to stop.",
        ],
      },
      {
        heading: "Taking it safely",
        paragraphs: [
          "Swallow the tablets whole with a meal or a glass of milk, and try to take them at the same time each day. Wait at least four hours after hydroxychloroquine before taking an indigestion remedy, as these can stop it being absorbed.",
          "There is a small risk that it can damage the retina at the back of the eye, so you will need regular monitoring of your eyes. Report any new eye symptoms to your doctor straight away.",
          "Call NHS 111 if you think you might be having serious side effects, such as constant blurred vision, changes to how you see colours, or yellowing of the skin or eyes.",
        ],
      },
      {
        heading: "Steroids and other medicines",
        paragraphs: [
          "If your joints are inflamed, a steroid injection or a short course of steroid tablets may make you feel better straight away. Steroids can treat some of the symptoms, but they will not change the condition itself.",
          "Other DMARDs, such as methotrexate, azathioprine or mycophenolate, are not normally used if you only have symptoms affecting your mouth and eyes. They can be given if you have joint problems, or complications affecting your organs.",
        ],
      },
    ],
    helps: [
      "Keep taking hydroxychloroquine unless you are told to stop, even if it does not seem to work at first.",
      "Wait at least four hours after hydroxychloroquine before taking an indigestion remedy.",
      "Go to your eye checks, and report any new eye symptoms to your doctor straight away.",
      "Speak to a pharmacist or your doctor before taking any other medicines.",
      "If pilocarpine side effects bother you, ask about starting on a low dose and increasing it gradually.",
      "Speak to your rheumatology team about fatigue, as it can be a side effect of some drugs.",
    ],
    tryThisWeek: [
      "Take tablets at the same time daily.",
      "Keep antacids four hours apart.",
      "Note any new eye symptoms.",
    ],
    ask: "Would hydroxychloroquine or another medicine help my joints or tiredness?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines, card by card",
      intro: "Turn each card to see what each medicine does.",
      cards: [
        { id: "paracetamol", front: "Painkillers", when: "Such as paracetamol", back: "Ease muscle and joint pain. A doctor may prescribe something stronger." },
        { id: "nsaids", front: "Anti-inflammatories", when: "Such as ibuprofen or naproxen", back: "Reduce inflammation and control pain, swelling and stiffness." },
        { id: "hcq", front: "Hydroxychloroquine", when: "For joint pain, aching and fatigue", back: "Calms the immune system. It may take 12 weeks or longer to notice a benefit." },
        { id: "pilocarpine", front: "Pilocarpine", when: "Tablets for dryness", back: "Boosts saliva and tears. Side effects normally get better over time." },
        { id: "steroids", front: "Steroids", when: "If joints are inflamed", back: "An injection or short course can help straight away, but does not change the condition." },
        { id: "other-dmards", front: "Other DMARDs", when: "Such as methotrexate", back: "Used for joint problems or complications affecting the organs." },
      ],
    },
    sources: [NHS_SJO, AUK_SJO, NHS_HCQ, AUK_HCQ, SUK_SYSTEMIC],
    quiz: {
      question: "Does hydroxychloroquine help the dryness of Sjögren's?",
      options: [{ text: "No, it helps joint pain and fatigue instead", right: true }, { text: "Yes, within a day" }, { text: "Only if taken with antacids" }],
      why: "Many people find it helps their joint pain and fatigue, but it does not influence the dryness.",
    },
  },
  {
    id: "sjo-checks",
    kicker: "Check-ups",
    question: "Which regular checks do I need?",
    hook: "Regular eye and dental checks protect your sight and teeth, and knowing the early signs of rarer problems means they can be found early.",
    short: "Regular eye checks and dental check-ups every 6 months help prevent damage to the eyes and teeth. Your doctor will also look out for related conditions, and you and your doctor should check regularly for early signs of lymphoma, which is rare. Some medicines, such as hydroxychloroquine, need their own eye checks.",
    sections: [
      {
        heading: "Why checks matter",
        paragraphs: [
          "Serious complications occasionally happen, including loss of teeth and damage or ulceration to the eye, which can affect vision. Prompt diagnosis and treatment may prevent these complications from happening.",
          "If you have Sjögren's, you are more likely to have other problems. Your care team will make sure you get treatment if you have any of them.",
        ],
      },
      {
        heading: "Eyes and teeth",
        paragraphs: [
          "Have regular eye checks. Seeing an optician regularly and using treatments for dry eyes can help stop permanent sight problems.",
          "Have dental check-ups every 6 months. If you have a dry mouth, a dentist can monitor and treat your symptoms.",
        ],
      },
      {
        heading: "Looking for related conditions",
        paragraphs: [
          "Your doctor will look out for symptoms such as extreme tiredness, fever, lack of energy and difficulty concentrating. These may show that you have one of the conditions linked with Sjögren's.",
          "An underactive thyroid may affect up to one fifth of people with Sjögren's. Blood test changes can include high immunoglobulin levels and a low white blood cell count.",
        ],
      },
      {
        heading: "Checking for lymphoma",
        paragraphs: [
          "You and your doctor should regularly check for early signs of lymphoma, such as a fever, salivary glands that stay swollen, and enlarged lymph glands in your neck, armpits or groin.",
          "See your GP if you notice any of these, if you start having night sweats, or if you lose weight without meaning to. Finding lymphoma early means treatment is more likely to be successful.",
        ],
      },
      {
        heading: "Checks for your medicines",
        paragraphs: [
          "If you take hydroxychloroquine, your eyes will be monitored, at a hospital clinic when you start and then once a year when you have taken it for more than five years. You will not need regular blood tests for hydroxychloroquine itself.",
          "Report any new eye symptoms to your doctor straight away.",
        ],
      },
    ],
    helps: [
      "Have regular eye checks.",
      "Have dental check-ups every 6 months.",
      "Check regularly for early signs of lymphoma, and see your GP if you notice any.",
      "Report any new eye symptoms to your doctor straight away if you take hydroxychloroquine.",
      "Speak to your doctor if your symptoms are a problem for you.",
    ],
    tryThisWeek: [
      "Book your next eye check.",
      "Book a dental check-up.",
      "Learn the early signs to report.",
    ],
    ask: "Which checks do I need, how often, and which signs should I report quickly?",
    interactive: {
      kind: "flip-cards",
      title: "Your regular checks",
      intro: "Turn each card to see what each check is for.",
      cards: [
        { id: "eyes", front: "Eye checks", when: "Regularly, with an optician", back: "Help stop dryness damaging the front of the eye and causing sight problems." },
        { id: "dentist", front: "Dental check-ups", when: "Every 6 months", back: "A dentist can monitor and treat dry mouth problems before teeth are lost." },
        { id: "glands", front: "Glands and lymph nodes", when: "You and your doctor, regularly", back: "Look for glands that stay swollen, an early sign of lymphoma to report." },
        { id: "thyroid", front: "Thyroid", when: "Your doctor looks out for signs", back: "An underactive thyroid may affect up to one fifth of people with Sjögren's." },
        { id: "blood", front: "Blood tests", when: "At check-ups", back: "Can show changes such as high immunoglobulin levels or a low white blood cell count." },
        { id: "hcq-eyes", front: "Hydroxychloroquine eye checks", when: "At the start, then yearly after five years", back: "Look for rare damage to the retina, before it affects your sight." },
      ],
    },
    sources: [NHS_SJO, AUK_SJO, SUK_INFO, AUK_HCQ, NHS_NHL_SYMPTOMS, SUK_INTRO],
    quiz: {
      question: "Which of these should you see your GP about?",
      options: [{ text: "Salivary glands that stay swollen", right: true }, { text: "Feeling thirsty after salty food" }, { text: "Needing glasses to read" }],
      why: "You and your doctor should regularly check for early signs of lymphoma, such as a fever, salivary glands that stay swollen, and enlarged lymph glands in your neck, armpits or groin.",
    },
  },
  {
    id: "sjo-fatigue",
    kicker: "Fatigue",
    question: "Why am I so tired, and how does pacing help?",
    hook: "For many people, fatigue is the hardest part. Pacing, planning and building activity up gently can give back some control.",
    short: "Fatigue in Sjögren's is an overwhelming tiredness that can happen after doing very little, and for many people it is the most disabling symptom. It is worth talking to your rheumatology team, as medicines or active disease can play a part. Pacing, planning, short walks and gradually building up activity can help.",
    sections: [
      {
        heading: "More than tiredness",
        paragraphs: [
          "Fatigue is an overwhelming feeling of tiredness that can happen after doing very little and has no obvious cause. You may feel extremely tired, both physically and mentally, and find it difficult to concentrate.",
          "It is not an ordinary tiredness that a good night's sleep puts right. In UK registry data reported by Sjögren's UK, 96 in 100 people ranked physical or mental fatigue as their most or second most disabling symptom.",
        ],
      },
      {
        heading: "Looking for causes",
        paragraphs: [
          "Speak to your rheumatology team about your treatment, as fatigue can be a side effect of some drugs. It can also be caused by your condition being active and causing inflammation.",
          "When it comes to sleep, quality is as important as quantity, and fatigue overlaps with pain and low mood. Speak to your GP, rheumatologist or friends about low mood, as talking therapies have been shown to help improve low mood and fatigue.",
        ],
      },
      {
        heading: "Pacing and the four Ps",
        paragraphs: [
          "Plan and prioritise the things you need to do, and avoid leaving all the demanding jobs to do in one go. Break tasks down into smaller jobs, and take regular breaks.",
          "Arthritis UK suggests four Ps: problem solving, planning, prioritising and pacing. Pacing is about not using up all your energy in one go.",
          "Keeping a list or fatigue chart for a couple of weeks can help you spot trends and habits that affect the way you feel.",
        ],
      },
      {
        heading: "Building activity up gently",
        paragraphs: [
          "Increasing the amount of physical activity you do can boost your energy levels. Starting slowly, even with just a 5 or 10 minute walk, can make a difference.",
          "In a Sjögren's UK article, a physiotherapist describes timing an activity until you feel a physical change, starting at about three quarters of that time, and adding a little every 2 or 3 days. During a flare-up, drop back a few steps rather than going back to zero.",
          "A physiotherapist can advise you on suitable exercises and how to increase your activity level gradually. Exercise can also help with difficulty concentrating, joint stiffness and symptoms of depression.",
        ],
      },
    ],
    helps: [
      "Speak to your rheumatology team about your treatment, as fatigue can be a side effect of some drugs.",
      "Start slowly with physical activity, even a 5 or 10 minute walk.",
      "Break tasks into smaller jobs, and take regular breaks.",
      "Think about the four Ps at the start of each day or week.",
      "Keep a list or fatigue chart for a couple of weeks to spot patterns.",
      "Ask a physiotherapist about suitable exercises and how to build up gradually.",
    ],
    tryThisWeek: [
      "Take a 5 or 10 minute walk.",
      "Split one big job into parts.",
      "Start a fatigue chart.",
    ],
    ask: "Could my medicines or active Sjögren's be adding to my fatigue, and can I see a physiotherapist?",
    interactive: {
      kind: "timeline",
      title: "Building up activity, step by step",
      steps: [
        { id: "advice", when: "Before you start", title: "Get advice", points: ["A physiotherapist can advise on suitable exercises.", "Choose an activity that is important to you."] },
        { id: "baseline", when: "Day one", title: "Find your baseline", points: ["Time the activity until you feel a physical change.", "Do not wait until you cannot do any more."] },
        { id: "start", when: "First 2 or 3 days", title: "Start at three quarters", points: ["Do about three quarters of your baseline time."] },
        { id: "build", when: "Every 2 or 3 days", title: "Add a little", points: ["Increase by a small step, such as another minute of walking."] },
        { id: "flare", when: "During a flare-up", title: "Drop back a few steps", points: ["Do not go back to zero.", "Build up again once it is over."] },
        { id: "keep", when: "Once you reach your goal", title: "Keep going", points: ["Keep exercising regularly at this level.", "A diary or chart can help."] },
      ],
    },
    sources: [AUK_SJO, SUK_FATIGUE, SUK_EXERCISE, AUK_4PS, SUK_INTRO],
    quiz: {
      question: "What is pacing?",
      options: [{ text: "Not using up all your energy in one go", right: true }, { text: "Resting all day, every day" }, { text: "Doing everything while you feel well" }],
      why: "Pacing is about not using up all your energy in one go.",
    },
  },
  {
    id: "sjo-everyday",
    kicker: "Everyday life",
    question: "How can I manage dryness at home, at work and when travelling?",
    hook: "Moist air, screen breaks, wraparound glasses and a few travel habits make dry days easier, and there is help at work.",
    short: "Adding moisture to the air, avoiding smoky, dusty or air-conditioned places and taking screen breaks all ease dryness. At work, employers have a duty to make reasonable adjustments, and Access to Work may help with costs. When flying, drink plenty of water, turn off the air vent and keep medicines and eye drops in your hand luggage.",
    sections: [
      {
        heading: "At home",
        paragraphs: [
          "Use a humidifier and put plants in your home to increase the amount of water vapour in the air. Bowls of water can also help keep the air in rooms moist.",
          "Do not spend too long in smoky, dry, dusty or windy places, or in air-conditioned or heated rooms.",
          "Do not use soap that makes your skin dry, and use emollients instead. Use a vaginal moisturiser if you need to, and a water-based lubricant during sex.",
        ],
      },
      {
        heading: "Screens and work",
        paragraphs: [
          "Reading, watching television or looking at screens for long periods can make your eyes dry. Take breaks to rest your eyes, and make sure your computer screen is just below eye level.",
          "Your employer has a duty to make reasonable adjustments to enable you to do your job. Some people find that continuing to work can help reduce symptoms such as fatigue and mental fog.",
          "Access to Work could give you a grant to help pay for things like specialist equipment, support workers, or travel to work if you cannot use public transport. It will not pay for reasonable adjustments, which your employer must legally make.",
        ],
      },
      {
        heading: "Outdoors and in the sun",
        paragraphs: [
          "Wear sunglasses with enclosed sides, or glasses with side shields, when outside to help stop your eyes drying out.",
          "Arthritis UK advises sunscreen with SPF 15 or higher if your skin is sensitive to the sun or comes out in a rash. Sjögren's UK's travel tips suggest at least factor 30, and factor 50 or more if you have problems with sun rash.",
        ],
      },
      {
        heading: "Flying and holidays",
        paragraphs: [
          "The main problem during a flight is the dry, recycled cabin air. Drink plenty of water, turn off the air vent above your seat, and put in your eye drops or ointment.",
          "Pack your medicines and eye drops in your hand luggage, in their original labelled containers. Take enough for your stay and a little extra.",
          "Most vaccines are safe for people with Sjögren's, but it is best to check with your GP or rheumatologist first. On holiday, keep drinking plenty of fluids little and often, and put your eye drops in often.",
        ],
      },
    ],
    helps: [
      "Use a humidifier and plants to add moisture to the air at home.",
      "Avoid spending too long in smoky, dusty or air-conditioned places.",
      "Take regular breaks from screens.",
      "Wear sunglasses with enclosed sides when outside.",
      "Pack medicines and eye drops in your hand luggage when flying.",
      "Ask your employer about reasonable adjustments, and look into Access to Work.",
    ],
    tryThisWeek: [
      "Add a humidifier or plants.",
      "Take regular screen breaks.",
      "Pack drops in hand luggage.",
    ],
    ask: "What changes at home or at work would help my dryness most?",
    interactive: {
      kind: "scenarios",
      title: "Dry moments",
      scenarios: [
        {
          id: "flight",
          situation: "You are settling into a long flight.",
          options: [{ text: "Turn off the air vent and sip water", best: true }, { text: "Point the air vent at your face" }],
          why: "The main problem during a flight is the dry, recycled cabin air. Drink plenty of water, turn off the air vent above your seat, and put in your eye drops or ointment.",
        },
        {
          id: "screen",
          situation: "You have hours of computer work today.",
          options: [{ text: "Take regular breaks to rest your eyes", best: true }, { text: "Keep going without a break" }],
          why: "Reading, watching television or looking at screens for long periods can make your eyes dry. Take breaks to rest your eyes, and make sure your computer screen is just below eye level.",
        },
        {
          id: "packing",
          situation: "You are packing for a holiday abroad.",
          options: [{ text: "Medicines and drops in hand luggage", best: true }, { text: "Everything in the suitcase" }],
          why: "Pack your medicines and eye drops in your hand luggage, in their original labelled containers. Take enough for your stay and a little extra.",
        },
        {
          id: "work",
          situation: "Dryness and tiredness are making work hard.",
          options: [{ text: "Talk to your employer about adjustments", best: true }, { text: "Say nothing and struggle on" }],
          why: "Your employer has a duty to make reasonable adjustments to enable you to do your job.",
        },
      ],
    },
    sources: [NHS_SJO, AUK_SJO, SUK_TRAVEL, GOV_ACCESS_TO_WORK, NHS_DRY_EYES],
    quiz: {
      question: "What is the main problem for dryness during a flight?",
      options: [{ text: "The dry, recycled cabin air", right: true }, { text: "The seat belt" }, { text: "The in-flight food" }],
      why: "The main problem during a flight is the dry, recycled cabin air.",
    },
  },
  {
    id: "sjo-pregnancy",
    kicker: "Pregnancy",
    question: "Can I have a baby if I have Sjögren's?",
    hook: "Sjögren's does not affect fertility. Some antibodies mean extra checks in pregnancy, so it helps to plan with your care team.",
    short: "Sjögren's does not affect fertility, and there are not usually any problems during or after pregnancy, but some complications, such as miscarriage, are more likely. Women with anti-Ro or anti-La antibodies may be offered low-dose aspirin, and the baby's heartbeat will need extra monitoring. Talk to your care team if you are planning a pregnancy.",
    sections: [
      {
        heading: "Planning ahead",
        paragraphs: [
          "If you have Sjögren's syndrome, your chance of having some complications in pregnancy is increased, such as a higher risk of miscarriage. Talk to your care team if you are planning to get pregnant or are in the early stages of pregnancy.",
          "The condition does not affect fertility in men or women. There are not usually any problems during or after pregnancy.",
        ],
      },
      {
        heading: "Anti-Ro and anti-La antibodies",
        paragraphs: [
          "There may be a higher risk of miscarriage in women who have anti-Ro or anti-La antibodies, which are found in up to 6 in 10 women with Sjögren's. Your doctor might suggest low-dose aspirin in the early stages of pregnancy to reduce this risk.",
          "A very small number of women pass these antibodies on to their baby. The baby could then have a rash and abnormal blood tests after birth, which clear up once the mother's antibodies have gone, in anything from a couple of weeks to a few months.",
          "In some cases, the antibodies affect the baby's heart, causing it to beat slowly. A Sjögren's UK article puts this at only 1 to 4 in 100 babies of mothers with these antibodies. If you have them, tell your obstetrician, as your baby's heartbeat will need extra monitoring in the womb.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "You may be able to carry on with some treatments, such as hydroxychloroquine, during pregnancy. Tell your doctor if you are pregnant or planning a pregnancy, and they will prescribe the lowest possible effective dose.",
          "Discuss your medicines with your doctor if you are planning a baby or thinking of breastfeeding. Hydroxychloroquine can often be used while breastfeeding, but it is best to check.",
        ],
      },
      {
        heading: "Sex and vaginal dryness",
        paragraphs: [
          "Women with Sjögren's can sometimes have a dry vagina, which can make sex painful. Lubricants and creams can help, and treatments for infections such as thrush are available from chemists.",
          "Use a vaginal moisturiser if you need to, and a water-based lubricant during sex. Do not use perfumed products in and around your vagina.",
        ],
      },
    ],
    helps: [
      "Talk to your care team if you are planning to get pregnant or are in the early stages of pregnancy.",
      "If you have anti-Ro or anti-La antibodies, tell your obstetrician.",
      "Ask whether low-dose aspirin in early pregnancy is right for you.",
      "Discuss your medicines with your doctor before pregnancy or breastfeeding.",
      "Use a vaginal moisturiser if you need to, and a water-based lubricant during sex.",
      "Do not use perfumed products in and around your vagina.",
    ],
    tryThisWeek: [
      "Book a planning talk with your team.",
      "Ask about your antibody results.",
      "Try a water-based lubricant.",
    ],
    ask: "Do I have anti-Ro or anti-La antibodies, and what would that mean for a pregnancy?",
    interactive: {
      kind: "timeline",
      title: "From planning to birth",
      steps: [
        { id: "plan", when: "Before trying", title: "Talk to your team", points: ["Tell your care team you are planning a pregnancy.", "Discuss your medicines with your doctor."] },
        { id: "early", when: "Early pregnancy", title: "Aspirin may be suggested", points: ["With anti-Ro or anti-La, low-dose aspirin may reduce the risk of miscarriage."] },
        { id: "during", when: "During pregnancy", title: "Extra heart checks", points: ["Tell your obstetrician about anti-Ro or anti-La.", "The baby's heartbeat will need extra monitoring."] },
        { id: "birth", when: "After the birth", title: "Watching for a rash", points: ["A rash or abnormal blood tests can clear in weeks to a few months."] },
        { id: "feeding", when: "Breastfeeding", title: "Check your medicines", points: ["Hydroxychloroquine can often be used, but it is best to check."] },
      ],
    },
    sources: [NHS_SJO, AUK_SJO, SUK_INTRO, NHS_HCQ, SUK_PREGNANCY, AUK_HCQ],
    quiz: {
      question: "Does Sjögren's affect fertility?",
      options: [{ text: "No, it does not affect fertility in men or women", right: true }, { text: "Yes, it stops most pregnancies" }, { text: "Only in men" }],
      why: "The condition does not affect fertility in men or women.",
    },
  },
  {
    id: "sjo-support",
    kicker: "Support",
    question: "Where can I find support, and how can I look after my mood?",
    hook: "Sjögren's can be hard physically and emotionally. A helpline, local groups and talking to people who understand can make a real difference.",
    short: "Sjögren's can be difficult to live with, both physically and emotionally, and it can bring low mood and isolation. Sjögren's UK runs a helpline, regional groups and a Make a Friend scheme, and Arthritis UK has a helpline and online community. If you need urgent help for your mental health, contact NHS 111 or call Samaritans on 116 123, and in an emergency call 999.",
    sections: [
      {
        heading: "Hard in more ways than one",
        paragraphs: [
          "Sjögren's syndrome can be a difficult condition to live with, both physically and emotionally.",
          "Fatigue, chronic pain and dryness can lead to feelings of frustration, isolation and mental exhaustion. Depression is one of the problems more likely with Sjögren's, and some people start to feel down as a result of the condition and the fatigue it causes.",
        ],
      },
      {
        heading: "Sjögren's UK",
        paragraphs: [
          "Sjögren's UK, the working name of the British Sjögren's Syndrome Association, was founded in 1986. It is a self-help charity with around 2300 members, offering information, a helpline, a quarterly magazine and regional support groups.",
          "Its helpline is 0121 478 1133, open Monday to Wednesday from 9:30am to 4pm, and Thursday and Friday from 9:30am to 8pm. Anyone is welcome to make a first call, and if your call is not answered straight away, you can leave a message.",
        ],
      },
      {
        heading: "Meeting others",
        paragraphs: [
          "Meeting other people with Sjögren's can help relieve the isolation many feel. Groups are a chance to share experiences and tips, and to make new friends.",
          "Members can join a Make a Friend scheme, which puts you in touch by phone with someone who lives nearby. If there is no group in your area, Sjögren's UK can help you start one, in person or online.",
          "Arthritis UK also has an online community, and its helpline is 0800 5200 520.",
        ],
      },
      {
        heading: "Looking after your mood",
        paragraphs: [
          "Speak to your GP, rheumatologist or friends about low mood, as this might be linked to fatigue. Talking therapies, such as counselling, have been shown to help improve low mood and fatigue.",
          "Exercise can also help with extreme tiredness, difficulty concentrating and symptoms of depression.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, get advice from NHS 111, choosing the mental health option, or ask for an urgent GP appointment. You can call Samaritans on 116 123 to talk about anything that is troubling you.",
          "Call 999 or go to A&E now if you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one.",
        ],
      },
    ],
    helps: [
      "Call the Sjögren's UK helpline on 0121 478 1133 if you would like a listening ear.",
      "Join a local support group or an online community.",
      "Ask about the Make a Friend scheme if you are a member of Sjögren's UK.",
      "Speak to your GP, rheumatologist or friends about low mood.",
      "Ask about talking therapies, such as counselling.",
      "For urgent help, contact NHS 111 or call Samaritans on 116 123; in an emergency, call 999.",
    ],
    tryThisWeek: [
      "Save the helpline numbers.",
      "Look up your nearest group.",
      "Talk to someone about your mood.",
    ],
    ask: "Could my low mood be linked to my fatigue, and could talking therapy help?",
    interactive: {
      kind: "signs",
      title: "Feelings to mention",
      intro: "Tick any you have noticed. Living with Sjögren's can affect how you feel, and talking about it helps.",
      signs: ["Feeling down or low", "Feeling isolated or lonely", "Frustration with symptoms", "Feeling anxious", "Mental exhaustion", "Difficulty concentrating"],
      after: "Talk to your GP or rheumatologist. For urgent help, contact NHS 111 or call Samaritans on 116 123. In an emergency, call 999.",
      copyHeading: "Feelings I have noticed",
    },
    sources: [NHS_SJO, AUK_SJO, SUK_ABOUT_US, SUK_GROUPS, SUK_DIAGNOSIS, NHS_URGENT_MENTAL],
    quiz: {
      question: "How can meeting other people with Sjögren's help?",
      options: [{ text: "It can help relieve the isolation many people feel", right: true }, { text: "It cures the dryness" }, { text: "It replaces seeing a doctor" }],
      why: "Meeting other people with Sjögren's can help relieve the isolation many feel.",
    },
  },
];
