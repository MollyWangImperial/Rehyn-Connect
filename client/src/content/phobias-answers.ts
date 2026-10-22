import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Phobias page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (including
// Every Mind Matters), Anxiety UK, No Panic, Rethink Mental Illness and the Royal College of Psychiatrists.
// mind.org.uk was not read (it blocks automated reading), so no Mind page is cited. Safe messaging throughout:
// no images or details that could trigger a phobia, kind and non-judgemental wording, and every answer ends its
// "What helps" list with the crisis routes exactly as the NHS gives them (111 mental health option, Samaritans
// 116 123, Shout 85258, 999 or A&E). General information only; it never replaces what a person's own GP,
// therapist or mental health team tells them, and no medicine should be stopped or changed without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Anxiety UK: ${label}`, url: `https://www.anxietyuk.org.uk/${path}` });
const noPanic = (label: string, path: string): LearnSource => ({ label: `No Panic: ${label}`, url: `https://nopanic.org.uk/${path}` });

const NHS_PHOBIAS = nhs("Phobias", "mental-health/conditions/phobias/");
const NHS_AGORA = nhs("Agoraphobia: overview", "mental-health/conditions/agoraphobia/overview/");
const NHS_AGORA_CAUSES = nhs("Agoraphobia: causes", "mental-health/conditions/agoraphobia/causes/");
const NHS_AGORA_SYMPTOMS =nhs("Agoraphobia: symptoms", "mental-health/conditions/agoraphobia/symptoms/");
const NHS_AGORA_DIAGNOSIS = nhs("Agoraphobia: diagnosis", "mental-health/conditions/agoraphobia/diagnosis/");
const NHS_AGORA_TREATMENT = nhs("Agoraphobia: treatment", "mental-health/conditions/agoraphobia/treatment/");
const NHS_CLAUSTRO = nhs("Claustrophobia", "mental-health/conditions/claustrophobia/");
const NHS_AFP = nhs("Anxiety, fear and panic", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anxiety-fear-panic/");
const NHS_PANIC = nhs("Panic disorder", "mental-health/conditions/panic-disorder/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_FIND_TT = nhs("Find NHS talking therapies for anxiety and depression", "nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_ANTIDEPRESSANTS = nhs("Antidepressants", "medicines/antidepressants/");
const NHS_BETA = nhs("Beta blockers", "medicines/beta-blockers/");
const NHS_PROPRANOLOL = nhs("About propranolol", "medicines/propranolol/about-propranolol/");
const NHS_DIAZEPAM = nhs("Diazepam", "medicines/diazepam/");
const NHS_BREATHING = nhs("Breathing exercises for stress", "mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/");
const NHS_BLOOD_TESTS = nhs("Blood tests", "tests-and-treatments/blood-tests/");
const NHS_MRI = nhs("MRI scan", "tests-and-treatments/mri-scan/");
const NHS_FAINTING = nhs("Fainting", "symptoms/fainting/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const EMM_FEARS = emm("Facing your fears", "mental-wellbeing-tips/self-help-cbt-techniques/facing-your-fears/");
const EMM_HELPING = emm("Helping others with mental health problems", "supporting-others/helping-others/");

const AUK_PHOBIAS = auk("Phobias", "anxiety-type/phobias/");
const AUK_AGORA = auk("Agoraphobia", "anxiety-type/agoraphobia/");
const AUK_CLAUSTRO = auk("Claustrophobia", "anxiety-type/claustrophobia/");
const AUK_EMETO = auk("Emetophobia", "anxiety-type/emetophobia/");
const AUK_ABOUT = auk("About anxiety", "get-help/about-anxiety-and-anxiety-disorders/");
const AUK_CBT = auk("Cognitive behavioural therapy (CBT)", "get-help/cognitive-behavioural-therapy-cbt/");
const AUK_SUPPORTING = auk("Supporting others", "get-help/supporting-others/");
const AUK_TAUK = auk("'TAUK' to us", "get-help/tauk-to-us/");
const AUK_CONTACT = auk("Contact us", "contact-us/");
const AUK_GROUPS = auk("Anxiety support groups", "anxiety-support-groups-2/");

const NOPANIC_PHOBIA = noPanic("What is a Phobia?", "phobia/");
const NOPANIC_SELF_HELP = noPanic("Self-help tips", "self-help/");
const NOPANIC_HELPLINE = noPanic("No Panic helplines", "the-no-panic-helpline/");
const NOPANIC_SERVICES = noPanic("Recovery programmes and support services", "support-services/");
const NOPANIC_CARERS = noPanic("Practical help for carers", "help-for-carers/");

const RETHINK_ANXIETY: LearnSource = { label: "Rethink Mental Illness: Anxiety disorders", url: "https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-conditions/anxiety-disorders/" };
const RETHINK_SUPPORTING: LearnSource = { label: "Rethink Mental Illness: Supporting someone with a mental illness", url: "https://www.rethink.org/advice-and-information/carers-hub/advice-for-loved-ones-and-carers/supporting-someone-with-a-mental-illness/" };
const RCPSYCH_ANXIETY: LearnSource = { label: "Royal College of Psychiatrists: Anxiety and generalised anxiety disorder (GAD)", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/anxiety-and-generalised-anxiety-disorder-(gad)" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.";

export const phobiasAnswers: LearnArticle[] = [
  {
    id: "phob-what-it-is",
    kicker: "Understanding",
    question: "What is a phobia, and how is it different from ordinary fear?",
    hook: "Most people are scared of something. A phobia is a fear far bigger than the real danger, and it is very treatable.",
    short: "A phobia is an overwhelming fear of an object, place, situation, feeling or animal. Phobias are stronger than fears, and someone with a phobia may arrange their daily routine to avoid the thing that causes their anxiety. Phobias are an anxiety condition, and treatment can help.",
    sections: [
      {
        heading: "More than a fear",
        paragraphs: [
          "Phobias are an anxiety condition, usually caused by a particular object or situation, such as animals or heights. Some phobias can affect your life more than others, but treatment can help.",
          "Rethink Mental Illness describes a phobia as an overwhelming fear of an object, place, situation, feeling or animal. Phobias are stronger than fears. They develop when a person has increased feelings of danger about a situation or object.",
        ],
      },
      {
        heading: "Fear at the wrong time",
        paragraphs: [
          "Fear is a natural response in all of us. It keeps us safe by making sure that, most of the time, we are not in dangerous situations.",
          "No Panic explains that phobias centre on this normal fear mechanism. Someone with a phobia has learnt to get frightened at the wrong times or in the wrong places, even when there is no real danger present.",
        ],
      },
      {
        heading: "The pull to avoid",
        paragraphs: [
          "Someone with a phobia may arrange their daily routine to avoid the thing that is causing them anxiety.",
          "Anxiety UK says many people with phobias enter a pattern of avoidance. It can vary enormously, from someone who would not want to touch a spider to someone who cannot even look at a picture of one. That shows how much even a simple phobia can affect a life.",
        ],
      },
      {
        heading: "It can be overcome",
        paragraphs: [
          "Phobias are one of the most common types of anxiety disorder. No Panic says that phobias, like all anxiety disorders, can be overcome.",
          "You can refer yourself directly to an NHS talking therapies service, without a referral from a GP. See a GP if you think you have a phobia and the symptoms are affecting your life.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have a phobia and the symptoms are affecting your life.",
      "Refer yourself directly to an NHS talking therapies service, without a referral from a GP.",
      "Talk to someone you trust about your phobia.",
      "Try not to avoid situations that make you anxious; slowly build up the time you spend in them.",
      CRISIS,
    ],
    tryThisWeek: [
      "Talk to someone you trust about it.",
      "Find your local talking therapies service.",
      "Build up time in a worrying situation slowly.",
    ],
    ask: "Could what I feel be a phobia, and what treatment would help me?",
    interactive: {
      kind: "timeline",
      title: "How a phobia can take hold, and loosen",
      steps: [
        { id: "fear", when: "Step 1", title: "A natural fear response", points: ["Fear keeps us safe from real danger.", "The heart pounds and we sweat, shake or feel sick."] },
        { id: "event", when: "Step 2", title: "A frightening moment", points: ["A frightening event or stressful situation triggers panic.", "The awful feelings get linked to the place, situation or object."] },
        { id: "wrong-time", when: "Step 3", title: "Fear at the wrong time", points: ["The fear now comes even when there is no real danger.", "The danger feels real to the person, though not to others."] },
        { id: "avoid", when: "Step 4", title: "Avoiding it", points: ["Daily routines get arranged around avoiding the feared thing.", "Avoiding situations can make them harder to face."] },
        { id: "face", when: "Step 5", title: "Facing it, bit by bit", points: ["Slowly building up time in worrying situations can reduce anxiety.", "Talking therapies can help, and you can refer yourself."] },
      ],
    },
    sources: [NHS_PHOBIAS, RETHINK_ANXIETY, AUK_PHOBIAS, NOPANIC_PHOBIA, NHS_AFP, NHS_TT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How is a phobia different from an ordinary fear?",
      options: [{ text: "It is an overwhelming fear, stronger than a fear", right: true }, { text: "It is a mild dislike that soon passes" }, { text: "It is a sign of weakness" }],
      why: "Rethink Mental Illness describes a phobia as an overwhelming fear of an object, place, situation, feeling or animal. Phobias are stronger than fears.",
    },
  },
  {
    id: "phob-types",
    kicker: "Types",
    question: "What is the difference between a specific phobia and a more complex one?",
    hook: "Some phobias only trouble you when you meet the thing you fear. Others can shape every day.",
    short: "There are many different phobias, usually caused by a particular thing or situation. Some are only triggered when you come into contact with that object or situation, such as animals, heights or blood. Others, such as agoraphobia and social anxiety, can have more of an impact on your life.",
    sections: [
      {
        heading: "Specific phobias",
        paragraphs: [
          "Specific, or simple, phobias are about particular objects or situations. Anxiety UK says they can be quite distinct and easily identified, such as a fear of spiders, thunderstorms or heights.",
          "The NHS says some phobias are only triggered when you come into contact with the thing that causes them. These include phobias of animals, such as dogs, insects or snakes, situations, such as flying, heights or being in a small space, and bodily fluids, such as blood or vomit.",
        ],
      },
      {
        heading: "Common groups",
        paragraphs: [
          "Rethink Mental Illness groups common phobias as animal phobias, such as spiders or snakes, environmental phobias, such as heights and germs, situational phobias, such as going to the dentist, and body phobias, such as blood or being sick.",
        ],
      },
      {
        heading: "Phobias with more impact",
        paragraphs: [
          "Other phobias may have more of an impact on your life. These include a fear of going outside, known as agoraphobia, and of talking to and interacting with other people, known as social anxiety.",
          "Anxiety UK calls agoraphobia a very complex phobia, most commonly a fear of leaving a safe place, usually the home. The NHS describes it as a fear of being in situations where escape might be difficult, or where help would not be available if things go wrong.",
        ],
      },
      {
        heading: "Two more examples",
        paragraphs: [
          "Claustrophobia is the fear of confined spaces, such as lifts, tunnels, tube trains and public toilets. It is estimated that around 10% of the UK population are affected by claustrophobia during their lifetime.",
          "Emetophobia is a fear of vomiting or seeing others being sick. Anxiety UK says it is not widely diagnosed, even though it is a fairly prevalent anxiety disorder.",
        ],
      },
      {
        heading: "Could it be a phobia?",
        paragraphs: [
          "Anxiety UK suggests asking yourself 3 questions. Do you feel an intense fear of a specific object or situation? Do you go out of your way to avoid it? Do you get feelings of freezing, wanting to escape or worrying that you may pass out when you come into contact with it?",
          "If you can answer yes to most of them, it is likely that you are affected by a phobia. Anxiety UK strongly advises seeing your GP, who will be able to make a formal diagnosis.",
        ],
      },
    ],
    helps: [
      "If a phobia is affecting your life, see a GP, who will be able to make a formal diagnosis.",
      "If you have claustrophobia and need an MRI scan, tell the hospital before the day of your appointment.",
      "Be careful about looking up information online, as you may not be ready to see triggering images.",
      "Refer yourself directly to an NHS talking therapies service, without a referral from a GP.",
      CRISIS,
    ],
    tryThisWeek: [
      "See a GP if it affects your life.",
      "Tell the hospital early before an MRI.",
      "Take care with images online.",
    ],
    ask: "What kind of phobia do you think I have, and how is it treated?",
    interactive: {
      kind: "flip-cards",
      title: "Kinds of phobia, card by card",
      intro: "Turn each card to see what each kind involves. Some people have more than one.",
      cards: [
        { id: "animals", front: "Animal phobias", when: "Fear of a creature", back: "Such as dogs, insects, spiders, snakes or rodents. Usually only triggered on coming into contact with them." },
        { id: "situations", front: "Situational phobias", when: "Fear of a situation", back: "Such as flying, heights, being in a small space or going to the dentist." },
        { id: "body", front: "Body phobias", when: "Fear of bodily fluids", back: "Such as blood or vomit, or being sick." },
        { id: "claustrophobia", front: "Claustrophobia", when: "Fear of confined spaces", back: "Such as lifts, tunnels, tube trains and public toilets. Avoiding these places may reinforce the fear." },
        { id: "agoraphobia", front: "Agoraphobia", when: "Fear of not being able to escape", back: "Fear of situations where escape might be difficult, or help would not be available. It can have more impact on daily life." },
        { id: "social", front: "Social anxiety", when: "Fear of social situations", back: "A fear of talking to and interacting with other people. It can have more impact on daily life." },
      ],
    },
    sources: [AUK_PHOBIAS, NHS_PHOBIAS, RETHINK_ANXIETY, AUK_AGORA, NHS_AGORA, NHS_CLAUSTRO, AUK_CLAUSTRO, AUK_EMETO, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which of these phobias can have more of an impact on everyday life?",
      options: [{ text: "Agoraphobia", right: true }, { text: "A fear of thunderstorms" }, { text: "A fear of spiders" }],
      why: "Other phobias may have more of an impact on your life. These include a fear of going outside, known as agoraphobia, and of talking to and interacting with other people, known as social anxiety.",
    },
  },
  {
    id: "phob-symptoms",
    kicker: "Symptoms",
    question: "What does a phobia feel like in my body and mind?",
    hook: "A racing heart, shaking, an urge to escape. The feelings are real and frightening, but panic cannot harm you.",
    short: "Symptoms of a phobia include severe anxiety and worry, feeling dizzy, a more noticeable heartbeat, tightness in your chest, feeling sick and trembling. Some people have an intense fear that they may faint, lose control or die. Facing the feared thing can bring on panic, which is frightening but not dangerous.",
    sections: [
      {
        heading: "In your body",
        paragraphs: [
          "Symptoms of a phobia include severe anxiety and worry, feeling dizzy and lightheaded, a more noticeable or unusual heartbeat, tightness in your chest, feeling sick or being sick, diarrhoea, and trembling or shaking.",
          "Anxiety UK says any phobia may produce a state of panic when you are faced with the thing you fear, with physical symptoms such as nausea, a faster heartbeat and jelly legs.",
        ],
      },
      {
        heading: "In your mind",
        paragraphs: [
          "Some people have a strong or intense fear that they may faint, lose control or die.",
          "With severe claustrophobia, people may also fear losing control or fainting, or have feelings of being detached from their body.",
        ],
      },
      {
        heading: "When it turns to panic",
        paragraphs: [
          "When you are anxious or scared, your body releases stress hormones, such as adrenaline and cortisol. This can cause an increased heart rate and more sweating, and in some people a panic attack.",
          "A panic attack usually lasts 5 to 20 minutes. Panic attacks can be frightening, but they are not dangerous and should not harm you.",
        ],
      },
      {
        heading: "Even the thought of it",
        paragraphs: [
          "Even thinking about certain situations, without facing them, can be a trigger.",
          "Avoiding places and situations that create anxiety is a common change in behaviour. You may start to avoid situations because you fear they will trigger another attack.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if you think you have a phobia and the symptoms are affecting your life. Most of these symptoms can also be signs of other conditions or problems, so you may not always be having a panic attack.",
        ],
      },
    ],
    helps: [
      "Remind yourself that a panic attack is frightening, but not dangerous, and that it will pass.",
      "During an attack, stay where you are if possible, and breathe slowly and deeply.",
      "Try breathing exercises to help you relax.",
      "See a GP if you think you have a phobia and the symptoms are affecting your life.",
      CRISIS,
    ],
    tryThisWeek: [
      "Remind yourself panic will pass.",
      "Practise slow, deep breathing.",
      "See a GP if it affects your life.",
    ],
    ask: "Could my symptoms be caused by a phobia, or should anything else be checked?",
    interactive: {
      kind: "signs",
      title: "What you may notice",
      intro: "Tick any you notice when you face, or think about, the thing you fear.",
      signs: ["Severe anxiety and worry", "Feeling dizzy or lightheaded", "A noticeable or unusual heartbeat", "Tightness in the chest", "Feeling or being sick", "Trembling or shaking", "Jelly legs", "Fear of fainting or losing control", "Wanting to escape"],
      after: "These are common symptoms of a phobia. If they are affecting your life, see a GP or refer yourself to NHS talking therapies.",
      copyHeading: "What I notice with my phobia",
    },
    sources: [NHS_PHOBIAS, AUK_PHOBIAS, NHS_CLAUSTRO, NHS_AFP, NHS_PANIC, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Can a panic attack harm you?",
      options: [{ text: "No, it is frightening but not dangerous", right: true }, { text: "Yes, it often causes lasting harm" }, { text: "Only if it lasts more than a minute" }],
      why: "A panic attack usually lasts 5 to 20 minutes. Panic attacks can be frightening, but they are not dangerous and should not harm you.",
    },
  },
  {
    id: "phob-causes",
    kicker: "Causes",
    question: "Why did I develop a phobia?",
    hook: "A phobia can often be traced to a frightening moment, or learnt from someone close. Sometimes there is no clear reason at all.",
    short: "It is not always clear why phobias start, but many can be linked to a frightening event or stressful situation. They usually develop as a child, teenager or young adult. A frightening childhood experience, family or friends with a phobia, and a family history of anxiety disorders can all make a phobia more likely.",
    sections: [
      {
        heading: "When phobias start",
        paragraphs: [
          "It is not always clear why some phobias start, but many can be linked to a frightening event or stressful situation. They usually develop as a child, teenager or young adult.",
          "Rethink Mental Illness says we do not fully understand what causes anxiety disorders. Genes and life experiences, including big changes in life, are thought to play a part.",
        ],
      },
      {
        heading: "What makes a phobia more likely",
        paragraphs: [
          "A frightening childhood experience can play a part: being chased by a dog, for example, may cause a phobia of dogs. It is also possible to learn a phobia from family or friends who have one.",
          "Being embarrassed when other people react negatively to your fear can increase your anxiety. Anxiety disorders are more common in women than in men, and a family history of anxiety disorders also makes a phobia more likely.",
        ],
      },
      {
        heading: "How fear gets learnt",
        paragraphs: [
          "No Panic explains that fear is something we learn. A phobia might develop when a frightening event triggers panic, and the person goes on to link those awful symptoms with the surroundings, situation or object around them.",
          "With claustrophobia, a child growing up with a parent who has it may come to link confined spaces with the parent's anxiety. It can also be triggered by unpleasant experiences, such as turbulence when flying.",
        ],
      },
      {
        heading: "Other things that add to anxiety",
        paragraphs: [
          "Anxiety UK says very stressful or traumatic events, problems with alcohol or drugs, and physical health problems can make an anxiety disorder more likely. Rethink Mental Illness adds that caffeine and alcohol can make you feel anxious.",
          "Agoraphobia can sometimes develop after a panic attack in a particular place. The person worries so much about having another that they start to avoid that situation.",
        ],
      },
    ],
    helps: [
      "Learn what anxiety is, as understanding why you feel and react the way you do can help.",
      "Think about what may have triggered your anxiety, and which situations make you feel uneasy.",
      "Do not have energy drinks or drinks containing caffeine after 3pm, as they can make your anxiety worse.",
      "See a GP if you think you have a phobia and the symptoms are affecting your life.",
      CRISIS,
    ],
    tryThisWeek: [
      "Read about how anxiety works.",
      "Note what makes you feel uneasy.",
      "No caffeine after 3pm.",
    ],
    ask: "Could something in my past be linked to my phobia, and does it change the treatment?",
    interactive: {
      kind: "risk-check",
      title: "Things linked to phobias",
      intro: "Tick any that apply. Some you cannot change, but a phobia can still be treated, whatever started it.",
      items: [
        { id: "childhood", label: "A frightening childhood experience", note: "Being chased by a dog, for example, may cause a phobia of dogs.", changeable: false },
        { id: "learnt", label: "Family or friends with a phobia", note: "It is possible to learn a phobia from others.", changeable: false },
        { id: "reactions", label: "Embarrassment at others' reactions", note: "Being embarrassed about your reaction to your phobia can increase your anxiety. Talking to someone you trust can help.", changeable: true },
        { id: "family-history", label: "A family history of anxiety", note: "A family history of anxiety disorders makes a phobia more likely.", changeable: false },
        { id: "stress", label: "A stressful or frightening event", note: "Many phobias can be linked to a frightening event or stressful situation.", changeable: false },
        { id: "caffeine", label: "Caffeine late in the day", note: "Caffeine after 3pm can affect your sleep and make your anxiety worse.", changeable: true },
      ],
    },
    sources: [NHS_PHOBIAS, RETHINK_ANXIETY, NOPANIC_PHOBIA, NHS_CLAUSTRO, AUK_ABOUT, NHS_AGORA_CAUSES, NOPANIC_SELF_HELP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When do phobias usually develop?",
      options: [{ text: "As a child, teenager or young adult", right: true }, { text: "Only in later life" }, { text: "Only after an illness" }],
      why: "It is not always clear why some phobias start, but many can be linked to a frightening event or stressful situation. They usually develop as a child, teenager or young adult.",
    },
  },
  {
    id: "phob-exposure",
    kicker: "Treatment",
    question: "How does gradual exposure help me face a phobia?",
    hook: "Avoiding what you fear brings relief today, but lets the fear grow. Facing it in small, planned steps can shrink it.",
    short: "Exposure therapy gradually exposes you to the situation that causes your fear. It is sometimes called desensitisation therapy, and you can do it by yourself or with the help of a professional. You list feared situations from least to most difficult, start with the easiest, and stay with each one until your fear has reduced by half.",
    sections: [
      {
        heading: "Why avoiding keeps fear going",
        paragraphs: [
          "When we are afraid of something, it can be tempting to avoid it. This might bring relief in the short term, but avoiding situations can make them harder to face up to and mean that our fears grow.",
          "If instead we gradually expose ourselves to situations we fear, we can start to overcome them and feel more in control. This is sometimes called exposure therapy.",
        ],
      },
      {
        heading: "What exposure therapy is",
        paragraphs: [
          "Exposure therapy is a type of CBT that gradually exposes you to the situation that causes your fear. It is sometimes also known as desensitisation therapy, and you can do it by yourself or with the help of a professional.",
          "No Panic says overcoming a phobia is all about proving that what you fear cannot harm you, and finding the evidence to prove it.",
        ],
      },
      {
        heading: "Building your list",
        paragraphs: [
          "Think about which situations involve your fear, and rate how difficult each one is to face, from 0 for not difficult at all to 100 for the most fear. Then list them in order, from the least to the most difficult.",
          "Taking the bus for a couple of stops with a friend might score 10, for example, while taking the same bus on your own might score 50.",
        ],
      },
      {
        heading: "Starting with the easiest",
        paragraphs: [
          "Start with the lowest-scoring situation, and keep putting yourself in it until your fear has reduced by half. If it scored 10 to start with, keep going until you would rate it 5.",
          "Allow yourself to feel worried or scared without relying on distractions, such as your phone or reassurance from others. It will likely be tough at first, but the more times you face a fear, the less scary it becomes.",
        ],
      },
      {
        heading: "Working up, without rushing",
        paragraphs: [
          "Once your fear has reduced by half, move on to the next situation on your list. Do not be discouraged if some things take longer than others.",
          "In therapy for agoraphobia, a therapist sets modest goals at the start, such as going to your local corner shop. As you become more confident, the goals become more challenging, such as a large supermarket or a meal in a busy restaurant.",
        ],
      },
    ],
    helps: [
      "Rate the situations you fear from 0 to 100, and list them from least to most difficult.",
      "Start with the easiest, and stay with it until your fear has reduced by half.",
      "Allow yourself to feel the fear, without distractions such as your phone.",
      "Move up one step at a time, and do not be discouraged if some steps take longer.",
      "Try not to avoid situations that make you anxious; slowly build up the time you spend in them.",
      CRISIS,
    ],
    tryThisWeek: [
      "Rate and list your feared situations.",
      "Start with the easiest one.",
      "Stay until the fear halves.",
    ],
    ask: "Would exposure therapy suit my phobia, and could a therapist help me plan the steps?",
    interactive: {
      kind: "timeline",
      title: "Facing a fear in 6 steps",
      steps: [
        { id: "notice", when: "Step 1", title: "Notice how fear affects you", points: ["When calmer, think about how you feel physically when afraid.", "Notice how it makes you behave, such as avoiding things."] },
        { id: "see", when: "Step 2", title: "See fear differently", points: ["The fight or flight response is there to keep us safe.", "For some of us it is over-sensitive, and fires when there is no danger."] },
        { id: "rate", when: "Step 3", title: "Rate and list", points: ["Rate each feared situation from 0 to 100.", "List them from least to most difficult."] },
        { id: "start", when: "Step 4", title: "Start with the easiest", points: ["Stay with it until your fear has reduced by half.", "The more times you face a fear, the less scary it becomes."] },
        { id: "feel", when: "Step 5", title: "Let yourself feel it", points: ["Try to face it without distractions or reassurance.", "This helps prove to yourself that you can cope."] },
        { id: "up", when: "Step 6", title: "Work up, without rushing", points: ["Move on once your fear has halved.", "Every step, big or small, counts."] },
      ],
    },
    sources: [EMM_FEARS, NHS_CLAUSTRO, NOPANIC_PHOBIA, NHS_AGORA_TREATMENT, NHS_AFP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When should you move on to the next situation on your list?",
      options: [{ text: "When your fear has reduced by half", right: true }, { text: "After trying it just once" }, { text: "Only when you feel no fear at all" }],
      why: "Start with the lowest-scoring situation, and keep putting yourself in it until your fear has reduced by half. Once your fear has reduced by half, move on to the next situation on your list.",
    },
  },
  {
    id: "phob-cbt",
    kicker: "Treatment",
    question: "How does CBT help with a phobia, and how do I get it?",
    hook: "CBT looks at how your thoughts, feelings and actions feed each other, and gives you practical ways to break the pattern.",
    short: "Cognitive behavioural therapy (CBT) is a talking therapy where a therapist helps you change how you think and act. It is a recommended treatment for phobias, and it often includes exposure therapy. You can refer yourself to NHS talking therapies without seeing a GP, and you do not need a diagnosis.",
    sections: [
      {
        heading: "What CBT is",
        paragraphs: [
          "CBT is a type of talking therapy where a therapist helps you to change how you think and act. It is a recommended treatment for many mental health problems, including anxiety, social anxiety and phobias.",
          "For claustrophobia, the NHS describes CBT as a talking therapy that explores your thoughts, feelings and behaviour, and develops practical ways of effectively dealing with your phobia.",
        ],
      },
      {
        heading: "What happens in sessions",
        paragraphs: [
          "In a typical session, you talk about situations you find difficult and how they make you think, feel and act. You might question unhelpful thoughts, notice your emotions and physical feelings without reacting to them, and change what you do, such as doing activities you have been avoiding.",
          "You will usually be asked to practise what you have learned between sessions. It is important to do this for CBT to work.",
        ],
      },
      {
        heading: "Changing the thought, then facing the fear",
        paragraphs: [
          "Many people with agoraphobia have the unrealistic thought that a panic attack will kill them. The therapist encourages a more positive way of thinking: a panic attack may be unpleasant, but it is not fatal and will pass.",
          "This shift in thinking can make a person more willing to confront situations that scared them before. CBT is usually combined with exposure therapy, starting with relatively modest goals.",
        ],
      },
      {
        heading: "How long it takes",
        paragraphs: [
          "You will usually have between 5 and 15 sessions of CBT, depending on what you are having it for. It can be guided self-help, one-to-one or in a group, and done in person, online or on the phone.",
          "Anxiety UK says the National Institute for Health and Care Excellence recommends CBT as a first-line psychological treatment for all the main anxiety disorders, ahead of medication in most cases.",
        ],
      },
      {
        heading: "Getting CBT",
        paragraphs: [
          "You can get CBT for free on the NHS, and you do not need a diagnosed mental health condition. To refer yourself to NHS talking therapies, you need to be registered with a GP and aged 18 or over, or 16 or over in some areas.",
          "If you prefer, a GP can refer you. If you choose to pay privately, you can find an accredited CBT therapist on the UK CBT register.",
        ],
      },
    ],
    helps: [
      "Refer yourself to NHS talking therapies, or ask a GP to refer you.",
      "Practise what you learn between sessions, as this is important for CBT to work.",
      "Talk about the situations you find difficult and how they make you think, feel and act.",
      "Keep using your skills after CBT ends, and speak to a GP if you are still having problems.",
      CRISIS,
    ],
    tryThisWeek: [
      "Find your local talking therapies service.",
      "Practise between sessions.",
      "Note situations you find difficult.",
    ],
    ask: "Can you refer me for CBT for my phobia, and how long is the wait here?",
    interactive: {
      kind: "scenarios",
      title: "Getting the most from CBT",
      scenarios: [
        {
          id: "unsure",
          situation: "You want help, but you are not sure talking therapies is right for you.",
          options: [{ text: "See a GP for advice", best: true }, { text: "Wait and see if it passes" }],
          why: "See a GP if you want help with your mental health but are not sure if NHS talking therapies is right for you.",
        },
        {
          id: "homework",
          situation: "Your therapist sets a task to try before the next session.",
          options: [{ text: "Practise it between sessions", best: true }, { text: "Leave it until the next session" }],
          why: "You will usually be asked to practise what you have learned between sessions. It is important to do this for CBT to work.",
        },
        {
          id: "thought",
          situation: "You are sure a panic attack in a busy shop could kill you.",
          options: [{ text: "Remind yourself panic is not fatal", best: true }, { text: "Never go into busy shops" }],
          why: "A panic attack may be unpleasant, but it is not fatal and will pass. This shift in thinking can make it easier to face situations.",
        },
        {
          id: "after",
          situation: "Your course of CBT has ended, but some problems remain.",
          options: [{ text: "Speak to a GP", best: true }, { text: "Give up on treatment" }],
          why: "If you are still having problems after CBT has finished, a GP might suggest more CBT or a different type of treatment.",
        },
      ],
    },
    sources: [NHS_CBT, NHS_CLAUSTRO, NHS_AGORA_TREATMENT, AUK_CBT, NHS_TT, NHS_FIND_TT, NHS_PHOBIAS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How many sessions of CBT do people usually have?",
      options: [{ text: "Between 5 and 15", right: true }, { text: "Just 1" }, { text: "More than 50" }],
      why: "You will usually have between 5 and 15 sessions of CBT, depending on what you are having it for.",
    },
  },
  {
    id: "phob-medicines",
    kicker: "Treatment",
    question: "Can medicine help with a phobia?",
    hook: "Talking therapy is usually the main treatment. Medicines can ease anxiety for some people, and none should be stopped without the doctor.",
    short: "Treatments for phobias can include medicines such as antidepressants, beta blockers and sedatives that calm and relax. A beta blocker such as propranolol can help with physical symptoms like sweating and shaking, and a sedative such as diazepam is only for short-term use. Do not stop an antidepressant suddenly or without talking to your doctor first.",
    sections: [
      {
        heading: "Where medicine fits",
        paragraphs: [
          "Treatments for phobias include talking therapies such as CBT, and medicines such as antidepressants, beta blockers and sedatives that calm and relax.",
          "For agoraphobia, medicine may be recommended if self-help and lifestyle changes have not controlled your symptoms. In more severe cases, it can be used together with CBT or applied relaxation.",
        ],
      },
      {
        heading: "Antidepressants",
        paragraphs: [
          "Antidepressants can be used to treat phobias as well as depression. SSRIs, such as sertraline, are the most widely used type, and sertraline is usually recommended for people with agoraphobia.",
          "Antidepressants usually take 1 to 2 weeks to start having an effect and can take up to 8 weeks to work fully. Side effects can include feeling sick, feeling agitated or shaky, and sweating more than normal, and many ease after a couple of weeks.",
          "It is not common, but some people have suicidal thoughts or an urge to self-harm when they start an antidepressant. Speak to your doctor straight away if this happens.",
        ],
      },
      {
        heading: "Beta blockers",
        paragraphs: [
          "Beta blockers, such as propranolol, slow down your heartbeat. Propranolol can help with the physical symptoms of anxiety, like sweating and shaking, and usually starts to work in a few hours.",
          "Its main side effects are feeling dizzy or tired, cold hands or feet, difficulties sleeping and nightmares. Beta blockers may not be suitable if you have a breathing problem, such as asthma.",
        ],
      },
      {
        heading: "Sedatives, only for a short time",
        paragraphs: [
          "Diazepam is a type of medicine called a benzodiazepine. It can be used for severe anxiety, or to relax you before treatment, but should only be used short term, up to 4 weeks, as taking it for longer can cause addiction and withdrawal symptoms.",
          "If you have claustrophobia and need an MRI scan, talk to the hospital before your appointment. You may be able to have a medicine to help you relax, and you should not drive for 24 hours afterwards.",
        ],
      },
      {
        heading: "Stopping safely",
        paragraphs: [
          "Do not stop taking an antidepressant suddenly or without talking to your doctor first. They will help you reduce the dose gradually, usually over several weeks or months.",
          "Stopping diazepam suddenly can also cause withdrawal symptoms, so your doctor will reduce the dose gradually. Ask a pharmacist or doctor before taking other remedies, such as St John's wort, with an antidepressant.",
        ],
      },
    ],
    helps: [
      "Keep taking an antidepressant as prescribed, as it can take up to 8 weeks to work fully.",
      "Talk to your doctor if side effects are hard to manage or you feel the medicine is not helping.",
      "Never stop an antidepressant or diazepam suddenly; your doctor will help you reduce it gradually.",
      "If propranolol makes you feel dizzy, do not drive, cycle or use tools or machinery.",
      "Ask a pharmacist or doctor if you are unsure about taking your medicine with alcohol or other remedies.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep taking it as prescribed.",
      "Tell your doctor about side effects.",
      "Never stop suddenly.",
    ],
    ask: "Would a medicine help alongside therapy for my phobia, and what side effects should I look out for?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines, card by card",
      intro: "Turn each card to see when each one may be used. Always discuss any change with your doctor.",
      cards: [
        { id: "ssri", front: "SSRIs, such as sertraline", when: "The most widely used antidepressants", back: "Can take up to 8 weeks to work fully. Many side effects ease after a couple of weeks. Never stop suddenly." },
        { id: "snri", front: "SNRIs or another SSRI", when: "If sertraline has not helped agoraphobia", back: "A similar type of medicine. How long you take it depends on how you respond, sometimes 6 to 12 months or more." },
        { id: "pregabalin", front: "Pregabalin", when: "If SSRIs or SNRIs are not suitable", back: "May be recommended for agoraphobia. Dizziness and drowsiness are common side effects." },
        { id: "propranolol", front: "Propranolol, a beta blocker", when: "For physical symptoms of anxiety", back: "Slows the heart rate and can help with sweating and shaking. Usually starts to work in a few hours." },
        { id: "diazepam", front: "Diazepam, a sedative", when: "Short term only, up to 4 weeks", back: "Used for severe anxiety or to relax you before treatment. Longer use can cause addiction and withdrawal symptoms." },
      ],
    },
    sources: [NHS_PHOBIAS, NHS_AGORA_TREATMENT, NHS_ANTIDEPRESSANTS, NHS_BETA, NHS_PROPRANOLOL, NHS_DIAZEPAM, NHS_CLAUSTRO, NHS_MRI, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long can antidepressants take to work fully?",
      options: [{ text: "Up to 8 weeks", right: true }, { text: "A few hours" }, { text: "They work straight away" }],
      why: "Antidepressants usually take 1 to 2 weeks to start having an effect and can take up to 8 weeks to work fully.",
    },
  },
  {
    id: "phob-self-help",
    kicker: "Self-help",
    question: "What can I do myself to manage a phobia?",
    hook: "Small, everyday steps add up: calmer breathing, talking it through and facing things a little at a time.",
    short: "Things you can do include breathing exercises, talking to someone you trust and joining a self-help group. Be careful looking things up online, check whether places like zoos and airlines run sessions for people with phobias, and avoid caffeine after 3pm. If self-help is not enough, talking therapies can help.",
    sections: [
      {
        heading: "Things the NHS suggests",
        paragraphs: [
          "Try breathing exercises to help you relax, and talk to someone you trust about your phobia. Meeting others with similar phobias and experiences, in a self-help group online or in person, can help.",
          "Check places like zoos and airlines for sessions they may run for people with phobias.",
        ],
      },
      {
        heading: "A calming breath",
        paragraphs: [
          "The NHS calming breathing technique takes just a few minutes and can be done anywhere. Let your breath flow as deep down into your belly as is comfortable, breathing in through your nose and out through your mouth.",
          "Breathe in gently and regularly, counting steadily from 1 to 5 if it helps, then let the breath flow out gently. Repeat for at least 5 minutes, and do it regularly as part of your daily routine for the most benefit.",
        ],
      },
      {
        heading: "Stop fighting the feeling",
        paragraphs: [
          "No Panic says fighting anxious feelings can start a vicious circle: the more we fight, the more we fear. Try to accept what you are feeling as a bunch of symptoms that cannot actually harm you.",
          "Do not avoid situations that make you anxious. Try slowly building up the time you spend in them, and set small targets that you can easily achieve.",
        ],
      },
      {
        heading: "Look after the basics",
        paragraphs: [
          "Do not have energy drinks or drinks containing caffeine after 3pm, as caffeine can affect your sleep and make your anxiety worse.",
          "Regular exercise and a healthy diet with regular meals can help. Try not to use alcohol, cigarettes, gambling or drugs to relieve anxiety, as these can all contribute to poor mental health.",
        ],
      },
      {
        heading: "Take care online, and keep notes",
        paragraphs: [
          "Be careful about looking up information online, as you may not be ready to see triggering images.",
          "No Panic suggests keeping a journal of your thoughts and feelings. It may help you understand whether certain things trigger your anxiety.",
        ],
      },
    ],
    helps: [
      "Try breathing exercises to help you relax.",
      "Talk to someone you trust about your phobia.",
      "Join a self-help group online or in person.",
      "Do not have energy drinks or drinks containing caffeine after 3pm.",
      "Set small targets you can easily achieve, and build up time in worrying situations slowly.",
      CRISIS,
    ],
    tryThisWeek: [
      "Practise a breathing exercise daily.",
      "Talk to someone you trust.",
      "No caffeine after 3pm.",
    ],
    ask: "Is there self-help I can start now, while I wait for treatment?",
    interactive: {
      kind: "timeline",
      title: "A five-minute calming breath",
      steps: [
        { id: "settle", when: "First", title: "Get comfortable", points: ["Stand, sit in a chair that supports your back, or lie down.", "Loosen any clothes that restrict your breathing."] },
        { id: "belly", when: "Then", title: "Breathe into your belly", points: ["Let your breath flow as deep as is comfortable, without forcing it.", "Try breathing in through your nose and out through your mouth."] },
        { id: "count", when: "Each breath", title: "Count gently", points: ["Breathe in gently and regularly, counting from 1 to 5.", "Let it flow out, counting from 1 to 5 again. You may not reach 5 at first."] },
        { id: "repeat", when: "At least 5 minutes", title: "Keep going", points: ["Repeat for at least 5 minutes.", "Do it regularly, as part of your daily routine."] },
      ],
    },
    sources: [NHS_PHOBIAS, NHS_BREATHING, NOPANIC_SELF_HELP, NHS_AFP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "After what time does the NHS suggest avoiding caffeine if you have a phobia?",
      options: [{ text: "After 3pm", right: true }, { text: "After 10pm" }, { text: "Caffeine makes no difference" }],
      why: "Do not have energy drinks or drinks containing caffeine after 3pm, as caffeine can affect your sleep and make your anxiety worse.",
    },
  },
  {
    id: "phob-needles",
    kicker: "Living with it",
    question: "How can I cope with a fear of needles, blood or medical tests?",
    hook: "A fear of needles or blood can make it hard to get the care you need. Telling staff early is one of the most helpful things you can do.",
    short: "Phobias of bodily fluids such as blood, and situational phobias such as going to the dentist, are common. If you are worried about needles, tell the person doing your blood test; they can help you feel more comfortable, and you can bring someone with you. If you have claustrophobia and need an MRI scan, talk to the hospital before your appointment.",
    sections: [
      {
        heading: "A common kind of phobia",
        paragraphs: [
          "Some phobias are only triggered when you come into contact with the thing that causes them, including bodily fluids such as blood or vomit.",
          "Rethink Mental Illness lists body phobias, such as blood or being sick, and situational phobias, such as going to the dentist, among the common examples.",
        ],
      },
      {
        heading: "Blood tests",
        paragraphs: [
          "A blood test is usually done at a GP surgery or hospital, and usually takes about 10 minutes.",
          "Tell the healthcare professional doing your blood test if you are worried about needles. They can help you feel more comfortable, and you can also bring someone with you for support.",
        ],
      },
      {
        heading: "Scans and small spaces",
        paragraphs: [
          "If you feel anxious about an MRI scan or have a fear of small spaces, talk to a healthcare professional at the hospital before your appointment. You may be able to have a medicine to help you relax, and you can ask to bring someone to support you.",
          "Talk to your consultant about a sedative well in advance of the scan. Some open or upright MRI centres are designed for people with severe MRI anxiety, but they are often only available privately.",
          "During the scan, the radiographer controls the scanner from another room, and can hear and speak to you.",
        ],
      },
      {
        heading: "If you feel faint",
        paragraphs: [
          "Some people with a phobia have an intense fear that they may faint. If you feel like you are about to faint, the NHS suggests lying down with your legs raised, or, if you cannot, sitting with your head lowered between your knees.",
          "Drinking some water, crossing your legs while standing up, or clenching your fists may also help. See a GP if you have fainted.",
        ],
      },
      {
        heading: "Treating the fear itself",
        paragraphs: [
          "Talking therapies can help with phobias, and you can refer yourself without a GP. Gradually facing a feared situation, starting with the easiest step, can help you overcome it and feel more in control.",
        ],
      },
    ],
    helps: [
      "Tell the healthcare professional doing your blood test if you are worried about needles.",
      "Bring someone with you to a blood test or scan for support.",
      "If you have claustrophobia, talk to the hospital well before an MRI scan.",
      "If you feel faint, lie down with your legs raised, or sit with your head lowered between your knees.",
      "Refer yourself to NHS talking therapies for help with the phobia itself.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell staff you are worried about needles.",
      "Ask someone to come with you.",
      "Raise claustrophobia before an MRI.",
    ],
    ask: "What can help me before a blood test, injection or scan, given my phobia?",
    interactive: {
      kind: "scenarios",
      title: "Before a test or procedure",
      scenarios: [
        {
          id: "blood",
          situation: "You have a blood test booked, and you dread the needle.",
          options: [{ text: "Tell the person taking blood", best: true }, { text: "Cancel without saying why" }],
          why: "Tell the healthcare professional doing your blood test if you are worried about needles. They can help you feel more comfortable.",
        },
        {
          id: "mri",
          situation: "You need an MRI scan, but small spaces frighten you.",
          options: [{ text: "Talk to the hospital before the day", best: true }, { text: "Say nothing until you arrive" }],
          why: "Talk to a healthcare professional at the hospital before your appointment. You may be able to have a medicine to help you relax.",
        },
        {
          id: "faint",
          situation: "You start to feel faint while you wait.",
          options: [{ text: "Lie down with your legs raised", best: true }, { text: "Stand up quickly" }],
          why: "If you feel like you are about to faint, lie down with your legs raised, or sit with your head lowered between your knees.",
        },
        {
          id: "avoid",
          situation: "Fear has stopped you having tests for a long time.",
          options: [{ text: "Refer yourself to talking therapies", best: true }, { text: "Keep avoiding medical care" }],
          why: "Talking therapies can help with phobias, and you can refer yourself without a GP.",
        },
      ],
    },
    sources: [NHS_PHOBIAS, RETHINK_ANXIETY, NHS_BLOOD_TESTS, NHS_MRI, NHS_CLAUSTRO, NHS_FAINTING, NHS_TT, EMM_FEARS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the NHS suggest if you are worried about needles at a blood test?",
      options: [{ text: "Tell the healthcare professional doing the test", right: true }, { text: "Say nothing and look away" }, { text: "Avoid blood tests altogether" }],
      why: "Tell the healthcare professional doing your blood test if you are worried about needles. They can help you feel more comfortable.",
    },
  },
  {
    id: "phob-agoraphobia",
    kicker: "Living with it",
    question: "What is agoraphobia, and how can I start going out again?",
    hook: "Agoraphobia is not simply a fear of open spaces. With support and small steps, many people widen their world again.",
    short: "Agoraphobia is a fear of being in situations where escape might be difficult, or where help would not be available if things go wrong. People may avoid public transport, shops or leaving home. Self-help, CBT with exposure and sometimes medicine can help, and a GP can talk to you by phone if going out feels too hard.",
    sections: [
      {
        heading: "More than open spaces",
        paragraphs: [
          "Many people assume agoraphobia is simply a fear of open spaces, but it is a more complex condition. Someone with agoraphobia may be scared of travelling on public transport, visiting a shopping centre or leaving home.",
          "Its severity varies a lot. Someone with severe agoraphobia may be unable to leave the house, while someone with mild agoraphobia may be able to travel short distances without problems.",
        ],
      },
      {
        heading: "How avoidance shows",
        paragraphs: [
          "People may avoid crowded places, public transport and queues, need to be with someone they trust when going anywhere, or avoid being far from home.",
          "Anxiety UK says some people can travel more easily with a trusted friend or family member, but this can quickly lead to dependency on that person.",
        ],
      },
      {
        heading: "Getting help, even from home",
        paragraphs: [
          "Speak to your GP if you think you have agoraphobia. If you are unable to visit in person, it should be possible to arrange a telephone consultation.",
          "Your GP will ask about your symptoms, how often they happen and in what situations. Try not to feel anxious or embarrassed: your GP needs to know as much as possible to recommend the right treatment.",
          "You can also refer yourself to NHS talking therapies, which can help if you have an overwhelming fear of something, including agoraphobia.",
        ],
      },
      {
        heading: "Treatment, step by step",
        paragraphs: [
          "A stepped approach is usually recommended. First, find out about the condition and try self-help and lifestyle changes. Next comes a guided self-help programme, and then more intensive treatment, such as CBT, or medicine.",
          "CBT is usually combined with exposure therapy, starting with modest goals such as going to your local corner shop. A course usually consists of 12 to 15 weekly sessions, each lasting about an hour.",
        ],
      },
      {
        heading: "If panic comes",
        paragraphs: [
          "During a panic attack, try to stay where you are and resist the urge to run to a place of safety. Focus on something non-threatening and visible, such as the time passing on your watch, and breathe slowly and deeply, counting slowly to 3 on each breath in and out.",
          "Remind yourself that the frightening thoughts and sensations are a sign of panic and will pass. Trying to fight the symptoms can often make things worse, so accept that the attack is not life threatening.",
        ],
      },
    ],
    helps: [
      "Ask your GP for a telephone consultation if you cannot visit in person.",
      "Refer yourself to NHS talking therapies, which can help with agoraphobia.",
      "During a panic attack, stay where you are and breathe slowly and deeply.",
      "Take regular exercise, and avoid drugs, alcohol and drinks containing caffeine, which can make symptoms worse.",
      "Set modest goals, such as a trip to the corner shop, and build up as you become more confident.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a phone appointment with a GP.",
      "Practise slow, deep breathing.",
      "Plan one modest goal.",
    ],
    ask: "Could I have a telephone appointment, and can you refer me for CBT for agoraphobia?",
    interactive: {
      kind: "signs",
      title: "Things to tell your GP",
      intro: "Tick any that apply. Your GP needs to know as much as possible to recommend the right treatment.",
      signs: ["Finding leaving the house stressful", "Avoiding crowded places, queues or public transport", "Needing someone I trust with me to go anywhere", "Avoiding being far from home", "Relying on others to shop for me", "Fearing being left alone at home", "Fearing a panic attack in public", "Not being able to leave the house for long periods"],
      after: "These are common signs of agoraphobia. Share them with your GP, by phone if going in is too hard.",
      copyHeading: "What I want my GP to know",
    },
    sources: [NHS_AGORA, NHS_AGORA_SYMPTOMS, AUK_AGORA, NHS_AGORA_DIAGNOSIS, NHS_FIND_TT, NHS_AGORA_TREATMENT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is agoraphobia?",
      options: [{ text: "A fear of situations where escape might be difficult", right: true }, { text: "Simply a fear of open spaces" }, { text: "A dislike of crowds that soon passes" }],
      why: "Many people assume agoraphobia is simply a fear of open spaces, but it is a more complex condition: a fear of being in situations where escape might be difficult, or where help would not be available.",
    },
  },
  {
    id: "phob-family",
    kicker: "Family and friends",
    question: "How can I help someone I love who has a phobia?",
    hook: "Patience and steady support can make a real difference, as long as you look after yourself too.",
    short: "Being reliable, asking how you can help and taking the person's feelings seriously can all help. Encourage them to explore support, without forcing them, and remember that they are much more than their anxiety. Caring can be demanding, so look after your own wellbeing too.",
    sections: [
      {
        heading: "Take it seriously",
        paragraphs: [
          "Even if someone is anxious about things that do not seem rational to you, the way they are feeling is very real to them. The Royal College of Psychiatrists suggests listening, being patient and not taking it personally.",
          "Anxiety UK says simply explaining that their thoughts are unfounded will not always reassure them.",
        ],
      },
      {
        heading: "Ways to help",
        paragraphs: [
          "Be reliable: knowing there is someone they can depend on can be very reassuring. Ask what you can do, rather than simply giving advice, because anxiety affects different people in very different ways.",
          "Do not only focus on anxiety. Remind them they are much more than their anxiety, and encourage things they enjoy, such as exercising, spending time outdoors and socialising.",
        ],
      },
      {
        heading: "Encouraging help",
        paragraphs: [
          "Encourage them to explore support, such as self-help resources, support groups or therapy. They could contact a GP, or refer themselves for free NHS talking therapy.",
          "Do not force someone to talk to you or get help, or go to a GP on their behalf. Gently explore their reasons and listen without judgement. Offering practical help, such as going to appointments with them, can help.",
        ],
      },
      {
        heading: "Helping without taking over",
        paragraphs: [
          "With agoraphobia, a trusted friend or family member can make travel easier, but Anxiety UK says this can quickly lead to dependency. Rethink Mental Illness suggests encouraging independence, and says setting clear boundaries may improve wellbeing for you both.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Caring for someone can often be demanding, and you are not alone if you feel overwhelmed at times. No Panic invites carers to call its helpline, on 0300 772 9844, for a chat to help manage their own anxiety or stress.",
          "Make time for yourself, take breaks and join a carers group for support. Ask your local council for a carer's assessment, and talk to your GP if you are feeling low or stressed.",
        ],
      },
    ],
    helps: [
      "Be reliable, and ask how you can help rather than simply giving advice.",
      "Listen, be patient and take their feelings seriously.",
      "Encourage them to explore support, but do not force them to talk or get help.",
      "Offer practical help, such as going to appointments with them.",
      "Look after yourself, and ask your local council for a carer's assessment.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask how you can help.",
      "Offer to go to an appointment.",
      "Take some time for yourself.",
    ],
    ask: "How can I support my relative's treatment, and is there support for me as a carer?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "explain",
          situation: "Your partner panics about something you know is safe.",
          options: [{ text: "Listen and take their feelings seriously", best: true }, { text: "Tell them it is silly" }],
          why: "Even if someone is anxious about things that do not seem rational to you, the way they are feeling is very real to them.",
        },
        {
          id: "advice",
          situation: "You want to help, but are not sure how.",
          options: [{ text: "Ask what would help them", best: true }, { text: "Tell them what to do" }],
          why: "Anxiety affects different people in very different ways, so it is important to ask what you can do rather than simply giving advice.",
        },
        {
          id: "gp",
          situation: "They are not ready to see a GP yet.",
          options: [{ text: "Gently explore their reasons", best: true }, { text: "Book the appointment for them" }],
          why: "Do not force someone to get help, or go to a GP on their behalf. Gently explore their reasons and listen without judgement.",
        },
        {
          id: "tired",
          situation: "You feel worn out by supporting them.",
          options: [{ text: "Take a break and seek carer support", best: true }, { text: "Keep going without a break" }],
          why: "Caring can be demanding. Make time for yourself, take breaks and join a carers group for support.",
        },
      ],
    },
    sources: [RCPSYCH_ANXIETY, AUK_SUPPORTING, EMM_HELPING, AUK_AGORA, RETHINK_SUPPORTING, NOPANIC_CARERS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does Anxiety UK suggest instead of simply giving advice?",
      options: [{ text: "Ask what you can do to help", right: true }, { text: "Explain that the fear is unfounded" }, { text: "Avoid talking about it at all" }],
      why: "Anxiety affects different people in very different ways, so ask what you can do, rather than simply giving advice.",
    },
  },
  {
    id: "phob-support",
    kicker: "Support",
    question: "Where can I find support for a phobia?",
    hook: "You do not have to face a phobia alone. Charities, groups and helplines offer a listening ear and practical tools.",
    short: "No Panic runs a helpline every day of the year, and Anxiety UK offers support calls, groups and therapy. Self-help groups, online or in person, let you meet others with similar phobias. NHS talking therapies can help too, and Samaritans is there any time, day or night, on 116 123.",
    sections: [
      {
        heading: "No Panic",
        paragraphs: [
          "No Panic's helpline, on 0300 772 9844, is open from 10am to 10pm every day of the year and is staffed by trained volunteers. During the night, a recorded breathing exercise is played that can help you through a panic attack.",
          "No Panic also offers CBT-focused mentoring by phone for its members, including an introduction to exposure therapy for phobias. It says that, while much of its help is CBT-focused, it is not a team of cognitive behavioural therapists. Its approach is self-help based on relaxation and CBT strategies.",
        ],
      },
      {
        heading: "Anxiety UK",
        paragraphs: [
          "Anxiety UK supports anyone with anxiety, phobias, panic attacks or other anxiety disorders. Its TAUK to us service is a paid, confidential call of up to 30 minutes with a peer supporter who has lived experience of anxiety. It is not a crisis service.",
          "Anxiety UK also has an online chatbot for common questions, runs support groups, and offers CBT face to face, by phone or online.",
        ],
      },
      {
        heading: "Groups and peer support",
        paragraphs: [
          "Meeting others with similar phobias and experiences, in a self-help group online or in person, can help.",
          "The Royal College of Psychiatrists suggests asking your GP about self-help groups, as some are about specific anxieties and phobias. Rethink Mental Illness says hearing about the experiences of others can help you feel understood and less alone.",
        ],
      },
      {
        heading: "NHS help",
        paragraphs: [
          "NHS talking therapies can help if you have an overwhelming fear of something, including agoraphobia. You can refer yourself, or ask your GP to refer you.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "Samaritans is free to call any time, day or night, from any phone, on 116 123. For urgent help, call 111 and select the mental health option, and call 999 or go to A&E if you do not feel you can keep yourself safe.",
        ],
      },
    ],
    helps: [
      "Call the No Panic helpline on 0300 772 9844, from 10am to 10pm every day.",
      "Join a self-help group online or in person.",
      "Ask your GP about self-help groups for specific anxieties and phobias.",
      "Refer yourself to NHS talking therapies, or ask your GP to refer you.",
      CRISIS,
    ],
    tryThisWeek: [
      "Save the No Panic helpline number.",
      "Look for a self-help group.",
      "Ask your GP about local groups.",
    ],
    ask: "Is there a support group for phobias near me, or online?",
    interactive: {
      kind: "flip-cards",
      title: "Where to turn, card by card",
      intro: "Turn each card to see what each one offers and when.",
      cards: [
        { id: "no-panic", front: "No Panic helpline", when: "10am to 10pm, every day", back: "Call 0300 772 9844 to talk to a trained volunteer. Calls cost no more than a national rate call." },
        { id: "crisis-message", front: "No Panic crisis message", when: "Any time, 24 hours", back: "A recorded breathing exercise to help you through a panic attack, on 01952 680835." },
        { id: "tauk", front: "Anxiety UK, TAUK to us", when: "A booked call, up to 30 minutes", back: "A paid, confidential call with a peer supporter who has lived experience of anxiety. Not a crisis service." },
        { id: "groups", front: "Self-help groups", when: "Online or in person", back: "Meeting others with similar phobias and experiences can help. Your GP may know of local groups." },
        { id: "nhs", front: "NHS talking therapies", when: "Refer yourself, or via a GP", back: "Help for an overwhelming fear of something, including agoraphobia. You do not need a diagnosis." },
        { id: "samaritans", front: "Samaritans", when: "Any time, day or night", back: "Free to call on 116 123 from any phone. They listen, and will not judge or tell you what to do." },
      ],
    },
    sources: [NOPANIC_HELPLINE, NOPANIC_SERVICES, RETHINK_ANXIETY, AUK_TAUK, AUK_CONTACT, AUK_GROUPS, AUK_CBT, NHS_PHOBIAS, RCPSYCH_ANXIETY, NHS_FIND_TT, SAMARITANS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When is the No Panic helpline open?",
      options: [{ text: "10am to 10pm, every day of the year", right: true }, { text: "Weekdays only" }, { text: "Only by appointment" }],
      why: "No Panic's helpline, on 0300 772 9844, is open from 10am to 10pm every day of the year and is staffed by trained volunteers.",
    },
  },
];
