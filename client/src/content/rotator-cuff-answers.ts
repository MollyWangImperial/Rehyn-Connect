import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Rotator cuff problems page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's `sources`;
// nothing is added that those pages do not say. Most of it comes from the NHS, Arthritis UK (the charity formerly
// called Versus Arthritis), the Chartered Society of Physiotherapy, the British Elbow and Shoulder Society and the
// NICE Clinical Knowledge Summary on shoulder pain, with NHS hospital leaflets on rotator cuff tears and repair,
// NIHR Evidence summaries of the UK UKUFF and CSAW trials, and GOV.UK for driving, reasonable adjustments and Access
// to Work. Exercises are described only as the sources describe them. General information only; it never replaces
// what a person's own GP, physiotherapist or surgeon tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/conditions/shoulder-pain${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE Clinical Knowledge Summaries: ${label}`, url: `https://cks.nice.org.uk/topics/shoulder-pain/${path}` });

const NHS_SHOULDER = nhs("Shoulder pain", "symptoms/shoulder-pain/");
const NHS_PHYSIO = nhs("Physiotherapy", "tests-and-treatments/physiotherapy/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_ULTRASOUND = nhs("Ultrasound scan", "tests-and-treatments/ultrasound-scan/");
const NHS_MRI = nhs("MRI scan", "tests-and-treatments/mri-scan/");
const NHS_PAIN = nhs("10 ways to reduce pain", "live-well/pain/10-ways-to-ease-pain/");

const AU_SHOULDER = au("Shoulder pain", "understanding-arthritis/conditions/shoulder-pain/");
const AU_STEROID = au("Steroid injections", "understanding-arthritis/arthritis-treatments/drugs/steroid-injections/");

const CSP_CAUSES = csp("Causes of shoulder pain", "/causes-shoulder-pain");
const CSP_TREAT = csp("Treatment for shoulder pain", "/treatment-shoulder-pain");
const CSP_LIVING = csp("Living with shoulder pain", "/living-shoulder-pain");
const CSP_HELP = csp("Getting help for shoulder pain", "/getting-help-shoulder-pain");
const CSP_VIDEO = csp("Video exercises for shoulder pain", "/video-exercises-shoulder-pain");

const CKS_CAUSES = cks("Shoulder pain, causes", "background-information/causes/");
const CKS_DIAG = cks("Shoulder pain, diagnosis", "diagnosis/diagnosis/");
const CKS_RC = cks("Shoulder pain, scenario: rotator cuff disorders", "management/rotator-cuff-disorders/");
const CKS_PROG = cks("Shoulder pain, prognosis", "background-information/prognosis/");

const BESS_SAP: LearnSource = { label: "British Elbow and Shoulder Society: Subacromial pain", url: "https://bess.ac.uk/subacromial-pain/" };
const BESS_EX: LearnSource = { label: "British Elbow and Shoulder Society: Exercises for shoulder pain", url: "https://bess.ac.uk/exercises-for-shoulder-pain/" };
const NIHR_UKUFF: LearnSource = { label: "NIHR Evidence: Little to choose between open and keyhole surgery for repairing rotator cuff tears (UKUFF)", url: "https://evidence.nihr.ac.uk/alert/little-to-choose-between-open-and-keyhole-surgery-as-options-for-repairing-shoulder-rotator-cuff-tears/" };
const NIHR_CSAW: LearnSource = { label: "NIHR Evidence: A surgical procedure for shoulder pain is less effective than previously thought (CSAW)", url: "https://evidence.nihr.ac.uk/alert/a-surgical-procedure-for-shoulder-pain-is-less-effective-than-previously-thought/" };
const RBH_RCR: LearnSource = { label: "Royal Berkshire NHS Foundation Trust: Rotator cuff repair", url: "https://www.royalberkshire.nhs.uk/media/5xubju0d/rotator-cuff-repair_sep25.pdf" };
const UHCW_TEAR: LearnSource = { label: "University Hospitals Coventry and Warwickshire NHS Trust: Rotator cuff tear", url: "https://www.uhcw.nhs.uk/download/clientfiles/files/Patient%20Information%20Leaflets/Trauma%20and%20Neuro%20services/Trauma%20and%20Orthopaedics/Rotator%20cuff%20tear.pdf" };
const RJAH_RCR: LearnSource = { label: "Robert Jones and Agnes Hunt Orthopaedic Hospital NHS Foundation Trust: Rotator cuff repair", url: "https://www.rjah.nhs.uk/media/3rajuclz/rotator-cuff-repair-leaflet-print-friendly-2023.pdf" };
const JPAGET_RCR: LearnSource = { label: "James Paget University Hospitals NHS Foundation Trust: Rotator cuff repair", url: "https://www.jpaget.nhs.uk/media/hr1gpvi5/rotator-cuff-repair.pdf" };
const LOTHIAN_RCR: LearnSource = { label: "NHS Lothian: Rotator cuff repair", url: "https://policyonline.nhslothian.scot/wp-content/uploads/2025/06/Rotator-Cuff-Repair.pdf" };
const GOV_DVLA: LearnSource = { label: "GOV.UK: Medical conditions, disabilities and driving", url: "https://www.gov.uk/driving-medical-conditions" };
const GOV_ADJ: LearnSource = { label: "GOV.UK: Reasonable adjustments for workers with disabilities or health conditions", url: "https://www.gov.uk/reasonable-adjustments-for-disabled-workers" };
const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const rotatorCuffAnswers: LearnArticle[] = [
  {
    id: "rc-what-it-is",
    kicker: "Understanding",
    question: "What is the rotator cuff?",
    hook: "Four muscles and their tendons hold a small socket together. When they are sore or torn, lifting the arm hurts.",
    short: "The rotator cuff is a group of muscles and tendons that keep the upper arm bone held in the shoulder blade socket. They keep the joint in position and control its movements. Problems with them are the most common cause of shoulder pain seen by GPs.",
    sections: [
      {
        heading: "A small socket, held by muscle",
        paragraphs: [
          "The main shoulder joint is a ball-and-socket joint. The top of the upper arm bone is shaped like a ball, and it fits into the shoulder blade, which acts as the socket.",
          "The socket is very small compared with other ball-and-socket joints, such as the hip. It is held together and controlled by a covering of muscles, secured to the bones by strong cords called tendons.",
        ],
      },
      {
        heading: "The rotator cuff",
        paragraphs: [
          "The rotator cuff is a group of muscles and tendons that keep the upper arm bone held in the shoulder blade socket. NICE guidance for GPs describes them as surrounding and stabilising the shoulder joint.",
          "The muscles attach from the shoulder blade onto the top of the arm bone. They help keep the joint in the correct position and control shoulder movements.",
        ],
      },
      {
        heading: "Four muscles and their tendons",
        paragraphs: [
          "The rotator cuff is made of four muscles: supraspinatus, infraspinatus, subscapularis and teres minor. Each forms a tendon, the tough white tissue that attaches muscle to bone.",
          "With increasing age the tendons gradually get thinner and more vulnerable. In most people the supraspinatus tendon is the most vulnerable.",
        ],
      },
      {
        heading: "What can go wrong",
        paragraphs: [
          "The muscles can be torn through general wear and tear or after an accident. The damage usually happens close to where the muscle joins the bone. If one or more is torn, movement is no longer smoothly controlled and the shoulder becomes weak and painful.",
          "Rotator cuff disorders include rotator cuff tendinopathy and partial tears. They cause pain felt in the top and outer side of the shoulder.",
        ],
      },
      {
        heading: "Very common",
        paragraphs: [
          "Shoulder pain is very common, and in middle age the tendons of the rotator cuff are a common source of it. Pain from rotator cuff disorders is the most common cause of shoulder pain seen by GPs.",
          "An estimated 14 in every 100 people in the UK have shoulder pain each year, and around 70 in every 100 of them are likely to have rotator cuff problems.",
        ],
      },
    ],
    helps: [
      "See a GP if shoulder pain is getting worse or does not improve after 2 weeks.",
      "Stay active and gently move your shoulder.",
      "Before an appointment, write a few notes about when and how the problem started and what makes it worse.",
      "Do not self-diagnose. See a GP if you are worried.",
    ],
    tryThisWeek: [
      "Note when and how it started.",
      "Keep gently moving your shoulder.",
      "See a GP if it is no better in 2 weeks.",
    ],
    ask: "Which part of my rotator cuff is causing my pain?",
    interactive: {
      kind: "flip-cards",
      title: "Parts of the shoulder",
      intro: "Turn each card to see where it is and what it does.",
      cards: [
        { id: "joint", front: "Ball-and-socket joint", when: "The main shoulder joint", back: "The ball at the top of the upper arm bone fits into a small socket in the shoulder blade." },
        { id: "cuff", front: "Rotator cuff", when: "Around the joint", back: "A group of muscles and tendons that keep the upper arm bone held in the socket." },
        { id: "tendons", front: "Tendons", when: "Where muscle meets bone", back: "Strong cords that secure the muscles to the bones. Damage usually happens close to where muscle joins bone." },
        { id: "bursa", front: "Subacromial bursa", when: "One in each shoulder", back: "A fluid-filled cushion that helps the muscles and tendons slide smoothly over the shoulder bones." },
        { id: "acromion", front: "Acromion", when: "The top of the shoulder blade", back: "Where the shoulder blade meets the collar bone, forming the acromioclavicular joint." },
      ],
    },
    sources: [AU_SHOULDER, RBH_RCR, UHCW_TEAR, CKS_CAUSES, NIHR_UKUFF, CSP_CAUSES, NHS_SHOULDER],
    quiz: {
      question: "What does the rotator cuff do?",
      options: [{ text: "Keeps the upper arm bone held in the socket", right: true }, { text: "Makes the fluid inside the joint" }, { text: "Joins the collar bone to the breastbone" }],
      why: "The rotator cuff is a group of muscles and tendons that keep the upper arm bone held in the shoulder blade socket.",
    },
  },
  {
    id: "rc-types",
    kicker: "Types",
    question: "What are tendinopathy, impingement and rotator cuff tears?",
    hook: "Several names describe much the same sore tendons. A tear after an injury is different, and needs to be seen quickly.",
    short: "Subacromial shoulder pain, rotator cuff tendinopathy, impingement and bursitis are names for the same set of symptoms. It is very common and usually responds to exercise. Tears can come from gradual wear or an injury; a tear after an injury needs urgent referral.",
    sections: [
      {
        heading: "One problem, several names",
        paragraphs: [
          "Rotator cuff pain is known by various names, such as subacromial shoulder pain, rotator cuff tendinopathy and bursitis. The Chartered Society of Physiotherapy says they all describe the same symptoms.",
          "The British Elbow and Shoulder Society says the most common type of shoulder pain is subacromial shoulder pain, also known as rotator cuff tendinopathy or shoulder impingement. It is very common, but usually responds to exercise.",
        ],
      },
      {
        heading: "Tendinopathy and impingement",
        paragraphs: [
          "Pain from a problem with the rotator cuff is often called shoulder impingement. It causes swelling, pain or damage to the tendons, which can make it painful and difficult to move your arm properly.",
          "Arthritis UK says it is nothing to do with tendons being trapped by bones, as was previously thought. It is caused by overuse or age-related problems with the tendons themselves, but the name is still used. It can also be called painful arc syndrome.",
        ],
      },
      {
        heading: "Subacromial bursitis",
        paragraphs: [
          "A bursa is a pocket of fluid that cushions a joint. Subacromial bursitis is when this bursa in the shoulder becomes inflamed, causing pain and swelling and making it difficult to raise your arm above your head.",
          "It is often caused by overuse, or by an injury such as a fall, and can be linked to shoulder impingement. NICE guidance for GPs groups it with rotator cuff tendinopathy, because it is diagnosed in essentially the same way.",
        ],
      },
      {
        heading: "Tears from wear and tear",
        paragraphs: [
          "Rotator cuff tears can happen through an injury, such as a dislocated shoulder, or through gradual wear. They can cause symptoms, or none at all.",
          "A torn rotator cuff is more common in people over 40, and many people do not remember hurting themselves. One NHS hospital leaflet says a tear will not heal, and over time it will slowly get larger in most patients.",
        ],
      },
      {
        heading: "Tears after an injury",
        paragraphs: [
          "A tear caused by an injury usually happens in active young to middle-aged adults, after a dislocation or when the shoulder is forcibly stretched. There is usually severe pain and significant weakness.",
          "NICE guidance for GPs says this needs urgent referral to an orthopaedic specialist, ideally at the next available shoulder clinic, because delay makes surgical repair less successful.",
        ],
      },
    ],
    helps: [
      "If you have pain and difficulty raising your arm after an injury, seek medical help more urgently.",
      "Rest and physiotherapy are the main treatments for shoulder impingement.",
      "Try to remain as active as possible, take painkillers if needed and do strengthening exercises.",
      "If you have had a recent injury, contact a health professional to discuss your symptoms.",
    ],
    tryThisWeek: [
      "Get help quickly after an injury.",
      "Stay as active as you can.",
      "Mention any recent injury.",
    ],
    ask: "Is my problem tendinopathy, bursitis or a tear, and does that change my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "Names you may hear",
      intro: "Turn each card to see what each name means.",
      cards: [
        { id: "tendinopathy", front: "Rotator cuff tendinopathy", when: "The most common type", back: "Pain from overuse or age-related problems in the tendons. It usually responds to exercise." },
        { id: "impingement", front: "Shoulder impingement", when: "Another name for it", back: "Not tendons trapped by bone, as once thought. It is also called painful arc syndrome." },
        { id: "bursitis", front: "Subacromial bursitis", when: "Linked to impingement", back: "The cushioning bursa becomes inflamed, making it hard to raise the arm above the head." },
        { id: "wear-tear", front: "Tear from gradual wear", when: "More common over 40", back: "Many people do not remember hurting themselves. A tear can cause symptoms, or none." },
        { id: "injury-tear", front: "Tear after an injury", when: "After a dislocation or stretch", back: "Severe pain and weakness. It needs urgent referral to a shoulder specialist." },
      ],
    },
    sources: [AU_SHOULDER, CKS_CAUSES, CSP_CAUSES, BESS_SAP, UHCW_TEAR, CKS_RC, CSP_TREAT],
    quiz: {
      question: "What does Arthritis UK say causes shoulder impingement?",
      options: [{ text: "Overuse or age-related tendon problems", right: true }, { text: "Tendons trapped by bones" }, { text: "An infection in the joint" }],
      why: "It is caused by overuse or age-related problems with the tendons themselves, but the name is still used.",
    },
  },
  {
    id: "rc-symptoms",
    kicker: "Symptoms",
    question: "What does a rotator cuff problem feel like?",
    hook: "Pain on top of the shoulder when you lift, reach or lie on it at night, and sometimes an arm that feels weak.",
    short: "Rotator cuff pain is felt in the top and outer side of the shoulder and upper arm. It is worse when raising the arm, reaching up or behind the back, and there may be pain at night. A tear can make the arm weak and hard to lift.",
    sections: [
      {
        heading: "Where it hurts",
        paragraphs: [
          "Rotator cuff pain is felt in the top and outer side of the shoulder. The British Elbow and Shoulder Society says it causes pain in the shoulder and upper arm, which can spread further down the arm and up towards the neck and shoulder blade.",
          "Pain can come on slowly over time. It can also come on quite quickly if the shoulder has been used for an activity much more demanding than it is used to.",
        ],
      },
      {
        heading: "Lifting and reaching",
        paragraphs: [
          "The pain is made worse by raising the arm, for example when lifting a full kettle, or by overhead activities. It can feel worse when the arm is moved away from the body, such as reaching up or placing the hand behind the back.",
          "Arthritis UK says you may find it painful and difficult to lift your arm away from your body, particularly above your head. Your arm may feel weak, or you may have a dull, lingering pain in your upper arm.",
          "Doctors sometimes find a painful arc, where raising the arm out to the side hurts between about 70 and 120 degrees.",
        ],
      },
      {
        heading: "At night",
        paragraphs: [
          "There may be pain at night. One NHS hospital leaflet on rotator cuff tears says the pain is often worse at night and might make it difficult to sleep.",
        ],
      },
      {
        heading: "Signs of a tear",
        paragraphs: [
          "With a torn rotator cuff, it can be painful and difficult to raise your arm properly, especially above shoulder height. Some people have pain for a few weeks before they notice any difficulty moving their shoulder, though a tear is not always painful.",
          "Sometimes the neck and shoulder muscles over-compensate, which can make you hunch your shoulders and lead to neck pain. The symptoms are similar to impingement, and tears are often only found after an ultrasound or MRI scan.",
        ],
      },
      {
        heading: "When to get help urgently",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have sudden or very bad shoulder pain, you cannot move your arm, or your arm or shoulder has changed shape or is badly swollen.",
          "Do the same if you have pins and needles that do not go away, no feeling in your arm or shoulder, an arm or shoulder that is hot or cold to touch, pain that started after an injury or fall, severe pain in both shoulders, or you feel feverish or unwell.",
          "The Chartered Society of Physiotherapy says to attend your local emergency department if you have had a significant injury or are in very severe pain.",
        ],
      },
    ],
    helps: [
      "See a GP if shoulder pain is getting worse or does not improve after 2 weeks.",
      "See a GP if it is very difficult to move your arm or shoulder.",
      "Seek medical help more urgently for a lump or swelling, or red skin and pain over the shoulder with a fever.",
      "Seek medical help more urgently for pain and difficulty raising your arm after an injury.",
      "Write a few notes about when and how the problem started and what makes it feel worse.",
    ],
    tryThisWeek: [
      "Note what makes the pain worse.",
      "See a GP if no better in 2 weeks.",
      "Get urgent help after an injury.",
    ],
    ask: "Does my pattern of pain suggest tendinopathy or a tear?",
    interactive: {
      kind: "signs",
      title: "Signs worth mentioning",
      intro: "Tick any you have noticed. They can help your GP or physiotherapist.",
      signs: [
        "Pain on the top and outer side of my shoulder",
        "Pain when lifting my arm, like a full kettle",
        "Pain reaching up or behind my back",
        "Pain at night that makes it hard to sleep",
        "My arm feels weak",
        "A dull, lingering ache in my upper arm",
        "It started after a fall or injury",
      ],
      after: "Ask for an urgent GP appointment or get help from NHS 111 for sudden or very bad pain, or if you cannot move your arm.",
      copyHeading: "Shoulder symptoms I have noticed",
    },
    sources: [CKS_CAUSES, BESS_SAP, AU_SHOULDER, UHCW_TEAR, NHS_SHOULDER, CSP_CAUSES, CSP_HELP, CKS_DIAG],
    quiz: {
      question: "Which everyday task does NICE guidance give as an example of what makes the pain worse?",
      options: [{ text: "Lifting a full kettle", right: true }, { text: "Walking upstairs" }, { text: "Turning your head" }],
      why: "The pain is made worse by raising the arm, for example when lifting a full kettle, or by overhead activities.",
    },
  },
  {
    id: "rc-diagnosis",
    kicker: "Diagnosis",
    question: "How is a rotator cuff problem diagnosed?",
    hook: "Mostly from how your shoulder moves and how it started. Scans have a place, but they do not tell the whole story.",
    short: "Rotator cuff problems are diagnosed from your history and an examination of how the shoulder moves. X-rays and blood tests are not usually needed at first. Ultrasound and MRI scans can show tears, and are usually arranged by specialists.",
    sections: [
      {
        heading: "Your story and an examination",
        paragraphs: [
          "Rotator cuff problems are diagnosed from your history and an examination. Your doctor or physiotherapist will need to see which movements are the most painful, and will usually ask how the problem started and how it affects your daily activities.",
          "When you move the arm yourself, it is painful and may be restricted. When someone else moves it for you, it tends to move fully but still hurts.",
        ],
      },
      {
        heading: "What the examination includes",
        paragraphs: [
          "Both shoulders are compared. The examiner looks for muscle wasting, swelling or bruising, feels for tenderness, and checks how the shoulder moves on its own, when moved for you, and against resistance.",
          "No single test in the shoulder examination can be reliably recommended to make a diagnosis. The neck is also examined, because a problem in the neck can cause pain felt in the shoulder.",
        ],
      },
      {
        heading: "X-rays",
        paragraphs: [
          "X-rays and blood tests are not usually needed when a GP first assesses shoulder pain. NICE guidance for GPs suggests considering an X-ray after an injury, if symptoms last more than four weeks or are not improving with treatment, or if movement is badly restricted or pain is severe.",
          "X-rays show bones and minor changes in the joints, but small changes are common and may not be the cause of your trouble. They will not show injuries to soft tissue like muscles.",
        ],
      },
      {
        heading: "Ultrasound and MRI scans",
        paragraphs: [
          "An ultrasound scan uses high-frequency sound waves to show swelling and problems with the tendons. An MRI scan uses radio waves to build a picture of the bones and soft tissues. Tears are often only found after one of these scans.",
          "These scans are not usually requested by GPs. A tear found on ultrasound does not always match a person's symptoms or mean surgery will definitely be needed, so specialists consider it alongside your symptoms.",
          "One NHS hospital leaflet says ultrasound or MRI scans are needed to confirm a tear, and they also help to plan the treatment.",
        ],
      },
      {
        heading: "Getting seen",
        paragraphs: [
          "See a GP if shoulder pain is getting worse or does not improve after 2 weeks. In many areas you can refer yourself to NHS community musculoskeletal services for help such as physiotherapy.",
          "The Chartered Society of Physiotherapy says a physiotherapist can often make a diagnosis without the need for any X-rays or scans.",
        ],
      },
    ],
    helps: [
      "Before your appointment, write a few notes about when and how the problem started and what makes it worse.",
      "Check whether you can refer yourself to an NHS community musculoskeletal service.",
      "Be ready to talk about any injury, other joint pain, your work and sports, and your medicines.",
      "Before an MRI scan, tell the hospital about any metal in your body, such as a pacemaker or surgical clips.",
      "For an ultrasound scan, you may be asked to remove jewellery from the area being scanned.",
    ],
    tryThisWeek: [
      "Write notes on how it started.",
      "Check if you can refer yourself.",
      "List your medicines and sports.",
    ],
    ask: "Do I need an X-ray or scan, or can you diagnose this from the examination?",
    interactive: {
      kind: "flip-cards",
      title: "Checks you may hear about",
      intro: "Turn each card to see what it shows and when it is used.",
      cards: [
        { id: "exam", front: "Examination", when: "The main way it is diagnosed", back: "Checks which movements hurt most, and how the arm moves on its own, when moved for you and against resistance." },
        { id: "xray", front: "X-ray", when: "After an injury, or if not improving", back: "Shows bones and minor joint changes, but not soft tissue. Small changes are common and may not be the cause." },
        { id: "ultrasound", front: "Ultrasound scan", when: "Usually arranged by specialists", back: "Uses sound waves to show swelling and tendon problems. It can take around 10 to 45 minutes." },
        { id: "mri", front: "MRI scan", when: "If a more complex problem is suspected", back: "Uses radio waves to picture bones, muscles and tendons. It usually takes 15 minutes to 1 hour." },
        { id: "blood", front: "Blood tests", when: "Not usually needed", back: "Sometimes used to rule out other conditions, including some types of arthritis." },
      ],
    },
    sources: [CKS_CAUSES, CKS_DIAG, AU_SHOULDER, UHCW_TEAR, NHS_SHOULDER, CSP_HELP, NHS_PHYSIO, NHS_ULTRASOUND, NHS_MRI],
    quiz: {
      question: "With a rotator cuff problem, what usually happens when someone else moves your arm for you?",
      options: [{ text: "It moves fully but still hurts", right: true }, { text: "It cannot move at all" }, { text: "It moves fully with no pain" }],
      why: "When someone else moves it for you, it tends to move fully but still hurts.",
    },
  },
  {
    id: "rc-self-care",
    kicker: "Self-care",
    question: "Do rest, ice and painkillers help a rotator cuff problem?",
    hook: "A short rest, then gentle use. Cold or warmth, regular paracetamol, and a few limits worth knowing.",
    short: "Rest helps in the early, painful phase, then activity should gradually increase. Wrapped ice or heat for up to 20 minutes at a time can ease pain. Paracetamol is usually tried first, taken regularly; an anti-inflammatory such as ibuprofen is an option if it does not work.",
    sections: [
      {
        heading: "Rest at first, then keep moving",
        paragraphs: [
          "NICE guidance for GPs advises rest in the early, acute phase. After this, activity should gradually be increased, and usual activities should restart as soon as possible, within the limits of pain.",
          "Stay active and gently move your shoulder. Do not completely stop using it, as this can stop it getting better, but do not do things that seem to make it worse.",
        ],
      },
      {
        heading: "Change what makes it worse",
        paragraphs: [
          "Change activities that make the symptoms worse, such as reaching overhead. You usually need to do these things for 2 weeks before shoulder pain starts to ease.",
          "The Chartered Society of Physiotherapy says to adjust how you do things, which may mean doing jobs in short bursts with regular breaks rather than all in one go.",
        ],
      },
      {
        heading: "Cold and heat",
        paragraphs: [
          "Try a pack of frozen peas wrapped in a tea towel for up to 20 minutes, 3 times a day. Or try a hot water bottle wrapped in a tea towel for up to 20 minutes, 2 to 3 times a day.",
          "Arthritis UK says an ice pack may help after a minor injury, or if the shoulder is swollen and warmer than the other side. Heat packs can help most other types of shoulder pain, particularly if your muscles feel sore and tense.",
        ],
      },
      {
        heading: "Paracetamol",
        paragraphs: [
          "NICE guidance for GPs suggests paracetamol first, and says regular doses work better than taking it only when needed.",
          "For adults, one dose of 500mg tablets is 1 or 2 tablets. Leave at least 4 hours between doses, and do not take more than 8 tablets in 24 hours. The NHS paracetamol page says not to take it for more than 3 days unless a doctor tells you to.",
        ],
      },
      {
        heading: "Anti-inflammatories",
        paragraphs: [
          "If paracetamol does not work, a GP may consider an anti-inflammatory such as ibuprofen, or codeine. If an anti-inflammatory gives no early benefit, it should be stopped.",
          "Ibuprofen is not suitable for everyone, for example if you have a stomach ulcer or have had one before, or you have asthma. Do not take it at the same time as other anti-inflammatories, such as naproxen or aspirin.",
          "Arthritis UK says not to use painkillers for more than two weeks without seeking further medical advice. A pharmacist can suggest the best painkiller, which might be tablets, or a cream or gel you rub on your skin.",
        ],
      },
    ],
    helps: [
      "Stay active and gently move your shoulder.",
      "Change activities that make it worse, such as reaching overhead.",
      "Try a wrapped ice pack or hot water bottle for up to 20 minutes at a time.",
      "Take paracetamol regularly, within the recommended dose.",
      "Ask a pharmacist which painkiller would suit you.",
      "Sit with a cushion behind your lower back and rest your arm on a cushion in your lap.",
    ],
    tryThisWeek: [
      "Keep gently moving your shoulder.",
      "Try a wrapped ice or heat pack.",
      "Ask a pharmacist about painkillers.",
    ],
    ask: "Which painkillers are safe for me to take regularly, and for how long?",
    interactive: {
      kind: "flip-cards",
      title: "Easing the pain at home",
      intro: "Turn each card to see when each one helps and what to know.",
      cards: [
        { id: "rest", front: "Rest", when: "In the early, acute phase", back: "Then gradually do more, restarting usual activities within the limits of pain." },
        { id: "ice", front: "Ice pack", when: "Swollen, or after a minor injury", back: "Frozen peas wrapped in a tea towel, for up to 20 minutes, 3 times a day." },
        { id: "heat", front: "Heat", when: "Sore, tense muscles", back: "A hot water bottle wrapped in a tea towel, for up to 20 minutes, 2 to 3 times a day." },
        { id: "paracetamol", front: "Paracetamol", when: "The first painkiller to try", back: "Regular doses work better than only when needed. Leave at least 4 hours between doses." },
        { id: "ibuprofen", front: "Ibuprofen", when: "If paracetamol does not work", back: "Not suitable for everyone. Stop it if it gives no early benefit." },
      ],
    },
    sources: [CKS_RC, NHS_SHOULDER, AU_SHOULDER, NHS_PARACETAMOL, NHS_IBUPROFEN, CSP_LIVING],
    quiz: {
      question: "How long does the NHS suggest using a wrapped ice pack or hot water bottle at a time?",
      options: [{ text: "Up to 20 minutes", right: true }, { text: "About an hour" }, { text: "Overnight" }],
      why: "Try a pack of frozen peas wrapped in a tea towel for up to 20 minutes, 3 times a day.",
    },
  },
  {
    id: "rc-exercises",
    kicker: "Exercise",
    question: "Which exercises help a rotator cuff problem?",
    hook: "Three simple moves from UK shoulder physiotherapists, a clear rule about pain, and six days a week.",
    short: "Rotator cuff pain usually responds to exercise, and the shoulder should start to feel better within 6 to 12 weeks. Check with your GP or physiotherapist first. A small rise in pain is okay if it settles within 30 minutes and is no worse the next day.",
    sections: [
      {
        heading: "Exercise is the main treatment",
        paragraphs: [
          "Rotator cuff pain is very common, but usually responds to exercise. The British Elbow and Shoulder Society says your shoulder should start to feel better within 6 to 12 weeks if you do its simple exercises, recommended by leading UK shoulder physiotherapists.",
          "Rest and physiotherapy are the main treatments for impingement. NICE guidance for GPs says a course of physiotherapy usually lasts 6 weeks, and can continue for another 6 weeks if symptoms are improving.",
        ],
      },
      {
        heading: "Check first",
        paragraphs: [
          "Check with your GP or physiotherapist first. The Chartered Society of Physiotherapy recommends getting advice from a physiotherapist or healthcare professional before starting any new exercise regime, and seeking urgent medical advice if any of its exercises worsen your pain.",
          "Do not make up your own strenuous exercises or use heavy gym equipment. NICE guidance for GPs says exercise should be low intensity and frequent, within your pain threshold.",
        ],
      },
      {
        heading: "Three exercises",
        paragraphs: [
          "Wall slides: stand facing a wall with the edges of your hands against it, thumbs facing you. Step forward as you gently push into the wall and slide your hands up as far as you can, then relax.",
          "Push-ups against a wall: hands a little wider than your shoulders and turned out slightly, elbows below your shoulders. Lower your body towards the wall, keeping tall. Both of these are repeated 8 times, three times over, with a minute's rest in between.",
          "Shoulder rotation: sit next to a table with your elbow supported just below shoulder height on a rolled-up towel. Make a gentle fist, keep your elbow bent, rotate your forearm to point upwards, then return and relax.",
        ],
      },
      {
        heading: "How much pain is okay",
        paragraphs: [
          "A small increase in pain while exercising is okay, as long as it goes away within 30 minutes and is not worse the next day. If it is, do fewer repetitions next time, then gradually build up again.",
          "You may only be able to move your arm a small amount at the start, but this will improve. When an exercise becomes easy, it can be progressed, for example by adding a light weight such as a small 500ml water bottle.",
        ],
      },
      {
        heading: "Making it a habit",
        paragraphs: [
          "Try to do the exercises on six days each week with one day off, and on at least four days if you want to get better. You can start with two exercises and add the third when you feel confident.",
          "It may take 6 weeks before you start to see improvement. If your shoulder does not improve over 6 to 12 weeks, or gets worse despite the exercises, see your doctor again.",
        ],
      },
    ],
    helps: [
      "Check with your GP or physiotherapist before starting new exercises.",
      "Build the exercises into your daily routine so you do them regularly.",
      "Keep an exercise diary of how many repetitions you have done.",
      "If one movement causes more pain, use it each week to test whether you are improving.",
      "Try to remain as active as possible and do strengthening exercises.",
    ],
    tryThisWeek: [
      "Ask your physio before starting.",
      "Fit the exercises into your day.",
      "Start an exercise diary.",
    ],
    ask: "Which exercises should I do, and how should I build them up?",
    interactive: {
      kind: "flip-cards",
      title: "The three exercises",
      intro: "Check with your GP or physiotherapist first. Turn each card to see how the British Elbow and Shoulder Society describes it.",
      cards: [
        { id: "slides", front: "Wall slides", when: "Standing, facing a wall", back: "Edges of the hands on the wall, thumbs facing you. Step forward, push gently and slide your hands up as far as you can." },
        { id: "pushups", front: "Wall push-ups", when: "Hands on the wall", back: "Hands a little wider than your shoulders, elbows below them. Lower your body towards the wall, keeping tall." },
        { id: "rotation", front: "Shoulder rotation", when: "Sitting by a table", back: "Elbow on a rolled towel just below shoulder height. Keep it bent and rotate your forearm to point upwards." },
        { id: "pain-rule", front: "The pain rule", when: "During and after exercise", back: "A small increase in pain is okay if it goes within 30 minutes and is not worse the next day." },
      ],
    },
    sources: [BESS_SAP, BESS_EX, NHS_SHOULDER, CSP_VIDEO, CKS_RC, AU_SHOULDER, CSP_TREAT],
    quiz: {
      question: "How many days a week does the British Elbow and Shoulder Society suggest doing the exercises?",
      options: [{ text: "Six, with one day off", right: true }, { text: "Every day, without a break" }, { text: "Once a week" }],
      why: "Try to do the exercises on six days each week with one day off, and on at least four days if you want to get better.",
    },
  },
  {
    id: "rc-injections",
    kicker: "Injections",
    question: "Will a steroid injection help my rotator cuff?",
    hook: "An injection can calm the pain enough to get on with physiotherapy. One is usually enough, and two is the limit.",
    short: "A steroid injection, usually with a local anaesthetic, reduces inflammation so the shoulder moves more comfortably and exercises are easier. It is considered alongside physiotherapy, not instead of it. Normally only one is given, and no more than two.",
    sections: [
      {
        heading: "What the injection does",
        paragraphs: [
          "A steroid injection reduces inflammation and allows you to move your shoulder more comfortably. It is usually given with a local anaesthetic, and your shoulder pain should improve quite quickly.",
          "The pain relief should also make your physiotherapy exercises easier. Some injections are given with the help of an ultrasound scan, to make sure they reach the right area.",
        ],
      },
      {
        heading: "Part of a wider plan",
        paragraphs: [
          "NICE guidance for GPs suggests considering an injection as a shared decision with you, alongside other treatments such as physiotherapy. UK guidelines say that, because evidence is limited, it is not known for certain whether it works.",
          "If an injection does not help as expected, the GP may review the diagnosis or consider referral.",
        ],
      },
      {
        heading: "How many",
        paragraphs: [
          "Normally only one injection should be given, because repeated injections risk damaging the tendon. No more than two are given.",
          "A second injection may be given after 6 weeks, but only to people who improved after the first and need the pain relief to do physiotherapy.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "Rest the injected joint as much as is practical for 24 hours. Arthritis UK says not to use your shoulder for anything too strenuous for the first two days.",
          "The pain may be worse for a short time after the injection, but this does not mean it has gone wrong. Seek advice if the pain lasts for more than a day or so.",
          "Numbness from a local anaesthetic can make it difficult to drive, so you may want to arrange transport home.",
        ],
      },
      {
        heading: "Risks and warning signs",
        paragraphs: [
          "Possible effects include a flare of pain after the injection, tendon rupture, and rarely infection. If you have diabetes, blood sugar can rise for 24 to 48 hours, so check it carefully.",
          "If there is severe pain after the injection, especially with a fever or shivering, seek urgent medical advice. Arthritis UK says that if the joint becomes more painful and hot, see your doctor immediately, especially if you feel unwell.",
        ],
      },
    ],
    helps: [
      "Rest the shoulder as much as is practical for 24 hours afterwards.",
      "Do not use your shoulder for anything too strenuous for the first two days.",
      "Arrange transport home after the injection.",
      "If you have diabetes, monitor your blood sugar levels afterwards.",
      "If you are given a steroid card, keep it with you.",
    ],
    tryThisWeek: [
      "Rest the shoulder for 24 hours after.",
      "Arrange a lift home.",
      "Check blood sugar if you have diabetes.",
    ],
    ask: "Would an injection help me do my physiotherapy, and what are the risks for me?",
    interactive: {
      kind: "scenarios",
      title: "Around an injection",
      scenarios: [
        {
          id: "lift",
          situation: "The day after your injection, you want to move heavy furniture.",
          options: [{ text: "Leave it for now", best: true }, { text: "Go ahead: the pain has eased" }],
          why: "Arthritis UK says not to use your shoulder for anything too strenuous for the first two days.",
        },
        {
          id: "sore",
          situation: "That evening, the shoulder is sorer than before the injection.",
          options: [{ text: "This can happen for a short time", best: true }, { text: "The injection has failed" }],
          why: "The pain may be worse for a short time after the injection, but this does not mean it has gone wrong. Seek advice if it lasts more than a day or so.",
        },
        {
          id: "fever",
          situation: "After the injection you have severe pain, a fever and shivering.",
          options: [{ text: "Seek urgent medical advice", best: true }, { text: "Wait a few days" }],
          why: "If there is severe pain after the injection, especially with a fever or shivering, seek urgent medical advice.",
        },
        {
          id: "third",
          situation: "Two injections have not helped, and you ask for a third.",
          options: [{ text: "A third is not given", best: true }, { text: "A third will work better" }],
          why: "Normally only one injection should be given, because repeated injections risk damaging the tendon. No more than two are given.",
        },
      ],
    },
    sources: [AU_SHOULDER, CKS_RC, AU_STEROID, NIHR_CSAW],
    quiz: {
      question: "How many steroid injections does NICE guidance for GPs say should normally be given?",
      options: [{ text: "Usually just one", right: true }, { text: "One every month" }, { text: "As many as needed" }],
      why: "Normally only one injection should be given, because repeated injections risk damaging the tendon.",
    },
  },
  {
    id: "rc-surgery",
    kicker: "Surgery",
    question: "When is surgery offered for a rotator cuff problem?",
    hook: "Most shoulders settle without it. A torn tendon can be repaired, but one common operation has been called into question.",
    short: "Most shoulder problems improve without surgery. A torn tendon can be repaired, usually by keyhole surgery, and early repair is often advised after an injury. A large UK trial found decompression surgery was only slightly better than no treatment.",
    sections: [
      {
        heading: "Most people do not need it",
        paragraphs: [
          "Most shoulder problems improve without surgery. NICE guidance for GPs suggests referral to a hospital specialist if at least 6 weeks of non-surgical treatment has not helped, or the diagnosis is uncertain.",
          "A tear caused by an injury is different. One NHS hospital leaflet says early surgical repair is normally recommended for people under seventy whose tendon tore in an injury, while tears from wear and tear are normally treated without surgery first.",
        ],
      },
      {
        heading: "Repairing a tear",
        paragraphs: [
          "A rotator cuff repair sews the torn tendon back onto the bone, using small anchors placed into the bone. It is usually done by keyhole surgery, and nearly all are day cases.",
          "Sometimes the tear is too big, or the tendon too fragile, for a full repair. The UKUFF trial, with 273 people at 19 UK hospitals, found little to choose between keyhole and open repair in benefits or costs.",
        ],
      },
      {
        heading: "Decompression surgery",
        paragraphs: [
          "Subacromial decompression trims bone and tissue at the top of the shoulder to give the rotator cuff tendons space to move. Arthritis UK says research shows it may have limited benefits, so it should only be considered if other treatments have not helped.",
          "In the CSAW trial of 313 people, decompression was only slightly more effective than no treatment. The researchers suggest it may be best reserved for people with a clear blockage, such as definite bony spurs.",
        ],
      },
      {
        heading: "What a repair can achieve",
        paragraphs: [
          "One hospital leaflet calls repair a good operation for pain relief, but less reliable at improving movement, and says it will not restore normal strength. It is not a quick fix: symptoms may take many months to improve.",
          "About 20 in every 100 people still have some symptoms afterwards, and about 5 in 100 develop a painful stiff shoulder that slowly improves. Tendons can tear again, but in UKUFF even people whose tendons tore again still had a better quality of life than before.",
        ],
      },
      {
        heading: "After the operation",
        paragraphs: [
          "Expect a sling for up to 6 weeks and to be largely one-handed at first. By 3 to 6 months most people notice an improvement, and things keep slowly improving for up to 18 months.",
          "If the wound edge becomes red, oozy or painful, one hospital leaflet says to contact the ward where you had your surgery. Wound infections are rare, and deep infection affects fewer than 1 in 100 people.",
        ],
      },
    ],
    helps: [
      "Your surgical team will discuss keyhole or open surgery and suggest the best option for you.",
      "Before the operation, buy paracetamol and anti-inflammatory tablets to have at home.",
      "Take your painkillers regularly so you can do your exercises.",
      "Do your exercises regularly at home for several months.",
      "Arrange help from family, friends or neighbours for the weeks you are one-handed.",
    ],
    tryThisWeek: [
      "Ask about keyhole or open surgery.",
      "Stock up on painkillers beforehand.",
      "Arrange help for the first weeks.",
    ],
    ask: "Has non-surgical treatment gone on long enough, and which operation, if any, would help me?",
    interactive: {
      kind: "flip-cards",
      title: "Operations you may hear about",
      intro: "Turn each card to see what each involves and what the research found.",
      cards: [
        { id: "repair", front: "Rotator cuff repair", when: "For a torn tendon", back: "Sews the tendon back onto bone with small anchors. Good for pain relief, less reliable for movement." },
        { id: "keyhole", front: "Keyhole or open repair", when: "Two ways to do it", back: "The UKUFF trial found little to choose between them in benefits or costs." },
        { id: "decompression", front: "Subacromial decompression", when: "Only if other treatments fail", back: "Trims bone and tissue above the tendons. In CSAW it was only slightly better than no treatment." },
        { id: "sling", front: "Sling", when: "Up to 6 weeks after a repair", back: "Protects the repair day and night. You will be largely one-handed." },
        { id: "recovery", front: "Recovery", when: "Many months", back: "Most notice an improvement by 3 to 6 months, and it keeps slowly improving for up to 18 months." },
      ],
    },
    sources: [AU_SHOULDER, CKS_RC, UHCW_TEAR, RBH_RCR, NIHR_UKUFF, NIHR_CSAW, RJAH_RCR, JPAGET_RCR],
    quiz: {
      question: "What did the CSAW trial find about decompression surgery?",
      options: [{ text: "Only slightly better than no treatment", right: true }, { text: "It cured most people" }, { text: "Better than a tendon repair" }],
      why: "In the CSAW trial of 313 people, decompression was only slightly more effective than no treatment.",
    },
  },
  {
    id: "rc-daily-tasks",
    kicker: "Everyday life",
    question: "How can I reach, dress and sleep with a sore rotator cuff?",
    hook: "An elbow kept close, pillows in the right places, and jobs done with plenty of breaks.",
    short: "Raising the arm above the shoulder can be very painful, so keep the elbow bent and at your side when you reach. Pillows can support the painful arm in bed. Spreading loads, taking breaks and an occupational therapist's advice can all help.",
    sections: [
      {
        heading: "Reaching up",
        paragraphs: [
          "Raising your arm above your shoulder or holding it away from your body can be very painful. It is best to avoid movements like this as much as possible until it becomes less painful.",
          "If you have to raise your arm, keep your elbow bent and at your side, with your palm facing the ceiling when reaching up. To lower your arm, bend your elbow and bring your hand closer to your body.",
        ],
      },
      {
        heading: "Sleeping",
        paragraphs: [
          "Pain is often worse at night and can make it hard to sleep. Arthritis UK suggests lying on your good side with a pillow under your neck, a folded pillow supporting your painful arm in front of you, and another behind your back to stop you rolling.",
          "If you prefer to sleep on your back, try one or two pillows under your painful arm.",
        ],
      },
      {
        heading: "Sitting",
        paragraphs: [
          "Sit with a cushion behind your lower back, and rest your arm on a cushion in your lap. Do not slouch, roll your shoulders or bring your neck forward.",
          "Change your position often, and try not to lean forwards and rest on your arms too much.",
        ],
      },
      {
        heading: "Jobs around the house",
        paragraphs: [
          "When vacuuming, keep upright with the vacuum close to your body and use short sweeping movements. Only iron essential items, with the ironing board at waist height.",
          "Spread the load: use a trolley or backpack, or divide shopping between two bags. For tasks that involve raising your arms, give yourself plenty of time, take lots of breaks and ask someone to help.",
        ],
      },
      {
        heading: "Dressing and washing",
        paragraphs: [
          "If dressing, washing or driving is difficult, an occupational therapist can show you how to change the way you do things and advise on equipment.",
          "After a repair, hospital leaflets suggest loose or front-opening clothes, putting the operated arm in first and taking it out last. Long-handled combs, brushes and sponges can help.",
        ],
      },
    ],
    helps: [
      "Keep your elbow bent and at your side when you reach up.",
      "Support your painful arm with pillows in bed.",
      "Give yourself plenty of time and breaks for tasks that involve raising your arms.",
      "Spread the load when you carry shopping.",
      "Change activities that make it worse, such as reaching overhead.",
      "Ask about seeing an occupational therapist.",
    ],
    tryThisWeek: [
      "Keep your elbow in when reaching.",
      "Set up your pillows for the night.",
      "Split heavy shopping between two bags.",
    ],
    ask: "Could I see an occupational therapist for help with daily tasks?",
    interactive: {
      kind: "scenarios",
      title: "Around the house",
      scenarios: [
        {
          id: "shelf",
          situation: "You need a tin from a high cupboard.",
          options: [{ text: "Elbow bent and in, palm up", best: true }, { text: "Stretch the arm out straight" }],
          why: "If you have to raise your arm, keep your elbow bent and at your side, with your palm facing the ceiling when reaching up.",
        },
        {
          id: "bed",
          situation: "You keep waking up lying on your sore shoulder.",
          options: [{ text: "Good side, with pillows placed", best: true }, { text: "Lie on the painful side" }],
          why: "Lie on your good side with a pillow under your neck, a folded pillow supporting your painful arm, and another behind your back to stop you rolling.",
        },
        {
          id: "shopping",
          situation: "You have a heavy shop to carry home.",
          options: [{ text: "Trolley, backpack or two bags", best: true }, { text: "One heavy bag on the sore side" }],
          why: "Spread the load: use a trolley or backpack, or divide shopping between two bags.",
        },
        {
          id: "ceiling",
          situation: "You plan to paint a ceiling in one go.",
          options: [{ text: "Take time, breaks and help", best: true }, { text: "Push on until it is done" }],
          why: "For tasks that involve raising your arms, give yourself plenty of time, take lots of breaks and ask someone to help.",
        },
      ],
    },
    sources: [AU_SHOULDER, CKS_RC, NHS_SHOULDER, JPAGET_RCR, RBH_RCR, UHCW_TEAR],
    quiz: {
      question: "When you reach up with a sore shoulder, which way should your palm face?",
      options: [{ text: "Towards the ceiling", right: true }, { text: "Towards the floor" }, { text: "Away from you" }],
      why: "Keep your elbow bent and at your side, with your palm facing the ceiling when reaching up.",
    },
  },
  {
    id: "rc-work",
    kicker: "Work and driving",
    question: "How do I manage work, lifting and driving with a rotator cuff problem?",
    hook: "Overhead and repetitive work can be part of the story. Small changes, an employer's help and clear rules after surgery.",
    short: "Rotator cuff problems can follow repetitive work at or above shoulder height, or heavy lifting. Desk changes, a headset and avoiding manual work that hurts can help, and employers must make reasonable adjustments. After a repair, return to work and driving takes weeks to months.",
    sections: [
      {
        heading: "Work and the shoulder",
        paragraphs: [
          "Rotator cuff problems can follow repetitive movements at or above shoulder height, or heavy lifting. They can happen in workers who do overhead tasks.",
          "NICE guidance for GPs refers to changing activities in jobs that involve repetitive arm movements, prolonged use of the arms, or hand-held vibrating tools.",
        ],
      },
      {
        heading: "At your desk or workbench",
        paragraphs: [
          "Get up and move around every so often, and gently move your shoulders and neck through their full range of movement. Keep the keyboard and monitor directly in front of you, and the mouse within easy reach.",
          "Do not hold the phone to your head with your shoulder: if you are on the phone a lot, use a headset. Avoid any manual work that hurts while you are doing it.",
        ],
      },
      {
        heading: "Help from your employer",
        paragraphs: [
          "Your line manager, human resources or occupational health department may be able to help. Employers must make reasonable adjustments for workers with health conditions, such as changing equipment or allowing a phased return to work.",
          "Access to Work can help you get or stay in work if you have a physical health condition, with a grant towards things like specialist equipment. It does not have to be paid back.",
        ],
      },
      {
        heading: "After a repair",
        paragraphs: [
          "One hospital leaflet says you may be back within 3 weeks if your job keeps your arms close to your body, and most people return within 2 months. A heavy lifting job, or one with sustained overhead arm movement, may need 3 to 6 months off.",
          "Avoid lifting any weight, such as a full kettle, for 8 to 12 weeks, and heavier lifting such as digging or manual work for 4 to 6 months.",
        ],
      },
      {
        heading: "Driving",
        paragraphs: [
          "It is illegal to drive while wearing a sling. After a repair you may start once the sling is off and you can safely control the vehicle, normally between 6 and 12 weeks.",
          "The DVLA needs to be told about notifiable conditions, which are anything that could affect your ability to drive safely. You could be fined up to £1,000 if you do not tell DVLA about a condition that might affect your ability to drive safely.",
        ],
      },
    ],
    helps: [
      "Gently move your shoulders and neck through their full range regularly at work.",
      "Use a headset if you are on the phone a lot.",
      "Talk to your manager, human resources or occupational health about adjustments.",
      "Check whether you can get an Access to Work grant.",
      "After surgery, discuss your return to work with the doctors or physiotherapist.",
    ],
    tryThisWeek: [
      "Get up and move every so often.",
      "Ask about workplace adjustments.",
      "Look into Access to Work.",
    ],
    ask: "When can I go back to my job, and what adjustments would help my shoulder?",
    interactive: {
      kind: "scenarios",
      title: "At work and on the road",
      scenarios: [
        {
          id: "phone",
          situation: "You spend hours on the phone at your desk.",
          options: [{ text: "Use a headset", best: true }, { text: "Hold it with your shoulder" }],
          why: "Do not hold the phone to your head with your shoulder: if you are on the phone a lot, use a headset.",
        },
        {
          id: "manual",
          situation: "Part of your job is lifting that hurts your shoulder.",
          options: [{ text: "Talk to your manager or HR", best: true }, { text: "Carry on through the pain" }],
          why: "Avoid any manual work that hurts while you are doing it. Your line manager, human resources or occupational health department may be able to help.",
        },
        {
          id: "sling",
          situation: "Your arm is still in a sling after a repair, and you need to get to town.",
          options: [{ text: "Arrange a lift", best: true }, { text: "Drive carefully" }],
          why: "It is illegal to drive while wearing a sling.",
        },
        {
          id: "dvla",
          situation: "You are unsure whether your shoulder affects your driving.",
          options: [{ text: "Check the DVLA guidance", best: true }, { text: "Ignore it" }],
          why: "Notifiable conditions are anything that could affect your ability to drive safely.",
        },
      ],
    },
    sources: [CKS_CAUSES, AU_SHOULDER, GOV_ADJ, GOV_ATW, RBH_RCR, JPAGET_RCR, GOV_DVLA, CKS_RC],
    quiz: {
      question: "What does one hospital leaflet say about driving while wearing a sling?",
      options: [{ text: "It is illegal", right: true }, { text: "It is fine for short trips" }, { text: "It is fine in an automatic car" }],
      why: "It is illegal to drive while wearing a sling.",
    },
  },
  {
    id: "rc-sport",
    kicker: "Sport",
    question: "When can I get back to sport with a rotator cuff problem?",
    hook: "Overhead sport can bring it on. Keep active within the pain, build up slowly, and expect months after a repair.",
    short: "Rotator cuff problems can occur in athletes and people who do overhead activities. Usual activities should restart as soon as possible, within the limits of pain, avoiding heavy gym work. After a repair, competitive sport waits at least 3 months, and contact sport longer.",
    sections: [
      {
        heading: "Sport and the rotator cuff",
        paragraphs: [
          "Rotator cuff problems can occur in athletes and in people who do overhead activities, and there may be a history of repetitive movements at or above shoulder height.",
          "Pain can come on quite quickly if the shoulder has been used for an activity that is much more demanding than it is used to doing each day.",
        ],
      },
      {
        heading: "Staying active while it settles",
        paragraphs: [
          "Usual activities, within the limits of pain, should restart as soon as possible, while changing those that make it worse, such as reaching overhead.",
          "Do not make up your own strenuous exercises or use heavy gym equipment. The NHS says simple activities like walking, swimming and dancing can ease some pain, and that becoming more active gradually is unlikely to cause harm.",
        ],
      },
      {
        heading: "Building strength back up",
        paragraphs: [
          "In the British Elbow and Shoulder Society's programme, wall slides can be progressed by doing them without the wall and adding a light weight, and wall push-ups by moving your feet further from the wall.",
          "A small increase in pain while exercising is okay, as long as it goes away within 30 minutes and is not worse the next day.",
        ],
      },
      {
        heading: "After a repair",
        paragraphs: [
          "One hospital leaflet says you can return to sport gradually, but not competitively for 3 months. Sustained or powerful overhead movements, such as racket sports, may take several months to become comfortable.",
          "Another leaflet suggests golf after 3 months, breaststroke after 6 weeks and front crawl after 3 months, once you have enough strength and movement. NHS Lothian suggests discussing contact sports with your surgeon at a review 6 months after the operation, commonly around 9 to 12 months.",
        ],
      },
      {
        heading: "Starting small",
        paragraphs: [
          "Start with short sessions involving little effort, then gradually increase the effort or time.",
          "Your physiotherapist and consultant will guide you on when you are ready to return to your activities.",
        ],
      },
    ],
    helps: [
      "Restart usual activities within the limits of pain.",
      "Do not make up strenuous exercises or use heavy gym equipment.",
      "Start with short sessions involving little effort, then build up gradually.",
      "After a repair, return to sport under the guidance of your physiotherapist and consultant.",
    ],
    tryThisWeek: [
      "Keep doing what you can, within pain.",
      "Skip heavy gym equipment for now.",
      "Start with short, easy sessions.",
    ],
    ask: "When can I return to my sport, and what should I build up first?",
    interactive: {
      kind: "timeline",
      title: "Back to sport after a repair",
      steps: [
        { id: "swim", when: "About 6 weeks", title: "Gentle swimming", points: ["Breaststroke, one hospital leaflet suggests.", "Under the guidance of your physiotherapist."] },
        { id: "golf", when: "About 3 months", title: "Golf and front crawl", points: ["Golf and front crawl, one leaflet suggests.", "No competitive sport before 3 months, another says."] },
        { id: "overhead", when: "Several months", title: "Powerful overhead sport", points: ["Racket sports and similar movements may take several months to feel comfortable."] },
        { id: "contact", when: "Around 9 to 12 months", title: "Contact sports", points: ["Discussed with your surgeon at a 6-month review, says NHS Lothian."] },
      ],
    },
    sources: [CKS_CAUSES, BESS_SAP, CKS_RC, NHS_SHOULDER, BESS_EX, RBH_RCR, JPAGET_RCR, LOTHIAN_RCR, NHS_PAIN],
    quiz: {
      question: "What does one hospital leaflet say about competitive sport after a rotator cuff repair?",
      options: [{ text: "Not for 3 months", right: true }, { text: "From the first week" }, { text: "Never again" }],
      why: "One hospital leaflet says you can return to sport gradually, but not competitively for 3 months.",
    },
  },
  {
    id: "rc-long-term",
    kicker: "Recovery",
    question: "What if my rotator cuff pain lasts?",
    hook: "Shoulder pain can take months to settle, and for some people it lingers. There are still things to try, and people to ask.",
    short: "It can take 6 months or longer to recover from shoulder pain, and around 40 to 50 in every 100 people still have pain 6 to 12 months later. Keep using the shoulder, go back for help if treatment has not worked, and use the NHS self-help steps for long-term pain.",
    sections: [
      {
        heading: "Recovery can take a while",
        paragraphs: [
          "It can take 6 months or longer to recover from shoulder pain. The Chartered Society of Physiotherapy says most common causes get better naturally over time, but to be patient, as this can take several months.",
          "With exercise, the British Elbow and Shoulder Society says it may take 6 weeks before you start to see improvement.",
        ],
      },
      {
        heading: "When pain persists",
        paragraphs: [
          "Some people have minor, short-lived symptoms, but long-lasting and returning pain is common. Around 40 to 50 in every 100 people with shoulder pain still have pain 6 to 12 months after seeing their GP.",
          "How things go in the long term can depend on things like age, how long symptoms have lasted, previous episodes of shoulder pain, and pain in other parts of the body.",
        ],
      },
      {
        heading: "Going back for help",
        paragraphs: [
          "If you are still in pain after your physiotherapy sessions end, go back to your GP or refer yourself back to a community musculoskeletal service. They might prescribe more physiotherapy or suggest another treatment.",
          "NICE guidance for GPs suggests referral to a specialist if at least 6 weeks of non-surgical treatment has not helped. The Chartered Society of Physiotherapy says successful treatment depends on an accurate diagnosis.",
        ],
      },
      {
        heading: "Keep using the shoulder",
        paragraphs: [
          "It is much better to keep using your shoulder than to stop activities completely. You may need to adjust how you do things, doing jobs in short bursts with regular breaks.",
          "Arthritis UK suggests carrying on with normal activities as much as you can without overdoing it, pacing yourself and gradually doing a bit more each day.",
        ],
      },
      {
        heading: "Living with longer-term pain",
        paragraphs: [
          "The NHS suggests gentle exercise, slow deep breathing, a regular sleep routine and staying in touch with friends and family. Free NHS self-management courses help people with long-term conditions manage their pain day to day.",
          "Pain can make you tired, anxious and low, which can make it worse. Talking therapies can help, and Arthritis UK has a telephone helpline staffed by people with long-term pain.",
          "The Chartered Society of Physiotherapy says some treatments, such as massage, manual therapy, electrotherapy and acupuncture, have very little value in treating shoulder pain and are not recommended.",
        ],
      },
    ],
    helps: [
      "Be patient: recovery can take several months.",
      "Keep using your shoulder, adjusting how you do things.",
      "Go back to your GP or musculoskeletal service if pain continues after physiotherapy.",
      "Keep a regular sleep routine, and see a GP if sleep problems persist.",
      "Ask about a free NHS self-management course for long-term pain.",
    ],
    tryThisWeek: [
      "Keep using your shoulder gently.",
      "Stick to a regular bedtime.",
      "Ask about a pain course.",
    ],
    ask: "My shoulder pain has lasted months: is the diagnosis right, and what else could help?",
    interactive: {
      kind: "scenarios",
      title: "On a long recovery",
      scenarios: [
        {
          id: "rest",
          situation: "Months on, you feel like resting the arm completely.",
          options: [{ text: "Keep using it, adjusting tasks", best: true }, { text: "Stop using the arm" }],
          why: "It is much better to keep using your shoulder than to stop activities completely. You may need to adjust how you do things.",
        },
        {
          id: "physio-ended",
          situation: "Your physiotherapy sessions have ended, but the pain continues.",
          options: [{ text: "Go back to your GP or MSK service", best: true }, { text: "Accept it will not improve" }],
          why: "If you are still in pain after your physiotherapy sessions end, go back to your GP or refer yourself back to a community musculoskeletal service.",
        },
        {
          id: "sleep",
          situation: "The pain is spoiling your sleep.",
          options: [{ text: "Keep a regular sleep routine", best: true }, { text: "Nap through the day" }],
          why: "Go to bed and get up at regular times and avoid naps in the day. If sleep problems persist, see a GP.",
        },
        {
          id: "low",
          situation: "The pain is making you feel low and anxious.",
          options: [{ text: "Talk to someone who understands", best: true }, { text: "Keep it to yourself" }],
          why: "Pain can make you tired, anxious and low. Talking therapies can help, and helplines are staffed by people with long-term pain.",
        },
      ],
    },
    sources: [NHS_SHOULDER, CSP_LIVING, CKS_PROG, CKS_RC, CSP_TREAT, NHS_PAIN, AU_SHOULDER, BESS_SAP],
    quiz: {
      question: "What does the Chartered Society of Physiotherapy say is better than stopping activities completely?",
      options: [{ text: "Keep using the shoulder", right: true }, { text: "Total rest in a sling" }, { text: "Only using the other arm" }],
      why: "It is much better to keep using your shoulder than to stop activities completely.",
    },
  },
];
