import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the ADHD in adults page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, the Royal
// College of Psychiatrists, ADHD UK and NICE (NG87), with GOV.UK for work and driving. ADHD is described as the
// NHS and the charities describe it: a neurodevelopmental condition and a difference in how the brain works,
// with strengths as well as challenges. mind.org.uk was not read (it answers automated reading with a bot
// check) and Rethink Mental Illness has no adult ADHD page, so neither is cited. Every answer ends its "What
// helps" list with the crisis routes exactly as the NHS gives them (999 or A&E, 111 mental health option,
// Samaritans 116 123, Shout 85258). General information only; it never replaces what a person's own GP or
// ADHD specialist tells them, and no medicine should be stopped or changed without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const adhduk = (label: string, path: string): LearnSource => ({ label: `ADHD UK: ${label}`, url: `https://adhduk.co.uk/${path}` });
const govuk = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_ADHD = nhs("ADHD in adults", "conditions/adhd-adults/");
const NHS_MPH_ABOUT = nhs("About methylphenidate for adults", "medicines/methylphenidate-adults/about-methylphenidate-for-adults/");
const NHS_MPH_WHO = nhs("Who can and cannot take methylphenidate for adults", "medicines/methylphenidate-adults/who-can-and-cannot-take-methylphenidate-for-adults/");
const NHS_MPH_HOW = nhs("How and when to take methylphenidate for adults", "medicines/methylphenidate-adults/how-and-when-to-take-methylphenidate-for-adults/");
const NHS_MPH_SIDE = nhs("Side effects of methylphenidate for adults", "medicines/methylphenidate-adults/side-effects-of-methylphenidate-for-adults/");
const NHS_MPH_QA = nhs("Common questions about methylphenidate for adults", "medicines/methylphenidate-adults/common-questions-about-methylphenidate-for-adults/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_MINDFULNESS = nhs("Mindfulness", "mental-health/self-help/tips-and-support/mindfulness/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const RCPSYCH_ADHD: LearnSource = { label: "Royal College of Psychiatrists: ADHD in adults", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/adhd-in-adults" };
const NICE_NG87: LearnSource = { label: "NICE: Attention deficit hyperactivity disorder: diagnosis and management (NG87), recommendations", url: "https://www.nice.org.uk/guidance/ng87/chapter/Recommendations" };
const NICE_PUBLIC: LearnSource = { label: "NICE: ADHD, the care you should expect (information for the public)", url: "https://www.nice.org.uk/guidance/ng87/informationforpublic" };

const ADHDUK_ABOUT = adhduk("About ADHD", "about-adhd/");
const ADHDUK_FAQ = adhduk("Frequently asked questions", "faq-adhd-uk/");
const ADHDUK_PATHWAYS = adhduk("Diagnosis pathways for adult ADHD", "diagnosis-pathways/");
const ADHDUK_RTC = adhduk("Right to Choose for ADHD and autism assessments", "right-to-choose/");
const ADHDUK_PRIVATE = adhduk("Private diagnosis for adult ADHD", "private-diagnosis/");
const ADHDUK_ADJUSTMENTS = adhduk("Reasonable adjustments", "reasonable-adjustments/");
const ADHDUK_WORK = adhduk("ADHD and work", "adhd-and-work/");
const ADHDUK_FINES = adhduk("ADHD debt and fines: appeal support letter", "adhd-fines-and-debt/");
const ADHDUK_SUPPORT = adhduk("Online (video) support groups and Facebook groups", "support/");
const ADHDUK_HELP = adhduk("Get mental health help now", "how-to-get-mental-health-help-now/");

const GOV_DRIVING = govuk("Attention deficit hyperactivity disorder (ADHD) and driving", "adhd-and-driving");
const GOV_DRUG_DRIVING = govuk("Drugs and driving: the law", "drug-driving-law");
const GOV_ATW = govuk("Access to Work: get support if you have a disability or health condition", "access-to-work");
const GOV_ATW_ELIGIBILITY = govuk("Access to Work: eligibility", "access-to-work/eligibility");
const GOV_ADJUSTMENTS = govuk("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");
const GOV_DISABILITY = govuk("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact Samaritans", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SHOUT: LearnSource = { label: "Shout 85258: Get help", url: "https://giveusashout.org/get-help/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.";

export const adhdAnswers: LearnArticle[] = [
  {
    id: "adhd-what-it-is",
    kicker: "Understanding",
    question: "What is ADHD, and what is going on in the brain?",
    hook: "ADHD shapes how you focus, how restless you feel and how quickly you act. It starts in childhood, and it is a difference in how the brain works.",
    short: "ADHD (attention deficit hyperactivity disorder) is a condition that can affect how you focus. Its symptoms involve paying attention, high energy levels and controlling impulses, and they usually start before the age of 12. It is a neurodevelopmental condition, and it can be managed in many ways.",
    sections: [
      {
        heading: "Three kinds of challenge",
        paragraphs: [
          "ADHD is a condition that can affect how you focus. If you have ADHD, you may have trouble with things like concentrating and sitting still.",
          "The Royal College of Psychiatrists describes three kinds of challenge. Inattention is finding it hard to concentrate. Hyperactivity is feeling restless and struggling to sit still. Impulsivity is saying or doing things without thinking about the consequences first.",
          "ADHD affects about 3 to 4 in every 100 adults, says the Royal College of Psychiatrists.",
        ],
      },
      {
        heading: "A difference in how the brain develops",
        paragraphs: [
          "ADHD is a neurodevelopmental disorder. These are conditions that can affect lots of different brain functions, including learning, communication, movement, emotions and attention.",
          "Some people with ADHD call themselves neurodivergent. Neurodiversity describes the range of different ways our brains work.",
          "Neurodevelopmental conditions start in childhood and for many people are life-long, so they cannot be cured. Instead, people can benefit from support and changes to their environment.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "The cause of ADHD is not always known. It may be caused by genetic differences and often runs in families.",
          "For most people, ADHD comes from a combination of genetic and environmental factors, such as difficulties in the womb, birth complications or a brain injury. Being born premature, before 37 weeks of pregnancy, is also linked to it.",
        ],
      },
      {
        heading: "Not just a phase, and not a fashion",
        paragraphs: [
          "Most people struggle to concentrate at some point, for example after a bad night's sleep. For people with ADHD, these challenges usually begin in childhood, carry on as they grow up and affect many areas of their life.",
          "Some people wrongly say ADHD is fashionable or made up. In fact, a doctor first described a disorder resembling ADHD in the 18th century, and health professionals and scientists around the world agree that it is a valid diagnosis.",
        ],
      },
      {
        heading: "Strengths as well as struggles",
        paragraphs: [
          "It can help to think of ADHD not just as a deficit but as a difference. Some people can hyperfocus on things they are interested in, perform better in a crisis, or find creative approaches to problems.",
          "ADHD UK says ADHD is not curable, but with treatment the symptoms can be significantly lessened. It can be managed in many ways, including lifestyle changes, changes at work, or medicines.",
        ],
      },
    ],
    helps: [
      "If ADHD symptoms are affecting your studies, work or relationships, make an appointment with a GP.",
      "Learn about ADHD from reliable sources, as the quality of online information varies.",
      "Tell the people in your life about the things you do and do not find helpful.",
      "You may find it helpful to talk to friends and family about your ADHD.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment if it affects you.",
      "Read about ADHD from a trusted source.",
      "Tell someone what helps you.",
    ],
    ask: "Could my difficulties with focus, restlessness or impulses be ADHD?",
    interactive: {
      kind: "signs",
      title: "Signs you may recognise",
      intro: "Tick any that sound familiar. The NHS groups the signs of ADHD into inattention, hyperactivity and impulsiveness.",
      signs: ["Being easily distracted or forgetful", "Finding it hard to organise your time", "Finding it hard to finish tasks", "Often losing your wallet, phone or keys", "A lot of energy, or feeling restless", "Being very talkative or interrupting", "Quick decisions without thinking ahead"],
      after: "Most people have some of these at times. In ADHD they usually start before the age of 12 and affect many areas of life. Only a specialist can diagnose it, so take your list to a GP.",
      copyHeading: "ADHD signs I recognise in myself",
    },
    sources: [NHS_ADHD, RCPSYCH_ADHD, ADHDUK_FAQ, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When do ADHD symptoms usually start?",
      options: [{ text: "Before the age of 12", right: true }, { text: "Only in adulthood" }, { text: "After the age of 50" }],
      why: "Symptoms of ADHD usually start before the age of 12.",
    },
  },
  {
    id: "adhd-adults",
    kicker: "In adults",
    question: "What does ADHD look like in adults?",
    hook: "In adults, ADHD can look like an inner restlessness, missed deadlines and lost keys. For many people it goes unnoticed for years.",
    short: "ADHD often lasts into adulthood. Hyperactive symptoms become less of a challenge for some people over time, while inattentive symptoms tend to become more of an issue in the teenage years and adulthood. ADHD is thought to be recognised less often in women, and some people are not diagnosed until they are adults.",
    sections: [
      {
        heading: "How it changes with age",
        paragraphs: [
          "ADHD often lasts into adulthood. Hyperactive and impulsive symptoms tend to be more common in childhood and become less of a challenge for some people over time. Inattentive symptoms tend to become more of an issue in the teenage years and adulthood.",
          "In adults, hyperactivity may appear as extreme restlessness. Rather than running about, an adult may have a sustained inner sense of restlessness.",
          "ADHD UK says that around 65 in every 100 children with ADHD keep some impairments in adulthood.",
        ],
      },
      {
        heading: "Everyday signs",
        paragraphs: [
          "Signs include a lack of attention to detail, struggling to focus or to listen when spoken to, trouble organising tasks, avoiding tasks that need mental effort over a long time, and losing important things.",
          "Others include fidgeting, feeling restless, talking excessively, blurting out answers, struggling to wait your turn and interrupting others. For a diagnosis, symptoms need to cause significant difficulties in at least two areas of daily life, such as home, work or relationships.",
          "Not all of these symptoms are obvious to others. People with ADHD often develop ways to hide them, which can be very exhausting and affect their mental health.",
        ],
      },
      {
        heading: "Why it can show up later",
        paragraphs: [
          "As young people grow up, they usually face more challenges and receive less support. Someone who lived at home with lots of support might not have problems until they move out.",
          "New demands like work, living independently, relationships, finances and parenthood can increase stress. As demands rise, people with ADHD are more likely to struggle to keep up and can become overwhelmed, but appropriate support can help avoid this.",
        ],
      },
      {
        heading: "Women and later diagnosis",
        paragraphs: [
          "ADHD is thought to be recognised less often in women than men. This may be because women with ADHD more commonly have inattentive symptoms, which can be harder to recognise than hyperactive symptoms.",
          "Girls and women may be more likely to have undiagnosed ADHD, not be referred for assessment, or receive an incorrect diagnosis of another condition. NICE says ADHD is usually spotted in childhood, but some people are not diagnosed until they are adults.",
        ],
      },
      {
        heading: "What it can affect",
        paragraphs: [
          "Signs that someone's ADHD is unsupported can include poor time management, missed appointments, unfinished projects, difficulty managing money, frequent accidents and low self-esteem.",
          "If your ADHD symptoms are affecting your studies, work or relationships, a GP can help you find out what support is available.",
        ],
      },
    ],
    helps: [
      "See a GP if ADHD symptoms are affecting your studies, work or relationships.",
      "Try ADHD UK's adult screening questionnaire to get an idea of whether ADHD might affect you.",
      "Tell the people in your life about the things you do and do not find helpful.",
      "Get enough good-quality sleep, as not sleeping well can make ADHD symptoms worse.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Try the ADHD UK screener.",
      "Protect your sleep this week.",
    ],
    ask: "Could my lifelong difficulties with focus and organisation be ADHD, even though nobody noticed when I was a child?",
    interactive: {
      kind: "timeline",
      title: "How ADHD can change over a lifetime",
      steps: [
        { id: "child", when: "Childhood", title: "Often first noticed at school", points: ["Symptoms usually start before the age of 12.", "Hyperactive signs tend to be more common now."] },
        { id: "teen", when: "Teenage years", title: "Inattention comes to the fore", points: ["Inattentive symptoms tend to become more of an issue.", "Fidgeting may replace larger movements."] },
        { id: "young", when: "Growing up", title: "More challenges, less support", points: ["Work, living alone, relationships and money.", "Problems may only start after leaving home."] },
        { id: "adult", when: "Adulthood", title: "An inner restlessness", points: ["Hyperactivity may feel like inner restlessness.", "Support can stop rising demands becoming overwhelming."] },
      ],
    },
    sources: [NHS_ADHD, RCPSYCH_ADHD, ADHDUK_ABOUT, NICE_PUBLIC, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Why may ADHD be recognised less often in women?",
      options: [{ text: "They more often have inattentive symptoms, which are harder to spot", right: true }, { text: "Women cannot have ADHD" }, { text: "ADHD only starts after the age of 40" }],
      why: "This may be because women with ADHD more commonly have inattentive symptoms, which can be harder to recognise than hyperactive symptoms.",
    },
  },
  {
    id: "adhd-assessment",
    kicker: "Diagnosis",
    question: "How do I get assessed for ADHD as an adult?",
    hook: "It starts with a conversation with a GP. Waits can be long, but in England you may be able to choose a provider with a shorter list.",
    short: "If ADHD symptoms are affecting your life, see a GP, who may refer you to a specialist such as a psychiatrist. The assessment looks at your symptoms now and in childhood, and how they affect different areas of your life. Waiting times vary, and in England the Right to Choose scheme may help you find a clinic with a shorter wait.",
    sections: [
      {
        heading: "Start with a GP",
        paragraphs: [
          "If your ADHD symptoms are affecting your studies, work or relationships, make an appointment with a GP. They will ask about your symptoms and how they affect your life, and may consider other conditions that could be causing them, such as autism, Tourette's or anxiety.",
          "ADHD UK suggests an open and frank conversation that covers any mental health concerns, not just whether it is ADHD. Ask how long the waiting list is likely to be, so you can consider other options if needed.",
          "Online questionnaires can help with the process, but ADHD can only be accurately diagnosed with a full interview and assessment.",
        ],
      },
      {
        heading: "The assessment itself",
        paragraphs: [
          "Your appointment will be with an ADHD specialist, such as a psychiatrist. They will ask about the history of your symptoms, particularly whether they started when you were a child, and how they affected you at school.",
          "The assessment looks at work and education, family and friends, and your medical history, including any mental health issues. The specialist may want to contact someone who knows you well, such as a family member or close friend.",
          "ADHD UK says it usually involves a 45 to 90 minute discussion. School reports and people who knew you as a child are useful, but they are not an absolutely essential part of a diagnosis.",
        ],
      },
      {
        heading: "Waiting, and Right to Choose",
        paragraphs: [
          "Waiting times vary, and you may have to wait several months or years to access ADHD specialist services. How long you wait might depend on where you live.",
          "In England, you have a legal right to choose who does your NHS ADHD assessment. If your local wait is long, your GP can refer you to another NHS-approved provider, and the NHS pays. ADHD UK says some NHS areas have started limiting how many people can use it.",
          "Right to Choose only applies in England. To use it, you need to be registered with a GP in England and not already be under a service for the same condition.",
        ],
      },
      {
        heading: "If you go private",
        paragraphs: [
          "Some people pay for a private assessment. ADHD UK recommends checking that the clinician is registered with the General Medical Council.",
          "Specialist NHS adult ADHD services check that a private report includes all the detail they need before accepting you. So before a private assessment, make sure it will be accepted by your local NHS service.",
        ],
      },
      {
        heading: "After the assessment",
        paragraphs: [
          "If you are diagnosed, the specialist will talk to you about what this means and what help and support may be available. Many people feel relief at an explanation, alongside frustration or sadness that it was not noticed sooner.",
          "If your GP refuses a referral, ADHD UK suggests asking for a second GP opinion, or talking it through at one of its free online drop-in advice clinics.",
        ],
      },
    ],
    helps: [
      "Before the appointment, write down why you think you have ADHD, any other mental health concerns, your mental health history and any family mental health issues.",
      "Ask your GP how long the waiting list is likely to be.",
      "In England, ask your GP about Right to Choose if the local wait is long.",
      "If you go private, check the clinician is on the General Medical Council register and that your local NHS service will accept the report.",
      "If your GP refuses a referral, you can ask for a second GP opinion.",
      CRISIS,
    ],
    tryThisWeek: [
      "Write down why you think it is ADHD.",
      "Ask your GP about the waiting list.",
      "Ask about Right to Choose in England.",
    ],
    ask: "Can you refer me for an ADHD assessment, and how long is the wait here?",
    interactive: {
      kind: "timeline",
      title: "From first appointment to diagnosis",
      steps: [
        { id: "gp", when: "Step 1", title: "See a GP", points: ["They ask about your symptoms and how they affect your life.", "They may consider autism, Tourette's or anxiety."] },
        { id: "refer", when: "Step 2", title: "A referral", points: ["To a specialist ADHD service.", "In England, Right to Choose may shorten the wait."] },
        { id: "wait", when: "Step 3", title: "The wait", points: ["It can be several months or years.", "It may depend on where you live."] },
        { id: "assess", when: "Step 4", title: "The assessment", points: ["Usually a 45 to 90 minute discussion.", "Your childhood, work, family and health."] },
        { id: "after", when: "Step 5", title: "What happens next", points: ["What a diagnosis means for you.", "What help and support may be available."] },
      ],
    },
    sources: [NHS_ADHD, ADHDUK_PATHWAYS, RCPSYCH_ADHD, ADHDUK_FAQ, ADHDUK_RTC, ADHDUK_PRIVATE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Who carries out an adult ADHD assessment?",
      options: [{ text: "An ADHD specialist, such as a psychiatrist", right: true }, { text: "A pharmacist" }, { text: "An online quiz on its own" }],
      why: "Your appointment will be with an ADHD specialist, such as a psychiatrist.",
    },
  },
  {
    id: "adhd-other-conditions",
    kicker: "Other conditions",
    question: "Why does ADHD so often come with anxiety, depression or autism?",
    hook: "ADHD rarely comes on its own. Other conditions can hide it, and untreated ADHD can make them harder.",
    short: "People with ADHD often have other conditions too, such as anxiety, depression, addictions or a learning difficulty like dyslexia. Someone with one neurodevelopmental condition, such as ADHD, is more likely to have another, such as autism. Other diagnoses can make ADHD harder to spot, so it helps to look at the whole picture.",
    sections: [
      {
        heading: "More common together",
        paragraphs: [
          "People with ADHD may often have other conditions too, such as depression, anxiety or addictions, or a learning difficulty such as dyslexia.",
          "Research shows other conditions are more common in people with ADHD, including bipolar disorder, substance use disorders, disordered eating, sleep disorders, asthma, allergies and joint hypermobility.",
        ],
      },
      {
        heading: "Autism and other neurodevelopmental conditions",
        paragraphs: [
          "People who have one neurodevelopmental disorder are more likely to have another, such as autism, coordination difficulties, speech and language disorders, Tourette's syndrome, dyslexia or dyscalculia.",
          "Being autistic is one of the things linked to ADHD. A GP may consider whether autism, Tourette's or anxiety could be causing your symptoms, to help you get the right care.",
          "NICE says people with ADHD and anxiety, tics or autism should be offered the same medicine choices as other people with ADHD.",
        ],
      },
      {
        heading: "Anxiety and depression",
        paragraphs: [
          "People with ADHD may be more likely to have mental health issues such as anxiety and depression. Anxiety and depression can make ADHD symptoms worse.",
          "In people with ADHD, regular exercise has been shown to significantly reduce symptoms of anxiety and depression.",
        ],
      },
      {
        heading: "When ADHD gets missed",
        paragraphs: [
          "Some people are diagnosed with anxiety, depression or a substance use disorder when this only explains part of their difficulties. When this happens, underlying ADHD can be missed.",
          "If ADHD is not recognised or treated properly, it can negatively affect mental and physical wellbeing. ADHD UK notes that trauma causes changes that can be confused with ADHD, although they are fundamentally very different.",
        ],
      },
      {
        heading: "Looking after your mental health",
        paragraphs: [
          "People with ADHD are also at higher risk of suicide. If you are feeling like you want to end your life, it is important to tell someone, and help is available right now.",
          "NICE says that when someone with ADHD also has another mental health or neurodevelopmental condition, medicine doses should be adjusted more slowly, with more frequent monitoring.",
        ],
      },
    ],
    helps: [
      "Tell the specialist about any other conditions you have, as they could affect your ADHD.",
      "Make time for physical activities you enjoy, as exercise helps reduce symptoms of anxiety and depression.",
      "If you think you have ADHD and it is having a negative effect on your life, speak to your GP.",
      "If you are feeling like you want to end your life, tell someone. You do not have to struggle alone.",
      CRISIS,
    ],
    tryThisWeek: [
      "List your other diagnoses for the specialist.",
      "Do an activity you enjoy.",
      "Talk to your GP.",
    ],
    ask: "Could ADHD be part of what is going on, alongside my anxiety or depression?",
    interactive: {
      kind: "flip-cards",
      title: "Conditions that often come with ADHD",
      intro: "Turn each card to see how each condition can link with ADHD.",
      cards: [
        { id: "anxiety", front: "Anxiety", when: "More likely with ADHD", back: "Anxiety can make ADHD symptoms worse. In people with ADHD, regular exercise can help reduce it." },
        { id: "depression", front: "Depression", when: "More likely with ADHD", back: "Depression can make ADHD symptoms worse, and a depression diagnosis can sometimes hide underlying ADHD." },
        { id: "autism", front: "Autism", when: "Another neurodevelopmental condition", back: "Having one neurodevelopmental condition makes another more likely. Being autistic is linked to ADHD." },
        { id: "dyslexia", front: "Dyslexia and dyscalculia", when: "Learning difficulties", back: "People with ADHD may also have a learning difficulty such as dyslexia." },
        { id: "tourettes", front: "Tourette's and tics", when: "Another neurodevelopmental condition", back: "A GP may consider Tourette's when looking at what is causing your symptoms." },
        { id: "substance", front: "Addictions", when: "More common with ADHD", back: "A substance use diagnosis may only explain part of someone's difficulties, and ADHD can be missed." },
      ],
    },
    sources: [NHS_ADHD, RCPSYCH_ADHD, NICE_NG87, ADHDUK_FAQ, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What can anxiety and depression do to ADHD symptoms?",
      options: [{ text: "Make them worse", right: true }, { text: "Cure them" }, { text: "Have no effect at all" }],
      why: "Anxiety and depression can make your ADHD symptoms worse.",
    },
  },
  {
    id: "adhd-medicines",
    kicker: "Treatment",
    question: "What ADHD medicines are there, and what are they like to take?",
    hook: "Medicine does not suit everyone, but many people find it very helpful. It is started slowly by a specialist and checked regularly.",
    short: "The main ADHD medicines for adults are lisdexamfetamine and methylphenidate, which are stimulants. They are started and monitored by an ADHD specialist, beginning with a low dose that is increased gradually. If they do not work or are hard to take, a non-stimulant such as atomoxetine may be offered, and none should be stopped suddenly without speaking to your doctor.",
    sections: [
      {
        heading: "Not everyone needs medicine",
        paragraphs: [
          "Not everyone needs or wants to take medicine to help manage their ADHD symptoms. NICE says medicine should be offered to adults whose symptoms still cause significant problems after changes to their environment have been made and reviewed.",
          "Many people with ADHD who use medicine find it very helpful, but some choose not to take it or are unable to. All medicines have side effects, and some people notice them more than others.",
        ],
      },
      {
        heading: "Stimulants",
        paragraphs: [
          "NICE recommends lisdexamfetamine or methylphenidate as the first medicines to offer adults with ADHD. These are stimulants, as is dexamfetamine.",
          "Stimulants increase the availability of the brain chemicals dopamine and noradrenaline in areas that help control attention and behaviour. They strengthen a part of the brain that helps control the areas that drive hyperactivity.",
          "There is good evidence for stimulants, and in most people they are effective, safe and well tolerated. You will usually be able to tell quickly whether they help.",
        ],
      },
      {
        heading: "Finding the right dose",
        paragraphs: [
          "You will start on a low dose, and your doctor will usually increase it gradually until you find the dose that works best for you. This means it might take a few weeks to feel the full effect.",
          "Once the dose is right, methylphenidate should start to work within 30 to 60 minutes of taking it. You may need to try more than one medicine, and NICE suggests a switch may be considered after a 6-week trial at an adequate dose.",
          "Methylphenidate is a controlled drug, so you may have to prove your identity when collecting it, and you have to collect your prescription within 28 days. It is best to stick to the same brand, as different brands release the medicine differently.",
        ],
      },
      {
        heading: "Non-stimulants",
        paragraphs: [
          "Atomoxetine and guanfacine are non-stimulant medicines. They tend to take longer to start working, and are generally used if stimulants have not worked or are difficult to take.",
          "NICE says guanfacine should not be offered to adults without advice from a specialist tertiary ADHD service.",
        ],
      },
      {
        heading: "Taking it safely",
        paragraphs: [
          "Do not stop taking methylphenidate suddenly without speaking to your doctor, as you may get withdrawal symptoms such as depression. Your doctor will usually help you reduce the dose gradually.",
          "Try not to drink alcohol while taking methylphenidate, as it can increase its effects and side effects. Getting ADHD medicine without a prescription can be dangerous, as you may not get what you asked for and will not have the monitoring you need.",
          "A GP may be able to take over prescribing, but only if there is a shared care agreement between the GP and the ADHD specialist.",
        ],
      },
    ],
    helps: [
      "Take your medicine as prescribed, and do not take 2 doses to make up for a forgotten one.",
      "If you forget doses often, set an alarm, or ask your pharmacist about other ways to remember.",
      "Talk to your doctor before taking any supplements, and before stopping your medicine.",
      "Try not to drink alcohol while taking methylphenidate.",
      "Only take ADHD medicine prescribed for you, so a doctor can check it is working and monitor it.",
      CRISIS,
    ],
    tryThisWeek: [
      "Set an alarm for your doses.",
      "Skip a missed dose; never double up.",
      "Avoid alcohol with your medicine.",
    ],
    ask: "Which medicine would suit me, how will we find the right dose, and could my GP take over prescribing?",
    interactive: {
      kind: "flip-cards",
      title: "ADHD medicines, card by card",
      intro: "Turn each card to see when each medicine is used and what to know.",
      cards: [
        { id: "methylphenidate", front: "Methylphenidate", when: "A first choice for adults", back: "A stimulant. Once the dose is right, it should start to work within 30 to 60 minutes." },
        { id: "lisdexamfetamine", front: "Lisdexamfetamine", when: "A first choice for adults", back: "A stimulant. NICE suggests a switch between it and methylphenidate if one has not helped enough after 6 weeks." },
        { id: "dexamfetamine", front: "Dexamfetamine", when: "If lisdexamfetamine's long effect does not suit", back: "A stimulant, for people who respond to lisdexamfetamine but cannot tolerate its longer effect." },
        { id: "atomoxetine", front: "Atomoxetine", when: "If stimulants do not work or suit you", back: "A non-stimulant. It tends to take longer to start working than stimulants." },
        { id: "guanfacine", front: "Guanfacine", when: "Only with tertiary specialist advice", back: "A non-stimulant. NICE says adults are only offered it with advice from a tertiary ADHD service." },
      ],
    },
    sources: [NHS_ADHD, NICE_NG87, RCPSYCH_ADHD, NHS_MPH_ABOUT, NHS_MPH_QA, NHS_MPH_HOW, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How should methylphenidate be stopped?",
      options: [{ text: "Only with your doctor, usually reducing the dose gradually", right: true }, { text: "Suddenly, whenever you like" }, { text: "By doubling the dose first" }],
      why: "Only stop taking methylphenidate if your doctor advises you to. They'll usually help you reduce your dose gradually until you stop completely.",
    },
  },
  {
    id: "adhd-therapy",
    kicker: "Therapy",
    question: "Can CBT or coaching help with ADHD?",
    hook: "CBT can help with organisation, time and emotions. Coaching and occupational therapy can help build the daily skills around them.",
    short: "Talking therapies, such as cognitive behavioural therapy (CBT) or mindfulness, may be recommended for adults with ADHD. CBT can help with organisation, time management, emotions, attention and impulsivity, and tends to work best alongside medicine. Coaches and occupational therapists can also help with daily skills.",
    sections: [
      {
        heading: "What CBT can help with",
        paragraphs: [
          "CBT is a type of talking therapy where a therapist helps you to change how you think and act. In ADHD, it can help with organisational and time management skills, emotional regulation, understanding other people's perspectives, and strategies for attention and impulsivity.",
          "In ADHD, CBT tends to be most effective when it is combined with medication. NICE says therapy may also be considered for adults who have chosen not to take medicine, find it hard to keep taking it, or have found it ineffective.",
        ],
      },
      {
        heading: "Other therapies",
        paragraphs: [
          "Other therapies that can help include psychoeducation courses and mindfulness. Mindfulness means paying more attention to the present moment, to your own thoughts and feelings, and to the world around you.",
          "Many people find mindfulness helpful, but it is not right for everyone. Some people find it easier to cope with an over-busy mind while doing gentle yoga or walking.",
        ],
      },
      {
        heading: "Coaching and occupational therapy",
        paragraphs: [
          "Coaches or mentors can help with building daily life skills, such as time management. Some specialise in ADHD, but coaching is self-regulated, so quality and expertise vary.",
          "Occupational therapists can help people with ADHD organise their surroundings, manage their time, plan their schedules and stick to planned activities. You might be able to get a referral for free occupational therapy from the NHS or social services, depending on your circumstances.",
        ],
      },
      {
        heading: "How to get therapy",
        paragraphs: [
          "You can get CBT for free on the NHS, and you do not need a diagnosed mental health condition. For many problems, such as anxiety and depression, you can refer yourself to NHS talking therapies if you are 18 or over, or 16 or over in some areas.",
          "When looking for a therapist, find out whether they know about ADHD or are willing to learn. Forgetfulness could mean missing appointments, and tasks between sessions can be a struggle, so it helps if they understand.",
        ],
      },
      {
        heading: "Getting the most from it",
        paragraphs: [
          "You will usually have between 5 and 15 sessions of CBT. You will usually be asked to practise what you have learned between sessions, as this is important for CBT to work, and to keep using the skills after the course ends.",
          "NICE suggests talking through what might get in the way, such as the time and organisation therapy needs, and planning around it, for example by scheduling sessions to cause less inconvenience.",
        ],
      },
    ],
    helps: [
      "Ask whether CBT could help you, as it tends to work best combined with medication.",
      "Look for a therapist who knows about ADHD, or is willing to learn.",
      "Practise what you learn between sessions, and keep using the skills afterwards.",
      "Check a coach's experience with ADHD, as coaching services vary in quality.",
      "Try a few minutes of mindfulness, such as noticing the sensations as you walk.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask whether CBT could help you.",
      "Practise one skill between sessions.",
      "Try a mindful walk.",
    ],
    ask: "Could I be referred for CBT or occupational therapy for my ADHD?",
    interactive: {
      kind: "flip-cards",
      title: "Therapy and support, card by card",
      intro: "Turn each card to see what each one can help with.",
      cards: [
        { id: "cbt", front: "CBT", when: "Often alongside medicine", back: "Helps with organisation, time management, emotions, attention and impulsivity." },
        { id: "psychoeducation", front: "Psychoeducation", when: "Courses about ADHD", back: "One of the psychological therapies the Royal College of Psychiatrists lists for managing ADHD." },
        { id: "mindfulness", front: "Mindfulness", when: "For an over-busy mind", back: "Paying attention to the present moment. Helpful for many people, but not right for everyone." },
        { id: "coaching", front: "Coaching", when: "Building daily skills", back: "Helps with skills such as time management. Quality varies, as coaching is self-regulated." },
        { id: "ot", front: "Occupational therapy", when: "Organising home and routine", back: "Helps with time, planning and sticking to activities. May be free through the NHS or social services." },
      ],
    },
    sources: [NHS_CBT, RCPSYCH_ADHD, NICE_NG87, NHS_MINDFULNESS, NHS_TT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When does CBT tend to work best in ADHD?",
      options: [{ text: "When it is combined with medication", right: true }, { text: "Only when no medicine is taken" }, { text: "Only in children" }],
      why: "In ADHD, CBT tends to be most effective when it is combined with medication.",
    },
  },
  {
    id: "adhd-organising",
    kicker: "Daily life",
    question: "What tools help with organising everyday life?",
    hook: "Reminders, routines and a calmer space can do some of the remembering for you. Changing your surroundings can matter as much as trying harder.",
    short: "Changes to your surroundings can be one of the most important parts of ADHD support. Ideas include reminders such as apps and alarms, written instructions, blocking out time to focus and reducing distractions. An occupational therapist or coach can help you build a routine that works for you.",
    sections: [
      {
        heading: "Change the surroundings, not just yourself",
        paragraphs: [
          "The Royal College of Psychiatrists says changes to your environment can be one of the most important parts of ADHD support. There is no single solution, so it helps to think about how your symptoms affect different areas of your life.",
          "NICE describes these changes as things like reducing distractions with headphones, changing lighting and noise, working in shorter periods with movement breaks, and backing up spoken requests with written instructions.",
        ],
      },
      {
        heading: "Reminders that do the remembering",
        paragraphs: [
          "NICE suggests visual reminders, such as apps, alarms, clocks, pill dispensers, or notes on calendars or fridges. Doing things as part of a daily routine, such as before meals or after brushing your teeth, can help too.",
          "ADHD UK's ideas for work include calendar tools, dedicated reminder systems and project management software.",
        ],
      },
      {
        heading: "Protecting your focus",
        paragraphs: [
          "ADHD UK suggests blocking out time with no disturbances, and blocking out longer stretches to give you chances to hyperfocus. Turning off reminders and phones for a while can help.",
          "Noise can be so distracting that it is impossible to focus. Ideas include a quieter space, sitting away from busy areas, and noise cancelling headphones, although some people find these do not help enough.",
        ],
      },
      {
        heading: "Money, bills and paperwork",
        paragraphs: [
          "Difficulty managing money can be a sign of unsupported ADHD. ADHD UK says small fines can grow into large debts when it is hard to focus on dealing with them, and it has a support letter for people in this situation.",
          "A specialist debt advice charity, such as StepChange, can also help.",
        ],
      },
      {
        heading: "Help to build a routine",
        paragraphs: [
          "An occupational therapist can help you organise your physical and social environment, manage your time and plan your schedule. Coaches can help with daily life skills such as time management.",
          "Sleep matters too, as not sleeping well can make ADHD symptoms worse. Going to bed and getting up at the same time each day, including at weekends, can help.",
        ],
      },
    ],
    helps: [
      "Use visual reminders, such as apps, alarms, or notes on calendars and fridges.",
      "Tie tasks, like taking medicine, to part of your daily routine.",
      "Block out time with no disturbances, and turn off reminders and phones while you focus.",
      "Ask for written instructions as well as spoken ones.",
      "Go to bed and get up at the same time each day, including at weekends.",
      CRISIS,
    ],
    tryThisWeek: [
      "Set up one reminder app or alarm.",
      "Block out an hour with no disturbances.",
      "Keep the same bedtime all week.",
    ],
    ask: "Could I be referred to an occupational therapist to help with my routines?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "medicine",
          situation: "You keep forgetting to take your morning medicine.",
          options: [{ text: "Tie it to brushing your teeth, with an alarm", best: true }, { text: "Rely on remembering it" }],
          why: "NICE suggests visual reminders such as apps or alarms, and taking medicine as part of a daily routine, such as after brushing your teeth.",
        },
        {
          id: "messages",
          situation: "Messages keep breaking your concentration.",
          options: [{ text: "Block out time and turn notifications off", best: true }, { text: "Answer each one as it arrives" }],
          why: "ADHD UK suggests blocking out time with no disturbances, and turning off reminders and phones.",
        },
        {
          id: "instructions",
          situation: "You are given a long list of tasks out loud.",
          options: [{ text: "Ask for them in writing too", best: true }, { text: "Try to remember them all" }],
          why: "Backing up spoken requests with written instructions is one of the changes NICE describes.",
        },
        {
          id: "letter",
          situation: "A letter about a fine sits unopened on the side.",
          options: [{ text: "Deal with it early, or ask for help", best: true }, { text: "Leave it for another week" }],
          why: "Small fines can grow into large debts. ADHD UK has a support letter, and debt advice charities can help.",
        },
      ],
    },
    sources: [RCPSYCH_ADHD, NICE_NG87, ADHDUK_ADJUSTMENTS, ADHDUK_FINES, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What kind of reminders does NICE suggest?",
      options: [{ text: "Visual reminders, such as apps, alarms or notes on the fridge", right: true }, { text: "None: willpower is enough" }, { text: "Only reminders from other people" }],
      why: "NICE suggests visual reminders, such as apps, alarms, clocks, pill dispensers, or notes on calendars or fridges.",
    },
  },
  {
    id: "adhd-health-checks",
    kicker: "Monitoring",
    question: "What health checks will I have on ADHD medicine?",
    hook: "ADHD medicine can nudge up blood pressure and heart rate, so regular checks are part of taking it safely.",
    short: "Before starting ADHD medicine, you should have a check of your mental and physical health, including your pulse, blood pressure and weight. Methylphenidate can cause a small increase in blood pressure and heart rate, so your doctor will usually check these every 6 months. A medicine that is working for you should be reviewed at least once a year.",
    sections: [
      {
        heading: "Before you start",
        paragraphs: [
          "Before starting medicine, the person treating you should check your mental and physical health. NICE says this includes your medical history, current medicines, height and weight, pulse and blood pressure, and a check of your heart.",
          "NICE says a heart tracing, called an ECG, is not needed before starting unless there is a particular reason, such as certain heart symptoms or some heart problems in the family.",
          "Check with your doctor before starting methylphenidate if you have heart problems, high blood pressure, an overactive thyroid, epilepsy, glaucoma, tics, mental health problems, or problems with drugs or alcohol.",
        ],
      },
      {
        heading: "Blood pressure, pulse and weight",
        paragraphs: [
          "Methylphenidate can cause a small increase in your blood pressure and heart rate. Your doctor will usually measure your blood pressure and pulse every 6 months.",
          "NICE also says heart rate and blood pressure should be checked before and after each dose change. For adults, weight should be measured every 6 months.",
          "Loss of appetite is a common side effect, and you may notice some weight loss in the first few months. Taking it with a meal may help, and speak to your doctor if you are losing a lot of weight.",
        ],
      },
      {
        heading: "A yearly review",
        paragraphs: [
          "Once you are taking a medicine that works for you, it should be reviewed at least once a year. The review looks at whether you still need it, how well it works through the day, and any side effects.",
          "NICE encourages people to keep a record of side effects, for example with a checklist, and to note changes in sleep, for example with a sleep diary.",
        ],
      },
      {
        heading: "When to get help quickly",
        paragraphs: [
          "Call your doctor or 111 straight away if you have mood or personality changes, a fast or irregular heartbeat, start seeing or hearing things that are not real, or start to get facial tics.",
          "Call 999 or go to A&E if you have chest pains, a fit or seizure, symptoms of a stroke, or thoughts about harming yourself or others.",
        ],
      },
    ],
    helps: [
      "Tell your doctor about any heart problems, high blood pressure or other conditions before you start.",
      "Keep a list of side effects, and a sleep diary if your sleep changes.",
      "Go to your blood pressure and pulse checks, usually every 6 months.",
      "Talk to your doctor every year about how well the medicine is working and whether you still need it.",
      "If you find it hard to sleep, try taking the last dose of methylphenidate more than 6 hours before bedtime.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book your next blood pressure check.",
      "Start a side effect and sleep diary.",
      "Note questions for your yearly review.",
    ],
    ask: "Which checks will I have before and during treatment, and how often?",
    interactive: {
      kind: "signs",
      title: "Side effects to tell your doctor about",
      intro: "Tick any you notice on ADHD medicine, so you can take the list to your doctor.",
      signs: ["Headaches that are severe or do not go away", "Trouble sleeping", "Loss of appetite, or losing a lot of weight", "Mood changes, such as feeling irritable or anxious", "A fast or irregular heartbeat", "New facial tics", "Seeing or hearing things that are not real"],
      after: "Call your doctor or 111 straight away about mood changes, palpitations, hallucinations or tics. Call 999 or go to A&E for chest pains, a fit or stroke symptoms.",
      copyHeading: "Side effects to raise with my doctor",
    },
    sources: [RCPSYCH_ADHD, NICE_NG87, NHS_MPH_WHO, NHS_MPH_SIDE, NHS_MPH_HOW, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How often will your doctor usually check your blood pressure and pulse on methylphenidate?",
      options: [{ text: "Every 6 months", right: true }, { text: "Only once, before you start" }, { text: "Every day" }],
      why: "Methylphenidate can cause a small increase in your blood pressure and heart rate. Your doctor will usually measure your blood pressure and pulse every 6 months.",
    },
  },
  {
    id: "adhd-work",
    kicker: "Work",
    question: "What changes can I ask for at work?",
    hook: "ADHD is covered as a disability at work. That means you can ask for changes, and there may be a grant for extra help.",
    short: "Under the Equality Act 2010, employers, colleges and universities have to make reasonable adjustments so that people with ADHD are not put at a substantial disadvantage. Adjustments can include a quiet work space, written as well as spoken instructions, and help to plan tasks. Access to Work may help pay for support beyond what your employer has to provide.",
    sections: [
      {
        heading: "Your rights",
        paragraphs: [
          "Under the Equality Act 2010, employers, colleges and universities have to make reasonable adjustments so that people with protected characteristics are not put at a substantial disadvantage. These include disability, which covers ADHD.",
          "You are disabled under the Act if you have a physical or mental impairment with a substantial and long-term negative effect on your ability to do normal daily activities. Long-term means 12 months or more.",
          "ADHD UK says you do not need a formal diagnosis to be protected at work, as it depends on how ADHD affects your daily life, but a diagnosis can help as evidence.",
        ],
      },
      {
        heading: "Adjustments that can help",
        paragraphs: [
          "Reasonable adjustments may include a personalised work space in a quiet area, written as well as spoken instructions, and help from another person to plan and structure your tasks.",
          "ADHD UK's ideas include a reserved desk instead of hot desking, flexible start times where timeliness is not critical, more check-ins with a manager, and blocked-out time with no disturbances.",
          "What counts as reasonable depends on how your condition affects you, how practical it is, and the size and resources of the organisation.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability, and having ADHD is one of the examples it gives. You do not need to be diagnosed to apply.",
          "A grant can help pay for things like specialist equipment, assistive software or a job coach. It will not affect your other benefits, and you will not have to pay it back.",
          "You need to be 16 or over, in paid work or about to start, and to live and work in England, Scotland or Wales. Access to Work does not pay for reasonable adjustments, which your employer has to make.",
        ],
      },
      {
        heading: "Starting the conversation",
        paragraphs: [
          "ADHD UK has a welfare pack to help an employer and an employee with ADHD talk it through. It includes an introduction to ADHD for employers, a structured conversation, and ideas for adjustments.",
          "ADHD UK says coaching costs are commonly funded by Access to Work. You can also get advice on reasonable adjustments from the Disability Employment Adviser at your local Jobcentre Plus.",
        ],
      },
    ],
    helps: [
      "Think about which parts of work your ADHD affects, then talk them through with your employer.",
      "Ask for written instructions as well as spoken ones, and a quiet place to work.",
      "Use ADHD UK's welfare pack to structure the conversation with your manager.",
      "Check whether you are eligible for Access to Work, and apply if you need extra support.",
      "Get advice from the Disability Employment Adviser at your local Jobcentre Plus.",
      CRISIS,
    ],
    tryThisWeek: [
      "List what makes work harder.",
      "Ask for written instructions.",
      "Check Access to Work eligibility.",
    ],
    ask: "What adjustments might help me at work, and could you support my request?",
    interactive: {
      kind: "risk-check",
      title: "Work challenges, and ideas that help",
      intro: "Tick any that apply to you. Each has ideas to talk through with your employer.",
      items: [
        { id: "open-plan", label: "Noise in an open-plan office", note: "Ideas: a quiet room, sitting away from busy areas, or working from home more.", changeable: true },
        { id: "hot-desk", label: "Not knowing where you will sit", note: "Ideas: a reserved permanent desk, or being able to book one.", changeable: true },
        { id: "arriving", label: "Arriving on time", note: "If timeliness is not critical to the role, flexible start times could be considered.", changeable: true },
        { id: "deadlines", label: "Deadlines and time blindness", note: "Ideas: calendar tools, reminder systems and more check-ins with a manager.", changeable: true },
        { id: "interruptions", label: "Unplanned interruptions", note: "Ideas: blocked-out time with no disturbances, and turning off reminders and phones.", changeable: true },
        { id: "instructions", label: "Remembering spoken instructions", note: "Ask for written instructions as well as spoken ones.", changeable: true },
      ],
    },
    sources: [RCPSYCH_ADHD, GOV_DISABILITY, ADHDUK_PRIVATE, NHS_ADHD, ADHDUK_ADJUSTMENTS, GOV_ATW, GOV_ATW_ELIGIBILITY, ADHDUK_WORK, GOV_ADJUSTMENTS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Does Access to Work pay for reasonable adjustments?",
      options: [{ text: "No, your employer has to make those", right: true }, { text: "Yes, all of them" }, { text: "Only for part-time staff" }],
      why: "Access to Work will not pay for reasonable adjustments. These are the changes your employer must legally make to support you to do your job.",
    },
  },
  {
    id: "adhd-relationships",
    kicker: "Relationships",
    question: "How can ADHD affect relationships, and what helps?",
    hook: "Forgetting, interrupting and restlessness can be misread as not caring. Understanding ADHD together can ease the strain.",
    short: "ADHD can disrupt relationships and family life, and because it is not very visible, people may put it down to personality. Telling people what you do and do not find helpful, and learning about ADHD together, can make a difference. Partners and families can get support too.",
    sections: [
      {
        heading: "How ADHD can show up between people",
        paragraphs: [
          "NICE says ADHD can affect people throughout their lives, disrupting relationships and making everyday life difficult. Signs of unsupported ADHD can include family or marriage problems, anger management problems and difficulty managing money.",
          "Because ADHD is not very visible, people may put it down to your personality. One person with ADHD told the Royal College of Psychiatrists they were told they were rude and always interrupted, when in fact they were eager and keen.",
        ],
      },
      {
        heading: "Telling the people around you",
        paragraphs: [
          "People often want to help but do not know how, and end up giving unhelpful advice. Tell the people in your life about the things you do and do not find helpful.",
          "You may find it helpful to talk to friends and family about your ADHD. NICE says adults can be asked if they would like a partner, close friend or carer to join discussions about their treatment.",
        ],
      },
      {
        heading: "For partners, family and friends",
        paragraphs: [
          "Learning about ADHD will help you understand it, and shows the person that you care. Just because you have met one person with ADHD does not mean you have met them all.",
          "Ask the person if there is anything you can do to help, and let them know you are there to talk in future. If their behaviour upsets or frustrates you, talk your feelings through with someone you trust.",
          "If there is a problem you want to bring up, try to explain clearly what the issue is and what you think could help. There may be things you can both do to solve it.",
        ],
      },
      {
        heading: "Support for you both",
        paragraphs: [
          "Some adult ADHD peer support groups run separate groups for partners, or let them join the ADHD groups. NICE says families of adults with ADHD should be offered advice about how ADHD may affect relationships and the importance of structure in daily activities. ADHD UK also runs online groups, including one for parents of adult children with ADHD.",
          "Through NHS talking therapies, couples therapy can help you and your partner deal with problems in your relationship. Interpersonal therapy can help you learn ways to deal with problems in your relationships.",
        ],
      },
    ],
    helps: [
      "Tell the people close to you which things help and which do not.",
      "Learn about ADHD together, from reliable sources.",
      "If something is a problem, explain it clearly and say what you think could help.",
      "Look for a peer support group that welcomes partners.",
      "Ask about couples therapy through NHS talking therapies.",
      CRISIS,
    ],
    tryThisWeek: [
      "Share one thing that helps you.",
      "Read about ADHD together.",
      "Look up a group for partners.",
    ],
    ask: "Could my partner or a family member join my appointments, and is there support for them?",
    interactive: {
      kind: "scenarios",
      title: "Moments at home",
      scenarios: [
        {
          id: "interrupting",
          situation: "Your partner says you keep interrupting them.",
          options: [{ text: "Explain how ADHD affects you, and agree what helps", best: true }, { text: "Say nothing and hope it passes" }],
          why: "Tell the people in your life about the things you do and do not find helpful. ADHD is often put down to personality.",
        },
        {
          id: "want-to-help",
          situation: "You want to help someone with ADHD but do not know how.",
          options: [{ text: "Ask them what would help", best: true }, { text: "Give them lots of advice" }],
          why: "People often want to help but end up giving unhelpful advice. Ask the person if there is anything you can do.",
        },
        {
          id: "frustrated",
          situation: "A family member's ADHD is leaving you frustrated.",
          options: [{ text: "Talk it through with someone you trust", best: true }, { text: "Keep it all to yourself" }],
          why: "If you find their behaviour upsetting or frustrating, talk through your feelings with someone you trust.",
        },
        {
          id: "arguments",
          situation: "The same problem keeps causing arguments.",
          options: [{ text: "Explain the issue clearly, and what could help", best: true }, { text: "Avoid talking about it" }],
          why: "Try to explain clearly what the issue is and what you think could help. There may be things you can both do.",
        },
      ],
    },
    sources: [NICE_PUBLIC, RCPSYCH_ADHD, NHS_ADHD, NICE_NG87, NHS_TT, ADHDUK_SUPPORT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the Royal College of Psychiatrists suggest telling the people around you?",
      options: [{ text: "Which things you do and do not find helpful", right: true }, { text: "Nothing at all" }, { text: "To give you more advice" }],
      why: "Tell the people in your life about the things you do and do not find helpful.",
    },
  },
  {
    id: "adhd-driving",
    kicker: "Driving",
    question: "Do I need to tell the DVLA about my ADHD?",
    hook: "Not everyone with ADHD has to tell the DVLA. It depends on whether ADHD or its medicine affects your ability to drive safely.",
    short: "You need to tell the DVLA if your ADHD or your ADHD medicine affects your ability to drive safely. If your driving is not affected, you do not need to tell them, and you can ask your doctor if you are unsure. You can be fined up to £1,000 if you do not tell the DVLA about ADHD that affects your driving.",
    sections: [
      {
        heading: "When to tell the DVLA",
        paragraphs: [
          "You need to tell the DVLA if your ADHD or your ADHD medication affects your ability to drive safely. If your driving is not affected, you do not need to tell them.",
          "ADHD UK says ADHD is not an automatically notifiable condition, so a diagnosis on its own does not have to be reported. Ask your doctor if you are unsure.",
          "You can be fined up to £1,000 if you do not tell the DVLA about ADHD that affects your ability to drive safely. You may be prosecuted if you are involved in an accident as a result.",
        ],
      },
      {
        heading: "How to tell them",
        paragraphs: [
          "If you have a full car or motorcycle licence, tell the DVLA if there is a change to your condition that may make you an unsafe driver. You can report it online, or fill in form A1 and send it to the DVLA.",
          "For a bus, coach or lorry licence, fill in form A1V. If you are learning to drive, you do not usually need to tell the DVLA, unless your doctor has told you that your ADHD or medicine affects your ability to drive safely.",
        ],
      },
      {
        heading: "ADHD, medicine and the road",
        paragraphs: [
          "NICE says ADHD symptoms may affect a person's driving, and ADHD medicine may improve it.",
          "Some people get side effects from methylphenidate, such as feeling dizzy, blurred vision or feeling sleepy. It is best not to drive until you know how it affects you, and if you are in any doubt, do not drive.",
        ],
      },
      {
        heading: "The law on medicines",
        paragraphs: [
          "It is illegal in England, Scotland and Wales to drive with legal drugs in your body if they impair your driving. Talk to your doctor about whether you should drive if you have been prescribed an amphetamine medicine.",
          "You can drive after taking these medicines if they were prescribed for you, you follow the advice on how to take them, and they are not making you unfit to drive.",
        ],
      },
    ],
    helps: [
      "Ask your doctor whether your ADHD or your medicine affects your ability to drive safely.",
      "Do not drive until you know how a new medicine affects you.",
      "If your driving is affected, tell the DVLA online or with form A1.",
      "Take your medicine as prescribed, and follow the advice on how to take it.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask your doctor about driving safely.",
      "Wait until you know how a medicine affects you.",
      "Tell the DVLA if driving is affected.",
    ],
    ask: "Does my ADHD or my medicine affect my ability to drive safely?",
    interactive: {
      kind: "scenarios",
      title: "Driving decisions",
      scenarios: [
        {
          id: "diagnosed",
          situation: "You have just been diagnosed, and your driving feels fine.",
          options: [{ text: "Check with your doctor if unsure", best: true }, { text: "Stop driving for good" }],
          why: "If your driving is not affected by your ADHD or medicine, you do not need to tell the DVLA. Ask your doctor if you are unsure.",
        },
        {
          id: "new-medicine",
          situation: "You start a new ADHD medicine and feel a little dizzy.",
          options: [{ text: "Do not drive until you know how it affects you", best: true }, { text: "Drive as normal" }],
          why: "It's best not to drive until you know how methylphenidate affects you. If you're in any doubt, do not drive.",
        },
        {
          id: "affected",
          situation: "Your doctor says your ADHD affects your driving.",
          options: [{ text: "Tell the DVLA, online or with form A1", best: true }, { text: "Keep it to yourself" }],
          why: "You can be fined up to £1,000 if you do not tell the DVLA about ADHD that affects your ability to drive safely.",
        },
        {
          id: "learner",
          situation: "You are learning to drive and your driving is not affected.",
          options: [{ text: "You usually do not need to tell the DVLA", best: true }, { text: "Tell them before every lesson" }],
          why: "You do not usually need to tell the DVLA if you are learning to drive. Your driving test will assess your ability to drive safely.",
        },
      ],
    },
    sources: [GOV_DRIVING, ADHDUK_FAQ, NICE_NG87, NHS_MPH_QA, GOV_DRUG_DRIVING, RCPSYCH_ADHD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What can happen if you do not tell the DVLA about ADHD that affects your driving?",
      options: [{ text: "A fine of up to £1,000", right: true }, { text: "Nothing at all" }, { text: "A free driving course" }],
      why: "You can be fined up to £1,000 if you do not tell the DVLA about ADHD that affects your ability to drive safely.",
    },
  },
  {
    id: "adhd-support",
    kicker: "Support",
    question: "Where can I find support and other people with ADHD?",
    hook: "Being around people who understand ADHD can make a big difference. There are free groups online and in person.",
    short: "There are ADHD support groups locally and online, and charities that offer information and support. Peer support groups are free or low cost, and are a chance to share experiences and tips. If you are struggling, free helplines are open day and night.",
    sections: [
      {
        heading: "People who understand",
        paragraphs: [
          "Something that can make the biggest difference is being around people who understand ADHD, and being in places that bring out the best in you.",
          "Peer support groups provide free or low-cost meetings where people with ADHD can share experiences, advice, strategies and tips, and socialise. They may be online or face to face, and what is available varies depending on where you live.",
        ],
      },
      {
        heading: "Charities",
        paragraphs: [
          "ADHD UK offers information and support for anyone affected by ADHD, including online video support groups, expert-led events and free drop-in advice clinics. It also runs Facebook groups, including ones for women, men, LGBTQ+ people, ethnic minorities, and people with ADHD and autism.",
          "ADHD Adult UK offers information and peer support for adults with ADHD. NICE also lists other organisations, including the ADHD Foundation and AADD-UK.",
        ],
      },
      {
        heading: "Finding good information",
        paragraphs: [
          "Learning more about ADHD can be useful, but the quality of online information varies, and some of it can be inaccurate, misleading or even false.",
          "NICE says people with ADHD should be told about local and national support groups, websites, and support for education and employment. This can help people whose assessment falls short of a diagnosis, too.",
        ],
      },
      {
        heading: "If you are struggling now",
        paragraphs: [
          "ADHD UK says people with ADHD are more likely to have suicidal thoughts and to self-harm. If that is you, you are not alone, and you do not have to wait to get help.",
          "Samaritans is free to call on 116 123, day or night. Shout is a free, confidential text service, open 24/7: text SHOUT to 85258.",
          "For urgent help, call 111 and select the mental health option. Call 999 or go to A&E if someone's life is at risk or you do not feel you can keep yourself safe.",
        ],
      },
    ],
    helps: [
      "Join an ADHD UK online support group or free drop-in advice clinic.",
      "Look for an ADHD peer support group, locally or online.",
      "Check where online information comes from, as its quality varies.",
      "Join ADHD UK's mailing list to hear about upcoming groups and events.",
      CRISIS,
    ],
    tryThisWeek: [
      "Find one ADHD support group.",
      "Book a free drop-in clinic.",
      "Save Samaritans' number: 116 123.",
    ],
    ask: "Are there ADHD support groups or services in this area?",
    interactive: {
      kind: "flip-cards",
      title: "Where to turn",
      intro: "Turn each card to see what each one offers.",
      cards: [
        { id: "adhduk", front: "ADHD UK", when: "Groups, events and advice", back: "Online video support groups, expert-led events and free drop-in advice clinics." },
        { id: "adhd-adult-uk", front: "ADHD Adult UK", when: "Peer support for adults", back: "Information and peer support for adults with ADHD." },
        { id: "peer", front: "Peer support groups", when: "Sharing tips with others", back: "Free or low-cost meetings, online or face to face. What is available varies by area." },
        { id: "samaritans", front: "Samaritans", when: "Any time, day or night", back: "Call free on 116 123, from any phone." },
        { id: "shout", front: "Shout", when: "If you would rather text", back: "Text SHOUT to 85258. Free, confidential and open 24/7." },
        { id: "nhs-111", front: "NHS 111", when: "Urgent mental health help", back: "Call 111 and select the mental health option." },
      ],
    },
    sources: [RCPSYCH_ADHD, NHS_ADHD, ADHDUK_SUPPORT, ADHDUK_PATHWAYS, NICE_PUBLIC, NICE_NG87, ADHDUK_HELP, SAMARITANS, SHOUT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How much do ADHD peer support groups usually cost?",
      options: [{ text: "They are free or low cost", right: true }, { text: "Hundreds of pounds" }, { text: "They are only for doctors" }],
      why: "Peer support groups provide free or low-cost services where people with ADHD can listen and share experiences, advice, strategies and tips.",
    },
  },
];
