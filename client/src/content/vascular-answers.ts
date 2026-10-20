import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Vascular dementia page's own pieces (content/library-conditions/brain-a.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Sentences are kept short, because
// they are read aloud one at a time. General information only; it never replaces what a person's own team
// tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/conditions/${path}` });
const as = (label: string, path: string): LearnSource => ({ label: `Alzheimer's Society: ${label}`, url: `https://www.alzheimers.org.uk/about-dementia/types-dementia/${path}` });
export const NHS_VASCULAR = nhs("Vascular dementia", "vascular-dementia/");
const NHS_VASC_SYMPTOMS = nhs("Symptoms of vascular dementia", "vascular-dementia/symptoms/");
const NHS_VASC_CAUSES = nhs("Causes of vascular dementia", "vascular-dementia/causes/");
const NHS_VASC_TREATMENT = nhs("Treating vascular dementia", "vascular-dementia/treatment/");
const NHS_TESTS = nhs("Tests used to diagnose dementia", "dementia/symptoms-and-diagnosis/tests/");
export const NHS_LIVING_WELL = nhs("Living well with dementia", "dementia/living-with-dementia/living-well/");
const AS_VASCULAR = as("Vascular dementia", "vascular-dementia");
const AS_VASC_TYPES = as("Types of vascular dementia", "types-of-vascular-dementia");
const AS_VASC_SYMPTOMS = as("Symptoms of vascular dementia", "symptoms-vascular-dementia");
const AS_VASC_DIAGNOSIS = as("Diagnosing vascular dementia", "diagnosis-vascular-dementia");
const AS_VASC_TREATMENT = as("Treatment and support for vascular dementia", "treatment-and-support-vascular-dementia");
const ARUK_VASCULAR: LearnSource = { label: "Alzheimer's Research UK: Vascular dementia", url: "https://www.alzheimersresearchuk.org/dementia-information/types-of-dementia/vascular-dementia/" };
const SA_VASCULAR: LearnSource = { label: "Stroke Association: Vascular dementia", url: "https://www.stroke.org.uk/stroke/effects/vascular-dementia" };
const SA_VASC_TREATMENT: LearnSource = { label: "Stroke Association: Diagnosis and treatment of vascular dementia", url: "https://www.stroke.org.uk/stroke/effects/vascular-dementia/diagnosis-treatment" };
const NHS_STROKE_SYMPTOMS: LearnSource = { label: "NHS: Symptoms of a stroke", url: "https://www.nhs.uk/conditions/stroke/symptoms/" };

export const vascularAnswers: LearnArticle[] = [
  {
    id: "vasc-what",
    kicker: "Your brain",
    question: "What is vascular dementia?",
    hook: "Dementia caused by reduced blood flow to the brain, often after a stroke or through the small blood vessels deep inside it.",
    short: "Vascular dementia is a common type of dementia caused by reduced blood flow to the brain. It is the second most common type, after Alzheimer's disease. Strokes are a common cause, and so is narrowing of the small blood vessels deep inside the brain.",
    sections: [
      {
        heading: "Reduced blood flow",
        paragraphs: [
          "Vascular dementia is a common type of dementia caused by reduced blood flow to the brain. It is estimated to affect around 180,000 people in the UK.",
        ],
      },
      {
        heading: "The second most common type",
        paragraphs: [
          "Vascular dementia is the second most common type of dementia, after Alzheimer's disease. For every 10 people living with dementia, two will have vascular dementia.",
        ],
      },
      {
        heading: "After a stroke",
        paragraphs: [
          "Strokes are a common cause of vascular dementia.",
        ],
      },
      {
        heading: "The small vessels",
        paragraphs: [
          "It can also be caused by narrowing of the small blood vessels deep inside the brain, known as subcortical vascular dementia or small vessel disease. This is thought to be the most common type of vascular dementia.",
        ],
      },
    ],
    helps: [
      "If it is found at an early stage, treatment may be able to stop vascular dementia getting worse, or at least slow it down.",
      "Ask your team what is causing the reduced blood flow in your case.",
      "The Alzheimer's Society support line is 0333 150 3456.",
    ],
    tryThisWeek: [
      "Ask what is causing the reduced blood flow.",
      "Early treatment may slow it down.",
      "Note the Alzheimer's Society line: 0333 150 3456.",
    ],
    ask: "What is causing the reduced blood flow to my brain, and what can we do about it?",
    sources: [NHS_VASCULAR, AS_VASCULAR, ARUK_VASCULAR, SA_VASCULAR, NHS_VASC_CAUSES, AS_VASC_TYPES],
    quiz: {
      question: "What causes vascular dementia?",
      options: [{ text: "Reduced blood flow to the brain", right: true }, { text: "A virus" }, { text: "Getting older on its own" }],
      why: "Vascular dementia is caused by reduced blood flow to the brain.",
    },
  },
  {
    id: "vasc-steps",
    kicker: "Over time",
    question: "Why does vascular dementia change in steps?",
    hook: "It can stay the same for a while, then suddenly get worse. The steps are usually due to new strokes.",
    short: "Vascular dementia can get worse in sudden steps, with periods in between when the symptoms do not change much. The steps are usually due to new strokes. Symptoms may stay the same for months or even years. When it is caused by small vessel disease, it happens slowly and gradually instead.",
    sections: [
      {
        heading: "In sudden steps",
        paragraphs: [
          "Vascular dementia can get worse in sudden steps, with periods in between where the symptoms do not change much. It is difficult to predict when this will happen.",
        ],
      },
      {
        heading: "Steady stretches",
        paragraphs: [
          "Stroke-related dementia often progresses in steps, with long periods when symptoms are stable, followed by shorter periods when symptoms quickly get worse.",
          "Symptoms may stay the same for months or even years.",
        ],
      },
      {
        heading: "Why the steps happen",
        paragraphs: [
          "The steps are usually due to new strokes.",
        ],
      },
      {
        heading: "Or slowly",
        paragraphs: [
          "Vascular dementia caused by small vessel disease happens slowly and gradually over time.",
        ],
      },
    ],
    helps: [
      "The main aim of treatment is to treat the underlying cause, to help stop the condition getting worse.",
      "Learn the signs of a stroke: face, arms, speech, and time to call 999.",
      "Keep a note of any sudden changes, to share with your team.",
    ],
    tryThisWeek: [
      "Learn FAST: face, arms, speech, time to call 999.",
      "Note any sudden changes for your team.",
      "Ask how the underlying cause is being treated.",
    ],
    ask: "Is my vascular dementia more likely to change in steps, or slowly?",
    sources: [NHS_VASCULAR, AS_VASC_TREATMENT, SA_VASCULAR, SA_VASC_TREATMENT, AS_VASC_TYPES, NHS_VASC_TREATMENT, NHS_STROKE_SYMPTOMS],
    quiz: {
      question: "What usually causes a sudden step?",
      options: [{ text: "A new stroke", right: true }, { text: "A bad night's sleep" }, { text: "Nothing in particular" }],
      why: "The steps are usually due to new strokes.",
    },
  },
  {
    id: "vasc-diagnosis",
    kicker: "Diagnosis",
    question: "How is vascular dementia diagnosed?",
    hook: "There is no single test. A brain scan helps, alongside other information, and the pattern of symptoms is different from Alzheimer's.",
    short: "There is no single test for vascular dementia. A brain scan, such as an MRI or CT scan, looks for changes in the brain, and is used with other information to help confirm the diagnosis. Memory loss is not usually the main early symptom, as it often is in Alzheimer's disease.",
    sections: [
      {
        heading: "No single test",
        paragraphs: [
          "There is no single test for vascular dementia.",
        ],
      },
      {
        heading: "Brain scans",
        paragraphs: [
          "You may have a brain scan, such as an MRI scan or CT scan, to look for any changes that have happened in your brain. An MRI scan can give detailed information about the blood vessel damage that happens in vascular dementia.",
          "Brain scans cannot identify vascular dementia by themselves, but they can be used along with other information to help confirm the diagnosis.",
        ],
      },
      {
        heading: "Not like Alzheimer's",
        paragraphs: [
          "Memory loss is very common in the early stages of Alzheimer's disease, but it is not usually the main early vascular dementia symptom.",
          "Tests of thinking might show slower speed of thought and difficulties thinking things through, which are often more common than memory loss.",
        ],
      },
    ],
    helps: [
      "Ask what your scan showed, and what it means for you.",
      "Tell your team about slowed thinking or planning problems, not just memory.",
      "Ask whether you have vascular dementia alone, or mixed dementia.",
    ],
    tryThisWeek: [
      "Ask what your scan showed.",
      "Mention slowed thinking, not just memory.",
      "Ask if it could be mixed dementia.",
    ],
    ask: "What did my scan show, and how sure is the team about the type of dementia?",
    sources: [NHS_VASCULAR, AS_VASC_DIAGNOSIS, NHS_TESTS, AS_VASC_SYMPTOMS],
    quiz: {
      question: "Can a brain scan diagnose vascular dementia on its own?",
      options: [{ text: "No, it is used with other information", right: true }, { text: "Yes, always" }, { text: "Scans are never used" }],
      why: "Brain scans cannot identify vascular dementia by themselves, but they help confirm the diagnosis along with other information.",
    },
  },
  {
    id: "vasc-thinking",
    kicker: "Symptoms",
    question: "Why is memory not always the first sign of vascular dementia?",
    hook: "Slower thinking, planning and concentration are often affected first, and walking can change too.",
    short: "Vascular dementia often affects the speed of thinking, planning and concentration more than memory at first. Following a series of steps, like cooking a meal, can become hard, and there can be short periods of sudden confusion. Walking and balance can also be affected.",
    sections: [
      {
        heading: "Slower thinking",
        paragraphs: [
          "Symptoms can include slowness of thought, difficulty with planning and understanding, and problems with concentration.",
        ],
      },
      {
        heading: "A series of steps",
        paragraphs: [
          "There can be difficulties following a series of steps, such as when cooking a meal.",
        ],
      },
      {
        heading: "Sudden confusion",
        paragraphs: [
          "There can be problems concentrating, including short periods of sudden confusion.",
        ],
      },
      {
        heading: "Walking and balance",
        paragraphs: [
          "Some people find it difficult to walk and keep their balance, with frequent falls.",
        ],
      },
    ],
    helps: [
      "Tell your team about changes in thinking, planning or walking, not just memory.",
      "Tell your team if cooking, or other tasks with many steps, have become hard.",
      "If falls are happening, mention them to your GP or team.",
    ],
    tryThisWeek: [
      "Mention thinking and planning changes.",
      "Mention tasks with many steps that are hard.",
      "Tell your GP about any falls.",
    ],
    ask: "Which of my difficulties are part of vascular dementia, and what can help with each?",
    sources: [NHS_VASCULAR, AS_VASCULAR, NHS_VASC_SYMPTOMS],
    quiz: {
      question: "Which is a common early sign of vascular dementia?",
      options: [{ text: "Slower thinking and planning", right: true }, { text: "Better concentration" }, { text: "Only memory loss" }],
      why: "Slowness of thought, difficulty with planning and problems with concentration are common symptoms.",
    },
  },
  {
    id: "vasc-protect",
    kicker: "Treatment",
    question: "How can vascular dementia be slowed down?",
    hook: "There is no cure, but treating the cause can help stop it getting worse: blood pressure, cholesterol, clots and everyday habits.",
    short: "There is currently no cure for vascular dementia. The main aim of treatment is to treat the underlying cause, to help stop it getting worse. That can mean medicines for high blood pressure, cholesterol or clots, and stopping smoking, getting fit and cutting down on alcohol.",
    sections: [
      {
        heading: "Treating the cause",
        paragraphs: [
          "There is currently no cure for vascular dementia, and there is no way to reverse any loss of brain cells that happened before it was diagnosed.",
          "The main aim of treatment is to treat the underlying cause, to help stop the condition getting worse.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Treatment can include medicines, such as those used to treat high blood pressure, lower cholesterol or prevent blood clots.",
        ],
      },
      {
        heading: "Everyday habits",
        paragraphs: [
          "Stopping smoking, getting fit and cutting down on alcohol can also help.",
        ],
      },
      {
        heading: "Found early",
        paragraphs: [
          "If it is found at an early stage, treatment may be able to stop vascular dementia getting worse, or at least slow it down.",
        ],
      },
      {
        heading: "Alzheimer's medicines",
        paragraphs: [
          "Alzheimer's disease medicines, such as donepezil, galantamine, rivastigmine or memantine, are not used to treat vascular dementia. They may be used in people who have both vascular dementia and Alzheimer's disease.",
        ],
      },
    ],
    helps: [
      "Take the medicines you are prescribed for blood pressure, cholesterol or clots.",
      "Stopping smoking, getting fit and cutting down on alcohol can help.",
      "Ask your team how often your blood pressure and cholesterol should be checked.",
    ],
    tryThisWeek: [
      "Take your prescribed medicines.",
      "Choose one habit: smoking, fitness or alcohol.",
      "Ask when your next blood pressure check is.",
    ],
    ask: "Which of my medicines are protecting my brain, and what else can I change?",
    sources: [NHS_VASCULAR, NHS_VASC_TREATMENT],
    quiz: {
      question: "What is the main aim of treatment?",
      options: [{ text: "To treat the underlying cause", right: true }, { text: "To reverse the damage" }, { text: "There is no treatment at all" }],
      why: "The main aim of treatment is to treat the underlying cause, to help stop the condition getting worse.",
    },
  },
  {
    id: "vasc-mood",
    kicker: "Feelings",
    question: "Why are low mood and apathy common in vascular dementia?",
    hook: "Depression is a particularly common symptom, partly because of damage to the parts of the brain that control emotions. Talking treatments can help.",
    short: "People with vascular dementia often have mood changes such as depression, anxiety or apathy. Depression can be caused by damage to the parts of the brain that control emotions. Talking treatments such as CBT can help, especially early on, and sometimes medicines are used.",
    sections: [
      {
        heading: "Common",
        paragraphs: [
          "People with vascular dementia often have mood changes, such as depression, anxiety or apathy. Depression is a particularly common symptom of vascular dementia.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "Depression can also be caused by damage to parts of the brain that control emotions.",
        ],
      },
      {
        heading: "What it can look like",
        paragraphs: [
          "Signs can include depression, mood swings and a lack of interest or enthusiasm.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Depression is very common in dementia. Talk to your GP, as there are talking treatments that can help.",
          "Cognitive behavioural therapy, or CBT, may be offered for depression or anxiety. It is most useful in the early stages of dementia.",
          "Sometimes medicines may be used to improve your mood if you are feeling very down or depressed.",
        ],
      },
    ],
    helps: [
      "Talk to your GP about low mood: there are talking treatments that can help.",
      "Ask whether CBT could help, especially in the early stages.",
      "Tell your team if you have lost interest in things you used to enjoy.",
    ],
    tryThisWeek: [
      "Talk to your GP about low mood.",
      "Ask whether CBT could help.",
      "Mention any loss of interest.",
    ],
    ask: "Could my low mood or lack of interest be part of the dementia, and what could help?",
    sources: [AS_VASC_SYMPTOMS, NHS_VASC_SYMPTOMS, NHS_LIVING_WELL, AS_VASC_TREATMENT, SA_VASC_TREATMENT],
    quiz: {
      question: "Which talking treatment may be offered for depression or anxiety?",
      options: [{ text: "Cognitive behavioural therapy (CBT)", right: true }, { text: "None exist" }, { text: "Only medicines" }],
      why: "CBT may be offered if depression or anxiety develops. It is most useful in the early stages of dementia.",
    },
  },
  {
    id: "vasc-mixed",
    kicker: "Diagnosis",
    question: "What is mixed dementia?",
    hook: "Having more than one type of dementia at the same time, most often vascular dementia with Alzheimer's disease.",
    short: "Mixed dementia means having more than one type of dementia at the same time. Most often it is Alzheimer's disease and vascular dementia together. At least one in every ten people with dementia is diagnosed with mixed dementia.",
    sections: [
      {
        heading: "More than one type",
        paragraphs: [
          "Having more than one type of dementia at the same time is known as mixed dementia. Some people with vascular dementia also have brain damage caused by Alzheimer's disease.",
        ],
      },
      {
        heading: "How common",
        paragraphs: [
          "At least one in every ten people with dementia is diagnosed with mixed dementia. Most often it is a combination of Alzheimer's disease and vascular dementia.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Alzheimer's disease medicines are not used to treat vascular dementia alone. They may be used in people who have a combination of vascular dementia and Alzheimer's disease.",
        ],
      },
    ],
    helps: [
      "Ask whether your diagnosis is vascular dementia alone, or mixed dementia.",
      "If it is mixed, ask whether Alzheimer's medicines could help.",
      "Keep treating the blood vessel causes too, such as blood pressure.",
    ],
    tryThisWeek: [
      "Ask if your diagnosis is mixed dementia.",
      "Ask about Alzheimer's medicines if it is.",
      "Keep treating blood pressure and other causes.",
    ],
    ask: "Is my dementia vascular, or mixed, and does that change my treatment?",
    sources: [SA_VASCULAR, NHS_VASC_CAUSES, AS_VASC_TYPES, NHS_VASC_TREATMENT],
    quiz: {
      question: "What is mixed dementia most often?",
      options: [{ text: "Alzheimer's disease and vascular dementia together", right: true }, { text: "Two strokes at once" }, { text: "Dementia and depression" }],
      why: "Mixed dementia is most often a combination of Alzheimer's disease and vascular dementia.",
    },
  },
];
