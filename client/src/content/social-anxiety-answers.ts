import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Social anxiety page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (including
// Every Mind Matters and the social anxiety self-help guide from Cumbria, Northumberland, Tyne and Wear NHS
// Foundation Trust, which the NHS page links to), NICE's social anxiety guideline and its information for the
// public, the Royal College of Psychiatrists, Rethink Mental Illness, Anxiety UK and No Panic, with GOV.UK for
// work and study. mind.org.uk was not read (it blocks automated reading), so no Mind page is cited.
// Every answer ends its "What helps" list with the crisis routes exactly as the NHS gives them (999 or A&E,
// 111 mental health option, Samaritans 116 123, Shout 85258). General information only; it never replaces what
// a person's own GP, therapist or mental health team tells them, and no medicine should be stopped or changed
// without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const cntw = (label: string, path: string): LearnSource => ({ label: `Cumbria, Northumberland, Tyne and Wear NHS: Social anxiety self-help guide, ${label}`, url: `https://selfhelp.cntw.nhs.uk/self-help-guides/social-anxiety/${path}` });
const niceIfp = (label: string, path: string): LearnSource => ({ label: `NICE: Social anxiety disorder, information for the public: ${label}`, url: `https://www.nice.org.uk/guidance/cg159/ifp/chapter/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Anxiety UK: ${label}`, url: `https://www.anxietyuk.org.uk/${path}` });
const govuk = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_SOCIAL = nhs("Social anxiety (social phobia)", "mental-health/conditions/social-anxiety/");
const NHS_AFP = nhs("Anxiety, fear and panic", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anxiety-fear-panic/");
const NHS_SELF_ESTEEM = nhs("Raising low self-esteem", "mental-health/self-help/tips-and-support/raise-low-self-esteem/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_FIND_TT = nhs("Find NHS talking therapies for anxiety and depression", "nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_ANTIDEPRESSANTS = nhs("Antidepressants", "medicines/antidepressants/");
const NHS_SERTRALINE = nhs("Sertraline", "medicines/sertraline/");
const NHS_ESCITALOPRAM = nhs("Escitalopram", "medicines/escitalopram/");
const NHS_PROPRANOLOL = nhs("About propranolol", "medicines/propranolol/about-propranolol/");
const NHS_ALCOHOL = nhs("Alcohol use disorder", "conditions/alcohol-use-disorder/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const EMM_ANXIETY = emm("Managing anxiety", "mental-health-issues/anxiety/");
const EMM_FEARS = emm("Facing your fears", "mental-wellbeing-tips/self-help-cbt-techniques/facing-your-fears/");
const EMM_REFRAME = emm("Reframing unhelpful thoughts", "mental-wellbeing-tips/self-help-cbt-techniques/reframing-unhelpful-thoughts/");
const EMM_HELPING = emm("Helping others with mental health problems", "supporting-others/helping-others/");

const CNTW_INTRO = cntw("Introduction", "introduction");
const CNTW_CHECK = cntw("Symptoms checklist", "do-i-suffer-social-anxiety");
const CNTW_WHAT = cntw("What is social anxiety?", "what-social-anxiety");
const CNTW_CAUSES = cntw("What causes social anxiety?", "what-causes-social-anxiety");
const CNTW_KEEPS = cntw("What keeps social anxiety going?", "what-keeps-social-anxiety-going");
const CNTW_UNDERSTANDING = cntw("Understanding social anxiety", "understanding-social-anxiety");
const CNTW_THOUGHTS = cntw("How can I reduce my negative thoughts, beliefs and images?", "how-can-i-reduce-my-negative-thoughts-beliefs-and-images");
const CNTW_FOCUS = cntw("How can I stop focusing on myself?", "how-can-i-stop-focusing-myself");
const CNTW_UNCERTAINTY = cntw("Making friends with uncertainty", "making-friends-uncertainty");
const CNTW_BEHAVIOUR = cntw("How can I change my own behaviour?", "how-can-i-change-my-own-behaviour");
const CNTW_PHYSICAL = cntw("How can I reduce my physical symptoms?", "how-can-i-reduce-my-physical-symptoms");

const NICE_REC: LearnSource = { label: "NICE: Social anxiety disorder: recognition, assessment and treatment (CG159), recommendations", url: "https://www.nice.org.uk/guidance/cg159/chapter/Recommendations" };
const NICE_SAD = niceIfp("Social anxiety disorder", "Social-anxiety-disorder");
const NICE_NEEDS = niceIfp("Considering your needs", "Considering-your-needs");
const NICE_ASSESS = niceIfp("Assessment and diagnosis for adults", "Assessment-and-diagnosis-for-adults");
const NICE_TREAT = niceIfp("Treatments for adults", "Treatments-for-adults");
const NICE_OTHER = niceIfp("Help with other problems for adults", "Help-with-other-problems-for-adults");
const NICE_QUESTIONS = niceIfp("Questions to ask about social anxiety disorder", "Questions-to-ask-about-social-anxiety-disorder");
const NICE_PARENTS = niceIfp("Information for parents and carers", "Information-for-parents-and-carers");

const RCPSYCH_SHY: LearnSource = { label: "Royal College of Psychiatrists: Shyness, social anxiety and social phobia", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/shyness-and-social-phobia" };
const RETHINK_ANX: LearnSource = { label: "Rethink Mental Illness: Anxiety disorders", url: "https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-conditions/anxiety-disorders/" };

const AUK_SOCIAL = auk("Social phobia / social anxiety", "anxiety-type/social-anxiety/");
const AUK_ABOUT = auk("About anxiety", "get-help/about-anxiety-and-anxiety-disorders/");
const AUK_CBT = auk("Cognitive behavioural therapy (CBT)", "get-help/cognitive-behavioural-therapy-cbt/");
const AUK_SUPPORTING = auk("Supporting others", "get-help/supporting-others/");
const AUK_GET_HELP = auk("Get help", "get-help/");
const AUK_COURSES = auk("Anxiety UK courses and groups", "get-help/anxiety-uk-courses-and-groups/");
const AUK_CONTACT = auk("Contact us", "contact-us/");

const NOPANIC_HOME: LearnSource = { label: "No Panic: The No Panic helpline", url: "https://nopanic.org.uk/" };
const NOPANIC_SOCIAL: LearnSource = { label: "No Panic: Social phobia / anxiety", url: "https://nopanic.org.uk/social-phobia/" };
const TOPUK: LearnSource = { label: "Triumph Over Phobia UK", url: "https://www.topuk.org/" };

const GOV_ADJUSTMENTS = govuk("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");
const GOV_DISABILITY = govuk("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ATW = govuk("Access to Work: get support if you have a disability or health condition", "access-to-work");
const GOV_ATW_ELIGIBILITY = govuk("Access to Work: eligibility", "access-to-work/eligibility");
const GOV_DSA = govuk("Help if you're a student with a learning difficulty, health problem or disability", "disabled-students-allowance-dsa");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact Samaritans", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SHOUT: LearnSource = { label: "Shout 85258: Get help", url: "https://giveusashout.org/get-help/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.";

export const socialAnxietyAnswers: LearnArticle[] = [
  {
    id: "soc-what-it-is",
    kicker: "Understanding",
    question: "Is this social anxiety, or am I just shy?",
    hook: "Many people feel nervous meeting someone new. Social anxiety is a fear that does not go away, and it can be treated.",
    short: "Social anxiety disorder, also called social phobia, is a long-term and overwhelming fear of social situations. It is more than shyness: the fear does not go away and affects everyday activities, self-confidence, relationships and work or school life. It is common, and there are treatments that can help.",
    sections: [
      {
        heading: "More than shyness",
        paragraphs: [
          "Shyness is a common sort of mild fear, and if it is mild, it does not really spoil life. Many of us get a bit worried before meeting new people but find that, once we are with them, we can cope and even enjoy it.",
          "Social anxiety is more than shyness. It is a fear that does not go away and affects everyday activities, self-confidence, relationships and work or school life.",
        ],
      },
      {
        heading: "Before, during and after",
        paragraphs: [
          "Many people occasionally worry about social situations, but someone with social anxiety feels overly worried before, during and after them.",
          "People with social anxiety disorder are afraid of doing or saying something that will result in embarrassment, humiliation or rejection by others. They may worry that they might blush, sweat, shake or look nervous, or seem boring, stupid or strange.",
        ],
      },
      {
        heading: "How it can affect life",
        paragraphs: [
          "People with social anxiety disorder usually avoid social situations such as group activities, parties or dates, or get through them only with considerable anxiety. They may struggle to stay in school or their job even if they are doing well in their work.",
          "Some people begin to avoid difficult situations completely, often leading to loneliness or loss of social life. Others cope by doing certain things that make them feel more confident and safe, called safety seeking behaviours.",
        ],
      },
      {
        heading: "Common, and treatable",
        paragraphs: [
          "Social anxiety is a common problem that usually starts during the teenage years. It is one of the most common sorts of anxiety, and it can affect almost anybody, from children to older people.",
          "The Royal College of Psychiatrists says about 5 in 100 people have some degree of social phobia, with women two or three times more likely to be affected.",
          "For many people it does not go away on its own without treatment. Some people think their social anxiety is a personal flaw or failing, but it is a recognised condition and can be treated.",
        ],
      },
    ],
    helps: [
      "Remember that social anxiety is a recognised condition, not a personal flaw or failing.",
      "See a GP if you think you have social anxiety, especially if it is having a big impact on your life.",
      "Refer yourself directly to an NHS talking therapies service, without a referral from a GP.",
      "Think about or write down what goes through your mind and how you behave in social situations; a diary can help.",
      CRISIS,
    ],
    tryThisWeek: [
      "Remind yourself it is not a personal failing.",
      "Find your local talking therapies service.",
      "Jot down how one social situation felt.",
    ],
    ask: "Could what I feel in social situations be social anxiety, and which treatment would suit me?",
    interactive: {
      kind: "timeline",
      title: "Before, during and after",
      steps: [
        { id: "before", when: "Before", title: "Worry builds", points: ["You feel very anxious before going in.", "You go over all the embarrassing things that could happen."] },
        { id: "during", when: "During", title: "Feeling watched", points: ["You may feel watched and judged all the time.", "Blushing, sweating or a pounding heart can follow."] },
        { id: "after", when: "After", title: "Going over it", points: ["You worry about how you handled it.", "You may go over it again and again."] },
        { id: "help", when: "Next", title: "Help is there", points: ["There are treatments that can help you manage it.", "CBT is generally considered the best treatment."] },
      ],
    },
    sources: [NHS_SOCIAL, RCPSYCH_SHY, NICE_SAD, CNTW_INTRO, CNTW_WHAT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How is social anxiety different from ordinary shyness?",
      options: [{ text: "It is a fear that does not go away and affects everyday life", right: true }, { text: "It only happens at parties" }, { text: "It always goes away on its own" }],
      why: "Social anxiety is more than shyness. It is a fear that does not go away and affects everyday activities, self-confidence, relationships and work or school life.",
    },
  },
  {
    id: "soc-symptoms",
    kicker: "Symptoms",
    question: "What does social anxiety feel like, in the mind and the body?",
    hook: "A racing heart, a hot face, the urge to leave. These are anxiety's signs, and they are not dangerous.",
    short: "Social anxiety affects thoughts, the body and behaviour. You may worry about everyday activities, fear being judged, and have symptoms like feeling sick, sweating, trembling or a pounding heartbeat. It can lead to avoiding situations, and sometimes to panic attacks, which are frightening but not dangerous.",
    sections: [
      {
        heading: "What goes through your mind",
        paragraphs: [
          "You may always worry about doing something you think is embarrassing, such as blushing, sweating or appearing incompetent. You may find it difficult to do things when others are watching, and feel like you are being watched and judged all the time.",
          "Common thoughts include \"I will make a fool of myself\", \"I'm boring\" or \"If I show I'm nervous people will think I'm stupid\". Many people also hold a negative picture of themselves in their mind, which is how they fear other people see them.",
        ],
      },
      {
        heading: "What happens in your body",
        paragraphs: [
          "You may often have symptoms like feeling sick, sweating, trembling or a pounding heartbeat. Other signs include a very dry mouth, a churning stomach, needing the toilet, blushing and a shaky voice.",
          "These body symptoms are your body's basic response to threat, the fight and flight response. It is not dangerous.",
          "The Royal College of Psychiatrists says these symptoms can be alarming and make anxiety worse: you worry so much about looking worried that you actually do look worried.",
        ],
      },
      {
        heading: "What you might do",
        paragraphs: [
          "You may avoid or worry a lot about social activities, such as group conversations, eating with company and parties. Some people avoid answering the phone, or keep the conversation as short as possible.",
          "Situations people often find hard include speaking in public or in groups, meeting new people, dating, and eating or drinking in public. Anxiety UK adds writing in front of other people.",
        ],
      },
      {
        heading: "Panic attacks",
        paragraphs: [
          "Some people have panic attacks, an overwhelming sense of fear and anxiety, usually only for a few minutes. A panic attack usually lasts 5 to 20 minutes.",
          "Panic attacks can be frightening, but they are not dangerous and should not harm you. The feelings reach a peak and then pass.",
        ],
      },
      {
        heading: "Other conditions alongside",
        paragraphs: [
          "Many people with social anxiety also have other mental health issues, such as depression, generalised anxiety disorder or panic disorder.",
        ],
      },
    ],
    helps: [
      "Think about or write down what goes through your mind and how you behave in social situations.",
      "Remind yourself that the body's anxiety response is not dangerous.",
      "Try some relaxation techniques, such as breathing exercises for stress.",
      "See a GP if social anxiety is having a big impact on your life.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note your thoughts in one social situation.",
      "Remind yourself the feelings are not dangerous.",
      "Try a breathing exercise.",
    ],
    ask: "Could these symptoms be social anxiety, and could anything else be adding to them?",
    interactive: {
      kind: "signs",
      title: "Signs you may notice",
      intro: "Tick any you notice. A GP will ask about your feelings, behaviours and symptoms.",
      signs: ["Worrying about everyday activities", "Fear of being judged or criticised", "Avoiding eye contact", "Blushing or a hot face", "Sweating or trembling", "A pounding heartbeat", "Feeling sick", "A dry mouth", "Avoiding parties or eating with others", "Going over events afterwards"],
      after: "These are common signs of social anxiety. If they are having a big impact on your life, it is a good idea to see a GP.",
      copyHeading: "Signs of social anxiety I have noticed",
    },
    sources: [NHS_SOCIAL, RCPSYCH_SHY, CNTW_CHECK, RETHINK_ANX, NHS_AFP, AUK_SOCIAL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Are the body symptoms of social anxiety dangerous?",
      options: [{ text: "No, they are the body's normal response to threat", right: true }, { text: "Yes, they mean something is wrong with the heart" }, { text: "Only if they last more than a minute" }],
      why: "These body symptoms are your body's basic response to threat, the fight and flight response. It is not dangerous.",
    },
  },
  {
    id: "soc-causes",
    kicker: "Causes",
    question: "Why do I have social anxiety?",
    hook: "No one knows for sure what causes it. What keeps it going is much better understood, and that is where change starts.",
    short: "No one knows for sure what causes social anxiety. It is often linked to low self-esteem, to being naturally more anxious, or to stressful experiences such as bullying or a critical parent, and it sometimes runs in families. A vicious circle of avoidance, safety behaviours and focusing on yourself can keep it going.",
    sections: [
      {
        heading: "No single cause",
        paragraphs: [
          "Social anxiety usually starts during the teenage years and sometimes runs in families, but no one knows for sure what causes it. The Royal College of Psychiatrists says it seems to affect people who have particularly high standards for their behaviour in public, or who stammered as a child.",
          "Some experts think it might be due to people getting stuck at the normal stage of shyness that all children go through between the ages of three and seven.",
        ],
      },
      {
        heading: "Things that can play a part",
        paragraphs: [
          "It is often related to low self-esteem, a poor opinion of yourself that may have begun in childhood or adolescence. Some people seem to be naturally more anxious and have learned to worry about social situations.",
          "Others may have had stressful or distressing life experiences, such as bullying or a critical parent. Experiences of racial or sexual discrimination can also influence it.",
          "Anxiety UK says having a close relative with an anxiety disorder makes an anxiety disorder more likely, as do very stressful or traumatic events like bullying. Rethink says some people seem to be born more anxious than others.",
        ],
      },
      {
        heading: "What keeps it going",
        paragraphs: [
          "Avoiding social situations stops you learning that you can cope and feel fine. If a situation is avoided, it feels even more difficult the next time.",
          "Attention turns inwards, to your body, your voice and how you are standing, which makes it very hard to pay attention to the conversation. Afterwards, you may look back with lots of negative thoughts about how badly things went.",
          "Research has shown that a person with social anxiety has equal social skills to others, but does not believe this.",
        ],
      },
      {
        heading: "Low self-esteem and avoidance",
        paragraphs: [
          "Avoiding challenging situations might make you feel safe in the short term. In the longer term, it can backfire because it reinforces your underlying doubts and fears.",
          "You might have low confidence because of what happened when you were growing up, but we can grow and develop new ways of seeing ourselves at any age.",
        ],
      },
      {
        heading: "Other conditions",
        paragraphs: [
          "Social anxiety can be present alongside other conditions, such as severe depression or generalised anxiety disorder. People diagnosed with autism or ADHD may also experience social anxiety, and it is important to discuss this with your doctor so you get the correct help.",
        ],
      },
    ],
    helps: [
      "Learn what keeps your social anxiety going, as this is very important when it comes to dealing with it.",
      "Write down the negative beliefs you have about yourself, then note evidence that challenges them.",
      "Be kind to yourself at times when you feel like being self-critical.",
      "If you think autism, ADHD, depression or generalised anxiety may also be part of it, discuss this with your doctor.",
      CRISIS,
    ],
    tryThisWeek: [
      "Notice what keeps your anxiety going.",
      "Write evidence against one negative belief.",
      "Be kind to yourself after a hard moment.",
    ],
    ask: "What might be keeping my social anxiety going, and could another condition be part of it?",
    interactive: {
      kind: "risk-check",
      title: "What can play a part",
      intro: "Tick any that fit. No one knows for sure what causes social anxiety, but these can play a part, and some of them can change.",
      items: [
        { id: "self-esteem", label: "Low self-esteem", note: "Often linked to social anxiety. Writing down evidence that challenges negative beliefs can help.", changeable: true },
        { id: "avoiding", label: "Avoiding situations", note: "Avoidance stops you learning that you can cope and feel fine, so the next time feels harder.", changeable: true },
        { id: "anxious", label: "Being naturally more anxious", note: "Some people seem to be naturally more anxious and have learned to worry about social situations.", changeable: false },
        { id: "experiences", label: "Bullying or a critical parent", note: "Stressful or distressing experiences like these can lead people to feel this way.", changeable: false },
        { id: "discrimination", label: "Discrimination", note: "Experiences of racial or sexual discrimination can also influence the development of social anxiety.", changeable: false },
        { id: "family", label: "A relative with anxiety", note: "Social anxiety sometimes runs in families.", changeable: false },
        { id: "stammer", label: "Stammering as a child", note: "The Royal College of Psychiatrists says social phobia seems to affect people who stammered as a child.", changeable: false },
      ],
    },
    sources: [CNTW_CAUSES, RCPSYCH_SHY, CNTW_KEEPS, NHS_SELF_ESTEEM, RETHINK_ANX, AUK_ABOUT, NHS_SOCIAL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What has research shown about the social skills of people with social anxiety?",
      options: [{ text: "They are equal to other people's", right: true }, { text: "They are much weaker than other people's" }, { text: "They can never be improved" }],
      why: "Research has shown that a person with social anxiety has equal social skills to others, but does not believe this.",
    },
  },
  {
    id: "soc-diagnosis",
    kicker: "Getting help",
    question: "How do I ask a GP for help when talking is the hard part?",
    hook: "Asking for help can feel like the very thing you fear. GPs know this, and there are ways to make it easier.",
    short: "It is a good idea to see a GP if you think you have social anxiety, especially if it is having a big impact on your life. They will ask about your feelings, behaviours and symptoms, and may refer you to a mental health specialist. You can also refer yourself to NHS talking therapies without seeing a GP.",
    sections: [
      {
        heading: "A GP will try to put you at ease",
        paragraphs: [
          "Asking for help can be difficult, but a GP will be aware that many people struggle with social anxiety and will try to put you at ease.",
          "If it feels too difficult to see your GP in person, you can ask for a telephone appointment.",
        ],
      },
      {
        heading: "What they will ask",
        paragraphs: [
          "They will ask about your feelings, behaviours and symptoms to find out about your anxiety in social situations. You might be asked to fill out a questionnaire.",
          "NICE suggests two simple questions to help spot it: do you find yourself avoiding social situations or activities, and are you fearful or embarrassed in social situations?",
          "Anxiety UK's checklist asks whether you worry a lot about embarrassing yourself in front of others. It strongly advises seeing a GP, who will be able to make a formal diagnosis.",
        ],
      },
      {
        heading: "A fuller assessment",
        paragraphs: [
          "If they think you could have social anxiety, you will be referred to a mental health specialist to have a full assessment and talk about treatments.",
          "The assessment covers your thoughts, feelings and behaviour, situations you avoid, symptoms such as blushing, sweating or trembling, and how you view yourself. You will also be asked whether you use alcohol or drugs to cope in social situations.",
        ],
      },
      {
        heading: "Care that fits your needs",
        paragraphs: [
          "NICE says your team should be aware that you might find it hard to ask for help or talk to them. They should offer to communicate by text, email or phone, including for making and changing appointments.",
          "If possible, you should be offered appointments at less busy times, and the chance to complete forms in private. When you arrive, they should offer to let you know, for example by text, when your appointment is about to start.",
        ],
      },
      {
        heading: "Or refer yourself",
        paragraphs: [
          "You can refer yourself directly to an NHS talking therapies service without a referral from a GP. To do this, you need to be registered with a GP and aged 18 or over, or 16 or over in some areas.",
          "You do not need a diagnosed mental health condition to refer yourself. The service will contact you, and if they can help, tell you how long you may need to wait.",
        ],
      },
    ],
    helps: [
      "See a GP if social anxiety is having a big impact on your life.",
      "Ask for a telephone appointment if seeing your GP in person feels too difficult.",
      "Ask to communicate by text, email or phone, in the way you find most comfortable.",
      "Take a list of questions, such as what happens during an assessment and whether information about you will remain private.",
      "Refer yourself to NHS talking therapies if you are 18 or over and registered with a GP.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask for a phone appointment with a GP.",
      "Write your questions down first.",
      "Find your local talking therapies service.",
    ],
    ask: "Could this be social anxiety, and can my appointments be by phone or at a quieter time?",
    interactive: {
      kind: "scenarios",
      title: "Taking the first step",
      scenarios: [
        {
          id: "phone",
          situation: "The thought of sitting in the GP's waiting room is too much.",
          options: [{ text: "Ask for a telephone appointment", best: true }, { text: "Put off getting help" }],
          why: "If it feels too difficult to see your GP in person, you can ask for a telephone appointment.",
        },
        {
          id: "words",
          situation: "You worry you will not find the words once you are there.",
          options: [{ text: "Write your questions down first", best: true }, { text: "Say nothing and hope they notice" }],
          why: "A list of questions may help you discuss social anxiety disorder, and the treatments you are offered, with your health and social care team.",
        },
        {
          id: "no-diagnosis",
          situation: "You think it is social anxiety, but nobody has diagnosed it.",
          options: [{ text: "Refer yourself to talking therapies", best: true }, { text: "Wait until you have a diagnosis" }],
          why: "You do not need a diagnosed mental health condition to refer yourself to NHS talking therapies.",
        },
        {
          id: "reception",
          situation: "You dread checking in at a busy reception desk.",
          options: [{ text: "Ask about quieter times and a text when it is your turn", best: true }, { text: "Cancel the appointment" }],
          why: "If possible, you should be offered appointments at less busy times, and a text when your appointment is about to start.",
        },
      ],
    },
    sources: [NHS_SOCIAL, RETHINK_ANX, NICE_ASSESS, NICE_NEEDS, NHS_TT, NHS_FIND_TT, NICE_REC, NICE_QUESTIONS, AUK_SOCIAL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Can you refer yourself to NHS talking therapies for social anxiety?",
      options: [{ text: "Yes, without a referral from a GP", right: true }, { text: "No, only a GP can refer you" }, { text: "Only once you have a diagnosis" }],
      why: "You can refer yourself directly to an NHS talking therapies service without a referral from a GP.",
    },
  },
  {
    id: "soc-cbt",
    kicker: "Treatment",
    question: "What happens in CBT for social anxiety, and does it work?",
    hook: "CBT is generally considered the best treatment for social anxiety. It works on the thoughts, habits and focus that keep the fear going.",
    short: "Cognitive behavioural therapy (CBT) helps you identify negative thought patterns and behaviours, and change them. NICE says the first treatment offered should be CBT designed for social anxiety, usually one-to-one, with up to 14 to 16 meetings over 4 months. CBT is generally considered the best treatment.",
    sections: [
      {
        heading: "The main treatment",
        paragraphs: [
          "CBT is therapy that helps you identify negative thought patterns and behaviours, and change them. It is generally considered the best treatment for social anxiety.",
          "NICE says the first treatment you should be offered is a type of CBT specifically designed to treat social anxiety disorder. The Royal College of Psychiatrists says CBT seems to be better than SSRI medication and should be provided before medication is tried.",
        ],
      },
      {
        heading: "One-to-one, over about 4 months",
        paragraphs: [
          "You should usually be offered CBT on your own with a therapist rather than in a group. You should have up to 14 to 16 meetings over 4 months, each lasting an hour to an hour and a half.",
          "Rethink says that if you have social anxiety disorder you should not be offered group CBT sessions. NICE says group CBT should not routinely be offered in preference to individual CBT.",
        ],
      },
      {
        heading: "What the sessions involve",
        paragraphs: [
          "NICE says this CBT includes education about social anxiety, and exercises that show the effects of focusing on yourself and of safety behaviours. It can use video feedback to correct a distorted, negative picture of how you come across.",
          "It also includes behavioural experiments to test negative beliefs, with homework, and work on the worrying you do before and after events. It ends with work on preventing a relapse.",
          "Anxiety UK says CBT is structured and practical, and may include keeping thought records and trying out new behaviours in everyday situations. You will usually be asked to practise what you have learned between sessions, and it is important to do this for CBT to work.",
        ],
      },
      {
        heading: "Seeing yourself more fairly",
        paragraphs: [
          "The Royal College of Psychiatrists gives an example: when a conversation dries up, you may think it is your fault. In CBT, the therapist helps you see that it is just as likely the other person has run out of things to say.",
          "You can then start to focus on how other people are actually reacting to you, rather than your imaginary version of how they are.",
        ],
      },
      {
        heading: "If it does not help enough",
        paragraphs: [
          "If your first treatment was CBT and you do not feel better, you may be offered an SSRI medicine together with another course of CBT. Speak to a GP if you are still having problems after your CBT has finished.",
        ],
      },
    ],
    helps: [
      "Ask for CBT designed for social anxiety, usually one-to-one with a therapist.",
      "Practise what you learn between sessions; it is important for CBT to work.",
      "Keep using the skills you have learned after your course has finished.",
      "Refer yourself to NHS talking therapies, or ask a GP to refer you.",
      "Speak to a GP if you are still having problems after your CBT has finished.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask for one-to-one CBT for social anxiety.",
      "Practise between sessions.",
      "Keep using your skills afterwards.",
    ],
    ask: "Can I be referred for one-to-one CBT designed for social anxiety, and how long is the wait?",
    interactive: {
      kind: "flip-cards",
      title: "Inside CBT for social anxiety",
      intro: "Turn each card to see what each part of CBT for social anxiety involves, as NICE and the Royal College of Psychiatrists describe it.",
      cards: [
        { id: "patterns", front: "Spotting the patterns", when: "Throughout", back: "CBT helps you identify negative thought patterns and behaviours, and change them." },
        { id: "focus", front: "Shifting your focus", when: "In sessions", back: "Exercises show the effects of focusing on yourself and of safety behaviours, and train your attention outwards." },
        { id: "video", front: "Video feedback", when: "In sessions", back: "Watching yourself on video can correct a distorted, negative picture of how you come across." },
        { id: "experiments", front: "Behavioural experiments", when: "In sessions and as homework", back: "Testing negative beliefs in sessions, then testing your ideas out in your day to day life." },
        { id: "before-after", front: "Before and after events", when: "Throughout", back: "Changing the worrying you do before an event, and the going over it afterwards." },
        { id: "relapse", front: "Staying well", when: "Towards the end", back: "Work on preventing a relapse, and a plan to keep using your skills." },
      ],
    },
    sources: [NHS_SOCIAL, NICE_TREAT, NICE_REC, RCPSYCH_SHY, NHS_CBT, RETHINK_ANX, AUK_CBT, NHS_TT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How does NICE say CBT for social anxiety should usually be given?",
      options: [{ text: "One-to-one with a therapist", right: true }, { text: "Always in a large group" }, { text: "Only as a book, with no therapist" }],
      why: "You should usually be offered CBT on your own with a therapist rather than in a group.",
    },
  },
  {
    id: "soc-self-help",
    kicker: "Self-help",
    question: "Can I work on social anxiety with a workbook or online course?",
    hook: "Guided self-help pairs a CBT workbook with a therapist checking in. On your own, a few simple techniques can be a useful first step.",
    short: "Guided self-help means working through a CBT-based workbook or online course with regular support from a therapist. NICE says it usually means up to 9 sessions over 3 to 4 months, with 3 hours of support in total. Self-help can also be a useful first step before trying other treatments.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Guided self-help involves working through a CBT-based workbook or online course with regular support from a therapist. You may be offered it first, and if your symptoms do not improve, you may be offered another type of therapy.",
          "NICE says that if you decide not to have CBT, you should be offered CBT-based supported self-help. You should usually have up to 9 sessions over 3 to 4 months, with a professional checking your progress face to face or by telephone for a total of 3 hours.",
        ],
      },
      {
        heading: "How well it works",
        paragraphs: [
          "The Royal College of Psychiatrists says pure self-help, using books without a therapist, seems to help some people a bit. It may be a good choice if your anxiety about social situations is troublesome but does not stop you from doing too many things.",
          "Self-help with group meetings seems to work better.",
        ],
      },
      {
        heading: "Start by understanding your anxiety",
        paragraphs: [
          "Think back to a recent social occasion you found difficult, and draw out your own vicious circle: your beliefs, your thoughts beforehand, your body symptoms, the picture of yourself in your mind, your safety behaviours and your thoughts afterwards.",
          "If that is hard to see, keep a social anxiety diary for one or two weeks only. Note when and where you felt anxious, and your thoughts, symptoms and safety behaviours before, during and after.",
        ],
      },
      {
        heading: "Answering anxious thoughts",
        paragraphs: [
          "Look out for unhelpful thinking styles, such as mind-reading, fortune-telling and catastrophising. Then write two columns: one for your anxious thoughts and one for a fairer, more balanced thought.",
          "It can help to ask whether there is good evidence for a thought, whether there are other explanations, and what you would say to a friend if they were thinking this way.",
          "A thought is just a thought and is not always true. Catching anxious thoughts and answering back takes a lot of practice, but really does work.",
        ],
      },
    ],
    helps: [
      "Ask about guided self-help, with regular support from a therapist.",
      "Keep a social anxiety diary for one or two weeks.",
      "Write your anxious thoughts in one column and balanced thoughts in another.",
      "Ask yourself what you would say to a friend who was thinking that way.",
      "Remind yourself that a thought is just a thought and is not always true.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep a short anxiety diary.",
      "Write one balanced thought.",
      "Ask what you would tell a friend.",
    ],
    ask: "Is guided self-help for social anxiety available here, and would it suit me?",
    interactive: {
      kind: "flip-cards",
      title: "Unhelpful thinking styles",
      intro: "Turn each card to see a common thinking style and a way to answer it back.",
      cards: [
        { id: "mind-reading", front: "Mind-reading", when: "\"He thinks I'm boring\"", back: "Assuming others share your negative view of yourself, without finding out what they really think." },
        { id: "fortune", front: "Fortune-telling", when: "\"I'm going to have an awful time\"", back: "Predicting it will go badly. Ask: how likely is this, and is there good evidence for it?" },
        { id: "catastrophising", front: "Catastrophising", when: "\"If this talk goes wrong, I'll lose my job\"", back: "Jumping to the worst outcome. Ask: are there other possible outcomes?" },
        { id: "personalising", front: "Personalising", when: "\"They're all laughing, it must be about me\"", back: "Taking things as being about you. Look for other explanations." },
        { id: "only-bad", front: "Focusing only on the bad", when: "\"I really clammed up\"", back: "Ignoring that you had been able to speak easily to other people that day." },
      ],
    },
    sources: [NHS_SOCIAL, NICE_TREAT, NHS_TT, RCPSYCH_SHY, CNTW_THOUGHTS, EMM_REFRAME, CNTW_UNDERSTANDING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does NICE say supported self-help for social anxiety usually involves?",
      options: [{ text: "Up to 9 sessions over 3 to 4 months, with a professional's support", right: true }, { text: "A book on your own, with no support at all" }, { text: "A single one-off session" }],
      why: "You should usually have up to 9 sessions over 3 to 4 months, with a professional checking your progress face to face or by telephone for a total of 3 hours.",
    },
  },
  {
    id: "soc-medicines",
    kicker: "Treatment",
    question: "Can medicine help social anxiety?",
    hook: "Medicine is not usually the first choice, but an SSRI can help. It takes patience, and it is always reduced slowly with your doctor.",
    short: "The main medicines are antidepressants called SSRIs, such as escitalopram or sertraline. NICE says they are usually not as helpful as CBT, and are offered if you would rather have medicine. They take time to work, and should never be stopped suddenly or without talking to your doctor.",
    sections: [
      {
        heading: "SSRIs, the main medicines",
        paragraphs: [
          "Antidepressant medicines, usually a type called selective serotonin reuptake inhibitors (SSRIs), such as escitalopram or sertraline, can treat social anxiety. They are usually not used to treat children and young people.",
          "Being offered an antidepressant does not necessarily mean that you have depression. NICE says antidepressants are usually not as helpful as CBT for social anxiety disorder.",
        ],
      },
      {
        heading: "When medicine is offered",
        paragraphs: [
          "If you decide not to have CBT or supported self-help and wish to try medicine instead, your healthcare professional should talk to you about why, and discuss any concerns you have.",
          "The Royal College of Psychiatrists says medication should be used if a psychological approach has failed, if you do not want to try a psychological approach, or if you are very depressed.",
        ],
      },
      {
        heading: "Give it time",
        paragraphs: [
          "When you first start an SSRI, you may feel more anxious and agitated, and may have problems sleeping and eating, but this usually passes after a short time. Most side effects should ease after a couple of weeks.",
          "The Royal College of Psychiatrists says SSRIs usually start to work within 6 weeks, but can take up to 12 weeks to have their full effect.",
          "It is not common, but some people may have suicidal thoughts or an urge to self-harm when they start an antidepressant. Speak to your doctor straight away if this happens.",
        ],
      },
      {
        heading: "If the first medicine does not help",
        paragraphs: [
          "If you do not feel better after 10 to 12 weeks on an SSRI, you should be offered CBT as well. If you have had unpleasant side effects, you may be offered a different SSRI or a medicine called venlafaxine.",
          "NICE says you should not usually be offered benzodiazepines, or St John's wort and other preparations for anxiety bought from health-food shops, herbalists and pharmacies.",
          "Beta-blockers such as propranolol can help with the physical symptoms of anxiety, like sweating and shaking. Propranolol is only available on prescription.",
        ],
      },
      {
        heading: "Staying on it, and stopping safely",
        paragraphs: [
          "If you feel better after the first 3 months, you should be advised to continue for at least another 6 months. You may need to keep taking medicine even when you feel better, because this can help you to stay well.",
          "Do not stop taking an antidepressant suddenly or without talking to your doctor first. Your doctor will help you reduce the dose gradually, usually over several weeks or months.",
          "The Royal College of Psychiatrists says about half of those who start antidepressants for social phobia get worse again when they stop. NICE says that if anxiety returns as the dose is lowered, your doctor may increase it, restart it or offer you CBT.",
        ],
      },
    ],
    helps: [
      "Ask your doctor to explain how the medicine might help, and the side effects you may have.",
      "Keep taking it as prescribed, as it can take several weeks for symptoms to start to improve.",
      "Tell your doctor about any side effects, however mild you consider them to be.",
      "Never stop an antidepressant suddenly; your doctor will help you reduce it gradually.",
      "Do not use St John's wort with sertraline or escitalopram, and tell your doctor about any other medicines or herbal remedies you take.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note side effects to tell your doctor.",
      "Keep taking it as prescribed.",
      "Tell your doctor about other remedies.",
    ],
    ask: "Would an SSRI help me alongside CBT, and how would we reduce it when the time comes?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines for social anxiety, card by card",
      intro: "Turn each card to see when each is used. Always talk to your doctor before stopping or changing a medicine.",
      cards: [
        { id: "ssri", front: "SSRIs: escitalopram or sertraline", when: "Usually the first medicine", back: "Thought to increase serotonin. They can take up to 12 weeks to have their full effect." },
        { id: "ssri-cbt", front: "An SSRI with CBT", when: "If either alone has not helped enough", back: "If an SSRI has not helped after 10 to 12 weeks, CBT should be offered as well." },
        { id: "switch", front: "Another SSRI or venlafaxine", when: "If the first SSRI does not suit you", back: "Offered after unpleasant side effects, or if the first SSRI has not helped." },
        { id: "maoi", front: "MAOIs: phenelzine or moclobemide", when: "If other medicines have not helped", back: "These can interact with other medicines and certain foods, such as cheese, so you should be warned about this." },
        { id: "beta", front: "Beta-blockers: propranolol", when: "For physical symptoms", back: "Can help with the physical symptoms of anxiety, like sweating and shaking. Only on prescription." },
        { id: "not-offered", front: "Not usually offered", when: "Benzodiazepines, St John's wort", back: "NICE says these should not usually be offered for social anxiety disorder." },
      ],
    },
    sources: [NHS_SOCIAL, NICE_TREAT, RCPSYCH_SHY, NHS_ANTIDEPRESSANTS, NHS_SERTRALINE, NHS_ESCITALOPRAM, NHS_PROPRANOLOL, RETHINK_ANX, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How should an antidepressant be stopped?",
      options: [{ text: "Gradually, with your doctor's help", right: true }, { text: "Suddenly, as soon as you feel better" }, { text: "By skipping doses now and then" }],
      why: "Do not stop taking an antidepressant suddenly or without talking to your doctor first. Your doctor will help you reduce the dose gradually, usually over several weeks or months.",
    },
  },
  {
    id: "soc-small-steps",
    kicker: "Facing fears",
    question: "How do I start facing the situations I avoid?",
    hook: "Avoiding brings relief today but lets the fear grow. Small, planned steps, starting with the easiest, help it shrink.",
    short: "Avoiding situations can bring relief in the short term but makes fears grow. Facing them gradually, starting with the easiest and staying until the fear falls by half, helps you learn that you can cope. Changing what you do is probably the most helpful way to overcome social anxiety.",
    sections: [
      {
        heading: "Why avoiding backfires",
        paragraphs: [
          "When we are afraid of something, whether it is a fear of dogs or public speaking, it can be tempting to avoid it. This might bring relief in the short term, but avoiding situations can make them harder to face up to, and mean that our fears grow.",
          "Every Mind Matters says relying on habits we think will keep us safe might actually make anxiety worse. Changing what you do is probably the most helpful way to overcome social anxiety.",
        ],
      },
      {
        heading: "Build your ladder",
        paragraphs: [
          "Think about which situations involve your fear, and rate each from 0 to 100, with 0 being not difficult at all and 100 causing the most fear. Then list them in order, from the least to the most difficult.",
          "The NHS suggests breaking down challenging situations into smaller parts, and working on feeling more relaxed with each part.",
        ],
      },
      {
        heading: "One step at a time",
        paragraphs: [
          "Start with the easiest, and keep putting yourself in the situation until your fear has reduced by half. So if it scored 10 to start with, keep going until you would rate it a 5.",
          "Allow yourself to feel the fear without relying on distractions, like your phone or seeking reassurance. You should notice that the more times you face a fear, the less scary it becomes.",
          "The Royal College of Psychiatrists says that even if you are very frightened in a situation, your anxiety will start to go away after a while.",
        ],
      },
      {
        heading: "An example ladder",
        paragraphs: [
          "One NHS self-help guide describes John, who fears talking in front of others and has stopped going to his social club. His first step is meeting a friend and going into the club; later steps include staying with people instead of keeping busy, and mixing with people other than close friends.",
          "His last and most difficult step is to say more and speak slower in a group. As he climbs, he gradually drops his safety behaviours, and makes sure not to take on new ones.",
        ],
      },
      {
        heading: "Do not rush",
        paragraphs: [
          "Once your fear has reduced by half, move on to the next situation. Do not be discouraged if some things take longer than others.",
          "Every time you put yourself in a situation you find difficult, no matter how big or small, it is a step towards reducing your anxiety and feeling more in control.",
        ],
      },
    ],
    helps: [
      "List the situations you fear and rate each from 0 to 100.",
      "Start with the easiest, and stay until your fear has reduced by half.",
      "Try to face it without distractions, such as your phone or seeking reassurance.",
      "Do not avoid situations that make you anxious; try slowly building up the time you spend in them.",
      "Work your way up without rushing, and do not be discouraged if some steps take longer.",
      CRISIS,
    ],
    tryThisWeek: [
      "Rate a few situations from 0 to 100.",
      "Face the easiest one.",
      "Stay until your fear halves.",
    ],
    ask: "Could a therapist help me plan and practise facing the situations I avoid?",
    interactive: {
      kind: "timeline",
      title: "Facing fears, step by step",
      steps: [
        { id: "notice", when: "Step 1", title: "Notice your reactions", points: ["When you are relaxed, think about how fear feels in your body.", "Notice what it makes you do, such as leaving early."] },
        { id: "reframe", when: "Step 2", title: "See fear differently", points: ["Fear is the fight or flight response.", "It can fire in situations that are not really dangerous."] },
        { id: "rate", when: "Step 3", title: "Rate and list", points: ["Rate each situation from 0 to 100.", "List them from least to most difficult."] },
        { id: "start", when: "Step 4", title: "Start with the easiest", points: ["Stay until your fear has reduced by half.", "The more you face a fear, the less scary it becomes."] },
        { id: "feel", when: "Step 5", title: "Feel the fear", points: ["Try not to rely on your phone or reassurance.", "This can help prove to yourself you are able to cope."] },
        { id: "up", when: "Step 6", title: "Work your way up", points: ["Move on once your fear has halved.", "Do not be discouraged if some steps take longer."] },
      ],
    },
    sources: [EMM_FEARS, CNTW_BEHAVIOUR, RCPSYCH_SHY, NHS_SOCIAL, NHS_AFP, EMM_ANXIETY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When should you move to the next situation on your list?",
      options: [{ text: "Once your fear has reduced by half", right: true }, { text: "Straight away, as fast as possible" }, { text: "Only when you feel no fear at all" }],
      why: "Once your fear has reduced by half, move on to the next situation. Do not be discouraged if some things take longer than others.",
    },
  },
  {
    id: "soc-work",
    kicker: "Work and study",
    question: "How can I manage social anxiety at work or while studying?",
    hook: "Meetings, phone calls and presentations can feel impossible. There are rights, adjustments and support that can help.",
    short: "Social anxiety can affect work or school life, and some people struggle to stay in a job even when they are doing well. Employers must make reasonable adjustments for workers with mental health conditions; the government's own example is a desk of your own for someone with social anxiety disorder. Access to Work and Disabled Students' Allowance can give extra support.",
    sections: [
      {
        heading: "How it can affect work",
        paragraphs: [
          "Social anxiety can affect work or school life. You may worry about everyday activities such as speaking on the phone or working, and find it difficult to do things when others are watching.",
          "People with social anxiety disorder often do not speak in groups or meetings. Because of this, they may struggle to stay in school or their job even if they are doing well in their work.",
          "The Royal College of Psychiatrists says some people even avoid promotion at work, though they are quite capable of a more demanding job. Specific social phobia can affect people who have to talk or perform in front of others, even those who do it regularly.",
        ],
      },
      {
        heading: "Your rights at work",
        paragraphs: [
          "Employers must make reasonable adjustments so that workers with physical or mental health conditions are not substantially disadvantaged. The government's own example is allowing someone with social anxiety disorder to have their own desk instead of hot-desking.",
          "Under the Equality Act 2010, a person is disabled if a mental impairment has a substantial and long-term negative effect on their ability to do normal daily activities. Long-term means 12 months or more.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a mental health condition. It includes support to manage your mental health at work, such as a tailored plan and one-to-one sessions with a mental health professional.",
          "You need to be 16 or over and in paid work, or about to start or return to it. You do not need to be diagnosed with a condition to apply, and it can also help pay for communication support at a job interview.",
        ],
      },
      {
        heading: "At college or university",
        paragraphs: [
          "Disabled Students' Allowance helps cover the study-related costs you have because of a mental health problem. It depends on your individual needs, not your household income, and you do not need to pay it back.",
          "You will have a needs assessment, an informal meeting to work out what support you can get for your studies. It is not a test.",
        ],
      },
      {
        heading: "In meetings and conversations",
        paragraphs: [
          "One NHS self-help guide suggests paying attention to what is happening around you, rather than monitoring yourself. Really listen to what is being said, and do not take all the responsibility for keeping conversations going: silence is OK, and other people will contribute.",
          "Your physical symptoms of anxiety are not as noticeable as you think.",
        ],
      },
    ],
    helps: [
      "Ask your employer about reasonable adjustments, such as your own desk instead of hot-desking.",
      "Apply for Access to Work mental health support if you are in, or about to start, paid work.",
      "If you are a student, ask about Disabled Students' Allowance.",
      "In meetings, listen to what is being said rather than to your own negative thoughts.",
      "Remember that silence is OK; other people will contribute.",
      CRISIS,
    ],
    tryThisWeek: [
      "Think of one adjustment that would help.",
      "Look up Access to Work.",
      "Listen outwards in one meeting.",
    ],
    ask: "Could you write a note about adjustments that might help me at work or college?",
    interactive: {
      kind: "flip-cards",
      title: "Support at work and study",
      intro: "Turn each card to see what each kind of support offers and who can get it.",
      cards: [
        { id: "adjustments", front: "Reasonable adjustments", when: "From your employer", back: "Changes so you are not substantially disadvantaged, such as your own desk instead of hot-desking." },
        { id: "equality", front: "The Equality Act 2010", when: "A substantial, long-term effect", back: "Long-term means 12 months or more. The Act does not apply to Northern Ireland." },
        { id: "atw-mental-health", front: "Access to Work: mental health", when: "Aged 16 or over, in paid work", back: "A tailored plan and one-to-one sessions with a mental health professional. You can only claim it once." },
        { id: "atw-interview", front: "Interview communication support", when: "For a job interview", back: "Access to Work can help pay for communication support if you have a mental health condition." },
        { id: "dsa", front: "Disabled Students' Allowance", when: "At university or college", back: "Covers study-related costs because of a mental health problem. You do not pay it back." },
      ],
    },
    sources: [NHS_SOCIAL, NICE_SAD, RCPSYCH_SHY, GOV_ADJUSTMENTS, GOV_DISABILITY, GOV_ATW, GOV_ATW_ELIGIBILITY, GOV_DSA, CNTW_FOCUS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which reasonable adjustment does the government give as an example for social anxiety disorder?",
      options: [{ text: "A desk of their own instead of hot-desking", right: true }, { text: "Never going to any meetings" }, { text: "Working without pay" }],
      why: "The government's own example is allowing someone with social anxiety disorder to have their own desk instead of hot-desking.",
    },
  },
  {
    id: "soc-safety",
    kicker: "Safety behaviours",
    question: "What are safety behaviours, and why does dropping them help?",
    hook: "Looking away, rehearsing every word, a drink to relax. They feel like protection, but they keep the fear going.",
    short: "Safety behaviours are things people do to feel more confident and safe in social situations, such as avoiding eye contact, rehearsing what to say or drinking alcohol. They make sense, but they keep social anxiety going, because you never learn that you could cope without them. Dropping them gradually, starting with the easiest, helps.",
    sections: [
      {
        heading: "What they are",
        paragraphs: [
          "Safety seeking behaviours are things people do to feel more confident and safe in situations that feel scary. They can include not looking people in the eye, sitting on the edge of a group, or staying close to someone who can do the talking.",
          "Others include hiding visible signs of anxiety, such as wearing make-up to hide blushing, finding a task to look busy, and asking lots of questions to keep the focus on the other person, or saying very little.",
        ],
      },
      {
        heading: "Why they keep the fear going",
        paragraphs: [
          "It makes sense to use them when we feel threatened. But they keep the problem going, because we never learn that the situation is not as threatening as we thought, and never find out that we can manage without them.",
          "A person might think: I only coped because I had a drink, or because I made a list of things to say. They never learn that they could have coped without these things.",
          "The Royal College of Psychiatrists says safety behaviours do not allow you to experience the fact that dreadful things do not happen if you stop trying to control your behaviour so much.",
        ],
      },
      {
        heading: "Over-planning and uncertainty",
        paragraphs: [
          "Over-preparing, like planning what to say in advance, is an attempt to manage uncertainty and tends to backfire. The conversation may take a turn away from the things you had planned to talk about.",
          "You can practise welcoming a little uncertainty in everyday life, by trying new foods or not checking your phone for an hour. Then, in social settings, try planning less and letting others plan some things for you.",
        ],
      },
      {
        heading: "Alcohol and drugs",
        paragraphs: [
          "Some people repeatedly use alcohol or recreational drugs because they think they need help to relax in social situations. NICE says your health professional should ask whether you drink or take drugs to cope, and treatment for an alcohol or drug problem should not stop you having treatment for social anxiety.",
          "The NHS says try not to use alcohol, cigarettes, gambling or drugs to relieve anxiety, as these can all contribute to poor mental health.",
          "It can be very dangerous to stop drinking suddenly if you are dependent on alcohol. If you get withdrawal symptoms when you stop or cut down, get medical help before you try to stop drinking.",
        ],
      },
      {
        heading: "Dropping them, one at a time",
        paragraphs: [
          "Make a list of all the avoidance and safety behaviours you aim to drop. Then gradually reduce them as you begin to face the things you fear.",
          "The Royal College of Psychiatrists suggests starting to stop using your safety behaviours, beginning with the easiest. Every Mind Matters adds that facing a situation without distractions, like your phone or seeking reassurance, can help prove to yourself you are able to cope.",
        ],
      },
    ],
    helps: [
      "List the safety behaviours you use, such as avoiding eye contact or rehearsing what to say.",
      "Start to stop using them, beginning with the easiest.",
      "Try facing a situation without your phone or seeking reassurance.",
      "Plan a little less, and let others plan some things for you.",
      "Try not to use alcohol or drugs to relieve anxiety; if you are dependent on alcohol, get medical help before you stop.",
      CRISIS,
    ],
    tryThisWeek: [
      "List your safety behaviours.",
      "Drop the easiest one, once.",
      "Leave your phone in your pocket.",
    ],
    ask: "Which of my safety behaviours should I try dropping first, and how?",
    interactive: {
      kind: "risk-check",
      title: "Safety behaviours you might use",
      intro: "Tick any you recognise. Each one feels protective, but each keeps the fear going, and each can be dropped, one at a time.",
      items: [
        { id: "eye", label: "Avoiding eye contact", note: "Not looking people in the eye, so as not to draw attention to yourself.", changeable: true },
        { id: "rehearse", label: "Rehearsing what to say", note: "Planning words in advance tends to backfire when the conversation takes a different turn.", changeable: true },
        { id: "hide", label: "Hiding signs of anxiety", note: "Such as wearing a jacket to hide sweat, or make-up to hide blushing.", changeable: true },
        { id: "busy", label: "Keeping busy", note: "Finding a task to look busy, to avoid eye contact and social interaction.", changeable: true },
        { id: "safe-person", label: "Sticking with a safe person", note: "Staying close to someone you know so they can do the talking for you.", changeable: true },
        { id: "questions", label: "Asking lots of questions", note: "Keeping the focus on the other person, and not saying anything personal about yourself.", changeable: true },
        { id: "drink", label: "A drink to relax", note: "It stops you learning you could cope without it. If you are dependent on alcohol, get medical help before you stop.", changeable: true },
      ],
    },
    sources: [CNTW_WHAT, RCPSYCH_SHY, CNTW_BEHAVIOUR, CNTW_UNCERTAINTY, NICE_OTHER, NHS_AFP, EMM_FEARS, NHS_ALCOHOL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Why do safety behaviours keep social anxiety going?",
      options: [{ text: "You never find out you can manage without them", right: true }, { text: "They make you confident for good" }, { text: "They make no difference at all" }],
      why: "They keep the problem going, because we never learn that the situation is not as threatening as we thought, and never find out that we can manage without them.",
    },
  },
  {
    id: "soc-friends",
    kicker: "Family and friends",
    question: "How can friends and family help with social anxiety?",
    hook: "Small, steady support makes a difference. Listening, carrying on as usual and gentle encouragement all help.",
    short: "Social anxiety can make it hard to make friends or have close relationships, and families can miss out too. Friends and family can help by being reliable, asking how they can help, listening without judgement and encouraging support without forcing it. Looking after yourself matters too.",
    sections: [
      {
        heading: "How it can affect relationships",
        paragraphs: [
          "People with social anxiety disorder may find it hard to make friends or have other close relationships.",
          "The Royal College of Psychiatrists says many people cope by arranging their lives around their symptoms, so they and their families miss out on things they might otherwise enjoy. They may not be able to visit their children's school or go to the dentist.",
        ],
      },
      {
        heading: "Ways to help",
        paragraphs: [
          "Tell them you are worried, carry on as usual, and offer your time to listen. Open questions that start with how, what, where or when can help people open up.",
          "Anxiety UK suggests being reliable and letting them know you are there if they need you. Ask what you can do rather than simply giving advice, because anxiety affects different people in very different ways.",
          "Little acts of kindness, like offering to go to professional appointments with them, can help.",
        ],
      },
      {
        heading: "Gentle, not forced",
        paragraphs: [
          "Do not force someone to talk to you or get help, or go to a GP on their behalf, as it might make them feel uncomfortable. Gently explore their reasons and listen without judgement.",
          "Simply explaining that their thoughts are unfounded will not always reassure them. Try not to make anxiety the only thing your relationship focuses on: they are much more than anxiety.",
        ],
      },
      {
        heading: "Encouraging support",
        paragraphs: [
          "Encourage them to try new things, take daily exercise, and explore support, such as self-help resources or support groups. If it is affecting their daily life, suggest they contact a GP, get help from NHS 111, or refer themselves to NHS talking therapies.",
          "Social anxiety can also affect children. Signs include avoiding interaction with other children and adults, fear of going to school, and being very reliant on their parents or carer, so speak to a GP if you are worried about your child.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "It can be upsetting to hear someone you care about in distress. Be kind to yourself and take some time to relax or do something you enjoy.",
          "NICE says parents and carers of a child with social anxiety may need help and support themselves, and should be offered an assessment of their own needs.",
        ],
      },
    ],
    helps: [
      "Tell them you are worried, and offer your time to listen.",
      "Ask how you can help, rather than simply giving advice.",
      "Carry on as usual, and do not make anxiety the only thing you talk about.",
      "Encourage them to explore support, without forcing them, and look after yourself too.",
      "Speak to a GP if you are worried about your child.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask how you can help.",
      "Listen without judgement.",
      "Do something you enjoy for yourself.",
    ],
    ask: "How can our family best support treatment for social anxiety, and is there support for us too?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "cancel",
          situation: "Your friend cancels plans again at the last minute.",
          options: [{ text: "Carry on as usual and keep in touch", best: true }, { text: "Stop inviting them" }],
          why: "Behaving differently can make someone feel more isolated. Do what you usually do, and offer kind words and a space to talk.",
        },
        {
          id: "boring",
          situation: "They tell you everyone at work thinks they are boring.",
          options: [{ text: "Listen, and ask how you can help", best: true }, { text: "Tell them the thought is silly" }],
          why: "Simply explaining that their thoughts are unfounded will not always reassure them. Ask what you can do rather than simply giving advice.",
        },
        {
          id: "not-ready",
          situation: "You think they need help, but they are not ready.",
          options: [{ text: "Gently explore their reasons", best: true }, { text: "Book a GP appointment for them" }],
          why: "Do not force someone to get help or go to a GP on their behalf. Gently explore their reasons and listen without judgement.",
        },
        {
          id: "worn-down",
          situation: "You feel worn down by worrying about them.",
          options: [{ text: "Take some time to do something you enjoy", best: true }, { text: "Ignore your own needs" }],
          why: "It can be upsetting to hear someone you care about in distress. Be kind to yourself and take some time to relax.",
        },
      ],
    },
    sources: [NICE_SAD, RCPSYCH_SHY, EMM_HELPING, AUK_SUPPORTING, NHS_SOCIAL, NICE_PARENTS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does Anxiety UK suggest instead of simply giving advice?",
      options: [{ text: "Asking what you can do to help", right: true }, { text: "Explaining why their worries are wrong" }, { text: "Making them see a GP" }],
      why: "Ask what you can do rather than simply giving advice, because anxiety affects different people in very different ways.",
    },
  },
  {
    id: "soc-support",
    kicker: "Support",
    question: "Where can I find support for social anxiety?",
    hook: "You are not the only one. Charities, groups and helplines offer information, courses and someone to talk to.",
    short: "Charities such as Anxiety UK and No Panic offer information, groups, courses and helplines, and you can refer yourself to NHS talking therapies without a GP. Support groups can help people feel understood and less alone. Samaritans and Shout are there any time if you need to talk.",
    sections: [
      {
        heading: "You are not the only one",
        paragraphs: [
          "Many other people feel anxious in social situations too, it just does not show. You are not the only one.",
          "The NHS lists several charities, support groups and online forums for people with social anxiety, including Anxiety UK, a HealthUnlocked anxiety forum run by Anxiety Support, Mind and YoungMinds, and Triumph Over Phobia.",
        ],
      },
      {
        heading: "Anxiety UK",
        paragraphs: [
          "Anxiety UK offers talking therapy, peer-led support groups and anxiety management courses for people aged 18 and over. It also has a self-care infoline for all ages, available 24 hours a day, 7 days a week.",
          "Its six-week, therapist-led anxiety management course runs online for 1 hour a week. Anxiety UK says it is not a crisis service.",
        ],
      },
      {
        heading: "No Panic and Triumph Over Phobia",
        paragraphs: [
          "No Panic specialises in self-help recovery for anxiety, including social phobia. Its helpline, 0300 772 9844, is open every day from 10am to 10pm.",
          "Triumph Over Phobia UK runs online self-help groups led by trained volunteers, many of whom have lived with phobias or OCD themselves. It is not accepting new referrals at the moment, but its support groups are still running.",
        ],
      },
      {
        heading: "Why a group can help",
        paragraphs: [
          "A support group is where people come together to share information and experiences, and give each other support. Hearing about the experiences of others can help you feel understood, less alone and more self-confident.",
          "Rethink says NHS recovery colleges offer free courses about mental health, and you can usually refer yourself, though they are not available in all areas.",
        ],
      },
      {
        heading: "If you need to talk now",
        paragraphs: [
          "Samaritans is free to call on 116 123, any time, day or night, from any phone. If you would rather not talk, you can text SHOUT to 85258 for free, confidential support, 24 hours a day.",
          "If you need urgent help for your mental health, call 111 and select the mental health option. Call 999 or go to A&E if you do not feel you can keep yourself safe.",
        ],
      },
    ],
    helps: [
      "Look into Anxiety UK's groups, courses and self-care infoline.",
      "Call the No Panic helpline, open every day from 10am to 10pm.",
      "Join a support group to feel understood and less alone.",
      "Refer yourself directly to an NHS talking therapies service.",
      CRISIS,
    ],
    tryThisWeek: [
      "Look at Anxiety UK's groups and courses.",
      "Save the No Panic helpline number.",
      "Find your local talking therapies service.",
    ],
    ask: "Are there local support groups or courses for social anxiety you would recommend?",
    interactive: {
      kind: "flip-cards",
      title: "Where to turn",
      intro: "Turn each card to see what each service offers and when to use it.",
      cards: [
        { id: "anxiety-uk", front: "Anxiety UK", when: "Information, therapy, groups and courses", back: "Peer-led groups and courses for over-18s, and a self-care infoline for all ages. Not a crisis service." },
        { id: "no-panic", front: "No Panic", when: "A helpline, every day", back: "Call 0300 772 9844 from 10am to 10pm. It specialises in self-help recovery." },
        { id: "top-uk", front: "Triumph Over Phobia UK", when: "Online self-help groups", back: "Groups run by trained volunteers, many with lived experience. New referrals are paused for now." },
        { id: "talking-therapies", front: "NHS talking therapies", when: "Without seeing a GP", back: "Refer yourself directly for help such as CBT or guided self-help." },
        { id: "samaritans", front: "Samaritans", when: "Any time, day or night", back: "Call 116 123 free from any phone. They listen and will not judge." },
        { id: "shout", front: "Shout", when: "If you would rather text", back: "Text SHOUT to 85258 for free, confidential support, 24 hours a day." },
      ],
    },
    sources: [NHS_SOCIAL, AUK_GET_HELP, AUK_COURSES, AUK_CONTACT, NOPANIC_HOME, NOPANIC_SOCIAL, TOPUK, RETHINK_ANX, CNTW_PHYSICAL, SAMARITANS, SHOUT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is Anxiety UK a crisis service?",
      options: [{ text: "No; for immediate help, call 111 or Samaritans", right: true }, { text: "Yes, it is a 24-hour crisis line" }, { text: "Only for under-18s" }],
      why: "Anxiety UK is not a crisis service. For immediate mental health support, it says to call 111, option 2, or Samaritans on 116 123.",
    },
  },
];
