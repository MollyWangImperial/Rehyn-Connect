import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Neck pain page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, NHS inform (NHS 24,
// Scotland), Arthritis UK (the charity formerly called Versus Arthritis; versusarthritis.org now redirects to
// arthritis-uk.org) and the Chartered Society of Physiotherapy, with the Health and Safety Executive for screen
// set-up and the government's Access to Work page. Exercises are described only as the sources describe them,
// with the sources' own advice to check with a physiotherapist or healthcare professional first. Urgent
// symptoms are worded as the NHS pages word them. General information only; it never replaces what a person's
// own GP, physiotherapist or pharmacist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const inform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/illnesses-and-conditions/muscle-bone-and-joints/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/conditions/neck-pain/${path}` });
const hse = (label: string, path: string): LearnSource => ({ label: `Health and Safety Executive: ${label}`, url: `https://www.hse.gov.uk/msd/dse/${path}` });

const NHS_NECK = nhs("Neck pain", "symptoms/neck-pain-and-stiff-neck/");
const NHS_WHIPLASH = nhs("Whiplash", "conditions/whiplash/");
const NHS_SPONDYLOSIS = nhs("Cervical spondylosis", "conditions/cervical-spondylosis/");
const NHS_MENINGITIS = nhs("Meningitis", "conditions/meningitis/");
const NHS_PINS = nhs("Pins and needles", "symptoms/pins-and-needles/");
const NHS_SLIPPED = nhs("Slipped disc", "conditions/slipped-disc/");
const NHS_PHYSIO = nhs("Physiotherapy", "tests-and-treatments/physiotherapy/");
const NHS_MSK = nhs("Get NHS help for back or joint problems", "nhs-services/get-nhs-help-for-back-joint-problems/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_CODEINE = nhs("Codeine", "medicines/codeine/");
const NHS_TENSION = nhs("Tension headaches", "conditions/tension-headaches/");
const NHS_PAIN = nhs("10 ways to reduce pain", "live-well/pain/10-ways-to-ease-pain/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");

const INFORM_NECK = inform("Neck problems", "neck-and-back-problems-and-conditions/neck-problems/");
const INFORM_EXERCISES = inform("Exercises for neck problems", "neck-and-back-problems-and-conditions/exercises-for-neck-problems/");
const INFORM_WHIPLASH = inform("Whiplash", "neck-and-back-problems-and-conditions/whiplash/");

const AUK_NECK = auk("Neck pain", "understanding-arthritis/conditions/neck-pain/");
const AUK_NECK_EXERCISES = auk("Exercises for the neck", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-neck/");
const AUK_SLEEP = auk("Overcoming sleep problems with arthritis", "living-with-arthritis/health-and-wellbeing/sleep/");

const CSP_CAUSES = csp("Causes of neck pain", "causes-neck-pain");
const CSP_TREATMENT = csp("Treatment for neck pain", "treatment-neck-pain");
const CSP_HELP = csp("Getting help for neck pain", "getting-help-neck-pain");
const CSP_VIDEO_EXERCISES = csp("Video exercises for neck pain", "video-exercises-neck-pain");
const CSP_WHIPLASH = csp("Whiplash", "whiplash");

const HSE_POSTURE = hse("Good posture when using display screen equipment", "good-posture.htm");
const HSE_BREAKS = hse("Work routine and breaks", "work-routine.htm");
const GOV_ACCESS_TO_WORK: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const neckAnswers: LearnArticle[] = [
  {
    id: "neck-what-it-is",
    kicker: "Understanding",
    question: "Why does my neck hurt?",
    hook: "Seven small bones, the joints between them and the muscles around them. Usually a strain, rarely serious damage.",
    short: "The neck is the top seven bones of the spine, linked by small facet joints and cushioned by discs. In most cases the exact cause of neck pain cannot be found, but serious damage is rare and the most likely cause is a strain of one of the small facet joints. Most neck pain only lasts a few weeks.",
    sections: [
      {
        heading: "Bones, joints and discs",
        paragraphs: [
          "Your neck and back are made up of small bones called vertebrae, stacked on top of each other to form the spinal column. The top seven bones form your neck, and these are called the cervical vertebrae.",
          "The bones are linked by small facet joints, which, together with your neck muscles, let you move your head in any direction. Between the vertebrae are discs of cartilage, which act as shock absorbers and give the spine its flexibility.",
        ],
      },
      {
        heading: "What usually hurts",
        paragraphs: [
          "In most cases, it is not possible to identify the exact cause of neck pain. The Chartered Society of Physiotherapy says serious structural damage is rare, and the most likely cause is a strain of one of the small facet joints at the side of the neck. Less commonly involved is the disc, and even less so the nerves.",
          "Arthritis UK says neck pain is usually the result of holding your neck in the same position for too long.",
        ],
      },
      {
        heading: "Scans and wear and tear",
        paragraphs: [
          "There is not a strong link between X-ray and MRI scan findings of spondylosis or degeneration and a person's pain. Wear and tear, arthritis and disc degeneration are more common as we grow older, and can be found in people who do not have neck pain.",
          "Cervical spondylosis is a normal part of ageing, and many people do not have any symptoms. Almost everyone will have spondylosis somewhere in the spine at some point in their life, and often it does not cause any pain at all.",
        ],
      },
      {
        heading: "Why it can feel worse",
        paragraphs: [
          "Lifestyle factors can make the structures of the neck more sensitive. They include poor quality and quantity of sleep, more muscle tension in your neck, low levels of physical activity and more stressful periods of life.",
          "Stress can make neck pain worse. Arthritis UK suggests aiming for a balance between relaxation and exercise.",
        ],
      },
      {
        heading: "Usually short-lived",
        paragraphs: [
          "Most neck pain only lasts a few weeks. In most cases, neck pain is not caused by a serious problem.",
          "Many people develop a stiff and painful neck for no obvious reason. This is called non-specific neck pain, and it usually disappears after a few days, providing you keep gently moving your neck and rest when you need to.",
        ],
      },
    ],
    helps: [
      "Keep gently moving your neck, and rest when you need to.",
      "Take paracetamol or ibuprofen, or use ibuprofen gel on your neck.",
      "Do not wear a neck collar: it is better to keep your neck moving, unless a doctor tells you not to.",
      "Aim for a balance between relaxation and exercise.",
      "See a GP if neck pain or stiffness does not go away after a few weeks.",
    ],
    tryThisWeek: [
      "Keep your neck gently moving.",
      "Balance relaxation and exercise.",
      "Leave the neck collar off.",
    ],
    ask: "Is this ordinary neck pain, and what is the most likely cause in my case?",
    interactive: {
      kind: "risk-check",
      title: "What makes a neck more sensitive?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "sleep", label: "Poor or short sleep", note: "Poor quality and quantity of sleep can make the neck more sensitive, says the Chartered Society of Physiotherapy.", changeable: true },
        { id: "tension", label: "More muscle tension in the neck", note: "Stress can make neck pain worse. Learning to relax your neck muscles can help.", changeable: true },
        { id: "activity", label: "Low levels of physical activity", note: "Low activity is one of the lifestyle factors that can build up sensitivity.", changeable: true },
        { id: "position", label: "Long spells in one position", note: "Neck pain is usually the result of holding your neck in the same position for too long.", changeable: true },
        { id: "stress", label: "A stressful period of life", note: "More stressful periods of life can make neck pain more likely.", changeable: true },
        { id: "injury", label: "A previous neck injury", note: "A previous neck injury can make cervical spondylosis more likely at any age, says the NHS.", changeable: false },
        { id: "family", label: "A family history", note: "A family history of cervical spondylosis can also make it more likely.", changeable: false },
      ],
    },
    sources: [AUK_NECK, CSP_CAUSES, NHS_NECK, NHS_SPONDYLOSIS],
    quiz: {
      question: "What is the most likely cause of neck pain, according to the Chartered Society of Physiotherapy?",
      options: [{ text: "A strain of a small facet joint", right: true }, { text: "A trapped nerve" }, { text: "A broken bone" }],
      why: "The Chartered Society of Physiotherapy says serious structural damage is rare, and the most likely cause is a strain of one of the small facet joints at the side of the neck.",
    },
  },
  {
    id: "neck-causes",
    kicker: "Causes",
    question: "Was it the pillow, the desk or the stress?",
    hook: "Posture gets the blame, but long spells in one position, poor sleep and stress seem to matter more.",
    short: "The most common causes of neck pain are the neck locking in an awkward position while sleeping, sitting at a desk for a long time, a pinched nerve, and injuries such as whiplash. The Chartered Society of Physiotherapy says posture plays a much smaller role than once thought, while holding the body in one position for long periods seems to contribute.",
    sections: [
      {
        heading: "The usual suspects",
        paragraphs: [
          "The NHS lists the most common causes of neck pain as the neck becoming locked in an awkward position while sleeping, bad posture such as sitting at a desk for a long time, a pinched nerve, and an injury such as whiplash from a traffic accident or fall.",
          "Neck pain is a common condition that affects most people in their 30s and 40s. Neck problems are rarely caused by any serious disease or damage.",
        ],
      },
      {
        heading: "Posture matters less than people think",
        paragraphs: [
          "There is increasing evidence that posture plays a much smaller role in neck problems than previously thought. The Chartered Society of Physiotherapy says it does not appear to be poor posture that is related to pain.",
          "What does appear to contribute is our more sedentary lives, where we hold our bodies in sustained positions for long periods, such as sitting at an office desk or watching TV on the sofa. Repeating the same strained movements in work, sports and hobbies can also cause neck problems.",
        ],
      },
      {
        heading: "Sleep, stress and strain",
        paragraphs: [
          "Other things that can cause or add to neck pain include worry or stress, sleeping awkwardly, an accident that causes whiplash, a sprain or a strain, and a flare-up of cervical spondylosis as the discs and joints in the spine age.",
          "The muscles at the back of your neck must always be active, or your head would fall forwards. When you are worried or stressed you often tighten these muscles even more, which can cause neck pain and tension headaches.",
        ],
      },
      {
        heading: "For no obvious reason",
        paragraphs: [
          "Many people develop a stiff and painful neck for no obvious reason. It may happen after sitting in a draught, or after a minor twisting injury while gardening.",
          "This is called non-specific neck pain. It is the most common type, and it usually disappears after a few days, providing you keep gently moving your neck and rest when you need to.",
        ],
      },
      {
        heading: "The bigger picture",
        paragraphs: [
          "The Chartered Society of Physiotherapy suggests asking yourself some questions. Have you been sleeping less? Have you been more stressed? Have you had less chance to exercise than usual? Have you been working in one position for longer periods?",
          "All of these are possible triggers for neck pain. Around half of people with neck pain have it come back, so it helps to understand what may have caused it.",
        ],
      },
    ],
    helps: [
      "Do not keep your neck in the same position for a long time, for example when sitting at a desk.",
      "Take regular breaks from work that keeps you in one position.",
      "When sleeping, make sure your head is the same height as the rest of your body.",
      "Do not sleep on your front.",
      "Practise relaxation if you are prone to stress, to reduce tension across your shoulders and neck.",
    ],
    tryThisWeek: [
      "Break up long spells at a desk.",
      "Keep your head level in bed.",
      "Practise a little relaxation.",
    ],
    ask: "Which of my habits might be setting off my neck pain, and what would you change first?",
    interactive: {
      kind: "scenarios",
      title: "Spotting the trigger",
      scenarios: [
        {
          id: "desk",
          situation: "You have been at your desk all morning without moving.",
          options: [{ text: "Take a break and move", best: true }, { text: "Sit up straighter and carry on" }],
          why: "Posture plays a much smaller role than once thought. Holding the body in one position for long periods seems to contribute, so take regular breaks.",
        },
        {
          id: "stress",
          situation: "It has been a stressful week, and your neck and shoulders feel tight.",
          options: [{ text: "Practise some relaxation", best: true }, { text: "Ignore it: stress cannot be the cause" }],
          why: "When you are worried or stressed you often tighten the muscles at the back of the neck even more, which can cause neck pain and tension headaches.",
        },
        {
          id: "sleep",
          situation: "You wake with a stiff neck after sleeping in an awkward position.",
          options: [{ text: "Keep gently moving it", best: true }, { text: "Keep it still until it eases" }],
          why: "Non-specific neck pain usually disappears after a few days, providing you keep gently moving your neck and rest when you need to.",
        },
      ],
    },
    sources: [NHS_NECK, AUK_NECK, CSP_CAUSES, INFORM_NECK, CSP_HELP],
    quiz: {
      question: "What does the Chartered Society of Physiotherapy say about posture?",
      options: [{ text: "It plays a much smaller role than once thought", right: true }, { text: "It is the main cause of neck pain" }, { text: "It only matters when sleeping" }],
      why: "There is increasing evidence that posture plays a much smaller role in neck problems than previously thought.",
    },
  },
  {
    id: "neck-trapped-nerve",
    kicker: "Arms and hands",
    question: "Why do I feel it down my arm?",
    hook: "Tingling, numbness or pain in the arm can come from a pinched nerve in the neck. It often settles, but some signs need checking soon.",
    short: "A nerve in the neck can become pinched when the muscles, bones or tissues around it press on it too much, causing numbness, pins and needles or tingling down the arm. This usually goes away once the problem resolves itself. See a GP if you have pins and needles or a cold arm with neck pain, and get urgent help if your arms or legs feel heavy or weak.",
    sections: [
      {
        heading: "How a nerve gets pinched",
        paragraphs: [
          "A nerve can become pinched when the muscles, bones or tissues surrounding it apply too much pressure. You may feel numbness, pins and needles or tingling down your arm, sometimes right down to your fingers.",
          "The NHS says long-lasting pins and needles can be caused by a trapped nerve in your back or neck.",
        ],
      },
      {
        heading: "Discs and bony changes",
        paragraphs: [
          "If a slipped disc is pressing on a nerve, neck pain can come with pain spreading down one or both arms, numbness, pins and needles, or weakness. Nerves can also be irritated or pinched by bulging discs or small lumps of new bone, called osteophytes, in cervical spondylosis.",
          "Not all slipped discs cause symptoms, and many people will never know they have slipped a disc.",
        ],
      },
      {
        heading: "It often settles",
        paragraphs: [
          "Numbness and tingling go away once the problem resolves itself. A slipped disc will often settle by itself or after self-help treatments, but occasionally more treatment is needed, especially if symptoms carry on after several weeks.",
          "Try to keep active and gradually increase the amount of exercise you do. Anti-inflammatory painkillers such as ibuprofen, and painkillers such as paracetamol, can help, but anti-inflammatories are not suitable for everyone, so speak to a pharmacist if you are unsure.",
        ],
      },
      {
        heading: "Medicines, scans and surgery",
        paragraphs: [
          "If your symptoms are severe, talk to your doctor. Gabapentin and pregabalin are not usually a first treatment for ordinary neck pain, but if a pinched nerve is causing discomfort in your arm, they can help by reducing nerve irritation. You may need to try one for three to eight weeks to begin with.",
          "Your doctor may prescribe something stronger or ask you to have an MRI scan. Surgery is only considered if a nerve is being pinched by a slipped disc or bone, called cervical radiculopathy, or if there is a problem with the spinal cord.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "See a GP if you have neck pain with other symptoms, like pins and needles or a cold arm, because this could be something more serious.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you have heaviness or weakness in your arms or legs, or pins and needles in an arm as well as pain in your neck or arm.",
        ],
      },
    ],
    helps: [
      "Keep active and gradually increase the amount of exercise you do.",
      "Speak to a pharmacist if you are not sure anti-inflammatory painkillers are suitable for you.",
      "If your symptoms are severe, talk to your doctor.",
      "See a GP if you have pins and needles or a cold arm with your neck pain.",
      "Ask for an urgent GP appointment or get help from NHS 111 if your arms or legs feel heavy or weak.",
    ],
    tryThisWeek: [
      "Keep active, a little more each day.",
      "Ask a pharmacist about painkillers.",
      "Note any arm symptoms for your GP.",
    ],
    ask: "Is a trapped nerve causing my arm symptoms, and what should make me come back quickly?",
    interactive: {
      kind: "signs",
      title: "Arm and hand signs to mention",
      intro: "Tick any you have along with your neck pain.",
      signs: [
        "Pain spreading down one or both arms",
        "Numbness in an arm or hand",
        "Pins and needles or tingling",
        "Weakness in an arm or hand",
        "A cold arm",
        "Heaviness in your arms or legs",
      ],
      after: "See a GP about any of these. Ask for an urgent GP appointment or get help from NHS 111 for heaviness or weakness in your arms or legs, or pins and needles in an arm with neck or arm pain.",
      copyHeading: "Arm symptoms I have noticed",
    },
    sources: [AUK_NECK, NHS_SPONDYLOSIS, NHS_PINS, NHS_SLIPPED, NHS_NECK],
    quiz: {
      question: "Which medicines can help if a pinched nerve causes arm discomfort?",
      options: [{ text: "Gabapentin or pregabalin", right: true }, { text: "Antibiotics" }, { text: "Steroid cream" }],
      why: "Gabapentin and pregabalin are not usually a first treatment for ordinary neck pain, but if a pinched nerve is causing discomfort in your arm, they can help by reducing nerve irritation.",
    },
  },
  {
    id: "neck-urgent",
    kicker: "Warning signs",
    question: "Which neck symptoms need help straight away?",
    hook: "Most neck pain is not serious. A few signs mean calling 999, and some mean an urgent GP appointment or NHS 111.",
    short: "Most neck pain is not caused by a serious problem, but a few symptoms are emergencies. The NHS says to call 999 for new problems walking, loss of bladder or bowel control, or a sudden lack of co-ordination, and to call 999 or go to A&E for a stiff neck with being unable to look at bright lights. Other signs need an urgent GP appointment or NHS 111.",
    sections: [
      {
        heading: "Call 999",
        paragraphs: [
          "The NHS says to call 999 if you have new problems walking, loss of bladder or bowel control, or a sudden lack of co-ordination, such as with buttoning a shirt. Also call 999 if somebody's face droops on one side, they cannot lift up both arms and keep them there, or they have difficulty speaking.",
          "These can be signs of a medical emergency.",
        ],
      },
      {
        heading: "A stiff neck with fever or a rash",
        paragraphs: [
          "Meningitis can be very serious and even life-threatening if not treated quickly. Call 999 or go to A&E if an adult has a stiff neck and cannot look at bright lights, has a very high or very low temperature, has a very painful headache, or has a rash that does not fade when you press it.",
          "Do not drive yourself to A&E. The person you speak to at 999 will give you advice about what to do.",
        ],
      },
      {
        heading: "Urgent GP appointment or NHS 111",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have severe neck pain that starts suddenly or is getting worse quickly, heaviness or weakness in your arms or legs, pins and needles in an arm as well as pain in your neck or arm, or pain between your shoulder blades.",
          "NHS inform says to contact your GP practice urgently, or phone 111 if it is closed, if clumsiness, numbness, pins and needles or weakness in one or both arms is getting worse, if you have problems with balance or walking since your neck pain started, or if your neck pain comes with a severe headache.",
        ],
      },
      {
        heading: "After a neck injury",
        paragraphs: [
          "If you have injured your neck, ask for an urgent GP appointment or get help from NHS 111 if you have severe pain despite taking paracetamol or ibuprofen, tingling or pins and needles on one or both sides of your body, problems with walking or sitting upright, a sudden electric shock feeling in your neck and back, or weakness in your hands, arms or legs.",
          "These symptoms could be caused by damage to the nerves in your neck or back. Do not drive or cycle until you have spoken to a GP or NHS 111.",
        ],
      },
      {
        heading: "See a GP",
        paragraphs: [
          "See a GP if neck pain or stiffness does not go away after a few weeks, painkillers have not worked, you are worried about the pain, or you have other symptoms like pins and needles or a cold arm.",
          "The Chartered Society of Physiotherapy says some symptoms are very rare but worth contacting a doctor about, including severe head, neck or arm pain that is constant or disturbs sleep, feeling unwell, a fever or unexplained weight loss.",
        ],
      },
    ],
    helps: [
      "Call 999 if you have new problems walking, lose bladder or bowel control, or suddenly lose co-ordination.",
      "Call 999 or go to A&E if you have a stiff neck and cannot look at bright lights.",
      "Do not drive yourself to A&E.",
      "Ask for an urgent GP appointment or get help from NHS 111 if severe neck pain starts suddenly or gets worse quickly.",
      "After a neck injury with these symptoms, do not drive or cycle until you have spoken to a GP or NHS 111.",
      "See a GP if neck pain or stiffness does not go away after a few weeks.",
    ],
    tryThisWeek: [
      "Learn the signs that mean 999.",
      "Know when to call NHS 111.",
      "See a GP if it lasts weeks.",
    ],
    ask: "Which symptoms should make me come back quickly, and who should I call?",
    interactive: {
      kind: "scenarios",
      title: "Which help, and how fast?",
      scenarios: [
        {
          id: "meningitis",
          situation: "You have a stiff neck, a high temperature, and you cannot look at bright lights.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "See how it is tomorrow" }, { text: "Book a routine GP visit" }],
          why: "Call 999 or go to A&E if an adult has a stiff neck and cannot look at bright lights. Do not drive yourself to A&E.",
        },
        {
          id: "coordination",
          situation: "Suddenly you cannot do up your shirt buttons, and walking is harder.",
          options: [{ text: "Call 999", best: true }, { text: "Rest and wait for it to pass" }],
          why: "Call 999 for new problems walking or a sudden lack of co-ordination, such as with buttoning a shirt. These can be signs of a medical emergency.",
        },
        {
          id: "arm",
          situation: "Your neck hurts and you have pins and needles in one arm.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait a few weeks" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 for pins and needles in an arm as well as pain in your neck or arm.",
        },
        {
          id: "weeks",
          situation: "Your stiff neck has lasted three weeks and painkillers have not helped.",
          options: [{ text: "See a GP", best: true }, { text: "Call 999" }],
          why: "See a GP if neck pain or stiffness does not go away after a few weeks or painkillers have not worked.",
        },
      ],
    },
    sources: [NHS_SPONDYLOSIS, NHS_MENINGITIS, INFORM_NECK, NHS_WHIPLASH, NHS_NECK, CSP_CAUSES],
    quiz: {
      question: "What should you do if you have a stiff neck and cannot look at bright lights?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Take a painkiller and wait" }, { text: "Use a heat pack" }],
      why: "Call 999 or go to A&E if an adult has a stiff neck and cannot look at bright lights, has a very high or very low temperature, has a very painful headache, or has a rash that does not fade when you press it.",
    },
  },
  {
    id: "neck-moving",
    kicker: "Treatment",
    question: "Should I rest my neck or keep it moving?",
    hook: "A day or two of rest at most. After that, gentle movement, every hour, is part of the treatment.",
    short: "Keeping your neck moving is an essential part of treatment and recovery. Rest for as short a time as possible, no more than a day or two, then start gentle stretches and neck movements. A neck collar is not recommended unless a doctor prescribes one. Most neck problems should have improved within 8 weeks.",
    sections: [
      {
        heading: "Movement is part of the treatment",
        paragraphs: [
          "NHS inform says keeping your neck moving is an essential part of your treatment and recovery. It may be challenging at the beginning, so just do what you can and try to build it up over time.",
          "Do not wear a neck collar, because it is better to keep your neck moving, unless a doctor tells you not to. NHS inform says a collar is not recommended unless it is specifically prescribed by your doctor.",
        ],
      },
      {
        heading: "Rest, but only briefly",
        paragraphs: [
          "A short period of rest may help at first to ease the pain. But to stop your neck muscles becoming weaker and your joints stiffening, rest for as short a time as possible, and no more than a day or two.",
          "As soon as possible, start some gentle stretches and neck movements. These can help the muscles and ligaments to relax and ease your pain and stiffness.",
        ],
      },
      {
        heading: "Through the day",
        paragraphs: [
          "Things that help include moving your neck for short periods every hour, not staying in one position for too long, and carrying on with your normal daily activities and hobbies, even if more slowly than normal. Keep generally active, even if you move slowly at first.",
          "The Chartered Society of Physiotherapy says the important points for recovery are staying as active as the pain allows, taking simple painkillers if needed, and advice from a healthcare professional.",
        ],
      },
      {
        heading: "Some discomfort is normal",
        paragraphs: [
          "If you become more active gradually, it is unlikely you will cause any damage or harm. The pain you feel when you start gentle exercise is because the muscles and joints are getting fitter.",
          "Some aches or discomfort during or after exercise are normal. But if an exercise makes your symptoms significantly worse, stop doing it. Do not do anything that could be dangerous because you cannot move your neck, such as driving or cycling.",
        ],
      },
      {
        heading: "How long it takes",
        paragraphs: [
          "You should see the biggest change in your symptoms within the first couple of weeks. Most neck problems should have improved within 8 weeks.",
          "If your neck problem has not improved within 8 weeks, it is a good idea to talk to a healthcare professional. The Chartered Society of Physiotherapy says that if this is your first neck pain, you will most likely recover over the next few weeks, and most neck pain problems get a lot better within three months.",
        ],
      },
    ],
    helps: [
      "Move your neck for short periods every hour.",
      "Carry on with your normal daily activities and hobbies, even at a slower pace.",
      "Rest for as short a time as possible, and no more than a day or two.",
      "Do not do anything that could be dangerous because you cannot move your neck, such as driving or cycling.",
      "If your neck has not improved within 8 weeks, talk to a healthcare professional.",
    ],
    tryThisWeek: [
      "Move your neck every hour.",
      "Keep up your usual activities.",
      "Keep any rest to a day or two.",
    ],
    ask: "How much should I be moving my neck each day, and what should I avoid for now?",
    interactive: {
      kind: "timeline",
      title: "The first weeks with a sore neck",
      steps: [
        { id: "start", when: "Day 1 to 2", title: "Rest briefly, if at all", points: ["No more than a day or two of rest.", "Then start gentle stretches and neck movements."] },
        { id: "hourly", when: "Every day", title: "Little and often", points: ["Move your neck for short periods every hour.", "Carry on with daily activities, more slowly if needed."] },
        { id: "two-weeks", when: "First couple of weeks", title: "The biggest change", points: ["Symptoms usually change most in this time.", "See a GP if painkillers have not worked."] },
        { id: "eight-weeks", when: "8 weeks", title: "Most problems improved", points: ["Most neck problems should have improved.", "If not, talk to a healthcare professional."] },
        { id: "three-months", when: "3 months", title: "A lot better", points: ["Most neck pain problems are a lot better by now.","For longer pain, exercise is the most effective treatment."] },
      ],
    },
    sources: [INFORM_NECK, AUK_NECK, NHS_NECK, CSP_TREATMENT, NHS_PAIN],
    quiz: {
      question: "How long should you rest a painful neck, according to Arthritis UK?",
      options: [{ text: "No more than a day or two", right: true }, { text: "A week in bed" }, { text: "Until the pain has gone" }],
      why: "Rest for as short a time as possible, and no more than a day or two.",
    },
  },
  {
    id: "neck-exercises",
    kicker: "Exercise",
    question: "Which neck exercises are safe to start with?",
    hook: "A tilt, a turn and a nod, held for a few seconds, little and often. Check with a physiotherapist first.",
    short: "Arthritis UK describes three simple neck exercises: a head tilt, a head turn and chin to chest. NHS inform suggests starting with 2 to 3 repetitions at a time, little and often through the day, and keeping pain within 0 to 5 out of 10. The Chartered Society of Physiotherapy recommends seeking advice from a physiotherapist or healthcare professional before starting any new exercise regime.",
    sections: [
      {
        heading: "Before you start",
        paragraphs: [
          "The Chartered Society of Physiotherapy recommends that you seek advice from a physiotherapist or healthcare professional before starting any new exercise regime. People who have been diagnosed with a neck condition, or have had recent neck surgery, should follow the advice of their healthcare professional.",
          "If you are new to exercise, start slowly and build up gradually. Only try these exercises if you are feeling well enough, and do them in a safe place with plenty of space around you.",
        ],
      },
      {
        heading: "Three Arthritis UK exercises",
        paragraphs: [
          "Head tilt: sit down to help you balance. Tilt your head down towards your shoulder, leading with your ear. Gently tense your neck muscles and hold for five seconds, return to the centre and repeat on the other side, five times on each side.",
          "Head turn: sitting down, turn your head towards one side, keeping your chin at the same height. Hold for five seconds, return to the centre and repeat on the other side, five times on each side. Chin to chest: slowly tilt your head down to rest your chin on your chest, hold for five seconds, and repeat five times.",
        ],
      },
      {
        heading: "Little and often",
        paragraphs: [
          "When starting new exercises, it can help to do 2 to 3 repetitions at a time. It is better to do small amounts throughout the day, such as practising your repetitions every hour.",
          "As it gets easier, and if you feel able to, add 1 or 2 repetitions every few days. Over time, you can try to increase to around 10 repetitions.",
        ],
      },
      {
        heading: "How much pain is all right",
        paragraphs: [
          "NHS inform suggests rating your pain out of 10. From 0 to 3 is minimal pain, 4 to 5 is acceptable pain, and 6 to 10 is excessive pain. Aim to keep your pain between 0 and 5 while you exercise.",
          "If your pain goes above this, do fewer repetitions, move more slowly, or rest longer between movements. Your pain should be no worse the morning after you have exercised.",
        ],
      },
      {
        heading: "When to stop",
        paragraphs: [
          "Stop these exercises if they make your symptoms worse or cause new pain. If you start to feel unwell, stop immediately. The Chartered Society of Physiotherapy says to seek urgent medical advice if any of its exercises worsen your pain.",
          "If your neck pain has not improved within 6 weeks of following this advice, it is a good idea to talk to a healthcare professional.",
        ],
      },
    ],
    helps: [
      "Seek advice from a physiotherapist or healthcare professional before starting any new exercise regime.",
      "Start with 2 to 3 repetitions at a time, and practise little and often through the day.",
      "Aim to keep your pain between 0 and 5 out of 10 while you exercise.",
      "Stop these exercises if they make your symptoms worse or cause new pain.",
      "If your neck pain has not improved within 6 weeks, talk to a healthcare professional.",
    ],
    tryThisWeek: [
      "Ask a physio which exercises suit you.",
      "Start with 2 to 3 repetitions.",
      "Keep pain at 5 out of 10 or less.",
    ],
    ask: "Which of these exercises suit my neck, and how many should I do?",
    interactive: {
      kind: "flip-cards",
      title: "Four moves, card by card",
      intro: "Check with your GP or physiotherapist first. Turn each card to see how the source describes it.",
      cards: [
        { id: "tilt", front: "Head tilt", when: "Sitting, side to side", back: "Tilt your head towards your shoulder, leading with your ear. Hold for five seconds. Five times each side (Arthritis UK)." },
        { id: "turn", front: "Head turn", when: "Sitting, or lying if easier", back: "Turn your head to one side, chin at the same height. Hold for five seconds. Five times each side (Arthritis UK)." },
        { id: "chin", front: "Chin to chest", when: "Sitting or standing", back: "Slowly tilt your head down to rest your chin on your chest. Hold for five seconds. Repeat five times (Arthritis UK)." },
        { id: "nod", front: "Cervical nod", when: "Sitting on a chair", back: "Lift your breastbone slightly and draw your shoulder blades back. Nod your chin down, moving only the head, then relax (CSP)." },
      ],
    },
    sources: [AUK_NECK_EXERCISES, INFORM_EXERCISES, CSP_VIDEO_EXERCISES, AUK_NECK],
    quiz: {
      question: "How long does Arthritis UK suggest holding each of its neck exercises?",
      options: [{ text: "Five seconds", right: true }, { text: "One minute" }, { text: "As long as you can" }],
      why: "Gently tense your neck muscles and hold for five seconds, return to the centre and repeat on the other side, five times on each side.",
    },
  },
  {
    id: "neck-painkillers",
    kicker: "Treatment",
    question: "Which painkillers help a stiff neck, and do heat or ice work?",
    hook: "Paracetamol or ibuprofen, a gel, and a wrapped hot water bottle or bag of frozen peas. Used to keep you moving.",
    short: "The NHS suggests paracetamol or ibuprofen, or ibuprofen gel on your neck, and heat or cold packs. Pain medication can help you move more comfortably, which can help your recovery. Ibuprofen tablets are for short courses, and anti-inflammatories are not suitable for everyone, so check with a pharmacist if you are not sure.",
    sections: [
      {
        heading: "Paracetamol and ibuprofen",
        paragraphs: [
          "The NHS suggests taking paracetamol or ibuprofen, or using ibuprofen gel on your neck. Pain medication can help you move more comfortably, which can help your recovery.",
          "Ibuprofen can cause more side effects than paracetamol, so if you can take paracetamol, the NHS says it is a good idea to try it first. Arthritis UK says it is best to take painkillers such as paracetamol before the pain becomes very bad, but not more often than prescribed.",
        ],
      },
      {
        heading: "Short courses",
        paragraphs: [
          "Arthritis UK says anti-inflammatory painkillers such as ibuprofen can be used for a short course of about 5 to 10 days. If they have not helped within this time, they are unlikely to.",
          "Do not take ibuprofen tablets for more than 10 days unless a doctor advises you to. The NHS paracetamol page says not to take paracetamol for more than 3 days unless a doctor tells you to.",
        ],
      },
      {
        heading: "Not for everyone",
        paragraphs: [
          "Ibuprofen may not be suitable if you have a stomach ulcer or have had one before, have asthma, have a heart, liver or kidney condition, or are pregnant. Anti-inflammatories can interact with other medicines such as warfarin, so check with a pharmacist before you start.",
          "A GP may prescribe a stronger painkiller such as codeine, for example for whiplash. It is possible to become addicted to codeine, and your doctor will make sure you only take the amount you need to control your pain.",
        ],
      },
      {
        heading: "Heat and cold",
        paragraphs: [
          "Try a pack of frozen peas wrapped in a tea towel for 5 minutes, 3 times a day, or a hot water bottle wrapped in a tea towel for 20 minutes, 2 to 3 times a day. You can also buy heat or cold packs from a pharmacy.",
          "Never place ice or heat directly on your skin, and leave a few hours between treatments. Stop if you notice more redness, discolouration or blistering of the skin. If you have problems with circulation or sensation, do not use ice or heat.",
        ],
      },
      {
        heading: "Other things that can ease it",
        paragraphs: [
          "People with muscle spasms in the neck report that heat is particularly soothing. You might also try a heat pack before and after exercise to help soothe the muscles.",
          "Gentle massage of the neck muscles often helps. Stress can make neck pain worse, so learning to relax your neck muscles can help too.",
        ],
      },
    ],
    helps: [
      "Take paracetamol or ibuprofen, or use ibuprofen gel on your neck.",
      "If you can take paracetamol, try it before ibuprofen.",
      "Put a pack of frozen peas wrapped in a tea towel on your neck for 5 minutes, 3 times a day.",
      "Or use a hot water bottle wrapped in a tea towel for 20 minutes, 2 to 3 times a day.",
      "Check with a pharmacist before taking anti-inflammatory painkillers with other medicines.",
    ],
    tryThisWeek: [
      "Try paracetamol first, if you can.",
      "Use a wrapped cold pack for 5 minutes.",
      "Or a wrapped hot water bottle for 20.",
    ],
    ask: "Which painkiller is right for me, and for how long should I take it?",
    interactive: {
      kind: "flip-cards",
      title: "Pain relief, card by card",
      intro: "Turn each card to see what it does and when it is used. Always check the packet or leaflet.",
      cards: [
        { id: "paracetamol", front: "Paracetamol", when: "Worth trying first", back: "Helps with pain. Not for more than 3 days unless a doctor tells you to." },
        { id: "ibuprofen", front: "Ibuprofen tablets", when: "A short course", back: "Relieves pain and reduces swelling. Not for more than 10 days unless a doctor advises. Not suitable for everyone." },
        { id: "gel", front: "Ibuprofen gel", when: "Rubbed on the neck", back: "Gently rubbed into the painful area. You are less likely to get side effects from gel than tablets." },
        { id: "codeine", front: "Codeine", when: "Prescribed by a GP", back: "A stronger painkiller, sometimes for whiplash. It is possible to become addicted to it." },
        { id: "cold", front: "Cold pack", when: "5 minutes, 3 times a day", back: "Frozen peas wrapped in a tea towel. Never put ice directly on your skin." },
        { id: "heat", front: "Heat pack", when: "20 minutes, 2 to 3 times a day", back: "A hot water bottle wrapped in a tea towel. Heat can be particularly soothing for spasms." },
      ],
    },
    sources: [NHS_NECK, AUK_NECK, NHS_IBUPROFEN, NHS_PARACETAMOL, NHS_CODEINE, INFORM_NECK, INFORM_WHIPLASH, NHS_WHIPLASH],
    quiz: {
      question: "How long does the NHS suggest using a wrapped hot water bottle on a sore neck?",
      options: [{ text: "20 minutes, 2 to 3 times a day", right: true }, { text: "5 minutes, once a day" }, { text: "All night" }],
      why: "Try a pack of frozen peas wrapped in a tea towel for 5 minutes, 3 times a day, or a hot water bottle wrapped in a tea towel for 20 minutes, 2 to 3 times a day.",
    },
  },
  {
    id: "neck-physio",
    kicker: "Treatment",
    question: "What can a physiotherapist do for my neck?",
    hook: "Advice, exercises and sometimes hands-on treatment. In many areas you can refer yourself.",
    short: "Physiotherapists are highly skilled at supporting people with neck pain. They assess the problem, advise on exercises and pain relief, and may give hands-on treatment. Physiotherapy is free on the NHS, though there may be a long wait, and in many areas you can refer yourself to community MSK services without seeing a GP.",
    sections: [
      {
        heading: "What a physiotherapist does",
        paragraphs: [
          "Physiotherapists are highly skilled at supporting people with neck pain. They may give you hands-on treatment such as manual therapy, and will probably advise you on suitable exercises and pain relief, and on how to prevent further problems.",
          "At your first appointment, the physiotherapist will ask about your symptoms, medical history and lifestyle. They may feel the affected area, check things like your strength, and discuss treatment options and how many sessions you may need.",
        ],
      },
      {
        heading: "Getting to see one",
        paragraphs: [
          "You can get physiotherapy for free on the NHS, but there may be a long waiting list. In many areas, you can refer yourself to NHS community musculoskeletal (MSK) services without needing a referral from a GP.",
          "Community MSK services help with neck pain, and you do not need a diagnosis to use them. To refer yourself in England you need to be registered with a GP. These services do not offer urgent or emergency help. Some GP surgeries also have first contact physiotherapists who can assess you and offer advice.",
        ],
      },
      {
        heading: "Hands-on treatment and exercise",
        paragraphs: [
          "Joint manipulation and joint mobilisation may help with pain relief while you are recovering. Arthritis UK says to seek advice from a healthcare professional before trying manipulation, because it is not suitable for everybody, and some therapies will not be recommended if you have a condition such as osteoporosis.",
          "The longer you have had neck pain, the less hands-on treatments are indicated. The Chartered Society of Physiotherapy suggests asking your physiotherapist what you can do to help yourself, in terms of activities and exercise.",
        ],
      },
      {
        heading: "Between sessions",
        paragraphs: [
          "After each session, you may be given exercises to do at home before your next appointment. It is important to do them regularly to help with your recovery.",
          "So that your physiotherapist can look at your neck, you may need to remove some clothes, so it is a good idea to dress comfortably. Everything you tell the physiotherapist is confidential.",
        ],
      },
      {
        heading: "Going private",
        paragraphs: [
          "You can also choose to pay for private physiotherapy. Make sure a private physiotherapist is chartered, with MCSP after their name, and registered with the Health and Care Professions Council.",
          "Physiotherapists, chiropractors and osteopaths are all trained to treat neck problems. Arthritis UK says to make sure any physical treatment is given by qualified practitioners registered with the relevant body.",
        ],
      },
    ],
    helps: [
      "In many areas, refer yourself to NHS community MSK services without a GP referral.",
      "Dress comfortably for your appointment.",
      "Do your home exercises regularly between sessions.",
      "Ask your physiotherapist what you can do to help yourself, in terms of activities and exercise.",
      "If you go private, check the physiotherapist is chartered and registered with the Health and Care Professions Council.",
    ],
    tryThisWeek: [
      "Check if you can refer yourself.",
      "Ask what you can do yourself.",
      "Do your home exercises regularly.",
    ],
    ask: "Do I need physiotherapy, and can I refer myself in my area?",
    interactive: {
      kind: "timeline",
      title: "A course of physiotherapy",
      steps: [
        { id: "refer", when: "Getting started", title: "Refer yourself or see a GP", points: ["Many areas take self-referrals to MSK services.", "No diagnosis is needed."] },
        { id: "first", when: "First appointment", title: "Assessment", points: ["Questions about symptoms, history and lifestyle.", "Checks such as your strength."] },
        { id: "treatment", when: "Each session", title: "Treatment and advice", points: ["Exercises, advice, and perhaps manual therapy.", "Ask what you can do to help yourself."] },
        { id: "home", when: "Between sessions", title: "Home exercises", points: ["Do them regularly to help your recovery."] },
        { id: "later", when: "Over 3 months", title: "Ongoing neck pain", points: ["Exercise is the most effective treatment.", "Hands-on treatment is less indicated."] },
      ],
    },
    sources: [CSP_HELP, NHS_PHYSIO, NHS_MSK, CSP_TREATMENT, AUK_NECK],
    quiz: {
      question: "Do you need a diagnosis to refer yourself to NHS community MSK services?",
      options: [{ text: "No", right: true }, { text: "Yes, from a GP" }, { text: "Yes, from a hospital scan" }],
      why: "Community MSK services help with neck pain, and you do not need a diagnosis to use them.",
    },
  },
  {
    id: "neck-desk",
    kicker: "Work",
    question: "How do I stop my desk, screen and phone hurting my neck?",
    hook: "Not a perfect posture, but fewer long spells in one position, a screen at eye level, and the phone off your shoulder.",
    short: "Long spells in one position seem to matter more than posture itself. Take short breaks often, set the top of your screen level with your eyes, about an arm's length away, and do not cradle the phone with your shoulder. You do not need to be pain-free to return to work.",
    sections: [
      {
        heading: "Long spells, not a perfect posture",
        paragraphs: [
          "The Chartered Society of Physiotherapy says posture plays a much smaller role in neck problems than previously thought. What does appear to contribute is holding the body in one position for long periods, such as sitting at an office desk.",
          "The NHS says not to keep your neck in the same position for a long time, such as when sitting at a desk. Sit upright, roll your shoulders back gently and bring your neck back.",
        ],
      },
      {
        heading: "Setting up the screen",
        paragraphs: [
          "The Health and Safety Executive suggests the top of the screen level with your eyes, about an arm's length away, with the keyboard just below elbow height. Keep the screen and keyboard central and directly in front of you, and relax your shoulders.",
          "For long spells on a laptop, a separate keyboard and mouse let the screen be raised on a laptop riser. Arthritis UK says to check that your desk and screen are not too low and that your head is not bent forwards for long periods.",
        ],
      },
      {
        heading: "Breaks and movement",
        paragraphs: [
          "Take short breaks often, rather than longer ones less often. The Health and Safety Executive says 5 to 10 minutes every hour is better than 20 minutes every 2 hours.",
          "The Chartered Society of Physiotherapy suggests a brisk 30 minute walk in your lunch break. Shrugging and lowering your shoulders, or waving your arms up and down away from your sides, can help reduce neck tension.",
        ],
      },
      {
        heading: "Phones and reading",
        paragraphs: [
          "Do not spend a long time with your neck twisted sideways or cradling the telephone with your shoulder. Arthritis UK says to speak to your employer if this happens, as they should be able to provide a headset.",
          "If you do a lot of reading, a reading frame for the book or papers will often help your posture.",
        ],
      },
      {
        heading: "Support at work",
        paragraphs: [
          "It is recommended you stay at or return to work as quickly as possible, and you do not need to be pain-free to return. Speak to your employer to see if you need any workplace adjustments.",
          "Some employers have occupational health specialists who can check that workstations are set up for individual needs. The government's Access to Work scheme can help pay for things like specialist equipment, but it does not pay for reasonable adjustments, which your employer must make.",
        ],
      },
    ],
    helps: [
      "Take short breaks often: 5 to 10 minutes every hour is better than 20 minutes every 2 hours.",
      "Set the top of your screen level with your eyes, about an arm's length away.",
      "Do not cradle the phone with your shoulder: ask your employer about a headset.",
      "Shrug and lower your shoulders, or wave your arms up and down, to reduce neck tension.",
      "Speak to your employer to see if you need any workplace adjustments.",
    ],
    tryThisWeek: [
      "Take a short break every hour.",
      "Raise the screen to eye level.",
      "Keep the phone off your shoulder.",
    ],
    ask: "Could my work set-up be adding to my neck pain, and what adjustments would help?",
    interactive: {
      kind: "scenarios",
      title: "At the desk",
      scenarios: [
        {
          id: "laptop",
          situation: "You work all day on a laptop, looking down at the screen.",
          options: [{ text: "Separate keyboard, screen raised", best: true }, { text: "Carry on as you are" }],
          why: "A separate keyboard and mouse let the screen be raised. The top of the screen should be level with your eyes, about an arm's length away.",
        },
        {
          id: "phone",
          situation: "You spend hours on calls with the phone tucked against your shoulder.",
          options: [{ text: "Ask your employer for a headset", best: true }, { text: "Switch shoulders now and then" }],
          why: "Do not spend a long time cradling the telephone with your shoulder. Your employer should be able to provide a headset.",
        },
        {
          id: "breaks",
          situation: "You can take 20 minutes off every 2 hours, or 5 to 10 minutes every hour.",
          options: [{ text: "5 to 10 minutes every hour", best: true }, { text: "20 minutes every 2 hours" }],
          why: "Take short breaks often, rather than longer ones less often.",
        },
      ],
    },
    sources: [CSP_CAUSES, NHS_NECK, HSE_POSTURE, HSE_BREAKS, CSP_HELP, AUK_NECK, INFORM_NECK, GOV_ACCESS_TO_WORK],
    quiz: {
      question: "Where should the top of your screen be?",
      options: [{ text: "Level with your eyes, about an arm's length away", right: true }, { text: "Well below eye level" }, { text: "As close to your face as possible" }],
      why: "The Health and Safety Executive suggests the top of the screen level with your eyes, about an arm's length away, with the keyboard just below elbow height.",
    },
  },
  {
    id: "neck-sleep",
    kicker: "Sleep",
    question: "What is the best pillow and sleeping position for neck pain?",
    hook: "A low, firm pillow, a head level with the body, and not on your front.",
    short: "The NHS suggests a low, firm pillow, a firm mattress and keeping your head at the same height as the rest of your body. Do not sleep on your front or twist your neck in bed. A pillow that is too firm or thick can make neck pain worse.",
    sections: [
      {
        heading: "A neck locked overnight",
        paragraphs: [
          "One of the most common causes of neck pain is the neck becoming locked in an awkward position while sleeping. Arthritis UK also lists sleeping awkwardly among the things that can cause neck pain.",
          "If you have neck pain and headaches, the NHS suggests trying a low, firm pillow and heat or cold packs.",
        ],
      },
      {
        heading: "The pillow",
        paragraphs: [
          "The NHS suggests a low, firm pillow. Arthritis UK says a pillow that is too firm or thick can make neck pain worse, and changing the number or position of pillows may help.",
          "Your head and neck should be supported so your head is level with your body. The pillow should fill the natural hollow between the neck and shoulders. A soft or moulded pillow may help, or a supportive roll inside your pillowcase.",
        ],
      },
      {
        heading: "Position and mattress",
        paragraphs: [
          "When sleeping, make sure your head is the same height as the rest of your body. Do not sleep on your front, and do not twist your neck in bed.",
          "The NHS suggests a firm mattress. If your mattress does not give your back proper support, it can make neck pain worse, and you may want to replace it if it is old or uncomfortable.",
        ],
      },
      {
        heading: "Getting to sleep with pain",
        paragraphs: [
          "Try to wind down before bed, with a hot bath, the radio or a book. Some people find keeping a sleep diary useful.",
          "If night-time pain makes it hard to get to sleep, a painkiller such as paracetamol before bed may help. It is unlikely to last through the night, but should ease the pain for long enough for you to go to sleep.",
        ],
      },
      {
        heading: "A regular routine",
        paragraphs: [
          "Lack of sleep can make pain worse. Go to bed at the same time each evening, get up at a regular time in the morning, and avoid naps in the day.",
          "Arthritis UK suggests avoiding caffeine after midday and putting phones and tablets down before bed. If sleep problems persist, see a GP.",
        ],
      },
    ],
    helps: [
      "Use a low, firm pillow.",
      "Make sure your head is the same height as the rest of your body.",
      "Do not sleep on your front, and do not twist your neck in bed.",
      "Wind down before bed, with a hot bath, the radio or a book.",
      "Go to bed at the same time each evening and get up at a regular time.",
    ],
    tryThisWeek: [
      "Try a low, firm pillow.",
      "Sleep off your front.",
      "Keep the same bedtime each night.",
    ],
    ask: "Could my pillow or sleeping position be adding to my neck pain?",
    interactive: {
      kind: "scenarios",
      title: "At bedtime",
      scenarios: [
        {
          id: "pillows",
          situation: "You sleep on two thick, firm pillows and wake with a stiff neck.",
          options: [{ text: "Try a low, firm pillow instead", best: true }, { text: "Add a third pillow" }],
          why: "A pillow that is too firm or thick can make neck pain worse. The NHS suggests a low, firm pillow.",
        },
        {
          id: "front",
          situation: "You usually fall asleep on your front.",
          options: [{ text: "Try another position", best: true }, { text: "Keep sleeping on your front" }],
          why: "Do not sleep on your front, and do not twist your neck in bed.",
        },
        {
          id: "pain",
          situation: "Neck pain keeps you awake when you first go to bed.",
          options: [{ text: "Paracetamol before bed", best: true }, { text: "A strong coffee to push through" }],
          why: "A painkiller before bed should ease the pain for long enough for you to go to sleep. Arthritis UK suggests avoiding caffeine after midday.",
        },
      ],
    },
    sources: [NHS_NECK, AUK_NECK, NHS_TENSION, AUK_SLEEP, NHS_PAIN],
    quiz: {
      question: "What kind of pillow does the NHS suggest for neck pain?",
      options: [{ text: "A low, firm pillow", right: true }, { text: "Several thick pillows" }, { text: "No pillow at all" }],
      why: "The NHS suggests a low, firm pillow.",
    },
  },
  {
    id: "neck-whiplash",
    kicker: "Injury",
    question: "What helps after a whiplash injury?",
    hook: "It may hurt a little, but carrying on with everyday activities speeds recovery. A collar does not help.",
    short: "Whiplash is a neck injury caused by sudden movement of the head, most often after a traffic accident, a fall or a sports injury. It usually gets better within 2 to 3 months, though some people have symptoms for longer. Painkillers and carrying on with everyday activities help; a neck brace or collar does not.",
    sections: [
      {
        heading: "What whiplash is",
        paragraphs: [
          "Whiplash is a neck injury caused by sudden movement of the head. It most often happens after a traffic accident, a slip or fall, or a sports injury.",
          "The head is jerked forwards, backwards or sideways, and the pain comes from the stretching of the tissues that hold the bones of the neck in place. The Chartered Society of Physiotherapy says the most likely cause of pain is a strain of the small facet joints of the neck.",
        ],
      },
      {
        heading: "Symptoms, and the delay",
        paragraphs: [
          "Common symptoms include neck pain, neck stiffness and difficulty moving your head, headaches, and pain and muscle spasms in the shoulders and arms. It can take several hours for symptoms to start, and NHS inform says there is often a delay of 24 to 48 hours.",
          "Some people also have short-term dizziness or blurred vision, tinnitus, sleep disturbance, or pain in the jaw. The Chartered Society of Physiotherapy says some people feel more jumpy, stressed and irritable.",
        ],
      },
      {
        heading: "Keep moving, without a collar",
        paragraphs: [
          "Take painkillers such as paracetamol or ibuprofen, and try to continue doing everyday activities. It might hurt a little, but it will speed up your recovery. Do not rest your neck for long periods.",
          "Do not use a neck brace or collar to support your neck, because this does not help. NHS inform says it can often make symptoms worse, and suggests gently moving your neck and shoulders straight after your injury.",
        ],
      },
      {
        heading: "How long it takes",
        paragraphs: [
          "Whiplash usually gets better within 2 to 3 months, but some people have symptoms for longer. You should see the biggest change within the first couple of weeks, and most whiplash should have started to improve within 6 weeks.",
          "See a GP if symptoms have not improved after 1 week, or painkillers have not worked. A GP may prescribe a stronger painkiller such as codeine, and may refer you to a physiotherapist, a pain specialist or for psychological support.",
        ],
      },
      {
        heading: "Stress and urgent signs",
        paragraphs: [
          "Stress may play a part in recovery from whiplash. Some people have a strong stress reaction to the accident, with nightmares or intrusive thoughts, and the Chartered Society of Physiotherapy suggests talking to your GP or physiotherapist about psychological support.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you have severe pain despite taking paracetamol or ibuprofen, pins and needles on one or both sides of your body, problems walking or sitting upright, a sudden electric shock feeling in your neck and back, or weakness in your hands, arms or legs.",
        ],
      },
    ],
    helps: [
      "Take painkillers, such as paracetamol or ibuprofen, to help with pain.",
      "Try to continue doing everyday activities: it might hurt a little, but it will speed up your recovery.",
      "Do not use a neck brace or collar to support your neck.",
      "See a GP if symptoms of whiplash have not improved after 1 week.",
      "If the accident still troubles you, talk to your GP or physiotherapist about psychological support.",
    ],
    tryThisWeek: [
      "Keep up your everyday activities.",
      "Leave the collar off.",
      "See a GP if no better after a week.",
    ],
    ask: "Is my whiplash recovering as expected, and would physiotherapy help?",
    interactive: {
      kind: "timeline",
      title: "Recovering from whiplash",
      steps: [
        { id: "hours", when: "First hours", title: "Symptoms may be delayed", points: ["It can take several hours for symptoms to start.", "Gently move your neck and shoulders."] },
        { id: "two-days", when: "24 to 48 hours", title: "Pain and stiffness", points: ["There is often a delay before pain or stiffness.", "Painkillers help you move more freely."] },
        { id: "week", when: "1 week", title: "Not improving?", points: ["See a GP if symptoms have not improved."] },
        { id: "six-weeks", when: "6 weeks", title: "Starting to improve", points: ["Most whiplash should have started to improve.", "If not, talk to a healthcare professional."] },
        { id: "months", when: "2 to 3 months", title: "Usually better", points: ["Whiplash usually gets better by now.", "Some people have symptoms for longer."] },
      ],
    },
    sources: [NHS_WHIPLASH, INFORM_WHIPLASH, CSP_WHIPLASH, AUK_NECK],
    quiz: {
      question: "Should you wear a neck collar after whiplash?",
      options: [{ text: "No, it does not help", right: true }, { text: "Yes, for the first month" }, { text: "Yes, at night" }],
      why: "Do not use a neck brace or collar to support your neck, because this does not help.",
    },
  },
  {
    id: "neck-long-term",
    kicker: "Long-term pain",
    question: "Why does my neck pain keep coming back?",
    hook: "Around half of people have it come back. Exercise, the bigger picture and support can break the cycle.",
    short: "Around half of people with neck pain have it come back. Neck pain can carry on after the original problem has settled, partly because lack of movement leaves the neck muscles weak and stiff. For neck pain lasting more than three months, research suggests exercise is the most effective treatment, and a pain management programme may help if it is affecting your life.",
    sections: [
      {
        heading: "Coming back is common",
        paragraphs: [
          "Around 50 per cent of people with neck pain have it come back. The Chartered Society of Physiotherapy says it is important to understand what may have caused your neck pain if you want to stop it returning.",
          "The NHS says that with cervical spondylosis, treatment usually takes a few weeks to work, but the pain and stiffness can come back.",
        ],
      },
      {
        heading: "Why it can linger",
        paragraphs: [
          "Neck pain quite often continues even after the original problem has settled. Lack of movement can make your neck muscles weak and stiff, so they tire more easily and are more likely to hurt when you move them.",
          "Over time you may start avoiding more activities, lose confidence and start to feel anxious or depressed, which can make you less likely to exercise. Arthritis UK says this can happen to anyone, and the longer it continues, the harder it is to recover.",
        ],
      },
      {
        heading: "Exercise works best",
        paragraphs: [
          "If you have had a neck problem for more than three months, research suggests the most effective treatment is exercise. In most cases the type of exercise does not seem to matter, as long as you stay active, so choose something you like and keep at it.",
          "Reduced physical activity is a risk factor for neck pain, and people with stronger necks from exercise are less likely to have neck pain. The NHS suggests adults aim for at least 150 minutes of moderate activity a week, and strengthening activities on at least 2 days a week.",
        ],
      },
      {
        heading: "Look at the bigger picture",
        paragraphs: [
          "Sleeping less, more stress, less exercise and longer spells in one position are all possible triggers. Pain can also make you tired, anxious and depressed, which can make the pain even worse.",
          "If your neck pain is not improving, keeps returning or stops you doing things you enjoy even though you are active, it may help to see a physiotherapist for more specific exercises.",
        ],
      },
      {
        heading: "Support for the longer term",
        paragraphs: [
          "If neck pain carries on despite treatment and affects your daily life or mood, a pain management programme may help. These focus on better coping and long-term self-management, and are usually group sessions run by doctors, physiotherapists, psychologists and others.",
          "They will not cure the pain, but they should help you have a better quality of life. Talk to your doctor, who may be able to refer you. Keeping in touch with friends and family, even with shorter visits, is good for your health.",
        ],
      },
    ],
    helps: [
      "Choose a form of exercise you like, and keep at it.",
      "If your neck pain keeps returning, see a physiotherapist for more specific exercises.",
      "Look at the bigger picture: sleep, stress, activity and long spells in one position.",
      "Ask your doctor whether a pain management programme might help.",
      "Keep in touch with friends and family, even with shorter visits.",
    ],
    tryThisWeek: [
      "Pick an exercise you enjoy.",
      "Check your sleep and stress.",
      "Keep in touch with friends.",
    ],
    ask: "My neck pain keeps coming back: would more specific exercises or a pain management programme help?",
    interactive: {
      kind: "risk-check",
      title: "What keeps it coming back?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "sleep", label: "Sleeping less than usual", note: "Sleeping less is a possible trigger for neck pain, says the Chartered Society of Physiotherapy.", changeable: true },
        { id: "stress", label: "Feeling more stressed", note: "Stress can make neck pain worse. Practising relaxation can reduce tension across your shoulders and neck.", changeable: true },
        { id: "exercise", label: "Less exercise than usual", note: "Reduced physical activity is a risk factor. People with stronger necks from exercise are less likely to have neck pain.", changeable: true },
        { id: "position", label: "Long spells in one position", note: "Working in one position for longer periods is a possible trigger. Take regular breaks.", changeable: true },
        { id: "avoiding", label: "Avoiding activities", note: "Lack of movement can leave neck muscles weak and stiff, so they tire easily and are more likely to hurt.", changeable: true },
        { id: "age", label: "Getting older", note: "Many people over 40 get cervical spondylosis as part of getting older, and its pain and stiffness can come back.", changeable: false },
      ],
    },
    sources: [CSP_CAUSES, CSP_TREATMENT, AUK_NECK, CSP_HELP, NHS_SPONDYLOSIS, NHS_ACTIVITY, NHS_PAIN],
    quiz: {
      question: "For neck pain lasting more than three months, what does research suggest works best?",
      options: [{ text: "Exercise", right: true }, { text: "More hands-on treatment" }, { text: "Resting the neck" }],
      why: "If you have had a neck problem for more than three months, research suggests the most effective treatment is exercise.",
    },
  },
];
