import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Anger page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, NHS inform
// (Scotland's NHS), the Stroke Association, Headway, the Respect Phoneline and the Mental Health Foundation's
// Boiling Point report. mind.org.uk was not read (it blocks automated reading), so no Mind page is cited.
// Safe messaging throughout: harm and abuse are described only in general terms, with no detail of injuries or
// methods. Every answer ends its "What helps" list with the crisis routes exactly as the NHS gives them (999 or
// A&E, 111 mental health option, Samaritans 116 123, Shout 85258). General information only; it never replaces
// what a person's own GP or therapist tells them, and no medicine should be stopped or changed without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const inform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/${path}` });
const stroke = (label: string, path: string): LearnSource => ({ label: `Stroke Association: ${label}`, url: `https://www.stroke.org.uk/stroke/effects/${path}` });
const headway = (label: string, path: string): LearnSource => ({ label: `Headway: ${label}`, url: `https://www.headway.org.uk/${path}` });
const respect = (label: string, path: string): LearnSource => ({ label: `Respect Phoneline: ${label}`, url: `https://respectphoneline.org.uk/${path}` });

const NHS_ANGER = nhs("Get help with anger", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anger/");
const NHS_STRESS = nhs("Stress", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/stress/");
const NHS_DV = nhs("Domestic violence and abuse", "live-well/getting-help-for-domestic-violence/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_FIND_TT = nhs("Find NHS talking therapies for anxiety and depression", "nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_EMM_CBT = nhs("Every Mind Matters: Self-help CBT techniques", "every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/");
const NHS_BREATHING = nhs("Breathing exercises for stress", "mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/");
const NHS_STRESS_BUSTERS = nhs("10 stress busters", "mental-health/self-help/guides-tools-and-activities/tips-to-reduce-stress/");
const NHS_PTSD = nhs("PTSD (post-traumatic stress disorder)", "mental-health/conditions/ptsd-post-traumatic-stress-disorder/");
const NHS_SLEEP = nhs("Every Mind Matters: How to fall asleep faster and sleep better", "every-mind-matters/mental-wellbeing-tips/how-to-fall-asleep-faster-and-sleep-better/");
const NHS_UNITS = nhs("Alcohol units", "live-well/alcohol-advice/calculating-alcohol-units/");
const NHS_ALCOHOL_RISKS = nhs("The risks of drinking too much", "live-well/alcohol-advice/the-risks-of-drinking-too-much/");
const NHS_ALCOHOL_SUPPORT = nhs("Alcohol support", "live-well/alcohol-advice/alcohol-support/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const INFORM_GUIDE = inform("Problems with anger self-help guide", "illnesses-and-conditions/mental-health/mental-health-self-help-guides/problems-with-anger-self-help-guide/");
const INFORM_WHY = inform("Why am I so angry?", "healthy-living/mental-wellbeing/anger-management/why-am-i-so-angry/");
const INFORM_CONTROL = inform("How to control your anger", "healthy-living/mental-wellbeing/anger-management/how-to-control-your-anger/");

const STROKE_ANGER = stroke("Anger and frustration", "emotional-and-behavioural/anger-and-frustration");
const STROKE_EMOTIONAL = stroke("Emotional and behavioural changes", "emotional-and-behavioural");
const STROKE_TIPS = stroke("Tips for family and friends", "emotional-and-behavioural/tips");

const HEADWAY_BEHAVIOUR = headway("Behavioural effects of brain injury", "about-brain-injury/individuals/effects-of-brain-injury/behavioural-effects-of-brain-injury/");
const HEADWAY_TRIGGERS = headway("What triggers anger after brain injury?", "about-brain-injury/individuals/brain-injury-and-me/what-triggers-anger-after-brain-injury/");
const HEADWAY_10_WAYS = headway("10 ways to manage anger: tips for brain injury survivors", "about-brain-injury/individuals/brain-injury-and-me/10-ways-to-manage-anger-tips-for-brain-injury-survivors/");
const HEADWAY_HELPLINE = headway("Helpline", "supporting-you/helpline/");

const RESPECT_HELP = respect("Worried about your behaviour?", "help-to-change-your-behaviour/");
const RESPECT_ABUSIVE = respect("Is my behaviour abusive?", "help-to-change-your-behaviour/is-my-behaviour-abusive/");
const RESPECT_CHANGE = respect("Getting help and choosing to change", "help-to-change-your-behaviour/getting-help-and-choosing-to-change/");
const RESPECT_EXPECT = respect("What to expect", "what-to-expect/");

const SAMH: LearnSource = { label: "SAMH (Scottish Action for Mental Health): Anger", url: "https://www.samh.org.uk/about-mental-health/mental-health-problems/anger" };
const MHF_BOILING_POINT: LearnSource = { label: "Mental Health Foundation: Boiling Point, problem anger and what we can do about it (report, 2008)", url: "https://www.mentalhealth.org.uk/sites/default/files/2022-09/MHF-boiling-point-report_0.pdf" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact Samaritans", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SHOUT: LearnSource = { label: "Shout 85258: Get help", url: "https://giveusashout.org/get-help/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself or someone else safe.";

export const angerAnswers: LearnArticle[] = [
  {
    id: "anger-what-it-is",
    kicker: "Understanding",
    question: "When does anger become a problem?",
    hook: "Everyone gets angry. It becomes a problem when it starts to harm your relationships, your work or you.",
    short: "Anger is a normal, healthy emotion that everyone feels at times. It can become a problem when it gets out of control, or when it is bottled up or turned inwards. Problems with anger can affect relationships, work and self-esteem, and there are ways to learn to manage it.",
    sections: [
      {
        heading: "A normal, useful feeling",
        paragraphs: [
          "Anger is a normal, healthy emotion. It can alert you to a problem, motivate you to stand up for yourself, and help you stay safe by giving you a burst of energy as part of the fight or flight system.",
          "Most people will have episodes of anger that feel manageable and do not have a big impact on their lives.",
        ],
      },
      {
        heading: "When it gets out of control",
        paragraphs: [
          "For some people, anger can get out of control. It can cause problems in relationships and work, and even lead to legal problems.",
          "You might do or say things when you are angry that you regret or feel guilty about later. These problems can affect your self-esteem and your mood.",
        ],
      },
      {
        heading: "Anger is not the same as aggression",
        paragraphs: [
          "Aggression is how some people behave when they feel angry. Not everyone who feels angry is aggressive, and some people act aggressively because they feel afraid or threatened.",
          "Problems with anger can also mean not expressing it at all. Some people bottle up their feelings, which can lead to stress and unhappiness, and others turn their anger on themselves.",
        ],
      },
      {
        heading: "Hard to see in yourself",
        paragraphs: [
          "Sometimes people do not recognise that anger is a problem for them. They may see other people or things as the problem instead.",
          "In a YouGov survey of 1,974 adults for the Mental Health Foundation, 32 in every 100 said a close friend or family member had trouble controlling their anger. Only 12 in every 100 said they had trouble controlling their own.",
        ],
      },
    ],
    helps: [
      "Learn to recognise your own signs of anger, so you can take steps to calm down as early as possible.",
      "Talk to someone who is not connected to the situation, such as a friend or a GP.",
      "Remember that most people feel angry sometimes, and support is available.",
      "See a GP if you are struggling to cope with anger, or acting in an abusive or violent way.",
      CRISIS,
    ],
    tryThisWeek: [
      "Notice your own signs of anger.",
      "Talk to someone outside the situation.",
      "Remember that support is available.",
    ],
    ask: "Could my anger be a problem, and what help is there for me?",
    interactive: {
      kind: "signs",
      title: "Signs anger may be causing problems",
      intro: "Tick any that sound familiar. They come from the NHS lists of how anger can show itself.",
      signs: ["Feeling tense or unable to relax", "Being easily irritated", "Shouting", "Ignoring people or sulking", "Starting fights", "Breaking things", "Saying hurtful things you regret", "Bottling feelings up", "Storming out of situations"],
      after: "If anger is affecting your life, talk to someone you trust or a GP. You can also refer yourself to NHS talking therapies.",
      copyHeading: "Anger signs I have noticed",
    },
    sources: [INFORM_WHY, INFORM_GUIDE, SAMH, NHS_ANGER, MHF_BOILING_POINT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is anger always a bad emotion?",
      options: [{ text: "No, it is normal and can be useful", right: true }, { text: "Yes, it should always be stopped" }, { text: "Only when other people see it" }],
      why: "Anger is a normal, healthy emotion. It can alert you to a problem, motivate you to stand up for yourself, and help you stay safe.",
    },
  },
  {
    id: "anger-body",
    kicker: "Your body",
    question: "What happens in my body when I get angry?",
    hook: "A racing heart, a tight chest, clenched fists: anger switches on your body's alarm. Learning its signs gives you an early warning.",
    short: "When anger is triggered, the brain's threat system sets off the fight, flight or freeze response, and the body gets ready to act. Your heart beats faster, your muscles tense and you may feel hot. Noticing these changes early gives you a chance to calm down before you react.",
    sections: [
      {
        heading: "The body's alarm",
        paragraphs: [
          "When anger is triggered, or you feel threatened, your body reacts in specific ways. The brain's threat system sets off the fight, flight or freeze response, preparing the body to defend itself, run away or stay still.",
          "When you are anxious or scared, your body releases stress hormones such as adrenaline and cortisol. These can cause physical symptoms such as a faster heartbeat or sweating.",
        ],
      },
      {
        heading: "What you may feel",
        paragraphs: [
          "Physical signs of anger include a faster heartbeat, tense muscles, clenching your fists, tightness in your chest and feeling hot.",
          "You may also sweat, feel light-headed or have shaky legs, breathe quickly and shallowly, or feel restless with an urge to do something.",
        ],
      },
      {
        heading: "Flipping your lid",
        paragraphs: [
          "The frontal lobe of your brain handles planning, problem solving and thinking about consequences. The amygdala, part of your emotional brain, is always scanning for threats.",
          "When the threat response is triggered, the frontal lobe temporarily goes offline and the emotional brain takes over. This stops you thinking rationally, and it is often called flipping your lid.",
        ],
      },
      {
        heading: "False alarms",
        paragraphs: [
          "The brain is overly cautious, and it responds in the same way to an imagined threat as to a real one. After traumatic events, the threat system can become oversensitive and easily triggered.",
          "This sensitivity can reduce over time by learning to notice false alarms and developing calming techniques and coping skills.",
        ],
      },
      {
        heading: "An early warning system",
        paragraphs: [
          "Noticing the changes in your body can give you an early warning that you are becoming angry, so you can take steps to feel calmer.",
          "Headway suggests practising noticing how tense your body feels when you are angry, then relaxing and feeling the difference. Controlled breathing can help bring the thinking part of your brain back online.",
        ],
      },
    ],
    helps: [
      "Learn your body's warning signs, such as a fast heartbeat, quick breathing, tension in your shoulders or clenched fists.",
      "If you notice these signs and have a history of losing control, get out of the situation, walking away if possible.",
      "Try breathing out for longer than you breathe in, and relax as you breathe out.",
      "Practise noticing how tense your body feels when you are angry, then relax and feel the difference.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note your body's anger warning signs.",
      "Practise a longer out-breath.",
      "Notice tension, then let it go.",
    ],
    ask: "Could stress or anything else be making my body react so strongly when I am angry?",
    interactive: {
      kind: "timeline",
      title: "From trigger to calm",
      steps: [
        { id: "trigger", when: "Step 1", title: "Something sets it off", points: ["You feel threatened, treated unfairly or interrupted.", "Your brain's threat system switches on."] },
        { id: "alarm", when: "Step 2", title: "The alarm sounds", points: ["The amygdala reacts to a threat, real or imagined.", "Fight, flight or freeze begins."] },
        { id: "body", when: "Step 3", title: "Your body gets ready", points: ["Your heart beats faster and your muscles tense.", "You may feel hot, shaky or restless."] },
        { id: "lid", when: "Step 4", title: "Thinking goes offline", points: ["The frontal lobe steps back for a while.", "The emotional brain takes over."] },
        { id: "calm", when: "Step 5", title: "Calming brings it back", points: ["Controlled breathing calms the threat response.", "The thinking part of your brain comes back online."] },
      ],
    },
    sources: [INFORM_GUIDE, NHS_ANGER, INFORM_CONTROL, NHS_STRESS, HEADWAY_10_WAYS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What can noticing the changes in your body give you?",
      options: [{ text: "An early warning, so you can calm down", right: true }, { text: "Proof that you are in danger" }, { text: "Nothing useful" }],
      why: "Noticing the changes in your body can give you an early warning that you are becoming angry, so you can take steps to feel calmer.",
    },
  },
  {
    id: "anger-causes",
    kicker: "Causes",
    question: "Why do I get so angry? What lies underneath?",
    hook: "Anger is often the tip of something bigger: stress, hurt, fear, grief or old experiences that never had a voice.",
    short: "There are many causes of anger, and they are different for everyone. Common ones include being treated unfairly, feeling threatened or powerless, and stress. Anger can also come from low mood, anxiety, loss and trauma, and how you learned to deal with anger growing up can shape how you react.",
    sections: [
      {
        heading: "Common sparks",
        paragraphs: [
          "Common things that make people angry include being treated unfairly and feeling powerless to do anything about it, feeling threatened or attacked, and other people not respecting you, your feelings or your property.",
          "Being interrupted when you are trying to achieve a goal, and stressful everyday things like rush hour traffic or paying bills, can set it off too. Some of the things that make you angry may not bother other people at all.",
        ],
      },
      {
        heading: "Feelings underneath",
        paragraphs: [
          "Sometimes problems with anger are a sign of other issues. It is common for people dealing with anxiety and depression to experience anger, and anger can also come from low mood, loss and difficult life circumstances.",
          "Often when people show anger, they also feel scared, or feel there is a threat. Asking yourself what you could be scared of can give you a different set of choices about how to respond.",
          "Grief can make other difficult emotions harder to cope with, and experiencing a loss can trigger feelings of anger.",
        ],
      },
      {
        heading: "Past experiences",
        paragraphs: [
          "You may have learned unhelpful ways of dealing with anger from the adults around you as a child. If you were taught to bottle up angry feelings, or to shout, it can be hard to express anger in a healthy way.",
          "People who go through traumatic, frightening or stressful events sometimes develop post-traumatic stress disorder (PTSD), which can lead to angry outbursts. Being more irritable or angry than usual is one of the symptoms of PTSD.",
        ],
      },
      {
        heading: "Pressures that make it harder",
        paragraphs: [
          "If you are dealing with lots of problems or stress, you may find it harder to control your anger. When people are stressed, tired or dealing with other problems, they are more sensitive to triggers.",
          "Drugs and alcohol make some people act more aggressively than usual. Some medication, including some prescribed medication, can also make people feel angry.",
          "Money problems, upsetting posts on social media and pressure from people around you can also make anger harder to manage.",
        ],
      },
      {
        heading: "Talking it through",
        paragraphs: [
          "You might find it hard to explain why you feel this way, but talking to someone could help you find a solution. If you think anger may be a sign of trauma, grief, anxiety or low mood, you can discuss this with your GP.",
        ],
      },
    ],
    helps: [
      "Ask yourself what you are really reacting to, and whether other worries, like stress about a bill, are behind it.",
      "Ask yourself what you could be scared of, as this can give you different choices about how to respond.",
      "Try not to use alcohol, cigarettes, gambling or drugs to relieve anger.",
      "If anger may be linked to trauma, grief, anxiety or low mood, talk to your GP.",
      "See a GP if you think you have symptoms of PTSD.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask what you are really reacting to.",
      "Ask what you might be scared of.",
      "Try not to use alcohol to relieve anger.",
    ],
    ask: "Could stress, low mood, past trauma or my medicines be behind my anger?",
    interactive: {
      kind: "risk-check",
      title: "What can make anger harder to control",
      intro: "Tick any that apply to you. Some of these can change; others are part of your story, and talking about them can help.",
      items: [
        { id: "stress", label: "Lots of stress or problems", note: "If you are dealing with lots of problems or stress, you may find it harder to control your anger.", changeable: true },
        { id: "tired", label: "Being tired", note: "When people are stressed or tired, they are more sensitive to anger triggers.", changeable: true },
        { id: "alcohol", label: "Alcohol or drugs", note: "Drugs and alcohol make some people act more aggressively than usual.", changeable: true },
        { id: "money", label: "Money worries", note: "A difficult financial situation creates a lot of stress. Citizens Advice can give information on managing debt.", changeable: true },
        { id: "mood", label: "Anxiety, low mood or grief", note: "Anger can be a sign of these. You can discuss this with your GP.", changeable: true },
        { id: "family", label: "How anger was handled growing up", note: "You may have learned unhelpful ways of dealing with anger from the adults around you as a child.", changeable: false },
        { id: "trauma", label: "Traumatic or frightening events", note: "Trauma can lead to PTSD, which can bring angry outbursts. NHS talking therapies can help with PTSD.", changeable: false },
      ],
    },
    sources: [NHS_ANGER, INFORM_WHY, INFORM_GUIDE, NHS_PTSD, INFORM_CONTROL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which of these can make it harder to control anger?",
      options: [{ text: "Being stressed or tired", right: true }, { text: "Getting enough sleep" }, { text: "Talking to a friend" }],
      why: "When people are stressed, tired or dealing with other problems, they are more sensitive to triggers.",
    },
  },
  {
    id: "anger-illness",
    kicker: "After illness or injury",
    question: "Why am I angrier since my stroke or brain injury?",
    hook: "Many people lose their temper more easily after a stroke or brain injury. It is a known effect, and there is help for it.",
    short: "Many people get frustrated or angry after a stroke or brain injury. It can come from changes in the brain, or from adjusting to a changed life, and things that never bothered you before can become triggers. Learning your triggers, finding ways to calm down and asking your GP or team for help can all make a difference.",
    sections: [
      {
        heading: "A common change",
        paragraphs: [
          "Many people find themselves getting frustrated or angry after their stroke. This may come from changes in the brain and in thinking skills, or from trying to adjust to the impact of the stroke.",
          "Brain injury survivors may get irritated or angry more quickly than before, and things that did not bother them before can become triggers. Someone who was usually calm may struggle with managing their anger after the injury.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "If the part of your brain that controls emotions is damaged, it can affect how you experience and express them. Behaviour can also change because of thinking problems, pain or fatigue.",
          "Frustration is natural too. You may feel frustrated about not being able to do everything you used to, relying more on other people, things taking longer, or not being able to find the right word.",
        ],
      },
      {
        heading: "Common triggers",
        paragraphs: [
          "After brain injury, common triggers include temperature or noise, others not understanding the impact of the injury, forgetting things, being interrupted while concentrating, and not getting a good night's sleep.",
          "Some survivors may not recognise their behaviour as a problem, or may not remember an outburst at all. In some cases there is remorse afterwards.",
        ],
      },
      {
        heading: "What can help",
        paragraphs: [
          "Doing something physical, like going for a walk, can help you let off steam, and relaxation techniques can help you release tension. Keeping a diary of when you felt angry and how you reacted can help you spot patterns.",
          "You could agree a word, phrase or sign with family and friends to let you know you are becoming angry, so you can take a step back and calm down.",
          "Headway says managing anger is not about taking it away, but about giving you control and choice.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "Aggressive behaviour puts you and other people at risk. If you need support, contact your GP or stroke team, who may refer you for expert help.",
          "Clinical neuropsychologists and psychologists with experience in brain injury can often help. The Headway helpline on 0808 800 2244 and the Stroke Association's Stroke Support Helpline on 0303 3033 100 offer information and support.",
        ],
      },
    ],
    helps: [
      "Talk to friends and family to work out what makes you angry, and how you can avoid or manage it.",
      "Keep a diary of times you felt angry and how you reacted, to spot patterns.",
      "Agree a word, phrase or sign with loved ones that tells you to step back and calm down.",
      "Try to keep a regular sleep routine, as being tired can make you irritable.",
      "If anger is causing a problem, speak to your doctor, who may refer you to a specialist such as a neuropsychologist.",
      CRISIS,
    ],
    tryThisWeek: [
      "Start a diary of angry moments.",
      "Agree a calm-down sign at home.",
      "Keep a regular sleep routine.",
    ],
    ask: "Could my anger be an effect of my stroke or brain injury, and can I be referred to a neuropsychologist?",
    interactive: {
      kind: "flip-cards",
      title: "Who can help after a stroke or brain injury",
      intro: "Turn each card to see what each can offer.",
      cards: [
        { id: "gp", front: "Your GP", when: "A good place to start", back: "May be able to refer you to an appropriate service that can help with behavioural effects." },
        { id: "team", front: "Your stroke or rehab team", when: "If you are under their care", back: "May help manage behavioural effects, or refer you for expert help." },
        { id: "neuro", front: "A neuropsychologist", when: "If anger is causing a problem", back: "Can assess what is going on, and rehabilitation can be recommended to help you cope." },
        { id: "therapy", front: "Talking therapies", when: "For the feelings underneath", back: "Counselling, CBT or compassion-focused therapy may help with the emotions behind behaviour changes." },
        { id: "headway", front: "Headway helpline", when: "Monday to Friday, 9am to 5pm", back: "A free, confidential, nurse-led helpline for survivors and carers: 0808 800 2244." },
        { id: "stroke", front: "Stroke Support Helpline", when: "Anyone affected by stroke", back: "Information and support for survivors, family, friends and carers: 0303 3033 100." },
      ],
    },
    sources: [STROKE_ANGER, STROKE_EMOTIONAL, HEADWAY_BEHAVIOUR, HEADWAY_TRIGGERS, HEADWAY_10_WAYS, HEADWAY_HELPLINE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "After a brain injury, can things that never bothered you before become anger triggers?",
      options: [{ text: "Yes, this is common", right: true }, { text: "No, triggers never change" }, { text: "Only in the first week" }],
      why: "Brain injury survivors may get irritated or angry more quickly than before, and things that did not bother them before can become triggers.",
    },
  },
  {
    id: "anger-in-the-moment",
    kicker: "In the moment",
    question: "How can I calm down when I feel anger rising?",
    hook: "Counting to 10, slowing your breath, stepping away: small actions in the moment can stop anger running the show.",
    short: "Give yourself time to think before reacting: try counting to 10 and calming breathing. Slow breathing, with a longer out-breath, calms the body's alarm so you can think more clearly. If anger is building, a time out, walking away calmly, can stop things getting worse.",
    sections: [
      {
        heading: "Buy yourself time",
        paragraphs: [
          "Give yourself time to think before reacting. Try counting to 10 and doing calming breathing exercises.",
          "Counting gives you time to cool down, think more clearly and overcome the impulse to lash out.",
        ],
      },
      {
        heading: "Slow your breathing",
        paragraphs: [
          "You automatically breathe in more than out when you are angry. Breathing out for longer than you breathe in, and relaxing as you breathe out, can calm you down and help you think more clearly.",
          "NHS inform suggests breathing in for 4 seconds, holding for 1 second or more, then breathing out for 4 seconds, in through your nose and out through your mouth. Saying a calming word in your mind between breaths, such as relax or stay calm, can help.",
          "The goal of controlled breathing is to calm the fight, flight or freeze response, so you have time to think before you react. It helps whether you tend to lose your temper or hold your anger in.",
        ],
      },
      {
        heading: "Take a time out",
        paragraphs: [
          "When your anger reaches a certain level, it can be important to leave the situation before it gets worse. Aim to walk out, not storm out, and let people know where you are going.",
          "During a time out, do something that calms you down, like a relaxation exercise, listening to music or going for a walk. Avoid driving when you are angry.",
          "Once you feel calmer, think about what triggered your anger and how you are going to deal with the problem.",
        ],
      },
      {
        heading: "Distract and soothe",
        paragraphs: [
          "Distraction can help you get past the worst of the feeling. Going for a quick walk, doing a hobby you enjoy or phoning a friend can all ease distress.",
          "Headway suggests thinking of someone who normally calms you down, and what they might say, or of a special calming place, piece of music or picture.",
        ],
      },
      {
        heading: "Practise when you are calm",
        paragraphs: [
          "Try to practise breathing and relaxation when you are feeling fairly calm, so you can focus on learning the techniques. The NHS breathing exercise suggests breathing gently, counting from 1 to 5 in and out, for at least 5 minutes.",
          "Over time, you may need time outs less, because you will be able to deal with situations before they get to that point.",
        ],
      },
    ],
    helps: [
      "Count to 10 before reacting.",
      "Breathe out for longer than you breathe in, and relax as you breathe out.",
      "Walk out, not storm out, and let people know where you are going.",
      "Avoid driving when you are angry.",
      "Practise breathing exercises regularly, starting when you are feeling fairly calm.",
      CRISIS,
    ],
    tryThisWeek: [
      "Count to 10 before reacting.",
      "Try a longer out-breath.",
      "Practise breathing while calm.",
    ],
    ask: "Are there breathing or relaxation techniques you would recommend for me?",
    interactive: {
      kind: "timeline",
      title: "A time out, step by step",
      steps: [
        { id: "notice", when: "Step 1", title: "Notice the signs", points: ["A fast heartbeat, tense shoulders or clenched fists.", "Your early warning that anger is building."] },
        { id: "breathe", when: "Step 2", title: "Slow your breathing", points: ["Breathe in for 4 seconds, out for 4.", "Say a calming word between breaths."] },
        { id: "leave", when: "Step 3", title: "Walk out, not storm out", points: ["Let people know where you are going.", "Avoid driving when you are angry."] },
        { id: "calm", when: "Step 4", title: "Do something calming", points: ["Listen to music or go for a walk.", "Let your brain's alarm switch off."] },
        { id: "return", when: "Step 5", title: "Come back to the problem", points: ["Think about what triggered your anger.", "Plan what you want to say."] },
      ],
    },
    sources: [NHS_ANGER, INFORM_GUIDE, INFORM_CONTROL, NHS_BREATHING, HEADWAY_10_WAYS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does NHS inform suggest when you take a time out?",
      options: [{ text: "Walk out, not storm out, and say where you are going", right: true }, { text: "Leave without a word" }, { text: "Drive somewhere to cool off" }],
      why: "Aim to walk out, not storm out, and let people know where you are going. Avoid driving when you are angry.",
    },
  },
  {
    id: "anger-talking",
    kicker: "Treatment",
    question: "What is anger management, and can therapy help?",
    hook: "Anger management is not about never feeling angry. It is about learning skills, often with CBT, to handle anger differently.",
    short: "An anger management programme may involve one-to-one counselling and group work, and most include cognitive behavioural therapy (CBT). A GP may be able to refer you to a local programme or counselling. You can also refer yourself to NHS talking therapies for CBT, without seeing a GP.",
    sections: [
      {
        heading: "What a programme involves",
        paragraphs: [
          "A typical anger management programme may involve 1-to-1 counselling and working in a group. It may be a 1-day or weekend course, or run over a couple of months.",
          "The structure depends on who provides it, but most programmes include cognitive behavioural therapy (CBT) as well as counselling.",
        ],
      },
      {
        heading: "How CBT helps",
        paragraphs: [
          "CBT is a talking therapy where a therapist helps you change how you think and act. It is based on the idea that your thoughts, feelings and actions are connected.",
          "In a typical session, you talk about situations you find difficult and how they make you think, feel and act. You may work on questioning unhelpful thoughts, noticing emotions without reacting to them, and changing what you do.",
          "You will usually have between 5 and 15 sessions, and you will be asked to practise what you learn between sessions.",
        ],
      },
      {
        heading: "Ways to get it",
        paragraphs: [
          "Your GP may be able to refer you to a local anger management programme or counselling.",
          "You can also refer yourself directly to NHS talking therapies for free therapy such as CBT, without a GP referral. You need to be 18 or over, or 16 or over in some areas, and you do not need a diagnosed mental health condition.",
        ],
      },
      {
        heading: "Private courses and therapists",
        paragraphs: [
          "There are also private courses and therapists who can help with anger issues. Make sure any therapist you see is registered with a professional organisation, such as the British Association for Counselling and Psychotherapy.",
          "Talking therapies are sometimes available for free through your employer, university or local charities.",
        ],
      },
      {
        heading: "Starting on your own",
        paragraphs: [
          "You can try self-help CBT techniques to manage unhelpful thoughts and stressful situations, and to solve problems. NHS inform has an anger self-help guide based on CBT, for people with mild to moderate problems with anger.",
          "Working through that guide can take around an hour, but you can go at your own pace. Putting its advice into practice will take time.",
        ],
      },
    ],
    helps: [
      "Ask your GP about local anger management programmes or counselling.",
      "Refer yourself to NHS talking therapies if you are 18 or over, or 16 or over in some areas.",
      "Practise what you learn between CBT sessions; it is important for CBT to work.",
      "Check that any private therapist is registered with a professional organisation.",
      "Try self-help CBT techniques, such as the NHS inform anger self-help guide.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask your GP about local courses.",
      "Look up NHS talking therapies.",
      "Try a self-help CBT technique.",
    ],
    ask: "Is there an anger management course near me, or can I be referred for CBT?",
    interactive: {
      kind: "flip-cards",
      title: "Ways to get help with anger",
      intro: "Turn each card to see what each option involves.",
      cards: [
        { id: "programme", front: "Anger management programme", when: "Through a GP, or privately", back: "One-to-one counselling and group work, often with CBT. It may be a day, a weekend or a couple of months." },
        { id: "cbt", front: "CBT", when: "Usually 5 to 15 sessions", back: "A therapist helps you change how you think and act. You practise what you learn between sessions." },
        { id: "counselling", front: "Counselling", when: "Talking it through", back: "You talk to a therapist about your thoughts, feelings and life experiences, and find your own solutions." },
        { id: "self-refer", front: "NHS talking therapies", when: "Age 18 or over, or 16 in some areas", back: "You can refer yourself, without a GP. You do not need a diagnosis." },
        { id: "self-help", front: "Self-help guide", when: "For mild to moderate problems", back: "NHS inform's CBT-based anger guide takes around an hour, at your own pace." },
        { id: "private", front: "Private therapist", when: "If you choose to pay", back: "Check they are registered with a professional organisation, such as the British Association for Counselling and Psychotherapy." },
      ],
    },
    sources: [NHS_ANGER, INFORM_CONTROL, NHS_CBT, NHS_TT, NHS_FIND_TT, INFORM_GUIDE, NHS_EMM_CBT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need a GP referral for NHS talking therapies?",
      options: [{ text: "No, you can refer yourself", right: true }, { text: "Yes, always" }, { text: "Only with a diagnosis" }],
      why: "You can also refer yourself directly to NHS talking therapies for free therapy such as CBT, without a GP referral.",
    },
  },
  {
    id: "anger-triggers",
    kicker: "Triggers",
    question: "How do I work out what sets off my anger?",
    hook: "Your anger has patterns. Writing down when it flares, and what you were thinking, helps you see them coming.",
    short: "Everyone has different triggers, and people are more sensitive to them when stressed, tired or dealing with other problems. Keeping a diary of when you felt angry, what happened and what you thought can help you spot patterns. Once you know your triggers, you can avoid some and plan how to handle others.",
    sections: [
      {
        heading: "Common triggers",
        paragraphs: [
          "Everyone has different triggers. Common ones include being treated unfairly, feeling criticised, feeling put down or embarrassed, being let down by someone, and losing out on something you wanted.",
          "When people are stressed, tired or dealing with other problems, they are more sensitive to triggers like these.",
        ],
      },
      {
        heading: "Keep a diary",
        paragraphs: [
          "NHS inform suggests using a diary over a week or 2 to record the times you have been angry and what triggered it. Write down where you were, who was there, what you felt, what you did and what you were thinking.",
          "The Stroke Association also suggests keeping a diary about situations where you felt angry and how you reacted, to help spot any patterns or triggers.",
        ],
      },
      {
        heading: "Spot unhelpful thinking",
        paragraphs: [
          "Some patterns of thinking can fuel anger. They include jumping to conclusions, assuming you know what others are thinking, black and white thinking, and taking things personally.",
          "Words like always, never, should, must and not fair can make anger worse. Saying it bothers me when you do that, rather than you always do that, can lower the tension.",
          "To challenge a thought, ask what the evidence is for and against it, whether it is a fact or an opinion, and what you would say to a friend who had it.",
        ],
      },
      {
        heading: "Plan around your triggers",
        paragraphs: [
          "If the same triggers come up again and again, consider whether there is a way to avoid them, or to manage the situation differently.",
          "Headway suggests discussing your triggers with family, friends and colleagues, changing your surroundings if noise, heat or crowds are a problem, and limiting time on the news or social media if it sets you off.",
        ],
      },
    ],
    helps: [
      "Keep an anger diary for a week or 2: the situation, your feelings, what you did and what you thought.",
      "Notice when you are stressed or tired, as you are more sensitive to triggers then.",
      "Swap words like always and never for how you feel, such as it bothers me when you do that.",
      "Discuss your triggers with family, friends and colleagues.",
      "If the same trigger keeps coming up, look for a way to avoid it or manage it differently.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep an anger diary this week.",
      "Swap always and never for how you feel.",
      "Tell someone close about your triggers.",
    ],
    ask: "Could you help me understand what is behind my anger triggers?",
    interactive: {
      kind: "signs",
      title: "My anger triggers",
      intro: "Tick the ones that set you off. Your list can help you plan, and you can share it with someone you trust.",
      signs: ["Being treated unfairly", "Feeling criticised", "Being put down or embarrassed", "Being let down by someone", "Being interrupted", "Feeling threatened", "Noise, heat or crowds", "Being tired", "The news or social media", "Money worries"],
      after: "If the same triggers keep coming up, think about whether you can avoid them or manage the situation differently.",
      copyHeading: "My anger triggers",
    },
    sources: [INFORM_GUIDE, NHS_ANGER, STROKE_ANGER, HEADWAY_TRIGGERS, INFORM_CONTROL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does NHS inform suggest writing in an anger diary?",
      options: [{ text: "The situation, your feelings, what you did and what you thought", right: true }, { text: "Only who made you angry" }, { text: "Nothing; it is best to forget" }],
      why: "Write down where you were, who was there, what you felt, what you did and what you were thinking.",
    },
  },
  {
    id: "anger-gp",
    kicker: "Getting help",
    question: "When should I see a GP about my anger?",
    hook: "If self-help is not working, or anger is spilling into violence or abuse, a GP is a good next step. Many people never ask.",
    short: "See a GP if you are struggling to cope with anger, the things you are doing to help are not working, or you are acting in an abusive or violent way. A GP can talk about what may be behind it, such as stress, anxiety, depression or trauma, and may refer you to an anger management programme or counselling.",
    sections: [
      {
        heading: "When to make an appointment",
        paragraphs: [
          "See a GP if you are struggling to cope with anger, or the things you are doing to help yourself are not working.",
          "Also see a GP if you are acting in an abusive or violent way, if you are struggling to cope with stress, anxiety or depression, or if you have had a low mood for more than 2 weeks.",
        ],
      },
      {
        heading: "If anger has caused harm",
        paragraphs: [
          "If your anger has caused you to harm other people, or yourself, and it is having a destructive effect on your life, visit your GP or look for local services to help you cope.",
          "If you are worried you are behaving abusively in your relationship, you can call the free Respect Phoneline on 0808 802 4040.",
        ],
      },
      {
        heading: "What a GP can do",
        paragraphs: [
          "Your GP may be able to refer you to a local anger management programme or counselling.",
          "If you think your anger may be a sign of something underneath, like trauma, grief, anxiety or low mood, you can discuss this with your GP. Veterans can ask their GP about specialist services.",
          "After a brain injury, a doctor may be able to refer you to a specialist such as a neuropsychologist.",
        ],
      },
      {
        heading: "Many people never ask",
        paragraphs: [
          "In a YouGov survey for the Mental Health Foundation, fewer than 1 in 7 people who said they had trouble controlling their anger had sought help. Those who did were most likely to go to a health professional, such as a counsellor, therapist, GP or nurse.",
          "The Mental Health Foundation found that people with problem anger often fail to recognise it as a problem, or feel ashamed to seek help for it.",
        ],
      },
      {
        heading: "Other routes",
        paragraphs: [
          "You can refer yourself to NHS talking therapies without speaking to a GP. If you are not sure whether talking therapies is right for you, a GP can offer advice and help you find out what is available.",
        ],
      },
    ],
    helps: [
      "See a GP if anger is hard to cope with, or the things you are trying are not working.",
      "Tell a GP if you are acting in an abusive or violent way.",
      "Mention it if you have had a low mood for more than 2 weeks, or are struggling with stress, anxiety or depression.",
      "Ask whether there is a local anger management programme or counselling.",
      "Refer yourself to NHS talking therapies if you would rather not go through a GP.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment if anger is hard to cope with.",
      "Note how long any low mood has lasted.",
      "Ask about local anger courses.",
    ],
    ask: "Could something else be making me irritable, and is there an anger management course near me?",
    interactive: {
      kind: "scenarios",
      title: "Is it time to get help?",
      scenarios: [
        {
          id: "not-working",
          situation: "You have tried counting and breathing for weeks, but nothing is changing.",
          options: [{ text: "Book a GP appointment", best: true }, { text: "Keep struggling alone" }],
          why: "See a GP if the things you are doing to help yourself are not working.",
        },
        {
          id: "low-mood",
          situation: "You have felt low for about a month, and you snap at everyone.",
          options: [{ text: "See a GP about your mood", best: true }, { text: "Wait for it to pass" }],
          why: "See a GP if you have had a low mood for more than 2 weeks, or are struggling with stress, anxiety or depression.",
        },
        {
          id: "harm",
          situation: "In an argument, you broke something and frightened your partner.",
          options: [{ text: "Get help: a GP or the Respect Phoneline", best: true }, { text: "Tell yourself it will not happen again" }],
          why: "See a GP if you are acting in an abusive or violent way. If you are worried you are behaving abusively, the free Respect Phoneline is on 0808 802 4040.",
        },
        {
          id: "unsure",
          situation: "You are not sure whether talking therapies is right for you.",
          options: [{ text: "Ask a GP for advice", best: true }, { text: "Do nothing for now" }],
          why: "A GP can offer advice and help you find out what is available in your area.",
        },
      ],
    },
    sources: [NHS_ANGER, INFORM_GUIDE, HEADWAY_10_WAYS, NHS_TT, MHF_BOILING_POINT, NHS_DV, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long of a low mood does the NHS give as one reason to see a GP?",
      options: [{ text: "More than 2 weeks", right: true }, { text: "One bad day" }, { text: "Over a year" }],
      why: "See a GP if you have had a low mood for more than 2 weeks.",
    },
  },
  {
    id: "anger-relationships",
    kicker: "Relationships",
    question: "How do I stop anger hurting the people I love, and repair things after?",
    hook: "Anger often lands on the people closest to us. Clear, calm words and owning what happened can help rebuild trust.",
    short: "Problems with anger can harm relationships, and people around you may be afraid to say what they think. Assertive communication, saying how you feel calmly and clearly with I statements, helps you be understood without attacking anyone. If you snap at someone, apologising and talking it over can help.",
    sections: [
      {
        heading: "How anger affects others",
        paragraphs: [
          "Problems with anger can have a negative effect on your relationships. Other people might be afraid to tell you what they think and feel, because they are worried about how you will react.",
          "In a YouGov survey for the Mental Health Foundation, 20 in every 100 people said they had ended a relationship or friendship because of how someone behaved when they were angry.",
        ],
      },
      {
        heading: "Four ways of communicating",
        paragraphs: [
          "NHS inform describes 4 main communication styles: passive, aggressive, passive aggressive and assertive. Shouting or talking over people can make others afraid of you, while sarcasm and the silent treatment leave people guessing.",
          "Being assertive means expressing your needs and wants in a way that is calm, clear and considerate. Because anger is often triggered by poor communication, being assertive makes it less likely you will struggle with anger day to day.",
        ],
      },
      {
        heading: "Words that help",
        paragraphs: [
          "Say what you think or feel using I statements, and do not blame or attack the other person. Try saying I am getting annoyed, rather than you are annoying me.",
          "Keep the volume of your voice steady and your tone calm. Listen, and check you have understood by saying back what you heard.",
          "For a conversation that might be difficult, choose a private place and a time when neither of you is busy. Writing a script or practising it first can help.",
        ],
      },
      {
        heading: "After an outburst",
        paragraphs: [
          "You might do or say things when you are angry that you regret later. Once you feel calmer, think about what triggered your anger and what you want to say to the other person.",
          "One member of Headway's online community said that if they snap at someone, they apologise as soon as possible and talk it over. Being assertive includes forgiving yourself and others for making mistakes.",
        ],
      },
      {
        heading: "For family and friends",
        paragraphs: [
          "If someone's behaviour upsets you, you have a right to tell them, but keep the focus on their behaviour and how it makes you feel. You could say it upsets me when you shout, rather than you are always upsetting me.",
          "Look after your own safety, and do not feel bad about walking away. If someone becomes verbally or physically aggressive, try not to raise your voice, and call 999 if you are in immediate danger.",
        ],
      },
    ],
    helps: [
      "Use I statements to say how you feel, without blaming or attacking.",
      "Keep the volume of your voice steady and your tone calm.",
      "Listen, and check you have understood before you reply.",
      "Choose a private, unhurried time for difficult conversations, and plan what you want to say.",
      "If you snap at someone, apologise as soon as possible and talk it over.",
      CRISIS,
    ],
    tryThisWeek: [
      "Use one I statement this week.",
      "Check you understood before replying.",
      "Plan one difficult conversation.",
    ],
    ask: "Is there support for my family, as well as for me?",
    interactive: {
      kind: "scenarios",
      title: "Saying it differently",
      scenarios: [
        {
          id: "cancel",
          situation: "A friend cancels plans with you at the last minute.",
          options: [{ text: "Say you are disappointed, and why", best: true }, { text: "Say \"that's just great\" sarcastically" }],
          why: "Say what you mean clearly. Sarcasm expects people to guess what you are thinking.",
        },
        {
          id: "noise",
          situation: "Someone is being noisy while you are trying to concentrate.",
          options: [{ text: "Calmly ask them to keep it down", best: true }, { text: "Shout at them to be quiet" }],
          why: "Keep the volume of your voice steady and your tone calm.",
        },
        {
          id: "blame",
          situation: "You feel your patience running out with your partner.",
          options: [{ text: "Say: I am getting annoyed", best: true }, { text: "Say: you are annoying me" }],
          why: "Say what you think or feel using I statements, and do not blame or attack the other person.",
        },
        {
          id: "after",
          situation: "You snapped at someone earlier and feel bad about it.",
          options: [{ text: "Apologise and talk it over", best: true }, { text: "Act as if it never happened" }],
          why: "One member of Headway's online community said that if they snap at someone, they apologise as soon as possible and talk it over.",
        },
      ],
    },
    sources: [INFORM_GUIDE, INFORM_CONTROL, STROKE_TIPS, MHF_BOILING_POINT, HEADWAY_10_WAYS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which of these is an I statement?",
      options: [{ text: "I am getting annoyed", right: true }, { text: "You are annoying me" }, { text: "You always do that" }],
      why: "Say what you think or feel using I statements, and do not blame or attack the other person. Try saying I am getting annoyed, rather than you are annoying me.",
    },
  },
  {
    id: "anger-lifestyle",
    kicker: "Everyday life",
    question: "Can sleep, alcohol and stress make my anger worse?",
    hook: "Tiredness, drink and constant pressure all shorten the fuse. Looking after the basics makes anger easier to manage.",
    short: "Being tired makes you more sensitive to anger triggers, alcohol can make you more likely to act aggressively, and stress makes anger harder to control. Good sleep, regular exercise, drinking within the low-risk guidelines and making time to relax can all make anger easier to manage.",
    sections: [
      {
        heading: "Sleep",
        paragraphs: [
          "Being tired can make you more sensitive to anger triggers, and leave you less able to cope. The ideal amount of sleep for adults is around 7 to 9 hours a night, on average.",
          "A regular sleep routine, going to bed and getting up at similar times, can make it easier to fall asleep. Try not to use screens for an hour before bed, and try to avoid alcohol and nicotine for 1 to 2 hours before bed.",
        ],
      },
      {
        heading: "Alcohol and drugs",
        paragraphs: [
          "Alcohol can affect your ability to cope and control negative behaviours. It can also make you more likely to behave aggressively, or act without thinking.",
          "To keep health risks low, men and women are advised not to drink more than 14 units a week on a regular basis, and to have several drink-free days each week. Drinking too much on a single occasion increases the risk of losing self-control, including getting involved in violence.",
          "If you have become physically dependent on alcohol, stopping overnight could be harmful. A GP can advise you about support, and about any medicine you may need to stop safely.",
        ],
      },
      {
        heading: "Stress",
        paragraphs: [
          "If you are dealing with problems in your life, you are likely to feel more stressed overall, which makes you more sensitive to anger triggers. A problem-solving approach, such as getting advice about debt, can reduce your stress and anger.",
          "Do not rely on alcohol, smoking or caffeine as ways of coping. They might give temporary relief, but in the long term they will not solve your problems.",
        ],
      },
      {
        heading: "Exercise and relaxing",
        paragraphs: [
          "Exercise such as running, walking, swimming and yoga can help you relax and reduce stress. Adults are advised to do at least 150 minutes of moderate intensity activity a week.",
          "Making time to relax, trying creative activities like writing, making music, dancing or painting, and taking time for self-care can all help release tension.",
        ],
      },
    ],
    helps: [
      "Keep a regular sleep routine, going to bed and getting up at similar times.",
      "Try to avoid alcohol and nicotine for 1 to 2 hours before bed.",
      "Drink no more than 14 units a week, with several drink-free days.",
      "If you are physically dependent on alcohol, get advice before stopping, as stopping overnight could be harmful.",
      "Be active: running, walking, swimming and yoga can help you relax and reduce stress.",
      CRISIS,
    ],
    tryThisWeek: [
      "Go to bed at a similar time each night.",
      "Have several drink-free days.",
      "Fit in a walk, run or swim.",
    ],
    ask: "Could my sleep, drinking or stress be adding to my anger, and what support is there?",
    interactive: {
      kind: "risk-check",
      title: "Everyday things that shorten the fuse",
      intro: "Tick any that apply. Most of these can change, and small steps help.",
      items: [
        { id: "sleep", label: "Not enough sleep", note: "Being tired makes you more sensitive to anger triggers. Adults need around 7 to 9 hours a night, on average.", changeable: true },
        { id: "drinking", label: "Drinking to cope", note: "Alcohol can make you more likely to behave aggressively, or act without thinking.", changeable: true },
        { id: "binge", label: "Drinking a lot in one go", note: "Binge drinking raises the risk of losing self-control, including getting involved in violence.", changeable: true },
        { id: "stress", label: "Lots of stress or problems", note: "Stress makes you more sensitive to triggers. Tackling problems one at a time can help.", changeable: true },
        { id: "inactive", label: "Little exercise", note: "Running, walking, swimming and yoga can help you relax and reduce stress.", changeable: true },
        { id: "no-time", label: "No time to relax", note: "Making time to relax, and for self-care, can help release tension.", changeable: true },
      ],
    },
    sources: [INFORM_GUIDE, NHS_SLEEP, NHS_UNITS, NHS_ALCOHOL_RISKS, NHS_ALCOHOL_SUPPORT, NHS_STRESS_BUSTERS, NHS_ACTIVITY, INFORM_CONTROL, NHS_ANGER, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How does being tired affect anger?",
      options: [{ text: "It makes you more sensitive to triggers", right: true }, { text: "It makes no difference" }, { text: "It calms you down" }],
      why: "Being tired can make you more sensitive to anger triggers, and leave you less able to cope.",
    },
  },
  {
    id: "anger-safety",
    kicker: "Staying safe",
    question: "What if my anger is turning into harm or abuse?",
    hook: "If you have frightened or hurt someone you love, reaching out is a strong first step. Confidential help to change is there.",
    short: "If uncontrolled anger leads to violence or threatening behaviour in a relationship, there are places that offer help. If you are worried you are behaving abusively, you can call the free, confidential Respect Phoneline on 0808 802 4040. If anyone is in immediate danger, call 999.",
    sections: [
      {
        heading: "When anger becomes harm",
        paragraphs: [
          "If uncontrolled anger leads to domestic violence and abuse, meaning violence or threatening behaviour within a relationship, there are places that offer help and support.",
          "Domestic abuse can include physical, emotional and sexual abuse between partners, ex-partners or family members. It is always about having power and control.",
        ],
      },
      {
        heading: "Taking responsibility",
        paragraphs: [
          "Respect says disagreements happen in all relationships, but domestic abuse involves choices to create fear, remove freedom and gain power over another person.",
          "Thoughts like it only happened once, or I just lost control, are often excuses that remove responsibility. Respect says change starts with recognising you had choices to be different.",
        ],
      },
      {
        heading: "Help to change",
        paragraphs: [
          "If you are worried you are behaving abusively in your relationship, call the free Respect Phoneline on 0808 802 4040. It is open Monday to Friday, 10am to 5pm, and calls do not appear on itemised bills.",
          "The call is confidential and anonymous, and there is no judgement. Advisers listen, ask questions to understand what has happened, and help you plan safety actions and ways to change your behaviour.",
          "Respect says self-help guides offer useful strategies, but they do not replace a behaviour change programme.",
        ],
      },
      {
        heading: "Right now",
        paragraphs: [
          "If an argument is escalating, stop. Leave, take a long walk to calm down, and think about how you choose to be when you return.",
          "Avoid substances if they increase risk, and remember that substance use is not the cause of domestic abuse.",
          "If you are in immediate danger, or it is an emergency, call 999.",
        ],
      },
      {
        heading: "If you are being harmed",
        paragraphs: [
          "If someone close to you is causing you harm, or making you feel afraid, because of their anger, it is important to reach out for help.",
          "Women can call the Freephone National Domestic Abuse Helpline, run by Refuge, on 0808 2000 247 at any time, day or night. Men can call the Respect Men's Advice Line on 0808 8010 327.",
        ],
      },
    ],
    helps: [
      "If you are worried about your behaviour, call the Respect Phoneline on 0808 802 4040, Monday to Friday, 10am to 5pm.",
      "If an argument is escalating, stop, and leave to calm down.",
      "Respect all requests for no contact, and any conditions set by the police or courts.",
      "See a GP if you are acting in an abusive or violent way.",
      "If you are being harmed, call the National Domestic Abuse Helpline on 0808 2000 247, or the Men's Advice Line on 0808 8010 327.",
      CRISIS,
    ],
    tryThisWeek: [
      "Save the Respect Phoneline number.",
      "Stop and leave if an argument escalates.",
      "See a GP about your behaviour.",
    ],
    ask: "Can you help me find support for my anger and behaviour, such as a behaviour change programme near me?",
    interactive: {
      kind: "scenarios",
      title: "Choosing a different path",
      scenarios: [
        {
          id: "escalating",
          situation: "An argument at home is getting louder, and you feel yourself losing control.",
          options: [{ text: "Stop, leave and walk to calm down", best: true }, { text: "Stay and keep arguing" }],
          why: "If an argument is escalating, stop. Leave, take a long walk to calm down, and think about how you choose to be when you return.",
        },
        {
          id: "excuse",
          situation: "Afterwards, you tell yourself: they pushed my buttons.",
          options: [{ text: "Recognise you had a choice", best: true }, { text: "Put the blame on them" }],
          why: "Thoughts like this are often excuses that remove responsibility. Change starts with recognising you had choices to be different.",
        },
        {
          id: "not-ready",
          situation: "You want help, but you are not sure what to say if you call.",
          options: [{ text: "Call anyway", best: true }, { text: "Wait until you have it all worked out" }],
          why: "Respect says you do not need to have everything worked out before calling. Advisers can help you make sense of your situation.",
        },
        {
          id: "danger",
          situation: "Someone is in immediate danger.",
          options: [{ text: "Call 999", best: true }, { text: "Wait and see" }],
          why: "If you are in immediate danger, or it is an emergency, call 999.",
        },
      ],
    },
    sources: [NHS_ANGER, NHS_DV, RESPECT_HELP, RESPECT_ABUSIVE, RESPECT_CHANGE, RESPECT_EXPECT, HEADWAY_BEHAVIOUR, INFORM_GUIDE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Who can you call if you are worried you are behaving abusively?",
      options: [{ text: "The Respect Phoneline, on 0808 802 4040", right: true }, { text: "Nobody can help with this" }, { text: "Only the police" }],
      why: "If you are worried you are behaving abusively in your relationship, call the free Respect Phoneline on 0808 802 4040.",
    },
  },
  {
    id: "anger-support",
    kicker: "Support",
    question: "Where can I find anger courses and support?",
    hook: "More than half of people say they would not know where to turn for help with anger. Here is where to start.",
    short: "A GP may be able to refer you to a local anger management programme or counselling, and you can refer yourself to NHS talking therapies. Peer support, helplines and charities can help too. Make sure any private therapist is registered with a professional organisation.",
    sections: [
      {
        heading: "Courses and therapy",
        paragraphs: [
          "Your GP may be able to refer you to a local anger management programme or counselling. Most programmes include CBT and counselling, sometimes one to one, and you may also work in a small group.",
          "You can refer yourself directly to NHS talking therapies for free therapy such as CBT. You need to be registered with a GP and aged 18 or over, or 16 or over in some areas.",
        ],
      },
      {
        heading: "Private help",
        paragraphs: [
          "There are also private courses and therapists who can help with anger issues. Make sure any therapist you see is registered with a professional organisation, such as the British Association for Counselling and Psychotherapy.",
          "Talking therapies are sometimes available for free through your employer, university or local charities.",
        ],
      },
      {
        heading: "Peer support and talking",
        paragraphs: [
          "Consider peer support, where people use their experiences to help others. Talking to friends or family about how you feel can give you a different perspective.",
          "If you need someone to talk to, you can call Samaritans free on 116 123, day or night.",
        ],
      },
      {
        heading: "Helplines for particular situations",
        paragraphs: [
          "If you are worried about your behaviour towards a partner or family member, the Respect Phoneline offers free, confidential support on 0808 802 4040, Monday to Friday, 10am to 5pm.",
          "After a brain injury, the Headway helpline on 0808 800 2244 is free and confidential, open 9am to 5pm, Monday to Friday. After a stroke, the Stroke Support Helpline is on 0303 3033 100.",
        ],
      },
      {
        heading: "Knowing where to turn",
        paragraphs: [
          "In a YouGov survey for the Mental Health Foundation, 58 in every 100 people said they would not know where to seek help for an anger problem. Yet 84 in every 100 agreed that people should be encouraged to seek help with problems with anger.",
        ],
      },
    ],
    helps: [
      "Ask your GP about a local anger management programme or counselling.",
      "Refer yourself to NHS talking therapies.",
      "Check that any private therapist is registered with a professional organisation.",
      "Consider peer support, where people use their experiences to help others.",
      "Call Samaritans free on 116 123 if you need someone to talk to.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask your GP about local courses.",
      "Find your talking therapies service.",
      "Look into peer support.",
    ],
    ask: "Is there an anger management course near me, and can I be referred for therapy?",
    interactive: {
      kind: "flip-cards",
      title: "Where to turn",
      intro: "Turn each card to see who each service is for and how to reach it.",
      cards: [
        { id: "gp", front: "Your GP", when: "If anger is hard to cope with", back: "May be able to refer you to a local anger management programme or counselling." },
        { id: "talking", front: "NHS talking therapies", when: "Age 18 or over, or 16 in some areas", back: "Refer yourself for free therapy such as CBT, without a GP referral." },
        { id: "peer", front: "Peer support", when: "Learning from others", back: "People use their own experiences to help others." },
        { id: "samaritans", front: "Samaritans", when: "Day or night", back: "Call free on 116 123 if you need someone to talk to." },
        { id: "shout", front: "Shout", when: "Any time, by text", back: "Text SHOUT to 85258 for free, confidential support from a trained volunteer." },
        { id: "respect", front: "Respect Phoneline", when: "Worried about your behaviour", back: "Free, confidential support on 0808 802 4040, Monday to Friday, 10am to 5pm." },
        { id: "headway", front: "Headway helpline", when: "After a brain injury", back: "Free and nurse-led: 0808 800 2244, 9am to 5pm, Monday to Friday." },
      ],
    },
    sources: [NHS_ANGER, INFORM_CONTROL, NHS_TT, NHS_FIND_TT, HEADWAY_HELPLINE, STROKE_ANGER, SAMARITANS, RESPECT_HELP, MHF_BOILING_POINT, SHOUT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Can you refer yourself to NHS talking therapies?",
      options: [{ text: "Yes, if you are 18 or over, or 16 in some areas", right: true }, { text: "No, only a GP can refer you" }, { text: "Only if you have a diagnosis" }],
      why: "You can refer yourself directly to NHS talking therapies for free therapy such as CBT. You need to be registered with a GP and aged 18 or over, or 16 or over in some areas.",
    },
  },
];
