import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Schizophrenia page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, the Royal
// College of Psychiatrists and Rethink Mental Illness, with GOV.UK for work, money and driving, and Carers UK.
// mind.org.uk could not be read today (it answers with a bot check), so no Mind page is cited. Safe messaging
// throughout: no method details and no warning-sign lists of the kind the NHS gives for suicide, and the
// violence myth is answered only with what the sources say about stigma. Every answer ends its "What helps"
// list with the crisis routes as the NHS gives them (999 or A&E, 111 mental health option, Samaritans 116 123,
// Shout 85258). General information only; it never replaces what a person's own GP, psychiatrist or mental
// health team tells them, and no medicine should be stopped or changed without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const rcpsych = (label: string, path: string): LearnSource => ({ label: `Royal College of Psychiatrists: ${label}`, url: `https://www.rcpsych.ac.uk/mental-health/${path}` });
const rethink = (label: string, path: string): LearnSource => ({ label: `Rethink Mental Illness: ${label}`, url: `https://www.rethink.org/advice-and-information/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_OVERVIEW = nhs("Schizophrenia: overview", "mental-health/conditions/schizophrenia/overview/");
const NHS_SYMPTOMS = nhs("Schizophrenia: symptoms", "mental-health/conditions/schizophrenia/symptoms/");
const NHS_CAUSES = nhs("Schizophrenia: causes", "mental-health/conditions/schizophrenia/causes/");
const NHS_DIAGNOSIS = nhs("Schizophrenia: diagnosis", "mental-health/conditions/schizophrenia/diagnosis/");
const NHS_TREATMENT = nhs("Schizophrenia: treatment", "mental-health/conditions/schizophrenia/treatment/");
const NHS_LIVING = nhs("Schizophrenia: living with", "mental-health/conditions/schizophrenia/living-with/");
const NHS_SMI_CHECK = nhs("Annual health check for people with severe mental health conditions", "mental-health/social-care-and-your-rights/annual-health-check-smi/");
const NHS_CARER_ASSESSMENT = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");
const EMM_URGENT: LearnSource = { label: "NHS Every Mind Matters: Urgent support", url: "https://www.nhs.uk/every-mind-matters/urgent-support/" };

const RCP_SCHIZ = rcpsych("Schizophrenia", "mental-illnesses-and-mental-health-problems/schizophrenia");
const RCP_ANTIPSYCHOTICS = rcpsych("Antipsychotics", "treatments-and-wellbeing/antipsychotics");

const RETHINK_SCHIZ = rethink("Schizophrenia explained: symptoms, diagnosis, treatment, and recovery", "about-mental-illness/mental-health-conditions/schizophrenia-explained-symptoms-diagnosis-treatment-and-recovery/");
const RETHINK_ANTIPSYCHOTICS = rethink("Antipsychotics", "living-with-mental-illness/medications/antipsychotics/");
const RETHINK_PHYSICAL = rethink("Physical health checks for severe mental illness", "living-with-mental-illness/health-wellbeing-and-neurodiversity/physical-health-checks-for-severe-mental-illness-what-you-need-to-know/");
const RETHINK_RECOVERY = rethink("Recovery and mental illness", "living-with-mental-illness/treatment-and-support/recovery-and-mental-illness/");
const RETHINK_UNUSUAL = rethink("Responding to unusual behaviour linked to mental illness", "carers-hub/advice-for-loved-ones-and-carers/responding-to-unusual-behaviour-linked-to-mental-illness/");
const RETHINK_CRISIS = rethink("Getting help for someone in a mental health crisis", "carers-hub/getting-help-for-someone-in-crisis/getting-help-for-someone-in-a-mental-health-crisis/");

const SAM_CONTACT: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const CARERSUK_ASSESSMENT: LearnSource = { label: "Carers UK: Having a carer's assessment", url: "https://www.carersuk.org/help-and-advice/practical-support/carers-assessment/" };

const GOV_EQUALITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ADJUSTMENTS = gov("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");
const GOV_PIP = gov("Personal Independence Payment (PIP)", "pip");
const GOV_DRIVING = gov("Schizophrenia and driving", "schizophrenia-and-driving");
const GOV_CARERS_ALLOWANCE = gov("Carer's Allowance", "carers-allowance");

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If someone's life is at risk or you cannot keep yourself or someone else safe, call 999 or go to A&E. For urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258.";

export const schizophreniaAnswers: LearnArticle[] = [
  {
    id: "scz-what-it-is",
    kicker: "Understanding",
    question: "What is schizophrenia, really?",
    hook: "It is not a split personality, and it does not usually make anyone violent. It is a treatable condition, and many people recover.",
    short: "Schizophrenia is a long-term mental health condition that doctors often describe as a type of psychosis. It can bring hallucinations and unusual beliefs, and quieter symptoms such as losing interest and wanting to avoid people. Many people recover, and the earlier it is treated, the better.",
    sections: [
      {
        heading: "A long-term condition",
        paragraphs: [
          "Schizophrenia is a long-term mental health condition that causes a range of different psychological symptoms. Doctors often describe it as a type of psychosis, which means the person may not always be able to tell their own thoughts and ideas apart from reality.",
          "The Royal College of Psychiatrists says people living with it can experience extreme differences in the way they perceive the world around them, and can find it difficult to recognise what is real and what is not.",
        ],
      },
      {
        heading: "What it can involve",
        paragraphs: [
          "Symptoms can include hallucinations, which means hearing or seeing things that do not exist outside the mind, and delusions, which are unusual beliefs not based on reality. Thoughts and speech can become muddled.",
          "There are quieter symptoms too: losing interest in everyday activities, not wanting to look after yourself, wanting to avoid people, including friends, and feeling disconnected from your feelings or emotions.",
        ],
      },
      {
        heading: "It comes and goes",
        paragraphs: [
          "People often have episodes when their symptoms are particularly severe, followed by periods with few or no symptoms. The condition may develop slowly, and the first signs can be hard to spot, as they often develop during the teenage years.",
          "The Royal College of Psychiatrists says schizophrenia is most likely to develop between the ages of 20 and 30, though it also develops in younger and older people. It tends to develop later in women than in men.",
        ],
      },
      {
        heading: "Common myths",
        paragraphs: [
          "People with schizophrenia do not have a split personality, and the condition does not usually cause someone to be violent. Rethink Mental Illness says people who live with schizophrenia are far more likely to be harmed by other people than to harm others.",
          "Many people who live with schizophrenia can work, full or part time, especially when their condition is stable and they have the right support.",
        ],
      },
      {
        heading: "Recovery is possible",
        paragraphs: [
          "Many people recover from schizophrenia, although they may have periods when symptoms return, called relapses. Support and treatment can help reduce the impact the condition has on daily life.",
          "If you are having symptoms, see a GP as soon as possible. The earlier schizophrenia is treated, the better.",
        ],
      },
    ],
    helps: [
      "If you are having symptoms of schizophrenia, see a GP as soon as possible.",
      "Remember that schizophrenia is treatable, and people with it can live full and happy lives.",
      "Learn the facts: schizophrenia is not a split personality, and it does not usually make someone violent.",
      "Talk to others with a similar condition through a charity or support group; most people find it comforting.",
      CRISIS,
    ],
    tryThisWeek: [
      "See a GP about any symptoms.",
      "Read the facts behind the myths.",
      "Look up a support group.",
    ],
    ask: "Could what I am experiencing be schizophrenia, and what happens next?",
    interactive: {
      kind: "flip-cards",
      title: "The words you may hear, card by card",
      intro: "Turn each card to see what each word means. Not everyone has every symptom.",
      cards: [
        { id: "psychosis", front: "Psychosis", when: "How doctors often describe it", back: "The person may not always be able to tell their own thoughts and ideas apart from reality." },
        { id: "hallucinations", front: "Hallucinations", when: "A positive symptom", back: "Hearing or seeing things that do not exist outside the mind. Hearing voices is the most common." },
        { id: "delusions", front: "Delusions", when: "A positive symptom", back: "Unusual beliefs not based on reality, held with complete conviction." },
        { id: "negative", front: "Negative symptoms", when: "The quieter symptoms", back: "Losing interest, not looking after yourself, avoiding people and feeling disconnected from emotions." },
        { id: "relapse", front: "Relapse", when: "When symptoms return", back: "Many people recover, though symptoms may come back for a time. Treatment and support help." },
        { id: "split", front: "Split personality?", when: "A common myth", back: "People with schizophrenia do not have a split personality. That is a completely different diagnosis." },
      ],
    },
    sources: [NHS_OVERVIEW, NHS_SYMPTOMS, RCP_SCHIZ, RETHINK_SCHIZ, NHS_LIVING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Does schizophrenia mean having a split personality?",
      options: [{ text: "No", right: true }, { text: "Yes, always" }, { text: "Only during an episode" }],
      why: "People with schizophrenia do not have a split personality, and the condition does not usually cause someone to be violent.",
    },
  },
  {
    id: "scz-symptoms",
    kicker: "Symptoms",
    question: "What are positive and negative symptoms?",
    hook: "Positive does not mean good, and negative does not mean bad. One is what gets added; the other is what slips away.",
    short: "Positive symptoms are changes added to a person's experience, such as hearing voices or holding unusual beliefs. Negative symptoms are things a person stops doing or feeling, such as losing motivation or withdrawing from others. They can be mistaken for laziness or rudeness, but they are part of the illness.",
    sections: [
      {
        heading: "Positive and negative, not good and bad",
        paragraphs: [
          "Symptoms are usually grouped as positive or negative. This does not mean good or bad. Positive symptoms are changes in behaviour or thoughts that are added to a person's experience, such as hallucinations or delusions.",
          "Negative symptoms are things a person stops doing or experiencing. People may withdraw from the world around them, take no interest in everyday social contact, and often appear emotionless and flat.",
        ],
      },
      {
        heading: "Hallucinations and voices",
        paragraphs: [
          "Hallucinations are where someone sees, hears, smells, tastes or feels things that do not exist outside their mind. The most common is hearing voices.",
          "Hallucinations are very real to the person, even though people around them cannot hear the voices. Brain scans show changes in the speech area of the brain when people hear voices, as if the brain mistakes thoughts for real voices.",
          "Rethink Mental Illness says voices can be male or female, someone you know or someone you have never heard, whispering or shouting. You might hear them sometimes or all of the time.",
        ],
      },
      {
        heading: "Delusions and muddled thinking",
        paragraphs: [
          "A delusion is a belief held with complete conviction, even though it is based on a mistaken, strange or unrealistic view. Someone may believe they are being watched or followed, or find hidden meanings in everyday events.",
          "Thoughts can feel misty or hazy, and it can be hard to concentrate, read or follow a TV programme. Some people feel their thoughts are not their own, or that they are being taken away.",
        ],
      },
      {
        heading: "The quieter symptoms",
        paragraphs: [
          "Negative symptoms can include losing motivation, speaking less, showing less emotion, no longer looking after yourself, wanting to be alone, and not enjoying things you used to enjoy.",
          "They can appear months or years before a first acute episode. They are often mistaken for laziness or rudeness, which can strain relationships, but they are still extremely difficult for the person experiencing them.",
          "Rethink Mental Illness says negative symptoms often last longer than positive ones. Problems with remembering, learning, concentrating and making decisions can be part of them too.",
        ],
      },
      {
        heading: "Everyone is different",
        paragraphs: [
          "You are unlikely to have every symptom, or to have them all of the time. Different symptoms can come at different times, and be more or less severe.",
          "During a first acute episode, a person may not think they need help. Most people who have psychotic episodes are not a danger to others.",
        ],
      },
    ],
    helps: [
      "Remember that negative symptoms are part of the illness, not laziness or rudeness.",
      "If you are having symptoms, see a GP as soon as possible; the earlier schizophrenia is treated, the better.",
      "Speak to a supportive friend, family member or someone else who has experienced psychosis.",
      "Try relaxation techniques, mindfulness and breathing exercises to cope with upsetting experiences.",
      CRISIS,
    ],
    tryThisWeek: [
      "Remind yourself: it is the illness.",
      "Talk to someone supportive.",
      "Try a breathing exercise.",
    ],
    ask: "Which of my symptoms are positive and which are negative, and what can help with each?",
    interactive: {
      kind: "signs",
      title: "Experiences you may notice",
      intro: "Tick any you recognise. Not everyone has all of them, and they can come at different times.",
      signs: ["Hearing voices others cannot hear", "Seeing or feeling things others do not", "Feeling watched or followed", "Seeing hidden messages in everyday life", "Thoughts that feel muddled or hazy", "Thoughts that do not feel your own", "Losing interest in everyday activities", "Not looking after yourself as usual", "Wanting to avoid people, even friends", "Feeling flat or cut off from emotions", "Changes in sleep"],
      after: "These can all be symptoms of schizophrenia. Share what you notice with a GP or your care team; the earlier it is treated, the better.",
      copyHeading: "Experiences I have noticed",
    },
    sources: [NHS_SYMPTOMS, RCP_SCHIZ, RETHINK_SCHIZ, NHS_OVERVIEW, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does a positive symptom mean in schizophrenia?",
      options: [{ text: "Something added to experience, like voices", right: true }, { text: "A good sign of recovery" }, { text: "A symptom that helps you" }],
      why: "Positive symptoms are changes in behaviour or thoughts that are added to a person's experience, such as hallucinations or delusions.",
    },
  },
  {
    id: "scz-causes",
    kicker: "Causes",
    question: "Why did this happen to me?",
    hook: "Genes, the brain, stress and drugs can all play a part. None of them alone causes it, and whatever the reason, it is not your fault.",
    short: "The exact causes of schizophrenia are unknown. A mix of genetic, physical, psychological and environmental factors can make someone more likely to develop it, and stress or drugs such as cannabis can trigger it in someone already vulnerable. Whatever the reason, it is not your fault.",
    sections: [
      {
        heading: "No single cause",
        paragraphs: [
          "The exact causes of schizophrenia are unknown. Research suggests a mix of physical, genetic, psychological and environmental factors can make a person more likely to develop it.",
          "Some people may be more prone to it, and a stressful or emotional life event might then trigger a psychotic episode. The Royal College of Psychiatrists says no single risk factor causes schizophrenia.",
        ],
      },
      {
        heading: "Genes and families",
        paragraphs: [
          "Schizophrenia tends to run in families, but no single gene is thought to be responsible. Having these genes does not necessarily mean you will develop it.",
          "In identical twins, if one twin develops schizophrenia, the other has a 1 in 2 chance of developing it too. In non-identical twins the chance is 1 in 8, and in the general population about 1 in 100. This suggests genes are not the only factor.",
          "The Royal College of Psychiatrists says growing up or living in a stable environment could protect someone with genetic risk factors from developing a severe mental illness.",
        ],
      },
      {
        heading: "The brain",
        paragraphs: [
          "Studies have found subtle differences in the structure of some people's brains, and it is thought people with schizophrenia may have different amounts of brain chemicals such as dopamine.",
          "People who develop schizophrenia are more likely to have had complications before or during birth, such as premature labour or a lack of oxygen. These may have a subtle effect on brain development.",
        ],
      },
      {
        heading: "Triggers: stress and drugs",
        paragraphs: [
          "Stressful life events such as bereavement, losing a job or home, divorce, the end of a relationship or abuse do not cause schizophrenia. But they can trigger it in someone already vulnerable to it.",
          "Using drugs, particularly cannabis, cocaine, LSD or amphetamines, can increase the risk. The Royal College of Psychiatrists says research suggests cannabis can as much as double the risk, and stronger forms such as skunk may increase it further.",
          "If someone has had episodes of psychosis or schizophrenia before, using drugs can cause a relapse or stop symptoms getting better.",
        ],
      },
      {
        heading: "Not your fault",
        paragraphs: [
          "Many people experience these things and never develop schizophrenia, and some people develop it with none of them. Whatever the reason, if you develop schizophrenia, it is not your fault.",
          "If you are using drugs or alcohol to cope, this should not stop you getting timely, evidence-based treatment for schizophrenia.",
        ],
      },
    ],
    helps: [
      "Remember that whatever the reason, developing schizophrenia is not your fault.",
      "Avoid cannabis and other street drugs, which can trigger psychosis or a relapse.",
      "If you are using drugs or alcohol and finding it hard to stop, ask your care co-ordinator or GP for help.",
      "Try to avoid too much stress, and keep a regular sleep pattern.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell yourself it is not your fault.",
      "Ask for help with drugs or alcohol.",
      "Keep a regular sleep pattern.",
    ],
    ask: "Is there anything in my life that could be making my symptoms worse, and how can you help with it?",
    interactive: {
      kind: "risk-check",
      title: "What can raise the risk",
      intro: "Tick any that apply. None of them alone causes schizophrenia, and many people with them never develop it.",
      items: [
        { id: "family", label: "A close relative with it", note: "Schizophrenia tends to run in families, but having the genes does not mean you will develop it.", changeable: false },
        { id: "birth", label: "Complications at birth", note: "Problems before or during birth may have a subtle effect on brain development.", changeable: false },
        { id: "childhood", label: "Abuse or neglect as a child", note: "This makes schizophrenia more likely to develop, as with other mental illnesses.", changeable: false },
        { id: "stress", label: "A very stressful time", note: "Stress does not cause it, but can trigger it in someone vulnerable. Try to avoid too much stress.", changeable: true },
        { id: "cannabis", label: "Using cannabis", note: "Research suggests cannabis can as much as double the risk. It can also cause a relapse.", changeable: true },
        { id: "other-drugs", label: "Using other street drugs", note: "Cocaine, LSD or amphetamines can increase the risk. Ask your GP or care co-ordinator for help to stop.", changeable: true },
      ],
    },
    sources: [NHS_CAUSES, RCP_SCHIZ, RETHINK_SCHIZ, NHS_LIVING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Does a stressful life event cause schizophrenia?",
      options: [{ text: "No, but it can trigger it in someone vulnerable", right: true }, { text: "Yes, in everyone" }, { text: "Stress has nothing to do with it" }],
      why: "Stressful life events do not cause schizophrenia. But they can trigger it in someone already vulnerable to it.",
    },
  },
  {
    id: "scz-diagnosis",
    kicker: "Diagnosis",
    question: "How is schizophrenia diagnosed, and who will I see?",
    hook: "There is no blood test or scan for it. A diagnosis comes from conversations with a specialist, and it can be a step towards the right help.",
    short: "There is no single test for schizophrenia. A GP checks for other causes and refers you to a specialist mental health team, where a psychiatrist or specialist nurse carries out a fuller assessment. A diagnosis can take time, and it can be a positive step towards good information and treatment.",
    sections: [
      {
        heading: "Start with a GP",
        paragraphs: [
          "There is no single test for schizophrenia. If you are worried you may be developing symptoms, see a GP as soon as possible, because the earlier it is treated, the better.",
          "The GP will ask about your symptoms and check they are not the result of other causes, such as recreational drug use. They will probably refer you to a specialist mental health service or an early intervention in psychosis service.",
        ],
      },
      {
        heading: "The mental health team",
        paragraphs: [
          "Community mental health teams are made up of different professionals who support people with complex mental health conditions. A psychiatrist or specialist nurse will carry out a more detailed assessment, including your personal history and current circumstances.",
          "Rethink Mental Illness says only a psychiatrist can diagnose schizophrenia, and you may need to see them a few times. The assessment is not a test or an exam: it is about finding the right diagnosis and help for you.",
          "During a first episode, you should first be referred to an early intervention team. Rethink says NICE suggests treatment should start within 2 weeks of referral.",
        ],
      },
      {
        heading: "How a diagnosis is made",
        paragraphs: [
          "Most professionals use a diagnostic checklist. The Royal College of Psychiatrists says it usually means at least two symptoms, most of the time, for at least one month, with significant challenges in social or work life.",
          "They also check the symptoms are not caused by another health condition, a substance or medicine, or withdrawal. You may be assessed for related conditions too, such as bipolar disorder or schizoaffective disorder.",
        ],
      },
      {
        heading: "It can take time",
        paragraphs: [
          "You probably will not get a diagnosis when you first become unwell. Some people have one episode of psychosis, recover and never have another.",
          "Being open and honest helps the psychiatrist reach the right diagnosis and offer the right treatment and support. You can ask your doctor to explain what the different parts of your diagnosis mean.",
        ],
      },
      {
        heading: "After diagnosis",
        paragraphs: [
          "You may feel anxious, worried about stigma, or frightened. A diagnosis can be a positive step towards getting good, straightforward information about the illness and the treatments and services available.",
          "If you are not happy with your care, you can talk to your healthcare professional, ask for a second opinion, get an advocate, contact the Patient Advice and Liaison Service, or make a complaint.",
        ],
      },
    ],
    helps: [
      "See a GP as soon as possible if you notice symptoms.",
      "Be open and honest at your assessment; it is not a test or an exam.",
      "Ask your doctor to explain what the different parts of your diagnosis mean.",
      "If someone you care for already has a care co-ordinator, contact them to share your concerns.",
      "Ask for a second opinion or an advocate if you are not happy with your care.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Be open at your assessment.",
      "Ask what your diagnosis means.",
    ],
    ask: "What does my diagnosis mean, and who in the team will be my main contact?",
    interactive: {
      kind: "timeline",
      title: "From first worry to a care plan",
      steps: [
        { id: "gp", when: "Step 1", title: "See a GP", points: ["They ask about your symptoms.", "They check for other causes, such as drug use."] },
        { id: "referral", when: "Step 2", title: "A referral", points: ["To a community mental health team.", "Or an early intervention team in a first episode."] },
        { id: "assessment", when: "Step 3", title: "A fuller assessment", points: ["Usually a psychiatrist or specialist nurse.", "It is not a test or an exam."] },
        { id: "diagnosis", when: "Step 4", title: "A diagnosis", points: ["Made with a diagnostic checklist.", "It may take a few visits, and some time."] },
        { id: "plan", when: "Step 5", title: "A care plan", points: ["Made together with your team.", "Reviewed regularly, and changed if needed."] },
      ],
    },
    sources: [NHS_DIAGNOSIS, RCP_SCHIZ, RETHINK_SCHIZ, NHS_TREATMENT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is there a single test for schizophrenia?",
      options: [{ text: "No, it is diagnosed after an assessment", right: true }, { text: "Yes, a blood test" }, { text: "Yes, a brain scan" }],
      why: "There is no single test for schizophrenia. A psychiatrist or specialist nurse will carry out a more detailed assessment.",
    },
  },
  {
    id: "scz-medicines",
    kicker: "Treatment",
    question: "How do antipsychotics work, and what about side effects?",
    hook: "Some effects come within hours, others take weeks. Finding the right medicine can take time, and it is never stopped without the team.",
    short: "Antipsychotics are usually the first treatment for an acute episode. They can ease anxiety within hours, but take days or weeks to reduce hallucinations and delusions. Most work equally well and differ in side effects, so the choice is made with your psychiatrist, and they should never be stopped without talking to your team first.",
    sections: [
      {
        heading: "How antipsychotics help",
        paragraphs: [
          "Antipsychotics are usually recommended as the first treatment for an acute episode. They work by blocking the effect of the chemical dopamine, or other chemicals, on the brain.",
          "They can reduce feelings of anxiety or aggression within a few hours, but may take several days or weeks to reduce hallucinations or delusional thoughts. They help most with positive symptoms, and tend to be less helpful for negative ones.",
          "Rethink Mental Illness says that, according to the Royal College of Psychiatrists, 4 out of 5 people with severe mental illness who take antipsychotics find they are successful in treating their symptoms.",
        ],
      },
      {
        heading: "Finding the right one",
        paragraphs: [
          "There are older, typical antipsychotics from the 1950s and newer, atypical ones from the 1990s. Most work equally well; what differs is the side effects, so the choice should follow a discussion with your psychiatrist.",
          "They can be taken as tablets or syrup, or as a slow-release injection called a depot, given every 1 to 4 weeks. Some people prefer a depot because they do not have to remember a daily tablet.",
          "If one does not help after several weeks of taking it regularly, another can be tried. Clozapine may be suggested if at least two others have been tried for several weeks without enough benefit, and it needs regular blood tests.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Not everyone gets side effects, and how severe they are differs from person to person. Possible ones include drowsiness, weight gain, lack of sex drive, blurred vision, constipation and dry mouth. Older types can cause shaking, trembling and muscle twitches or spasms.",
          "Antipsychotics can also raise cholesterol, change blood sugar levels, and make blood pressure higher or lower than usual, so these are monitored. Tell your care co-ordinator, psychiatrist or GP if side effects become severe; there may be an alternative, or another medicine that helps.",
        ],
      },
      {
        heading: "How long, and stopping safely",
        paragraphs: [
          "Most people take medicine for 1 or 2 years after their first psychotic episode to prevent further episodes, and for longer if the illness comes back. Some people need it for a long time to stay well.",
          "Do not stop taking antipsychotics without first talking to your care co-ordinator, psychiatrist or GP. Stopping suddenly may bring symptoms back, and your doctor can reduce the dose gradually if you decide to stop.",
          "The Royal College of Psychiatrists says antipsychotics are not addictive, but your body gets used to them, so it is best to reduce the dose slowly.",
        ],
      },
      {
        heading: "Living with your medicine",
        paragraphs: [
          "Check with your healthcare team before taking over-the-counter remedies, such as painkillers, or supplements, as they can sometimes interfere with your medicine. Drugs and alcohol can also react badly with antipsychotics.",
          "If you want to stop smoking, or start again, talk to your GP or psychiatrist first, as your dose may need to change. Your medicine should be reviewed at least once a year.",
        ],
      },
    ],
    helps: [
      "Take your medicine as prescribed, even when you start to feel better.",
      "Tell your care co-ordinator, psychiatrist or GP if side effects become severe.",
      "Never stop an antipsychotic without first talking to your care co-ordinator, psychiatrist or GP.",
      "Check with your team before taking painkillers, supplements or other remedies.",
      "Talk to your GP or psychiatrist before you stop or start smoking.",
      CRISIS,
    ],
    tryThisWeek: [
      "Take it as prescribed.",
      "Report severe side effects.",
      "Check remedies with your team.",
    ],
    ask: "Which antipsychotic suits me best, and which side effects should I tell you about?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments with your medicine",
      scenarios: [
        {
          id: "better",
          situation: "You have felt well for weeks and wonder if you still need your tablets.",
          options: [{ text: "Talk to your team first", best: true }, { text: "Stop taking them" }],
          why: "Do not stop taking antipsychotics without first talking to your care co-ordinator, psychiatrist or GP. Stopping suddenly may bring symptoms back.",
        },
        {
          id: "side-effects",
          situation: "You feel drowsy all day and have put on weight.",
          options: [{ text: "Tell your care co-ordinator", best: true }, { text: "Put up with it and say nothing" }],
          why: "There may be an alternative antipsychotic you can take, or another medicine that will help with the side effects.",
        },
        {
          id: "painkiller",
          situation: "You want to buy a painkiller and a supplement at the chemist.",
          options: [{ text: "Check with your healthcare team first", best: true }, { text: "Just take them" }],
          why: "Over-the-counter remedies and supplements can sometimes interfere with your medicine.",
        },
        {
          id: "smoking",
          situation: "You have decided to give up smoking.",
          options: [{ text: "Talk to your GP or psychiatrist first", best: true }, { text: "Stop and tell nobody" }],
          why: "If you take antipsychotics, your dose may need to change when you stop or start smoking.",
        },
        {
          id: "forgetting",
          situation: "You often forget your daily tablet.",
          options: [{ text: "Ask whether a depot would suit you", best: true }, { text: "Take two the next day" }],
          why: "Some people prefer a long-acting injection because they do not have to remember to take their medicine every day.",
        },
      ],
    },
    sources: [NHS_TREATMENT, RCP_SCHIZ, RCP_ANTIPSYCHOTICS, RETHINK_ANTIPSYCHOTICS, NHS_LIVING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How quickly do antipsychotics reduce hallucinations?",
      options: [{ text: "Over several days or weeks", right: true }, { text: "Within minutes" }, { text: "Only after a year" }],
      why: "They can reduce feelings of anxiety or aggression within a few hours, but may take several days or weeks to reduce hallucinations or delusional thoughts.",
    },
  },
  {
    id: "scz-therapy",
    kicker: "Treatment",
    question: "Can talking therapy help with schizophrenia?",
    hook: "Medicine is only part of it. CBT, family therapy and arts therapies help people cope with voices, beliefs and the quieter symptoms.",
    short: "Talking therapies can help people cope better with hallucinations and delusions, and can ease negative symptoms. They work best alongside medicine. You should be offered CBT, and families can be offered family therapy to learn about the illness, support each other and plan for a crisis.",
    sections: [
      {
        heading: "Why therapy helps",
        paragraphs: [
          "Talking therapies can help people cope better with hallucinations or delusions. They can also help with negative symptoms, such as a lack of enjoyment and interest in things you used to enjoy, and they work best when combined with antipsychotic medicine.",
          "The Royal College of Psychiatrists says there is a lot of evidence that psychological therapies are effective, and you should be offered one at the same time as medicine, as this can make both more effective.",
        ],
      },
      {
        heading: "Cognitive behavioural therapy",
        paragraphs: [
          "CBT helps you identify the thinking patterns that cause unwanted feelings and behaviour, and learn more realistic and useful thoughts. You might learn to recognise delusional thinking, and get help to avoid acting on it.",
          "The Royal College of Psychiatrists says you should be offered individual CBT for at least 16 weekly sessions. Sessions usually last about an hour, over a number of months.",
          "If you are very unwell, it might be better to start CBT when you are more stable. Your GP or care co-ordinator should be able to arrange a referral.",
        ],
      },
      {
        heading: "Family therapy",
        paragraphs: [
          "Family therapy supports the person with schizophrenia and the people they live with or are close to. It can include learning about schizophrenia, ways to support each other, solving practical problems, and planning what to do in a crisis.",
          "Rethink Mental Illness says family intervention should run for between 3 months and 1 year, with at least 10 planned sessions. If you think your family could benefit, speak to your care co-ordinator or GP.",
        ],
      },
      {
        heading: "Arts therapies and more",
        paragraphs: [
          "Arts therapies use painting, photography, music, writing and other creative expression to explore thoughts and feelings. They have been shown to ease negative symptoms in some people.",
          "Psychoeducation teaches you about your illness, your treatment and how to spot early signs of becoming unwell again, which can prevent a relapse. You may also be offered peer support from someone who has recovered from psychosis or schizophrenia themselves.",
        ],
      },
    ],
    helps: [
      "Ask your GP or care co-ordinator for a referral to a CBT therapist.",
      "Ask about family therapy if you think your family could benefit.",
      "If you are very unwell now, consider starting CBT once you feel more stable.",
      "Ask your team about peer support with someone who has lived experience.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask for a CBT referral.",
      "Ask about family therapy.",
      "Ask about peer support.",
    ],
    ask: "Can I be referred for CBT, and could my family be offered family therapy?",
    interactive: {
      kind: "flip-cards",
      title: "Therapies and support, card by card",
      intro: "Turn each card to see when each one is used and what it does. Most work best alongside medicine.",
      cards: [
        { id: "cbt", front: "CBT", when: "Should be offered to all adults", back: "Individual sessions, at least 16 weekly, to understand your thoughts and cope with your symptoms." },
        { id: "family", front: "Family therapy", when: "For you and the people close to you", back: "Learning about the illness, supporting each other, solving problems and planning for a crisis." },
        { id: "arts", front: "Arts therapies", when: "Alone or in a small group", back: "Creative expression to explore your experiences. It can ease negative symptoms in some people." },
        { id: "psychoeducation", front: "Psychoeducation", when: "For you and your supporters", back: "Learning about your illness, your treatment and early signs of becoming unwell again." },
        { id: "peer", front: "Peer support", when: "Through your mental health team", back: "Support from someone who has recovered from psychosis or schizophrenia themselves." },
      ],
    },
    sources: [NHS_TREATMENT, RCP_SCHIZ, RETHINK_SCHIZ, NHS_LIVING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When do talking therapies for schizophrenia work best?",
      options: [{ text: "Combined with antipsychotic medicine", right: true }, { text: "Instead of all medicine" }, { text: "Only after recovery" }],
      why: "Talking therapies work best when combined with antipsychotic medicine.",
    },
  },
  {
    id: "scz-crisis",
    kicker: "Urgent help",
    question: "Who do I call in a crisis?",
    hook: "A mental health emergency is as serious as a physical one. There is help day and night, and you will not be wasting anyone's time.",
    short: "If someone's life is at risk or you cannot keep yourself or someone else safe, call 999 or go to A&E. For urgent help, call 111 and select the mental health option. Samaritans is free on 116 123, day or night, and your care plan may include a crisis plan with numbers to call.",
    sections: [
      {
        heading: "Help is there now",
        paragraphs: [
          "If someone's life is at risk, or you do not feel you can keep yourself or someone else safe, call 999 or go to A&E. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
          "If you need urgent help but it is not an emergency, get help from NHS 111 online or call 111 and select the mental health option. 111 will tell you the right place to get help.",
        ],
      },
      {
        heading: "Someone to talk to",
        paragraphs: [
          "Samaritans is free to call on 116 123, any time, from any phone. They listen without judging or telling you what to do.",
          "If you would rather not talk on the phone, you can text \"SHOUT\" to 85258, 24 hours a day. You can also call these helplines if you are worried about someone else.",
        ],
      },
      {
        heading: "Your crisis plan and team",
        paragraphs: [
          "Your care plan may include an advance statement or crisis plan to follow in an emergency. Your care co-ordinator should be able to give you, your friends or family contact details for a crisis.",
          "Crisis resolution teams care for people having an acute and severe episode. They aim to support people at home rather than in hospital, but can arrange a hospital stay if needed.",
        ],
      },
      {
        heading: "Advance statements",
        paragraphs: [
          "An advance statement is a set of written instructions about what you would like family or friends to do if you become unwell again, and how you would like to be cared for. It is not legally binding, but health professionals will follow your wishes whenever possible.",
          "If you want to make one, talk to your care co-ordinator, psychiatrist or GP.",
        ],
      },
      {
        heading: "If someone you love is in crisis",
        paragraphs: [
          "People having an acute episode may not believe anything is wrong. If they have a care co-ordinator, contact them. If an episode is rapidly worsening, you can go to A&E, where a duty psychiatrist will be available.",
          "A hospital stay is sometimes needed. Rethink Mental Illness says being detained under the Mental Health Act only happens as a last resort, if someone is very unwell and at risk of harm to themselves or others because of their mental disorder.",
        ],
      },
    ],
    helps: [
      "Ask your care co-ordinator for crisis contact details for you, your friends and family.",
      "Talk to your care co-ordinator, psychiatrist or GP about making an advance statement.",
      "For urgent help that is not an emergency, call 111 and select the mental health option.",
      "Call Samaritans free on 116 123, any time, or text \"SHOUT\" to 85258.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask for your crisis contacts.",
      "Ask about an advance statement.",
      "Save 111 and 116 123 in your phone.",
    ],
    ask: "What is in my crisis plan, and who should my family call if I become unwell?",
    interactive: {
      kind: "flip-cards",
      title: "Who to contact, card by card",
      intro: "Turn each card to see when to use each one. In an emergency, always call 999.",
      cards: [
        { id: "999", front: "999 or A&E", when: "A life is at risk", back: "Or you do not feel you can keep yourself or someone else safe. You will not be wasting anyone's time." },
        { id: "111", front: "NHS 111", when: "Urgent help, not an emergency", back: "Call 111 and select the mental health option, or use 111 online. They will tell you where to get help." },
        { id: "samaritans", front: "Samaritans, 116 123", when: "Any time, day or night", back: "Free from any phone. They listen without judging or telling you what to do." },
        { id: "shout", front: "Shout, text 85258", when: "If you would rather not talk", back: "Text \"SHOUT\" to 85258, 24 hours a day, every day." },
        { id: "crisis-team", front: "Crisis team", when: "An acute and severe episode", back: "Support at home where possible, rather than in hospital. Your care co-ordinator can give the number." },
        { id: "plan", front: "Your crisis plan", when: "Agreed with your team in advance", back: "What you would like to happen, and who to contact, if you become unwell again." },
      ],
    },
    sources: [NHS_URGENT, NHS_SUICIDAL, EMM_URGENT, NHS_TREATMENT, NHS_DIAGNOSIS, RETHINK_CRISIS, SAM_CONTACT],
    quiz: {
      question: "What should you do if you need urgent help but it is not an emergency?",
      options: [{ text: "Call 111 and select the mental health option", right: true }, { text: "Wait for your next appointment" }, { text: "Call nobody" }],
      why: "If you need urgent help but it is not an emergency, get help from NHS 111 online or call 111 and select the mental health option.",
    },
  },
  {
    id: "scz-physical-health",
    kicker: "Physical health",
    question: "Why does my body need checking too?",
    hook: "Schizophrenia and its medicines can affect the heart, weight and blood sugar. A free check every year helps catch problems early.",
    short: "People with a severe mental illness can be more likely to develop physical health problems, and antipsychotics can affect cholesterol, blood sugar and blood pressure. You should have a full health check before starting medicine, close monitoring at first, and a free annual health check from your GP surgery.",
    sections: [
      {
        heading: "Why your body matters too",
        paragraphs: [
          "Rethink Mental Illness says people who live with a severe mental illness can be more likely to develop physical health problems than the general population. The Royal College of Psychiatrists says physical health, particularly heart health, can be worse, which is why it needs careful monitoring.",
          "Some antipsychotics can raise cholesterol, change blood sugar levels and affect blood pressure, so these are checked.",
        ],
      },
      {
        heading: "Before and during treatment",
        paragraphs: [
          "You should be offered a full physical health screening before starting any antipsychotic. It includes blood tests for conditions like diabetes and high cholesterol, blood pressure and heart rate, height and weight, an ECG of the heart, and a talk about smoking, alcohol and drugs.",
          "Your medicine and any side effects will be closely monitored for the first few months. Rethink says mental health professionals are responsible for these checks in the first year of treatment, and responsibility may then pass to your GP.",
        ],
      },
      {
        heading: "The annual health check",
        paragraphs: [
          "If you have schizophrenia, your GP surgery should invite you for a free health check once a year. If you have not had a letter, you or a family member can contact the surgery, or you can ask your care co-ordinator.",
          "The appointment may take about 45 minutes. The doctor or nurse will usually check your weight, heart rate and blood pressure, ask for a urine sample and a blood test, talk about your medicines and side effects, and check your vaccinations.",
          "You can ask for reasonable adjustments, such as a longer appointment, a quiet place to wait, someone with you, or a home visit if you cannot leave your home.",
        ],
      },
      {
        heading: "Everyday health",
        paragraphs: [
          "A balanced diet with lots of fruit and vegetables and regular exercise can reduce your risk of heart disease and diabetes. Try to avoid too much stress and keep a regular sleep pattern.",
          "Stopping smoking has been shown to improve the mental health of people with schizophrenia. If you take antipsychotics, talk to your GP or psychiatrist before stopping or starting smoking, as your dose may need to change.",
          "Your care plan should include a healthy eating and physical activity programme, and support to give up smoking if you smoke.",
        ],
      },
    ],
    helps: [
      "Go to your annual health check, or ask your GP surgery for one if no letter arrives.",
      "Ask for reasonable adjustments, such as a longer appointment or a quiet place to wait.",
      "Take a carer, friend or peer support worker with you if that helps.",
      "Eat a balanced diet with lots of fruit and vegetables, and exercise regularly.",
      "Ask your GP about NHS support to stop smoking, and talk to your GP or psychiatrist first.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book your annual health check.",
      "Add fruit and vegetables to meals.",
      "Ask about help to stop smoking.",
    ],
    ask: "When is my next physical health check, and who will do it?",
    interactive: {
      kind: "timeline",
      title: "Health checks on antipsychotics",
      steps: [
        { id: "before", when: "Before starting", title: "A full screening", points: ["Blood tests, blood pressure and heart rate.", "Height, weight and an ECG of the heart."] },
        { id: "months", when: "First few months", title: "Close monitoring", points: ["Your medicine and side effects are watched closely.", "Tell the team about any side effects."] },
        { id: "first-year", when: "First year", title: "Checks by the mental health team", points: ["Mental health professionals do the checks.", "Responsibility may then pass to your GP."] },
        { id: "yearly", when: "Every year", title: "The annual health check", points: ["Free, from your GP surgery or mental health team.", "It may take about 45 minutes."] },
        { id: "after", when: "After the check", title: "Follow-up support", points: ["Such as exercise schemes or weight support.", "Or help to stop smoking or drink less."] },
      ],
    },
    sources: [NHS_LIVING, NHS_SMI_CHECK, RETHINK_PHYSICAL, RCP_SCHIZ, RETHINK_SCHIZ, NHS_TREATMENT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How often should you be offered a physical health check with schizophrenia?",
      options: [{ text: "Once a year", right: true }, { text: "Only if you feel ill" }, { text: "Every 5 years" }],
      why: "If you have schizophrenia, your GP surgery should invite you for a free health check once a year.",
    },
  },
  {
    id: "scz-relapse",
    kicker: "Staying well",
    question: "How can I spot a relapse early?",
    hook: "Poor sleep, a lost appetite, a growing suspicion. The first signs are often small, and catching them early can make a real difference.",
    short: "Many people with schizophrenia have times when symptoms return. Learning your own early signs, such as disturbed sleep, feeling anxious or suspicious, or hearing quiet voices, can help, because an episode may be prevented with medicine and extra support. Your care plan should set out the signs and the steps to take.",
    sections: [
      {
        heading: "Relapses can happen",
        paragraphs: [
          "Most people with schizophrenia make a recovery, although many will have the occasional return of symptoms, called a relapse. If it is well managed, the chance of a severe relapse can be reduced.",
          "The Royal College of Psychiatrists says you can do all the right things and still have ups and downs. It suggests thinking of recovery as being able to do the things you used to do, understanding your condition, and knowing what helps you stay well.",
        ],
      },
      {
        heading: "Your relapse signature",
        paragraphs: [
          "Learning to recognise the signs that you are becoming unwell can help you manage your illness. Signs can include losing your appetite, feeling anxious or stressed, or having disturbed sleep.",
          "Milder symptoms may also appear, such as feeling suspicious or fearful, worrying about people's motives, hearing quiet voices now and again, or finding it hard to concentrate.",
          "The Royal College of Psychiatrists calls the pattern unique to you a relapse signature. It can include not sleeping, isolating yourself or going out more than usual, speaking or acting differently, or being more irritable.",
        ],
      },
      {
        heading: "Others can help you notice",
        paragraphs: [
          "You might ask someone you trust to tell you if they notice your behaviour changing. Sometimes people lose insight, which means they stop being able to tell that they are unwell.",
          "Spotting the first signs is useful, because an episode may be prevented through antipsychotic medicine and extra support.",
        ],
      },
      {
        heading: "A plan for when it starts",
        paragraphs: [
          "Your care plan should include the likely signs of a relapse, the steps to take and emergency contact numbers. Your mental health team should also work with you on a staying well plan, reviewed regularly.",
          "Psychoeducation helps you learn how to spot early signs of becoming unwell again, and can prevent a relapse.",
        ],
      },
      {
        heading: "Medicine and relapse",
        paragraphs: [
          "Taking your medicine as prescribed, even when you feel better, can help prevent relapses. The Royal College of Psychiatrists says that for people who have had more than one episode, stopping antipsychotics more than doubles the risk of becoming unwell again.",
          "If you are thinking about stopping, talk to your doctor first. They can help you list the feelings, thoughts and behaviours that might be early warning signs.",
        ],
      },
    ],
    helps: [
      "List, with your doctor, the early warning signs that your illness is returning.",
      "Ask someone you trust to tell you if they notice your behaviour changing.",
      "Follow your care plan and any crisis plan if you start to become unwell.",
      "Take your medicine as prescribed, even when you feel better.",
      "Avoid drugs and alcohol, which can trigger psychosis and make symptoms worse.",
      CRISIS,
    ],
    tryThisWeek: [
      "Write down your early signs.",
      "Ask someone to tell you about changes.",
      "Keep taking your medicine.",
    ],
    ask: "What are my likely early warning signs, and what should I do when I notice them?",
    interactive: {
      kind: "signs",
      title: "Early signs to watch for",
      intro: "Tick any you have noticed lately. Your own pattern is unique to you, so add what your team has agreed with you.",
      signs: ["Losing your appetite", "Feeling anxious or stressed", "Disturbed sleep, or not sleeping", "Feeling suspicious or fearful", "Worrying about people's motives", "Hearing quiet voices now and again", "Finding it hard to concentrate", "Isolating yourself, or going out more", "Speaking or acting differently", "Being more irritable"],
      after: "These can be early signs of a relapse. Follow your care plan and contact your care co-ordinator or team; an episode may be prevented with medicine and extra support.",
      copyHeading: "Early signs I have noticed",
    },
    sources: [NHS_LIVING, RCP_SCHIZ, RCP_ANTIPSYCHOTICS, RETHINK_SCHIZ, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Why is it useful to spot the first signs of a relapse?",
      options: [{ text: "An episode may be prevented with medicine and support", right: true }, { text: "It makes no difference" }, { text: "So you can stop your medicine" }],
      why: "Spotting the first signs is useful, because an episode may be prevented through antipsychotic medicine and extra support.",
    },
  },
  {
    id: "scz-daily-life",
    kicker: "Work and money",
    question: "Can I work, and what help is there with money?",
    hook: "Many people with schizophrenia work, full or part time. The law, Access to Work and benefits can help make it possible.",
    short: "Many people who live with schizophrenia can work, especially when their condition is stable and they have the right support. Employers are required to make reasonable adjustments, Access to Work can offer extra help, and Personal Independence Payment can help with living costs. If you drive, the law requires you to tell the DVLA.",
    sections: [
      {
        heading: "Work is possible",
        paragraphs: [
          "Rethink Mental Illness says many people who live with schizophrenia can work, full or part time, especially when their condition is stable and they have the right support. Work can be a key element in recovery.",
          "If you have been very unwell, your work life may need to change for a while, with more support, a break, or a less stressful job. Avoid too much work-related stress, and ask whether shorter or more flexible hours are possible.",
        ],
      },
      {
        heading: "Your rights at work",
        paragraphs: [
          "Under the Equality Act 2010, a condition counts as a disability if it has a substantial and long-term effect on normal daily activities, and long-term means 12 months or more. The Royal College of Psychiatrists says mental illnesses are considered a disability under the Act.",
          "Employers are required to make reasonable adjustments, such as a phased return to work with flexible hours or part-time working. If you tell your employer about your diagnosis, they have a legal responsibility to support you.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a mental health condition. It can offer a tailored plan and one-to-one sessions with a mental health professional, or a grant towards practical support such as a job coach.",
          "A grant will not affect your other benefits, and you will not have to pay it back. Your community mental health team may be able to help you apply.",
        ],
      },
      {
        heading: "Money and benefits",
        paragraphs: [
          "Personal Independence Payment can help with extra living costs if a long-term mental health condition makes everyday tasks or getting around difficult. You can get it even if you are working.",
          "Difficulties with money or housing can be some of the most stressful things. Community mental health teams can help with employment, housing or applying for benefits, and Citizens Advice may help you fill out forms.",
        ],
      },
      {
        heading: "Structure, and driving",
        paragraphs: [
          "Even if you are not working, it is still important to go out and give a structure to your week. Day centres, work projects, supported accommodation and peer support can all help.",
          "If you drive, the law requires you to tell the DVLA about schizophrenia, and you can be fined up to £1,000 if you do not. The Royal College of Psychiatrists says that after a relapse you will need to stop driving, but may be able to start again once you have been well for at least 3 months.",
        ],
      },
    ],
    helps: [
      "Ask your employer about reasonable adjustments, such as a phased return or flexible hours.",
      "Apply to Access to Work for support with your mental health at work.",
      "Ask your community mental health team about help with work, housing and benefits.",
      "Tell the DVLA about your diagnosis if you drive.",
      "Give your week a structure, with a day centre, a work project or a group.",
      CRISIS,
    ],
    tryThisWeek: [
      "List adjustments that would help.",
      "Look up Access to Work.",
      "Plan a structure for your week.",
    ],
    ask: "Can you help me with work, benefits or telling the DVLA?",
    interactive: {
      kind: "flip-cards",
      title: "Rights and support, card by card",
      intro: "Turn each card to see when each one applies and what it offers.",
      cards: [
        { id: "equality", front: "The Equality Act 2010", when: "A substantial, long-term condition", back: "Mental illnesses are considered a disability under the Act, so discrimination is against the law." },
        { id: "adjustments", front: "Reasonable adjustments", when: "From your employer", back: "Changes such as a phased return, flexible hours or part-time working." },
        { id: "atw", front: "Access to Work", when: "To get or stay in work", back: "A tailored plan, sessions with a mental health professional, or a grant for practical support." },
        { id: "pip", front: "Personal Independence Payment", when: "Everyday tasks are difficult", back: "Help with extra living costs. You can get it even if you are working." },
        { id: "dvla", front: "Telling the DVLA", when: "If you drive", back: "The law requires it. You can be fined up to £1,000 if you do not tell them." },
        { id: "day-centres", front: "Day centres and work projects", when: "To give your week a structure", back: "Activities, company, and training to help you back into work." },
      ],
    },
    sources: [NHS_LIVING, RCP_SCHIZ, RETHINK_SCHIZ, GOV_EQUALITY, GOV_ADJUSTMENTS, GOV_ATW, GOV_PIP, GOV_DRIVING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Can people with schizophrenia work?",
      options: [{ text: "Yes, many can, full or part time", right: true }, { text: "No, never" }, { text: "Only after 10 years" }],
      why: "Rethink Mental Illness says many people who live with schizophrenia can work, full or part time, especially when their condition is stable and they have the right support.",
    },
  },
  {
    id: "scz-carers",
    kicker: "Family and carers",
    question: "How can I support someone with schizophrenia?",
    hook: "Arguing with a belief rarely helps. Listening to the fear behind it often does, and carers need support too.",
    short: "Family and friends have a vital role in recovery and in making a relapse less likely. It helps to respond to the person's feelings rather than argue about their beliefs, to watch for signs of relapse, and to know what to do in a crisis. Carers can get a free carer's assessment and support of their own.",
    sections: [
      {
        heading: "You matter in their recovery",
        paragraphs: [
          "Friends, relatives and partners have a vital role in helping people with schizophrenia recover, and in making a relapse less likely. You can help by watching for signs of relapse and encouraging them to take their medicine and go to appointments.",
          "Do not blame the person or tell them to pull themselves together. Instead, try to offer support and understanding about how they are feeling.",
        ],
      },
      {
        heading: "When beliefs seem untrue",
        paragraphs: [
          "For the person, it can be impossible to tell their symptoms from reality. The Royal College of Psychiatrists suggests validating their feelings rather than the beliefs, with words like: that sounds really scary, is there anything I can do to help you feel safer?",
          "Rethink Mental Illness suggests not laughing at the beliefs, and not simply agreeing with them, as that might strengthen them. Listening, acknowledging feelings and building trust can help.",
        ],
      },
      {
        heading: "Low motivation and withdrawal",
        paragraphs: [
          "Low motivation can be part of the illness, and tiredness can be a side effect of medicine. Try not to put unreasonable pressure on them.",
          "Keep inviting them to things, and let them know it is fine if they do not want to come. Breaking goals into small steps, and praising each success, can help.",
        ],
      },
      {
        heading: "Being part of their care",
        paragraphs: [
          "Learn about schizophrenia from reliable sources, and ask the person what you could help with, such as their finances or going to appointments with them. Ask to see a copy of their care plan, and talk to the care team about what to do in a crisis.",
          "You may be offered family therapy. If you are the nearest relative, you have certain rights, including asking for a mental health assessment if they become very unwell and refuse help.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "If you care for someone, you can have a free carer's assessment from your local council's adult social services. It might recommend things like breaks from caring, help with housework and advice about benefits, and it usually lasts at least an hour.",
          "You could get Carer's Allowance if you care for someone for at least 35 hours a week and they get certain benefits. Carers UK has a free helpline on 0808 808 7777, and carers' support groups can help too.",
        ],
      },
    ],
    helps: [
      "Offer support and understanding, and do not tell them to pull themselves together.",
      "Respond to their feelings rather than arguing about their beliefs.",
      "Talk to the care team about what to do in a crisis, and ask to see the care plan.",
      "Ask your local council for a free carer's assessment.",
      "Find a carers' support group through Rethink Mental Illness, Carers UK or Carers Trust.",
      CRISIS,
    ],
    tryThisWeek: [
      "Listen to the feelings, not the belief.",
      "Ask the team about a crisis plan.",
      "Request a carer's assessment.",
    ],
    ask: "Can I be involved in their care plan, and what should I do if they become unwell?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments at home",
      scenarios: [
        {
          id: "watched",
          situation: "Your relative says they are being watched by the government.",
          options: [{ text: "Say it sounds scary, and ask how to help", best: true }, { text: "Tell them it is nonsense" }, { text: "Agree, to keep the peace" }],
          why: "It can be impossible for them to tell symptoms from reality. Validating the feeling, not the belief, can help; agreeing might strengthen it.",
        },
        {
          id: "withdrawn",
          situation: "They have not wanted to leave the house for days.",
          options: [{ text: "Invite them; say it is fine to say no", best: true }, { text: "Insist they come out" }],
          why: "Try not to put unreasonable pressure on them. Keep inviting them so they feel included, and reassure them it is OK if they do not want to come.",
        },
        {
          id: "signs",
          situation: "You notice they are sleeping badly and seem more suspicious.",
          options: [{ text: "Contact their care co-ordinator", best: true }, { text: "Wait and see" }],
          why: "Family and friends can help by watching for signs of relapse. If someone has a care co-ordinator, contact them to share your concerns.",
        },
        {
          id: "worn-out",
          situation: "You feel worn out and alone with it all.",
          options: [{ text: "Ask for a carer's assessment", best: true }, { text: "Keep going without help" }],
          why: "A carer's assessment is free, and it might recommend breaks from caring, help at home or advice about benefits.",
        },
      ],
    },
    sources: [NHS_LIVING, RCP_SCHIZ, RETHINK_SCHIZ, RETHINK_UNUSUAL, NHS_CARER_ASSESSMENT, CARERSUK_ASSESSMENT, GOV_CARERS_ALLOWANCE, NHS_DIAGNOSIS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What can help when someone describes a belief that seems untrue?",
      options: [{ text: "Validating their feelings, not the belief", right: true }, { text: "Laughing it off" }, { text: "Arguing until they agree" }],
      why: "The Royal College of Psychiatrists suggests validating their feelings rather than the beliefs.",
    },
  },
  {
    id: "scz-support",
    kicker: "Support",
    question: "Where can I find support and people who understand?",
    hook: "Meeting people who have been there is a reminder that you are not alone. Charities, groups and recovery colleges can all help.",
    short: "Many people find it helpful to meet others with the same experiences. Charities such as Rethink Mental Illness and the Hearing Voices Network offer information and groups, recovery colleges run free courses, and your team may offer peer support. Samaritans is there on 116 123, any time.",
    sections: [
      {
        heading: "You are not alone",
        paragraphs: [
          "Many people find it helpful to meet other people with the same experiences, for mutual support and to share ideas. It is also an important reminder that you are not alone.",
          "Hearing about other people's experiences can help you feel understood, less alone and more confident. Support groups can be face to face or online.",
        ],
      },
      {
        heading: "Charities that can help",
        paragraphs: [
          "The NHS lists the Hearing Voices Network, Mind, Rethink Mental Illness and SANE among useful charities and support groups. They let individuals and families share experiences and coping strategies.",
          "The Hearing Voices Network gives information and support to people who hear voices and those who support them, and has a list of self-help groups across the country. You can search for local support groups on the Rethink Mental Illness and Local Minds websites.",
        ],
      },
      {
        heading: "Recovery colleges and peer support",
        paragraphs: [
          "Recovery colleges are part of the NHS and offer free courses about mental health, many with courses for family, friends and carers too. You can usually refer yourself, though they are not available in all areas.",
          "Your team may offer peer support with someone who has lived experience of psychosis and is now in recovery. They can help with side effects, coping with symptoms, what to do in a crisis, and meeting other people who can support you.",
        ],
      },
      {
        heading: "Doing things with others",
        paragraphs: [
          "Spending time with others doing things you enjoy can be an important part of recovery. Social prescribing, through a link worker at your GP surgery, connects you with local groups, such as a weekly gardening group.",
          "Day hospitals, day centres and community mental health centres offer a range of activities that help you get active again and spend time in the company of other people.",
        ],
      },
      {
        heading: "Hope",
        paragraphs: [
          "The Royal College of Psychiatrists says schizophrenia is treatable, and people with it can live happy and fulfilling lives. Reading stories from other people about their recovery can help.",
          "If you need someone to talk to, Samaritans is free on 116 123, any time, from any phone.",
        ],
      },
    ],
    helps: [
      "Join a support group, face to face or online.",
      "Contact the Hearing Voices Network if you hear voices.",
      "Look for a recovery college course near you; you can usually refer yourself.",
      "Ask your GP about a link worker for social prescribing.",
      "Ask your team about peer support.",
      CRISIS,
    ],
    tryThisWeek: [
      "Look up a local or online group.",
      "Find a recovery college course.",
      "Ask your GP about a link worker.",
    ],
    ask: "Is there a support group, recovery college or peer support worker you could put me in touch with?",
    interactive: {
      kind: "flip-cards",
      title: "Where to find support, card by card",
      intro: "Turn each card to see who each one is for and what they offer.",
      cards: [
        { id: "groups", front: "Support groups", when: "Face to face or online", back: "People sharing information and experiences, so you feel understood and less alone." },
        { id: "hvn", front: "Hearing Voices Network", when: "If you hear voices", back: "Information, support and self-help groups for people who hear voices and those who support them." },
        { id: "recovery-college", front: "Recovery colleges", when: "Usually by referring yourself", back: "Free NHS courses about mental health, often with courses for carers too." },
        { id: "peer", front: "Peer support", when: "Through your team", back: "Someone with lived experience of psychosis who is now in recovery." },
        { id: "social", front: "Social prescribing", when: "Through a link worker at your GP", back: "Connects you with local groups and activities you enjoy." },
        { id: "samaritans", front: "Samaritans, 116 123", when: "Any time, day or night", back: "Free from any phone, to talk about whatever you are going through." },
      ],
    },
    sources: [NHS_LIVING, RETHINK_SCHIZ, RCP_SCHIZ, RETHINK_RECOVERY, SAM_CONTACT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is a recovery college?",
      options: [{ text: "An NHS service with free courses about mental health", right: true }, { text: "A hospital ward" }, { text: "A paid university course" }],
      why: "Recovery colleges are part of the NHS and offer free courses about mental health.",
    },
  },
];
