import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Parkinson's disease page's pieces (content/library.ts `learnId`). Every
// sentence was written from wording checked on 20 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. General information only; it never replaces what a
// person's own team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/conditions/parkinsons-disease/${path}` });
const puk = (label: string, path: string): LearnSource => ({ label: `Parkinson's UK: ${label}`, url: `https://www.parkinsons.org.uk/${path}` });
const NHS_PD = nhs("Parkinson's disease", "");
const NHS_SYMPTOMS = nhs("Symptoms", "symptoms/");
const NHS_CAUSES = nhs("Causes", "causes/");
const NHS_DIAGNOSIS = nhs("Diagnosis", "diagnosis/");
const PUK_WHAT = puk("What is Parkinson's?", "information/about-parkinsons/what-is-parkinsons");
const PUK_SYMPTOMS = puk("Symptoms", "information/symptoms");
const PUK_DIAGNOSED = puk("How Parkinson's is diagnosed", "information/about-parkinsons/how-diagnosed");
const PUK_TREMOR = puk("Tremor", "information/symptoms/motor/tremor");
const PUK_LEVODOPA = puk("Levodopa", "information/drugs/levodopa");
const PUK_MOVEMENT = puk("Movement changes and wearing off", "information/drugs/side-effects/movement-changes");
const PUK_MANAGING = puk("Managing your treatments", "information/drugs/managing-treatments");
const PUK_DYSTONIA = puk("Muscle cramps and dystonia", "information/symptoms/motor/muscle-cramps-dystonia");
const PUK_EXERCISE = puk("Physical activity and exercise", "information/treatments/physical-activity-and-exercise");
const PUK_FREEZING = puk("Freezing", "information/symptoms/motor/freezing");
const PUK_SLEEP_SYMPTOMS = puk("Sleep and Parkinson's symptoms", "information/symptoms/non-motor/sleep/parkinsons-symptoms");
const PUK_SLEEP_MANAGING = puk("Managing sleep problems", "information/symptoms/non-motor/sleep/managing-sleep-problems");
const PUK_FALLS = puk("Falls and dizziness", "information/symptoms/motor/falls-and-dizziness");
const PUK_SPEECH = puk("Speech and communication", "information/symptoms/non-motor/speech-communication");
const PUK_SLT = puk("Speech and language therapy", "information/treatments/speech-language-therapy");
const PUK_SWALLOWING = puk("Eating, swallowing and saliva", "information/symptoms/non-motor/eating-swallowing-managing-saliva");
const PUK_DBS = puk("Deep brain stimulation", "information/treatments/deep-brain-stimulation");
const PUK_DBS_PROS = puk("Deep brain stimulation: advantages and disadvantages", "information/treatments/deep-brain-stimulation/advantages-disadvantages");
const PUK_DVLA = puk("Telling DVLA or DVA", "information/travel-transport-mobility/informing-DVLA-DVA-licensing-agency");
const PUK_WORK = puk("Work: information for employees", "information/work/employees");
const PUK_NURSES = puk("Parkinson's nurses", "information/healthcare/health-professionals/parkinsons-nurses");
const PUK_CARERS = puk("Getting support as a carer", "support/caring-for-someone/getting-support-as-a-carer");
const PUK_HELPLINE = puk("Helpline", "support/helpline");
const PUK_ON_TIME = puk("Get It On Time", "get-involved/campaign/our-campaigns/get-it-on-time");
const NICE_NG71: LearnSource = { label: "NICE: Parkinson's disease in adults (NG71)", url: "https://www.nice.org.uk/guidance/ng71/chapter/Recommendations" };
const GOV_PD_DRIVING: LearnSource = { label: "GOV.UK: Parkinson's disease and driving", url: "https://www.gov.uk/parkinsons-disease-and-driving" };

export const parkinsonsAnswers: LearnArticle[] = [
  {
    id: "pd-dopamine",
    kicker: "Your brain",
    question: "What does dopamine do, and why does less of it matter?",
    hook: "Dopamine carries messages that keep movement smooth. Parkinson's is caused by losing the nerve cells that make it.",
    short: "Parkinson's disease is caused by a loss of nerve cells in a part of the brain called the substantia nigra. These cells make dopamine, a messenger that helps control and co-ordinate movement. With less dopamine, movements become slow and abnormal. Symptoms usually only start when around half of the nerve cell activity has been lost. Around 166,000 people live with Parkinson's in the UK.",
    sections: [
      {
        heading: "Losing nerve cells",
        paragraphs: [
          "Parkinson's disease is caused by a loss of nerve cells in the part of the brain called the substantia nigra.",
        ],
      },
      {
        heading: "What dopamine does",
        paragraphs: [
          "Dopamine acts as a messenger between the parts of the brain and nervous system that help control and co-ordinate body movements.",
        ],
      },
      {
        heading: "With less of it",
        paragraphs: [
          "With less dopamine, the part of the brain controlling movement cannot work as well as normal, so movements become slow and abnormal.",
          "Symptoms usually only start to develop when around 50% of the nerve cell activity in the substantia nigra has been lost.",
        ],
      },
      {
        heading: "How many people",
        paragraphs: [
          "Around 166,000 people live with Parkinson's in the UK. Someone is diagnosed every 20 minutes.",
        ],
      },
    ],
    helps: [
      "Ask your specialist or Parkinson's nurse to explain how your medicines replace or boost dopamine.",
      "Being active for two and a half hours a week can help manage symptoms.",
      "The Parkinson's UK helpline is 0808 800 0303.",
    ],
    tryThisWeek: [
      "Ask how your medicines work.",
      "Plan some activity this week.",
      "Save the helpline: 0808 800 0303.",
    ],
    ask: "Which symptoms should I keep a diary of before next time?",
    sources: [NHS_CAUSES, PUK_WHAT, PUK_EXERCISE, PUK_HELPLINE],
    quiz: {
      question: "When do symptoms usually start?",
      options: [{ text: "When around half the nerve cell activity is lost", right: true }, { text: "As soon as one cell is lost" }, { text: "Only after age 90" }],
      why: "Symptoms usually only start when around 50% of the nerve cell activity in the substantia nigra has been lost.",
    },
  },
  {
    id: "pd-symptoms",
    kicker: "Symptoms",
    question: "Which Parkinson's symptoms do people not expect?",
    hook: "Smell, sleep, constipation, low mood, anxiety and a quieter voice, sometimes years before movement changes.",
    short: "There are over 40 symptoms of Parkinson's. Early ones can include a reduced sense of smell, depression, anxiety, tiredness, sleep problems and constipation. Loss of smell can come several years before other symptoms. A quieter voice is common, and you might not notice it yourself.",
    sections: [
      {
        heading: "More than movement",
        paragraphs: [
          "There are over 40 symptoms of Parkinson's.",
        ],
      },
      {
        heading: "Early signs",
        paragraphs: [
          "Typical early symptoms include a reduced sense of smell, depression, anxiety, tiredness, problems with sleep and constipation.",
        ],
      },
      {
        heading: "Years before",
        paragraphs: [
          "Loss of the sense of smell sometimes happens several years before other symptoms develop. It may be many months, even years, before symptoms are obvious enough for someone to see their GP.",
        ],
      },
      {
        heading: "A quieter voice",
        paragraphs: [
          "A quieter voice is common in people with Parkinson's. You might not realise that you are talking more quietly.",
        ],
      },
    ],
    helps: [
      "Tell your team about symptoms beyond movement, such as sleep, mood or constipation.",
      "Ask the people close to you whether your voice has become quieter.",
      "Keep a note of symptoms to take to your next appointment.",
    ],
    tryThisWeek: [
      "List symptoms beyond movement.",
      "Ask if your voice sounds quieter.",
      "Take the list to your next appointment.",
    ],
    ask: "Which of my non-movement symptoms could be part of Parkinson's?",
    sources: [PUK_SYMPTOMS, PUK_DIAGNOSED, NHS_SYMPTOMS, PUK_SPEECH],
    quiz: {
      question: "Which symptom can come years before others?",
      options: [{ text: "Loss of the sense of smell", right: true }, { text: "A broken bone" }, { text: "Hair loss" }],
      why: "Loss of the sense of smell sometimes happens several years before other symptoms.",
    },
  },
  {
    id: "pd-diagnosis",
    kicker: "Diagnosis",
    question: "How is Parkinson's diagnosed?",
    hook: "There is no single test. A specialist watches how you move, write and speak, and sometimes how you respond to medicine.",
    short: "There is no single or definitive test for Parkinson's. Your GP will refer you to a specialist, usually a neurologist, who may ask you to write, draw or speak. If symptoms improve after a few weeks or months of Parkinson's medicine, the specialist may confirm the diagnosis. A special scan may be used to rule out other causes, but it cannot prove Parkinson's on its own.",
    sections: [
      {
        heading: "No single test",
        paragraphs: [
          "There is currently no single or definitive test that can diagnose Parkinson's.",
        ],
      },
      {
        heading: "A specialist",
        paragraphs: [
          "If your GP suspects Parkinson's, you will be referred to a specialist, usually a neurologist, a specialist in conditions of the brain and nervous system.",
          "You may be asked to write or draw something, to see if your writing is small or fades, and to speak, to see if your voice is soft or very quiet.",
        ],
      },
      {
        heading: "Trying medicine",
        paragraphs: [
          "If your symptoms improve after taking Parkinson's medicine for a few weeks or months, your specialist may confirm the diagnosis.",
        ],
      },
      {
        heading: "Scans",
        paragraphs: [
          "Special brain scans may be carried out in some cases to rule out other causes. An abnormal DaTscan result alone cannot prove that you have Parkinson's.",
        ],
      },
    ],
    helps: [
      "Write down your symptoms and when they started, for the specialist.",
      "Take someone with you to appointments if you can.",
      "Ask what each test is for.",
    ],
    tryThisWeek: [
      "Write down your symptoms.",
      "Ask someone to come with you.",
      "Ask what each test is for.",
    ],
    ask: "How sure is the diagnosis, and what would make you more certain?",
    sources: [PUK_DIAGNOSED, NHS_DIAGNOSIS],
    quiz: {
      question: "Can a DaTscan prove Parkinson's on its own?",
      options: [{ text: "No", right: true }, { text: "Yes, always" }, { text: "It is the only test used" }],
      why: "An abnormal DaTscan result alone cannot prove that you have Parkinson's.",
    },
  },
  {
    id: "pd-tremor",
    kicker: "Tremor",
    question: "How is a Parkinson's tremor different from essential tremor?",
    hook: "A Parkinson's tremor is most obvious at rest and often starts on one side. Essential tremor shows when your hands are busy.",
    short: "A Parkinson's tremor is most obvious when you are resting, is less noticeable when you move, and usually starts on one side of the body. It often looks like a pill-rolling movement. Essential tremor is the most common type of tremor; it is most obvious when your hands are doing something, and usually affects both sides equally.",
    sections: [
      {
        heading: "At rest",
        paragraphs: [
          "A Parkinson's tremor is most obvious when you are resting and tends to be less noticeable when you are moving. It usually starts on one side of the body.",
        ],
      },
      {
        heading: "Pill-rolling",
        paragraphs: [
          "A resting tremor is the most common Parkinson's tremor. It most often looks like a pill-rolling movement.",
        ],
      },
      {
        heading: "Essential tremor",
        paragraphs: [
          "Essential tremor is the most common type of tremor. It is most obvious when your hands are doing something, and usually affects both sides of the body equally.",
        ],
      },
      {
        heading: "Both",
        paragraphs: [
          "You can have an essential tremor and a Parkinson's tremor at the same time.",
        ],
      },
    ],
    helps: [
      "Notice whether your tremor is worse at rest or when you use your hands.",
      "Notice whether it started on one side.",
      "Tell your specialist what you have noticed.",
    ],
    tryThisWeek: [
      "Notice when the tremor shows.",
      "Notice which side it started on.",
      "Tell your specialist.",
    ],
    ask: "Is my tremor from Parkinson's, essential tremor, or both?",
    sources: [PUK_DIAGNOSED, PUK_TREMOR],
    quiz: {
      question: "When is a Parkinson's tremor most obvious?",
      options: [{ text: "At rest", right: true }, { text: "When writing" }, { text: "Only when holding a cup" }],
      why: "A Parkinson's tremor is most obvious when you are resting.",
    },
  },
  {
    id: "pd-morning",
    kicker: "Mornings",
    question: "Why can mornings be harder with Parkinson's?",
    hook: "If medicines wear off overnight, stiffness, tremor or painful cramps can greet you in the morning.",
    short: "If your Parkinson's medicines wear off during the night, stiffness, tremor or pain may interrupt your sleep. If your last dose is before bed, you may wake with painful cramps, called 'off' dystonia, and not be able to get up until your first dose works. Slow-release levodopa taken before bed can help some people feel less stiff at night.",
    sections: [
      {
        heading: "Wearing off overnight",
        paragraphs: [
          "If your Parkinson's medicines wear off during the night, stiffness, tremor or pain may interrupt your sleep.",
        ],
      },
      {
        heading: "Morning cramps",
        paragraphs: [
          "If you take your last dose of medicine before you go to sleep, you may have 'off' dystonia when you wake in the morning.",
          "You may have painful spasms, and might not be able to get out of bed until your first dose starts to work.",
        ],
      },
      {
        heading: "What can help",
        paragraphs: [
          "Taking slow-release levodopa before bed can help some people feel less stiff during the night.",
        ],
      },
    ],
    helps: [
      "Tell your specialist or Parkinson's nurse if mornings are hard.",
      "Ask whether your medicine timing, or a slow-release medicine at night, could help.",
      "Do not change your medicines without speaking to your team first.",
    ],
    tryThisWeek: [
      "Note how mornings feel.",
      "Ask about night-time medicine.",
      "Never change doses on your own.",
    ],
    ask: "Could my medicine timing be adjusted to help my mornings?",
    sources: [PUK_DYSTONIA, PUK_SLEEP_SYMPTOMS, PUK_LEVODOPA, PUK_MANAGING],
    quiz: {
      question: "What is 'off' dystonia in the morning?",
      options: [{ text: "Painful cramps when medicine has worn off overnight", right: true }, { text: "A normal stretch" }, { text: "A side effect of breakfast" }],
      why: "If your last dose is before bed, you may have 'off' dystonia, painful spasms, when you wake.",
    },
  },
  {
    id: "pd-levodopa",
    kicker: "Medicines",
    question: "What are 'on' and 'off' periods, and why does timing matter?",
    hook: "Levodopa becomes dopamine. When it wears off before the next dose, symptoms come back. Timing is everything.",
    short: "Levodopa is turned into dopamine in the brain. 'On' periods are when symptoms are well controlled; 'off' periods are when they return. Wearing off is when a dose stops working before the next is due. Take medicines at the same times every day, and never stop or change them without speaking to your specialist or nurse.",
    sections: [
      {
        heading: "Levodopa",
        paragraphs: [
          "Levodopa is a chemical building block that your body converts into dopamine in the brain.",
        ],
      },
      {
        heading: "'On' and 'off'",
        paragraphs: [
          "'On' periods are when your symptoms are well controlled. 'Off' periods are when your symptoms return.",
          "Wearing off is when your medicine stops working before your next dose is due.",
        ],
      },
      {
        heading: "Timing",
        paragraphs: [
          "Try to take your medicine at the same set times every day, as advised by your specialist or Parkinson's nurse.",
          "People with Parkinson's need their medicine on time, every time. Over half of people with the condition do not get their medicines on time in hospital.",
        ],
      },
      {
        heading: "Never stop suddenly",
        paragraphs: [
          "Do not stop taking, or change the dose or timing of, your Parkinson's medicines until you have spoken to your specialist or Parkinson's nurse. Stopping needs to be done gradually, with support.",
        ],
      },
    ],
    helps: [
      "Take your medicines at the same times every day.",
      "If you go into hospital, make sure staff know your medicine times.",
      "Never stop or change your medicines without speaking to your specialist or nurse.",
    ],
    tryThisWeek: [
      "Set alarms for your doses.",
      "Write down your medicine times.",
      "Note any 'off' periods for your nurse.",
    ],
    ask: "Are my 'off' periods a sign my medicines need adjusting?",
    sources: [PUK_LEVODOPA, PUK_MOVEMENT, PUK_MANAGING, PUK_ON_TIME, NICE_NG71],
    quiz: {
      question: "What is wearing off?",
      options: [{ text: "When a dose stops working before the next is due", right: true }, { text: "When symptoms are well controlled" }, { text: "A side effect of exercise" }],
      why: "Wearing off is when your medicine stops working before your next dose is due.",
    },
  },
  {
    id: "pd-exercise",
    kicker: "Exercise",
    question: "How does exercise help with Parkinson's?",
    hook: "Being active for two and a half hours a week can help manage symptoms, and can matter as much as getting the dose right.",
    short: "Being active for two and a half hours a week can help manage Parkinson's symptoms, and it can be as important as getting the right dose of medicine. Activity works best when you push yourself. National guidance says to consider a physiotherapist with experience of Parkinson's early on, and to offer physiotherapy for balance or movement problems.",
    sections: [
      {
        heading: "two and a half hours a week",
        paragraphs: [
          "Being active for two and a half hours a week can help manage Parkinson's symptoms. It can be as important as getting the right dose of medicine.",
        ],
      },
      {
        heading: "Push yourself",
        paragraphs: [
          "Being active is always most effective when you push yourself.",
        ],
      },
      {
        heading: "Physiotherapy",
        paragraphs: [
          "National guidance says to consider referring people in the early stages to a physiotherapist with experience of Parkinson's.",
          "It says to offer Parkinson's-specific physiotherapy to people who have balance or movement problems.",
        ],
      },
    ],
    helps: [
      "Aim to be active for two and a half hours a week, in a way that suits you.",
      "Ask for a physiotherapist with experience of Parkinson's.",
      "Ask your team what activity is safe for you.",
    ],
    tryThisWeek: [
      "Plan some activity this week.",
      "Ask about a Parkinson's physiotherapist.",
      "Check what is safe for you.",
    ],
    ask: "What kind of exercise would help me most, and how often?",
    sources: [PUK_EXERCISE, NICE_NG71],
    quiz: {
      question: "How much activity a week can help manage symptoms?",
      options: [{ text: "two and a half hours", right: true }, { text: "10 minutes" }, { text: "None" }],
      why: "Being active for two and a half hours a week can help manage Parkinson's symptoms.",
    },
  },
  {
    id: "pd-voice",
    kicker: "Voice and swallowing",
    question: "How can I keep my voice strong and my swallow safe?",
    hook: "Speech and language therapy can help both, and is best started soon after diagnosis.",
    short: "National guidance says to offer speech and language therapy for problems with communication, swallowing or saliva, and Parkinson's UK recommends seeing a therapist soon after diagnosis. One programme trains people to speak more loudly. Swallowing problems can mean food or drink goes down the wrong way; coughing when eating or a gurgly voice are signs to mention.",
    sections: [
      {
        heading: "Speech and language therapy",
        paragraphs: [
          "National guidance says to offer speech and language therapy to people with Parkinson's who have problems with communication, swallowing or saliva.",
          "Parkinson's UK recommends speaking to a therapist as soon as you can after diagnosis.",
        ],
      },
      {
        heading: "A louder voice",
        paragraphs: [
          "The Lee Silverman Voice Treatment programme helps people recognise that their voice is too quiet, and trains them to speak more loudly. It involves 16 sessions over a month, but it is not available everywhere.",
        ],
      },
      {
        heading: "Swallowing",
        paragraphs: [
          "Swallowing problems mean food or drink can be at risk of going down the wrong way and into your airway.",
          "Signs to look out for include coughing when you eat or drink, and a gurgly voice.",
        ],
      },
    ],
    helps: [
      "Ask for speech and language therapy soon after diagnosis.",
      "Ask whether a voice programme is available near you.",
      "Tell your team about coughing when eating or drinking, or a gurgly voice.",
    ],
    tryThisWeek: [
      "Ask about speech therapy.",
      "Ask if someone notices a quieter voice.",
      "Report any coughing when eating.",
    ],
    ask: "Should I see a speech and language therapist about my voice or swallowing?",
    sources: [NICE_NG71, PUK_SLT, PUK_SWALLOWING, PUK_SPEECH],
    quiz: {
      question: "What can be a sign of a swallowing problem?",
      options: [{ text: "Coughing when you eat or drink", right: true }, { text: "Being hungry" }, { text: "A strong voice" }],
      why: "Signs include coughing when you eat or drink, and a gurgly voice.",
    },
  },
  {
    id: "pd-dbs",
    kicker: "Treatment",
    question: "Who is deep brain stimulation for?",
    hook: "People whose medicines no longer control their movement symptoms well. It is not a cure.",
    short: "If medicines no longer control your symptoms, you may be suitable for deep brain stimulation. It is not a cure and does not stop Parkinson's progressing. It is usually best at improving movement symptoms such as tremor, slowness, stiffness and dyskinesia, and is unlikely to improve symptoms that levodopa does not, except tremor. It is not offered when medicines control symptoms well.",
    sections: [
      {
        heading: "When it is considered",
        paragraphs: [
          "If medicines no longer control your symptoms, you may be suitable for deep brain stimulation.",
          "National guidance says not to offer it to people whose symptoms are well controlled by the best medical treatment.",
        ],
      },
      {
        heading: "What it can do",
        paragraphs: [
          "It is usually most effective at improving movement symptoms, such as tremor, slowness of movement, stiffness and dyskinesia.",
        ],
      },
      {
        heading: "What it cannot do",
        paragraphs: [
          "It is not a cure and does not stop Parkinson's from progressing. It is unlikely to improve movement symptoms that levodopa does not improve, except tremor.",
        ],
      },
    ],
    helps: [
      "Ask whether deep brain stimulation could suit you if medicines stop working well.",
      "Ask what it would and would not improve for you.",
      "Talk it through with your specialist and Parkinson's nurse.",
    ],
    tryThisWeek: [
      "Note which symptoms medicines no longer help.",
      "Ask what it could improve.",
      "Talk it through with your nurse.",
    ],
    ask: "Could deep brain stimulation help me, and what would it not change?",
    sources: [PUK_DBS, PUK_DBS_PROS, NICE_NG71],
    quiz: {
      question: "Does deep brain stimulation cure Parkinson's?",
      options: [{ text: "No", right: true }, { text: "Yes" }, { text: "Only in young people" }],
      why: "It is not a cure and does not stop Parkinson's from progressing.",
    },
  },
  {
    id: "pd-freezing",
    kicker: "Walking",
    question: "What helps when my feet freeze?",
    hook: "Stop, think, plan, do. Counting, a rhythm or a line on the floor can get you moving again.",
    short: "Freezing is when you suddenly cannot step forward, even though you want to, as if your feet are glued to the floor. Parkinson's UK suggests STOP, THINK, PLAN, DO: calm yourself and take a breath, then plan your move. Counting 'one, two, three, step', a metronome, floor strips or imagining the movement can help.",
    sections: [
      {
        heading: "What freezing is",
        paragraphs: [
          "If you freeze, you may suddenly not be able to walk or step forward, even if you want to. People describe it as feeling like their feet are glued to the ground.",
        ],
      },
      {
        heading: "Stop, think, plan, do",
        paragraphs: [
          "Stop: calm yourself and take a breath. Then think, plan your next move, and do it.",
        ],
      },
      {
        heading: "Rhythm",
        paragraphs: [
          "Count 'one, two, three, step', or say 'ready, steady, go', to get moving again. A metronome can help restart your walking.",
        ],
      },
      {
        heading: "Lines and pictures",
        paragraphs: [
          "Strips on the floor, a laser line, or imagining the movement can also help some people.",
        ],
      },
    ],
    helps: [
      "When you freeze, stop and take a breath before you plan your next step.",
      "Count 'one, two, three, step' to get moving.",
      "Ask a physiotherapist about cues that suit you.",
    ],
    tryThisWeek: [
      "Practise stop, think, plan, do.",
      "Try counting your steps.",
      "Ask about floor strips.",
    ],
    ask: "Could a physiotherapist help me with freezing?",
    sources: [PUK_FREEZING],
    quiz: {
      question: "What is the first step when you freeze?",
      options: [{ text: "Stop, calm yourself and take a breath", right: true }, { text: "Push forward harder" }, { text: "Hurry" }],
      why: "Stop: calm yourself and take a breath, then think, plan and do.",
    },
  },
  {
    id: "pd-sleep",
    kicker: "Sleep",
    question: "How can I sleep better with Parkinson's?",
    hook: "Sleep problems are common at any stage. A regular wake-up time, short naps and a word with your GP can help.",
    short: "Sleep problems are common in Parkinson's and can happen at any stage. They can be caused by Parkinson's symptoms or by medicines. An alarm can help you get up at the same time every day, and if you nap, keep it to around 30 minutes. Speaking to your GP is a good first step.",
    sections: [
      {
        heading: "Common",
        paragraphs: [
          "Problems with sleep are common in Parkinson's. They can happen at any stage of the condition.",
        ],
      },
      {
        heading: "Why",
        paragraphs: [
          "Trouble getting to or staying asleep can be caused by a symptom of Parkinson's, or by a side effect of your medicine.",
        ],
      },
      {
        heading: "Routines",
        paragraphs: [
          "An alarm can help you get up at the same time every morning, including weekends.",
          "If you nap, try to nap for a short time, perhaps around 30 minutes.",
        ],
      },
      {
        heading: "Talk to your GP",
        paragraphs: [
          "Speaking with your GP is a good first step for any sleep problems.",
        ],
      },
    ],
    helps: [
      "Get up at the same time every morning, using an alarm if it helps.",
      "Keep naps short, around 30 minutes.",
      "Speak to your GP about sleep problems.",
    ],
    tryThisWeek: [
      "Set the same wake-up time daily.",
      "Keep naps to 30 minutes.",
      "Mention sleep to your GP.",
    ],
    ask: "Could my medicines be affecting my sleep?",
    sources: [PUK_SLEEP_SYMPTOMS, PUK_SLEEP_MANAGING],
    quiz: {
      question: "How long should a nap be?",
      options: [{ text: "Around 30 minutes", right: true }, { text: "Three hours" }, { text: "All afternoon" }],
      why: "If you nap, try to nap for a short time, perhaps around 30 minutes.",
    },
  },
  {
    id: "pd-falls",
    kicker: "At home",
    question: "How can I lower the risk of falls at home?",
    hook: "Clear the clutter, light the stairs, add rails, and take your time.",
    short: "Clear away clutter and arrange furniture so moving around is easy. Keep the house well lit, especially the stairs, and keep a torch by your bed. Hand or grab rails help in tight spaces. Try not to rush, even if the phone is ringing. An occupational therapist can often provide a fall alarm for free.",
    sections: [
      {
        heading: "Clear the way",
        paragraphs: [
          "Clear away as much clutter as you can, and arrange your furniture so that moving around is easy.",
        ],
      },
      {
        heading: "Light",
        paragraphs: [
          "Keep your house well lit, especially around the stairs. Keep a torch by your bed.",
        ],
      },
      {
        heading: "Rails",
        paragraphs: [
          "Hand or grab rails can be useful in tight spaces, such as toilets and bathrooms.",
        ],
      },
      {
        heading: "Take your time",
        paragraphs: [
          "Try not to rush, even if the phone is ringing or there is someone at the door.",
          "Fall detectors, or fall alarms, can help, and an occupational therapist can often provide one for free.",
        ],
      },
    ],
    helps: [
      "Clear clutter and light the stairs.",
      "Keep a torch by your bed.",
      "Ask an occupational therapist about rails and a fall alarm.",
    ],
    tryThisWeek: [
      "Clear one cluttered route.",
      "Put a torch by your bed.",
      "Ask about a fall alarm.",
    ],
    ask: "Could an occupational therapist look at my home for falls?",
    sources: [PUK_FALLS],
    quiz: {
      question: "Who can often provide a fall alarm for free?",
      options: [{ text: "An occupational therapist", right: true }, { text: "Nobody" }, { text: "Only a private company" }],
      why: "An occupational therapist can often provide a fall alarm for free.",
    },
  },
  {
    id: "pd-driving-work",
    kicker: "Driving and work",
    question: "What about driving, work and telling people?",
    hook: "You must tell DVLA, but it does not necessarily affect your licence. At work, the law protects you.",
    short: "You must tell DVLA if you have Parkinson's disease, using form PK1 for a car or motorcycle licence. Having the condition does not necessarily mean your licence will be affected. Tell your insurer too. At work, it is against the law for an employer to discriminate against you because of Parkinson's, and you do not have to tell them if you do not want to.",
    sections: [
      {
        heading: "Tell DVLA",
        paragraphs: [
          "You must tell DVLA if you have Parkinson's disease. Use form PK1 for a car or motorcycle licence, or PK1V for a bus, coach or lorry licence.",
          "You can be fined up to £1,000 if you do not tell DVLA about a medical condition that affects your driving.",
        ],
      },
      {
        heading: "Your licence",
        paragraphs: [
          "Having the condition does not necessarily mean your licence will be affected. It is very important to let your insurance company know too.",
        ],
      },
      {
        heading: "At work",
        paragraphs: [
          "It is against the law for an employer to discriminate against you because of your Parkinson's.",
          "You do not have to tell your employer you have Parkinson's if you do not want to.",
        ],
      },
    ],
    helps: [
      "Tell DVLA, using form PK1 for a car licence.",
      "Tell your insurance company.",
      "Decide when, and whether, to tell your employer.",
    ],
    tryThisWeek: [
      "Find form PK1 on GOV.UK.",
      "Call your insurer.",
      "Think about telling your employer.",
    ],
    ask: "Is my driving affected, and what should I tell my employer?",
    sources: [GOV_PD_DRIVING, PUK_DVLA, PUK_WORK],
    quiz: {
      question: "Does Parkinson's always mean losing your licence?",
      options: [{ text: "No, but you must tell DVLA", right: true }, { text: "Yes, always" }, { text: "You never need to tell DVLA" }],
      why: "Having the condition does not necessarily mean your licence will be affected, but you must tell DVLA.",
    },
  },
  {
    id: "pd-carers",
    kicker: "For carers",
    question: "What support is there for partners and carers?",
    hook: "A free carer's assessment, Parkinson's nurses, and a helpline for both of you.",
    short: "If you regularly support someone with Parkinson's, you have a right to a carer's assessment, and it does not cost anything. Parkinson's nurses help people manage their medicines for the best results and fewer side effects. The Parkinson's UK helpline is 0808 800 0303.",
    sections: [
      {
        heading: "A carer's assessment",
        paragraphs: [
          "If you regularly support someone, you have a right to an assessment to see what help you might need. This is a carer's assessment, and it does not cost anything.",
        ],
      },
      {
        heading: "Parkinson's nurses",
        paragraphs: [
          "Parkinson's nurses help people manage their medicine, so they get the best results and fewer side effects. You need a definite diagnosis before you can be referred.",
        ],
      },
      {
        heading: "The helpline",
        paragraphs: [
          "The Parkinson's UK helpline is 0808 800 0303, Monday to Friday 9am to 6pm, and Saturday 10am to 1pm.",
        ],
      },
    ],
    helps: [
      "Ask your local council for a free carer's assessment.",
      "Ask for a referral to a Parkinson's nurse.",
      "Call the Parkinson's UK helpline on 0808 800 0303.",
    ],
    tryThisWeek: [
      "Ask for a carer's assessment.",
      "Ask about a Parkinson's nurse.",
      "Save the helpline: 0808 800 0303.",
    ],
    ask: "Who can I contact between appointments?",
    sources: [PUK_CARERS, PUK_NURSES, PUK_HELPLINE, NICE_NG71],
    quiz: {
      question: "How much does a carer's assessment cost?",
      options: [{ text: "Nothing", right: true }, { text: "A monthly fee" }, { text: "It depends on your age" }],
      why: "A carer's assessment does not cost anything.",
    },
  },
];
