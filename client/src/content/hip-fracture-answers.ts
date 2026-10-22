import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Hip fracture page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (nhs.uk and NHS inform,
// the NHS 24 health site for Scotland), the Royal Osteoporosis Society, the Chartered Society of Physiotherapy and
// NICE's hip fracture guideline (CG124). Urgent advice is worded as the NHS words it: 999 or A&E for a suspected
// broken hip after a fall, for sudden confusion, and for a leg clot with breathlessness or chest pain. Exercises
// are described only as NHS inform and the Chartered Society of Physiotherapy describe them, with their advice to
// follow your own healthcare professional and to check with a physiotherapist or GP first. General information
// only; it never replaces what a person's own surgeon, physiotherapist, nurse or GP tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const nhsi = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/${path}` });
const ros = (label: string, path: string): LearnSource => ({ label: `Royal Osteoporosis Society: ${label}`, url: `https://theros.org.uk/information-and-support/${path}` });
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/${path}` });

const NHS_BROKEN_HIP = nhs("Broken hip", "conditions/broken-hip/");
const NHS_FALLS = nhs("Falls", "conditions/falls/");
const NHS_DVT = nhs("DVT (deep vein thrombosis)", "conditions/deep-vein-thrombosis-dvt/");
const NHS_CONFUSION = nhs("Sudden confusion (delirium)", "symptoms/confusion/");
const NHS_OSTEO_TREATMENT = nhs("Osteoporosis: treatment", "conditions/osteoporosis/treatment/");
const NHS_ALENDRONIC_ABOUT = nhs("About alendronic acid", "medicines/alendronic-acid/about-alendronic-acid/");
const NHS_ALENDRONIC_HOW = nhs("How and when to take alendronic acid", "medicines/alendronic-acid/how-and-when-to-take-alendronic-acid/");
const NHS_INSOMNIA = nhs("Insomnia", "conditions/insomnia/");
const NHS_OLDER_ACTIVITY = nhs("Physical activity guidelines for older adults", "live-well/exercise/physical-activity-guidelines-older-adults/");
const NHS_LEAVE_HOSPITAL = nhs("Planning to leave hospital", "social-care-and-support/care-after-a-hospital-stay/planning-to-leave-hospital/");
const NHS_INTERMEDIATE_CARE = nhs("Care to support recovery after leaving hospital, or after a fall, injury or illness", "social-care-and-support/care-after-a-hospital-stay/care-to-support-recovery-after-leaving-hospital-or-after-a-fall-injury-or-illness/");
const NHS_NEEDS_ASSESSMENT = nhs("Getting a care needs assessment", "social-care-and-support/help-from-social-services-and-charities/getting-a-needs-assessment/");
const NHS_ADAPTATIONS = nhs("Home adaptations", "social-care-and-support/care-services-equipment-and-care-homes/home-adaptations/");
const NHS_GADGETS = nhs("Household gadgets and equipment to make life easier", "social-care-and-support/care-services-equipment-and-care-homes/household-gadgets-and-equipment-to-make-life-easier/");
const NHS_CARER_ASSESSMENT = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");

const NHSI_FRAGILITY = nhsi("Fragility fracture of the hip", "illnesses-and-conditions/muscle-bone-and-joints/leg-and-foot-problems-and-conditions/fragility-fracture-of-the-hip/");
const NHSI_RECOVERY = nhsi("Recovery from a hip fracture", "illnesses-and-conditions/muscle-bone-and-joints/leg-and-foot-problems-and-conditions/recovery-from-a-hip-fracture/");
const NHSI_EX_FRACTURE = nhsi("Exercises for recovery from a hip fracture", "illnesses-and-conditions/muscle-bone-and-joints/leg-and-foot-problems-and-conditions/exercises-for-recovery-from-a-hip-fracture/");
const NHSI_EX_HIP = nhsi("Exercises for hip problems", "illnesses-and-conditions/muscle-bone-and-joints/leg-and-foot-problems-and-conditions/exercises-for-hip-problems/");
const NHSI_EX_KNEE = nhsi("Exercises for knee problems", "illnesses-and-conditions/muscle-bone-and-joints/leg-and-foot-problems-and-conditions/exercises-for-knee-problems/");
const NHSI_DELIRIUM = nhsi("Delirium", "illnesses-and-conditions/brain-nerves-and-spinal-cord/delirium/");
const NHSI_WHY_FALLS = nhsi("Why falls matter", "healthy-living/preventing-falls/why-falls-matter/");
const NHSI_BONE_FALLS = nhsi("Bone health and falls", "healthy-living/preventing-falls/keeping-well/bone-health-and-falls/");
const NHSI_HOME_CHECK = nhsi("Prevent falls by doing a home safety check", "healthy-living/preventing-falls/home-safety/prevent-falls-by-doing-a-home-safety-check/");
const NHSI_WHAT_TO_DO = nhsi("What to do if you fall", "healthy-living/preventing-falls/dealing-with-a-fall/what-to-do-if-you-fall/");
const NHSI_FEAR = nhsi("Fear of falling", "healthy-living/preventing-falls/fear-and-anxiety-about-falling/fear-of-falling/");
const NHSI_ANXIETY = nhsi("How to deal with anxiety about falling", "healthy-living/preventing-falls/fear-and-anxiety-about-falling/how-to-deal-with-anxiety-about-falling/");

const ROS_BROKEN_BONES = ros("Broken hips, wrists and other bones", "living-with-osteoporosis-and-broken-bones/broken-hips-wrists-and-other-bones/");
const ROS_EVERYDAY = ros("Getting back to everyday activities", "living-with-osteoporosis-and-broken-bones/moving-and-lifting-safely/getting-back-to-everyday-activities-after-a-broken-bone/");
const ROS_FALLS = ros("Avoiding trips, slips and falls", "living-with-osteoporosis-and-broken-bones/moving-and-lifting-safely/avoiding-trips-slips-and-falls/");
const ROS_TREATMENT = ros("Finding the right treatment", "treatments-and-medicines/finding-the-right-osteoporosis-treatment/");
const ROS_LONG_PAIN = ros("Managing long-term pain", "living-with-osteoporosis-and-broken-bones/managing-pain/managing-long-term-pain/");

const CSP_FALLS_FRACTURES = csp("Falls and fragility fractures", "conditions/falls-fractures");
const CSP_STAY_ACTIVE = csp("Helping older people stay active at home", "public-patient/keeping-active-and-healthy/staying-healthy-you-age/staying-strong-you-age/strength");

const NICE_CG124: LearnSource = { label: "NICE: Hip fracture: management (CG124), recommendations", url: "https://www.nice.org.uk/guidance/cg124/chapter/Recommendations" };

export const hipFractureAnswers: LearnArticle[] = [
  {
    id: "hipfx-what-it-is",
    kicker: "Understanding",
    question: "What is a hip fracture?",
    hook: "A break at the top of the thigh bone, close to the hip joint. Usually after a fall, and always a reason to call for help.",
    short: "A hip fracture is a crack or break in the top of the thigh bone, close to the hip joint, and it is normally the result of a fall. It is serious, needs treatment in hospital straight away and almost always needs surgery. Recovery can take several weeks or months.",
    sections: [
      {
        heading: "A break at the top of the thigh bone",
        paragraphs: [
          "Hip fractures are cracks or breaks in the top of the thigh bone (femur) close to the hip joint, and are normally the result of a fall. A broken hip is serious and needs treatment in hospital straight away.",
          "It is also known as a neck of femur fracture. When the break comes from an impact or fall that would not normally be expected to cause one, it is called a fragility fracture.",
        ],
      },
      {
        heading: "What it feels like",
        paragraphs: [
          "Symptoms of a broken hip include pain in the hip, upper leg and groin, and not being able to stand or put weight on the affected hip and leg. Moving the hip and leg can be difficult.",
          "The affected leg may be at an odd angle or look shorter than the other leg. There can be swelling and bruising around the hip and upper leg.",
        ],
      },
      {
        heading: "Get help straight away",
        paragraphs: [
          "Call 999 or go to A&E if you have severe hip pain after a fall or injury, you cannot walk or put weight on your leg, or you have tingling or loss of feeling in your hip or leg after an injury. Do not drive to A&E: call 999 and ask for an ambulance, and bring any medicines you take.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you have severe hip pain that started suddenly without a fall or injury, or your hip is swollen and feels hot. The same applies if the skin around your hip has changed colour, or you have hip pain, feel generally unwell and have a high temperature.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "A hip fracture is a serious injury and almost always needs treatment with surgery. It can take several weeks or months to recover, and you may not get back the same strength and movement you had before.",
          "After a fracture, mobility and independence may be affected. Once you have broken your hip, your risk of another broken bone and of further falls is increased, and your healthcare professional will discuss how to improve your bone health and help prevent further falls.",
        ],
      },
      {
        heading: "It can heal as normal",
        paragraphs: [
          "Osteoporosis does not affect the healing process of bone, so a broken hip should heal as normal. If your general health is poor when you break your hip, it may take longer to recover after surgery and return to living independently.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E for severe hip pain after a fall, or if you cannot walk or put weight on your leg.",
      "Do not drive to A&E: call 999 and ask for an ambulance.",
      "Bring any medicines you take with you.",
      "If you are over 50 and have broken your hip, ask your GP surgery if there is a fracture liaison service in your area.",
      "If you have broken a bone after a simple slip or trip, speak to your GP or another health professional about your bone health.",
    ],
    tryThisWeek: [
      "Know when to call 999.",
      "Bring your medicines to hospital.",
      "Ask about a fracture liaison service.",
    ],
    ask: "What kind of hip fracture do I have, and what does that mean for my operation and recovery?",
    interactive: {
      kind: "signs",
      title: "Signs of a broken hip",
      intro: "Tick any you notice after a fall. Any of them means urgent medical help.",
      signs: ["Pain in the hip, upper leg or groin", "Cannot stand or put weight on the leg", "Difficulty moving the hip and leg", "Leg at an odd angle or looks shorter", "Swelling and bruising around the hip", "Tingling or loss of feeling in the leg"],
      after: "You will need urgent medical help for a broken hip or hip pain after a fall. Call 999 or go to A&E, and do not drive yourself: call 999 and ask for an ambulance.",
      copyHeading: "What I noticed after the fall",
    },
    sources: [NHS_BROKEN_HIP, NHSI_FRAGILITY, NHSI_BONE_FALLS, ROS_BROKEN_BONES, NHSI_WHY_FALLS],
    quiz: {
      question: "How should someone with a suspected broken hip get to hospital?",
      options: [{ text: "Call 999 and ask for an ambulance", right: true }, { text: "Drive themselves to A&E" }, { text: "Wait at home to see if it settles" }],
      why: "Do not drive to A&E: call 999 and ask for an ambulance, and bring any medicines you take.",
    },
  },
  {
    id: "hipfx-why",
    kicker: "Causes",
    question: "Why do hips break, and how do falls and weaker bones play a part?",
    hook: "Most hip fractures come from a fall no higher than standing. Weaker bones are why such a small fall can break one.",
    short: "Most hip fractures are caused by a fall from standing height or less. People whose bones are weaker, for example from osteoporosis, are more likely to break a bone in a fall. Many things that cause falls, and some that weaken bones, can be checked and treated.",
    sections: [
      {
        heading: "Usually a fall",
        paragraphs: [
          "Fragility fractures of the hip are most commonly caused by a fall from standing height or less. A broken hip usually happens because of a fall or injury, and it is more common in older people and people who have osteoporosis.",
          "Fragility fractures happen when you fall over doing normal activities, such as making the bed. If you break a bone when you fall from a height of about six feet or less, it may be a sign that your bones are weak.",
        ],
      },
      {
        heading: "Weaker bones",
        paragraphs: [
          "People with conditions that weaken the bones, like osteoporosis, have an increased likelihood of a fall causing a fracture. Having osteoporosis does not automatically mean your bones will break, but it does mean a higher chance of breaking a bone if you have a bump or fall.",
          "After the age of 35, bone loss slowly increases, making bones weaker. Bone loss is faster in women for several years after the menopause, so older people, especially women, are more at risk.",
        ],
      },
      {
        heading: "Other risks for bones",
        paragraphs: [
          "If one of your parents broke a hip, you may be more likely to develop osteoporosis and fragile bones. Other risk factors include smoking, drinking more than three units of alcohol a day and not being active.",
          "There are usually no warnings that you have developed osteoporosis. It is often only diagnosed when a bone breaks after even a minor fall.",
        ],
      },
      {
        heading: "Why falls happen",
        paragraphs: [
          "Falls are not an inevitable part of getting older, but they can become more common and harder to recover from. Most falls among older people are caused by several risk factors together, with weak muscles, poor balance and walking difficulties commonly playing a part.",
          "Other causes include low blood pressure, side effects of some medicines, problems with eyesight or hearing, and dementia. New and often temporary conditions, such as an infection, dehydration, constipation or sudden confusion, can also cause falls.",
        ],
      },
      {
        heading: "A fall is worth telling someone about",
        paragraphs: [
          "If you have had a fall, talk to your GP practice or another health professional, such as a physiotherapist or occupational therapist, even if you are not hurt. Many underlying causes of falls can be treated or corrected.",
        ],
      },
    ],
    helps: [
      "See a GP if you have had a fall, or you are worried about your balance or mobility.",
      "If you have had a fragility fracture, discuss bone health with your doctor.",
      "Speak to a GP or pharmacist if you think your medicines could be affecting your balance.",
      "Have regular eye tests, and get your ears and hearing checked, as ear problems can affect your balance.",
      "Stop smoking, and limit the amount of alcohol you drink.",
    ],
    tryThisWeek: [
      "Tell your GP about any fall.",
      "Ask your doctor about bone health.",
      "Ask if medicines affect your balance.",
    ],
    ask: "What made me fall, and could weak bones have played a part in the break?",
    interactive: {
      kind: "risk-check",
      title: "What raises the chance of a broken hip",
      intro: "Tick any that apply to you. Many of them can be changed or treated.",
      items: [
        { id: "muscles", label: "Weak muscles or poor balance", note: "Activities that improve strength and balance, at least twice a week, can help.", changeable: true },
        { id: "bones", label: "Osteoporosis or weak bones", note: "A higher chance of a break after a bump or fall. Discuss bone health with your doctor.", changeable: true },
        { id: "age", label: "Older age, or after the menopause", note: "Bone loss slowly increases after 35, and is faster in women after the menopause.", changeable: false },
        { id: "parent", label: "A parent broke a hip", note: "You may be more likely to develop osteoporosis and fragile bones.", changeable: false },
        { id: "smoke-drink", label: "Smoking, or over 3 units a day", note: "Both are risk factors for fragile bones. Stop smoking and limit alcohol.", changeable: true },
        { id: "inactive", label: "Not being active", note: "Not being active is a risk factor for fragile bones.", changeable: true },
        { id: "medicines", label: "Medicines that affect balance", note: "Speak to a GP or pharmacist if you think your medicines affect your balance.", changeable: true },
        { id: "senses", label: "Eyesight or hearing problems", note: "Have regular eye tests and get your hearing checked.", changeable: true },
      ],
    },
    sources: [NHSI_FRAGILITY, NHSI_BONE_FALLS, CSP_FALLS_FRACTURES, NHSI_WHY_FALLS, NHS_FALLS, NHS_BROKEN_HIP],
    quiz: {
      question: "What kind of fall most often causes a fragility fracture of the hip?",
      options: [{ text: "A fall from standing height or less", right: true }, { text: "A fall from a ladder or roof" }, { text: "A sports injury" }],
      why: "Fragility fractures of the hip are most commonly caused by a fall from standing height or less.",
    },
  },
  {
    id: "hipfx-operation",
    kicker: "In hospital",
    question: "What happens in the operation and the first days?",
    hook: "Pain relief and an X-ray, surgery within a day or so, then up with a walking frame, usually the very next day.",
    short: "Most people with a broken hip have an operation, usually on the same day or the day after they arrive at hospital. The surgeon either fixes the bone with screws, nails, rods or plates, or replaces part or all of the joint. Getting up and moving, usually the day after, is part of the plan.",
    sections: [
      {
        heading: "Arriving at hospital",
        paragraphs: [
          "A broken hip needs to be treated in hospital straight away. You will usually be given painkillers and have an X-ray to check if your hip is broken and to decide what treatment is best for you.",
          "NICE recommends offering pain relief straight away to people arriving at hospital with a suspected hip fracture, including people with memory or thinking problems. Pain should be checked regularly, and the pain relief should be enough to allow tests, nursing care and rehabilitation.",
        ],
      },
      {
        heading: "The operation",
        paragraphs: [
          "Most people with a fractured hip need an operation under anaesthetic to repair it. Depending on things like your age and the type of break, the surgery may fix the broken bones in place using screws, nails, rods or plates, or replace part or all of the damaged hip joint with an artificial one.",
          "The operation can be carried out under a general anaesthetic, or with an injection into your spine to numb the lower half of your body. NICE recommends offering a choice of spinal or general anaesthesia after discussing the risks and benefits.",
        ],
      },
      {
        heading: "When it happens",
        paragraphs: [
          "You will usually have surgery on the same day or the day after you arrive at hospital. It may be delayed if you have a urine or chest infection, anaemia or heart problems.",
          "A healthcare professional will discuss the different options with you before any operation takes place. In some circumstances a different treatment path may be suggested, for example if an operation may not be suitable because of other health concerns.",
        ],
      },
      {
        heading: "The first days",
        paragraphs: [
          "You should get up and about as soon as possible after your surgery, usually on the day after the operation. A physiotherapist will usually support you to get out of bed and use a walking frame, which also helps reduce your chances of problems like a chest infection or blood clots.",
          "To help with pain after the operation, you will have either regular pain-relieving injections or an analgesia pump, which you control yourself to give safe amounts of medicine into a vein. Most people need extra nutrition to help their bodies recover, and you may be offered nutritional drinks.",
        ],
      },
      {
        heading: "Watching for blood clots",
        paragraphs: [
          "If you go into hospital, your healthcare team should check if there is a higher chance you will get a blood clot in a vein (DVT), and may give you medicine or compression stockings to prevent one. Sometimes this continues after you leave hospital, because a blood clot can happen weeks after surgery.",
          "Call 999 or go to A&E if you have pain and swelling in your leg and you feel short of breath or have chest pain. Blood clots can travel to the lungs, which needs treatment straight away.",
        ],
      },
    ],
    helps: [
      "You can be offered a choice of spinal or general anaesthesia: ask about the risks and benefits.",
      "Get up and about as soon as possible after surgery, with support from a physiotherapist.",
      "Extra nutrition, such as nutritional drinks, can help your body recover from the injury and operation.",
      "Stay active and walk around if you can while in hospital, to help reduce your risk of DVT.",
      "Bring any medicines you take with you to hospital.",
    ],
    tryThisWeek: [
      "Ask about your anaesthetic choices.",
      "Get up with the physiotherapist's help.",
      "Walk around when you can.",
    ],
    ask: "Which operation will I have, and what does it mean for putting weight on my leg?",
    interactive: {
      kind: "timeline",
      title: "From the fall to the first days",
      steps: [
        { id: "arrive", when: "On arrival", title: "Pain relief and an X-ray", points: ["Painkillers straight away.", "An X-ray checks the break and guides treatment."] },
        { id: "surgery", when: "Same day or next", title: "The operation", points: ["Bones fixed in place, or the joint partly or fully replaced.", "A spinal or general anaesthetic."] },
        { id: "day-after", when: "The day after", title: "Up with a frame", points: ["A physiotherapist helps you out of bed.", "Moving early helps prevent chest infections and clots."] },
        { id: "days", when: "Following days", title: "Getting more mobile", points: ["Take it steady at first.", "Pain relief, and extra nutrition if needed."] },
        { id: "leave", when: "5 days to 3 weeks", title: "Leaving hospital", points: ["How long depends on your health before the break.", "Some people need rehabilitation first."] },
      ],
    },
    sources: [NHS_BROKEN_HIP, ROS_BROKEN_BONES, NHSI_FRAGILITY, NICE_CG124, NHS_DVT],
    quiz: {
      question: "When do most people have surgery for a broken hip?",
      options: [{ text: "The same day or the day after arriving", right: true }, { text: "After a few weeks of bed rest" }, { text: "Only if the pain does not settle" }],
      why: "You will usually have surgery on the same day or the day after you arrive at hospital.",
    },
  },
  {
    id: "hipfx-recovery-time",
    kicker: "Recovery",
    question: "How long does recovery from a broken hip take?",
    hook: "The bone heals in weeks, but getting back to everyday life can take months. Here is what the weeks usually look like.",
    short: "A broken hip usually takes several weeks or months to heal, and a broken bone usually takes around 6 to 12 weeks. Most people spend around 1 to 4 weeks in hospital. Pain and swelling in the first 6 weeks are normal, and how quickly you recover depends on the break and on how active and healthy you were before.",
    sections: [
      {
        heading: "Weeks to months",
        paragraphs: [
          "A broken hip usually takes several weeks or months to heal, but it can take longer. A broken bone usually takes around 6 to 12 weeks to heal.",
          "How quickly you recover can be affected by how bad the fracture was, whether surgery was needed, how active you were before, any other health conditions you have, and any confusion.",
        ],
      },
      {
        heading: "Time in hospital",
        paragraphs: [
          "You will usually spend around 1 to 4 weeks in hospital. The Royal Osteoporosis Society says the stay can be between five days and three weeks, depending on how fit and healthy you were before breaking your hip.",
          "Some people need extra help with physiotherapy and occupational therapy after their operation, which can make their stay in hospital longer. You may need a period of rehabilitation after your operation before you can go home safely.",
        ],
      },
      {
        heading: "The first six weeks at home",
        paragraphs: [
          "It is normal and expected to feel pain throughout the first 6 weeks or longer. Swelling is also normal after hip surgery, and it can come and go for 6 weeks, sometimes longer.",
          "A sealed dressing covers the wound for the first 2 weeks, after which your practice nurse can check it has healed. Avoid a bath for 6 weeks after your operation: sit at the sink to wash or use a level shower.",
        ],
      },
      {
        heading: "Driving, work and hobbies",
        paragraphs: [
          "NHS inform says you may drive from 6 weeks if you can do an emergency stop and put your full weight on your leg, and to check with your insurer. If you still cannot drive after 3 months, you need to tell the DVLA.",
          "As general guidelines, light or office work may be possible from around 6 weeks, and active or manual work from 12 weeks. Gentle exercise such as cycling, golf or swimming may be possible from around 6 weeks, and higher impact activities such as running from around 12 weeks.",
        ],
      },
      {
        heading: "The longer view",
        paragraphs: [
          "Many people recover well, but this depends on their level of fitness and activity before the injury. You may never get back the same strength and movement as before your break, and you may need to use a walking stick or frame.",
          "Recovery from a hip fracture does not stop once you leave hospital. People who are able to leave hospital and manage safely at home have been shown to recover more quickly.",
        ],
      },
    ],
    helps: [
      "Do the exercises recommended by your physiotherapist regularly, to improve your strength and movement.",
      "Eat a healthy balanced diet with plenty of protein to help the bone heal.",
      "Avoid smoking, which limits the blood supply to your bones.",
      "Contact your practice nurse after 2 weeks to make sure your wound has healed.",
      "If you are not improving after leaving hospital, or it has got worse, talk to your GP practice.",
    ],
    tryThisWeek: [
      "Do your physiotherapy exercises.",
      "Eat plenty of protein.",
      "Book a wound check at 2 weeks.",
    ],
    ask: "What is a realistic goal for me at six weeks and at three months?",
    interactive: {
      kind: "timeline",
      title: "The road back after a broken hip",
      steps: [
        { id: "up", when: "Day after surgery", title: "Up and about", points: ["Usually on the day after the operation.", "A walking frame at first."] },
        { id: "home", when: "1 to 4 weeks", title: "Home from hospital", points: ["Time in hospital varies from person to person.", "Exercises to continue at home."] },
        { id: "wound", when: "2 weeks", title: "Wound check", points: ["A dressing covers the wound for 2 weeks.", "Your practice nurse checks it has healed."] },
        { id: "six", when: "About 6 weeks", title: "Lighter activities", points: ["Pain up to now, or longer, is normal.", "Driving, light work and gentle exercise may be possible."] },
        { id: "twelve", when: "About 12 weeks", title: "Heavier activities", points: ["Active or manual work.", "Higher impact activities such as running."] },
      ],
    },
    sources: [NHS_BROKEN_HIP, ROS_BROKEN_BONES, NHSI_RECOVERY, ROS_EVERYDAY, NHSI_FRAGILITY],
    quiz: {
      question: "How long does a broken bone usually take to heal?",
      options: [{ text: "Around 6 to 12 weeks", right: true }, { text: "About 1 week" }, { text: "More than 2 years" }],
      why: "A broken bone usually takes around 6 to 12 weeks to heal.",
    },
  },
  {
    id: "hipfx-moving",
    kicker: "Recovery",
    question: "How soon can I get up and walk again?",
    hook: "Usually the day after the operation, with a physiotherapist and a walking frame. Every day after that builds on it.",
    short: "You should get up and about as soon as possible after surgery, usually on the day after the operation, with a physiotherapist and a walking frame. Moving early gives you the best chance of recovery and helps prevent chest infections and blood clots. At home, walking builds up a little at a time.",
    sections: [
      {
        heading: "Moving early matters",
        paragraphs: [
          "You should get up and about as soon as possible after your surgery, usually on the day after the operation. This gives you the best chance of recovery, and it helps reduce your chances of problems like a chest infection or blood clots.",
          "NICE recommends a physiotherapy assessment and, unless there is a medical reason not to, getting moving on the day after surgery. After that, people should be helped to move at least once a day, with regular physiotherapy review.",
        ],
      },
      {
        heading: "A frame, then more",
        paragraphs: [
          "A physiotherapist will usually support you to get out of bed and use a walking frame. Take it steady at first: you will gradually become more mobile as the days pass.",
          "Soon after surgery you will start having regular physiotherapy to help you start standing and moving again. You may find it uncomfortable, but it is important to be mobile as soon after the operation as possible.",
        ],
      },
      {
        heading: "Up and dressed",
        paragraphs: [
          "Getting up and dressed, even while in hospital, is vital to your recovery. It helps you keep your strength and maintain a routine.",
          "Some discomfort is expected after a fracture. Listen to your body and gradually increase your activity as your pain allows.",
        ],
      },
      {
        heading: "Walking further",
        paragraphs: [
          "Start practising walking on even surfaces, then progress to longer distances, uneven ground and busier places. Walking outside is an effective way to increase stamina and strength.",
          "Aim to walk confidently for 5 minutes, and gradually increase your time every few days as you feel able. If you have been given a new walking aid and need advice on progressing, you can contact your local musculoskeletal (MSK) service.",
        ],
      },
      {
        heading: "Bed and toilet",
        paragraphs: [
          "To lie down, begin with your back to the bed and your legs close and square to it. It may be easier to bring your operated leg forwards as you reach back for the bed with your arms, to control how you sit down.",
          "To get up from a toilet, it may help to stretch your operated leg out slightly, then push off from the toilet frame, or the toilet itself, using your arms. This keeps the movement safe and controlled.",
        ],
      },
    ],
    helps: [
      "Get up and about as soon as possible after surgery, usually on the day after the operation.",
      "Get up and dressed each day, even while in hospital.",
      "Practise walking on even surfaces first, then build up to longer distances, uneven ground and busier places.",
      "Aim to walk confidently for 5 minutes, then gradually increase the time every few days as you feel able.",
      "Contact your local MSK service if you need advice on progressing with a new walking aid.",
    ],
    tryThisWeek: [
      "Get up and dressed each day.",
      "Walk confidently for 5 minutes.",
      "Add a little time every few days.",
    ],
    ask: "Can I put my full weight on my leg, and when can I move on from the walking frame?",
    interactive: {
      kind: "scenarios",
      title: "Moving again: what helps most",
      scenarios: [
        {
          id: "day-after",
          situation: "It is the day after your operation and the physiotherapist comes to help you up.",
          options: [{ text: "Wait a week until the pain has gone" }, { text: "Get up with their help and a frame", best: true }, { text: "Stay in bed to protect the hip" }],
          why: "You should get up and about as soon as possible, usually on the day after the operation. It also helps reduce the chance of a chest infection or blood clots.",
        },
        {
          id: "further",
          situation: "You are home, and walking indoors on even floors feels steadier.",
          options: [{ text: "Go straight out on a long, busy walk" }, { text: "Build up to longer, uneven walks", best: true }, { text: "Stop there, as indoors is enough" }],
          why: "Start practising walking on even surfaces, then progress to longer distances, uneven ground and busier places.",
        },
        {
          id: "dressed",
          situation: "It is lunchtime on the ward and you are still in your night clothes.",
          options: [{ text: "Get up and dressed if you can", best: true }, { text: "Stay in night clothes until home" }],
          why: "Getting up and dressed, even while in hospital, is vital to your recovery. It helps you keep your strength and maintain a routine.",
        },
      ],
    },
    sources: [ROS_BROKEN_BONES, NICE_CG124, NHSI_RECOVERY, NHS_BROKEN_HIP, NHSI_FRAGILITY],
    quiz: {
      question: "When do people usually get up after surgery for a broken hip?",
      options: [{ text: "On the day after the operation", right: true }, { text: "After two weeks of bed rest" }, { text: "Only once the bone has healed" }],
      why: "You should get up and about as soon as possible after your surgery, usually on the day after the operation.",
    },
  },
  {
    id: "hipfx-exercises",
    kicker: "Exercise",
    question: "Which exercises help at home after a hip fracture?",
    hook: "Five simple moves, a few at a time, many times a day. And a pain score to tell you if you are doing too much.",
    short: "When you leave hospital, you will be given exercises to continue at home, and doing them regularly helps your strength and movement. NHS inform shows five: static quad strengthening, bridging, a supported leg raise, sit to stand and standing hip extension. Start with a few, build up slowly, and keep pain at 5 out of 10 or below.",
    sections: [
      {
        heading: "Exercises to keep up at home",
        paragraphs: [
          "When you leave hospital, you will be given exercises to continue doing at home. It is important to do the exercises recommended by your physiotherapist regularly, as this will help you recover and improve your strength and movement.",
          "Exercise helps to reduce inflammation and pain and to strengthen the muscles supporting the hip. People who have had recent hip surgery should follow the advice of their own healthcare professional.",
        ],
      },
      {
        heading: "Five exercises NHS inform shows",
        paragraphs: [
          "NHS inform's exercises for recovery from a hip fracture are static quad strengthening, bridging, a supported leg raise, sit to stand and standing hip extension. Each one is shown in a short video.",
          "For static quad strengthening, lie down, tighten your thigh muscle and gently push the back of your knee into the bed, then hold for 10 seconds and relax. For the supported leg raise, place a rolled up mat or blanket under your knees, push your knee into the roll and straighten it as much as is comfortable, then hold for 10 seconds.",
        ],
      },
      {
        heading: "Bridging, sit to stand and hip extension",
        paragraphs: [
          "For bridging, lie on your back with your knees pointing towards the ceiling, use your arms for support to slowly push your hips up, hold for a few seconds and slowly bring them down. For standing hip extension, place a chair in front of you for support, keep one leg straight and lift the other leg behind you, hold for a few seconds and return.",
          "For sit to stand, begin standing with a chair behind you, and slowly bend your knees until your bottom just touches the seat, without sitting down completely. Then return to standing.",
        ],
      },
      {
        heading: "Before you start",
        paragraphs: [
          "Make sure you have safe footwear and enough space, and that you understand how to do each exercise. Start with low numbers and gradually add more as it feels manageable.",
          "When starting new exercises, it can help to do 2 to 3 repetitions at a time, in small amounts through the day. As it gets easier, add 1 or 2 repetitions every few days, building up to a maximum of 2 sets of 15.",
        ],
      },
      {
        heading: "How much pain is all right",
        paragraphs: [
          "It can help to rate your pain out of 10. A score of 0 to 3 is minimal pain, 4 to 5 is acceptable pain and 6 to 10 is excessive pain, so aim to keep your pain within 0 to 5.",
          "If it goes above that, do fewer repetitions, move more slowly or rest longer between movements. Your pain should be no worse the morning after you have exercised, and if you start to feel unwell, stop and seek further advice.",
        ],
      },
    ],
    helps: [
      "Do the exercises recommended by your physiotherapist regularly.",
      "Start with low numbers of repetitions and gradually add more as it feels manageable.",
      "Keep your pain within a rating of 0 to 5 out of 10 while exercising.",
      "Stop the exercises if they make your symptoms worse or cause new pain, and talk to a healthcare professional if your hip pain worsens.",
      "If you start to feel unwell, stop and seek further advice.",
      "Check with a chartered physiotherapist or your GP before starting any new fitness regime.",
    ],
    tryThisWeek: [
      "Do your physiotherapy exercises.",
      "Add repetitions gradually.",
      "Keep pain at 5 or below.",
    ],
    ask: "Which of these exercises are right for me now, and how many should I be doing?",
    interactive: {
      kind: "flip-cards",
      title: "Five exercises from NHS inform",
      intro: "Turn each card to see how it is done. Follow your own physiotherapist's advice first.",
      cards: [
        { id: "quad", front: "Static quad strengthening", when: "Lying on your bed", back: "Tighten your thigh and push the back of your knee into the bed. Hold for 10 seconds, then relax." },
        { id: "bridge", front: "Bridging", when: "Lying on your back", back: "Knees to the ceiling, slowly push your hips up using your arms for support. Hold, then lower slowly." },
        { id: "leg-raise", front: "Supported leg raise", when: "Lying, a roll under your knees", back: "Push your knee into the roll and straighten it as much as is comfortable. Hold for 10 seconds." },
        { id: "sit-stand", front: "Sit to stand", when: "Standing, a chair behind you", back: "Bend your knees until your bottom just touches the seat, without sitting down fully, then stand." },
        { id: "extension", front: "Standing hip extension", when: "Standing, a chair in front", back: "Keep one leg straight and lift the other behind you. Hold for a few seconds, then return." },
      ],
    },
    sources: [NHSI_EX_FRACTURE, NHSI_EX_HIP, NHSI_EX_KNEE, NHS_BROKEN_HIP, CSP_STAY_ACTIVE],
    quiz: {
      question: "Which pain score is acceptable while doing these exercises?",
      options: [{ text: "Up to 5 out of 10", right: true }, { text: "Up to 10 out of 10" }, { text: "Any pain means stop for good" }],
      why: "A score of 0 to 3 is minimal pain, 4 to 5 is acceptable pain and 6 to 10 is excessive pain, so aim to keep your pain within 0 to 5.",
    },
  },
  {
    id: "hipfx-pain",
    kicker: "Recovery",
    question: "How is pain managed, and how can I sleep better?",
    hook: "Pain for the first six weeks is expected. Keeping up the painkillers, and taking them before activity, helps you keep moving.",
    short: "Pain throughout the first 6 weeks or longer is normal after a hip fracture. Keep taking the pain relief you were prescribed when you leave hospital, and do not cut it down straight away. Raising your leg, taking painkillers before activity, careful use of heat or ice and good sleep habits can all help.",
    sections: [
      {
        heading: "Pain is expected",
        paragraphs: [
          "It is normal and expected to feel pain throughout the first 6 weeks or longer. Breaking a bone can be painful and frustrating, but in most cases the pain does pass.",
          "After your operation you will be given strong painkillers to manage your pain and allow you to start to move. You will be able to reduce these gradually as you recover, and your healthcare professional can help you plan this.",
        ],
      },
      {
        heading: "Pain relief in hospital",
        paragraphs: [
          "NICE recommends offering paracetamol every 6 hours after the operation unless it is not suitable, and adding stronger painkillers called opioids if paracetamol alone is not enough. Anti-inflammatory painkillers (NSAIDs) are not recommended for hip fracture.",
          "Pain relief should be enough to allow the movements needed for nursing care and rehabilitation. Some people have regular pain-relieving injections, or a pump they control themselves to give safe amounts of medicine into a vein.",
        ],
      },
      {
        heading: "Pain relief at home",
        paragraphs: [
          "Continue to take the pain relief prescribed when you leave hospital. Do not reduce your painkillers immediately after discharge: wait until you are more settled and your activity levels are improving.",
          "You can also manage your pain by keeping your leg raised when resting, taking painkillers before activity and resting for short periods regularly. Some pain medicines can make you sleepy or slow your reactions, and if this happens you should not drive.",
        ],
      },
      {
        heading: "Heat or ice",
        paragraphs: [
          "Ice can be helpful earlier in your recovery, particularly if your leg is painful and swollen, and heat may help if your joints or muscles are stiff. Always use a barrier such as a towel, never place ice or heat directly on your skin, and leave a few hours between treatments.",
          "Stop using ice or heat if you notice more redness, discolouration or blistering of the skin. If you have any problems with circulation or feeling in the area, do not use heat or ice.",
        ],
      },
      {
        heading: "Sleep",
        paragraphs: [
          "Trying to get a good night's sleep is part of looking after yourself during recovery. Long-term pain is one of the things that can keep you from sleeping well.",
          "The NHS suggests going to bed only when you are sleepy, getting up at the same time every day, relaxing for at least an hour before bed, and keeping the bedroom dark and quiet. Avoid alcohol, tea or coffee for at least 6 hours before going to bed.",
        ],
      },
    ],
    helps: [
      "Keep taking the pain relief you were prescribed, and do not cut it down straight after leaving hospital.",
      "Take painkillers before activity.",
      "Keep your leg raised when resting, and rest for short periods regularly.",
      "Go to bed only when you are sleepy, and get up at the same time every day.",
      "Contact your GP practice if your pain is still a problem after taking your medicine as prescribed, or it has changed. If the practice is closed, phone 111.",
      "If pain lasts, pace yourself by planning daily tasks, learn relaxation techniques and make a flare-up plan.",
    ],
    tryThisWeek: [
      "Take painkillers before activity.",
      "Raise your leg when resting.",
      "Get up at the same time each day.",
    ],
    ask: "How and when should I cut down my painkillers, and what should I do if the pain changes?",
    interactive: {
      kind: "scenarios",
      title: "Managing pain at home",
      scenarios: [
        {
          id: "cut-down",
          situation: "It is your second day home and the pain feels a little better.",
          options: [{ text: "Stop the painkillers straight away" }, { text: "Keep taking them as prescribed for now", best: true }],
          why: "Do not reduce your painkillers immediately after discharge. Wait until you are more settled and your activity levels are improving.",
        },
        {
          id: "before-walk",
          situation: "You are about to do your exercises and go for a short walk.",
          options: [{ text: "Take your painkillers beforehand", best: true }, { text: "Wait until the pain gets bad" }],
          why: "Taking painkillers before activity is one of the ways to manage your pain.",
        },
        {
          id: "swollen",
          situation: "In the first weeks, your leg is painful and swollen.",
          options: [{ text: "Ice wrapped in a towel", best: true }, { text: "A heat pad straight on the skin" }, { text: "Ice straight on the skin" }],
          why: "Ice can be helpful earlier in your recovery, particularly if your leg is painful and swollen. Always use a barrier such as a towel, never directly on your skin.",
        },
      ],
    },
    sources: [NHSI_RECOVERY, ROS_BROKEN_BONES, NICE_CG124, NHSI_FRAGILITY, NHS_INSOMNIA, ROS_LONG_PAIN, ROS_EVERYDAY],
    quiz: {
      question: "How long is pain normal and expected after a hip fracture?",
      options: [{ text: "The first 6 weeks or longer", right: true }, { text: "Only the first 2 days" }, { text: "Pain means something is wrong" }],
      why: "It is normal and expected to feel pain throughout the first 6 weeks or longer.",
    },
  },
  {
    id: "hipfx-confusion",
    kicker: "In hospital",
    question: "Why can someone become confused after a broken hip?",
    hook: "Sudden confusion in hospital is common after a hip fracture. It has a name, delirium, and family are often first to notice.",
    short: "It is very common for people to become confused after a hip fracture or while in hospital. This is called delirium. It often starts suddenly and can be frightening, but it usually improves when the cause gets better. Tell the hospital staff straight away about any new confusion.",
    sections: [
      {
        heading: "Common after a broken hip",
        paragraphs: [
          "It is very common for people to become confused after a hip fracture or while in hospital, and this is called delirium. It often starts suddenly and can be frightening, but usually improves when the condition causing it gets better.",
          "Delirium is when a person's mental function changes suddenly, often over hours or days. Injuries such as hip fractures, and having surgery, are among the things that can trigger it.",
        ],
      },
      {
        heading: "What it looks like",
        paragraphs: [
          "People with delirium may be confused, or more confused than normal, sleepy and less responsive, or very agitated or restless. They may be awake at night and sleep during the day, become suspicious, or see or hear things that are not real.",
          "These symptoms are sometimes worse in the evenings or overnight. Relatives and carers are often the first to notice the change in the person's normal mental function.",
        ],
      },
      {
        heading: "Who is more likely to get it",
        paragraphs: [
          "Anyone can get delirium, but the risk is higher in people over 65, people with dementia, people who are frail, people with hearing or sight loss, and people who have had delirium before. If you had a problem with your memory before you broke your hip, it may get worse for a while after your operation.",
          "Other triggers include infections such as urine or chest infections, side effects of medicines, dehydration and constipation. NICE asks hospital teams to look for memory and thinking problems when people first arrive with a hip fracture, and to keep checking for delirium during their stay.",
        ],
      },
      {
        heading: "Tell the team",
        paragraphs: [
          "If you are a patient, family member or carer and notice any changes in memory or confusion, discuss this with the hospital staff as soon as possible. Treatment starts by working out the triggers and treating them, such as an infection.",
          "At home, go to A&E or call 999 if someone suddenly becomes confused, because many causes need to be assessed and treated as soon as possible. Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
        ],
      },
      {
        heading: "How family can help",
        paragraphs: [
          "Keep hearing aids, glasses and dentures within reach, have a gentle and friendly approach, and talk in short, simple sentences. Try to make sure someone the person knows well is with them, keep a calendar or clock in view, and bring in familiar things from home, such as photographs.",
          "Most delirium lasts a few days, but in some cases it can last for weeks or even months. Caring for someone else can be stressful, so try to make sure you are sleeping and eating, and create a support network.",
        ],
      },
    ],
    helps: [
      "Tell the hospital staff as soon as possible about any changes in memory or confusion.",
      "Keep hearing aids, glasses and dentures within reach.",
      "Keep a calendar or clock within view, and bring in familiar objects from home.",
      "Talk in short, simple sentences, and keep reassuring the person.",
      "If it is safe, help the person to eat and drink, and check with care staff if you have any doubts.",
      "Go to A&E or call 999 if someone suddenly becomes confused at home.",
    ],
    tryThisWeek: [
      "Tell staff about any new confusion.",
      "Keep glasses and hearing aids close.",
      "Put a clock or calendar in view.",
    ],
    ask: "Is this confusion delirium, what might be causing it, and how can the family help?",
    interactive: {
      kind: "signs",
      title: "Signs of delirium to tell the team",
      intro: "Tick anything new you have noticed in yourself or your relative.",
      signs: ["Confused, or more confused than usual", "Sleepy and less responsive", "Very agitated or restless", "Awake at night, asleep by day", "Suspicious or losing trust", "Seeing or hearing things not there", "Worse in the evening or overnight"],
      after: "Tell the hospital staff as soon as possible. At home, sudden confusion needs medical help straight away: go to A&E or call 999.",
      copyHeading: "Changes to tell the team",
    },
    sources: [NHSI_FRAGILITY, NHSI_DELIRIUM, NHS_CONFUSION, NICE_CG124],
    quiz: {
      question: "Who is often the first to notice the signs of delirium?",
      options: [{ text: "Relatives and carers", right: true }, { text: "The person themselves" }, { text: "Nobody, as it has no signs" }],
      why: "Relatives and carers are often the first to notice the change in the person's normal mental function.",
    },
  },
  {
    id: "hipfx-home",
    kicker: "Going home",
    question: "Going home: what equipment and help is there?",
    hook: "Free short-term care, dressing aids, grab rails and an assessment of what you need. Most people go home.",
    short: "Hospital staff plan with you when and where you go after hospital, and most people go home. You may be offered free short-term care, called intermediate care, usually for up to 6 weeks. Dressing aids and other equipment, a free needs assessment and a carer's assessment for family can all help.",
    sections: [
      {
        heading: "Planning to leave hospital",
        paragraphs: [
          "Hospital staff will plan with you when you will be ready to leave, whether you will go home or somewhere else such as a community hospital, and any further support you might need. Most people go home, and your family and carers can be involved in these discussions if you want.",
          "Before you go, staff should make sure you have any medicine or new equipment you need and know how to use it, and that you know the next steps in your care. You should also have the chance to discuss any concerns about going home.",
        ],
      },
      {
        heading: "Short-term help to recover",
        paragraphs: [
          "You may be offered free, short-term care to help you recover and regain your independence. This is called intermediate care, also known as rehabilitation, reablement and recovery services, and it usually lasts for a maximum of 6 weeks.",
          "A team that might include a physiotherapist, an occupational therapist, nurses and care workers will agree goals with you. Help might include exercises, practising getting dressed, preparing a meal, and getting up and down stairs.",
        ],
      },
      {
        heading: "Equipment that can help",
        paragraphs: [
          "Dressing aids such as a long-handled shoehorn, a helping hand and a sock aid can make getting dressed easier. Slip-on shoes or trainers save bending to tie laces, and elasticated laces are another way to make this easier.",
          "Other equipment includes a raised toilet seat, a rail to help you get out of the bath or shower, a grab rail for the bed and straps to help lift your leg. Equipment and small changes to your home are provided free if you are assessed as needing them.",
        ],
      },
      {
        heading: "Needs assessments and home changes",
        paragraphs: [
          "If you need help to cope day to day, the first step is a needs assessment from your local council. It is free and anyone can ask for one.",
          "An occupational therapist can visit to assess your home and recommend changes, such as grab rails or a banister on the stairs. Your council should pay for each adaptation that costs less than £1,000.",
        ],
      },
      {
        heading: "Family and carers",
        paragraphs: [
          "If someone cares for you regularly, they can have a free carer's assessment to see what might make their life easier, such as a break from caring or help with housework. It is separate from your own needs assessment, but the two can be done at the same time.",
          "Having a friend or relative with you at an assessment can help if you are not confident explaining your situation. Tell the assessor everything you find difficult, even small things.",
        ],
      },
    ],
    helps: [
      "Discuss any concerns you have about going home with hospital staff before you leave.",
      "Ask whether intermediate care could help you recover at home.",
      "Ask your local council for a free needs assessment.",
      "Use dressing aids such as a sock aid or long-handled shoehorn, and wear slip-on shoes.",
      "If you were not given equipment and dressing is harder than expected, ask your GP about seeing an occupational therapist.",
      "If someone cares for you, they can ask for a free carer's assessment.",
    ],
    tryThisWeek: [
      "Ask about intermediate care.",
      "Try a sock aid or slip-on shoes.",
      "Ask the council for an assessment.",
    ],
    ask: "What help and equipment will I have at home, and who do I call if I am struggling?",
    interactive: {
      kind: "flip-cards",
      title: "Help after leaving hospital",
      intro: "Turn each card to see what it is and who it is for.",
      cards: [
        { id: "intermediate", front: "Intermediate care", when: "After leaving hospital", back: "Free short-term care, usually for up to 6 weeks, to help you recover and regain independence." },
        { id: "needs", front: "Needs assessment", when: "If you need help day to day", back: "Free from your council. It looks at everyday tasks like washing, dressing and cooking." },
        { id: "home", front: "Home assessment", when: "If moving around home is hard", back: "An occupational therapist recommends changes, such as grab rails." },
        { id: "carer", front: "Carer's assessment", when: "For a regular unpaid carer", back: "Free. It looks at what might help, such as a break from caring." },
        { id: "aids", front: "Dressing aids", when: "If bending is difficult", back: "A sock aid, helping hand or long-handled shoehorn makes dressing easier." },
      ],
    },
    sources: [NHS_LEAVE_HOSPITAL, NHS_INTERMEDIATE_CARE, NHSI_RECOVERY, NHS_NEEDS_ASSESSMENT, NHS_ADAPTATIONS, NHS_GADGETS, NHS_CARER_ASSESSMENT],
    quiz: {
      question: "What is the usual maximum length of free intermediate care?",
      options: [{ text: "6 weeks", right: true }, { text: "6 months" }, { text: "1 year" }],
      why: "This is called intermediate care, also known as rehabilitation, reablement and recovery services, and it usually lasts for a maximum of 6 weeks.",
    },
  },
  {
    id: "hipfx-next-fall",
    kicker: "Living well",
    question: "How can I prevent the next fall?",
    hook: "After one broken hip the chance of another fall goes up. Strength, a safer home and a plan for help bring it back down.",
    short: "Once you have broken your hip, your risk of further falls and broken bones is increased. Strength and balance activities at least twice a week, a safer home, good shoes, a medicines review and a way to call for help all reduce the risk or the harm. Falls services can help, and you may be able to refer yourself.",
    sections: [
      {
        heading: "A higher risk after a fracture",
        paragraphs: [
          "Once you have broken your hip, your risk of another broken bone and further falls is increased. Your healthcare professional will discuss how to improve your bone health and help prevent further falls.",
          "If you have had a fall, you may be able to refer yourself to services that can help, or a GP may refer you to a specialist falls service. This can include checks for muscle weakness, weak bones or eyesight problems, strength and balance training, making your home safer and a review of your medicines.",
        ],
      },
      {
        heading: "Strength and balance",
        paragraphs: [
          "Stay active: guidelines for older adults recommend being active every day, and doing activities that improve strength and balance at least twice a week. If you have fallen or are worried about falling, these exercises will help make you stronger and more confident on your feet.",
          "The Chartered Society of Physiotherapy says well-designed programmes of strength, balance and functional exercises reduce falls, and suggests joining a physio-led strength and balance class if possible. If you have had a fall or a fracture, check with your GP or a physio about what types of exercise would be suitable.",
        ],
      },
      {
        heading: "A safer home",
        paragraphs: [
          "Do not have things you could trip on, such as clutter, loose wires or rugs, and make sure the landing and stairs are well lit. Fit handrails on the stairs and in the bathroom, and use a non-slip mat in the bath or shower.",
          "Arrange the kitchen so the things you use often are within easy reach, and choose a chair and bed that are the best height for you to get up from safely. Go from room to room and decide what changes you can make yourself and what you need help with.",
        ],
      },
      {
        heading: "Shoes, eyes and medicines",
        paragraphs: [
          "Wear shoes or slippers that fit well, do not slip off and have a good grip, and avoid long, trailing clothes. Have regular eye tests, and get your ears and hearing checked, as ear problems can affect your balance.",
          "Some medicines can cause unsteadiness, so if you take a number of tablets, ask your doctor or pharmacist to review them. Do not stop taking any medicine without speaking to your GP.",
        ],
      },
      {
        heading: "A plan in case you fall",
        paragraphs: [
          "Wear a personal alarm, or carry a mobile phone with you, kept charged and switched on. A family member or neighbour with a spare key, or a police-approved key safe, lets people get to you quickly.",
          "Call 999 if you or someone else has fallen and may have injured the head, back, neck or hip, or cannot get up. If you are hurt, call for help rather than trying to get up, and keep warm and keep moving gently while you wait.",
        ],
      },
    ],
    helps: [
      "Do activities that improve strength and balance at least twice a week.",
      "Remove trip hazards like clutter, trailing wires and loose rugs.",
      "Wear shoes or slippers that fit well and have a good grip.",
      "If you take a number of tablets, ask your doctor or pharmacist to review them.",
      "Wear a personal alarm, or carry a mobile phone with you.",
      "Get up slowly out of chairs and bed, in case you feel dizzy.",
    ],
    tryThisWeek: [
      "Do strength and balance work twice.",
      "Clear one trip hazard.",
      "Keep your phone or alarm on you.",
    ],
    ask: "Can I be referred to a falls service, and is there a strength and balance class near me?",
    interactive: {
      kind: "risk-check",
      title: "Your home and habits check",
      intro: "Tick what applies to you now. Each one comes with what helps.",
      items: [
        { id: "trips", label: "Loose rugs, wires or clutter", note: "Remove them, or put a non-slip mat under a rug on a polished floor.", changeable: true },
        { id: "light", label: "Dim stairs or landing", note: "Make sure the stairs and landing are well lit, ideally with a switch at the top and bottom.", changeable: true },
        { id: "rails", label: "No rails on stairs or in bathroom", note: "Fit handrails on the stairs and in the bathroom.", changeable: true },
        { id: "shoes", label: "Loose or backless slippers", note: "Choose shoes and slippers that fit well, do not slip off and have a good grip.", changeable: true },
        { id: "medicines", label: "Several medicines, or dizziness", note: "Ask your doctor or pharmacist to review them. Do not stop any without your GP.", changeable: true },
        { id: "alarm", label: "No alarm or phone on you", note: "Wear a personal alarm, or carry a charged mobile phone.", changeable: true },
        { id: "fallen", label: "A fall in the past year", note: "Tell your GP. You may be offered a falls risk assessment.", changeable: false },
      ],
    },
    sources: [NHS_FALLS, NHSI_HOME_CHECK, ROS_FALLS, CSP_FALLS_FRACTURES, NHSI_WHAT_TO_DO, NHSI_FRAGILITY, NHSI_ANXIETY, NHS_OLDER_ACTIVITY],
    quiz: {
      question: "How often do the guidelines suggest strength and balance activities for older adults?",
      options: [{ text: "At least twice a week", right: true }, { text: "Once a month" }, { text: "Only after a fall" }],
      why: "Stay active: guidelines for older adults recommend being active every day, and doing activities that improve strength and balance at least twice a week.",
    },
  },
  {
    id: "hipfx-bones",
    kicker: "Treatment",
    question: "What bone treatment might I need after a hip fracture?",
    hook: "The break was the warning. Bone medicines, calcium and vitamin D, and a fracture liaison service help stop it happening again.",
    short: "After a broken hip, your risk of another broken bone is higher, and your healthcare team will discuss your bone health. Osteoporosis medicines, most often a bisphosphonate such as alendronic acid, strengthen bones and lower the chance of another break. Enough calcium and vitamin D and regular exercise help too.",
    sections: [
      {
        heading: "Why bones matter now",
        paragraphs: [
          "Once you have broken your hip, your risk of another broken bone is increased, and your healthcare professional will discuss how to improve your bone health. If you are over 50, a fracture liaison service can help you prevent further broken bones and keep your bones healthy, so ask your GP surgery if there is one in your area.",
          "If you have been diagnosed with osteoporosis because you have had a broken bone, you should still receive treatment to try to reduce your risk of further broken bones.",
        ],
      },
      {
        heading: "How bone medicines work",
        paragraphs: [
          "Osteoporosis medicines help strengthen your bones and reduce your risk of breaking a bone. They work by slowing down the cells that break down bone, by stimulating the cells that build new bone, or both.",
          "They do not relieve pain, and you will not feel any different when taking them, but research shows they are working in the background. Alendronate, a bisphosphonate, is usually the first medicine people are offered, but this may be different for you.",
        ],
      },
      {
        heading: "Taking alendronic acid",
        paragraphs: [
          "Alendronic acid is usually taken once a week, first thing in the morning, with tap water, before you have anything to eat or drink and before any other medicines. Stay sitting upright or standing for 30 minutes afterwards, so it does not irritate your food pipe.",
          "Bisphosphonates usually take 6 to 12 months to work, and you may need to take them for 5 years or longer. Look after your teeth and have regular dental check-ups, as a rare side effect is jawbone damage, which your dentist can check for.",
        ],
      },
      {
        heading: "Other options",
        paragraphs: [
          "Bisphosphonates can be given as a tablet, a liquid that you swallow, or an injection. Other medicines include denosumab and romosozumab, which are given by injection, and teriparatide, a daily injection used for a small number of people whose bone density is very low.",
          "Your healthcare professional should review your medicine and bone strength every three to five years. If you have side effects that do not go away, talk to them, as they may be able to change you to another medicine.",
        ],
      },
      {
        heading: "Calcium, vitamin D and exercise",
        paragraphs: [
          "Make sure you are getting enough calcium and vitamin D. All adults should have 10 micrograms of vitamin D a day, and everyone should consider a daily supplement of 10 micrograms during the autumn and winter.",
          "Do regular weight-bearing and muscle-strengthening exercise, stop smoking and limit the alcohol you drink. Weight-bearing exercise, such as walking or dancing, can help to strengthen your bones.",
        ],
      },
    ],
    helps: [
      "Ask your GP surgery if there is a fracture liaison service in your area.",
      "Read the instructions that come with your bone medicine and follow them carefully, to lower the chance of side effects.",
      "Take alendronic acid with tap water on an empty stomach, and stay upright for 30 minutes afterwards.",
      "Have regular dental check-ups while taking alendronic acid.",
      "Eat a healthy balanced diet rich in calcium, and spend time outside to build up your vitamin D.",
      "Talk to a healthcare professional if you have side effects that do not go away.",
    ],
    tryThisWeek: [
      "Ask about a fracture liaison service.",
      "Stay upright 30 minutes after alendronate.",
      "Book a dental check-up.",
    ],
    ask: "Will I be offered a bone medicine, and will I be seen by a fracture liaison service?",
    interactive: {
      kind: "flip-cards",
      title: "Bone treatments at a glance",
      intro: "Turn each card to see what it is and how it is taken.",
      cards: [
        { id: "alendronic", front: "Alendronic acid", when: "Usually the first offered", back: "A bisphosphonate, usually once a week, with tap water on an empty stomach. Stay upright for 30 minutes." },
        { id: "denosumab", front: "Denosumab", when: "If bisphosphonates do not suit", back: "A biological medicine given by injection. Plan ahead with your doctor before stopping it." },
        { id: "teriparatide", front: "Teriparatide", when: "Very low bone density", back: "A daily injection that helps build new bone, when other treatments are not working." },
        { id: "calcium-d", front: "Calcium and vitamin D", when: "Alongside treatment", back: "Calcium gives bones strength and vitamin D helps you absorb it. Take at a different time to a bisphosphonate." },
      ],
    },
    sources: [NHS_BROKEN_HIP, NHS_OSTEO_TREATMENT, ROS_TREATMENT, NHS_ALENDRONIC_ABOUT, NHS_ALENDRONIC_HOW, NHSI_BONE_FALLS, CSP_FALLS_FRACTURES, NHSI_FRAGILITY],
    quiz: {
      question: "How long should you stay upright after taking alendronic acid?",
      options: [{ text: "30 minutes", right: true }, { text: "5 minutes" }, { text: "There is no need to stay upright" }],
      why: "Stay sitting upright or standing for 30 minutes afterwards, so it does not irritate your food pipe.",
    },
  },
  {
    id: "hipfx-confidence",
    kicker: "Living well",
    question: "How do I get my confidence back after a broken hip?",
    hook: "Fear of falling again is common and understandable. Small goals, talking about it and staying active help it fade.",
    short: "After a hip fracture, many people lose confidence or feel anxious, and some feel low. Fear of falling is a common reaction, not a weakness. Small achievable goals, a steady routine, talking to family or friends and relaxation can all help, and there is more help if the worry does not ease.",
    sections: [
      {
        heading: "Feelings after a fracture",
        paragraphs: [
          "After a hip fracture, mobility and independence may be affected, sometimes bringing sudden life changes. There is potential for loss of confidence, anxiety, depression and reduced quality of life.",
          "It is normal to feel some anxiety on leaving hospital. After a broken bone, you may be scared of falling or breaking another bone, and some activities may also be harder than before.",
        ],
      },
      {
        heading: "Fear of falling",
        paragraphs: [
          "A fall can leave you feeling shaken up and more cautious, and you might stop doing things and lose confidence in your abilities. This is a common reaction and very understandable, and anxiety is not a sign of weakness or something to be ashamed about.",
          "The more worried about falling you become, the less likely you are to keep active, and you can lose a lot of confidence by avoiding walking. Dealing with anxiety can help to improve your mobility, confidence and quality of life.",
        ],
      },
      {
        heading: "Small steps",
        paragraphs: [
          "Returning to your normal routine and activities as soon as possible will boost your confidence and reduce tiredness. Prioritise what is essential, plan a routine, pace yourself with breaks, and organise help if you need it.",
          "Set yourself small, achievable targets, such as walking a short distance first, even a few steps in the safety of your own home, and build on them. Reward yourself and remind yourself how well you have done.",
        ],
      },
      {
        heading: "Talking and calming",
        paragraphs: [
          "Talking to someone about your worries can help to make problems seem more manageable, so talk to friends or family, or contact support services. Learning to challenge negative thoughts with more balanced ones can reduce worries, and it just takes practice.",
          "If you feel anxious or panicky when you begin walking, take some regular breaths and tell yourself that these feelings will go away. Relaxation techniques can calm your mind and reduce the muscle tension anxiety can cause.",
        ],
      },
      {
        heading: "When to ask for more help",
        paragraphs: [
          "Ask for more help if you have tried these suggestions and still feel anxious, if it has gone on for some time without getting better, or if it is stopping you from doing things you want to do. If you have lost interest in things you once enjoyed or feel low all the time, it could be a sign of depression.",
          "Family can get support too. If someone cares for you regularly, they can have a free carer's assessment to see what might make their own life easier.",
        ],
      },
    ],
    helps: [
      "Talk to friends or family, or contact support services, about how you feel.",
      "Set small, achievable goals and build on them.",
      "Plan a routine, pace yourself with breaks, and organise help if you need it.",
      "Challenge negative thoughts with more balanced ones.",
      "Practise relaxation techniques.",
      "Ask for more help if your anxiety is not getting better or stops you doing things.",
    ],
    tryThisWeek: [
      "Talk to someone about how you feel.",
      "Set one small, achievable goal.",
      "Practise a relaxation technique.",
    ],
    ask: "Who can help me with my fear of falling, and is there support for my family too?",
    interactive: {
      kind: "scenarios",
      title: "Rebuilding confidence",
      scenarios: [
        {
          id: "outside",
          situation: "You have not been outside since coming home, because you are scared of falling.",
          options: [{ text: "Stay in until the fear goes away" }, { text: "Set a small goal, like a short walk", best: true }],
          why: "Set yourself small, achievable targets, such as walking a short distance first, and build on them. Avoiding walking can cost a lot of confidence.",
        },
        {
          id: "panicky",
          situation: "As you start to walk, your heart races and you breathe faster.",
          options: [{ text: "Take regular breaths until it passes", best: true }, { text: "Give up walking for good" }],
          why: "If you feel anxious or panicky when you begin walking, take some regular breaths and tell yourself that these feelings will go away.",
        },
        {
          id: "low",
          situation: "Weeks on, you feel low all the time and have lost interest in things.",
          options: [{ text: "Keep it to yourself" }, { text: "Talk to someone and ask for more help", best: true }],
          why: "If you have lost interest in things you once enjoyed or feel low all the time, it could be a sign of depression, and it is time to ask for more help.",
        },
      ],
    },
    sources: [NHSI_FRAGILITY, NHSI_RECOVERY, NHSI_FEAR, NHSI_ANXIETY, ROS_EVERYDAY, NHS_CARER_ASSESSMENT],
    quiz: {
      question: "What helps rebuild confidence after a fall?",
      options: [{ text: "Small, achievable goals you build on", right: true }, { text: "Avoiding walking until you feel sure" }, { text: "Keeping your worries to yourself" }],
      why: "Set yourself small, achievable targets, such as walking a short distance first, even a few steps in the safety of your own home, and build on them.",
    },
  },
];
