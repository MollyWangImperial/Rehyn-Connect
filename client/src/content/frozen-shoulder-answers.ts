import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Frozen shoulder page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's `sources`;
// nothing is added that those pages do not say. Most of it comes from the NHS, Arthritis UK (the charity formerly
// called Versus Arthritis), the Chartered Society of Physiotherapy, the British Elbow and Shoulder Society and the
// NICE Clinical Knowledge Summary on shoulder pain, with NHS hospital leaflets for hydrodilatation and surgery, the
// UK FROST trial team for the hospital treatments, Diabetes UK for the diabetes link, and GOV.UK for driving and
// Access to Work. Exercises are described only as the sources describe them. General information only; it never
// replaces what a person's own GP, physiotherapist or surgeon tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/conditions/shoulder-pain${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE Clinical Knowledge Summaries: ${label}`, url: `https://cks.nice.org.uk/topics/shoulder-pain/${path}` });

const NHS_FS = nhs("Frozen shoulder", "conditions/frozen-shoulder/");
const NHS_SHOULDER = nhs("Shoulder pain", "symptoms/shoulder-pain/");
const NHS_PHYSIO = nhs("Physiotherapy", "tests-and-treatments/physiotherapy/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_CODEINE = nhs("Codeine", "medicines/codeine/");

const AU_SHOULDER = au("Shoulder pain", "understanding-arthritis/conditions/shoulder-pain/");
const AU_EX = au("Exercises for the shoulders", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-shoulders/");
const AU_STEROID = au("Steroid injections", "understanding-arthritis/arthritis-treatments/drugs/steroid-injections/");

const CSP_CAUSES = csp("Causes of shoulder pain", "/causes-shoulder-pain");
const CSP_TREAT = csp("Treatment for shoulder pain", "/treatment-shoulder-pain");
const CSP_LIVING = csp("Living with shoulder pain", "/living-shoulder-pain");
const CSP_HELP = csp("Getting help for shoulder pain", "/getting-help-shoulder-pain");
const CSP_VIDEO = csp("Video exercises for shoulder pain", "/video-exercises-shoulder-pain");

const CKS_CAUSES = cks("Shoulder pain, causes", "background-information/causes/");
const CKS_DIAG = cks("Shoulder pain, diagnosis", "diagnosis/diagnosis/");
const CKS_FS = cks("Shoulder pain, scenario: frozen shoulder", "management/frozen-shoulder/");

const BESS_FS: LearnSource = { label: "British Elbow and Shoulder Society: Frozen shoulder", url: "https://bess.ac.uk/frozen-shoulder/" };
const YORK_FROST: LearnSource = { label: "University of York: UK FROST, the United Kingdom Frozen Shoulder Trial", url: "https://www.york.ac.uk/health-sciences/research/trials/ytutrialsandstudies/archive/ukfrost/" };
const STH_FROST: LearnSource = { label: "South Tees Hospitals NHS Foundation Trust: UK FROST", url: "https://www.southtees.nhs.uk/about/strive/research-team/aces/world-leading/past/uk-frost/" };
const WORCS_MUA: LearnSource = { label: "Worcestershire Acute Hospitals NHS Trust: Manipulation under anaesthetic (MUA) or capsular release of your shoulder", url: "https://www.worcsacute.nhs.uk/leaflets/manipulation-under-anaesthetic-mua-of-your-shoulder-capsular-release-of-your-shoulder/" };
const WWL_HYDRO: LearnSource = { label: "Wrightington, Wigan and Leigh Teaching Hospitals NHS Foundation Trust: Hydrodilatation for frozen shoulder", url: "https://www.wwl.nhs.uk/pdfreader/cnv-wwl-68ca8bd100e0c9.15378097" };
const DUK_JOINTS: LearnSource = { label: "Diabetes UK: Diabetes, muscle pain and joint problems", url: "https://www.diabetes.org.uk/about-diabetes/looking-after-diabetes/complications/muscle-pain-joint-problems" };
const GOV_DVLA: LearnSource = { label: "GOV.UK: Medical conditions, disabilities and driving", url: "https://www.gov.uk/driving-medical-conditions" };
const GOV_HEALTH_DRIVING: LearnSource = { label: "GOV.UK: Check if a health condition affects your driving", url: "https://www.gov.uk/health-conditions-and-driving" };
const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const frozenShoulderAnswers: LearnArticle[] = [
  {
    id: "fs-what-it-is",
    kicker: "Understanding",
    question: "What is a frozen shoulder?",
    hook: "A capsule around the joint becomes inflamed, then tightens and shrinks. The result is months of pain and stiffness that usually ends.",
    short: "Frozen shoulder means your shoulder is painful and stiff for months, sometimes years. It happens when the tissue around the shoulder joint becomes inflamed, then gets tighter and shrinks. The pain and stiffness will usually go away eventually.",
    sections: [
      {
        heading: "A capsule that tightens",
        paragraphs: [
          "Frozen shoulder means your shoulder is painful and stiff for months, sometimes years. It happens when the tissue around your shoulder joint becomes inflamed. The tissue then gets tighter and shrinks, which causes pain.",
          "Arthritis UK describes the capsule around the joint becoming too tight, stopping you moving your shoulder. Its medical name is adhesive capsulitis.",
        ],
      },
      {
        heading: "How the shoulder is built",
        paragraphs: [
          "The main shoulder joint is a ball-and-socket joint. The top of the upper arm bone is shaped like a ball, and it fits into the shoulder blade, which acts as the socket.",
          "Muscles and tendons form a capsule around the joint and support its movements. Inside the capsule is the synovium, which produces fluid that lubricates the joint.",
        ],
      },
      {
        heading: "The two main symptoms",
        paragraphs: [
          "The 2 main symptoms are pain in your shoulder, which can be worse at night and disturb sleep, and stiffness that makes it difficult to move.",
          "The Chartered Society of Physiotherapy says it gives quite significant pain, especially at night, and restricts how much a person can move their shoulder in any direction. NICE guidance for GPs describes pain that comes on gradually, with stiffness that gets worse and may make daily activities difficult.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "It is often not clear why people get a frozen shoulder. It can follow an injury or surgery that stops you moving your arm normally, and it is more common in people with diabetes.",
          "Arthritis UK adds that it sometimes follows a heart attack or stroke.",
        ],
      },
      {
        heading: "It does get better",
        paragraphs: [
          "Frozen shoulder can take months or years to get better. But the pain and stiffness will usually go away eventually.",
          "For most people it lasts about one to three years, and most people eventually get better, even without treatment. Arthritis UK says most people with frozen shoulder make a full recovery.",
        ],
      },
    ],
    helps: [
      "See a GP if you have shoulder pain and stiffness that does not go away.",
      "Move your shoulder: keeping it still will make the pain worse.",
      "Avoid movements that cause you pain, and only move your shoulder gently.",
      "Before an appointment, write a few notes about when and how the problem started and what makes it feel worse.",
      "Contact your healthcare provider if you are not making progress within 6 to 12 weeks, or your pain is getting worse.",
    ],
    tryThisWeek: [
      "See a GP about lasting pain and stiffness.",
      "Move your shoulder gently.",
      "Note when and how it started.",
    ],
    ask: "Could this be a frozen shoulder, and which stage is it in?",
    interactive: {
      kind: "signs",
      title: "Signs of a frozen shoulder",
      intro: "Tick any you have noticed. They can help your GP or physiotherapist.",
      signs: [
        "Pain that is worse at night",
        "Pain that disturbs my sleep",
        "Stiffness that makes it hard to move",
        "Pain that came on gradually",
        "Stiffness that is slowly getting worse",
        "Daily tasks are getting difficult",
      ],
      after: "Frozen shoulder can take months or years to get better, but the pain and stiffness will usually go away eventually.",
      copyHeading: "Shoulder symptoms I have noticed",
    },
    sources: [NHS_FS, AU_SHOULDER, CKS_CAUSES, YORK_FROST, BESS_FS, CSP_CAUSES],
    quiz: {
      question: "What happens to the tissue around the joint in frozen shoulder?",
      options: [{ text: "It becomes inflamed, then tightens and shrinks", right: true }, { text: "It wears away like cartilage" }, { text: "It fills with crystals" }],
      why: "It happens when the tissue around your shoulder joint becomes inflamed. The tissue then gets tighter and shrinks, which causes pain.",
    },
  },
  {
    id: "fs-stages",
    kicker: "Stages",
    question: "What are the stages of a frozen shoulder?",
    hook: "First the pain, then the stiffness, then a slow thaw. Knowing which phase you are in helps make sense of the treatment.",
    short: "Frozen shoulder moves through three overlapping phases: a painful phase, a stiffness phase and a resolution phase. Pain is the main problem at first, then stiffness, which then gradually eases. Symptoms usually settle in 18 to 24 months.",
    sections: [
      {
        heading: "Three overlapping phases",
        paragraphs: [
          "Frozen shoulder moves through three phases that overlap: a painful phase, a stiffness phase and a resolution phase. Because they overlap, doctors now often talk about a pain predominant phase and a stiffness predominant phase.",
          "Pain is the main problem at first. The pain gradually improves, but stiffness slowly worsens and becomes the main problem. The stiffness then gradually resolves.",
        ],
      },
      {
        heading: "The painful phase",
        paragraphs: [
          "The painful phase lasts about 2 to 9 months. Pain on movement gets steadily worse, and it can become severe and disturb sleep.",
          "Arthritis UK says the pain can be severe, and you may feel sudden muscle pains, called muscle spasms, especially at night.",
        ],
      },
      {
        heading: "The stiffness phase",
        paragraphs: [
          "The stiffness phase lasts about 4 to 12 months. The pain becomes less severe, but it is still there at the end of a movement.",
          "The stiffness stays, and the shoulder moves less far than it should. Everyday use of the arm can be substantially limited in this phase.",
        ],
      },
      {
        heading: "The resolution phase",
        paragraphs: [
          "The resolution phase lasts about 12 to 42 months. The range of movement gradually improves, with less stiffness.",
          "Symptoms usually settle in 18 to 24 months, although some people have some pain and stiffness for several years. The NHS says the pain and stiffness will usually go away eventually.",
        ],
      },
      {
        heading: "Why the phase matters",
        paragraphs: [
          "NICE guidance for GPs says pain relief should be offered particularly in the early, painful phase.",
          "A steroid injection is not recommended once the pain has settled and stiffness is the main problem, because the inflammatory stage is over.",
        ],
      },
    ],
    helps: [
      "You may get a mix of treatments depending on how painful and stiff your shoulder is.",
      "When the shoulder is painful, keep using the arm to keep it moving, but avoid movements that make the pain worse.",
      "In bed, support the arm with pillows to stop you rolling onto the painful shoulder.",
      "Take pain relief as advised, particularly in the early, painful phase.",
      "Remember that most people with frozen shoulder make a full recovery.",
    ],
    tryThisWeek: [
      "Keep using the arm gently.",
      "Support the arm with pillows in bed.",
      "Take pain relief as advised.",
    ],
    ask: "Which phase is my shoulder in, and how does that change my treatment?",
    interactive: {
      kind: "timeline",
      title: "The phases of frozen shoulder",
      steps: [
        { id: "painful", when: "About 2 to 9 months", title: "The painful phase", points: ["Pain on movement gets steadily worse.", "It can become severe and disturb sleep."] },
        { id: "stiff", when: "About 4 to 12 months", title: "The stiffness phase", points: ["The pain becomes less severe.", "Stiffness stays and the shoulder moves less far."] },
        { id: "resolution", when: "About 12 to 42 months", title: "The resolution phase", points: ["Movement gradually improves.", "The shoulder feels less stiff."] },
        { id: "settled", when: "Usually 18 to 24 months", title: "Symptoms settle", points: ["Most people's symptoms have settled.", "Some have some pain and stiffness for several years."] },
      ],
    },
    sources: [CKS_CAUSES, CKS_FS, NHS_FS, AU_SHOULDER],
    quiz: {
      question: "Which phase can last from about 12 to 42 months?",
      options: [{ text: "The resolution phase", right: true }, { text: "The painful phase" }, { text: "The stiffness phase" }],
      why: "The resolution phase lasts about 12 to 42 months. The range of movement gradually improves, with less stiffness.",
    },
  },
  {
    id: "fs-who",
    kicker: "Who gets it",
    question: "Who gets a frozen shoulder?",
    hook: "Mostly people in middle age, more often women, and much more often people with diabetes. But often there is no clear reason.",
    short: "Frozen shoulder typically affects people aged between 40 and 60, and it is more common in women. It is more common in people with diabetes, and it can follow an injury, an operation, a heart attack or a stroke. Often there is no clear cause.",
    sections: [
      {
        heading: "Mostly in middle age",
        paragraphs: [
          "Frozen shoulder typically affects people aged between 40 and 60. The Chartered Society of Physiotherapy says it typically affects people in their 50s.",
          "In the UK FROST trial of hospital treatments for frozen shoulder, participants were 54 years old on average.",
        ],
      },
      {
        heading: "Women, and the other shoulder",
        paragraphs: [
          "Frozen shoulder is more common in women. It is also more common in people who have had frozen shoulder in the other arm before.",
        ],
      },
      {
        heading: "Diabetes",
        paragraphs: [
          "Frozen shoulder is more common in people with diabetes. The NHS says it is unclear why. It has been estimated that around 13 in every 100 people with diabetes have frozen shoulder.",
          "Diabetes UK says it is more common in people who have had diabetes for a long time, are older, have had a heart attack, or have diabetes complications affecting the eyes, kidneys or nerves.",
        ],
      },
      {
        heading: "After an injury, an operation or another illness",
        paragraphs: [
          "It can happen because you had an injury or surgery that stops you moving your arm normally.",
          "Arthritis UK says it sometimes follows a heart attack or stroke. NICE guidance for GPs also links it with heart and circulation disease, problems with the tendons around the shoulder, and thyroid problems.",
        ],
      },
      {
        heading: "Often no clear cause",
        paragraphs: [
          "It is often not clear why people get a frozen shoulder. Doctors call it primary when no cause is found, and secondary when it is linked to something else, such as an injury or diabetes.",
        ],
      },
    ],
    helps: [
      "If you have diabetes, keep up your regular diabetes check-ups to catch any problems early.",
      "Be ready for the GP to ask about other conditions, such as diabetes, stroke or heart disease, and about the medicines you take.",
      "See a GP if you have shoulder pain and stiffness that does not go away.",
      "Do not self-diagnose. See a GP if you are worried.",
    ],
    tryThisWeek: [
      "Keep up your diabetes check-ups.",
      "List your conditions and medicines for the GP.",
      "See a GP about lasting stiffness.",
    ],
    ask: "Is there anything in my health history that might explain my frozen shoulder?",
    interactive: {
      kind: "risk-check",
      title: "What makes it more likely?",
      intro: "Tick any that apply. Most of these cannot be changed, but knowing them helps your GP.",
      items: [
        { id: "age", label: "Being aged 40 to 60", note: "Frozen shoulder typically affects people aged between 40 and 60.", changeable: false },
        { id: "woman", label: "Being a woman", note: "Frozen shoulder is more common in women.", changeable: false },
        { id: "diabetes", label: "Having diabetes", note: "More common with diabetes. Keep up your regular diabetes check-ups to catch any problems early.", changeable: false },
        { id: "other-arm", label: "Frozen shoulder in the other arm", note: "It is more common in people who have had it in the opposite arm before.", changeable: false },
        { id: "injury", label: "An injury or operation", note: "One that stops you moving your arm normally.", changeable: false },
        { id: "heart-stroke", label: "A heart attack or stroke", note: "Arthritis UK says frozen shoulder sometimes follows a heart attack or stroke.", changeable: false },
        { id: "thyroid", label: "A thyroid problem", note: "NICE guidance for GPs links frozen shoulder with thyroid problems.", changeable: false },
      ],
    },
    sources: [CKS_CAUSES, NHS_FS, AU_SHOULDER, DUK_JOINTS, CSP_TREAT, YORK_FROST, CKS_DIAG, NHS_SHOULDER],
    quiz: {
      question: "Which age group does frozen shoulder typically affect?",
      options: [{ text: "People aged 40 to 60", right: true }, { text: "People aged 20 to 30" }, { text: "Children" }],
      why: "Frozen shoulder typically affects people aged between 40 and 60.",
    },
  },
  {
    id: "fs-diagnosis",
    kicker: "Diagnosis",
    question: "How is a frozen shoulder diagnosed?",
    hook: "No scan is needed in most cases. The answer is in how your shoulder moves, and how it got this way.",
    short: "Frozen shoulder is diagnosed from your symptoms and an examination of how your shoulder moves. X-rays are not routinely needed. A GP may consider testing for diabetes, because frozen shoulder is more common in people with diabetes.",
    sections: [
      {
        heading: "From your story and an examination",
        paragraphs: [
          "The diagnosis of frozen shoulder is made from your symptoms and an examination. No single test in a shoulder examination can be relied on to make a diagnosis on its own.",
          "Your doctor or physiotherapist will need to see which movements are the most painful. They will usually ask how the problem started, how it has developed and how it affects your daily activities.",
        ],
      },
      {
        heading: "What the examination looks for",
        paragraphs: [
          "In frozen shoulder, movement is restricted both when you move the arm yourself and when someone else moves it for you. Turning the arm outwards is especially limited.",
          "The examination also helps rule out other causes of a stiff shoulder, such as problems with the tendons around the shoulder or an injury to the neck.",
        ],
      },
      {
        heading: "Scans and blood tests",
        paragraphs: [
          "X-rays are not routinely needed. If one is done, the shoulder joint should look normal. X-rays can only show bones and other hard substances, not soft tissue such as muscles.",
          "A GP may consider testing for diabetes, because frozen shoulder is more common in people with diabetes. Other blood tests are used if another condition, such as polymyalgia rheumatica or inflammatory arthritis, is suspected.",
        ],
      },
      {
        heading: "Getting seen",
        paragraphs: [
          "See a GP if you have shoulder pain and stiffness that does not go away, or the pain is so bad it makes it hard to move your arm and shoulder. The NHS also says to see a GP if shoulder pain is getting worse or does not improve after 2 weeks.",
          "In many areas you can get help, such as physiotherapy, from NHS community musculoskeletal services without a GP referral. The Chartered Society of Physiotherapy says a diagnosis can often be made without the need for any X-rays or scans.",
        ],
      },
      {
        heading: "When it is urgent",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have sudden or very bad shoulder pain, you cannot move your arm, or your arm or shoulder has changed shape or is badly swollen.",
          "Do the same if your arm or shoulder is hot or cold to touch, the pain started after an injury, you develop severe pain in both shoulders, or you feel feverish or unwell. These can be signs of something serious.",
        ],
      },
    ],
    helps: [
      "Before your appointment, write a few notes about when and how the problem started and what makes it feel worse.",
      "Check whether you can refer yourself to an NHS community musculoskeletal service.",
      "Tell the GP if you have diabetes: frozen shoulder is more common in people with diabetes.",
      "Ask for an urgent GP appointment or get help from NHS 111 for sudden or very bad pain, or if you cannot move your arm.",
    ],
    tryThisWeek: [
      "Write notes on how it started.",
      "Check if you can refer yourself.",
      "Tell the GP if you have diabetes.",
    ],
    ask: "Do I need any tests, or can you diagnose my shoulder from the examination?",
    interactive: {
      kind: "flip-cards",
      title: "Checks you may hear about",
      intro: "Turn each card to see what it shows and when it is used.",
      cards: [
        { id: "exam", front: "Examination", when: "The main way it is diagnosed", back: "Checks which movements hurt most, and how far the arm moves on its own and when moved for you." },
        { id: "xray", front: "X-ray", when: "Not routinely needed", back: "Shows bones and hard substances only. In frozen shoulder the joint should look normal." },
        { id: "ultrasound", front: "Ultrasound scan", when: "To look at soft tissue", back: "Can show swelling, and problems with the tendons, muscles or other soft tissues in the shoulder." },
        { id: "mri", front: "MRI scan", when: "If a more complex problem is suspected", back: "Uses radio waves to build a picture of the bones and soft tissue inside the shoulder." },
        { id: "blood", front: "Blood tests", when: "If another condition is suspected", back: "A GP may consider testing for diabetes, as frozen shoulder is more common with it." },
      ],
    },
    sources: [CKS_CAUSES, CKS_DIAG, AU_SHOULDER, NHS_SHOULDER, CSP_HELP, NHS_FS, NHS_PHYSIO],
    quiz: {
      question: "Is an X-ray usually needed to diagnose frozen shoulder?",
      options: [{ text: "No, it is not routinely needed", right: true }, { text: "Yes, always" }, { text: "Only an MRI can show it" }],
      why: "X-rays are not routinely needed. If one is done, the shoulder joint should look normal.",
    },
  },
  {
    id: "fs-pain-relief",
    kicker: "Treatment",
    question: "What helps the pain of a frozen shoulder?",
    hook: "Paracetamol first, then an anti-inflammatory, then stronger help if needed. Plus warmth, and a few limits worth knowing.",
    short: "Treatment works in 3 main steps: pain relief, stronger pain relief and getting movement back. Try paracetamol at regular intervals first, then an anti-inflammatory such as ibuprofen if it does not work. A wrapped heat pack can help, for up to 20 minutes at a time.",
    sections: [
      {
        heading: "Three steps",
        paragraphs: [
          "Treatment for frozen shoulder works in 3 main steps: pain relief, stronger pain relief, and getting movement back. You may get a mix of these, depending on how painful and stiff your shoulder is.",
          "NICE guidance for GPs says pain relief should be offered particularly in the early, painful phase. The NHS says to use pain relief so you can keep moving.",
        ],
      },
      {
        heading: "Paracetamol first",
        paragraphs: [
          "At first, try taking paracetamol. You can take it at regular intervals, up to the recommended daily dose. NICE guidance for GPs says regular doses work better than taking it only when needed.",
          "For adults, one dose of 500mg tablets is 1 or 2 tablets. Leave at least 4 hours between doses, and do not take more than 8 tablets in 24 hours. The NHS paracetamol page says not to take it for more than 3 days unless a doctor tells you to, so speak to a GP or pharmacist about longer use.",
        ],
      },
      {
        heading: "Ibuprofen",
        paragraphs: [
          "If paracetamol does not work, try an anti-inflammatory painkiller taken by mouth, such as ibuprofen. If it does not help, stop using it.",
          "Ibuprofen is not suitable for everyone. For example, it may not be suitable if you have asthma, or you have a stomach ulcer or have had one before. Do not take it at the same time as other anti-inflammatory painkillers, such as naproxen or aspirin.",
        ],
      },
      {
        heading: "Stronger pain relief",
        paragraphs: [
          "You may be prescribed stronger painkillers or a steroid injection in your shoulder. Stronger pain relief is usually only used for a short time because it can cause side effects.",
          "If paracetamol does not help, a GP may consider codeine. It is possible to become addicted to codeine, and your doctor will make sure you are only taking the amount you need to control your pain.",
        ],
      },
      {
        heading: "Warmth and cold",
        paragraphs: [
          "Try putting a heat pack or a hot water bottle, wrapped in a tea towel, on your shoulder for up to 20 minutes at a time. You can buy heat packs from a pharmacy.",
          "Arthritis UK says an ice pack may help if your shoulder is swollen and warmer to touch than the other side. Wrap it in a damp towel to protect your skin, and leave it in place for no longer than 20 minutes.",
        ],
      },
    ],
    helps: [
      "Take paracetamol regularly, up to the recommended daily dose.",
      "If an anti-inflammatory painkiller such as ibuprofen does not help, stop using it.",
      "Ask a pharmacist for the best painkiller: it might be tablets, or a cream or gel you rub on your skin.",
      "Do not take ibuprofen at the same time as other anti-inflammatory painkillers, such as naproxen or aspirin.",
      "Try a heat pack or hot water bottle wrapped in a tea towel, for up to 20 minutes at a time.",
    ],
    tryThisWeek: [
      "Take paracetamol regularly, within the dose.",
      "Ask a pharmacist which painkiller suits you.",
      "Try a wrapped heat pack for 20 minutes.",
    ],
    ask: "Which painkillers are safe for me to take regularly, and for how long?",
    interactive: {
      kind: "flip-cards",
      title: "Pain relief, card by card",
      intro: "Turn each card to see when each one is used and what to know.",
      cards: [
        { id: "paracetamol", front: "Paracetamol", when: "The first thing to try", back: "Take at regular intervals, up to the recommended daily dose. Leave at least 4 hours between doses." },
        { id: "ibuprofen", front: "Ibuprofen", when: "If paracetamol does not work", back: "An anti-inflammatory taken by mouth. If it does not help, stop using it. Not suitable for everyone." },
        { id: "codeine", front: "Codeine", when: "A GP may consider it", back: "It is possible to become addicted. Your doctor will make sure you only take the amount you need." },
        { id: "steroid", front: "Steroid injection", when: "Stronger pain relief", back: "An injection into the shoulder. Stronger pain relief is usually only used for a short time." },
        { id: "heat", front: "Heat pack", when: "At home, any time it helps", back: "Wrapped in a tea towel, on the shoulder for up to 20 minutes at a time." },
      ],
    },
    sources: [NHS_FS, CKS_FS, NHS_PARACETAMOL, NHS_IBUPROFEN, AU_SHOULDER, NHS_SHOULDER, NHS_CODEINE],
    quiz: {
      question: "What should you do if ibuprofen does not help the pain?",
      options: [{ text: "Stop using it", right: true }, { text: "Take a double dose" }, { text: "Add naproxen as well" }],
      why: "If paracetamol does not work, try an anti-inflammatory painkiller taken by mouth, such as ibuprofen. If it does not help, stop using it.",
    },
  },
  {
    id: "fs-exercises",
    kicker: "Exercise",
    question: "Which exercises help a frozen shoulder?",
    hook: "Gentle movement is part of the treatment, and keeping the arm still makes it worse. But strenuous home-made workouts can too.",
    short: "Getting movement back is one of the 3 main steps of treatment, and keeping the shoulder still will make the pain worse. Gentle exercises from your GP or physiotherapist help, but strenuous exercises you make up yourself can make the pain worse. Get advice before starting any new exercise.",
    sections: [
      {
        heading: "Movement is part of the treatment",
        paragraphs: [
          "Getting movement back is one of the 3 main steps of treatment. Try gentle shoulder exercises at home, and keep moving your shoulder, as keeping it still will make the pain worse.",
          "Do not make up your own strenuous exercises. Gym equipment, for example, can make the pain worse.",
        ],
      },
      {
        heading: "Check first",
        paragraphs: [
          "The Chartered Society of Physiotherapy recommends getting advice from a physiotherapist or healthcare professional before starting any new exercise regime. If any of its shoulder exercises worsen your pain, it advises seeking urgent medical advice.",
          "Frozen shoulder causes significant pain, so it is difficult to exercise without enough pain relief. Arthritis UK says you may find exercise more comfortable after putting ice on your shoulder or taking painkillers.",
        ],
      },
      {
        heading: "Gentle moves to ask about",
        paragraphs: [
          "One is the shoulder circle. Stand with one hand resting on a chair, let your other arm hang down, and try to swing it gently backwards and forwards in a circle, about five times.",
          "Another is a wall climb. Stand in front of a wall, place the hand of your affected arm on the wall, climb up with your fingers as high as you can, then come back to the start.",
          "In an assisted lift, clasp your hands in front of your body and raise them over your head, letting your stronger side guide and assist your weaker side.",
        ],
      },
      {
        heading: "A programme made for frozen shoulder",
        paragraphs: [
          "The British Elbow and Shoulder Society has advice and exercise videos made by its physiotherapists for people diagnosed with frozen shoulder. It says that by following them, your symptoms should improve.",
          "The course of frozen shoulder is a long one. If you are not making progress within 6 to 12 weeks, or your shoulder pain is getting worse, contact your healthcare provider.",
        ],
      },
      {
        heading: "Physiotherapy",
        paragraphs: [
          "If the pain continues, you may be referred to a physiotherapist. A course usually lasts at least 6 weeks, and treatments include stretching exercises, strength exercises, posture advice and pain relief.",
          "NICE guidance for GPs says physiotherapy should start as early as possible, with enough pain relief. It can carry on for a further 6 weeks if symptoms are improving.",
        ],
      },
    ],
    helps: [
      "Follow any exercises from your GP or physiotherapist.",
      "Get advice from a physiotherapist or healthcare professional before starting any new exercises.",
      "Do not make up your own strenuous exercises or use heavy gym equipment.",
      "Contact your healthcare provider if you are not making progress within 6 to 12 weeks.",
      "Try exercising after an ice pack or painkillers, if that is more comfortable.",
    ],
    tryThisWeek: [
      "Do the exercises your physio gave you.",
      "Ask before starting new exercises.",
      "Skip strenuous gym work.",
    ],
    ask: "Which exercises should I do for my stage of frozen shoulder, and how often?",
    interactive: {
      kind: "flip-cards",
      title: "Moves to ask your physio about",
      intro: "Check with your GP or physiotherapist first. Turn each card to see how the source describes it.",
      cards: [
        { id: "circle", front: "Shoulder circle", when: "Standing, one hand on a chair", back: "Let the other arm hang down and swing it gently backwards and forwards in a circle, about five times." },
        { id: "wall", front: "Wall climb", when: "Standing facing a wall", back: "Place the hand of the affected arm on the wall and climb up with your fingers as high as you can." },
        { id: "assisted", front: "Assisted lift", when: "Hands clasped in front", back: "Raise your hands over your head, letting your stronger side guide and assist your weaker side." },
        { id: "slide", front: "Table slide", when: "Sitting upright at a table", back: "Rest your hands on a cloth and gently slide it forwards as far as is comfortable, then slowly back." },
        { id: "stick", front: "Outward push with a stick", when: "Standing against a wall", back: "Elbow bent at 90 degrees, push the affected arm out to the side using a stick in the good hand." },
      ],
    },
    sources: [NHS_FS, CKS_FS, BESS_FS, CSP_VIDEO, AU_EX, CSP_TREAT, NHS_SHOULDER, AU_SHOULDER],
    quiz: {
      question: "What does the NHS say about keeping a frozen shoulder still?",
      options: [{ text: "It will make the pain worse", right: true }, { text: "It helps it heal faster" }, { text: "It makes no difference" }],
      why: "Keep moving your shoulder, as keeping it still will make the pain worse.",
    },
  },
  {
    id: "fs-injections",
    kicker: "Injections",
    question: "Will a steroid injection or hydrodilatation help?",
    hook: "An injection can calm the pain enough to move. A larger one, hydrodilatation, stretches the capsule itself.",
    short: "A steroid injection reduces inflammation so you can move your shoulder more comfortably, and it is usually given with a local anaesthetic. It is used early, while pain is the main problem. Hydrodilatation adds salt water to stretch the tight capsule, and physiotherapy afterwards is important.",
    sections: [
      {
        heading: "A steroid injection",
        paragraphs: [
          "A steroid injection in the shoulder is one of the stronger forms of pain relief. It reduces inflammation and allows you to move your shoulder more comfortably.",
          "The steroid is usually given with a local anaesthetic. The Chartered Society of Physiotherapy says a steroid injection followed by gentle stretching and strengthening exercises is effective for the majority.",
        ],
      },
      {
        heading: "When it is used",
        paragraphs: [
          "NICE guidance for GPs suggests considering an injection early in frozen shoulder if there is no progress, or slow progress, with other treatment. It is not given once the pain has settled and stiffness is the main problem.",
          "It is not usually recommended to have more than two or three injections into your shoulder, as this can do more damage to the joint.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "Do not use your shoulder for anything too strenuous for the first two days after an injection. Arthritis UK adds that there is a small risk of damaging a tendon if you exercise a joint too much straight after an injection.",
          "The pain may be worse for a short time after the injection, but this does not mean it has gone wrong. Seek advice if the pain continues for more than a day or so. If there is severe pain after the injection, especially with a fever or shivering, seek urgent medical advice.",
        ],
      },
      {
        heading: "Hydrodilatation",
        paragraphs: [
          "Sometimes a treatment called hydrodilatation is used. A steroid, a local anaesthetic and a salt water solution are injected into the shoulder, guided by ultrasound or X-ray, to stretch the lining of the capsule.",
          "It can be a bit painful, but your shoulder should feel less painful afterwards. Most people find it very helpful, but for some people it only works for a short time. One hospital leaflet stresses that improvement depends on physiotherapy afterwards.",
        ],
      },
      {
        heading: "Diabetes and infection",
        paragraphs: [
          "If you have diabetes, a steroid injection can raise your blood sugar levels for a few days, so it is important to monitor them afterwards.",
          "Very rarely, a joint becomes infected after an injection. If it becomes more painful and hot, see your doctor immediately, especially if you feel unwell. After hydrodilatation, one hospital leaflet says to go to your nearest hospital emergency department if the shoulder becomes swollen, painful and red, or you feel unwell and feverish.",
        ],
      },
    ],
    helps: [
      "Rest the injected joint as much as is practical for 24 hours afterwards.",
      "Do not use your shoulder for anything too strenuous for the first two days.",
      "If you have diabetes, monitor your blood sugar levels after the injection.",
      "Arrange transport home, as numbness from a local anaesthetic can make it difficult to drive.",
      "If you are given a steroid card, keep it with you.",
      "Continue physiotherapy after hydrodilatation.",
    ],
    tryThisWeek: [
      "Rest the shoulder for 24 hours after.",
      "Arrange a lift home.",
      "Check blood sugar if you have diabetes.",
    ],
    ask: "Would an injection or hydrodilatation help my shoulder at this stage?",
    interactive: {
      kind: "scenarios",
      title: "Around an injection",
      scenarios: [
        {
          id: "lift",
          situation: "The day after your injection, you need to move a heavy box.",
          options: [{ text: "Leave it, or ask for help", best: true }, { text: "Lift it: the pain has eased" }],
          why: "Do not use your shoulder for anything too strenuous for the first two days after an injection.",
        },
        {
          id: "sore",
          situation: "A few hours after the injection, the shoulder is sorer than before.",
          options: [{ text: "Normal for a short time", best: true }, { text: "The injection has gone wrong" }],
          why: "The pain may be worse for a short time after the injection. Seek advice if the pain continues for more than a day or so.",
        },
        {
          id: "fever",
          situation: "After the injection you have severe pain, a fever and shivering.",
          options: [{ text: "Seek urgent medical advice", best: true }, { text: "Wait and see for a week" }],
          why: "If there is severe pain after the injection, especially with a fever or shivering, seek urgent medical advice.",
        },
        {
          id: "stiff",
          situation: "Your pain has settled, but the shoulder is still stiff. You ask for an injection.",
          options: [{ text: "It is not usually given now", best: true }, { text: "It is the best treatment now" }],
          why: "A steroid injection is not given once the pain has settled and stiffness is the main problem.",
        },
      ],
    },
    sources: [NHS_FS, CKS_FS, AU_SHOULDER, AU_STEROID, WWL_HYDRO, CSP_TREAT],
    quiz: {
      question: "How many shoulder injections are usually the most recommended?",
      options: [{ text: "Two or three", right: true }, { text: "One a month" }, { text: "As many as needed" }],
      why: "It is not usually recommended to have more than two or three injections into your shoulder, as this can do more damage to the joint.",
    },
  },
  {
    id: "fs-surgery",
    kicker: "Surgery",
    question: "When is surgery offered for a frozen shoulder?",
    hook: "Only for the shoulders that do not settle. A large UK trial found no single hospital treatment was best.",
    short: "Most people recover without surgery. For around 1 in 10 people the condition is more resistant and they are referred to hospital, where options include a manipulation under anaesthetic or keyhole capsular release. A large UK trial found none of the hospital treatments was better than the others at 12 months.",
    sections: [
      {
        heading: "Usually not needed",
        paragraphs: [
          "Most people with frozen shoulder make a full recovery. If the problem continues even after trying other treatments, you may need to consider surgery.",
          "For around one in 10 people the condition is more resistant, and they are referred to hospital. NICE guidance for GPs suggests referral to hospital if pain or stiffness has lasted up to 3 months without benefit from other treatment, or earlier if symptoms are severe.",
        ],
      },
      {
        heading: "Manipulation under anaesthetic",
        paragraphs: [
          "In a manipulation under anaesthetic, the surgeon moves the shoulder joint through all of its movements while you are under anaesthetic, to loosen it and reduce pain and stiffness. No cut is made, so there is no wound.",
          "In the UK FROST trial, manipulation under anaesthetic was the most cost-effective option.",
        ],
      },
      {
        heading: "Keyhole capsular release",
        paragraphs: [
          "A capsular release is keyhole surgery. Small cuts are made around the shoulder joint, and instruments are used to carefully release the tight capsule and any scarring.",
          "In the UK FROST trial, capsular release had higher risks and costs, but fewer people needed further treatment afterwards.",
        ],
      },
      {
        heading: "What the trial found",
        paragraphs: [
          "UK FROST compared early structured physiotherapy, manipulation under anaesthetic and keyhole capsular release in 503 people from 35 UK hospitals. None of the three was better than the others for pain and function at 12 months.",
          "Early physiotherapy could be started more quickly and cost less. The researchers suggest capsular release should be used more selectively, when less costly, less invasive treatments fail.",
        ],
      },
      {
        heading: "After the operation",
        paragraphs: [
          "Both operations can be done as day cases. You may come back wearing a sling for comfort while the arm is numb, but stiffness can quickly come back if the arm stays in it, so one hospital leaflet advises discarding it as soon as possible.",
          "Moving the shoulder as soon as possible keeps the movement gained in the operation. To stop the problem returning, you will need to follow a programme of exercises afterwards.",
        ],
      },
    ],
    helps: [
      "Your consultant will discuss with you which type of surgery is most appropriate for you.",
      "After the operation, take painkillers as prescribed, so you can do your exercises.",
      "Do your exercises regularly to get your shoulder back to full use.",
      "Go to your outpatient physiotherapy appointments after you go home.",
      "Ask your consultant when you can return to work, activities and driving.",
    ],
    tryThisWeek: [
      "Ask which operation suits you.",
      "Plan to take painkillers as prescribed.",
      "Keep your physio appointments.",
    ],
    ask: "Have I tried enough other treatments, and which operation would suit my shoulder?",
    interactive: {
      kind: "flip-cards",
      title: "Three hospital treatments",
      intro: "Turn each card to see what each treatment involves and what UK FROST found.",
      cards: [
        { id: "physio", front: "Early structured physiotherapy", when: "With a steroid injection", back: "Could be started more quickly and cost less, but people were more likely to need further treatment." },
        { id: "mua", front: "Manipulation under anaesthetic", when: "No cut, so no wound", back: "The shoulder is moved through all its movements to loosen it. The most cost-effective option in UK FROST." },
        { id: "release", front: "Keyhole capsular release", when: "Small cuts around the joint", back: "Releases the tight capsule and scarring. Higher risks and costs, but less further treatment needed." },
        { id: "after", front: "Afterwards", when: "For all of them", back: "Move the shoulder as soon as possible and keep up a programme of exercises." },
      ],
    },
    sources: [AU_SHOULDER, CKS_FS, WORCS_MUA, YORK_FROST, STH_FROST, CSP_TREAT],
    quiz: {
      question: "In the UK FROST trial, which treatment was best for pain and function at 12 months?",
      options: [{ text: "None was better than the others", right: true }, { text: "Keyhole capsular release" }, { text: "Manipulation under anaesthetic" }],
      why: "None of the three was better than the others for pain and function at 12 months.",
    },
  },
  {
    id: "fs-daily-tasks",
    kicker: "Everyday life",
    question: "How can I sleep, dress and get jobs done with a frozen shoulder?",
    hook: "Pillows in the right places, an elbow kept close, and jobs done in short bursts.",
    short: "Pillows can support the painful arm in bed and stop you rolling onto it. Avoid raising the arm above the shoulder while it is very painful, and keep the elbow bent and close when you do. Doing jobs in short bursts, spreading loads and getting advice from an occupational therapist can all help.",
    sections: [
      {
        heading: "Sleeping",
        paragraphs: [
          "The pain of frozen shoulder can be worse at night and disturb sleep. NICE guidance for GPs suggests supporting the arm with pillows in bed, to stop you rolling onto the painful shoulder.",
          "Arthritis UK suggests lying on your good side with a pillow under your neck, a folded pillow supporting your painful arm in front of your body, and another pillow behind your back. If you prefer to sleep on your back, try one or two pillows under your painful arm.",
        ],
      },
      {
        heading: "Sitting and resting",
        paragraphs: [
          "Sit with a cushion behind your lower back. If your arm is really sore, keep it supported on a cushion or pillow on your lap.",
          "Try to avoid leaning forwards and resting on your arms too much, and change your position often.",
        ],
      },
      {
        heading: "Raising and reaching",
        paragraphs: [
          "Raising your arm above your shoulder or holding it away from your body can be very painful. It is best to avoid movements like this as much as possible until it becomes less painful.",
          "If you have to raise your arm, keep your elbow bent and at the side of your body, with your palm facing the ceiling when reaching up. To lower your arm, bend your elbow, bringing your hand closer to your body.",
        ],
      },
      {
        heading: "Jobs around the house",
        paragraphs: [
          "When vacuuming, keep your upper body upright with the vacuum close to your body, and use short sweeping movements. Only iron essential items, with the ironing board at waist height.",
          "Use a trolley or a backpack to carry shopping, or divide the weight between two bags. For tasks that involve raising your arms, give yourself plenty of time, take lots of breaks and ask someone to help.",
        ],
      },
      {
        heading: "Dressing, washing and help",
        paragraphs: [
          "If your shoulder makes daily activities such as dressing, washing and driving difficult, it may help to see an occupational therapist. They can show you how to change the way you do things, and advise on equipment.",
          "Keep using your shoulder, but adjust how you do things. This may mean doing jobs in short bursts with regular breaks, rather than all in one go.",
        ],
      },
    ],
    helps: [
      "In bed, support your painful arm with pillows.",
      "Do jobs in short bursts with regular breaks.",
      "If you have to raise your arm, keep your elbow bent and at your side.",
      "Spread the load: use a trolley, a backpack or two bags.",
      "Ask your doctor or physiotherapist about seeing an occupational therapist.",
    ],
    tryThisWeek: [
      "Support your arm with pillows at night.",
      "Do jobs in short bursts.",
      "Spread the shopping load.",
    ],
    ask: "Could I see an occupational therapist for help with dressing and jobs at home?",
    interactive: {
      kind: "scenarios",
      title: "Around the house",
      scenarios: [
        {
          id: "bed",
          situation: "You keep waking up on your painful shoulder.",
          options: [{ text: "Good side, with pillows placed", best: true }, { text: "Lie on the painful side" }],
          why: "Lie on your good side with a pillow under your neck, a folded pillow supporting your painful arm, and another pillow behind your back.",
        },
        {
          id: "shelf",
          situation: "You need something from a high shelf.",
          options: [{ text: "Elbow bent and close, palm up", best: true }, { text: "Stretch the arm out straight" }],
          why: "If you have to raise your arm, keep your elbow bent and at the side of your body, with your palm facing the ceiling when reaching up.",
        },
        {
          id: "shopping",
          situation: "You have a heavy shop to carry home.",
          options: [{ text: "Trolley, backpack or two bags", best: true }, { text: "One heavy bag on the bad side" }],
          why: "Use a trolley or a backpack to carry shopping, or divide the weight between two bags.",
        },
        {
          id: "jobs",
          situation: "There is a whole morning of housework to do.",
          options: [{ text: "Short bursts with breaks", best: true }, { text: "Get it all done in one go" }],
          why: "This may mean doing jobs in short bursts with regular breaks, rather than all in one go.",
        },
      ],
    },
    sources: [AU_SHOULDER, CKS_FS, NHS_SHOULDER, CSP_LIVING, NHS_FS],
    quiz: {
      question: "Which side does Arthritis UK suggest lying on?",
      options: [{ text: "Your good side", right: true }, { text: "Your painful side" }, { text: "It does not matter" }],
      why: "Arthritis UK suggests lying on your good side with a pillow under your neck.",
    },
  },
  {
    id: "fs-diabetes",
    kicker: "Diabetes",
    question: "Why is frozen shoulder linked to diabetes?",
    hook: "No one is sure why, but the link is strong. It shapes how the shoulder is checked and how injections are given.",
    short: "Frozen shoulder is more common in people with diabetes, and it is unclear why. Symptoms are often more severe and harder to treat. A steroid injection can raise blood sugar for a few days, so it is important to monitor it afterwards.",
    sections: [
      {
        heading: "A known link",
        paragraphs: [
          "Frozen shoulder is more common in people with diabetes. The NHS says it is unclear why this is, but it is important to have your regular diabetes check-ups to catch any problems early.",
          "It has been estimated that around 13 in every 100 people with diabetes have frozen shoulder.",
        ],
      },
      {
        heading: "Who is most affected",
        paragraphs: [
          "Diabetes UK says frozen shoulder is more common in people who have had diabetes for a long time, are older, or have had a heart attack.",
          "It is also more common in people with diabetes complications that affect the small blood vessels: retinopathy in the eyes, nephropathy in the kidneys and neuropathy in the nerves.",
        ],
      },
      {
        heading: "Often harder to treat",
        paragraphs: [
          "In people with diabetes, the symptoms are often more severe and harder to treat than in people without diabetes.",
          "Diabetes UK says it will often resolve over time, and it can be treated with painkillers, steroid injections, physiotherapy and, in some cases, surgery.",
        ],
      },
      {
        heading: "Checking for diabetes",
        paragraphs: [
          "Because frozen shoulder is more common in people with diabetes, a GP may consider testing for diabetes in someone with shoulder pain if diabetes is suspected.",
        ],
      },
      {
        heading: "Steroid injections and blood sugar",
        paragraphs: [
          "A steroid injection can raise your blood sugar levels for a few days. If you have diabetes, discuss this with your doctor or healthcare professional before the injection, and monitor your blood sugar afterwards.",
          "NICE guidance for GPs says injections may be put off until diabetes is well controlled, where possible. One hospital leaflet advises checking blood sugars carefully for the first 48 hours after hydrodilatation.",
        ],
      },
    ],
    helps: [
      "Keep up your regular diabetes check-ups.",
      "Tell the person giving a steroid injection that you have diabetes.",
      "Monitor your blood sugar levels closely after a steroid injection.",
      "Ask your GP about the treatments that can help, such as painkillers, steroid injections and physiotherapy.",
    ],
    tryThisWeek: [
      "Book your diabetes check-up.",
      "Mention diabetes before an injection.",
      "Check blood sugar after an injection.",
    ],
    ask: "Should my blood sugar be checked, and how should I monitor it after an injection?",
    interactive: {
      kind: "signs",
      title: "For my diabetes check-up",
      intro: "Tick any that apply. Frozen shoulder is more common with diabetes, so they are worth mentioning.",
      signs: [
        "Shoulder pain that is worse at night",
        "Stiffness making it hard to move my arm",
        "Shoulder pain that does not go away",
        "A steroid injection planned or recent",
        "Higher blood sugar after an injection",
      ],
      after: "Regular diabetes check-ups help catch any problems early.",
      copyHeading: "To mention at my diabetes check-up",
    },
    sources: [NHS_FS, CKS_CAUSES, DUK_JOINTS, CKS_DIAG, AU_STEROID, CKS_FS, WWL_HYDRO],
    quiz: {
      question: "What can a steroid injection do to blood sugar levels?",
      options: [{ text: "Raise them for a few days", right: true }, { text: "Lower them for a month" }, { text: "Nothing at all" }],
      why: "A steroid injection can raise your blood sugar levels for a few days.",
    },
  },
  {
    id: "fs-work",
    kicker: "Work and driving",
    question: "How do I manage work and driving with a frozen shoulder?",
    hook: "Small changes at a desk, help that employers can give, and what to know about driving after treatment.",
    short: "At work, moving regularly, setting up your desk well and avoiding manual work that hurts can help, and Access to Work may fund equipment. The DVLA needs to know about conditions that could affect your ability to drive safely. Plan a lift home after an injection or hydrodilatation.",
    sections: [
      {
        heading: "At work",
        paragraphs: [
          "Avoiding movements that make the pain worse may mean time off work or away from leisure activities for a while.",
          "At a desk or workbench, get up and move around every so often, and gently move your shoulders and neck through their full range of movement. Keep the keyboard and monitor directly in front of you, and the mouse within easy reach.",
        ],
      },
      {
        heading: "Help from your employer",
        paragraphs: [
          "Avoid any manual work that hurts while you are doing it. Your line manager, human resources department or occupational health department may be able to help.",
          "Arthritis UK says that if you have been diagnosed with a condition, your employer is legally required to make reasonable adjustments, such as changing your chair or equipment. Access to Work can also help you get or stay in work if you have a physical health condition, with a grant towards things like specialist equipment.",
        ],
      },
      {
        heading: "Driving and the DVLA",
        paragraphs: [
          "The DVLA needs to be told if you develop a notifiable medical condition or disability. Notifiable conditions are anything that could affect your ability to drive safely, and you can check online whether yours needs to be reported.",
          "An occupational therapist can advise on how equipment or adaptations could reduce the strain on your shoulder while you are driving.",
        ],
      },
      {
        heading: "After injections and operations",
        paragraphs: [
          "Numbness from a local anaesthetic can make it difficult to drive, so you may want to arrange transport home after a steroid injection.",
          "After hydrodilatation, one hospital leaflet advises not driving for the rest of that day, and says most people are usually back in work the next day. After an operation, your consultant will give you guidance on when you can return to work and driving.",
        ],
      },
    ],
    helps: [
      "Gently move your shoulders and neck through their full range of movement regularly at work.",
      "If you are on the phone a lot, use a headset rather than holding the receiver with your shoulder.",
      "Talk to your line manager, human resources or occupational health about adjustments.",
      "Check whether you are eligible for an Access to Work grant.",
      "Arrange transport home after a steroid injection.",
    ],
    tryThisWeek: [
      "Get up and move every so often.",
      "Ask about workplace adjustments.",
      "Plan a lift home after injections.",
    ],
    ask: "Is my shoulder affecting my ability to drive safely, and what should I tell my employer?",
    interactive: {
      kind: "scenarios",
      title: "At work and on the road",
      scenarios: [
        {
          id: "phone",
          situation: "You spend hours on the phone at your desk.",
          options: [{ text: "Use a headset", best: true }, { text: "Hold it with your shoulder" }],
          why: "When using the phone, do not hold the receiver to your head with your shoulder. If you are on the phone a lot, use a headset.",
        },
        {
          id: "manual",
          situation: "Part of your job is lifting that hurts your shoulder.",
          options: [{ text: "Talk to your manager or HR", best: true }, { text: "Carry on through the pain" }],
          why: "Avoid any manual work that hurts while you are doing it. Your line manager or human resources department should be able to help.",
        },
        {
          id: "hydro",
          situation: "You are having hydrodilatation this afternoon.",
          options: [{ text: "Arrange someone to drive you", best: true }, { text: "Drive yourself home" }],
          why: "One hospital leaflet advises not driving for the rest of that day, and to bring someone to drive you home.",
        },
        {
          id: "dvla",
          situation: "You are unsure whether your shoulder affects your driving.",
          options: [{ text: "Check the DVLA guidance online", best: true }, { text: "Ignore it" }],
          why: "Notifiable conditions are anything that could affect your ability to drive safely. You can check online whether yours needs to be reported.",
        },
      ],
    },
    sources: [AU_SHOULDER, CKS_FS, GOV_ATW, GOV_DVLA, GOV_HEALTH_DRIVING, AU_STEROID, WWL_HYDRO, WORCS_MUA],
    quiz: {
      question: "What does the DVLA count as a notifiable condition?",
      options: [{ text: "Anything that could affect safe driving", right: true }, { text: "Only conditions needing surgery" }, { text: "Any condition at all" }],
      why: "Notifiable conditions are anything that could affect your ability to drive safely.",
    },
  },
  {
    id: "fs-patience",
    kicker: "Recovery",
    question: "How long does a frozen shoulder take to get better?",
    hook: "Months, sometimes years. A slow recovery is normal, and there are signs worth checking in about.",
    short: "Frozen shoulder can take months or years to get better, but the pain and stiffness will usually go away eventually. For most people it settles in about one to three years. Keep using the shoulder, and check in with your healthcare provider if there is no progress within 6 to 12 weeks.",
    sections: [
      {
        heading: "Long, but usually temporary",
        paragraphs: [
          "Frozen shoulder can take months or years to get better. But the pain and stiffness will usually go away eventually.",
          "For most people it settles by itself in about one to three years. The British Elbow and Shoulder Society says the majority of people will eventually get better, with or without treatment.",
        ],
      },
      {
        heading: "How long it takes",
        paragraphs: [
          "NICE guidance for GPs says symptoms usually settle in 18 to 24 months, although some people still have some pain and stiffness for several years.",
          "Arthritis UK says the condition will usually resolve itself in time, but it may take as long as two to three years.",
        ],
      },
      {
        heading: "Keeping going",
        paragraphs: [
          "Most of the common causes of shoulder pain get better naturally over time. The Chartered Society of Physiotherapy says to be patient, as this can take several months.",
          "It is much better to keep using your shoulder than to stop activities completely. You may need to adjust how you do things, doing jobs in short bursts with regular breaks.",
        ],
      },
      {
        heading: "When to check in",
        paragraphs: [
          "The British Elbow and Shoulder Society says that if you are not making progress within 6 to 12 weeks, or your shoulder pain is getting worse, contact your healthcare provider.",
          "If you are still in pain after your physiotherapy sessions, go back to your GP or physiotherapist. They might prescribe more physiotherapy or another treatment.",
        ],
      },
      {
        heading: "Most people recover",
        paragraphs: [
          "Most people with frozen shoulder make a full recovery. For the 1 in 10 people whose shoulder does not improve, there is specialist treatment in hospital.",
          "Keep following any exercises from your GP or physiotherapist, and keep moving your shoulder, as keeping it still will make the pain worse.",
        ],
      },
    ],
    helps: [
      "Be patient: most shoulder problems get better naturally over time, though it can take several months.",
      "Keep using your shoulder, adjusting how you do things.",
      "Contact your healthcare provider if you are not making progress within 6 to 12 weeks.",
      "Go back to your GP or physiotherapist if you are still in pain after your sessions.",
    ],
    tryThisWeek: [
      "Keep using your shoulder gently.",
      "Adjust how you do things.",
      "Check in if there is no progress in 12 weeks.",
    ],
    ask: "Is my shoulder recovering as expected, and what should I do if it stalls?",
    interactive: {
      kind: "scenarios",
      title: "On the long road",
      scenarios: [
        {
          id: "no-progress",
          situation: "It is 12 weeks since you started treatment and nothing has changed.",
          options: [{ text: "Contact your healthcare provider", best: true }, { text: "Stop the exercises" }],
          why: "If you are not making progress within 6 to 12 weeks, or your shoulder pain is getting worse, contact your healthcare provider.",
        },
        {
          id: "stop",
          situation: "The shoulder is stiff and you feel like resting it completely.",
          options: [{ text: "Keep using it, adjusting tasks", best: true }, { text: "Stop using the arm" }],
          why: "It is much better to keep using your shoulder than to stop activities completely.",
        },
        {
          id: "after-physio",
          situation: "Your physiotherapy sessions have finished, but it still hurts.",
          options: [{ text: "Go back to your GP or physio", best: true }, { text: "Accept it will not improve" }],
          why: "If you are still in pain after your physiotherapy sessions, go back to your GP or physiotherapist.",
        },
        {
          id: "forever",
          situation: "A friend says a frozen shoulder never goes away.",
          options: [{ text: "It usually goes away eventually", best: true }, { text: "It is permanent" }],
          why: "Frozen shoulder can take months or years to get better. But the pain and stiffness will usually go away eventually.",
        },
      ],
    },
    sources: [NHS_FS, CKS_CAUSES, AU_SHOULDER, YORK_FROST, BESS_FS, CSP_LIVING, STH_FROST],
    quiz: {
      question: "What does the NHS say usually happens to the pain and stiffness?",
      options: [{ text: "It usually goes away eventually", right: true }, { text: "It always lasts for life" }, { text: "It goes within a week" }],
      why: "Frozen shoulder can take months or years to get better. But the pain and stiffness will usually go away eventually.",
    },
  },
];
