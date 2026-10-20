import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Stroke under 50 page's pieces (content/library-conditions/brain-a.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed
// under each answer's `sources`; nothing is added that those pages do not say. What survivors say is
// given as their own account, never as a general fact. Sentences are kept short, because they are read
// aloud one at a time. General information only; it never replaces what a person's own team tells them.

const sa = (label: string, path: string): LearnSource => ({ label: `Stroke Association: ${label}`, url: `https://www.stroke.org.uk/${path}` });
const SA_YOUNG = sa("Stroke in younger adults", "stroke/young");
const SA_YOUNG_CAUSES = sa("Causes of stroke in younger adults", "stroke/young/causes");
const SA_ISCH_CAUSES = sa("Causes of ischaemic stroke", "stroke/types/ischaemic/causes");
const SA_ISCH_DX = sa("Diagnosing ischaemic stroke", "stroke/types/ischaemic/diagnosis");
const SA_DX_TX = sa("Stroke diagnosis and treatment", "stroke/symptoms/diagnosis-treatment");
const SA_SYMPTOMS = sa("Stroke symptoms", "stroke/symptoms");
const SA_MEMORY = sa("Memory and thinking", "stroke/effects/cognitive/memory-and-thinking");
const SA_FATIGUE = sa("Tiredness and fatigue", "stroke/effects/physical/tiredness-and-fatigue");
const SA_EXERCISE = sa("Exercise after a stroke", "stroke/recovery/exercise");
const SA_SPORT = sa("Sport after a stroke", "stroke/recovery/exercise/sport");
const SA_WORK_PREPARE = sa("Preparing to go back to work", "stroke/life-after/work/prepare");
const SA_WORK_RIGHTS = sa("Your rights at work", "life-after/work/rights");
const SA_SEX = sa("Sex and relationships", "stroke/life-after/sex-and-relationships");
const SA_RELATIONSHIP = sa("Your relationship", "stroke/life-after/sex-and-relationships/relationship");
const SA_SURVEY: LearnSource = { label: "Stroke Association newsroom: survey on stroke and young adults (26 October 2023)", url: "https://www.mynewsdesk.com/uk/stroke-association/pressreleases/over-half-of-uk-adults-think-strokes-dont-affect-young-people-yet-stroke-is-drastically-impacting-young-adults-lives-3280389" };
const DS_CAUSE: LearnSource = { label: "Different Strokes: What caused my stroke?", url: "https://differentstrokes.co.uk/what-caused-my-stroke-2/" };
const DS_WHAT: LearnSource = { label: "Different Strokes: What is a stroke? (survivors' accounts)", url: "https://differentstrokes.co.uk/what-is-a-stroke/" };
const DS_INVISIBLE: LearnSource = { label: "Different Strokes: The invisible side of stroke", url: "https://differentstrokes.co.uk/the-invisible-side-of-stroke-4/" };
const DS_WORK: LearnSource = { label: "Different Strokes: Work after stroke", url: "https://differentstrokes.co.uk/work-after-stroke-for-stroke-survivors/" };
const DS_FAMILY: LearnSource = { label: "Different Strokes: Family support", url: "https://differentstrokes.co.uk/what-we-do/family-support/" };
const NHS_SYMPTOMS: LearnSource = { label: "NHS: Symptoms of a stroke", url: "https://www.nhs.uk/conditions/stroke/symptoms/" };
const NHS_INFORM: LearnSource = { label: "NHS inform: Stroke", url: "https://www.nhsinform.scot/illnesses-and-conditions/brain-nerves-and-spinal-cord/stroke/" };
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });
const GOV_SSP = gov("Statutory Sick Pay", "statutory-sick-pay");
const GOV_SSP_ELIGIBLE = gov("Statutory Sick Pay: eligibility", "statutory-sick-pay/eligibility");
const GOV_ESA = gov("Employment and Support Allowance", "employment-support-allowance");
const GOV_ESA_ELIGIBLE = gov("Employment and Support Allowance: eligibility", "employment-support-allowance/eligibility");
const GOV_PIP = gov("Personal Independence Payment", "pip");
const GOV_PIP_ELIGIBLE = gov("Personal Independence Payment: eligibility", "pip/eligibility");
const GOV_ACCESS = gov("Access to Work", "access-to-work");
const GOV_ADJUST = gov("Reasonable adjustments for disabled workers", "reasonable-adjustments-for-disabled-workers");
const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const CA_MORTGAGE: LearnSource = { label: "Citizens Advice: How to deal with mortgage debts", url: "https://www.citizensadvice.org.uk/debt-and-money/mortgage-problems/how-to-sort-out-your-mortgage-problems/how-to-deal-with-mortgage-debts/" };
const HEADWAY_CHILDREN: LearnSource = { label: "Headway: Supporting children when a parent has had a brain injury (booklet)", url: "https://www.headway.org.uk/media/4311/supporting-children-when-a-parent-has-had-a-brain-injury-e-booklet.pdf" };

const CALL_999 = "Any one of the signs of a stroke is an emergency, at any age, so always call 999 straight away.";

export const under50Answers: LearnArticle[] = [
  {
    id: "u50-why",
    kicker: "Your brain",
    question: "Why do strokes happen to younger people?",
    hook: "A stroke can happen at any age. In younger people the causes are sometimes different, and sometimes no cause is found.",
    short: "A stroke can affect anyone, at any age: around one in four adults who have a stroke are of working age. Some causes are more common in younger people, such as a tear in an artery, a hole in the heart or blood that clots too easily. The usual causes can play a part too, and sometimes no cause is found.",
    sections: [
      {
        heading: "Any age",
        paragraphs: [
          "Many people believe stroke only happens in older people, but a stroke can affect anyone, at any age. Around one in four adults who have a stroke are of working age, between 18 and 65.",
        ],
      },
      {
        heading: "A torn artery",
        paragraphs: [
          "Arterial dissection happens when the lining of an artery tears. Blood builds up in the damaged area and a clot can form, leading to a stroke.",
        ],
      },
      {
        heading: "A hole in the heart",
        paragraphs: [
          "A patent foramen ovale, or PFO, is a small hole in the heart. Most PFOs do not cause problems. But a PFO may be a risk for stroke if a blood clot forms in a vein and travels through the PFO and then to the brain.",
        ],
      },
      {
        heading: "Blood that clots more easily",
        paragraphs: [
          "Antiphospholipid syndrome, or APS, is a rare autoimmune condition. The immune system attacks proteins in the blood, making your blood clot more easily.",
        ],
      },
      {
        heading: "The usual causes, earlier",
        paragraphs: [
          "Lifestyle factors can play a part, including smoking, drinking too much alcohol, taking illegal drugs such as cocaine, being overweight, not eating a healthy diet and being inactive.",
          "Other heart problems, such as a recent heart attack, heart failure or a mechanical heart valve, may also make a stroke more likely.",
        ],
      },
      {
        heading: "When no cause is found",
        paragraphs: [
          "In about one in four people overall, and more often in younger age groups, the first tests do not find a cause for the stroke.",
        ],
      },
    ],
    helps: [
      "Ask your team which causes have been checked for you, and which have been ruled out.",
      "If no cause has been found yet, ask whether any more tests are planned.",
      "Ask your team about any of the lifestyle factors that apply to you, and what support there is.",
    ],
    tryThisWeek: [
      "Ask which causes have been checked for you.",
      "Ask whether more tests are planned.",
      "Ask about support with any lifestyle factors.",
    ],
    ask: "Have all the causes that are more common in younger people been checked for me?",
    sources: [SA_YOUNG, SA_YOUNG_CAUSES, SA_ISCH_CAUSES],
    quiz: {
      question: "About how many adults who have a stroke are of working age?",
      options: [{ text: "Around one in four", right: true }, { text: "Almost none" }, { text: "Nine in ten" }],
      why: "Around one in four adults who have a stroke are of working age, between 18 and 65.",
    },
  },
  {
    id: "u50-tests",
    kicker: "In clinic",
    question: "What extra tests might a younger person have after a stroke?",
    hook: "When the cause is not clear, the team may look harder: at the heart, the blood and the arteries in the neck.",
    short: "If you have a stroke at a younger age, or the cause is not clear, you may be checked for a small hole in the heart, sometimes with a bubble test. You may also have blood tests, heart monitoring to look for an abnormal rhythm, and scans of the arteries in your neck.",
    sections: [
      {
        heading: "Looking harder for a cause",
        paragraphs: [
          "If you have a stroke at a younger age, or your medical team cannot find the cause of your stroke, you may be assessed to decide if a PFO, a small hole in the heart, could have been a reason for your stroke.",
        ],
      },
      {
        heading: "A bubble test",
        paragraphs: [
          "An echocardiogram, or bubble test, looks for structural differences in the heart, like a small hole, that could allow clots to pass through.",
        ],
      },
      {
        heading: "Blood tests",
        paragraphs: [
          "Blood tests measure cholesterol, blood sugar and clotting. All of these affect stroke risk.",
        ],
      },
      {
        heading: "Heart monitoring",
        paragraphs: [
          "Heart monitoring looks for abnormal heart rhythms, like atrial fibrillation.",
        ],
      },
      {
        heading: "The neck arteries",
        paragraphs: [
          "A carotid ultrasound scan checks if there is any narrowing or blockage in the neck arteries leading to your brain.",
          "Some types of scan involve an injection of a special dye, to show the blood vessels of the neck and brain more clearly.",
        ],
      },
    ],
    helps: [
      "Ask which tests you have had, and what each one found.",
      "Ask whether any results are still to come.",
      "If no cause has been found, ask whether more tests are planned.",
    ],
    tryThisWeek: [
      "Write down which tests you have had.",
      "Ask which results are still to come.",
      "Ask if more tests are planned.",
    ],
    ask: "Which tests have I had, what did they find, and are any results still to come?",
    sources: [SA_ISCH_CAUSES, DS_CAUSE, NHS_INFORM, SA_ISCH_DX],
    quiz: {
      question: "What does a bubble test look for?",
      options: [{ text: "A small hole in the heart", right: true }, { text: "A broken bone" }, { text: "Your blood pressure" }],
      why: "A bubble test looks for structural differences in the heart, like a small hole, that could allow clots to pass through.",
    },
  },
  {
    id: "u50-signs",
    kicker: "Spotting a stroke",
    question: "Can you be too young for a stroke?",
    hook: "No. One in four strokes happen to people of working age, yet many people still think strokes only happen to older people.",
    short: "No. A common misconception is that stroke mainly affects older people, but one in four strokes happen in people of working age. Some younger survivors say they were told they were too young. Any one of the signs of a stroke is an emergency: call 999.",
    sections: [
      {
        heading: "A common misconception",
        paragraphs: [
          "A common misconception about stroke is that it mainly affects older people. But one in four strokes happen in people of working age.",
          "In 2023, the Stroke Association reported that 60% of people in the UK wrongly believe that strokes do not happen to young adults.",
        ],
      },
      {
        heading: "In their own words",
        paragraphs: [
          "Some younger survivors say they were told they were too young. Maddy, who had a stroke at 24, says she was told several times it was 'impossible' for it to be a stroke, because she was 'too young'.",
          "Chris, who had a stroke at 39, says he had none of the FAST symptoms.",
        ],
      },
      {
        heading: "FAST",
        paragraphs: [
          "The easiest way to remember the main signs of a stroke is the word FAST. It stands for face, arms, speech and time to call 999.",
        ],
      },
      {
        heading: "Even if it passes",
        paragraphs: [
          "Even if it does not seem like much, any one of these signs of stroke is an emergency, so always call 999 straight away.",
          "Symptoms of a stroke can sometimes stop after a short time. Even if this happens, get medical help straight away.",
        ],
      },
    ],
    helps: [
      CALL_999,
      "Remember FAST: face, arms, speech, time to call 999.",
      "If the symptoms stop after a short time, still get medical help straight away.",
    ],
    tryThisWeek: [
      "Learn FAST: face, arms, speech, time to call 999.",
      "Any one sign is an emergency, at any age.",
      "If symptoms stop, still get help straight away.",
    ],
    ask: "What should I, or the people around me, do if I have symptoms again?",
    sources: [SA_DX_TX, SA_SURVEY, DS_WHAT, NHS_SYMPTOMS, SA_SYMPTOMS],
    quiz: {
      question: "What should you do if the signs of a stroke stop after a short time?",
      options: [{ text: "Get medical help straight away", right: true }, { text: "Wait and see" }, { text: "Nothing, if you are young" }],
      why: "Symptoms can sometimes stop after a short time. Even if this happens, get medical help straight away.",
    },
  },
  {
    id: "u50-recovery",
    kicker: "Recovery",
    question: "How can recovery be different when you are younger?",
    hook: "Recovery is quickest in the first weeks, but it can carry on for months and years. Some evidence suggests a younger brain may adapt more.",
    short: "The quickest recovery takes place in the days and weeks after a stroke, but recovery can continue for months and years. There is some evidence that in younger survivors the capacity for neuroplasticity may be greater, and other long-term health conditions may be less likely. Some effects, like fatigue, can last even after a good physical recovery.",
    sections: [
      {
        heading: "Quickest at first",
        paragraphs: [
          "The quickest recovery takes place in the days and weeks after a stroke, but recovery can continue for months and years after a stroke.",
        ],
      },
      {
        heading: "A brain that adapts",
        paragraphs: [
          "There is some evidence to suggest that in younger stroke survivors, the capacity for neuroplasticity may be greater. The likelihood of having other long-term health conditions may be lower.",
        ],
      },
      {
        heading: "Memory and thinking",
        paragraphs: [
          "Problems with memory and thinking are usually worst during the first few months after a stroke, but they can improve over time.",
        ],
      },
      {
        heading: "Tiredness can last",
        paragraphs: [
          "Even if you have made a full physical recovery, or your stroke was some time ago, fatigue can still be a problem.",
        ],
      },
    ],
    helps: [
      "Remember that recovery can continue for months and years after a stroke.",
      "Tell your team about memory, thinking or tiredness problems, even if you have recovered well physically.",
      "Fatigue can still be a problem long after a stroke, so mention it even if your stroke was some time ago.",
    ],
    tryThisWeek: [
      "Recovery can continue for months and years.",
      "Tell your team about memory or tiredness problems.",
      "Mention fatigue, even if your stroke was a while ago.",
    ],
    ask: "What can I expect from my recovery over the next few months?",
    sources: [SA_YOUNG_CAUSES, SA_MEMORY, SA_FATIGUE],
    quiz: {
      question: "When does recovery after a stroke stop?",
      options: [{ text: "It can continue for months and years", right: true }, { text: "After two weeks" }, { text: "When you leave hospital" }],
      why: "The quickest recovery is in the days and weeks after a stroke, but recovery can continue for months and years.",
    },
  },
  {
    id: "u50-hidden",
    kicker: "Hidden effects",
    question: "What are the hidden effects of a stroke?",
    hook: "You may look fine. Tiredness, memory and thinking problems can still be there, and they are hard to explain.",
    short: "Some effects of a stroke cannot be seen. Fatigue is different from normal tiredness, as it does not seem to get better with rest. Problems with memory and thinking are usually worst in the first few months and can improve. Because you may look fine, these effects can be hard to explain to others.",
    sections: [
      {
        heading: "Looking fine",
        paragraphs: [
          "When the effects cannot be seen, it can be very difficult for stroke survivors who 'look fine' to explain their experiences to medical professionals, family and friends.",
        ],
      },
      {
        heading: "Fatigue is different",
        paragraphs: [
          "Fatigue is different from normal tiredness, as it does not seem to get better with rest.",
        ],
      },
      {
        heading: "Even after a good recovery",
        paragraphs: [
          "Even if you have made a full physical recovery, or your stroke was some time ago, fatigue can still be a problem.",
        ],
      },
      {
        heading: "Memory and thinking",
        paragraphs: [
          "Problems with memory and thinking are usually worst during the first few months after a stroke, but they can improve over time.",
        ],
      },
      {
        heading: "The people around you",
        paragraphs: [
          "Fatigue can also affect your relationships, as family and friends may not understand how exhausted you feel day to day.",
        ],
      },
    ],
    helps: [
      "Tell your GP or stroke team about fatigue, memory or thinking problems, even if you look well.",
      "Share information about hidden effects with family and friends, so they understand.",
      "Remember that memory and thinking problems can improve over time.",
    ],
    tryThisWeek: [
      "Tell your team about any hidden effects.",
      "Share this page with someone close to you.",
      "Memory and thinking can improve over time.",
    ],
    ask: "Could tiredness, memory or concentration problems be part of my stroke, and what can help?",
    sources: [DS_INVISIBLE, SA_FATIGUE, SA_MEMORY],
    quiz: {
      question: "How is stroke fatigue different from normal tiredness?",
      options: [{ text: "It does not seem to get better with rest", right: true }, { text: "It only lasts a day" }, { text: "It only happens to older people" }],
      why: "Fatigue is different from normal tiredness, as it does not seem to get better with rest.",
    },
  },
  {
    id: "u50-fitness",
    kicker: "Getting active",
    question: "How can I get my fitness back safely after a stroke?",
    hook: "Unless your doctor says otherwise, moving and being active is safe. Start slowly, and ask first if you are unsure.",
    short: "Unless your doctor tells you otherwise, moving and being active is safe. If you are not sure which activities are safe for you, ask your GP or therapist. If you have very high blood pressure, speak to your doctor first. Start slowly and build up over time, to avoid making fatigue worse.",
    sections: [
      {
        heading: "Moving is usually safe",
        paragraphs: [
          "Unless your doctor tells you otherwise, moving and being active is safe. It could make all the difference to your health and wellbeing.",
        ],
      },
      {
        heading: "Ask first if you are unsure",
        paragraphs: [
          "If you are not sure which activities are safe for you because of a disability or a health condition, ask your GP or therapist for advice.",
          "If you have very high blood pressure, speak to your doctor before starting to be more active, to make sure it is safe for you.",
        ],
      },
      {
        heading: "Start slowly",
        paragraphs: [
          "Start slowly, and build up over time, to avoid making fatigue worse.",
        ],
      },
      {
        heading: "Back to sport",
        paragraphs: [
          "You may need to return to sport slowly, to regain fitness and avoid injury after a break.",
          "It can be tempting to push yourself to do more if you are having a good day, but this can leave you feeling fatigued later.",
        ],
      },
    ],
    helps: [
      "Ask your GP or therapist which activities are safe for you.",
      "If you have very high blood pressure, speak to your doctor before becoming more active.",
      "Start slowly and build up over time, even on a good day.",
    ],
    tryThisWeek: [
      "Ask which activities are safe for you.",
      "Check with your doctor first if your blood pressure is very high.",
      "Start slowly and build up over time.",
    ],
    ask: "Is it safe for me to exercise hard again, and is there anything I should avoid?",
    sources: [SA_EXERCISE, SA_SPORT],
    quiz: {
      question: "What can happen if you push yourself on a good day?",
      options: [{ text: "You can feel fatigued later", right: true }, { text: "Nothing at all" }, { text: "You recover faster for certain" }],
      why: "Pushing yourself to do more on a good day can leave you feeling fatigued later.",
    },
  },
  {
    id: "u50-work",
    kicker: "Work",
    question: "How do I go back to work after a stroke?",
    hook: "Often in stages. Your employer may have to make reasonable adjustments, and Access to Work can help.",
    short: "Many people go back gradually, starting part-time and building up to full-time hours. Employers have a duty to make reasonable adjustments for employees who are disabled, and many stroke survivors are covered by the Equality Act 2010. Access to Work can help you get or stay in work.",
    sections: [
      {
        heading: "A phased return",
        paragraphs: [
          "A phased return means a gradual return to work, starting off part-time and building up to full-time hours, to ease back into work gently.",
        ],
      },
      {
        heading: "Reasonable adjustments",
        paragraphs: [
          "Employers have a duty to make reasonable adjustments for employees who are disabled.",
          "This can include allowing a phased return to work, with flexible hours or part-time working.",
        ],
      },
      {
        heading: "The Equality Act",
        paragraphs: [
          "You are disabled under the Equality Act 2010 if you have a physical or mental impairment that has a substantial and long-term negative effect on your ability to do normal daily activities. Long-term means 12 months or more.",
          "Many stroke survivors are covered by the Equality Act 2010. The Act does not apply to Northern Ireland.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability.",
          "An Access to Work grant will not affect any other benefits you get, and you will not have to pay it back.",
        ],
      },
    ],
    helps: [
      "Talk to your employer about a phased return, starting part-time and building up.",
      "Ask your employer about reasonable adjustments, such as flexible hours.",
      "Look at Access to Work on GOV.UK to see if it can help you.",
    ],
    tryThisWeek: [
      "Talk to your employer about a phased return.",
      "Ask about reasonable adjustments.",
      "Look up Access to Work on GOV.UK.",
    ],
    ask: "What can I tell my employer about my stroke and a phased return?",
    sources: [SA_WORK_PREPARE, SA_WORK_RIGHTS, GOV_ADJUST, GOV_DISABILITY, DS_WORK, GOV_ACCESS],
    quiz: {
      question: "What is a phased return to work?",
      options: [{ text: "Starting part-time and building up", right: true }, { text: "Going straight back full-time" }, { text: "Changing jobs" }],
      why: "A phased return is a gradual return to work, starting part-time and building up to full-time hours.",
    },
  },
  {
    id: "u50-money",
    kicker: "Money",
    question: "What money help is there if a stroke stops me working?",
    hook: "Statutory Sick Pay first, then benefits such as ESA and PIP. And check any mortgage protection you have.",
    short: "Statutory Sick Pay is paid by your employer for up to 28 weeks. You can apply for Employment and Support Allowance if a health condition affects how much you can work, and you can get PIP even if you are working. If you have mortgage payment protection, you may be able to claim on it.",
    sections: [
      {
        heading: "Statutory Sick Pay",
        paragraphs: [
          "Statutory Sick Pay is paid by your employer for up to 28 weeks.",
          "You must give your employer a fit note if you are off work for more than 7 days in a row, including non-working days.",
        ],
      },
      {
        heading: "Employment and Support Allowance",
        paragraphs: [
          "You can apply for Employment and Support Allowance, or ESA, if you have a disability or health condition that affects how much you can work.",
          "You can apply for New Style ESA up to 3 months before your Statutory Sick Pay ends.",
        ],
      },
      {
        heading: "Personal Independence Payment",
        paragraphs: [
          "You can get Personal Independence Payment, or PIP, even if you are working, have savings or are getting most other benefits.",
          "One of the conditions is that you expect the difficulties to last for at least 12 months from when they started. In Scotland, you apply for Adult Disability Payment instead.",
        ],
      },
      {
        heading: "Your mortgage",
        paragraphs: [
          "If you have a mortgage payment protection policy, you can claim on it to cover your mortgage payments if you cannot work because of sickness.",
          "There are lots of circumstances where a payment protection policy will not pay out, so check what yours covers.",
        ],
      },
    ],
    helps: [
      "Give your employer a fit note if you are off work for more than 7 days in a row.",
      "Look at ESA and PIP on GOV.UK, and apply for New Style ESA up to 3 months before your sick pay ends.",
      "If you have mortgage payment protection, check what your policy covers, and contact Citizens Advice if you are worried about mortgage debts.",
    ],
    tryThisWeek: [
      "Send a fit note if you are off more than 7 days.",
      "Look up ESA and PIP on GOV.UK.",
      "Check what your mortgage protection covers.",
    ],
    ask: "Can someone help me with sick pay, benefits or my mortgage?",
    sources: [GOV_SSP, GOV_SSP_ELIGIBLE, GOV_ESA, GOV_ESA_ELIGIBLE, GOV_PIP, GOV_PIP_ELIGIBLE, CA_MORTGAGE],
    quiz: {
      question: "Can you get PIP if you are working?",
      options: [{ text: "Yes", right: true }, { text: "No, never" }, { text: "Only after five years" }],
      why: "You can get PIP even if you are working, have savings or are getting most other benefits.",
    },
  },
  {
    id: "u50-children",
    kicker: "Family",
    question: "How do I explain my stroke to my children?",
    hook: "Honestly, simply, and at a level that makes sense to them. Keeping routines going helps too.",
    short: "Research suggests children cope much better if they are told the truth and kept informed at a level that makes sense to them. With young children, keep it basic and simple, and keep your answers honest. Keeping routines going and letting their school know can help, and there are free resources made for children.",
    sections: [
      {
        heading: "Tell the truth",
        paragraphs: [
          "Research suggests that children cope much better if they are told the truth and kept informed at a level that makes sense to them.",
          "This advice comes from Headway, the brain injury charity, and is about brain injury in general.",
        ],
      },
      {
        heading: "Keep it simple",
        paragraphs: [
          "Young children often have a short attention span. If they ask about their parent, keep what you share basic and simple.",
        ],
      },
      {
        heading: "Honest answers",
        paragraphs: [
          "It can help to hold back some details, especially if you are unsure what will happen. But it is important that your answers are honest.",
        ],
      },
      {
        heading: "Routines and school",
        paragraphs: [
          "Try to keep a routine at home, such as the usual school run, meal times and after-school activities.",
          "Tell their school what has happened, and keep them updated.",
        ],
      },
      {
        heading: "Help made for children",
        paragraphs: [
          "Different Strokes has free resources called 'Someone I Love Had a Stroke' for children aged 3 to 18. They aim to help families talk openly, and help children understand and express their feelings.",
        ],
      },
    ],
    helps: [
      "Tell children the truth, at a level that makes sense to them.",
      "Keep routines going at home, and tell their school what has happened.",
      "Look at the free 'Someone I Love Had a Stroke' resources from Different Strokes.",
    ],
    tryThisWeek: [
      "Tell them the truth, simply.",
      "Let their school know what has happened.",
      "Look at the Different Strokes resources for children.",
    ],
    ask: "Is there anyone who can help me talk to my children about my stroke?",
    sources: [HEADWAY_CHILDREN, DS_FAMILY],
    quiz: {
      question: "What does research suggest helps children cope?",
      options: [{ text: "Being told the truth, at their level", right: true }, { text: "Not being told anything" }, { text: "Being told every detail" }],
      why: "Children cope much better if they are told the truth and kept informed at a level that makes sense to them.",
    },
  },
  {
    id: "u50-relationships",
    kicker: "Relationships",
    question: "How can a stroke change my relationships?",
    hook: "A stroke can change things for both of you. Talking helps, and many people have happy, healthy relationships after a stroke.",
    short: "Your stroke is likely to be just as life-changing for your partner as it is for you. It helps to talk about the things you are finding difficult. Many people have sex again when they feel ready, and many people have happy, healthy relationships after a stroke.",
    sections: [
      {
        heading: "Life-changing for both of you",
        paragraphs: [
          "Your stroke is likely to be just as life-changing for your partner as it is for you.",
        ],
      },
      {
        heading: "Talking",
        paragraphs: [
          "Talk to your partner about the things you are finding difficult.",
        ],
      },
      {
        heading: "Sex and intimacy",
        paragraphs: [
          "Many people do have sex again after a stroke when they feel physically and emotionally ready. It is very common to feel that a stroke has changed your relationship and sex life.",
          "Your blood pressure can rise when you orgasm, but you are no more likely to have a stroke during sex than at any other time.",
        ],
      },
      {
        heading: "Family and friends",
        paragraphs: [
          "Fatigue can affect your relationships, as family and friends may not understand how exhausted you feel day to day.",
        ],
      },
      {
        heading: "Relationships after a stroke",
        paragraphs: [
          "Many people have happy, healthy relationships after a stroke.",
        ],
      },
    ],
    helps: [
      "Talk to your partner about the things you are finding difficult.",
      "Remember that you are no more likely to have a stroke during sex than at any other time.",
      "Help family and friends understand hidden effects like fatigue.",
    ],
    tryThisWeek: [
      "Talk about one thing you are finding difficult.",
      "Sex is no more likely to cause a stroke than any other time.",
      "Help family and friends understand fatigue.",
    ],
    ask: "Is there anything I should know about sex and intimacy after my stroke?",
    sources: [SA_RELATIONSHIP, SA_SEX, SA_FATIGUE],
    quiz: {
      question: "Are you more likely to have a stroke during sex?",
      options: [{ text: "No more likely than at any other time", right: true }, { text: "Yes, much more likely" }, { text: "Only if you are young" }],
      why: "Your blood pressure can rise during orgasm, but you are no more likely to have a stroke during sex than at any other time.",
    },
  },
];
