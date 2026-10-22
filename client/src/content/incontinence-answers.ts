import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Urinary incontinence page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, the British Association
// of Urological Surgeons (BAUS, its condition page and patient leaflets), Bladder Health UK and Prostate Cancer UK.
// General information only; it never replaces what a person's own GP, continence nurse or physiotherapist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const baus = (label: string, path: string): LearnSource => ({ label: `BAUS: ${label}`, url: `https://www.baus.org.uk/${path}` });
const bhuk = (label: string, path: string): LearnSource => ({ label: `Bladder Health UK: ${label}`, url: `https://bladderhealthuk.org/${path}` });
const LEAFLETS = "_userfiles/pages/files/patients/leaflets";

const NHS_UI = nhs("Urinary incontinence", "conditions/urinary-incontinence/");
const NHS_UI_SYMPTOMS = nhs("Symptoms of urinary incontinence", "conditions/urinary-incontinence/symptoms/");
const NHS_UI_CAUSES = nhs("Causes of urinary incontinence", "conditions/urinary-incontinence/causes/");
const NHS_UI_DIAGNOSIS = nhs("Diagnosis of urinary incontinence", "conditions/urinary-incontinence/diagnosis/");
const NHS_UI_TREATMENT = nhs("Non-surgical treatment for urinary incontinence", "conditions/urinary-incontinence/treatment/");
const NHS_UI_SURGERY = nhs("Surgery and procedures for urinary incontinence", "conditions/urinary-incontinence/surgery/");
const NHS_UI_PRODUCTS = nhs("Incontinence products", "conditions/urinary-incontinence/incontinence-products/");
const NHS_UI_10WAYS = nhs("10 ways to stop leaks", "conditions/urinary-incontinence/10-ways-to-stop-leaks/");
const NHS_OXY_ABOUT = nhs("About oxybutynin", "medicines/oxybutynin/about-oxybutynin/");
const NHS_OXY_SIDE = nhs("Side effects of oxybutynin", "medicines/oxybutynin/side-effects-of-oxybutynin/");
const NHS_OXY_QS = nhs("Common questions about oxybutynin", "medicines/oxybutynin/common-questions-about-oxybutynin/");
const NHS_MIRA_ABOUT = nhs("About mirabegron", "medicines/mirabegron/about-mirabegron/");
const NHS_MIRA_QS = nhs("Common questions about mirabegron", "medicines/mirabegron/common-questions-about-mirabegron/");
const NHS_ENLARGED_PROSTATE = nhs("Enlarged prostate", "conditions/enlarged-prostate/");

const BAUS_UI = baus("Incontinence of urine", "patients/conditions/5/incontinence_of_urine");
const BAUS_BT = baus("Bladder training (leaflet)", `${LEAFLETS}/Bladder%20training.pdf`);
const BAUS_PF_WOMEN = baus("Pelvic floor exercises in women (leaflet)", `${LEAFLETS}/Pelvic%20floor%20XS%20female.pdf`);
const BAUS_PF_MEN = baus("Pelvic floor exercises in men (leaflet)", `${LEAFLETS}/Pelvic%20floor%20XS%20male.pdf`);
const BAUS_OAB = baus("Comparison of treatment options for overactive bladder (leaflet)", `${LEAFLETS}/OAB%20options.pdf`);
const BAUS_SUI = baus("Comparison of treatment options for stress urinary incontinence in women (leaflet)", `${LEAFLETS}/SUI%20options.pdf`);

const BHUK_MEN = bhuk("Men with incontinence: treating and managing", "continence-support/men-with-incontinence");
const BHUK_OAB = bhuk("Overactive bladder", "page/index/306");
const BHUK_SUI = bhuk("Stress urinary incontinence", "page/index/307");
const BHUK_IMPACT = bhuk("The impact of urinary incontinence", "page/index/320");
const BHUK_COPE = bhuk("Advice on how to cope with incontinence from a sufferer", "page/index/321");

const PCUK: LearnSource = { label: "Prostate Cancer UK: Urinary problems after prostate cancer treatment", url: "https://prostatecanceruk.org/prostate-information-and-support/living-with-prostate-cancer/urinary-problems" };
const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const incontinenceAnswers: LearnArticle[] = [
  {
    id: "ui-what-it-is",
    kicker: "Understanding",
    question: "What is urinary incontinence?",
    hook: "Leaking urine without meaning to. It affects millions of people, and it is a problem that can usually be helped.",
    short: "Urinary incontinence is the unintentional passing of urine. It is a common problem thought to affect millions of people, and there are several types. Seeing a GP can be the first step towards managing it, and Bladder Health UK says about 80% of it can be cured or improved.",
    sections: [
      {
        heading: "Leaking without meaning to",
        paragraphs: [
          "Urinary incontinence is the unintentional passing of urine. When and how it happens depends on the type of incontinence you have.",
          "It happens when the normal process of storing and passing urine is disrupted. Some causes lead to short-term incontinence and others to a long-term problem, and if the cause can be treated, this may cure the incontinence.",
        ],
      },
      {
        heading: "A very common problem",
        paragraphs: [
          "The NHS says it is a common problem thought to affect millions of people. The British Association of Urological Surgeons says there may be as many as 3 million people in the UK with it, and Bladder Health UK estimates between 3 and 6 million.",
          "Across a range of UK studies, Bladder Health UK says, it affects around 40% of women and 10% of men. Incontinence becomes more common in middle age and is very common in people over 80, but it is not an inevitable part of ageing.",
        ],
      },
      {
        heading: "The main types",
        paragraphs: [
          "Most people with urinary incontinence have either stress incontinence or urge incontinence. Stress incontinence is when urine leaks as the bladder is put under sudden pressure, such as when you cough or laugh. Urge incontinence is when urine leaks as you feel a sudden, intense urge to pee, or soon afterwards.",
          "Some people have a mixture of both. Less common kinds include overflow incontinence, when the bladder cannot fully empty, and total incontinence, when the bladder cannot store any urine at all.",
        ],
      },
      {
        heading: "Not something to put up with",
        paragraphs: [
          "Many people find incontinence difficult to discuss, and many older people believe it is part of ageing and that little can be done. Bladder Health UK says this is not the case, as about 80% of urinary incontinence can be cured or improved.",
          "The NHS advises seeing a GP if you have any type of urinary incontinence. You should not feel embarrassed, and it can be the first step towards finding a way to manage the problem.",
        ],
      },
    ],
    helps: [
      "See a GP if you have any type of urinary incontinence: it is a common problem and you should not feel embarrassed.",
      "Consult your GP or a continence specialist when symptoms start, for an early diagnosis and the right treatment.",
      "Try pelvic floor exercises: most people can benefit from strengthening their pelvic floor muscles.",
      "Keep to a healthy weight, as being obese can increase the risk of urinary incontinence.",
      "Cut down on alcohol and drinks containing caffeine, such as tea, coffee and cola.",
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Start pelvic floor exercises.",
      "Cut down on caffeine.",
    ],
    ask: "Which kind of incontinence do I have, and what is likely to help?",
    interactive: {
      kind: "scenarios",
      title: "Common thoughts about leaks",
      scenarios: [
        {
          id: "ageing",
          situation: "You think leaks are just part of getting older.",
          options: [{ text: "See a GP: it can usually be helped", best: true }, { text: "Put up with it" }],
          why: "Incontinence is not an inevitable part of ageing, and Bladder Health UK says about 80% of urinary incontinence can be cured or improved.",
        },
        {
          id: "embarrassed",
          situation: "You feel too embarrassed to mention it to a GP.",
          options: [{ text: "Mention it anyway", best: true }, { text: "Wait and hope it stops" }],
          why: "The NHS advises seeing a GP if you have any type of urinary incontinence. You should not feel embarrassed.",
        },
        {
          id: "sneeze",
          situation: "You leak a little when you sneeze.",
          options: [{ text: "It sounds like stress incontinence", best: true }, { text: "It means you are too stressed" }],
          why: "Stress incontinence is when urine leaks as the bladder is put under sudden pressure, such as when you cough or laugh. It is not about feeling stressed.",
        },
      ],
    },
    sources: [NHS_UI, NHS_UI_SYMPTOMS, BAUS_UI, BHUK_IMPACT, BHUK_MEN, NHS_UI_CAUSES],
    quiz: {
      question: "How much urinary incontinence can be cured or improved, says Bladder Health UK?",
      options: [{ text: "About 80%", right: true }, { text: "About 10%" }, { text: "None of it" }],
      why: "Bladder Health UK says this is not the case, as about 80% of urinary incontinence can be cured or improved.",
    },
  },
  {
    id: "ui-types",
    kicker: "Understanding",
    question: "What is the difference between stress, urge and mixed incontinence?",
    hook: "A leak on a cough, a sudden rush to the toilet, or both. Knowing which one you have points to the treatment that fits.",
    short: "Stress incontinence is leaking when the bladder is under sudden pressure, such as a cough or a laugh. Urge incontinence is leaking with or just after a sudden, intense need to pee, and is often part of an overactive bladder. Mixed incontinence is both, and the British Association of Urological Surgeons says 90% of people with incontinence have stress incontinence, urge incontinence or both.",
    sections: [
      {
        heading: "Stress incontinence",
        paragraphs: [
          "Stress incontinence is when you leak urine as your bladder is put under sudden extra pressure, such as when you cough. It is not related to feeling stressed.",
          "Sneezing, laughing, heavy lifting and exercise can also cause leaks. The amount is usually small, but it can sometimes be larger, particularly if your bladder is very full.",
        ],
      },
      {
        heading: "Urge incontinence",
        paragraphs: [
          "Urge incontinence is when you feel a sudden and very intense need to pass urine and cannot delay going to the toilet. There are often only a few seconds between the need and the leak.",
          "It can be triggered by a sudden change of position, or even the sound of running water. It often happens as part of overactive bladder syndrome, when the bladder muscle is more active than usual, which can also mean needing to pee very often, including several times a night.",
        ],
      },
      {
        heading: "An overactive bladder",
        paragraphs: [
          "With an overactive bladder, the bladder muscle is thought to contract too often or on its own, so you can feel a strong, sudden urge even when the bladder holds little urine. Bladder Health UK says about 1 in 6 adults reported some symptoms in two large studies, and about 1 in 3 people with an overactive bladder have episodes of urge incontinence.",
          "Symptoms can include needing to pee more than 8 times during the day, getting up more than once at night to pee, and leaking during sex.",
        ],
      },
      {
        heading: "Mixed and other types",
        paragraphs: [
          "Mixed incontinence is when you have symptoms of both, such as leaking when you cough and also having very intense urges. The British Association of Urological Surgeons says 90% of people with incontinence have stress incontinence, urge incontinence or both.",
          "Overflow incontinence, also called chronic urinary retention, is when the bladder cannot completely empty, so small trickles of urine leak very often. Total incontinence is continuous, and can mean passing large amounts of urine constantly, even at night.",
        ],
      },
      {
        heading: "When not being able to pee is urgent",
        paragraphs: [
          "The NHS page on an enlarged prostate says to ask for an urgent GP appointment or get help from NHS 111 if you cannot pee at all. You can call 111 or get help from 111 online.",
          "Prostate Cancer UK says that suddenly and painfully not being able to urinate needs treating straight away: call your doctor or nurse, or go to your nearest A&E department.",
        ],
      },
    ],
    helps: [
      "See a GP if you have any type of urinary incontinence.",
      "Note whether leaks happen when you cough or laugh, and how often you need the toilet in the day or night, as the GP will ask.",
      "If you are struggling with an overactive bladder, call Bladder Health UK's confidential Advice Line on 0121 702 0820.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you cannot pee at all.",
      "If you suddenly and painfully cannot urinate, call your doctor or nurse, or go to A&E.",
    ],
    tryThisWeek: [
      "Note when your leaks happen.",
      "Book a GP appointment.",
      "Know when not peeing is urgent.",
    ],
    ask: "Is my incontinence stress, urge, mixed or another type?",
    interactive: {
      kind: "flip-cards",
      title: "The types, card by card",
      intro: "Turn each card to see what each type of incontinence means.",
      cards: [
        { id: "stress", front: "Stress incontinence", when: "Coughing, sneezing, laughing, lifting", back: "Urine leaks when the bladder is put under sudden extra pressure. It is not related to feeling stressed." },
        { id: "urge", front: "Urge incontinence", when: "A sudden, intense need to pee", back: "Urine leaks as you feel the urge, or soon after. There are often only a few seconds between the two." },
        { id: "mixed", front: "Mixed incontinence", when: "Both at once", back: "Symptoms of both, such as leaking when you cough and also having very intense urges." },
        { id: "overflow", front: "Overflow incontinence", when: "Also called chronic urinary retention", back: "The bladder cannot completely empty, so small trickles of urine leak very often." },
        { id: "total", front: "Total incontinence", when: "Continuous leaking", back: "The bladder cannot store urine, so large amounts may pass constantly, even at night." },
      ],
    },
    sources: [NHS_UI_SYMPTOMS, NHS_UI, BAUS_UI, BHUK_OAB, NHS_ENLARGED_PROSTATE, PCUK, NHS_UI_DIAGNOSIS],
    quiz: {
      question: "Which type of incontinence is leaking when you cough or sneeze?",
      options: [{ text: "Stress incontinence", right: true }, { text: "Urge incontinence" }, { text: "Total incontinence" }],
      why: "Stress incontinence is when you leak urine as your bladder is put under sudden extra pressure, such as when you cough.",
    },
  },
  {
    id: "ui-causes",
    kicker: "Causes",
    question: "Why has this happened to me?",
    hook: "Weak or damaged pelvic floor muscles, an overactive bladder muscle, or something in the way. Pregnancy, the menopause, prostate treatment and age can all play a part.",
    short: "Stress incontinence usually comes from weakened or damaged muscles that keep the urethra closed, often after childbirth, with extra weight, or after surgery such as removal of the prostate. Urge incontinence usually comes from an overactive bladder muscle. Age, family history, some medicines and constipation can also play a part.",
    sections: [
      {
        heading: "When the muscles are weak",
        paragraphs: [
          "Stress incontinence happens when the pressure inside your bladder becomes greater than the strength of your urethra to stay closed. The urethra is the tube urine passes through to leave the body.",
          "The urethra may not stay closed if the pelvic floor muscles are weak or damaged, or if the ring of muscle that keeps it closed, the urethral sphincter, is damaged. This can be caused by damage during childbirth, extra pressure on the tummy from pregnancy or obesity, surgery such as a hysterectomy or removal of the prostate, and some neurological conditions and medicines.",
        ],
      },
      {
        heading: "Pregnancy, the menopause and age",
        paragraphs: [
          "Being pregnant and giving birth can weaken the muscles that control the flow of urine. The British Association of Urological Surgeons also lists the loss of hormone support at the menopause, a hysterectomy and increasing age as causes of the weakness behind stress incontinence.",
          "Bladder Health UK says one in three women will have stress urinary incontinence at some time in their lives. The pelvic floor can also be weakened by prolonged straining to empty your bowels and a lack of exercise.",
        ],
      },
      {
        heading: "After prostate treatment",
        paragraphs: [
          "Many men get urinary problems as a side effect of prostate cancer treatment, because it can damage the nerves and muscles that control when you urinate. Leaking urine is the most common urinary problem after surgery to remove the prostate.",
          "In men, incontinence can also be brought on by an enlarged prostate, diabetes and Parkinson's disease. An enlarged prostate can block the bladder so it cannot empty fully, which can cause overflow incontinence.",
        ],
      },
      {
        heading: "When the bladder muscle is overactive",
        paragraphs: [
          "Urge incontinence can be caused by a problem with the detrusor muscles in the bladder wall, which contract too often. The reason may not be clear, but possible causes include too much alcohol or caffeine, not drinking enough, constipation, urinary tract infections and neurological conditions.",
          "Bladder Health UK adds that men with an enlarged prostate, and people with conditions such as Parkinson's disease, multiple sclerosis or a stroke, may develop an overactive bladder. Diabetes and drinking excess fluids are also listed.",
        ],
      },
      {
        heading: "Medicines and other risks",
        paragraphs: [
          "Some medicines can disrupt storing and passing urine, or increase how much urine you make. These include ACE inhibitors, diuretics, some antidepressants, hormone replacement therapy and sedatives. Stopping them, if a doctor advises it, may help.",
          "Things that raise the risk without directly causing it include increasing age, a family history of incontinence, and lower urinary tract symptoms. Smoking, a chronic cough and being overweight can also strain the pelvic floor.",
        ],
      },
    ],
    helps: [
      "Ask your GP whether any of your medicines could be adding to it, and stop a medicine only if a doctor advises it.",
      "If you smoke, try to stop, as coughing puts strain on your pelvic floor muscles.",
      "Treat constipation promptly, as straining to poo weakens your pelvic floor muscles.",
      "Watch your weight, as extra weight puts more strain on your pelvic floor muscles and your bladder.",
      "If you are starting prostate cancer treatment, ask your doctor about the possible urinary side effects.",
    ],
    tryThisWeek: [
      "Ask about your medicines.",
      "Get help to stop smoking.",
      "Deal with constipation early.",
    ],
    ask: "What is causing my incontinence, and can that cause be treated?",
    interactive: {
      kind: "risk-check",
      title: "What can make leaks more likely?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "childbirth", label: "Pregnancy or a vaginal birth", note: "Being pregnant and giving birth can weaken the muscles that control the flow of urine.", changeable: false },
        { id: "weight", label: "Being overweight", note: "Extra weight strains the pelvic floor. Symptoms may improve, and could go away completely, with weight loss.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Coughing puts strain on your pelvic floor muscles.", changeable: true },
        { id: "constipation", label: "Constipation", note: "Straining to poo weakens your pelvic floor muscles and makes incontinence worse.", changeable: true },
        { id: "drinks", label: "Lots of alcohol or caffeine", note: "A possible cause of the bladder muscle contracting too often.", changeable: true },
        { id: "medicines", label: "Some medicines", note: "Such as diuretics or sedatives. Stopping them, if a doctor advises it, may help.", changeable: true },
        { id: "prostate", label: "Prostate surgery or treatment", note: "It can damage the nerves and muscles that control when you urinate.", changeable: false },
        { id: "age", label: "Increasing age or family history", note: "Both raise the risk, though incontinence is not an inevitable part of ageing.", changeable: false },
      ],
    },
    sources: [NHS_UI_CAUSES, NHS_UI, BAUS_UI, BHUK_SUI, BHUK_MEN, BAUS_PF_WOMEN, BAUS_PF_MEN, PCUK, BHUK_OAB, NHS_UI_10WAYS],
    quiz: {
      question: "Which muscles, when weak or damaged, can let the urethra leak?",
      options: [{ text: "The pelvic floor muscles", right: true }, { text: "The heart muscle" }, { text: "The calf muscles" }],
      why: "The urethra may not stay closed if the pelvic floor muscles are weak or damaged, or if the ring of muscle that keeps it closed, the urethral sphincter, is damaged.",
    },
  },
  {
    id: "ui-tests",
    kicker: "Tests",
    question: "What will the GP ask and check?",
    hook: "Questions about your leaks, a few days of bladder diary, and usually a simple urine test. Most people are diagnosed at the GP surgery.",
    short: "Urinary incontinence can usually be diagnosed after a GP appointment. The GP will ask about your symptoms, may suggest a bladder diary for at least 3 days, and may examine you and test your urine. Further tests, such as urodynamics, are usually only needed if treatment does not work.",
    sections: [
      {
        heading: "The questions",
        paragraphs: [
          "Urinary incontinence can usually be diagnosed after a GP appointment. The GP will ask whether you leak when you cough or laugh, whether you need the toilet often in the day or night, whether you have difficulty peeing, which medicines you take, and how much fluid, alcohol or caffeine you drink.",
          "Try not to be embarrassed. Urinary incontinence is a common problem, and it is likely the GP has seen many people with the same problem.",
        ],
      },
      {
        heading: "A bladder diary",
        paragraphs: [
          "The GP may suggest a diary of your bladder habits for at least 3 days. It records how much and what you drink, how often you pee and how much, how many times you leak, and how often you get an urgent need to go.",
          "Bladder Health UK says you can start a diary before seeing your GP, which can help speed up the diagnosis. Bringing the record to your appointment helps the doctor understand your symptoms and could give clues about the cause.",
        ],
      },
      {
        heading: "The examination",
        paragraphs: [
          "If you have a vagina, the GP may do a pelvic examination, which usually involves undressing from the waist down. You may be asked to cough to see if urine leaks and to squeeze your pelvic floor muscles, and the GP may check for a prolapse.",
          "If you have a penis, the GP may check your prostate gland by feeling it through your bottom, called a digital rectal examination. The British Association of Urological Surgeons says the examination may also include measuring your blood pressure and body mass index.",
        ],
      },
      {
        heading: "Simple tests",
        paragraphs: [
          "If an infection is possible, a small chemically treated stick is dipped into a urine sample, and it changes colour if bacteria are present. It can also check for blood and protein.",
          "If overflow incontinence is suspected, a residual urine test checks how much urine is left in your bladder after you pee, usually with an ultrasound scan.",
        ],
      },
      {
        heading: "If more tests are needed",
        paragraphs: [
          "The GP will usually start treatment first and suggest further tests if it does not work. These can include a cystoscopy, where a thin tube with a camera looks inside the bladder, and urodynamic tests, which check how the bladder and urethra work.",
          "Urodynamic tests can measure the pressure in your bladder and tummy with thin catheters, and ask you to pee into a machine that measures the amount and flow. A urology clinic may also do a pad test or measure how fast you pass urine.",
        ],
      },
    ],
    helps: [
      "Keep a bladder diary for at least 3 days and take it to your appointment.",
      "Write down the questions you want to ask in a small notebook, and take it with you.",
      "Be as honest as you can about how often you leak and how much it affects your life.",
      "Get to the surgery early and find the toilets if you are worried you may need to go.",
      "If you cannot give a urine sample there and then, it is often possible to bring one in later.",
    ],
    tryThisWeek: [
      "Start a 3-day bladder diary.",
      "Write down your questions.",
      "Be honest about the impact.",
    ],
    ask: "Do I need any further tests, or can we start treatment now?",
    interactive: {
      kind: "timeline",
      title: "From first visit to answers",
      steps: [
        { id: "before", when: "Before the visit", title: "Start a bladder diary", points: ["What and how much you drink", "How often you pee, and how much", "Leaks and urgent needs to go"] },
        { id: "visit", when: "At the GP", title: "Questions and an examination", points: ["When you leak, and how often", "Your medicines and drinks", "A pelvic or prostate check"] },
        { id: "urine", when: "Simple tests", title: "Urine and bladder checks", points: ["A dipstick test for infection", "A scan of the urine left after peeing, if needed"] },
        { id: "treat", when: "Usually next", title: "Treatment starts", points: ["Usually before any further tests", "More tests if treatment does not work"] },
        { id: "clinic", when: "If needed", title: "Hospital or clinic tests", points: ["Cystoscopy: a camera in the bladder", "Urodynamics: bladder pressure tests"] },
      ],
    },
    sources: [NHS_UI_DIAGNOSIS, BAUS_UI, NHS_UI, BHUK_SUI, BHUK_COPE, BHUK_MEN],
    quiz: {
      question: "For how long may the GP suggest keeping a bladder diary?",
      options: [{ text: "At least 3 days", right: true }, { text: "One hour" }, { text: "A whole year" }],
      why: "The GP may suggest a diary of your bladder habits for at least 3 days.",
    },
  },
  {
    id: "ui-pelvic-floor",
    kicker: "Treatment",
    question: "How do I do pelvic floor exercises properly?",
    hook: "Quick squeezes and long holds, a few times a day, for at least three months. Done properly, they can reduce or even stop leaks.",
    short: "Your pelvic floor muscles surround the bladder and urethra and help control the flow of urine. Pelvic floor exercises strengthen them with quick and long squeezes, and an NHS programme includes at least 8 squeezes, at least 3 times a day, for at least 3 months. It can take a few months to see the benefit.",
    sections: [
      {
        heading: "What the pelvic floor does",
        paragraphs: [
          "The pelvic floor is a layer of muscles and ligaments that stretches like a hammock from the pubic bone at the front to the coccyx at the bottom of the spine. It supports the pelvic organs and helps the urethra stay closed when you cough, sneeze or strain.",
          "Weak or damaged pelvic floor muscles can cause urinary incontinence, so exercising them is often recommended. Research has shown that pelvic floor muscle training can benefit everyone with urinary incontinence.",
        ],
      },
      {
        heading: "Finding the right muscles",
        paragraphs: [
          "You can feel your pelvic floor muscles if you imagine stopping yourself peeing and passing wind at the same time. Squeeze and lift inside, without pulling in your tummy, squeezing your legs together, tightening your buttocks or holding your breath.",
          "The British Association of Urological Surgeons advises against stopping the flow while you are actually peeing, because it can cause problems with bladder emptying. Its leaflet for men says this check can be done no more than once a week.",
        ],
      },
      {
        heading: "Quick squeezes and long holds",
        paragraphs: [
          "For quick squeezes, tighten the muscles quickly, hold for a second or two and relax, repeating up to 10 times. For long squeezes, hold for longer, building up gradually to 10 seconds with each squeeze, and rest between them.",
          "A specialist programme should include a minimum of 8 contractions at least 3 times a day, and last for at least 3 months. Breathe normally and relax while you do them, and do not overdo it, or the muscles will get tired.",
        ],
      },
      {
        heading: "Making them a habit",
        paragraphs: [
          "Link the exercises to everyday things, such as after emptying your bladder, while answering the phone or whenever you turn on a tap. Tightening the pelvic floor before you cough, lift anything heavy or get up from a chair also helps.",
          "You may have to do them for a few months before you see any benefit, and they take three to six months to give the most benefit. The British Association of Urological Surgeons suggests carrying on for life, and seeking help if there is little or no change after three months.",
        ],
      },
      {
        heading: "Getting help with them",
        paragraphs: [
          "A GP may refer you to a specialist, who checks whether you can squeeze your pelvic floor and by how much, and gives you a programme based on that. The British Association of Urological Surgeons says the exercises are 50 to 70% effective for stress incontinence in women if supervised by a continence adviser or physiotherapist.",
          "If you cannot squeeze the muscles, electrical stimulation through a small probe may be recommended. Pelvic floor exercises are also an important part of preparing for prostate removal surgery, and can help reduce leaking afterwards.",
        ],
      },
    ],
    helps: [
      "Do pelvic floor exercises every day, with both short squeezes and long squeezes.",
      "Aim for at least 8 squeezes, at least 3 times a day, for at least 3 months.",
      "Tighten your pelvic floor before you cough, lift something or get up from a chair.",
      "Ask your GP about a referral to a specialist if you are not sure you are doing them correctly.",
      "Seek help from a health professional if there is little or no change after three months.",
    ],
    tryThisWeek: [
      "Do short and long squeezes daily.",
      "Squeeze before you cough or lift.",
      "Ask for a referral if unsure.",
    ],
    ask: "Can I be referred to a pelvic floor physiotherapist or continence service?",
    interactive: {
      kind: "timeline",
      title: "A pelvic floor routine, step by step",
      steps: [
        { id: "find", when: "Step 1", title: "Find the muscles", points: ["Imagine stopping wee and wind together", "Keep tummy, legs and buttocks relaxed"] },
        { id: "long", when: "Step 2", title: "Long squeezes", points: ["Hold, building up to 10 seconds", "Rest between each one"] },
        { id: "quick", when: "Step 3", title: "Quick squeezes", points: ["Squeeze and lift quickly, then relax", "Up to 10 in a row"] },
        { id: "daily", when: "Every day", title: "Make it routine", points: ["At least 8 squeezes, 3 times a day", "Link them to a tap, a drink or the phone"] },
        { id: "months", when: "After 3 months", title: "Check your progress", points: ["Keep going if they are helping", "Seek help if little has changed"] },
      ],
    },
    sources: [NHS_UI_TREATMENT, NHS_UI_10WAYS, BAUS_PF_WOMEN, BAUS_PF_MEN, BAUS_SUI, PCUK, NHS_UI],
    quiz: {
      question: "How long should a pelvic floor programme last, says the NHS?",
      options: [{ text: "At least 3 months", right: true }, { text: "One week" }, { text: "One day" }],
      why: "A specialist programme should include a minimum of 8 contractions at least 3 times a day, and last for at least 3 months.",
    },
  },
  {
    id: "ui-bladder-training",
    kicker: "Treatment",
    question: "How does bladder training work?",
    hook: "Teaching your bladder to hold more and wait longer, a few minutes at a time, over at least six weeks.",
    short: "Bladder training teaches you to wait longer between feeling the need to pee and actually going. It is one of the first treatments for urge incontinence and an overactive bladder, often combined with pelvic floor exercises, and the NHS says a course usually lasts at least 6 weeks.",
    sections: [
      {
        heading: "What it is for",
        paragraphs: [
          "If you have been diagnosed with urge incontinence, one of the first treatments you may be offered is bladder training. It may be combined with pelvic floor exercises if you have mixed incontinence.",
          "The British Association of Urological Surgeons calls it the first-line treatment for an overactive bladder. It teaches your bladder to hold more urine, reduces how often you need to go, and can help stop leaks when you get a sudden urge.",
        ],
      },
      {
        heading: "Why going just in case does not help",
        paragraphs: [
          "With an overactive bladder, it can feel as though the bladder contracts before you are ready to go. This can happen if you get into the habit of going just in case, because the bladder learns to hold only a small amount.",
          "The aim of training is for you to control your bladder, instead of your bladder controlling you.",
        ],
      },
      {
        heading: "How to do it",
        paragraphs: [
          "When you feel the urge, do not go straight away. Try to distract yourself for one minute from the first urge, using whatever works best for you, and gradually make this longer over time.",
          "The next week, try to delay passing urine for an extra five to 15 minutes. Bladder Health UK describes another approach, gradually spacing out toilet visits over days or weeks, and says some people eventually manage 3 to 4 hours between them.",
        ],
      },
      {
        heading: "Keeping track",
        paragraphs: [
          "A diary of how much urine you pass and how often can show your progress, with fewer toilet visits and longer gaps between them. Training is often supervised by a trained healthcare professional, who can support you and answer your questions.",
          "Doing pelvic floor exercises alongside it helps you find and build the muscles that stop leaks, and is especially helpful with urgency and mixed incontinence.",
        ],
      },
      {
        heading: "Sticking with it",
        paragraphs: [
          "The NHS says a course usually lasts at least 6 weeks. Your bladder is like any other muscle, and it may take a few months of training to reach its full potential, so keep practising to keep the benefit.",
          "The British Association of Urological Surgeons puts the success rate of cutting down caffeine and alcohol, pelvic floor exercises and bladder training at greater than 50% for an overactive bladder. If bladder training does not help, ask your doctor whether any medicines could help.",
        ],
      },
    ],
    helps: [
      "When you feel the urge, try to distract yourself for one minute before going, and build this up over time.",
      "Keep a diary of how often you go and how much you pass, to see your progress.",
      "Avoid going to the toilet just in case; go only when you feel your bladder is full.",
      "Do pelvic floor exercises alongside bladder training.",
      "Keep going for at least 6 weeks.",
      "If bladder training does not help, ask your doctor whether a medicine could help.",
    ],
    tryThisWeek: [
      "Wait one minute after an urge.",
      "Keep a bladder diary.",
      "Stop going just in case.",
    ],
    ask: "Could a continence nurse or physiotherapist supervise my bladder training?",
    interactive: {
      kind: "timeline",
      title: "Bladder training, week by week",
      steps: [
        { id: "week-1", when: "Week 1", title: "Hold off for a minute", points: ["When the urge comes, do not go at once", "Distract yourself for one minute"] },
        { id: "week-2", when: "Week 2", title: "Add a little more", points: ["Try to wait an extra 5 to 15 minutes", "Keep noting visits in your diary"] },
        { id: "weeks", when: "Up to week 6", title: "Keep stretching the gap", points: ["Fewer visits, longer gaps", "Pelvic floor exercises alongside"] },
        { id: "months", when: "A few months", title: "Full potential", points: ["Training can take a few months", "Keep practising to keep the benefit"] },
      ],
    },
    sources: [NHS_UI_TREATMENT, BAUS_BT, BHUK_MEN, BAUS_OAB, BAUS_PF_WOMEN],
    quiz: {
      question: "Which habit can teach the bladder to hold only a small amount?",
      options: [{ text: "Going to the toilet just in case", right: true }, { text: "Drinking water" }, { text: "Sleeping on your back" }],
      why: "This can happen if you get into the habit of going just in case, because the bladder learns to hold only a small amount.",
    },
  },
  {
    id: "ui-medicines",
    kicker: "Treatment",
    question: "Which medicines help an overactive bladder?",
    hook: "Tablets that calm the bladder muscle, usually tried after bladder training. They can take a few weeks to work, and they are reviewed regularly.",
    short: "If bladder training has not helped urge incontinence, a GP may prescribe an antimuscarinic, such as oxybutynin, tolterodine or darifenacin. If these are unsuitable or cause side effects, mirabegron or vibegron may be offered. Oxybutynin can take 4 weeks or more to work fully, and treatment is reviewed after 4 weeks, then every 6 to 12 months.",
    sections: [
      {
        heading: "Antimuscarinics",
        paragraphs: [
          "If bladder training does not help urge incontinence, a GP may prescribe a medicine called an antimuscarinic, also called an anticholinergic. Common ones include oxybutynin, tolterodine and darifenacin, usually taken as tablets 2 or 3 times a day, and oxybutynin also comes as a patch.",
          "Oxybutynin works by relaxing the muscles in your bladder, so it can hold more and you do not need to pee as often or as urgently. You usually start on a low dose, which can be increased until the medicine works.",
        ],
      },
      {
        heading: "Mirabegron and vibegron",
        paragraphs: [
          "If antimuscarinics are unsuitable, have not helped, or cause unpleasant side effects, you may be offered mirabegron or vibegron. They relax the bladder muscle, in a slightly different way, and usually come as a tablet or capsule once a day.",
          "Common side effects can include constipation, diarrhoea, feeling sick and headache. The NHS page on mirabegron also lists urinary tract infections and a fast heartbeat.",
        ],
      },
      {
        heading: "Giving them time",
        paragraphs: [
          "Oxybutynin starts to relax the bladder after about 3 to 4 hours, but may take 4 weeks or longer to work fully. If your symptoms do not start to improve after 1 to 2 weeks, talk to your doctor. Mirabegron can take 4 to 8 weeks before you notice any improvement.",
          "You will be reviewed after 4 weeks, and every 6 to 12 months after that if the medicine is still working. Do not stop taking oxybutynin or mirabegron without talking to your doctor first.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Possible side effects of antimuscarinics include dry mouth, constipation, blurred vision and extreme tiredness. The British Association of Urological Surgeons says dry mouth affects about 20% of people and constipation about 10%. In rare cases, they can cause a build-up of pressure in the eye called angle closure glaucoma.",
          "There may be an increased risk of confusion, and possibly dementia getting worse, in people taking oxybutynin, so talk to your doctor if you are worried. Do not drive or ride a bike if it makes you sleepy or dizzy, or gives you blurred vision.",
        ],
      },
      {
        heading: "Other medicines, and when to get help",
        paragraphs: [
          "For stress incontinence, if surgery is unsuitable or you want to avoid it, duloxetine can help keep the urethra closed. It is taken twice a day, checked after 2 to 4 weeks, and should not be stopped suddenly, and the British Association of Urological Surgeons says it is not recommended as a first treatment. A low dose of desmopressin may be used if you often need to get up in the night to pee.",
          "With oxybutynin, talk to a doctor urgently if you cannot pee at all. Tell your doctor or call 111 straight away if you have difficulty fully emptying your bladder or signs of a severe urinary tract infection, and call 999 if you feel you are overheating and not sweating normally.",
        ],
      },
    ],
    helps: [
      "Give the medicine time, but talk to your doctor if your symptoms have not started to improve after 1 to 2 weeks.",
      "Go to your review after 4 weeks, and the checks every 6 to 12 months.",
      "Try sugar-free gum or sucking sugar-free sweets if you get a dry mouth.",
      "Try to avoid alcohol when you first start oxybutynin, as together they can make you very sleepy.",
      "Do not stop taking your medicine without talking to your doctor first.",
      "Keep up bladder training and pelvic floor muscle training, which can also help your symptoms.",
    ],
    tryThisWeek: [
      "Check in after 1 to 2 weeks.",
      "Book your 4-week review.",
      "Use sugar-free gum for a dry mouth.",
    ],
    ask: "Which medicine suits me best, and how will we know if it is working?",
    interactive: {
      kind: "flip-cards",
      title: "The medicines, card by card",
      intro: "Turn each card to see what each medicine is for and how it works.",
      cards: [
        { id: "oxybutynin", front: "Oxybutynin", when: "Tablets, liquid or a skin patch", back: "An antimuscarinic that relaxes the bladder muscle. Common side effects include a dry mouth and blurred vision." },
        { id: "other", front: "Tolterodine, solifenacin and others", when: "Other antimuscarinics", back: "They all seem to work just as well as oxybutynin. If one gives side effects, a different one may suit you better." },
        { id: "mirabegron", front: "Mirabegron or vibegron", when: "Usually once a day", back: "Offered if antimuscarinics are unsuitable or have not helped. They work in a slightly different way." },
        { id: "duloxetine", front: "Duloxetine", when: "For stress incontinence", back: "Can help keep the urethra closed if surgery is unsuitable. Taken twice a day, and not stopped suddenly." },
        { id: "desmopressin", front: "Desmopressin", when: "For getting up at night to pee", back: "A low dose helps reduce the amount of urine the kidneys produce." },
      ],
    },
    sources: [NHS_UI_TREATMENT, NHS_OXY_ABOUT, NHS_OXY_SIDE, NHS_OXY_QS, NHS_MIRA_ABOUT, NHS_MIRA_QS, BAUS_OAB, BAUS_SUI],
    quiz: {
      question: "When is the first review of an antimuscarinic medicine?",
      options: [{ text: "After 4 weeks", right: true }, { text: "After 1 day" }, { text: "After 5 years" }],
      why: "You will be reviewed after 4 weeks, and every 6 to 12 months after that if the medicine is still working.",
    },
  },
  {
    id: "ui-procedures",
    kicker: "Treatment",
    question: "What procedures and operations are there?",
    hook: "For stress incontinence, operations that support or close the urethra. For an overactive bladder, Botox or nerve stimulation. All come after simpler treatments.",
    short: "If non-surgical treatments do not work or are unsuitable, surgery or other procedures may be recommended, depending on your type of incontinence. For stress incontinence these include colposuspension, slings, bulking injections and an artificial sphincter. For urge incontinence they include Botox injections into the bladder and nerve stimulation. Discuss the risks, benefits and alternatives with a specialist first.",
    sections: [
      {
        heading: "Before deciding",
        paragraphs: [
          "If non-surgical treatments are unsuccessful or unsuitable, surgery or other procedures may be recommended. Before deciding, discuss the risks and benefits with a specialist, as well as any alternative treatments.",
          "If you plan to have a pregnancy, this affects your options, as pregnancy and childbirth can sometimes cause surgical treatments to fail. Bladder Health UK says your doctor may recommend a treatment, but the decision about which one to pursue is ultimately yours.",
        ],
      },
      {
        heading: "For stress incontinence",
        paragraphs: [
          "Colposuspension lifts the neck of the bladder through a cut in the lower tummy and stitches it in place. Sling surgery places a sling, often made from your own tissue, around the neck of the bladder to support it. The British Association of Urological Surgeons says both leave 80 to 90% of women dry or significantly improved.",
          "Urethral bulking agents are injected into the walls of the urethra, usually without any cuts. They are generally less effective than other procedures and may need repeating. At the moment, it may not be possible to have vaginal mesh surgery for urinary incontinence on the NHS.",
        ],
      },
      {
        heading: "An artificial sphincter",
        paragraphs: [
          "An artificial urinary sphincter is a fluid-filled cuff around the urethra, with a small pump and reservoir, that keeps the urethra closed until you choose to pee. It is used more often for people who have a penis.",
          "Prostate Cancer UK says it is usually only suitable for men who still leak a lot of urine at least six months after prostate cancer treatment. An internal male sling may be an option for men who still use two to three pads a day one year after treatment.",
        ],
      },
      {
        heading: "For urge incontinence",
        paragraphs: [
          "Botulinum toxin A, or Botox, can be injected into the bladder wall to relax it. The effect can last several months and the injections can be repeated, but you may find it hard to empty your bladder fully, and may need to learn to use a catheter.",
          "Sacral nerve stimulation places a device near a nerve at the base of the back to improve the signals between the brain and the bladder. The British Association of Urological Surgeons says 70% of people report improvement after either Botox or sacral nerve stimulation. Tibial nerve stimulation uses a thin needle at the ankle, often in 12 weekly sessions of around 30 minutes.",
        ],
      },
      {
        heading: "Larger operations",
        paragraphs: [
          "In rare cases, the bladder can be made bigger with a piece of tissue from the intestine, called augmentation cystoplasty. Afterwards you may need to use a catheter, so it is only considered if you are willing to do this.",
          "Urinary diversion redirects the tubes from the kidneys so urine collects in a bag outside the body. It should only be done if other treatments have been unsuccessful or are not suitable.",
        ],
      },
    ],
    helps: [
      "Discuss the risks, benefits and any alternatives with a specialist before choosing a procedure.",
      "Tell your specialist if you plan to have a pregnancy, as it affects your options.",
      "Ask for a copy of the record of any surgery you have, which you should be given.",
      "If you have had vaginal mesh or tape and think you have complications, speak to a GP or your surgeon.",
      "Talk through the results you want, and how each option may affect your quality of life, with your doctor.",
    ],
    tryThisWeek: [
      "Ask about risks and alternatives.",
      "Mention any pregnancy plans.",
      "Decide what results matter to you.",
    ],
    ask: "Which procedures suit my type of incontinence, and what are the risks?",
    interactive: {
      kind: "flip-cards",
      title: "The options, card by card",
      intro: "Turn each card to see what each procedure involves.",
      cards: [
        { id: "colposuspension", front: "Colposuspension", when: "Stress incontinence", back: "Lifts the neck of the bladder and stitches it in place, through a cut in the lower tummy." },
        { id: "sling", front: "Sling surgery", when: "Stress incontinence", back: "A sling, often from your own tissue, supports the neck of the bladder to prevent leaks." },
        { id: "bulking", front: "Bulking injections", when: "Stress incontinence", back: "Injected into the urethra's walls, usually without cuts. Less effective, and may need repeating." },
        { id: "sphincter", front: "Artificial sphincter", when: "Used more for people with a penis", back: "A cuff keeps the urethra closed, and a small pump opens it when you want to pee." },
        { id: "botox", front: "Botox injections", when: "Urge incontinence", back: "Relax the bladder for several months. You may need a catheter if it becomes hard to empty." },
        { id: "nerve", front: "Nerve stimulation", when: "Urge incontinence", back: "Stimulates nerves linked to the bladder, at the base of the back or the ankle, to reduce urges." },
      ],
    },
    sources: [NHS_UI_SURGERY, BAUS_SUI, BAUS_OAB, PCUK, BHUK_SUI],
    quiz: {
      question: "What may you need to learn after Botox injections into the bladder?",
      options: [{ text: "How to use a catheter", right: true }, { text: "How to use an inhaler" }, { text: "How to check your pulse" }],
      why: "You may find it hard to empty your bladder fully, and may need to learn to use a catheter.",
    },
  },
  {
    id: "ui-drinks",
    kicker: "Living well",
    question: "What should I drink, and should I cut down on caffeine?",
    hook: "Drinking less can make leaks worse. Steady fluids, less caffeine and alcohol, and fewer fizzy drinks help more.",
    short: "Many people with incontinence drink less, but limiting fluids makes incontinence worse, because it reduces how much your bladder can hold. The NHS suggests 6 to 8 glasses of fluid a day unless your doctor advises otherwise. Cutting down on caffeine and alcohol, which can irritate the bladder and make you pee more, can help.",
    sections: [
      {
        heading: "Why drinking less backfires",
        paragraphs: [
          "Many people with urinary incontinence avoid drinking, as they feel it causes more problems. But limiting your fluid intake makes incontinence worse, because it reduces your bladder's capacity, and not drinking enough can also cause constipation.",
          "Not drinking enough can let strong, concentrated urine collect in the bladder and irritate it. Bladder Health UK adds that it can lead to dehydration and bladder infections, which can make incontinence worse.",
        ],
      },
      {
        heading: "How much to drink",
        paragraphs: [
          "The NHS suggests 6 to 8 glasses of fluid a day, but no more, unless your doctor advises otherwise. The British Association of Urological Surgeons suggests aiming for between one and a half and 2 litres a day, and trying not to drink too much.",
          "Depending on your bladder problem, a GP can advise you about how much to drink. If you often need to pee in the night, try drinking less in the hours before bed, but still drink enough during the day.",
        ],
      },
      {
        heading: "Caffeine",
        paragraphs: [
          "Caffeine irritates the bladder and can make incontinence worse, and it can increase the amount of urine your body makes. Coffee has the biggest effect, so the NHS suggests stopping it or switching to decaffeinated coffee.",
          "Fizzy drinks, tea, green tea, energy drinks and hot chocolate also contain caffeine. The NHS suggests cutting down on these too and replacing them with water and herbal or fruit teas.",
        ],
      },
      {
        heading: "Alcohol and other drinks",
        paragraphs: [
          "Alcohol is a diuretic, which makes you pee more often, so cutting down may help. The recommended weekly limit for alcohol is 14 units.",
          "Drinks with artificial sweeteners, including diet drinks, and citrus juices such as orange, grapefruit and lime juice may also irritate the bladder. Bladder Health UK suggests cutting back on possible triggers one at a time, for a week each, to see if your symptoms change.",
        ],
      },
      {
        heading: "Food, and keeping it in proportion",
        paragraphs: [
          "The NHS suggests avoiding spicy and acidic foods, such as curries and citrus fruits, as they can irritate the bladder. Triggers vary from person to person, and some people find diet makes no difference.",
          "Bladder Health UK advises not becoming too hung up on lists of foods and drinks to avoid. Having something now and again is fine, as long as you are aware it might irritate your bladder.",
        ],
      },
    ],
    helps: [
      "Drink 6 to 8 glasses of fluid a day, but no more, unless your doctor advises otherwise.",
      "Switch to decaffeinated coffee, and swap other caffeinated drinks for water or herbal or fruit teas.",
      "Cut down on alcohol.",
      "If you often get up in the night to pee, drink less in the hours before bed, but enough during the day.",
      "Keep a food diary, and try cutting back on one possible trigger at a time, for a week each.",
    ],
    tryThisWeek: [
      "Aim for 6 to 8 glasses a day.",
      "Try decaf coffee.",
      "Drink less before bed.",
    ],
    ask: "How much should I be drinking each day for my bladder?",
    interactive: {
      kind: "scenarios",
      title: "Everyday drinks choices",
      scenarios: [
        {
          id: "less",
          situation: "You want to drink less so that you leak less.",
          options: [{ text: "Keep to 6 to 8 glasses a day", best: true }, { text: "Cut right back on fluids" }],
          why: "Limiting your fluid intake makes incontinence worse, because it reduces your bladder's capacity.",
        },
        {
          id: "coffee",
          situation: "You drink three strong coffees a day.",
          options: [{ text: "Switch to decaf", best: true }, { text: "Carry on as you are" }],
          why: "Coffee has the biggest effect, so the NHS suggests stopping it or switching to decaffeinated coffee.",
        },
        {
          id: "night",
          situation: "You get up several times a night to pee.",
          options: [{ text: "Drink less in the hours before bed", best: true }, { text: "Drink nothing all day" }],
          why: "Try drinking less in the hours before bed, but still drink enough during the day.",
        },
        {
          id: "curry",
          situation: "You fancy a curry on Saturday night.",
          options: [{ text: "Enjoy it now and again", best: true }, { text: "Never eat spicy food again" }],
          why: "Having something now and again is fine, as long as you are aware it might irritate your bladder.",
        },
      ],
    },
    sources: [NHS_UI_10WAYS, NHS_UI, NHS_UI_TREATMENT, BHUK_MEN, BAUS_BT, NHS_MIRA_QS, BHUK_COPE, PCUK, NHS_UI_CAUSES],
    quiz: {
      question: "Why can drinking less make incontinence worse?",
      options: [{ text: "It reduces the bladder's capacity", right: true }, { text: "It makes urine weaker" }, { text: "It makes no difference" }],
      why: "Limiting your fluid intake makes incontinence worse, because it reduces your bladder's capacity.",
    },
  },
  {
    id: "ui-products",
    kicker: "Living well",
    question: "Which pads and products could help?",
    hook: "Not a cure, but a way to get on with life while treatment works. Today's pads are thin, discreet and made for men and women.",
    short: "Pads, pants and other products are not a treatment, but they can make life easier while you wait for a diagnosis or for treatment to work. Thin, discreet pads and pull-up pants are sold in supermarkets and pharmacies, and you may be able to get products on the NHS after an assessment through your local continence service.",
    sections: [
      {
        heading: "Not a cure, but a help",
        paragraphs: [
          "Incontinence products are not a treatment, but they can be useful while you are waiting to be assessed or for treatment to start helping. They include pads and pants, bed and chair protection, catheters and penile sheaths, skincare products, and adapted clothing and swimwear.",
          "Bladder Health UK says products should never be seen as the only answer, and suggests seeking advice from health professionals first. But they can help people stay socially continent and get on with their lives.",
        ],
      },
      {
        heading: "Pads and pull-up pants",
        paragraphs: [
          "The most popular products are absorbent pads worn inside underwear. Pads and pull-up pants draw urine away from the surface of the product, so your skin stays dry.",
          "With mild to moderate incontinence, you can buy thin, discreet pads or pull-up pants for men and women from many supermarkets and pharmacies. Bladder Health UK says pads can also protect skin from irritation, block odour and help you regain confidence.",
        ],
      },
      {
        heading: "Products for men",
        paragraphs: [
          "Drip collectors are padded sheaths that go around the penis, for slight leaking or dribbling. Urinary sheaths look like condoms with a tube that drains urine into a bag strapped to your leg, under your clothes.",
          "Prostate Cancer UK says some men find female pads fit better as their leaking improves, as they tend to be smaller and lighter. Penile clamps are not usually recommended by health professionals, as they reduce the blood flow to the penis.",
        ],
      },
      {
        heading: "Night-time and on the move",
        paragraphs: [
          "Washable bed pads sit on top of the mattress and soak up leaks overnight, and can be useful for trips away from home. Handheld urinals are containers with a lid that you can use if you cannot reach a toilet in time.",
          "The NHS page notes that NICE does not recommend tampons for the routine management of urinary incontinence in women. They can be used occasionally to prevent leaks, such as during exercise, but super-size tampons should not be used regularly.",
        ],
      },
      {
        heading: "Getting products",
        paragraphs: [
          "You may be able to get products on the NHS, depending on your local integrated care board, and you may need to be assessed by a healthcare professional first. Ask your GP for details of your local continence service.",
          "For people with severe leaks, continence clinics and district nurses can supply pads on the NHS. The charity Bladder and Bowel UK and the Continence Product Advisor give independent advice on choosing products.",
        ],
      },
    ],
    helps: [
      "Ask your GP for details of your local continence service, and whether you can get products on the NHS.",
      "Try thin, discreet pads or pull-up pants from a supermarket or pharmacy for mild to moderate leaks.",
      "Use the Continence Product Advisor for independent advice on choosing products.",
      "Wear close-fitting underwear to help keep pads in place.",
      "Try washable bed pads if you leak at night.",
      "Call Bladder and Bowel UK's helpline on 0161 214 4591 for advice on products.",
    ],
    tryThisWeek: [
      "Ask about your local continence service.",
      "Try thin, discreet pads.",
      "Look at the Continence Product Advisor.",
    ],
    ask: "Can I be assessed for incontinence products on the NHS?",
    interactive: {
      kind: "flip-cards",
      title: "The products, card by card",
      intro: "Turn each card to see what each product is for.",
      cards: [
        { id: "pads", front: "Pads", when: "Mild to moderate leaks", back: "Worn inside underwear. They draw urine away from the surface, so your skin stays dry." },
        { id: "pants", front: "Pull-up pants", when: "Instead of pads", back: "The same technology as pads, in a pull-up style. Sold for men and women." },
        { id: "sheath", front: "Urinary sheath", when: "For men", back: "Fits over the penis like a condom, draining urine into a bag strapped to your leg." },
        { id: "bed", front: "Washable bed pads", when: "Leaks overnight", back: "Sit on top of the mattress to soak up leaks, and stay dry to the touch." },
        { id: "urinal", front: "Handheld urinal", when: "When a toilet is far away", back: "A container with a lid, for when you cannot reach a toilet in time." },
      ],
    },
    sources: [NHS_UI_PRODUCTS, NHS_UI_TREATMENT, PCUK, BHUK_MEN, BHUK_COPE],
    quiz: {
      question: "Are incontinence pads a treatment for incontinence?",
      options: [{ text: "No, they help you manage it", right: true }, { text: "Yes, they cure it" }, { text: "Only at night" }],
      why: "Incontinence products are not a treatment, but they can be useful while you are waiting to be assessed or for treatment to start helping.",
    },
  },
  {
    id: "ui-confidence",
    kicker: "Living well",
    question: "How can I go out and travel with confidence?",
    hook: "Know where the toilets are, carry a small kit, and have a card ready. A little planning gives back a lot of freedom.",
    short: "Planning ahead makes a big difference: knowing where the toilets are, packing spare pads, underwear and wipes, and carrying a card that asks for urgent toilet access. Bladder Health UK says many people with bladder control problems live busy and fulfilled lives, including work.",
    sections: [
      {
        heading: "Planning, not avoiding",
        paragraphs: [
          "Incontinence can make people anxious about going out, and some stop wanting to leave the house. In a 2019 survey of women wearing pads, reported by Bladder Health UK, 29% said it had led to a fear of going out in public.",
          "But through careful planning and management, it is possible to live well with the condition. Simple steps, such as finding the nearest toilets or planning toilet breaks, can make a real difference.",
        ],
      },
      {
        heading: "Toilets",
        paragraphs: [
          "Find out where there are public toilets before you leave home. Bladder Health UK suggests the Toilet Map UK website.",
          "Prostate Cancer UK has an urgent toilet card to show staff in shops, restaurants and other public places, and Bladder Health UK offers Can't Wait Cards. Disability Rights UK runs a National Key Scheme for anyone with a disability or health condition who needs access to locked public toilets across the UK.",
        ],
      },
      {
        heading: "A small emergency kit",
        paragraphs: [
          "Pack a bag with extra pads, underwear and wet wipes. Some people also carry scented plastic bags for used pads, and a screw-top container in case they cannot find a toilet.",
          "Darker clothing can help hide damp patches if things go wrong. Bladder Health UK says that even when things do go wrong, most people do not notice.",
        ],
      },
      {
        heading: "Travelling",
        paragraphs: [
          "On a long car journey, plan in frequent toilet stops, and keep spare clothes and pads in the car. Portable urinals, in male and female versions, can help if you are caught short.",
          "On a plane, a seat near the toilet can help, as can going when things are quiet rather than waiting until you really need to. Split your supplies across your bags in case one gets lost, and try to talk to the cabin crew if you are worried.",
        ],
      },
      {
        heading: "At work",
        paragraphs: [
          "Knowing where the toilets are at work helps, and so does leaving spare clothes or pads in a locker if you have one. Bladder Health UK says the right to adequate toilet breaks is enshrined in UK employment law, and depending on your situation, it may help to confide in close colleagues or your boss.",
          "Keep drinking water at work rather than cutting back, as dehydration can make the bladder more irritable. Access to Work can help you get or stay in work if you have a physical or mental health condition.",
        ],
      },
    ],
    helps: [
      "Find out where there are public toilets before you leave home.",
      "Pack a bag with extra pads, underwear and wet wipes.",
      "Carry an urgent toilet card to show staff in shops and restaurants.",
      "Plan in frequent toilet stops on long car journeys.",
      "Leave spare clothes or pads in a locker at work, if you have one.",
      "Keep drinking water when you are out, rather than cutting back.",
    ],
    tryThisWeek: [
      "Look up toilets before you go.",
      "Pack a small spare kit.",
      "Order an urgent toilet card.",
    ],
    ask: "Could a continence nurse help me plan for work and travel?",
    interactive: {
      kind: "scenarios",
      title: "Out and about",
      scenarios: [
        {
          id: "drive",
          situation: "You have a long car journey tomorrow.",
          options: [{ text: "Plan toilet stops and pack spares", best: true }, { text: "Stop drinking the day before" }],
          why: "On a long car journey, plan in frequent toilet stops, and keep spare clothes and pads in the car.",
        },
        {
          id: "shop",
          situation: "You urgently need a toilet in a shop with none for customers.",
          options: [{ text: "Show an urgent toilet card", best: true }, { text: "Try to hold on and hope" }],
          why: "Prostate Cancer UK has an urgent toilet card to show staff in shops, restaurants and other public places.",
        },
        {
          id: "flight",
          situation: "You are flying and worried about getting to the toilet.",
          options: [{ text: "Ask for a seat near the toilet", best: true }, { text: "Wait until you are desperate" }],
          why: "On a plane, a seat near the toilet can help, as can going when things are quiet rather than waiting until you really need to.",
        },
        {
          id: "office",
          situation: "It is a busy day at work and you are tempted to skip drinks.",
          options: [{ text: "Keep drinking water", best: true }, { text: "Skip drinks all day" }],
          why: "Keep drinking water at work rather than cutting back, as dehydration can make the bladder more irritable.",
        },
      ],
    },
    sources: [BHUK_COPE, PCUK, BHUK_SUI, BHUK_MEN, BHUK_OAB, GOV_ATW],
    quiz: {
      question: "Which scheme gives access to locked public toilets across the UK?",
      options: [{ text: "The National Key Scheme", right: true }, { text: "The Yellow Card scheme" }, { text: "The Blue Badge scheme" }],
      why: "Disability Rights UK runs a National Key Scheme for anyone with a disability or health condition who needs access to locked public toilets across the UK.",
    },
  },
  {
    id: "ui-talking",
    kicker: "Living well",
    question: "How do I talk about it, to my GP and to the people close to me?",
    hook: "It can feel hard to say out loud. Most people who do are glad they did, and GPs see it often.",
    short: "Many people find incontinence hard to talk about, and many never seek help. It is a common problem that GPs see often, and you should not feel embarrassed. Telling friends and family is entirely your choice, but Bladder Health UK says few people regret it, and many feel relieved and supported.",
    sections: [
      {
        heading: "Why it feels hard",
        paragraphs: [
          "Incontinence is a subject many people find difficult to discuss or get help for, because of embarrassment or cultural taboos. It often brings anxiety, a loss of self-esteem and confidence, and it can be isolating.",
          "The British Association of Urological Surgeons says 60 to 80% of people with incontinence have never sought medical advice for it, and 35% see it simply as part of ageing. Bladder Health UK says worrying about leaks can raise anxiety, and staying at home can lead to low mood.",
        ],
      },
      {
        heading: "Talking to your GP",
        paragraphs: [
          "Try not to be embarrassed when speaking to the GP. Urinary incontinence is a common problem, and it is likely the GP has seen many people with the same problem.",
          "You can choose a GP you feel comfortable with, and it may help to write down what you want to say. Do not worry if it takes a couple of visits to find the courage, and if you are not satisfied, you can see someone else at the practice.",
        ],
      },
      {
        heading: "Being honest about it",
        paragraphs: [
          "Try to be as honest as you can about how often you leak and how much it affects your life. Do not worry if you get emotional, as it shows the doctor what a big impact it is having.",
          "Bladder Health UK says health professionals find that hearing about these feelings helps them understand the impact on people. Phoning a charity helpline first, such as Bladder Health UK's Advice Line on 0121 702 0820, may help you plan how to approach your doctor.",
        ],
      },
      {
        heading: "Friends and family",
        paragraphs: [
          "Whether you tell anyone is entirely up to you, and you should never feel pressured. But Bladder Health UK says few people regret telling family and friends, and many are surprised by how kind and supportive people are.",
          "It means you can be honest if you need to rush off to the loo or cancel at the last minute, which takes the pressure off. Choose somewhere you feel comfortable and will not be overheard.",
        ],
      },
      {
        heading: "Looking after your mood",
        paragraphs: [
          "Bladder problems and mental health can affect each other, in both directions. Being open about the effect on you, and managing stress in whatever way helps, whether that is mindfulness, talking to a friend or going for a walk, can help both mind and body.",
          "Prostate Cancer UK says seeking advice about urinary problems can help you feel more in control and build your confidence. Your GP, specialist nurse or continence nurse can offer practical and emotional support.",
        ],
      },
    ],
    helps: [
      "See a GP about your incontinence: it is a common problem and you should not feel embarrassed.",
      "Write your questions in a small notebook and take it to your appointment.",
      "Be as honest as you can about how often you leak and how much it affects you.",
      "Call Bladder Health UK's confidential Advice Line on 0121 702 0820 if you are struggling or too embarrassed to talk.",
      "Tell a friend or family member you trust, if and when you feel ready.",
      "Talk to trusted friends or health professionals about how you feel.",
    ],
    tryThisWeek: [
      "Book the GP appointment.",
      "Write down what to say.",
      "Tell one person you trust.",
    ],
    ask: "What support is there for how incontinence is making me feel?",
    interactive: {
      kind: "scenarios",
      title: "Finding the words",
      scenarios: [
        {
          id: "write",
          situation: "You worry you will freeze when you see the GP.",
          options: [{ text: "Write down what to say first", best: true }, { text: "Leave it for another year" }],
          why: "It may help to write down what you want to say. Do not worry if it takes a couple of visits to find the courage.",
        },
        {
          id: "tears",
          situation: "You think you might get upset in the appointment.",
          options: [{ text: "That is fine: be honest", best: true }, { text: "Play it down instead" }],
          why: "Do not worry if you get emotional, as it shows the doctor what a big impact it is having.",
        },
        {
          id: "friend",
          situation: "A close friend asks why you keep rushing off.",
          options: [{ text: "Tell them, if you feel ready", best: true }, { text: "Make up an excuse every time" }],
          why: "Whether you tell anyone is entirely up to you. But few people regret telling family and friends.",
        },
        {
          id: "not-heard",
          situation: "You feel the GP did not take it seriously.",
          options: [{ text: "See someone else at the practice", best: true }, { text: "Give up on getting help" }],
          why: "If you are not satisfied, you can see someone else at the practice.",
        },
      ],
    },
    sources: [BHUK_COPE, BHUK_IMPACT, NHS_UI_DIAGNOSIS, BAUS_UI, BHUK_OAB, NHS_UI, PCUK],
    quiz: {
      question: "How many people with incontinence have never sought medical advice, says BAUS?",
      options: [{ text: "60 to 80%", right: true }, { text: "Almost nobody" }, { text: "Everyone" }],
      why: "The British Association of Urological Surgeons says 60 to 80% of people with incontinence have never sought medical advice for it.",
    },
  },
];
