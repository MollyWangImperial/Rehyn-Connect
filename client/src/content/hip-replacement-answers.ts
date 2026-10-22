import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Hip replacement page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's `sources`;
// nothing is added that those pages do not say. Most of it comes from the NHS hip replacement pages and Arthritis UK
// (the charity formerly called Versus Arthritis), with the Royal College of Surgeons' Get Well Soon leaflet on total
// hip replacement, NICE guideline NG157 and the government's pages on driving after surgery and Access to Work.
// Urgent and emergency advice is worded as the NHS words it. Exercises are described only as the sources describe
// them. General information only; it never replaces what a person's own surgeon, GP or physiotherapist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_WHAT = nhs("What is a hip replacement?", "tests-and-treatments/hip-replacement/what-is-a-hip-replacement/");
const NHS_WHY = nhs("Why a hip replacement is done", "tests-and-treatments/hip-replacement/why-a-hip-replacement-is-done/");
const NHS_ALT = nhs("Alternatives to a hip replacement", "tests-and-treatments/hip-replacement/alternatives-to-a-hip-replacement/");
const NHS_PREP = nhs("Preparing for a hip replacement", "tests-and-treatments/hip-replacement/preparing-for-a-hip-replacement/");
const NHS_HOW = nhs("How a hip replacement is done", "tests-and-treatments/hip-replacement/how-a-hip-replacement-is-done/");
const NHS_RECOVERY = nhs("Recovering from a hip replacement", "tests-and-treatments/hip-replacement/recovering-from-a-hip-replacement/");
const NHS_COMP = nhs("Complications of a hip replacement", "tests-and-treatments/hip-replacement/complications-of-a-hip-replacement/");
const NHS_DVT = nhs("DVT (deep vein thrombosis)", "conditions/deep-vein-thrombosis-dvt/");
const NHS_PE = nhs("Pulmonary embolism", "conditions/pulmonary-embolism/");
const NHS_SURGERY_PREP = nhs("Before surgery", "tests-and-treatments/having-surgery/preparation/");
const NHS_SURGERY_RECOVERY = nhs("Getting back to normal after surgery", "tests-and-treatments/having-surgery/recovery/");
const NHS_WALKING_AIDS = nhs("Walking aids, wheelchairs and mobility scooters", "social-care-and-support/care-services-equipment-and-care-homes/walking-aids-wheelchairs-and-mobility-scooters/");
const NHS_EQUIPMENT = nhs("Household gadgets and equipment to make life easier", "social-care-and-support/care-services-equipment-and-care-homes/household-gadgets-and-equipment-to-make-life-easier/");
const NHS_ACTIVITY_OLDER = nhs("Physical activity guidelines for older adults", "live-well/exercise/physical-activity-guidelines-older-adults/");

const AU_HIP = au("Hip replacement surgery", "understanding-arthritis/arthritis-treatments/surgery/hip-replacement-surgery/");
const AU_EX_HIPS = au("Exercises for the hips", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-hips/");
const AU_LETS_MOVE = au("Let's Move for Surgery toolkit", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/lets-move-for-surgery-toolkit/");

const RCS_GWS: LearnSource = { label: "Royal College of Surgeons: Get Well Soon, total hip replacement", url: "https://www.rcseng.ac.uk/-/media/Files/RCS/Patient-care/Recovering-from-surgery/GWSTotalHipReplacement.pdf" };
const NICE_NG157: LearnSource = { label: "NICE: Joint replacement (primary): hip, knee and shoulder (NG157)", url: "https://www.nice.org.uk/guidance/ng157/chapter/Recommendations" };

const GOV_SURGERY_DRIVING = gov("Surgery and driving", "surgery-and-driving");
const GOV_ATW = gov("Access to Work", "access-to-work");
const GOV_ATW_ELIGIBILITY = gov("Access to Work: eligibility", "access-to-work/eligibility");

export const hipReplacementAnswers: LearnArticle[] = [
  {
    id: "hipr-what-it-is",
    kicker: "Understanding",
    question: "What actually happens in a hip replacement?",
    hook: "A new ball and socket for a worn hip. What gets replaced, what it is made of, and the different kinds of operation.",
    short: "Hip replacement surgery replaces damaged parts of the hip joint with metal, plastic or ceramic parts. It is most commonly used to treat pain and stiffness caused by osteoarthritis. A hip replacement can last for at least 15 years and can significantly improve daily life.",
    sections: [
      {
        heading: "A ball and a socket",
        paragraphs: [
          "The hip is a ball-and-socket joint. This type of joint allows a good range of movement in any direction.",
          "The ball sits at the top of the thigh bone and rotates within a hollow, or socket, in the pelvis. The hip usually moves smoothly because the ends of the bones are covered with a layer of tough tissue called cartilage.",
        ],
      },
      {
        heading: "What is replaced",
        paragraphs: [
          "A total hip replacement is the most common type. The ball and the socket are both replaced: one part is shaped like a ball on a stem, with the stem inserted into the thigh bone, and the other is shaped like a bowl.",
          "The stem is always made of metal. A metal ball with a plastic socket is the most widely used combination. The parts are often fixed into the bone with acrylic cement, but it is becoming more common for one part or both to be inserted without cement.",
        ],
      },
      {
        heading: "Other kinds of operation",
        paragraphs: [
          "A partial hip replacement removes only the ball and leaves the socket in place. It usually has a faster recovery time than a total hip replacement, but does not usually last as long. It may be offered if you are in poor health or frail, or have had a serious hip injury.",
          "Hip resurfacing puts a metal cover over the surface of the ball, rather than removing the whole joint. It does not work well for people with weaker bones, and may be offered if you are aged around 50 or younger.",
        ],
      },
      {
        heading: "What it can do",
        paragraphs: [
          "Hip replacements are usually very successful, and most people will have less pain and better movement. Freedom from pain is often the main benefit of surgery.",
          "A hip replacement may not give quite as much mobility as a healthy natural hip joint. It can take several months to recover from the operation.",
        ],
      },
    ],
    helps: [
      "Ask your surgeon to explain the different types of implant and which they think will be most suitable for you.",
      "Discuss the possible risks with your surgeon before you decide to go ahead.",
      "Take an active part in your recovery, for example by regularly doing the exercises recommended for you.",
    ],
    tryThisWeek: [
      "Ask which implant would suit you.",
      "Discuss the risks with your surgeon.",
      "Plan to do your exercises regularly.",
    ],
    ask: "Which type of hip replacement would suit me, and why?",
    interactive: {
      kind: "flip-cards",
      title: "Kinds of hip operation",
      intro: "Turn each card to see what each operation involves and when it is used.",
      cards: [
        { id: "total", front: "Total hip replacement", when: "The most common type", back: "Both the ball and the socket are replaced with metal, ceramic or plastic parts." },
        { id: "partial", front: "Partial hip replacement", when: "If frail, or after a serious hip injury", back: "Only the ball is removed and the socket stays. Usually a faster recovery, but it does not usually last as long." },
        { id: "resurfacing", front: "Hip resurfacing", when: "Sometimes if aged around 50 or younger", back: "A metal cover goes over the surface of the ball. It does not work well for people with weaker bones." },
        { id: "small-cuts", front: "Minimally invasive approach", when: "Not suitable for everybody", back: "The surgeon only makes small cuts. Your doctor will discuss what type of operation is best for you." },
      ],
    },
    sources: [NHS_WHAT, NHS_WHY, NHS_HOW, AU_HIP],
    quiz: {
      question: "Which kind of hip replacement is the most common?",
      options: [{ text: "A total hip replacement", right: true }, { text: "A partial hip replacement" }, { text: "Hip resurfacing" }],
      why: "A total hip replacement is the most common type. The ball and the socket are both replaced.",
    },
  },
  {
    id: "hipr-deciding",
    kicker: "Deciding",
    question: "How do I know if it is time for a new hip?",
    hook: "Not a decision made by age or an X-ray alone. It turns on how much the hip is affecting your life, and what else has been tried.",
    short: "A hip replacement may be recommended if hip pain and stiffness are having a big effect on your life and other treatments have not worked. There are no upper or lower age limits. The alternatives, the possible benefits and risks, and the chance of needing more surgery in the future are all part of the discussion.",
    sections: [
      {
        heading: "When it is considered",
        paragraphs: [
          "A hip replacement may be recommended if hip pain and stiffness are having a big effect on your life and other treatments have not worked. The most common reason is problems caused by osteoarthritis.",
          "Other conditions that can be treated with a hip replacement include rheumatoid arthritis, and pain and stiffness caused by damage to the hip after a fall, injury or accident.",
        ],
      },
      {
        heading: "Treatments usually tried first",
        paragraphs: [
          "Before a hip replacement, your GP or doctor will talk to you about non-surgical treatments. These include weight loss to reduce the strain on your hip if you are overweight, and low-impact exercise such as swimming, walking or cycling, with muscle strengthening in the hips.",
          "Others are walking aids, special footwear or insoles, pain relief medicines, gels or creams, and steroid injections into the hip joint. If you have tried these and they have not helped, your doctor may talk to you about a hip replacement.",
        ],
      },
      {
        heading: "Age and timing",
        paragraphs: [
          "There are no upper or lower age limits for hip replacement surgery. However, replacement joints do eventually wear out, so the younger you are when you have surgery, the more likely you are to need further surgery at some point.",
          "Arthritis UK says it may be worth thinking about surgery if pain and stiffness are having a big impact on your daily activities, or if you are no longer able to manage your symptoms and this is affecting your quality of life.",
        ],
      },
      {
        heading: "Weighing it up together",
        paragraphs: [
          "NICE guidance says discussions with people offered a hip replacement should include the alternatives to joint replacement, the potential benefits and risks of the procedures and implants, and the possible need for more surgery in the future.",
          "Most people who have hip replacements notice an improvement in their quality of life and mobility. As with all surgery, it is important to think about the possible risks and discuss them with your surgeon before you decide to go ahead.",
        ],
      },
      {
        heading: "The risks to weigh",
        paragraphs: [
          "A hip replacement is a common and safe procedure, but as with any surgery there are risks, and your doctor will explain them. They include blood clots, a wound infection, a difference in leg length, and the hip dislocating or wearing over time.",
        ],
      },
    ],
    helps: [
      "Try the non-surgical treatments your GP or doctor talks to you about first, such as exercise, pain relief and walking aids.",
      "Think about the possible risks and discuss them with your surgeon before you decide to go ahead.",
      "Ask about the alternatives to joint replacement, and the possible need for more surgery in the future.",
      "A physiotherapist may advise and support you with exercising.",
      "If you are overweight, weight loss can reduce the strain on your hip.",
    ],
    tryThisWeek: [
      "Try the treatments your GP suggests.",
      "Discuss the risks before deciding.",
      "Ask about the alternatives.",
    ],
    ask: "What would a hip replacement gain me, and what are my own risks?",
    interactive: {
      kind: "scenarios",
      title: "Is it time to talk about it?",
      scenarios: [
        {
          id: "first",
          situation: "Your hip hurts, but you have not tried exercise or physiotherapy yet.",
          options: [{ text: "Ask about treatments to try first", best: true }, { text: "Ask for surgery straight away" }],
          why: "Before a hip replacement, your GP or doctor will talk to you about non-surgical treatments, such as low-impact exercise and muscle strengthening.",
        },
        {
          id: "age",
          situation: "You are in your fifties and worry you are too young.",
          options: [{ text: "Ask about the chance of more surgery later", best: true }, { text: "Assume you are too young" }],
          why: "There are no upper or lower age limits. However, the younger you are when you have surgery, the more likely you are to need further surgery at some point.",
        },
        {
          id: "daily-life",
          situation: "Pain stops you doing everyday things, despite other treatments.",
          options: [{ text: "Talk to your doctor about a new hip", best: true }, { text: "Wait until you can hardly walk" }],
          why: "A hip replacement may be recommended if hip pain and stiffness are having a big effect on your life and other treatments have not worked.",
        },
        {
          id: "risks",
          situation: "You are unsure what could go wrong.",
          options: [{ text: "Ask your surgeon to explain the risks", best: true }, { text: "Decide without asking" }],
          why: "As with all surgery, it is important to think about the possible risks and discuss them with your surgeon before you decide to go ahead.",
        },
      ],
    },
    sources: [NHS_WHY, NHS_ALT, AU_HIP, NICE_NG157, NHS_COMP],
    quiz: {
      question: "When may a hip replacement be recommended?",
      options: [{ text: "When pain and stiffness affect life and other treatments have not worked", right: true }, { text: "As soon as arthritis shows on an X-ray" }, { text: "Only after a certain age" }],
      why: "A hip replacement may be recommended if hip pain and stiffness are having a big effect on your life and other treatments have not worked.",
    },
  },
  {
    id: "hipr-preparing",
    kicker: "Preparing",
    question: "What can I do now to get ready for a new hip?",
    hook: "Waiting lists can be long. The weeks before are a chance to get stronger, sort out the house and line up help.",
    short: "Your doctor will talk to you about exercises to do before and after surgery, stopping smoking, a healthy diet and losing weight if you are overweight. These may lower your risk of complications and speed your recovery. A pre-admission clinic checks you are well enough for surgery, and getting your home, help and transport ready makes the first weeks easier.",
    sections: [
      {
        heading: "Use the wait",
        paragraphs: [
          "Before your hip replacement, your doctor will talk to you about the things you can do to prepare. This might include muscle strengthening exercises to do before and after the surgery, losing weight if you are overweight, stopping smoking, and a healthy diet within the recommended weekly limits on alcohol units.",
          "It is important to do these things while you wait, because waiting lists can be long. They may lower your risks of complications and speed your recovery time.",
        ],
      },
      {
        heading: "Staying active",
        paragraphs: [
          "Arthritis UK says staying active is important if you are waiting for surgery. If you are fit and strong, your surgery has the best chance of success, and you will likely recover more quickly.",
          "Its Let's Move for Surgery toolkit has follow-along exercise routines for before and after hip replacement. It is important to get advice from your healthcare professional about which exercises are suitable for you.",
        ],
      },
      {
        heading: "The pre-admission clinic",
        paragraphs: [
          "You will probably be asked to go to a pre-admission clinic a few weeks before the operation, to make sure you are well enough for surgery. You may need a blood test, X-rays, a urine test to check for infections, or an ECG to check your heart health.",
          "Discuss with your surgical team whether to stop taking any of your medicines or change the dose or timing, and bring your medicines, or a list of them, to this appointment. Some hospitals also run a joint school, and research shows people who take part tend to be less worried about their operation and do better after surgery.",
        ],
      },
      {
        heading: "Getting home ready",
        paragraphs: [
          "Think about asking for any help you might need at home, making sure things you use often are easy to reach, and stocking your freezer with cooked meals. Arrange transport, as you will be unable to drive for at least 6 weeks after the operation.",
          "Equipment such as a raised toilet seat or a hand-held grabber can be very useful. Arthritis UK also suggests a dental check-up, as bacteria from a dental problem could get into the bloodstream and cause an infection.",
        ],
      },
    ],
    helps: [
      "Do the muscle strengthening exercises recommended for the weeks before the operation.",
      "If you smoke, try to stop, as smoking can increase the risk of complications during and after surgery.",
      "Bring your medicines, or a list of them, to the pre-admission clinic.",
      "Have a dental check-up if you have not had one lately.",
      "Arrange help at home and transport, and stock your freezer with cooked meals.",
      "Let your surgeon know if you develop a cough, cold or high temperature a few days before surgery.",
    ],
    tryThisWeek: [
      "Do your strengthening exercises.",
      "Book a dental check-up.",
      "Arrange help and transport.",
    ],
    ask: "Which exercises should I do before the operation, and should I change any of my medicines?",
    interactive: {
      kind: "timeline",
      title: "The weeks before a new hip",
      steps: [
        { id: "wait", when: "While you wait", title: "Get stronger", points: ["Muscle strengthening exercises.", "Stopping smoking and a healthy diet."] },
        { id: "dentist", when: "Before you go in", title: "Dental check-up", points: ["Bacteria from a dental problem could cause an infection."] },
        { id: "clinic", when: "About 2 to 3 weeks before", title: "Pre-admission clinic", points: ["Blood tests, X-rays, a urine test, an ECG.", "Bring your medicines or a list of them."] },
        { id: "home", when: "The days before", title: "Home ready", points: ["Things you use often within easy reach.", "Freezer stocked and transport arranged."] },
        { id: "unwell", when: "A few days before", title: "Feeling unwell?", points: ["Tell your surgeon about a cough, cold or high temperature."] },
      ],
    },
    sources: [NHS_PREP, AU_LETS_MOVE, AU_HIP, NHS_SURGERY_PREP],
    quiz: {
      question: "Why is it worth preparing while you wait?",
      options: [{ text: "It may lower complication risks and speed recovery", right: true }, { text: "It makes the operation shorter" }, { text: "It replaces physiotherapy afterwards" }],
      why: "It is important to do these things while you wait, because waiting lists can be long. They may lower your risks of complications and speed your recovery time.",
    },
  },
  {
    id: "hipr-hospital",
    kicker: "In hospital",
    question: "What happens on the day, and how long will I be in hospital?",
    hook: "Awake or asleep, an hour or two in theatre, then on your feet sooner than many people expect.",
    short: "You will usually go into hospital on the day of the operation, which usually takes about 1 to 2 hours. You will have either a spinal anaesthetic, so you are awake but have no feeling from the waist down, or a general anaesthetic. The team will help you start walking as soon as possible, and if you are generally fit and the surgery went well you can usually go home around 1 to 3 days later.",
    sections: [
      {
        heading: "Arriving",
        paragraphs: [
          "If you are having a hip replacement, you will usually go into hospital on the day of the operation. You will be asked to sign a consent form, unless you have already done this at an earlier appointment.",
          "You will also be asked whether you consent to details of your hip replacement going to the National Joint Registry. It collects and monitors details of hip replacements to help improve patient safety, experience and outcomes.",
        ],
      },
      {
        heading: "Awake or asleep",
        paragraphs: [
          "You will either have a local anaesthetic in your spine, so you are awake but have no feeling from the waist down, or a general anaesthetic, so you are asleep. Most hip replacements are done under a spinal anaesthetic, and your anaesthetist will help you decide which is best for you.",
          "If you have a local anaesthetic, you may also be offered a sedative to help you feel relaxed and sleepy.",
        ],
      },
      {
        heading: "In theatre",
        paragraphs: [
          "The operation usually takes about 1 to 2 hours. The surgeon makes a cut in the back or side of your hip, removes the top end of the thigh bone and fits a new ball, then drills out the hip socket and fits a new one.",
          "The surgeon closes the cut with stitches or clips and covers it with a dressing. You are then taken to a recovery room so you can fully recover from the anaesthetic.",
        ],
      },
      {
        heading: "On the ward",
        paragraphs: [
          "You will continue to have painkillers in the days after the operation, as your hip will be sore. You may have a tube in your hip to drain away fluids, and the drip and any drains are usually removed within 24 hours.",
          "Nurses and physiotherapists will help you start walking as soon as possible, often on the same day, using a walking frame or crutches at first. NICE says rehabilitation should be offered on the day of surgery if possible, and no more than 24 hours after.",
        ],
      },
      {
        heading: "Going home",
        paragraphs: [
          "You can usually go home if your wound is healing well and you can safely get around. If you are generally fit and the surgery went well, this is usually around 1 to 3 days after the operation.",
          "Before you go home, a physiotherapist or occupational therapist will talk to you about managing daily activities and home exercise programmes. An occupational therapist may arrange equipment such as a raised toilet seat or gadgets to help you dress.",
        ],
      },
    ],
    helps: [
      "Ask your anaesthetist about the different types of anaesthetic and which is best for you.",
      "Pack the medicines you normally take, and a list of the doses for each medicine.",
      "Arrange transport home, as you will not be able to drive yourself.",
      "Start walking with the nurses and physiotherapists as soon as possible after the operation.",
      "Ask the hospital team about any special equipment you will need when you leave hospital.",
    ],
    tryThisWeek: [
      "Ask which anaesthetic suits you.",
      "Pack your medicines and a doses list.",
      "Arrange a lift home.",
    ],
    ask: "Which anaesthetic would you recommend for me, and how long do you expect me to stay in hospital?",
    interactive: {
      kind: "timeline",
      title: "From admission to home",
      steps: [
        { id: "arrive", when: "The day of the operation", title: "Admission", points: ["A consent form, if not signed already.", "Asked about the National Joint Registry."] },
        { id: "theatre", when: "About 1 to 2 hours", title: "The operation", points: ["A spinal or a general anaesthetic.", "A new ball and socket fitted."] },
        { id: "recovery", when: "Straight after", title: "Recovery room", points: ["Time to recover from the anaesthetic.", "Medicines to help with any pain."] },
        { id: "walk", when: "Often the same day", title: "First steps", points: ["Help from nurses and physiotherapists.", "A walking frame or crutches at first."] },
        { id: "home", when: "Around 1 to 3 days", title: "Going home", points: ["Once the wound heals well and you get about safely.", "Advice on daily activities and home exercises."] },
      ],
    },
    sources: [NHS_HOW, AU_HIP, NHS_RECOVERY, NICE_NG157, NHS_SURGERY_PREP],
    quiz: {
      question: "Which anaesthetic are most hip replacements done under?",
      options: [{ text: "A spinal anaesthetic", right: true }, { text: "A sedative on its own" }, { text: "Always a general anaesthetic" }],
      why: "Most hip replacements are done under a spinal anaesthetic, and your anaesthetist will help you decide which is best for you.",
    },
  },
  {
    id: "hipr-exercises",
    kicker: "Exercise",
    question: "Which exercises help after a hip replacement, and how often?",
    hook: "Squeezes, slides and small lifts on the bed, then standing moves at the kitchen worktop. Little and often builds the new hip's strength.",
    short: "Following the exercises early on in your recovery helps the long-term strength and movement in your hip. Arthritis UK suggests repeating each lying-down exercise 10 times, three or four times a day, starting gently and building up. Follow your own physiotherapist's advice, as they may suggest other exercises.",
    sections: [
      {
        heading: "Why they matter",
        paragraphs: [
          "Following the exercises early on in your recovery will help with the long-term strength and movement in your hip. You will probably have a greater improvement if you take an active part in your recovery, for example by regularly doing the exercises recommended for you.",
          "A physiotherapist will see you in hospital to help get you moving and advise you on exercises to strengthen your muscles. NICE says people doing their own rehabilitation should have a clear understanding of their goals and a point of contact for advice and support.",
        ],
      },
      {
        heading: "Start gently",
        paragraphs: [
          "Start gently with just a few repeats of each exercise and gradually build up. If any of the exercises cause pain, stop that exercise for a time and try it again when you feel a bit stronger.",
          "Even if you have only had one hip replaced, it is usually a good idea to do exercises for both legs, unless your physiotherapist advises otherwise. Make sure you also follow any other advice your physiotherapist gives you.",
        ],
      },
      {
        heading: "Lying-down exercises",
        paragraphs: [
          "Arthritis UK's lying-down exercises can be done on the bed. Repeat each exercise 10 times, and try to do them three or four times a day.",
          "They include a glute exercise: lie on your back, squeeze the muscles in your bottom together, hold for five seconds and relax. Another is the heel slide: bend your leg and slide your knee towards your chest, then slide your heel down again and straighten your knee slowly.",
        ],
      },
      {
        heading: "Standing exercises",
        paragraphs: [
          "The standing exercises use a work surface or chair for support. For hip flexion, march on the spot to bring your knees up towards your chest in turn. Your physiotherapist may recommend that you do not raise your knee above hip level.",
          "For hip extension, move your leg backwards, keeping your knee straight, and try not to lean forwards. Arthritis UK notes that one of its sitting hip stretches may not be suitable if you have had recent hip surgery.",
        ],
      },
      {
        heading: "Keep going, carefully",
        paragraphs: [
          "Take care, especially during the first eight to 12 weeks, to avoid dislocating the hip, and do not test your new joint to see how far it will go. Even so, it is important to continue with the muscle-strengthening programme recommended by your physiotherapist.",
          "While your hip is recovering, do not do exercises involving jumping, sudden turns, or where there is a high risk of falling.",
        ],
      },
    ],
    helps: [
      "Follow the exercises your physiotherapist has recommended.",
      "Start with just a few repeats of each exercise and gradually build up.",
      "If an exercise causes pain, stop it for a time and try again when you feel a bit stronger.",
      "Do exercises for both legs, unless your physiotherapist advises otherwise.",
      "Avoid exercises involving jumping, sudden turns or a high risk of falling while your hip is recovering.",
    ],
    tryThisWeek: [
      "Do your physiotherapy exercises.",
      "Build up the repeats gradually.",
      "Exercise both legs.",
    ],
    ask: "Which exercises should I be doing at this stage, and how many times a day?",
    interactive: {
      kind: "flip-cards",
      title: "Five exercises, card by card",
      intro: "Follow your physiotherapist's advice first. Turn each card to see how Arthritis UK describes it.",
      cards: [
        { id: "glute", front: "Glute exercise", when: "Lying on your back", back: "Squeeze the muscles in your bottom together, hold for five seconds and relax." },
        { id: "quad", front: "Quad exercise", when: "Lying, with your leg straight", back: "Pull your toes and ankles towards you, push your knee firmly down, hold for five seconds and relax." },
        { id: "heel-slide", front: "Heel slide", when: "Lying on the bed", back: "Bend your leg and slide your knee towards your chest. Slide your heel down again and straighten your knee slowly." },
        { id: "abduction", front: "Hip abduction", when: "Lying on the bed", back: "Slide your leg out to the side and back to the middle, toes and kneecap facing the ceiling." },
        { id: "flexion", front: "Hip flexion", when: "Standing at a work surface", back: "March on the spot, knees towards your chest. Your physiotherapist may say not above hip level." },
      ],
    },
    sources: [NHS_RECOVERY, AU_HIP, NICE_NG157, AU_EX_HIPS],
    quiz: {
      question: "How often does Arthritis UK suggest doing the lying-down exercises?",
      options: [{ text: "10 repeats, three or four times a day", right: true }, { text: "Once a week" }, { text: "Only when the hip hurts" }],
      why: "Repeat each exercise 10 times, and try to do them three or four times a day.",
    },
  },
  {
    id: "hipr-walking",
    kicker: "Getting about",
    question: "When can I put down the crutches, and how far should I walk?",
    hook: "A frame, then crutches, then a stick. Walking a little further each day is part of the treatment.",
    short: "You will need crutches or a walking frame at first, and walking every day as far as is comfortable is encouraged. The Royal College of Surgeons says that by the end of the second week you should be able to walk easily with one stick. This depends on the approach your surgeon used, and some people need crutches for considerably longer.",
    sections: [
      {
        heading: "From frame to crutches",
        paragraphs: [
          "The hospital team will try to get you walking as soon as possible, often on the same day as your operation. To begin with you will use a walking frame, followed by elbow crutches or sticks.",
          "A physiotherapist will help you learn how to walk on your crutches and use stairs safely before you go home. They will measure you for a pair of crutches and show you how to use them.",
        ],
      },
      {
        heading: "Walking every day",
        paragraphs: [
          "Regularly walk every day as far as is comfortable, and talk to your physiotherapist if you have any problems. The Royal College of Surgeons says walking is encouraged, and the hip joint will regain mobility of its own accord.",
          "It suggests that four to five days after the operation you might walk for 5 to 10 minutes several times a day, going for slightly longer walks each day.",
        ],
      },
      {
        heading: "Down to one stick",
        paragraphs: [
          "By the end of the second week, the Royal College of Surgeons says you should be able to walk easily with one stick. This will depend on the approach your surgeon used, and some people have to use crutches for considerably longer.",
          "Arthritis UK says you may need a walking aid for the first few weeks, but this varies from one person to another. Your surgeon or physiotherapist will be able to tell you how well you are progressing.",
        ],
      },
      {
        heading: "Getting your own aids",
        paragraphs: [
          "You can borrow some types of walking sticks and walking frames from the NHS. Speak to a GP, physiotherapist or hospital staff, and you might have to pay a deposit.",
          "Make sure a stick or frame is the correct height for you, and speak to a physiotherapist for advice about a stick for going up steps. You can sometimes borrow an NHS wheelchair for a short while, for example after an operation.",
        ],
      },
    ],
    helps: [
      "Walk every day as far as is comfortable.",
      "Go for slightly longer walks each day.",
      "Talk to your physiotherapist if you have any problems.",
      "Make sure your walking stick or frame is the correct height for you.",
      "Speak to a physiotherapist for advice about using a stick on steps.",
    ],
    tryThisWeek: [
      "Walk as far as is comfortable daily.",
      "Walk slightly further each day.",
      "Check your stick's height.",
    ],
    ask: "When can I move from crutches to a stick, and how far should I be walking now?",
    interactive: {
      kind: "timeline",
      title: "From frame to stick",
      steps: [
        { id: "first", when: "Often the day of surgery", title: "First steps", points: ["A walking frame to begin with.", "Help from a physiotherapist."] },
        { id: "before-home", when: "Before going home", title: "Crutches and stairs", points: ["Learning to walk on crutches.", "Using stairs safely."] },
        { id: "short-walks", when: "4 to 5 days", title: "Short walks", points: ["5 to 10 minutes, several times a day.", "Slightly longer walks each day."] },
        { id: "one-stick", when: "End of week two", title: "One stick", points: ["Walking easily with one stick, for many.", "Some need crutches for longer."] },
        { id: "further", when: "2 to 6 weeks", title: "Further still", points: ["Walking distances increase.", "Continued use of a walking stick."] },
      ],
    },
    sources: [AU_HIP, RCS_GWS, NHS_RECOVERY, NHS_WALKING_AIDS],
    quiz: {
      question: "By the end of the second week, what does the Royal College of Surgeons say you should be able to do?",
      options: [{ text: "Walk easily with one stick", right: true }, { text: "Run short distances" }, { text: "Walk without any aid at all times" }],
      why: "By the end of the second week, the Royal College of Surgeons says you should be able to walk easily with one stick.",
    },
  },
  {
    id: "hipr-pain-swelling",
    kicker: "Recovery",
    question: "How sore will it be, and how do I sleep with a new hip?",
    hook: "Sore at first, swollen for weeks and more tired than you expected. Most of it settles, and some simple habits help.",
    short: "Your hip will be sore after the operation, and you will be given painkillers. Pain from the surgery itself should start to ease within the first two weeks, and swelling in the legs and feet usually gets better in a few weeks. You may need to sleep on your back at first, with a pillow or support between your legs.",
    sections: [
      {
        heading: "Pain",
        paragraphs: [
          "You should expect to have some pain from the surgery to begin with, and you will be given medication to help with this. Arthritis UK says pain from the surgery itself should start to ease within the first two weeks.",
          "The Royal College of Surgeons says you are likely to need pain relief on a reducing basis over the first few weeks. Some people will have longer-term pain, and in some cases this may need further treatment.",
        ],
      },
      {
        heading: "Swelling",
        paragraphs: [
          "You will probably have some pain and swelling in your legs and feet, and these usually get better in a few weeks. Sit in a reclining position, but try to avoid sitting still for long periods, as this will help with swelling.",
          "Swelling can cause the leg to ache and make it feel very heavy. Do not worry if the leg becomes very bruised, as this will settle in due course.",
        ],
      },
      {
        heading: "Sleep and tiredness",
        paragraphs: [
          "You may need to sleep on your back at first, with a pillow or support between your legs to keep them stable.",
          "Your body is using energy to heal itself, so you will feel more tired than normal, and it can come on suddenly. You will also have lost some blood during the operation, and it takes a few weeks for the body to return the blood level to normal.",
        ],
      },
      {
        heading: "Other things that help",
        paragraphs: [
          "Painkillers may cause constipation, so it is important to get plenty of fibre in your diet while you recover, and fresh fruit and vegetables will help. A healthy, balanced diet helps make sure your body has all the nutrients it needs to heal.",
          "If you feel pain while building up your activities, you have probably just overdone it a little. Ease back on your activities for a day or two and then gradually increase them again. If you have severe pain, consult your GP.",
        ],
      },
      {
        heading: "When pain is a warning",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have throbbing or cramping pain in your hip or leg, or redness, tenderness, swelling or pain in your hip or leg that is not getting better or is getting worse. These could be signs of an infection or a blood clot.",
        ],
      },
    ],
    helps: [
      "Sit in a reclining position, but avoid sitting still for long periods.",
      "Sleep on your back at first, with a pillow or support between your legs, if you are advised to.",
      "Get plenty of fibre, fruit and vegetables, as painkillers may cause constipation.",
      "If you have overdone it, ease back for a day or two and then build up again.",
      "If you have severe pain, consult your GP.",
    ],
    tryThisWeek: [
      "Recline, and avoid sitting still long.",
      "Eat plenty of fibre.",
      "Ease back if you overdo it.",
    ],
    ask: "How much pain and swelling is normal at this stage, and how should I take my painkillers?",
    interactive: {
      kind: "scenarios",
      title: "Sore days at home",
      scenarios: [
        {
          id: "swollen",
          situation: "Your leg is swollen after a long afternoon in an armchair.",
          options: [{ text: "Recline, and get up and move often", best: true }, { text: "Sit still for longer" }],
          why: "Sit in a reclining position, but try to avoid sitting still for long periods, as this will help with swelling.",
        },
        {
          id: "overdone",
          situation: "Your hip aches after you did more than usual.",
          options: [{ text: "Ease back for a day or two", best: true }, { text: "Push on and do even more" }],
          why: "If you feel pain while building up your activities, you have probably just overdone it a little. Ease back for a day or two and then gradually increase again.",
        },
        {
          id: "bruise",
          situation: "Your leg looks very bruised.",
          options: [{ text: "Expect it to settle in due course", best: true }, { text: "Stop walking altogether" }],
          why: "Do not worry if the leg becomes very bruised, as this will settle in due course.",
        },
        {
          id: "worse",
          situation: "Pain and swelling in your leg are getting worse, not better.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait for your follow-up" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111. These could be signs of an infection or a blood clot.",
        },
      ],
    },
    sources: [AU_HIP, RCS_GWS, NHS_RECOVERY, NHS_COMP],
    quiz: {
      question: "When does Arthritis UK say pain from the surgery itself should start to ease?",
      options: [{ text: "Within the first two weeks", right: true }, { text: "After six months" }, { text: "Straight after the operation" }],
      why: "Arthritis UK says pain from the surgery itself should start to ease within the first two weeks.",
    },
  },
  {
    id: "hipr-warning-signs",
    kicker: "Act fast",
    question: "Which signs after a hip replacement need help straight away?",
    hook: "Most recoveries go smoothly. Knowing the few signs of an infection or a blood clot means knowing exactly who to call.",
    short: "Ask for an urgent GP appointment or get help from NHS 111 if you have throbbing or cramping pain in your hip or leg, a high temperature, oozing or pus from your wound, or redness, swelling or pain that is getting worse. Call 999 or go to A&E if you have pain and swelling in your hip or leg and you are having difficulty breathing or have chest pains. This could be a blood clot in the lungs.",
    sections: [
      {
        heading: "Urgent: a GP or NHS 111",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have recently had a hip replacement and you have throbbing or cramping pain in your hip or leg, or a high temperature, or you feel hot, cold or shivery.",
          "The same applies if you have oozing or pus from your wound, or redness, tenderness, swelling or pain in your hip or leg that is not getting better or is getting worse. These could be signs of an infection or a blood clot.",
        ],
      },
      {
        heading: "Emergency: 999 or A&E",
        paragraphs: [
          "Call 999 or go to A&E if you have pain and swelling in your hip or leg, and you are having difficulty breathing or have chest pains. This could be a blood clot in the lungs, called a pulmonary embolism, which needs to be treated immediately.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
      {
        heading: "Why clots are a risk",
        paragraphs: [
          "Blood clots, or DVT, are possible after a hip replacement because of how the blood flows and clots after surgery. A blood clot that forms in the leg can sometimes travel to your lungs.",
          "Ways to reduce the risk include special stockings, pumps to exercise the feet, and medicines given by injection or as tablets. If your surgeon prescribes the tablets, you will need to take them for four to five weeks after you go home, and you may need to wear the stockings for about six weeks.",
        ],
      },
      {
        heading: "The wound",
        paragraphs: [
          "There is a small chance that your hip wound could get infected after surgery, and this is usually treated with antibiotics. Arthritis UK says a deep infection can occur in about 1 in 100 cases.",
          "It is normal to have a small amount of blood leak from the wound after surgery, and this usually stops within a couple of days. If there is leakage from the wound, the Royal College of Surgeons says to inform the surgeon immediately.",
        ],
      },
      {
        heading: "Later problems",
        paragraphs: [
          "Sometimes a hip replacement can dislocate. This is not common, but can be painful or cause swelling, and some people hear clicking or popping noises from the joint. If you are worried about your hip replacement, contact your GP or care team.",
        ],
      },
    ],
    helps: [
      "For signs of an infection or a blood clot, ask for an urgent GP appointment or get help from NHS 111.",
      "For pain and swelling in your hip or leg with difficulty breathing or chest pains, call 999 or go to A&E.",
      "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
      "Wear the compression stockings you are given, and take any blood clot tablets for as long as prescribed.",
      "Tell the hospital staff straight away if you have any problems with your wound healing.",
    ],
    tryThisWeek: [
      "Learn the NHS 111 warning signs.",
      "Know when to call 999.",
      "Wear your compression stockings.",
    ],
    ask: "Who should I call if I am worried about my wound or my leg, and how long do I need the stockings and blood clot medicine?",
    interactive: {
      kind: "signs",
      title: "Signs to act on",
      intro: "Tick any you have. These signs come from the NHS page on complications of a hip replacement.",
      signs: [
        "Throbbing or cramping pain in my hip or leg",
        "A high temperature, or feeling hot, cold or shivery",
        "Oozing or pus from my wound",
        "Redness, tenderness, swelling or pain that is getting worse",
        "Pain and swelling in my leg, with difficulty breathing",
        "Pain and swelling in my leg, with chest pains",
      ],
      after: "For the first four, ask for an urgent GP appointment or get help from NHS 111. With difficulty breathing or chest pains, call 999 or go to A&E.",
      copyHeading: "Signs since my hip replacement",
    },
    sources: [NHS_COMP, NHS_DVT, AU_HIP, RCS_GWS, NHS_PE],
    quiz: {
      question: "After a hip replacement, you have leg pain and swelling with chest pains. What should you do?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait for the follow-up appointment" }, { text: "Rest and see how it is tomorrow" }],
      why: "Call 999 or go to A&E if you have pain and swelling in your hip or leg, and you are having difficulty breathing or have chest pains.",
    },
  },
  {
    id: "hipr-daily-life",
    kicker: "Everyday life",
    question: "How do I manage dressing, washing and chairs with a new hip?",
    hook: "A higher chair, a raised toilet seat and a grabber within reach. Small changes protect the new hip while it heals.",
    short: "In the first weeks, do not bend your hip more than 90 degrees, cross your legs or sit in a low chair. Equipment such as a raised toilet seat, a grabber and gadgets to help you dress can make things easier, and an occupational therapist can advise. You can usually shower 48 hours after surgery, but keep the wound out of the bath until it has healed.",
    sections: [
      {
        heading: "Movements to avoid at first",
        paragraphs: [
          "Do not sit with your legs crossed, do not bend your hip more than 90 degrees, a right angle, and do not bend down to touch your feet or ankles.",
          "Arthritis UK says to take care, especially during the first eight to 12 weeks after the operation, to avoid dislocating the hip. Your therapist will advise you about any movements you need to take special care with.",
        ],
      },
      {
        heading: "Chairs and the toilet",
        paragraphs: [
          "Do not sit down in a low chair or on a low toilet seat, or in a chair without arms, as you will have problems pulling yourself up again. Raised toilet seats are available.",
          "A physiotherapist or occupational therapist may advise on how best to get in and out of a bed, a chair or the shower. Before you leave hospital, an occupational therapist may arrange equipment such as a raised toilet seat or gadgets to help you dress.",
        ],
      },
      {
        heading: "Dressing and washing",
        paragraphs: [
          "There are gadgets to help put socks, tights and pants on, and hooks to help pull zips and pull jackets on. A hand-held grabber helps you pick up objects.",
          "You can usually have a shower 48 hours after surgery, unless you have been advised not to. Do not get your wound under water, for example in a bath, until it has completely healed or until your doctor says it is safe to do so.",
        ],
      },
      {
        heading: "Around the house",
        paragraphs: [
          "Have everything you need within easy reach, and move anything that could get in your way. It can be difficult to carry things if you are using crutches or walking sticks, so a stool or high chair in the kitchen may be useful.",
          "Do not lift or move heavy objects until you are told it is safe to do so. Family and friends can help with tasks you may be unable to do for a while, such as the weekly shop or lifting heavier items.",
        ],
      },
      {
        heading: "Help with equipment",
        paragraphs: [
          "Your local council offers a service that assesses your needs and recommends help, including equipment, and having a needs assessment is free. Equipment and small adaptations to your home will be provided for free if you are assessed as needing them.",
        ],
      },
    ],
    helps: [
      "Do not cross your legs, and do not bend your hip more than 90 degrees.",
      "Avoid low chairs, low toilet seats and chairs without arms. Raised toilet seats are available.",
      "Keep things you use often within easy reach, and move anything that could get in your way.",
      "Ask social services at your local council about getting a needs assessment.",
      "Keep your wound out of the bath until it has completely healed or your doctor says it is safe.",
    ],
    tryThisWeek: [
      "Keep your hip below a right angle.",
      "Use a raised toilet seat.",
      "Keep everyday things within reach.",
    ],
    ask: "Which movements should I take special care with, and for how long?",
    interactive: {
      kind: "scenarios",
      title: "Around the house",
      scenarios: [
        {
          id: "socks",
          situation: "You need to put your socks on.",
          options: [{ text: "Use a gadget for putting socks on", best: true }, { text: "Bend down to your feet" }],
          why: "Do not bend down to touch your feet or ankles. There are gadgets to help put socks, tights and pants on.",
        },
        {
          id: "sofa",
          situation: "A friend offers you their low, soft sofa.",
          options: [{ text: "Choose a chair with arms instead", best: true }, { text: "Sink into the sofa" }],
          why: "Do not sit down in a low chair, or a chair without arms, as you will have problems pulling yourself up again.",
        },
        {
          id: "bath",
          situation: "You are home and would love a long bath.",
          options: [{ text: "Shower until the wound has healed", best: true }, { text: "Have the bath" }],
          why: "Do not get your wound under water, for example in a bath, until it has completely healed or until your doctor says it is safe.",
        },
        {
          id: "shopping",
          situation: "The weekly shop needs carrying in.",
          options: [{ text: "Ask family or friends to help", best: true }, { text: "Carry it in yourself" }],
          why: "Do not lift or move heavy objects until you are told it is safe. Family and friends can help with the weekly shop or lifting heavier items.",
        },
      ],
    },
    sources: [NHS_RECOVERY, AU_HIP, NHS_EQUIPMENT, NHS_PREP, NHS_SURGERY_RECOVERY, RCS_GWS],
    quiz: {
      question: "How far should you bend your new hip in the first weeks?",
      options: [{ text: "No more than 90 degrees", right: true }, { text: "As far as it will go" }, { text: "It makes no difference" }],
      why: "Do not bend your hip more than 90 degrees, a right angle.",
    },
  },
  {
    id: "hipr-driving-work",
    kicker: "Driving & work",
    question: "When can I drive again, and when can I go back to work?",
    hook: "Six weeks is the usual mark for both, but it depends on your recovery, your insurance and your job.",
    short: "Wait at least 6 weeks to drive, and check with your doctor that you are fit to drive. You need to be able to control the car safely, including an emergency stop, and to check your insurance. Returning to work usually takes about 6 weeks, but depends on the type of work you do, and a job with a lot of walking can take three months or more.",
    sections: [
      {
        heading: "When to drive",
        paragraphs: [
          "Wait at least 6 weeks to drive, and check with your doctor that you are fit to drive. Arthritis UK says you can expect to drive again after about six weeks, as long as you can safely control the vehicle and do an emergency stop.",
          "The Royal College of Surgeons adds that you should be free from the distracting effect of pain, and from the effects of any pain relief medicine you may be taking. It is advisable not to restart driving with a long journey.",
        ],
      },
      {
        heading: "Insurance and DVLA",
        paragraphs: [
          "Your insurance company should be told about your operation. Some companies will not insure drivers for a number of weeks after hip surgery, so it is important to check what your policy says.",
          "The government's driving pages say to tell DVLA if you have had an operation and you are still unable to drive 3 months later, and that after a hip replacement you follow the process for a limb disability. Ask your doctor if you are not sure how your operation will affect your driving.",
        ],
      },
      {
        heading: "Getting in and out of the car",
        paragraphs: [
          "Getting in and out of a car can be difficult. Your therapist may suggest sitting sideways on the seat first and then swinging both legs round together, and some people put a plastic bag on the seat to make it easier to swivel round.",
          "The Royal College of Surgeons says even travelling as a passenger is best avoided for the first three weeks, except for essential journeys, as getting in and out of a car can strain the hip. Discuss this with your surgeon.",
        ],
      },
      {
        heading: "Going back to work",
        paragraphs: [
          "Return to work when you feel ready. This usually takes about 6 weeks, but will depend on the type of work you do.",
          "Arthritis UK says you could return after about six weeks if your job does not involve too much moving around. If your job involves a lot of walking, you may need three months or more, and with a very heavy manual job you may want to think about changing to lighter duties.",
        ],
      },
      {
        heading: "Planning your return",
        paragraphs: [
          "Speak to your employer and make a plan for returning to work. The Royal College of Surgeons suggests asking about lighter duties at first, such as more time sitting rather than standing or walking, and not carrying more than around 5kg any significant distance.",
          "Access to Work may help if you have a physical or mental health condition or disability that means you need support to do your job or get to and from work. It could help pay for things such as the costs of travelling to work if you cannot use public transport.",
        ],
      },
    ],
    helps: [
      "Wait at least 6 weeks to drive, and check with your doctor that you are fit to drive.",
      "Tell your insurance company about your operation and check what your policy says.",
      "Before driving again, sit in the parked car with the keys out and practise firm pressure on the pedals.",
      "Speak to your employer and make a plan for returning to work.",
      "Ask your employer about returning on lighter duties at first.",
    ],
    tryThisWeek: [
      "Check with your doctor before driving.",
      "Call your insurance company.",
      "Plan your return with your employer.",
    ],
    ask: "When will I be fit to drive, and when could I go back to my kind of work?",
    interactive: {
      kind: "scenarios",
      title: "Back on the road, back at work",
      scenarios: [
        {
          id: "five-weeks",
          situation: "Five weeks on, you feel well enough to drive.",
          options: [{ text: "Wait for 6 weeks and check with your doctor", best: true }, { text: "Drive now if it feels fine" }],
          why: "Wait at least 6 weeks to drive, and check with your doctor that you are fit to drive.",
        },
        {
          id: "pedals",
          situation: "You want to test whether you are ready to drive.",
          options: [{ text: "Press the pedals in a parked car, keys out", best: true }, { text: "Take a long drive to see" }],
          why: "Sit in the driving seat in a safe place, without the keys in the ignition, and practise firm pressure on the pedals. It is advisable not to restart driving with a long journey.",
        },
        {
          id: "car-seat",
          situation: "Getting into the passenger seat feels awkward.",
          options: [{ text: "Sit sideways, then swing both legs round", best: true }, { text: "Step in one leg first and twist" }],
          why: "Your therapist may suggest sitting sideways on the seat first and then swinging both legs round together.",
        },
        {
          id: "walking-job",
          situation: "Your job involves walking most of the day.",
          options: [{ text: "Expect three months or more", best: true }, { text: "Plan to be back within a week" }],
          why: "If your job involves a lot of walking, you may need three months or more to fully recover before returning to work.",
        },
      ],
    },
    sources: [NHS_RECOVERY, AU_HIP, RCS_GWS, GOV_SURGERY_DRIVING, NHS_PREP, GOV_ATW, GOV_ATW_ELIGIBILITY],
    quiz: {
      question: "How long does the NHS say to wait, at least, before driving after a hip replacement?",
      options: [{ text: "6 weeks", right: true }, { text: "1 week" }, { text: "6 months" }],
      why: "Wait at least 6 weeks to drive, and check with your doctor that you are fit to drive.",
    },
  },
  {
    id: "hipr-activity",
    kicker: "Activity",
    question: "Which sports can I do with a new hip, and when?",
    hook: "Walking, swimming and cycling come first. Golf, bowls and dancing follow, and some surgeons counsel against high-impact sports.",
    short: "Regular exercise will help with your recovery. Walking is fine, swimming is too once your wound has been checked and is healing well, and cycling is good. Dancing, golf or bowls may be difficult at first but should be fine after about three months. Advice on higher-impact sports varies, so ask your surgeon or physiotherapist.",
    sections: [
      {
        heading: "The first activities",
        paragraphs: [
          "Regular exercise will help with your recovery. Walking is fine, and so is swimming once your wound has been checked and is healing well. Cycling is also good, though it may be difficult at first to get on and off the bike.",
          "The Royal College of Surgeons suggests increasing walking distances, swimming and static cycling between two and six weeks. By six to eight weeks, it says you should have no difficulty with activities like walking, cycling or swimming.",
        ],
      },
      {
        heading: "After about three months",
        paragraphs: [
          "Dancing, or sports like golf or bowls that involve bending or twisting at the hip, may be difficult at first, but should be fine after about three months.",
          "The Royal College of Surgeons says that by 12 weeks you may return to sports such as golf, tennis and cycling.",
        ],
      },
      {
        heading: "Sports to ask about",
        paragraphs: [
          "Some surgeons and therapists suggest avoiding extreme hip movements and activities with a high risk of falling, such as skiing. Others may advise against running on hard surfaces, jumping, or sports that involve sudden turns or impacts, such as squash or tennis.",
          "If in doubt, ask your surgeon or physiotherapist for advice. While your hip is recovering, do not do exercises involving jumping, sudden turns, or where there is a high risk of falling.",
        ],
      },
      {
        heading: "Staying active for good",
        paragraphs: [
          "The NHS says adults aged 65 and over should aim to be physically active every day, even if it is just light activity, and to do activities that improve strength, balance and flexibility on at least 2 days a week.",
          "It suggests at least 150 minutes of moderate intensity activity a week, such as walking for health, water aerobics or riding a bike. Speak to a GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        ],
      },
      {
        heading: "Sex",
        paragraphs: [
          "Try to avoid sex for 6 to 8 weeks after your operation. Many people find it more comfortable to lie on their back, and there is no need to feel awkward about asking for advice on suitable positions.",
        ],
      },
    ],
    helps: [
      "Walk regularly, and swim once your wound has been checked and is healing well.",
      "While your hip is recovering, avoid jumping, sudden turns and activities with a high risk of falling.",
      "If in doubt about a sport, ask your surgeon or physiotherapist for advice.",
      "Do activities that improve strength, balance and flexibility on at least 2 days a week.",
      "Speak to a GP first if you have not exercised for some time.",
    ],
    tryThisWeek: [
      "Take a regular walk.",
      "Ask before taking up a sport.",
      "Add strength and balance twice a week.",
    ],
    ask: "Which sports are safe for my new hip, and when can I start them?",
    interactive: {
      kind: "timeline",
      title: "Back to activity, step by step",
      steps: [
        { id: "walking", when: "From the start", title: "Walking", points: ["Walking is fine.", "Every day, as far as is comfortable."] },
        { id: "swimming", when: "Once the wound has healed", title: "Swimming and cycling", points: ["Swimming once the wound is checked.", "Getting on a bike may be hard at first."] },
        { id: "six-weeks", when: "6 to 8 weeks", title: "Easier going", points: ["No difficulty walking, cycling or swimming.", "Sex after about 6 to 8 weeks."] },
        { id: "three-months", when: "About three months", title: "Golf, bowls, dancing", points: ["Bending or twisting at the hip should be fine.", "Ask about higher-impact sports."] },
        { id: "ask", when: "For good", title: "Ask first", points: ["Some advise against skiing or squash.", "Others against running on hard surfaces."] },
      ],
    },
    sources: [AU_HIP, RCS_GWS, NHS_RECOVERY, NHS_ACTIVITY_OLDER],
    quiz: {
      question: "When does Arthritis UK say dancing, golf or bowls should be fine?",
      options: [{ text: "After about three months", right: true }, { text: "After about one week" }, { text: "Never again" }],
      why: "Dancing, or sports like golf or bowls that involve bending or twisting at the hip, may be difficult at first, but should be fine after about three months.",
    },
  },
  {
    id: "hipr-long-term",
    kicker: "Long term",
    question: "How long will my new hip last, and what if it wears out?",
    hook: "Most last at least 15 years. Knowing the signs of wear or loosening means problems are picked up early.",
    short: "Most hip replacements last for at least 15 years. All implants wear to some extent over time, and the most common reason for a hip replacement to fail is loosening, which is most common after 10 to 15 years. Repeat operations, called revisions, are possible and are becoming increasingly successful.",
    sections: [
      {
        heading: "How long it lasts",
        paragraphs: [
          "Modern hip replacement joints are designed to last for at least 15 years. Your new hip should allow you almost normal, pain-free activity for many years.",
          "There are some differences between different brands and types of joint replacement. Because replacement joints do eventually wear out, the younger you are when you have surgery, the more likely you are to need further surgery at some point.",
        ],
      },
      {
        heading: "Wear and loosening",
        paragraphs: [
          "All hip implants will wear to some extent over time, although ceramic parts generally wear less than metal or plastic ones. Wear can cause pain or swelling.",
          "The most common reason for a hip replacement to fail is when the artificial hip loosens. This usually causes pain, and the hip may become unstable. Loosening is most common after 10 to 15 years, although it could happen earlier.",
        ],
      },
      {
        heading: "Metal-on-metal hips",
        paragraphs: [
          "In the past, many hip replacements used a metal ball and a metal socket, called metal-on-metal implants, which can wear over time and cause health problems. If you have a metal-on-metal hip implant, you should have regular check-ups.",
          "Contact your GP or care team if you notice any problems with a metal-on-metal hip, such as new hip pain, feeling less mobile than usual, or a popping or clicking sound from the joint.",
        ],
      },
      {
        heading: "If it needs redoing",
        paragraphs: [
          "If your replacement hip dislocates or wears out, you may need another surgery to fix it. Repeat hip replacements, called revisions, are possible and are becoming increasingly successful.",
          "Revision surgery is usually more complicated than the original operation, and the results may not be quite as good. You are likely to be in hospital for longer than for the first operation, and recovery may take longer.",
        ],
      },
      {
        heading: "Keeping an eye on it",
        paragraphs: [
          "You will have a follow-up appointment around 6 to 12 weeks after your surgery to check how you are recovering. The National Joint Registry collects and monitors details of hip replacements to help improve patient safety, experience and outcomes.",
          "NICE says people who develop new or worsening pain, a limp or loss of function related to their joint replacement should be referred to an orthopaedic surgical service.",
        ],
      },
    ],
    helps: [
      "If you are worried about your hip replacement, contact your GP or care team.",
      "If you have a metal-on-metal hip implant, make sure you have regular check-ups.",
      "Report new hip pain, a limp or problems walking, or clicking, grinding or clunking from the joint.",
      "If you are not sure what type of hip you have and start to have symptoms, contact the hospital where the surgery was carried out.",
      "Keep up muscle-strengthening exercise, which still helps to improve the hip's stability.",
    ],
    tryThisWeek: [
      "Know who to call if worried.",
      "Find out which type of hip you have.",
      "Keep up strengthening exercise.",
    ],
    ask: "What type of hip replacement do I have, and do I need regular check-ups?",
    interactive: {
      kind: "signs",
      title: "Signs worth mentioning",
      intro: "Tick any you have noticed. These come from the NHS and Arthritis UK pages on hip replacement.",
      signs: [
        "New hip pain",
        "Feeling less mobile than usual",
        "A limp or problems walking",
        "Popping, clicking, grinding or clunking from the joint",
        "Pain or swelling at or near the hip",
      ],
      after: "Contact your GP or care team if you notice any of these. With a metal-on-metal hip and no regular checks, contact the hospital where the surgery was done.",
      copyHeading: "To mention about my hip replacement",
    },
    sources: [NHS_COMP, AU_HIP, NHS_RECOVERY, NHS_HOW, NICE_NG157],
    quiz: {
      question: "What is the most common reason for a hip replacement to fail?",
      options: [{ text: "The artificial hip loosening", right: true }, { text: "An allergy to the plastic" }, { text: "Walking too much" }],
      why: "The most common reason for a hip replacement to fail is when the artificial hip loosens.",
    },
  },
];
