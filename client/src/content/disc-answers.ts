import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Slipped disc page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's `sources`;
// nothing is added that those pages do not say. The condition itself comes from nhs.uk's Slipped disc page, with
// nhs.uk for sciatica, back pain, neck pain, medicines, physiotherapy, MRI and lumbar decompression surgery, and
// NHS inform (NHS 24, Scotland), Arthritis UK (formerly Versus Arthritis), BackCare (web pages and information
// sheets), the Chartered Society of Physiotherapy, NICE (NG59), the Royal College of Surgeons of England and
// gov.uk (Access to Work). Emergency guidance is given exactly as each service words it. Exercises are described
// only as the sources describe them. General information only; it never replaces what a person's own GP,
// physiotherapist or surgeon tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const inform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/illnesses-and-conditions/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/conditions/back-pain/${path}` });
const backcare = (label: string, path: string): LearnSource => ({ label: `BackCare: ${label}`, url: `https://backcare.org.uk/${path}` });

const NHS_SLIPPED = nhs("Slipped disc", "conditions/slipped-disc/");
const NHS_SCIATICA = nhs("Sciatica", "conditions/sciatica/");
const NHS_BACK = nhs("Back pain", "conditions/back-pain/");
const NHS_NECK = nhs("Neck pain", "symptoms/neck-pain-and-stiff-neck/");
const NHS_DECOMP = nhs("Lumbar decompression surgery", "tests-and-treatments/lumbar-decompression-surgery/");
const NHS_PHYSIO = nhs("Physiotherapy", "tests-and-treatments/physiotherapy/");
const NHS_MSK = nhs("Get NHS help for back or joint problems", "nhs-services/get-nhs-help-for-back-joint-problems/");
const NHS_MRI = nhs("MRI scan", "tests-and-treatments/mri-scan/");
const NHS_NSAIDS = nhs("NSAIDs", "medicines/nsaids/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_CODEINE = nhs("Codeine", "medicines/codeine/");
const NHS_DIAZEPAM = nhs("Diazepam", "medicines/diazepam/");
const NHS_AMITRIPTYLINE = nhs("About amitriptyline for pain and migraine", "medicines/amitriptyline-for-pain/about-amitriptyline-for-pain-and-migraine/");
const NHS_AMITRIPTYLINE_HOW = nhs("How and when to take amitriptyline for pain and migraine", "medicines/amitriptyline-for-pain/how-and-when-to-take-amitriptyline-for-pain-and-migraine/");
const NHS_GABAPENTIN = nhs("About gabapentin", "medicines/gabapentin/about-gabapentin/");
const NHS_GABAPENTIN_QUESTIONS = nhs("Common questions about gabapentin", "medicines/gabapentin/common-questions-about-gabapentin/");
const NHS_SCIATICA_EXERCISES = nhs("Exercises for sciatica problems", "live-well/exercise/exercises-sciatica-problems/");
const NHS_ADULT_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_PAIN = nhs("10 ways to reduce pain", "live-well/pain/10-ways-to-ease-pain/");

const INF_BACK = inform("Back problems", "muscle-bone-and-joints/neck-and-back-problems-and-conditions/back-problems");
const INF_SCIATICA = inform("Sciatica", "muscle-bone-and-joints/neck-and-back-problems-and-conditions/sciatica");
const INF_NECK = inform("Neck problems", "muscle-bone-and-joints/neck-and-back-problems-and-conditions/neck-problems");
const INF_BACK_EXERCISES = inform("Exercises for back pain", "muscle-bone-and-joints/neck-and-back-problems-and-conditions/exercises-for-back-pain/");
const INF_PAINKILLERS = inform("When should I take painkillers?", "muscle-bone-and-joints/when-should-i-take-painkillers");

const AU_BACK = au("Back pain", "understanding-arthritis/conditions/back-pain/");
const AU_BACK_EXERCISES = au("Exercises for the back", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-back/");
const AU_STEROID = au("Steroid injections", "understanding-arthritis/arthritis-treatments/drugs/steroid-injections/");

const CSP_CAUSES = csp("Causes of back pain", "causes-back-pain");
const CSP_HELP = csp("Getting help for back pain", "getting-help-back-pain");
const CSP_LIVING = csp("Living with back pain", "living-back-pain");
const CSP_VIDEO_EXERCISES = csp("Video exercises for back pain", "video-exercises-back-pain");

const BACKCARE_CONDITIONS = backcare("Conditions", "i-have-back-or-neck-pain/conditions/");
const BACKCARE_TOP_TIPS = backcare("Top 10 tips for back pain (information sheet)", "wp-content/uploads/2021/02/705-Top-10-Tips-for-Back-Pain.pdf");
const BACKCARE_LIFTING = backcare("Lifting and shifting (information sheet)", "wp-content/uploads/2022/10/Manual-Handling-Lifting-and-Shifting.pdf");
const BACKCARE_WORKPLACE = backcare("Back pain in the work place: office furniture (information sheet)", "wp-content/uploads/2021/01/102-Workplace.pdf");
const BACKCARE_CHAIR = backcare("Choosing a chair (information sheet)", "wp-content/uploads/2020/01/107-Choosing-a-Chair.pdf");
const BACKCARE_BEDS = backcare("Beds (information sheet)", "wp-content/uploads/2021/02/105-Beds.pdf");

const NICE_NG59: LearnSource = { label: "NICE: Low back pain and sciatica in over 16s (NG59), recommendations", url: "https://www.nice.org.uk/guidance/ng59/chapter/Recommendations" };
const RCS_BEFORE_SURGERY: LearnSource = { label: "Royal College of Surgeons of England: Things to consider before having surgery", url: "https://www.rcseng.ac.uk/patient-care/having-surgery/things-to-consider-before-having-surgery/" };
const GOV_ACCESS_TO_WORK: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const discAnswers: LearnArticle[] = [
  {
    id: "disc-what-it-is",
    kicker: "Understanding",
    question: "What is a slipped disc?",
    hook: "A soft cushion in the spine that bulges onto a nerve. Painful, but often better with time, and many people never know they have one.",
    short: "A slipped disc, also called a prolapsed or herniated disc, is when a soft cushion of tissue between the bones in your spine bulges outwards. It is painful if it presses on nerves. It usually gets better slowly with rest, gentle exercise and painkillers.",
    sections: [
      {
        heading: "A cushion that bulges",
        paragraphs: [
          "A slipped disc, also called a prolapsed or herniated disc, is when a soft cushion of tissue between the bones in your spine bulges outwards. It is painful if it presses on nerves.",
          "Arthritis UK describes it as a disc in the back that bulges and presses on a nearby nerve, which can cause pain.",
        ],
      },
      {
        heading: "How the spine is built",
        paragraphs: [
          "The spinal column is made up of 24 bones called vertebrae, stacked one on top of another, with discs between them. The discs cushion the bones and help the spine move.",
          "The spinal cord passes inside the vertebrae, which protect it. It connects to the rest of the body through nerves that pass between the vertebrae, and these parts of the nerves are called nerve roots.",
        ],
      },
      {
        heading: "What happens inside the disc",
        paragraphs: [
          "BackCare explains that it happens when the fibrous outer layer of the disc tears, allowing the inner jelly-like part of the disc to bulge or protrude outward.",
          "BackCare calls it a normal feature of age-related degeneration, and very common in people with and without back pain.",
        ],
      },
      {
        heading: "Not really slipping",
        paragraphs: [
          "The Chartered Society of Physiotherapy says the term slipped disc is widely used but not accurate, and can make people more fearful of moving. Discs are designed to help the spine take loads, and movement and loading help to keep the disc healthy and strong.",
          "A disc can be strained under sudden or repetitive overload, in the same way as other joints in the body. This usually gets better without doing anything, and can respond well to simple painkillers and keeping active.",
        ],
      },
      {
        heading: "Often no symptoms, and usually better with time",
        paragraphs: [
          "Not all slipped discs cause symptoms. Many people will never know they have slipped a disc.",
          "A slipped disc is the most common cause of sciatica, and is more likely to happen as you get older. NHS inform says nerves are resilient, and in most cases inflammation and any disc changes resolve, allowing nerves to recover.",
        ],
      },
    ],
    helps: [
      "Keep active and take painkillers to help ease the pain.",
      "Remember that movement and loading help to keep the disc healthy and strong.",
      "In many areas you may be able to get physiotherapy from NHS community musculoskeletal (MSK) services without needing a referral from a GP.",
      "See a GP if painkillers are not helping or the pain is not getting better after a few weeks.",
    ],
    tryThisWeek: [
      "Keep active.",
      "Keep moving: it helps the disc.",
      "Check if you can refer yourself.",
    ],
    ask: "Is a slipped disc the cause of my symptoms, and where in my spine is it?",
    interactive: {
      kind: "flip-cards",
      title: "Words you may hear",
      intro: "Turn each card to see what the word means.",
      cards: [
        { id: "slipped", front: "Slipped disc", when: "Also prolapsed or herniated", back: "A soft cushion of tissue between the bones in your spine that bulges outwards. It is painful if it presses on nerves." },
        { id: "inside", front: "Inside a disc", when: "Two parts", back: "A fibrous outer layer, and an inner jelly-like part that can bulge or protrude outward if the outer layer tears." },
        { id: "vertebrae", front: "Vertebrae", when: "The bones of the spine", back: "24 bones stacked one on top of another, with discs between them that cushion the bones and help the spine move." },
        { id: "nerve-roots", front: "Nerve roots", when: "Where nerves leave the spine", back: "The parts of the nerves that pass between the vertebrae, connecting the spinal cord to the rest of the body." },
        { id: "sciatica", front: "Sciatica", when: "Pain down the leg", back: "Pain in the buttocks, hips or legs if the disc is pressing on the sciatic nerve, which runs from your lower back to your feet." },
      ],
    },
    sources: [NHS_SLIPPED, AU_BACK, BACKCARE_CONDITIONS, CSP_CAUSES, NHS_SCIATICA, INF_SCIATICA],
    quiz: {
      question: "Do all slipped discs cause symptoms?",
      options: [{ text: "No: many people never know they have one", right: true }, { text: "Yes, always severe pain" }, { text: "Only in older people" }],
      why: "Not all slipped discs cause symptoms. Many people will never know they have slipped a disc.",
    },
  },
  {
    id: "disc-symptoms",
    kicker: "Symptoms",
    question: "What does a slipped disc feel like in the back, neck, arms and legs?",
    hook: "Pain where the disc is, and sometimes pain, tingling or numbness much further away, where the nerve travels.",
    short: "A slipped disc can cause lower back or neck pain, numbness or tingling in the shoulders, back, arms, hands, legs or feet, and muscle weakness. If it presses on the sciatic nerve, it causes pain in the buttocks, hips or legs, called sciatica. Sciatica usually gets better in a few weeks to a few months.",
    sections: [
      {
        heading: "Where it can be felt",
        paragraphs: [
          "A slipped disc can cause lower back pain or neck pain, and problems bending or straightening your back. It can also cause numbness or tingling in your shoulders, back, arms, hands, legs or feet, and muscle weakness.",
          "If the disc is pressing on the sciatic nerve, there can be pain in the buttocks, hips or legs, called sciatica.",
        ],
      },
      {
        heading: "Sciatica in the leg",
        paragraphs: [
          "The symptoms of sciatica usually affect your bottom and the back of one leg, often including your foot and toes. There may be a sharp, burning pain down the back of the leg, tingling like pins and needles, numbness or weakness.",
          "The pain may be worse when moving, sneezing or coughing. There may also be back pain, but it is not usually as bad as the pain in the leg.",
        ],
      },
      {
        heading: "Hard-to-describe feelings",
        paragraphs: [
          "NHS inform says a change in feeling in the leg or foot can include pins and needles, numbness, hot or cold, burning or shooting sensations, and sensations that can be hard to describe. Symptoms can have a sudden or slow onset and can vary from mild to severe.",
          "Its back pages add that back problems can cause hot, burning, shooting or stabbing pains into one or both legs, which can be due to nerve irritation.",
        ],
      },
      {
        heading: "In the neck and arms",
        paragraphs: [
          "Neck problems can cause pain and stiffness that sometimes spreads down the arm, and pins and needles or numbness in the arm or hand. They can also cause pain in the shoulders, arms and upper back, and headaches.",
          "NHS inform says to contact your GP practice urgently if you feel clumsiness in your hands, or numbness, pins and needles or weakness that is worsening in one or both arms, or if you have problems with your balance or walking since your neck pain started. If your GP practice is closed, phone 111.",
        ],
      },
      {
        heading: "How long it lasts",
        paragraphs: [
          "Sciatica usually gets better in a few weeks to a few months, but it can last longer. NHS inform says it usually improves within 12 weeks, though for some people symptoms take up to a year to settle.",
          "Lots of things can influence symptoms, such as poor sleep, stress and emotional wellbeing.",
        ],
      },
    ],
    helps: [
      "See a GP if sciatica has not improved after trying home treatments for a few weeks, is getting worse, or is stopping you doing your normal activities.",
      "See a GP about neck pain with other symptoms, like pins and needles or a cold arm.",
      "Contact your GP practice urgently, or phone 111 if it is closed, about worsening numbness, weakness or clumsiness in your arms.",
      "Look after your sleep, stress and emotional wellbeing, which can all influence symptoms.",
      "Call 999 or go to A&E for numbness around your bottom or genitals, or if you cannot pee or control when you pee or poo.",
    ],
    tryThisWeek: [
      "See a GP if sciatica is not improving.",
      "Look after your sleep and stress.",
      "Learn when to call 999.",
    ],
    ask: "Are my arm or leg symptoms coming from a disc in my spine?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your GP or physio",
      intro: "Tick any you have noticed. They become a list to take to your appointment.",
      signs: [
        "Lower back pain",
        "Neck pain",
        "Problems bending or straightening my back",
        "Numbness or tingling in my arms or hands",
        "Numbness or tingling in my legs or feet",
        "Muscle weakness",
        "Pain in my buttocks, hips or legs",
        "Pain worse when moving, sneezing or coughing",
      ],
      after: "Call 999 or go to A&E for numbness around your bottom or genitals, if you cannot pee, lose feeling in 1 or both legs, or cannot control when you pee or poo.",
      copyHeading: "Things I have noticed",
    },
    sources: [NHS_SLIPPED, NHS_SCIATICA, INF_SCIATICA, INF_NECK, INF_BACK, NHS_NECK],
    quiz: {
      question: "Where do the symptoms of sciatica usually show up?",
      options: [{ text: "Your bottom and the back of one leg", right: true }, { text: "Both arms" }, { text: "The front of the chest" }],
      why: "The symptoms of sciatica usually affect your bottom and the back of one leg, often including your foot and toes.",
    },
  },
  {
    id: "disc-causes",
    kicker: "Causes",
    question: "Why does a disc slip?",
    hook: "Mostly ordinary ageing, sometimes strain. A few of the causes are things you can work on.",
    short: "A slipped disc can happen because of ageing, exercising too hard, lifting heavy objects the wrong way, sitting or driving for long periods, or being inactive or overweight. It is more likely as you get older. Nicotine weakens the disc tissue, so the NHS advises not to smoke.",
    sections: [
      {
        heading: "Common reasons",
        paragraphs: [
          "The NHS says a slipped disc can happen because of ageing, exercising too hard, lifting heavy objects the wrong way, sitting down or driving for long periods of time, or being inactive or overweight.",
          "BackCare says it is a normal feature of age-related degeneration, although it is also commonly attributed to lifting and injuries.",
        ],
      },
      {
        heading: "Age",
        paragraphs: [
          "A slipped disc is the most common cause of sciatica, and is more likely to happen as you get older.",
          "As you grow older, the joints, discs and ligaments of your spine age as well. They remain strong, but it is usual for your back to get stiffer.",
        ],
      },
      {
        heading: "Strain and overload",
        paragraphs: [
          "The Chartered Society of Physiotherapy says a disc can be strained under sudden or repetitive overload, in the same way as other joints in the body. This can cause pain locally in the back, or referred pain into the buttock and legs.",
          "NHS inform says sciatica can come from inflammation around the nerves, and in some cases from pressure, usually from a disc related change.",
        ],
      },
      {
        heading: "Smoking",
        paragraphs: [
          "The NHS advises not to smoke, because nicotine weakens the disc tissue in the spine. It also says smoking can increase your risk of getting sciatica.",
          "BackCare's top tips also say to quit smoking, as it increases your chances of developing back pain.",
        ],
      },
      {
        heading: "What turns up pain",
        paragraphs: [
          "Pain can also be turned up by stress, feeling down, being tired and rundown, not getting enough good quality sleep, being overweight or not getting enough physical activity. The Chartered Society of Physiotherapy says all pain is 100 per cent real and never all in your head.",
        ],
      },
    ],
    helps: [
      "Keep active and take regular exercise.",
      "Use a safe technique when lifting heavy objects.",
      "Do not smoke: nicotine weakens the disc tissue in the spine.",
      "Change your sitting position every few minutes.",
      "Lose weight if you're overweight.",
    ],
    tryThisWeek: [
      "Take some regular exercise.",
      "Lift heavy things safely.",
      "Stop smoking: it weakens discs.",
    ],
    ask: "What is likely to have caused my slipped disc, and what can I change?",
    interactive: {
      kind: "risk-check",
      title: "What makes a slipped disc more likely",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "age", label: "Getting older", note: "A slipped disc is more likely to happen as you get older.", changeable: false },
        { id: "too-hard", label: "Exercising too hard", note: "The NHS lists exercising too hard among the reasons a slipped disc can happen.", changeable: true },
        { id: "lifting", label: "Lifting heavy objects the wrong way", note: "The NHS advises using a safe technique when lifting heavy objects.", changeable: true },
        { id: "sitting", label: "Sitting or driving for long periods", note: "BackCare suggests changing your sitting position every few minutes.", changeable: true },
        { id: "inactive", label: "Being inactive", note: "The NHS advises keeping active and taking regular exercise.", changeable: true },
        { id: "weight", label: "Being overweight", note: "The NHS suggests losing weight if you're overweight, to help stop sciatica coming back.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Nicotine weakens the disc tissue in the spine.", changeable: true },
        { id: "stress", label: "Stress or poor sleep", note: "The Chartered Society of Physiotherapy says these can turn up the volume on pain.", changeable: true },
      ],
    },
    sources: [NHS_SLIPPED, BACKCARE_CONDITIONS, NHS_SCIATICA, CSP_CAUSES, INF_SCIATICA, AU_BACK, BACKCARE_TOP_TIPS],
    quiz: {
      question: "Why does the NHS advise not smoking?",
      options: [{ text: "Nicotine weakens the disc tissue in the spine", right: true }, { text: "It makes you lift badly" }, { text: "It stops painkillers working" }],
      why: "The NHS advises not to smoke, because nicotine weakens the disc tissue in the spine.",
    },
  },
  {
    id: "disc-urgent",
    kicker: "Urgent help",
    question: "Which symptoms need help straight away?",
    hook: "Rarely, squeezed nerves at the base of the spine become an emergency. Knowing the signs, and where to go, matters.",
    short: "The NHS says to call 999 or go to A&E if you have back pain and numbness around your bottom or genitals, cannot pee, lose feeling in 1 or both legs, or cannot control when you pee or poo. Do not drive to A&E: ask someone to drive you, or call 999 and ask for an ambulance.",
    sections: [
      {
        heading: "Call 999 or go to A&E",
        paragraphs: [
          "The NHS says to call 999 or go to A&E if you have back pain and numbness around your bottom or genitals, cannot pee, lose feeling in 1 or both legs, or cannot control when you pee or poo. The same applies if the back pain started after a serious accident, such as a car accident.",
          "Its back pain page adds pain, tingling, weakness or numbness in both legs, and changes in how your penis or vagina feels during sex, or not being able to get or keep an erection or to orgasm.",
        ],
      },
      {
        heading: "Getting there",
        paragraphs: [
          "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance. Bring any medicines you take with you.",
          "These could be symptoms of a serious back problem that needs to be treated in hospital as soon as possible.",
        ],
      },
      {
        heading: "Cauda equina syndrome",
        paragraphs: [
          "The cauda equina, literally meaning horse's tail, is the nerve bundle that controls the pelvic organs and lower limbs. BackCare says sudden onset cauda equina syndrome is considered an emergency.",
          "NHS inform describes it as a rare but serious back condition which can lead to permanent damage or disability. Arthritis UK says urgent surgery may be needed if you lose bladder or bowel control or the use of your legs, and to seek urgent medical help via A&E.",
        ],
      },
      {
        heading: "In Scotland",
        paragraphs: [
          "NHS inform, the health information service for Scotland, says to phone 111 if you have new loss of feeling or pins and needles between your inner thighs or genitals, numbness in or around your back passage or buttocks, or altered feeling when using toilet paper to wipe yourself.",
          "Its other signs include increasing difficulty when you try to urinate or to control your flow of urine, leaking urine, and not knowing when your bladder is full or empty.",
        ],
      },
      {
        heading: "Urgent, but not 999",
        paragraphs: [
          "The NHS says to ask for an urgent GP appointment or get help from 111 if you have back pain and feel hot, cold, shivery or generally unwell, or have severe pain that starts suddenly or is getting worse quickly.",
          "See a GP if back pain comes with a very high temperature, unexplained weight loss, a swelling in your back, or pain that is worse at night.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E for numbness around your bottom or genitals, if you cannot pee, or if you lose feeling in 1 or both legs.",
      "Call 999 or go to A&E if you cannot control when you pee or poo.",
      "Do not drive to A&E: ask someone to drive you, or call 999 and ask for an ambulance.",
      "Bring any medicines you take with you.",
      "Ask for an urgent GP appointment or get help from 111 if you have back pain and feel hot, cold, shivery or generally unwell.",
    ],
    tryThisWeek: [
      "Learn the symptoms that mean 999.",
      "Never drive yourself to A&E.",
      "Bring your medicines with you.",
    ],
    ask: "Which symptoms should make me call 999, and which mean an urgent GP appointment?",
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        {
          id: "numb",
          situation: "Your bottom and genitals feel numb, and you cannot pee.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait for a routine GP appointment" }],
          why: "The NHS says to call 999 or go to A&E if you have back pain and numbness around your bottom or genitals, or cannot pee.",
        },
        {
          id: "leg",
          situation: "You have lost feeling in one leg.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Rest and see how it is tomorrow" }],
          why: "The NHS says to call 999 or go to A&E if you have back pain and lose feeling in 1 or both legs.",
        },
        {
          id: "drive",
          situation: "You need to get to A&E.",
          options: [{ text: "Ask someone to drive you, or call 999", best: true }, { text: "Drive yourself" }],
          why: "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance.",
        },
        {
          id: "unwell",
          situation: "Your back hurts and you feel hot, shivery and unwell.",
          options: [{ text: "Urgent GP appointment or 111", best: true }, { text: "Wait a few weeks" }],
          why: "The NHS says to ask for an urgent GP appointment or get help from 111 if you have back pain and feel hot, cold, shivery or generally unwell.",
        },
      ],
    },
    sources: [NHS_SLIPPED, NHS_BACK, NHS_SCIATICA, BACKCARE_CONDITIONS, INF_BACK, AU_BACK],
    quiz: {
      question: "If you need A&E for these symptoms, should you drive yourself?",
      options: [{ text: "No: ask someone to drive you, or call 999", right: true }, { text: "Yes, if the pain allows" }, { text: "Only if it is nearby" }],
      why: "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance.",
    },
  },
  {
    id: "disc-moving",
    kicker: "Staying active",
    question: "Should I rest or keep moving with a slipped disc?",
    hook: "A little rest if the pain is very bad, then gentle movement as soon as you can. Moving may hurt, but it is not harmful.",
    short: "If the pain is very bad, you may need to rest at first. But you will get better more quickly if you gradually start gentle exercise such as walking, swimming and yoga as soon as you can. Even if moving hurts, it is not harmful and can help you get better faster.",
    sections: [
      {
        heading: "Rest at first, then move",
        paragraphs: [
          "If the pain is very bad, you may need to rest at first. But you will get better more quickly if you gradually start doing gentle exercise such as walking, swimming and yoga as soon as you can.",
          "The type of exercise is not important as long as it does not cause pain or make your back pain worse.",
        ],
      },
      {
        heading: "Moving is not harmful",
        paragraphs: [
          "With sciatica, the NHS says not to sit or lie down for long periods. Even if moving hurts, it is not harmful and can help you get better faster.",
          "Resting in bed does not help back pain, and often makes it harder to get going again. In the past people were advised to rest in bed, and Arthritis UK says this does more harm than good.",
        ],
      },
      {
        heading: "Little and often",
        paragraphs: [
          "NHS inform says most people recover from sciatica with a combination of time, modifying activity and pacing themselves to allow the nerves to adapt. The nerve can still be sensitive, so building up your tolerance to activities slowly, little and often, is recommended.",
          "Exercise might make your back feel a bit sore at first, but this does not usually mean you are harming your back. Start off gently, and each day try to do a little bit more.",
        ],
      },
      {
        heading: "Heat, ice and position",
        paragraphs: [
          "Heat packs held to the painful areas may help, and you can buy these from pharmacies. Never place ice or heat directly on your skin: use a barrier, like a towel. If you have any issues with circulation or sensation, NHS inform says you should not use ice or heat.",
          "If you have to sit or rest, try to change positions regularly and find one that reduces any pain in your back or legs.",
        ],
      },
      {
        heading: "How long recovery takes",
        paragraphs: [
          "You should see the biggest change in your symptoms within the first couple of weeks, and most problems should have improved within 6 weeks. If not, it is a good idea to talk to a healthcare professional.",
          "If you become more active gradually, it is unlikely you will cause any damage or harm. In the long term, the benefits of exercise far outweigh any increase in pain.",
        ],
      },
    ],
    helps: [
      "Gradually start gentle exercise such as walking, swimming and yoga as soon as you can.",
      "Carry on with your normal activities as much as possible.",
      "Do not sit or lie down for long periods.",
      "Build up your tolerance to activities slowly, little and often.",
      "Hold heat packs to the painful areas, with a towel between the pack and your skin.",
      "Do not stay in bed for long periods of time.",
    ],
    tryThisWeek: [
      "Take a gentle walk or swim.",
      "Avoid long spells sitting or lying.",
      "Build up little and often.",
    ],
    ask: "How much activity is right for me at the moment?",
    interactive: {
      kind: "timeline",
      title: "Getting better, step by step",
      steps: [
        { id: "start", when: "At first", title: "Rest if you need to", points: ["If the pain is very bad, you may need to rest at first.", "Then start gentle exercise as soon as you can."] },
        { id: "two-weeks", when: "First couple of weeks", title: "The biggest change", points: ["You should see the biggest change in your symptoms.", "Build up activity little and often."] },
        { id: "six-weeks", when: "Around 6 weeks", title: "Most problems improved", points: ["Most problems should have improved.", "If not, talk to a healthcare professional."] },
        { id: "twelve-weeks", when: "Up to 12 weeks", title: "Sciatica settling", points: ["Sciatica usually improves within 12 weeks."] },
        { id: "longer", when: "Sometimes longer", title: "Coming and going", points: ["For some people symptoms take up to a year to settle.", "They can come and go within this time."] },
      ],
    },
    sources: [NHS_SLIPPED, NHS_SCIATICA, INF_BACK, AU_BACK, NHS_PAIN, INF_SCIATICA, NHS_BACK],
    quiz: {
      question: "Is moving harmful when sciatica hurts?",
      options: [{ text: "No: it can help you get better faster", right: true }, { text: "Yes, stay in bed until it stops" }, { text: "Only walking is safe" }],
      why: "Even if moving hurts, it is not harmful and can help you get better faster.",
    },
  },
  {
    id: "disc-painkillers",
    kicker: "Medicines",
    question: "Which painkillers and nerve pain medicines help a slipped disc?",
    hook: "Regular anti-inflammatories help many people keep moving. Stronger medicines are short-term, and guidance on nerve pain medicines has changed.",
    short: "The NHS suggests anti-inflammatory painkillers such as ibuprofen, taken regularly up to the recommended daily amount, to help you keep moving. Codeine-based painkillers should only be used for a few days. NICE advises against gabapentinoids for sciatica, while low-dose amitriptyline is sometimes used for nerve pain.",
    sections: [
      {
        heading: "Anti-inflammatories, taken regularly",
        paragraphs: [
          "The NHS suggests trying anti-inflammatory painkillers such as ibuprofen for a slipped disc. Take them regularly, up to the recommended daily amount, rather than just when the pain is particularly bad, as this will help you to keep moving.",
          "Anti-inflammatory painkillers are not suitable for everyone, so speak to a pharmacist if you're not sure you can take them. Do not take ibuprofen tablets and capsules for more than 10 days unless advised to by a doctor.",
        ],
      },
      {
        heading: "Paracetamol, and sciatica",
        paragraphs: [
          "Paracetamol on its own is not recommended for back pain, but it may be used with another painkiller. For sciatica, the NHS says paracetamol is unlikely to help, and it is not clear how much anti-inflammatories such as ibuprofen help.",
          "NICE asks prescribers to be aware of the risk of harms and limited evidence of benefit from anti-inflammatories in sciatica, and to use the lowest effective dose for the shortest possible period of time.",
        ],
      },
      {
        heading: "Stronger painkillers and muscle relaxants",
        paragraphs: [
          "A pharmacist can advise about stronger painkillers containing codeine. These can help for pain that has just started, but they can cause addiction and should only be used for a few days.",
          "A doctor might prescribe a stronger painkiller or a muscle relaxant to use in the short term. Diazepam, a benzodiazepine used for muscle spasms, should only be used short term, up to 4 weeks, as taking it for longer can cause addiction and withdrawal symptoms.",
        ],
      },
      {
        heading: "Medicines for nerve pain",
        paragraphs: [
          "Amitriptyline is sometimes used at a low dose to treat nerve pain and improve sleep. It is best taken in the evening or before bed because it can make you sleepy, and it can take 6 weeks to work as a painkiller.",
          "NICE advises not offering gabapentinoids, other antiepileptics, oral corticosteroids or benzodiazepines for managing sciatica, as there is no overall evidence of benefit and there is evidence of harm. If you already take gabapentin, do not stop without talking to your doctor, as the dose needs to be reduced gradually.",
        ],
      },
      {
        heading: "Checking with a pharmacist",
        paragraphs: [
          "If you already take medicine for something else or have other health problems, check with a pharmacist before taking painkillers. NHS inform says that if you still need pain relief after 4 days, speak to your pharmacist.",
          "Taking anti-inflammatories with some other medicines, such as other anti-inflammatories, anticoagulants like warfarin, steroids or antidepressants, can cause problems.",
        ],
      },
    ],
    helps: [
      "Take anti-inflammatory painkillers regularly, up to the recommended daily amount, rather than only when the pain is bad.",
      "Speak to a pharmacist if you're not sure you can take anti-inflammatory painkillers.",
      "Use painkillers containing codeine only for a few days.",
      "Do not stop amitriptyline or gabapentin suddenly without talking to your doctor.",
      "Speak to your pharmacist if you still need pain relief after 4 days.",
      "Always follow the instructions on the packet.",
    ],
    tryThisWeek: [
      "Take painkillers regularly.",
      "Ask a pharmacist if unsure.",
      "Follow the packet instructions.",
    ],
    ask: "Which painkillers are safe for me, and for how long should I take them?",
    interactive: {
      kind: "flip-cards",
      title: "Pain medicines, card by card",
      intro: "Turn each card to see when each medicine is used and what to know.",
      cards: [
        { id: "ibuprofen", front: "Ibuprofen", when: "Anti-inflammatory, taken regularly", back: "Up to the recommended daily amount, to help you keep moving. Not suitable for everyone: ask a pharmacist." },
        { id: "paracetamol", front: "Paracetamol", when: "Not on its own for back pain", back: "Not recommended alone for back pain, but it may be used with another painkiller. Unlikely to help sciatica." },
        { id: "codeine", front: "Codeine", when: "For pain that has just started", back: "Can help for pain that has just started, but can cause addiction and should only be used for a few days." },
        { id: "diazepam", front: "Muscle relaxant", when: "Short term, for muscle spasms", back: "Diazepam should only be used short term, up to 4 weeks. Taking it for longer can cause addiction and withdrawal." },
        { id: "amitriptyline", front: "Amitriptyline", when: "Low dose, for nerve pain", back: "Best taken in the evening or before bed as it can make you sleepy. It can take 6 weeks to work as a painkiller." },
        { id: "gabapentinoids", front: "Gabapentin and pregabalin", when: "Taken for nerve pain", back: "NICE advises not offering them for sciatica. Never stop suddenly: the dose is reduced gradually." },
      ],
    },
    sources: [NHS_SLIPPED, NHS_BACK, NHS_SCIATICA, NHS_IBUPROFEN, NHS_CODEINE, NHS_DIAZEPAM, NHS_AMITRIPTYLINE, NHS_GABAPENTIN, NICE_NG59, AU_BACK, INF_PAINKILLERS, NHS_GABAPENTIN_QUESTIONS, NHS_AMITRIPTYLINE_HOW, NHS_NSAIDS],
    quiz: {
      question: "How does the NHS suggest taking anti-inflammatory painkillers for a slipped disc?",
      options: [{ text: "Regularly, up to the recommended daily amount", right: true }, { text: "Only when the pain is very bad" }, { text: "Once a week" }],
      why: "Take them regularly, up to the recommended daily amount, rather than just when the pain is particularly bad, as this will help you to keep moving.",
    },
  },
  {
    id: "disc-physio",
    kicker: "Physiotherapy",
    question: "Can physiotherapy and exercises help a slipped disc?",
    hook: "A physiotherapist can tailor exercises to you. Gentle moves, done little and often, help many people get going again.",
    short: "You may need physiotherapy for a slipped disc, and in many areas you can refer yourself to NHS community musculoskeletal (MSK) services. A physiotherapist can give you a home exercise programme. Seek advice from a physiotherapist or healthcare professional before starting any new exercise regime.",
    sections: [
      {
        heading: "Getting physiotherapy",
        paragraphs: [
          "You may need physiotherapy for a slipped disc. Physiotherapy from the NHS might not be available everywhere and waiting times can be long, and you can also get it privately.",
          "In many areas you may be able to get physiotherapy from NHS community musculoskeletal (MSK) services without needing a referral from a GP, and you do not need a diagnosis to use them.",
          "NICE suggests considering a group exercise programme within the NHS for a flare-up of low back pain with or without sciatica, and manual therapy only as part of a treatment package that includes exercise.",
        ],
      },
      {
        heading: "What a physiotherapist does",
        paragraphs: [
          "A physiotherapist will assess how you move and how your muscles, nerves and joints are working. Treatment may include a home exercise programme for strength and mobility, advice on pain management and hands-on treatment.",
          "After each session you may be given exercises to do at home, and it is important to do them regularly. When choosing a private physiotherapist, make sure they are chartered and registered with the Health and Care Professions Council.",
        ],
      },
      {
        heading: "Check first",
        paragraphs: [
          "The Chartered Society of Physiotherapy recommends seeking advice from a physiotherapist or healthcare professional before starting any new exercise regime. If any of its exercises worsen your pain, it says to seek urgent medical advice.",
          "The NHS's sciatica exercise videos say to get advice from a healthcare professional, such as a GP, before trying them if you have a health problem, an injury or any symptoms. Stop the exercise immediately if you feel any pain or become unwell.",
        ],
      },
      {
        heading: "Gentle moves lying down",
        paragraphs: [
          "NHS inform's back pain exercises include knee rolls, done lying on your back, for example on your bed. With your knees pointing towards the ceiling, slowly roll them to one side, hold for a few seconds, bring them back up, then repeat on the other side.",
          "Another is the knee hug: lying on your back, slowly bring your knees in towards your chest, then slowly release. Arthritis UK notes that with acute sciatica a hamstring stretch may pull on the sciatic nerve and make it feel worse, so ask a physiotherapist if it is suitable.",
        ],
      },
      {
        heading: "How hard, and how often",
        paragraphs: [
          "NHS inform suggests rating your pain out of 10 and aiming to keep it within 0 to 5 while you exercise. If it goes higher, do fewer repetitions, move more slowly or rest longer between movements.",
          "When starting, 2 to 3 repetitions at a time can help, and small amounts through the day are better. Stop the exercises if they make your symptoms worse or cause new pain.",
        ],
      },
    ],
    helps: [
      "Seek advice from a physiotherapist or healthcare professional before starting any new exercise regime.",
      "Check whether you can refer yourself to NHS community musculoskeletal (MSK) services.",
      "Do the exercises your physiotherapist gives you regularly.",
      "Keep your pain within 0 to 5 out of 10 while exercising.",
      "Stop the exercises if they make your symptoms worse or cause new pain.",
      "Try regular exercises for sciatica.",
    ],
    tryThisWeek: [
      "Ask a physio before starting.",
      "Check if you can refer yourself.",
      "Keep pain at 5 out of 10 or less.",
    ],
    ask: "Can I be referred to a physiotherapist, and which exercises suit my back?",
    interactive: {
      kind: "flip-cards",
      title: "Five gentle moves, card by card",
      intro: "Check with your GP or physiotherapist first. Turn each card to see how NHS inform describes it.",
      cards: [
        { id: "knee-rolls", front: "Knee rolls", when: "Lying down, on a bed", back: "Knees to the ceiling, slowly roll them to one side, hold a few seconds, come back up, then the other side." },
        { id: "pelvic-tilt", front: "Pelvic tilt", when: "Lying on your back", back: "Hands on hips, tilt your hips to flatten your back into the bed, hold 2 seconds, then tilt the other way." },
        { id: "knee-chest", front: "Knee to chest", when: "Lying on your back", back: "Bring one knee up towards your chest, the other knee pointing to the ceiling. Hold a few seconds, then release." },
        { id: "knee-hug", front: "Knee hug", when: "Lying on your back", back: "Slowly bring both knees in towards your chest, hands over the knees if you like, then slowly release." },
        { id: "back-curl", front: "Back curl", when: "On hands and knees", back: "Gently pull your spine upwards, chin in. Then slowly uncurl, chest towards the ground, head gently up." },
      ],
    },
    sources: [NHS_SLIPPED, NHS_PHYSIO, NHS_MSK, CSP_HELP, CSP_VIDEO_EXERCISES, INF_BACK_EXERCISES, AU_BACK_EXERCISES, NHS_SCIATICA_EXERCISES, NICE_NG59, NHS_SCIATICA],
    quiz: {
      question: "What pain level does NHS inform suggest staying within while you exercise?",
      options: [{ text: "0 to 5 out of 10", right: true }, { text: "6 to 10 out of 10" }, { text: "Pain does not matter" }],
      why: "NHS inform suggests rating your pain out of 10 and aiming to keep it within 0 to 5 while you exercise.",
    },
  },
  {
    id: "disc-injections-surgery",
    kicker: "Treatment",
    question: "When are injections or surgery used for a slipped disc?",
    hook: "Most people never need either. When symptoms do not settle, an injection or an operation may be discussed.",
    short: "A doctor might prescribe a steroid injection for a slipped disc, and for severe sciatica you may be referred for an epidural. Surgery is not usually needed, but a GP might refer you to discuss it if other treatments have not helped or there is worsening weakness or numbness.",
    sections: [
      {
        heading: "Injections",
        paragraphs: [
          "A doctor might prescribe a steroid injection to use in the short term for a slipped disc. If sciatica is severe and treatments have not helped, you may be referred to a hospital specialist for a painkilling injection such as an epidural.",
          "NICE guidance says to consider epidural injections of local anaesthetic and steroid in people with acute and severe sciatica, and not to offer spinal injections for managing low back pain.",
        ],
      },
      {
        heading: "About steroid injections",
        paragraphs: [
          "Arthritis UK explains that steroid injections reduce inflammation, which in turn should reduce pain. They cannot treat the underlying cause of a condition, but they can treat the symptoms.",
          "Most people have steroid injections without any side effects. Your doctor may check your blood pressure and blood sugar first, and if you have diabetes, it is important to monitor your blood sugar after an injection.",
        ],
      },
      {
        heading: "Scans",
        paragraphs: [
          "If your symptoms do not get better, you may be referred for further tests, like an MRI scan. NHS inform says a scan can be considered if symptoms are unchanged for more than 12 weeks, continue to greatly impact your quality of life and you wish to consider surgery.",
          "An MRI scan usually takes between 15 minutes and 1 hour, and it usually takes between 1 and 2 weeks to get the results.",
        ],
      },
      {
        heading: "When surgery is considered",
        paragraphs: [
          "Surgery is not usually needed. A GP might refer you to a specialist to discuss surgery if your symptoms have not improved using other treatments, or include worsening muscle weakness or numbness. Arthritis UK says very few people with back pain need an operation.",
          "NICE says to consider spinal decompression for sciatica when non-surgical treatment has not improved pain or function and scan findings are consistent with the symptoms. It also says a person's BMI, smoking status or psychological distress should not influence the decision to refer them for a surgical opinion.",
        ],
      },
      {
        heading: "The operation and recovery",
        paragraphs: [
          "Lumbar decompression surgery can be done when one of the small cushioning discs between the bones in the spine has moved out of place. Under a general anaesthetic, the surgeon removes small pieces of bone from a vertebra, and sometimes part of a disc, called a discectomy.",
          "You may be able to return to work around 4 to 6 weeks after the operation, and it may take up to 12 weeks to do all your usual activities. Contact the hospital or NHS 111 if you get new pain, weakness or numbness in your legs, problems controlling when you pee or poo, or a hot, red or oozing wound.",
        ],
      },
    ],
    helps: [
      "Talk to your GP and hospital staff about why an operation is being suggested and what it means in the longer term.",
      "If you want a second opinion, ask your GP for a further referral to a different surgeon.",
      "Keep in contact with your GP while you wait, and report any changes in your condition.",
      "If you have diabetes, monitor your blood sugar levels after a steroid injection.",
      "After surgery, contact the hospital or NHS 111 about new leg symptoms or problems controlling when you pee or poo.",
    ],
    tryThisWeek: [
      "Ask why surgery is being suggested.",
      "Ask your GP about a second opinion.",
      "Report any changes while you wait.",
    ],
    ask: "Would an injection or surgery help me, and what happens if I wait?",
    interactive: {
      kind: "timeline",
      title: "From first treatments to surgery",
      steps: [
        { id: "first", when: "First weeks", title: "Everyday treatments", points: ["Painkillers and keeping active.", "Physiotherapy may be needed."] },
        { id: "not-better", when: "If it is not getting better", title: "Injections and tests", points: ["A steroid injection may be prescribed.", "You may be referred for an MRI scan."] },
        { id: "twelve", when: "Over 12 weeks unchanged", title: "Thinking about surgery", points: ["A scan can be considered if you wish to consider surgery."] },
        { id: "operation", when: "The operation", title: "Lumbar decompression", points: ["Under general anaesthetic, so you are asleep.", "Usually around 2 to 4 hours."] },
        { id: "work", when: "Around 4 to 6 weeks", title: "Back to work", points: ["Depending on your work and your doctor's advice."] },
        { id: "usual", when: "Up to 12 weeks", title: "Usual activities", points: ["It may take this long to do everything you usually do."] },
      ],
    },
    sources: [NHS_SLIPPED, NHS_SCIATICA, NICE_NG59, AU_STEROID, NHS_DECOMP, NHS_MRI, INF_SCIATICA, RCS_BEFORE_SURGERY, AU_BACK],
    quiz: {
      question: "Is surgery usually needed for a slipped disc?",
      options: [{ text: "No, surgery is not usually needed", right: true }, { text: "Yes, straight away" }, { text: "Yes, after one week" }],
      why: "Surgery is not usually needed. A GP might refer you to a specialist to discuss surgery if your symptoms have not improved using other treatments.",
    },
  },
  {
    id: "disc-lifting",
    kicker: "Everyday life",
    question: "How can I lift and bend safely with a slipped disc?",
    hook: "Stop, think, bend your knees and keep it close. Bending is not the enemy; awkward, heavy, twisting lifts are.",
    short: "Lifting heavy objects the wrong way is one of the reasons a slipped disc can happen. Stop and think before lifting, bend your knees, keep the load close to your body and avoid twisting. Ask for help with anything too heavy or awkward.",
    sections: [
      {
        heading: "Why lifting matters",
        paragraphs: [
          "Lifting heavy objects the wrong way is one of the reasons a slipped disc can happen, and the NHS advises using a safe technique when lifting heavy objects.",
          "Arthritis UK says learning to lift correctly may help to prevent further episodes of back pain. NHS inform says back pain can be influenced by lifting something awkwardly.",
        ],
      },
      {
        heading: "Stop and think",
        paragraphs: [
          "BackCare advises stopping to think before moving anything. Be aware of your back and posture, the load and the distance you will carry it, so you can decide whether you can manage it yourself or need help.",
          "Avoid lifting anything that is too heavy for you, or which is large and an awkward shape. Always ask for help if you need it.",
        ],
      },
      {
        heading: "Lifting the load",
        paragraphs: [
          "Adopt a stable position, with your feet hip width apart and one foot slightly forward. Bend your knees to get down to the level of the load, and get a good hold on it.",
          "Lift the load smoothly, keeping it close to your body. Bend your knees and allow your spine to move as necessary, without twisting it.",
        ],
      },
      {
        heading: "Carrying and putting down",
        paragraphs: [
          "Walk steadily with the load close to your body, and avoid twisting to put it down. To lower it, place your feet hip width apart and bend your knees.",
          "When carrying shopping, try to use both hands, and use both straps of a backpack to spread the weight. BackCare suggests carrying items in a rucksack rather than single sling bags, and never twisting and bending at the same time.",
        ],
      },
      {
        heading: "Bending without fear",
        paragraphs: [
          "The Chartered Society of Physiotherapy says discs are designed to help the spine take loads, and that movement and loading help to keep the disc healthy and strong.",
          "If you cannot manage a load alone, do not attempt to carry it. Get help from someone else or use a piece of equipment.",
        ],
      },
    ],
    helps: [
      "Stop and think before you lift: can you manage the load yourself?",
      "Bend your knees and keep the load close to your body.",
      "Never twist and bend at the same time.",
      "Use both hands for shopping, and both straps of a backpack.",
      "Ask for help with anything too heavy, large or awkward.",
    ],
    tryThisWeek: [
      "Stop and think before lifting.",
      "Keep loads close to your body.",
      "Ask for help with heavy loads.",
    ],
    ask: "Is there anything I should not lift for now, and how can I lift safely?",
    interactive: {
      kind: "scenarios",
      title: "Lifting moments",
      scenarios: [
        {
          id: "box",
          situation: "A large, heavy box needs moving across the room.",
          options: [{ text: "Ask for help or use equipment", best: true }, { text: "Lift it alone quickly" }],
          why: "If you cannot manage a load alone, do not attempt to carry it. Get help from someone else or use a piece of equipment.",
        },
        {
          id: "floor",
          situation: "You need to pick something up from the floor.",
          options: [{ text: "Bend your knees, keep it close", best: true }, { text: "Reach out at arm's length" }],
          why: "Bend your knees to get down to the level of the load, and lift it smoothly, keeping it close to your body.",
        },
        {
          id: "shelf",
          situation: "You are putting a bag down on a counter to your side.",
          options: [{ text: "Avoid twisting as you put it down", best: true }, { text: "Twist and bend together" }],
          why: "Avoid twisting to put a load down. BackCare says never to twist and bend at the same time.",
        },
        {
          id: "shopping",
          situation: "You are carrying the weekly shopping home.",
          options: [{ text: "Split it between both hands", best: true }, { text: "Carry it all on one side" }],
          why: "When carrying shopping, try to use both hands. Keeping the weight close to your body also helps.",
        },
      ],
    },
    sources: [NHS_SLIPPED, AU_BACK, BACKCARE_LIFTING, BACKCARE_TOP_TIPS, INF_BACK, CSP_CAUSES],
    quiz: {
      question: "What does BackCare say about twisting and bending?",
      options: [{ text: "Never twist and bend at the same time", right: true }, { text: "Twist first, then bend" }, { text: "It does not matter" }],
      why: "BackCare suggests carrying items in a rucksack rather than single sling bags, and never twisting and bending at the same time.",
    },
  },
  {
    id: "disc-work",
    kicker: "Work",
    question: "How do I manage work and sitting with a slipped disc?",
    hook: "You do not need to be pain free to go back. Small changes at work, and moving often, make a difference.",
    short: "Staying at or returning to work as quickly as possible helps recovery, and you do not need to be pain and symptom free to go back. Talk to your employer about lighter duties or adjustments. At a desk, support your lower back and get up to move and stretch often.",
    sections: [
      {
        heading: "Staying in, or going back to, work",
        paragraphs: [
          "NHS inform recommends staying at or returning to work as quickly as possible during recovery. You do not need to be pain and symptom free to return to work.",
          "A back problem can sometimes mean taking some time off work. How long depends on the nature of your condition and your role, and gradually getting back to your normal daily activities can help build up your strength and stamina.",
        ],
      },
      {
        heading: "Talking to your employer",
        paragraphs: [
          "Arthritis UK says it is important to keep in contact with your employer and discuss what can be done to help you return. If your work involves heavy lifting or other physically demanding tasks, you may need to do lighter duties or fewer hours for a while.",
          "An occupational health adviser can advise on what work you can do safely and arrange simple adjustments. If you are unable to get back to work after two weeks of absence because of back pain, talk to your GP and employer about physiotherapy or other treatment.",
        ],
      },
      {
        heading: "Sitting at a desk",
        paragraphs: [
          "Sitting down or driving for long periods of time is one of the reasons a slipped disc can happen. BackCare says the body can tolerate being in one position for only a short period of time before it feels the need to adjust.",
          "Your lower back should be well supported, and you should be able to put your feet on the floor, or use a footrest. Your monitor should be directly in front of you at arm's length, and your keyboard directly in front of you too.",
        ],
      },
      {
        heading: "Moving often",
        paragraphs: [
          "BackCare suggests shifting your position at least every 45 minutes, and every 20 minutes is even better. Standing up to answer phone calls, and setting a timer to remind you to get up, stretch and change position, can help.",
          "A good chair is not a substitute for changing positions and stretching regularly. Using a laptop for long periods without a separate keyboard, mouse and raised screen should be avoided.",
        ],
      },
      {
        heading: "Extra help",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. It could give a grant towards things like specialist equipment, the costs of travelling to work if you cannot use public transport, or physical changes to your workplace.",
          "NICE asks health professionals to promote and help people with low back pain, with or without sciatica, to return to work or normal activities of daily living.",
        ],
      },
    ],
    helps: [
      "Keep in contact with your employer and discuss what can be done to help you return to work.",
      "Ask about lighter duties or fewer hours for a while if your work is physically demanding.",
      "Ask for a workplace assessment and tell whoever carries it out about your back pain.",
      "Get up, stretch and change position at least every 45 minutes, or every 20 minutes if you can.",
      "Check whether Access to Work could help with equipment or travel.",
    ],
    tryThisWeek: [
      "Talk to your employer.",
      "Ask for a workplace assessment.",
      "Move every 20 to 45 minutes.",
    ],
    ask: "When can I go back to work, and what changes would help me there?",
    interactive: {
      kind: "scenarios",
      title: "Back at work",
      scenarios: [
        {
          id: "still-sore",
          situation: "Your back is still a little sore, and you wonder whether to go back to work.",
          options: [{ text: "Plan a return: pain free is not needed", best: true }, { text: "Wait until all pain has gone" }],
          why: "NHS inform recommends returning to work as quickly as possible. You do not need to be pain and symptom free to return to work.",
        },
        {
          id: "heavy-job",
          situation: "Your job involves a lot of heavy lifting.",
          options: [{ text: "Ask about lighter duties for a while", best: true }, { text: "Carry on as before" }],
          why: "If your work involves heavy lifting or other physically demanding tasks, you may need to do lighter duties or fewer hours for a while.",
        },
        {
          id: "desk",
          situation: "You have been sitting at your desk for an hour.",
          options: [{ text: "Get up, stretch and move", best: true }, { text: "Push on until lunch" }],
          why: "BackCare suggests shifting your position at least every 45 minutes, and every 20 minutes is even better.",
        },
        {
          id: "travel",
          situation: "You cannot use public transport to get to work for now.",
          options: [{ text: "Check whether Access to Work can help", best: true }, { text: "Give up the job" }],
          why: "Access to Work could give a grant towards the costs of travelling to work if you cannot use public transport.",
        },
      ],
    },
    sources: [AU_BACK, INF_BACK, INF_SCIATICA, BACKCARE_WORKPLACE, BACKCARE_CHAIR, GOV_ACCESS_TO_WORK, NICE_NG59, NHS_SLIPPED],
    quiz: {
      question: "Do you need to be pain free before going back to work?",
      options: [{ text: "No, you do not need to be pain and symptom free", right: true }, { text: "Yes, completely" }, { text: "Only if you work at a desk" }],
      why: "You do not need to be pain and symptom free to return to work.",
    },
  },
  {
    id: "disc-sleep",
    kicker: "Sleep",
    question: "How can I sleep better with back or leg pain?",
    hook: "There is no perfect position or mattress. Comfort, a steady routine and an easy way in and out of bed help most.",
    short: "There is no best position or type of mattress for back pain: whatever feels most comfortable for you is best. A regular sleep routine helps, as sleep deprivation can make pain worse. NHS inform describes ways to get in and out of bed more comfortably.",
    sections: [
      {
        heading: "Why sleep matters",
        paragraphs: [
          "The Chartered Society of Physiotherapy says the importance of sleep in tackling back pain has become increasingly clear. Sleep reduces stress and improves your overall feeling of wellbeing, which helps you cope when pain occurs.",
          "Many people with long-term pain find it difficult to sleep at night, and sleep deprivation can make pain worse. The NHS suggests going to bed at the same time each evening, getting up at a regular time in the morning and avoiding naps in the day.",
        ],
      },
      {
        heading: "Position and mattress",
        paragraphs: [
          "There is no best position or type of mattress for back pain: whatever feels most comfortable for you is best. The Chartered Society of Physiotherapy suggests aiming for a regular routine, as far as possible.",
          "BackCare says hard mattresses are not necessarily the best for bad backs. A mattress should be supportive enough to take the weight of your body without sagging, but firm enough for you to turn with ease.",
        ],
      },
      {
        heading: "Testing a bed",
        paragraphs: [
          "BackCare suggests trying a new mattress for at least 10 minutes before you buy. One rule of thumb is to lie on your back and slide your hand between the mattress and the small of your back.",
          "If there is a large gap, the bed is probably too hard. If it is difficult to push your hand through, it is probably too soft.",
        ],
      },
      {
        heading: "Getting in and out of bed",
        paragraphs: [
          "To get out of bed, one way NHS inform describes is to roll onto the side you feel most comfortable, use your arms to slowly raise yourself up, and carefully bring your leg towards the floor before standing.",
          "To get into bed, feel the bed at the back of your legs, brace your tummy muscles and sit down slowly, then use your arms to lower yourself down and roll onto the side you feel most comfortable.",
        ],
      },
      {
        heading: "If your neck is affected",
        paragraphs: [
          "For neck pain, the NHS suggests a low, firm pillow, keeping your head the same height as the rest of your body when sleeping, not sleeping on your front and not twisting your neck in bed.",
          "NHS inform suggests using a supportive pillow in bed. If sleep problems persist, see a GP.",
        ],
      },
    ],
    helps: [
      "Choose whatever sleeping position feels most comfortable for you.",
      "Go to bed and get up at regular times, and avoid naps in the day.",
      "Try a new mattress for at least 10 minutes before you buy.",
      "Roll onto your side and use your arms to raise yourself when getting out of bed.",
      "See a GP if sleep problems persist.",
    ],
    tryThisWeek: [
      "Find your most comfortable position.",
      "Keep regular bed and wake times.",
      "Roll to your side to get up.",
    ],
    ask: "Is there anything that would help me sleep better with this pain?",
    interactive: {
      kind: "scenarios",
      title: "At bedtime",
      scenarios: [
        {
          id: "position",
          situation: "You have read that there is one right way to sleep with back pain.",
          options: [{ text: "Use whatever feels most comfortable", best: true }, { text: "Force yourself onto your back" }],
          why: "There is no best position or type of mattress for back pain: whatever feels most comfortable for you is best.",
        },
        {
          id: "getting-up",
          situation: "Your back is stiff and you need to get out of bed.",
          options: [{ text: "Roll to your side, push up with arms", best: true }, { text: "Sit straight up in one go" }],
          why: "Roll onto the side you feel most comfortable, use your arms to slowly raise yourself up, and carefully bring your leg towards the floor.",
        },
        {
          id: "nap",
          situation: "You slept badly and want a long afternoon nap.",
          options: [{ text: "Keep to your usual routine", best: true }, { text: "Nap for the afternoon" }],
          why: "Go to bed at the same time each evening, get up at a regular time in the morning and avoid taking naps in the day.",
        },
        {
          id: "mattress",
          situation: "Testing a mattress, your hand slides through a large gap under your back.",
          options: [{ text: "It is probably too hard", best: true }, { text: "It is just right" }],
          why: "If there is a large gap, the bed is probably too hard. If it is difficult to push your hand through, it is probably too soft.",
        },
      ],
    },
    sources: [CSP_LIVING, NHS_PAIN, INF_BACK, BACKCARE_BEDS, NHS_NECK, INF_NECK],
    quiz: {
      question: "Is there one best mattress for back pain?",
      options: [{ text: "No: whatever feels most comfortable is best", right: true }, { text: "Yes, the hardest one" }, { text: "Yes, the softest one" }],
      why: "There is no best position or type of mattress for back pain: whatever feels most comfortable for you is best.",
    },
  },
  {
    id: "disc-coming-back",
    kicker: "Prevention",
    question: "How can I stop a slipped disc or sciatica coming back?",
    hook: "There is a chance it returns, but regular exercise, safe lifting and a few habits lower that chance.",
    short: "If you have had sciatica, there is a chance you could get it again. Staying active with regular exercise, lifting safely, sitting well, not smoking and losing weight if you're overweight can all reduce the chance. Arthritis UK says regular exercise leads to shorter and less frequent episodes of back pain.",
    sections: [
      {
        heading: "It can come back",
        paragraphs: [
          "If you have had sciatica, there is a chance you could get it again. But there are some things you can do to reduce your chance of this happening.",
          "Some people find that their back pain returns from time to time, and the Chartered Society of Physiotherapy says a physiotherapist can help you plan how to manage this.",
        ],
      },
      {
        heading: "Regular exercise",
        paragraphs: [
          "The NHS advises keeping active and taking regular exercise to help prevent a slipped disc. Arthritis UK says regular exercise leads to shorter and less frequent episodes of back pain, and keeps the muscles around the spine strong.",
          "BackCare suggests walking, swimming, especially backstroke, and exercise bikes, though anything you enjoy that keeps you active will help. Adults should aim for at least 150 minutes of moderate intensity activity a week, and strengthening activities that work all the major muscle groups, including the back, on at least 2 days a week.",
        ],
      },
      {
        heading: "Everyday habits",
        paragraphs: [
          "Use a safe technique when lifting heavy objects, make sure you have a good posture when sitting and standing, and sit correctly when using a computer.",
          "NHS inform suggests trying to keep your other muscles and joints strong and flexible, and aiming for a healthy body weight.",
        ],
      },
      {
        heading: "Weight and smoking",
        paragraphs: [
          "The NHS suggests losing weight if you're overweight. Arthritis UK says there are no special diets shown to help or prevent back pain, but a healthy, balanced diet and regular exercise can help you reach and maintain a healthy weight, which can reduce the strain on your back.",
          "Do not smoke: nicotine weakens the disc tissue in the spine.",
        ],
      },
      {
        heading: "Stress",
        paragraphs: [
          "Stress can make existing back pain worse, so if you are able to, identify and manage the causes of your stress. Keeping active can also help with dealing with the stresses of life.",
        ],
      },
    ],
    helps: [
      "Keep active and take regular exercise.",
      "Use a safe technique when lifting heavy objects.",
      "Sit correctly when using a computer, and keep a good posture when sitting and standing.",
      "Lose weight if you're overweight.",
      "Do not smoke.",
      "If you are able to, identify and manage the causes of your stress.",
    ],
    tryThisWeek: [
      "Do some regular exercise.",
      "Lift heavy things safely.",
      "Tackle one cause of stress.",
    ],
    ask: "What can I do to lower the chance of this coming back?",
    interactive: {
      kind: "risk-check",
      title: "Habits that protect your back",
      intro: "Tick any that apply to you now. Most are things you can change.",
      items: [
        { id: "before", label: "I have had sciatica before", note: "If you have had sciatica, there is a chance you could get it again.", changeable: false },
        { id: "inactive", label: "I do little regular exercise", note: "Regular exercise leads to shorter and less frequent episodes of back pain, says Arthritis UK.", changeable: true },
        { id: "lifting", label: "I lift heavy things carelessly", note: "The NHS advises using a safe technique when lifting heavy objects.", changeable: true },
        { id: "computer", label: "I slump at the computer", note: "The NHS advises sitting correctly when using a computer.", changeable: true },
        { id: "weight", label: "I am above a healthy weight", note: "A healthy weight can reduce the strain on your back, says Arthritis UK.", changeable: true },
        { id: "smoking", label: "I smoke", note: "Nicotine weakens the disc tissue in the spine.", changeable: true },
        { id: "stress", label: "I am under a lot of stress", note: "Stress can make existing back pain worse, says the Chartered Society of Physiotherapy.", changeable: true },
      ],
    },
    sources: [NHS_SLIPPED, NHS_SCIATICA, AU_BACK, BACKCARE_TOP_TIPS, NHS_ADULT_ACTIVITY, INF_BACK, CSP_LIVING],
    quiz: {
      question: "What does Arthritis UK say regular exercise leads to?",
      options: [{ text: "Shorter and less frequent episodes of back pain", right: true }, { text: "More back pain" }, { text: "No difference" }],
      why: "Arthritis UK says regular exercise leads to shorter and less frequent episodes of back pain, and keeps the muscles around the spine strong.",
    },
  },
];
