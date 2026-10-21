import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Back pain page's pieces (content/library-conditions/body.ts). Every
// sentence was written from wording checked on 21 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Arthritis UK
// (Versus Arthritis's new name: versusarthritis.org now redirects to arthritis-uk.org), the Chartered
// Society of Physiotherapy, NICE's low back pain guideline (NG59), Flippin' Pain and the government's
// Access to Work page. General information only; it never replaces what a person's own team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/${path}` });

const NHS_BACK = nhs("Back pain", "conditions/back-pain/");
const NHS_SCIATICA = nhs("Sciatica", "conditions/sciatica/");
const NHS_SLIPPED = nhs("Slipped disc", "conditions/slipped-disc/");
const NHS_NECK = nhs("Neck pain", "symptoms/neck-pain-and-stiff-neck/");
const NHS_MSK = nhs("Get NHS help for back or joint problems", "nhs-services/get-nhs-help-for-back-joint-problems/");
const NHS_PHYSIO = nhs("Physiotherapy", "tests-and-treatments/physiotherapy/");
const NHS_MRI = nhs("MRI scan", "tests-and-treatments/mri-scan/");
const NHS_DECOMPRESSION = nhs("Lumbar decompression surgery", "tests-and-treatments/lumbar-decompression-surgery/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_PILATES = nhs("Back pain pilates video workout", "live-well/exercise/pilates-and-yoga/chronic-back-pain-pilates-exercise-video/");

const AUK_BACK = auk("Back pain", "understanding-arthritis/conditions/back-pain/");
const AUK_NECK = auk("Neck pain", "understanding-arthritis/conditions/neck-pain/");
const AUK_BACK_EXERCISES = auk("Exercises for the back", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-back/");
const AUK_PAINKILLERS = auk("Painkillers and arthritis pain relief", "understanding-arthritis/arthritis-treatments/drugs/painkillers-and-nsaids/");
const AUK_PAIN = auk("Managing arthritis pain", "understanding-arthritis/managing-arthritis-symptoms/managing-arthritis-pain/");
const AUK_SLEEP = auk("Overcoming sleep problems with arthritis", "living-with-arthritis/health-and-wellbeing/sleep/");

const CSP_CAUSES = csp("Causes of back pain", "conditions/back-pain/causes-back-pain");
const CSP_TREATMENT = csp("Treatment for back pain", "conditions/back-pain/treatment-back-pain");
const CSP_HELP = csp("Getting help for back pain", "conditions/back-pain/getting-help-back-pain");
const CSP_LIVING = csp("Living with back pain", "conditions/back-pain/living-back-pain");
const CSP_VIDEO_EXERCISES = csp("Video exercises for back pain", "conditions/back-pain/video-exercises-back-pain");
const CSP_TEN_THINGS = csp("10 things you need to know about your back", "publications/10-things-you-need-know-about-your-back");
const CSP_NECK_CAUSES = csp("Causes of neck pain", "conditions/neck-pain/causes-neck-pain");
const CSP_NECK_TREATMENT = csp("Treatment for neck pain", "conditions/neck-pain/treatment-neck-pain");
const CSP_NECK_HELP = csp("Getting help for neck pain", "conditions/neck-pain/getting-help-neck-pain");

const NICE_NG59: LearnSource = { label: "NICE: Low back pain and sciatica in over 16s (NG59), recommendations", url: "https://www.nice.org.uk/guidance/ng59/chapter/Recommendations" };
const FLIPPIN_PAIN: LearnSource = { label: "Flippin' Pain: Understanding pain", url: "https://www.flippinpain.co.uk/understanding-pain" };
const LWWP_PACING: LearnSource = { label: "Live Well with Pain: Pacing", url: "https://livewellwithpain.co.uk/resources-for-people-with-pain/ten-footsteps-to-living-well-with-pain/pacing/" };
const GOV_ACCESS_TO_WORK: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const backAnswers: LearnArticle[] = [
  {
    id: "back-what-hurts",
    kicker: "Understanding",
    question: "What is actually hurting in my back?",
    hook: "Usually a sore, sensitive back rather than a damaged one. Muscles, joints, discs and nerves all play a part.",
    short: "Back pain is very common and is rarely a sign of a serious problem. In most cases it is not possible to find the exact cause, and structural damage of any kind is rare. A common cause is a pulled muscle, and many physical, emotional and everyday factors can turn the pain up.",
    sections: [
      {
        heading: "How your back is built",
        paragraphs: [
          "The spine is one of the strongest parts of the body. It is made up of 24 bones called vertebrae, stacked one on top of another, with discs between them that cushion the bones and help the spine move.",
          "Ligaments and muscles around the vertebrae support and stabilise the spine. Small facet joints run up and down either side of it, and nerves pass out between the vertebrae to the rest of the body.",
        ],
      },
      {
        heading: "Often no single cause",
        paragraphs: [
          "Back pain can have many causes, and it is not always obvious what causes it. A common cause is an injury like a pulled muscle, or strain.",
          "In most cases, it is not possible to identify the exact cause. Structural damage of any kind is rare, and this type of back pain usually gets better quickly.",
          "Lack of exercise, muscle strains or ligament sprains, poor posture and an awkward work or home set-up can all play a part.",
        ],
      },
      {
        heading: "Discs and nerves",
        paragraphs: [
          "Discs are designed to help the spine take loads, and movement and loading help to keep them healthy and strong. The Chartered Society of Physiotherapy says their design makes it impossible to slip a disc, though a disc can be strained by sudden or repeated overload.",
          "When a disc bulges and presses on a nerve, pain can travel from the back or buttock down the leg towards the foot. This is sciatica. You probably do not have sciatica if you only have back pain.",
        ],
      },
      {
        heading: "What turns the volume up",
        paragraphs: [
          "Physical, psychological and lifestyle factors can all be involved. They include protecting the back and avoiding movements, fear of damage, feeling down or stressed, poor sleep and not getting enough physical activity.",
          "All pain is 100 per cent real and never all in your head, even when stress or mood are involved. Each of these factors can turn up the volume on pain, and understanding them puts you in a stronger position to turn the dial down again.",
        ],
      },
      {
        heading: "As you get older",
        paragraphs: [
          "As you grow older, the joints, discs and ligaments of the spine age as well. They remain strong, but it is usual for your back to get stiffer.",
          "Very rarely, back pain can be a sign of a serious problem, such as a broken bone, cancer or an infection.",
        ],
      },
    ],
    helps: [
      "Stay active and try to continue with your daily activities.",
      "Talk openly about any worries with a healthcare professional, as reducing fear may help speed up your recovery.",
      "Notice what might be turning your pain up, such as poor sleep, stress or not moving enough.",
      "See a GP if the pain does not improve after a few weeks of home treatment, or stops you doing day-to-day activities.",
    ],
    tryThisWeek: [
      "Keep up your daily activities.",
      "Talk through any worries.",
      "Notice what turns the pain up.",
    ],
    ask: "What do you think is causing my back pain, and is there anything about it that worries you?",
    interactive: {
      kind: "risk-check",
      title: "What can turn the pain up?",
      intro: "Tick any that apply. Most of these can be changed.",
      items: [
        { id: "protecting", label: "Avoiding movements to protect it", note: "Protecting the back and avoiding movements is one of the physical factors linked with back pain.", changeable: true },
        { id: "fear", label: "Fear of damage or not getting better", note: "A psychological factor that can turn up the volume on your pain.", changeable: true },
        { id: "mood", label: "Feeling down or stressed", note: "The pain is still 100 per cent real when stress or mood are involved.", changeable: true },
        { id: "sleep", label: "Not enough good quality sleep", note: "Being tired and run down, or not sleeping well, can add to back pain.", changeable: true },
        { id: "active", label: "Not enough physical activity", note: "Lack of exercise can stiffen the spine and weaken the muscles.", changeable: true },
        { id: "weight", label: "Being overweight", note: "One of the general health and lifestyle factors linked with back pain.", changeable: true },
        { id: "life", label: "Stressful events at work or home", note: "Social triggers, such as a family death or illness, can play a part too.", changeable: false },
        { id: "age", label: "Getting older", note: "The spine ages and gets stiffer, but its structures remain strong.", changeable: false },
      ],
    },
    sources: [NHS_BACK, AUK_BACK, CSP_CAUSES, NHS_SCIATICA],
    quiz: {
      question: "How often is structural damage behind back pain?",
      options: [{ text: "Rarely", right: true }, { text: "Almost always" }, { text: "About half the time" }],
      why: "Structural damage of any kind is rare, and this type of back pain usually gets better quickly.",
    },
  },
  {
    id: "back-red-flags",
    kicker: "Warning signs",
    question: "Which back pain symptoms need urgent attention?",
    hook: "Most back pain is not serious. A few symptoms, such as numbness around your bottom or changes in peeing, need help straight away.",
    short: "Very rarely, back pain is a sign of a serious problem. Call 999 or go to A&E if you have back pain with numbness around your genitals or bottom, changes in your bladder or bowels, or pain, weakness or numbness in both legs. Feeling hot, cold or shivery, or severe pain that starts suddenly, needs an urgent GP appointment or help from 111.",
    sections: [
      {
        heading: "Rare, but important",
        paragraphs: [
          "Very rarely, back pain or pain that travels down the leg is a sign of a serious problem, such as a broken bone, cancer or an infection.",
          "The Chartered Society of Physiotherapy says something more serious or underlying accounts for just two per cent of cases.",
        ],
      },
      {
        heading: "Call 999 or go to A&E",
        paragraphs: [
          "Call 999 or go to A&E if you have back pain and pain, tingling, weakness or numbness in both legs, or a loss of feeling around your genitals or anus.",
          "Do the same for changes in your bladder or bowels, such as difficulty peeing, or peeing or pooing yourself. It also applies to changes in how your penis or vagina feels during sex, chest pain, or back pain that started after a serious accident, such as a car accident.",
          "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
      {
        heading: "An urgent GP appointment or 111",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from 111 if you have back pain and feel hot, cold, shivery or generally unwell. The same applies if it is severe pain that starts suddenly, or it is getting worse quickly.",
          "The Chartered Society of Physiotherapy also lists feeling unwell with your back pain, such as a fever or significant sweating that wakes you from sleep.",
        ],
      },
      {
        heading: "See a GP",
        paragraphs: [
          "See a GP if your back pain does not improve after treating it at home for a few weeks, stops you doing day-to-day activities, or you are worried or struggling to cope.",
          "Also see a GP if you have lost weight without trying, there is a lump or swelling in your back, or the pain is worse at night or when sneezing, coughing or pooing. Pain coming from the top of your back, between your shoulders, is another reason.",
        ],
      },
      {
        heading: "Sciatica in both legs",
        paragraphs: [
          "With sciatica, go to A&E or call 999 if you have it on both sides, or weakness or numbness in both legs that is severe or getting worse. These could be symptoms of a serious back problem that needs to be treated in hospital as soon as possible.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E for numbness around your genitals or bottom, or changes in peeing or pooing.",
      "Do not drive to A&E: ask someone to drive you, or call 999 for an ambulance.",
      "Ask for an urgent GP appointment or call 111 if you feel hot, cold or shivery with back pain.",
      "See a GP if the pain is worse at night, or you have lost weight without trying.",
      "Contact a doctor if you feel unwell with your back pain, such as a fever or sweating that wakes you.",
    ],
    tryThisWeek: [
      "Learn the 999 signs.",
      "Never drive yourself to A&E.",
      "Know when to call 111.",
    ],
    ask: "Which symptoms should make me call 999 rather than wait for an appointment?",
    interactive: {
      kind: "signs",
      title: "Signs to act on",
      intro: "Tick any you have with your back pain. Some need help the same day.",
      signs: [
        "Numbness around your genitals or bottom",
        "Difficulty peeing",
        "Peeing or pooing yourself",
        "Pain, weakness or numbness in both legs",
        "Changes in how sex feels",
        "Chest pain",
        "Back pain after a serious accident",
        "Feeling hot, cold or shivery",
        "Severe pain that started suddenly",
      ],
      after: "Call 999 or go to A&E for any of the first seven, and do not drive yourself. For feeling hot, cold or shivery, or sudden severe pain, ask for an urgent GP appointment or call 111.",
      copyHeading: "Symptoms I have with my back pain",
    },
    sources: [NHS_BACK, AUK_BACK, NHS_SCIATICA, CSP_CAUSES, CSP_TEN_THINGS],
    quiz: {
      question: "You have back pain and numbness around your bottom. What should you do?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Book a routine GP appointment" }, { text: "Rest in bed and wait" }],
      why: "Call 999 or go to A&E if you have back pain and pain, tingling, weakness or numbness in both legs, or a loss of feeling around your genitals or anus.",
    },
  },
  {
    id: "back-scans",
    kicker: "Tests",
    question: "Why don't I need a scan for my back pain?",
    hook: "Scans often show normal changes that have nothing to do with the pain, and seeing them can make people move less.",
    short: "Most back problems can be diagnosed by your GP talking to you and examining your back, and you usually will not need any tests. NICE advises against routinely offering imaging for low back pain outside specialist care. A scan may be needed after an injury, if your doctor suspects an underlying cause, or if the pain lasts an unusually long time.",
    sections: [
      {
        heading: "Diagnosed by talking and examining",
        paragraphs: [
          "Doctors often start with a watch-and-wait approach, because most back pain improves on its own within a few weeks.",
          "Your GP will talk to you about your symptoms and may examine your back. Most back problems can be diagnosed this way, and you usually will not need any tests.",
        ],
      },
      {
        heading: "What NICE advises",
        paragraphs: [
          "NICE's guideline on low back pain and sciatica says imaging should not be routinely offered for low back pain, with or without sciatica, outside specialist settings.",
          "In specialist settings, it says imaging should be considered only if the result is likely to change how the pain is managed. People referred for a specialist opinion may not need imaging either.",
        ],
      },
      {
        heading: "Normal changes, not damage",
        paragraphs: [
          "Seeing perfectly normal changes to the spine on a scan can cause people to avoid the activities they should be doing to get better, such as exercise and movement. The Chartered Society of Physiotherapy says a scan can do more harm than good.",
          "Disc degeneration, disc bulges and arthritic changes are often present in people without pain as well as people with pain. Flippin' Pain reports research showing that people who have scans and X-rays tend to be more anxious and report more pain.",
          "X-rays are rarely used for back pain, because many causes are related to soft tissues, such as muscles and ligaments, which do not show up on an X-ray.",
        ],
      },
      {
        heading: "When a scan may help",
        paragraphs: [
          "You may be sent for a scan if you have had an injury to your back, such as after a bad fall, if your doctor suspects an underlying cause, or if the pain has lasted an unusually long time.",
          "If your physio or GP does not send you for one, the Chartered Society of Physiotherapy says to take it as a good sign that there is nothing concerning going on.",
        ],
      },
      {
        heading: "If you do have an MRI scan",
        paragraphs: [
          "An MRI scan takes detailed pictures of the inside of your body. It usually takes between 15 minutes and 1 hour, and you lie still on a flat bed that moves through a short tunnel.",
          "It usually takes 1 to 2 weeks to get the results. If you feel anxious or have a fear of small spaces, talk to a healthcare professional at the hospital before your appointment.",
        ],
      },
    ],
    helps: [
      "Expect your GP to talk to you and examine your back: most back problems need no tests.",
      "If no scan is offered, take it as a good sign that nothing concerning is going on.",
      "Keep up exercise and movement, which help you get better, whatever a scan shows.",
      "If you are anxious about an MRI scan or fear small spaces, talk to the hospital before your appointment.",
      "If you have not heard about MRI results after a few weeks, contact the doctor who referred you.",
    ],
    tryThisWeek: [
      "Ask what the examination showed.",
      "Keep moving, whatever a scan shows.",
      "Raise any scan worries early.",
    ],
    ask: "Do I need a scan, and would the result change my treatment?",
    interactive: {
      kind: "scenarios",
      title: "To scan or not?",
      scenarios: [
        {
          id: "new",
          situation: "Your back pain started a week ago, with no injury.",
          options: [{ text: "Usually no scan: try home care", best: true }, { text: "Ask for an MRI straight away" }],
          why: "Doctors often start with a watch-and-wait approach, because most back pain improves on its own within a few weeks.",
        },
        {
          id: "fall",
          situation: "Your back pain started after a bad fall.",
          options: [{ text: "A scan may be needed", best: true }, { text: "Scans are never used" }],
          why: "You may be sent for a scan if you have had an injury to your back, such as after a bad fall.",
        },
        {
          id: "bulge",
          situation: "A scan report mentions disc bulges.",
          options: [{ text: "Common in people without pain too", best: true }, { text: "Proof of serious damage" }],
          why: "Disc degeneration, disc bulges and arthritic changes are often present in people without pain as well as people with pain.",
        },
        {
          id: "none",
          situation: "Your GP does not send you for a scan.",
          options: [{ text: "Take it as a good sign", best: true }, { text: "Assume something was missed" }],
          why: "If your physio or GP does not send you for one, the Chartered Society of Physiotherapy says to take it as a good sign that there is nothing concerning going on.",
        },
      ],
    },
    sources: [AUK_BACK, NICE_NG59, CSP_TEN_THINGS, FLIPPIN_PAIN, NHS_MRI],
    quiz: {
      question: "Why are X-rays rarely used for back pain?",
      options: [{ text: "Many causes are in soft tissues X-rays do not show", right: true }, { text: "X-rays cannot see the spine" }, { text: "X-rays make back pain worse" }],
      why: "X-rays are rarely used for back pain, because many causes are related to soft tissues, such as muscles and ligaments, which do not show up on an X-ray.",
    },
  },
  {
    id: "back-long-term",
    kicker: "Long-term pain",
    question: "Why does my back still hurt after months?",
    hook: "Pain is an alarm system. When it lasts, the alarm can become oversensitive, even after the body has healed.",
    short: "Pain that lasts longer than three months is called persistent, long-term or chronic pain. By then, any original injury has usually healed, but the nervous system can stay sensitive, like an alarm that keeps going off. Hurt does not always mean harm, and the pain system can become less sensitive again.",
    sections: [
      {
        heading: "Pain is an alarm",
        paragraphs: [
          "Pain is meant to protect you. Your nervous system can produce pain in response to injury, encouraging you to protect the affected area while it heals.",
          "Flippin' Pain, a UK public health movement, describes pain as the body's alarm system. It is more about protection than detecting harm.",
        ],
      },
      {
        heading: "When the alarm stays on",
        paragraphs: [
          "When pain lasts longer than three months, it is called chronic pain. Chronic, persistent and long-term all mean the same thing, and Flippin' Pain says this kind of pain affects between 30 and 50 in every 100 people in the UK.",
          "By then, the original injury, if there was one, has usually healed. Pain can continue because of changes in the nerves and nervous system, which become more sensitive over time.",
        ],
      },
      {
        heading: "Hurt does not always mean harm",
        paragraphs: [
          "It is possible to have high levels of pain with little or no injury or damage. The pain you feel is always 100 per cent real, but it might not reflect the amount of damage in your body.",
          "Signs of an overprotective pain system include activities that used to hurt a little now hurting a lot, pain spreading or moving, and stiffness or muscle spasms. Spasms are almost never a sign that you have damaged something.",
        ],
      },
      {
        heading: "Everything matters",
        paragraphs: [
          "The brain listens to the body, to thoughts, memories and emotions, and to things like work and family relationships. When it senses danger from any of these, it can produce pain, and the safer it feels, the more likely it is to reduce the pain.",
          "Medicines and surgery work for only a minority of people with persistent pain, and only for short periods. Painkillers can help in the short term, but many people with persistent pain do not find them helpful.",
        ],
      },
      {
        heading: "Turning the alarm down",
        paragraphs: [
          "Just as the pain system has become more sensitive, it can become less sensitive as it senses less danger. Moving more has been proven to be one of the best ways to improve feelings of safety.",
          "Pain management programmes may help you control your pain and live with long-term pain. They are usually outpatient sessions about pain, how it affects your mood, and what you can do to overcome difficulties.",
        ],
      },
    ],
    helps: [
      "Get checked thoroughly by a qualified health professional, to make sure there is no other condition.",
      "Start gently with simple movement such as walking, and slowly increase what you do.",
      "Ask your GP or pharmacist for a medication review if you are not sure which painkillers are helping.",
      "Ask whether a pain management programme could help you.",
      "Try a number of things together, such as moving more, better sleep and less stress.",
      "Ask about cognitive behavioural therapy (CBT) to help you cope with the pain.",
    ],
    tryThisWeek: [
      "Start gently with a walk.",
      "Ask for a medication review.",
      "Ask about a pain programme.",
    ],
    ask: "Could my pain system have become oversensitive, and would a pain management programme help me?",
    interactive: {
      kind: "flip-cards",
      title: "Pain words, explained",
      intro: "Turn each card to see what the word means, in Flippin' Pain's terms.",
      cards: [
        { id: "acute", front: "Acute pain", when: "Usually less than three months", back: "Short-term pain, often with a clear cause. It is helpful and protective, and tends to respond well to painkillers." },
        { id: "persistent", front: "Persistent pain", when: "Lasting over three months", back: "Also called chronic or long-term pain. The original injury has usually healed, but the alarm keeps going off." },
        { id: "harm", front: "Hurt and harm", when: "Not the same thing", back: "High levels of pain are possible with little or no damage. The pain is still always real." },
        { id: "biopsychosocial", front: "Biopsychosocial", when: "What the brain listens to", back: "Muscles and nerves, thoughts and emotions, and things like work and family all affect pain." },
        { id: "neuroplasticity", front: "Neuroplasticity", when: "Why recovery is possible", back: "The brain can change. A pain system that became more sensitive can become less sensitive." },
      ],
    },
    sources: [AUK_PAIN, FLIPPIN_PAIN, AUK_BACK, NHS_BACK],
    quiz: {
      question: "What is pain that lasts longer than three months called?",
      options: [{ text: "Chronic, persistent or long-term pain", right: true }, { text: "Acute pain" }, { text: "Referred pain" }],
      why: "When pain lasts longer than three months, it is called chronic pain.",
    },
  },
  {
    id: "back-exercises",
    kicker: "Exercise",
    question: "Which exercises help a sore back?",
    hook: "No one type of exercise is proven best. Gentle exercises to start, then whatever you enjoy and will keep doing.",
    short: "Exercise is one of the most helpful treatments for back pain, and the most effective way to prevent future episodes. Start gently and build up, and do not worry if your back is a bit sore at first. Get advice from a physiotherapist or healthcare professional before starting a new exercise regime, and stop and see a GP if your pain gets worse.",
    sections: [
      {
        heading: "Why exercise helps",
        paragraphs: [
          "Staying active is the most important way you can help yourself. It keeps the muscles around the spine strong, gives the bones and joints more support, and helps your back keep its natural range of movement.",
          "Regular exercise leads to shorter and less frequent episodes of back pain, and releases endorphins, the body's natural painkillers. It is also the most effective way to prevent future episodes.",
        ],
      },
      {
        heading: "Before you start",
        paragraphs: [
          "The Chartered Society of Physiotherapy recommends getting advice from a physiotherapist or healthcare professional before starting any new exercise regime. The NHS says to stop if your pain gets worse and see a GP for advice.",
          "Start slowly and build up gradually if you are new to exercise. Make sure you have plenty of space around you, and drink water while you exercise.",
        ],
      },
      {
        heading: "Gentle exercises lying down",
        paragraphs: [
          "Pelvic tilt: lie down with your knees bent. Tighten your stomach muscles, flattening your back against the floor, and hold for five seconds. Repeat five times.",
          "Knee rolls: lie on your back with your knees bent and your feet together. Roll your knees to one side, keeping your shoulders flat, and hold for 10 seconds, then roll them over to the other side. Do this three times on each side.",
          "Knees to chest: lie on your back with your knees bent and feet flat. Bring one knee up and use your hands to pull it gently towards your chest, hold for five seconds and relax. Do this five times on each side.",
        ],
      },
      {
        heading: "On all fours and standing",
        paragraphs: [
          "Back stabiliser: kneel on all fours with your back straight and tighten your stomach. Raise one arm in front of you and hold for 10 seconds, keeping your pelvis level. Repeat 10 times on each side.",
          "Hamstring stretch: steady yourself, put one leg up on a chair and, keeping it straight, bend the supporting knee forward. Arthritis UK notes that with acute sciatica this stretch may make things feel worse, so ask a physiotherapist if it suits you.",
        ],
      },
      {
        heading: "Any exercise you enjoy",
        paragraphs: [
          "Exercise has been shown to be the most helpful treatment for back pain, and it does not matter what type you do, as long as you stay active. Activities like walking, swimming, yoga and pilates may also help ease back pain.",
          "Exercise might make your back feel a bit sore at first, but this does not usually mean you are harming it. The NHS has a 29-minute pilates class for people with chronic back pain.",
        ],
      },
    ],
    helps: [
      "Get advice from a physiotherapist or healthcare professional before starting a new exercise regime.",
      "Stop if your pain gets worse, and see a GP for advice.",
      "Start gently, then try to do a little bit more each day.",
      "Choose a form of exercise you enjoy, such as walking, swimming, yoga or pilates.",
      "Try taking some painkillers before exercising.",
      "If you have acute sciatica, ask a physiotherapist before doing the hamstring stretch.",
    ],
    tryThisWeek: [
      "Check with a physio before starting.",
      "Start gently, then a little more.",
      "Pick an exercise you enjoy.",
    ],
    ask: "Which exercises are safe for my back, and how much should I do?",
    interactive: {
      kind: "flip-cards",
      title: "Five gentle back exercises",
      intro: "Turn each card to see how Arthritis UK describes it. Check with your GP or physiotherapist first.",
      cards: [
        { id: "pelvic-tilt", front: "Pelvic tilt", when: "Lying down, knees bent", back: "Tighten your stomach muscles, flattening your back against the floor. Hold for five seconds. Repeat five times." },
        { id: "knee-rolls", front: "Knee rolls", when: "On your back, feet together", back: "Roll your knees to one side, shoulders flat, and hold for 10 seconds. Then the other side. Three times each side." },
        { id: "knees-chest", front: "Knees to chest", when: "On your back, feet flat", back: "Pull one knee gently towards your chest with your hands. Hold for five seconds, then relax. Five times each side." },
        { id: "stabiliser", front: "Back stabiliser", when: "On all fours, back straight", back: "Tighten your stomach and raise one arm in front of you. Hold for 10 seconds, pelvis level. 10 times each side." },
        { id: "stomach-tone", front: "Stomach tone", when: "Lying on your front", back: "Pull in your stomach muscles around your belly button. Hold for five seconds, three times. Build up to 10 seconds." },
      ],
    },
    sources: [AUK_BACK, AUK_BACK_EXERCISES, CSP_VIDEO_EXERCISES, NHS_BACK, CSP_TREATMENT, NHS_PILATES, CSP_TEN_THINGS],
    quiz: {
      question: "Does it matter which type of exercise you do?",
      options: [{ text: "No, as long as you stay active", right: true }, { text: "Yes, only stretches help" }, { text: "Yes, only gym work helps" }],
      why: "Exercise has been shown to be the most helpful treatment for back pain, and it does not matter what type you do, as long as you stay active.",
    },
  },
  {
    id: "back-painkillers",
    kicker: "Treatment",
    question: "Which painkillers help back pain, and which don't?",
    hook: "Anti-inflammatories like ibuprofen are the usual suggestion. Paracetamol alone is not recommended, and strong painkillers are for days, not months.",
    short: "The NHS suggests anti-inflammatory medicine like ibuprofen for back pain, though it may not be suitable for everyone. Paracetamol on its own is not recommended for back pain, but it may be used with another painkiller. Painkillers do not speed up recovery, so they are best used for a short time, alongside staying active.",
    sections: [
      {
        heading: "What the NHS suggests",
        paragraphs: [
          "Anti-inflammatory medicine like ibuprofen may help, but it may not be suitable for everyone. Check with a pharmacist or GP if you are unsure which painkiller is suitable for you.",
          "Paracetamol on its own is not recommended for back pain, but it may be used with another painkiller. NICE also advises that paracetamol alone should not be offered for low back pain.",
        ],
      },
      {
        heading: "Using them well",
        paragraphs: [
          "Arthritis UK suggests taking painkillers before the pain becomes very bad, as a short course of about a week to 10 days. If they have not helped after this time, they are unlikely to.",
          "Do not take ibuprofen tablets for more than 10 days unless a doctor advises it. To reduce the risk of side effects, take the smallest dose you need for the shortest time you need it.",
          "Check with a pharmacist or doctor before using more than one anti-inflammatory. Ibuprofen should not be taken at the same time as others, such as naproxen or aspirin.",
        ],
      },
      {
        heading: "Who should check first",
        paragraphs: [
          "Ibuprofen may not be suitable if you have or have had a stomach ulcer, have asthma, have a heart, liver or kidney condition, have had a stroke, or are pregnant.",
          "Common side effects include indigestion, stomach aches and feeling sick. You are less likely to get side effects from ibuprofen gel or spray.",
        ],
      },
      {
        heading: "Stronger painkillers",
        paragraphs: [
          "Painkillers containing codeine can help pain that has just started, but they can cause addiction and should only be used for a few days. Arthritis UK says to take them for three days at most without medical advice.",
          "NICE advises against opioids for long-term low back pain. Gabapentin and pregabalin are no longer offered for back pain, so if you take them, speak to your doctor about the risks and benefits.",
        ],
      },
      {
        heading: "Not the whole answer",
        paragraphs: [
          "Painkillers do not speed up recovery. The Chartered Society of Physiotherapy says to use them alongside other measures, such as exercise, and only for a short time, because they can bring side effects.",
        ],
      },
    ],
    helps: [
      "Ask a pharmacist or GP which painkiller is suitable for you.",
      "Take the smallest dose you need for the shortest time you need it.",
      "Do not take ibuprofen tablets for more than 10 days unless a doctor advises it.",
      "Do not take ibuprofen with other anti-inflammatories, such as naproxen or aspirin.",
      "Only use painkillers containing codeine for a few days.",
      "If you take gabapentin or pregabalin for back pain, speak to your doctor about the risks and benefits.",
    ],
    tryThisWeek: [
      "Ask a pharmacist what suits you.",
      "Keep any course short.",
      "Never double up anti-inflammatories.",
    ],
    ask: "Which painkiller is safest for me, and for how long should I take it?",
    interactive: {
      kind: "flip-cards",
      title: "Painkillers, card by card",
      intro: "Turn each card to see what the NHS, NICE and Arthritis UK say about it for back pain.",
      cards: [
        { id: "ibuprofen", front: "Ibuprofen", when: "An anti-inflammatory (NSAID)", back: "Suggested by the NHS for back pain, but not suitable for everyone. Not for more than 10 days without a doctor's advice." },
        { id: "paracetamol", front: "Paracetamol", when: "Not on its own for back pain", back: "Not recommended alone for back pain, but it may be used with another painkiller." },
        { id: "gel", front: "Ibuprofen gel or spray", when: "Rubbed into the skin", back: "You are less likely to get side effects from ibuprofen gel or spray than from tablets." },
        { id: "codeine", front: "Codeine", when: "Only for a few days", back: "Can help pain that has just started, but can cause addiction. Three days at most without medical advice." },
        { id: "gabapentinoids", front: "Gabapentin and pregabalin", when: "No longer offered for back pain", back: "If you take them, speak to your doctor about the risks and benefits." },
      ],
    },
    sources: [NHS_BACK, NICE_NG59, AUK_BACK, NHS_IBUPROFEN, NHS_SLIPPED, AUK_PAINKILLERS, CSP_TEN_THINGS],
    quiz: {
      question: "Is paracetamol on its own recommended for back pain?",
      options: [{ text: "No, but it may be used with another painkiller", right: true }, { text: "Yes, it is the first choice" }, { text: "Only at night" }],
      why: "Paracetamol on its own is not recommended for back pain, but it may be used with another painkiller.",
    },
  },
  {
    id: "back-physio",
    kicker: "Treatment",
    question: "What can physiotherapy do for back pain, and how do I get it?",
    hook: "In many areas of England you can refer yourself, without seeing a GP first.",
    short: "Physiotherapy uses exercise, hands-on treatment and advice to ease pain and improve movement. In many areas you can get it from NHS community musculoskeletal (MSK) services without a GP referral. The Chartered Society of Physiotherapy suggests getting advice if your pain is not settling after 2 to 3 weeks and is stopping your normal activities, or if it lasts more than 6 weeks.",
    sections: [
      {
        heading: "When to ask",
        paragraphs: [
          "If your pain is not settling or is getting worse over 2 to 3 weeks, and is stopping you doing your normal activities, the Chartered Society of Physiotherapy suggests seeking advice from your GP or a physiotherapist. If the pain is not interfering with normal activity but goes on for more than 6 weeks, seek advice too.",
          "Other treatments, such as group exercise sessions and physiotherapy, may be recommended if your pain does not get better after a few weeks.",
        ],
      },
      {
        heading: "Referring yourself",
        paragraphs: [
          "In many areas, you can get physiotherapy from NHS community MSK services without needing a GP referral. You do not need a diagnosis, and most adults in England who are registered with a GP can refer themselves.",
          "Physiotherapy is free on the NHS, but there may be a long waiting list. Some GP surgeries have first contact physiotherapists, who specialise in bone and joint problems and can assess you and offer advice.",
        ],
      },
      {
        heading: "The first appointment",
        paragraphs: [
          "The physiotherapist will ask about your symptoms, medical history and lifestyle, including a detailed history of your pain. They will check how you move and how your muscles, nerves and joints are working.",
          "They will then discuss the treatment options with you, and advise you about the number of sessions you may need.",
        ],
      },
      {
        heading: "What treatment may include",
        paragraphs: [
          "Treatment may include a home exercise programme for strength and mobility, advice on managing pain, and manual, or hands-on, treatment.",
          "Hands-on treatments have been shown to have a small benefit for back pain, and only as part of a whole programme that includes exercise. NICE says manual therapy should only be considered as part of a package that includes exercise.",
        ],
      },
      {
        heading: "At home, and going private",
        paragraphs: [
          "After each session, you may be given exercises to do at home before your next appointment. Doing them regularly helps your recovery.",
          "You may choose to pay for private physiotherapy. Check the physiotherapist is chartered, with MCSP after their name, and registered with the Health and Care Professions Council.",
        ],
      },
    ],
    helps: [
      "Check whether you can refer yourself to your local NHS community MSK service.",
      "Seek advice if your pain is not settling after 2 to 3 weeks and is stopping your normal activities.",
      "Ask your GP surgery whether it has a first contact physiotherapist.",
      "Do your home exercises regularly between sessions.",
      "If you pay privately, check for MCSP after the physiotherapist's name and registration with the Health and Care Professions Council.",
    ],
    tryThisWeek: [
      "Look up self-referral near you.",
      "Ask about a first contact physio.",
      "Do your home exercises.",
    ],
    ask: "Can I be referred to a physiotherapist, or can I refer myself?",
    interactive: {
      kind: "timeline",
      title: "The road to physiotherapy",
      steps: [
        { id: "home", when: "The first few weeks", title: "Keep active at home", points: ["Back pain often improves on its own within a few weeks.", "Stay active and carry on with daily activities."] },
        { id: "refer", when: "2 to 3 weeks", title: "Pain not settling?", points: ["Seek advice if it is stopping your normal activities.", "Refer yourself to NHS MSK services, or see your GP."] },
        { id: "first", when: "First appointment", title: "Assessment", points: ["Questions about your symptoms, history and lifestyle.", "Checks on how you move and how your joints work."] },
        { id: "plan", when: "The sessions that follow", title: "Your treatment plan", points: ["Exercises, advice and hands-on treatment.", "Exercises to do at home between sessions."] },
      ],
    },
    sources: [CSP_HELP, NHS_BACK, NHS_MSK, NHS_PHYSIO, CSP_TREATMENT, NICE_NG59],
    quiz: {
      question: "Do you always need a GP referral for NHS physiotherapy?",
      options: [{ text: "No, in many areas you can refer yourself", right: true }, { text: "Yes, always" }, { text: "Only if you have a diagnosis" }],
      why: "In many areas, you can get physiotherapy from NHS community MSK services without needing a GP referral.",
    },
  },
  {
    id: "back-injections-surgery",
    kicker: "Treatment",
    question: "Will I need an injection or an operation for my back?",
    hook: "Very few people with back pain need an operation. Injections and surgery are for particular problems, usually after other treatments.",
    short: "Very few people with back pain need an operation, and NICE advises against spinal injections for low back pain. For severe sciatica, an epidural injection or decompression surgery may help when other treatments have not. A procedure to seal off nerves is only for some people with long-term lower back pain.",
    sections: [
      {
        heading: "Rarely needed",
        paragraphs: [
          "Very few people with back pain need an operation. Taking some painkillers, staying active and doing some specific exercises are generally the most helpful treatments.",
          "The Chartered Society of Physiotherapy says that, on average, the results of back surgery are no better in the medium and long term than non-surgical treatment, such as exercise. A non-surgical option should always come first.",
        ],
      },
      {
        heading: "Injections",
        paragraphs: [
          "NICE advises that spinal injections should not be offered for managing low back pain. Injections are sometimes used for back pain or severe sciatica where other treatments have not worked.",
          "For acute and severe sciatica, NICE says an epidural injection of local anaesthetic and steroid can be considered. The Chartered Society of Physiotherapy says injections may help as part of a treatment programme, but not on their own.",
        ],
      },
      {
        heading: "Sealing off nerves",
        paragraphs: [
          "Radiofrequency denervation is a procedure to seal off some of the nerves in your back so they stop sending pain signals. The NHS says it is only for long-term lower back pain.",
          "NICE says to consider referral when other treatment has not worked, the pain is moderate or severe, and it is thought to come from particular nerves. It should only be done after a test nerve block has helped.",
        ],
      },
      {
        heading: "Decompression surgery",
        paragraphs: [
          "Sometimes an operation is needed for spinal stenosis or severe sciatica, to free the nerve. This is called spinal decompression surgery, and most doctors would recommend other measures, such as medicines and physiotherapy, first.",
          "Lumbar decompression usually takes around 2 to 4 hours. You may be able to leave hospital after around 2 to 5 days and return to work after around 4 to 6 weeks, though it may take up to 12 weeks to do all your usual activities.",
          "Serious complications are uncommon, but can include a leak of spinal fluid, damage to spinal nerves, or back pain that does not get better.",
        ],
      },
      {
        heading: "When surgery is urgent, and what is not offered",
        paragraphs: [
          "Urgent surgery may be needed if you lose bladder or bowel control or the use of your legs. If this happens, get urgent medical help at A&E. This is extremely rare.",
          "NICE advises that spinal fusion should not be offered for low back pain unless as part of a research trial, and that disc replacement should not be offered.",
        ],
      },
    ],
    helps: [
      "Try a non-surgical option, including exercise and activity, first.",
      "Ask your doctor to talk you through the possible complications before any operation.",
      "Get urgent help at A&E if you lose bladder or bowel control or the use of your legs.",
      "After surgery, contact the hospital or 111 if you get new pain, weakness or numbness in your legs, or problems peeing or pooing.",
      "Follow the advice of your healthcare team after an operation, so you have a good recovery.",
    ],
    tryThisWeek: [
      "Try non-surgical options first.",
      "Ask about possible complications.",
      "Know the urgent signs.",
    ],
    ask: "Would an injection or surgery help my kind of back pain, and what are the risks?",
    interactive: {
      kind: "timeline",
      title: "After lumbar decompression",
      steps: [
        { id: "operation", when: "The operation", title: "In hospital", points: ["Usually takes around 2 to 4 hours.", "A general anaesthetic, so you are asleep."] },
        { id: "home", when: "Around 2 to 5 days", title: "Going home", points: ["Nurses help you get up and move as soon as possible.", "You may be able to leave hospital."] },
        { id: "work", when: "Around 4 to 6 weeks", title: "Back to work", points: ["Depends on the work you do and your doctor's advice."] },
        { id: "usual", when: "Up to 12 weeks", title: "Your usual activities", points: ["Painkillers may be needed for several weeks.", "Physiotherapy may help your movement."] },
      ],
    },
    sources: [AUK_BACK, CSP_TEN_THINGS, NICE_NG59, CSP_TREATMENT, NHS_BACK, NHS_SCIATICA, NHS_DECOMPRESSION],
    quiz: {
      question: "How many people with back pain need an operation?",
      options: [{ text: "Very few", right: true }, { text: "Most" }, { text: "About half" }],
      why: "Very few people with back pain need an operation.",
    },
  },
  {
    id: "back-work",
    kicker: "Work",
    question: "Should I keep working with back pain?",
    hook: "Staying in work, or getting back soon, often helps people recover more quickly. You do not need to wait until the pain has gone.",
    short: "Getting back to work, or staying in work if you can, often helps people recover from back pain more quickly. Many people return within a few days, and you do not need to wait until the pain has completely gone. Lighter duties, a workplace assessment and the government's Access to Work scheme can help.",
    sections: [
      {
        heading: "Work can help recovery",
        paragraphs: [
          "Getting back to work, or staying in work if you can, often helps people recover more quickly from back pain. Time off work has also been shown to affect people's mood.",
          "Many people can return to work within a few days, though it varies with the person and the type of job. You do not need to wait until your back problem has completely gone.",
          "Taking a lot of time off can make it harder to return and may lead to longer-term problems. Studies show that long rest and avoiding activity lead to more pain, poorer recovery and longer absence from work.",
        ],
      },
      {
        heading: "Talking to your employer",
        paragraphs: [
          "Keep in contact with your employer and discuss what can be done to help you return. If your work involves heavy lifting or other physically demanding tasks, you may need lighter duties or fewer hours for a while.",
          "If you have an occupational health adviser through your job, they can advise on what work you can do safely and arrange simple adjustments.",
        ],
      },
      {
        heading: "At a desk",
        paragraphs: [
          "Your chair and desk should be at the correct height for you, with your lower back well supported and your feet on the floor, or on a footrest. Avoid stretching to reach your mouse, keyboard or phone.",
          "Ask for a workplace assessment and tell whoever carries it out about your back pain. Take regular breaks to stretch and walk around, perhaps with a timer to remind you at least once an hour.",
        ],
      },
      {
        heading: "Lifting",
        paragraphs: [
          "The Chartered Society of Physiotherapy says you should not fear bending or lifting. It is perfectly normal to find your own technique, and practising helps your body get used to carrying different loads.",
          "Bending your knees, keeping the weight close to your body and using both hands may help to prevent further episodes. Avoid lifting anything too heavy or awkward for you, and ask for help if you need it.",
        ],
      },
      {
        heading: "Extra support",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition. It could give you a grant towards things like specialist equipment, travel to work if you cannot use public transport, and physical changes to your workplace.",
          "A grant will not affect other benefits, and you will not have to pay it back. If you cannot get back to work after two weeks off with back pain, talk to your GP and employer about physiotherapy or other treatment.",
        ],
      },
    ],
    helps: [
      "Keep in contact with your employer and discuss what would help you return.",
      "Ask about lighter duties or fewer hours for a while if your job is physically demanding.",
      "Ask for a workplace assessment, and tell whoever carries it out about your back pain.",
      "Set a timer to stretch and walk around at least once an hour.",
      "Check whether Access to Work could help with equipment or travel to work.",
      "If you have been off for two weeks, talk to your GP and employer about physiotherapy.",
    ],
    tryThisWeek: [
      "Talk to your employer.",
      "Ask for a workplace assessment.",
      "Move at least once an hour.",
    ],
    ask: "Is it safe for me to keep working, and what changes at work would help?",
    interactive: {
      kind: "scenarios",
      title: "Work moments",
      scenarios: [
        {
          id: "early",
          situation: "Your back hurts, but you could manage lighter work.",
          options: [{ text: "Stay in work with lighter duties", best: true }, { text: "Wait until the pain has gone" }],
          why: "You do not need to wait until your back problem has completely gone.",
        },
        {
          id: "desk",
          situation: "You sit at a computer all day.",
          options: [{ text: "Get up to move at least hourly", best: true }, { text: "Sit still to protect your back" }],
          why: "Take regular breaks to stretch and walk around, perhaps with a timer to remind you at least once an hour.",
        },
        {
          id: "lifting",
          situation: "Your job involves heavy lifting.",
          options: [{ text: "Ask about lighter duties for a while", best: true }, { text: "Carry on exactly as before" }],
          why: "If your work involves heavy lifting or other physically demanding tasks, you may need lighter duties or fewer hours for a while.",
        },
        {
          id: "travel",
          situation: "You cannot manage public transport to work.",
          options: [{ text: "Check Access to Work", best: true }, { text: "Give up work" }],
          why: "It could give you a grant towards things like specialist equipment, travel to work if you cannot use public transport, and physical changes to your workplace.",
        },
      ],
    },
    sources: [AUK_BACK, CSP_TEN_THINGS, GOV_ACCESS_TO_WORK],
    quiz: {
      question: "Do you need to wait until back pain has gone before returning to work?",
      options: [{ text: "No", right: true }, { text: "Yes, completely gone" }, { text: "Yes, for at least a month" }],
      why: "You do not need to wait until your back problem has completely gone.",
    },
  },
  {
    id: "back-sleep",
    kicker: "Sleep",
    question: "What bed, pillow and position are best with back pain?",
    hook: "There is no best position or mattress. Whatever feels most comfortable for you is best.",
    short: "The Chartered Society of Physiotherapy says there is no best sleeping position or type of mattress: whatever feels most comfortable for you is best. Sleep matters, because it reduces stress and helps you cope with pain, while poor sleep can lower the point at which you feel pain. A regular routine and winding down before bed can help.",
    sections: [
      {
        heading: "No best position or mattress",
        paragraphs: [
          "There is no best position or type of mattress. Whatever feels most comfortable for you is best.",
          "If your mattress is old or uncomfortable, it may be worth replacing. Some people like to rest a pillow between their knees while lying on their side.",
        ],
      },
      {
        heading: "Why sleep matters",
        paragraphs: [
          "Sleep reduces stress and improves your overall feeling of wellbeing. This makes you less susceptible to the triggers of pain, and helps you cope when it does occur.",
          "Not getting enough good sleep can lower the point at which you feel pain, known as your pain threshold. Being tired and run down, and not getting enough good quality sleep, are among the factors linked with back pain.",
        ],
      },
      {
        heading: "How much, and when",
        paragraphs: [
          "The Chartered Society of Physiotherapy suggests aiming for seven and a half to eight hours a night, with a regular routine as far as possible. Arthritis UK says most adults need between six and nine hours.",
          "Try getting up and going to bed at the same time, even if you had an unsettled night, and avoid sleeping during the day.",
        ],
      },
      {
        heading: "Winding down",
        paragraphs: [
          "A warm bath before bed may help ease stiffness. Keep the bedroom dark, quiet and at a comfortable temperature, and put screens down.",
          "Avoid caffeine after midday, and avoid alcohol if you are having difficulty sleeping. Regular exercise that leaves you at least a bit out of breath can improve sleep, but it is best not to exercise close to bedtime.",
        ],
      },
      {
        heading: "Pain at night",
        paragraphs: [
          "See a GP if your back pain does not improve after resting or is worse at night.",
          "If you are regularly waking up in pain, see a healthcare professional such as your GP or a physiotherapist. Changes to medicines or lifestyle, including exercise, may help.",
        ],
      },
    ],
    helps: [
      "Choose whatever sleeping position and mattress feel most comfortable for you.",
      "Get up and go to bed at the same times, even after an unsettled night.",
      "Try a pillow between your knees when lying on your side.",
      "Avoid caffeine after midday.",
      "See a GP if your back pain is worse at night or does not improve after resting.",
    ],
    tryThisWeek: [
      "Keep the same bed and wake times.",
      "No caffeine after midday.",
      "Try a pillow between your knees.",
    ],
    ask: "My pain disturbs my sleep: what could help, and is pain at night a concern?",
    interactive: {
      kind: "scenarios",
      title: "Better nights",
      scenarios: [
        {
          id: "mattress",
          situation: "You think you need a special mattress for your back.",
          options: [{ text: "Choose what feels comfortable", best: true }, { text: "Buy the firmest you can find" }],
          why: "There is no best position or type of mattress. Whatever feels most comfortable for you is best.",
        },
        {
          id: "nap",
          situation: "You slept badly and want a long nap.",
          options: [{ text: "Avoid sleeping during the day", best: true }, { text: "Nap all afternoon" }],
          why: "Try getting up and going to bed at the same time, even if you had an unsettled night, and avoid sleeping during the day.",
        },
        {
          id: "coffee",
          situation: "It is mid-afternoon and you want a coffee.",
          options: [{ text: "Choose a drink without caffeine", best: true }, { text: "Have a strong coffee" }],
          why: "Avoid caffeine after midday, and avoid alcohol if you are having difficulty sleeping.",
        },
        {
          id: "night",
          situation: "Your back pain is worse at night.",
          options: [{ text: "See a GP", best: true }, { text: "Ignore it" }],
          why: "See a GP if your back pain does not improve after resting or is worse at night.",
        },
      ],
    },
    sources: [CSP_LIVING, AUK_SLEEP, CSP_CAUSES, NHS_BACK],
    quiz: {
      question: "Which mattress is best for back pain?",
      options: [{ text: "Whichever feels most comfortable for you", right: true }, { text: "The firmest you can find" }, { text: "The softest you can find" }],
      why: "There is no best position or type of mattress. Whatever feels most comfortable for you is best.",
    },
  },
  {
    id: "back-fear",
    kicker: "Confidence",
    question: "I'm scared moving will make my back worse. How do I get past that?",
    hook: "Hurt does not always mean harm. Moving is almost always safe, and building up slowly helps.",
    short: "Fear of damage is one of the things that can make back pain worse, and not moving can make your back stiffer and more painful. Movement is almost always safe, and being a bit sore when you start exercising does not usually mean you are harming your back. Talking through your worries, pacing and building up slowly can help.",
    sections: [
      {
        heading: "Why fear matters",
        paragraphs: [
          "Fear of damage or of not getting better is one of the psychological factors that can cause back pain. Talking openly about worries with a healthcare professional can help, as reducing fear may help speed up your recovery.",
          "If you stop being active for a long time, the muscles in your back become weak and you become less fit. Not moving can make your back stiffer and more painful.",
        ],
      },
      {
        heading: "Movement is almost always safe",
        paragraphs: [
          "Flippin' Pain says movement is the most important tool for recovery, and it is almost always safe to move. A health professional can check you over and tell you if you are the very rare case for whom it is not.",
          "Exercise might make your back feel a bit sore at first, but this does not usually mean you are harming it. An increase in pain does not mean an increase in injury.",
        ],
      },
      {
        heading: "Avoiding, or boom and bust",
        paragraphs: [
          "Two common patterns hold people back: avoiding everything that hurts, or doing everything regardless of how much it hurts until it becomes too much. The second is often called boom and bust.",
          "Boom and bust means doing too much on good days, which makes the pain worse, and then being forced to rest while it settles down.",
        ],
      },
      {
        heading: "Pacing",
        paragraphs: [
          "Pacing means changing how you exercise and do daily activities so as not to flare up your pain, and gradually increasing what you can do. It is about taking a break before pain or tiredness become too much, not carrying on until pain forces you to stop.",
          "Filling in an activity diary for at least two days can show your current pattern. Then plan which activities to pace, how long to go before a break, and how much effort each one takes.",
        ],
      },
      {
        heading: "Bending, lifting and setbacks",
        paragraphs: [
          "The Chartered Society of Physiotherapy says you should not fear bending or lifting. In the first few days, avoiding activities that make the pain worse may help, but returning to all usual activities gradually is important for recovery.",
          "Retraining the pain system can be slow, and you can have setbacks. But pain is protecting you, not telling you that you have damaged yourself.",
        ],
      },
    ],
    helps: [
      "Talk openly about any worries with a healthcare professional.",
      "Ask a health professional to check you over and confirm it is safe to move.",
      "Start gently with a simple movement such as walking, and slowly increase what you do.",
      "Take a break before pain or tiredness become too much.",
      "Fill in an activity diary for at least two days to see your pacing style.",
    ],
    tryThisWeek: [
      "Talk through your worries.",
      "Start gently with a walk.",
      "Keep a two-day activity diary.",
    ],
    ask: "Is it safe for me to move and exercise, and how should I build up?",
    interactive: {
      kind: "scenarios",
      title: "Moving with confidence",
      scenarios: [
        {
          id: "sore",
          situation: "Your back feels a bit sore after you start exercising.",
          options: [{ text: "Usually not harm: keep going gently", best: true }, { text: "Stop all exercise for good" }],
          why: "Exercise might make your back feel a bit sore at first, but this does not usually mean you are harming it.",
        },
        {
          id: "good-day",
          situation: "It is a good day and you want to clean the whole house.",
          options: [{ text: "Pace it, with breaks", best: true }, { text: "Do it all now while you can" }],
          why: "Boom and bust means doing too much on good days, which makes the pain worse, and then being forced to rest while it settles down.",
        },
        {
          id: "lift",
          situation: "You need to pick up a bag of shopping.",
          options: [{ text: "Lift it in a way that feels comfortable", best: true }, { text: "Never bend or lift again" }],
          why: "The Chartered Society of Physiotherapy says you should not fear bending or lifting.",
        },
        {
          id: "unsure",
          situation: "You are not sure it is safe for you to move.",
          options: [{ text: "Ask a health professional to check", best: true }, { text: "Stay in bed to be safe" }],
          why: "A health professional can check you over and tell you if you are the very rare case for whom it is not.",
        },
      ],
    },
    sources: [CSP_CAUSES, AUK_BACK, FLIPPIN_PAIN, LWWP_PACING, CSP_TEN_THINGS],
    quiz: {
      question: "Does more pain when you start moving mean more injury?",
      options: [{ text: "No", right: true }, { text: "Yes, always" }, { text: "Only in the mornings" }],
      why: "An increase in pain does not mean an increase in injury.",
    },
  },
  {
    id: "back-neck",
    kicker: "Neck pain",
    question: "Does the same advice apply to neck pain?",
    hook: "Mostly, yes. Keep it moving, ease it with heat or cold, and know the few signs that need a doctor.",
    short: "Most neck pain only lasts a few weeks, and serious damage is rare. As with back pain, keeping it moving, simple painkillers and heat or cold packs can help, and a neck collar is not recommended. See a GP if it does not go away after a few weeks, or if you have other symptoms like pins and needles or a cold arm.",
    sections: [
      {
        heading: "Common, and rarely serious",
        paragraphs: [
          "Most neck pain only lasts a few weeks. The Chartered Society of Physiotherapy says serious structural damage is rare, and the most likely cause is a strain of the small facet joints at the side of the neck. Around half of people with neck pain have it come back.",
          "The most common causes are the neck locking in an awkward position while sleeping, sitting at a desk for a long time, a pinched nerve, and injuries such as whiplash.",
        ],
      },
      {
        heading: "Keep it moving",
        paragraphs: [
          "Do not wear a neck collar unless a doctor tells you to, because it is better to keep your neck moving. Rest for as short a time as possible, no more than a day or two, then start gentle stretches and neck movements.",
          "If your neck problem lasts more than three months, research suggests exercise is the most effective treatment. In most cases the type of exercise does not seem to matter, as long as you stay active.",
        ],
      },
      {
        heading: "Easing it at home",
        paragraphs: [
          "Paracetamol or ibuprofen, or ibuprofen gel on your neck, can help. So can a low, firm pillow.",
          "Try a pack of frozen peas wrapped in a tea towel for 5 minutes, 3 times a day, or a hot water bottle wrapped in a tea towel for 20 minutes, 2 to 3 times a day.",
        ],
      },
      {
        heading: "Sitting and sleeping",
        paragraphs: [
          "Do not keep your neck in the same position for a long time, and take regular breaks from work that keeps you in one position. The Chartered Society of Physiotherapy says posture plays a much smaller role than once thought, while holding the body still for long periods seems to contribute.",
          "When sleeping, make sure your head is the same height as the rest of your body. Do not sleep on your front or twist your neck in bed.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if neck pain or stiffness does not go away after a few weeks, painkillers have not worked, or you are worried. Also see a GP if you have other symptoms, like pins and needles or a cold arm, which could be something more serious.",
          "Contact a doctor if you have weakness and loss of feeling in your arms or legs, severe pain that disturbs your sleep, or you feel unwell, have a fever or lose weight without explanation.",
        ],
      },
    ],
    helps: [
      "Keep your neck moving, and do not wear a collar unless a doctor tells you to.",
      "Use a low, firm pillow.",
      "Try a wrapped cold pack for 5 minutes, or a wrapped hot water bottle for 20 minutes.",
      "Take regular breaks from work that keeps you in one position.",
      "In many areas, refer yourself to NHS community MSK services, which help with neck pain.",
      "Do not drive or cycle if you cannot move your neck properly.",
    ],
    tryThisWeek: [
      "Swap to a low, firm pillow.",
      "Take breaks from sitting still.",
      "Try heat or cold on your neck.",
    ],
    ask: "Is my neck pain the ordinary kind, or does anything need checking?",
    interactive: {
      kind: "signs",
      title: "Neck signs to mention",
      intro: "Tick any you have with your neck pain.",
      signs: [
        "Pins and needles in your arm",
        "A cold arm",
        "Weakness or numbness in arms or legs",
        "Severe pain that disturbs your sleep",
        "A fever or feeling unwell",
        "Weight loss you cannot explain",
        "Pain that has lasted a few weeks",
        "Painkillers have not worked",
      ],
      after: "See a GP or contact a doctor about any you have ticked. In many areas you can also refer yourself to NHS community MSK services.",
      copyHeading: "Neck symptoms I have noticed",
    },
    sources: [NHS_NECK, CSP_NECK_CAUSES, AUK_NECK, CSP_NECK_TREATMENT, CSP_NECK_HELP, NHS_MSK],
    quiz: {
      question: "Should you wear a neck collar for ordinary neck pain?",
      options: [{ text: "No, it is better to keep your neck moving", right: true }, { text: "Yes, all day" }, { text: "Yes, but only at night" }],
      why: "Do not wear a neck collar unless a doctor tells you to, because it is better to keep your neck moving.",
    },
  },
];
