import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Broken wrist page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (nhs.uk and NHS inform,
// the NHS 24 health site for Scotland), the Royal Osteoporosis Society, the Chartered Society of Physiotherapy and
// NICE's guideline on non-complex fractures (NG38). Urgent advice is worded as the NHS words it: A&E or 999 for a
// numb or tingling hand, a bone through the skin or a wrist at an odd angle, and for sudden, severe pain; NHS 111
// for worsening pain, swelling, fever or a cast problem. Exercises are described only as NHS inform describes
// them, with its advice to start once your healthcare professional advises and to follow their advice after
// surgery. General information only; it never replaces what a person's own fracture clinic, physiotherapist,
// nurse or GP tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const nhsi = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/${path}` });
const ros = (label: string, path: string): LearnSource => ({ label: `Royal Osteoporosis Society: ${label}`, url: `https://theros.org.uk/information-and-support/${path}` });

const NHS_ARM_WRIST = nhs("Broken arm or wrist", "conditions/broken-arm-or-wrist/");
const NHS_FALLS = nhs("Falls", "conditions/falls/");
const NHS_OSTEO = nhs("Osteoporosis", "conditions/osteoporosis/");
const NHS_OSTEO_CAUSES = nhs("Osteoporosis: causes", "conditions/osteoporosis/causes/");
const NHS_OSTEO_TREATMENT = nhs("Osteoporosis: treatment", "conditions/osteoporosis/treatment/");
const NHS_OSTEO_LIVING = nhs("Osteoporosis: living with", "conditions/osteoporosis/living-with/");
const NHS_COMPARTMENT = nhs("Compartment syndrome", "conditions/compartment-syndrome/");
const NHS_CRPS = nhs("Complex regional pain syndrome", "conditions/complex-regional-pain-syndrome/");
const NHS_CRPS_SYMPTOMS = nhs("Complex regional pain syndrome: symptoms", "conditions/complex-regional-pain-syndrome/symptoms/");
const NHS_OLDER_ACTIVITY = nhs("Physical activity guidelines for older adults", "live-well/exercise/physical-activity-guidelines-older-adults/");
const NHS_GADGETS = nhs("Household gadgets and equipment to make life easier", "social-care-and-support/care-services-equipment-and-care-homes/household-gadgets-and-equipment-to-make-life-easier/");

const NHSI_WRIST = nhsi("Wrist fracture", "illnesses-and-conditions/muscle-bone-and-joints/arm-shoulder-and-hand-problems-and-conditions/wrist-fracture/");
const NHSI_CAST = nhsi("Having a cast fitted or removed", "illnesses-and-conditions/muscle-bone-and-joints/arm-shoulder-and-hand-problems-and-conditions/having-a-cast-fitted-or-removed/");
const NHSI_EX_WRIST = nhsi("Exercises for wrist, hand and finger problems", "illnesses-and-conditions/muscle-bone-and-joints/arm-shoulder-and-hand-problems-and-conditions/exercises-for-wrist-hand-and-finger-problems/");
const NHSI_BONE_FALLS = nhsi("Bone health and falls", "healthy-living/preventing-falls/keeping-well/bone-health-and-falls/");
const NHSI_WHY_FALLS = nhsi("Why falls matter", "healthy-living/preventing-falls/why-falls-matter/");
const NHSI_HOME_CHECK = nhsi("Prevent falls by doing a home safety check", "healthy-living/preventing-falls/home-safety/prevent-falls-by-doing-a-home-safety-check/");

const ROS_BROKEN_BONES = ros("Broken hips, wrists and other bones", "living-with-osteoporosis-and-broken-bones/broken-hips-wrists-and-other-bones/");
const ROS_EVERYDAY = ros("Getting back to everyday activities", "living-with-osteoporosis-and-broken-bones/moving-and-lifting-safely/getting-back-to-everyday-activities-after-a-broken-bone/");
const ROS_FALLS = ros("Avoiding trips, slips and falls", "living-with-osteoporosis-and-broken-bones/moving-and-lifting-safely/avoiding-trips-slips-and-falls/");
// The fact sheet linked from the Society's broken bones pages; it is served from the Society's own media store.
const ROS_DAILY_LIVING: LearnSource = { label: "Royal Osteoporosis Society: Daily living after fractures (fact sheet)", url: "https://royal-osteoporosis-society.uksouth01.umbraco.io/media/zpih43cz/daily-living-2023.pdf" };

const CSP_FALLS_FRACTURES: LearnSource = { label: "Chartered Society of Physiotherapy: Falls and fragility fractures", url: "https://www.csp.org.uk/conditions/falls-fractures" };
const NICE_NG38: LearnSource = { label: "NICE: Fractures (non-complex): assessment and management (NG38), recommendations", url: "https://www.nice.org.uk/guidance/ng38/chapter/Recommendations" };

export const wristFractureAnswers: LearnArticle[] = [
  {
    id: "wfx-what-it-is",
    kicker: "Understanding",
    question: "What is a broken wrist?",
    hook: "A fracture, a break or a crack: they all mean the same thing. Most broken wrists heal well, mostly within 6 to 12 weeks.",
    short: "A wrist fracture may be called a fracture, a break or a crack, and these all mean the same thing. It is common for one to happen in a fall, and the soft tissues around the bone are injured too. Most of the healing happens between 6 and 12 weeks.",
    sections: [
      {
        heading: "Fracture, break or crack",
        paragraphs: [
          "A wrist fracture may be referred to as a fracture, break or crack. These terms all mean the same thing.",
          "When you have a fracture, it is not just the bone that is affected. You will also have injured some of the soft tissues around it, such as the muscles, ligaments, tendons and nerves.",
        ],
      },
      {
        heading: "The bones involved",
        paragraphs: [
          "The type of wrist break covered in NICE's guideline on fractures is the distal radius fracture. NICE names the radius, the ulna and the humerus as the long bones of the arm.",
          "It can be hard to tell if a wrist is broken, dislocated or badly sprained. You will probably need an X-ray.",
        ],
      },
      {
        heading: "How it happens",
        paragraphs: [
          "It can be common for a wrist fracture to happen if you fall. It is important to know why you had a fall, and to learn how to improve your strength and balance to help prevent falls in the future.",
          "A broken wrist is one of the most common injuries in people with osteoporosis, a condition that weakens bones and makes them more likely to break. Osteoporosis is often only diagnosed when a fall or sudden impact causes a bone to break.",
        ],
      },
      {
        heading: "Healing",
        paragraphs: [
          "After a wrist fracture, most of the healing happens between 6 and 12 weeks. It is normal to have aches and discomfort beyond this, often when you try activities you have not done for a while.",
          "Osteoporosis does not affect the healing process of bone, so a broken wrist should heal as normal. It is unlikely to cause any long-term complications.",
        ],
      },
      {
        heading: "What can slow healing",
        paragraphs: [
          "Smoking affects all your tissues and slows fracture healing, and in some people it can stop healing altogether. Some medical conditions, like diabetes, may slow down the healing process.",
          "Some medicines can slow down fracture healing, and anti-inflammatory medicines like ibuprofen or naproxen have been shown to delay healing. If you have concerns about your medicines, talk to a healthcare professional.",
        ],
      },
    ],
    helps: [
      "Stop smoking as your fracture heals, to help ensure the best recovery.",
      "Eat a healthy diet and keep yourself active to help your recovery.",
      "If you have concerns about your medicines, talk to a healthcare professional.",
      "If you are over 50 and have broken your arm or wrist, ask your GP surgery if there is a fracture liaison service in your area.",
    ],
    tryThisWeek: [
      "Stop smoking while it heals.",
      "Eat well and keep active.",
      "Ask about a fracture liaison service.",
    ],
    ask: "What kind of wrist break do I have, and how long should it take to heal?",
    interactive: {
      kind: "flip-cards",
      title: "Words you may hear",
      intro: "Turn each card to see what the word means.",
      cards: [
        { id: "fracture", front: "Fracture, break or crack", when: "Describing the injury", back: "These terms all mean the same thing." },
        { id: "soft", front: "Soft tissues", when: "Around the broken bone", back: "Muscles, ligaments, tendons and nerves. These are injured too when a bone breaks." },
        { id: "radius", front: "Distal radius fracture", when: "In NICE's fractures guideline", back: "The wrist break NICE's guideline covers. The radius is one of the long bones of the arm." },
        { id: "xray", front: "X-ray", when: "When a break is suspected", back: "Used to see if there is a break and how bad that break is." },
        { id: "fragility", front: "Fragility fracture", when: "After a small fall or bump", back: "A break related to osteoporosis, caused by a minor trauma that would not normally lead to a fracture." },
      ],
    },
    sources: [NHSI_WRIST, NHS_ARM_WRIST, ROS_BROKEN_BONES, NICE_NG38, NHS_OSTEO],
    quiz: {
      question: "When does most of the healing happen after a wrist fracture?",
      options: [{ text: "Between 6 and 12 weeks", right: true }, { text: "In the first few days" }, { text: "After about a year" }],
      why: "After a wrist fracture, most of the healing happens between 6 and 12 weeks.",
    },
  },
  {
    id: "wfx-signs",
    kicker: "Symptoms",
    question: "How do I know if my wrist is broken, and when should I go to A&E?",
    hook: "Pain, swelling and bruising after an injury can mean a break. A few signs mean A&E or 999 straight away.",
    short: "You may have broken your wrist if you have injured it and it suddenly became painful, swollen, bruised or difficult to move. It can be hard to tell a break from a bad sprain, so you will probably need an X-ray. Go to A&E or call 999 if your hand is numb or tingling, a bone is sticking out, or the wrist is at an odd angle.",
    sections: [
      {
        heading: "Signs of a break",
        paragraphs: [
          "You may have broken your arm or wrist if you have injured it and it suddenly became painful, swollen, bruised or difficult to move. It may also change colour, change shape so it looks bent or twisted, or feel numb.",
          "It can be hard to tell if a wrist is broken, dislocated or badly sprained, so you will probably need an X-ray. Any possible breaks need to be treated as soon as possible.",
        ],
      },
      {
        heading: "Go to A&E or call 999",
        paragraphs: [
          "Go to A&E or call 999 if you have injured your arm or wrist and it is numb, tingling or has pins and needles, or you have a bad cut that is bleeding heavily. The same applies if a bone is sticking out of your skin, or your arm or wrist has changed colour or shape or is at an odd angle.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
      {
        heading: "Get help from NHS 111",
        paragraphs: [
          "Get help from NHS 111 if your arm or wrist is very painful, you cannot use it due to the pain, or the pain is getting worse. The same applies if there is a large amount of swelling or bruising, or it is getting worse, or the wrist feels very stiff or is difficult to move.",
          "Also get help from NHS 111 if you have a very high temperature, or feel hot, cold or shivery, as this could be an infection. You can call 111 or get help from 111 online.",
        ],
      },
      {
        heading: "While you wait to see a doctor",
        paragraphs: [
          "Use a towel as a sling to support the arm, and gently hold an ice pack or a bag of frozen peas wrapped in a tea towel to the injured area for up to 20 minutes every 2 to 3 hours. Stop any bleeding by pressing on the wound with a clean pad or dressing if possible.",
          "Take off any rings or watches, because your fingers, wrist or hand could swell up. Do not eat or drink anything in case you need surgery when you get to hospital, and do not try to use the arm or wrist.",
        ],
      },
      {
        heading: "After a fall",
        paragraphs: [
          "Call 999 if you or someone else has fallen and may have injured the head, back, neck or hip, or cannot get up. Get help from NHS 111 if you or someone else has fallen and may be in pain, injured or unwell.",
        ],
      },
    ],
    helps: [
      "Go to A&E or call 999 if the wrist is numb or tingling, a bone is sticking out, or it is at an odd angle.",
      "Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
      "Use a towel as a sling to support the arm.",
      "Hold an ice pack wrapped in a tea towel to the area for up to 20 minutes every 2 to 3 hours.",
      "Take off rings and watches in case your hand swells.",
      "Use painkillers such as paracetamol or ibuprofen gel if a healthcare professional has advised you to.",
    ],
    tryThisWeek: [
      "Know when to go to A&E.",
      "Make a sling from a towel.",
      "Take off rings and watches.",
    ],
    ask: "Is my wrist broken, sprained or dislocated, and do I need an X-ray?",
    interactive: {
      kind: "signs",
      title: "Signs after a wrist injury",
      intro: "Tick anything you notice after the injury.",
      signs: ["Painful, or pain getting worse", "Swollen or bruised", "Very stiff or difficult to move", "Changed colour or shape", "At an odd angle", "Numb, tingling or pins and needles", "A bone sticking out of the skin", "Feeling hot, cold or shivery"],
      after: "Go to A&E or call 999 if the wrist is numb or tingling, a bone is sticking out, or it has changed colour or shape or is at an odd angle. For the other signs, get help from NHS 111.",
      copyHeading: "What I noticed after the injury",
    },
    sources: [NHS_ARM_WRIST, NHS_FALLS],
    quiz: {
      question: "What should you do if your hand is numb or tingling after a wrist injury?",
      options: [{ text: "Go to A&E or call 999", right: true }, { text: "Wait a few days to see" }, { text: "Book a routine GP visit" }],
      why: "Go to A&E or call 999 if you have injured your arm or wrist and it is numb, tingling or has pins and needles, or you have a bad cut that is bleeding heavily.",
    },
  },
  {
    id: "wfx-treatment",
    kicker: "Treatment",
    question: "Will I need a cast, a splint or an operation?",
    hook: "Most broken wrists are treated in a plaster cast. Some need the bones moved back into place first, and a few need an operation.",
    short: "At hospital the arm may be put in a splint, you will be given painkillers and an X-ray shows how bad the break is. In most cases a plaster cast holds the bones while they heal, sometimes after a doctor moves the bones back into place. If the break is very bad, an operation may fix the bones in position.",
    sections: [
      {
        heading: "At the hospital",
        paragraphs: [
          "When you get to hospital the arm may be placed in a splint to support it and stop any broken bones from moving out of position. You will also be given painkillers, and an X-ray is used to see if there is a break and how bad that break is.",
          "NICE recommends checking pain regularly using a pain scale. For adults with a suspected broken arm bone, it recommends paracetamol for mild pain, paracetamol and codeine for moderate pain, and stronger pain relief into a vein for severe pain.",
        ],
      },
      {
        heading: "A cast or a splint",
        paragraphs: [
          "In most cases you will have a plaster cast fitted in hospital, to stabilise the break so that it can heal properly. You should be able to go home once your plaster cast has been fitted.",
          "Sometimes the cast is put on a few days later, to allow any swelling to go down first. Depending on the type of fracture, you may be given a splint instead, which you can remove for hygiene, such as to shower or bathe.",
        ],
      },
      {
        heading: "Moving the bones back into place",
        paragraphs: [
          "A doctor may try to move the broken bones back into place with their hands before applying a splint or cast. You will be given medicine before this happens to reduce or stop you feeling pain.",
          "NICE suggests a type of regional anaesthetic called a Bier's block when this is done for adults in the emergency department. It says gas and air should not be used on its own.",
        ],
      },
      {
        heading: "If an operation is needed",
        paragraphs: [
          "If you had a very bad break, surgery may be carried out to fix the broken bones back into place. The surgeon may use wires to hold the bones in the correct position, with a partial cast during the operation and a full cast a few days later, once any swelling has gone down.",
          "NICE says that, when surgery is needed for a distal radius fracture, it should be within 72 hours of injury for intra-articular fractures and within 7 days for extra-articular fractures. For adults it recommends wire fixation, called K-wires, for some breaks, and considering an open operation to realign and fix the bones for others.",
        ],
      },
      {
        heading: "Before you go home",
        paragraphs: [
          "Before leaving hospital, you will be given painkillers to take home and advice on how to look after your cast. You may be given a sling to support your arm, and you will be asked to come to follow-up appointments to check how your wrist is healing.",
          "NICE says people with fractures should be given spoken and written information about what to expect from treatment, what they can do to help themselves and who to contact about rehabilitation.",
        ],
      },
    ],
    helps: [
      "Your healthcare professional will tell you how long you need to wear your cast.",
      "Go to your follow-up appointments, so the team can check how your wrist is healing.",
      "Follow the advice you are given on looking after your cast.",
      "If your splint is no longer fitting well, contact your fracture clinic.",
      "You can be offered the chance to see images of your injury taken before and after treatment.",
    ],
    tryThisWeek: [
      "Note your follow-up dates.",
      "Follow your cast care advice.",
      "Ask to see your X-ray images.",
    ],
    ask: "Will my wrist need an operation, and how long will I be in a cast?",
    interactive: {
      kind: "flip-cards",
      title: "Ways a broken wrist is treated",
      intro: "Turn each card to see when it is used and what it does.",
      cards: [
        { id: "splint", front: "Splint", when: "On arrival, or for some breaks", back: "Supports the arm and stops broken bones moving. A splint can be removed to wash." },
        { id: "cast", front: "Plaster cast", when: "Most broken wrists", back: "Holds the bones in place until the bone has healed, which usually takes about six weeks." },
        { id: "manipulation", front: "Moving the bones back", when: "If the bones are out of place", back: "A doctor moves them back by hand, after medicine to reduce or stop pain." },
        { id: "wires", front: "Wire fixation", when: "In an operation", back: "The surgeon uses wires to hold the bones in the correct position." },
        { id: "open", front: "Open operation", when: "For some breaks into the joint", back: "NICE says to consider it if the joint surface cannot be put back by closed manipulation." },
      ],
    },
    sources: [NHS_ARM_WRIST, ROS_BROKEN_BONES, NHSI_WRIST, NICE_NG38, NHSI_CAST],
    quiz: {
      question: "How are most broken wrists treated?",
      options: [{ text: "A plaster cast fitted in hospital", right: true }, { text: "Always with an operation" }, { text: "With no support at all" }],
      why: "In most cases you will have a plaster cast fitted in hospital, to stabilise the break so that it can heal properly.",
    },
  },
  {
    id: "wfx-bones",
    kicker: "Bone health",
    question: "Should I be checked for weaker bones after breaking my wrist?",
    hook: "A broken wrist after a small fall can be the first sign of osteoporosis. If you are over 50, a check is normal.",
    short: "Osteoporosis makes bones weaker and more likely to break, and a broken wrist is one of the most common injuries it causes. Health professionals may check whether your fracture was caused by osteoporosis, and this is normal if you are over 50 or have risk factors. A fracture liaison service can help prevent further broken bones.",
    sections: [
      {
        heading: "Weaker bones and wrist breaks",
        paragraphs: [
          "Osteoporosis is a condition that causes the bones to become weaker and can put you more at risk of fracture. Fractures related to osteoporosis are often called fragility fractures and are caused by a minor trauma, such as a small fall or bump that would not normally lead to a fracture.",
          "Osteoporosis develops slowly over several years and is often only diagnosed when a fall or sudden impact causes a bone to break. A broken wrist is one of the most common injuries in people with osteoporosis.",
        ],
      },
      {
        heading: "Who is checked",
        paragraphs: [
          "Healthcare professionals may check if your fracture is caused by osteoporosis. This is normal if you are over the age of 50, or have any risk factors for fracture.",
          "If you break a bone when you fall from a height of about six feet or less, it may be a sign that your bones are weak. If you have had a broken bone after a simple slip or trip, speak to your GP or another health professional about your bone health.",
        ],
      },
      {
        heading: "What raises the risk",
        paragraphs: [
          "You gradually start losing bone from around the age of 35, and women lose bone rapidly in the first few years after the menopause. Other risk factors include taking high-dose steroid tablets for more than 3 months, a family history of osteoporosis, particularly a hip fracture in a parent, and heavy drinking and smoking.",
          "Some long-term medicines that affect bone strength or hormone levels, some other medical conditions and not exercising regularly can also raise the risk.",
        ],
      },
      {
        heading: "Checks and services",
        paragraphs: [
          "If your doctor suspects osteoporosis, they can work out your future risk of breaking a bone using an online programme, such as FRAX or Q-Fracture. They may also refer you for a bone density scan, called a DEXA scan, which is a short, painless procedure that takes 10 to 20 minutes.",
          "If you are over 50 and have broken your arm or wrist, a fracture liaison service can help you prevent further broken bones and keep your bones healthy. Ask your GP surgery if there is one in your area.",
        ],
      },
      {
        heading: "Treatment and strong bones",
        paragraphs: [
          "If you have been diagnosed with osteoporosis because you have had a broken bone, you should still receive treatment to try to reduce your risk of further broken bones. The decision about treatment depends on your risk of breaking a bone, and medicines called bisphosphonates slow the rate that bone is broken down.",
          "Eat a healthy balanced diet rich in calcium, spend time outside to build up your vitamin D levels and do regular weight-bearing and muscle-strengthening exercise. All adults should have 10 micrograms of vitamin D a day.",
        ],
      },
    ],
    helps: [
      "If you are worried that you may be at risk of fragility fractures, speak to your GP practice.",
      "If you are over 50 and have broken your wrist, ask your GP surgery about a fracture liaison service.",
      "If you have had a fragility fracture, discuss bone health with your doctor.",
      "Eat a healthy balanced diet rich in calcium, and spend time outside to build up your vitamin D levels.",
      "Stop smoking, and limit the amount of alcohol you drink.",
      "Consider a daily supplement containing 10 micrograms of vitamin D.",
    ],
    tryThisWeek: [
      "Ask your GP about bone health.",
      "Ask about a fracture liaison service.",
      "Spend some time outside.",
    ],
    ask: "Could my wrist break be a sign of weaker bones, and should I have a bone density scan?",
    interactive: {
      kind: "risk-check",
      title: "What can make bones weaker",
      intro: "Tick any that apply to you. Some can be changed, and all are worth mentioning to your GP.",
      items: [
        { id: "age", label: "Aged over 50", note: "Health professionals may check whether a fracture was caused by osteoporosis.", changeable: false },
        { id: "menopause", label: "After the menopause", note: "Women lose bone rapidly in the first few years after the menopause.", changeable: false },
        { id: "parent", label: "A parent broke a hip", note: "A family history of osteoporosis, particularly a hip fracture in a parent, raises the risk.", changeable: false },
        { id: "steroids", label: "High-dose steroid tablets", note: "Taking them for more than 3 months is a risk factor. Talk to your doctor about bone health.", changeable: false },
        { id: "smoke-drink", label: "Smoking or heavy drinking", note: "Stop smoking, and limit the amount of alcohol you drink.", changeable: true },
        { id: "inactive", label: "Not exercising regularly", note: "Regular weight-bearing and muscle-strengthening exercise helps keep bones healthy.", changeable: true },
      ],
    },
    sources: [NHSI_WRIST, NHS_OSTEO, NHS_ARM_WRIST, NHS_OSTEO_LIVING, NHSI_BONE_FALLS, CSP_FALLS_FRACTURES, NHS_OSTEO_CAUSES, NHS_OSTEO_TREATMENT],
    quiz: {
      question: "When is it normal to be checked for osteoporosis after a wrist fracture?",
      options: [{ text: "If you are over 50 or have risk factors", right: true }, { text: "Only if you are under 30" }, { text: "Never, after a wrist break" }],
      why: "This is normal if you are over the age of 50, or have any risk factors for fracture.",
    },
  },
  {
    id: "wfx-cast-care",
    kicker: "Recovery",
    question: "How do I look after a cast or splint?",
    hook: "Keep it dry, keep your hand up and never push anything down it. And know which changes mean a call to 111.",
    short: "You will need to wear your plaster cast until the broken bone heals, which usually takes about six weeks. Keep your hand raised, keep the cast dry and do not push anything down it to scratch. Phone 111 if the cast feels too tight or too loose, cracks, smells or has discharge coming from it.",
    sections: [
      {
        heading: "What the cast does",
        paragraphs: [
          "Plaster casts are made up of a bandage and a hard covering, usually plaster of paris. They allow your tissues, like bone or tendon, to heal by holding them in place.",
          "Your healthcare professional will tell you how long you need to wear it, and taking good care of your cast will help ensure a better recovery. The plaster cast stays on until the bone has healed, which usually takes about six weeks.",
        ],
      },
      {
        heading: "Everyday care",
        paragraphs: [
          "Try to keep your hand raised above your elbow whenever possible, and use a pillow to do this at night. Move slowly and with care, as the cast may be heavy.",
          "Do not get your cast wet: waterproof cast covers are available from pharmacies. If you have been given a splint, you can remove it for hygiene, such as to shower or bathe.",
        ],
      },
      {
        heading: "Itching",
        paragraphs: [
          "The skin under the cast may be itchy for a few days, but this should pass. Do not use anything to scratch under the cast, as this could lead to an infection or damage the skin below it.",
        ],
      },
      {
        heading: "Keep the rest of the arm moving",
        paragraphs: [
          "Move all the joints around your injury that are not covered by the cast, as this can help improve your recovery time. Just after your injury, keep your shoulder and elbow moving, and keep your fingers and thumb moving by regularly opening and closing your hand to make a fist.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Phone 111 if your cast feels too loose, is broken or cracked, or there is rubbing inside it, or you notice an unpleasant smell or discharge coming from it. NHS 111 can also help if the cast feels too tight.",
          "Phone 111 if you have pain in your calf, shortness of breath, new redness and swelling, or new and constant pins and needles or numbness. If your splint is no longer fitting well, contact your fracture clinic.",
        ],
      },
    ],
    helps: [
      "Keep your hand raised above your elbow whenever possible, using a pillow at night.",
      "Do not get your cast wet: waterproof cast covers are available from pharmacies.",
      "Do not push anything down your cast to relieve itching.",
      "Move all the joints around your injury that are not covered by the cast.",
      "Phone 111 if the cast cracks, feels too tight or too loose, rubs, smells or leaks.",
    ],
    tryThisWeek: [
      "Keep your hand above your elbow.",
      "Get a waterproof cast cover.",
      "Never scratch inside the cast.",
    ],
    ask: "How long will I wear the cast, and what should I do if it gets wet or loose?",
    interactive: {
      kind: "scenarios",
      title: "Living with a cast",
      scenarios: [
        {
          id: "itch",
          situation: "The skin under your cast feels very itchy.",
          options: [{ text: "Slide something in to scratch" }, { text: "Leave it, as it should pass", best: true }],
          why: "The skin under the cast may be itchy for a few days, but this should pass. Do not use anything to scratch under the cast, as this could lead to an infection.",
        },
        {
          id: "shower",
          situation: "You want a shower, and your cast is not waterproof.",
          options: [{ text: "Use a waterproof cast cover", best: true }, { text: "Let it get wet and dry it later" }],
          why: "Do not get your cast wet. Waterproof cast covers are available from pharmacies.",
        },
        {
          id: "loose",
          situation: "Your cast has started to feel loose and rubs inside.",
          options: [{ text: "Phone 111", best: true }, { text: "Pad it yourself and wait" }, { text: "Take the cast off" }],
          why: "Phone 111 if your cast feels too loose, is broken or cracked, or there is rubbing inside it.",
        },
      ],
    },
    sources: [NHS_ARM_WRIST, NHSI_CAST, ROS_BROKEN_BONES, NHSI_WRIST],
    quiz: {
      question: "What should you do if the skin under your cast is itchy?",
      options: [{ text: "Do not scratch under the cast", right: true }, { text: "Use a ruler to scratch it" }, { text: "Cut a hole in the cast" }],
      why: "Do not use anything to scratch under the cast, as this could lead to an infection or damage the skin below it.",
    },
  },
  {
    id: "wfx-exercises",
    kicker: "Exercise",
    question: "Which exercises help once the cast is off?",
    hook: "Movement and strength come back with practice. Start small, little and often, and let your pain guide how much you do.",
    short: "Once the cast is removed, you can start exercises to help strengthen your muscles and return to normal activities. Start them when your healthcare professional advises, begin with a few repetitions often through the day, and keep pain at 5 out of 10 or below. Exercises recommended before and after the cast comes off can also reduce the chance of CRPS.",
    sections: [
      {
        heading: "While the cast is on",
        paragraphs: [
          "Just after your injury, keep your shoulder and elbow moving, and keep your fingers and thumb moving by regularly opening and closing your hand to make a fist. Exercises can help the joints around your arm injury that are not covered by the cast.",
          "NHS inform shows four exercises to try with an arm cast on. For the shoulder flex, slowly lift your arm towards the ceiling with your elbow straight, then lower it, 5 times. For the elbow flex and extend, slowly bend your elbow so your hand moves towards your shoulder, then straighten it fully, 5 times.",
          "For the flexed hand clench, rest the side of your hand on a table and clench it into a loose fist, hold for 2 seconds and straighten your fingers. For the finger and thumb touch, stretch your fingers out, touch your thumb to the top of your little finger, then stretch your hand out again.",
        ],
      },
      {
        heading: "When the cast comes off",
        paragraphs: [
          "At 4 to 6 weeks after your injury you will come out of your splint or cast, and it is not unusual to be stiff. You can start gentle exercises, as guided by your healthcare professional.",
          "Once the cast is removed, you can start doing exercises to help strengthen your muscles and return to normal activities. Doing any exercises that are recommended to you before and after the cast is removed can reduce the chance of developing complex regional pain syndrome (CRPS).",
        ],
      },
      {
        heading: "Wrist, hand and finger exercises",
        paragraphs: [
          "NHS inform has short videos of exercises for wrist, hand and finger problems, including the wrist bend, palm up and palm down, hand wave, flat fist, full finger bend and thumb stretch. People who have had recent surgery in the area should follow the advice of their own healthcare professional.",
          "Start exercises for your wrist once advised by your healthcare professional. Getting movement and strength back supports tissue healing, and a gradual return to normal activities is the best way to get good short and long term results.",
        ],
      },
      {
        heading: "How many and how often",
        paragraphs: [
          "When starting new exercises, it can help to do 2 to 3 repetitions at a time, in small amounts through the day, such as every hour. As this gets easier, add 1 or 2 repetitions every few days, building up to a maximum of 2 sets of 15.",
          "For stretching exercises, you should feel a gentle stretch that is not sore or uncomfortable. Try to hold stretches for 20 to 30 seconds if possible, doing 2 to 3 sets, 2 to 3 times a day.",
        ],
      },
      {
        heading: "How much pain is all right",
        paragraphs: [
          "It can help to rate your pain out of 10. A score of 0 to 3 is minimal pain, 4 to 5 is acceptable pain and 6 to 10 is excessive pain, so aim to keep your pain within 0 to 5.",
          "If it goes above that, do fewer repetitions, move more slowly or rest longer between movements. Your pain should be no worse the morning after exercise, and stop the exercises if they make your symptoms worse or cause new pain.",
        ],
      },
    ],
    helps: [
      "Keep your fingers and thumb moving by regularly opening and closing your hand to make a fist.",
      "Start exercises for your wrist once advised by your healthcare professional.",
      "Follow any exercise advice you have been given.",
      "Start with 2 to 3 repetitions at a time, in small amounts through the day.",
      "Keep your pain within 0 to 5 out of 10 while exercising.",
      "Stop if the exercises make your symptoms worse or cause new pain, and talk to a healthcare professional if your pain worsens.",
    ],
    tryThisWeek: [
      "Open and close your hand often.",
      "Do 2 to 3 repetitions at a time.",
      "Keep pain at 5 or below.",
    ],
    ask: "Which exercises should I do, and when can I start them?",
    interactive: {
      kind: "flip-cards",
      title: "Four exercises with an arm cast on",
      intro: "Turn each card to see how NHS inform describes it. Follow your own healthcare professional's advice first.",
      cards: [
        { id: "shoulder", front: "Shoulder flex", when: "Standing, sitting or lying", back: "Slowly lift your arm towards the ceiling, elbow straight, then lower it. Repeat 5 times." },
        { id: "elbow", front: "Elbow flex and extend", when: "Sitting upright", back: "Slowly bend your elbow so your hand moves to your shoulder, then straighten fully. Repeat 5 times." },
        { id: "clench", front: "Flexed hand clench", when: "Side of your hand on a table", back: "Fingers and wrist straight, clench into a loose fist. Hold for 2 seconds, then straighten." },
        { id: "touch", front: "Finger and thumb touch", when: "Palm out, fingers stretched", back: "Touch your thumb to the top of your little finger, then stretch your hand out again." },
      ],
    },
    sources: [NHSI_WRIST, NHSI_EX_WRIST, NHSI_CAST, ROS_BROKEN_BONES, NHS_ARM_WRIST],
    quiz: {
      question: "Which pain score is acceptable while doing these exercises?",
      options: [{ text: "Up to 5 out of 10", right: true }, { text: "Up to 10 out of 10" }, { text: "Any pain means stop for good" }],
      why: "A score of 0 to 3 is minimal pain, 4 to 5 is acceptable pain and 6 to 10 is excessive pain, so aim to keep your pain within 0 to 5.",
    },
  },
  {
    id: "wfx-pain",
    kicker: "Recovery",
    question: "How do I manage pain, stiffness and swelling?",
    hook: "Some pain, swelling and bruising are a normal part of healing. Raising your arm and keeping it moving both help.",
    short: "It is normal to have some pain, swelling and bruising after a wrist fracture, and swelling can last for months. Raising your arm, keeping the other joints moving and using the painkillers you have been given all help. Stiffness after the cast comes off eases with movement, though it can take months for strength to return.",
    sections: [
      {
        heading: "Pain is normal",
        paragraphs: [
          "It is normal to have some discomfort in the areas around your fracture, including other soft tissues and nearby joints. Pain can change from day to day, does not always depend on what you are doing, and it is common to have pain at rest.",
          "It is normal to have some pain even when your fracture has healed. Some people also have discomfort at the fracture site during colder weather.",
        ],
      },
      {
        heading: "Pain relief",
        paragraphs: [
          "Use the painkillers you have been given to ease pain. Your local pharmacy can give you advice on managing pain after a fracture.",
          "Anti-inflammatory medicines like ibuprofen or naproxen have been shown to delay healing. NICE says these medicines, called NSAIDs, should not be offered to frail or older adults with fractures.",
        ],
      },
      {
        heading: "Swelling and bruising",
        paragraphs: [
          "It is normal to have swelling near the fracture, and it often spreads down your arm. It can sometimes last for months, and it can change with your position, your activity and the time of day.",
          "To help reduce it, raise your arm above your heart when resting by supporting it with pillows, keep the other joints in your arm moving and find a balance between rest and activity. If you are able to, use self-massage from your fingertips towards your elbow.",
          "Bruising is normal too. It can be widespread, appear a long way from the fracture, and may be very purple to start with before changing colour.",
        ],
      },
      {
        heading: "When the cast comes off",
        paragraphs: [
          "It is normal to feel stiff and sore after a cast is removed, because your limb has been kept still for a long time, and this will ease with movement. Pain can increase when the cast comes off, and it is normal to still be using painkillers or to need them again.",
          "It can take several weeks to get your full movement back, and sometimes months for your strength to return. Your skin may be dry, flaky or discoloured, so wash and dry it gently and moisturise it regularly.",
        ],
      },
      {
        heading: "Heat, cold and relaxation",
        paragraphs: [
          "To help you recover from a fracture, the NHS suggests painkillers, hot and cold treatments such as warm baths and cold packs, and relaxation techniques. You can use more than one of these at the same time.",
        ],
      },
    ],
    helps: [
      "Raise your arm above your heart when resting, supported with pillows.",
      "Keep the other joints in your arm moving normally.",
      "Find a balance between rest and activity.",
      "Use the painkillers you have been given to ease pain.",
      "Ask your local pharmacy for advice on managing pain after a fracture.",
      "Get help from NHS 111 if the pain in your arm or wrist gets worse.",
    ],
    tryThisWeek: [
      "Rest your arm up on pillows.",
      "Keep your other joints moving.",
      "Ask a pharmacist about pain relief.",
    ],
    ask: "Which painkillers are right for me, and how long should the swelling last?",
    interactive: {
      kind: "scenarios",
      title: "Pain and swelling at home",
      scenarios: [
        {
          id: "puffy",
          situation: "Your hand is puffy at the end of a busy day.",
          options: [{ text: "Rest it raised on pillows", best: true }, { text: "Let it hang by your side" }],
          why: "To help reduce swelling, raise your arm above your heart when resting by supporting it with pillows.",
        },
        {
          id: "ibuprofen",
          situation: "You wonder whether to take ibuprofen for the ache.",
          options: [{ text: "Ask a pharmacist first", best: true }, { text: "Take it, all painkillers are alike" }],
          why: "Anti-inflammatory medicines like ibuprofen or naproxen have been shown to delay healing. Your local pharmacy can give you advice on managing pain after a fracture.",
        },
        {
          id: "cast-off",
          situation: "The cast is off and your wrist feels stiff and sore.",
          options: [{ text: "Keep moving it gently", best: true }, { text: "Keep it completely still" }],
          why: "It is normal to feel stiff and sore after a cast is removed, and this will ease with movement.",
        },
      ],
    },
    sources: [NHSI_WRIST, NHS_ARM_WRIST, NHSI_CAST, NICE_NG38, NHS_OSTEO, NHS_OSTEO_LIVING],
    quiz: {
      question: "What helps reduce swelling after a wrist fracture?",
      options: [{ text: "Raising your arm when resting", right: true }, { text: "Letting the arm hang down" }, { text: "Keeping every joint still" }],
      why: "To help reduce it, raise your arm above your heart when resting by supporting it with pillows, keep the other joints in your arm moving and find a balance between rest and activity.",
    },
  },
  {
    id: "wfx-warning-signs",
    kicker: "Safety",
    question: "Which signs during healing need urgent help?",
    hook: "Most healing is steady. A few changes, like numb or blue fingers or a cast that feels too tight, need help the same day.",
    short: "While a broken wrist heals, get help from NHS 111 if the pain gets worse, your fingers feel numb or look swollen, blue or white, or the cast is too tight, too loose, broken or smelly. Sudden, severe pain can be a sign of compartment syndrome, which can start if a cast is too tight, so call 999 or go to A&E.",
    sections: [
      {
        heading: "Get help from NHS 111",
        paragraphs: [
          "Get help from NHS 111 if you are recovering from a broken arm or wrist and the pain gets worse, or your temperature is very high or you feel hot, cold or shivery. The same applies if your cast breaks, or it feels too tight or too loose.",
          "Also get help if your fingers, wrist and arm start to feel numb, look swollen or turn blue or white, or there is a bad smell or discharge from under your cast. You can call 111 or get help from 111 online.",
        ],
      },
      {
        heading: "Other signs to phone 111 about",
        paragraphs: [
          "NHS inform says to phone 111 if you have pain in your calf, shortness of breath, new redness and swelling, or new and constant pins and needles or numbness. The same applies if there is rubbing inside your cast, or it is cracked or broken.",
        ],
      },
      {
        heading: "Sudden, severe pain",
        paragraphs: [
          "Compartment syndrome is an increase in pressure inside a muscle, which restricts blood flow and causes pain. Its symptoms can start suddenly, such as after an injury or if a bandage or plaster cast is too tight.",
          "Symptoms include severe pain in a muscle, swelling, numbness, weakness or pins and needles, and tightness or difficulty moving. Call 999 or go to A&E if you have sudden, severe pain in any part of your body.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
      {
        heading: "Pain far worse than expected",
        paragraphs: [
          "Complex regional pain syndrome (CRPS) is a poorly understood condition where the pain is much more severe and long-lasting than normal, and most cases are triggered by an injury. The skin can become very sensitive, and the area can become swollen, stiff or change in colour or temperature.",
          "See a GP if you have persistent pain that is preventing you from carrying out everyday activities. It is best to get help as soon as possible, as early treatment may help reduce painful symptoms.",
        ],
      },
    ],
    helps: [
      "Get help from NHS 111 if the pain gets worse, or your fingers feel numb or look swollen, blue or white.",
      "Get help from NHS 111 if your cast breaks, or it feels too tight or too loose.",
      "Phone 111 if you notice a bad smell or discharge from under your cast.",
      "Call 999 or go to A&E if you have sudden, severe pain.",
      "See a GP if persistent pain is stopping you doing everyday activities.",
    ],
    tryThisWeek: [
      "Call 111 for numb or blue fingers.",
      "Call 111 if the cast is too tight.",
      "Call 999 for sudden, severe pain.",
    ],
    ask: "Which changes should make me call 111 or go to A&E while my wrist heals?",
    interactive: {
      kind: "signs",
      title: "Warning signs while it heals",
      intro: "Tick any you notice. Each one is a reason to get help.",
      signs: ["Pain getting worse", "Very high temperature, or shivery", "Cast too tight or too loose", "Cast cracked, broken or rubbing", "Fingers numb or tingling", "Fingers swollen, blue or white", "Bad smell or discharge from the cast", "Sudden, severe pain"],
      after: "Get help from NHS 111 for these signs. For sudden, severe pain, call 999 or go to A&E, and do not drive yourself.",
      copyHeading: "Changes I have noticed",
    },
    sources: [NHS_ARM_WRIST, NHSI_CAST, NHS_COMPARTMENT, NHS_CRPS],
    quiz: {
      question: "What should you do if you have sudden, severe pain?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait for your next clinic visit" }, { text: "Loosen the cast yourself" }],
      why: "Call 999 or go to A&E if you have sudden, severe pain in any part of your body.",
    },
  },
  {
    id: "wfx-daily-tasks",
    kicker: "Living well",
    question: "How do I manage everyday tasks with one hand?",
    hook: "Dressing, cooking and washing take longer with one hand. Simple aids and a little planning make them easier.",
    short: "A wrist fracture can be hard because you cannot use your hand normally. Keep doing what you can as your pain allows, and build up gradually. Simple aids like tap grips, dressing aids and easy-grip kitchen tools, a waterproof cast cover and a free needs assessment can all help.",
    sections: [
      {
        heading: "Doing what you can",
        paragraphs: [
          "A wrist fracture can be debilitating as you cannot use your hand normally. Keep doing any activities you are able to, as your pain allows, and over time gradually increase what you do.",
          "Reduced flexibility and strength may make things more difficult to start with. This will get better as you slowly build up to all your usual activities.",
        ],
      },
      {
        heading: "Washing and dressing",
        paragraphs: [
          "Tap grips help you turn taps on and off more easily, and can be particularly helpful if you have a hand, arm or spinal fracture. A long-handled sponge or brush can help you reach areas such as your back and feet.",
          "A dressing stick can help if you have difficulty reaching clothes or pulling them up or down. There are aids to help pull up socks, tights, underwear or zips, or even to put on a bra, and clothes with a wider opening or simpler fastenings can be easier to get on and off.",
          "Do not get your cast wet: waterproof cast covers are available from pharmacies. If possible, try to bathe or shower when someone else is in the house.",
        ],
      },
      {
        heading: "In the kitchen",
        paragraphs: [
          "Useful gadgets include a kettle with a holder to make it easy to pour, knives and forks with special handles, easy to grip jugs or graters, and cups with 2 handles. A tipping kettle or tipping frame lets you pour from the kettle without having to lift it up.",
          "When boiling food, a wire basket inside the saucepan lets you lift the food out, so you do not have to lift the pan, water and food at once. A kitchen or household trolley can make it easier to move hot or heavy items around.",
        ],
      },
      {
        heading: "Around the home",
        paragraphs: [
          "Arrange things so that items you use most often are within easy reach. A grab tool, also known as an extending arm, can help you pick things up or reach higher items.",
          "If you get tired or sore, pace yourself and do a little at a time, rather than trying to do everything at once. Do not try to lift heavy items until you have been told it is safe to do so.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Your local council offers a free needs assessment, which can recommend help including equipment. Equipment and small changes to your home will be provided for free if you are assessed as needing them.",
          "An occupational therapist can advise you on equipment to meet your needs. Depending on where you live, you may get some standard equipment for free or on loan, so it is worth speaking to your GP or social services.",
        ],
      },
    ],
    helps: [
      "Keep doing the activities you can as your pain allows, and gradually increase what you do.",
      "Try tap grips, which can be particularly helpful with a hand or arm fracture.",
      "Use a waterproof cast cover from a pharmacy to keep your cast dry.",
      "Keep the items you use most often within easy reach.",
      "Pace yourself and do a little at a time.",
      "Ask your local council for a free needs assessment.",
    ],
    tryThisWeek: [
      "Try tap grips.",
      "Get a waterproof cast cover.",
      "Keep everyday items within reach.",
    ],
    ask: "Could an occupational therapist help me with everyday tasks while my wrist heals?",
    interactive: {
      kind: "flip-cards",
      title: "Aids that can help",
      intro: "Turn each card to see what it helps with.",
      cards: [
        { id: "taps", front: "Tap grips", when: "Washing and cooking", back: "Help you turn taps on and off more easily, especially with a hand or arm fracture." },
        { id: "stick", front: "Dressing stick", when: "Getting dressed", back: "A stick with a hook on one end, for reaching clothes or pulling them up or down." },
        { id: "aids", front: "Dressing aids", when: "Socks, zips and bras", back: "Aids to help pull up socks, tights, underwear or zips, or put on a bra." },
        { id: "kettle", front: "Tipping kettle", when: "Making a hot drink", back: "Lets you pour from the kettle without having to lift it up." },
        { id: "basket", front: "Wire basket in the pan", when: "Cooking", back: "Lift the food out without lifting the pan, water and food at once." },
        { id: "grab", front: "Grab tool", when: "Reaching things", back: "An extending arm to pick things up or reach higher items." },
      ],
    },
    sources: [NHSI_WRIST, ROS_DAILY_LIVING, NHS_ARM_WRIST, NHS_GADGETS],
    quiz: {
      question: "What can make turning taps easier with a hand or arm fracture?",
      options: [{ text: "Tap grips", right: true }, { text: "A grab tool" }, { text: "A dressing stick" }],
      why: "Tap grips help you turn taps on and off more easily, and can be particularly helpful if you have a hand, arm or spinal fracture.",
    },
  },
  {
    id: "wfx-driving-work",
    kicker: "Living well",
    question: "When can I drive and go back to work?",
    hook: "There is no fixed date. You need to be out of the cast and in full control of the car, and work depends on what you do.",
    short: "Do not drive until you have been told it is safe to do so. With an arm injury, you can begin to drive when you no longer have a cast or sling and have enough pain-free strength, and you need to be able to do an emergency stop. Going back to work depends on your job, and a phased return or changed duties may help.",
    sections: [
      {
        heading: "Before you drive",
        paragraphs: [
          "Do not drive or try to lift heavy items until you have been told it is safe to do so. Contact your insurance provider before driving, as your injury may affect your insurance.",
          "With an upper limb injury, you can begin to drive when you no longer have a plaster cast or sling, and you have enough pain-free strength in your arms. Once you are out of your splint, the general advice is that you need to be able to safely perform an emergency stop or manoeuvre, and always be in full control of your vehicle.",
          "If you are in any doubt, do not drive until you have spoken to your healthcare professional.",
        ],
      },
      {
        heading: "Medicines and driving",
        paragraphs: [
          "Be careful if you are taking pain medicine. Some medicines can make you sleepy or slow your reactions, and if this happens, you should not drive.",
          "If you have not driven for some time, it can help to do a short practice drive on a quiet road. Take someone with you in case you feel unsure or need help.",
        ],
      },
      {
        heading: "Going back to work",
        paragraphs: [
          "Your return to work will depend on the type of work you do and your employer. It may be possible to discuss a phased return to work or changed duties.",
          "You do not need to see a healthcare professional to return to work. In general, pace yourself when getting back to normal activities, and only do things as you feel able.",
        ],
      },
      {
        heading: "Building up activity",
        paragraphs: [
          "At 4 to 6 weeks after your injury you will come out of your splint or cast. From 6 to 8 weeks you can begin to return to full function, resume normal day to day activity and gradually increase the amount of weight you carry.",
          "NHS inform suggests a return to contact sports at 12 weeks. Frustration or low mood after an injury is normal, and this should get better as you get back to normal life.",
        ],
      },
    ],
    helps: [
      "Do not drive until you have been told it is safe to do so.",
      "Contact your insurance provider before driving.",
      "Only begin to drive once you no longer have a cast or sling and have enough pain-free strength.",
      "Do not drive if your medicines make you sleepy or slow your reactions.",
      "Talk to your employer about a phased return or changed duties.",
    ],
    tryThisWeek: [
      "Call your car insurer.",
      "Check it is safe before driving.",
      "Ask about a phased return to work.",
    ],
    ask: "When will it be safe for me to drive, and is there anything I should avoid at work?",
    interactive: {
      kind: "scenarios",
      title: "Driving and work decisions",
      scenarios: [
        {
          id: "cast-on",
          situation: "Your cast is still on, but you feel you could manage the car.",
          options: [{ text: "Wait until the cast and sling are off", best: true }, { text: "Drive carefully with the cast on" }],
          why: "With an upper limb injury, you can begin to drive when you no longer have a plaster cast or sling, and you have enough pain-free strength in your arms.",
        },
        {
          id: "doubt",
          situation: "The cast is off, but you are not sure you could do an emergency stop.",
          options: [{ text: "Do not drive yet, ask your team", best: true }, { text: "Drive slowly instead" }],
          why: "If you are in any doubt, do not drive until you have spoken to your healthcare professional.",
        },
        {
          id: "work",
          situation: "Your job involves lifting, and you are due back soon.",
          options: [{ text: "Ask about changed duties", best: true }, { text: "Go straight back to full lifting" }],
          why: "Your return to work will depend on the type of work you do and your employer. It may be possible to discuss a phased return to work or changed duties.",
        },
      ],
    },
    sources: [NHSI_WRIST, NHSI_CAST, NHS_ARM_WRIST, ROS_EVERYDAY],
    quiz: {
      question: "When can you begin to drive after an arm or wrist injury?",
      options: [{ text: "When the cast and sling are off and you are strong", right: true }, { text: "The day after the injury" }, { text: "Whenever the cast feels comfortable" }],
      why: "With an upper limb injury, you can begin to drive when you no longer have a plaster cast or sling, and you have enough pain-free strength in your arms.",
    },
  },
  {
    id: "wfx-falls",
    kicker: "Living well",
    question: "How can I prevent another fall?",
    hook: "Many broken wrists start with a fall. Stronger legs, better balance and a safer home lower the chance of the next one.",
    short: "It is common for a wrist fracture to happen in a fall, so it is important to know why you fell and to improve your strength and balance. Activities that improve strength and balance at least twice a week, a safer home, good footwear and a medicines review all help. If you have had a fall, talk to your GP practice.",
    sections: [
      {
        heading: "Find out why you fell",
        paragraphs: [
          "It can be common for a wrist fracture to happen if you fall. It is important to know why you had a fall, and to learn how to improve your strength and balance to help prevent falls in the future.",
          "If you have had a fall, talk to your GP practice or another health professional, such as a physiotherapist or occupational therapist, even if you are not hurt. Many underlying causes of falls can be treated or corrected.",
        ],
      },
      {
        heading: "Help from a falls service",
        paragraphs: [
          "A GP may check your balance and refer you to a specialist falls service. This can include checks for muscle weakness, weak bones or eyesight problems, strength and balance training, checking your home is safe and reviewing your medicines.",
          "If you have had a fall, you might be able to refer yourself directly to services that can help you without seeing a GP. Ask the reception staff at your GP surgery, or check your GP surgery's website.",
        ],
      },
      {
        heading: "Strength and balance",
        paragraphs: [
          "Adults aged 65 and over should aim to be physically active every day and do activities that improve strength, balance and flexibility on at least 2 days a week. If you have fallen or are worried about falling, these exercises will help make you stronger and feel more confident on your feet.",
          "Well-designed programmes of strength, balance and functional exercises reduce falls, and the Chartered Society of Physiotherapy suggests joining a physio-led strength and balance class if possible. If you have had a fall or a fracture, check with your GP or a physio about what types of exercise would be suitable.",
        ],
      },
      {
        heading: "A safer home",
        paragraphs: [
          "Move rugs or mats you might trip over, keep walkways clutter free with no trailing wires, and make sure the landing and stairs are well lit. Fit handrails on the stairs and in the bathroom.",
          "Arrange your kitchen so that items you use regularly are within easier reach, and choose a chair and bed that are the best height for you to get up from safely. Go from room to room and decide what changes you can make yourself and what you need help with.",
        ],
      },
      {
        heading: "Shoes, sight and medicines",
        paragraphs: [
          "Wear shoes or slippers that fit well, do not slip off and have a good grip, and have regular eye tests and hearing checks. Get up slowly out of chairs and bed, in case you feel dizzy.",
          "Some medicines can cause unsteadiness, so if you take a number of tablets, ask your doctor or pharmacist to review them. Wear a personal alarm, or carry a mobile phone with you, in case you fall.",
        ],
      },
    ],
    helps: [
      "See a GP if you have had a fall or are worried about your balance or mobility.",
      "Do activities that improve strength and balance at least twice a week.",
      "After a fall or a fracture, check with your GP or a physio about which types of exercise would be suitable.",
      "Move rugs and clutter, and fit handrails on the stairs and in the bathroom.",
      "If you take a number of tablets, ask your doctor or pharmacist to review them.",
      "Wear a personal alarm, or carry a mobile phone with you.",
    ],
    tryThisWeek: [
      "Tell your GP about the fall.",
      "Do strength and balance twice a week.",
      "Clear rugs and clutter.",
    ],
    ask: "Why did I fall, and could a falls service or a strength and balance class help me?",
    interactive: {
      kind: "risk-check",
      title: "What makes a fall more likely",
      intro: "Tick any that apply to you. Most of them can be changed.",
      items: [
        { id: "muscles", label: "Weak muscles or poor balance", note: "Activities that improve strength and balance, at least twice a week, can help.", changeable: true },
        { id: "medicines", label: "Medicines that make you unsteady", note: "If you take a number of tablets, ask your doctor or pharmacist to review them.", changeable: true },
        { id: "senses", label: "Eyesight or hearing problems", note: "Have regular eye tests and get your hearing checked.", changeable: true },
        { id: "home", label: "Rugs, clutter or trailing wires", note: "Move rugs you might trip over and keep walkways clutter free.", changeable: true },
        { id: "shoes", label: "Loose or backless footwear", note: "Wear shoes or slippers that fit well, do not slip off and have a good grip.", changeable: true },
        { id: "dizzy", label: "Dizzy when getting up", note: "Get up slowly out of chairs and bed, in case you feel dizzy.", changeable: true },
        { id: "age", label: "Getting older", note: "Falls are not an inevitable part of getting older, but they can become more common.", changeable: false },
      ],
    },
    sources: [NHSI_WRIST, NHS_FALLS, ROS_FALLS, NHS_OLDER_ACTIVITY, CSP_FALLS_FRACTURES, NHSI_HOME_CHECK, NHSI_WHY_FALLS],
    quiz: {
      question: "How often should adults over 65 do activities that improve strength and balance?",
      options: [{ text: "On at least 2 days a week", right: true }, { text: "Once a month" }, { text: "Only after a fall" }],
      why: "Adults aged 65 and over should aim to be physically active every day and do activities that improve strength, balance and flexibility on at least 2 days a week.",
    },
  },
  {
    id: "wfx-long-term",
    kicker: "Recovery",
    question: "What if my wrist takes longer to recover?",
    hook: "The bone heals in weeks, but full movement and strength can take months. Some aches are normal, and there is help if progress stalls.",
    short: "Most healing happens between 6 and 12 weeks, but stiffness and weakness can last several months or more, and some people take as long as 12 months to recover. If your wrist function has not improved within 6 weeks of following the advice, talk to a healthcare professional. Occasionally a broken wrist leads to longer-term problems such as osteoarthritis or CRPS.",
    sections: [
      {
        heading: "Months, not weeks",
        paragraphs: [
          "It usually takes around 6 to 12 weeks to recover from a broken arm or wrist, and it can take longer if it was severely damaged. Your wrist may be stiff and weak after the cast is removed, and sometimes this can last several months or more.",
          "It is normal to have aches and discomfort after the main healing time, often when you try activities you have not done for a while. It is also normal for the area to be more sensitive for several months after the injury.",
          "For some people, it can take as long as 12 months to recover from a broken bone. Try not to feel frustrated if things do not improve as quickly as you would like, and focus on positive things such as your exercises.",
        ],
      },
      {
        heading: "What affects recovery",
        paragraphs: [
          "Many things can affect recovery, including age, smoking, how bad the injury was, whether you had an operation and other illnesses. Every injury is different, so try not to compare yourself to someone else who has had a similar injury.",
          "A physiotherapist can help with stiffness and weakness. If your wrist function has not improved within 6 weeks of following the advice you have been given, it is a good idea to talk to a healthcare professional.",
        ],
      },
      {
        heading: "Longer-term problems",
        paragraphs: [
          "Occasionally, a broken wrist can cause longer-term problems, such as osteoarthritis of the wrist or complex regional pain syndrome (CRPS). You can reduce the chance of developing CRPS by doing any exercises that are recommended to you before and after the cast is removed.",
          "In CRPS, the pain is much more severe and long-lasting than normal after an injury, and it may feel like burning, stabbing or stinging. The skin may become very sensitive, and the limb may become swollen, stiff or change in colour or temperature.",
          "See a GP if you have persistent pain that is preventing you from carrying out everyday activities. It is best to get help as soon as possible, as early treatment may help reduce painful symptoms.",
        ],
      },
      {
        heading: "Mood and confidence",
        paragraphs: [
          "Frustration or low mood after an injury is normal, and it should get better as you get back to normal life. It is common to feel anxious and less confident after breaking a bone, but with support and time many people can return to doing the things they want, or need, to do.",
          "See a GP as soon as possible if you have been experiencing depression. The Samaritans are available 24 hours a day on 116 123.",
        ],
      },
    ],
    helps: [
      "Keep doing the exercises recommended to you, before and after the cast is removed.",
      "Ask your doctor about seeing a physiotherapist if stiffness and weakness are a problem.",
      "Talk to a healthcare professional if your wrist function has not improved within 6 weeks of following the advice.",
      "See a GP if persistent pain is stopping you doing everyday activities.",
      "Try not to compare yourself to someone else who has had a similar injury.",
    ],
    tryThisWeek: [
      "Keep up your exercises.",
      "Ask about seeing a physiotherapist.",
      "Do not compare your recovery.",
    ],
    ask: "Is my recovery on track, and would more physiotherapy help?",
    interactive: {
      kind: "timeline",
      title: "The road back after a broken wrist",
      steps: [
        { id: "early", when: "0 to 4 weeks", title: "Keep the rest moving", points: ["Shoulder and elbow movements.", "Open and close your hand to make a fist.", "Manage pain and swelling."] },
        { id: "cast-off", when: "4 to 6 weeks", title: "Out of the cast or splint", points: ["It is not unusual to be stiff.", "Gentle exercises, as guided by your healthcare professional."] },
        { id: "daily", when: "6 to 8 weeks", title: "Back to daily life", points: ["Begin to return to full function and normal activity.", "Gradually carry more weight."] },
        { id: "twelve", when: "12 weeks", title: "Most healing done", points: ["Contact sports may be possible.", "Aches when trying activities again are normal."] },
        { id: "months", when: "Several months", title: "Strength coming back", points: ["Stiffness, weakness and sensitivity can last months.", "Talk to a professional if progress stalls."] },
      ],
    },
    sources: [NHSI_WRIST, NHS_ARM_WRIST, ROS_DAILY_LIVING, NHSI_CAST, ROS_BROKEN_BONES, NHS_CRPS, NHS_CRPS_SYMPTOMS],
    quiz: {
      question: "How long can stiffness and weakness last after the cast is removed?",
      options: [{ text: "Several months or more", right: true }, { text: "Only a day or two" }, { text: "It never happens" }],
      why: "Your wrist may be stiff and weak after the cast is removed, and sometimes this can last several months or more.",
    },
  },
];
