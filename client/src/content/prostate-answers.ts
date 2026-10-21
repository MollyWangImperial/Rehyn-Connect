import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Prostate cancer page's pieces (content/library-conditions/cancer-mind-digestion.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS,
// Prostate Cancer UK, Macmillan Cancer Support and Cancer Research UK, with the government's pages on the
// Equality Act and Access to Work, and Samaritans. No survival figures are given, and nothing here is a
// prediction for any one person. General information only; it never replaces what a person's own
// urology or cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const pcuk = (label: string, path: string): LearnSource => ({ label: `Prostate Cancer UK: ${label}`, url: `https://prostatecanceruk.org/prostate-information-and-support/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/prostate-cancer/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_TESTS = nhs("Tests and next steps for prostate cancer", "conditions/prostate-cancer/tests-and-next-steps/");
const NHS_TREATMENT = nhs("Treatment for prostate cancer", "conditions/prostate-cancer/treatment/");
const NHS_ED = nhs("Erectile dysfunction (impotence)", "conditions/erection-problems-erectile-dysfunction/");
const NHS_UI_TREATMENT = nhs("Urinary incontinence: non-surgical treatment", "conditions/urinary-incontinence/treatment/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");
const NHS_DEPRESSION = nhs("Overview: depression in adults", "mental-health/conditions/depression-in-adults/overview/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");

const PCUK_RESULTS = pcuk("What do my test results mean?", "just-diagnosed/what-do-my-test-results-mean");
const PCUK_LOCALISED = pcuk("Localised prostate cancer", "just-diagnosed/localised-prostate-cancer");
const PCUK_CHOOSING = pcuk("Choosing a treatment", "treatments/choosing-a-treatment");
const PCUK_FOLLOW_UP = pcuk("Follow-up after treatment", "treatments/follow-up-after-treatment");
const PCUK_COMES_BACK = pcuk("If your prostate cancer comes back", "treatments/if-your-prostate-cancer-comes-back");
const PCUK_SURGERY = pcuk("Surgery: radical prostatectomy", "treatments/surgery");
const PCUK_EBRT = pcuk("External beam radiotherapy", "treatments/external-beam-radiotherapy");
const PCUK_EBRT_SIDE = pcuk("Side effects of external beam radiotherapy", "treatments/external-beam-radiotherapy/side-effects-of-external-beam-radiotherapy");
const PCUK_HORMONE = pcuk("Hormone therapy", "treatments/hormone-therapy");
const PCUK_AS = pcuk("Active surveillance", "treatments/active-surveillance");
const PCUK_PSA = pcuk("The PSA blood test", "prostate-tests/psa-blood-test");
const PCUK_HORMONE_EFFECTS = pcuk("How hormone therapy affects you", "living-with-prostate-cancer/how-hormone-therapy-affects-you");
const PCUK_HOT_FLUSHES = pcuk("Hot flushes", "living-with-prostate-cancer/how-hormone-therapy-affects-you/hot-flushes");
const PCUK_HORMONE_FEELINGS = pcuk("Hormone therapy and your feelings", "living-with-prostate-cancer/how-hormone-therapy-affects-you/hormone-therapy-and-your-feelings");
const PCUK_PFME = pcuk("Pelvic floor muscle exercises", "living-with-prostate-cancer/pelvic-floor-muscle-exercises");
const PCUK_URINARY = pcuk("Urinary problems after prostate cancer treatment", "living-with-prostate-cancer/urinary-problems");
const PCUK_SEX = pcuk("Prostate cancer and your sex life", "living-with-prostate-cancer/sex-and-relationships");
const PCUK_ED_TREATMENTS = pcuk("Treatments for erection problems", "living-with-prostate-cancer/sex-and-relationships/treatments-for-erection-problems");
const PCUK_RELATIONSHIPS = pcuk("Sex, relationships, and prostate cancer", "living-with-prostate-cancer/sex-and-relationships/sex-relationships-and-prostate-cancer");
const PCUK_FATIGUE = pcuk("Fatigue", "living-with-prostate-cancer/fatigue");
const PCUK_ACTIVITY = pcuk("Physical activity and prostate cancer", "living-with-prostate-cancer/physical-activity-and-prostate-cancer");
const PCUK_DAILY = pcuk("Prostate cancer and your daily life", "living-with-prostate-cancer/practical-things");
const PCUK_TRAVEL = pcuk("Travel and prostate cancer", "living-with-prostate-cancer/travelling-with-prostate-cancer");
const PCUK_EMOTIONAL = pcuk("Dealing with the emotional impact of prostate cancer", "living-with-prostate-cancer/dealing-with-emotional-impact-of-prostate-cancer");
const PCUK_WELLBEING = pcuk("Mental and emotional wellbeing", "get-support/wellbeing-hub/mental-and-emotional-wellbeing");

const MAC_FOLLOW_UP = mac("Follow-up after treatment for prostate cancer", "prostate-cancer/follow-up-after-treatment-for-prostate-cancer");
const MAC_AS = mac("Active surveillance and watchful waiting for prostate cancer", "treatments-and-drugs/active-surveillance-and-watchful-waiting-for-prostate-cancer");
const MAC_HORMONAL = mac("Hormonal therapy for prostate cancer", "treatments-and-drugs/hormonal-therapy-for-prostate-cancer");
const MAC_SEX = mac("Sex life and prostate cancer", "impacts-of-cancer/sex-life-and-prostate-cancer");
const MAC_WORK = mac("Work and cancer", "impacts-of-cancer/work-and-cancer");

const CRUK_GRADES = cruk("Grade Groups for prostate cancer", "stages/grades");
const CRUK_CPG = cruk("Cambridge prognostic groups and risk groups for prostate cancer", "stages/cambridge-prognostic-group-cpg");
const CRUK_FOLLOW_UP = cruk("Follow up after prostate cancer treatment", "treatment/follow-appointment");
const CRUK_BLADDER = cruk("Bladder problems after treatment for prostate cancer", "practical-emotional-support/bladder-problems");

const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");

export const prostateAnswers: LearnArticle[] = [
  {
    id: "pc-what-you-had",
    kicker: "Treatment",
    question: "Surgery, radiotherapy, hormone therapy or monitoring: what does each one mean?",
    hook: "Not every prostate cancer is treated straight away. When it is, each treatment works in a different way and leaves different after-effects.",
    short: "Prostate cancer does not always need treatment. If it has not spread, it may be monitored with active surveillance or watchful waiting. Treatments include surgery to remove the prostate, radiotherapy and hormone therapy, which can be used on its own or alongside radiotherapy.",
    sections: [
      {
        heading: "Not every cancer needs treatment",
        paragraphs: [
          "Prostate cancer does not always need treatment. If your cancer is small and not causing any symptoms, it may just be monitored at first, because prostate cancer often grows slowly and may never cause problems.",
          "Monitoring can mean regular check-ups and blood tests at your GP surgery, called watchful waiting, or regular tests and scans in hospital, called active surveillance. The aim of watchful waiting is to control symptoms rather than cure the cancer, while active surveillance aims to avoid unnecessary treatment unless tests show the cancer may be growing.",
        ],
      },
      {
        heading: "Surgery: removing the prostate",
        paragraphs: [
          "A radical prostatectomy aims to remove the whole prostate and the cancer cells inside it, while keeping the chances of side effects as low as possible. It can be done as keyhole surgery, by hand or robot-assisted, or as open surgery.",
          "Studies have shown that all three techniques are as good as each other for treating prostate cancer, with similar rates of side effects. You usually stay in hospital between one and five days, and afterwards you will not be able to have children naturally or ejaculate.",
          "The most common side effects of surgery are leaking urine and problems getting or keeping an erection.",
        ],
      },
      {
        heading: "Radiotherapy: X-ray beams from outside",
        paragraphs: [
          "External beam radiotherapy uses high-energy X-ray beams that are targeted at the prostate from outside the body. The treatment itself is painless and lasts around 10 minutes, but you may need to go to hospital five days a week for a few weeks.",
          "If your cancer is localised or locally advanced, radiotherapy aims to get rid of the cancer completely. Many men carry on with many of their normal activities during treatment, including going to work and driving.",
        ],
      },
      {
        heading: "Hormone therapy: taking away testosterone",
        paragraphs: [
          "Prostate cancer cells usually need testosterone to grow. Hormone therapy works by either stopping your body from making testosterone, or by stopping testosterone from reaching the cancer cells.",
          "Hormone therapy on its own does not cure prostate cancer, but it can slow it down and help symptoms. Hormone therapy with radiotherapy aims to cure early prostate cancer, and you may have it for up to three years after radiotherapy if there is a risk of the cancer spreading.",
        ],
      },
      {
        heading: "No single best choice",
        paragraphs: [
          "There is no overall best treatment for localised prostate cancer, and each one has its own advantages and disadvantages. The first treatment you have may affect which treatments you can have in the future.",
          "If the cancer has spread, you may need chemotherapy. A specialist care team will look after you, and if you have any concerns you do not need to wait for your next check-up.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse whether the aim of your treatment is to keep the cancer under control, or to get rid of it completely.",
      "Write down your questions before appointments, and take someone with you if you can.",
      "Speak to your specialist care team about any concerns; you do not need to wait for your next check-up.",
      "Before surgery, do pelvic floor muscle exercises for a few weeks, as this may help you recover more quickly from urinary problems.",
      "Ask about storing sperm before treatment if you might want children in future.",
    ],
    tryThisWeek: [
      "Ask what your treatment aims to do.",
      "Write down your questions.",
      "Take someone to your next appointment.",
    ],
    ask: "Was my treatment aiming to get rid of the cancer or to keep it under control, and what follow-up will I have?",
    interactive: {
      kind: "flip-cards",
      title: "Your treatment, card by card",
      intro: "Turn each card to see what each option involves.",
      cards: [
        { id: "surveillance", front: "Active surveillance", when: "Localised cancer with a low risk of spreading", back: "Regular tests in hospital. Treatment that aims to cure is offered if tests show the cancer may be growing." },
        { id: "watchful", front: "Watchful waiting", when: "Check-ups, usually with your GP", back: "Aims to control symptoms rather than cure, so you avoid treatment and its side effects for as long as possible." },
        { id: "surgery", front: "Radical prostatectomy", when: "Keyhole, robot-assisted or open surgery", back: "Removes the whole prostate. Leaking urine and erection problems are the most common side effects." },
        { id: "radiotherapy", front: "External beam radiotherapy", when: "Often five days a week for a few weeks", back: "High-energy X-ray beams aimed at the prostate from outside the body. The treatment itself is painless." },
        { id: "hormone", front: "Hormone therapy", when: "Injections, implants, tablets or surgery", back: "Stops testosterone being made or reaching the cancer. On its own it does not cure, but it can slow the cancer down." },
        { id: "chemo", front: "Chemotherapy", when: "If the cancer has spread", back: "Medicine that kills cancer cells. A common treatment for advanced prostate cancer, often with hormone therapy." },
      ],
    },
    sources: [NHS_TREATMENT, PCUK_LOCALISED, PCUK_SURGERY, PCUK_EBRT, PCUK_HORMONE, PCUK_AS, MAC_AS, PCUK_CHOOSING],
    quiz: {
      question: "Does prostate cancer always need treatment?",
      options: [{ text: "No, some cancers are monitored instead", right: true }, { text: "Yes, surgery is always needed" }, { text: "Yes, but only with hormone therapy" }],
      why: "Prostate cancer does not always need treatment. If your cancer is small and not causing any symptoms, it may just be monitored at first.",
    },
  },
  {
    id: "pc-psa",
    kicker: "Follow-up",
    question: "What does my PSA number mean after treatment?",
    hook: "After treatment, the PSA blood test is the main check. What counts as a good result depends on the treatment you had.",
    short: "PSA is a protein made by the prostate and by prostate cancer cells, and a blood test measures how much is in your blood. After surgery it should drop so low that it cannot be detected; after radiotherapy it falls more slowly and does not reach zero. A continuous rise can be the first sign the cancer has come back, so doctors look at more than one result and how quickly it rises.",
    sections: [
      {
        heading: "What the test measures",
        paragraphs: [
          "The PSA test is a blood test that measures the amount of a protein called prostate specific antigen in your blood. PSA is made by normal cells in the prostate and also by prostate cancer cells.",
          "After treatment aimed at getting rid of the cancer, the PSA test is a good way to check whether it worked. You will usually have it a week or two before your appointment, so the results are ready at your check-up.",
        ],
      },
      {
        heading: "After surgery",
        paragraphs: [
          "The prostate makes PSA, so once it has been removed, your PSA level should drop so low that it is not possible to detect it. This should happen four to eight weeks after surgery.",
          "A rise in your PSA level after surgery may suggest that some prostate cancer cells were left behind. If this happens, your doctor will talk to you about further tests and treatment.",
        ],
      },
      {
        heading: "After radiotherapy",
        paragraphs: [
          "After radiotherapy or brachytherapy, PSA falls more slowly, reaching its lowest level after 18 months to three years. It will not fall to zero, because your healthy prostate cells keep making some PSA.",
          "Your PSA may rise after radiotherapy and then fall again. This is called a PSA bounce. It can happen up to three years after treatment, it is normal, and it does not mean the cancer has come back.",
          "Prostate Cancer UK says your cancer may have come back if your PSA rises by 2ng/ml or more above its lowest level, or rises for three tests in a row within six months.",
        ],
      },
      {
        heading: "When a rise matters",
        paragraphs: [
          "A continuous rise in your PSA level can be the first sign that the cancer has come back. You usually need more than one rise to find out, and doctors also check how quickly it rises.",
          "If the cancer does come back, the first sign is likely to be a rise in PSA rather than any symptoms. Problems will often be side effects of treatment rather than a sign that the cancer has returned.",
        ],
      },
      {
        heading: "Keeping the test reliable",
        paragraphs: [
          "You may be asked to avoid vigorous exercise or ejaculating in the 48 hours before a PSA test, as these could cause a temporary rise. Receiving anal sex or having your prostate stimulated might also raise it, so it may be worth avoiding these for a week before.",
          "If your PSA stays stable six months after treatment, you might be able to have it checked remotely, with results by phone, letter or online. If your PSA rises, you will be given a hospital appointment to talk about what it might mean.",
        ],
      },
    ],
    helps: [
      "Avoid vigorous exercise and ejaculating in the 48 hours before a PSA test.",
      "Keep a record of your PSA levels, for example in an appointment diary.",
      "Speak to your doctor or nurse if you think you have missed a PSA test, or are worried about your level.",
      "Tell your doctor or nurse about new symptoms or side effects as soon as possible, without waiting for your next appointment.",
      "If your follow-up appointments have ended, remind your GP about your prostate cancer, especially if it has been a while since your last PSA test.",
    ],
    tryThisWeek: [
      "Skip vigorous exercise before your test.",
      "Start a record of your PSA results.",
      "Check when your next PSA test is due.",
    ],
    ask: "What is my PSA now, what is the lowest it has been, and what change would worry you?",
    interactive: {
      kind: "timeline",
      title: "PSA after treatment",
      steps: [
        { id: "before", when: "48 hours before a test", title: "Keep the result reliable", points: ["Avoid vigorous exercise and ejaculating.", "Avoid receiving anal sex or prostate stimulation for a week before."] },
        { id: "surgery", when: "4 to 8 weeks after surgery", title: "Too low to detect", points: ["With the prostate removed, PSA should drop so low that it cannot be detected.", "A rise may suggest some cancer cells were left behind."] },
        { id: "stable", when: "6 months after treatment", title: "Perhaps remote checks", points: ["If your PSA is stable, results may come by phone, letter or online.", "If it rises, you will be given a hospital appointment."] },
        { id: "lowest", when: "18 months to 3 years after radiotherapy", title: "The lowest level", points: ["PSA falls slowly after radiotherapy or brachytherapy.", "It will not fall to zero, as healthy prostate cells still make some."] },
        { id: "bounce", when: "Up to 3 years after radiotherapy", title: "A possible bounce", points: ["PSA may rise and then fall again.", "A PSA bounce is normal and does not mean the cancer has come back."] },
      ],
    },
    sources: [PCUK_FOLLOW_UP, MAC_FOLLOW_UP, PCUK_PSA, PCUK_COMES_BACK, CRUK_FOLLOW_UP, PCUK_SURGERY],
    quiz: {
      question: "After surgery, what should happen to your PSA level?",
      options: [{ text: "It should drop so low it cannot be detected", right: true }, { text: "It should stay the same as before" }, { text: "It should slowly rise" }],
      why: "The prostate makes PSA, so once it has been removed, your PSA level should drop so low that it is not possible to detect it.",
    },
  },
  {
    id: "pc-results",
    kicker: "Results",
    question: "What do my Gleason score, grade group and stage mean?",
    hook: "Two questions sit behind your results: how aggressive the cancer looked, and how far it had gone. A third number puts them together.",
    short: "Your biopsy results show how aggressive the cancer looked, given as a Gleason score or grade group. The stage shows whether it had spread outside the prostate, and how far. For cancer that has not spread, doctors combine the grade, the PSA level and the T stage into one of five Cambridge Prognostic Groups.",
    sections: [
      {
        heading: "How aggressive: the Gleason score",
        paragraphs: [
          "Prostate cells seen under the microscope have different patterns, depending on how quickly they are likely to grow. If you have prostate cancer, the patterns are given Gleason grades of 3, 4 or 5, and the higher the grade, the more likely the cancer is to grow and spread.",
          "Your Gleason score adds together the most common grade and the highest other grade in the samples. So if most of the cancer is grade 3 and the highest other grade is grade 4, the score is 7, written as 3 plus 4. If you have prostate cancer, the score will be between 6 and 10.",
        ],
      },
      {
        heading: "Grade groups",
        paragraphs: [
          "Your doctor might also talk about your grade group, a newer system with five groups. Grade group 1 is the least aggressive and grade group 5 is the most aggressive.",
          "Cancer Research UK says the grade group has replaced the Gleason score, as doctors think it is a more accurate way to grade prostate cancer cells. A Gleason score of 6 is the same as grade group 1, where the cancer is likely to grow very slowly, if at all.",
        ],
      },
      {
        heading: "How far: the stage",
        paragraphs: [
          "The stage tells you whether the cancer has spread outside the prostate and how far. It is often recorded with the TNM system, which is different from the general stages one to four you might hear in the news.",
          "The T stage shows how far the cancer has spread in and around the prostate, the N stage whether it has spread to the lymph nodes, and the M stage whether it has spread to other parts of the body, such as the bones.",
          "Localised prostate cancer is contained inside the prostate. Locally advanced cancer has started to break out of the prostate or has spread to the area just outside it, and advanced cancer has spread to other parts of the body.",
        ],
      },
      {
        heading: "Putting it together: your CPG",
        paragraphs: [
          "If your cancer has not spread, your doctor looks at your PSA level, your Gleason score or grade group, and your T stage. These place you in one of five Cambridge Prognostic Groups, from CPG 1 to CPG 5, which help your doctor decide which treatments are suitable.",
          "CPG 1 means the cancer is likely to grow very slowly and is very unlikely to spread. CPG 4 and CPG 5 mean a high risk of the cancer growing quickly. The CPG system does not apply if the cancer has spread to other parts of the body.",
          "Some doctors still use an older system of low, medium and high risk. Both systems are only intended as guides, and your doctor will consider many other things too.",
        ],
      },
      {
        heading: "After surgery, a clearer picture",
        paragraphs: [
          "If your prostate has been removed, it is looked at under a microscope. This can give your doctor a clearer idea of how aggressive the cancer was and how far it had grown or spread.",
          "A negative or clear surgical margin means the tissue removed was surrounded by normal tissue, which suggests all the cancer was removed. A positive margin means there were cancer cells at the edge, so you may need further treatment.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse to explain your test results if you do not understand them.",
      "Ask your doctor about your CPG, and what it means for your treatment options.",
      "If you are concerned your doctor is using the older risk system, talk to them about the CPG.",
      "If your appointment is at the hospital, ask for a copy of the letter sent to your GP.",
      "Bring someone with you for support when you get your results.",
    ],
    tryThisWeek: [
      "Ask your team for your CPG.",
      "Ask for a copy of your GP letter.",
      "Take someone to your results.",
    ],
    ask: "What were my Gleason score or grade group, my stage and my CPG, and what do they mean for me now?",
    interactive: {
      kind: "flip-cards",
      title: "Your results, card by card",
      intro: "Turn each card to see what each part of your results tells you.",
      cards: [
        { id: "gleason", front: "Gleason score", when: "From your biopsy", back: "Two grades added together, from 6 to 10. The higher the grade, the more likely the cancer is to grow and spread." },
        { id: "grade", front: "Grade group", when: "A newer system, from 1 to 5", back: "Grade group 1 is the least aggressive and grade group 5 the most. A Gleason score of 6 is grade group 1." },
        { id: "t", front: "T stage", when: "Usually from an MRI scan or examination", back: "How far the cancer has spread in and around the prostate, from T1 to T4." },
        { id: "n", front: "N stage", when: "From an MRI or CT scan", back: "Whether the cancer has spread to the lymph nodes near the prostate. N0 means no cancer can be seen in them." },
        { id: "m", front: "M stage", when: "Usually from a bone scan or MRI", back: "Whether the cancer has spread to other parts of the body. M0 means it has not." },
        { id: "cpg", front: "Cambridge Prognostic Group", when: "If the cancer has not spread", back: "PSA, grade and T stage combined into one of five groups, CPG 1 to CPG 5, to guide treatment choices." },
      ],
    },
    sources: [PCUK_RESULTS, CRUK_GRADES, CRUK_CPG, PCUK_FOLLOW_UP, PCUK_SURGERY, NHS_TESTS],
    quiz: {
      question: "What does a higher Gleason grade mean?",
      options: [{ text: "The cancer is more likely to grow and spread", right: true }, { text: "The cancer has already spread to the bones" }, { text: "The PSA level is lower" }],
      why: "The higher the grade, the more likely the cancer is to grow and spread.",
    },
  },
  {
    id: "pc-surveillance",
    kicker: "Monitoring",
    question: "What is it like to live with a cancer that is being watched?",
    hook: "Active surveillance is not doing nothing. It is a plan of regular tests, with treatment ready if the cancer changes, and you can change your mind.",
    short: "Active surveillance means having regular tests to check on a localised prostate cancer, rather than treating it straight away. The aim is to avoid treatment and its side effects unless the tests show the cancer may be growing. You can decide to have treatment at any time.",
    sections: [
      {
        heading: "Why watch rather than treat",
        paragraphs: [
          "Active surveillance is a way of monitoring localised prostate cancer, rather than treating it straight away. It might seem strange not to have treatment, but localised prostate cancer often grows slowly, if at all, and may never cause you any problems or affect how long you live.",
          "Many men on active surveillance will never need treatment. If there are signs your cancer may be growing, you will be offered treatment that aims to cure it.",
        ],
      },
      {
        heading: "Who it suits",
        paragraphs: [
          "Active surveillance is suitable for men with Cambridge Prognostic Group 1 or 2 localised prostate cancer. It is also sometimes suitable for men with CPG 3 who want to avoid or delay treatment, but it is not recommended for CPG 4 or 5.",
          "Research shows active surveillance is a safe way for men with low-risk prostate cancer to avoid or delay unnecessary treatment. The risk of the cancer growing without being picked up by the tests is very low.",
        ],
      },
      {
        heading: "What the tests involve",
        paragraphs: [
          "You will have regular tests to look for any changes that suggest the cancer is growing. These may include PSA blood tests, MRI scans and a digital rectal examination, where the doctor feels your prostate through the wall of the back passage.",
          "As an example, in the first year you might have a PSA test every three to four months, a rectal examination after 12 months and an MRI scan after 12 to 18 months. From the second year, you might have a PSA test every six months and a rectal examination every 12 months.",
          "You may only have another biopsy if other tests suggest the cancer is growing. Your PSA might rise a little even if the cancer is not growing, and your doctor will decide if it has risen enough to need a biopsy.",
        ],
      },
      {
        heading: "Living with the uncertainty",
        paragraphs: [
          "Living with cancer and not having treatment can be difficult, and you may feel stress, worry and anxiety. Some men worry about getting their PSA test results.",
          "You can decide to have treatment at any time, no matter how long you have been on active surveillance. Some men choose treatment even though there are no signs of any changes, and you do not have to stay on active surveillance if you do not want to.",
        ],
      },
      {
        heading: "Looking after your health",
        paragraphs: [
          "Your general health could change, which might make some treatments unsuitable if you needed them later. You can lower your risk of many health problems by eating healthily, doing regular exercise and giving up smoking.",
          "You will not get treatment side effects on active surveillance. If you notice changes to the way you urinate, these are more likely to be a sign of an enlarged prostate or another health problem, but it is still a good idea to get them checked.",
        ],
      },
    ],
    helps: [
      "Check with your doctor how often you need PSA tests and who books them, as you might not get reminders.",
      "Give yourself plenty of time to book your PSA tests, as GP surgeries and hospitals can be very busy.",
      "Try to avoid sexual activity and vigorous exercise in the 48 hours before a PSA test.",
      "Keep track of your appointments and test results, for example in a diary.",
      "Talk to your doctor or nurse if you are worried, or if you decide you want treatment.",
      "If you smoke, ask your doctor or nurse for support to stop.",
    ],
    tryThisWeek: [
      "Find out who books your PSA tests.",
      "Start a diary of your results.",
      "Tell your nurse about any worries.",
    ],
    ask: "How often will I have PSA tests and scans, and what results would lead you to recommend treatment?",
    interactive: {
      kind: "scenarios",
      title: "Moments on active surveillance",
      scenarios: [
        {
          id: "reminder",
          situation: "You have not had a reminder for your next PSA test.",
          options: [{ text: "Check with your doctor and book early", best: true }, { text: "Wait until someone writes to you" }],
          why: "You might not get reminders, so check how often you need a test, and give yourself plenty of time to book it.",
        },
        {
          id: "run",
          situation: "You have a long cycle ride planned the day before a PSA test.",
          options: [{ text: "Move the ride to after the test", best: true }, { text: "Go ahead, it makes no difference" }],
          why: "Try to avoid sexual activity and vigorous exercise in the 48 hours before a PSA test.",
        },
        {
          id: "worry",
          situation: "Nothing has changed, but the waiting is making you anxious.",
          options: [{ text: "Talk to your doctor or nurse about it", best: true }, { text: "Keep it to yourself" }],
          why: "Living with cancer and not having treatment can be difficult. You can decide to have treatment at any time, no matter how long you have been on active surveillance.",
        },
        {
          id: "urine",
          situation: "You notice a change in the way you urinate.",
          options: [{ text: "Get it checked by your doctor or nurse", best: true }, { text: "Ignore it until your next PSA test" }],
          why: "These changes are more likely to be a sign of an enlarged prostate or another health problem, but it is still a good idea to get them checked.",
        },
      ],
    },
    sources: [PCUK_AS, MAC_AS, PCUK_LOCALISED, PCUK_EMOTIONAL],
    quiz: {
      question: "On active surveillance, when can you decide to have treatment?",
      options: [{ text: "At any time", right: true }, { text: "Only if tests show growth" }, { text: "Only after five years" }],
      why: "You can decide to have treatment at any time, no matter how long you have been on active surveillance.",
    },
  },
  {
    id: "pc-pelvic-floor",
    kicker: "Exercises",
    question: "How do I do pelvic floor exercises properly?",
    hook: "Small squeezes that nobody else can see. Done properly and often, they may help with leaking after treatment, but they take patience.",
    short: "The pelvic floor muscles support the bladder and bowel and help control when you urinate. Strengthening them may help with leaking urine after treatment. Find the right muscles first, then do slow and fast squeezes, and keep going: it can take up to three months to notice a real difference.",
    sections: [
      {
        heading: "What the muscles do",
        paragraphs: [
          "The pelvic floor muscles stretch from the pubic bone at the front of your body to the bottom of your spine. They act as a sling, supporting the bladder and bowel and helping to control when you urinate or empty your bowels, and they also help with erections.",
          "Strong pelvic floor muscles may help with leaking urine, a sudden urge to urinate, needing to go more often, and dribbling after you finish. Some men also find they help with erection problems after treatment.",
        ],
      },
      {
        heading: "When to start",
        paragraphs: [
          "If you are going to have surgery, it is a good idea to start the exercises four to six weeks before. This helps you do them properly after treatment, and might help you stop leaking urine sooner.",
          "Do not do pelvic floor muscle exercises while you have a catheter in. You can start as soon as it has been removed, and if you are worried about doing them after surgery, speak to your medical team. If you are having radiotherapy, it is safe to do them during and after your treatment.",
          "If you had surgery a while ago but still have urinary problems, starting the exercises could still help. Speak to your doctor or nurse too, as other treatments might help.",
        ],
      },
      {
        heading: "Finding the right muscles",
        paragraphs: [
          "Sit, stand or lie down, with your thighs and buttocks relaxed. Tighten the ring of muscle around your back passage as if you are trying to control wind, and at the same time tighten as if you are trying to stop the flow of urine, then relax.",
          "Do not squeeze your buttocks together, and keep breathing normally. If you are tightening the right muscles, you should feel a dip at the base of your penis and your scrotum move up a little.",
        ],
      },
      {
        heading: "Slow and fast squeezes",
        paragraphs: [
          "For slow exercises, tighten the muscles as hard as you can so you feel a lifting sensation, and try to hold it for 10 seconds. Relax and rest for 10 seconds, and aim to repeat this up to 10 times. If you cannot hold for 10 seconds at first, hold for as long as you can and build up.",
          "For fast exercises, tighten the muscles as quickly as possible, hold for one second and then let go. Try to do up to 10 of these.",
          "Prostate Cancer UK suggests you may want to try a set of slow and fast exercises three times a day. The NHS says a programme should include at least 8 muscle contractions at least 3 times a day, and last for at least 3 months.",
        ],
      },
      {
        heading: "Keep going",
        paragraphs: [
          "It takes time to see an improvement. You might see a small improvement each week, but it can take up to three months before you notice a real difference.",
          "Do not overdo it, as the muscles can get tired, and you might leak more towards the end of the day. Once your muscles are strong you can do fewer exercises, but keep doing some each day, otherwise they will get weaker again.",
        ],
      },
    ],
    helps: [
      "Ask your doctor, nurse or GP to refer you to a continence advisor or men's health physiotherapist if you find the exercises difficult.",
      "Tighten your pelvic floor muscles strongly before and during things that make you leak, such as getting up from a chair, lifting, coughing or sneezing.",
      "Tighten the muscles strongly after you urinate, to avoid dribbling afterwards.",
      "Make the exercises part of your daily routine, and try doing them standing when you feel ready.",
      "Try the NHS recommended Squeezy app, which helps people with urinary incontinence keep up their exercises.",
    ],
    tryThisWeek: [
      "Do a set of exercises three times a day.",
      "Squeeze before you cough or lift.",
      "Ask about a men's health physiotherapist.",
    ],
    ask: "Am I doing my pelvic floor exercises correctly, and could I see a continence advisor or men's health physiotherapist?",
    interactive: {
      kind: "timeline",
      title: "Your pelvic floor plan",
      steps: [
        { id: "before", when: "4 to 6 weeks before surgery", title: "Start early", points: ["Learn to find the right muscles.", "It might help you stop leaking urine sooner afterwards."] },
        { id: "catheter", when: "While the catheter is in", title: "Wait", points: ["Do not do pelvic floor muscle exercises while you have a catheter in."] },
        { id: "removed", when: "Once the catheter is out", title: "Begin", points: ["Start as soon as the catheter has been removed.", "Speak to your medical team if you are worried about doing them."] },
        { id: "daily", when: "Every day", title: "Slow and fast sets", points: ["Hold each slow squeeze for up to 10 seconds, up to 10 times.", "Then up to 10 fast squeezes, each held for one second."] },
        { id: "months", when: "Up to 3 months", title: "A real difference", points: ["You might see a small improvement each week.", "It can take up to three months to notice a real difference."] },
        { id: "life", when: "From then on", title: "Keep some going", points: ["Once the muscles are strong, you can do fewer exercises.", "Keep doing some each day, or they will get weaker again."] },
      ],
    },
    sources: [PCUK_PFME, NHS_UI_TREATMENT, PCUK_URINARY, CRUK_BLADDER, PCUK_SURGERY],
    quiz: {
      question: "When should you not do pelvic floor exercises after surgery?",
      options: [{ text: "While the catheter is still in", right: true }, { text: "At any time in the first year" }, { text: "When you are standing up" }],
      why: "Do not do pelvic floor muscle exercises while you have a catheter in. You can start as soon as it has been removed.",
    },
  },
  {
    id: "pc-bladder",
    kicker: "Bladder",
    question: "Why am I leaking urine after treatment, and what helps?",
    hook: "Leaks and urgency are common after prostate cancer treatment. For most men they improve, and there is a lot that can help in the meantime.",
    short: "Treatment can damage the nerves and muscles that control when you urinate. After surgery most men leak at first, and leaking usually improves with time. After radiotherapy, needing to go often or urgently is more common than leaking. Pads, pelvic floor exercises, bladder retraining and other treatments can all help.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "Many men get urinary problems as a side effect of treatment, because treatment can damage the nerves and muscles that control when you urinate. Your chances depend on the treatment you had, and on whether you had urinary problems before.",
          "Urinary problems can affect your self-esteem and independence, and affect your work, social and sex life. Getting advice can help you feel more in control.",
        ],
      },
      {
        heading: "After surgery",
        paragraphs: [
          "Most men cannot control their bladder properly when the catheter is first removed. You might leak a few drops when you exercise, cough or sneeze, or you might leak more and need pads, especially in the weeks after surgery.",
          "Leaking urine usually improves with time. Prostate Cancer UK says most men start to see an improvement one to six months after surgery, and Cancer Research UK says most people get better within 3 to 6 months, though for some it takes 1 or 2 years.",
          "Some men leak urine for a year or more and others never fully recover. If you still leak six to twelve months after surgery and pelvic floor exercises have not helped, other treatments include medicines, an internal male sling and an artificial urinary sphincter.",
        ],
      },
      {
        heading: "After radiotherapy",
        paragraphs: [
          "Radiotherapy can irritate the lining of the bladder and the urethra. This can mean needing to urinate often, including at night, a sudden urge to go, a burning feeling, or blood in your urine.",
          "These problems tend to start midway through treatment and may begin to improve several weeks after it finishes. Leaking urine after radiotherapy is less common. Some problems, such as a narrowing of the urethra, can develop months or years later.",
        ],
      },
      {
        heading: "Products and practical help",
        paragraphs: [
          "Absorbent pads and pants, urinary sheaths, bed protectors and handheld urinals can all help. Your GP or the continence nurses at your hospital may provide some pads for free, and you can also buy them in supermarkets, chemists or online.",
          "If you get sudden urges, bladder retraining can help you control when you urinate and hold on for longer. A continence clinic can help with pelvic floor exercises and bladder training.",
        ],
      },
      {
        heading: "When it is urgent",
        paragraphs: [
          "A few men, fewer than 5 out of every 100, find it difficult to urinate after surgery, because scarring narrows the opening of the bladder or the urethra.",
          "If you suddenly and painfully cannot urinate, this needs treating straight away. Call your doctor or nurse, or go to your nearest accident and emergency department, and make sure they know what prostate cancer treatment you have had.",
        ],
      },
    ],
    helps: [
      "Drink plenty of fluids, about 3 to 4 pints a day, as this helps prevent bladder irritation and infection.",
      "Cut down on fizzy drinks, alcohol and drinks that contain caffeine, such as tea, coffee and cola.",
      "If you often need to go at night, drink less in the two hours before bed.",
      "Do pelvic floor muscle exercises regularly.",
      "Plan ahead when you go out: find out where the toilets are, and pack extra pads, underwear and wet wipes.",
      "Get an urgent toilet card to show staff in shops, restaurants and other public places.",
    ],
    tryThisWeek: [
      "Aim for 3 to 4 pints of fluid a day.",
      "Swap one caffeine drink for water.",
      "Pack a bag with spare pads.",
    ],
    ask: "What can help with my leaks or urgency, and can I be referred to a continence service?",
    interactive: {
      kind: "scenarios",
      title: "Everyday bladder moments",
      scenarios: [
        {
          id: "urge",
          situation: "You get a sudden urge to urinate.",
          options: [{ text: "Tighten your pelvic floor, then walk slowly", best: true }, { text: "Rush to the toilet as fast as you can" }],
          why: "Try tightening your pelvic floor muscles and holding. Wait calmly until the urge passes, then walk slowly to the toilet, as rushing could make you more likely to leak.",
        },
        {
          id: "fluids",
          situation: "You are leaking, so you are tempted to drink less.",
          options: [{ text: "Keep drinking about 3 to 4 pints a day", best: true }, { text: "Cut right down on drinks" }],
          why: "You may worry about drinking lots if you are leaking urine, but it can help prevent bladder irritation and infection.",
        },
        {
          id: "outing",
          situation: "You are going out for the day.",
          options: [{ text: "Find the toilets and pack spare pads", best: true }, { text: "Stay at home to be safe" }],
          why: "Plan ahead when you go out: find out where the toilets are, and pack extra pads, underwear and wet wipes.",
        },
        {
          id: "retention",
          situation: "You suddenly and painfully cannot urinate.",
          options: [{ text: "Call your team or go to A&E", best: true }, { text: "Wait and see if it passes" }],
          why: "This needs treating straight away. Call your doctor or nurse, or go to your nearest accident and emergency department.",
        },
      ],
    },
    sources: [PCUK_URINARY, PCUK_SURGERY, CRUK_BLADDER, PCUK_EBRT_SIDE, PCUK_PFME],
    quiz: {
      question: "What usually happens to leaking after surgery?",
      options: [{ text: "It usually improves with time", right: true }, { text: "It always lasts for life" }, { text: "It gets steadily worse" }],
      why: "Leaking urine usually improves with time.",
    },
  },
  {
    id: "pc-erections",
    kicker: "Sex",
    question: "Will my erections come back, and what helps?",
    hook: "Erection problems are one of the most common after-effects of treatment. Recovery can be slow, and there are more treatments than most men expect.",
    short: "Surgery, radiotherapy and hormone therapy can all affect erections. After surgery it can take anything from a few months to a few years for erections to return, and they may not be as strong as before. There are many treatments, including tablets, vacuum pumps, injections and implants, and your healthcare team can prescribe them free on the NHS.",
    sections: [
      {
        heading: "Why erections change",
        paragraphs: [
          "Usually when you are aroused, your brain sends signals to the nerves in your penis, which cause blood to flow in and make it hard. Anything that interferes with your nerves, blood supply, testosterone level or desire for sex can make it difficult to get or keep an erection.",
          "Surgery, radiotherapy, brachytherapy, HIFU and cryotherapy can damage the nerves and blood vessels needed for an erection. Hormone therapy can lower your desire for sex and cause problems getting or keeping an erection.",
        ],
      },
      {
        heading: "After surgery",
        paragraphs: [
          "Two bundles of nerves attached to the prostate help you get erections, and your surgeon will try to save them if it is possible. Even so, most men find it difficult to get an erection strong enough for sex after surgery, including nerve-sparing surgery.",
          "It can take anything from a few months to a few years for erections to return, and they may not be as strong as before. Some men will always need medical help, and some cannot get an erection even with it. You will still have feeling in your penis and should still be able to have an orgasm, though it may feel different.",
        ],
      },
      {
        heading: "After radiotherapy",
        paragraphs: [
          "Erection problems caused by radiotherapy often take a while to appear, and it can be up to two years before you notice any. They can also get worse over time.",
          "Your doctor may prescribe regular medication to help with erections after radiotherapy. These often work best if you start them soon after your treatment.",
        ],
      },
      {
        heading: "The treatments",
        paragraphs: [
          "Tablets called PDE5 inhibitors, such as sildenafil and tadalafil, normally start to work 30 minutes to an hour after taking them, and you need to be sexually aroused for them to work. Try each type at least eight times before changing, as it can take a while to get the timing right.",
          "A vacuum pump draws blood into the penis and does not rely on the nerves, so it can be a good option if they were affected. Injections of a medicine called alprostadil give an erection within 5 to 10 minutes, and the same medicine also comes as a pellet or cream. An implant can be a good option if other treatments have not worked.",
          "Starting treatment in the weeks after surgery, along with masturbation, helps blood flow to the penis and keeps it healthy. You may hear this called penile rehabilitation.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Your healthcare team can prescribe treatments for erection problems for free on the NHS, and there is no age limit. You can also be referred to a specialist in sexual problems or an erectile dysfunction clinic.",
          "Talking about sex can be difficult, but it is okay to talk about it and ask for support, and you do not need to use medical words. If your team does not ask about your erections, you may need to bring it up yourself, perhaps more than once.",
        ],
      },
    ],
    helps: [
      "Ask about treatment for erection problems before or soon after your prostate cancer treatment.",
      "Stick with a treatment for a while, and try different ones, or a combination, to find what works.",
      "Only use medicines prescribed by a health professional or bought from a pharmacy, as tablets bought online might be fake.",
      "Never take PDE5 inhibitor tablets if you take medicines called nitrates, and tell your doctor about any heart problems.",
      "Go to A&E straight away if an erection lasts more than four hours.",
      "Stop smoking, keep active and stay a healthy weight, as these can help with erections.",
    ],
    tryThisWeek: [
      "Ask your team about erection treatment.",
      "Give one treatment several tries.",
      "Only use prescribed or pharmacy medicines.",
    ],
    ask: "Which treatment for erection problems would suit me, and can I be referred to an erectile dysfunction clinic?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments, card by card",
      intro: "Turn each card to see how each treatment works.",
      cards: [
        { id: "tablets", front: "PDE5 inhibitor tablets", when: "Sildenafil, tadalafil and others", back: "Start to work in 30 minutes to an hour, if you are aroused. Try each type at least eight times." },
        { id: "pump", front: "Vacuum pump", when: "Around 4 to 6 weeks after surgery", back: "Draws blood into the penis without needing the nerves. Regular use can help keep the penis healthy." },
        { id: "injections", front: "Injections", when: "Alprostadil, into the side of the penis", back: "Often work well, giving an erection within 5 to 10 minutes that lasts for up to an hour." },
        { id: "pellets", front: "Pellets or cream", when: "If you do not like the idea of an injection", back: "The same medicine as the injections, put into the tip of the penis. They do not tend to work as well." },
        { id: "implant", front: "Implant", when: "If other treatments have not worked", back: "Fitted by an operation. Most men are satisfied, and it does not affect urinating, feeling or orgasm." },
        { id: "testosterone", front: "Testosterone replacement", when: "Only in some situations", back: "Not usually recommended if you still have prostate cancer, and not possible while you are on hormone therapy." },
      ],
    },
    sources: [PCUK_SEX, PCUK_ED_TREATMENTS, PCUK_SURGERY, PCUK_EBRT_SIDE, NHS_ED, MAC_SEX],
    quiz: {
      question: "How long can it take for erections to return after surgery?",
      options: [{ text: "From a few months to a few years", right: true }, { text: "Always within a week" }, { text: "They never come back" }],
      why: "It can take anything from a few months to a few years for erections to return, and they may not be as strong as before.",
    },
  },
  {
    id: "pc-hormone-therapy",
    kicker: "Hormone therapy",
    question: "How will hormone therapy affect me, and what helps?",
    hook: "Taking away testosterone slows the cancer, but testosterone does a lot else too. Knowing why the side effects happen makes them easier to manage.",
    short: "Hormone therapy lowers or blocks testosterone, which can cause hot flushes, tiredness, weight gain, muscle loss, bone thinning, mood changes and changes to your sex life. You may not get them all. There are ways to manage each one, and side effects usually ease if you stop treatment, though this can take months or years.",
    sections: [
      {
        heading: "Why the side effects happen",
        paragraphs: [
          "Testosterone controls the growth of the prostate and other male characteristics, such as erections and muscle strength, and affects the way you think and feel. So when hormone therapy reduces or blocks it, all of these things can change.",
          "You may not get all the possible side effects, and having fewer does not mean the treatment is less effective. Side effects usually last for as long as you are on hormone therapy, and if you stop, it may take several months to several years for them to ease.",
        ],
      },
      {
        heading: "Hot flushes",
        paragraphs: [
          "Hot flushes give you a sudden feeling of warmth, and you might feel very hot in your face, neck, chest or back. They can last from a few seconds to a few hours of sweating, and some men find they get milder and happen less often over time.",
          "Keeping your room cool, using a fan, wearing cotton, linen or bamboo, and having lukewarm rather than hot baths and showers may help. So can cutting down on alcohol, caffeine and spicy food. A hot flush diary can help you spot triggers, and there are medicines your doctor or nurse may suggest if they are hard to deal with.",
        ],
      },
      {
        heading: "Tiredness, weight and muscle",
        paragraphs: [
          "Hormone therapy can make you feel extremely tired, and fatigue can come on quite suddenly. Regular physical activity, such as walking, can help reduce tiredness.",
          "Some men put on weight, particularly around the waist, and lose muscle. Regular gentle resistance exercise, such as lifting light weights or using elastic resistance bands, can help keep your muscles strong. Speak to your doctor before you start any exercise.",
        ],
      },
      {
        heading: "Bones and heart",
        paragraphs: [
          "Testosterone helps to keep bones strong, and long-term hormone therapy can make them weaker, which can lead to osteoporosis. Your doctor may suggest a bone density scan, sometimes called a DEXA scan, before you start.",
          "Plenty of calcium and vitamin D, not regularly drinking more than 14 units of alcohol a week, stopping smoking and being as active as you can may all help your bones. Hormone therapy may also slightly increase the chance of heart disease, stroke and type 2 diabetes, and your GP may suggest health checks about every six months.",
        ],
      },
      {
        heading: "Mood, memory and sex",
        paragraphs: [
          "Hormone therapy itself can affect your mood. You may feel more emotional than usual, cry more easily or have mood swings, and just knowing these feelings are caused by the treatment can help. Some men find it difficult to concentrate or remember things.",
          "It will change your sex drive and may mean you have less interest in sex, and it can cause erection problems. If side effects are hard to live with, speak to your doctor or nurse, as it might be possible to try a different treatment or take a break. If you are thinking about stopping hormone therapy, talk to your doctor or nurse, who can explain how this could affect your cancer.",
        ],
      },
    ],
    helps: [
      "Keep a record of your injection dates, and tell your doctor or nurse as soon as possible if you think you have missed one.",
      "For hot flushes, keep your room cool, use a fan, and wear cotton, linen or bamboo, especially at night.",
      "Do regular gentle resistance exercise, and speak to your doctor before you start.",
      "Eat plenty of calcium and vitamin D, and ask your doctor whether you need supplements.",
      "Ask your GP how often to have general health checks, such as your weight, blood pressure, cholesterol and tests for diabetes.",
      "Speak to your doctor or nurse if side effects are affecting your daily life.",
    ],
    tryThisWeek: [
      "Note your next injection date.",
      "Put a fan by your bed.",
      "Try some gentle resistance exercise.",
    ],
    ask: "How long will I be on hormone therapy, should I have a bone density scan, and what can help my side effects?",
    interactive: {
      kind: "signs",
      title: "Side effects to mention",
      intro: "Tick any you have noticed. There are ways to manage each of them.",
      signs: ["Hot flushes or night sweats", "Extreme tiredness", "Weight gain around the waist", "Losing muscle or strength", "Muscle aches or joint pain", "Breast swelling or tenderness", "Trouble concentrating or remembering", "Feeling more emotional, low or anxious", "Less interest in sex, or erection problems"],
      after: "Tell your doctor or nurse. There are treatments and support to help manage side effects.",
      copyHeading: "Side effects I have noticed",
    },
    sources: [PCUK_HORMONE, PCUK_HORMONE_EFFECTS, PCUK_HOT_FLUSHES, MAC_HORMONAL, PCUK_HORMONE_FEELINGS],
    quiz: {
      question: "Why does hormone therapy cause side effects?",
      options: [{ text: "It lowers or blocks testosterone", right: true }, { text: "It damages the bladder" }, { text: "It raises testosterone" }],
      why: "Testosterone controls the growth of the prostate and other male characteristics. So when hormone therapy reduces or blocks it, all of these things can change.",
    },
  },
  {
    id: "pc-exercise",
    kicker: "Exercise",
    question: "What exercise helps on hormone therapy?",
    hook: "Moving more is one of the few things that helps several side effects at once: muscle, weight, tiredness and mood.",
    short: "Physical activity can help you manage your weight, keep muscle and manage treatment side effects. Prostate Cancer UK suggests building up, if you can, to 30 minutes of moderate exercise three to five days a week, with exercises for muscle strength. Gentle resistance exercise is particularly good on hormone therapy. Speak to your GP, nurse or hospital doctor before you start.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "Physical activity is any type of movement that uses energy, and it does not have to be a sport or going to the gym. It can help you manage your weight, maintain muscle and manage treatment side effects.",
          "Hormone therapy can cause a decrease in muscle and an increase in body fat. Regular gentle resistance exercise can help to prevent muscle loss and keep your muscles strong.",
        ],
      },
      {
        heading: "How much to aim for",
        paragraphs: [
          "Aim to be physically active at least two to three times a week. If you are not usually active, start gently for short periods, such as 10 to 15 minutes, and build up as you become fitter.",
          "If you can, work up to 30 minutes of moderate exercise three to five days a week. Moderate means your heart beats faster but you can still talk, about the level of a brisk walk, and you can reach 30 minutes by being active for 10 minutes, three times a day.",
        ],
      },
      {
        heading: "Muscle and bones",
        paragraphs: [
          "Try to include both aerobic exercise, such as walking, swimming or cycling, and exercises that increase muscle and strength, such as body weight exercises, yoga or Pilates.",
          "Gentle resistance exercise, such as lifting light weights or using elastic resistance bands, is particularly good if you are on hormone therapy and at risk of bone thinning. Macmillan says weight-bearing exercise such as walking, dancing, hiking or gentle weightlifting can help keep your bones healthy.",
        ],
      },
      {
        heading: "Energy and mood",
        paragraphs: [
          "Physical activity can help to improve fatigue. Regular physical activity, such as walking, can also help reduce tiredness on hormone therapy.",
          "Being more active can also have a positive impact on your mental and emotional wellbeing. Physical activity such as gentle walking can improve your mood.",
        ],
      },
      {
        heading: "Exercising safely",
        paragraphs: [
          "It is usually safe to be active during and after treatment, but speak to your GP, nurse or hospital doctor before you start an exercise plan, especially if you have heart, joint or muscle problems. They may refer you to an exercise programme or a physiotherapist.",
          "If you are on hormone therapy, check with your doctor before high-impact exercise such as running and contact sports, and avoid activities where you could fall. Do not exercise if you feel unwell or have pain, and stop if this happens while you are exercising.",
          "After surgery, avoid heavy physical exercise for the first four to six weeks, though your surgeon may suggest a short walk each day.",
        ],
      },
    ],
    helps: [
      "Speak to your GP, nurse or hospital doctor before you start an exercise plan.",
      "If you are not usually active, start with 10 to 15 minutes and build up gradually.",
      "Add gentle resistance exercise, such as lifting light weights or using elastic resistance bands.",
      "Do simple things, such as getting off the bus one stop earlier or using the stairs rather than a lift.",
      "Ask your GP about exercise referral schemes, or join a local walking group.",
      "Wear clothing and trainers that fit properly, avoid uneven surfaces and drink enough water.",
    ],
    tryThisWeek: [
      "Take a 10 minute walk each day.",
      "Try light weights or a resistance band.",
      "Ask your GP about exercise referral.",
    ],
    ask: "Which exercise is safe for me on hormone therapy, and is there an exercise programme I could join?",
    interactive: {
      kind: "timeline",
      title: "Building up, step by step",
      steps: [
        { id: "check", when: "Before you start", title: "Check first", points: ["Speak to your GP, nurse or hospital doctor, especially with heart, joint or muscle problems.", "On hormone therapy, ask before running or contact sports."] },
        { id: "start", when: "To begin", title: "Short and gentle", points: ["10 to 15 minutes at a time, if you are not usually active.", "At least two to three times a week."] },
        { id: "build", when: "As you get fitter", title: "Build to 30 minutes", points: ["30 minutes of moderate exercise, three to five days a week, if you can.", "10 minutes, three times a day, adds up to 30."] },
        { id: "strength", when: "Each week", title: "Add strength", points: ["Light weights or elastic resistance bands.", "Body weight exercises, yoga or Pilates."] },
        { id: "safe", when: "Every time", title: "Stay safe", points: ["Avoid activities where you could fall.", "Stop if you feel unwell or have pain."] },
      ],
    },
    sources: [PCUK_ACTIVITY, PCUK_HORMONE_EFFECTS, MAC_HORMONAL, PCUK_FATIGUE, PCUK_EMOTIONAL],
    quiz: {
      question: "Which exercise is particularly good on hormone therapy?",
      options: [{ text: "Gentle resistance exercise, like light weights", right: true }, { text: "Only long-distance running" }, { text: "No exercise at all" }],
      why: "Gentle resistance exercise, such as lifting light weights or using elastic resistance bands, is particularly good if you are on hormone therapy and at risk of bone thinning.",
    },
  },
  {
    id: "pc-relationships",
    kicker: "Relationships",
    question: "How do we talk about intimacy and sex after prostate cancer?",
    hook: "Prostate cancer can change a relationship as well as a body. Couples who talk, and who stay close in other ways, often find their way through.",
    short: "Prostate cancer and its treatment can change your sex life and your relationship, for you and for your partner. Talking openly, staying close in other ways and focusing on pleasure rather than erections can help. Counselling, sex therapy and specialist nurses can support you both.",
    sections: [
      {
        heading: "How things can change",
        paragraphs: [
          "Coping with prostate cancer and its side effects may change your relationship and the way you have sex. Some couples find it strengthens their relationship and brings them closer together, while for others the normal pattern of sex changes.",
          "Some men avoid sex or any closeness because they worry their partner will expect penetrative sex. Partners can feel worried, less desirable or frustrated, and many do not talk about their feelings because they want to protect the person they love.",
        ],
      },
      {
        heading: "Talk about it",
        paragraphs: [
          "Talking about sex and your thoughts and feelings will help you both deal with the changes. Try not to guess how your partner is feeling, as guesses can often be wrong, and encourage them to get support too.",
          "If you are feeling less interested in sex, let your partner know why. It is likely they will notice the change and could be feeling rejected. If you find it difficult to talk, it may help to write a letter to your partner or see a relationship counsellor.",
        ],
      },
      {
        heading: "Stay close in other ways",
        paragraphs: [
          "There are still many ways of experiencing pleasure, closeness and fun together. It does not have to be all about penetrative sex, and being physically close in other ways can support or even improve your relationship.",
          "Try simple things, such as holding hands, a regular cuddle or new hobbies together. Men can feel sexual pleasure and have orgasms without an erection or ejaculating.",
          "If tiredness gets in the way, try to plan around when you have more energy. Hugging and holding each other can help you stay close when you do not feel like having sex.",
        ],
      },
      {
        heading: "Getting support together",
        paragraphs: [
          "Doctors and nurses are always happy for you to bring your partner to your appointments. Talking to a counsellor or sex therapist may help you and your partner adapt to changes in your sex life.",
          "Sex therapy usually involves a series of sessions, and you can go by yourself or with your partner. You will never be asked to undress or do anything sexual in the therapy room. It is available on the NHS in some areas, usually with a referral from your GP.",
        ],
      },
      {
        heading: "If you are single",
        paragraphs: [
          "All the treatments for erection problems and sexual support are available to you if you are single. If you are starting a new relationship, wait until you feel comfortable with the person and trust them before talking about any sexual problems.",
          "Fear of rejection is natural, whether or not you have had cancer. Rejection can happen, but many people will accept sexual differences and be understanding and supportive.",
        ],
      },
    ],
    helps: [
      "Talk to your partner about how you both feel, rather than guessing.",
      "Try non-sexual ways of being close, such as holding hands or a regular cuddle.",
      "Take your partner to your appointments if you both want to.",
      "Ask your nurse or GP about counselling or sex therapy, for you alone or as a couple.",
      "Contact Prostate Cancer UK's Specialist Nurses, whose sexual support service is open to you and your partner.",
    ],
    tryThisWeek: [
      "Share one feeling with your partner.",
      "Try a non-sexual way of being close.",
      "Ask your GP about sex therapy.",
    ],
    ask: "Can my partner come to appointments with me, and could we be referred for counselling or sex therapy?",
    interactive: {
      kind: "scenarios",
      title: "Closer, not just sex",
      scenarios: [
        {
          id: "avoid",
          situation: "You find yourself avoiding cuddles in case sex is expected.",
          options: [{ text: "Talk about it, and keep cuddling", best: true }, { text: "Keep your distance" }],
          why: "Some men avoid closeness because they worry their partner will expect penetrative sex. Being physically close in other ways can support your relationship.",
        },
        {
          id: "guess",
          situation: "You assume your partner is fine with the changes.",
          options: [{ text: "Ask how they actually feel", best: true }, { text: "Assume you know" }],
          why: "Try not to guess how your partner is feeling, as guesses can often be wrong.",
        },
        {
          id: "tired",
          situation: "You want to be close but feel exhausted.",
          options: [{ text: "Plan for when you have more energy", best: true }, { text: "Give up on intimacy" }],
          why: "Try to plan around when you have more energy. Hugging and holding each other can help you stay close when you do not feel like having sex.",
        },
        {
          id: "hard",
          situation: "You both find it too hard to talk about sex.",
          options: [{ text: "Ask about a counsellor or sex therapist", best: true }, { text: "Avoid the subject" }],
          why: "If you find it difficult to talk, it may help to write a letter to your partner or see a relationship counsellor.",
        },
      ],
    },
    sources: [PCUK_RELATIONSHIPS, PCUK_SEX, MAC_SEX, PCUK_HORMONE_FEELINGS],
    quiz: {
      question: "What helps when your sex life has changed?",
      options: [{ text: "Talking openly and staying close in other ways", right: true }, { text: "Avoiding the subject" }, { text: "Guessing how your partner feels" }],
      why: "Talking about sex and your thoughts and feelings will help you both deal with the changes.",
    },
  },
  {
    id: "pc-work",
    kicker: "Work and travel",
    question: "How do I manage work and travel after treatment?",
    hook: "The law treats cancer as a disability from the day of diagnosis. That gives you rights at work, and a little planning makes travel easier too.",
    short: "Cancer counts as a disability under the Equality Act from the day you are diagnosed, and your employer has a duty to make reasonable adjustments, such as time off for appointments and extra breaks. Access to Work may help with practical costs. Prostate cancer should not stop you travelling, with some planning for medicines, toilets and insurance.",
    sections: [
      {
        heading: "Your rights at work",
        paragraphs: [
          "Under the Equality Act 2010, you automatically meet the definition of disability from the day you are diagnosed with cancer. If you live in Northern Ireland, you are protected by the Disability Discrimination Act.",
          "This protection does not end when your treatment finishes. Even if you no longer have cancer, you are still protected against discrimination.",
        ],
      },
      {
        heading: "Reasonable adjustments",
        paragraphs: [
          "Your employer has a duty to make reasonable adjustments to where and how you work. Examples include time off for medical appointments, extra breaks if you feel tired, changing tasks that cause problems, and suitable toilet facilities.",
          "You do not have to tell your employer you have cancer. But unless they know, or should reasonably know, they do not have to make reasonable adjustments.",
        ],
      },
      {
        heading: "Going back",
        paragraphs: [
          "How long you take off depends on how quickly you recover, how much physical effort your work involves, and whether you feel ready. After surgery, avoid lifting heavy objects or doing manual work for eight weeks, and talk to your doctor about when it is safe to return.",
          "Urinary problems, hot flushes or tiredness may mean you need extra breaks. You could suggest what would help, such as working from home, flexible hours, or changing your job role or duties for a while.",
          "Access to Work is a government scheme that can give a grant for practical support, such as special equipment or travel to work if you cannot use public transport. It will not pay for reasonable adjustments, which your employer has to make.",
        ],
      },
      {
        heading: "Travelling",
        paragraphs: [
          "Prostate cancer should not stop you travelling, but ask your doctor or nurse how travel plans might affect your treatment. Cancer and treatments like surgery and hormone therapy can increase the risk of a blood clot, so check with your doctor before booking any long flights.",
          "Carry your medicines in your hand luggage, with extra in case of delays, and keep them in their labelled packaging. Travel insurance usually costs more after a cancer diagnosis, but many companies will insure you and some offer specialist cover.",
        ],
      },
      {
        heading: "Toilets on the move",
        paragraphs: [
          "If you have urinary or bowel problems, try to book an aisle seat close to the toilets, find out where public toilets are, and pack enough pads with a few extra. A spare change of clothes, wet wipes and dark trousers can also help.",
          "Prostate Cancer UK's urgent toilet card can help you get to a toilet quickly, and you can buy a RADAR key for locked public toilets.",
        ],
      },
    ],
    helps: [
      "Talk to your employer about what would help, such as extra breaks, flexible hours or working from home.",
      "Speak to your occupational health service, if your workplace has one.",
      "Check whether you can get statutory sick pay, or occupational or company sick pay.",
      "Ask your doctor or nurse how much time off you will need, and how travel might affect your treatment.",
      "If you need a doctor's letter for your medicines, ask for it at least four weeks before you travel.",
      "Shop around for travel insurance, as some companies offer specialist cover for people with cancer.",
    ],
    tryThisWeek: [
      "List the adjustments that would help.",
      "Check your sick pay entitlement.",
      "Ask your team about travel plans.",
    ],
    ask: "How much time off will I need, and is it safe for me to travel or fly yet?",
    interactive: {
      kind: "flip-cards",
      title: "Work and travel, card by card",
      intro: "Turn each card to see what each one can do for you.",
      cards: [
        { id: "equality", front: "The Equality Act", when: "England, Scotland and Wales", back: "You meet the definition of disability from the day of a cancer diagnosis, and stay protected after treatment ends." },
        { id: "adjustments", front: "Reasonable adjustments", when: "Changes your employer has a duty to make", back: "Such as time off for appointments, extra breaks if you are tired, and suitable toilet facilities." },
        { id: "atw", front: "Access to Work", when: "A government grant scheme", back: "Can help pay for equipment, or travel to work if you cannot use public transport. It will not pay for reasonable adjustments." },
        { id: "sickpay", front: "Sick pay", when: "If you need time off", back: "Check whether you can get statutory sick pay, or occupational or company sick pay." },
        { id: "insurance", front: "Travel insurance", when: "Before you book a trip", back: "Usually costs more after a cancer diagnosis, but many companies will insure you and some offer specialist cover." },
        { id: "toilet", front: "Urgent toilet card", when: "For urinary or bowel problems", back: "Show it to staff in shops, restaurants and other public places to help you get to a toilet quickly." },
      ],
    },
    sources: [PCUK_DAILY, MAC_WORK, GOV_DISABILITY, GOV_ATW, PCUK_SURGERY, PCUK_FATIGUE, PCUK_TRAVEL, PCUK_EBRT_SIDE],
    quiz: {
      question: "When does cancer count as a disability under the Equality Act?",
      options: [{ text: "From the day you are diagnosed", right: true }, { text: "Only after 12 months" }, { text: "Only while you are having treatment" }],
      why: "Under the Equality Act 2010, you automatically meet the definition of disability from the day you are diagnosed with cancer.",
    },
  },
  {
    id: "pc-mood",
    kicker: "Mood",
    question: "Why do I feel low on hormone therapy, or after treatment ends?",
    hook: "Hormone therapy can change your mood directly, and the end of treatment can bring its own low. Both are common, and both can be helped.",
    short: "Hormone therapy can affect your mood directly, and the diagnosis, side effects and the end of treatment can all bring low or anxious times. Talking, staying active and getting support can help, and depression can be treated. If you are struggling to cope, call NHS 111 or Samaritans on 116 123. In an emergency, call 999.",
    sections: [
      {
        heading: "Why mood can change",
        paragraphs: [
          "Hormone therapy itself can affect your mood. You may feel more emotional than usual, cry more easily or have mood swings, such as getting tearful and then angry. Just knowing that these feelings are caused by hormone therapy can help.",
          "Low mood can also come from the diagnosis itself, from side effects that change how you feel about yourself, or from the impact treatment is having on you and your family. Some men say they feel less masculine because of their diagnosis and treatment.",
        ],
      },
      {
        heading: "When treatment ends",
        paragraphs: [
          "Some men are relieved when treatment finishes, but for others the emotional impact only hits afterwards. You might feel angry about what you have been through, or sad or worried about the future.",
          "You might miss the regular support of seeing your doctor or nurse, and some men say they feel isolated when treatment ends. Worry about the cancer coming back is natural, and will often improve with time.",
        ],
      },
      {
        heading: "Signs of depression",
        paragraphs: [
          "Depression can cause feelings of unhappiness and hopelessness, losing interest in the things you usually enjoy, and feeling very tearful. You may feel constantly tired, sleep badly and have no appetite.",
          "Tell your doctor or nurse if you have symptoms of depression for most of the day and they do not go away after two weeks. Depression is a real illness, not a sign of weakness, and with the right treatment and support most people with depression can make a full recovery.",
        ],
      },
      {
        heading: "What can help",
        paragraphs: [
          "Talking to people you trust, joining a support group, or speaking to someone who has been through prostate cancer can help you feel less alone. Regular physical activity, starting slowly with a short walk, and ways to relax, such as yoga or listening to music, may also help.",
          "You can refer yourself to NHS talking therapies for low mood and worry without speaking to a GP, as long as you are registered with one. Your GP can also talk to you about treatments such as guided self-help, counselling or anti-depressants.",
          "If you have been diagnosed with a mental health condition, carry on with your treatment as planned, unless your medical team tells you otherwise.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, call NHS 111 and select the mental health option, or ask for an urgent GP appointment. You can call Samaritans for free on 116 123 at any time, or text SHOUT to 85258.",
          "If someone's life is at risk, or you do not feel you can keep yourself or someone else safe, call 999 or go to A&E now. A mental health emergency should be taken as seriously as a physical one.",
        ],
      },
    ],
    helps: [
      "Talk to someone you trust about how you are feeling.",
      "Tell your GP, doctor or nurse if low mood lasts for most of the day for more than two weeks.",
      "Refer yourself to NHS talking therapies, if you are registered with a GP.",
      "Do some regular physical activity, starting slowly with a short walk.",
      "If you are thinking about stopping hormone therapy, talk to your doctor or nurse.",
      "If you need to talk now, call Samaritans on 116 123, or NHS 111.",
    ],
    tryThisWeek: [
      "Tell one person how you feel.",
      "Take a short walk each day.",
      "Save 116 123 in your phone.",
    ],
    ask: "Could my mood be linked to my hormone therapy, and what support can you refer me to?",
    interactive: {
      kind: "signs",
      title: "Changes to tell your GP about",
      intro: "Tick any you have noticed. Low mood can be treated, and you do not have to deal with it alone.",
      signs: ["Feeling low most of the day", "Losing interest in things you enjoy", "Feeling hopeless or very tearful", "Feeling anxious or worried a lot", "Sleeping badly", "Little or no appetite", "Feeling constantly tired", "Mood swings, tearful then angry"],
      after: "If these last more than two weeks, tell your GP, doctor or nurse. If you need help now, call NHS 111 or Samaritans on 116 123. In an emergency, call 999.",
      copyHeading: "Changes in my mood",
    },
    sources: [PCUK_HORMONE_FEELINGS, PCUK_EMOTIONAL, PCUK_WELLBEING, PCUK_FOLLOW_UP, NHS_TALKING, NHS_URGENT, NHS_SUICIDAL, NHS_DEPRESSION, PCUK_HORMONE_EFFECTS],
    quiz: {
      question: "Who can you call free at any time if you are struggling?",
      options: [{ text: "Samaritans, on 116 123", right: true }, { text: "Only your hospital team" }, { text: "No one until your next appointment" }],
      why: "You can call Samaritans for free on 116 123 at any time, or text SHOUT to 85258.",
    },
  },
];
