import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Achilles tendinopathy page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's `sources`;
// nothing is added that those pages do not say. The NHS no longer has a page of its own on Achilles tendinopathy, so
// most of it comes from NHS inform, the NHS pages on tendonitis, heel, ankle and running pain, NICE's Clinical Knowledge
// Summary on Achilles tendinopathy, the British Orthopaedic Foot and Ankle Society's patient guide, the Chartered
// Society of Physiotherapy and Arthritis UK (the charity formerly called Versus Arthritis), with NICE's guidance on
// shockwave therapy and the government's pages on work. Exercises are described only as the sources describe them.
// Urgent advice is worded as each source words it. General information only; it never replaces what a person's own
// GP, physiotherapist or podiatrist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const nhsi = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/illnesses-and-conditions/muscle-bone-and-joints/leg-and-foot-problems-and-conditions/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/conditions/foot-pain/${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE Clinical Knowledge Summaries: ${label}`, url: `https://cks.nice.org.uk/topics/achilles-tendinopathy/${path}` });

const NHS_TEND = nhs("Tendonitis", "conditions/tendonitis/");
const NHS_HEEL = nhs("Heel pain", "symptoms/foot-pain/heel-pain/");
const NHS_ANKLE = nhs("Ankle pain", "symptoms/foot-pain/ankle-pain/");
const NHS_RUNNING = nhs("Knee pain and other running injuries", "live-well/exercise/knee-pain-and-other-running-injuries/");
const NHS_MSK = nhs("Get NHS help for back or joint problems", "nhs-services/get-nhs-help-for-back-joint-problems/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_CIPRO = nhs("Ciprofloxacin", "medicines/ciprofloxacin/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_LOSE_WEIGHT = nhs("How to lose weight", "better-health/lose-weight/");

const NHSI_ACH = nhsi("Achilles tendinopathy", "achilles-tendinopathy/");
const NHSI_ANKLE = nhsi("Ankle problems", "ankle-problems");
const NHSI_EX = nhsi("Exercises for calf and ankle problems", "exercises-for-calf-and-ankle-problems");

const CKS_DEF = cks("Achilles tendinopathy, what is it?", "background-information/definition/");
const CKS_CAUSES = cks("Achilles tendinopathy, what causes it?", "background-information/causes/");
const CKS_RISK = cks("Achilles tendinopathy, risk factors", "background-information/risk-factors/");
const CKS_PREV = cks("Achilles tendinopathy, how common is it?", "background-information/prevalence/");
const CKS_COMP = cks("Achilles tendinopathy, complications", "background-information/complications/");
const CKS_PROG = cks("Achilles tendinopathy, prognosis", "background-information/prognosis/");
const CKS_DIAG = cks("Achilles tendinopathy, when to suspect it", "diagnosis/diagnosis/");
const CKS_MGMT = cks("Achilles tendinopathy, management", "management/management/");

const BOFAS: LearnSource = { label: "British Orthopaedic Foot and Ankle Society: A guide to Achilles tendon pain", url: "https://www.bofas.org.uk/Portals/0/Patient%20Information/Guide%20To%20Achilles%20Tendon%20Pain.pdf" };

const CSP_CAUSES = csp("Causes of foot pain", "causes-foot-pain");
const CSP_TREAT = csp("Treatment for common foot conditions", "treatment-foot-pain");
const CSP_HELP = csp("Getting help for foot pain", "getting-help-foot-pain");
const CSP_LIVING = csp("Living with foot pain", "living-foot-pain");
const CSP_VIDEO = csp("Video exercises for foot pain", "video-exercises-foot-pain");

const AU_FOOT = au("Foot and ankle pain", "understanding-arthritis/conditions/foot-and-ankle-pain/");
const AU_EX_FEET = au("Exercises for the toes, feet and ankles", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-toes-feet-and-ankles/");
const AU_EX_TYPE = au("What type of exercise should I do?", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/what-type-of-exercise-should-i-do/");
const AU_FOOTCARE = au("Footcare and footwear", "living-with-arthritis/health-and-wellbeing/footcare-and-footwear/");
const AU_WEIGHT = au("Managing your weight", "living-with-arthritis/health-and-wellbeing/eating-well-with-arthritis/managing-your-weight/");
const AU_WORK_SAFE = au("Working safely and well", "living-with-arthritis/work-benefits-and-finances/work-and-arthritis/working-safely-and-well/");
const AU_ADJUSTMENTS = au("Applying for reasonable adjustments", "living-with-arthritis/work-benefits-and-finances/work-and-arthritis/applying-for-reasonable-adjustments/");

const NICE_ESWT: LearnSource = { label: "NICE: Extracorporeal shockwave therapy for Achilles tendinopathy (HTG426)", url: "https://www.nice.org.uk/guidance/htg426" };
const NICE_ESWT_REC: LearnSource = { label: "NICE: Extracorporeal shockwave therapy for Achilles tendinopathy (HTG426), recommendations", url: "https://www.nice.org.uk/guidance/htg426/chapter/1-Recommendations" };

const GOV_ADJUST: LearnSource = { label: "GOV.UK: Reasonable adjustments for workers with disabilities or health conditions", url: "https://www.gov.uk/reasonable-adjustments-for-disabled-workers" };
const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const achillesAnswers: LearnArticle[] = [
  {
    id: "ach-what-it-is",
    kicker: "Understanding",
    question: "What is Achilles tendinopathy?",
    hook: "The thick cord at the back of your heel is the strongest tendon in the body. Overload it for long enough, and it starts to hurt.",
    short: "Achilles tendinopathy is a condition that can cause pain, stiffness and swelling of the Achilles tendon, which connects the calf muscles to the heel bone. Most Achilles tendon problems are overuse injuries. It most often affects the middle of the tendon, a little above the heel.",
    sections: [
      {
        heading: "The cord at the back of your heel",
        paragraphs: [
          "The Achilles tendon is the thick strap that can be felt running down the back of the calf into the heel. It connects the large calf muscles to the heel bone.",
          "When it pulls on the heel, it lets you go up on tiptoe, and helps push you forward when walking or running. NICE's Clinical Knowledge Summary describes it as the thickest and strongest tendon in the human body.",
        ],
      },
      {
        heading: "What tendinopathy means",
        paragraphs: [
          "Achilles tendinopathy is a condition that can cause pain, stiffness and swelling of the Achilles tendon. NICE's Clinical Knowledge Summary describes it as a painful overuse injury.",
          "Most Achilles tendon problems are overuse injuries. Overdoing activity on a less flexible tendon can lead to small tears in the tendon fibres. When the body's repair of these tears fails, a continual cycle of pain, swelling and weakness can set in.",
        ],
      },
      {
        heading: "Tendinitis, tendinosis, tendinopathy",
        paragraphs: [
          "You may hear it called Achilles tendinitis or tendinosis. The Chartered Society of Physiotherapy says Achilles tendonitis is an old term which described the condition as inflammation, and we now know this is not always the case.",
          "NICE's Clinical Knowledge Summary says experts now prefer the term Achilles tendinopathy, because inflammation may not be a feature of the tendon injury.",
        ],
      },
      {
        heading: "Two main places it hurts",
        paragraphs: [
          "The most common site is the middle of the tendon, about 2 to 6cm above where it joins the heel bone. This area may be vulnerable to damage because it has a relatively poor blood supply.",
          "Less often, it affects the point where the tendon joins the heel bone, called insertional tendinopathy. The two can happen together.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "Achilles tendinopathy can occur in both active and inactive people. Arthritis UK says it commonly affects people who do sports involving a lot of running or jumping, have some types of inflammatory arthritis, or have high or low arches.",
          "The British Orthopaedic Foot and Ankle Society says it affects less than one in 20 people in the general population, while up to half of athletes may develop a problem with their Achilles tendon. One large study cited by NICE found that men and women were equally affected, with the peak age between 40 and 59.",
        ],
      },
    ],
    helps: [
      "Keep up as much of your normal daily activity as you can.",
      "Use heat or ice wrapped in a towel, for no longer than 20 minutes at a time.",
      "Talk to a healthcare professional if your symptoms have not improved within 12 weeks.",
      "Ask your doctor or physiotherapist for exercises if simple measures do not help.",
    ],
    tryThisWeek: [
      "Keep up your daily activity.",
      "Try wrapped heat or ice.",
      "Ask about exercises if no better.",
    ],
    ask: "Is this Achilles tendinopathy, and which part of the tendon is affected?",
    interactive: {
      kind: "flip-cards",
      title: "The parts involved",
      intro: "Turn each card to see what each part does, and how it is linked to Achilles pain.",
      cards: [
        { id: "tendon", front: "Achilles tendon", when: "Back of the calf into the heel", back: "The thick strap that connects the calf muscles to the heel bone. It lets you go up on tiptoe." },
        { id: "calf", front: "Calf muscles", when: "Above the tendon", back: "The large muscles the Achilles tendon connects to the heel bone." },
        { id: "heel", front: "Heel bone", when: "Where the tendon joins", back: "When the tendon pulls on the heel, it helps push you forward when walking or running." },
        { id: "middle", front: "Middle of the tendon", when: "About 2 to 6cm above the heel", back: "The most common site. It may be vulnerable because it has a relatively poor blood supply." },
        { id: "insertion", front: "Where it joins the heel", when: "Insertional tendinopathy", back: "A less common site. It can happen together with pain in the middle of the tendon." },
      ],
    },
    sources: [CKS_DEF, BOFAS, NHSI_ACH, CSP_CAUSES, AU_FOOT, CKS_PREV],
    quiz: {
      question: "What does the Achilles tendon connect?",
      options: [{ text: "The calf muscles to the heel bone", right: true }, { text: "The heel to the toes" }, { text: "The knee to the ankle" }],
      why: "It connects the large calf muscles to the heel bone.",
    },
  },
  {
    id: "ach-causes",
    kicker: "Causes",
    question: "Why does Achilles tendinopathy happen?",
    hook: "A new running plan, more hills, a change of shoes, or long hours standing still. Usually it comes down to load the tendon is not ready for.",
    short: "The exact cause is not known, but it is thought that too much, repeated or unusual loading during activity disrupts the tendon's repair. Common factors include a sudden change in activity, unsuitable footwear, long periods standing still, getting older, and some health conditions and medicines.",
    sections: [
      {
        heading: "Too much load on the tendon",
        paragraphs: [
          "The exact cause of Achilles tendinopathy is not known. NICE's Clinical Knowledge Summary says it is thought that excessive, repetitive or abnormal loading during physical activity disrupts the tendon's repair and contributes to wear and tear changes.",
          "The Chartered Society of Physiotherapy says most injuries to the Achilles tendon are overload issues, often caused by overuse. Examples include increasing training schedules too quickly, or taking up a new activity you are not used to.",
        ],
      },
      {
        heading: "Changes in activity",
        paragraphs: [
          "NHS inform lists a sudden or gradual change in load as a common factor, such as changes in the level of exercise or taking up a new sport, beyond your normal levels of strength or endurance.",
          "For runners, a rapid increase in weekly distance, or bringing in hill running or harder sessions, is often a trigger. Training on hard or sloping surfaces can also play a part.",
        ],
      },
      {
        heading: "Not only active people",
        paragraphs: [
          "Achilles tendinopathy can occur in both active and inactive people. Spending a long time standing still is a common factor, and so is sedentary behaviour, which can weaken your muscles and tendons over time.",
          "Wearing unsuitable or poorly fitting footwear for the activities you are doing can also play a part, as can smoking.",
        ],
      },
      {
        heading: "Age, feet and health conditions",
        paragraphs: [
          "As we get older, the tendon becomes less flexible and less able to absorb repeated stresses. High-arched or flat feet can also increase the stress on the tendon.",
          "Other health conditions linked to it include being overweight, diabetes and inflammatory arthritis. NICE's Clinical Knowledge Summary also lists high cholesterol, rheumatoid arthritis and psoriatic arthritis, and Arthritis UK says psoriatic and reactive arthritis are often linked to it.",
        ],
      },
      {
        heading: "Some medicines",
        paragraphs: [
          "NICE's Clinical Knowledge Summary lists some medicines that may affect the tendon, including steroids that act throughout the body, statins, aromatase inhibitors and a group of antibiotics called fluoroquinolones.",
          "The NHS says ciprofloxacin, one of these antibiotics, can sometimes cause serious side effects, although most of them are rare. They include damage to your tendons, which can cause difficulties with walking, sudden joint pain, swelling and bruising, and this can develop in the first 48 hours of treatment. If you think you are having a serious side effect, call NHS 111.",
        ],
      },
    ],
    helps: [
      "Warm up before exercising and gently stretch afterwards.",
      "Do not start a new sport without some training or practice.",
      "Wear supportive shoes or insoles for exercise.",
      "Call NHS 111 if you think you are having a serious side effect from ciprofloxacin.",
      "Keep taking your medicine unless you are advised to stop, and speak to a pharmacist or doctor about side effects that bother you.",
    ],
    tryThisWeek: [
      "Warm up, then stretch gently after.",
      "Train before starting a new sport.",
      "Wear supportive shoes for exercise.",
    ],
    ask: "What do you think has caused my Achilles pain, and could any of my medicines play a part?",
    interactive: {
      kind: "risk-check",
      title: "What raises the chance?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "change", label: "A sudden change in exercise", note: "Changes in the level of exercise or a new sport, beyond your normal strength or endurance.", changeable: true },
        { id: "hills", label: "More hills or harder sessions", note: "A rapid increase in weekly running distance, hill running or harder sessions is often a trigger.", changeable: true },
        { id: "standing", label: "Long spells standing still", note: "Spending a long time standing still is one of the common factors.", changeable: true },
        { id: "sitting", label: "Sitting a lot", note: "Sedentary behaviour can weaken your muscles and tendons over time.", changeable: true },
        { id: "shoes", label: "Unsuitable or poorly fitting shoes", note: "Footwear that does not suit the activities you are doing.", changeable: true },
        { id: "smoking", label: "Smoking", note: "NHS inform lists smoking among the common factors.", changeable: true },
        { id: "age", label: "Getting older", note: "As we get older, the tendon becomes less flexible and less able to absorb repeated stresses.", changeable: false },
        { id: "conditions", label: "Diabetes or inflammatory arthritis", note: "Health conditions linked to Achilles tendinopathy, along with being overweight.", changeable: false },
      ],
    },
    sources: [CKS_CAUSES, NHSI_ACH, CKS_RISK, CSP_CAUSES, BOFAS, NHS_TEND, NHS_CIPRO, AU_FOOT, CKS_DIAG],
    quiz: {
      question: "Which of these can trigger Achilles tendinopathy?",
      options: [{ text: "Increasing training schedules too quickly", right: true }, { text: "Warming up before exercise" }, { text: "Wearing well-fitting shoes" }],
      why: "Examples include increasing training schedules too quickly, or taking up a new activity you are not used to.",
    },
  },
  {
    id: "ach-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms, and how would I know if the tendon has ruptured?",
    hook: "Stiff first thing, sore when you get going. That is the usual pattern. A sudden snap or a kick to the back of the leg is something else.",
    short: "Achilles tendinopathy usually comes on gradually, with pain, stiffness and swelling at the back of the heel or ankle, often worse in the morning or after rest. A sudden pain, as if kicked in the back of the leg, with a snap or pop, can mean the tendon has ruptured. The NHS says get help from NHS 111 if you think you have ruptured a tendon.",
    sections: [
      {
        heading: "The usual signs",
        paragraphs: [
          "Symptoms can include swelling, pain that is worse during or after moving or exercising, stiffness that is worse in the morning or after a period of rest, tenderness to touch, mild heat, and loss of movement and strength around the ankle and foot.",
          "You may have pain and swelling at the back of the ankle or heel. The pain may be minor but continuous, and it may be worse first thing in the morning. Arthritis UK also lists difficulty moving the foot up and down, a grating sensation, and a lump on the tendon.",
        ],
      },
      {
        heading: "How it usually starts",
        paragraphs: [
          "Tendinopathy develops gradually. At first the problem may only be during activity, but as the condition worsens, symptoms can come on with little activity and even when resting.",
          "NICE's Clinical Knowledge Summary says symptoms are typically worse at night, at rest or when restarting activity, and are brought on by walking, running and jumping. About 30% of people may have it in both ankles.",
        ],
      },
      {
        heading: "A ruptured tendon",
        paragraphs: [
          "Sometimes the tendon tears completely, called a rupture. You would probably feel a sudden pain in your heel or calf, and some people say it feels as though they had been kicked in the back of the leg.",
          "Other signs include a popping or snapping sound when the pain started, swelling and bruising in your calf and ankle, difficulty walking, and not being able to walk on your tiptoes.",
          "NICE's Clinical Knowledge Summary says most people with a complete rupture have not had Achilles symptoms before.",
        ],
      },
      {
        heading: "If you think it has ruptured",
        paragraphs: [
          "The NHS says get help from NHS 111 if you think you have ruptured a tendon or you are in a lot of pain. Contact NHS 111 if you have severe heel pain after an injury, heard a snap, grinding or popping noise at the time, or are not able to walk on your tiptoes.",
          "The British Orthopaedic Foot and Ankle Society says a ruptured tendon requires prompt medical attention, and you should attend your local emergency department or minor injuries unit for assessment. The Chartered Society of Physiotherapy says it is important to seek immediate medical advice.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP or a physiotherapist if you have Achilles pain that does not disappear after 2 to 3 weeks.",
          "See a GP if the pain is getting worse or keeps coming back, or you have any tingling or loss of feeling in your foot. Also see a GP if you have diabetes and foot pain, because foot problems can be more serious if you have diabetes.",
        ],
      },
    ],
    helps: [
      "Get help from NHS 111 if you think you have ruptured a tendon.",
      "Contact NHS 111 if you are not able to walk, or not able to walk on your tiptoes, after an injury.",
      "See a GP or physiotherapist if Achilles pain does not go away after 2 to 3 weeks.",
      "In many areas you can refer yourself to NHS physiotherapy without seeing a GP.",
    ],
    tryThisWeek: [
      "Know the signs of a rupture.",
      "See a GP if no better in 2 to 3 weeks.",
      "Check if you can self-refer to physio.",
    ],
    ask: "Do my symptoms fit Achilles tendinopathy, and how can I tell if the tendon is damaged?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick what you have noticed. The ones you tick make a list to take to a GP, pharmacist or physiotherapist.",
      signs: [
        "Pain at the back of the heel or ankle",
        "Stiffness in the morning or after rest",
        "Pain worse during or after exercise",
        "Swelling, mild heat or tenderness",
        "A lump on the tendon",
        "A grating sensation",
        "Pain in both ankles",
        "Tingling or loss of feeling in my foot",
        "No better after 2 to 3 weeks",
      ],
      after: "A sudden pain as if kicked, a snap or pop, or not being able to walk on tiptoe: get help from NHS 111.",
      copyHeading: "Achilles symptoms I have noticed",
    },
    sources: [NHSI_ACH, CKS_DIAG, NHS_RUNNING, AU_FOOT, BOFAS, NHS_TEND, NHS_HEEL, CSP_TREAT, CKS_COMP, NHS_ANKLE],
    quiz: {
      question: "What might a ruptured Achilles tendon feel like?",
      options: [{ text: "As if kicked in the back of the leg", right: true }, { text: "A slow ache over many months" }, { text: "Tingling in the toes only" }],
      why: "You would probably feel a sudden pain in your heel or calf, and some people say it feels as though they had been kicked in the back of the leg.",
    },
  },
  {
    id: "ach-how-long",
    kicker: "Recovery",
    question: "How long does Achilles tendinopathy take to get better?",
    hook: "Usually months, sometimes a year or more. Most cases improve, and knowing the timescale helps you keep going with what works.",
    short: "Managing Achilles tendinopathy can take time, in most cases several months or more. NICE's Clinical Knowledge Summary says most cases improve over time, though full recovery can take a year or longer. NHS inform advises talking to a healthcare professional if symptoms have not improved within 12 weeks.",
    sections: [
      {
        heading: "Months, not weeks",
        paragraphs: [
          "Managing Achilles tendinopathy can take time, in most cases several months or more. Arthritis UK says it can take anywhere from a few weeks to several months to fully recover.",
          "NICE's Clinical Knowledge Summary notes that full recovery can take a year or longer.",
        ],
      },
      {
        heading: "Most cases improve",
        paragraphs: [
          "Most cases are self-limiting and will improve over time, but how long recovery takes, and how complete it is, varies between people.",
          "One review cited by NICE recommends treatment without surgery for 3 to 6 months, as 75% of cases settle within this time.",
        ],
      },
      {
        heading: "What the studies found",
        paragraphs: [
          "One review says exercise programmes over 12 weeks can give a clear improvement in symptoms and function, with further improvement likely between 12 and 52 weeks.",
          "In one study that followed people for 8 years, 84% had fully returned to their normal activity level. For some people, mild symptoms can last for years.",
        ],
      },
      {
        heading: "Checking in along the way",
        paragraphs: [
          "Talk to a healthcare professional if your symptoms have not improved within 12 weeks of following self-care advice, or if your symptoms get worse.",
          "The NHS suggests seeing a GP or physiotherapist if Achilles pain does not disappear after 2 to 3 weeks. NICE's Clinical Knowledge Summary says a physiotherapy referral may be considered if there is no improvement with self-care in 7 to 10 days.",
        ],
      },
      {
        heading: "If it lasts longer",
        paragraphs: [
          "If symptoms last more than six weeks, a heel X-ray or ultrasound scan may be considered, to check for other conditions.",
          "If symptoms are getting worse or carry on after six months despite treatment, a referral to a sports doctor or orthopaedic specialist may be considered. The Chartered Society of Physiotherapy suggests contacting a doctor about pain for over three months, or pain that is progressive and not eased.",
        ],
      },
    ],
    helps: [
      "Keep up as much of your normal daily activity as you can.",
      "Talk to a healthcare professional if your symptoms have not improved within 12 weeks.",
      "See a GP or physiotherapist if Achilles pain does not go away after 2 to 3 weeks.",
      "Contact a doctor about pain that is waking you or keeping you up at night.",
    ],
    tryThisWeek: [
      "Keep up your daily activity.",
      "Note how it changes week to week.",
      "See a GP if no better in 2 to 3 weeks.",
    ],
    ask: "How long should I expect this to take, and when should we try something else?",
    interactive: {
      kind: "timeline",
      title: "A typical course of Achilles tendinopathy",
      steps: [
        { id: "start", when: "From the start", title: "Self-care and staying active", points: ["Keep up as much normal activity as you can.", "Heat or ice, and painkillers if needed."] },
        { id: "weeks", when: "2 to 3 weeks", title: "See a GP or physio if no better", points: ["Physiotherapy may be considered if self-care is not helping.", "In many areas you can refer yourself."] },
        { id: "six-weeks", when: "After 6 weeks", title: "A scan may be considered", points: ["A heel X-ray or ultrasound, to check for other conditions."] },
        { id: "twelve-weeks", when: "12 weeks", title: "Talk to a professional if no better", points: ["Exercise programmes over 12 weeks can give a clear improvement."] },
        { id: "months", when: "3 to 6 months", title: "Most cases settle", points: ["75% of cases settle within this time, says one review cited by NICE."] },
        { id: "year", when: "A year or longer", title: "Full recovery", points: ["Full recovery can take a year or longer.", "A specialist referral may be considered after six months."] },
      ],
    },
    sources: [NHSI_ACH, CKS_PROG, AU_FOOT, CKS_MGMT, NHS_RUNNING, CSP_LIVING],
    quiz: {
      question: "According to NICE's Clinical Knowledge Summary, how long can full recovery take?",
      options: [{ text: "A year or longer", right: true }, { text: "About 3 days" }, { text: "Exactly 2 weeks" }],
      why: "NICE's Clinical Knowledge Summary notes that full recovery can take a year or longer.",
    },
  },
  {
    id: "ach-exercises",
    kicker: "Exercise",
    question: "Which loading exercises help the Achilles tendon?",
    hook: "A chair, a wall and some patience. Building the tendon up slowly is the treatment with the strongest evidence.",
    short: "Achilles tendinopathy does not improve with rest, and exercises that gradually load the tendon and calf are the main treatment. NHS inform describes heel raises and calf stretches, with a simple guide to how much pain is acceptable. Check with your GP or physiotherapist first.",
    sections: [
      {
        heading: "Why loading helps",
        paragraphs: [
          "Achilles tendinopathy does not improve with rest, so it is important to keep up as much of your normal daily activity as you can. When you see a healthcare professional, they will give guidance on what exercise levels you should be aiming for.",
          "NICE's Clinical Knowledge Summary says a physiotherapist may advise on a progressive tendon loading programme, 2 to 3 times a week, which builds up based on your pain and what you can do. One review it cites reports the strongest evidence is for exercise rehabilitation.",
        ],
      },
      {
        heading: "Check first, start gently",
        paragraphs: [
          "Check with your GP or physiotherapist first. The Chartered Society of Physiotherapy recommends seeking advice from a physiotherapist or healthcare professional before starting any new exercise regime, and seeking urgent medical advice if an exercise worsens your pain.",
          "If you have been diagnosed with a calf or ankle condition, follow the advice of your healthcare professional. NHS inform says to stop the exercises if they make your symptoms worse, or if they cause new pain.",
        ],
      },
      {
        heading: "Heel raises",
        paragraphs: [
          "NHS inform describes a seated heel raise. Place your feet flat on the floor, gradually lift your heels as far as is comfortable, then slowly lower them back to the floor.",
          "For a standing heel raise, stand in front of a wall or chair for support. Slowly lift your heels as far as possible so you are standing on your toes, hold for a few seconds, then slowly lower your heels to the floor.",
        ],
      },
      {
        heading: "Calf stretches",
        paragraphs: [
          "For a standing calf stretch, lean on a chair placed in front of you and bring one leg out behind you until you feel a stretch, with the front leg slightly bent. Hold for a few seconds, and gradually build the hold up to 20 or 30 seconds.",
          "Arthritis UK describes an Achilles tendon stretch. Loop a towel around the ball of your foot and pull your toes towards your body, keeping your knee straight. Hold for 30 seconds, and repeat three times on each foot.",
          "The Chartered Society of Physiotherapy lists gentle calf strengthening and gentle calf stretches among the first steps to reduce the load on the tendon.",
        ],
      },
      {
        heading: "How much, and how it should feel",
        paragraphs: [
          "Start with 2 to 3 repetitions at a time, practised through the day, and add 1 or 2 repetitions every few days as it gets easier. Over time, aim for a maximum of 2 sets of 15.",
          "Rate your pain out of 10 and aim to keep it between 0 and 5 during exercise. Your pain should be no worse the morning after you have exercised.",
        ],
      },
    ],
    helps: [
      "Check with a physiotherapist or healthcare professional before starting any new exercise regime.",
      "Ask your doctor or physiotherapist for exercises if simple measures do not help.",
      "Start gently and slowly build up the amount you are doing.",
      "Keep your pain during exercise between 0 and 5 out of 10.",
      "Stop the exercises if they make your symptoms worse or cause new pain.",
    ],
    tryThisWeek: [
      "Ask a physio before starting.",
      "Try a few seated heel raises.",
      "Keep pain at 5 out of 10 or less.",
    ],
    ask: "Which loading exercises suit me, how many should I do, and how should I build up?",
    interactive: {
      kind: "flip-cards",
      title: "Exercises, card by card",
      intro: "Check with your GP or physiotherapist first. Turn each card to see how the source describes it.",
      cards: [
        { id: "seated", front: "Seated heel raise", when: "Sitting, feet flat", back: "Gradually lift your heels as far as is comfortable, then slowly lower them back to the floor." },
        { id: "standing", front: "Standing heel raise", when: "Holding a wall or chair", back: "Slowly lift your heels to stand on your toes, hold for a few seconds, then slowly lower them." },
        { id: "chair", front: "Standing calf stretch", when: "Leaning on a chair", back: "Bring one leg out behind you until you feel a stretch. Build the hold up to 20 or 30 seconds." },
        { id: "towel", front: "Towel stretch", when: "Sitting, knee straight", back: "Loop a towel around the ball of your foot and pull your toes towards you. Hold for 30 seconds, three times." },
        { id: "pain", front: "The pain guide", when: "During and after exercise", back: "Keep pain between 0 and 5 out of 10, and no worse the morning after you have exercised." },
      ],
    },
    sources: [CKS_MGMT, NHSI_EX, NHSI_ACH, CSP_VIDEO, CSP_TREAT, AU_EX_FEET, BOFAS, AU_FOOT],
    quiz: {
      question: "What does NHS inform suggest for pain during exercise?",
      options: [{ text: "Keep it between 0 and 5 out of 10", right: true }, { text: "Push through any level of pain" }, { text: "Stop at the first twinge" }],
      why: "Rate your pain out of 10 and aim to keep it between 0 and 5 during exercise.",
    },
  },
  {
    id: "ach-self-care",
    kicker: "Self-care",
    question: "Do rest, ice and painkillers help Achilles pain?",
    hook: "Not complete rest, but less of what hurts. Heat or ice, and the right painkiller, can make moving more comfortable.",
    short: "Achilles tendinopathy does not improve with rest, but you may need to change what you do by taking breaks or doing less. Heat or ice, wrapped in a towel, can help reduce pain. Painkillers such as paracetamol or ibuprofen can ease pain, and a pharmacist can help you choose.",
    sections: [
      {
        heading: "Less, but not complete rest",
        paragraphs: [
          "Achilles tendinopathy does not improve with rest. You may have to modify what you do, by taking breaks, doing less or changing activity, and you may need to reduce your activity level.",
          "NICE's Clinical Knowledge Summary advises avoiding complete rest, continuing activities if the pain is tolerated, and restarting exercise when the pain is controlled. One review it cites suggests changing activity for the first 2 to 6 weeks after symptoms flare.",
        ],
      },
      {
        heading: "Heat or ice",
        paragraphs: [
          "Both heat and ice can help reduce pain, and you can use whichever feels most helpful. Use a barrier, like a towel, and never place heat or ice directly on your skin. Apply for no longer than 20 minutes at a time, and leave a few hours between treatments.",
          "Stop if you notice an increase in redness, discolouration or blistering of the skin. If you have any issues with circulation or sensation, do not use heat or ice.",
          "The NHS suggests wrapped ice if you can feel a lump on the tendon, and gently massaging the area with your fingers.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "Pain medication can help you move more comfortably. A pharmacist can recommend the best painkiller for you, and paracetamol and ibuprofen, including ibuprofen gel rubbed on the skin, can help to ease pain.",
          "The British Orthopaedic Foot and Ankle Society says simple painkillers such as paracetamol are often effective for more severe episodes. Anti-inflammatory medicines can have side effects, so check with your doctor or pharmacist before taking them.",
          "NICE's Clinical Knowledge Summary notes that anti-inflammatory painkillers have only a modest effect in the short term. One review it cites warns they could lead a person to ignore early symptoms, risking further damage to the tendon.",
        ],
      },
      {
        heading: "Using them safely",
        paragraphs: [
          "Take the smallest dose you need for the shortest time. Do not take ibuprofen tablets for more than 10 days unless a doctor advises it, and do not take or use paracetamol for more than 3 days unless a doctor tells you to.",
          "Ibuprofen may not be suitable if you have had a stomach ulcer, have asthma, or have a heart, liver or kidney condition. You are less likely to get side effects from ibuprofen gel or spray than from tablets.",
          "Get help from NHS 111 if you have taken more than it says on the packet or leaflet. If you are told to go to A&E, do not drive. Ask someone to drive you, or call 999 and ask for an ambulance.",
        ],
      },
      {
        heading: "Support and movement",
        paragraphs: [
          "For a tendon injury, the NHS suggests an elastic bandage, tube bandage or soft brace, which should be snug, not tight. Take it off before going to bed.",
          "When you are able to move the area without pain stopping you, keep moving it so the joint does not become stiff. The NHS tendonitis page suggests avoiding sport until the tendon has recovered.",
        ],
      },
    ],
    helps: [
      "Keep up as much of your normal daily activity as you can, taking breaks or doing less if needed.",
      "Use heat or ice wrapped in a towel, for no longer than 20 minutes at a time.",
      "Ask a pharmacist to recommend the best painkiller for you.",
      "Check with your doctor or pharmacist before taking anti-inflammatory medicines.",
      "Do not take ibuprofen at the same time as other anti-inflammatory painkillers, such as naproxen or aspirin.",
    ],
    tryThisWeek: [
      "Take breaks rather than full rest.",
      "Use wrapped heat or ice.",
      "Ask a pharmacist which painkiller.",
    ],
    ask: "Which painkiller is right for me, and is it safe with my other medicines?",
    interactive: {
      kind: "flip-cards",
      title: "Easing the pain, card by card",
      intro: "Turn each card to see what the sources say about each one.",
      cards: [
        { id: "modify", front: "Change, not stop", when: "From the start", back: "It does not improve with rest. Take breaks, do less or change activity instead." },
        { id: "heat-ice", front: "Heat or ice", when: "Up to 20 minutes at a time", back: "Use a towel as a barrier and leave a few hours between treatments. Never directly on your skin." },
        { id: "paracetamol", front: "Paracetamol", when: "For more severe episodes", back: "Often effective. Do not take it for more than 3 days unless a doctor tells you to." },
        { id: "gel", front: "Ibuprofen gel", when: "Rubbed on the skin", back: "Side effects are less likely than with tablets. Wash your hands after using it." },
        { id: "tablets", front: "Ibuprofen tablets", when: "Check with a doctor or pharmacist", back: "Not suitable for everyone. No more than 10 days unless a doctor advises it." },
        { id: "bandage", front: "Bandage or soft brace", when: "For support", back: "Snug, not tight. Take it off before going to bed." },
      ],
    },
    sources: [NHSI_ACH, CKS_MGMT, NHS_TEND, BOFAS, NHS_RUNNING, NHS_IBUPROFEN, NHS_PARACETAMOL],
    quiz: {
      question: "What does NHS inform say about rest and Achilles tendinopathy?",
      options: [{ text: "It does not improve with rest", right: true }, { text: "Complete bed rest cures it" }, { text: "Rest makes no difference to anything" }],
      why: "Achilles tendinopathy does not improve with rest.",
    },
  },
  {
    id: "ach-footwear",
    kicker: "Footwear",
    question: "Which shoes and heel raises help Achilles pain?",
    hook: "Well-fitting shoes, a small heel lift on both sides, and running shoes fitted properly. Small changes that take some load off the tendon.",
    short: "Unsuitable or poorly fitting footwear is one of the common factors in Achilles tendinopathy. A small heel raise in or on both shoes reduces the stress on the tendon, and well-padded running shoes and a softer running surface may help. The evidence for insoles and heel lifts is limited.",
    sections: [
      {
        heading: "Why shoes matter",
        paragraphs: [
          "Wearing unsuitable or poorly fitting footwear for the activities you are doing is one of the common factors in Achilles tendinopathy. NICE's Clinical Knowledge Summary notes that inappropriate footwear can put pressure on the tendon and the heel bone.",
          "The Chartered Society of Physiotherapy lists wearing appropriate and well-fitting shoes among the first steps to reduce the load on the tendon.",
        ],
      },
      {
        heading: "Heel raises in your shoes",
        paragraphs: [
          "A small heel raise in or on your shoe will reduce the stresses on the tendon, says the British Orthopaedic Foot and Ankle Society, but remember to also raise the other side to keep yourself balanced.",
          "The NHS suggests trying heel wedges in your shoes, and getting advice about this from a sports or running shop. NICE's Clinical Knowledge Summary says heel lifts may be considered to reduce load during activity when the middle of the tendon is affected.",
          "The evidence for heel lifts is limited. One review cited by NICE describes minimal evidence that they give short-lived pain relief.",
        ],
      },
      {
        heading: "Insoles",
        paragraphs: [
          "If you have an abnormal foot shape, you may need a referral for insoles. NICE's Clinical Knowledge Summary notes reviews finding little or no evidence that orthotics reduce Achilles pain.",
          "Arthritis UK says there is no current evidence that magnetic insoles are better than standard, cushioned insoles or well-fitted footwear.",
        ],
      },
      {
        heading: "Running shoes and surfaces",
        paragraphs: [
          "A change to a softer running surface and well-padded running shoes may help. It is best to go to a running shop to get fitted for the correct running shoes, but you do not have to spend a lot of money.",
          "The NHS advises wearing supportive shoes or insoles for exercise.",
        ],
      },
      {
        heading: "Everyday shoes",
        paragraphs: [
          "For ankle pain, the NHS suggests wide comfortable shoes with a low heel and a soft sole, and not wearing high heels or tight pointy shoes.",
          "Arthritis UK suggests getting your feet measured each time you shop for footwear, and trying new shoes on after you have been on your feet for some time, with any insoles you use. Good footwear should have a 1cm gap between the end of your longest toe and the front of the shoe.",
        ],
      },
    ],
    helps: [
      "Wear appropriate and well-fitting shoes.",
      "Use a small heel raise, and raise the other side too to keep yourself balanced.",
      "Ask a sports or running shop about heel wedges.",
      "Get fitted for running shoes at a running shop.",
      "Try new footwear on with any insoles you use.",
    ],
    tryThisWeek: [
      "Check your shoes fit well.",
      "Ask about heel wedges.",
      "Get running shoes fitted.",
    ],
    ask: "Would a heel raise or insoles help me, and which shoes should I wear for now?",
    interactive: {
      kind: "scenarios",
      title: "Choosing what to wear",
      scenarios: [
        {
          id: "one-side",
          situation: "You add a heel raise to the shoe on your painful side.",
          options: [{ text: "Add one to the other shoe too", best: true }, { text: "Keep it in one shoe only" }],
          why: "A small heel raise in or on your shoe will reduce the stresses on the tendon, but remember to also raise the other side to keep yourself balanced.",
        },
        {
          id: "running-shoes",
          situation: "You need new running shoes.",
          options: [{ text: "Get fitted at a running shop", best: true }, { text: "Buy any pair online" }],
          why: "It is best to go to a running shop to get fitted for the correct running shoes.",
        },
        {
          id: "magnetic",
          situation: "An advert offers costly magnetic insoles.",
          options: [{ text: "Standard cushioned insoles", best: true }, { text: "The magnetic ones" }],
          why: "There is no current evidence that magnetic insoles are better than standard, cushioned insoles or well-fitted footwear.",
        },
        {
          id: "surface",
          situation: "Your usual run is on hard pavements.",
          options: [{ text: "Try a softer running surface", best: true }, { text: "Add more pavement miles" }],
          why: "A change to a softer running surface and well-padded running shoes may help.",
        },
      ],
    },
    sources: [BOFAS, CSP_TREAT, CKS_MGMT, NHSI_ACH, NHS_RUNNING, CKS_RISK, AU_FOOTCARE, NHS_TEND, AU_FOOT, NHS_ANKLE],
    quiz: {
      question: "Why does the British Orthopaedic Foot and Ankle Society suggest raising both heels?",
      options: [{ text: "To keep yourself balanced", right: true }, { text: "To make you taller" }, { text: "To stretch the tendon" }],
      why: "A small heel raise in or on your shoe will reduce the stresses on the tendon, says the British Orthopaedic Foot and Ankle Society, but remember to also raise the other side to keep yourself balanced.",
    },
  },
  {
    id: "ach-further-treatment",
    kicker: "Treatment",
    question: "What if it does not get better: physiotherapy, shockwave and surgery?",
    hook: "When home care is not enough, there is a next step: a physiotherapist first, then other treatments and specialist help if needed.",
    short: "If self-care does not help, a physiotherapist can guide a loading exercise programme, and in many areas you can refer yourself. Shockwave therapy is sometimes offered, though NICE says the evidence on how well it works is inconsistent. Steroid injections into the tendon are not recommended. Surgery may be considered after at least six months of other treatment.",
    sections: [
      {
        heading: "Physiotherapy",
        paragraphs: [
          "In many areas you can refer yourself to NHS community musculoskeletal services, such as physiotherapy, without a referral from a GP. You do not need to have a diagnosis to get help.",
          "If your pain is not improving after two weeks, or the exercises make it worse, the Chartered Society of Physiotherapy says you could refer yourself to a physiotherapist. They will assess how you walk and move, and may offer a home exercise programme, advice on pain and activity levels, and hands-on treatment such as stretches, taping or a splint.",
        ],
      },
      {
        heading: "What a physiotherapist may offer",
        paragraphs: [
          "NICE's Clinical Knowledge Summary says the physiotherapy team may advise about progressive tendon loading exercises and stretches, and offer other treatments.",
          "Other options it mentions include rigid taping, which has limited evidence, and dry needling for calf muscle pain and stiffness in some people.",
        ],
      },
      {
        heading: "Steroid injections",
        paragraphs: [
          "NICE's Clinical Knowledge Summary advises against injecting steroids into or around the Achilles tendon. Reviews it cites note a lack of evidence of benefit, and an increased risk of the tendon partly or completely tearing.",
        ],
      },
      {
        heading: "Shockwave therapy",
        paragraphs: [
          "Extracorporeal shockwave therapy involves passing shockwaves through the skin to the affected area. NICE's Clinical Knowledge Summary says it may stimulate healing and ease pain, but one review notes that outcomes vary.",
          "NICE says the evidence raises no major safety concerns, but evidence on how well it works is inconsistent and limited in quality and quantity. It should only be used with special arrangements, and patients should understand the uncertainty about how well it works.",
        ],
      },
      {
        heading: "Specialists and surgery",
        paragraphs: [
          "Your GP may refer you to a hospital specialist if your symptoms continue despite simple measures. A referral to a sports doctor or orthopaedics may be considered if the diagnosis is uncertain, treatment is slow to work, or symptoms carry on after six months.",
          "Surgery may be considered after at least six months of treatment without an operation. If physiotherapy does not help, the NHS says an orthopaedic specialist may recommend surgery to remove damaged tissue.",
          "All orthotists, physiotherapists and podiatrists must be registered with the Health and Care Professions Council, and you can check a practitioner's credentials on its website.",
        ],
      },
    ],
    helps: [
      "Refer yourself to NHS community musculoskeletal services, if this is available in your area.",
      "Refer yourself to a physiotherapist if your pain is not improving after two weeks.",
      "Before shockwave therapy, expect to be told about the uncertainty and given clear written information.",
      "Check that a private practitioner is registered with the Health and Care Professions Council.",
    ],
    tryThisWeek: [
      "Check if you can self-refer to physio.",
      "Ask what a loading programme involves.",
      "Check a practitioner is registered.",
    ],
    ask: "What are my options if self-care has not worked, and what are the risks of each?",
    interactive: {
      kind: "flip-cards",
      title: "Further treatments, card by card",
      intro: "Turn each card to see when each treatment is used and what it involves.",
      cards: [
        { id: "physio", front: "Physiotherapy", when: "If self-care is not helping", back: "A home exercise programme, advice on pain and activity, and hands-on treatment such as taping." },
        { id: "loading", front: "Tendon loading programme", when: "Guided by a physiotherapist", back: "Exercises 2 to 3 times a week, built up based on your pain and what you can do." },
        { id: "steroid", front: "Steroid injection", when: "Not recommended", back: "Not advised into or around the Achilles tendon: no evidence of benefit and a higher risk of tearing." },
        { id: "shockwave", front: "Shockwave therapy", when: "Sometimes offered", back: "No major safety concerns, but evidence on how well it works is inconsistent." },
        { id: "surgery", front: "Surgery", when: "After at least six months", back: "May be considered if symptoms persist despite other treatment, to remove damaged tissue." },
      ],
    },
    sources: [CKS_MGMT, NHS_MSK, CSP_HELP, NHS_TEND, NICE_ESWT, NICE_ESWT_REC, BOFAS, AU_FOOT],
    quiz: {
      question: "What does NICE's Clinical Knowledge Summary say about steroid injections into the Achilles tendon?",
      options: [{ text: "It advises against them", right: true }, { text: "They are the first treatment to try" }, { text: "They cure it in a week" }],
      why: "NICE's Clinical Knowledge Summary advises against injecting steroids into or around the Achilles tendon.",
    },
  },
  {
    id: "ach-sport",
    kicker: "Staying active",
    question: "Can I keep running and playing sport with Achilles tendinopathy?",
    hook: "Runners get it more than most. Easing the load, building back slowly and warming up properly help you get back to it.",
    short: "Running and jumping sports put a lot of load on the Achilles tendon. The NHS suggests resting from running until the pain goes, and NICE's Clinical Knowledge Summary advises changing activity rather than complete rest. Re-injury is common if you go back too soon, so build up slowly.",
    sections: [
      {
        heading: "Why runners get it",
        paragraphs: [
          "Regular running can cause wear and tear to the Achilles tendon over time. One review cited by NICE estimates that 6 to 10% of runners have Achilles tendinopathy at any one time.",
          "The NHS says tendon problems are usually caused by sudden, sharp movements or repetitive exercise, such as running, jumping or throwing.",
        ],
      },
      {
        heading: "Can I keep running?",
        paragraphs: [
          "A sharp pain will stop you running altogether. The NHS says that even if the pain is not severe, it is a good idea to rest until the pain goes, and get it checked if it does not go away.",
          "NICE's Clinical Knowledge Summary advises changing activity rather than complete rest, continuing activities if the pain is tolerated, and restarting exercise when the pain is controlled.",
        ],
      },
      {
        heading: "Easing the load",
        paragraphs: [
          "The Chartered Society of Physiotherapy suggests reducing mileage or limiting hills, and pacing activity. The British Orthopaedic Foot and Ankle Society suggests warming up for longer, doing plenty of calf stretches, and a softer running surface.",
          "Arthritis UK describes swimming as working the whole body while putting less weight through your joints, and cycling as a good exercise for the lower body that is low impact.",
        ],
      },
      {
        heading: "Going back",
        paragraphs: [
          "Re-injury is common, particularly if a person returns to sport too soon. Studies cited by NICE give re-injury rates of 27 to 44% in amateur and elite athletes.",
          "When you go back, do not be tempted to increase the intensity or distance of your running too quickly. Do a similar run at least 3 or 4 times before you increase your pace or distance.",
        ],
      },
      {
        heading: "Warming up and the weekly total",
        paragraphs: [
          "Warm up before exercising and gently stretch afterwards. Five to 10 minutes of brisk walking or gentle jogging before you start will warm your muscles up and help prevent injury.",
          "Adults should aim for at least 150 minutes of moderate activity or 75 minutes of vigorous activity a week. Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        ],
      },
    ],
    helps: [
      "Rest from running until the pain goes, and get it checked if it does not go away.",
      "Reduce your mileage, limit hills and pace your activity.",
      "Warm up for longer and do plenty of calf stretches.",
      "Do a similar run at least 3 or 4 times before you increase your pace or distance.",
      "Do not start a new sport without some training or practice.",
    ],
    tryThisWeek: [
      "Cut back mileage and hills.",
      "Try a swim or a bike ride.",
      "Warm up for longer.",
    ],
    ask: "How much running or sport is right for me now, and how should I build back up?",
    interactive: {
      kind: "scenarios",
      title: "Keeping active",
      scenarios: [
        {
          id: "sharp",
          situation: "You feel a sharp pain in your Achilles during a run.",
          options: [{ text: "Stop and get it checked", best: true }, { text: "Run through it" }],
          why: "A sharp pain will stop you running altogether. Rest until the pain goes, and get it checked if it does not go away.",
        },
        {
          id: "hills",
          situation: "Your training plan has a hilly route this week.",
          options: [{ text: "Choose a flatter route for now", best: true }, { text: "Add extra hill repeats" }],
          why: "The Chartered Society of Physiotherapy suggests reducing mileage or limiting hills, and pacing activity.",
        },
        {
          id: "return",
          situation: "The pain has settled and you want to run again.",
          options: [{ text: "Build up slowly", best: true }, { text: "Go straight back to your longest run" }],
          why: "Do a similar run at least 3 or 4 times before you increase your pace or distance.",
        },
        {
          id: "cross",
          situation: "You want to keep fit while easing off running.",
          options: [{ text: "Try swimming or cycling", best: true }, { text: "Stop all exercise" }],
          why: "Swimming puts less weight through your joints, and cycling is a good exercise for the lower body that is low impact.",
        },
      ],
    },
    sources: [NHS_RUNNING, CKS_MGMT, CSP_TREAT, BOFAS, NHS_TEND, CKS_PREV, AU_EX_TYPE, CKS_PROG, NHS_ACTIVITY],
    quiz: {
      question: "How often does the NHS suggest doing a similar run before you increase your pace or distance?",
      options: [{ text: "At least 3 or 4 times", right: true }, { text: "Once" }, { text: "Never, increase every run" }],
      why: "Do a similar run at least 3 or 4 times before you increase your pace or distance.",
    },
  },
  {
    id: "ach-work",
    kicker: "Work",
    question: "How can I manage Achilles pain when my job keeps me on my feet?",
    hook: "Long hours standing still, safety boots and busy shifts. There are changes you and your employer can make, and staying in work helps recovery.",
    short: "Spending a long time standing still is one of the common factors in Achilles tendinopathy. You do not need to be symptom free to go back to work, and continuing to work helps recovery. Talking to your employer about reasonable adjustments, and the government's Access to Work scheme, can help you keep working.",
    sections: [
      {
        heading: "Work and recovery",
        paragraphs: [
          "Achilles tendinopathy can sometimes mean you need to take some time off work to help recovery. How long you are off will depend on your condition and your role at work.",
          "You do not need to be symptom free before you consider returning to work. Continuing to go to work, or returning to work as soon as is possible for you, will help your recovery.",
          "NICE's Clinical Knowledge Summary notes that it can affect quality of life and daily functioning, including work.",
        ],
      },
      {
        heading: "Standing and walking",
        paragraphs: [
          "NHS inform lists spending a long time standing still as one of the common factors in Achilles tendinopathy.",
          "For a new ankle problem, NHS inform suggests that in the first 24 to 48 hours you avoid long periods on your feet, raise your ankle when resting, and move it gently for 10 to 20 seconds every hour when you are awake.",
          "The NHS advises not walking or standing for long periods when you have ankle pain.",
        ],
      },
      {
        heading: "Shoes and breaks",
        paragraphs: [
          "All safety shoes or boots should have a British Kitemark or CE mark. If your safety footwear does not fit properly or makes your pain worse, ask about changing it for footwear with greater depth and cushioning.",
          "Arthritis UK lists standing for long periods among the parts of physical jobs that can be challenging, and suggests building some movement and stretching into your work routine. Health and safety rules include a rest break if you work for 6 hours or more.",
        ],
      },
      {
        heading: "Talking to your employer",
        paragraphs: [
          "If physical parts of your work are challenging, Arthritis UK suggests discussing it with your line manager, health and safety rep, human resources or union rep. Your employer may arrange a health and safety or occupational health assessment.",
          "Employers have to make reasonable adjustments so that workers with disabilities or health conditions are not substantially disadvantaged. These can include doing things another way, changing equipment, or a phased return with flexible hours.",
          "Arthritis UK suggests thinking about which tasks could be reviewed, adapted or swapped, and writing down what you agree with your employer.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. It can give a grant to help pay for things like specialist equipment, physical changes to your workplace, or the costs of travelling to work if you cannot use public transport.",
          "An Access to Work grant will not affect any other benefits you get, and you will not have to pay it back. It will not pay for reasonable adjustments, which are the changes your employer is legally required to make.",
        ],
      },
    ],
    helps: [
      "Keep going to work, or return as soon as is possible for you.",
      "Do not walk or stand for long periods while your ankle is painful.",
      "Ask about changing safety footwear that makes your pain worse for footwear with greater depth and cushioning.",
      "Talk to your line manager, human resources or union rep about the physical parts of your job.",
      "Check whether you are eligible for an Access to Work grant.",
    ],
    tryThisWeek: [
      "Break up long spells on your feet.",
      "Check your work boots.",
      "Talk to your manager about your job.",
    ],
    ask: "Should I keep working as normal, and what changes at work would help my tendon recover?",
    interactive: {
      kind: "scenarios",
      title: "On your feet at work",
      scenarios: [
        {
          id: "symptom-free",
          situation: "Your Achilles still aches and you are due back at work.",
          options: [{ text: "Talk about returning, with changes", best: true }, { text: "Wait until all pain has gone" }],
          why: "You do not need to be symptom free before you consider returning to work. Continuing to go to work will help your recovery.",
        },
        {
          id: "boots",
          situation: "Your safety boots make your pain worse.",
          options: [{ text: "Ask about deeper, cushioned boots", best: true }, { text: "Put up with them" }],
          why: "If your safety footwear makes your pain worse, ask about changing it for footwear with greater depth and cushioning.",
        },
        {
          id: "manager",
          situation: "Standing tasks are getting harder.",
          options: [{ text: "Talk to your manager or HR", best: true }, { text: "Say nothing and carry on" }],
          why: "If physical parts of your work are challenging, discuss it with your line manager, health and safety rep, human resources or union rep.",
        },
        {
          id: "equipment",
          situation: "You need equipment your employer cannot easily fund.",
          options: [{ text: "Look into Access to Work", best: true }, { text: "Go without" }],
          why: "Access to Work can give a grant to help pay for things like specialist equipment or physical changes to your workplace.",
        },
      ],
    },
    sources: [NHSI_ACH, NHSI_ANKLE, CKS_COMP, NHS_ANKLE, AU_WORK_SAFE, AU_FOOTCARE, GOV_ADJUST, AU_ADJUSTMENTS, GOV_ATW],
    quiz: {
      question: "Do you need to be symptom free before going back to work?",
      options: [{ text: "No", right: true }, { text: "Yes, completely" }, { text: "Only after a year" }],
      why: "You do not need to be symptom free before you consider returning to work.",
    },
  },
  {
    id: "ach-weight",
    kicker: "Weight",
    question: "Does weight make a difference to the Achilles tendon?",
    hook: "Every step loads the tendon. Weight is one of many factors, and if you choose to make changes, small ones count.",
    short: "Being overweight is one of the health conditions NHS inform links to Achilles tendinopathy, alongside diabetes and inflammatory arthritis. NICE's Clinical Knowledge Summary includes weight management among the things that can help reduce the risk of it coming back. If you choose to lose weight, small realistic changes and free NHS support can help.",
    sections: [
      {
        heading: "Why weight can matter",
        paragraphs: [
          "NHS inform lists being overweight among the health conditions linked to Achilles tendinopathy, alongside diabetes and inflammatory arthritis. NICE's Clinical Knowledge Summary includes a higher body mass index among the factors that may affect the tendon.",
          "It is one of many possible factors, alongside changes in activity, footwear, age and other health conditions.",
        ],
      },
      {
        heading: "Part of looking after the tendon",
        paragraphs: [
          "NICE's Clinical Knowledge Summary suggests looking at things that can be changed to reduce the risk of re-injury, including weight management to maintain a healthy body mass index, and footwear advice.",
          "For heel pain, the NHS suggests trying to lose weight if you are overweight. Arthritis UK says being overweight can put more strain on your joints, particularly those in the legs, so losing even a small amount of weight can make a difference.",
        ],
      },
      {
        heading: "Knowing where you are",
        paragraphs: [
          "The easiest way to work out if you are a healthy weight is to use a BMI calculator. BMI is only a rough guide, and a healthcare professional will look at it along with other factors.",
          "The NHS suggests using its BMI calculator alongside its waist to height ratio calculator.",
        ],
      },
      {
        heading: "Small, realistic changes",
        paragraphs: [
          "Losing weight is not always easy, and if you have struggled with weight loss before, you are not alone. The NHS suggests small realistic changes to what you eat and drink, how much you move, and how well you sleep.",
          "The free NHS Weight Loss Plan app gives a 12-week plan to help build healthier habits. A doctor, practice nurse or registered dietitian can also give advice.",
        ],
      },
      {
        heading: "Moving in a way that suits you",
        paragraphs: [
          "Exercise is still important whatever your weight. Swimming is a good way to improve and maintain your fitness because the water supports your body weight, and cycling is low impact.",
          "If you have a medical condition, a special diet for your health, or an eating disorder now or in the past, talk to a GP or healthcare professional before making any changes to your lifestyle.",
        ],
      },
    ],
    helps: [
      "Use the NHS BMI calculator to find out if you are a healthy weight.",
      "If you choose to lose weight, make small realistic changes to what you eat and drink, how much you move and how well you sleep.",
      "Try the free NHS Weight Loss Plan app, which gives a 12-week plan.",
      "Ask a doctor, practice nurse or registered dietitian for advice.",
      "Try swimming, where the water supports your body weight.",
    ],
    tryThisWeek: [
      "Check your BMI.",
      "Make one small, realistic change.",
      "Try a swim.",
    ],
    ask: "Would changing my weight help my Achilles, and what support is available to me?",
    interactive: {
      kind: "scenarios",
      title: "Weight and your tendon",
      scenarios: [
        {
          id: "small",
          situation: "You can only picture losing a little weight.",
          options: [{ text: "It can still make a difference", best: true }, { text: "It is not worth it" }],
          why: "Losing even a small amount of weight can make a difference.",
        },
        {
          id: "struggled",
          situation: "You have struggled to lose weight before.",
          options: [{ text: "Small, realistic changes, with support", best: true }, { text: "Give up on it" }],
          why: "If you have struggled with weight loss before, you are not alone. The NHS suggests small realistic changes.",
        },
        {
          id: "walking",
          situation: "Walking for exercise makes your Achilles sore.",
          options: [{ text: "Try swimming or cycling", best: true }, { text: "Stop all activity" }],
          why: "Swimming is a good way to improve and maintain your fitness because the water supports your body weight, and cycling is low impact.",
        },
        {
          id: "condition",
          situation: "You have a medical condition and want to change your diet.",
          options: [{ text: "Talk to a GP first", best: true }, { text: "Start a new diet straight away" }],
          why: "If you have a medical condition, talk to a GP or healthcare professional before making any changes to your lifestyle.",
        },
      ],
    },
    sources: [NHSI_ACH, CKS_RISK, CKS_MGMT, NHS_HEEL, AU_WEIGHT, NHS_LOSE_WEIGHT, AU_FOOT, AU_EX_TYPE],
    quiz: {
      question: "What does Arthritis UK say about losing weight?",
      options: [{ text: "Even a small amount can make a difference", right: true }, { text: "Only a large amount helps" }, { text: "It never helps joints" }],
      why: "Arthritis UK says being overweight can put more strain on your joints, particularly those in the legs, so losing even a small amount of weight can make a difference.",
    },
  },
  {
    id: "ach-coming-back",
    kicker: "Prevention",
    question: "How can I stop Achilles tendinopathy coming back?",
    hook: "Re-injury is common. Spotting the early signs, keeping the calf strong and building up slowly all help keep it settled.",
    short: "Re-injury is common, especially after returning to sport too soon. NICE's Clinical Knowledge Summary advises learning to spot early signs and adjusting activity early. Warming up, supportive shoes, regular breaks from repetitive exercise, and building up activity slowly all help reduce the chance of it coming back.",
    sections: [
      {
        heading: "Why it can come back",
        paragraphs: [
          "Re-injury is common, particularly if a person returns to sporting activities too soon, says one review cited by NICE. In one long-term study, 41% of people later had overuse symptoms in the Achilles tendon of the other leg.",
          "You cannot always prevent tendon problems, but there are things you can do to help reduce the chance of a tendon injury.",
        ],
      },
      {
        heading: "Spotting it early",
        paragraphs: [
          "NICE's Clinical Knowledge Summary advises learning to recognise early signs of symptoms returning, and adjusting tendon load and activity early, to reduce the risk of re-injury and shorten recovery.",
          "It also suggests looking at things that can be changed, such as weight, footwear and medicines that may affect tendons.",
        ],
      },
      {
        heading: "Habits that help",
        paragraphs: [
          "Warm up before exercising and gently stretch afterwards, wear supportive shoes or insoles for exercise, and take regular breaks from repetitive exercises.",
          "Do not overexercise tired muscles, start a new sport without some training or practice, or keep doing the same repetitive exercises.",
        ],
      },
      {
        heading: "Keep building strength",
        paragraphs: [
          "NHS inform says keeping active can help prevent a recurrence, keep your other muscles and joints strong and flexible, and help you aim for a healthy body weight. Remember to warm up before sports.",
          "The Chartered Society of Physiotherapy lists gentle calf strengthening and stretches, pacing activity and well-fitting shoes among the ways to reduce the load on the tendon. A review cited by NICE says a progressive loading programme reduces the risk of re-injury.",
        ],
      },
      {
        heading: "Building up, and getting help",
        paragraphs: [
          "Do not be tempted to increase the intensity or distance of your running too quickly. Do a similar run at least 3 or 4 times before you increase your pace or distance.",
          "Talk to a healthcare professional if your symptoms get worse. The Chartered Society of Physiotherapy says a physiotherapist can guide you on graded strengthening, footwear advice and changing your activity level.",
        ],
      },
    ],
    helps: [
      "Watch for early signs of symptoms returning, and adjust your activity early.",
      "When you exercise, warm up for longer and do plenty of calf stretches.",
      "Take regular breaks from repetitive exercises.",
      "Do a similar run at least 3 or 4 times before you increase your pace or distance.",
      "Talk to a healthcare professional if your symptoms get worse.",
    ],
    tryThisWeek: [
      "Notice early signs and ease off.",
      "Warm up for longer.",
      "Build up runs slowly.",
    ],
    ask: "What can I do to stop this coming back, and what early signs should I watch for?",
    interactive: {
      kind: "scenarios",
      title: "Keeping it away",
      scenarios: [
        {
          id: "twinge",
          situation: "Your Achilles feels stiff again after a busy week of training.",
          options: [{ text: "Adjust your load and activity early", best: true }, { text: "Ignore it and train harder" }],
          why: "Recognise early signs of symptoms returning, and adjust tendon load and activity early, to reduce the risk of re-injury.",
        },
        {
          id: "stop-exercises",
          situation: "It feels better, so you think about dropping your calf exercises.",
          options: [{ text: "Keep up calf strengthening", best: true }, { text: "Stop them for good" }],
          why: "A review cited by NICE says a progressive loading programme reduces the risk of re-injury.",
        },
        {
          id: "new-sport",
          situation: "Friends invite you to start playing squash.",
          options: [{ text: "Build up with some training first", best: true }, { text: "Play a full match straight away" }],
          why: "Do not start a new sport without some training or practice.",
        },
        {
          id: "race",
          situation: "You are training for a longer race.",
          options: [{ text: "Increase distance gradually", best: true }, { text: "Double your distance this week" }],
          why: "Do not be tempted to increase the intensity or distance of your running too quickly.",
        },
      ],
    },
    sources: [CKS_PROG, CKS_MGMT, NHS_TEND, NHSI_ANKLE, CSP_TREAT, NHS_RUNNING, CSP_LIVING, BOFAS, NHSI_ACH],
    quiz: {
      question: "What does NICE's Clinical Knowledge Summary advise to reduce the risk of re-injury?",
      options: [{ text: "Spot early signs and adjust activity early", right: true }, { text: "Stop all exercise for good" }, { text: "Ignore mild symptoms" }],
      why: "NICE's Clinical Knowledge Summary advises learning to recognise early signs of symptoms returning, and adjusting tendon load and activity early, to reduce the risk of re-injury and shorten recovery.",
    },
  },
];
