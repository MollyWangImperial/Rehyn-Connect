import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Broken ankle page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's `sources`;
// nothing is added that those pages do not say. The NHS page on a broken ankle is short, so most of the detail comes
// from NHS hospital trusts' own patient leaflets on ankle fractures (on their nhs.uk sites), NHS inform (the NHS 24
// health site for Scotland), the Royal Osteoporosis Society and the Chartered Society of Physiotherapy. Urgent advice
// is worded as the NHS words it: A&E for an ankle at an odd angle, a bone sticking out or blue, white or numb toes;
// 999 or A&E for a leg clot with breathlessness or chest pain, for sudden breathing problems and for sudden severe
// pain; NHS 111 for the other warning signs. Exercises are described only as the leaflets describe them, with their
// advice to follow your own physiotherapist and healthcare professional. General information only; it never
// replaces what a person's own fracture clinic, surgeon, physiotherapist or GP tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const nhsi = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/${path}` });
const ros = (label: string, path: string): LearnSource => ({ label: `Royal Osteoporosis Society: ${label}`, url: `https://theros.org.uk/information-and-support/${path}` });

const NHS_ANKLE = nhs("Broken ankle", "conditions/broken-ankle/");
const NHS_SPRAINS = nhs("Sprains and strains", "conditions/sprains-and-strains/");
const NHS_XRAY = nhs("X-ray", "tests-and-treatments/x-ray/");
const NHS_DVT = nhs("DVT (deep vein thrombosis)", "conditions/deep-vein-thrombosis-dvt/");
const NHS_PE = nhs("Pulmonary embolism", "conditions/pulmonary-embolism/");
const NHS_COMPARTMENT = nhs("Compartment syndrome", "conditions/compartment-syndrome/");
const NHS_CRPS = nhs("Complex regional pain syndrome", "conditions/complex-regional-pain-syndrome/");
const NHS_GADGETS = nhs("Household gadgets and equipment to make life easier", "social-care-and-support/care-services-equipment-and-care-homes/household-gadgets-and-equipment-to-make-life-easier/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");

const NHSI_AVULSION = nhsi("Ankle avulsion fracture", "illnesses-and-conditions/muscle-bone-and-joints/leg-and-foot-problems-and-conditions/ankle-avulsion-fracture/");
const NHSI_SPRAIN = nhsi("Ankle sprain", "illnesses-and-conditions/muscle-bone-and-joints/leg-and-foot-problems-and-conditions/ankle-sprain/");
const NHSI_EX_ANKLE = nhsi("Exercises for ankle pain", "illnesses-and-conditions/muscle-bone-and-joints/leg-and-foot-problems-and-conditions/exercises-for-ankle-pain/");
const NHSI_CRUTCHES = nhsi("Using crutches", "tests-and-treatments/medicines-and-medical-aids/walking-aids/using-crutches/");

// NHS hospital trusts' patient leaflets on ankle fractures.
const UHCW_STABLE: LearnSource = { label: "University Hospitals Coventry and Warwickshire NHS Trust: Stable ankle fractures", url: "https://www.uhcw.nhs.uk/download/clientfiles/files/Patient%20Information%20Leaflets/Trauma%20and%20Neuro%20services/Trauma%20and%20Orthopaedics/Stable%20ankle%20fractures.pdf" };
const UHCW_UNSTABLE: LearnSource = { label: "University Hospitals Coventry and Warwickshire NHS Trust: Unstable ankle fractures", url: "https://www.uhcw.nhs.uk/download/clientfiles/files/Patient%20Information%20Leaflets/Trauma%20and%20Neuro%20services/Trauma%20and%20Orthopaedics/Unstable%20ankle%20fractures.pdf" };
const RUH: LearnSource = { label: "Royal United Hospitals Bath NHS Foundation Trust: Advice after breaking your ankle", url: "https://www.ruh.nhs.uk/patients/patient_information/ORT037_Advice_after_breaking_your_ankle.pdf" };
const NUH: LearnSource = { label: "Nottingham University Hospitals NHS Trust: Stable ankle fracture or sprain", url: "https://www.nuh.nhs.uk/download/doc/docm93jijm4n9874.pdf?ver=32899" };
const SFH: LearnSource = { label: "Sherwood Forest Hospitals NHS Foundation Trust: Ankle fractures", url: "https://www.sfh-tr.nhs.uk/media/taodzdjw/pil202405-03-anf-ankle-fractures.pdf" };
const PLYMOUTH: LearnSource = { label: "University Hospitals Plymouth NHS Trust: Ankle fractures", url: "https://www.plymouthhospitals.nhs.uk/display-pil/pil-ankle-fractures-3956" };
const GEH: LearnSource = { label: "George Eliot Hospital NHS Trust: Ankle fracture", url: "https://www.geh.nhs.uk/patients-and-visitors/patients/patient-leaflets/ankle-fracture" };
const NTH: LearnSource = { label: "North Tees and Hartlepool NHS Foundation Trust: Ankle fracture", url: "https://www.nth.nhs.uk/resources/ankle-fracture/" };
const CHELWEST: LearnSource = { label: "Chelsea and Westminster Hospital NHS Foundation Trust: Advice and information following ankle fracture surgery", url: "https://www.chelwest.nhs.uk/your-visit/patient-leaflets/surgery-services/advice-and-information-following-ankle-fracture-surgery" };
const WORCS: LearnSource = { label: "Worcestershire Acute Hospitals NHS Trust: Ankle fracture", url: "https://www.worcsacute.nhs.uk/leaflets/ankle-fracture/" };

const ROS_BROKEN_BONES = ros("Broken hips, wrists and other bones", "living-with-osteoporosis-and-broken-bones/broken-hips-wrists-and-other-bones/");
const ROS_EVERYDAY = ros("Getting back to everyday activities", "living-with-osteoporosis-and-broken-bones/moving-and-lifting-safely/getting-back-to-everyday-activities-after-a-broken-bone/");
const CSP_REHAB: LearnSource = { label: "Chartered Society of Physiotherapy: Rehabilitation", url: "https://www.csp.org.uk/conditions/rehabilitation" };

export const ankleFractureAnswers: LearnArticle[] = [
  {
    id: "afx-what-it-is",
    kicker: "Understanding",
    question: "What is a broken ankle?",
    hook: "Three bones meet at the ankle. A twist or a fall can break one or more of them, most often the thin bone on the outside.",
    short: "A broken ankle is a break in one or more of the three bones at the ankle: the tibia, the fibula and the talus. Ankle fractures usually involve the fibula, the thinner bone on the outside of the lower leg. It is not just the bone: the muscles, ligaments, tendons and nerves around it are injured too.",
    sections: [
      {
        heading: "Three bones meet at the ankle",
        paragraphs: [
          "A fracture is the same as a break. The ankle involves three bones: the tibia and fibula, which make up the lower part of your leg, and the talus, the top bone of your foot. You may have broken one or more of these bones.",
          "The tibia is the thicker shin bone, and the fibula is the thinner shin bone on the outside of your lower leg. There may also be damage to the ligaments, and a broken ankle is a common fracture.",
        ],
      },
      {
        heading: "How the ankle breaks",
        paragraphs: [
          "A fracture happens when more force is applied to the bone than it can take. The most common cause is the foot turning inwards, or an impact injury.",
          "Ankle fractures usually involve the fibula. The break can be below, at or above the ankle joint, and these breaks may be called Weber fractures, labelled A, B or C by where the break is. Sometimes the tibia is broken too.",
        ],
      },
      {
        heading: "What it feels like",
        paragraphs: [
          "Common symptoms include swelling around the ankle and foot, pain in or around the ankle straight after the injury, and bruising that spreads into the foot. You may not be able to put weight through your ankle, and it may look out of place.",
          "You may not realise straight away that you have broken your ankle. A health professional will examine it, and an X-ray will be used to confirm if there is a break.",
        ],
      },
      {
        heading: "More than the bone",
        paragraphs: [
          "When you have a fracture, it is not just the bone that is affected. You will also have injured some of the soft tissues around it, such as the muscles, ligaments, tendons and nerves.",
          "Do not worry if you are not sure whether your ankle is broken. Get it checked by a doctor, as a broken ankle may need treatment to heal properly.",
        ],
      },
    ],
    helps: [
      "Get medical advice as soon as possible if you think you have broken your ankle.",
      "Go to A&E if your ankle is at an odd angle, a bone is sticking out, you have a bad cut or wound, you are in severe pain, or your toes look blue or white or feel numb.",
      "Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
      "While you wait, raise your ankle if possible and gently hold an ice pack wrapped in a towel on it for 15 to 20 minutes every 2 to 3 hours.",
      "Do not eat or drink anything in case you need surgery, and try not to move or put weight on your ankle.",
    ],
    tryThisWeek: [
      "Get a possible break checked.",
      "Know when to go to A&E.",
      "Raise it and use a wrapped ice pack.",
    ],
    ask: "Which bones have I broken, and is my fracture stable?",
    interactive: {
      kind: "signs",
      title: "Signs of a broken ankle",
      intro: "Tick any you notice after the injury. Any of them means getting it checked.",
      signs: ["Swelling around the ankle and foot", "Pain straight after the injury", "Bruising spreading into the foot", "Cannot put weight through the ankle", "Ankle looks out of place", "Toes blue or white, or numb"],
      after: "Get medical advice as soon as possible. Go to A&E if your ankle is at an odd angle, a bone is sticking out, you are in severe pain or your toes look blue or white or feel numb. Do not drive yourself: ask someone to drive you or call 999.",
      copyHeading: "What I noticed after the injury",
    },
    sources: [UHCW_STABLE, NTH, SFH, RUH, NHS_ANKLE, NHSI_AVULSION],
    quiz: {
      question: "Which bone is usually involved in an ankle fracture?",
      options: [{ text: "The fibula", right: true }, { text: "The kneecap" }, { text: "A bone in the toes" }],
      why: "Ankle fractures usually involve the fibula.",
    },
  },
  {
    id: "afx-sprain-or-break",
    kicker: "Diagnosis",
    question: "Is it a sprain or a break, and how can you tell?",
    hook: "Both hurt, swell and bruise. Some signs point to a break, and an X-ray is what confirms it.",
    short: "A sprain is a torn or twisted ligament, and a fracture is a broken bone. They can feel alike, so if you are not sure, get your ankle checked by a doctor. A crack at the time of injury, an ankle at an odd angle, or numb, blue or cold skin mean calling 999 or going to A&E.",
    sections: [
      {
        heading: "Two different injuries",
        paragraphs: [
          "A sprain is a torn or twisted ligament, the tissue that connects the joints, and sprains are most common in wrists, ankles, thumbs and knees. A fracture is the same as a broken bone.",
          "An ankle sprain is where the ligaments in your ankle get overstretched and tear, usually from twisting or rolling the ankle. Sometimes the strong ankle ligaments pull off a piece of bone, creating a fracture, usually from the end of the fibula.",
        ],
      },
      {
        heading: "Why they are hard to tell apart",
        paragraphs: [
          "Both can cause pain, swelling and bruising, and make it hard to put weight on the ankle. With a sprain, some symptoms may appear several days after the injury.",
          "You may not realise straight away that you have broken your ankle. Do not worry if you are not sure: get it checked by a doctor.",
        ],
      },
      {
        heading: "Signs it may be broken",
        paragraphs: [
          "The NHS says to call 999 or go to A&E if you heard a crack when you had your injury, the injured part has changed shape or is pointing at an odd angle, or it is numb, tingling or has pins and needles. The same applies if the skin around the injury has changed colour, such as looking blue or grey, or is cold to touch.",
          "With these signs you may have broken a bone and will need an X-ray. Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
        ],
      },
      {
        heading: "The X-ray",
        paragraphs: [
          "An X-ray is a test that takes pictures of the inside of your body using a small amount of radiation, and it can be used to check your bones for a fracture after an accident. The X-ray itself should only take a few minutes, and you will not feel anything when it is taken.",
          "For an ankle, the X-ray checks if it is broken and shows how bad the break is. If you have a very minor break, you may not need any treatment.",
        ],
      },
      {
        heading: "Looking after a sprain",
        paragraphs: [
          "For the first 2 to 3 days after a sprain, the NHS suggests protection, rest, ice, compression and raising the injury, known as PRICE therapy. After 2 weeks, most sprains feel better, but severe sprains can take months to get back to normal.",
        ],
      },
    ],
    helps: [
      "Get help from NHS 111 if the injury is very painful, badly swollen or bruised, or you cannot put any weight on it or walk more than a few steps.",
      "Call 999 or go to A&E if you heard a crack, the ankle is at an odd angle, or it is numb, tingling, blue, grey or cold.",
      "Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
      "Raise your ankle and use an ice pack wrapped in a towel while you wait to be seen.",
      "See a GP if a sprain is getting worse or not feeling better after treating it yourself.",
    ],
    tryThisWeek: [
      "Know the signs of a break.",
      "Get it X-rayed if unsure.",
      "Raise it and ice it, wrapped.",
    ],
    ask: "Has the X-ray shown a break, and if so, which bone and how bad is it?",
    interactive: {
      kind: "scenarios",
      title: "Sprain or break: what to do",
      scenarios: [
        {
          id: "crack",
          situation: "You twisted your ankle, heard a crack, and now it points at an odd angle.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Rest it at home for a week" }, { text: "Drive yourself to A&E" }],
          why: "Call 999 or go to A&E if you heard a crack or the injured part is at an odd angle. Do not drive to A&E: ask someone to drive you or call 999.",
        },
        {
          id: "weight",
          situation: "Your ankle is swollen and it hurts to put weight on it, but it looks a normal shape.",
          options: [{ text: "Get help from NHS 111", best: true }, { text: "Ignore it and keep walking" }],
          why: "Get help from NHS 111 if you have injured your ankle and it hurts to put weight on it, or there is a lot of swelling or bruising.",
        },
        {
          id: "price",
          situation: "It is a sprain, and it is the second day after the injury.",
          options: [{ text: "Protect, rest, ice, compress, raise", best: true }, { text: "A hot bath and a massage" }],
          why: "For the first 2 to 3 days, follow PRICE therapy. Try to avoid heat, alcohol and massages for the first couple of days.",
        },
      ],
    },
    sources: [NHS_SPRAINS, NHSI_SPRAIN, NUH, NHS_ANKLE, NHS_XRAY, UHCW_STABLE],
    quiz: {
      question: "What does an X-ray show for an injured ankle?",
      options: [{ text: "Whether it is broken, and how badly", right: true }, { text: "Whether a ligament is stretched" }, { text: "How long the pain will last" }],
      why: "For an ankle, the X-ray checks if it is broken and shows how bad the break is.",
    },
  },
  {
    id: "afx-treatment",
    kicker: "Treatment",
    question: "Boot, cast or operation: how is a broken ankle treated?",
    hook: "A minor break may need nothing at all. Others need a boot or a cast, and an unstable break needs an operation.",
    short: "Treatment depends on the type, position and severity of the break and on your general health. A very minor break may need no treatment, while others need a boot or a plaster cast to hold the ankle while it heals. Unstable fractures are usually fixed with an operation, using a plate and screws or wires.",
    sections: [
      {
        heading: "Treatment depends on the break",
        paragraphs: [
          "If you have a very minor break, you may not need any treatment. For a more serious break, you may need a special boot, a plaster cast, the bones moved back into place by a doctor after an injection to numb your ankle, or surgery to fix the broken bones.",
          "Treatment depends on the type, position and severity of the fracture and on your general health. Most fractures will heal by themselves, but need a period of protected immobilisation in a cast or boot to allow this healing to happen.",
        ],
      },
      {
        heading: "Boots",
        paragraphs: [
          "Depending on the type of fracture, you may be put into an Aircast boot, usually for fibula fractures, and the doctor will tell you how much weight you can put through it. A moon boot keeps your ankle and foot in a fixed position to help healing and avoid further injury.",
          "For a small stable fracture, Nottingham's fracture clinic says a walking boot may let you put weight on your foot sooner, but there is no need to use it if you do not find it helpful. You do not need to sleep in it, and it should not be used for longer than six weeks.",
        ],
      },
      {
        heading: "Casts",
        paragraphs: [
          "A backslab is a non-weight bearing cast with a gap at the front to allow for swelling. Once the swelling has gone down, it may be replaced with a full plaster cast, and the doctor will tell you how much weight you can put through it.",
          "Do not get your plaster cast wet or use anything to scratch under it. Do not put any objects, lotions or powders down your cast, and keep your toes and knees moving while it is on.",
        ],
      },
      {
        heading: "When an operation is needed",
        paragraphs: [
          "Surgery is recommended for unstable fractures, because bones healing in the wrong position can lead to more problems in the future. Usually it is only possible to operate within 3 weeks of the injury, but a very swollen ankle may need 7 to 10 days for the swelling to go down first.",
          "During surgery, the bones are put back into position and held with a plate and screws, wires, or both. Most patients go home the same day or the next day, usually in a plaster cast or boot, with crutches or a frame.",
        ],
      },
      {
        heading: "Follow-up",
        paragraphs: [
          "You may have follow-up appointments to check your ankle is healing properly. After surgery, an appointment about two weeks later checks that the wounds have healed.",
        ],
      },
    ],
    helps: [
      "Follow any advice you are given by the hospital or fracture clinic.",
      "Keep your plaster cast dry and do not put anything down it to scratch.",
      "Do not cut a cast that rubs or hurts: contact the plaster room for help.",
      "Gently move your toes and bend your knee while wearing the boot or cast.",
      "Wear a supportive shoe or trainer on your other foot, as the boot's thicker sole can make you feel uneven.",
    ],
    tryThisWeek: [
      "Keep the cast dry.",
      "Move your toes and knee.",
      "Wear a supportive shoe on the other foot.",
    ],
    ask: "Is my fracture stable, and will I need an operation?",
    interactive: {
      kind: "flip-cards",
      title: "Boots, casts and operations",
      intro: "Turn each card to see what it is and when it is used.",
      cards: [
        { id: "backslab", front: "Backslab", when: "Straight after the injury", back: "A non-weight bearing cast with a gap at the front to allow for swelling." },
        { id: "cast", front: "Plaster cast", when: "Once swelling has gone down", back: "Holds your ankle in place while it heals. The doctor says how much weight it can take." },
        { id: "boot", front: "Walking boot", when: "Often for fibula fractures", back: "Supports the ankle and keeps it in a fixed position to help healing." },
        { id: "manipulation", front: "Moving the bones back", when: "If the bones are out of place", back: "A doctor moves the bones back into place after an injection to numb your ankle." },
        { id: "surgery", front: "Operation", when: "For unstable fractures", back: "The bones are put back into position and held with a plate and screws, wires, or both." },
      ],
    },
    sources: [NHS_ANKLE, PLYMOUTH, UHCW_UNSTABLE, CHELWEST, NUH, SFH, UHCW_STABLE, NTH],
    quiz: {
      question: "Why is surgery recommended for an unstable ankle fracture?",
      options: [{ text: "Bones healing wrongly cause problems", right: true }, { text: "It always heals faster than a cast" }, { text: "Casts are never used for ankles" }],
      why: "Surgery is recommended for unstable fractures, because bones healing in the wrong position can lead to more problems in the future.",
    },
  },
  {
    id: "afx-healing",
    kicker: "Recovery",
    question: "How long does a broken ankle take to heal?",
    hook: "The bone usually knits in six to eight weeks. Feeling back to normal takes longer, often months.",
    short: "A broken ankle usually takes 6 to 8 weeks to heal, but it can take longer. Pain, stiffness, swelling and weakness can take six to twelve months to settle completely. Smoking, diabetes and some medicines can slow healing.",
    sections: [
      {
        heading: "Six to eight weeks for most",
        paragraphs: [
          "A broken ankle usually takes 6 to 8 weeks to heal, but it can take longer. The doctor will tell you how long you will need to wear a boot or have a plaster cast on.",
          "Most fractures heal without any problems in six to twelve weeks, but it may take six to twelve months for symptoms to settle completely. These can include pain or discomfort, stiffness, swelling and decreased strength.",
        ],
      },
      {
        heading: "What slows healing",
        paragraphs: [
          "Bones may take longer to heal if you have diabetes or if you smoke. Smoking reduces your body's ability to heal itself, and in extreme cases it can stop a fracture healing altogether.",
          "Some medicines can slow fracture healing, and anti-inflammatory medicines, like ibuprofen or naproxen, have been shown to delay healing. If you have concerns about your medicines, talk to a healthcare professional.",
        ],
      },
      {
        heading: "Helping it along",
        paragraphs: [
          "Things that help bones heal include a healthy balanced diet with plenty of protein, avoiding smoking, which limits the blood supply to your bones, and resting and taking it slow. Eating a healthy diet and keeping active will help your recovery.",
        ],
      },
      {
        heading: "After the cast or boot",
        paragraphs: [
          "Usually at 6 to 8 weeks, the team will advise when to remove your cast or boot. You may then notice muscle wasting, stiffness, pain, weakness and swelling, which are all normal and will improve over time.",
          "Your strength and stamina will improve, but this can take a number of months depending on how severe the injury was. It may take several months to stop limping and for swelling and stiffness to settle, even when the fracture has healed.",
        ],
      },
      {
        heading: "The longer view",
        paragraphs: [
          "As a fracture heals, new bone forms and joins the broken ends, which can leave a lump on one side of the ankle. This is normal and takes place over 12 to 18 months.",
          "Research has shown that people can still be recovering up to 2 years after an ankle fracture. Most people's symptoms improve steadily, and most of the recovery happens in the first six weeks.",
        ],
      },
    ],
    helps: [
      "Stop smoking while your fracture heals.",
      "Eat a healthy balanced diet with plenty of protein.",
      "Talk to a healthcare professional if you have concerns about medicines slowing healing.",
      "Go to your follow-up appointments so the team can check your ankle is healing properly.",
      "If your ankle function has not improved within 6 weeks of following the advice, talk to a healthcare professional.",
    ],
    tryThisWeek: [
      "Get help to stop smoking.",
      "Eat plenty of protein.",
      "Ask about medicines and healing.",
    ],
    ask: "How long will I be in a cast or boot, and what should I expect when it comes off?",
    interactive: {
      kind: "timeline",
      title: "From break to back to normal",
      steps: [
        { id: "early", when: "0 to 2 weeks", title: "Settle pain and swelling", points: ["Manage pain and swelling.", "Move your toes and knee in the cast or boot."] },
        { id: "healed", when: "6 to 8 weeks", title: "Bone usually healed", points: ["A broken ankle usually takes 6 to 8 weeks to heal.", "The team advises when the cast or boot comes off."] },
        { id: "back", when: "6 to 12 weeks", title: "Building back up", points: ["Most fractures heal in six to twelve weeks.", "Strength and stamina take a number of months."] },
        { id: "settle", when: "6 to 12 months", title: "Symptoms settle", points: ["Pain, stiffness and swelling can take this long to settle completely."] },
        { id: "remodel", when: "12 to 18 months", title: "Bone remodels", points: ["A lump at the ankle is normal while new bone forms."] },
      ],
    },
    sources: [NHS_ANKLE, RUH, UHCW_STABLE, UHCW_UNSTABLE, NUH, NHSI_AVULSION, GEH, ROS_BROKEN_BONES],
    quiz: {
      question: "How long does a broken ankle usually take to heal?",
      options: [{ text: "6 to 8 weeks", right: true }, { text: "About 1 week" }, { text: "At least 2 years" }],
      why: "A broken ankle usually takes 6 to 8 weeks to heal, but it can take longer.",
    },
  },
  {
    id: "afx-weight-bearing",
    kicker: "Recovery",
    question: "When can I put weight on my ankle again?",
    hook: "Your team decides, and it depends on the break. Crutches or a frame carry the load until then.",
    short: "The doctor will tell you how much weight to put on your ankle, and you may be given crutches or a walking frame to keep weight off it. With some stable fractures you can put weight on as pain allows; after surgery, at first you will not be allowed much weight at all. Coming off crutches is gradual, often through one crutch and then a stick.",
    sections: [
      {
        heading: "Your team decides",
        paragraphs: [
          "The doctor will tell you how much weight to put on your ankle, and you may be given crutches or a walking frame to help keep weight off it. You may be told to avoid putting weight through your foot to let it heal.",
          "With a backslab cast, you should not walk on the leg. After surgery, at first you will not be allowed to place much weight on your ankle, and the surgeon and physiotherapists will advise you when you can.",
        ],
      },
      {
        heading: "Crutches and frames",
        paragraphs: [
          "Crutches give temporary support if you need to take weight off one or both legs. They can feel more stable than a walking stick, but less stable than a walking frame.",
          "NHS inform has short videos on adjusting crutches and walking with them, whether you are putting no weight, some weight or full weight through your leg. There are also videos on using stairs with or without a banister.",
        ],
      },
      {
        heading: "Putting weight through it",
        paragraphs: [
          "For a small stable fracture, you will struggle to put weight on your ankle at first, which is your body's way of protecting the injury. As your pain settles, you can gradually put more weight on your foot as your symptoms allow.",
          "For a minor ankle avulsion fracture, NHS inform says to weight bear as much as you are able in the first 2 weeks, and to bear weight fully through your leg between 2 and 6 weeks. Walking on your foot can help recovery but may be uncomfortable at first.",
        ],
      },
      {
        heading: "Coming off the crutches",
        paragraphs: [
          "If you have no restrictions, slowly increase the weight through your foot as pain allows. You can move on to one crutch, held in the opposite hand to your injury, and then to a stick, or stop using crutches altogether.",
          "Crutches are there to help early movement and a gradual increase in weight bearing, under the guidance of a physiotherapist. With a stable fracture, they can be put aside as soon as you feel able to walk without them.",
        ],
      },
      {
        heading: "Keep moving safely",
        paragraphs: [
          "Even if you cannot put weight through your leg, keeping the leg moving and staying mobile can help reduce the risk of complications such as blood clots. Take your time when standing up, and get your balance before you start to move.",
        ],
      },
    ],
    helps: [
      "Follow the weight bearing advice your doctor or physiotherapist gives you.",
      "Use your walking aids as instructed.",
      "Watch NHS inform's videos on walking and using stairs with crutches.",
      "Take your time standing up and get your balance before you move.",
      "As pain allows, and if there are no restrictions, move on to one crutch held in the opposite hand to your injury.",
    ],
    tryThisWeek: [
      "Follow your weight bearing advice.",
      "Watch a crutches video.",
      "Get your balance before moving.",
    ],
    ask: "How much weight can I put on my ankle now, and when will that change?",
    interactive: {
      kind: "scenarios",
      title: "Weight and walking aids",
      scenarios: [
        {
          id: "backslab",
          situation: "You are in a backslab cast and want to get to the kitchen.",
          options: [{ text: "Crutches, no weight on the leg", best: true }, { text: "Walk on it gently" }],
          why: "A backslab is a non-weight bearing cast, so you should not walk on the affected leg. Use the walking aid you were given.",
        },
        {
          id: "one-crutch",
          situation: "You have no restrictions, and walking with two crutches feels much easier now.",
          options: [{ text: "Move to one crutch, opposite hand", best: true }, { text: "Put both crutches away at once" }],
          why: "You can wean yourself onto one crutch, held in the opposite hand to your injury, as pain and ankle movement allow.",
        },
        {
          id: "stand",
          situation: "You stand up from the sofa on your crutches.",
          options: [{ text: "Get your balance, then move", best: true }, { text: "Set off straight away" }],
          why: "Take your time when standing up and get your balance before you start to move.",
        },
      ],
    },
    sources: [NHS_ANKLE, UHCW_STABLE, NUH, SFH, NTH, NHSI_CRUTCHES, NHSI_AVULSION, UHCW_UNSTABLE, PLYMOUTH],
    quiz: {
      question: "Who decides how much weight you can put on a broken ankle?",
      options: [{ text: "Your doctor or physiotherapist", right: true }, { text: "Nobody: just walk normally" }, { text: "It is always no weight for a year" }],
      why: "The doctor will tell you how much weight to put on your ankle, and you may be given crutches or a walking frame to help keep weight off it.",
    },
  },
  {
    id: "afx-exercises",
    kicker: "Exercise",
    question: "Which exercises help movement and balance after a broken ankle?",
    hook: "Toes and knee while the cast is on. Then ankle movements, stretches, and finally strength and balance.",
    short: "While you are in a cast, keep your toes and knee moving. Once the cast is off, or straight away with a boot if you are told so, gentle ankle movements come first, then stretches, heel raises and balance work. Build up little and often, and follow your own physiotherapist's advice on which exercises to do.",
    sections: [
      {
        heading: "While in a cast or boot",
        paragraphs: [
          "While you are in a cast, you will not be able to exercise your ankle joint. You can still squeeze your buttock muscles, bend your knee up towards your chest, straighten your knee and tighten your thigh, and wiggle your toes as much as the cast allows.",
          "These help blood circulation and reduce joint stiffness and muscle weakness. The NHS says to gently move your toes and bend your knee while wearing the boot or cast to ease stiff muscles.",
        ],
      },
      {
        heading: "Early ankle movements",
        paragraphs: [
          "Once the cast is off, or straight away if you have been given a boot, the Royal United Hospitals Bath suggests three movements, each ten times, three to four times a day. Point your foot up and down within a comfortable range, make circles with your foot in each direction, and with your heels together move your toes apart.",
          "Other early exercises include a towel stretch, where you loop a towel around your foot and draw it slowly towards you to feel a stretch in your calf, and seated heel raises, lifting your heels with your toes on the floor. Your physiotherapist will tell you which exercises to do and when to progress.",
        ],
      },
      {
        heading: "Strength and balance",
        paragraphs: [
          "Later exercises build strength and balance. They include standing heel raises holding something safe, standing on one leg with support at first, and shifting your weight onto the injured leg while holding a solid surface.",
          "For a calf raise, stand holding something safe, rise up onto tip toes on both feet with your knees straight, hold for 2 seconds and lower, building up to 3 sets of 10. For a single leg balance, begin using a wall for support and aim for 30 seconds.",
        ],
      },
      {
        heading: "How much is right",
        paragraphs: [
          "Try the exercises little and often, and build up slowly as you feel able. A slight increase in discomfort and swelling is expected at first, but it should settle within 24 hours. Stop and rest if you start to develop more swelling or discomfort.",
          "If a sharp shooting pain is provoked, ease off. NHS inform suggests rating your pain out of 10 and keeping it within 0 to 5, and says people who have had recent ankle surgery should follow the advice of their healthcare professional.",
        ],
      },
      {
        heading: "Sticking with it",
        paragraphs: [
          "Exercise, like medicine, needs the right dose: not enough will be of no benefit and too much may do harm. The Chartered Society of Physiotherapy suggests planning short-term goals, pacing your activities and allowing for some setbacks as well as progress.",
        ],
      },
    ],
    helps: [
      "Gently move your toes and bend your knee while in the boot or cast.",
      "Do your ankle exercises three to four times a day once you are allowed.",
      "Build up slowly, little and often, and rest if swelling or discomfort increases.",
      "Take your painkillers before exercising if it helps you do the exercises comfortably.",
      "Follow your physiotherapist's advice on which exercises to do and when to progress.",
      "If you have had recent ankle surgery, follow your own healthcare professional's advice on exercise.",
    ],
    tryThisWeek: [
      "Move your toes and knee often.",
      "Do ankle exercises 3 to 4 times a day.",
      "Build up little and often.",
    ],
    ask: "Which exercises should I be doing now, and when can I move on to strength and balance?",
    interactive: {
      kind: "flip-cards",
      title: "Exercises from NHS fracture clinics",
      intro: "Turn each card to see how it is done. Check with your physiotherapist which ones suit you now.",
      cards: [
        { id: "toes-knee", front: "Toes and knee", when: "In the cast or boot", back: "Wiggle your toes as much as the cast allows, and bend your knee up towards your chest." },
        { id: "up-down", front: "Up and down", when: "Once the cast is off", back: "Point your foot up and down within a comfortable range of movement. Repeat ten times." },
        { id: "circles", front: "Ankle circles", when: "Once the cast is off", back: "Make circles with your foot in one direction, then change direction." },
        { id: "towel", front: "Towel calf stretch", when: "Sitting, leg out in front", back: "Loop a towel around your foot and draw it slowly towards you to feel a stretch in your calf." },
        { id: "calf-raise", front: "Calf raise", when: "Standing, holding on", back: "Rise onto tip toes with knees straight, hold for 2 seconds, then lower. Build up to 3 sets of 10." },
        { id: "balance", front: "Single leg balance", when: "Later, with support", back: "Stand on one leg, using a wall for support at first, and aim for 30 seconds." },
      ],
    },
    sources: [NHS_ANKLE, UHCW_STABLE, RUH, WORCS, NHSI_EX_ANKLE, GEH, SFH, NTH, CSP_REHAB, PLYMOUTH],
    quiz: {
      question: "How soon should extra discomfort after the exercises settle?",
      options: [{ text: "Within 24 hours", right: true }, { text: "Within about a week" }, { text: "It should never settle" }],
      why: "A slight increase in discomfort and swelling is expected at first, but it should settle within 24 hours.",
    },
  },
  {
    id: "afx-swelling",
    kicker: "Recovery",
    question: "How can I ease the swelling and pain?",
    hook: "Swelling is part of healing, and it can come and go for months. Raising the leg, ice and regular painkillers help.",
    short: "Swelling is the start of healing, and it often spreads down the leg and changes through the day. Keeping your foot raised, using ice wrapped in a damp towel, and avoiding heat, alcohol and doing too much all help. Take painkillers regularly as advised, as they work better at preventing pain than easing severe pain.",
    sections: [
      {
        heading: "Swelling is part of healing",
        paragraphs: [
          "Swelling is the start of healing, and it is normal to have it near the fracture first and for it to spread down your leg. It changes with your position, your activity and the time of day.",
          "After surgery, pain and swelling are generally worse in the first two weeks. Ankle swelling can last for months, and some people's foot and ankle stay swollen, particularly at the end of the day, for several months.",
        ],
      },
      {
        heading: "Raising the leg",
        paragraphs: [
          "Keeping your leg raised at regular intervals helps reduce swelling and improves blood circulation and healing. During the first two weeks, you will spend more time with your foot raised above the knee than with it down.",
          "For a very swollen ankle before surgery, University Hospitals Coventry and Warwickshire advises resting for around 50 minutes of every hour, raising your foot above the knee and the knee above the hip, and wriggling your toes every 30 minutes. At night, rest your foot on pillows so it is above the level of your heart.",
        ],
      },
      {
        heading: "Ice, and what to avoid",
        paragraphs: [
          "Ice can help with swelling and pain. Wrap an ice pack or a bag of frozen peas in a damp tea towel, use it for 10 to 15 minutes, and check your skin regularly, stopping straight away if it turns pale or white.",
          "Heat can increase blood flow and swelling, and alcohol can increase swelling and slow healing. Doing too much, being on your feet a lot, can make the foot and ankle swell more and slow healing.",
        ],
      },
      {
        heading: "Pain relief",
        paragraphs: [
          "Take paracetamol or the painkiller your doctor has given you to ease pain. Painkillers are usually better at preventing pain than dealing with severe pain, so it is better to take them sooner than to wait until the pain is bad.",
          "The NHS lists ibuprofen gel, or ibuprofen tablets if needed, among things to use while you wait to see a doctor. NHS inform says anti-inflammatory medicines, like ibuprofen, have been shown to delay fracture healing, and a pharmacist can advise on managing pain after a fracture.",
        ],
      },
      {
        heading: "Pain that is normal",
        paragraphs: [
          "It is normal to have some discomfort around the fracture, in nearby joints and in areas that were kept still, and pain can change from day to day. Some people have discomfort at the fracture site in colder weather, even once it has healed.",
        ],
      },
    ],
    helps: [
      "Rest and raise your ankle whenever possible.",
      "Use ice wrapped in a damp tea towel for 10 to 15 minutes, checking your skin.",
      "Avoid heat and alcohol, which can increase swelling.",
      "Take painkillers regularly as advised, and sooner rather than when the pain is bad.",
      "Ask a pharmacist for advice on managing pain after a fracture.",
      "Massage swelling from your foot towards your groin, and keep the other joints in your leg moving.",
    ],
    tryThisWeek: [
      "Raise your foot above your knee.",
      "Ice it wrapped, 10 to 15 minutes.",
      "Take painkillers before pain builds.",
    ],
    ask: "Which painkillers should I take, and for how long should I keep my leg raised?",
    interactive: {
      kind: "scenarios",
      title: "Swelling and pain at home",
      scenarios: [
        {
          id: "evening",
          situation: "It is evening, and your ankle has swollen more after a busy day.",
          options: [{ text: "Rest with your foot raised", best: true }, { text: "A hot bath to ease it" }],
          why: "Keeping your leg raised helps reduce swelling. Heat can increase blood flow and swelling.",
        },
        {
          id: "ice",
          situation: "You want to use ice on your swollen ankle.",
          options: [{ text: "Wrap it in a damp tea towel", best: true }, { text: "Put the ice straight on the skin" }],
          why: "Wrap an ice pack or frozen peas in a damp tea towel, use it for 10 to 15 minutes and check your skin regularly.",
        },
        {
          id: "painkillers",
          situation: "Your painkillers are due and the pain is only mild right now.",
          options: [{ text: "Take them as advised", best: true }, { text: "Wait until the pain is bad" }],
          why: "Painkillers are usually better at preventing pain than dealing with severe pain, so it is better to take them sooner.",
        },
      ],
    },
    sources: [NHS_ANKLE, UHCW_UNSTABLE, UHCW_STABLE, NUH, SFH, NHSI_AVULSION, CHELWEST, WORCS],
    quiz: {
      question: "What does swelling after an ankle fracture show?",
      options: [{ text: "The start of healing", right: true }, { text: "The bone has broken again" }, { text: "The cast has failed" }],
      why: "Swelling is the start of healing, and it is normal to have it near the fracture first and for it to spread down your leg.",
    },
  },
  {
    id: "afx-warning-signs",
    kicker: "Warning signs",
    question: "Which warning signs need help, including blood clots?",
    hook: "Most aches are normal. A few signs are not, and some of them mean calling 999.",
    short: "Get help from NHS 111 if the pain gets worse, you have a high temperature, your toes feel numb or burning, or the cast is too tight, rubbing or smells. A swollen, throbbing calf can be a blood clot: with breathlessness or chest pain, call 999 or go to A&E. Sudden, severe pain also means 999 or A&E.",
    sections: [
      {
        heading: "Get help from NHS 111",
        paragraphs: [
          "The NHS says to get help from NHS 111 if you are recovering from a broken ankle and the pain gets worse, your temperature is very high, or you feel hot, cold or shivery. The same applies if your leg, foot or toes start to feel numb or like they are burning.",
          "Also get help from NHS 111 if the plaster cast is too tight and your leg, foot or toes look swollen or turn blue or white, if the cast or boot is rubbing or feels too loose, or if there is a bad smell or discharge from under the cast.",
        ],
      },
      {
        heading: "Blood clots",
        paragraphs: [
          "Fractures and lower leg casts carry a small risk of a blood clot in a deep leg vein, called DVT. Symptoms include throbbing pain in one leg, usually in the calf or thigh, swelling, and red, blue or darkened skin around the painful area.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you think you have DVT. Call 999 or go to A&E if you have pain and swelling and you feel short of breath or have chest pain, because a clot can travel to the lungs, which needs treatment straight away.",
        ],
      },
      {
        heading: "Breathing problems",
        paragraphs: [
          "Call 999 or go to A&E if you have difficulty breathing that comes on suddenly, pain in your chest or upper back, or your heart is beating very fast. These could be signs of a pulmonary embolism, a blood clot in the lungs.",
          "You may be given medicine, such as injections that thin your blood, to reduce the risk of clots, sometimes after you leave hospital. Complete the course you are given.",
        ],
      },
      {
        heading: "Compartment syndrome",
        paragraphs: [
          "Fractures and casts also carry a small risk of compartment syndrome, an increase in pressure inside a muscle that restricts blood flow and causes pain. Look out for burning pain in the muscle, numbness, weakness or pins and needles.",
          "It can start suddenly after an injury or if a plaster cast is too tight, and it needs treatment as soon as possible. The NHS says to call 999 or go to A&E if you have sudden, severe pain in any part of your body.",
        ],
      },
      {
        heading: "After an operation",
        paragraphs: [
          "If your wound becomes red, swollen or itchy, see a member of the team to make sure there is no infection. Contact the team who treated you if you have a fever, or pins and needles, loss of feeling, loss of movement or severe pain in your foot, leg or toes.",
          "Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance, and bring any medicines you take.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E for leg pain and swelling with breathlessness or chest pain.",
      "Call 999 or go to A&E for sudden breathing difficulty, chest or upper back pain, or a very fast heartbeat.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you think you have DVT.",
      "Get help from NHS 111 if the pain gets worse, your toes go numb, blue or white, or the cast is too tight.",
      "Complete the course of blood-thinning injections you are given.",
      "If you develop a painful, swollen calf, contact your GP for a same-day appointment, or call 111 or go to an emergency department.",
    ],
    tryThisWeek: [
      "Know the clot warning signs.",
      "Finish your blood thinner course.",
      "Check your toes and your cast.",
    ],
    ask: "Do I need medicine to prevent blood clots, and for how long?",
    interactive: {
      kind: "signs",
      title: "Warning signs to act on",
      intro: "Tick any you notice. The note below says where to get help.",
      signs: ["Pain getting worse", "Very high temperature, or shivery", "Toes numb, burning, blue or white", "Cast too tight, rubbing or loose", "Bad smell or discharge from the cast", "Throbbing, swollen calf", "Short of breath or chest pain", "Sudden, severe pain"],
      after: "Call 999 or go to A&E for sudden breathing problems, chest pain, or sudden severe pain. For the other signs, get help from NHS 111.",
      copyHeading: "Signs I have noticed",
    },
    sources: [NHS_ANKLE, NHS_DVT, NHS_PE, NHS_COMPARTMENT, PLYMOUTH, SFH, UHCW_UNSTABLE, CHELWEST],
    quiz: {
      question: "What should you do for leg swelling with chest pain?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait to see if it settles" }, { text: "Raise the leg and rest" }],
      why: "Call 999 or go to A&E if you have pain and swelling and you feel short of breath or have chest pain, because a clot can travel to the lungs, which needs treatment straight away.",
    },
  },
  {
    id: "afx-home",
    kicker: "Living well",
    question: "How can I get around at home with a broken ankle?",
    hook: "Stairs, the bathroom and trip hazards are the hard parts. Equipment and a little planning make them easier.",
    short: "Pain and reduced movement can make daily tasks hard. An occupational therapist can assess you for equipment, and you may need a bed or commode downstairs for a while. Clear trip hazards, use your walking aids as shown, and keep the cast dry.",
    sections: [
      {
        heading: "Planning for home",
        paragraphs: [
          "Some daily activities may be hard because of pain or reduced movement. An occupational therapist can assess you for equipment to make tasks easier, and equipment you need can be provided when you leave hospital.",
          "Your home circumstances will be considered. If you cannot manage the stairs, you may need a bed downstairs, or a commode downstairs if you do not have a downstairs toilet, and the occupational therapist can also check whether you need support with washing and dressing.",
        ],
      },
      {
        heading: "Stairs and moving about",
        paragraphs: [
          "You may be given a walking aid, crutches or a frame, and shown how to use it by a physiotherapist. NHS inform has short videos showing how to go up and down stairs with crutches, with and without a banister.",
          "Take care moving around at home if you are not putting weight through your injured leg. Ask family or friends to make sure your rooms and floors are free from trip hazards such as rugs and mats.",
        ],
      },
      {
        heading: "Equipment that helps",
        paragraphs: [
          "Equipment that can help includes a raised toilet seat, a chair with a hidden toilet if getting to the toilet is difficult, a non-slip mat for the bath or shower, and a rail to help you get out of the bath or shower. Gadgets can also help you put on socks and tights.",
          "Your local council can assess your needs for free, and equipment and small adaptations to your home are provided free if you are assessed as needing them.",
        ],
      },
      {
        heading: "Washing and the cast",
        paragraphs: [
          "Do not get your plaster cast wet. Special covers can be bought for washing or bathing, and you should not bathe while you have a plaster cast on.",
          "You can take the boot off to clean your foot and ankle and to do your exercises, and it does not need to be worn at night. Remember to wear it whenever you stand and walk.",
        ],
      },
      {
        heading: "Day to day",
        paragraphs: [
          "Do not carry heavy things while your ankle heals. Rest and raise your ankle whenever possible.",
        ],
      },
    ],
    helps: [
      "Ask about an occupational therapy assessment for equipment before you leave hospital.",
      "Clear rugs, mats and other trip hazards from floors.",
      "Watch NHS inform's videos on using stairs with crutches.",
      "Ask your council for a free needs assessment if everyday tasks are hard.",
      "Use a cast cover for washing, and do not bathe with a plaster cast on.",
      "Wear your boot whenever you stand and walk.",
    ],
    tryThisWeek: [
      "Clear trip hazards from the floor.",
      "Watch the crutches on stairs video.",
      "Get a cover for the cast.",
    ],
    ask: "Can I have an occupational therapy assessment, and what equipment might help me at home?",
    interactive: {
      kind: "risk-check",
      title: "What could make home easier?",
      intro: "Tick what applies at home. Each has an idea from the NHS.",
      items: [
        { id: "stairs", label: "Stairs are hard to manage", note: "A bed downstairs may help for a while. NHS inform has videos on stairs with crutches.", changeable: true },
        { id: "toilet", label: "No downstairs toilet", note: "A commode downstairs may be needed. Ask the occupational therapist.", changeable: true },
        { id: "rugs", label: "Rugs, mats or clutter on the floor", note: "Ask family or friends to clear trip hazards from rooms and floors.", changeable: true },
        { id: "bath", label: "Getting in and out of the bath", note: "A non-slip mat or a rail can help. Do not bathe with a plaster cast on.", changeable: true },
        { id: "dressing", label: "Washing and dressing are hard", note: "The occupational therapist can assess if any support is needed.", changeable: true },
        { id: "carrying", label: "Carrying things around", note: "Do not carry heavy things while your ankle heals.", changeable: true },
      ],
    },
    sources: [PLYMOUTH, UHCW_STABLE, NHSI_CRUTCHES, NHS_GADGETS, CHELWEST, UHCW_UNSTABLE, NHS_ANKLE],
    quiz: {
      question: "What helps prevent falls at home on crutches?",
      options: [{ text: "Clearing rugs and mats from floors", right: true }, { text: "Rushing to stand up quickly" }, { text: "Carrying heavy bags" }],
      why: "Ask family or friends to make sure your rooms and floors are free from trip hazards such as rugs and mats.",
    },
  },
  {
    id: "afx-driving-work",
    kicker: "Living well",
    question: "When can I drive and go back to work?",
    hook: "Not in a cast or boot. Once you can do a safe emergency stop without pain, and your insurer knows.",
    short: "You should not drive while in a cast or wearing a boot. You can start again once you can control the pedals and do an emergency stop safely and pain free, often six to eight weeks after the plaster comes off. Going back to work depends on your job: office work can start soon if you can raise your foot.",
    sections: [
      {
        heading: "Not in a cast or boot",
        paragraphs: [
          "You should not drive while in a cast or wearing a boot. The Royal United Hospitals Bath says you may drive an automatic car if you have injured your left ankle.",
          "Chelsea and Westminster says that with a boot on the left ankle you may be able to drive an automatic, provided you can walk comfortably and do an emergency stop pain free, and to test your driving in a safe place first.",
        ],
      },
      {
        heading: "When you can drive again",
        paragraphs: [
          "You can start driving once you have enough movement and strength to control the pedals and can do an emergency stop safely and without pain. This is usually six to eight weeks after the plaster is removed, and after surgery most people return to driving within 9 to 12 weeks.",
          "Contact your insurance company before driving, as your injury may affect your insurance. Some pain medicines can make you sleepy or slow your reactions, and if this happens you should not drive.",
        ],
      },
      {
        heading: "Going back to work",
        paragraphs: [
          "Returning to work depends on the type of work you do and on whether you can get there safely. You may be able to discuss a phased return or changed duties with your employer.",
          "Office-based work can start almost straight away, as long as you can raise your foot, while more active work is likely to be at least 2 months away. You may need a sick note, depending on what your job involves.",
        ],
      },
      {
        heading: "You do not need to be fully better",
        paragraphs: [
          "You can return to work as soon as you are able to do your normal duties, and you do not need to see a healthcare professional to go back. How soon you can return depends on the type of job you do, and it is worth discussing with your doctor.",
        ],
      },
    ],
    helps: [
      "Do not drive while in a cast or boot.",
      "Only drive when you can control the pedals and do an emergency stop safely and pain free.",
      "Check with your insurance company before driving again.",
      "If you have not driven for some time, do a short practice drive on a quiet road, with someone with you.",
      "Talk to your employer about a phased return or changed duties.",
      "Ask the team about a medical certificate before you leave hospital if you need one.",
    ],
    tryThisWeek: [
      "Ring your insurer before driving.",
      "Test an emergency stop safely.",
      "Talk to your employer about duties.",
    ],
    ask: "When will I be safe to drive, and what work can I do in the meantime?",
    interactive: {
      kind: "scenarios",
      title: "Driving and work decisions",
      scenarios: [
        {
          id: "boot",
          situation: "You are in a boot on your right ankle and want to drive to the shops.",
          options: [{ text: "Ask someone else to drive", best: true }, { text: "Drive carefully in the boot" }],
          why: "You should not drive while in a cast or wearing a boot.",
        },
        {
          id: "stop",
          situation: "The boot is off, but pressing hard on the brake still hurts.",
          options: [{ text: "Wait until you can stop pain free", best: true }, { text: "Drive anyway, slowly" }],
          why: "You can start driving once you can control the pedals and do an emergency stop safely and without pain.",
        },
        {
          id: "office",
          situation: "You work at a desk and feel ready, but cannot walk far yet.",
          options: [{ text: "Discuss a return with your foot raised", best: true }, { text: "Wait until fully healed" }],
          why: "Office-based work can start almost straight away, as long as you can raise your foot.",
        },
      ],
    },
    sources: [RUH, CHELWEST, UHCW_UNSTABLE, SFH, NHSI_AVULSION, NUH, PLYMOUTH, ROS_EVERYDAY],
    quiz: {
      question: "When can you usually start driving again?",
      options: [{ text: "When you can do a safe emergency stop", right: true }, { text: "The day the plaster comes off" }, { text: "While still wearing the boot" }],
      why: "You can start driving once you have enough movement and strength to control the pedals and can do an emergency stop safely and without pain.",
    },
  },
  {
    id: "afx-return-to-sport",
    kicker: "Living well",
    question: "How do I get back to walking and sport?",
    hook: "Walking comes first, sport later. For most stable breaks, six weeks off and six weeks building back up.",
    short: "Most people with a stable ankle fracture can walk reasonably comfortably by six weeks. Running and sport usually wait at least six weeks, followed by about six more weeks of gradual build-up. Ask your doctor before going back to contact sports.",
    sections: [
      {
        heading: "Walking first",
        paragraphs: [
          "Most people with a stable fracture can walk reasonably comfortably by six weeks. Your walking pattern will be altered at first, and your physiotherapist will guide you towards walking without an aid.",
          "A daily brisk walk, as general exercise, helps blood flow to the area. It may take several months to stop limping completely, even if the fracture has healed.",
        ],
      },
      {
        heading: "When sport can start",
        paragraphs: [
          "Ask your doctor when you can return to contact sports or other activities that put a lot of strain on your ankle. For a stable fracture, most people cannot run or play sport for at least six weeks, and then spend a further six weeks gradually building back up.",
          "For a minor ankle avulsion fracture, NHS inform's plan is to return to full function, normal day to day activity and higher impact activity between 6 and 12 weeks.",
        ],
      },
      {
        heading: "Building up",
        paragraphs: [
          "Later exercises prepare the ankle for more: heel raises, standing on one leg for 30 seconds and then without holding on, and squats as far as feels comfortable. Your physiotherapist will tell you which to do and when to move on.",
          "You may not be able to return to your usual exercise levels straight away, and improvements may be slow at first. A gradual return to normal activities is the best way to get good short and long term results.",
        ],
      },
      {
        heading: "Setbacks and goals",
        paragraphs: [
          "Rehabilitation can be hard work, so allow for some setbacks as well as progress and chart your successes. The Chartered Society of Physiotherapy suggests planning short-term goals as well as your final target, and sharing them with family and friends.",
          "Frustration or low mood after an injury is normal, and it should get better as you get back to normal life. Loss of confidence is also common after a fracture.",
        ],
      },
      {
        heading: "Staying active for good",
        paragraphs: [
          "Adults are advised to do at least 150 minutes of moderate activity a week, such as brisk walking or riding a bike, and strengthening activities on at least 2 days a week. Speak to your GP first if you have not exercised for some time.",
        ],
      },
    ],
    helps: [
      "Ask your doctor when you can return to contact sports.",
      "Once you can start, build back up gradually over about six weeks.",
      "Take a brisk walk each day.",
      "Plan short-term goals as well as your final target.",
      "Speak to your GP first if you have not exercised for some time.",
    ],
    tryThisWeek: [
      "Ask when sport is safe.",
      "Take a brisk daily walk.",
      "Set one short-term goal.",
    ],
    ask: "When can I start running again, and when is contact sport safe for my ankle?",
    interactive: {
      kind: "timeline",
      title: "Back to walking and sport after a stable fracture",
      steps: [
        { id: "first", when: "First weeks", title: "Weight as pain allows", points: ["Put more weight on your foot as symptoms allow."] },
        { id: "six", when: "By 6 weeks", title: "Walking more comfortably", points: ["Most people walk reasonably comfortably.", "No running or sport yet for most."] },
        { id: "twelve", when: "6 to 12 weeks", title: "Building back up", points: ["A further six weeks of gradual build-up.", "Heel raises, balance and squats."] },
        { id: "months", when: "Months on", title: "Full recovery", points: ["Some aching may last several months.", "Ask your doctor about contact sports."] },
      ],
    },
    sources: [NUH, NHS_ANKLE, NHSI_AVULSION, UHCW_UNSTABLE, WORCS, SFH, CSP_REHAB, NHS_ACTIVITY, NHSI_EX_ANKLE],
    quiz: {
      question: "With a stable fracture, how long before most people can run?",
      options: [{ text: "At least six weeks", right: true }, { text: "Two or three days" }, { text: "Never again" }],
      why: "For a stable fracture, most people cannot run or play sport for at least six weeks, and then spend a further six weeks gradually building back up.",
    },
  },
  {
    id: "afx-long-term",
    kicker: "Living well",
    question: "Why is my ankle still stiff and swollen months later?",
    hook: "Swelling and discomfort can last up to a year, and that is normal. A few signs are still worth raising.",
    short: "Swelling and discomfort can last up to a year after an ankle fracture, and this is normal. Moving and walking ease stiffness, and a lump at the ankle as the bone remodels is expected. Pain that is far worse than expected, or stops everyday activities, is worth seeing a GP about.",
    sections: [
      {
        heading: "Normal for a long time",
        paragraphs: [
          "Expect swelling and discomfort for up to one year after a fracture. This is normal and does not mean anything is wrong with your ankle.",
          "It may take six to twelve months for symptoms to settle completely, including pain, stiffness, swelling and decreased strength. After surgery, pain and swelling may go on for six to nine months, and improvement can continue for over 12 months.",
        ],
      },
      {
        heading: "Stiffness",
        paragraphs: [
          "It is important to get as much movement as possible in your ankle once the fracture has healed, and exercising and walking help reduce stiffness. Once it has healed, use your ankle as normal, as moving it will stop it getting stiff.",
          "Your ankle may feel weak and wobbly after the plaster comes off, because it has not been used properly. Gradually increase how much you use it and how far you walk, guided by your pain.",
        ],
      },
      {
        heading: "Skin and the shape of the ankle",
        paragraphs: [
          "Dry, sensitive skin is normal after a cast. Washing with unperfumed soap, using an unscented moisturiser and, once a wound has healed, gently massaging moisturiser into the scar can help.",
          "New bone forms where the break heals, which can leave a lump on the side of your ankle. This is normal, and the ankle may change shape again over 12 to 18 months as the bone remodels.",
        ],
      },
      {
        heading: "Arthritis later on",
        paragraphs: [
          "After a serious ankle injury, there is a risk of developing arthritis in the joint, even if the fracture is fixed with surgery. Some people could develop ongoing stiffness and pain compared with their other ankle, and this is related to the original injury.",
        ],
      },
      {
        heading: "When pain is more than expected",
        paragraphs: [
          "Complex regional pain syndrome is thought to be fairly uncommon. Most cases are triggered by an injury, but the pain is much more severe and long-lasting than normal, and the area can become swollen, stiff or change colour or temperature. See a GP if you have persistent pain that stops you doing everyday activities, as early treatment may help.",
          "If you feel you are not making progress, you can contact your fracture clinic or physiotherapy team. Some people need one-to-one physiotherapy if they are still struggling after a few weeks.",
        ],
      },
    ],
    helps: [
      "Keep exercising and walking to reduce stiffness.",
      "Raise your foot when resting, and rest it on pillows at night, to ease swelling.",
      "Use an unscented moisturiser on dry skin and, once healed, massage the scar.",
      "See a GP if persistent pain stops you doing everyday activities.",
      "Contact your fracture clinic or physiotherapy team if you are not making progress.",
    ],
    tryThisWeek: [
      "Walk a little more each day.",
      "Raise your foot in the evening.",
      "Moisturise dry skin.",
    ],
    ask: "Is the swelling and stiffness I still have normal for my injury, or should it be checked?",
    interactive: {
      kind: "signs",
      title: "Changes worth mentioning",
      intro: "Lingering swelling is normal. Tick any of these that apply to you.",
      signs: ["Pain far worse than expected", "Skin very sensitive to touch", "Colour or temperature changes", "Pain stopping everyday activities", "No progress after a few weeks"],
      after: "Some swelling and stiffness for months is normal. If persistent pain stops you doing everyday activities, see a GP, as early treatment may help.",
      copyHeading: "Things to mention to my team",
    },
    sources: [GEH, SFH, RUH, CHELWEST, UHCW_UNSTABLE, NHS_CRPS, NTH, WORCS, NUH, NHS_ANKLE],
    quiz: {
      question: "How long can swelling last after a broken ankle?",
      options: [{ text: "Up to a year", right: true }, { text: "Never more than a week" }, { text: "Only while in the cast" }],
      why: "Expect swelling and discomfort for up to one year after a fracture.",
    },
  },
];
