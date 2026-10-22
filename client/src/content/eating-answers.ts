import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Eating disorders page's pieces (content/library-conditions/mind-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS
// (including Every Mind Matters), Beat, the eating disorder charity, NICE's information for the public
// (guideline NG69), the Royal College of Psychiatrists, Rethink Mental Illness, Samaritans and Shout.
// Mind's pages could not be read today (the site answered 403), so they are not cited.
// Every answer follows Beat's and Samaritans' media guidance: no weights, BMI figures or calorie
// numbers, no descriptions of eating disorder behaviours that could be copied, hopeful and practical,
// and the crisis routes exactly as the NHS, Samaritans and Shout give them. Nothing here suggests
// stopping or changing a medicine without the doctor. General information only; it never replaces
// what a person's own GP or eating disorder team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const beat = (label: string, path: string): LearnSource => ({ label: `Beat: ${label}`, url: `https://www.beateatingdisorders.org.uk/get-information-and-support/${path}` });
const nice = (label: string, chapter: string): LearnSource => ({ label: `NICE: Eating disorders, information for the public: ${label}`, url: `https://www.nice.org.uk/guidance/ng69/ifp/chapter/${chapter}` });
const rcpsych = (label: string, path: string): LearnSource => ({ label: `Royal College of Psychiatrists: ${label}`, url: `https://www.rcpsych.ac.uk/mental-health/${path}` });

const NHS_OVERVIEW = nhs("Eating disorders: overview", "mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/");
const NHS_PARENTS = nhs("Eating disorders: advice for parents", "mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/advice-for-parents/");
const NHS_HELP_SOMEONE = nhs("How to help someone with an eating disorder", "mental-health/advice-for-life-situations-and-events/how-to-help-someone-with-eating-disorder/");
const NHS_ANOREXIA = nhs("Anorexia nervosa: overview", "mental-health/conditions/anorexia/overview/");
const NHS_ANOREXIA_SYMPTOMS = nhs("Anorexia nervosa: symptoms", "mental-health/conditions/anorexia/symptoms/");
const NHS_ANOREXIA_TREAT = nhs("Anorexia nervosa: treatment", "mental-health/conditions/anorexia/treatment/");
const NHS_BULIMIA = nhs("Bulimia", "mental-health/conditions/bulimia/");
const NHS_BED = nhs("Binge eating disorder: overview", "mental-health/conditions/binge-eating/overview/");
const NHS_BED_TREAT = nhs("Binge eating disorder: treatment", "mental-health/conditions/binge-eating/treatment/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const EMM_URGENT = emm("Urgent support", "urgent-support/");

const BEAT_TYPES = beat("Types of eating disorder", "about-eating-disorders/types/");
const BEAT_ANOREXIA = beat("Anorexia nervosa", "about-eating-disorders/types/anorexia/");
const BEAT_ANOREXIA_TREAT = beat("Treatment for anorexia", "about-eating-disorders/types/anorexia/treatment/");
const BEAT_BULIMIA = beat("Bulimia nervosa", "about-eating-disorders/types/bulimia/");
const BEAT_BULIMIA_TREAT = beat("Treatment for bulimia", "about-eating-disorders/types/bulimia/treatment/");
const BEAT_BED = beat("Binge eating disorder", "about-eating-disorders/types/binge-eating-disorder/");
const BEAT_BED_TREAT = beat("Treatment for binge eating disorder", "about-eating-disorders/types/binge-eating-disorder/treatment/");
const BEAT_ARFID = beat("ARFID", "about-eating-disorders/types/arfid/");
const BEAT_OSFED = beat("Other specified feeding or eating disorder (OSFED)", "about-eating-disorders/types/osfed/");
const BEAT_SIGNS = beat("Signs and symptoms of an eating disorder", "about-eating-disorders/signs-and-symptoms-of-an-eating-disorder/");
const BEAT_DOIHAVE = beat("Do I have an eating disorder?", "about-eating-disorders/do-i-have-an-eating-disorder/");
const BEAT_HOWMANY = beat("How many people have an eating disorder in the UK?", "about-eating-disorders/how-many-people-eating-disorder-uk/");
const BEAT_MEN = beat("Do men get eating disorders?", "about-eating-disorders/do-men-get-eating-disorders/");
const BEAT_WORRIED = beat("When should I be worried about someone's eating?", "about-eating-disorders/when-should-i-be-worried-about-someones-eating/");
const BEAT_GP = beat("Going to the doctor", "get-help-for-myself/going-to-the-doctor/");
const BEAT_EARLY = beat("Early intervention", "get-help-for-myself/early-intervention/");
const BEAT_FIRSTTIME = beat("I'm here for the first time: a step by step guide", "get-help-for-myself/im-here-for-the-first-time/");
const BEAT_TELL = beat("How to tell someone you have an eating disorder", "get-help-for-myself/how-to-tell-someone-you-have-an-eating-disorder/");
const BEAT_RECOVERY = beat("Recovery", "get-help-for-myself/recovery/");
const BEAT_RELAPSE = beat("Relapse prevention plan", "get-help-for-myself/self-help-and-self-care/relapse-prevention-plan/");
const BEAT_SUPPORTNOW = beat("I need support now: Helpline", "get-help-for-myself/support-now/");
const BEAT_HELPTREAT = beat("Help and treatment for an eating disorder", "get-help-for-myself/support-now/help-treatment/");
const BEAT_ONLINE = beat("Online support", "get-help-for-myself/online-support/");
const BEAT_FRIEND = beat("Worried about a friend or family member", "support-someone-else/worried-about-a-friend-or-family-member/");
const BEAT_TIPS = beat("Tips for supporting someone with an eating disorder", "support-someone-else/tips-for-supporting-somebody-with-an-eating-disorder/");
const BEAT_CARERS = beat("Services for carers", "support-someone-else/services-for-carers/");
const BEAT_CARERSELF = beat("Looking after yourself while supporting someone with an eating disorder", "support-someone-else/tips-for-self-care/");
const BEAT_JOURNEY = beat("Understanding the recovery journey: stages of change", "support-someone-else/the-recovery-journey/");
const BEAT_ROLE = beat("Your role in treatment", "support-someone-else/your-role-in-treatment/");
const BEAT_WORK = beat("Worried about someone at work?", "support-someone-else/worried-about-someone-at-work/");

const NICE_WHAT = nice("What is an eating disorder?", "What-is-an-eating-disorder");
const NICE_NEXT = nice("What should happen next?", "What-should-happen-next");
const NICE_WHERE = nice("Where can I have treatment?", "Where-can-I-have-treatment");
const NICE_PHYSICAL = nice("Looking after your physical health", "Looking-after-your-physical-health");
const NICE_CHECKUPS = nice("Check-ups for people with anorexia", "Check-ups-for-people-for-anorexia");
const NICE_CARERS = nice("Supporting parents, family members and carers", "Supporting-parents-family-members-and-carers");
const NICE_BED = nice("Binge-eating disorder", "Binge-eating-disorder");

const RCP_AB = rcpsych("Anorexia and bulimia", "mental-illnesses-and-mental-health-problems/anorexia-and-bulimia");
const RETHINK: LearnSource = { label: "Rethink Mental Illness: Eating disorders", url: "https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-conditions/eating-disorders/" };
const SAM_CONTACT: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SHOUT: LearnSource = { label: "Shout: The UK's free, confidential, 24/7 mental health text service", url: "https://giveusashout.org/" };

export const eatingAnswers: LearnArticle[] = [
  {
    id: "eatd-what-they-are",
    kicker: "Understanding",
    question: "What is an eating disorder?",
    hook: "Not a diet, a phase or a choice. Eating disorders are serious mental illnesses that are about feelings as much as food, and they are treatable.",
    short: "An eating disorder is a mental health condition where you use the control of food to cope with feelings and other situations. Eating disorders are serious, but they are treatable, and with treatment most people can recover. The sooner someone gets help, the better their chance of recovery.",
    sections: [
      {
        heading: "A way of coping",
        paragraphs: [
          "An eating disorder is a mental health condition where you use the control of food to cope with feelings and other situations. It may include eating too much or too little, or worrying about your weight or body shape.",
          "Eating disorders are not all about food, but also about feelings. The way the person treats food may make them feel more able to cope, or more in control, though they might not be aware of the purpose it is serving.",
        ],
      },
      {
        heading: "Serious, and nobody's fault",
        paragraphs: [
          "Eating disorders are serious mental illnesses. They can cause serious harm both physically and emotionally, and when they get really bad they can put your life at risk.",
          "An eating disorder is never the fault of the person experiencing it. It is not a choice, and anyone who has one deserves fast, compassionate support to help them get better.",
        ],
      },
      {
        heading: "Anyone can get one",
        paragraphs: [
          "Anyone can develop an eating disorder, whatever their age, gender, ethnicity or background. They most commonly start in young people aged 13 to 17, but they can happen at any age.",
          "You cannot tell if someone has an eating disorder just by looking at them. People can be very unwell at any weight.",
        ],
      },
      {
        heading: "More common than people think",
        paragraphs: [
          "Beat's best estimate is that about 1 in 20 children, young people and adults in the UK are living with an eating disorder. It is an estimate, so the real number could be lower or higher, but eating disorders are not rare.",
        ],
      },
      {
        heading: "Recovery is possible",
        paragraphs: [
          "Eating disorders are treatable, and it is very possible to make a full recovery. Like any other illness, the sooner someone is treated, the more likely recovery is.",
          "Recovery may take time and will be different for everyone. Treatment usually includes a talking therapy, and you may also need regular health checks.",
        ],
      },
    ],
    helps: [
      "If you think you may have an eating disorder, see a GP as soon as you can.",
      "Get help early: the sooner someone is treated, the more likely recovery is.",
      "Remember an eating disorder is never the fault of the person who has it.",
      "You can talk in confidence to an adviser from Beat by calling the Beat Helpline on 0808 801 0677.",
      "If you're worried about someone, let them know and encourage them to see a GP.",
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Call the Beat Helpline.",
      "Tell someone you're worried.",
    ],
    ask: "Could what I'm going through be an eating disorder?",
    interactive: {
      kind: "scenarios",
      title: "Myth or fact?",
      scenarios: [
        {
          id: "thin",
          situation: "Someone says you'd have to be very thin to have an eating disorder.",
          options: [{ text: "People can be very unwell at any weight", best: true }, { text: "Only very thin people are ill" }],
          why: "You cannot tell if someone has an eating disorder just by looking at them. People can be very unwell at any weight.",
        },
        {
          id: "choice",
          situation: "A friend says eating disorders are a lifestyle choice.",
          options: [{ text: "They're serious illnesses, not a choice", best: true }, { text: "They could just stop" }],
          why: "An eating disorder is never the fault of the person experiencing it. It is not a choice.",
        },
        {
          id: "who",
          situation: "You think only teenage girls get eating disorders.",
          options: [{ text: "Anyone can get one", best: true }, { text: "Only teenage girls" }],
          why: "Anyone can develop an eating disorder, whatever their age, gender, ethnicity or background.",
        },
        {
          id: "wait",
          situation: "You wonder whether to wait and see if it passes.",
          options: [{ text: "Get help as early as you can", best: true }, { text: "Wait until it's severe" }],
          why: "Like any other illness, the sooner someone is treated, the more likely recovery is.",
        },
      ],
    },
    sources: [NHS_OVERVIEW, BEAT_TYPES, NICE_WHAT, BEAT_DOIHAVE, BEAT_ANOREXIA, BEAT_HOWMANY, BEAT_RECOVERY],
    quiz: {
      question: "Can you tell if someone has an eating disorder by looking at them?",
      options: [{ text: "No, people can be very unwell at any weight", right: true }, { text: "Yes, they always look thin" }, { text: "Only a doctor can tell at a glance" }],
      why: "You cannot tell if someone has an eating disorder just by looking at them. People can be very unwell at any weight.",
    },
  },
  {
    id: "eatd-types",
    kicker: "Types",
    question: "What are anorexia, bulimia, binge eating disorder and ARFID?",
    hook: "Different names, the same seriousness. Each type has its own pattern, and a diagnosis helps the team choose the right treatment.",
    short: "The most common eating disorders are anorexia, bulimia and binge eating disorder. ARFID is when someone avoids certain foods, limits how much they eat or both, but not because of worries about weight or shape. Many people are diagnosed with OSFED, which is every bit as serious.",
    sections: [
      {
        heading: "Anorexia",
        paragraphs: [
          "Anorexia nervosa is a serious mental illness that often causes people to limit how much they eat or drink. Some people develop strict rules about what, when or where they can eat.",
          "People with anorexia may see themselves as bigger than they really are, and have a deep fear of gaining weight. Anyone can get anorexia, but it's most common in young women and typically starts in the mid-teens.",
        ],
      },
      {
        heading: "Bulimia",
        paragraphs: [
          "Bulimia is an eating disorder and serious mental health condition. It involves losing control over how much you eat and then taking drastic action to not put on weight.",
          "People with bulimia are often a weight considered normal and may hide their illness, so it can be very difficult to spot from the outside. Changes in mood and feelings are usually noticed before any physical change.",
        ],
      },
      {
        heading: "Binge eating disorder",
        paragraphs: [
          "Binge eating disorder involves regularly eating a lot of food over a short period of time, without feeling in control of what you're doing. Binges are very distressing, and people often feel guilty or ashamed afterwards.",
          "It is not about choosing to eat large portions or overindulging. Evidence suggests it is more common than other eating disorders, and it often starts when people are in their 20s or older.",
        ],
      },
      {
        heading: "ARFID",
        paragraphs: [
          "ARFID stands for avoidant/restrictive food intake disorder. It is when someone avoids certain foods, limits how much they eat, or does both.",
          "Beliefs about weight or body shape are not the reason. Possible reasons include being very sensitive to the taste, texture or smell of foods, an upsetting past experience with food such as choking, or simply a lack of interest in eating.",
          "ARFID occurs in children, teenagers and adults, at any weight. It can have a negative impact on physical health as well as on wellbeing.",
        ],
      },
      {
        heading: "OSFED, and moving between types",
        paragraphs: [
          "If someone's symptoms do not exactly fit any one eating disorder, they may be diagnosed with OSFED, other specified feeding or eating disorder. It is the most common eating disorder, and every bit as serious as the others.",
          "It's possible for someone to move between diagnoses if their symptoms change, and there is often a lot of overlap. A diagnosis helps healthcare professionals choose the right kind of treatment.",
        ],
      },
    ],
    helps: [
      "Look at the different types and their symptoms, and see if any resonate with you.",
      "If you still aren't sure, ask a healthcare professional such as your GP.",
      "Get help even if you only have some of the signs.",
      "Remember OSFED is as serious as any other eating disorder, and deserves treatment just as quickly.",
      "If you think you might have ARFID, make an appointment to discuss it with your GP.",
    ],
    tryThisWeek: [
      "Read about the different types.",
      "Ask your GP if you're unsure.",
      "Get help with only some signs.",
    ],
    ask: "What type of eating disorder might this be, and which treatment fits it?",
    interactive: {
      kind: "flip-cards",
      title: "The main types, card by card",
      intro: "Turn each card to see what each one involves.",
      cards: [
        { id: "anorexia", front: "Anorexia", when: "Often starts in the mid-teens", back: "Limiting how much you eat or drink, with a deep fear of gaining weight. People can be very unwell at any weight." },
        { id: "bulimia", front: "Bulimia", when: "Often hard to spot from outside", back: "Losing control over how much you eat, then taking drastic action to not put on weight." },
        { id: "bed", front: "Binge eating disorder", when: "Often starts in your 20s or older", back: "Regularly eating a lot of food in a short time without feeling in control, then feeling guilty or ashamed." },
        { id: "arfid", front: "ARFID", when: "Any age, any weight", back: "Avoiding certain foods, limiting how much you eat, or both. Not driven by beliefs about weight or shape." },
        { id: "osfed", front: "OSFED", when: "The most common eating disorder", back: "Symptoms that don't exactly fit one type. Every bit as serious, and treated like the type it is most like." },
      ],
    },
    sources: [NHS_OVERVIEW, BEAT_TYPES, BEAT_ANOREXIA, NHS_ANOREXIA, NHS_BULIMIA, BEAT_BULIMIA, NHS_BED, BEAT_BED, BEAT_ARFID, BEAT_OSFED, BEAT_FIRSTTIME],
    quiz: {
      question: "Is OSFED less serious than anorexia or bulimia?",
      options: [{ text: "No, it is every bit as serious", right: true }, { text: "Yes, it is a mild form" }, { text: "It isn't a real diagnosis" }],
      why: "It is the most common eating disorder, and every bit as serious as the others.",
    },
  },
  {
    id: "eatd-signs",
    kicker: "Signs",
    question: "What are the signs of an eating disorder, in me or someone else?",
    hook: "Changes in mood and behaviour often show before anything physical. You don't need every sign to be ill, or to ask for help.",
    short: "Signs can include worrying a lot about weight and shape, secretive behaviour around food, avoiding eating with others, and changes in mood such as being withdrawn or anxious. Physical signs can include feeling cold, tired or dizzy. Someone does not have to have every sign to be ill, and changes in mood are often noticed first.",
    sections: [
      {
        heading: "Often not visible",
        paragraphs: [
          "It's common to believe you can see an eating disorder. They are mental illnesses, though, and changes in appearance don't always happen. When they do, changes in behaviour and mood are often noticed first.",
          "Signs vary from person to person. A person does not have to have all of them to be ill.",
          "Eating disorders are often associated with women, so men may be less likely to see themselves as having one, and others may be less likely to suspect it. Around 1 in 4 people with an eating disorder are male.",
        ],
      },
      {
        heading: "Feelings and behaviour",
        paragraphs: [
          "General signs include being preoccupied with, or secretive about, food, feeling self-conscious eating in front of others, low self-esteem, irritability and mood swings, tiredness, social withdrawal, and feelings of shame, guilt and anxiety.",
          "You might spend a lot of time worrying about your weight and body shape, avoid socialising when you think food will be involved, or have very strict habits or routines around food. Your mood may change, so that you are withdrawn, anxious or depressed.",
        ],
      },
      {
        heading: "Physical signs",
        paragraphs: [
          "Physical signs can include feeling cold, tired or dizzy, and problems with digestion, such as bloating, constipation or diarrhoea. Some people feel their heart racing, faint or feel faint.",
          "Periods may stop, or puberty may be delayed. In children, the growth spurt may also be delayed.",
        ],
      },
      {
        heading: "ARFID can look different",
        paragraphs: [
          "With ARFID, someone might eat a range of foods but much less than they need to stay healthy. They may take a long time over meals or find eating a chore, avoid social events where there is food, or feel anxious at mealtimes.",
        ],
      },
      {
        heading: "When to be worried about someone",
        paragraphs: [
          "If changes in someone's eating become more frequent or obsessive, cause distress, affect their daily life or social life, or lead to physical health problems, they may have an eating disorder.",
          "It can be very difficult to spot. They may not realise they have an eating disorder, or may deny it or be secretive and defensive. If you're worried, talk to them and let them know you're there for them.",
        ],
      },
    ],
    helps: [
      "If you're worried, even if only some of the signs are there, seek help as quickly as possible.",
      "Make an appointment with the GP; this is usually the first step.",
      "If you're worried about someone, talk to them and let them know you're there for them.",
      "Ask how the person is feeling, rather than asking about eating or weight changes.",
      "Call the Beat Helpline to talk about your concerns.",
    ],
    tryThisWeek: [
      "Note any signs you've noticed.",
      "Book a GP appointment.",
      "Ask how they are feeling.",
    ],
    ask: "Could these signs be an eating disorder, even though I only have some of them?",
    interactive: {
      kind: "signs",
      title: "Signs to mention",
      intro: "Tick any you have noticed, in yourself or someone else. The ones you tick make a list to take to the GP.",
      signs: ["Worrying a lot about weight and shape", "Secretive behaviour around food", "Self-conscious eating with others", "Avoiding social events with food", "Strict habits or routines around food", "Low self-esteem", "Irritability or mood swings", "Feeling withdrawn, anxious or depressed", "Feelings of shame, guilt or anxiety", "Feeling cold, tired or dizzy", "Bloating, constipation or diarrhoea", "Heart racing, or feeling faint", "Periods stopping", "Finding eating a chore"],
      after: "Take this list to a GP. You don't need every sign to ask for help, and the earlier help starts, the better.",
      copyHeading: "Signs I have noticed",
    },
    sources: [BEAT_SIGNS, NHS_OVERVIEW, BEAT_MEN, NHS_ANOREXIA_SYMPTOMS, BEAT_WORRIED, BEAT_FRIEND, BEAT_ANOREXIA, BEAT_DOIHAVE],
    quiz: {
      question: "What is often noticed first, before any physical change?",
      options: [{ text: "Changes in behaviour and mood", right: true }, { text: "Changes in appearance" }, { text: "Nothing, until it's severe" }],
      why: "When they do, changes in behaviour and mood are often noticed first.",
    },
  },
  {
    id: "eatd-causes",
    kicker: "Causes",
    question: "Why do eating disorders happen?",
    hook: "There is no single reason. Genes, biology, feelings and surroundings can all play a part, and it is never anyone's fault.",
    short: "The exact cause of eating disorders is unknown. A range of factors, including genetics, biology, psychology and surroundings, can combine to make one more likely. Eating disorders are not a choice, and families do not cause them.",
    sections: [
      {
        heading: "No single reason",
        paragraphs: [
          "The exact cause of eating disorders is unknown. Eating disorders are complex, and there is no single reason why someone develops one.",
          "A whole range of factors, including someone's genetics, biology, psychology and surroundings, can combine to make it more likely. The latest research is showing that eating disorders have much more to do with biology than was previously thought.",
        ],
      },
      {
        heading: "Things that make it more likely",
        paragraphs: [
          "You may be more likely to get an eating disorder if you or a member of your family has a history of eating disorders, depression, or alcohol or drug misuse.",
          "It may also be more likely if you've been criticised for your eating habits, body shape or weight, or if you feel pressure from society or your job to be slim, such as in ballet, modelling or athletics.",
          "Anxiety, low self-esteem, an obsessive personality or being a perfectionist can play a part. So can abuse, trauma or a stressful event.",
        ],
      },
      {
        heading: "Coping and control",
        paragraphs: [
          "For many people, the eating disorder becomes a means of coping or of feeling in control. Giving up something that may feel familiar and safe can be very challenging.",
          "An eating disorder can continue even when the original stress or reason for it has passed.",
        ],
      },
      {
        heading: "Other conditions",
        paragraphs: [
          "Someone with an eating disorder may also have other mental or physical health issues. These can play a part in it developing, or develop alongside or because of it.",
          "Eating disorders often go together with conditions like depression, anxiety, obsessive-compulsive disorder, or alcohol or substance misuse. The conditions that most commonly occur alongside ARFID are anxiety disorders, autism and ADHD.",
        ],
      },
      {
        heading: "Not anyone's fault",
        paragraphs: [
          "Eating disorders are serious mental illnesses. They aren't a choice, and it isn't your fault.",
          "Families do not cause eating disorders. Instead, they can be a vital resource to help their loved one recover.",
        ],
      },
    ],
    helps: [
      "Remember an eating disorder is not a choice, and it is not your fault.",
      "Tell the GP about any other conditions, such as anxiety or depression, so all your needs can be part of your treatment plan.",
      "Avoid websites or social media that encourage you to lose weight.",
      "If you are a parent, remember families do not cause eating disorders and can be a vital help in recovery.",
      "Avoid discussing weight, shape, food and diets in front of someone who is struggling.",
    ],
    tryThisWeek: [
      "Remind yourself it isn't your fault.",
      "Tell the GP about other conditions.",
      "Avoid talk of weight and diets.",
    ],
    ask: "Could another condition I have, like anxiety, be linked to this?",
    interactive: {
      kind: "risk-check",
      title: "What can make it more likely?",
      intro: "Tick any that apply. Some of these can change, and some cannot. None of them means it is anyone's fault.",
      items: [
        { id: "family-history", label: "Family history of eating disorders", note: "A family history of eating disorders, depression, or alcohol or drug misuse can make one more likely.", changeable: false },
        { id: "criticised", label: "Criticised for eating, shape or weight", note: "This makes it more likely. Others can help by avoiding talk of weight, shape, food and diets.", changeable: true },
        { id: "pressure", label: "Pressure to be slim", note: "Pressure from society or a job can play a part. Avoiding sites that encourage weight loss can help.", changeable: true },
        { id: "anxiety", label: "Anxiety, low self-esteem, perfectionism", note: "These can play a part. Treatment should include support for any other conditions you have.", changeable: true },
        { id: "trauma", label: "Abuse, trauma or a stressful event", note: "These can make it more likely. Talking therapy helps people learn healthier ways to cope with feelings.", changeable: false },
        { id: "arfid-links", label: "Autism, ADHD or an anxiety disorder", note: "These are the conditions that most commonly occur alongside ARFID.", changeable: false },
      ],
    },
    sources: [NHS_OVERVIEW, BEAT_TYPES, NHS_BED, NHS_ANOREXIA, BEAT_FRIEND, RCP_AB, NICE_NEXT, BEAT_ARFID, BEAT_RECOVERY, BEAT_ROLE, BEAT_TIPS, NHS_BULIMIA, NHS_HELP_SOMEONE],
    quiz: {
      question: "Do families cause eating disorders?",
      options: [{ text: "No, and they can be a vital help in recovery", right: true }, { text: "Yes, usually" }, { text: "Only strict families" }],
      why: "Families do not cause eating disorders. Instead, they can be a vital resource to help their loved one recover.",
    },
  },
  {
    id: "eatd-getting-help",
    kicker: "Getting help",
    question: "How do I get help from a GP, and what happens next?",
    hook: "Booking the appointment is often the hardest part. Knowing what to expect, and what to ask for, can make it easier.",
    short: "The first step is usually to see a GP as soon as you can. They will ask about your eating and how you're feeling and check your physical health, and if they think you may have an eating disorder they should refer you to a specialist straight away. You can bring someone with you, and you can ask not to be told your weight.",
    sections: [
      {
        heading: "See a GP early",
        paragraphs: [
          "If you think you may have an eating disorder, see a GP as soon as you can, even if you're not sure. Getting help and support as soon as possible gives you the best chance of recovering.",
          "It can be very hard to admit you have a problem and ask for help. It may make things easier if you bring a friend or loved one with you to your appointment.",
        ],
      },
      {
        heading: "Preparing for the appointment",
        paragraphs: [
          "Before you go, it can help to write down what you want to say: when the difficulties started, your thoughts and feelings around food, and how they affect you day to day.",
          "You could book a double appointment so you don't feel rushed. Beat's First Steps leaflet is designed to take along, to help you get a referral to a specialist.",
        ],
      },
      {
        heading: "At the appointment",
        paragraphs: [
          "The GP will ask about your eating habits and how you're feeling, and check your overall health. Your first appointment may involve being weighed and having a blood test.",
          "If you don't want to know your weight, you can ask to stand backwards on the scales and for them not to tell you. The GP should think about everything that is affecting you, not just one measure, and consider the concerns of family or friends.",
        ],
      },
      {
        heading: "Referral and waiting",
        paragraphs: [
          "If the GP thinks you may have an eating disorder, they should refer you straight away to an eating disorder specialist or team. If you are under 18, you should be seen at a clinic for children and young people.",
          "There is often a waiting list. While you wait, you should still be able to see your GP regularly so they can check how you are doing.",
        ],
      },
      {
        heading: "If it doesn't go well",
        paragraphs: [
          "If you don't feel heard, you can ask to see a different GP. Many eating disorder and mental health services accept self-referrals, and you have the right to challenge a decision if you are not referred.",
          "Struggling to get a referral does not mean you don't deserve help. You do.",
        ],
      },
    ],
    helps: [
      "See a GP as soon as you can, even if you're not sure.",
      "Write down your symptoms, feelings and questions before you go.",
      "Bring a friend or loved one to the appointment if it helps.",
      "Ask not to be told your weight if you'd rather not know.",
      "Ask for a referral to an eating disorder specialist.",
      "If you don't feel heard, ask to see a different GP.",
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Write down what to say.",
      "Ask for a referral.",
    ],
    ask: "Can I be referred to a specialist eating disorder service, and how long is the wait?",
    interactive: {
      kind: "timeline",
      title: "From worry to specialist care",
      steps: [
        { id: "talk", when: "Step 1", title: "Talk to someone", points: ["Tell someone you trust.", "Or call the Beat Helpline about your worries."] },
        { id: "book", when: "Step 2", title: "Book a GP appointment", points: ["See a GP as soon as you can.", "A double appointment gives you more time."] },
        { id: "prepare", when: "Step 3", title: "Prepare", points: ["Write down when it started and how it affects you.", "Take Beat's First Steps leaflet."] },
        { id: "appointment", when: "Step 4", title: "The appointment", points: ["Questions about eating and how you feel.", "Health checks; you can ask not to know your weight."] },
        { id: "referral", when: "Step 5", title: "Referral", points: ["The GP should refer you straight away.", "Under 18s are seen at a clinic for young people."] },
        { id: "waiting", when: "Step 6", title: "While you wait", points: ["Keep seeing your GP regularly.", "Beat's Helpline and online groups can help."] },
      ],
    },
    sources: [NHS_OVERVIEW, NHS_ANOREXIA, BEAT_GP, BEAT_BED_TREAT, NICE_NEXT, BEAT_EARLY, BEAT_FIRSTTIME, BEAT_HELPTREAT],
    quiz: {
      question: "What should a GP do if they think you may have an eating disorder?",
      options: [{ text: "Refer you to a specialist straight away", right: true }, { text: "Wait to see if it passes" }, { text: "Only check your weight" }],
      why: "If the GP thinks you may have an eating disorder, they should refer you straight away to an eating disorder specialist or team.",
    },
  },
  {
    id: "eatd-treatments",
    kicker: "Treatment",
    question: "What do talking therapies and specialist care involve?",
    hook: "Treatment depends on the type of eating disorder and your age, but it usually centres on a talking therapy, with care for your physical health alongside.",
    short: "Treatment usually involves a talking therapy, chosen for the type of eating disorder and your age. Adults with anorexia may be offered CBT focused on eating disorders, MANTRA or SSCM, and young people are usually offered family therapy. Guided self-help is often the first step for bulimia or binge eating disorder. Most people are treated as outpatients.",
    sections: [
      {
        heading: "Talking therapy at the centre",
        paragraphs: [
          "Treatment usually involves psychological therapy, also known as talking therapy, alongside tests and regular checks of your physical health. You should not be offered medicine on its own for an eating disorder.",
          "Help with eating, and getting to a healthy weight if needed, is usually not enough by itself. In therapy, people talk about the emotional difficulties that led to their eating disorder and learn healthier ways to cope with these feelings.",
        ],
      },
      {
        heading: "Anorexia",
        paragraphs: [
          "Adults with anorexia may be offered individual CBT focused on eating disorders, Maudsley anorexia nervosa treatment for adults (MANTRA), or specialist supportive clinical management (SSCM). You should get an explanation of what each involves, to help you choose.",
          "CBT usually involves weekly sessions for up to 40 weeks. During treatment you'll also get specialist dietary advice and a meal plan, and regular check-ups.",
          "Children and young people will usually be offered family therapy. The family talks with a therapist about how anorexia has affected them, and how the family can support the young person to get better.",
        ],
      },
      {
        heading: "Bulimia and binge eating disorder",
        paragraphs: [
          "For adults with bulimia, the first step is usually guided self-help: self-help materials based on CBT, with supportive sessions. If that isn't acceptable or effective, individual CBT focused on eating disorders is recommended.",
          "For binge eating disorder, guided self-help usually comes first, then group or individual CBT if needed. Weight loss is not the aim of these therapies, and dieting during treatment can make it more difficult to stop binge eating.",
          "Antidepressants are not used on their own to treat an eating disorder. They may be offered alongside therapy to help with other conditions, such as anxiety or depression.",
        ],
      },
      {
        heading: "ARFID and OSFED",
        paragraphs: [
          "Treatment for OSFED depends on the type of eating disorder the symptoms are most like.",
          "Treatment for ARFID is not yet in the NICE guidelines, so services vary, but the GP should still refer. Treatment is tailored to the person, and can include family-based treatment for young people, CBT, anxiety management and support from a dietitian.",
        ],
      },
      {
        heading: "Where treatment happens",
        paragraphs: [
          "Most people with eating disorders are seen as outpatients: they go to appointments and then go home. Some people who are more seriously unwell need day patient care, or a stay in hospital for more intensive support.",
          "If you feel a therapy is not right for you or is not helping, you can talk to your doctors about trying a different kind.",
        ],
      },
    ],
    helps: [
      "Ask for an explanation of each therapy, so you can choose the one you'd prefer.",
      "Practise the techniques you learn in therapy on your own, as your therapist asks.",
      "Try not to diet during treatment for binge eating disorder, as this can make it harder to stop binge eating.",
      "If a therapy isn't helping, let your healthcare team know; you can ask to try a different kind.",
      "If you face a wait for treatment, use Beat's Helpline or online support groups.",
    ],
    tryThisWeek: [
      "Ask about each therapy.",
      "Practise between sessions.",
      "Tell your team if it isn't helping.",
    ],
    ask: "Which talking therapy would suit me, and how long will it last?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments, card by card",
      intro: "Turn each card to see when it's used and what it involves.",
      cards: [
        { id: "cbt-ed", front: "CBT for eating disorders", when: "Adults with any of the main types", back: "Starts with regular eating, then works on what keeps the eating disorder going." },
        { id: "mantra", front: "MANTRA", when: "Adults with anorexia", back: "Focuses on what's important to you, and helps you change when you're ready. You should be offered 20 sessions." },
        { id: "sscm", front: "SSCM", when: "Adults with anorexia", back: "Helps you understand the eating disorder and what to do about it, with nutrition education. 20 or more weekly sessions." },
        { id: "family", front: "Family therapy", when: "Children and young people", back: "You and your family work with a therapist on how your family can support you to get better." },
        { id: "gsh", front: "Guided self-help", when: "Often first for bulimia or BED", back: "A self-help programme based on CBT, with short supportive sessions from a practitioner." },
        { id: "group", front: "Group CBT", when: "BED, if self-help isn't enough", back: "Weekly group sessions on planning meals, working out triggers and changing negative beliefs about your body." },
      ],
    },
    sources: [NICE_NEXT, NHS_HELP_SOMEONE, BEAT_ANOREXIA_TREAT, NHS_ANOREXIA_TREAT, BEAT_BULIMIA_TREAT, NICE_BED, NHS_BED_TREAT, BEAT_BED_TREAT, NHS_OVERVIEW, BEAT_ARFID, NICE_WHERE, BEAT_HELPTREAT, BEAT_ROLE, BEAT_TELL],
    quiz: {
      question: "Should medicine be offered on its own for an eating disorder?",
      options: [{ text: "No, treatment centres on talking therapy", right: true }, { text: "Yes, tablets are the main treatment" }, { text: "Only vitamins are needed" }],
      why: "You should not be offered medicine on its own for an eating disorder.",
    },
  },
  {
    id: "eatd-physical-health",
    kicker: "Physical health",
    question: "What physical health checks might I need?",
    hook: "An eating disorder can affect the whole body. Regular checks help the team keep you safe while you recover, and many effects improve with treatment.",
    short: "If you have an eating disorder, you should be offered tests to see how it has affected your body. These can include blood tests, a physical examination and an ECG to check your heart. Many physical effects can improve or be reversed with the right treatment.",
    sections: [
      {
        heading: "Why checks matter",
        paragraphs: [
          "Eating disorders can cause serious harm to the body as well as emotionally. An eating disorder can put a strain on the heart, and long-term effects can include weaker bones, fertility problems, and kidney or bowel problems.",
          "With early help and the right treatment, many physical effects can improve or be reversed. With anorexia, health problems will usually begin to get better once food intake starts improving.",
        ],
      },
      {
        heading: "Tests you might be offered",
        paragraphs: [
          "You might be offered blood tests and a physical examination to see if you are dehydrated. Your doctor will also check the minerals in your blood, called electrolytes. An imbalance can lead to organ damage if left untreated, and you may be prescribed supplements to correct it.",
          "You may also be offered an ECG to check how well your heart is working. It is a simple test that involves attaching sensors to your body with stickers.",
        ],
      },
      {
        heading: "Bones and teeth",
        paragraphs: [
          "Anorexia can make your bones weaker, so your doctors may suggest a bone density scan to check the health of your bones.",
          "Eating disorders, especially bulimia, can damage your teeth over time. See your dentist regularly, and avoid smoking and highly acidic food and drinks.",
        ],
      },
      {
        heading: "Regular check-ups",
        paragraphs: [
          "During treatment, you'll usually have regular check-ups to see how you're getting on. If you have anorexia and are not currently having treatment, you should have check-ups with your GP at least once a year.",
          "At a check-up, the GP should check your overall health, including a blood test, your weight and your blood pressure. They should also ask about your day-to-day life, your mood and how you are managing.",
        ],
      },
      {
        heading: "If you're very unwell",
        paragraphs: [
          "If you're very unwell, your meal plan may need to be supervised more closely, and for some people this means a stay in hospital. Severe electrolyte problems or being very dehydrated need medical care straightaway.",
          "If someone needs urgent medical help, go to 111 online or call 111. If someone's life is in danger, call 999 or go to A&E.",
        ],
      },
    ],
    helps: [
      "Go to your regular check-ups, so the team can see how you're getting on.",
      "Take any vitamin and mineral supplements your doctors advise.",
      "See your dentist regularly.",
      "Avoid smoking, as it increases the risk of gum disease and tooth decay.",
      "If you have anorexia and aren't in treatment, have a GP check-up at least once a year.",
      "If someone needs urgent medical help, call 111; if a life is in danger, call 999.",
    ],
    tryThisWeek: [
      "Keep your check-up appointments.",
      "Book a dental check-up.",
      "Take supplements as advised.",
    ],
    ask: "Which physical health checks do I need, and how often?",
    interactive: {
      kind: "flip-cards",
      title: "Checks, card by card",
      intro: "Turn each card to see when each check is used and what it looks for.",
      cards: [
        { id: "blood", front: "Blood tests", when: "At diagnosis and at check-ups", back: "Check your overall health and the minerals in your blood, called electrolytes." },
        { id: "exam", front: "Physical examination", when: "After a diagnosis", back: "Looks at how the eating disorder has affected your body, including whether you are dehydrated." },
        { id: "ecg", front: "ECG", when: "To check your heart", back: "Sensors attached with stickers record your heart's activity. An eating disorder can strain the heart." },
        { id: "bone", front: "Bone density scan", when: "With anorexia", back: "Checks the health of your bones, because anorexia can make them weaker." },
        { id: "dentist", front: "Dental check-ups", when: "Regularly", back: "Eating disorders, especially bulimia, can damage your teeth over time." },
        { id: "yearly", front: "Yearly GP check-up", when: "Anorexia, when not in treatment", back: "A blood test, weight and blood pressure, and questions about your mood and how you're managing." },
      ],
    },
    sources: [NICE_PHYSICAL, BEAT_TYPES, NHS_ANOREXIA, BEAT_ANOREXIA, NHS_ANOREXIA_TREAT, NHS_BULIMIA, NICE_CHECKUPS, NHS_ANOREXIA_SYMPTOMS, BEAT_SUPPORTNOW],
    quiz: {
      question: "What is an ECG used for?",
      options: [{ text: "To check how well your heart is working", right: true }, { text: "To measure bone strength" }, { text: "To check your teeth" }],
      why: "You may also be offered an ECG to check how well your heart is working.",
    },
  },
  {
    id: "eatd-recovery",
    kicker: "Recovery",
    question: "What can recovery from an eating disorder look like?",
    hook: "Recovery is possible, even after many years. It is rarely a straight line, and setbacks are part of the journey, not the end of it.",
    short: "Recovery is different for everyone. For some people it means never having another eating disorder thought; for others the thoughts become less frequent and no longer have the same impact on daily life. Setbacks are common and do not mean failure, and full recovery can happen even after many years.",
    sections: [
      {
        heading: "What recovery means",
        paragraphs: [
          "Recovery is different for each person. For some people, it means never having another eating disorder thought again. For others, the thoughts are still there but happen less often, and the coping skills they've learned mean the thoughts no longer have the same impact on daily life.",
          "Most people with an eating disorder do recover and learn to use more positive ways of coping. Full recovery can happen even after 20 years of severe anorexia.",
        ],
      },
      {
        heading: "Rarely a straight line",
        paragraphs: [
          "Recovering from an eating disorder is hardly ever a straightforward process. Because an eating disorder is often a way of coping or feeling in control, life without it can feel very frightening, and you may feel conflicted about recovery.",
          "There will probably be good days and bad days. During times of stress, eating difficulties may be more likely to return.",
        ],
      },
      {
        heading: "Setbacks are not failure",
        paragraphs: [
          "Lapses are small setbacks or slips, and relapses are bigger setbacks in thoughts and behaviours. They are a common part of recovery, and despite how it may feel, you are never back to the start.",
          "Whether or not you have had treatment before, you deserve to be supported through a period of relapse. You can use Beat's support services, and you could also speak to your doctor.",
        ],
      },
      {
        heading: "A relapse prevention plan",
        paragraphs: [
          "A relapse prevention plan can help you spot early warning signs and stay well. Beat's plan has three sections: green for what you're like when well and what keeps you well, amber for early warning signs, and red for what to do when you're unwell.",
          "If you have an eating disorder team, ask them to help you make the plan. It can help to write down contact numbers of people, helplines and professionals you can reach out to.",
        ],
      },
      {
        heading: "Coping day to day",
        paragraphs: [
          "Talking about your thoughts and feelings, with someone you trust or in a diary, can help. So can keeping busy after mealtimes, and learning something new that takes you away from the eating disorder.",
          "Try not to compare yourself with other people in recovery: you will find your own path. It's important to have ongoing support after treatment has finished.",
        ],
      },
    ],
    helps: [
      "Speak up when you're finding things hard; you don't have to pretend you are fine.",
      "Make a relapse prevention plan, with your eating disorder team if you have one.",
      "Write down positive qualities about yourself.",
      "Keep busy after mealtimes.",
      "If you slip back, use the coping strategies you've built, and ask for support.",
      "Try not to compare yourself with other people in recovery.",
    ],
    tryThisWeek: [
      "Tell someone when it's hard.",
      "Start a relapse prevention plan.",
      "Keep busy after meals.",
    ],
    ask: "Can you help me make a relapse prevention plan?",
    interactive: {
      kind: "timeline",
      title: "The stages of change",
      steps: [
        { id: "pre", when: "Stage 1", title: "Pre-contemplation", points: ["The person may not see a problem yet.", "Supporters can stay calm and gently show the bigger picture."] },
        { id: "contemplation", when: "Stage 2", title: "Contemplation", points: ["They recognise something is wrong, but aren't ready to act.", "Listen, and let them feel in control of the decision."] },
        { id: "preparation", when: "Stage 3", title: "Preparation", points: ["They decide to change and get ready.", "Help make a plan for the next steps."] },
        { id: "action", when: "Stage 4", title: "Action", points: ["They begin making changes, often in treatment.", "Offer reassurance when they feel conflicted."] },
        { id: "maintenance", when: "Stage 5", title: "Maintenance", points: ["They bring what they learned into everyday life.", "Plan how to spot it if things slip."] },
        { id: "setbacks", when: "At any point", title: "Setbacks", points: ["Lapses and relapses are common.", "Despite how it feels, they are never back to the start."] },
      ],
    },
    sources: [BEAT_RECOVERY, NHS_HELP_SOMEONE, RCP_AB, BEAT_JOURNEY, BEAT_RELAPSE, NHS_ANOREXIA_TREAT],
    quiz: {
      question: "Does a relapse mean recovery has failed?",
      options: [{ text: "No, setbacks are a common part of recovery", right: true }, { text: "Yes, you're back to the start" }, { text: "Only if it happens twice" }],
      why: "They are a common part of recovery, and despite how it may feel, you are never back to the start.",
    },
  },
  {
    id: "eatd-family",
    kicker: "Family and carers",
    question: "How can I support someone with an eating disorder?",
    hook: "You can't fix it alone, and you don't have to. Listening, staying close and looking after yourself all make a real difference.",
    short: "Encourage the person to get professional help, and keep including them, listening and building their self-esteem. Ask about feelings rather than food or weight, and avoid comments on appearance. Supporting someone is hard, so you should be offered support too, and Beat's services are there for carers.",
    sections: [
      {
        heading: "Encourage help, keep including them",
        paragraphs: [
          "Getting professional help will give the person the best chance of getting better. This can be one of the most difficult steps for them, so encourage them to get help, or offer to go along with them.",
          "Keep trying to include them: even if they do not join in, they will still like to be asked. Give your time, listen to them, and try not to give advice or criticise.",
        ],
      },
      {
        heading: "Words that help",
        paragraphs: [
          "Asking how the person is feeling, rather than about eating or weight changes, is often more productive. Avoid discussing weight, shape, food and diets in front of them.",
          "Comments meant kindly, like \"You look well\", can be heard as comments on weight. Compliment things unrelated to their body instead, and reassure them that recovery is possible.",
        ],
      },
      {
        heading: "Mealtimes",
        paragraphs: [
          "Mealtimes can be particularly difficult. If the person is in treatment, ask their treatment team for advice on how to cope with mealtimes, and try to make meal plans together that you both agree to.",
          "Keep conversation neutral and lighthearted, and avoid topics such as diets or exercise. Do not worry if a meal goes badly, and just move on.",
        ],
      },
      {
        heading: "Your role in treatment",
        paragraphs: [
          "Families, partners and friends can play an important part in recovery, from helping someone get to sessions to providing a recovery-focused environment. In family therapy for young people, parents may take a central role in managing meals, with the clinician there to support and guide them.",
          "If the person prefers not to have family involved, professionals need to respect that. You should still be given good information about eating disorders in general, and offered your own support.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Supporting someone through an eating disorder can feel overwhelming and exhausting. Taking time to rest and look after yourself isn't selfish: it strengthens your ability to be there for them.",
          "You should be offered an assessment by your loved one's eating disorder service to see whether extra support would help. Beat's Helpline and its support hub for families and friends are there for you too.",
        ],
      },
    ],
    helps: [
      "Encourage them to get professional help, and offer to go along with them.",
      "Keep inviting them to things, even if they don't join in.",
      "Ask how they are feeling, rather than about food or weight.",
      "Avoid comments on appearance; compliment things unrelated to their body.",
      "Ask their treatment team for advice on coping with mealtimes.",
      "Look after yourself, and ask the eating disorder service about support for carers.",
    ],
    tryThisWeek: [
      "Invite them to something.",
      "Ask how they are feeling.",
      "Make time for yourself.",
    ],
    ask: "What support is there for me as a carer, and can I have an assessment?",
    interactive: {
      kind: "scenarios",
      title: "Moments as a carer",
      scenarios: [
        {
          id: "compliment",
          situation: "You want to tell them they look well.",
          options: [{ text: "Compliment something not about their body", best: true }, { text: "Say they look healthier" }],
          why: "Comments meant kindly, like \"You look well\", can be heard as comments on weight. Compliment things unrelated to their body instead.",
        },
        {
          id: "meal",
          situation: "A family meal goes badly.",
          options: [{ text: "Don't dwell on it, and move on", best: true }, { text: "Go over what went wrong at the table" }],
          why: "Do not worry if a meal goes badly, and just move on.",
        },
        {
          id: "anger",
          situation: "They react angrily when you try to help.",
          options: [{ text: "Stay calm, and talk once things settle", best: true }, { text: "Get angry back" }],
          why: "It might be best to walk away and talk once everyone involved has calmed down. Try to resist any urge to respond to anger by getting angry yourself.",
        },
        {
          id: "exhausted",
          situation: "You feel worn out and guilty about needing a break.",
          options: [{ text: "Take the break", best: true }, { text: "Push on without rest" }],
          why: "Taking time to rest and look after yourself isn't selfish: it strengthens your ability to be there for them.",
        },
      ],
    },
    sources: [NHS_HELP_SOMEONE, BEAT_TIPS, BEAT_FRIEND, NHS_PARENTS, BEAT_ROLE, NICE_CARERS, BEAT_CARERSELF, BEAT_CARERS, NHS_ANOREXIA_TREAT],
    quiz: {
      question: "What is often more helpful to ask about?",
      options: [{ text: "How the person is feeling", right: true }, { text: "What they have eaten" }, { text: "Whether their weight has changed" }],
      why: "Asking how the person is feeling, rather than about eating or weight changes, is often more productive.",
    },
  },
  {
    id: "eatd-talking",
    kicker: "Talking",
    question: "How do I start the conversation, about me or someone I'm worried about?",
    hook: "Whether you're telling someone or raising a worry, there's no perfect script. A little planning, and the right moment, help.",
    short: "If you're worried about someone, choose a calm, private time away from meals, focus on feelings rather than food or weight, and be ready for them to deny it. If you're telling someone about your own eating disorder, pick someone you trust and write down what you want to say first. Beat's Helpline can help you think it through.",
    sections: [
      {
        heading: "If you're worried about someone",
        paragraphs: [
          "It can be difficult to raise the issue. You may worry you'll say the wrong thing or offend the person. Remember eating disorders are serious mental illnesses and are not the person's fault.",
          "Choose a place where you both feel safe, and a time when neither of you feels angry or upset, avoiding just before or after meals. If several people are worried, don't talk to the person together, as they may feel ambushed.",
        ],
      },
      {
        heading: "What to say",
        paragraphs: [
          "Try not to centre the conversation on food or weight. \"I wondered if you'd like to talk about how you're feeling\" is a gentler approach than \"You need to get help\".",
          "Mention things that have concerned you, but avoid listing too many, as they may feel they have been watched. Sentences starting with \"I\", like \"I'm worried because you do not seem happy\", can help.",
        ],
      },
      {
        heading: "If they say nothing is wrong",
        paragraphs: [
          "They may be angry and defensive, or deny there's a problem. Try not to get angry in response, and reassure them that you'll be there when they're ready.",
          "Don't wait too long before approaching them again. Eating disorders thrive on secrecy, and you were worried for a reason, so trust your judgement.",
        ],
      },
      {
        heading: "Telling someone about yourself",
        paragraphs: [
          "Think about who might understand: someone you've confided in before, or who talks about mental health in a sensitive way. Before you talk, you could write down the thoughts and feelings affecting your eating, how long it has been going on, and how they could help.",
          "You don't have to say it face to face. You could write what you want to say and read it aloud, or send an email or a message.",
          "If someone reacts poorly, it does not mean you aren't ill or don't deserve treatment. How others react is not your fault, and if one person reacts badly, that does not mean the next person will.",
        ],
      },
      {
        heading: "At work",
        paragraphs: [
          "In a Beat survey, 2 in 3 people said they wouldn't feel comfortable talking to their line manager or a colleague about their eating disorder. An eating disorder is a disability under the Equality Act 2010, so employers must make reasonable adjustments.",
        ],
      },
    ],
    helps: [
      "Plan what you want to say, and have some information with you.",
      "Choose a calm, private time, away from mealtimes.",
      "Focus on feelings, not food or weight.",
      "If they deny it, reassure them you'll be there, and try again soon.",
      "If you're telling someone, write down what you want to say first.",
      "Call the Beat Helpline to think through who to tell and what to say.",
    ],
    tryThisWeek: [
      "Plan what to say.",
      "Pick a calm moment.",
      "Write down your feelings.",
    ],
    ask: "How can I tell my family, or raise my worries, in a way that helps?",
    interactive: {
      kind: "scenarios",
      title: "Finding the words",
      scenarios: [
        {
          id: "opener",
          situation: "You're ready to raise your worry with a friend.",
          options: [{ text: "\"Would you like to talk about how you're feeling?\"", best: true }, { text: "\"You need to get help\"" }],
          why: "\"I wondered if you'd like to talk about how you're feeling\" is a gentler approach than \"You need to get help\".",
        },
        {
          id: "timing",
          situation: "It's just after dinner and everyone is tense.",
          options: [{ text: "Wait for a calm time away from meals", best: true }, { text: "Bring it up now" }],
          why: "Choose a time when neither of you feels angry or upset, avoiding just before or after meals.",
        },
        {
          id: "denial",
          situation: "They say there's nothing wrong.",
          options: [{ text: "Stay calm, and try again soon", best: true }, { text: "Drop it for good" }],
          why: "Don't wait too long before approaching them again. Eating disorders thrive on secrecy.",
        },
        {
          id: "telling",
          situation: "You want to tell someone, but can't say it out loud.",
          options: [{ text: "Write it down, or send a message", best: true }, { text: "Keep it to yourself" }],
          why: "You don't have to say it face to face. You could write what you want to say and read it aloud, or send an email or a message.",
        },
      ],
    },
    sources: [BEAT_FRIEND, NHS_PARENTS, BEAT_TELL, BEAT_WORK],
    quiz: {
      question: "When is a good time to raise a worry about someone's eating?",
      options: [{ text: "A calm, private time away from meals", right: true }, { text: "During a meal" }, { text: "With everyone together" }],
      why: "Choose a place where you both feel safe, and a time when neither of you feels angry or upset, avoiding just before or after meals.",
    },
  },
  {
    id: "eatd-urgent",
    kicker: "Urgent help",
    question: "When should I get urgent help?",
    hook: "Eating disorders can become medical and mental health emergencies. Help is there right now, and you will not be wasting anyone's time.",
    short: "If someone's life is at risk, or you do not feel you can keep yourself or someone else safe, call 999 or go to A&E. For urgent help that is not an emergency, get help from 111 online or call 111 and select the mental health option. You can call Samaritans free on 116 123 at any time, or text SHOUT to 85258.",
    sections: [
      {
        heading: "A serious illness",
        paragraphs: [
          "Eating disorders are serious medical conditions, and when they get really bad they can put your life at risk.",
          "Beat's Helpline is not a crisis service, and its advisers are not medically trained. If you need emergency support, contact one of the services below.",
        ],
      },
      {
        heading: "If a life is at risk",
        paragraphs: [
          "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one. You will not be wasting anyone's time.",
          "If you have seriously harmed yourself, or you feel that you may be about to harm yourself, call 999 for an ambulance or go straight to A&E. Or ask someone else to call 999 or take you to A&E.",
        ],
      },
      {
        heading: "Urgent, but not an emergency",
        paragraphs: [
          "Get help from 111 online, or call 111 and select the mental health option. 111 will tell you the right place to get help, and you may be able to speak to a trained mental health professional over the phone.",
          "You can also ask for an urgent GP appointment. If you are already supported by a mental health team or eating disorder service, your care plan may say what to do in a crisis.",
        ],
      },
      {
        heading: "Someone to talk to, any time",
        paragraphs: [
          "If you're feeling like you want to end your life, it's important to tell someone. Help and support is available right now. You do not have to struggle with difficult feelings alone.",
          "Call Samaritans free on 116 123, any time, day or night. If you do not want to talk to someone over the phone, text SHOUT to 85258, 24 hours a day, every day.",
          "If you're under 19, you can also call Childline on 0800 1111. The number will not appear on your phone bill.",
        ],
      },
      {
        heading: "Getting through right now",
        paragraphs: [
          "Try not to think about the future: just focus on getting through today. Get yourself to a safe place, like a friend's house, and be around other people.",
          "Let family or friends know what's going on for you. They may be able to offer support and help keep you safe. It may also help to make a safety plan to use if you need it.",
        ],
      },
    ],
    helps: [
      "If someone's life is at risk, call 999 or go to A&E.",
      "For urgent help that is not an emergency, call 111 and select the mental health option, or use 111 online.",
      "Call Samaritans free on 116 123, at any time of the day or night.",
      "If you would rather not talk on the phone, text SHOUT to 85258.",
      "Ask for an urgent GP appointment, or follow your care plan if you have one.",
      "Tell family or friends what's going on for you.",
    ],
    tryThisWeek: [
      "Know when to call 999.",
      "Call 111 for urgent help.",
      "Tell someone you trust.",
    ],
    ask: "Who do I contact if things get worse quickly, and what does my care plan say?",
    interactive: {
      kind: "flip-cards",
      title: "Who to contact",
      intro: "Turn each card to see when to use it.",
      cards: [
        { id: "999", front: "999 or A&E", when: "If a life is at risk", back: "Call 999 or go to A&E if you cannot keep yourself or someone else safe. You will not be wasting anyone's time." },
        { id: "111", front: "NHS 111", when: "Urgent help, not an emergency", back: "Call 111 and select the mental health option, or use 111 online. They will tell you where to get help." },
        { id: "samaritans", front: "Samaritans: 116 123", when: "Any time, day or night", back: "Free from any phone. Volunteers listen, and won't judge or tell you what to do." },
        { id: "shout", front: "Shout: text SHOUT to 85258", when: "If you'd rather not talk", back: "A free, confidential text line, open 24 hours a day, every day." },
        { id: "gp", front: "A GP", when: "For an urgent appointment", back: "Ask for an urgent GP appointment. A GP can also help you access mental health services." },
        { id: "beat", front: "Beat Helpline", when: "Support, not emergencies", back: "Advisers listen and help with next steps, 3pm to 8pm, Monday to Friday. Beat is not a crisis service." },
      ],
    },
    sources: [NICE_WHAT, BEAT_SUPPORTNOW, NHS_URGENT, NHS_SUICIDAL, SAM_CONTACT, EMM_URGENT, SHOUT],
    quiz: {
      question: "What should you do if someone's life is at risk?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait for a GP appointment" }, { text: "Send an email" }],
      why: "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe.",
    },
  },
  {
    id: "eatd-support",
    kicker: "Support",
    question: "Where can I find helplines and support?",
    hook: "You don't need a diagnosis to get support. Beat's Helplines, webchat and online groups are there for anyone affected, including family and friends.",
    short: "Beat's free, confidential Helplines are for anyone affected by an eating disorder, including people supporting someone. In England, call 0808 801 0677, from 3pm to 8pm, Monday to Friday, or use the one-to-one webchat or email. You don't need a diagnosis to use them, and Beat also runs online support groups.",
    sections: [
      {
        heading: "Beat's Helplines",
        paragraphs: [
          "Beat's Helplines are for anyone affected by an eating disorder, of any age and wherever they are in their journey. You don't need a formal diagnosis to use them, and calls are free from landlines and mobiles in the UK and do not appear on itemised bills.",
          "The phone lines are open 3pm to 8pm, Monday to Friday. In England, call 0808 801 0677. In Scotland, call 0808 801 0432. In Wales, call 0808 801 0433. In Northern Ireland, call 0808 801 0434.",
        ],
      },
      {
        heading: "Webchat, email and groups",
        paragraphs: [
          "You can talk one-to-one with a trained Helpline adviser by webchat, or send an email. Beat aims to reply to emails within 2 working days, but at busy times webchat may be quicker.",
          "Beat runs online support groups where you can talk with people going through similar experiences, and no diagnosis is needed. Its HelpFinder lets you search for support and treatment services near you.",
        ],
      },
      {
        heading: "What a helpline can and can't do",
        paragraphs: [
          "Advisers offer a supportive space to explore your feelings, information about eating disorders, and help with your options, from NHS treatment to charity support, peer support or self-help. Calls are limited to 30 minutes so they can support as many people as possible.",
          "Beat does not run a crisis service. If you or someone else is in immediate danger, call 999 or Samaritans on 116 123.",
        ],
      },
      {
        heading: "Support for family and friends",
        paragraphs: [
          "Beat's services are for anyone supporting someone too. Its hub for families and friends offers workshops, courses and forums, and there is telephone coaching for family members.",
          "You can also ask your GP about support groups for parents, and ask your relative's care team about a carer's assessment.",
        ],
      },
      {
        heading: "Other support",
        paragraphs: [
          "Other organisations support people with eating disorders and their families, including Talk ED and YoungMinds. Comments in forums and on social media are often based on personal experience, and should not be taken as medical advice.",
          "Joining a self-help support group may also be helpful. It can help to speak to other people who have been through it.",
        ],
      },
    ],
    helps: [
      "Call the Beat Helpline on 0808 801 0677 in England, 3pm to 8pm, Monday to Friday.",
      "Use the one-to-one webchat if you need a quicker reply than email.",
      "Join a Beat online support group; no diagnosis is needed.",
      "Search HelpFinder for support and treatment services near you.",
      "If someone is in immediate danger, call 999 or Samaritans on 116 123.",
      "If you're a carer, ask about Beat's support for families and a carer's assessment.",
    ],
    tryThisWeek: [
      "Call the Beat Helpline.",
      "Try a Beat online group.",
      "Search HelpFinder.",
    ],
    ask: "Is there a support group near me, for me or my family?",
    interactive: {
      kind: "flip-cards",
      title: "Support, card by card",
      intro: "Turn each card to see when to use it and what it offers.",
      cards: [
        { id: "phone", front: "Beat Helpline", when: "3pm to 8pm, Monday to Friday", back: "Free from UK landlines and mobiles. England 0808 801 0677; Scotland, Wales and Northern Ireland have their own numbers." },
        { id: "webchat", front: "One-to-one webchat", when: "If you'd rather type", back: "A secure chat with a trained Helpline adviser. Often quicker than email at busy times." },
        { id: "email", front: "Email support", when: "When you'd like to write", back: "Beat aims to reply within 2 working days; it can take longer at busy times." },
        { id: "groups", front: "Online support groups", when: "To talk with others who understand", back: "Peer support groups with people going through similar experiences. No diagnosis needed." },
        { id: "helpfinder", front: "HelpFinder", when: "To find local services", back: "Enter your age and postcode to see Beat, NHS, private and other services in your area." },
        { id: "carers", front: "Support for carers", when: "If you support someone", back: "Beat's hub for families and friends, and telephone coaching for family members." },
        { id: "crisis", front: "999 or Samaritans", when: "Immediate danger", back: "Beat is not a crisis service. Call 999, or Samaritans free on 116 123." },
      ],
    },
    sources: [BEAT_SUPPORTNOW, BEAT_ONLINE, BEAT_FIRSTTIME, BEAT_CARERS, NHS_PARENTS, RETHINK, NHS_BULIMIA, NHS_ANOREXIA_TREAT],
    quiz: {
      question: "Do you need a diagnosis to use Beat's Helpline?",
      options: [{ text: "No, it's for anyone affected", right: true }, { text: "Yes, a formal diagnosis" }, { text: "Only with a GP referral" }],
      why: "You don't need a formal diagnosis to use them.",
    },
  },
];
