import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Bursitis page's pieces (content/library-conditions/body-more.ts). Every sentence
// was written from wording checked on 22 October 2026 on the pages listed under each answer's `sources`; nothing is
// added that those pages do not say. Most of it comes from the NHS, Arthritis UK (the charity formerly called Versus
// Arthritis) and the Chartered Society of Physiotherapy, with NICE's Clinical Knowledge Summaries on olecranon
// bursitis and greater trochanteric pain syndrome (the name now preferred for trochanteric bursitis). Exercises are
// described only as the sources describe them. Urgent help is worded as each NHS page words it. General information
// only; it never replaces what a person's own GP, physiotherapist or nurse tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const auEx = (label: string, path: string): LearnSource =>
  au(label, `living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/${path}`);
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/conditions/${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE Clinical Knowledge Summaries: ${label}`, url: `https://cks.nice.org.uk/topics/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_BURS = nhs("Bursitis", "conditions/bursitis/");
const NHS_HIP = nhs("Hip pain in adults", "symptoms/hip-pain/");
const NHS_KNEE = nhs("Knee pain", "symptoms/knee-pain/");
const NHS_SHOULDER = nhs("Shoulder pain", "symptoms/shoulder-pain/");
const NHS_ELBOW = nhs("Elbow and arm pain", "symptoms/elbow-and-arm-pain/");
const NHS_SEPTIC = nhs("Septic arthritis", "conditions/septic-arthritis/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_CELLULITIS = nhs("Cellulitis", "conditions/cellulitis/");
const NHS_ANTIBIOTICS = nhs("Antibiotics", "medicines/antibiotics/");
const NHS_STEROIDS = nhs("Steroids", "medicines/steroids/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_PHYSIO = nhs("Physiotherapy", "tests-and-treatments/physiotherapy/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");

const AU_BURS = au("Bursitis", "understanding-arthritis/conditions/bursitis/");
const AU_HIP = au("Hip pain", "understanding-arthritis/conditions/hip-pain/");
const AU_ELBOW = au("Elbow pain", "understanding-arthritis/conditions/elbow-pain/");
const AU_SHOULDER = au("Shoulder pain", "understanding-arthritis/conditions/shoulder-pain/");
const AU_EX_HIPS = auEx("Exercises for the hips", "exercises-for-healthy-joints/exercises-for-the-hips/");
const AU_EX_KNEES = auEx("Exercises for the knees", "exercises-for-healthy-joints/exercises-for-the-knees/");
const AU_EX_SHOULDERS = auEx("Exercises for the shoulders", "exercises-for-healthy-joints/exercises-for-the-shoulders/");
const AU_START = auEx("Getting started with exercise", "getting-started-with-exercise/");

const CSP_SH_CAUSES = csp("Causes of shoulder pain", "shoulder-pain/causes-shoulder-pain");
const CSP_SH_LIVING = csp("Living with shoulder pain", "shoulder-pain/living-shoulder-pain");
const CSP_SH_VIDEO = csp("Video exercises for shoulder pain", "shoulder-pain/video-exercises-shoulder-pain");

const CKS_OLEC = cks("Olecranon bursitis", "olecranon-bursitis/");
const CKS_OLEC_CAUSES = cks("Olecranon bursitis: what causes it?", "olecranon-bursitis/background-information/causes/");
const CKS_OLEC_PREV = cks("Olecranon bursitis: how common is it?", "olecranon-bursitis/background-information/prevalence/");
const CKS_OLEC_PROG = cks("Olecranon bursitis: what is the prognosis?", "olecranon-bursitis/background-information/prognosis/");
const CKS_OLEC_SUSPECT = cks("Olecranon bursitis: when should I suspect it?", "olecranon-bursitis/diagnosis/when-to-suspect/");
const CKS_OLEC_MGMT = cks("Olecranon bursitis: management", "olecranon-bursitis/management/management/");
const CKS_GTPS = cks("Greater trochanteric pain syndrome", "greater-trochanteric-pain-syndrome/");
const CKS_GTPS_CAUSES = cks("Greater trochanteric pain syndrome: what causes it?", "greater-trochanteric-pain-syndrome/background-information/causes/");
const CKS_GTPS_ASSOC = cks("Greater trochanteric pain syndrome: associated conditions", "greater-trochanteric-pain-syndrome/background-information/associated-conditions/");
const CKS_GTPS_MGMT = cks("Greater trochanteric pain syndrome: management", "greater-trochanteric-pain-syndrome/management/management/");

const GOV_ACCESS = gov("Access to Work", "access-to-work");
const GOV_ADJUSTMENTS = gov("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");

export const bursitisAnswers: LearnArticle[] = [
  {
    id: "burs-what-it-is",
    kicker: "Understanding",
    question: "What is bursitis?",
    hook: "A small cushion of fluid that helps a joint glide. When it becomes inflamed, it swells and hurts.",
    short: "Bursitis is when the fluid-filled sacs that cushion the joints, called bursae, become painful and swollen. It can usually be treated at home and should go away in a few weeks. It can affect any joint, but it is most common in the shoulders, hips, elbows or knees.",
    sections: [
      {
        heading: "A cushion that becomes inflamed",
        paragraphs: [
          "Bursitis is when the fluid-filled sacs that cushion the joints, called bursae, have become painful and swollen. It can usually be treated at home and should go away in a few weeks.",
          "Arthritis UK describes it as a condition that makes the area around a joint or bone painful, red and swollen. It can affect both adults and children, and you can get it in or around any joint.",
        ],
      },
      {
        heading: "What a bursa does",
        paragraphs: [
          "A bursa is a thin pocket of jelly-like fluid that sits between your bones and tendons. When it is working properly, it protects your joints and bones from knocks, falls, bumps and injuries.",
          "Bursae act like lubricants for your bones and the soft tissue that supports them, so they can slide easily over one another. They also help to reduce friction, such as a shoe rubbing your foot.",
        ],
      },
      {
        heading: "What happens in bursitis",
        paragraphs: [
          "You get bursitis when there is inflammation inside a bursa. This increases the amount of fluid in the bursa and makes it expand.",
          "The area around the bursa then becomes painful, swollen and hot, which can stop you using that joint or limb properly. If the bursa is just under your skin, you may be able to see its outline.",
        ],
      },
      {
        heading: "Your body can make new cushions",
        paragraphs: [
          "Your body can also create a new bursa if it thinks a joint or limb needs added protection from friction. For example, if your shoe keeps rubbing the same area, or you regularly lean on the same elbow, your body will create added cushioning there.",
        ],
      },
      {
        heading: "Two kinds: infected or not",
        paragraphs: [
          "NICE's guidance for GPs, writing about bursitis at the elbow, sorts it into two kinds. Non-septic bursitis, the most common, is inflammation without infection, from causes such as injury or overuse. Septic bursitis is an infection, usually caused by bacteria.",
          "At the elbow, two-thirds of cases are non-septic.",
        ],
      },
    ],
    helps: [
      "Rest the joint and avoid activities that put pressure on it.",
      "Gently hold an ice pack wrapped in a tea towel on the area for around 10 minutes at a time.",
      "Take painkillers, such as paracetamol or ibuprofen, to ease any pain.",
      "See a GP if your symptoms have not improved, or are getting worse, after 1 to 2 weeks of treating it yourself.",
    ],
    tryThisWeek: [
      "Rest the joint and ease the pressure.",
      "Try a wrapped ice pack for 10 minutes.",
      "See a GP if no better in 1 to 2 weeks.",
    ],
    ask: "Which bursa is affected, and could anything else be causing the swelling?",
    interactive: {
      kind: "flip-cards",
      title: "Inside a cushioned joint",
      intro: "Turn each card to see what each part does.",
      cards: [
        { id: "bursa", front: "Bursa", when: "A thin pocket of jelly-like fluid", back: "Sits between your bones and tendons, protecting joints and bones from knocks, falls and bumps." },
        { id: "glide", front: "Lubricant", when: "When a bursa works normally", back: "Lets your bones and the soft tissue that supports them slide easily over one another." },
        { id: "friction", front: "Friction", when: "A shoe rubbing your foot", back: "The rubbing is absorbed by the bursae instead of your bones or tendons." },
        { id: "inflamed", front: "Bursitis", when: "When a bursa is inflamed", back: "Fluid builds up and the bursa expands. The area becomes painful, swollen and hot." },
        { id: "new", front: "A new bursa", when: "Where rubbing keeps happening", back: "Your body can add cushioning, with an extra bursa or more fluid in the ones already there." },
      ],
    },
    sources: [NHS_BURS, AU_BURS, CKS_OLEC, CKS_OLEC_PREV],
    quiz: {
      question: "Where is bursitis most common?",
      options: [{ text: "The shoulders, hips, elbows or knees", right: true }, { text: "Only the fingers and toes" }, { text: "Only the spine" }],
      why: "It can affect any joint, but it is most common in the shoulders, hips, elbows or knees.",
    },
  },
  {
    id: "burs-where",
    kicker: "Understanding",
    question: "Where can bursitis happen: hip, shoulder, elbow or knee?",
    hook: "The outside of the hip, the top of the shoulder, the tip of the elbow, the front of the knee. Each has its own cushion, and its own name.",
    short: "Bursitis can affect any joint, but it is most common in the shoulders, hips, elbows or knees. Each place has its own name, such as trochanteric bursitis at the hip or olecranon bursitis at the elbow. Pain on the outside of the hip is now often called greater trochanteric pain syndrome.",
    sections: [
      {
        heading: "Any joint, four common places",
        paragraphs: [
          "Bursitis can affect any joint, but it is most common in the shoulders, hips, elbows or knees.",
          "Arthritis UK adds the feet. The bursae there can become inflamed if you wear high heels or tight shoes, or do too much weight-bearing exercise, such as running or jumping. You can also get inflamed bursae next to large bunions.",
        ],
      },
      {
        heading: "The hip",
        paragraphs: [
          "Trochanteric bursitis is caused by inflammation of the bursa at the top of the thighbone. If you have tenderness over the bony part of your hip, you may have it. The pain may spread down the leg, or seem to come from the hip joint itself.",
          "It often happens in both hips, and usually improves with rest, painkillers and physiotherapy. The NHS lists bursitis as a possible cause of pain that may spread to the thigh and feel worse when moving or lying on your side.",
          "NICE's guidance for GPs now prefers the name greater trochanteric pain syndrome, because the bursae play a smaller role than was thought and inflammation is not always present. It is more common in women, especially those aged 40 to 60.",
        ],
      },
      {
        heading: "The shoulder",
        paragraphs: [
          "Subacromial bursitis causes pain and swelling in the shoulder, and can make it difficult to raise your arm above your head. It is often caused by overuse, or by an injury such as a fall.",
          "The Chartered Society of Physiotherapy says pain from the shoulder's rotator cuff tendons is known by various names, including subacromial shoulder pain, tendinopathy and bursitis, but they all describe the same symptoms.",
        ],
      },
      {
        heading: "The elbow",
        paragraphs: [
          "Olecranon bursitis is when the bursa at the back of the elbow becomes swollen and inflamed. The olecranon is the bony tip you can feel on your elbow, with a bursa between the bone and the skin.",
          "It most commonly happens with pressure or friction over the back of the elbow, such as often leaning your elbows on a chair or table. This is why it is sometimes called student's elbow.",
        ],
      },
      {
        heading: "The knee",
        paragraphs: [
          "The NHS describes knee bursitis as warm and red, with kneeling or bending making the pain and swelling worse.",
          "If you have bursitis around your knees, using a thick foam cushion or knee pads can help reduce the pressure and make kneeling less painful.",
        ],
      },
    ],
    helps: [
      "Try not to sleep on the side that hurts: a pillow behind your back can stop you rolling onto it.",
      "Use a thick foam cushion or knee pads to make kneeling less painful.",
      "With bursitis in your shoulder, place that arm on a pillow in front of you to support it.",
      "Wear comfortable, properly fitted shoes, with protective insoles if your feet are affected.",
      "Avoid direct pressure on a sore elbow, or use protective elbow pads.",
    ],
    tryThisWeek: [
      "Sleep off the side that hurts.",
      "Pad your knees when kneeling.",
      "Keep pressure off a sore elbow.",
    ],
    ask: "Which bursa is affected, and is it bursitis or a tendon problem?",
    interactive: {
      kind: "flip-cards",
      title: "Common places for bursitis",
      intro: "Turn each card to see what the sources say about each one.",
      cards: [
        { id: "hip", front: "Hip", when: "Trochanteric bursitis", back: "Tenderness over the bony part of the hip. Now often called greater trochanteric pain syndrome." },
        { id: "shoulder", front: "Shoulder", when: "Subacromial bursitis", back: "Pain and swelling in the shoulder. It can make it hard to raise your arm above your head." },
        { id: "elbow", front: "Elbow", when: "Olecranon bursitis", back: "Swelling at the bony tip of the elbow, often from leaning on it. Sometimes called student's elbow." },
        { id: "knee", front: "Knee", when: "Bursitis at the knee", back: "Warm and red, with kneeling or bending making the pain and swelling worse." },
        { id: "feet", front: "Feet", when: "The balls of the feet", back: "High heels, tight shoes or too much weight-bearing exercise can inflame the bursae here." },
      ],
    },
    sources: [NHS_BURS, AU_HIP, NHS_HIP, CKS_GTPS, AU_SHOULDER, CSP_SH_CAUSES, AU_ELBOW, NHS_KNEE, AU_BURS, CKS_OLEC_MGMT],
    quiz: {
      question: "What is olecranon bursitis at the elbow sometimes called?",
      options: [{ text: "Student's elbow", right: true }, { text: "Tennis elbow" }, { text: "Frozen shoulder" }],
      why: "This is why it is sometimes called student's elbow.",
    },
  },
  {
    id: "burs-causes",
    kicker: "Understanding",
    question: "Why does bursitis happen?",
    hook: "Kneeling, leaning, a knock or a shoe that rubs. Repeated pressure on one spot is a common start, but not the only one.",
    short: "Bursitis can come from repeated pressure or friction, overuse, or a knock or injury. Jobs and hobbies with repetitive movements, like kneeling or leaning on the elbows, make it more likely. It can also be linked with gout, rheumatoid arthritis or an infection.",
    sections: [
      {
        heading: "Pressure, rubbing and overuse",
        paragraphs: [
          "Jobs and hobbies where you use repetitive movements or activities can make you more likely to get bursitis. Arthritis UK gives carpet fitters who kneel a lot, people who lean on their elbows to work or study, and people who spend a long time on their feet as examples.",
          "NICE's guidance for GPs says a single direct blow to the elbow, or repeated mild injury such as leaning on it, may cause bursitis there. Sports and work with prolonged pressure on the back of the elbow can also cause it.",
        ],
      },
      {
        heading: "Jobs and sports linked with it",
        paragraphs: [
          "At the elbow, it is more common in young and middle-aged men, and in jobs with regular knocks or pressure on the elbow. NICE's guidance for GPs lists gardeners, carpet layers, mechanics, plumbers, roofers, truck drivers, students and people who write a lot.",
          "It is also more common in sports with repetitive throwing, or direct impact on the elbow, such as gymnastics, weightlifting, rugby, football or hockey.",
        ],
      },
      {
        heading: "Other conditions",
        paragraphs: [
          "You can also develop bursitis if you have gout or another condition that causes hard crystals to gather in or around your joints, an injury that keeps coming back, or an infection in or near a joint. An inflammatory condition such as rheumatoid arthritis increases your risk.",
          "Bursitis in the shoulder, hip, knee or ankle commonly happens because of a problem in a tendon. If so, treatment will probably focus on the tendon, which can often make recovery slower.",
        ],
      },
      {
        heading: "At the hip",
        paragraphs: [
          "Trochanteric bursitis is a very common condition, but there is usually no obvious cause. It is sometimes linked to problems with the lower back.",
          "NICE's guidance for GPs says pain on the outside of the hip can come from muscles, tendons or bursae, and that bursitis and tendon problems often exist together. It may also be associated with a difference in leg length.",
        ],
      },
      {
        heading: "When infection is the cause",
        paragraphs: [
          "Infected bursitis usually happens when bacteria get into the bursa, which may follow a penetrating injury. The elbow's bursa is more likely to become infected than others, because it sits just under skin that is prone to minor injuries.",
          "Things that make infection more likely include injury to the elbow, earlier bursa problems, and a weakened immune system, such as from diabetes or steroid treatment.",
        ],
      },
    ],
    helps: [
      "Take regular breaks if you do things that put pressure on a joint, like kneeling.",
      "Use padding when putting a lot of pressure on joints, for example when kneeling.",
      "Clean any cuts on the joints to prevent infections.",
      "Warm up properly before exercising and playing sport.",
    ],
    tryThisWeek: [
      "Take breaks from kneeling.",
      "Use padding under pressure points.",
      "Clean any cuts over a joint.",
    ],
    ask: "What do you think caused my bursitis, and could gout or arthritis be involved?",
    interactive: {
      kind: "risk-check",
      title: "What might be behind it?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "kneel", label: "Kneeling a lot", note: "Carpet fitters who kneel a lot are more likely to get bursitis. Padding and regular breaks help.", changeable: true },
        { id: "lean", label: "Leaning on my elbows", note: "Repeated mild injury, such as leaning on the elbow, may cause bursitis there.", changeable: true },
        { id: "feet", label: "Long hours on my feet", note: "People who spend a long time standing or walking around are more likely to get it.", changeable: true },
        { id: "shoes", label: "High heels or tight shoes", note: "These can inflame the bursae in your feet.", changeable: true },
        { id: "gout", label: "Gout or rheumatoid arthritis", note: "Gout, and inflammatory conditions such as rheumatoid arthritis, increase the risk.", changeable: false },
        { id: "injury", label: "An injury that keeps coming back", note: "Arthritis UK lists this among the causes of bursitis.", changeable: false },
      ],
    },
    sources: [AU_BURS, CKS_OLEC_CAUSES, CKS_OLEC_PREV, AU_HIP, CKS_GTPS_CAUSES, CKS_GTPS_ASSOC, NHS_BURS],
    quiz: {
      question: "Which of these can cause bursitis at the elbow?",
      options: [{ text: "Repeatedly leaning on it", right: true }, { text: "Drinking water" }, { text: "Wearing a watch" }],
      why: "NICE's guidance for GPs says a single direct blow to the elbow, or repeated mild injury such as leaning on it, may cause bursitis there.",
    },
  },
  {
    id: "burs-urgent",
    kicker: "Symptoms",
    question: "How do I know if bursitis might be infected, and when is it urgent?",
    hook: "Most bursitis settles at home. Heat, worsening redness, a high temperature or feeling unwell change that.",
    short: "A high temperature, or feeling hot, cold or shivery, with a painful, hot, swollen joint can be a sign of infection. The NHS advises an urgent GP appointment or NHS 111 for a hip that is swollen and hot, or joint pain with a high temperature and feeling unwell. Call 999 or go to A&E if you think you might have sepsis.",
    sections: [
      {
        heading: "When to see a GP",
        paragraphs: [
          "The NHS says to see a GP if your bursitis has not improved, or is getting worse, after treating it yourself for 1 to 2 weeks. See a GP too if you have a high temperature or feel hot, cold or shivery, cannot move the affected joint, or have very severe, sharp or shooting pains in the joint.",
          "Arthritis UK adds seeing your GP if the skin over the swollen area is broken.",
        ],
      },
      {
        heading: "Signs that may mean infection",
        paragraphs: [
          "NICE's guidance for GPs lists signs that may point to an infected bursa. These include increasing tenderness, a painful, red, hot swelling that keeps getting worse, a cut or graze over the bursa, a fever, and a weakened immune system.",
          "It may be difficult to tell an infected bursa from one that is not infected. The redness can be harder to see on brown or black skin.",
        ],
      },
      {
        heading: "Getting help urgently",
        paragraphs: [
          "For the hip, the NHS says to ask for an urgent GP appointment or get help from NHS 111 if your hip is swollen and feels hot, or you have hip pain, feel generally unwell and have a high temperature.",
          "For the knee, get advice from 111 now if you have a very high temperature, or feel hot, cold or shivery, and have redness or heat around your knee. This can be a sign of infection.",
          "For the arm, get help from NHS 111 if it is swollen and you have a very high temperature, or feel hot, cold or shivery.",
        ],
      },
      {
        heading: "A joint infection is serious",
        paragraphs: [
          "Septic arthritis is a serious type of joint infection that should be treated as soon as possible. Its symptoms usually develop quickly over a few days and need to be checked straight away.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you have severe pain in one joint that started suddenly, swelling around a joint, skin around a joint that has changed colour, or pain in a joint and feel generally unwell with a high temperature. If you cannot get an urgent GP appointment, call 111.",
        ],
      },
      {
        heading: "Sepsis: call 999",
        paragraphs: [
          "Sepsis is a serious reaction to an infection that can be life-threatening. Call 999 or go to A&E if an adult is breathing very fast, is confused or has slurred speech, has blue, pale or blotchy skin, has a rash that does not fade when pressed, or has a very high or very low temperature.",
          "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance.",
        ],
      },
    ],
    helps: [
      "See a GP if your bursitis is not improving after 1 to 2 weeks of treating it yourself.",
      "See a GP if you have a high temperature, or feel hot, cold or shivery.",
      "Ask for an urgent GP appointment or get help from NHS 111 if a joint is swollen and hot and you feel unwell with a high temperature.",
      "Call 999 or go to A&E if you think you might have sepsis.",
    ],
    tryThisWeek: [
      "See a GP if no better in 1 to 2 weeks.",
      "Call 111 for a hot joint with a fever.",
      "Call 999 if you think it is sepsis.",
    ],
    ask: "Which signs mean my bursitis might be infected, and who should I call?",
    interactive: {
      kind: "signs",
      title: "Signs to act on",
      intro: "Tick what you have noticed. Some of these need help the same day.",
      signs: [
        "A high temperature, or feeling hot, cold or shivery",
        "Redness or heat that keeps getting worse",
        "A cut or graze over the swelling",
        "I cannot move the affected joint",
        "Very severe, sharp or shooting pain",
        "Feeling generally unwell",
        "No better after 1 to 2 weeks of self-care",
      ],
      after: "For a hot, swollen joint with a high temperature, ask for an urgent GP appointment or get help from NHS 111. Call 999 or go to A&E if you think you might have sepsis.",
      copyHeading: "My bursitis: signs to report",
    },
    sources: [NHS_BURS, AU_BURS, CKS_OLEC_SUSPECT, NHS_HIP, NHS_KNEE, NHS_ELBOW, NHS_SEPTIC, NHS_SEPSIS],
    quiz: {
      question: "Your knee is red and hot and you have a very high temperature. What does the NHS say to do?",
      options: [{ text: "Get advice from 111 now", right: true }, { text: "Wait a few weeks to see" }, { text: "Exercise it harder" }],
      why: "For the knee, get advice from 111 now if you have a very high temperature, or feel hot, cold or shivery, and have redness or heat around your knee.",
    },
  },
  {
    id: "burs-self-care",
    kicker: "Treatment",
    question: "What can I do at home: rest, ice and painkillers?",
    hook: "Ease the pressure, a wrapped ice pack, a painkiller and an extra cushion at night. For most people, that is where it starts.",
    short: "Resting the joint, using a wrapped ice pack and taking painkillers such as paracetamol or ibuprofen can help bring down swelling and pain. Reducing the pressure on the area is the main way to ease it. If painkillers work, the pain should improve within a couple of weeks, though swelling can last a while longer.",
    sections: [
      {
        heading: "Rest and less pressure",
        paragraphs: [
          "To help bring down swelling and pain, rest: try not to move the joint too much, and avoid activities that put pressure on it.",
          "In most cases, you can reduce the pain and inflammation of bursitis by reducing the pressure on the affected area.",
        ],
      },
      {
        heading: "Ice",
        paragraphs: [
          "Gently hold an ice pack, or a bag of frozen peas, wrapped in a tea towel on the area for around 10 minutes at a time. Repeat every few hours during the day.",
          "Arthritis UK suggests 10 minutes at a time, every 2 to 3 hours, with the pack wrapped in a damp tea towel. NICE's guidance for GPs adds not to put ice directly onto the skin.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "Painkillers such as paracetamol or ibuprofen can ease the pain, and can be bought from supermarkets and pharmacies. Read the leaflet that comes with your medicine to check how much to take.",
          "If these work for you, your pain should improve within a couple of weeks, though you may still have swelling for a while afterwards.",
        ],
      },
      {
        heading: "Using medicines safely",
        paragraphs: [
          "Do not take ibuprofen tablets for more than 10 days, or paracetamol for more than 3 days, unless a doctor advises you to.",
          "Check with a pharmacist or doctor before taking ibuprofen if you have a stomach ulcer, or have had one before, or have asthma. If you use ibuprofen gel, do not smoke or go near naked flames, as clothes that have touched it can burn more easily.",
        ],
      },
      {
        heading: "Comfort at night",
        paragraphs: [
          "It may help to put extra cushions around the affected joint while you sleep, to protect and support it.",
          "If lying down is uncomfortable, try to avoid sleeping on the side that hurts. A pillow placed behind your back can stop you rolling onto the painful side.",
        ],
      },
    ],
    helps: [
      "Rest the joint and avoid activities that put pressure on it.",
      "Hold a wrapped ice pack on the area for around 10 minutes at a time, every few hours.",
      "Take painkillers such as paracetamol or ibuprofen, checking the leaflet for how much.",
      "Put extra cushions around the joint while you sleep.",
      "Speak to a pharmacist or doctor if you are not sure a painkiller suits you.",
    ],
    tryThisWeek: [
      "Ease the pressure on the joint.",
      "Ice it for 10 minutes at a time.",
      "Cushion the joint at night.",
    ],
    ask: "Which painkiller is safe for me, and for how long?",
    interactive: {
      kind: "scenarios",
      title: "Easing it at home",
      scenarios: [
        {
          id: "ice",
          situation: "You want to ice a swollen elbow, straight from the freezer.",
          options: [{ text: "Wrap the pack in a tea towel first", best: true }, { text: "Hold the ice directly on the skin" }],
          why: "Gently hold an ice pack wrapped in a tea towel on the area. NICE's guidance for GPs adds not to put ice directly onto the skin.",
        },
        {
          id: "sleep",
          situation: "Your sore hip wakes you whenever you roll onto that side.",
          options: [{ text: "Put a pillow behind your back", best: true }, { text: "Sleep on the sore side" }],
          why: "Try to avoid sleeping on the side that hurts. A pillow placed behind your back can stop you rolling onto the painful side.",
        },
        {
          id: "gel",
          situation: "You have rubbed ibuprofen gel on your knee and want to light a fire.",
          options: [{ text: "Keep away from naked flames", best: true }, { text: "It is fine once the gel is dry" }],
          why: "If you use ibuprofen gel, do not smoke or go near naked flames, as clothes that have touched it can burn more easily.",
        },
      ],
    },
    sources: [NHS_BURS, AU_BURS, CKS_OLEC_MGMT, NHS_IBUPROFEN, NHS_PARACETAMOL],
    quiz: {
      question: "How long does the NHS suggest holding a wrapped ice pack on the area?",
      options: [{ text: "Around 10 minutes at a time", right: true }, { text: "An hour at a time" }, { text: "All night" }],
      why: "Gently hold an ice pack, or a bag of frozen peas, wrapped in a tea towel on the area for around 10 minutes at a time.",
    },
  },
  {
    id: "burs-exercises",
    kicker: "Exercise",
    question: "Which exercises and physiotherapy can help bursitis?",
    hook: "Not every bursa needs the same moves. A physiotherapist can match the exercises to the joint.",
    short: "A physiotherapist can show you exercises to improve your movement, and advise how to reduce friction that could be making bursitis worse. For pain on the outside of the hip, physiotherapy may include strengthening and stretching the muscles around the hip. Check with your GP or physiotherapist before starting new exercises.",
    sections: [
      {
        heading: "What a physiotherapist can do",
        paragraphs: [
          "A physiotherapist is a trained specialist who can show you exercises to improve your movement, and advise you on how to reduce any friction that could be making your bursitis worse.",
          "Your doctor may refer you to a physiotherapist, who can assess your condition and design a series of stretching and strengthening exercises for your specific problem.",
        ],
      },
      {
        heading: "Getting physiotherapy",
        paragraphs: [
          "Your GP can refer you for physiotherapy, or you may be able to refer yourself. In many areas you can get physiotherapy from NHS community musculoskeletal services without needing a referral from a GP.",
          "Physiotherapy is free on the NHS, but there may be a long waiting list. If you pay privately, check the physiotherapist is chartered, with MCSP after their name, and registered with the Health and Care Professions Council.",
        ],
      },
      {
        heading: "For the outside of the hip",
        paragraphs: [
          "NICE's guidance for GPs says physiotherapy for pain on the outside of the hip may include strengthening the thigh muscles, stretching the band of tissue along the outside of the thigh, and hip exercises that strengthen and stretch the buttock muscles.",
          "In one trial it describes, education on managing load plus exercise with a physiotherapist gave better overall improvement at a year than a steroid injection, although pain levels were similar.",
          "One of Arthritis UK's hip exercises is standing hip abduction. With one hand resting on a chair or work surface, lift your leg straight up to the side, hold for five seconds and slowly lower it. Repeat five times on each side.",
        ],
      },
      {
        heading: "For the shoulder",
        paragraphs: [
          "The Chartered Society of Physiotherapy recommends seeking advice from a physiotherapist or healthcare professional before starting any new exercise regime. If any exercise worsens your pain, seek urgent medical advice.",
          "One of its shoulder exercises: stand in front of a wall with the hand of the affected arm on it, climb your fingers up the wall as high as you can, then come back down.",
          "Arthritis UK's shoulder circle: stand with one hand resting on a chair, let your other arm hang down, and swing it gently backwards and forwards in a circle, about five times.",
        ],
      },
      {
        heading: "Starting gently",
        paragraphs: [
          "Start slowly and build up gradually if you are new to exercise. Get advice from a healthcare professional or fitness instructor if you have any concerns about starting a new exercise plan.",
          "It is normal to feel some aching in your muscles after exercising, but stop if you get any joint pain that does not go away quickly.",
          "For the knees, Arthritis UK's sitting straight-leg raise is one example: sit back with a straight back, straighten and raise one leg, hold for a slow count to 10, then slowly lower it.",
        ],
      },
    ],
    helps: [
      "Check with your GP or physiotherapist before starting new exercises.",
      "Ask about physiotherapy, or check whether you can refer yourself.",
      "Do any exercises you are given to do at home regularly.",
      "Start slowly and build up gradually.",
      "Stop if you get joint pain that does not go away quickly.",
    ],
    tryThisWeek: [
      "Check with a physiotherapist first.",
      "Start slowly and build up.",
      "Stop if joint pain lingers.",
    ],
    ask: "Which exercises would help, and how often should I do them?",
    interactive: {
      kind: "flip-cards",
      title: "Moves the sources describe",
      intro: "Check with your GP or physiotherapist first. Turn each card to see how each move is described.",
      cards: [
        { id: "abduction", front: "Hip abduction (standing)", when: "One hand on a chair for support", back: "Lift your leg straight up to the side, hold for five seconds, then slowly lower. Five times each side." },
        { id: "bridging", front: "Bridging", when: "Lying on your back, knees bent", back: "Lift your pelvis and lower back off the floor, hold for five seconds, then lower down slowly." },
        { id: "wall", front: "Assisted shoulder flexion", when: "Facing a wall, hand on it", back: "Climb your fingers up the wall as high as you can, then come back to the start." },
        { id: "circle", front: "Shoulder circle", when: "One hand resting on a chair", back: "Let the other arm hang and swing it gently backwards and forwards in a circle, about five times." },
        { id: "leg-raise", front: "Straight-leg raise (sitting)", when: "Sitting back, with a straight back", back: "Straighten and raise one leg, hold for a slow count to 10, then lower. 10 times with each leg." },
      ],
    },
    sources: [AU_BURS, NHS_PHYSIO, CKS_GTPS_MGMT, AU_EX_HIPS, CSP_SH_VIDEO, AU_EX_SHOULDERS, AU_HIP, AU_EX_KNEES],
    quiz: {
      question: "What does the Chartered Society of Physiotherapy say to do if an exercise worsens your pain?",
      options: [{ text: "Seek urgent medical advice", right: true }, { text: "Push through it" }, { text: "Do it twice as often" }],
      why: "If any exercise worsens your pain, seek urgent medical advice.",
    },
  },
  {
    id: "burs-injections",
    kicker: "Treatment",
    question: "What other treatments are there: draining, injections or surgery?",
    hook: "A needle to draw off fluid, a steroid to calm the swelling, and rarely an operation. Each has its place.",
    short: "A GP may take fluid from the bursa with a needle, called aspiration, which can ease symptoms and be tested. A steroid injection may reduce swelling, but it will not be done if bursitis is caused by an infection. If bursitis is severe or keeps coming back, the bursa may need to be drained or removed with surgery, but this is rare.",
    sections: [
      {
        heading: "Checks first",
        paragraphs: [
          "A GP will examine the affected joint. They may take a sample of fluid using a needle, which is sent off to test for an infection and conditions such as gout.",
          "Your GP may ask about recent injuries, any history of joint problems, and your job. In some cases you may be sent for an ultrasound scan, or have blood tests to look for conditions like rheumatoid arthritis or gout.",
        ],
      },
      {
        heading: "Draining the fluid",
        paragraphs: [
          "Taking fluid from the bursa with a needle, called aspiration, can relieve some of the pressure and help reduce pain. It might be done in your GP surgery, or you may be referred to hospital.",
          "For elbow bursitis treated by aspiration alone, NICE's guidance for GPs says half of cases settle in 2 weeks, a quarter still have swelling after 8 weeks, and 1 in 10 still have it at 6 months. Overall, about 95% settle over a longer time.",
        ],
      },
      {
        heading: "Steroid injections",
        paragraphs: [
          "A steroid injection can reduce the swelling, but it will not be done if bursitis is caused by an infection. Sometimes, if the bursa is large, a steroid is injected after the fluid has been drained.",
          "At the hip, Arthritis UK says steroid injections are usually very helpful for conditions affecting the outside of the hip, and are often given with a local anaesthetic.",
          "At the elbow, NICE's guidance for GPs says a steroid injection can ease symptoms faster, but carries a higher risk of problems, including infection of the bursa and thinning of the skin. So it is kept for cases that have not settled with other treatment.",
        ],
      },
      {
        heading: "Stronger medicines",
        paragraphs: [
          "Your doctor may suggest a course of stronger anti-inflammatory medicines or painkillers. Like all medicines these can have side effects, so a doctor will take steps to reduce the risk, such as prescribing the lowest dose that works for the shortest time.",
          "Steroids often do not cause side effects if they are taken for a short time or at a low dose.",
        ],
      },
      {
        heading: "Surgery is rare",
        paragraphs: [
          "If bursitis is severe or keeps coming back, the inflamed bursa may need to be surgically drained or even removed, but this is rare.",
          "At the elbow, a small number of people need surgery if it keeps coming back or affects everyday activities. The bursa is removed through a cut at the back of the elbow, and some surgeons have started to use keyhole surgery.",
        ],
      },
    ],
    helps: [
      "Ask whether draining the fluid could ease your symptoms.",
      "Tell your GP about recent injuries, any joint problems, and your job.",
      "Check the information leaflet that comes with any steroid medicine for possible side effects.",
      "Ask whether physiotherapy could help alongside other treatments.",
    ],
    tryThisWeek: [
      "Ask whether draining could help.",
      "Tell your GP about your job.",
      "Read the steroid leaflet.",
    ],
    ask: "Would draining the fluid or an injection be an option for me, and what are the risks?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments beyond self-care",
      intro: "Turn each card to see what the sources say about each one.",
      cards: [
        { id: "aspiration", front: "Aspiration", when: "Fluid drawn off with a needle", back: "Can relieve pressure and pain. The fluid can be tested for infection and conditions such as gout." },
        { id: "steroid", front: "Steroid injection", when: "Not if there is infection", back: "Can reduce swelling. At the elbow it carries a higher risk of problems, so it is kept for stubborn cases." },
        { id: "nsaids", front: "Stronger medicines", when: "If simple painkillers are not enough", back: "Stronger anti-inflammatory medicines or painkillers, at the lowest dose that works for the shortest time." },
        { id: "physio", front: "Physiotherapy", when: "Often alongside other treatment", back: "Stretching and strengthening exercises designed for your specific problem." },
        { id: "surgery", front: "Surgery", when: "Rare: severe or keeps coming back", back: "The inflamed bursa may be drained or removed. At the elbow, sometimes by keyhole surgery." },
      ],
    },
    sources: [NHS_BURS, AU_BURS, CKS_OLEC_PROG, AU_HIP, CKS_OLEC_MGMT, NHS_STEROIDS, AU_ELBOW],
    quiz: {
      question: "When will a steroid injection not be given for bursitis?",
      options: [{ text: "If the bursitis is caused by an infection", right: true }, { text: "If it is in the knee" }, { text: "If you are over 40" }],
      why: "A steroid injection can reduce the swelling, but it will not be done if bursitis is caused by an infection.",
    },
  },
  {
    id: "burs-infected",
    kicker: "Treatment",
    question: "How is an infected bursa treated?",
    hook: "Antibiotics are the main treatment, and taking them as directed matters. A fluid sample helps find the right one.",
    short: "If bursitis is caused by an infection, antibiotics are usually taken for at least 7 days. A sample of fluid may be taken first, to find out which infection it is. If it keeps coming back in the same place, you may be referred to hospital for antibiotics into a vein, or surgery.",
    sections: [
      {
        heading: "Antibiotics",
        paragraphs: [
          "Antibiotics are usually taken for at least 7 days if bursitis is caused by an infection.",
          "If your doctor thinks your bursitis has been caused by an infection, they will probably prescribe antibiotics.",
        ],
      },
      {
        heading: "A sample of the fluid",
        paragraphs: [
          "If your doctor thinks there is an infection, they may recommend aspiration, where a needle and syringe are used to take fluid from the bursa. The fluid can be tested in a lab to find out what infection you have and the best way to treat it.",
          "At the elbow, NICE's guidance for GPs says most infections are caused by a germ called Staphylococcus aureus, in 80 to 90% of cases, or by streptococci.",
        ],
      },
      {
        heading: "Checking it is working",
        paragraphs: [
          "NICE's guidance for GPs suggests reviewing an infected elbow bursa every 3 to 5 days, to check the treatment is working. Antibiotics may be needed for 1 to 4 weeks, depending on how a person responds.",
          "It advises hospital admission or referral if antibiotics have not helped enough after 3 to 5 days, same-day admission if there is widespread skin infection, and urgent admission for severe infection, including a high fever.",
        ],
      },
      {
        heading: "Taking antibiotics well",
        paragraphs: [
          "Take antibiotics as directed on the packet or leaflet, or as your GP or pharmacist tells you. If you forget a dose, check the leaflet, and do not take a double dose to make up for a missed one.",
          "The NHS says that if you are given antibiotic tablets for a joint infection, keep taking them for as long as you are told to, even if you feel better. Stopping treatment too soon could lead to the infection coming back.",
          "Cellulitis, a skin infection, can occur alongside an infected bursa. For cellulitis, the NHS says to contact your GP if you do not start to feel better 2 to 3 days after starting antibiotics.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "NICE's guidance for GPs says an infected elbow bursa will usually clear completely with draining and the right antibiotics, without needing surgical drainage. Symptoms usually settle after 5 weeks on average, though some take up to 20 weeks.",
          "If you continue to get bursitis in the same place, even after treatment, you may be referred to hospital for antibiotics into a vein, or surgery.",
        ],
      },
    ],
    helps: [
      "Take antibiotics as directed on the packet or leaflet, or as your GP or pharmacist tells you.",
      "Keep taking antibiotic tablets for as long as you are told to, even if you feel better.",
      "If you forget a dose, check the leaflet, and do not take a double dose.",
      "Go back to your GP if pain increases or the inflammation spreads.",
    ],
    tryThisWeek: [
      "Take antibiotics as directed.",
      "Keep going even if you feel better.",
      "Go back if pain or redness spreads.",
    ],
    ask: "How long should I take the antibiotics, and when will you check how it is going?",
    interactive: {
      kind: "timeline",
      title: "Treating an infected bursa",
      steps: [
        { id: "start", when: "First visit", title: "Sample and antibiotics", points: ["Fluid may be drawn off with a needle and tested.", "Antibiotics are started."] },
        { id: "review", when: "3 to 5 days", title: "Checking it is working", points: ["NICE's guidance for GPs suggests a review to check the treatment is working."] },
        { id: "course", when: "At least 7 days", title: "The course", points: ["Antibiotics are usually taken for at least 7 days.", "They may be needed for 1 to 4 weeks."] },
        { id: "settle", when: "About 5 weeks", title: "Settling", points: ["Symptoms usually settle after 5 weeks on average, sometimes up to 20 weeks."] },
      ],
    },
    sources: [NHS_BURS, AU_BURS, CKS_OLEC_CAUSES, CKS_OLEC_MGMT, NHS_ANTIBIOTICS, NHS_SEPTIC, NHS_CELLULITIS, CKS_OLEC_PROG],
    quiz: {
      question: "How long are antibiotics usually taken for infected bursitis, according to the NHS?",
      options: [{ text: "At least 7 days", right: true }, { text: "One day" }, { text: "Only until it stops hurting" }],
      why: "Antibiotics are usually taken for at least 7 days if bursitis is caused by an infection.",
    },
  },
  {
    id: "burs-pressure",
    kicker: "Everyday life",
    question: "How can I take the pressure off a sore bursa?",
    hook: "A cushion under the knees, a pillow behind the back, and elbows off the table. Small changes take the load off.",
    short: "Reducing the pressure on the affected area is the main way to ease bursitis. Padding when kneeling, not lying on a sore hip and keeping pressure off a sore elbow can all help. Comfortable, well-fitting shoes help bursitis in the feet.",
    sections: [
      {
        heading: "Kneeling",
        paragraphs: [
          "If you have bursitis around your knees, using a thick foam cushion or knee pads can help reduce the pressure and make kneeling less painful.",
          "The NHS suggests using padding when putting a lot of pressure on joints, such as when kneeling, and taking regular breaks.",
        ],
      },
      {
        heading: "Leaning",
        paragraphs: [
          "Elbow bursitis most commonly happens when there is pressure or friction over the back of the elbow, such as often leaning your elbows on a chair or table.",
          "NICE's guidance for GPs recommends avoiding knocks or direct pressure on the elbows, or using protective elbow pads. A compression bandage, such as an elasticated tubular bandage, may help if you can tolerate it.",
        ],
      },
      {
        heading: "Sleeping",
        paragraphs: [
          "If lying down is uncomfortable, try to avoid sleeping on the side that hurts. A pillow placed behind your back can stop you rolling onto the painful side and should help you sleep better.",
          "For pain on the outside of the hip, NICE's guidance for GPs advises avoiding activity that may worsen it, such as repetitive hip movements or lying on that hip.",
          "If you have bursitis in your shoulder, you can place that arm on a pillow in front of you. This supports your arm and stops it falling across your body.",
        ],
      },
      {
        heading: "Sitting, standing and carrying",
        paragraphs: [
          "With hip pain, avoid sitting in low chairs, as this bends the hip more and might increase your pain. Avoid standing on one leg: when you get into a car, sit on the side of the seat and swing both legs in.",
          "Do not carry anything heavy. When shopping, try using a trolley if a basket is uncomfortable to carry.",
        ],
      },
      {
        heading: "Shoes, feet and walking",
        paragraphs: [
          "Comfortable, properly fitted shoes or trainers and protective insoles can help relieve the pressure on swollen bursae in your feet, and reduce rubbing that makes it worse.",
          "A walking stick can also help relieve the pressure on the affected area. A doctor or an occupational therapist can advise you on how to pick the right one.",
        ],
      },
    ],
    helps: [
      "Use a thick foam cushion or knee pads when kneeling.",
      "Avoid direct pressure on a sore elbow, or use protective elbow pads.",
      "Put a pillow behind your back so you do not roll onto the sore side.",
      "Avoid low chairs if your hip is sore.",
      "Wear comfortable, properly fitted shoes.",
    ],
    tryThisWeek: [
      "Pad your knees when kneeling.",
      "Keep pressure off a sore elbow.",
      "Put a pillow behind your back.",
    ],
    ask: "What can I change day to day to take the pressure off this joint?",
    interactive: {
      kind: "scenarios",
      title: "Everyday pressure points",
      scenarios: [
        {
          id: "garden",
          situation: "You need to kneel to weed the garden.",
          options: [{ text: "Use a thick foam cushion or knee pads", best: true }, { text: "Kneel straight on the ground" }],
          why: "Using a thick foam cushion or knee pads can help reduce the pressure and make kneeling less painful.",
        },
        {
          id: "table",
          situation: "You often read with your elbows leaning on the table.",
          options: [{ text: "Keep pressure off the elbow", best: true }, { text: "Lean on it more to toughen it up" }],
          why: "Elbow bursitis most commonly happens when there is pressure or friction over the back of the elbow, such as often leaning your elbows on a chair or table.",
        },
        {
          id: "car",
          situation: "Your hip is sore and you are getting into a car.",
          options: [{ text: "Sit on the side, swing both legs in", best: true }, { text: "Step in one leg at a time" }],
          why: "Avoid standing on one leg: when you get into a car, sit on the side of the seat and swing both legs in.",
        },
      ],
    },
    sources: [AU_BURS, NHS_BURS, AU_ELBOW, CKS_OLEC_MGMT, CKS_GTPS_MGMT, AU_HIP, NHS_HIP],
    quiz: {
      question: "What does Arthritis UK suggest to stop you rolling onto a sore side at night?",
      options: [{ text: "A pillow placed behind your back", right: true }, { text: "Sleeping on the sore side" }, { text: "Sleeping without pillows" }],
      why: "A pillow placed behind your back can stop you rolling onto the painful side and should help you sleep better.",
    },
  },
  {
    id: "burs-activity",
    kicker: "Everyday life",
    question: "Can I stay active with bursitis?",
    hook: "Rest first, then movement. Gentle, regular activity keeps joints working and helps stop pain coming back.",
    short: "Rest the joint at first, but as soon as the pain begins to ease, gentle exercise helps keep muscles working and stops the joint getting stiff. Build up slowly, and warm up before exercise and sport. Stopping exercise once pain clears can mean problems start again.",
    sections: [
      {
        heading: "Rest, then move",
        paragraphs: [
          "Hip pain may improve with a few days' rest, but as soon as the pain begins to ease, start some gentle exercise to keep your muscles working and stop your hip getting stiff.",
          "The Chartered Society of Physiotherapy says the natural reaction to pain is to stop activities that aggravate it, but it is much better to keep using your shoulder, adjusting how you do things. This may mean doing jobs in short bursts with regular breaks.",
        ],
      },
      {
        heading: "Keep the joint moving",
        paragraphs: [
          "The NHS advises staying active and gently moving a painful shoulder. Do not completely stop using it, as this can stop it getting better.",
          "For hip pain, the NHS says it is best to keep moving if you can, but try not to overdo things.",
        ],
      },
      {
        heading: "Building up",
        paragraphs: [
          "It is important to start off slowly and gradually build up. Try to increase how often you exercise, how long for, and how hard you try.",
          "Warm up before you exercise, as this helps your body prepare and reduces the risk of injury. The NHS also suggests warming up properly before exercising and playing sport to help stop bursitis coming back.",
        ],
      },
      {
        heading: "General fitness",
        paragraphs: [
          "Going on a daily walk or swimming will help to improve your general health and take the strain off your hip, by strengthening other muscles in the body.",
          "Adults should aim for at least 150 minutes of moderate activity a week, and strengthening activities on at least 2 days a week. Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        ],
      },
      {
        heading: "Keep going",
        paragraphs: [
          "Sometimes people stop exercising once their pain clears up, but it is common for problems to start again quite quickly. Even if you are feeling better, keep exercising regularly to stop the pain coming back.",
        ],
      },
    ],
    helps: [
      "Start gentle exercise as soon as the pain begins to ease.",
      "Do jobs in short bursts with regular breaks.",
      "Warm up properly before exercising and playing sport.",
      "Build up slowly: how often, how long and how hard.",
      "Keep exercising regularly, even once you feel better.",
    ],
    tryThisWeek: [
      "Start gentle exercise as pain eases.",
      "Warm up before sport.",
      "Keep going once it feels better.",
    ],
    ask: "How soon can I get back to my usual activities, and how should I build up?",
    interactive: {
      kind: "timeline",
      title: "From rest to regular activity",
      steps: [
        { id: "rest", when: "First few days", title: "Rest", points: ["Try not to move the joint too much, and avoid activities that put pressure on it."] },
        { id: "gentle", when: "As the pain eases", title: "Gentle movement", points: ["Start some gentle exercise to keep your muscles working and stop stiffness."] },
        { id: "build", when: "Building up", title: "Little by little", points: ["Gradually increase how often, how long and how hard.", "Warm up first."] },
        { id: "keep", when: "Feeling better", title: "Keep going", points: ["Keep exercising regularly to stop the pain coming back."] },
      ],
    },
    sources: [AU_HIP, CSP_SH_LIVING, NHS_SHOULDER, NHS_HIP, AU_START, NHS_BURS, NHS_ACTIVITY],
    quiz: {
      question: "What often happens when people stop exercising as soon as their pain clears?",
      options: [{ text: "Problems start again quite quickly", right: true }, { text: "The joint gets stronger" }, { text: "Nothing changes" }],
      why: "Sometimes people stop exercising once their pain clears up, but it is common for problems to start again quite quickly.",
    },
  },
  {
    id: "burs-work",
    kicker: "Work",
    question: "What about work: kneeling, leaning and repetitive tasks?",
    hook: "Carpet fitters, gardeners, plumbers, students. Many cases start at work, and small changes can help.",
    short: "Jobs with repetitive kneeling, leaning or pressure on a joint make bursitis more likely. Padding, regular breaks and talking to your employer or an occupational therapist can help. Employers must make reasonable adjustments, and Access to Work can help pay for support.",
    sections: [
      {
        heading: "Jobs linked with it",
        paragraphs: [
          "Jobs and hobbies with repetitive movements or activities can make you more likely to get bursitis, such as carpet fitters who kneel a lot, people who lean on their elbows to work or study, and people who spend a long time on their feet.",
          "NICE's guidance for GPs says elbow bursitis is more common in jobs with regular knocks or pressure on the elbow, such as gardeners, carpet layers, mechanics, plumbers, roofers and truck drivers.",
        ],
      },
      {
        heading: "Changing how you work",
        paragraphs: [
          "Use padding when putting a lot of pressure on joints, such as when kneeling, and take regular breaks if you do things that put pressure on a joint.",
          "Arthritis UK suggests taking regular breaks from your work or the activity that is putting the bursa under pressure.",
          "NICE's guidance for GPs says people whose job involves repetitive activity likely to bring on elbow bursitis will benefit from advice on changing that activity and using protection to stop it coming back.",
        ],
      },
      {
        heading: "Help from an occupational therapist",
        paragraphs: [
          "If you think your work might be the main cause of your pain, it is worth discussing this with an occupational therapist. They can show you how to change the way you do things, and advise on equipment or adaptations at home, at work or while driving.",
          "If your workplace has an occupational health department, they may also be able to help. Your GP can refer you to an occupational therapist, or you may be able to refer yourself.",
        ],
      },
      {
        heading: "Talking to your employer",
        paragraphs: [
          "Your workplace might be able to provide a footrest, back support or other equipment. You could ask for a workstation assessment, and talk to your line manager or HR department about any parts of your job you are struggling with.",
          "Employers must make reasonable adjustments so that workers with disabilities, or physical or mental health conditions, are not substantially disadvantaged. Examples include doing things another way, changing equipment, and a phased return to work with flexible hours.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. It could give a grant towards things like specialist equipment, or physical changes to your workplace.",
          "An Access to Work grant will not affect any other benefits you get, and you will not have to pay it back.",
        ],
      },
    ],
    helps: [
      "Use padding when kneeling or putting a lot of pressure on a joint.",
      "Take regular breaks from the activity putting the bursa under pressure.",
      "Ask about seeing an occupational therapist, or your occupational health department.",
      "Talk to your line manager or HR about parts of your job you are struggling with.",
      "Apply for Access to Work if you need extra help.",
    ],
    tryThisWeek: [
      "Pad up for kneeling work.",
      "Take regular breaks.",
      "Talk to your manager or HR.",
    ],
    ask: "Should I change anything about my work while this settles?",
    interactive: {
      kind: "scenarios",
      title: "At work",
      scenarios: [
        {
          id: "floors",
          situation: "Your job means kneeling on hard floors for hours.",
          options: [{ text: "Use padding and take regular breaks", best: true }, { text: "Keep kneeling without a break" }],
          why: "Use padding when putting a lot of pressure on joints, such as when kneeling, and take regular breaks if you do things that put pressure on a joint.",
        },
        {
          id: "struggling",
          situation: "Parts of your job have become hard because of the pain.",
          options: [{ text: "Talk to your line manager or HR", best: true }, { text: "Say nothing and push on" }],
          why: "Talk to your line manager or HR department about any parts of your job you are struggling with.",
        },
        {
          id: "equipment",
          situation: "You need special equipment to keep doing your job.",
          options: [{ text: "Look into Access to Work", best: true }, { text: "Assume no help is available" }],
          why: "Access to Work could give a grant towards things like specialist equipment, or physical changes to your workplace.",
        },
      ],
    },
    sources: [AU_BURS, CKS_OLEC_PREV, NHS_BURS, CKS_OLEC_PROG, AU_HIP, GOV_ADJUSTMENTS, GOV_ACCESS],
    quiz: {
      question: "Does an Access to Work grant affect your other benefits?",
      options: [{ text: "No, and it does not have to be paid back", right: true }, { text: "Yes, it stops them" }, { text: "It must be paid back within a year" }],
      why: "An Access to Work grant will not affect any other benefits you get, and you will not have to pay it back.",
    },
  },
  {
    id: "burs-coming-back",
    kicker: "Long term",
    question: "How can I stop bursitis coming back?",
    hook: "It can return, especially where the same spot keeps getting pressed or knocked. Protection, padding and breaks all help.",
    short: "Bursitis can be treated, but it can come back. Protecting your joints from knocks, using padding, taking breaks, cleaning cuts and warming up before sport all help. Repeated pressure or knocks on the same spot are among the things most linked with it returning.",
    sections: [
      {
        heading: "It can come back",
        paragraphs: [
          "Bursitis can be treated, but it can come back.",
          "At the elbow, NICE's guidance for GPs says repeat episodes are particularly likely after repeated minor knocks. Things linked with it coming back include continued knocks at work or play, repeated pressure on the elbow, inflammatory arthritis, and earlier episodes.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "To help stop bursitis coming back, the NHS suggests cleaning any cuts on the joints to prevent infections, warming up properly before exercising and playing sport, and not knocking or banging your joints.",
          "Use padding when putting a lot of pressure on joints, such as when kneeling, and take regular breaks if you do things that put pressure on a joint.",
          "Arthritis UK adds wearing properly fitting shoes and protecting your feet with insoles.",
        ],
      },
      {
        heading: "Weight and joints",
        paragraphs: [
          "The NHS suggests maintaining a healthy weight, as being overweight puts more pressure on your joints.",
          "For pain on the outside of the hip, NICE's guidance for GPs suggests offering information about weight loss, and about stopping smoking, where that is appropriate.",
        ],
      },
      {
        heading: "Most people recover",
        paragraphs: [
          "NICE's guidance for GPs says over 90% of people with pain on the outside of the hip recover fully with conservative treatment, such as rest, pain relief, physiotherapy or a steroid injection.",
          "Although symptoms do persist in a small proportion of people, this does not mean there is a serious underlying condition, or that the hip joint is being damaged.",
        ],
      },
      {
        heading: "If it keeps returning",
        paragraphs: [
          "If bursitis is severe or keeps coming back, the inflamed bursa may need to be surgically drained or even removed, but this is rare.",
          "NICE's guidance for GPs suggests considering referral if elbow bursitis has not responded after 2 months of treatment, and urgent referral if an infected bursa keeps coming back.",
        ],
      },
    ],
    helps: [
      "Clean any cuts on the joints to prevent infections.",
      "Warm up properly before exercising and playing sport.",
      "Use padding and take regular breaks when kneeling.",
      "Protect your joints from knocks and bangs.",
    ],
    tryThisWeek: [
      "Clean any cuts over a joint.",
      "Warm up before sport.",
      "Pad up and take breaks.",
    ],
    ask: "Why does my bursitis keep coming back, and what else could we try?",
    interactive: {
      kind: "risk-check",
      title: "What makes it more likely to return?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "pressure", label: "Repeated pressure on one spot", note: "Repeated pressure is linked with it coming back. Padding and regular breaks help.", changeable: true },
        { id: "knocks", label: "Knocks at work or in sport", note: "Continued knocks are linked with it returning. Try not to knock or bang your joints.", changeable: true },
        { id: "cuts", label: "Cuts over the joint", note: "Clean any cuts on the joints to prevent infections.", changeable: true },
        { id: "warm-up", label: "Skipping a warm-up", note: "Warm up properly before exercising and playing sport.", changeable: true },
        { id: "arthritis", label: "Inflammatory arthritis", note: "Inflammatory arthritis is linked with bursitis coming back.", changeable: false },
        { id: "before", label: "Bursitis in the same place before", note: "Earlier episodes are linked with it coming back.", changeable: false },
      ],
    },
    sources: [AU_BURS, CKS_OLEC_PROG, NHS_BURS, CKS_GTPS_MGMT, CKS_GTPS, CKS_OLEC_MGMT],
    quiz: {
      question: "Can bursitis come back after it has been treated?",
      options: [{ text: "Yes, it can come back", right: true }, { text: "No, never" }, { text: "Only in children" }],
      why: "Bursitis can be treated, but it can come back.",
    },
  },
];
