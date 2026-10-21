import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Sleep problems page's pieces (content/library-conditions/cancer-mind-digestion.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS
// (including Every Mind Matters and the medicine pages), the Royal College of Psychiatrists' "Sleeping
// well" guide, The Sleep Charity, NICE's guidance on Sleepio and Arthritis UK. The worry answer follows
// safe-messaging guidance and gives the crisis routes exactly as the NHS pages state them. General
// information only; it never replaces what a person's own GP, nurse or care team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const sc = (label: string, path: string): LearnSource => ({ label: `The Sleep Charity: ${label}`, url: `https://thesleepcharity.org.uk/adults/${path}` });
const nice = (label: string, path: string): LearnSource => ({ label: `NICE: ${label}`, url: `https://www.nice.org.uk/guidance/${path}` });

const NHS_INSOMNIA = nhs("Insomnia", "conditions/insomnia/");
const NHS_APNOEA = nhs("Sleep apnoea", "conditions/sleep-apnoea/");
const NHS_RLS = nhs("Restless legs syndrome", "conditions/restless-legs-syndrome/");
const NHS_SNORING = nhs("Snoring", "symptoms/snoring/");
const NHS_ZOPICLONE = nhs("Zopiclone", "medicines/zopiclone/");
const NHS_MEL_ABOUT = nhs("About melatonin", "medicines/melatonin/about-melatonin/");
const NHS_MEL_HOW = nhs("How and when to take melatonin", "medicines/melatonin/how-and-when-to-take-melatonin/");
const NHS_MEL_QUESTIONS = nhs("Common questions about melatonin", "medicines/melatonin/common-questions-about-melatonin/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_MENO_SYMPTOMS = nhs("Symptoms of menopause and perimenopause", "conditions/menopause-and-perimenopause/symptoms/");
const NHS_PAIN = nhs("10 ways to reduce pain", "live-well/pain/10-ways-to-ease-pain/");
const NHS_BREATHING = nhs("Breathing exercises for stress", "mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/");

const EMM_SLEEP = emm("Sleep problems", "mental-health-issues/sleep/");
const EMM_FASTER = emm("How to fall asleep faster and sleep better", "mental-wellbeing-tips/how-to-fall-asleep-faster-and-sleep-better/");
const EMM_WORRY = emm("Tackling your worries", "mental-wellbeing-tips/self-help-cbt-techniques/tackling-your-worries/");
const EMM_URGENT = emm("Urgent support", "urgent-support/");

const RCPSYCH: LearnSource = { label: "Royal College of Psychiatrists: Sleeping well", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/sleeping-well" };

const SC_INSOMNIA = sc("Insomnia", "sleep-disorders/insomnia/");
const SC_APNOEA = sc("Sleep apnoea", "sleep-disorders/sleep-apnoea/");
const SC_RLS = sc("Restless leg syndrome", "sleep-disorders/restless-leg-syndrome/");
const SC_WHY = sc("Why do we sleep?", "why-do-we-sleep/");
const SC_PATTERNS = sc("Sleep patterns", "sleep-patterns/");
const SC_CIRCADIAN = sc("Circadian rhythms", "circadian-rhythms/");
const SC_MELATONIN = sc("Melatonin", "melatonin/");
const SC_HOW_MUCH = sc("How much sleep do we need?", "how-much-sleep-do-we-need/");
const SC_AGEING = sc("Ageing and sleep", "ageing-and-sleep/");
const SC_NAPPING = sc("Napping", "napping/");
const SC_BLUE_LIGHT = sc("Blue light and sleep", "blue-light-and-sleep/");
const SC_ENVIRONMENT = sc("Sleep environment", "sleep-environment/");
const SC_HYGIENE = sc("Sleep hygiene", "sleep-hygiene/");
const SC_MENTAL = sc("Mental health", "mental-health/");
const SC_MENOPAUSE = sc("Menopause and sleep", "menopause-and-sleep/");
const SC_STILL = sc("Still not sleeping?", "still-not-sleeping/");
const SC_FIVE = sc("The five principles of good sleep health", "the-five-principles-of-good-sleep-health/");
const SC_CANCER_ANXIETY = sc("Anxiety, stress and sleep during cancer", "sleep-and-cancer/anxiety-stress-and-sleep-during-cancer/");
const SC_CANCER_PARTNER = sc("Sleep and your partner or carer", "sleep-and-cancer/sleep-and-your-partner-or-carer/");
const SC_CANCER_PHYSICAL = sc("Uncomfortable physical symptoms", "sleep-and-cancer/uncomfortable-physical-symptoms/");
const SC_CANCER_MEDICINES = sc("Treatments and the effects of some medications", "sleep-and-cancer/treatments-the-effects-of-some-medications/");
const SC_CANCER_NAPPING = sc("Napping to support your sleep and energy", "sleep-and-cancer/napping-to-support-your-sleep-and-energy/");
const SC_HELPLINE: LearnSource = { label: "The Sleep Charity: National Sleep Helpline", url: "https://thesleepcharity.org.uk/national-sleep-helpline/" };

const NICE_SLEEPIO = nice("Sleepio to treat insomnia and insomnia symptoms (recommendations)", "htg624/chapter/1-Recommendations");
const NICE_SLEEPIO_TECH = nice("Sleepio to treat insomnia and insomnia symptoms (the technology)", "htg624/chapter/2-The-technology");

const AUK_SLEEP: LearnSource = { label: "Arthritis UK: Overcoming sleep problems with arthritis", url: "https://www.arthritis-uk.org/information-and-support/living-with-arthritis/health-and-wellbeing/sleep/" };

export const insomniaAnswers: LearnArticle[] = [
  {
    id: "ins-what-happens",
    kicker: "Understanding",
    question: "What happens when I sleep, and when I don't?",
    hook: "Sleep is not switching off. The body repairs, the brain sorts the day, and two forces, sleep pressure and the body clock, decide when it comes.",
    short: "Through the night you pass through light sleep, deep sleep and dreaming (REM) sleep, in cycles of about 90 minutes. When you fall asleep is set mainly by sleep pressure, which builds the longer you are awake, and your body clock, which follows light and dark. Waking a few times in the night is normal.",
    sections: [
      {
        heading: "Busy work, not down-time",
        paragraphs: [
          "We spend about a third of our lives asleep. No one fully understands why, but we know that we need to sleep well to stay physically and emotionally healthy.",
          "While we sleep, our bodies are busy working. This is when we grow, repair, clear out waste and make sense of everything that happened during the day. Our heart rate drops, our body temperature falls and our brain activity changes.",
        ],
      },
      {
        heading: "Two kinds of sleep",
        paragraphs: [
          "Rapid eye movement (REM) sleep comes and goes throughout the night and makes up about one fifth of your sleep time. During REM sleep your brain is very active, your muscles are very relaxed, your eyes move from side to side and you dream.",
          "During non-REM sleep, your body releases growth hormones and your brain clears out waste products that built up while you were awake. It has three stages: very light sleep, light sleep and deep sleep. Deep sleep is the hardest stage to wake from, and the most restorative.",
        ],
      },
      {
        heading: "Cycles through the night",
        paragraphs: [
          "In adults, sleep cycles last about 90 minutes each, so you have several each night. The Sleep Charity says a good night's sleep usually includes four to five full cycles.",
          "The first couple of cycles have a lot of deep sleep. The later cycles tend to have very little deep sleep and lots of light sleep, which is why sleep gets lighter towards the morning.",
          "When sleep is broken, we may go through fewer cycles. We then miss out on the deeper, more restorative stages, which can leave us feeling tired, foggy and unrefreshed the next day.",
        ],
      },
      {
        heading: "Sleep pressure and the body clock",
        paragraphs: [
          "Sleep is mainly controlled by two things: sleep pressure and your body clock, also called the circadian rhythm. Your body clock follows a 24-hour cycle and responds to changes around you, especially light and dark.",
          "As the day goes on, sleep pressure slowly builds. After around 15 hours of being awake, this pressure becomes strong and you start to feel tired.",
          "Melatonin, the hormone that tells your brain it is time to sleep, is made when it gets dark. Its levels rise in the evening, stay high through the night and fall again in the morning as daylight appears.",
        ],
      },
      {
        heading: "Waking in the night",
        paragraphs: [
          "Most people wake up a few times during the night, and this is quite normal. As long as you do not wake for long, and you do not feel tired in the day, it is nothing to worry about.",
          "The short periods you wake for can feel much longer than they really are. With age, people tend to wake more often and spend less time in deep sleep, so sleep can feel lighter.",
        ],
      },
    ],
    helps: [
      "Wake up at the same time each morning, even at weekends, to keep your body clock strong and steady.",
      "Get outside in the morning: a short walk in morning light can help reset your body clock.",
      "Dim the lights and avoid bright screens in the evening, as melatonin is released when it gets dark.",
      "Judge your sleep by how you feel in the day, rather than by the number of hours you sleep.",
      "Try not to worry about waking briefly in the night: most people do, and it is quite normal.",
    ],
    tryThisWeek: [
      "Wake at the same time every day.",
      "Take a short walk in morning light.",
      "Dim the lights in the evening.",
    ],
    ask: "Is my pattern of sleep and waking normal for my age?",
    interactive: {
      kind: "timeline",
      title: "One night, step by step",
      steps: [
        { id: "evening", when: "Evening", title: "Melatonin rises", points: ["Melatonin is made when it gets dark.", "Sleep pressure has been building all day."] },
        { id: "drop-off", when: "Falling asleep", title: "Very light sleep", points: ["Halfway between wakefulness and sleep.", "You may notice twitching or jerks."] },
        { id: "early", when: "First cycles", title: "Plenty of deep sleep", points: ["Deep sleep is the most restorative stage.", "It is the hardest stage to wake from."] },
        { id: "rem", when: "End of each cycle", title: "Dreaming (REM) sleep", points: ["The brain is very active and you dream.", "Each cycle lasts about 90 minutes."] },
        { id: "morning", when: "Towards morning", title: "Lighter sleep", points: ["Later cycles have little deep sleep.", "Melatonin falls as daylight appears."] },
      ],
    },
    sources: [RCPSYCH, SC_PATTERNS, SC_CIRCADIAN, SC_MELATONIN, SC_WHY, SC_AGEING],
    quiz: {
      question: "Roughly how long does one sleep cycle last in adults?",
      options: [{ text: "About 90 minutes", right: true }, { text: "About 10 minutes" }, { text: "About 4 hours" }],
      why: "In adults, sleep cycles last about 90 minutes each, so you have several each night.",
    },
  },
  {
    id: "ins-causes",
    kicker: "Causes",
    question: "Why can't I sleep?",
    hook: "Worry, pain, medicines, the menopause and everyday habits can all keep you awake, and worrying about sleep can keep it going.",
    short: "Insomnia means regularly finding it hard to get to sleep, stay asleep, or waking early and not getting back to sleep. The most common causes include stress, anxiety and depression. Long-term pain, other health conditions, some medicines, the menopause, and things like noise, caffeine and alcohol can all play a part.",
    sections: [
      {
        heading: "What counts as insomnia",
        paragraphs: [
          "You have insomnia if you regularly find it hard to go to sleep, wake up several times during the night, wake up early and cannot go back to sleep, or still feel tired after waking up. Insomnia that lasts less than 3 months is called short-term insomnia, and 3 months or longer is long-term insomnia.",
          "The Sleep Charity says short-term insomnia is thought to affect around one in every three people in the UK. Around 10 to 15 in every 100 people have long-term sleep difficulties, which are generally diagnosed when poor sleep happens at least three nights a week.",
        ],
      },
      {
        heading: "Worry, stress and mood",
        paragraphs: [
          "The most common causes include stress, anxiety and depression. Having difficulty sleeping can also make these feelings worse, because sleep and mental health are closely linked.",
          "Insomnia can be made worse by the way we think about it. You might start to sleep badly because you are stressed at work, then worry that you are not sleeping well. That worry can go on disturbing your sleep even when the stress has passed.",
        ],
      },
      {
        heading: "Pain and long-term conditions",
        paragraphs: [
          "Long-term pain can keep you from getting a good night's sleep. Many medical conditions can lead to insomnia too, such as allergies, gastrointestinal problems, arthritis, asthma and neurological conditions.",
          "The NHS also lists Alzheimer's disease, Parkinson's disease, restless legs syndrome and an overactive thyroid. If you have cancer, treatments for it might make it difficult for you to sleep.",
        ],
      },
      {
        heading: "Medicines and the menopause",
        paragraphs: [
          "Many medicines can cause insomnia, and stopping some medicines, such as antidepressants, can also disturb sleep. Steroids and hormone treatments used for cancer can affect the sleep-wake cycle.",
          "Women are more prone to insomnia because of hormonal changes during the menstrual cycle, pregnancy and the menopause. Sleep problems in the menopause may be worse if you also have night sweats, and the whole process can last between 2 and 10 years.",
        ],
      },
      {
        heading: "Habits and the bedroom",
        paragraphs: [
          "Other common causes are noise, a room that is too hot or cold, an uncomfortable bed, alcohol, caffeine or nicotine, jet lag and shift work. Not having a regular routine, not getting enough exercise and eating too close to bedtime can all make it harder to sleep.",
          "Alcohol can make you feel sleepy at first, but it can lead to poor sleep later in the night. A partner who snores or is a restless sleeper can keep you awake too.",
        ],
      },
    ],
    helps: [
      "Check the side effects in the leaflet in your medicine box, and speak to a GP or pharmacist if you think a medicine is affecting your sleep.",
      "Always speak to your healthcare team before making any changes to your medicines.",
      "Speak to your GP if you are finding it hard to stop thinking about your problems, or you are feeling very low or anxious.",
      "If you think you have symptoms of the menopause or perimenopause, contact your GP to find out your options.",
      "Do not smoke or drink alcohol, tea or coffee for at least 6 hours before going to bed.",
      "See a GP if changing your sleeping habits has not helped, or you have had trouble sleeping for months.",
    ],
    tryThisWeek: [
      "Check your medicine leaflets.",
      "No tea or coffee 6 hours before bed.",
      "See a GP if it has lasted months.",
    ],
    ask: "Could any of my medicines or health conditions be affecting my sleep?",
    interactive: {
      kind: "risk-check",
      title: "What might be keeping you awake?",
      intro: "Tick any that apply. Some you can change yourself, and some need help from your GP or care team.",
      items: [
        { id: "worry", label: "Stress, anxiety or low mood", note: "Among the most common causes. Speak to your GP if you are feeling very low or anxious.", changeable: true },
        { id: "pain", label: "Long-term pain", note: "Long-term pain is one of the things that can keep you from a good night's sleep.", changeable: false },
        { id: "medicines", label: "A medicine you take", note: "Check the leaflet and speak to a GP or pharmacist. Never change a medicine without your healthcare team.", changeable: false },
        { id: "menopause", label: "The menopause or night sweats", note: "Sleep problems may be worse with night sweats. Contact your GP to find out your options.", changeable: false },
        { id: "drinks", label: "Caffeine, alcohol or smoking late", note: "The NHS says to avoid them for at least 6 hours before going to bed.", changeable: true },
        { id: "room", label: "A noisy, hot or cold bedroom", note: "Noise, temperature and an uncomfortable bed are common causes you can often change.", changeable: true },
        { id: "shifts", label: "Shift work or jet lag", note: "Both can upset your body clock and sleep pattern.", changeable: false },
      ],
    },
    sources: [NHS_INSOMNIA, SC_INSOMNIA, RCPSYCH, EMM_SLEEP, SC_MENOPAUSE, NHS_MENO_SYMPTOMS, SC_CANCER_MEDICINES, SC_MENTAL],
    quiz: {
      question: "Which of these is among the most common causes of insomnia?",
      options: [{ text: "Stress, anxiety and depression", right: true }, { text: "Getting morning daylight" }, { text: "Exercising during the day" }],
      why: "The most common causes include stress, anxiety and depression.",
    },
  },
  {
    id: "ins-not-apnoea",
    kicker: "Other sleep problems",
    question: "Could it be sleep apnoea, restless legs or something else?",
    hook: "Some sleep problems have a physical cause. Snoring with pauses in breathing, or legs that will not keep still, are worth telling a GP about.",
    short: "Not every sleep problem is insomnia. In sleep apnoea, breathing stops and starts during sleep, often with loud snoring and tiredness in the day. Restless legs syndrome brings a strong urge to move the legs, usually when resting at night. Both can be treated, so see a GP if you notice the signs.",
    sections: [
      {
        heading: "When it is not insomnia",
        paragraphs: [
          "Some sleep disorders have a physical cause and can make you very sleepy in the day. A GP may refer you to a sleep clinic if you have symptoms of another sleep disorder, such as sleep apnoea.",
          "With insomnia, you might feel tired during the day but are unlikely to feel you might actually fall asleep. Some people describe it as feeling tired but wired.",
        ],
      },
      {
        heading: "Sleep apnoea",
        paragraphs: [
          "Sleep apnoea is when your breathing stops and starts while you sleep. The most common type is called obstructive sleep apnoea. Signs at night include gasping, snorting or choking noises, waking up a lot and loud snoring.",
          "During the day you may feel very tired, find it hard to concentrate, have mood swings or have a headache when you wake up. You are more likely to get it if you are older, overweight, a smoker or a heavy drinker.",
          "It can be hard to tell if you have sleep apnoea. It may help to ask someone to stay with you while you sleep so they can check for the symptoms.",
        ],
      },
      {
        heading: "Getting apnoea checked",
        paragraphs: [
          "A GP may refer you to a specialist sleep clinic. You may be given devices to wear overnight that check things like your breathing and heartbeat, and you can usually do this at home.",
          "Many people need a CPAP machine, which gently pumps air into a mask while you sleep, and it is free on the NHS if you need it. Without treatment, sleep apnoea can lead to problems including high blood pressure, a higher chance of a stroke and type 2 diabetes.",
          "Sleeping pills can make sleep apnoea worse. You may need to tell the DVLA about your sleep apnoea. If sleep apnoea with excessive sleepiness has been confirmed, the NHS says not to drive until symptoms like feeling very tired are under control.",
        ],
      },
      {
        heading: "Restless legs syndrome",
        paragraphs: [
          "Restless legs syndrome is a strong urge to move your legs, usually when resting at night. It can bring uncomfortable feelings such as tingling, throbbing or itching, and it usually improves when you move, stretch or walk.",
          "The Sleep Charity says around one in 10 people are affected at some point in their life, and women are twice as likely to get it as men. It can be linked to pregnancy, iron deficiency anaemia, kidney disease and some medicines.",
          "If another condition is causing it, treating that may help, such as iron supplements for low iron. Your doctor might also check what other medicines you take.",
        ],
      },
      {
        heading: "Other signs worth mentioning",
        paragraphs: [
          "The Sleep Charity suggests speaking to your doctor if you think you get enough sleep but still feel exhausted during the day, or you fall asleep unexpectedly, such as during conversations or meals.",
          "Other signs to mention are losing muscle control when laughing, acting out your dreams, moving or thrashing around a lot while sleeping, or your sleep changing after starting or changing a medicine.",
        ],
      },
    ],
    helps: [
      "See a GP if your breathing stops and starts while you sleep, you make gasping, snorting or choking noises, or you always feel very tired during the day.",
      "If someone else has seen you have the symptoms, bring them with you to the GP.",
      "Do not take sleeping pills unless a doctor recommends them, as they can make sleep apnoea worse.",
      "For restless legs, try walking, stretching or massaging your legs, and a warm bath or heat pads before bed.",
      "If you have restless legs, avoid caffeine after midday and alcohol for at least 2 hours before bed.",
      "See a GP if restless legs stop you sleeping, affect your mental health, or self-help has not worked.",
    ],
    tryThisWeek: [
      "Ask someone to check your sleep.",
      "Stretch or massage restless legs.",
      "No caffeine after midday.",
    ],
    ask: "Should I be checked for sleep apnoea or restless legs syndrome?",
    interactive: {
      kind: "signs",
      title: "Signs to tell the GP",
      intro: "Tick any you, or someone who sleeps near you, have noticed. They can point to a sleep problem that needs checking.",
      signs: ["Breathing that stops and starts in sleep", "Gasping, snorting or choking noises", "Loud snoring", "Feeling very tired every day", "A headache on waking", "A strong urge to move your legs at night", "Falling asleep unexpectedly", "Acting out dreams", "Sleep changed after a new medicine"],
      after: "Tell your GP. If someone has seen the symptoms, it can help to bring them with you.",
      copyHeading: "Sleep signs I have noticed",
    },
    sources: [NHS_APNOEA, NHS_RLS, RCPSYCH, SC_APNOEA, SC_RLS, NHS_SNORING, SC_STILL, NHS_INSOMNIA],
    quiz: {
      question: "What can make sleep apnoea worse?",
      options: [{ text: "Sleeping pills", right: true }, { text: "Sleeping on your side" }, { text: "Regular exercise" }],
      why: "Sleeping pills can make sleep apnoea worse.",
    },
  },
  {
    id: "ins-how-much",
    kicker: "How much",
    question: "How much sleep do I actually need?",
    hook: "Seven to nine hours is an average, not a rule. How you feel in the day says more than the number on the clock.",
    short: "On average, adults need 7 to 9 hours of sleep, but everyone needs different amounts. Judge your sleep by how you feel during the day: if you feel well, alert and rested on most days, you are getting enough for you. Regularly sleeping less than six hours and feeling drained is a reason to look at your sleep.",
    sections: [
      {
        heading: "An average, not a rule",
        paragraphs: [
          "Everyone needs different amounts of sleep. On average, adults need 7 to 9 hours, children need 9 to 13 hours, and toddlers and babies need 12 to 17 hours.",
          "The Royal College of Psychiatrists says the average adult needs around 7 or 8 hours, but this is just an average. Many people need more than 8 hours and many need less.",
        ],
      },
      {
        heading: "Judge it by the day",
        paragraphs: [
          "Judge your sleep by how you feel in the day rather than by the number of hours you sleep at night. If you feel well, alert and rested for most of the day, on most days, you are getting enough sleep for you.",
          "You may not be getting enough if you find it hard to wake up or start your day, feel very tired, irritable or sleepy during the day, or find it hard to focus. Nobody feels well, alert and rested all day, every day, and even good sleepers have tired times.",
        ],
      },
      {
        heading: "Your own sleep size",
        paragraphs: [
          "Professor Colin Espie compares sleep needs to shoe size: there are averages, but we do not all have the same size feet. He suggests experimenting to find your best sleep window, the time you need in bed to get enough sleep.",
          "If you sleep less than other people you know, but feel fine in the day, then you do not have insomnia. You are simply someone who needs less sleep.",
        ],
      },
      {
        heading: "Sleep and getting older",
        paragraphs: [
          "The amount of sleep you need changes with age. The Sleep Charity says it is a common myth that we need less sleep as we get older: our needs stay much the same, but sleep quality often declines.",
          "You may wake more often in the night, spend less time in deep sleep and lean towards earlier bedtimes and earlier waking. These changes are partly due to natural changes in the body clock and hormones.",
        ],
      },
      {
        heading: "When short sleep is a worry",
        paragraphs: [
          "The occasional night without sleep will make you feel tired the next day, but it will not affect your health. After several sleepless nights, you may feel tired all the time, find it hard to concentrate and start to feel low and anxious.",
          "Research shows that regularly sleeping less than six hours a night is linked to many health problems. If you often get under six hours and feel drained the next day, it may be time to look at your sleep habits and lifestyle.",
        ],
      },
    ],
    helps: [
      "Judge your sleep by how you feel during the day, not by the number of hours.",
      "Keep a regular sleep pattern, waking up at roughly the same time each day.",
      "Experiment to find how long you need to be in bed to get enough sleep: your own sleep window.",
      "If you often get under six hours and feel drained the next day, look at your sleep habits and lifestyle.",
      "Speak to your GP if you are getting far more or far less sleep than the recommended hours.",
      "Speak to your doctor if you think you get enough sleep but still feel exhausted during the day.",
    ],
    tryThisWeek: [
      "Judge sleep by how your day feels.",
      "Wake at the same time each day.",
      "Ask a GP if far off the usual hours.",
    ],
    ask: "Is the amount I sleep a problem, given how I feel during the day?",
    interactive: {
      kind: "scenarios",
      title: "Enough for you?",
      scenarios: [
        {
          id: "short-fine",
          situation: "You sleep about six hours but feel well and alert most days.",
          options: [{ text: "This may simply be enough for you", best: true }, { text: "It means you have insomnia" }],
          why: "If you sleep less than other people you know, but feel fine in the day, then you do not have insomnia.",
        },
        {
          id: "long-tired",
          situation: "You sleep eight hours but feel exhausted every day.",
          options: [{ text: "Mention it to your doctor", best: true }, { text: "Spend even longer in bed" }],
          why: "Speak to your doctor if you think you get enough sleep but still feel exhausted during the day.",
        },
        {
          id: "one-night",
          situation: "You had one bad night before a big day.",
          options: [{ text: "Carry on as usual", best: true }, { text: "Worry it has harmed your health" }],
          why: "The occasional night without sleep will make you feel tired the next day, but it will not affect your health.",
        },
        {
          id: "under-six",
          situation: "You often get under six hours and feel drained.",
          options: [{ text: "Look at your sleep habits", best: true }, { text: "Ignore it" }],
          why: "If you often get under six hours and feel drained the next day, it may be time to look at your sleep habits and lifestyle.",
        },
      ],
    },
    sources: [NHS_INSOMNIA, EMM_SLEEP, RCPSYCH, SC_HOW_MUCH, SC_AGEING, SC_FIVE, SC_STILL],
    quiz: {
      question: "What is the best way to judge whether you are getting enough sleep?",
      options: [{ text: "How you feel during the day", right: true }, { text: "Whether you reach exactly 8 hours" }, { text: "How quickly you fall asleep" }],
      why: "Judge your sleep by how you feel in the day rather than by the number of hours you sleep at night.",
    },
  },
  {
    id: "ins-cbt-i",
    kicker: "Treatment",
    question: "What is CBT for insomnia, and how do I get it?",
    hook: "The treatment recommended first for insomnia is not a tablet. It is a short course of CBT for insomnia, face to face or online.",
    short: "CBT for insomnia (CBT-I) uses psychological and behavioural techniques to help you sleep. It is recommended as the first-line treatment for insomnia. A GP may offer it face to face with a therapist or through an online self-help programme, such as Sleepio, which NICE recommends in primary care.",
    sections: [
      {
        heading: "The first treatment to try",
        paragraphs: [
          "The Sleep Charity says CBT for insomnia is recommended as the first-line treatment for people with insomnia. It can help control or eliminate the negative thoughts and actions that keep you awake.",
          "GPs now rarely prescribe sleeping pills to treat insomnia. Instead, they will try to find out what is causing it, and you may be offered CBT.",
        ],
      },
      {
        heading: "What it involves",
        paragraphs: [
          "There are two main parts to CBT-I. The cognitive part helps you manage the worries and anxieties related to your insomnia. The behavioural part looks at changing the habits you have developed in response to poor sleep.",
          "Methods include stimulus control, which keeps the bedroom for sleep, and sleep rescheduling or restriction, which limits the time spent in bed awake. Relaxation techniques and sleep hygiene are also part of it.",
          "It is simple to learn, though some of the techniques take a bit of work. You will usually be asked to practise what you have learned between sessions, and you may keep a diary.",
        ],
      },
      {
        heading: "Face to face, online or an app",
        paragraphs: [
          "CBT may be face to face with a therapist, or through an online self-help programme. On the NHS you will usually have between 5 and 15 sessions of CBT, one to one, in a group or as guided self-help, in person, online or on the phone.",
          "Sleepio is a digital self-help programme based on CBT-I, with weekly sessions and a daily sleep diary, designed to be completed in 6 weeks. NICE recommends it in primary care for people who would otherwise be offered sleep hygiene advice or sleeping pills.",
          "The Royal College of Psychiatrists says a GP referral is needed to access Sleepio. It also mentions Sleepful, a free app developed through publicly funded research in the UK.",
        ],
      },
      {
        heading: "How to get it",
        paragraphs: [
          "Start with your GP, who can check what is causing your insomnia and talk through the options. NICE notes that face-to-face CBT-I is not routinely available on the NHS for most people with insomnia, and that Sleepio could increase access to CBT-I.",
          "If anxiety or low mood are part of the picture, you can refer yourself to NHS talking therapies without speaking to a GP. You need to be registered with a GP and aged 18 or over, or 16 or over in some areas.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "Sleep rescheduling can temporarily increase daytime sleepiness, and it is not recommended for people with certain medical conditions or who do certain jobs. Some techniques work slowly, and you may sleep a bit worse before you sleep better.",
          "NICE says people at higher risk of other sleep disorders, such as in pregnancy, should have a medical assessment before referral to Sleepio. After the course, it is important to keep using the skills you have learned.",
        ],
      },
    ],
    helps: [
      "Ask a GP about CBT for insomnia, face to face with a therapist or through an online self-help programme.",
      "Ask whether you could be referred to Sleepio, a digital self-help programme based on CBT-I.",
      "If anxiety or low mood are part of it, you can refer yourself to NHS talking therapies if you are 18 or over (16 in some areas).",
      "Practise what you learn between sessions, and keep a sleep diary if you are asked to.",
      "Keep using the skills after the course ends, and see a GP if you are still having problems.",
    ],
    tryThisWeek: [
      "Ask a GP about CBT-I.",
      "Ask about a referral to Sleepio.",
      "Start a sleep diary.",
    ],
    ask: "Can I be referred for CBT for insomnia, or to a programme like Sleepio?",
    interactive: {
      kind: "flip-cards",
      title: "Inside CBT-I, card by card",
      intro: "Turn each card to see what each part of the treatment does.",
      cards: [
        { id: "cognitive", front: "Managing worries", when: "The cognitive part", back: "Helps you manage the worries, concerns and anxieties related to your insomnia." },
        { id: "stimulus", front: "Stimulus control", when: "Keeping the bed for sleep", back: "The bedroom is for sleep. If you cannot sleep, get up and return only when sleepy." },
        { id: "rescheduling", front: "Sleep rescheduling", when: "Less time in bed awake", back: "Limits time awake in bed to build the drive to sleep. Not suitable for everyone." },
        { id: "relaxation", front: "Relaxation", when: "For racing thoughts in bed", back: "Breathing exercises or progressive muscle relaxation." },
        { id: "hygiene", front: "Sleep hygiene", when: "Everyday habits", back: "A set of guidelines that can improve sleep, such as caffeine timing and a dark, quiet room." },
        { id: "sleepio", front: "Sleepio", when: "A digital programme", back: "Self-help based on CBT-I, with weekly sessions and a sleep diary, designed for 6 weeks." },
      ],
    },
    sources: [NHS_INSOMNIA, SC_INSOMNIA, RCPSYCH, NHS_CBT, NICE_SLEEPIO, NICE_SLEEPIO_TECH, AUK_SLEEP, NHS_TALKING, SC_FIVE],
    quiz: {
      question: "What is recommended as the first-line treatment for insomnia?",
      options: [{ text: "CBT for insomnia", right: true }, { text: "Sleeping pills" }, { text: "Melatonin bought online" }],
      why: "The Sleep Charity says CBT for insomnia is recommended as the first-line treatment for people with insomnia.",
    },
  },
  {
    id: "ins-sleep-window",
    kicker: "Method",
    question: "What is the sleep window, and how does it work?",
    hook: "Spending longer in bed often makes insomnia worse. Shrinking the time in bed to fit your sleep, then growing it slowly, can rebuild it.",
    short: "Many people with insomnia go to bed far too early, which gives them more time to lie awake. The sleep window means only being in bed for about as long as you actually sleep, then slowly widening it as your sleep gets stronger. Because it can make you sleepier at first, check with your GP before you start.",
    sections: [
      {
        heading: "Less time in bed, stronger sleep",
        paragraphs: [
          "Many people with insomnia go to bed far too early, to give themselves more time to sleep. But this can make insomnia worse, as it gives you more opportunities to be awake in your bed.",
          "Sleep rescheduling, sometimes called sleep restriction, limits the time spent in bed awake and helps to increase the drive to sleep. Once you are spending most of your time in bed asleep, your bedtime can be brought forward.",
        ],
      },
      {
        heading: "Finding your window",
        paragraphs: [
          "Professor Colin Espie suggests experimenting to find your best sleep window, the time you need in bed to get enough sleep. Being in bed for a shorter period can strengthen your sleep drive and help you sleep right through.",
          "It also helps to know your sleep type. Night owls begin to feel sleepy later in the evening, and morning larks feel sleepy earlier and wake up early.",
        ],
      },
      {
        heading: "The method, step by step",
        paragraphs: [
          "The Royal College of Psychiatrists describes one way to do it. Decide the earliest bedtime you are comfortable with, and do not go to bed until you have reached it and are feeling sleepy.",
          "Try delaying that earliest bedtime by 15 minutes each week. Keep going until you are falling asleep within about 20 minutes of going to bed and are not awake for more than about 20 minutes in the night.",
          "At that point, you can try moving your earliest bedtime 15 minutes earlier each week to increase your sleep. If your sleep gets worse, move it later again until it becomes more consistent.",
        ],
      },
      {
        heading: "Same time up, every day",
        paragraphs: [
          "Set an alarm for the same time every day, even at weekends. This helps regulate your body clock, so you start feeling sleepy at the same time every night.",
          "If you are still awake after around 20 minutes, get up and sit somewhere comfortable and do something relaxing, like reading. Go back to bed when you feel sleepy.",
        ],
      },
      {
        heading: "Check first, and be patient",
        paragraphs: [
          "Sleep rescheduling can temporarily increase daytime sleepiness. The Sleep Charity says it is not recommended for people with certain medical conditions or people who do certain jobs, and that the directions need to be tailored to each person's circumstances.",
          "Never drive if you feel sleepy. These techniques work slowly: it may take several weeks to notice an improvement, and you may sleep a bit worse before you sleep better.",
        ],
      },
    ],
    helps: [
      "Check with your GP before you start, as restricting time in bed is not suitable for everyone.",
      "Only go to bed when you are sleepy, and not before your chosen earliest bedtime.",
      "Get up at the same time every day, even at weekends.",
      "If you are still awake after about 20 minutes, get up and do something relaxing, then go back to bed when sleepy.",
      "Do not drive if you feel sleepy.",
    ],
    tryThisWeek: [
      "Talk to your GP first.",
      "Pick an earliest bedtime.",
      "Set one wake-up time for every day.",
    ],
    ask: "Is the sleep window safe for me to try, with my health and my job?",
    interactive: {
      kind: "timeline",
      title: "The sleep window, week by week",
      steps: [
        { id: "before", when: "Before you start", title: "Check it suits you", points: ["Talk to your GP first.", "It can make you sleepier in the day for a while."] },
        { id: "week-1", when: "Week 1", title: "Set your times", points: ["Pick the earliest bedtime you are comfortable with.", "Get up at the same time every day, even at weekends."] },
        { id: "later", when: "Each week after", title: "Go to bed a little later", points: ["Delay your earliest bedtime by 15 minutes.", "Only go to bed when you feel sleepy."] },
        { id: "settled", when: "When sleep settles", title: "Sleep comes more easily", points: ["Falling asleep within about 20 minutes.", "Awake for no more than about 20 minutes in the night."] },
        { id: "widen", when: "Then", title: "Widen the window", points: ["Move your earliest bedtime 15 minutes earlier each week.", "If sleep gets worse, move it later again."] },
      ],
    },
    sources: [RCPSYCH, SC_INSOMNIA, SC_FIVE, AUK_SLEEP, EMM_FASTER, SC_HYGIENE, NHS_INSOMNIA],
    quiz: {
      question: "Why can going to bed very early make insomnia worse?",
      options: [{ text: "It gives you more time to lie awake in bed", right: true }, { text: "It uses up your melatonin" }, { text: "It always causes nightmares" }],
      why: "But this can make insomnia worse, as it gives you more opportunities to be awake in your bed.",
    },
  },
  {
    id: "ins-sleeping-tablets",
    kicker: "Medicines",
    question: "Do sleeping tablets help, and are they safe?",
    hook: "They can help for a few days or weeks when things are very bad. They are rarely the answer for long, and some need care to stop.",
    short: "GPs now rarely prescribe sleeping pills for insomnia, because they can have serious side effects and you can become dependent on them. When they are used, it is usually for a few days or weeks at most. Melatonin is prescription-only in the UK, and pharmacy sleep aids may help for a week or two but cannot cure insomnia.",
    sections: [
      {
        heading: "Rarely the first answer",
        paragraphs: [
          "GPs now rarely prescribe sleeping pills to treat insomnia. Sleeping pills can have serious side effects and you can become dependent on them.",
          "They are only prescribed for a few days, or weeks at the most, if your insomnia is very bad or other treatments have not worked.",
        ],
      },
      {
        heading: "Z-drugs such as zopiclone",
        paragraphs: [
          "Zopiclone is a short-term treatment, a type of sleeping pill known as a Z-drug. It is taken once a day before bed and takes around 30 to 60 minutes to start working.",
          "It is usually not prescribed for more than 4 weeks, because your body can get used to it and it stops working as well. Common side effects include a dry mouth, a bitter or metallic taste and feeling tired or less alert the next day.",
          "Do not stop taking zopiclone suddenly, as this can cause withdrawal symptoms such as feeling agitated or anxious. Your doctor will gradually reduce your dose so you can stop safely.",
        ],
      },
      {
        heading: "Melatonin",
        paragraphs: [
          "Melatonin is a hormone that occurs naturally in your body, and a synthetic version can be taken for short periods. It is mainly used to treat short-term sleep problems in people aged 55 and over, and it takes around 1 to 2 hours to work.",
          "For short-term sleep problems you will usually take it for 1 to 4 weeks, although it can be prescribed for up to 13 weeks. In the UK it is a prescription-only medicine, and ordering melatonin online is not recommended.",
        ],
      },
      {
        heading: "Newer and other medicines",
        paragraphs: [
          "Daridorexant is a relatively new medicine that helps people feel less awake by acting on a brain chemical that regulates wakefulness. It is recommended for more serious and long-lasting insomnia, and it can be prescribed longer term if needed.",
          "Some antidepressants, such as trazodone or a small dose of amitriptyline, are sometimes used to help sleep. Antipsychotics are not recommended as a treatment for insomnia.",
        ],
      },
      {
        heading: "Pharmacy sleep aids",
        paragraphs: [
          "You can buy tablets or liquids from a pharmacy that may help you sleep better. Some contain natural ingredients such as valerian or lavender, while others contain an antihistamine.",
          "They cannot cure insomnia but may help you sleep better for 1 to 2 weeks, and they should not be taken for any longer. Some can make you drowsy, which could make it difficult to drive, so check with your doctor before taking anything for your sleep.",
        ],
      },
    ],
    helps: [
      "Check with your doctor before taking anything for your sleep, including pharmacy sleep aids.",
      "Do not stop zopiclone suddenly; your doctor will gradually reduce your dose so you can stop safely.",
      "Do not drive, ride a bike or use machinery for 12 hours after taking zopiclone.",
      "Do not drink alcohol while taking zopiclone or melatonin.",
      "Do not buy melatonin online: in the UK it is a prescription-only medicine.",
      "If you have taken sleep medicine regularly for longer than a few months, talk to your doctor about whether you still need it.",
    ],
    tryThisWeek: [
      "Ask your doctor before any sleep aid.",
      "No driving for 12 hours after zopiclone.",
      "Ask if you still need your sleep medicine.",
    ],
    ask: "Is a short course of sleeping tablets sensible for me, and how would I stop?",
    interactive: {
      kind: "flip-cards",
      title: "Sleep medicines, card by card",
      intro: "Turn each card to see what each medicine is and what to know.",
      cards: [
        { id: "zopiclone", front: "Zopiclone", when: "A Z-drug, once a day before bed", back: "Usually no more than 4 weeks. No driving for 12 hours after. Stop only with your doctor." },
        { id: "benzodiazepines", front: "Benzodiazepines", when: "Such as temazepam", back: "Can be addictive. No longer than 4 weeks, for as short a time as possible." },
        { id: "melatonin", front: "Melatonin", when: "Prescription only, often for 55 and over", back: "Takes 1 to 2 hours to work. Usually 1 to 4 weeks, up to 13 weeks." },
        { id: "daridorexant", front: "Daridorexant", when: "A newer medicine", back: "For more serious, long-lasting insomnia. Can be prescribed longer term if needed." },
        { id: "pharmacy", front: "Pharmacy sleep aids", when: "Bought without a prescription", back: "Cannot cure insomnia. May help for 1 to 2 weeks. Check with your doctor first." },
      ],
    },
    sources: [NHS_INSOMNIA, NHS_ZOPICLONE, RCPSYCH, NHS_MEL_ABOUT, NHS_MEL_HOW, NHS_MEL_QUESTIONS, SC_INSOMNIA, SC_MELATONIN, AUK_SLEEP],
    quiz: {
      question: "How long is zopiclone usually prescribed for?",
      options: [{ text: "No more than 4 weeks", right: true }, { text: "For years at a time" }, { text: "Only one night ever" }],
      why: "It is usually not prescribed for more than 4 weeks, because your body can get used to it and it stops working as well.",
    },
  },
  {
    id: "ins-pain-at-night",
    kicker: "Pain",
    question: "How can I sleep when I'm in pain?",
    hook: "Pain keeps you awake, and poor sleep makes pain feel worse. Comfort, the timing of pain relief and a steady routine can help break the cycle.",
    short: "Many people with long-term pain find it hard to sleep, and lack of sleep can lower the point at which you feel pain. Supportive pillows, warmth, gentle stretching and talking to your doctor about the type and timing of pain relief can help. If you regularly wake in pain, see your GP or another health professional.",
    sections: [
      {
        heading: "A cycle that runs both ways",
        paragraphs: [
          "Many people with long-term pain find it difficult to sleep at night. Sleep deprivation can also make pain worse.",
          "Not getting enough good sleep can lower the point at which you feel pain, known as your pain threshold. This creates a cycle that can be hard to break.",
        ],
      },
      {
        heading: "Getting comfortable",
        paragraphs: [
          "Supportive pillows can cushion painful areas and help you find a restful position, and a mattress topper can reduce pressure points. Some people like to rest a pillow between their knees while lying on their side.",
          "If you have neck or upper back pain, changing the number or position of your pillows may help. A warm bath before going to bed may ease stiff or painful joints, and heat pads, gentle massage or evening stretches can ease sore muscles.",
        ],
      },
      {
        heading: "Pain relief and timing",
        paragraphs: [
          "Talk to your doctor about the best type and timing of pain relief to help you sleep more comfortably. Arthritis UK says paracetamol just before sleep can ease pain for a time, but it is unlikely to last all night, and non-drowsy painkillers that include caffeine could disrupt sleep.",
          "Ask your doctor what time to take your other medicines too, in case they affect your sleep. Steroid tablets taken later in the day, for example, can affect the body clock, but check with your team before changing any timing.",
          "Keep essentials nearby, such as your medicines and a glass of water, so you can easily find them in the night.",
        ],
      },
      {
        heading: "Keep the routine steady",
        paragraphs: [
          "It is important to try to stick to a normal sleep routine, so you have the best chance of sleeping through the night. Go to bed at the same time each evening, get up at a regular time in the morning and avoid naps in the day.",
          "Regular exercise that gets you a bit out of breath, such as brisk walking or swimming, can improve sleep. It is best to avoid exercise close to bedtime.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "If you are regularly waking up in pain, see a relevant health professional, such as your GP or a physiotherapist. Changes to medicines or lifestyle, including exercise, may improve your symptoms.",
          "Nerve pain can become more intense at night, so talk to your doctor or specialist nurse if it is affecting your sleep. Pain can also make you tired, anxious and low, and talking therapies can help people cope with a long-term condition such as chronic pain.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor about the best type and timing of pain relief to help you sleep.",
      "Use supportive pillows to cushion painful areas, or rest a pillow between your knees when lying on your side.",
      "Take a warm bath before going to bed, which may ease stiff or painful joints.",
      "Go to bed and get up at the same times each day, and avoid naps.",
      "Keep your medicines and a glass of water nearby for the night.",
      "See your GP or a physiotherapist if you are regularly waking up in pain.",
    ],
    tryThisWeek: [
      "Ask about the timing of pain relief.",
      "Try a pillow between your knees.",
      "Have a warm bath before bed.",
    ],
    ask: "Could the type or timing of my pain relief be changed to help me sleep?",
    interactive: {
      kind: "scenarios",
      title: "Painful nights",
      scenarios: [
        {
          id: "wears-off",
          situation: "Your painkiller seems to wear off in the early hours.",
          options: [{ text: "Ask your doctor about type and timing", best: true }, { text: "Take extra tablets on your own" }],
          why: "Talk to your doctor about the best type and timing of pain relief to help you sleep more comfortably.",
        },
        {
          id: "side",
          situation: "Your hips ache when you lie on your side.",
          options: [{ text: "Try a pillow between your knees", best: true }, { text: "Lie still and put up with it" }],
          why: "Some people like to rest a pillow between their knees while lying on their side.",
        },
        {
          id: "nap",
          situation: "After a painful night you want a long nap in the afternoon.",
          options: [{ text: "Keep to your usual routine", best: true }, { text: "Sleep for the whole afternoon" }],
          why: "Go to bed at the same time each evening, get up at a regular time in the morning and avoid naps in the day.",
        },
        {
          id: "regular",
          situation: "You are waking up in pain most nights.",
          options: [{ text: "See your GP or a physiotherapist", best: true }, { text: "Wait and hope it settles" }],
          why: "If you are regularly waking up in pain, see a relevant health professional, such as your GP or a physiotherapist.",
        },
      ],
    },
    sources: [NHS_PAIN, AUK_SLEEP, SC_CANCER_PHYSICAL, NHS_TALKING],
    quiz: {
      question: "How can poor sleep affect pain?",
      options: [{ text: "It can lower your pain threshold", right: true }, { text: "It makes pain disappear" }, { text: "It has no effect on pain" }],
      why: "Not getting enough good sleep can lower the point at which you feel pain, known as your pain threshold.",
    },
  },
  {
    id: "ins-evenings",
    kicker: "Evenings",
    question: "How should I spend my evenings, and set up my bedroom?",
    hook: "Sleep starts long before bed. A wind-down hour, screens away, caffeine stopped early and a cool, dark room all help.",
    short: "Give yourself at least an hour to relax before bed, and put phones and tablets away for that hour, as screens can keep your brain alert. Stop caffeine well before bedtime. Keep the bedroom dark, quiet and cool, with the clock out of sight, and keep it for sleep.",
    sections: [
      {
        heading: "A wind-down, not a switch-off",
        paragraphs: [
          "Relax at least 1 hour before bed, for example with a bath or a book. The Royal College of Psychiatrists suggests setting aside 30 minutes to a couple of hours when you do not work or do things that make you think a lot.",
          "Signal to your mind that the day is over. A warm bath or shower an hour or two before bed can improve your sleep, and so can getting into your pyjamas, laying out tomorrow's clothes or writing down your worries.",
        ],
      },
      {
        heading: "Screens and light",
        paragraphs: [
          "In the evening, the blue light from devices, including TVs, suppresses melatonin, the hormone you need to feel sleepy. It is not just the light: what we use our devices for often keeps us awake and alert too.",
          "The best thing is to stop using screens an hour before bedtime and keep electronics out of the bedroom. If possible, leave your phone outside your room.",
        ],
      },
      {
        heading: "Food, drink and nicotine",
        paragraphs: [
          "The NHS says not to smoke or drink alcohol, tea or coffee for at least 6 hours before going to bed. The Sleep Charity's guidelines suggest avoiding caffeine for 8 hours before bedtime, and the Royal College of Psychiatrists suggests stopping it by 2pm.",
          "Try not to go to bed full, hungry or thirsty, and avoid a big meal late at night. Alcohol makes sleep fragile and light, with more waking later in the night. A warm milky drink or herbal tea is a good swap.",
        ],
      },
      {
        heading: "A cool, dark, quiet room",
        paragraphs: [
          "Make sure your bedroom is dark and quiet, using curtains, blinds, an eye mask or ear plugs if needed. The Sleep Charity says an ideal bedroom temperature is around 16 to 18°C, and temperatures over 24°C are likely to cause restlessness.",
          "Watching the clock at night can increase anxiety, so keep clock faces out of sight. Make sure your mattress, pillows and covers are comfortable.",
        ],
      },
      {
        heading: "Keep the bed for sleep",
        paragraphs: [
          "Use the bedroom only for sleep, getting dressed and intimacy, not for work, study or watching TV. Over time, the bed becomes linked with sleep, and going to bed helps you feel sleepy.",
          "The Sleep Charity says your bedroom should not be your office, gym or playroom. Move work, exercise equipment and gadgets elsewhere if you can.",
        ],
      },
    ],
    helps: [
      "Relax for at least an hour before bed, perhaps with a bath or a book.",
      "Put phones, tablets and computers away for an hour before bed.",
      "Stop tea, coffee and other caffeine drinks at least 6 hours before bed.",
      "Keep the bedroom dark, quiet and cool, around 16 to 18°C.",
      "Turn clock faces out of view.",
      "Try a warm milky drink or herbal tea instead of caffeine.",
    ],
    tryThisWeek: [
      "Put screens away an hour before bed.",
      "Turn the clock face away.",
      "Swap evening tea for a herbal one.",
    ],
    ask: "Is there anything in my evening routine or medicines that could be keeping me awake?",
    interactive: {
      kind: "timeline",
      title: "An evening that helps sleep",
      steps: [
        { id: "afternoon", when: "Afternoon", title: "Last caffeine", points: ["The Royal College of Psychiatrists suggests stopping caffeine by 2pm.", "The NHS says at least 6 hours before bed."] },
        { id: "evening", when: "Early evening", title: "Eat well, not late", points: ["Do not eat a big meal late at night.", "Go to bed neither full nor hungry."] },
        { id: "hour", when: "An hour or two before", title: "Start winding down", points: ["A warm bath or shower can improve sleep.", "Put phones and tablets away."] },
        { id: "wind-down", when: "Wind-down time", title: "Close the day", points: ["Write down any worries.", "Lay out clothes for tomorrow."] },
        { id: "bed", when: "Bedtime", title: "Set the room", points: ["Dark, quiet and cool, around 16 to 18°C.", "Clock faces out of sight."] },
      ],
    },
    sources: [NHS_INSOMNIA, EMM_FASTER, SC_BLUE_LIGHT, SC_ENVIRONMENT, SC_HYGIENE, RCPSYCH],
    quiz: {
      question: "How long before bed is it best to put screens away?",
      options: [{ text: "About an hour", right: true }, { text: "Five minutes" }, { text: "There is no need to" }],
      why: "The best thing is to stop using screens an hour before bedtime and keep electronics out of the bedroom.",
    },
  },
  {
    id: "ins-naps",
    kicker: "Daytime",
    question: "Should I nap, and how do I get through the day?",
    hook: "A nap uses up the sleepiness you need at night. If you have insomnia, it is usually better to get through the dip than to sleep it off.",
    short: "If you have insomnia, napping can make night-time sleep worse, so the NHS advises not napping during the day. If you do need a nap, keep it short and early in the afternoon. Bright light, fresh air and activity help you through sleepy times. When illness causes deep fatigue, planned rest may help, with advice from your care team.",
    sections: [
      {
        heading: "Why naps can backfire",
        paragraphs: [
          "When you nap in the day you use up some of your sleepiness, which can make your sleep at night worse. If you have insomnia, napping may make your problems worse.",
          "If you feel the need to nap most days, it could be a sign that your night-time sleep is not good quality. It is worth looking at your sleep routine or speaking to your GP.",
        ],
      },
      {
        heading: "If you do nap",
        paragraphs: [
          "The Sleep Charity says the best time to nap is usually early afternoon, between 1pm and 3pm. Napping after 4pm can make it harder to fall asleep at night.",
          "A short nap of 20 to 30 minutes is long enough to refresh you without falling into deep sleep. Longer naps can leave you feeling groggy, so set a timer.",
        ],
      },
      {
        heading: "Getting through the dip",
        paragraphs: [
          "It can be hard to avoid napping when you are very sleepy, but the sleepiness will pass after a while. Plan activities for the times of day when you usually feel like napping.",
          "Bright light, fresh air and physical activity are powerful ways of staying awake, and a walk around the block gives you all three. If you are sitting at a desk or on the sofa, stand up and move every few minutes.",
          "Before 2pm, caffeine can help you stay alert. It can take 20 to 30 minutes to start working.",
        ],
      },
      {
        heading: "When illness drains you",
        paragraphs: [
          "Cancer and its treatments can leave you very tired, and napping can help you feel more alert. The Sleep Charity suggests napping before 4pm and keeping it to about 20 minutes. Two or three short naps are likely to be more restorative than one long one.",
          "If naps make it hard to sleep at night, try quiet rest instead, such as a breathing exercise or calming music. Planned napping can be useful in chronic illness, but is best worked out with a healthcare professional.",
        ],
      },
      {
        heading: "Make the day count",
        paragraphs: [
          "Exercise regularly during the day, and get out into natural light in the morning, which helps reset your body clock. This can help your body feel ready for sleep at night.",
          "Talk to your healthcare team if tiredness is affecting your daily life, or you feel sleepy most of the day. Do not drive when you feel sleepy.",
        ],
      },
    ],
    helps: [
      "If you have insomnia, try to avoid napping during the day.",
      "If you do need a nap, keep it to 20 to 30 minutes, in the early afternoon and before 4pm.",
      "Plan activities for the times of day you usually feel like napping.",
      "Take a walk outside for bright light, fresh air and activity.",
      "If you live with a long-term illness, ask your healthcare team whether planned naps would help.",
      "Talk to your healthcare team if you feel sleepy most of the day.",
    ],
    tryThisWeek: [
      "Plan something for your sleepy time.",
      "Take a walk outside.",
      "Keep any nap under 30 minutes.",
    ],
    ask: "Would planned rest or naps help me, or are they making my nights worse?",
    interactive: {
      kind: "scenarios",
      title: "The afternoon dip",
      scenarios: [
        {
          id: "sofa",
          situation: "It is mid-afternoon and you are nodding off on the sofa.",
          options: [{ text: "Get up and take a walk outside", best: true }, { text: "Settle down for a long sleep" }],
          why: "Bright light, fresh air and physical activity are powerful ways of staying awake, and a walk around the block gives you all three.",
        },
        {
          id: "short",
          situation: "You really need a nap after a very bad night.",
          options: [{ text: "A short nap, set a timer", best: true }, { text: "Nap until early evening" }],
          why: "A short nap of 20 to 30 minutes is long enough to refresh you without falling into deep sleep.",
        },
        {
          id: "late",
          situation: "It is 5pm and you feel like a nap.",
          options: [{ text: "Stay up and keep active", best: true }, { text: "Have a nap now" }],
          why: "Napping after 4pm can make it harder to fall asleep at night.",
        },
        {
          id: "treatment",
          situation: "Cancer treatment leaves you exhausted by lunchtime.",
          options: [{ text: "Short naps before 4pm, and ask your team", best: true }, { text: "Force yourself never to rest" }],
          why: "Two or three short naps are likely to be more restorative than one long one.",
        },
      ],
    },
    sources: [NHS_INSOMNIA, RCPSYCH, SC_NAPPING, SC_CANCER_NAPPING, SC_HYGIENE, SC_CIRCADIAN, EMM_SLEEP],
    quiz: {
      question: "If you do nap, how long does the Sleep Charity suggest?",
      options: [{ text: "20 to 30 minutes", right: true }, { text: "2 to 3 hours" }, { text: "As long as you like" }],
      why: "A short nap of 20 to 30 minutes is long enough to refresh you without falling into deep sleep.",
    },
  },
  {
    id: "ins-worry",
    kicker: "Worry",
    question: "How do I stop worrying at night?",
    hook: "Night is when the mind finally has room to race. Giving worries a set time earlier, and calming the body in bed, can turn the volume down.",
    short: "It is normal for the mind to get busy in bed, and worrying about sleep can keep insomnia going. Setting aside a short worry time before bed, writing things down, and relaxation or breathing exercises can help. If worry or low mood is affecting your sleep, talk to your GP. If you need urgent help, call 111, or Samaritans on 116 123.",
    sections: [
      {
        heading: "Why the mind races at night",
        paragraphs: [
          "It is normal for our minds to become very busy when we get into bed. For many of us it is the first time all day that we can be alone with our thoughts.",
          "With fewer distractions at night, there is more time to think, which can make fears feel more overwhelming. Worrying about not sleeping can then make your sleep worse.",
        ],
      },
      {
        heading: "Give worries their own time",
        paragraphs: [
          "Try setting yourself some worry time: a short period, say 10 or 15 minutes, every day or so before bed to write things down and try to find solutions. Making this a regular thing can stop your thoughts racing when you are trying to sleep.",
          "For worries you can do something about, write down a plan. For the ones you cannot control, try to acknowledge and accept this. If you often worry in bed, make a list of things you need to do the next day before you go to sleep, or keep a notepad by your bed.",
        ],
      },
      {
        heading: "Calming the body",
        paragraphs: [
          "Progressive muscle relaxation can help you fall asleep more easily. You tense a group of muscles for about 5 seconds, then relax and notice how it feels for 10 to 20 seconds, moving through your body. Do not tense areas of pain, just focus on relaxing them.",
          "Slow breathing can help too. Breathe in through your nose and out through your mouth, gently and regularly, perhaps counting from 1 to 5, for at least 5 minutes. These skills get stronger with practice, so try them every night.",
        ],
      },
      {
        heading: "Thoughts are not facts",
        paragraphs: [
          "The Sleep Charity suggests noticing a worrying thought and naming it as a thought, not a fact. Rather than wrestling with it, let it come and go, like watching clouds float across the sky.",
          "If you are lying awake and unable to sleep, try not to force it. If you are still awake after around 20 minutes, get up, do something relaxing somewhere comfortable, and go back to bed when you feel sleepy.",
        ],
      },
      {
        heading: "When it is more than worry",
        paragraphs: [
          "Ongoing sleep problems can increase the risk of low mood, anxiety and depression, and existing anxiety or depression can make sleep harder. Support is available, whatever you are going through, and it is worth taking steps to improve sleep as soon as possible.",
          "Speak to your GP if you feel very low or anxious. You can also refer yourself to NHS talking therapies for anxiety and depression, and The Sleep Charity runs a National Sleep Helpline on 03303 530 541, though it is not a crisis service.",
          "If you need urgent help for your mental health, call 111 and select the mental health option. You can call Samaritans free on 116 123, at any time of the day or night. If you do not feel you can keep yourself safe, call 999 or go to A&E now.",
        ],
      },
    ],
    helps: [
      "Set aside 10 or 15 minutes of worry time before bed to write things down and look for solutions.",
      "Keep a notepad by your bed to jot down worries or things to remember.",
      "Practise progressive muscle relaxation or slow breathing every night, not just on bad nights.",
      "If worry or low mood is affecting your sleep, talk to your GP, or refer yourself to NHS talking therapies.",
      "If you need urgent help for your mental health, call 111 and select the mental health option, or call Samaritans free on 116 123.",
      "Call 999 or go to A&E if you do not feel you can keep yourself or someone else safe.",
    ],
    tryThisWeek: [
      "Book 10 minutes of worry time.",
      "Put a notepad by the bed.",
      "Practise slow breathing each night.",
    ],
    ask: "My worry and low mood are affecting my sleep: what support is available to me?",
    interactive: {
      kind: "scenarios",
      title: "Busy-mind moments",
      scenarios: [
        {
          id: "list",
          situation: "In bed, your mind fills with jobs for tomorrow.",
          options: [{ text: "Write a list, then put it down", best: true }, { text: "Go over it all again in your head" }],
          why: "If you often worry in bed, make a list of things you need to do the next day before you go to sleep, or keep a notepad by your bed.",
        },
        {
          id: "loop",
          situation: "The same frightening thought keeps coming back at 3am.",
          options: [{ text: "Name it as a thought and let it pass", best: true }, { text: "Argue with it until it goes away" }],
          why: "Rather than wrestling with it, let it come and go, like watching clouds float across the sky.",
        },
        {
          id: "awake",
          situation: "You have been lying awake for about 20 minutes, getting frustrated.",
          options: [{ text: "Get up and do something relaxing", best: true }, { text: "Stay in bed and try harder to sleep" }],
          why: "If you are still awake after around 20 minutes, get up, do something relaxing somewhere comfortable, and go back to bed when you feel sleepy.",
        },
        {
          id: "low",
          situation: "For weeks you have felt very low, and your sleep is getting worse.",
          options: [{ text: "Talk to your GP", best: true }, { text: "Keep it to yourself" }],
          why: "Speak to your GP if you feel very low or anxious.",
        },
      ],
    },
    sources: [RCPSYCH, EMM_WORRY, EMM_FASTER, SC_CANCER_ANXIETY, SC_MENTAL, NHS_URGENT, EMM_URGENT, NHS_TALKING, SC_HELPLINE, NHS_BREATHING],
    quiz: {
      question: "What is worry time?",
      options: [{ text: "A short, set time before bed to write worries down", right: true }, { text: "Lying in bed thinking through every worry" }, { text: "Staying up until the worries stop" }],
      why: "Try setting yourself some worry time: a short period, say 10 or 15 minutes, every day or so before bed to write things down and try to find solutions.",
    },
  },
  {
    id: "ins-partner",
    kicker: "Partners",
    question: "How do we share a bed when one of us sleeps badly?",
    hook: "A partner's snoring, kicking or different hours can keep you awake, and your sleeplessness can keep them awake. Talking about it is the place to start.",
    short: "A partner who snores, is restless or keeps different hours is a common reason for poor sleep. Snoring is very common and not usually serious, but snoring with pauses in breathing should be checked by a GP. Talking it through, a big enough bed, earplugs and sometimes separate beds can help you both rest.",
    sections: [
      {
        heading: "Two sleepers, one bed",
        paragraphs: [
          "Everyday reasons for poor sleep include your partner having a different sleep pattern from you, or your partner snoring or being a restless sleeper. Poor sleep can also put a strain on a relationship.",
          "If you share a bed, make sure it is big enough for two people, so you can sleep without disturbing each other. The Sleep Charity suggests 5ft wide as a minimum, and a mattress that suits you both.",
        ],
      },
      {
        heading: "Snoring",
        paragraphs: [
          "Snoring is very common and is not usually caused by anything serious. You are more likely to snore if you are overweight, smoke, drink too much alcohol or sleep on your back.",
          "Sleeping on your side can help, such as with a tennis ball taped to the back of your sleepwear. The NHS suggests the partner could use earplugs if snoring affects their sleep.",
        ],
      },
      {
        heading: "When snoring is more than snoring",
        paragraphs: [
          "Snoring can be a sign of sleep apnoea, when breathing stops and starts during sleep. Signs include gasping or choking noises and feeling sleepy during the day.",
          "It can be hard to tell on your own, so a partner who stays awake to check can help. It also helps to bring them to the GP appointment to describe what the snoring is like. Sleep apnoea can be difficult for a partner too.",
        ],
      },
      {
        heading: "Other night-time disturbances",
        paragraphs: [
          "It is usually the person you sleep with who first notices sleep terrors or sleepwalking. If you see someone sleepwalking, gently guide them back to bed, without trying to wake them up.",
          "The Sleep Charity suggests seeing a doctor if someone acts out their dreams, such as kicking or lashing out, or if snoring, sleep talking or sleepwalking regularly disturbs others.",
        ],
      },
      {
        heading: "Finding what works for both",
        paragraphs: [
          "Open conversations about sleep problems, and how they are affecting each other, can help you find shared solutions. A consistent bedtime routine and some worry time earlier in the evening can help both of you.",
          "If one partner wakes often in the night, the Sleep Charity suggests considering separate beds or a monitoring system. Looking after your own rest is not selfish: it helps you both cope.",
        ],
      },
    ],
    helps: [
      "Talk openly about how your sleep problems are affecting each other.",
      "For snoring, the snorer can try sleeping on their side, and the partner can try earplugs.",
      "Make sure a shared bed is big enough for two: the Sleep Charity suggests 5ft wide as a minimum.",
      "Consider separate beds or a monitoring system if one of you wakes often in the night.",
      "See a GP if snoring comes with breathing that stops and starts, gasping or choking, and take your partner along to describe it.",
      "Gently guide someone who is sleepwalking back to bed, without trying to wake them.",
    ],
    tryThisWeek: [
      "Talk about sleep together.",
      "Try earplugs for snoring.",
      "Note any pauses in breathing.",
    ],
    ask: "My partner says I snore and stop breathing: should I be checked for sleep apnoea?",
    interactive: {
      kind: "signs",
      title: "What a partner might notice",
      intro: "Tick anything you have seen while your partner sleeps, or they have seen in you.",
      signs: ["Loud snoring", "Breathing that stops and starts", "Gasping or choking noises", "Very sleepy during the day", "Kicking or lashing out while dreaming", "Sleepwalking or sleep talking", "Moving or thrashing around a lot"],
      after: "Tell the GP, and if you can, go along to describe what you have seen.",
      copyHeading: "What I have noticed at night",
    },
    sources: [RCPSYCH, NHS_SNORING, NHS_APNOEA, SC_ENVIRONMENT, SC_CANCER_PARTNER, SC_STILL],
    quiz: {
      question: "If one partner wakes often in the night, what does the Sleep Charity suggest considering?",
      options: [{ text: "Separate beds or a monitoring system", right: true }, { text: "Sleeping tablets for both" }, { text: "Going to bed much earlier" }],
      why: "If one partner wakes often in the night, the Sleep Charity suggests considering separate beds or a monitoring system.",
    },
  },
];
