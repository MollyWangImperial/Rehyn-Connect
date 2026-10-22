import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Sprains and strains page's pieces (content/library-conditions/body-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, NHS inform and NICE's
// Clinical Knowledge Summary on sprains and strains, with Arthritis UK (the charity formerly called Versus
// Arthritis), the Chartered Society of Physiotherapy and the ankle sprain leaflets of four NHS trusts. Exercises
// are described only as the sources describe them. Where the sources differ (anti-inflammatory painkillers in the
// first 48 hours, bandaging a sprained ankle), both views are given. General information only; it never replaces
// what a person's own GP, pharmacist or physiotherapist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const inform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/illnesses-and-conditions/muscle-bone-and-joints/${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE Clinical Knowledge Summaries: ${label}`, url: `https://cks.nice.org.uk/topics/sprains-strains/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/conditions/${path}` });

const NHS_SPRAINS = nhs("Sprains and strains", "conditions/sprains-and-strains/");
const NHS_ANKLE = nhs("Ankle pain", "symptoms/foot-pain/ankle-pain/");
const NHS_HAMSTRING = nhs("Hamstring injury", "conditions/hamstring-injury/");
const NHS_BROKEN_ANKLE = nhs("Broken ankle", "conditions/broken-ankle/");
const NHS_BROKEN_ARM = nhs("Broken arm or wrist", "conditions/broken-arm-or-wrist/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_PHYSIO = nhs("Physiotherapy", "tests-and-treatments/physiotherapy/");
const NHS_WARM_UP = nhs("How to warm up before exercising", "live-well/exercise/how-to-warm-up-before-exercising/");
const NHS_RUNNING = nhs("Knee pain and other running injuries", "live-well/exercise/knee-pain-and-other-running-injuries/");

const NHSI_SOFT = inform("Soft tissue injury advice", "soft-tissue-injury-advice/");
const NHSI_ANKLE = inform("Ankle problems", "leg-and-foot-problems-and-conditions/ankle-problems/");
const NHSI_EX_ANKLE = inform("Exercises for calf and ankle problems", "leg-and-foot-problems-and-conditions/exercises-for-calf-and-ankle-problems");
const NHSI_PAINKILLERS = inform("When should I take painkillers?", "when-should-i-take-painkillers/");
const NHSI_MSK = inform("How to access MSK services", "how-to-access-msk-services/");

const CKS_SUMMARY = cks("Sprains and strains", "");
const CKS_DEFINITION = cks("Sprains and strains: what is it?", "background-information/definition/");
const CKS_PREVALENCE = cks("Sprains and strains: how common are they?", "background-information/prevalence/");
const CKS_RISK = cks("Sprains and strains: what are the risk factors?", "background-information/risk-factors/");
const CKS_COMPLICATIONS = cks("Sprains and strains: what are the complications?", "background-information/complications/");
const CKS_PROGNOSIS = cks("Sprains and strains: what is the prognosis?", "background-information/prognosis/");
const CKS_ASSESSMENT = cks("Sprains and strains: assessment", "diagnosis/assessment/");
const CKS_MANAGEMENT = cks("Sprains and strains: management", "management/management/");

const AU_FOOT = au("Foot and ankle pain", "understanding-arthritis/conditions/foot-and-ankle-pain/");
const AU_EX_FEET = au("Exercises for the toes, feet and ankles", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-toes-feet-and-ankles/");

const CSP_FOOT_CAUSES = csp("Causes of foot pain", "foot-pain/causes-foot-pain");
const CSP_FOOT_TREATMENT = csp("Treatment for common foot conditions", "foot-pain/treatment-foot-pain");
const CSP_FOOT_HELP = csp("Getting help for foot pain", "foot-pain/getting-help-foot-pain");
const CSP_ANKLE = csp("Managing your ankle pain", "managing-pain-home/managing-your-ankle-pain");

const UHSX: LearnSource = { label: "University Hospitals Sussex NHS Foundation Trust: Ankle sprain", url: "https://www.uhsussex.nhs.uk/wp-content/uploads/2018/05/888.2-Ankle-Sprain-AE-leaflet-2025.pdf" };
const NLG: LearnSource = { label: "Northern Lincolnshire and Goole NHS Foundation Trust: Ankle sprain", url: "https://www.nlg.nhs.uk/resources/ankle-sprain/" };
const PAH: LearnSource = { label: "The Princess Alexandra Hospital NHS Trust: Ankle sprain", url: "https://www.pah.nhs.uk/resources/ankle-sprain/" };
const WHITTINGTON: LearnSource = { label: "Whittington Health NHS Trust: Ankle sprain", url: "https://www.whittington.nhs.uk/mini-apps/leaflet/?id=53" };

export const sprainsAnswers: LearnArticle[] = [
  {
    id: "spr-what-it-is",
    kicker: "Understanding",
    question: "What is the difference between a sprain and a strain?",
    hook: "One is a ligament, the other a muscle. Both are common, and most can be looked after at home.",
    short: "A sprain is a torn or twisted ligament, the tissue that connects the joints. A strain is an overstretched or torn muscle, also known as a pulled muscle. Both are common injuries, and most can be treated at home without seeing a GP.",
    sections: [
      {
        heading: "Two kinds of soft tissue injury",
        paragraphs: [
          "Sprains and strains are common injuries affecting the muscles and ligaments. Most can be treated at home without seeing a GP.",
          "Soft tissues include ligaments, muscles and tendons. These soft areas of the body can become injured after a trauma like a strain, sprain or overload.",
        ],
      },
      {
        heading: "A sprain: a ligament",
        paragraphs: [
          "A sprain is a torn or twisted ligament, the tissue that connects the joints. Sprains are most common in the wrists, ankles, thumbs and knees.",
          "NICE's clinical summary describes a sprain as a stretch or tear of a ligament, caused by abnormal or excessive forces on a joint. Sprains are graded from mild stretching of the ligament to a complete rupture, when the joint becomes unstable.",
        ],
      },
      {
        heading: "A strain: a muscle",
        paragraphs: [
          "A strain is an overstretched or torn muscle, also known as a pulled muscle. Strains are most common in the feet, legs and back.",
          "A strain happens either because a muscle has been stretched beyond its limits or because it has been forced to contract too strongly. In a mild strain only a few muscle fibres are stretched or torn. In a severe strain the muscle tears all the way through.",
        ],
      },
      {
        heading: "How they happen",
        paragraphs: [
          "Sprains and strains happen when you overstretch or twist a muscle. Not warming up before exercising, tired muscles and playing sport are common causes.",
          "Ankle sprains occur when you roll, twist or turn your ankle in a forceful way, and most happen when you twist your foot inwards, resulting in pain to the outside ligaments. Most foot or ankle pain is short term and caused by soft tissue injuries such as sprains or strains.",
          "NICE's clinical summary says around 30 to 50 in every 100 bone, joint and muscle injuries are reported as sprains or strains.",
        ],
      },
    ],
    helps: [
      "Most sprains and strains can be treated at home without seeing a GP.",
      "Speak to a pharmacist about the best treatment for you.",
      "As soon as you can, start moving and using the injured area: too much rest can slow down recovery.",
      "Get help from NHS 111 if it is very painful or the pain is getting worse.",
      "Call 999 or go to A&E if you heard a crack, or the injured part has changed shape or is at an odd angle.",
    ],
    tryThisWeek: [
      "Ask a pharmacist about treatment.",
      "Start moving the injured area when you can.",
      "Know when to call NHS 111.",
    ],
    ask: "Is my injury a sprain or a strain, and how bad is it?",
    interactive: {
      kind: "flip-cards",
      title: "Sprain or strain, card by card",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "sprain", front: "Sprain", when: "An injury to a ligament", back: "A torn or twisted ligament, the tissue that connects the joints. Most common in wrists, ankles, thumbs and knees." },
        { id: "strain", front: "Strain", when: "An injury to a muscle", back: "An overstretched or torn muscle, also known as a pulled muscle. Most common in feet, legs and back." },
        { id: "soft-tissue", front: "Soft tissues", when: "What can be injured", back: "Ligaments, muscles and tendons. They can be injured after a strain, sprain or overload." },
        { id: "mild", front: "A mild sprain", when: "The least severe grade", back: "Mild stretching of the ligament, without the joint becoming unstable." },
        { id: "severe", front: "A severe strain", when: "The most severe grade", back: "The muscle tears all the way through." },
      ],
    },
    sources: [NHS_SPRAINS, CKS_DEFINITION, CKS_PREVALENCE, NHSI_SOFT, AU_FOOT, CSP_FOOT_CAUSES],
    quiz: {
      question: "Which of these is a sprain?",
      options: [{ text: "A torn or twisted ligament", right: true }, { text: "An overstretched muscle" }, { text: "A broken bone" }],
      why: "A sprain is a torn or twisted ligament, the tissue that connects the joints.",
    },
  },
  {
    id: "spr-symptoms",
    kicker: "Symptoms",
    question: "What does a sprain or strain feel like?",
    hook: "Pain, tenderness, swelling and bruising. The bruise can take a day to show.",
    short: "It is likely to be a sprain or strain if you have pain, tenderness or weakness, the area is swollen or bruised, you cannot put weight on it or use it normally, or you have muscle spasms or cramping. They are most often around the ankle, foot, wrist, thumb, knee, leg or back.",
    sections: [
      {
        heading: "The usual signs",
        paragraphs: [
          "It is likely to be a sprain or strain if you have pain, tenderness or weakness, usually around your ankle, foot, wrist, thumb, knee, leg or back. The injured area may be swollen or bruised.",
          "You may not be able to put weight on the injury or use it normally. You may have muscle spasms or cramping, where your muscles painfully tighten on their own.",
        ],
      },
      {
        heading: "A sprain",
        paragraphs: [
          "Symptoms of a sprain typically include pain around the affected joint, tenderness, swelling, bruising, pain on weight-bearing and decreased function. After a severe injury the joint may feel unstable, as if it is giving way.",
          "With an ankle sprain there may be pain on the outside of the ankle when you put weight on it or touch it, swelling and sometimes some bruising, and pain on, or limited movement of, the ankle.",
        ],
      },
      {
        heading: "A strain",
        paragraphs: [
          "Symptoms of a strain typically include muscle pain, cramping and spasm, muscle weakness, inflammation and bruising.",
          "With a hamstring injury you may feel a sharp pain in the back of the leg. If the injury is severe, you may also feel a snapping sensation or hear a pop. The back of the thigh may feel tender and become swollen and bruised after a few hours.",
        ],
      },
      {
        heading: "Why it swells",
        paragraphs: [
          "After an injury your body works hard to repair, recover and renew the affected area. The process starts with inflammation, which often causes pain in and around the area, swelling, mild heat and redness.",
          "Bruising may take up to 24 hours to appear. Generally, the first few days are the worst for pain and limited movement.",
        ],
      },
    ],
    helps: [
      "Follow the PRICE steps for the first 2 to 3 days to help bring down swelling and support the injury.",
      "Be ready to say how and when the injury happened: a GP will ask about this.",
      "Get help from NHS 111 if there is a large amount of swelling or bruising, or it is getting worse.",
      "Get help from NHS 111 if you also have a very high temperature, or feel hot, cold or shivery: this could be an infection.",
      "See a GP if it is getting worse or not feeling better after treating it yourself.",
    ],
    tryThisWeek: [
      "Follow PRICE for 2 to 3 days.",
      "Note how and when it happened.",
      "Call 111 if the swelling gets worse.",
    ],
    ask: "Do my symptoms fit a sprain or a strain, or could it be something else?",
    interactive: {
      kind: "signs",
      title: "What have you noticed?",
      intro: "Tick what you have noticed. The ones you tick become a list to share with a pharmacist, GP or NHS 111.",
      signs: [
        "Pain, tenderness or weakness",
        "Swelling",
        "Bruising",
        "I cannot put weight on it or use it normally",
        "Muscle spasms or cramping",
        "The joint feels like it is giving way",
        "A pop or snapping feeling when it happened",
        "A very high temperature, or hot and shivery",
      ],
      after: "Get help from NHS 111 if the pain or swelling is getting worse, or you have a very high temperature. Call 999 or go to A&E if you heard a crack or it is at an odd angle.",
      copyHeading: "My injury: what I have noticed",
    },
    sources: [NHS_SPRAINS, CKS_SUMMARY, CKS_ASSESSMENT, NHS_HAMSTRING, CSP_FOOT_CAUSES, NHSI_SOFT],
    quiz: {
      question: "How long can bruising take to appear?",
      options: [{ text: "Up to 24 hours", right: true }, { text: "It always shows straight away" }, { text: "About a month" }],
      why: "Bruising may take up to 24 hours to appear.",
    },
  },
  {
    id: "spr-serious",
    kicker: "Urgent help",
    question: "How can I tell if it is more than a sprain?",
    hook: "A crack, an odd angle, numbness, or skin that turns blue or cold: signs a bone may be broken.",
    short: "Call 999 or go to A&E if you heard a crack when you were injured, the injured part has changed shape or is at an odd angle, it is numb or tingling, or the skin is blue, grey or cold. Get help from NHS 111 if it is very painful, very swollen, you cannot put weight on it, or it is not getting better.",
    sections: [
      {
        heading: "Call 999 or go to A&E",
        paragraphs: [
          "Call 999 or go to A&E if you heard a crack when you had your injury, or the injured body part has changed shape or is pointing at an odd angle.",
          "Also call 999 or go to A&E if the injured body part is numb, tingling or has pins and needles, or the skin around it has changed colour, such as looking blue or grey, or is cold to touch. You may have broken a bone and will need an X-ray.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance. Bring any medicines you take with you.",
        ],
      },
      {
        heading: "Get help from NHS 111",
        paragraphs: [
          "Get help from NHS 111 if it is very painful or the pain is getting worse, if there is a large amount of swelling or bruising, or if the swelling or bruising is getting worse.",
          "Also get help from NHS 111 if you cannot put any weight on it or walk more than a few steps, it feels very stiff or is difficult to move, or it is not feeling any better after treating it yourself. A very high temperature, or feeling hot, cold or shivery, could be an infection.",
          "You can call 111 or get help from 111 online. You could also go to an urgent treatment centre.",
        ],
      },
      {
        heading: "Sprain or broken bone?",
        paragraphs: [
          "It can be hard to tell if a wrist is broken, dislocated or badly sprained, and you will probably need an X-ray. Do not worry if you are not sure whether an ankle is broken: get it checked by a doctor.",
          "Sudden sharp pain, swelling, a popping or snapping sound during the injury, difficulty walking or an ankle at an odd angle can be signs of a broken ankle. If you think you may have broken your ankle, do not try to treat it yourself. Contact NHS 111 to find out what to do.",
        ],
      },
      {
        heading: "What a doctor looks for",
        paragraphs: [
          "NICE's guidance for GPs says to ask how and when the injury happened, and to look for swelling, bruising, or a change of shape that may suggest a broken bone or dislocation. It helps them decide whether an X-ray is needed.",
          "Many ankle sprains do not need professional treatment. The Chartered Society of Physiotherapy says that if the bone is very tender, or you are unable to take any weight on the ankle after the injury, it is sensible to get it checked by a professional to rule out a fracture.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E if you heard a crack, or the injured part has changed shape or is at an odd angle.",
      "Call 999 or go to A&E if the injured part is numb or tingling, or the skin is blue, grey or cold.",
      "Do not drive to A&E: ask someone to drive you or call 999 for an ambulance.",
      "Get help from NHS 111 if you cannot put any weight on it or walk more than a few steps.",
      "If you think you may have broken your ankle, do not try to treat it yourself. Contact NHS 111.",
    ],
    tryThisWeek: [
      "Learn the 999 signs: a crack, an odd angle.",
      "Never drive yourself to A&E.",
      "Call 111 if you cannot bear weight.",
    ],
    ask: "Do I need an X-ray to rule out a broken bone?",
    interactive: {
      kind: "scenarios",
      title: "Where to get help",
      scenarios: [
        {
          id: "crack",
          situation: "You heard a crack as you fell, and your wrist now looks bent.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Rest it at home and see" }],
          why: "Call 999 or go to A&E if you heard a crack when you had your injury, or the injured body part has changed shape or is pointing at an odd angle.",
        },
        {
          id: "weight",
          situation: "After twisting your ankle, you cannot walk more than a few steps.",
          options: [{ text: "Get help from NHS 111", best: true }, { text: "Wait a few weeks to see" }],
          why: "Get help from NHS 111 if you cannot put any weight on it or walk more than a few steps.",
        },
        {
          id: "drive",
          situation: "You need to get to A&E and your car is outside.",
          options: [{ text: "Ask someone to drive you, or call 999", best: true }, { text: "Drive yourself there" }],
          why: "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        },
        {
          id: "fever",
          situation: "A few days after the injury you feel hot, cold and shivery.",
          options: [{ text: "Get help from NHS 111", best: true }, { text: "Put a heat pack on it" }],
          why: "A very high temperature, or feeling hot, cold or shivery, could be an infection.",
        },
      ],
    },
    sources: [NHS_SPRAINS, NHS_ANKLE, NHS_BROKEN_ANKLE, NHS_BROKEN_ARM, CKS_ASSESSMENT, CSP_FOOT_CAUSES],
    quiz: {
      question: "Which of these means calling 999 or going to A&E?",
      options: [{ text: "The injured part is pointing at an odd angle", right: true }, { text: "Mild bruising" }, { text: "Stiffness the next morning" }],
      why: "Call 999 or go to A&E if you heard a crack when you had your injury, or the injured body part has changed shape or is pointing at an odd angle.",
    },
  },
  {
    id: "spr-healing",
    kicker: "Recovery",
    question: "How long does a sprain or strain take to heal?",
    hook: "Two weeks to feel better, for most. Longer before running. Months for the worst.",
    short: "After 2 weeks, most sprains and strains will feel better. Strenuous exercise such as running is best avoided for up to 8 weeks, as there is a risk of further damage. Severe sprains and strains can take months to get back to normal.",
    sections: [
      {
        heading: "Most feel better in a couple of weeks",
        paragraphs: [
          "After 2 weeks, most sprains and strains will feel better. Avoid strenuous exercise such as running for up to 8 weeks, as there is a risk of further damage.",
          "Severe sprains and strains can take months to get back to normal.",
        ],
      },
      {
        heading: "It depends how bad it is",
        paragraphs: [
          "NICE's clinical summary says the outlook largely depends on how severe the injury is. A mild injury will usually heal within a few weeks. A moderate injury should heal within a few weeks, but there is a high risk of injuring it again in the first 4 to 6 weeks.",
          "A severe injury may take months to heal fully, and may need surgery. Most people can expect to regain full function and return to their usual activities, although some have stiffness or weakness for a while after healing.",
        ],
      },
      {
        heading: "An ankle sprain",
        paragraphs: [
          "University Hospitals Sussex says most people feel better after a few days, and full healing can take about six weeks, depending on how bad the sprain is. You are more likely to sprain your ankle again if it has not fully healed.",
          "Other NHS trusts say minor sprains recover within a few weeks, while more severe sprains can take up to three months to feel normal again and for the swelling to go completely. Sometimes swelling can continue for up to 12 months.",
        ],
      },
      {
        heading: "What can slow it down",
        paragraphs: [
          "Recovery may be delayed after a previous injury to the same area, when rehabilitation exercises are not kept up, with high physical demands or an early return to sport or work, and with other conditions such as obesity or diabetes.",
          "Early use of rest, ice, compression and elevation, followed by a graded return to activity, is linked with faster recovery and a lower risk of the injury coming back.",
        ],
      },
      {
        heading: "When to get it checked",
        paragraphs: [
          "The Chartered Society of Physiotherapy says the majority of bone, joint and muscle conditions get better within six to eight weeks. NHS inform suggests talking to a healthcare professional if an ankle problem has not improved within 6 weeks, or gets worse.",
          "See a GP if you think you have a sprain or strain and it is getting worse or not feeling better after treating it yourself.",
        ],
      },
    ],
    helps: [
      "Avoid strenuous exercise such as running for up to 8 weeks.",
      "Keep up your rehabilitation exercises: not doing them can delay recovery.",
      "Take care on uneven ground, on stairs and in unsupportive footwear until the ankle has fully healed.",
      "Talk to a healthcare professional if an ankle problem has not improved within 6 weeks, or is getting worse.",
      "See a GP if it is getting worse or not feeling better after treating it yourself.",
    ],
    tryThisWeek: [
      "Hold off running for now.",
      "Keep up your exercises.",
      "Take care on uneven ground.",
    ],
    ask: "How bad is my injury, and how long should it take to heal?",
    interactive: {
      kind: "timeline",
      title: "From injury to back to normal",
      steps: [
        { id: "first", when: "Days 1 to 3", title: "The first few days", points: ["Rest, ice, compression and elevation early on.", "Most people feel better after a few days."] },
        { id: "two", when: "About 2 weeks", title: "Feeling better", points: ["Most sprains and strains will feel better.", "See a GP if it is not feeling better."] },
        { id: "six", when: "4 to 6 weeks", title: "Still healing", points: ["After a moderate injury, a high risk of injuring it again.", "Full healing of an ankle sprain can take about six weeks."] },
        { id: "eight", when: "Up to 8 weeks", title: "Strenuous exercise", points: ["Avoid running for up to 8 weeks.", "A graded return to activity."] },
        { id: "months", when: "Months", title: "Severe injuries", points: ["Severe sprains and strains can take months.", "Swelling can sometimes continue for up to 12 months."] },
      ],
    },
    sources: [NHS_SPRAINS, CKS_PROGNOSIS, NHSI_ANKLE, UHSX, PAH, NLG, CSP_ANKLE],
    quiz: {
      question: "After how long will most sprains and strains feel better?",
      options: [{ text: "After 2 weeks", right: true }, { text: "After 2 days" }, { text: "After 6 months" }],
      why: "After 2 weeks, most sprains and strains will feel better.",
    },
  },
  {
    id: "spr-first-days",
    kicker: "First aid",
    question: "What should I do in the first few days?",
    hook: "Protect, rest, ice, compress, raise. And keep heat, alcohol and massage away for a couple of days.",
    short: "For the first 2 to 3 days, the NHS suggests the 5 steps known as PRICE: protection, rest, ice, compression and elevation. Avoid heat, alcohol and massages for the first couple of days to help prevent swelling. Once pain no longer stops you, keep the area moving so it does not get stiff.",
    sections: [
      {
        heading: "The five PRICE steps",
        paragraphs: [
          "For the first 2 to 3 days after a sprain or strain, follow the 5 steps known as PRICE therapy to help bring down swelling and support the injury.",
          "Protect the injury, for example by using a support, or shoes that support your foot or ankle. Rest: stop any exercise or activities and try not to put any weight on the injury.",
          "Apply an ice pack, or a bag of frozen vegetables wrapped in a tea towel, for up to 20 minutes every 2 to 3 hours. Wrap a bandage around the injury to support it during the day, and keep it raised on a pillow as much as possible.",
        ],
      },
      {
        heading: "Ice and compression, safely",
        paragraphs: [
          "Never place ice directly on your skin. Use a barrier, like a towel, to protect your skin from a burn. If you have any issues with circulation or sensation, ice should not be used for swelling.",
          "A compression bandage should be snug but not tight, and taken off before going to sleep. Ice should not be left on while you are asleep.",
          "Advice on how long to use ice varies a little. NHS inform suggests up to 15 minutes, leaving a few hours between treatments.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "To help prevent swelling, try to avoid heat, such as hot baths and heat packs, alcohol and massages for the first couple of days.",
          "University Hospitals Sussex lists the same things to avoid in the first 48 hours after an ankle sprain: hot baths or showers, heat packs or heat rubs, alcohol and massage, as they might make symptoms worse.",
        ],
      },
      {
        heading: "Rest, but not too much",
        paragraphs: [
          "When you can move the injured area without pain stopping you, try to keep moving it so the joint or muscle does not become stiff.",
          "Too much rest can slow down your recovery. A little activity is better than nothing, and you do not need to be pain free. For an ankle, NHS inform suggests moving it gently for 10 to 20 seconds every hour while you are awake in the first 24 to 48 hours.",
        ],
      },
    ],
    helps: [
      "Follow PRICE for the first 2 to 3 days: protection, rest, ice, compression and elevation.",
      "Wrap ice in a tea towel and apply it for up to 20 minutes every 2 to 3 hours.",
      "Keep the injury raised on a pillow as much as possible.",
      "Avoid heat, alcohol and massages for the first couple of days.",
      "Take a compression bandage off before going to sleep.",
      "Once pain no longer stops you, keep moving the area so it does not get stiff.",
    ],
    tryThisWeek: [
      "Follow PRICE for 2 to 3 days.",
      "Ice for up to 20 minutes at a time.",
      "Skip hot baths and alcohol at first.",
    ],
    ask: "Should I rest this injury completely, or start moving it now?",
    interactive: {
      kind: "flip-cards",
      title: "PRICE, card by card",
      intro: "Turn each card to see what each step means in the first 2 to 3 days.",
      cards: [
        { id: "protection", front: "Protection", when: "From the start", back: "Protect the injury, for example with a support, or shoes that support your foot or ankle." },
        { id: "rest", front: "Rest", when: "The first 2 to 3 days", back: "Stop any exercise or activities and try not to put any weight on the injury." },
        { id: "ice", front: "Ice", when: "Up to 20 minutes, every 2 to 3 hours", back: "An ice pack or frozen vegetables wrapped in a tea towel. Never directly on your skin." },
        { id: "compression", front: "Compression", when: "During the day", back: "A bandage around the injury to support it. Snug but not tight, and off before sleep." },
        { id: "elevation", front: "Elevation", when: "As much as possible", back: "Keep the injury raised on a pillow." },
      ],
    },
    sources: [NHS_SPRAINS, CKS_MANAGEMENT, NHSI_SOFT, NHSI_ANKLE, NHS_HAMSTRING, UHSX],
    quiz: {
      question: "What should be avoided for the first couple of days to help prevent swelling?",
      options: [{ text: "Heat, alcohol and massages", right: true }, { text: "Raising the injury on a pillow" }, { text: "Ice wrapped in a towel" }],
      why: "To help prevent swelling, try to avoid heat, such as hot baths and heat packs, alcohol and massages for the first couple of days.",
    },
  },
  {
    id: "spr-painkillers",
    kicker: "Treatment",
    question: "Which painkillers help a sprain or strain?",
    hook: "Paracetamol, ibuprofen gel, then tablets if needed. And why some advice says wait 48 hours for anti-inflammatories.",
    short: "A pharmacist can suggest the best treatment. At first, the NHS suggests paracetamol to ease the pain and ibuprofen gel, mousse or spray to bring down swelling, with ibuprofen tablets if needed. Some sources advise holding off anti-inflammatory medicines for the first 48 hours, so it is worth asking a pharmacist what suits you.",
    sections: [
      {
        heading: "Start with a pharmacist",
        paragraphs: [
          "Speak to a pharmacist about the best treatment for you. They might suggest tablets, or a cream or gel you rub on the skin.",
          "At first, try painkillers like paracetamol to ease the pain and ibuprofen gel, mousse or spray to bring down swelling. If needed, you can take ibuprofen tablets, capsules or syrup that you swallow.",
        ],
      },
      {
        heading: "Paracetamol",
        paragraphs: [
          "For 500mg tablets and capsules, one dose is 1 or 2 tablets or capsules. Leave at least 4 hours between doses, and do not take more than 8 in 24 hours.",
          "Do not take paracetamol for more than 3 days unless a doctor tells you to. Avoid taking it at the same time as other medicines containing paracetamol, such as cold and flu remedies.",
        ],
      },
      {
        heading: "Ibuprofen",
        paragraphs: [
          "Ibuprofen is a painkiller that helps relieve pain and reduce swelling. It can cause more side effects than paracetamol, and you are less likely to get side effects from ibuprofen gel or spray.",
          "Do not take ibuprofen tablets and capsules for more than 10 days unless advised to by a doctor. NHS inform says not to take ibuprofen if you have stomach problems such as ulcers, have had an allergic reaction to it before, or are pregnant, and that it may make asthma worse.",
        ],
      },
      {
        heading: "Why the timing is debated",
        paragraphs: [
          "NHS inform says anti-inflammatory medicines such as ibuprofen should only be considered 48 hours after an injury, because used earlier they may affect healing in some conditions. Arthritis UK also suggests avoiding ibuprofen in the first few days after a foot or ankle injury.",
          "NICE's clinical summary recommends paracetamol or an anti-inflammatory gel, such as ibuprofen gel, first, with ibuprofen tablets if needed. If pain relief is your main concern, your doctor or pharmacist can help work out which medicine is right for you.",
          "If you feel you still need pain relief after 4 days, speak to your pharmacist for advice.",
        ],
      },
    ],
    helps: [
      "Speak to a pharmacist about the best treatment for you.",
      "Always follow the instructions on the packet.",
      "Take the smallest dose of ibuprofen you need for the shortest time you need it.",
      "Check with a pharmacist before taking painkillers if you take other medicines or have other health problems.",
      "If you still need pain relief after 4 days, speak to your pharmacist.",
      "Get help from NHS 111 if you have taken more ibuprofen than it says on the packet.",
    ],
    tryThisWeek: [
      "Ask a pharmacist which suits you.",
      "Follow the instructions on the packet.",
      "Check in if you need it after 4 days.",
    ],
    ask: "Which painkiller is safe for me, and when should I start an anti-inflammatory?",
    interactive: {
      kind: "flip-cards",
      title: "Pain relief, card by card",
      intro: "Turn each card to see what the NHS, NHS inform and NICE say about each one.",
      cards: [
        { id: "paracetamol", front: "Paracetamol", when: "To ease the pain", back: "1 or 2 500mg tablets a dose, 4 hours apart, no more than 8 in 24 hours. Not for more than 3 days unless a doctor says." },
        { id: "gel", front: "Ibuprofen gel or spray", when: "To bring down swelling", back: "Rubbed on the painful area. You are less likely to get side effects than with tablets." },
        { id: "tablets", front: "Ibuprofen tablets", when: "If needed", back: "Not for more than 10 days unless a doctor advises. Not with stomach ulcers or in pregnancy." },
        { id: "timing", front: "Anti-inflammatories", when: "When to start", back: "NHS inform says only consider them 48 hours after an injury, as earlier use may affect healing." },
        { id: "pharmacist", front: "A pharmacist", when: "Not sure what to take", back: "Can suggest tablets, or a cream or gel, and check painkillers against your other medicines." },
      ],
    },
    sources: [NHS_SPRAINS, NHS_PARACETAMOL, NHS_IBUPROFEN, NHSI_PAINKILLERS, NHSI_SOFT, CKS_MANAGEMENT, AU_FOOT],
    quiz: {
      question: "How long after an injury does NHS inform suggest waiting before considering anti-inflammatory medicines?",
      options: [{ text: "48 hours", right: true }, { text: "2 weeks" }, { text: "No wait at all" }],
      why: "NHS inform says anti-inflammatory medicines such as ibuprofen should only be considered 48 hours after an injury, because used earlier they may affect healing in some conditions.",
    },
  },
  {
    id: "spr-moving",
    kicker: "Exercise",
    question: "When should I start moving it, and which exercises help?",
    hook: "Gentle movement early, as pain allows. Point, circle, stretch, and build up a little at a time.",
    short: "Too much rest can slow recovery, so start moving and using the injured area as soon as you can. Gentle ankle exercises, such as pointing the foot up and down, making circles and writing the alphabet with your foot, are a common start. Get advice from a healthcare professional first if you have any concerns, and stop if an exercise makes things worse.",
    sections: [
      {
        heading: "Move early, as pain allows",
        paragraphs: [
          "Too much rest can slow down your recovery, so as soon as you can, start moving and using the affected area. A little activity is better than nothing, and you do not need to be pain free.",
          "University Hospitals Sussex says the earlier you start gentle exercises, the better your recovery. The Chartered Society of Physiotherapy suggests gradually bringing back movement, encouraging gentle walking and moving the ankle through all movements as pain allows.",
        ],
      },
      {
        heading: "Simple ankle movements",
        paragraphs: [
          "University Hospitals Sussex suggests pointing your foot up and down, making circles with your foot and changing direction, and rocking your foot from side to side. Do each up to 10 times, two or three times a day, gently and only as far as feels comfortable.",
          "Writing an imaginary alphabet with your foot and ankle is a good starting exercise, says the Chartered Society of Physiotherapy. Arthritis UK suggests trying to write the whole alphabet twice a day.",
        ],
      },
      {
        heading: "Stretching and strengthening",
        paragraphs: [
          "For a calf stretch, sit with your leg straight out in front of you, put a towel round your foot and pull it up towards you, until you feel a stretch in the back of your calf.",
          "NHS inform's exercises include heel raises: stand in front of a wall or chair for support, slowly lift your heels as far as possible, hold for a few seconds, then slowly lower them. Try to hold stretches for 20 to 30 seconds if possible.",
        ],
      },
      {
        heading: "How much is right",
        paragraphs: [
          "NHS inform suggests rating your pain out of 10. Aim to keep pain during exercise between 0 and 5. If it goes above this, do fewer repetitions, move more slowly or rest longer between movements.",
          "Any extra pain should ease quickly and be no worse the morning after you have exercised. Stop exercises that make your symptoms worse or cause new pain.",
          "Start with 2 to 3 repetitions at a time, and add 1 or 2 every few days as it gets easier. Later, sets of 8 can help build strength, up to a maximum of 2 sets of 15.",
        ],
      },
      {
        heading: "Check first if you are unsure",
        paragraphs: [
          "People who have been diagnosed with an ankle condition or have had recent ankle surgery should follow the advice of their healthcare professional. Get advice from a healthcare professional if you have any concerns about starting a new exercise plan.",
        ],
      },
    ],
    helps: [
      "Start moving and using the injured area as soon as you can.",
      "Do gentle ankle exercises up to 10 times, two or three times a day.",
      "Keep pain during exercise at 5 out of 10 or below.",
      "Stop exercises that make your symptoms worse or cause new pain.",
      "Get advice from a healthcare professional first if you have concerns about starting a new exercise plan.",
    ],
    tryThisWeek: [
      "Move the injured area a little each day.",
      "Do gentle ankle moves 2 or 3 times a day.",
      "Keep pain at 5 out of 10 or below.",
    ],
    ask: "Which exercises should I start now, and how far should I push them?",
    interactive: {
      kind: "flip-cards",
      title: "Five early ankle moves",
      intro: "Check with your GP or physiotherapist first if you are unsure. Turn each card to see how the sources describe it.",
      cards: [
        { id: "up-down", front: "Point up and down", when: "Sitting or lying", back: "Point your foot up and down, gently and only as far as feels comfortable. Up to 10 times." },
        { id: "circles", front: "Foot circles", when: "Sitting", back: "Make circles with your foot, then change direction." },
        { id: "alphabet", front: "Alphabet writing", when: "A good starting exercise", back: "Write an imaginary alphabet with your foot and ankle. Arthritis UK suggests twice a day." },
        { id: "towel", front: "Towel calf stretch", when: "Sitting, leg straight", back: "Put a towel round your foot and pull it up towards you. Feel a stretch in the back of your calf." },
        { id: "heel-raise", front: "Heel raises", when: "Standing, with support", back: "Hold a wall or chair, slowly lift your heels as far as possible, hold, then slowly lower." },
      ],
    },
    sources: [NHSI_SOFT, NHSI_EX_ANKLE, UHSX, CSP_FOOT_TREATMENT, AU_EX_FEET],
    quiz: {
      question: "During exercise, what pain level does NHS inform suggest staying within?",
      options: [{ text: "0 to 5 out of 10", right: true }, { text: "Up to 10 out of 10" }, { text: "No pain at all" }],
      why: "Aim to keep pain during exercise between 0 and 5.",
    },
  },
  {
    id: "spr-physio",
    kicker: "Treatment",
    question: "Will I need physiotherapy, and how do I get it?",
    hook: "Most sprains get better without it. When one is slow to heal, a physiotherapist can help, often without a GP referral.",
    short: "If a sprain or strain is taking longer than usual to get better, physiotherapy may help. In many areas you can get NHS physiotherapy without a GP referral, though waiting times can be long. A physiotherapist checks how you move and gives you exercises to do at home.",
    sections: [
      {
        heading: "When it helps",
        paragraphs: [
          "If you have a sprain or strain that is taking longer than usual to get better, physiotherapy may help with your recovery.",
          "NICE's clinical summary suggests a routine referral to physiotherapy when symptoms are not improving as expected despite self-care. One NHS trust notes that physiotherapy is not normally needed after an ankle sprain, as movement returns to normal with time.",
        ],
      },
      {
        heading: "How to get it",
        paragraphs: [
          "In many areas you may be able to get physiotherapy from NHS community musculoskeletal services without needing a referral from a GP. You can also make an appointment with a GP, and some GP surgeries have first contact physiotherapists who can assess you.",
          "Physiotherapy from the NHS might not be available everywhere and waiting times can be long. You can also get physiotherapy privately: make sure the physiotherapist is chartered and registered with the Health and Care Professions Council.",
          "In Scotland, each local health board decides whether you can refer yourself or need a referral from a GP or other healthcare professional.",
        ],
      },
      {
        heading: "What happens",
        paragraphs: [
          "At your first appointment, the physiotherapist will ask about your symptoms, medical history and lifestyle. They may also feel the affected area and check things like your strength and balance.",
          "Treatment may include exercises to improve the movement of your joints and strengthen your muscles, manual therapy, and advice about how to manage your symptoms. You may be given exercises to do at home between sessions, and it is important to do them regularly.",
        ],
      },
      {
        heading: "Advice from physiotherapists",
        paragraphs: [
          "The Chartered Society of Physiotherapy's advice on foot pain says to seek professional advice after an injury if your symptoms are becoming worse or are not showing any signs of improvement within a few days. If your pain is not improving after two weeks, or the exercises make it worse, you could refer yourself to a physiotherapist.",
          "Most people do not need further treatment or tests, and a physiotherapist is well placed to advise if you do. They will monitor your progress and help you get back to your normal daily life.",
        ],
      },
    ],
    helps: [
      "Check whether you can refer yourself to NHS physiotherapy where you live.",
      "If your pain is not improving after two weeks, you could refer yourself to a physiotherapist.",
      "If you go private, choose a chartered physiotherapist registered with the Health and Care Professions Council.",
      "Do your home exercises regularly between sessions.",
      "Ask your GP surgery whether it has a first contact physiotherapist.",
    ],
    tryThisWeek: [
      "Check if you can refer yourself.",
      "Do your home exercises regularly.",
      "Ask about a first contact physio.",
    ],
    ask: "Would physiotherapy help my injury, and can I refer myself?",
    interactive: {
      kind: "scenarios",
      title: "Getting physiotherapy",
      scenarios: [
        {
          id: "slow",
          situation: "Weeks on, your sprain is taking longer than usual to get better.",
          options: [{ text: "Look into physiotherapy", best: true }, { text: "Simply keep resting it" }],
          why: "If you have a sprain or strain that is taking longer than usual to get better, physiotherapy may help with your recovery.",
        },
        {
          id: "referral",
          situation: "You are not sure whether you need a GP to refer you.",
          options: [{ text: "Check for local NHS self-referral", best: true }, { text: "Assume you need a GP letter" }],
          why: "In many areas you may be able to get physiotherapy from NHS community musculoskeletal services without needing a referral from a GP.",
        },
        {
          id: "private",
          situation: "You decide to pay for a private physiotherapist.",
          options: [{ text: "Check they are chartered and registered", best: true }, { text: "Pick the nearest one" }],
          why: "Make sure the physiotherapist is chartered and registered with the Health and Care Professions Council.",
        },
        {
          id: "homework",
          situation: "You are given exercises to do at home.",
          options: [{ text: "Do them regularly", best: true }, { text: "Save them for the next session" }],
          why: "You may be given exercises to do at home between sessions, and it is important to do them regularly.",
        },
      ],
    },
    sources: [NHS_SPRAINS, NHS_PHYSIO, CSP_FOOT_HELP, NHSI_MSK, CKS_MANAGEMENT, NLG],
    quiz: {
      question: "If a sprain is slow to get better, what may help?",
      options: [{ text: "Physiotherapy", right: true }, { text: "Resting it completely for months" }, { text: "A heat pack on the first day" }],
      why: "If you have a sprain or strain that is taking longer than usual to get better, physiotherapy may help with your recovery.",
    },
  },
  {
    id: "spr-return",
    kicker: "Everyday life",
    question: "When can I go back to sport and work?",
    hook: "Work often sooner than you think. Sport when the joint moves fully, without pain, and the strength is back.",
    short: "Strenuous exercise such as running is best avoided for up to 8 weeks after a sprain or strain, and the return to sport should be gradual. For work, you do not need to be symptom free: staying at work, or going back as soon as is possible for you, helps recovery.",
    sections: [
      {
        heading: "Back to sport, gradually",
        paragraphs: [
          "Avoid strenuous exercise such as running for up to 8 weeks, as there is a risk of further damage.",
          "NICE's clinical summary says athletes may return to play when they have a full, painless range of movement and their muscle strength is restored. A moderate injury carries a high risk of injuring it again in the first 4 to 6 weeks, and an early return to sport can delay recovery.",
        ],
      },
      {
        heading: "Building up",
        paragraphs: [
          "Returning to normal activity and sport should be a gradual process, guided by how the ankle's stability and strength recover. You might start with low-impact exercise, and avoid sports that need twisting or sudden changes of direction until the ankle feels stronger. Swimming may be possible sooner.",
          "More strenuous and sporting activities can be brought back gradually once the pain and swelling have settled down and normal walking is comfortable.",
          "For runners, the NHS says do not run if you are in pain, and only start again when you have recovered sufficiently. The time it takes for a muscle strain to heal and for you to start running again can be months, depending on how severe it is.",
        ],
      },
      {
        heading: "Back to work",
        paragraphs: [
          "Ankle problems can sometimes mean taking some time off work. You do not need to be symptom free before you consider returning, and continuing to go to work, or returning as soon as is possible for you, will help your recovery.",
          "One NHS trust suggests going back to a desk job once you can sit comfortably, and to a physical job once your pain has improved, your ankle is stronger and you can do your usual tasks with little pain or tiredness.",
        ],
      },
      {
        heading: "Driving",
        paragraphs: [
          "Northern Lincolnshire and Goole NHS Foundation Trust says not to drive while wearing a boot or ankle splint. You can start driving again once you have regained the strength and movement in your ankle and can control the vehicle safely without pain, including doing an emergency stop.",
          "You may have to tell your insurance company about the injury and that you are planning to return to driving.",
        ],
      },
    ],
    helps: [
      "Avoid strenuous exercise such as running for up to 8 weeks.",
      "Return to sport gradually, starting with low-impact exercise.",
      "Avoid sports with twisting or sudden changes of direction until the ankle feels stronger.",
      "Stay at work, or go back as soon as is possible for you: it helps recovery.",
      "Do not run if you are in pain.",
      "Do not drive while wearing a boot or ankle splint.",
    ],
    tryThisWeek: [
      "Start with low-impact exercise.",
      "Stay at, or return to, work if you can.",
      "Do not run while it hurts.",
    ],
    ask: "When is it safe for me to go back to my sport, and to my job?",
    interactive: {
      kind: "scenarios",
      title: "Back to it",
      scenarios: [
        {
          id: "run",
          situation: "Two weeks on, it feels better and you want to go for a run.",
          options: [{ text: "Hold off strenuous exercise for now", best: true }, { text: "Run your usual distance" }],
          why: "Avoid strenuous exercise such as running for up to 8 weeks, as there is a risk of further damage.",
        },
        {
          id: "football",
          situation: "You are ready for exercise, but your sport means twisting and turning.",
          options: [{ text: "Start with low-impact exercise", best: true }, { text: "Go straight back to matches" }],
          why: "You might start with low-impact exercise, and avoid sports that need twisting or sudden changes of direction until the ankle feels stronger.",
        },
        {
          id: "work",
          situation: "Your ankle still aches a little, and you have a desk job.",
          options: [{ text: "Go back once you can sit comfortably", best: true }, { text: "Wait until every symptom has gone" }],
          why: "You do not need to be symptom free before you consider returning, and continuing to go to work, or returning as soon as is possible for you, will help your recovery.",
        },
        {
          id: "drive",
          situation: "You have been given a walking boot and need to get to work.",
          options: [{ text: "Do not drive while wearing it", best: true }, { text: "Drive carefully in it" }],
          why: "Northern Lincolnshire and Goole NHS Foundation Trust says not to drive while wearing a boot or ankle splint.",
        },
      ],
    },
    sources: [NHS_SPRAINS, CKS_MANAGEMENT, CKS_PROGNOSIS, NHSI_ANKLE, NLG, PAH, NHS_RUNNING],
    quiz: {
      question: "When does NICE's summary say athletes may return to play?",
      options: [{ text: "With full, painless movement and strength restored", right: true }, { text: "As soon as the bruising fades" }, { text: "After exactly one week" }],
      why: "NICE's clinical summary says athletes may return to play when they have a full, painless range of movement and their muscle strength is restored.",
    },
  },
  {
    id: "spr-prevention",
    kicker: "Prevention",
    question: "How can I lower the chance of a sprain or strain?",
    hook: "You cannot always prevent them. But a proper warm-up, the right shoes and building up slowly all help.",
    short: "You cannot always prevent sprains and strains, but not warming up, tired muscles and playing sport are common causes. The NHS suggests a warm-up of at least 6 minutes before exercise, building fitness up gradually and not exercising when tired. NICE's summary adds cooling down, the right shoes and equipment, and regular days off.",
    sections: [
      {
        heading: "Common causes",
        paragraphs: [
          "You cannot always prevent sprains and strains. They happen when you overstretch or twist a muscle, and not warming up before exercising, tired muscles and playing sport are common causes.",
          "NICE's clinical summary lists other things that raise the risk, including weaker, less flexible muscles from a lack of regular exercise, poor exercise technique, unsuitable footwear, and not warming up before or cooling down after exercise.",
        ],
      },
      {
        heading: "A simple warm-up",
        paragraphs: [
          "Warm up properly before exercising to prevent injury. The NHS warm-up routine takes at least 6 minutes. It starts with marching on the spot for 3 minutes, then heel digs, knee lifts, shoulder rolls and knee bends.",
          "Before running, five to 10 minutes of brisk walking or gentle jogging will warm your muscles up and help prevent injury. To cool down, carry on at an easier pace or walk for 5 to 10 minutes.",
          "Get advice from a healthcare professional, such as a GP, before trying the NHS exercise videos if you have an injury, a health problem or any symptoms.",
        ],
      },
      {
        heading: "Build up slowly",
        paragraphs: [
          "Improve your fitness levels gradually if you have not done much exercise in a while, and avoid strenuous sports like football until you feel fit enough. Do not exercise if you are feeling tired, as you are more likely to get an injury if your muscles are tired.",
          "Do not increase the intensity or distance of your running too quickly. Do a similar run at least 3 or 4 times before you increase your pace or distance.",
        ],
      },
      {
        heading: "Kit, rest and strength",
        paragraphs: [
          "NICE's summary also advises using proper equipment, wearing appropriate shoes and replacing them as they wear out, and scheduling regular days off from exercise. It suggests a balanced fitness programme with cardiovascular exercise, strength training and flexibility, adding new activities cautiously.",
          "Stop any sport or exercise if you start to feel pain in your hamstrings. After an ankle sprain, strengthening your ankles can help prevent future injuries.",
        ],
      },
    ],
    helps: [
      "Warm up for at least 6 minutes before exercising.",
      "Do not exercise when you are feeling tired.",
      "Build your fitness up gradually if you have not exercised in a while.",
      "Wear appropriate shoes, and replace them as they wear out.",
      "Cool down after exercise, and schedule regular days off.",
      "Stop any sport or exercise if you start to feel pain in your hamstrings.",
    ],
    tryThisWeek: [
      "Warm up for 6 minutes first.",
      "Skip exercise when you are tired.",
      "Check your shoes are not worn out.",
    ],
    ask: "Is there anything about how I exercise that makes another injury more likely?",
    interactive: {
      kind: "risk-check",
      title: "What raises the risk?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "warm-up", label: "Not warming up", note: "Not warming up before exercising is a common cause of sprains and strains.", changeable: true },
        { id: "tired", label: "Exercising when tired", note: "You are more likely to get an injury if your muscles are tired.", changeable: true },
        { id: "shoes", label: "Unsuitable or worn-out shoes", note: "Inappropriate footwear can increase the risk of ankle sprains and strains.", changeable: true },
        { id: "fitness", label: "Little regular exercise", note: "A lack of regular exercise can weaken muscles and joints, making them less flexible.", changeable: true },
        { id: "too-fast", label: "Overtraining, too little rest", note: "Overtraining and too little recovery time are major contributors to injury risk.", changeable: true },
        { id: "previous", label: "A previous sprain or strain", note: "A past injury raises the risk. Strengthening your ankles can help prevent future injuries.", changeable: false },
        { id: "age", label: "Getting older", note: "One review found increasing age was a strong risk factor for future calf muscle injury.", changeable: false },
      ],
    },
    sources: [NHS_SPRAINS, NHS_WARM_UP, NHS_HAMSTRING, NHS_RUNNING, CKS_MANAGEMENT, CKS_RISK, UHSX],
    quiz: {
      question: "How long does the NHS warm-up routine take, at least?",
      options: [{ text: "6 minutes", right: true }, { text: "30 seconds" }, { text: "An hour" }],
      why: "The NHS warm-up routine takes at least 6 minutes.",
    },
  },
  {
    id: "spr-repeat",
    kicker: "Living with it",
    question: "Why does my ankle keep giving way?",
    hook: "After a sprain, an ankle can stay wobbly. Balance and strength work, and a check-up, can help.",
    short: "After a severe sprain, a joint can feel unstable, as if it is giving way. An ankle that has not fully healed is more likely to be sprained again, and NICE's summary links ankle sprains with repeat sprains and long-term instability, especially without proper rehabilitation. Balance and strengthening exercises help, and pain that keeps coming back is worth a GP check.",
    sections: [
      {
        heading: "Giving way after a sprain",
        paragraphs: [
          "After a severe sprain there may be joint instability, a feeling of the joint giving way. NICE's clinical summary describes chronic instability, loss of function, long-term pain and swelling, and a risk of injuring it again as complications, particularly after severe sprains.",
          "It says ankle sprains are strongly linked with repeat sprains and chronic ankle instability. That instability can affect up to 70 in every 100 people who have had an ankle sprain, especially if the ankle was not properly rehabilitated.",
        ],
      },
      {
        heading: "Why it happens again",
        paragraphs: [
          "You are more likely to sprain your ankle again if it has not fully healed. University Hospitals Sussex suggests being careful when walking on uneven ground, going up or down stairs, and wearing unsupportive footwear.",
          "NICE's summary lists a previous sprain or strain, reduced balance and a reduced sense of the joint's position among the things that may increase the risk of ankle sprains.",
        ],
      },
      {
        heading: "Balance and strength",
        paragraphs: [
          "Whittington Health calls its balance exercise the most important exercise, as it can help prevent future sprains. Using a stable object such as a kitchen counter for support, balance on the injured foot, building up towards one minute.",
          "Arthritis UK suggests making it harder once you feel confident, by standing on a cushion or pillow. When you can easily balance on a pillow, it suggests going back to the floor and trying the basic balance with your eyes closed.",
          "University Hospitals Sussex advises strengthening your ankles to help prevent future injuries, and staying active once you have healed to keep that strength.",
        ],
      },
      {
        heading: "Getting it checked",
        paragraphs: [
          "See a GP if ankle pain is getting worse or keeps coming back. Occasionally an ankle sprain stays painful even after several months, and a small number of people develop instability. If problems continue, a GP can refer you to an ankle specialist.",
          "Ongoing instability sometimes needs surgery, but this is relatively uncommon. NICE's summary says a physiotherapist can consider external support, such as bracing or taping, if it is needed.",
        ],
      },
    ],
    helps: [
      "Practise balancing on the injured foot, holding a kitchen counter, building up towards one minute.",
      "Take any opportunity to practise standing on one leg in your daily activities.",
      "Take care on uneven ground and stairs until the ankle has fully healed.",
      "Strengthen your ankles to help prevent future injuries.",
      "See a GP if ankle pain is getting worse or keeps coming back.",
    ],
    tryThisWeek: [
      "Balance on one leg, holding the counter.",
      "Stand on one leg in daily tasks.",
      "See a GP if the pain keeps coming back.",
    ],
    ask: "Why does my ankle keep giving way, and would physiotherapy or a support help?",
    interactive: {
      kind: "timeline",
      title: "Building balance, step by step",
      steps: [
        { id: "hold", when: "Step 1", title: "Holding on", points: ["Hold a kitchen counter and balance on the injured foot.", "Build up towards one minute, three times, twice a day."] },
        { id: "daily", when: "Step 2", title: "Every day", points: ["Practise standing on one leg in daily activities."] },
        { id: "cushion", when: "Step 3", title: "On a cushion", points: ["When confident, stand on a cushion or pillow.", "Build up the amount slowly."] },
        { id: "eyes", when: "Step 4", title: "Eyes closed", points: ["When a pillow is easy, go back to the floor.", "Try the basic balance with your eyes closed."] },
      ],
    },
    sources: [CKS_SUMMARY, CKS_COMPLICATIONS, CKS_RISK, CKS_MANAGEMENT, UHSX, WHITTINGTON, AU_EX_FEET, NHS_ANKLE, PAH, NLG],
    quiz: {
      question: "What does Whittington Health call its balance exercise?",
      options: [{ text: "The most important exercise", right: true }, { text: "An optional extra" }, { text: "Only for athletes" }],
      why: "Whittington Health calls its balance exercise the most important exercise, as it can help prevent future sprains.",
    },
  },
  {
    id: "spr-supports",
    kicker: "Everyday life",
    question: "Do supports, bandages and the right shoes help?",
    hook: "A bandage, a boot, crutches or a lace-up shoe can each have a place. Advice on bandaging ankles is not all the same.",
    short: "Protecting an injury can mean using a support, or shoes that support your foot or ankle. The NHS suggests a bandage to support the injury during the day, but some hospitals no longer bandage sprained ankles. Supports and walking aids can help early on, and the aim is to rely on them less as time goes on.",
    sections: [
      {
        heading: "Protecting the injury",
        paragraphs: [
          "In the first few days, protect the injury, for example by using a support, or shoes that support your foot or ankle. NICE's clinical summary gives high-top, lace-up shoes as one example.",
          "Wrap a bandage around the injury to support it during the day. A simple elastic or elasticated tubular bandage should be snug but not tight, and taken off before going to sleep.",
        ],
      },
      {
        heading: "Bandaging an ankle: advice differs",
        paragraphs: [
          "Not every hospital agrees on bandaging ankles. University Hospitals Sussex says it no longer recommends bandaging sprained ankles, because bandages do not help with pain or healing and may slow recovery.",
          "Northern Lincolnshire and Goole NHS Foundation Trust says an elastic bandage such as Tubigrip is often more effective, as it lets you move your ankle freely and prevents stiffness. Whittington Health says some people find a support bandage helpful, but many people do not need one.",
          "Your pharmacist can recommend the best type of compression for you.",
        ],
      },
      {
        heading: "Boots, splints and crutches",
        paragraphs: [
          "Supports or walking aids such as a walking boot or crutches can help in the early stages of an injury, making you more comfortable. Unless a healthcare professional advises using them for a set time, try to become less reliant on them as time goes on.",
          "A cast is usually unnecessary for a sprained ankle, and a walking boot is rarely needed. An ankle splint may help after a severe injury. Most people do not need crutches and are encouraged to walk as normally as possible.",
          "To help prevent another injury, NICE's summary says a physiotherapist can consider external support, such as bracing or taping, if it is needed.",
        ],
      },
      {
        heading: "Shoes",
        paragraphs: [
          "For a painful ankle, the NHS suggests wide, comfortable shoes with a low heel and soft sole, and soft insoles or heel pads. Do not wear high heels or tight, pointy shoes.",
          "After an ankle sprain, wear flat, supportive shoes or boots and avoid walking on uneven ground while it heals. For sport, wear appropriate shoes and replace them as they wear out.",
        ],
      },
    ],
    helps: [
      "Protect the injury with a support, or shoes that support your foot or ankle.",
      "Keep a compression bandage snug but not tight, and take it off before going to sleep.",
      "Ask your pharmacist which type of compression suits you.",
      "Try to rely less on boots, crutches and supports as time goes on, unless told otherwise.",
      "Wear flat, supportive shoes, and avoid high heels or tight, pointy shoes.",
    ],
    tryThisWeek: [
      "Wear flat, supportive shoes.",
      "Ask a pharmacist about compression.",
      "Lean less on supports over time.",
    ],
    ask: "Should I wear a bandage, a support or a boot, and for how long?",
    interactive: {
      kind: "scenarios",
      title: "Choosing support",
      scenarios: [
        {
          id: "bedtime",
          situation: "It is bedtime and the compression bandage is still on.",
          options: [{ text: "Take it off before sleep", best: true }, { text: "Leave it on all night" }],
          why: "A simple elastic or elasticated tubular bandage should be snug but not tight, and taken off before going to sleep.",
        },
        {
          id: "crutches",
          situation: "A while on, you still use crutches out of habit.",
          options: [{ text: "Try to rely on them less", best: true }, { text: "Keep using them just in case" }],
          why: "Unless a healthcare professional advises using them for a set time, try to become less reliant on them as time goes on.",
        },
        {
          id: "shoes",
          situation: "You are choosing shoes while your ankle heals.",
          options: [{ text: "Flat, supportive shoes", best: true }, { text: "Heels or tight, pointy shoes" }],
          why: "After an ankle sprain, wear flat, supportive shoes or boots and avoid walking on uneven ground while it heals.",
        },
        {
          id: "tight",
          situation: "Your bandage feels very tight.",
          options: [{ text: "It should be snug, not tight", best: true }, { text: "Tighter is better" }],
          why: "A simple elastic or elasticated tubular bandage should be snug but not tight.",
        },
      ],
    },
    sources: [NHS_SPRAINS, NHS_ANKLE, CKS_MANAGEMENT, NHSI_SOFT, NLG, UHSX, CSP_FOOT_TREATMENT, WHITTINGTON, PAH],
    quiz: {
      question: "What does University Hospitals Sussex say about bandaging sprained ankles?",
      options: [{ text: "It no longer recommends it", right: true }, { text: "It should always be done" }, { text: "Only at night" }],
      why: "University Hospitals Sussex says it no longer recommends bandaging sprained ankles, because bandages do not help with pain or healing and may slow recovery.",
    },
  },
];
