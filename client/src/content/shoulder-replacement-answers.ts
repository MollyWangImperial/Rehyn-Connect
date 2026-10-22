import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Shoulder replacement page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's `sources`;
// nothing is added that those pages do not say. The NHS website has no shoulder replacement page, so most of it comes
// from Arthritis UK (the charity formerly called Versus Arthritis) and two NHS hospital trusts' patient leaflets
// (Worcestershire Acute Hospitals and Cambridge University Hospitals), with NICE's joint replacement guideline (NG157),
// the NHS pages on osteoarthritis treatment, surgery, blood clots, sepsis, shoulder pain and physical activity, and the
// government's driving and Access to Work pages. Emergency wording follows the NHS exactly. Exercises are described only
// as the hospital leaflet describes them. General information only; it never replaces what a person's own surgeon,
// physiotherapist or GP tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_OA_TREATMENT = nhs("Osteoarthritis: treatment", "conditions/osteoarthritis/treatment/");
const NHS_SURGERY_PREP = nhs("Having an operation: before surgery", "tests-and-treatments/having-surgery/preparation/");
const NHS_SURGERY_RECOVERY = nhs("Having an operation: getting back to normal", "tests-and-treatments/having-surgery/recovery/");
const NHS_DVT = nhs("DVT (deep vein thrombosis)", "conditions/deep-vein-thrombosis-dvt/");
const NHS_PE = nhs("Pulmonary embolism", "conditions/pulmonary-embolism/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_SHOULDER_PAIN = nhs("Shoulder pain", "symptoms/shoulder-pain/");
const NHS_GADGETS = nhs("Household gadgets and equipment to make life easier", "social-care-and-support/care-services-equipment-and-care-homes/household-gadgets-and-equipment-to-make-life-easier/");
const NHS_ACTIVE_OLDER = nhs("Physical activity guidelines for older adults", "live-well/exercise/physical-activity-guidelines-older-adults/");
const NHS_ACTIVE_ADULTS = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");

const AU_SHOULDER = au("Shoulder and elbow replacement surgery", "understanding-arthritis/arthritis-treatments/surgery/shoulder-and-elbow-replacement/");
const AU_ANAESTHETIC = au("Types of anaesthetic", "understanding-arthritis/arthritis-treatments/surgery/types-of-anaesthetic/");
const AU_PREPARING = au("Preparing for surgery", "understanding-arthritis/arthritis-treatments/surgery/preparing-for-surgery/");
const AU_PAIN_SURGERY = au("Managing pain before and after orthopaedic surgery", "understanding-arthritis/arthritis-treatments/surgery/managing-pain-before-and-after-orthopaedic-surgery/");
const AU_LETS_MOVE = au("Let's Move for Surgery toolkit", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/lets-move-for-surgery-toolkit/");

const WORCS_SR: LearnSource = { label: "Worcestershire Acute Hospitals NHS Trust: Shoulder replacement surgery", url: "https://www.worcsacute.nhs.uk/leaflets/shoulder-surface-replacement/" };
const WORCS_EX: LearnSource = { label: "Worcestershire Acute Hospitals NHS Trust: Exercises after shoulder surgery", url: "https://www.worcsacute.nhs.uk/leaflets/exercises-after-shoulder-surgery/" };
const CUH_OT: LearnSource = { label: "Cambridge University Hospitals NHS Foundation Trust: Advice following total shoulder replacement", url: "https://www.cuh.nhs.uk/patient-information/advice-following-total-shoulder-replacement/" };

const NICE_NG157 = { label: "NICE: Joint replacement (primary): hip, knee and shoulder (NG157)", url: "https://www.nice.org.uk/guidance/ng157/chapter/Recommendations" } satisfies LearnSource;

const GOV_SURGERY_DRIVING = gov("Surgery and driving", "surgery-and-driving");
const GOV_ATW = gov("Access to Work: what Access to Work is", "access-to-work");
const GOV_ATW_ELIGIBILITY = gov("Access to Work: eligibility", "access-to-work/eligibility");

export const shoulderReplacementAnswers: LearnArticle[] = [
  {
    id: "shr-what-it-is",
    kicker: "Understanding",
    question: "What does a shoulder replacement actually involve?",
    hook: "A new ball, sometimes a new socket, and sometimes the two swapped round. Which one depends on the bone and the muscles around the joint.",
    short: "Shoulder replacement surgery replaces the ball, and sometimes the socket, of the shoulder joint with man-made parts. There are several types: a hemiarthroplasty, resurfacing, a total replacement and a reverse replacement. Your surgeon will discuss which type is most suitable for your shoulder.",
    sections: [
      {
        heading: "A ball and a socket",
        paragraphs: [
          "The shoulder is a ball-and-socket joint. The end of the upper arm bone, called the humeral head, forms the ball, and part of the shoulder blade, called the glenoid, forms the socket.",
          "Conditions such as osteoarthritis and rheumatoid arthritis can wear the joint surfaces, causing inflammation, pain and less movement. The pain is usually aching, it can make sleeping difficult, and some movements may cause grinding or catching.",
        ],
      },
      {
        heading: "What is replaced",
        paragraphs: [
          "Shoulder replacement surgery replaces the ball, and sometimes the socket, with man-made parts. In a joint replacement, the surgeon removes the affected joint and replaces it with an artificial joint made of special plastics and metal.",
          "In a hemiarthroplasty, only the ball is replaced, with an artificial ball on a stem that extends into the upper arm bone. It is usually used for fractures, but also in many cases of arthritis. Shoulder resurfacing is a kind of hemiarthroplasty where a metal cap is fitted over the ball instead, so less bone has to be removed.",
        ],
      },
      {
        heading: "Total and reverse replacements",
        paragraphs: [
          "A total shoulder replacement replaces both the ball and the socket. It needs good rotator cuff muscles, which keep the upper arm bone in its socket. NICE says people having a shoulder replacement for osteoarthritis with no rotator cuff tear should be offered a conventional total shoulder replacement if the socket bone is adequate.",
          "In a reverse shoulder replacement, the ball and socket are swapped over, so the socket is fitted to the upper arm bone and the ball to the shoulder blade. It is usually done when the rotator cuff muscles are absent or of poor quality, and Arthritis UK says it is used for severe arthritis with very poor tendon cover around the joint.",
        ],
      },
      {
        heading: "What it can do",
        paragraphs: [
          "The possible benefits are less joint pain, better movement in some cases and a better quality of life. Arthritis UK says shoulder replacements are very successful and most people are delighted with the results, but it can take several months to get the full benefit.",
          "A reverse shoulder replacement is usually carried out for pain relief only, and the movement you can expect afterwards may be less than with other procedures. Your surgeon will discuss which type is most suitable for you, and the possible complications, and you will then have time to think it through.",
        ],
      },
    ],
    helps: [
      "Ask your surgeon which type of shoulder replacement would suit your shoulder, and why.",
      "Ask how much your surgeon expects your movement to improve, as each case is slightly different.",
      "If you have osteoarthritis with no rotator cuff tear, ask whether a conventional total shoulder replacement is an option.",
      "Expect several months before you get the full benefit.",
    ],
    tryThisWeek: [
      "Ask which type would suit you.",
      "Ask how much movement to expect.",
      "Plan for months of recovery.",
    ],
    ask: "Which type of shoulder replacement would suit my shoulder, and how much movement can I expect?",
    interactive: {
      kind: "flip-cards",
      title: "Four kinds of shoulder replacement",
      intro: "Turn each card to see what is replaced, and when that kind is used.",
      cards: [
        { id: "hemi", front: "Hemiarthroplasty", when: "Usually for fractures, also arthritis", back: "Only the ball is replaced, with an artificial ball on a stem that extends into the upper arm bone." },
        { id: "resurfacing", front: "Shoulder resurfacing", when: "A kind of hemiarthroplasty", back: "A metal cap is fitted over the ball of the joint, so less bone has to be removed." },
        { id: "total", front: "Total shoulder replacement", when: "Needs good rotator cuff muscles", back: "Both the ball of the upper arm and the socket of the shoulder blade are replaced." },
        { id: "reverse", front: "Reverse shoulder replacement", when: "Rotator cuff absent or poor", back: "The ball and socket are swapped over. It is usually carried out for pain relief only." },
      ],
    },
    sources: [AU_SHOULDER, WORCS_SR, NICE_NG157, NHS_OA_TREATMENT],
    quiz: {
      question: "In a reverse shoulder replacement, what changes?",
      options: [{ text: "The ball and socket are swapped over", right: true }, { text: "Only the socket is replaced" }, { text: "The collarbone is replaced" }],
      why: "In a reverse shoulder replacement, the ball and socket are swapped over, so the socket is fitted to the upper arm bone and the ball to the shoulder blade.",
    },
  },
  {
    id: "shr-deciding",
    kicker: "Deciding",
    question: "How do I decide whether a shoulder replacement is right for me?",
    hook: "Other treatments usually come first. Then it is a weighing-up of pain, daily life, and what a new shoulder can and cannot do.",
    short: "You may need a shoulder replacement if your pain cannot be reduced enough by other treatments, such as medicines, injections or physiotherapy, and it is affecting your quality of life. Most people are delighted with the results, but a replacement joint can never be as good as a natural one. Your surgeon can advise on the pros and cons of having or delaying an operation.",
    sections: [
      {
        heading: "Other treatments usually come first",
        paragraphs: [
          "Most people with arthritis of the shoulder have other treatments from their doctor, physiotherapist or rheumatologist before they see a surgeon. These include anti-inflammatory medicines, disease-modifying medicines, steroid injections, injections of local anaesthetic to numb the nerves, and physiotherapy.",
          "Physiotherapy may be suggested to regain as much movement and strength in the shoulder as possible before surgery is considered. Surgery for osteoarthritis is only needed in a small number of cases, where other treatments have not worked or daily life is seriously affected.",
        ],
      },
      {
        heading: "When a replacement is considered",
        paragraphs: [
          "You may need a joint replacement if your pain cannot be reduced enough by other treatments and it is affecting your quality of life. Joint replacements are also increasingly done for fractures close to the joint, if the fracture cannot be fixed reliably.",
          "A replacement is not always the most suitable option. Other operations include cleaning out the joint, called debridement, to ease pain.",
        ],
      },
      {
        heading: "The likely gains",
        paragraphs: [
          "The possible advantages include reduced joint pain, a better range of movement in some cases and a better quality of life. Having surgery for osteoarthritis may greatly improve your symptoms, mobility and quality of life.",
          "Surgery cannot be guaranteed to get rid of your symptoms altogether, and you may still have some pain and stiffness.",
        ],
      },
      {
        heading: "The limits of a new shoulder",
        paragraphs: [
          "A replacement joint can never be as good as a normally working natural joint. The range of movement will be less than with a healthy joint, and some movements, such as reaching above your head, may not be possible, although most people can carry on with normal everyday activities.",
          "Replacement joints also wear out after a time, but Arthritis UK says they are likely to last for 10 years. With a reverse shoulder replacement, the movement you can expect may be less than with other procedures.",
        ],
      },
      {
        heading: "Making the choice together",
        paragraphs: [
          "Arthritis UK suggests thinking it through carefully with your surgeon, with the other professionals helping you, such as your GP, physiotherapist or nurse, and with your family and friends. Your surgeon can advise on the pros and cons of having or delaying an operation.",
          "NICE says the discussion should cover the alternatives to joint replacement, the possible benefits and risks of each procedure and type of implant, including the possible need for more surgery in the future, and the options for anaesthesia and pain relief.",
        ],
      },
    ],
    helps: [
      "Ask about the treatments that may be tried first, such as medicines, injections and physiotherapy.",
      "Ask your surgeon about the pros and cons of having or delaying an operation.",
      "Ask how much your movement is expected to improve, as each case is slightly different.",
      "Talk it through with your GP, physiotherapist or nurse, and with your family and friends.",
      "Ask about the benefits and risks of each type of implant, including the chance of needing more surgery later.",
    ],
    tryThisWeek: [
      "Ask which treatments come first.",
      "Ask about having or delaying surgery.",
      "Talk it over with family and friends.",
    ],
    ask: "What could a new shoulder realistically change for me, and what are the risks of having it now or waiting?",
    interactive: {
      kind: "flip-cards",
      title: "Options before a new shoulder",
      intro: "Turn each card to see what each option is. Your doctor or physiotherapist can say which suit you.",
      cards: [
        { id: "nsaids", front: "Anti-inflammatory medicines", when: "Often tried first", back: "Osteoarthritis of the shoulder may respond to anti-inflammatory medicines such as ibuprofen." },
        { id: "dmards", front: "Disease-modifying medicines", when: "From your doctor or rheumatologist", back: "Disease-modifying anti-rheumatic drugs, known as DMARDs, are among the treatments tried before surgery." },
        { id: "steroid", front: "Steroid injections", when: "Before seeing a surgeon", back: "One of the treatments most people have before they see a surgeon for a joint replacement." },
        { id: "numbing", front: "Numbing injections", when: "Before seeing a surgeon", back: "Injections of local anaesthetic to numb the nerves." },
        { id: "physio", front: "Physiotherapy", when: "Before surgery is considered", back: "To regain as much movement in the joint and strength in the shoulder muscles as possible." },
        { id: "debridement", front: "Debridement", when: "Another kind of operation", back: "Cleaning out the joint to ease pain. A joint replacement is not always the most suitable option." },
      ],
    },
    sources: [AU_SHOULDER, WORCS_SR, NHS_OA_TREATMENT, NICE_NG157],
    quiz: {
      question: "Which movement may not be possible with a new shoulder, according to Arthritis UK?",
      options: [{ text: "Reaching above your head", right: true }, { text: "Bending your fingers" }, { text: "Turning your head" }],
      why: "Some movements, such as reaching above your head, may not be possible, although most people can carry on with normal everyday activities.",
    },
  },
  {
    id: "shr-preparing",
    kicker: "Before surgery",
    question: "How can I get ready for a shoulder replacement?",
    hook: "For weeks afterwards, one arm does the work of two. Getting fit, and setting up the home for one hand, makes those weeks easier.",
    short: "While you wait, keep as active as you can and do any exercises your physiotherapist or doctor has given you. Have a dental check-up, go to the pre-admission clinic, and ask whether any of your medicines should stop. Setting up your home and practising tasks with your other arm makes the first weeks easier.",
    sections: [
      {
        heading: "The wait",
        paragraphs: [
          "Once you decide to go ahead, your name goes on a waiting list, and the hospital usually contacts you within 6 to 12 weeks, says Arthritis UK.",
          "Try to be as physically active as possible and do any exercises your physiotherapist or doctor has given you. Arthritis UK's Let's Move for Surgery toolkit has a follow-along video of shoulder replacement exercises for before and after surgery, and it advises getting advice from your healthcare professional about which exercises suit you.",
        ],
      },
      {
        heading: "Your general health",
        paragraphs: [
          "Being unfit, overweight or a smoker can increase your risk of complications. If you are concerned about this, speak to a healthcare professional.",
          "Have a dental check-up and get any problems dealt with well before your operation, because bacteria from dental problems could cause an infection if they get into the bloodstream.",
        ],
      },
      {
        heading: "The pre-admission clinic",
        paragraphs: [
          "Most hospitals invite you to a pre-admission clinic, usually about 2 to 3 weeks before surgery, to check you are well enough for the anaesthetic and the operation. Tests may include blood tests, X-rays, a urine sample and an ECG to make sure your heart is healthy.",
          "Discuss with your surgeon, anaesthetist or nurse whether to stop taking any of your medicines before surgery. You will also be told whether to stop eating and drinking in the hours before the operation.",
        ],
      },
      {
        heading: "Practising one-handed",
        paragraphs: [
          "You may be invited to see an occupational therapist about how you will manage at home, and if you are worried about coping and are not invited, ask about it at the clinic. Cambridge University Hospitals suggests practising tasks with your other arm before surgery, and trying which clothes are easy to get on and off.",
          "Reorganise your kitchen so things are easy to reach, and batch cook and stock up your cupboards and freezer. Try to finish heavier household jobs before the operation.",
        ],
      },
      {
        heading: "Getting home ready",
        paragraphs: [
          "Think about who will take you to hospital and bring you home, whether everything you need is within easy reach, and whether you need someone to stay with you for a while. You will not be able to drive yourself home.",
          "Plan how you will do your shopping, as you will not be able to drive for a while. Let your surgeon know if you develop a cough, cold or high temperature a few days before surgery, and they will advise whether the operation can go ahead.",
        ],
      },
    ],
    helps: [
      "Keep as active as you can, and do any exercises your physiotherapist or doctor has given you.",
      "Ask your healthcare professional which exercises suit you before you start.",
      "Have a dental check-up and get any problems dealt with well before the operation.",
      "Ask at the pre-admission clinic whether to stop any of your medicines.",
      "Practise everyday tasks with your other arm, and stock up your cupboards and freezer.",
      "Tell your surgeon if you develop a cough, cold or high temperature a few days before surgery.",
    ],
    tryThisWeek: [
      "Ask which exercises suit you.",
      "Book a dental check-up.",
      "Practise tasks with your other arm.",
    ],
    ask: "Which exercises should I do while I wait, and should any of my medicines change before the operation?",
    interactive: {
      kind: "scenarios",
      title: "Getting ready for the day",
      scenarios: [
        {
          id: "cough",
          situation: "Three days before surgery, you develop a cough and a high temperature.",
          options: [{ text: "Let your surgeon know", best: true }, { text: "Say nothing and go ahead" }],
          why: "Let your surgeon know if you develop a cough, cold or high temperature a few days before surgery. They will advise whether the operation can go ahead.",
        },
        {
          id: "tooth",
          situation: "A tooth has been bothering you while you wait for your operation.",
          options: [{ text: "Deal with it well before surgery", best: true }, { text: "Leave it until afterwards" }],
          why: "Get any dental problems dealt with well before your operation, because bacteria from dental problems could cause an infection if they get into the bloodstream.",
        },
        {
          id: "tablets",
          situation: "You are not sure whether to keep taking your usual tablets before the operation.",
          options: [{ text: "Ask your surgeon, anaesthetist or nurse", best: true }, { text: "Stop them all a week before" }],
          why: "Discuss with your surgeon, anaesthetist or nurse at the pre-admission clinic whether to stop taking any of your medicines.",
        },
        {
          id: "kitchen",
          situation: "Your mugs and plates live on a high shelf.",
          options: [{ text: "Move them where they are easy to reach", best: true }, { text: "Leave them where they are" }],
          why: "Before your surgery, reorganise your kitchen so things are easy to reach.",
        },
      ],
    },
    sources: [AU_SHOULDER, AU_PREPARING, NHS_SURGERY_PREP, CUH_OT, AU_LETS_MOVE],
    quiz: {
      question: "When does the pre-admission clinic usually happen, according to Arthritis UK?",
      options: [{ text: "About 2 to 3 weeks before surgery", right: true }, { text: "The morning of the operation" }, { text: "A year before" }],
      why: "Most hospitals invite you to a pre-admission clinic, usually about 2 to 3 weeks before surgery.",
    },
  },
  {
    id: "shr-hospital",
    kicker: "In hospital",
    question: "What happens on the day of the operation and in hospital?",
    hook: "In on the morning, about an hour and a half in theatre, a numb arm for a day, and usually home within a few nights.",
    short: "You will usually go into hospital early on the day of surgery, and have a general anaesthetic, a local anaesthetic that numbs the arm and shoulder, or both. The operation usually takes around an hour and a half. You will usually stay in hospital for 2 to 3 nights.",
    sections: [
      {
        heading: "Arriving",
        paragraphs: [
          "You will usually be admitted early on the day of surgery, and asked to sign a consent form. Follow the fasting instructions you were given, have a bath or shower before you come in, and do not put on creams afterwards unless you have been told to.",
          "If you are feeling worried, you may be offered a sedative medicine on the ward before the operation, which makes you a little drowsy.",
        ],
      },
      {
        heading: "The anaesthetic",
        paragraphs: [
          "You will have a general anaesthetic, so you are asleep, or a local anaesthetic that numbs the nerves to the arm and shoulder, or both. The local anaesthetic is usually an injection at the base of the neck or in the armpit, and some anaesthetists use an ultrasound scan to guide the needle.",
          "With a local anaesthetic you can take a book or some music along to help you relax. NICE says the options for anaesthesia and pain relief should be discussed with you, including general anaesthesia, regional anaesthesia and nerve blocks.",
        ],
      },
      {
        heading: "The operation",
        paragraphs: [
          "The operation usually takes around an hour and a half. Giving the anaesthetic takes about half an hour, and recovery before going back to the ward takes another half an hour to an hour.",
          "The shoulder joint is normally opened from the front or top, and the muscles are moved out of the way. The damaged ball of the upper arm bone is removed, and the bone is prepared for the artificial part to be fitted.",
        ],
      },
      {
        heading: "Waking up",
        paragraphs: [
          "In the recovery room you may notice an oxygen mask, a drip, a cuff on your arm recording your pulse and blood pressure, a dressing on your wound and a sling with a strap around your back.",
          "An injection at the side of the neck, called an interscalene block, is often used to reduce pain afterwards. Your arm may feel heavy and numb, which is normal and usually wears off after 12 to 24 hours.",
        ],
      },
      {
        heading: "On the ward and going home",
        paragraphs: [
          "NICE says a physiotherapist or occupational therapist should offer rehabilitation on the day of surgery if possible, and no more than 24 hours afterwards. The drip and any drains are usually removed within 24 hours, and then you can start gently moving your arm again.",
          "X-rays of your new joint are taken during your stay. You will usually be in hospital for 2 to 3 nights, and how soon you go home depends on how well the wound is healing and whether you can get about safely.",
        ],
      },
    ],
    helps: [
      "Follow the fasting instructions you were given, and have a bath or shower before you come in.",
      "Talk to your anaesthetist about the choice of anaesthetic and pain relief.",
      "Tell the nursing staff if you have pain, rather than waiting until it is severe.",
      "Expect a heavy, numb arm for 12 to 24 hours after a nerve block injection.",
      "Use the pre-admission clinic to raise any questions or worries about the operation.",
    ],
    tryThisWeek: [
      "Follow the fasting instructions.",
      "Discuss your anaesthetic choices.",
      "Tell the nurses about pain early.",
    ],
    ask: "Which anaesthetic and pain relief would suit me, and how long am I likely to stay in hospital?",
    interactive: {
      kind: "timeline",
      title: "From admission to home",
      steps: [
        { id: "admit", when: "On the day", title: "Into hospital", points: ["Usually admitted early on the day of surgery.", "A consent form to sign."] },
        { id: "theatre", when: "About an hour and a half", title: "The operation", points: ["A general or local anaesthetic, or both.", "The damaged ball is removed and new parts fitted."] },
        { id: "recovery", when: "Straight after", title: "Recovery room", points: ["Stay until you are fully awake.", "A sling with a strap around your back."] },
        { id: "numb", when: "12 to 24 hours", title: "The block wears off", points: ["The arm may feel heavy and numb until then.", "Tell the nurses about pain early."] },
        { id: "moving", when: "Within 24 hours", title: "Rehabilitation starts", points: ["Drip and drains usually removed.", "Gently moving the arm again."] },
        { id: "home", when: "2 to 3 nights", title: "Home", points: ["When the wound is healing well.", "And you can get about safely."] },
      ],
    },
    sources: [AU_SHOULDER, WORCS_SR, NICE_NG157, AU_ANAESTHETIC],
    quiz: {
      question: "How long does the heavy, numb feeling from a nerve block usually last?",
      options: [{ text: "12 to 24 hours", right: true }, { text: "A few minutes" }, { text: "Several weeks" }],
      why: "Your arm may feel heavy and numb, which is normal and usually wears off after 12 to 24 hours.",
    },
  },
  {
    id: "shr-sling",
    kicker: "Recovery",
    question: "How long will I wear a sling, and what are the first weeks like?",
    hook: "The sling protects the new joint while it heals. How to wear it, when it comes off, and what the first six weeks hold.",
    short: "Your arm will be in a sling to support and protect the shoulder while it heals, and you can take it off to exercise, wash and dress. Arthritis UK says you may need it for up to 4 weeks, but surgeons differ, so keep wearing it until your consultant or physiotherapist says to stop. Usually after 6 weeks the pain has eased enough to lift your arm for everyday tasks.",
    sections: [
      {
        heading: "Why the sling",
        paragraphs: [
          "Your arm will be in a sling to support and protect the shoulder while it heals. It holds your arm close to your side, so it is important to use it as instructed.",
          "The physiotherapist on the ward will show you how to take it on and off. You can take it off to do your exercises, and to wash and dress, and then put it back on as soon as possible.",
        ],
      },
      {
        heading: "How long",
        paragraphs: [
          "Arthritis UK says you may need to wear it for up to 4 weeks, but different surgeons have different procedures. Cambridge University Hospitals advises about 3 weeks at home, but 6 weeks outside the home.",
          "Keep wearing it until your consultant or physiotherapist tells you to stop.",
        ],
      },
      {
        heading: "Putting it on",
        paragraphs: [
          "The sling is fitted sitting down, and it is much easier with someone to help. Put your arm in with the elbow as far into the corner as possible, then take the long strap around your back and over the opposite shoulder.",
          "Pull the strap so your elbow rests at a right angle or higher, to prevent swelling in your hand and fingers. Your ward physiotherapist will tell you if you also need the waist strap.",
        ],
      },
      {
        heading: "The first days",
        paragraphs: [
          "During the first few days, keep your hand and forearm raised, preferably above the level of your heart, and exercise your fingers regularly by making a full fist and stretching them out.",
          "A drain in the wound is usually removed after 1 to 2 days. Clips or stitches are usually removed at 14 days, by a district nurse at home or at your GP surgery.",
        ],
      },
      {
        heading: "The first weeks",
        paragraphs: [
          "For the first 6 weeks, Cambridge University Hospitals advises no heavy lifting, usually nothing heavier than a cup of tea, and not putting weight through the arm. It also advises keeping the dressing dry for 10 to 14 days.",
          "After about 2 weeks you will have a routine outpatient check-up to see how you are recovering and whether the wound has healed. Arthritis UK says that usually, after 6 weeks, the pain has eased enough for you to lift your arm and dress, feed and wash yourself.",
        ],
      },
    ],
    helps: [
      "Wear the sling as instructed, until your consultant or physiotherapist tells you to stop.",
      "Take the sling off only for exercises, washing and dressing, and put it back on as soon as possible.",
      "Fasten the strap so your elbow rests at a right angle or higher.",
      "Keep your hand and forearm raised in the first few days, and exercise your fingers.",
      "Avoid heavy lifting and putting weight through the arm for the first 6 weeks.",
    ],
    tryThisWeek: [
      "Wear the sling as instructed.",
      "Keep your elbow at a right angle or higher.",
      "Raise your hand and move your fingers.",
    ],
    ask: "How long should I wear my sling, and when can I start putting weight through my arm?",
    interactive: {
      kind: "timeline",
      title: "The sling and the first weeks",
      steps: [
        { id: "days", when: "First few days", title: "Raise the hand", points: ["Hand and forearm above heart level if possible.", "Make a full fist, then stretch the fingers."] },
        { id: "drain", when: "1 to 2 days", title: "Drain out", points: ["A drain in the wound is usually removed.", "This is usually done on the ward."] },
        { id: "check", when: "About 2 weeks", title: "Check-up and clips out", points: ["A routine outpatient check-up.", "Clips or stitches out at 14 days."] },
        { id: "sling", when: "Up to 6 weeks", title: "Sling off", points: ["Up to 4 weeks, says Arthritis UK; surgeons differ.", "When your consultant or physiotherapist says."] },
        { id: "six", when: "About 6 weeks", title: "Everyday tasks return", points: ["Pain usually eased enough to lift the arm.", "Dressing, feeding and washing yourself."] },
      ],
    },
    sources: [AU_SHOULDER, WORCS_SR, CUH_OT, WORCS_EX],
    quiz: {
      question: "How high should your elbow rest in the sling?",
      options: [{ text: "At a right angle or higher", right: true }, { text: "Hanging straight down" }, { text: "Above your head" }],
      why: "Pull the strap so your elbow rests at a right angle or higher, to prevent swelling in your hand and fingers.",
    },
  },
  {
    id: "shr-exercises",
    kicker: "Exercise",
    question: "Which exercises help after a shoulder replacement?",
    hook: "Small moves first, for the fingers, wrist and elbow, then gentle swings of the arm. Only the ones your physiotherapist ticks for you.",
    short: "Exercises stop the new shoulder becoming stiff, but there is no single programme, because it depends on the type of operation and the surgeon. Only do the exercises your physiotherapist has ticked for you, start slowly and build up gradually. Improvements can continue for 12 to 18 months.",
    sections: [
      {
        heading: "Why they matter",
        paragraphs: [
          "Do the exercises as instructed, otherwise your shoulder may become stiff. Exercise keeps joints mobile, strengthens muscles, increases blood flow, helps healing by bringing oxygen to the tissues and improves mental well-being.",
          "Because there are several types of shoulder surgery, there is no single aftercare programme, and Arthritis UK cannot recommend specific exercise plans. Your physiotherapist or occupational therapist will tell you the dos and don'ts, and it is very important to follow this advice.",
        ],
      },
      {
        heading: "Only the ones ticked for you",
        paragraphs: [
          "The physiotherapist on the ward will mark which exercises are safe for you to begin. Only do the exercises your physiotherapist has ticked, and try to do 3 sets a day unless you are advised otherwise.",
          "Never rush the exercises. Start slowly and build up gradually, because pain or uncomfortable stiffness after activity is a sign that it has been overdone.",
        ],
      },
      {
        heading: "Early moves",
        paragraphs: [
          "The early exercises include the hand, wrist and elbow, to prevent stiffness and reduce swelling. One is making a fist and opening your hand again, 10 times every hour.",
          "Pendular exercises are done standing, leaning forwards onto a stable support with your other arm, and letting the operated arm hang relaxed. You then gently swing it forwards and backwards, side to side, or as though drawing a circle on the floor.",
        ],
      },
      {
        heading: "Getting help with pain",
        paragraphs: [
          "Take the painkillers you are given as directed, so you are comfortable enough to do your exercises. Taking any as-needed pain relief before physiotherapy, rather than waiting until you are struggling, can help.",
          "If you cannot progress your exercises as planned, or you have persistent pain, swelling or worsening symptoms, contact the physiotherapy department at the hospital where you had your operation.",
        ],
      },
      {
        heading: "Outpatient physiotherapy",
        paragraphs: [
          "You will usually be asked to go to outpatient physiotherapy after you get home, to move on to more active exercises that strengthen your shoulder. NICE says you should understand your rehabilitation goals and why the exercises matter, and have a point of contact for advice and support.",
          "You may not get a full range of movement, but you should get enough to improve what you can do, with less pain. Improvements can continue for 12 to 18 months, depending on the procedure and on your movement and strength before the operation.",
        ],
      },
    ],
    helps: [
      "Only do the exercises your physiotherapist has ticked for you.",
      "Try to do 3 sets of your exercises a day, unless you are advised otherwise.",
      "Start slowly and build up gradually: pain or stiffness afterwards is a sign of doing too much.",
      "Take your painkillers as directed, so you are comfortable enough to exercise.",
      "Contact the physiotherapy department if you cannot progress, or have persistent pain or swelling.",
      "Ask your healthcare professional which exercises suit you before trying Arthritis UK's follow-along video.",
    ],
    tryThisWeek: [
      "Do only the exercises ticked for you.",
      "Aim for 3 sets a day.",
      "Start slowly and build up.",
    ],
    ask: "Which exercises should I be doing at this stage, and when can I move on to strengthening?",
    interactive: {
      kind: "flip-cards",
      title: "Moves the hospital leaflet describes",
      intro: "Check with your GP or physiotherapist first, and only do the exercises your physiotherapist has ticked for you.",
      cards: [
        { id: "fist", front: "Fist and stretch", when: "10 times every hour", back: "Bend your fingers down to make a fist, then open your hand back out." },
        { id: "wrist", front: "Wrist movements", when: "10 times", back: "Move your hand up and down from the wrist, then from side to side." },
        { id: "elbow", front: "Elbow bend and straighten", when: "10 times", back: "Bend your elbow, supporting it with your better arm if you need to, then try to fully straighten it." },
        { id: "scapular", front: "Shoulder blade setting", when: "5 times", back: "Sit in a chair. Slowly pull your shoulder blades back and down, hold for 5 seconds, then relax." },
        { id: "pendular", front: "Pendular swings", when: "20 times", back: "Lean onto a stable support with your other arm, let the operated arm hang relaxed, and gently swing it." },
      ],
    },
    sources: [WORCS_SR, WORCS_EX, AU_SHOULDER, NICE_NG157, AU_LETS_MOVE, AU_PAIN_SURGERY],
    quiz: {
      question: "What does pain or uncomfortable stiffness after exercise mean, according to the leaflet?",
      options: [{ text: "It has been overdone", right: true }, { text: "You should exercise harder" }, { text: "The joint has failed" }],
      why: "Pain or uncomfortable stiffness after activity is a sign that it has been overdone.",
    },
  },
  {
    id: "shr-pain-sleep",
    kicker: "Recovery",
    question: "How can I manage pain and sleep after a shoulder replacement?",
    hook: "Painkillers taken early, a sling at night, and a few weeks on your back. And who to call if the pain does not fit the plan.",
    short: "Controlling pain is essential so you can do your exercises, so tell the nurses early and take painkillers as directed. The local anaesthetic can wear off in the night, so painkillers before sleep help. Cambridge University Hospitals advises sleeping on your back for two weeks.",
    sections: [
      {
        heading: "Pain after the operation",
        paragraphs: [
          "Shoulder surgery can be painful, and you will be expected to do exercises soon after the operation. Controlling your pain is essential, so you can do these exercises and get the full benefit of your new shoulder.",
          "If you have any pain or discomfort in hospital, tell the nursing staff and do not wait until it is severe. You will be given medicines to keep your arm as free from pain as possible, which may include local anaesthetic, a pump that lets you control your own supply of painkiller, and injections or tablets.",
        ],
      },
      {
        heading: "The first nights",
        paragraphs: [
          "The local anaesthetic from the operation sometimes wears off in the middle of the night, which can disturb sleep and cause tiredness. You will probably be given painkillers before you go to sleep to make you more comfortable.",
          "Many people notice pain increases slightly around two to three days after surgery. This is common and typically does not signal a serious problem.",
        ],
      },
      {
        heading: "Taking painkillers well",
        paragraphs: [
          "Take your painkillers as directed, so you are comfortable enough to do your exercises. Use any as-needed medicine ahead of activities likely to cause discomfort, such as physiotherapy, a shower or going to bed, because it is far easier to prevent pain than to chase it.",
          "Keeping pain well controlled in the early days can help you heal and recover more quickly, start moving the joint safely and avoid complications such as chest infections or blood clots.",
        ],
      },
      {
        heading: "Sleeping",
        paragraphs: [
          "Cambridge University Hospitals advises sleeping on your back for two weeks after the surgery, and you may wish to wear your sling at night for support. Avoid lying on the operated side.",
          "Do not push up on your operated arm to get out of bed for the first 4 weeks. Sleeping higher, with extra pillows, can help you avoid this.",
        ],
      },
      {
        heading: "If pain does not settle",
        paragraphs: [
          "If you have persistent pain, swelling or worsening symptoms, contact the physiotherapy department at the hospital where you had your operation. If pain ever feels out of step with what you were told to expect, contact your care team as soon as possible.",
          "NICE says GPs and other primary care staff should refer people who develop new or worsening pain or loss of function related to their joint replacement to an orthopaedic surgical service.",
        ],
      },
    ],
    helps: [
      "Tell the nursing staff about pain early, rather than waiting until it is severe.",
      "Take as-needed painkillers before physiotherapy, a shower or bed, rather than waiting for pain to build.",
      "Sleep on your back for the first two weeks, with your sling on for support if you wish.",
      "Use extra pillows so you do not push up on your operated arm to get out of bed.",
      "Contact the physiotherapy department about persistent pain, swelling or worsening symptoms.",
    ],
    tryThisWeek: [
      "Tell the nurses about pain early.",
      "Take painkillers before exercises.",
      "Sleep on your back for now.",
    ],
    ask: "How should I time my painkillers, and how should I sleep in the first few weeks?",
    interactive: {
      kind: "signs",
      title: "Worth mentioning to your team",
      intro: "Tick anything that applies, to take to your physiotherapist, GP or care team.",
      signs: [
        "Persistent pain, swelling or worsening symptoms",
        "Pain that feels out of step with what I was told to expect",
        "Not able to progress my exercises as planned",
        "New or worsening pain, or losing function, later on",
      ],
      after: "Contact the physiotherapy department or your care team. If your symptoms get worse or you are concerned, the hospital leaflet says to call your GP, 111 or 999.",
      copyHeading: "Things I have noticed since my shoulder replacement",
    },
    sources: [WORCS_SR, AU_SHOULDER, AU_PAIN_SURGERY, CUH_OT, NICE_NG157],
    quiz: {
      question: "How long does Cambridge University Hospitals advise sleeping on your back?",
      options: [{ text: "Two weeks", right: true }, { text: "Two days" }, { text: "Six months" }],
      why: "Cambridge University Hospitals advises sleeping on your back for two weeks after the surgery.",
    },
  },
  {
    id: "shr-warning-signs",
    kicker: "Safety",
    question: "Which warning signs after a shoulder replacement need help straight away?",
    hook: "Most recoveries are trouble-free. A few signs, in the arm, the wound or the chest, are worth knowing by heart.",
    short: "A very small number of people have problems after a shoulder replacement, and most are minor. Contact your GP surgery as soon as possible about a worrying wound or signs of infection, and ask for an urgent GP appointment or get help from NHS 111 if you think you have a blood clot. Call 999 or go to A&E for pain and swelling with breathlessness or chest pain.",
    sections: [
      {
        heading: "Most recoveries go smoothly",
        paragraphs: [
          "As with any operation, a very small number of people have problems after a shoulder replacement. Most are quite minor and can be treated easily, and your surgeon will discuss the risks with you before you decide.",
          "The possible complications include infection, stiffness, pain, loosening or dislocation of the new joint, a broken bone, poor wound healing, bleeding into the wound, nerve damage and blood clots.",
        ],
      },
      {
        heading: "Infection",
        paragraphs: [
          "In most cases, infections can be cleared up with antibiotic tablets or injections. A more serious infection may need another operation.",
          "Arthritis UK says to contact your GP surgery as soon as possible if you have any concerns about your wound or think you may have signs of an infection. Care for your wound as your nurse showed you, and do not get it under water, in a bath or swimming pool, until it has completely healed or your doctor says it is safe.",
        ],
      },
      {
        heading: "Blood clots",
        paragraphs: [
          "A blood clot in a vein, called DVT, is more likely when you are having or have had surgery. Its symptoms, such as throbbing pain, swelling and red or darkened skin, can happen in the arm as well as the leg, and treatment to prevent it sometimes continues after you leave hospital, because a clot can happen weeks later.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you think you have DVT. You can call 111 or get help from 111 online.",
        ],
      },
      {
        heading: "Call 999",
        paragraphs: [
          "Call 999 or go to A&E if you have symptoms of DVT, such as pain and swelling, and you feel short of breath or have chest pain. A clot that travels to the lungs, called a pulmonary embolism, can be life-threatening and needs treatment straight away.",
          "Also call 999 or go to A&E for difficulty breathing that comes on suddenly, or pain in your chest or upper back. The NHS gives the same advice for possible sepsis, a serious reaction to an infection: very fast breathing, confusion or slurred speech, blue, pale or blotchy skin, or a very high or very low temperature or shivering.",
          "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
      {
        heading: "Other changes in the shoulder",
        paragraphs: [
          "For shoulder pain in general, the NHS says to ask for an urgent GP appointment or get help from NHS 111 if your arm or shoulder has changed shape or is badly swollen, is hot or cold to touch, or has no feeling, or if you feel feverish or unwell.",
          "The hospital leaflet says that if your symptoms or condition get worse, or you are concerned about anything, call your GP, 111 or 999.",
        ],
      },
    ],
    helps: [
      "Contact your GP surgery as soon as possible about any concern with your wound or signs of infection.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you think you have a blood clot.",
      "Call 999 or go to A&E for pain and swelling with shortness of breath or chest pain.",
      "Do not drive to A&E: ask someone to drive you, or call 999 and ask for an ambulance.",
      "Keep your wound out of the bath until it has completely healed or your doctor says it is safe.",
    ],
    tryThisWeek: [
      "Report wound worries promptly.",
      "Know when to call 111 or 999.",
      "Keep the wound out of the bath.",
    ],
    ask: "Who should I call if I notice signs of an infection or a blood clot, day or night?",
    interactive: {
      kind: "scenarios",
      title: "Which help, and how fast?",
      scenarios: [
        {
          id: "arm",
          situation: "A week after surgery, your arm is throbbing, swollen and darker in colour.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait for the 2-week check-up" }],
          why: "DVT symptoms can happen in the arm. Ask for an urgent GP appointment or get help from NHS 111 if you think you have DVT.",
        },
        {
          id: "breathless",
          situation: "Your arm is painful and swollen, and you suddenly feel short of breath.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Ring the GP surgery tomorrow" }],
          why: "Call 999 or go to A&E if you have symptoms of DVT, such as pain and swelling, and you feel short of breath or have chest pain.",
        },
        {
          id: "wound",
          situation: "You are worried your wound may be infected.",
          options: [{ text: "Contact your GP surgery as soon as possible", best: true }, { text: "Cover it and see how it goes" }],
          why: "Contact your GP surgery as soon as possible if you have any concerns about your wound or think you may have signs of an infection.",
        },
        {
          id: "sepsis",
          situation: "You feel confused and shivery, and your skin looks blotchy.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Try to sleep it off" }],
          why: "These can be signs of sepsis. Call 999 or go to A&E for confusion, blue, pale or blotchy skin, or a very high or very low temperature or shivering.",
        },
        {
          id: "drive",
          situation: "You need to go to A&E and your car is outside.",
          options: [{ text: "Ask someone to drive you, or call 999", best: true }, { text: "Drive yourself there" }],
          why: "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance.",
        },
      ],
    },
    sources: [AU_SHOULDER, WORCS_SR, NHS_DVT, NHS_PE, NHS_SEPSIS, AU_PREPARING, NHS_SHOULDER_PAIN, NHS_SURGERY_RECOVERY],
    quiz: {
      question: "Arm pain and swelling with sudden shortness of breath after surgery: what should you do?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait for your follow-up appointment" }, { text: "Take extra painkillers and rest" }],
      why: "Call 999 or go to A&E if you have symptoms of DVT, such as pain and swelling, and you feel short of breath or have chest pain.",
    },
  },
  {
    id: "shr-daily-life",
    kicker: "Everyday life",
    question: "How do I manage dressing, washing and reaching with a new shoulder?",
    hook: "Operated arm in first, no pushing up on it, and help with the heavy jobs. Small changes keep the new joint safe.",
    short: "Dress your operated arm first and undress it last, and wear loose or front-fastening tops. Do not rotate the arm or move it outwards, as in washing your hair, without checking with your physiotherapist. At first you will need help with shopping, laundry and housework, as everything needs to be done one-handed.",
    sections: [
      {
        heading: "Dressing",
        paragraphs: [
          "Dress your operated arm first and undress it last. Sit on the edge of the bed or a chair, and wear loose clothes or tops that fasten at the front, avoiding straps over the wound.",
          "You can use your operated arm to help dress your lower half. Gadgets such as hooks to help pull zips, undo buttons and pull jackets on can help.",
        ],
      },
      {
        heading: "Washing",
        paragraphs: [
          "While the arm is in the sling, take care with underarm hygiene. Carefully remove the sling and lean forward so your arm moves away from your body, wash and dry under the arm without lifting it, then put the sling back on as soon as possible.",
          "You can shower, covering the dressing if it is still on, but if you usually need to hold a rail, it may be sensible to strip wash while following the shoulder precautions. Do not get the sling wet.",
        ],
      },
      {
        heading: "Reaching and moving",
        paragraphs: [
          "Do not rotate the operated arm or move it outwards, as in washing or combing your hair or drawing the curtains, without checking with your physiotherapist.",
          "When you stand up or sit down, avoid pushing through your operated arm, and avoid low chairs and toilets. If you have stairs, avoid using the banister on the operated side.",
        ],
      },
      {
        heading: "Around the house",
        paragraphs: [
          "For the first 6 weeks, avoid heavy lifting, usually anything heavier than a cup of tea. Avoid heavy housework such as changing the bed sheets, though you can do light tasks such as dusting as you feel able.",
          "At first you will need help with shopping, laundry and housework, because it will all need to be done one-handed. Keep meals simple, with ready meals and pre-chopped vegetables, and a non-slip mat or a plate guard can help with eating one-handed.",
        ],
      },
      {
        heading: "Help at home",
        paragraphs: [
          "An occupational therapist can advise you on managing daily activities at home, and may suggest small changes to your home or equipment. If you have family and friends who could help, speak to them before you come into hospital.",
          "Your local council offers a needs assessment, which is free, and equipment and small adaptations to your home will be provided for free if you are assessed as needing them.",
        ],
      },
    ],
    helps: [
      "Dress the operated arm first and undress it last.",
      "Wear loose clothes or front-fastening tops.",
      "Check with your physiotherapist before washing or combing your hair, or drawing the curtains.",
      "Avoid pushing up through your operated arm from a chair, bed or toilet.",
      "Get help with shopping, laundry and heavier housework at first.",
      "Ask social services at your local council about a free needs assessment.",
    ],
    tryThisWeek: [
      "Put the operated arm in first.",
      "Choose front-fastening tops.",
      "Get help with the heavy jobs.",
    ],
    ask: "Which movements should I avoid for now, and which equipment would help me at home?",
    interactive: {
      kind: "scenarios",
      title: "Around the house",
      scenarios: [
        {
          id: "hair",
          situation: "You want to wash your own hair a week after surgery.",
          options: [{ text: "Check with your physiotherapist first", best: true }, { text: "Lift the arm and get on with it" }],
          why: "Do not rotate the operated arm or move it outwards, as in washing or combing your hair, without checking with your physiotherapist.",
        },
        {
          id: "chair",
          situation: "You need to get up from a low armchair.",
          options: [{ text: "Use higher furniture, without pushing on the arm", best: true }, { text: "Push up with both arms" }],
          why: "When you stand up or sit down, avoid pushing through your operated arm, and avoid low chairs and toilets.",
        },
        {
          id: "sheets",
          situation: "The bed sheets need changing.",
          options: [{ text: "Ask someone to help", best: true }, { text: "Do it yourself, slowly" }],
          why: "Avoid heavy housework such as changing the bed sheets, though you can do light tasks such as dusting as you feel able.",
        },
        {
          id: "shirt",
          situation: "You are putting on a shirt.",
          options: [{ text: "Operated arm in first", best: true }, { text: "Other arm in first" }],
          why: "Dress your operated arm first and undress it last.",
        },
      ],
    },
    sources: [CUH_OT, WORCS_SR, NHS_GADGETS],
    quiz: {
      question: "Which arm goes into a sleeve first after a shoulder replacement?",
      options: [{ text: "The operated arm", right: true }, { text: "The other arm" }, { text: "It makes no difference" }],
      why: "Dress your operated arm first and undress it last.",
    },
  },
  {
    id: "shr-driving-work",
    kicker: "Driving and work",
    question: "When can I drive and go back to work after a shoulder replacement?",
    hook: "Not while the immobiliser is on, and only with full control of the car. Work can take up to three months, depending on the job.",
    short: "You can drive again once you can safely control the vehicle and do an emergency stop, but not while you still use the shoulder immobiliser, usually 4 to 6 weeks. It may take up to 3 months to return to work, depending on the type of work. Heavy manual work is not recommended at any time after a shoulder replacement.",
    sections: [
      {
        heading: "Driving again",
        paragraphs: [
          "You can drive after a shoulder replacement as long as you can safely control the vehicle and do an emergency stop. Do not drive while you are still using a shoulder immobiliser, usually between 4 and 6 weeks, and you need to feel in full control of the vehicle.",
          "Cambridge University Hospitals says not to drive until you can control the steering wheel and do an emergency stop, which may be sooner than 6 weeks. Your consultant will give you guidance, as it varies with your circumstances.",
        ],
      },
      {
        heading: "Insurance and the DVLA",
        paragraphs: [
          "Check with your insurance company, and be confident that you can control the vehicle at all times.",
          "The government's page on surgery and driving says to tell DVLA if you have had an operation and you are still unable to drive 3 months later. Ask your doctor if you are not sure how your operation will affect your driving.",
        ],
      },
      {
        heading: "Back to work",
        paragraphs: [
          "It may take up to 3 months before you can return to work, depending on the type of work you do. You will be given a sick note for work, and if you need further sick notes, see your GP.",
          "Heavy manual activities are not recommended at any time after a shoulder replacement, because heavy activity can loosen the parts in the bone and damage the artificial joint.",
        ],
      },
      {
        heading: "Planning ahead",
        paragraphs: [
          "You will be unable to drive for a while after you leave hospital, so think about how you will do your shopping, perhaps with help from family or online.",
          "NICE says the information you are given should cover returning to work and returning to usual activities, such as driving.",
        ],
      },
      {
        heading: "Support at work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. It could give a grant towards things like specialist equipment, the costs of travelling to work if you cannot use public transport, or physical changes to your workplace.",
          "It can include a temporary condition, like a broken leg, and you need to be in paid work, or about to start or return to paid work in the next 12 weeks. A grant will not affect any other benefits you get, and you will not have to pay it back.",
        ],
      },
    ],
    helps: [
      "Wait until you can safely control the car and do an emergency stop, and not while you still use the immobiliser.",
      "Check with your insurance company before you drive again.",
      "Ask your doctor if you are not sure how your operation will affect your driving.",
      "Ask your consultant when it is realistic to go back to your kind of work.",
      "Call the Access to Work helpline on 0800 121 7479 if you are not sure whether you are eligible.",
    ],
    tryThisWeek: [
      "Check your insurance cover.",
      "Ask your consultant about work.",
      "Plan shopping without the car.",
    ],
    ask: "When will I be fit to drive, and when is it realistic to go back to my kind of work?",
    interactive: {
      kind: "timeline",
      title: "Back on the road, back at work",
      steps: [
        { id: "immobiliser", when: "4 to 6 weeks", title: "Immobiliser off", points: ["No driving while you still use it.", "Your consultant will guide you."] },
        { id: "driving", when: "When you are in control", title: "Driving again", points: ["Safe control and an emergency stop.", "Check your insurance cover."] },
        { id: "work", when: "Up to 3 months", title: "Back to work", points: ["Depends on the type of work you do.", "Heavy manual work is not recommended."] },
        { id: "dvla", when: "3 months", title: "Still unable to drive?", points: ["Tell DVLA, says the government.", "Ask your doctor if you are not sure."] },
      ],
    },
    sources: [AU_SHOULDER, WORCS_SR, CUH_OT, GOV_SURGERY_DRIVING, GOV_ATW, GOV_ATW_ELIGIBILITY, NICE_NG157],
    quiz: {
      question: "When does the hospital leaflet say not to drive?",
      options: [{ text: "While you still use the shoulder immobiliser", right: true }, { text: "Only on the day of surgery" }, { text: "Never again" }],
      why: "Do not drive while you are still using a shoulder immobiliser, usually between 4 and 6 weeks, and you need to feel in full control of the vehicle.",
    },
  },
  {
    id: "shr-activity",
    kicker: "Activity",
    question: "Which activities and sports can I do with a new shoulder?",
    hook: "Staying active helps, but heavy lifting and jerky movements are the ones to leave behind. Your physiotherapist guides the return to sport.",
    short: "Staying active matters after surgery, and your physiotherapist can guide you on returning to sport and leisure as your movement and strength improve. In the long term, avoid heavy lifting, tugging, jerky movements and extreme movements. Heavy manual activities are not recommended at any time after a shoulder replacement.",
    sections: [
      {
        heading: "Staying active",
        paragraphs: [
          "Staying active is important if you are recovering from surgery, and Arthritis UK says that over time exercise can increase your mobility, help your balance and boost your mood.",
          "Your physiotherapist will be able to guide you on returning to sport and leisure activities as your movement and muscle strength improve. NICE says the information you are given should cover returning to usual activities, such as playing sports.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "In the long term, avoid heavy lifting, tugging, jerky movements and any extreme movements that may force the joint. Heavy manual activities are not recommended at any time after a shoulder replacement.",
          "If both sides of the joint were replaced, avoid heavy loads to help the new joint last longer. This is especially important after a reverse shoulder replacement.",
        ],
      },
      {
        heading: "Realistic movement",
        paragraphs: [
          "The range of movement will be less than with a healthy natural joint, and some movements, such as reaching above your head, may not be possible. Most people can carry on with normal everyday activities.",
          "Arthritis UK's Let's Move for Surgery toolkit has a 15-minute follow-along video of shoulder replacement exercises, and full body workouts to help keep up overall fitness. Get advice from your healthcare professional about which exercises suit you first.",
        ],
      },
      {
        heading: "The weekly guide",
        paragraphs: [
          "Speak to a GP first if you have not exercised for some time, or if you have medical conditions or concerns, and make sure your activity and its intensity suit your fitness.",
          "Adults are advised to do at least 150 minutes of moderate intensity activity a week, such as walking or riding a bike, or 75 minutes of vigorous activity if they are already active. Adults aged 65 and over should aim to be active every day, even if it is just light activity, with activities for strength, balance and flexibility on at least 2 days a week.",
        ],
      },
      {
        heading: "Building up",
        paragraphs: [
          "If an exercise leaves you sore for more than a few hours, scale back rather than abandoning it, and then gradually build your strength back up.",
          "Never rush exercises. Start slowly and increase gradually, because pain or uncomfortable stiffness after activity is a sign that it has been overdone.",
        ],
      },
    ],
    helps: [
      "Ask your physiotherapist about returning to sport and leisure activities as your strength improves.",
      "Avoid heavy lifting, tugging, jerky movements and extreme movements in the long term.",
      "Get advice from your healthcare professional about which exercises suit you.",
      "Speak to a GP first if you have not exercised for some time.",
      "If an exercise leaves you sore for more than a few hours, scale back rather than stop.",
    ],
    tryThisWeek: [
      "Ask your physio about sport.",
      "Avoid heavy and jerky lifting.",
      "Scale back, rather than stop, if sore.",
    ],
    ask: "Which sports and activities would be sensible for my new shoulder, and when could I start them?",
    interactive: {
      kind: "scenarios",
      title: "Choosing an activity",
      scenarios: [
        {
          id: "furniture",
          situation: "A friend asks you to help move some heavy furniture.",
          options: [{ text: "Say no, and avoid heavy loads", best: true }, { text: "Help, but carefully" }],
          why: "Avoid heavy lifting, tugging and jerky movements. Heavy manual activities are not recommended at any time after a shoulder replacement.",
        },
        {
          id: "sport",
          situation: "You want to go back to a sport you used to play.",
          options: [{ text: "Ask your physiotherapist first", best: true }, { text: "Start back at full effort" }],
          why: "Your physiotherapist will be able to guide you on returning to sport and leisure activities as your movement and muscle strength improve.",
        },
        {
          id: "start",
          situation: "You have not exercised for years and want to start.",
          options: [{ text: "Speak to a GP first", best: true }, { text: "Start with a hard workout" }],
          why: "Speak to a GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        },
        {
          id: "sore",
          situation: "An exercise left you sore all evening.",
          options: [{ text: "Scale back, then build up again", best: true }, { text: "Give up exercising" }],
          why: "If an exercise leaves you sore for more than a few hours, scale back rather than abandoning it, and then gradually build your strength back up.",
        },
      ],
    },
    sources: [AU_SHOULDER, WORCS_SR, AU_LETS_MOVE, NHS_ACTIVE_OLDER, NHS_ACTIVE_ADULTS, NICE_NG157, AU_PAIN_SURGERY],
    quiz: {
      question: "Which kind of activity does Arthritis UK say is not recommended at any time with a new shoulder?",
      options: [{ text: "Heavy manual activities", right: true }, { text: "Walking" }, { text: "Light dusting" }],
      why: "Heavy manual activities are not recommended at any time after a shoulder replacement, because heavy activity can loosen the parts in the bone.",
    },
  },
  {
    id: "shr-long-term",
    kicker: "Long term",
    question: "How long does a new shoulder last, and what follow-up will I have?",
    hook: "A very good chance of ten years or more. Knowing what wears a new shoulder out, and when to get it checked, helps it go the distance.",
    short: "Arthritis UK says there is a very good chance a shoulder replacement will last for 10 years, after which it may loosen or wear out. A second operation may then be possible, though it is usually less effective. You will have a check-up about 2 weeks after the operation, and new or worsening pain or loss of function later should be checked.",
    sections: [
      {
        heading: "How long it lasts",
        paragraphs: [
          "There is a very good chance that a shoulder replacement will last for 10 years, says Arthritis UK. After this time it may loosen or wear out.",
          "The number of reverse shoulder replacements has increased greatly in recent years. It is not yet clear how long this type lasts, and this is being studied.",
        ],
      },
      {
        heading: "A second operation",
        paragraphs: [
          "A second joint replacement, called revision surgery, may then be possible, although it is usually not as effective at easing symptoms. The original parts are removed, along with any cement that was used.",
          "By then the upper arm bone has often become thinner, and more bone is removed in the operation, so it is more likely to break. Revision is usually a little easier after shoulder resurfacing, because less bone was removed the first time.",
        ],
      },
      {
        heading: "Protecting the joint",
        paragraphs: [
          "In the long term, avoid heavy lifting, tugging, jerky movements and any extreme movements that may force the joint. Heavy activity can loosen the parts in the bone and damage the artificial joint.",
          "If both the ball and the socket were replaced, avoid heavy loads to help the joint last longer, especially after a reverse shoulder replacement.",
        ],
      },
      {
        heading: "Follow-up",
        paragraphs: [
          "After about 2 weeks you will have a routine outpatient check-up to make sure your recovery is going well and your wound has healed, and you may be offered outpatient physiotherapy.",
          "NICE says GPs and other primary care staff should refer people who develop new or worsening pain or loss of function related to their joint replacement to an orthopaedic surgical service.",
        ],
      },
      {
        heading: "Still improving",
        paragraphs: [
          "Improvements can continue for 12 to 18 months, depending on the procedure and on your movement and strength before the operation. You may not get a full range of movement, but you should have less pain and be able to do more.",
          "If you stopped or changed any of your regular medicines before the operation, talk to your rheumatologist or another healthcare professional about when to start them again.",
        ],
      },
    ],
    helps: [
      "Go to your outpatient check-up about 2 weeks after the operation.",
      "See your GP about new or worsening pain or loss of function in your new shoulder.",
      "Avoid heavy lifting, tugging and jerky movements to help the joint last.",
      "Ask when to restart any medicines you stopped before the operation.",
    ],
    tryThisWeek: [
      "Note your check-up date.",
      "Tell your GP about new pain.",
      "Avoid heavy, jerky lifting.",
    ],
    ask: "How long is my type of shoulder replacement likely to last, and what follow-up should I expect?",
    interactive: {
      kind: "risk-check",
      title: "What can shorten a new shoulder's life?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "years", label: "Having had it 10 years or more", note: "After about 10 years, a shoulder replacement may loosen or wear out.", changeable: false },
        { id: "reverse", label: "A reverse shoulder replacement", note: "It is not yet clear how long this type lasts. Avoiding heavy loads is especially important.", changeable: false },
        { id: "heavy", label: "Heavy lifting or loads", note: "Heavy activity can loosen the parts in the bone and damage the artificial joint.", changeable: true },
        { id: "manual", label: "Heavy manual work", note: "Heavy manual activities are not recommended at any time after a shoulder replacement.", changeable: true },
        { id: "jerky", label: "Tugging or jerky movements", note: "Avoid tugging, jerky movements and extreme movements that may force the joint.", changeable: true },
      ],
    },
    sources: [AU_SHOULDER, WORCS_SR, NICE_NG157],
    quiz: {
      question: "How long is a shoulder replacement very likely to last, according to Arthritis UK?",
      options: [{ text: "10 years", right: true }, { text: "About 1 year" }, { text: "About 2 months" }],
      why: "There is a very good chance that a shoulder replacement will last for 10 years, says Arthritis UK.",
    },
  },
];
