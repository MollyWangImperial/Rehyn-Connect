import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Perimenopause and mood page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (England), NHS inform
// (Scotland), NICE guideline NG23, Mental Health UK (Rethink Mental Illness's charity partner, which Rethink's own
// menopause page links to), the Royal College of Psychiatrists and Acas, with GOV.UK for work rights.
// mind.org.uk was not tried (it blocks automated reading), so no Mind page is cited. Safe messaging throughout: no
// method details, and every answer ends its "What helps" list with the crisis routes exactly as the NHS gives them
// (111 mental health option, Samaritans 116 123, Shout 85258, 999 or A&E). General information only; it never
// replaces what a person's own GP, nurse or menopause specialist tells them, and no medicine (HRT or an
// antidepressant) should be stopped or changed without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const inform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/healthy-living/womens-health/later-years-around-50-years-and-over/menopause-and-post-menopause-health/${path}` });
const acas = (label: string, path: string): LearnSource => ({ label: `Acas: ${label}`, url: `https://www.acas.org.uk/${path}` });
const govuk = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_WHAT = nhs("What are menopause and perimenopause?", "conditions/menopause-and-perimenopause/what-are-menopause-and-perimenopause/");
const NHS_SYMPTOMS = nhs("Symptoms of menopause and perimenopause", "conditions/menopause-and-perimenopause/symptoms/");
const NHS_TREATMENT = nhs("Treatment for menopause and perimenopause", "conditions/menopause-and-perimenopause/treatment/");
const NHS_THINGS = nhs("Things you can do to help menopause and perimenopause symptoms", "conditions/menopause-and-perimenopause/things-you-can-do/");
const NHS_HRT_ABOUT = nhs("About hormone replacement therapy (HRT)", "medicines/hormone-replacement-therapy-hrt/about-hormone-replacement-therapy-hrt/");
const NHS_HRT_BENEFITS = nhs("Benefits and risks of hormone replacement therapy (HRT)", "medicines/hormone-replacement-therapy-hrt/benefits-and-risks-of-hormone-replacement-therapy-hrt/");
const NHS_HRT_SIDE = nhs("Side effects of hormone replacement therapy (HRT)", "medicines/hormone-replacement-therapy-hrt/side-effects-of-hormone-replacement-therapy-hrt/");
const NHS_HRT_WHEN = nhs("When to take hormone replacement therapy (HRT)", "medicines/hormone-replacement-therapy-hrt/when-to-take-hormone-replacement-therapy-hrt/");
const NHS_HRT_OTHER = nhs("Other medicines for menopause symptoms", "medicines/hormone-replacement-therapy-hrt/alternatives-to-hormone-replacement-therapy-hrt/other-medicines-for-menopause-symptoms/");
const NHS_HRT_HERBAL = nhs("Herbal remedies and complementary medicines for menopause symptoms", "medicines/hormone-replacement-therapy-hrt/alternatives-to-hormone-replacement-therapy-hrt/herbal-remedies-and-complementary-medicines-for-menopause-symptoms/");
const NHS_HRT_LIFESTYLE = nhs("Lifestyle changes to make if you're unable to take HRT", "medicines/hormone-replacement-therapy-hrt/alternatives-to-hormone-replacement-therapy-hrt/lifestyle-changes-to-make-if-youre-unable-to-take-hrt/");
const NHS_EARLY = nhs("Early or premature menopause", "conditions/early-or-premature-menopause/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_FIND_TT = nhs("Find NHS talking therapies for anxiety and depression", "nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_DEPRESSION = nhs("Depression in adults: overview", "mental-health/conditions/depression-in-adults/overview/");
const NHS_DEP_SYMPTOMS = nhs("Depression in adults: symptoms", "mental-health/conditions/depression-in-adults/symptoms/");
const NHS_ANTIDEPRESSANTS = nhs("Antidepressants", "medicines/antidepressants/");
const NHS_INSOMNIA = nhs("Insomnia", "conditions/insomnia/");
const NHS_EMM_SLEEP: LearnSource = { label: "NHS Every Mind Matters: Sleep", url: "https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/" };
const NHS_ALCOHOL = nhs("Calculating alcohol units", "live-well/alcohol-advice/calculating-alcohol-units/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const INFORM_MENO = inform("Menopause", "menopause/");
const INFORM_MENTAL = inform("Menopause and your mental wellbeing", "menopause-and-your-mental-wellbeing/");
const INFORM_SIGNS = inform("Signs and symptoms of menopause", "signs-and-symptoms-of-menopause/");
const INFORM_TREATING = inform("Treating menopause symptoms", "treating-menopause-symptoms/");
const INFORM_WORK = inform("Menopause and the workplace", "menopause-and-the-workplace/");
const INFORM_SEX = inform("Sexual wellbeing, intimacy and menopause", "sexual-wellbeing-intimacy-and-menopause/");
const INFORM_SUPPORT = inform("Supporting someone through the menopause", "supporting-someone-through-the-menopause/");

const NICE_NG23: LearnSource = { label: "NICE: Menopause: identification and management (NG23), recommendations", url: "https://www.nice.org.uk/guidance/ng23/chapter/Recommendations" };
const NICE_PUBLIC: LearnSource = { label: "NICE: Menopause: the care you should expect", url: "https://www.nice.org.uk/guidance/ng23/informationforpublic" };

const RCPSYCH_PS: LearnSource = { label: "Royal College of Psychiatrists: Menopause and mental health (position statement PS02/26)", url: "https://www.rcpsych.ac.uk/improving-care/campaigning-for-better-mental-health-policy/position-statements/2026-position-statements/menopause-and-mental-health-(ps02-26)" };
const RCPSYCH_PRESS: LearnSource = { label: "Royal College of Psychiatrists: Call for more action on menopause and women's mental health (1 March 2026)", url: "https://www.rcpsych.ac.uk/news-and-features/latest-news/detail/2026/03/01/davina-mccall-backs-the-royal-college-of-psychiatrists--call-for-more-action-on-menopause-and-women-s-mental-health" };
const RETHINK_MENO: LearnSource = { label: "Rethink Mental Illness: Menopause and mental health", url: "https://www.rethink.org/advice-and-information/living-with-mental-illness/health-wellbeing-and-neurodiversity/menopause-and-mental-health/" };
const MHUK_MENO: LearnSource = { label: "Mental Health UK: Menopause and mental health", url: "https://mentalhealth-uk.org/menopause-and-mental-health/" };
const MC_MENTAL: LearnSource = { label: "The Menopause Charity: Menopause and mental health", url: "https://themenopausecharity.org/information-and-support/symptoms/menopause-and-mental-health/" };

const ACAS_MENO = acas("Menopause at work", "menopause-at-work");
const ACAS_TALK = acas("Talking with workers about menopause", "menopause-at-work/talking-with-staff-about-the-menopause");
const ACAS_LAW = acas("Menopause and discrimination", "menopause-at-work/menopause-and-the-law");
const GOV_FLEX = govuk("Flexible working", "flexible-working");
const GOV_ADJUST = govuk("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact Samaritans", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SHOUT: LearnSource = { label: "Shout 85258: Get help", url: "https://giveusashout.org/get-help/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.";

export const perimenopauseAnswers: LearnArticle[] = [
  {
    id: "peri-what-happens",
    kicker: "Understanding",
    question: "What is happening to my mood around the menopause?",
    hook: "Hormone levels change in the years before periods stop. For many people that shows up in mood, sleep and focus as much as in hot flushes.",
    short: "Perimenopause is when your periods become irregular, and menopause is when they stop altogether, because hormone levels fall. Changes in your hormones can affect your mental health as well as your physical health. The mental symptoms of menopause are as real as the physical ones, and help is available.",
    sections: [
      {
        heading: "Perimenopause and menopause",
        paragraphs: [
          "Perimenopause happens when your periods become irregular, and menopause is when your periods stop altogether. Menopause is caused by a fall in hormone levels.",
          "It usually affects women between the ages of 45 and 55, but it can happen earlier. It can affect anyone who has periods, including some trans men, non-binary people and intersex people.",
          "Menopause itself means not having a period for 12 months when you are not using hormonal contraception. After this it is called postmenopause.",
        ],
      },
      {
        heading: "Why mood can change",
        paragraphs: [
          "Menopause happens when the ovaries stop producing as much of the hormone oestrogen and no longer release an egg each month. Changes in your hormones during menopause can affect your mental health as well as your physical health.",
          "Mental Health UK says research shows that when oestrogen levels drop, levels of the stress hormone cortisol can rise. Other hormones and brain chemicals are likely to be involved too, and some people are more sensitive to these changes than others, such as people who have had postnatal depression or strong premenstrual symptoms.",
        ],
      },
      {
        heading: "More than hormones",
        paragraphs: [
          "Many people have problems sleeping during perimenopause and menopause. Lack of sleep and tiredness can make irritability, concentration and anxiety worse.",
          "Menopause is also a big life change. It can happen alongside other changes, such as career changes, children leaving home or caring for ageing parents, which can add extra stress.",
        ],
      },
      {
        heading: "Real, and nothing to be ashamed of",
        paragraphs: [
          "The mental symptoms of menopause are as real as the physical ones, and you should not wait to seek help if you are struggling. Your local GP practice can help you get the right support.",
          "NICE, which writes guidance for the NHS, says menopause symptoms can vary from minor to severe and can last for short or long periods. They can include effects on mood, such as depressive symptoms.",
        ],
      },
    ],
    helps: [
      "Remember that the mental symptoms of menopause are as real as the physical ones.",
      "Do not wait to seek help if you are struggling; speak to your local GP practice.",
      "Look after your sleep where you can, as tiredness can make irritability and anxiety worse.",
      "Talk to people you trust, as sharing experiences can help you feel less isolated.",
      CRISIS,
    ],
    tryThisWeek: [
      "Remind yourself the symptoms are real.",
      "Contact your GP practice.",
      "Talk to someone you trust.",
    ],
    ask: "Could my mood changes be linked to perimenopause, and what could help?",
    interactive: {
      kind: "timeline",
      title: "The stages, one by one",
      steps: [
        { id: "peri", when: "Before periods stop", title: "Perimenopause", points: ["Periods become irregular, heavier or lighter.", "Mood, sleep and memory can change."] },
        { id: "meno", when: "12 months without a period", title: "Menopause", points: ["Usually between the ages of 45 and 55.", "It can happen earlier."] },
        { id: "post", when: "Afterwards", title: "Postmenopause", points: ["Some symptoms can carry on after menopause.", "Others ease over time."] },
        { id: "length", when: "Overall", title: "Usually 7 to 9 years", points: ["Sometimes longer, and symptoms can change.", "Hot flushes may give way to low mood or anxiety."] },
      ],
    },
    sources: [NHS_WHAT, NHS_SYMPTOMS, INFORM_MENO, INFORM_MENTAL, MHUK_MENO, NICE_NG23, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Are the mental symptoms of menopause real?",
      options: [{ text: "Yes, as real as the physical ones", right: true }, { text: "No, they are imagined" }, { text: "Only if hot flushes come too" }],
      why: "The mental symptoms of menopause are as real as the physical ones, and you should not wait to seek help if you are struggling.",
    },
  },
  {
    id: "peri-symptoms",
    kicker: "Symptoms",
    question: "Why do I feel anxious, irritable and foggy?",
    hook: "Mood swings, worry, lost words and broken sleep are common around the menopause. Knowing them by name can make them easier to talk about.",
    short: "You may have mood swings, low mood, anxiety or irritability, and problems with memory or concentration, often called brain fog. These can feel worse if you are not sleeping well. Symptoms are different for everyone, can change over time and usually last 7 to 9 years.",
    sections: [
      {
        heading: "Mood and feelings",
        paragraphs: [
          "You may have mood swings, low mood or depression around the menopause. Other common feelings include anxiety, anger and irritability, loss of confidence and loss of self-esteem.",
          "Some people have panic attacks, feel tense or nervous, or notice new fears. Others feel tearful, overwhelmed or less able to cope with pressure.",
        ],
      },
      {
        heading: "Memory, focus and brain fog",
        paragraphs: [
          "You may notice problems with your memory or concentration. This is often described as brain fog, or losing words.",
          "Mental Health UK says some people find it hard to focus or make decisions. Brain fog can in turn knock your confidence and lower your mood.",
        ],
      },
      {
        heading: "Sleep and night sweats",
        paragraphs: [
          "Not being able to get to sleep or stay asleep can make you feel irritable, stressed and anxious. Sleep problems may be worse if you also have night sweats.",
          "Mood, memory and concentration problems may feel worse if you have sleep problems and feel very tired.",
        ],
      },
      {
        heading: "Different for everyone",
        paragraphs: [
          "Perimenopause and menopause are different for everyone. Some people hardly have any symptoms, while for others they have a big impact on relationships, social life, family life and work.",
          "Symptoms usually last for 7 to 9 years, sometimes longer, and they can change. Hot flushes and night sweats may improve, and be replaced by other symptoms such as low mood and anxiety.",
          "Sometimes these symptoms are not recognised as menopause symptoms. Knowing what to expect can help you decide what to do.",
        ],
      },
      {
        heading: "Changes in what you do",
        paragraphs: [
          "Mental Health UK lists changes in behaviour too, such as withdrawing from social activities, losing motivation, or relying more on alcohol or caffeine.",
        ],
      },
    ],
    helps: [
      "Keep a note of your symptoms and how you are feeling, to talk through with a health professional.",
      "Ask your GP practice whether your symptoms are related to menopause; you can say if you would prefer to see a female health professional.",
      "Look after your sleep, as poor sleep can make mood and memory problems feel worse.",
      "Look for a Menopause Cafe, a helpful place to talk to other people about menopause.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note your symptoms for your GP.",
      "Protect your sleep where you can.",
      "Find a Menopause Cafe near you.",
    ],
    ask: "Could my anxiety, low mood and brain fog be symptoms of perimenopause?",
    interactive: {
      kind: "signs",
      title: "Symptoms you may notice",
      intro: "Tick any you notice. Many people have several, and they can change over time.",
      signs: ["Mood swings", "Low mood or sadness", "Anxiety or feeling tense", "Anger or irritability", "Panic attacks", "Loss of confidence or self-esteem", "Brain fog or losing words", "Poor memory or concentration", "Trouble getting to sleep or staying asleep", "Night sweats"],
      after: "These are common symptoms around the menopause. Take your list to your GP practice and say how they are affecting your daily life.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_SYMPTOMS, INFORM_MENTAL, INFORM_SIGNS, MHUK_MENO, MC_MENTAL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long do menopause symptoms usually last?",
      options: [{ text: "7 to 9 years, sometimes longer", right: true }, { text: "A few weeks" }, { text: "Exactly one year" }],
      why: "Symptoms usually last for 7 to 9 years, sometimes longer, and they can change.",
    },
  },
  {
    id: "peri-or-depression",
    kicker: "Telling the difference",
    question: "Is this the menopause, or is it depression?",
    hook: "Mood swings come and go. Depression is a low mood that stays. Both are real, both are common in midlife, and both can be treated.",
    short: "Mood changes are common around the menopause, but they should not be confused with depression, where very low mood is more constant for longer periods. Menopause can increase the risk of depression. See a GP if you have symptoms of depression for most of the day, every day, for more than 2 weeks.",
    sections: [
      {
        heading: "Mood changes and depression",
        paragraphs: [
          "You might have mood changes as a result of menopause, but this should not be confused with depression. Depression is a more serious condition, where very low mood is more constant for longer periods of time.",
          "Menopause can increase the risk of depression. Mental Health UK says it is normal to have mood swings during this time, but depression involves feeling low for a longer period.",
          "The Menopause Charity says research suggests more than half of all perimenopausal women report an increase in depressive symptoms.",
        ],
      },
      {
        heading: "Signs of depression",
        paragraphs: [
          "When you are depressed, you feel persistently sad for weeks or months, rather than just a few days. Symptoms can include feeling hopeless, losing interest in things you used to enjoy, and feeling tearful.",
          "The symptoms persist and are bad enough to interfere with your work, social life and family life. Depression can come on gradually, and it can sometimes take a friend or family member to suggest something is wrong.",
        ],
      },
      {
        heading: "Why it can be hard to tell",
        paragraphs: [
          "Many symptoms overlap. Hot flushes, night sweats, poor sleep and brain fog can make it hard to separate menopause from mental health concerns, and midlife often brings extra stresses too.",
          "The Royal College of Psychiatrists says menopause is linked with anxiety, depression and changes in thinking. Sometimes it can trigger or worsen serious mental illness.",
          "If you already live with a mental health condition, your usual symptoms may feel stronger during this time. Note any changes, so you can share them with your GP.",
        ],
      },
      {
        heading: "What treatment may look like",
        paragraphs: [
          "NICE says HRT can be considered for depressive symptoms that start around the same time as other menopause symptoms, when they do not meet the criteria for a diagnosis of depression. CBT is another option.",
          "If you have low mood, depression or anxiety caused by perimenopause or menopause, you may be offered antidepressants. If depression is suspected or diagnosed, NICE says doctors should follow its guidance on depression alongside its menopause guidance.",
          "Depression is a real illness, not a sign of weakness. With the right treatment and support, most people with depression can make a full recovery.",
        ],
      },
    ],
    helps: [
      "See a GP if you have symptoms of depression for most of the day, every day, for more than 2 weeks.",
      "Make a list of your symptoms and questions, including changes to your periods, before you see your GP.",
      "If you already have a mental health condition, note any changes in your symptoms to share.",
      "If you take an antidepressant, do not stop taking it suddenly or without talking to your doctor first.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note how long low moods last.",
      "List your symptoms for your GP.",
      "See a GP if it lasts over 2 weeks.",
    ],
    ask: "Do you think my low mood is linked to the menopause, to depression, or to both?",
    interactive: {
      kind: "risk-check",
      title: "Things that can add to low mood",
      intro: "Tick any that apply. Some can change, and all are worth mentioning to your GP.",
      items: [
        { id: "sleep", label: "Poor sleep or night sweats", note: "Lack of sleep and tiredness can make irritability, concentration and anxiety worse.", changeable: true },
        { id: "history", label: "Postnatal depression or strong PMS", note: "Some people who have had these are more sensitive to hormone changes.", changeable: false },
        { id: "existing", label: "An existing mental health condition", note: "Symptoms may feel stronger during menopause. Note any changes to share with your GP.", changeable: false },
        { id: "stress", label: "Extra stress in midlife", note: "Raising children, caring for ageing parents or big life changes can increase the chance of feeling low.", changeable: false },
        { id: "alcohol", label: "Relying more on alcohol or caffeine", note: "Mental Health UK says coffee and alcohol can make symptoms worse.", changeable: true },
        { id: "alone", label: "Keeping it all to yourself", note: "Sharing how you feel with people you trust, or a GP, can help you process what you are going through.", changeable: true },
      ],
    },
    sources: [INFORM_MENTAL, NHS_DEP_SYMPTOMS, NHS_DEPRESSION, MHUK_MENO, NICE_NG23, NHS_TREATMENT, RCPSYCH_PS, NHS_ANTIDEPRESSANTS, MC_MENTAL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How is depression different from menopause mood changes?",
      options: [{ text: "The very low mood is more constant, for longer", right: true }, { text: "There is no difference" }, { text: "Depression only lasts a day or two" }],
      why: "Depression is a more serious condition, where very low mood is more constant for longer periods of time.",
    },
  },
  {
    id: "peri-getting-help",
    kicker: "Getting help",
    question: "How do I talk to my GP about mood and the menopause?",
    hook: "A short appointment can feel too small for everything you want to say. A little preparation helps you be heard.",
    short: "Contact a GP if you think you have symptoms of perimenopause or menopause and want to know your options. There is no routine test, and a doctor may diagnose it from your age and symptoms. Writing down your symptoms and questions, and booking a longer appointment if you need one, can help.",
    sections: [
      {
        heading: "When to see a GP",
        paragraphs: [
          "Contact your GP if you think you have symptoms of menopause or perimenopause and want to know what your options are. Early advice can help reduce the effects on your health, relationships and work.",
          "See a GP if you are under 45 and think you are having menopause symptoms, as this may be early or premature menopause.",
          "A poll for the Royal College of Psychiatrists found that just one in five UK adults think a new mental illness can be associated with the menopause. The College says many women are not seeking or getting help because they are not aware of the link.",
        ],
      },
      {
        heading: "How it is diagnosed",
        paragraphs: [
          "There is no routine test for perimenopause and menopause. A doctor may diagnose it based on your age and symptoms.",
          "NICE says laboratory tests are not needed to identify perimenopause or menopause in otherwise healthy people aged 45 or over who have symptoms. A blood test may sometimes be used if you are 40 to 45, or under 40.",
        ],
      },
      {
        heading: "Before the appointment",
        paragraphs: [
          "Mental Health UK suggests making a list of your symptoms and questions, and tracking your periods. If you have a mental health condition, note any changes in your symptoms.",
          "You could ask if a GP with a menopause specialism is available, book a double appointment if you need more time, or bring a partner or friend for support. Tell the GP about any medicines or herbal remedies you are taking.",
        ],
      },
      {
        heading: "During the appointment",
        paragraphs: [
          "Talk about your physical and emotional symptoms, and your mental health in the past compared with now. NICE says your healthcare professional should discuss the treatment options with you, with their benefits and risks.",
          "Questions you could ask include how a treatment will help, how soon you will feel better, and what the benefits and risks are.",
        ],
      },
      {
        heading: "If you do not feel heard",
        paragraphs: [
          "Your symptoms should be taken seriously. Mental Health UK suggests rebooking and going prepared with notes, asking to see another GP or one with menopause expertise, or asking for a referral to a menopause clinic if symptoms persist or are complex.",
          "If a treatment is not working for you, you can try something different. You can always seek a second opinion if you are not sure about the options offered to you.",
        ],
      },
    ],
    helps: [
      "Write down your symptoms, how they affect you, and your questions before the appointment.",
      "Book a double appointment if you need more time.",
      "Ask if a GP with a menopause specialism is available.",
      "Bring a partner or friend for support if that helps.",
      "Seek a second opinion if you are not sure about the options offered to you.",
      CRISIS,
    ],
    tryThisWeek: [
      "List your symptoms and questions.",
      "Ask for a double appointment.",
      "Take someone with you if it helps.",
    ],
    ask: "Could my symptoms be perimenopause, and which treatment options would suit me?",
    interactive: {
      kind: "scenarios",
      title: "Getting the most from your appointment",
      scenarios: [
        {
          id: "time",
          situation: "You have a lot to say and worry one appointment will not be enough.",
          options: [{ text: "Book a double appointment", best: true }, { text: "Rush through it all quickly" }],
          why: "Mental Health UK suggests booking a double appointment if you need more time.",
        },
        {
          id: "test",
          situation: "You are 48 and wonder whether you need a hormone test first.",
          options: [{ text: "Describe your symptoms to the GP", best: true }, { text: "Wait until you have a test" }],
          why: "There is no routine test for perimenopause and menopause. A doctor may diagnose it based on your age and symptoms.",
        },
        {
          id: "mood",
          situation: "You are not sure whether to mention your low mood as well.",
          options: [{ text: "Mention mood and physical symptoms", best: true }, { text: "Only mention hot flushes" }],
          why: "Talk about your physical and emotional symptoms, and your mental health in the past compared with now.",
        },
        {
          id: "heard",
          situation: "You leave feeling your symptoms were brushed aside.",
          options: [{ text: "Rebook with notes, or see another GP", best: true }, { text: "Stop asking for help" }],
          why: "Your symptoms should be taken seriously. You can ask to see another GP or one with menopause expertise.",
        },
      ],
    },
    sources: [NHS_SYMPTOMS, NHS_WHAT, NICE_NG23, MHUK_MENO, INFORM_TREATING, NHS_HRT_ABOUT, NICE_PUBLIC, RCPSYCH_PRESS, INFORM_SIGNS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is there a routine test for perimenopause?",
      options: [{ text: "No, it is usually diagnosed from age and symptoms", right: true }, { text: "Yes, a blood test for everyone" }, { text: "Yes, a scan" }],
      why: "There is no routine test for perimenopause and menopause. A doctor may diagnose it based on your age and symptoms.",
    },
  },
  {
    id: "peri-hrt",
    kicker: "Treatment",
    question: "Can HRT help my mood?",
    hook: "HRT replaces the hormones that fall around the menopause. It can ease anxiety, low mood and sleep problems as well as hot flushes.",
    short: "Hormone replacement therapy (HRT) replaces oestrogen and progesterone, which fall to low levels around the menopause. It can help with mood swings, anxiety and low mood caused by menopause, as well as hot flushes and sleep problems. For most people under 60 with symptoms the benefits are likely to outweigh the risks, and a GP can help you decide.",
    sections: [
      {
        heading: "What HRT is",
        paragraphs: [
          "HRT is a treatment used to help menopause symptoms. It replaces the hormones oestrogen and progesterone, which fall to low levels as you approach the menopause.",
          "Oestrogen is the main type of HRT, taken as tablets or used as patches, spray or gel. If you take oestrogen and have not had a hysterectomy, it is important to take progestogen as well, to protect your womb.",
        ],
      },
      {
        heading: "How it can help mood",
        paragraphs: [
          "HRT can help with mood swings, anxiety and low mood caused by menopause. It can also help with hot flushes, night sweats and sleep problems.",
          "NICE says HRT can be considered for depressive symptoms that start around the same time as other menopause symptoms. Mental Health UK says HRT is often used alongside other treatments, such as talking therapy.",
          "The Menopause Charity says physical symptoms often improve quickly, but psychological symptoms can sometimes take a little longer. It suggests being patient while you find the right type and dose.",
        ],
      },
      {
        heading: "Starting, and reviews",
        paragraphs: [
          "It is your choice whether to take HRT and when to start. You do not need to wait until your symptoms are severe, or until your periods stop completely.",
          "You will usually start with a low dose, which may be increased later, and your symptoms should improve after a few days or weeks. A GP will usually review it 3 months after you start, then usually once a year.",
          "If your symptoms do not improve or you get side effects, a GP may suggest changing your dose or type of HRT, or refer you to a menopause specialist.",
        ],
      },
      {
        heading: "Benefits and risks",
        paragraphs: [
          "The benefits of HRT usually outweigh the risks. If you are under 60, have menopause symptoms and are not at high risk of breast cancer or blood clots, the benefits are likely to outweigh the risks.",
          "Combined HRT can slightly increase the risk of breast cancer, by around 5 extra cases in every 1,000 women who take it for 5 years. HRT tablets can increase the risk of blood clots, but the risk is still very low, and patches, sprays and gels do not increase it.",
          "HRT may not be suitable if you have a history of breast, ovarian or womb cancer, untreated high blood pressure or liver disease. A GP will help you decide.",
        ],
      },
      {
        heading: "Side effects and mood",
        paragraphs: [
          "Side effects are usually mild and pass within 3 months. Oestrogen and progestogen can both sometimes cause mood changes, including low mood, and side effects can be similar to menopause symptoms, so it might not be the HRT causing them.",
          "Speak to a GP if side effects are severe or last longer than 3 months. Talk to a GP if you are thinking about stopping HRT, as reducing the dose gradually is usually recommended.",
        ],
      },
    ],
    helps: [
      "Talk to a doctor, nurse or pharmacist about HRT and the other options available.",
      "Ask how HRT will help you, how soon you will feel better, and what the benefits and risks are.",
      "Carry on for at least 3 months if possible, as side effects usually improve over time.",
      "Go to your review, usually 3 months after starting, and say how your mood has been.",
      "Talk to a GP before stopping HRT.",
      CRISIS,
    ],
    tryThisWeek: [
      "Write down your HRT questions.",
      "Book your 3-month review.",
      "Note any changes in your mood.",
    ],
    ask: "Would HRT help my mood and sleep, and which type would suit me?",
    interactive: {
      kind: "flip-cards",
      title: "HRT, card by card",
      intro: "Turn each card to see when it is used and what it does. A GP will help you choose what suits you.",
      cards: [
        { id: "oestrogen", front: "Oestrogen", when: "The main type of HRT", back: "Tablets, patches, spray or gel. It can help mood swings, anxiety, low mood, hot flushes and sleep problems." },
        { id: "progestogen", front: "Progestogen", when: "If you still have a womb", back: "Protects your womb when you take oestrogen. Taken as tablets, a combined patch or the hormonal coil." },
        { id: "testosterone", front: "Testosterone", when: "For low sex drive", back: "Gel or cream can help low libido for some. You may get it on prescription from a menopause specialist." },
        { id: "vaginal", front: "Vaginal oestrogen", when: "For vaginal dryness", back: "A low dose that does not increase the risk of breast cancer or blood clots." },
        { id: "review", front: "Your 3-month review", when: "After starting or changing HRT", back: "A GP checks how well it is working. After that, you will usually have 1 review a year." },
      ],
    },
    sources: [NHS_HRT_ABOUT, NHS_HRT_BENEFITS, NHS_TREATMENT, NICE_NG23, NHS_HRT_WHEN, NHS_HRT_SIDE, MHUK_MENO, MC_MENTAL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the NHS say HRT can help with?",
      options: [{ text: "Anxiety and low mood caused by menopause, among other symptoms", right: true }, { text: "Only hot flushes" }, { text: "Nothing to do with mood" }],
      why: "HRT can help with mood swings, anxiety and low mood caused by menopause. It can also help with hot flushes, night sweats and sleep problems.",
    },
  },
  {
    id: "peri-talking",
    kicker: "Treatment",
    question: "Can CBT help with menopause mood changes?",
    hook: "CBT does not change your hormones. It can change how you handle what they bring: low mood, worry, poor sleep and even hot flushes.",
    short: "Cognitive behavioural therapy (CBT) is a talking therapy that can help with low mood and feelings of anxiety around the menopause, and with sleep problems and hot flushes. There is a menopause-specific type of CBT. In England, you can refer yourself to NHS talking therapies without seeing a GP first.",
    sections: [
      {
        heading: "How CBT can help",
        paragraphs: [
          "CBT is a type of talking therapy that can help with low mood and feelings of anxiety around the menopause. It can also help with sleep problems and with hot flushes.",
          "NICE says menopause-specific CBT can be considered for hot flushes, sleep problems and depressive symptoms linked to the menopause, either alongside HRT or for people who cannot take HRT or prefer not to.",
        ],
      },
      {
        heading: "What happens in CBT",
        paragraphs: [
          "A therapist helps you change how you think and act. You talk about situations you find difficult, and how they make you think, feel and act.",
          "This could include questioning unhelpful thoughts, noticing your emotions and physical feelings without reacting to them, and doing activities you have been avoiding. You will usually be asked to practise what you have learned between sessions.",
          "Mental Health UK says CBT can help by breaking problems down so they feel more manageable, and by interrupting negative thinking patterns.",
        ],
      },
      {
        heading: "Ways to have it",
        paragraphs: [
          "You can have CBT as guided self-help with a workbook or online course, in 1-to-1 sessions, or as part of a group. It can be done in person, online or on the phone, and you will usually have between 5 and 15 sessions.",
          "NICE says the options offered should take into account your preferences and needs, such as face-to-face or remote sessions, individual or group sessions, or self-help.",
        ],
      },
      {
        heading: "Other talking therapies",
        paragraphs: [
          "Counselling and psychotherapy can also help you adjust to the changes of this stage of life. Mental Health UK says they give you space to explore the emotional and personal impact of menopause, such as identity shifts or grief around fertility or ageing.",
          "Counselling and mindfulness are among the self-help measures NHS inform suggests for mood changes. Mindfulness helps you notice your thoughts and feelings as they happen, in the moment.",
        ],
      },
      {
        heading: "How to get it",
        paragraphs: [
          "In England, you can refer yourself to NHS talking therapies without speaking to a GP. You need to be registered with a GP and aged 18 or over, or 16 or over in some areas, and you do not need a diagnosed mental health condition.",
          "Talking therapies are sometimes available for free through your employer or local charities. If you choose a private therapist, make sure they are registered with a professional organisation accredited by the Professional Standards Authority.",
          "If early or premature menopause is affecting your mental health, you can also get NHS talking therapies without seeing a GP first.",
        ],
      },
    ],
    helps: [
      "Refer yourself to NHS talking therapies, or ask your GP about CBT.",
      "Ask whether menopause-specific CBT is available.",
      "Choose the way that suits you: in person, online, in a group or as guided self-help.",
      "Practise what you learn between sessions, as this is important for CBT to work.",
      "Check whether your employer offers free talking therapies.",
      CRISIS,
    ],
    tryThisWeek: [
      "Find your local talking therapies service.",
      "Ask about menopause-specific CBT.",
      "Practise between sessions.",
    ],
    ask: "Can I be referred for CBT, and is menopause-specific CBT available here?",
    interactive: {
      kind: "timeline",
      title: "From referral to finishing CBT",
      steps: [
        { id: "refer", when: "Step 1", title: "Refer yourself", points: ["Or ask your GP to refer you.", "You do not need a diagnosis."] },
        { id: "assess", when: "Step 2", title: "An assessment", points: ["A therapist asks about your symptoms.", "In person, online or on the phone."] },
        { id: "sessions", when: "Step 3", title: "Your sessions", points: ["Usually between 5 and 15.", "1-to-1, in a group or as guided self-help."] },
        { id: "practise", when: "Between sessions", title: "Practise", points: ["Try out what you have learned.", "You may keep a worksheet or diary."] },
        { id: "after", when: "Afterwards", title: "Keep using the skills", points: ["Your therapist helps you plan this.", "See a GP if you are still struggling."] },
      ],
    },
    sources: [NHS_THINGS, NICE_NG23, NHS_CBT, NHS_TT, NHS_FIND_TT, MHUK_MENO, INFORM_TREATING, NHS_EARLY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Can CBT help with hot flushes as well as mood?",
      options: [{ text: "Yes, it can help with both", right: true }, { text: "No, only with mood" }, { text: "No, only with sleep" }],
      why: "CBT is a type of talking therapy that can help with low mood and feelings of anxiety around the menopause. It can also help with sleep problems and with hot flushes.",
    },
  },
  {
    id: "peri-other-medicines",
    kicker: "Treatment",
    question: "What if I cannot take HRT, or do not want to?",
    hook: "HRT is not the only option. Other medicines and therapies can help, and natural does not always mean safe.",
    short: "If HRT does not work for you, you cannot take it, or you do not want to, other treatments are available. If you have low mood, depression or anxiety caused by the menopause, you may be offered antidepressants, and other medicines can help hot flushes. There is very little evidence for herbal remedies, so talk to a doctor or pharmacist first.",
    sections: [
      {
        heading: "When other medicines are used",
        paragraphs: [
          "If HRT does not work for your symptoms, you cannot take it for some reason, or you do not want to, other types of treatment are available. If you have had breast cancer, for example, you will usually be advised not to take HRT.",
          "Talk to a GP about how to improve your symptoms and which medicines may be suitable for you.",
        ],
      },
      {
        heading: "Antidepressants",
        paragraphs: [
          "If you have low mood, depression or anxiety caused by perimenopause or menopause, you may be offered antidepressants. The 2 types used are SSRIs and SNRIs, and your doctor will discuss the possible benefits and risks with you.",
          "NHS inform says that unless you have been diagnosed with depression, there are other treatment options that are more appropriate. Mental Health UK says antidepressants should not be the first choice for low mood related to the menopause.",
          "Antidepressants usually take 1 to 2 weeks to start having an effect and up to 8 weeks to work fully. Side effects can include feeling agitated, shaky or anxious, feeling sick, feeling dizzy and a reduced sex drive, and they usually improve over time.",
        ],
      },
      {
        heading: "Medicines for hot flushes",
        paragraphs: [
          "If you have hot flushes and night sweats, you may be offered CBT, or if that does not help, a doctor may suggest clonidine or an antidepressant. Clonidine does not affect hormone levels, and it may take 2 to 4 weeks to notice its effects.",
          "NICE recommends a medicine called fezolinetant as an option for moderate to severe hot flushes when HRT is unsuitable.",
        ],
      },
      {
        heading: "Herbal and natural remedies",
        paragraphs: [
          "Herbal remedies such as red clover and black cohosh are sometimes sold for menopause symptoms. But there is very little evidence to show how well they work, or how safe they are.",
          "Some remedies, especially St John's wort, may cause serious side effects if taken with other medicines. Natural does not necessarily mean safe, and the quality and ingredients cannot always be guaranteed.",
          "Bioidentical hormones are not recommended, because they are not regulated and it is not clear how safe or effective they are. Body identical hormones are different: they are regulated and can be prescribed.",
        ],
      },
      {
        heading: "Taking medicines safely",
        paragraphs: [
          "If you are prescribed an antidepressant, do not stop taking it suddenly or without talking to your doctor first. They will help you agree a plan to reduce the dose gradually.",
          "It is not common, but some people have suicidal thoughts or an urge to self-harm when they start taking an antidepressant. Speak to your doctor straight away if this happens.",
        ],
      },
    ],
    helps: [
      "Ask a GP which non-hormonal treatments may suit you.",
      "Give an antidepressant time, as it can take up to 8 weeks to work fully.",
      "Talk to your doctor if you are finding side effects hard to manage.",
      "Never stop an antidepressant suddenly; your doctor will help you reduce it gradually.",
      "Ask a GP or pharmacist for advice before trying a herbal remedy or complementary therapy.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask your GP about non-hormonal options.",
      "Check herbal remedies with a pharmacist.",
      "Keep taking medicines as prescribed.",
    ],
    ask: "If HRT is not right for me, which other treatments could help my mood and hot flushes?",
    interactive: {
      kind: "flip-cards",
      title: "Other options, card by card",
      intro: "Turn each card to see when each one is used. Always talk to your doctor or pharmacist before starting or changing a medicine.",
      cards: [
        { id: "antidepressants", front: "Antidepressants (SSRIs or SNRIs)", when: "For low mood, depression or anxiety", back: "Usually 1 to 2 weeks to start working and up to 8 weeks to work fully. Never stop one suddenly." },
        { id: "clonidine", front: "Clonidine", when: "For hot flushes and night sweats", back: "Tablets taken 2 times a day. It does not affect hormone levels, and may take 2 to 4 weeks to work." },
        { id: "fezolinetant", front: "Fezolinetant", when: "Moderate to severe hot flushes", back: "Recommended by NICE as an option when HRT is unsuitable." },
        { id: "cbt", front: "CBT", when: "For mood, sleep and hot flushes", back: "A talking therapy that can help with low mood, anxiety, sleep problems and hot flushes." },
        { id: "herbal", front: "Herbal remedies", when: "Sold in health shops", back: "Very little evidence they work or are safe. Some, like St John's wort, can react with other medicines." },
      ],
    },
    sources: [NHS_TREATMENT, NHS_HRT_OTHER, NICE_NG23, NHS_ANTIDEPRESSANTS, NHS_HRT_HERBAL, MHUK_MENO, INFORM_MENTAL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long can an antidepressant take to work fully?",
      options: [{ text: "Up to 8 weeks", right: true }, { text: "A few hours" }, { text: "One day" }],
      why: "Antidepressants usually take 1 to 2 weeks to start having an effect and up to 8 weeks to work fully.",
    },
  },
  {
    id: "peri-sleep",
    kicker: "Sleep",
    question: "Why can't I sleep, and what helps with night sweats?",
    hook: "Night sweats wake you, worries keep you up, and tiredness makes the next day harder. Small changes to the bedroom and routine can help.",
    short: "Many people have problems sleeping around the menopause, and night sweats can make it worse. Lack of sleep can make irritability, anxiety and poor concentration worse. Keeping cool at night, a regular routine and CBT can help, and HRT can help with night sweats and sleep problems caused by menopause.",
    sections: [
      {
        heading: "How sleep and mood are linked",
        paragraphs: [
          "Not being able to get to sleep or stay asleep can make you feel irritable, stressed and anxious. Sleep problems may be worse if you also have night sweats.",
          "Many women going through perimenopause or menopause have problems sleeping. Addressing sleep problems may help you manage some of the mental health symptoms of menopause.",
        ],
      },
      {
        heading: "Keeping cool at night",
        paragraphs: [
          "Keep your bedroom cool at night: 16 to 18°C may seem cold but is ideal for sleeping. Loose cotton nightwear, cotton sheets and a light blanket in layers rather than a heavy duvet can help you feel cooler.",
          "Taking a cool shower, using a fan or having a cold drink can help. Cutting down on caffeine, alcohol and spicy food may help too, as they have all been known to trigger hot flushes.",
        ],
      },
      {
        heading: "If you are lying awake",
        paragraphs: [
          "If you find you are lying awake for a long time, get up and do something else, such as reading a chapter of a book in another room, for around 15 minutes. Then try again.",
          "Try to wake up and get out of bed at the same time every day, and relax for at least 1 hour before bed. Do not drink alcohol, tea or coffee for at least 6 hours before going to bed, and avoid using devices right before bed.",
          "Alcohol can make you feel sleepy at first, but it can lead to poor sleep later in the night.",
        ],
      },
      {
        heading: "Treatment that can help",
        paragraphs: [
          "CBT can help with sleep problems. NICE says menopause-specific CBT can be considered for sleep problems, such as waking in the night, that come with hot flushes and night sweats.",
          "HRT can help with night sweats and sleep problems caused by menopause.",
          "See a GP if changing your sleeping habits has not helped, you have had trouble sleeping for months, or it is making it hard to cope. GPs now rarely prescribe sleeping pills, as they can have serious side effects.",
        ],
      },
    ],
    helps: [
      "Keep your bedroom cool, around 16 to 18°C, and wear loose cotton nightwear.",
      "Keep to regular sleep routines, getting up at the same time every day.",
      "Do not drink alcohol, tea or coffee for at least 6 hours before bed.",
      "If you are lying awake, get up for around 15 minutes, then try again.",
      "See a GP if poor sleep is affecting your daily life in a way that makes it hard to cope.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep the bedroom cool.",
      "Get up at the same time daily.",
      "No caffeine or alcohol 6 hours before bed.",
    ],
    ask: "Could my sleep problems be linked to the menopause, and would CBT or HRT help?",
    interactive: {
      kind: "scenarios",
      title: "Moments in the night",
      scenarios: [
        {
          id: "sweat",
          situation: "A night sweat wakes you and you feel too hot to settle.",
          options: [{ text: "Cool down with a fan or a cold drink", best: true }, { text: "Add another blanket" }],
          why: "Taking a cool shower, using a fan or having a cold drink can help with hot flushes and night sweats.",
        },
        {
          id: "awake",
          situation: "You have been lying awake for a long time.",
          options: [{ text: "Get up for around 15 minutes, then try again", best: true }, { text: "Stay in bed and keep trying" }],
          why: "If you are lying awake for a long time, get up and do something else for around 15 minutes, then try again.",
        },
        {
          id: "nightcap",
          situation: "You wonder whether a drink would help you drop off.",
          options: [{ text: "Skip alcohol close to bedtime", best: true }, { text: "Have a drink to relax" }],
          why: "Alcohol can make you feel sleepy at first, but it can lead to poor sleep later in the night.",
        },
        {
          id: "lie-in",
          situation: "You slept badly and want to sleep in to catch up.",
          options: [{ text: "Get up at your usual time", best: true }, { text: "Sleep in late" }],
          why: "Do not sleep in after a bad night's sleep. Stick to your regular sleeping hours instead.",
        },
      ],
    },
    sources: [NHS_SYMPTOMS, INFORM_MENTAL, INFORM_TREATING, NHS_INSOMNIA, NHS_EMM_SLEEP, NHS_THINGS, NICE_NG23, NHS_HRT_BENEFITS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What bedroom temperature does NHS inform call ideal for sleeping?",
      options: [{ text: "16 to 18°C", right: true }, { text: "24 to 26°C" }, { text: "As warm as possible" }],
      why: "Keep your bedroom cool at night: 16 to 18°C may seem cold but is ideal for sleeping.",
    },
  },
  {
    id: "peri-exercise-food",
    kicker: "Living well",
    question: "Can exercise, food and cutting down on alcohol help my mood?",
    hook: "No single change fixes menopause symptoms. But moving more, eating well and drinking less can lift mood, help sleep and protect your bones.",
    short: "Eating well, exercising and looking after your mental wellbeing can help with symptoms during perimenopause and menopause. Regular exercise and relaxing activities such as yoga can help with mood swings and anxiety. Not smoking and keeping within the recommended alcohol limit may help too.",
    sections: [
      {
        heading: "Why everyday habits matter",
        paragraphs: [
          "Eating well, exercising and looking after your mental wellbeing can help with symptoms during perimenopause and menopause. It can also help you keep as well as possible in the future.",
          "These lifestyle changes can be helpful alongside HRT, or if you are unable to take HRT or decide not to.",
        ],
      },
      {
        heading: "Moving more",
        paragraphs: [
          "To ease mood changes, try to get as much rest as you can, exercise regularly and do relaxing activities. Yoga, tai chi and meditation can all help.",
          "Regular physical activity can reduce hot flushes and improve sleep. Weight-bearing activities such as walking, running and dancing, and resistance exercises using weights, can help protect against weakening bones.",
          "Mental Health UK says movement can lift mood and improve sleep. NICE says it is important to keep up muscle mass and strength through physical activity.",
        ],
      },
      {
        heading: "Eating well",
        paragraphs: [
          "Try to eat a healthy, balanced diet. Eat calcium-rich food like milk, yoghurt and kale if you can, to keep your bones healthy.",
          "Caffeine and spicy food have been known to trigger hot flushes. Mental Health UK suggests cutting down on refined sugar, coffee and alcohol, which can make symptoms worse.",
        ],
      },
      {
        heading: "Alcohol and smoking",
        paragraphs: [
          "Try not to drink more than the recommended alcohol limit, as it may affect your symptoms. The NHS advises not drinking more than 14 units a week on a regular basis, spread over 3 or more days.",
          "Do not smoke, as this can make menopause symptoms worse. Giving up can help reduce hot flushes.",
          "If someone you love is going through the menopause, NHS inform suggests changing how you spend time together, such as cooking a healthy meal together rather than going to the pub.",
        ],
      },
    ],
    helps: [
      "Exercise regularly, including weight-bearing and strength exercises.",
      "Try relaxing activities such as yoga, tai chi or meditation.",
      "Eat a healthy, balanced diet, with calcium-rich food like milk, yoghurt and kale.",
      "Cut down on caffeine, alcohol and spicy food, which have been known to trigger hot flushes.",
      "Do not smoke, as this can make menopause symptoms worse.",
      CRISIS,
    ],
    tryThisWeek: [
      "Exercise regularly, with some strength work.",
      "Try a yoga or tai chi session.",
      "Cut down on caffeine and alcohol.",
    ],
    ask: "Which kinds of exercise and other changes would help my symptoms most?",
    interactive: {
      kind: "risk-check",
      title: "Habits that can make symptoms worse",
      intro: "Tick any that apply. Each is something you can change, at your own pace.",
      items: [
        { id: "smoking", label: "Smoking", note: "Smoking can make menopause symptoms worse. Giving up can help reduce hot flushes.", changeable: true },
        { id: "alcohol", label: "Drinking over the limit", note: "Alcohol may affect your symptoms. The NHS advises no more than 14 units a week.", changeable: true },
        { id: "caffeine", label: "Lots of caffeine", note: "Caffeine has been known to trigger hot flushes.", changeable: true },
        { id: "spicy", label: "Spicy food", note: "Spicy food has been known to trigger hot flushes.", changeable: true },
        { id: "inactive", label: "Little exercise", note: "Regular physical activity can reduce hot flushes and improve sleep.", changeable: true },
        { id: "no-rest", label: "No time to relax", note: "Relaxing activities such as yoga, tai chi or meditation can help with mood changes.", changeable: true },
      ],
    },
    sources: [NHS_THINGS, INFORM_TREATING, NHS_HRT_LIFESTYLE, MHUK_MENO, NHS_ALCOHOL, INFORM_SUPPORT, NICE_NG23, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which of these can make menopause symptoms worse?",
      options: [{ text: "Smoking", right: true }, { text: "Eating calcium-rich food" }, { text: "Regular exercise" }],
      why: "Do not smoke, as this can make menopause symptoms worse.",
    },
  },
  {
    id: "peri-work",
    kicker: "Work",
    question: "How can I cope with menopause symptoms at work?",
    hook: "Brain fog in a meeting, a hot flush at the desk, a sleepless night before a shift. Small changes at work can make a real difference.",
    short: "Menopause can affect people physically and mentally at work. You can talk to your manager, or someone else such as HR, about changes that would help, like flexible hours, more breaks or a fan. In some cases menopause can count as a disability, and then employers must make reasonable adjustments.",
    sections: [
      {
        heading: "How it can affect work",
        paragraphs: [
          "Menopause can affect people both physically and mentally. Symptoms or working conditions can sometimes affect your ability to concentrate or to do your job to the best of your ability.",
          "In a British Menopause Society survey, 45% of women felt that menopause symptoms had a negative impact on their work.",
          "Acas says support at work can help prevent people losing confidence, hiding the reasons for time off, having more stress, anxiety and depression, or leaving their job.",
        ],
      },
      {
        heading: "Talking to your manager",
        paragraphs: [
          "If symptoms are affecting your work, you can speak to your manager. Before you do, it can help to note your symptoms and when they affect you, and to think of changes that could help.",
          "Acas says conversations should be confidential and held in private, and you can decide how much to share. If you are not comfortable talking to your manager, you could speak to HR, a trade union representative, a counsellor from an employee assistance programme, or a menopause or wellbeing champion.",
          "A poll for the Royal College of Psychiatrists found that just one in four UK women surveyed feel comfortable speaking to a male boss about the menopause.",
        ],
      },
      {
        heading: "Changes that can help",
        paragraphs: [
          "Changes an employer could make include flexible start and finish times, breaks when needed, a private area to rest, working from home when practical, and changing certain duties.",
          "Moving to a cooler part of the office, asking for a fan, a different uniform, or using phone reminders and notes to help with brain fog can also help.",
          "All employees have the legal right to request flexible working from their first day in a job. This can include changing their hours, when they start or finish, the days they work or where they work.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Menopause is not a specific protected characteristic under the Equality Act 2010. But treating someone less favourably because of their symptoms could be discrimination if it relates to age, disability, gender reassignment or sex.",
          "In some cases, menopause could be considered a disability. Employers must then make reasonable adjustments, so that workers with physical or mental health conditions are not substantially disadvantaged.",
        ],
      },
    ],
    helps: [
      "Note your symptoms and when they affect your work before talking to your manager.",
      "Think about practical changes that would help, such as a fan or flexible working.",
      "Talk to HR, occupational health or a trade union representative if you would rather not start with your manager.",
      "Make a flexible working request if a longer-term change to your job would help.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note when symptoms affect work.",
      "List changes that would help.",
      "Book a private chat with someone.",
    ],
    ask: "How might my symptoms be affecting my work, and what support could help?",
    interactive: {
      kind: "flip-cards",
      title: "Support at work, card by card",
      intro: "Turn each card to see what it is and when it can help.",
      cards: [
        { id: "talk", front: "A private conversation", when: "When symptoms affect your work", back: "Confidential, in private, and you decide how much you want to share." },
        { id: "someone-else", front: "Someone other than your manager", when: "If talking to your manager feels hard", back: "HR, a trade union representative, an employee assistance counsellor or a menopause champion." },
        { id: "changes", front: "Everyday changes", when: "To ease symptoms at work", back: "Flexible hours, breaks when needed, a place to rest, a fan or a desk by a window that opens." },
        { id: "flexible", front: "A flexible working request", when: "For a longer-term change", back: "All employees can ask, from their first day, to change their hours, days or where they work." },
        { id: "adjustments", front: "Reasonable adjustments", when: "If symptoms count as a disability", back: "Employers must make changes so you are not substantially disadvantaged at work." },
      ],
    },
    sources: [INFORM_WORK, ACAS_MENO, ACAS_TALK, ACAS_LAW, MHUK_MENO, GOV_FLEX, GOV_ADJUST, RCPSYCH_PRESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When can employees request flexible working?",
      options: [{ text: "From their first day in a job", right: true }, { text: "Only after 2 years" }, { text: "Only with a doctor's note" }],
      why: "All employees have the legal right to request flexible working from their first day in a job.",
    },
  },
  {
    id: "peri-relationships",
    kicker: "Relationships",
    question: "How do I explain what I'm going through to the people close to me?",
    hook: "Irritability, low desire and tiredness can strain the closest relationships. Talking openly helps the people around you know how to help.",
    short: "Menopause symptoms can affect your relationships, family life and sex life. Talking to your partner, family and friends can help them understand what you are going through and how to support you. Talking to other people going through the same thing can help you feel less alone.",
    sections: [
      {
        heading: "How symptoms can affect relationships",
        paragraphs: [
          "Symptoms can have a big impact on your daily life, including relationships, social life and family life.",
          "Mental Health UK says anger and irritability are common, and increased sensitivity can lead to misunderstandings or conflict, especially with partners. A person's core identity stays the same, even if it can seem as though they have changed.",
        ],
      },
      {
        heading: "Talking to the people close to you",
        paragraphs: [
          "It might help to discuss how menopause is affecting you with your partner. By helping them understand what you are going through, they will be more aware of how they can support you.",
          "Talking to your partner, family and friends might help them understand too. Sharing experiences can help you feel less isolated.",
        ],
      },
      {
        heading: "Sex and intimacy",
        paragraphs: [
          "Vaginal dryness, a lower sex drive, night sweats and feeling stressed or upset can all affect your sex life. There are treatments that can help, so do not be afraid to speak to someone at your GP practice.",
          "A meaningful sex life does not have to look a certain way. Simply being affectionate can be a good way of feeling connected to your body and close to your partner.",
          "It is still possible to get pregnant during perimenopause. You still need contraception for 2 years after your final period if you are 40 to 49, or for 1 year if you are 50 or over.",
        ],
      },
      {
        heading: "If you are supporting someone",
        paragraphs: [
          "Ask them how they feel, and let them know you are there if they need you. Not everyone wants to talk about every symptom, and everyone's menopause is different, so do not make assumptions.",
          "Words of encouragement can help if their self-esteem is low. They might appreciate your company when they go to the GP, if appropriate.",
        ],
      },
      {
        heading: "Others going through the same thing",
        paragraphs: [
          "Talk to other people going through the same thing, like family, friends or colleagues. Menopause Cafes and online groups let you listen to other women's stories and share your own.",
        ],
      },
    ],
    helps: [
      "Tell your partner how menopause is affecting you, so they know how to support you.",
      "Share how you feel with trusted family, friends or colleagues.",
      "Speak to your GP practice about treatments if symptoms are affecting your sex life.",
      "Find a Menopause Cafe or online group to share experiences.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell someone close how you feel.",
      "Ask your GP about sex and intimacy.",
      "Look for a Menopause Cafe.",
    ],
    ask: "Is there support to help my partner and family understand what I'm going through?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments with others",
      scenarios: [
        {
          id: "snap",
          situation: "You snap at your partner over something small and feel awful afterwards.",
          options: [{ text: "Explain how menopause is affecting you", best: true }, { text: "Say nothing and hope it passes" }],
          why: "By helping your partner understand what you are going through, they will be more aware of how they can support you.",
        },
        {
          id: "sex",
          situation: "Sex has become uncomfortable and you have started avoiding it.",
          options: [{ text: "Speak to your GP practice", best: true }, { text: "Put up with the discomfort" }],
          why: "There are treatments that can help, so do not be afraid to speak to someone at your GP practice.",
        },
        {
          id: "sister",
          situation: "Your sister seems low but has not mentioned the menopause.",
          options: [{ text: "Ask how she feels and say you are there", best: true }, { text: "Tell her it must be the menopause" }],
          why: "Ask them how they feel and let them know you are there. Everyone's menopause is different, so do not make assumptions.",
        },
        {
          id: "alone",
          situation: "You feel as if nobody understands.",
          options: [{ text: "Find a Menopause Cafe or online group", best: true }, { text: "Keep it to yourself" }],
          why: "Menopause Cafes and online groups let you listen to other women's stories and share your own.",
        },
      ],
    },
    sources: [NHS_SYMPTOMS, INFORM_MENO, INFORM_SUPPORT, INFORM_SEX, MHUK_MENO, NHS_THINGS, INFORM_MENTAL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is it still possible to get pregnant during perimenopause?",
      options: [{ text: "Yes, so contraception is still needed", right: true }, { text: "No, never" }, { text: "Only before the age of 40" }],
      why: "It is still possible to get pregnant during perimenopause. You still need contraception for 2 years after your final period if you are 40 to 49, or for 1 year if you are 50 or over.",
    },
  },
  {
    id: "peri-urgent",
    kicker: "Urgent help",
    question: "When should I get urgent help for how I feel?",
    hook: "Low mood around the menopause can sometimes become very dark. If it does, help is there right now, day or night.",
    short: "Low mood and feelings of depression can be common around the menopause, and some people have thoughts of suicide. If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.",
    sections: [
      {
        heading: "You are not alone",
        paragraphs: [
          "The Menopause Charity says low mood and feelings of depression can be very common symptoms, and some people have very negative thoughts and think about suicide. If you have felt this way, reach out and speak with someone today.",
          "If you are feeling like you want to end your life, it is important to tell someone. Help and support is available right now, and you do not have to struggle with difficult feelings alone.",
        ],
      },
      {
        heading: "Emergency help",
        paragraphs: [
          "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
          "If you go to A&E, the staff should treat you with respect and look after any immediate physical and mental health needs.",
        ],
      },
      {
        heading: "Urgent help that is not an emergency",
        paragraphs: [
          "Call 111 and select the mental health option, or ask for an urgent GP appointment. 111 will tell you the right place to get help, and you may be able to speak to a trained mental health professional over the phone.",
          "Mental Health UK says that if you feel you are approaching burnout or an emotional or mental crisis during the menopause, it is important to seek support as soon as possible.",
        ],
      },
      {
        heading: "Someone to talk to, any time",
        paragraphs: [
          "You can call Samaritans free on 116 123 from any phone, any time, day or night. If you would rather not talk on the phone, you can text \"SHOUT\" to 85258, which is open 24 hours a day, every day.",
          "These listening services will only share your information if they are very worried about you or think you are in immediate danger.",
        ],
      },
      {
        heading: "Getting through right now",
        paragraphs: [
          "Try not to think about the future, and just focus on getting through today. Get yourself to a safe place, be around other people, and stay away from drugs and alcohol.",
          "Let family or friends know what is going on for you. There is no right or wrong way to talk about suicidal feelings; starting the conversation is what is important.",
          "If you struggle with suicidal thoughts, it may help to make a safety plan to use if you need it. Rethink Mental Illness also has advice on how to cope with suicidal thoughts.",
        ],
      },
    ],
    helps: [
      "Tell someone you trust what is going on for you.",
      "Call a GP and ask for an emergency appointment, or call NHS 111.",
      "If you are worried about someone, ask open questions and listen without needing the answers.",
      "Make a safety plan to use if you need it.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell someone you trust how you feel.",
      "Know the numbers: 111, 116 123, 85258.",
      "Start a safety plan.",
    ],
    ask: "Who can I contact if my mood gets very low, and can we make a plan together?",
    interactive: {
      kind: "flip-cards",
      title: "Where to get help, card by card",
      intro: "Turn each card to see when to use it. If a life is at risk, call 999 now.",
      cards: [
        { id: "999", front: "999 or A&E", when: "If a life is at risk", back: "Or if you do not feel you can keep yourself or someone else safe. You will not be wasting anyone's time." },
        { id: "111", front: "NHS 111, mental health option", when: "Urgent help that is not an emergency", back: "111 will tell you the right place to get help. You may speak to a trained mental health professional." },
        { id: "gp", front: "An urgent GP appointment", when: "When you need help soon", back: "A GP can advise you about treatments and help you get mental health services." },
        { id: "samaritans", front: "Samaritans, 116 123", when: "Any time, day or night", back: "Free to call from any phone. Trained volunteers listen, whatever you are going through." },
        { id: "shout", front: "Shout, text 85258", when: "If you would rather text", back: "Text SHOUT to 85258. A free, confidential text service, open 24 hours a day." },
        { id: "trusted", front: "Someone you trust", when: "Whenever you can", back: "Let family or friends know what is going on. Starting the conversation is what is important." },
      ],
    },
    sources: [NHS_URGENT, NHS_SUICIDAL, MC_MENTAL, MHUK_MENO, SAMARITANS, SHOUT, RETHINK_MENO],
    quiz: {
      question: "What should you do if you do not feel you can keep yourself safe?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait for your next GP appointment" }, { text: "Keep it to yourself" }],
      why: "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe.",
    },
  },
];
