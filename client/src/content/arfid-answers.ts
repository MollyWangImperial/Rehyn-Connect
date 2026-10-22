import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the ARFID (avoidant eating) page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from Beat, the eating
// disorder charity, the Royal College of Psychiatrists' ARFID page, the NHS, the National Autistic Society and
// Rethink Mental Illness. mind.org.uk was not used. The NHS has no ARFID page of its own; its eating disorders
// overview covers ARFID briefly. NICE has no ARFID guidance (Beat and RCPsych both say so), so none is cited.
// Every answer follows Beat's media guidelines: no weights, BMI figures, calorie or food amounts, and no body
// descriptions; hopeful and practical. Where crisis routes appear they are worded as the NHS, Samaritans and
// Beat give them (999 or A&E, 111 mental health option, Samaritans 116 123, Shout 85258). Autism is described
// as the NHS does: a difference in how the brain develops, not an illness. Nothing here suggests starting,
// stopping or changing a medicine or supplement without the doctor. General information only; it never
// replaces what a person's own GP, dietitian or eating disorder team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const beat = (label: string, path: string): LearnSource => ({ label: `Beat: ${label}`, url: `https://www.beateatingdisorders.org.uk/${path}` });
const nas = (label: string, path: string): LearnSource => ({ label: `National Autistic Society: ${label}`, url: `https://www.autism.org.uk/advice-and-guidance/${path}` });

const NHS_ED = nhs("Eating disorders: overview", "mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/");
const NHS_HELP_SOMEONE = nhs("How to help someone with an eating disorder", "mental-health/advice-for-life-situations-and-events/how-to-help-someone-with-eating-disorder/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_IDA = nhs("Iron deficiency anaemia", "conditions/iron-deficiency-anaemia/");
const NHS_AUTISM = nhs("What is autism?", "conditions/autism/what-is-autism/");
const NHS_ADHD = nhs("Attention deficit hyperactivity disorder (ADHD) in adults", "conditions/adhd-adults/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const BEAT_ARFID = beat("ARFID", "get-information-and-support/about-eating-disorders/types/arfid/");
const BEAT_TYPES = beat("Types of eating disorder", "get-information-and-support/about-eating-disorders/types/");
const BEAT_AUTISM = beat("Eating disorders and autism", "get-information-and-support/about-eating-disorders/eating-disorders-and-autism/");
const BEAT_GP = beat("Going to the doctor", "get-information-and-support/get-help-for-myself/going-to-the-doctor/");
const BEAT_HELPLINE = beat("I need support now: Helpline", "get-information-and-support/get-help-for-myself/support-now/");
const BEAT_ARFID_GROUP = beat("ARFID Online Support Group (formerly Hummingbird)", "get-information-and-support/get-help-for-myself/support-now/online-support-groups/arfid-support-group/");
const BEAT_TIPS = beat("Tips for supporting someone with an eating disorder", "get-information-and-support/support-someone-else/tips-for-supporting-somebody-with-an-eating-disorder/");
const BEAT_CARERS = beat("Support for carers", "get-information-and-support/support-someone-else/support-for-carers/");
const BEAT_FAMILY_GROUP = beat("ARFID peer support group for family members (formerly Endeavour)", "get-information-and-support/support-someone-else/arfid-family-peer-support-group/");
const BEAT_FAMILY_ONE = beat("ARFID support for family members (formerly Anchor)", "get-information-and-support/support-someone-else/family-arfid-support/");
const BEAT_WISH = beat("What do people affected by ARFID wish we knew?", "your-stories/edaw/arfid-wish-we-knew/");
const BEAT_PICKY = beat("Dietitians Sarah Fuller and Clare Ellison on ARFID vs 'picky eating'", "your-stories/edaw/arfid-vs-picky-eating/");

const RCPSYCH_ARFID: LearnSource = { label: "Royal College of Psychiatrists: Avoidant/restrictive food intake disorder (ARFID)", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/avoidant-restrictive-food-intake-disorder-(arfid)" };
const RETHINK_ED: LearnSource = { label: "Rethink Mental Illness: Eating disorders", url: "https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-conditions/eating-disorders/" };
const NAS_ED = nas("Eating disorders", "mental-health/eating-disorders");
const NAS_EATING = nas("Eating: a guide for all audiences", "behaviour/eating/all-audiences");
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL). */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you cannot keep yourself safe.";

export const arfidAnswers: LearnArticle[] = [
  {
    id: "arfid-what-it-is",
    kicker: "Understanding",
    question: "What is ARFID?",
    hook: "Not fussiness, and not about body image. ARFID is a diagnosable condition, and it affects adults as well as children.",
    short: "ARFID stands for avoidant/restrictive food intake disorder. It is when someone avoids certain foods, limits how much they eat, or does both, and beliefs about weight or body shape are not the reason. It can happen at any age and at any weight, and there are ways to treat it.",
    sections: [
      {
        heading: "Avoiding, restricting, or both",
        paragraphs: [
          "ARFID stands for avoidant/restrictive food intake disorder. It is when someone avoids certain foods or types of food, limits the overall amount they eat, or does both.",
          "The Royal College of Psychiatrists describes ARFID as a mental health condition. People with ARFID do not eat enough food, or enough different kinds of food, to meet their energy or nutritional needs.",
        ],
      },
      {
        heading: "Not about body image",
        paragraphs: [
          "Beliefs about weight or body shape are not reasons why people develop ARFID. This is what sets it apart from anorexia and bulimia, where thoughts about weight and how the body looks change what and how much someone eats.",
          "ARFID is not diagnosed at the same time as anorexia or bulimia, although it could come before or after them. That matters, because the treatment is different.",
        ],
      },
      {
        heading: "Any age, any weight",
        paragraphs: [
          "Anyone of any age can have ARFID. It occurs in children, teenagers and adults, and it can occur at any weight.",
          "Rethink Mental Illness says only eating certain foods and not trying others is common in young children, but with ARFID the problem can continue into adulthood. For some people the difficulties have been there for almost as long as they can remember; for others they began more recently.",
        ],
      },
      {
        heading: "More than picky eating",
        paragraphs: [
          "ARFID is a diagnosable clinical condition, but it is sometimes misunderstood as picky eating or bad behaviour. People with ARFID struggle to eat certain foods, feel upset when they try to, and need more help than usual to try new ones.",
          "Most children go through a normal phase of selective eating from about the age of two, and most grow out of it at around age five. Two specialist dietitians writing for Beat say it moves from picky eating into ARFID when it affects someone's nutrition or growth, or has a significant impact on their social life, education or work.",
        ],
      },
      {
        heading: "Serious, and treatable",
        paragraphs: [
          "ARFID can affect physical health as well as wellbeing. People affected by it say it is not a choice, and not something they do for attention.",
          "Eating disorders are treatable, and the sooner someone is treated, the more likely recovery is. If you think you might have ARFID, the first step is an appointment with your GP.",
        ],
      },
    ],
    helps: [
      "If you think you might have ARFID, make an appointment to discuss it with your GP.",
      "Remember that ARFID is not fussiness or a choice: it is a diagnosable condition.",
      "Get help early: the sooner someone is treated, the more likely recovery is.",
      "You can talk in confidence to an adviser from Beat by calling the Beat helpline on 0808 801 0677.",
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Remember it is not a choice.",
      "Call the Beat helpline.",
    ],
    ask: "Could my eating be ARFID, and could you refer me for help?",
    interactive: {
      kind: "scenarios",
      title: "Myth or fact?",
      scenarios: [
        {
          id: "fussy",
          situation: "Someone says ARFID is just fussy eating.",
          options: [{ text: "It is a diagnosable condition", best: true }, { text: "It is just fussiness" }],
          why: "ARFID is a diagnosable clinical condition. It is sometimes misunderstood as picky eating or bad behaviour.",
        },
        {
          id: "body",
          situation: "You assume ARFID must be about wanting to change your body.",
          options: [{ text: "Body image is not the reason", best: true }, { text: "It is always about weight" }],
          why: "Beliefs about weight or body shape are not reasons why people develop ARFID.",
        },
        {
          id: "adults",
          situation: "A friend thinks only children get ARFID.",
          options: [{ text: "Anyone of any age can have it", best: true }, { text: "Only children get it" }],
          why: "Anyone of any age can have ARFID. It occurs in children, teenagers and adults.",
        },
        {
          id: "weight",
          situation: "You think ARFID only affects people at a low weight.",
          options: [{ text: "It can occur at any weight", best: true }, { text: "Only at a low weight" }],
          why: "ARFID can occur at any weight, and it varies in different people.",
        },
      ],
    },
    sources: [BEAT_ARFID, NHS_ED, RCPSYCH_ARFID, BEAT_TYPES, BEAT_WISH, BEAT_PICKY, RETHINK_ED],
    quiz: {
      question: "Is ARFID driven by worries about weight or body shape?",
      options: [{ text: "No, those beliefs are not the reason", right: true }, { text: "Yes, always" }, { text: "Only in adults" }],
      why: "Beliefs about weight or body shape are not reasons why people develop ARFID.",
    },
  },
  {
    id: "arfid-types",
    kicker: "Understanding",
    question: "Why do people with ARFID avoid food?",
    hook: "How food feels and smells, fear of choking or being sick, or simply no appetite: there are three common reasons, and many people have more than one.",
    short: "There are three common reasons behind ARFID, sometimes called subtypes: sensitivity to the taste, texture, smell or look of food; fear of what might happen after eating, such as choking or being sick; and little interest in eating. A person can have one or more of these, so ARFID can look very different from one person to the next.",
    sections: [
      {
        heading: "Sensory: how food feels, smells and looks",
        paragraphs: [
          "Some people are very sensitive to the taste, texture, smell or appearance of certain foods, or can only eat foods at a certain temperature. This can lead to sensory-based avoidance.",
          "With ARFID, this is more extreme than just disliking certain foods. The NHS describes it as negative feelings over the smell, taste or texture of certain foods.",
        ],
      },
      {
        heading: "Fear: worry about what eating might do",
        paragraphs: [
          "Some people have had a distressing experience with food, such as choking, being sick or bad stomach pain. This can lead to fear and anxiety around food or eating, and to avoiding certain foods or textures.",
          "Others have more general worries about the consequences of eating that they find hard to put into words. They may only eat foods they think of as safe.",
        ],
      },
      {
        heading: "Low interest: eating feels like a chore",
        paragraphs: [
          "Some people do not feel hungry in the way others do, or generally have a poor appetite. Eating can feel more like a chore than a pleasure, which can make it hard to eat enough to stay well.",
        ],
      },
      {
        heading: "Often more than one",
        paragraphs: [
          "A person can have one or more of these reasons at the same time, and sometimes there is no clear reason or event behind it at all. This is why ARFID is sometimes called an umbrella term.",
          "What everyone with ARFID shares is avoiding or restricting food, in terms of the overall amount, the range of foods eaten, or both.",
        ],
      },
      {
        heading: "What does not count as ARFID",
        paragraphs: [
          "ARFID would not be diagnosed when someone is fasting, or avoids foods for religious or cultural reasons alone. Nor would it be diagnosed when food is not available, when foods are avoided because of allergies, or when another medical condition clearly explains the eating difficulty.",
        ],
      },
    ],
    helps: [
      "If you think you might have ARFID, make an appointment to discuss it with your GP.",
      "Go prepared with notes about your concerns, and why you think the difficulties are related to ARFID.",
      "Before the appointment, think about how long things have been going on and what you are worried about.",
      "If your surroundings feel overwhelming, notice noise, smells or bright lights, and move somewhere calmer if you can.",
      "You can talk in confidence to an adviser from Beat by calling the Beat helpline on 0808 801 0677.",
    ],
    tryThisWeek: [
      "Make a GP appointment.",
      "Write notes about your concerns.",
      "Notice noise, smells and lights.",
    ],
    ask: "Which of the reasons behind ARFID fits me, and how would that change my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "Three common reasons",
      intro: "Turn each card to see what each reason can look like.",
      cards: [
        { id: "sensory", front: "Sensory", when: "Taste, texture, smell, look", back: "Very sensitive to how some foods taste, feel, smell or look, or to their temperature. More extreme than just disliking a food." },
        { id: "fear", front: "Fear of consequences", when: "After choking or being sick", back: "A distressing experience with food can lead to fear around eating, and to only eating foods that feel safe." },
        { id: "interest", front: "Low interest", when: "Little appetite", back: "Not feeling hungry the way others do. Eating feels like a chore, so it is hard to eat enough to stay well." },
        { id: "mixed", front: "More than one", when: "An umbrella term", back: "One person can have one or more of these at once, and sometimes there is no clear reason at all." },
      ],
    },
    sources: [BEAT_ARFID, NHS_ED, RCPSYCH_ARFID, BEAT_AUTISM],
    quiz: {
      question: "Can someone have more than one reason behind their ARFID?",
      options: [{ text: "Yes, one or more at the same time", right: true }, { text: "No, only ever one" }, { text: "Only children can" }],
      why: "A person can have one or more of these reasons at the same time, and sometimes there is no clear reason or event behind it at all.",
    },
  },
  {
    id: "arfid-signs",
    kicker: "Signs",
    question: "What are the signs of ARFID in adults?",
    hook: "The same meals every day, dreading meals out, forgetting to eat: ARFID can go unnoticed for years. Knowing the signs helps.",
    short: "Possible signs include always having the same meals, finding eating a chore, missing meals, sensitivity to texture or smell, feeling very anxious at mealtimes and avoiding social events with food. Not everyone has every sign. ARFID has often been going on for a long time before anyone realises it is a problem.",
    sections: [
      {
        heading: "A wide range of signs",
        paragraphs: [
          "Because ARFID covers different kinds of difficulty, there is a wide range of possible signs, and not all of them happen in one person. ARFID has often been going on for a long time before anyone realises it is a problem.",
        ],
      },
      {
        heading: "Around food and meals",
        paragraphs: [
          "Possible signs include always having the same meals, always eating something different to everyone else, or only eating foods of a similar colour. Some people are sensitive to the texture, smell or temperature of some foods, and may appear to be a picky eater.",
          "Others take a long time over meals or find eating a chore. They may find it hard to recognise when they are hungry, or miss meals completely, especially when busy with something else.",
          "Some people eat a reasonable range of foods, but overall have much less than they need to stay healthy.",
        ],
      },
      {
        heading: "Feelings and social life",
        paragraphs: [
          "Someone may be very anxious at mealtimes, chewing food very carefully or taking small sips and bites. They may try to avoid social events where food will be present.",
          "Some people have a strong reaction to the sight, smell or presence of a new food, such as gagging or extreme anxiety. Others avoid more and more foods over time, either slowly or quite suddenly.",
        ],
      },
      {
        heading: "Signs in the body",
        paragraphs: [
          "Physical signs can include weight loss and nutritional deficiencies, such as anaemia from not having enough iron. Some people need supplements to make sure their nutritional and energy needs are met.",
          "People with ARFID will not necessarily look a certain way, and ARFID can occur at any weight.",
        ],
      },
      {
        heading: "Not just picky eating",
        paragraphs: [
          "Rethink Mental Illness says the problem can continue into adulthood. People with ARFID say it is not just picky eating, and that it is not as simple as forcing yourself to eat.",
        ],
      },
    ],
    helps: [
      "If you think you might have ARFID, make an appointment to discuss it with your GP.",
      "Go prepared with notes about the signs you have noticed and how long they have been going on.",
      "Take someone close to you to the appointment if that would help.",
      "You can talk in confidence to an adviser from Beat by calling the Beat helpline on 0808 801 0677.",
    ],
    tryThisWeek: [
      "Note the signs you notice.",
      "Note how long it has gone on.",
      "Ask someone to come with you.",
    ],
    ask: "These are the signs I have noticed: could they be ARFID?",
    interactive: {
      kind: "signs",
      title: "Signs you may have noticed",
      intro: "Tick any that sound familiar. Not everyone with ARFID has every sign.",
      signs: [
        "Always having the same meals",
        "Eating something different to everyone else",
        "Taking a long time over meals",
        "Finding it hard to know when you are hungry",
        "Missing meals when busy",
        "Sensitivity to texture, smell or temperature",
        "Feeling very anxious at mealtimes",
        "Avoiding social events with food",
        "Needing supplements to meet your needs",
      ],
      after: "These signs can have other causes too. Take your list to a GP, who can talk it through with you and check your overall health.",
      copyHeading: "Signs I have noticed",
    },
    sources: [BEAT_ARFID, RCPSYCH_ARFID, NHS_ED, BEAT_PICKY, RETHINK_ED, BEAT_WISH],
    quiz: {
      question: "Does everyone with ARFID have every sign?",
      options: [{ text: "No, not all signs happen in one person", right: true }, { text: "Yes, every sign" }, { text: "Only the physical signs" }],
      why: "There is a wide range of possible signs, and not all of them happen in one person.",
    },
  },
  {
    id: "arfid-health",
    kicker: "Your health",
    question: "How can ARFID affect my health?",
    hook: "Eating a narrow range of foods can leave the body short of what it needs, and the effects reach into mood and daily life too.",
    short: "When someone can only eat a narrow range of foods, they may not get the nutrients they need. ARFID can lead to deficiencies such as anaemia, to feeling tired, weak and unwell, and to difficulties at home, at work and with friends. Physical health problems are usually treated first.",
    sections: [
      {
        heading: "Missing nutrients",
        paragraphs: [
          "When someone is only able to eat a narrow range of foods, they may not get the essential nutrients they need for their health and to function day to day.",
          "Some people with ARFID do not eat enough to get the nutrients, minerals and vitamins they need. This can lead to conditions like anaemia, rickets and osteoporosis.",
          "Someone can be any weight and still have a significant nutritional deficiency. Deficiencies can affect healing, hair, nails, teeth, energy levels or sight.",
        ],
      },
      {
        heading: "Tired and unwell",
        paragraphs: [
          "Some people with ARFID lose weight and become malnourished. This can make them feel tired, weak and unwell.",
          "Anaemia through not having enough iron is one deficiency ARFID can lead to. Iron deficiency anaemia can cause tiredness and lack of energy, shortness of breath, noticeable heartbeats and headaches, and a GP will usually check for it with a blood test.",
        ],
      },
      {
        heading: "Mood and daily life",
        paragraphs: [
          "Being limited in what you can eat often causes difficulties at home, at work and with friends. Mood and day-to-day functioning can be affected, and many people find it hard to go out or go on holiday.",
          "People with ARFID can feel a lot of anxiety and fear when they eat, or think about eating, certain foods.",
        ],
      },
      {
        heading: "Treating the body first",
        paragraphs: [
          "If someone with ARFID has developed physical health problems, these are treated first. Treatments can include multivitamins, mineral supplements such as zinc or iron, and advice on alternative and safe foods to eat.",
          "The person's physical health should be monitored, for instance by their GP. In some cases, when physical risk is judged to be high, a period of tube feeding may be recommended.",
        ],
      },
      {
        heading: "When to get help quickly",
        paragraphs: [
          "If you are worried about someone's health, growth or development, see a GP. If a sudden, rapid restriction of food or fluids has led to a sudden decline in physical health, get help quickly, which may include contacting NHS 111 or emergency care services.",
        ],
      },
    ],
    helps: [
      "See a GP if you are worried about your health, growth or development.",
      "See a GP if you think you might have iron deficiency anaemia; they will usually do a blood test.",
      "Get help quickly, including NHS 111 or emergency care, if food or fluids are suddenly restricted and health declines.",
      "You can talk in confidence to an adviser from Beat by calling the Beat helpline on 0808 801 0677.",
    ],
    tryThisWeek: [
      "See a GP about your health.",
      "Ask about anaemia and a blood test.",
      "Know when to get help quickly.",
    ],
    ask: "Could you check whether I am missing any nutrients, such as iron?",
    interactive: {
      kind: "flip-cards",
      title: "What ARFID can affect",
      intro: "Turn each card to see how ARFID can affect health and daily life.",
      cards: [
        { id: "nutrients", front: "Nutrients", when: "A narrow range of foods", back: "Not getting enough nutrients, minerals and vitamins can lead to conditions like anaemia, rickets and osteoporosis." },
        { id: "energy", front: "Energy", when: "Feeling tired and weak", back: "Becoming malnourished can make people feel tired, weak and unwell." },
        { id: "anaemia", front: "Anaemia", when: "Not enough iron", back: "Can cause tiredness, shortness of breath, noticeable heartbeats and headaches. A GP usually checks with a blood test." },
        { id: "feelings", front: "Feelings", when: "Around eating", back: "A lot of anxiety and fear when eating, or thinking about eating, certain foods." },
        { id: "daily", front: "Daily life", when: "Home, work, friends", back: "Difficulties at home, at work and with friends; going out or on holiday can be hard." },
      ],
    },
    sources: [BEAT_ARFID, RCPSYCH_ARFID, BEAT_PICKY, NHS_IDA, NHS_ED],
    quiz: {
      question: "Can someone have a significant nutritional deficiency at any weight?",
      options: [{ text: "Yes, at any weight", right: true }, { text: "No, only at a low weight" }, { text: "Only children can" }],
      why: "Someone can be any weight and still have a significant nutritional deficiency.",
    },
  },
  {
    id: "arfid-getting-help",
    kicker: "Getting help",
    question: "How do I get help for ARFID?",
    hook: "Your GP is the first step. Going prepared, and taking someone with you, can make it easier.",
    short: "If you think you might have ARFID, make an appointment with your GP. Write down your concerns first, and think about taking someone with you. ARFID is not yet in the NICE guidelines, so services vary across the UK, but the GP should still refer you.",
    sections: [
      {
        heading: "Start with your GP",
        paragraphs: [
          "If you think you might have ARFID, make an appointment to discuss it with your GP. It is usually best for help and support to be in place as soon as possible after the difficulties are recognised.",
          "A GP will ask about your eating habits and how you are feeling, and check your overall health. They may refer you to an eating disorder specialist or team of specialists.",
        ],
      },
      {
        heading: "Going prepared",
        paragraphs: [
          "Before you go, it can help to write down questions you want to ask, the symptoms you have had and anything you are worried about, so you will not feel put on the spot. Think about how long things have been going on, and explain clearly why you think the difficulties are related to ARFID.",
          "It can be very hard to admit you have a problem and ask for help. It may make things easier if you bring a friend or loved one with you.",
          "Autistic people can ask for reasonable adjustments, such as an appointment at a quieter time of day or a written summary of what was discussed.",
        ],
      },
      {
        heading: "Why services vary",
        paragraphs: [
          "Treatment for ARFID is not currently included in the NICE or SIGN guidelines for eating disorders. This means services vary across the UK, but it certainly does not mean ARFID does not need to be taken seriously.",
          "The GP should still make a referral. Adults with ARFID may be treated by specialist eating disorder services, by general mental health services, particularly those offering treatment for anxiety, or by other practitioners.",
          "For eating disorders, a GP needs to refer you for NHS treatment, rather than you referring yourself to NHS talking therapies.",
        ],
      },
      {
        heading: "What happens next",
        paragraphs: [
          "Diagnosis is made by talking with you about your feelings and behaviour. It may also involve some physical tests, such as blood tests.",
          "Medical professionals should check that no other medical condition is making it hard to eat, such as a health problem that causes loss of appetite or trouble digesting.",
        ],
      },
    ],
    helps: [
      "If you think you might have ARFID, make an appointment to discuss it with your GP.",
      "Write down your questions, symptoms and worries before the appointment.",
      "Bring a friend or loved one with you if that makes it easier.",
      "If going to the GP makes you anxious, you can speak to Beat's Helpline about your worries.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Write down your worries first.",
      "Take someone with you.",
    ],
    ask: "Can you refer me to a service that treats ARFID, and what can I do while I wait?",
    interactive: {
      kind: "timeline",
      title: "From worry to support",
      steps: [
        { id: "prepare", when: "Before", title: "Write it down", points: ["Questions, symptoms and worries.", "How long it has been going on."] },
        { id: "gp", when: "First appointment", title: "See your GP", points: ["They ask about eating and how you feel.", "They check your overall health."] },
        { id: "refer", when: "Next", title: "A referral", points: ["The GP should still refer, even though services vary.", "Adults may see eating disorder or anxiety services."] },
        { id: "assess", when: "Assessment", title: "Talking it through", points: ["Talking about feelings and behaviour.", "Possibly some physical tests, such as blood tests."] },
        { id: "treat", when: "Treatment", title: "Support tailored to you", points: ["Most often as an outpatient.", "Often CBT, exposure work and anxiety management."] },
      ],
    },
    sources: [BEAT_ARFID, NHS_ED, BEAT_GP, BEAT_TYPES, RCPSYCH_ARFID, NHS_CBT, BEAT_AUTISM, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is ARFID treatment in the NICE guidelines yet?",
      options: [{ text: "No, but the GP should still refer you", right: true }, { text: "Yes, in full" }, { text: "No, so there is no point asking" }],
      why: "Treatment for ARFID is not currently included in the NICE or SIGN guidelines. The GP should still make a referral.",
    },
  },
  {
    id: "arfid-therapy",
    kicker: "Treatment",
    question: "What is CBT for ARFID, and what else can help?",
    hook: "There is a type of CBT made specifically for ARFID. You set goals and, step by step, work towards the foods you avoid.",
    short: "CBT is a talking therapy that helps you learn more helpful ways of thinking and reacting. There is a type made specifically for ARFID, where you set goals and work with a therapist to try new or avoided foods. Treatment is tailored to the person, and can also include exposure work and anxiety management.",
    sections: [
      {
        heading: "Tailored to you",
        paragraphs: [
          "More research is needed on how best to treat ARFID, but there are a number of things that can help. Treatment is usually best tailored to the person, based on their difficulties and what keeps them going.",
          "Most often, treatment can be given as an outpatient. It commonly involves cognitive behavioural therapy, behavioural approaches such as exposure work, and anxiety management training.",
        ],
      },
      {
        heading: "CBT made for ARFID",
        paragraphs: [
          "CBT is a type of talking therapy. It can help someone learn more helpful ways of thinking and reacting to challenging situations.",
          "There is a type of CBT developed specifically for people with ARFID. People set goals and make changes to the foods they eat, working with a therapist to expose themselves to new foods or foods they have been avoiding.",
          "Psychological treatment usually starts once any physical health problems have been treated. It is adjusted to how able someone is to discuss and make changes to their eating.",
        ],
      },
      {
        heading: "Graded exposure",
        paragraphs: [
          "Graded exposure is a CBT technique. Foods are ranked by how much anxiety they cause, and the person makes a plan with their therapist to try them, working towards realistic goals.",
          "Along the way, they are given tools to help manage their anxiety. This can help people who are scared of eating because of past experiences, such as choking or being sick.",
        ],
      },
      {
        heading: "Other approaches",
        paragraphs: [
          "For people with sensory difficulties, food chaining starts with a food someone is able to eat, then slowly introduces very similar foods with similar sensory qualities.",
          "Sometimes medicine may be suggested, most often to help with anxiety. Rethink Mental Illness says treatment may combine talking therapy, exposure therapy, nutritional management and medication.",
        ],
      },
      {
        heading: "Making it work",
        paragraphs: [
          "In CBT you will usually be asked to practise what you have learned between sessions, and it is important to do this for CBT to work. When the course ends, it is important to keep using the skills you have learned.",
        ],
      },
    ],
    helps: [
      "Ask your GP for a referral: for eating disorders, NHS treatment needs a GP referral.",
      "Practise what you learn between sessions; it is important for CBT to work.",
      "Work towards realistic goals with your therapist, one planned step at a time.",
      "Keep using your skills after the course has finished.",
      "Speak to a GP if you are still having problems after your CBT has finished.",
    ],
    tryThisWeek: [
      "Ask your GP about a referral.",
      "Practise between sessions.",
      "Set one realistic goal.",
    ],
    ask: "Is there CBT for ARFID near me, and what would the first sessions involve?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments, card by card",
      intro: "Turn each card to see when each approach is used and what it involves.",
      cards: [
        { id: "cbt", front: "CBT for ARFID", when: "A type made for ARFID", back: "You set goals and work with a therapist to try new foods, or foods you have been avoiding." },
        { id: "exposure", front: "Graded exposure", when: "Fear after choking or being sick", back: "Foods are ranked by how much anxiety they cause, then tried one planned step at a time, with tools to manage anxiety." },
        { id: "chaining", front: "Food chaining", when: "Sensory difficulties", back: "Starts with a food you can eat, then slowly brings in very similar foods with similar sensory qualities." },
        { id: "anxiety", front: "Anxiety management", when: "Alongside other treatment", back: "Training in managing anxiety is a common part of treatment for ARFID." },
        { id: "family", front: "Family-based treatment", when: "For young people", back: "Parents and carers learn skills to help, including structure and routine at mealtimes." },
        { id: "medicine", front: "Medicine", when: "Sometimes, most often for anxiety", back: "A doctor may suggest it, sometimes for a short time if anxiety is severe." },
      ],
    },
    sources: [RCPSYCH_ARFID, BEAT_ARFID, NHS_CBT, RETHINK_ED],
    quiz: {
      question: "In graded exposure for ARFID, how are foods ranked?",
      options: [{ text: "By how much anxiety they cause", right: true }, { text: "By how healthy they are" }, { text: "By colour" }],
      why: "Foods are ranked by how much anxiety they cause, and the person makes a plan with their therapist to try them.",
    },
  },
  {
    id: "arfid-dietitian",
    kicker: "Treatment",
    question: "How can a dietitian help with ARFID?",
    hook: "Not a diet plan. A dietitian helps make sure what you can eat is enough, and that missing nutrients are put back.",
    short: "Treatment for ARFID may include nutritional support from a dietitian, alongside help with sensory problems. Dietitians assess diet-related health problems and give practical advice on eating problems. The aim is food that is good enough for your body, even if it looks different to other people's.",
    sections: [
      {
        heading: "Part of the team",
        paragraphs: [
          "Treatment for ARFID may involve nutritional management with support from a dietitian, and help with sensory problems. Dietitians are among the professionals who may treat young people with ARFID, alongside speech and language therapists, psychologists and occupational therapists.",
          "Dietitians offer assessment and treatment of diet-related health problems, as well as practical advice on eating problems. You can ask your GP or consultant to refer you to an NHS dietitian.",
        ],
      },
      {
        heading: "Putting back what is missing",
        paragraphs: [
          "Treatments for nutritional deficiencies can include multivitamins, mineral supplements such as zinc or iron, and advice on alternative and safe foods to eat, to help avoid becoming deficient.",
          "For people whose food intake is very limited, nutritional supplements may be prescribed.",
        ],
      },
      {
        heading: "Good enough, not perfect",
        paragraphs: [
          "Two specialist eating disorder dietitians writing for Beat say everyone needs a food intake that is good enough. It is fine if this looks different to other people's, as long as it is enough for their body.",
          "For people whose eating is more selective than most, the usual healthy eating messages are unlikely to help. They can leave people, or their carers, feeling they are doing something wrong.",
          "The National Autistic Society suggests trying not to sort foods into healthy and unhealthy, or good and bad, as this can be taken too literally.",
        ],
      },
      {
        heading: "Other things that affect eating",
        paragraphs: [
          "Physical discomfort can affect how a person eats. Constipation can dampen appetite, heartburn can stop someone wanting to keep eating, and toothache or mouth ulcers can make someone reluctant to eat.",
          "Medical professionals should check that no other condition is making it hard to eat, such as one that causes loss of appetite or trouble digesting.",
        ],
      },
    ],
    helps: [
      "Ask your GP or consultant to refer you to an NHS dietitian.",
      "Aim for food that is good enough for your body, even if it looks different to other people's.",
      "Try not to label foods as healthy or unhealthy, good or bad.",
      "Tell your GP or dietitian about any discomfort, such as constipation, heartburn or toothache.",
    ],
    tryThisWeek: [
      "Ask about a dietitian referral.",
      "Aim for good enough.",
      "Drop good and bad food labels.",
    ],
    ask: "Could I be referred to a dietitian, and could anything physical be adding to my eating difficulties?",
    interactive: {
      kind: "scenarios",
      title: "Food moments",
      scenarios: [
        {
          id: "healthy",
          situation: "Someone tells you to just eat more healthily.",
          options: [{ text: "Aim for good enough for your body", best: true }, { text: "Follow the usual healthy eating rules" }],
          why: "For people whose eating is more selective than most, the usual healthy eating messages are unlikely to help. The aim is an intake that is good enough.",
        },
        {
          id: "appetite",
          situation: "You have constipation and little appetite.",
          options: [{ text: "Mention it to your GP or dietitian", best: true }, { text: "Keep it to yourself" }],
          why: "Physical discomfort can affect how a person eats. Constipation can dampen appetite.",
        },
        {
          id: "nutrients",
          situation: "You worry you are missing nutrients.",
          options: [{ text: "Ask your GP about a dietitian", best: true }, { text: "Wait and see" }],
          why: "Dietitians offer assessment and treatment of diet-related health problems. You can ask your GP or consultant to refer you.",
        },
      ],
    },
    sources: [BEAT_ARFID, RCPSYCH_ARFID, BEAT_PICKY, NAS_EATING],
    quiz: {
      question: "What kind of food intake do Beat's dietitians say everyone needs?",
      options: [{ text: "One that is good enough for their body", right: true }, { text: "A perfect, varied diet" }, { text: "Exactly what everyone else eats" }],
      why: "Everyone needs a food intake that is good enough. It is fine if this looks different to other people's, as long as it is enough for their body.",
    },
  },
  {
    id: "arfid-new-foods",
    kicker: "Self-help",
    question: "How can I try new foods without it feeling overwhelming?",
    hook: "Small steps, at your own pace. Getting comfortable around a new food comes before eating it.",
    short: "People with ARFID need more help than usual to try new foods, and pressure tends to make it harder. Going at your own pace, taking small steps and working with a therapist can help. Small changes are still big progress.",
    sections: [
      {
        heading: "Why pressure does not help",
        paragraphs: [
          "People with ARFID struggle to eat certain foods and feel upset when they try to. They need more help than usual to try new foods.",
          "People with ARFID ask others not to pressure them to try new foods, or draw attention to their eating. Beat's dietitians suggest going at the person's pace and reducing the pressure and expectations for change.",
        ],
      },
      {
        heading: "Small steps",
        paragraphs: [
          "Introducing a new food or texture in small steps can help someone get used to it gradually. First just look at it, then touch it, put it on the plate and smell it, before tasting it.",
          "These steps could take months. The goal is to learn about and become comfortable around different foods, rather than eating all of the foods offered.",
        ],
      },
      {
        heading: "With a therapist",
        paragraphs: [
          "In graded exposure, foods are ranked by how much anxiety they cause, and you make a plan with your therapist to try them. You work towards realistic goals, with tools to help manage anxiety along the way.",
          "Food chaining starts with a food someone is able to eat, then slowly introduces very similar foods with similar sensory qualities.",
        ],
      },
      {
        heading: "Planning ahead",
        paragraphs: [
          "During treatment, avoided foods often need to be reintroduced. Planning the day and time with the treatment team, and shopping for the food together, can help it feel more in the person's control.",
          "Avoid using a favourite food as a reward for trying a new one. It could make the favourite even more attractive, and the new food seem like a chore.",
        ],
      },
      {
        heading: "Every step counts",
        paragraphs: [
          "Changes can take a very long time, and small changes are still big progress. Calm consistency is key.",
          "People with ARFID say it can slowly get better, and that small ways of helping yourself all add up. Every victory, however minor, is worth celebrating.",
        ],
      },
    ],
    helps: [
      "Go at your own pace, and reduce the pressure and expectations for change.",
      "Get used to a new food in small steps: look at it, touch it, smell it, then taste it.",
      "Plan when to reintroduce an avoided food with your treatment team.",
      "Celebrate every small step, however minor.",
    ],
    tryThisWeek: [
      "Go at your own pace.",
      "Look at and touch one new food.",
      "Celebrate a small win.",
    ],
    ask: "Could graded exposure or food chaining help me, and who could guide me through it?",
    interactive: {
      kind: "timeline",
      title: "Getting to know a new food",
      steps: [
        { id: "look", when: "Step 1", title: "Just look", points: ["Let the food be near you.", "There is no need to eat it yet."] },
        { id: "touch", when: "Step 2", title: "Touch it", points: ["Notice how it feels.", "Go at your own pace."] },
        { id: "plate", when: "Step 3", title: "Put it on the plate", points: ["Put it on your plate when you feel ready.", "Being comfortable around it is the goal."] },
        { id: "smell", when: "Step 4", title: "Smell it", points: ["Explore how it smells before tasting.", "These steps could take months."] },
        { id: "taste", when: "Step 5", title: "Taste when ready", points: ["Small steps still count as big progress.", "Celebrate every small win."] },
      ],
    },
    sources: [RCPSYCH_ARFID, NAS_EATING, BEAT_PICKY, BEAT_WISH, BEAT_TIPS],
    quiz: {
      question: "What is the goal of trying a new food in small steps?",
      options: [{ text: "Becoming comfortable around different foods", right: true }, { text: "Eating every food you are offered" }, { text: "Finishing a full plate" }],
      why: "The goal is to learn about and become comfortable around different foods, rather than eating all of the foods offered.",
    },
  },
  {
    id: "arfid-social",
    kicker: "Daily life",
    question: "How can I cope with eating out and social meals?",
    hook: "Meals are how many of us meet people. With ARFID that can feel isolating, but a little planning helps.",
    short: "People with ARFID can find social situations involving food hard, from lunch times to weddings, and this can be lonely. Knowing who will be there and what will happen, a calmer place to eat, and friends who do not draw attention to your eating can all help.",
    sections: [
      {
        heading: "Why it can be hard",
        paragraphs: [
          "People with ARFID might struggle in social situations that involve food, from lunch times to big events like birthday parties or weddings. We often get to know new people by eating with them, so ARFID can make it hard to meet people, which can be isolating and lonely.",
          "Many people with ARFID find it difficult to go out or go on holiday. They may find it hard to make new friends or build close relationships, because eating together is often part of that.",
        ],
      },
      {
        heading: "Planning ahead",
        paragraphs: [
          "If a meal is not going to be at home, it can help to know in advance who will be there, who you will be sitting next to and what people might talk about.",
          "When eating with someone who supports you, it can help to plan together what you will be eating, at what time and who else will be there.",
        ],
      },
      {
        heading: "The space around you",
        paragraphs: [
          "Think about your surroundings. Is anything adding to feeling overwhelmed, such as loud noise, strong smells or bright lights? You might be able to move somewhere quieter, or use noise-cancelling headphones or ear plugs.",
          "For some people the social side of meals is stressful, and they are more relaxed eating alone. Others eat better with family or friends, and may be more willing to try a food if they see others enjoying it.",
        ],
      },
      {
        heading: "What helps from others",
        paragraphs: [
          "People with ARFID ask others not to draw attention to their eating habits or pressure them to try new foods. Keeping conversation at meals neutral can help.",
          "Some people find distractions at mealtimes helpful, such as having the television or radio on, doing a puzzle or being involved in conversation.",
        ],
      },
    ],
    helps: [
      "Ask in advance who will be there and what the plan for the meal is.",
      "If noise, smells or lights feel overwhelming, move somewhere quieter or try ear plugs or headphones.",
      "Let friends know it helps when they do not draw attention to your eating.",
      "Try a distraction during meals, such as conversation, music or a puzzle.",
    ],
    tryThisWeek: [
      "Ask who will be there.",
      "Bring ear plugs or headphones.",
      "Try a mealtime distraction.",
    ],
    ask: "How can I manage meals out and social events while I am in treatment?",
    interactive: {
      kind: "scenarios",
      title: "Social moments",
      scenarios: [
        {
          id: "wedding",
          situation: "You are invited to a wedding meal.",
          options: [{ text: "Find out in advance who will be there", best: true }, { text: "Turn up and hope for the best" }],
          why: "If a meal is not going to be at home, it can help to know in advance who will be there and who you will be sitting next to.",
        },
        {
          id: "noisy",
          situation: "The restaurant is loud and the smells feel strong.",
          options: [{ text: "Move somewhere quieter, or use ear plugs", best: true }, { text: "Push through without a break" }],
          why: "If loud noise, strong smells or bright lights add to feeling overwhelmed, you might move somewhere quieter or use ear plugs or headphones.",
        },
        {
          id: "comment",
          situation: "A friend comments on what is on your plate.",
          options: [{ text: "Let them know comments make it harder", best: true }, { text: "Stop going out with friends" }],
          why: "People with ARFID ask others not to draw attention to their eating habits. Keeping conversation at meals neutral can help.",
        },
      ],
    },
    sources: [RCPSYCH_ARFID, BEAT_ARFID, NAS_EATING, BEAT_AUTISM, BEAT_TIPS, BEAT_WISH],
    quiz: {
      question: "What can help when a place feels loud and the smells are strong?",
      options: [{ text: "Moving somewhere quieter, or using ear plugs", right: true }, { text: "Eating faster" }, { text: "Nothing can help" }],
      why: "You might be able to move somewhere quieter, or use noise-cancelling headphones or ear plugs.",
    },
  },
  {
    id: "arfid-autism",
    kicker: "Autism and ADHD",
    question: "How are ARFID, autism and ADHD linked?",
    hook: "ARFID is more common in autistic people and people with ADHD. Sensory differences are part of the reason, and support can be adapted.",
    short: "The conditions that most often occur alongside ARFID include anxiety disorders, autism and ADHD. Autistic people can have sensory differences that make some foods especially hard to eat. Autism is not an illness, and treatment for eating difficulties can be adapted to suit autistic people.",
    sections: [
      {
        heading: "Often found together",
        paragraphs: [
          "ARFID can happen on its own, or alongside other conditions. Those that most commonly occur with it are anxiety disorders, autism, ADHD and a range of medical conditions.",
          "Rethink Mental Illness says ARFID is more common in people who have anxiety, ADHD or autism. Beat says research shows autistic people are twice as likely to experience eating disorders as people who are not autistic.",
        ],
      },
      {
        heading: "Autism and the senses",
        paragraphs: [
          "Autism is a difference in how your brain develops that affects how you see and experience the world. It is not an illness, and it can affect how you respond to light, sounds, smells, tastes and touch.",
          "Autistic people can have sensory differences, which can make eating some types of food especially difficult. Some find it hard to recognise hunger or fullness.",
          "If an autistic person has challenges with eating, this does not mean they definitely have ARFID. Many autistic people eat restricted diets, and this would not be considered an eating disorder unless it is significantly affecting their everyday lives.",
        ],
      },
      {
        heading: "ADHD",
        paragraphs: [
          "ADHD is more common in autistic people, and people with ADHD often have other conditions too, such as anxiety. The Royal College of Psychiatrists says ARFID is more common in people with other health problems, including anxiety and ADHD.",
        ],
      },
      {
        heading: "Adapting treatment",
        paragraphs: [
          "Autistic people may need changes to their treatment, called accommodations. These can include a peaceful place to eat away from noise and interruptions, flexibility around mealtimes, and consistency rather than unpredictable changes.",
          "It can also help to explore how a food smells or feels before trying it, to be allowed to stim while eating, and for others to understand that the person may struggle to know when they are hungry or full. Hiding foods inside other foods is best avoided, as it can cause a loss of trust.",
          "Health and social care services have to make it as easy for autistic people to use them as for anyone else. You can ask for reasonable adjustments, such as seeing the same person in the same room, quieter appointment times, information in writing, or one-to-one sessions instead of groups.",
        ],
      },
    ],
    helps: [
      "Ask in advance for reasonable adjustments, such as quieter appointments or a written summary.",
      "Make the place you eat calm, away from noise, chaos and interruptions.",
      "Keep routines consistent, and prepare for any changes in advance.",
      "Explore how a food smells or feels before trying to eat it.",
      "Try sensory tools at mealtimes, such as fidget toys, headphones or ear plugs.",
    ],
    tryThisWeek: [
      "Ask for one reasonable adjustment.",
      "Make a calm place to eat.",
      "Keep mealtimes predictable.",
    ],
    ask: "Could my treatment be adapted for my sensory needs as an autistic person?",
    interactive: {
      kind: "risk-check",
      title: "What makes meals harder?",
      intro: "Tick any that apply. Each comes with something that may help.",
      items: [
        { id: "noise", label: "Noise and interruptions", note: "A peaceful place to eat, away from noise, chaos and other people eating, can help.", changeable: true },
        { id: "senses", label: "Strong smells or bright lights", note: "Moving away from strong smells or harsh lighting, or using sunglasses or ear plugs, can help.", changeable: true },
        { id: "change", label: "Unexpected changes", note: "Aim for consistency, and prepare any changes in advance.", changeable: true },
        { id: "hunger", label: "Not knowing when you are hungry", note: "Some autistic people struggle to recognise hunger or fullness. It helps when others understand this.", changeable: false },
        { id: "feelings", label: "Finding feelings hard to name", note: "Noticing physical sensations can help you work out which emotion you are feeling.", changeable: true },
      ],
    },
    sources: [RCPSYCH_ARFID, BEAT_ARFID, NHS_AUTISM, BEAT_AUTISM, NAS_ED, RETHINK_ED, NHS_ADHD],
    quiz: {
      question: "If an autistic person has challenges with eating, do they definitely have ARFID?",
      options: [{ text: "No, not definitely", right: true }, { text: "Yes, always" }, { text: "Only if they also have ADHD" }],
      why: "If an autistic person has challenges with eating, this does not mean they definitely have ARFID.",
    },
  },
  {
    id: "arfid-family",
    kicker: "Family and friends",
    question: "How can I support someone with ARFID?",
    hook: "Patience over pressure. Knowing it is not fussiness, and looking after yourself, both matter.",
    short: "If you are worried someone has ARFID, talk with them and encourage them to see a GP. Avoid pressure to eat, remember it is not a choice and nobody is to blame, and go at their pace. Look after yourself too: Beat has support for families and carers.",
    sections: [
      {
        heading: "Talking about it",
        paragraphs: [
          "If you are worried that someone close to you has ARFID, talk with them, and support and encourage them to get the right help. They may be scared, or not as worried about their eating as others, and may say everything is okay.",
          "You could suggest going to the GP together. Going prepared with notes about your concerns can help.",
        ],
      },
      {
        heading: "Not fussy, not a choice",
        paragraphs: [
          "People with ARFID do not choose this. Beat urges people not to pressure someone into eating foods they are not comfortable with, and stresses that ARFID is not the fault of the person or of the people caring for them.",
          "Ask how they are feeling and what they are thinking, rather than making assumptions. Remind yourself that things can change, and reassure them that recovery is possible.",
        ],
      },
      {
        heading: "At their pace",
        paragraphs: [
          "Go at their pace, and reduce the pressure and expectations for change. Changes can take a very long time, and small changes are still big progress.",
          "Keep trying to include them, even if they do not join in, as they will still like to be asked. Give your time and listen, and try not to criticise; you do not have to know all the answers.",
          "Parents and carers can be the main source of support. Family-based approaches teach families skills to help, support structure and routine at mealtimes, and teach ways to deal with anxiety.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Caring for someone with an eating disorder can feel overwhelming and exhausting. Seek support for yourself, give yourself permission to meet your own needs, and remember that you did not cause this and are not to blame.",
          "In some areas, Beat runs ARFID support for family members of young people aged 5 to 17, including an online peer support group and one-to-one sessions. Its Helpline is there for anyone affected by an eating disorder.",
        ],
      },
    ],
    helps: [
      "Talk with them, encourage them to see a GP, and offer to go together.",
      "Do not pressure them to eat foods they are not comfortable with.",
      "Go at their pace, and remember small changes are still big progress.",
      "Keep including them, listen, and try not to criticise.",
      "Seek support for yourself, whether from friends, counselling or Beat's Helpline.",
      CRISIS,
    ],
    tryThisWeek: [
      "Offer to go to the GP together.",
      "Take the pressure off meals.",
      "Get support for yourself.",
    ],
    ask: "How can our family best support them, and is there support for us too?",
    interactive: {
      kind: "scenarios",
      title: "Moments as a supporter",
      scenarios: [
        {
          id: "fine",
          situation: "Your relative says everything is okay and does not want help.",
          options: [{ text: "Keep talking, and offer to go with them", best: true }, { text: "Drop the subject for good" }],
          why: "They may be scared, and say everything is okay. Talk with them, and support and encourage them to get the right help.",
        },
        {
          id: "dinner",
          situation: "At dinner you want them to try what everyone else is having.",
          options: [{ text: "Take the pressure off", best: true }, { text: "Insist they try it" }],
          why: "Beat urges people not to pressure someone into eating foods they are not comfortable with.",
        },
        {
          id: "exhausted",
          situation: "You feel exhausted, and wonder if it is your fault.",
          options: [{ text: "Get support for yourself", best: true }, { text: "Keep going alone" }],
          why: "Seek support for yourself, and remember that you did not cause this and are not to blame.",
        },
        {
          id: "out",
          situation: "They keep saying no to plans with friends.",
          options: [{ text: "Keep asking them along", best: true }, { text: "Stop inviting them" }],
          why: "Keep trying to include them. Even if they do not join in, they will still like to be asked.",
        },
      ],
    },
    sources: [BEAT_ARFID, BEAT_WISH, BEAT_TIPS, NHS_HELP_SOMEONE, BEAT_PICKY, BEAT_CARERS, RCPSYCH_ARFID, BEAT_FAMILY_GROUP, BEAT_FAMILY_ONE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Whose fault is ARFID?",
      options: [{ text: "No one's: not the person, not the carer", right: true }, { text: "The parents'" }, { text: "The person's own" }],
      why: "ARFID is not the fault of the person or of the people caring for them.",
    },
  },
  {
    id: "arfid-support",
    kicker: "Support",
    question: "Where can I find support for ARFID?",
    hook: "You are not alone. Beat runs a Helpline and a weekly online group for people with ARFID, and no diagnosis is needed.",
    short: "Beat, the eating disorder charity, runs a Helpline by phone, webchat and email, and a free weekly ARFID Online Support Group; no diagnosis is needed for either. ARFID Awareness UK also offers information and support. Beat is not a crisis service: if someone is in immediate danger, call 999 or Samaritans on 116 123.",
    sections: [
      {
        heading: "Beat's Helpline",
        paragraphs: [
          "Beat's Helpline is for anyone affected by an eating disorder, of any age, and you do not need a formal diagnosis to use it. You can contact it by webchat, phone or email.",
          "The phone lines are open 3pm to 8pm, Monday to Friday. In England the number is 0808 801 0677, and calls are free from UK landlines and mobiles and do not appear on itemised bills.",
          "Advisers offer a space to explore your feelings, give information and help you look at options, including NHS treatment, charity support and peer support. If the lines are busy, try again, or use webchat or email.",
        ],
      },
      {
        heading: "The ARFID Online Support Group",
        paragraphs: [
          "Beat's ARFID Online Support Group, formerly Hummingbird, is a chat room for people with ARFID, and no diagnosis is needed. You can share your thoughts by typing or simply follow along, as joining in is entirely voluntary.",
          "It runs every Thursday from 6:45pm to 7:45pm. Each session has a theme, then a guided question and answer time focused on recovery, and moderators keep the space safe.",
        ],
      },
      {
        heading: "Other support",
        paragraphs: [
          "ARFID Awareness UK provides people with ARFID, parents, carers and professionals with up-to-date information, research and support.",
          "Beat also runs support for families of young people with ARFID in some areas, and its HelpFinder tool shows what is available near you.",
        ],
      },
      {
        heading: "In a crisis",
        paragraphs: [
          "Beat does not run a crisis service. If you or someone else is in immediate danger, call 999 or Samaritans on 116 123.",
          "For urgent help that is not an emergency, get help from 111 online or call 111 and select the mental health option. Samaritans is free to call from any phone, any time, day or night, and you can text SHOUT to 85258 if you would rather not talk.",
        ],
      },
    ],
    helps: [
      "Call the Beat Helpline on 0808 801 0677, 3pm to 8pm, Monday to Friday, or use its webchat.",
      "Join the ARFID Online Support Group on a Thursday evening; no diagnosis is needed.",
      "If the phone lines are busy, try again, or use webchat or email.",
      "Visit ARFID Awareness UK for information and support.",
      CRISIS,
    ],
    tryThisWeek: [
      "Call or webchat the Beat Helpline.",
      "Try the Thursday online group.",
      "Look up ARFID Awareness UK.",
    ],
    ask: "Are there local services or groups for ARFID that you could point me to?",
    interactive: {
      kind: "flip-cards",
      title: "Where to turn",
      intro: "Turn each card to see when to use each kind of support.",
      cards: [
        { id: "helpline", front: "Beat Helpline: 0808 801 0677", when: "3pm to 8pm, Monday to Friday", back: "Free from UK landlines and mobiles. Advisers listen, give information and help you look at your options." },
        { id: "webchat", front: "Beat webchat and email", when: "If the phone lines are busy", back: "One-to-one webchat with a Helpline adviser, or email support for each UK nation." },
        { id: "group", front: "ARFID Online Support Group", when: "Thursdays, 6:45pm to 7:45pm", back: "A moderated chat room for people with ARFID. No diagnosis needed; you can type or just follow along." },
        { id: "families", front: "Support for families", when: "Caring for a young person", back: "Beat runs ARFID support for family members of young people aged 5 to 17 in some areas." },
        { id: "aauk", front: "ARFID Awareness UK", when: "Information and research", back: "Up-to-date information, research and support for people with ARFID, parents, carers and professionals." },
        { id: "crisis", front: "999 or Samaritans: 116 123", when: "Immediate danger", back: "Beat is not a crisis service. Samaritans is free from any phone, any time, day or night." },
      ],
    },
    sources: [BEAT_HELPLINE, BEAT_ARFID_GROUP, BEAT_ARFID, NHS_ED, NHS_URGENT, NHS_SUICIDAL, SAMARITANS, BEAT_FAMILY_GROUP],
    quiz: {
      question: "Do you need a diagnosis to join Beat's ARFID Online Support Group?",
      options: [{ text: "No, no diagnosis is needed", right: true }, { text: "Yes, a formal diagnosis" }, { text: "Only with a GP letter" }],
      why: "Beat's ARFID Online Support Group is a chat room for people with ARFID, and no diagnosis is needed.",
    },
  },
];
