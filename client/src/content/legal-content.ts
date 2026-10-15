export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  /** Paragraphs that come after the bullets. */
  after?: string[];
};

export const LEGAL_VERSION = "2.0";
export const LEGAL_EFFECTIVE_DATE = "To be confirmed";

// The section text below reproduces the approved legal documents verbatim: Rehyn Connect Terms of
// Use v2.0 and Rehyn Connect Privacy Notice v2.0 (October 2026). Do not edit this wording without
// legal review. Bracketed values must be replaced with the real figures before release.

export const TERMS_INTRO =
  "Please read these Terms of Use before you use Rehyn Connect. They are a legal agreement between you and Rehyn Ltd. Section 2 contains important safety information and section 6 sets out our Community Rules. If you do not accept these Terms, do not use the Services.";

export const TERMS_SECTIONS: LegalSection[] = [
  {
    title: "1. Who we are and what these Terms cover",
    paragraphs: [
      '1.1 Rehyn Ltd, a company incorporated in England and Wales with company number 17417716 and registered office at 64 Woodnesborough Road, Sandwich, CT13 0AD, operates the Rehyn Connect mobile app, website and related services (together, the "Services"). Rehyn Ltd is referred to in these Terms as "Rehyn", "we" or "us", and the person using the Services is referred to as "you".',
      "1.2 These Terms, together with the Rehyn Connect Privacy Notice and the Community Rules in section 6, govern your access to and use of the Services. By creating an account or otherwise using the Services, you confirm that you accept these Terms.",
      "1.3 The Services are currently provided free of charge. If we introduce paid features in future, we will tell you first, and you will never be charged without agreeing.",
      "1.4 These Terms replace all earlier Rehyn terms of use.",
    ],
  },
  {
    title: "2. What Rehyn Connect is, and what it is not",
    paragraphs: [
      "2.1 Rehyn Connect is a community where people living with any health condition, and anyone interested in one, can meet others in similar situations, take part in group conversations and games, and read general information about health conditions.",
      "2.2 Rehyn Connect is not a healthcare service and is not a medical device. It does not diagnose, treat or monitor any condition, and it does not give medical advice. No user, moderator or member of Rehyn staff gives professional medical advice through the Services. What other users share reflects their own experiences and opinions.",
      "2.3 Always ask a doctor, pharmacist or other qualified health professional about your own health. Never ignore professional advice, delay seeking it, or stop or change any treatment because of something you have read or been told on Rehyn Connect.",
      "2.4 Rehyn Connect is not a crisis or emergency service. It is not monitored in real time, and we may not see a post or message for some time. In an emergency, or if you or someone else is in immediate danger, call 999. For urgent medical advice, call NHS 111. To talk to someone at any time, call Samaritans free on 116 123.",
      "2.5 If something on the Services worries you, use the Report button and we will look at it.",
    ],
  },
  {
    title: "3. Who can use Rehyn Connect",
    paragraphs: [
      "3.1 You must be 13 or over to create an account or use the Services.",
      "3.2 You must give your real date of birth when you sign up. We use it to apply extra protections for users under 18. Giving a false date of birth is a breach of these Terms.",
      "3.3 If you are 13 to 17, your account has extra protections that cannot be switched off while you are under 18, as described in the Privacy Notice. We recommend that you tell a parent, carer or trusted adult that you use Rehyn Connect.",
      "3.4 You may have only one account. You may not create an account if we have previously banned you from the Services.",
    ],
  },
  {
    title: "4. Your account",
    paragraphs: [
      "4.1 You must give accurate information when you create your account and keep it up to date. You are responsible for the security of your login details and for activity carried out through your account.",
      "4.2 Do not share your account with anyone else and do not use anyone else’s account. If you believe someone has accessed your account without permission, tell us promptly at info@rehyn.com.",
      "4.3 If a family member, carer or supporter helps you use the Services, they must follow these Terms. You remain responsible for what happens through your account, and you should only let someone help you if you are content for them to see the information in it.",
    ],
  },
  {
    title: "5. Your content",
    paragraphs: [
      '5.1 You may share posts, comments, photos and other images, messages and profile information through the Services ("Your Content"). You keep ownership of Your Content.',
      "5.2 You grant Rehyn a non exclusive, worldwide, royalty free licence to host, store, reproduce, display, transmit and process Your Content only as needed to operate the Services: to show it to the audience you choose, deliver your messages, moderate the Services, keep them secure and meet our legal obligations. This licence ends when Your Content is deleted, except for copies we keep for safety or legal reasons as described in the Privacy Notice.",
      "5.3 We do not use Your Content for advertising. We do not use Your Content to train artificial intelligence models without your separate consent.",
      "5.4 You are responsible for Your Content. You confirm that you have the right to share it, that any image showing another identifiable person is shared with that person’s permission, and that you will not share information about another person’s health without their permission.",
      "5.5 Other users can see the content you share with them, and they may copy or screenshot it. We cannot control what other users do with content you have shared, so please think before you share.",
      "5.6 Content posted by users is the responsibility of the user who posted it and reflects their own views, not ours. We do not check content before it appears, but we moderate the Services as described in section 7.",
    ],
  },
  {
    title: "6. Community Rules",
    paragraphs: ["6.1 Rehyn Connect only works if everyone feels safe. You must not post, send or share anything, or behave in any way, that:"],
    bullets: [
      "is illegal, or promotes, encourages or helps anyone to commit a crime;",
      "encourages, promotes or gives instructions for suicide, self harm or eating disorders;",
      "is pornographic or sexually explicit, or involves any sexual content or sexual contact relating to anyone under 18;",
      "bullies, harasses, threatens, intimidates or abuses anyone, or targets anyone because of their health condition, disability, age, race, religion, sex, sexual orientation, gender identity or any other characteristic;",
      "is hateful, violent or graphic, or glorifies violence;",
      "is a scam or fraud, or asks other users for money, gifts, financial details or passwords;",
      "offers to buy, sell, swap or give away medicines, prescription drugs, controlled drugs or other regulated products;",
      "tells others to stop, refuse or change medical treatment, or promotes unproven cures or treatments as a substitute for medical care;",
      "presents you as a medical professional or gives individual medical advice;",
      "shares someone else’s private information, including information about their health, without their permission;",
      "impersonates another person or organisation, or misrepresents your identity or your age;",
      "advertises or promotes products, services or businesses, or is spam;",
      "infringes copyright or anyone else’s rights; or",
      "contains viruses or other malicious code.",
    ],
    after: [
      "6.2 You must also not: create another account to avoid a suspension or ban; contact a user who has blocked you, including through another account; use bots, scrapers or other automated means to access the Services or collect information about users; misuse the Report button or make reports you know to be false; interfere with, overload, probe or attempt to gain unauthorised access to the Services or any system connected to them; copy, modify, reverse engineer or decompile the Services; or use the Services for any commercial purpose without our written permission.",
      "6.3 If you are an adult, you must not seek private contact with a user under 18 whom you do not know, and you must never ask a user under 18 for images, personal details or to continue a conversation away from Rehyn Connect.",
      "6.4 Group games on Rehyn Connect are for leisure only. They involve no real money, gambling or prizes.",
    ],
  },
  {
    title: "7. How we keep the community safe",
    paragraphs: [
      "7.1 You can report any post, comment, message or profile using the Report button, and you can block any user at any time.",
      "7.2 Our moderation team reviews reports and flags. We also use automated tools to analyse text and images shared on the Services to identify content that may break these Terms or the law. Flagged content may be hidden while a moderator reviews it. A person always makes the final decision to remove content or restrict an account.",
      "7.3 If content or behaviour breaks these Terms or the law, we may remove the content, limit who can see it, give a warning, restrict features, suspend your account or permanently ban you. We remove illegal content as quickly as we can. Where the law requires or allows it, we preserve content and report it to the police, the National Crime Agency or other authorities. Our response will be proportionate to the seriousness of the breach.",
      "7.4 We will tell you when we remove your content or restrict your account, and why, unless telling you would put someone at risk, prejudice an investigation or break the law.",
      "7.5 You can complain to us about content on the Services, about a moderation decision affecting you, or about how we meet our online safety duties, through the app or by emailing info@rehyn.com. You can appeal a decision to remove your content or restrict your account within 30 days of being told about it. Where possible, a different moderator will review the appeal. We will tell you the outcome, and if we find we got it wrong, we will restore your content or account.",
      "7.6 We apply these rules consistently to all users.",
      "7.7 Moderation helps keep the community safe but cannot guarantee that you will never see content that breaks these Terms. If you do, please report it.",
    ],
  },
  {
    title: "8. Education content",
    paragraphs: [
      "8.1 The education library contains general information about health conditions from publicly available sources, which we credit. Rehyn does not own that content and all rights in it remain with its source. Information from the NHS website is used under the Open Government Licence v3.0.",
      "8.2 Education content is general information only. It is not personal advice, it may not apply to you, and it may not always be complete or up to date. Check the original source and ask a qualified health professional about your own situation. The sources of education content do not endorse Rehyn Connect.",
      "8.3 The Services may contain links to other websites. We are not responsible for the content of those websites.",
    ],
  },
  {
    title: "9. Availability and changes",
    paragraphs: [
      "9.1 We aim to keep the Services available and working well, but we do not guarantee uninterrupted or error free access. We may change, update, suspend or withdraw all or part of the Services, including for security, maintenance, legal compliance or product development.",
      "9.2 Where a change materially affects how you use the Services, we will give you reasonable notice where it is practical to do so.",
      "9.3 We may update these Terms. Where a change is material, we will give you reasonable notice through the app, by email or by another appropriate method before it takes effect. If you continue to use the Services after that date, the updated Terms apply to you. If you do not accept them, you may stop using the Services and delete your account.",
    ],
  },
  {
    title: "10. Intellectual property",
    paragraphs: [
      "10.1 The Services, including their software, design, text, graphics and the Rehyn and Rehyn Connect names and logos, belong to Rehyn or its licensors and are protected by intellectual property law. Nothing in these Terms transfers any of those rights to you.",
      "10.2 We grant you a personal, limited, non transferable, non sublicensable and revocable right to use the Services for your own non commercial use, in accordance with these Terms.",
      "10.3 If you send us feedback or ideas about the Services, we may use them without restriction and without any obligation to you. This does not apply to your personal information, which is dealt with in the Privacy Notice.",
    ],
  },
  {
    title: "11. Ending your use of Rehyn Connect",
    paragraphs: [
      "11.1 You may stop using the Services at any time, and you may delete your account in the app or by emailing info@rehyn.com. The Privacy Notice explains what happens to your information when you do.",
      "11.2 We may suspend or end your access as described in section 7, or where it is reasonably necessary because of a breach of these Terms, a safety concern, suspected fraud or unlawful activity, a risk to the Services or other users, or a legal or regulatory requirement. Where it is reasonable and lawful to do so, we will tell you why, and you may appeal as described in clause 7.5.",
      "11.3 Clauses 5.4, 10, 12, 13 and 14, and any other provision intended to survive, continue to apply after your use of the Services ends.",
    ],
  },
  {
    title: "12. Your statutory rights",
    paragraphs: [
      "12.1 Nothing in these Terms affects your rights under the Consumer Rights Act 2015 or any other law that applies to you and cannot be excluded by agreement. Where the law requires us to provide a digital service with reasonable care and skill, we will do so.",
    ],
  },
  {
    title: "13. Our liability to you",
    paragraphs: [
      "13.1 Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot lawfully be excluded or limited.",
      "13.2 Subject to clause 13.1, and to the fullest extent permitted by law, we are not liable for: content posted or sent by other users, or the actions of other users on or off the Services, except to the extent caused by our own negligence or breach of these Terms; loss that was not reasonably foreseeable when you started using the Services; loss of profit, revenue, business or opportunity; loss or corruption of data beyond our reasonable control; or loss arising because you relied on content from other users or the education library in circumstances where a reasonable person would have sought professional or emergency help.",
      "13.3 Subject to clause 13.1, and because the Services are supplied free of charge, our total liability to you in connection with the Services is limited to £100.",
      "13.4 You are responsible for the decisions you make about your own health.",
    ],
  },
  {
    title: "14. General",
    paragraphs: [
      "14.1 These Terms and the Privacy Notice are the entire agreement between you and Rehyn about the Services.",
      "14.2 If any provision is found to be invalid or unenforceable, the rest continues in force.",
      "14.3 If we do not immediately enforce a right, that does not mean we have given it up.",
      "14.4 You may not transfer your rights under these Terms. We may transfer ours to a successor to our business, and we will tell you if we do.",
      "14.5 A person who is not a party to these Terms has no right under the Contracts (Rights of Third Parties) Act 1999 to enforce any of them.",
    ],
  },
  {
    title: "15. Contact, complaints and governing law",
    paragraphs: [
      "15.1 For questions, complaints or support, contact info@rehyn.com. To report content or a user, use the Report button in the app. The Services are not monitored in real time, so never rely on them for urgent help.",
      "15.2 These Terms and any dispute or claim arising out of or in connection with them, including non contractual disputes, are governed by the law of England and Wales.",
      "15.3 The courts of England and Wales have exclusive jurisdiction, except that if you live in Scotland or Northern Ireland, you may also bring proceedings in your local courts.",
    ],
  },
];

/** The Community Rules, as section 6 of the Terms of Use, for the places that link to them. */
export const COMMUNITY_RULES: LegalSection = TERMS_SECTIONS[5];

export const PRIVACY_INTRO =
  "This notice explains what personal information Rehyn Connect collects, why we use it, who can see it, how long we keep it and what rights you have. Rehyn Ltd is the controller of that information. This notice replaces all earlier Rehyn privacy notices.";

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    title: "1. The short version",
    paragraphs: [],
    bullets: [
      "What Rehyn Connect is. A free community where people living with any health condition, and anyone interested in one, can meet others in similar situations, take part in group conversations and games, and read general information about conditions.",
      "We never ask about your health. You never have to tell us, or anyone else, what condition you have. Anything you share is your choice.",
      "Who sees what you share. Only the audience you choose for each post, message or group.",
      "Keeping the community safe. Our moderators, helped by automated tools, review content that is reported or flagged. A person always makes the final decision to remove content or restrict an account.",
      "Selling and advertising. We do not sell your personal information and we do not use it for advertising.",
      "Your control. You can delete your posts, your messages or your whole account in the app at any time.",
    ],
  },
  {
    title: "2. Who we are",
    paragraphs: [
      "2.1 Rehyn Ltd, a company registered in England and Wales with company number 17417716 and registered office at 64 Woodnesborough Road, Sandwich, CT13 0AD, is the controller of the personal information described in this notice. We are registered with the Information Commissioner’s Office under registration number [ICO registration number].",
      "2.2 For any privacy question, to exercise your rights or to make a complaint, contact info@rehyn.com.",
      '2.3 This notice applies to the Rehyn Connect mobile app, the Rehyn Connect website and any related services (together, the "Services").',
    ],
  },
  {
    title: "3. The information we collect",
    paragraphs: ["Information you give us"],
    bullets: [
      "Account information: email address, username, password (stored in encrypted form), date of birth and account settings.",
      "Profile information: display name, profile photo and bio. These are all optional.",
      "Your content: posts, comments, photos and other images, and messages you send in private messages, group chats, The lounge, Sunday circle and group games.",
      "Information about your health and other sensitive information: we never ask for it, but you may choose to share information about your physical or mental health in your profile or your content. You may also share other sensitive information, such as your religion or sexual orientation. The law calls this special category data. Section 5 explains how we protect it.",
      "Reports and appeals: reports you make about content or other users, and appeals you make against our moderation decisions.",
      "Communications: messages, support requests and feedback you send us.",
    ],
    after: [
      "Information the Services generate",
      "Connections and activity: your friends, people you have blocked, groups you belong to, games you take part in, and the dates and times of your activity.",
      "Moderation records: flags raised about your content or account by automated tools or other users, and the decisions our moderators take.",
      "Consent records: what you agreed to or declined, which version of the wording you saw, and when.",
      "Technical information: app version, device model, operating system, language, time zone, IP address, crash reports, error logs and security records.",
      'Usage statistics: how features of the Services are used, collected only if you switch on "Share usage statistics" in Settings.',
      "Information from other people",
      "Other users may mention you, reply to you, send you messages or report your content. Information about you may reach us in that way.",
      "Information we do not collect",
      "We do not ask for your diagnosis, medical records or any details of your treatment. We do not collect your precise location. We only access your camera or photos when you choose to share an image.",
    ],
  },
  {
    title: "4. How and why we use your information",
    paragraphs: [
      "This section is set out purpose by purpose. For each purpose we identify the lawful basis under Article 6 UK GDPR and, where special category data is involved, the additional condition under Article 9 UK GDPR.",
      "a) Creating and running your account",
      "What we do: Register you, keep your account secure, apply your settings, send you messages about your account and provide support.",
      "Lawful basis: Article 6(1)(b), performance of our contract with you (the Terms of Use).",
      "b) Providing the community features",
      "What we do: Show your profile and content to the audience you choose, deliver your messages, run The lounge, Sunday circle, group chats and group games, and show you content from other users.",
      "Lawful basis: Article 6(1)(b), performance of our contract with you.",
      "Special category data: Article 9(2)(a), your explicit consent, given separately when you sign up or before you first post (see section 5).",
      "c) Keeping the community safe",
      "What we do: Use automated tools to flag content that may be harmful or illegal, review reports and flags, remove content, warn, restrict, suspend or ban accounts, handle complaints and appeals, protect children, and report illegal content to the authorities where required.",
      "Lawful basis: Article 6(1)(c), legal obligation, including our duties under the Online Safety Act 2023, and Article 6(1)(f), our legitimate interest in keeping users safe.",
      "Special category data: Article 9(2)(a), your explicit consent, which covers moderation. Where moderation is needed to prevent or detect unlawful acts or to safeguard children or people at risk, we also rely on Article 9(2)(g), substantial public interest, under paragraphs 10 and 18 of Schedule 1 to the Data Protection Act 2018.",
      "d) Keeping the Services secure and working",
      "What we do: Diagnose faults, prevent and investigate misuse, fraud and security incidents, and monitor performance.",
      "Lawful basis: Article 6(1)(f), our legitimate interest in operating a secure and reliable service. We use technical information for this, not the content of your posts or messages, wherever that is possible.",
      "e) Usage statistics (optional)",
      "What we do: Understand how features are used so we can improve the Services. Usage statistics never include the content of your posts or messages.",
      "Lawful basis: Article 6(1)(a), your consent, which you can give or withdraw at any time in Settings.",
      "f) Sending you updates (optional)",
      "What we do: Send occasional emails about Rehyn Connect. They never contain information about your health.",
      "Lawful basis: Article 6(1)(a), your consent. You can unsubscribe at any time from any email or in Settings.",
      "g) Meeting legal obligations and defending legal claims",
      "What we do: Keep records we are required to keep, respond to lawful requests from regulators, police and courts, and establish or defend legal claims.",
      "Lawful basis: Article 6(1)(c), legal obligation, and Article 6(1)(f), legitimate interests. For special category data, Article 9(2)(f), legal claims, and Article 9(2)(g), substantial public interest, under Schedule 1 to the Data Protection Act 2018.",
      "h) Protecting someone from serious harm",
      "What we do: Contact emergency services or share information where we reasonably believe there is a serious risk to someone’s life or safety.",
      "Lawful basis: Article 6(1)(d), vital interests, and Article 9(2)(c) for special category data. This is exceptional. Rehyn Connect is not monitored in real time and you must never rely on it for urgent help.",
    ],
  },
  {
    title: "5. Information about your health",
    paragraphs: [
      "5.1 Rehyn Connect is a community for people living with health conditions and anyone who wants to learn about them. We never ask you what condition you have, and you never have to tell anyone.",
      "5.2 If you choose to share information about your health, or other special category data, we use it only to show it to the people you choose and to moderate the community to keep everyone safe. We rely on your explicit consent to do this. We ask for that consent separately, on its own, with the box unticked, and accepting the Terms of Use is never treated as that consent.",
      "5.3 Without that consent you can still create an account, read the education library and view content, but you cannot post, comment, send messages or join chats, because those features involve sharing information that may be about your health.",
      "5.4 You can withdraw your consent at any time in Settings, then Data and permissions, then Your health information. If you do, we hide the posts, comments, bio and messages you have shared straight away and delete them within 30 days, and you will not be able to post until you agree again. Withdrawing consent does not affect anything we did lawfully before you withdrew it, and we may keep moderation records as described in section 10.",
      '5.5 Please think before you share. Anything you share with other people can be seen, copied or screenshotted by them, and we cannot control what they do with it. Use the "Friends" or "Just me" settings for anything you want to keep close.',
      "5.6 We never use information about your health for advertising and we never sell it. We do not use your content to train artificial intelligence models. If that ever changes, we will ask for your separate consent first.",
    ],
  },
  {
    title: "6. Who can see your information",
    paragraphs: [],
    bullets: [
      "Your profile: your username and profile photo can be seen by other users. Your display name and bio are shown according to your settings. Your date of birth is never shown to anyone.",
      'Your posts: you choose the audience for each post: "Everyone" (all Rehyn Connect users), "Friends" or "Just me". The default is "Friends".',
      "Messages and group chats: visible to the people taking part in that conversation.",
      "The lounge and Sunday circle: visible to everyone who takes part in that space.",
      "Moderators: our moderators can see content that has been reported or flagged, including private messages and group chat messages. Access is limited to named moderators, logged and subject to confidentiality obligations.",
      "Users under 18: have extra protections, described in section 11.",
    ],
  },
  {
    title: "7. Who we share information with",
    paragraphs: ["We do not sell your personal information and we do not share it for advertising. We share it only in these situations:"],
    bullets: [
      "Rehyn personnel and moderators who need access to operate, support, moderate or secure the Services, under confidentiality obligations and access controls.",
      "Service providers who process information on our behalf under a written contract that meets Article 28 UK GDPR, for example cloud hosting, storage, content moderation tools, email delivery and error reporting. They may use your information only on our instructions and not for their own purposes. A current list is available on request from info@rehyn.com.",
      "Professional advisers such as lawyers, accountants, auditors and insurers, where they need it and under a duty of confidence.",
      "Regulators, law enforcement, courts and other authorities, including Ofcom, the Information Commissioner’s Office and the police, where we are required or permitted by law. We report child sexual exploitation and abuse content to the National Crime Agency or other authorities as the law requires.",
      "Emergency services, where we reasonably believe someone’s life or safety is at serious risk.",
      "A buyer or successor, in connection with a reorganisation, investment, merger or sale of our business or assets, subject to appropriate protections and to this notice continuing to apply.",
      "Anyone else, where you ask us to or agree to it.",
    ],
    after: ["Apple and Google process some information when you download the app from their stores, under their own privacy policies."],
  },
  {
    title: "8. Automated tools and moderation",
    paragraphs: [
      "8.1 We use automated tools to analyse text and images shared on the Services to identify content that may break our Community Rules or the law.",
      "8.2 When a tool flags content, the content may be hidden while a moderator reviews it. A person always makes the final decision to remove content or restrict an account, and you can appeal any decision as explained in the Terms of Use.",
      "8.3 We do not make decisions about you based solely on automated processing that produce legal effects or similarly significant effects. If that ever changes, we will tell you and explain your rights before it takes effect.",
      "8.4 Providers of our automated tools process content only on our instructions, under a written contract, and may not use it for their own purposes, including training their own models.",
    ],
  },
  {
    title: "9. Where your information is held",
    paragraphs: [
      "9.1 Your information is stored and processed in [the United Kingdom or the European Economic Area: confirm and keep accurate].",
      "9.2 We only transfer personal information outside the United Kingdom, or allow it to be accessed from outside the United Kingdom, where the law allows and with appropriate safeguards in place, such as UK adequacy regulations or the International Data Transfer Agreement or Addendum, together with a transfer risk assessment. You can ask us for details.",
    ],
  },
  {
    title: "10. How long we keep information",
    paragraphs: [],
    bullets: [
      "Account and profile information: kept for as long as your account is open, with no time limit. If you close your account, we delete it within 30 days.",
      "Your content (posts, comments, photos and messages): kept for as long as your account is open, with no time limit, so your posts and conversations stay available to you for as long as you want them. We only delete your content when you delete it, when you close your account, when you withdraw consent as described in section 5, or when a moderator removes it. Once you delete something, we remove it from the Services straight away and from our systems within 30 days.",
      "Content removed by our moderators: removed from view straight away. We keep a record of it for 12 months so we can handle appeals, deal with repeated abuse and respond to lawful requests, and longer only where an investigation or legal claim requires it.",
      "Reports, flags and moderation decisions: 12 months after the decision, and longer only where an investigation or legal claim requires it.",
      "Consent records: for as long as your account is open and for 6 years afterwards, so we can show what you agreed to and when.",
      "Technical and security logs: 90 days.",
      "Usage statistics: 14 months.",
      "Support messages: 2 years after the conversation ends.",
      "Marketing preferences: until you unsubscribe, after which we keep a record that you unsubscribed so we do not contact you again.",
    ],
    after: [
      "Deleted information is removed from our backups within [35] days. When a retention period ends we delete the information or irreversibly anonymise it so that it is no longer personal information. Messages you sent to other people are deleted from our systems in line with these periods, but other people may have kept their own copies, such as screenshots.",
    ],
  },
  {
    title: "11. Children and young people",
    paragraphs: [
      "11.1 You must be 13 or over to use Rehyn Connect. We ask for your date of birth when you sign up and do not create an account for anyone under 13. If we learn that a user is under 13, we close the account and delete their information.",
      "11.2 If you are 13 to 17, your account has extra protections that cannot be switched off while you are under 18: your profile is private, you are not suggested to other users, and only people you are connected with can send you messages. We never collect your precise location.",
      "11.3 If you are 13 or over, you can agree to the uses of your information described in this notice yourself. We explain them in plain language so they are easy to understand.",
      "11.4 Parents and carers can contact info@rehyn.com about a child’s account.",
    ],
  },
  {
    title: "12. Your rights",
    paragraphs: ["Under UK data protection law you have the right to:"],
    bullets: [
      "ask for a copy of the personal information we hold about you;",
      "ask us to correct information that is inaccurate or incomplete;",
      "ask us to delete your information, in the circumstances where that right applies;",
      "ask us to restrict how we use your information;",
      "object to processing based on our legitimate interests;",
      "ask for a portable copy of information you gave us, in a machine readable format; and",
      "withdraw consent at any time, where we rely on consent, without affecting the lawfulness of what we did before you withdrew it.",
    ],
    after: [
      "12.1 You can download your data, correct your information and delete your account in the app, in Settings, then Data and permissions. You can also exercise any right by emailing info@rehyn.com. We will respond within one month, and will tell you if we need longer because a request is complex. We may need to verify your identity first. Exercising your rights is free unless a request is manifestly unfounded or excessive.",
      "12.2 If you are unhappy with how we have handled your information, you can complain to us at info@rehyn.com. We will acknowledge your complaint within 30 days, look into it without undue delay, keep you updated and tell you the outcome.",
      "12.3 You also have the right to complain to the Information Commissioner’s Office at ico.org.uk, or by calling 0303 123 1113.",
    ],
  },
  {
    title: "13. Security",
    paragraphs: [
      "13.1 We use technical and organisational measures designed to protect your information, including encryption in transit and at rest, access controls and role based permissions, logging and monitoring, and confidentiality obligations for staff and moderators.",
      "13.2 No online service can be completely secure. Please protect your device and your login details, and tell us at info@rehyn.com if you think your account has been accessed without permission.",
      "13.3 If a personal data breach occurs that is likely to result in a risk to your rights and freedoms, we will report it to the Information Commissioner’s Office within 72 hours of becoming aware of it, and we will tell you directly where the risk to you is high.",
    ],
  },
  {
    title: "14. Cookies and similar technologies",
    paragraphs: [
      "14.1 The website and app use strictly necessary cookies and similar technologies to keep you signed in and keep the Services secure. These do not need your consent.",
      "14.2 We use any other cookies or similar technologies, including for usage statistics, only if you agree. You can change your choice at any time in the cookie settings on the website or in Settings in the app.",
    ],
  },
  {
    title: "15. Education content and links",
    paragraphs: [
      "The education library contains general information from publicly available sources, which we credit. When you follow a link to another website, that website’s own privacy policy applies. We do not share your information with the sources of education content.",
    ],
  },
  {
    title: "16. Changes to this notice",
    paragraphs: [
      "16.1 We may update this notice as the Services develop or the law changes. The effective date and version number at the top show the current version, and we keep previous versions available on request.",
      "16.2 Where a change is significant, we will tell you through the app, by email or by another appropriate method before it takes effect. If a change means we want to use your information for a new purpose that relies on consent, we will ask you again rather than assume.",
    ],
  },
];
