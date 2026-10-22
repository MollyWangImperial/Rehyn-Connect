import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Kidney transplant page's pieces
// (content/library-conditions/digestion-more.ts). Every sentence was written from wording checked on
// 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do
// not say. The NHS website's kidney transplant page now redirects to NHS Blood and Transplant's patient
// pages (written with the British Transplantation Society), so most of it comes from there, from Kidney Care UK
// and from the NHS. General information only; it never replaces what a person's own kidney or transplant team
// tells them.

const bt = (label: string, path: string): LearnSource => ({ label: `NHS Blood and Transplant: ${label}`, url: `https://www.nhsbt.nhs.uk/organ-transplantation/${path}` });
const kcuk = (label: string, path: string): LearnSource => ({ label: `Kidney Care UK: ${label}`, url: `https://kidneycareuk.org/kidney-disease-information/${path}` });
const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });

const BT_KIDNEY = bt("Kidney", "kidney/");
const BT_WHO = bt("Who is able to have a kidney transplant?", "kidney/is-a-kidney-transplant-right-for-you/who-is-able-to-have-a-kidney-transplant/");
const BT_STEPS = bt("Steps towards a kidney transplant", "kidney/is-a-kidney-transplant-right-for-you/steps-towards-a-kidney-transplant/");
const BT_TESTS = bt("Kidney transplant tests", "kidney/is-a-kidney-transplant-right-for-you/kidney-transplant-tests/");
const BT_ALT = bt("Alternatives to a kidney transplant", "kidney/is-a-kidney-transplant-right-for-you/alternatives-to-a-kidney-transplant/");
const BT_KF = bt("Kidneys and kidney failure", "kidney/is-a-kidney-transplant-right-for-you/kidneys-and-kidney-failure/");
const BT_FAQ = bt("Kidney transplant FAQs", "kidney/is-a-kidney-transplant-right-for-you/kidney-transplant-faqs/");
const BT_BR = bt("Benefits and risks of a kidney transplant", "kidney/benefits-and-risks-of-a-kidney-transplant/");
const BT_BENEFITS = bt("Benefits of a kidney transplant", "kidney/benefits-and-risks-of-a-kidney-transplant/benefits-of-a-kidney-transplant/");
const BT_EARLY = bt("Early risks of a kidney transplant", "kidney/benefits-and-risks-of-a-kidney-transplant/risks-of-a-kidney-transplant/early-risks-of-a-kidney-transplant/");
const BT_LATER = bt("Longer-term risks of a kidney transplant", "kidney/benefits-and-risks-of-a-kidney-transplant/risks-of-a-kidney-transplant/longer-term-risks-of-a-kidney-transplant/");
const BT_REJECTION = bt("Rejection of a transplanted kidney", "kidney/benefits-and-risks-of-a-kidney-transplant/risks-of-a-kidney-transplant/rejection-of-a-transplanted-kidney/");
const BT_INFECTIONS = bt("Infections and kidney transplants", "kidney/benefits-and-risks-of-a-kidney-transplant/risks-of-a-kidney-transplant/infections-and-kidney-transplants/");
const BT_DGF = bt("Delayed graft function", "kidney/benefits-and-risks-of-a-kidney-transplant/risks-of-a-kidney-transplant/delayed-graft-function/");
const BT_LIVING = bt("Living donor kidney transplant", "kidney/receiving-a-kidney/living-donor-kidney-transplant/");
const BT_WHO_DONOR = bt("Who can be a living donor?", "kidney/receiving-a-kidney/living-donor-kidney-transplant/who-can-be-a-living-donor/");
const BT_DECEASED = bt("Deceased donor kidney transplant", "kidney/receiving-a-kidney/deceased-donor-kidney-transplant/");
const BT_DONATED_RISK = bt("Risks from the donated kidney", "kidney/receiving-a-kidney/risks-from-the-donated-kidney/");
const BT_LIST = bt("Going on the transplant waiting list", "kidney/receiving-a-kidney/going-on-the-transplant-waiting-list/");
const BT_WAIT = bt("How long is the wait for a kidney?", "kidney/receiving-a-kidney/how-long-is-the-wait-for-a-kidney/");
const BT_OFFER = bt("How does the offering system work?", "kidney/receiving-a-kidney/how-does-the-offering-system-work/");
const BT_ACCEPT = bt("Accepting or declining an offer for a kidney", "kidney/receiving-a-kidney/accepting-or-declining-an-offer-for-a-kidney/");
const BT_ABOUT_DONOR = bt("About your donor", "kidney/receiving-a-kidney/about-your-donor/");
const BT_BEFORE = bt("Looking after yourself before a transplant", "kidney/receiving-a-kidney/looking-after-yourself-before-a-transplant/");
const BT_ADMIT = bt("Being admitted to the transplant centre", "kidney/at-the-transplant-centre/being-admitted-to-the-kidney-transplant-centre/");
const BT_SURGERY = bt("Kidney transplant surgery", "kidney/at-the-transplant-centre/kidney-transplant-surgery/");
const BT_RECOVERY = bt("Recovery at the transplant centre", "kidney/at-the-transplant-centre/recovery-at-the-transplant-centre/");
const BT_HOME = bt("Taking care of yourself at home", "kidney/at-the-transplant-centre/taking-care-of-yourself-at-home/");
const BT_LIVING_WITH = bt("Living with a kidney transplant", "kidney/living-with-a-kidney-transplant/");
const BT_ACTIVITIES = bt("Getting back to activities after a transplant", "kidney/living-with-a-kidney-transplant/getting-back-to-activities/");
const BT_HEALTHY = bt("Staying healthy after a kidney transplant", "kidney/living-with-a-kidney-transplant/staying-healthy-after-a-kidney-transplant/");
const BT_SUPPORT = bt("Support and emotional wellbeing", "kidney/living-with-a-kidney-transplant/support-and-emotional-wellbeing/");
const BT_MEDS = bt("Kidney transplant medicines", "kidney/living-with-a-kidney-transplant/kidney-transplant-medicines/");
const BT_WARNING = bt("Warning signs after a kidney transplant", "kidney/living-with-a-kidney-transplant/warning-signs-after-a-kidney-transplant/");
const BT_FAMILY = bt("Family planning", "kidney/living-with-a-kidney-transplant/family-planning/");
const BT_WRITE_FAMILY = bt("Writing to your donor's family", "resources/writing-to-your-donors-family/");
const BT_WRITE_LIVING = bt("Writing to your living donor", "resources/writing-to-your-living-donor/");

const KCUK_TX = kcuk("Kidney transplantation", "treatments/kidney-transplantation/");
const KCUK_EXPLAINED = kcuk("Kidney transplantation explained", "treatments/transplantation/");
const KCUK_RECEIVING = kcuk("Receiving a kidney", "treatments/kidney-transplantation/patient-info-receiving-a-kidney/");
const KCUK_FAILURE = kcuk("Kidney transplant failure", "treatments/kidney-transplantation/patient-info-kidney-transplant-failure/");
const KCUK_LIVING = kcuk("What is living kidney donation?", "treatments/kidney-transplantation/patient-info-receiving-a-kidney/what-is-living-kidney-donation/");
const KCUK_PAIRED = kcuk("What is paired/pooled kidney donation?", "treatments/kidney-transplantation/patient-info-receiving-a-kidney/what-is-pairedpooled-kidney-donation/");
const KCUK_LAWS = kcuk("Organ donation laws in the UK", "treatments/kidney-transplantation/patient-info-receiving-a-kidney/organ-donation-laws-in-the-uk/");
const KCUK_GROUPS = kcuk("Kidney transplant support groups", "treatments/kidney-transplantation/patient-info-receiving-a-kidney/kidney-transplant-support-groups/");
const KCUK_MEDS = kcuk("Medicines commonly taken by people after transplant or with an autoimmune disease", "treatments/transplantation/patient-info-medicines-commonly-taken-by-people-after-transplant-or-with-an-autoimmune-disease/");
const KCUK_STENT = kcuk("Having a stent removed after your transplant", "treatments/transplantation/having-a-stent-removed-after-your-transplant/");
const KCUK_VITAMINS = kcuk("Vitamins and supplements with CKD or a kidney transplant", "treatments/medication-for-kidney-disease/vitamins-and-supplements-with-ckd-or-a-kidney-transplant/");
const KCUK_OTC = kcuk("Over-the-counter medicines", "treatments/medication-for-kidney-disease/patient-info-over-the-counter-medicines/");
const KCUK_TRAVEL_MEDS = kcuk("Travel medicines", "treatments/medication-for-kidney-disease/patient-info-travel-medicines/");
const KCUK_ABROAD = kcuk("Your complete guide to travelling abroad as a kidney patient", "living-with-kidney-disease/travelling-with-ckd/your-complete-guide-to-travelling-abroad-as-a-kidney-patient/");
const KCUK_KIDNEYVERSARIES = kcuk("Celebrating kidneyversaries", "treatments/kidney-transplantation/celebrating-kidneyversaries/");

const NHS_FLU = nhs("Flu vaccine", "vaccinations/flu-vaccine/");
const NHS_SHINGLES = nhs("Shingles vaccine", "vaccinations/shingles-vaccine/");
const NHS_PNEUMO = nhs("Pneumococcal vaccine", "vaccinations/pneumococcal-vaccine/");
const NHS_COVID = nhs("COVID-19 vaccine", "vaccinations/covid-19-vaccine/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_SUN = nhs("Sunscreen and sun safety", "live-well/seasonal-health/sunscreen-and-sun-safety/");
const NHS_NMSC_SYMPTOMS = nhs("Symptoms of non-melanoma skin cancer", "conditions/non-melanoma-skin-cancer/symptoms/");
const NHS_NMSC_CAUSES = nhs("Causes of non-melanoma skin cancer", "conditions/non-melanoma-skin-cancer/causes/");

const OD_LIVING: LearnSource = { label: "NHS Organ Donation: How to become a living organ donor", url: "https://www.organdonation.nhs.uk/become-a-living-donor/" };
const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const transplantAnswers: LearnArticle[] = [
  {
    id: "ktx-what-it-is",
    kicker: "Understanding",
    question: "What is a kidney transplant, and what can it do?",
    hook: "A healthy kidney from someone else, doing the work your own kidneys no longer can. For many people, it is the best treatment for kidney failure.",
    short: "A kidney transplant is an operation to place a healthy kidney from a living or deceased donor into a person with kidney failure. For most people who are fit enough, it means a longer, better quality of life and no more dialysis. It does not cure the cause of kidney disease, and anti-rejection medicines are needed afterwards.",
    sections: [
      {
        heading: "A kidney from someone else",
        paragraphs: [
          "A kidney transplant is a treatment for kidney failure. It involves an operation to place a healthy kidney from someone else, the donor, into a person with kidney failure, the recipient.",
          "The new kidney can come from a living donor or from someone who has died, called a deceased donor. Kidneys are the most commonly transplanted organ, and NHS Blood and Transplant says there are 24 kidney transplant centres in the UK.",
        ],
      },
      {
        heading: "Why it may be needed",
        paragraphs: [
          "Kidneys have five main jobs: filtering waste from your blood, balancing the acid in your body, helping to control blood pressure, helping to make red blood cells and activating vitamin D for healthy bones.",
          "Kidney disease is common, but for most people it is mild or moderate. About 1 in 10 people with kidney disease develop kidney failure, when the kidneys no longer work well enough to keep you healthy and dialysis or a transplant is needed to stay alive.",
        ],
      },
      {
        heading: "What it can do",
        paragraphs: [
          "A kidney transplant is usually the best treatment for kidney failure in people who are fit enough for the operation. Most people who have one live longer and enjoy a better quality of life, and a working transplant means no longer needing dialysis.",
          "Most people say they have more energy and feel more able to cope with work and everyday activities. There are far fewer limits on what you can eat and drink than on dialysis, and sex life and fertility are likely to improve.",
        ],
      },
      {
        heading: "What it does not do",
        paragraphs: [
          "A successful transplant is a very good treatment for kidney failure, but it will not cure the underlying cause of your kidney disease. Some kidney diseases can come back in the transplanted kidney, and your kidney team will discuss this with you.",
          "It is a major operation, and afterwards you take strong medicines to lower your immune system. Not every person feels better after a transplant, and there can be serious risks from the surgery and the medicines.",
        ],
      },
      {
        heading: "How long a kidney lasts",
        paragraphs: [
          "On average, a kidney from a living donor lasts 20 to 25 years, and a kidney from a deceased donor 15 to 20 years. This varies a lot with the age of the donor and the patient, and with other medical issues.",
          "Some people have had a transplant that kept working for more than 40 years, and it is possible to have more than one kidney transplant. Kidney Care UK says 44,900 people in the UK have a working kidney transplant.",
        ],
      },
    ],
    helps: [
      "If you have questions about kidney transplantation, speak to your kidney doctor or care team.",
      "Ask your kidney team whether your own kidney disease could come back in a new kidney.",
      "Ask your kidney care team how long a transplant might last for you, as it varies from person to person.",
      "Let your kidney team help you weigh up your treatment options and decide which suits you.",
    ],
    tryThisWeek: [
      "Take your questions to your care team.",
      "Ask if your disease could come back.",
      "Ask how long a transplant might last.",
    ],
    ask: "Could a transplant be right for me, and could my kidney disease come back in a new kidney?",
    interactive: {
      kind: "flip-cards",
      title: "What a transplant changes",
      intro: "Turn each card to see what a working transplant means, and what it does not change.",
      cards: [
        { id: "dialysis", front: "Dialysis", when: "With a working transplant", back: "A successful working kidney transplant means you no longer need dialysis." },
        { id: "energy", front: "Energy", when: "Once you have recovered", back: "Most people say they have more energy and feel more able to cope with work and everyday activities." },
        { id: "food", front: "Food and drink", when: "Compared with dialysis", back: "Far fewer restrictions on what you can eat and drink than on dialysis." },
        { id: "cure", front: "Your original disease", when: "Not a cure", back: "A transplant will not cure the underlying cause, and some kidney diseases can come back in the new kidney." },
        { id: "medicines", front: "Medicines", when: "After the operation", back: "Strong medicines to lower your immune system are needed afterwards." },
      ],
    },
    sources: [BT_KIDNEY, KCUK_EXPLAINED, BT_BR, BT_BENEFITS, BT_KF, BT_FAQ, KCUK_TX],
    quiz: {
      question: "Does a kidney transplant cure the cause of kidney disease?",
      options: [{ text: "No, it treats kidney failure", right: true }, { text: "Yes, always" }, { text: "Only with a living donor" }],
      why: "A successful transplant is a very good treatment for kidney failure, but it will not cure the underlying cause of your kidney disease.",
    },
  },
  {
    id: "ktx-suitability",
    kicker: "Understanding",
    question: "Who can have a kidney transplant, and what does the assessment involve?",
    hook: "Not everyone with kidney failure is fit enough. A series of tests, the work-up, helps you and your team decide.",
    short: "A transplant is usually the best treatment for people with kidney failure who are fit enough for major surgery and able to take anti-rejection medicines every day. Before joining the waiting list, you have tests of your blood group, tissue type, antibodies, heart and lungs. Staying as healthy as possible while you wait helps.",
    sections: [
      {
        heading: "Who it suits",
        paragraphs: [
          "A kidney transplant is usually the best treatment for kidney failure in people who are fit enough for the operation, but the benefits have to outweigh the risks.",
          "To have one, you need long-term kidney disease, to be well enough to cope with major surgery, and to be able to take the daily medicines needed afterwards, including immunosuppressants. The transplant also needs a good chance of success.",
        ],
      },
      {
        heading: "Why it may not be the right choice",
        paragraphs: [
          "A transplant is a major operation lasting 2 to 4 hours, and the surgery can strain your heart or lungs. The powerful immunosuppressant medicines taken afterwards can lead to other serious medical problems.",
          "Common reasons a transplant may not be right include being too ill or frail to cope with the surgery and aftercare, or having recently had cancer, a serious infection, a heart attack or a stroke. If a transplant is too risky, your kidney doctor might advise staying on dialysis or taking medicines to control your symptoms.",
        ],
      },
      {
        heading: "The work-up tests",
        paragraphs: [
          "If your kidney doctor thinks a transplant is possible, you will have a series of tests, sometimes called a work-up. Blood tests check your blood group, your tissue type and your general health, and look for infections such as HIV and hepatitis B and C.",
          "Heart tests might include a heart tracing, called an ECG, and a heart scan, called an echocardiogram. You may have a chest X-ray, and an ultrasound scan of the blood vessels in your groin, where kidneys are usually transplanted. Kidney Care UK says the work-up tests may take several months.",
        ],
      },
      {
        heading: "Antibodies",
        paragraphs: [
          "Antibodies to tissues that are not your own can form after a blood transfusion, a pregnancy or a previous transplant. They raise the risk of some transplants being rejected, and once they form they are very difficult to remove.",
          "High levels of antibodies make it harder to find a suitable donor, which for a deceased donor kidney is likely to mean a longer wait. Some people also see a psychologist or psychiatrist, especially if remembering tablets or dialysis sessions has been a problem, so the team can be sure they will manage their medicines after the transplant.",
        ],
      },
      {
        heading: "Joining the list and getting ready",
        paragraphs: [
          "You can only join the transplant waiting list if you are already having dialysis or will need to start within a year. To be accepted for a deceased donor kidney, your transplant team need to expect you to be alive in five years' time and agree that you are suitable.",
          "While you wait, staying as healthy as possible helps. Keeping active, eating well, losing weight if you need to and stopping smoking all help prepare your body for surgery.",
        ],
      },
    ],
    helps: [
      "Speak to your kidney team to find out what treatment is best for you.",
      "Keep active: moderate exercise such as walking, cycling or swimming can boost your energy and help prepare your body for surgery.",
      "If you smoke, stop as early as you can before a transplant, with help from your kidney team or GP.",
      "If tests show you are not currently healthy enough, ask your kidney team whether there is anything you can do to improve your health.",
      "Take all your medicines and do not miss any dialysis sessions while you wait.",
    ],
    tryThisWeek: [
      "Ask which treatment suits you.",
      "Go for a walk, swim or cycle.",
      "Get help to stop smoking.",
    ],
    ask: "Am I suitable for a transplant, and is there anything I can do to improve my chances?",
    interactive: {
      kind: "flip-cards",
      title: "The work-up, test by test",
      intro: "Turn each card to see what the test is for.",
      cards: [
        { id: "blood-group", front: "Blood group", when: "A simple blood test", back: "Needed to find a donor with a compatible blood group. There are four: A, B, AB and O." },
        { id: "tissue-type", front: "Tissue type", when: "Also called HLA typing", back: "Lets the team check how well matched you are with a donated kidney." },
        { id: "antibodies", front: "Antibody tests", when: "After transfusion, pregnancy, transplant", back: "High levels of antibodies make it harder to find a suitable donor and can mean a longer wait." },
        { id: "heart", front: "Heart tests", when: "ECG, echo or a stress test", back: "Check that your heart is healthy enough for major surgery." },
        { id: "groin", front: "Groin ultrasound", when: "A scan of the blood vessels", back: "Kidneys are usually transplanted in the groin, so the arteries and veins there are checked." },
      ],
    },
    sources: [BT_WHO, BT_TESTS, BT_STEPS, KCUK_EXPLAINED, KCUK_RECEIVING, BT_BEFORE, BT_ALT, BT_LIST],
    quiz: {
      question: "What happens if your kidney doctor thinks a transplant is possible?",
      options: [{ text: "You have a series of tests", right: true }, { text: "You go straight on the list" }, { text: "You stop dialysis" }],
      why: "If your kidney doctor thinks a transplant is possible, you will have a series of tests, sometimes called a work-up.",
    },
  },
  {
    id: "ktx-donors",
    kicker: "Understanding",
    question: "Living or deceased donor: what is the difference?",
    hook: "A kidney from someone you know can often come sooner and last longer. Most still come from people who have died.",
    short: "A kidney can come from a living donor, often a relative, partner or friend, or from someone who has died. Kidneys from living donors usually last longer, can often be arranged in 3 to 6 months and almost always work straight away. If a willing donor is not a match, a national sharing scheme can swap kidneys between pairs.",
    sections: [
      {
        heading: "Two kinds of donor",
        paragraphs: [
          "A living donor is someone who agrees to give you one of their kidneys while they are alive. This is possible because nearly everyone has two kidneys but can lead a normal, healthy life with just one.",
          "Deceased donation, from someone who has recently died, is the most common type. On average, about 70 in 100 kidney transplants are from deceased donors and about 30 in 100 from living donors.",
        ],
      },
      {
        heading: "Why a living donor helps",
        paragraphs: [
          "On average, kidneys from living donors last longer, 20 to 25 years compared with 15 to 20 years, and there is usually less of a wait. Once a donor comes forward, tests and arranging the operation usually take 3 to 6 months.",
          "A living donor kidney almost always works straight away, as it comes from someone fit and well, and the operation can be planned, usually during the day. If your kidneys are failing but you are not yet on dialysis, this makes a transplant before dialysis more likely.",
        ],
      },
      {
        heading: "Who can be a living donor",
        paragraphs: [
          "Most living donors are close relatives, partners or good friends. They do not need to be the same age, blood group or tissue type as you, but they need to be 18 or older and in good health. Each year, more than 1,000 people become living organ donors, and a kidney is the organ they most often give.",
          "Your team cannot contact possible donors for you, so you would need to talk to family and friends and ask whether they might be interested. A donor has tests of their heart, lungs and kidney function, and will not be allowed to donate if there is a serious risk to their health.",
        ],
      },
      {
        heading: "If your donor is not a match",
        paragraphs: [
          "If a willing donor is not a good match, you may be able to join the UK Living Kidney Sharing Scheme together. In paired or pooled donation, two or three donor and recipient pairs swap kidneys, so each person has a better chance of a successful transplant.",
          "NHS Blood and Transplant runs a matching run four times a year. Some people also donate a kidney to someone they do not know, which is called altruistic donation.",
        ],
      },
      {
        heading: "Deceased donation",
        paragraphs: [
          "To receive a kidney from a deceased donor, you join the national transplant waiting list. Kidneys from deceased donors usually carry more risk, as it is harder to check the donor's health fully.",
          "All donated kidneys carry some risk, but this is generally much lower than the risk of long-term dialysis. Organ donation law in each UK country now follows an opt out system, though families are still asked about the person's views.",
        ],
      },
    ],
    helps: [
      "If you would like a living donor, talk to family and friends and ask if they are interested in giving you a kidney; your transplant team can advise on ways to do this.",
      "If someone agrees, tell your transplant team, who will give you the details of who your potential donor needs to contact.",
      "Discuss any plan for a social media appeal with the living donor transplant team before posting anything.",
      "If your donor is not a suitable match, ask about the UK Living Kidney Sharing Scheme.",
      "Register your own decision on the NHS Organ Donor Register, and tell your family your wishes.",
    ],
    tryThisWeek: [
      "Talk to family and friends.",
      "Ask about the sharing scheme.",
      "Check before a social media appeal.",
    ],
    ask: "Could a family member or friend be a living donor for me, and what would happen next?",
    interactive: {
      kind: "flip-cards",
      title: "The routes to a new kidney",
      intro: "Turn each card to see how each kind of donation works.",
      cards: [
        { id: "living", front: "Living donor kidney", when: "Lasts 20 to 25 years on average", back: "Usually less of a wait, often 3 to 6 months, and it almost always works straight away." },
        { id: "deceased", front: "Deceased donor kidney", when: "Lasts 15 to 20 years on average", back: "An average wait of 2 to 3 years on the national list. Surgery often takes place at night." },
        { id: "paired", front: "Paired or pooled donation", when: "If your donor is not a match", back: "Two or three donor and recipient pairs swap kidneys through the UK Living Kidney Sharing Scheme." },
        { id: "altruistic", front: "Altruistic donation", when: "From someone you do not know", back: "A person gives a kidney to a stranger, either to someone specific or to anyone on the waiting list." },
      ],
    },
    sources: [BT_LIVING, BT_DECEASED, BT_WHO_DONOR, KCUK_LIVING, KCUK_PAIRED, OD_LIVING, BT_DONATED_RISK, KCUK_LAWS],
    quiz: {
      question: "Does a living donor need to have the same blood group as you?",
      options: [{ text: "No", right: true }, { text: "Yes, always" }, { text: "Only if they are a relative" }],
      why: "Most living donors are close relatives, partners or good friends. They do not need to be the same age, blood group or tissue type as you.",
    },
  },
  {
    id: "ktx-waiting",
    kicker: "Understanding",
    question: "How does the waiting list work, and what happens when the call comes?",
    hook: "Not a queue but a match. The call can come at any hour, so being ready matters.",
    short: "The national waiting list matches each donated kidney to the patient most likely to benefit, using blood group, tissue type, age, time waiting and other factors. The average wait for a deceased donor kidney is 2 to 3 years. Once you are active on the list, keep your phone on: if your team cannot reach you within 45 minutes, they may have to turn an offer down.",
    sections: [
      {
        heading: "Not a queue",
        paragraphs: [
          "The national transplant waiting list is a list of everyone in the UK waiting for an organ from a deceased donor. It is not a queue where the first person gets the next kidney, but a matching system.",
          "Patients are prioritised by how well their blood group, tissue type and age match the donor, how long they have waited or been on dialysis, how far their hospital is from the donor's, and how hard it would be for them to get another offer.",
        ],
      },
      {
        heading: "How long the wait can be",
        paragraphs: [
          "The average wait for a deceased donor kidney in the UK is 2 to 3 years. Some people are called within a few days of joining the list, while others wait many years.",
          "You are likely to wait less with blood group AB, a common tissue type or fewer antibodies, and children under 18 wait less on average. People from Black, Asian and minority ethnic communities tend to wait longer, partly because matching is better when donor and recipient share an ethnic background and fewer donors come from these communities.",
        ],
      },
      {
        heading: "Staying ready",
        paragraphs: [
          "Once you are active on the list, you need to be contactable day and night, so keep your phone switched on. If your team cannot reach you within 45 minutes of an offer, they may have to turn it down.",
          "Tell your transplant team if you become unwell, are admitted to hospital, change your contact details or need dialysis outside the UK. You may be put on hold for a while, and Kidney Care UK says you do not lose any time points while you are off the list.",
        ],
      },
      {
        heading: "When the phone rings",
        paragraphs: [
          "Your transplant team checks the donor information first, and calls you only if they think the kidney is suitable. They may share some medical information about the donor and talk through the risks and benefits.",
          "It is up to you and your team whether to accept. If you turn down an offer for a reasonable reason, you stay active on the list and do not go to the back of a queue. There may be an hour or less to decide.",
        ],
      },
      {
        heading: "At the transplant centre",
        paragraphs: [
          "You will be told when to stop eating and drinking, and you will have tests, including a cross-match, which checks whether your blood has antibodies that would attack the donor kidney. You may need dialysis before the operation.",
          "Sometimes the operation cannot go ahead, even after you have arrived, if tests show a new health problem or the kidney turns out to be unusable.",
        ],
      },
    ],
    helps: [
      "Keep your phone switched on, and make sure your team has all your phone numbers, including your next of kin's.",
      "Tell your transplant team straight away if you become unwell or are admitted to hospital.",
      "Talk to your kidney team before you travel, so they can take you off the list until you return.",
      "Let your transplant team know whether you want to hear about every offer, or only those they think are reasonably good for you.",
      "If waiting feels very stressful, contact your transplant team: social workers and psychologists can offer advice and support.",
      "When you arrive at the centre, tell the team about any infections, surgery or blood transfusions in the previous three months.",
    ],
    tryThisWeek: [
      "Keep your phone on and numbers up to date.",
      "Say whether you want every offer.",
      "Ask for support if waiting is stressful.",
    ],
    ask: "How long might I wait, and how will you contact me if a kidney is offered?",
    interactive: {
      kind: "scenarios",
      title: "Life on the list",
      scenarios: [
        {
          id: "phone",
          situation: "You are active on the list and going out for the evening.",
          options: [{ text: "Keep your phone on", best: true }, { text: "Switch it off for a few hours" }],
          why: "If your team cannot reach you within 45 minutes of an offer, they may have to turn it down.",
        },
        {
          id: "holiday",
          situation: "You are planning a holiday abroad.",
          options: [{ text: "Talk to your kidney team first", best: true }, { text: "Go, and tell them afterwards" }],
          why: "Discuss travel plans with your kidney team so they can take you off the list until you return. You do not lose any time points.",
        },
        {
          id: "unwell",
          situation: "You have a bad chest infection.",
          options: [{ text: "Tell your transplant team", best: true }, { text: "Say nothing to keep your place" }],
          why: "Tell your transplant team straight away if you are unwell. Your place is put on hold only until you are fit enough again.",
        },
        {
          id: "decline",
          situation: "You are offered a kidney that you feel carries too high a risk.",
          options: [{ text: "Decline if it is not right for you", best: true }, { text: "Accept, or lose your place" }],
          why: "If you turn down an offer for a reasonable reason, you stay active on the list. The transplant centre will not force you to accept.",
        },
      ],
    },
    sources: [BT_LIST, BT_WAIT, BT_OFFER, BT_ACCEPT, KCUK_RECEIVING, BT_ADMIT, KCUK_EXPLAINED, KCUK_ABROAD],
    quiz: {
      question: "How does the kidney waiting list decide who is offered a kidney?",
      options: [{ text: "By matching kidneys to patients", right: true }, { text: "First come, first served" }, { text: "By age alone" }],
      why: "It is not a queue where the first person gets the next kidney, but a matching system.",
    },
  },
  {
    id: "ktx-operation",
    kicker: "Treatment",
    question: "What happens in the operation and the first weeks?",
    hook: "Two to four hours asleep, up in a chair within hours, and home in days to a week or so. Most new kidneys start working within a week.",
    short: "The operation takes 2 to 4 hours under a general anaesthetic. The new kidney is usually placed in the groin and joined to blood vessels and your bladder, and your own kidneys are usually left in place. Most transplanted kidneys start working within a week, and most people go home after a few days to a week or more.",
    sections: [
      {
        heading: "The operation",
        paragraphs: [
          "Kidney transplant surgery takes 2 to 4 hours under a general anaesthetic, so you are asleep throughout. Most of the time, a single kidney is placed in the right or left groin, in the lower part of your tummy.",
          "Your own kidneys are usually left where they are. The donor kidney's artery and vein are joined to blood vessels in your groin, and its ureter, the tube that carries urine, is joined to your bladder.",
        ],
      },
      {
        heading: "Tubes and the stent",
        paragraphs: [
          "While you are asleep, thin tubes are placed in your arms, sometimes your neck, and your bladder, for fluids, medicines and draining urine. They are removed as soon as it is safe, usually within the first 1 to 3 days.",
          "A short soft plastic tube called a stent is placed inside the ureter to help the join heal. It is removed around four to six weeks after the transplant, in a quick outpatient procedure that takes between 30 seconds and two minutes and can be a little uncomfortable.",
        ],
      },
      {
        heading: "The first days",
        paragraphs: [
          "You will feel sore for a few days, and good pain control helps you cough, breathe deeply and move, which lowers the risk of blood clots and chest infections. Tell the team if you are finding this difficult.",
          "Usually within 6 to 12 hours, you are helped to sit out in a chair and start short walks. You can start drinking soon after you wake up, and eat light meals, little and often, as soon as you feel able.",
        ],
      },
      {
        heading: "When the kidney starts working",
        paragraphs: [
          "Most transplanted kidneys start working within a week. Kidneys from living donors usually start more quickly, while a kidney from a deceased donor can be slow to wake up, which is called delayed graft function.",
          "Delayed graft function is very common, affecting between 20 and 60 in every 100 kidneys from deceased donors. Most do eventually start working, though it may take days or weeks, and you may need dialysis meanwhile.",
        ],
      },
      {
        heading: "Going home",
        paragraphs: [
          "Hospital stays vary, from as little as 3 to 4 days to over a week. After a living donor transplant the usual stay is 4 to 6 days, and after a deceased donor transplant most people stay 6 to 10 days.",
          "At home, balance regular short walks with rest, keep your wound clean and dry, and avoid strenuous activities that strain your stomach muscles for 4 to 6 weeks, including lifting heavy shopping. Stay out of swimming pools until your wound has completely healed.",
        ],
      },
    ],
    helps: [
      "Let the transplant team know if pain is stopping you coughing, breathing deeply or moving around.",
      "Get up and moving as early as you can, to lower the risk of blood clots and chest infections.",
      "Avoid strenuous activities that strain your stomach muscles for 4 to 6 weeks, including lifting heavy shopping bags.",
      "Check with your transplant team before taking any over-the-counter medicines.",
      "Ask whether your centre follows an Enhanced Recovery After Surgery pathway, to help you play a part in your own recovery.",
      "Have someone at home with you for the first 24 hours after you leave hospital.",
    ],
    tryThisWeek: [
      "Tell the team if pain stops you moving.",
      "Get up and moving early.",
      "Arrange someone at home for 24 hours.",
    ],
    ask: "How long am I likely to stay in hospital, and when will my stent and tubes come out?",
    interactive: {
      kind: "timeline",
      title: "From theatre to home",
      steps: [
        { id: "op", when: "The operation", title: "2 to 4 hours asleep", points: ["A single kidney is usually placed in the right or left groin.", "A stent is placed in the ureter to help the join heal."] },
        { id: "hours", when: "6 to 12 hours", title: "Up and sitting out", points: ["You are helped to sit in a chair and start short walks.", "You can start drinking soon after you wake up."] },
        { id: "days", when: "First 1 to 3 days", title: "Tubes come out", points: ["Plastic tubes are removed as soon as it is safe.", "You may feel sore for a few days."] },
        { id: "week", when: "Within a week", title: "The kidney gets going", points: ["Most transplanted kidneys start working within a week.", "A sleepy kidney may need dialysis while it wakes up."] },
        { id: "home", when: "3 days to over a week", title: "Going home", points: ["Clinic visits at least once or twice a week to start with.", "Keep your wound clean and dry."] },
        { id: "stent", when: "4 to 6 weeks", title: "Stent out, more activity", points: ["The stent is removed in a quick outpatient procedure.", "Strenuous activity is avoided until around now."] },
      ],
    },
    sources: [BT_SURGERY, BT_RECOVERY, KCUK_EXPLAINED, BT_HOME, BT_FAQ, BT_DGF, KCUK_STENT, BT_EARLY],
    quiz: {
      question: "Where is a transplanted kidney usually placed?",
      options: [{ text: "In the right or left groin", right: true }, { text: "Where the old kidney was" }, { text: "Under the ribs at the back" }],
      why: "Most of the time, a single kidney is placed in the right or left groin, in the lower part of your tummy.",
    },
  },
  {
    id: "ktx-medicines",
    kicker: "Treatment",
    question: "Why are anti-rejection medicines needed for life?",
    hook: "They keep your immune system from attacking the new kidney. Taking them exactly as prescribed protects it.",
    short: "Everyone who has a kidney transplant takes immunosuppressant medicines, such as tacrolimus, mycophenolate and prednisolone, to stop the body rejecting the new kidney. Doses usually reduce over time, but some are needed for as long as the transplant works. Take them exactly as prescribed, tell your team about missed doses or side effects, and check before taking anything else.",
    sections: [
      {
        heading: "Why they are needed",
        paragraphs: [
          "Immunosuppressant medicines stop your immune system seeing the new kidney as foreign and rejecting it, while keeping it active enough to fight infections. Everyone who has a kidney transplant needs them.",
          "Doses usually reduce over time, but some will be needed for the lifetime of the transplant. Different transplant centres use different medicines, and yours will tell you which you take and the most important side effects.",
        ],
      },
      {
        heading: "The common ones",
        paragraphs: [
          "Tacrolimus is taken once or twice a day, depending on the brand, at the same time each day. Its side effects include tremors, kidney problems and raised blood sugar, and blood tests check that the dose is right.",
          "Mycophenolate can cause sickness, diarrhoea and fewer white blood cells. Prednisolone, a steroid, can cause high blood pressure, a bigger appetite, raised blood sugar, and thinning of the bones and skin.",
        ],
      },
      {
        heading: "Taking them well",
        paragraphs: [
          "Take your medicines exactly as your transplant team prescribed them, and tell the team if you miss a dose. Kidney Care UK says missing your tablets for 24 hours can cause rejection, and you may lose the kidney.",
          "If side effects worry you or you find it hard to remember your tablets, tell the team, as they may be able to help, for example by changing the timing. Do not stop your anti-rejection medicines.",
        ],
      },
      {
        heading: "Blood tests and interactions",
        paragraphs: [
          "On the morning of a blood test for tacrolimus or ciclosporin levels, wait to take your dose until after the test. Some medicines, such as the antibiotics erythromycin and clarithromycin, and the herbal remedy St John's wort, can cause problems with these drugs.",
          "Avoid grapefruit and pomegranate juice, as they can affect drug levels. Herbal supplements, including CBD, can interact with tacrolimus and raise the chance of rejection, so check with your kidney team before taking any.",
        ],
      },
      {
        heading: "Other medicines",
        paragraphs: [
          "You will also take antibiotic and antiviral medicines to lower the risk of infection, which usually stop between 3 and 12 months after the transplant. Some people need medicines for blood pressure, blood sugar or blood clots, or to protect the stomach.",
          "Anti-inflammatory painkillers such as ibuprofen and aspirin should be avoided with a transplant, as they can harm the kidneys. Tell any doctor or pharmacist about your transplant before you buy medicines.",
        ],
      },
    ],
    helps: [
      "Take your medicines exactly as prescribed, and tell your transplant team if you miss a dose.",
      "Tell the team if side effects worry you or remembering tablets is hard; they may be able to adjust the timing.",
      "On the day of a blood test, wait until after the test to take your morning dose of tacrolimus or ciclosporin.",
      "Avoid grapefruit, pomegranate juice and St John's wort.",
      "Check with your kidney team before taking any vitamins, supplements or herbal medicines.",
      "Tell any doctor or pharmacist about your kidney condition and your medicines before buying anything over the counter.",
    ],
    tryThisWeek: [
      "Tell the team about any missed dose.",
      "Skip grapefruit and pomegranate juice.",
      "Check supplements with your team.",
    ],
    ask: "Which of my medicines are for life, and what should I do if I miss a dose?",
    interactive: {
      kind: "flip-cards",
      title: "Your transplant medicines",
      intro: "Turn each card to see what the medicine does and what to look out for.",
      cards: [
        { id: "tacrolimus", front: "Tacrolimus", when: "Once or twice a day", back: "Helps prevent rejection. Side effects include tremors, kidney problems and raised blood sugar. Blood tests check the level." },
        { id: "mycophenolate", front: "Mycophenolate", when: "Usually twice a day", back: "Helps prevent rejection. It may make you feel sick or lower blood cell numbers. Contraception is advised while taking it." },
        { id: "prednisolone", front: "Prednisolone", when: "Best after breakfast", back: "A steroid. It can cause indigestion, weight gain, mood changes and thinning of the bones and skin." },
        { id: "anti-infection", front: "Antibiotics and antivirals", when: "For the first months", back: "Lower the risk of infection. They usually stop between 3 and 12 months after a transplant." },
        { id: "stomach", front: "Stomach protection", when: "Alongside the others", back: "Some immunosuppressants and blood thinners can irritate the stomach, so its lining is protected." },
      ],
    },
    sources: [BT_MEDS, KCUK_MEDS, KCUK_EXPLAINED, BT_REJECTION, KCUK_OTC, KCUK_VITAMINS, BT_LATER],
    quiz: {
      question: "What can happen if anti-rejection tablets are missed for 24 hours?",
      options: [{ text: "It can cause rejection", right: true }, { text: "Nothing, if you feel well" }, { text: "Only some tiredness" }],
      why: "Kidney Care UK says missing your tablets for 24 hours can cause rejection, and you may lose the kidney.",
    },
  },
  {
    id: "ktx-rejection",
    kicker: "Treatment",
    question: "What is rejection, and how is it spotted?",
    hook: "Your immune system can start to attack the new kidney. Found early, usually through routine blood tests, it can usually be treated.",
    short: "Rejection is when the immune system attacks the transplanted kidney. It happens in 10 to 15 in every 100 people in the first year, and the risk is highest in the first 3 to 6 months. It is usually found through blood tests at clinic and, if picked up early, can usually be treated successfully.",
    sections: [
      {
        heading: "What rejection is",
        paragraphs: [
          "Rejection is when your immune system recognises the new kidney as coming from someone else and starts to attack it. Immunosuppressant medicines lower the immune response to help stop this.",
          "Rejection happens in 10 to 15 in every 100 people during the first year after a kidney transplant. It can still happen even if you take all your medicines, but the risk is higher if you do not take them as prescribed.",
        ],
      },
      {
        heading: "When the risk is highest",
        paragraphs: [
          "The risk of rejection is highest in the first 3 to 6 months. After that, your immune system is less likely to recognise the kidney as coming from another person.",
          "Some people have a higher risk, such as those who have had a previous transplant, a blood transfusion or a pregnancy, which can leave antibodies in the blood.",
        ],
      },
      {
        heading: "How it is found",
        paragraphs: [
          "Early signs of rejection are often picked up through blood tests at regular clinic visits, which is why every appointment matters. Rejection is suspected when the kidney starts to work less well.",
          "To confirm it, a tiny sample of the kidney is usually taken with a needle, called a biopsy, using local anaesthetic to numb the skin. Bleeding and damage to the transplant are rare risks.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Rejection is usually mild and can be treated with different medicines. If it is picked up early, it can usually be treated successfully, and severe rejection is rare.",
          "The most common type, cellular rejection, can usually be treated with steroids given into a vein. Rejection caused by antibodies is less common but more serious, and is treated in hospital.",
        ],
      },
      {
        heading: "Signs to report",
        paragraphs: [
          "NHS Blood and Transplant advises contacting your transplant team if you have a temperature of 38C or above, feel hot and shivery, have a severe headache, diarrhoea or vomiting, shortness of breath or new chest pain, feel tired or generally rough, or pass little or no urine.",
          "If a transplant starts to fail, some people notice the symptoms of kidney failure again, such as swollen ankles, tiredness or feeling sick, or pain or tenderness over the transplant kidney. Others have no symptoms, and the team spots it in blood and urine tests.",
        ],
      },
    ],
    helps: [
      "Go to all your clinic appointments, as rejection is often picked up early through blood tests.",
      "Take all your tablets exactly as they are prescribed.",
      "If anti-rejection medicines give you side effects, tell your transplant team so they can talk to you about other options, rather than stopping them.",
      "Contact your transplant team if you notice any warning signs, such as a temperature of 38C or above or little or no urine.",
      "Ask your kidney team to repeat or explain anything you do not understand.",
    ],
    tryThisWeek: [
      "Keep every clinic appointment.",
      "Take tablets exactly as prescribed.",
      "Contact your team about warning signs.",
    ],
    ask: "Which signs of rejection or infection should I report, and who do I call out of hours?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your transplant team",
      intro: "Tick any you have noticed. NHS Blood and Transplant says to contact your transplant team about these.",
      signs: [
        "A temperature of 38C or above",
        "Feeling hot and shivery",
        "A severe headache",
        "Diarrhoea",
        "Vomiting",
        "Shortness of breath",
        "New chest pain",
        "Feeling generally rough",
        "Little or no urine",
        "Pain over the transplant kidney",
      ],
      after: "Contact your transplant team about any you have ticked, and keep every clinic appointment.",
      copyHeading: "Signs I have noticed",
    },
    sources: [BT_REJECTION, BT_EARLY, BT_LATER, BT_WARNING, KCUK_FAILURE, KCUK_RECEIVING],
    quiz: {
      question: "How are early signs of rejection most often picked up?",
      options: [{ text: "Blood tests at clinic visits", right: true }, { text: "A skin rash" }, { text: "Feeling hungry" }],
      why: "Early signs of rejection are often picked up through blood tests at regular clinic visits, which is why every appointment matters.",
    },
  },
  {
    id: "ktx-clinic",
    kicker: "Treatment",
    question: "How often are clinic visits and blood tests, and why do they matter?",
    hook: "Once or twice a week at first, then every few months. Each visit is how problems are caught early.",
    short: "After a transplant, most people are seen at the clinic at least once or twice a week at first, with blood tests to check the kidney and medicines. Visits become less frequent as the kidney settles, and after a year most people go every 3 to 4 months. Many problems, including early rejection, are first found through these tests.",
    sections: [
      {
        heading: "Often at first",
        paragraphs: [
          "Before you leave hospital, an appointment is made at the kidney transplant clinic. To start with, most people are seen at least once or twice a week, and hospital transport can be arranged if needed.",
          "At each visit you have blood tests to check that the new kidney is working, and your medicines are checked.",
        ],
      },
      {
        heading: "Less often over time",
        paragraphs: [
          "Over the following weeks and months, your kidney function is likely to become more stable and visits become less frequent. After the first 3 to 6 months, the risk of rejection is lower and your medicines usually reduce.",
          "After a year, if there are no serious problems, most people only need to go to the clinic once every 3 to 4 months.",
        ],
      },
      {
        heading: "Why every visit counts",
        paragraphs: [
          "Problems are often first found through blood tests at clinic, and early signs of rejection are often picked up this way. This is why it is so important to go to all your appointments.",
          "Your team watches your blood and urine results over months and years. If a transplant starts to fail, the blood tests of kidney function may get worse over days, weeks or months, sometimes before you notice any symptoms.",
        ],
      },
      {
        heading: "Drug levels and side effects",
        paragraphs: [
          "Some anti-rejection medicines, such as tacrolimus, ciclosporin and sirolimus, need their blood levels measured regularly. On the day of a blood test, wait to take your morning dose of tacrolimus or ciclosporin until after the test.",
          "These medicines also need regular checks for side effects, such as a fall in the number of blood cells. Report any unexpected bruising, bleeding or rashes to your doctor or kidney team.",
        ],
      },
      {
        heading: "Screening and support",
        paragraphs: [
          "The risk of cancer is higher after a kidney transplant, so NHS Blood and Transplant asks people to attend NHS screening when invited, such as for breast, cervical and bowel cancer, and abdominal aortic aneurysms.",
          "Taking notes in appointments, or bringing a family member or friend, can help you remember what the team says. Your transplant team will make sure you know who to contact with questions, day or night.",
        ],
      },
    ],
    helps: [
      "Go to all your clinic appointments, so your transplant team can monitor your progress.",
      "Ask about hospital transport if getting to the clinic is hard.",
      "Wait until after your blood test to take your morning dose of tacrolimus or ciclosporin.",
      "Report any unexpected bruising, bleeding or rashes to your doctor or kidney team.",
      "Take notes in appointments, or bring a family member or friend with you.",
      "In the early months, plan any UK holiday around your clinic appointments.",
    ],
    tryThisWeek: [
      "Keep every clinic appointment.",
      "Take your dose after the blood test.",
      "Bring someone to appointments.",
    ],
    ask: "Which results do you watch most closely, and how will my clinic visits change over the first year?",
    interactive: {
      kind: "timeline",
      title: "How often you go to clinic",
      steps: [
        { id: "first", when: "The first weeks", title: "Once or twice a week", points: ["Blood tests check the new kidney is working.", "Your medicines are checked."] },
        { id: "stent", when: "A few weeks in", title: "Stent removed", points: ["The stent placed in your ureter is taken out."] },
        { id: "months", when: "After 3 to 6 months", title: "Fewer visits", points: ["The risk of rejection is lower.", "Your medicines usually reduce."] },
        { id: "year", when: "After a year", title: "Every 3 to 4 months", points: ["If there are no serious problems.", "Keep going to NHS screening when invited."] },
      ],
    },
    sources: [BT_RECOVERY, KCUK_EXPLAINED, BT_FAQ, BT_WARNING, KCUK_MEDS, BT_LIVING_WITH, KCUK_FAILURE, BT_ACTIVITIES],
    quiz: {
      question: "After a year with no serious problems, how often do most people go to the clinic?",
      options: [{ text: "Every 3 to 4 months", right: true }, { text: "Every week" }, { text: "Never again" }],
      why: "After a year, if there are no serious problems, most people only need to go to the clinic once every 3 to 4 months.",
    },
  },
  {
    id: "ktx-infections",
    kicker: "Living well",
    question: "How can I avoid infections after a transplant?",
    hook: "The medicines that protect your kidney also weaken your defences. Vaccines, quick reporting and knowing the danger signs help.",
    short: "Infections are very common after a transplant, because anti-rejection medicines lower the immune system. Most are chest or urine infections that antibiotics treat well. A yearly flu jab is important, live vaccines are avoided, and a temperature of 38C or above is a reason to contact your transplant team. Signs of sepsis need 999 or A&E.",
    sections: [
      {
        heading: "Why infections are common",
        paragraphs: [
          "Infections are very common after a transplant, partly because the immunosuppressant medicines that protect the kidney also lower your immune system's ability to fight infection.",
          "Chest and urine infections are the most common, and most can be treated fully with antibiotics. Serious infections are rare.",
        ],
      },
      {
        heading: "Vaccines",
        paragraphs: [
          "As the risk of infection is higher, a flu jab every year is important. People with a transplant are advised not to have live vaccines, but the flu jab is not a live vaccine, and the NHS says the injected flu vaccines cannot give you flu.",
          "The NHS offers the shingles vaccine to people aged 18 and over with a severely weakened immune system, which can include some people who have recently had an organ transplant. People who have had an organ transplant may also be eligible for the COVID-19 vaccine, and a weakened immune system due to treatment is a reason to have the pneumococcal vaccine.",
        ],
      },
      {
        heading: "Vaccines to avoid",
        paragraphs: [
          "Kidney Care UK lists live vaccines that are not safe on immunosuppressants, including yellow fever, oral typhoid, BCG, chickenpox, and measles, mumps and rubella. The flu injection, pneumococcal, hepatitis A and B, tetanus and the typhoid injection are among those that are safe.",
          "If anyone close to you catches chickenpox, even if you have had it yourself, tell your doctor straight away, but do not stop taking prednisolone.",
        ],
      },
      {
        heading: "Signs to act on",
        paragraphs: [
          "Contact your transplant team if you have a temperature of 38C or above, feel hot and shivery, have diarrhoea or vomiting, are short of breath, or feel generally rough. Infections may be worse than normal on these medicines, so report any signs of infection.",
          "Sepsis is a serious reaction to an infection that needs urgent treatment in hospital, and taking immunosuppressants raises the chance of getting it. Call 999 or go to A&E if an adult is breathing very fast, is confused or has slurred speech, has blue, pale or blotchy skin, or has a rash that does not fade when pressed. Do not drive to A&E: ask someone to drive you or call 999.",
        ],
      },
      {
        heading: "A virus called CMV",
        paragraphs: [
          "CMV is a virus that infects more than half of healthy people and then stays dormant. It can be passed on with a donor kidney or become active after a transplant, and is usually fairly straightforward to diagnose, treat and monitor.",
          "Medicines to prevent infection, such as valganciclovir for CMV and co-trimoxazole for a type of pneumonia, can usually be stopped 3 to 6 months after a transplant, so ask your transplant doctor.",
        ],
      },
    ],
    helps: [
      "Have a flu jab every year.",
      "Ask your kidney team or GP which vaccines are safe for you, and avoid live vaccines.",
      "Ask your GP or care team whether you are eligible for the shingles vaccine.",
      "Contact your transplant team if you have a temperature of 38C or above or feel hot and shivery.",
      "Tell your doctor straight away if someone close to you catches chickenpox, but keep taking prednisolone.",
      "Call 999 or go to A&E if you think you might have sepsis, and do not drive yourself.",
    ],
    tryThisWeek: [
      "Book your yearly flu jab.",
      "Ask which vaccines are safe.",
      "Ask about the shingles vaccine.",
    ],
    ask: "Which vaccines do I need on my medicines, and which should I avoid?",
    interactive: {
      kind: "scenarios",
      title: "Keeping infections at bay",
      scenarios: [
        {
          id: "flu",
          situation: "It is autumn and you are offered the flu jab.",
          options: [{ text: "Have it: it is not a live vaccine", best: true }, { text: "Skip it: no vaccines allowed" }],
          why: "As the risk of infection is higher after a transplant, a flu jab every year is important. The flu jab is not a live vaccine.",
        },
        {
          id: "yellow-fever",
          situation: "A travel clinic suggests a yellow fever vaccine.",
          options: [{ text: "Check: it is a live vaccine", best: true }, { text: "Have it like anyone else" }],
          why: "Kidney Care UK lists yellow fever as a live vaccine that is not safe if you take immunosuppressants after a transplant.",
        },
        {
          id: "fever",
          situation: "You have a temperature of 38C and feel shivery.",
          options: [{ text: "Contact your transplant team", best: true }, { text: "Wait a few days to see" }],
          why: "NHS Blood and Transplant says to contact your transplant team if you have a temperature of 38C or above or feel hot and shivery.",
        },
        {
          id: "sepsis",
          situation: "You are confused, breathing very fast and your skin looks blotchy.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Book a routine GP appointment" }],
          why: "The NHS says to call 999 or go to A&E if an adult is confused, breathing very fast or has blotchy skin. Do not drive yourself.",
        },
        {
          id: "chickenpox",
          situation: "Your grandchild has just come down with chickenpox.",
          options: [{ text: "Tell your doctor straight away", best: true }, { text: "Stop your prednisolone" }],
          why: "Tell your doctor immediately, even if you have had chickenpox yourself, but do not stop taking your prednisolone.",
        },
      ],
    },
    sources: [BT_INFECTIONS, BT_LIVING_WITH, KCUK_TRAVEL_MEDS, NHS_FLU, NHS_SHINGLES, NHS_COVID, NHS_SEPSIS, BT_WARNING, BT_LATER, KCUK_MEDS, NHS_PNEUMO],
    quiz: {
      question: "Is the flu jab suitable after a kidney transplant?",
      options: [{ text: "Yes, it is not a live vaccine", right: true }, { text: "No, all vaccines are unsafe" }, { text: "Only as a nasal spray" }],
      why: "People with a transplant are advised not to have live vaccines, but the flu jab is not a live vaccine.",
    },
  },
  {
    id: "ktx-skin-cancer",
    kicker: "Living well",
    question: "Why do sun protection and cancer checks matter after a transplant?",
    hook: "The medicines that protect your kidney raise the risk of skin cancer. Good sun habits and regular checks help find problems early.",
    short: "Skin cancers are particularly common after a kidney transplant, because of the immunosuppressant medicines, and some other cancers are more common too. Avoid long periods in the sun, use factor 50 sunblock, a long-sleeved shirt and a hat, check your skin for changes, and go to NHS cancer screening when invited.",
    sections: [
      {
        heading: "Why the risk is higher",
        paragraphs: [
          "Some cancers are more common after a transplant. Skin cancers are particularly common in kidney transplant patients, and lymphomas are also more common.",
          "This is because of the immunosuppressant medicines, which carry a high risk of skin cancer. Kidney Care UK says skin and cervical cancers are not as serious if they are found early.",
        ],
      },
      {
        heading: "Sun safety every day",
        paragraphs: [
          "Avoid staying out in the sun for long periods. In the sun, wear factor 50 sunblock, a long-sleeved shirt and a hat.",
          "Ultraviolet light from the sun and sunbeds is the most common cause of non-melanoma skin cancer. The NHS says you can burn in the UK even when it is cloudy, and there is no safe or healthy way to get a tan, so spend time in the shade between 11am and 3pm and avoid sunbeds.",
        ],
      },
      {
        heading: "On holiday",
        paragraphs: [
          "In a sunny destination, take extra care to avoid the sun. Wear a hat, light clothing that covers your body and good sunglasses, and apply strong sun block, at least factor 50, regularly.",
          "Kidney Care UK says these steps are particularly important in the year after a transplant. Most people do not apply enough sunscreen, so reapply it after swimming or towel drying, and around every 2 hours.",
        ],
      },
      {
        heading: "Checking your skin",
        paragraphs: [
          "The main sign of non-melanoma skin cancer is a growth or unusual patch on the skin, most often on the head, face, ears, neck, hands or other places that get sun. It can be raised and smooth, rough or crusty, or a flat discoloured patch.",
          "A new mole, or a change in a mole's size, shape or colour, may be a sign of melanoma. If you notice a lump or something unusual on your skin, let your transplant team know.",
        ],
      },
      {
        heading: "Screening",
        paragraphs: [
          "Kidney Care UK recommends seeing your doctor regularly for skin checks, and cervical smears for women.",
          "Go to NHS cancer screening when invited. Programmes for breast, cervical and bowel cancer, and for abdominal aortic aneurysms, are active in the UK.",
        ],
      },
    ],
    helps: [
      "Wear factor 50 sunblock, a long-sleeved shirt and a hat when you are in the sun.",
      "Spend time in the shade between 11am and 3pm from March to October.",
      "Let your transplant team know about any lump or anything unusual on your skin.",
      "See your doctor regularly for skin checks.",
      "Go to cancer screening, such as a mammogram, cervical smear or bowel screening, when invited.",
      "See a GP about a skin growth that is getting bigger or changing, or a patch that hurts, itches, bleeds or crusts for more than 4 weeks.",
    ],
    tryThisWeek: [
      "Pack factor 50 and a hat.",
      "Tell your team about skin changes.",
      "Go to screening when invited.",
    ],
    ask: "How often should my skin be checked, and which screening should I be having?",
    interactive: {
      kind: "risk-check",
      title: "What raises the risk of skin cancer?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "medicines", label: "Taking immunosuppressants", note: "These medicines carry a high risk of skin cancer, so sun protection matters even more.", changeable: false },
        { id: "sun", label: "Lots of time in the sun", note: "Avoid long periods in the sun. Use factor 50 sunblock, a long-sleeved shirt and a hat.", changeable: true },
        { id: "sunbeds", label: "Using sunbeds", note: "Sunbeds use concentrated UV. Cancer Research UK advises people not to use them.", changeable: true },
        { id: "sunburn", label: "Often getting sunburnt", note: "Sunburn raises the risk of skin cancer, and you can burn in the UK even when it is cloudy.", changeable: true },
        { id: "pale", label: "Pale skin that burns easily", note: "Take extra care. People of all skin tones can still get skin cancer.", changeable: false },
        { id: "moles", label: "Lots of freckles or moles", note: "Keep an eye out for new moles, or ones that change in size, shape or colour.", changeable: false },
        { id: "family", label: "Skin cancer before, or in the family", note: "You are more likely to get non-melanoma skin cancer if it runs in your family or you have had it before.", changeable: false },
      ],
    },
    sources: [BT_HEALTHY, BT_LATER, KCUK_MEDS, KCUK_ABROAD, NHS_SUN, NHS_NMSC_SYMPTOMS, NHS_NMSC_CAUSES, BT_LIVING_WITH],
    quiz: {
      question: "What sunblock factor does NHS Blood and Transplant suggest after a transplant?",
      options: [{ text: "Factor 50", right: true }, { text: "Factor 15" }, { text: "None: a tan protects you" }],
      why: "In the sun, wear factor 50 sunblock, a long-sleeved shirt and a hat.",
    },
  },
  {
    id: "ktx-daily-life",
    kicker: "Living well",
    question: "When can I work, exercise, drive and travel again?",
    hook: "Driving at around 6 weeks, exercise at 6 to 8, work within 12 and travel abroad at about 6 months, if recovery goes well.",
    short: "Most people go back to work within 12 weeks, can drive again around 6 weeks and are encouraged to start moderate exercise after 6 to 8 weeks. Travel abroad is usually possible around 6 months after the transplant, after talking to your kidney team. A healthy weight, staying active, drinking only in moderation and not smoking help a transplant work for longer.",
    sections: [
      {
        heading: "Getting back to work",
        paragraphs: [
          "Most people go back to work within 12 weeks of a kidney transplant, though it depends on your recovery and the type of work you do. Heavy manual work may need more recovery time, so ask your transplant team.",
          "If your job involves heavy lifting, talk to your surgical team about when it is safe to return to your usual duties. Access to Work can help you get or stay in work with a health condition, with a grant for practical support that you do not have to pay back.",
        ],
      },
      {
        heading: "Exercise",
        paragraphs: [
          "In the first few weeks, walk a little every day. If recovery is going well, you will usually be encouraged to start moderate exercise, such as walking, jogging, swimming or cycling, after 6 to 8 weeks.",
          "Most sports are possible, but avoid heavy contact sports, such as rugby, martial arts and boxing, as they risk damaging the new kidney. Avoid heavy lifting of more than 10kg for at least 6 weeks.",
        ],
      },
      {
        heading: "Driving, sex and family",
        paragraphs: [
          "You can normally drive again around 6 weeks after a kidney transplant. Driving too soon could damage your surgical wound.",
          "Waiting at least 6 weeks before sex lets the wounds heal, and contraception is needed at first, as your team will usually suggest waiting a year before trying for a baby. Speak to your transplant team before planning a family, as some medicines may need to change.",
        ],
      },
      {
        heading: "Travel",
        paragraphs: [
          "You can usually go abroad around 6 months after a kidney transplant, and a UK holiday may be possible sooner if it is planned around clinic appointments. Always discuss holiday plans with your kidney team before booking.",
          "Live vaccines are not advised, and travel to countries with a risk of malaria is not advisable. Where sanitation is poor, use bottled water, avoid ice, and avoid salads and uncooked fruit and vegetables washed in tap water.",
        ],
      },
      {
        heading: "Staying well",
        paragraphs: [
          "Your transplant is more likely to work for longer if you keep to a healthy weight, stay active, drink alcohol only in moderation and do not smoke. Weight gain is common in the first year, partly because of the medicines and a less restrictive diet.",
          "Getting back to work or relationships can be difficult for some people. Transplant centres have social workers, counsellors and psychologists who can help, so you do not need to cope alone.",
        ],
      },
    ],
    helps: [
      "Ask your transplant team when it is safe for you to go back to work, travel, drive and do other activities.",
      "Walk a little every day in the first few weeks, then build up to moderate exercise.",
      "Avoid heavy contact sports such as rugby, martial arts and boxing.",
      "Speak to your transplant team before you travel, to find out which vaccines are safe for you.",
      "Check whether Access to Work could help you get or stay in work.",
      "Speak to your transplant team before trying for a baby.",
    ],
    tryThisWeek: [
      "Take a short walk each day.",
      "Ask when you can drive and work.",
      "Look up Access to Work.",
    ],
    ask: "When can I safely go back to work, drive and travel, given my recovery?",
    interactive: {
      kind: "timeline",
      title: "When you can do things again",
      steps: [
        { id: "six-weeks", when: "Around 6 weeks", title: "Driving and sex", points: ["You can normally drive again around 6 weeks.", "Wait at least 6 weeks before sex, to let wounds heal."] },
        { id: "eight-weeks", when: "6 to 8 weeks", title: "Moderate exercise", points: ["Walking, jogging, swimming or cycling.", "Avoid heavy contact sports."] },
        { id: "twelve-weeks", when: "Within 12 weeks", title: "Back to work", points: ["Most people are back at work by now.", "Heavy manual work may take longer."] },
        { id: "six-months", when: "Around 6 months", title: "Travel abroad", points: ["Discuss plans with your kidney team first.", "Avoid live vaccines."] },
        { id: "one-year", when: "About a year", title: "Trying for a baby", points: ["Your team will usually suggest waiting a year.", "Some medicines may need to change first."] },
      ],
    },
    sources: [BT_ACTIVITIES, BT_HEALTHY, KCUK_EXPLAINED, BT_FAQ, BT_LATER, KCUK_ABROAD, KCUK_TRAVEL_MEDS, GOV_ATW, BT_FAMILY, BT_SUPPORT],
    quiz: {
      question: "When can most people go abroad after a kidney transplant?",
      options: [{ text: "Around 6 months after", right: true }, { text: "After 2 weeks" }, { text: "Never" }],
      why: "You can usually go abroad around 6 months after a kidney transplant.",
    },
  },
  {
    id: "ktx-donor-family",
    kicker: "Living well",
    question: "Can I thank my donor or their family?",
    hook: "A letter, a card or an email, sent anonymously through the transplant service. It is never too early or too late.",
    short: "Many people like to write to their donor's family, and letters are often very much appreciated. You can write a letter, card or email without details that identify you, and it is checked and passed on through your transplant coordinator or the Donor Family Care Service. Living donors can be thanked the same way, through your living donor coordinator.",
    sections: [
      {
        heading: "Saying thank you",
        paragraphs: [
          "After a kidney transplant, many people like to write to their donor's family, and a letter can be a great comfort to them. It is often very much appreciated, and it is never too early or too late to write.",
          "Writing can be an emotional and challenging experience, and one recipient in NHS Blood and Transplant's videos wrote to her donor family 17 years after her transplant. Some people also mark a kidneyversary, the anniversary of the transplant, with donors and loved ones.",
        ],
      },
      {
        heading: "What to write",
        paragraphs: [
          "You can write a letter, card or email, and send photographs. You might include your social life, hobbies, children or partner, and you do not need to explain how you came to need a transplant unless you want to.",
          "Leave out anything that could identify you, such as your surname, your address or town, your workplace, and the name of the hospital. This keeps both you and the donor anonymous.",
        ],
      },
      {
        heading: "How it reaches them",
        paragraphs: [
          "Your transplant coordinator or the Donor Family Care Service reads it to check it does not identify anyone, and keeps a copy. The service matches it with your donor, and the family is told it is available.",
          "If they want to receive it, it is sent in a separate envelope to open when they choose. Send it with your full name, date of birth, transplant date, type of transplant and hospital on a separate sheet; this is only used to match the records.",
        ],
      },
      {
        heading: "Living donors",
        paragraphs: [
          "If your kidney came from an anonymous living donor, or through the UK Living Kidney Sharing Scheme, you write through your living donor coordinator in the same way. Communication is not expected, but living donors appreciate it.",
          "If you would like your donor to know who you are, you can ask through your coordinator, and your donor can do the same. Neither of you is under any pressure to say yes.",
        ],
      },
      {
        heading: "What each side is told",
        paragraphs: [
          "To protect everyone's privacy, you may learn your deceased donor's age range, gender and type of death, but not their name, job, date of birth or place of donation. The donor's family is told only your age range, gender and the outcome of the transplant, if they wish to know.",
          "A transplant can bring many feelings, from joy to guilt about receiving a deceased donation. Transplant centres have counsellors and psychologists, and support groups, such as the Donor Family Network for donor families, can help.",
        ],
      },
    ],
    helps: [
      "Speak to your transplant team for help with any questions about writing to your donor's family.",
      "Read NHS Blood and Transplant's leaflet 'Thanking your donor family', available from transplant centres.",
      "Leave out your surname, address, workplace and the name of the hospital.",
      "If your donor was a living donor, talk to your living donor coordinator about writing.",
      "Tell your transplant team if you or your family have worries, so counsellors or psychologists can help.",
    ],
    tryThisWeek: [
      "Ask your team about writing.",
      "Leave out identifying details.",
      "Tell your team about any worries.",
    ],
    ask: "How do I send a letter to my donor's family, and can you help me with it?",
    interactive: {
      kind: "scenarios",
      title: "Writing your letter",
      scenarios: [
        {
          id: "name",
          situation: "You want to sign off with your full name and home town.",
          options: [{ text: "Leave those details out", best: true }, { text: "Add your address for a reply" }],
          why: "Leave out your surname, your address or town, your workplace and the hospital, to keep you and the donor anonymous.",
        },
        {
          id: "late",
          situation: "It is years since your transplant and you never wrote.",
          options: [{ text: "It is not too late to write", best: true }, { text: "It is too late now" }],
          why: "It is never too early or too late to write.",
        },
        {
          id: "illness",
          situation: "You would rather not explain why you needed a transplant.",
          options: [{ text: "You do not need to", best: true }, { text: "Explain it all in full" }],
          why: "You do not need to explain how you came to need a transplant unless you want to.",
        },
        {
          id: "living",
          situation: "Your kidney came from an anonymous living donor.",
          options: [{ text: "Write via your donor coordinator", best: true }, { text: "Search for them online" }],
          why: "Your letter is read by the living donor coordinator, who matches it with your donor.",
        },
      ],
    },
    sources: [BT_WRITE_FAMILY, BT_WRITE_LIVING, BT_ABOUT_DONOR, BT_SUPPORT, KCUK_GROUPS, KCUK_KIDNEYVERSARIES, BT_LIVING_WITH],
    quiz: {
      question: "Who reads your letter before it is passed to your donor's family?",
      options: [{ text: "Your coordinator or the care service", right: true }, { text: "No one at all" }, { text: "Your GP" }],
      why: "Your transplant coordinator or the Donor Family Care Service reads it to check it does not identify anyone.",
    },
  },
];
