import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Urinary tract infections (UTIs) page's pieces
// (content/library-conditions/digestion-more.ts). Every sentence was written from wording checked on
// 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do
// not say. Most of it comes from the NHS, the British Association of Urological Surgeons (BAUS), NICE and
// Bladder Health UK. General information only; it never replaces what a person's own GP, pharmacist or nurse
// tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const baus = (label: string, path: string): LearnSource => ({ label: `BAUS: ${label}`, url: `https://www.baus.org.uk/${path}` });
const nice = (label: string, path: string): LearnSource => ({ label: `NICE: ${label}`, url: `https://www.nice.org.uk/${path}` });

const NHS_UTI = nhs("Urinary tract infections (UTIs)", "conditions/urinary-tract-infections-utis/");
const NHS_KIDNEY = nhs("Kidney infection", "conditions/kidney-infection/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_CONFUSION = nhs("Sudden confusion (delirium)", "symptoms/confusion/");
const NHS_PHARMACIES = nhs("How pharmacies can help", "nhs-services/pharmacies/how-pharmacies-can-help/");
const NHS_111 = nhs("When to use NHS 111 online or call 111", "nhs-services/urgent-and-emergency-care-services/when-to-use-111/");
const NHS_ANTIBIOTICS = nhs("Antibiotics", "medicines/antibiotics/");
const NHS_NITRO = nhs("Nitrofurantoin", "medicines/nitrofurantoin/");
const NHS_CATHETER = nhs("Urinary catheter", "tests-and-treatments/urinary-catheters/");
const NHS_CATHETER_LIVING = nhs("Living with a urinary catheter", "tests-and-treatments/urinary-catheters/living-with/");
const NHS_CATHETER_RISKS = nhs("Urinary catheter: risks", "tests-and-treatments/urinary-catheters/risks/");
const NHS_MENO_SYMPTOMS = nhs("Symptoms of menopause and perimenopause", "conditions/menopause-and-perimenopause/symptoms/");
const NHS_MENO_TREATMENT = nhs("Treatment for menopause and perimenopause", "conditions/menopause-and-perimenopause/treatment/");
const NHS_HRT_TYPES = nhs("Types of hormone replacement therapy (HRT)", "medicines/hormone-replacement-therapy-hrt/types-of-hormone-replacement-therapy-hrt/");
const NHS_VAGINAL_DRYNESS = nhs("Vaginal dryness", "symptoms/vaginal-dryness/");

const BAUS_UTI = baus("Urinary infection (adult)", "patients/conditions/14/urinary_infection_adult");
const BAUS_CYSTITIS = baus("Self-help information for women with cystitis (leaflet)", "_userfiles/pages/files/Patients/Leaflets/Recurrent%20cystitis.pdf");

const NICE_CYSTITIS = nice("Urinary tract infection (lower): information for the public", "guidance/ng109/informationforpublic");
const NICE_KIDNEY = nice("Pyelonephritis (acute): information for the public", "guidance/ng111/informationforpublic");
const NICE_RECURRENT = nice("Urinary tract infection (recurrent): information for the public", "guidance/ng112/informationforpublic");
const NICE_RECURRENT_RECS = nice("Urinary tract infection (recurrent): recommendations", "guidance/ng112/chapter/Recommendations");
const NICE_CATHETER = nice("Urinary tract infection (catheter-associated): information for the public", "guidance/ng113/informationforpublic");
const NICE_CKS = { label: "NICE Clinical Knowledge Summaries: Urinary tract infection (lower) - women", url: "https://cks.nice.org.uk/topics/urinary-tract-infection-lower-women/" };

const BHUK_CYSTITIS = { label: "Bladder Health UK: Cystitis", url: "https://bladderhealthuk.org/page/index/293" };

export const utiAnswers: LearnArticle[] = [
  {
    id: "uti-what-it-is",
    kicker: "Understanding",
    question: "What is a urinary tract infection?",
    hook: "An infection in the bladder, the kidneys or the tubes in between. For most women it is more of a nuisance than a danger.",
    short: "Urinary tract infections, or UTIs, affect different parts of the urinary tract, and include cystitis, a bladder infection, and kidney infection. They are usually caused by bacteria from poo getting into the urethra, the tube that carries pee out of the body. Many settle within a few days, and antibiotics are not always needed.",
    sections: [
      {
        heading: "One name, several places",
        paragraphs: [
          "Urinary tract infections, or UTIs, affect different parts of your urinary tract. They include cystitis, which is a bladder infection, urethritis, which is an infection of the urethra, and kidney infection.",
          "Symptoms can vary from very mild to severe, depending on whether the infection stays in the bladder or has reached the kidneys as well. A kidney infection is also called pyelonephritis.",
        ],
      },
      {
        heading: "What cystitis is",
        paragraphs: [
          "Cystitis is inflammation of the bladder lining. It is common for the urethra, sometimes called the waterpipe, to be affected as well, which makes the bladder and urethra very sensitive and painful, particularly when you pass urine.",
          "BAUS says cystitis affects more than half of the women in this country at some time in their lives, and a lot of women have repeated episodes. UTIs and kidney infections are more common in women, but anyone can get one.",
        ],
      },
      {
        heading: "How bacteria get in",
        paragraphs: [
          "UTIs are usually caused by bacteria from poo entering the urinary tract through the urethra, the tube that carries pee out of the body. Most are caused by a bacterium called E coli.",
          "Women have a shorter urethra than men. This means bacteria are more likely to reach the bladder or kidneys and cause an infection.",
        ],
      },
      {
        heading: "Often a nuisance, sometimes serious",
        paragraphs: [
          "In most women, a bladder infection is more of a nuisance than a danger, and it will usually settle within a few days without antibiotics. Antibiotics may be needed if the symptoms are severe or do not settle on their own.",
          "In a few people, infection can spread from the bladder to one or both kidneys. This is more serious, and a kidney infection could cause sepsis if it is not treated.",
        ],
      },
      {
        heading: "How it is checked",
        paragraphs: [
          "If a GP thinks you may have a UTI, they may do a urine test, although this is not always needed. The simplest test is a dipstick, which can be done at the GP surgery.",
          "Sometimes a mid-stream sample is sent to a laboratory, which can show the type of bacteria and the best antibiotic, though the result can take up to 48 hours. The first part of a stream of urine can be contaminated by bacteria from the skin, which is why a mid-stream sample is asked for.",
        ],
      },
    ],
    helps: [
      "See a pharmacist if you think you have a UTI and you are a woman aged 16 to 64 who is not pregnant or breastfeeding.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you think you have a UTI and you are a man, are 65 or older, are pregnant or have diabetes.",
      "Rest and drink enough fluids so you pass pale urine regularly during the day.",
      "For a mid-stream sample, catch a small amount of urine halfway through emptying your bladder, not the first or last part.",
      "Call 999 or go to A&E now if you or your child are confused, drowsy, or have difficulty speaking.",
    ],
    tryThisWeek: [
      "See a pharmacist if aged 16 to 64.",
      "Drink enough for pale urine.",
      "Catch a mid-stream sample.",
    ],
    ask: "Where is my infection, and does my urine need to be tested?",
    interactive: {
      kind: "flip-cards",
      title: "The urinary tract, part by part",
      intro: "Turn each card to see what an infection in that part means.",
      cards: [
        { id: "urethra", front: "The urethra", when: "Infection called urethritis", back: "The tube that carries pee out of the body. Bacteria from poo usually enter the urinary tract through it." },
        { id: "bladder", front: "The bladder", when: "Infection called cystitis", back: "Inflammation of the bladder lining. In most women it is more of a nuisance than a danger, and usually settles within a few days." },
        { id: "kidneys", front: "The kidneys", when: "Kidney infection, or pyelonephritis", back: "Can affect one or both kidneys. It is more serious, and could cause sepsis if it is not treated." },
      ],
    },
    sources: [NHS_UTI, BAUS_UTI, BAUS_CYSTITIS, NICE_CYSTITIS, NHS_KIDNEY, BHUK_CYSTITIS],
    quiz: {
      question: "What usually causes a UTI?",
      options: [{ text: "Bacteria from poo entering the urethra", right: true }, { text: "Cold weather" }, { text: "Drinking too much water" }],
      why: "UTIs are usually caused by bacteria from poo entering the urinary tract through the urethra, the tube that carries pee out of the body.",
    },
  },
  {
    id: "uti-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms, and are they different in older people?",
    hook: "Burning and rushing to the toilet are the usual signs. In older, frail people, a UTI can show up as sudden confusion instead.",
    short: "A UTI often causes pain or burning when peeing, needing to pee more often or more urgently, and cloudy or bloody pee. In older, frail people, and people with a catheter, it can also cause agitation or confusion, called delirium, or more leaking than usual. Sudden confusion needs help straight away.",
    sections: [
      {
        heading: "The usual signs",
        paragraphs: [
          "Symptoms of a UTI may include pain or a burning feeling when peeing, needing to pee more often than usual, including at night, and needing to pee suddenly or more urgently.",
          "Your pee may look cloudy or have blood in it. You may also have lower tummy pain, pain in your back just under the ribs, a high temperature, feel hot or cold and shivery, have a very low temperature below 36C, or feel tired or weak.",
        ],
      },
      {
        heading: "How it can feel",
        paragraphs: [
          "BAUS describes the pain of cystitis as usually a stinging or burning pain in the urethra. There can be a constant feeling that you need to pass urine, even if there is very little in your bladder, and an ache in your lower tummy.",
          "Your pee may also be dark or smell. If this is your only symptom, it might be because you have not been drinking enough water.",
        ],
      },
      {
        heading: "In older, frail people",
        paragraphs: [
          "In older, frail people who have problems with memory, learning and concentration, such as dementia, and in people with a urinary catheter, a UTI may also cause changes in behaviour. They may act agitated or confused, which is called delirium.",
          "They may also leak pee more than usual, or have new shivering or shaking, called rigors. The NHS says UTIs are a common cause of sudden confusion in older people or people with dementia.",
        ],
      },
      {
        heading: "In children",
        paragraphs: [
          "Children with UTIs may also have a high temperature, seem generally unwell, wet the bed or wet themselves, or be sick. Babies and young children may be irritable and not feed, eat or drink properly.",
        ],
      },
      {
        heading: "Sudden confusion is an emergency",
        paragraphs: [
          "Go to A&E or call 999 if someone suddenly becomes confused. Many causes of sudden confusion need to be assessed and treated as soon as possible, and sometimes it may be life threatening.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E now if you or your child are confused, drowsy, or have difficulty speaking.",
      "Go to A&E or call 999 if someone suddenly becomes confused.",
      "If someone is suddenly confused, stay with them, tell them who you are and where they are, and keep reassuring them.",
      "Make a note of any medicines a confused person is taking, if possible.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have blood in your pee, or pain in your lower tummy or in your back, just under the ribs.",
      "If dark or smelly pee is your only symptom, it might be because you have not been drinking enough water.",
    ],
    tryThisWeek: [
      "Call 999 for sudden confusion.",
      "Stay with and reassure a confused person.",
      "Get urgent help for blood in your pee.",
    ],
    ask: "Which symptoms mean I should get help the same day?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick any you have noticed. They become a list to show the pharmacist, GP or NHS 111.",
      signs: [
        "Pain or burning when peeing",
        "Peeing more often, including at night",
        "Needing to pee suddenly or urgently",
        "Cloudy pee",
        "Blood in your pee",
        "Lower tummy pain",
        "Pain in your back, just under the ribs",
        "High temperature, or hot, cold and shivery",
        "Very low temperature, below 36C",
        "Feeling tired or weak",
        "New agitation or confusion",
        "Leaking pee more than usual",
      ],
      after: "If someone is confused, drowsy, or has difficulty speaking, call 999 or go to A&E now.",
      copyHeading: "UTI symptoms I have noticed",
    },
    sources: [NHS_UTI, BAUS_CYSTITIS, BAUS_UTI, NHS_CONFUSION],
    quiz: {
      question: "Which can be a sign of a UTI in older, frail people?",
      options: [{ text: "Acting agitated or confused", right: true }, { text: "Itchy eyes" }, { text: "A runny nose" }],
      why: "In older, frail people who have problems with memory, learning and concentration, a UTI may also cause changes in behaviour. They may act agitated or confused, which is called delirium.",
    },
  },
  {
    id: "uti-kidney-infection",
    kicker: "Understanding",
    question: "What happens when a UTI reaches the kidneys?",
    hook: "A kidney infection makes you feel properly ill, with fever and back pain. It needs antibiotics, and quick help if it gets worse.",
    short: "A kidney infection is a painful type of UTI that can affect one or both kidneys, and it can be serious if it is not treated, as it can cause sepsis. It usually brings a high temperature, feeling sick and pain in the back or side. Antibiotic tablets for 7 to 14 days are the main treatment, and most people feel better after about 2 weeks.",
    sections: [
      {
        heading: "A more serious UTI",
        paragraphs: [
          "A kidney infection is a painful type of urinary tract infection that can affect one or both kidneys. It is usually caused by bacteria moving from the bladder into the kidney, and it can be serious if it is not treated.",
          "A kidney infection is often caused by cystitis, but you can have one without cystitis. You may be more likely to get one if you have a problem with your kidney, such as kidney stones, or a weakened immune system.",
        ],
      },
      {
        heading: "The symptoms",
        paragraphs: [
          "Symptoms can include a high temperature, feeling or being sick, pain in your lower back or side, diarrhoea, and aching muscles and flu-like symptoms.",
          "There may also be pain, burning or stinging when you pee, needing to pee more often and urgently, and pee that is dark or cloudy. Young children may wet the bed or themselves or be drowsy, and a child under 2 years may only have a high temperature.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you think you may have a kidney infection and have a very high temperature, feel hot, cold or shivery, have a very low temperature below 36C, or are feeling or being sick.",
          "Do the same if you have pain in the lower tummy or in the back just under the ribs, blood in your pee, have not had a pee all day, or are pregnant. Call 999 or go to A&E now if you are confused, drowsy or have difficulty speaking.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "If the GP thinks you have a kidney infection, your pee will be tested to check. The main treatment is antibiotic tablets, which you will usually take for 7 to 14 days.",
          "Some people, such as those with a long-term health condition or who are pregnant, may need to go to hospital for antibiotics through a drip, which works faster than tablets. Most people are well enough to go home after 3 to 7 days.",
        ],
      },
      {
        heading: "Getting better",
        paragraphs: [
          "You will usually feel better after about 2 weeks, though people who are older or have underlying conditions may take longer. It can take up to 2 weeks before you feel able to return to work.",
          "See your doctor if you do not start to feel better 2 days after starting antibiotics, or sooner if you start to feel worse. NICE notes that vomiting can be a sign that a kidney infection is getting worse.",
        ],
      },
    ],
    helps: [
      "Rest: it can take up to 2 weeks before you feel able to return to work.",
      "Drink lots of fluids, such as water or squash, taking small sips if you feel sick.",
      "Take paracetamol to reduce a high temperature and relieve pain.",
      "Do not take ibuprofen unless a doctor advises it, as it may increase your risk of further kidney problems.",
      "Ask your doctor how much fluid you can drink if you have kidney problems.",
      "Always try to fully empty your bladder when you pee, and do not hold your pee in.",
    ],
    tryThisWeek: [
      "Rest, and sip fluids often.",
      "Take paracetamol, not ibuprofen.",
      "Fully empty your bladder.",
    ],
    ask: "How long should my antibiotics take to work, and when should I come back?",
    interactive: {
      kind: "timeline",
      title: "A kidney infection, step by step",
      steps: [
        { id: "first-signs", when: "First signs", title: "Get urgent advice", points: ["Ask for an urgent GP appointment or get help from NHS 111.", "Call 999 if confused, drowsy or struggling to speak."] },
        { id: "gp", when: "At the GP", title: "A pee test and antibiotics", points: ["Your pee is tested to check.", "Antibiotic tablets, usually for 7 to 14 days."] },
        { id: "day-two", when: "After 2 days", title: "Check you are improving", points: ["See your doctor if you are not starting to feel better.", "Go sooner if you start to feel worse."] },
        { id: "hospital", when: "If needed", title: "Antibiotics through a drip", points: ["This works faster than tablets.", "Most people go home after 3 to 7 days."] },
        { id: "two-weeks", when: "About 2 weeks", title: "Feeling better", points: ["Most people feel better by now.", "Older people may take longer."] },
      ],
    },
    sources: [NHS_KIDNEY, NICE_KIDNEY],
    quiz: {
      question: "Which painkiller does the NHS say to avoid with a kidney infection, unless a doctor advises it?",
      options: [{ text: "Ibuprofen", right: true }, { text: "Paracetamol" }, { text: "Neither" }],
      why: "Do not take ibuprofen unless a doctor advises it, as it may increase your risk of further kidney problems.",
    },
  },
  {
    id: "uti-causes",
    kicker: "Causes",
    question: "Why do UTIs happen?",
    hook: "Usually bacteria from the bowel finding a short route in. Some everyday habits, and some health conditions, make that easier.",
    short: "UTIs are usually caused by bacteria from poo, most often E coli, getting into the urethra. They are more common in women, who have a shorter urethra. Things that raise the risk include pregnancy, the menopause, sex and spermicides, not drinking enough, catheters, and conditions that block the urinary tract or stop the bladder emptying fully.",
    sections: [
      {
        heading: "Bacteria from the bowel",
        paragraphs: [
          "UTIs are usually caused by bacteria from poo entering the urinary tract through the urethra. The commonest is E coli, which lives in the bowel, where it usually does no harm, and on the skin around the bowel and vagina.",
          "NICE's summary for GPs says E coli is identified in up to 77% of bladder infections in women. Many other types of bacteria can cause cystitis too.",
        ],
      },
      {
        heading: "Why women get more",
        paragraphs: [
          "In women, the openings to the urethra, vagina and anus are close together, so bacteria can get into the bladder easily. Women also have a shorter urethra than men, so bacteria are more likely to reach the bladder or kidneys.",
        ],
      },
      {
        heading: "Things that raise the risk",
        paragraphs: [
          "Things that increase the risk include pregnancy, wiping your bottom from back to front after going to the toilet, and conditions that block the urinary tract, such as kidney stones.",
          "So do conditions that make it hard to fully empty the bladder, such as an enlarged prostate in men and constipation in children, urinary catheters, and a weakened immune system, for example from poorly controlled diabetes or chemotherapy.",
        ],
      },
      {
        heading: "Sex and contraception",
        paragraphs: [
          "Cystitis can sometimes be triggered by sex. BAUS lists sexual intercourse, passing urine infrequently and not emptying the bladder fully among the risk factors.",
          "Using spermicide with contraception raises the risk too, as spermicides can increase the risk of urine infection in some women.",
        ],
      },
      {
        heading: "The menopause and fluids",
        paragraphs: [
          "Cystitis is more common in women after the menopause. Oestrogen helps to protect against urine infection, and after the menopause, oestrogen levels become low.",
          "Not drinking enough fluids also increases the risk. Drinking enough so you do not get dehydrated is one of the self-help measures BAUS suggests.",
        ],
      },
    ],
    helps: [
      "Wipe from front to back when you go to the toilet.",
      "Drink plenty of fluids, particularly water, so that you regularly pee during the day and do not feel thirsty.",
      "Do not hold your pee in if you feel the urge to go, and try to fully empty your bladder.",
      "Pee as soon as possible after sex.",
      "Try non-spermicidal lube or a different type of contraception instead of spermicidal products.",
    ],
    tryThisWeek: [
      "Wipe from front to back.",
      "Drink enough to pee regularly.",
      "Pee soon after sex.",
    ],
    ask: "Is there a reason I keep getting infections that we should look into?",
    interactive: {
      kind: "risk-check",
      title: "What raises the risk?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "wiping", label: "Wiping from back to front", note: "The NHS advises wiping from front to back when you go to the toilet.", changeable: true },
        { id: "fluids", label: "Not drinking enough", note: "Drink plenty, particularly water, so you pee regularly during the day and do not feel thirsty.", changeable: true },
        { id: "holding", label: "Holding your pee in", note: "Pass urine when you need to go, and try to fully empty your bladder.", changeable: true },
        { id: "spermicide", label: "Spermicide with contraception", note: "Try non-spermicidal lube or a different type of contraception.", changeable: true },
        { id: "sex", label: "Infections that follow sex", note: "Pee as soon as possible after sex.", changeable: true },
        { id: "menopause", label: "Having been through the menopause", note: "Oestrogen helps protect against urine infection, and after the menopause its levels become low.", changeable: false },
        { id: "pregnancy", label: "Being pregnant", note: "If you think you have a UTI while pregnant, ask for an urgent GP appointment or get help from NHS 111.", changeable: false },
        { id: "blockage", label: "Kidney stones or an enlarged prostate", note: "Conditions that block the urinary tract, or make it hard to empty the bladder fully, raise the risk.", changeable: false },
        { id: "catheter", label: "A urinary catheter", note: "Catheters are one of the things that increase the risk of bacteria getting into the bladder.", changeable: false },
        { id: "immune", label: "A weakened immune system", note: "For example from poorly controlled diabetes or chemotherapy.", changeable: false },
      ],
    },
    sources: [NHS_UTI, BAUS_CYSTITIS, BAUS_UTI, NICE_CKS],
    quiz: {
      question: "Why are UTIs more common in women?",
      options: [{ text: "A shorter urethra, close to the anus", right: true }, { text: "Weaker kidneys" }, { text: "Drinking more water" }],
      why: "In women, the openings to the urethra, vagina and anus are close together, so bacteria can get into the bladder easily. Women also have a shorter urethra than men.",
    },
  },
  {
    id: "uti-pharmacy",
    kicker: "Getting help",
    question: "Should I see a pharmacist, a GP or call 111?",
    hook: "Many women can now get UTI treatment straight from a pharmacy. Others need a GP the same day, and a few need 999.",
    short: "Through Pharmacy First, most pharmacies can treat UTIs in women aged 16 to 64 who are not pregnant or breastfeeding, with the same medicines a GP would give. Men, people aged 65 or over, pregnant women, people with diabetes or a catheter, and anyone whose symptoms are getting worse quickly or not improving should ask for an urgent GP appointment or use NHS 111.",
    sections: [
      {
        heading: "Pharmacy First",
        paragraphs: [
          "Most pharmacies can offer prescription medicine for some conditions without you needing to see a GP or make an appointment. This is called Pharmacy First, and it includes UTIs in women aged 16 to 64.",
          "The NHS says see a pharmacist if you think you have a UTI and you are a woman or girl aged 16 to 64 who is not pregnant or breastfeeding. A pharmacist can give the same medicines as a GP to treat a UTI.",
        ],
      },
      {
        heading: "What the pharmacist does",
        paragraphs: [
          "The pharmacist will offer you advice or treatment, or refer you to a GP or other health professional if needed. They will also update your GP health record, but your information will not be shared with anyone else.",
          "Most pharmacies can provide prescription medicine for these conditions, but contact them before visiting to check. If you are outside the age range, a pharmacist can still offer advice, but you may need to see a GP for treatment.",
        ],
      },
      {
        heading: "When to see a GP urgently",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you think you have a UTI and you are 65 or older, a man, or trans or non-binary and assigned male at birth. The same goes if you are pregnant, have diabetes, use a catheter or have a weakened immune system.",
          "Do the same if your child is 15 or younger, you have a very high or low temperature, your symptoms get worse quickly or do not improve within 48 hours of starting treatment, or you keep getting UTIs.",
        ],
      },
      {
        heading: "How 111 can help",
        paragraphs: [
          "NHS 111 can help if you think you need medical help right now, through 111 online, the NHS App or by calling 111. It can direct you to the best place to get help if you cannot contact your GP, or when your GP is closed.",
          "Depending on what you need, you might be advised to see a pharmacist, book a callback from a nurse, contact your own GP surgery, or call 999 or go to A&E in an emergency.",
        ],
      },
      {
        heading: "Emergencies",
        paragraphs: [
          "Call 999 or go to A&E now if you or your child are confused, drowsy, or have difficulty speaking. Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        ],
      },
    ],
    helps: [
      "See a pharmacist if you think you have a UTI and you are a woman aged 16 to 64 who is not pregnant or breastfeeding.",
      "Contact the pharmacy before visiting, to check it can provide prescription medicine for UTIs.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you are a man, are 65 or older, are pregnant or have diabetes.",
      "Get help from a GP or NHS 111 if your symptoms get worse quickly or do not improve within 48 hours of starting treatment.",
      "Use 111 online, the NHS App or call 111 if you cannot contact your GP, or your GP is closed.",
      "Call 999 or go to A&E now if you or your child are confused, drowsy, or have difficulty speaking.",
    ],
    tryThisWeek: [
      "Try a pharmacy first if aged 16 to 64.",
      "Phone the pharmacy before you go.",
      "Use 111 when your GP is closed.",
    ],
    ask: "Can I be treated at a pharmacy next time, or should I always see you?",
    interactive: {
      kind: "scenarios",
      title: "Where to go first",
      scenarios: [
        {
          id: "young-woman",
          situation: "You are 30, not pregnant, and it burns when you pee.",
          options: [{ text: "See a pharmacist", best: true }, { text: "Go straight to A&E" }],
          why: "See a pharmacist if you think you have a UTI and you are a woman aged 16 to 64 who is not pregnant or breastfeeding. A pharmacist can give the same medicines as a GP.",
        },
        {
          id: "man",
          situation: "You are a man with burning and needing to pee often.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait a week to see" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you think you have a UTI and you are a man.",
        },
        {
          id: "weekend",
          situation: "It is Saturday night and your GP surgery is closed.",
          options: [{ text: "Use 111 online or call 111", best: true }, { text: "Wait until Monday whatever happens" }],
          why: "111 can direct you to the best place to get help if you cannot contact your GP, or when your GP is closed.",
        },
        {
          id: "drowsy",
          situation: "You feel very drowsy and find it hard to speak.",
          options: [{ text: "Call 999 or go to A&E now", best: true }, { text: "Drive yourself to the pharmacy" }],
          why: "Call 999 or go to A&E now if you are confused, drowsy, or have difficulty speaking. Do not drive to A&E.",
        },
      ],
    },
    sources: [NHS_PHARMACIES, NHS_UTI, NHS_111],
    quiz: {
      question: "Who can get UTI treatment from a pharmacist through Pharmacy First?",
      options: [{ text: "Women aged 16 to 64", right: true }, { text: "Men of any age" }, { text: "Children under 5" }],
      why: "Most pharmacies can offer prescription medicine without you seeing a GP. This is called Pharmacy First, and it includes UTIs in women aged 16 to 64.",
    },
  },
  {
    id: "uti-antibiotics",
    kicker: "Treatment",
    question: "Do I need antibiotics, and what can I do myself?",
    hook: "Not always. Many bladder infections settle on their own, and the right self-care eases the burning while you wait.",
    short: "UTIs may be treated with antibiotics, but they are not always needed, and many bladder infections clear in a few days. A GP may suggest self-care and a painkiller, a short course of antibiotics, or waiting 48 hours first. If you are given antibiotics, take them all, even if you feel better.",
    sections: [
      {
        heading: "Not always needed",
        paragraphs: [
          "UTIs may be treated with antibiotics, but they are not always needed. Cystitis may clear up on its own after a few days, but some people need antibiotics.",
          "A GP may offer self-care advice and a painkiller, a prescription for a short course of antibiotics, or ask you to wait 48 hours before getting antibiotics in case your symptoms go away on their own. NICE describes a back-up prescription, to use if you do not start to feel better within 2 days, or start to feel worse.",
        ],
      },
      {
        heading: "Who gets them straight away",
        paragraphs: [
          "NICE says pregnant women, men, and children and young people aged under 16 with cystitis should be offered antibiotics straightaway. Anyone with a kidney infection should be offered antibiotics, because if it is not treated it can damage the kidney.",
          "Using antibiotics when they are not needed means they may not work as well in the future. The NHS calls antibiotic resistance a big problem.",
        ],
      },
      {
        heading: "Taking them well",
        paragraphs: [
          "It is important to take all the medicine you are prescribed, even if you start to feel better. Only ever take antibiotics prescribed for you, and do not use ones left over from previous infections.",
          "Nitrofurantoin is an antibiotic used to treat UTIs such as cystitis, and most people take it for 3 to 7 days. It can turn your pee a dark yellow or brownish colour, and it is best taken with food.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Common side effects of antibiotics include feeling or being sick, bloating and indigestion, and diarrhoea. Most antibiotics do not cause problems if they are used properly, and serious side effects are rare.",
          "Call 999 or go to A&E now if you get signs of a serious allergic reaction, such as wheezing, tightness in the chest or throat, trouble breathing or talking, or swelling of the mouth, face, lips, tongue or throat.",
        ],
      },
      {
        heading: "Easing the symptoms yourself",
        paragraphs: [
          "Take paracetamol up to 4 times a day to reduce pain and a high temperature. Rest and drink enough fluids so you pass pale urine regularly during the day.",
          "Avoid drinks that may irritate your bladder, like fruit juices, coffee and alcohol. NICE says ibuprofen may also help if it is suitable for you, but it found no research on cranberry drinks or urine alkalising products for treating a UTI.",
        ],
      },
    ],
    helps: [
      "Take paracetamol up to 4 times a day to reduce pain and a high temperature.",
      "Rest and drink enough fluids so you pass pale urine regularly during the day.",
      "Avoid drinks that may irritate your bladder, like fruit juices, coffee and alcohol.",
      "Take all the antibiotics you are prescribed, even if you start to feel better.",
      "Never take antibiotics left over from previous infections or prescribed for someone else.",
      "See your doctor if you do not start to feel better 2 days after starting antibiotics, or sooner if you start to feel worse.",
    ],
    tryThisWeek: [
      "Take paracetamol for the pain.",
      "Finish the whole course.",
      "See a doctor if no better in 2 days.",
    ],
    ask: "Do I need antibiotics now, or can I wait and see?",
    interactive: {
      kind: "scenarios",
      title: "Antibiotic moments",
      scenarios: [
        {
          id: "back-up",
          situation: "Your GP gives you a back-up prescription.",
          options: [{ text: "Use it if no better in 2 days, or worse", best: true }, { text: "Take it straight away, just in case" }],
          why: "You can use a back-up prescription to get an antibiotic if you do not start to feel better within 2 days, or start to feel worse.",
        },
        {
          id: "feel-better",
          situation: "You feel better after 2 days of antibiotics.",
          options: [{ text: "Finish the whole course", best: true }, { text: "Stop and keep the rest" }],
          why: "It is important to take all the medicine you are prescribed, even if you start to feel better.",
        },
        {
          id: "missed",
          situation: "You forgot a dose and remember a few hours later.",
          options: [{ text: "Take it now, unless the next is nearly due", best: true }, { text: "Take a double dose next time" }],
          why: "In most cases you can take the missed dose as soon as you remember. If it is almost time for the next dose, skip it. Do not take a double dose.",
        },
        {
          id: "leftovers",
          situation: "A friend offers you her leftover antibiotics.",
          options: [{ text: "Say no: only take your own", best: true }, { text: "Take them to save a trip" }],
          why: "Only ever take antibiotics prescribed for you. Never borrow them from a friend or family member.",
        },
      ],
    },
    sources: [NHS_UTI, NICE_CYSTITIS, NICE_KIDNEY, NHS_ANTIBIOTICS, BAUS_CYSTITIS, NHS_NITRO],
    quiz: {
      question: "What does NICE call a prescription to use only if you are not better within 2 days?",
      options: [{ text: "A back-up prescription", right: true }, { text: "A repeat prescription" }, { text: "An emergency supply" }],
      why: "NICE describes a back-up prescription, to use if you do not start to feel better within 2 days, or start to feel worse.",
    },
  },
  {
    id: "uti-recurrent",
    kicker: "Treatment",
    question: "What if my UTIs keep coming back?",
    hook: "Two in six months, or three in a year, is worth a GP visit. There are several steps to try, and most people do not need special tests.",
    short: "If your UTI comes back after treatment, or you have 2 UTIs in 6 months or 3 within 12 months, see a GP. Options include everyday measures, vaginal oestrogen after the menopause, a one-off antibiotic to use when an infection is likely, methenamine hippurate, or daily antibiotics for an agreed time. Symptoms that do not go away may need a specialist.",
    sections: [
      {
        heading: "What counts as coming back",
        paragraphs: [
          "The NHS says you will need to see a GP if your UTI comes back after treatment, or you have 2 UTIs in 6 months, or 3 within 12 months.",
          "This may be because an infection seems to clear but comes back later, or because a new infection with a different type of bacteria starts. Recurrent UTIs may affect the bladder or the kidney.",
        ],
      },
      {
        heading: "Tests",
        paragraphs: [
          "Most people who have recurrent cystitis do not need special tests. You may need an ultrasound scan or a referral to a urology clinic if infections are persistent or very frequent, have spread to the kidneys, your bladder is not emptying fully, or you have visible blood in the urine without an infection.",
          "BAUS says recurrent cystitis, kidney infections and all urinary infections in men should be investigated. NICE says you will be referred if you are a man, are under 16, or have a recurrent kidney infection.",
        ],
      },
      {
        heading: "Treatments that may be offered",
        paragraphs: [
          "A GP may prescribe a different antibiotic, or a low-dose antibiotic to take for up to 6 months. If you are in perimenopause or have gone through the menopause, they may prescribe vaginal oestrogen as a cream, gel, tablet, pessary or ring.",
          "Other options include a one-off antibiotic to use only if you think you are likely to get an infection, or a medicine called methenamine hippurate, which is not an antibiotic. If these do not help, your doctor may suggest taking antibiotics every day for an agreed time.",
        ],
      },
      {
        heading: "Long-term, or chronic, UTIs",
        paragraphs: [
          "Sometimes UTI symptoms do not go away. Short-term antibiotics may not work and urine tests may not show an infection, which might mean a long-term, or chronic, UTI caused by bacteria entering the lining of your bladder.",
          "Chronic UTIs can be difficult to diagnose and can have a big impact on your quality of life. If you have been treated for a UTI but you still have symptoms, speak to your GP and ask to be referred to a specialist.",
        ],
      },
      {
        heading: "Support",
        paragraphs: [
          "Bladder Health UK is a charity that offers help and support with bladder infections and recurrent UTIs. It has a confidential helpline on 0121 702 0820, and members can have telephone contact with a Phone-Pal who has been through it too.",
        ],
      },
    ],
    helps: [
      "See a GP if your UTI comes back after treatment, or you have 2 UTIs in 6 months or 3 within 12 months.",
      "Drink plenty of fluids and try to avoid waiting when you need to pass urine.",
      "If you are not pregnant, talk to your GP about options such as vaginal oestrogen, a one-off antibiotic or methenamine hippurate.",
      "If you have been treated for a UTI but still have symptoms, speak to your GP and ask to be referred to a specialist.",
      "If sex seems to trigger cystitis, pass urine and empty your bladder as soon as possible afterwards.",
      "Call Bladder Health UK's confidential helpline on 0121 702 0820 for support.",
    ],
    tryThisWeek: [
      "See a GP about repeat UTIs.",
      "Ask about the prevention options.",
      "Call Bladder Health UK for support.",
    ],
    ask: "Which way of preventing UTIs would suit me best?",
    interactive: {
      kind: "timeline",
      title: "Steps a GP may suggest",
      steps: [
        { id: "habits", when: "First", title: "Everyday measures", points: ["Drink plenty of fluids.", "Try not to wait when you need to pass urine."] },
        { id: "oestrogen", when: "Around the menopause", title: "Vaginal oestrogen", points: ["A cream, gel, tablet, pessary or ring.", "For perimenopause or after the menopause."] },
        { id: "one-off", when: "Another option", title: "A one-off antibiotic", points: ["Used only if you think you are likely to get an infection."] },
        { id: "methenamine", when: "Another option", title: "Methenamine hippurate", points: ["A medicine that is not an antibiotic."] },
        { id: "daily", when: "If these do not help", title: "Daily antibiotics", points: ["Taken every day for an agreed time.", "To see if it reduces the number of UTIs."] },
        { id: "specialist", when: "When needed", title: "A specialist", points: ["For men, under 16s and recurrent kidney infections.", "Or if symptoms carry on after treatment."] },
      ],
    },
    sources: [NHS_UTI, NICE_RECURRENT, BAUS_CYSTITIS, BAUS_UTI, BHUK_CYSTITIS],
    quiz: {
      question: "How many UTIs within 6 months mean it is time to see a GP?",
      options: [{ text: "2", right: true }, { text: "5" }, { text: "10" }],
      why: "The NHS says you will need to see a GP if your UTI comes back after treatment, or you have 2 UTIs in 6 months, or 3 within 12 months.",
    },
  },
  {
    id: "uti-urgent",
    kicker: "Urgent",
    question: "When is a UTI an emergency?",
    hook: "Most UTIs are not. But confusion, drowsiness or the signs of sepsis mean calling 999 or going to A&E straight away.",
    short: "Call 999 or go to A&E now if someone with a UTI is confused, drowsy, or has difficulty speaking. A kidney infection can cause sepsis, a serious reaction to infection that develops quickly and can be life-threatening. Pain in the back just under the ribs, blood in your pee or symptoms that get worse quickly mean asking for an urgent GP appointment or getting help from NHS 111.",
    sections: [
      {
        heading: "Call 999 or go to A&E",
        paragraphs: [
          "Call 999 or go to A&E now if you or your child have a UTI and are confused, drowsy, or have difficulty speaking.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
      {
        heading: "Why it can be serious",
        paragraphs: [
          "Some UTI symptoms could be signs of a kidney infection, which can be serious if it is not treated as it could cause sepsis. Sepsis is a serious reaction to an infection that can be life-threatening, and it develops very quickly.",
          "Any type of infection can lead to sepsis, but bacterial infections, including UTIs, are the most common cause. Anyone can get sepsis, but the chance is higher if you are over 75, are pregnant, have a weakened immune system or have a catheter.",
        ],
      },
      {
        heading: "Signs of sepsis in adults",
        paragraphs: [
          "Common symptoms of sepsis in adults include confusion or slurred speech, uncontrollable shivering, muscle pain and difficulty breathing. Skin, lips or tongue may be blue, pale, grey or blotchy, which on black or brown skin may be easier to see on the palms of the hands or soles of the feet.",
          "There may be a high or low temperature, though a high temperature is less common in older adults. Someone may not pee all day, or pee very little in the past 18 hours.",
        ],
      },
      {
        heading: "Trust your instincts",
        paragraphs: [
          "A child or adult with sepsis might not have every symptom. Get immediate medical help if you or your child are unwell and you think there is something seriously wrong.",
          "Symptoms of sepsis can be harder to notice in babies and young children, people with dementia, people with a learning disability and people who have difficulty communicating.",
        ],
      },
      {
        heading: "An urgent GP appointment or NHS 111",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have a UTI and pain in the lower tummy or in the back just under the ribs, or blood in your pee.",
          "Do the same if your symptoms get worse quickly or do not improve within 48 hours of starting treatment, or, with a kidney infection, you have not had a pee all day.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E now if you or your child are confused, drowsy, or have difficulty speaking.",
      "Call 999 or go to A&E if an adult who might have sepsis is breathing very fast, is confused or not making sense, or has blue, pale or blotchy skin.",
      "Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
      "Bring any medicines you take with you.",
      "Get immediate medical help if you think something is seriously wrong, even if not every symptom is there.",
      "Call NHS 111 if you have had sepsis in the past 12 months and have symptoms of an infection.",
    ],
    tryThisWeek: [
      "Know the signs that mean 999.",
      "Get a lift or an ambulance, never drive.",
      "Take your medicines with you.",
    ],
    ask: "What signs would mean I need to come back straight away?",
    interactive: {
      kind: "signs",
      title: "Signs that need help now",
      intro: "These are the signs the NHS lists for an adult who might have sepsis. Tick any you see.",
      signs: [
        "Confused, drowsy or difficulty speaking",
        "Slurred speech or not making sense",
        "Breathing very fast",
        "Blue, pale or blotchy skin, lips or tongue",
        "Very high or very low temperature",
        "Feels hot or cold to the touch, or shivery",
        "A rash that does not fade when you press it",
      ],
      after: "If any apply, call 999 or go to A&E now. Do not drive: ask someone to drive you or call 999 for an ambulance.",
      copyHeading: "Emergency signs I noticed",
    },
    sources: [NHS_UTI, NHS_SEPSIS, NHS_KIDNEY],
    quiz: {
      question: "Someone with a UTI becomes confused and drowsy. What does the NHS say to do?",
      options: [{ text: "Call 999 or go to A&E now", right: true }, { text: "Wait and see tomorrow" }, { text: "Give them cranberry juice" }],
      why: "Call 999 or go to A&E now if you or your child have a UTI and are confused, drowsy, or have difficulty speaking.",
    },
  },
  {
    id: "uti-prevention",
    kicker: "Living well",
    question: "What can I do every day to prevent UTIs?",
    hook: "Small habits: how you wipe, what you drink, what you wash with, and what you do after sex.",
    short: "Wiping from front to back, drinking enough to pee regularly, not holding your pee in and peeing soon after sex can all help prevent UTIs. Cotton underwear, a gentle plain soap and avoiding spermicidal lube can help too.",
    sections: [
      {
        heading: "Toilet habits",
        paragraphs: [
          "Wipe from front to back when you go to the toilet. Do not hold your pee in if you feel the urge to go.",
          "Do not rush when going for a pee. Try to fully empty your bladder.",
        ],
      },
      {
        heading: "Drinks",
        paragraphs: [
          "Drink plenty of fluids, particularly water, so that you regularly pee during the day and do not feel thirsty. BAUS suggests three to four pints, or two litres, of liquid each day.",
          "Do not drink lots of alcoholic drinks, as they may irritate your bladder. When symptoms start, BAUS suggests drinking water and avoiding strong coffee, tea, alcohol and acidic drinks such as fruit juice or fizzy drinks.",
        ],
      },
      {
        heading: "Washing and clothes",
        paragraphs: [
          "Keep the genital area clean and dry, and wear cotton underwear rather than tight underwear. Do not use scented soap around the genital area.",
          "BAUS suggests using only a gentle plain soap, so as not to wash away good bacteria, and avoiding bubble baths, talcum powder, deodorants and feminine wipes on the genital area.",
        ],
      },
      {
        heading: "Sex and contraception",
        paragraphs: [
          "Wash the skin around the vagina with water before and after sex, and pee as soon as possible after sex. BAUS suggests drinking more around the time of sex, to help flush bacteria away from your bladder.",
          "Do not use condoms, a diaphragm or a cap with spermicidal lube on them. Try non-spermicidal lube or a different type of contraception.",
        ],
      },
      {
        heading: "Pads, nappies and sugar",
        paragraphs: [
          "Promptly change nappies or incontinence pads if they are soiled. Do not have lots of sugary food or drinks, as they may encourage bacteria to grow.",
        ],
      },
    ],
    helps: [
      "Wipe from front to back when you go to the toilet.",
      "Drink plenty of fluids, particularly water, so that you regularly pee during the day and do not feel thirsty.",
      "Pee as soon as possible after sex.",
      "Wear cotton underwear, not tight underwear.",
      "Use a gentle plain soap, not scented soap, around the genital area.",
      "Try non-spermicidal lube or a different type of contraception.",
    ],
    tryThisWeek: [
      "Wipe from front to back.",
      "Pee soon after sex.",
      "Switch to cotton underwear.",
    ],
    ask: "Is there anything about my routine that could be making UTIs more likely?",
    interactive: {
      kind: "scenarios",
      title: "Everyday choices",
      scenarios: [
        {
          id: "urge",
          situation: "You need to pee, but you are busy.",
          options: [{ text: "Go when you feel the urge", best: true }, { text: "Hold it until later" }],
          why: "Do not hold your pee in if you feel the urge to go, and do not rush: try to fully empty your bladder.",
        },
        {
          id: "after-sex",
          situation: "You have just had sex.",
          options: [{ text: "Pee as soon as possible", best: true }, { text: "Wait until the morning" }],
          why: "Pee as soon as possible after sex. BAUS suggests drinking more around the time of sex, to help flush bacteria away.",
        },
        {
          id: "soap",
          situation: "You are choosing what to wash with.",
          options: [{ text: "A gentle plain soap", best: true }, { text: "A scented shower gel" }],
          why: "Do not use scented soap around the genital area. BAUS suggests a gentle plain soap, so as not to wash away good bacteria.",
        },
        {
          id: "spermicide",
          situation: "Your contraception uses spermicidal lube.",
          options: [{ text: "Try a non-spermicidal option", best: true }, { text: "Carry on as before" }],
          why: "Do not use condoms, a diaphragm or a cap with spermicidal lube on them. Try non-spermicidal lube or a different type of contraception.",
        },
      ],
    },
    sources: [NHS_UTI, BAUS_CYSTITIS, BAUS_UTI],
    quiz: {
      question: "Which way does the NHS say to wipe after the toilet?",
      options: [{ text: "Front to back", right: true }, { text: "Back to front" }, { text: "It makes no difference" }],
      why: "Wipe from front to back when you go to the toilet.",
    },
  },
  {
    id: "uti-menopause",
    kicker: "Living well",
    question: "Why are UTIs more common after the menopause, and what helps?",
    hook: "Lower oestrogen leaves the bladder less protected. A low-dose vaginal oestrogen can help, without the usual risks of HRT.",
    short: "Oestrogen helps protect against urine infection, and after the menopause its levels become low, so UTIs become more common. If they keep coming back, a GP may prescribe vaginal oestrogen as a cream, gel, tablet, pessary or ring. It does not carry the usual risks of HRT, and can be used without progestogen.",
    sections: [
      {
        heading: "The oestrogen link",
        paragraphs: [
          "Cystitis is more common in women after the menopause. This is because the hormone oestrogen helps to protect against urine infection, and after the menopause, oestrogen levels become low.",
          "The NHS lists having been through the menopause among the things that increase the risk of bacteria getting into the bladder.",
        ],
      },
      {
        heading: "Symptoms that feel like a UTI",
        paragraphs: [
          "During perimenopause and menopause you may get more UTIs, or symptoms that feel like a UTI. These include pain or a burning feeling when you pee, and needing to pee more often than usual, including at night.",
          "Vaginal dryness can also bring a need to pee more often than usual and UTIs that keep coming back, as well as soreness, itching or pain during sex.",
        ],
      },
      {
        heading: "Vaginal oestrogen",
        paragraphs: [
          "Low-dose oestrogen is available as a cream, gel, vaginal tablet, pessary or ring that you put inside your vagina. It is sometimes used to treat vaginal dryness and soreness, or urinary symptoms, after the menopause.",
          "If UTIs keep coming back, a GP may prescribe it if you are in perimenopause or have gone through the menopause. BAUS says weekly use can help reduce the number of infections some women have after the menopause, and it is often used more frequently for the first four to six weeks.",
        ],
      },
      {
        heading: "How safe it is",
        paragraphs: [
          "Vaginal oestrogen does not carry the usual risks of HRT and does not increase your risk of breast cancer. You can use it without taking progestogen, even if you still have a womb.",
          "NICE says it is absorbed locally, with only a minimal amount reaching the bloodstream, and that treatment for recurrent UTI should be reviewed within 12 months. NICE has separate advice on vaginal oestrogen for people who have had breast cancer.",
        ],
      },
      {
        heading: "Other things that may help",
        paragraphs: [
          "Use unperfumed soaps and washes around your vagina, and try vaginal moisturisers or water-based lubricants for dryness. Do not use creams or lotions that are not for your vagina, as they can cause more irritation or an infection.",
          "See a GP if vaginal dryness has lasted a few weeks and what you have tried is not working, or if you have any bleeding after the menopause.",
        ],
      },
    ],
    helps: [
      "Talk to a doctor, nurse or pharmacist about HRT and other options if you have symptoms of perimenopause or menopause.",
      "If UTIs keep coming back around or after the menopause, see your GP, who may prescribe vaginal oestrogen.",
      "Use unperfumed soaps and washes around your vagina.",
      "Try vaginal moisturisers or water-based lubricants for dryness.",
      "See a GP if you have any bleeding after the menopause.",
      "Have vaginal oestrogen for recurrent UTI reviewed within 12 months, or earlier if agreed.",
    ],
    tryThisWeek: [
      "Ask your GP about vaginal oestrogen.",
      "Switch to unperfumed washes.",
      "Try a vaginal moisturiser.",
    ],
    ask: "Would vaginal oestrogen help me, and when should we review it?",
    interactive: {
      kind: "scenarios",
      title: "Questions around the menopause",
      scenarios: [
        {
          id: "repeat",
          situation: "You are past the menopause and have had 3 UTIs this year.",
          options: [{ text: "See your GP about prevention", best: true }, { text: "Put up with it as part of ageing" }],
          why: "If you have 3 UTIs within 12 months, see a GP. If you have gone through the menopause, they may prescribe vaginal oestrogen.",
        },
        {
          id: "hrt-risks",
          situation: "You worry vaginal oestrogen has the risks of HRT.",
          options: [{ text: "It does not carry the usual HRT risks", best: true }, { text: "It has exactly the same risks" }],
          why: "Vaginal oestrogen does not carry the usual risks of HRT and does not increase your risk of breast cancer.",
        },
        {
          id: "womb",
          situation: "You still have a womb.",
          options: [{ text: "It can be used without progestogen", best: true }, { text: "Progestogen is always needed too" }],
          why: "You can use vaginal oestrogen without taking progestogen, even if you still have a womb.",
        },
        {
          id: "bleeding",
          situation: "You notice some bleeding after the menopause.",
          options: [{ text: "See a GP", best: true }, { text: "Wait for it to stop" }],
          why: "See a GP if you have bleeding after experiencing menopause.",
        },
      ],
    },
    sources: [BAUS_CYSTITIS, NHS_UTI, NHS_MENO_SYMPTOMS, NHS_VAGINAL_DRYNESS, NHS_HRT_TYPES, NHS_MENO_TREATMENT, BAUS_UTI, NICE_RECURRENT_RECS],
    quiz: {
      question: "Why do UTIs become more common after the menopause?",
      options: [{ text: "Oestrogen levels become low", right: true }, { text: "The kidneys get smaller" }, { text: "People drink more tea" }],
      why: "Oestrogen helps to protect against urine infection, and after the menopause, oestrogen levels become low.",
    },
  },
  {
    id: "uti-catheter",
    kicker: "Living well",
    question: "How do I lower the risk of UTIs with a catheter?",
    hook: "A catheter can let bacteria in. Daily care, a good drink and knowing when to call the nurse keep the risk down.",
    short: "The main risk of a urinary catheter is that it can let bacteria in and cause a UTI, and the longer it is used, the greater the risk. Washing around it daily, clean hands, drinking enough to keep urine pale, avoiding constipation and keeping the bag below the bladder all help. Contact your community nurse straight away if you have signs of infection or a blockage.",
    sections: [
      {
        heading: "Why catheters raise the risk",
        paragraphs: [
          "A urinary catheter is a flexible tube used to empty the bladder and collect urine in a drainage bag. Its main risk is that it can sometimes allow bacteria to enter your body, causing an infection in the urethra, bladder or, less commonly, the kidneys.",
          "The longer a catheter is used, the greater the risk of infection, and indwelling catheters, which stay in place, are more likely to cause infections. This is why catheters should only be used for as long as necessary.",
        ],
      },
      {
        heading: "Signs of an infection",
        paragraphs: [
          "Symptoms of a UTI with a catheter include pain low down in your tummy or around your groin, a high temperature, feeling hot, cold or shivery, and confusion. NICE adds cloudy, blood-stained or strong-smelling urine, and pain in your back.",
          "Bacteria are often found in the urine of people with catheters. NICE says antibiotics are not needed if you do not have UTI symptoms, even if tests show bacteria in your urine.",
        ],
      },
      {
        heading: "Everyday care",
        paragraphs: [
          "Wash the skin where the catheter enters your body with mild soap and water every day, and wash your hands with soap and warm water before and after touching your catheter equipment. Drink enough fluids so that your urine stays a pale colour.",
          "Avoid constipation, which staying hydrated and eating high-fibre foods can help with. Avoid kinks or bends in the catheter, and keep urine collection bags below the level of your bladder.",
        ],
      },
      {
        heading: "Bags and changes",
        paragraphs: [
          "Empty the bag before it is completely full, at around half to three-quarters full. Leg bags and valves should be changed every 7 days, and single-use night bags are usually used to reduce the risk of infection.",
          "The catheter itself needs to be removed and replaced at least every 3 months, usually by a doctor or nurse. NICE says your nurse or doctor may change or remove it if you have a UTI and have had the same one in place for a week or more.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Contact your community nurse immediately if you have symptoms of a UTI, such as lower tummy pain, a high temperature, or feeling hot, cold or shivery. Do the same if your catheter is blocked, urine is leaking around it, or you are passing bright red blood.",
          "If you cannot contact your community nurse, call 111. Get medical advice as soon as possible if you think your catheter may be blocked, or you are passing large pieces of debris or blood clots.",
        ],
      },
    ],
    helps: [
      "Wash the skin where the catheter enters your body with mild soap and water every day.",
      "Wash your hands with soap and warm water before and after touching your catheter equipment.",
      "Drink enough fluids so that your urine stays a pale colour.",
      "Avoid constipation by staying hydrated and eating high-fibre foods, such as fruit, vegetables and wholegrain foods.",
      "Avoid kinks or bends in the catheter, and keep urine bags below the level of your bladder.",
      "Contact your community nurse immediately if you have symptoms of a UTI, and call 111 if you cannot reach them.",
    ],
    tryThisWeek: [
      "Wash around the catheter daily.",
      "Drink enough for pale urine.",
      "Keep the bag below your bladder.",
    ],
    ask: "How often should my catheter and bags be changed, and who do I call if there is a problem?",
    interactive: {
      kind: "signs",
      title: "Catheter problems to report",
      intro: "Tick any you have noticed. They become a list for your community nurse.",
      signs: [
        "Lower tummy pain, or pain around the groin",
        "A high temperature, or hot, cold or shivery",
        "New confusion",
        "Cloudy or strong-smelling urine",
        "Blood in the urine, or bright red blood",
        "Catheter blocked, or not draining",
        "Urine leaking around the catheter",
        "Severe or ongoing bladder spasms",
        "Catheter fallen out and cannot be replaced",
      ],
      after: "Contact your community nurse immediately. If you cannot contact them, call 111.",
      copyHeading: "Catheter problems I have noticed",
    },
    sources: [NHS_CATHETER, NHS_CATHETER_RISKS, NHS_CATHETER_LIVING, NICE_CATHETER],
    quiz: {
      question: "Where should a urine collection bag be kept?",
      options: [{ text: "Below the level of your bladder", right: true }, { text: "Above your waist" }, { text: "It does not matter" }],
      why: "Avoid kinks or bends in the catheter, and keep urine collection bags below the level of your bladder.",
    },
  },
  {
    id: "uti-myths",
    kicker: "Living well",
    question: "Does cranberry help, and what about other remedies?",
    hook: "Cranberry and D-mannose may help some people prevent UTIs. Neither treats an infection that has already started.",
    short: "Some people take cranberry products or D-mannose to prevent UTIs, and there is some evidence they may help, though experts differ on how much. There is no evidence they ease symptoms or treat a UTI once it has started. Both can contain a lot of sugar, cranberry should be avoided with warfarin, and leftover antibiotics should never be used.",
    sections: [
      {
        heading: "Cranberry",
        paragraphs: [
          "Some people who are not pregnant take cranberry drinks and products to prevent UTIs, which may help. But there is no evidence they help ease symptoms or treat a UTI if the infection has already started.",
          "Experts differ on how much cranberry helps with prevention. BAUS says there is little evidence that cranberry products are helpful, and NICE says the evidence of benefit is uncertain, with no evidence of benefit for older women.",
        ],
      },
      {
        heading: "D-mannose",
        paragraphs: [
          "D-mannose is a sugar you can buy as a powder or tablets to take every day. The NHS says there is some evidence it may help if you keep getting cystitis, and NICE says research has found it can help prevent UTIs.",
          "NICE notes that it is not a medicine. BAUS says small studies of two grams a day suggest it can help prevent urine infection, but more evidence is needed.",
        ],
      },
      {
        heading: "Sugar, pregnancy and warfarin",
        paragraphs: [
          "D-mannose and cranberry products can contain a lot of sugar, and NICE says this should be counted as part of your daily sugar intake. If you are taking warfarin, avoid cranberry products.",
          "Speak to your doctor before taking D-mannose or cranberry products during pregnancy.",
        ],
      },
      {
        heading: "Sachets and probiotics",
        paragraphs: [
          "Some people take cystitis sachets, but the NHS says there is no evidence they ease symptoms or treat a UTI once it has started, and NICE found no research on urine alkalising products for treatment. BAUS says these products can ease the burning when you pass urine.",
          "Sachets that make urine more alkaline should not be used while taking methenamine hippurate, as they can make it less effective. Evidence is not clear on whether probiotics, called lactobacillus, reduce the risk of UTIs.",
        ],
      },
      {
        heading: "Leftover antibiotics",
        paragraphs: [
          "Do not take antibiotics left over from previous infections or from other people. Only ever take antibiotics prescribed for you.",
          "Some medicines for cystitis that you buy from a pharmacy may not mix well with nitrofurantoin, an antibiotic used for UTIs. Tell your doctor about any other medicines, herbal remedies, vitamins or supplements you take.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor before taking D-mannose or cranberry products during pregnancy.",
      "Avoid cranberry products if you take warfarin.",
      "Count the sugar in cranberry products and D-mannose as part of your daily sugar intake.",
      "Do not use urine alkalising sachets while taking methenamine hippurate.",
      "Tell your doctor about any medicines, herbal remedies, vitamins or supplements before taking nitrofurantoin.",
      "Do not take antibiotics left over from previous infections or from other people.",
    ],
    tryThisWeek: [
      "Check with your doctor if pregnant.",
      "Skip cranberry if you take warfarin.",
      "Never use leftover antibiotics.",
    ],
    ask: "Is D-mannose or cranberry worth trying for me, alongside my other medicines?",
    interactive: {
      kind: "scenarios",
      title: "Myth or fact?",
      scenarios: [
        {
          id: "cure",
          situation: "Cranberry juice will clear a UTI that has started.",
          options: [{ text: "No evidence it treats one", best: true }, { text: "It works like antibiotics" }],
          why: "There is no evidence cranberry products help ease symptoms or treat a UTI if the infection has already started.",
        },
        {
          id: "warfarin",
          situation: "You take warfarin and want to try cranberry capsules.",
          options: [{ text: "Avoid cranberry products", best: true }, { text: "Take a double amount" }],
          why: "If you are taking warfarin, avoid cranberry products.",
        },
        {
          id: "pregnant",
          situation: "You are pregnant and thinking about D-mannose.",
          options: [{ text: "Speak to your doctor first", best: true }, { text: "Start it straight away" }],
          why: "Speak to your doctor before taking D-mannose or cranberry products during pregnancy.",
        },
        {
          id: "leftovers",
          situation: "You have antibiotics left over from last time.",
          options: [{ text: "Do not take them", best: true }, { text: "Take them at the first twinge" }],
          why: "Do not take antibiotics left over from previous infections or from other people.",
        },
      ],
    },
    sources: [NHS_UTI, BAUS_UTI, NICE_RECURRENT_RECS, NICE_RECURRENT, NICE_CYSTITIS, NHS_ANTIBIOTICS, BAUS_CYSTITIS, NHS_NITRO],
    quiz: {
      question: "Can cranberry treat a UTI that has already started?",
      options: [{ text: "There is no evidence it can", right: true }, { text: "Yes, within a day" }, { text: "Only as juice" }],
      why: "There is no evidence cranberry products help ease symptoms or treat a UTI if the infection has already started.",
    },
  },
];
