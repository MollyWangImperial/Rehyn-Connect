import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Binge eating disorder page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (including NHS inform and
// Every Mind Matters), Beat, the eating disorder charity, NICE (guideline NG69 and its information for the public),
// Rethink Mental Illness and Samaritans. mind.org.uk was not tried, and the Royal College of Psychiatrists' binge
// eating disorder page answered 503 today, so neither is cited. Every answer follows Beat's media guidelines: no
// weights, BMI figures, calorie numbers or food amounts, no descriptions of bodies, and no detail of eating disorder
// behaviours that could be copied. Safe messaging throughout, with the crisis routes exactly as the NHS, Samaritans
// and Beat give them. Nothing here suggests stopping or changing a medicine without the doctor. General information
// only; it never replaces what a person's own GP or eating disorder team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const nhsInform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/illnesses-and-conditions/mental-health/${path}` });
const beat = (label: string, path: string): LearnSource => ({ label: `Beat: ${label}`, url: `https://www.beateatingdisorders.org.uk/${path}` });
const niceIfp = (label: string, chapter: string): LearnSource => ({ label: `NICE: Eating disorders, information for the public: ${label}`, url: `https://www.nice.org.uk/guidance/ng69/ifp/chapter/${chapter}` });

const NHS_BED = nhs("Binge eating disorder: overview", "mental-health/conditions/binge-eating/overview/");
const NHS_BED_TREAT = nhs("Binge eating disorder: treatment", "mental-health/conditions/binge-eating/treatment/");
const NHS_ED = nhs("Eating disorders: overview", "mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/");
const NHS_HELP_SOMEONE =nhs("How to help someone with an eating disorder", "mental-health/advice-for-life-situations-and-events/how-to-help-someone-with-eating-disorder/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_ANTIDEPRESSANTS = nhs("Antidepressants", "medicines/antidepressants/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");
const EMM_URGENT = emm("Urgent support", "urgent-support/");
const EMM_STRESS = emm("Dealing with stress", "mental-health-issues/stress/");

const NHSI_BED = nhsInform("Binge eating disorder (BED)", "eating-disorders/binge-eating-disorder-bed/");
const NHSI_SELFHELP = nhsInform("Binge eating self-help guide", "mental-health-self-help-guides/binge-eating-self-help-guide/");

const BEAT_BED = beat("Binge eating disorder", "get-information-and-support/about-eating-disorders/types/binge-eating-disorder/");
const BEAT_BED_TREAT = beat("Treatment for binge eating disorder", "get-information-and-support/about-eating-disorders/types/binge-eating-disorder/treatment/");
const BEAT_TYPES = beat("Types of eating disorder", "get-information-and-support/about-eating-disorders/types/");
const BEAT_SIGNS = beat("Signs and symptoms of an eating disorder", "get-information-and-support/about-eating-disorders/signs-and-symptoms-of-an-eating-disorder/");
const BEAT_GLOSSARY = beat("Glossary of terms", "get-information-and-support/about-eating-disorders/glossary-of-terms/");
const BEAT_GP = beat("Going to the doctor", "get-information-and-support/get-help-for-myself/going-to-the-doctor/");
const BEAT_RECOVERY = beat("Recovery", "get-information-and-support/get-help-for-myself/recovery/");
const BEAT_RELAPSE = beat("Relapse prevention plan", "get-information-and-support/get-help-for-myself/self-help-and-self-care/relapse-prevention-plan/");
const BEAT_TELL = beat("How to tell someone you have an eating disorder", "get-information-and-support/get-help-for-myself/how-to-tell-someone-you-have-an-eating-disorder/");
const BEAT_STRUGGLING = beat("I'm struggling to access eating disorder support", "get-information-and-support/get-help-for-myself/struggling-to-access-eating-disorder-support/");
const BEAT_SUPPORTNOW = beat("I need support now: Helpline", "get-information-and-support/get-help-for-myself/support-now/");
const BEAT_ONLINE = beat("Online support", "get-information-and-support/get-help-for-myself/online-support/");
const BEAT_GROUPS = beat("Online support groups", "get-information-and-support/get-help-for-myself/support-now/online-support-groups/");
const BEAT_FRIEND = beat("Worried about a friend or family member", "get-information-and-support/support-someone-else/worried-about-a-friend-or-family-member/");
const BEAT_TIPS = beat("Tips for supporting someone with an eating disorder", "get-information-and-support/support-someone-else/tips-for-supporting-somebody-with-an-eating-disorder/");
const BEAT_CARERS = beat("Services for carers", "get-information-and-support/support-someone-else/services-for-carers/");
const BEAT_CARERSELF = beat("Looking after yourself while supporting someone with an eating disorder", "get-information-and-support/support-someone-else/tips-for-self-care/");
const BEAT_HUB = beat("Eating disorder support hub for families and friends", "get-information-and-support/support-someone-else/hub-family-friends/");
const BEAT_SHAMING = beat("Public health, not public shaming", "support-our-work/campaign-for-beat/current/campaign-public-health-not-public-shaming/");

const NICE_WHAT = niceIfp("What is an eating disorder?", "What-is-an-eating-disorder");
const NICE_NEXT = niceIfp("What should happen next?", "What-should-happen-next");
const NICE_BED = niceIfp("Binge-eating disorder", "Binge-eating-disorder");
const NICE_OTHER = niceIfp("Managing other conditions", "Managing-other-conditions");
const NICE_CARERS = niceIfp("Supporting parents, family members and carers", "Supporting-parents-family-members-and-carers");
const NICE_RECS: LearnSource = { label: "NICE: Eating disorders: recognition and treatment (NG69), recommendations", url: "https://www.nice.org.uk/guidance/ng69/chapter/Recommendations" };

const RETHINK: LearnSource = { label: "Rethink Mental Illness: Eating disorders", url: "https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-conditions/eating-disorders/" };
const SAM_CONTACT: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const bingeEatingAnswers: LearnArticle[] = [
  {
    id: "bed-what-it-is",
    kicker: "Understanding",
    question: "What is binge eating disorder?",
    hook: "Not greed, not a phase and not a lack of willpower. Binge eating disorder is a serious, common and treatable mental health condition.",
    short: "Binge eating disorder involves regularly eating a lot of food over a short period of time, without feeling in control. It is a serious mental health condition, more common than other eating disorders, and it can affect anyone. Most people recover with the right support and treatment.",
    sections: [
      {
        heading: "More than overeating",
        paragraphs: [
          "Binge eating disorder involves regularly eating a lot of food over a short period of time, without feeling in control of what you're doing. It is a serious mental health condition.",
          "It is not about choosing to eat large portions, or simply overindulging. Far from being enjoyable, binges are very distressing, and people may find it difficult to stop during a binge even if they want to.",
          "Many people overeat on occasion, sometimes because of difficult emotions, but this is not the same as having binge eating disorder. What sets it apart is how often the binges happen, what they are like and the feelings that come with them.",
        ],
      },
      {
        heading: "About feelings, not willpower",
        paragraphs: [
          "Eating disorders are not all about food, but also about feelings. An eating disorder is never the fault of the person experiencing it, and anyone who has one deserves fast, compassionate support to help them get better.",
          "People often feel guilty or ashamed after binge eating. Feelings of guilt and disgust can feed a cycle of negative emotions, restricting food and binge eating again.",
        ],
      },
      {
        heading: "Anyone can have it",
        paragraphs: [
          "Binge eating disorder can affect anyone of any age, gender, ethnicity or background. It often starts when people are in their 20s or older.",
          "Evidence suggests it is more common than other eating disorders. In the UK, around 1 in 25 people experience symptoms of binge eating disorder, according to NHS inform.",
          "There is no one way for someone with binge eating disorder to look. Whether you have an eating disorder does not depend on your weight.",
        ],
      },
      {
        heading: "Treatable, and recovery is possible",
        paragraphs: [
          "Eating disorders are serious, but there are treatments that can help, and you can recover. Most people recover from binge eating disorder with the right support and treatment, but it may take time.",
          "The main treatments are guided self-help and a talking therapy called cognitive behavioural therapy (CBT). Treatment does not directly focus on weight loss: it focuses on the thoughts and feelings that lead to a difficult relationship with food.",
        ],
      },
    ],
    helps: [
      "If you think you may have binge eating disorder, see a GP as soon as you can.",
      "Remember it is an illness, and it is not your fault.",
      "Talk in confidence to an adviser on the Beat Helpline, on 0808 801 0677 in England.",
      "If you're worried about someone, let them know and encourage them to see a GP.",
      "Get help early: the earlier treatment starts, the better the chance of recovery.",
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Call the Beat Helpline.",
      "Tell someone you're worried.",
    ],
    ask: "Could what I'm going through be binge eating disorder?",
    interactive: {
      kind: "scenarios",
      title: "Myth or fact?",
      scenarios: [
        {
          id: "willpower",
          situation: "Someone says binge eating is just a lack of willpower.",
          options: [{ text: "It's a serious mental health condition", best: true }, { text: "They just need more willpower" }],
          why: "It is a serious mental health condition. It is not about choosing to eat large portions, or simply overindulging.",
        },
        {
          id: "overeating",
          situation: "A friend says everyone overeats sometimes, so it's the same thing.",
          options: [{ text: "Overeating now and then is different", best: true }, { text: "It's exactly the same" }],
          why: "Many people overeat on occasion, but this is not the same as having binge eating disorder.",
        },
        {
          id: "look",
          situation: "You think you could tell who has it just by looking.",
          options: [{ text: "There's no one way to look", best: true }, { text: "You can always tell" }],
          why: "There is no one way for someone with binge eating disorder to look.",
        },
        {
          id: "weight",
          situation: "You think treatment is all about losing weight.",
          options: [{ text: "It focuses on thoughts and feelings", best: true }, { text: "It's mainly about weight loss" }],
          why: "Treatment does not directly focus on weight loss: it focuses on the thoughts and feelings that lead to a difficult relationship with food.",
        },
      ],
    },
    sources: [NHS_BED, BEAT_BED, NICE_WHAT, NHSI_BED, BEAT_TYPES, BEAT_BED_TREAT, BEAT_TIPS],
    quiz: {
      question: "Is binge eating disorder the same as overeating now and then?",
      options: [{ text: "No, it is a serious mental health condition", right: true }, { text: "Yes, everyone has it sometimes" }, { text: "Only if it happens at weekends" }],
      why: "Many people overeat on occasion, sometimes because of difficult emotions, but this is not the same as having binge eating disorder.",
    },
  },
  {
    id: "bed-signs",
    kicker: "Signs",
    question: "What are the signs and feelings of binge eating disorder?",
    hook: "Loss of control, then shame. Changes in feelings and behaviour often show long before anything physical, and you don't need every sign to ask for help.",
    short: "The main sign is eating a lot of food in a short time and not being able to stop when full, often alone and without feeling in control. Guilt, shame, low self-esteem and anxiety are common. Someone doesn't need every sign to be ill, and changes in behaviour are often noticed first.",
    sections: [
      {
        heading: "What a binge can be like",
        paragraphs: [
          "The main symptom is eating a lot of food in a short time and not being able to stop when full. Other signs include eating when not hungry, eating very fast, and eating alone or secretly.",
          "Binges are sometimes planned in advance, but can be spontaneous. Some people describe feeling disconnected from what they're doing during a binge.",
        ],
      },
      {
        heading: "Feelings that come with it",
        paragraphs: [
          "People often feel depressed, guilty, ashamed or disgusted after binge eating. A sense of being out of control around food, and spending a lot of time thinking about food, are common.",
          "Other signs include feeling anxious and tense, especially about eating in front of others, low confidence and self-esteem, and other mental illnesses such as depression or anxiety.",
        ],
      },
      {
        heading: "Changes others might notice",
        paragraphs: [
          "Changes in behaviour are often noticeable before any physical change. These can include avoiding eating around others, social withdrawal and isolation, irritability and mood swings.",
          "Someone may change their behaviour, or have changes in their mood. They may not realise they have an eating disorder, or may deny it or be secretive about it.",
          "Anyone can develop an eating disorder. It is thought that around a quarter of people with one are male, and stereotypes about who gets eating disorders can make them harder to spot.",
        ],
      },
      {
        heading: "Physical signs",
        paragraphs: [
          "Physical signs can include tiredness, difficulty sleeping, bloating, constipation, stomach pain and other stomach problems.",
          "Over time, binge eating disorder is associated with high blood pressure, high cholesterol, type 2 diabetes and heart disease. Many of its effects are reversible or can be prevented from getting worse, and eating disorders are treatable.",
        ],
      },
      {
        heading: "You don't need every sign",
        paragraphs: [
          "Someone doesn't have to have all of the signs to be ill. If you're worried about yourself or someone you know, even if only some signs are present, seek help. The first step is usually to make an appointment with the GP.",
          "It is normal to find comfort in food, and there's no need to worry if it happens without feeling out of control, distressed or guilty. If food is becoming your main way of coping with your feelings, it is important to reach out for help.",
        ],
      },
    ],
    helps: [
      "Seek help even if only some of the signs are there.",
      "Make an appointment with the GP; this is usually the first step.",
      "If you're worried about someone, let them know and encourage them to see a GP.",
      "Ask how the person is feeling, rather than asking about eating or weight changes.",
      "Call the Beat Helpline to talk through your worries.",
    ],
    tryThisWeek: [
      "Seek help with only some signs.",
      "Book a GP appointment.",
      "Ask how they are feeling.",
    ],
    ask: "Could these signs be binge eating disorder, even though I only have some of them?",
    interactive: {
      kind: "signs",
      title: "Signs to mention",
      intro: "Tick any you have noticed, in yourself or someone else. The ones you tick make a list to take to the GP.",
      signs: ["Eating a lot of food in a short time", "Not being able to stop when full", "Eating when not hungry", "Eating very fast", "Eating alone or secretly", "Feeling out of control around food", "Thinking about food much of the time", "Guilt, shame or disgust afterwards", "Feeling low or depressed", "Feeling anxious eating in front of others", "Low confidence or self-esteem", "Avoiding eating around others", "Withdrawing from friends and family", "Irritability or mood swings", "Tiredness or difficulty sleeping", "Bloating, constipation or stomach pain"],
      after: "Take this list to a GP. You don't need every sign to ask for help, and the earlier help starts, the better.",
      copyHeading: "Signs I have noticed",
    },
    sources: [NHS_BED, BEAT_BED, NHSI_BED, BEAT_SIGNS, NHS_ED, BEAT_FRIEND, BEAT_TYPES],
    quiz: {
      question: "What is often noticeable first, before any physical change?",
      options: [{ text: "Changes in behaviour", right: true }, { text: "Changes in appearance" }, { text: "Nothing, until it's severe" }],
      why: "Changes in behaviour are often noticeable before any physical change.",
    },
  },
  {
    id: "bed-causes",
    kicker: "Causes",
    question: "Why does binge eating disorder happen?",
    hook: "There is no single reason. Genes, biology, feelings and strict food rules can all play a part, and it is never anyone's fault.",
    short: "The exact causes of binge eating disorder are not known. A family history, anxiety or low self-esteem, trauma and pressure to be slim can make it more likely, and strict dieting, hunger and difficult feelings can keep it going. It is not a choice, and it is not your fault.",
    sections: [
      {
        heading: "No single reason",
        paragraphs: [
          "The exact causes of binge eating disorder are not known. Eating disorders are complex, and there is no single reason why someone develops one.",
          "A whole range of factors, including someone's genetics, biology, psychology and surroundings, can combine to make it more likely. The latest research is showing that eating disorders have much more to do with biology than was previously thought.",
        ],
      },
      {
        heading: "Things that make it more likely",
        paragraphs: [
          "You are more likely to have an eating disorder if you or a member of your family has a history of eating disorders, depression, or alcohol or drug misuse.",
          "It may also be more likely if you have anxiety, low self-esteem, an obsessive personality or are a perfectionist, or if you've experienced a stressful event or trauma. Being very worried about being slim, especially with pressure from society or a job, can play a part too.",
        ],
      },
      {
        heading: "What can keep it going",
        paragraphs: [
          "Strict dieting or rules around food can lead to binge eating, because of hunger and feelings of deprivation. Long gaps between meals and snacks make extreme hunger, and a binge, more likely.",
          "Breaking a strict food rule can trigger a feeling of loss of control and hopelessness, and lead to a binge. Afterwards, guilt and disgust can feed a cycle of negative emotions, restriction and binge eating again.",
          "Binge eating can be a way of managing feeling overwhelmed, low or bored, but in the longer term it's likely to make you feel worse.",
        ],
      },
      {
        heading: "Other conditions",
        paragraphs: [
          "It is common for eating disorders to go together with conditions like depression, anxiety, self-harm, alcohol or substance misuse, or obsessive-compulsive disorder. Binge eating disorder is linked to low self-esteem and lack of confidence, depression and anxiety.",
          "Your healthcare professionals should explore whether you need other support, so that all your needs can be included in your treatment plan.",
        ],
      },
      {
        heading: "Not your fault",
        paragraphs: [
          "Eating disorders are serious mental illnesses. They aren't a choice, and it certainly isn't your fault.",
          "Weight changes are very unlikely to be the sole and direct cause of an eating disorder. Simply focusing on weight loss doesn't address the root of the illness.",
        ],
      },
    ],
    helps: [
      "Remember an eating disorder is not a choice, and it is not your fault.",
      "Tell your GP or team about any other conditions, such as anxiety or depression, so all your needs can be part of your treatment plan.",
      "Try not to diet, as restrictive dieting can increase the urge to binge.",
      "Notice the situations, thoughts and feelings that seem to come before a binge.",
      "If you support someone, recognise that you are not to blame.",
    ],
    tryThisWeek: [
      "Remind yourself it isn't your fault.",
      "Mention other conditions to your GP.",
      "Notice what comes before a binge.",
    ],
    ask: "Could another condition I have, like anxiety or depression, be linked to this?",
    interactive: {
      kind: "risk-check",
      title: "What can make it more likely?",
      intro: "Tick any that apply. Some of these can change, and some cannot. None of them means it is anyone's fault.",
      items: [
        { id: "family-history", label: "A family history", note: "A family history of eating disorders, depression, or alcohol or drug misuse makes an eating disorder more likely.", changeable: false },
        { id: "anxiety", label: "Anxiety or low self-esteem", note: "These can play a part. Your treatment plan should include support for any other conditions you have.", changeable: true },
        { id: "trauma", label: "A stressful event or trauma", note: "This can make it more likely. It is never your fault.", changeable: false },
        { id: "dieting", label: "Strict dieting or food rules", note: "Restrictive dieting can increase urges to binge. Regular eating is a key part of treatment.", changeable: true },
        { id: "gaps", label: "Long gaps between meals", note: "Extreme hunger makes a binge more likely. Regular meals and snacks help.", changeable: true },
        { id: "slim", label: "Pressure to be slim", note: "Worry about being slim, with pressure from society or a job, can play a part.", changeable: true },
      ],
    },
    sources: [NHS_BED, BEAT_TYPES, BEAT_BED, NHSI_SELFHELP, BEAT_RECOVERY, NICE_NEXT, BEAT_BED_TREAT, BEAT_TIPS],
    quiz: {
      question: "Can strict dieting make binge eating more likely?",
      options: [{ text: "Yes, through hunger and feelings of deprivation", right: true }, { text: "No, dieting always helps" }, { text: "Only for teenagers" }],
      why: "Strict dieting or rules around food can lead to binge eating, because of hunger and feelings of deprivation.",
    },
  },
  {
    id: "bed-getting-help",
    kicker: "Getting help",
    question: "How do I talk to a GP about binge eating?",
    hook: "Booking the appointment is often the hardest part. Knowing what to expect, and what you're entitled to, can make it easier.",
    short: "See a GP as soon as you can. They will ask about your eating and how you're feeling, check your health and should refer you to an eating disorder specialist if they think you have binge eating disorder. You can bring someone with you, and whether you have an eating disorder does not depend on your weight.",
    sections: [
      {
        heading: "See a GP early",
        paragraphs: [
          "If you think you may have binge eating disorder, see a GP as soon as you can. Earlier treatment means a greater chance of fully recovering.",
          "It can be difficult to talk about your illness with a doctor. Remember it is an illness, every bit as serious as any other eating disorder, and you deserve help to get better.",
          "The first step is often talking to someone you trust, such as a family member or friend. The next step might be to visit your GP or practice nurse.",
        ],
      },
      {
        heading: "Preparing",
        paragraphs: [
          "Before you go, it can help to write down questions, the symptoms you've experienced or any behaviour you're worried about, so you won't feel put on the spot.",
          "You could book a double appointment so you don't feel rushed, and bring someone you trust. They can support you, or help explain what's been happening.",
          "Beat's First Steps leaflet is designed to help you prepare, and to help you get a referral to a specialist.",
        ],
      },
      {
        heading: "At the appointment",
        paragraphs: [
          "The GP will ask about your eating habits and how you're feeling, and check your overall health. If you'd rather not know your weight, you can ask them not to tell you the result.",
          "Your GP should think about everything that is affecting you when deciding whether to refer you, and not make a decision based on one particular problem.",
          "Whether you have an eating disorder does not depend on your weight. Anyone of any weight can have an eating disorder.",
        ],
      },
      {
        heading: "Referral and waiting",
        paragraphs: [
          "If the GP thinks you have binge eating disorder, they should refer you to an eating disorder specialist or team. For eating disorders, you'll need a GP to refer you for NHS talking therapy.",
          "There is often a waiting list. While you wait, you should still be able to see your GP regularly so they can check how you are doing.",
        ],
      },
      {
        heading: "If you don't feel heard",
        paragraphs: [
          "GPs do not specialise in eating disorders, so may not fully understand binge eating disorder. If the focus is only on weight loss, remember that this doesn't address the root of the illness.",
          "You have a right to good quality treatment. It's okay to ask to see a different GP, and you can look into self-referral in your area. Beat's advocacy pages can help you challenge decisions about your care.",
        ],
      },
    ],
    helps: [
      "See a GP as soon as you can if you're worried about your relationship with food.",
      "Write down your questions and symptoms before you go.",
      "Book a double appointment, and bring someone you trust if it helps.",
      "Ask not to be told your weight if you'd rather not know.",
      "Ask for a referral to an eating disorder specialist.",
      "If you don't feel heard, ask to see a different GP.",
    ],
    tryThisWeek: [
      "See a GP soon.",
      "Write down your questions.",
      "Ask for a referral.",
    ],
    ask: "Can I be referred to an eating disorder service, and what support is there while I wait?",
    interactive: {
      kind: "timeline",
      title: "From worry to specialist care",
      steps: [
        { id: "talk", when: "Step 1", title: "Talk to someone", points: ["Tell someone you trust.", "Then think about seeing your GP."] },
        { id: "prepare", when: "Step 2", title: "Prepare", points: ["Write down questions and symptoms.", "Take Beat's First Steps leaflet."] },
        { id: "appointment", when: "Step 3", title: "The appointment", points: ["Questions about eating and feelings.", "You can ask not to know your weight."] },
        { id: "referral", when: "Step 4", title: "Referral", points: ["The GP should refer you to a specialist.", "Talking therapy for eating disorders needs a GP referral."] },
        { id: "waiting", when: "Step 5", title: "While you wait", points: ["Keep seeing your GP regularly.", "Ask for appointments if none are offered."] },
        { id: "not-heard", when: "If needed", title: "If you don't feel heard", points: ["Ask to see a different GP.", "Look into self-referral in your area."] },
      ],
    },
    sources: [NHS_BED, BEAT_GP, BEAT_BED_TREAT, NICE_NEXT, NICE_RECS, NHS_CBT, BEAT_STRUGGLING, BEAT_RECOVERY],
    quiz: {
      question: "Does having an eating disorder depend on your weight?",
      options: [{ text: "No, anyone of any weight can have one", right: true }, { text: "Yes, only at certain weights" }, { text: "Only a scale can tell" }],
      why: "Whether you have an eating disorder does not depend on your weight. Anyone of any weight can have an eating disorder.",
    },
  },
  {
    id: "bed-guided-self-help",
    kicker: "Treatment",
    question: "What is guided self-help for binge eating?",
    hook: "Usually the first step. A self-help programme based on CBT, worked through at your own pace, with short sessions from a practitioner to keep you on track.",
    short: "Guided self-help is usually the first treatment offered for binge eating disorder. It means working through a self-help book or online guide based on CBT, with short supportive sessions from a healthcare professional. If it has not helped after 4 weeks, you may be offered CBT.",
    sections: [
      {
        heading: "Usually the first step",
        paragraphs: [
          "You'll probably be offered a guided self-help programme as a first step in treating binge eating disorder. NICE recommends it for children, young people and adults.",
          "It is based on cognitive behavioural therapy (CBT). It focuses specifically on binge eating disorder, and includes supportive sessions to help make sure it works.",
        ],
      },
      {
        heading: "What it involves",
        paragraphs: [
          "Guided self-help often involves working through a self-help book or guide online, combined with sessions with a healthcare professional, such as a therapist.",
          "People generally have between 4 and 9 short sessions that last about 20 minutes each, running weekly at first. You and your practitioner should agree how many sessions to have, depending on what works for you.",
          "You'll look at the thoughts, feelings and actions you have in relation to your eating. Self-help guidance focuses on planning meals and keeping food diaries.",
        ],
      },
      {
        heading: "Making the most of it",
        paragraphs: [
          "In CBT you'll usually be asked to practise what you've learned between sessions, and it's important to do this for CBT to work. You may also be asked to record your progress in a worksheet or diary.",
          "Some techniques take a little time to work. If something doesn't help at first, it can be worth sticking with it for a few weeks.",
        ],
      },
      {
        heading: "If it isn't enough",
        paragraphs: [
          "Guided self-help may not be right for everyone. If it is not enough, or has not helped you after 4 weeks, you may also be offered group or individual CBT.",
          "NHS inform's CBT-based self-help guide is meant for milder binge eating. If you're bingeing several times a week, speak to your GP practice, as you may need more help than a digital tool can provide.",
        ],
      },
      {
        heading: "Support alongside",
        paragraphs: [
          "Joining a self-help support group may also be helpful. Beat runs a Binge Eating Online Support Group, which is anonymous and chat-based, and you don't need a formal diagnosis to join.",
        ],
      },
    ],
    helps: [
      "Ask about guided self-help, the usual first step in treatment.",
      "Agree with your practitioner how many sessions to have.",
      "Practise what you learn between sessions.",
      "Stick with new techniques for a few weeks, as they can take time to work.",
      "If it hasn't helped after 4 weeks, ask about CBT.",
      "Join Beat's Binge Eating Online Support Group; no diagnosis is needed.",
    ],
    tryThisWeek: [
      "Ask about guided self-help.",
      "Practise between sessions.",
      "Try Beat's online group.",
    ],
    ask: "Can I start guided self-help, and who will I have my sessions with?",
    interactive: {
      kind: "timeline",
      title: "How guided self-help runs",
      steps: [
        { id: "start", when: "First step", title: "Guided self-help is offered", points: ["Usually the first treatment.", "Based on CBT."] },
        { id: "book", when: "Each week", title: "Work through the book", points: ["A self-help book or online guide.", "Practise what you learn."] },
        { id: "sessions", when: "Weekly at first", title: "Short sessions", points: ["Usually 4 to 9 sessions.", "About 20 minutes each."] },
        { id: "review", when: "After 4 weeks", title: "Check how it's going", points: ["If it hasn't helped, CBT may be offered.", "Agree what works for you."] },
        { id: "support", when: "Alongside", title: "Support groups", points: ["Beat's online group for binge eating.", "No diagnosis needed."] },
      ],
    },
    sources: [NHS_BED_TREAT, NICE_BED, BEAT_BED_TREAT, NICE_RECS, RETHINK, NHSI_SELFHELP, NHS_CBT, BEAT_GROUPS],
    quiz: {
      question: "What does guided self-help usually involve?",
      options: [{ text: "A self-help book plus short sessions with a professional", right: true }, { text: "A stay in hospital" }, { text: "Medicine on its own" }],
      why: "Guided self-help often involves working through a self-help book or guide online, combined with sessions with a healthcare professional, such as a therapist.",
    },
  },
  {
    id: "bed-cbt",
    kicker: "Talking therapy",
    question: "What happens in CBT for binge eating?",
    hook: "A talking therapy that works on the thoughts, feelings and habits that keep binge eating going, usually in a group, sometimes one-to-one.",
    short: "CBT for binge eating disorder is a talking therapy, usually in a group, that helps you plan regular meals, work out what triggers binges, manage negative feelings about your body and avoid relapse. It is not designed to change your weight, and dieting during treatment can make it harder to stop binge eating.",
    sections: [
      {
        heading: "What CBT is",
        paragraphs: [
          "Cognitive behavioural therapy (CBT) is a type of talking therapy where a therapist helps you to change how you think and act. It aims to help you deal with the underlying thoughts and feelings that cause the illness, by breaking problems down into smaller parts.",
          "CBT starts with the idea that thoughts, feelings and behaviour are linked and affect one another. For binge eating, it focuses on what's keeping the eating disorder going, rather than diet or weight loss.",
        ],
      },
      {
        heading: "Group or one-to-one",
        paragraphs: [
          "If you're offered CBT, it will usually be in group sessions with other people, but it may also be one-to-one with a therapist. Each group session usually lasts about 90 minutes.",
          "If group CBT isn't available, or you don't feel it suits you, individual CBT focused on eating disorders can be offered instead. The treatments are similar.",
        ],
      },
      {
        heading: "What you'll work on",
        paragraphs: [
          "A therapist will help you explore patterns of thoughts, feelings and behaviours that could be contributing to your eating disorder. They will help you plan regular meals and snacks across the day, and work out what triggers your binge eating.",
          "CBT also helps you change and manage negative feelings about your body, and stick to your new eating habits so you do not relapse into binge eating.",
        ],
      },
      {
        heading: "Weight is not the target",
        paragraphs: [
          "The therapy is not designed to help you gain or lose weight. If you need to reach a healthy weight, this should be a longer-term part of your recovery, discussed with your practitioner.",
          "You should not try to diet while you're having treatment, because this can make it more difficult to stop binge eating.",
        ],
      },
      {
        heading: "Other therapies",
        paragraphs: [
          "In Scotland, guidelines recommend CBT or interpersonal psychotherapy as first-line therapies for adults. Interpersonal therapy explores the link between relationships, feelings and eating behaviours.",
          "No two people are the same. If a treatment isn't helping, let the people managing your care know: this gives them useful information, and isn't criticising them.",
        ],
      },
    ],
    helps: [
      "If group CBT doesn't feel right for you, tell your team; individual CBT may be offered.",
      "Practise what you learn between sessions; this is important for CBT to work.",
      "Try not to diet during treatment.",
      "Keep using your skills after CBT ends; your therapist will usually help you plan this.",
      "If a treatment isn't helping, tell the people managing your care.",
    ],
    tryThisWeek: [
      "Practise between sessions.",
      "Avoid dieting during treatment.",
      "Tell your team what isn't working.",
    ],
    ask: "Will my CBT be in a group or one-to-one, and how long will it last?",
    interactive: {
      kind: "flip-cards",
      title: "Therapies, card by card",
      intro: "Turn each card to see when it's used and what it involves.",
      cards: [
        { id: "group", front: "Group CBT", when: "If guided self-help isn't enough", back: "Group sessions of about 90 minutes on planning meals, working out triggers and feelings about your body." },
        { id: "individual", front: "Individual CBT", when: "If group CBT isn't available", back: "One-to-one sessions with a therapist. The treatment is similar to group CBT." },
        { id: "relapse", front: "Relapse prevention", when: "Part of CBT", back: "Helping you stick to your new eating habits, so you do not relapse into binge eating." },
        { id: "ipt", front: "Interpersonal therapy", when: "A first-line therapy in Scotland", back: "Explores the link between relationships, feelings and eating behaviours." },
        { id: "fbt", front: "Family based treatment", when: "Children and young people", back: "Involves the whole family. Parents and carers are members of the treatment team." },
      ],
    },
    sources: [NHS_BED_TREAT, NICE_BED, BEAT_BED_TREAT, NHS_CBT, NHSI_BED, BEAT_GLOSSARY],
    quiz: {
      question: "Is weight loss the aim of CBT for binge eating disorder?",
      options: [{ text: "No, it isn't designed to change your weight", right: true }, { text: "Yes, it's a weight loss programme" }, { text: "Only in group sessions" }],
      why: "The therapy is not designed to help you gain or lose weight.",
    },
  },
  {
    id: "bed-regular-eating",
    kicker: "Everyday steps",
    question: "Why does regular eating matter, and how do I start?",
    hook: "Hunger can set off a binge. Planned, regular meals and snacks are one of the most important steps in treatment, even when they feel scary.",
    short: "Regular eating is a vital part of treating binge eating disorder, because it removes the extreme hunger that can lead to a binge. Treatment helps you plan meals and snacks, keep an honest record of your eating and feelings, and challenge strict food rules. Dieting during treatment can make it harder to stop binge eating.",
    sections: [
      {
        heading: "Why regular eating matters",
        paragraphs: [
          "While restrictive dieting can increase urges to binge, establishing a pattern of regular eating is vital to the treatment of binge eating.",
          "Eating regularly helps to break the starve and binge cycle. Removing the extreme hunger which can lead to a binge is the first step to reducing bingeing.",
          "This can feel scary, especially if you've followed eating rules or diets for a long time.",
        ],
      },
      {
        heading: "A structure for the day",
        paragraphs: [
          "In treatment, a therapist will help you plan the meals and snacks you should have during the day, to help you adopt regular eating habits. Specialist guidance advises eating regular meals and snacks to avoid feeling hungry.",
          "Try to plan ahead so that you don't skip any meals or snacks, as long gaps make a binge more likely. Eating patterns are different for everyone, but structure and variety are essential parts of eating for everyone.",
          "There will be days when things don't go as you hoped. It's important not to give up, and to get back to planned eating as soon as you can.",
        ],
      },
      {
        heading: "Keeping a record",
        paragraphs: [
          "Self-monitoring means recording your eating each day, with where you were, what you were doing and your thoughts and feelings at the time. It doesn't involve counting calories or measuring food.",
          "Seeing it written down can feel uncomfortable at first, and it's normal to feel guilt or shame. Recording honestly is the first step to improving your eating habits, and it helps you notice the situations, thoughts and feelings that keep binge eating going.",
        ],
      },
      {
        heading: "Shopping, meals and eating out",
        paragraphs: [
          "Planning meals in advance, making a shopping list and avoiding shopping when you're hungry can help. Some people find shopping online, or with a friend or family member, makes it easier.",
          "At mealtimes, it can help to have everything you need ready, keep conversation neutral, and plan distractions or support for the meals you find hardest.",
          "Evening times are often the most vulnerable time for people who binge eat. Family or friends can ask what would help at those times.",
        ],
      },
      {
        heading: "Rules about food",
        paragraphs: [
          "Strict rules about food can make a binge more likely, as disappointment about breaking a rule can push people towards bingeing. It can help to ask where a rule came from, and whether it is working for you now.",
          "Weight is unlikely to change during therapy, because it is not designed to help you gain or lose weight. Trying to diet during treatment can make it harder to stop binge eating.",
        ],
      },
    ],
    helps: [
      "Plan regular meals and snacks ahead, so you don't skip any.",
      "If a day doesn't go to plan, get back to planned eating as soon as you can.",
      "Keep an honest record of your eating, thoughts and feelings.",
      "Make a shopping list, and avoid shopping when you're hungry.",
      "Plan distractions or support for the mealtimes you find hardest.",
      "Avoid dieting during treatment.",
    ],
    tryThisWeek: [
      "Plan meals and snacks ahead.",
      "Keep an honest record.",
      "Shop with a list.",
    ],
    ask: "Can you help me plan regular meals and snacks that work for my day?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "skip",
          situation: "You're busy and tempted to skip a planned meal.",
          options: [{ text: "Stick to your planned meal", best: true }, { text: "Skip it and eat later" }],
          why: "Try to plan ahead so that you don't skip any meals or snacks, as long gaps make a binge more likely.",
        },
        {
          id: "slip",
          situation: "A day hasn't gone as you hoped.",
          options: [{ text: "Get back to planned eating", best: true }, { text: "Give up on the plan" }],
          why: "It's important not to give up, and to get back to planned eating as soon as you can.",
        },
        {
          id: "shop",
          situation: "You're about to go food shopping while hungry, with no list.",
          options: [{ text: "Go when you're not hungry, with a list", best: true }, { text: "Go now and see what you fancy" }],
          why: "Planning meals in advance, making a shopping list and avoiding shopping when you're hungry can help.",
        },
        {
          id: "record",
          situation: "You feel embarrassed writing down what you ate.",
          options: [{ text: "Record it honestly anyway", best: true }, { text: "Leave it out" }],
          why: "It's normal to feel guilt or shame. Recording honestly is the first step to improving your eating habits.",
        },
        {
          id: "diet",
          situation: "You're thinking of starting a diet during treatment.",
          options: [{ text: "Hold off dieting during treatment", best: true }, { text: "Start the diet now" }],
          why: "Trying to diet during treatment can make it harder to stop binge eating.",
        },
      ],
    },
    sources: [BEAT_BED_TREAT, NHSI_SELFHELP, NHS_BED_TREAT, NICE_RECS, BEAT_TIPS, NICE_BED],
    quiz: {
      question: "Why does regular eating help with binge eating?",
      options: [{ text: "It removes the extreme hunger that can lead to a binge", right: true }, { text: "It helps you lose weight fast" }, { text: "It means you never think about food" }],
      why: "Removing the extreme hunger which can lead to a binge is the first step to reducing bingeing.",
    },
  },
  {
    id: "bed-medicines",
    kicker: "Medicines",
    question: "Are medicines used for binge eating disorder?",
    hook: "Talking therapy comes first. Medicine is not a treatment on its own, but an antidepressant may help with other conditions alongside therapy.",
    short: "Medicine should not be offered as the only treatment for binge eating disorder. An antidepressant may be offered alongside therapy or self-help to help with other conditions, such as anxiety or depression. Antidepressants take a few weeks to work, and should never be stopped suddenly without talking to your doctor.",
    sections: [
      {
        heading: "Not the main treatment",
        paragraphs: [
          "Medicine should not be offered as the only treatment for binge eating disorder. Treatment usually centres on talking therapy, with guided self-help or CBT.",
          "NHS inform says medication is not recommended to treat binge eating disorder, but may be prescribed to treat other health conditions you might have alongside it.",
        ],
      },
      {
        heading: "When an antidepressant might be offered",
        paragraphs: [
          "You may be offered an antidepressant in combination with therapy or self-help, to help you manage other conditions such as anxiety or depression, social phobia, or obsessive compulsive disorder (OCD).",
          "Antidepressants are rarely prescribed for children or young people under 18.",
          "If you have another condition, your doctor should help you decide whether you need treatment for it before your eating disorder, or at the same time.",
        ],
      },
      {
        heading: "Starting an antidepressant",
        paragraphs: [
          "Antidepressants usually take 1 to 2 weeks to start having an effect, and can take up to 8 weeks to work fully. When you first start, you will be seen by a doctor every 1 to 2 weeks.",
          "Like all medicines, they can cause side effects, and many ease after a couple of weeks. Talk to your doctor if you're finding side effects hard to manage, or feel your medicine isn't helping.",
          "It's not common, but some people may have suicidal thoughts or an urge to self-harm when they start an antidepressant. Speak to your doctor straight away if this happens.",
        ],
      },
      {
        heading: "Stopping safely",
        paragraphs: [
          "Do not stop taking an antidepressant suddenly or without talking to your doctor first. Coming off can cause withdrawal symptoms, so your doctor will help you agree a plan to reduce your dose gradually.",
          "If you see different professionals, it's important they stay in touch, because the eating disorder could affect other treatments you are having.",
        ],
      },
    ],
    helps: [
      "Remember medicine should not be your only treatment; ask about guided self-help or CBT.",
      "Tell your doctor about other conditions, such as anxiety or depression.",
      "Talk to your doctor if side effects are hard to manage.",
      "Speak to your doctor straight away if you have suicidal thoughts after starting an antidepressant.",
      "Do not stop an antidepressant suddenly or without talking to your doctor first.",
      "Report suspected side effects using the Yellow Card scheme.",
    ],
    tryThisWeek: [
      "Ask about talking therapy.",
      "Tell your doctor about side effects.",
      "Don't stop medicine suddenly.",
    ],
    ask: "Would an antidepressant help with my other symptoms, alongside therapy?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines, card by card",
      intro: "Turn each card to see when it applies and what to know.",
      cards: [
        { id: "alone", front: "Medicine on its own", when: "Not recommended", back: "Medicine should not be the only treatment for binge eating disorder. Talking therapy comes first." },
        { id: "antidepressant", front: "Antidepressants", when: "Alongside therapy or self-help", back: "May help with other conditions, such as anxiety, depression, social phobia or OCD." },
        { id: "first-weeks", front: "The first weeks", when: "Seen every 1 to 2 weeks", back: "They take 1 to 2 weeks to start having an effect, and up to 8 weeks to work fully." },
        { id: "side-effects", front: "Side effects", when: "Many ease after a couple of weeks", back: "Talk to your doctor if they're hard to manage. You can report them with the Yellow Card scheme." },
        { id: "stopping", front: "Coming off", when: "Only with your doctor", back: "Don't stop suddenly. Your doctor will help you reduce your dose gradually, to help with withdrawal symptoms." },
      ],
    },
    sources: [NHS_BED_TREAT, NICE_RECS, NICE_NEXT, NHSI_BED, NHS_ANTIDEPRESSANTS, NICE_OTHER],
    quiz: {
      question: "Should medicine be the only treatment for binge eating disorder?",
      options: [{ text: "No, it should not be offered on its own", right: true }, { text: "Yes, tablets are the main treatment" }, { text: "Only for adults over 60" }],
      why: "Medicine should not be offered as the only treatment for binge eating disorder.",
    },
  },
  {
    id: "bed-feelings",
    kicker: "Living well",
    question: "How can I cope with the feelings and stress behind binges?",
    hook: "Binges are often about feelings. Getting to know your triggers, and having a plan for the hardest moments, can loosen their hold.",
    short: "Difficult feelings, such as feeling low, bored, angry or anxious, can set off an urge to binge. Keeping a record helps you spot patterns, and planned activities, urge surfing and a relapse prevention plan can help. If you need urgent help, call 111 and select the mental health option, or call Samaritans on 116 123.",
    sections: [
      {
        heading: "What can set off a binge",
        paragraphs: [
          "Lots of things can make someone feel the urge to binge eat. These include difficult or overwhelming feelings, such as feeling low, bored, angry, upset or anxious, and some people binge eat when they feel happy or excited too.",
          "Sometimes binges are more habitual or planned, for example to numb emotions, or because someone is alone. For some people, the reasons are not so clear.",
        ],
      },
      {
        heading: "Getting to know your triggers",
        paragraphs: [
          "Keeping a record can show patterns, such as whether binges happen more in the evening, after contact with certain people, or after looking at certain social media.",
          "When you notice an emotion that can lead to a binge, name it. Most emotions are temporary, and you can then think about ways to look after yourself when you feel like this, such as talking to a friend.",
        ],
      },
      {
        heading: "Riding out an urge",
        paragraphs: [
          "Planning activities for the times you find hardest, like being alone in the evening, can reduce the chances to binge. The best activities are active, enjoyable and realistic, such as going for a walk, a creative hobby or calling someone who understands.",
          "Urge surfing means sitting with the urge and the feelings until they begin to ease, a bit like riding a wave. Often the feeling gets stronger, then less intense, and over time you may be able to delay a binge and do something else instead.",
        ],
      },
      {
        heading: "Stress and setbacks",
        paragraphs: [
          "Too much stress can affect mood and self-esteem, and can change how much we eat. Talking to someone, breaking tasks into smaller steps and being more active can help.",
          "During stressful times, the urge to binge may feel stronger. Setbacks are a common part of recovery, and a relapse does not equal failure.",
          "A relapse prevention plan can help you spot early warning signs and plan what to do, including who you can contact.",
        ],
      },
      {
        heading: "If you feel overwhelmed",
        paragraphs: [
          "If you are struggling, talking and expressing your feelings, with someone you trust or in a diary, can help. You don't have to pretend you are fine.",
          "If you need urgent help for your mental health, get help from 111 online or call 111 and select the mental health option. You can call Samaritans free on 116 123, any time, or text SHOUT to 85258.",
          "Call 999 or go to A&E if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. You will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Notice which feelings come before a binge, and name them.",
      "Plan an active, enjoyable activity for the times you find hardest.",
      "Try urge surfing: sit with the urge and notice it ease.",
      "Make a relapse prevention plan, with your team if you have one.",
      "For urgent help, call 111 and select the mental health option.",
      "Call Samaritans free on 116 123, or text SHOUT to 85258.",
    ],
    tryThisWeek: [
      "Name the feeling first.",
      "Plan an activity for hard times.",
      "Try urge surfing.",
    ],
    ask: "Can you help me make a plan for the times when the urge to binge is strongest?",
    interactive: {
      kind: "risk-check",
      title: "What can set off an urge?",
      intro: "Tick any that sound familiar. Each one says what can help.",
      items: [
        { id: "low", label: "Feeling low or upset", note: "Name the feeling, then think about what would help, such as talking to a friend.", changeable: true },
        { id: "bored", label: "Boredom", note: "Plan an activity that's active, enjoyable and realistic.", changeable: true },
        { id: "stress", label: "Anxiety or stress", note: "Talking to someone, and breaking tasks into smaller steps, can help with stress.", changeable: true },
        { id: "alone", label: "Being alone in the evening", note: "Plan activities, or time with others, around the times you find hardest.", changeable: true },
        { id: "people", label: "Contact with certain people", note: "Keeping a record can show whether binges follow contact with certain people.", changeable: true },
        { id: "social", label: "Some social media", note: "A record can show whether binges follow certain content.", changeable: true },
      ],
    },
    sources: [BEAT_BED, NHSI_SELFHELP, EMM_STRESS, BEAT_RELAPSE, BEAT_RECOVERY, NHS_URGENT, NHS_SUICIDAL, SAM_CONTACT],
    quiz: {
      question: "What is urge surfing?",
      options: [{ text: "Sitting with an urge until it begins to ease", right: true }, { text: "Giving in to the urge quickly" }, { text: "Ignoring all your feelings" }],
      why: "Urge surfing means sitting with the urge and the feelings until they begin to ease, a bit like riding a wave.",
    },
  },
  {
    id: "bed-body-image",
    kicker: "Body image",
    question: "How do body image and weight stigma affect binge eating?",
    hook: "How you feel about your body, and how others judge it, can feed binge eating. You deserve help and respect, whatever your weight.",
    short: "Focusing a lot on shape and weight can make you feel bad about yourself and more likely to binge. CBT helps with negative feelings about your body, and treatment should not focus on weight loss. Weight stigma can make people feel they don't deserve help, but anyone of any weight can have an eating disorder and deserves treatment.",
    sections: [
      {
        heading: "What body image is",
        paragraphs: [
          "Body image is the way you think about, feel and see your body. It is shaped by things like genetics, families, culture, peers and media, and can be positive, negative or neutral.",
          "When you focus a lot on shape and weight, you can feel bad about yourself, and you may be more likely to binge as a way of managing those uncomfortable feelings.",
        ],
      },
      {
        heading: "Part of treatment",
        paragraphs: [
          "CBT for binge eating disorder includes helping you change and manage negative feelings about your body.",
          "Weight loss should not be the focus of treatment. Treatment should aim to reduce how often binges happen, tackle thoughts related to bingeing and improve mood.",
        ],
      },
      {
        heading: "Weight stigma",
        paragraphs: [
          "Weight stigma is when people assign labels to others based on their weight. It often stems from the belief that weight is down to personal choice.",
          "It can make it harder for people to get the healthcare they need, and can lead to self-stigma, where people feel they don't deserve help.",
          "Beat has campaigned against public health messages that shame people about weight, saying they increase stigma and put people with eating disorders at risk.",
        ],
      },
      {
        heading: "You deserve help",
        paragraphs: [
          "Whether you have an eating disorder does not depend on your weight. Anyone of any weight can have one, so please don't let misconceptions make you think you don't deserve help.",
          "If stigma is stopping you doing things that matter to you, you may need support to advocate for yourself. You have a right to good quality treatment.",
        ],
      },
      {
        heading: "People, media and you",
        paragraphs: [
          "Spending more time with people who leave you feeling positive can help. If someone often comments on your shape or weight, another family member may be able to help challenge this, or steer the conversation elsewhere.",
          "On social media, try to notice which content leaves you feeling more self-critical. You could follow accounts that make you laugh, reduce content about weight, shape or diet, mute or hide posts, or limit your time on social media.",
        ],
      },
    ],
    helps: [
      "Notice which people and content leave you feeling better or worse.",
      "Reduce content about weight, shape or diet on your phone or devices.",
      "Ask someone you trust to help steer conversations away from your shape or weight.",
      "Remember you deserve help, whatever your weight.",
      "Tell your team if body image feels hard; CBT can help with negative feelings about your body.",
      "If someone says something unhelpful, it's okay to tell them what you do and don't find helpful.",
    ],
    tryThisWeek: [
      "Notice what leaves you feeling worse.",
      "Cut back weight and diet content.",
      "Remind yourself you deserve help.",
    ],
    ask: "Can my treatment include help with how I feel about my body?",
    interactive: {
      kind: "scenarios",
      title: "Moments that knock your confidence",
      scenarios: [
        {
          id: "scroll",
          situation: "You've been scrolling and feel worse about yourself.",
          options: [{ text: "Mute or hide posts that affect you", best: true }, { text: "Keep scrolling" }],
          why: "Try to notice which content leaves you feeling more self-critical. You could reduce content about weight, shape or diet, or mute or hide posts.",
        },
        {
          id: "comment",
          situation: "A relative keeps commenting on your shape.",
          options: [{ text: "Ask someone to help steer the conversation", best: true }, { text: "Say nothing and keep it in" }],
          why: "If someone often comments on your shape or weight, another family member may be able to help challenge this, or steer the conversation elsewhere.",
        },
        {
          id: "deserve",
          situation: "You feel you don't deserve help because of your weight.",
          options: [{ text: "Anyone of any weight deserves help", best: true }, { text: "Wait until your weight changes" }],
          why: "Anyone of any weight can have one, so please don't let misconceptions make you think you don't deserve help.",
        },
        {
          id: "focus",
          situation: "A professional talks only about weight loss.",
          options: [{ text: "Remember weight loss isn't the focus", best: true }, { text: "Assume weight is all that matters" }],
          why: "Weight loss should not be the focus of treatment. Treatment should aim to reduce how often binges happen, tackle thoughts related to bingeing and improve mood.",
        },
        {
          id: "friend",
          situation: "A friend says something well meant but unhelpful.",
          options: [{ text: "Tell them what you do find helpful", best: true }, { text: "Stop talking to them about it" }],
          why: "It's okay to let them know what you do and don't find helpful.",
        },
      ],
    },
    sources: [NHSI_SELFHELP, BEAT_BED_TREAT, NICE_BED, BEAT_SHAMING, NHS_BED_TREAT, BEAT_TELL],
    quiz: {
      question: "What should treatment for binge eating disorder aim to do?",
      options: [{ text: "Reduce binges, tackle thoughts about bingeing and improve mood", right: true }, { text: "Mainly bring about weight loss" }, { text: "Change how you look" }],
      why: "Weight loss should not be the focus of treatment. Treatment should aim to reduce how often binges happen, tackle thoughts related to bingeing and improve mood.",
    },
  },
  {
    id: "bed-family",
    kicker: "Family and friends",
    question: "How can I support someone with binge eating disorder?",
    hook: "Kindness, patience and the right words make a real difference. So does looking after yourself.",
    short: "Let the person know you're worried, encourage them to see a GP and offer to go with them. Ask how they are feeling rather than about food or weight, and acknowledge how distressing it is without trivialising it. Supporting someone is hard, so look after yourself too, and Beat's services are there for you.",
    sections: [
      {
        heading: "Raising your worry",
        paragraphs: [
          "If you're concerned that someone may have binge eating disorder, let them know you're worried about them and encourage them to see a GP. You could offer to go along with them.",
          "Choose a private place and a calm time, away from meals. Try not to centre the conversation on food or weight: eating disorders are about what the person is feeling.",
          "They may deny it or react defensively. Reassure them you'll be there when they're ready, and don't wait too long before approaching them again.",
        ],
      },
      {
        heading: "Words that help",
        paragraphs: [
          "Asking how the person is feeling, rather than asking about eating or weight changes, is often more productive. Avoid discussing weight, shape, food and diets in front of them.",
          "Comments like \"You just need to stop eating so much\" can make binge eating sound easy to stop. Instead, acknowledge how difficult and distressing things are, and let them know you are there to support them.",
          "Many people overeat on occasion, but this is not the same as binge eating disorder. It is good to be understanding, but important not to trivialise what the person is going through.",
        ],
      },
      {
        heading: "Practical support",
        paragraphs: [
          "Ask what you can do to help, such as supporting regular eating or having a space to talk about how they're feeling. Evening times are often the most vulnerable for people who binge eat, so ask what would help then.",
          "Some people who binge eat find supermarkets hard. Writing a list and shopping together, or shopping online, can help.",
          "Keep inviting them to things, and think of social events that don't revolve around food. Even if they don't join in, they will still like to be asked.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Recognise that you are not to blame. Supporting someone can feel overwhelming and exhausting, and taking time to rest isn't selfish: it strengthens your ability to be there for them.",
          "You should be asked what help and support you need while the person you care for has treatment. You can also speak to their care team about a carer's assessment.",
          "Beat's Helpline is there for anyone affected, including family and friends, and its free online hub offers courses, workshops and forums for people supporting someone.",
        ],
      },
    ],
    helps: [
      "Let them know you're worried, and offer to go to the GP with them.",
      "Ask how they are feeling, rather than about food or weight.",
      "Acknowledge how hard things are, without trivialising it.",
      "Ask what would help in the evenings, or at other difficult times.",
      "Keep inviting them to things that don't revolve around food.",
      "Look after yourself, and contact Beat's Helpline or hub for support.",
    ],
    tryThisWeek: [
      "Ask how they are feeling.",
      "Invite them to something.",
      "Look after yourself.",
    ],
    ask: "What support is there for me as a carer, and can I have a carer's assessment?",
    interactive: {
      kind: "flip-cards",
      title: "Words that help",
      intro: "Turn each card to see how a well-meant comment may land, and what to say instead.",
      cards: [
        { id: "normal", front: "\"Just eat normally.\"", when: "Can sound like it's their fault", back: "Eating disorders are not a choice. Say you know it's difficult for them, and that you're there to support them." },
        { id: "stop", front: "\"You just need to stop eating so much.\"", when: "Can make it sound easy to stop", back: "Acknowledge how difficult and distressing things are, and let them know you're there to support them." },
        { id: "same", front: "Saying everyone overeats", when: "Can trivialise what they're facing", back: "Overeating now and then is not the same as binge eating disorder. Be understanding, without trivialising it." },
        { id: "well", front: "\"You look well.\"", when: "Can be heard as a comment on weight", back: "Ask how they are, or compliment something unrelated to their body." },
        { id: "soon", front: "\"Get well soon.\"", when: "Can feel like pressure to hurry", back: "Reassure them you'll be there throughout, and tell them how proud you are of them for challenging the illness." },
      ],
    },
    sources: [NHS_BED, BEAT_FRIEND, BEAT_TIPS, NHS_HELP_SOMEONE, BEAT_CARERSELF, BEAT_CARERS, NICE_CARERS, RETHINK, BEAT_HUB],
    quiz: {
      question: "What is often more helpful to ask about?",
      options: [{ text: "How the person is feeling", right: true }, { text: "What they have eaten" }, { text: "Whether their weight has changed" }],
      why: "Asking how the person is feeling, rather than asking about eating or weight changes, is often more productive.",
    },
  },
  {
    id: "bed-support",
    kicker: "Support",
    question: "Where can I find support for binge eating disorder?",
    hook: "You don't need a diagnosis to get support. Beat's Helpline, webchat and a weekly online group for binge eating are there for you and the people around you.",
    short: "Beat's free, confidential Helpline is for anyone affected by an eating disorder, including family and friends. In England, call 0808 801 0677, 3pm to 8pm, Monday to Friday, or use webchat or email. Beat also runs a Binge Eating Online Support Group. Beat is not a crisis service: in an emergency, call 999 or Samaritans on 116 123.",
    sections: [
      {
        heading: "Beat's Helpline",
        paragraphs: [
          "Beat's Helpline is for anyone affected by an eating disorder, of any age and wherever they are in their journey. You don't need a formal diagnosis, and calls are free from UK landlines and mobiles and don't appear on itemised bills.",
          "The phone lines are open 3pm to 8pm, Monday to Friday. In England, call 0808 801 0677. In Scotland, call 0808 801 0432. In Wales, call 0808 801 0433. In Northern Ireland, call 0808 801 0434.",
          "Calls are limited to 30 minutes so advisers can support as many people as possible. If you can't get through, try again, or use the one-to-one webchat or email.",
        ],
      },
      {
        heading: "Webchat, email and groups",
        paragraphs: [
          "You can talk one-to-one with a trained Helpline adviser by webchat. Beat aims to reply to emails in 2 working days, but at busy times webchat may be quicker.",
          "Beat runs a Binge Eating Online Support Group on Friday evenings. It is moderated, anonymous and chat-based, for anyone who has or thinks they may have binge eating disorder, and no diagnosis is needed.",
        ],
      },
      {
        heading: "Finding help near you",
        paragraphs: [
          "Beat's HelpFinder lets you search for support and treatment services in your area. Self-help and support groups can help people with eating disorders and their families through treatment and in staying well.",
          "If you are struggling to get the treatment you need, Beat's advocacy pages and services can help you understand what you are entitled to and challenge decisions.",
        ],
      },
      {
        heading: "For family and friends",
        paragraphs: [
          "Beat's services are also for anyone supporting someone with an eating disorder. They include telephone coaching for family members, and Beat is developing a course for people caring for someone with binge eating disorder.",
        ],
      },
      {
        heading: "Not a crisis service",
        paragraphs: [
          "Beat does not run a crisis service, and its advisers are not medically trained. If you or someone else is in immediate danger, contact 999 or Samaritans on 116 123.",
          "If you need urgent help for your mental health but it's not an emergency, get help from 111 online or call 111 and select the mental health option. If you'd rather not talk on the phone, you can text SHOUT to 85258, 24 hours a day.",
        ],
      },
    ],
    helps: [
      "Call the Beat Helpline on 0808 801 0677 in England, 3pm to 8pm, Monday to Friday.",
      "Use the one-to-one webchat if you need a quicker reply than email.",
      "Join Beat's Binge Eating Online Support Group; no diagnosis is needed.",
      "Search HelpFinder for support and treatment services near you.",
      "If you're struggling to get treatment, look at Beat's advocacy support.",
      "If anyone is in immediate danger, call 999 or Samaritans on 116 123.",
    ],
    tryThisWeek: [
      "Call the Beat Helpline.",
      "Try the online group.",
      "Search HelpFinder.",
    ],
    ask: "Is there a support group near me, for me or for my family?",
    interactive: {
      kind: "flip-cards",
      title: "Support, card by card",
      intro: "Turn each card to see when to use it and what it offers.",
      cards: [
        { id: "phone", front: "Beat Helpline", when: "3pm to 8pm, Monday to Friday", back: "Free from UK landlines and mobiles. England 0808 801 0677; Scotland, Wales and Northern Ireland have their own numbers." },
        { id: "webchat", front: "One-to-one webchat", when: "If you'd rather type", back: "A secure chat with a trained adviser. Often quicker than email at busy times." },
        { id: "group", front: "Binge Eating Online Support Group", when: "Fridays, 6:45pm to 7:45pm", back: "Moderated, anonymous and chat-based. For anyone who has, or thinks they may have, binge eating disorder." },
        { id: "helpfinder", front: "HelpFinder", when: "To find local services", back: "Search for support and treatment services in your area." },
        { id: "advocacy", front: "Advocacy support", when: "If you're struggling to get care", back: "Helps you understand the support you're entitled to, and challenge decisions about your care." },
        { id: "carers", front: "Support for carers", when: "If you support someone", back: "Beat's Helpline, telephone coaching for family members, and the hub for families and friends." },
        { id: "crisis", front: "999 or Samaritans", when: "Immediate danger", back: "Beat is not a crisis service. Call 999, or Samaritans free on 116 123." },
      ],
    },
    sources: [BEAT_SUPPORTNOW, BEAT_GROUPS, BEAT_ONLINE, BEAT_BED_TREAT, BEAT_STRUGGLING, BEAT_CARERS, NHS_URGENT, NHS_SUICIDAL, SAM_CONTACT, EMM_URGENT],
    quiz: {
      question: "Do you need a diagnosis to join Beat's online support groups?",
      options: [{ text: "No, no diagnosis is needed", right: true }, { text: "Yes, a formal diagnosis" }, { text: "Only with a GP letter" }],
      why: "It is moderated, anonymous and chat-based, for anyone who has or thinks they may have binge eating disorder, and no diagnosis is needed.",
    },
  },
];
