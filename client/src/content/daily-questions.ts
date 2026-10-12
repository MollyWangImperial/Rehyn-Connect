// The Daily question at the top of My community's feed ("Live thread"): one question a day from Rehyn, the same for
// everyone, with the community's answers coming in under it and the person's own answer pinned beneath. Each
// question has a key phrase (underlined on the card), a few starters to begin an answer from, and the answers of the
// example people in My community (as everywhere in this preview, they are examples), some with a tag for the choice
// they made. The meeting memo suggested taking the first prompt of the day from Krillion (krillion.me); its prompts
// load inside the game and are its own catalogue, so they would need its makers' permission (or a feed from them).
// With one, `dailyQuestion` is the single place to swap in that source.

import type { PersonId } from "./community-samples";

/** One example answer: who, what they said, the option they chose (with its colour) if the question has options, and hearts. */
export type DailyAnswer = { who: PersonId; text: string; tag?: { label: string; colour: string }; hearts: number };

export type DailyQuestionSpec = {
  /** "Colour", "This or that", "Picture", "Scale" or "Open answer". */
  kind: string;
  /** The question in three parts: before the key phrase, the key phrase, after it. */
  pre: string;
  key: string;
  post: string;
  /** In the answer box before the person writes ("Mine is…"). */
  placeholder: string;
  /** Answers to start from, with one tap (they fill the box; nothing is sent until Send). */
  starters: string[];
  answers: DailyAnswer[];
};

const tag = (label: string, colour: string) => ({ label, colour });

export const DAILY_QUESTIONS: readonly DailyQuestionSpec[] = [
  {
    kind: "Colour", pre: "Name a ", key: "colour", post: " that sums up your mood today.", placeholder: "Mine is…",
    starters: ["Sunny yellow", "Soft grey", "Sea blue", "Hard to say today"],
    answers: [
      { who: "anne", text: "Calm after a good night of sleep.", tag: tag("Sage", "#9DBFA6"), hearts: 5 },
      { who: "david", text: "Grey this morning, but brightening.", tag: tag("Storm", "#6F7C86"), hearts: 3 },
      { who: "priya", text: "Walked to the corner shop on my own!", tag: tag("Sunny", "#F2C44D"), hearts: 8 },
      { who: "joan", text: "Physio went better than expected.", tag: tag("Sky", "#7FB4DB"), hearts: 4 },
      { who: "margaret", text: "Quiet, steady, getting on with it.", tag: tag("Teal", "#2F8F83"), hearts: 2 },
      { who: "tomasz", text: "A bit fiery, in a good way.", tag: tag("Coral", "#E8836B"), hearts: 6 },
      { who: "samuel", text: "Somewhere between grey and gold.", hearts: 1 },
      { who: "liwei", text: "Tired, but peaceful.", tag: tag("Lavender", "#A99AD6"), hearts: 3 },
    ],
  },
  {
    kind: "This or that", pre: "Are you an ", key: "early bird", post: " or a night owl?", placeholder: "I am more of a…",
    starters: ["Early bird", "Night owl", "Depends on the day"],
    answers: [
      { who: "margaret", text: "Up with the blackbirds at five.", tag: tag("Early bird", "#F7DC8A"), hearts: 4 },
      { who: "tomasz", text: "Always have been, always will be.", tag: tag("Night owl", "#B9B4E0"), hearts: 6 },
      { who: "anne", text: "Ever since rehab started.", tag: tag("Early bird", "#F7DC8A"), hearts: 3 },
      { who: "samuel", text: "The house is so quiet after ten.", tag: tag("Night owl", "#B9B4E0"), hearts: 5 },
      { who: "joan", text: "My best energy is before lunch.", tag: tag("Early bird", "#F7DC8A"), hearts: 2 },
      { who: "liwei", text: "Owl by nature, bird by necessity.", tag: tag("Night owl", "#B9B4E0"), hearts: 9 },
      { who: "david", text: "Neither. I am an afternoon nap person.", hearts: 7 },
      { who: "priya", text: "With a cup of tea in hand.", tag: tag("Early bird", "#F7DC8A"), hearts: 2 },
    ],
  },
  {
    kind: "Picture", pre: "What's the ", key: "weather", post: " inside your head today?", placeholder: "Right now it is…",
    starters: ["Sunny", "Bright spells", "Cloudy", "A bit stormy"],
    answers: [
      { who: "david", text: "A few clouds after physio.", tag: tag("Bright spells", "#F3E3B5"), hearts: 4 },
      { who: "joan", text: "Foggy first thing, clearing now.", tag: tag("Cloudy", "#D9DEDF"), hearts: 3 },
      { who: "margaret", text: "My grandson visits today.", tag: tag("Sunny", "#F7DC8A"), hearts: 9 },
      { who: "anne", text: "Drizzle, but I have my umbrella.", tag: tag("Rainy", "#BCD3E6"), hearts: 5 },
      { who: "liwei", text: "Calm and overcast. No complaints.", tag: tag("Cloudy", "#D9DEDF"), hearts: 2 },
      { who: "tomasz", text: "Words were hard to find today.", tag: tag("Stormy", "#A3ADB8"), hearts: 6 },
      { who: "priya", text: "With a chance of naps.", tag: tag("Sunny", "#F7DC8A"), hearts: 4 },
      { who: "samuel", text: "Light rain. It will pass.", tag: tag("Rainy", "#BCD3E6"), hearts: 3 },
    ],
  },
  {
    kind: "Scale", pre: "How full is your ", key: "battery", post: " today?", placeholder: "Today it is about…",
    starters: ["Full", "About half", "Running low"],
    answers: [
      { who: "priya", text: "Saving the rest for my walk.", tag: tag("Half", "#A9CDB6"), hearts: 3 },
      { who: "samuel", text: "Slept badly. Taking it slow.", tag: tag("Low", "#CFE2D6"), hearts: 5 },
      { who: "joan", text: "Good night, good breakfast!", tag: tag("Full", "#2E7D5B"), hearts: 7 },
      { who: "david", text: "Three bars out of five.", tag: tag("Good", "#6FA98A"), hearts: 2 },
      { who: "anne", text: "Holding steady.", tag: tag("Half", "#A9CDB6"), hearts: 2 },
      { who: "tomasz", text: "Resting today, and that is fine.", tag: tag("Empty", "#E5EEE7"), hearts: 8 },
      { who: "liwei", text: "Charging. Ask me after lunch.", tag: tag("Low", "#CFE2D6"), hearts: 6 },
      { who: "margaret", text: "Enough for the garden.", tag: tag("Good", "#6FA98A"), hearts: 4 },
    ],
  },
  {
    kind: "Open answer", pre: "What's one ", key: "small win", post: " from this week?", placeholder: "This week I…",
    starters: ["Got dressed by myself", "Went for a walk", "Called a friend"],
    answers: [
      { who: "joan", text: "Buttoned my cardigan with both hands.", hearts: 11 },
      { who: "david", text: "Walked to the gate and back, twice.", hearts: 7 },
      { who: "margaret", text: "Made my own tea without spilling.", hearts: 9 },
      { who: "liwei", text: "Read a whole chapter in one sitting.", hearts: 5 },
      { who: "priya", text: "Phoned my sister and found every word.", hearts: 12 },
      { who: "samuel", text: "Did my exercises four days running.", hearts: 6 },
      { who: "anne", text: "Got up the stairs without stopping.", hearts: 8 },
      { who: "tomasz", text: "Wrote my name. It looked like mine.", hearts: 14 },
    ],
  },
  {
    kind: "Open answer", pre: "Name a ", key: "song", post: " that always lifts your mood.", placeholder: "Mine is…",
    starters: ["Here Comes the Sun", "Something by Abba", "An old hymn", "Anything from the sixties"],
    answers: [
      { who: "priya", text: "Que Sera, Sera. We sing it at choir.", tag: tag("Choir", "#E8836B"), hearts: 6 },
      { who: "margaret", text: "Moon River. Our first dance.", tag: tag("Sixties", "#F2C44D"), hearts: 9 },
      { who: "samuel", text: "Three Little Birds. Every little thing.", tag: tag("Reggae", "#6FA98A"), hearts: 7 },
      { who: "anne", text: "Dancing Queen, loud, in the kitchen.", tag: tag("Pop", "#B9B4E0"), hearts: 5 },
      { who: "david", text: "Here Comes the Sun. Never fails.", tag: tag("Sixties", "#F2C44D"), hearts: 4 },
      { who: "liwei", text: "My mother's favourite, on the radio.", hearts: 3 },
      { who: "joan", text: "Anything by Elvis, honestly.", tag: tag("Fifties", "#7FB4DB"), hearts: 4 },
      { who: "tomasz", text: "Dad's old jazz records on Sundays.", tag: tag("Jazz", "#2F8F83"), hearts: 5 },
    ],
  },
  {
    kind: "This or that", pre: "", key: "Tea", post: " or coffee, first thing?", placeholder: "For me it is…",
    starters: ["Tea, always", "Coffee, please", "Hot water and lemon"],
    answers: [
      { who: "joan", text: "Tea, milk in first. Fight me.", tag: tag("Tea", "#C9A27E"), hearts: 10 },
      { who: "tomasz", text: "Strong coffee, no sugar.", tag: tag("Coffee", "#6F4E37"), hearts: 4 },
      { who: "margaret", text: "A proper pot, and the good cups.", tag: tag("Tea", "#C9A27E"), hearts: 7 },
      { who: "liwei", text: "Green tea, quietly, by the window.", tag: tag("Tea", "#C9A27E"), hearts: 5 },
      { who: "david", text: "Coffee, then tea, then coffee.", tag: tag("Both", "#E8C07D"), hearts: 6 },
      { who: "priya", text: "Masala chai, my dad's way.", tag: tag("Tea", "#C9A27E"), hearts: 8 },
      { who: "samuel", text: "Coffee. The kettle takes too long.", tag: tag("Coffee", "#6F4E37"), hearts: 3 },
      { who: "anne", text: "Whatever someone else makes me.", hearts: 9 },
    ],
  },
  {
    kind: "Picture", pre: "If today were a ", key: "place", post: ", where would it be?", placeholder: "Today feels like…",
    starters: ["By the sea", "A quiet garden", "A busy market", "My own sofa"],
    answers: [
      { who: "anne", text: "A bench by the sea, wind and all.", tag: tag("Seaside", "#7FB4DB"), hearts: 6 },
      { who: "liwei", text: "A garden after rain.", tag: tag("Garden", "#9DBFA6"), hearts: 5 },
      { who: "david", text: "A muddy path with Biscuit.", tag: tag("Woods", "#5E8C61"), hearts: 7 },
      { who: "samuel", text: "My sofa, with the cricket on.", tag: tag("Home", "#E8C07D"), hearts: 4 },
      { who: "priya", text: "A market full of noise and colour.", tag: tag("Market", "#E8836B"), hearts: 3 },
      { who: "joan", text: "Whitby harbour, early morning.", tag: tag("Seaside", "#7FB4DB"), hearts: 8 },
      { who: "tomasz", text: "A library. Quiet, warm, slow.", tag: tag("Home", "#E8C07D"), hearts: 5 },
      { who: "margaret", text: "My windowsill, with the tomatoes.", tag: tag("Garden", "#9DBFA6"), hearts: 6 },
    ],
  },
  {
    kind: "Scale", pre: "How much ", key: "sleep", post: " did you get last night?", placeholder: "Last night I had…",
    starters: ["Plenty", "Some", "Not much"],
    answers: [
      { who: "tomasz", text: "Slept right through. First time in weeks!", tag: tag("Plenty", "#2E7D5B"), hearts: 12 },
      { who: "margaret", text: "Up twice, but back off quickly.", tag: tag("Some", "#A9CDB6"), hearts: 3 },
      { who: "samuel", text: "The neighbours' dog had other plans.", tag: tag("Not much", "#CFE2D6"), hearts: 6 },
      { who: "joan", text: "A good eight hours and a dream.", tag: tag("Plenty", "#2E7D5B"), hearts: 4 },
      { who: "anne", text: "Enough. A nap later, maybe.", tag: tag("Some", "#A9CDB6"), hearts: 2 },
      { who: "priya", text: "Woke at four with a song in my head.", tag: tag("Not much", "#CFE2D6"), hearts: 5 },
      { who: "liwei", text: "Like a baby, after the long walk.", tag: tag("Plenty", "#2E7D5B"), hearts: 4 },
      { who: "david", text: "Biscuit took the whole bed again.", tag: tag("Some", "#A9CDB6"), hearts: 7 },
    ],
  },
  {
    kind: "Open answer", pre: "Who made you ", key: "smile", post: " this week?", placeholder: "It was…",
    starters: ["My family", "A friend", "Someone here", "A stranger"],
    answers: [
      { who: "margaret", text: "My granddaughter, pouring the tea.", hearts: 9 },
      { who: "david", text: "Biscuit, stealing a whole sausage.", hearts: 11 },
      { who: "priya", text: "The choir, singing happy birthday to me.", hearts: 8 },
      { who: "tomasz", text: "Anne, telling me it gets lighter.", hearts: 7 },
      { who: "joan", text: "The postman, who always waves.", hearts: 4 },
      { who: "liwei", text: "My grandson with his chopsticks.", hearts: 6 },
      { who: "samuel", text: "My brother, dancing badly.", hearts: 5 },
      { who: "anne", text: "Everyone in the lounge on Tuesday.", hearts: 6 },
    ],
  },
  {
    kind: "Open answer", pre: "Name a ", key: "food", post: " that tastes like home.", placeholder: "For me it is…",
    starters: ["Sunday roast", "Soup", "Something from childhood"],
    answers: [
      { who: "liwei", text: "Dumplings, folded with my grandmother.", hearts: 8 },
      { who: "samuel", text: "Welsh cakes, warm off the griddle.", hearts: 6 },
      { who: "priya", text: "Dal and rice, and nothing else.", hearts: 7 },
      { who: "joan", text: "Fish and chips, eaten on the harbour.", hearts: 5 },
      { who: "tomasz", text: "Pierogi, the way my mum made them.", hearts: 9 },
      { who: "margaret", text: "A proper Sunday roast with gravy.", hearts: 6 },
      { who: "anne", text: "Cheese on toast. Always.", hearts: 4 },
      { who: "david", text: "My dad's stew, on a cold night.", hearts: 5 },
    ],
  },
  {
    kind: "This or that", pre: "The ", key: "sea", post: " or the mountains?", placeholder: "I would pick…",
    starters: ["The sea", "The mountains", "Both, please"],
    answers: [
      { who: "joan", text: "The sea, every time. Whitby forever.", tag: tag("Sea", "#7FB4DB"), hearts: 7 },
      { who: "tomasz", text: "The Tatras. I grew up near them.", tag: tag("Mountains", "#8C9A7B"), hearts: 6 },
      { who: "anne", text: "Paddling, not climbing.", tag: tag("Sea", "#7FB4DB"), hearts: 4 },
      { who: "david", text: "Hills, with a flask of tea.", tag: tag("Mountains", "#8C9A7B"), hearts: 5 },
      { who: "margaret", text: "A view of one from the other.", tag: tag("Both", "#E8C07D"), hearts: 8 },
      { who: "samuel", text: "The sea. Barbados, ideally.", tag: tag("Sea", "#7FB4DB"), hearts: 9 },
      { who: "liwei", text: "Mountains that look like paintings.", tag: tag("Mountains", "#8C9A7B"), hearts: 3 },
      { who: "priya", text: "Whichever has the ice cream.", hearts: 10 },
    ],
  },
];

export type DailyQuestion = DailyQuestionSpec & {
  /** "daily-2026-10-12": the day's question, where the person's answer is kept. */
  id: string;
  /** The whole question, as one line. */
  question: string;
  /** "Monday 12 October". */
  dateLabel: string;
};

const pad = (value: number) => String(value).padStart(2, "0");
const DAY_MS = 86_400_000;
/** The day the questions start going round from: the colour question on Monday 12 October 2026. */
const FIRST_DAY = Date.UTC(2026, 9, 12);

/** The day's question, by the calendar day on this device: it changes at midnight, and is the same all day. */
export function dailyQuestion(now = new Date()): DailyQuestion {
  const day = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const count = DAILY_QUESTIONS.length;
  const spec = DAILY_QUESTIONS[(((Math.round((day - FIRST_DAY) / DAY_MS)) % count) + count) % count];
  return {
    ...spec,
    id: `daily-${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`,
    question: `${spec.pre}${spec.key}${spec.post}`,
    dateLabel: now.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }),
  };
}

/** A Daily question's post id ("daily-2026-10-12"). */
export const isDailyPostId = (id: string) => /^daily-\d{4}-\d{2}-\d{2}$/.test(id);
