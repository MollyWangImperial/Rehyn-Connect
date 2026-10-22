import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Autism in adults page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS autism pages and the
// National Autistic Society, with NHS England and GOV.UK for adjustments and work. mind.org.uk was not read (it
// blocks automated reading) and the Royal College of Psychiatrists page did not load today, so neither is cited.
// Autism is described as the NHS and the National Autistic Society describe it: a lifelong difference, not an
// illness, with no talk of cures. Safe messaging throughout: masking, burnout and mental health are described in
// general terms only, and every answer ends its "What helps" list with the crisis routes exactly as the NHS gives
// them (111 mental health option, Samaritans 116 123, Shout 85258, 999 or A&E). General information only; it never
// replaces what a person's own GP, autism team or mental health team tells them, and no medicine should be started,
// stopped or changed without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const nas = (label: string, path: string): LearnSource => ({ label: `National Autistic Society: ${label}`, url: `https://www.autism.org.uk/${path}` });
const govuk = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_WHAT = nhs("What is autism?", "conditions/autism/what-is-autism/");
const NHS_SIGNS = nhs("Signs of autism in adults", "conditions/autism/signs-in-adults/");
const NHS_ASSESS = nhs("Autism assessments", "conditions/autism/assessments/");
const NHS_ADULT = nhs("Autism and adult life", "conditions/autism/adult-life/");
const NHS_HELP = nhs("Help and support for autistic people and their families", "conditions/autism/help-and-support/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_FIND_TT = nhs("Find NHS talking therapies for anxiety and depression", "nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const NAS_WHAT = nas("What is autism?", "advice-and-guidance/what-is-autism");
const NAS_NEEDS = nas("Varying support needs", "advice-and-guidance/what-is-autism/varying-support-needs");
const NAS_COMMUNICATION = nas("Autism and communication", "advice-and-guidance/about-autism/autism-and-communication");
const NAS_SENSORY = nas("Autism and sensory processing", "advice-and-guidance/about-autism/sensory-processing");
const NAS_ROUTINE = nas("Preference for order, predictability or routine", "advice-and-guidance/about-autism/preference-for-order-predictability-or-routine");
const NAS_SIGNS = nas("Signs that a child or adult may be autistic", "advice-and-guidance/diagnosis/before-diagnosis/signs-that-a-child-or-adult-may-be-autistic");
const NAS_WOMEN = nas("Autistic women and girls", "advice-and-guidance/identity/autistic-women-and-girls");
const NAS_DECIDING = nas("Deciding whether to seek an autism assessment", "advice-and-guidance/diagnosis/before-diagnosis/deciding-whether-to-seek-an-autism-assessment");
const NAS_REQUEST = nas("How to request an autism assessment", "advice-and-guidance/diagnosis/before-diagnosis/how-to-request-an-autism-assessment");
const NAS_WAITING = nas("What can I do while waiting for an autism assessment?", "advice-and-guidance/diagnosis/assessment-and-diagnosis/what-can-i-do-while-waiting-for-an-autism-assessme");
const NAS_DURING = nas("What happens during an autism assessment", "advice-and-guidance/diagnosis/assessment-and-diagnosis/what-happens-during-an-autism-assessment");
const NAS_FEEL = nas("How will I feel after receiving an autism diagnosis", "advice-and-guidance/diagnosis/after-diagnosis/how-will-i-feel-after-receiving-an-autism-diagnosi");
const NAS_FORMAL = nas("Formal support following an autism diagnosis", "advice-and-guidance/diagnosis/after-diagnosis/formal-support-following-an-autism-diagnosis");
const NAS_DISCLOSING = nas("Talking about and disclosing your autism diagnosis", "advice-and-guidance/diagnosis/after-diagnosis/talking-about-and-disclosing-your-autism-diagnosis");
const NAS_MASKING = nas("Masking", "advice-and-guidance/behaviour/masking");
const NAS_FATIGUE = nas("Autistic fatigue: a guide for autistic adults", "advice-and-guidance/mental-health/autistic-fatigue/autistic-adults");
const NAS_BURNOUT = nas("Understanding autistic burnout", "learn/knowledge-hub/professional-practice/autistic-burnout");
const NAS_ANXIETY = nas("Anxiety", "advice-and-guidance/mental-health/anxiety");
const NAS_DEPRESSION = nas("Depression", "advice-and-guidance/mental-health/depression");
const NAS_SEEKING = nas("Seeking help with mental health", "advice-and-guidance/mental-health/seeking-help");
const NAS_URGENT = nas("Urgent help", "contact-us/urgent-help");
const NAS_PASSPORT = nas("My health passport", "advice-and-guidance/physical-health/my-health-passport");
const NAS_DENTIST = nas("Going to the dentist", "advice-and-guidance/physical-health/going-to-the-dentist");
const NAS_HEALTHY = nas("Keeping healthy", "advice-and-guidance/physical-health/keeping-healthy");
const NAS_ADJUSTMENTS = nas("What are reasonable adjustments and when can they be requested?", "advice-and-guidance/employment/what-are-reasonable-adjustments-and-when-can-they");
const NAS_WORK_SUPPORT = nas("What support can I get at work as an autistic person?", "advice-and-guidance/employment/what-support-can-i-get-at-work");
const NAS_FRIENDS = nas("Making friends: a guide for autistic adults", "advice-and-guidance/family-life-and-relationships/making-friends/autistic-adults");
const NAS_PARTNERS = nas("Family relationships: a guide for partners of autistic people", "advice-and-guidance/family-life-and-relationships/family-life/partners");
const NAS_LONELINESS = nas("Loneliness", "advice-and-guidance/loneliness");
const NAS_COMMUNITY = nas("The Online Community", "what-we-do/community");
const NAS_BRANCHES = nas("Branches", "what-we-do/branches");
const NAS_DIRECTORY = nas("Autism Services Directory", "autism-services-directory");

const NHSE_ADJUST: LearnSource = { label: "NHS England: Reasonable adjustments", url: "https://www.england.nhs.uk/learning-disabilities/improving-health/reasonable-adjustments/" };
const NHS_FLAG: LearnSource = { label: "NHS England Digital: Reasonable Adjustment Flag", url: "https://digital.nhs.uk/services/patient-flags-service/reasonable-adjustment-flag" };

const GOV_ATW = govuk("Access to Work: get support if you have a disability or health condition", "access-to-work");
const GOV_ADJUSTMENTS = govuk("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");
const GOV_DISABILITY = govuk("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact Samaritans", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.";

export const autismAnswers: LearnArticle[] = [
  {
    id: "aut-what-it-is",
    kicker: "Understanding",
    question: "What is autism, and is it an illness?",
    hook: "Autism is not something that went wrong. It is a different way of experiencing the world, and it lasts a lifetime.",
    short: "Autism is a difference in how your brain develops that affects how you see and experience the world. It is something you are born with: it is not an illness, and there is no treatment or cure, but there are ways of managing it and getting support. More than 1 in 100 people are autistic.",
    sections: [
      {
        heading: "A different way of experiencing the world",
        paragraphs: [
          "Autism is a difference in how your brain develops that affects how you see and experience the world. It is often called a type of neurodivergence, and its medical name is autism spectrum disorder (ASD).",
          "The National Autistic Society describes it as a lifelong neurodivergence and disability. Autistic people are different from each other, but they share differences from non-autistic people in how they think, feel and communicate.",
        ],
      },
      {
        heading: "Not an illness",
        paragraphs: [
          "Autism is something you are born with. It is not an illness and there is no treatment or cure, but there are ways of managing it and getting support.",
          "The NHS says it is not known what causes autism, but it can sometimes affect people in the same family. The National Autistic Society says most people are autistic because of genes they got from their parents. It is not caused by vaccines or medicines.",
        ],
      },
      {
        heading: "How it can show",
        paragraphs: [
          "Being autistic can affect how you communicate with people and understand them, and how people understand you. It can also affect how you think, learn and pay attention, and how you respond to light, sounds, smells, tastes and touch.",
          "For a diagnosis, a specialist team must agree that a person shows the core characteristics of autism. These are lifelong differences in communication, and in behaviours and interests, such as focused interests, repeated movements and a preference for order and routine. Sensory differences are considered part of this.",
        ],
      },
      {
        heading: "A spectrum, not a straight line",
        paragraphs: [
          "Autism is understood as a spectrum, but not as a straight line from more to less autistic. Each autistic person has a unique combination of characteristics, with different strengths and challenges, and these can change over time or in different situations.",
          "Many people talk about a spiky profile: someone could be a leading expert in their field but find it hard to remember everyday tasks. Some autistic adults live independently, and some need support and care throughout their life.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "More than 1 in 100 people are autistic, and there are at least 700,000 autistic adults and children in the UK. People of all ages, genders and ethnicities can be autistic.",
          "Autism is not a learning disability or a mental health condition. But around a third of autistic people also have a learning disability, and autistic people are more likely to have conditions such as epilepsy, anxiety, depression or ADHD.",
        ],
      },
    ],
    helps: [
      "Learn about autism from good quality sources, such as autistic people, the National Autistic Society or the NHS.",
      "Be wary of any source that talks about how to cure or treat autism.",
      "Remember that every autistic person is different, so try not to make assumptions about anyone's skills or support needs.",
      "See a GP if you think you might be autistic.",
      CRISIS,
    ],
    tryThisWeek: [
      "Read about autism from a trusted source.",
      "Steer clear of sources promising a cure.",
      "See a GP if you think you are autistic.",
    ],
    ask: "Could I be autistic, and how would I find out?",
    interactive: {
      kind: "flip-cards",
      title: "The core characteristics, card by card",
      intro: "Turn each card to see what each characteristic can look like. Every autistic person has their own mix.",
      cards: [
        { id: "communication", front: "Communication", when: "A core characteristic", back: "Different styles and preferences in using words, tone of voice, gestures and facial expressions." },
        { id: "interests", front: "Focused interests", when: "Behaviours and interests", back: "A very strong passion for a hobby, a series or an academic subject." },
        { id: "stimming", front: "Repeated movements (stimming)", when: "Behaviours and interests", back: "Such as hand flapping, hair twirling or listening to something on repeat, often to calm down or express joy." },
        { id: "routine", front: "Order and routine", when: "Behaviours and interests", back: "Wanting to know what will happen in detail, rules that are the same for everyone, or the same routine each day." },
        { id: "sensory", front: "Sensory differences", when: "Part of behaviours and interests", back: "Being much more or less sensitive than others to sight, sound, touch, taste and smell, balance, hunger or temperature." },
      ],
    },
    sources: [NHS_WHAT, NAS_WHAT, NAS_NEEDS, NHS_ADULT, NAS_SIGNS, NAS_DECIDING, NHS_SIGNS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is autism an illness that needs a cure?",
      options: [{ text: "No, it is a lifelong difference", right: true }, { text: "Yes, it can be cured with treatment" }, { text: "Yes, it is caused by vaccines" }],
      why: "Autism is something you are born with. It is not an illness and there is no treatment or cure, but there are ways of managing it and getting support.",
    },
  },
  {
    id: "aut-signs",
    kicker: "Signs",
    question: "What are the signs of autism in an adult?",
    hook: "Many autistic adults spent years feeling different without knowing why. The signs were often there all along, just hidden.",
    short: "Signs in adults are often like those in children, but many adults have learned to hide them, which is called masking. You may find it hard to talk to people, take things literally, need fixed routines, be very focused on interests, or be very sensitive to light, sound or textures. If you think you might be autistic, see a GP.",
    sections: [
      {
        heading: "Signs can be hidden",
        paragraphs: [
          "If you are an autistic adult, signs may be similar to the signs of autism in children. But you may have learned to adapt so that the signs are not always noticeable. This is called masking, and it can make everyday activities and social interactions feel exhausting and stressful.",
          "For many autistic adults, signs were missed in childhood, and people diagnosed in adulthood may mask more. There is no single way to be autistic, and not every autistic person will show every sign.",
        ],
      },
      {
        heading: "Talking and getting on with people",
        paragraphs: [
          "You may find it hard to talk to other people, and spend more time alone than with others. You may find it hard to understand people's facial expressions, gestures or tone of voice, and take things literally.",
          "Some autistic people are more direct and honest than others expect, and find social rules confusing. Many have a clear idea of right and wrong and a strong sense of justice, but struggle with grey areas.",
        ],
      },
      {
        heading: "Routines, interests and senses",
        paragraphs: [
          "You may have fixed ways of doing things, and get distressed when there are changes to your routine. You may be very focused on specialist interests.",
          "You may do repetitive movements, known as stimming, such as rocking, flapping your hands or flicking your fingers. You may be very sensitive, or not sensitive at all, to light, sounds, smells, tastes or textures.",
        ],
      },
      {
        heading: "Feeling different",
        paragraphs: [
          "Many autistic people say they have always felt different from people their age. They may have to put effort into things others seem to do automatically, such as making eye contact, or find interviews and job applications harder than most.",
          "If you are autistic you may also have problems keeping a job, difficulty making friends and having romantic relationships, or problems with your mental health. Some adults first recognise themselves in books or videos about autism.",
        ],
      },
      {
        heading: "Signs in women",
        paragraphs: [
          "It can be harder to see signs of autism in women, due to masking. Autistic women may be more likely to copy how other people behave, appear to cope well with social situations, and hide their feelings.",
          "Many women have been missed or misdiagnosed because of outdated stereotypes about autism. Their interests and repetitive behaviours may look like those of other women, and go unnoticed despite their greater intensity. Autistic men can also mask.",
        ],
      },
    ],
    helps: [
      "Make a list of the signs you have noticed, to show a GP or to prepare for an assessment.",
      "Think back to your childhood too, as signs may have been missed then.",
      "Talk to family, friends, a partner or colleagues about what you have noticed.",
      "See a GP if you think you might be autistic; they may refer you for an assessment.",
      CRISIS,
    ],
    tryThisWeek: [
      "List the signs you have noticed.",
      "Think back to your childhood.",
      "Book a GP appointment.",
    ],
    ask: "These signs sound like me. Could you refer me for an autism assessment?",
    interactive: {
      kind: "signs",
      title: "Signs you may notice in yourself",
      intro: "Tick any that sound like you. Not every autistic person has every sign, and only an assessment can tell you for sure.",
      signs: ["Finding it hard to talk to people", "Spending more time alone", "Hard to read faces or tone of voice", "Taking things literally", "Fixed ways of doing things", "Upset by changes to routine", "Rocking or flapping hands (stimming)", "Very focused on special interests", "Very sensitive to light or sound", "Copying how other people behave"],
      after: "Showing a list of signs to a GP can help when you ask about a referral for an autism assessment.",
      copyHeading: "Signs I have noticed",
    },
    sources: [NHS_SIGNS, NAS_SIGNS, NAS_WOMEN, NAS_MASKING, NAS_COMMUNICATION, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Why can autism be hard to spot in adults?",
      options: [{ text: "Many have learned to mask the signs", right: true }, { text: "Autism only starts in adulthood" }, { text: "Adults never show any signs" }],
      why: "You may have learned to adapt so that the signs are not always noticeable. This is called masking.",
    },
  },
  {
    id: "aut-diagnosis",
    kicker: "Assessment",
    question: "How do I get an autism assessment as an adult?",
    hook: "Asking a GP about autism can feel daunting. Knowing what happens at each step makes the path clearer.",
    short: "Speak to a GP, who can often refer you to a local autism team. It can take a few months or longer to be seen, and in England you can use Right to Choose to pick the NHS service. The assessment team will ask about your life now and as a child, then give you a report on what they found.",
    sections: [
      {
        heading: "Start with a GP",
        paragraphs: [
          "Speak to a GP to find out how to get an autism assessment in your area. GPs can often refer adults to a local autism team. You may also be referred when you are getting help for another condition, if a mental health professional notices signs of autism.",
          "A diagnosis can only be made by a specialist autism diagnostic service. Very few services let you refer yourself, so most people need a referral from a GP or another professional.",
        ],
      },
      {
        heading: "Getting ready for the GP",
        paragraphs: [
          "If you feel apprehensive, it can help to take a partner or friend with you, and to talk only about autism in that appointment. Take notes or a list of the signs you have noticed, and prepare some questions.",
          "The National Autistic Society has a free list of questions you could ask at your GP appointment. If a GP does not offer a referral, you can ask for a second opinion from a different doctor.",
        ],
      },
      {
        heading: "Waiting, and your choices",
        paragraphs: [
          "If your referral is accepted, it can take a few months or longer to get an assessment. NICE guidelines say waits in England and Northern Ireland should be no longer than 3 months, but many people wait much longer.",
          "In England, you can choose which NHS service does the assessment, and you may find a clinic with shorter waiting times. This is called Right to Choose. A private assessment does not need a GP referral, but it can be expensive, so check first that it will be accepted where you live.",
          "A formal diagnosis is often not needed to get support. A GP can tell you what support is available while you wait.",
        ],
      },
      {
        heading: "What happens in the assessment",
        paragraphs: [
          "You may have one or more appointments with a team of healthcare professionals. They may ask you to fill in questionnaires, and ask how you behave with other people, about your early life, and about your life at home, work or college.",
          "They may speak to someone who knew you as a child, and someone who knows you now, such as a partner. There are no correct or incorrect answers, and you can ask for reasonable adjustments, such as changes for your communication or sensory needs.",
        ],
      },
      {
        heading: "Your results",
        paragraphs: [
          "Afterwards you will be given a report saying whether you are autistic, what you are good at, what you might need help with, and whether they found any other conditions. You may be offered a follow-up appointment and a care plan.",
          "If you do not agree with the result, ask the team why they made their decision. You can ask the GP or assessment team to refer you to another team for a second opinion.",
        ],
      },
    ],
    helps: [
      "Speak to a GP to find out how to get an autism assessment in your area.",
      "Take a list of the signs you have noticed, and someone to support you, to the appointment.",
      "Ask what support is available while you wait for your assessment.",
      "In England, ask about Right to Choose, which may mean a shorter wait.",
      "Treat online screening questionnaires with care: they are not a diagnosis and may not be accurate.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment about autism.",
      "Write your list of signs.",
      "Ask about Right to Choose.",
    ],
    ask: "Can you refer me for an autism assessment, and which services can I choose from?",
    interactive: {
      kind: "timeline",
      title: "From GP to report",
      steps: [
        { id: "gp", when: "Step 1", title: "Talk to a GP", points: ["Take a list of signs and someone to support you.", "Ask how assessments work in your area."] },
        { id: "referral", when: "Step 2", title: "Referral", points: ["The GP refers you to a specialist autism team.", "In England, you can use Right to Choose."] },
        { id: "wait", when: "Step 3", title: "Waiting", points: ["It can take a few months or longer.", "Ask what support is available while you wait."] },
        { id: "assessment", when: "Step 4", title: "The assessment", points: ["Questionnaires and questions about your life.", "You can ask for reasonable adjustments."] },
        { id: "report", when: "Step 5", title: "Report and next steps", points: ["A report on your strengths and needs.", "If you disagree, you can ask for a second opinion."] },
      ],
    },
    sources: [NHS_ASSESS, NAS_REQUEST, NAS_WAITING, NAS_DURING, NAS_DECIDING, NHS_SIGNS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "In England, what lets you choose which NHS service does your assessment?",
      options: [{ text: "Right to Choose", right: true }, { text: "A screening questionnaire" }, { text: "A care plan" }],
      why: "In England, you can choose which NHS service does the assessment and you may be able to find a clinic with shorter waiting times. This is called Right to Choose.",
    },
  },
  {
    id: "aut-masking",
    kicker: "Masking",
    question: "What is masking, and why does it leave me so exhausted?",
    hook: "Fitting in can take everything you have. Masking is a way of coping, but its cost can build until burnout.",
    short: "Masking is when an autistic person, often without realising, hides their autistic traits to appear non-autistic and fit in. It takes a lot of effort and can lead to exhaustion, autistic burnout and poor mental health. Managing your energy, time to recover and time without masking can all help.",
    sections: [
      {
        heading: "What masking is",
        paragraphs: [
          "Masking is a strategy some autistic people use, consciously or unconsciously, to appear non-autistic, so they can blend in and be more accepted. It can happen at work or school, and at home or with friends.",
          "The NHS says masking can make everyday activities and social interactions feel exhausting and stressful. People who discover they are autistic later in life have often masked for many years without knowing.",
        ],
      },
      {
        heading: "What it can look like",
        paragraphs: [
          "Masking can include forcing yourself to make eye contact, copying other people's facial expressions, and planning in advance what you want to say, known as scripting.",
          "It can also mean hiding stimming or switching to less noticeable stims, and not reacting to sensory discomfort, such as not flinching when someone shakes your hand.",
        ],
      },
      {
        heading: "Why people mask, and what it costs",
        paragraphs: [
          "Autistic people mask to be accepted, to avoid stigma, bullying and discrimination, to keep jobs, and to make and keep friends. For some it has simply become routine.",
          "But masking takes a lot of effort. It can lead to mental and physical exhaustion and autistic burnout, mental health difficulties, a loss of sense of self and low self-esteem. Masking can also increase anxiety.",
        ],
      },
      {
        heading: "Autistic fatigue and burnout",
        paragraphs: [
          "Social situations, sensory overload, masking, holding back stimming and a sense of not meeting other people's expectations can all lead to exhaustion, known as autistic fatigue. Changes such as a new job can add to it.",
          "Over time this can lead to autistic burnout. Researchers describe it as long-term exhaustion, typically lasting 3 months or more, with a loss of skills and less tolerance of sensory input. Unlike work burnout, it affects every part of life.",
          "Autistic fatigue can bring more meltdowns and sensory sensitivity, physical pain and headaches, and shutting down, including losing speech.",
        ],
      },
      {
        heading: "Protecting your energy",
        paragraphs: [
          "Energy accounting means setting a limit on how much energy you have in a day or week, and working out which activities drain you and which recharge you. Build in time to relax and recover, and take time off when you need it.",
          "Make time in your day to stim somewhere you feel comfortable, and to enjoy interests that re-energise you. Being around people who accept you without masking, especially other autistic people, can help too.",
          "The NHS says autistic people may need support to manage autistic fatigue and burnout.",
        ],
      },
    ],
    helps: [
      "Allow yourself time to recover after social interactions.",
      "Try energy accounting: work out what drains your energy and what recharges it.",
      "Make time to stim, somewhere you feel comfortable.",
      "If work is becoming unmanageable, tell your manager, and take regular breaks and annual leave.",
      "Spend time with other autistic people, online or in person.",
      CRISIS,
    ],
    tryThisWeek: [
      "Plan recovery time after socialising.",
      "Note what drains and recharges you.",
      "Make time to stim at home.",
    ],
    ask: "I think I am in autistic burnout. What support could help me recover?",
    interactive: {
      kind: "risk-check",
      title: "What drains your energy",
      intro: "Tick any that wear you down. Each one can add to autistic fatigue, and each can be eased.",
      items: [
        { id: "social", label: "Social situations", note: "Allow time to recover after social interactions, and build time to relax into your day or week.", changeable: true },
        { id: "sensory", label: "Sensory overload", note: "Sensory overload is one cause of autistic fatigue. Time off from high-stress activities helps manage stress levels.", changeable: true },
        { id: "masking", label: "Masking all day", note: "Masking takes exhausting effort. Time with people who accept you, without needing to mask, can help.", changeable: true },
        { id: "stimming", label: "Holding back stimming", note: "Suppressing stimming can add to fatigue. Make time for it somewhere you feel comfortable.", changeable: true },
        { id: "expectations", label: "Pressure to meet expectations", note: "If demands feel unrealistic, it can help to discuss this and get support from the people around you.", changeable: true },
        { id: "change", label: "Big changes", note: "A change such as a new job can increase anxiety and add to fatigue and burnout.", changeable: true },
      ],
    },
    sources: [NAS_MASKING, NHS_SIGNS, NAS_FATIGUE, NAS_BURNOUT, NHS_ADULT, NAS_ANXIETY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is energy accounting?",
      options: [{ text: "Setting limits on your energy and balancing activities", right: true }, { text: "Tracking the hours you work each week" }, { text: "Saving up money for time off" }],
      why: "Energy accounting is a system used to set manageable limits on your energy levels so you do not deplete yourself to the point of burnout.",
    },
  },
  {
    id: "aut-after-diagnosis",
    kicker: "After diagnosis",
    question: "I have just been diagnosed. What happens now?",
    hook: "A diagnosis can feel like the end of a long journey. For many people, it is also the start of understanding themselves.",
    short: "People feel many different things after a diagnosis, and there is no correct way to feel. You may be offered a follow-up appointment and a support plan, and you can ask for help such as a social care needs assessment or adjustments at work. Meeting other autistic people helps many people make sense of it all.",
    sections: [
      {
        heading: "Whatever you feel is okay",
        paragraphs: [
          "Many autistic people describe their diagnosis as a significant life event, and some call it life-changing. Reactions can be positive and negative, and they often change over time.",
          "You may feel relief at having an answer and anger that it did not come sooner, or hope alongside worry about getting support. There is no single correct way to feel.",
        ],
      },
      {
        heading: "A plan for support",
        paragraphs: [
          "After a diagnosis, you may be offered a follow-up appointment with the assessment team, and a care plan or information to support you.",
          "NICE guidelines in England, Wales and Northern Ireland say you should have a named key worker and a personalised plan, based on your needs. A diagnosis does not automatically entitle you to formal support, but you can often ask for it directly.",
        ],
      },
      {
        heading: "Help you can ask for",
        paragraphs: [
          "You can ask your council for a social care needs assessment if you need support with daily life. If you cannot work, you may be able to get financial support, such as Universal Credit or Personal Independence Payment.",
          "At work, your employer must make reasonable adjustments if you need them, and you can apply to Access to Work for extra support.",
        ],
      },
      {
        heading: "Getting to know yourself",
        paragraphs: [
          "A diagnosis can be the start of understanding your strengths and needs. Strategies autistic people find helpful include taking breaks from social events, setting boundaries, allowing yourself to stim, and scheduling rest between activities.",
          "Many late-diagnosed people look back on their life in a new light. This can lead to self-acceptance, self-compassion and being kinder to yourself, though for some it takes time and reflection.",
        ],
      },
      {
        heading: "Telling people, and finding others",
        paragraphs: [
          "Whether you tell people is your decision, and you can tell some people and not others. Telling people may bring understanding and support, but some people meet disbelief, so it can help to think it through first.",
          "Meeting other autistic people can help. The National Autistic Society has volunteer-led branches across the UK and online, and many people find online forums and local groups helpful.",
        ],
      },
    ],
    helps: [
      "Ask your key worker, GP or assessment team about a personalised support plan.",
      "Ask your council for a social care needs assessment if you need help with daily life.",
      "Give yourself time: there is no single correct way to feel after a diagnosis.",
      "Join a local or online support group to meet other autistic people.",
      "Be wary of any source that talks about how to cure or treat autism.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask about a support plan.",
      "Schedule rest between activities.",
      "Find a local or online group.",
    ],
    ask: "Who is my key worker, and can we make a support plan together?",
    interactive: {
      kind: "scenarios",
      title: "The weeks after a diagnosis",
      scenarios: [
        {
          id: "plan",
          situation: "Weeks after your diagnosis, nobody has mentioned a support plan.",
          options: [{ text: "Ask your GP or key worker for one", best: true }, { text: "Assume there is no support" }],
          why: "Even if you are not offered support after a diagnosis, formal support may still be available, and it can often be requested directly.",
        },
        {
          id: "anger",
          situation: "You feel angry that your diagnosis came so late.",
          options: [{ text: "Accept it as a common reaction", best: true }, { text: "Insist you should only feel relief" }],
          why: "People can feel relief that they have an answer and anger that it did not come sooner. There is no single correct way to feel.",
        },
        {
          id: "tell",
          situation: "You are unsure whether to tell your colleagues.",
          options: [{ text: "Weigh up the pros and cons first", best: true }, { text: "Feel you have to tell everyone" }],
          why: "Choosing whether to tell people is a personal decision. You can tell some people and not others.",
        },
        {
          id: "cure",
          situation: "A website offers a programme to cure autism.",
          options: [{ text: "Treat it as unreliable", best: true }, { text: "Sign up straight away" }],
          why: "Be particularly wary of any source that talks about how to cure or treat autism. That is not possible, so the source is likely to be unreliable.",
        },
      ],
    },
    sources: [NAS_FEEL, NAS_FORMAL, NHS_ASSESS, NHS_ADULT, NAS_DISCLOSING, NAS_BRANCHES, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Does a diagnosis automatically give you formal support?",
      options: [{ text: "No, support is based on an assessment of needs", right: true }, { text: "Yes, straight away" }, { text: "Only if you pay privately" }],
      why: "Having an autism diagnosis does not mean you are automatically entitled to formal support. Support is generally based on an assessment of your specific needs.",
    },
  },
  {
    id: "aut-sensory",
    kicker: "Sensory needs",
    question: "Why do noise, light or touch overwhelm me?",
    hook: "A hum others never notice, a label in your shirt, a bright supermarket: sensory input can be painful. There are ways to ease it.",
    short: "Many autistic people are much more, or much less, sensitive to sights, sounds, smells, tastes and touch. Too much input can lead to sensory overload, when your brain cannot take in any more. A sensory diary, tools such as ear defenders, a quiet space and adjustments at work can all help.",
    sections: [
      {
        heading: "Senses processed differently",
        paragraphs: [
          "Sensory processing is how your brain makes sense of information from your senses. Autistic people can be much more or much less sensitive than non-autistic people to sight, sound, touch, taste and smell, and to balance, movement and inner signals like hunger and temperature.",
          "The NHS says you may be very sensitive, or not sensitive at all, to light, sounds, smells, tastes or textures. Research suggests between 53 and 95 in every 100 autistic people have sensory processing differences.",
        ],
      },
      {
        heading: "Too much, or too little",
        paragraphs: [
          "Being hyper-sensitive means sounds may seem much louder, and too much input can be distressing. Being hypo-sensitive means you may not notice some input, and seek out more, such as loud music.",
          "Many people have a mix of both. Tiredness, stress, not eating properly or masking for too long can all make sensory triggers harder to cope with.",
        ],
      },
      {
        heading: "Common triggers",
        paragraphs: [
          "Common triggers include bright or fluorescent lighting, background noise, unexpected noises, crowded places, unexpected touch, some fabric textures, and perfumes or cooking smells.",
          "Places like shopping centres can be hard because they are crowded, bright, loud and full of smells. Sensory differences are not the same as disliking something: input others barely notice can cause discomfort and even pain.",
        ],
      },
      {
        heading: "Sensory overload",
        paragraphs: [
          "Sensory overload is when you have taken in too much sensory information and cannot process any more. Signs can include not speaking, finding it hard to focus, stimming, pacing or rocking, and strong physical and emotional responses.",
          "If someone is overloaded, it helps to remove what is triggering it or move somewhere quieter, keep talking to a minimum, and give them time and space to recover. If they are stimming to self-regulate, do not try to stop them unless they are hurting themselves.",
        ],
      },
      {
        heading: "What can help",
        paragraphs: [
          "A sensory diary can help you spot your triggers, your times of high and low energy, and what helps you recover. Some people keep a sensory kit of the items they find helpful.",
          "Autistic people have found ear defenders or noise-cancelling headphones, sunglasses or tinted glasses, and fidget toys helpful, though using headphones a lot may increase sensitivity over time. At work, you can ask for adjustments such as a fixed desk away from busy areas.",
          "If sensory differences are constant and affect your everyday life, an occupational therapist can assess them and suggest support.",
        ],
      },
    ],
    helps: [
      "Keep a sensory diary to find patterns in your triggers and what helps.",
      "Try ear defenders or noise-cancelling headphones, and sunglasses or tinted glasses.",
      "Plan a quiet space you can go to, away from sensory triggers.",
      "Ask your employer about sensory adjustments, such as lighting, a fixed desk or noise-cancelling headphones.",
      "Ask about an occupational therapist assessment if sensory differences affect your everyday life.",
      CRISIS,
    ],
    tryThisWeek: [
      "Start a sensory diary.",
      "Put together a small sensory kit.",
      "Find a quiet space to retreat to.",
    ],
    ask: "Could I be referred to an occupational therapist for a sensory assessment?",
    interactive: {
      kind: "flip-cards",
      title: "Sensory tools, card by card",
      intro: "Turn each card to see when each tool is used and what to know. Everyone's sensory profile is different.",
      cards: [
        { id: "headphones", front: "Ear defenders or headphones", when: "For noisy places", back: "Can block out sound. Using them a lot may increase sensitivity over time." },
        { id: "glasses", front: "Sunglasses or tinted glasses", when: "For bright or harsh light", back: "Can reduce sensory input from lighting, visual stress and eye strain." },
        { id: "fidget", front: "Fidget toys", when: "To self-soothe", back: "Sensory or fidget toys are among the items autistic people have found helpful." },
        { id: "weighted", front: "Weighted blanket", when: "For deep pressure", back: "Widely available, but an occupational therapist can assess whether it suits you." },
        { id: "diary", front: "Sensory diary", when: "To spot patterns", back: "Records triggers, energy levels, what helps during overload and what helps you recover." },
        { id: "space", front: "A quiet space", when: "During overload", back: "Somewhere away from triggers, with enough time and space to recover." },
      ],
    },
    sources: [NAS_SENSORY, NHS_SIGNS, NAS_WHAT, NAS_WORK_SUPPORT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does being hypo-sensitive mean?",
      options: [{ text: "Being much less sensitive than other people", right: true }, { text: "Being much more sensitive than other people" }, { text: "Having a problem with your eyes or ears" }],
      why: "Hypo-sensitivity means you are much less sensitive than other people. You may not notice sensory inputs, and may seek out more intense sensory experiences.",
    },
  },
  {
    id: "aut-mental-health",
    kicker: "Mental health",
    question: "Anxiety, depression and therapy: what helps autistic adults?",
    hook: "Anxiety and low mood are common in autistic people, but they are not inevitable, and support can be adapted to fit you.",
    short: "Autistic people are more likely to experience anxiety and depression, often because of stressful social and sensory environments and being misunderstood. Talking therapies such as CBT can help if they are adapted, and you can ask for changes that make appointments easier. Depression is treatable, and it is important to seek help early.",
    sections: [
      {
        heading: "More common, and treatable",
        paragraphs: [
          "Autistic people are more likely to have some mental health conditions, such as anxiety and depression. Research suggests up to half of autistic people experience high levels of anxiety on a regular basis, and depression affects up to half at some point in their life.",
          "Depression is treatable, and with the right support you can feel better. It is important to seek help as early as possible.",
        ],
      },
      {
        heading: "Why it can happen",
        paragraphs: [
          "Difficult social situations and sensory environments can increase stress and anxiety. So can unexpected changes to routine, and finding it hard to identify and understand your feelings.",
          "Being misunderstood or not accepted by non-autistic people, and masking to fit in, can lead to low self-esteem, isolation and loneliness. A lack of the right support can add to this.",
        ],
      },
      {
        heading: "Signs to look out for",
        paragraphs: [
          "Anxiety can feel like restlessness or worry, a churning stomach, a fast heartbeat, faster breathing and problems sleeping. Very high anxiety can lead to exhaustion, meltdowns and autistic burnout.",
          "Autistic people usually have the same signs of depression as anyone else, such as continuous low mood and a lack of energy. They may also withdraw from others more, have more repetitive behaviours or more frequent meltdowns.",
        ],
      },
      {
        heading: "Getting help that fits",
        paragraphs: [
          "Start by talking to someone you trust, and speak to a GP if you need more support. You can also refer yourself to NHS talking therapies if you are 18 or over, or 16 or over in some areas, and registered with a GP.",
          "Therapies such as cognitive behavioural therapy (CBT) can be effective for some autistic people if adapted appropriately. Before you begin, ask the therapist if they have experience of working with autistic people. In England, statutory guidance says your support should be adapted to your needs.",
          "You can ask for changes that make appointments easier, such as booking online, bringing someone with you, more time to answer questions or questions in writing, and dimmer lights.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "You may be offered medicines such as antidepressants. They are generally considered useful and safe, but there is little research on them for autistic people, and autistic people may be more likely to have side effects such as drowsiness or irritability.",
          "Antidepressants should be carefully considered and closely monitored by a medical professional. Any medicine of this kind should be prescribed appropriately and regularly reviewed.",
        ],
      },
    ],
    helps: [
      "Talk to someone you trust about how you feel.",
      "Speak to a GP, or refer yourself to NHS talking therapies.",
      "Ask any therapist whether they have experience of working with autistic people.",
      "Keep a diary to spot when you feel anxious and what makes it worse.",
      "Use sensory tools, stimming and calming activities if they help you.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell someone you trust how you feel.",
      "Find your local talking therapies service.",
      "Keep an anxiety diary.",
    ],
    ask: "Can I be referred for talking therapy that is adapted for autistic people?",
    interactive: {
      kind: "scenarios",
      title: "Getting support that works for you",
      scenarios: [
        {
          id: "therapy",
          situation: "You are offered CBT but worry it will not suit you.",
          options: [{ text: "Ask if the therapist knows autism", best: true }, { text: "Turn it down without asking" }],
          why: "CBT can be effective for some autistic people if adapted. Ask the therapist if they have experience of working with autistic people.",
        },
        {
          id: "appointments",
          situation: "Phone calls and bright waiting rooms make GP visits hard.",
          options: [{ text: "Ask for adjustments, like online booking", best: true }, { text: "Avoid the GP altogether" }],
          why: "You can ask for changes such as booking online or by email, more time to answer questions, and dimmed lights.",
        },
        {
          id: "triggers",
          situation: "Your anxiety spikes and you cannot tell why.",
          options: [{ text: "Keep a diary to spot triggers", best: true }, { text: "Ignore it and hope it passes" }],
          why: "Keeping a diary can help identify when you are anxious, and what might make it worse.",
        },
        {
          id: "side-effects",
          situation: "A new antidepressant is making you drowsy.",
          options: [{ text: "Tell the professional monitoring it", best: true }, { text: "Keep quiet about it" }],
          why: "Autistic people may be more likely to have side effects such as drowsiness. Antidepressants should be closely monitored by a medical professional.",
        },
      ],
    },
    sources: [NAS_ANXIETY, NAS_DEPRESSION, NHS_WHAT, NAS_SEEKING, NHS_TT, NHS_FIND_TT, NHS_URGENT, NHS_SUICIDAL, SAMARITANS],
    quiz: {
      question: "Can talking therapies like CBT help autistic people?",
      options: [{ text: "Yes, if adapted appropriately", right: true }, { text: "No, never" }, { text: "Only if nothing is changed" }],
      why: "There are many types of therapy, including CBT, that can be effective for some autistic people if adapted appropriately.",
    },
  },
  {
    id: "aut-healthcare",
    kicker: "Healthcare",
    question: "How can I make GP and hospital visits work for me?",
    hook: "Bright lights, waiting rooms and rushed questions can make appointments hard. You have a right to changes that help.",
    short: "Health services must make reasonable adjustments so autistic people can use them as easily as anyone else. You can ask for things like a longer appointment, a quiet place to wait, written questions or someone with you. In England, your adjustments can be recorded on a national flag, and the National Autistic Society's My Health Passport helps you explain your needs in hospital.",
    sections: [
      {
        heading: "Why appointments can be hard",
        paragraphs: [
          "The NHS says autistic people may need support to cope with going to health appointments, such as with a doctor, dentist or optician.",
          "At the dentist, for example, you lie in a chair with a large light shining in your face, with cold equipment in your mouth, noises from the drill and the taste of mouthwash. For some people, waiting in a surgery is hard too.",
        ],
      },
      {
        heading: "Your right to adjustments",
        paragraphs: [
          "Under the Equality Act 2010, health services such as hospitals and GP surgeries must take steps to remove the barriers people face because of disability. The NHS must make it as easy for disabled people to use its services as it is for anyone else.",
          "These changes are called reasonable adjustments, and they are often quite small. They can include easy read letters, a priority appointment if waiting is hard, a longer appointment, or a quiet space to wait.",
        ],
      },
      {
        heading: "Adjustments you can ask for",
        paragraphs: [
          "The National Autistic Society suggests asking your GP or other health professionals for changes such as booking appointments online or by email, and information on what to expect.",
          "You could also ask to bring a friend, relative or carer, for more time to answer questions or questions in writing, and for the lights to be dimmed.",
        ],
      },
      {
        heading: "Making your needs known",
        paragraphs: [
          "In England, the Reasonable Adjustment Flag is a national record that shows a person needs adjustments. Staff can see it when you are referred or arrive for care, and details are shared with your consent.",
          "My Health Passport, from the National Autistic Society, helps you tell doctors and nurses about your needs. Take it whenever you go to hospital, and if you stay in, ask for it to be kept with your notes.",
        ],
      },
      {
        heading: "Looking after your health",
        paragraphs: [
          "You may need support to eat healthily, stay active and sleep well, and to manage other conditions. Sensory differences can make washing feel uncomfortable, and unscented products or a bath instead of a shower may help.",
          "Not taking care of yourself can sometimes be a sign of depression or another mental health difficulty. If that could be the case, it may help to seek professional help.",
        ],
      },
    ],
    helps: [
      "Ask your GP surgery to record the reasonable adjustments you need.",
      "Ask for a longer appointment, or a quiet space to wait.",
      "Bring a friend, relative or carer with you if that helps.",
      "Fill in My Health Passport and take it with you to hospital.",
      "Ask for written information or more time to answer questions.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask the surgery to note your adjustments.",
      "Fill in My Health Passport.",
      "Ask for a longer appointment.",
    ],
    ask: "Can you note my sensory and communication needs on my record as reasonable adjustments?",
    interactive: {
      kind: "signs",
      title: "Adjustments that could help you",
      intro: "Tick the changes that would make appointments easier. Copy the list to share with your GP surgery or hospital.",
      signs: ["Booking online or by email", "Information on what to expect", "A friend or carer with me", "More time to answer questions", "Questions in writing", "Dimmed lights", "A longer appointment", "A quiet space to wait", "Easy read letters", "A priority appointment"],
      after: "These are reasonable adjustments. Ask for them to be recorded so staff know about them each time you are seen.",
      copyHeading: "Adjustments I would like",
    },
    sources: [NHS_ADULT, NHSE_ADJUST, NAS_SEEKING, NHS_FLAG, NAS_PASSPORT, NAS_DENTIST, NAS_HEALTHY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is the Reasonable Adjustment Flag?",
      options: [{ text: "A national record of the adjustments you need", right: true }, { text: "A badge you wear in hospital" }, { text: "A type of appointment letter" }],
      why: "The Reasonable Adjustment Flag is a national record that shows a person needs accommodations, and may include details of the adjustments they need.",
    },
  },
  {
    id: "aut-work",
    kicker: "Work",
    question: "What are my rights at work, and what adjustments can I ask for?",
    hook: "A quieter desk, written instructions or flexible hours can change a working day. The law says your employer must consider them.",
    short: "Autism is considered a disability under the Equality Act 2010, so employers must make reasonable adjustments if you need them, such as a quieter area or more home working. The duty applies once your employer knows, or could be expected to know. Access to Work can fund extra support beyond what your employer must provide.",
    sections: [
      {
        heading: "Your rights at work",
        paragraphs: [
          "Autism is considered a disability under the Equality Act 2010, and your employer must make reasonable adjustments if you need them. Autistic people are protected whether or not they see themselves as disabled.",
          "Under the Act, you are disabled if you have an impairment with a substantial and long-term negative effect on your normal daily activities. Long-term means 12 months or more. You may meet this definition even without a formal autism diagnosis.",
        ],
      },
      {
        heading: "What adjustments can look like",
        paragraphs: [
          "Reasonable adjustments are changes so you are not at a substantial disadvantage. The NHS gives examples such as working in a quieter area, working more from home, and choosing how you communicate with colleagues.",
          "Autistic people have also found written instructions, large tasks broken into smaller parts, a fixed desk instead of hot-desking, flexible hours and notice of changes helpful.",
          "Adjustments apply at every stage, from recruitment and interviews to leaving a job. Many cost little or nothing, such as clear instructions or making social events optional.",
        ],
      },
      {
        heading: "Telling your employer",
        paragraphs: [
          "Employers only have to make adjustments if they know, or could reasonably be expected to know, that you meet the legal definition of disability. So you may want to think about telling them you are autistic.",
          "It is your choice. Some managers will make changes simply because you have asked and believe they would help.",
          "When you ask, explain the issue you face, how it puts you at a disadvantage, and the adjustment that would help.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work. You can apply for a grant for practical support, such as a support worker or job coach, help with managing your mental health at work, and communication support at job interviews.",
          "It will not pay for reasonable adjustments your employer must make. A grant will not affect other benefits and you do not pay it back. You need to be 16 or over and in paid work, or about to start.",
        ],
      },
      {
        heading: "If things go wrong",
        paragraphs: [
          "If adjustments are not put in place, you can raise it informally with your manager or HR, then more formally through a grievance if needed.",
          "You can get advice on reasonable adjustments from the Disability Employment Adviser at your local Jobcentre Plus.",
        ],
      },
    ],
    helps: [
      "Think about what you find hard at work, and which adjustments would help.",
      "Ask your manager for reasonable adjustments, explaining the issue and how a change would help.",
      "Apply to Access to Work for support beyond what your employer must provide.",
      "Get advice from the Disability Employment Adviser at your local Jobcentre Plus.",
      "If adjustments are refused, raise it informally first, then through a grievance.",
      CRISIS,
    ],
    tryThisWeek: [
      "List what you find hard at work.",
      "Ask your manager about one adjustment.",
      "Check whether Access to Work could help.",
    ],
    ask: "Could you write down how autism affects me at work, to support a request for adjustments?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments at work",
      scenarios: [
        {
          id: "noise",
          situation: "The open-plan office leaves you overwhelmed by lunchtime.",
          options: [{ text: "Ask for a quieter area or home working", best: true }, { text: "Push through every day" }],
          why: "Reasonable adjustments could include working in a quieter area of the office or working more from home.",
        },
        {
          id: "interview",
          situation: "You have a job interview and worry about how it will go.",
          options: [{ text: "Ask for adjustments for the interview", best: true }, { text: "Say nothing and hope for the best" }],
          why: "Your right to reasonable adjustments applies in the recruitment phase too, including when you are being interviewed.",
        },
        {
          id: "telling",
          situation: "You want adjustments but are unsure about saying you are autistic.",
          options: [{ text: "Weigh it up; it is your choice", best: true }, { text: "Decide you cannot ask at all" }],
          why: "Employers only have a legal duty if they know. But some managers will make changes simply because you have asked.",
        },
        {
          id: "cost",
          situation: "Your employer says noise-cancelling headphones cost too much.",
          options: [{ text: "Mention Access to Work", best: true }, { text: "Drop the request" }],
          why: "Employers must consider Access to Work funding before saying an adjustment costs too much. It can pay for equipment such as noise-cancelling headphones.",
        },
      ],
    },
    sources: [NHS_ADULT, NAS_ADJUSTMENTS, NAS_WORK_SUPPORT, GOV_ATW, GOV_ADJUSTMENTS, GOV_DISABILITY, NAS_FORMAL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Does Access to Work pay for adjustments your employer must make?",
      options: [{ text: "No, those are the employer's duty", right: true }, { text: "Yes, always" }, { text: "Only for large employers" }],
      why: "Access to Work will not pay for reasonable adjustments. These are the changes your employer must legally make to support you to do your job.",
    },
  },
  {
    id: "aut-relationships",
    kicker: "Relationships",
    question: "How can I make friendships and relationships work for me?",
    hook: "Socialising can be tiring and confusing. But connection is possible, on your own terms and in your own way.",
    short: "Autistic people may communicate differently, and misunderstandings can run both ways between autistic and non-autistic people. Many autistic people feel lonely, but groups built around shared interests, online communities and clear, open communication can help. Autistic people are just as capable of loving, successful relationships as anyone else.",
    sections: [
      {
        heading: "Different, not lacking",
        paragraphs: [
          "Autistic people may communicate differently, for example using more direct language, or finding it harder to read body language or understand sarcasm. The NHS says autistic adults may find it hard to make friends and have romantic relationships.",
          "The double empathy problem, a theory from the autistic researcher Damian Milton, suggests this is a two-way gap: autistic and non-autistic people can each find the other hard to relate to. Neither style is correct, and effort is needed on both sides.",
          "Some research suggests autistic people may share information more effectively and have greater rapport with other autistic people.",
        ],
      },
      {
        heading: "Loneliness",
        paragraphs: [
          "Many autistic people enjoy time alone and find it important for their wellbeing. Loneliness is different: it is not having fulfilling connections, and many autistic people feel lonely even in company.",
          "Autistic people are more likely to feel lonely than non-autistic people. Noisy places, social anxiety, fear of rejection and past bullying can all get in the way.",
        ],
      },
      {
        heading: "Making friends your way",
        paragraphs: [
          "Groups built around a shared interest can make it easier to start and keep a conversation going. You could go along as an observer first, and you do not have to stay for the whole session at the start.",
          "Meeting in places that suit your sensory needs can help, and so can connecting online, though be aware of online risks. The National Autistic Society's Online Community is a place to meet people who understand.",
        ],
      },
      {
        heading: "Partners and close relationships",
        paragraphs: [
          "Autistic people are just as capable of having loving and successful relationships as non-autistic people. Misunderstandings can happen, so it helps for partners to be open about what they are thinking, feeling and need.",
          "Some autistic people prefer to talk about problems in writing, such as by email or text, which gives more time to process. Counselling with someone who has autism experience can help either partner.",
        ],
      },
      {
        heading: "Looking after yourself socially",
        paragraphs: [
          "Strategies some autistic people find helpful include preparing for social situations, having a trusted person with you, being selective about events and saying no, and taking time out afterwards to recharge.",
          "If anxiety stops you socialising, talk to your GP, who may be able to offer support or point you towards services.",
        ],
      },
    ],
    helps: [
      "Join a group based on an interest you enjoy, in person or online.",
      "Go along to a new group as an observer first, and leave early if you need to.",
      "Try talking about relationship problems in writing, if that gives you more time to process.",
      "Take time out after social situations to recharge.",
      "Talk to your GP if anxiety stops you socialising.",
      CRISIS,
    ],
    tryThisWeek: [
      "Look for an interest-based group.",
      "Plan time to recharge after socialising.",
      "Try writing about a tricky topic.",
    ],
    ask: "Is there support near me to help with social anxiety or loneliness?",
    interactive: {
      kind: "scenarios",
      title: "Everyday social moments",
      scenarios: [
        {
          id: "pub",
          situation: "A friend invites you to a loud, crowded pub.",
          options: [{ text: "Suggest somewhere quieter", best: true }, { text: "Go and endure it in silence" }],
          why: "Meeting others in an environment that meets your sensory needs can help you feel less lonely.",
        },
        {
          id: "group",
          situation: "You find a local group but feel nervous about joining.",
          options: [{ text: "Go along as an observer first", best: true }, { text: "Stay away altogether" }],
          why: "You could try going along as an observer at first, and you do not have to stay for the whole session.",
        },
        {
          id: "partner",
          situation: "You and your partner keep misunderstanding each other.",
          options: [{ text: "Talk it through in writing", best: true }, { text: "Avoid the subject" }],
          why: "Discussing things in writing, using clear language, can give more time to process what is being said.",
        },
        {
          id: "drained",
          situation: "You feel drained after a family gathering.",
          options: [{ text: "Take time out to recharge", best: true }, { text: "Plan another event straight away" }],
          why: "Taking time out after social situations, to regulate anxiety and recharge, is a strategy many autistic people find helpful.",
        },
      ],
    },
    sources: [NAS_COMMUNICATION, NAS_LONELINESS, NAS_FRIENDS, NAS_PARTNERS, NHS_SIGNS, NAS_COMMUNITY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the double empathy problem suggest?",
      options: [{ text: "Communication gaps run both ways", right: true }, { text: "Only autistic people struggle to relate" }, { text: "Autistic people cannot make friends" }],
      why: "The theory states that there is a two-way problem, and that autistic people often experience non-autistic people as lacking in these skills too.",
    },
  },
  {
    id: "aut-routines",
    kicker: "Routines",
    question: "Why do routines matter so much, and how can I cope with change?",
    hook: "The same route, the same mug, the same order: routines bring calm. When change comes, a little planning helps.",
    short: "Many autistic people prefer set routines and knowing what will happen, which can help them stay calm, manage energy and reduce anxiety. If routines are not causing harm, there is no need to change them. Preparing ahead, counting down and having a plan B and plan C can make unexpected changes easier.",
    sections: [
      {
        heading: "Why routines matter",
        paragraphs: [
          "Many autistic people prefer set routines, knowing in detail what is going to happen, and rules that are the same for everyone. Examples include eating the same meals each day, taking the same route to work, or using a favourite cup or pen.",
          "Routines can help you keep calm, manage your energy by structuring the day, cope with change and reduce anxiety.",
        ],
      },
      {
        heading: "When change is hard",
        paragraphs: [
          "The NHS says autistic adults may have fixed ways of doing things and get distressed when there are changes to their routine. An unexpected change in particular can cause anxiety.",
          "Big changes, such as a new job, can also add to autistic fatigue and burnout.",
        ],
      },
      {
        heading: "When to get support",
        paragraphs: [
          "If your routines are not causing any harm, there is no need to try and change them. Support may help if they become so rigid that unplanned changes cause significant distress, or if they affect your relationships or social life.",
          "Routines that are obsessive-compulsive may be a sign of obsessive-compulsive disorder (OCD), which requires additional support.",
        ],
      },
      {
        heading: "Preparing for change",
        paragraphs: [
          "Prepare ahead and count down to changes you know about. Seeing a new place or practising a journey before the day can help.",
          "Make a plan B and a plan C for unexpected changes, and add extra time to your schedule for things like travel delays.",
          "When others plan a change that affects you, it helps to be involved in the decision and to be given time to process it.",
        ],
      },
      {
        heading: "Change at work",
        paragraphs: [
          "At work, being told about changes before they happen gives you time to think about them. You can ask for this as a reasonable adjustment, along with a regular timetable of tasks.",
          "The National Autistic Society suggests employers reduce uncertainty by planning for change, such as giving a step-by-step plan when tasks are changing.",
        ],
      },
    ],
    helps: [
      "Keep routines that help you, as long as they are not causing harm.",
      "Count down to known changes, and visit new places or practise journeys in advance.",
      "Make a plan B and a plan C for unexpected changes.",
      "Add extra time to your plans for delays.",
      "At work, ask to be told about changes before they happen.",
      CRISIS,
    ],
    tryThisWeek: [
      "Make a plan B for one regular trip.",
      "Practise a new journey in advance.",
      "Add spare time to your schedule.",
    ],
    ask: "My routines are becoming very rigid. Could I get support with managing change?",
    interactive: {
      kind: "timeline",
      title: "Getting ready for a change",
      steps: [
        { id: "hear", when: "When you hear", title: "Find out the details", points: ["Ask what will happen, and when.", "Give yourself time to process it."] },
        { id: "countdown", when: "The days before", title: "Count down", points: ["Count down to the day.", "Visit the place or practise the journey if you can."] },
        { id: "plans", when: "Plan ahead", title: "Plan B and plan C", points: ["Decide on a second option in case things change.", "Add extra time for delays."] },
        { id: "day", when: "On the day", title: "Follow your plan", points: ["Switch to plan B if something changes.", "Build in time to relax and recover afterwards."] },
      ],
    },
    sources: [NAS_ROUTINE, NHS_SIGNS, NAS_FATIGUE, NAS_ANXIETY, NAS_FORMAL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do routines need changing if they are not causing harm?",
      options: [{ text: "No, there is no need to change them", right: true }, { text: "Yes, routines should always be broken" }, { text: "Only if other people find them odd" }],
      why: "If an autistic person's routines, rituals and preferences are not causing any harm, there is no need to try and change them.",
    },
  },
  {
    id: "aut-support",
    kicker: "Support",
    question: "Where can I find support and the autistic community?",
    hook: "Many autistic adults say meeting others like them changed everything. Support is there, with or without a diagnosis.",
    short: "Support can come from a GP or local autism team, your council and national charities. The National Autistic Society runs an Online Community, local and online branches and a directory of services, and you do not need a formal diagnosis for its peer support. If you need help urgently, call 111 and select the mental health option, or call Samaritans on 116 123.",
    sections: [
      {
        heading: "Where support comes from",
        paragraphs: [
          "Support for autistic adults and their families can come from a GP or local autism team, your local council, your college or workplace, local support services and national charities.",
          "The National Autistic Society is a national charity for autistic adults and children and their families. Its Autism Services Directory helps you find UK-wide and local services that are for, or adapted for, autistic people.",
        ],
      },
      {
        heading: "Online and local community",
        paragraphs: [
          "The National Autistic Society's Online Community is a place for autistic people and their families to connect and share experiences. It has over 3,500 active users, is open 24 hours a day and is moderated daily.",
          "The charity also has more than 60 volunteer-led branches across the UK, running support, information and social activities, and online branches for people with a shared interest, identity or experience.",
        ],
      },
      {
        heading: "No diagnosis needed",
        paragraphs: [
          "Peer support groups are often welcoming to people who self-identify as autistic, before or instead of a formal diagnosis. A formal diagnosis is not needed for the National Autistic Society's peer support.",
          "Many in the autistic community accept self-identification, recognising that people can face barriers to getting a diagnosis.",
        ],
      },
      {
        heading: "For families and carers",
        paragraphs: [
          "If you care for an autistic adult, you can ask your council for a carer's assessment, ask your GP or local autism team about courses, and find local groups where you can get support from other families.",
          "Autism Central offers education and support for parents and carers of autistic children, young people and adults.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "The National Autistic Society does not offer a crisis or emergency service. If you need urgent help for your mental health, call 111 and select the mental health option.",
          "You can call Samaritans free, any time, from any phone, on 116 123, and they will not judge you. You can also text SHOUT to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.",
        ],
      },
    ],
    helps: [
      "Search the Autism Services Directory for local services and groups.",
      "Join the National Autistic Society's Online Community.",
      "Find your nearest branch, or join an online branch.",
      "If you care for an autistic adult, ask your council for a carer's assessment.",
      CRISIS,
    ],
    tryThisWeek: [
      "Search the Autism Services Directory.",
      "Join the Online Community.",
      "Look up your nearest branch.",
    ],
    ask: "Is there a local autism team or support group you can point me to?",
    interactive: {
      kind: "flip-cards",
      title: "Where to turn",
      intro: "Turn each card to see what each service offers and when to use it.",
      cards: [
        { id: "directory", front: "Autism Services Directory", when: "To find services near you", back: "UK-wide and local organisations and services for, or adapted for, autistic people and their families." },
        { id: "community", front: "Online Community", when: "Day or night", back: "A forum, moderated daily, where autistic people and families connect. Over 3,500 active users." },
        { id: "branches", front: "Local and online branches", when: "To meet people nearby", back: "More than 60 volunteer-led branches with support, information and social activities." },
        { id: "council", front: "Your local council", when: "For help with daily life", back: "A needs assessment from social services, and a carer's assessment for family carers." },
        { id: "samaritans", front: "Samaritans: 116 123", when: "Any time, day or night", back: "Free from any phone. They will listen, and will not judge or tell you what to do." },
        { id: "urgent", front: "NHS 111", when: "If you need urgent help", back: "Call 111 and select the mental health option. Call 999 if you cannot keep yourself safe." },
      ],
    },
    sources: [NHS_HELP, NAS_COMMUNITY, NAS_BRANCHES, NAS_DIRECTORY, NAS_DECIDING, NAS_URGENT, SAMARITANS, NHS_ADULT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need a formal diagnosis for the National Autistic Society's peer support?",
      options: [{ text: "No", right: true }, { text: "Yes, from a GP" }, { text: "Yes, from a specialist team" }],
      why: "A formal diagnosis is not required to access peer support provided by the National Autistic Society.",
    },
  },
];
