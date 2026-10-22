import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Personality disorder (BPD) page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, the Royal College of
// Psychiatrists, Rethink Mental Illness and NICE (CG78), with Samaritans, Shout, Carers UK and Harmless for support.
// mind.org.uk was not read (it blocks automated reading), so no Mind page is cited. Safe messaging throughout:
// self-harm and suicide are mentioned only in general terms, with no methods and no description of injuries.
// Every answer ends its "What helps" list with the crisis routes exactly as the NHS gives them (999 or A&E,
// 111 mental health option, Samaritans 116 123, Shout 85258). General information only; it never replaces what a
// person's own GP, therapist or mental health team tells them, and no medicine should be stopped or changed
// without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });

const NHS_OVERVIEW = nhs("Borderline personality disorder: overview", "mental-health/conditions/borderline-personality-disorder/overview/");
const NHS_SYMPTOMS = nhs("Borderline personality disorder: symptoms", "mental-health/conditions/borderline-personality-disorder/symptoms/");
const NHS_CAUSES = nhs("Borderline personality disorder: causes", "mental-health/conditions/borderline-personality-disorder/causes/");
const NHS_DIAGNOSIS = nhs("Borderline personality disorder: diagnosis", "mental-health/conditions/borderline-personality-disorder/diagnosis/");
const NHS_TREATMENT = nhs("Borderline personality disorder: treatment", "mental-health/conditions/borderline-personality-disorder/treatment/");
const NHS_PD = nhs("Personality disorders", "mental-health/conditions/personality-disorder/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");
const NHS_SH_WHY = nhs("Why people self-harm", "mental-health/feelings-symptoms-behaviours/behaviours/self-harm/why-people-self-harm/");
const NHS_SH_HELP = nhs("Where to get help for self-harm", "mental-health/feelings-symptoms-behaviours/behaviours/self-harm/getting-help/");
const NHS_SH_TREAT = nhs("Self-harm: assessment and treatments", "mental-health/feelings-symptoms-behaviours/behaviours/self-harm/assessment-and-treatments/");
const NHS_CARER = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");
const NHS_MINDFUL = nhs("Mindfulness", "mental-health/self-help/tips-and-support/mindfulness/");
const NHS_BREATHING = nhs("Breathing exercises for stress", "mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/");
const NHS_FIVE = nhs("5 steps to mental wellbeing", "mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/");

const RCPSYCH_PD: LearnSource = { label: "Royal College of Psychiatrists: Personality disorder", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/personality-disorder" };
const RETHINK_BPD: LearnSource = { label: "Rethink Mental Illness: Borderline personality disorder (BPD)/ Emotionally unstable personality disorder (EUPD)", url: "https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-conditions/borderline-personality-disorder-bpd-emotionally-unstable-personality-disorder-eupd/" };
const RETHINK_PD: LearnSource = { label: "Rethink Mental Illness: Personality disorders explained", url: "https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-conditions/personality-disorders-explained-symptoms-causes-and-treatment/" };
const RETHINK_SH: LearnSource = { label: "Rethink Mental Illness: Self-harm", url: "https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-symptoms/self-harm/" };
const NICE_CG78: LearnSource = { label: "NICE: Borderline personality disorder: recognition and management (CG78), recommendations", url: "https://www.nice.org.uk/guidance/cg78/chapter/Recommendations" };
const NICE_IFP: LearnSource = { label: "NICE: Borderline personality disorder, information for the public", url: "https://www.nice.org.uk/guidance/cg78/ifp/chapter/Borderline-personality-disorder" };

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SHOUT: LearnSource = { label: "Shout 85258: Get help", url: "https://giveusashout.org/get-help/" };
const CARERS_UK: LearnSource = { label: "Carers UK: Helpline and other support", url: "https://www.carersuk.org/help-and-advice/helpline-and-other-support/" };
const HARMLESS: LearnSource = { label: "Harmless: People that self harm", url: "https://harmless.org.uk/our-services/people-that-self-harm/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.";

export const bpdAnswers: LearnArticle[] = [
  {
    id: "persd-what-it-is",
    kicker: "Understanding",
    question: "What is a personality disorder, and does it mean something is wrong with me?",
    hook: "We all have personality traits. A diagnosis describes when some of them make life very hard, not a flaw in who you are.",
    short: "A person with a personality disorder thinks, feels, behaves or relates to others very differently from the average person, in ways that make it extremely hard to manage emotions and relationships. Being told you have a disordered personality can be hurtful, but it does not mean there is something wrong with who you are. Many people recover over time.",
    sections: [
      {
        heading: "Personality, and when it causes problems",
        paragraphs: [
          "We all have different patterns of thoughts, feelings and behaviours, which can be described as personality traits. Our personalities affect how we act and think, what we believe and how we relate to others.",
          "Personality traits exist on a scale. We all feel emotional, get jealous or want to be liked at times, but some people feel these things more intensely than others.",
        ],
      },
      {
        heading: "What the diagnosis means",
        paragraphs: [
          "A person with a personality disorder thinks, feels, behaves or relates to others very differently from the average person.",
          "Personality disorder is a diagnosis that can be given when personality traits make it extremely difficult to manage emotions and feelings about yourself, others and the world, with significant problems coping day to day and in relationships.",
          "Being told you have a disordered personality can be upsetting and hurtful. But it does not mean there is something wrong with who you are.",
        ],
      },
      {
        heading: "Types, and a new way of describing them",
        paragraphs: [
          "Until 2019, personality disorders were split into 10 categories, and some of these terms are now considered stigmatising. Borderline personality disorder was the most common personality disorder diagnosis made in the UK.",
          "Now, personality disorders are organised by severity, mild, moderate or severe, and by one or more of five personality traits. A mental health professional can talk to you about what your diagnosis means.",
        ],
      },
      {
        heading: "How common, and why",
        paragraphs: [
          "Rethink Mental Illness says research has suggested that around 1 in 20 people live with a personality disorder. You can have a personality disorder alongside other mental health problems, such as anxiety and depression.",
          "It's not clear exactly what causes personality disorders. They're thought to result from a combination of the genes a person inherits and early environmental influences, such as a distressing childhood experience.",
        ],
      },
      {
        heading: "Getting better",
        paragraphs: [
          "Many people with a personality disorder recover over time. Psychological or medical treatment is often helpful, but support is sometimes all that's needed.",
          "The Royal College of Psychiatrists says some studies have shown that between 50 and 70 out of every 100 people with a borderline personality disorder diagnosis improve in the long term.",
          "Some people feel their experiences make them creative, determined, adaptable and sensitive to other people's feelings.",
        ],
      },
    ],
    helps: [
      "Remember that a diagnosis of personality disorder does not mean there is something wrong with who you are.",
      "Ask a mental health professional to talk you through what your diagnosis means.",
      "Find out more from sources that are reliable, evidence-based and recent, from charities, and from other people with the diagnosis.",
      "Ask a GP about support groups for personality disorders near you.",
      CRISIS,
    ],
    tryThisWeek: [
      "Remind yourself it is not who you are.",
      "Ask what your diagnosis means.",
      "Ask a GP about a support group.",
    ],
    ask: "What does my diagnosis mean, and what support is available for me?",
    interactive: {
      kind: "flip-cards",
      title: "From difficulty to severe",
      intro: "Personality disorders are now described by severity. Turn each card to see what each level can mean.",
      cards: [
        { id: "difficulty", front: "Personality difficulty", when: "Not a diagnosis", back: "You might have some of the five personality traits, without a diagnosis of personality disorder." },
        { id: "mild", front: "Mild personality disorder", when: "Some challenges", back: "You might have some challenges related to some traits in your personal, social or work lives." },
        { id: "moderate", front: "Moderate personality disorder", when: "Challenges in several areas", back: "Challenges related to some traits in your personal, social and work lives. You might struggle to function well." },
        { id: "severe", front: "Severe personality disorder", when: "Serious challenges", back: "Serious challenges in all areas of your life. You might be at risk of harming yourself or someone else." },
        { id: "borderline-pattern", front: "Borderline pattern", when: "Added to a diagnosis", back: "Shows someone might benefit from treatments shown to work well for borderline personality disorder." },
      ],
    },
    sources: [RCPSYCH_PD, NHS_PD, RETHINK_PD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Does a diagnosis of personality disorder mean something is wrong with who you are?",
      options: [{ text: "No, it does not", right: true }, { text: "Yes, it means your personality is flawed" }, { text: "Only if it is severe" }],
      why: "Being told you have a disordered personality can be upsetting and hurtful. But it does not mean there is something wrong with who you are.",
    },
  },
  {
    id: "persd-bpd",
    kicker: "BPD",
    question: "What is borderline personality disorder, and how can it feel?",
    hook: "Emotions that flare fast, moods that swing in hours, relationships that feel all or nothing. BPD is the most commonly recognised personality disorder.",
    short: "Borderline personality disorder (BPD) is a disorder of mood and how a person interacts with others. Its symptoms fall into 4 main areas: emotional instability, disturbed patterns of thinking, impulsive behaviour, and intense but unstable relationships. It is also called emotionally unstable personality disorder (EUPD), and many people with BPD recover over time.",
    sections: [
      {
        heading: "A disorder of mood and relating",
        paragraphs: [
          "Borderline personality disorder (BPD) is a disorder of mood and how a person interacts with others. It's the most commonly recognised personality disorder.",
          "It is also known as emotionally unstable personality disorder (EUPD), and some people prefer the name emotional intensity disorder (EID). Rethink Mental Illness says around 1 in 100 people live with BPD, and it is most common in early adulthood.",
        ],
      },
      {
        heading: "Four main areas",
        paragraphs: [
          "The symptoms can be grouped into 4 main areas: emotional instability, disturbed patterns of thinking or perception, impulsive behaviour, and intense but unstable relationships with others.",
          "Everyone experiences BPD differently, and not everyone will have all the symptoms. A person diagnosed with BPD will have most of them, and they will have a significant impact on their life.",
        ],
      },
      {
        heading: "Strong, changing emotions",
        paragraphs: [
          "You may have a range of often intense negative emotions, such as rage, sorrow, shame, panic and terror, and long-term feelings of emptiness and loneliness.",
          "You may have severe mood swings over a short space of time. The pattern varies, but the key sign is that your moods swing in unpredictable ways.",
        ],
      },
      {
        heading: "Thoughts, impulses and identity",
        paragraphs: [
          "Upsetting thoughts can include thinking you're a terrible person or feeling you do not exist. Rethink also lists feeling disconnected from your body or the world around you, not having a sense of who you are, and hearing voices or noises.",
          "Some impulses can be extremely difficult to control, such as binge drinking, drug misuse, or going on a spending or gambling spree. Many people with BPD also self-harm, and there is help available.",
        ],
      },
      {
        heading: "Other conditions, and recovery",
        paragraphs: [
          "Many people with BPD also have another condition, such as depression, anxiety, an eating disorder, post-traumatic stress disorder, or problems with alcohol or drugs.",
          "BPD is not usually diagnosed before the age of 18, but symptoms can be recognised in younger people. Over time, with treatment, many people with BPD overcome their symptoms and recover.",
        ],
      },
    ],
    helps: [
      "If you're experiencing symptoms of BPD, make an appointment with a GP.",
      "Keep a record of your symptoms, feelings and behaviours, to help you and your GP understand what you are facing.",
      "If you've been diagnosed, tell someone you trust and give them the contact details of your care team.",
      "Get help if you are struggling with beliefs or experiences that may not be real.",
      CRISIS,
    ],
    tryThisWeek: [
      "Make an appointment with a GP.",
      "Keep a record of your symptoms.",
      "Share your care team's details.",
    ],
    ask: "Could my symptoms be BPD, and can I be referred for an assessment?",
    interactive: {
      kind: "signs",
      title: "Things you may notice",
      intro: "Tick any you recognise. Everyone experiences BPD differently, and nobody has all of these.",
      signs: [
        "Intense emotions, such as rage, shame or panic",
        "Moods that swing in unpredictable ways",
        "Long-term feelings of emptiness or loneliness",
        "Thinking you are a terrible person",
        "Not having a sense of who you are",
        "Feeling disconnected from yourself or the world",
        "Impulses that are hard to control",
        "Fear of being abandoned or rejected",
        "Intense but unstable relationships",
      ],
      after: "These are some of the difficulties people with BPD describe. A record like this can help you and your GP understand what you are facing.",
      copyHeading: "Things I have noticed",
    },
    sources: [NHS_OVERVIEW, NHS_SYMPTOMS, RETHINK_BPD, NICE_IFP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How are the symptoms of BPD usually grouped?",
      options: [{ text: "Into 4 main areas", right: true }, { text: "As one single symptom" }, { text: "Only by how long they last" }],
      why: "The symptoms can be grouped into 4 main areas: emotional instability, disturbed patterns of thinking or perception, impulsive behaviour, and intense but unstable relationships with others.",
    },
  },
  {
    id: "persd-causes",
    kicker: "Causes",
    question: "Why do some people develop BPD?",
    hook: "There is no single cause. Genes, the developing brain and early experiences all seem to play a part, and none of them decides your future.",
    short: "There's no single cause of borderline personality disorder (BPD); it's likely to come from a combination of genetic and environmental factors. Most people with BPD will have experienced some kind of trauma or neglect as children. But difficult experiences do not mean someone will definitely develop a personality disorder.",
    sections: [
      {
        heading: "No single cause",
        paragraphs: [
          "There's no single cause of BPD, and it's likely to be caused by a combination of genetic and environmental factors. People with BPD come from many different backgrounds.",
        ],
      },
      {
        heading: "Genes and the brain",
        paragraphs: [
          "Genes you inherit may make you more vulnerable, as there is evidence that BPD can run in families. There is no single personality disorder gene, but some academics think genetics plays a role in how difficult experiences affect different people.",
          "Brain scans have shown that in many people with BPD, 3 parts of the brain were smaller than expected or had unusual levels of activity. These parts help with regulating emotions, self-control, and planning and decision making.",
          "The development of these parts of the brain is affected by your early upbringing. It's also thought that many people with BPD have altered levels of a brain chemical called serotonin.",
        ],
      },
      {
        heading: "Childhood experiences",
        paragraphs: [
          "Most people with BPD will have experienced some kind of trauma or neglect as children. Common experiences include emotional, physical or sexual abuse, long-term fear or distress as a child, and being neglected by one or both parents.",
          "Growing up with a family member who had a serious mental health condition, or a drink or drug problem, can also play a part. DBT is based on the idea that being particularly emotionally vulnerable, and growing up where your emotions were dismissed, both contribute.",
        ],
      },
      {
        heading: "Later life, and what this does not mean",
        paragraphs: [
          "Experiences later in life, such as physical illness, relationship breakdowns and conflict, can make these difficulties more prominent. Poverty, discrimination, a lack of opportunities and poor housing may also play a part.",
          "Difficult childhood experiences do not mean someone will definitely be diagnosed with a personality disorder. Not all people who experience trauma develop one, but they are more likely to.",
        ],
      },
      {
        heading: "Understanding your own story",
        paragraphs: [
          "A formulation is a way of understanding the full picture of a person: the challenges you have now, why they came about, why they continue, and the strengths you have.",
          "Together with the people supporting you, it can help you make more sense of the problems you face and think about how to react in more helpful ways.",
        ],
      },
    ],
    helps: [
      "Remember that there's no single cause, and many factors may play a part.",
      "Ask the people supporting you about creating a formulation, to understand the full picture.",
      "If sensitive issues such as childhood trauma come up in an assessment, you should be offered support afterwards.",
      CRISIS,
    ],
    tryThisWeek: [
      "Remember there is no single cause.",
      "Ask about a formulation.",
      "Ask for support after assessments.",
    ],
    ask: "Could we create a formulation together, to understand what led to my difficulties?",
    interactive: {
      kind: "flip-cards",
      title: "What may play a part",
      intro: "Turn each card to see how each factor may be involved. It is usually a combination, never just one.",
      cards: [
        { id: "genes", front: "Genes", when: "It can run in families", back: "Inherited genes may make you more vulnerable. There is no single personality disorder gene." },
        { id: "brain-chemicals", front: "Brain chemicals", when: "Messenger chemicals", back: "Many people with BPD are thought to have altered levels of serotonin, which is linked to controlling urges." },
        { id: "brain-development", front: "Brain development", when: "Shaped by early upbringing", back: "3 parts of the brain that help with emotions, self-control and planning can be smaller or more active." },
        { id: "childhood", front: "Childhood experiences", when: "Trauma or neglect", back: "Abuse, long-term fear or distress, neglect, or a family member with a serious mental health condition." },
        { id: "community", front: "Where you grow up", when: "Adverse community environments", back: "Poverty, discrimination, a lack of opportunities and poor housing may play a part." },
        { id: "later-life", front: "Later life", when: "Hard times as an adult", back: "Physical illness, relationship breakdowns and conflict can make difficulties more prominent." },
      ],
    },
    sources: [NHS_CAUSES, NHS_OVERVIEW, RCPSYCH_PD, RETHINK_PD, NHS_TREATMENT, NICE_CG78, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What causes BPD?",
      options: [{ text: "A combination of factors", right: true }, { text: "One single gene" }, { text: "A weak character" }],
      why: "There's no single cause of BPD, and it's likely to be caused by a combination of genetic and environmental factors.",
    },
  },
  {
    id: "persd-diagnosis",
    kicker: "Diagnosis",
    question: "How is BPD diagnosed, and what if I don't like the name?",
    hook: "A diagnosis should be careful, explained and agreed with you. Many people dislike the name, and you can ask for it to be reviewed.",
    short: "Start by seeing a GP, who may refer you to a specialist personality disorder service or community mental health team for an assessment. A diagnosis should be made with careful consideration and shared agreement, and the clinician should explain what it means and what support is available. If it does not fit your experiences, you can ask for a review or a second opinion.",
    sections: [
      {
        heading: "Starting with a GP",
        paragraphs: [
          "See a GP if you're concerned you have BPD. They may ask about your symptoms and how they affect your quality of life, rule out other more common conditions such as depression, and make sure there's no immediate risk to your health.",
          "Your GP cannot diagnose BPD. Only a psychiatrist can make a formal diagnosis, so a GP may refer you to a specialist personality disorder service or your community mental health team.",
        ],
      },
      {
        heading: "The assessment",
        paragraphs: [
          "The assessment will probably be carried out by a specialist in personality disorders, usually a psychologist or psychiatrist. You should be asked about your living situation, work and relationships, your thoughts and feelings, and what has helped you cope in the past.",
          "The assessment is not a test or an exam. It is about finding the right diagnosis and help for you.",
        ],
      },
      {
        heading: "A careful, shared decision",
        paragraphs: [
          "A diagnosis of personality disorder should be made with careful consideration, through a shared agreement between the person making it and the person receiving it. The clinician should explain why it might help, what it means and what support is available.",
          "Psychiatrists might diagnose BPD if you have at least 5 of the symptoms in their guidelines. Some symptoms are similar to complex post-traumatic stress disorder or bipolar disorder, which can make diagnosis hard at first.",
        ],
      },
      {
        heading: "The name, and stigma",
        paragraphs: [
          "Many people would like personality disorder to have a new name. Some prefer to describe their difficulties as complex PTSD or complex emotional needs, and some find the name BPD judgemental.",
          "Some people find a diagnosis helpful, even if they don't like the term, because it can help them make sense of how they feel and lead to the right treatment. People should not be excluded from any health or social care service because of their diagnosis.",
        ],
      },
      {
        heading: "If you disagree",
        paragraphs: [
          "If you feel your diagnosis does not represent your experiences, ask for an appointment with your psychiatrist to review it. You can also ask for a second opinion; you do not have a legal right to one, but it is usually possible to get one.",
          "Once a diagnosis is confirmed, it's recommended that you tell close family and friends you trust. But the decision is entirely your own, and your confidentiality will be respected.",
        ],
      },
    ],
    helps: [
      "See a GP if you're concerned you may have BPD.",
      "Ask if the service you're referred to has experience of working with personality disorders.",
      "Be as open and honest as you can at your assessment; it is not a test.",
      "Ask your clinician to explain why the diagnosis might help, what it means and what support is available.",
      "If you disagree with your diagnosis, ask your psychiatrist to review it, or ask for a second opinion.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Ask about the team's experience.",
      "Ask what your diagnosis means.",
    ],
    ask: "Does the service you are referring me to have experience of working with personality disorders?",
    interactive: {
      kind: "timeline",
      title: "From GP to a shared diagnosis",
      steps: [
        { id: "gp", when: "Step 1", title: "See a GP", points: ["They ask how you feel and how life is affected.", "They rule out other conditions and check you are safe."] },
        { id: "referral", when: "Step 2", title: "A referral", points: ["To a personality disorder service or mental health team.", "Ask if they have experience with personality disorders."] },
        { id: "assessment", when: "Step 3", title: "The assessment", points: ["About your life, feelings and what helps you cope.", "It is not a test or an exam."] },
        { id: "agreement", when: "Step 4", title: "A shared decision", points: ["Made with careful consideration and agreed with you.", "What it means and what support there is, explained."] },
        { id: "plan", when: "Step 5", title: "A care plan", points: ["Made with you, to plan treatment and care.", "If you disagree, ask for a review or a second opinion."] },
      ],
    },
    sources: [NHS_DIAGNOSIS, RCPSYCH_PD, RETHINK_BPD, RETHINK_PD, NHS_PD, NICE_CG78, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Who can make a formal diagnosis of BPD?",
      options: [{ text: "A psychiatrist", right: true }, { text: "Your GP" }, { text: "An online quiz" }],
      why: "Your GP cannot diagnose BPD. Only a psychiatrist can make a formal diagnosis.",
    },
  },
  {
    id: "persd-therapy",
    kicker: "Therapy",
    question: "What are DBT and MBT, and which therapy might help me?",
    hook: "Talking therapy is the main treatment for BPD. It takes time, it can be hard, and many people find it changes how they live with their emotions.",
    short: "Treatment for borderline personality disorder (BPD) usually involves psychological therapy. Dialectical behaviour therapy (DBT) was designed specifically for BPD, and mentalisation-based therapy (MBT) helps you understand your own and other people's minds. The choice depends on what you prefer and what is available, and treatment may last a year or longer.",
    sections: [
      {
        heading: "Talking therapy is the main treatment",
        paragraphs: [
          "Treatment for BPD usually involves some type of psychological therapy, also known as psychotherapy. Therapy for BPD aims to help people get a better sense of control over their thoughts and feelings.",
          "It should only be delivered by a trained professional, so do not be afraid to ask about their experience. The therapy you are offered should usually last at least 3 months, and treatment for BPD may last a year or longer.",
        ],
      },
      {
        heading: "Dialectical behaviour therapy (DBT)",
        paragraphs: [
          "DBT is a type of therapy specifically designed to treat people with BPD. It uses validation, accepting your emotions are valid, real and acceptable, and helps you be open to ideas and opinions that contradict your own.",
          "It is structured around four modules: distress tolerance, emotional regulation, interpersonal effectiveness and mindfulness. The Royal College of Psychiatrists says you have one group and one individual session a week for 12 months, and you'll be given an out-of-hours number to call if your symptoms get worse.",
          "NICE recommends considering a comprehensive DBT programme for women with BPD for whom reducing recurrent self-harm is a priority.",
        ],
      },
      {
        heading: "Mentalisation-based therapy (MBT)",
        paragraphs: [
          "Mentalisation is the ability to think about thinking: examining your own thoughts and beliefs, and recognising that other people have their own thoughts, emotions and needs.",
          "MBT helps you learn to step back from your thoughts about yourself and others and examine whether they're valid. It is given individually and in a group, and a course usually lasts around 18 months.",
        ],
      },
      {
        heading: "Other therapies",
        paragraphs: [
          "Schema focused therapy works on negative patterns of thought learned in early childhood, and STEPPS is a weekly group lasting 20 weeks that teaches skills to regulate emotions. Cognitive analytic therapy looks at patterns in how you think, especially around relationships.",
          "Arts therapies, such as art, drama, music and dance movement therapy, help people who find it hard to express their thoughts and feelings in words. Therapeutic communities are places where people take part in group therapy, often staying around 1 to 4 days a week.",
        ],
      },
      {
        heading: "Which therapy, and what to expect",
        paragraphs: [
          "The type of therapy may depend on what you prefer and what is available locally. DBT is the most researched therapy, followed by MBT, but there is not enough high-quality research to say which works best.",
          "Therapy can sometimes feel frightening, and it is quite common for people to become unwell or face a crisis during it. Services should prepare you, and if one approach doesn't work for you, this doesn't mean another won't.",
          "It is quite likely you will have to wait, which can be very frustrating. You can use the time to prepare, for example by sorting out housing needs first.",
        ],
      },
    ],
    helps: [
      "Ask your doctor to explain which therapies are available, and the evidence that they work.",
      "Do not be afraid to ask about your therapist's experience.",
      "If you find group therapy hard to begin with, it might help to give it a chance.",
      "Use the wait to prepare, such as dealing with housing needs.",
      "If one therapy does not work for you, ask about another.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask which therapies are available.",
      "Ask about your therapist's experience.",
      "Note what to sort before therapy.",
    ],
    ask: "Can I be referred for DBT, MBT or another specialist therapy, and how long is the wait?",
    interactive: {
      kind: "flip-cards",
      title: "Therapies, card by card",
      intro: "Turn each card to see who each therapy is for and what it involves. What is offered depends on your needs and what is available locally.",
      cards: [
        { id: "dbt", front: "Dialectical behaviour therapy (DBT)", when: "Designed for BPD", back: "Weekly group and individual sessions to learn skills for distress, emotions, relationships and mindfulness." },
        { id: "mbt", front: "Mentalisation-based therapy (MBT)", when: "For BPD", back: "Helps you understand your own and other people's thoughts and feelings. Usually around 18 months." },
        { id: "schema", front: "Schema focused therapy", when: "Patterns learned in childhood", back: "Finds your negative patterns of thought and works on healthier responses to them." },
        { id: "stepps", front: "STEPPS", when: "A 20-week group", back: "Weekly group therapy based on CBT, teaching skills to help regulate your emotions." },
        { id: "cat", front: "Cognitive analytic therapy (CAT)", when: "Patterns in relationships", back: "You and your therapist recognise patterns in how you think and try to change them. On average 16 weeks." },
        { id: "arts", front: "Arts therapies", when: "When words are hard", back: "Art, drama, music or dance movement therapy, usually in weekly sessions." },
        { id: "tc", front: "Therapeutic communities", when: "An intensive group setting", back: "Group therapy and shared activities, often 1 to 4 days a week, with agreed rules on behaviour." },
      ],
    },
    sources: [NHS_TREATMENT, RCPSYCH_PD, RETHINK_BPD, RETHINK_PD, NICE_CG78, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which therapy was specifically designed to treat people with BPD?",
      options: [{ text: "Dialectical behaviour therapy (DBT)", right: true }, { text: "Guided self-help" }, { text: "Couples therapy" }],
      why: "DBT is a type of therapy specifically designed to treat people with BPD.",
    },
  },
  {
    id: "persd-medicines",
    kicker: "Medicines",
    question: "Is there a medicine for BPD?",
    hook: "No medicine treats BPD itself. Medicine can still help with other conditions, and every decision about it is one to make with your doctor.",
    short: "No medicine is licensed to treat borderline personality disorder (BPD), and NICE says drug treatment should not be used specifically for it. Medicines are often used for another condition, such as depression or anxiety, and a short course of a calming medicine may be given in a crisis. Never stop a medicine suddenly; speak to the people treating you first.",
    sections: [
      {
        heading: "No medicine treats BPD itself",
        paragraphs: [
          "No medicine is currently licensed to treat BPD, and experts are divided over whether medicine is helpful. The Royal College of Psychiatrists says no medication has been shown by research to treat personality disorder.",
          "NICE says drug treatment should not be used specifically for BPD or for its individual symptoms, and antipsychotics should not be used for its medium and long-term treatment.",
        ],
      },
      {
        heading: "When medicine may be offered",
        paragraphs: [
          "Medicines are often used if you have another condition, such as depression, an anxiety disorder or bipolar disorder. For example, moderate to severe depression might be treated with an antidepressant called an SSRI.",
          "Mood stabilisers or antipsychotics are sometimes prescribed to help mood swings, ease psychotic symptoms or reduce impulsive behaviour. Some people find medication helpful, while other people don't.",
        ],
      },
      {
        heading: "In a crisis",
        paragraphs: [
          "In a small number of cases, you may be given a short course of medicine to calm your mood during a crisis. NICE says this should be no longer than 1 week, and the NHS says it is usually prescribed for 7 days.",
          "Afterwards, the plan should be to stop a medicine begun in a crisis, usually within 1 week, as part of reviewing your care plan.",
        ],
      },
      {
        heading: "Making decisions together",
        paragraphs: [
          "You should be able to talk with your doctor about whether a medicine is right for you, and side effects should be made clear before you start. NICE says you should be given written information about any medicine being considered.",
          "If you want to stop taking any medication, speak to the people treating you first. Stopping medication suddenly can be dangerous, and your clinical team can help you stop or change it safely.",
        ],
      },
    ],
    helps: [
      "Ask your doctor how a medicine should help and what side effects it may have.",
      "Ask for written information about any medicine you are offered.",
      "Talk to the people treating you before stopping any medicine, as stopping suddenly can be dangerous.",
      "If you are given a medicine in a crisis, agree with your doctor how long you will take it.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask how your medicine should help.",
      "Ask for written information.",
      "Talk to your team before stopping.",
    ],
    ask: "Would a medicine help with any other condition I have, and what side effects should I know about?",
    interactive: {
      kind: "scenarios",
      title: "Medicine moments",
      scenarios: [
        {
          id: "offered",
          situation: "You are offered an antidepressant for depression alongside BPD.",
          options: [{ text: "Ask how it should help and about side effects", best: true }, { text: "Take it without asking anything" }],
          why: "Your doctor should tell you how it should help and about any side effects you might experience.",
        },
        {
          id: "stopping",
          situation: "You feel better and want to stop your medicine.",
          options: [{ text: "Talk to the people treating you first", best: true }, { text: "Stop it straight away" }],
          why: "Stopping medication suddenly can be dangerous. Your clinical team can help you stop or change it safely.",
        },
        {
          id: "crisis",
          situation: "You are given a calming medicine during a crisis.",
          options: [{ text: "Agree how long you will take it", best: true }, { text: "Plan to keep taking it for months" }],
          why: "NICE says short-term use of a calming medicine in a crisis should be no longer than 1 week.",
        },
        {
          id: "unsure",
          situation: "You are not sure a medicine is right for you.",
          options: [{ text: "Ask for written information to discuss", best: true }, { text: "Say nothing and hope for the best" }],
          why: "You should be given written information about any medicine being considered, with a chance to discuss it.",
        },
      ],
    },
    sources: [NHS_TREATMENT, RCPSYCH_PD, NICE_CG78, RETHINK_BPD, NHS_PD, RETHINK_PD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is there a medicine licensed to treat BPD itself?",
      options: [{ text: "No", right: true }, { text: "Yes, an antipsychotic" }, { text: "Yes, an antidepressant" }],
      why: "No medicine is currently licensed to treat BPD, and experts are divided over whether medicine is helpful.",
    },
  },
  {
    id: "persd-crisis-plan",
    kicker: "Crisis plan",
    question: "What is a crisis plan, and what goes in mine?",
    hook: "A plan made on a calmer day, with your triggers, what helps and who to call, can guide you and others through the hardest moments.",
    short: "If you are supported by NHS mental health services, your care plan should include a crisis plan written with you. It lists what might trigger a crisis, the self-management skills that help you, and the numbers to call when they are not enough. After a crisis, the plan should be updated with what proved helpful.",
    sections: [
      {
        heading: "What a crisis means",
        paragraphs: [
          "A mental health crisis can mean different things to different people. It can include thinking about suicide, wanting to self-harm, or doing something that could put yourself or other people at risk.",
          "People with BPD often find that simply talking to somebody who understands their condition can help bring them out of a crisis.",
        ],
      },
      {
        heading: "Your care plan and crisis plan",
        paragraphs: [
          "If you are supported by NHS mental health services, you should have a care plan, made with you. It should include a crisis plan written by you and someone from the service.",
          "The crisis plan should list what might trigger a crisis, the self-management skills you have found helpful, and how to get help when they are not enough, including support numbers for out-of-hours and crisis teams.",
          "The Royal College of Psychiatrists says this plan should also help you cope with difficulties in between appointments, and it is sometimes called a crisis and contingency plan.",
        ],
      },
      {
        heading: "The numbers to call",
        paragraphs: [
          "You'll probably be given several telephone numbers to use in a crisis. One is likely to be your community mental health nurse, and others may include an out-of-hours number and your local crisis resolution team.",
          "Your local NHS urgent mental health helpline is available 24 hours a day, 7 days a week. You can also call 111 and select the mental health option.",
        ],
      },
      {
        heading: "When you see someone in a crisis",
        paragraphs: [
          "If you see a GP in a crisis, they should assess the risk, ask about what helped in past crises, help you use those skills, and offer you a follow-up appointment.",
          "If you need to spend time in hospital, it will be for as short a time as possible. Teams will want to help you remain in your community wherever possible and be involved in decisions about your care.",
        ],
      },
      {
        heading: "After a crisis",
        paragraphs: [
          "After a crisis, your crisis plan should be updated as soon as possible, together with you, to reflect which strategies have proved helpful.",
          "Family and friends you have told about your diagnosis can stay alert for signs you may be having a crisis. If you struggle with suicidal thoughts, the Staying Safe website has templates to help you make a safety plan.",
        ],
      },
    ],
    helps: [
      "Ask your care team to write a crisis plan with you.",
      "List your triggers and the self-management skills that have helped you before.",
      "Make sure your plan includes support numbers for out-of-hours and crisis teams.",
      "Tell close family or friends you trust, so they can stay alert for signs of a crisis.",
      "Ask for your crisis plan to be updated after a crisis.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note your triggers.",
      "List skills that have helped you.",
      "Check your plan has crisis numbers.",
    ],
    ask: "Can we write or update my crisis plan together, with the numbers I should call?",
    interactive: {
      kind: "timeline",
      title: "Building a crisis plan, step by step",
      steps: [
        { id: "triggers", when: "Step 1", title: "Know your triggers", points: ["What might lead to a crisis for you.", "Write it with someone from your service."] },
        { id: "skills", when: "Step 2", title: "What helps you", points: ["Self-management skills you have used before.", "Talking to someone who understands can help."] },
        { id: "numbers", when: "Step 3", title: "Who to call", points: ["Your mental health nurse and crisis team.", "Out-of-hours numbers, and 111 mental health option."] },
        { id: "people", when: "Step 4", title: "People you trust", points: ["Family and friends can stay alert for signs.", "Share your care team's details with them."] },
        { id: "review", when: "Step 5", title: "Update it afterwards", points: ["After a crisis, review what proved helpful.", "Change the plan together, as soon as possible."] },
      ],
    },
    sources: [NICE_CG78, RETHINK_BPD, RCPSYCH_PD, NHS_TREATMENT, NHS_DIAGNOSIS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What should a crisis plan include?",
      options: [{ text: "Triggers, helpful skills and numbers to call", right: true }, { text: "Only your diagnosis" }, { text: "Just a hospital address" }],
      why: "The crisis plan should list what might trigger a crisis, the self-management skills you have found helpful, and how to get help when they are not enough.",
    },
  },
  {
    id: "persd-emotions",
    kicker: "Emotions",
    question: "How can I cope when my emotions feel overwhelming?",
    hook: "Intense emotions can feel impossible to ride out. Skills from DBT and mindfulness, a calming breath and steady routines can make them more manageable.",
    short: "Therapies such as DBT teach skills to handle distress, understand your feelings and cope in safer ways, and they start from accepting that your emotions are valid and real. Mindfulness, calming breathing and looking after sleep, activity and routine can help too. Not every technique suits everyone, so try different things.",
    sections: [
      {
        heading: "Skills you can learn",
        paragraphs: [
          "DBT can help you develop alternative behaviours. These can either prevent difficult emotions from building up or help you cope with them in a safer way.",
          "Its skills include distress tolerance, learning to handle pain and distress in helpful ways, and emotional regulation, identifying your feelings and understanding why they happen. You can also find DBT self-help materials and workbooks online.",
        ],
      },
      {
        heading: "Validation, and stepping back",
        paragraphs: [
          "DBT uses validation: accepting your emotions are valid, real and acceptable. Having intense emotions does not make you a terrible or worthless person.",
          "MBT helps you step back from an urge or a thought and examine whether it is useful and realistic. For example, saying to yourself that you're only thinking this way because you're upset.",
        ],
      },
      {
        heading: "Noticing the present moment",
        paragraphs: [
          "Mindfulness means paying attention to your thoughts, feelings, body and the world around you, moment by moment. It can help you notice when thoughts are taking over and see them as mental events that do not have to control you.",
          "Some people find it helpful to silently name thoughts and feelings, such as: this is anxiety. Mindfulness is not right for everyone, and some people find it can make them feel worse.",
        ],
      },
      {
        heading: "Calming the body",
        paragraphs: [
          "A calming breathing exercise takes just a few minutes and can be done anywhere. Breathe in gently through your nose, counting steadily from 1 to 5 if it helps, let it flow out through your mouth, and repeat for at least 5 minutes.",
          "You will get the most benefit if you do it regularly, as part of your daily routine. If breathing exercises are not working for you or cause difficulty, stop and try other relaxation techniques.",
        ],
      },
      {
        heading: "Everyday foundations",
        paragraphs: [
          "Self-care includes looking after your diet, sleep, exercise, daily routine and relationships. Being active can raise your self-esteem and help positively change your mood.",
          "For sleep problems, NICE suggests a bedtime routine, avoiding caffeine and cutting down on exciting films or programmes before bed. When you are struggling, the NHS suggests staying away from drugs and alcohol.",
        ],
      },
    ],
    helps: [
      "Ask about DBT, or try DBT self-help materials and workbooks.",
      "When an urge comes, try to step back and ask whether the thought is useful and realistic.",
      "Silently name what you feel, such as: this is anxiety.",
      "Practise a calming breathing exercise for at least 5 minutes, as part of your daily routine.",
      "Keep a bedtime routine and avoid caffeine.",
      CRISIS,
    ],
    tryThisWeek: [
      "Try one DBT self-help exercise.",
      "Name a feeling as it comes.",
      "Breathe calmly for 5 minutes a day.",
    ],
    ask: "Can I learn DBT skills, and is there self-help I can start while I wait?",
    interactive: {
      kind: "scenarios",
      title: "When feelings run high",
      scenarios: [
        {
          id: "anger",
          situation: "A wave of anger rises after a small comment.",
          options: [{ text: "Step back and name the feeling", best: true }, { text: "Act on it straight away" }],
          why: "Stepping back lets you examine whether a thought is useful and realistic, and naming a feeling can help you notice it without being controlled by it.",
        },
        {
          id: "guilt",
          situation: "You feel guilty for feeling so upset.",
          options: [{ text: "Accept the feeling is valid and real", best: true }, { text: "Tell yourself you are a bad person" }],
          why: "DBT uses validation: accepting your emotions are valid, real and acceptable. Having them does not make you a terrible person.",
        },
        {
          id: "racing",
          situation: "Your mind is racing and you cannot settle.",
          options: [{ text: "Try slow, gentle breathing", best: true }, { text: "Force the thoughts away" }],
          why: "Mindfulness is not about making thoughts go away, but seeing them come and go. A calming breath for a few minutes can help.",
        },
        {
          id: "sleep",
          situation: "You can't sleep after a hard day.",
          options: [{ text: "Keep to your bedtime routine", best: true }, { text: "Have a strong coffee and watch a thriller" }],
          why: "NICE suggests a bedtime routine, avoiding caffeine and cutting down on exciting films or programmes before bed.",
        },
      ],
    },
    sources: [RCPSYCH_PD, NHS_TREATMENT, NHS_MINDFUL, NHS_BREATHING, RETHINK_BPD, NICE_CG78, NHS_FIVE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does validation mean in DBT?",
      options: [{ text: "Accepting your emotions are valid, real and acceptable", right: true }, { text: "Ignoring your emotions" }, { text: "Agreeing with everyone else" }],
      why: "DBT uses validation: accepting your emotions are valid, real and acceptable.",
    },
  },
  {
    id: "persd-relationships",
    kicker: "Relationships",
    question: "Why do my relationships feel so intense, and what can help?",
    hook: "Fear of being left, or of being smothered, can turn closeness into a storm. Seeing the grey areas and checking your reading of others can calm it.",
    short: "With BPD you may fear people will abandon you, or feel they get too close, and both can bring intense anxiety and anger. Many people see relationships as all good or all bad. Therapies such as DBT and MBT help with this, and sharing your feelings with people you trust can help them support you.",
    sections: [
      {
        heading: "Fear of being left",
        paragraphs: [
          "With BPD, you may feel that other people abandon you when you most need them, or that they get too close and smother you.",
          "Fear of abandonment can lead to intense anxiety and anger, and to frantic efforts not to be left alone, such as constantly texting or phoning someone. Feeling smothered can also provoke fear and anger, and you may then withdraw or push people away.",
        ],
      },
      {
        heading: "All or nothing",
        paragraphs: [
          "Many people with BPD seem stuck with a very rigid black-white view of relationships: either a relationship is perfect and the person is wonderful, or it is doomed.",
          "Relationships, including with professional carers, can involve go away, please don't go states of mind. This is confusing for both people, and can often lead to break-ups.",
        ],
      },
      {
        heading: "Why it can happen",
        paragraphs: [
          "If, as a child, you were abused, neglected or mistreated by a primary caregiver, it might affect the way you experience relationships as an adult.",
        ],
      },
      {
        heading: "Skills that help",
        paragraphs: [
          "DBT includes interpersonal effectiveness: building and maintaining relationships, resolving conflicts and getting your wants and needs met. It also helps you see that most things in life are rarely black or white.",
          "MBT helps you recognise that other people have their own thoughts, emotions and needs, and that your reading of their state of mind may not be correct. It also helps you think about how your actions might affect others.",
        ],
      },
      {
        heading: "Letting people in",
        paragraphs: [
          "It can help to share your feelings with people who are important to you and whom you trust. Friends and family can support you better if they know what you find challenging and what makes you feel worse.",
          "Involving people close to you in treatment may make it more effective, but the decision to talk about your condition is entirely your own. Good relationships can also help build a sense of belonging and self-worth.",
        ],
      },
    ],
    helps: [
      "Notice when you see a relationship as all good or all bad, and look for the grey area.",
      "Before reacting, remember that your reading of what someone else thinks may not be correct.",
      "Tell people you trust what you find challenging and what makes you feel worse.",
      "Ask whether your treatment can involve people close to you.",
      "Make time for people, such as arranging a fixed time to eat together.",
      CRISIS,
    ],
    tryThisWeek: [
      "Look for the grey area.",
      "Check your reading of others.",
      "Share what you find hard.",
    ],
    ask: "Can my treatment help with relationships, and could people close to me be involved?",
    interactive: {
      kind: "scenarios",
      title: "Moments with the people you love",
      scenarios: [
        {
          id: "no-reply",
          situation: "A friend has not replied to your message for hours.",
          options: [{ text: "Remember you may not know what they are thinking", best: true }, { text: "Keep texting and phoning until they answer" }],
          why: "Other people have their own thoughts and needs, and your reading of their state of mind may not be correct.",
        },
        {
          id: "let-down",
          situation: "Someone you love lets you down once.",
          options: [{ text: "Look for the grey area", best: true }, { text: "Decide the relationship is doomed" }],
          why: "A black-white view of relationships can lead to break-ups. Most things in life are rarely black or white.",
        },
        {
          id: "feelings",
          situation: "You feel hurt but are not sure how to say so.",
          options: [{ text: "Share your feelings with someone you trust", best: true }, { text: "Push them away first" }],
          why: "It can help to share your feelings with people who are important to you and whom you trust.",
        },
        {
          id: "telling",
          situation: "You are unsure whether to tell your family about your diagnosis.",
          options: [{ text: "Decide in your own time", best: true }, { text: "Feel you have to tell everyone at once" }],
          why: "Involving people close to you may make treatment more effective, but the decision to talk about your condition is entirely your own.",
        },
      ],
    },
    sources: [NHS_SYMPTOMS, NHS_TREATMENT, RCPSYCH_PD, NHS_DIAGNOSIS, NHS_FIVE, RETHINK_BPD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does MBT help you recognise about other people?",
      options: [{ text: "That they have their own thoughts, emotions and needs", right: true }, { text: "That they always think the worst of you" }, { text: "That their feelings do not matter" }],
      why: "MBT helps you recognise that other people have their own thoughts, emotions and needs, and that your reading of their state of mind may not be correct.",
    },
  },
  {
    id: "persd-self-harm",
    kicker: "Self-harm",
    question: "Why do I get urges to hurt myself, and what can help?",
    hook: "Self-harm is most often a way of coping with unbearable feelings. There are safer ways to get through an urge, and support for the feelings underneath.",
    short: "It is common for people with BPD to self-harm, most often as a way to express or cope with emotional distress. The relief does not last, because the underlying issue is still there, so it's important to get support as soon as possible. Therapy, delaying an urge and telling someone you trust can all help.",
    sections: [
      {
        heading: "A way of coping",
        paragraphs: [
          "It is common for people who live with BPD to self-harm. Self-harm is most often described as a way to express or cope with emotional distress.",
          "Reasons can include trying to feel in control, punishing yourself, or relieving unbearable distress, and they can change over time. Most people try to hide self-harm, so the idea that it is attention-seeking is a common misunderstanding.",
        ],
      },
      {
        heading: "Why it matters to get support",
        paragraphs: [
          "Self-harm only provides temporary relief, because the underlying issue is still there. The earlier you get help, the easier it will be to learn other ways of coping.",
          "Not everyone who self-harms wants to end their life. But there is a clear link between self-harm and suicidal thoughts, so it's important to get support as soon as possible.",
        ],
      },
      {
        heading: "Therapy and your GP",
        paragraphs: [
          "A focus of some BPD treatment is finding other ways to deal with painful emotions. In DBT, self-harm is understood as a way of managing difficult emotions, and therapy helps you develop safer alternatives.",
          "Speak to a GP if you're harming yourself or having thoughts about it. They will listen, discuss the best options for you, and may refer you to a community mental health team for an assessment and a care plan.",
          "Rethink Mental Illness says specialist talking therapy for adults who self-harm should be between 4 and 10 sessions, and more can be offered if needed.",
        ],
      },
      {
        heading: "When an urge comes",
        paragraphs: [
          "Rethink suggests trying to delay: give yourself a short time to wait, use it to contact someone or distract yourself, and gradually increase the wait.",
          "Other things to try instead include writing down how you feel and ripping it up, screaming into a pillow, going for a walk or run, or playing a sport. Calm Harm is an app designed by the NHS to help people resist or manage the urge to self-harm.",
        ],
      },
      {
        heading: "Telling someone",
        paragraphs: [
          "Sharing your feelings with someone you trust can help you self-harm less and feel less alone. You could tell a friend, a family member, your GP or a helpline, and you only need to share what you're comfortable with.",
          "If writing is easier than talking, you can tell someone in a letter, an email or a recording. Harmless offers support to anyone affected by self-harm, of any age.",
        ],
      },
    ],
    helps: [
      "Speak to a GP if you're harming yourself or having thoughts about it.",
      "Try to delay acting on an urge, and contact someone while you wait.",
      "Try something that does not harm you, such as writing your feelings down and ripping them up, or going for a walk.",
      "Tell someone you trust, in person, in writing or through a helpline.",
      "Ask about DBT or another talking therapy to help you find safer ways to cope.",
      CRISIS,
    ],
    tryThisWeek: [
      "Speak to a GP.",
      "Practise delaying an urge.",
      "Tell one person you trust.",
    ],
    ask: "Can I be referred for therapy to help me find safer ways to cope with urges?",
    interactive: {
      kind: "scenarios",
      title: "Getting through, and getting support",
      scenarios: [
        {
          id: "urge",
          situation: "An urge to self-harm comes on suddenly.",
          options: [{ text: "Delay, and contact someone while you wait", best: true }, { text: "Act on it straight away" }],
          why: "Rethink suggests trying to delay, using the time to contact someone or distract yourself, and gradually increasing the wait.",
        },
        {
          id: "words",
          situation: "You want to tell someone but cannot find the words.",
          options: [{ text: "Write a letter or message instead", best: true }, { text: "Keep it to yourself" }],
          why: "You can tell someone in a letter, an email or a recording, and you only need to share what you're comfortable with.",
        },
        {
          id: "gp",
          situation: "You are worried about what a GP will think.",
          options: [{ text: "Go, and be as honest as you can", best: true }, { text: "Cancel the appointment" }],
          why: "A GP will listen and discuss the best options for you. It's important to be honest with them, even if you do not know why you self-harm.",
        },
        {
          id: "unsafe",
          situation: "You do not feel you can keep yourself safe.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait and see if it passes" }],
          why: "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one.",
        },
      ],
    },
    sources: [NHS_SH_WHY, RETHINK_BPD, RCPSYCH_PD, RETHINK_SH, NHS_SH_HELP, NHS_SH_TREAT, HARMLESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How is self-harm most often described?",
      options: [{ text: "A way to express or cope with emotional distress", right: true }, { text: "Attention-seeking" }, { text: "Something people do for fun" }],
      why: "Self-harm is most often described as a way to express or cope with emotional distress.",
    },
  },
  {
    id: "persd-carers",
    kicker: "Family and friends",
    question: "How can I support someone with BPD, and look after myself?",
    hook: "Loving someone with BPD can be hard. Understanding it, being involved with their agreement and getting support yourself all help.",
    short: "Supporting someone with a personality disorder diagnosis can be challenging, but many people lead full lives with the support of family and friends. Learning about BPD, asking what helps and, with their agreement, being involved in their care plan can make a difference. Carers can get a free carer's assessment and support of their own.",
    sections: [
      {
        heading: "It can be hard",
        paragraphs: [
          "Supporting someone with a personality disorder diagnosis can be challenging. It can be hard not to take the way they act personally, and it is okay to be frustrated.",
          "Many people with a personality disorder diagnosis lead full lives with the support of their family and friends, both emotional and practical.",
        ],
      },
      {
        heading: "Learning about it",
        paragraphs: [
          "Reading about BPD can help you understand why the person may act in certain ways, and become more aware of what situations make them more distressed.",
          "Ask them what their symptoms are, and whether they have self-management techniques you could help with. Some areas offer family therapy, or Knowledge and Understanding Framework training that teaches understanding and ways of communicating well.",
        ],
      },
      {
        heading: "Being part of their care",
        paragraphs: [
          "Once a diagnosis is confirmed, people are encouraged to tell close family and friends, who can then stay alert for signs of a crisis. If the person agrees, you can be involved in their care planning and see a copy of their care plan.",
          "Unless the person agrees, confidential information about them cannot be passed on to you. NICE says services should ask directly whether the person wants their family involved, and tell families about local support groups.",
        ],
      },
      {
        heading: "Seeing the whole person",
        paragraphs: [
          "Try to work together to decide what works best for you both, and remember that someone is more than their mental illness. A carer who helped write the Royal College of Psychiatrists' guide says caring is about walking alongside someone, not fixing them.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "If you care for someone, you can ask your local council's adult social services for a free carer's assessment. Anyone over 18 can ask for one, and it might recommend things like a break from caring or local support groups.",
          "The Carers UK helpline is on 0808 808 7777, Monday to Friday, 9am to 6pm. If caring is affecting your own mental health, you can see your GP.",
        ],
      },
    ],
    helps: [
      "Read about BPD from reliable sources.",
      "Ask the person what their symptoms are and how you can help with their self-management.",
      "With their agreement, ask to be involved in their care planning.",
      "Ask your council for a free carer's assessment.",
      "Join a carers' support group, take breaks, and see your GP if caring affects your own mental health.",
      CRISIS,
    ],
    tryThisWeek: [
      "Read one reliable guide to BPD.",
      "Ask what helps them most.",
      "Ask for a carer's assessment.",
    ],
    ask: "With their agreement, can I be involved in their care plan, and is there support for families here?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments as a supporter",
      scenarios: [
        {
          id: "hurtful",
          situation: "The person says something hurtful when distressed.",
          options: [{ text: "Try not to take it personally", best: true }, { text: "Argue back straight away" }],
          why: "It can be hard not to take the way they act personally and feel they are taking things out on you. It is okay to be frustrated.",
        },
        {
          id: "treatment",
          situation: "You want to know more about their treatment.",
          options: [{ text: "Ask them if you can be involved", best: true }, { text: "Ask staff without telling them" }],
          why: "Unless the person agrees, confidential information about them cannot be passed on to you. With their agreement, you can be involved in care planning.",
        },
        {
          id: "worn-out",
          situation: "You feel worn out and frustrated.",
          options: [{ text: "Talk honestly to someone you trust", best: true }, { text: "Hide how you feel" }],
          why: "Find someone you can be totally honest with and talk to them about your feelings. A carer's assessment and support groups can help too.",
        },
        {
          id: "fix",
          situation: "You feel you have to fix everything for them.",
          options: [{ text: "Walk alongside them instead", best: true }, { text: "Take over every decision" }],
          why: "Try to work together to decide what works best for you both. Caring is about walking alongside someone, not fixing them.",
        },
      ],
    },
    sources: [RCPSYCH_PD, RETHINK_BPD, NHS_DIAGNOSIS, NICE_CG78, NHS_CARER, CARERS_UK, RETHINK_PD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Who can ask for a free carer's assessment?",
      options: [{ text: "Anyone over 18 who cares for someone", right: true }, { text: "Only paid carers" }, { text: "Only people who live with the person" }],
      why: "If you care for someone, you can ask your local council's adult social services for a free carer's assessment. Anyone over 18 can ask for one.",
    },
  },
  {
    id: "persd-support",
    kicker: "Support",
    question: "Where can I find support, and people who understand?",
    hook: "You do not have to work it out alone. Peer groups, recovery colleges, charities and helplines are there, some of them at any hour.",
    short: "Peer support from people with the same diagnosis can help you feel connected, validated and hopeful. Recovery colleges offer free NHS courses you can usually refer yourself to, and charities such as Emergence and BPD World offer information and community. If you need to talk now, Samaritans and Shout are there 24 hours a day.",
    sections: [
      {
        heading: "Peer support",
        paragraphs: [
          "Peer support is where someone with a personality disorder diagnosis supports someone else with that diagnosis. It has been shown to help people feel connected, validated and hopeful.",
          "Support groups let people with similar issues share experiences and get mutual support. You can search for local groups online, including Rethink Mental Illness groups, or ask a GP about groups near you.",
        ],
      },
      {
        heading: "Recovery colleges",
        paragraphs: [
          "Recovery colleges are part of the NHS and offer free courses about mental health, lasting from 1 day up to 8 weeks. You can usually refer yourself.",
          "Some have groups where you can meet other people diagnosed with personality disorder, supported by mental health professionals and lived experience practitioners.",
        ],
      },
      {
        heading: "Charities and other help",
        paragraphs: [
          "Emergence is a service user-led organisation supporting all people affected by personality disorder. BPD World offers information and an online support forum, and Borderline Arts uses the arts to raise awareness and break down stigma.",
          "Occupational therapists can help you develop a routine, take part in social activities and get back to work.",
        ],
      },
      {
        heading: "If you need to talk now",
        paragraphs: [
          "Samaritans is free to call any time, day or night, on 116 123, from any phone. Shout is a free, confidential text service, open 24 hours: text SHOUT to 85258.",
          "If you need urgent help for your mental health, call 111 and select the mental health option. If you do not feel you can keep yourself safe, call 999 or go to A&E.",
        ],
      },
      {
        heading: "If your care is not right",
        paragraphs: [
          "People with BPD have sometimes been excluded from NHS services because of their diagnosis. But the NHS should not refuse to give you specialist help because of it.",
          "If you are not happy with your care, you can talk to your GP or mental health team, contact the Patient Advice and Liaison Service (PALS), ask for a second opinion, get an advocate or make a complaint.",
        ],
      },
    ],
    helps: [
      "Look for a peer support group, online or near you.",
      "Find your local recovery college; you can usually refer yourself.",
      "Explore charities such as Emergence and BPD World.",
      "If you are unhappy with your care, contact PALS or ask for an advocate.",
      CRISIS,
    ],
    tryThisWeek: [
      "Search for a support group.",
      "Find your local recovery college.",
      "Look up Emergence or BPD World.",
    ],
    ask: "Is there a recovery college, peer support group or specialist personality disorder service near me?",
    interactive: {
      kind: "flip-cards",
      title: "Where to turn",
      intro: "Turn each card to see when each kind of support suits and what it offers.",
      cards: [
        { id: "samaritans", front: "Samaritans, 116 123", when: "Any time, day or night", back: "Free to call from any phone. Trained volunteers listen without judging." },
        { id: "shout", front: "Shout, text 85258", when: "If you would rather text", back: "A free, confidential text service, open 24 hours. Text SHOUT to start." },
        { id: "111", front: "NHS 111, mental health option", when: "Urgent help for your mental health", back: "111 will tell you the right place to get help, and you may speak to a mental health professional." },
        { id: "peer", front: "Peer support", when: "To meet people who understand", back: "Support from someone with the same diagnosis, in a group or one to one." },
        { id: "recovery-college", front: "Recovery colleges", when: "To learn and build skills", back: "Free NHS courses about mental health. You can usually refer yourself." },
        { id: "emergence", front: "Emergence and BPD World", when: "Information and community", back: "Organisations for people affected by personality disorder, including an online forum." },
        { id: "pals", front: "PALS and advocacy", when: "If your care is not right", back: "Help to sort problems with NHS care, or to make your voice heard." },
      ],
    },
    sources: [RETHINK_BPD, RCPSYCH_PD, SAMARITANS, SHOUT, NHS_URGENT, NHS_SUICIDAL, RETHINK_PD, NHS_PD],
    quiz: {
      question: "How do you contact Shout?",
      options: [{ text: "Text SHOUT to 85258", right: true }, { text: "Call 116 123" }, { text: "Email them" }],
      why: "Shout is a free, confidential text service, open 24 hours: text SHOUT to 85258.",
    },
  },
];
