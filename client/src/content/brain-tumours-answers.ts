import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Brain tumours page's pieces (content/library-conditions/cancer-more-2.ts,
// `brainTumours`). Every sentence was written from wording checked on 22 October 2026 on the pages listed
// under each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS,
// Macmillan Cancer Support, Cancer Research UK and The Brain Tumour Charity, with the government's DVLA pages
// for driving and Samaritans for support. The pieces describe treatment, recovery and living with after-effects;
// there are no survival or life-expectancy figures. Emergency advice (a seizure, a high temperature during
// chemotherapy, a sudden severe headache, signs of infection on steroids) says only what the NHS and the
// charities say. The mood answer follows safe-messaging guidance and gives the crisis routes exactly as the
// NHS and Samaritans state them. General information only; it never replaces what a person's own team says.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/brain-tumours/${path}` });
const btc = (label: string, path: string): LearnSource => ({ label: `The Brain Tumour Charity: ${label}`, url: `https://www.thebraintumourcharity.org/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_BT = nhs("Brain tumours", "conditions/brain-tumours/");
const NHS_BENIGN = nhs("Non-cancerous (benign) brain tumours", "conditions/non-cancerous-benign-brain-tumours/");
const NHS_MAL_SYMPTOMS = nhs("Symptoms of a malignant brain tumour", "conditions/malignant-brain-tumour/symptoms/");
const NHS_MAL_TREAT = nhs("Treatment for a malignant brain tumour", "conditions/malignant-brain-tumour/treatment/");
const NHS_MAL_HELP = nhs("Help and support for a malignant brain tumour", "conditions/malignant-brain-tumour/help-and-support/");
const NHS_EPILEPSY = nhs("Epilepsy", "conditions/epilepsy/");
const NHS_DEX_SE = nhs("Side effects of dexamethasone tablets and liquid", "medicines/dexamethasone-tablets-and-liquid/side-effects-of-dexamethasone-tablets-and-liquid/");
const NHS_DEX_HOW = nhs("How and when to take dexamethasone tablets and liquid", "medicines/dexamethasone-tablets-and-liquid/how-and-when-to-take-dexamethasone-tablets-and-liquid/");
const NHS_DEX_ABOUT = nhs("About dexamethasone tablets and liquid", "medicines/dexamethasone-tablets-and-liquid/about-dexamethasone-tablets-and-liquid/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_CARER_ASSESS = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");

const MAC_BT = mac("Brain tumours", "brain-tumour");
const MAC_TYPES = mac("Types of brain tumour", "brain-tumour/types-of-brain-tumour");
const MAC_GRADING = mac("Grading brain tumours", "brain-tumour/grading-brain-tumours");
const MAC_SYMPTOMS = mac("Signs and symptoms of a brain tumour", "brain-tumour/signs-and-symptoms-of-a-brain-tumour");
const MAC_TREAT = mac("Brain tumour treatment", "brain-tumour/brain-tumour-treatment");
const MAC_COPING = mac("Coping with changes after brain tumour treatment", "brain-tumour/coping-with-changes-after-brain-tumour-treatment");
const MAC_SURGERY = mac("Surgery for a brain tumour", "treatments-and-drugs/surgery-for-a-brain-tumour");
const MAC_RADIO = mac("Radiotherapy for a brain tumour", "treatments-and-drugs/radiotherapy-for-a-brain-tumour");
const MAC_CHEMO = mac("Chemotherapy for a brain tumour", "treatments-and-drugs/chemotherapy-for-a-brain-tumour");
const MAC_STEROIDS = mac("Steroids for brain tumours", "treatments-and-drugs/steroids-for-brain-tumours");
const MAC_DRIVING = mac("Driving and brain tumours", "impacts-of-cancer/driving-and-brain-tumours");

const CRUK_TYPES = cruk("Types of brain tumours", "types");
const CRUK_GRADES = cruk("Grades of brain tumours", "grades");
const CRUK_SYMPTOMS = cruk("Brain tumour symptoms", "symptoms");
const CRUK_CONTROL = cruk("Controlling symptoms of brain tumours", "treatment/controlling-symptoms");
const CRUK_FOLLOW = cruk("Follow up after brain tumour treatment", "treatment/follow-up");
const CRUK_COPING = cruk("Coping and recovery after treatment for a brain tumour", "living-with/coping");
const CRUK_DRIVING = cruk("Brain tumours and driving", "living-with/driving");
const CRUK_CANT_CURE = cruk("If your brain tumour can't be cured", "living-with/cant-be-cured");

const BTC_FATIGUE = btc("Brain tumour fatigue and tiredness", "living-with-a-brain-tumour/side-effects/fatigue-and-brain-tumours/");
const BTC_FATIGUE_COPE = btc("Coping with fatigue from a brain tumour", "living-with-a-brain-tumour/side-effects/fatigue-and-brain-tumours/coping-with-fatigue/");
const BTC_COGNITION = btc("Cognition and learning difficulties", "living-with-a-brain-tumour/side-effects/cognition-and-brain-tumours/");
const BTC_COGNITION_COPE = btc("Coping with thinking and memory problems", "living-with-a-brain-tumour/side-effects/cognition-and-brain-tumours/coping-with-cognitive-difficulties/");
const BTC_MEMORY = btc("Brain tumour memory loss and memory difficulties", "living-with-a-brain-tumour/side-effects/memory-difficulties-and-brain-tumours/");
const BTC_MEMORY_COPE = btc("Coping with memory difficulties", "living-with-a-brain-tumour/side-effects/memory-difficulties-and-brain-tumours/coping-memory-difficulties/");
const BTC_PERSONALITY = btc("Brain tumour personality changes", "living-with-a-brain-tumour/side-effects/personality-changes/");
const BTC_PERSONALITY_COPE = btc("Coping with personality changes", "living-with-a-brain-tumour/side-effects/personality-changes/coping-personality-changes/");
const BTC_DEPRESSION = btc("Depression and brain tumours", "living-with-a-brain-tumour/side-effects/depression-and-brain-tumours/");
const BTC_DEPRESSION_COPE = btc("Coping with depression", "living-with-a-brain-tumour/side-effects/depression-and-brain-tumours/coping-depression/");
const BTC_SEIZURES = btc("Brain tumour seizure and epilepsy", "living-with-a-brain-tumour/side-effects/seizures-epilepsy-and-brain-tumours/");
const BTC_SEIZURES_COPE = btc("Coping with brain tumour epilepsy and seizures", "living-with-a-brain-tumour/side-effects/seizures-epilepsy-and-brain-tumours/coping-brain-tumour-related-epilepsy/");
const BTC_DRIVING = btc("Can you drive with a brain tumour?", "living-with-a-brain-tumour/maintaining-your-independence/driving-and-brain-tumours/");
const BTC_REHAB = btc("Brain tumour rehabilitation", "brain-tumour-diagnosis-treatment/rehabilitation/");
const BTC_SCANS = btc("Brain scans: CT scan, MRI scan", "brain-tumour-diagnosis-treatment/how-brain-tumours-are-diagnosed/scans-adults/");
const BTC_CARER = btc("Being a carer for a family member or friend", "living-with-a-brain-tumour/relationships/caring-somebody/being-carer/");

const GOV_BT_DRIVING = gov("Brain tumour and driving", "brain-tumour-and-driving");
const GOV_DVLA_NEURO = gov("Neurological disorders: assessing fitness to drive", "guidance/neurological-disorders-assessing-fitness-to-drive");
const GOV_SURRENDER = gov("Voluntarily surrendering your driving licence", "giving-up-your-driving-licence");
const GOV_REAPPLY = gov("Reapply for a driving licence following a health condition", "reapply-driving-licence-health-condition");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const brainTumoursAnswers: LearnArticle[] = [
  {
    id: "bt-what-it-is",
    kicker: "Understanding",
    question: "What is a brain tumour, and what does the grade mean?",
    hook: "A brain tumour is a growth of cells in the brain. Its grade, from 1 to 4, describes how fast it is likely to grow.",
    short: "A brain tumour is a growth of cells in the brain that multiplies in an abnormal, uncontrollable way. Tumours are graded from 1 to 4: grades 1 and 2 are low grade and usually grow slowly, and grades 3 and 4 are high grade and grow faster. Your doctor uses the grade, along with biomarker tests, to plan the best treatment.",
    sections: [
      {
        heading: "A growth of cells in the brain",
        paragraphs: [
          "A brain tumour is a growth of cells in the brain that multiplies in an abnormal, uncontrollable way. A primary brain tumour is one that starts in the brain.",
          "Cancer that has spread to the brain from somewhere else in the body is called secondary brain cancer, or brain metastases.",
        ],
      },
      {
        heading: "Grades 1 to 4",
        paragraphs: [
          "Brain tumours are graded according to how fast they grow and how likely they are to grow back after treatment. Grade 1 and 2 tumours are low grade, and grade 3 and 4 tumours are high grade.",
          "To work out the grade, a pathologist looks at a sample of the tumour under a microscope. The more normal the cells look, the lower the grade. They also look at genes and proteins in the tumour cells.",
          "Your doctor uses the grade along with the results of these biomarker tests. This helps them understand how quickly a tumour may grow, and how best to treat it.",
        ],
      },
      {
        heading: "Slow growing and faster growing",
        paragraphs: [
          "Low-grade tumours usually grow slowly and may not cause symptoms for a long time. They are very unlikely to spread outside of the brain, but they may cause problems as they grow and press on nearby areas.",
          "High-grade tumours grow faster. They cause problems by spreading into and damaging nearby areas of the brain. It is very rare for brain tumours to spread to other parts of the body.",
          "Sometimes a low grade tumour can change over time and become high grade. Ask your doctor and specialist nurse to explain what the grade means in your situation.",
        ],
      },
      {
        heading: "Benign or malignant",
        paragraphs: [
          "Doctors might call some low grade tumours non-cancerous, or benign, and high grade tumours cancerous, or malignant. A non-cancerous tumour grows slowly and is less likely to return after treatment.",
          "But it is not always as clear as this. A slow growing benign tumour can still cause serious symptoms if it is in a particular part of the brain.",
        ],
      },
      {
        heading: "Common types",
        paragraphs: [
          "There are over 100 different types of brain tumour. They are usually named after the type of cell they develop from, or the part of the brain they start in.",
          "More than half of all primary brain tumours are gliomas, made up of cells that look similar to the brain's supporting glial cells. The most common type of glioma is an astrocytoma.",
          "Meningiomas start in the tissues that cover and protect the brain and spinal cord. They are almost always benign, slow-growing tumours, but a small number are faster growing.",
        ],
      },
    ],
    helps: [
      "Ask your doctor and specialist nurse what type and grade of tumour you have.",
      "Ask them to explain what the grade means in your situation.",
      "Ask your doctor how the grade and any biomarker results help plan your treatment.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if waiting to know the grade is worrying you.",
    ],
    tryThisWeek: [
      "Ask your tumour's type and grade.",
      "Ask what the grade means for you.",
      "Call Macmillan if waiting is hard.",
    ],
    ask: "What type and grade of tumour do I have, and what does that mean for my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "Grades 1 to 4",
      intro: "Turn a card to see what each grade means.",
      cards: [
        { id: "grade-1", front: "Grade 1", when: "Low grade", back: "The cells look very much like normal cells. They are usually slow growing and less likely to spread." },
        { id: "grade-2", front: "Grade 2", when: "Low grade", back: "The cells look less like normal cells. Usually slow growing, but they can grow into nearby brain tissue." },
        { id: "grade-3", front: "Grade 3", when: "High grade", back: "The cells look more abnormal. They can spread to other parts of the brain and the spinal cord." },
        { id: "grade-4", front: "Grade 4", when: "High grade", back: "The cells look very abnormal, and these tumours grow quickly. They are cancerous (malignant)." },
      ],
    },
    sources: [NHS_BT, MAC_BT, MAC_TYPES, CRUK_GRADES, CRUK_TYPES, MAC_GRADING],
    quiz: {
      question: "Which grades of brain tumour are low grade?",
      options: [{ text: "Grades 1 and 2", right: true }, { text: "Grades 3 and 4" }, { text: "Only grade 4" }],
      why: "Grade 1 and 2 tumours are low grade, and grade 3 and 4 tumours are high grade.",
    },
  },
  {
    id: "bt-symptoms",
    kicker: "Symptoms",
    question: "What symptoms can a brain tumour cause, and can they change?",
    hook: "Symptoms depend on where the tumour is and how fast it grows. Knowing which changes to report, and when to call 999, matters.",
    short: "Symptoms depend on where the tumour is in the brain and how slowly or quickly it grows. Common ones include headaches, seizures, feeling sick and changes in eyesight, thinking or personality. Talk to your specialists about any symptoms that worry you, and call 999 for a sudden, extremely painful headache or a seizure that lasts longer than 5 minutes.",
    sections: [
      {
        heading: "Symptoms depend on where it is",
        paragraphs: [
          "The symptoms of a brain tumour depend on where it is in the brain and how slowly or quickly it grows. A tumour can stop the part of the brain it presses on or grows into from working normally.",
          "Symptoms can also happen because the tumour is increasing the pressure inside the skull. This is called raised intracranial pressure.",
        ],
      },
      {
        heading: "Common symptoms",
        paragraphs: [
          "Common symptoms include headaches, seizures, feeling or being sick, and drowsiness. Some people have eye problems, changes in personality or behaviour, or problems with memory and concentration.",
          "It is unusual for a headache to be the only symptom. Headaches from raised pressure may be worse in the morning, or get worse when you cough, sneeze or bend down.",
          "Other symptoms depend on the area affected. A tumour may cause weakness on one side of the body, problems with speech, or problems with movement and balance.",
        ],
      },
      {
        heading: "How symptoms can change",
        paragraphs: [
          "Symptoms may develop suddenly, or slowly over months or even years. With a slow growing tumour they can come on gradually, and with a fast growing tumour they can develop over days or weeks.",
          "Sometimes family members or close friends are the first to notice changes in personality, behaviour or thinking.",
          "If you have seizures, an increase in how often you have them does not necessarily mean that your tumour has returned or is regrowing.",
        ],
      },
      {
        heading: "Telling your team",
        paragraphs: [
          "If you have any symptoms or side effects that you're worried about, talk to your specialists. You do not need to wait for your next check-up.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you have changes in your vision, have been vomiting for more than 2 days, or are worried about new or unusual symptoms.",
        ],
      },
      {
        heading: "When to call 999",
        paragraphs: [
          "Call 999 or go to A&E if someone has a headache that came on suddenly and is extremely painful, or faints and does not wake up.",
          "Call 999 too if someone has a seizure for the first time, it lasts longer than usual for them, or it lasts longer than 5 minutes if you do not know how long their seizures usually last. The same applies if they are seriously injured during a seizure.",
          "Do not drive yourself to A&E. The person you speak to at 999 will give you advice about what to do.",
        ],
      },
    ],
    helps: [
      "Talk to your specialists about any symptoms you're worried about; you do not need to wait for your next check-up.",
      "Ask for an urgent GP appointment or get help from NHS 111 if your vision changes or you have been vomiting for more than 2 days.",
      "Call 999 or go to A&E for a headache that came on suddenly and is extremely painful.",
      "Call 999 if a seizure lasts longer than usual for that person, or longer than 5 minutes.",
      "Speak to your doctor or specialist nurse if you or your family notice changes in your personality.",
    ],
    tryThisWeek: [
      "Tell your team about worrying symptoms.",
      "Know when to call 111 or 999.",
      "Mention personality changes to your nurse.",
    ],
    ask: "Which symptoms should I report straight away, and who do I call out of hours?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your team about",
      intro: "Tick any you have noticed. Other conditions can cause them too, but your team will want to know.",
      signs: [
        "Headaches that are new or getting worse",
        "Headaches that are worse in the morning",
        "Feeling or being sick",
        "Seizures (fits)",
        "Changes to your eyesight",
        "Feeling very sleepy or confused",
        "Weakness on one side of the body",
        "Problems with speech or balance",
        "Changes in personality or behaviour",
      ],
      after: "Tell your specialists; you do not need to wait for a check-up. Call 999 for a sudden, extremely painful headache or a first seizure.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_MAL_SYMPTOMS, MAC_SYMPTOMS, CRUK_SYMPTOMS, NHS_BENIGN, NHS_BT, BTC_SEIZURES, NHS_MAL_TREAT, CRUK_COPING],
    quiz: {
      question: "Is a headache usually the only symptom of a brain tumour?",
      options: [{ text: "No, it is unusual for it to be the only symptom", right: true }, { text: "Yes, it is usually the only one" }, { text: "Brain tumours never cause headaches" }],
      why: "It is unusual for a headache to be the only symptom.",
    },
  },
  {
    id: "bt-treatments",
    kicker: "Treatment",
    question: "What happens with surgery, radiotherapy and chemotherapy?",
    hook: "A specialist team plans treatment around the tumour's type, grade and position. Many people have more than one treatment.",
    short: "Treatment is planned by a team of specialists and depends on the tumour's size, position, type, grade and biomarkers. Surgery is often the main treatment, and radiotherapy or chemotherapy may follow, or be used instead. Medicines can also help control seizures, swelling and pain, and supportive care helps with symptoms at any stage.",
    sections: [
      {
        heading: "A plan made by a team",
        paragraphs: [
          "People with brain tumours are treated in specialist hospitals, and you may have to travel a long way to your nearest one. In most hospitals, a team of specialists meets to plan your treatment.",
          "Your treatment depends on the size and position of the tumour, its type and grade, any biomarkers, and the symptoms you have. You may have a combination of treatments.",
          "If a tumour is slow growing and not causing problems, your doctor may suggest active monitoring, sometimes called watch and wait. You have regular scans, and treatment starts if it is needed.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Surgery is often the main treatment. It can remove all of the tumour, or as much as is safe and possible, or take a sample for testing, which is called a biopsy.",
          "To remove part or all of the tumour, you have an operation called a craniotomy. A small piece of skull is cut out so the surgeon can remove the tumour, and then fixed back in place.",
          "Afterwards you may have a headache, and your face and eyes may be swollen and bruised for a few days. Staples or stitches are usually removed after about 7 to 10 days.",
        ],
      },
      {
        heading: "Radiotherapy",
        paragraphs: [
          "Radiotherapy uses high-energy rays to destroy tumour cells, while doing as little harm as possible to normal cells. It may be your main treatment, or you may have it after surgery to reduce the risk of the tumour coming back.",
          "It is usually given as short daily treatments, Monday to Friday, for 2 to 6 weeks. You may wear a light-weight mask, moulded to fit your face, to help you stay still in the right position.",
          "Radiotherapy to the brain can cause extreme tiredness 4 to 8 weeks after treatment. It usually gradually gets better over a few weeks.",
        ],
      },
      {
        heading: "Chemotherapy",
        paragraphs: [
          "Chemotherapy uses anti-cancer drugs to destroy cancer cells. It may be given at the same time as radiotherapy, after radiotherapy or surgery, or as your main treatment.",
          "The main drugs used are temozolomide, lomustine, procarbazine and vincristine. Some are capsules you usually take at home, in cycles with a rest period of a few weeks.",
          "Chemotherapy can weaken your immune system, so you're more likely to get infections. Call your care team now if you have a high temperature or other signs of an infection. Call NHS 111 if you're not sure how to contact your care team.",
        ],
      },
      {
        heading: "Treatment for symptoms",
        paragraphs: [
          "As well as treatments to reduce the size of the tumour, you might be offered medicines to help control seizures, reduce swelling inside your brain, and control any pain.",
          "Sometimes a brain tumour cannot be removed or controlled any more. You can still have treatment for any symptoms, with supportive care from a specialist team who are experts at managing symptoms. This is sometimes called palliative care.",
          "You can have palliative care at any stage of an illness. It can help make you more comfortable, even when treatment is not aimed at curing the tumour.",
        ],
      },
    ],
    helps: [
      "Ask questions about anything you do not understand or feel worried about.",
      "Ask your specialist doctor or nurse about the risks, side effects and any late effects of your treatment.",
      "If you smoke, try to stop or cut down before surgery; your GP can give you advice and support.",
      "Talk to your doctor before surgery if you take aspirin, clopidogrel or ibuprofen.",
      "Call your care team now if you have a high temperature or other signs of infection during chemotherapy.",
      "Tell your radiotherapy team straight away if your side effects get worse during or after treatment.",
    ],
    tryThisWeek: [
      "Write down your questions.",
      "Ask about risks and late effects.",
      "Know when to call your care team.",
    ],
    ask: "What is the aim of my treatment, and what side effects or late effects should I expect?",
    interactive: {
      kind: "flip-cards",
      title: "The main treatments",
      intro: "Turn a card to see what each treatment does.",
      cards: [
        { id: "surgery", front: "Surgery", when: "Often the main treatment", back: "Removes all of the tumour, or as much as is safe and possible, or takes a sample (a biopsy)." },
        { id: "radiotherapy", front: "Radiotherapy", when: "Usually daily, for 2 to 6 weeks", back: "High-energy rays destroy tumour cells while doing as little harm as possible to normal cells." },
        { id: "chemotherapy", front: "Chemotherapy", when: "With or after radiotherapy, or alone", back: "Anti-cancer drugs, some taken as capsules at home in cycles. Call your care team now for a high temperature." },
        { id: "monitoring", front: "Active monitoring", when: "Slow-growing tumours, few symptoms", back: "Regular scans check for growth or changes, and treatment starts if it is needed." },
        { id: "symptoms", front: "Medicines for symptoms", when: "Before, during or after treatment", back: "Medicines can help control seizures, reduce swelling inside the brain and control pain." },
      ],
    },
    sources: [MAC_TREAT, NHS_MAL_TREAT, MAC_SURGERY, MAC_RADIO, MAC_CHEMO, NHS_CHEMO, NHS_BENIGN, CRUK_CONTROL],
    quiz: {
      question: "During chemotherapy, what should you do if you get a high temperature?",
      options: [{ text: "Call your care team now", right: true }, { text: "Wait to see if it passes" }, { text: "Mention it at your next appointment" }],
      why: "Call your care team now if you have a high temperature or other signs of an infection.",
    },
  },
  {
    id: "bt-follow-up",
    kicker: "Follow-up",
    question: "What happens at scans and follow-up appointments?",
    hook: "Regular check-ups and MRI scans keep an eye on things after treatment. Waiting for results can be hard, and support is there.",
    short: "After treatment you have regular follow-up appointments and MRI scans, which usually become less frequent over time. Scan results should take 1 to 2 weeks, and anxiety while waiting is common. If you notice new symptoms between check-ups, do not wait: contact your doctor or specialist nurse.",
    sections: [
      {
        heading: "Why follow-up matters",
        paragraphs: [
          "After treatment you usually have follow-up appointments to check how you are and see whether you have any problems or worries. They are a good time to raise concerns and ask questions.",
          "How often you have them depends on your tumour type, the treatment you had, your side effects, and whether the tumour was low grade or high grade.",
          "At first, you are likely to see your doctor and nurse every few weeks. The appointments gradually become less frequent if you don't have any problems.",
        ],
      },
      {
        heading: "MRI scans",
        paragraphs: [
          "You usually have regular MRI scans after your treatment finishes. They can help to find whether the brain tumour has come back or started to grow again.",
          "An MRI scan uses magnetism to make a detailed picture of the brain, and does not use any radiation. It takes about 30 to 60 minutes, and you need to lie very still on a bed inside a tube.",
          "The scan is noisy, so you will be given earplugs or headphones. If you worry about feeling claustrophobic, tell the staff, who can help you feel as comfortable as possible.",
        ],
      },
      {
        heading: "Active monitoring",
        paragraphs: [
          "Some people with a low-grade tumour and few or no symptoms have active monitoring instead of treatment straight away. You have regular MRI scans, then usually clinic appointments to discuss the results.",
          "Your doctor will discuss starting treatment if your scan shows the tumour is growing, or you develop new symptoms. Some people may just be sent a letter with the results.",
        ],
      },
      {
        heading: "Waiting for results",
        paragraphs: [
          "Scan results should take 1 to 2 weeks, but it can help to ask how long you should expect to wait. Your doctors may first need to discuss your scan with other members of the team.",
          "Feeling anxious about being in the scanner, or about waiting for the results, is often called scanxiety. Talk to your treatment team about any feelings of uncertainty; your specialist nurse can give you support and advice on coping.",
          "It is normal to worry about your health when your treatment is over, and less frequent appointments can make you feel on your own. Telling someone close to you how you feel can mean your worries don't seem so overwhelming.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "If you notice any new symptoms between check-ups, do not wait for your next appointment. Contact your doctor or specialist nurse for advice.",
          "After a non-cancerous tumour there is a small chance it could come back, so you'll have regular check-ups and scans for at least a few years after treatment.",
        ],
      },
    ],
    helps: [
      "Use your follow-up appointments to raise any concerns and ask questions.",
      "Tell the scanning staff if you are worried about feeling claustrophobic.",
      "Ask how long you should expect to wait for your scan results.",
      "Talk to your treatment team or specialist nurse about feelings of uncertainty.",
      "Contact your doctor or specialist nurse about any new symptoms between check-ups.",
    ],
    tryThisWeek: [
      "Write questions for your check-up.",
      "Ask when your results will come.",
      "Report new symptoms between visits.",
    ],
    ask: "How often will I have scans and check-ups, and how will I get my results?",
    interactive: {
      kind: "timeline",
      title: "Around a follow-up scan",
      steps: [
        { id: "before", when: "Before the scan", title: "Getting ready", points: ["Take off anything metal, such as jewellery or hair clips.", "Tell the staff if you are worried about small spaces."] },
        { id: "during", when: "During the scan", title: "Lie very still", points: ["A brain MRI takes about 30 to 60 minutes.", "The scan is noisy, so you get earplugs or headphones."] },
        { id: "waiting", when: "Afterwards", title: "Waiting for results", points: ["Results should take 1 to 2 weeks; ask how long to expect.", "Talk to your specialist nurse about feelings of uncertainty."] },
        { id: "results", when: "Results", title: "Clinic or letter", points: ["You usually discuss the results at a clinic appointment.", "Some people are just sent a letter with the results."] },
        { id: "between", when: "Between scans", title: "Don't wait", points: ["Contact your doctor or nurse about any new symptoms.", "Appointments become less frequent if there are no problems."] },
      ],
    },
    sources: [CRUK_FOLLOW, MAC_BT, MAC_TREAT, BTC_SCANS, NHS_BENIGN],
    quiz: {
      question: "What should you do if you notice new symptoms between check-ups?",
      options: [{ text: "Contact your doctor or specialist nurse", right: true }, { text: "Wait for your next scan" }, { text: "Ignore them unless they last a year" }],
      why: "If you notice any new symptoms between check-ups, do not wait for your next appointment.",
    },
  },
  {
    id: "bt-rehab",
    kicker: "Recovery",
    question: "What does rehabilitation after a brain tumour involve?",
    hook: "Repeating exercises and activities can help the brain re-learn. A team of therapists can help with movement, speech, everyday tasks and thinking.",
    short: "Rehabilitation is the process of recovering from, or adjusting to, changes caused by a brain tumour and its treatment. Physiotherapists, occupational therapists, speech and language therapists and neuropsychologists can all help. Ask your team or GP for a referral, and expect progress to be slow and gradual.",
    sections: [
      {
        heading: "Recovering or adjusting",
        paragraphs: [
          "Rehabilitation is the process of recovering from, or adjusting to, changes caused by a brain tumour and its treatment. It can help you get back to the things you want to do and improve your quality of life.",
          "It involves specific exercises or activities. Repeating these over time can help your brain re-learn, or prompt another area of your brain to take over some of the functions that were affected.",
          "You may or may not get completely back to how you were before your brain tumour. But help is available for you.",
        ],
      },
      {
        heading: "What it can help with",
        paragraphs: [
          "Rehabilitation can help with physical effects, such as weakness, difficulty walking, problems with balance, speech or swallowing, and severe tiredness.",
          "It can also help with thinking skills, such as memory, concentration and planning, and with emotional changes, such as mood swings, low mood or anxiety.",
        ],
      },
      {
        heading: "The people who can help",
        paragraphs: [
          "A physiotherapist can help you maintain or improve your strength, balance and coordination. They can give you exercises, advice and equipment to help.",
          "An occupational therapist will help you get back to everyday tasks, such as washing, dressing, shopping or managing your money. A speech and language therapist can help if you have problems speaking, communicating or swallowing.",
          "A neuropsychologist tests how the tumour has affected your thinking and helps you deal with the changes. A counsellor or psychologist can help with difficult feelings.",
        ],
      },
      {
        heading: "Getting a referral",
        paragraphs: [
          "Your doctor or nurse may refer you to a neurological rehabilitation service, sometimes called neuro-rehab. Don't be afraid to ask for this if it is not arranged automatically.",
          "You can also ask your GP to refer you to local community and specialist services. Rehabilitation services vary across the UK, both in availability and in waiting times.",
          "Having someone with you when you speak to your team can be very helpful. They can keep notes, help you understand the advice and speak up for you if needed.",
        ],
      },
      {
        heading: "A slow and gradual process",
        paragraphs: [
          "Improvement can be a slow and gradual process, and every rehabilitation journey is different. Give yourself time, and things will gradually improve.",
          "Set yourself realistic goals, note your progress and celebrate the small gains. Try to fit your rehabilitation exercises into your daily routine.",
          "Fatigue is a natural response to your situation. It doesn't mean you are failing or not trying hard enough.",
        ],
      },
    ],
    helps: [
      "Ask your medical team or GP whether rehabilitation could help you.",
      "Ask for a referral to a physiotherapist, occupational therapist or speech and language therapist.",
      "Take someone with you to appointments to keep notes and help you understand advice.",
      "Set yourself realistic goals and celebrate the small gains you achieve.",
      "Build your rehabilitation exercises into your daily routine.",
      "Ask your local council for a needs assessment to see if extra care or equipment could help.",
    ],
    tryThisWeek: [
      "Ask about rehabilitation.",
      "Set one realistic goal.",
      "Fit exercises into your routine.",
    ],
    ask: "Can I be referred for rehabilitation, and which therapists could help me?",
    interactive: {
      kind: "flip-cards",
      title: "Your rehabilitation team",
      intro: "Turn a card to see how each professional can help.",
      cards: [
        { id: "physio", front: "Physiotherapist", when: "Movement, strength and balance", back: "Can help you maintain or improve strength, balance and coordination, with exercises, advice and equipment." },
        { id: "ot", front: "Occupational therapist", when: "Everyday tasks", back: "Helps you get back to tasks such as washing, dressing, shopping or managing money, and can provide equipment." },
        { id: "slt", front: "Speech and language therapist", when: "Speaking and swallowing", back: "Can help if you have problems speaking or communicating clearly, or with eating, drinking or swallowing." },
        { id: "neuropsychologist", front: "Neuropsychologist", when: "Thinking and behaviour", back: "Tests how the tumour has affected your thinking, and helps you deal with the changes." },
        { id: "dietitian", front: "Dietitian", when: "Eating and weight", back: "Can support you with difficulties eating or drinking, or with weight loss or gain." },
      ],
    },
    sources: [BTC_REHAB, MAC_COPING, CRUK_COPING],
    quiz: {
      question: "How can rehabilitation exercises help your brain?",
      options: [{ text: "By helping it re-learn, or letting another area take over", right: true }, { text: "By growing back the tissue that was removed" }, { text: "By stopping every side effect at once" }],
      why: "Repeating these over time can help your brain re-learn, or prompt another area of your brain to take over some of the functions that were affected.",
    },
  },
  {
    id: "bt-seizures",
    kicker: "Seizures",
    question: "What should I do if I have a seizure?",
    hook: "Seizures are a common symptom of brain tumours. Knowing what helps, and when to call 999, keeps you and the people around you safer.",
    short: "Seizures are a common symptom of brain tumours, and anti-epileptic medicines can help control them. Take them exactly as prescribed and never stop them suddenly. Call 999 for a first seizure, one lasting longer than 5 minutes or longer than usual, or if someone does not recover between seizures.",
    sections: [
      {
        heading: "Why seizures happen",
        paragraphs: [
          "A seizure happens when there's a burst of abnormal electrical activity that disturbs the way the brain normally works. Seizures are a common symptom of brain tumours.",
          "You're more likely to have a seizure if you have a slow-growing, low grade tumour. You may only have seizures for a short time, such as before treatment or because of swelling after surgery.",
        ],
      },
      {
        heading: "What a seizure can be like",
        paragraphs: [
          "Not every seizure involves falling and jerking. With some, you may go blank and stop responding to people around you for seconds or minutes, or notice odd smells and sensations.",
          "Other seizures make your body stiffen and jerk or twitch, or you may fall over. Afterwards you may feel tired and sometimes confused for a short while, so try to rest and give yourself time to recover.",
        ],
      },
      {
        heading: "Medicines and staying safe",
        paragraphs: [
          "If you have had seizures, your specialist doctor will usually prescribe anti-epileptic drugs, also called anti-convulsants. It can sometimes take a while to get the right drug or dose.",
          "Take them exactly as your doctor has prescribed, and don't suddenly stop taking them. If you get a skin rash when you start taking them, contact the hospital straight away.",
          "Your team may suggest precautions, such as not locking the bathroom door during a bath, taking showers instead of baths, and telling friends or family your plans if you are going out.",
        ],
      },
      {
        heading: "When to call 999",
        paragraphs: [
          "Call 999 if someone is having a seizure for the first time, or it lasts longer than is usual for them, or longer than 5 minutes if you do not know how long their seizures usually last.",
          "Call 999 too if they do not recover as usual afterwards, have another seizure without recovering in between, have had 3 or more seizures in 24 hours, or are seriously injured during a seizure.",
          "People with epilepsy usually have a care plan that says what to do, such as giving emergency medicine and when to call 999.",
        ],
      },
      {
        heading: "Helping someone during a seizure",
        paragraphs: [
          "Be calmly reassuring, time the seizure and stay with them until they have fully recovered. Protect them from injury by removing harmful objects nearby, and cushion their head.",
          "Don't restrain them, put anything in their mouth or give them anything to eat or drink until they have fully recovered. Once the seizure has finished, put them in the recovery position.",
          "If you have a seizure, you are required by law to stop driving for a period of time, and the DVLA needs to be told.",
        ],
      },
    ],
    helps: [
      "Take your anti-epileptic medicine exactly as prescribed, and don't stop it suddenly.",
      "Contact the hospital straight away if you get a skin rash after starting an anti-convulsant.",
      "Keep a diary to help you spot triggers, such as tiredness, stress or alcohol.",
      "Make sure your family and friends know what to do if you have a seizure.",
      "Take showers instead of baths if you can, and don't lock the bathroom door.",
      "Tell your medical team about any change in your seizures or how often they happen.",
    ],
    tryThisWeek: [
      "Take medicine exactly as prescribed.",
      "Show family what to do in a seizure.",
      "Start a seizure trigger diary.",
    ],
    ask: "What should my family do if I have a seizure, and when should they call 999?",
    interactive: {
      kind: "scenarios",
      title: "When a seizure happens",
      scenarios: [
        {
          id: "five-minutes",
          situation: "Your partner's seizure has gone on for more than 5 minutes.",
          options: [{ text: "Call 999", best: true }, { text: "Wait for it to stop on its own" }],
          why: "Call 999 if a seizure lasts longer than is usual for them, or longer than 5 minutes if you do not know how long their seizures usually last.",
        },
        {
          id: "jerking",
          situation: "Someone falls to the floor, stiffens and starts to jerk.",
          options: [{ text: "Move harmful objects, cushion their head and time it", best: true }, { text: "Hold them still" }, { text: "Put something in their mouth" }],
          why: "Protect them from injury by removing harmful objects nearby, and cushion their head. Don't restrain them or put anything in their mouth.",
        },
        {
          id: "rash",
          situation: "A few days after starting a new anti-convulsant, you notice a skin rash.",
          options: [{ text: "Contact the hospital straight away", best: true }, { text: "Wait until your next appointment" }],
          why: "If you get a skin rash when you start taking them, contact the hospital straight away.",
        },
        {
          id: "afterwards",
          situation: "The seizure has stopped and they are drowsy and thirsty.",
          options: [{ text: "Put them in the recovery position and stay with them", best: true }, { text: "Give them a drink straight away" }],
          why: "Don't give them anything to eat or drink until they have fully recovered. Once the seizure has finished, put them in the recovery position.",
        },
      ],
    },
    sources: [BTC_SEIZURES, BTC_SEIZURES_COPE, MAC_SYMPTOMS, CRUK_CONTROL, NHS_EPILEPSY, NHS_MAL_SYMPTOMS],
    quiz: {
      question: "When should you call 999 for a seizure?",
      options: [{ text: "If it lasts longer than 5 minutes, or longer than usual", right: true }, { text: "Only if it lasts an hour" }, { text: "Never, seizures always stop" }],
      why: "Call 999 if someone is having a seizure for the first time, or it lasts longer than is usual for them, or longer than 5 minutes if you do not know how long their seizures usually last.",
    },
  },
  {
    id: "bt-thinking",
    kicker: "Thinking",
    question: "Why are my memory and concentration different now?",
    hook: "The tumour, its treatment, medicines and tiredness can all affect how you think. Some changes fade as you recover, and there are ways to cope.",
    short: "A brain tumour and its treatment can affect memory, concentration and thinking, but not everyone has these changes. Some come from something temporary, such as swelling after treatment, and often fade as you recover. Tell your team about any changes; diaries, reminders, routines and doing one thing at a time can help.",
    sections: [
      {
        heading: "A common change",
        paragraphs: [
          "A brain tumour and its treatment can affect memory, concentration and the ability to think clearly. You might find it hard to concentrate, remember things or think of the right word.",
          "Not everybody has these difficulties. For some people they are very mild and only come to light with complex tasks or on returning to work, while for others they make some parts of daily life difficult.",
        ],
      },
      {
        heading: "What can cause it",
        paragraphs: [
          "Changes can come from where the tumour is in the brain. Memory loss is more likely, but not definite, if the tumour is in the frontal or temporal lobes.",
          "Surgery can cause some temporary swelling, so it's normal to have memory loss after a biopsy or removal of a tumour. Chemotherapy and radiotherapy can also affect memory and concentration.",
          "Some medicines can play a part, such as medicines to control fits and steroids. Fatigue, depression, anxiety and seizures can all make thinking harder too.",
        ],
      },
      {
        heading: "Will it get better?",
        paragraphs: [
          "This usually depends on the cause. If it is the result of something temporary, such as swelling around the brain after treatment, the effects often fade as you recover.",
          "If the changes are caused by permanent damage to the brain, the effects may not go away. Your doctor will explain more about your situation.",
          "Some short-term memory loss, or being forgetful, is common after radiotherapy, and it can sometimes get worse in the years after treatment. Your team can talk to you about ways to help you cope.",
        ],
      },
      {
        heading: "Everyday ways to cope",
        paragraphs: [
          "Use a diary, mobile phone or calendar to record and check your plans, pill boxes to organise your medicines, and checklists and alarms to organise your tasks.",
          "Plan your day and make a to do list. Break tasks into small chunks, do one thing at a time, and keep things like your keys in the same place.",
          "It's harder to think when your surroundings are noisy or busy, so try to remove background noise. Following a daily routine and getting enough sleep can help.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Always tell your healthcare team if you notice changes to your thinking. They may arrange for you to see an occupational therapist or neuropsychologist.",
          "A neuropsychological assessment uses puzzles and tasks to understand your thinking, and can take 2 or more hours. The tests are non-invasive.",
          "If you have difficulty thinking clearly or making decisions, you may be able to have therapy to help, called cognitive re-training.",
        ],
      },
    ],
    helps: [
      "Tell your healthcare team if you notice changes to your thinking or memory.",
      "Use a diary, phone calendar, checklists and alarms to keep track of plans.",
      "Use a pill box to organise your medicines.",
      "Do one thing at a time, in small chunks, with breaks in between.",
      "If you think a medicine is making things worse, tell your doctor or nurse; never stop it suddenly.",
      "Ask a member of your team to refer you to a neuropsychologist for an assessment.",
    ],
    tryThisWeek: [
      "Tell your team about changes.",
      "Set phone reminders for plans.",
      "Do one task at a time.",
    ],
    ask: "Could my medicines or tiredness be adding to my memory problems, and can I see a neuropsychologist?",
    interactive: {
      kind: "risk-check",
      title: "What could be adding to it?",
      intro: "Tick any that apply. Many of these can be eased, so mention them to your team.",
      items: [
        { id: "location", label: "Where the tumour is", note: "Memory loss is more likely, but not definite, if the tumour is in the frontal or temporal lobes.", changeable: false },
        { id: "swelling", label: "Recent surgery or treatment", note: "Temporary swelling after treatment can affect memory. The effects often fade as you recover.", changeable: true },
        { id: "medicines", label: "Steroids or anti-epileptic drugs", note: "Some medicines can affect thinking. Tell your doctor or nurse, and never stop a medicine suddenly.", changeable: true },
        { id: "fatigue", label: "Feeling very tired", note: "Fatigue can affect memory, concentration and planning, as it drains the energy they need.", changeable: true },
        { id: "mood", label: "Low mood or anxiety", note: "Depression or anxiety can affect motivation, concentration and memory. Your team can help address these.", changeable: true },
        { id: "noise", label: "A noisy, busy home", note: "It's harder to think when your surroundings are noisy or busy. Try removing background noise.", changeable: true },
        { id: "alcohol", label: "Drinking alcohol", note: "Alcohol can slow thinking and cause memory problems, so it is advisable to avoid it.", changeable: true },
      ],
    },
    sources: [BTC_COGNITION, BTC_COGNITION_COPE, BTC_MEMORY, BTC_MEMORY_COPE, MAC_COPING, CRUK_CONTROL, MAC_RADIO],
    quiz: {
      question: "What can help if your memory is a problem?",
      options: [{ text: "A diary, phone calendar, checklists and alarms", right: true }, { text: "Trying to keep everything in your head" }, { text: "Doing several things at once" }],
      why: "Use a diary, mobile phone or calendar to record and check your plans, pill boxes to organise your medicines, and checklists and alarms to organise your tasks.",
    },
  },
  {
    id: "bt-steroids",
    kicker: "Medicines",
    question: "Why am I on steroids, and what side effects should I expect?",
    hook: "Steroids such as dexamethasone reduce swelling around the tumour. They need to be taken exactly as prescribed, and never stopped suddenly.",
    short: "Steroids, most often dexamethasone, reduce swelling around a brain tumour and can ease headaches and sickness. Take them exactly as prescribed, usually in the morning with food, carry your steroid card, and never stop them suddenly. Side effects such as indigestion, poor sleep, mood changes and raised blood sugar are common and go away as the dose is reduced.",
    sections: [
      {
        heading: "Why steroids are used",
        paragraphs: [
          "Steroids are often prescribed to reduce swelling around a brain tumour. They can make you feel better by improving symptoms caused by raised pressure inside the skull, such as headaches or feeling sick.",
          "The most commonly used steroid is dexamethasone. You may have steroids before, during and after your main treatment. Surgery and radiotherapy can also increase the swelling in the brain at first.",
        ],
      },
      {
        heading: "Taking them safely",
        paragraphs: [
          "Take your steroids exactly as your nurse or doctor has explained. Dexamethasone is usually taken once a day, in the morning with or straight after your breakfast.",
          "If you take it 2 or 3 times a day, take your last dose before 6pm. It will be less likely to affect your sleep.",
          "Your pharmacist or nurse will give you a steroid card. Always carry it, so that in an emergency a doctor or nurse will know you are taking steroids. Ask your pharmacist or doctor whether you also need a red steroid emergency card.",
        ],
      },
      {
        heading: "Never stop suddenly",
        paragraphs: [
          "Never stop taking your steroids suddenly, as this can make you ill. Your doctor will give you advice about slowly reducing the dose when it is time to stop.",
          "Stopping suddenly can cause severe tiredness, weakness, body aches and joint pain. Your doctor will probably want to reduce your dose gradually over several weeks.",
        ],
      },
      {
        heading: "Common side effects",
        paragraphs: [
          "Steroids can cause indigestion, so take your tablets with food. They can increase your appetite and lead to weight gain, and they can make it harder to sleep.",
          "They can make you feel restless or agitated, and affect your mood. They can also raise your blood sugar, so tell your nurse or doctor if you are always thirsty or peeing more often than usual.",
          "With high doses over a long time, your muscles may get weaker, especially at the tops of your legs, so it is important to do some regular, gentle exercise. Side effects go away over time as your steroids are reduced.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Call a doctor or 111 now if you get signs of an infection, such as a high temperature, chills, a very sore throat or a wound that will not heal.",
          "Talk to your doctor or call 111 if you are feeling high, depressed or anxious, or feel confused and are forgetting things.",
          "Call 999 or go to A&E if you have thoughts about harming yourself or ending your life, or you are vomiting blood. Do not drive to A&E.",
        ],
      },
    ],
    helps: [
      "Take your steroids exactly as prescribed, in the morning with food.",
      "Always carry your steroid card.",
      "Never stop taking steroids suddenly; your doctor will reduce the dose slowly.",
      "Tell your nurse or doctor if you are always thirsty or peeing more often than usual.",
      "Do some regular, gentle exercise to help keep your leg muscles strong.",
      "Call a doctor or 111 now if you get signs of an infection.",
    ],
    tryThisWeek: [
      "Take your dose in the morning.",
      "Keep your steroid card with you.",
      "Do some gentle exercise.",
    ],
    ask: "How long will I be on steroids, and how will my dose be reduced?",
    interactive: {
      kind: "signs",
      title: "Steroid side effects to report",
      intro: "Tick any you have noticed, so you can tell your doctor or nurse.",
      signs: [
        "Indigestion or tummy pain",
        "Trouble sleeping",
        "Feeling restless or agitated",
        "Always thirsty, or peeing more often",
        "Mood changes or feeling low",
        "Swollen feet and legs",
        "Weak muscles at the tops of the legs",
        "A high temperature or other signs of infection",
      ],
      after: "Tell your doctor or nurse. Call a doctor or 111 now for signs of infection, and 999 for thoughts of harming yourself.",
      copyHeading: "Side effects I have noticed on steroids",
    },
    sources: [MAC_STEROIDS, NHS_DEX_SE, NHS_DEX_HOW, NHS_DEX_ABOUT, CRUK_CONTROL],
    quiz: {
      question: "What should happen when it is time to stop your steroids?",
      options: [{ text: "Your doctor reduces the dose slowly", right: true }, { text: "Stop them all on the same day" }, { text: "Halve the dose yourself" }],
      why: "Never stop taking your steroids suddenly, as this can make you ill.",
    },
  },
  {
    id: "bt-driving",
    kicker: "Driving",
    question: "Can I still drive, and do I need to tell the DVLA?",
    hook: "Most people with a brain tumour cannot drive for a while. How long depends on the tumour, the treatment and any seizures.",
    short: "The government's page says you need to tell DVLA if you have a brain tumour, and speak to your doctor, who might tell you to surrender your licence. Most people will not be allowed to drive for a period of time, depending on the tumour, the treatment, any seizures and the type of licence. Surrendering your licence makes it easier to reapply later.",
    sections: [
      {
        heading: "Telling DVLA",
        paragraphs: [
          "The government's page on brain tumours and driving says: you need to tell DVLA if you have a brain tumour. You also need to speak to your doctor, who might tell you to surrender your licence.",
          "You can be fined up to £1,000 if you do not tell DVLA about a medical condition that affects your driving. You may be prosecuted if you're involved in an accident as a result.",
          "For a car or motorcycle licence, you can report your condition online, or fill in form BT1 and send it to DVLA. For a bus, coach or lorry licence, fill in form BT1V. In Northern Ireland, you contact the DVA.",
        ],
      },
      {
        heading: "Why most people stop for a time",
        paragraphs: [
          "Following diagnosis and treatment for a brain tumour, most people will not be allowed to drive for a period of time. Advice on driving may vary even between people with the same tumour type.",
          "Whether you have to stop, and for how long, depends on the type and grade of your tumour, how it was diagnosed, your treatment, your symptoms and any seizures, and the type of licence you have.",
          "The rules for lorry and bus licences are generally much stricter. Your specialist doctor and nurse can give you more information about your fitness to drive.",
        ],
      },
      {
        heading: "How long it can be",
        paragraphs: [
          "DVLA's guidance for doctors groups brain tumours by their risk to driving. For car and motorcycle licences, very low risk tumours mean 0 to 6 months off driving, low risk tumours 6 months to one year, and high risk tumours 2 years.",
          "Seizures bring their own rules. If you have a seizure, you will need to stop driving for some time, usually around 6 to 12 months from the date of your last seizure, but it might be longer.",
          "These are only a general guide. Your doctor or clinical nurse specialist can explain how the rules apply in your situation.",
        ],
      },
      {
        heading: "Surrendering and getting your licence back",
        paragraphs: [
          "You can voluntarily surrender your licence if your doctor tells you to stop driving for 3 months or more. Surrendering your licence makes it easier to reapply for a new one in the future.",
          "DVLA's letter will tell you how long you need to wait. You can reapply up to 8 weeks before the end of this period, after checking with your doctor that you can meet the medical standards for driving.",
          "When you get your licence back, it may only be valid for a short period. You do not need to resit your driving test.",
        ],
      },
      {
        heading: "Coping without the car",
        paragraphs: [
          "A lot of people feel upset when they find out they can't drive, and losing a licence is often seen as a loss of independence. You might need some time to adjust.",
          "Ask friends and family whether they can take you to appointments, or check your local public transport. Many areas have community transport services, and if you take medicine to control seizures you may be eligible for a free bus pass.",
          "If you are working, you may be able to apply for an Access to Work grant to help you get to and from work if you're unable to drive or use public transport.",
        ],
      },
    ],
    helps: [
      "Tell DVLA that you have a brain tumour, or DVA if you live in Northern Ireland.",
      "Ask your doctor or nurse how the rules apply to your tumour and treatment.",
      "Ask your doctor whether to surrender your licence; it makes reapplying easier.",
      "Check with your doctor before reapplying, up to 8 weeks before your waiting period ends.",
      "Ask friends, family or community transport to help with journeys to appointments.",
      "Check whether you can get a free bus pass if you take medicine to control seizures.",
    ],
    tryThisWeek: [
      "Tell DVLA about your tumour.",
      "Ask how the rules apply to you.",
      "Line up lifts to appointments.",
    ],
    ask: "How long am I likely to be off driving, and should I surrender my licence?",
    interactive: {
      kind: "scenarios",
      title: "Driving decisions",
      scenarios: [
        {
          id: "diagnosed",
          situation: "You've just been diagnosed and feel well enough to drive.",
          options: [{ text: "Tell DVLA and speak to your doctor", best: true }, { text: "Say nothing while you feel well" }],
          why: "You need to tell DVLA if you have a brain tumour. You also need to speak to your doctor, who might tell you to surrender your licence.",
        },
        {
          id: "six-months",
          situation: "Your doctor tells you to stop driving for 6 months.",
          options: [{ text: "Think about surrendering your licence", best: true }, { text: "Keep it and wait to hear from DVLA" }],
          why: "You can voluntarily surrender your licence if your doctor tells you to stop driving for 3 months or more. It makes it easier to reapply.",
        },
        {
          id: "reapply",
          situation: "Your waiting period ends in about 8 weeks.",
          options: [{ text: "Check with your doctor, then reapply", best: true }, { text: "Start driving when the date arrives without reapplying" }],
          why: "You can reapply up to 8 weeks before the end of this period, after checking with your doctor that you can meet the medical standards for driving.",
        },
        {
          id: "seizure",
          situation: "You have a seizure after getting your licence back.",
          options: [{ text: "Stop driving and tell DVLA", best: true }, { text: "Carry on if it was a small one" }],
          why: "If you have a seizure, you will need to stop driving for some time, usually around 6 to 12 months from the date of your last seizure.",
        },
      ],
    },
    sources: [GOV_BT_DRIVING, MAC_DRIVING, CRUK_DRIVING, BTC_DRIVING, GOV_DVLA_NEURO, GOV_SURRENDER, GOV_REAPPLY],
    quiz: {
      question: "How much can you be fined for not telling DVLA about a condition that affects your driving?",
      options: [{ text: "Up to £1,000", right: true }, { text: "Nothing at all" }, { text: "Up to £50" }],
      why: "You can be fined up to £1,000 if you do not tell DVLA about a medical condition that affects your driving.",
    },
  },
  {
    id: "bt-fatigue",
    kicker: "Energy",
    question: "Why am I so tired, and what helps?",
    hook: "Brain tumour fatigue is not ordinary tiredness, and rest alone does not fix it. Prioritising, planning and pacing can help.",
    short: "Fatigue is a constant feeling of being tired, weak or worn out that rest or sleep does not relieve. The tumour, its treatment, medicines, seizures, worry and poor sleep can all add to it, and many people improve within 6 months to a year after treatment. Tell your team, and try the five Ps: prioritising, planning, pacing, posture and permission.",
    sections: [
      {
        heading: "More than ordinary tiredness",
        paragraphs: [
          "Fatigue is when you constantly feel tired, weak, worn out, slow or heavy. Unlike ordinary tiredness, it can't be relieved by resting or sleeping.",
          "Feeling very tired is common when you are recovering from treatment for a brain tumour. Small everyday tasks, such as brushing your teeth, can wear you out.",
          "Fatigue can't be seen by others, which can make it difficult for them to understand how it is affecting you.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "Your body works harder because of the tumour, using a lot of energy to repair tissue. Surgery, radiotherapy, chemotherapy and medicines such as steroids and anti-epileptic drugs can all cause fatigue too.",
          "Seizures, stress, anxiety, depression, pain, a poor diet and dehydration can add to it. Trying to overcome thinking difficulties can also be extremely tiring.",
        ],
      },
      {
        heading: "How long it lasts",
        paragraphs: [
          "You are likely to feel tired for some time after treatment, and this usually slowly gets better. Many people improve within 6 months to a year after treatment.",
          "After surgery it is normal to feel very tired for several weeks or longer, and for a few people this may continue for 1 year or more. Radiotherapy to the brain can cause extreme tiredness 4 to 8 weeks after treatment.",
        ],
      },
      {
        heading: "The five Ps",
        paragraphs: [
          "Many people find the five Ps helpful: prioritising, planning, pacing, posture and permission. Start by writing a list of the activities you do regularly, in order of importance to you.",
          "Keep a diary of your activities and when you feel tired, to spot patterns, then plan a balance of rest and activity. Break tasks into smaller chunks, and as a guide, rest for ten minutes out of every hour.",
          "Sit down to do a task instead of standing to save energy. And give yourself permission to say no, and to hand jobs to others when you can.",
        ],
      },
      {
        heading: "Other things that help",
        paragraphs: [
          "Gentle exercise, like short walks, can give you more energy. After exercise you should feel energised, not wiped out, so it's important not to overdo it.",
          "Keep to a regular sleep routine, eat little and often, and drink plenty of fluids. Dehydration can lead to tiredness.",
          "Always tell your healthcare team if tiredness is making things difficult. They may do some tests to check for other causes of your tiredness that can be managed.",
        ],
      },
    ],
    helps: [
      "Tell your healthcare team if tiredness is making things difficult.",
      "List your regular activities in order of importance to you.",
      "Keep a diary of your activities and when you feel tired.",
      "Plan short rest breaks through the day.",
      "Do some gentle exercise, such as short walks.",
      "Give yourself permission to say no, and hand jobs to others.",
    ],
    tryThisWeek: [
      "Tell your team how tired you are.",
      "Keep a fatigue diary.",
      "Plan short rest breaks.",
    ],
    ask: "Could anything else be adding to my tiredness, such as my medicines, and can it be checked?",
    interactive: {
      kind: "flip-cards",
      title: "The five Ps",
      intro: "Turn a card to see how each P can help you manage fatigue.",
      cards: [
        { id: "prioritising", front: "Prioritising", when: "Start here", back: "List the activities you do regularly and number them, with one being the most important to you." },
        { id: "planning", front: "Planning", when: "Spot your patterns", back: "Keep a diary of activities and when you feel tired, then plan a balance of rest and activity." },
        { id: "pacing", front: "Pacing", when: "Through the day", back: "Break tasks into smaller chunks. As a guide, rest for ten minutes out of every hour." },
        { id: "posture", front: "Posture", when: "While you do things", back: "Sit down to do a task instead of standing, and keep things where you can easily reach them." },
        { id: "permission", front: "Permission", when: "When it's too much", back: "Give yourself permission to say no, and delegate to others when you can." },
      ],
    },
    sources: [BTC_FATIGUE, BTC_FATIGUE_COPE, MAC_COPING, CRUK_COPING, MAC_RADIO, MAC_SURGERY],
    quiz: {
      question: "Does resting or sleeping relieve brain tumour fatigue?",
      options: [{ text: "No, unlike ordinary tiredness it can't be relieved that way", right: true }, { text: "Yes, one good night's sleep fixes it" }, { text: "Yes, if you stay in bed all day" }],
      why: "Unlike ordinary tiredness, it can't be relieved by resting or sleeping.",
    },
  },
  {
    id: "bt-personality",
    kicker: "Mood",
    question: "Why do I feel or act differently since the tumour?",
    hook: "A brain tumour, swelling, medicines and the shock of diagnosis can all change mood and personality. It is not your fault, and help is there.",
    short: "A brain tumour or its treatment can cause changes such as irritability, mood swings, anxiety or low mood. Swelling, steroids and the emotional impact of the diagnosis can all play a part, and some changes pass as you recover. Tell your doctor or specialist nurse, and if you feel you can't cope, call 111 or Samaritans free on 116 123.",
    sections: [
      {
        heading: "Changes some people notice",
        paragraphs: [
          "A brain tumour or its treatment can change mood, behaviour and personality. Changes can include irritability or aggression, confusion, anxiety, mood swings, depression, or a lack of interest in what you do daily.",
          "Not everyone has these changes. Some people are aware of them and others aren't, so sometimes family or close friends notice them first.",
        ],
      },
      {
        heading: "What causes them",
        paragraphs: [
          "Personality changes are most common when a tumour is in the frontal lobe, which controls your personality and emotions. A pituitary tumour that changes hormone levels can also affect your emotions.",
          "Swelling in the brain, from the tumour or its treatment, can cause changes. Swelling from treatment usually passes gradually as you recover, and personality changes often pass when the swelling does.",
          "Medicines can play a part. Steroids help reduce swelling but can also cause anxiety, irritability and mood swings. The shock of the diagnosis, and coping with side effects, can affect mood too.",
        ],
      },
      {
        heading: "Low mood and depression",
        paragraphs: [
          "It's very natural to have low moods when living with a brain tumour, and for many people these will not become depression. Depression is not a sign of weakness, and it can usually be managed or treated.",
          "When low feelings linger on for weeks or months, or affect your everyday life, they could be a sign of depression. Signs include low mood for 2 or more weeks, losing interest in things you used to enjoy, and changes in sleep or appetite.",
          "It's OK to tell your loved ones and your GP exactly what you're going through. Your GP can suggest treatment, such as talking therapies, counselling or medicines like antidepressants.",
        ],
      },
      {
        heading: "Ways to cope",
        paragraphs: [
          "Speak to your doctor or specialist nurse if you or your family notice changes in your personality. They can do tests to find the cause, and may arrange for you to see a neuropsychologist or psychiatrist.",
          "If you think a medicine is making things worse, tell your doctor or specialist nurse. Never stop taking your medicine without talking to your healthcare team.",
          "If anger is a problem, leave the situation and give yourself at least 30 minutes to calm down. Remind yourself that this is not your fault, but a result of the brain tumour.",
        ],
      },
      {
        heading: "If you feel you can't cope",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online or call 111 and select the mental health option, or ask for an urgent GP appointment.",
          "You can call Samaritans free on 116 123, any time, day or night, to talk about anything that's troubling you.",
          "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. You will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor or specialist nurse if you or your family notice changes in your personality.",
      "Tell your doctor or nurse if you think a medicine is affecting your mood, and never stop it without advice.",
      "Talk to your GP and loved ones if low feelings last for 2 weeks or more.",
      "Ask your GP or consultant about a neuropsychology assessment to find the cause of the changes.",
      "If anger rises, leave the situation and give yourself at least 30 minutes to calm down.",
      "Call Samaritans free on 116 123, any time, day or night.",
    ],
    tryThisWeek: [
      "Mention changes to your nurse.",
      "Tell your GP about low feelings.",
      "Step away for 30 minutes if angry.",
    ],
    ask: "Could my tumour, swelling or medicines be causing these changes, and can I be referred for support?",
    interactive: {
      kind: "signs",
      title: "Changes to mention to your team",
      intro: "Tick any that you, or the people close to you, have noticed.",
      signs: [
        "Irritability or anger",
        "Confusion or forgetfulness",
        "Lack of interest or motivation",
        "Mood swings",
        "Feeling anxious",
        "Low mood for 2 or more weeks",
        "Losing interest in things you used to enjoy",
        "Acting out of character",
      ],
      after: "Tell your doctor or specialist nurse. If you can't cope, call 111 or Samaritans on 116 123. In an emergency, call 999.",
      copyHeading: "Changes we have noticed",
    },
    sources: [BTC_PERSONALITY, BTC_PERSONALITY_COPE, MAC_COPING, CRUK_COPING, CRUK_CONTROL, BTC_DEPRESSION, BTC_DEPRESSION_COPE, NHS_URGENT, SAMARITANS],
    quiz: {
      question: "Where in the brain does a tumour most often cause personality changes?",
      options: [{ text: "The frontal lobe", right: true }, { text: "The spinal cord" }, { text: "It makes no difference" }],
      why: "Personality changes are most common when a tumour is in the frontal lobe, which controls your personality and emotions.",
    },
  },
  {
    id: "bt-carers",
    kicker: "Carers",
    question: "How can I support someone with a brain tumour, and look after myself?",
    hook: "Caring can be physically and emotionally demanding. Your own breaks, health and support matter too.",
    short: "If you give unpaid support to someone who could not manage without you, you are a carer, and looking after yourself matters too. Ask the person how they feel, learn what to do in a seizure, and try to see changes in behaviour as part of the tumour. Tell your GP you are a carer, take daily breaks, and ask your council for a free carer's assessment.",
    sections: [
      {
        heading: "You may be a carer",
        paragraphs: [
          "You may not think of yourself as a carer. But if you give unpaid support to a family member or friend who could not manage without your help, you are classed as a carer.",
          "Caring for someone with a brain tumour can be both physically and emotionally demanding. Every person with a brain tumour has a different experience, so try not to assume how they might be feeling.",
        ],
      },
      {
        heading: "Supporting the person",
        paragraphs: [
          "You can ask them how they are feeling. But remember that they might not want to talk or think about their tumour all of the time.",
          "If their personality has changed, try to recognise it as part of the brain tumour, not the person you love. Minimising distractions and breaking tasks into small steps can help.",
          "If they have seizures, learn what to do to keep them safe. Call an ambulance if you know it's their first seizure, it lasts more than 5 minutes, or they're injured.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Try to have daily breaks from caring of at least an hour or two. Family and friends, a day centre or a sitting service may be able to stay with your loved one.",
          "It's normal to feel anxious, angry or frustrated, and even resentful, and then guilty. Talk to the person you care for, to friends or family, or to your GP, rather than bottling up your emotions.",
          "Let your GP know you are a carer. If you think you might be depressed, talk to your GP as soon as possible.",
        ],
      },
      {
        heading: "Practical help",
        paragraphs: [
          "If you care for someone, you can ask adult social services at your local council for a carer's assessment. It is free, anyone over 18 can ask for one, and it might recommend things like someone to take over so you can have a break.",
          "Your local council can also help with longer breaks, which you can ask about as respite care. A social worker can check that you get all the benefits you are entitled to.",
          "Make a list of useful numbers to contact, especially for out of hours, so you know what to do if anything worries you.",
        ],
      },
      {
        heading: "Where to find support",
        paragraphs: [
          "The Brain Tumour Charity's helpline is 0808 800 0004, and Brainstrust, which has help and support for brain tumour carers, is on 01983 292 405.",
          "The Macmillan Support Line is free on 0808 808 00 00. Marie Curie gives care and support to anyone affected by terminal illness, on 0800 090 2309.",
          "If the person you care for is nearing the end of their life, it can help to talk through options together while they are able. Making decisions can be easier for families if they know what the person would have wanted.",
        ],
      },
    ],
    helps: [
      "Let your GP know that you are a carer.",
      "Ask your local council for a free carer's assessment.",
      "Take a break from caring of at least an hour or two each day.",
      "Make a list of useful numbers, especially for out of hours.",
      "Learn what to do if the person you care for has a seizure.",
      "Talk about how you feel, rather than bottling up your emotions.",
    ],
    tryThisWeek: [
      "Tell your GP you're a carer.",
      "Ask for a carer's assessment.",
      "Take a daily break.",
    ],
    ask: "What support is there for me as a carer, and who do I call out of hours?",
    interactive: {
      kind: "scenarios",
      title: "Moments in caring",
      scenarios: [
        {
          id: "snaps",
          situation: "Your partner snaps at you over something small.",
          options: [{ text: "Stay calm and see it as part of the tumour", best: true }, { text: "Argue back and blame them" }],
          why: "Try to recognise it as part of the brain tumour, not the person you love.",
        },
        {
          id: "no-break",
          situation: "You haven't had any time to yourself for weeks.",
          options: [{ text: "Ask family or a sitting service to cover a couple of hours", best: true }, { text: "Keep going without a break" }],
          why: "Try to have daily breaks from caring of at least an hour or two. Family and friends, a day centre or a sitting service may be able to stay with your loved one.",
        },
        {
          id: "guilt",
          situation: "You feel resentful, then guilty for feeling it.",
          options: [{ text: "Talk to someone about how you feel", best: true }, { text: "Keep it to yourself" }],
          why: "It's normal to feel anxious, angry or frustrated, and even resentful, and then guilty. Talk to someone rather than bottling up your emotions.",
        },
        {
          id: "seizure",
          situation: "They have a seizure that lasts more than 5 minutes.",
          options: [{ text: "Call an ambulance", best: true }, { text: "Wait for it to stop" }],
          why: "Call an ambulance if you know it's their first seizure, it lasts more than 5 minutes, or they're injured.",
        },
      ],
    },
    sources: [BTC_CARER, CRUK_COPING, BTC_PERSONALITY_COPE, BTC_SEIZURES_COPE, NHS_CARER_ASSESS, NHS_MAL_HELP, NHS_BENIGN, CRUK_CANT_CURE],
    quiz: {
      question: "Who can ask for a free carer's assessment?",
      options: [{ text: "Anyone over 18 who cares for someone", right: true }, { text: "Only paid carers" }, { text: "Only people who live with the person" }],
      why: "It is free, anyone over 18 can ask for one, and it might recommend things like someone to take over so you can have a break.",
    },
  },
];
