import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Plantar fasciitis page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's `sources`;
// nothing is added that those pages do not say. Most of it comes from the NHS, Arthritis UK (the charity formerly
// called Versus Arthritis), the Chartered Society of Physiotherapy and NICE's Clinical Knowledge Summary on plantar
// fasciitis, with NICE's guidance on shockwave therapy and the government's pages on work. Exercises are described
// only as the sources describe them. Urgent advice is worded as the NHS words it. General information only; it
// never replaces what a person's own GP, physiotherapist or podiatrist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/conditions/foot-pain/${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE Clinical Knowledge Summaries: ${label}`, url: `https://cks.nice.org.uk/topics/plantar-fasciitis/${path}` });

const NHS_PF = nhs("Plantar fasciitis", "conditions/plantar-fasciitis/");
const NHS_HEEL = nhs("Heel pain", "symptoms/foot-pain/heel-pain/");
const NHS_SOLE = nhs("Pain in the bottom of the foot", "symptoms/foot-pain/pain-in-the-bottom-of-the-foot/");
const NHS_MSK = nhs("Get NHS help for back or joint problems", "nhs-services/get-nhs-help-for-back-joint-problems/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_RUNNING = nhs("Knee pain and other running injuries", "live-well/exercise/knee-pain-and-other-running-injuries/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_LOSE_WEIGHT = nhs("How to lose weight", "better-health/lose-weight/");

const AU_PHP = au("Plantar heel pain", "understanding-arthritis/conditions/plantar-heel-pain/");
const AU_FOOT = au("Foot and ankle pain", "understanding-arthritis/conditions/foot-and-ankle-pain/");
const AU_EX_FEET = au("Exercises for the toes, feet and ankles", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-toes-feet-and-ankles/");
const AU_EX_TYPE = au("What type of exercise should I do?", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/what-type-of-exercise-should-i-do/");
const AU_EX_START = au("Getting started with exercise", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/getting-started-with-exercise/");
const AU_FOOTCARE = au("Footcare and footwear", "living-with-arthritis/health-and-wellbeing/footcare-and-footwear/");
const AU_STEROID = au("Steroid injections", "understanding-arthritis/arthritis-treatments/drugs/steroid-injections/");
const AU_WEIGHT = au("Managing your weight", "living-with-arthritis/health-and-wellbeing/eating-well-with-arthritis/managing-your-weight/");
const AU_WORK_SAFE = au("Working safely and well", "living-with-arthritis/work-benefits-and-finances/work-and-arthritis/working-safely-and-well/");
const AU_ADJUSTMENTS = au("Applying for reasonable adjustments", "living-with-arthritis/work-benefits-and-finances/work-and-arthritis/applying-for-reasonable-adjustments/");

const CSP_CAUSES = csp("Causes of foot pain", "causes-foot-pain");
const CSP_TREAT = csp("Treatment for common foot conditions", "treatment-foot-pain");
const CSP_HELP = csp("Getting help for foot pain", "getting-help-foot-pain");
const CSP_LIVING = csp("Living with foot pain", "living-foot-pain");
const CSP_VIDEO = csp("Video exercises for foot pain", "video-exercises-foot-pain");

const CKS_TOPIC = cks("Plantar fasciitis, summary", "");
const CKS_DEF = cks("Plantar fasciitis, what is it?", "background-information/definition/");
const CKS_CAUSES = cks("Plantar fasciitis, causes and risk factors", "background-information/causes-risk-factors/");
const CKS_PREV = cks("Plantar fasciitis, how common is it?", "background-information/prevalence/");
const CKS_PROG = cks("Plantar fasciitis, prognosis", "background-information/prognosis/");
const CKS_ASSESS = cks("Plantar fasciitis, assessment", "diagnosis/assessment/");
const CKS_MGMT = cks("Plantar fasciitis, management", "management/management/");

const NICE_ESWT: LearnSource = { label: "NICE: Extracorporeal shockwave therapy for refractory plantar fasciitis (HTG200)", url: "https://www.nice.org.uk/guidance/htg200" };
const NICE_ESWT_REC: LearnSource = { label: "NICE: Extracorporeal shockwave therapy for refractory plantar fasciitis (HTG200), recommendations", url: "https://www.nice.org.uk/guidance/htg200/chapter/1-Recommendations" };

const GOV_ADJUST: LearnSource = { label: "GOV.UK: Reasonable adjustments for workers with disabilities or health conditions", url: "https://www.gov.uk/reasonable-adjustments-for-disabled-workers" };
const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const plantarAnswers: LearnArticle[] = [
  {
    id: "pfas-what-it-is",
    kicker: "Understanding",
    question: "What is plantar fasciitis, and why does the heel hurt?",
    hook: "A strong band under the foot holds up the arch. Strain it often enough, and the heel starts to complain.",
    short: "Plantar fasciitis causes pain on the bottom of the foot, around the heel and arch. It is caused by straining the plantar fascia, the strong band of tissue that runs from the heel to the base of the toes. It is common, and it usually gets better over time.",
    sections: [
      {
        heading: "The band under your foot",
        paragraphs: [
          "Plantar fasciitis is a condition that causes pain on the bottom of your foot, around your heel and arch. It is caused by straining the part of your foot that connects your heel bone to your toes, called the plantar fascia.",
          "The plantar fascia is a strong band of tissue that runs from the heel, beneath the arch of the foot, to the base of the toes. It supports the arch and helps spread your weight evenly through your foot, so you can walk, run or stand without difficulty.",
        ],
      },
      {
        heading: "What goes wrong",
        paragraphs: [
          "NICE's Clinical Knowledge Summary describes plantar fasciitis as an overuse condition. Repeated stress where the band joins the heel bone leads to wear and repair changes there, rather than it being mainly an inflammatory condition.",
          "Repeated overload can cause tiny tears, mainly where the band starts at the heel. The band tightens as you walk, helping to hold the arch of the foot steady.",
        ],
      },
      {
        heading: "Heel spurs",
        paragraphs: [
          "Arthritis UK says plantar heel pain can increase the risk of lumps of calcium collecting on the heel bone, called bone spurs, which can make your pain worse.",
          "The Chartered Society of Physiotherapy says heel spurs are often seen in people with plantar fasciitis, but are not considered the cause of the pain. A heel spur on an X-ray is a common finding in people with no symptoms at all.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "Plantar fasciitis is common, especially in people aged 40 to 60. It is the most commonly recognised cause of pain under the heel in adults.",
          "One review cited by NICE puts the chance of having it at some point in life at about 1 in 10.",
        ],
      },
      {
        heading: "Usually it settles",
        paragraphs: [
          "It is usually a self-limiting condition. You can usually ease the pain yourself, but see a GP if it does not improve within 2 weeks.",
          "Do not try to diagnose the cause of heel pain yourself. There are lots of causes, and sometimes it can be something more serious like a broken bone.",
        ],
      },
    ],
    helps: [
      "Rest and raise your foot on a stool when you can.",
      "Wear shoes with cushioned heels and good arch support.",
      "Try regular gentle exercises to stretch the sole of your foot and your heel.",
      "Ask a pharmacist about the best painkiller to take, and about insoles and pads for your shoes.",
      "See a GP if the pain has not improved after treating it yourself for 2 weeks.",
    ],
    tryThisWeek: [
      "Rest and raise your foot.",
      "Wear cushioned, supportive shoes.",
      "Stretch your sole and heel gently.",
    ],
    ask: "Is this plantar fasciitis, or could something else be causing my heel pain?",
    interactive: {
      kind: "flip-cards",
      title: "The parts of the foot involved",
      intro: "Turn each card to see what each part does, and how it is linked to heel pain.",
      cards: [
        { id: "fascia", front: "Plantar fascia", when: "Under the foot, heel to toes", back: "A strong band of tissue that supports the arch and spreads your weight evenly through your foot." },
        { id: "heel", front: "Heel bone", when: "Where the band starts", back: "Repeated overload can cause tiny tears, mainly where the plantar fascia starts at the heel." },
        { id: "arch", front: "The arch", when: "The middle of the sole", back: "The band tightens as you walk, helping to hold the arch of the foot steady." },
        { id: "spur", front: "Heel spur", when: "Sometimes seen on an X-ray", back: "Often seen with plantar fasciitis, but not considered the cause of the pain." },
        { id: "calf", front: "The calf", when: "Above the heel", back: "Tightness in the calf is one of the things that can lead to plantar heel pain." },
      ],
    },
    sources: [NHS_PF, AU_PHP, CKS_TOPIC, CKS_DEF, CKS_CAUSES, CSP_CAUSES, CKS_ASSESS, CKS_PREV, NHS_HEEL],
    quiz: {
      question: "What is the plantar fascia?",
      options: [{ text: "A strong band of tissue under the foot", right: true }, { text: "A bone in the heel" }, { text: "A nerve in the ankle" }],
      why: "The plantar fascia is a strong band of tissue that runs from the heel, beneath the arch of the foot, to the base of the toes.",
    },
  },
  {
    id: "pfas-causes",
    kicker: "Causes",
    question: "Why does plantar fasciitis happen?",
    hook: "Long days on your feet, a new running habit, shoes without support. Usually it comes down to how much load the heel takes.",
    short: "Plantar fasciitis is caused by straining the plantar fascia, though it is not always clear why this happens. It is more likely if you are 40 to 60, do a lot of standing, walking or running, have recently started exercising on hard surfaces, have a tight calf, wear shoes with poor cushioning or support, or are overweight.",
    sections: [
      {
        heading: "Strain on the band",
        paragraphs: [
          "Plantar fasciitis is caused by straining the part of your foot that connects your heel bone to your toes. It is not always clear why this happens.",
          "NICE's Clinical Knowledge Summary says the cause is not completely understood, but is likely to involve several things together, with the way the foot moves and slow healing both playing a part.",
        ],
      },
      {
        heading: "Doing more than usual",
        paragraphs: [
          "You may be more likely to get it if you do a lot of standing, walking or running, or have started doing a lot more than is usual for you. Recently starting to exercise on hard surfaces, and overstretching the sole of your foot during exercise, can also play a part.",
          "For runners, heel pain can come from suddenly doing a lot more running, running uphill, or shoes that are not supportive enough or are worn out.",
        ],
      },
      {
        heading: "Shoes and feet",
        paragraphs: [
          "Arthritis UK says shoes that do not cushion or support the soles of your feet can cause plantar heel pain. So can tightness in the calf, an injury or weakness in the ankle, and high or low arches.",
          "The Chartered Society of Physiotherapy says a common time of year for it to begin is the summer, when people walk barefoot or in unsupportive sandals and flip-flops.",
        ],
      },
      {
        heading: "Age and weight",
        paragraphs: [
          "You may be more likely to get it if you are 40 to 60 years of age. Being overweight also makes it more likely, as it increases the strain on your heels.",
          "NICE's Clinical Knowledge Summary links being overweight to extra loading on the foot, especially in people who are not athletes.",
        ],
      },
      {
        heading: "Other conditions, and other causes",
        paragraphs: [
          "Arthritis UK says axial spondyloarthritis can cause pain in the heels, increasing the risk of plantar fasciitis, and that psoriatic arthritis and reactive arthritis are often linked to it.",
          "Not all heel pain is plantar fasciitis. Other causes include a broken heel bone, a ruptured Achilles tendon, Achilles tendonitis and bursitis, so do not try to diagnose the cause yourself.",
        ],
      },
    ],
    helps: [
      "Do not walk or stand for long periods.",
      "Do not wear high heels, tight pointy shoes, flip-flops or backless slippers.",
      "Try not to walk barefoot on hard surfaces.",
      "Try to lose weight if you are overweight.",
      "Do not increase the intensity or distance of your running too quickly.",
    ],
    tryThisWeek: [
      "Avoid long spells of standing.",
      "Put the flip-flops away.",
      "Avoid bare feet on hard floors.",
    ],
    ask: "What do you think has caused my heel pain, and what could I change?",
    interactive: {
      kind: "risk-check",
      title: "What raises the chance?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "standing", label: "Lots of standing, walking or running", note: "Especially if you have started doing a lot more than is usual for you.", changeable: true },
        { id: "hard", label: "Exercising on hard surfaces", note: "Recently starting to exercise on hard surfaces makes it more likely.", changeable: true },
        { id: "shoes", label: "Shoes with poor cushioning", note: "Shoes that do not cushion or support the soles of your feet.", changeable: true },
        { id: "calf", label: "A tight calf", note: "Exercising with a tight calf or heel makes it more likely. Gentle calf stretches will most likely help.", changeable: true },
        { id: "weight", label: "Being overweight", note: "It increases the strain on your heels.", changeable: true },
        { id: "age", label: "Being 40 to 60", note: "Plantar fasciitis is most common between these ages.", changeable: false },
        { id: "arches", label: "High or low arches", note: "If your arches are particularly high or low, you may benefit from insoles in your shoes.", changeable: false },
        { id: "axspa", label: "Axial spondyloarthritis", note: "It can cause pain in the heels and increase the risk of plantar fasciitis.", changeable: false },
      ],
    },
    sources: [NHS_PF, CKS_CAUSES, NHS_RUNNING, AU_PHP, CSP_CAUSES, AU_FOOT, NHS_HEEL, CSP_TREAT],
    quiz: {
      question: "Which of these can make plantar fasciitis more likely?",
      options: [{ text: "Recently starting to exercise on hard surfaces", right: true }, { text: "Wearing cushioned, supportive shoes" }, { text: "Swimming" }],
      why: "Recently starting to exercise on hard surfaces, and overstretching the sole of your foot during exercise, can also play a part.",
    },
  },
  {
    id: "pfas-symptoms",
    kicker: "Symptoms",
    question: "Why does my heel hurt most with the first steps in the morning?",
    hook: "Sharp at the first step out of bed, easing as you get going, then aching again after a long day on your feet.",
    short: "The main symptom is pain on the bottom of the foot, around the heel and arch. It is more likely to be plantar fasciitis if the pain is much worse when you first start walking after sleeping or resting, gets better as you move around, and gets worse if you stand, walk or run for a long time. See a GP if it has not improved after 2 weeks of treating it yourself.",
    sections: [
      {
        heading: "Where it hurts",
        paragraphs: [
          "The main symptom of plantar fasciitis is pain on the bottom of your foot, around your heel and arch. Arthritis UK says it most commonly causes pain in the centre and inner side of the heel.",
          "Heel pain is often sharp and occurs when you put weight on the heel. It can feel like someone is sticking something sharp in your heel, or as if you are walking on sharp stones.",
        ],
      },
      {
        heading: "The first steps",
        paragraphs: [
          "It is more likely to be plantar fasciitis if the pain is much worse when you first start walking after sleeping or resting. The pain then gradually gets better when you start moving around.",
          "NICE's Clinical Knowledge Summary describes intense first step pain, in the morning or after a period of sitting, which may improve with activity.",
        ],
      },
      {
        heading: "Later in the day",
        paragraphs: [
          "The pain gets worse if you stand, walk or run for a long time, and it may be worse by the end of the day. You may find it improves when your foot is active, but returns soon after you stop.",
          "It is painful to stretch the bottom of your foot, for example when you raise your toes off the floor or walk up stairs. It usually affects one foot, but may affect both in up to 30% of people.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if the pain is severe or stopping you doing normal activities, is getting worse or keeps coming back, or has not improved after treating it yourself for 2 weeks.",
          "Also see a GP if you have any tingling or loss of feeling in your foot, or if you have diabetes and foot pain, because foot problems can be more serious if you have diabetes.",
        ],
      },
      {
        heading: "When it may be something else",
        paragraphs: [
          "Contact NHS 111 if you have severe heel pain after an injury, heard a snap, grinding or popping noise at the time, are not able to walk, or your foot has changed shape or is at an odd angle. These might be signs of a broken heel bone or broken ankle.",
          "If you think you might have broken your heel bone, do not try to treat it yourself. Contact NHS 111 to find out what to do.",
        ],
      },
    ],
    helps: [
      "See a GP if the pain has not improved after treating it yourself for 2 weeks.",
      "See a GP if you have tingling or loss of feeling in your foot, or diabetes and foot pain.",
      "Contact NHS 111 if you have severe heel pain after an injury, or you are not able to walk.",
      "Ask a pharmacist whether you need to see a GP.",
      "In many areas you can refer yourself to NHS community musculoskeletal services, such as physiotherapy, without seeing a GP.",
    ],
    tryThisWeek: [
      "See a GP if no better in 2 weeks.",
      "Tell a GP about any tingling.",
      "Ask a pharmacist for advice.",
    ],
    ask: "Do my symptoms fit plantar fasciitis, and do I need any tests?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick what you have noticed. The ones you tick make a list to take to a GP, pharmacist or physiotherapist.",
      signs: [
        "Pain under the heel or arch",
        "Worse with the first steps after rest",
        "Eases as I start moving around",
        "Worse after standing or walking a long time",
        "Hurts to raise my toes or walk up stairs",
        "Pain in both feet",
        "Tingling or loss of feeling in my foot",
        "Pain stopping my normal activities",
        "No better after 2 weeks of self-care",
      ],
      after: "Severe heel pain after an injury, a snap or popping noise, or not being able to walk: contact NHS 111.",
      copyHeading: "Heel pain I have noticed",
    },
    sources: [NHS_PF, AU_PHP, NHS_RUNNING, CKS_ASSESS, NHS_HEEL, NHS_MSK],
    quiz: {
      question: "When is plantar fasciitis pain typically at its worst?",
      options: [{ text: "With the first steps after sleeping or resting", right: true }, { text: "Only while running" }, { text: "Only when lying in bed" }],
      why: "It is more likely to be plantar fasciitis if the pain is much worse when you first start walking after sleeping or resting.",
    },
  },
  {
    id: "pfas-how-long",
    kicker: "Recovery",
    question: "How long does plantar fasciitis take to get better?",
    hook: "Usually months, not days. Most people improve, and knowing the timescale helps you keep going with what works.",
    short: "Plantar fasciitis usually gets better over time, but it can be slow. Arthritis UK says it can take up to 18 months to fully recover. One review cited by NICE says 80% of people improve within 12 months with non-surgical treatment, and the NHS advises seeing a GP if it is no better after 2 weeks of treating it yourself.",
    sections: [
      {
        heading: "Slow, but usually settles",
        paragraphs: [
          "NICE's Clinical Knowledge Summary says plantar fasciitis is usually a self-limiting condition. It notes that research on how long it lasts is variable, and based on a limited number of studies.",
          "Arthritis UK says it can take up to 18 months to fully recover from plantar heel pain.",
        ],
      },
      {
        heading: "What the figures say",
        paragraphs: [
          "Expert opinion in one review states that with non-surgical treatment, 80% of people with plantar fasciitis improve within 12 months. Another review states that more than 90% of people have relief of symptoms with 3 to 6 months of this kind of treatment.",
          "Two studies of people with long-lasting heel pain found that symptoms lasted about 13 to 14 months on average.",
        ],
      },
      {
        heading: "Starting early",
        paragraphs: [
          "You can usually ease the pain yourself. If you treat heel pain early enough, it will normally go away in a few weeks.",
          "The Chartered Society of Physiotherapy says injury and inflamed tissues usually improve in six to twelve weeks, but if your pain is not improving it is important to get a professional opinion.",
        ],
      },
      {
        heading: "If it lasts longer",
        paragraphs: [
          "For some people, symptoms carry on. In one long-term study, ongoing symptoms were more likely in women and in people with pain in both feet.",
          "If symptoms persist for 3 to 6 months after treatment from the GP surgery, NICE's Clinical Knowledge Summary says a referral to an orthopaedic surgeon may be considered.",
        ],
      },
      {
        heading: "Checking in along the way",
        paragraphs: [
          "See a GP if your foot pain has not improved after treating it yourself for 2 weeks, is getting worse or keeps coming back.",
          "The Chartered Society of Physiotherapy suggests contacting a doctor about pain for over three months, pain that is progressive and not eased, or pain that is waking or keeping you up at night.",
        ],
      },
    ],
    helps: [
      "Keep up the self-care: rest, ice, supportive shoes and gentle stretches.",
      "See a GP if the pain has not improved after treating it yourself for 2 weeks.",
      "Do plantar fascia and calf stretching exercises regularly for 4 to 6 weeks.",
      "Seek advice from your doctor, a physiotherapist or a podiatrist if self-care has not helped after two weeks.",
      "Contact a doctor about pain that is waking you or keeping you up at night.",
    ],
    tryThisWeek: [
      "Keep up rest, ice and stretches.",
      "Stretch regularly for 4 to 6 weeks.",
      "See a GP if no better in 2 weeks.",
    ],
    ask: "How long should I expect this to take, and when should we try something else?",
    interactive: {
      kind: "timeline",
      title: "A typical course of plantar fasciitis",
      steps: [
        { id: "start", when: "From the start", title: "Self-care at home", points: ["Rest, ice, supportive shoes and insoles.", "Gentle stretches for the sole and heel."] },
        { id: "two-weeks", when: "After 2 weeks", title: "See a GP if no better", points: ["Or sooner if it is severe or getting worse.", "In many areas you can refer yourself to physio."] },
        { id: "stretching", when: "4 to 6 weeks", title: "Keep stretching", points: ["Stretch the plantar fascia and calf regularly.", "A physio or podiatrist if self-care is not working."] },
        { id: "tissues", when: "6 to 12 weeks", title: "Tissues usually improve", points: ["Injury and inflamed tissues usually improve.", "Get a professional opinion if it is not improving."] },
        { id: "persists", when: "3 to 6 months", title: "If it persists", points: ["A referral to a surgeon may be considered.", "Other treatments may be offered."] },
        { id: "recovery", when: "Up to 18 months", title: "Full recovery", points: ["80% improve within 12 months, says one review.", "Full recovery can take up to 18 months."] },
      ],
    },
    sources: [CKS_PROG, AU_PHP, NHS_PF, NHS_RUNNING, CSP_LIVING, CKS_MGMT],
    quiz: {
      question: "According to Arthritis UK, how long can full recovery take?",
      options: [{ text: "Up to 18 months", right: true }, { text: "About 3 days" }, { text: "Exactly 6 weeks" }],
      why: "Arthritis UK says it can take up to 18 months to fully recover from plantar heel pain.",
    },
  },
  {
    id: "pfas-stretches",
    kicker: "Exercise",
    question: "Which stretches help the foot and calf?",
    hook: "A towel, a tin of beans and a wall. Simple stretches, done regularly, are one of the main things you can do yourself.",
    short: "Regular gentle stretches for the sole of the foot and the calf are one of the main self-care steps for plantar fasciitis. NICE's Clinical Knowledge Summary suggests doing them regularly for 4 to 6 weeks. Arthritis UK and the Chartered Society of Physiotherapy describe simple stretches with a towel, a round object such as a tin, and a wall.",
    sections: [
      {
        heading: "Why stretching helps",
        paragraphs: [
          "The NHS suggests regular gentle exercises to stretch the sole of your foot and your heel. NICE's Clinical Knowledge Summary advises doing plantar fascia and calf stretching exercises regularly for 4 to 6 weeks.",
          "One expert consensus statement cited by NICE concluded that stretching is safe and effective in the treatment of plantar fasciitis.",
        ],
      },
      {
        heading: "Check first, start gently",
        paragraphs: [
          "The Chartered Society of Physiotherapy recommends seeking advice from a physiotherapist or healthcare professional before starting any new exercise regime. If any of the exercises worsen your pain, it says to seek urgent medical advice.",
          "Start gently and slowly build up the amount you are doing once each exercise becomes easier or more comfortable. If your feet are stiff in the morning, you may find it easier to exercise once they have had time to loosen up.",
        ],
      },
      {
        heading: "With a towel, sitting down",
        paragraphs: [
          "Arthritis UK describes an Achilles tendon and plantar fascia stretch. Loop a towel around the ball of your foot and pull your toes towards your body, keeping your knee straight. Hold for 30 seconds, and repeat three times on each foot.",
          "For a sitting stretch, cross one foot over your knee, grab the base of your toes and pull them back towards your body until you feel a comfortable stretch. Hold for 15 to 20 seconds, and repeat three times.",
        ],
      },
      {
        heading: "Rolling the arch",
        paragraphs: [
          "For a roll stretch, sit down and rest the arch of your foot on a round object, such as a tin of beans. Roll your foot on it in all directions for a few minutes, twice a day.",
          "The NHS suggests freezing a small bottle of water, placing it on the floor and rolling it back and forth under your foot for about 15 to 20 minutes. Never place ice directly on your skin.",
        ],
      },
      {
        heading: "Against a wall",
        paragraphs: [
          "Face a wall with both hands on it at shoulder height and one foot in front of the other, the front foot around 30cm from the wall. With the back knee straight, bend the front knee towards the wall until the calf in your back leg feels tight. Relax, and repeat 10 times.",
          "Then bring the back foot forward a little, so the back knee is slightly bent, and repeat 10 times. The Chartered Society of Physiotherapy describes a similar standing stretch, bending the knees while keeping the heels on the floor until you feel a stretch in the calf of the back leg.",
        ],
      },
    ],
    helps: [
      "Seek advice from a physiotherapist or healthcare professional before starting any new exercise regime.",
      "Do plantar fascia and calf stretching exercises regularly for 4 to 6 weeks.",
      "Start gently and slowly build up the amount you are doing.",
      "If movement makes it feel worse or causes bursts of more intense pain, stop and consult a healthcare professional.",
      "Gently massage and stretch your calf, ankle and foot when you are resting.",
    ],
    tryThisWeek: [
      "Ask a physio before starting.",
      "Stretch regularly this week.",
      "Start gently and build up.",
    ],
    ask: "Which stretches suit my foot, and how often should I do them?",
    interactive: {
      kind: "flip-cards",
      title: "Five stretches, card by card",
      intro: "Check with your GP or physiotherapist first. Turn each card to see how the source describes it.",
      cards: [
        { id: "towel", front: "Towel stretch", when: "Sitting, knee straight", back: "Loop a towel around the ball of your foot, pull your toes towards you and hold for 30 seconds. Repeat three times on each foot." },
        { id: "toes", front: "Sitting toe pull", when: "Foot crossed over your knee", back: "Pull the base of your toes back towards you until you feel a comfortable stretch. Hold 15 to 20 seconds, three times." },
        { id: "roll", front: "Tin roll", when: "Sitting, twice a day", back: "Rest your arch on a round object, such as a tin of beans, and roll your foot in all directions for a few minutes." },
        { id: "wall", front: "Wall calf stretch", when: "Standing, hands on a wall", back: "Back knee straight, bend the front knee towards the wall until the back calf feels tight. Relax and repeat 10 times." },
        { id: "bottle", front: "Frozen bottle roll", when: "When it is painful", back: "Roll a small frozen bottle of water under your foot for about 15 to 20 minutes. Never place ice directly on skin." },
      ],
    },
    sources: [NHS_PF, CKS_MGMT, CSP_VIDEO, AU_FOOT, AU_EX_FEET, NHS_RUNNING, AU_PHP],
    quiz: {
      question: "How long does Arthritis UK suggest holding the towel stretch?",
      options: [{ text: "30 seconds", right: true }, { text: "5 minutes" }, { text: "1 second" }],
      why: "Hold for 30 seconds, and repeat three times on each foot.",
    },
  },
  {
    id: "pfas-footwear",
    kicker: "Footwear",
    question: "Which shoes, insoles and heel pads help heel pain?",
    hook: "Cushioned heels, good arch support and a small heel lift. And a few favourites to leave at the back of the wardrobe for now.",
    short: "Shoes with cushioned heels and good arch support help reduce the load on the plantar fascia. Arthritis UK suggests wide-fitting shoes that fasten with a lace or strap, with a heel slightly raised by about 2 to 3cm, such as a good sports shoe. Insoles and heel pads can help, and a podiatrist can advise on insoles, shoes or night splints.",
    sections: [
      {
        heading: "What to look for",
        paragraphs: [
          "Wear shoes with cushioned heels and good arch support, and use insoles or heel pads in your shoes.",
          "Arthritis UK suggests wide-fitting, comfortable shoes with a supportive sole and cushioned insole. They should fasten with a lace or strap and have a heel that is slightly raised by about 2 to 3cm, such as a good sports shoe.",
        ],
      },
      {
        heading: "What to avoid for now",
        paragraphs: [
          "Do not wear high heels, tight pointy shoes, flip-flops or backless slippers, and try not to walk barefoot on hard surfaces.",
          "Arthritis UK also suggests avoiding flat shoes.",
        ],
      },
      {
        heading: "Insoles and heel pads",
        paragraphs: [
          "You can ask a pharmacist about insoles and pads for your shoes. NICE's Clinical Knowledge Summary suggests over-the-counter insoles and heel pads that lift and cushion the heel.",
          "There is no proof that costly magnetic insoles are any better than regular cushioned insoles. NICE's Clinical Knowledge Summary notes that the evidence on insoles is conflicting, and one guideline says they should be used alongside other treatments rather than on their own.",
        ],
      },
      {
        heading: "Specialist help",
        paragraphs: [
          "If it does not get better, a podiatrist can recommend things like insoles and the right shoes to wear, or splints to wear at night. Podiatry may not be available for free on the NHS everywhere, and you can also pay to see a podiatrist privately.",
          "Each NHS trust has its own rules about which conditions qualify for free orthotics. If you cannot get a referral, you may need to pay to visit one privately.",
        ],
      },
      {
        heading: "Buying new shoes",
        paragraphs: [
          "Your feet can change shape, so it is worth getting them measured each time you shop for new footwear. Your foot shape also changes through the day, so you may be better trying on new shoes after you have been on your feet for some time.",
          "Arthritis UK says good footwear should have a 1cm gap between the end of your longest toe and the front of the shoe, and a broad heel no higher than 3cm on average. Take any insoles or pads with you when you shop, as you may need a larger shoe size.",
        ],
      },
    ],
    helps: [
      "Wear shoes with cushioned heels and good arch support.",
      "Use insoles or heel pads in your shoes.",
      "Ask your pharmacist about insoles, heel pads and other pain relief.",
      "Try new footwear on with any insoles you use.",
      "Do not wear flip-flops or backless slippers.",
    ],
    tryThisWeek: [
      "Wear cushioned, supportive shoes.",
      "Add insoles or heel pads.",
      "Put the flip-flops away.",
    ],
    ask: "Would insoles, heel pads or a night splint help me, and can I see a podiatrist?",
    interactive: {
      kind: "scenarios",
      title: "Choosing what to wear",
      scenarios: [
        {
          id: "slippers",
          situation: "At home you usually wear backless slippers.",
          options: [{ text: "Swap them for supportive footwear", best: true }, { text: "Keep wearing them indoors" }],
          why: "Do not wear high heels, tight pointy shoes, flip-flops or backless slippers, and try not to walk barefoot on hard surfaces.",
        },
        {
          id: "summer",
          situation: "It is summer and you want to wear flip-flops all day.",
          options: [{ text: "Choose supportive shoes instead", best: true }, { text: "Wear the flip-flops" }],
          why: "A common time of year for it to begin is the summer, when people walk barefoot or in unsupportive sandals and flip-flops.",
        },
        {
          id: "magnetic",
          situation: "An advert offers costly magnetic insoles.",
          options: [{ text: "Regular cushioned insoles", best: true }, { text: "The magnetic ones" }],
          why: "There is no proof that costly magnetic insoles are any better than regular cushioned insoles.",
        },
        {
          id: "heel",
          situation: "You are choosing between flat pumps and sports shoes.",
          options: [{ text: "Sports shoes with a slightly raised heel", best: true }, { text: "Completely flat shoes" }],
          why: "Arthritis UK suggests a heel slightly raised by about 2 to 3cm, such as a good sports shoe, and avoiding flat shoes.",
        },
        {
          id: "shop",
          situation: "You are buying new shoes and use insoles.",
          options: [{ text: "Take the insoles and try them in", best: true }, { text: "Buy your usual size without them" }],
          why: "Take any insoles or pads with you when you shop, as you may need a larger shoe size.",
        },
      ],
    },
    sources: [NHS_PF, AU_PHP, CKS_MGMT, AU_FOOTCARE, AU_FOOT, CSP_CAUSES],
    quiz: {
      question: "How much does Arthritis UK suggest the heel of your shoe is raised?",
      options: [{ text: "About 2 to 3cm", right: true }, { text: "About 10cm" }, { text: "Not at all" }],
      why: "They should fasten with a lace or strap and have a heel that is slightly raised by about 2 to 3cm, such as a good sports shoe.",
    },
  },
  {
    id: "pfas-pain-relief",
    kicker: "Treatment",
    question: "Do ice, rest and painkillers help heel pain?",
    hook: "A wrapped ice pack, the foot up on a stool, and the right painkiller for you. Simple comforts while the heel settles.",
    short: "The NHS suggests resting and raising your foot, an ice pack wrapped in a towel for up to 20 minutes every 2 to 3 hours, and painkillers such as paracetamol or ibuprofen gel if you need them. Arthritis UK notes that anti-inflammatory medicines such as ibuprofen are not usually recommended for plantar heel pain, as evidence of benefit is limited. A pharmacist can help you choose.",
    sections: [
      {
        heading: "Rest and raise",
        paragraphs: [
          "Rest and raise your foot on a stool when you can, and do not walk or stand for long periods.",
          "Arthritis UK suggests trying to avoid putting weight on your heel. Rather than exercising, gently move it from time to time to stop the area getting stiff, and wrap a bandage around the painful area firmly enough to support it, but not so tightly that it restricts the blood flow.",
        ],
      },
      {
        heading: "Ice",
        paragraphs: [
          "Put an ice pack, or a bag of frozen peas, in a towel on the painful area for up to 20 minutes every 2 to 3 hours.",
          "When it is painful, rolling a cold drink can over the base of your foot for about 20 minutes should help. Never place ice directly on your skin.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "The NHS suggests painkillers like paracetamol or ibuprofen gel, or ibuprofen tablets if you need them. A pharmacist can advise on the best painkiller to take.",
          "Arthritis UK says paracetamol may help relieve pain, but it does not treat the underlying cause. It says anti-inflammatory medicines such as ibuprofen are not usually recommended for plantar heel pain, because evidence of benefit is limited and they are not suitable for everyone.",
        ],
      },
      {
        heading: "Using them safely",
        paragraphs: [
          "You are less likely to get side effects from ibuprofen gel or spray than from tablets. Do not take ibuprofen tablets for more than 10 days unless a doctor advises it, and take the smallest dose you need for the shortest time.",
          "Ibuprofen may not be suitable if you have had a stomach ulcer, have asthma, or have a heart, liver or kidney condition. Do not take or use paracetamol for more than 3 days unless a doctor tells you to.",
        ],
      },
      {
        heading: "If you take too much",
        paragraphs: [
          "Get help from NHS 111 if you have taken more paracetamol or ibuprofen than it says on the packet or leaflet.",
          "If you are told to go to A&E, do not drive. Ask someone to drive you, or call 999 and ask for an ambulance.",
        ],
      },
    ],
    helps: [
      "Rest and raise your foot on a stool when you can.",
      "Put a towel-wrapped ice pack on the painful area for up to 20 minutes every 2 to 3 hours.",
      "Ask a pharmacist about the best painkiller to take.",
      "Check the packet or leaflet, and speak to a pharmacist or doctor if you are not sure a medicine is suitable.",
      "Do not take ibuprofen at the same time as other anti-inflammatory painkillers, such as naproxen or aspirin.",
    ],
    tryThisWeek: [
      "Raise your foot on a stool.",
      "Use a wrapped ice pack.",
      "Ask a pharmacist which painkiller.",
    ],
    ask: "Which painkiller is right for me, and is it safe with my other medicines?",
    interactive: {
      kind: "flip-cards",
      title: "Pain relief, card by card",
      intro: "Turn each card to see what the sources say about each one.",
      cards: [
        { id: "rest", front: "Rest and raise", when: "When you can", back: "Raise your foot on a stool, and do not walk or stand for long periods." },
        { id: "ice", front: "Wrapped ice pack", when: "Up to 20 minutes, every 2 to 3 hours", back: "An ice pack or frozen peas in a towel on the painful area. Never place ice directly on your skin." },
        { id: "paracetamol", front: "Paracetamol", when: "If you need a painkiller", back: "May help relieve pain, but does not treat the cause. No more than 3 days unless a doctor tells you to." },
        { id: "gel", front: "Ibuprofen gel", when: "Rubbed into the painful area", back: "Side effects are less likely than with tablets. Wash your hands after using it." },
        { id: "tablets", front: "Ibuprofen tablets", when: "If you need them", back: "Not usually recommended by Arthritis UK, and not suitable for everyone. No more than 10 days unless a doctor advises." },
      ],
    },
    sources: [NHS_PF, AU_PHP, NHS_RUNNING, NHS_IBUPROFEN, NHS_PARACETAMOL],
    quiz: {
      question: "How long does the NHS suggest using a wrapped ice pack at a time?",
      options: [{ text: "Up to 20 minutes", right: true }, { text: "All night" }, { text: "Two hours" }],
      why: "Put an ice pack, or a bag of frozen peas, in a towel on the painful area for up to 20 minutes every 2 to 3 hours.",
    },
  },
  {
    id: "pfas-further-treatment",
    kicker: "Treatment",
    question: "What if it does not get better: physio, injections and shockwave?",
    hook: "When home care is not enough, there is a next step: a physiotherapist or podiatrist first, then other treatments if needed.",
    short: "If plantar fasciitis does not get better, a physiotherapist can show you exercises and a podiatrist can recommend insoles, shoes or night splints. If these do not help, you may be offered steroid injections or shockwave therapy, and less commonly a referral to discuss surgery. In many areas you can refer yourself to NHS physiotherapy.",
    sections: [
      {
        heading: "Physiotherapy",
        paragraphs: [
          "If plantar fasciitis does not get better, you might need to see a physiotherapist or a podiatrist. In many areas you can get help, such as physiotherapy, from NHS community musculoskeletal services without a referral from a GP.",
          "A physiotherapist will assess how you walk and move, and may offer a home exercise programme, advice on pain and activity levels, and hands-on treatment such as stretches, taping or a splint.",
        ],
      },
      {
        heading: "Podiatry, insoles and splints",
        paragraphs: [
          "A podiatrist can recommend things like insoles and the right shoes to wear, or splints to wear at night. Physiotherapy is free on the NHS, but podiatry may not be available for free everywhere, and waiting times for both can sometimes be long.",
          "NICE's Clinical Knowledge Summary lists supervised stretching and strengthening exercises, insoles, night splints and foot or ankle taping among the options after a referral.",
        ],
      },
      {
        heading: "Steroid injections",
        paragraphs: [
          "If these things do not help, you may be offered steroid injections. Arthritis UK says they may be recommended in extreme cases.",
          "NICE's Clinical Knowledge Summary notes that the injection may be very painful, pain afterwards may last several days, and symptoms may return within a month. There is a rare risk of the heel's fat pad thinning or the plantar fascia tearing, and your doctor will probably recommend no more than three steroid injections into the same part of the body within a year.",
        ],
      },
      {
        heading: "Shockwave therapy",
        paragraphs: [
          "Another option is using a machine to deliver high-energy sound waves to your foot, called extracorporeal shockwave therapy. NICE describes it as using a machine to deliver sound waves to the painful area, with the aim of stimulating healing of the fascia.",
          "NICE says the evidence raises no major safety concerns, but evidence on how well it works is inconsistent. It should only be used with special arrangements, and patients should understand the uncertainty about how well it works.",
        ],
      },
      {
        heading: "Surgery, and going private",
        paragraphs: [
          "Less commonly, you may be referred to a specialist to discuss surgery. NICE's Clinical Knowledge Summary suggests a referral to an orthopaedic surgeon may be considered if symptoms are severe and affect daily life, or persist for 3 to 6 months after treatment from the GP surgery.",
          "You can also pay to see a podiatrist or physiotherapist privately. All orthotists, physiotherapists and podiatrists must be registered with the Health and Care Professions Council, and you can check a practitioner's credentials on its website.",
        ],
      },
    ],
    helps: [
      "Refer yourself to NHS community musculoskeletal services, if this is available in your area.",
      "Seek advice from your doctor, a physiotherapist or a podiatrist if self-care has not helped after two weeks.",
      "Do not overdo it for the first two weeks after a steroid injection.",
      "Carry a steroid card if you are given one, so any other doctor who treats you knows about it.",
      "Check that a private practitioner is registered with the Health and Care Professions Council.",
    ],
    tryThisWeek: [
      "Check if you can self-refer to physio.",
      "Ask about seeing a podiatrist.",
      "Check a private practitioner is registered.",
    ],
    ask: "What are my options if self-care has not worked, and what are the risks of each?",
    interactive: {
      kind: "flip-cards",
      title: "Further treatments, card by card",
      intro: "Turn each card to see when each treatment is used and what it involves.",
      cards: [
        { id: "physio", front: "Physiotherapy", when: "If self-care is not helping", back: "Exercises at home, advice on activity, and hands-on treatment such as stretches, taping or a splint." },
        { id: "podiatry", front: "Podiatry", when: "For insoles and shoes", back: "Can recommend insoles, the right shoes to wear, or splints to wear at night." },
        { id: "steroid", front: "Steroid injection", when: "If these things do not help", back: "May be very painful, and symptoms may return within a month. Usually no more than three a year in one place." },
        { id: "shockwave", front: "Shockwave therapy", when: "If other treatments have not helped", back: "A machine delivers sound waves to the painful area. No major safety concerns, but evidence on how well it works is inconsistent." },
        { id: "surgery", front: "Surgery", when: "Less commonly, if it persists", back: "A surgeon referral may be considered for severe symptoms, or after 3 to 6 months of treatment from the GP surgery." },
      ],
    },
    sources: [NHS_PF, NHS_MSK, CSP_HELP, CKS_MGMT, AU_PHP, AU_STEROID, NICE_ESWT, NICE_ESWT_REC, AU_FOOT],
    quiz: {
      question: "What does NICE say about the evidence on how well shockwave therapy works?",
      options: [{ text: "It is inconsistent", right: true }, { text: "It always works" }, { text: "It has been proved not to work" }],
      why: "NICE says the evidence raises no major safety concerns, but evidence on how well it works is inconsistent.",
    },
  },
  {
    id: "pfas-work-standing",
    kicker: "Work",
    question: "How can I manage heel pain when my job keeps me on my feet?",
    hook: "Shop floors, wards, warehouses and kitchens. Long hours standing load the heel, but there are changes you and your employer can make.",
    short: "Long periods of standing, especially in unsupportive footwear, are a common cause of plantar fasciitis. Shoes with some cushioning may help, and the NHS advises not standing or walking for long periods. Talking to your employer about reasonable adjustments, and the government's Access to Work scheme, can help you keep working.",
    sections: [
      {
        heading: "Why standing matters",
        paragraphs: [
          "The Chartered Society of Physiotherapy lists long periods of standing, especially in unsupportive footwear, among the common causes of plantar fasciitis. Doing a lot of standing, or a lot more than is usual for you, makes it more likely.",
          "A UK study of adults aged 50 and over, cited by NICE, found that heel pain under the foot was most common in people with routine and manual jobs.",
        ],
      },
      {
        heading: "Shoes for long shifts",
        paragraphs: [
          "Wearing shoes that offer some cushioning if you are on your feet for long periods may help. If you have particularly high or low arches, you may benefit from wearing insoles in your shoes.",
          "All safety shoes or boots should have a British Kitemark or CE mark. If your safety footwear does not fit properly or makes your pain worse, ask about changing it for footwear with greater depth and cushioning.",
        ],
      },
      {
        heading: "Breaking up the day",
        paragraphs: [
          "The NHS advises not walking or standing for long periods, and resting and raising your foot when you can.",
          "Arthritis UK lists standing for long periods among the parts of physical jobs that can be challenging. It suggests planning ahead, pacing yourself, and building some movement and stretching into your work routine, and notes that health and safety rules include a rest break if you work for 6 hours or more.",
        ],
      },
      {
        heading: "Talking to your employer",
        paragraphs: [
          "If you are finding physical parts of your work challenging, Arthritis UK suggests discussing it with your line manager, health and safety rep, human resources or union rep. Your employer may arrange a health and safety or occupational health assessment.",
          "Employers have to make reasonable adjustments so that workers with disabilities or health conditions are not substantially disadvantaged. These can include doing things another way, changing equipment, or flexible hours.",
          "Arthritis UK suggests thinking about which tasks could be reviewed, adapted or swapped, and writing down what you agree with your employer.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. It can give a grant to help pay for things like specialist equipment or physical changes to your workplace.",
          "An Access to Work grant will not affect any other benefits you get, and you will not have to pay it back. It will not pay for reasonable adjustments, which are the changes your employer is legally required to make.",
        ],
      },
    ],
    helps: [
      "Wear shoes that offer some cushioning if you are on your feet for long periods.",
      "Do not walk or stand for long periods, and rest and raise your foot when you can.",
      "Ask about changing safety footwear that makes your pain worse for footwear with greater depth and cushioning.",
      "Talk to your line manager, human resources or union rep about the physical parts of your job.",
      "Check whether you are eligible for an Access to Work grant.",
    ],
    tryThisWeek: [
      "Wear cushioned shoes for long shifts.",
      "Rest and raise your foot on breaks.",
      "Talk to your manager about your job.",
    ],
    ask: "What changes at work would help my heel recover?",
    interactive: {
      kind: "scenarios",
      title: "On your feet at work",
      scenarios: [
        {
          id: "shift",
          situation: "You stand at a till for a whole shift.",
          options: [{ text: "Ask about breaks and cushioned shoes", best: true }, { text: "Keep going without a break" }],
          why: "Do not walk or stand for long periods. Shoes that offer some cushioning if you are on your feet for long periods may help.",
        },
        {
          id: "boots",
          situation: "Your safety boots make your heel pain worse.",
          options: [{ text: "Ask about deeper, more cushioned boots", best: true }, { text: "Put up with them" }],
          why: "If your safety footwear makes your pain worse, ask about changing it for footwear with greater depth and cushioning.",
        },
        {
          id: "manager",
          situation: "Standing tasks are getting harder.",
          options: [{ text: "Talk to your manager or HR", best: true }, { text: "Say nothing and carry on" }],
          why: "If you are finding physical parts of your work challenging, discuss it with your line manager, health and safety rep, human resources or union rep.",
        },
        {
          id: "equipment",
          situation: "You need equipment your employer cannot easily fund.",
          options: [{ text: "Look into Access to Work", best: true }, { text: "Go without" }],
          why: "Access to Work can give a grant to help pay for things like specialist equipment or physical changes to your workplace.",
        },
      ],
    },
    sources: [CSP_CAUSES, NHS_PF, CKS_PREV, CSP_TREAT, AU_FOOTCARE, AU_WORK_SAFE, GOV_ADJUST, AU_ADJUSTMENTS, GOV_ATW],
    quiz: {
      question: "Does an Access to Work grant have to be paid back?",
      options: [{ text: "No", right: true }, { text: "Yes, within a year" }, { text: "Only if you leave the job" }],
      why: "An Access to Work grant will not affect any other benefits you get, and you will not have to pay it back.",
    },
  },
  {
    id: "pfas-exercise",
    kicker: "Staying active",
    question: "How can I stay active while my heel heals?",
    hook: "Not the time for long runs on hard ground. Swimming, cycling and a steady build-up keep you moving while the heel settles.",
    short: "The NHS suggests exercises that do not put pressure on your feet, such as swimming, while plantar fasciitis heals. Arthritis UK describes cycling as low impact. Runners usually need a break, but if heel pain is treated early it normally goes away in a few weeks, and running can then build back up slowly.",
    sections: [
      {
        heading: "Exercise that spares the heel",
        paragraphs: [
          "Try exercises that do not put pressure on your feet, such as swimming. Arthritis UK says swimming works the whole body but puts less weight through your joints, and walking in the pool or water-based aerobics classes also work your body.",
          "Arthritis UK describes cycling as a good exercise for the lower body that is low impact. You can use an exercise bike at a gym or get one for your home.",
        ],
      },
      {
        heading: "What to ease off",
        paragraphs: [
          "Do not do any sports or other activity that you think is causing the pain, and do not walk or stand for long periods.",
          "While resting the heel, Arthritis UK suggests gently moving it from time to time rather than exercising on it, to stop the area getting stiff.",
        ],
      },
      {
        heading: "Running",
        paragraphs: [
          "You will not be able to run with heel pain. If you treat the pain early enough, it will normally go away in a few weeks, after which you should be able to start running again.",
          "When you go back, do not be tempted to increase the intensity or distance of your running too quickly. Do a similar run at least 3 or 4 times before you increase your pace or distance.",
        ],
      },
      {
        heading: "Keeping up the weekly total",
        paragraphs: [
          "Adults should aim to do at least 150 minutes of moderate activity a week or 75 minutes of vigorous activity, and strengthening activities on at least 2 days a week. Riding a bike and water aerobics count as moderate activity.",
          "Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        ],
      },
      {
        heading: "Warming up and building up",
        paragraphs: [
          "Warm up before you exercise, for example by cycling or swimming gently and gradually increasing the effort you put in.",
          "Start off slowly and build up gradually: how often you exercise, how long for, and how hard you try. Well-fitting, comfortable trainers that offer support and help absorb shocks are a good idea.",
        ],
      },
    ],
    helps: [
      "Try exercises that do not put pressure on your feet, such as swimming.",
      "Do not do any sports or other activity that you think is causing the pain.",
      "Do a similar run at least 3 or 4 times before you increase your pace or distance.",
      "Warm up before you exercise, and start off slowly.",
      "Speak to your GP first if you have not exercised for some time.",
    ],
    tryThisWeek: [
      "Try a swim this week.",
      "Pause the activity causing pain.",
      "Warm up and start slowly.",
    ],
    ask: "Which activities are safe for me while my heel heals, and when can I get back to running?",
    interactive: {
      kind: "scenarios",
      title: "Keeping active",
      scenarios: [
        {
          id: "run",
          situation: "Your heel hurts but you have a run planned.",
          options: [{ text: "Rest from running and try a swim", best: true }, { text: "Run through the pain" }],
          why: "You will not be able to run with heel pain. Try exercises that do not put pressure on your feet, such as swimming.",
        },
        {
          id: "return",
          situation: "The pain has gone and you want to run again.",
          options: [{ text: "Build up slowly", best: true }, { text: "Go straight back to your longest run" }],
          why: "Do a similar run at least 3 or 4 times before you increase your pace or distance.",
        },
        {
          id: "gym",
          situation: "At the gym, you want a low-impact workout.",
          options: [{ text: "An exercise bike", best: true }, { text: "A long treadmill run" }],
          why: "Arthritis UK describes cycling as a good exercise for the lower body that is low impact.",
        },
        {
          id: "pool",
          situation: "You are not a confident swimmer.",
          options: [{ text: "Try walking in the pool or water aerobics", best: true }, { text: "Avoid the pool" }],
          why: "Walking in the pool or water-based aerobics classes also work your body.",
        },
      ],
    },
    sources: [NHS_PF, AU_EX_TYPE, NHS_SOLE, AU_PHP, NHS_RUNNING, NHS_ACTIVITY, AU_EX_START],
    quiz: {
      question: "Which kind of exercise does the NHS suggest while plantar fasciitis heals?",
      options: [{ text: "Exercise that does not put pressure on your feet, such as swimming", right: true }, { text: "Running on hard surfaces" }, { text: "No movement at all" }],
      why: "Try exercises that do not put pressure on your feet, such as swimming.",
    },
  },
  {
    id: "pfas-weight",
    kicker: "Weight",
    question: "Does weight make a difference to heel pain?",
    hook: "Every step puts weight through the heel. Even a small change can ease the strain, and support is there if you want it.",
    short: "Being overweight is one of the things that makes plantar fasciitis more likely, because it increases the strain on the heels. Arthritis UK says losing even a small amount of weight can improve pain levels. If you choose to lose weight, small realistic changes and free NHS support can help.",
    sections: [
      {
        heading: "Why weight matters to the heel",
        paragraphs: [
          "Being overweight increases the strain on your heels, and it is one of the things that make plantar fasciitis more likely. NICE's Clinical Knowledge Summary links it to extra loading on the foot.",
          "It is one of several risk factors, alongside long periods of standing, shoes with poor cushioning or support, and a tight calf.",
        ],
      },
      {
        heading: "A small change can help",
        paragraphs: [
          "If you are overweight, Arthritis UK says research shows that reducing the strain on the plantar fascia by losing even a small amount of weight can improve your pain levels.",
          "Losing weight, if you need to, can reduce the strain on your arches and may prevent further long-term changes.",
        ],
      },
      {
        heading: "Knowing where you are",
        paragraphs: [
          "A BMI calculator is the easiest way to work out if you are a healthy weight. BMI is only a rough guide, and a healthcare professional will look at it along with other factors.",
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
        heading: "Moving with a sore heel",
        paragraphs: [
          "Exercise is still important whatever your weight. Swimming is a good way to improve and maintain your fitness, because the water supports your body weight.",
          "If you have a medical condition or a special diet for your health, or have had an eating disorder, talk to a GP or healthcare professional before making any changes to your lifestyle.",
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
    ask: "Would changing my weight help my heel, and what support is available to me?",
    interactive: {
      kind: "scenarios",
      title: "Weight and your heels",
      scenarios: [
        {
          id: "small",
          situation: "You can only picture losing a little weight.",
          options: [{ text: "It can still help", best: true }, { text: "It is not worth it" }],
          why: "Losing even a small amount of weight can improve your pain levels.",
        },
        {
          id: "struggled",
          situation: "You have struggled to lose weight before.",
          options: [{ text: "Small, realistic changes, with support", best: true }, { text: "Give up on it" }],
          why: "If you have struggled with weight loss before, you are not alone. The NHS suggests small realistic changes.",
        },
        {
          id: "walking",
          situation: "Walking for exercise makes your heel hurt.",
          options: [{ text: "Try swimming instead", best: true }, { text: "Stop all activity" }],
          why: "Swimming is a good way to improve and maintain your fitness, because the water supports your body weight.",
        },
        {
          id: "condition",
          situation: "You have a medical condition and want to change your diet.",
          options: [{ text: "Talk to a GP first", best: true }, { text: "Start a new diet straight away" }],
          why: "If you have a medical condition, talk to a GP or healthcare professional before making any changes to your lifestyle.",
        },
      ],
    },
    sources: [AU_PHP, NHS_PF, CKS_CAUSES, CSP_CAUSES, AU_FOOT, AU_WEIGHT, NHS_LOSE_WEIGHT],
    quiz: {
      question: "According to Arthritis UK, how much weight loss can help heel pain?",
      options: [{ text: "Even a small amount", right: true }, { text: "Only a very large amount" }, { text: "None at all" }],
      why: "Arthritis UK says research shows that reducing the strain on the plantar fascia by losing even a small amount of weight can improve your pain levels.",
    },
  },
  {
    id: "pfas-coming-back",
    kicker: "Prevention",
    question: "How can I stop plantar fasciitis coming back?",
    hook: "Once the heel settles, the habits that helped it heal help keep it settled: good shoes, regular stretches and a steady build-up.",
    short: "The self-care that eases plantar fasciitis also helps reduce the risk of it coming back: supportive shoes, avoiding long periods of standing and walking barefoot, a healthy weight and regular stretches. Building up activity slowly helps too. See a GP if foot pain keeps coming back.",
    sections: [
      {
        heading: "The same habits help",
        paragraphs: [
          "NICE's Clinical Knowledge Summary describes self-care for relief and to reduce the risk of future episodes. It includes resting the foot if needed, avoiding long periods of standing or walking, comfortable shoes with good arch support and a small heel, such as laced sports shoes, and avoiding walking barefoot.",
          "It also suggests insoles and heel pads that lift and cushion the heel, and losing weight if you are overweight.",
        ],
      },
      {
        heading: "Shoes all year round",
        paragraphs: [
          "A common time of year for plantar fasciitis to begin is the summer, when people walk barefoot or in unsupportive sandals and flip-flops.",
          "Wearing good, supportive, properly fitting footwear is an essential part of caring for your feet. Your feet can change shape at any time, so it is worth getting them measured each time you shop for new footwear.",
        ],
      },
      {
        heading: "Keep stretching",
        paragraphs: [
          "Gentle stretches to the calf and plantar fascia will most likely help. Tightness in the calf is one of the causes of plantar heel pain.",
          "Arthritis UK's foot exercises include standing heel raises. Using a counter or chair for support, rise up on your tiptoes with your knees straight, then slowly lower your feet back down, 10 times.",
          "The Chartered Society of Physiotherapy recommends seeking advice from a physiotherapist or healthcare professional before starting any new exercise regime.",
        ],
      },
      {
        heading: "Building up slowly",
        paragraphs: [
          "Heel pain can come from suddenly doing a lot more running, running uphill, or shoes that are not supportive enough or are worn out. Do not be tempted to increase the intensity or distance of your running too quickly.",
          "Warm up with five to 10 minutes of brisk walking or gentle jogging before you run. It is best to go to a running shop to get fitted for the correct running shoes.",
        ],
      },
      {
        heading: "If it keeps returning",
        paragraphs: [
          "See a GP if your foot pain is getting worse or keeps coming back. Arthritis UK suggests speaking to your doctor or a footcare specialist if the problem keeps coming back or lasts longer than three months.",
          "A physiotherapist can guide you on exercises, graded strengthening, footwear advice and changing your activity level. A podiatrist may help further with specialist insoles once you have begun exercises to address tightness and weakness.",
        ],
      },
    ],
    helps: [
      "Wear comfortable shoes with good arch support and a small heel, such as laced sports shoes.",
      "Avoid walking barefoot, and avoid long periods of standing or walking if possible.",
      "Keep up gentle stretches to the calf and plantar fascia.",
      "Do not increase the intensity or distance of your running too quickly.",
      "See a GP if your foot pain keeps coming back.",
    ],
    tryThisWeek: [
      "Wear supportive, laced shoes.",
      "Keep up gentle stretches.",
      "Build up running slowly.",
    ],
    ask: "What can I do to stop this coming back, and should I see a physiotherapist or podiatrist?",
    interactive: {
      kind: "scenarios",
      title: "Keeping it away",
      scenarios: [
        {
          id: "summer",
          situation: "Summer is here and the flip-flops are out.",
          options: [{ text: "Choose supportive shoes", best: true }, { text: "Wear flip-flops every day" }],
          why: "A common time of year for plantar fasciitis to begin is the summer, when people walk barefoot or in unsupportive sandals and flip-flops.",
        },
        {
          id: "stretching",
          situation: "Your heel feels better, so you think about stopping your stretches.",
          options: [{ text: "Keep up gentle stretches", best: true }, { text: "Stop them for good" }],
          why: "Gentle stretches to the calf and plantar fascia will most likely help.",
        },
        {
          id: "training",
          situation: "You are training for a longer race.",
          options: [{ text: "Increase the distance gradually", best: true }, { text: "Double your distance this week" }],
          why: "Do not be tempted to increase the intensity or distance of your running too quickly.",
        },
        {
          id: "returns",
          situation: "The heel pain comes back for a third time.",
          options: [{ text: "See a GP", best: true }, { text: "Ignore it" }],
          why: "See a GP if your foot pain is getting worse or keeps coming back.",
        },
      ],
    },
    sources: [CKS_MGMT, CSP_CAUSES, AU_FOOTCARE, CSP_TREAT, AU_PHP, AU_EX_FEET, CSP_VIDEO, NHS_RUNNING, NHS_PF, AU_FOOT, CSP_LIVING],
    quiz: {
      question: "When does the Chartered Society of Physiotherapy say plantar fasciitis commonly begins?",
      options: [{ text: "In the summer", right: true }, { text: "In the winter" }, { text: "At no particular time" }],
      why: "A common time of year for plantar fasciitis to begin is the summer, when people walk barefoot or in unsupportive sandals and flip-flops.",
    },
  },
];
