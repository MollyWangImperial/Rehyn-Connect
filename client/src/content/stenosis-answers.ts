import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Spinal stenosis page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's `sources`;
// nothing is added that those pages do not say. nhs.uk has no spinal stenosis page of its own (its search finds
// none), so the condition itself comes mainly from NHS inform (NHS 24, Scotland), with nhs.uk for lumbar
// decompression surgery, back pain, sciatica and medicines, and Arthritis UK (formerly Versus Arthritis), BackCare,
// the Chartered Society of Physiotherapy, NICE (NG59) and the Royal College of Surgeons of England. Emergency
// guidance is given exactly as each service words it. Exercises are described only as the sources describe them.
// General information only; it never replaces what a person's own GP, physiotherapist or surgeon tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const inform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/illnesses-and-conditions/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/${path}` });

const NHS_DECOMP = nhs("Lumbar decompression surgery", "tests-and-treatments/lumbar-decompression-surgery/");
const NHS_BACK = nhs("Back pain", "conditions/back-pain/");
const NHS_SCIATICA = nhs("Sciatica", "conditions/sciatica/");
const NHS_SLIPPED = nhs("Slipped disc", "conditions/slipped-disc/");
const NHS_PHYSIO = nhs("Physiotherapy", "tests-and-treatments/physiotherapy/");
const NHS_MSK = nhs("Get NHS help for back or joint problems", "nhs-services/get-nhs-help-for-back-joint-problems/");
const NHS_GABAPENTIN = nhs("About gabapentin", "medicines/gabapentin/about-gabapentin/");
const NHS_GABAPENTIN_QUESTIONS = nhs("Common questions about gabapentin", "medicines/gabapentin/common-questions-about-gabapentin/");
const NHS_PREGABALIN = nhs("About pregabalin", "medicines/pregabalin/about-pregabalin/");
const NHS_AMITRIPTYLINE = nhs("About amitriptyline for pain and migraine", "medicines/amitriptyline-for-pain/about-amitriptyline-for-pain-and-migraine/");
const NHS_AMITRIPTYLINE_HOW = nhs("How and when to take amitriptyline for pain and migraine", "medicines/amitriptyline-for-pain/how-and-when-to-take-amitriptyline-for-pain-and-migraine/");
const NHS_WALKING = nhs("Walking for health", "live-well/exercise/walking-for-health/");
const NHS_OLDER_ACTIVITY = nhs("Physical activity guidelines for older adults", "live-well/exercise/physical-activity-guidelines-older-adults/");
const NHS_PAIN = nhs("10 ways to reduce pain", "live-well/pain/10-ways-to-ease-pain/");

const INF_STENOSIS = inform("Spinal stenosis", "muscle-bone-and-joints/neck-and-back-problems-and-conditions/spinal-stenosis");
const INF_BACK = inform("Back problems", "muscle-bone-and-joints/neck-and-back-problems-and-conditions/back-problems");
const INF_BACK_EXERCISES = inform("Exercises for back pain", "muscle-bone-and-joints/neck-and-back-problems-and-conditions/exercises-for-back-pain/");
const INF_PAINKILLERS = inform("When should I take painkillers?", "muscle-bone-and-joints/when-should-i-take-painkillers");
const INF_CHRONIC_WHAT = inform("What is chronic pain?", "brain-nerves-and-spinal-cord/chronic-pain/what-is-chronic-pain/");
const INF_CHRONIC_LIVING = inform("Living with chronic pain", "brain-nerves-and-spinal-cord/chronic-pain/living-with-chronic-pain/");

const AU_BACK = au("Back pain", "understanding-arthritis/conditions/back-pain/");
const AU_BACK_EXERCISES = au("Exercises for the back", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-back/");
const AU_STEROID = au("Steroid injections", "understanding-arthritis/arthritis-treatments/drugs/steroid-injections/");
const AU_WEIGHT = au("Managing your weight", "living-with-arthritis/health-and-wellbeing/eating-well-with-arthritis/managing-your-weight/");
const AU_MENTAL = au("Mental health and arthritis", "living-with-arthritis/health-and-wellbeing/mental-health-and-arthritis/");

const CSP_CAUSES = csp("Causes of back pain", "conditions/back-pain/causes-back-pain");
const CSP_TREATMENT = csp("Treatment for back pain", "conditions/back-pain/treatment-back-pain");
const CSP_HELP = csp("Getting help for back pain", "conditions/back-pain/getting-help-back-pain");
const CSP_LIVING = csp("Living with back pain", "conditions/back-pain/living-back-pain");
const CSP_VIDEO_EXERCISES = csp("Video exercises for back pain", "conditions/back-pain/video-exercises-back-pain");

const BACKCARE_CONDITIONS: LearnSource = { label: "BackCare: Conditions", url: "https://backcare.org.uk/i-have-back-or-neck-pain/conditions/" };
const BACKCARE_BACK: LearnSource = { label: "BackCare: Back pain", url: "https://backcare.org.uk/i-have-back-or-neck-pain/back-pain/" };
const NICE_NG59: LearnSource = { label: "NICE: Low back pain and sciatica in over 16s (NG59), recommendations", url: "https://www.nice.org.uk/guidance/ng59/chapter/Recommendations" };
const RCS_BEFORE_SURGERY: LearnSource = { label: "Royal College of Surgeons of England: Things to consider before having surgery", url: "https://www.rcseng.ac.uk/patient-care/having-surgery/things-to-consider-before-having-surgery/" };

export const stenosisAnswers: LearnArticle[] = [
  {
    id: "ss-what-it-is",
    kicker: "Understanding",
    question: "What is spinal stenosis?",
    hook: "Narrower tunnels for the nerves in the spine. Common with age, often harmless, and something most people learn to manage well.",
    short: "Spinal stenosis is narrowing of the tunnels in the spine that contain the nerves or spinal cord. It is most common in the lower back and the neck. Most narrowing is a normal part of ageing and often causes no problems, and most people with symptoms can manage them well with the right advice.",
    sections: [
      {
        heading: "Narrow tunnels in the spine",
        paragraphs: [
          "Spinal stenosis is narrowing of the tunnels in the spine which contain the nerves or spinal cord. It is a common condition.",
          "The NHS describes it as the space inside each bone in the spine becoming too narrow, because of changes that can happen with age or arthritis. Arthritis UK describes it as narrowing of the space around the nerves in the lower spine, which can cause pain in the legs, particularly when walking.",
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
        heading: "Lower back or neck",
        paragraphs: [
          "Spinal stenosis can affect any part of the spine, but it is most common in the lower back, called lumbar stenosis, and in the neck, called cervical stenosis.",
          "In some cases the narrowing irritates or squeezes the nerves. This can lead to pain in the lower back and legs, or in the neck, arms and hands. BackCare says that if the spinal cord becomes compressed, symptoms may include pain, numbness, tingling and loss of muscle control.",
        ],
      },
      {
        heading: "Narrowing without symptoms",
        paragraphs: [
          "Most narrowing is a normal part of the ageing process and often does not cause problems. Many people have no symptoms at all.",
          "Although stenosis can cause pain, the nerves can learn to adapt to the narrowed space. The majority of people with this condition can manage their symptoms well, with the right advice and information.",
        ],
      },
      {
        heading: "How it is found",
        paragraphs: [
          "A healthcare professional can diagnose spinal stenosis by asking about your symptoms and carrying out a physical examination. Sometimes further examinations are advised to rule out other serious health conditions.",
          "For people with severe and worsening symptoms, scans may be considered to help decide if spinal surgery may be helpful. NICE advises against routinely offering imaging in a non-specialist setting for people with low back pain with or without sciatica.",
        ],
      },
    ],
    helps: [
      "If you have new or ongoing symptoms, contact your healthcare professional.",
      "In many areas you may be able to get physiotherapy from NHS community musculoskeletal (MSK) services without needing a referral from a GP.",
      "Stay active: exercise can reduce nerve irritation and make the nerve more resilient to movement.",
      "If your symptoms have not improved, or get worse, talk to a healthcare professional.",
      "Learn the rare symptoms that need urgent help, such as changes to bladder or bowel function.",
    ],
    tryThisWeek: [
      "Contact a professional about new symptoms.",
      "Check if you can refer yourself to physio.",
      "Stay active.",
    ],
    ask: "Where in my spine is the narrowing, and is it the cause of my symptoms?",
    interactive: {
      kind: "flip-cards",
      title: "Words you may hear",
      intro: "Turn each card to see what the word means.",
      cards: [
        { id: "lumbar", front: "Lumbar stenosis", when: "In the lower back", back: "Narrowing in the lower back. Its symptoms affect the legs, and are usually worse with walking or standing." },
        { id: "cervical", front: "Cervical stenosis", when: "In the neck", back: "Narrowing in the neck. Its symptoms affect the arms, and some people also get headaches." },
        { id: "vertebrae", front: "Vertebrae", when: "The bones of the spine", back: "24 bones stacked one on top of another, with discs between them that cushion the bones and help the spine move." },
        { id: "nerve-roots", front: "Nerve roots", when: "Where nerves leave the spine", back: "The parts of the nerves that pass between the vertebrae, connecting the spinal cord to the rest of the body." },
        { id: "cauda-equina", front: "Cauda equina", when: "The base of the spine", back: "Literally horse's tail: the nerve bundle that controls the pelvic organs and lower limbs." },
      ],
    },
    sources: [INF_STENOSIS, NHS_DECOMP, AU_BACK, BACKCARE_CONDITIONS, NHS_MSK, NICE_NG59],
    quiz: {
      question: "Where is spinal stenosis most common?",
      options: [{ text: "The lower back and the neck", right: true }, { text: "The upper back only" }, { text: "The hips and knees" }],
      why: "Spinal stenosis can affect any part of the spine, but it is most common in the lower back, called lumbar stenosis, and in the neck, called cervical stenosis.",
    },
  },
  {
    id: "ss-symptoms",
    kicker: "Symptoms",
    question: "What does spinal stenosis feel like, and why does walking make it worse?",
    hook: "Aching, heavy or tingling legs that build up as you walk or stand, and ease when you sit or lean forward.",
    short: "Lumbar stenosis affects the legs, with pain, aching, cramping, heaviness, tingling or numbness. These symptoms are usually worse with walking or standing, and relieved by sitting or leaning forward. Stenosis in the neck affects the arms instead.",
    sections: [
      {
        heading: "In the legs",
        paragraphs: [
          "Lumbar spine stenosis symptoms affect the legs. They may include pain, aching, cramping, heaviness or weakness, tingling, pins and needles, and numbness.",
          "These symptoms are usually worse with walking or standing, and are relieved by sitting or leaning forward. Arthritis UK also describes pain in the legs, particularly when walking.",
        ],
      },
      {
        heading: "In the arms",
        paragraphs: [
          "Cervical spine stenosis, in the neck, affects the arms. Symptoms may include pain, stiffness, weakness, tingling, pins and needles and numbness, and some people also get headaches.",
          "Though uncommon, some people have both lumbar and cervical stenosis at the same time.",
        ],
      },
      {
        heading: "Back pain, leg pain and sciatica",
        paragraphs: [
          "People with spinal stenosis can also have back or neck pain. Without leg or arm symptoms, though, low back or neck pain is usually not thought to be caused by stenosis.",
          "Spinal stenosis is one of the causes of sciatica, which happens when something presses or rubs on the sciatic nerve. Sciatica usually affects your bottom and the back of one leg, often including your foot and toes.",
        ],
      },
      {
        heading: "Symptoms that change",
        paragraphs: [
          "Symptoms of spinal stenosis can vary, and many people have no symptoms at all. It is a long-term condition, and many patients find that managing their symptoms can help improve their quality of life.",
          "Any progression of symptoms is usually slow. Pain can also be influenced by anything that affects general health, such as poor sleep, stress and emotional wellbeing.",
        ],
      },
      {
        heading: "When symptoms need checking quickly",
        paragraphs: [
          "NHS inform says to contact your GP practice urgently if you have a new onset or significant worsening of reduced balance or difficulty walking, or of pain, weakness, heaviness or changing sensation in the arms or legs. If your GP practice is closed, phone 111.",
          "The NHS says to call 999 or go to A&E if you have back pain with pain, tingling, weakness or numbness in both legs, a loss of feeling around your genitals or anus, or changes in your bladder or bowels.",
        ],
      },
    ],
    helps: [
      "If leaning forward relieves your leg symptoms, take regular breaks when walking: take a seat or lean against a wall.",
      "Look after your sleep, stress and emotional wellbeing, which can all influence pain.",
      "See a GP if sciatica has not improved after trying home treatments for a few weeks, is getting worse, or is stopping you doing your normal activities.",
      "Contact your GP practice urgently, or phone 111 if it is closed, about new or worsening problems with balance or walking.",
      "Call 999 or go to A&E for numbness around your genitals or anus, changes in your bladder or bowels, or symptoms in both legs.",
    ],
    tryThisWeek: [
      "Take breaks: sit or lean against a wall.",
      "Look after your sleep and stress.",
      "Learn when to call 999.",
    ],
    ask: "Are my leg symptoms coming from my spine, or could something else be causing them?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your GP or physio",
      intro: "Tick any you have noticed. They become a list to take to your appointment.",
      signs: [
        "Pain or aching in the legs",
        "Cramping in the legs",
        "Heaviness or weakness in the legs",
        "Tingling, pins and needles or numbness",
        "Leg symptoms worse when walking or standing",
        "Leg symptoms eased by sitting or leaning forward",
        "Pain, stiffness or numbness in the arms",
        "Headaches with neck symptoms",
      ],
      after: "Call 999 or go to A&E for numbness around your genitals or anus, changes in your bladder or bowels, or symptoms in both legs.",
      copyHeading: "Things I have noticed",
    },
    sources: [INF_STENOSIS, NHS_SCIATICA, NHS_BACK, AU_BACK],
    quiz: {
      question: "What usually relieves the leg symptoms of lumbar stenosis?",
      options: [{ text: "Sitting or leaning forward", right: true }, { text: "Standing up straight" }, { text: "Walking faster" }],
      why: "These symptoms are usually worse with walking or standing, and are relieved by sitting or leaning forward.",
    },
  },
  {
    id: "ss-causes",
    kicker: "Causes",
    question: "Why does the spine narrow?",
    hook: "Mostly the ordinary ageing of discs, joints and ligaments. Narrowing is common, and it is not the same as damage.",
    short: "As we get older, ageing in the spine can narrow the tunnels around the spinal cord and nerves. Other causes include an injury, rheumatoid arthritis, certain bone diseases and being born with a narrow spinal canal. Pain does not always mean the nerves are being damaged.",
    sections: [
      {
        heading: "Ageing in the spine",
        paragraphs: [
          "As we get older, ageing in the spine can narrow the tunnels and reduce the space around the spinal cord or nerves. Most narrowing is a normal part of the ageing process.",
          "The NHS describes spinal stenosis as the space inside each bone in the spine becoming too narrow because of changes that can happen with age or arthritis.",
        ],
      },
      {
        heading: "Discs, joints and bony edges",
        paragraphs: [
          "As you grow older, the joints, discs and ligaments of your spine age as well. They remain strong, but it is usual for your back to get stiffer.",
          "In spondylosis, the discs become thinner and the spaces between the vertebrae become narrower as we get older. Little pieces of bone called osteophytes may grow at the edges of the vertebrae and facet joints, which Arthritis UK says is very similar to the changes caused by osteoarthritis.",
        ],
      },
      {
        heading: "Other causes",
        paragraphs: [
          "Other causes of spinal stenosis include an injury, rheumatoid arthritis, certain bone diseases, and being born with a narrow spinal canal.",
          "BackCare describes spondylolisthesis, where a vertebra is displaced in relation to those above and below it. It is caused by normal ageing, birth defects and injury, and may or may not cause symptoms such as pain.",
        ],
      },
      {
        heading: "Narrowing is not the same as damage",
        paragraphs: [
          "Often people have no symptoms. Even when the narrowing irritates the nerves, they can learn to cope with a narrower tunnel, and pain does not always mean the nerves are being damaged.",
          "The Chartered Society of Physiotherapy says all pain is 100 per cent real and never all in your head. Factors such as stress, poor sleep and feeling down can turn up the volume on pain.",
        ],
      },
      {
        heading: "What you can work on",
        paragraphs: [
          "NHS inform's lifestyle advice for spinal stenosis includes staying active, modifying activities and pacing, maintaining a healthy weight, stopping smoking, and managing stress and emotional wellbeing.",
          "The NHS says smoking can increase your risk of getting sciatica.",
        ],
      },
    ],
    helps: [
      "Stay active, modify your activities and pace yourself.",
      "Aim to maintain a healthy weight.",
      "Stop smoking: smoking can increase your risk of getting sciatica.",
      "Manage stress and look after your emotional wellbeing.",
      "Remember that pain does not always mean the nerves are being damaged.",
    ],
    tryThisWeek: [
      "Pace one activity.",
      "Take a step towards stopping smoking.",
      "Do one thing for your wellbeing.",
    ],
    ask: "What has caused the narrowing in my spine, and is it likely to change?",
    interactive: {
      kind: "risk-check",
      title: "What narrows the spine, and what turns up pain",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "age", label: "Getting older", note: "Ageing in the spine can narrow the tunnels around the spinal cord or nerves.", changeable: false },
        { id: "injury", label: "A past injury", note: "An injury is one of the other causes of spinal stenosis.", changeable: false },
        { id: "ra", label: "Rheumatoid arthritis", note: "NHS inform lists it among the causes of spinal stenosis.", changeable: false },
        { id: "bone", label: "Certain bone diseases", note: "NHS inform lists certain bone diseases among the causes.", changeable: false },
        { id: "born", label: "A narrow spinal canal from birth", note: "Some people are born with a narrow spinal canal.", changeable: false },
        { id: "sleep-stress", label: "Poor sleep or stress", note: "Pain can be influenced by poor sleep, stress and emotional wellbeing.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Stopping smoking is part of NHS inform's lifestyle advice for spinal stenosis.", changeable: true },
        { id: "inactive", label: "Being inactive", note: "Staying active is part of managing spinal stenosis.", changeable: true },
      ],
    },
    sources: [INF_STENOSIS, NHS_DECOMP, AU_BACK, BACKCARE_CONDITIONS, CSP_CAUSES, NHS_SCIATICA],
    quiz: {
      question: "How does NHS inform describe most narrowing of the spine?",
      options: [{ text: "A normal part of the ageing process", right: true }, { text: "A sign of serious damage" }, { text: "Always caused by lifting" }],
      why: "Most narrowing is a normal part of the ageing process.",
    },
  },
  {
    id: "ss-urgent",
    kicker: "Urgent help",
    question: "Which symptoms need help straight away?",
    hook: "Rarely, squeezed nerves at the base of the spine become an emergency. Knowing the signs, and where to go, matters.",
    short: "Occasionally spinal stenosis leads to cauda equina syndrome, a rare but serious condition. The NHS says to call 999 or go to A&E for symptoms in both legs, loss of feeling around your genitals or anus, or changes in your bladder or bowels. Do not drive to A&E.",
    sections: [
      {
        heading: "Rare, but serious",
        paragraphs: [
          "Occasionally spinal stenosis can lead to serious conditions called cauda equina syndrome or cervical myelopathy. They are rare, but can lead to permanent damage or disability, and early recognition and treatment can prevent further deterioration.",
          "The cauda equina, literally meaning horse's tail, is the nerve bundle that controls the pelvic organs and lower limbs. BackCare says sudden onset cauda equina syndrome is considered an emergency.",
        ],
      },
      {
        heading: "Call 999 or go to A&E",
        paragraphs: [
          "The NHS says to call 999 or go to A&E if you have back pain and pain, tingling, weakness or numbness in both legs, a loss of feeling around your genitals or anus, or changes in your bladder or bowels, such as difficulty peeing, or peeing or pooing yourself.",
          "The same applies to changes in how your penis or vagina feels during sex, or not being able to get or keep an erection or to orgasm. With sciatica, the NHS adds sciatica on both sides, and weakness or numbness in both legs that is severe or getting worse.",
        ],
      },
      {
        heading: "Getting there",
        paragraphs: [
          "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance, and bring any medicines you take with you.",
          "These could be symptoms of a serious back problem that needs to be treated in hospital as soon as possible. Arthritis UK says urgent surgery may be needed if you lose bladder or bowel control or the use of your legs, and to seek urgent medical help via A&E.",
        ],
      },
      {
        heading: "In Scotland",
        paragraphs: [
          "NHS inform, the health information service for Scotland, says to phone 111 if you have new symptoms such as loss of feeling or pins and needles between your inner thighs or genitals, numbness in or around your back passage or buttocks, or increasing difficulty passing or controlling urine.",
          "It says that if you develop cauda equina syndrome, you will need to be seen by an emergency specialist spinal team.",
        ],
      },
      {
        heading: "Urgent, but not 999",
        paragraphs: [
          "NHS inform says to contact your GP practice urgently, or phone 111 if it is closed, about a new or significantly worse problem with balance or walking, or new pain, weakness, heaviness or changing sensation in the arms or legs. With stenosis in the neck, this includes clumsy hands, such as dropping things or struggling with buttons, and neck pain with a severe headache.",
          "The NHS says to ask for an urgent GP appointment or get help from 111 if you have back pain and feel hot, cold, shivery or generally unwell, or have severe pain that starts suddenly or is getting worse quickly.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E for symptoms in both legs, loss of feeling around your genitals or anus, or changes in your bladder or bowels.",
      "Do not drive to A&E: ask someone to drive you, or call 999 and ask for an ambulance.",
      "Bring any medicines you take with you.",
      "Ask for an urgent GP appointment or get help from 111 if you have back pain and feel hot, cold, shivery or generally unwell.",
      "Contact your GP practice urgently about new or worsening problems with balance or walking.",
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
          situation: "Your bottom and genitals feel numb, and peeing has become difficult.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait for a routine GP appointment" }],
          why: "The NHS says to call 999 or go to A&E for a loss of feeling around your genitals or anus, or changes in your bladder or bowels.",
        },
        {
          id: "legs",
          situation: "Both legs feel weak and numb, and it is getting worse.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Rest and see how it is tomorrow" }],
          why: "The NHS says to call 999 or go to A&E for pain, tingling, weakness or numbness in both legs.",
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
    sources: [INF_STENOSIS, BACKCARE_CONDITIONS, NHS_BACK, NHS_SCIATICA, AU_BACK, INF_BACK, BACKCARE_BACK],
    quiz: {
      question: "If you need A&E for these symptoms, should you drive yourself?",
      options: [{ text: "No: ask someone to drive you, or call 999", right: true }, { text: "Yes, if the pain allows" }, { text: "Only if it is nearby" }],
      why: "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance.",
    },
  },
  {
    id: "ss-exercise",
    kicker: "Exercise",
    question: "Can exercise and physiotherapy help spinal stenosis?",
    hook: "Exercise will not widen the tunnel, but it can calm irritated nerves and keep you strong and steady.",
    short: "Exercise can reduce nerve irritation and make the nerve more resilient to movement, though it will not change the narrowing itself. It may also help with strength and balance. Seek advice from a physiotherapist before starting a new exercise regime; in many areas you can refer yourself.",
    sections: [
      {
        heading: "What exercise can and cannot do",
        paragraphs: [
          "Exercise can reduce nerve irritation and make the nerve more resilient to movement. It will not change the narrowing of the spinal tunnel itself.",
          "Exercise may also help with general function, muscle strength and balance. NICE suggests considering a group exercise programme within the NHS for a flare-up of low back pain with or without sciatica.",
        ],
      },
      {
        heading: "Check first",
        paragraphs: [
          "The Chartered Society of Physiotherapy recommends seeking advice from a physiotherapist or healthcare professional before starting any new exercise regime. If any of its exercises worsen your pain, it says to seek urgent medical advice.",
          "People who have been diagnosed with a back condition, or have had recent back surgery, should follow the advice of their healthcare professional.",
        ],
      },
      {
        heading: "Gentle moves lying down",
        paragraphs: [
          "NHS inform's exercises for back pain include knee rolls, done lying on your back, for example on your bed. With your knees pointing towards the ceiling, slowly roll them to one side, hold for a few seconds, bring them back up, then repeat on the other side.",
          "Another is the knee hug: lying on your back, slowly bring your knees in towards your chest, then slowly release. Arthritis UK describes a similar knees to chest exercise, one knee at a time, held for five seconds.",
        ],
      },
      {
        heading: "How hard, and how often",
        paragraphs: [
          "NHS inform suggests rating your pain out of 10 and aiming to keep it within 0 to 5 while you exercise. If it goes higher, do fewer repetitions, move more slowly or rest longer between movements.",
          "When starting, 2 to 3 repetitions at a time can help, and small amounts through the day are better. Exercise should not make your pain worse overall, and your pain should be no worse the morning after.",
        ],
      },
      {
        heading: "Physiotherapy",
        paragraphs: [
          "Physiotherapy can be beneficial for spinal stenosis. You may be referred, or there may be an option to refer yourself in your area, and physiotherapy is free on the NHS, though there may be a long waiting list.",
          "A physiotherapist will assess how you move and how your muscles, nerves and joints are working. Treatment may include a home exercise programme for strength and mobility, advice on pain management and hands-on treatment.",
        ],
      },
    ],
    helps: [
      "Seek advice from a physiotherapist or healthcare professional before starting any new exercise regime.",
      "Start slowly and build up gradually if you are new to exercise.",
      "Keep your pain within 0 to 5 out of 10 while exercising.",
      "Stop the exercises if they make your symptoms worse or cause new pain.",
      "Check whether you can refer yourself to NHS community musculoskeletal (MSK) services.",
    ],
    tryThisWeek: [
      "Ask a physio before starting.",
      "Start slowly and build up.",
      "Keep pain at 5 out of 10 or less.",
    ],
    ask: "Can I be referred to a physiotherapist, and which exercises would suit my back?",
    interactive: {
      kind: "flip-cards",
      title: "Five gentle moves, card by card",
      intro: "Seek advice from a physiotherapist first. Turn each card to see how NHS inform describes it.",
      cards: [
        { id: "knee-rolls", front: "Knee rolls", when: "Lying down, on a bed", back: "Knees to the ceiling, slowly roll them to one side, hold a few seconds, come back up, then the other side." },
        { id: "pelvic-tilt", front: "Pelvic tilt", when: "Lying on your back", back: "Hands on hips, tilt your hips to flatten your back into the bed, hold 2 seconds, then tilt the other way." },
        { id: "knee-chest", front: "Knee to chest", when: "Lying on your back", back: "Bring one knee up towards your chest, the other knee pointing to the ceiling. Hold a few seconds, then release." },
        { id: "knee-hug", front: "Knee hug", when: "Lying on your back", back: "Slowly bring both knees in towards your chest, hands over the knees if you like, then slowly release." },
        { id: "back-curl", front: "Back curl", when: "On hands and knees", back: "Gently pull your spine upwards, chin in. Then slowly uncurl, chest towards the ground, head gently up." },
      ],
    },
    sources: [INF_STENOSIS, INF_BACK_EXERCISES, CSP_VIDEO_EXERCISES, CSP_HELP, NHS_MSK, NHS_PHYSIO, AU_BACK_EXERCISES, NICE_NG59],
    quiz: {
      question: "What does exercise do for spinal stenosis, according to NHS inform?",
      options: [{ text: "Reduces nerve irritation, without changing the narrowing", right: true }, { text: "Widens the spinal tunnel" }, { text: "Nothing at all" }],
      why: "Exercise can reduce nerve irritation and make the nerve more resilient to movement. It will not change the narrowing of the spinal tunnel itself.",
    },
  },
  {
    id: "ss-painkillers",
    kicker: "Medicines",
    question: "Which painkillers and nerve pain medicines help?",
    hook: "Everyday painkillers have a place for a short while. Nerve pain medicines need care, and guidance has changed.",
    short: "Painkillers can help you keep moving, alongside exercise and staying active. For back pain, the NHS suggests anti-inflammatories like ibuprofen, with paracetamol not recommended on its own. Amitriptyline is sometimes used for nerve pain, while NICE advises against gabapentinoids for sciatica.",
    sections: [
      {
        heading: "Part of a wider plan",
        paragraphs: [
          "NHS inform lists medication, heat and ice as pain management for spinal stenosis, alongside exercise and staying active.",
          "Painkillers can help you keep moving. If you already take medicine for something else or have other health problems, check with a pharmacist before taking painkillers.",
        ],
      },
      {
        heading: "Everyday painkillers",
        paragraphs: [
          "For back pain, the NHS suggests anti-inflammatory medicine like ibuprofen, though it may not be suitable for everyone. Paracetamol on its own is not recommended for back pain, but it may be used with another painkiller.",
          "Arthritis UK suggests a short course of painkillers and anti-inflammatories of about a week to 10 days: if they have not helped after this time, they are unlikely to. NHS inform says to speak to your pharmacist if you still need pain relief after 4 days.",
        ],
      },
      {
        heading: "Medicines for nerve pain",
        paragraphs: [
          "Amitriptyline is sometimes used at a low dose to treat nerve pain and improve sleep. It is best taken in the evening because it can make you sleepy, and it can take 6 weeks to work as a painkiller.",
          "Gabapentin and pregabalin are also taken for nerve pain. It takes at least a few weeks for them to work, and some people can become addicted to them.",
        ],
      },
      {
        heading: "What the guidance says",
        paragraphs: [
          "NICE advises doctors not to offer gabapentinoids, other antiepileptics, oral corticosteroids or benzodiazepines for sciatica, as there is no overall evidence of benefit and there is evidence of harm. Arthritis UK says gabapentin and pregabalin are no longer offered for back pain.",
          "If you are taking them, speak to your doctor about the risks and benefits. Do not stop taking gabapentin without talking to your doctor, as the dose needs to be reduced gradually to avoid withdrawal symptoms.",
        ],
      },
      {
        heading: "When pain is long-term",
        paragraphs: [
          "Most people with chronic pain will not benefit from using medication alone. It is important to get pain medicines reviewed at least once a year to see if they are still effective and safe.",
          "Opioids can be useful for a short time, for example after an injury or surgery. For most people in the longer term they become ineffective, can be harmful and can lead to dependency.",
        ],
      },
    ],
    helps: [
      "Check with a pharmacist or GP if you're unsure which painkiller is suitable for you.",
      "Speak to your pharmacist if you still need pain relief after 4 days.",
      "Always follow the instructions on the packet.",
      "Do not stop gabapentin, pregabalin or amitriptyline suddenly without talking to your doctor.",
      "Get your pain medicines reviewed at least once a year.",
    ],
    tryThisWeek: [
      "Ask a pharmacist which painkiller suits you.",
      "Follow the instructions on the packet.",
      "Ask for a review of your pain medicines.",
    ],
    ask: "Which painkillers are safe for me, and should my nerve pain medicines be reviewed?",
    interactive: {
      kind: "flip-cards",
      title: "Pain medicines, card by card",
      intro: "Turn each card to see when each medicine is used and what to know.",
      cards: [
        { id: "ibuprofen", front: "Ibuprofen", when: "Anti-inflammatory, for back pain", back: "Suggested by the NHS for back pain, but it may not be suitable for everyone. Check with a pharmacist or GP." },
        { id: "paracetamol", front: "Paracetamol", when: "Not on its own for back pain", back: "Not recommended alone for back pain, but it may be used with another painkiller." },
        { id: "amitriptyline", front: "Amitriptyline", when: "Low dose, for nerve pain", back: "Taken in the evening as it can make you sleepy. It can take 6 weeks to work as a painkiller." },
        { id: "gabapentinoids", front: "Gabapentin and pregabalin", when: "Taken for nerve pain", back: "NICE advises not offering them for sciatica. Never stop suddenly: the dose is reduced gradually." },
        { id: "opioids", front: "Opioids", when: "Short term, after injury or surgery", back: "For most people in the longer term they become ineffective, can be harmful and can lead to dependency." },
      ],
    },
    sources: [INF_STENOSIS, INF_PAINKILLERS, NHS_BACK, AU_BACK, NHS_AMITRIPTYLINE, NHS_GABAPENTIN, NHS_PREGABALIN, NICE_NG59, NHS_GABAPENTIN_QUESTIONS, INF_CHRONIC_LIVING, NHS_AMITRIPTYLINE_HOW],
    quiz: {
      question: "Is paracetamol on its own recommended for back pain?",
      options: [{ text: "No, but it may be used with another painkiller", right: true }, { text: "Yes, it works best alone" }, { text: "Only at night" }],
      why: "Paracetamol on its own is not recommended for back pain, but it may be used with another painkiller.",
    },
  },
  {
    id: "ss-injections",
    kicker: "Treatment",
    question: "Would a steroid injection help?",
    hook: "An option when other treatments have not helped, as part of a wider plan. Guidance is clear about where epidurals do and do not fit.",
    short: "NHS inform lists spinal injections as an option if symptoms are not improving and other treatments have been tried. They work best as part of a treatment programme, not on their own. NICE says not to use epidural injections for neurogenic claudication in central spinal canal stenosis.",
    sections: [
      {
        heading: "Where injections fit",
        paragraphs: [
          "If symptoms are not improving and other treatments have been tried, NHS inform lists spinal injections as one option, along with spinal surgery and specialist pain services.",
          "The Chartered Society of Physiotherapy says injections may be beneficial as part of a treatment programme, but not on their own, and may be tried if exercises and other treatments have not helped. For severe sciatica, the NHS says you may be referred to a hospital specialist for a painkilling injection such as an epidural.",
        ],
      },
      {
        heading: "What NICE says",
        paragraphs: [
          "NICE guidance says to consider epidural injections of local anaesthetic and steroid in people with acute and severe sciatica.",
          "It also says not to use epidural injections for neurogenic claudication in people who have central spinal canal stenosis, and not to offer spinal injections for managing low back pain.",
        ],
      },
      {
        heading: "How a steroid injection works",
        paragraphs: [
          "Steroid injections reduce inflammation, which in turn should reduce pain. They cannot treat the underlying cause of a condition, but they can treat the symptoms.",
          "Some start to relieve pain within hours and the effects last about a week. Others take around a week to work but can ease symptoms for two months or longer.",
        ],
      },
      {
        heading: "Before and after",
        paragraphs: [
          "Your doctor may check your blood pressure and blood sugar first, as steroid injections can cause these to rise. If you have diabetes, it is important to monitor your blood sugar after an injection.",
          "You may want to arrange transport home, as numbness from a local anaesthetic can make it difficult to drive. Your doctor will probably recommend no more than three steroid injections into the same part of the body within a year.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Most people have steroid injections without any side effects. Occasionally pain flares up within the first 24 hours, and this usually settles by itself within a couple of days.",
          "Very rarely, an injection can cause an infection. Arthritis UK says that if a joint becomes more painful and hot after an injection, you should see your doctor immediately, especially if you feel unwell.",
        ],
      },
    ],
    helps: [
      "Tell the person giving the injection if you take a blood thinner such as warfarin.",
      "If you have diabetes, monitor your blood sugar levels after a steroid injection.",
      "Arrange transport home, especially if you are having a local anaesthetic.",
      "Do not overdo it for the first two weeks after a steroid injection.",
      "Keep your steroid card with you if you are given one.",
    ],
    tryThisWeek: [
      "Mention any blood thinners.",
      "Arrange a lift home.",
      "Take it easy for two weeks.",
    ],
    ask: "Would an injection suit my kind of stenosis, and what could it do for my symptoms?",
    interactive: {
      kind: "timeline",
      title: "A steroid injection, step by step",
      steps: [
        { id: "before", when: "Before", title: "Checks first", points: ["Blood pressure and blood sugar may be checked.", "Mention any blood thinners, such as warfarin."] },
        { id: "day", when: "On the day", title: "The injection", points: ["A local anaesthetic may be given with it.", "You may wait 10 to 15 minutes in the clinic."] },
        { id: "first-day", when: "First 24 hours", title: "A possible flare", points: ["Pain occasionally flares up.", "It usually settles within a couple of days."] },
        { id: "two-weeks", when: "First two weeks", title: "Not overdoing it", points: ["Do not overdo it.", "Then carry on with the exercises you were given."] },
        { id: "later", when: "Weeks to months", title: "How long it lasts", points: ["Some ease symptoms for two months or longer.", "Usually no more than three a year in one place."] },
      ],
    },
    sources: [INF_STENOSIS, CSP_TREATMENT, NHS_SCIATICA, NICE_NG59, AU_STEROID],
    quiz: {
      question: "What does NICE say about epidural injections for neurogenic claudication in central spinal canal stenosis?",
      options: [{ text: "Not to use them", right: true }, { text: "Use them before anything else" }, { text: "Use them every month" }],
      why: "It also says not to use epidural injections for neurogenic claudication in people who have central spinal canal stenosis.",
    },
  },
  {
    id: "ss-surgery",
    kicker: "Surgery",
    question: "When is surgery an option, and what does it involve?",
    hook: "Lumbar decompression makes more room for squeezed nerves. It usually comes after other treatments, with weeks of recovery.",
    short: "If symptoms are not improving and other treatments have been tried, spinal surgery is one option. Lumbar decompression surgery relieves symptoms of compressed nerves, such as tingling or numbness in the legs. Many people return to work around 4 to 6 weeks afterwards, and it may take up to 12 weeks to do all usual activities.",
    sections: [
      {
        heading: "When surgery is considered",
        paragraphs: [
          "If symptoms are not improving and other treatments have been tried, spinal surgery is one of the options. For people with severe and worsening symptoms, scans may be considered to help decide if surgery may be helpful.",
          "Arthritis UK says very few people with back pain need an operation. Sometimes one is needed for spinal stenosis to free the nerve, and most doctors would recommend other measures first, such as medication and physiotherapy.",
        ],
      },
      {
        heading: "Lumbar decompression",
        paragraphs: [
          "Lumbar decompression surgery is an operation on the lower spine to relieve symptoms of compressed nerves, such as tingling or numbness in the legs. Spinal stenosis is one of the reasons it is done.",
          "Depending on the cause, you may have other treatments first, such as physiotherapy, losing weight if you're overweight, or steroid injections.",
        ],
      },
      {
        heading: "The operation",
        paragraphs: [
          "It is done in hospital under a general anaesthetic, so you will be asleep. The surgeon removes small pieces of bone from a vertebra, called a laminectomy, and sometimes part of a disc, called a discectomy.",
          "The operation usually takes around 2 to 4 hours, but may take longer. The nursing team will help you get up and move around as soon as possible, and you may be able to leave hospital after around 2 to 5 days.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "You may be able to return to work around 4 to 6 weeks after the operation, depending on the type of work you do and your doctor's advice. It may take up to 12 weeks to be able to do all your usual activities.",
          "You may need painkillers for several weeks. The hospital might arrange physiotherapy to help with movement, and occupational therapy to make everyday tasks easier while you recover.",
        ],
      },
      {
        heading: "Risks, and when to call",
        paragraphs: [
          "Serious complications are uncommon, but may include a leak of spinal fluid, damage to spinal nerves or paralysis, back pain that does not get better, or other vertebrae moving out of place. Your doctor will talk to you about them.",
          "After surgery, contact the hospital or NHS 111 if you get new pain, weakness or numbness in your legs, problems controlling when you pee or poo, or skin around your stitches that is hot, itchy, oozing fluid or red.",
        ],
      },
    ],
    helps: [
      "Talk to your GP and hospital staff about why an operation is being suggested and what it means in the longer term.",
      "If you want a second opinion, ask your GP for a further referral to a different surgeon.",
      "Keep in contact with your GP while you wait, and report any changes in your condition.",
      "After surgery, follow the advice from your healthcare team, including activities to avoid, such as driving.",
      "Contact the hospital or NHS 111 about new leg symptoms, problems controlling when you pee or poo, or a hot, red or oozing wound.",
    ],
    tryThisWeek: [
      "Ask why surgery is being suggested.",
      "Ask your GP about a second opinion.",
      "Report any changes while you wait.",
    ],
    ask: "What could surgery change for me, what are my risks, and what happens if I wait?",
    interactive: {
      kind: "timeline",
      title: "From decision to recovery",
      steps: [
        { id: "first", when: "Before surgery is offered", title: "Other treatments first", points: ["Such as physiotherapy, weight loss or injections.", "Scans may help decide if surgery may help."] },
        { id: "operation", when: "The day", title: "The operation", points: ["Under general anaesthetic, so you are asleep.", "Usually around 2 to 4 hours."] },
        { id: "ward", when: "First days", title: "Up and moving", points: ["Help to get up as soon as possible.", "A catheter is usually removed after 1 or 2 days."] },
        { id: "home", when: "Around 2 to 5 days", title: "Home from hospital", points: ["Painkillers for several weeks.", "Physiotherapy may be arranged."] },
        { id: "work", when: "Around 4 to 6 weeks", title: "Back to work", points: ["Depending on your work and your doctor's advice."] },
        { id: "usual", when: "Up to 12 weeks", title: "Usual activities", points: ["It may take this long to do everything you usually do."] },
      ],
    },
    sources: [INF_STENOSIS, AU_BACK, NHS_DECOMP, RCS_BEFORE_SURGERY],
    quiz: {
      question: "How long may it take to do all your usual activities after lumbar decompression?",
      options: [{ text: "Up to 12 weeks", right: true }, { text: "Two days" }, { text: "Two years" }],
      why: "It may take up to 12 weeks to be able to do all your usual activities.",
    },
  },
  {
    id: "ss-walking",
    kicker: "Walking",
    question: "How can I walk further with spinal stenosis?",
    hook: "Walking can be uncomfortable, but it is safe and it helps. Short walks, planned breaks and small steps up.",
    short: "With lumbar stenosis, it is safe to keep walking as long as symptoms remain manageable, and walking short distances regularly is encouraged. If leaning forward eases your legs, regular breaks help: take a seat or lean against a wall. Build up your distance gradually.",
    sections: [
      {
        heading: "Safe to keep walking",
        paragraphs: [
          "If you have been diagnosed with lumbar stenosis, walking can be uncomfortable, but it is safe to continue walking as long as symptoms remain manageable.",
          "Walking short distances regularly is encouraged to help manage your symptoms.",
        ],
      },
      {
        heading: "Breaks that help",
        paragraphs: [
          "If your leg symptoms are relieved by bending or leaning forward, it may help to have regular breaks when walking. You can try taking a seat or leaning against a wall.",
          "If you are struggling with walking, it may help to talk to a healthcare professional about a walking aid.",
        ],
      },
      {
        heading: "A little more at a time",
        paragraphs: [
          "If you are not very active but are able to walk, increase your walking distance gradually. NHS inform's advice for long-term pain is to start with a short walk and, if you feel able, increase its length each day or week.",
          "Pacing means deciding how much you are going to do and not pushing beyond your limit, then adding small amounts as you feel able. It helps you choose to take a break before pain, tiredness or other symptoms become too much.",
        ],
      },
      {
        heading: "Setting a goal",
        paragraphs: [
          "NHS inform suggests making a goal specific, measurable and realistic, and giving it a time frame, such as walking for 10 minutes three times a week.",
          "Walking to the shops, walking part of a journey or going for a regular walk with a friend are ways to make walking a habit. Walking in a group is another way to start walking and stay motivated.",
        ],
      },
      {
        heading: "How much activity in a week",
        paragraphs: [
          "Adults aged 65 and over should aim to be physically active every day, even if it is just light activity, and to do at least 150 minutes of moderate intensity activity a week, such as walking for health.",
          "Speak to a GP first if you have not exercised for some time, or if you have medical conditions or concerns. If your joints are a problem, an exercise class at a swimming pool may help, as the water supports your joints while you move.",
        ],
      },
    ],
    helps: [
      "Walk short distances regularly, as long as symptoms remain manageable.",
      "Take regular breaks when walking: take a seat or lean against a wall.",
      "Increase your walking distance gradually.",
      "Set a specific goal, such as walking for 10 minutes three times a week.",
      "Talk to a healthcare professional about a walking aid if you are struggling.",
      "Speak to a GP first if you have not exercised for some time.",
    ],
    tryThisWeek: [
      "Walk short distances regularly.",
      "Take breaks: sit or lean on a wall.",
      "Set one walking goal.",
    ],
    ask: "How far should I aim to walk, and would a walking aid help me?",
    interactive: {
      kind: "scenarios",
      title: "Out for a walk",
      scenarios: [
        {
          id: "legs",
          situation: "Halfway to the shops, your legs feel heavy and tingly.",
          options: [{ text: "Sit down or lean against a wall", best: true }, { text: "Push on without stopping" }],
          why: "If leaning forward eases your legs, regular breaks may help when walking. You can try taking a seat or leaning against a wall.",
        },
        {
          id: "good-day",
          situation: "You feel good and want to double your usual walk.",
          options: [{ text: "Add a small amount", best: true }, { text: "Double it today" }],
          why: "Pacing means deciding how much you are going to do and not pushing beyond your limit, then adding small amounts as you feel able.",
        },
        {
          id: "struggling",
          situation: "Walking keeps getting harder.",
          options: [{ text: "Ask about a walking aid", best: true }, { text: "Stop walking altogether" }],
          why: "If you are struggling with walking, it may help to talk to a healthcare professional about a walking aid.",
        },
        {
          id: "restart",
          situation: "You have not exercised for a long time.",
          options: [{ text: "Speak to a GP first", best: true }, { text: "Start with a long hike" }],
          why: "Speak to a GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        },
      ],
    },
    sources: [INF_STENOSIS, NHS_WALKING, INF_CHRONIC_LIVING, NHS_OLDER_ACTIVITY],
    quiz: {
      question: "Is it safe to keep walking with lumbar stenosis?",
      options: [{ text: "Yes, as long as symptoms remain manageable", right: true }, { text: "No, walking damages the nerves" }, { text: "Only with a walking aid" }],
      why: "Walking can be uncomfortable, but it is safe to continue walking as long as symptoms remain manageable.",
    },
  },
  {
    id: "ss-posture",
    kicker: "Everyday life",
    question: "Which positions ease spinal stenosis?",
    hook: "Leaning forward and sitting down often bring relief. Moving often, and getting up the easy way, help too.",
    short: "Lumbar stenosis symptoms are usually worse with walking or standing and relieved by sitting or leaning forward. Your posture does not need to be perfect: moving often and changing position help. There is no best sleeping position or mattress; whatever feels most comfortable is best.",
    sections: [
      {
        heading: "Leaning forward",
        paragraphs: [
          "Lumbar stenosis symptoms are usually worse with walking or standing, and are relieved by sitting or leaning forward.",
          "If bending or leaning forward eases your leg symptoms, regular breaks when walking may help. You can try taking a seat or leaning against a wall.",
        ],
      },
      {
        heading: "Moving often",
        paragraphs: [
          "Your posture does not need to be perfect. Try to move often, so you do not stay in the same position for too long.",
          "If you have to sit or rest, try to change positions regularly and find one that reduces any pain in your back or legs. Staying in awkward positions or in the same position may increase your pain or recovery time.",
        ],
      },
      {
        heading: "Out of a chair, out of bed",
        paragraphs: [
          "To get out of a chair, ease yourself forward to the edge, brace your tummy muscles and use the arms of the chair to help you stand up. If the chair has no arms, push on your thighs for a bit of extra support.",
          "To get out of bed, one way is to roll onto the side you feel most comfortable, use your arms to slowly raise yourself up, and carefully bring your leg towards the floor before standing.",
        ],
      },
      {
        heading: "At a desk",
        paragraphs: [
          "Your lower back should be well supported, and you should be able to put your feet on the floor. If you cannot, you might need a footrest.",
          "Try to take regular breaks to stretch and walk around. Arthritis UK suggests setting a timer on your phone or computer to remind you at least once an hour.",
        ],
      },
      {
        heading: "Heat, ice and sleep",
        paragraphs: [
          "A heat pack or hot water bottle wrapped in a tea towel can relieve stiffness or muscle spasms, and about 15 to 20 minutes at a time is normally enough. If you have any issues with circulation or sensation, NHS inform says you should not use ice or heat.",
          "The Chartered Society of Physiotherapy says there is no best position or type of mattress for back pain: whatever feels most comfortable for you is best.",
        ],
      },
    ],
    helps: [
      "Take a seat or lean against a wall when your legs need a break.",
      "Change positions regularly, and find one that reduces any pain in your back or legs.",
      "Use the arms of a chair, or push on your thighs, to help you stand up.",
      "Set a timer to remind you to stretch and walk around at least once an hour.",
      "Do not use ice or heat if you have any issues with circulation or sensation.",
    ],
    tryThisWeek: [
      "Rest by sitting or leaning forward.",
      "Change position often.",
      "Set an hourly reminder to move.",
    ],
    ask: "Which positions and movements are best for my back and legs?",
    interactive: {
      kind: "scenarios",
      title: "Around the day",
      scenarios: [
        {
          id: "queue",
          situation: "You are standing in a long queue and your legs start to ache.",
          options: [{ text: "Lean against a wall or find a seat", best: true }, { text: "Stand up straighter" }],
          why: "Lumbar stenosis symptoms are usually worse with walking or standing, and are relieved by sitting or leaning forward.",
        },
        {
          id: "desk",
          situation: "You have been at your desk all morning.",
          options: [{ text: "Get up, stretch and walk around", best: true }, { text: "Push on until lunch" }],
          why: "Try to take regular breaks to stretch and walk around, at least once an hour.",
        },
        {
          id: "chair",
          situation: "You need to get out of a chair with no arms.",
          options: [{ text: "Edge forward, brace, push on your thighs", best: true }, { text: "Twist out sideways quickly" }],
          why: "Ease yourself forward to the edge and brace your tummy muscles. If the chair has no arms, push on your thighs for a bit of extra support.",
        },
        {
          id: "numb",
          situation: "Your leg feels numb and you want to put a heat pack on it.",
          options: [{ text: "Leave it: no heat with changed sensation", best: true }, { text: "Use the heat pack as normal" }],
          why: "If you have any issues with circulation or sensation, NHS inform says you should not use ice or heat.",
        },
      ],
    },
    sources: [INF_STENOSIS, INF_BACK, AU_BACK, NHS_BACK, CSP_LIVING],
    quiz: {
      question: "Is there one best sleeping position or mattress for back pain?",
      options: [{ text: "No: whatever feels most comfortable is best", right: true }, { text: "Yes, a hard mattress on your back" }, { text: "Yes, a soft mattress on your side" }],
      why: "There is no best position or type of mattress for back pain: whatever feels most comfortable for you is best.",
    },
  },
  {
    id: "ss-weight-activity",
    kicker: "Weight",
    question: "Do weight and activity make a difference?",
    hook: "Less strain on the back, and stronger, steadier legs. Small, realistic changes count, and support is free.",
    short: "Maintaining a healthy weight and staying active are part of NHS inform's lifestyle advice for spinal stenosis. If you are overweight, losing weight can reduce the strain on your back, but there is no special diet. Exercise is important whatever your weight.",
    sections: [
      {
        heading: "Part of looking after your back",
        paragraphs: [
          "NHS inform's lifestyle advice for spinal stenosis includes staying active, modifying activities and pacing, maintaining a healthy weight, stopping smoking, and managing stress and emotional wellbeing.",
          "NICE says a person's BMI, smoking status or psychological distress should not influence the decision to refer them for a surgical opinion for sciatica.",
        ],
      },
      {
        heading: "Weight and the back",
        paragraphs: [
          "There are no special diets that have been shown to help or prevent back pain. If you are overweight, changing your diet and doing some regular exercise to lose weight can reduce the strain on your back.",
          "Losing weight if you're overweight is one of the treatments that may be tried before lumbar decompression surgery, depending on the cause of the compressed nerves.",
        ],
      },
      {
        heading: "Knowing where you are",
        paragraphs: [
          "A BMI calculator is the easiest way to work out if you are a healthy weight. BMI is only a rough guide, and a healthcare professional will look at it along with other factors.",
          "If you are planning on losing weight, it is a good idea to speak to your doctor first. The NHS has a free weight loss plan that you can follow over 12 weeks, with an app to download.",
        ],
      },
      {
        heading: "Activity, whatever your weight",
        paragraphs: [
          "Exercise is still important whatever your weight. Arthritis UK says that for people with arthritis or a related condition, exercise can reduce pain and fatigue, reduce stiffness and increase the strength of the muscles.",
          "Adults aged 65 and over should do activities that improve strength, balance and flexibility on at least 2 days a week, and break up long periods of not moving with some activity.",
        ],
      },
      {
        heading: "Smoking",
        paragraphs: [
          "Stopping smoking is part of NHS inform's lifestyle advice for spinal stenosis. The NHS says smoking can increase your risk of getting sciatica, and that nicotine weakens the disc tissue in the spine.",
        ],
      },
    ],
    helps: [
      "Use a BMI calculator to find out whether you are a healthy weight.",
      "Speak to your doctor first if you are planning on losing weight.",
      "Try the free NHS 12-week weight loss plan if you want to lose weight.",
      "Do activities that improve strength, balance and flexibility on at least 2 days a week.",
      "Break up long periods of sitting or lying down with some activity.",
      "If you smoke, stopping is part of managing spinal stenosis.",
    ],
    tryThisWeek: [
      "Check your BMI.",
      "Do strength and balance on 2 days.",
      "Break up long spells of sitting.",
    ],
    ask: "Would changes to my weight or activity help my symptoms, and what support is there?",
    interactive: {
      kind: "scenarios",
      title: "Weight, activity and your back",
      scenarios: [
        {
          id: "diet",
          situation: "You see a diet sold as a cure for back pain.",
          options: [{ text: "Skip it: none has been shown to help", best: true }, { text: "Buy it and follow it strictly" }],
          why: "There are no special diets that have been shown to help or prevent back pain.",
        },
        {
          id: "start",
          situation: "You want to lose some weight.",
          options: [{ text: "Speak to your doctor first", best: true }, { text: "Cut out meals to lose it fast" }],
          why: "If you are planning on losing weight, it is a good idea to speak to your doctor first.",
        },
        {
          id: "healthy",
          situation: "Your weight is already in the healthy range.",
          options: [{ text: "Keep active anyway", best: true }, { text: "Exercise no longer matters" }],
          why: "Exercise is still important whatever your weight.",
        },
        {
          id: "referral",
          situation: "You worry your weight will stop a referral to a surgeon for sciatica.",
          options: [{ text: "NICE says BMI should not influence it", best: true }, { text: "Lose weight before asking" }],
          why: "NICE says a person's BMI, smoking status or psychological distress should not influence the decision to refer them for a surgical opinion for sciatica.",
        },
      ],
    },
    sources: [INF_STENOSIS, AU_BACK, NHS_DECOMP, NICE_NG59, AU_WEIGHT, NHS_OLDER_ACTIVITY, NHS_SCIATICA, NHS_SLIPPED],
    quiz: {
      question: "Is there a special diet for back pain?",
      options: [{ text: "No: none has been shown to help or prevent it", right: true }, { text: "Yes, a low-carbohydrate diet" }, { text: "Yes, a dairy-free diet" }],
      why: "There are no special diets that have been shown to help or prevent back pain.",
    },
  },
  {
    id: "ss-mood",
    kicker: "Wellbeing",
    question: "How can I live well with long-term pain?",
    hook: "Pain affects mood, sleep and friendships, and they affect pain back. Pacing, routine and support can loosen that loop.",
    short: "Spinal stenosis is a long-term condition, and looking after your mental wellbeing matters for recovery. Pain can make you tired, anxious and low, which can make it worse. Pacing, a regular sleep routine, staying in touch with people and talking therapies can all help.",
    sections: [
      {
        heading: "A long-term condition",
        paragraphs: [
          "Spinal stenosis is a long-term condition, and symptoms can vary. When dealing with any health condition, it is important to also look after your mental wellbeing, as this can affect your recovery.",
          "Chronic pain is pain that lasts longer than 3 months. It can cause emotional distress and make daily tasks more difficult, and the Chartered Society of Physiotherapy says all pain is 100 per cent real and never all in your head.",
        ],
      },
      {
        heading: "Pain and mood",
        paragraphs: [
          "Pain can make you tired, anxious, depressed and grumpy, and this can make the pain even worse. Be kind to yourself.",
          "Stress can make symptoms worse or cause them to flare up more often. Try to find time each day to do something that relaxes you.",
        ],
      },
      {
        heading: "Pacing",
        paragraphs: [
          "Being less active might feel like it is helping in the short term, but in the longer term being underactive can make pain worse. Doing too much can cause flare-ups.",
          "Pacing means deciding how much you are going to do and not pushing beyond your limit. It encourages you to take a break before pain, tiredness or other symptoms become too much.",
        ],
      },
      {
        heading: "Sleep and other people",
        paragraphs: [
          "Try to stick to a normal sleep routine: go to bed at the same time each evening, get up at a regular time and avoid naps in the day. If sleep problems persist, see a GP.",
          "Keep in touch with friends and family, perhaps with shorter visits more often, and aim to talk about anything other than your pain.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "Talking therapies, like counselling, can help with the impact of pain on your mental health, so speak to your GP about your options. Pain management programmes may help you control your pain and teach you how to live with long-term pain, including how it affects your mood.",
          "If feelings are so bad that you feel on the verge of harming yourself or someone else, this is an emergency. Talk to your doctor immediately, call 999 or go to your local hospital's A&E department.",
        ],
      },
    ],
    helps: [
      "Pace yourself: decide how much you will do, and take a break before pain becomes too much.",
      "Go to bed and get up at regular times, and avoid naps in the day.",
      "Keep in touch with friends and family, even with shorter visits.",
      "Speak to your GP about talking therapies or a pain management programme.",
      "Call Arthritis UK's free helpline on 0800 5200 520 to talk to an adviser.",
      "In a crisis, talk to your doctor immediately, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Pace one task.",
      "Keep regular sleep times.",
      "Get in touch with a friend.",
    ],
    ask: "Could I be referred to a pain management programme or talking therapy?",
    interactive: {
      kind: "signs",
      title: "How long-term pain may be affecting you",
      intro: "Tick any that apply. They become a list to take to your GP.",
      signs: [
        "Poor sleep",
        "Low mood",
        "Doing less than before",
        "Tiredness",
        "Poor concentration or memory",
        "Feeling overwhelmed",
        "Feeling hopeless about the future",
      ],
      after: "Speak to your GP about these. If you feel on the verge of harming yourself or someone else, call 999 or go to A&E.",
      copyHeading: "Things I have noticed",
    },
    sources: [INF_STENOSIS, INF_CHRONIC_WHAT, CSP_CAUSES, NHS_PAIN, INF_CHRONIC_LIVING, AU_BACK, AU_MENTAL],
    quiz: {
      question: "When is pain called chronic?",
      options: [{ text: "When it lasts longer than 3 months", right: true }, { text: "When it lasts longer than a day" }, { text: "Only when nothing shows on a scan" }],
      why: "Chronic pain is pain that lasts longer than 3 months.",
    },
  },
];
