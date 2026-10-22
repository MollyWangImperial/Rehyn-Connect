import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Tennis elbow page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Arthritis UK (the
// charity formerly called Versus Arthritis) and the Chartered Society of Physiotherapy, with NICE's Clinical
// Knowledge Summary on tennis elbow and NICE's guidance on shockwave therapy and blood injections. Exercises are
// described only as the sources describe them. General information only; it never replaces what a person's own
// GP, physiotherapist or surgeon tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/conditions/elbow-pain/${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE Clinical Knowledge Summaries: ${label}`, url: `https://cks.nice.org.uk/topics/tennis-elbow/${path}` });
const nice = (label: string, path: string): LearnSource => ({ label: `NICE: ${label}`, url: `https://www.nice.org.uk/guidance/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_TE = nhs("Tennis elbow", "conditions/tennis-elbow/");
const NHS_RSI = nhs("Repetitive strain injury (RSI)", "conditions/repetitive-strain-injury-rsi/");
const NHS_PHYSIO = nhs("Physiotherapy", "tests-and-treatments/physiotherapy/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");

const AU_ELBOW = au("Elbow pain", "understanding-arthritis/conditions/elbow-pain/");
const AU_EX_ELBOWS = au("Exercises for the elbows", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-elbows/");

const CSP_CAUSES = csp("Causes of elbow pain", "causes-elbow-pain");
const CSP_TREATMENT = csp("Treatment for elbow pain", "treatment-elbow-pain");
const CSP_HELP = csp("Getting help for elbow pain", "getting-help-elbow-pain");
const CSP_LIVING = csp("Living with elbow pain", "living-elbow-pain");
const CSP_EXERCISES = csp("Video exercises for elbow pain", "video-exercises-elbow-pain");

const CKS_SUMMARY = cks("Tennis elbow", "");
const CKS_CAUSES = cks("Tennis elbow: what causes it?", "background-information/causes/");
const CKS_PREVALENCE = cks("Tennis elbow: how common is it?", "background-information/prevalence/");
const CKS_PROGNOSIS = cks("Tennis elbow: what is the prognosis?", "background-information/prognosis/");
const CKS_COMPLICATIONS = cks("Tennis elbow: what are the complications?", "background-information/complications/");
const CKS_DIAGNOSIS = cks("Tennis elbow: how should I make a diagnosis?", "diagnosis/diagnosis/");
const CKS_DIFFERENTIAL = cks("Tennis elbow: what else might it be?", "diagnosis/differential-diagnosis/");
const CKS_MANAGEMENT = cks("Tennis elbow: management", "management/management/");

const NICE_ESWT = nice("Extracorporeal shockwave therapy for refractory tennis elbow (recommendations)", "htg201/chapter/1-Recommendations");
const NICE_ESWT_PROCEDURE = nice("Extracorporeal shockwave therapy for refractory tennis elbow (the procedure)", "htg201/chapter/2-The-procedure");
const NICE_BLOOD = nice("Autologous blood injection for tendinopathy", "htg299/chapter/1-Recommendations");

const GOV_ACCESS = gov("Access to Work", "access-to-work");
const GOV_ADJUSTMENTS = gov("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");

export const tennisElbowAnswers: LearnArticle[] = [
  {
    id: "te-what-it-is",
    kicker: "Understanding",
    question: "What is tennis elbow, if I don't play tennis?",
    hook: "A sore outer elbow that has very little to do with racquets. It starts in the tendons that help you straighten your wrist.",
    short: "Tennis elbow is a condition that causes pain around the outside of the elbow, from the tendons there. Despite the name, playing tennis is not the most common cause. It usually goes away with rest, but it can sometimes last over a year.",
    sections: [
      {
        heading: "Pain on the outside of the elbow",
        paragraphs: [
          "Tennis elbow is a condition that causes pain around the outside of the elbow. It usually goes away with rest, but it can sometimes last over a year.",
          "It is one of the most common causes of elbow pain. Tennis elbow is pain from the tendons on the outside of the elbow, and golfer's elbow is pain on the inside.",
        ],
      },
      {
        heading: "How the elbow is built",
        paragraphs: [
          "The elbow joint is where the long bone at the top of your arm, the humerus, meets the two bones in your forearm, the radius and the ulna. It is a hinge joint, and it allows you to bend your arm.",
          "The end of the humerus has two bony parts that you can feel at either side of your elbow. The one on the outside is called the lateral epicondyle. Muscles attached to the outside of the humerus help you straighten your wrist and fingers.",
        ],
      },
      {
        heading: "What happens to the tendons",
        paragraphs: [
          "Tendons are strong cords that connect muscle to bone. The NHS describes tennis elbow as the tendons in your elbow becoming inflamed.",
          "NICE's guidance for GPs describes it as long-lasting wear in the tendons that attach the forearm muscles to the outer bony point of the elbow. It is also known as lateral epicondylitis, or lateral elbow pain.",
        ],
      },
      {
        heading: "Not usually from tennis",
        paragraphs: [
          "Despite the name, playing tennis is not the most common cause. Tennis elbow is an overuse injury linked with activities involving repetitive actions of the wrist and hand.",
          "Racquet sports are the cause in fewer than 10% of people with tennis elbow.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "Anyone can get tennis elbow, but the NHS says it is more common in people between 35 and 54 years of age. Women and men are affected equally.",
          "Most people get better within a year. Often all that is needed is to stop or change any activities causing the problem or making it worse, alongside some self-care steps you can do at home.",
        ],
      },
    ],
    helps: [
      "Avoid or reduce activities that make your symptoms worse.",
      "Use paracetamol, or rub an anti-inflammatory gel onto the affected area, to help ease the pain.",
      "Try a hot or cold pack, or a bag of frozen peas, wrapped in a towel on the affected area for up to 20 minutes every 2 to 3 hours.",
      "Try simple exercises, such as bending and straightening your arm.",
      "See a GP if you still have elbow pain after resting your elbow and trying self-care treatments for at least 2 weeks.",
    ],
    tryThisWeek: [
      "Reduce activities that make it worse.",
      "Try a wrapped hot or cold pack.",
      "Try bending and straightening your arm.",
    ],
    ask: "Is this tennis elbow, or could something else be causing the pain?",
    interactive: {
      kind: "flip-cards",
      title: "Inside the outer elbow",
      intro: "Turn each card to see what each part does.",
      cards: [
        { id: "humerus", front: "Humerus", when: "The long bone at the top of the arm", back: "Meets the radius and ulna at the elbow, a hinge joint that lets you bend your arm." },
        { id: "epicondyle", front: "Lateral epicondyle", when: "The bony point on the outside", back: "One of two bony parts of the humerus you can feel at either side of your elbow." },
        { id: "muscles", front: "Forearm muscles", when: "Attached to the outside of the humerus", back: "Help you straighten your wrist and fingers." },
        { id: "tendons", front: "Tendons", when: "Where the pain comes from", back: "Strong cords that connect muscle to bone. In tennis elbow, the tendons on the outside of the elbow become painful." },
        { id: "radius", front: "Radius", when: "One of the two forearm bones", back: "Its upper part can rotate, so you can twist your forearm." },
      ],
    },
    sources: [NHS_TE, AU_ELBOW, CKS_SUMMARY, CSP_CAUSES, CKS_CAUSES],
    quiz: {
      question: "Where is the pain of tennis elbow felt?",
      options: [{ text: "On the outside of the elbow", right: true }, { text: "On the inside of the elbow" }, { text: "At the back of the elbow" }],
      why: "Tennis elbow is pain from the tendons on the outside of the elbow, and golfer's elbow is pain on the inside.",
    },
  },
  {
    id: "te-causes",
    kicker: "Understanding",
    question: "What causes tennis elbow?",
    hook: "A screwdriver, a mouse, a heavy box. The usual culprit is the same grip and twist, done over and over.",
    short: "Tennis elbow comes from activities that involve gripping something and repeatedly twisting the wrist and forearm. It more commonly follows repetitive work or overuse than sport. Repeated overuse causes tiny tears near where the tendon attaches to the outer elbow.",
    sections: [
      {
        heading: "Gripping and twisting",
        paragraphs: [
          "You can get tennis elbow if you do activities that involve gripping something and repeatedly twisting your wrist and forearm.",
          "Arthritis UK describes it as an overuse injury linked with repetitive actions of the wrist and hand. It can start as a result of sport, but more commonly after repetitive work or overuse.",
        ],
      },
      {
        heading: "Everyday activities that can cause it",
        paragraphs: [
          "The NHS lists computer work, such as typing or using a mouse, manual tasks, such as sewing or using a screwdriver, and leisure activities, such as tennis or playing a musical instrument.",
          "People who are continually gripping and twisting, such as carpenters, plasterers and people who use a computer mouse, may be at risk. Repetitive actions combined with weight, such as lifting heavy boxes, can also cause it.",
        ],
      },
      {
        heading: "What happens inside the tendon",
        paragraphs: [
          "Repeated overuse causes tiny tears near where the forearm tendon attaches to the outer bony point of the elbow. This starts a process of wear in the tendon.",
          "Activities linked with it include repeatedly bending and straightening the elbow, repeatedly turning the forearm, lifting heavy loads, and often pulling the wrist back against resistance.",
        ],
      },
      {
        heading: "It often starts slowly",
        paragraphs: [
          "Symptoms often come on gradually, without any clear event, but they may follow an injury or a spell of more activity. The pain is usually in the arm you use most.",
          "Work and hobbies that may bring it on include construction work, assembly line work, using vibrating tools, typing, playing the piano, playing tennis and kayaking.",
        ],
      },
      {
        heading: "Not everyone who does these jobs gets it",
        paragraphs: [
          "Repetitive or strenuous work does not always cause repetitive strain injury. Many people do the same job for years without having a problem.",
          "Pain in a part of the body like the arm is often caused by a combination of things, including ageing.",
        ],
      },
    ],
    helps: [
      "Avoid or reduce activities that make your symptoms worse.",
      "Stop or change the activity that caused it in the first place: this should dramatically improve your symptoms.",
      "If tasks at work involve repetitive movements, such as using a screwdriver or painting, discuss this with an occupational therapist.",
      "Speak to your employer about ways they can help you continue working, like changing the way you work.",
    ],
    tryThisWeek: [
      "Reduce activities that make it worse.",
      "Change the activity that caused it.",
      "Talk to your employer about how you work.",
    ],
    ask: "Could my work or hobbies be causing this, and what could I change?",
    interactive: {
      kind: "risk-check",
      title: "What might be behind it?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "grip", label: "Gripping and twisting, over and over", note: "Activities that involve gripping and repeatedly twisting the wrist and forearm can cause tennis elbow.", changeable: true },
        { id: "computer", label: "Typing or using a mouse", note: "Computer work is one of the activities the NHS lists.", changeable: true },
        { id: "tools", label: "Screwdrivers or vibrating tools", note: "Manual tasks such as using a screwdriver, and using vibrating tools, are linked with it.", changeable: true },
        { id: "lifting", label: "Lifting heavy boxes", note: "Repetitive actions combined with weight can also cause it.", changeable: true },
        { id: "leisure", label: "Tennis or a musical instrument", note: "Leisure activities like these can cause it, though racquet sports cause fewer than 10% of cases.", changeable: true },
        { id: "age", label: "Being 35 to 54", note: "Anyone can get tennis elbow, but it is more common between these ages.", changeable: false },
      ],
    },
    sources: [NHS_TE, AU_ELBOW, CKS_CAUSES, CKS_DIAGNOSIS, NHS_RSI, CSP_CAUSES],
    quiz: {
      question: "What is tennis elbow most often linked with?",
      options: [{ text: "Repetitive actions of the wrist and hand", right: true }, { text: "Playing tennis" }, { text: "A sudden fall" }],
      why: "Arthritis UK describes it as an overuse injury linked with repetitive actions of the wrist and hand.",
    },
  },
  {
    id: "te-symptoms",
    kicker: "Symptoms",
    question: "What does tennis elbow feel like, and how is it different from golfer's elbow?",
    hook: "Outside or inside: the side of the elbow that hurts tells the two apart.",
    short: "The main symptom of tennis elbow is pain on the outside of the elbow, often worse when gripping, lifting or moving the wrist. Golfer's elbow is a similar condition that affects the tendons on the inside. See a GP if the pain has not eased after 2 weeks of rest and self-care.",
    sections: [
      {
        heading: "The main symptom",
        paragraphs: [
          "The main symptom of tennis elbow is pain on the outside of your elbow. It may range from mild discomfort when you move your arm to constant pain that can affect your sleep.",
          "It may be worse when lifting or bending your arm, gripping objects or moving your wrist.",
        ],
      },
      {
        heading: "Other symptoms",
        paragraphs: [
          "Other symptoms include tenderness or swelling in your elbow, pain in your forearm, and difficulty fully straightening your arm.",
          "Everyday jobs can become hard, such as raising a cup, shaking hands, shaving, or lifting bags with the arm straight.",
        ],
      },
      {
        heading: "Golfer's elbow: the inside",
        paragraphs: [
          "Tennis elbow and golfer's elbow are two separate but similar conditions in which tendons become painful. Tennis elbow affects tendons on the outside of the elbow, and golfer's elbow affects tendons on the inside.",
          "Tennis elbow is the more common of the two. NICE's guidance for GPs says it is seven times more common than golfer's elbow.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if you still have elbow pain after resting your elbow and trying self-care treatments for at least 2 weeks.",
          "Arthritis UK also advises seeing a doctor if you have tingling, numbness or weakness in your arm or hand.",
        ],
      },
      {
        heading: "When to get help urgently",
        paragraphs: [
          "Go to a hospital's accident and emergency department straight away if you have severe pain that stops you moving your arm, swelling, fever, heat and redness. These can sometimes be signs of infection. Go straight away too if you think you have fractured your elbow.",
          "Seek medical help more urgently if you have pain and difficulty moving your elbow after an injury, or severe pain and a snapping feeling in the front of your elbow when heavy lifting. A torn tendon near the elbow may need urgent surgery, so go to A&E or book an urgent appointment with your GP.",
        ],
      },
    ],
    helps: [
      "See a GP if you still have elbow pain after at least 2 weeks of rest and self-care.",
      "See a doctor if you have tingling, numbness or weakness in your arm or hand.",
      "Go to A&E straight away if you have severe pain that stops you moving your arm, with swelling, fever, heat and redness.",
      "Avoid or reduce activities that make your symptoms worse.",
    ],
    tryThisWeek: [
      "See a GP if no better after 2 weeks.",
      "Tell a doctor about tingling or numbness.",
      "Reduce activities that make it worse.",
    ],
    ask: "Is this tennis elbow or golfer's elbow, and is there anything else I should watch for?",
    interactive: {
      kind: "signs",
      title: "What to tell the GP",
      intro: "Tick what you have noticed, to take to your appointment.",
      signs: [
        "Pain on the outside of the elbow",
        "Pain that affects my sleep",
        "Pain when gripping or lifting",
        "Tenderness or swelling in the elbow",
        "Pain in my forearm",
        "Difficulty fully straightening my arm",
        "Tingling, numbness or weakness in my arm or hand",
      ],
      after: "Go to A&E straight away if you have severe pain that stops you moving your arm, with swelling, fever, heat and redness, or if you think you have fractured your elbow.",
      copyHeading: "My elbow symptoms",
    },
    sources: [NHS_TE, AU_ELBOW, CSP_CAUSES, CKS_SUMMARY, CKS_PREVALENCE],
    quiz: {
      question: "Which tendons does golfer's elbow affect?",
      options: [{ text: "Those on the inside of the elbow", right: true }, { text: "Those on the outside of the elbow" }, { text: "Those in the shoulder" }],
      why: "Tennis elbow affects tendons on the outside of the elbow, and golfer's elbow affects tendons on the inside.",
    },
  },
  {
    id: "te-how-long",
    kicker: "Recovery",
    question: "How long does tennis elbow last?",
    hook: "Weeks for some, a year or more for others. Most people do get better, even if it takes time.",
    short: "Tennis elbow usually gets better after resting the arm for a few weeks, but it can sometimes last over a year. Arthritis UK says it can last between six months and two years, and most people get better within a year. It can come back.",
    sections: [
      {
        heading: "Usually, it gets better",
        paragraphs: [
          "Tennis elbow usually gets better after resting your arm for a few weeks, but it can sometimes last longer, and sometimes over a year.",
          "The Chartered Society of Physiotherapy says most common causes of elbow pain get better naturally over time. Be patient though, as this can take several months.",
        ],
      },
      {
        heading: "Months, not days",
        paragraphs: [
          "Arthritis UK says tennis elbow can last between six months and two years, and most people get better within a year.",
          "NICE's guidance for GPs says most people improve within 3 to 6 months. It also says about 80 to 90% of people see a big improvement within 12 to 24 months, even without formal treatment.",
        ],
      },
      {
        heading: "What can slow it down",
        paragraphs: [
          "Things linked with more pain at 12 months include very bad pain at the start, having symptoms for longer before treatment, and neck or shoulder pain as well.",
          "Others include older age, earlier episodes, the arm you use most being affected, manual or repetitive work, little support from other people, and smoking or heavy drinking.",
        ],
      },
      {
        heading: "Checkpoints along the way",
        paragraphs: [
          "See a GP if you still have pain after at least 2 weeks of rest and self-care. Physiotherapy may help if your symptoms have not improved after trying treatments at home for 6 weeks.",
          "Surgery may be an option if you still have tennis elbow after 6 to 12 months.",
        ],
      },
      {
        heading: "It can come back",
        paragraphs: [
          "Unfortunately, tennis elbow and golfer's elbow can both return. Physiotherapy may be useful to help build up the strength in your elbow and prevent the condition returning.",
        ],
      },
    ],
    helps: [
      "Rest your arm: tennis elbow usually gets better after a few weeks of rest.",
      "Be patient, as getting better can take several months.",
      "See a GP if you still have pain after at least 2 weeks of rest and self-care.",
      "Ask about physiotherapy if treatments at home have not helped after 6 weeks.",
    ],
    tryThisWeek: [
      "Rest the arm for a few weeks.",
      "Be patient with slow progress.",
      "See a GP if no better after 2 weeks.",
    ],
    ask: "How long should I expect this to take, and when should we review it?",
    interactive: {
      kind: "timeline",
      title: "Milestones over the months",
      steps: [
        { id: "two-weeks", when: "2 weeks", title: "Not better yet?", points: ["See a GP if you still have pain after rest and self-care."] },
        { id: "six-weeks", when: "6 weeks", title: "Physiotherapy", points: ["May help if treatments at home have not worked."] },
        { id: "three-six", when: "3 to 6 months", title: "Most improve", points: ["NICE's guidance for GPs says most people improve by now."] },
        { id: "six-twelve", when: "6 to 12 months", title: "Still there?", points: ["Surgery may be an option if it has not gone."] },
        { id: "year", when: "Within a year", title: "Most get better", points: ["Arthritis UK says it can last six months to two years.", "It can come back."] },
      ],
    },
    sources: [NHS_TE, AU_ELBOW, CKS_PROGNOSIS, CKS_MANAGEMENT, CSP_LIVING],
    quiz: {
      question: "How long can tennis elbow last, according to Arthritis UK?",
      options: [{ text: "Between six months and two years", right: true }, { text: "A few days at most" }, { text: "Always for life" }],
      why: "Arthritis UK says tennis elbow can last between six months and two years, and most people get better within a year.",
    },
  },
  {
    id: "te-self-care",
    kicker: "Treatment",
    question: "What can I do myself: rest, ice or painkillers?",
    hook: "Less of what hurts, a wrapped cold pack, a gel or a tablet. And an elbow that keeps moving.",
    short: "Avoid or reduce the activities that make it worse, but do not rest the elbow for too long. A wrapped hot or cold pack, paracetamol or an anti-inflammatory gel can ease the pain. Do not smoke or go near naked flames if you use ibuprofen gel.",
    sections: [
      {
        heading: "Rest from what hurts",
        paragraphs: [
          "Avoid or reduce activities that make your symptoms worse. The Chartered Society of Physiotherapy suggests reducing or changing these activities for two to four weeks at first.",
          "It is important not to rest for too long. Lack of movement makes the joint stiffen and the muscles around the elbow weaken, so keep the elbow moving to stop it stiffening up.",
        ],
      },
      {
        heading: "Heat or cold",
        paragraphs: [
          "Try a hot or cold pack, or a bag of frozen peas, wrapped in a towel on the affected area for up to 20 minutes every 2 to 3 hours.",
          "Do not put a heat or ice pack directly onto your skin, as this could burn or irritate it. Do not apply heat if the elbow is swollen or you have just injured it, as this can make it worse.",
        ],
      },
      {
        heading: "Painkillers and gels",
        paragraphs: [
          "Paracetamol, or an anti-inflammatory gel rubbed onto the affected area, can help ease the pain. A GP may give you anti-inflammatory tablets.",
          "Do not smoke or go near naked flames if you are using ibuprofen gel. It is flammable and there is a risk of severe burns.",
        ],
      },
      {
        heading: "Using medicines safely",
        paragraphs: [
          "Anti-inflammatory medicines such as ibuprofen may cause side effects in people with other medical problems, such as asthma or a stomach ulcer. If you have stomach problems after taking them, stop taking the tablets and see your doctor.",
          "Do not take ibuprofen tablets for more than 10 days, or paracetamol for more than 3 days, unless a doctor tells you to. Speak to a pharmacist or doctor if you are not sure whether you can take them.",
        ],
      },
      {
        heading: "Keep using the arm",
        paragraphs: [
          "It is much better to continue to use your elbow and adjust how you do things to make it more comfortable. This may mean doing jobs in short bursts with regular breaks.",
          "If the pain is more severe, try to avoid strenuous activity and take simple painkillers like paracetamol.",
        ],
      },
    ],
    helps: [
      "Avoid or reduce activities that make your symptoms worse.",
      "Use a hot or cold pack wrapped in a towel for up to 20 minutes every 2 to 3 hours.",
      "Use paracetamol, or rub an anti-inflammatory gel onto the affected area, to help ease the pain.",
      "Keep the elbow moving to stop it stiffening up.",
      "Do jobs in short bursts with regular breaks rather than all in one go.",
    ],
    tryThisWeek: [
      "Cut back on what makes it worse.",
      "Try a wrapped hot or cold pack.",
      "Do jobs in short bursts.",
    ],
    ask: "Which painkiller or gel is safe for me, and for how long?",
    interactive: {
      kind: "scenarios",
      title: "Easing a sore elbow",
      scenarios: [
        {
          id: "gel",
          situation: "You have rubbed ibuprofen gel on your elbow and want a cigarette.",
          options: [{ text: "Do not smoke or go near flames", best: true }, { text: "It is fine once the gel feels dry" }],
          why: "Do not smoke or go near naked flames if you are using ibuprofen gel. It is flammable and there is a risk of severe burns.",
        },
        {
          id: "swollen",
          situation: "Your elbow is swollen and you reach for a hot water bottle.",
          options: [{ text: "Use a wrapped cold pack instead", best: true }, { text: "Put the heat on the swelling" }],
          why: "Do not apply heat if the elbow is swollen or you have just injured it, as this can make it worse.",
        },
        {
          id: "rest",
          situation: "It hurts, so you plan to stop using the arm completely.",
          options: [{ text: "Keep it moving, adjusting how you do things", best: true }, { text: "Keep it still for weeks" }],
          why: "It is much better to continue to use your elbow and adjust how you do things to make it more comfortable.",
        },
      ],
    },
    sources: [NHS_TE, AU_ELBOW, CSP_TREATMENT, CSP_LIVING, NHS_IBUPROFEN, NHS_PARACETAMOL],
    quiz: {
      question: "How long does the NHS say to use a wrapped hot or cold pack each time?",
      options: [{ text: "Up to 20 minutes", right: true }, { text: "Up to 2 hours" }, { text: "All day" }],
      why: "Try a hot or cold pack, or a bag of frozen peas, wrapped in a towel on the affected area for up to 20 minutes every 2 to 3 hours.",
    },
  },
  {
    id: "te-exercises",
    kicker: "Exercise",
    question: "Which exercises help tennis elbow?",
    hook: "A tin of beans, a table edge and a few minutes a day. Gentle stretches and strengthening, built up slowly.",
    short: "Gentle stretching and strengthening for the wrist and forearm can help, starting slowly and building up. Arthritis UK suggests a palm-down wrist lift with a light weight, done for 8 to 12 weeks. Get advice from a physiotherapist or healthcare professional before starting any new exercises.",
    sections: [
      {
        heading: "Before you start",
        paragraphs: [
          "The Chartered Society of Physiotherapy recommends seeking advice from a physiotherapist or healthcare professional before starting any new exercise regime. If any of these exercises worsen your pain, seek urgent medical advice.",
          "Start slowly and build up gradually. It is normal to feel muscle ache after exercise, but stop if you get any joint pain that does not go away quickly.",
        ],
      },
      {
        heading: "Why move at all",
        paragraphs: [
          "To stop the elbow stiffening and the arm muscles weakening, it is best not to rest for more than a few days. Start some gentle exercise as soon as the pain begins to ease.",
          "The NHS suggests trying simple exercises, such as bending and straightening your arm.",
        ],
      },
      {
        heading: "Stretching the forearm",
        paragraphs: [
          "Wrist extensors stretch: hold one arm out in front with the elbow straight. Use the other hand to grasp it at the side of the thumb and bend the wrist downward, then turn the wrist towards the small finger to increase the stretch.",
          "Wrist flex: with your arm straight in front and palm down, gently bend your wrist down, using the opposite hand to press it back towards your body. Hold for 15 to 30 seconds, and do this three times with each wrist.",
        ],
      },
      {
        heading: "Strengthening the forearm",
        paragraphs: [
          "Palm lift: place your palm on the table and lift the fingers up, with your other hand across the knuckles pushing down. Arthritis UK calls this a useful basic exercise for tennis elbow.",
          "Wrist lift, palm down: bend your elbow at a right angle and hold a light weight, such as a tin of beans, palm down. Bend your wrist slowly towards you, then slowly release. Do 3 sets of 15 twice a day, for 8 to 12 weeks.",
        ],
      },
      {
        heading: "Turning the forearm",
        paragraphs: [
          "Wrist turn: bend your elbow at a right angle with your palm up, then slowly turn your wrist so the palm faces down. Hold for five seconds and slowly release, building up to 30 times with a break after every 10.",
          "Hammer turn: rest your forearm on a table with the wrist unsupported, hold a hammer by the handle and turn the forearm palm down and palm up. Holding the handle farther from the tip makes it harder.",
        ],
      },
    ],
    helps: [
      "Get advice from a physiotherapist or healthcare professional before starting any new exercises.",
      "Start slowly and build up gradually.",
      "Stop if you get any joint pain that does not go away quickly.",
      "Do the palm-down wrist lift for 8 to 12 weeks, as Arthritis UK suggests for tennis elbow.",
      "If any of the exercises worsen your pain, seek urgent medical advice.",
    ],
    tryThisWeek: [
      "Check with a physiotherapist first.",
      "Start slowly and build up.",
      "Stop if joint pain lingers.",
    ],
    ask: "Which of these exercises should I do, and how many times?",
    interactive: {
      kind: "flip-cards",
      title: "Five moves, card by card",
      intro: "Check with your GP or physiotherapist first. Turn each card to see how each move is described.",
      cards: [
        { id: "extensor-stretch", front: "Wrist extensors stretch", when: "Arm out in front, elbow straight", back: "With the other hand, bend the wrist downward, then turn it towards the small finger." },
        { id: "wrist-flex", front: "Wrist flex", when: "Arm straight, palm down", back: "Gently bend the wrist down and press it back with the other hand. Hold 15 to 30 seconds, three times each wrist." },
        { id: "palm-lift", front: "Palm lift", when: "Palm flat on a table", back: "Lift the fingers while the other hand pushes down across the knuckles. A useful basic exercise for tennis elbow." },
        { id: "wrist-lift", front: "Wrist lift, palm down", when: "Elbow at a right angle, light weight", back: "Bend the wrist slowly towards you and release. 3 sets of 15 twice a day, for 8 to 12 weeks." },
        { id: "hammer", front: "Hammer turn", when: "Forearm on a table, wrist free", back: "Turn the forearm palm down and palm up. Holding the handle farther from the tip makes it harder." },
      ],
    },
    sources: [CSP_EXERCISES, AU_EX_ELBOWS, AU_ELBOW, NHS_TE],
    quiz: {
      question: "For how long does Arthritis UK say the palm-down wrist lift needs doing for tennis elbow?",
      options: [{ text: "8 to 12 weeks", right: true }, { text: "One day" }, { text: "One week" }],
      why: "Do 3 sets of 15 twice a day, for 8 to 12 weeks.",
    },
  },
  {
    id: "te-physio",
    kicker: "Treatment",
    question: "Would physiotherapy or a brace help my tennis elbow?",
    hook: "An exercise plan made for your arm, and a strap that can take some strain. What each one offers.",
    short: "Physiotherapy may help if symptoms have not improved after 6 weeks of treatments at home, mainly through stretching and strengthening exercises. A forearm strap or brace can sometimes help reduce pain, though NICE's guidance for GPs says the evidence for benefit is limited. In many areas you can refer yourself for NHS physiotherapy.",
    sections: [
      {
        heading: "When physiotherapy may help",
        paragraphs: [
          "Physiotherapy may help if your symptoms have not improved after trying treatments at home for 6 weeks. Treatments may include massage, stretching and strengthening exercises for your wrist and forearm, and ultrasound therapy.",
          "In ultrasound therapy, high-frequency sound waves are used to increase blood flow, which can reduce pain and speed up healing.",
        ],
      },
      {
        heading: "What a physiotherapist does",
        paragraphs: [
          "Physiotherapists are experts in diagnosing and treating joint and muscle problems. Often a diagnosis can be made without the need for any x-rays or scans.",
          "In most cases you will be given an exercise programme for your own problem. After each session you may be given exercises to do at home, and it is important to do them regularly.",
        ],
      },
      {
        heading: "Not every treatment helps equally",
        paragraphs: [
          "The Chartered Society of Physiotherapy says some treatments, such as massage, electrotherapy and acupuncture, have very little value in treating elbow pain and are not recommended.",
          "Physiotherapy may be useful to help build up the strength in your elbow and prevent the condition returning.",
        ],
      },
      {
        heading: "Braces, straps and clasps",
        paragraphs: [
          "You can try wearing a forearm strap or a wrist or elbow brace, which you can buy from pharmacies. Sometimes wearing a brace can help reduce pain.",
          "A splint, also known as an epicondylitis clasp, may ease the strain during activities that make it flare up. Ask a healthcare professional or a pharmacist if one would help, and when and how to wear it. NICE's guidance for GPs notes that the evidence for benefit is limited.",
        ],
      },
      {
        heading: "Getting physiotherapy",
        paragraphs: [
          "In many areas you may be able to get physiotherapy from NHS community musculoskeletal services without needing a referral from a GP. Physiotherapy is free on the NHS, but there may be a long waiting list.",
          "If you choose to pay privately, make sure the physiotherapist is chartered, with MCSP after their name, and registered with the Health and Care Professions Council.",
        ],
      },
    ],
    helps: [
      "Ask about physiotherapy if treatments at home have not helped after 6 weeks.",
      "Check whether you can refer yourself to NHS community musculoskeletal services in your area.",
      "Do the exercises you are given at home regularly.",
      "Ask a healthcare professional or pharmacist whether a splint would help, and when and how to wear it.",
    ],
    tryThisWeek: [
      "Ask about physiotherapy after 6 weeks.",
      "Check if you can refer yourself.",
      "Ask a pharmacist about a splint.",
    ],
    ask: "Would physiotherapy or a brace help me, and how do I get referred?",
    interactive: {
      kind: "flip-cards",
      title: "Physiotherapy and supports",
      intro: "Turn each card to see what it is and what the sources say about it.",
      cards: [
        { id: "exercise", front: "Exercise programme", when: "The main part of physiotherapy", back: "Stretching and strengthening for your wrist and forearm, done regularly at home." },
        { id: "ultrasound", front: "Ultrasound therapy", when: "A treatment a physio may use", back: "High-frequency sound waves increase blood flow, which can reduce pain and speed up healing." },
        { id: "massage", front: "Massage", when: "Listed by the NHS", back: "The Chartered Society of Physiotherapy says it has very little value in treating elbow pain." },
        { id: "strap", front: "Forearm strap or brace", when: "Bought from pharmacies", back: "Can sometimes help reduce pain. NICE's guidance for GPs says the evidence for benefit is limited." },
        { id: "clasp", front: "Epicondylitis clasp", when: "For activities that flare it up", back: "A splint that may ease the strain. Ask a healthcare professional or pharmacist when and how to wear it." },
      ],
    },
    sources: [NHS_TE, NHS_PHYSIO, CSP_HELP, CSP_TREATMENT, CSP_LIVING, AU_ELBOW, CKS_MANAGEMENT],
    quiz: {
      question: "When may physiotherapy help, according to the NHS?",
      options: [{ text: "If treatments at home have not helped after 6 weeks", right: true }, { text: "Only after surgery" }, { text: "Never for tennis elbow" }],
      why: "Physiotherapy may help if your symptoms have not improved after trying treatments at home for 6 weeks.",
    },
  },
  {
    id: "te-injections",
    kicker: "Treatment",
    question: "What about injections, shockwave therapy or surgery?",
    hook: "A steroid jab sounds like a quick fix. For tennis elbow, the sources say it often is not.",
    short: "Steroid injections are not recommended for tennis elbow, because the pain is more likely to come back and last longer. NICE says the evidence on shockwave therapy and blood injections is uncertain. Surgery may be an option for a small number of people who still have it after 6 to 12 months.",
    sections: [
      {
        heading: "Steroid injections",
        paragraphs: [
          "Steroid injections are not recommended for tennis or golfer's elbow. Arthritis UK says they can cause these conditions to be worse in the long term.",
          "The Chartered Society of Physiotherapy says they offer good short-term relief, but the pain is more likely to come back and last longer overall. NICE's guidance for GPs says not to offer them, because of worse outcomes at 6 months.",
        ],
      },
      {
        heading: "Platelet-rich plasma injections",
        paragraphs: [
          "Platelet-rich plasma injections are becoming increasingly popular for tennis elbow. A blood sample is taken and treated to increase the number of platelets, then injected into the painful area, usually in hospital by orthopaedic specialists.",
          "Arthritis UK says recent studies have shown it may reduce pain and increase movement more effectively than steroid injections, but it is not yet available in all hospitals in the UK. NICE says the evidence on how well blood injections work for tendon problems is still inadequate, so they should only be used with special arrangements.",
        ],
      },
      {
        heading: "Shockwave therapy",
        paragraphs: [
          "Extracorporeal shockwave therapy uses a device to pass shockwaves through the skin to the affected area. It may be given in one or several sessions, and a local anaesthetic may be used because high-energy shockwaves can be painful.",
          "NICE says the evidence raises no major safety concerns, but the evidence on how well it works is inconsistent. It should only be used with special arrangements, and patients should understand the uncertainty about how well it works.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Surgery may be an option if you still have tennis elbow after 6 to 12 months. It is only needed for a small number of people, and can be done by keyhole surgery or through a cut about 4 to 5 cm long.",
          "You should be able to start using the elbow gently straight afterwards, but it takes several weeks to fully recover, usually with a short course of physiotherapy. NICE's guidance for GPs says current evidence does not show surgery works better than a placebo, so expectations should be managed.",
        ],
      },
    ],
    helps: [
      "If a steroid injection is offered, discuss the possible side effects and long-term effects first.",
      "Make sure you understand the uncertainty about how well shockwave therapy works before having it.",
      "Talk with your doctor and hospital team about the benefits and disadvantages of surgery for you.",
      "Expect a short course of physiotherapy after an operation.",
    ],
    tryThisWeek: [
      "Ask about steroid injection side effects.",
      "Ask how well shockwave therapy works.",
      "Weigh up surgery with your team.",
    ],
    ask: "What are the benefits and risks of each treatment you are suggesting for me?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments beyond the basics",
      intro: "Turn each card to see what the sources say about each one.",
      cards: [
        { id: "steroid", front: "Steroid injection", when: "Not recommended for tennis elbow", back: "Good short-term relief, but the pain is more likely to come back and last longer overall." },
        { id: "prp", front: "Platelet-rich plasma", when: "Usually given in hospital", back: "Your own blood, treated to increase platelets, injected into the painful area. Not yet available in all UK hospitals." },
        { id: "shockwave", front: "Shockwave therapy", when: "Only with special arrangements", back: "Shockwaves passed through the skin. NICE says the evidence on how well it works is inconsistent." },
        { id: "surgery", front: "Surgery", when: "If still there after 6 to 12 months", back: "Keyhole or a small cut. Several weeks to fully recover, usually with a short course of physiotherapy." },
      ],
    },
    sources: [AU_ELBOW, CSP_TREATMENT, CKS_MANAGEMENT, NICE_ESWT, NICE_ESWT_PROCEDURE, NICE_BLOOD, NHS_TE],
    quiz: {
      question: "Are steroid injections recommended for tennis elbow?",
      options: [{ text: "No: they can make it worse in the long term", right: true }, { text: "Yes, as the first treatment" }, { text: "Yes, as many as needed" }],
      why: "Arthritis UK says they can cause these conditions to be worse in the long term.",
    },
  },
  {
    id: "te-tasks",
    kicker: "Everyday life",
    question: "How can I grip and lift without making it worse?",
    hook: "Not stopping, but doing things differently: shorter bursts, better grips, fewer strong vibrations.",
    short: "Changing or stopping the movements that cause the pain is the first step, and stopping the activity that caused it should dramatically improve symptoms. It is better to keep using the elbow in a more comfortable way than to stop completely. Short bursts with breaks, a mouse instead of a trackpad and a thicker racquet grip are examples.",
    sections: [
      {
        heading: "Change the movement first",
        paragraphs: [
          "The first thing to do if you have elbow pain is to change, or possibly stop, any movements that might be causing your symptoms or making them worse.",
          "If you have tennis elbow, stopping the activity that caused it in the first place is important. This should dramatically improve your symptoms.",
        ],
      },
      {
        heading: "Keep using the arm, differently",
        paragraphs: [
          "The natural reaction when in pain is to completely stop activities that make it worse. It is much better to continue to use your elbow, and adjust how you do things to make it more comfortable.",
          "This may mean doing jobs in short bursts with regular breaks, rather than all in one go.",
        ],
      },
      {
        heading: "Grip, force and vibration",
        paragraphs: [
          "The pain is made worse by gripping, by pulling the wrist back against resistance, and by turning the forearm palm down.",
          "NICE's guidance for GPs suggests avoiding tasks that need high force, hand gripping or pinching, or the use of strongly vibrating handheld tools.",
        ],
      },
      {
        heading: "Small swaps that help",
        paragraphs: [
          "Examples of changing an activity include using a computer mouse instead of a laptop trackpad, and putting a thicker grip on your tennis racquet.",
          "A splint to support your elbow may ease the strain when you are doing activities that make it flare up.",
        ],
      },
      {
        heading: "Help with how you move",
        paragraphs: [
          "An occupational therapist can suggest how to change your movements, and ways to support your elbow while it is healing. A GP can refer you to one, or you can see one privately.",
          "If the pain is more severe, try to avoid strenuous activity, and keep the elbow moving to prevent it from stiffening up.",
        ],
      },
    ],
    helps: [
      "Change or stop any movements that are causing your symptoms or making them worse.",
      "Do jobs in short bursts with regular breaks.",
      "Use a computer mouse instead of a laptop trackpad.",
      "Avoid tasks that need high force, hand gripping or pinching, or strongly vibrating handheld tools.",
      "Ask a GP about seeing an occupational therapist.",
    ],
    tryThisWeek: [
      "Change the movement that hurts.",
      "Work in short bursts with breaks.",
      "Swap the trackpad for a mouse.",
    ],
    ask: "Could an occupational therapist look at how I grip and lift?",
    interactive: {
      kind: "scenarios",
      title: "Everyday grips",
      scenarios: [
        {
          id: "laptop",
          situation: "You work on a laptop, using the trackpad all day.",
          options: [{ text: "Use a computer mouse instead", best: true }, { text: "Keep using the trackpad" }],
          why: "Examples of changing an activity include using a computer mouse instead of a laptop trackpad.",
        },
        {
          id: "long-job",
          situation: "You have a long job to do, like painting a room.",
          options: [{ text: "Short bursts with regular breaks", best: true }, { text: "Get it all done in one go" }],
          why: "This may mean doing jobs in short bursts with regular breaks, rather than all in one go.",
        },
        {
          id: "racquet",
          situation: "Your tennis racquet has a thin grip.",
          options: [{ text: "Put a thicker grip on it", best: true }, { text: "Grip it tighter" }],
          why: "Examples of changing an activity include putting a thicker grip on your tennis racquet.",
        },
      ],
    },
    sources: [AU_ELBOW, CSP_LIVING, CSP_TREATMENT, CKS_MANAGEMENT, CKS_SUMMARY],
    quiz: {
      question: "What does the Chartered Society of Physiotherapy suggest instead of stopping all use of the arm?",
      options: [{ text: "Keep using it, but adjust how you do things", right: true }, { text: "Keep it still in a sling" }, { text: "Carry on exactly as before" }],
      why: "It is much better to continue to use your elbow, and adjust how you do things to make it more comfortable.",
    },
  },
  {
    id: "te-work",
    kicker: "Work",
    question: "What about work: keyboards, tools and my employer?",
    hook: "Many cases start at work. Small changes to tasks, breaks and equipment can make a difference.",
    short: "Computer work and manual tasks such as using a screwdriver can cause tennis elbow. If work makes it worse, talking with your employer or occupational health about mixing tasks, more breaks and changes to how things are done may help. An occupational therapist can suggest changes to your workspace.",
    sections: [
      {
        heading: "Jobs linked with it",
        paragraphs: [
          "Computer work, such as typing or using a mouse, and manual tasks, such as sewing or using a screwdriver, can cause tennis elbow.",
          "People who are continually gripping and twisting, such as carpenters and plasterers, may be at risk. Construction work, assembly line work and using vibrating tools can also bring it on.",
        ],
      },
      {
        heading: "Talking to your employer",
        paragraphs: [
          "If work makes your symptoms worse, NICE's guidance for GPs suggests talking with your employer or an occupational health department. Options include mixing work patterns, taking more rest breaks, changing the way objects are handled, and changing the work environment.",
          "The NHS suggests speaking to your employer about ways they can help you continue working, like changing the way you work or reducing your hours.",
        ],
      },
      {
        heading: "At the desk",
        paragraphs: [
          "Using a computer mouse instead of a laptop trackpad is one example of changing an activity.",
          "An occupational therapist can work out what is causing the problem, and suggest exercises, equipment, or changes to your workspace. A GP may be able to refer you.",
        ],
      },
      {
        heading: "Tools and repetitive tasks",
        paragraphs: [
          "If tasks at work involve repetitive movements, such as using a screwdriver or painting, it is worth discussing this with an occupational therapist. If your workplace has an occupational health department, they should be able to help.",
          "NICE's guidance for GPs suggests reducing manual work that makes it worse for 6 weeks, while staying active where possible. That includes tasks that need high force, hand gripping or pinching, or strongly vibrating handheld tools.",
        ],
      },
      {
        heading: "Support at work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. It could give a grant towards things like specialist equipment or physical changes to your workplace.",
          "Employers must make reasonable adjustments so that workers with disabilities, or physical or mental health conditions, are not substantially disadvantaged. One example the government gives is providing a special keyboard for someone with arthritis.",
        ],
      },
    ],
    helps: [
      "Talk to your employer or occupational health department if work makes your symptoms worse.",
      "Ask about mixing work patterns and taking more rest breaks.",
      "Use a computer mouse instead of a laptop trackpad.",
      "Ask your GP whether an occupational therapist could look at your workspace.",
      "Apply for Access to Work if you need extra help.",
    ],
    tryThisWeek: [
      "Talk to your employer or occupational health.",
      "Ask about taking more rest breaks.",
      "Swap the trackpad for a mouse.",
    ],
    ask: "Should I change anything about my work while this settles?",
    interactive: {
      kind: "scenarios",
      title: "At work",
      scenarios: [
        {
          id: "same-task",
          situation: "Your job means hours of the same gripping task.",
          options: [{ text: "Ask about mixing tasks and more breaks", best: true }, { text: "Push on without stopping" }],
          why: "Options include mixing work patterns, taking more rest breaks, changing the way objects are handled, and changing the work environment.",
        },
        {
          id: "laptop",
          situation: "You are setting up to work from a laptop.",
          options: [{ text: "Use a mouse, not the trackpad", best: true }, { text: "Use the trackpad only" }],
          why: "Using a computer mouse instead of a laptop trackpad is one example of changing an activity.",
        },
        {
          id: "power-tool",
          situation: "Your work involves a vibrating power tool.",
          options: [{ text: "Talk to occupational health about it", best: true }, { text: "Say nothing and carry on" }],
          why: "If your workplace has an occupational health department, they should be able to help.",
        },
      ],
    },
    sources: [NHS_TE, AU_ELBOW, CKS_DIAGNOSIS, CKS_MANAGEMENT, NHS_RSI, CSP_TREATMENT, GOV_ACCESS, GOV_ADJUSTMENTS],
    quiz: {
      question: "Who can suggest changes to your workspace?",
      options: [{ text: "An occupational therapist", right: true }, { text: "Only a surgeon" }, { text: "Nobody" }],
      why: "An occupational therapist can work out what is causing the problem, and suggest exercises, equipment, or changes to your workspace.",
    },
  },
  {
    id: "te-sport",
    kicker: "Sport",
    question: "Can I keep playing sport, and how do I get back to it?",
    hook: "Fewer than one in ten cases come from racquets. For those that do, easing off and building back up is the plan.",
    short: "Racquet sports are the cause in fewer than 10% of people with tennis elbow. Cutting down on sport that makes it worse, while staying active, is the usual first step. After the first rest period, gradually strengthening the wrist and elbow muscles helps you get back to normal activity.",
    sections: [
      {
        heading: "Racquets are a small part of the story",
        paragraphs: [
          "Despite the name, playing tennis or golf is not the most common cause. Racquet sports are the cause in fewer than 10% of people with tennis elbow.",
          "It is still seen in sports such as tennis, squash and badminton, and in other sports that involve lots of repetitive movements, like golf.",
        ],
      },
      {
        heading: "Easing off, not stopping",
        paragraphs: [
          "NICE's guidance for GPs suggests resting the arm and avoiding, or cutting down, any sport that makes it worse for 6 weeks, while staying active where possible.",
          "Keep active. You may need to limit the amount of activity you do to start with, before gradually increasing it. The Chartered Society of Physiotherapy suggests reducing or changing aggravating activities for two to four weeks at first.",
        ],
      },
      {
        heading: "Changing your kit",
        paragraphs: [
          "Putting a thicker grip on your tennis racquet is one example of changing an activity to ease tennis elbow.",
          "You can buy a forearm strap, or a wrist or elbow brace, from pharmacies. A splint may ease the strain when you are doing activities that make it flare up.",
        ],
      },
      {
        heading: "Building back up",
        paragraphs: [
          "After this initial rest period, start to gradually strengthen the muscles around your wrist and elbow, to help get back to normal activity.",
          "Start by exercising very gently and gradually build up the amount you do. It is normal to feel muscle ache after exercise, but stop if you get any joint pain that does not go away quickly.",
        ],
      },
      {
        heading: "Staying active helps",
        paragraphs: [
          "Arthritis UK's research found that, although rest is commonly recommended for people with lower arm pain, remaining active while waiting for physiotherapy is better for reducing symptoms.",
        ],
      },
    ],
    helps: [
      "Cut down on any sport that makes it worse, while staying active where possible.",
      "Put a thicker grip on your tennis racquet.",
      "After the first rest period, gradually strengthen the muscles around your wrist and elbow.",
      "Build up gently, and stop if you get joint pain that does not go away quickly.",
    ],
    tryThisWeek: [
      "Cut down on the sport that hurts.",
      "Fit a thicker grip on your racquet.",
      "Build back up gently.",
    ],
    ask: "When can I go back to my sport, and how should I build up?",
    interactive: {
      kind: "timeline",
      title: "Back to your sport",
      steps: [
        { id: "ease", when: "First 2 to 4 weeks", title: "Ease off", points: ["Reduce or change activities that make it worse.", "Stay active where possible."] },
        { id: "six", when: "Up to 6 weeks", title: "Less of what hurts", points: ["Avoid or cut down on sport that makes it worse.", "Keep active, limiting the amount at first."] },
        { id: "strength", when: "After the rest period", title: "Strengthen", points: ["Gradually strengthen the muscles around the wrist and elbow."] },
        { id: "back", when: "Getting back", title: "Build up gradually", points: ["A thicker grip on your racquet may help.", "Stop if joint pain does not go away quickly."] },
      ],
    },
    sources: [AU_ELBOW, CKS_CAUSES, CKS_MANAGEMENT, CSP_TREATMENT, CKS_SUMMARY, NHS_RSI, NHS_TE],
    quiz: {
      question: "How many people with tennis elbow got it from racquet sports?",
      options: [{ text: "Fewer than 10%", right: true }, { text: "Almost all of them" }, { text: "About half" }],
      why: "Racquet sports are the cause in fewer than 10% of people with tennis elbow.",
    },
  },
  {
    id: "te-coming-back",
    kicker: "Long term",
    question: "What if my tennis elbow keeps coming back?",
    hook: "It settles, then it returns. Strength, the right diagnosis and a look at the cause can all help.",
    short: "Tennis elbow can return, and the pain is more likely to come back after a steroid injection. Simple exercises and physiotherapy can help build strength and reduce the risk of future problems. If it is not settling, a GP or physiotherapist can look again at the cause, and other conditions can look similar.",
    sections: [
      {
        heading: "It can return",
        paragraphs: [
          "Tennis elbow and golfer's elbow can both return. Earlier episodes are one of the things linked with more pain a year later.",
          "NICE's guidance for GPs notes that after steroid injections, up to 50% of people may find their symptoms come back, often worse. The Chartered Society of Physiotherapy says the pain is more likely to come back after an injection.",
        ],
      },
      {
        heading: "Keeping the arm strong",
        paragraphs: [
          "Lack of movement causes the joint to stiffen and the muscles around the elbow to weaken, which increases the chance of further symptoms. Simple exercises can help to reduce the risk of future problems.",
          "Physiotherapy may be useful to help build up the strength in your elbow and prevent the condition returning.",
        ],
      },
      {
        heading: "Looking again at the cause",
        paragraphs: [
          "If you have tennis elbow, stopping the activity that caused it in the first place is important. An occupational therapist can identify movements that may be causing discomfort and see if there is another way to do them.",
          "If work makes it worse, talking with your employer or occupational health department may help, with options like mixing work patterns and taking more rest breaks.",
        ],
      },
      {
        heading: "If it is not settling",
        paragraphs: [
          "If the pain is not settling after a few weeks, make an appointment to see your GP or physiotherapist. They will be able to assess the cause and advise on how best to deal with it.",
          "If there is no improvement after 6 weeks, NICE's guidance for GPs suggests looking again at the diagnosis and considering physiotherapy. If there is still no improvement 6 to 12 months on, referral to an orthopaedic surgeon may be considered.",
        ],
      },
      {
        heading: "Could it be something else?",
        paragraphs: [
          "Other conditions can look like tennis elbow, including arthritis, pain coming from the neck, and radial tunnel syndrome.",
          "Radial tunnel syndrome causes pain starting from the outside of the elbow and running down to the forearm, so the two can be confused. But with radial tunnel syndrome there is no tenderness on the outside of the elbow.",
        ],
      },
    ],
    helps: [
      "Keep doing simple exercises to help reduce the risk of future problems.",
      "Stop or change the activity that caused it in the first place.",
      "See your GP or physiotherapist if the pain is not settling after a few weeks.",
      "Talk to your employer or occupational health department if work makes it worse.",
    ],
    tryThisWeek: [
      "Keep up simple exercises.",
      "Change the activity that caused it.",
      "See a GP if it is not settling.",
    ],
    ask: "Why does this keep coming back, and could it be something other than tennis elbow?",
    interactive: {
      kind: "signs",
      title: "Worth raising at your appointment",
      intro: "Tick any that apply, to talk through with your GP or physiotherapist.",
      signs: [
        "The pain came back after it had settled",
        "It has not settled after a few weeks",
        "I have had a steroid injection before",
        "Neck or shoulder pain as well",
        "Tingling, numbness or weakness in my arm or hand",
        "My work keeps setting it off",
      ],
      after: "Your GP or physiotherapist will be able to assess the cause of your elbow pain and advise on how best to deal with it.",
      copyHeading: "About my elbow",
    },
    sources: [AU_ELBOW, CKS_PROGNOSIS, CKS_COMPLICATIONS, CSP_TREATMENT, CKS_MANAGEMENT, CKS_DIFFERENTIAL, CSP_LIVING],
    quiz: {
      question: "What can help reduce the risk of tennis elbow coming back?",
      options: [{ text: "Simple exercises to keep the arm strong", right: true }, { text: "Resting it completely for months" }, { text: "Repeated steroid injections" }],
      why: "Simple exercises can help to reduce the risk of future problems.",
    },
  },
];
