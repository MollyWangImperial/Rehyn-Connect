// The Sunday circle's events: social get-togethers, not about stroke, held every two days at 4 pm and going round
// ten kinds of event as a trial (a film review, a book club, watching football together and so on), so the ones
// people like can stay and new ones can follow their interests. Each event has its own topic, what everyone says as
// the teacup goes round, the answers the person can give with one tap, and its own lively scene behind the circle
// (CircleScene, by its `id`). They are examples, like everyone in My community.

import type { Gathering } from "@/lib/circle-gatherings";
import type { HostStanding } from "@/lib/circle-host";
import type { VoteChoice } from "@/lib/circle-vote";
import type { CircleSeat, PersonId } from "./community-samples";

export type CircleTheme = "film" | "books" | "football" | "music" | "quiz" | "travel" | "bake" | "garden" | "comedy" | "photos";

export type CircleEvent = {
  id: CircleTheme;
  name: string;
  /** What it is, in a few words ("Bring a film you love"). */
  detail: string;
  /** Today's topic, which Alira opens the circle with. */
  topic: string;
  /** What the person is asked when it is their turn to have their say. */
  shareLabel: string;
  /** Answers the person can give with one tap. They can also say it in their own words. */
  shareChoices: string[];
  /** What each one says as the teacup goes round. */
  lines: Record<Exclude<CircleSeat, "you">, string>;
};

export const CIRCLE_EVENTS: readonly CircleEvent[] = [
  {
    id: "film", name: "Film night", detail: "Bring a film you love, or one you saw this week",
    topic: "Which film could you watch again and again?",
    shareLabel: "Which film would you recommend?",
    shareChoices: ["The Sound of Music.", "Paddington 2.", "A good old western."],
    lines: {
      alira: "Welcome to film night! Which film could you watch again and again?",
      margaret: "The Sound of Music. I still sing along to every song.",
      david: "The Great Escape. My dad and I watched it every Christmas.",
      priya: "Mamma Mia! I can't sit still when it's on.",
      tomasz: "Paddington 2. Honestly, it's perfect.",
      joan: "Brief Encounter. They don't make them like that any more.",
      anne: "Anything with Judi Dench in it.",
      liwei: "Crouching Tiger. The fight in the trees is beautiful.",
      samuel: "Field of Dreams. It gets me every time.",
    },
  },
  {
    id: "books", name: "Book club", detail: "A book, a story or a favourite author",
    topic: "What's a book that has stayed with you?",
    shareLabel: "Which book would you pass on?",
    shareChoices: ["An Agatha Christie.", "A book of poems.", "The one I'm reading now."],
    lines: {
      alira: "Welcome to book club! What's a book that has stayed with you?",
      margaret: "Rebecca. I read it every few years and still gasp.",
      david: "Anything by Bill Bryson. He makes me laugh out loud.",
      priya: "The Secret Garden. My mum read it to me.",
      tomasz: "I listen to audiobooks now. A thriller, very gripping.",
      joan: "Agatha Christie. I never guess who did it.",
      anne: "A book of crosswords counts, doesn't it?",
      liwei: "Poems by Li Bai. My grandfather taught me them.",
      samuel: "A cricketer's life story. Better than it sounds!",
    },
  },
  {
    id: "football", name: "Football together", detail: "Watch the match together and cheer",
    topic: "Who are you cheering on today, and why?",
    shareLabel: "What's your prediction?",
    shareChoices: ["A home win.", "A draw, two each.", "I'm here for the company."],
    lines: {
      alira: "Welcome to football together! Who are you cheering on today?",
      margaret: "I don't follow it, but I love the singing.",
      david: "Leeds, always. Through thick and thin.",
      priya: "My nephew plays on Saturdays, so I'm learning the rules.",
      tomasz: "Poland, and whoever's playing well.",
      joan: "I'll cheer whoever scores first!",
      anne: "My husband's old team. I keep it going for him.",
      liwei: "I like the goalkeepers. Such brave saves.",
      samuel: "Cardiff City! My brother and I watch every match.",
    },
  },
  {
    id: "music", name: "Music memories", detail: "A song, and the memory that goes with it",
    topic: "Which song takes you straight back?",
    shareLabel: "Which song would you play us?",
    shareChoices: ["Something from the sixties.", "A song from my wedding.", "Anything I can dance to."],
    lines: {
      alira: "Welcome to music memories! Which song takes you straight back?",
      margaret: "Moon River. Our first dance, in 1962.",
      david: "Here Comes the Sun. Summer holidays in the car.",
      priya: "Que Sera, Sera. We sing it at choir.",
      tomasz: "My dad's old jazz records on Sunday mornings.",
      joan: "Anything by Elvis. I had such a crush.",
      anne: "Abba! Dancing round the kitchen.",
      liwei: "The Moon Represents My Heart. My mother's favourite.",
      samuel: "Bob Marley. Takes me right back to my twenties.",
    },
  },
  {
    id: "quiz", name: "Quiz night", detail: "A friendly quiz. No scores, just fun",
    topic: "First round: name a famous landmark.",
    shareLabel: "Your answer?",
    shareChoices: ["Big Ben.", "The Eiffel Tower.", "The Great Wall of China."],
    lines: {
      alira: "Welcome to quiz night! First round: name a famous landmark.",
      margaret: "Blackpool Tower!",
      david: "Stonehenge. I've walked round it twice.",
      priya: "The Taj Mahal.",
      tomasz: "Wawel Castle, in Kraków.",
      joan: "Whitby Abbey, of course.",
      anne: "The Roman Baths. Right on my doorstep.",
      liwei: "The Great Wall. I've stood on it.",
      samuel: "The Millennium Stadium!",
    },
  },
  {
    id: "travel", name: "Travel tales", detail: "Stories from places near and far",
    topic: "Where's a place you'd love to go back to?",
    shareLabel: "Where would you take us?",
    shareChoices: ["The seaside.", "The Lake District.", "Somewhere sunny."],
    lines: {
      alira: "Welcome to travel tales! Where's a place you'd love to go back to?",
      margaret: "Scarborough. Fish and chips on the sea front.",
      david: "The Yorkshire Dales. Biscuit loves it there too.",
      priya: "Goa, where my grandparents lived.",
      tomasz: "The Tatra mountains. I grew up near them.",
      joan: "A canal boat holiday we took in the eighties.",
      anne: "Paris in the spring, for our anniversary.",
      liwei: "Guilin. The mountains look like a painting.",
      samuel: "Barbados. My mother's island.",
    },
  },
  {
    id: "bake", name: "Bake and chat", detail: "Cakes, bakes and family recipes",
    topic: "What's the best thing you've ever baked, or eaten?",
    shareLabel: "What would you bake for us?",
    shareChoices: ["A Victoria sponge.", "Scones with jam.", "My mum's recipe."],
    lines: {
      alira: "Welcome to bake and chat! What's the best thing you've ever baked, or eaten?",
      margaret: "My lemon drizzle. The secret is lots of lemon.",
      david: "I can't bake, but I can eat a whole Bakewell tart.",
      priya: "My aunt's coconut barfi.",
      tomasz: "Pączki, Polish doughnuts. My grandmother's recipe.",
      joan: "Scones. Jam first, then cream, I'm afraid!",
      anne: "A Christmas cake I fed with brandy for weeks.",
      liwei: "Mooncakes. We make them every autumn.",
      samuel: "Welsh cakes, warm off the griddle.",
    },
  },
  {
    id: "garden", name: "Garden show-and-tell", detail: "Plants, flowers and windowsill wins",
    topic: "What's growing or flowering near you?",
    shareLabel: "What's growing at yours?",
    shareChoices: ["Tomatoes on the windowsill.", "Roses.", "Just a few herbs."],
    lines: {
      alira: "Welcome to garden show-and-tell! What's growing or flowering near you?",
      margaret: "Tomatoes! The first ones are ripe.",
      david: "Wild garlic all along the canal path.",
      priya: "Chillies on my windowsill. Very hot!",
      tomasz: "A little basil plant. It's still alive!",
      joan: "My sweet peas. The smell is wonderful.",
      anne: "The roses my husband planted, still going.",
      liwei: "Pak choi in pots on the balcony.",
      samuel: "My brother's runner beans. He's very proud.",
    },
  },
  {
    id: "comedy", name: "Comedy hour", detail: "Funny stories and favourite jokes",
    topic: "What always makes you laugh?",
    shareLabel: "What's made you laugh lately?",
    shareChoices: ["My grandchildren.", "An old sitcom.", "A terrible joke."],
    lines: {
      alira: "Welcome to comedy hour! What always makes you laugh?",
      margaret: "Morecambe and Wise. Bring me sunshine!",
      david: "Biscuit chasing his own tail.",
      priya: "My niece's knock-knock jokes. Terrible and brilliant.",
      tomasz: "Mr Bean. No words needed.",
      joan: "Dad's Army. Don't panic!",
      anne: "Only Fools and Horses. Lovely jubbly.",
      liwei: "My grandson trying to use chopsticks.",
      samuel: "My brother's dancing at weddings.",
    },
  },
  {
    id: "photos", name: "Photo stories", detail: "A photo, and the story behind it",
    topic: "Tell us about a photo you love.",
    shareLabel: "Which photo would you share?",
    shareChoices: ["My wedding day.", "A holiday snap.", "My first car."],
    lines: {
      alira: "Welcome to photo stories! Tell us about a photo you love.",
      margaret: "Me at sixteen on a motorbike. Nobody believes it.",
      david: "Biscuit as a puppy, asleep in a wellington boot.",
      priya: "All of us at my cousin's wedding, in every colour.",
      tomasz: "My first day at work, in a suit two sizes too big.",
      joan: "Whitby harbour at sunrise. I took it myself.",
      anne: "My sister and me on Weston beach, in 1958.",
      liwei: "My grandson's first steps, a bit blurry.",
      samuel: "My mother outside our house in Bridgetown.",
    },
  },
];

export const CIRCLE_EVENT_IDS = CIRCLE_EVENTS.map(event => event.id);

/** A new event every two days, at 4 pm, for an hour. */
export const CIRCLE_EVERY_DAYS = 2;
export const CIRCLE_HOUR = 16;
export const CIRCLE_MINUTES = 60;

/** One meeting of the circle: its event, and when it starts. */
export type CircleOccurrence = {
  /** "film-2026-10-14": the event and its day, for its reminder. */
  id: string;
  event: CircleEvent;
  start: Date;
};

const DAY_MS = 86_400_000;
/** The day the events start going round from (any fixed day). */
const FIRST_DAY = Date.UTC(2026, 0, 1);
const pad = (value: number) => String(value).padStart(2, "0");
/** Days since FIRST_DAY, by the calendar day on this device. */
const dayNumber = (date: Date) => Math.round((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - FIRST_DAY) / DAY_MS);

function occurrenceOn(day: number): CircleOccurrence {
  const count = CIRCLE_EVENTS.length;
  const event = CIRCLE_EVENTS[(((day / CIRCLE_EVERY_DAYS) % count) + count) % count];
  const start = new Date(2026, 0, 1 + day, CIRCLE_HOUR, 0, 0, 0);
  return { id: `${event.id}-${start.getFullYear()}-${pad(start.getMonth() + 1)}-${pad(start.getDate())}`, event, start };
}

/**
 * The meeting on now: today's, or (on the day between two) the last one, still open to drop into. `show` picks
 * one event's scene and talk instead (`?event=film` on the circle's address), to preview each of them.
 */
export function circleNow(now = new Date(), show: string | null = null): CircleOccurrence {
  const day = dayNumber(now);
  const current = occurrenceOn(day - (((day % CIRCLE_EVERY_DAYS) + CIRCLE_EVERY_DAYS) % CIRCLE_EVERY_DAYS));
  const shown = CIRCLE_EVENTS.find(event => event.id === show);
  return shown ? { ...current, event: shown } : current;
}

/** The event asked for in the address (`?event=film`), if any. */
export const eventInAddress = () => (typeof window === "undefined" ? null : new URLSearchParams(window.location.search).get("event"));

/** The meetings after the one on now, soonest first. */
export function circleComingUp(now = new Date(), count = 3): CircleOccurrence[] {
  const current = dayNumber(circleNow(now).start);
  return Array.from({ length: count }, (_, index) => occurrenceOn(current + CIRCLE_EVERY_DAYS * (index + 1)));
}

/** A meeting's reminder id ("film-2026-10-14"). */
export function isCircleOccurrenceId(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const match = /^([a-z]+)-(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  return !!match && (CIRCLE_EVENT_IDS as string[]).includes(match[1]);
}

/* -------------------------------------------------- events members host, between Alira's */

// Members can host their own get-togethers between Alira's (circle-gatherings.ts has the rules on who
// sees them). These are examples, placed a few days from today so the preview always has some ahead.

/** A time a number of days from `now`, at a given hour and minute, on this device. */
const daysOn = (now: Date, days: number, hour: number, minute = 0) => new Date(now.getFullYear(), now.getMonth(), now.getDate() + days, hour, minute).getTime();

type SampleGathering = Omit<Gathering, "start"> & { days: number; hour: number; minute?: number };

const memberSamples: SampleGathering[] = [
  {
    id: "m-priya-late", name: "Late lounge: games and chat", detail: "Word games, music and whatever's on your mind. Cameras optional",
    days: 2, hour: 20, minutes: 90, format: "open", repeats: "once", host: { kind: "member", who: "priya", age: 29 }, access: "public", invited: [], bringFriend: false,
    audience: ["under35"], communities: ["everyone"], seats: 20, going: 5, faces: ["tomasz", "anne"],
  },
  {
    id: "a-carers", name: "Carers' coffee morning", detail: "For partners, children and friends who care for someone. Bring a cuppa",
    days: 3, hour: 10, minutes: 60, format: "teacup", repeats: "weekly", host: { kind: "alira" }, access: "public", invited: [], bringFriend: false,
    audience: ["carers"], communities: ["everyone"], seats: 20, going: 7, faces: ["joan", "liwei"],
  },
  {
    id: "m-david-film", name: "Film club: pick November's film", detail: "Bring a film you'd watch twice",
    days: 3, hour: 19, minutes: 60, format: "open", repeats: "monthly", host: { kind: "member", who: "david" }, access: "friends",
    invited: ["you", "margaret", "tomasz", "joan", "anne", "samuel"], bringFriend: false,
    audience: ["all"], communities: ["stroke"], seats: 8, going: 4, faces: ["margaret", "tomasz"],
  },
  {
    // Friends only, and the person isn't one of the friends Priya picked: it never shows for them.
    id: "m-priya-birthday", name: "Priya's birthday quiz", detail: "Silly questions and cake",
    days: 4, hour: 19, minutes: 60, format: "game", repeats: "once", host: { kind: "member", who: "priya", age: 29 }, access: "friends",
    invited: ["margaret", "samuel"], bringFriend: false, audience: ["all"], communities: ["everyone"], seats: 8, going: 2, faces: ["margaret", "samuel"],
  },
  {
    id: "m-liwei-walk", name: "Walk and talk, wherever you are", detail: "Pop your earphones in and walk, roll or sit outside while we chat",
    days: 4, hour: 18, minutes: 30, format: "voice", repeats: "weekly", host: { kind: "member", who: "liwei" }, access: "public", invited: [], bringFriend: false,
    audience: ["all"], communities: ["parkinsons", "stroke"], seats: 12, going: 3, faces: ["samuel"],
  },
  {
    id: "m-anne-work", name: "Back to work: how did you do it?", detail: "Lunchtime. Phased returns, telling your boss, the tiring days",
    days: 5, hour: 12, minute: 30, minutes: 30, format: "teacup", repeats: "weekly", host: { kind: "member", who: "anne" }, access: "public", invited: [], bringFriend: false,
    audience: ["35to60"], communities: ["everyone"], seats: 12, going: 6, faces: ["tomasz", "david"],
  },
  {
    id: "m-samuel-cook", name: "One-handed cooking swap", detail: "Tips, gadgets and recipes that work with one good hand",
    days: 6, hour: 11, minutes: 45, format: "open", repeats: "fortnightly", host: { kind: "member", who: "samuel" }, access: "invite", invited: [], bringFriend: false,
    audience: ["all"], communities: ["stroke", "brain"], seats: 8, going: 4, faces: ["joan", "priya"],
  },
  {
    id: "a-newly", name: "Newly diagnosed? Ask us anything", detail: "People a year or two ahead of you answer the questions you haven't asked yet",
    days: 7, hour: 19, minute: 30, minutes: 60, format: "teacup", repeats: "once", host: { kind: "alira", with: "samuel" }, access: "public", invited: [], bringFriend: false,
    audience: ["newly"], communities: ["ms"], seats: 20, going: 2, faces: ["samuel"],
  },
  // The person's own: one on now (it repeats every week), and one later.
  {
    id: "y-crossword", name: "Crossword club", detail: "Bring a clue that's stumped you, or one you're proud of solving",
    days: 0, hour: -1, minutes: 60, format: "open", repeats: "weekly", host: { kind: "member", who: "you" }, access: "friends",
    invited: ["margaret", "david", "anne", "joan"], bringFriend: true, audience: ["over60"], communities: ["stroke"], seats: 8, going: 3, faces: ["margaret", "david", "anne"],
  },
  {
    id: "y-grandparents", name: "Grandparents' hour: games to play one-handed", detail: "Card games, dominoes and word games you can play with the grandchildren",
    days: 10, hour: 11, minutes: 60, format: "teacup", repeats: "once", host: { kind: "member", who: "you" }, access: "public", invited: [], bringFriend: false,
    audience: ["all"], communities: ["everyone"], seats: 20, going: 9, faces: ["joan", "samuel", "priya"],
  },
  // One the person went to, for "Past".
  {
    id: "m-joan-garden", name: "Windowsill growers", detail: "Seedlings, cuttings and what's flowering",
    days: -3, hour: 15, minutes: 45, format: "teacup", repeats: "once", host: { kind: "member", who: "joan" }, access: "public", invited: [], bringFriend: false,
    audience: ["over60"], communities: ["everyone"], seats: 12, going: 8, faces: ["margaret", "anne"],
  },
];

/** The events the person is going to when the preview starts. Friends-only invitations wait for an answer. */
export const SAMPLE_GOING = ["m-anne-work", "m-joan-garden"];
/** Members with a sample "Hosts …" line, for co-hosting. */
export const SAMPLE_HOSTS: Partial<Record<PersonId, string>> = { margaret: "Hosts Crossword club with you", david: "Hosts Film club", anne: "Hosts Back to work", priya: "Hosts Late lounge" };

const HALF_HOUR = 30 * 60_000;

/**
 * Every event for Coming up and My events: Alira's every-two-days get-togethers (as `circleComingUp` gives them),
 * Alira's other ones, and the ones members host. The person's own circle that is on now began on the last half hour.
 */
export function sampleGatherings(now = new Date()): Gathering[] {
  const going = [12, 14, 9, 11];
  const faces: PersonId[][] = [["margaret", "joan", "samuel"], ["margaret", "david", "priya"], ["margaret", "joan"], ["david", "liwei"]];
  const alira: Gathering[] = circleComingUp(now, 4).map((item, index) => ({
    id: item.id, name: item.event.name, detail: item.event.detail, start: item.start.getTime(), minutes: CIRCLE_MINUTES, format: "teacup", repeats: "once",
    host: { kind: "alira" }, access: "public", invited: [], bringFriend: false, audience: ["all"], communities: ["everyone"], seats: 20,
    going: going[index], faces: faces[index], theme: item.event.id,
  }));
  const members: Gathering[] = memberSamples.map(({ days, hour, minute, ...event }) => ({
    ...event, start: hour < 0 ? Math.floor(now.getTime() / HALF_HOUR) * HALF_HOUR : daysOn(now, days, hour, minute ?? 0),
  }));
  return [...alira, ...members];
}

/* ------------------------------------------- member circles on now, with the vote to remove */

/** Someone in a member circle who isn't one of the example people: Rob, who keeps talking over. */
export type CircleGuestId = "rob";
export const circleGuests: Record<CircleGuestId, { name: string; initial: string; tint: string; ink: string; about: string }> = {
  rob: { name: "Rob", initial: "R", tint: "#E8D9F3", ink: "#4A2D6E", about: "Joined 12 min ago · his 2nd circle" },
};
export type RoomSeat = PersonId | "alira" | "you" | CircleGuestId;
export type MemberRoomId = "work" | "crossword";

export type MemberRoom = {
  id: MemberRoomId;
  /** Its event in Coming up and My events. */
  eventId: string;
  name: string;
  /** "Member circle · Monday lunchtime". */
  label: string;
  question: string;
  host: PersonId | "you";
  /** The seats, the host first and Alira (helping) beside them. The teacup goes round in this order. */
  seats: RoomSeat[];
  freeSeats: number;
  /** What each one says when the teacup reaches them. */
  lines: Partial<Record<RoomSeat, string>>;
  /** Rob speaking over whoever holds the teacup. */
  over: string[];
  /** Rob's words when the circle is asked about him. */
  reply: string;
  /** How the others would vote if asked about Rob. About anyone else, they'd say no. */
  ballots: Partial<Record<RoomSeat, VoteChoice>>;
};

export const MEMBER_ROOMS: Record<MemberRoomId, MemberRoom> = {
  work: {
    id: "work", eventId: "m-anne-work", name: "Back to work: how did you do it?", label: "Member circle · lunchtime",
    question: "What did you tell your boss first?", host: "anne",
    seats: ["anne", "alira", "tomasz", "david", "rob", "priya", "samuel", "joan", "you"], freeSeats: 3,
    lines: {
      anne: "Welcome everyone. What did you tell your boss first?",
      tomasz: "I asked for mornings only for the first month. My manager said yes before I'd finished the sentence.",
      david: "That I'd need the lift, not the stairs. Felt silly saying it. Wasn't.",
      rob: "I just told them I'd be back when I'm back.",
      priya: "I wrote it down first. Saying it out loud was easier with notes.",
      samuel: "That some days I'd be slower, and that was the stroke, not me.",
      joan: "I'd retired already. But I told my old boss I missed the tea.",
    },
    over: ["Honestly, you should all just quit. I did.", "Bosses never listen anyway.", "Can we get to me now?"],
    reply: "Sorry, I didn't realise how it worked. I'll wait for the teacup.",
    ballots: { anne: "yes", tomasz: "yes", david: "no", priya: "yes", samuel: "pass", joan: "yes" },
  },
  crossword: {
    id: "crossword", eventId: "y-crossword", name: "Crossword club", label: "Member circle · your friends",
    question: "Which clue has stumped you this week?", host: "you",
    seats: ["you", "alira", "margaret", "david", "anne", "rob", "joan"], freeSeats: 1,
    lines: {
      alira: "Welcome to crossword club. Bring a clue that's stumped you, or one you're proud of solving.",
      margaret: "Seven letters, 'a hot drink in a circle'. I've been stuck since breakfast.",
      david: "I do the quick one with Biscuit on my knee. He's no help at all.",
      anne: "I've started doing them left-handed. Slow, but I get there.",
      rob: "I only came for the biscuits, honestly.",
      joan: "My husband and I did the Sunday one together for forty years.",
    },
    over: ["Just look the answers up, it's quicker.", "This is boring. Can we do something else?", "Come on, hurry up."],
    reply: "Sorry. I came with Joan and didn't know the rules. I'll wait my turn.",
    ballots: { margaret: "yes", david: "yes", anne: "no", joan: "yes" },
  },
};
export const MEMBER_ROOM_IDS = Object.keys(MEMBER_ROOMS) as MemberRoomId[];

/**
 * The person's host standing in the preview. A settled member (41 days, seven circles, no reports) can host; with
 * `?host=new` on the address they are three days in and have stayed for one circle, to see the "not quite yet" page.
 * Their last post on this device counts as being active.
 */
export function sampleHostStanding(now: number, isNew: boolean, lastPost: number | null): HostStanding {
  const DAY = 86_400_000;
  const sample = isNew ? now - DAY : now - 2 * DAY;
  const lastActive = lastPost !== null && lastPost > sample ? { at: lastPost, what: "posted" } : { at: sample, what: "posted" };
  return isNew
    ? { memberSince: now - 3 * DAY, circleMinutes: [25, 6], lastActive, upheld: [], votedOut: [], wellAttended: 0 }
    : { memberSince: now - 41 * DAY, circleMinutes: [60, 45, 30, 22, 60, 15, 40], lastActive, upheld: [], votedOut: [], wellAttended: 1 };
}
