import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Knee replacement page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's `sources`;
// nothing is added that those pages do not say. Most of it comes from the NHS knee replacement pages and Arthritis UK
// (the charity formerly called Versus Arthritis), with NICE's joint replacement guideline (NG157), the NHS pages on
// blood clots and physical activity, and the government's Access to Work and arthritis-and-driving pages. Emergency
// wording follows the NHS exactly. Exercises are described only as Arthritis UK describes them. General information
// only; it never replaces what a person's own surgeon, physiotherapist or GP tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_WHAT = nhs("What is a knee replacement?", "tests-and-treatments/knee-replacement/what-is-a-knee-replacement/");
const NHS_WHY = nhs("Why a knee replacement is done", "tests-and-treatments/knee-replacement/why-its-done/");
const NHS_ALT = nhs("Alternatives to a knee replacement", "tests-and-treatments/knee-replacement/alternatives/");
const NHS_PREP = nhs("Preparing for a knee replacement", "tests-and-treatments/knee-replacement/preparation/");
const NHS_HOW = nhs("How a knee replacement is done", "tests-and-treatments/knee-replacement/how-its-done/");
const NHS_RECOVERY = nhs("Recovering from a knee replacement", "tests-and-treatments/knee-replacement/recovery/");
const NHS_COMPLICATIONS = nhs("Complications of a knee replacement", "tests-and-treatments/knee-replacement/complications/");
const NHS_SURGERY_PREP = nhs("Having an operation: before surgery", "tests-and-treatments/having-surgery/preparation/");
const NHS_DVT = nhs("DVT (deep vein thrombosis)", "conditions/deep-vein-thrombosis-dvt/");
const NHS_PE = nhs("Pulmonary embolism", "conditions/pulmonary-embolism/");
const NHS_GADGETS = nhs("Household gadgets and equipment to make life easier", "social-care-and-support/care-services-equipment-and-care-homes/household-gadgets-and-equipment-to-make-life-easier/");
const NHS_ACTIVE_OLDER = nhs("Physical activity guidelines for older adults", "live-well/exercise/physical-activity-guidelines-older-adults/");
const NHS_ACTIVE_ADULTS = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");

const AU_KNEE = au("Knee replacement surgery", "understanding-arthritis/arthritis-treatments/surgery/knee-replacement-surgery/");
const AU_ANAESTHETIC = au("Types of anaesthetic", "understanding-arthritis/arthritis-treatments/surgery/types-of-anaesthetic/");
const AU_PREPARING = au("Preparing for surgery", "understanding-arthritis/arthritis-treatments/surgery/preparing-for-surgery/");
const AU_PAIN_SURGERY = au("Managing pain before and after orthopaedic surgery", "understanding-arthritis/arthritis-treatments/surgery/managing-pain-before-and-after-orthopaedic-surgery/");
const AU_LETS_MOVE = au("Let's Move for Surgery toolkit", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/lets-move-for-surgery-toolkit/");

const NICE_NG157 = { label: "NICE: Joint replacement (primary): hip, knee and shoulder (NG157)", url: "https://www.nice.org.uk/guidance/ng157/chapter/Recommendations" } satisfies LearnSource;

const GOV_ARTHRITIS_DRIVING = gov("Arthritis and driving", "arthritis-and-driving");
const GOV_ATW = gov("Access to Work: what Access to Work is", "access-to-work");
const GOV_ATW_ELIGIBILITY = gov("Access to Work: eligibility", "access-to-work/eligibility");

export const kneeReplacementAnswers: LearnArticle[] = [
  {
    id: "kner-what-it-is",
    kicker: "Understanding",
    question: "What does a knee replacement actually involve?",
    hook: "Not a whole new leg, but new surfaces for worn bone ends. Sometimes the whole joint is replaced, sometimes only one part of it.",
    short: "Knee replacement surgery replaces the damaged parts of the knee joint with metal and plastic parts. It can replace all of the joint (a total knee replacement) or some of it (a partial knee replacement). It is most often done for pain and stiffness caused by osteoarthritis, and it can take several months or more to fully recover.",
    sections: [
      {
        heading: "New surfaces for worn bones",
        paragraphs: [
          "Knee replacement surgery involves replacing damaged parts of your knee joint with metal or plastic parts. It is most commonly used to treat pain and stiffness in the knee joint caused by osteoarthritis.",
          "The knee usually moves smoothly because the ends of the bones are covered with a layer of tough tissue called cartilage. If the cartilage is worn away by osteoarthritis or damaged by an injury, the bones rub against each other, making the joint painful and stiff.",
        ],
      },
      {
        heading: "Total knee replacement",
        paragraphs: [
          "A total knee replacement is the most common type. The lower end of the thigh bone and the upper end of the shin bone are replaced with metal and plastic parts, and some people also have the back of the kneecap replaced.",
          "In the new joint, the plastic acts like hard cartilage, helping the joint to move freely. The interlocking parts allow the knee to bend while also making it more stable.",
        ],
      },
      {
        heading: "Partial and kneecap replacements",
        paragraphs: [
          "If arthritis affects only one side of the knee, usually the inner side, it may be possible to have a partial knee replacement. The cut is smaller and recovery should be quicker, but it is not suitable for everyone, because you need strong, healthy ligaments within your knee.",
          "A kneecap replacement replaces just the under-surface of the kneecap and its groove, if these are the only parts affected by arthritis. Arthritis UK says it is only suitable for about 1 in 40 people with osteoarthritis.",
        ],
      },
      {
        heading: "Complex and revision replacements",
        paragraphs: [
          "A more complex knee replacement may be needed if there is major bone loss, a major deformity of the knee or weakness of the main knee ligaments. It may also be needed for a second or third joint replacement in the same knee.",
          "NICE guidance says people with arthritis in only the inner part of the knee should be offered a choice of partial or total knee replacement, with the benefits and risks of each option discussed.",
        ],
      },
      {
        heading: "What it can do",
        paragraphs: [
          "Knee replacements are usually very successful and result in no pain in the knee and better movement. They can last for 25 years and can significantly improve daily life for people with knee pain.",
          "You will have the operation in hospital, and it can take several months or more to fully recover afterwards. Your doctor and orthopaedic surgeon should help you to choose the best option, taking into account the condition of your knee and your general health.",
        ],
      },
    ],
    helps: [
      "Ask your doctor and orthopaedic surgeon to help you choose the type of knee replacement that suits your knee and your general health.",
      "If arthritis affects only the inner side of your knee, ask about the benefits and risks of a partial and a total knee replacement.",
      "Expect to have the operation in hospital, and several months or more of recovery afterwards.",
      "After surgery, you will be asked whether details of your knee replacement can go to the National Joint Registry, which monitors them to help improve patient safety.",
    ],
    tryThisWeek: [
      "Ask which type would suit my knee.",
      "Ask about partial versus total.",
      "Plan for months of recovery.",
    ],
    ask: "Would a partial or a total knee replacement suit my knee, and why?",
    interactive: {
      kind: "flip-cards",
      title: "Four kinds of knee replacement",
      intro: "Turn each card to see what is replaced, and when that kind is used.",
      cards: [
        { id: "total", front: "Total knee replacement", when: "The most common type", back: "The ends of the thigh and shin bones are replaced with metal and plastic parts. Sometimes the back of the kneecap too." },
        { id: "partial", front: "Partial knee replacement", when: "Arthritis in one side of the knee", back: "Only the bones on the affected side are replaced. A smaller cut and a quicker recovery, but it needs healthy ligaments." },
        { id: "kneecap", front: "Kneecap replacement", when: "Only the kneecap and its groove affected", back: "Replaces the under-surface of the kneecap and its groove. Suitable for about 1 in 40 people with osteoarthritis." },
        { id: "complex", front: "Complex or revision replacement", when: "Severe damage, or a repeat operation", back: "A longer stem fixes the parts more securely into the bone. Used for major bone loss, deformity or weak ligaments." },
      ],
    },
    sources: [NHS_WHAT, NHS_WHY, NHS_HOW, AU_KNEE, NICE_NG157],
    quiz: {
      question: "What is a knee replacement most commonly used to treat?",
      options: [{ text: "Pain and stiffness from osteoarthritis", right: true }, { text: "A sprained ankle" }, { text: "Gout in the big toe" }],
      why: "It is most commonly used to treat pain and stiffness in the knee joint caused by osteoarthritis.",
    },
  },
  {
    id: "kner-deciding",
    kicker: "Deciding",
    question: "How do I decide whether a knee replacement is right for me?",
    hook: "Other treatments usually come first. Then it is a weighing-up of pain, daily life, and what a new knee can and cannot do.",
    short: "A knee replacement may be recommended if knee pain is having a big effect on your life and other treatments have not worked. Arthritis UK says four out of five people who have had one are happy with their new knees, but a replacement knee is never quite as good as a natural one. Your surgeon can talk through the pros and cons of having or delaying surgery.",
    sections: [
      {
        heading: "When it is considered",
        paragraphs: [
          "A knee replacement may be recommended if knee pain is having a big effect on your life and alternatives to a knee replacement have not worked. Most people who have one have pain and movement problems caused by osteoarthritis.",
          "Arthritis UK says you will only need a knee replacement if your knee gives you pain, stiffness, instability or loss of function that affects your daily life and activities. Having arthritis of the knee does not necessarily mean you will need one.",
        ],
      },
      {
        heading: "What is usually tried first",
        paragraphs: [
          "Before a knee replacement, your doctor will talk to you about non-surgical treatments. These may include weight loss if you are overweight, low-impact exercise such as swimming, walking or cycling, muscle strengthening, walking aids, special footwear or insoles, pain relief medicines, gels or creams, and steroid injections into the knee.",
          "Arthritis UK says these generally do not give such good results as a new knee joint, but they may allow you to delay having a knee replacement for some years. Other operations, such as an osteotomy, which changes the shape of the shin bone, are not suitable for everyone.",
        ],
      },
      {
        heading: "The likely gains",
        paragraphs: [
          "Possible advantages include freedom from pain, improved mobility, and a better quality of life because everyday activities and exercise are easier. Research has shown that four out of five people who have had knee replacement surgery are happy with their new knees.",
          "For people who are not happy, the main cause is continuing pain, which may not be due to a problem with the operation. This is more of a risk if the joint damage is relatively minor before surgery, so if your damage is not very severe it may be better to carry on with non-surgical treatments.",
        ],
      },
      {
        heading: "The limits of a new knee",
        paragraphs: [
          "A replacement knee can never be quite as good as a natural knee, and most people rate the artificial joint about three-quarters normal. Most are not designed to bend as far as a natural knee, and you may notice some clicking or clunking, and some numbness at the outer edge of the scar, which usually improves over about two years.",
          "Most people who have a knee replacement are over 60. The earlier you have one, the greater the chances that you will eventually need further surgery, but there is evidence the outcome may be better if you do not wait until your knee becomes very stiff or deformed.",
        ],
      },
      {
        heading: "Making the choice together",
        paragraphs: [
          "NICE says the discussion should cover the alternatives to joint replacement, the possible benefits and risks, including the possible need for more surgery in the future, and the options for anaesthesia and pain relief.",
          "Your orthopaedic surgeon can advise on the pros and cons of having or delaying surgery, taking into account your age, health and level of activity. If your symptoms are still manageable and your medicine is effective, you may prefer to wait.",
        ],
      },
    ],
    helps: [
      "Ask your doctor about the non-surgical treatments, such as exercise, pain relief and walking aids, that may be tried first.",
      "Ask your orthopaedic surgeon about the pros and cons of having or delaying surgery for you.",
      "Discuss the alternatives, the possible benefits and risks, and the chance of needing more surgery in the future.",
      "If your symptoms are still manageable and your medicine is effective, you may prefer to wait.",
      "If you are overweight, losing weight reduces the strain on your knee.",
    ],
    tryThisWeek: [
      "Ask about non-surgical treatments.",
      "Ask about the pros and cons of waiting.",
      "Ask about benefits, risks and more surgery.",
    ],
    ask: "What could a new knee realistically change for me, and what are my risks?",
    interactive: {
      kind: "flip-cards",
      title: "Options before a new knee",
      intro: "Turn each card to see what each option is, and when it may be tried.",
      cards: [
        { id: "exercise", front: "Exercise", when: "Usually tried first", back: "Low-impact exercise such as swimming, walking or cycling, and strengthening the knee, with a physiotherapist's advice." },
        { id: "weight", front: "Weight loss", when: "If you are overweight", back: "Losing weight reduces the strain on your knee." },
        { id: "aids", front: "Walking aids and insoles", when: "Among the first treatments", back: "Walking aids, and special footwear or insoles for your shoes." },
        { id: "medicines", front: "Pain relief", when: "Medicines, gels or creams", back: "Painkillers can reduce the pain, while anti-inflammatory medicines (NSAIDs) may help if the knee is swollen." },
        { id: "injection", front: "Steroid injection", when: "Into the knee joint", back: "A hydrocortisone injection into the knee, to help with pain and swelling." },
        { id: "osteotomy", front: "Osteotomy", when: "Not suitable for everyone", back: "The shape of the shin bone is changed to reduce pressure on the worn part of the knee. It may help younger people." },
      ],
    },
    sources: [NHS_WHY, NHS_ALT, AU_KNEE, NICE_NG157],
    quiz: {
      question: "How do most people rate a replacement knee, according to Arthritis UK?",
      options: [{ text: "About three-quarters normal", right: true }, { text: "Better than a natural knee" }, { text: "About a quarter normal" }],
      why: "A replacement knee can never be quite as good as a natural knee, and most people rate the artificial joint about three-quarters normal.",
    },
  },
  {
    id: "kner-preparing",
    kicker: "Before surgery",
    question: "How can I get ready for a knee replacement?",
    hook: "The waiting time is not wasted time. Stronger thigh muscles, good general health and a home set up for crutches all help the recovery.",
    short: "Before a knee replacement, your doctor will talk to you about exercises, stopping smoking, a healthy diet and managing your weight. It is important to do these things while you wait, because waiting lists can be long. Getting your home ready, and arranging help and transport, makes the first weeks easier.",
    sections: [
      {
        heading: "Use the waiting time",
        paragraphs: [
          "Before your knee replacement, your doctor will talk to you about the things you can do to prepare. This might include exercises to do before and after the operation, stopping smoking, having a healthy diet and managing your weight.",
          "It is important to do these things while you wait, because waiting lists can be long. Following your doctor's advice will also help you recover as well as possible after surgery.",
        ],
      },
      {
        heading: "Stronger muscles first",
        paragraphs: [
          "Your orthopaedic surgeon will probably suggest exercises to strengthen the muscles at the front of your thigh, which often become weak with arthritis. The stronger these muscles are before surgery, the quicker your recovery is likely to be.",
          "Arthritis UK says that if you are fit and strong, your surgery has the best chance of success and you will likely recover more quickly. Its Let's Move for Surgery toolkit has follow-along knee replacement exercises for before and after surgery, and it advises getting advice from your healthcare professional about which exercises suit you.",
        ],
      },
      {
        heading: "Your general health",
        paragraphs: [
          "It is a good idea to make sure your general health is as good as it can be, for example if you have diabetes or high blood pressure. Have a dental check-up and get any problems dealt with well before the operation, as there is a possible risk of infection if bacteria from dental problems get into the bloodstream.",
          "Being unfit, overweight or a smoker can increase your risk of complications. If you are concerned about this, speak to a healthcare professional.",
        ],
      },
      {
        heading: "The pre-admission clinic",
        paragraphs: [
          "You might be asked to go to a pre-admission clinic a few weeks before the operation, to make sure you are well enough for it to go ahead. Tests may include blood tests, a swab to check for resistant bacteria called MRSA, a urine sample and an ECG to make sure your heart is healthy.",
          "Discuss with your surgeon, anaesthetist or nurse whether you should stop taking any of your medicines, or change the dose or timing, before the operation. You will also be told whether to stop eating and drinking in the hours before.",
        ],
      },
      {
        heading: "Getting home ready",
        paragraphs: [
          "Think about asking for help at home with day-to-day activities, making sure things you use often are easy to reach, and stocking your freezer with cooked meals. Arrange transport, as you will be unable to drive for several weeks after the operation.",
          "If you work, speak to your employer and make a plan for returning to work. Let your surgeon know if you develop a cough, cold or high temperature a few days before surgery, and they will advise whether the operation can go ahead.",
        ],
      },
    ],
    helps: [
      "Follow your doctor's advice on exercises, stopping smoking, a healthy diet and managing your weight while you wait.",
      "Ask which exercises suit you, and work on strengthening the muscles at the front of your thigh.",
      "Have a dental check-up and get any problems dealt with well before the operation.",
      "Ask at the pre-admission clinic whether to stop or change any of your medicines.",
      "Set up your home: things you use often within easy reach, cooked meals in the freezer, and transport arranged.",
      "Tell your surgeon if you develop a cough, cold or high temperature a few days before surgery.",
    ],
    tryThisWeek: [
      "Ask which exercises suit you.",
      "Book a dental check-up.",
      "Stock the freezer with cooked meals.",
    ],
    ask: "Which exercises should I be doing now, and should any of my medicines change before the operation?",
    interactive: {
      kind: "scenarios",
      title: "Getting ready for the day",
      scenarios: [
        {
          id: "cough",
          situation: "Three days before surgery, you develop a cough and a high temperature.",
          options: [{ text: "Let your surgeon know", best: true }, { text: "Say nothing and go ahead" }],
          why: "Let your surgeon know if you develop a cough, cold or high temperature a few days before surgery. They will advise whether the operation can go ahead.",
        },
        {
          id: "tooth",
          situation: "A tooth has been bothering you while you wait for your operation.",
          options: [{ text: "Deal with it well before surgery", best: true }, { text: "Leave it until afterwards" }],
          why: "Have a dental check-up and get any problems dealt with well before the operation, as there is a possible risk of infection.",
        },
        {
          id: "tablets",
          situation: "You are not sure whether to keep taking your usual tablets before the operation.",
          options: [{ text: "Ask your surgeon, anaesthetist or nurse", best: true }, { text: "Stop them all a week before" }],
          why: "Discuss with your surgeon, anaesthetist or nurse whether you should stop taking any of your medicines, or change the dose or timing.",
        },
        {
          id: "waiting",
          situation: "The waiting list is long and it feels as if there is nothing to do.",
          options: [{ text: "Exercise and look after your health", best: true }, { text: "Rest the knee until the operation" }],
          why: "It is important to do these things while you wait, because waiting lists can be long. Following your doctor's advice will help you recover as well as possible.",
        },
      ],
    },
    sources: [NHS_PREP, AU_KNEE, AU_PREPARING, NHS_SURGERY_PREP, AU_LETS_MOVE, NICE_NG157],
    quiz: {
      question: "Why have a dental check-up before a knee replacement?",
      options: [{ text: "Bacteria from dental problems could cause infection", right: true }, { text: "The anaesthetic affects the teeth" }, { text: "It is needed for the hospital records" }],
      why: "There is a possible risk of infection if bacteria from dental problems get into the bloodstream.",
    },
  },
  {
    id: "kner-hospital",
    kicker: "In hospital",
    question: "What happens on the day of the operation and in hospital?",
    hook: "Usually in on the day, awake or asleep for one to two hours, and up on crutches surprisingly soon afterwards.",
    short: "You will usually go into hospital on the day of the operation, and have either a general anaesthetic or a spinal anaesthetic that numbs you from the waist down. The operation usually takes about 1 to 2 hours. Nurses and physiotherapists help you start walking soon afterwards, and most people go home 1 to 4 days after the operation.",
    sections: [
      {
        heading: "Arriving",
        paragraphs: [
          "You will usually go into hospital on the day of the operation. You will be asked to sign a consent form if you have not already, and your knee will be marked for the operation.",
          "If you take medicines that affect blood clotting, such as warfarin or clopidogrel, follow the instructions you are given to prevent too much bleeding during and after surgery.",
        ],
      },
      {
        heading: "The anaesthetic",
        paragraphs: [
          "You will either have a general anaesthetic, so you are asleep, or a local anaesthetic in your spine, so you are awake but have no feeling from the waist down. Your anaesthetist will discuss the best choice with you before the operation.",
          "Many surgeons also inject local anaesthetic into the tissues around the knee during the operation, to numb the pain while still allowing the muscles to work. NICE says people having a knee replacement should be offered a choice of regional or general anaesthesia, each combined with local infiltration analgesia.",
        ],
      },
      {
        heading: "The operation",
        paragraphs: [
          "The operation usually takes about 1 to 2 hours. In a total knee replacement, the surgeon makes a cut down the front of the knee, moves the kneecap to the side, cuts away the damaged ends of the shin bone and thigh bone, and fits new parts over them.",
          "The kneecap is put back into place, and the cut is closed with stitches or clips and covered with a dressing and bandage. Afterwards you will be asked if you consent to details of your knee replacement going to the National Joint Registry.",
        ],
      },
      {
        heading: "Waking up and pain relief",
        paragraphs: [
          "You will stay in a recovery room until you are fully awake, where you may be given medicines to help with the pain. This may include patient-controlled analgesia, where you press a button to control your own supply of painkiller into a vein.",
          "Pain is usually worse on the second or third day, when the anaesthetic and strong medicines wear off. Without painkillers it will be difficult to do the exercises needed to strengthen your muscles and restore movement.",
        ],
      },
      {
        heading: "Up and moving",
        paragraphs: [
          "Nurses and physiotherapists will help you start walking soon after the operation, with crutches or a walking frame at first. NICE says a physiotherapist or occupational therapist should offer rehabilitation on the day of surgery if possible, and no more than 24 hours after.",
          "You can usually go home if there are no signs of complications and you can safely get around using crutches. Most people leave hospital 1 to 4 days after the operation.",
        ],
      },
    ],
    helps: [
      "Ask any questions you may still have before you sign the consent form.",
      "Talk to your anaesthetist about the choice of anaesthetic and pain relief.",
      "Take the painkillers you are offered: without them it is difficult to do the exercises.",
      "Expect help from nurses and physiotherapists to start walking soon after the operation.",
      "After a spinal anaesthetic or nerve block, be aware that your leg will have very little feeling for a day or two, to avoid falling over.",
    ],
    tryThisWeek: [
      "Ask questions before signing consent.",
      "Discuss your anaesthetic choices.",
      "Take painkillers so you can exercise.",
    ],
    ask: "Which anaesthetic and pain relief would suit me, and how soon will I be up and walking?",
    interactive: {
      kind: "timeline",
      title: "From admission to home",
      steps: [
        { id: "admit", when: "On the day", title: "Into hospital", points: ["Usually admitted on the day of the operation.", "Consent form signed and the knee marked."] },
        { id: "theatre", when: "About 1 to 2 hours", title: "The operation", points: ["A general or a spinal anaesthetic.", "New parts fitted over the ends of the bones."] },
        { id: "recovery", when: "Straight after", title: "Recovery room", points: ["Stay until you are fully awake.", "Medicines to help with the pain."] },
        { id: "moving", when: "Within 24 hours", title: "Up and moving", points: ["Rehabilitation on the day of surgery if possible.", "Crutches or a walking frame at first."] },
        { id: "sore", when: "Days 2 and 3", title: "The sorest days", points: ["Pain is usually worse as the anaesthetic wears off.", "Painkillers help you keep doing the exercises."] },
        { id: "home", when: "Days 1 to 4", title: "Home", points: ["When you can get around safely on crutches.", "Compression stockings to help prevent blood clots."] },
      ],
    },
    sources: [NHS_HOW, NHS_RECOVERY, AU_KNEE, AU_ANAESTHETIC, NICE_NG157],
    quiz: {
      question: "How long does a knee replacement operation usually take?",
      options: [{ text: "About 1 to 2 hours", right: true }, { text: "About ten minutes" }, { text: "A whole day" }],
      why: "The operation usually takes about 1 to 2 hours.",
    },
  },
  {
    id: "kner-exercises",
    kicker: "Exercise",
    question: "Which exercises help after a knee replacement, and how much should I do?",
    hook: "The exercises are the part of recovery that is yours. Little and often, guided by your physiotherapist, and kept up even when they ache.",
    short: "Following the exercises your physiotherapist recommends helps your recovery and prevents complications. Arthritis UK suggests doing them regularly, for instance for 10 minutes six to eight times a day, while balancing rest and exercise. Get advice from your doctor or physiotherapist about specific exercises before you begin.",
    sections: [
      {
        heading: "Why they matter",
        paragraphs: [
          "A physiotherapist or occupational therapist will talk to you about home exercise programmes before you leave hospital. Following the exercises early on in your recovery will help with the long-term strength and movement in your knee.",
          "Keeping up your exercises will make a big difference to your recovery time. Your new knee will continue to improve for as much as two years after the operation, as the scar tissue heals and you exercise your muscles.",
        ],
      },
      {
        heading: "Check first, then little and often",
        paragraphs: [
          "It is a good idea to get advice from your doctor or physiotherapist about specific exercises before you begin. Arthritis UK suggests doing them regularly, for instance for 10 minutes six to eight times a day, while finding a balance between rest and exercise so you do not overwork your knee.",
          "NICE says people doing their own rehabilitation at home should understand their goals and why the exercises matter, and should have a point of contact for advice and support. Supervised group or individual rehabilitation should be offered if home exercises are not meeting your goals.",
        ],
      },
      {
        heading: "Bending and straightening",
        paragraphs: [
          "Sometimes the knee becomes very stiff in the weeks after the operation for no obvious reason. Arthritis UK suggests placing your foot on the first or second step of the stairs, holding the banister and leaning into your knee, and continuing the exercises you were working on in hospital.",
          "After three weeks, try to take longer strides so you can fully straighten your leg. Do not lie with a pillow under your knee: it may feel comfortable, but it can make it difficult to straighten your knee.",
        ],
      },
      {
        heading: "When it hurts",
        paragraphs: [
          "You will probably need painkillers, as the exercise can be painful at first. Taking any as-needed pain relief before physiotherapy, rather than waiting until you are already struggling, can help.",
          "If an exercise leaves you sore for more than a few hours afterwards, scale back your routine rather than abandoning it, by doing fewer repetitions or a shorter session and then building up again. Ice can be applied after exercise to ease pain or minor swelling.",
        ],
      },
      {
        heading: "If progress stalls",
        paragraphs: [
          "If the stiffness does not improve after about six weeks, your surgeon may need to move the knee under anaesthetic. Physiotherapy and certain exercises may help with problems bending the knee, ongoing stiffness or a knee that feels unstable.",
          "Later on, cycling is a very good way of building up strength and movement after knee surgery. Arthritis UK's Let's Move for Surgery toolkit has a follow-along video of knee replacement exercises for before and after surgery.",
        ],
      },
    ],
    helps: [
      "Get advice from your doctor or physiotherapist about specific exercises before you begin.",
      "Follow the exercises your physiotherapist has recommended: they help your recovery and prevent complications.",
      "Exercise little and often, for instance for 10 minutes six to eight times a day, balancing rest and exercise.",
      "Take any as-needed pain relief before physiotherapy, rather than waiting until you are struggling.",
      "If an exercise leaves you sore for more than a few hours, scale back rather than abandoning it.",
      "Do not sleep with a pillow under your knee.",
    ],
    tryThisWeek: [
      "Ask your physio which exercises to do.",
      "Exercise for 10 minutes, several times a day.",
      "Scale back, rather than stop, if sore.",
    ],
    ask: "Which exercises should I be doing at this stage, and how far should my knee bend and straighten by now?",
    interactive: {
      kind: "flip-cards",
      title: "Moves the sources describe",
      intro: "Check with your doctor or physiotherapist first. Turn each card to see how Arthritis UK describes it.",
      cards: [
        { id: "foot-raise", front: "Raising the foot", when: "Before surgery", back: "Exercises that raise your foot against gravity are best for strengthening the muscles at the front of the thigh." },
        { id: "stair-lean", front: "Leaning into the step", when: "For a stiff knee", back: "Foot on the first or second stair, hold the banister and lean into your knee, to help movement and flexibility." },
        { id: "strides", front: "Longer strides", when: "After three weeks", back: "Take longer strides so you can fully straighten your leg." },
        { id: "little-often", front: "Little and often", when: "Through the day", back: "For instance 10 minutes six to eight times a day, finding a balance between rest and exercise." },
        { id: "cycling", front: "Cycling", when: "Building up later", back: "A very good way of building up strength and movement after knee surgery." },
      ],
    },
    sources: [NHS_RECOVERY, AU_KNEE, AU_PAIN_SURGERY, NICE_NG157, AU_LETS_MOVE, NHS_COMPLICATIONS],
    quiz: {
      question: "Why avoid lying with a pillow under the new knee?",
      options: [{ text: "It can make it hard to straighten the knee", right: true }, { text: "It loosens the stitches" }, { text: "It stops the stockings working" }],
      why: "Do not lie with a pillow under your knee: it may feel comfortable, but it can make it difficult to straighten your knee.",
    },
  },
  {
    id: "kner-walking",
    kicker: "Getting about",
    question: "When can I put the crutches away?",
    hook: "Frame or crutches, then one crutch, then a stick, then nothing at all. Most people take about six weeks, one small step at a time.",
    short: "You will need crutches or a walking frame at first. Most people go down to one crutch and then a walking stick when they feel confident, and can try walking without an aid after about 6 weeks if they feel ready. You should be able to walk outside within three weeks, in good supportive shoes.",
    sections: [
      {
        heading: "Why crutches at first",
        paragraphs: [
          "Nurses and physiotherapists will help you start walking soon after the operation, and you will need crutches or a walking frame at first.",
          "It is important to use crutches or walking sticks at first because the thigh muscles will be weak after the operation, and falling could damage your new joint. If you had a spinal anaesthetic or nerve block, you will have very little feeling in your leg for the first day or two.",
        ],
      },
      {
        heading: "Stepping down the aids",
        paragraphs: [
          "After two weeks, or sooner if you are confident, you can go down to one crutch and then a walking stick. After about six weeks, if your muscles feel strong and supportive, you can try walking without aids.",
          "This may take less time after a partial knee replacement, or longer after a more complex operation.",
        ],
      },
      {
        heading: "Walking outside",
        paragraphs: [
          "You should be able to walk outside within three weeks of having surgery, but wear good supportive outdoor shoes. After three weeks, try to take longer strides so you can fully straighten your leg.",
          "Do not twist your knee as you turn around. Take several small steps instead.",
        ],
      },
      {
        heading: "Stairs",
        paragraphs: [
          "When going up stairs, put your unoperated leg on the step first, then move your operated leg up. When going down, put your operated leg down first, followed by your unoperated leg.",
        ],
      },
      {
        heading: "Help around the home",
        paragraphs: [
          "Before you leave hospital, an occupational therapist or physiotherapist will explain the best ways to move about, and will assess what equipment you might need.",
          "Equipment that helps with getting out of bed or a chair includes a grab rail attached to the bed and straps to help lift your leg. Your local council offers a free needs assessment, and equipment will be provided for free if you are assessed as needing it.",
        ],
      },
    ],
    helps: [
      "Use crutches or walking sticks at first, going down to one crutch and then a walking stick when you feel confident.",
      "Try walking without an aid after about 6 weeks, if you feel ready.",
      "Wear good supportive outdoor shoes when you start walking outside.",
      "Turn with several small steps rather than twisting your knee.",
      "On stairs, lead with your unoperated leg going up and your operated leg coming down.",
      "Ask social services at your local council about a free needs assessment for equipment.",
    ],
    tryThisWeek: [
      "Step down to one crutch when confident.",
      "Turn with small steps, not a twist.",
      "Lead with the right leg on the stairs.",
    ],
    ask: "Am I ready to move to one crutch or a stick, and is there anything I should watch for on the stairs?",
    interactive: {
      kind: "timeline",
      title: "From frame to free walking",
      steps: [
        { id: "first", when: "First days", title: "Frame or crutches", points: ["Walking starts soon after the operation.", "The thigh muscles are weak, and a fall could damage the joint."] },
        { id: "two", when: "About 2 weeks", title: "One crutch, then a stick", points: ["Sooner if you feel confident.", "Turn with small steps, not a twist."] },
        { id: "three", when: "Within 3 weeks", title: "Walking outside", points: ["In good supportive outdoor shoes.", "Start taking longer strides."] },
        { id: "six", when: "About 6 weeks", title: "Without an aid", points: ["If your muscles feel strong and supportive.", "Longer after a more complex operation."] },
      ],
    },
    sources: [NHS_RECOVERY, AU_KNEE, NHS_GADGETS],
    quiz: {
      question: "Going down stairs after a knee replacement, which leg goes first?",
      options: [{ text: "The operated leg", right: true }, { text: "The unoperated leg" }, { text: "It makes no difference" }],
      why: "When going down, put your operated leg down first, followed by your unoperated leg.",
    },
  },
  {
    id: "kner-pain-swelling",
    kicker: "Recovery",
    question: "How much pain and swelling is normal after a knee replacement?",
    hook: "A sore, puffy knee and a swollen ankle are part of the early months. Ice, a raised leg and well-timed painkillers help, and a few signs mean getting checked.",
    short: "Pain caused by bruising from the operation is normal in the first two months, and swelling, especially of the ankle and foot, may last for up to three months. Raising your leg and using ice can help. If you still have pain after six months, speak to your physiotherapist or GP.",
    sections: [
      {
        heading: "Pain in the first months",
        paragraphs: [
          "Pain caused by bruising from the operation is normal in the first two months. You will probably still need to take painkillers at six weeks to help you sleep through the night, and you may have some pain for as long as six months.",
          "For most people, pain gradually eases during the first few months. Arthritis UK says research shows 10 to 20 per cent of people still have moderate or severe pain in the long term, and some hospitals have pain clinics that can help.",
        ],
      },
      {
        heading: "Taking painkillers well",
        paragraphs: [
          "Take any prescribed painkillers as directed, and use any as-needed medicine ahead of activities likely to cause discomfort, such as physiotherapy, a shower or going to bed. It is far easier to prevent pain that is building up than to chase it once it has fully hit.",
          "Keeping pain well controlled in the early days can help you heal and recover more quickly. It can help you control your breathing, start moving the joint safely and avoid complications such as chest infections or blood clots.",
        ],
      },
      {
        heading: "Swelling",
        paragraphs: [
          "Swelling is a very common problem after a knee replacement, particularly affecting the ankle and foot, and may last for up to three months. The ankle swelling usually settles as your walking improves, and swelling of the knee itself is also common over the first few months.",
          "Keep your leg raised as much as possible to reduce swelling, and do not stand for long periods, as this could cause swelling in your ankles.",
        ],
      },
      {
        heading: "Ice and raising the leg",
        paragraphs: [
          "Applying ice can be very helpful for a swollen joint, for up to 20 minutes at a time, but protect your skin from direct contact with the ice pack.",
          "Raising your foot above hip height, on a footstool or similar, is another good way of reducing swelling. Make sure you still get up and walk around for at least five minutes every hour, to help reduce the risk of a blood clot.",
        ],
      },
      {
        heading: "When to get it checked",
        paragraphs: [
          "If you still have pain after six months, speak to your physiotherapist or GP. If pain ever feels out of step with what you were told to expect, contact your care team as soon as possible.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you have throbbing or cramping pain in your leg, or redness, tenderness, swelling or pain in your knee that is not getting better or is getting worse. These could be signs of an infection or a blood clot.",
        ],
      },
    ],
    helps: [
      "Keep your leg raised as much as possible to reduce swelling.",
      "Apply ice for up to 20 minutes at a time, protecting your skin from direct contact with the ice pack.",
      "Get up and walk around for at least five minutes every hour, to help reduce the risk of a blood clot.",
      "Take as-needed painkillers before physiotherapy, a shower or bed, rather than waiting for the pain to build.",
      "Do not stand for long periods, as this could cause swelling in your ankles.",
      "If you still have pain after six months, speak to your physiotherapist or GP.",
    ],
    tryThisWeek: [
      "Raise your leg to ease swelling.",
      "Ice for up to 20 minutes, skin protected.",
      "Walk around for five minutes every hour.",
    ],
    ask: "Is my pain and swelling normal for this stage, and am I using my painkillers in the best way?",
    interactive: {
      kind: "signs",
      title: "Worth mentioning at your next check",
      intro: "Tick anything that applies, to take to your physiotherapist, GP or care team.",
      signs: [
        "Still having pain six months after the operation",
        "A knee that is still very stiff after about six weeks",
        "Pain that feels out of step with what I was told to expect",
        "Exercises leaving me sore for more than a few hours",
      ],
      after: "Speak to your physiotherapist or GP. For signs of infection or a blood clot, ask for an urgent GP appointment or get help from NHS 111. For leg pain and swelling with chest pain or difficulty breathing, call 999 or go to A&E.",
      copyHeading: "Things I have noticed since my knee replacement",
    },
    sources: [AU_KNEE, NHS_RECOVERY, AU_PAIN_SURGERY, NHS_COMPLICATIONS],
    quiz: {
      question: "How long may swelling of the ankle and foot last after a knee replacement?",
      options: [{ text: "Up to about three months", right: true }, { text: "A day or two" }, { text: "For the rest of your life" }],
      why: "Swelling is a very common problem after a knee replacement, particularly affecting the ankle and foot, and may last for up to three months.",
    },
  },
  {
    id: "kner-warning-signs",
    kicker: "Safety",
    question: "Which warning signs after a knee replacement need help straight away?",
    hook: "Most recoveries are trouble-free. A few signs, in the leg, the wound or the chest, are worth knowing by heart.",
    short: "Most people who have a knee replacement have no complications. Ask for an urgent GP appointment or get help from NHS 111 if you have throbbing or cramping pain in your leg, a high temperature, oozing or pus from your wound, or redness, swelling or pain in your knee that is not getting better or is getting worse. Call 999 or go to A&E if you have pain and swelling in your leg and you are having difficulty breathing or have chest pains.",
    sections: [
      {
        heading: "Most recoveries go smoothly",
        paragraphs: [
          "A knee replacement is a common and safe procedure, but as with any operation there are risks, which your doctor will explain. Most people have no complications, and if there are any, they are usually minor and can be treated.",
          "Arthritis UK says about 1 person in every 20 may have complications, and that most of these are minor and can be successfully treated. The risk depends on your age and general health.",
        ],
      },
      {
        heading: "Blood clots",
        paragraphs: [
          "Blood clots, or DVT (deep vein thrombosis), are possible after a knee replacement because of how the blood flows and clots after surgery. A clot that forms in the leg can sometimes travel to the lungs, which is called a pulmonary embolism and can cause serious complications.",
          "To reduce the risk, your doctor might suggest compression stockings or anticoagulant medicines. Treatment to prevent DVT sometimes continues after you leave hospital, because a blood clot can happen weeks after surgery.",
        ],
      },
      {
        heading: "Wound infection",
        paragraphs: [
          "There is a small chance that the knee wound could get infected after the operation, and this is usually treated with antibiotics. Arthritis UK says this happens in about 1 in 50 cases.",
          "Arthritis UK lists signs of infection to look out for: the wound breaking down with oozing, pus or sores, increased pain, and redness with the area feeling warmer than usual or smelling unpleasant. Look after your feet too, and see a doctor or podiatrist about problems such as ingrown toenails that could become infected.",
        ],
      },
      {
        heading: "Get urgent help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have recently had a knee replacement and you have throbbing or cramping pain in your leg, or a high temperature, or you feel hot, cold or shivery. The same applies to oozing or pus from your wound, or redness, tenderness, swelling or pain in your knee that is not getting better or is getting worse.",
          "These could be signs of an infection or a blood clot. You can call 111 or get help from 111 online.",
        ],
      },
      {
        heading: "Call 999",
        paragraphs: [
          "Call 999 or go to A&E if you have pain and swelling in your leg and you are having difficulty breathing or have chest pains. This could be a blood clot in the lungs, which needs to be treated immediately.",
          "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
    ],
    helps: [
      "Wear your compression stockings at all times, and only take them off to wash them.",
      "Get up and walk around for at least five minutes every hour, to help reduce the risk of a blood clot.",
      "Ask for an urgent GP appointment or get help from NHS 111 for throbbing or cramping leg pain, a high temperature, or an oozing wound.",
      "Call 999 or go to A&E for pain and swelling in your leg with difficulty breathing or chest pains.",
      "Do not drive to A&E: ask someone to drive you, or call 999 and ask for an ambulance.",
      "See a doctor or podiatrist about foot problems, such as ingrown toenails, that could become infected.",
    ],
    tryThisWeek: [
      "Keep your stockings on.",
      "Walk around for five minutes every hour.",
      "Know when to call 111 or 999.",
    ],
    ask: "Who should I call if I notice signs of a blood clot or an infection, day or night?",
    interactive: {
      kind: "scenarios",
      title: "Which help, and how fast?",
      scenarios: [
        {
          id: "calf",
          situation: "Two weeks after surgery, your calf is throbbing and cramping.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait for the six-week check" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you have throbbing or cramping pain in your leg. It could be a sign of a blood clot.",
        },
        {
          id: "breathless",
          situation: "Your leg is painful and swollen, and you are having difficulty breathing.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Ring the GP surgery tomorrow" }],
          why: "Call 999 or go to A&E if you have pain and swelling in your leg and you are having difficulty breathing or have chest pains.",
        },
        {
          id: "wound",
          situation: "The wound has started oozing and you feel shivery.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Cover it and see how it goes" }],
          why: "Oozing or pus from your wound, or feeling hot, cold or shivery, could be signs of an infection. Ask for an urgent GP appointment or get help from NHS 111.",
        },
        {
          id: "drive",
          situation: "You need to go to A&E and your car is outside.",
          options: [{ text: "Ask someone to drive you, or call 999", best: true }, { text: "Drive yourself there" }],
          why: "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance.",
        },
      ],
    },
    sources: [NHS_COMPLICATIONS, NHS_DVT, NHS_PE, AU_KNEE, NHS_RECOVERY],
    quiz: {
      question: "Leg pain and swelling with chest pains after a knee replacement: what should you do?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait for your follow-up appointment" }, { text: "Take extra painkillers and rest" }],
      why: "Call 999 or go to A&E if you have pain and swelling in your leg and you are having difficulty breathing or have chest pains.",
    },
  },
  {
    id: "kner-daily-life",
    kicker: "Everyday life",
    question: "How do I manage stairs, kneeling, bathing and housework with a new knee?",
    hook: "Light jobs soon, heavy ones later. Which leg leads on the stairs, when to try kneeling, and where free help comes from.",
    short: "Light household tasks, such as dusting or washing dishes, are usually manageable, but avoid heavier jobs like vacuuming or changing the beds for the first three months. Do not kneel on your new knee until your doctor says you can. Before you leave hospital, an occupational therapist or physiotherapist will show you the best ways to dress, shower and move about.",
    sections: [
      {
        heading: "Washing and dressing",
        paragraphs: [
          "Before you leave hospital, an occupational therapist or physiotherapist will explain the best ways to get dressed, take a shower and move about, and they will assess what equipment you might need.",
          "Bathroom equipment includes a non-slip mat for the bath or shower and a rail to help you get out. There are also gadgets to help put socks, tights and pants on.",
        ],
      },
      {
        heading: "Household jobs",
        paragraphs: [
          "You should be able to manage light household tasks like dusting or washing dishes. Avoid heavier jobs like vacuuming or changing the beds for the first three months, or get help with them.",
          "Avoid standing for long periods, as this could make your ankles swell. If you are ironing, sit down if possible and take care not to twist, and avoid reaching up or bending down for the first six weeks.",
        ],
      },
      {
        heading: "Sitting and kneeling",
        paragraphs: [
          "Do not sit with your legs crossed for the first six weeks. Do not kneel on your new knee until your doctor says you can.",
          "Arthritis UK says you can try kneeling on a soft surface after three months, when the scar tissue has healed enough. Kneeling may never be completely comfortable, but should become easier as the scar tissue hardens.",
        ],
      },
      {
        heading: "Stairs and sleep",
        paragraphs: [
          "Going up stairs, put your unoperated leg on the step first, then your operated leg. Coming down, put your operated leg down first.",
          "You do not need to sleep in a special position after the operation, but do not sleep with a pillow under your knee.",
        ],
      },
      {
        heading: "Help at home",
        paragraphs: [
          "Before the operation, think about asking for help with day-to-day activities, making sure things you use often are easy to reach and stocking your freezer with cooked meals. Make sure you have no major commitments, including long-haul air travel, for the first six weeks.",
          "Your local council offers a needs assessment, which is free, and equipment and small adaptations to your home will be provided for free if you are assessed as needing them.",
        ],
      },
    ],
    helps: [
      "Ask the occupational therapist or physiotherapist about the best ways to dress, shower and move about.",
      "Stick to light jobs, and get help with vacuuming or changing the beds for the first three months.",
      "Sit down to iron if possible, and avoid reaching up or bending down for the first six weeks.",
      "Do not kneel on your new knee until your doctor says you can.",
      "Keep the things you use often within easy reach.",
      "Ask social services at your local council about a free needs assessment.",
    ],
    tryThisWeek: [
      "Get help with the heavy jobs.",
      "Sit down to iron.",
      "Ask your council for an assessment.",
    ],
    ask: "When will it be safe for me to kneel, and which equipment would help me at home?",
    interactive: {
      kind: "scenarios",
      title: "Around the house",
      scenarios: [
        {
          id: "vacuum",
          situation: "It is week four and the carpets need vacuuming.",
          options: [{ text: "Ask someone to help", best: true }, { text: "Do it yourself, slowly" }],
          why: "Avoid heavier jobs like vacuuming or changing the beds for the first three months, or get help with them.",
        },
        {
          id: "kneel",
          situation: "Five weeks on, you want to kneel down to weed the garden.",
          options: [{ text: "Wait until your doctor says you can", best: true }, { text: "Kneel on a cushion" }],
          why: "Do not kneel on your new knee until your doctor says you can.",
        },
        {
          id: "iron",
          situation: "There is a pile of ironing waiting.",
          options: [{ text: "Sit down and take care not to twist", best: true }, { text: "Stand for as long as it takes" }],
          why: "If you are ironing, sit down if possible and take care not to twist. Avoid standing for long periods.",
        },
        {
          id: "pillow",
          situation: "A pillow under your knee feels comfortable at night.",
          options: [{ text: "Leave it out", best: true }, { text: "Keep it there" }],
          why: "You do not need to sleep in a special position after the operation, but do not sleep with a pillow under your knee.",
        },
      ],
    },
    sources: [AU_KNEE, NHS_RECOVERY, NHS_GADGETS, NHS_PREP],
    quiz: {
      question: "When does Arthritis UK say you can try kneeling on a soft surface?",
      options: [{ text: "After three months", right: true }, { text: "After three days" }, { text: "Never again" }],
      why: "Arthritis UK says you can try kneeling on a soft surface after three months, when the scar tissue has healed enough.",
    },
  },
  {
    id: "kner-driving-work",
    kicker: "Driving and work",
    question: "When can I drive and go back to work after a knee replacement?",
    hook: "At least six weeks for driving after a total knee, three after a partial one, and anything from six to twelve weeks for work, depending on the job.",
    short: "The NHS says to wait at least 6 weeks to drive after a total knee replacement, or 3 weeks after a partial one, and to check with your doctor that you are fit to drive. Most people return to work after about 6 to 12 weeks, depending on the type of work. Access to Work may help if your health affects your job.",
    sections: [
      {
        heading: "Driving again",
        paragraphs: [
          "Wait at least 6 weeks to drive again after a total knee replacement, or 3 weeks after a partial knee replacement, and check with your doctor that you are fit to drive.",
          "Arthritis UK says you can drive as long as you can safely control the vehicle and do an emergency stop. If you had surgery on your left knee and drive an automatic, you should be able to drive earlier, as long as you are not taking strong painkillers.",
        ],
      },
      {
        heading: "Insurance and the DVLA",
        paragraphs: [
          "Check with your insurance company whether you are covered during your recovery, and be confident that you can control the vehicle in all circumstances.",
          "The government's page on arthritis and driving says to tell DVLA if you use special controls for driving. Talk to your doctor if you are not sure whether your arthritis will affect your driving.",
        ],
      },
      {
        heading: "Back to work",
        paragraphs: [
          "Return to work when you feel ready. This is usually after about 6 to 12 weeks, but will depend on the type of work you do.",
          "Arthritis UK says that if you sit down most of the day, this may be in six to eight weeks, but a job that involves standing for long periods or manual work may need 10 to 12 weeks. If your job involves heavy manual work, discuss with your employer whether a lighter alternative can be found, as heavy lifting may damage the replacement joint.",
        ],
      },
      {
        heading: "Planning ahead",
        paragraphs: [
          "Before the operation, speak to your employer and make a plan for returning to work if you need to. You will be unable to drive for several weeks, so arrange transport too.",
          "Make sure you have no major commitments, including long-haul air travel, for the first six weeks after the operation.",
        ],
      },
      {
        heading: "Support at work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. It could give a grant towards things like specialist equipment, the costs of travelling to work if you cannot use public transport, or physical changes to your workplace.",
          "It can include a temporary condition, like a broken leg, and you need to be in paid work, or about to start or return to paid work in the next 12 weeks. A grant will not affect any other benefits you get, and you will not have to pay it back.",
        ],
      },
    ],
    helps: [
      "Check with your doctor that you are fit to drive before you start again.",
      "Check with your insurance company whether you are covered during your recovery.",
      "Speak to your employer before the operation and make a plan for returning to work.",
      "If your job involves heavy manual work, ask your employer whether a lighter alternative can be found.",
      "Call the Access to Work helpline on 0800 121 7479 if you are not sure whether you are eligible.",
    ],
    tryThisWeek: [
      "Ask your doctor if you are fit to drive.",
      "Call your insurer about cover.",
      "Plan your return with your employer.",
    ],
    ask: "When will I be fit to drive, and when is it realistic to go back to my kind of work?",
    interactive: {
      kind: "timeline",
      title: "Back on the road, back at work",
      steps: [
        { id: "partial", when: "3 weeks", title: "Driving after a partial knee", points: ["The least time to wait, says the NHS.", "Check with your doctor that you are fit to drive."] },
        { id: "total", when: "6 weeks", title: "Driving after a total knee", points: ["Safe control of the car and an emergency stop.", "Check that your insurance covers you."] },
        { id: "desk", when: "6 to 8 weeks", title: "A job sitting down", points: ["If you sit down most of the day.", "Return when you feel ready."] },
        { id: "manual", when: "10 to 12 weeks", title: "Standing or manual work", points: ["Ask whether lighter work can be found.", "Heavy lifting may damage the new joint."] },
      ],
    },
    sources: [NHS_RECOVERY, AU_KNEE, GOV_ARTHRITIS_DRIVING, NHS_PREP, GOV_ATW, GOV_ATW_ELIGIBILITY],
    quiz: {
      question: "How long does the NHS say to wait before driving after a total knee replacement?",
      options: [{ text: "At least 6 weeks", right: true }, { text: "Three days" }, { text: "Six months" }],
      why: "Wait at least 6 weeks to drive again after a total knee replacement, or 3 weeks after a partial knee replacement.",
    },
  },
  {
    id: "kner-activity",
    kicker: "Activity",
    question: "Which sports and activities can I do with a new knee?",
    hook: "Cycling, golf, tennis and even skiing can come back for many people. Contact sports are the ones to leave behind.",
    short: "Exercise and sport are recommended after a knee replacement, apart from contact sports. Arthritis UK says recreational sports such as golf, tennis and skiing gradually become possible, depending on how fit and sporty you were before, and that cycling is a very good way of building up strength and movement. Get advice from your doctor or physiotherapist before you begin.",
    sections: [
      {
        heading: "Activity is encouraged",
        paragraphs: [
          "Exercise and sport are recommended after a knee replacement, apart from contact sports, which may weaken the cement and lead to loosening of the joint.",
          "Recreational sports, including golf, tennis and skiing, will gradually become possible, depending on how fit and sporty you were before the operation.",
        ],
      },
      {
        heading: "Good places to start",
        paragraphs: [
          "Cycling is a very good way of building up strength and movement after knee surgery. Exercising the main muscle groups around your knee is very important both before and after a knee replacement.",
          "Arthritis UK says that over time, exercise can increase your mobility, help your balance and boost your mood. Its Let's Move for Surgery toolkit includes knee replacement exercises, full body strengthening and a cardio workout for before and after surgery.",
        ],
      },
      {
        heading: "Building up",
        paragraphs: [
          "It is a good idea to get advice from your doctor or physiotherapist about specific exercises before you begin, and to find a balance between rest and exercise so you do not overwork your knee.",
          "The NHS says to speak to a GP first if you have not exercised for some time, or if you have medical conditions or concerns, and to make sure your activity and its intensity are right for your fitness.",
        ],
      },
      {
        heading: "The weekly guide",
        paragraphs: [
          "Adults aged 65 and over should aim to be physically active every day, even if it is just light activity, and to do activities that improve strength, balance and flexibility on at least 2 days a week.",
          "Adults are advised to do at least 150 minutes of moderate intensity activity a week, such as riding a bike or water aerobics, or 75 minutes of vigorous intensity activity if they are already active.",
        ],
      },
      {
        heading: "Protecting the joint",
        paragraphs: [
          "The chances of needing repeat surgery are increased if you run or play vigorous sports, or do heavy manual work.",
          "If an exercise leaves you sore for more than a few hours afterwards, scale back your routine rather than abandoning it, and then gradually build your strength back up.",
        ],
      },
    ],
    helps: [
      "Get advice from your doctor or physiotherapist about specific exercises before you begin.",
      "Try cycling: it is a very good way of building up strength and movement.",
      "Avoid contact sports, which may lead to loosening of the joint.",
      "Aim to be active every day, with activities for strength, balance and flexibility on at least 2 days a week.",
      "Find a balance between rest and exercise, so you do not overwork your knee.",
    ],
    tryThisWeek: [
      "Ask which activities suit you.",
      "Try a short bike ride.",
      "Add strength and balance twice a week.",
    ],
    ask: "Which sports would be sensible for me, and when could I start them?",
    interactive: {
      kind: "scenarios",
      title: "Choosing an activity",
      scenarios: [
        {
          id: "rugby",
          situation: "You are invited back to a social rugby game.",
          options: [{ text: "Choose a non-contact sport instead", best: true }, { text: "Play, but carefully" }],
          why: "Exercise and sport are recommended after a knee replacement, apart from contact sports, which may weaken the cement and lead to loosening of the joint.",
        },
        {
          id: "bike",
          situation: "You want an activity to build up strength in the leg.",
          options: [{ text: "Cycling", best: true }, { text: "Nothing until the knee feels normal" }],
          why: "Cycling is a very good way of building up strength and movement after knee surgery.",
        },
        {
          id: "golf",
          situation: "You played golf every week before the operation.",
          options: [{ text: "Build back up gradually", best: true }, { text: "Give it up for good" }],
          why: "Recreational sports, including golf, tennis and skiing, will gradually become possible, depending on how fit and sporty you were before the operation.",
        },
        {
          id: "start",
          situation: "You have not exercised for years and want to start.",
          options: [{ text: "Speak to a GP or physiotherapist first", best: true }, { text: "Start with a hard workout" }],
          why: "Speak to a GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        },
      ],
    },
    sources: [AU_KNEE, AU_LETS_MOVE, NHS_ACTIVE_OLDER, NHS_ACTIVE_ADULTS, AU_PAIN_SURGERY],
    quiz: {
      question: "Which kind of sport does Arthritis UK say to avoid with a new knee?",
      options: [{ text: "Contact sports", right: true }, { text: "Cycling" }, { text: "Golf" }],
      why: "Exercise and sport are recommended after a knee replacement, apart from contact sports, which may weaken the cement and lead to loosening of the joint.",
    },
  },
  {
    id: "kner-long-term",
    kicker: "Long term",
    question: "How long does a new knee last, and what follow-up will I have?",
    hook: "Most knee replacements last for decades. Knowing what can shorten that, and when to get a check, helps a new knee go the distance.",
    short: "Most knee replacements last for about 25 years, says the NHS, and Arthritis UK says most last for 20 years or more. A partial knee replacement is more likely to need a repeat operation. You will usually have a follow-up appointment about 6 weeks after the operation, and new or worsening pain, a limp or loss of function should be checked.",
    sections: [
      {
        heading: "How long it lasts",
        paragraphs: [
          "Most knee replacements last for about 25 years. Depending on when you had the operation you may need another replacement later in life, but this is not common.",
          "Arthritis UK says that for 80 to 90 per cent of people who have a total knee replacement, the new joint should last about 20 years, and it may well last longer.",
        ],
      },
      {
        heading: "Partial knees and repeat operations",
        paragraphs: [
          "If you have had a partial knee replacement, you are more likely to need a repeat operation. About 1 person in 10 needs further surgery after 10 years.",
          "A repeat operation on the same knee is called a revision. It is more difficult than the first and the benefits tend to lessen with each revision, but the techniques are becoming more routine and more successful all the time.",
        ],
      },
      {
        heading: "What can shorten its life",
        paragraphs: [
          "A replacement knee joint may wear out after a time or may become loose. The chances of needing repeat surgery are increased if you are overweight, do heavy manual work, or run or play vigorous sports.",
          "The earlier you have a knee replacement, the greater the chances that you will eventually need further surgery. Most people who have a knee replacement are over 60.",
        ],
      },
      {
        heading: "Follow-up",
        paragraphs: [
          "You will usually have a follow-up appointment about 6 weeks after the operation to check you are recovering well, and further follow-up appointments are also usually recommended.",
          "NICE says GPs and other primary care staff should refer people who develop new or worsening pain, a limp or loss of function related to their joint replacement to an orthopaedic surgical service.",
        ],
      },
      {
        heading: "Looking after it",
        paragraphs: [
          "Your new knee will continue to improve for as much as two years after the operation, as the scar tissue heals and you exercise your muscles. Physiotherapy and certain exercises may help with ongoing problems, such as difficulty bending the knee or a knee that feels unstable.",
          "Very rarely, the bone around the replacement joint can break after a minor fall, usually after some months or years and in people with weak bones. If you agree, details of your knee replacement go to the National Joint Registry, which monitors them to help improve patient safety.",
        ],
      },
    ],
    helps: [
      "Go to your follow-up appointment about 6 weeks after the operation, and any further appointments you are offered.",
      "See your GP about new or worsening pain, a limp or loss of function in your replacement knee.",
      "Keep up your exercises: physiotherapy and certain exercises may help with ongoing problems.",
      "If your job involves heavy manual work, discuss with your employer whether a lighter alternative can be found.",
    ],
    tryThisWeek: [
      "Note your follow-up appointment.",
      "Tell your GP about new pain or a limp.",
      "Keep up your exercises.",
    ],
    ask: "How long is my type of knee replacement likely to last, and what follow-up should I expect?",
    interactive: {
      kind: "risk-check",
      title: "What raises the chance of a repeat?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "partial", label: "A partial knee replacement", note: "About 1 person in 10 needs further surgery after 10 years.", changeable: false },
        { id: "earlier", label: "Having it earlier in life", note: "The earlier you have one, the greater the chances of eventually needing further surgery.", changeable: false },
        { id: "weight", label: "Being overweight", note: "Arthritis UK says this increases the chances of needing repeat surgery.", changeable: true },
        { id: "manual", label: "Heavy manual work", note: "Increases the chances of repeat surgery. Heavy lifting may damage the replacement joint.", changeable: true },
        { id: "sport", label: "Running or vigorous sports", note: "Increases the chances of repeat surgery. Contact sports may lead to loosening of the joint.", changeable: true },
      ],
    },
    sources: [NHS_COMPLICATIONS, AU_KNEE, NHS_RECOVERY, NICE_NG157, NHS_HOW],
    quiz: {
      question: "How long do most knee replacements last, according to the NHS?",
      options: [{ text: "About 25 years", right: true }, { text: "About 2 years" }, { text: "About 5 years" }],
      why: "Most knee replacements last for about 25 years.",
    },
  },
];
