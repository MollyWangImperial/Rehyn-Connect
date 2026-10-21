import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Osteoporosis page's pieces (content/library-conditions/body.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, the
// Royal Osteoporosis Society and Arthritis UK (formerly Versus Arthritis). Exercises are described only
// as those pages describe them. General information only; it never replaces what a person's own team
// tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const ros = (label: string, path: string): LearnSource => ({ label: `Royal Osteoporosis Society: ${label}`, url: `https://theros.org.uk/information-and-support/${path}` });

const NHS_OP = nhs("Osteoporosis", "conditions/osteoporosis/");
const NHS_OP_CAUSES = nhs("Osteoporosis: causes", "conditions/osteoporosis/causes/");
const NHS_OP_TREATMENT = nhs("Osteoporosis: treatment", "conditions/osteoporosis/treatment/");
const NHS_OP_PREVENTION = nhs("Osteoporosis: prevention", "conditions/osteoporosis/prevention/");
const NHS_OP_LIVING = nhs("Living with osteoporosis", "conditions/osteoporosis/living-with/");
const NHS_DEXA = nhs("Bone density scan (DEXA scan)", "tests-and-treatments/dexa-scan/");
const NHS_ALEN_ABOUT = nhs("About alendronic acid", "medicines/alendronic-acid/about-alendronic-acid/");
const NHS_ALEN_HOW = nhs("How and when to take alendronic acid", "medicines/alendronic-acid/how-and-when-to-take-alendronic-acid/");
const NHS_ALEN_SIDE = nhs("Side effects of alendronic acid", "medicines/alendronic-acid/side-effects-of-alendronic-acid/");
const NHS_ALEN_QS = nhs("Common questions about alendronic acid", "medicines/alendronic-acid/common-questions-about-alendronic-acid/");
const NHS_FALLS = nhs("Falls", "conditions/falls/");
const NHS_BROKEN_HIP = nhs("Broken hip", "conditions/broken-hip/");
const NHS_BROKEN_WRIST = nhs("Broken arm or wrist", "conditions/broken-arm-or-wrist/");
const NHS_VIT_D = nhs("Vitamin D", "conditions/vitamins-and-minerals/vitamin-d/");
const NHS_CALCIUM = nhs("Calcium", "conditions/vitamins-and-minerals/calcium/");
const NHS_OLDER_ACTIVITY = nhs("Physical activity guidelines for older adults", "live-well/exercise/physical-activity-guidelines-older-adults/");
const NHS_STRENGTH = nhs("Strength exercises", "live-well/exercise/strength-exercises/");
const NHS_BALANCE = nhs("Balance exercises", "live-well/exercise/balance-exercises/");

const ROS_BONES = ros("How your bones work", "about-osteoporosis-and-osteopenia/how-your-bones-work/");
const ROS_WHAT = ros("What is osteoporosis?", "about-osteoporosis-and-osteopenia/what-is-osteoporosis/");
const ROS_SYMPTOMS = ros("Osteoporosis symptoms", "about-osteoporosis-and-osteopenia/osteoporosis-symptoms/");
const ROS_CANNOT_CHANGE = ros("Risk factors you cannot change", "causes-and-risk-factors/risk-factors-you-cannot-change/");
const ROS_CAN_CHANGE = ros("Risk factors you can change", "causes-and-risk-factors/risk-factors-you-can-change/");
const ROS_MEDICINES = ros("Medicines that increase your risk", "causes-and-risk-factors/medicines-that-increase-your-risk/");
const ROS_DEXA = ros("Bone density scan (DEXA / DXA)", "diagnosis-and-testing/bone-density-scan-dexa-dxa/");
const ROS_FRAX = ros("Fracture risk assessments", "diagnosis-and-testing/fracture-risk-assessments/");
const ROS_FINDING_TREATMENT = ros("Finding the right treatment", "treatments-and-medicines/finding-the-right-osteoporosis-treatment/");
const ROS_ALENDRONATE = ros("Alendronate (alendronic acid)", "treatments-and-medicines/a-to-z-list-of-medicines/alendronate/");
const ROS_DENOSUMAB = ros("Denosumab", "treatments-and-medicines/a-to-z-list-of-medicines/denosumab/");
const ROS_ZOLEDRONATE = ros("Zoledronate (zoledronic acid)", "treatments-and-medicines/a-to-z-list-of-medicines/zoledronate-zoledronic-acid/");
const ROS_TERIPARATIDE = ros("Teriparatide", "treatments-and-medicines/a-to-z-list-of-medicines/teriparatide/");
const ROS_ROMOSOZUMAB = ros("Romosozumab", "treatments-and-medicines/a-to-z-list-of-medicines/romosozumab/");
const ROS_RALOXIFENE = ros("Raloxifene", "treatments-and-medicines/a-to-z-list-of-medicines/raloxifene/");
const ROS_JAW = ros("Jaw bone problems", "treatments-and-medicines/rare-side-effects/jaw-bone-problems/");
const ROS_CALCIUM = ros("Calcium", "food-and-supplements/calcium/");
const ROS_VIT_D = ros("Vitamin D", "food-and-supplements/vitamin-d/");
const ROS_EXERCISE_BONES = ros("Exercise for bones", "exercise/exercise-for-bones/");
const ROS_EXERCISE_SAFELY = ros("How to exercise safely for bones", "exercise/how-to-exercise-safely-for-bones/");
const ROS_BALANCE = ros("Exercise to help your balance", "exercise/exercise-to-help-your-balance/");
const ROS_POSTURE = ros("Exercises to help with posture", "exercise/exercise-for-symptoms-of-spinal-fractures/exercises-to-help-with-posture/");
const ROS_BACK_PAIN = ros("Exercises to help with back pain", "exercise/exercise-for-symptoms-of-spinal-fractures/exercises-to-help-with-back-pain/");
const ROS_SPINAL = ros("Spinal fractures (vertebral fractures)", "living-with-osteoporosis-and-broken-bones/spinal-fractures-vertebral-fractures/");
const ROS_BROKEN_BONES = ros("Broken hips, wrists and other bones", "living-with-osteoporosis-and-broken-bones/broken-hips-wrists-and-other-bones/");
const ROS_PROTECT_BACK = ros("Protecting your back", "living-with-osteoporosis-and-broken-bones/moving-and-lifting-safely/protecting-your-back/");
const ROS_BENDING = ros("Bending forward", "living-with-osteoporosis-and-broken-bones/moving-and-lifting-safely/bending-forward/");
const ROS_EVERYDAY = ros("Getting back to everyday activities", "living-with-osteoporosis-and-broken-bones/moving-and-lifting-safely/getting-back-to-everyday-activities-after-a-broken-bone/");
const ROS_FALLS = ros("Avoiding trips, slips and falls", "living-with-osteoporosis-and-broken-bones/moving-and-lifting-safely/avoiding-trips-slips-and-falls/");
const AUK: LearnSource = { label: "Arthritis UK (formerly Versus Arthritis): Osteoporosis", url: "https://www.arthritis-uk.org/information-and-support/understanding-arthritis/conditions/osteoporosis/" };

export const osteoAnswers: LearnArticle[] = [
  {
    id: "op-what-it-is",
    kicker: "Understanding",
    question: "What is osteoporosis?",
    hook: "Bone is living tissue, always being broken down and rebuilt. In osteoporosis, that balance tips and bones thin from the inside.",
    short: "Osteoporosis is a health condition that weakens bones, making them fragile and more likely to break. It develops slowly over several years and is often only found when a fall or sudden impact causes a break. It is not usually painful until a bone is broken, and it can be treated with bone strengthening medicines.",
    sections: [
      {
        heading: "Bone is living tissue",
        paragraphs: [
          "Bone is a living, active tissue that is constantly renewing itself. Cells called osteoclasts break down old bone, and cells called osteoblasts build new bone.",
          "This process is called bone remodelling. As long as it is in balance, your bones stay healthy and strong. The adult skeleton is completely renewed over a period of 7 to 10 years.",
        ],
      },
      {
        heading: "What changes in osteoporosis",
        paragraphs: [
          "When remodelling becomes out of balance, the outer shell of the bone gets thinner. The scaffolding inside the bone also thins and sometimes breaks down. This is osteoporosis.",
          "The word osteoporosis means spongy, or porous, bone. The holes in its honeycomb structure become larger and the overall density is lower, which is why the bone is more likely to break.",
        ],
      },
      {
        heading: "Why it comes with age",
        paragraphs: [
          "Bones are thickest and strongest in early adult life, until your late 20s. You gradually start losing bone from around the age of 35.",
          "This happens to everyone, but some people lose bone much faster than normal. Women also lose bone rapidly in the first few years after the menopause.",
        ],
      },
      {
        heading: "A silent condition",
        paragraphs: [
          "The thinning happens on the inside of the bones, so they will not look or feel any different. Osteoporosis is not usually painful until a bone is broken.",
          "Breaks are most common in the wrists, hips and spine. Sometimes a cough or sneeze can cause a broken rib or the partial collapse of one of the bones of the spine.",
        ],
      },
      {
        heading: "Osteopenia",
        paragraphs: [
          "The stage before osteoporosis is called osteopenia. A bone density scan shows lower bone density than the average for your age, but not low enough to be classed as osteoporosis.",
          "Osteopenia does not always lead to osteoporosis. There are steps you can take to keep your bones healthy and reduce your risk.",
        ],
      },
    ],
    helps: [
      "If you have broken a bone easily, talk to your doctor about your chance of osteoporosis and breaking more bones.",
      "Take regular exercise to keep your bones as strong as possible.",
      "Eat foods rich in calcium and vitamin D, and consider a daily supplement containing 10 micrograms of vitamin D.",
      "Give up smoking and cut down on alcohol.",
      "Call the Royal Osteoporosis Society's nurse helpline on 0300 102 3030.",
    ],
    tryThisWeek: [
      "Ask your doctor about an easy break.",
      "Plan some regular exercise.",
      "Save the helpline number.",
    ],
    ask: "Do my bones show osteopenia or osteoporosis, and what does that mean for me?",
    interactive: {
      kind: "timeline",
      title: "Your bones through life",
      steps: [
        { id: "young", when: "Childhood and teens", title: "Bone builds fast", points: ["New bone is formed very quickly.", "Bones grow bigger and stronger."] },
        { id: "peak", when: "Late 20s", title: "At their strongest", points: ["Bones are thickest and strongest in early adult life."] },
        { id: "loss", when: "From about 35", title: "Slow loss begins", points: ["You gradually start losing bone.", "This happens to everyone."] },
        { id: "menopause", when: "After the menopause", title: "Faster loss for women", points: ["Oestrogen, which keeps bones healthy, falls.", "Women lose bone rapidly in the first few years."] },
        { id: "later", when: "Later life", title: "When the balance tips", points: ["Some people lose bone much faster than normal.", "This can lead to osteoporosis."] },
      ],
    },
    sources: [ROS_BONES, AUK, NHS_OP_CAUSES, NHS_OP, ROS_WHAT, ROS_SYMPTOMS],
    quiz: {
      question: "What happens inside bones with osteoporosis?",
      options: [{ text: "The outer shell and inner scaffolding thin", right: true }, { text: "The bones swell up" }, { text: "The bones stop renewing at all" }],
      why: "When remodelling becomes out of balance, the outer shell of the bone gets thinner. The scaffolding inside the bone also thins and sometimes breaks down.",
    },
  },
  {
    id: "op-dexa",
    kicker: "Tests",
    question: "What is a DEXA scan, and what does my T-score mean?",
    hook: "A short, painless scan measures how dense your bones are. The T-score compares them with a healthy young adult's.",
    short: "A bone density scan, or DEXA scan, uses low dose X-rays to see how dense your bones are. It is quick and painless. Your result is often given as a T-score, which compares your bone density with that of healthy young adults, and it is used alongside a fracture risk assessment to decide whether you would benefit from treatment.",
    sections: [
      {
        heading: "What the scan is",
        paragraphs: [
          "A bone density scan uses low dose X-rays to see how dense, or strong, your bones are. You may also hear it called a DEXA or DXA scan.",
          "It uses a much lower level of radiation than standard X-rays. The amount is similar to what we get from three days of normal life. It is not recommended if you are pregnant.",
        ],
      },
      {
        heading: "Who has one",
        paragraphs: [
          "You may need a scan if you are over 50 with a risk of developing osteoporosis, or under 50 with other risk factors, such as smoking or a previous broken bone.",
          "You may be referred if you have broken a bone, or have signs of spinal fractures such as height loss, a change in posture or unexplained back pain. Some people are offered a medicine without a scan. This is more common over the age of 75, because the scans are not as accurate when you get older.",
        ],
      },
      {
        heading: "On the day",
        paragraphs: [
          "Wear clothes without metal, such as zips, belts or underwired bras. Bring a list of your medicines. You do not need to stop any medicines, and you can eat and drink as normal.",
          "You lie on your back on a firm couch while a scanning arm passes over your lower spine and hips. You do not go into a tunnel or need an injection. The scan takes 10 to 20 minutes, depending on the part of the body being scanned.",
        ],
      },
      {
        heading: "Your T-score",
        paragraphs: [
          "A T-score compares your bone density with the normal range found in young healthy adults. A score above minus 1 is normal.",
          "A score between minus 1 and minus two and a half shows some bone loss and is called osteopenia. This score is expected in older adults. A score below minus two and a half is defined as osteoporosis.",
        ],
      },
      {
        heading: "More than one number",
        paragraphs: [
          "The scan is just one part of checking your bone strength. It is usually put together with a fracture risk assessment, such as FRAX, which uses your age, height, weight, family history and other factors to work out your chance of breaking a bone in the next 10 years.",
          "So you could be in the osteoporosis range but not benefit from medicine, or in the osteopenia range and be recommended medicine. You will normally have a repeat scan every two to five years, because bone density changes very slowly.",
        ],
      },
    ],
    helps: [
      "If you think you need a bone density scan, talk to your doctor about why.",
      "On the day, wear clothes without metal and bring a list of your medicines.",
      "Let the scanning department know beforehand if you cannot lie flat on your back.",
      "If your results have not arrived in the expected time, contact the person who referred you.",
      "If you need more scans, try to have them at the same hospital and, if possible, on the same machine.",
    ],
    tryThisWeek: [
      "Ask your doctor if you need a scan.",
      "Pick clothes without metal.",
      "Chase results that are late.",
    ],
    ask: "What is my T-score, and what is my chance of breaking a bone in the next 10 years?",
    interactive: {
      kind: "flip-cards",
      title: "Reading your result",
      intro: "Turn each card to see what that part of your result means.",
      cards: [
        { id: "normal", front: "Normal", when: "T-score above minus 1", back: "Your bone density is in the normal range for a young adult." },
        { id: "osteopenia", front: "Low bone density", when: "Minus 1 to minus two and a half", back: "Slightly below the normal range for a young adult. Also called osteopenia, and expected in older adults." },
        { id: "osteoporosis", front: "Osteoporosis range", when: "Minus two and a half and below", back: "Much lower than the normal range for a young adult." },
        { id: "z-score", front: "Z-score", when: "Mainly for children and young adults", back: "Compares your bone density with people of the same age as you." },
        { id: "frax", front: "Fracture risk assessment", when: "Used alongside the scan", back: "A questionnaire, such as FRAX, that works out your chance of breaking a bone in the next 10 years." },
      ],
    },
    sources: [NHS_DEXA, ROS_DEXA, NHS_OP, ROS_FRAX],
    quiz: {
      question: "What does a T-score compare your bone density with?",
      options: [{ text: "The normal range in young healthy adults", right: true }, { text: "Your last blood test" }, { text: "People in their 90s" }],
      why: "A T-score compares your bone density with the normal range found in young healthy adults.",
    },
  },
  {
    id: "op-who",
    kicker: "Risk",
    question: "Who gets osteoporosis?",
    hook: "Anyone can, but the menopause, steroid tablets, a family history and a low body weight all raise the chance.",
    short: "Osteoporosis can affect men and women, and it is more common in older people. Women are more at risk because oestrogen falls at the menopause. Taking high-dose steroid tablets for more than 3 months, a parent with a hip fracture and a low body weight are among the other things that raise the risk.",
    sections: [
      {
        heading: "Women and the menopause",
        paragraphs: [
          "Women are more at risk than men because the hormone changes at the menopause directly affect bone density. Oestrogen is essential for healthy bones, and after the menopause its levels fall. Arthritis UK says women are about four times more likely than men to develop osteoporosis.",
          "The risk is greater with an early menopause before the age of 45, a hysterectomy before 45, particularly when the ovaries are also removed, or periods that have stopped for more than 6 months through over-exercising or too much dieting.",
        ],
      },
      {
        heading: "Men",
        paragraphs: [
          "In most men, the cause is unknown. But there is a link to testosterone, and the risk is higher in men with low levels of it.",
          "Known causes of low testosterone include some medicines, such as steroid tablets, and alcohol misuse. Some treatments for prostate cancer also lower testosterone.",
        ],
      },
      {
        heading: "Steroids and other medicines",
        paragraphs: [
          "Taking high-dose steroid tablets for more than 3 months raises the risk. Steroid tablets are widely used for conditions such as arthritis and asthma.",
          "Other medicines linked with weaker bones include some breast and prostate cancer treatments, some anti-seizure medicines and the diabetes medicine pioglitazone. The benefit of a medicine may outweigh the risk, so speak to a healthcare professional before you stop any medicine.",
        ],
      },
      {
        heading: "Family and body frame",
        paragraphs: [
          "If either of your parents had osteoporosis, you have a higher chance of developing it. If either of them broke a bone, especially a hip, you are more likely to break a bone yourself.",
          "Being underweight raises the chance of breaking a bone, and the NHS lists a body mass index of 19 or less as a risk factor. Having less muscle mass and strength also raises the chance of falls and broken bones.",
        ],
      },
      {
        heading: "Other conditions and habits",
        paragraphs: [
          "Hormone conditions such as an overactive thyroid, rheumatoid arthritis, and problems absorbing food, as in coeliac disease and Crohn's disease, can all raise the risk.",
          "So can heavy drinking, smoking, an eating disorder and long periods of inactivity, such as bed rest. But having one or more risk factors does not mean you will definitely develop osteoporosis.",
        ],
      },
    ],
    helps: [
      "If you are over 50 and a parent had osteoporosis or a broken bone, speak to your doctor about a fracture risk assessment.",
      "If you have recently broken a bone from a small fall and have not had your risk checked, speak to your GP.",
      "Speak to a healthcare professional before you stop any medicine.",
      "If you smoke, stopping can reduce your chance of osteoporosis and broken bones.",
      "Keep to 14 units of alcohol a week or less.",
      "If you are worried you are underweight and find it hard to gain weight, speak to your GP.",
    ],
    tryThisWeek: [
      "Ask about a fracture risk assessment.",
      "Check before stopping any medicine.",
      "Keep alcohol to 14 units or less.",
    ],
    ask: "Given my medicines and family history, should I have a fracture risk assessment?",
    interactive: {
      kind: "risk-check",
      title: "What raises the risk?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "menopause", label: "Menopause before 45", note: "Oestrogen falls earlier, so bone loss speeds up. HRT may be helpful for some women.", changeable: false },
        { id: "steroids", label: "Steroid tablets for over 3 months", note: "High-dose steroid tablets raise the risk. Speak to a healthcare professional before stopping any medicine.", changeable: false },
        { id: "parent", label: "A parent who broke a hip", note: "You are more likely to break a bone. If you are over 50, ask about a fracture risk assessment.", changeable: false },
        { id: "fracture", label: "A bone broken in a small fall", note: "You are more likely to break another, and the risk is highest in the first one to two years.", changeable: false },
        { id: "weight", label: "Low body weight", note: "Being underweight raises the chance of breaking a bone. Speak to your GP if gaining weight is hard.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Smoking weakens your bones. Stopping can reduce your chance of osteoporosis and broken bones.", changeable: true },
        { id: "alcohol", label: "More than 14 units a week", note: "Too much alcohol raises the chance of osteoporosis and of falling over.", changeable: true },
        { id: "inactive", label: "Long spells of inactivity", note: "Long periods of inactivity, such as bed rest, raise the risk.", changeable: true },
      ],
    },
    sources: [NHS_OP_CAUSES, AUK, ROS_MEDICINES, NHS_OP, ROS_CANNOT_CHANGE, ROS_CAN_CHANGE],
    quiz: {
      question: "Why are women more at risk than men?",
      options: [{ text: "Oestrogen falls after the menopause", right: true }, { text: "Women exercise more" }, { text: "Women eat more calcium" }],
      why: "Oestrogen is essential for healthy bones, and after the menopause its levels fall.",
    },
  },
  {
    id: "op-spine",
    kicker: "Your spine",
    question: "Why does osteoporosis cause height loss and a curved spine?",
    hook: "Spinal bones can squash down rather than snap. They heal in their new shape, and that can change your height and posture.",
    short: "A spinal fracture is when a bone in the spine is squashed down after losing strength. Spinal bones do not go back to their old shape; they heal compressed, which can lead to height loss, a curved spine and ongoing back pain. Spinal fractures are not always painful, so height loss or a change in posture is worth mentioning to your doctor.",
    sections: [
      {
        heading: "A break that squashes",
        paragraphs: [
          "A spinal fracture is when a bone in your spine becomes compressed, or squashed, after losing strength. You may also hear it called a vertebral fracture or a compression fracture.",
          "Spinal fractures can happen during everyday activities, even without a fall. They do not always cause the pain you would expect, so you may not know one has happened, and the pain can be mistaken for arthritis.",
        ],
      },
      {
        heading: "Why height and shape change",
        paragraphs: [
          "A spinal fracture takes between 6 and 12 weeks to heal. But spinal bones do not go back to the shape they were before. They heal in their new compressed shape.",
          "If you break several bones in your spine, you will probably lose some height, and you may notice an outward curve at the top of your spine. The NHS describes this as a hunched posture.",
        ],
      },
      {
        heading: "How it can feel",
        paragraphs: [
          "Signs of spinal fractures include unexplained back pain and muscle spasms, height loss, and a curved spine or change in posture. They become more noticeable the more broken bones you have.",
          "A curved spine can cause shortness of breath, and your stomach may feel squashed and bloated. Ongoing pain after healing is caused by the change in the shape of your spine.",
        ],
      },
      {
        heading: "Treatment and staying active",
        paragraphs: [
          "You will not usually need an operation. Aim to stay as active as possible, which helps you keep your muscle strength and reduces the chance of ongoing pain. If pain is severe early on, rest for a while, then try a pain-relieving medicine to help you stay active.",
          "If you are found to have spinal fractures, your doctor may prescribe an osteoporosis medicine without further tests, to reduce your risk of more broken bones.",
        ],
      },
      {
        heading: "Posture, and some reassurance",
        paragraphs: [
          "If fractures have changed the shape of your spine, the changes cannot be reversed. But exercises for posture and muscle strength may help some symptoms. Talk to your doctor or physiotherapist before starting if you have had many spinal fractures.",
          "Spinal fractures caused by osteoporosis do not cause paralysis. They are stable, which means they will not move and damage the spinal cord.",
        ],
      },
    ],
    helps: [
      "If you are worried about back pain, height loss or a curved spine, speak to your GP.",
      "Stay as active as you can, using a pain-relieving medicine if you need it.",
      "If your spinal fractures are painful or you find it hard to move, ask your doctor to refer you to a physiotherapist.",
      "Try gentle exercises for posture on two or three days a week, with a day's rest in between.",
      "Talk to your doctor or physiotherapist before starting any exercise if you have had many spinal fractures.",
    ],
    tryThisWeek: [
      "Tell your GP about any height loss.",
      "Keep moving, with pain relief if needed.",
      "Ask about seeing a physiotherapist.",
    ],
    ask: "Could my height loss or back pain be from a spinal fracture?",
    interactive: {
      kind: "signs",
      title: "Changes in your back to mention",
      intro: "Tick any you have noticed. Spinal fractures are not always painful.",
      signs: ["Unexplained back pain", "Muscle spasms in your back", "Losing height", "A curve at the top of the spine", "A change in posture", "Shortness of breath", "A squashed, bloated stomach", "Indigestion"],
      after: "Speak to your doctor. They can check whether these are caused by spinal fractures or another condition.",
      copyHeading: "Changes in my back",
    },
    sources: [ROS_SPINAL, ROS_PROTECT_BACK, ROS_SYMPTOMS, NHS_OP_LIVING, ROS_POSTURE, ROS_CANNOT_CHANGE, ROS_BACK_PAIN],
    quiz: {
      question: "Can a spinal fracture caused by osteoporosis lead to paralysis?",
      options: [{ text: "No, these fractures are stable", right: true }, { text: "Yes, usually" }, { text: "Only if you keep moving" }],
      why: "Spinal fractures caused by osteoporosis do not cause paralysis.",
    },
  },
  {
    id: "op-tablets",
    kicker: "Treatment",
    question: "How do I take bisphosphonate tablets so they work?",
    hook: "Alendronic acid only works if your body can absorb it. An empty stomach, plain tap water and 30 minutes upright make the difference.",
    short: "Bisphosphonates, such as alendronic acid, slow the rate that bone is broken down, which helps maintain bone density and lowers the risk of a break. Alendronic acid is usually taken once a week, first thing in the morning, on an empty stomach with plain tap water. Stay upright for 30 minutes and wait before eating, drinking or taking other medicines.",
    sections: [
      {
        heading: "What they do",
        paragraphs: [
          "Bisphosphonates slow the rate that bone is broken down in your body. This maintains bone density and reduces your risk of a broken bone.",
          "They include alendronic acid, ibandronic acid, risedronate and zoledronic acid. Alendronic acid is usually the first treatment people are offered.",
        ],
      },
      {
        heading: "How to take alendronic acid",
        paragraphs: [
          "The usual dose is 70mg once a week, on the same day each week. Take it first thing in the morning, on an empty stomach, before anything to eat or drink and before any other medicines.",
          "Take it with plain tap water. Do not take it with mineral water, tea, coffee, juice or milk, which can reduce how much is absorbed. Swallow standard tablets whole, without crushing, chewing or sucking them.",
        ],
      },
      {
        heading: "The 30 minutes after",
        paragraphs: [
          "Stay upright for 30 minutes afterwards. You can be sitting, standing or walking. This stops the medicine irritating your food pipe. Do not take it at bedtime.",
          "Wait at least 30 minutes before your first food or drink. If you take calcium supplements, wait at least half an hour after alendronate, because calcium can affect how well it is absorbed.",
        ],
      },
      {
        heading: "Missed doses and side effects",
        paragraphs: [
          "If you take it weekly and miss a dose, take 1 tablet on the morning after you remember. Do not take 2 doses on the same day. You can then take your next dose at the usual time.",
          "Common side effects include indigestion, constipation, diarrhoea and headaches. Stop taking it and speak to a doctor or call 111 straight away if you have heartburn, or heartburn that gets worse, or pain or problems when swallowing.",
        ],
      },
      {
        heading: "How long, and is it working?",
        paragraphs: [
          "Your bones may get stronger in about 6 to 12 months, but it usually takes years to work fully. You will usually take it for at least 3 to 5 years, then your doctor will review whether you still need it.",
          "You will not feel any different, but the medicine is working in the background. No medicine completely prevents broken bones, so a break while taking it does not necessarily mean it is not working.",
        ],
      },
    ],
    helps: [
      "Take alendronic acid first thing in the morning, with plain tap water, before anything to eat or drink and before other medicines.",
      "Stay sitting, standing or walking for 30 minutes afterwards.",
      "Take calcium supplements at a different time from your bisphosphonate.",
      "If you often forget doses, set an alarm, or ask your pharmacist about other ways to remember.",
      "Look after your teeth and have regular dental check-ups.",
      "Speak to a doctor before stopping, as you are more likely to break a bone without it.",
    ],
    tryThisWeek: [
      "Take it first thing, with tap water.",
      "Stay upright for 30 minutes.",
      "Set a weekly reminder.",
    ],
    ask: "How long should I stay on my bisphosphonate, and when is my review?",
    interactive: {
      kind: "timeline",
      title: "Your weekly dose morning",
      steps: [
        { id: "wake", when: "On waking", title: "Take it first", points: ["On an empty stomach, before other medicines.", "With a glass of plain tap water."] },
        { id: "upright", when: "The next 30 minutes", title: "Stay upright", points: ["Sit, stand or walk; do not lie down.", "No food, other drinks or calcium yet."] },
        { id: "eat", when: "After 30 minutes", title: "Breakfast", points: ["You can then eat and drink normally."] },
        { id: "week", when: "Next week", title: "The same day again", points: ["Take it on the same day each week.", "Missed it? Take it the morning after you remember."] },
      ],
    },
    sources: [NHS_OP_TREATMENT, ROS_ALENDRONATE, NHS_ALEN_HOW, NHS_ALEN_ABOUT, NHS_ALEN_SIDE, ROS_FINDING_TREATMENT, NHS_ALEN_QS],
    quiz: {
      question: "What should you take alendronic acid with?",
      options: [{ text: "Plain tap water", right: true }, { text: "A cup of tea" }, { text: "A glass of milk" }],
      why: "Take it with plain tap water. Do not take it with mineral water, tea, coffee, juice or milk, which can reduce how much is absorbed.",
    },
  },
  {
    id: "op-other-treatments",
    kicker: "Treatment",
    question: "What are the injections and other treatments for osteoporosis?",
    hook: "If tablets do not suit you, or your risk is very high, there are yearly drips, six-monthly injections and injections that build bone.",
    short: "Besides bisphosphonate tablets, osteoporosis can be treated with a yearly zoledronate drip, a denosumab injection every six months, bone-building injections such as teriparatide and romosozumab, the tablet raloxifene, and HRT. Which suits you depends on things like your age, sex, past breaks and other health conditions. Denosumab needs a plan for what comes next, because its effect wears off quickly.",
    sections: [
      {
        heading: "Two ways they work",
        paragraphs: [
          "Some osteoporosis medicines slow down the cells that break down bone. Others stimulate the cells that build new bone, and some do both.",
          "Osteoporosis medicines do not reduce the pain caused by broken bones. They come as tablets, liquids, an injection under the skin or a drip into a vein.",
        ],
      },
      {
        heading: "Zoledronate, once a year",
        paragraphs: [
          "Zoledronate is a bisphosphonate given as a drip into a vein once a year, usually at a hospital. It takes at least 15 minutes. It may be offered if tablets are not suitable for you, or if you have recently broken a hip.",
          "Up to 3 in 10 people get flu-like symptoms after the first dose, which usually go away after a couple of days. Drink at least one or two glasses of water before and after each infusion.",
        ],
      },
      {
        heading: "Denosumab, every six months",
        paragraphs: [
          "Denosumab is an injection just under the skin every six months. It may be recommended if you cannot take other medicines such as bisphosphonates, or if you have severe osteoporosis.",
          "Its effect wears off very quickly. Some people have had several spinal fractures in the months after stopping it, so plan ahead with your doctor before you start. You will need another medicine if you stop.",
        ],
      },
      {
        heading: "Medicines that build bone",
        paragraphs: [
          "Teriparatide is a daily injection that stimulates the cells that build bone. It is used in a small number of people whose bone density is very low and when other treatments are not working. It is prescribed for a maximum of two years.",
          "Romosozumab is two injections once a month for 12 months. In the UK it is only licensed for women who have been through the menopause, have broken a bone due to osteoporosis and have a high risk of breaking another.",
        ],
      },
      {
        heading: "Raloxifene and HRT",
        paragraphs: [
          "Raloxifene is a daily tablet that acts like oestrogen inside the bones. It is only for women after the menopause. Side effects can include hot flushes, leg cramps and a possible increased risk of blood clots.",
          "HRT can keep bones strong and, if you already have osteoporosis, reduce your risk of breaking a bone. Some types slightly increase the risk of breast cancer, so discuss the benefits and risks with your GP.",
        ],
      },
    ],
    helps: [
      "Ask your healthcare professional which medicine suits you, and ask as many questions as you need.",
      "Read the patient information leaflet that comes with your medicine, and ask for one if you do not have it.",
      "Before starting denosumab, plan with your doctor what you would take if you stopped.",
      "Keep to your denosumab injection every six months; it can be up to four weeks early or late.",
      "Drink at least one or two glasses of water before and after a zoledronate drip.",
      "Talk to a healthcare professional about side effects that do not go away, as another medicine may suit you better.",
    ],
    tryThisWeek: [
      "Write down your questions.",
      "Read your medicine leaflet.",
      "Note your next injection date.",
    ],
    ask: "Which osteoporosis medicine suits me best, and what is the plan if I need to stop it?",
    interactive: {
      kind: "flip-cards",
      title: "The other treatments, card by card",
      intro: "Turn each card to see how often it is given and what it does.",
      cards: [
        { id: "zoledronate", front: "Zoledronate", when: "A drip once a year", back: "A bisphosphonate that slows the cells that break down bone. Often used after a broken hip." },
        { id: "denosumab", front: "Denosumab", when: "An injection every six months", back: "Blocks the cells that break down bone. It wears off quickly, so another medicine is needed if you stop." },
        { id: "teriparatide", front: "Teriparatide", when: "A daily injection, up to two years", back: "Stimulates the cells that build bone. Prescribed by a specialist at a hospital." },
        { id: "romosozumab", front: "Romosozumab", when: "Two injections a month for 12 months", back: "Speeds up the cells that build bone and slows those that break it down. For some women after the menopause." },
        { id: "raloxifene", front: "Raloxifene", when: "A tablet each day", back: "Acts like oestrogen inside the bones. Only for women who have been through the menopause." },
        { id: "hrt", front: "HRT", when: "For menopause symptoms", back: "Can keep bones strong and reduce the risk of a break. Discuss the benefits and risks with your GP." },
      ],
    },
    sources: [ROS_FINDING_TREATMENT, ROS_ZOLEDRONATE, ROS_DENOSUMAB, NHS_OP_TREATMENT, ROS_TERIPARATIDE, ROS_ROMOSOZUMAB, ROS_RALOXIFENE],
    quiz: {
      question: "Why does stopping denosumab need a plan?",
      options: [{ text: "Its effect wears off very quickly", right: true }, { text: "It must be taken for life" }, { text: "It only works with HRT" }],
      why: "Its effect wears off very quickly. Some people have had several spinal fractures in the months after stopping it.",
    },
  },
  {
    id: "op-calcium-d",
    kicker: "Food",
    question: "How do I get enough calcium and vitamin D?",
    hook: "Most people can get the calcium they need from food. Vitamin D is the harder one, especially in autumn and winter.",
    short: "Adults need 700mg of calcium a day, which most people can get from a varied diet. Vitamin D helps the body absorb calcium, and adults need 10 micrograms a day. From late March or early April to the end of September most people can make enough from sunlight, but everyone should consider a daily 10 microgram supplement in autumn and winter.",
    sections: [
      {
        heading: "Why they matter",
        paragraphs: [
          "Calcium is the main mineral found in bone. It gives your bones the strength and hardness they need to cope with everyday activities.",
          "Vitamin D helps your body absorb and use calcium. This helps to keep your bones and muscles strong.",
        ],
      },
      {
        heading: "Calcium from food",
        paragraphs: [
          "Adults need 700mg of calcium a day, which you should be able to get from your daily diet. If you are at risk of osteoporosis or taking an osteoporosis medicine, your doctor may advise around 1,000mg a day.",
          "Good sources include milk, cheese and yoghurt, green leafy vegetables such as curly kale and broccoli, soya drinks with added calcium, bread made with fortified flour, and fish where you eat the bones, such as sardines. Spinach contains calcium, but the body cannot digest it all.",
        ],
      },
      {
        heading: "Vitamin D from the sun",
        paragraphs: [
          "From about late March or early April to the end of September, most people can make all the vitamin D they need from sunlight on their skin. Between October and early March, we do not make enough.",
          "The Royal Osteoporosis Society suggests around 10 minutes of sun on your face and arms, without sunscreen, once or twice a day in those months. Take care not to burn.",
        ],
      },
      {
        heading: "Supplements",
        paragraphs: [
          "Vitamin D is found in only a small number of foods, such as oily fish, red meat, egg yolks and fortified foods. So everyone should consider a daily supplement containing 10 micrograms during the autumn and winter.",
          "A supplement all year round is advised if you are not often outdoors, live in a care home or usually cover most of your skin outdoors. If you are at risk of osteoporosis or taking an osteoporosis medicine, your doctor may advise 20 micrograms a day.",
        ],
      },
      {
        heading: "Not too much",
        paragraphs: [
          "Taking more than the recommended amount is unlikely to improve your bone strength. More than 1,500mg of calcium supplements a day can cause stomach pain and diarrhoea, and can lead to kidney stones.",
          "Do not take more than 100 micrograms of vitamin D a day, as it could be harmful. Check the packaging of all your supplements, because some contain calcium or vitamin D too.",
        ],
      },
    ],
    helps: [
      "Aim to get your calcium from a varied and balanced diet.",
      "Consider a daily supplement containing 10 micrograms of vitamin D in autumn and winter.",
      "If you have osteoporosis, ask your GP for advice about calcium supplements.",
      "Check the packaging of all your supplements so you do not take too much.",
      "Let your doctor know if you stop a calcium supplement.",
    ],
    tryThisWeek: [
      "Get calcium from varied food.",
      "Take vitamin D through the winter.",
      "Check your supplement labels.",
    ],
    ask: "Do I need calcium or vitamin D supplements with my treatment, and how much?",
    interactive: {
      kind: "scenarios",
      title: "Food and sunshine choices",
      scenarios: [
        {
          id: "spinach",
          situation: "You rely on spinach for your calcium.",
          options: [{ text: "Add kale, broccoli or dairy too", best: true }, { text: "Spinach alone is plenty" }],
          why: "Spinach contains calcium, but the body cannot digest it all.",
        },
        {
          id: "winter",
          situation: "It is November and you take no supplements.",
          options: [{ text: "Consider a daily vitamin D supplement", best: true }, { text: "Rely on the winter sun" }],
          why: "Between October and early March, we do not make enough. So everyone should consider a daily supplement containing 10 micrograms during the autumn and winter.",
        },
        {
          id: "indoors",
          situation: "You are rarely outdoors.",
          options: [{ text: "A vitamin D supplement all year", best: true }, { text: "Only in the winter months" }],
          why: "A supplement all year round is advised if you are not often outdoors.",
        },
        {
          id: "double",
          situation: "You wonder if doubling your calcium tablets would help.",
          options: [{ text: "Stick to the recommended amount", best: true }, { text: "More is better for bones" }],
          why: "Taking more than the recommended amount is unlikely to improve your bone strength.",
        },
      ],
    },
    sources: [NHS_OP_TREATMENT, ROS_CALCIUM, ROS_VIT_D, NHS_CALCIUM, NHS_VIT_D],
    quiz: {
      question: "How much calcium do most adults need each day?",
      options: [{ text: "700mg", right: true }, { text: "100mg" }, { text: "5,000mg" }],
      why: "Adults need 700mg of calcium a day, which you should be able to get from your daily diet.",
    },
  },
  {
    id: "op-bone-exercise",
    kicker: "Exercise",
    question: "What exercise helps my bones?",
    hook: "Bones get stronger when you use them. Impact and strength exercise both help, and balance work keeps you steady.",
    short: "Bones lose strength if you are not active, and get stronger when you use them. The Royal Osteoporosis Society says the best way to help bone strength is to do both impact and strength exercise, with balance exercises to keep you steady. Most people with osteoporosis can exercise safely, but check with your GP or physiotherapist first if you have had many broken bones or spinal fractures.",
    sections: [
      {
        heading: "Why it helps",
        paragraphs: [
          "If you are not active, your bones lose strength. Bones get stronger when you use them, and even a small amount of exercise can help.",
          "The best way to help your bone strength is to do both impact and strength exercises. But exercise is not a replacement for an osteoporosis medicine. If your chance of a break is high, the best way is to take a medicine and have healthy habits.",
        ],
      },
      {
        heading: "Impact exercise",
        paragraphs: [
          "Impact exercise is when you are on your feet and add an extra force through your bones each time your feet hit the ground. Walking and stair climbing are low impact. Small jumps and hops, jogging or dancing are moderate impact.",
          "If you do not usually do impact exercise, start with low impact and build up gradually. If you have had spinal fractures or many broken bones, stay with low-impact exercise. Swimming and cycling are not weight-bearing exercise.",
        ],
      },
      {
        heading: "Strength exercise",
        paragraphs: [
          "Strength exercise means moving your muscles against resistance, from your own body weight, a resistance band or weights. As your muscles work, they pull on your bones. Carrying shopping and gardening count too.",
          "Start with a weight you can lift easily, build up gradually, and leave a day's rest between strength sessions. It is how you lift rather than how much you lift that matters.",
        ],
      },
      {
        heading: "Balance, and how much",
        paragraphs: [
          "Balance exercises make your muscles stronger and keep you steady, so you are less likely to fall and break a bone. The NHS home routines include sit-to-stand, calf raises and a heel-to-toe walk, done at least twice a week, near a wall or stable chair.",
          "Adults aged 65 and over should aim to be active every day, and to do activities that improve strength, balance and flexibility on at least 2 days a week. They should also do at least 150 minutes of moderate activity a week, or 75 minutes of vigorous activity if they are already active.",
        ],
      },
      {
        heading: "Staying safe",
        paragraphs: [
          "Talk to your doctor or physiotherapist before starting if you have had many broken bones or spinal fractures, or are recovering from a broken bone. Warm up first, wear supportive shoes such as trainers, and start slowly.",
          "Stop if you feel sick, dizzy or very short of breath, or have chest tightness or any pain. Sit-ups and touching your toes put pressure on the spine, so bend forward from your hips with your back straight instead.",
        ],
      },
    ],
    helps: [
      "Check with your GP or physiotherapist first if you have had many broken bones or spinal fractures, or are recovering from a broken bone.",
      "Start with low-impact exercise, such as walking or stair climbing, and build up gradually.",
      "Do strength exercises, such as sit-to-stand, with a day's rest in between.",
      "Do balance exercises on at least two days a week, near a wall or stable chair.",
      "Wear supportive shoes, such as trainers, and keep the space free of trip hazards.",
      "Stop if you feel sick, dizzy, very short of breath or in pain.",
    ],
    tryThisWeek: [
      "Check with your GP or physio first.",
      "Start with a walk, and build up.",
      "Try balance moves twice this week.",
    ],
    ask: "Which impact, strength and balance exercises are safe for me?",
    interactive: {
      kind: "scenarios",
      title: "Choosing safe exercise",
      scenarios: [
        {
          id: "start",
          situation: "You have osteoporosis and do no impact exercise yet.",
          options: [{ text: "Start with walking and stairs", best: true }, { text: "Begin with star jumps" }],
          why: "If you do not usually do impact exercise, start with low impact and build up gradually.",
        },
        {
          id: "spinal",
          situation: "You have had spinal fractures.",
          options: [{ text: "Stay with low-impact exercise", best: true }, { text: "Build up to jumping" }],
          why: "If you have had spinal fractures or many broken bones, stay with low-impact exercise.",
        },
        {
          id: "swim",
          situation: "You swim three times a week.",
          options: [{ text: "Add some weight-bearing exercise", best: true }, { text: "Swimming covers your bones" }],
          why: "Swimming and cycling are not weight-bearing exercise.",
        },
        {
          id: "situps",
          situation: "A class includes sit-ups and toe touches.",
          options: [{ text: "Bend from your hips instead", best: true }, { text: "Push through them" }],
          why: "Sit-ups and touching your toes put pressure on the spine, so bend forward from your hips with your back straight instead.",
        },
        {
          id: "dizzy",
          situation: "You feel dizzy during a session.",
          options: [{ text: "Stop exercising", best: true }, { text: "Keep going, but slower" }],
          why: "Stop if you feel sick, dizzy or very short of breath, or have chest tightness or any pain.",
        },
      ],
    },
    sources: [ROS_EXERCISE_BONES, NHS_OP_PREVENTION, ROS_EXERCISE_SAFELY, NHS_STRENGTH, NHS_BALANCE, NHS_OLDER_ACTIVITY, ROS_BALANCE],
    quiz: {
      question: "What is the best way to help your bone strength?",
      options: [{ text: "Both impact and strength exercises", right: true }, { text: "Swimming only" }, { text: "Resting as much as possible" }],
      why: "The best way to help your bone strength is to do both impact and strength exercises.",
    },
  },
  {
    id: "op-falls",
    kicker: "Falls",
    question: "How can I prevent falls at home?",
    hook: "With osteoporosis, a fall is what turns weak bones into broken ones. Small changes at home, and in how you move, cut the risk.",
    short: "Falling over can increase your chance of breaking a bone, especially if you have osteoporosis. Checking your home for trip hazards, wearing well-fitting shoes, having regular sight and hearing tests and doing strength and balance exercises all help. A GP can refer you to a falls service if you have fallen or are worried about your balance.",
    sections: [
      {
        heading: "Why falls matter",
        paragraphs: [
          "Falling over can increase your chance of breaking a bone, especially if you have osteoporosis. Good balance, coordination and reflexes help reduce the risk of a slip, trip or fall.",
          "Falls are more likely as muscles get weaker with age, with conditions that affect balance, with low blood pressure, with problems with eyesight or hearing, and as a side effect of some medicines.",
        ],
      },
      {
        heading: "Around your home",
        paragraphs: [
          "Check your home for things you may trip over, such as trailing wires, and keep walkways clear. Make sure rugs and carpets are secure, and use a non-slip mat under a rug on a polished floor.",
          "Keep rubber mats in the bath and by the sink, and fit handrails on the stairs and in the bathroom. Keep the stairs and landing well lit, and turn the lights on if you walk around at night.",
        ],
      },
      {
        heading: "What you wear and how you move",
        paragraphs: [
          "Wear shoes or slippers that fit well, do not slip off and have a good grip. Avoid loose, backless or high-heeled footwear, and long, trailing clothes.",
          "Give yourself time, and get up slowly from chairs and bed in case you feel dizzy. Do not stand on chairs to change lightbulbs or clean windows; ask for help instead.",
        ],
      },
      {
        heading: "Your health",
        paragraphs: [
          "Have regular sight tests and hearing tests, as ear problems can affect your balance. If you take a number of tablets, ask your doctor or pharmacist to review them, as some medicines cause unsteadiness.",
          "Eat well and stay hydrated, and do not drink too much alcohol, which can make you unsteady. Low vitamin D levels may be a risk factor for falling.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "If you have had falls or a GP thinks you are at risk, they may refer you to a falls service. This can include strength and balance training, checking that your home is safe and reviewing your medicines.",
          "Exercises to improve strength, balance and flexibility help make you stronger and more confident on your feet. Your local council can also do a free care needs assessment, including changes to make your home safer.",
        ],
      },
    ],
    helps: [
      "Check your home for trip hazards, such as trailing wires and loose rugs.",
      "Wear shoes or slippers that fit well, do not slip off and have a good grip.",
      "Have regular eye tests, and get your ears and hearing checked.",
      "If you take a number of tablets, ask your doctor or pharmacist to review them.",
      "Wear a personal alarm, or carry a mobile phone with you.",
      "See a GP if you have had a fall or are worried about your balance.",
    ],
    tryThisWeek: [
      "Clear one trip hazard.",
      "Check your slippers' grip.",
      "Book an eye test.",
    ],
    ask: "Can I be referred to a falls service or a strength and balance class?",
    interactive: {
      kind: "risk-check",
      title: "Your falls check",
      intro: "Tick any that apply to you or your home. Each says what can help.",
      items: [
        { id: "wires", label: "Trailing wires or loose rugs", note: "Keep walkways clear, and make sure rugs and carpets are secure.", changeable: true },
        { id: "slippers", label: "Loose or backless slippers", note: "Choose shoes or slippers that fit well, do not slip off and have a good grip.", changeable: true },
        { id: "bath", label: "No non-slip mat in the bath", note: "Use a non-slip mat in the bath or shower.", changeable: true },
        { id: "light", label: "Dark stairs or landing", note: "Keep them well lit, and turn the lights on if you walk around at night.", changeable: true },
        { id: "tablets", label: "Taking a number of tablets", note: "Some medicines cause unsteadiness. Ask your doctor or pharmacist to review them.", changeable: true },
        { id: "eyes", label: "No recent sight or hearing test", note: "Have regular checks, as ear problems can affect your balance.", changeable: true },
        { id: "age", label: "Getting older", note: "Muscles get weaker with age. Strength and balance exercises can help you feel steadier.", changeable: false },
        { id: "condition", label: "A condition that affects balance", note: "Such as arthritis, stroke or Parkinson's disease. Ask a GP about treatment that could help.", changeable: false },
      ],
    },
    sources: [ROS_CAN_CHANGE, ROS_FALLS, NHS_FALLS, NHS_OP_LIVING, NHS_OLDER_ACTIVITY],
    quiz: {
      question: "Which footwear helps prevent falls?",
      options: [{ text: "Well-fitting shoes with a good grip", right: true }, { text: "Backless slippers" }, { text: "High heels" }],
      why: "Wear shoes or slippers that fit well, do not slip off and have a good grip.",
    },
  },
  {
    id: "op-after-fracture",
    kicker: "Recovery",
    question: "How do I recover from a broken bone?",
    hook: "Osteoporosis does not slow healing. Most breaks mend in 6 to 12 weeks, and the next step is guarding against the one after.",
    short: "Osteoporosis does not affect how bone heals, so a broken bone can heal as normal, usually in around 6 to 12 weeks. A broken hip needs surgery and a period of rehabilitation, while a broken wrist is usually treated with a cast. If you are over 50, a fracture liaison service can help you prevent further broken bones.",
    sections: [
      {
        heading: "Healing as normal",
        paragraphs: [
          "Osteoporosis does not affect the healing process of bone. A broken bone usually takes around 6 to 12 weeks to heal, although it can take longer.",
          "You can help healing by eating a healthy balanced diet with plenty of protein, avoiding smoking, which limits the blood supply to your bones, and resting and taking it slow.",
        ],
      },
      {
        heading: "A broken wrist",
        paragraphs: [
          "A broken wrist is usually treated with a plaster cast, and occasionally an operation. It usually takes around 6 to 12 weeks to recover.",
          "Keep your hand raised above your elbow when you can, and follow the exercise advice you are given. Do not drive or lift heavy items until you have been told it is safe.",
        ],
      },
      {
        heading: "A broken hip",
        paragraphs: [
          "A broken hip needs treatment in hospital straight away, and you will need surgery, usually on the same day or the day after you arrive. You will usually spend around 1 to 4 weeks in hospital.",
          "You should get up and about as soon as possible, usually the day after the operation, with help from a physiotherapist. Doing the exercises your physiotherapist recommends regularly will help you improve your strength and movement.",
        ],
      },
      {
        heading: "Coping with pain",
        paragraphs: [
          "Ways to manage pain include painkillers, heat such as warm baths or hot packs, cold packs, simple relaxation techniques and massage. You can use more than one at the same time.",
          "Osteoporosis medicines do not reduce the pain of a broken bone, but there are other treatments for that. A physiotherapist or occupational therapist can help you make as full a recovery as possible.",
        ],
      },
      {
        heading: "Preventing the next break",
        paragraphs: [
          "If you have broken a bone after a small fall, you are more likely to break another, and your risk is highest in the first one to two years. If you are over 50, a fracture liaison service can help you prevent further broken bones.",
          "If you were diagnosed with osteoporosis because you broke a bone, you should still receive treatment to try to reduce your risk of further breaks.",
        ],
      },
    ],
    helps: [
      "Eat a healthy balanced diet with plenty of protein, and avoid smoking.",
      "Do the exercises your physiotherapist recommends regularly.",
      "Ask your GP surgery if there is a fracture liaison service in your area.",
      "Combine ways to manage pain, such as medicine, a heat pack and relaxation techniques.",
      "If you are over 50 and have not had your risk checked after a break, speak to your GP about a fracture risk assessment.",
      "Get help from NHS 111 if the pain gets worse, or your cast feels too tight or too loose.",
    ],
    tryThisWeek: [
      "Eat plenty of protein.",
      "Do your physio exercises.",
      "Ask about a fracture liaison service.",
    ],
    ask: "Is there a fracture liaison service here, and should my bone treatment change after this break?",
    interactive: {
      kind: "timeline",
      title: "After a broken hip",
      steps: [
        { id: "arrive", when: "On arrival", title: "Hospital straight away", points: ["Painkillers and an X-ray.", "Surgery on the same day or the day after."] },
        { id: "day-after", when: "The day after surgery", title: "Up and about", points: ["A physiotherapist helps you out of bed.", "You may use a walking frame."] },
        { id: "ward", when: "1 to 4 weeks", title: "In hospital", points: ["Regular physiotherapy to stand and move.", "Some people need rehabilitation before going home."] },
        { id: "home", when: "Weeks to months", title: "Healing at home", points: ["Keep doing your exercises at home.", "Some people need a walking stick or frame."] },
        { id: "next", when: "If you are over 50", title: "Guarding against the next", points: ["Ask about a fracture liaison service."] },
      ],
    },
    sources: [ROS_BROKEN_BONES, NHS_BROKEN_WRIST, NHS_BROKEN_HIP, NHS_OP_LIVING, ROS_FINDING_TREATMENT, ROS_CANNOT_CHANGE, NHS_OP_TREATMENT],
    quiz: {
      question: "Does osteoporosis slow down how a bone heals?",
      options: [{ text: "No, it can heal as normal", right: true }, { text: "Yes, it takes twice as long" }, { text: "Bones cannot heal with osteoporosis" }],
      why: "Osteoporosis does not affect the healing process of bone.",
    },
  },
  {
    id: "op-lifting",
    kicker: "Everyday life",
    question: "How do I lift, bend and garden safely?",
    hook: "Bending is generally safe. Keeping your back straight, bending your knees and taking breaks protects your spine.",
    short: "Moving around and bending forward is generally safe and will not cause a spinal fracture. But safe moving and lifting techniques, such as bending from your hips and keeping your upper back straight, may help reduce the risk of injury. With some planning and the right equipment, many people with osteoporosis keep gardening.",
    sections: [
      {
        heading: "Is bending safe?",
        paragraphs: [
          "Moving around and bending forward is generally safe and will not cause a spinal fracture. But you may over-flex your spine if you push yourself to the limit.",
          "This is especially true with uncontrolled, repeated or sudden movements, or when you put a load on your spine while it is curved. That may put uneven pressure on the front of your spine.",
        ],
      },
      {
        heading: "Think straight",
        paragraphs: [
          "A simple rule is to think straight. Keep your upper back straight when you bend or lift, with your neck in line with your spine.",
          "Tighten your tummy muscles as you move. Move slowly and smoothly, within a range that feels comfortable. Twisting should be safe if it is smooth and comfortable.",
        ],
      },
      {
        heading: "Lifting",
        paragraphs: [
          "Use the hip hinge to bend: bend forward from your hips and keep your back straight. When you lift, bend your knees and keep your back straight, and use a wheelbarrow or trolley for heavy items.",
          "It is how you lift rather than how much you lift that matters. Put the weight down if you feel the strain in your back.",
        ],
      },
      {
        heading: "Gardening",
        paragraphs: [
          "With a little planning and the right equipment, you can still enjoy your garden, even with spinal fractures. Choose tasks that feel comfortable and avoid jobs that cause pain.",
          "Raised beds mean less bending and stretching. Do a little often, take breaks every 10 to 15 minutes, use a padded kneeling stool, use a hose instead of a heavy watering can, and avoid climbing ladders.",
        ],
      },
      {
        heading: "Around the house",
        paragraphs: [
          "Keep things you use often close to you, so you do not over-reach. A cage over your letterbox saves bending down to pick up the post.",
          "Use a supermarket trolley rather than a basket, or a shopping trolley on wheels, and ask for help with packing or carrying shopping. Ask someone to help with tasks you find difficult, such as lifting or reaching.",
        ],
      },
    ],
    helps: [
      "Keep your upper back straight and your neck in line with your spine when you bend or lift.",
      "Bend from your hips, and bend your knees to lift, rather than curving your back.",
      "Use a wheelbarrow or trolley for heavy items.",
      "Garden a little and often, with breaks every 10 to 15 minutes.",
      "Ask someone to help with tasks you find difficult, such as lifting or reaching.",
    ],
    tryThisWeek: [
      "Practise keeping your back straight.",
      "Use a trolley for heavy things.",
      "Take a break every 10 to 15 minutes.",
    ],
    ask: "Are there movements I should adapt because of my spine?",
    interactive: {
      kind: "scenarios",
      title: "Everyday bending and lifting",
      scenarios: [
        {
          id: "shopping",
          situation: "You have heavy shopping to bring home.",
          options: [{ text: "Use a shopping trolley on wheels", best: true }, { text: "Carry full bags in one go" }],
          why: "Use a supermarket trolley rather than a basket, or a shopping trolley on wheels, and ask for help with packing or carrying shopping.",
        },
        {
          id: "floor",
          situation: "You need to pick something up from the floor.",
          options: [{ text: "Bend from your hips, back straight", best: true }, { text: "Curl your back down to reach it" }],
          why: "Use the hip hinge to bend: bend forward from your hips and keep your back straight.",
        },
        {
          id: "weeding",
          situation: "You have an afternoon of weeding planned.",
          options: [{ text: "A little at a time, with breaks", best: true }, { text: "Three hours without stopping" }],
          why: "Do a little often, take breaks every 10 to 15 minutes.",
        },
        {
          id: "watering",
          situation: "The plants need watering.",
          options: [{ text: "Use a hose", best: true }, { text: "Carry a full watering can" }],
          why: "Use a hose instead of a heavy watering can.",
        },
        {
          id: "strain",
          situation: "You feel a strain in your back while lifting.",
          options: [{ text: "Put the weight down", best: true }, { text: "Finish the lift quickly" }],
          why: "Put the weight down if you feel the strain in your back.",
        },
      ],
    },
    sources: [ROS_PROTECT_BACK, ROS_BENDING, ROS_EXERCISE_SAFELY, ROS_EVERYDAY, ROS_FALLS, NHS_FALLS],
    quiz: {
      question: "Is bending forward generally safe with osteoporosis?",
      options: [{ text: "Yes, but avoid pushing to the limit", right: true }, { text: "No, never bend at all" }, { text: "Only after a meal" }],
      why: "Moving around and bending forward is generally safe and will not cause a spinal fracture. But you may over-flex your spine if you push yourself to the limit.",
    },
  },
  {
    id: "op-dentist",
    kicker: "Teeth",
    question: "Why should I tell my dentist about my osteoporosis medicine?",
    hook: "A very rare side effect affects healing in the jaw. Healthy teeth, and a dentist who knows your medicines, keep the risk low.",
    short: "Osteonecrosis of the jaw is a very rare side effect linked with some osteoporosis medicines, where healing inside the mouth is delayed, usually after a tooth is taken out or an implant. Keeping your teeth and gums healthy and seeing a dentist regularly lowers the risk. Tell your dentist which medicine you take, as they may suggest a different type of dental treatment.",
    sections: [
      {
        heading: "A very rare side effect",
        paragraphs: [
          "Osteonecrosis of the jaw is a very rare side effect linked with some osteoporosis medicines, including bisphosphonates, denosumab and romosozumab. It is linked with taking them for many years.",
          "It is a condition where healing inside the mouth is delayed, usually after a tooth is taken out or an implant. Research estimates 1 to 10 people in every 10,000 who take these medicines will get it. This means at least 9,990 people out of 10,000 will not.",
        ],
      },
      {
        heading: "Why the medicine is still worth it",
        paragraphs: [
          "It is most often linked with high-dose bisphosphonate treatment for cancer, not for osteoporosis. People treated for cancer get more of the medicine over time.",
          "If you have been offered an osteoporosis medicine, your risk of breaking a bone without it is higher than your risk of this side effect.",
        ],
      },
      {
        heading: "Looking after your teeth",
        paragraphs: [
          "Keep your teeth clean and have a dental check-up every 6 months. Your doctor may also recommend a check-up before you start treatment, especially if you have a history of dental problems.",
          "It may also help to use fluoride toothpaste and mouthwash, eat a well-balanced diet, stop smoking and cut down on alcohol.",
        ],
      },
      {
        heading: "Telling your dentist",
        paragraphs: [
          "Tell your dentist you are taking your osteoporosis medicine. If you need a tooth out or dental implants, there is a very small chance of damage to the jawbone, and they may recommend a different type of dental treatment.",
          "You should still be able to have an extraction or implant if your dentist thinks it is the best option. Stopping or pausing your medicine is unlikely to reduce the risk. If you have denosumab, ask your osteoporosis specialist, as it may help to plan dental work around your injections.",
        ],
      },
      {
        heading: "Signs to report",
        paragraphs: [
          "Contact your dentist as well as your doctor if you have a loose tooth, mouth sores, or swelling or pain in your mouth or jaw.",
          "If your gums have not healed eight weeks after dental treatment, talk to your dentist. These signs are more likely to be an infection, but it is worth checking.",
        ],
      },
    ],
    helps: [
      "Tell your dentist which osteoporosis medicine you take.",
      "Keep your teeth clean and have a dental check-up every 6 months.",
      "Use fluoride toothpaste and mouthwash.",
      "Contact your dentist and your doctor about a loose tooth, mouth sores, or pain or swelling in your mouth or jaw.",
      "If you have denosumab, ask your osteoporosis specialist before dental work.",
    ],
    tryThisWeek: [
      "Tell your dentist about your medicine.",
      "Book a dental check-up.",
      "Use fluoride toothpaste.",
    ],
    ask: "Do I need a dental check-up before starting, and what should I tell my dentist?",
    interactive: {
      kind: "signs",
      title: "Mouth changes to mention",
      intro: "Tick any you have noticed. They are more likely to be an infection, but they are worth checking.",
      signs: ["A loose tooth", "Mouth sores", "Swelling in your gums or jaw", "Pain in your mouth or jaw", "Difficulty chewing", "Gums not healed after 8 weeks"],
      after: "Contact your dentist as well as your doctor, and tell them which osteoporosis medicine you take.",
      copyHeading: "Mouth changes to tell my dentist",
    },
    sources: [ROS_JAW, NHS_OP_TREATMENT, NHS_ALEN_QS, NHS_ALEN_SIDE],
    quiz: {
      question: "What should you tell your dentist?",
      options: [{ text: "That you take an osteoporosis medicine", right: true }, { text: "Nothing; it makes no difference" }, { text: "Only your T-score" }],
      why: "Tell your dentist you are taking your osteoporosis medicine.",
    },
  },
];
