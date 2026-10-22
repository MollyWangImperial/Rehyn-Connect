import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Bunions page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (nhs.uk, NHS inform,
// and the bunion pages of NHS Fife and two NHS trusts), Arthritis UK (the charity formerly called Versus
// Arthritis) and the Royal College of Podiatry, with the government's page on Access to Work. Exercises are
// described only as the sources describe them. General information only; it never replaces what a person's
// own GP, podiatrist or surgeon tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const inform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const rcpod = (label: string, path: string): LearnSource => ({ label: `Royal College of Podiatry: ${label}`, url: `https://rcpod.org.uk/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_BUNIONS = nhs("Bunions", "conditions/bunions/");
const NHS_TOE = nhs("Toe pain", "symptoms/foot-pain/toe-pain/");
const NHS_CORNS = nhs("Corns and calluses", "conditions/corns-and-calluses/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_WALKING = nhs("Walking for health", "live-well/exercise/walking-for-health/");
const NHS_DVT = nhs("DVT (deep vein thrombosis)", "conditions/deep-vein-thrombosis-dvt/");

const INFORM_BUNION = inform("Bunion (hallux valgus)", "illnesses-and-conditions/muscle-bone-and-joints/leg-and-foot-problems-and-conditions/bunion-hallux-valgus/");
const INFORM_FOOT = inform("Foot and toe problems", "illnesses-and-conditions/muscle-bone-and-joints/leg-and-foot-problems-and-conditions/foot-and-toe-problems/");
const INFORM_FEET = inform("Looking after your feet to help prevent falls", "healthy-living/preventing-falls/keeping-well/looking-after-your-feet-to-help-prevent-falls/");

const FIFE: LearnSource = { label: "NHS Fife: Bunion (hallux valgus)", url: "https://www.nhsfife.org/services/all-services/podiatry-foot-health/foot-pain/bunion-hallux-valgus/" };
const KENT: LearnSource = { label: "Kent Community Health NHS Foundation Trust: Bunion scarf and akin osteotomy", url: "https://www.kentcht.nhs.uk/leaflet/bunion-scarf-and-akin-osteotomy/" };
const GATESHEAD: LearnSource = { label: "Gateshead Health NHS Foundation Trust: Scarf and Akin osteotomy", url: "https://www.gatesheadhealth.nhs.uk/resources/scarf-and-akin-osteotomy/" };

const AU_FOOT = au("Foot and ankle pain", "understanding-arthritis/conditions/foot-and-ankle-pain/");
const AU_FOOT_SURGERY = au("Foot and ankle surgery", "understanding-arthritis/arthritis-treatments/surgery/foot-and-ankle-surgery/");
const AU_OA_FOOT = au("Osteoarthritis (OA) of the foot and ankle", "understanding-arthritis/conditions/osteoarthritis-oa-of-the-foot-and-ankle/");
const AU_EX_FEET = au("Exercises for the toes, feet and ankles", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-toes-feet-and-ankles/");

const RCPOD_HOME = rcpod("The Royal College of Podiatry", "");
const RCPOD_WHAT = rcpod("What does a podiatrist do?", "careers/what-is-a-podiatrist");
const RCPOD_ARTHRITIS = rcpod("Arthritis", "patient-information/arthritis");
const RCPOD_WALKING = rcpod("Walking", "patient-information/walking");

const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");

export const bunionsAnswers: LearnArticle[] = [
  {
    id: "bun-what-it-is",
    kicker: "Understanding",
    question: "What is a bunion, and what is happening in my foot?",
    hook: "A big toe that leans in, and a lump that forms where it meets the foot. Here is what is changing underneath.",
    short: "A bunion is a bony lump on the side of the foot, by the big toe, as the big toe points towards the other toes. Its medical name is hallux valgus. Surgery is the only way to get rid of a bunion, but there are things you can do to ease any pain.",
    sections: [
      {
        heading: "A lump by the big toe",
        paragraphs: [
          "Bunions are bony lumps that form on the side of the feet. The main sign is a hard lump on the side of the foot, by the big toe, and the big toe may point towards the other toes.",
          "The medical name is hallux valgus. NHS inform describes it as a deformity caused by the base joint of the big toe developing sideways. This pushes the bones of the big toe towards the smaller toes.",
        ],
      },
      {
        heading: "What changes in the foot",
        paragraphs: [
          "The first metatarsal, which is the inside long bone of the forefoot, begins to drift towards the other foot. Meanwhile, the big toe drifts across towards the smaller toes.",
          "The big toe joint becomes more prominent, widening the ball of the foot. This can cause difficulty fitting shoes, joint inflammation and pain.",
          "The lump is made up of bone and soft tissue. Sometimes it is painful in itself, but more commonly it causes symptoms through pressure when you wear shoes.",
        ],
      },
      {
        heading: "Not every lump is a bunion",
        paragraphs: [
          "Sometimes swellings or bursae on the joints of the feet are also called bunions. Arthritis UK says these are not the same as bunions caused by hallux valgus, and do not need surgery.",
          "Hallux valgus is also different from hallux rigidus, which is osteoarthritis of the big toe joint. In hallux rigidus the big toe becomes stiff and will not move as far.",
        ],
      },
      {
        heading: "What can and cannot change it",
        paragraphs: [
          "Surgery is the only way to get rid of bunions, but there are things you can do to ease any pain they cause. You cannot get rid of bunions or stop them getting worse yourself.",
          "Most evidence indicates that bunions are a progressive condition, which worsens over time. It is therefore more common to see bunions in middle and later age.",
        ],
      },
    ],
    helps: [
      "Wear wide shoes with a low heel and soft sole.",
      "Try bunion pads, soft pads you put in shoes to stop them rubbing on a bunion. You can buy these from pharmacies.",
      "Choose well fitting shoes, ideally with laces or an adjustable strap, so they can adjust to the width of your foot.",
      "See a GP if pain from a bunion has not improved after trying home treatments for a few weeks.",
    ],
    tryThisWeek: [
      "Wear wide, low-heeled, soft-soled shoes.",
      "Try bunion pads from a pharmacy.",
      "Choose shoes with laces or a strap.",
    ],
    ask: "Is this lump a bunion, and is my big toe joint also stiff or affected by arthritis?",
    interactive: {
      kind: "flip-cards",
      title: "Bunion words, card by card",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "valgus", front: "Hallux valgus", when: "The medical name for a bunion", back: "The base joint of the big toe develops sideways, pushing the big toe towards the smaller toes." },
        { id: "metatarsal", front: "First metatarsal", when: "The inside long bone of the forefoot", back: "In a bunion it begins to drift towards the other foot." },
        { id: "bursa", front: "Bursa", when: "A sac of fluid over the joint", back: "May appear with a bunion, and may become inflamed and sore." },
        { id: "rigidus", front: "Hallux rigidus", when: "Osteoarthritis of the big toe joint", back: "Causes stiffness, so the big toe will not move as far." },
      ],
    },
    sources: [NHS_BUNIONS, INFORM_BUNION, KENT, GATESHEAD, AU_FOOT_SURGERY, AU_FOOT, FIFE],
    quiz: {
      question: "Which way may the big toe point with a bunion?",
      options: [{ text: "Towards the other toes", right: true }, { text: "Away from the other toes" }, { text: "Straight up" }],
      why: "The main sign is a hard lump on the side of the foot, by the big toe, and the big toe may point towards the other toes.",
    },
  },
  {
    id: "bun-causes",
    kicker: "Understanding",
    question: "Why do bunions form? Is it my shoes, my genes or arthritis?",
    hook: "Shoes get most of the blame. The sources point to the shape of the foot first, with shoes making it worse.",
    short: "The exact cause of bunions is not always known. They are most likely to be inherited, through the shape and structure of the foot, and they are also linked to osteoarthritis and rheumatoid arthritis. Shoes that do not fit properly, or are tight in the toe area, make bunions more likely and make the problem worse.",
    sections: [
      {
        heading: "A cause that is not always known",
        paragraphs: [
          "The cause of bunions is not always known, but you may be more likely to get them if you wear shoes that do not fit properly.",
          "NHS inform says the exact cause is unknown, and lists three contributing factors: a joint problem like osteoarthritis or rheumatoid arthritis, poorly fitting footwear, and a family history.",
        ],
      },
      {
        heading: "The shape of the foot",
        paragraphs: [
          "Although shoes are often thought to be the cause, one NHS trust says bunions are most likely to be an inherited condition. They can often be seen in different generations in one family.",
          "NHS Fife explains that the mechanical structure of the foot, which runs in families, can make a person more prone to bunions. The way the foot works during walking can also affect the big toe joint.",
        ],
      },
      {
        heading: "Shoes",
        paragraphs: [
          "Shoes that are tight fitting in the toe area will make the problem worse. Arthritis UK says high heels, or shoes that are too small or pinch your feet, can lead to problems such as hard skin or bunions.",
        ],
      },
      {
        heading: "Arthritis and arches",
        paragraphs: [
          "Bunions are also associated with joint diseases, such as rheumatoid arthritis and osteoarthritis.",
          "When osteoarthritis affects the joint at the base of the big toe, a bunion may develop. Osteoarthritis in the big toe can cause the toe to lean towards the other toes.",
          "Arches that are higher or lower than average can increase the risk of other foot problems, including bunions.",
        ],
      },
      {
        heading: "Who gets them",
        paragraphs: [
          "Anyone can get bunions, even children. Women present more commonly than men, and this may be due to differences in the types of shoes they wear.",
        ],
      },
    ],
    helps: [
      "Make sure your shoes are the correct size and have enough room for your toes.",
      "Avoid shoes with high heels or pointy toes.",
      "Get your shoes professionally fitted if possible, as feet can change size.",
      "If you are concerned about your feet, or notice pain, a change in appearance or a change in how your foot works, seek advice from a podiatrist.",
    ],
    tryThisWeek: [
      "Check your shoes are the right size.",
      "Skip high heels and pointy toes.",
      "Get your shoes fitted if you can.",
    ],
    ask: "Is my bunion more likely to be down to my foot shape, my shoes or arthritis?",
    interactive: {
      kind: "risk-check",
      title: "What makes bunions more likely?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "family", label: "Bunions in the family", note: "Most likely an inherited condition, often seen in different generations of one family.", changeable: false },
        { id: "structure", label: "The shape of your foot", note: "The mechanical structure of the foot runs in families and can make a bunion more likely.", changeable: false },
        { id: "fit", label: "Shoes that do not fit properly", note: "Shoes that are tight fitting in the toe area make the problem worse.", changeable: true },
        { id: "heels", label: "High heels or pointy toes", note: "The NHS suggests avoiding shoes with high heels or pointy toes.", changeable: true },
        { id: "arthritis", label: "Osteoarthritis or rheumatoid arthritis", note: "Bunions are associated with these joint diseases.", changeable: false },
        { id: "arches", label: "Higher or lower arches than average", note: "Can increase the risk of other foot problems, including bunions.", changeable: false },
      ],
    },
    sources: [NHS_BUNIONS, INFORM_BUNION, KENT, FIFE, AU_OA_FOOT, AU_FOOT, RCPOD_ARTHRITIS],
    quiz: {
      question: "What does one NHS trust say bunions are most likely to be?",
      options: [{ text: "An inherited condition", right: true }, { text: "Caused only by high heels" }, { text: "An infection of the joint" }],
      why: "Although shoes are often thought to be the cause, one NHS trust says bunions are most likely to be an inherited condition.",
    },
  },
  {
    id: "bun-symptoms",
    kicker: "Understanding",
    question: "What symptoms can a bunion cause, and what else comes with it?",
    hook: "A lump, sore skin and shoes that rub. Sometimes the trouble spreads to the smaller toes too.",
    short: "The main symptom is a hard lump on the side of the foot, by the big toe, sometimes with hard, swollen or red skin and pain that is worse in shoes and when walking. The size of a bunion does not always match the pain. As it progresses, the smaller toes can become crowded, with corns or calluses.",
    sections: [
      {
        heading: "The main signs",
        paragraphs: [
          "The main symptoms of bunions are hard lumps on the sides of your feet, by your big toes. You may have hard or swollen skin, and the bunion may look red or darker than the skin around it.",
          "You may also have pain along the side or bottom of your feet. This is usually worse when wearing shoes and walking.",
        ],
      },
      {
        heading: "Size and pain do not always match",
        paragraphs: [
          "Not all bunions are painful. Some people have large bunions that are painless but cause difficulties with footwear, while others have relatively small ones that can be very painful.",
          "Bunions can cause pain and stiffness of the big toe joint, swelling of the joint and difficulty walking. The foot may become so wide that it can be difficult to find wide enough shoes.",
        ],
      },
      {
        heading: "Problems that can come with it",
        paragraphs: [
          "As a bunion progresses, the smaller toes can become crowded and take up abnormal positions, with painful corns or calluses. There may also be pain under the second toe knuckle joint, because the big toe is not working properly.",
          "People with bunions can be prone to bursitis, which often appears as a red, painful, swollen lump. Arthritis UK also links bunions to clawed, mallet and hammer toes, and says people with bunions commonly get neuromas, a shooting, stabbing or burning pain in the foot.",
        ],
      },
      {
        heading: "When it might be something else",
        paragraphs: [
          "Red, hot, swollen skin over the joint that comes and goes may be gout. Aching, swollen and stiff joints that are usually worse in the morning may be arthritis, and pain, bruising and swelling after hurting your toe may be a broken toe.",
          "If you think you may have broken your toe, do not try to treat it yourself. Contact NHS 111 to find out what to do.",
        ],
      },
    ],
    helps: [
      "See a GP if your bunions are getting worse, or the pain is stopping you doing your normal activities.",
      "See a GP if you have bunions and diabetes, as foot problems can be more serious if you have diabetes.",
      "Try adhesive padding on a swollen bursa to protect it from further friction and pressure.",
      "Wear softer, roomier footwear and place a cushioned pad over a corn or callus.",
      "Do not try to diagnose the cause of toe pain yourself.",
    ],
    tryThisWeek: [
      "See a GP if bunions are getting worse.",
      "Pad a swollen bursa against rubbing.",
      "Choose softer, roomier shoes.",
    ],
    ask: "Are my other toes, corns or hard skin linked to my bunion, and what would help them?",
    interactive: {
      kind: "signs",
      title: "What have you noticed?",
      intro: "Tick any you have noticed, to take to a GP or podiatrist.",
      signs: [
        "A hard lump by the big toe",
        "Big toe pointing towards the others",
        "Hard, swollen or red skin over the lump",
        "Pain along the side or bottom of the foot",
        "Pain that is worse in shoes or walking",
        "Stiffness in the big toe joint",
        "Crowded or bent smaller toes",
        "Corns or calluses",
        "Pain under the second toe",
        "Difficulty finding wide enough shoes",
      ],
      after: "Take this list to a GP or podiatrist. See a GP if the pain has not improved after a few weeks of home treatment, or if you have diabetes.",
      copyHeading: "Bunion symptoms I have noticed",
    },
    sources: [NHS_BUNIONS, INFORM_BUNION, FIFE, KENT, AU_FOOT, NHS_TOE],
    quiz: {
      question: "When is bunion pain usually worse?",
      options: [{ text: "When wearing shoes and walking", right: true }, { text: "Only at night" }, { text: "Only in cold weather" }],
      why: "You may also have pain along the side or bottom of your feet. This is usually worse when wearing shoes and walking.",
    },
  },
  {
    id: "bun-when-to-see-gp",
    kicker: "Understanding",
    question: "When should I see a GP or a podiatrist about a bunion?",
    hook: "Pads and wider shoes have not helped, or the pain is getting in the way. Here is when to get it looked at, and who can help.",
    short: "See a GP if bunion pain has not improved after a few weeks of home treatment, if it stops you doing normal activities, if your bunions are getting worse, or if you have diabetes. A GP might refer you to a podiatrist, a foot specialist, and in many areas you can refer yourself.",
    sections: [
      {
        heading: "When to see a GP",
        paragraphs: [
          "The NHS says to see a GP if pain from a bunion has not improved after trying home treatments for a few weeks, if the pain is stopping you doing your normal activities, or if your bunions are getting worse.",
          "See a GP too if you have bunions and diabetes, because foot problems can be more serious if you have diabetes.",
          "NHS inform suggests talking to a healthcare professional if your symptoms have not improved within 12 weeks of following its advice, or if they get worse.",
        ],
      },
      {
        heading: "What happens at the GP",
        paragraphs: [
          "A GP will look at your foot and ask you about your symptoms. They might refer you to a foot specialist, a podiatrist.",
          "A healthcare professional will usually make a diagnosis after examining your feet. Most of the time this can be done without scans, X-rays or blood tests, unless they think the pain is being caused by a condition such as arthritis.",
        ],
      },
      {
        heading: "What a podiatrist does",
        paragraphs: [
          "Podiatrists specialise in foot, ankle and leg healthcare. They are also known as chiropodists.",
          "A podiatrist can offer advice on padding, dressings, specialist insoles, splints and supports, and advice about footwear and exercise. A GP or podiatrist can advise about things to buy or have specially made to reduce bunion pain, such as insoles, toe spacers and toe splints.",
          "The Royal College of Podiatry says that if you are concerned about the health of your feet, or have pain, a change in appearance or a change in how your foot works, you should seek advice from a podiatrist.",
        ],
      },
      {
        heading: "Getting to a podiatrist",
        paragraphs: [
          "If you have bunions, you might be able to refer yourself directly to a podiatrist without seeing a GP. To find out, ask the reception staff at your GP surgery, check its website, contact your integrated care board, or search online for NHS podiatrists near you.",
          "Different areas have different rules for who can be referred to an NHS podiatrist. You can also pay to see one privately, and Arthritis UK advises making sure they are registered with the Health and Care Professions Council.",
        ],
      },
      {
        heading: "Signs that need help sooner",
        paragraphs: [
          "NHS inform says to phone 111 if you have a very high temperature, feel hot and shivery, and have redness or heat around your foot, as this can be a sign of infection.",
          "Arthritis UK advises speaking to your doctor or a footcare specialist if you have sores that are not healing, your skin has changed colour, or your foot is red, warm or swollen, as you may have an infection.",
        ],
      },
    ],
    helps: [
      "See a GP if pain from a bunion has not improved after trying home treatments for a few weeks.",
      "Ask the reception staff at your GP surgery whether you can refer yourself to an NHS podiatrist.",
      "If you see a podiatrist privately, check they are registered with the Health and Care Professions Council.",
      "See a GP if you have bunions and diabetes.",
    ],
    tryThisWeek: [
      "Book a GP if a few weeks have not helped.",
      "Ask about referring yourself to podiatry.",
      "Check a private podiatrist's registration.",
    ],
    ask: "Can I be referred to a podiatrist, and what would they be able to offer for my bunion?",
    interactive: {
      kind: "scenarios",
      title: "Who to see, and when",
      scenarios: [
        {
          id: "weeks",
          situation: "You have tried wide shoes, pads and painkillers for a few weeks, and the bunion still hurts.",
          options: [{ text: "Book a GP appointment", best: true }, { text: "Leave it for months and see" }],
          why: "See a GP if pain from a bunion has not improved after trying home treatments for a few weeks.",
        },
        {
          id: "diabetes",
          situation: "You have diabetes and notice a bunion forming.",
          options: [{ text: "See a GP", best: true }, { text: "Treat it yourself at home" }],
          why: "See a GP if you have bunions and diabetes, because foot problems can be more serious if you have diabetes.",
        },
        {
          id: "hot",
          situation: "Your foot is red and hot, and you feel hot and shivery.",
          options: [{ text: "Phone 111", best: true }, { text: "Wait for a routine appointment" }],
          why: "NHS inform says to phone 111, as this can be a sign of infection.",
        },
        {
          id: "self",
          situation: "You would like to see a podiatrist without a GP appointment first.",
          options: [{ text: "Ask your GP surgery about self-referral", best: true }, { text: "Assume it is not possible" }],
          why: "If you have bunions, you might be able to refer yourself directly to a podiatrist without seeing a GP.",
        },
      ],
    },
    sources: [NHS_BUNIONS, INFORM_BUNION, AU_FOOT, AU_OA_FOOT, RCPOD_WHAT, RCPOD_ARTHRITIS, INFORM_FOOT, RCPOD_HOME],
    quiz: {
      question: "What might you be able to do without seeing a GP first?",
      options: [{ text: "Refer yourself to a podiatrist", right: true }, { text: "Book bunion surgery" }, { text: "Order an X-ray" }],
      why: "If you have bunions, you might be able to refer yourself directly to a podiatrist without seeing a GP.",
    },
  },
  {
    id: "bun-shoes",
    kicker: "Recovery",
    question: "Which shoes help with a bunion?",
    hook: "Wide at the front, low at the heel, with laces or a strap. And bought in the afternoon.",
    short: "Wide shoes with a low heel and soft sole help, and shoes with laces or an adjustable strap can adjust to the width of the foot. Avoid high heels and tight, pointy shoes. Get shoes fitted if possible, with a gap of 1cm beyond the longest toe.",
    sections: [
      {
        heading: "The shape to look for",
        paragraphs: [
          "The NHS advises wide shoes with a low heel and soft sole, and not wearing high heels or tight, pointy shoes.",
          "Wearing the right footwear is one of the best things you can do to help, says NHS inform. Shoes with laces or an adjustable strap are best, as they can adjust to the width of your foot.",
        ],
      },
      {
        heading: "Room at the front",
        paragraphs: [
          "NHS Fife advises footwear that is wide and deep at the front of the shoe, with minimal stitching. It suggests a lace or strap over the instep to hold the foot secure, and avoiding backless, high-heeled shoes.",
          "A deep and roomy toe box at the front of the shoe helps prevent pressure on the toes and the joints on the side of the foot. NHS inform suggests a heel no more than 3cm high, broad enough to provide stability.",
        ],
      },
      {
        heading: "Buying shoes",
        paragraphs: [
          "Get your shoes professionally fitted if possible, as feet can change size. Try to get shoes with a gap of 1cm between the end of the shoe and your longest toe.",
          "Buy shoes in the afternoon, as your feet can swell up during the day. Stiff soles can help if you have bunions, and thick, cushioned soles reduce the stress that walking puts on your joints.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "Arthritis UK suggests avoiding shoes that do not support your feet, like ballet pumps and flip-flops. NHS inform also suggests avoiding slip-on shoes, shoes that are too big or small, and wearing slippers all day.",
          "If you use insoles, padding or arch supports, take them with you when buying new shoes, as you may need a larger shoe size to fit them in comfortably.",
        ],
      },
    ],
    helps: [
      "Wear wide shoes with a low heel and soft sole.",
      "Choose shoes with laces or an adjustable strap, which can adjust to the width of your foot.",
      "Look for a gap of 1cm between the end of the shoe and your longest toe.",
      "Buy shoes in the afternoon, as your feet can swell up during the day.",
      "Take any insoles, padding or arch supports with you when you buy new shoes.",
    ],
    tryThisWeek: [
      "Wear your widest low-heeled shoes.",
      "Shop for shoes in the afternoon.",
      "Check for a 1cm gap at the toe.",
    ],
    ask: "What should I look for in shoes for my feet, and would insoles change the size I need?",
    interactive: {
      kind: "scenarios",
      title: "In the shoe shop",
      scenarios: [
        {
          id: "time",
          situation: "You are planning a shoe shopping trip.",
          options: [{ text: "Go in the afternoon", best: true }, { text: "Go first thing in the morning" }],
          why: "Buy shoes in the afternoon, as your feet can swell up during the day.",
        },
        {
          id: "fastening",
          situation: "Two pairs fit. One slips on, and one has laces.",
          options: [{ text: "The pair with laces", best: true }, { text: "The slip-on pair" }],
          why: "Shoes with laces or an adjustable strap are best, as they can adjust to the width of your foot.",
        },
        {
          id: "toes",
          situation: "A pair feels snug across the toes.",
          options: [{ text: "Look for a deeper, roomier toe box", best: true }, { text: "Buy them anyway" }],
          why: "A deep and roomy toe box helps prevent pressure on the toes and the joints on the side of the foot.",
        },
        {
          id: "insoles",
          situation: "You wear insoles from a podiatrist.",
          options: [{ text: "Take them with you to try shoes on", best: true }, { text: "Leave them at home" }],
          why: "You may need a larger shoe size to fit them in comfortably.",
        },
      ],
    },
    sources: [NHS_BUNIONS, INFORM_BUNION, FIFE, INFORM_FEET, AU_OA_FOOT, AU_FOOT],
    quiz: {
      question: "How much space does Arthritis UK suggest between the end of the shoe and your longest toe?",
      options: [{ text: "About 1cm", right: true }, { text: "None at all" }, { text: "About 5cm" }],
      why: "Try to get shoes with a gap of 1cm between the end of the shoe and your longest toe.",
    },
  },
  {
    id: "bun-padding",
    kicker: "Recovery",
    question: "Do bunion pads, insoles and toe spacers help?",
    hook: "They can take the pressure off and stop the rubbing. What they cannot do is straighten the toe.",
    short: "Bunion pads from a pharmacy can stop shoes rubbing, and a GP or podiatrist can advise on insoles, toe spacers and splints. These aim to reduce pressure around the joint and ease symptoms, but they will not correct the position of the toe. More severe bunions can only be corrected by surgery.",
    sections: [
      {
        heading: "Bunion pads",
        paragraphs: [
          "Bunion pads are soft pads you put in shoes to stop them rubbing on a bunion. You can buy them from pharmacies.",
          "NHS inform notes that the repeated use of sticky padding can cause skin irritation, so it is not recommended as a regular solution. NHS Fife says bunion shields can prevent rubbing from footwear.",
        ],
      },
      {
        heading: "Insoles",
        paragraphs: [
          "A GP or podiatrist can advise about things you can buy or have specially made to reduce bunion pain, such as insoles, also called orthotics, toe spacers and toe supports, also called splints.",
          "NHS Fife suggests a simple arch support insole may help relieve symptoms for some people, but only in combination with a good fitting shoe. Arthritis UK says insoles that mould to the shape of your foot should only be used after getting advice from a healthcare professional.",
        ],
      },
      {
        heading: "Toe spacers, splints and braces",
        paragraphs: [
          "Insoles and toe spacers may help support your foot or reduce pressure between your toes. Gel or silicone wedges between the toes are among the non-surgical options one NHS trust lists.",
          "There is limited evidence to support bunion braces and splints, though they can occasionally give some relief, says NHS Fife. Bunion night splints have been shown to reduce the progression of a bunion in children.",
        ],
      },
      {
        heading: "What they can and cannot do",
        paragraphs: [
          "This advice aims to reduce pressure around the joint to relieve symptoms, but it will not correct the position of the toe.",
          "Early and mild bunions may respond to suitable footwear, bunion splints, padding, toe spacers or insoles and orthotics. More severe bunions can only be corrected by surgery.",
        ],
      },
    ],
    helps: [
      "Try bunion pads from a pharmacy to stop your shoes rubbing.",
      "Ask a pharmacist about insoles and pads for your shoes.",
      "Use a simple arch support insole together with a good fitting shoe.",
      "Avoid relying on sticky padding all the time, as repeated use can irritate the skin.",
      "Ask a GP or podiatrist about insoles, toe spacers or splints, bought or specially made.",
    ],
    tryThisWeek: [
      "Try a bunion pad in your shoes.",
      "Ask a pharmacist about pads and insoles.",
      "Pair insoles with well-fitting shoes.",
    ],
    ask: "Would insoles, toe spacers or a splint help my bunion, and which kind would suit me?",
    interactive: {
      kind: "flip-cards",
      title: "Pads and supports, card by card",
      intro: "Turn each card to see what each one does.",
      cards: [
        { id: "pads", front: "Bunion pads", when: "Soft pads in shoes, from pharmacies", back: "Stop shoes rubbing on a bunion. Repeated sticky padding can irritate the skin." },
        { id: "insoles", front: "Insoles (orthotics)", when: "Bought or specially made", back: "A simple arch support may help some people, but only with a good fitting shoe." },
        { id: "spacers", front: "Toe spacers", when: "Gel or silicone, between the toes", back: "May support the foot or reduce pressure between the toes." },
        { id: "splints", front: "Splints and braces", when: "Toe supports, some worn at night", back: "Limited evidence, though they can occasionally give some relief." },
        { id: "shields", front: "Shields", when: "Worn over the joint", back: "Can prevent rubbing from footwear." },
      ],
    },
    sources: [NHS_BUNIONS, INFORM_BUNION, FIFE, AU_OA_FOOT, KENT, GATESHEAD, NHS_TOE],
    quiz: {
      question: "What can pads, insoles and spacers not do?",
      options: [{ text: "Correct the position of the toe", right: true }, { text: "Reduce rubbing from shoes" }, { text: "Ease pressure around the joint" }],
      why: "This advice aims to reduce pressure around the joint to relieve symptoms, but it will not correct the position of the toe.",
    },
  },
  {
    id: "bun-pain-relief",
    kicker: "Recovery",
    question: "What eases bunion pain: painkillers, ice or heat?",
    hook: "A wrapped ice pack for a few minutes, a painkiller that suits you, and knowing when heat and ice are not a good idea.",
    short: "The NHS suggests paracetamol or ibuprofen, and holding a wrapped ice pack to the bunion for up to 5 minutes at a time. A wrapped heat pack may help pain and stiffness. If you have diabetes, poor circulation or loss of feeling in your feet, heat and ice are best avoided.",
    sections: [
      {
        heading: "Painkillers",
        paragraphs: [
          "The NHS suggests paracetamol or ibuprofen to ease bunion pain. NHS inform says pain medication can help you move more comfortably, which can help manage your symptoms.",
          "Paracetamol is a painkiller that can be used for joint swelling and stiffness. Ibuprofen is a non-steroidal anti-inflammatory drug, an NSAID, that helps relieve pain and reduce swelling.",
        ],
      },
      {
        heading: "Using ibuprofen safely",
        paragraphs: [
          "Ibuprofen can cause more side effects than paracetamol. If you can take paracetamol, the NHS says it is a good idea to try it before taking ibuprofen.",
          "Ibuprofen is not suitable for everyone. It may not be suitable if you have a stomach ulcer or have had one, have asthma, have a heart, liver or kidney condition, or are pregnant.",
          "Do not take ibuprofen tablets and capsules for more than 10 days unless a doctor advises it. Ibuprofen also comes as a gel or spray to rub gently into the painful area, and the NHS says to see a GP if your pain gets worse or does not go away.",
        ],
      },
      {
        heading: "Ice and heat",
        paragraphs: [
          "Hold an ice pack, or a bag of frozen peas, wrapped in a tea towel to the bunion for up to 5 minutes at a time.",
          "NHS Fife says a heat pack on a painful joint may help the pain and stiffness, and an ice pack may also help. Wrap either in a cloth, never put it directly on the skin, and stop if you notice redness, discolouration or blistering.",
          "If you have diabetes, poor circulation or loss of feeling in your feet, NHS Fife advises avoiding these heat and ice treatments.",
        ],
      },
      {
        heading: "Other things that ease the pain",
        paragraphs: [
          "Wide shoes with a low heel and soft sole, bunion pads, and losing weight if you are overweight can also help ease bunion pain.",
          "If you find exercising painful, Arthritis UK says it may help to take some paracetamol before you start.",
        ],
      },
    ],
    helps: [
      "Take paracetamol or ibuprofen, and always check the packet or leaflet that comes with it.",
      "If you can take paracetamol, try it before taking ibuprofen.",
      "Hold an ice pack wrapped in a tea towel to the bunion for up to 5 minutes at a time.",
      "Try a heat pack, wrapped in a cloth, on a painful, stiff joint.",
      "Avoid heat and ice treatments if you have diabetes, poor circulation or loss of feeling in your feet.",
      "See a GP if your pain gets worse or does not go away.",
    ],
    tryThisWeek: [
      "Try paracetamol first, if you can.",
      "Use a wrapped ice pack for 5 minutes.",
      "Try a wrapped heat pack for stiffness.",
    ],
    ask: "Which painkiller suits me best, and is it safe for me to use ice or heat on my foot?",
    interactive: {
      kind: "scenarios",
      title: "Easing a sore bunion",
      scenarios: [
        {
          id: "evening",
          situation: "Your bunion aches after a long day in shoes.",
          options: [{ text: "A wrapped ice pack, up to 5 minutes", best: true }, { text: "Ice straight on the skin for an hour" }],
          why: "Hold an ice pack, or a bag of frozen peas, wrapped in a tea towel to the bunion for up to 5 minutes at a time.",
        },
        {
          id: "which",
          situation: "You can take both paracetamol and ibuprofen.",
          options: [{ text: "Try paracetamol first", best: true }, { text: "Start with ibuprofen" }],
          why: "Ibuprofen can cause more side effects than paracetamol. If you can take paracetamol, it is a good idea to try it first.",
        },
        {
          id: "diabetes",
          situation: "You have diabetes and some loss of feeling in your feet.",
          options: [{ text: "Avoid heat and ice, and see a GP", best: true }, { text: "Use a hot water bottle on the joint" }],
          why: "NHS Fife advises avoiding heat and ice if you have diabetes, poor circulation or loss of feeling in your feet.",
        },
        {
          id: "days",
          situation: "You have taken ibuprofen tablets for 10 days and the pain is no better.",
          options: [{ text: "See a GP", best: true }, { text: "Keep taking them" }],
          why: "Do not take ibuprofen tablets for more than 10 days unless a doctor advises it. See a GP if pain gets worse or does not go away.",
        },
      ],
    },
    sources: [NHS_BUNIONS, INFORM_BUNION, NHS_PARACETAMOL, NHS_IBUPROFEN, FIFE, AU_OA_FOOT],
    quiz: {
      question: "How long does the NHS suggest holding a wrapped ice pack to a bunion?",
      options: [{ text: "Up to 5 minutes at a time", right: true }, { text: "An hour at a time" }, { text: "Overnight" }],
      why: "Hold an ice pack, or a bag of frozen peas, wrapped in a tea towel to the bunion for up to 5 minutes at a time.",
    },
  },
  {
    id: "bun-surgery",
    kicker: "Recovery",
    question: "What happens in bunion surgery, and how long is the recovery?",
    hook: "Usually home the same day, then weeks with the foot raised and a special shoe. Healing goes on for a year.",
    short: "Surgery may be offered if bunions are very painful or have a big effect on your life, not just to change how the feet look. The most common operation is an osteotomy, and most people go home the same day. Recovery takes time: rest with the feet raised for at least 2 weeks, no driving for 6 to 8 weeks and no sport for 3 to 6 months.",
    sections: [
      {
        heading: "When surgery is offered",
        paragraphs: [
          "A GP may refer you for surgery if your bunions are very painful or they are having a big effect on your life. Surgery is not done just to improve how your feet look.",
          "More than 120 operations have been reported for treating bunions. The type of surgery recommended is based on you, your bunion and your lifestyle, so not everyone is offered exactly the same operation.",
        ],
      },
      {
        heading: "What happens",
        paragraphs: [
          "The most common surgery for bunions is an osteotomy. A small cut or cuts are made over the big toe, the bunion is cut or scraped away, and the toe bone is straightened and fixed in place with metal screws or staples, which are often left in permanently.",
          "Surgery is usually done under general anaesthetic, but sometimes under local anaesthetic, where you are awake but feel no pain. Most people go home the same day, and Arthritis UK says most surgery takes up to an hour.",
        ],
      },
      {
        heading: "The weeks after",
        paragraphs: [
          "You will usually need to rest and keep your feet raised as much as possible for at least 2 weeks. Arthritis UK says your foot will be bandaged and you will need to wear a Velcro surgical shoe for four to six weeks afterwards.",
          "The NHS says you will usually need to avoid driving for 6 to 8 weeks, stay off work for 2 to 12 weeks and avoid sports for 3 to 6 months. Swelling is a normal part of the healing process and can last up to a few months.",
          "One NHS trust says residual swelling should be very slight by six months, although healing continues for a year.",
        ],
      },
      {
        heading: "What to expect afterwards",
        paragraphs: [
          "After the operation your toes might be weaker or stiffer than before, and may not be perfectly straight. Your feet may still be painful, and bunions sometimes come back after surgery.",
          "In foot surgery, complications are uncommon and most resolve without permanent disability or pain. They can include infection, delayed healing of the skin, stiffness and blood clots.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Arthritis UK says to speak to your doctor straight away if you notice signs of infection, including increased pain, redness, the area feeling warmer than usual, or an unpleasant smell. One NHS trust advises contacting the surgical department with any concerns, or out of hours your GP or local A&E.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you think you have a blood clot in your leg, such as throbbing pain or swelling in one leg. Call 999 or go to A&E if you have pain and swelling and you feel short of breath or have chest pain, and do not drive yourself to A&E.",
        ],
      },
    ],
    helps: [
      "Rest and keep your feet raised as much as possible for at least 2 weeks.",
      "Have a roomy shoe, such as a running trainer, ready before surgery for when the bandage comes off.",
      "Before the operation, choose clothes that are easy to put on, stock up your freezer and arrange help at home.",
      "Use an ice pack and keep your leg raised to help manage swelling, as your hospital team advises.",
      "Drive only when you can safely do an emergency stop, and tell your insurance company about the surgery.",
    ],
    tryThisWeek: [
      "Keep your foot raised.",
      "Get a roomy trainer ready.",
      "Arrange help at home.",
    ],
    ask: "Which operation would you suggest for my bunion, and what will my recovery look like week by week?",
    interactive: {
      kind: "timeline",
      title: "The months after bunion surgery",
      steps: [
        { id: "day", when: "The same day", title: "Home from hospital", points: ["Most people go home the same day.", "The foot is bandaged, in a surgical shoe."] },
        { id: "two", when: "First 2 weeks", title: "Rest and raise", points: ["Keep your feet raised as much as possible.", "Pain is usually worse for the first two days."] },
        { id: "six", when: "About 6 weeks", title: "Out of the surgical shoe", points: ["The post-operative shoe is normally worn for 6 weeks.", "Driving is usually avoided for 6 to 8 weeks."] },
        { id: "months", when: "3 to 6 months", title: "Back to sport", points: ["Avoid sports for 3 to 6 months.", "Some slight swelling may remain."] },
        { id: "year", when: "A year", title: "Healing complete", points: ["Healing continues for a year.", "Bunions sometimes come back after surgery."] },
      ],
    },
    sources: [NHS_BUNIONS, AU_FOOT_SURGERY, KENT, GATESHEAD, NHS_DVT],
    quiz: {
      question: "What is bunion surgery not done for?",
      options: [{ text: "Just to improve how the feet look", right: true }, { text: "Very painful bunions" }, { text: "Bunions with a big effect on life" }],
      why: "Surgery is not done just to improve how your feet look.",
    },
  },
  {
    id: "bun-walking",
    kicker: "Living well",
    question: "Can I keep walking and staying active with a bunion?",
    hook: "Comfortable shoes, a brisk ten minutes, and a few simple foot exercises.",
    short: "Walking is simple, free and one of the easiest ways to get more active, and keeping active is the best thing you can do for your general health. Comfortable, supportive shoes help. Exercises to strengthen the foot muscles can help in managing a bunion.",
    sections: [
      {
        heading: "Why keep moving",
        paragraphs: [
          "Walking is simple, free and one of the easiest ways to get more active. The Royal College of Podiatry says walking boosts your mental and physical wellbeing, and fits around even the busiest of lifestyles.",
          "NHS inform says keeping active is the single best thing you can do for your general health. It can keep your other muscles and joints strong and flexible.",
        ],
      },
      {
        heading: "Shoes for walking",
        paragraphs: [
          "Any shoes or trainers that are comfortable, provide adequate support and do not cause blisters will do. If you walk to work, you could wear a comfy pair of shoes and change when you get there.",
          "With bunions, the NHS advises wide shoes with a low heel and soft sole. Arthritis UK adds that thick, cushioned soles reduce the stress that walking puts on your joints.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "A brisk 10-minute daily walk has lots of health benefits and counts towards the 150 minutes of weekly exercise recommended for adults aged 19 to 64.",
          "If you are not very active but are able to walk, increase your walking distance gradually. Swimming could be a good option, because it does not put weight on your toes, feet and ankles but still helps you keep fit.",
        ],
      },
      {
        heading: "Exercises for the feet",
        paragraphs: [
          "NHS inform says exercises to strengthen the muscles in the foot can help in managing a bunion. Arthritis UK suggests starting slowly and building up gradually if you are new to exercise.",
          "One of the exercises Arthritis UK describes is a toe spread. With your feet resting on the floor, spread your toes apart as far as possible, hold for five seconds and repeat 10 times.",
          "It is normal to feel some slight aches as you move your foot. If movement makes it feel worse or causes bursts of more intense pain, stop and consult a healthcare professional.",
        ],
      },
    ],
    helps: [
      "Take a brisk 10-minute walk each day.",
      "Wear comfortable, supportive shoes or trainers that do not cause blisters.",
      "Increase your walking distance gradually.",
      "Try swimming, which does not put weight on your toes, feet and ankles.",
      "Get advice from a healthcare professional if you have any concerns about starting a new exercise plan.",
    ],
    tryThisWeek: [
      "Walk briskly for 10 minutes a day.",
      "Wear comfortable, supportive shoes.",
      "Build up your distance gradually.",
    ],
    ask: "Which exercises would help my feet, and is there any activity I should go easy on?",
    interactive: {
      kind: "scenarios",
      title: "Staying active with a bunion",
      scenarios: [
        {
          id: "ache",
          situation: "Your foot aches slightly as you start to move it.",
          options: [{ text: "Carry on gently", best: true }, { text: "Stop all activity for good" }],
          why: "It is normal to feel some slight aches as you move your foot.",
        },
        {
          id: "sharp",
          situation: "An exercise causes bursts of more intense pain.",
          options: [{ text: "Stop and consult a healthcare professional", best: true }, { text: "Push through it" }],
          why: "If movement makes it feel worse or causes bursts of more intense pain, stop and consult a healthcare professional.",
        },
        {
          id: "pool",
          situation: "Long walks are hard on your feet at the moment.",
          options: [{ text: "Try swimming", best: true }, { text: "Give up exercise" }],
          why: "Swimming does not put weight on your toes, feet and ankles but still helps you keep fit.",
        },
      ],
    },
    sources: [NHS_WALKING, RCPOD_WALKING, INFORM_FOOT, NHS_BUNIONS, AU_OA_FOOT, INFORM_BUNION, AU_EX_FEET, AU_FOOT],
    quiz: {
      question: "How long is the daily brisk walk the NHS says has lots of health benefits?",
      options: [{ text: "10 minutes", right: true }, { text: "2 hours" }, { text: "1 minute" }],
      why: "A brisk 10-minute daily walk has lots of health benefits and counts towards the 150 minutes of weekly exercise.",
    },
  },
  {
    id: "bun-work-occasions",
    kicker: "Living well",
    question: "What about work shoes, and shoes for special occasions?",
    hook: "Uniform shoes, a long commute, a wedding. The same principles apply, and there is help if work is the problem.",
    short: "Insoles can make shoes you need for work more comfortable, and you can wear comfy shoes for the journey and change at work. The NHS advises against high heels and tight, pointy shoes, and NHS inform suggests a heel no more than 3cm high. Access to Work can help some people stay in work.",
    sections: [
      {
        heading: "Shoes for work",
        paragraphs: [
          "If you need to wear specific footwear for work, Arthritis UK says insoles may make it more comfortable, and a podiatrist can give advice. You may also be able to have a change made to your own shoes, such as a rocker added, which often makes walking easier.",
          "If you walk to work, the NHS suggests wearing your usual work clothes with a comfy pair of shoes, and changing shoes when you get into work.",
        ],
      },
      {
        heading: "Heels and special occasions",
        paragraphs: [
          "The NHS advises not wearing high heels or tight, pointy shoes with bunions. Arthritis UK says high heels, or shoes that are too small or pinch your feet, can lead to problems such as hard skin or bunions.",
          "When replacing shoes, NHS inform suggests a heel no more than 3cm high and broad enough to provide stability, with laces, buckles or strap fastenings that hold the shoe securely.",
          "Surgery can affect the shoes you wear later. One NHS trust says the toe may become stiff after a bunion operation, which could affect the heel height of your shoes, and Arthritis UK says fusion surgery on the big toe joint for hallux rigidus means high-heeled shoes can no longer be worn.",
        ],
      },
      {
        heading: "Time off work",
        paragraphs: [
          "Bunions can sometimes mean you need to take some time off work to help recovery. How long depends on your condition and your role at work.",
          "NHS inform says you do not need to be symptom free before you consider returning to work. Continuing to go to work, or returning as soon as is possible for you, will help your recovery.",
          "After bunion surgery, the NHS says people usually stay off work for 2 to 12 weeks. One NHS trust says a return after six weeks depends on the type of work and the footwear it needs.",
        ],
      },
      {
        heading: "Support at work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. It could give a grant to help pay for things like specialist equipment, or the costs of travelling to work if you cannot use public transport.",
          "Access to Work will not pay for reasonable adjustments. These are the changes your employer must legally make to support you to do your job.",
        ],
      },
    ],
    helps: [
      "Ask a podiatrist about insoles for shoes you have to wear for work.",
      "Wear comfy shoes for the journey and change shoes when you get into work.",
      "Avoid high heels and tight, pointy shoes.",
      "When replacing shoes, look for a heel no more than 3cm high.",
      "Check whether Access to Work could help, such as with the costs of travelling to work.",
    ],
    tryThisWeek: [
      "Ask about insoles for work shoes.",
      "Change shoes when you get to work.",
      "Choose a heel of 3cm or less.",
    ],
    ask: "Could insoles or a change to my shoes help with the footwear I need for work?",
    interactive: {
      kind: "scenarios",
      title: "Work days and special days",
      scenarios: [
        {
          id: "uniform",
          situation: "Your job needs a particular kind of shoe, and it rubs your bunion.",
          options: [{ text: "Ask a podiatrist about insoles", best: true }, { text: "Put up with the pain" }],
          why: "If you need to wear specific footwear for work, insoles may make it more comfortable. A podiatrist can give advice.",
        },
        {
          id: "commute",
          situation: "You have a walk to the office each morning.",
          options: [{ text: "Wear comfy shoes and change at work", best: true }, { text: "Walk in your tightest smart shoes" }],
          why: "You could wear your usual work clothes with a comfy pair of shoes and change shoes when you get into work.",
        },
        {
          id: "event",
          situation: "You are choosing shoes for a special occasion.",
          options: [{ text: "A low, broad heel with room for the toes", best: true }, { text: "High heels with pointed toes" }],
          why: "The NHS advises not wearing high heels or tight, pointy shoes. NHS inform suggests a heel no more than 3cm high.",
        },
        {
          id: "return",
          situation: "Your bunion still aches a little, but you feel able to work.",
          options: [{ text: "Consider going back when it is possible for you", best: true }, { text: "Wait until every symptom has gone" }],
          why: "You do not need to be symptom free before you consider returning to work.",
        },
      ],
    },
    sources: [NHS_BUNIONS, AU_OA_FOOT, INFORM_FEET, NHS_WALKING, INFORM_BUNION, KENT, AU_FOOT_SURGERY, GOV_ATW],
    quiz: {
      question: "According to NHS inform, do you need to be symptom free before returning to work?",
      options: [{ text: "No", right: true }, { text: "Yes, completely" }, { text: "Only after surgery" }],
      why: "NHS inform says you do not need to be symptom free before you consider returning to work.",
    },
  },
  {
    id: "bun-skin",
    kicker: "Living well",
    question: "How do I look after corns, hard skin and my feet with a bunion?",
    hook: "Pressure and rubbing build hard skin. A pumice stone, a moisturiser and the right shoes all help.",
    short: "Corns and calluses are hard or thick areas of skin caused by pressure or rubbing, and bunions can be one cause. Soaking, gently filing and moisturising help, as do cushioned socks and shoes that do not rub. If you have diabetes or circulation problems, see a GP or foot specialist instead of treating them yourself.",
    sections: [
      {
        heading: "Why bunions and hard skin go together",
        paragraphs: [
          "Corns and calluses are hard or thick areas of skin that can be painful. They are caused by pressure or rubbing, for example from shoes that are the wrong size or a problem with the bones in your feet.",
          "Arthritis UK says corns and calluses can sometimes be caused by other problems with your feet, such as bunions. With a bunion itself, you may have hard or swollen skin over the lump.",
        ],
      },
      {
        heading: "Corns and calluses",
        paragraphs: [
          "Corns are small lumps of hard skin. Calluses are larger patches of rough, thick skin.",
          "Arthritis UK says corns develop where calluses have been left untreated, and often cause a burning sensation. Corns and calluses usually grow back within four to six weeks unless the pressure on the area is reduced.",
        ],
      },
      {
        heading: "What you can do",
        paragraphs: [
          "Soak corns and calluses in warm water to soften them, regularly use a pumice stone or foot file to remove hard skin, and moisturise to help keep skin soft. Do not try to cut off corns or calluses yourself.",
          "Wear thick, cushioned socks and wide, well-fitting, supportive shoes with a low heel and soft sole that do not rub. Soft insoles, heel pads and a cushioned pad over a corn or callus can also help.",
        ],
      },
      {
        heading: "Everyday foot care",
        paragraphs: [
          "Try to check your feet every day, so you notice any problems quickly, and wash them every day. Dry them well, including between your toes, and moisturise all over except between the toes.",
          "Cut your toenails regularly, straight across the nail. Cutting at an angle or down the sides could lead to ingrown toenails.",
        ],
      },
      {
        heading: "When not to treat it yourself",
        paragraphs: [
          "If you have diabetes, problems with your circulation, a weakened immune system, or are an older person, do not try to treat corns and calluses yourself. See a GP or foot specialist.",
          "See a GP if a corn or callus bleeds or has any pus or discharge, has not improved after 3 weeks of treating it at home, or the pain is severe. A podiatrist may cut away the corn or callus, or provide specially made soft pads or insoles to take pressure off the painful area.",
        ],
      },
    ],
    helps: [
      "Soak hard skin in warm water, then use a pumice stone or foot file.",
      "Moisturise to help keep the skin soft, but not between the toes.",
      "Wear thick, cushioned socks and shoes that do not rub.",
      "Do not try to cut off corns or calluses yourself.",
      "Check and wash your feet every day.",
    ],
    tryThisWeek: [
      "Use a pumice stone after soaking.",
      "Moisturise, but not between the toes.",
      "Check your feet every day.",
    ],
    ask: "Is it safe for me to treat this hard skin myself, or should a podiatrist look at it?",
    interactive: {
      kind: "signs",
      title: "Foot changes to get checked",
      intro: "Tick any that apply. These are reasons to see a GP or podiatrist rather than treat it yourself.",
      signs: [
        "A corn or callus that bleeds",
        "Pus or discharge",
        "No better after 3 weeks of home care",
        "Severe pain, or pain stopping normal activities",
        "I have diabetes or circulation problems",
        "Cuts or wounds that will not heal",
        "A new change in colour or temperature",
      ],
      after: "See a GP or a podiatrist. If you have diabetes, circulation problems or a weakened immune system, do not try to treat corns and calluses yourself.",
      copyHeading: "Foot changes I have noticed",
    },
    sources: [NHS_CORNS, AU_OA_FOOT, NHS_BUNIONS, AU_FOOT, INFORM_FEET],
    quiz: {
      question: "Who does the NHS say should not treat corns and calluses themselves?",
      options: [{ text: "People with diabetes", right: true }, { text: "Anyone under 40" }, { text: "People who walk a lot" }],
      why: "If you have diabetes, problems with your circulation, a weakened immune system, or are an older person, do not try to treat corns and calluses yourself.",
    },
  },
  {
    id: "bun-family",
    kicker: "Living well",
    question: "Bunions run in my family. Will I or my children get them?",
    hook: "Bunions often show up across generations. The structure of the foot can run in families, but shoes still matter.",
    short: "Bunions are most likely to be an inherited condition and can often be seen in different generations of one family, through the structure of the foot. A family history is one of the contributing factors. Shoes of the correct size with room for the toes help, as tight shoes make the problem worse.",
    sections: [
      {
        heading: "A family pattern",
        paragraphs: [
          "Although shoes are often thought to be the cause, bunions are most likely to be an inherited condition. They can often be seen in different generations in one family.",
          "NHS inform lists a family history as one of the contributing factors, alongside a joint problem and poorly fitting footwear. The exact cause of bunions is unknown.",
        ],
      },
      {
        heading: "What may be passed on",
        paragraphs: [
          "NHS Fife explains that the mechanical structure of the foot is genetic, or runs in families, and can make a person more prone to developing a bunion. Anyone can get one, but they tend to be more common in women.",
          "Arthritis UK says the risk of osteoarthritis is linked to genetics, or having a family member with osteoarthritis. Osteoarthritis in the big toe can cause the toe to lean towards the other toes.",
        ],
      },
      {
        heading: "Children and later life",
        paragraphs: [
          "Anyone can get bunions, even children. Bunion night splints have been shown to reduce the progression of a bunion in children.",
          "Most evidence indicates that bunions are a progressive condition which worsens over time, so it is more common to see them in middle and later age.",
        ],
      },
      {
        heading: "What a family can do",
        paragraphs: [
          "The NHS suggests making sure shoes are the correct size and have enough room for the toes, and avoiding shoes with high heels or pointy toes. Shoes that are tight fitting in the toe area will make the problem worse.",
          "Arthritis UK suggests getting shoes professionally fitted if possible, as feet can change size.",
        ],
      },
    ],
    helps: [
      "Make sure shoes are the correct size and have enough room for the toes.",
      "Avoid shoes with high heels or pointy toes.",
      "Get shoes professionally fitted if possible, as feet can change size.",
      "See a GP if your bunions are getting worse.",
    ],
    tryThisWeek: [
      "Check shoes are the right size.",
      "Skip high heels and pointy toes.",
      "Get shoes fitted when you can.",
    ],
    ask: "With bunions in my family, is there anything I can do to look after my feet or my children's?",
    interactive: {
      kind: "risk-check",
      title: "Your family picture",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "family", label: "A parent or grandparent with bunions", note: "Bunions can often be seen in different generations in one family.", changeable: false },
        { id: "structure", label: "A similar foot shape", note: "The mechanical structure of the foot is genetic and can make a bunion more likely.", changeable: false },
        { id: "oa", label: "Osteoarthritis in the family", note: "Osteoarthritis risk is linked to genetics, and in the big toe it can make the toe lean.", changeable: false },
        { id: "tight", label: "Shoes tight in the toe area", note: "Shoes that are tight fitting in the toe area will make the problem worse.", changeable: true },
        { id: "heels", label: "High heels or pointy toes", note: "The NHS suggests avoiding shoes with high heels or pointy toes.", changeable: true },
      ],
    },
    sources: [KENT, INFORM_BUNION, FIFE, AU_OA_FOOT, NHS_BUNIONS],
    quiz: {
      question: "Where can bunions often be seen?",
      options: [{ text: "In different generations of one family", right: true }, { text: "Only in people who wear heels" }, { text: "Only in older men" }],
      why: "Bunions are most likely to be an inherited condition. They can often be seen in different generations in one family.",
    },
  },
];
