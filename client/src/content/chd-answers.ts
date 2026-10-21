import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Coronary heart disease page's pieces (content/library-conditions/heart-more.ts
// `learnId`). Every sentence was written from wording checked on 21 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Much of it comes from the NHS
// coronary heart disease pages and the British Heart Foundation's "Understanding coronary heart disease"
// booklet (last updated July 2025), and is credited to them. Driving rules are only what the government's
// DVLA pages say. General information only; it never replaces what a person's own team tells them.

const nhsChd = (label: string, path: string): LearnSource => ({ label: `NHS: Coronary heart disease – ${label}`, url: `https://www.nhs.uk/conditions/coronary-heart-disease/${path}` });
const bhf = (label: string, path: string): LearnSource => ({ label: `British Heart Foundation: ${label}`, url: `https://www.bhf.org.uk/informationsupport/${path}` });

const NHS_CHD: LearnSource = { label: "NHS: Coronary heart disease", url: "https://www.nhs.uk/conditions/coronary-heart-disease/" };
const NHS_CHD_SYMPTOMS = nhsChd("Symptoms", "symptoms/");
const NHS_CHD_CAUSES = nhsChd("Causes", "causes/");
const NHS_CHD_DIAGNOSIS = nhsChd("Diagnosis", "diagnosis/");
const NHS_CHD_TREATMENT = nhsChd("Treatment", "treatment/");
const NHS_CHD_RECOVERY = nhsChd("Recovery", "recovery/");
const NHS_CHD_PREVENTION = nhsChd("Prevention", "prevention/");
const NHS_ANGINA: LearnSource = { label: "NHS: Angina", url: "https://www.nhs.uk/conditions/angina/" };
const NHS_HEART_ATTACK: LearnSource = { label: "NHS: Heart attack", url: "https://www.nhs.uk/conditions/heart-attack/" };
const NHS_ASPIRIN: LearnSource = { label: "NHS: Aspirin", url: "https://www.nhs.uk/medicines/aspirin/" };
const NHS_STATINS: LearnSource = { label: "NHS: Statins", url: "https://www.nhs.uk/medicines/statins/" };
const NHS_CABG_RECOVERY: LearnSource = { label: "NHS: Recovering from a coronary artery bypass graft", url: "https://www.nhs.uk/tests-and-treatments/coronary-artery-bypass-graft/recovery/" };
const NHS_CHOL_LEVELS: LearnSource = { label: "NHS: High cholesterol – Cholesterol levels", url: "https://www.nhs.uk/conditions/high-cholesterol/cholesterol-levels/" };
const NHS_CHOL_LOWER: LearnSource = { label: "NHS: High cholesterol – How to lower your cholesterol", url: "https://www.nhs.uk/conditions/high-cholesterol/how-to-lower-your-cholesterol/" };
const NHS_CHOL_MEDS: LearnSource = { label: "NHS: High cholesterol – Medicines for high cholesterol", url: "https://www.nhs.uk/conditions/high-cholesterol/medicines-for-high-cholesterol/" };
const NHS_ACTIVITY: LearnSource = { label: "NHS: Physical activity guidelines for adults aged 19 to 64", url: "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/" };
const NHS_STOP_SMOKING: LearnSource = { label: "NHS: NHS stop smoking services help you quit", url: "https://www.nhs.uk/live-well/quit-smoking/nhs-stop-smoking-services-help-you-quit/" };
const NHS_TALKING: LearnSource = { label: "NHS: Talking therapies", url: "https://www.nhs.uk/tests-and-treatments/talking-therapies/" };
const NHS_URGENT_MH: LearnSource = { label: "NHS: Where to get urgent help for mental health", url: "https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/" };
const GOV_ANGIOPLASTY_DRIVING: LearnSource = { label: "GOV.UK: Heart attacks, angioplasty, and driving", url: "https://www.gov.uk/heart-attacks-and-driving" };
const GOV_BYPASS_DRIVING: LearnSource = { label: "GOV.UK: Coronary artery bypass or disease and driving", url: "https://www.gov.uk/coronary-artery-bypass-and-driving" };
const BHF_BOOKLET: LearnSource = {
  label: "British Heart Foundation: Understanding coronary heart disease (booklet)",
  url: "https://www.bhf.org.uk/-/media/files/information-and-support/publications/heart-conditions/understanding-coronary-heart-diseasea_a6_web_281125.pdf",
};
const BHF_CHD = bhf("Coronary heart disease", "conditions/coronary-heart-disease");
const BHF_RISK_FACTORS = bhf("Risk factors", "risk-factors");
const BHF_ECG = bhf("ECG", "tests/ecg");
const BHF_ECHO = bhf("Echocardiogram", "tests/echocardiogram");
const BHF_ANGIOGRAM = bhf("Coronary angiogram", "tests/angiogram");
const BHF_CT = bhf("CT scan", "tests/ct-scan");
const BHF_ANGIOPLASTY = bhf("Coronary angioplasty and stents (PCI)", "treatments/coronary-angioplasty-and-stents");
const BHF_BYPASS = bhf("Coronary artery bypass surgery (CABG)", "treatments/coronary-bypass-surgery");
const BHF_CHOLESTEROL = bhf("High cholesterol", "risk-factors/high-cholesterol");
const BHF_STATINS = bhf("Statins and what they do", "treatments/medicine/statins");
const BHF_REHAB = bhf("What is cardiac rehabilitation?", "support/cardiac-rehabilitation/what-is-cardiac-rehab");
const BHF_HEALTHY_EATING = bhf("Healthy eating", "support/healthy-living/healthy-eating");
const BHF_ACTIVE = bhf("Staying active", "support/healthy-living/staying-active");
const BHF_SMOKING = bhf("Smoking", "risk-factors/smoking");
const BHF_ANXIETY = bhf("How to deal with anxiety when you have a heart problem", "heart-matters-magazine/wellbeing/how-to-deal-with-anxiety");
const BHF_DEPRESSION = bhf("How to deal with depression when you have heart problems", "heart-matters-magazine/wellbeing/how-to-deal-with-depression-when-you-have-heart-problems");
const BHF_COPING = bhf("Coping with diagnosis", "heart-matters-magazine/wellbeing/mental-health/coping-with-diagnosis");

export const chdAnswers: LearnArticle[] = [
  {
    id: "chd-what-it-is",
    kicker: "Understanding",
    question: "What is coronary heart disease?",
    hook: "The arteries that feed the heart slowly fur up with fatty material. Less blood gets through, and the heart can struggle.",
    short: "Coronary heart disease is when the blood supply to your heart is reduced or blocked because of a build-up of fatty material inside your coronary arteries. This fatty material is called atheroma, or plaque. It cannot be cured, but it can be treated and managed so you can live well and reduce your risk of a heart attack.",
    sections: [
      {
        heading: "The heart's own arteries",
        paragraphs: [
          "The heart is a muscle about the size of your fist. It gets its own supply of blood from a network of blood vessels on the heart's surface called coronary arteries.",
          "Your coronary arteries supply blood to your heart. If they become narrow or blocked your heart may not get enough blood and oxygen to work properly.",
        ],
      },
      {
        heading: "How the arteries narrow",
        paragraphs: [
          "Over time, a fatty material called atheroma (sometimes known as plaque) can build up inside your coronary arteries. This process is called atherosclerosis.",
          "The build-up of atheroma makes the arteries narrower, restricting the flow of blood to the heart muscle. Eventually, your arteries may become so narrow that they cannot get enough blood to your heart.",
        ],
      },
      {
        heading: "From narrowing to a heart attack",
        paragraphs: [
          "If a piece of atheroma breaks off, a blood clot forms around this to try and repair the damage to the artery wall. This clot can block your coronary artery and cut off the supply of blood and oxygen to your heart muscle. This is known as a heart attack.",
        ],
      },
      {
        heading: "Common, and not only in men",
        paragraphs: [
          "Coronary heart disease is sometimes called ischaemic heart disease or coronary artery disease. Some people may also refer to it as heart disease.",
          "Some people think that coronary heart disease only affects men, but it affects women as well. There are around 800,000 women living with it in the UK.",
        ],
      },
      {
        heading: "What it can lead to, and what helps",
        paragraphs: [
          "Having coronary heart disease increases the chance of other heart and circulatory conditions, such as a heart attack, stroke, abnormal heart rhythms and heart failure.",
          "Coronary heart disease cannot be cured. But it can be treated and managed so you can live well and reduce your risk of a heart attack, stroke or other conditions.",
        ],
      },
    ],
    helps: [
      "Make lifestyle changes and take the medicine you're prescribed.",
      "Make small changes over time to build heart-healthy habits.",
      "Ask your doctor about the different treatment options, and what they mean for you.",
      "Call the British Heart Foundation Heart Helpline to speak to one of its cardiac nurses.",
    ],
    tryThisWeek: [
      "Take your medicine as prescribed.",
      "Make one small heart-healthy change.",
      "Call the Heart Helpline with questions.",
    ],
    ask: "How narrowed are my arteries, and what does that mean for me?",
    interactive: {
      kind: "timeline",
      title: "From a clear artery to a heart attack",
      steps: [
        { id: "clear", when: "To begin with", title: "A clear artery", points: ["Coronary arteries supply your heart with blood containing high levels of oxygen."] },
        { id: "build-up", when: "Over time", title: "Fatty build-up", points: ["A fatty material called atheroma (plaque) builds up inside the artery walls.", "This process is called atherosclerosis."] },
        { id: "narrow", when: "Eventually", title: "Narrowing", points: ["The arteries may become so narrow that they cannot get enough blood to your heart.", "A partly blocked artery can cause chest pain (angina)."] },
        { id: "clot", when: "Suddenly", title: "A clot", points: ["If a piece of atheroma breaks off, a blood clot forms around it.", "The clot can block the artery and cut off the blood supply: a heart attack."] },
      ],
    },
    sources: [BHF_BOOKLET, BHF_CHD, NHS_CHD, NHS_CHD_CAUSES, NHS_CHD_SYMPTOMS],
    quiz: {
      question: "What is the fatty material that builds up inside the coronary arteries called?",
      options: [{ text: "Atheroma, or plaque", right: true }, { text: "Haemoglobin" }, { text: "Cartilage" }],
      why: "This fatty material is called atheroma (or plaque).",
    },
  },
  {
    id: "chd-risk-factors",
    kicker: "Causes",
    question: "Why does coronary heart disease happen?",
    hook: "Smoking, high blood pressure, high cholesterol and diabetes all speed up the furring of the arteries. Many of them can be changed.",
    short: "Coronary heart disease is usually caused by a build-up of fatty deposits on the walls of the arteries around the heart. Your risk is significantly increased if you smoke, have high blood pressure or high cholesterol, do not exercise regularly or have diabetes. Many of these risk factors can be controlled, treated or modified.",
    sections: [
      {
        heading: "What a risk factor is",
        paragraphs: [
          "A risk factor is something that increases your chance of getting a condition. You may have more than one risk factor.",
          "The good news is many heart and circulatory diseases are caused by risk factors that can be controlled, treated or modified.",
        ],
      },
      {
        heading: "The main risk factors",
        paragraphs: [
          "Your risk of developing atherosclerosis is significantly increased if you smoke, have high blood pressure, have high cholesterol, have high levels of lipoprotein (a), do not exercise regularly or have diabetes.",
          "Other risk factors include being obese or overweight, having too much saturated fat, salt and sugar in your diet, a family history of coronary heart disease, and getting older.",
        ],
      },
      {
        heading: "Smoking, blood pressure and diabetes",
        paragraphs: [
          "Smoking is a major risk factor for coronary heart disease. Both nicotine and carbon monoxide put a strain on the heart by making it work faster, and they increase your risk of blood clots.",
          "High blood pressure puts a strain on your heart and can lead to coronary heart disease. A high blood sugar level may lead to diabetes, which can more than double your risk of developing coronary heart disease.",
        ],
      },
      {
        heading: "Things you cannot change",
        paragraphs: [
          "Men have a higher risk of developing coronary heart disease from a younger age. Before the menopause, women have a lower risk, but during and after the menopause, women's risk increases.",
          "The level of lipoprotein (a) in your blood is inherited from your parents. It's not routinely measured, but screening is recommended for people with a moderate or high risk of developing cardiovascular disease.",
          "If you're transgender, you may have a higher risk of coronary heart disease. If you're worried about your risk, speak to your GP.",
        ],
      },
      {
        heading: "Lowering your risk",
        paragraphs: [
          "You can reduce your risk by eating a healthy, balanced diet, being physically active, giving up smoking and controlling your blood cholesterol and sugar levels.",
          "If you have high blood pressure, ask a GP to check your blood pressure regularly. If you have diabetes, it's important to have your blood pressure, cholesterol and blood sugar levels checked regularly.",
        ],
      },
    ],
    helps: [
      "If you smoke, giving up will reduce your risk of developing coronary heart disease.",
      "If you have high blood pressure, ask a GP to check your blood pressure regularly.",
      "If you have diabetes, have your blood pressure, cholesterol and blood sugar levels checked regularly.",
      "If you're worried about your risk, speak to your GP.",
      "If you're between 40 and 74 and live in England, get a free health check to assess your risk.",
    ],
    tryThisWeek: [
      "Make a plan to stop smoking.",
      "Ask for regular blood pressure checks.",
      "Ask about a free health check.",
    ],
    ask: "Which of my risk factors would make the biggest difference to change?",
    interactive: {
      kind: "risk-check",
      title: "What raises the risk of coronary heart disease?",
      intro: "Tick any that apply to you. Many can be treated or changed; some cannot.",
      items: [
        { id: "smoking", label: "Smoking", note: "Smoking is a major risk factor for coronary heart disease. If you smoke, giving up will reduce your risk.", changeable: true },
        { id: "bp", label: "High blood pressure", note: "It puts a strain on your heart. A healthy diet, regular exercise and, if needed, medicine can keep it under control.", changeable: true },
        { id: "cholesterol", label: "High cholesterol", note: "Too much cholesterol in the blood can lead to coronary heart disease.", changeable: true },
        { id: "diabetes", label: "Diabetes", note: "Diabetes can more than double your risk. Being active and controlling your weight can help lower it.", changeable: true },
        { id: "inactive", label: "Not exercising regularly", note: "If you're inactive, fatty deposits can build up in your arteries.", changeable: true },
        { id: "weight", label: "Overweight or obesity", note: "Being obese or overweight is a risk factor for atherosclerosis.", changeable: true },
        { id: "family", label: "Coronary heart disease in the family", note: "A family history of coronary heart disease raises your risk.", changeable: false },
        { id: "age", label: "Getting older", note: "Getting older is one of the risk factors for coronary heart disease.", changeable: false },
        { id: "lpa", label: "High lipoprotein (a)", note: "Your LP(a) level is inherited. Screening is recommended if your risk is moderate or high.", changeable: false },
      ],
    },
    sources: [NHS_CHD_CAUSES, BHF_BOOKLET, BHF_CHD, BHF_RISK_FACTORS, NHS_CHD_PREVENTION, NHS_CHD],
    quiz: {
      question: "How much can diabetes raise the risk of coronary heart disease?",
      options: [{ text: "It can more than double it", right: true }, { text: "It makes no difference" }, { text: "It halves it" }],
      why: "A high blood sugar level may lead to diabetes, which can more than double your risk of developing CHD.",
    },
  },
  {
    id: "chd-tests",
    kicker: "Tests",
    question: "Which tests show coronary heart disease?",
    hook: "A risk check first, then tests that look at the heart's rhythm, its pumping and the arteries themselves.",
    short: "Coronary heart disease is usually diagnosed after a risk assessment and some further tests. A GP will ask about your medical and family history, check your blood pressure and do a blood test for your cholesterol. You may then have tests such as an ECG, an echocardiogram, a CT scan or a coronary angiogram.",
    sections: [
      {
        heading: "A risk assessment first",
        paragraphs: [
          "If a GP thinks you may be at risk of coronary heart disease, they may do a risk assessment. This may be carried out as part of an NHS Health Check.",
          "The GP will ask about your medical and family history, check your blood pressure and do a blood test to assess your cholesterol level. They will also ask about your lifestyle, how much exercise you do and whether you smoke.",
          "If you're between 40 and 74 years old and live in England, you can get a free health check to assess your risk of coronary heart disease. The rest of the UK also have similar schemes.",
        ],
      },
      {
        heading: "The ECG",
        paragraphs: [
          "An electrocardiogram, or ECG, is a simple and useful test which records the rhythm, rate and electrical activity of your heart. It is usually one of the first heart tests you'll have.",
          "Ten small sticky patches called electrodes are put on your arms, legs and chest. The whole test takes a few minutes and is completely painless.",
          "An exercise ECG is recorded while you're walking on a treadmill or cycling on an exercise bike. The aim is to see how your heart works when you're more active.",
        ],
      },
      {
        heading: "The echo and CT scans",
        paragraphs: [
          "An echocardiogram, or echo, is a scan of the heart that uses sound waves to build up a picture of your heart. It gives information on how well your heart is pumping.",
          "A CT coronary angiogram uses a dye and CT scan images to look at the heart, its arteries and any fatty deposits within them. It is non-invasive, so there are fewer potential complications such as bleeding or bruising.",
        ],
      },
      {
        heading: "The coronary angiogram",
        paragraphs: [
          "An angiogram helps the doctor spot any narrow areas or blockages inside the coronary arteries. A coronary angiogram is still the gold standard for diagnosing coronary heart disease.",
          "A thin, flexible tube is passed into an artery in your wrist or groin and guided up to your heart. A dye is passed through the tube and X-ray images are taken. The test lasts around 30 minutes, and you'll be awake throughout.",
          "It's very common to feel a hot, flushing sensation as the dye enters your bloodstream. This is completely normal and only lasts for a few seconds.",
        ],
      },
      {
        heading: "How people find out",
        paragraphs: [
          "Some people find out they have coronary heart disease after having a heart attack. Other people find out after a health check or tests for symptoms, like angina.",
          "These are common tests, but if you're worried or have any questions, speak to your healthcare professional.",
        ],
      },
    ],
    helps: [
      "Speak to your healthcare professional if you have any questions about these tests.",
      "If you're between 40 and 74 and live in England, speak to your GP to book a health check.",
      "Let the nurse know if you have diabetes before an angiogram, so they can plan your care.",
      "If you feel very anxious about an angiogram, ask for a mild sedative to help you relax.",
      "Drink plenty of fluid after an angiogram to help flush the dye out of your system.",
    ],
    tryThisWeek: [
      "Ask your team about your tests.",
      "Book a health check if you are 40 to 74.",
      "Mention diabetes before an angiogram.",
    ],
    ask: "Which tests do I need, and what will they show?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, turned over",
      intro: "Tap a card to see what each test does.",
      cards: [
        { id: "bloods", front: "Cholesterol blood test", when: "As part of a risk assessment", back: "A sample taken with a needle or a finger prick, to assess your cholesterol level." },
        { id: "ecg", front: "Electrocardiogram (ECG)", when: "Usually one of the first tests", back: "Records the rhythm, rate and electrical activity of your heart. It takes a few minutes and is painless." },
        { id: "exercise-ecg", front: "Exercise ECG", when: "To see your heart when you're active", back: "An ECG recorded while you walk on a treadmill or cycle on an exercise bike." },
        { id: "echo", front: "Echocardiogram (echo)", when: "To see how well the heart pumps", back: "A scan that uses sound waves to build up a picture of your heart." },
        { id: "ct", front: "CT coronary angiogram", when: "A non-invasive look at the arteries", back: "A dye and CT scan images show the heart, its arteries and any fatty deposits." },
        { id: "angiogram", front: "Coronary angiogram", when: "The gold standard for diagnosis", back: "A thin tube and a dye show any narrow areas or blockages on X-ray images." },
      ],
    },
    sources: [NHS_CHD_DIAGNOSIS, BHF_BOOKLET, BHF_ECG, BHF_ANGIOGRAM, BHF_CT, BHF_ECHO],
    quiz: {
      question: "Which test is still the gold standard for diagnosing coronary heart disease?",
      options: [{ text: "A coronary angiogram", right: true }, { text: "A chest X-ray" }, { text: "A blood pressure check" }],
      why: "Coronary angiogram is still the gold standard for diagnosing coronary heart disease.",
    },
  },
  {
    id: "chd-symptoms",
    kicker: "Symptoms",
    question: "What are the warning signs, and when is it an emergency?",
    hook: "Chest pain on effort and breathlessness are the most common. Some people have no symptoms at all until a heart attack.",
    short: "The most common symptoms of coronary heart disease are chest pain (angina) and breathlessness. Some people do not have any symptoms before they're diagnosed, and some only find out after a heart attack. Call 999 if you get sudden chest pain that does not go away, or pain that spreads to your arms, neck, jaw, back or stomach.",
    sections: [
      {
        heading: "The most common symptoms",
        paragraphs: [
          "The most common symptoms of coronary heart disease are chest pain (angina) and breathlessness. You may also have pain in your neck, shoulders, jaw or arms, feel faint or feel sick.",
          "Many people with coronary heart disease do not have any symptoms. Some people may only find out after having a heart attack.",
        ],
      },
      {
        heading: "Angina",
        paragraphs: [
          "If your coronary arteries become partly blocked, it can cause chest pain (angina). This can be a mild, uncomfortable feeling similar to indigestion.",
          "A severe angina attack can cause a painful feeling of heaviness or tightness, usually in the centre of the chest, which may spread to the arms, neck, jaw, back or stomach.",
          "Angina is often triggered by physical activity or stressful situations. Symptoms usually pass in less than 10 minutes, and can be relieved by resting or using a nitrate tablet or spray.",
        ],
      },
      {
        heading: "If you have angina and get chest pain",
        paragraphs: [
          "Stop what you're doing and rest. Use any medicine you've been prescribed, which is usually glyceryl trinitrate (GTN). Take another dose after 5 minutes if the first dose does not help.",
          "If you still have symptoms 5 minutes after taking the second dose, call 999 for an ambulance.",
        ],
      },
      {
        heading: "Signs of a heart attack",
        paragraphs: [
          "The pain of a heart attack is usually like that of angina, but it's often more severe and lasts longer. You may also feel lightheaded, sweaty, sick or breathless.",
          "A heart attack can happen at any time, including while you're resting. If heart pains last longer than 15 minutes, it may be the start of a heart attack.",
          "A heart attack can sometimes happen without any symptoms. This is more common in older people and people with diabetes.",
        ],
      },
      {
        heading: "When to call 999, and when to call 111",
        paragraphs: [
          "Call 999 if you get sudden pain or discomfort in your chest that does not go away, pain that spreads to your arms, neck, jaw, shoulder, stomach or back, or chest pain with feeling sweaty, sick, light-headed or short of breath. You could be having a heart attack. If you're unsure, call 999 for an ambulance.",
          "Do not drive yourself to A&E. The person you speak to at 999 will give you advice about what to do. While you wait, sit down, stay calm, and take 300mg aspirin if you have it and you're not allergic to it.",
          "Get help from NHS 111 if you have chest pain or other symptoms of angina that come and go.",
        ],
      },
    ],
    helps: [
      "Call 999 for an ambulance if chest pain does not go away, or spreads to your arms, neck, jaw, back or stomach.",
      "If you're unsure whether it's a heart attack, call 999 for an ambulance.",
      "While you wait for the ambulance, sit down, stay calm and take 300mg aspirin if you have it and you're not allergic to it.",
      "Get help from NHS 111 if you have chest pain or other symptoms of angina that come and go.",
      "Always have your angina medicine with you.",
    ],
    tryThisWeek: [
      "Learn when to call 999.",
      "Know when to use NHS 111.",
      "Keep your angina medicine with you.",
    ],
    ask: "What should I do if I get chest pain?",
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        {
          id: "second-dose",
          situation: "You have angina. You've rested and used your GTN twice, and five minutes after the second dose the pain is still there.",
          options: [{ text: "Call 999 for an ambulance", best: true }, { text: "Wait another half an hour" }, { text: "Drive yourself to A&E" }],
          why: "If you still have symptoms 5 minutes after taking the 2nd dose, call 999 for an ambulance. Do not drive yourself to A&E.",
        },
        {
          id: "spreading",
          situation: "Sudden chest pain spreads to your arm and jaw, and you feel sweaty and sick.",
          options: [{ text: "Call 999 straight away", best: true }, { text: "Lie down and see if it passes" }],
          why: "You could be having a heart attack. Call 999 straight away as you need immediate treatment in hospital.",
        },
        {
          id: "come-go",
          situation: "You keep getting chest pains that come and go, and nobody has checked them yet.",
          options: [{ text: "Get help from NHS 111", best: true }, { text: "Ignore them" }],
          why: "Get help from NHS 111 if you have chest pain or other symptoms of angina that come and go.",
        },
      ],
    },
    sources: [NHS_CHD_SYMPTOMS, BHF_BOOKLET, NHS_ANGINA, NHS_HEART_ATTACK, BHF_CHD, NHS_CHD],
    quiz: {
      question: "Does everyone with coronary heart disease have symptoms before they are diagnosed?",
      options: [{ text: "No, many people have none", right: true }, { text: "Yes, everyone has chest pain" }, { text: "Only people under 40 do" }],
      why: "Many people with coronary heart disease do not have any symptoms. Some people may only find out after having a heart attack.",
    },
  },
  {
    id: "chd-medicines",
    kicker: "Treatment",
    question: "What do statins, aspirin and the other heart medicines do?",
    hook: "Most of them do one of four jobs: lower blood pressure, widen the arteries, prevent clots or lower cholesterol.",
    short: "Many different medicines are used to treat coronary heart disease. They can lower your blood pressure, widen your arteries, prevent blood clots or lower your cholesterol, and you may take more than one. Heart medicines should not be stopped suddenly without the advice of a doctor.",
    sections: [
      {
        heading: "What the medicines do",
        paragraphs: [
          "Many different medicines are used to treat coronary heart disease. Medicine can lower your blood pressure, widen your arteries, prevent blood clots and lower your cholesterol levels.",
          "Some heart medicines have side effects, so it may take a while to find one that works for you. A GP or specialist will discuss the various options with you.",
        ],
      },
      {
        heading: "Preventing clots",
        paragraphs: [
          "Blood thinners can help reduce the risk of a heart attack by preventing your blood clotting. Common ones include low-dose aspirin, clopidogrel, rivaroxaban, ticagrelor and prasugrel.",
          "Low-dose aspirin comes as 75mg tablets, and you usually take 1 tablet, once a day. If you're taking it to prevent a heart attack or stroke, you'll usually need to take it for a long time, sometimes for life.",
          "Do not take aspirin to prevent a heart attack if you have not been diagnosed with coronary heart disease or have not been advised to take it by a doctor.",
        ],
      },
      {
        heading: "Statins",
        paragraphs: [
          "Statins lower your cholesterol levels and protect your arteries by reducing the amount of fatty material that can build up. Most people start with atorvastatin.",
          "You'll usually take statins long term. If you stop taking statins your cholesterol levels may be affected, so talk to a doctor or pharmacist before stopping.",
        ],
      },
      {
        heading: "The other medicines",
        paragraphs: [
          "Beta blockers make your heart beat slower and with less force. Nitrates widen your arteries, and can cause mild side effects such as headaches, dizziness and flushed skin.",
          "ACE inhibitors and angiotensin-2 receptor blockers (ARBs) lower your blood pressure. If you take ACE inhibitors, regular blood tests will be needed to check that your kidneys are working properly.",
          "Calcium channel blockers relax your arteries and lower your blood pressure. Diuretics, or water pills, help remove excess water and salt from your body.",
        ],
      },
      {
        heading: "Side effects, and taking them every day",
        paragraphs: [
          "Most people taking medicine for coronary heart disease do not experience any side effects. If you're struggling with side effects, it's important you do not stop taking your medicine before speaking to a healthcare professional.",
          "Heart medicines should not be stopped suddenly without the advice of a doctor, as there's a risk this may make your symptoms worse.",
        ],
      },
    ],
    helps: [
      "Get into a routine, and give your body time to get used to the medicine.",
      "Ask your pharmacist for a tablet organiser (dosette) box.",
      "Speak to your pharmacist or GP before taking other medicines or supplements.",
      "If side effects are a struggle, speak to your GP or a pharmacist before stopping anything.",
      "Plan your medicine if you go away.",
    ],
    tryThisWeek: [
      "Build a daily medicine routine.",
      "Ask your pharmacist for a dosette box.",
      "Check before taking other medicines.",
    ],
    ask: "What is each of my medicines for, and how long will I need it?",
    interactive: {
      kind: "flip-cards",
      title: "Your medicines, turned over",
      intro: "Tap a card to see what each kind of medicine does.",
      cards: [
        { id: "aspirin", front: "Low-dose aspirin", when: "Usually 1 tablet, once a day", back: "A blood thinner that helps prevent blood clots and reduces the risk of a heart attack." },
        { id: "antiplatelet", front: "Antiplatelet medicines", when: "Such as clopidogrel or ticagrelor", back: "Help prevent blood clots." },
        { id: "statin", front: "Statins", when: "Usually taken long term", back: "Lower your cholesterol and protect your arteries by reducing the fatty material that can build up." },
        { id: "beta", front: "Beta blockers", when: "Often used for angina", back: "Make your heart beat slower and with less force." },
        { id: "nitrate", front: "Nitrates", when: "Tablets, sprays or skin patches", back: "Widen your arteries, letting more blood pass through. They can relieve heart pain." },
        { id: "ace", front: "ACE inhibitors and ARBs", when: "Commonly used for blood pressure", back: "Lower your blood pressure. ACE inhibitors need regular blood tests to check your kidneys." },
        { id: "ccb", front: "Calcium channel blockers", when: "Such as amlodipine", back: "Relax your arteries and lower your blood pressure." },
        { id: "diuretic", front: "Diuretics (water pills)", when: "To remove excess water", back: "Help remove excess water and salt from your body." },
      ],
    },
    sources: [NHS_CHD_TREATMENT, BHF_BOOKLET, NHS_ASPIRIN, NHS_STATINS],
    quiz: {
      question: "What should you do if a heart medicine's side effects are a struggle?",
      options: [{ text: "Speak to a healthcare professional before stopping", right: true }, { text: "Stop it straight away" }, { text: "Halve the dose yourself" }],
      why: "If you're struggling with the side effects of your medicine, it's important you do not stop taking it before speaking to a healthcare professional.",
    },
  },
  {
    id: "chd-stents-bypass",
    kicker: "Treatment",
    question: "What happens with a stent or a heart bypass?",
    hook: "A stent props a narrowed artery open from the inside. A bypass builds a new route for blood around the blockage.",
    short: "If your arteries are narrow or your symptoms cannot be controlled with medicines, a procedure may be needed to open up or bypass blocked arteries. A coronary angioplasty uses a tiny balloon, and usually a stent, to hold the artery open. In bypass surgery, a blood vessel from another part of the body carries blood around the narrowed section.",
    sections: [
      {
        heading: "When a procedure is needed",
        paragraphs: [
          "If your blood vessels are narrow as the result of a build-up of atheroma, or if your symptoms cannot be controlled using medicines, procedures or surgery may be needed to open up or bypass blocked arteries.",
          "A coronary angiogram will determine if you're suitable for treatment. Your doctor will talk to you about the best option for you.",
        ],
      },
      {
        heading: "Angioplasty and stents",
        paragraphs: [
          "A coronary angioplasty with stenting is a procedure to widen a blocked coronary artery. It's also known as percutaneous coronary intervention, or PCI.",
          "A narrow flexible tube is put into your wrist or groin and pushed up to the coronary artery. A small balloon at the end of the tube is blown up to widen the narrowed part of your artery.",
          "Most of the time a small metal mesh tube called a stent is put in. When the balloon and tube are removed, the stent stays in place, acting like a scaffold to keep your artery open.",
        ],
      },
      {
        heading: "After a stent",
        paragraphs: [
          "An angioplasty normally takes between 30 minutes and 2 hours. Most people can go home the same day or the next day.",
          "You'll be given medicines to help reduce the risk of blood clots forming in and around the stent. They may include aspirin and anti-platelet medicine such as clopidogrel, ticagrelor or prasugrel.",
          "Sometimes the artery can become narrowed again, causing angina symptoms. But advances in stent technology mean that the risk of this happening is getting lower.",
        ],
      },
      {
        heading: "Bypass surgery",
        paragraphs: [
          "In coronary artery bypass graft surgery, a vein or artery is taken from another part of the body, usually from the leg, arm or chest. This new blood vessel is called a graft.",
          "One end of the graft is attached to the aorta, the main artery leaving the heart. The other end is attached to the coronary artery below the narrow or blocked section, to improve blood flow.",
          "You might be recommended surgery if your arteries cannot be treated with angioplasty or stenting, or if multiple arteries are affected. The surgery usually takes four to five hours.",
        ],
      },
      {
        heading: "Recovery and driving",
        paragraphs: [
          "Most people spend about a week in hospital after a bypass. It usually takes 2 to 3 months to fully recover, and you should be able to get back to most of your normal activities after about 6 weeks.",
          "With a car or motorcycle licence, you do not need to tell DVLA about an angioplasty or a coronary artery bypass. You should stop driving for 1 week if you had angioplasty, it was successful and you do not need any more surgery. After a bypass, you should stop driving for at least 1 month and only restart driving when your doctor tells you it's safe.",
          "With a bus, coach or lorry licence, the government's driving pages say to tell DVLA and stop driving for 6 weeks after an angioplasty. After a bypass, they say to tell DVLA and stop driving for at least 3 months, and only restart driving when your doctor tells you it's safe.",
        ],
      },
    ],
    helps: [
      "Ask your doctor about the benefits and possible risks of having an angioplasty.",
      "Arrange for someone to look after you during your recovery.",
      "Keep taking any prescribed medicine after a stent, such as aspirin and anti-platelet drugs.",
      "If you get chest pain after a stent, stop, rest and take your GTN if prescribed. If the pain has not gone five minutes after the second dose, call 999 immediately.",
      "After a bypass, start being active, such as going for walks, as soon as you feel well enough.",
    ],
    tryThisWeek: [
      "Ask about the benefits and risks.",
      "Arrange help for your recovery.",
      "Keep taking your stent medicines.",
    ],
    ask: "Would a stent or a bypass help me, and what would recovery look like?",
    interactive: {
      kind: "timeline",
      title: "Recovering from a heart bypass",
      steps: [
        { id: "day-1", when: "After one day", title: "Sitting in a chair", points: ["You'll usually be moved from intensive care to a ward after 1 or 2 days.", "You should generally be able to sit in a chair after one day."] },
        { id: "days", when: "Days 3 to 6", title: "Walking, then stairs", points: ["Walk after 3 days and use stairs after 5 or 6 days."] },
        { id: "home", when: "About a week", title: "Going home", points: ["Most people spend about a week in hospital.", "Try to arrange for someone to help look after you for the first few days."] },
        { id: "weeks", when: "About 6 weeks", title: "Most normal activities", points: ["You should be able to get back to most of your normal activities.", "If you have a heavy manual job, you may need to rest for longer."] },
        { id: "months", when: "2 to 3 months", title: "Fully recovered", points: ["It usually takes 2 to 3 months to fully recover.", "Do not do any heavy lifting for 3 months."] },
      ],
    },
    sources: [NHS_CHD_TREATMENT, BHF_BOOKLET, BHF_ANGIOPLASTY, BHF_BYPASS, NHS_CABG_RECOVERY, GOV_ANGIOPLASTY_DRIVING, GOV_BYPASS_DRIVING],
    quiz: {
      question: "What does a stent do?",
      options: [{ text: "Acts like a scaffold to keep the artery open", right: true }, { text: "Dissolves cholesterol in the blood" }, { text: "Replaces the whole artery" }],
      why: "The stent stays in place, acting like a scaffold to keep your artery open.",
    },
  },
  {
    id: "chd-cholesterol",
    kicker: "Cholesterol",
    question: "What should my cholesterol be, and what lowers it?",
    hook: "High cholesterol has no symptoms. A blood test shows the numbers; food, activity and often a statin bring them down.",
    short: "Cholesterol is a fatty substance in your blood, and too much of it can narrow your arteries. Most people with high cholesterol have no symptoms, so a blood test is the way to find out. Eating less saturated fat, being more active, stopping smoking and cutting down on alcohol can help, and statins are the most common medicine.",
    sections: [
      {
        heading: "Good and bad cholesterol",
        paragraphs: [
          "Cholesterol is a fatty substance in your blood that's produced naturally in your liver. If you have too much cholesterol in your blood, it can narrow your arteries and cause fatty material to build up.",
          "HDL, or good cholesterol, takes cholesterol you do not need back to your liver. Non-HDL, or bad cholesterol, takes cholesterol from your liver to cells around your body. If you have too much, it gets stuck to the walls of your arteries.",
        ],
      },
      {
        heading: "The numbers",
        paragraphs: [
          "A cholesterol test can measure your total cholesterol, your HDL and your non-HDL cholesterol. When you get your result, you may just be told your total cholesterol.",
          "As a guide for healthy adults, total cholesterol should be below 5mmol/L and non-HDL cholesterol below 4mmol/L.",
          "If you've had a heart attack or a stroke, your recommended levels may be lower. Talk to your doctor about what your cholesterol levels should be.",
        ],
      },
      {
        heading: "Hidden, so get it checked",
        paragraphs: [
          "Most people with high cholesterol have no symptoms. It's a hidden risk factor, so it's important to get your cholesterol levels checked by having a blood test.",
          "If you have high cholesterol, your GP should invite you for a blood test every year to check your levels and how you're getting on with any medicines or lifestyle changes.",
        ],
      },
      {
        heading: "What lowers it",
        paragraphs: [
          "Try to cut down on fatty food, especially food that contains saturated fat, like meat pies, sausages, butter, cream, cakes and biscuits. Eat more oily fish, olive and rapeseed oil, wholegrains, nuts, seeds, fruit and vegetables.",
          "Aim to do at least 150 minutes of moderate intensity exercise a week. Stop smoking, and avoid drinking more than 14 units of alcohol a week on a regular basis.",
        ],
      },
      {
        heading: "Statins and other medicines",
        paragraphs: [
          "Statins are the most common medicine for high cholesterol. You take a tablet once a day, and you usually need to take them for life.",
          "Studies show that low-dose statins can lower bad (LDL) cholesterol by up to 30 per cent, and high-dose statins can lower it by more than 40 per cent.",
          "Other medicines may be used if statins do not work or you cannot take statins. These include tablets such as ezetimibe and injections such as inclisiran.",
        ],
      },
    ],
    helps: [
      "Get your cholesterol checked with a blood test at your GP practice, or at some pharmacies with a finger-prick test.",
      "Swap butter for olive spread, or meat for fish.",
      "Commit to walking every day at lunchtime, or swap a short drive for a walk or cycle.",
      "Swap one drink for a non-alcoholic version, or a pint for a half pint of beer.",
      "Talk to your doctor about what your cholesterol levels should be.",
    ],
    tryThisWeek: [
      "Book a cholesterol check.",
      "Swap butter for olive spread.",
      "Walk at lunchtime.",
    ],
    ask: "What should my cholesterol be, and do I need a statin?",
    interactive: {
      kind: "flip-cards",
      title: "Your cholesterol result, turned over",
      intro: "Tap a card to see what each number means.",
      cards: [
        { id: "total", front: "Total cholesterol", when: "Healthy guide: below 5mmol/L", back: "The overall amount of cholesterol in your blood. You may just be told this number." },
        { id: "hdl", front: "HDL (good cholesterol)", when: "Takes cholesterol back to the liver", back: "Takes cholesterol you do not need back to your liver, where it's broken down." },
        { id: "non-hdl", front: "Non-HDL (bad cholesterol)", when: "Healthy guide: below 4mmol/L", back: "Takes cholesterol to cells around your body. Too much gets stuck to the walls of your arteries." },
        { id: "trig", front: "Triglycerides", when: "Checked with your cholesterol", back: "Another fat in your blood. Too much can narrow your arteries." },
        { id: "statin", front: "Statins", when: "The most common medicine", back: "A tablet once a day that reduces the amount of cholesterol your body makes." },
      ],
    },
    sources: [BHF_CHOLESTEROL, NHS_CHOL_LEVELS, NHS_CHOL_LOWER, BHF_STATINS, NHS_CHOL_MEDS],
    quiz: {
      question: "How do most people find out they have high cholesterol?",
      options: [{ text: "From a blood test", right: true }, { text: "From chest pain" }, { text: "From a skin rash" }],
      why: "Most people with high cholesterol have no symptoms. It's important to get your cholesterol levels checked by having a blood test.",
    },
  },
  {
    id: "chd-cardiac-rehab",
    kicker: "Recovery",
    question: "What is cardiac rehabilitation, and how do I get it?",
    hook: "A programme of exercise, education and support after a heart attack, a stent or surgery. It is as important as your medicines.",
    short: "Cardiac rehabilitation is a programme of exercise and education sessions to help you recover and get back to as full a life as possible. After an angioplasty or coronary bypass surgery you should be offered it. Programmes often run in weekly sessions for 6 to 12 weeks, in a group, online or at home.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Cardiac rehab is a programme of exercise and education sessions. It can be done online, in person or a mix of both.",
          "It is an individualised exercise, education and support programme built around your personal circumstances and needs. No matter your age, gender, ethnicity or level of fitness, you can benefit from cardiac rehab.",
        ],
      },
      {
        heading: "Who it is for, and how to get it",
        paragraphs: [
          "After an angioplasty or coronary bypass surgery you should be offered cardiac rehab. A member of the cardiac rehab team may visit you in hospital, and after you leave they may visit you at home or call you.",
          "You do not need a referral from your cardiologist. You can contact your local cardiac team, call the British Heart Foundation Heart Helpline on 0808 802 1234 for help finding your nearest programme, or contact your GP surgery.",
        ],
      },
      {
        heading: "What happens",
        paragraphs: [
          "Before starting, you'll be invited to a discussion with your local cardiac rehab team, sometimes called an assessment. You can talk about what is important to you and set goals together.",
          "Exercise sessions are tailored to you. They generally have a warm-up, a main exercise section at a level that is safe for you, and a cool-down.",
          "Information sessions cover topics such as eating healthily, learning about your medicines, the importance of stopping smoking and relaxation techniques.",
        ],
      },
      {
        heading: "How long it lasts",
        paragraphs: [
          "Cardiac rehab programmes are available locally, often in weekly sessions that last 6 to 12 weeks. You may be able to choose between group classes, online classes or a home programme.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Research has found that people who attend cardiac rehab have a lower risk of having another heart attack and being admitted to hospital. It also had a positive impact on their wellbeing and quality of life.",
          "Cardiac rehab is a vital part of your recovery, so consider it as important as taking your medicines. It's also a good opportunity to meet other people going through a similar situation.",
        ],
      },
    ],
    helps: [
      "If you have not been offered cardiac rehab, speak to your GP.",
      "Call the Heart Helpline on 0808 802 1234 for help finding your nearest programme.",
      "Talk to the team about what is important to you, and set goals together.",
      "Feeling nervous about exercising is normal; the cardiac rehab team will support and guide you.",
      "Use the sessions to ask any questions you may have.",
    ],
    tryThisWeek: [
      "Ask your GP about cardiac rehab.",
      "Find your nearest programme.",
      "Set one goal with the team.",
    ],
    ask: "Can I be referred to cardiac rehabilitation?",
    interactive: {
      kind: "timeline",
      title: "Your cardiac rehab journey",
      steps: [
        { id: "hospital", when: "In hospital", title: "Meeting the team", points: ["A member of the cardiac rehab team may visit you with information about your condition or procedure."] },
        { id: "home", when: "After you leave", title: "A visit or a call", points: ["They may visit you at home or call you to check on your progress.", "You do not need a referral from your cardiologist."] },
        { id: "assessment", when: "Before you start", title: "Your assessment", points: ["A discussion with the team about what is important to you.", "You set short and longer-term goals together."] },
        { id: "sessions", when: "Often 6 to 12 weeks", title: "Weekly sessions", points: ["Exercise with a warm-up, a main section and a cool-down.", "Information on eating well, medicines, stopping smoking and relaxation."] },
      ],
    },
    sources: [NHS_CHD_RECOVERY, BHF_REHAB, BHF_BOOKLET],
    quiz: {
      question: "Do you need a referral from your cardiologist to get cardiac rehab?",
      options: [{ text: "No, you can contact your local team or GP surgery", right: true }, { text: "Yes, always" }, { text: "Only if you are under 65" }],
      why: "You do not need a referral from your cardiologist.",
    },
  },
  {
    id: "chd-eating",
    kicker: "Food",
    question: "What should I eat for my heart?",
    hook: "More fruit, vegetables, fish and wholegrains. Less salt, sugar and saturated fat. Small swaps add up.",
    short: "A low-fat, high-fibre diet with plenty of fruit, vegetables and wholegrains is recommended. Cutting back on food and drink that's high in saturated fat, sugar and salt can help you manage coronary heart disease. Adults should eat less than 6g of salt each day, about one level teaspoon.",
    sections: [
      {
        heading: "The overall pattern",
        paragraphs: [
          "Eating more fruit and vegetables and cutting back on food and drink that's high in saturated fat, sugar and salt can help you to manage coronary heart disease.",
          "A low-fat, high-fibre diet is recommended, which should include plenty of fresh fruit and vegetables (5 portions a day) and whole grains.",
          "Healthy eating isn't about cutting out individual foods. It's thinking about your whole diet and eating a variety of foods in the right amounts.",
        ],
      },
      {
        heading: "Fats",
        paragraphs: [
          "Avoid food containing saturated fats, because these will increase the levels of bad cholesterol in your blood. Foods high in saturated fat include meat pies, sausages, fatty cuts of meat, butter, ghee, lard, cream, hard cheese, cakes and biscuits.",
          "A balanced diet should still include unsaturated fats. These are found in oily fish, avocados, nuts and seeds, and sunflower, rapeseed, olive and vegetable oils.",
        ],
      },
      {
        heading: "Salt",
        paragraphs: [
          "Cutting down on salt is an important change you can make to look after your heart and lower your blood pressure. Adults should eat less than 6g of salt each day. That's about one level teaspoon.",
          "Remove salt from your table, add less when you're cooking, and use herbs and spices for flavour instead.",
        ],
      },
      {
        heading: "Sugar",
        paragraphs: [
          "Adults should try to have less than 30g of sugar a day. That's about seven cubes of sugar, or around seven teaspoons.",
          "Too much sugar can increase your chances of developing diabetes, which is proven to significantly increase your chances of developing coronary heart disease.",
        ],
      },
      {
        heading: "Simple swaps",
        paragraphs: [
          "Swap butter for spreads made from olive, rapeseed or sunflower oil. Eat wholemeal instead of white bread, and more fish and less red meat.",
          "Aim to have two portions of fish a week, one of which is oily. Bake or grill your food instead of frying, and try to eat foods with mostly green and amber labels.",
        ],
      },
    ],
    helps: [
      "Swap butter for spreads made from olive, rapeseed or sunflower oil.",
      "Remove salt from your table and add less when you're cooking.",
      "Have sugar-free drinks instead of sugar-sweetened fizzy drinks and squash.",
      "Aim for two portions of fish a week, one of which is oily.",
      "Look for foods with mostly green and amber labels.",
    ],
    tryThisWeek: [
      "Swap butter for an oil-based spread.",
      "Take the salt off the table.",
      "Have one oily fish meal.",
    ],
    ask: "Is there one change to my eating that would help my heart most?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "toast",
          situation: "You're making toast in the morning.",
          options: [{ text: "Wholemeal bread with an olive oil spread", best: true }, { text: "White bread with butter" }],
          why: "Swap butter for spreads made from olive, rapeseed or sunflower oil. Eat wholemeal instead of white bread.",
        },
        {
          id: "snack",
          situation: "You fancy a snack with your drink.",
          options: [{ text: "A small handful of unsalted nuts", best: true }, { text: "A bag of crisps" }],
          why: "Swap crisps for a small handful of unsalted nuts or popcorn.",
        },
        {
          id: "cooking",
          situation: "You're cooking chicken for dinner.",
          options: [{ text: "Bake or grill it", best: true }, { text: "Fry it" }],
          why: "Bake or grill your food instead of frying.",
        },
        {
          id: "labels",
          situation: "You're choosing between two ready meals.",
          options: [{ text: "The one with mostly green and amber labels", best: true }, { text: "The one with red labels" }],
          why: "A good rule is to try to eat foods with mostly green and amber labels.",
        },
      ],
    },
    sources: [NHS_CHD_PREVENTION, BHF_BOOKLET, BHF_HEALTHY_EATING],
    quiz: {
      question: "About how much salt should adults have each day, at most?",
      options: [{ text: "6g, about one level teaspoon", right: true }, { text: "20g, about four teaspoons" }, { text: "There is no limit" }],
      why: "Adults should eat less than 6g of salt each day. That's about one level teaspoon.",
    },
  },
  {
    id: "chd-activity",
    kicker: "Staying active",
    question: "How can I stay active safely with coronary heart disease?",
    hook: "Most people with a heart condition can exercise and feel the benefit. Start low and slow, and know when to stop.",
    short: "Most people with a heart problem can still exercise and feel the benefits of staying active. Adults should try to do 150 minutes a week, around 20 to 30 minutes a day, building up slowly. Speak to your doctor before starting for the first time, and stop and rest if you get symptoms.",
    sections: [
      {
        heading: "Why it helps",
        paragraphs: [
          "Regular exercise will make your heart and blood circulatory system more efficient, lower your cholesterol level, and keep your blood pressure at a healthy level.",
          "Exercise can also help you maintain a healthy weight, give you more energy, reduce anxiety, improve your sleep and boost your mood.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "To look after your heart, aim to be active every day. Adults should try to do 150 minutes a week, around 20 to 30 minutes of exercise a day.",
          "Moderate exercise is when you feel warm and comfortably breathless. You know you're moving at the right pace if you can comfortably talk while being active.",
        ],
      },
      {
        heading: "Before you start",
        paragraphs: [
          "It's normal to worry whether you should exercise if you've got a heart problem. Most people will still be able to and feel the benefits of staying active.",
          "Speak to your doctor before beginning any physical activity for the first time. Some medicines may affect your exercise; beta blockers, for example, affect your heart rate and may make you feel more tired.",
        ],
      },
      {
        heading: "Start low and slow",
        paragraphs: [
          "Start low and slow and listen to your body. A session could be as little as 5 or 10 minutes.",
          "If you have a heart condition, a warm-up should last at least 15 minutes and a cool-down should last at least 10 minutes.",
          "Get off the bus one stop early, use the stairs instead of a lift if you can, or make exercise social by walking with a friend.",
        ],
      },
      {
        heading: "When to stop",
        paragraphs: [
          "Do not start any exercise if you are feeling symptoms, and stop and rest if you notice them during exercise. If this happens, speak to your doctor as soon as possible.",
          "If you have chest pain that's not gone away or any other symptoms of a heart attack, call 999.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor before beginning any physical activity for the first time.",
      "Start small, with a 5 minute walk every day, and build up from there.",
      "Warm up for at least 15 minutes and cool down for at least 10 minutes.",
      "Use the talk test: you should be able to talk comfortably while being active.",
      "Stop and rest if you notice symptoms, and call 999 if chest pain does not go away.",
    ],
    tryThisWeek: [
      "Take a 5 minute walk each day.",
      "Warm up and cool down.",
      "Try the talk test.",
    ],
    ask: "How much exercise is safe for me, and what should make me stop?",
    interactive: {
      kind: "scenarios",
      title: "Moments on the move",
      scenarios: [
        {
          id: "symptoms",
          situation: "You feel chest pain partway through a walk.",
          options: [{ text: "Stop and rest", best: true }, { text: "Push on to the end" }],
          why: "You should not start any exercise if you are currently feeling symptoms and should stop and rest if you notice them during your exercise.",
        },
        {
          id: "persists",
          situation: "The chest pain has not gone away after resting.",
          options: [{ text: "Call 999", best: true }, { text: "Wait until tomorrow" }],
          why: "If you have chest pain that's not gone away or any other symptoms of a heart attack, call 999.",
        },
        {
          id: "pace",
          situation: "You're not sure if you're working too hard.",
          options: [{ text: "Check you can still talk comfortably", best: true }, { text: "Go faster until you're gasping" }],
          why: "You know you're moving at the right pace if you can comfortably talk while being active.",
        },
        {
          id: "weather",
          situation: "It's very cold outside today.",
          options: [{ text: "Try a low stress activity like stretching", best: true }, { text: "Do your hardest session" }],
          why: "If it's too hot or too cold, your heart may be under more strain to exercise. If this is the case, try a low stress activity like stretching instead.",
        },
      ],
    },
    sources: [BHF_ACTIVE, BHF_BOOKLET, NHS_ACTIVITY, NHS_CHD_PREVENTION],
    quiz: {
      question: "How long should a warm-up last if you have a heart condition?",
      options: [{ text: "At least 15 minutes", right: true }, { text: "One minute" }, { text: "No warm-up is needed" }],
      why: "If you have a heart condition, a warm-up should last at least 15 minutes and a cool-down should last at least 10 minutes.",
    },
  },
  {
    id: "chd-smoking",
    kicker: "Stopping smoking",
    question: "Why does stopping smoking matter so much for my heart?",
    hook: "Smoking makes artery walls sticky and the heart work harder. Stopping cuts the risk sooner than many people expect.",
    short: "Smoking is a major risk factor for coronary heart disease. Stopping smoking after a heart attack quickly reduces your risk of having another one to near that of a non-smoker. You're 3 times more likely to give up successfully if you use NHS support together with stop-smoking medicines.",
    sections: [
      {
        heading: "What smoking does to your arteries",
        paragraphs: [
          "The chemicals in cigarettes make the walls of your arteries sticky. This causes fatty material to stick to the walls and begin to clog your arteries.",
          "Both nicotine and carbon monoxide put a strain on the heart by making it work faster. They also increase your risk of blood clots.",
        ],
      },
      {
        heading: "The benefits of stopping",
        paragraphs: [
          "Stopping smoking after a heart attack quickly reduces your risk of having a heart attack in the future to near that of a non-smoker.",
          "Your heart rate and blood pressure will begin to return to normal after 20 minutes. Your risk of a heart attack is half that of a smoker after 1 year.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "You're 3 times more likely to successfully give up smoking if you use NHS support together with stop-smoking medicines, such as patches or gum.",
          "NHS stop smoking services are free. They give you information, advice and professional support during the first few months you stop smoking, usually for up to 12 weeks.",
          "Your GP, pharmacist or health visitor can refer you, or you can phone your local stop smoking service. In England, you can call the free Smokefree National Helpline on 0300 123 1044.",
        ],
      },
      {
        heading: "Vapes",
        paragraphs: [
          "Vapes, or e-cigarettes, are less harmful than regular cigarettes and can be used to help you quit smoking. They do not burn tobacco and do not produce tar or carbon monoxide.",
          "Because they use nicotine, vapes can be addictive. If you have used vapes to successfully quit smoking normal cigarettes, consider quitting these as well.",
          "If you want to use an e-cigarette to help you quit, a stop smoking adviser can give you advice and support.",
        ],
      },
      {
        heading: "Handling cravings",
        paragraphs: [
          "Set a quit date and tell your friends and family to help you stick to it.",
          "Cravings usually last around 5 minutes. Plan things you can do in 5 minutes to stay busy for when you get cravings.",
        ],
      },
    ],
    helps: [
      "Set a quit date and tell your friends and family to help you stick to it.",
      "Speak to your GP or local pharmacy for help to stop smoking.",
      "Contact your local NHS stop smoking service.",
      "Plan things you can do in 5 minutes for when cravings come.",
      "Use the money you save by not buying cigarettes to reward yourself at milestones.",
    ],
    tryThisWeek: [
      "Pick a quit date.",
      "Contact a stop smoking service.",
      "Plan a 5 minute distraction.",
    ],
    ask: "Which stop smoking support or medicine would suit me best?",
    interactive: {
      kind: "timeline",
      title: "After your last cigarette",
      steps: [
        { id: "minutes", when: "After 20 minutes", title: "Heart rate and pressure", points: ["Your heart rate and blood pressure begin to return to normal."] },
        { id: "days", when: "After 2 to 3 days", title: "Smell and taste", points: ["Your sense of smell and taste begin to improve."] },
        { id: "weeks", when: "Up to 12 weeks", title: "Support to stay stopped", points: ["Stop smoking services usually offer support for up to 12 weeks."] },
        { id: "year", when: "After 1 year", title: "Half the risk", points: ["Your risk of a heart attack is half that of a smoker."] },
      ],
    },
    sources: [NHS_CHD_CAUSES, BHF_SMOKING, NHS_STOP_SMOKING, NHS_CHD_TREATMENT, NHS_CHD_PREVENTION, BHF_BOOKLET],
    quiz: {
      question: "How long do cravings usually last?",
      options: [{ text: "Around 5 minutes", right: true }, { text: "Around 5 hours" }, { text: "All day" }],
      why: "Cravings usually last around 5 minutes. Plan things you can do in 5 minutes to stay busy for when you get cravings.",
    },
  },
  {
    id: "chd-emotions",
    kicker: "Feelings",
    question: "Is it normal to feel worried or low with heart disease?",
    hook: "Being told you have a heart condition can be scary. Worry and low mood are common, and there is help that works.",
    short: "Being told you have a heart condition and could have a higher risk of a heart attack can be scary. It's normal to feel anxious about your health, especially after a new diagnosis, and for many people anxiety eases over time. If you feel anxious or sad a lot of the time and it's affecting your daily life, talk to your GP.",
    sections: [
      {
        heading: "A normal reaction",
        paragraphs: [
          "Being told you have a heart condition and could have a higher risk of a heart attack can be scary. It's normal to feel anxious about your health, especially after getting a new diagnosis.",
          "It is very common for anxiety to be higher after a heart event. For many people, anxiety will lessen over time as you recover and get back to normal life.",
          "Roughly 20 to 30 per cent of people are diagnosed with anxiety in the year following a heart attack.",
        ],
      },
      {
        heading: "Heart or anxiety?",
        paragraphs: [
          "Heart attacks and panic attacks share many similar symptoms, like chest pain or tightness, shortness of breath, sweating and feelings of dread. If you're unsure, it's always safest to call 999 and seek medical help.",
          "Getting to know your heart condition and your anxiety symptoms can help you learn what's normal for you. You can work with your doctor or psychologist to do this.",
        ],
      },
      {
        heading: "When it is more than worry",
        paragraphs: [
          "Depression is more than feeling sad or not yourself for a few days. If the feelings don't pass and you feel persistently sad for weeks or months, you may have clinical depression.",
          "Depression is a genuine health condition with real symptoms. It's nothing to do with willpower, and with the right help, things can get better.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "If you feel anxious or sad a lot of the time, and it's affecting your daily life, talk to your GP. Many people feel better once they've spoken to someone.",
          "You can refer yourself to NHS talking therapies for anxiety and depression without speaking to a GP. Therapies include cognitive behavioural therapy (CBT) and counselling.",
          "Your cardiac rehab nurse, or your cardiology team if you are under one, may also be able to help you get a referral.",
        ],
      },
      {
        heading: "If you need help urgently",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online or call 111 and select the mental health option. You can also call 116 123 to talk to Samaritans.",
          "Call 999 or go to A&E now if someone's life is at risk, or if you do not feel you can keep yourself or someone else safe.",
        ],
      },
    ],
    helps: [
      "Talk to your GP if you feel anxious or sad a lot of the time and it's affecting your daily life.",
      "Refer yourself to NHS talking therapies for anxiety and depression.",
      "When you feel overwhelmed, try grounding: name 5 things you can see, 4 you can touch, 3 you can hear.",
      "Share how you feel with a friend or family member that you trust.",
      "Call the British Heart Foundation Heart Helpline to speak to a cardiac nurse.",
      "For urgent help, call 111 and select the mental health option, or call Samaritans on 116 123.",
    ],
    tryThisWeek: [
      "Talk to someone you trust.",
      "Try a grounding exercise.",
      "Look up NHS talking therapies.",
    ],
    ask: "Is there support near me for the worry or low mood I feel about my heart?",
    interactive: {
      kind: "scenarios",
      title: "Where to turn",
      scenarios: [
        {
          id: "unsure",
          situation: "You get chest tightness and feel panicky, and you're not sure if it's your heart.",
          options: [{ text: "Call 999 and seek medical help", best: true }, { text: "Wait and see if it passes" }],
          why: "If you're unsure, it's always safest to call 999 and seek medical help.",
        },
        {
          id: "weeks",
          situation: "You've felt low for weeks and it's affecting your daily life.",
          options: [{ text: "Talk to your GP", best: true }, { text: "Keep it to yourself" }],
          why: "If you feel anxious or sad a lot of the time, and it's affecting your daily life, talk to your GP.",
        },
        {
          id: "therapy",
          situation: "You'd like a talking therapy and wonder if you need a GP letter.",
          options: [{ text: "Refer yourself to NHS talking therapies", best: true }, { text: "Wait for a GP referral" }],
          why: "For many mental health problems, such as anxiety and depression, you can refer yourself to NHS talking therapies without speaking to a GP.",
        },
        {
          id: "urgent",
          situation: "You need urgent help for your mental health.",
          options: [{ text: "Call 111 and select the mental health option", best: true }, { text: "Wait for your next appointment" }],
          why: "Get help from 111 online or call 111 and select the mental health option.",
        },
      ],
    },
    sources: [BHF_BOOKLET, BHF_ANXIETY, BHF_DEPRESSION, NHS_TALKING, NHS_URGENT_MH, BHF_COPING],
    quiz: {
      question: "If you're unsure whether chest tightness is panic or your heart, what is safest?",
      options: [{ text: "Call 999 and seek medical help", right: true }, { text: "Wait to see if it passes" }, { text: "Check your pulse every hour" }],
      why: "If you're unsure, it's always safest to call 999 and seek medical help.",
    },
  },
];
