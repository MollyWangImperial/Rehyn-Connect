import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Burnout page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and NHS Every
// Mind Matters, Mental Health UK, the Mental Health Foundation, the World Health Organization, Rethink Mental
// Illness, the Health and Safety Executive and Acas, with GOV.UK for sick leave, adjustments and flexible working.
// mind.org.uk could not be read today (it answers with a bot check), so no Mind page is cited. Burnout is described
// as the WHO and the NHS describe it: real, but not a medical condition. Safe messaging throughout: every answer
// ends its "What helps" list with the crisis routes exactly as the NHS gives them (999 or A&E, 111 mental health
// option, Samaritans 116 123, Shout 85258). General information only; it never replaces what a person's own GP or
// therapist tells them, and no medicine should be stopped or changed without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const mhf = (label: string, path: string): LearnSource => ({ label: `Mental Health Foundation: ${label}`, url: `https://www.mentalhealth.org.uk/explore-mental-health/${path}` });
const hse = (label: string, path: string): LearnSource => ({ label: `Health and Safety Executive: ${label}`, url: `https://www.hse.gov.uk/${path}` });
const acas = (label: string, path: string): LearnSource => ({ label: `Acas: ${label}`, url: `https://www.acas.org.uk/${path}` });
const govuk = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_STRESS = nhs("Stress", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/stress/");
const NHS_BUSTERS = nhs("10 stress busters", "mental-health/self-help/guides-tools-and-activities/tips-to-reduce-stress/");
const NHS_TIRED = nhs("Tiredness and fatigue", "symptoms/tiredness-and-fatigue/");
const NHS_DEP = nhs("Depression in adults: overview", "mental-health/conditions/depression-in-adults/overview/");
const NHS_DEP_SYMPTOMS = nhs("Depression in adults: symptoms", "mental-health/conditions/depression-in-adults/symptoms/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_COUNSELLING = nhs("Counselling", "tests-and-treatments/counselling/");
const NHS_ACCESS = nhs("How to access mental health services", "mental-health/social-care-and-your-rights/how-to-access-mental-health-services/");
const NHS_5STEPS = nhs("5 steps to mental wellbeing", "mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/");
const NHS_MINDFULNESS = nhs("Mindfulness", "mental-health/self-help/tips-and-support/mindfulness/");
const NHS_EXERCISE_DEP = nhs("Exercise for depression", "mental-health/self-help/guides-tools-and-activities/exercise-for-depression/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const EMM_WORK = emm("Work-related stress", "lifes-challenges/work-related-stress/");
const EMM_STRESS = emm("Stress", "mental-health-issues/stress/");
const EMM_SLEEP = emm("Sleep problems", "mental-health-issues/sleep/");
const EMM_REFRAME = emm("Reframing unhelpful thoughts", "mental-wellbeing-tips/self-help-cbt-techniques/reframing-unhelpful-thoughts/");
const EMM_PROBLEM = emm("Problem solving", "mental-wellbeing-tips/self-help-cbt-techniques/problem-solving/");

const MHF_BURNOUT = mhf("Burnout: signs, causes and ways to recover", "articles/burnout-signs-causes-and-ways-recover");
const MHF_WORKLIFE = mhf("Work-life balance", "a-z-topics/work-life-balance");
const MHUK_BURNOUT: LearnSource = { label: "Mental Health UK: Burnout", url: "https://mentalhealth-uk.org/burnout/" };
const WHO_BURNOUT: LearnSource = { label: "World Health Organization: Burn-out an \"occupational phenomenon\"", url: "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases" };
const RETHINK_STRESS: LearnSource = { label: "Rethink Mental Illness: Stress – how to manage it", url: "https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-symptoms/stress-how-to-manage-it-causes-symptoms-and-support-options/" };
const SAM_STRUGGLING: LearnSource = { label: "Samaritans: Signs you may be struggling to cope", url: "https://www.samaritans.org/how-we-can-help/if-youre-having-difficult-time/signs-you-may-be-struggling-cope/" };
const CUK_STRESS: LearnSource = { label: "Carers UK: Dealing with depression and stress", url: "https://www.carersuk.org/help-and-advice/your-health-and-wellbeing/dealing-with-depression-and-stress/" };

const HSE_OVERVIEW = hse("Work-related stress and how to manage it", "stress/overview.htm");
const HSE_CAUSES = hse("Causes of stress at work", "stress/causes.htm");
const HSE_EMPLOYEE = hse("Help for employees on stress at work", "stress/help-employee.htm");

const ACAS_WRS = acas("Causes and signs of stress", "managing-work-related-stress");
const ACAS_TIMEOFF = acas("Time off with stress", "managing-work-related-stress/time-off-with-stress");
const ACAS_RETURN = acas("Return to work meetings", "returning-to-work-after-absence");
const ACAS_PHASED = acas("Phased returns", "returning-to-work-after-absence/phased-return-to-work");
const ACAS_ADJ = acas("Mental health adjustments", "reasonable-adjustments/mental-health-adjustments");
const ACAS_MH = acas("Mental health and the law", "supporting-mental-health-workplace");

const GOV_SICK = govuk("Taking sick leave", "taking-sick-leave");
const GOV_SSP = govuk("Statutory Sick Pay (SSP)", "statutory-sick-pay");
const GOV_FLEXIBLE = govuk("Flexible working", "flexible-working");
const GOV_ADJUST = govuk("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");
const GOV_ATW = govuk("Access to Work: get support if you have a disability or health condition", "access-to-work");

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.";

export const burnoutAnswers: LearnArticle[] = [
  {
    id: "burn-what-it-is",
    kicker: "Understanding",
    question: "What is burnout, and is it a real illness?",
    hook: "Burnout is what can happen when stress goes on too long. It is not a medical diagnosis, but it is real, and recovery is possible.",
    short: "Burnout is a state of physical, mental and emotional exhaustion, often linked to long-term stress at work. The World Health Organization calls it an occupational phenomenon, not a medical condition. It does not tend to get better on its own, but with the right strategies and support, recovery is possible.",
    sections: [
      {
        heading: "Exhaustion of body, mind and feelings",
        paragraphs: [
          "Burnout is physical and emotional exhaustion. It can drain your energy and motivation, affecting your work, wellbeing and relationships.",
          "The Mental Health Foundation describes it as a state of physical, mental and emotional exhaustion, often related to workplace stress. It is not classed as a mental health condition, but it is closely linked to our mental health.",
        ],
      },
      {
        heading: "What the World Health Organization says",
        paragraphs: [
          "The World Health Organization includes burn-out in its International Classification of Diseases as an occupational phenomenon. It is not classified as a medical condition.",
          "It describes three parts: feeling drained of energy or exhausted, feeling mentally distant from your job or negative and cynical about it, and being less effective at work.",
        ],
      },
      {
        heading: "How it builds",
        paragraphs: [
          "Experiencing long-term stress or severe stress can lead to physical, mental and emotional exhaustion, often called burnout.",
          "Mental Health UK says burnout can happen when you have repeated and prolonged high demands that exceed your resources. It is often thought of at work, but it can also come with caring for someone, parenting or living with a long-term illness.",
          "It can develop gradually, so you may not notice it straight away.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Burnout does not tend to get better on its own. If left unmanaged, it can get worse and increase your risk of long-term health problems, such as heart disease and depression.",
          "It may also increase your risk of anxiety and depression. That is why it should be taken seriously.",
        ],
      },
      {
        heading: "Recovery is possible",
        paragraphs: [
          "The good news is that recovery is possible. With the right strategies and support, you can manage burnout and begin to feel like yourself again.",
          "Burnout can take time to recover from. It is important to deal with what is causing it, not just the symptoms.",
        ],
      },
    ],
    helps: [
      "Take burnout seriously, as it does not tend to get better on its own.",
      "Try to deal with what is causing it, not just the symptoms.",
      "If burnout is affecting your daily life or mental health, talk to a GP or contact NHS talking therapies.",
      "Be compassionate to yourself, and remember that this is not your fault.",
      CRISIS,
    ],
    tryThisWeek: [
      "Take how you feel seriously.",
      "Talk to a GP or talking therapies.",
      "Remind yourself it is not your fault.",
    ],
    ask: "Could what I am feeling be burnout, and what support is there for me?",
    interactive: {
      kind: "timeline",
      title: "How burnout builds",
      steps: [
        { id: "pressure", when: "Step 1", title: "Pressure", points: ["Stress often feels like too much.", "You still believe things will improve once they are under control."] },
        { id: "long-term", when: "Step 2", title: "Stress that goes on", points: ["Long-term stress and constant pressure.", "The stress response may not turn off."] },
        { id: "running-dry", when: "Step 3", title: "Running out of fuel", points: ["Low energy and ongoing exhaustion.", "It can develop gradually, so you may not notice."] },
        { id: "burnout", when: "Step 4", title: "Burnout", points: ["Feeling empty, exhausted and detached.", "Little motivation or hope that things will change."] },
        { id: "recovery", when: "Step 5", title: "Recovery", points: ["Deal with the cause, not just the symptoms.", "With the right support, recovery is possible."] },
      ],
    },
    sources: [EMM_WORK, MHF_BURNOUT, WHO_BURNOUT, MHUK_BURNOUT, EMM_STRESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Does the World Health Organization class burnout as a medical condition?",
      options: [{ text: "No, it calls it an occupational phenomenon", right: true }, { text: "Yes, it is a type of depression" }, { text: "Yes, it is a heart condition" }],
      why: "The World Health Organization includes burn-out in its International Classification of Diseases as an occupational phenomenon. It is not classified as a medical condition.",
    },
  },
  {
    id: "burn-signs",
    kicker: "Signs",
    question: "How do I know if I am burnt out?",
    hook: "Burnout creeps up. Exhaustion that never lifts, a cynical voice about work and pulling away from people can all be signs.",
    short: "Common signs include feeling tired and drained, losing motivation, feeling helpless or detached, becoming more negative and withdrawing from others. Burnout can also show in the body, in sleep and in how you work. You do not need every sign: just a few may point to the exhaustion of burnout.",
    sections: [
      {
        heading: "Feelings",
        paragraphs: [
          "Emotional signs include feeling withdrawn, losing your motivation, self-doubt and feeling more tearful, angry or sensitive. You may feel trapped, helpless or overwhelmed, and lose interest or enjoyment in things.",
          "Mental Health UK adds feeling like a failure, feeling detached and alone, and lacking a sense of satisfaction and achievement.",
        ],
      },
      {
        heading: "Thoughts",
        paragraphs: [
          "Burnout can change the way you think. You may jump to conclusions, make problems bigger and successes smaller, assume the worst, or feel overly responsible.",
          "Some people have a cynical or negative outlook, mentally detach from work, or worry all the time.",
        ],
      },
      {
        heading: "The body",
        paragraphs: [
          "Physical signs include feeling exhausted all of the time, sleep problems, headaches, joint or muscle pains and stomach problems, such as feeling sick or losing your appetite.",
          "Mental Health UK also lists getting ill more often because of lowered immunity, and high blood pressure.",
        ],
      },
      {
        heading: "How you work and behave",
        paragraphs: [
          "You might avoid tasks you would usually enjoy, work longer hours to catch up, work through holidays or take more time off work.",
          "Some people put things off, find it hard to concentrate, or rely on food, drugs or alcohol to cope.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "You do not need to have every symptom to experience burnout. Just a few may show the level of exhaustion linked with it.",
          "If you are tired all the time and do not know why, it could be a sign of a problem. See a GP if you have felt tired for a few weeks and are not sure why, or if it affects your daily life.",
          "Samaritans lists burn out among the signs you may be struggling to cope. You do not have to feel suicidal to call them on 116 123.",
        ],
      },
    ],
    helps: [
      "Notice changes in your feelings, thoughts, body and behaviour, even if you only have a few of the signs.",
      "Write down what was happening when you started to feel stressed, to see whether certain situations, people or tasks are affecting you.",
      "See a GP if you have felt tired for a few weeks and are not sure why, or if it affects your daily life.",
      "Talk about your feelings to a friend, family member or health professional, or call Samaritans on 116 123.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note which signs you recognise.",
      "Write down when stress starts.",
      "Talk to someone you trust.",
    ],
    ask: "Could my tiredness and these other signs be burnout, or could something else be causing them?",
    interactive: {
      kind: "signs",
      title: "Signs of burnout",
      intro: "Tick any you notice. You do not need every sign: just a few may point to burnout.",
      signs: ["Feeling exhausted all of the time", "Sleep problems", "Headaches", "Joint or muscle pains", "Stomach problems", "Losing motivation", "Feeling trapped or helpless", "Feeling detached from work", "Assuming the worst", "Working longer hours to catch up", "Taking more time off work", "Avoiding tasks you used to enjoy"],
      after: "If burnout is affecting your daily life or mental health, talk to a GP or contact NHS talking therapies. Take this list with you.",
      copyHeading: "Signs of burnout I have noticed",
    },
    sources: [MHF_BURNOUT, EMM_WORK, MHUK_BURNOUT, SAM_STRUGGLING, NHS_STRESS, NHS_TIRED, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need every sign to be experiencing burnout?",
      options: [{ text: "No, just a few may point to it", right: true }, { text: "Yes, all of them" }, { text: "Only the physical signs count" }],
      why: "You do not need to have every symptom to experience burnout. Just a few may show the level of exhaustion linked with it.",
    },
  },
  {
    id: "burn-causes",
    kicker: "Causes",
    question: "Why has this happened to me?",
    hook: "Burnout is rarely about one thing. Workload, lack of control, caring and money worries can pile up, and none of it means you are weak.",
    short: "Burnout does not have one single cause. It is most often linked to long-term stress at work, such as too much work, too little control or too little support, but caring, parenting, health problems and money worries can add to it. Things that trigger stress in one person may not in another.",
    sections: [
      {
        heading: "No single cause",
        paragraphs: [
          "Burnout does not have one single cause. While it is most commonly linked to chronic stress at work, it can also be influenced by things outside work. We are all different, and things that trigger stress in one person may not in another.",
          "Mental Health UK says burnout can happen when repeated and prolonged high demands exceed the resources you have.",
        ],
      },
      {
        heading: "At work",
        paragraphs: [
          "Things at work linked to burnout include excessive workloads, constant deadlines, lack of control over your workload and lack of clarity about your responsibilities. Poor recognition, being treated unfairly, bullying or harassment, job insecurity and lack of support can also play a part.",
          "The Health and Safety Executive names six main areas that can lead to work-related stress if they are not managed properly: demands, control, support, relationships, role and change.",
        ],
      },
      {
        heading: "Outside work",
        paragraphs: [
          "Personal factors that can raise the risk include being a carer or a parent, working in a people-facing or supporting job such as nursing, teaching or social work, and living with a long-term health condition.",
          "Acas lists life events that can add to stress, such as a bereavement, divorce, the menopause, caring responsibilities, poor health and money worries.",
        ],
      },
      {
        heading: "What people say drives it",
        paragraphs: [
          "In Mental Health UK's Burnout Report, a high or increased workload was the biggest driver of stress at work, followed by unpaid overtime and fears about job security.",
          "Money worries, poor sleep, isolation, poor physical health and problems in relationships were all named as causing stress that may add to burnout.",
          "Perfectionism can also play a part, because of the exacting and unrelenting standards some people hold themselves to.",
        ],
      },
      {
        heading: "Finding your own causes",
        paragraphs: [
          "If you know what is causing your stress, it might be easier to find ways to manage it.",
          "Try asking yourself: do I have too much to do, is there not enough time, is there a lot of change or uncertainty, and are relationships with colleagues difficult? It can help to write down what was happening when you started to feel stressed.",
        ],
      },
    ],
    helps: [
      "Ask yourself what is causing the stress, and write down what was happening when it started.",
      "Think about what you can change and what you cannot.",
      "If you are worried about something outside your control, such as redundancy, get advice about your rights and options.",
      "Remember that this is not your fault, and that things that trigger stress in one person may not in another.",
      CRISIS,
    ],
    tryThisWeek: [
      "Write down what triggers stress.",
      "Sort what you can and cannot change.",
      "Get advice on worries about your job.",
    ],
    ask: "Which of the things adding to my stress could be changed, and who could help me with them?",
    interactive: {
      kind: "risk-check",
      title: "What is adding to the load?",
      intro: "Tick any that apply. Some can change, some cannot, and knowing which is which is a first step.",
      items: [
        { id: "workload", label: "Too much work", note: "A high or increased workload is the biggest driver of stress at work. Your manager may be able to help you agree priorities.", changeable: true },
        { id: "control", label: "Little control over your work", note: "Lack of control over your workload is linked to burnout. Think about what you can change and what you cannot.", changeable: true },
        { id: "bullying", label: "Bullying or conflict", note: "Bullying and conflict add to stress, particularly if not managed well. Talk to your manager as soon as you can.", changeable: true },
        { id: "job-security", label: "Worry about your job", note: "If you are worried about redundancy, getting advice about your rights and options may help.", changeable: true },
        { id: "caring", label: "Caring for someone", note: "Being a carer or a parent can raise the risk. Respite, such as a family member taking a shift, can help.", changeable: true },
        { id: "money", label: "Money worries", note: "Nearly half of people say money worries caused stress that may add to burnout.", changeable: true },
        { id: "health", label: "A long-term health condition", note: "Living with a long-term health condition can raise the risk of burnout.", changeable: false },
        { id: "perfectionism", label: "Very high standards", note: "Exacting, unrelenting standards can lead to burnout in the long term.", changeable: true },
      ],
    },
    sources: [MHF_BURNOUT, MHUK_BURNOUT, HSE_CAUSES, ACAS_WRS, EMM_WORK, NHS_STRESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Does burnout have one single cause?",
      options: [{ text: "No, work and personal factors can both play a part", right: true }, { text: "Yes, it is always caused by long hours" }, { text: "Yes, it comes from being weak" }],
      why: "Burnout does not have one single cause. While it is most commonly linked to chronic stress at work, it can also be influenced by things outside work.",
    },
  },
  {
    id: "burn-or-depression",
    kicker: "Burnout or depression?",
    question: "Is this burnout, or could it be depression?",
    hook: "The two can look alike, and one can lead to the other. A GP can help you work out what is going on.",
    short: "Burnout and depression share many signs, such as exhaustion, low motivation and withdrawing from people. Burnout tends to centre on what caused it, often work, while depression tends to affect life both at work and at home. Burnout can raise the risk of depression, so if you have felt low most of the day, every day, for more than 2 weeks, see a GP.",
    sections: [
      {
        heading: "Why they get confused",
        paragraphs: [
          "Some of the signs of burnout are also symptoms of stress, anxiety or depression, which can cause confusion. Burnout is not a medical condition, whereas depression and anxiety are medically diagnosed.",
          "Burnout can increase the risk of developing depression or anxiety, so it should be taken seriously.",
        ],
      },
      {
        heading: "Where the feelings point",
        paragraphs: [
          "Mental Health UK says people with depression often have negative thoughts and feelings about life, while burnout tends to centre on the things that caused it.",
          "If a high-pressure job has led to burnout, a person would typically feel detached and hopeless about work. Someone with depression would tend to feel detached and hopeless in general, both at work and at home.",
        ],
      },
      {
        heading: "Stress, burnout and hope",
        paragraphs: [
          "Stress often feels like too much, but you may still believe things will improve once you get them under control. Burnout can feel like you have nothing left to give, with little motivation or hope that things will change.",
        ],
      },
      {
        heading: "What depression looks like",
        paragraphs: [
          "Depression is more than simply feeling unhappy or fed up for a few days. When you are depressed, you feel persistently sad for weeks or months.",
          "Symptoms include continuous low mood, feeling hopeless and helpless, low self-esteem, having no motivation or interest in things and not getting any enjoyment out of life. There can be physical symptoms too, such as lack of energy, disturbed sleep and changes in appetite.",
          "Depression is a real illness with real symptoms. It is not a sign of weakness, and with the right treatment and support, most people with depression can make a full recovery.",
        ],
      },
      {
        heading: "Getting it checked",
        paragraphs: [
          "See a GP if you have symptoms of depression for most of the day, every day, for more than 2 weeks.",
          "Depression can come on gradually, so many people try to cope with their symptoms without realising they are unwell. It can sometimes take a friend or family member to suggest something is wrong.",
          "You can also refer yourself to NHS talking therapies for difficult feelings such as low mood and worry. You do not need a diagnosed mental health condition.",
        ],
      },
    ],
    helps: [
      "See a GP if you have symptoms of depression for most of the day, every day, for more than 2 weeks.",
      "Try not to delay: the sooner you see a doctor, the sooner you can be on the way to recovery.",
      "Refer yourself to NHS talking therapies if you are 18 or over and registered with a GP.",
      "Take burnout seriously, as it can increase the risk of depression and anxiety.",
      CRISIS,
    ],
    tryThisWeek: [
      "See a GP if low for over 2 weeks.",
      "Find your local talking therapies.",
      "Take how you feel seriously.",
    ],
    ask: "Could this be depression rather than burnout, and what treatment would help?",
    interactive: {
      kind: "flip-cards",
      title: "Stress, burnout and depression",
      intro: "Turn each card to see how they differ. They overlap, so a GP can help you work out which fits.",
      cards: [
        { id: "stress", front: "Stress", when: "When it feels like too much", back: "You may feel overwhelmed, but still believe things will improve once you get them under control." },
        { id: "burnout", front: "Burnout", when: "Nothing left to give", back: "Empty, exhausted and detached, usually centred on what caused it, such as work. Not a medical condition." },
        { id: "depression", front: "Depression", when: "Low for weeks or months", back: "A real illness. Feeling detached and hopeless in general, both at work and at home." },
        { id: "gp", front: "When to see a GP", when: "Low most days for over 2 weeks", back: "See a GP if you have symptoms of depression for most of the day, every day, for more than 2 weeks." },
      ],
    },
    sources: [MHUK_BURNOUT, EMM_WORK, NHS_DEP, NHS_DEP_SYMPTOMS, NHS_TT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How does depression tend to differ from burnout?",
      options: [{ text: "It affects life both at work and at home", right: true }, { text: "It only ever affects work" }, { text: "It always passes in a few days" }],
      why: "If a high-pressure job has led to burnout, a person would typically feel detached and hopeless about work. Someone with depression would tend to feel detached and hopeless in general, both at work and at home.",
    },
  },
  {
    id: "burn-rest",
    kicker: "Recovery",
    question: "How do I recover from burnout, and how long does it take?",
    hook: "Rest helps, but recovery also means changing what drained you. It is gradual, and every small step counts.",
    short: "Recovery from burnout is different for everyone, and Mental Health UK says it could take anywhere from a couple of months to a couple of years. Time away from the cause can help restore your energy, but it is important to deal with what is causing it, not just the symptoms. Small steps, kindness to yourself and support all help.",
    sections: [
      {
        heading: "It takes time",
        paragraphs: [
          "How long it takes to recover from burnout differs from person to person. It depends on whether you are still in the situation that caused it, and whether you are getting support.",
          "Mental Health UK says it could take anywhere from a couple of months to a couple of years. Recovery is gradual, and every step forward counts.",
        ],
      },
      {
        heading: "Time away from the cause",
        paragraphs: [
          "Time out of a situation that could cause burnout can help you process and reset your thoughts and feelings. A break from a high-pressure job can help restore your energy and motivation, and for carers, respite is important.",
          "Taking time off for work-related stress might give someone the space and time to recover. This can help if stress is making their physical or mental health worse.",
          "But returning to continued high demands may put you at risk again. So it is important to find outlets, structures or support that keep burnout from coming back.",
        ],
      },
      {
        heading: "Deal with the cause",
        paragraphs: [
          "Burnout can take time to recover from. It is important to deal with what is causing it, not just the symptoms.",
          "It helps to recognise the things within your control and those you have no control over. You may not be in a position to leave your job, but you may be able to raise work issues with your human resources or occupational health team.",
        ],
      },
      {
        heading: "Rest that restores",
        paragraphs: [
          "Take some time for socialising, relaxation or exercise. You could try setting aside a couple of nights a week for some quality me time away from work.",
          "Keeping to a routine can help bring a sense of control, and mindfulness can reduce stress.",
          "Mindfulness may also help you notice signs of stress earlier and deal with them better, though it is not right for everyone.",
        ],
      },
      {
        heading: "Be kind to yourself",
        paragraphs: [
          "Be compassionate to yourself, and remember that this is not your fault.",
          "You do not need to try everything at once. Start with one small change that feels manageable, and celebrate small wins.",
        ],
      },
    ],
    helps: [
      "Deal with what is causing the burnout, not just the symptoms.",
      "Make time away from the cause where you can, such as a break from work or respite from caring.",
      "Set aside a couple of nights a week for some quality me time away from work.",
      "Keep to a routine, and try mindfulness to help reduce stress.",
      "Start with one small change that feels manageable, and celebrate small wins.",
      CRISIS,
    ],
    tryThisWeek: [
      "Name one cause to tackle.",
      "Book two nights of me time.",
      "Make one small, manageable change.",
    ],
    ask: "Would some time away from work help my recovery, and what support is there while I recover?",
    interactive: {
      kind: "timeline",
      title: "A gradual road back",
      steps: [
        { id: "notice", when: "First", title: "Stop and notice", points: ["Identify what is contributing to the burnout.", "Learn how it affects you in body and mind."] },
        { id: "ease", when: "Early on", title: "Ease the pressure", points: ["Time away from the cause can restore energy.", "Talk to a GP, your manager or HR."] },
        { id: "routine", when: "Day to day", title: "Rest and routine", points: ["A routine brings a sense of control.", "Make time for relaxation and me time."] },
        { id: "cause", when: "Next", title: "Tackle the cause", points: ["Sort what you can and cannot control.", "Deal with the cause, not just the symptoms."] },
        { id: "stay-well", when: "Later", title: "Keep it from returning", points: ["The same high demands may put you at risk again.", "Find support and structures that help."] },
      ],
    },
    sources: [MHUK_BURNOUT, MHF_BURNOUT, EMM_WORK, NHS_BUSTERS, NHS_MINDFULNESS, ACAS_TIMEOFF, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Besides rest, what does recovery from burnout need?",
      options: [{ text: "Dealing with what is causing it", right: true }, { text: "Working harder to catch up" }, { text: "Nothing else at all" }],
      why: "Burnout can take time to recover from. It is important to deal with what is causing it, not just the symptoms.",
    },
  },
  {
    id: "burn-gp",
    kicker: "Getting help",
    question: "Should I see a GP about burnout, and can I get signed off?",
    hook: "A GP can do more than write a fit note. They can check for other causes of tiredness and point you towards talking therapy.",
    short: "If burnout is affecting your daily life or mental health, talk to a GP or contact NHS talking therapies. A GP could give you a fit note for time away from work, refer you to a counsellor, or check whether something else is behind your tiredness. You need to give your employer a fit note if you have been off sick for more than 7 days in a row.",
    sections: [
      {
        heading: "When to see a GP",
        paragraphs: [
          "If burnout is affecting your daily life or mental health, talk to a GP or contact NHS talking therapies.",
          "See a GP if you are struggling to cope with stress, if the things you are trying yourself are not helping, or if you would prefer to get a referral from a GP.",
          "Rethink says signs you are struggling include finding it hard to do everyday things, taking more time off work, using drugs or alcohol to cope, or feeling very low or hopeless for 2 weeks or more.",
        ],
      },
      {
        heading: "What a GP can offer",
        paragraphs: [
          "Mental Health UK says a GP could provide a fit note, giving you time away from work, or refer you to a counsellor.",
          "Rethink lists other things a GP could offer: self-help advice, talking therapy, exercise on prescription, medication, local support groups or an appointment with a social prescriber.",
          "Carers UK says your GP will have seen a lot of patients with stress-related problems. If stress is making you feel depressed, your GP may prescribe antidepressants, and you can ask about side effects or say if you would prefer to try other treatments first.",
        ],
      },
      {
        heading: "Checking for other causes",
        paragraphs: [
          "If you are tired all the time and do not know why, it could be a sign of a problem. Stress and depression are common causes of tiredness, but so are poor sleep, hormonal changes and some illnesses.",
          "See a GP if you have felt tired for a few weeks and are not sure why, or if it affects your daily life. You may need tests, such as blood tests to check for anaemia, diabetes or an overactive thyroid.",
        ],
      },
      {
        heading: "Before and during time off",
        paragraphs: [
          "It may help to write down the main points and questions you want to discuss with your GP. If you have kept a stress diary, you could take it with you.",
          "If you need time off, follow your organisation's sickness policy if it has one. Your employer should keep a reasonable amount of contact while you are off, and you can agree together how often, so that it is not overwhelming.",
        ],
      },
      {
        heading: "Fit notes and sick pay",
        paragraphs: [
          "You need to give your employer a fit note if you have been ill for more than 7 days in a row, including weekends and bank holidays. If you are off for 7 days or less, you can confirm it yourself, which is called self-certification.",
          "A fit note says you are either not fit for work or may be fit for work. If it says you may be fit for work, your employer should discuss changes that might help you return, such as different hours or tasks.",
          "Statutory Sick Pay is paid by your employer for up to 28 weeks if you are too ill to work. You can get more if your company has its own sick pay scheme.",
        ],
      },
    ],
    helps: [
      "Talk to a GP or contact NHS talking therapies if burnout is affecting your daily life or mental health.",
      "Write down the main points and questions you want to discuss, and take a stress diary if you have one.",
      "See a GP if you have felt tired for a few weeks and are not sure why.",
      "Give your employer a fit note if you are off sick for more than 7 days in a row.",
      "Agree with your employer how often to keep in touch while you are off, so it is not overwhelming.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Write down what to ask.",
      "Agree how to keep in touch at work.",
    ],
    ask: "Do I need time off work, and a fit note? And could anything physical be adding to my tiredness?",
    interactive: {
      kind: "signs",
      title: "What to tell my GP",
      intro: "Tick anything that applies, so you remember it at the appointment.",
      signs: ["Feeling exhausted all of the time", "Tired for a few weeks, not sure why", "Sleep problems", "Low or hopeless for 2 weeks or more", "Finding everyday things hard", "Taking more time off work", "Using drugs or alcohol to cope", "No longer enjoying anything", "Having panic attacks"],
      after: "Take this list to your appointment. A GP can talk about time off, talking therapy and other causes of tiredness.",
      copyHeading: "What I want to tell my GP",
    },
    sources: [MHUK_BURNOUT, EMM_WORK, RETHINK_STRESS, NHS_STRESS, NHS_TIRED, GOV_SICK, GOV_SSP, ACAS_TIMEOFF, CUK_STRESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When do you need to give your employer a fit note?",
      options: [{ text: "If you are off sick for more than 7 days in a row", right: true }, { text: "From your first day off" }, { text: "Only after 28 weeks" }],
      why: "You need to give your employer a fit note if you have been ill for more than 7 days in a row, including weekends and bank holidays.",
    },
  },
  {
    id: "burn-therapy",
    kicker: "Treatment",
    question: "Can talking therapy help with burnout?",
    hook: "Burnout is not an illness, but talking therapies can help you untangle what drove it and find a way back.",
    short: "Mental Health UK says resolving burnout usually combines relief from what is causing it with longer-term help such as counselling, CBT or acceptance and commitment therapy. NHS talking therapies may be able to help with stress, and you can refer yourself if you are 18 or over and registered with a GP. You do not need a diagnosis.",
    sections: [
      {
        heading: "How therapy fits",
        paragraphs: [
          "Burnout is not regarded as an illness, but resolving it usually involves immediate relief from what is causing it, as well as longer-term measures. These include talking therapies such as counselling, cognitive behavioural therapy (CBT) or acceptance and commitment therapy (ACT).",
          "It is important as part of that process to understand the causes of burnout, so that solutions can be put in place to prevent it happening again.",
        ],
      },
      {
        heading: "Getting NHS talking therapies",
        paragraphs: [
          "NHS talking therapies for anxiety and depression may be able to help with stress. If you are 18 or over, or 16 or over in some areas, you can refer yourself directly without talking to a GP.",
          "You need to be registered with a GP, and you do not need a diagnosed mental health condition. You can refer yourself for difficult feelings, such as low mood and worry.",
          "Talking therapies are sometimes free through your employer, university or local charities. If your mental health problem is because of stress at work, your employer might be able to refer you to occupational health services.",
        ],
      },
      {
        heading: "CBT",
        paragraphs: [
          "In CBT, a therapist helps you change how you think and act. You talk about situations you find difficult and how they make you think, feel and act, and you practise what you have learned between sessions.",
          "You will usually have between 5 and 15 sessions. CBT can be done in person, online or on the phone, one to one or as part of a group.",
          "Every Mind Matters says you can also use cognitive behavioural therapy to change negative or unhelpful thoughts.",
        ],
      },
      {
        heading: "Counselling",
        paragraphs: [
          "Counselling can help with difficult emotions, such as stress and low mood, and with problems at work. A counsellor listens without judgement and helps you find your own solutions.",
          "Sessions usually last 50 to 60 minutes. If you get counselling on the NHS, you will usually have between 8 and 16 sessions.",
        ],
      },
      {
        heading: "Trying it yourself",
        paragraphs: [
          "Self-help CBT can be a start. One technique is catch it, check it, change it: notice an unhelpful thought, look at the evidence for it, and see if you can change it for a neutral or more positive one.",
          "Types of unhelpful thought include always expecting the worst outcome, focusing only on the bad, and considering yourself the sole cause of things going wrong.",
        ],
      },
    ],
    helps: [
      "Refer yourself to NHS talking therapies if you are 18 or over and registered with a GP.",
      "Ask whether your employer, university or a local charity offers free talking therapy.",
      "Ask about occupational health if stress at work is affecting your mental health.",
      "Practise what you learn between CBT sessions, as this is important for CBT to work.",
      "Try catch it, check it, change it with one unhelpful thought.",
      CRISIS,
    ],
    tryThisWeek: [
      "Refer yourself to talking therapies.",
      "Ask about therapy through work.",
      "Catch, check and change one thought.",
    ],
    ask: "Can I be referred for talking therapy, and which type would suit me?",
    interactive: {
      kind: "flip-cards",
      title: "Talking therapies, card by card",
      intro: "Turn each card to see what each one involves. The type you are offered depends on your needs and what is available locally.",
      cards: [
        { id: "guided", front: "Guided self-help", when: "Often offered first", back: "You work through a workbook or online course with a therapist's help. It is based on CBT principles." },
        { id: "cbt", front: "CBT", when: "Usually 5 to 15 sessions", back: "A therapist helps you change how you think and act. You practise what you learn between sessions." },
        { id: "counselling", front: "Counselling", when: "Usually 8 to 16 NHS sessions", back: "A counsellor listens without judgement and helps you find your own solutions to problems." },
        { id: "mbct", front: "Mindfulness-based cognitive therapy", when: "Noticing thoughts as they happen", back: "You learn to notice your thoughts and feelings in the moment, using meditation and breathing exercises." },
        { id: "act", front: "Acceptance and commitment therapy", when: "A longer-term option", back: "One of the talking therapies Mental Health UK names for resolving burnout." },
        { id: "oh", front: "Occupational health", when: "If stress at work is the cause", back: "Your employer might be able to refer you to occupational health services." },
      ],
    },
    sources: [NHS_TT, NHS_CBT, NHS_COUNSELLING, MHUK_BURNOUT, EMM_WORK, EMM_REFRAME, NHS_STRESS, NHS_ACCESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need a diagnosis to refer yourself to NHS talking therapies?",
      options: [{ text: "No", right: true }, { text: "Yes, from a GP" }, { text: "Yes, from your employer" }],
      why: "You need to be registered with a GP, and you do not need a diagnosed mental health condition.",
    },
  },
  {
    id: "burn-boundaries",
    kicker: "Boundaries",
    question: "How do I set boundaries and say no without feeling guilty?",
    hook: "Boundaries are not selfish. They protect the time and energy you need to recover.",
    short: "Boundaries are limits you set to protect your time, energy and wellbeing. They can include taking breaks, finishing on time, switching off work notifications and saying no when you already have too much to do. Mental Health UK suggests asking for adjustments before pressures build, without guilt.",
    sections: [
      {
        heading: "What boundaries are",
        paragraphs: [
          "Boundaries are limits you set to protect your time, energy and wellbeing. This is especially important if you work from home.",
          "Mental Health UK suggests setting clear boundaries at work and at home, so your time is protected and you can restore your energy.",
        ],
      },
      {
        heading: "Boundaries at work",
        paragraphs: [
          "You could take breaks, finish work on time, say no when you already have too much to do, and switch off work notifications outside your working hours. You could also agree on realistic deadlines and workloads.",
          "If you work from home, try to keep to a routine, make a dedicated workspace and switch off when the working day is over.",
          "Take proper breaks at work. The Mental Health Foundation suggests at least half an hour for lunch, and getting out of the workplace if you can.",
        ],
      },
      {
        heading: "Speaking up",
        paragraphs: [
          "Speak up when the expectations and demands of work are too much. Your manager and employer need to know where the pressures lie in order to address them.",
          "Mental Health UK suggests discussing workloads, challenges and expectations with your manager regularly, and asking for adjustments before pressures build, without guilt.",
          "It can be difficult to stand up for yourself at work if you are on a zero-hours contract or worried about losing your job. Make sure you know your rights, and try the tips that feel safe for you.",
        ],
      },
      {
        heading: "Work smarter, not longer",
        paragraphs: [
          "Working smarter means prioritising your work and concentrating on the tasks that will make a real difference. Leave the least important tasks to last, and accept that you will not have time for everything.",
          "Write lists of what you need to do, prioritise the most important tasks and share tasks with others if you can.",
        ],
      },
      {
        heading: "Boundaries at home",
        paragraphs: [
          "Boundaries matter outside work too. If the challenges you face are at home, you could find some respite from caring, such as asking a family member to take a shift to give you time back.",
          "It is important to do some things because you want to, not because you have to.",
        ],
      },
    ],
    helps: [
      "Take breaks, finish work on time and switch off work notifications outside your working hours.",
      "Say no when you already have too much to do, and agree on realistic deadlines and workloads.",
      "Speak up when the expectations and demands of work are too much.",
      "Prioritise the tasks that make a real difference, and accept that you will not have time for everything.",
      "Ask a family member to take a shift if caring is wearing you down.",
      CRISIS,
    ],
    tryThisWeek: [
      "Switch off notifications after work.",
      "Say no when your list is full.",
      "Tell your manager what is too much.",
    ],
    ask: "Can we agree realistic deadlines and a workload I can manage while I recover?",
    interactive: {
      kind: "scenarios",
      title: "Holding a boundary",
      scenarios: [
        {
          id: "email",
          situation: "It is evening, and a work message arrives on your phone.",
          options: [{ text: "Leave it until working hours", best: true }, { text: "Reply straight away" }],
          why: "Switching off work notifications outside your working hours is one way to protect your time, energy and wellbeing.",
        },
        {
          id: "new-task",
          situation: "You are asked to take on a new task, but your list is already full.",
          options: [{ text: "Say no, or agree a realistic deadline", best: true }, { text: "Say yes and work late" }],
          why: "Say no when you already have too much to do, and agree on realistic deadlines and workloads.",
        },
        {
          id: "lunch",
          situation: "You skip lunch again to catch up.",
          options: [{ text: "Take a proper break, away if you can", best: true }, { text: "Eat at your desk while working" }],
          why: "Take proper breaks at work: at least half an hour for lunch, and get out of the workplace if you can.",
        },
        {
          id: "building",
          situation: "The pressure has been building for weeks.",
          options: [{ text: "Talk to your manager now", best: true }, { text: "Wait until it gets worse" }],
          why: "Ask for adjustments before pressures build, without guilt. Your manager needs to know where the pressures lie in order to address them.",
        },
      ],
    },
    sources: [EMM_WORK, MHUK_BURNOUT, MHF_WORKLIFE, NHS_BUSTERS, RETHINK_STRESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What are boundaries for?",
      options: [{ text: "Protecting your time, energy and wellbeing", right: true }, { text: "Avoiding all work" }, { text: "Keeping people away for good" }],
      why: "Boundaries are limits you set to protect your time, energy and wellbeing.",
    },
  },
  {
    id: "burn-work",
    kicker: "Work",
    question: "How do I go back to work after burnout?",
    hook: "Going back is a step, not a test. A plan, a phased return and the right support can make it gentler.",
    short: "When you return after time off with stress, a return to work meeting is a chance to check you are ready, agree a plan and talk about support. A phased return, such as reduced hours or a lighter workload, lets you build up gradually. Returning to the same high demands can put you at risk again, so it helps to change what led to burnout.",
    sections: [
      {
        heading: "Before you go back",
        paragraphs: [
          "Before a return to work meeting, speak to your employer to find out what to expect and whether to bring anything. Think about any changes or adjustments you might need, and what support might help in the future.",
          "While you are off, your employer should have a reasonable amount of contact with you. Agree together how often, so that it is not overwhelming.",
        ],
      },
      {
        heading: "The return to work meeting",
        paragraphs: [
          "A return to work meeting is a good chance to make sure you are ready, see what support you need and agree a plan, such as a phased return. After time off with work-related stress, it can also include reviewing or doing a stress risk assessment.",
          "You can talk about what you would like colleagues to know about your absence, and what you would like to keep confidential. You do not have to tell your employer anything, but talking openly can help them put the right support in place.",
        ],
      },
      {
        heading: "A phased return",
        paragraphs: [
          "A phased return is when you gradually build up to returning to work, for example starting on reduced hours, doing different work or having a lighter workload.",
          "How long it lasts depends on your circumstances. A fit note will usually give advice, but you and your employer should agree it together and review it regularly.",
          "If your fit note says you may be fit for work, your employer should discuss changes that might help you return, such as different hours or tasks.",
        ],
      },
      {
        heading: "Adjustments and support",
        paragraphs: [
          "Employers must make reasonable adjustments so that workers with disabilities, or physical or mental health conditions, are not substantially disadvantaged. These can include a phased return to work, with flexible hours or part-time working.",
          "Acas says employers should still explore adjustments even if a mental health problem is not a disability. Examples include more frequent, shorter breaks, flexible hours, reviewing tasks or deadlines, and regular check-ins.",
          "Access to Work can help you manage your mental health at work, with a tailored plan and one-to-one sessions with a mental health professional.",
        ],
      },
      {
        heading: "Not straight back to the same pressure",
        paragraphs: [
          "Mental Health UK says returning to continued high demands may place you at risk again. So it is important to find outlets, structures or support that keep you from burning out.",
          "In its Burnout Report, over a quarter of workers who took time off because of stress received no help on their return. Only a small minority had a formal return-to-work or recovery plan.",
        ],
      },
    ],
    helps: [
      "Think before the meeting about any changes or adjustments you might need.",
      "Ask about a phased return, such as reduced hours or a lighter workload.",
      "Agree how long a phased return will last, and review it regularly.",
      "Ask about adjustments such as more frequent, shorter breaks or regular check-ins.",
      "Look into Access to Work for support with your mental health at work.",
      CRISIS,
    ],
    tryThisWeek: [
      "List adjustments that might help.",
      "Ask about a phased return.",
      "Check Access to Work support.",
    ],
    ask: "Could I have a phased return, and what adjustments would help me stay well at work?",
    interactive: {
      kind: "timeline",
      title: "Steps back into work",
      steps: [
        { id: "off", when: "While off", title: "Keep in touch", points: ["Agree how often you will be in contact.", "It should not feel overwhelming."] },
        { id: "before", when: "Before the meeting", title: "Prepare", points: ["Ask what to expect and what to bring.", "Think about adjustments you might need."] },
        { id: "meeting", when: "Return meeting", title: "Agree a plan", points: ["Check you are ready and what support you need.", "Review or do a stress risk assessment."] },
        { id: "phased", when: "First weeks", title: "A phased return", points: ["Reduced hours, different work or a lighter load.", "Agreed together and reviewed regularly."] },
        { id: "settle", when: "Settling back", title: "Stay well", points: ["The same high demands may put you at risk again.", "Keep using the support that helps."] },
      ],
    },
    sources: [ACAS_RETURN, ACAS_PHASED, ACAS_TIMEOFF, GOV_SICK, GOV_ADJUST, ACAS_ADJ, MHUK_BURNOUT, GOV_ATW, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is a phased return to work?",
      options: [{ text: "Building up gradually, such as on reduced hours", right: true }, { text: "Going straight back to full duties" }, { text: "Working extra hours to catch up" }],
      why: "A phased return is when you gradually build up to returning to work, for example starting on reduced hours, doing different work or having a lighter workload.",
    },
  },
  {
    id: "burn-daily-habits",
    kicker: "Living well",
    question: "Can sleep, food and exercise really help with burnout?",
    hook: "They will not fix the cause, but sleep, food and movement give your body back some of what burnout takes.",
    short: "Mental Health UK calls sleep, exercise, nutrition and stress management the four foundations of health. Prioritising sleep, eating a balanced diet and being active can all help you manage burnout, while alcohol, smoking and caffeine give only temporary relief. Start small: even a brisk 10-minute walk can clear your mind.",
    sections: [
      {
        heading: "Four foundations",
        paragraphs: [
          "Mental Health UK suggests focusing on four foundations of health: sleep, exercise, nutrition and stress management. Make time for activities outside work that bring joy and balance.",
          "The Mental Health Foundation suggests prioritising sleep, as lack of sleep can make stress worse, and eating a balanced, varied diet to keep you healthy and improve your mood.",
        ],
      },
      {
        heading: "Sleep",
        paragraphs: [
          "Most healthy adults need around 7 to 9 hours of sleep a night. If you regularly do not get enough sleep, you may feel tired, irritable or less able to cope.",
          "Try to go to bed and wake up at around the same time each day, and give yourself time to relax before bed.",
          "The NHS recommends that you do not smoke or drink alcohol, tea or coffee at least 6 hours before going to bed, and that you do not use screens in the hour before sleep.",
        ],
      },
      {
        heading: "Movement",
        paragraphs: [
          "Physical activity can ease stress, improve your mood and boost your energy.",
          "Exercise will not make your stress disappear, but it can reduce some of the emotional intensity you are feeling, clearing your thoughts so you can deal with problems more calmly.",
          "Adults should aim for at least 150 minutes of moderate activity a week. If you have not exercised for a while, start gradually: even a brisk 10-minute walk can clear your mind and help you relax.",
        ],
      },
      {
        heading: "Food and drink",
        paragraphs: [
          "Eating a healthy, balanced diet is good for your mental and physical health. Cutting down on caffeine, especially in the evening, could help you sleep better.",
          "Do not rely on alcohol, smoking and caffeine as your ways of coping. They might give temporary relief, but in the long term they will not solve your problems.",
        ],
      },
      {
        heading: "Small changes in the working day",
        paragraphs: [
          "Every Mind Matters suggests short breaks during the working day, a walk before, during or after work, simple stretches whenever you can, and healthy lunches you will enjoy.",
          "You do not need to try everything at once. Start with one small change that feels manageable.",
        ],
      },
    ],
    helps: [
      "Go to bed and wake up at around the same time each day.",
      "Do not drink alcohol, tea or coffee for at least 6 hours before going to bed.",
      "Build up gradually towards 150 minutes of moderate activity a week; even a brisk 10-minute walk helps.",
      "Eat a balanced, varied diet to keep you healthy and improve your mood.",
      "Do not rely on alcohol, smoking or caffeine as ways of coping.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep the same bedtime and wake time.",
      "No alcohol, tea or coffee 6 hours before bed.",
      "Take a brisk 10-minute walk.",
    ],
    ask: "Could my sleep or anything physical be adding to my tiredness, and is exercise on prescription available here?",
    interactive: {
      kind: "risk-check",
      title: "Habits that drain or restore",
      intro: "Tick any that sound like you at the moment. Each one can change, a little at a time.",
      items: [
        { id: "irregular", label: "Bedtimes that vary a lot", note: "Going to bed and waking at around the same time each day helps your body get used to sleeping better.", changeable: true },
        { id: "late-caffeine", label: "Tea or coffee late in the day", note: "The NHS recommends no alcohol, tea or coffee at least 6 hours before bed.", changeable: true },
        { id: "screens", label: "Screens in bed", note: "Do not use smartphones or screens in the hour before sleep.", changeable: true },
        { id: "inactive", label: "Little movement in the day", note: "Physical activity can ease stress and boost energy. Even a brisk 10-minute walk can help you relax.", changeable: true },
        { id: "no-breaks", label: "No breaks at work", note: "Short breaks, a walk and simple stretches during the working day can help.", changeable: true },
        { id: "alcohol", label: "Drinking or smoking to cope", note: "They might give temporary relief, but in the long term they will not solve your problems.", changeable: true },
      ],
    },
    sources: [EMM_SLEEP, NHS_TIRED, NHS_EXERCISE_DEP, NHS_ACTIVITY, MHF_BURNOUT, MHUK_BURNOUT, RETHINK_STRESS, NHS_BUSTERS, EMM_WORK, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How much sleep do most healthy adults need?",
      options: [{ text: "Around 7 to 9 hours a night", right: true }, { text: "Around 4 to 5 hours a night" }, { text: "As little as you can manage" }],
      why: "Most healthy adults need around 7 to 9 hours of sleep a night.",
    },
  },
  {
    id: "burn-employer",
    kicker: "Employers",
    question: "What should my employer be doing about burnout?",
    hook: "Preventing burnout should not be down to you alone. Employers have legal duties, and many simple changes help.",
    short: "Employers have a legal duty to protect workers from stress at work by assessing the risks and acting on them. They have a duty of care, must treat mental and physical health as equally important, and must make reasonable adjustments for workers who are disabled. Simple changes, such as reviewing workloads and allowing more breaks, can help everyone.",
    sections: [
      {
        heading: "The law",
        paragraphs: [
          "Employers have a legal duty to protect workers from stress at work by doing a risk assessment and acting on it. Your employer must share the results of any risk assessment with you.",
          "Acas says employers have a duty of care: they must do all they reasonably can to support workers' health, safety and wellbeing. They must treat mental and physical health as equally important.",
        ],
      },
      {
        heading: "Six areas to manage",
        paragraphs: [
          "The Health and Safety Executive names six main areas of work design that can affect stress levels: demands, control, support, relationships, role and change. Employers should assess the risks in these areas.",
          "Workers may say they cannot cope with the demands of their job, cannot control the way they work, do not get enough support, have trouble with relationships or bullying, do not understand their role, or are not engaged in change.",
        ],
      },
      {
        heading: "Adjustments and flexible working",
        paragraphs: [
          "Poor mental health can count as a disability under the Equality Act 2010 if it has a substantial adverse effect on your life and lasts, or is expected to last, at least 12 months. Your employer must then make reasonable adjustments.",
          "Acas gives examples such as more frequent, shorter breaks, flexible hours, reviewing tasks or deadlines, regular check-ins and an extended phased return. Even if the problem is not a disability, employers should still explore whether adjustments can help.",
          "All employees have the legal right to request flexible working from their first day in a job, and employers must deal with requests in a reasonable manner.",
        ],
      },
      {
        heading: "A healthier workplace",
        paragraphs: [
          "The Mental Health Foundation says finding a balance should not just be down to you. Workplaces should encourage openness, train managers to spot stress, regularly review workloads and encourage breaks, including annual leave.",
          "They should also allow you to attend counselling and support services during working hours, as they would for other medical appointments.",
          "The NHS says NICE recommends that employers make mindfulness available to all employees to support mental wellbeing at work.",
        ],
      },
      {
        heading: "Prevention, early help and recovery",
        paragraphs: [
          "Mental Health UK asks employers to keep workloads manageable, regularly assess stress and burnout risks, help managers recognise the signs of burnout and act on it, and provide structured return to work support.",
          "In its Burnout Report, more than a third of workers would not feel comfortable telling their manager if they were struggling, which increases the risk that problems escalate.",
        ],
      },
    ],
    helps: [
      "Talk to your manager as soon as possible, so they have the chance to help.",
      "If the pressure comes from your line manager, talk to HR, a trade union or employee representative, an employee assistance programme or your GP.",
      "Remember that your employer must assess the risks to your health from stress at work and share the results with you.",
      "Ask about reasonable adjustments, such as more frequent, shorter breaks or reviewing deadlines.",
      "Make a flexible working request if different hours, days or places of work would help.",
      CRISIS,
    ],
    tryThisWeek: [
      "Talk to your manager early.",
      "Ask about reasonable adjustments.",
      "Consider a flexible working request.",
    ],
    ask: "Has my employer done a stress risk assessment, and what adjustments could they make for me?",
    interactive: {
      kind: "flip-cards",
      title: "Your rights at work, card by card",
      intro: "Turn each card to see what the law and guidance say employers should do.",
      cards: [
        { id: "risk", front: "Stress risk assessment", when: "For every workplace", back: "Employers must assess the risks from stress at work, act on them, and share the results with you." },
        { id: "care", front: "Duty of care", when: "All the time", back: "Employers must do all they reasonably can to support your health, safety and wellbeing, mental and physical alike." },
        { id: "adjustments", front: "Reasonable adjustments", when: "If poor mental health is a disability", back: "Changes such as shorter, more frequent breaks or reviewed deadlines. Worth exploring even if it is not a disability." },
        { id: "flexible", front: "Flexible working request", when: "From your first day in a job", back: "You can ask to change your hours, days or place of work. Requests must be handled reasonably." },
        { id: "counselling", front: "Time for support", when: "Counselling and appointments", back: "Workplaces should let you attend counselling and support services in working hours, as for other appointments." },
      ],
    },
    sources: [HSE_OVERVIEW, HSE_EMPLOYEE, HSE_CAUSES, ACAS_MH, ACAS_ADJ, MHF_WORKLIFE, MHUK_BURNOUT, GOV_FLEXIBLE, NHS_MINDFULNESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What must employers do about stress at work?",
      options: [{ text: "Assess the risks and act on them", right: true }, { text: "Nothing, it is a private matter" }, { text: "Only act once someone is off sick" }],
      why: "Employers have a legal duty to protect workers from stress at work by doing a risk assessment and acting on it.",
    },
  },
  {
    id: "burn-preventing",
    kicker: "Staying well",
    question: "How can I stop burnout coming back?",
    hook: "Knowing your early warning signs, and acting on them, is one of the best protections.",
    short: "Mental Health UK suggests a personal wellbeing plan with your early warning signs, coping strategies and the support that helps you most. Boundaries, regular breaks, support at work and at home, and things you enjoy all help. Burnout can come from things outside your control, so steps you take may not always prevent it, and that is not a failing.",
    sections: [
      {
        heading: "A wellbeing plan",
        paragraphs: [
          "Mental Health UK suggests defining what good mental health looks like for you in a Wellbeing Action Plan. Include early warning signs, coping strategies and what support helps you most.",
          "Acas says a Wellness Action Plan can help you think about what is causing you stress, and talk to your manager to get the support you need.",
        ],
      },
      {
        heading: "Spot it early",
        paragraphs: [
          "Recognise and manage stress early, using tools that help you see what is driving it and how to cope.",
          "Burnout can develop gradually, so you may not notice it straight away.",
          "If it helps, write down what was happening when you started to feel stressed. This can help you see whether certain situations, people or tasks are affecting you.",
        ],
      },
      {
        heading: "Everyday protection",
        paragraphs: [
          "Carve out time for yourself in a busy schedule, whether through regular breaks at work or respite from caring. Set clear boundaries at work and at home.",
          "Build support at work and socially with people you trust, take up something you enjoy, eat nutritious food, keep regular sleeping patterns and keep moving.",
          "The NHS suggests 5 steps to mental wellbeing: connect with other people, be physically active, learn new skills, help other people, and pay attention to the present moment.",
        ],
      },
      {
        heading: "Build resilience",
        paragraphs: [
          "Resilience is your ability to cope with challenges and adapt when things are difficult. Think about what helped you in the past, and look for practical ways to deal with a problem.",
          "Problem solving can help. Make a list of your problems, work out which can be solved, and set aside 5 or 10 minutes to think about possible solutions for one of them.",
          "Try to concentrate on the things you do have control over, and accept the things you cannot change.",
        ],
      },
      {
        heading: "Not all in your control",
        paragraphs: [
          "Mental Health UK says burnout can sometimes be the result of factors outside a person's control, so the steps you take may not always prevent it. Returning to continued high demands may place you at risk again.",
          "Recovery is gradual, and every step forward counts. Be compassionate to yourself, and remember that this is not your fault.",
        ],
      },
    ],
    helps: [
      "Write a wellbeing plan with your early warning signs, coping strategies and the support that helps you most.",
      "Carve out time for yourself, such as regular breaks at work or respite from caring.",
      "Build support at work and socially with people you trust.",
      "Try the 5 steps: connect, be active, learn new skills, help others and notice the present moment.",
      "Set aside 5 or 10 minutes to think through solutions to one problem you can solve.",
      CRISIS,
    ],
    tryThisWeek: [
      "List your early warning signs.",
      "Book in time for yourself.",
      "Spend 10 minutes on one problem.",
    ],
    ask: "What early warning signs should I watch for, and who should I contact if burnout starts to return?",
    interactive: {
      kind: "scenarios",
      title: "When the warning signs return",
      scenarios: [
        {
          id: "weekends",
          situation: "You notice you are working weekends again to catch up.",
          options: [{ text: "Talk to your manager as soon as you can", best: true }, { text: "Push on until things calm down" }],
          why: "Working longer hours or weekends can be a sign of work-related stress. If you are experiencing stress, talk to your manager as soon as you can.",
        },
        {
          id: "drained",
          situation: "Your sleep is slipping and you feel drained.",
          options: [{ text: "Turn to the coping strategies in your plan", best: true }, { text: "Ignore it and hope it passes" }],
          why: "A wellbeing plan includes your early warning signs, coping strategies and the support that helps you most.",
        },
        {
          id: "problem",
          situation: "A problem at work keeps going round in your head.",
          options: [{ text: "Spend 5 or 10 minutes on solutions", best: true }, { text: "Worry about it all evening" }],
          why: "Work out whether the problem can be solved, then set aside 5 or 10 minutes to think about possible solutions.",
        },
        {
          id: "friends",
          situation: "You have stopped seeing friends.",
          options: [{ text: "Arrange time with someone you trust", best: true }, { text: "Wait until you have more energy" }],
          why: "Good relationships are important for your mental wellbeing, and a support network of people you trust helps you open up when you need to.",
        },
      ],
    },
    sources: [MHUK_BURNOUT, EMM_WORK, MHF_BURNOUT, NHS_5STEPS, ACAS_WRS, EMM_PROBLEM, NHS_BUSTERS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does Mental Health UK suggest putting in a wellbeing plan?",
      options: [{ text: "Early warning signs, coping strategies and support", right: true }, { text: "A list of extra tasks to take on" }, { text: "Nothing, plans do not help" }],
      why: "Include early warning signs, coping strategies and what support helps you most.",
    },
  },
];
