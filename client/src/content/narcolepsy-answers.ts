import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Narcolepsy page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and
// Narcolepsy UK, with GOV.UK and the DVLA for driving, work and study, and The Sleep Charity for sleep habits.
// mind.org.uk was not used (it blocks automated reading). Narcolepsy is a neurological condition, not a mental
// illness; the mood and support answers end their "What helps" lists with the crisis routes exactly as the NHS
// gives them (111 mental health option, Samaritans 116 123, Shout 85258, 999 or A&E). Medicines are described
// only in general terms, with no doses; general information only, it never replaces what a person's own GP or
// sleep specialist tells them, and no medicine should be stopped or changed without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const nuk = (label: string, path: string): LearnSource => ({ label: `Narcolepsy UK: ${label}`, url: `https://www.narcolepsy.org.uk/${path}` });
const govuk = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });
const sleepCharity = (label: string, path: string): LearnSource => ({ label: `The Sleep Charity: ${label}`, url: `https://thesleepcharity.org.uk/${path}` });

const NHS_NARC = nhs("Narcolepsy", "conditions/narcolepsy/");
const NHS_SLEEP_PARALYSIS = nhs("Sleep paralysis", "conditions/sleep-paralysis/");
const NHS_LP = nhs("Lumbar puncture", "tests-and-treatments/lumbar-puncture/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_DEPRESSION = nhs("Depression in adults: overview", "mental-health/conditions/depression-in-adults/overview/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");
const EMM_SLEEP = emm("Sleep problems", "mental-health-issues/sleep/");

const NUK_HOME = nuk("The charity dedicated to helping people with narcolepsy", "");
const NUK_ABOUT = nuk("About narcolepsy", "about-narcolepsy/");
const NUK_WHAT = nuk("What is narcolepsy?", "resources/what-is-narcolepsy/");
const NUK_RECOGNISING = nuk("Recognising narcolepsy", "recognising-narcolepsy/");
const NUK_CAUSES = nuk("What causes narcolepsy?", "resources/what-causes-narcolepsy/");
const NUK_EDS = nuk("Excessive daytime sleepiness", "resources/excessive-daytime-sleepiness/");
const NUK_CATAPLEXY = nuk("Cataplexy", "resources/cataplexy/");
const NUK_SEEKING = nuk("Seeking medical help", "resources/seeking-medical-help/");
const NUK_DIAGNOSED = nuk("How is narcolepsy diagnosed?", "resources/how-is-narcolepsy-diagnosed/");
const NUK_EPWORTH = nuk("Epworth Sleepiness Scale", "resources/epworth-sleepiness-scale/");
const NUK_CENTRES = nuk("UK sleep centres", "resources/uk-sleep-centres/");
const NUK_TREATED = nuk("How is narcolepsy treated?", "resources/how-is-narcolepsy-treated/");
const NUK_MEDICATIONS = nuk("Narcolepsy medications", "resources/narcolepsy-medications/");
const NUK_MODAFINIL = nuk("Modafinil", "resources/modafinil/");
const NUK_OXYBATE = nuk("Sodium oxybate", "resources/sodium-oxybate/");
const NUK_PITOLISANT = nuk("Pitolisant", "resources/pitolisant/");
const NUK_SHARED_CARE = nuk("Shared care", "resources/shared-care/");
const NUK_MANAGING = nuk("Managing narcolepsy", "resources/managing-narcolepsy/");
const NUK_DRIVING = nuk("Narcolepsy and driving", "resources/narcolepsy-and-driving/");
const NUK_WORK = nuk("Narcolepsy and work", "resources/narcolepsy-and-work/");
const NUK_EDUCATION = nuk("Narcolepsy and education", "resources/narcolepsy-and-education/");
const NUK_BENEFITS = nuk("Guide to benefits", "resources/guide-to-benefits/");
const NUK_FAQS = nuk("FAQs", "faqs/");
const NUK_LIVING = nuk("Living with narcolepsy", "living-with-narcolepsy/");
const NUK_SUPPORTING = nuk("Supporting a person with narcolepsy", "supporting-a-person-with-narcolepsy/");
const NUK_YOUNG = nuk("Narcolepsy in young people", "narcolepsy-in-young-people/");
const NUK_HELPLINE = nuk("Helpline", "helpline/");
const NUK_CONFERENCE = nuk("Conference", "conference/");
const NUK_AIRPORTS = nuk("Assistance scheme at UK airports", "resources/assistance-scheme-at-uk-airports/");

const GOV_NARC_DRIVING = govuk("Narcolepsy and driving", "narcolepsy-and-driving");
const GOV_SLEEPINESS = govuk("Excessive sleepiness and driving", "excessive-sleepiness-and-driving");
const DVLA_NEURO: LearnSource = { label: "DVLA: Neurological disorders: assessing fitness to drive", url: "https://www.gov.uk/guidance/neurological-disorders-assessing-fitness-to-drive" };
const GOV_DISABILITY = govuk("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ADJUSTMENTS = govuk("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");
const GOV_ATW = govuk("Access to Work: get support if you have a disability or health condition", "access-to-work");
const GOV_DSA = govuk("Help if you're a student with a learning difficulty, health problem or disability", "disabled-students-allowance-dsa");

const SC_NARC = sleepCharity("Narcolepsy", "adults/sleep-disorders/narcolepsy/");
const SC_HYGIENE = sleepCharity("Sleep hygiene", "adults/sleep-hygiene/");
const SC_NAPPING = sleepCharity("Napping", "adults/napping/");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact Samaritans", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SHOUT: LearnSource = { label: "Shout 85258: Get help", url: "https://giveusashout.org/get-help/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of the mood and support answers. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.";

export const narcolepsyAnswers: LearnArticle[] = [
  {
    id: "narc-what-it-is",
    kicker: "Understanding",
    question: "What is narcolepsy, and what is going on in my brain?",
    hook: "The brain's switch between sleeping and waking does not work as it should. It is not laziness, and it can be managed.",
    short: "Narcolepsy is a rare, usually lifelong condition that causes sleepiness and muscle weakness you cannot control. It happens when the brain cannot control sleeping and waking normally. There is currently no cure, but medicines and lifestyle changes can help manage it.",
    sections: [
      {
        heading: "A problem with the sleep switch",
        paragraphs: [
          "Narcolepsy is a rare condition that causes sleepiness and muscle weakness you cannot control. It happens when your brain cannot control sleeping and waking normally.",
          "Narcolepsy UK describes it as a rare neurological condition that affects the brain's ability to regulate the normal sleep-wake cycle. It is often thought of as a sleep disorder, but its cause means it is better classed as a disorder of the central nervous system.",
        ],
      },
      {
        heading: "How sleep goes wrong",
        paragraphs: [
          "Normal sleep follows a regular pattern. About every 90 minutes through the night, a sleeper has several minutes of REM sleep, when dreaming happens, before switching back to non-REM sleep.",
          "In narcolepsy, night-time sleep is much more broken, with many awakenings. People with narcolepsy may go into REM sleep very quickly when they fall asleep, at night or in the day, which can lead to dream-like experiences such as hallucinations.",
        ],
      },
      {
        heading: "Who it affects",
        paragraphs: [
          "Narcolepsy UK estimates that it affects about 1 person in 2,500, which means around 30,000 people in the UK. It believes most of them have not been diagnosed.",
          "Symptoms usually start in children and young adults. The Sleep Charity says it often starts in the teenage years or early adulthood, but it can begin at any age.",
        ],
      },
      {
        heading: "Living with it",
        paragraphs: [
          "Narcolepsy is usually a lifelong condition and affects everyone differently. How it affects you depends on your symptoms, how often they happen and how well your treatment works.",
          "Needing to sleep more often and sudden muscle weakness are not usually harmful, but they can cause accidents or injuries.",
          "Narcolepsy UK says the mix of symptoms varies from one person to the next. With a diagnosis, routine visits to a sleep specialist, effective medicine, support from family and friends, and reasonable adjustments at school or work, the disability it causes can be reduced.",
        ],
      },
    ],
    helps: [
      "See a GP if you feel tired all the time for no reason, or fall asleep suddenly during the day.",
      "Keep a diary of your symptoms to bring to your appointment.",
      "Keep a regular bedtime routine, going to bed and waking up at the same time each day, and take planned naps.",
      "Avoid activities at home or work that could be dangerous if you sleep or fall unexpectedly.",
      "Contact Narcolepsy UK for information and support; its helpline is 0345 450 0394.",
    ],
    tryThisWeek: [
      "See a GP if you are always tired.",
      "Start a diary of your symptoms.",
      "Keep the same bedtime each day.",
    ],
    ask: "Could my sleepiness be narcolepsy, and can I be referred to a sleep specialist?",
    interactive: {
      kind: "timeline",
      title: "Sleep and waking, through the day",
      steps: [
        { id: "falling", when: "Falling asleep", title: "Dreaming sleep comes fast", points: ["In narcolepsy, REM sleep can start very quickly.", "This can bring dream-like hallucinations."] },
        { id: "night", when: "Through the night", title: "Broken sleep", points: ["Normally, REM sleep comes about every 90 minutes.", "In narcolepsy, night sleep has many awakenings."] },
        { id: "waking", when: "Waking up", title: "Sleep paralysis", points: ["You may be unable to move or speak for a short time.", "It is harmless and passes within minutes."] },
        { id: "day", when: "The day", title: "An irresistible need to sleep", points: ["Sleepiness builds, or sleep comes without warning.", "A short nap often leaves you refreshed for a while."] },
        { id: "feelings", when: "Strong feelings", title: "Cataplexy", points: ["Laughter or surprise can bring sudden muscle weakness.", "You stay fully conscious throughout."] },
      ],
    },
    sources: [NHS_NARC, NUK_ABOUT, NUK_RECOGNISING, SC_NARC, NUK_WHAT, NUK_HELPLINE, NUK_EDS, NUK_CATAPLEXY, NHS_SLEEP_PARALYSIS],
    quiz: {
      question: "What happens in narcolepsy?",
      options: [{ text: "The brain cannot control sleeping and waking normally", right: true }, { text: "A person is not trying hard enough to stay awake" }, { text: "It only affects sleep at night" }],
      why: "Narcolepsy is a rare condition that causes sleepiness and muscle weakness you cannot control. It happens when your brain cannot control sleeping and waking normally.",
    },
  },
  {
    id: "narc-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of narcolepsy, and what is cataplexy?",
    hook: "Overwhelming sleepiness is the main sign. Many people also go weak when they laugh, and have vivid dreams or sleep paralysis.",
    short: "Everyone with narcolepsy has excessive daytime sleepiness, and it is usually the first symptom. Many people also have cataplexy, sudden muscle weakness set off by strong emotions, during which they stay fully conscious. Broken night sleep, vivid dreams, sleep paralysis and hallucinations are common too.",
    sections: [
      {
        heading: "Sleepiness you cannot control",
        paragraphs: [
          "All people with narcolepsy have excessive daytime sleepiness, and it is usually the first symptom to develop. It is an irresistible urge to sleep at the wrong times during the day.",
          "The need to sleep usually builds over minutes, but some people have sleep attacks, falling asleep without warning. Some have micro-sleeps, very often without knowing they have slept.",
          "It can also bring mental fuzziness, poor memory, trouble focusing the eyes and exhaustion. After a short nap, a person with narcolepsy often wakes feeling refreshed and able to function fairly normally for some time.",
        ],
      },
      {
        heading: "Cataplexy",
        paragraphs: [
          "Cataplexy is sudden muscle weakness set off by strong emotions such as laughter, anger or surprise. It can range from a barely noticeable weakening of the face muscles, to weak knees, to a complete collapse.",
          "Speech may be slurred and eyesight affected, with double vision or trouble focusing, but hearing and awareness are not disturbed. Attacks generally last less than 2 minutes, and the person stays fully conscious throughout.",
          "Narcolepsy UK says about 75% of people with narcolepsy have cataplexy. It often develops months or even years after the first signs of sleepiness.",
        ],
      },
      {
        heading: "At night",
        paragraphs: [
          "You may often wake up during the night, and dream a lot, with dreams that seem real or intense.",
          "Sleep paralysis is when you cannot move or speak as you are falling asleep or waking up. It can be scary, but it is harmless, and the feelings can last up to several minutes.",
          "Narcolepsy UK says sleep paralysis can be very alarming and often comes with frightening hallucinations, but it is not dangerous.",
        ],
      },
      {
        heading: "Other symptoms",
        paragraphs: [
          "When they are tired, some people with narcolepsy have automatic behaviour, carrying on with routine tasks as if awake while not fully conscious. This can be unsettling and affect confidence.",
          "Difficulty concentrating is common. Narcolepsy UK says broken night sleep may account for the poor memory that many people with narcolepsy report.",
        ],
      },
    ],
    helps: [
      "See a GP if you fall asleep suddenly during the day, or have sleep problems that worry you or affect your life.",
      "Describe all your symptoms to your GP, and point out any cataplexy, with a video if possible.",
      "Keep a sleep diary showing when your symptoms happen and how severe they are.",
      "Reducing stressful events and improving your sleep habits may help control hallucinations and sleep paralysis.",
      "See a GP if you often have sleep paralysis and feel very anxious or scared to go to sleep.",
    ],
    tryThisWeek: [
      "Tell your GP about all your symptoms.",
      "Film any cataplexy to show your GP.",
      "Keep a diary of when symptoms happen.",
    ],
    ask: "Could my sudden weakness when I laugh be cataplexy, and what tests would show it?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your doctor",
      intro: "Tick any you notice. Some happen during the day, some at night.",
      signs: ["Sleepy during the day", "Falling asleep suddenly", "Weakness when laughing or surprised", "Difficulty concentrating", "Often waking in the night", "Unable to move as you wake up", "Dreams that seem real or intense", "Seeing things as you fall asleep", "Doing routine tasks without noticing"],
      after: "Describe all your symptoms to your GP. If you have cataplexy, point it out, with a video if possible, as it is the most unusual symptom of narcolepsy.",
      copyHeading: "Narcolepsy symptoms I have noticed",
    },
    sources: [NUK_EDS, NUK_WHAT, NUK_CATAPLEXY, NHS_NARC, NHS_SLEEP_PARALYSIS, NUK_SEEKING, NUK_MANAGING],
    quiz: {
      question: "During an attack of cataplexy, what happens to awareness?",
      options: [{ text: "The person stays fully conscious", right: true }, { text: "The person falls asleep" }, { text: "The person forgets everything" }],
      why: "Speech may be slurred and eyesight affected, but hearing and awareness are not disturbed. Attacks generally last less than 2 minutes, and the person stays fully conscious throughout.",
    },
  },
  {
    id: "narc-causes",
    kicker: "Causes",
    question: "Why do people get narcolepsy?",
    hook: "In most cases, the brain loses the cells that make a chemical that helps keep us awake. It is not caused by a lack of effort.",
    short: "It is not known exactly what causes narcolepsy, but it happens when the brain cannot control sleeping and waking normally. In most cases, the brain cells that make a substance called hypocretin, also called orexin, are lost, probably through an autoimmune attack. You may be more likely to have it if a close relative has it, or you have certain rare genetic conditions.",
    sections: [
      {
        heading: "A missing messenger",
        paragraphs: [
          "In most cases of narcolepsy, there is a loss of the brain cells that make hypocretin, also known as orexin. It plays a central role in the regulation of alertness, motivation and mood.",
          "Hypocretin helps keep wakefulness stable and stops sleep starting during the day. If the cells that make it are destroyed, the sleep-wake cycle is not properly controlled, and most people with narcolepsy have low or undetectable levels.",
        ],
      },
      {
        heading: "The immune system",
        paragraphs: [
          "Narcolepsy UK says it is now generally believed that, in most cases, narcolepsy is an autoimmune disorder. The body's own immune system destroys the cells that make hypocretin.",
          "This is thought to come from a mix of genes and something that upsets the immune system, such as the flu virus or, in rare cases, a vaccine. The infection might be nothing more than a sore throat or a flu-like illness.",
          "Narcolepsy UK says there was a rise in cases among young people linked to a swine flu vaccine called Pandemrix.",
        ],
      },
      {
        heading: "Families and genes",
        paragraphs: [
          "You may be more likely to have narcolepsy if a close relative has it, or you have certain rare genetic conditions, such as Prader-Willi syndrome.",
          "Narcolepsy UK says it is generally not the case that narcolepsy runs in families. A gene found in quite a large part of the population may play a part, but it is more a case of lower risk for people without it than higher risk for people with it.",
        ],
      },
      {
        heading: "Not a lack of effort",
        paragraphs: [
          "Narcolepsy UK says narcolepsy is not a psychological or mental disorder. It is a neurological disease caused by the loss of nerve cells in the brain.",
          "People around someone with narcolepsy may assume they could stay awake if they really tried. That is not the case: the sleepiness is completely outside their control, and it is not a sign of a lack of effort.",
        ],
      },
    ],
    helps: [
      "Remember that the sleepiness is outside your control, and not a sign of a lack of effort.",
      "Encourage family and friends to learn what narcolepsy is, so they understand your needs.",
      "See a GP if you feel tired all the time for no reason.",
      "Contact Narcolepsy UK's helpline with any narcolepsy questions.",
    ],
    tryThisWeek: [
      "Remind yourself it is not lack of effort.",
      "Share a guide with someone close.",
      "Note questions for the helpline.",
    ],
    ask: "Do you know what caused my narcolepsy, and is it type 1 or type 2?",
    interactive: {
      kind: "risk-check",
      title: "What may play a part",
      intro: "Tick any that apply. These are things the NHS and Narcolepsy UK link with narcolepsy; its exact cause is not known.",
      items: [
        { id: "relative", label: "A close relative with narcolepsy", note: "You may be more likely to have narcolepsy if a close relative has it.", changeable: false },
        { id: "genetic", label: "A rare genetic condition", note: "Certain rare genetic conditions, such as Prader-Willi syndrome, can make narcolepsy more likely.", changeable: false },
        { id: "infection", label: "A recent infection", note: "An infection, even a sore throat or flu-like illness, can trick the immune system into attacking the cells that make hypocretin.", changeable: false },
        { id: "vaccine", label: "The Pandemrix swine flu vaccine", note: "Narcolepsy UK links a rise in cases among young people to this vaccine. In rare cases, a vaccine may play a part.", changeable: false },
        { id: "gene", label: "A common gene", note: "A gene many people have may play a part, but it is more about lower risk for people without it.", changeable: false },
      ],
    },
    sources: [NUK_WHAT, NUK_CAUSES, NHS_NARC, NUK_FAQS, NUK_EDS, NUK_SUPPORTING, NUK_HELPLINE],
    quiz: {
      question: "In most cases of narcolepsy, which brain cells are lost?",
      options: [{ text: "Cells that make hypocretin, also called orexin", right: true }, { text: "Cells that make insulin" }, { text: "Cells that control breathing" }],
      why: "In most cases of narcolepsy, there is a loss of the brain cells that make hypocretin, also known as orexin.",
    },
  },
  {
    id: "narc-diagnosis",
    kicker: "Diagnosis",
    question: "How is narcolepsy diagnosed, and what happens at a sleep study?",
    hook: "A diary, a questionnaire and a night at a sleep centre can show what is really happening while you sleep.",
    short: "If a GP thinks you may have narcolepsy, you will need to see a sleep specialist. You will usually be offered tests to check how you sleep, such as an overnight sleep study and a test of how quickly you fall asleep in the day. If you have narcolepsy, you will usually be diagnosed as having type 1 or type 2.",
    sections: [
      {
        heading: "Starting with your GP",
        paragraphs: [
          "Your first point of contact is your GP, who will take a history and decide on the next steps. See a GP if you feel tired all the time for no reason, or fall asleep suddenly during the day.",
          "It may help to take a completed Epworth Sleepiness Scale and a sleep diary to your first appointment. A diary makes it clear when your symptoms happen and how severe they are.",
        ],
      },
      {
        heading: "The Epworth Sleepiness Scale",
        paragraphs: [
          "The Epworth scale asks how likely you are to doze off in 8 everyday situations, such as sitting quietly after lunch or being a passenger in a car for an hour. You score each from 0 to 3, then add them up.",
          "Narcolepsy UK says a score below 10 is a healthy level of daytime sleepiness, and a score of 18 or above is very high, so it is vital to see your doctor. The scale does not prove or disprove a sleep problem; it shows whether more checks are needed.",
        ],
      },
      {
        heading: "At the sleep centre",
        paragraphs: [
          "If a GP thinks you or your child may have narcolepsy, you will need to see a sleep specialist. They will ask about your symptoms, lifestyle and sleeping habits.",
          "You may have your breathing, brain activity, heart rate and movement measured overnight while you sleep. This is called polysomnography.",
          "The next day, you are likely to have a multiple sleep latency test, which measures how easily you fall asleep during the day. It looks for dreaming sleep within minutes of falling asleep, which is typical of narcolepsy.",
        ],
      },
      {
        heading: "Other tests",
        paragraphs: [
          "Some specialists take a small sample of fluid from your spine using a needle, called a lumbar puncture. The fluid is tested for low levels of hypocretin, which are a strong sign of narcolepsy.",
          "A lumbar puncture typically takes around 15 to 20 minutes. A local anaesthetic means you are awake but do not feel pain, and you can tell the doctor or nurse if you are worried about needles.",
          "You may also be asked to keep a diary about your lifestyle and sleeping patterns over a few weeks.",
        ],
      },
      {
        heading: "Type 1 or type 2",
        paragraphs: [
          "If you have narcolepsy, you will usually be diagnosed as having type 1 or type 2, depending on your test results, symptoms and other conditions you have. The DVLA's guidance describes type 1 as narcolepsy with cataplexy.",
          "Narcolepsy UK says misdiagnosis is still fairly common, although things are improving. Cataplexy is so unusual that having it makes a diagnosis of narcolepsy much more certain.",
        ],
      },
    ],
    helps: [
      "Fill in the Epworth Sleepiness Scale and take it to your GP.",
      "Keep a sleep diary showing when your symptoms happen and how severe they are.",
      "If you have cataplexy, point it out clearly, with a video if possible.",
      "If your GP suspects narcolepsy, ask to be referred to a sleep centre.",
      "Tell the doctor or nurse if you are worried about needles before a lumbar puncture.",
    ],
    tryThisWeek: [
      "Fill in the Epworth Sleepiness Scale.",
      "Start a sleep diary.",
      "Ask about a sleep centre referral.",
    ],
    ask: "Which tests will I have at the sleep centre, and how should I prepare for them?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, card by card",
      intro: "Turn each card to see when each test is used and what it shows. Not everyone has every test.",
      cards: [
        { id: "epworth", front: "Epworth Sleepiness Scale", when: "Before you see your GP", back: "8 everyday situations, each scored 0 to 3. A high score shows more checks may be needed." },
        { id: "diary", front: "Sleep diary", when: "Over a few weeks", back: "Shows when your symptoms happen, how severe they are, and your sleeping patterns." },
        { id: "psg", front: "Overnight sleep study", when: "A night at the sleep centre", back: "Measures your breathing, brain activity, heart rate and movement while you sleep." },
        { id: "mslt", front: "Multiple sleep latency test", when: "Usually the next day", back: "Measures how quickly you fall asleep in the day, and whether dreaming sleep starts within minutes." },
        { id: "lp", front: "Lumbar puncture", when: "Sometimes", back: "A small sample of fluid from the spine is tested. Low hypocretin is a strong sign of narcolepsy." },
        { id: "blood", front: "Blood test", when: "Sometimes", back: "A blood sample may be taken to look at your tissue type." },
      ],
    },
    sources: [NUK_SEEKING, NHS_NARC, NUK_EPWORTH, NUK_WHAT, NUK_DIAGNOSED, NHS_LP, NUK_CATAPLEXY, DVLA_NEURO],
    quiz: {
      question: "What does a multiple sleep latency test measure?",
      options: [{ text: "How easily you fall asleep during the day", right: true }, { text: "How long you can stay awake at night" }, { text: "Your blood pressure" }],
      why: "The next day, you are likely to have a multiple sleep latency test, which measures how easily you fall asleep during the day.",
    },
  },
  {
    id: "narc-medicines",
    kicker: "Treatment",
    question: "Which medicines help with narcolepsy?",
    hook: "No medicine cures narcolepsy, but the right one, or the right mix, can ease sleepiness and cataplexy. Finding it often takes time.",
    short: "You may be prescribed medicines to help you stay awake during the day or help prevent sudden muscle weakness. Some people take one medicine, but many get the best results from a combination, and it is very common to try several before finding what suits you. Medicines can have side effects, so talk to your doctor or pharmacist about any you notice.",
    sections: [
      {
        heading: "What medicines are for",
        paragraphs: [
          "There is currently no cure for narcolepsy, but you may be prescribed medicines to help you stay awake during the day or help prevent sudden muscle weakness. You will usually be referred to a specialist doctor who will discuss treatment options with you.",
          "Narcolepsy UK says medicines are usually chosen depending on whether the main problem is daytime sleepiness, cataplexy, or other dreaming-sleep symptoms such as sleep paralysis and hallucinations.",
        ],
      },
      {
        heading: "For daytime sleepiness",
        paragraphs: [
          "Medicines for daytime sleepiness are generally stimulants and wake-promoting drugs that increase alertness. They include modafinil, methylphenidate, dexamfetamine, lisdexamfetamine and solriamfetol.",
          "Modafinil is a tablet used to promote wakefulness. The dose varies from person to person: for some, one tablet soon after waking is enough, while others need more, spread through the day.",
        ],
      },
      {
        heading: "For cataplexy, and both",
        paragraphs: [
          "Cataplexy, hallucinations and sleep paralysis can be treated with some medicines that are more often used as antidepressants, such as fluoxetine, venlafaxine or clomipramine. That is not why they are used here: they help to suppress dreaming sleep.",
          "Sodium oxybate is taken at night and treats both daytime sleepiness and cataplexy, by improving night-time sleep. It is a powerful sedative, so drinking alcohol while taking it could be extremely dangerous.",
          "Pitolisant is a newer, non-stimulant tablet taken once a day, for both sleepiness and cataplexy. Narcolepsy UK says sodium oxybate and pitolisant are expensive and much harder to get than other medicines.",
        ],
      },
      {
        heading: "Finding what works",
        paragraphs: [
          "What works best for one person does not necessarily work best for another, and you and your doctor will work together to find what suits you. It is very common to try several medicines or combinations, and it may take time to find the best dose.",
          "Many narcolepsy medicines are shared care drugs. A hospital specialist starts them, then monitoring is shared with your GP, while you stay under long-term review with the specialist.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Any medicine used for narcolepsy can have side effects. They may be fairly minor, such as mild headaches or a dry mouth, or more serious, such as anxiety or depression.",
          "Check the leaflet in your medicine's packaging, and talk to your doctor or pharmacist about any side effects. You can also report them through the Yellow Card Scheme.",
          "Narcolepsy UK says to always get medical advice about your medicines from your consultant or doctor, and never from the internet.",
        ],
      },
    ],
    helps: [
      "Work with your doctor to find the medicine, or mix of medicines, that suits you.",
      "Read the leaflet in your medicine's packaging, and tell your doctor or pharmacist about any side effects.",
      "Avoid alcohol; with sodium oxybate, drinking could be extremely dangerous.",
      "If getting prescriptions from your GP is difficult, Narcolepsy UK's shared care adviser can sometimes help.",
      "Report side effects through the Yellow Card Scheme.",
    ],
    tryThisWeek: [
      "Read your medicine's leaflet.",
      "Avoid alcohol.",
      "Note side effects for your doctor.",
    ],
    ask: "Which medicine would suit my main symptoms, and what side effects should I look out for?",
    interactive: {
      kind: "flip-cards",
      title: "Narcolepsy medicines, card by card",
      intro: "Turn each card to see what each kind is used for. Your specialist will help you find what suits you.",
      cards: [
        { id: "stimulants", front: "Stimulants, such as modafinil", when: "For daytime sleepiness", back: "Wake-promoting medicines that increase alertness and reduce sleepiness during the day." },
        { id: "rem", front: "Fluoxetine or venlafaxine", when: "For cataplexy", back: "More often used as antidepressants, but used here to suppress dreaming sleep." },
        { id: "oxybate", front: "Sodium oxybate", when: "For sleepiness and cataplexy", back: "Taken at night, to improve night-time sleep. A powerful sedative: never with alcohol." },
        { id: "pitolisant", front: "Pitolisant", when: "For sleepiness and cataplexy", back: "A newer, non-stimulant tablet taken once a day. Useful when stimulants do not suit." },
        { id: "shared", front: "Shared care", when: "When your GP takes over prescribing", back: "A specialist starts the medicine; later your GP may prescribe it, while the specialist keeps reviewing." },
      ],
    },
    sources: [NHS_NARC, NUK_MEDICATIONS, NUK_MODAFINIL, NUK_OXYBATE, NUK_PITOLISANT, NUK_SHARED_CARE, NUK_TREATED],
    quiz: {
      question: "Why are some antidepressant medicines used in narcolepsy?",
      options: [{ text: "To help suppress dreaming sleep and cataplexy", right: true }, { text: "Because narcolepsy is a form of depression" }, { text: "To help you sleep during the day" }],
      why: "Cataplexy, hallucinations and sleep paralysis can be treated with some medicines that are more often used as antidepressants. That is not why they are used here: they help to suppress dreaming sleep.",
    },
  },
  {
    id: "narc-naps",
    kicker: "Self-care",
    question: "Do planned naps really help with narcolepsy?",
    hook: "A short nap at the right time can bring a stretch of clearer thinking. Planning naps works better than fighting sleep.",
    short: "Taking planned naps during the day is one of the ways the NHS recommends to manage sleep and reduce daytime tiredness. After a short nap, a person with narcolepsy often wakes refreshed and able to function fairly normally for some time. Narcolepsy UK suggests naps of around 15 to 30 minutes, particularly between 2pm and 4pm.",
    sections: [
      {
        heading: "Why naps help",
        paragraphs: [
          "You will usually be recommended ways to manage your sleep to reduce daytime tiredness. One of these is taking planned naps during the day.",
          "After taking a short nap, a person with narcolepsy often wakes feeling refreshed and able to function fairly normally for some time.",
        ],
      },
      {
        heading: "When and how long",
        paragraphs: [
          "Narcolepsy UK says planned naps of around 15 to 30 minutes every day may help. They may help most between 2pm and 4pm, and before events where you need to be alert.",
          "It also suggests breaking up long tasks, and planning naps for when your concentration starts to drop.",
          "Speaking about naps in general, The Sleep Charity says longer naps can leave you feeling groggy, and setting a timer can stop a nap running too long.",
        ],
      },
      {
        heading: "Making space for naps",
        paragraphs: [
          "A calm, comfortable space that is quiet, cool and dim helps you fall asleep more easily. An eye mask and earplugs can block out light and noise.",
          "At work, it may be worth asking your employer about planned naps during the day. Once your employer knows about your condition, it should be much easier to develop a napping strategy.",
          "At school, college or university, planning naps between classes or at break times can help.",
        ],
      },
      {
        heading: "Naps and driving",
        paragraphs: [
          "Narcolepsy UK says most people living with narcolepsy know when they feel sleepy, and take care not to drive long distances without taking planned naps.",
        ],
      },
    ],
    helps: [
      "Take planned naps during the day.",
      "Try naps of around 15 to 30 minutes, particularly between 2pm and 4pm.",
      "Take a nap before events where you need to be alert.",
      "Break up long tasks, and plan naps for when your concentration drops.",
      "Use an eye mask, earplugs and a timer to make naps more restful.",
      "Talk to your employer, school or university about time for naps.",
    ],
    tryThisWeek: [
      "Plan a nap between 2pm and 4pm.",
      "Nap before something important.",
      "Ask about nap time at work or school.",
    ],
    ask: "How many naps a day would suit me, and when should I take them?",
    interactive: {
      kind: "timeline",
      title: "A day with planned naps",
      steps: [
        { id: "morning", when: "Morning", title: "Up at the usual time", points: ["Get up at the same time every day, weekends too.", "Fresh air, light exercise or bright light can help you stay alert."] },
        { id: "midday", when: "Midday", title: "A lighter lunch", points: ["Large meals and alcohol in the day can bring on sleep.", "Break up long tasks."] },
        { id: "nap", when: "2pm to 4pm", title: "A planned nap", points: ["Around 15 to 30 minutes may help.", "Set a timer so it does not run too long."] },
        { id: "event", when: "Before an event", title: "Another short nap", points: ["Naps help before times you need to be alert.", "Plan one when concentration starts to drop."] },
        { id: "evening", when: "Evening", title: "Wind down", points: ["Avoid caffeine at night.", "Unwind before bed, for example with a hot bath."] },
      ],
    },
    sources: [NHS_NARC, NUK_EDS, NUK_MANAGING, SC_NAPPING, NUK_WORK, NUK_EDUCATION, NUK_FAQS],
    quiz: {
      question: "When does Narcolepsy UK say planned naps may help most?",
      options: [{ text: "Between 2pm and 4pm, and before events", right: true }, { text: "Late at night" }, { text: "Straight after a large meal" }],
      why: "Narcolepsy UK says planned naps of around 15 to 30 minutes every day may help. They may help most between 2pm and 4pm, and before events where you need to be alert.",
    },
  },
  {
    id: "narc-sleep-habits",
    kicker: "Self-care",
    question: "Which sleep habits help with narcolepsy?",
    hook: "Narcolepsy breaks up night-time sleep. A steady routine, a calm bedroom and a few things to avoid can make days more predictable.",
    short: "The NHS recommends a regular bedtime routine, going to bed and waking up at the same time each day, and making sure you get enough sleep at night. Avoiding alcohol, avoiding caffeine at night, and exercising regularly but not late at night can help too. Narcolepsy UK says lifestyle changes like these can reduce how unpredictable and severe symptoms are.",
    sections: [
      {
        heading: "A regular routine",
        paragraphs: [
          "Keep a regular bedtime routine by going to bed and waking up at the same time each day, and make sure you are getting enough sleep at night. Most healthy adults need around 7 to 9 hours of sleep a night.",
          "Narcolepsy UK suggests keeping the same times at weekends too, to help regulate your sleep-wake cycle. It says a regular routine, planned naps, a healthy diet and an active life can all reduce how unpredictable and severe the symptoms are.",
        ],
      },
      {
        heading: "Your bedroom",
        paragraphs: [
          "Make sure your bedroom is dark, quiet and comfortable to encourage sleep. Try to use your bed only for sleep and sex, rather than for working or watching TV, so you link your bed with sleep.",
          "Mentally unwind before going to sleep, for example by taking a hot bath.",
        ],
      },
      {
        heading: "Food, drink and caffeine",
        paragraphs: [
          "Avoid alcohol. Narcolepsy UK also suggests avoiding large meals and alcohol during the day, as they can bring on sleep.",
          "Avoid caffeine at night, as it will stop you getting to sleep. Narcolepsy UK suggests avoiding coffee in the afternoon or at night.",
          "Some people living with narcolepsy benefit from avoiding refined carbohydrates.",
        ],
      },
      {
        heading: "Light and exercise",
        paragraphs: [
          "Exercise regularly, but avoid exercise late at night. Fresh air and light exercise, or bright light, can help you stay alert during the day.",
          "The Sleep Charity says natural light in the morning, even on a cloudy day, helps reset the body clock and makes us more alert.",
        ],
      },
      {
        heading: "Staying safe",
        paragraphs: [
          "Avoid activities at home or work that could be dangerous if you sleep or fall unexpectedly.",
        ],
      },
    ],
    helps: [
      "Go to bed and wake up at the same time each day, including at weekends.",
      "Make sure your bedroom is dark, quiet and comfortable, and use your bed only for sleep.",
      "Avoid alcohol, and avoid large meals during the day.",
      "Avoid caffeine at night.",
      "Exercise regularly, but not late at night, and get fresh air and light during the day.",
      "Avoid activities that could be dangerous if you sleep or fall unexpectedly.",
    ],
    tryThisWeek: [
      "Keep the same bed and wake times.",
      "Skip caffeine at night.",
      "Get fresh air and light by day.",
    ],
    ask: "Which changes to my sleep routine would help my symptoms most?",
    interactive: {
      kind: "scenarios",
      title: "Everyday choices",
      scenarios: [
        {
          id: "weekend",
          situation: "It is Saturday, and you could sleep in for hours.",
          options: [{ text: "Get up at your usual time", best: true }, { text: "Sleep in as long as you can" }],
          why: "Try to go to bed and get up at the same time every day, including at weekends, to help regulate your sleep-wake cycle.",
        },
        {
          id: "coffee",
          situation: "You want a pick-me-up at 8pm.",
          options: [{ text: "Choose a drink without caffeine", best: true }, { text: "Have a strong coffee" }],
          why: "Avoid caffeine at night, as it will stop you getting to sleep.",
        },
        {
          id: "lunch",
          situation: "Friends suggest a big lunch with wine.",
          options: [{ text: "Choose a lighter meal and no alcohol", best: true }, { text: "Have the large meal and the wine" }],
          why: "Avoid large meals and alcohol during the day, as they can bring on sleep. The NHS advises avoiding alcohol.",
        },
        {
          id: "exercise",
          situation: "You want to exercise after a long day.",
          options: [{ text: "Exercise earlier, not late at night", best: true }, { text: "Go for a run just before bed" }],
          why: "Exercise regularly, but avoid exercise late at night.",
        },
      ],
    },
    sources: [NHS_NARC, NUK_MANAGING, NUK_TREATED, SC_HYGIENE, EMM_SLEEP],
    quiz: {
      question: "What does the NHS say about exercise with narcolepsy?",
      options: [{ text: "Exercise regularly, but not late at night", right: true }, { text: "Avoid all exercise" }, { text: "Exercise just before bed" }],
      why: "Exercise regularly, but avoid exercise late at night.",
    },
  },
  {
    id: "narc-specialist",
    kicker: "Treatment",
    question: "What happens at the sleep clinic?",
    hook: "A sleep specialist leads your care, often for years. Knowing how it works helps you make the most of each visit.",
    short: "If a GP thinks you may have narcolepsy, you will need to see a sleep specialist, who will discuss treatment options with you. Narcolepsy UK says everyone diagnosed with narcolepsy, or whose GP suspects it, should be referred to a specialist sleep centre. Routine specialist visits, effective medicine and support can reduce the disability narcolepsy causes.",
    sections: [
      {
        heading: "Getting referred",
        paragraphs: [
          "If a GP thinks you or your child may have narcolepsy, you will need to see a sleep specialist.",
          "Narcolepsy UK says everyone diagnosed with narcolepsy, or whose GP suspects it, should be referred to a specialist sleep centre for expert assessment. It keeps a list of sleep centres by region, across England, Scotland, Wales and Northern Ireland.",
        ],
      },
      {
        heading: "Your first visits",
        paragraphs: [
          "The specialist will ask about your symptoms, lifestyle and sleeping habits. A careful history is taken, including the types of symptoms you have and the age when you first noticed them.",
          "It can help to keep a diary of your symptoms to bring to your appointment.",
        ],
      },
      {
        heading: "Working out treatment",
        paragraphs: [
          "Your specialist will discuss treatment options with you. What works best for one person does not necessarily work for another, so your doctor will try to find the treatment most suitable for you, usually a mix of medicine and lifestyle changes.",
          "Narcolepsy UK says it can take many years for you and your sleep specialist to find the most effective medicines and doses.",
        ],
      },
      {
        heading: "Long-term care",
        paragraphs: [
          "Many narcolepsy medicines are first prescribed by the hospital specialist. Monitoring is then shared with your GP, but you remain under long-term review with the specialist.",
          "Narcolepsy UK says that routine visits to a sleep specialist, with effective medicine, support from family and friends, and reasonable adjustments, can reduce the disability narcolepsy causes.",
        ],
      },
      {
        heading: "If you need more support",
        paragraphs: [
          "Some people have symptoms that are harder to control and need more support. You may find talking therapies useful to help you cope day to day.",
        ],
      },
    ],
    helps: [
      "If your GP suspects narcolepsy, ask them to refer you to a sleep centre.",
      "Bring a diary of your symptoms to your appointment.",
      "Take a completed Epworth Sleepiness Scale with you.",
      "Work with your specialist to find the treatment that suits you.",
      "Ask about talking therapies if your symptoms are hard to cope with.",
    ],
    tryThisWeek: [
      "Bring your symptom diary.",
      "Take your Epworth score.",
      "Ask about talking therapies.",
    ],
    ask: "How often will I see the sleep clinic, and who do I contact between visits?",
    interactive: {
      kind: "timeline",
      title: "Your path through the sleep clinic",
      steps: [
        { id: "gp", when: "Step 1", title: "Your GP", points: ["The GP takes a history and decides the next steps.", "Bring your sleep diary and Epworth score."] },
        { id: "referral", when: "Step 2", title: "Referral", points: ["You are referred to a specialist sleep centre.", "Narcolepsy UK lists sleep centres by region."] },
        { id: "tests", when: "Step 3", title: "Tests", points: ["Questions about your symptoms, lifestyle and sleep.", "Often an overnight sleep study and a daytime test."] },
        { id: "treatment", when: "Step 4", title: "Finding what works", points: ["Usually a mix of medicine and lifestyle changes.", "It can take time to find the right medicines and doses."] },
        { id: "review", when: "Step 5", title: "Long-term review", points: ["Your GP may share monitoring of your medicines.", "You stay under review with the specialist."] },
      ],
    },
    sources: [NHS_NARC, NUK_CENTRES, NUK_DIAGNOSED, NUK_TREATED, NUK_WHAT, NUK_SHARED_CARE, NUK_SEEKING, NUK_MEDICATIONS],
    quiz: {
      question: "Who usually starts narcolepsy medicines that are shared care drugs?",
      options: [{ text: "A hospital specialist", right: true }, { text: "A pharmacist" }, { text: "You buy them yourself" }],
      why: "Many narcolepsy medicines are first prescribed by the hospital specialist. Monitoring is then shared with your GP, but you remain under long-term review with the specialist.",
    },
  },
  {
    id: "narc-driving",
    kicker: "Driving",
    question: "Can I drive if I have narcolepsy?",
    hook: "Many people with narcolepsy do drive. It starts with telling the DVLA, and depends on how well your symptoms are controlled.",
    short: "You need to tell the DVLA if you drive and have narcolepsy, and whether you can drive depends on your symptoms and treatment. You can be fined up to £1,000 if you do not tell the DVLA about a medical condition that affects your driving. Many people with narcolepsy can drive once the DVLA is satisfied their condition is controlled well enough.",
    sections: [
      {
        heading: "Telling the DVLA",
        paragraphs: [
          "You need to tell the DVLA if you have narcolepsy or cataplexy, or both. You can report it online, or fill in form SL1 for a car or motorcycle licence, or form SL1V for a bus, coach or lorry licence.",
          "You can be fined up to £1,000 if you do not tell the DVLA about a medical condition that affects your driving. You may be prosecuted if you are involved in an accident as a result.",
        ],
      },
      {
        heading: "When you can drive",
        paragraphs: [
          "The government says not to drive until you are free from excessive sleepiness, or until your symptoms are under control and you are strictly following any necessary treatment. Ask your doctor if you are not sure whether your sleepiness will affect your driving.",
          "The DVLA's guidance for doctors says a car or motorcycle licence may be issued only when symptoms have been satisfactorily controlled for at least 3 months. An on-road driving assessment may sometimes be needed.",
          "If treatment is stopped, for example when pregnant or planning a pregnancy, driving should stop until symptoms have been well controlled again for at least one month.",
        ],
      },
      {
        heading: "What the DVLA does",
        paragraphs: [
          "Once you have told the DVLA, it may contact your doctor or consultant, arrange for you to be examined, or ask you to take a driving assessment.",
          "If you are given a licence, it will most likely be for a short, fixed period of 1, 2 or 3 years, with a review at the end. After several years of good control, the DVLA may issue a normal licence, valid to the age of 70.",
        ],
      },
      {
        heading: "Bus, coach and lorry licences",
        paragraphs: [
          "The rules for a bus or lorry licence are stricter. You need to be under the care of a specialist with at least a yearly review, sleep apnoea needs to be ruled out or meet its own standards, and an on-road driving assessment needs to confirm good control.",
        ],
      },
      {
        heading: "Driving safely",
        paragraphs: [
          "Many people with narcolepsy are able to drive. Narcolepsy UK says most people living with narcolepsy know when they feel sleepy, and take care not to drive long distances without taking planned naps.",
        ],
      },
    ],
    helps: [
      "Tell the DVLA if you have narcolepsy or cataplexy, online or with form SL1.",
      "Do not drive until your symptoms are under control and you are strictly following your treatment.",
      "Ask your doctor if you are not sure whether your sleepiness affects your driving.",
      "Take planned naps rather than driving long distances without them.",
      "If your treatment is stopped, stop driving until your symptoms have been controlled again for at least a month.",
    ],
    tryThisWeek: [
      "Check you have told the DVLA.",
      "Ask your doctor about driving.",
      "Plan naps on long journeys.",
    ],
    ask: "Are my symptoms controlled well enough for driving, and will you support my DVLA application?",
    interactive: {
      kind: "scenarios",
      title: "Driving decisions",
      scenarios: [
        {
          id: "diagnosed",
          situation: "You have just been diagnosed, and you drive.",
          options: [{ text: "Tell the DVLA", best: true }, { text: "Wait and see if anyone asks" }],
          why: "You need to tell the DVLA if you have narcolepsy. You can be fined up to £1,000 if you do not tell it about a condition that affects your driving.",
        },
        {
          id: "unsure",
          situation: "You are not sure if your sleepiness affects your driving.",
          options: [{ text: "Ask your doctor", best: true }, { text: "Drive and see how it goes" }],
          why: "Ask your doctor if you are not sure whether your excessive sleepiness will affect your driving.",
        },
        {
          id: "long",
          situation: "A long drive lies ahead.",
          options: [{ text: "Plan naps along the way", best: true }, { text: "Drive straight through" }],
          why: "Most people living with narcolepsy know when they feel sleepy, and take care not to drive long distances without taking planned naps.",
        },
        {
          id: "stopped",
          situation: "Your treatment has been stopped while you plan a pregnancy.",
          options: [{ text: "Stop driving until control is back", best: true }, { text: "Keep driving as normal" }],
          why: "If treatment is stopped, driving should stop until symptoms have been well controlled again for at least one month.",
        },
      ],
    },
    sources: [GOV_NARC_DRIVING, GOV_SLEEPINESS, DVLA_NEURO, NUK_DRIVING, NUK_FAQS, NHS_NARC],
    quiz: {
      question: "Who do you need to tell if you drive and have narcolepsy?",
      options: [{ text: "The DVLA", right: true }, { text: "Only your employer" }, { text: "No one, if you feel fine" }],
      why: "You need to tell the DVLA if you have narcolepsy or cataplexy, or both.",
    },
  },
  {
    id: "narc-work-study",
    kicker: "Work and study",
    question: "How can I manage narcolepsy at work, school or university?",
    hook: "Narcolepsy does not affect intelligence. With the right adjustments, such as planned naps and flexible hours, many people work and study well.",
    short: "Narcolepsy can affect concentration, attention span and short-term memory, but it does not directly affect intelligence. Telling your employer, school or university helps them understand your needs, and planned naps, recording meetings or lessons, flexible hours and extra exam time can all help. Access to Work and Disabled Students' Allowance can give extra support.",
    sections: [
      {
        heading: "Ability is not the problem",
        paragraphs: [
          "Narcolepsy can have a major indirect effect on concentration, attention span and short-term memory, but it does not affect intelligence directly. With the right allowances made for their condition, many people with narcolepsy are able to work.",
          "There are certain jobs that people with narcolepsy should not do, for health and safety reasons. The risk of sudden sleeping or falling may affect the type of work you can do, and you may need to take extra safety measures.",
        ],
      },
      {
        heading: "Telling your employer",
        paragraphs: [
          "Narcolepsy UK says it is important to keep your employer and colleagues informed. Once your employer knows, it should be much easier to develop a napping strategy and agree working hours that suit you both.",
          "It may be worth asking about planned naps during the day, recording meetings or working flexible hours, all of which can help you work effectively.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You are disabled under the Equality Act 2010 if you have a condition that has a substantial and long-term negative effect on your ability to do normal daily activities. Long-term means 12 months or more.",
          "Narcolepsy UK describes narcolepsy as a disability, and says people with it may not be discriminated against because of their condition. Employers have to make reasonable adjustments so that workers with disabilities or health conditions are not substantially disadvantaged.",
        ],
      },
      {
        heading: "Extra help at work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. It can give a grant for practical support, such as help with the costs of travelling to work if you cannot use public transport.",
          "An Access to Work grant does not affect your other benefits, and you do not have to pay it back. It will not pay for reasonable adjustments, which your employer has to make.",
        ],
      },
      {
        heading: "School, college and university",
        paragraphs: [
          "With the right allowances, most students with narcolepsy can achieve their full potential. Planning naps between classes or at break times, extra time for homework and exams, and recording lessons can all help.",
          "Disabled Students' Allowance can cover study-related costs you have because of a long-term illness or disability, and you do not need to pay it back. Narcolepsy UK also offers a Narcolepsy Passport, made by a young person with narcolepsy, to help explain your needs.",
        ],
      },
    ],
    helps: [
      "Tell your employer, school or university about your diagnosis, so they understand your needs.",
      "Ask about planned naps, recording meetings or lessons, and flexible hours.",
      "Ask for extra time for homework and exams.",
      "Apply for Access to Work if you need extra help to get or stay in work.",
      "If you are a student, find out about Disabled Students' Allowance.",
      "Contact Narcolepsy UK for help with benefits, before you apply if possible.",
    ],
    tryThisWeek: [
      "Plan what to tell your employer or tutor.",
      "Ask about naps or flexible hours.",
      "Check Access to Work or DSA.",
    ],
    ask: "Could you write a letter explaining the adjustments I need at work or college?",
    interactive: {
      kind: "flip-cards",
      title: "Support at work and study",
      intro: "Turn each card to see when it applies and what it offers.",
      cards: [
        { id: "tell", front: "Telling your employer", when: "Once you are diagnosed", back: "Helps them understand your needs, and makes it easier to agree a napping strategy and working hours." },
        { id: "adjustments", front: "Reasonable adjustments", when: "If narcolepsy puts you at a disadvantage", back: "Changes your employer has to make, such as doing things another way or flexible hours." },
        { id: "atw", front: "Access to Work", when: "If you need extra help to work", back: "A grant for practical support. It does not affect other benefits and you do not pay it back." },
        { id: "dsa", front: "Disabled Students' Allowance", when: "At college or university", back: "Covers study-related costs because of a long-term illness or disability. You do not pay it back." },
        { id: "passport", front: "Narcolepsy Passport", when: "At school, college or work", back: "A booklet made by a young person with narcolepsy, to help explain your needs and what support works." },
        { id: "benefits", front: "Help with benefits", when: "If narcolepsy affects your income", back: "Narcolepsy UK can help with benefits; contact it before you apply if you can." },
      ],
    },
    sources: [NUK_WORK, NHS_NARC, NUK_FAQS, GOV_DISABILITY, NUK_WHAT, GOV_ADJUSTMENTS, GOV_ATW, NUK_EDUCATION, GOV_DSA, NUK_BENEFITS],
    quiz: {
      question: "Does narcolepsy directly affect intelligence?",
      options: [{ text: "No", right: true }, { text: "Yes, always" }, { text: "Only in young people" }],
      why: "Narcolepsy can have a major indirect effect on concentration, attention span and short-term memory, but it does not affect intelligence directly.",
    },
  },
  {
    id: "narc-mood",
    kicker: "Mood",
    question: "Can narcolepsy affect my mood?",
    hook: "Living with a condition other people cannot see can be frustrating and lonely. Low mood is common, and help is there.",
    short: "Narcolepsy can affect relationships and emotional health, and frustration, low mood and even depression can happen. Talking openly about your condition with your GP, friends and family can help with the isolation many people feel. Talking therapies can help you cope day to day, and urgent help is always available.",
    sections: [
      {
        heading: "Why mood can be affected",
        paragraphs: [
          "Narcolepsy can affect almost every part of daily life, including relationships and emotional health. The Sleep Charity says it can be difficult to cope with emotionally.",
          "Narcolepsy UK says frustration, low mood and even depression can happen in people with narcolepsy. When cataplexy cannot be controlled by medicine, losing control again and again is likely to affect confidence and self-esteem.",
          "People around someone with narcolepsy may assume they could stay awake if they tried harder. That is not the case, and the sleepiness is not a sign of a lack of effort.",
        ],
      },
      {
        heading: "Not a mental illness, but real feelings",
        paragraphs: [
          "Narcolepsy is a neurological condition, not a psychological or mental disorder. But a lifelong diagnosis like this can have indirect effects on mental and emotional wellbeing.",
          "Some medicines for narcolepsy can have side effects such as anxiety or depression. If you notice side effects, talk to your doctor or pharmacist.",
        ],
      },
      {
        heading: "Talking helps",
        paragraphs: [
          "Narcolepsy UK says the risks can sometimes be reduced by talking openly about your condition to your GP or to friends and family. This helps with the isolation many people feel.",
          "Some people have symptoms that are harder to control and need more support. You may find talking therapies useful to help you cope day to day.",
          "You can refer yourself to NHS talking therapies for difficult feelings such as low mood and worry, or for coping with a long-term health condition. You need to be registered with a GP and aged 18 or over, or 16 or over in some areas.",
        ],
      },
      {
        heading: "When it might be depression",
        paragraphs: [
          "Depression is more than simply feeling unhappy or fed up for a few days. When you are depressed, you feel persistently sad for weeks or months.",
          "It is important to get help from a GP if you think you may be depressed. With the right treatment and support, most people with depression can make a full recovery.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment. You can call Samaritans free on 116 123, from any phone, at any time.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one.",
        ],
      },
    ],
    helps: [
      "Talk openly about your condition with your GP, friends and family.",
      "Ask about talking therapies, or refer yourself to NHS talking therapies.",
      "See a GP if you think you may be depressed.",
      "Tell your doctor or pharmacist about side effects such as anxiety or depression.",
      "Meet other people with narcolepsy at Narcolepsy UK's events and conference.",
      CRISIS,
    ],
    tryThisWeek: [
      "Talk to someone you trust about it.",
      "Look up NHS talking therapies.",
      "See a GP if you feel low for weeks.",
    ],
    ask: "Could my low mood be linked to narcolepsy or my medicines, and can I be referred for talking therapy?",
    interactive: {
      kind: "signs",
      title: "How you have been feeling",
      intro: "Tick any that fit. Sharing them with your GP can help you get the right support.",
      signs: ["Frustrated", "Low in mood", "Sad for weeks or months", "Losing interest in things I enjoyed", "Anxious", "Isolated or alone with it", "Less confident than before", "Feeling hopeless"],
      after: "Talking openly with your GP can help. If you think you may be depressed, see a GP. If you need urgent help, call 111 and select the mental health option.",
      copyHeading: "How I have been feeling",
    },
    sources: [NUK_LIVING, SC_NARC, NUK_MANAGING, NUK_WHAT, NUK_EDS, NUK_FAQS, NUK_SUPPORTING, NUK_MEDICATIONS, NHS_NARC, NHS_TT, NHS_DEPRESSION, NHS_URGENT, SAMARITANS, NHS_SUICIDAL, SHOUT],
    quiz: {
      question: "What does Narcolepsy UK say can help with the isolation many people feel?",
      options: [{ text: "Talking openly with your GP, friends and family", right: true }, { text: "Keeping it to yourself" }, { text: "Trying harder to stay awake" }],
      why: "Narcolepsy UK says the risks can sometimes be reduced by talking openly about your condition to your GP or to friends and family. This helps with the isolation many people feel.",
    },
  },
  {
    id: "narc-support",
    kicker: "Support",
    question: "Where can I find support for narcolepsy?",
    hook: "In everyday life, you may never meet anyone else with narcolepsy. That does not mean you are alone.",
    short: "Narcolepsy UK is the UK charity for people with narcolepsy, their families and carers, with a helpline on 0345 450 0394, information, events and an annual conference. Support from other people with narcolepsy, at a group or online, can help. Family, friends, teachers and employers can help too, by learning about the condition.",
    sections: [
      {
        heading: "Narcolepsy UK",
        paragraphs: [
          "As well as support from your healthcare team, you may find it helpful to get support from other people with narcolepsy, at a support group or online. There are also national charities that can offer support and information.",
          "Narcolepsy UK supports people with narcolepsy, cataplexy and idiopathic hypersomnia, and their friends and families. It says that in 2024 it helped almost 400 people and presented to 80 schools.",
        ],
      },
      {
        heading: "The helpline",
        paragraphs: [
          "For advice on a specific narcolepsy issue, you can call the Narcolepsy UK helpline on 0345 450 0394. It is not open around the clock, and its staff work part-time, so it may take a few days to reply.",
          "If you cannot get through, you can use the contact form on its website, and email is often the best way to get in touch at first. It can only help with issues related directly to narcolepsy and cataplexy.",
        ],
      },
      {
        heading: "Meeting others",
        paragraphs: [
          "Because narcolepsy is rare, many people may never meet anyone else with it. Narcolepsy UK brings people together through social media, events and its conferences, and for many, meeting others is enormously beneficial.",
          "At its conferences, you can share experiences with other people with narcolepsy and their families. You can hear medical speakers and people with personal experience, and there is always something for young people.",
        ],
      },
      {
        heading: "Family, friends and others",
        paragraphs: [
          "Family, friends, colleagues and employers can help by learning what narcolepsy is, what the symptoms are and how it is treated. This gives them a greater understanding of the person's needs.",
          "For young people, getting to know others in the same situation can be enormously beneficial. Narcolepsy UK also works with schools, so teachers understand the condition and how best to help.",
          "If you travel by air, a scheme at a number of UK airports gives people with hidden disabilities a lanyard, so staff can offer tailored help.",
        ],
      },
      {
        heading: "If things feel too much",
        paragraphs: [
          "If you need urgent help for your mental health, call 111 and select the mental health option. You can call Samaritans on 116 123, or text SHOUT to 85258.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe.",
        ],
      },
    ],
    helps: [
      "Call the Narcolepsy UK helpline on 0345 450 0394 for advice on a specific issue.",
      "Register as a Friend of Narcolepsy UK, so it can tell you about meet-ups in your area.",
      "Go to a Narcolepsy UK event or conference to meet other people with narcolepsy.",
      "Ask family and friends to learn about narcolepsy, so they understand your needs.",
      "At an airport, ask about the assistance scheme for hidden disabilities.",
      CRISIS,
    ],
    tryThisWeek: [
      "Save the helpline number.",
      "Register as a Friend for meet-ups.",
      "Share a guide with family.",
    ],
    ask: "Is there a narcolepsy support group or patient event near me?",
    interactive: {
      kind: "flip-cards",
      title: "Where to turn",
      intro: "Turn each card to see when to use it and what it offers.",
      cards: [
        { id: "helpline", front: "Narcolepsy UK helpline", when: "For a specific narcolepsy issue", back: "Call 0345 450 0394. If you cannot get through, use the contact form; email is often best at first." },
        { id: "friends", front: "Friends of Narcolepsy UK", when: "To hear about meet-ups", back: "Registering is free, and lets the charity tell you about meet-ups in your area." },
        { id: "conference", front: "Events and conferences", when: "To meet others", back: "Share experiences, hear medical speakers and people with narcolepsy, with something for young people." },
        { id: "samaritans", front: "Samaritans", when: "Whatever you are going through", back: "Call 116 123, free from any phone, at any time." },
        { id: "shout", front: "Shout", when: "If you would rather text", back: "Text SHOUT to 85258 for free, confidential support, 24 hours a day." },
        { id: "urgent", front: "NHS 111 or 999", when: "In a crisis", back: "Call 111 and select the mental health option. Call 999 or go to A&E if you cannot keep yourself safe." },
      ],
    },
    sources: [NHS_NARC, NUK_HOME, NUK_HELPLINE, NUK_LIVING, NUK_CONFERENCE, NUK_SUPPORTING, NUK_YOUNG, NUK_AIRPORTS, NHS_URGENT, NHS_SUICIDAL, SAMARITANS, SHOUT],
    quiz: {
      question: "Is the Narcolepsy UK helpline open around the clock?",
      options: [{ text: "No; its staff work part-time, and email is often best at first", right: true }, { text: "Yes, 24 hours a day" }, { text: "It only takes emails" }],
      why: "It is not open around the clock, and its staff work part-time, so it may take a few days to reply.",
    },
  },
];
