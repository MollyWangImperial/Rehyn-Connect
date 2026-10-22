import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Caring for someone with advanced cancer page's pieces
// (content/library-conditions/cancer-more-2.ts, `caringAdvanced`). Every sentence was written from wording
// checked on 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those
// pages do not say. Most of it comes from Macmillan Cancer Support, Marie Curie, Carers UK, the NHS (its carers'
// pages, end of life care pages, sepsis, NHS 111 and mental health pages) and the government's pages on
// Carer's Allowance, Carer's Credit and time off work. Emergency guidance (spinal cord compression, sepsis,
// falls, sudden changes) repeats what the sources say, and the feelings answer follows safe-messaging guidance
// with the crisis routes exactly as the NHS states them. There are no figures about time left anywhere.
// General information only; it never replaces what the person's own team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const mc = (label: string, path: string): LearnSource => ({ label: `Marie Curie: ${label}`, url: `https://www.mariecurie.org.uk/${path}` });
const cuk = (label: string, path: string): LearnSource => ({ label: `Carers UK: ${label}`, url: `https://www.carersuk.org/help-and-advice/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_ASSESS = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");
const NHS_BREAKS = nhs("Carers' breaks and respite care", "social-care-and-support/support-and-benefits-for-carers/carer-breaks-and-respite-care/");
const NHS_BENEFITS = nhs("Benefits for carers", "social-care-and-support/support-and-benefits-for-carers/benefits-for-carers/");
const NHS_YOUNG = nhs("Help for young carers", "social-care-and-support/support-and-benefits-for-carers/help-for-young-carers/");
const NHS_EOL = nhs("What end of life care involves", "tests-and-treatments/end-of-life-care/what-it-involves-and-when-it-starts/");
const NHS_HOSPICE = nhs("Hospice care", "tests-and-treatments/end-of-life-care/where-you-can-have-care/hospice-care/");
const NHS_SYMPTOMS = nhs("Managing pain and other symptoms during end of life care", "tests-and-treatments/end-of-life-care/your-wellbeing/controlling-pain-and-other-symptoms/");
const NHS_TALK = nhs("Starting to talk about your terminal illness", "tests-and-treatments/end-of-life-care/your-wellbeing/starting-to-talk-about-your-illness/");
const NHS_ADV = nhs("Advance statement about your care wishes", "tests-and-treatments/end-of-life-care/planning-ahead/advance-statement/");
const NHS_MONEY = nhs("Coping financially with end of life care", "tests-and-treatments/end-of-life-care/your-wellbeing/coping-financially/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_111 = nhs("When to use NHS 111 online or call 111", "nhs-services/urgent-and-emergency-care-services/when-to-use-111/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const MAC_LOOKING = mac("Looking after someone with cancer", "supporting-someone/looking-after-someone-with-cancer");
const MAC_SELF = mac("Looking after yourself as a carer", "supporting-someone/emotional-support-for-carers/looking-after-yourself-as-a-carer");
const MAC_EMO = mac("Emotional effects of caring", "supporting-someone/emotional-support-for-carers/emotional-effects-of-caring");
const MAC_GETSUPPORT = mac("Getting support as a carer", "supporting-someone/practical-support-for-carers/getting-support-as-a-carer");
const MAC_TIPS = mac("Practical tips for caring for someone with cancer", "supporting-someone/practical-support-for-carers/practical-tips-for-caring-for-someone-with-cancer");
const MAC_EQUIP = mac("Equipment and home adaptations", "supporting-someone/practical-support-for-carers/equipment-and-home-adaptations");
const MAC_PLANNING = mac("Planning ahead when you look after someone with cancer", "supporting-someone/practical-support-for-carers/planning-ahead-when-you-look-after-someone-with-cancer");
const MAC_RESPITE = mac("Taking a break from caring (respite care)", "supporting-someone/practical-support-for-carers/taking-a-break-from-caring");
const MAC_BENEFITS = mac("Benefits for carers", "supporting-someone/practical-support-for-carers/benefits-for-carers");
const MAC_WORKING = mac("Working while caring for someone", "supporting-someone/working-while-caring-for-someone");
const MAC_RIGHTS = mac("Your rights at work while caring for someone with cancer", "supporting-someone/your-rights-at-work-while-caring-for-someone");
const MAC_PALLI = mac("Palliative care and cancer", "treatment/types-of-treatment/palliative-care-and-cancer");
const MAC_ADV_CARE = mac("Care and support if you have advanced cancer", "advanced-cancer/care-and-support-if-you-have-advanced-cancer");
const MAC_ADV_REL = mac("Relationships and advanced cancer", "advanced-cancer/relationships-and-advanced-cancer");
const MAC_MSCC = mac("Metastatic spinal cord compression (MSCC)", "impacts-of-cancer/metastatic-spinal-cord-compression");
const MAC_KIDS = mac("Talking to children when someone close to them is dying", "treatment/if-you-have-an-advanced-cancer/end-of-life/talking-to-children-and-teenagers");

const MC_PALLI = mc("What is palliative care?", "information/getting-care/palliative-care");
const MC_SUPPORTING = mc("Supporting someone with a terminal illness", "information/getting-care/supporting-someone-with-terminal-illness");
const MC_CARER_FEEL = mc("Coping with feelings as a carer", "information/getting-care/carer-feelings");
const MC_RESPITE = mc("Respite care", "information/getting-care/respite-care");
const MC_HOME = mc("Caring for someone dying at home", "information/end-of-life/caring-at-home");
const MC_DELIRIUM = mc("Delirium when someone has a terminal illness", "information/symptoms/delirium");
const MC_JIC = mc("Just in case medications", "information/symptoms/just-in-case-medication");
const MC_CHILD = mc("Supporting a child or teenager when someone has a terminal illness", "information/end-of-life/supporting-child-teenager-when-someone-has-terminal-illness");
const MC_ANTICIP = mc("Anticipatory grief", "information/end-of-life/anticipatory-grief");
const MC_SPECIAL = mc("Special rules for benefits", "information/money-and-work/special-rules");
const MC_LINE = mc("Marie Curie's Support Line", "services/support-line");

const CUK_ASSESS = cuk("Having a carer's assessment", "practical-support/carers-assessment/");
const CUK_CA = cuk("Carer's Allowance", "financial-support/carers-allowance/");
const CUK_HELP = cuk("Helpline and other support", "helpline-and-other-support/");
const CUK_BREAK = cuk("Taking a break", "your-health-and-wellbeing/taking-a-break/");
const CUK_STRESS = cuk("Dealing with depression and stress", "your-health-and-wellbeing/dealing-with-depression-and-stress/");
const CUK_SLEEP = cuk("Getting enough sleep", "your-health-and-wellbeing/getting-enough-sleep/");

const GOV_CA = gov("Carer's Allowance: how it works", "carers-allowance");
const GOV_CA_ELIG = gov("Carer's Allowance: eligibility", "carers-allowance/eligibility");
const GOV_CA_CLAIM = gov("Carer's Allowance: make a claim", "carers-allowance/how-to-claim");
const GOV_CA_EFFECT = gov("Carer's Allowance: effect on other benefits", "carers-allowance/effect-on-other-benefits");
const GOV_CREDIT = gov("Carer's Credit", "carers-credit");
const GOV_CREDIT_ELIG = gov("Carer's Credit: eligibility", "carers-credit/eligibility");
const GOV_TIME_OFF = gov("Time off for family and dependants", "time-off-for-dependants");
const GOV_CARERS_LEAVE = gov("Unpaid carer's leave", "carers-leave");

export const caringAdvancedAnswers: LearnArticle[] = [
  {
    id: "carer-role",
    kicker: "Becoming a carer",
    question: "Am I a carer, and where do I start?",
    hook: "Many people looking after a partner, parent or friend do not think of themselves as a carer. Recognising that you are is often the first step to getting help.",
    short: "You are a carer if you give any unpaid help and support to someone with cancer who could not manage without your help. Understanding that you are a carer can be an important step in getting the extra help and support you need. Being a carer can be rewarding, but the physical and emotional demands can be difficult, and there is help for you too.",
    sections: [
      {
        heading: "You may already be a carer",
        paragraphs: [
          "You may not think of yourself as a carer. You may think that because you are a partner, sibling, parent, child, friend or neighbour to the person you look after, you are not a carer. But you are a carer, even if you are close to the person you look after.",
          "You are a carer if you give any unpaid help and support to someone with cancer who could not manage without your help. Understanding that you are a carer can be an important step in getting the extra help and support you need.",
        ],
      },
      {
        heading: "What caring can involve",
        paragraphs: [
          "Being a carer can mean giving emotional support, helping with daily tasks, driving them to appointments and talking to health and social care professionals on their behalf. It can also mean helping with personal care such as bathing and dressing.",
          "Carers also help with shopping, cleaning and laundry, and with paying bills and organising finances. Sitting with someone to keep them company, or watching over someone if they cannot be left alone, all count as being a carer.",
        ],
      },
      {
        heading: "Caring changes over time",
        paragraphs: [
          "How much care you provide can change over time, and you may do more if their cancer becomes more advanced. As the person's situation changes, the healthcare team can give you information and support when you need it.",
          "Every caring situation is different. Your responsibilities will depend on what the person needs, and what you are able to offer. You may share caring with family or friends, or you may be the main carer.",
        ],
      },
      {
        heading: "Telling the team you are a carer",
        paragraphs: [
          "If the person you look after is in hospital, help and support is usually arranged before they go home. Tell the healthcare team that you are a carer, so that you can be part of the plans for going home.",
          "Tell the GP of the person you look after as soon as possible that you care for them, so that they can support you too. Health and social care professionals need permission from the person you are caring for before they share any information about them with you.",
        ],
      },
      {
        heading: "Help is there for you too",
        paragraphs: [
          "Being a carer can be rewarding. But the physical and emotional demands can be difficult, and getting support and having someone to talk to about how you feel might help you cope.",
          "Becoming a carer can be a big change in your life, and it can take time to adjust. Organisations such as Carers UK and Carers Trust can help, and any adult who cares for another adult can have a carer's assessment to see what support may help.",
          "If you are unsure whether you are a carer, it may help to call the free Marie Curie Support Line on 0800 090 2309 to discuss your situation.",
        ],
      },
    ],
    helps: [
      "Recognise that you are a carer, as it can be an important step in getting the help you need.",
      "Tell the healthcare team that you are a carer, so you can be part of the plans for going home.",
      "Tell the GP of the person you look after that you care for them, so they can support you too.",
      "Ask for a carer's assessment to see what support may help.",
      "Call the free Marie Curie Support Line on 0800 090 2309 if you are unsure whether you are a carer.",
    ],
    tryThisWeek: [
      "Tell their GP you are a carer.",
      "Tell the hospital team too.",
      "Ask about a carer's assessment.",
    ],
    ask: "Can you note that I am their carer, so that I can be involved in plans for their care?",
    interactive: {
      kind: "scenarios",
      title: "Am I a carer?",
      scenarios: [
        {
          id: "family",
          situation: "You help your mum every day, but think of yourself as just her daughter.",
          options: [{ text: "Recognise you are a carer, so you can get help", best: true }, { text: "Assume help for carers is not meant for family" }],
          why: "You are a carer, even if you are close to the person you look after.",
        },
        {
          id: "discharge",
          situation: "Your partner is about to come home from hospital.",
          options: [{ text: "Tell the team you are their carer", best: true }, { text: "Wait to be asked" }],
          why: "Tell the healthcare team that you are a carer, so that you can be part of the plans for going home.",
        },
        {
          id: "permission",
          situation: "Your dad's GP surgery will not discuss his care with you.",
          options: [{ text: "Ask your dad to give permission to share information", best: true }, { text: "Stop asking" }],
          why: "Health and social care professionals need permission from the person you are caring for before they share any information about them with you.",
        },
      ],
    },
    sources: [MAC_LOOKING, NHS_ASSESS, MAC_GETSUPPORT, MC_SUPPORTING, MAC_TIPS],
    quiz: {
      question: "Who counts as a carer?",
      options: [{ text: "Anyone giving unpaid help to someone who could not manage without it", right: true }, { text: "Only paid care workers" }, { text: "Only people who live with the person" }],
      why: "You are a carer if you give any unpaid help and support to someone with cancer who could not manage without your help.",
    },
  },
  {
    id: "carer-palliative",
    kicker: "Palliative care",
    question: "What is palliative care, and who will help us?",
    hook: "Palliative care is not only for the last days of life. It is about comfort, support and help for the whole family, sometimes for a long time.",
    short: "Palliative care means the care and support someone might need if they have a life-limiting illness, such as cancer. It includes help to manage pain and other symptoms, emotional support and support for the people close to them, and it is not only about end of life care. The GP, district nurses, palliative care nurses and hospices can all be part of the team.",
    sections: [
      {
        heading: "More than end of life care",
        paragraphs: [
          "Palliative care means the care and support you might need if you have a life-limiting illness, such as cancer. It can include help to manage pain or other symptoms, emotional support, advice about practical problems and planning ahead, and support for the people close to you.",
          "People sometimes think palliative care only means care at the end of life, but it means much more than this. Some people have palliative care for years, and it can be given alongside treatments such as chemotherapy or radiotherapy.",
          "End of life care is a form of palliative care you receive when you're close to the end of life.",
        ],
      },
      {
        heading: "Care for the whole family",
        paragraphs: [
          "Palliative care also involves psychological, social and spiritual support for the person and their family or carers. This is called a holistic approach, because it deals with the person as a whole, not just their illness or symptoms.",
          "Family, friends and carers can get emotional and practical palliative care too. For example, they may be able to join counselling sessions, or speak with a social worker about adjustments needed in the home.",
        ],
      },
      {
        heading: "Who is in the team",
        paragraphs: [
          "If the person is being cared for at home, their GP has overall responsibility for their care. The GP can prescribe the drugs they need, arrange help from other professionals and arrange for them to go into hospital or a hospice if needed.",
          "Community or district nurses can make regular home visits to change dressings, give medicines and support carers. They can also arrange practical aids, such as pressure-relieving mattresses or commodes.",
          "Palliative care nurses are experts in managing pain and other symptoms, and they give emotional support to the family too. In some parts of the UK, a Marie Curie nurse or healthcare assistant can also help, sometimes overnight.",
        ],
      },
      {
        heading: "Hospices",
        paragraphs: [
          "Some people think that you only have hospice care when you are dying, but this is not true. A hospice palliative care team might help control symptoms such as pain or breathlessness, with a stay of a few days before going home again.",
          "Hospice care can be provided at home, in a care home or to a day patient visiting the hospice. Hospice care is free, and it also extends to those who are close to the patient, including into the bereavement period.",
        ],
      },
      {
        heading: "How to get a referral",
        paragraphs: [
          "The person may need a referral to get palliative care. To get one, speak with their GP, their district nurse or another healthcare professional who is caring for them.",
          "If you are caring for someone and want to find out about the care and support available, your first step is to speak to the GP or call the number the healthcare professionals have given you. You can ask about all sorts of help, including night-time services.",
        ],
      },
    ],
    helps: [
      "Ask their GP, district nurse or hospital team about a referral to palliative care.",
      "Ask what support is available for you as their carer, as well as for them.",
      "Write down the names and contact details of the professionals you meet.",
      "Ask the GP or district nurse about the local hospice, and whether it can offer respite care.",
      "Ask about night-time services in your area.",
    ],
    tryThisWeek: [
      "Ask about a palliative care referral.",
      "Save the team's contact details.",
      "Ask about the local hospice.",
    ],
    ask: "Can they be referred to a palliative care team, and is there support for me as their carer?",
    interactive: {
      kind: "flip-cards",
      title: "Who is in the team",
      intro: "Turn a card to see how each person can help.",
      cards: [
        { id: "gp", front: "GP", when: "When they are cared for at home", back: "Has overall responsibility for their care. Prescribes drugs and arranges other help, hospital or hospice." },
        { id: "district-nurse", front: "District nurse", when: "Regular home visits", back: "Changes dressings, gives medicines, supports carers and arranges aids such as pressure-relieving mattresses." },
        { id: "palliative-nurse", front: "Palliative care nurse", when: "For pain and other symptoms", back: "An expert in managing pain and symptoms, who also gives emotional support to the family." },
        { id: "marie-curie", front: "Marie Curie nurse", when: "In some parts of the UK", back: "Can advise about medication. Healthcare assistants help with washing and dressing, sometimes overnight." },
        { id: "hospice", front: "Hospice", when: "Not only at the very end", back: "Helps control symptoms, can care at home or by day, and supports the family. Hospice care is free." },
      ],
    },
    sources: [MAC_PALLI, NHS_EOL, NHS_HOSPICE, MC_PALLI, MAC_GETSUPPORT, MAC_ADV_CARE],
    quiz: {
      question: "Is palliative care only for the last days of life?",
      options: [{ text: "No, some people have it for years", right: true }, { text: "Yes, only at the very end" }, { text: "Only once all treatment has stopped" }],
      why: "Some people have palliative care for years, and it can be given alongside treatments such as chemotherapy or radiotherapy.",
    },
  },
  {
    id: "carer-symptoms",
    kicker: "Warning signs",
    question: "Which changes mean I should get help straight away?",
    hook: "You are often the person who notices first. Knowing the warning signs, and who to call day or night, means help comes sooner.",
    short: "You are often the person who spends the most time with them, so you may notice changes first. If their condition seems to be getting worse, contact the GP, hospital or key worker straight away, and in an emergency call 999. Some changes, such as signs of spinal cord compression or sepsis, need medical help immediately.",
    sections: [
      {
        heading: "Know who to call",
        paragraphs: [
          "If they are having cancer treatment, you may have been asked to contact an emergency 24-hour hospital number. You can also call their key worker, which is usually the clinical nurse specialist. It is very important to follow any advice the hospital team has given you.",
          "If the condition of the person you look after seems to be getting worse, contact the GP, hospital or key worker straight away. GP surgeries provide a 24-hour service, and if you call when the surgery is closed you are usually put through to an out-of-hours doctor. In an emergency, call 999 for an ambulance.",
          "NHS 111 can also help. Call 111, rather than using 111 online, if the person needs to get end-of-life care or has a care plan from their doctor for their current health problem.",
        ],
      },
      {
        heading: "Spinal cord compression",
        paragraphs: [
          "Some cancers can spread to the bones of the spine and press on the spinal cord. This is called metastatic spinal cord compression, and it is an emergency that needs treatment as soon as possible.",
          "Warning signs include new back or neck pain, which may feel like a band around the chest or tummy, and leg weakness, difficulty walking or legs giving way. Others are new numbness or pins and needles, and problems controlling the bladder or bowels.",
          "If you notice any of these, get medical advice immediately, even at a weekend or on a holiday, by contacting the hospital team where they usually go for cancer treatment. If you cannot get in touch with anyone, go to the nearest A&E straight away. Do not wait for further symptoms to develop.",
        ],
      },
      {
        heading: "Infection and sepsis",
        paragraphs: [
          "Sepsis is a serious reaction to an infection that can be life-threatening. There is a higher chance of getting it if someone is having chemotherapy or taking corticosteroids.",
          "Call 999 or go to A&E if an adult is breathing very fast, is confused, has slurred speech or is not making sense, or has blue, pale or blotchy skin. Do the same if they have a very high or very low temperature, feel hot or cold to the touch, or are shivery.",
          "Trust your instincts. Someone with sepsis might not have every symptom, so get immediate medical help if you think there is something seriously wrong.",
        ],
      },
      {
        heading: "Sudden confusion",
        paragraphs: [
          "Delirium causes a sudden change in how a person thinks and behaves. It is a sign that something is making the person more unwell, like dehydration or an infection, and it can often be treated once the cause is found.",
          "Signs include feeling confused, not knowing where they are, seeing or hearing things that are not real, and being restless or unusually sleepy. If you notice a recent change like this, speak to their doctor or nurse as soon as possible.",
        ],
      },
      {
        heading: "Pain, sickness and other symptoms",
        paragraphs: [
          "Symptoms can include feeling and being sick, constipation, loss of appetite and pain. Not everyone approaching the end of life has pain, and their doctor and nurses will help them feel as comfortable as possible.",
          "A doctor or specialist nurse may prescribe just in case medicines, so they can be given quickly if sudden distressing symptoms such as pain or agitation start. If this happens, call their GP, specialist nurse or district nurse.",
        ],
      },
    ],
    helps: [
      "Keep the 24-hour hospital number, the out-of-hours number and the key worker's number in your phone.",
      "Contact the GP, hospital or key worker straight away if their condition seems to be getting worse.",
      "Call 999 for an ambulance in an emergency.",
      "Get medical advice immediately for signs of spinal cord compression, and go to A&E if you cannot reach anyone.",
      "Call 999 or go to A&E if you think they might have sepsis.",
      "Speak to their doctor or nurse as soon as possible about any sudden change in how they think or behave.",
    ],
    tryThisWeek: [
      "Save the 24-hour numbers in your phone.",
      "Learn the spinal cord warning signs.",
      "Know when to call 999.",
    ],
    ask: "Who do we call, day or night, if they become unwell, and which symptoms mean we should call straight away?",
    interactive: {
      kind: "signs",
      title: "Changes to act on",
      intro: "Tick any you have noticed. Each one needs medical advice without waiting.",
      signs: [
        "New back or neck pain",
        "Pain like a band round chest or tummy",
        "Leg weakness or legs giving way",
        "New numbness or pins and needles",
        "Problems controlling bladder or bowels",
        "Breathing very fast",
        "Confused, or slurred speech",
        "Very high or low temperature, shivery",
        "Blue, pale or blotchy skin",
        "A sudden change in behaviour",
      ],
      after: "Get medical help straight away. Use the 24-hour number the hospital gave you, or call 999 or go to A&E in an emergency.",
      copyHeading: "Changes I have noticed",
    },
    sources: [MAC_GETSUPPORT, NHS_111, MAC_MSCC, NHS_SEPSIS, MC_DELIRIUM, NHS_SYMPTOMS, MC_JIC],
    quiz: {
      question: "What should you do if you notice signs of spinal cord compression?",
      options: [{ text: "Get medical advice immediately", right: true }, { text: "Wait a few days to see if it passes" }, { text: "Mention it at the next appointment" }],
      why: "Do not wait for further symptoms to develop.",
    },
  },
  {
    id: "carer-talking",
    kicker: "Talking",
    question: "How do we talk about what they want, and about the future?",
    hook: "These conversations can feel impossible to start. But talking can ease worries, bring you closer and help you both feel ready for the decisions ahead.",
    short: "It can feel very difficult to talk about a terminal illness, but talking can help, and some families find it a relief. Let the person lead, go at their pace and listen. Planning ahead, such as an advance statement, lets them record what matters to them, so you and the team know their wishes if they cannot tell you.",
    sections: [
      {
        heading: "Why talking helps",
        paragraphs: [
          "It can feel very difficult to speak about a terminal illness or the fact someone is dying, but talking can help. You may even find it a relief to have the subject out in the open, even if it is upsetting.",
          "Not talking can create worries or distance between you. Talking about their illness and death may help you both feel more able to deal with the future and your worries together.",
        ],
      },
      {
        heading: "Let them lead",
        paragraphs: [
          "You do not have to be the one to lead the conversation. They will show or tell you what they feel comfortable talking about, and if you are not sure, you could ask whether there is anything they do not want to talk about.",
          "It's okay to admit if you do not know what to say. You're still offering support by having the conversation and being there for that person.",
          "Try not to fix the situation or compare experiences. This is the time to listen, acknowledge and try to understand their feelings. Listening to them can be enough, and you do not need to have all the answers.",
        ],
      },
      {
        heading: "Getting started",
        paragraphs: [
          "Choose a time and a place when you will not be disturbed. Starting with a question may help, because it gives the other person a chance to say how they feel.",
          "You do not have to talk about everything at once. It's normal for people to get upset when they talk about the death of someone they love, and crying can be a release that helps people discuss things more openly.",
        ],
      },
      {
        heading: "Planning ahead together",
        paragraphs: [
          "The person you look after might want to record their wishes for end of life care. This is sometimes called advance care planning, and it is helpful to do it while they are well enough to do so.",
          "An advance statement can include where they would like to be cared for, who is important to them, any religious or spiritual beliefs, and practical things that matter to them. It is not legally binding, but anyone making decisions about their care must take it into account.",
          "An advance decision to refuse treatment is legally binding. A power of attorney lets them choose someone to make decisions and manage things for them if they become unable to do that.",
        ],
      },
      {
        heading: "When wishes cannot be met",
        paragraphs: [
          "There may be times when the person's wishes cannot be met. Sometimes it might be more comfortable for them to be in a hospice or hospital, because their symptoms have become too difficult to manage at home, or because caring at home has become very tiring and difficult for you.",
          "Although it can be disappointing, it is important to know that you have done your best. It does not need to be the end of your caring role, and you can still visit and be closely involved in their care.",
        ],
      },
    ],
    helps: [
      "Let the person lead the conversation, and go at their pace.",
      "Choose a time and a place when you will not be disturbed.",
      "Start with a question, so they can say how they feel.",
      "Listen, and try not to fix things or give advice.",
      "Encourage them to record their wishes while they are well enough.",
      "Keep any advance statement somewhere safe, and tell people where it is.",
    ],
    tryThisWeek: [
      "Ask what they want to talk about.",
      "Pick a quiet time and place.",
      "Ask about recording their wishes.",
    ],
    ask: "Can you help us talk about their wishes and record them in an advance care plan?",
    interactive: {
      kind: "scenarios",
      title: "Starting the conversation",
      scenarios: [
        {
          id: "change-subject",
          situation: "Your partner changes the subject when you mention the future.",
          options: [{ text: "Say you do not have to talk now, but hope to another time", best: true }, { text: "Insist on talking now" }],
          why: "You do not have to talk about everything at once.",
        },
        {
          id: "no-words",
          situation: "You sit with your dad and do not know what to say.",
          options: [{ text: "Admit it, and say you are there for him", best: true }, { text: "Avoid the topic altogether" }],
          why: "It's okay to admit if you do not know what to say. You're still offering support by having the conversation and being there for that person.",
        },
        {
          id: "wishes",
          situation: "Your mum tells you she would like to be cared for at home.",
          options: [{ text: "Help her write it in an advance statement", best: true }, { text: "Assume everyone will just know" }],
          why: "An advance statement can include where they would like to be cared for.",
        },
      ],
    },
    sources: [NHS_TALK, MC_SUPPORTING, MAC_PLANNING, NHS_ADV, MAC_EMO],
    quiz: {
      question: "Is an advance statement legally binding?",
      options: [{ text: "No, but anyone making decisions about their care must take it into account", right: true }, { text: "Yes, like a will" }, { text: "Only if a solicitor writes it" }],
      why: "It is not legally binding, but anyone making decisions about their care must take it into account.",
    },
  },
  {
    id: "carer-practical",
    kicker: "Care at home",
    question: "How do I manage day-to-day care at home safely?",
    hook: "Washing, moving, medicines and making the home work: you do not have to work it out alone. Nurses and therapists can show you, and equipment can help.",
    short: "The person you look after may need help with personal care, moving around and medicines. District nurses, occupational therapists and physiotherapists can show you how to do things safely and arrange equipment, and family and friends can share the load. If they have a fall, do not move them: get advice, or call 999 in an emergency.",
    sections: [
      {
        heading: "Help with personal care",
        paragraphs: [
          "The social worker or district nurse may be able to arrange a care worker to help with bathing, or show you how to do it yourself. Keep to their usual routine, use products they like, and be mindful of their privacy and dignity.",
          "Some of the things you may need to do may make you, or the person you look after, feel uncomfortable. If this is the case, talk to the healthcare team, who may be able to arrange other services to help.",
        ],
      },
      {
        heading: "Moving safely",
        paragraphs: [
          "A physiotherapist, occupational therapist or district nurse can show you how to help them stand, walk, move and turn safely, so you do not hurt yourself or them. They may provide equipment such as special sliding sheets or a hoist.",
          "Good lighting, especially on stairs, nothing on the floor to trip on and well-fitting shoes with a good grip can all help. If they have a fall, do not move them, as both of you could get hurt. Contact the GP or district nurses for advice, or call NHS 111, and in an emergency call 999 for an ambulance.",
          "When a person is not able to move around much, they have a higher risk of pressure sores. A district nurse can show you how to move them, and provide a pressure-relieving mattress and cushion.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Make sure they take their medicines exactly as their cancer doctor, specialist nurse or GP has prescribed. Check their name and the medicine on the label, the expiry date, when it should be taken and how to take it, such as with food.",
          "A pill organiser or a calendar blister pack from the pharmacy can help with regular medicines. It is also important that you know about any medicines taken as required, and how and when to use them.",
          "Prescriptions are free in Scotland, Wales and Northern Ireland. In England, prescriptions are free for people with cancer.",
        ],
      },
      {
        heading: "Equipment and the home",
        paragraphs: [
          "An occupational therapist can give expert advice on what might be suitable and show you how to use equipment safely. Your local council can also assess the house to see if equipment or adaptations might help, and a home assessment is free.",
          "The district nurse can arrange a pressure-relieving mattress, bed raisers or a hospital bed at home. Ask the person which room they would like to have, as they might prefer to be near the bathroom, and leave things within reach for them.",
        ],
      },
      {
        heading: "Sharing the load",
        paragraphs: [
          "Make a list of the daily activities you need help with, and ask people what they can do and how much they can help. A rota or shared calendar of who is helping, when they are coming and what they are doing can make the best use of everyone's time.",
          "Make sure anyone who helps has the information they need, such as what the person prefers to eat, the medicines they take and the phone numbers of who to contact in case of problems.",
          "It also helps to make a back-up plan, to make sure someone else can care for them if you're no longer able to.",
        ],
      },
    ],
    helps: [
      "Ask a district nurse, physiotherapist or occupational therapist to show you how to move them safely.",
      "If they have a fall, do not move them: contact the GP or district nurses, call NHS 111, or call 999 in an emergency.",
      "Check each medicine's label, expiry date and when and how to take it.",
      "Ask the GP or pharmacist about a pill organiser or calendar blister pack.",
      "Ask your local council about a free home assessment for equipment or adaptations.",
      "Set up a rota or shared calendar of who is helping and when.",
    ],
    tryThisWeek: [
      "Ask to be shown how to move them safely.",
      "Ask about a pill organiser.",
      "Start a rota of helpers.",
    ],
    ask: "Could we have an occupational therapy assessment, and can someone show me how to move them safely?",
    interactive: {
      kind: "scenarios",
      title: "Moments at home",
      scenarios: [
        {
          id: "fall",
          situation: "Your husband has fallen in the bathroom.",
          options: [{ text: "Do not move him; get advice, or call 999 in an emergency", best: true }, { text: "Lift him up yourself straight away" }],
          why: "If they have a fall, do not move them, as both of you could get hurt.",
        },
        {
          id: "bed",
          situation: "Your mum now spends most of the day in bed.",
          options: [{ text: "Ask the district nurse about moving her and a pressure-relieving mattress", best: true }, { text: "Leave her in one position to rest" }],
          why: "When a person is not able to move around much, they have a higher risk of pressure sores.",
        },
        {
          id: "helpers",
          situation: "Friends keep asking how they can help.",
          options: [{ text: "Make a rota of who does what, and when", best: true }, { text: "Say you can manage" }],
          why: "A rota or shared calendar of who is helping, when they are coming and what they are doing can make the best use of everyone's time.",
        },
      ],
    },
    sources: [MAC_TIPS, MAC_EQUIP, MAC_GETSUPPORT, MC_HOME],
    quiz: {
      question: "What should you do if the person you care for has a fall?",
      options: [{ text: "Do not move them, and get advice", right: true }, { text: "Help them up quickly" }, { text: "Wait and see how they feel" }],
      why: "If they have a fall, do not move them, as both of you could get hurt.",
    },
  },
  {
    id: "carer-assessment",
    kicker: "Carer's assessment",
    question: "What is a carer's assessment, and how do I get one?",
    hook: "It is not a test of how well you care. It is a free chance to say how caring affects you, and to find out what help you can get.",
    short: "A carer's assessment looks at what might help make your life easier as a carer. It is free and anyone over 18 can ask for one, by contacting adult social services at the local council. It might lead to help such as breaks, training, help at home or advice about benefits.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "If you care for someone, you can have an assessment to see what might help make your life easier. This is called a carer's assessment, and it is free and anyone over 18 can ask for one.",
          "It's certainly not a test of your abilities as a carer. It's a chance to let your local council know how your caring responsibilities affect you physically and emotionally, and whether you're willing or able to carry on caring.",
          "It's separate from the needs assessment the person you care for might have, but you can ask to have them both done at the same time.",
        ],
      },
      {
        heading: "How to ask for one",
        paragraphs: [
          "Contact adult social services at your local council and ask for a carer's assessment. You can call or do it online.",
          "If the person you care for lives in another area, contact their local council instead, except in Wales. In Scotland, it is usually called an adult carer support plan.",
        ],
      },
      {
        heading: "What happens",
        paragraphs: [
          "Someone from the council, or an organisation the council works with, will ask how you're coping with caring. This includes how it affects your physical and mental health, work, free time and relationships.",
          "The assessment is usually face to face, and assessments usually last at least an hour. It can help to have someone with you, such as the person you care for, a friend or relative, or an advocate who can speak up on your behalf.",
        ],
      },
      {
        heading: "How to prepare",
        paragraphs: [
          "Have your NHS number, your GP's details and the details of the person you care for ready. Give as much detail as you can about the impact caring for someone is having on your life.",
          "Be honest and realistic about your caring role. If you put on a brave face or play down any difficulties, you could miss out on help and support.",
        ],
      },
      {
        heading: "What it could lead to",
        paragraphs: [
          "It might recommend someone to take over caring so you can take a break, help with gardening and housework, training in how to lift safely, or putting you in touch with local support groups. It can also lead to advice about benefits for carers.",
          "If you qualify for help from the council, they'll write a care and support plan with you. If you're told you don't qualify, your council should give you free advice about where you can get help in your community.",
          "If you disagree with the results of your carer's assessment or how it was done, you can complain, first to your local council.",
        ],
      },
    ],
    helps: [
      "Contact adult social services at your local council and ask for a carer's assessment.",
      "Ask for it at the same time as the needs assessment for the person you care for.",
      "Make a list of the different ways you provide support, and how caring affects your life.",
      "Have your NHS number, your GP's details and the person's details ready.",
      "Take someone with you, or ask about an advocate.",
      "Call the free Carers UK helpline on 0808 808 7777 to talk about carer's assessments.",
    ],
    tryThisWeek: [
      "Call the council about an assessment.",
      "List how caring affects you.",
      "Gather your NHS number and details.",
    ],
    ask: "Could you help me arrange a carer's assessment, and a needs assessment for them at the same time?",
    interactive: {
      kind: "timeline",
      title: "From asking to a support plan",
      steps: [
        { id: "ask", when: "Step 1", title: "Ask the council", points: ["Contact adult social services at your local council.", "You can call or do it online."] },
        { id: "prepare", when: "Step 2", title: "Get ready", points: ["List the ways you provide support.", "Have your NHS number and GP's details ready."] },
        { id: "assess", when: "Step 3", title: "The assessment", points: ["Usually face to face, lasting at least an hour.", "You can have someone with you."] },
        { id: "results", when: "Step 4", title: "The results", points: ["If you qualify, the council writes a care and support plan with you.", "If not, they should still give you free advice."] },
      ],
    },
    sources: [NHS_ASSESS, CUK_ASSESS],
    quiz: {
      question: "Who can ask for a carer's assessment?",
      options: [{ text: "Anyone over 18 who cares for someone", right: true }, { text: "Only carers who live with the person" }, { text: "Only people who care full time" }],
      why: "A carer's assessment is free and anyone over 18 can ask for one.",
    },
  },
  {
    id: "carer-money",
    kicker: "Money and work",
    question: "What money help is there for carers, and can I keep working?",
    hook: "Caring can affect your income. Carer's Allowance, Carer's Credit and your rights at work can all help, and free advisers can check what you can claim.",
    short: "You could get Carer's Allowance if you care for someone at least 35 hours a week and they get certain benefits. If you care for at least 20 hours a week, Carer's Credit can help protect your National Insurance record. If you work, you have the right to ask for flexible working and to take time off in an emergency, and free advisers can help you check what you can claim.",
    sections: [
      {
        heading: "Carer's Allowance",
        paragraphs: [
          "You could get Carer's Allowance if you care for someone at least 35 hours a week and they get certain benefits. You do not have to be related to, or live with, the person you care for.",
          "The person you care for has to already get one of a list of benefits, such as the daily living component of Personal Independence Payment, or Attendance Allowance. You need to be 16 or over and not in full-time education, and your earnings need to be £204 or less a week after tax, National Insurance and expenses.",
          "If you live in Scotland, you apply for Carer Support Payment instead. You can backdate your claim by up to 3 months.",
        ],
      },
      {
        heading: "How it affects other benefits",
        paragraphs: [
          "Carer's Allowance can affect the other benefits that both you and the person you care for get. When you get it, the person you care for will usually stop getting a severe disability premium paid with their benefits.",
          "For each week you get Carer's Allowance, you'll automatically get National Insurance credits. If you have any doubts about other benefits, it is a good idea to arrange a benefit check.",
          "Free benefits advice and help filling in claim forms is available from the Carers UK helpline and Citizens Advice. Macmillan's money advisers are free on 0808 808 00 00, Monday to Friday, 8am to 6pm.",
        ],
      },
      {
        heading: "Carer's Credit",
        paragraphs: [
          "You could get Carer's Credit if you're caring for someone for at least 20 hours a week. It is a National Insurance credit that helps with gaps in your National Insurance record, and your State Pension is based on that record.",
          "Your income, savings or investments will not affect eligibility for Carer's Credit. You can still get it if you have breaks from caring of up to 12 weeks in a row, for example if the person you look after goes into hospital.",
        ],
      },
      {
        heading: "Benefits for the person you care for",
        paragraphs: [
          "If the person you care for is living with a terminal illness, they may be able to apply for some benefits under the special rules. These might mean faster, easier access to some benefits, the highest rate of some benefits, and no medical assessments.",
          "In England, Wales and Northern Ireland, you can claim Personal Independence Payment, Attendance Allowance and Disability Living Allowance on behalf of someone else. A hospital or community social worker can also give advice on benefits and tell you about any special funds.",
        ],
      },
      {
        heading: "Work and caring",
        paragraphs: [
          "Carers have a legal right to request flexible working, such as working from home, flexible start or finish times or working part-time. Your employer must consider your request in a fair way.",
          "As an employee, you're allowed a reasonable amount of time off to deal with an emergency involving a dependant. Employees are also entitled to up to one week of unpaid carer's leave every 12 months, from their first day of work.",
          "Stopping work could affect your finances and make it harder to get back into the job market later on. Before you decide, it may help to talk to your employer about flexible working and find out about practical or financial support.",
        ],
      },
    ],
    helps: [
      "Check whether you can get Carer's Allowance if you care for someone at least 35 hours a week.",
      "Ask about Carer's Credit if you care for someone at least 20 hours a week.",
      "Arrange a benefit check, as Carer's Allowance can affect the benefits of the person you care for.",
      "Ask whether the person you care for can claim under the special rules.",
      "Ask your employer about flexible working.",
      "Call Macmillan's money advisers free on 0808 808 00 00.",
    ],
    tryThisWeek: [
      "Check Carer's Allowance eligibility.",
      "Arrange a benefit check.",
      "Ask about flexible working.",
    ],
    ask: "Could you fill in the form they need to claim benefits under the special rules?",
    interactive: {
      kind: "flip-cards",
      title: "Money and work help",
      intro: "Turn a card to see what each one is and who it is for.",
      cards: [
        { id: "allowance", front: "Carer's Allowance", when: "Caring at least 35 hours a week", back: "The main benefit for carers, if the person you care for gets certain benefits. It can affect other benefits." },
        { id: "credit", front: "Carer's Credit", when: "Caring at least 20 hours a week", back: "A National Insurance credit that helps with gaps in your record. Income and savings do not affect it." },
        { id: "special-rules", front: "Special rules", when: "If the person has a terminal illness", back: "Can mean faster, easier access to some benefits, or the highest rate, without medical assessments." },
        { id: "flexible", front: "Flexible working", when: "If you are an employee", back: "You can request changes such as working from home or part-time. Your employer must consider it fairly." },
        { id: "leave", front: "Carer's leave", when: "From your first day at work", back: "Up to one week of unpaid leave every 12 months, to give or arrange care." },
      ],
    },
    sources: [GOV_CA, GOV_CA_ELIG, GOV_CA_CLAIM, GOV_CA_EFFECT, CUK_CA, MAC_BENEFITS, GOV_CREDIT, GOV_CREDIT_ELIG, MC_SPECIAL, NHS_MONEY, MAC_RIGHTS, GOV_TIME_OFF, GOV_CARERS_LEAVE, MAC_WORKING, NHS_BENEFITS],
    quiz: {
      question: "How many hours a week of caring do you need for Carer's Allowance?",
      options: [{ text: "At least 35", right: true }, { text: "At least 10" }, { text: "At least 50" }],
      why: "You could get Carer's Allowance if you care for someone at least 35 hours a week and they get certain benefits.",
    },
  },
  {
    id: "carer-respite",
    kicker: "Breaks",
    question: "How can I take a break without feeling guilty?",
    hook: "A break is not letting anyone down. It helps stop you becoming exhausted, and it can be good for the person you care for too.",
    short: "Respite care means taking a break from caring, while the person you care for is looked after by someone else. It can be a few hours, a day or longer, from a sitting service or day centre to a short stay in a hospice or care home. A carer's assessment and a needs assessment are the first step if you want the council to help pay.",
    sections: [
      {
        heading: "Why a break matters",
        paragraphs: [
          "Respite care means taking a break from caring, while the person you care for is looked after by someone else. It lets you take time out to look after yourself and helps stop you becoming exhausted and run down.",
          "Some carers feel guilty for thinking about their own needs, or for needing a break. But it's important to look after yourself too, because caring for someone, especially towards the end of life, can have a huge impact on your physical and mental health.",
          "A break can benefit the person you care for too. They could meet different people and try new things, and it could mean you have different things to talk about.",
        ],
      },
      {
        heading: "Signs a break might help",
        paragraphs: [
          "It could be time to consider a break if you are struggling emotionally, feel your physical health getting worse, or are not getting enough sleep. Other signs are spending most or all of your time caring, or not being able to find time to relax or do things you enjoy.",
        ],
      },
      {
        heading: "Kinds of respite",
        paragraphs: [
          "Some charities and carers' organisations offer sitting services, where a trained volunteer keeps the person you care for company, usually for a few hours at a time. A night-sitting service is where someone comes into your home to allow you to have a proper night's sleep.",
          "The person you look after could go to a day care centre, or a paid carer could visit them at home. The local hospice or hospital may run a day centre for people with cancer.",
          "A hospice might offer a short stay so that family or carers can have a break, but not all hospices offer this, so ask your local hospice. Some care homes also offer short-term respite care.",
        ],
      },
      {
        heading: "Arranging and paying for it",
        paragraphs: [
          "Local councils will only fund respite care for people that they have assessed as needing it. So if you want the council to pay, it's important that you have a carer's assessment, and the person you look after has a care needs assessment.",
          "If you qualify, the council will do a financial assessment to work out if it will pay towards it. Some respite care services may be free, and some charities give grants to carers who need respite.",
        ],
      },
      {
        heading: "Planning ahead",
        paragraphs: [
          "Talk to the person you care for about taking a break, and what arrangement might work best for you both. Leave whoever is caring a list of contacts and the information they need, from what the person likes to eat to the medicines they take.",
          "Think about who you could contact in an emergency, such as an accident or sudden illness. Write some notes about what kind of care the person needs, and leave them in a prominent place for anyone who steps in.",
          "If the person you care for refuses respite care, their GP, social worker or district nurse can help explain why it's important you have a break. You could start by trying shorter breaks.",
        ],
      },
    ],
    helps: [
      "Ask for a carer's assessment, and a care needs assessment for the person you care for.",
      "Ask your local hospice whether it can offer respite care.",
      "Look into sitting services from local charities and carers' organisations.",
      "Talk to the person you care for about what kind of break would work for you both.",
      "Write notes about the care they need, and leave them somewhere easy to find.",
      "Start with shorter breaks if the person you care for is unsure.",
    ],
    tryThisWeek: [
      "Ask about local sitting services.",
      "Ask the hospice about respite.",
      "Write notes for a stand-in carer.",
    ],
    ask: "Is there respite care, such as a hospice stay or a sitting service, that could give me a break?",
    interactive: {
      kind: "risk-check",
      title: "Signs a break might help",
      intro: "Tick any that apply to you. Each one is a reason to think about a break.",
      items: [
        { id: "emotional", label: "Struggling emotionally", note: "It could be time to consider a break if you feel your mental health getting worse.", changeable: true },
        { id: "health", label: "Your own health getting worse", note: "Caring, especially towards the end of life, can have a huge impact on your physical and mental health.", changeable: true },
        { id: "sleep", label: "Not getting enough sleep", note: "A night-sitting service can allow you to have a proper night's sleep.", changeable: true },
        { id: "all-the-time", label: "Caring most or all of the time", note: "A sitting service can keep the person company for a few hours at a time.", changeable: true },
        { id: "no-time", label: "No time to relax or do things you enjoy", note: "Respite lets you take time out to look after yourself.", changeable: true },
      ],
    },
    sources: [NHS_BREAKS, MC_RESPITE, NHS_HOSPICE, CUK_BREAK, MAC_RESPITE],
    quiz: {
      question: "What usually comes first if you want the council to help pay for respite?",
      options: [{ text: "A carer's assessment and a care needs assessment", right: true }, { text: "A letter from a solicitor" }, { text: "Nothing, it happens automatically" }],
      why: "Local councils will only fund respite care for people that they have assessed as needing it.",
    },
  },
  {
    id: "carer-own-health",
    kicker: "Your health",
    question: "How do I look after my own health while caring?",
    hook: "It can feel selfish to think about yourself. But taking care of your own health also benefits the person you look after.",
    short: "Taking the time to focus on your own health and wellbeing will also benefit the person you look after. Tell your GP you are a carer, keep your own appointments, and try to eat well, get outside and rest. If you are having problems eating or sleeping, or finding it hard to cope, talk to your GP.",
    sections: [
      {
        heading: "Your health matters too",
        paragraphs: [
          "You need to look after yourself when you are caring for someone else. Taking the time to focus on your own health and wellbeing will also benefit the person you look after.",
          "Tell your GP that you are a carer so they can give you support and advice, and go to your health and screening appointments. You might be able to have a free flu vaccination if you are the main carer.",
        ],
      },
      {
        heading: "Eating and moving",
        paragraphs: [
          "Try to eat healthy food and sit down to eat a cooked meal. If you are tired, ask a family member or friend to help make meals in advance.",
          "Try to get out of the house every day and do some gentle exercise, like walking. This can help you feel less tired and stressed.",
        ],
      },
      {
        heading: "Sleep",
        paragraphs: [
          "If you are looking after someone who is very ill, getting enough sleep can be difficult. You may need to help them during the night, and some social services have care workers who can help at night.",
          "Having a regular bedtime and wake-up time can really help. Keep a notepad by your bed, so that if you are worried about something you can write it down and deal with it the next day.",
          "If you are caring for someone living with cancer, you may be able to use Sleepio for free. This is an app that offers a 6-week cognitive behavioural therapy programme to improve sleep.",
        ],
      },
      {
        heading: "Making time to relax",
        paragraphs: [
          "Make sure you have time off to relax, and do something you enjoy, like reading, going for a walk, meeting friends or going for a meal. Accept help from others, or ask for help.",
          "If you feel stressed, go out of the room for at least five minutes. Take a deep breath and hold it for a count of three, then breathe out, and repeat until you feel more relaxed, but not so often that you feel dizzy.",
          "Your local carers' centre, Macmillan Information and Support Centre or cancer support group may offer free complementary therapies for carers.",
        ],
      },
      {
        heading: "When to see your GP",
        paragraphs: [
          "If you are having problems eating or sleeping, are struggling with difficult feelings or finding it hard to cope, talk to your GP.",
          "Over the long term, stress can affect your health, so it's important to seek support. Your GP may recommend lifestyle changes, counselling or another talking treatment.",
        ],
      },
    ],
    helps: [
      "Tell your GP that you are a carer.",
      "Go to your own health and screening appointments.",
      "Get out of the house every day for some gentle exercise, like walking.",
      "Keep a regular bedtime and wake-up time.",
      "Ask your local carers' centre about free complementary therapies for carers.",
      "Talk to your GP if you are having problems eating, sleeping or coping.",
    ],
    tryThisWeek: [
      "Tell your GP you are a carer.",
      "Walk outside each day.",
      "Keep a regular bedtime.",
    ],
    ask: "Can you record that I am a carer, and could I have a flu vaccination?",
    interactive: {
      kind: "scenarios",
      title: "Making room for you",
      scenarios: [
        {
          id: "screening",
          situation: "You have cancelled your own screening appointment again.",
          options: [{ text: "Rebook it and keep it", best: true }, { text: "Put it off until caring ends" }],
          why: "Tell your GP that you are a carer so they can give you support and advice, and go to your health and screening appointments.",
        },
        {
          id: "meals",
          situation: "You are too tired to cook for yourself.",
          options: [{ text: "Ask a friend to help make meals in advance", best: true }, { text: "Skip meals" }],
          why: "If you are tired, ask a family member or friend to help make meals in advance.",
        },
        {
          id: "worries",
          situation: "Worries keep you awake at night.",
          options: [{ text: "Write them on a notepad by the bed", best: true }, { text: "Lie there going over them" }],
          why: "Keep a notepad by your bed, so that if you are worried about something you can write it down and deal with it the next day.",
        },
      ],
    },
    sources: [MAC_SELF, CUK_SLEEP, CUK_STRESS],
    quiz: {
      question: "Why does looking after your own health matter?",
      options: [{ text: "It also benefits the person you look after", right: true }, { text: "It does not matter while you are caring" }, { text: "Only once caring ends" }],
      why: "Taking the time to focus on your own health and wellbeing will also benefit the person you look after.",
    },
  },
  {
    id: "carer-feelings",
    kicker: "Feelings",
    question: "Is it normal to feel this way, and where can I turn?",
    hook: "Fear, anger, guilt, sadness and even grief before a loss are all common in carers. Talking about them helps, and support is there day and night.",
    short: "Looking after someone can be rewarding but also very demanding, and at times you may feel frightened, sad, angry, guilty or lonely. These feelings are normal, and talking to others can help you cope. If you think you may be depressed, talk to your GP, and if you ever feel you cannot keep yourself safe, call 999 or go to A&E.",
    sections: [
      {
        heading: "A mix of feelings",
        paragraphs: [
          "Looking after someone can be rewarding, but also very demanding. At times you may feel frightened, sad, angry, guilty or lonely, and the person you are caring for may also have these feelings.",
          "As a carer, you might feel you have to stay positive for the person you look after. But no one can be positive all the time, and it can be a positive thing to say you are feeling tired, worried or angry, so you can get support to help you cope.",
          "Feelings can be stronger at times of change, such as when the person you look after is unwell or needs more help.",
        ],
      },
      {
        heading: "Guilt, anger and resentment",
        paragraphs: [
          "You may feel guilty because you would like to have a break from caring, or feel that you are not a good enough carer. So it is important to talk to people close to you about how you feel.",
          "It is normal to feel angry, or resentful that others cannot give you the help or support you need. Taking some deep breaths, going for a brisk walk, or talking with a family member, friend or another carer can help.",
        ],
      },
      {
        heading: "Grief before a loss",
        paragraphs: [
          "Anticipatory grief is when you have feelings of grief while the person is still alive. Many people experience it, and it is a natural reaction when someone's illness is having an effect on your life.",
          "You may find yourself hoping for their recovery while trying to adjust to the reality that they might die. It is OK to feel both things at once.",
          "Many people feel that the person dying would be a relief, so they no longer have to live like this. It is OK to have these thoughts, and you are not responsible for their illness.",
        ],
      },
      {
        heading: "When low moods do not lift",
        paragraphs: [
          "You are likely to have times when you feel low, and most people find they have good and bad days. But caring may sometimes be so demanding that you become depressed.",
          "Symptoms of depression can include feeling sad or numb for weeks or more, struggling to enjoy things, sleeping problems and changes in eating habits, and finding it hard to concentrate or make decisions. If you think you may be depressed, talk to your GP, as there is support and effective treatments that can help.",
          "Counselling or talking therapy can help you process your feelings, and you do not have to wait until after the person dies to get this support. You can refer yourself through NHS talking therapies, ask your GP to refer you, or ask your local hospice.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online or call 111 and select the mental health option. You can call Samaritans free on 116 123, or text SHOUT to 85258, 24 hours a day, every day.",
          "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
          "To talk about how you are feeling as a carer, you can also call the free Marie Curie Support Line on 0800 090 2309.",
        ],
      },
    ],
    helps: [
      "Tell someone you trust how you are feeling.",
      "Write down your fears and worries, and talk about them with the GP, district nurse or specialist nurse.",
      "Talk to your GP if you think you may be depressed.",
      "Ask about counselling now: you do not have to wait until after the person dies.",
      "Call 111 and select the mental health option if you need urgent help.",
      "Call Samaritans free on 116 123, or text SHOUT to 85258.",
    ],
    tryThisWeek: [
      "Tell one person how you feel.",
      "Write down your worries.",
      "Save 116 123 in your phone.",
    ],
    ask: "I have been feeling very low while caring. What support or talking therapy could help me?",
    interactive: {
      kind: "signs",
      title: "How I have been feeling",
      intro: "Tick any that have lasted for weeks or more. They are worth sharing with your GP.",
      signs: [
        "Feeling sad or numb",
        "Struggling to enjoy things",
        "Sleeping problems",
        "Changes in eating habits",
        "No motivation",
        "Difficulty concentrating",
        "Finding it hard to make decisions",
      ],
      after: "Talk to your GP: there is support and effective treatments. If you feel you cannot keep yourself safe, call 999 or go to A&E.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_EMO, MC_ANTICIP, NHS_URGENT, NHS_SUICIDAL, MC_CARER_FEEL],
    quiz: {
      question: "Can you hope for their recovery and prepare for a loss at the same time?",
      options: [{ text: "Yes, it is OK to feel both things at once", right: true }, { text: "No, you have to choose one" }, { text: "Only if you have given up hope" }],
      why: "It is OK to feel both things at once.",
    },
  },
  {
    id: "carer-children",
    kicker: "Children",
    question: "How do I help the children in the family through this?",
    hook: "Children notice more than adults think. Honest, simple words, a steady routine and someone to trust help them feel safe.",
    short: "Children and young people who have known someone with a terminal illness say that open and honest communication helped them. Use clear, simple words, give information in small chunks and check what they have understood. Keeping routines, talking to the school and making sure they know it is OK to still have fun all help.",
    sections: [
      {
        heading: "Why honesty helps",
        paragraphs: [
          "It is natural to want to protect children, but it can often be more helpful to talk about what is happening, so that they feel included and valued. Children and young people who have known someone with a terminal illness say that open and honest communication helped them.",
          "If children are not told, they might misinterpret things they've seen or heard, or look online and get it wrong. Young children can find reasons to blame themselves, and being honest helps reassure them that they are not responsible.",
        ],
      },
      {
        heading: "Finding the words",
        paragraphs: [
          "It's usually best if the child is told by someone who knows them well. Try to find a place that's comfortable, safe and private, and avoid doing it before bedtime.",
          "Use clear, simple words. Saying someone is going away or going to sleep can confuse young children, and if you're not clear, they might think the person could get better.",
          "It is often easier for children to hear information in small chunks, and you may need to repeat simple messages several times. It's OK not to know the answer to a question and to say that.",
        ],
      },
      {
        heading: "Different ages, different reactions",
        paragraphs: [
          "Some children take some time to process what they've heard. Just because they are not reacting immediately does not mean they have not heard or understood, so check in with them and encourage questions.",
          "Teenagers may ask for more information, or appear not to react. That does not always mean they are coping, and although teenagers want to be independent, they will still look to you for reassurance and support.",
        ],
      },
      {
        heading: "Everyday life",
        paragraphs: [
          "Try to keep things at home as normal as you can, by encouraging them to stick to their routines. Make sure they know that it's OK for them to still have fun.",
          "It's usually best to talk to the child's school about what is happening at home. The school may have a wellbeing officer, school nurse or a specific teacher who the child can go to.",
          "The child may want to do small things to help at home, such as making the person who is ill a drink or reading to them. It can help them to feel included.",
        ],
      },
      {
        heading: "Young carers, and more support",
        paragraphs: [
          "If a young person is helping to look after someone, it's a good idea to let at least one teacher they trust know they're a carer. Young carers projects can give them a break from home and the chance to meet others in similar situations.",
          "Many hospices have family or carer support services, and some have counsellors for families, children and young people. Childline is a free and confidential telephone helpline for children on 0800 11 11.",
        ],
      },
    ],
    helps: [
      "Talk to children about what is happening, so they feel included and valued.",
      "Use clear, simple words, and give information in small chunks.",
      "Check what they have understood, and encourage questions.",
      "Keep to their usual routines, and let them know it is OK to still have fun.",
      "Talk to the child's school about what is happening at home.",
      "Ask the hospice about family support or counselling for children.",
    ],
    tryThisWeek: [
      "Use clear, simple words.",
      "Keep their routines going.",
      "Let the school know.",
    ],
    ask: "Does the hospice or palliative care team offer support or counselling for the children?",
    interactive: {
      kind: "scenarios",
      title: "Moments with children",
      scenarios: [
        {
          id: "asleep",
          situation: "Your young son asks why his mum sleeps so much now.",
          options: [{ text: "Explain simply and honestly what is happening", best: true }, { text: "Tell him she is just a bit tired" }],
          why: "If you're not clear, they might think the person could get better.",
        },
        {
          id: "teen",
          situation: "Your teenager seems not to care.",
          options: [{ text: "Check in gently and invite questions", best: true }, { text: "Assume she is coping fine" }],
          why: "That does not always mean they are coping, and although teenagers want to be independent, they will still look to you for reassurance and support.",
        },
        {
          id: "club",
          situation: "Your daughter wants to give up football club to stay at home.",
          options: [{ text: "Encourage her to keep her routine", best: true }, { text: "Let her stop everything" }],
          why: "Make sure they know that it's OK for them to still have fun.",
        },
        {
          id: "no-answer",
          situation: "Your child asks a question you cannot answer.",
          options: [{ text: "Say you do not know, and that you will find out", best: true }, { text: "Change the subject" }],
          why: "It's OK not to know the answer to a question and to say that.",
        },
      ],
    },
    sources: [MAC_KIDS, MC_CHILD, NHS_YOUNG, MAC_ADV_REL],
    quiz: {
      question: "What do young people say helped them when someone close had a terminal illness?",
      options: [{ text: "Open and honest communication", right: true }, { text: "Being kept out of it" }, { text: "Being told only afterwards" }],
      why: "Children and young people who have known someone with a terminal illness say that open and honest communication helped them.",
    },
  },
  {
    id: "carer-support",
    kicker: "Support",
    question: "Who can I call for help and support?",
    hook: "You do not have to wait for an appointment. Helplines, online communities and local carers' groups are there for you, and many are free.",
    short: "The Macmillan Support Line is free on 0808 808 00 00, 8am to 8pm, 7 days a week. Marie Curie's free Support Line on 0800 090 2309 is for people affected by a terminal illness and their carers, and the Carers UK Helpline on 0808 808 7777 helps with benefits, rights and carers' assessments. Samaritans are there any time on 116 123.",
    sections: [
      {
        heading: "For questions about cancer",
        paragraphs: [
          "You can call Macmillan free on 0808 808 00 00, 8am to 8pm, 7 days a week, and talk to cancer specialists about anything. You can also chat online, or visit the Online Community to talk to other carers and share your experience.",
        ],
      },
      {
        heading: "For terminal illness and caring",
        paragraphs: [
          "Marie Curie's Support Line offers free information and emotional support for people living with a terminal illness and their family, friends and carers. It is open 8am to 6pm Monday to Friday, and 10am to 4pm Saturday to Sunday, on 0800 090 2309.",
          "The team can help with questions about symptoms, financial support and bereavement, or if you just need to chat. They can talk with you in over 200 languages.",
        ],
      },
      {
        heading: "For carers' rights and money",
        paragraphs: [
          "The Carers UK Helpline is available on 0808 808 7777 from Monday to Friday, 9am to 6pm. It gives information about benefits and financial support, your rights as a carer at work, carers' assessments and services for carers.",
          "Local carers' organisations will have detailed information on the help and support available where you live, such as how to access carers' assessments and local respite services.",
        ],
      },
      {
        heading: "Out of hours and urgent help",
        paragraphs: [
          "Call NHS 111 if you are feeling unwell and need a telephone health assessment. You can also call 111 and select the mental health option if you need mental health support.",
          "If the social services office is closed and you need urgent help, contact the emergency duty team. An easy way is to search online for emergency duty team and the name of your local council.",
          "Samaritans are open 24 hours a day, 365 days a year, and you can call free on 116 123.",
        ],
      },
      {
        heading: "People who understand",
        paragraphs: [
          "Talking to other people who are in a similar situation can be a great help, and it may be a surprise to find that others feel the same way as you. You could join a local carers' group to share your experiences.",
          "When you feel that those closest to you do not understand what you're going through, online forums such as the Carers UK forum and Marie Curie's Online Community can help you connect with others.",
        ],
      },
    ],
    helps: [
      "Call the Macmillan Support Line free on 0808 808 00 00.",
      "Call the Marie Curie Support Line free on 0800 090 2309.",
      "Call the Carers UK Helpline on 0808 808 7777 about benefits and your rights.",
      "Find your local carers' organisation for help where you live.",
      "Call 111 out of hours if you need a health assessment or mental health support.",
      "Join a local carers' group or an online carers' forum.",
    ],
    tryThisWeek: [
      "Save the helpline numbers.",
      "Find your local carers' group.",
      "Try an online carers' forum.",
    ],
    ask: "Which local support services and carers' groups do you know about in our area?",
    interactive: {
      kind: "flip-cards",
      title: "Who to call",
      intro: "Turn a card to see what each line can help with.",
      cards: [
        { id: "macmillan", front: "Macmillan Support Line", when: "8am to 8pm, 7 days a week", back: "Free on 0808 808 00 00. Talk to cancer specialists about anything." },
        { id: "marie-curie", front: "Marie Curie Support Line", when: "Weekdays and weekends", back: "Free on 0800 090 2309, 8am to 6pm on weekdays and 10am to 4pm at weekends. Support for carers, family and friends." },
        { id: "carers-uk", front: "Carers UK Helpline", when: "Monday to Friday, 9am to 6pm", back: "0808 808 7777. Benefits, your rights at work, carers' assessments and services for carers." },
        { id: "nhs-111", front: "NHS 111", when: "When you need help out of hours", back: "For a telephone health assessment, or select the mental health option." },
        { id: "samaritans", front: "Samaritans", when: "24 hours a day, 365 days a year", back: "Free on 116 123, for anyone who needs somebody to talk to." },
      ],
    },
    sources: [MAC_LOOKING, MAC_SELF, MC_LINE, CUK_HELP, CUK_STRESS, MC_CARER_FEEL],
    quiz: {
      question: "Which helpline gives information about carers' assessments and benefits?",
      options: [{ text: "The Carers UK Helpline", right: true }, { text: "The DVLA" }, { text: "Your bank" }],
      why: "It gives information about benefits and financial support, your rights as a carer at work, carers' assessments and services for carers.",
    },
  },
];
