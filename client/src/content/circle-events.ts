// The Sunday circle's events: social get-togethers, not about stroke, held every two days at 4 pm and going round
// ten kinds of event as a trial (a film review, a book club, watching football together and so on), so the ones
// people like can stay and new ones can follow their interests. Each event has its own topic, what everyone says as
// the teacup goes round, the answers the person can give with one tap, and its own lively scene behind the circle
// (CircleScene, by its `id`). They are examples, like everyone in My community.

import type { CircleSeat } from "./community-samples";

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
