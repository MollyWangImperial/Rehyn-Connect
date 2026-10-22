import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Fertility after cancer page's pieces
// (content/library-conditions/cancer-more-2.ts, `fertilityAfterCancer`). Every sentence was written from
// wording checked on 22 October 2026 on the pages listed under each answer's `sources`; nothing is added
// that those pages do not say. Most of it comes from Macmillan Cancer Support, Cancer Research UK, the NHS,
// Teenage Cancer Trust and the government's adoption and surrogacy pages, with Fertility Network UK for NHS
// funding across the UK and for its own closure notice. The Human Fertilisation and Embryology Authority's
// pages could not be read today (they returned 403), so they are not cited. The answers are neutral: they
// explain the options without pressing anyone towards or away from having children, and they give no
// success rates or predictions. The feelings answer follows safe-messaging guidance and gives the crisis
// routes exactly as the NHS, Macmillan and Samaritans state them. General information only; it never
// replaces what a person's own cancer or fertility team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const tct = (label: string, path: string): LearnSource => ({ label: `Teenage Cancer Trust: ${label}`, url: `https://www.teenagecancertrust.org/information-about-cancer/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });
const fnuk = (label: string, path: string): LearnSource => ({ label: `Fertility Network UK: ${label}`, url: `https://fertilitynetworkuk.org/${path}` });

const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_RADIO_SE = nhs("Radiotherapy: side effects", "tests-and-treatments/radiotherapy/side-effects/");
const NHS_INFERT_TREAT = nhs("Infertility: treatment", "conditions/infertility/treatment/");
const NHS_IVF = nhs("IVF", "tests-and-treatments/ivf/");
const NHS_EARLY_MENO = nhs("Early or premature menopause", "conditions/early-or-premature-menopause/");
const NHS_CONTRA_WHERE = nhs("Where to get contraception", "contraception/where-to-get-contraception/");
const NHS_LGBT_WAYS = nhs("Ways to become a parent if you're LGBT+", "pregnancy/having-a-baby-if-you-are-lgbt-plus/ways-to-become-a-parent-if-you-are-lgbt-plus/");
const NHS_TESTICULAR = nhs("Treatment for testicular cancer", "conditions/testicular-cancer/treatment/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const MAC_FERT = mac("Fertility and cancer", "impacts-of-cancer/fertility");
const MAC_TREATMENTS = mac("Fertility and cancer treatment", "impacts-of-cancer/fertility/cancer-treatments");
const MAC_REPRO = mac("The reproductive system", "impacts-of-cancer/fertility/reproductive-system");
const MAC_PRESERVE = mac("Fertility preservation", "impacts-of-cancer/fertility/preservation");
const MAC_TESTS = mac("Fertility tests after cancer treatment", "impacts-of-cancer/fertility/tests-after-treatment");
const MAC_FERT_TREAT = mac("Fertility treatments and cancer", "impacts-of-cancer/fertility/treatment");
const MAC_CHEMO_SE = mac("Side effects of chemotherapy", "treatment/types-of-treatment/chemotherapy/side-effects-of-chemotherapy");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");
const MAC_RELATIONSHIPS = mac("Cancer and relationships", "diagnosis/talking-about-cancer/cancer-diagnosis-and-your-relationships");

const CRUK_WOMEN = cruk("Women's fertility and chemotherapy", "treatment/chemotherapy/fertility/womens-fertility-and-chemotherapy");
const CRUK_MEN = cruk("Men's fertility and chemotherapy", "treatment/chemotherapy/fertility/men");
const CRUK_COPING = cruk("Coping with infertility", "treatment/chemotherapy/fertility/coping-infertility");
const CRUK_SPERM_BANK = cruk("Sperm collection and storage (sperm banking)", "coping/physically/sex/men/sperm-banking");
const CRUK_PARTNERS = cruk("Sex and cancer for partners", "coping/physically/sex/partners");
const CRUK_SINGLE = cruk("Sex and cancer if you are single", "coping/physically/sex/single");

const TCT_FERT = tct("How cancer treatment can affect fertility", "how-cancer-treatment-can-affect-fertility");
const TCT_EGG = tct("How does egg freezing work for cancer patients?", "how-does-egg-freezing-work-cancer-patients");
const TCT_SPERM = tct("How does sperm banking work?", "how-does-sperm-banking-work");

const GOV_ADOPTION = gov("Child adoption", "child-adoption");
const GOV_SURROGACY = gov("Surrogacy: legal rights of parents and surrogates", "legal-rights-when-using-surrogates-and-donors");

const FNUK_FUNDING = fnuk("NHS funding", "access-support/nhs-funding/");
const FNUK_CLOSURE = fnuk("Managed closure information", "fertility-network-uk-managed-closure-information/");

const CFM: LearnSource = { label: "Cancer, Fertility and Me: Home", url: "https://cancerfertilityandme.org.uk/" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const fertilityAfterCancerAnswers: LearnArticle[] = [
  {
    id: "fert-how-treatment",
    kicker: "Understanding",
    question: "How can cancer treatment affect my fertility?",
    hook: "Some treatments leave fertility untouched, some affect it for a while, and some can affect it for good. The drugs, the dose and the area treated all make a difference.",
    short: "Fertility means being able to get pregnant or make someone pregnant. Some cancer treatments are unlikely to affect it, while others can cause problems during treatment, for a short time after, or for good. Your doctor or nurse can explain the risks of your own treatment, ideally before it starts.",
    sections: [
      {
        heading: "Some treatments, not all",
        paragraphs: [
          "Fertility means being able to get pregnant or make someone pregnant. Some cancer treatments are unlikely to affect fertility, but some do cause fertility problems during or after treatment.",
          "Some treatments might cause problems during treatment or for a short time after, and some cause long-term or permanent damage. Your doctors may not be able to predict exactly how treatment will affect your fertility, but planning your treatment can help give them an idea of your risk.",
        ],
      },
      {
        heading: "Chemotherapy",
        paragraphs: [
          "Chemotherapy can reduce or stop sperm production. This is usually temporary, but sometimes it can be permanent.",
          "It can also reduce the number of eggs stored in the ovaries, and may bring a temporary or permanent early menopause. This may cause the menopause to start 5 to 10 years earlier than it would naturally, and the closer you are to a natural menopause, the higher the risk of infertility.",
          "The drugs, their combination and the dose all matter, and higher doses are more likely to affect fertility. Sometimes it is possible to choose a chemotherapy treatment that is less likely to affect your fertility.",
        ],
      },
      {
        heading: "Radiotherapy",
        paragraphs: [
          "Radiotherapy usually only affects fertility if the treatment area includes part of the reproductive system, or the pituitary gland at the base of the brain. It can have an effect especially if your lower tummy, pelvic area or groin is treated.",
          "Radiotherapy directly to the testicles, or to the ovaries and womb, causes permanent infertility, and total body irradiation before a transplant usually does too. Sometimes the testicles or ovaries can be shielded, or the ovaries moved away from the treatment area with keyhole surgery.",
        ],
      },
      {
        heading: "Surgery and hormone treatments",
        paragraphs: [
          "Surgery usually only affects fertility if the operation involves part of the reproductive system, or the pituitary gland. Removing 1 testicle should not affect your fertility, as long as the other testicle is healthy.",
          "Hormonal therapy for prostate cancer lowers testosterone, which affects how the body produces sperm. Hormonal therapy for breast cancer can affect fertility too; the effects are usually temporary, but because it may be taken for a number of years, there may be less time to start a pregnancy afterwards.",
          "Targeted therapy and immunotherapy are newer treatments, so doctors do not yet know exactly what effect they may have on fertility.",
        ],
      },
      {
        heading: "Asking early",
        paragraphs: [
          "Some chemotherapy medicines can cause fertility problems, so before treatment starts you may want to ask about options for storing your eggs or sperm. Plenty of people have these treatments and go on to have children, but it is important to talk to your doctor about the likely effects of your treatment.",
          "You can talk to your cancer doctor, GP or specialist nurse at any stage before, during or after cancer treatment.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse to explain any risks to your fertility before treatment starts.",
      "Ask whether a chemotherapy treatment that is less likely to affect fertility is an option for you.",
      "Ask whether the testicles or ovaries can be protected during pelvic radiotherapy.",
      "Ask about options for storing your eggs or sperm before chemotherapy.",
      "If you have a partner, ask them to join in the discussion.",
    ],
    tryThisWeek: [
      "Ask about fertility risks first.",
      "Ask about storing eggs or sperm.",
      "Bring your partner to the talk.",
    ],
    ask: "How likely is my treatment to affect my fertility, and is that likely to be temporary or permanent?",
    interactive: {
      kind: "flip-cards",
      title: "How each treatment can affect fertility",
      intro: "Turn a card to see how each type of treatment can affect fertility.",
      cards: [
        { id: "chemo", front: "Chemotherapy", when: "Drugs given in cycles", back: "Can reduce sperm production or the eggs in the ovaries. Higher doses and some drug combinations are more likely to affect fertility." },
        { id: "radio", front: "Radiotherapy", when: "To the pelvis, testicles, ovaries or brain", back: "Usually only affects fertility if the area treated includes the reproductive system or the pituitary gland." },
        { id: "surgery", front: "Surgery", when: "On reproductive organs or the pituitary", back: "Removing 1 testicle should not affect fertility if the other is healthy. Removing the womb or both ovaries does." },
        { id: "hormonal", front: "Hormonal therapy", when: "Often for breast or prostate cancer", back: "Lowers testosterone or oestrogen. Effects for breast cancer are usually temporary, but treatment can last years." },
        { id: "targeted", front: "Targeted and immunotherapy", when: "Newer cancer drugs", back: "Doctors do not yet know exactly what effect they may have on fertility. Your cancer doctor can talk through the risks." },
      ],
    },
    sources: [MAC_TREATMENTS, MAC_FERT, NHS_CHEMO, NHS_RADIO_SE, CRUK_COPING, TCT_FERT],
    quiz: {
      question: "When does radiotherapy usually affect fertility?",
      options: [{ text: "When the area treated includes the reproductive system or pituitary gland", right: true }, { text: "Whenever any part of the body is treated" }, { text: "Never" }],
      why: "Radiotherapy usually only affects fertility if the treatment area includes part of the reproductive system, or the pituitary gland at the base of the brain.",
    },
  },
  {
    id: "fert-women",
    kicker: "Women",
    question: "How can cancer treatment affect fertility for women?",
    hook: "Periods may stop during treatment and come back later. For some people, treatment brings an early menopause.",
    short: "To get pregnant, the body needs healthy eggs, a healthy womb and the right hormone levels, and cancer treatment can affect any of these. Periods may stop or become irregular during treatment and often come back afterwards, but some treatments cause an early menopause. There are treatments for menopausal symptoms, and options such as donor eggs if fertility is affected.",
    sections: [
      {
        heading: "What a pregnancy needs",
        paragraphs: [
          "To get pregnant and give birth to a baby, your body needs a supply of healthy eggs, a healthy womb and the right hormone levels. Eggs develop in the ovaries, and hormones from the ovaries and the pituitary gland help control the process.",
          "You are born with lots of eggs stored in the ovaries, and the number decreases with age. The natural menopause usually happens between the ages of 45 and 55.",
        ],
      },
      {
        heading: "Periods during treatment",
        paragraphs: [
          "Your periods might stop or become irregular during treatment, but this does not mean there is no chance of you having children. Periods often come back after treatment is over.",
          "Sometimes your periods stop during chemotherapy but you are still producing eggs, so you could still get pregnant. Chemotherapy drugs could harm a baby, so it is important to use reliable contraception.",
          "Temporary infertility is more likely in younger women. It might take a few years for your periods to go back to normal.",
        ],
      },
      {
        heading: "Early menopause",
        paragraphs: [
          "Some cancer treatments cause permanent damage to the ovaries. This is called early menopause or premature ovarian insufficiency.",
          "Early menopause is when your periods stop before the age of 45, and premature menopause is when this happens before 40. Radiotherapy, chemotherapy, certain hormone medicines and surgery to remove your ovaries can all cause it.",
          "Symptoms can include hot flushes and night sweats, vaginal dryness, difficulty sleeping, low mood or anxiety, and reduced sex drive.",
        ],
      },
      {
        heading: "Help with symptoms",
        paragraphs: [
          "The main treatments for early menopause are medicines such as the combined contraceptive pill or hormone replacement therapy, to replace the hormones that are low. If you have had certain types of cancer, such as certain types of breast cancer, you may not be able to have hormone treatments.",
          "HRT can help reduce menopausal symptoms, but it cannot make you start producing eggs again. Ask your cancer doctor or specialist nurse for advice about treatments that can help.",
        ],
      },
      {
        heading: "If fertility is affected",
        paragraphs: [
          "Early or premature menopause means you may find it harder to get pregnant. You may be able to have children through IVF using your own frozen eggs or donor eggs, and there are also options such as surrogacy or adoption.",
          "If the womb is removed but the ovaries are not, you may still produce eggs. You may be able to start a pregnancy with a surrogate, using your own eggs or donor eggs.",
        ],
      },
    ],
    helps: [
      "Chat to your doctor or clinical nurse specialist if you are worried about your periods.",
      "Keep using reliable contraception during chemotherapy, even if your periods stop.",
      "See a GP if you think you have menopause symptoms.",
      "Ask your cancer doctor or specialist nurse about treatments for menopausal symptoms.",
      "Talk to your doctor about symptoms that are ongoing, unexplained or unusual for you.",
    ],
    tryThisWeek: [
      "Mention period worries to your nurse.",
      "Keep using contraception.",
      "See a GP about menopause symptoms.",
    ],
    ask: "Has my treatment affected my ovaries, and could I be going through an early menopause?",
    interactive: {
      kind: "signs",
      title: "Changes to mention",
      intro: "These can be signs of an early menopause. Tick any you have noticed.",
      signs: ["Periods irregular or stopped", "Hot flushes and night sweats", "Vaginal dryness", "Difficulty sleeping", "Low mood or anxiety", "Reduced sex drive", "Problems with memory or concentration"],
      after: "See a GP if you think you have menopause symptoms. If you are under 45, a GP may sometimes do blood tests.",
      copyHeading: "Changes I have noticed",
    },
    sources: [MAC_REPRO, MAC_TREATMENTS, CRUK_WOMEN, NHS_EARLY_MENO, TCT_FERT],
    quiz: {
      question: "If your periods stop during chemotherapy, can you still get pregnant?",
      options: [{ text: "Yes, you could still be producing eggs", right: true }, { text: "No, never" }, { text: "Only after a year" }],
      why: "Sometimes your periods stop during chemotherapy but you are still producing eggs, so you could still get pregnant.",
    },
  },
  {
    id: "fert-men",
    kicker: "Men",
    question: "How can cancer treatment affect fertility for men?",
    hook: "Treatment can lower sperm numbers, change hormones or affect ejaculation. For many men sperm comes back, though it can take time.",
    short: "Some chemotherapy drugs, radiotherapy to the pelvis or testicles, and some operations can affect sperm, hormones or ejaculation. Infertility may be temporary or permanent, and some men find their sperm returns after months or years. Storing sperm before treatment, and sperm counts afterwards, can help.",
    sections: [
      {
        heading: "What fertility needs",
        paragraphs: [
          "To start a pregnancy, your body needs to produce healthy sperm. The testicles start to make and store sperm during puberty, helped by hormones from the pituitary gland and the testicles.",
          "The testicles produce the hormone testosterone, which also controls sex drive and erections.",
        ],
      },
      {
        heading: "How treatment can affect it",
        paragraphs: [
          "Not all chemotherapy drugs affect your ability to get someone pregnant. But some can reduce the number of sperm you produce, affect the sperm's ability to fertilise an egg, or affect the production of testosterone.",
          "The infertility may be temporary or permanent, depending on the drugs, the doses and your age. Permanent infertility is more likely with higher doses of chemotherapy.",
          "Radiotherapy to the pelvis can reduce the amount and quality of sperm, and this may be temporary or permanent. Radiotherapy directly to the testicles causes permanent infertility.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Having a testicle removed does not usually affect your fertility. Rarely, both testicles have to be removed, which causes permanent infertility.",
          "If the prostate gland is removed, you will still make sperm, but not semen, so nothing comes out when you ejaculate. This is called dry ejaculation.",
          "An operation to remove lymph nodes in the tummy can damage nerves and cause retrograde ejaculation, when semen goes into the bladder instead. It then leaves the body harmlessly in your urine.",
        ],
      },
      {
        heading: "Erections and sex",
        paragraphs: [
          "Some chemotherapy drugs can make it difficult to get or keep an erection. This is usually temporary and gradually gets better once treatment has finished.",
          "Most men can still get an erection and have an orgasm as they did before treatment. It can be hard to talk about problems like this, but try not to let embarrassment stop you asking your healthcare team for help.",
        ],
      },
      {
        heading: "When fertility comes back",
        paragraphs: [
          "Some men stay infertile after chemotherapy, while others find their sperm returns to normal and their fertility comes back. It can take a few months or sometimes years.",
          "Your doctor can do regular sperm counts once treatment is over. If you have dry ejaculation or erection problems, you may be able to have sperm collected by sperm extraction and used with treatment called ICSI.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor about your risk of infertility before you start chemotherapy.",
      "Ask about storing your sperm before treatment begins.",
      "Use contraception throughout treatment, so you avoid getting someone pregnant.",
      "Ask your healthcare team for help with erection or ejaculation problems.",
      "Ask your doctor about regular sperm counts once treatment is over.",
    ],
    tryThisWeek: [
      "Ask about your infertility risk.",
      "Ask about storing sperm.",
      "Ask about sperm counts later.",
    ],
    ask: "Is my treatment likely to affect my sperm, and can I store sperm before it starts?",
    interactive: {
      kind: "risk-check",
      title: "What did your treatment include?",
      intro: "Tick any that apply. Each note says what the sources say may still be possible.",
      items: [
        { id: "chemo", label: "Chemotherapy", note: "Sperm can return to normal after treatment, but it can take months or years. Regular sperm counts can check.", changeable: true },
        { id: "pelvic", label: "Radiotherapy to the pelvis", note: "Can reduce the amount and quality of sperm. Tests afterwards can check whether you are producing healthy sperm.", changeable: true },
        { id: "testicle-rt", label: "Radiotherapy to the testicles", note: "This causes permanent infertility. Sperm stored before treatment may be used with fertility treatment.", changeable: false },
        { id: "one-testicle", label: "One testicle removed", note: "This should not affect your fertility, as long as the other testicle is healthy.", changeable: false },
        { id: "prostate", label: "Prostate surgery", note: "You still make sperm, but not semen. If you produce sperm, ICSI treatment may be possible.", changeable: true },
        { id: "lymph", label: "Lymph node surgery in the tummy", note: "Can cause retrograde ejaculation. Drugs may help, or sperm may be collected from urine for ICSI.", changeable: true },
        { id: "hormonal", label: "Hormonal therapy for prostate cancer", note: "Lowers testosterone, which affects sperm production. Changes may gradually improve after treatment ends.", changeable: true },
      ],
    },
    sources: [MAC_REPRO, CRUK_MEN, MAC_TREATMENTS, CRUK_SPERM_BANK, NHS_TESTICULAR],
    quiz: {
      question: "Does having one testicle removed usually affect fertility?",
      options: [{ text: "No, not usually", right: true }, { text: "Yes, always" }, { text: "Only for a few days" }],
      why: "Having a testicle removed does not usually affect your fertility.",
    },
  },
  {
    id: "fert-tests",
    kicker: "Tests",
    question: "What fertility tests can I have after treatment?",
    hook: "A semen test or an ovarian reserve test can show how treatment has affected your fertility. Timing, and how you feel about the result, both matter.",
    short: "After treatment, a semen analysis can check whether you are producing healthy sperm, and blood tests and an ultrasound scan can help measure the eggs left in the ovaries. Infertility can be temporary, so a first result is not necessarily final. Some people prefer to wait, or not to be tested at all.",
    sections: [
      {
        heading: "Why have tests",
        paragraphs: [
          "Different cancer treatments affect fertility in different ways, and it is often hard to know exactly how or when fertility will recover. After treatment, tests can help find out how your fertility has been affected.",
          "Your cancer doctor can refer you to a fertility specialist for further discussions.",
        ],
      },
      {
        heading: "Semen tests",
        paragraphs: [
          "A semen analysis checks whether you are producing healthy sperm and how much. Your cancer doctor or nurse can explain when you can have it.",
          "You usually give a sample by masturbation at home or at a clinic, and it is checked in a laboratory under a microscope. Semen testing is available free on the NHS, and you can have it again to see whether things have changed.",
          "Some men find their sperm returns to normal after treatment, and regular sperm counts can check this.",
        ],
      },
      {
        heading: "Ovarian reserve tests",
        paragraphs: [
          "The number of eggs in the ovaries is called your ovarian reserve. Tests can help measure it, and show whether the ovaries are releasing eggs and whether you may have started the menopause.",
          "You may have blood tests to check your hormone levels, and an ultrasound scan to look at follicles in the ovaries, called an antral follicle count. The contraceptive pill, HRT and gender-affirming hormones can affect some results, so let your doctor know if you take any of these.",
          "People are usually only referred to a fertility clinic after 1 to 2 years of trying to start a pregnancy. After cancer treatment, you should be referred for ovarian reserve testing sooner, because there is a higher risk of an early menopause.",
        ],
      },
      {
        heading: "When to test",
        paragraphs: [
          "Infertility caused by treatment can be temporary, so your first test result is not necessarily a final result. It is a good idea to wait at least six months to a year after treatment, to give your body time to recover.",
          "Some people only start having periods again months or years after treatment ends. If your periods change, you can have the tests again.",
        ],
      },
      {
        heading: "Thinking it through",
        paragraphs: [
          "It is worth thinking carefully before testing, and maybe talking to someone close to you about how you would deal with any difficult news. You might prefer not to be tested, or to wait until you are a bit older.",
          "The results do not always clearly show whether you will be able to start a pregnancy. But they may help you decide what to do next.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor or GP to arrange a semen test.",
      "Ask to be referred for ovarian reserve testing sooner than usual after treatment.",
      "Tell your doctor before testing if you take the pill, HRT or gender-affirming hormones.",
      "Think about waiting six months to a year after treatment before testing.",
      "Talk to someone close about how you would deal with the results.",
    ],
    tryThisWeek: [
      "Ask about a fertility test.",
      "Mention any hormones you take.",
      "Talk it over with someone close.",
    ],
    ask: "When would be a good time for me to have fertility tests, and who can refer me?",
    interactive: {
      kind: "flip-cards",
      title: "Fertility tests after treatment",
      intro: "Turn a card to see what each test looks for.",
      cards: [
        { id: "semen", front: "Semen analysis", when: "After treatment, when your doctor advises", back: "Checks whether you are producing healthy sperm, and how much. Free on the NHS, and can be repeated." },
        { id: "hormones", front: "Hormone blood tests", when: "Timed as your doctor explains", back: "Help measure your ovarian reserve and show whether you may have started the menopause." },
        { id: "afc", front: "Antral follicle count", when: "An ultrasound scan", back: "Looks at the follicles in the ovaries. The probe usually goes inside the vagina and is not usually painful." },
        { id: "repeat", front: "Testing again", when: "If your periods change", back: "Some people only start having periods again months or years after treatment, so tests can be repeated." },
      ],
    },
    sources: [MAC_TESTS, TCT_FERT, CRUK_SPERM_BANK, MAC_FERT, CRUK_MEN],
    quiz: {
      question: "Is your first fertility test result after treatment always final?",
      options: [{ text: "No, infertility caused by treatment can be temporary", right: true }, { text: "Yes, it never changes" }, { text: "Only for men" }],
      why: "Infertility caused by treatment can be temporary, so your first test result is not necessarily a final result.",
    },
  },
  {
    id: "fert-preserving",
    kicker: "Preserving",
    question: "How can I preserve my fertility before treatment?",
    hook: "Sperm, eggs, embryos and sometimes tissue can be frozen and stored for years. The decisions often have to be made quickly, before treatment starts.",
    short: "Preserving fertility means collecting and storing sperm, eggs, embryos or tissue from the testicle or ovary, usually before cancer treatment starts. Sperm banking is simple and well established, and storing eggs or embryos are common and effective, but not every option suits every person or cancer. Your cancer doctor can refer you to a fertility clinic straight away.",
    sections: [
      {
        heading: "What it means",
        paragraphs: [
          "Preserving fertility means collecting and storing sperm, eggs, embryos or tissue from the testicle or ovary. It may be an option if there is a risk that cancer treatment might make you infertile.",
          "Your right to fertility preservation is the same whether or not you are in a relationship, and whatever your sexual orientation or gender identity. If you are thinking about it, your cancer doctor can refer you to a fertility clinic straight away.",
        ],
      },
      {
        heading: "Storing sperm",
        paragraphs: [
          "Sperm banking is a safe and simple process that has been used for many years. You can store sperm if you have reached puberty, and your doctor will likely advise you to do it before cancer treatment starts.",
          "Samples are usually given by masturbating in a private room at the clinic. You may be asked for 2 or 3 samples, but if there is only time for 1 before treatment, it may be enough.",
          "If you cannot produce a sample by masturbation, a specialist doctor may be able to collect sperm from the testicle.",
        ],
      },
      {
        heading: "Storing eggs or embryos",
        paragraphs: [
          "Storing eggs or embryos are common and effective ways of preserving fertility. You usually have daily hormone injections for 8 to 14 days so the ovaries produce more mature eggs, which are then collected under sedation.",
          "Ovarian stimulation is not suitable for everyone. There may not be time if you need to start cancer treatment straight away, and the hormones increase oestrogen, which may encourage some cancers, such as breast cancer, to grow.",
          "Embryos are eggs fertilised with a partner's or donor's sperm, and both partners need to agree to use them later. Even if you have a partner, you can still choose to freeze your unfertilised eggs.",
        ],
      },
      {
        heading: "Other options",
        paragraphs: [
          "Tissue from an ovary or a testicle can sometimes be frozen, including for children who have not reached puberty. These are not standard treatments and are only available at a few clinics in the UK.",
          "An injection that stops the ovaries working for a short time during chemotherapy may help protect them. It is not suitable for everyone and is not always successful.",
        ],
      },
      {
        heading: "Costs, storage and timing",
        paragraphs: [
          "In some situations and some areas of the UK, the NHS may provide fertility preservation and storage for free, but this varies. Staff at the fertility clinic will tell you what is available for you.",
          "Storage is usually for at least 10 years, and can be extended every 10 years up to 55 years in total. Keep the clinic up to date with your contact details, because if it cannot reach you, stored samples may be disposed of.",
          "It may sometimes be possible to freeze eggs or sperm after treatment, depending on things like whether you are well enough and how much treatment has affected you. Cancer, Fertility and Me is an online decision aid that can help you think through your options before treatment starts.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor to refer you to a fertility clinic straight away if you are thinking about it.",
      "Talk to the clinic staff if you feel worried or embarrassed about giving sperm samples.",
      "Ask your specialist whether ovarian stimulation is suitable with your type of cancer.",
      "Ask the clinic what is free in your area and what you may have to pay for.",
      "Let the clinic know if your address or contact details change.",
      "Use the Cancer, Fertility and Me decision aid to prepare for talks with your team.",
    ],
    tryThisWeek: [
      "Ask for a fertility clinic referral.",
      "Ask what is free in your area.",
      "Keep your contact details up to date.",
    ],
    ask: "Is there time to store eggs, embryos or sperm before my treatment, and would the NHS pay for it?",
    interactive: {
      kind: "flip-cards",
      title: "Ways to preserve fertility",
      intro: "Turn a card to see what each option involves.",
      cards: [
        { id: "sperm", front: "Sperm banking", when: "After puberty, before treatment", back: "Samples are frozen and stored in liquid nitrogen. A safe and simple process used for many years." },
        { id: "eggs", front: "Egg freezing", when: "After puberty, if there is time", back: "Daily hormone injections, then eggs are collected under sedation and frozen. Not suitable for everyone." },
        { id: "embryos", front: "Embryo freezing", when: "With a partner's or donor's sperm", back: "Eggs are fertilised in a laboratory and the embryos frozen. Both partners need to agree to use them." },
        { id: "ovarian", front: "Ovarian tissue", when: "If treatment must start quickly, or before puberty", back: "Keyhole surgery removes part or all of 1 ovary, which is frozen. Only at a few UK clinics." },
        { id: "testicular", front: "Testicular tissue", when: "Before puberty", back: "Small samples are stored. Research is at an early stage, and it has not yet been used to start a pregnancy." },
        { id: "suppression", front: "Ovarian suppression", when: "During chemotherapy", back: "A hormone injection switches the ovaries off for a short time. It may help protect them, but is not always successful." },
      ],
    },
    sources: [MAC_PRESERVE, MAC_FERT, CRUK_WOMEN, CRUK_SPERM_BANK, TCT_EGG, TCT_SPERM, CFM],
    quiz: {
      question: "How long are eggs, sperm or embryos usually stored for at first?",
      options: [{ text: "At least 10 years", right: true }, { text: "1 year" }, { text: "Until the end of treatment" }],
      why: "Storage is usually for at least 10 years, and can be extended every 10 years up to 55 years in total.",
    },
  },
  {
    id: "fert-trying",
    kicker: "Pregnancy",
    question: "When can I try for a baby after cancer?",
    hook: "There is no single answer. Your cancer doctor can help you choose a time that is safe for you and any baby.",
    short: "Most doctors advise waiting for a time after treatment before trying for a pregnancy, and how long depends on the cancer and the treatment. Your cancer doctor can talk about when it is safest to start, any checks you may need and any extra risks in pregnancy. Research suggests that for almost all types of cancer, pregnancy does not make the cancer more likely to come back.",
    sections: [
      {
        heading: "A big decision",
        paragraphs: [
          "The decision to try to have a baby is a big one for anyone to make. You may have worries and questions about fertility that did not seem important before treatment, and when you are ready you can talk to your cancer doctor again.",
          "If you were told your fertility might recover, your cancer doctor can explain when it might come back and what to expect. They can help you think about when might be best for you to try.",
        ],
      },
      {
        heading: "How long to wait",
        paragraphs: [
          "Most doctors advise waiting for some time after chemotherapy before becoming pregnant. How long depends on your type of cancer, the type and dose of treatment, and any other treatments you need.",
          "Radiotherapy and some cancer drug treatments can affect sperm and eggs for a time after treatment has finished. Your cancer doctor may advise you to wait, to make sure you are producing healthy sperm or eggs.",
          "With cancer drugs such as chemotherapy or immunotherapy, contraception is used during treatment and for a period of time afterwards, because the drugs may harm a baby. The exact time depends on the drug.",
        ],
      },
      {
        heading: "Your health before pregnancy",
        paragraphs: [
          "Some cancer treatment can increase the risk of problems during pregnancy or birth. Your cancer doctor can talk to you about how long you may need to recover, any health checks before you try, and ways to manage any extra risks.",
          "If radiotherapy has affected the womb, you may still be able to get pregnant, but there will be a higher risk of miscarriage or premature birth. After some surgery to the cervix, some people need a caesarean section.",
        ],
      },
      {
        heading: "Worries about the cancer",
        paragraphs: [
          "Research suggests that for almost all types of cancer, pregnancy does not make cancer more likely to come back. Your cancer doctor can give you more information about your own situation.",
          "Nobody can tell you exactly what will happen in the future. Some people decide to wait until their risk of cancer coming back is likely to be lower before trying.",
          "Cancer cannot be passed from parent to child. A small number of people carry an inherited gene change, so talk to your doctor if you are worried about cancer in your family.",
        ],
      },
      {
        heading: "Starting to try",
        paragraphs: [
          "Not everyone becomes infertile after treatment, and you might want to try for a pregnancy naturally. You can ask your doctor for a sperm analysis, or decide to have other fertility tests to get more information.",
          "Some treatments affect the number of eggs in the ovaries, and a low ovarian reserve may mean there is less time to start a pregnancy. Your cancer doctor or GP can refer you to a fertility specialist for advice.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor when it is safest for you to start trying.",
      "Keep using contraception for as long as your team advises after treatment.",
      "Ask about any health checks you may need before trying for a pregnancy.",
      "Talk to your doctor if you are worried about the risk of cancer in your family.",
      "Ask for a referral to a fertility specialist if your ovarian reserve may be low.",
    ],
    tryThisWeek: [
      "Ask when it is safest to try.",
      "Keep using contraception for now.",
      "Ask about checks before trying.",
    ],
    ask: "How long should I wait after my treatment before trying for a baby, and are there any checks I need first?",
    interactive: {
      kind: "timeline",
      title: "From treatment to trying",
      steps: [
        { id: "ends", when: "When treatment ends", title: "Keep using contraception", points: ["Some cancer drugs can harm a baby for a time after treatment.", "The exact time depends on the drug, so ask your team."] },
        { id: "wait", when: "The waiting time", title: "Let your body recover", points: ["Your doctor may advise waiting until you produce healthy sperm or eggs.", "How long depends on your cancer and your treatment."] },
        { id: "ready", when: "When you feel ready", title: "Talk to your cancer doctor", points: ["Ask when it is safest to start trying.", "Ask about health checks and any extra risks in pregnancy."] },
        { id: "trying", when: "Trying", title: "Naturally or with help", points: ["Not everyone becomes infertile after treatment.", "Tests can show whether a fertility specialist could help."] },
      ],
    },
    sources: [MAC_FERT, CRUK_WOMEN, CRUK_PARTNERS, TCT_FERT, MAC_TREATMENTS, CRUK_SPERM_BANK],
    quiz: {
      question: "Does pregnancy make most cancers more likely to come back?",
      options: [{ text: "Research suggests not, for almost all types", right: true }, { text: "Yes, always" }, { text: "Nobody has looked" }],
      why: "Research suggests that for almost all types of cancer, pregnancy does not make cancer more likely to come back.",
    },
  },
  {
    id: "fert-ivf",
    kicker: "Treatment",
    question: "What fertility treatment is there after cancer, and will the NHS pay?",
    hook: "IUI, IVF and ICSI can use fresh or stored sperm, eggs or embryos. What the NHS funds depends on where you live.",
    short: "Your cancer doctor or GP can refer you to a fertility clinic, where treatments include IUI, IVF and ICSI, using fresh or stored sperm, eggs or embryos. NHS funding varies across the UK and depends on local rules for you and any partner. Treatment does not always lead to a pregnancy, and counselling is offered before, during and after IVF.",
    sections: [
      {
        heading: "Getting started",
        paragraphs: [
          "After cancer treatment, your cancer doctor or GP can refer you to a fertility clinic for advice and support. Fertility treatment can be an option for single people, straight couples, same-sex couples and people of all gender identities.",
          "All UK fertility clinics are licensed by the Human Fertilisation and Embryology Authority. If you have already had fertility preservation or fertility tests, you may be able to go back to the same clinic.",
        ],
      },
      {
        heading: "The main treatments",
        paragraphs: [
          "In IUI, collected sperm is put directly into the womb through a fine tube. Good-quality sperm is needed, so it may not be an option with sperm that was frozen.",
          "In IVF, eggs and sperm are mixed together in a laboratory, and if suitable embryos develop, 1 or sometimes 2 are placed in the womb. ICSI uses a single sperm to fertilise an egg, so it can help if your sperm count is low, and sperm collected by surgery is used with ICSI.",
          "A full cycle of IVF takes around 3 to 6 weeks. A pregnancy test is usually done around 16 days after the embryo is put in the womb.",
        ],
      },
      {
        heading: "NHS funding",
        paragraphs: [
          "NHS-funded fertility treatment varies across the UK, and waiting lists can be very long in some areas. A GP can advise about your eligibility, and the funding rules apply to both you and any partner you have treatment with.",
          "If you are 39 or under, you may be eligible for 3 full cycles of IVF on the NHS, and if you are 40 to 42, for 1 full cycle. If tests show you are unlikely to get pregnant without IVF, you should be referred for treatment immediately.",
          "Local integrated care boards decide who can have IVF in their area, and some only offer it if you do not smoke, are a healthy weight or have no children already. Scotland, Wales and Northern Ireland each have their own standard access criteria.",
        ],
      },
      {
        heading: "Paying privately",
        paragraphs: [
          "Some people pay for some or all of their treatment privately, for example if they are not eligible for NHS treatment or are worried about waiting times. Fertility treatment is expensive, and there are no standard charges.",
          "Ask for a personalised, fully costed treatment plan, and choose a clinic licensed by the HFEA. Clinics in other countries may not be regulated in the same way as in the UK.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Fertility treatment does not always result in a pregnancy, and your doctor will explain your chances before you start. Counselling is recommended for anyone having IVF, and your clinic should offer it before, during and after treatment.",
          "During treatment, contact your fertility clinic or NHS 111 as soon as possible if you have pain and bloating in your tummy, are feeling or being sick, or feel faint. Call 999 or go to A&E if you have difficulty breathing, or pain in your chest or upper back, and do not drive yourself.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor or GP to refer you to a fertility clinic.",
      "Ask your GP what NHS fertility treatment is available in your area.",
      "If you go private, ask for a personalised, fully costed treatment plan.",
      "Choose a clinic licensed by the HFEA.",
      "Talk to the clinic counsellor before, during and after treatment.",
      "Contact the clinic or NHS 111 as soon as possible about tummy pain, bloating or feeling faint.",
    ],
    tryThisWeek: [
      "Ask for a fertility clinic referral.",
      "Ask your GP about NHS funding.",
      "Ask about clinic counselling.",
    ],
    ask: "Am I eligible for NHS fertility treatment where I live, and does my partner's situation affect it?",
    interactive: {
      kind: "timeline",
      title: "A cycle of IVF, step by step",
      steps: [
        { id: "pause", when: "2 to 3 weeks", title: "Pausing the ovaries", points: ["A daily injection or nasal spray stops the ovaries producing eggs naturally.", "A scan checks the medicine has worked."] },
        { id: "boost", when: "About 2 weeks", title: "More eggs", points: ["Daily injections increase your egg supply.", "Tests or scans check how well it is working."] },
        { id: "collect", when: "Collection day", title: "Eggs and sperm", points: ["Eggs are collected with a needle, and a sedative is offered.", "A sperm sample is given, or donor or stored sperm is used."] },
        { id: "fertilise", when: "The next day", title: "Fertilisation", points: ["Eggs are fertilised with sperm in a laboratory.", "The clinic calls to say how many embryos have been made."] },
        { id: "transfer", when: "A few days later", title: "Embryo transfer", points: ["An embryo is put in the womb using a thin tube.", "Any suitable embryos left over may be frozen."] },
        { id: "test", when: "About 16 days later", title: "Pregnancy test", points: ["Take the test on the date you are given.", "If it is negative, give yourself time to recover and get support."] },
      ],
    },
    sources: [MAC_FERT_TREAT, NHS_IVF, NHS_INFERT_TREAT, CRUK_SPERM_BANK, FNUK_FUNDING],
    quiz: {
      question: "How long does a full cycle of IVF take?",
      options: [{ text: "Around 3 to 6 weeks", right: true }, { text: "One day" }, { text: "About a year" }],
      why: "A full cycle of IVF takes around 3 to 6 weeks.",
    },
  },
  {
    id: "fert-other-routes",
    kicker: "Other routes",
    question: "What about donor eggs or sperm, surrogacy or adoption?",
    hook: "There is more than one way to become a parent, and there is also no wrong choice in deciding not to.",
    short: "If treatment has affected fertility, or fertility treatment is not for you, other routes include donor eggs, sperm or embryos, surrogacy, adoption, fostering and co-parenting. Each has its own rules, and some are not always funded by the NHS. Many people find it helps to talk the options through with a counsellor.",
    sections: [
      {
        heading: "Different ways to a family",
        paragraphs: [
          "Some people cannot have fertility treatment, and some decide they do not want it or prefer to become a parent another way. Other options include donor eggs, sperm or embryos, surrogacy, adoption, fostering and co-parenting.",
          "These are difficult decisions and some options may not be straightforward. Some are not always funded by the NHS, there is a shortage of donors, and many people find it helpful to talk to a counsellor.",
        ],
      },
      {
        heading: "Using a donor",
        paragraphs: [
          "Donated sperm, eggs or embryos might be an option if your fertility is affected and you do not have anything stored, or if you are single or in a same-sex relationship. The fertility clinic will offer you counselling to think about the issues.",
          "Everyone who donates in the UK sees a doctor and is tested for infections and some genetic conditions. You can be matched by things like ethnic origin, eye colour, hair colour and physical build.",
          "UK donors must agree to their details being available in the future. A child born from donation is entitled to find out the donor's identity when they are 18.",
        ],
      },
      {
        heading: "Surrogacy",
        paragraphs: [
          "Surrogacy means another person gives birth to a baby for you. It might be an option if you or a partner cannot carry a pregnancy, using the surrogate's own eggs, your own eggs or embryos, or donor eggs or embryos.",
          "Surrogacy is legal in the UK but is not available on the NHS. You cannot pay a surrogate except for reasonable expenses, and surrogacy agreements cannot be enforced by law.",
          "The surrogate is the child's legal parent at birth. Legal parenthood can be transferred by parental order or adoption after the child is born.",
        ],
      },
      {
        heading: "Adoption and fostering",
        paragraphs: [
          "Adoption means becoming the legal parent of a child, and fostering means looking after a child who cannot stay with their own family. People from all backgrounds can apply, and you do not have to be in a relationship or married.",
          "In England and Wales, you may be able to adopt if you are 21 or over, and there is no upper age limit. You can apply through a local authority or an adoption or fostering agency, and you will have an assessment with a social worker.",
        ],
      },
      {
        heading: "Co-parenting, or not having children",
        paragraphs: [
          "Co-parenting can mean an agreement to conceive and raise a child with someone who is not your partner. The laws can be complicated, so it is advisable to get legal advice at an early stage.",
          "Some people decide not to have children. There is no right or wrong way to feel, and your GP may be able to arrange a counsellor if you want to talk.",
        ],
      },
    ],
    helps: [
      "Talk to a counsellor about the issues involved in each option.",
      "Ask your fertility clinic what donor options are available to you.",
      "Get legal advice early if you are thinking about surrogacy or co-parenting.",
      "Ask your local council or an adoption agency about adopting or fostering.",
      "Talk to your GP if you would like a counsellor to talk to about not having children.",
    ],
    tryThisWeek: [
      "Ask about counselling.",
      "Ask your clinic about donors.",
      "Contact your council about adoption.",
    ],
    ask: "Which other routes to becoming a parent might suit my situation, and can I have counselling to think them through?",
    interactive: {
      kind: "flip-cards",
      title: "Other ways to become a parent",
      intro: "Turn a card to see what each route involves.",
      cards: [
        { id: "donor", front: "Donor eggs or sperm", when: "If nothing was stored", back: "Donors are checked and tested. A child can find out the donor's identity at 18." },
        { id: "embryos", front: "Donor embryos", when: "With fertility treatment", back: "Donated embryos are used with fertility treatment. There may be a wait for a suitable donor." },
        { id: "surrogacy", front: "Surrogacy", when: "If you cannot carry a pregnancy", back: "Legal in the UK but not on the NHS. A surrogate can only be paid reasonable expenses." },
        { id: "adoption", front: "Adoption", when: "Aged 21 or over, in England and Wales", back: "You become a child's legal parent. Apply through a council or an agency, with an assessment." },
        { id: "fostering", front: "Fostering", when: "Short or long term", back: "Looking after a child who cannot stay with their own family, arranged through a council or agency." },
        { id: "coparenting", front: "Co-parenting", when: "With someone who is not your partner", back: "An agreement to conceive and raise a child together. Get legal advice at an early stage." },
      ],
    },
    sources: [MAC_FERT_TREAT, MAC_FERT, NHS_LGBT_WAYS, GOV_ADOPTION, GOV_SURROGACY, NHS_INFERT_TREAT, CRUK_WOMEN],
    quiz: {
      question: "At what age can a child born from donation find out the donor's identity?",
      options: [{ text: "18", right: true }, { text: "Never" }, { text: "10" }],
      why: "A child born from donation is entitled to find out the donor's identity when they are 18.",
    },
  },
  {
    id: "fert-feelings",
    kicker: "Feelings",
    question: "How do I cope with my feelings about fertility?",
    hook: "Some people feel devastated, some feel cancer matters more, and some feel fine at first and struggle later. All of these are normal.",
    short: "It can be very difficult to learn that you might not be able to have children, and people react in many different ways. Talking to someone close, a counsellor or people who have been through the same can help. If low feelings last more than 2 weeks, talk to your doctor or nurse, and if you are struggling right now, help is there day and night.",
    sections: [
      {
        heading: "Many different reactions",
        paragraphs: [
          "It can be very difficult to learn that you might no longer be able to have children, and people react in different ways. You might feel devastated, or you might accept it and feel that beating cancer is more important.",
          "Some people accept the news to begin with, but find it difficult to cope with once treatment is over. There is no right or wrong way to feel.",
        ],
      },
      {
        heading: "Loss and grief",
        paragraphs: [
          "Not being able to have children might make you feel like you have lost a part of yourself. You might feel less masculine or less feminine, or very sad or angry that the drugs have changed your body.",
          "Finding the right time to tell a new partner can be extremely hard. It is normal to feel anxious, afraid or low about how cancer has affected your life, and it can help to know that you are not alone.",
        ],
      },
      {
        heading: "When fertility treatment is hard",
        paragraphs: [
          "Fertility treatment can be stressful, and hard physically as well as emotionally. It is upsetting if it does not work, and some people decide not to try again, while others think about other options or continue.",
          "Sometimes moral, cultural or religious views about fertility treatment can make decisions more complicated.",
        ],
      },
      {
        heading: "Talking helps",
        paragraphs: [
          "It can help to talk to a close friend or relative, or to someone outside your circle of family and friends. Talking to people in a similar position may help you feel less isolated.",
          "Fertility clinics have a counsellor you can talk to, and your GP or cancer doctor can arrange counselling. You can also refer yourself to NHS talking therapies if you are registered with a GP and aged 18 or over, or 16 or over in some areas.",
          "Feelings of sadness and loss often improve as you recover. But if low feelings go on for more than 2 weeks, talk to your doctor or nurse, as depression is common and there are many things that can help.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you have any thoughts about self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment. If you would rather not talk on the phone, you can text SHOUT to 85258.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Talk to a close friend, a relative or someone outside your circle about how you feel.",
      "Ask your healthcare team about counselling and support groups.",
      "Talk to the counsellor at your fertility clinic.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell someone close how you feel.",
      "Ask about counselling.",
      "Keep Samaritans' 116 123 handy.",
    ],
    ask: "Could I see a counsellor who specialises in fertility problems, and are there support groups near me?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor or nurse",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: ["Feeling low or sad most of the time", "Losing interest in things I used to enjoy", "Changes in my sleep, eating or concentration", "Feeling helpless or vulnerable", "Problems starting or finishing tasks"],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [CRUK_COPING, MAC_FERT, MAC_TREATMENTS, MAC_DEPRESSION, MAC_FERT_TREAT, NHS_TALKING, NHS_URGENT, NHS_SUICIDAL, SAMARITANS, CRUK_SINGLE],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, they always pass" }],
      why: "If low feelings go on for more than 2 weeks, talk to your doctor or nurse, as depression is common and there are many things that can help.",
    },
  },
  {
    id: "fert-relationships",
    kicker: "Relationships",
    question: "How can fertility worries affect my relationship?",
    hook: "Partners often hide their fears to protect each other. Talking, and deciding things together, can bring you closer.",
    short: "Cancer and fertility worries affect both partners, and talking openly can help you understand each other. Decisions about stored embryos and NHS funding involve you both, and there are simple ways to stay close during treatment. If you are single, take your time before sharing your news, and know that support is there.",
    sections: [
      {
        heading: "It affects you both",
        paragraphs: [
          "A cancer diagnosis affects both you and your partner, so you should both try to talk about how you feel. Partners often try to protect each other by hiding their fears and worries, but talking may help you understand each other and feel closer.",
          "If you have a partner, it might help if they join in discussions about fertility. Then you can both learn the facts and talk over your feelings and choices for the future.",
        ],
      },
      {
        heading: "Decisions you make together",
        paragraphs: [
          "If you are planning a pregnancy with a partner, they should also be involved at the fertility clinic. The NHS funding rules apply to both you and any partner you have treatment with.",
          "A partner who provided sperm for stored embryos has equal rights in deciding what happens to them, and if they withdraw consent, the embryos cannot be used. Even if you have a partner, you can still choose to freeze your unfertilised eggs.",
        ],
      },
      {
        heading: "Closeness during treatment",
        paragraphs: [
          "It might be helpful to put intercourse on hold for a while and focus on showing each other affection. Ask your partner to guide you, and be prepared to go at their pace.",
          "It is not known for sure whether cancer drugs can be passed on through semen or vaginal fluids, so some doctors advise a barrier method, such as condoms, during treatment and for about a week after. This does not mean you have to avoid being intimate.",
        ],
      },
      {
        heading: "If you are single",
        paragraphs: [
          "Finding the right time to tell a new partner that you may not be able to have children can be extremely hard. Talking about these issues is very important for you both.",
          "Take your time, and do not feel you have to rush into a new relationship. With the right person, most people will be able to have a loving and caring relationship.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "Talking to a counsellor or sex therapist can help you find ways of overcoming difficulties, alone or with your partner. A specialist fertility counsellor at the clinic can support you and any partner.",
          "Many problems with sex after cancer get better with time and a little patience. You can call the Cancer Research UK nurses free on 0808 800 4040, Monday to Friday, 9am to 5pm.",
        ],
      },
    ],
    helps: [
      "Talk openly with your partner about how you both feel.",
      "Ask your partner to join in discussions about fertility.",
      "Ask your team whether to use a barrier method during and after treatment.",
      "Take your time before sharing fertility news with a new partner.",
      "See a counsellor or sex therapist, alone or together.",
    ],
    tryThisWeek: [
      "Share one worry with your partner.",
      "Ask about barrier methods.",
      "Ask about counselling together.",
    ],
    ask: "Can my partner come to my fertility appointments, and is counselling available for us both?",
    interactive: {
      kind: "scenarios",
      title: "Moments between you",
      scenarios: [
        {
          id: "hiding",
          situation: "You both keep your fertility worries to yourselves, to protect each other.",
          options: [{ text: "Talk about how you both feel", best: true }, { text: "Keep hiding them" }],
          why: "Partners often try to protect each other by hiding their fears and worries, but talking may help you understand each other and feel closer.",
        },
        {
          id: "intimacy",
          situation: "You want to be intimate during chemotherapy.",
          options: [{ text: "Ask about using a barrier method", best: true }, { text: "Avoid all closeness" }],
          why: "Some doctors advise a barrier method, such as condoms, during treatment and for about a week after. This does not mean you have to avoid being intimate.",
        },
        {
          id: "new",
          situation: "You have started seeing someone new and wonder when to mention fertility.",
          options: [{ text: "Take your time, then talk about it", best: true }, { text: "Never bring it up" }],
          why: "Finding the right time can be extremely hard. Talking about these issues is very important for you both.",
        },
        {
          id: "embryos",
          situation: "You are deciding with your partner whether to freeze eggs or embryos.",
          options: [{ text: "Know that a partner has equal rights over embryos", best: true }, { text: "Assume only you decide" }],
          why: "A partner who provided sperm for stored embryos has equal rights in deciding what happens to them. You can still choose to freeze unfertilised eggs.",
        },
      ],
    },
    sources: [MAC_RELATIONSHIPS, CRUK_PARTNERS, CRUK_SINGLE, CRUK_COPING, MAC_PRESERVE, MAC_FERT_TREAT],
    quiz: {
      question: "How long after treatment do some doctors advise a barrier method?",
      options: [{ text: "For about a week", right: true }, { text: "For 10 years" }, { text: "Not at all" }],
      why: "Some doctors advise a barrier method, such as condoms, during treatment and for about a week after.",
    },
  },
  {
    id: "fert-contraception",
    kicker: "Contraception",
    question: "Do I need contraception during and after treatment?",
    hook: "Even if treatment may affect fertility, a pregnancy can still happen, and some treatments could harm a developing baby.",
    short: "Some cancer treatments can damage sperm or eggs, or harm a baby developing in the womb, so contraception matters even if fertility may be affected. Barrier methods such as condoms are usually best during chemotherapy, and contraception is needed for a time afterwards too. Your cancer doctor or nurse can say which type is best for you.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "Even if your cancer treatment could damage fertility, your cancer doctor may talk to you about contraception. Some treatments can damage sperm or eggs, and some are harmful to a baby developing in the womb.",
          "Sometimes your periods stop during chemotherapy but you are still producing eggs, so you could still get pregnant. It is important to avoid pregnancy during chemotherapy, as the drugs could harm a developing baby.",
        ],
      },
      {
        heading: "During treatment",
        paragraphs: [
          "It is important to use contraception during treatment if you could get pregnant or could get a partner pregnant. If you think you could be pregnant, tell your care team as soon as possible.",
          "During chemotherapy, it is usually best to use barrier methods, such as condoms or the cap. Ask your cancer doctor or specialist nurse which type is best for you.",
          "You should also avoid pregnancy during radiotherapy, as it might harm the baby.",
        ],
      },
      {
        heading: "After treatment",
        paragraphs: [
          "With cancer drugs such as chemotherapy or immunotherapy, contraception is needed for a period of time after treatment too. The exact time depends on the drug, so ask your doctor, nurse or pharmacist, and some doctors advise a barrier method for about a week after treatment.",
          "Hormonal therapy for breast cancer can make periods change or stop, but it is still important to use contraception, because the drugs may harm a baby developing in the womb.",
          "If you have had breast cancer, your doctor might advise you not to take the contraceptive pill, because the hormones in it might affect the cancer.",
        ],
      },
      {
        heading: "Getting contraception",
        paragraphs: [
          "Contraception services are free and confidential on the NHS. You can get contraception from sexual health clinics, some GP surgeries and most pharmacies.",
          "Your doctor or nurse talks about things like this every day, so there is no need to be embarrassed about asking which type is best for you.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor or nurse which contraception is best during treatment.",
      "Use a barrier method, such as condoms, if your team advises it.",
      "Ask how long to keep using contraception after treatment ends.",
      "Tell your care team as soon as possible if you think you could be pregnant.",
      "Get free contraception from a sexual health clinic, GP surgery or pharmacy.",
    ],
    tryThisWeek: [
      "Ask which method suits you.",
      "Ask how long to keep using it.",
      "Find a free contraception service.",
    ],
    ask: "Which contraception is safest with my treatment, and how long after treatment should I keep using it?",
    interactive: {
      kind: "scenarios",
      title: "Contraception moments",
      scenarios: [
        {
          id: "periods",
          situation: "Your periods have stopped during chemotherapy.",
          options: [{ text: "Keep using reliable contraception", best: true }, { text: "Assume you cannot get pregnant" }],
          why: "Sometimes your periods stop during chemotherapy but you are still producing eggs, so you could still get pregnant.",
        },
        {
          id: "pill",
          situation: "You have had breast cancer and are thinking about the pill.",
          options: [{ text: "Ask your doctor first", best: true }, { text: "Start it without asking" }],
          why: "If you have had breast cancer, your doctor might advise you not to take the contraceptive pill, because the hormones in it might affect the cancer.",
        },
        {
          id: "finished",
          situation: "Your last chemotherapy was last week.",
          options: [{ text: "Ask how long to keep using contraception", best: true }, { text: "Stop now treatment is over" }],
          why: "Contraception is needed for a period of time after treatment too. The exact time depends on the drug.",
        },
        {
          id: "pregnant",
          situation: "You think you might be pregnant during treatment.",
          options: [{ text: "Tell your care team as soon as possible", best: true }, { text: "Wait and see" }],
          why: "If you think you could be pregnant, tell your care team as soon as possible.",
        },
      ],
    },
    sources: [MAC_FERT, MAC_CHEMO_SE, CRUK_PARTNERS, CRUK_WOMEN, CRUK_MEN, NHS_CHEMO, MAC_TREATMENTS, NHS_CONTRA_WHERE, TCT_FERT],
    quiz: {
      question: "Why is contraception important even if treatment may affect fertility?",
      options: [{ text: "Some treatments could harm a developing baby", right: true }, { text: "It is not important" }, { text: "It makes treatment work better" }],
      why: "Some treatments can damage sperm or eggs, and some are harmful to a baby developing in the womb.",
    },
  },
  {
    id: "fert-support",
    kicker: "Support",
    question: "Where can I get support with fertility after cancer?",
    hook: "Your own team, the fertility clinic's counsellor and a handful of charities and helplines can all help you think things through.",
    short: "You can talk to your cancer doctor, GP or specialist nurse about fertility at any stage, and fertility clinics have counsellors. Macmillan and Cancer Research UK run free helplines, and the Cancer, Fertility and Me decision aid can help before treatment. Fertility Network UK has closed its direct support, so other organisations are listed here.",
    sections: [
      {
        heading: "Your own team first",
        paragraphs: [
          "You can talk to your cancer doctor, GP or specialist nurse at any stage before, during or after cancer treatment. If your doctor or nurse has not talked to you about fertility and you want information, it is important to ask them.",
          "Many hospitals have specialist nurses who can offer support, and your GP or cancer doctor can arrange a counsellor if you prefer.",
        ],
      },
      {
        heading: "At the fertility clinic",
        paragraphs: [
          "Fertility clinics have a counsellor you can talk to. If you have IVF, your clinic should offer you a chance to speak to a counsellor before, during and after treatment.",
          "The British Infertility Counselling Association has information about counselling for fertility issues, and a database of specialist fertility counsellors.",
        ],
      },
      {
        heading: "Helplines and online help",
        paragraphs: [
          "You can call the Macmillan Support Line free on 0808 808 00 00, 7 days a week, 8am to 8pm, or join its Online Community to talk to others.",
          "The Cancer Research UK information nurses are on 0808 800 4040, Monday to Friday, 9am to 5pm.",
          "Cancer, Fertility and Me is a website written by fertility doctors, specialist nurses, psychologists and others. It helps people think about preserving their fertility before cancer treatment starts.",
        ],
      },
      {
        heading: "Other organisations",
        paragraphs: [
          "The Human Fertilisation and Embryology Authority, the UK fertility regulator, has information about fertility preservation, treatments and clinics, including for LGBTQ+ people. The Donor Conception Network gives information and support about donor conception.",
          "Fertility Network UK, which some pages still mention, moved into managed closure in May 2026 and no longer accepts new requests for direct support. It now points people to organisations such as Fertility Action, Nexys Fertility for men and the British Infertility Counselling Association.",
          "For adoption, Adoption UK and Action for Children can help, and Surrogacy UK and Brilliant Beginnings give support about surrogacy.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor or nurse about fertility if they have not raised it.",
      "Ask your fertility clinic about its counsellor.",
      "Call the Macmillan Support Line free on 0808 808 00 00.",
      "Call the Cancer Research UK nurses on 0808 800 4040.",
      "Try the Cancer, Fertility and Me decision aid before treatment starts.",
    ],
    tryThisWeek: [
      "Ask your nurse about fertility.",
      "Ask the clinic about counselling.",
      "Call the Macmillan Support Line.",
    ],
    ask: "Who in my team can I talk to about fertility, and can you refer me to a fertility counsellor?",
    interactive: {
      kind: "flip-cards",
      title: "Who can help",
      intro: "Turn a card to see what each one offers.",
      cards: [
        { id: "team", front: "Your cancer team or GP", when: "Before, during or after treatment", back: "Can explain the risks, refer you to a fertility clinic and arrange a counsellor." },
        { id: "clinic", front: "Fertility clinic counsellor", when: "Around any fertility treatment", back: "Supports you and any partner as you think about the information and make decisions." },
        { id: "macmillan", front: "Macmillan Support Line", when: "7 days a week, 8am to 8pm", back: "Free on 0808 808 00 00. You can talk to cancer specialists about anything." },
        { id: "cruk", front: "Cancer Research UK nurses", when: "Monday to Friday, 9am to 5pm", back: "Freephone 0808 800 4040, for support and information." },
        { id: "cfm", front: "Cancer, Fertility and Me", when: "Before cancer treatment starts", back: "An online decision aid to help you think about preserving your fertility." },
        { id: "bica", front: "Infertility counsellors (BICA)", when: "To find a counsellor", back: "The British Infertility Counselling Association has a database of specialist fertility counsellors." },
      ],
    },
    sources: [MAC_FERT, NHS_IVF, CRUK_PARTNERS, CRUK_COPING, CFM, FNUK_CLOSURE, MAC_FERT_TREAT],
    quiz: {
      question: "When can you talk to your team about fertility?",
      options: [{ text: "At any stage before, during or after treatment", right: true }, { text: "Only before treatment" }, { text: "Only once treatment has ended" }],
      why: "You can talk to your cancer doctor, GP or specialist nurse at any stage before, during or after cancer treatment.",
    },
  },
];
