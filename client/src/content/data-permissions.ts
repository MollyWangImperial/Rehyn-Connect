// The Data and permissions screen, word for word from "Data and permissions screen · Version 2.0"
// (Rehyn Connect settings screen specification and final copy). Changes to consent wording need
// legal review. The screen itself is components/DataPermissions.tsx.

export const DATA_PERMISSIONS_VERSION = "2.0";

export const DATA_SCREEN = {
  title: "Data and permissions",
  intro: "Control how Rehyn Connect uses your information. You can change these at any time.",
  health: {
    heading: "Your health information",
    label: "Allow Rehyn to use health information I share",
    text: "We never ask about your health. If you choose to share anything about it in your profile, posts, comments or messages, we need your permission to show it to the people you pick and to moderate the community to keep it safe.",
    off: "Turning this off removes the posts, comments, bio and messages you've shared, and you won't be able to post or message until you turn it back on. Your account, friends and settings stay.",
  },
  privacy: {
    heading: "Privacy",
    posts: { label: "Who can see my posts by default", note: "You can still choose the audience for each post." },
    messages: { label: "Who can message me" },
    suggest: { label: "Suggest my profile to other people", note: "When this is on, your profile may be suggested to people with similar interests." },
    online: { label: "Show when I’m online" },
    blocked: { label: "Blocked users", action: "Manage", note: "People you block can’t see your profile or posts, message you or join your groups." },
  },
  improving: {
    heading: "Improving the app",
    usage: { label: "Share usage statistics", tag: "Optional", note: "Helps us understand which features are used so we can improve Rehyn Connect. It never includes what you write in posts or messages. Everything works the same either way." },
    off: { title: "Turned off", text: "We won't collect usage statistics from now on. Everything in Rehyn Connect works exactly as before.", button: "Done" },
  },
  notifications: {
    heading: "Notifications",
    activity: { label: "Activity", note: "Messages, replies, friend requests and Sunday circle reminders." },
    updates: { label: "Updates about Rehyn", note: "Occasional emails about new features and what’s happening on Rehyn Connect. Nothing about your health is ever included." },
  },
  device: {
    heading: "Device permissions",
    manage: "Manage in device settings",
    photos: { label: "Photos", note: "Needed to share pictures in posts and messages." },
    camera: { label: "Camera", note: "Needed only if you want to take a photo to share." },
    notifications: { label: "Notifications", note: "Needed to send you activity notifications." },
  },
  safety: {
    heading: "Safety and support",
    report: "Report a problem",
    rules: "Community Rules",
    help: { label: "Need help now?", text: "Rehyn Connect isn’t an emergency service and isn’t monitored all the time. In an emergency, call 999. For urgent medical advice, call NHS 111. To talk to someone any time, call Samaritans free on 116 123." },
  },
  yourData: {
    heading: "Your data",
    download: { label: "Download my data", note: "Get a copy of the information Rehyn holds about you, in a format you can open and keep." },
    correct: { label: "Correct my information", note: "Tell us about anything that is wrong or out of date, and we will fix it." },
    delete: { label: "Delete my account and data", note: "Permanently close your account and delete your information. This cannot be undone." },
  },
  documents: {
    heading: "Documents and contact",
    privacy: "Privacy Notice",
    terms: "Terms of Use",
    rules: "Community Rules",
    sources: "Education content sources",
    contact: "Questions about your information: info@rehyn.com",
    complaint: "If you are unhappy with how we have handled your information, please tell us at info@rehyn.com. We will acknowledge your complaint within 30 days. You can also complain to the Information Commissioner’s Office at ico.org.uk.",
  },
  withdraw: {
    title: "Withdraw your agreement?",
    text: "If you continue, we’ll remove the posts, comments, bio and messages you’ve shared on Rehyn Connect, and you won’t be able to post, message or join chats until you agree again. Your account, friends and settings will stay.",
    alternative: "If you’d rather leave completely, you can delete your account instead.",
    confirm: "Withdraw and remove my content",
    cancel: "Cancel",
  },
  deleteAccount: {
    title: "Delete your account",
    text: "This deletes your account, profile, posts, comments and the messages you’ve sent. It cannot be undone.",
    more: "People you’ve shared with may still have their own copies, such as screenshots. We keep a limited record where we need it for safety or legal reasons, as the Privacy Notice explains.",
    confirm: "Delete everything",
    cancel: "Cancel",
  },
} as const;
