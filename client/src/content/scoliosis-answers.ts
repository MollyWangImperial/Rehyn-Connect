import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Scoliosis page's pieces (content/library-conditions/body-more.ts). Every sentence
// was written from wording checked on 22 October 2026 on the pages listed under each answer's `sources`; nothing is
// added that those pages do not say. Most of it comes from the NHS and from Scoliosis Support & Research, the UK
// scoliosis charity formed in 2023 when Scoliosis Association UK merged with The British Scoliosis Research
// Foundation (sauk.org.uk refuses scripted reads; the charity's pages now live on ssr.org.uk, which the NHS links to).
// The page is written for adults; childhood scoliosis appears only as background. Exercises are described only as the
// sources describe them. General information only; it never replaces what a person's own GP, physiotherapist,
// midwife or scoliosis specialist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const ssr = (label: string, path: string): LearnSource => ({ label: `Scoliosis Support & Research: ${label}`, url: `https://ssr.org.uk/${path}` });
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/conditions/back-pain/${path}` });

const NHS_SCOL = nhs("Scoliosis", "conditions/scoliosis/");
const NHS_ADULTS = nhs("Scoliosis: treatment in adults", "conditions/scoliosis/treatment-in-adults/");
const NHS_CHILDREN = nhs("Scoliosis: treatment in children", "conditions/scoliosis/treatment-in-children/");
const NHS_BACK = nhs("Back pain", "conditions/back-pain/");
const NHS_LUMBAR = nhs("Lumbar decompression surgery", "tests-and-treatments/lumbar-decompression-surgery/");
const NHS_XRAY = nhs("X-ray", "tests-and-treatments/x-ray/");
const NHS_PREG_BACK = nhs("Back pain in pregnancy", "pregnancy/common-symptoms/back-pain/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_OLDER = nhs("Physical activity guidelines for older adults", "live-well/exercise/physical-activity-guidelines-older-adults/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");

const SSR_WHAT = ssr("What is scoliosis?", "scoliosis/what-is-scoliosis/");
const SSR_FAQ = ssr("Frequently asked questions", "scoliosis/faqs/");
const SSR_AIS = ssr("Adolescent idiopathic scoliosis", "scoliosis/adolescent-idiopathic-scoliosis/");
const SSR_ADULT = ssr("Adult degenerative scoliosis", "scoliosis/adult-degenerative-scoliosis/");
const SSR_AGEING = ssr("Coping with an ageing spine", "scoliosis/ageing-spine/");
const SSR_NHS = ssr("Navigating treatment on the NHS", "scoliosis/navigating-treatment-on-the-nhs/");
const SSR_BRACE = ssr("Scoliosis back bracing", "scoliosis/bracing/");
const SSR_THERAPIES = ssr("Complementary therapies", "scoliosis/non-surgical-scoliosis-treatments/");
const SSR_PAIN = ssr("Pain management", "scoliosis/pain-management-for-scoliosis/");
const SSR_BREATHING = ssr("Scoliosis and breathing", "scoliosis/scoliosis-and-breathing/");
const SSR_PREG = ssr("Scoliosis and pregnancy", "scoliosis/scoliosis-and-pregnancy/");
const SSR_DEG_SURG = ssr("Scoliosis surgery for adults", "scoliosis/surgery-for-degenerative-scoliosis/");
const SSR_BEFORE_AFTER = ssr("Surgery before and after", "scoliosis/before-and-after-scoliosis-surgery/");
const SSR_ABCD = ssr("The ABCD of scoliosis", "2025/05/27/abcd-of-scoliosis/");
const SSR_HELPLINE = ssr("Helpline", "helpline/");
const SSR_GROUPS = ssr("Online support groups", "online-support-groups/");
const SSR_TALKING = ssr("Talking therapy services", "talking-therapy-services/");
const SSR_EVENTS = ssr("Patient events", "patient-events/");
const SSR_SPECIALIST = ssr("Find a specialist", "find-a-specialist/");
const SSR_HISTORY = ssr("Mission and history", "about-us/mission-history/");
const SSR_HOME = ssr("Home page", "");

const CSP_CAUSES = csp("Causes of back pain", "causes-back-pain");
const CSP_VIDEO = csp("Video exercises for back pain", "video-exercises-back-pain");
const BACKCARE_CONDITIONS: LearnSource = { label: "BackCare: Conditions", url: "https://backcare.org.uk/i-have-back-or-neck-pain/conditions/" };

export const scoliosisAnswers: LearnArticle[] = [
  {
    id: "scol-what-it-is",
    kicker: "Understanding",
    question: "What is scoliosis, and why does a spine curve?",
    hook: "A spine that bends to the side, and often twists as well. Usually nobody knows why, and it is never anyone's fault.",
    short: "Scoliosis is where the spine twists and curves to the side. It can affect people of any age, but most often starts in children aged 10 to 15. In around 8 in every 10 cases the cause is unknown, and it is not caused by bad posture.",
    sections: [
      {
        heading: "A curve and a twist",
        paragraphs: [
          "Scoliosis is where the spine twists and curves to the side. It can affect people of any age, from babies to adults, but most often starts in children aged 10 to 15.",
          "Scoliosis Support & Research explains that the spine can sometimes twist at the same time as it curves, and this twisting can pull the ribcage out of position. Sometimes there are two curves, and the spine may look like an S shape from behind.",
        ],
      },
      {
        heading: "Not rare, and not anyone's fault",
        paragraphs: [
          "Scoliosis is not a disease and it is not infectious, contagious or the result of bad posture. It is not anyone's fault and does not develop because of someone's actions or behaviours.",
          "Although many people have not heard of it, scoliosis is not rare. Scoliosis Support & Research puts the number of people in the UK with scoliosis at more than 2 million.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "In around 8 in every 10 cases, the cause is unknown. This is called idiopathic scoliosis. It cannot be prevented and is not thought to be linked to things such as bad posture, exercise or diet.",
          "Your genes may make you more likely to get it, as it sometimes runs in families. Around a quarter of people with scoliosis have a close relative with a curvature of the spine.",
          "Less commonly, scoliosis is present from birth because the bones in the spine did not form properly (congenital scoliosis), is caused by a nerve or muscle condition such as cerebral palsy (neuromuscular scoliosis), or comes from wear and tear of the spine with age (degenerative scoliosis, which affects older adults).",
        ],
      },
      {
        heading: "Where the curve is",
        paragraphs: [
          "The curve can be in the chest area, known as thoracic scoliosis, or in the lower, lumbar area of the spine. A large thoracic curve can affect how well the lungs work.",
          "The good news is that the vast majority of people with a curve in the chest part of the spine will not develop heart or lung problems, as most have small curves.",
        ],
      },
      {
        heading: "What it usually means",
        paragraphs: [
          "Scoliosis is not usually a sign of anything serious, and treatment is not always needed if it is mild. Most people with scoliosis are able to live normal lives and can do most activities, including exercise and sports.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have scoliosis: it is unlikely that anything is seriously wrong, but it is best to get it checked out.",
      "Ask your GP for a referral to a scoliosis specialist, who can assess the curve and plan the best treatment options.",
      "Contact the Scoliosis Support & Research helpline on 020 8964 1166 to find out where your nearest specialist is based.",
      "See a GP if your scoliosis gets any worse.",
      "If scoliosis makes you breathless, see your GP, who can measure your breathing or refer you to a respiratory medicine department.",
    ],
    tryThisWeek: [
      "See a GP about a possible curve.",
      "Ask about a specialist referral.",
      "Call the helpline to find a specialist.",
    ],
    ask: "What type of scoliosis do I have, and where in my spine is the curve?",
    interactive: {
      kind: "flip-cards",
      title: "Types of scoliosis",
      intro: "Turn each card to see what each type means.",
      cards: [
        { id: "idiopathic", front: "Idiopathic scoliosis", when: "Around 8 in 10 cases", back: "The cause is unknown. It cannot be prevented and is not thought to be linked to bad posture, exercise or diet." },
        { id: "congenital", front: "Congenital scoliosis", when: "Present from birth", back: "The bones in the spine did not form properly in the womb." },
        { id: "neuromuscular", front: "Neuromuscular scoliosis", when: "With a nerve or muscle condition", back: "Caused by an underlying condition, such as cerebral palsy or muscular dystrophy." },
        { id: "degenerative", front: "Degenerative scoliosis", when: "Older adults", back: "Wear and tear of the spine with age makes it curve." },
        { id: "syndromic", front: "Syndromic scoliosis", when: "As part of a syndrome", back: "Scoliosis can develop as part of a syndrome, such as Marfan syndrome." },
      ],
    },
    sources: [NHS_SCOL, SSR_WHAT, SSR_FAQ, SSR_HOME, SSR_BREATHING],
    quiz: {
      question: "What causes most cases of scoliosis?",
      options: [{ text: "The cause is unknown", right: true }, { text: "Bad posture" }, { text: "Carrying heavy bags" }],
      why: "In around 8 in every 10 cases, the cause is unknown.",
    },
  },
  {
    id: "scol-signs",
    kicker: "Signs",
    question: "What are the signs of scoliosis?",
    hook: "Uneven shoulders, a hip that sticks out, clothes that hang oddly. And in adults, often back pain.",
    short: "Signs of scoliosis include a visibly curved spine, leaning to one side, uneven shoulders, one shoulder or hip sticking out, the ribs sticking out on one side and clothes not fitting well. Some people also have back pain, which is more common in adults. See a GP if you think you have it.",
    sections: [
      {
        heading: "What you might notice",
        paragraphs: [
          "Signs of scoliosis include a visibly curved spine, leaning to one side, uneven shoulders, one shoulder or hip sticking out, the ribs sticking out on one side, and clothes not fitting well.",
          "Some people with scoliosis may also have back pain. This is usually more common in adults with the condition.",
        ],
      },
      {
        heading: "The ABCD of scoliosis",
        paragraphs: [
          "Scoliosis Support & Research uses four letters to help people spot the signs. A is for asymmetry: uneven shoulders, hips or waist. B is for bend forward: look for rib or back bulges when bending.",
          "C is for check for curve: notice an abnormal curve of the spine. D is for diagnosis, which is confirmed by a specialist X-ray.",
        ],
      },
      {
        heading: "The forward bend test",
        paragraphs: [
          "One of the best ways to check for signs of scoliosis is the Adam's forward bend test. With the back uncovered, the person bends forward from the waist, keeping their legs and arms straight. If scoliosis is present, you may be able to see a bulge in the ribs area on the back.",
          "This is not a formal diagnosis, but the findings can put you on the right path to specialist support. The twist in the spine makes one side appear more prominent when looking down the spine in the bent-forward position.",
        ],
      },
      {
        heading: "Signs in adults",
        paragraphs: [
          "When scoliosis develops in adults through wear of the joints and discs in the spine, people can have a curve in the spine, back pain, weakness in the legs or feet, and a loss of flexibility.",
          "In children, the most common time for scoliosis to develop is between the ages of 10 and 15, and parents or carers are often the first to notice it.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if you think you or your child has scoliosis. It is unlikely that there is anything seriously wrong, but it is best to get it checked out.",
          "The NHS also advises seeing a GP if you have back pain and there is a lump or swelling in your back, or your back has changed shape.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have scoliosis, so it can be checked out.",
      "Look for uneven shoulders, hips or waist.",
      "Look for rib or back bulges when bending forward.",
      "See a GP if you have back pain and your back has changed shape.",
      "Ask for an urgent GP appointment or get help from 111 if you have back pain that is severe, starts suddenly or is getting worse quickly.",
    ],
    tryThisWeek: [
      "See a GP about a possible curve.",
      "Check for uneven shoulders or hips.",
      "Look for bulges when bending forward.",
    ],
    ask: "Could the change in my shoulders, hips or back be scoliosis, and should I see a specialist?",
    interactive: {
      kind: "signs",
      title: "Signs to mention",
      intro: "Tick anything you have noticed. The ones you tick become a list to take to the GP.",
      signs: [
        "A visibly curved spine",
        "Leaning to one side",
        "Uneven shoulders",
        "One shoulder or hip sticking out",
        "The ribs sticking out on one side",
        "Clothes not fitting well",
        "Back pain",
        "Weakness in the legs or feet",
        "A loss of flexibility",
      ],
      after: "See a GP if you think you have scoliosis. It is unlikely that anything is seriously wrong, but it is best to get it checked out.",
      copyHeading: "Things I have noticed",
    },
    sources: [NHS_SCOL, SSR_AIS, SSR_ABCD, NHS_BACK, SSR_ADULT, SSR_NHS],
    quiz: {
      question: "Who is back pain from scoliosis usually more common in?",
      options: [{ text: "Adults", right: true }, { text: "Babies" }, { text: "Young children" }],
      why: "Some people with scoliosis may also have back pain. This is usually more common in adults with the condition.",
    },
  },
  {
    id: "scol-adults",
    kicker: "Adults",
    question: "What does scoliosis mean for adults?",
    hook: "A curve carried from the teenage years, or a new one that comes with age. Either way, the main problem is usually pain.",
    short: "In adults, scoliosis is either a curve from younger years that changes with age, or a new curve caused by wear and tear of the discs and joints in the spine. It is typically diagnosed after the age of 50. Back pain is one of the main problems, so treatment is mainly aimed at pain relief.",
    sections: [
      {
        heading: "Two kinds of adult scoliosis",
        paragraphs: [
          "Scoliosis Support & Research describes two kinds. In one, an adult who has had scoliosis since they were younger finds the spine starts to show wear and tear with age, and the curve can increase.",
          "In the other, called de novo (new) scoliosis, a curve first appears in adulthood without any history of the condition. Adult degenerative scoliosis is typically diagnosed after the age of 50.",
        ],
      },
      {
        heading: "What happens in the spine",
        paragraphs: [
          "Each vertebra is joined to the next by a disc at the front and two facet joints at the back. When discs wear down they lose height, and the facet joints can wear too.",
          "If this happens unevenly, the vertebrae start to tilt or rotate on top of one another, which leads to a curve. Often the spine also bends forward more than normal and twists.",
        ],
      },
      {
        heading: "How it feels",
        paragraphs: [
          "Back pain is one of the main problems caused by scoliosis in adults. A consultant writing for Scoliosis Support & Research describes arthritic pain where the joints are worn, often worse first thing in the morning, nerve pain from squashed nerves, and pain from tired muscles working harder to hold the spine up.",
          "It is not uncommon for people to say that by the mid-afternoon they need to lie down to ease the muscle pain. As the condition advances, some people notice a change in the shape of the back and find standing upright increasingly difficult.",
        ],
      },
      {
        heading: "Common, and often without symptoms",
        paragraphs: [
          "About 30 per cent of people older than 70 have an abnormality in the shape of their spine, but not all of them have symptoms. Many people with degenerative scoliosis do not know they have one, and many do not need treatment because they have no symptoms.",
          "Curves in adults of less than 30 degrees rarely get bigger. Curves of 50 degrees or more may increase by an average of 1 degree per year, and in this case surgery is often advised.",
        ],
      },
      {
        heading: "Treatment for adults",
        paragraphs: [
          "If the condition is not severe and is not causing any pain, treatment may not be needed. Most adults with degenerative scoliosis are given non-surgical treatment, such as anti-inflammatory painkillers, physiotherapy and low-impact exercise to improve strength.",
          "Most adults with scoliosis will not need surgery. Walking aids such as sticks and rollator frames can be very effective as a support, holding up the spine when the muscles are tired.",
        ],
      },
    ],
    helps: [
      "Ask to see a scoliosis specialist, who can advise you on a case-by-case basis.",
      "When there are symptoms, try non-surgical measures first, such as pain medicines and physiotherapy.",
      "Consider a walking aid, such as a stick or rollator frame, to support the spine when the muscles are tired.",
      "See a GP if your scoliosis gets any worse.",
      "Take someone with you to specialist appointments for moral support, and to help you remember what was said.",
    ],
    tryThisWeek: [
      "Ask about seeing a specialist.",
      "Try non-surgical measures first.",
      "Take someone to appointments.",
    ],
    ask: "Is my scoliosis the kind that comes with age, and which of my symptoms come from it?",
    interactive: {
      kind: "flip-cards",
      title: "Kinds of pain",
      intro: "Turn each card to see how a consultant writing for Scoliosis Support & Research describes it.",
      cards: [
        { id: "joint", front: "Arthritic pain", when: "Where the joints are worn", back: "Often worse first thing in the morning and when rolling over in bed. Sometimes eased once you get moving." },
        { id: "nerve", front: "Nerve pain", when: "Where nerves are squashed", back: "Can cause heavy or tingling legs, or a pain that can feel like sciatica." },
        { id: "muscle", front: "Tired muscle pain", when: "Later in the day", back: "The muscles work harder to hold the spine up, get tired with activity and become painful." },
        { id: "other", front: "Pain in other joints", when: "Joints that compensate", back: "Joints loaded differently to make up for the spine, such as the hip, knee or ankle, can hurt too." },
      ],
    },
    sources: [NHS_ADULTS, SSR_ADULT, SSR_AGEING, NHS_SCOL, SSR_DEG_SURG],
    quiz: {
      question: "How often do curves of less than 30 degrees get bigger in adults?",
      options: [{ text: "Rarely", right: true }, { text: "Always" }, { text: "Every year" }],
      why: "Curves in adults of less than 30 degrees rarely get bigger.",
    },
  },
  {
    id: "scol-diagnosis",
    kicker: "Tests",
    question: "How is the curve measured on an X-ray?",
    hook: "One number, in degrees, describes the curve. And for adults, whether you stand or lie for the picture matters.",
    short: "An X-ray of the back is used to check how big the curve is. The size is given as the Cobb angle, measured in degrees. For adults, X-rays taken standing up matter, because the spine changes shape when you lie down.",
    sections: [
      {
        heading: "From GP to specialist",
        paragraphs: [
          "If a GP suspects scoliosis, they should refer you to a specialist. An X-ray of your back will be carried out to check how big the curve is.",
          "Most adults first see their GP or a community musculoskeletal service. The examination will include the back and possibly the arms and legs, to look for linked conditions and any nerve problems.",
        ],
      },
      {
        heading: "The Cobb angle",
        paragraphs: [
          "At the first appointment with a scoliosis specialist you will be examined, X-rays will be taken, and you will be told the Cobb angle. The Cobb angle is measured in degrees and tells you the size of the curve.",
          "The Cobb angle is calculated from a standing X-ray. Every scoliosis is different and there is no standard treatment, which is why consulting a specialist is essential.",
        ],
      },
      {
        heading: "Why standing X-rays matter",
        paragraphs: [
          "A common starting test is a standing X-ray of the spine, taken without any support for the body if possible. In adult scoliosis, X-rays from the side are particularly important, because tilting too far forwards or backwards can have the biggest effect on you.",
          "The spine has a different position under load than when you are lying down, and some curves go back to a normal position when lying down. That is why a degenerative scoliosis is often not easy to see on an MRI scan, which is taken lying down.",
        ],
      },
      {
        heading: "Other scans",
        paragraphs: [
          "An MRI scan uses a powerful magnet to give detailed pictures of the nerves, discs and other structures. A CT scan is excellent for looking at the structure of the bones themselves.",
          "A bone density scan, often called a DEXA scan, measures how dense your bones are. It may be used because bone quality can affect the strength of fixing points, such as screws used in surgery.",
        ],
      },
      {
        heading: "Having an X-ray",
        paragraphs: [
          "An X-ray takes pictures of the inside of the body using a small amount of radiation, and the X-ray itself should only take a few minutes. You will not feel anything when it is taken.",
          "Tell the healthcare professional if you are pregnant or might be pregnant. If you have lots of X-rays, there is a very small risk that the radiation could cause cancer, and your doctor will assess the risks before offering one.",
        ],
      },
    ],
    helps: [
      "Ask your GP for a referral to a scoliosis specialist.",
      "Take the names of your nearest scoliosis specialists to your GP, who will organise the referral.",
      "If your GP will not refer you, ask why. If there is no clear reason, make an appointment with another GP at the practice.",
      "Tell the person doing your X-ray if you are pregnant or might be pregnant.",
      "If you have not heard about your X-ray results after a few weeks, contact the doctor who referred you, or your GP.",
      "It is fine to ask your specialist further questions, or for a second opinion.",
    ],
    tryThisWeek: [
      "Take specialist names to your GP.",
      "Say if you might be pregnant.",
      "Chase results after a few weeks.",
    ],
    ask: "What is my Cobb angle, and was my X-ray taken standing up?",
    interactive: {
      kind: "flip-cards",
      title: "Tests, card by card",
      intro: "Turn each card to see what each test shows.",
      cards: [
        { id: "xray", front: "Standing X-ray", when: "The usual first test", back: "Shows the curve with the spine under load. Side views matter in adults." },
        { id: "cobb", front: "Cobb angle", when: "Read from the X-ray", back: "Measured in degrees, it tells you the size of the curve." },
        { id: "mri", front: "MRI scan", when: "Lying down", back: "Detailed pictures of the nerves, discs and other structures, using a powerful magnet." },
        { id: "ct", front: "CT scan", when: "When bone detail is needed", back: "Excellent for looking at the structure of the bones themselves." },
        { id: "dexa", front: "DEXA scan", when: "Bone density", back: "Measures how dense the bones are, which can matter for screws used in surgery." },
      ],
    },
    sources: [NHS_SCOL, SSR_FAQ, SSR_ADULT, SSR_AGEING, SSR_NHS, NHS_XRAY, SSR_BREATHING],
    quiz: {
      question: "What does the Cobb angle tell you?",
      options: [{ text: "The size of the curve", right: true }, { text: "How much pain you have" }, { text: "How dense your bones are" }],
      why: "The Cobb angle is measured in degrees and tells you the size of the curve.",
    },
  },
  {
    id: "scol-monitoring",
    kicker: "Monitoring",
    question: "Will my curve get worse, and how is it checked?",
    hook: "Many curves only need watching. Most stay the same once growing stops.",
    short: "Many curves only need checks. In children, the curve is usually checked every 6 to 12 months while they grow. Scoliosis tends to stay the same after you stop growing, and in adults small curves rarely get bigger, so see a GP if it gets worse.",
    sections: [
      {
        heading: "Watching and waiting",
        paragraphs: [
          "Treatment for scoliosis depends on your age, how severe the curve is, and whether it is likely to get worse with time. Many people will not need any treatment.",
          "If the curve is small, the first decision may be simply to keep a watch on it. You will usually be seen again at a suitable interval to see how the curve changes over time.",
        ],
      },
      {
        heading: "Checks while growing",
        paragraphs: [
          "In children, a specialist may recommend regular examinations and X-rays to monitor the curve and decide if treatment is needed. Regular monitoring may also be recommended for older children with mild scoliosis, as treatment might not be needed if it is not getting worse.",
          "A child's curve will likely be assessed every 6 to 12 months, or more often while they are growing quickly. If the curve becomes larger, the specialist might suggest bracing or surgery.",
        ],
      },
      {
        heading: "After growth stops",
        paragraphs: [
          "Scoliosis does not usually cause significant pain or other health problems, and tends to stay the same after you stop growing. See a GP if it gets any worse.",
          "Curves in adults of less than 30 degrees rarely get bigger. Curves of 50 degrees or more may increase by an average of 1 degree per year, and in this case surgery is often advised.",
        ],
      },
      {
        heading: "X-rays when there are symptoms",
        paragraphs: [
          "A consultant writing for Scoliosis Support & Research says that in most cases, tests such as X-rays should only be done when a person has symptoms. Decisions about treatment are usually guided by symptoms.",
          "If you feel your curve is getting worse, tell the team looking after you. It does not always mean urgent treatment is needed, and you should continue to be active.",
        ],
      },
    ],
    helps: [
      "Keep your follow-up appointments, so the specialist can see how the curve changes over time.",
      "See a GP if your scoliosis gets any worse.",
      "Tell the team looking after you if you feel your curve is getting worse.",
      "Keep active while the curve is being watched.",
      "Write down questions as they come to you, so you can ask them at your next appointment.",
    ],
    tryThisWeek: [
      "Keep your follow-up appointment.",
      "Tell the team about changes.",
      "Write down your questions.",
    ],
    ask: "How likely is my curve to change, and when should I next be checked?",
    interactive: {
      kind: "scenarios",
      title: "Between check-ups",
      scenarios: [
        {
          id: "worse",
          situation: "You feel your curve has got a little worse since your last check.",
          options: [{ text: "Tell the team looking after you", best: true }, { text: "Stop being active until it is checked" }],
          why: "If you feel your curve is getting worse, tell the team looking after you.",
        },
        {
          id: "small",
          situation: "Your adult curve is 20 degrees and has caused no problems.",
          options: [{ text: "Small adult curves rarely get bigger", best: true }, { text: "It will grow every year" }],
          why: "Curves in adults of less than 30 degrees rarely get bigger.",
        },
        {
          id: "xray",
          situation: "You have no symptoms and wonder about asking for a yearly X-ray.",
          options: [{ text: "X-rays are usually for when there are symptoms", best: true }, { text: "Ask for one every year anyway" }],
          why: "A consultant writing for Scoliosis Support & Research says that in most cases, tests such as X-rays should only be done when a person has symptoms.",
        },
      ],
    },
    sources: [NHS_SCOL, NHS_CHILDREN, SSR_AIS, SSR_ADULT, SSR_AGEING, SSR_NHS],
    quiz: {
      question: "What usually happens to scoliosis after you stop growing?",
      options: [{ text: "It tends to stay the same", right: true }, { text: "It always gets worse" }, { text: "It disappears" }],
      why: "Scoliosis does not usually cause significant pain or other health problems, and tends to stay the same after you stop growing.",
    },
  },
  {
    id: "scol-brace",
    kicker: "Treatment",
    question: "Do back braces help, for adults as well as children?",
    hook: "In growing children a brace aims to stop a curve getting worse. In adults it is a support for pain, used sparingly.",
    short: "Back braces are mainly used for children and teenagers who are still growing; they do not correct the curve but may stop it getting worse. In adults, braces are not often used, but they can ease pain by supporting the spine. They should be used sparingly, as wearing one too much can weaken the muscles.",
    sections: [
      {
        heading: "Braces in adults",
        paragraphs: [
          "Back braces are not often used in adults with scoliosis, but they can provide pain relief by supporting your spine. A brace may be considered as an alternative to surgery if you are not well enough to have an operation.",
          "Braces may help when tired muscles or arthritic pain cause problems. A consultant writing for Scoliosis Support & Research says they should be used sparingly, ideally under the supervision of a therapist, because if you wear a brace too much the muscles can get weak.",
        ],
      },
      {
        heading: "Why braces are used in growing children",
        paragraphs: [
          "Many adults first met scoliosis as a child. If a child's curve is getting worse, a specialist may recommend a brace while they are growing. It will not correct the curve, but might help stop it getting worse.",
          "Patients with curves between 20 and 40 degrees during a growth spurt are the most likely to benefit. Large curves of over 40 degrees are unlikely to respond to bracing.",
        ],
      },
      {
        heading: "What a brace is like",
        paragraphs: [
          "A child's brace is custom-made, normally from rigid plastic, and designed to be difficult to see under loose-fitting clothing. It usually needs to be worn for 23 hours a day, and normally only comes off for baths, showers, swimming and contact sports.",
          "Braces are made and fitted by a skilled brace maker called an orthotist. You should not expect a brace to improve the shape of the scoliosis, only to slow its progression.",
        ],
      },
      {
        heading: "How well they work",
        paragraphs: [
          "There are still some uncertainties about how well braces work, so they are not recommended by all scoliosis specialists. In one study described by Scoliosis Support & Research, 72 per cent of young people who wore a brace did not need surgery, compared with 53 per cent of those who did not.",
          "The treatment was more successful when the brace was worn for longer each day. A UK study called BASIS is now looking at a brace worn for only 9 hours, in bed at night.",
        ],
      },
      {
        heading: "Feelings about a brace",
        paragraphs: [
          "Wearing a brace may be difficult and sometimes uncomfortable. For some people it may contribute to stress, self-esteem and body image issues.",
          "If you are struggling, you are not alone. Scoliosis Support & Research offers peer support groups on Zoom, run by a counsellor, and talking to someone you trust can be very helpful.",
        ],
      },
    ],
    helps: [
      "Ask whether a brace could ease your pain by supporting your spine.",
      "Use a brace sparingly, ideally under the supervision of a therapist, so your muscles still work.",
      "Ask your specialist what happens once a brace is no longer worn regularly.",
      "While using a brace, keep doing the activities you enjoy, as your consultant recommends.",
      "If a brace is getting you down, talk to someone you trust, or to your GP.",
    ],
    tryThisWeek: [
      "Ask if a brace could ease pain.",
      "Use a brace sparingly.",
      "Talk to someone if it gets you down.",
    ],
    ask: "Would a brace help my pain, and how many hours a day should I wear it?",
    interactive: {
      kind: "flip-cards",
      title: "Braces, card by card",
      intro: "Turn each card to see what each kind of brace is for.",
      cards: [
        { id: "adult", front: "A brace for an adult", when: "For pain, or if surgery is not possible", back: "Supports the spine to ease pain. Best used sparingly, as wearing it too much can weaken the muscles." },
        { id: "rigid", front: "Rigid brace", when: "Growing children and teenagers", back: "Light plastic moulded to the body, with pads that press on the curve to limit or stop it getting worse." },
        { id: "dynamic", front: "Flexible brace", when: "Sometimes offered instead", back: "Uses elastic straps to hold the body in a corrective movement through the day." },
        { id: "cast", front: "Plaster cast", when: "Babies and toddlers", back: "Fitted around the back and changed every few months as the child grows." },
        { id: "night", front: "Night-time brace", when: "Being tested in the BASIS study", back: "Worn for only 9 hours in bed. There is currently less evidence that it works." },
      ],
    },
    sources: [NHS_ADULTS, NHS_CHILDREN, SSR_BRACE, SSR_AGEING, SSR_NHS, SSR_AIS],
    quiz: {
      question: "Why should adults use a brace sparingly?",
      options: [{ text: "Wearing one too much can weaken the muscles", right: true }, { text: "It straightens the spine too far" }, { text: "It makes the curve bigger" }],
      why: "if you wear a brace too much the muscles can get weak.",
    },
  },
  {
    id: "scol-surgery",
    kicker: "Surgery",
    question: "When is surgery an option for adults, and what is recovery like?",
    hook: "A major operation that most adults never need. For some, it relieves nerve pain or steadies a worsening curve.",
    short: "Most adults with scoliosis will not need surgery. It may be considered if the curve is severe or getting much worse, if back pain is severe and other treatments have not helped, or if nerves are being squashed. It is a major operation, and it can take up to a year or more to fully recover.",
    sections: [
      {
        heading: "When it is considered",
        paragraphs: [
          "Most adults with scoliosis will not need surgery. It may be considered if the curve is severe or getting significantly worse, you have severe back pain and other treatments have not helped, or the nerves in your spine are being irritated or squashed.",
          "Surgery is more complicated for older people, but it is by no means out of the question. Scoliosis surgery might not be possible for someone with osteoporosis, so your surgeon may ask for a bone density scan.",
        ],
      },
      {
        heading: "Two kinds of operation",
        paragraphs: [
          "Lumbar decompression surgery relieves pressure on nerves in the spine by removing small pieces of bone. Spinal fusion joins 2 or more vertebrae together to stabilise, strengthen and straighten the spine.",
          "In fusion, metal screws, wires or hooks are attached to the vertebrae and connected to rods, and bone graft is placed over them. Over about 12 months the graft grows into a solid column of bone. The implants are not usually removed.",
        ],
      },
      {
        heading: "Risks to weigh up",
        paragraphs: [
          "Spinal surgery is a major operation. Its risks include the operation not reducing the pain, a wound infection, a blood clot and, rarely, damage to the nerves in the spine, which can cause permanent leg numbness or weakness, or some degree of paralysis in rare cases.",
          "Surgery is generally better at relieving pain that spreads to the legs than pain in the back. A consultant writing for Scoliosis Support & Research says that after large correction surgery, between 80 and 90 per cent of patients would have the same again, despite a risk of complications of over 30 per cent.",
        ],
      },
      {
        heading: "In hospital and at home",
        paragraphs: [
          "After fusion surgery for adult scoliosis, people usually stay in hospital for more than 10 days. At home you will feel very tired, and will need someone to help you cook, clean, bath and shop at first.",
          "Scoliosis Support & Research's advice for the first weeks includes not lifting anything heavier than a kettle, and no driving for at least 8 weeks.",
        ],
      },
      {
        heading: "Recovery takes time",
        paragraphs: [
          "Spinal surgery can take up to a year or more to recover from fully. People can usually return to work and light exercise around 3 months after fusion surgery, and be back to normal activity by around 6 months.",
          "Contact the hospital or NHS 111 if, after lumbar decompression surgery, you get new pain, weakness or numbness in your legs, or problems controlling when you pee or poo, or if the skin around your stitches is hot, itchy, oozing fluid or red.",
        ],
      },
    ],
    helps: [
      "Take someone with you to the consultation for moral support, and to help you remember what was said.",
      "Write questions down as they come to you, so you can ask them next time you see the specialist.",
      "Before the operation, line up a support network, and think about how you will manage daily tasks as you recover.",
      "Make sure you are in the best possible general health before an operation.",
      "Contact the hospital or NHS 111 about new leg symptoms, problems controlling when you pee or poo, or a hot, red or oozing wound.",
      "Try not to compare yourself to others, and celebrate each small milestone.",
    ],
    tryThisWeek: [
      "Take someone to the consultation.",
      "Write your questions down.",
      "Plan help for after the operation.",
    ],
    ask: "What would surgery aim to do for me, and what are my own risks?",
    interactive: {
      kind: "timeline",
      title: "Recovering from fusion surgery",
      steps: [
        { id: "hospital", when: "The first 10 days or more", title: "In hospital", points: ["Adults usually stay more than 10 days after fusion surgery.", "A physiotherapist teaches breathing exercises and log rolling."] },
        { id: "home", when: "The first weeks at home", title: "Help at home", points: ["Help to cook, clean, bath and shop at first.", "Lift nothing heavier than a kettle."] },
        { id: "drive", when: "About 8 weeks", title: "No driving before this", points: ["No driving for a minimum of 8 weeks.", "Avoid standing for long periods for 6 to 8 weeks."] },
        { id: "work", when: "Around 3 months", title: "Work and light exercise", points: ["Many people return to work and light exercise.", "Check with your specialist before more vigorous exercise."] },
        { id: "normal", when: "Around 6 months", title: "Normal activity", points: ["Back to normal activity for many people.", "Sports that jar the back, such as contact sports, take longer."] },
        { id: "full", when: "12 to 18 months", title: "Full recovery", points: ["On average the fusion takes 9 months to a year to heal.", "There is no set timetable for recovery."] },
      ],
    },
    sources: [NHS_ADULTS, SSR_DEG_SURG, SSR_AGEING, SSR_BEFORE_AFTER, NHS_LUMBAR],
    quiz: {
      question: "Which kind of pain is surgery generally better at relieving?",
      options: [{ text: "Pain that spreads to the legs", right: true }, { text: "Pain in the back" }, { text: "Pain in the neck" }],
      why: "Surgery is generally better at relieving pain that spreads to the legs than pain in the back.",
    },
  },
  {
    id: "scol-pain",
    kicker: "Pain",
    question: "How can I manage back pain from scoliosis?",
    hook: "Painkillers, movement, heat and cold, and a pain team when they are not enough. And the few signs that mean 999.",
    short: "Back pain is one of the main problems scoliosis causes in adults. Anti-inflammatory painkillers such as ibuprofen are usually tried first, alongside staying active. If they do not work, a GP can prescribe stronger painkillers or refer you to a pain management clinic.",
    sections: [
      {
        heading: "Why scoliosis can hurt",
        paragraphs: [
          "The curve of the spine can irritate, squash or stretch nerves, and put strain on joints, making them worn or inflamed. Scoliosis can also affect posture, which can leave muscles tight or tired.",
          "Some people with scoliosis do not have pain, or it is not a major issue. For others, pain can be very severe and affect every part of their lives.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "NSAIDs such as ibuprofen are usually the first treatment recommended. They are not suitable for everyone, so check the box or leaflet first, and speak to a pharmacist if you are not sure.",
          "See a GP if over-the-counter painkillers do not work. They may prescribe stronger painkillers or refer you to a specialist pain management clinic.",
        ],
      },
      {
        heading: "Injections and pain clinics",
        paragraphs: [
          "If scoliosis irritates nerves and causes pain, numbness or tingling down to the feet, steroid and local anaesthetic injections into the back may help. Their benefits normally only last a few weeks or months, so they are not usually a long-term solution.",
          "A special injection treatment that heats the tiny nerves to the facet joints, called radiofrequency denervation, usually lasts about 6 to 9 months. It can be difficult to use on a curved spine.",
          "Many adults with scoliosis work with a pain management team at some point. As well as treatments to reduce pain, the team teaches ways to cope, so pain has less effect on daily life.",
        ],
      },
      {
        heading: "Help you can give yourself",
        paragraphs: [
          "Heat is good for relieving muscle pain, and cold packs can also help. Apply them for 15 to 20 minutes, never directly on the skin, and test them first so nothing is too hot or too cold.",
          "Exercise that strengthens the back and stomach muscles, such as yoga, Pilates and swimming, can help with back pain. A type of counselling called cognitive behavioural therapy will not change the amount of pain, but can help people find ways to cope.",
          "The Chartered Society of Physiotherapy says all pain is 100 per cent real and never all in your head, even when stress or mood are involved.",
        ],
      },
      {
        heading: "When back pain is an emergency",
        paragraphs: [
          "Call 999 or go to A&E if you have back pain with pain, tingling, weakness or numbness in both legs, a loss of feeling around your genitals or anus, or changes in your bladder or bowels, such as difficulty peeing. Do not drive to A&E: ask someone to drive you, or call 999 for an ambulance.",
          "Ask for an urgent GP appointment or get help from 111 if you have back pain and feel hot, cold, shivery or generally unwell, or the pain is severe, starts suddenly or is getting worse quickly.",
        ],
      },
    ],
    helps: [
      "Check the box or leaflet before taking an NSAID, and speak to a pharmacist if you are not sure.",
      "See a GP if over-the-counter painkillers do not work.",
      "Use a heat or cold pack for 15 to 20 minutes, never directly on the skin.",
      "Do not stay in bed for long periods: stay active and try to continue with your daily activities.",
      "Describe your pain to the doctor or pain specialist as best you can, to help them work out the best treatment.",
      "Call 999 or go to A&E for back pain with numbness in both legs, loss of feeling around the genitals or anus, or bladder or bowel changes.",
    ],
    tryThisWeek: [
      "Check the painkiller leaflet.",
      "Try a wrapped heat pack.",
      "Stay active, not in bed.",
    ],
    ask: "Could a pain management clinic or physiotherapy help my back pain?",
    interactive: {
      kind: "scenarios",
      title: "When it hurts",
      scenarios: [
        {
          id: "otc",
          situation: "Ibuprofen from the pharmacy is not easing your pain.",
          options: [{ text: "See a GP", best: true }, { text: "Take more than the pack says" }],
          why: "See a GP if over-the-counter painkillers do not work.",
        },
        {
          id: "legs",
          situation: "Your back pain comes with numbness in both legs and difficulty peeing.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait for your next appointment" }],
          why: "Call 999 or go to A&E if you have back pain with pain, tingling, weakness or numbness in both legs, a loss of feeling around your genitals or anus, or changes in your bladder or bowels, such as difficulty peeing.",
        },
        {
          id: "drive",
          situation: "You need A&E for your back and your car is outside.",
          options: [{ text: "Ask someone to drive you or call 999", best: true }, { text: "Drive yourself" }],
          why: "Do not drive to A&E: ask someone to drive you, or call 999 for an ambulance.",
        },
        {
          id: "heat",
          situation: "Your back muscles ache after a long day.",
          options: [{ text: "A heat pack for 15 to 20 minutes, not on skin", best: true }, { text: "A hot pack straight on the skin" }],
          why: "Apply them for 15 to 20 minutes, never directly on the skin, and test them first so nothing is too hot or too cold.",
        },
      ],
    },
    sources: [NHS_ADULTS, SSR_PAIN, SSR_THERAPIES, NHS_BACK, CSP_CAUSES, SSR_NHS, BACKCARE_CONDITIONS],
    quiz: {
      question: "What is usually the first painkiller recommended for scoliosis pain in adults?",
      options: [{ text: "NSAIDs such as ibuprofen", right: true }, { text: "Strong opioids" }, { text: "Steroid injections" }],
      why: "NSAIDs such as ibuprofen are usually the first treatment recommended.",
    },
  },
  {
    id: "scol-exercise",
    kicker: "Exercise",
    question: "Which exercise and sport are good with scoliosis?",
    hook: "Exercise will not straighten a curve. It can ease pain, keep the back strong and is good for everything else.",
    short: "It is not clear whether back exercises improve scoliosis itself, but general exercise is good for overall health and should not be avoided unless your doctor advises it. Activities that strengthen and stretch your back may help reduce pain. Check with a healthcare professional before starting a new exercise programme.",
    sections: [
      {
        heading: "What exercise can and cannot do",
        paragraphs: [
          "It is not clear whether back exercises help improve scoliosis, but general exercise is good for overall health and should not be avoided unless advised by your doctor. Most people with scoliosis can do most activities, including exercise and sports.",
          "Activities that strengthen and stretch your back may help reduce your pain. Exercise can also help you keep a healthy weight, which can reduce the strain on your back.",
        ],
      },
      {
        heading: "Check first",
        paragraphs: [
          "If you have scoliosis, it is a good idea to speak to a healthcare professional, such as a GP, scoliosis specialist or physiotherapist, before starting a new exercise programme, to check it is safe.",
          "Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        ],
      },
      {
        heading: "Choosing what to do",
        paragraphs: [
          "It does not matter what type of exercise you choose: the important thing is to keep your back moving. Choose something you enjoy and are likely to stick with.",
          "Scoliosis Support & Research says yoga, Pilates and swimming are good for keeping the back muscles strong. Pilates can help posture, muscle tone, balance and back pain, but it will not reduce or slow the growth of a curve.",
          "Some people with scoliosis find they cannot do all the Pilates exercises. Do not push yourself too hard: listen to your body, and if something hurts, stop.",
        ],
      },
      {
        heading: "Physiotherapy",
        paragraphs: [
          "Some people may benefit from back exercises taught by a physiotherapist. These are unlikely to improve the curve of your spine, but may help with your pain.",
          "Physiotherapy is something you actively do, not something done to you. It takes time to show results, and if you stop doing the exercises, the benefits will fade.",
          "Some private clinics offer the Schroth method, a routine of intensive back exercises. It is not usually available on the NHS and is very costly, and there is no reliable long-term evidence that it can reduce the size of a curve.",
        ],
      },
      {
        heading: "How much activity",
        paragraphs: [
          "The NHS advises adults to do strengthening activities on at least 2 days a week, and at least 150 minutes of moderate activity or 75 minutes of vigorous activity a week. Adults aged 65 and over should also do activities that improve strength, balance and flexibility on at least 2 days a week.",
        ],
      },
    ],
    helps: [
      "Speak to a GP, scoliosis specialist or physiotherapist before starting a new exercise programme.",
      "Choose an activity you enjoy and are likely to stick with.",
      "Listen to your body: if something hurts, stop.",
      "Keep doing the exercises your physiotherapist teaches, or the benefits will fade.",
      "If an exercise from a back pain video worsens your pain, seek urgent medical advice.",
    ],
    tryThisWeek: [
      "Check a new programme is safe.",
      "Pick an activity you enjoy.",
      "Stop if something hurts.",
    ],
    ask: "Which exercises are safe for my curve, and could I see a physiotherapist?",
    interactive: {
      kind: "flip-cards",
      title: "Activities, card by card",
      intro: "Check with your GP, scoliosis specialist or physiotherapist first. Turn each card to see what the sources say.",
      cards: [
        { id: "swim", front: "Swimming", when: "For the back muscles", back: "Good for keeping the back muscles strong, says Scoliosis Support & Research." },
        { id: "pilates", front: "Pilates", when: "Low-impact strengthening", back: "Can help posture, balance and back pain. It will not reduce or slow the growth of a curve." },
        { id: "aquatic", front: "Aquatic physiotherapy", when: "Gentle exercises in water", back: "With a qualified physiotherapist. Surgical wounds must be healed before entering the water." },
        { id: "physio", front: "Physiotherapy exercises", when: "Taught by a physiotherapist", back: "Unlikely to improve the curve, but may help with pain. The benefits fade if you stop." },
        { id: "schroth", front: "Schroth method", when: "Private clinics", back: "Intensive back exercises, not usually on the NHS. No reliable long-term evidence that it reduces a curve." },
      ],
    },
    sources: [NHS_SCOL, NHS_ADULTS, SSR_THERAPIES, SSR_NHS, NHS_ACTIVITY, NHS_OLDER, CSP_VIDEO],
    quiz: {
      question: "Will Pilates reduce the size of a scoliosis curve?",
      options: [{ text: "No, but it can help with back pain", right: true }, { text: "Yes, within a few weeks" }, { text: "Only in adults" }],
      why: "Pilates can help posture, muscle tone, balance and back pain, but it will not reduce or slow the growth of a curve.",
    },
  },
  {
    id: "scol-body-image",
    kicker: "Wellbeing",
    question: "How can I feel more confident about my body with scoliosis?",
    hook: "Uneven shoulders, clothes that sit differently, a brace or a scar. Many people feel it, and talking helps.",
    short: "Having scoliosis or wearing a back brace can be tough and may cause problems with body image and self-esteem. Talking helps: support groups can put you in touch with people in a similar situation, and talking therapies are available on the NHS and from Scoliosis Support & Research.",
    sections: [
      {
        heading: "A common feeling",
        paragraphs: [
          "Having scoliosis or wearing a back brace can be tough and may cause problems with body image and self-esteem, particularly for children and teenagers.",
          "Adults feel it too. A consultant writing for Scoliosis Support & Research says it is not uncommon for people to dislike how a curve makes them look, and that this is an important consideration for some people thinking about surgery.",
        ],
      },
      {
        heading: "You are not alone",
        paragraphs: [
          "Support groups are a good source of information and support, and may be able to put you in touch with people in a similar situation.",
          "Scoliosis Support & Research runs online peer support groups led by a qualified counsellor, for people living with scoliosis and for parents. It also has an active Facebook group where members of all ages share stories and ask questions.",
        ],
      },
      {
        heading: "Talking therapy",
        paragraphs: [
          "Scoliosis Support & Research offers a talking therapy service for adults with psychological distress related to scoliosis, though it currently has a long waiting list.",
          "You can refer yourself to NHS talking therapies for difficult feelings such as low mood and worry, and for coping with a long-term health condition such as chronic pain. You need to be registered with a GP, and aged 18 or over, or 16 or over in some areas.",
        ],
      },
      {
        heading: "Kindness and pace",
        paragraphs: [
          "After scoliosis surgery, Scoliosis Support & Research advises trying not to compare yourself to others, and not being hard on yourself if recovery takes longer than you hoped.",
          "Talking about your emotions with someone you trust can be very helpful for your mental wellbeing. Keep doing the activities you enjoy, whether that is socialising or exercise.",
        ],
      },
    ],
    helps: [
      "Contact a support group, such as Scoliosis Support & Research, to meet people in a similar situation.",
      "Talk to someone you trust about how you feel.",
      "Refer yourself to NHS talking therapies for low mood, worry or coping with a long-term condition.",
      "Speak to a GP if you are not sure about referring yourself for talking therapy.",
      "Be kind to yourself, and celebrate each small milestone.",
    ],
    tryThisWeek: [
      "Contact a support group.",
      "Tell someone you trust how you feel.",
      "Look up NHS talking therapies.",
    ],
    ask: "How I feel about my back is getting me down: what support is there?",
    interactive: {
      kind: "scenarios",
      title: "Confidence, day to day",
      scenarios: [
        {
          id: "shape",
          situation: "You dislike how the curve makes you look.",
          options: [{ text: "Talk it through with someone you trust", best: true }, { text: "Keep it to yourself" }],
          why: "Talking about your emotions with someone you trust can be very helpful for your mental wellbeing.",
        },
        {
          id: "low",
          situation: "Low mood about your back is wearing you down.",
          options: [{ text: "Refer yourself to NHS talking therapies", best: true }, { text: "Wait for it to pass on its own" }],
          why: "You can refer yourself to NHS talking therapies for difficult feelings such as low mood and worry, and for coping with a long-term health condition such as chronic pain.",
        },
        {
          id: "alone",
          situation: "You do not know anyone else with scoliosis.",
          options: [{ text: "Join a support group", best: true }, { text: "Assume no one would understand" }],
          why: "Support groups are a good source of information and support, and may be able to put you in touch with people in a similar situation.",
        },
        {
          id: "compare",
          situation: "Your recovery from surgery is slower than a friend's was.",
          options: [{ text: "Go at your own pace", best: true }, { text: "Push harder to catch up" }],
          why: "After scoliosis surgery, Scoliosis Support & Research advises trying not to compare yourself to others, and not being hard on yourself if recovery takes longer than you hoped.",
        },
      ],
    },
    sources: [NHS_SCOL, SSR_BRACE, SSR_TALKING, SSR_GROUPS, NHS_TALKING, SSR_AGEING, SSR_BEFORE_AFTER],
    quiz: {
      question: "What can scoliosis or a back brace affect, according to the NHS?",
      options: [{ text: "Body image and self-esteem", right: true }, { text: "Eyesight" }, { text: "Hearing" }],
      why: "Having scoliosis or wearing a back brace can be tough and may cause problems with body image and self-esteem, particularly for children and teenagers.",
    },
  },
  {
    id: "scol-pregnancy",
    kicker: "Pregnancy",
    question: "Can I have a healthy pregnancy with scoliosis?",
    hook: "Most women with scoliosis have a straightforward pregnancy. The useful part is planning the birth and pain relief early.",
    short: "Most women with scoliosis have a straightforward pregnancy, and the outcome is generally good. The curve usually changes only slightly if it was stable beforehand. Discuss labour and pain relief, including an epidural, with your midwife, obstetrician and anaesthetist well before the birth.",
    sections: [
      {
        heading: "A good outlook",
        paragraphs: [
          "Most women will enjoy a straightforward pregnancy without any problems. It has been known for many years that the outcome of pregnancy in scoliosis is generally good, and a vaginal birth is usually achieved.",
          "Pre-pregnancy counselling is an excellent idea for anyone with scoliosis who is thinking about pregnancy. You can ask your GP for a referral to a maternal medicine network.",
        ],
      },
      {
        heading: "The curve and the back",
        paragraphs: [
          "Pregnancy hormones loosen the ligaments of the pelvis and lower spine. Most studies suggest changes in the curve are slight, provided the curve is stable at the start of pregnancy.",
          "Back pain is very common in pregnancy, as softer ligaments strain the joints of the lower back and pelvis. Scoliosis Support & Research says about 40 per cent of mothers develop low back pain during pregnancy, but this usually goes by 3 months after birth.",
        ],
      },
      {
        heading: "Breathing and the baby",
        paragraphs: [
          "Most people whose scoliosis began in the teenage years will not have a low lung capacity or heart problems. Simple breathing tests can check lung function, and your GP can refer you to a respiratory specialist if there is any query.",
          "Idiopathic scoliosis sometimes runs in families, but the risk of the baby developing scoliosis is low. The scan at around 20 weeks checks the development of the baby's spine.",
        ],
      },
      {
        heading: "Planning the birth",
        paragraphs: [
          "It is sensible to discuss labour in advance with the midwife, obstetrician and anaesthetist. All pregnant women with scoliosis are referred to an obstetric anaesthetist before the baby is due, so a pain relief plan can be made.",
          "An epidural can be used in labour for women with uncorrected scoliosis, though putting it in can be harder with severe scoliosis. After corrective surgery with metal rods, the anaesthetist will review images of your spine, and will offer other forms of pain relief in labour if the metalwork is low in the back.",
        ],
      },
      {
        heading: "Back pain: when to get help",
        paragraphs: [
          "If your backache is very painful, talk to your GP or midwife, who may refer you to an obstetric physiotherapist. Contact your GP or midwife urgently if you have back pain in the second or third trimester, as this could be a sign of early labour.",
          "Call 999 or go to A&E if you have back pain and you lose feeling in one or both of your legs, your bum or your genitals.",
        ],
      },
    ],
    helps: [
      "Ask your GP for a referral for pre-pregnancy counselling.",
      "Discuss labour and pain relief in advance with your midwife, obstetrician and anaesthetist.",
      "Keep your core strong and keep a reasonable level of fitness, to help with back pain in pregnancy.",
      "Bend your knees and keep your back straight when you lift something, and avoid lifting heavy objects.",
      "Contact your GP or midwife urgently about back pain in the second or third trimester.",
      "After your 6 to 8 week postnatal check, you can start more intense activities if you feel able to.",
    ],
    tryThisWeek: [
      "Ask about pre-pregnancy counselling.",
      "Plan pain relief with your team.",
      "Lift with bent knees.",
    ],
    ask: "Can I have an epidural with my scoliosis or my rods, and should I see an anaesthetist early?",
    interactive: {
      kind: "timeline",
      title: "From planning to after the birth",
      steps: [
        { id: "plan", when: "Before pregnancy", title: "Pre-pregnancy counselling", points: ["Ask your GP for a referral.", "Talk through your scoliosis and any possible complications."] },
        { id: "scan", when: "Around 20 weeks", title: "The anomaly scan", points: ["Checks the development of the baby's spine.", "The risk of the baby developing scoliosis is low."] },
        { id: "anaesthetist", when: "Before the baby is due", title: "Meet the anaesthetist", points: ["An individual pain relief plan is made.", "Any rods and screws are looked at on your spine imaging."] },
        { id: "labour", when: "Labour", title: "Moving and pain relief", points: ["You will be encouraged to move around.", "An epidural can be used if your scoliosis is uncorrected."] },
        { id: "after", when: "Up to 3 months after", title: "Back pain settling", points: ["Low back pain from pregnancy usually goes by 3 months after birth.", "More intense activity after your 6 to 8 week check, if you feel able."] },
      ],
    },
    sources: [SSR_PREG, NHS_PREG_BACK, NHS_ACTIVITY],
    quiz: {
      question: "What usually happens to a stable curve during pregnancy?",
      options: [{ text: "It changes only slightly", right: true }, { text: "It doubles in size" }, { text: "It straightens out" }],
      why: "Most studies suggest changes in the curve are slight, provided the curve is stable at the start of pregnancy.",
    },
  },
  {
    id: "scol-support",
    kicker: "Support",
    question: "Where can I get support and information about scoliosis?",
    hook: "A UK charity with a helpline, online groups and patient events, and help finding the right specialist.",
    short: "Scoliosis Support & Research, the UK scoliosis charity formed when Scoliosis Association UK merged with a research foundation in 2023, runs a helpline, online support groups and patient events, and can help you find a specialist. The NHS suggests contacting a support group for information and to meet people in a similar situation.",
    sections: [
      {
        heading: "The UK scoliosis charity",
        paragraphs: [
          "In 2023 Scoliosis Association UK and The British Scoliosis Research Foundation merged to become Scoliosis Support & Research. Scoliosis Association UK began in 1981 as a self-help group of around 200 members.",
          "The NHS suggests contacting a support group such as Scoliosis Support & Research. These groups are a good source of information and support, and may be able to put you in touch with people in a similar situation.",
        ],
      },
      {
        heading: "The helpline",
        paragraphs: [
          "The helpline is on 020 8964 1166, Monday to Friday from 9am to 5pm, and you can also email. If no one can answer straight away, leave a voicemail and the team will get back to you.",
          "The staff are highly trained in scoliosis but are not medically qualified. Their information is not a substitute for care from a qualified doctor, so always consult your doctor if you have concerns.",
        ],
      },
      {
        heading: "Finding a specialist",
        paragraphs: [
          "Scoliosis Support & Research strongly recommends seeing a scoliosis specialist, an orthopaedic consultant who specialises in scoliosis. It can help you find your nearest NHS or private specialist, and you can take this to your GP to ask for a referral.",
          "If your GP will not refer you, ask why. If there is no clear reason, the charity suggests seeing another GP at the practice, and then writing to the practice manager.",
        ],
      },
      {
        heading: "Groups, talking and events",
        paragraphs: [
          "Online peer support groups, led by a qualified counsellor, offer a safe space to share experiences and ask questions. There is also an active Facebook group, with more than 5,000 members.",
          "Adults with psychological distress related to scoliosis can ask about the charity's talking therapy service, which has a long waiting list. Every year the charity also holds patient events of up to 100 people around the UK, with talks from scoliosis specialists.",
        ],
      },
      {
        heading: "If you are unhappy with your care",
        paragraphs: [
          "You have the right to ask for a second opinion from another specialist at the same or a different hospital. Every hospital also has a patient advice and liaison service, or PALS, which can help if you are unhappy with the way you have been treated.",
        ],
      },
    ],
    helps: [
      "Call the Scoliosis Support & Research helpline on 020 8964 1166, Monday to Friday, 9am to 5pm, or email info@ssr.org.uk.",
      "Ask the charity for the names of your nearest scoliosis specialists, then take them to your GP.",
      "Join the charity's community to get access to its online peer support groups.",
      "Always consult your doctor if you have any concerns about your condition or treatment.",
      "Ask for a second opinion, or contact your hospital's PALS, if you are unhappy with your care.",
    ],
    tryThisWeek: [
      "Call the scoliosis helpline.",
      "Ask for specialist names.",
      "Join an online support group.",
    ],
    ask: "Can you refer me to a scoliosis specialist, and is there local support I could join?",
    interactive: {
      kind: "flip-cards",
      title: "Where support comes from",
      intro: "Turn each card to see what each one offers.",
      cards: [
        { id: "helpline", front: "Helpline", when: "Monday to Friday, 9am to 5pm", back: "Call 020 8964 1166 for advice, support or someone to talk to. Staff are not medically qualified." },
        { id: "groups", front: "Online support groups", when: "Led by a qualified counsellor", back: "A safe space to share experiences, ask questions and feel heard." },
        { id: "talking", front: "Talking therapy", when: "Adults distressed by scoliosis", back: "Sessions with a trainee counsellor. There is currently a long waiting list." },
        { id: "events", front: "Patient events", when: "Every year, around the UK", back: "Up to 100 people hear from scoliosis specialists and meet others." },
        { id: "specialist", front: "Find a specialist", when: "Before asking your GP", back: "The charity can name your nearest NHS or private specialist to take to your GP." },
        { id: "pals", front: "PALS", when: "If you are unhappy with your care", back: "Every hospital has a patient advice and liaison service that can help." },
      ],
    },
    sources: [SSR_HELPLINE, SSR_GROUPS, SSR_TALKING, SSR_EVENTS, SSR_SPECIALIST, SSR_HISTORY, NHS_SCOL, SSR_ADULT, SSR_HOME],
    quiz: {
      question: "What happened to Scoliosis Association UK in 2023?",
      options: [{ text: "It merged to become Scoliosis Support & Research", right: true }, { text: "It closed" }, { text: "It became part of the NHS" }],
      why: "In 2023 Scoliosis Association UK and The British Scoliosis Research Foundation merged to become Scoliosis Support & Research.",
    },
  },
];
